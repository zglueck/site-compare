# Jekyll

## Install
See the instructions at Jekyll's site: [https://jekyllrb.com/docs/installation/](https://jekyllrb.com/docs/installation/)

## Note
The links on the site work when running locally, but on gh-pages, you'll need to prepend the ```site-compare/``` manually in the url.

## Task Instructions
1. The json files containing the version data need to be downloaded to the ```_data``` directory before the site build. Values from the data files can be accessed using the template syntax inside the markdown (e.g. {{ site.data.latestBintrayVersion.name }}). This is the most flexible and simple approach off all three options. Check out the example [download](https://github.com/zglueck/site-compare/blob/master/jekyll/android/download.md) markdown entry to see an example.

2. To add a tutorial, simply add a markdown file in the ```_android-tutorials``` directory. Be sure to add ```title``` and ```tutorialTitle``` frontmatter to your markdown as these properties are used in the page renderer. As a note, creating additional content is identical between Hugo and Jekyll, the initial setup is a little different.

3. Similar to Hugo, you can specify pure html with includes. The advantage Jekyll poses is allowing front matter to specified. Front matter can specify the template, unlike Hugo, which reverts to using the directory lookup approach. A prime Jekyll example is the ```index.html``` file at the root.