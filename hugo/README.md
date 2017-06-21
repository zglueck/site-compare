# Hugo

## Install
Grab the latest Hugo executable from:
- GitHub: [https://github.com/gohugoio/hugo/releases](https://github.com/gohugoio/hugo/releases)
- Brew: ```brew install hugo```

## Note
The links on the site work when running locally, but on gh-pages, you'll need to prepend the ```site-compare/``` manually in the url.

## Task Instructions
1. To add dynamic content inside of a markdown document you use [shortcodes](http://gohugo.io/extras/shortcodes/). In the markdown, you specify the name of the short code, and then any variables required by the shortcode. It looks like this:
```
{{< shortCodeName url="https://google.com" >}}
```
You must put the corresponding template with html in the ```layouts/shortcode``` directory.
2. To add a tutorial, simply add a markdown file in the ```android-tutorials``` directory by running the following command:
```hugo new android-tutorials/<tutorial-name>```
By using the ```hugo new``` command, you leverage the [archetype](http://gohugo.io/content/archetypes/) which add boilerplate front matter used by the list renderer.
3. You can add pure html, even html leveraging templates, partials, or block templates (this is contrary to what I reported). One special note though, if you use html, then you can't specify the layout and are at the mercy of the Hugo automatic layout lookup.