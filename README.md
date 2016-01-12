# less-plugin-future-compat [![NPM Version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

> Less.js plugin to avoid conflicts with future CSS features.

Less.js will attempt to use its own internal functions such as `color()` and will result in errors preventing you from compiling your code. This library removes those functions so that your future CSS code is compatible and ready for a post-processor.


## Installation

[Node.js](http://nodejs.org/) `>= 4` is required. To install, type this at the command line:
```shell
npm install less-plugin-future-compat
```

## Usage
```js
var futureCompat = require("less-plugin-future-compat");
var options = { plugins: [futureCompat] };

less.render(lessInput, options).then( function(output) {
	// Pass through to post-processor
});
```


[npm-image]: https://img.shields.io/npm/v/less-plugin-future-compat.svg
[npm-url]: https://npmjs.org/package/less-plugin-future-compat
[travis-image]: https://img.shields.io/travis/stevenvachon/less-plugin-future-compat.svg
[travis-url]: https://travis-ci.org/stevenvachon/less-plugin-future-compat
