---
title: World Wind Android
layout: project
inPlace: true
---

To add World Wind to your Gradle project, grab the latest release version from JCenter:

```
compile 'gov.nasa.worldwind.android:worldwind:{{ androidBintrayVersion }}'
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
compile 'gov.nasa.worldwind.android:worldwind:{{ androidBintrayVersion }}'
```

Issues and help can be found at GitHub and the forum.

