var Metalsmith  = require('metalsmith');
var markdown    = require('metalsmith-markdown');
var layouts     = require('metalsmith-layouts');
var permalinks  = require('metalsmith-permalinks');
var request     = require('request');

var metadataBuilder = function () {
  var expectedMetadataValues = 2;
  var metadata = {};

  return {
    addValueAndCheck: function (key, value) {
      metadata[key] = value;
      if (Object.keys(metadata).length >= expectedMetadataValues) {
        buildSite(metadata);
      }
    }
  }
}();

// retrieve WWA version information from Bintray API
var androidBintray = 'https://api.bintray.com/packages/nasaworldwind/maven/WorldWindAndroid/versions/_latest';
request(androidBintray, function(err, response, body) {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  var bintrayLatestVersion = JSON.parse(body);
  if (bintrayLatestVersion.name) {
    metadataBuilder.addValueAndCheck("androidBintrayVersion", bintrayLatestVersion.name);
  } else {
    console.error('Unexpected API return from Bintray-Android');
    process.exit(1);
  }
});

// retrieve WWA SNAPSHOT version information from OJO
var androidOjo = 'https://oss.jfrog.org/artifactory/api/search/versions?g=gov.nasa.worldwind.android&a=worldwind&repos=oss-snapshot-local';
request(androidOjo, function(err, response, body) {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  var ojoLatestVersion = JSON.parse(body);
  if (ojoLatestVersion.results && ojoLatestVersion.results.length > 0 && ojoLatestVersion.results[0].version) {
    metadataBuilder.addValueAndCheck("androidOjoVersion", ojoLatestVersion.results[0].version);
  } else {
    console.error('Unexpected API return from OJO-Android');
    process.exit(1);
  }
});

function buildSite (metadata) {
  console.log('Attempting to build site...');
  Metalsmith(__dirname)
    .metadata(metadata)
    .source('./src')
    .destination('./build')
    .clean(true)
    .use(markdown())
    .use(permalinks())
    .use(layouts({
      engine: 'handlebars',
      partials: './layouts/partials'
    }))
    .build(function(err, files) {
      if (err) { throw err; }
    });
}
