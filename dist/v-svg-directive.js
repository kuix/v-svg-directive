(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["v-svg"] = factory();
	else
		root["v-svg"] = factory();
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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    install: function install(Vue, opts) {
        var directive = function directive(svgElement, binding) {
            // Check if options are set:
            var options = opts || {};

            // Throw error when there is no path defined for the SVG file:
            if (!options.path || typeof options.path !== 'string') {
                throw new Error('The path to your vue-svg sprite file is missing!');
            }

            // Throw error when there is no icon name defined:
            if (!binding.value || typeof binding.value !== 'string') {
                throw new Error('The name of the SVG icon is missing!');
            }

            // Construct the final SVG icon name with full path:
            var svgIconPath = options.path + '#' + (options.prefix || '') + binding.value;

            // Create the `<use>` element:
            var useElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');

            // Add the SVG file's full path to the `<use>` element:
            useElement.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', svgIconPath);

            // Add a class to the SVG element, when there is one defined in options:
            if (options.class && typeof options.class === 'string') {
                svgElement.classList.add(options.class);
            }

            // Clear the contents of the SVG element:
            svgElement.innerHTML = '';

            // Add the `<use>` element to the SVG element:
            svgElement.appendChild(useElement);
        };

        Vue.directive('svg', {
            bind: directive,
            update: directive
        });
    }
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=v-svg-directive.js.map