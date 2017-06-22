# README

The three static site generators under evaulation are in the matching named directories. Installation instructions are provided in the individual generator directories README. Instructions regarding the steps needed to complete the tasks outlined below are also provided in the project specific README.

## Evaluation Tasks
1. Add Dynamic Content
  - Provide the information at build from an API
2. Add a Tutorial
  - Add a basic tutorial
  - ~~Add a more advanced tutorial with html~~ (TODO at a later time)
3. Demonstrate Content Types
  - Add a non-markdown file to the content

All three projects will use a similar [Bootswatch](https://bootswatch.com/) theme and should have the same general layout. Due to being sub-folders, the links on the sites themselves will not work. The path ```site-compare``` needs to be injected between the root GitHub pages url and relative path in each project is required. Links to pertanent examples are provided below.

### [Hugo](https://zglueck.github.io/site-compare/hugo)
- [Android Project](https://zglueck.github.io/site-compare/hugo/android)
- [Android Download](https://zglueck.github.io/site-compare/hugo/android/download)
- [Android Tutorial List](https://zglueck.github.io/site-compare/hugo/android-downloads)

### [Jekyll](https://zglueck.github.io/site-compare/jekyll)
- [Android Project](https://zglueck.github.io/site-compare/jekyll/android)
- [Android Download](https://zglueck.github.io/site-compare/jekyll/android/download)
- [Android Tutorial List](https://zglueck.github.io/site-compare/jekyll/android/tutorials)

### Metalsmith
I didn't get a chance to setup CI publishing. To build the site locally:
```
$ cd metalsmith
$ npm install
$ node index.js
```
Output goes to the ```build``` directory.