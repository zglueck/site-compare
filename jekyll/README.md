# Jekyll

## Install
See the instructions at Jekyll's site: [https://jekyllrb.com/docs/installation/](https://jekyllrb.com/docs/installation/)

## Note
The links on the site work when running locally, but on gh-pages, you'll need to prepend the ```site-compare/``` manually in the url.

## Task Instructions
1. In Hugo, we used custom shortcodes to inject dynamic content into markdown. In my review of Jekyll documentation, this isn't available out of the box, but is available via plugins (see the discussion [here](https://gohugo.io/tutorials/migrate-from-jekyll/#convert-jekyll-plugins-to-hugo-shortcodes)). Plugins are disabled if publishing through GitHub, but not Travis. I am not sure if there is a plugin that would do exactly what we are doing in Hugo, so I've used a template approach for Jekyll. The limitation of this approach is we can't inject dynamic snippets of html into the markdown, so we end up authoring a portion of the content in the template. That means, if you want to change the look and content of the Download page, you'll likely be directly interacting with html rather than markdown. Additionally, the json containing the data we use to populate the version information will need to be retrieved outside of Jekyll. Again, this task likely could be completed with a custom Jekyll plugin, but in the interest of time, I've deferred.
To add dynamic content, create a custom template utilizing the template capabilities to read data files from the ```_data``` directory. See the ```_layouts/latestBintrayVersion.html```

2. To add a tutorial, simply add a markdown file in the ```_android-tutorials``` directory. Be sure to add ```title``` and ```tutorialTitle``` frontmatter to your markdown as these properties are used in the page renderer. As a note, creating additional content is identical between Hugo and Jekyll, the initial setup is a little different.

3. Similar to Hugo, you can specify pure html with includes. The advantage Jekyll poses is allowing front matter to specified. Front matter can specify the template, unlike Hugo, which reverts to using the directory lookup approach. A prime Jekyll example is the ```index.html``` file at the root. Please note, this approach could be leveraged for task number one. You would not author any content in markdown but would have the full flexibility of html and inheritance and extensibility of front matter.