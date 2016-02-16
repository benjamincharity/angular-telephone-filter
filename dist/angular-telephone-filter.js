(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("angular-telephone-filter", [], factory);
	else if(typeof exports === 'object')
		exports["angular-telephone-filter"] = factory();
	else
		root["angular-telephone-filter"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _telephone = __webpack_require__(1);
	
	angular.module('bc.TelephoneFilter', []).filter('bcTelephone', _telephone.TelephoneFilter);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TelephoneFilter = TelephoneFilter;
	function TelephoneFilter() {
	
	    return filter;
	
	    /**
	     * Clean or format a telephone number
	     *
	     * @param {String} number
	     * @param {String} method
	     * @return {String} finalNumber
	     */
	    function filter(tel, method) {
	        var maxLength = 10;
	        var cityCodeLength = 3;
	        var numberLength = 7;
	        var longDistanceCode = undefined;
	
	        // Return if no number was passed in
	        if (!tel) {
	            return '';
	        }
	
	        // Strip all non-numeric characters
	        var value = tel.toString().trim().replace(/\D/g, '');
	
	        // Trim to verify the model doesn't get any larger
	        if (value.length > maxLength) {
	
	            // If the first character is a US country code
	            if (value.charAt(0) === '1') {
	                // Save the code
	                longDistanceCode = value.charAt(0);
	
	                // Don't strip it, allow 11 digits
	                value = value.substring(1, maxLength + 1);
	            } else {
	                value = value.substring(0, maxLength);
	            }
	        }
	
	        // Return if no method was passed in
	        if (!method) {
	            return 'A method{string} is required. e.g. \'clean\' or \'format\'';
	        }
	
	        //
	        // Clean a phone number
	        if (method === 'clean') {
	            return value;
	        }
	
	        //
	        // Format a phone number
	        if (method === 'format') {
	
	            var city = undefined;
	            var number = undefined;
	
	            switch (value.length) {
	                case 1:
	                case 2:
	                case 3:
	                    city = value;
	                    break;
	
	                default:
	                    city = value.slice(0, cityCodeLength);
	                    number = value.slice(cityCodeLength);
	            }
	
	            if (number) {
	
	                if (number.length > cityCodeLength) {
	
	                    number = number.slice(0, cityCodeLength) + '-' + number.slice(cityCodeLength, numberLength);
	                } else {
	
	                    number = number;
	                }
	
	                return (longDistanceCode ? longDistanceCode + ' ' : '') + ('(' + city + ') ' + number).trim();
	            } else {
	
	                return '(' + city;
	            }
	        }
	    }
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=angular-telephone-filter.js.map