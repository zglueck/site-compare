# Metalsmith

## Install
Metalsmith and it's dependencies are specified in the ```package.json``` file. Running ```npm install``` will install and allow for generating the site when the node project is built/run.

## Note
The links on the site work when running locally, but on gh-pages, you'll need to prepend the ```site-compare/``` manually in the url.

## Task Instructions
1. Metalsmith and Handlebars (the default template engine) have the same limitation and work around of Jekyll. You cannot specify dynamic content in the markdown, but you can get creative with templates, or apply front matter to html templates. Metalsmith has the advantage of being tightly coupled to a node environment. We can retrieve our API version information and pass it to Metalsmith when it builds the website. This skips the download required by vanilla Jekyll.

2. To add a tutorial, simply add a markdown file in the ```android-tutorials``` directory by running the following command:
```hugo new android-tutorials/<tutorial-name>```
By using the ```hugo new``` command, you leverage the [archetype](http://gohugo.io/content/archetypes/) which add boilerplate front matter used by the list renderer.

3. Identical to Jekyll. You can use templates/partials and front matter.