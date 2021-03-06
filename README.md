# loremize

[![Build Status](https://travis-ci.org/Kaishiyoku/loremize.svg?branch=master)](https://travis-ci.org/Kaishiyoku/loremize)
[![npm version](https://badge.fury.io/js/loremize.svg)](https://www.npmjs.com/package/loremize)

Simple JavaScript-based sample text generator.

Table of contents
=================
* [Installation](#installation)
* [Breaking changes](#breaking-changes)
* [License](#license)
* [Author](#author)

Installation
============
`npm install --save loremize`

Breaking changes
================

1.x.x > 2.x.x
-------------

TLDR;

- `loremizeSentences` is now called `loremizeIpsumSentences`
- instead of using `loremizeWords` use either `loremizeGreekDeities`, `loremizeRomanDeities` or `loremizeGermanicDeities`


The function `getRandomWord` now requires a list of items to work:  
```javascript
getRandomWord: Function (items: Array<string>) => ();
```

Similar to that the `loremizeSentences` also requires a list of items to work:
```javascript
loremizeSentences: Function (items: Array<string>) => (numberOfSentences: number, lowerBound: number, upperBound: number, asArray: boolean = false)
```

Same for the `loremizeWords` function; please note that now different delimiters are being used, depending on the item list:
```javascript
loremizeWords: Function (items: Array<string>, delimiter: string = ' ') => (numberOfWords: number, asArray: boolean = false)
```

The `loremizeSentences` and `loremizeWords` functions should no longer be called, instead use the item-list-specific pendants:
`loremizeIpsumSentences`, `loremizeIpsums`, `loremizeGreekDeities`, `loremizerRomanDeities`, `loremizeGermanicDeities`

License
=======
MIT (https://github.com/Kaishiyoku/loremize/blob/master/LICENSE)


Author
======
Twitter: [@kaishiyoku](https://twitter.com/kaishiyoku)  
Website: www.andreas-wiedel.de
