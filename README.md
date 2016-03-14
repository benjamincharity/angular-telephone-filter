# Angular Telephone Filter

A simple Angular filter to clean or format a US telephone number.

[Demo on Plunker](http://plnkr.co/edit/b4rY7K?p=preview)


## Installation

```
$ bower install angular-telephone-filter --save
```

Or, include the JavaScript file in the head of your document:

```
<script src="/path/to/file/angular-telephone-filter.js"></script>
```

Include the module as a dependency of your application:

```
angular.module('myModule', ['bc.TelephoneFilter']);
```


#### Dependencies

- `Angular >1.4`


## Usage

The filter expects a single parameter to be passed in to control the filter direction. A parameter
of `clean` will return only the numbers (ie `1235551234`) while the `format` parameter will direct
the filter to output the formatted number (ie `(123) 555-1234`);

#### Use in the DOM:

```
{{'4045551234' | bcTelephone:'format'}} // Output: (404) 555-1234
{{'(404) 555-1234' | bcTelephone:'clean'}} // Output: 4045551234
```

#### Use in a controller

```
function myController($filter) {

  const prettyNumber = '(404) 555-1234';
  $filter('bcTelephone')(prettyNumber, 'clean'); // Output: 4045551234

  const cleanNumber = '4045551234';
  $filter('bcTelephone')(cleanNumber, 'format'); // Output: (404) 555-1234

}
```


- - -


### Scripts

* `npm run build` - produces production version of your library under the `dist` folder
* `npm run dev` - produces development version of your library under the `dist` folder and runs a
    watcher


- - -


[All idea and code contributions
welcome!](https://github.com/benjamincharity/angular-telephone-filter/issues)

