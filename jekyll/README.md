# Jekyll

## Install
See the instructions at Jekyll's site: [https://jekyllrb.com/docs/installation/](https://jekyllrb.com/docs/installation/)

## Note
The links on the site work when running locally, but on gh-pages, you'll need to prepend the ```site-compare/``` manually in the url.

## Task Instructions
1. In Hugo, we used custom shortcodes to inject dynamic content into markdown. In my review of Jekyll documentation, this isn't available out of the box, but is available via plugins (see the discussion [here](https://gohugo.io/tutorials/migrate-from-jekyll/#convert-jekyll-plugins-to-hugo-shortcodes)). Plugins are disabled if publishing through GitHub, but not Travis. I am not sure if there is a plugin that would do exactly what we are doing in Hugo, so I've a template approach for Jekyll. The limitation of this approach is we can't inject dynamic snippets of html into the markdown, so we end up authoring a portion of the content in the template. That means, if you want to change the look and content of the Download page, you'll likely be directly interacting with html rather than markdown. Additionally, the json containing the data we use to populate the version information will need to be retrieved outside of Jekyll. Again, this task likely could be completed with a custom Jekyll plugin, but in the interest of time, I've deferred.

To add dynamic content, create a custom template utilizing the template capabilities to read data files from the ```_data``` directory. See the ```_layouts/latestBintrayVersion.html```

2. To add a tutorial, simply add a markdown file in the ```android-tutorials``` directory by running the following command:
```hugo new android-tutorials/<tutorial-name>```
By using the ```hugo new``` command, you leverage the [archetype](http://gohugo.io/content/archetypes/) which add boilerplate front matter used by the list renderer.

3. You can add pure html, even html leveraging templates, partials, or block templates (this is contrary to what I reported). One special note though, if you use html, then you can't specify the layout and are at the mercy of the Hugo automatic layout lookup.