# [jQuery](https://jquery.com/)-New Wave JavaScript

[![license](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fjquery%2Fjquery.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fjquery%2Fjquery?ref=badge_shield)

[![Gitter](https://badges.gitter.im/jquery/jquery.svg)](https://gitter.im/jquery/jquery?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
## Contribution Guides
--------------------------
In the spririt of open sourse software development,jQuery always encourages community code cintribution. To help you get started and before you jump into writing code ,be sure to read these important contribution guidelines thoroughly:<br>
1. [Getting Involved](https://contribute.jquery.org/)
2. [Core Style Guide](https://contribute.jquery.org/style-guide/js/)
3. [Writing Code for jQuery Foundation Projects](https://contribute.jquery.org/code/)
## Environments in which to use jQuery
---
- [Browser support](https://jquery.com/browser-support/)
- jQuery also supports Node,browser extensions,and other non-browser environments.
## What you need to build your own jQuery
---
To build jQuery,you need to have the latest Node.js/npm and git 1.7 or later. Earlier versions might work,bot are not supported.

For Windows, you have to download and install [git](https://git-scm.com/downloads) and [Node.js](https://nodejs.org/en/download/).

OS X users should install [Homebrew](https://brew.sh/).Once Homebrew is installed ,run `brew install git` to install git, and `brew install node` to install Node.js.

Linux/BSD users should use their appropriate package managers to install git and Node.js, or build from source if you swing that way.Easy-peasy.
## How to build your own jQuery 
---
Clone a copy of the main jQuery git repo by running:
```
git clone git://github.com/jquery/jquery.git
```
Enter the jquery directory and run the build script:
```cmd
cd jquery && npm run build
```
The built version of jQuery will be put in the `dist/` subdirectory, along with the minified copy and associated map file.

If you want to create custom build or help with jQuery development, it would be better to install [grunt command line interface] as a global package:
```
npm install -g grunt-cli
```
Make sure you have `grunt` installed by testing:
```
grunt -V
```
Now by running the `grunt` command,in the jquery directory,you can build a full verson of jQuery, just like with an `npm run build` command:
```
grunt
```
There are many other tasks available for jQuery Core:
```
grunt -help 
```
## Modules
Special builds can be created that exclude subset of jQuery functionality.This allows for smaller custom builds when the builder is certain that those parts of jQuery are not being used.For example, an app that only used JSONP for `$.ajax() and did not need to calculate offsets or positions of elements could exclude the offset and ajax/xhr modules.

Any mode may be excuded except for `core`, and `selector`. To exclude a module,pass its path relative to the `src` folder(without the `.js` extension).

Some example modules that can be excuded are:

- **ajax**:ALL AJAX functionality:`$.ajax`,`$.get()`,`$.post`,`$.ajaxSetup()`,`.load()`,transports,and ajax event shorthands such as `.ajaxStart()`.
- **ajax/xhr**:The XMLHTTPRequest AJAX transport only.
- **ajax/script**:The `<script>` AJAX transport only;used to retrieve scripts.
- **ajax/jsonp**:The JSONP AJAX transport only;depends on the ajax/script transport.
- **css/showHide**:Non-animated `.show()`,`hide()` and `.toggle()`;can be excluded if you use classes or explicit `.css()` calls to set the `display` property.Also removes the **effects**module.

## AMD name
As an option, you can set the module name for jQuery's AMD definition.By default, it is set to "jquery",which playsnicely with plugins and third-party libraries, but there may be cases where you'd like to change this.Simply set the `"amd"` option:
```
frunt custom --amd="custom-name"
```
## Questions?
If you have any questions,please feel free to ask on the [Developing jQuery Core forum](https://forum.jquery.com/developing-jquery-core) or in #jquery on  irc.freenode.net.
