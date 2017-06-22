# Metalsmith

## Install
Metalsmith and it's dependencies are specified in the ```package.json``` file. Running ```npm install``` will install and allow for generating the site when the node project is built/run.

## Note
The links on the site work when running locally, but on gh-pages, you'll need to prepend the ```site-compare/``` manually in the url.

## Task Instructions
1. Metalsmith and Handlebars (the default template engine) cannot specify dynamic content in the markdown, but you can get creative with templates, or apply front matter to html templates. Metalsmith has the advantage of being tightly coupled to a node environment. We can retrieve our API version information and pass it to Metalsmith when it builds the website. This skips the download required by vanilla Jekyll.

2. To add a tutorial, add the a markdown file to the ```src/android/tutorials/``` directory. Metalsmith was the most flexible of the static site generators in terms of setting up a list of pages. Unlike Hugo and Jekyll, tt doesn't matter where in your project structure the collection is. You can explicitly define the templates.

3. Identical to Jekyll. You can use templates/partials and front matter.