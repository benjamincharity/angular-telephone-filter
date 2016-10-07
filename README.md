# angular-telephone-filter

:phone: 🇺🇸 A simple AngularJS filter to clean or format a US telephone number.

[![MIT License][license_image]][license_url] [![NPM version][npm_version_image]][npm_url]

> [:tv: Demo][demos]

_[Comments and Pull Requests welcome!][issues]_

---

## Contents

- [Installation](#installation)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [Development](#development)


## Installation

#### NPM

```bash
$ npm install angular-telephone-filter --save
```

#### Bower

```bash
$ bower install angular-telephone-filter --save
```

Or, include the JavaScript file in the head of your document:

```html
<script src="/path/to/file/angular-telephone-filter.js"></script>
```

Include the module as a dependency of your application:

```javascript
angular.module('myModule', ['bc.TelephoneFilter']);
```


## Dependencies

- Angular.js (^1.4.0)


## Usage

The filter expects a single parameter to be passed in to control the filter direction. A parameter
of `clean` will return only the numbers (ie `1235551234`) while the `format` parameter will direct
the filter to output the formatted number (ie `(123) 555-1234`);

#### Use in HTML:

```html
<p>{{'4045551234' | bcTelephone:'format'}}</p>
<!-- Outputs: <p>(404) 555-1234</p> -->

<p>{{'(404) 555-1234' | bcTelephone:'clean'}}</p>
<!-- Outputs: <p>4045551234</p> -->
```

#### Use in a controller

```javascript
function myController($filter) {

  const prettyNumber = '(404) 555-1234';
  $filter('bcTelephone')(prettyNumber, 'clean'); // Output: 4045551234

  const cleanNumber = '4045551234';
  $filter('bcTelephone')(cleanNumber, 'format'); // Output: (404) 555-1234

}
```


### Development

* `npm run build` - produces production version of your library under the `dist` folder
* `npm run dev` - produces development version of your library under the `dist` folder and runs a
    watcher



[demos]: https://codepen.io/benjamincharity/pen/kkZABa?editors=1000
[issues]: https://github.com/benjamincharity/angular-telephone-filter/issues
[license_image]: http://img.shields.io/badge/license-MIT-blue.svg
[license_url]: LICENSE
[npm_url]: https://npmjs.org/package/angular-telephone-filter
[npm_version_image]: http://img.shields.io/npm/v/angular-telephone-filter.svg
