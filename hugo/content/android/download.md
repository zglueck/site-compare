+++
date = "2017-06-21T00:04:55-04:00"
draft = false
title = "World Wind Android"
projectSlug = "android"
layout = "project"
+++

To add World Wind to your Gradle project, grab the latest release version from JCenter:

```
compile 'gov.nasa.worldwind.android:worldwind:{{< latestBintrayVersion url="https://api.bintray.com/packages/nasaworldwind/maven/WorldWindAndroid/versions/_latest" >}}'
```

For developers, the lastest ```SNAPSHOT``` version is hosted at the [OJO](https://oss.jfrog.org/). Add the repository:
```
repositories (
    maven (
        url 'https://oss.jfrog.org/artifactory/oss-snapshot-local/'
    )
)
```

The latest ```SNAPSHOT``` version is:
```
compile 'gov.nasa.worldwind.android:worldwind:{{< latestOjoVersion url="https://oss.jfrog.org/artifactory/api/search/versions?g=gov.nasa.worldwind.android&a=worldwind&repos=oss-snapshot-local" >}}'
```

Issues and help can be found at GitHub and the forum.