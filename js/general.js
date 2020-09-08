/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/general.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/add-fav/add-fav.js":
/*!***************************************!*\
  !*** ./src/blocks/add-fav/add-fav.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../js/util */ "./src/js/util/index.js");


var addFavorite = function addFavorite(event, target) {
  event.preventDefault();
  target.classList.toggle("add-fav--active");
};

/* harmony default export */ __webpack_exports__["default"] = (addFavorite);

/***/ }),

/***/ "./src/blocks/card/card.js":
/*!*********************************!*\
  !*** ./src/blocks/card/card.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-slider/src/tiny-slider */ "./node_modules/tiny-slider/src/tiny-slider.js");


var initSlider = function initSlider(target) {
  var slider = target.querySelector(".card__list");
  var nav = target.querySelector(".card__sub-list");
  Object(tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    "container": slider,
    controls: false,
    slideBy: 'page',
    "navContainer": nav,
    "navAsThumbnails": true,
    "autoplay": false
  });
};

/* harmony default export */ __webpack_exports__["default"] = (initSlider);

/***/ }),

/***/ "./src/blocks/dropdown/dropdown.js":
/*!*****************************************!*\
  !*** ./src/blocks/dropdown/dropdown.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../js/util */ "./src/js/util/index.js");


var openDropdown = function openDropdown(event, item) {
  var target = event.target.closest("[data-dropdown-trigger]");
  var list = Object(_js_util__WEBPACK_IMPORTED_MODULE_0__["$"])("[data-dropdown-list]", item);
  var overlay = document.querySelector(".overlay");

  if (!target) {
    return;
  }

  if (target.tagName === 'A') {
    event.preventDefault();
  }

  target.classList.toggle("dropdown__target--active");

  if (list.classList.contains("hidden")) {
    Object(_js_util__WEBPACK_IMPORTED_MODULE_0__["fadeOut"])(list);
    list.classList.remove("hidden");
  } else {
    Object(_js_util__WEBPACK_IMPORTED_MODULE_0__["fadeIn"])(list);
    list.classList.add("hidden");
  }

  if (target.classList.contains("filters__main-title") && list.classList.contains("filters__list")) {
    overlay.classList.toggle("overlay--open");
  }

  if (target.classList.contains("sort__main-title") && list.classList.contains("sort__list-wrap")) {
    overlay.classList.toggle("overlay--open");
  }
};

/* harmony default export */ __webpack_exports__["default"] = (openDropdown);

/***/ }),

/***/ "./src/blocks/filters/filters.js":
/*!***************************************!*\
  !*** ./src/blocks/filters/filters.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ion_rangeslider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ion-rangeslider */ "./node_modules/ion-rangeslider/js/ion.rangeSlider.js");
/* harmony import */ var ion_rangeslider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ion_rangeslider__WEBPACK_IMPORTED_MODULE_1__);


var $range = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".js-range-slider"),
    $inputFrom = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".js-input-from"),
    $inputTo = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".js-input-to"),
    instance,
    min = 0,
    max = 26000,
    from = 6000,
    to = 20000;
$range.ionRangeSlider({
  skin: "square",
  type: "double",
  min: min,
  max: max,
  from: from,
  to: to,
  onStart: updateInputs,
  onChange: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs(data) {
  from = data.from;
  to = data.to;
  $inputFrom.prop("value", from);
  $inputTo.prop("value", to);
}

$inputFrom.on("input", function () {
  var val = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).prop("value"); // validate

  if (val < min) {
    val = min;
  } else if (val > to) {
    val = to;
  }

  instance.update({
    from: val
  });
});
$inputTo.on("input", function () {
  var val = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).prop("value"); // validate

  if (val < from) {
    val = from;
  } else if (val > max) {
    val = max;
  }

  instance.update({
    to: val
  });
});

var init = function init() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".js-range-slider").ionRangeSlider();
};

/* harmony default export */ __webpack_exports__["default"] = (init);

/***/ }),

/***/ "./src/blocks/fixed/fixed.js":
/*!***********************************!*\
  !*** ./src/blocks/fixed/fixed.js ***!
  \***********************************/
/*! exports provided: fixedMenu, fixedsearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixedMenu", function() { return fixedMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixedsearch", function() { return fixedsearch; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

var fixedMenu = function fixedMenu() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
    var $fixedBox = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fixed-box');
    var $nav = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fixed-div');

    if (!$nav.length) {
      return;
    }

    $fixedBox.height($nav.innerHeight());
    var $window = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window);
    var $h = $nav.offset().top;
    $window.scroll(function () {
      if ($window.scrollTop() > $h - 90) {
        $nav.addClass('fixed');
      } else {
        $nav.removeClass('fixed');
      }
    });
  });
};
var fixedsearch = function fixedsearch() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
    var $fixedBox = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fixed-search');
    var $btn = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".header__search-button");
    var $nav = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fixed-search-input');
    var $window = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window);
    var $h = $fixedBox.offset().top;
    $window.scroll(function () {
      if ($window.scrollTop() > $h) {
        $nav.addClass('fixed-opacity');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()($btn).click(function (e) {
          e.preventDefault();
          $nav.removeClass('fixed-opacity');
        });
      } else {
        $nav.removeClass('fixed-opacity');
      }
    });
  });
};

/***/ }),

/***/ "./src/blocks/header/header.js":
/*!*************************************!*\
  !*** ./src/blocks/header/header.js ***!
  \*************************************/
/*! exports provided: openHeaderItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openHeaderItem", function() { return openHeaderItem; });
var openHeaderItem = function openHeaderItem() {
  var header = document.querySelector(".header");
  var menu = header.querySelector(".header__sections--menu");
  var input = header.querySelector(".header__search-input");
  var overlay = document.querySelector(".overlay");
  header.addEventListener("click", function (event) {
    event.preventDefault();
    var target = event.target;

    if (!target) {
      return;
    }

    if (target.getAttribute('data-click') === "header-search") {
      if (menu.classList.contains('header__sections--open')) {
        menu.classList.remove("header__sections--open");
      } else {
        overlay.classList.toggle("overlay--open");
      }

      input.classList.toggle("header__search-input--open");
    }

    if (target.getAttribute('data-click') === "header-menu") {
      if (input.classList.contains('header__search-input--open')) {
        input.classList.remove("header__search-input--open");
      } else {
        overlay.classList.toggle("overlay--open");
      }

      menu.classList.toggle("header__sections--open");
    }
  });
};

/***/ }),

/***/ "./src/blocks/map/map.js":
/*!*******************************!*\
  !*** ./src/blocks/map/map.js ***!
  \*******************************/
/*! exports provided: map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ymaps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ymaps */ "./node_modules/ymaps/dist/ymaps.esm.js");
/* harmony import */ var _mapObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mapObject */ "./src/blocks/map/mapObject.js");




var map = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var mapContainer, map, myMap, geoCollection;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            mapContainer = document.querySelector("#map");
            _context.next = 3;
            return ymaps__WEBPACK_IMPORTED_MODULE_2__["default"].load();

          case 3:
            map = _context.sent;
            myMap = new map.Map(mapContainer, {
              center: [56.78770177269972, 60.529202367431466],
              zoom: 16
            }), geoCollection = new map.GeoObjectCollection(null, {
              preset: 'islands#blackStretchyIcon'
            });
            _mapObject__WEBPACK_IMPORTED_MODULE_3__["objects"].map(function (it) {
              geoCollection.add(new map.Placemark([it.lon, it.lat]));
            });
            myMap.geoObjects.add(geoCollection);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function map() {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/blocks/map/mapObject.js":
/*!*************************************!*\
  !*** ./src/blocks/map/mapObject.js ***!
  \*************************************/
/*! exports provided: objects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objects", function() { return objects; });
var objects = [{
  lon: 56.78770177269972,
  lat: 60.529202367431466
}, {
  lon: 56.78570,
  lat: 60.52520
}, {
  lon: 56.7837017,
  lat: 60.52320236
}, {
  lon: 56.78670,
  lat: 60.526202367431466
}];

/***/ }),

/***/ "./src/blocks/organization/organization.js":
/*!*************************************************!*\
  !*** ./src/blocks/organization/organization.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var checkbox = document.querySelector(".organization__checkbox");

var showInput = function showInput() {
  checkbox.addEventListener("change", function () {
    var inputs = document.querySelectorAll(".organization__input");
    inputs.forEach(function (item) {
      item.classList.toggle("organization__input--active");
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (showInput);

/***/ }),

/***/ "./src/blocks/personal/personal.js":
/*!*****************************************!*\
  !*** ./src/blocks/personal/personal.js ***!
  \*****************************************/
/*! exports provided: init, removeItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItem", function() { return removeItem; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var suggestions_jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! suggestions-jquery */ "./node_modules/suggestions-jquery/dist/js/jquery.suggestions.js");
/* harmony import */ var suggestions_jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(suggestions_jquery__WEBPACK_IMPORTED_MODULE_1__);



var init = function init() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".adress").suggestions({
    token: "0a19f17e8571c604cdad7731e00bbad7bc7e1760",
    type: "ADDRESS",

    /* Вызывается, когда пользователь выбирает одну из подсказок */
    onSelect: function onSelect(suggestion) {
      console.log(suggestion);
    }
  });
};

var removeItem = function removeItem(event, target) {
  event.preventDefault();
  target.parentNode.remove();
};



/***/ }),

/***/ "./src/blocks/popup/popup.js":
/*!***********************************!*\
  !*** ./src/blocks/popup/popup.js ***!
  \***********************************/
/*! exports provided: Popup, PopupThanks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popup", function() { return Popup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupThanks", function() { return PopupThanks; });
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Popup = /*#__PURE__*/function () {
  function Popup(popup) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, Popup);

    this.popup = popup;
    this.name = this.popup.getAttribute('data-popup');
    this.open_btn = document.querySelectorAll('.get-popup[data-popup="' + this.name + '"]');
    this.popupClose = this.popup.querySelector('.popup__close');
    this.closer = this.popup.querySelector('.button--close');
    this.events();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(Popup, [{
    key: "events",
    value: function events() {
      var _this = this;

      this.open_btn.forEach(function (btn) {
        btn.addEventListener('click', function (evt) {
          evt.preventDefault();

          _this.openPopup();
        });
      });

      if (this.closer) {
        this.closer.addEventListener('click', function () {
          _this.hidePopup();
        });
      }

      document.body.addEventListener('click', function (e) {
        if (e.target.classList.contains('popup__wrapper')) {
          _this.hidePopup();
        }
      });
      this.popupClose.addEventListener('click', function () {
        _this.hidePopup();
      });
      window.addEventListener('keydown', function (e) {
        if (e.keyCode === 27) {
          _this.hidePopup();
        }
      });
    }
  }, {
    key: "openPopup",
    value: function openPopup() {
      var prevPopup = document.querySelector('.popup.opened');

      if (prevPopup) {
        prevPopup.classList.remove('opened');
      }

      this.popup.classList.add('opened');
      document.body.classList.add('lock');
    }
  }, {
    key: "hidePopup",
    value: function hidePopup() {
      this.popup.classList.remove('opened');
      document.body.classList.remove('lock');
    }
  }]);

  return Popup;
}();

var PopupThanks = /*#__PURE__*/function (_Popup) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(PopupThanks, _Popup);

  var _super = _createSuper(PopupThanks);

  function PopupThanks(popup) {
    var _this2;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, PopupThanks);

    _this2 = _super.call(this, popup);
    _this2.isOpened = false;
    _this2.closer = _this2.popup.querySelector('.popup__close');
    return _this2;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(PopupThanks, [{
    key: "events",
    value: function events() {
      this.hidePopup();
    }
  }, {
    key: "openPopup",
    value: function openPopup() {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_0___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(PopupThanks.prototype), "openPopup", this).call(this);

      this.isOpened = true;
    }
  }, {
    key: "hidePopup",
    value: function hidePopup() {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_0___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(PopupThanks.prototype), "hidePopup", this).call(this);

      this.isOpened = false;
    }
  }]);

  return PopupThanks;
}(Popup);



/***/ }),

/***/ "./src/blocks/products/products.js":
/*!*****************************************!*\
  !*** ./src/blocks/products/products.js ***!
  \*****************************************/
/*! exports provided: scrollTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTop", function() { return scrollTop; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

var scrollTop = function scrollTop() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
    var $btn = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".products__move-top");

    if (!$btn) {
      return;
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()($btn).click(function (e) {
      e.preventDefault();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
        scrollTop: 0
      }, '300');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()($btn).unbind('mouseenter mouseleave');
    });
  });
};

/***/ }),

/***/ "./src/blocks/promo/promo.js":
/*!***********************************!*\
  !*** ./src/blocks/promo/promo.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-slider/src/tiny-slider */ "./node_modules/tiny-slider/src/tiny-slider.js");


var initSlider = function initSlider() {
  Object(tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".promo__list",
    items: 1,
    slideBy: 'page',
    autoplay: true,
    lazyload: true,
    navPosition: "bottom",
    autoplayButtonOutput: false
  });
};

/* harmony default export */ __webpack_exports__["default"] = (initSlider);

/***/ }),

/***/ "./src/blocks/tabs/tabs.js":
/*!*********************************!*\
  !*** ./src/blocks/tabs/tabs.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



var Tabs = /*#__PURE__*/function () {
  function Tabs(target) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Tabs);

    this._target = target;
    this.setOptions(options);
    this.init();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Tabs, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.getTabs().forEach(function (item) {
        item.addEventListener("click", function () {
          _this.toggleTab(item);
        });
      });
    }
  }, {
    key: "setOptions",
    value: function setOptions(x) {
      return this.DEFAULT_OPTION = {
        DATA_TAB: x.dataTab && x.dataTab !== "" ? x.dataTab : "data-tab",
        DATA_CONTENT: x.dataContent && x.dataContent !== "" ? x.dataContent : "data-content",
        TAB_ACTIVE_CLASS: x.tabsItemActive && x.tabsItemActive !== "" ? x.tabsItemActive : "tabs__item--active",
        CONTENT_ACTIVE_CLASS: x.tabsContentActive && x.tabsContentActive !== "" ? x.tabsContentActive : "tabs__content--active"
      };
    }
  }, {
    key: "getTabs",
    value: function getTabs() {
      return this._target.querySelectorAll("[".concat(this.DEFAULT_OPTION.DATA_TAB, "]"));
    }
  }, {
    key: "toggleTab",
    value: function toggleTab(item) {
      var id = item.getAttribute(this.DEFAULT_OPTION.DATA_TAB);

      var content = this._target.querySelector("[".concat(this.DEFAULT_OPTION.DATA_CONTENT, "=\"").concat(id, "\"]"));

      var activeTab = this._target.querySelector(".".concat(this.DEFAULT_OPTION.TAB_ACTIVE_CLASS, "[").concat(this.DEFAULT_OPTION.DATA_TAB, "]"));

      var activeContent = this._target.querySelector(".".concat(this.DEFAULT_OPTION.CONTENT_ACTIVE_CLASS, "[").concat(this.DEFAULT_OPTION.DATA_CONTENT, "]"));

      this.toggleClass(activeTab, item, this.DEFAULT_OPTION.TAB_ACTIVE_CLASS);
      this.toggleClass(activeContent, content, this.DEFAULT_OPTION.CONTENT_ACTIVE_CLASS);
    }
  }, {
    key: "toggleClass",
    value: function toggleClass(activeTarget, disableTarget, activeClass) {
      activeTarget.classList.remove(activeClass);
      disableTarget.classList.add(activeClass);
    }
  }]);

  return Tabs;
}();

/* harmony default export */ __webpack_exports__["default"] = (Tabs);

/***/ }),

/***/ "./src/js/general.js":
/*!***************************!*\
  !*** ./src/js/general.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/js/util/index.js");
/* harmony import */ var _modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/tabs/tabs */ "./src/blocks/tabs/tabs.js");
/* harmony import */ var _modules_promo_promo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/promo/promo */ "./src/blocks/promo/promo.js");
/* harmony import */ var _modules_card_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/card/card */ "./src/blocks/card/card.js");
/* harmony import */ var _modules_add_fav_add_fav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/add-fav/add-fav */ "./src/blocks/add-fav/add-fav.js");
/* harmony import */ var _modules_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/dropdown/dropdown */ "./src/blocks/dropdown/dropdown.js");
/* harmony import */ var _modules_popup_popup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/popup/popup */ "./src/blocks/popup/popup.js");
/* harmony import */ var _modules_organization_organization__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/organization/organization */ "./src/blocks/organization/organization.js");
/* harmony import */ var _modules_filters_filters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/filters/filters */ "./src/blocks/filters/filters.js");
/* harmony import */ var _modules_fixed_fixed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/fixed/fixed */ "./src/blocks/fixed/fixed.js");
/* harmony import */ var _modules_personal_personal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! %modules%/personal/personal */ "./src/blocks/personal/personal.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/header/header.js");
/* harmony import */ var _modules_products_products__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! %modules%/products/products */ "./src/blocks/products/products.js");
/* harmony import */ var _modules_map_map__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! %modules%/map/map */ "./src/blocks/map/map.js");














var promoList = document.querySelector(".promo__list");
var cards = document.querySelectorAll(".card__inner");
var tab = document.querySelectorAll(".tabs");
var popups = document.querySelectorAll('.popup');
var toggleMenu = document.querySelector('.header__search-button');

if (popups) {
  popups.forEach(function (popup) {
    new _modules_popup_popup__WEBPACK_IMPORTED_MODULE_6__["Popup"](popup);
  });
}

if (tab) {
  tab.forEach(function (item) {
    new _modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_1__["default"](item);
  });
}

if (cards) {
  cards.forEach(function (item) {
    Object(_modules_card_card__WEBPACK_IMPORTED_MODULE_3__["default"])(item);
  });
}

if (promoList) {
  Object(_modules_promo_promo__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

Object(_modules_filters_filters__WEBPACK_IMPORTED_MODULE_8__["default"])();
Object(_modules_organization_organization__WEBPACK_IMPORTED_MODULE_7__["default"])();
Object(_modules_personal_personal__WEBPACK_IMPORTED_MODULE_10__["init"])();
Object(_modules_products_products__WEBPACK_IMPORTED_MODULE_12__["scrollTop"])();
Object(_modules_map_map__WEBPACK_IMPORTED_MODULE_13__["map"])();
Object(_util__WEBPACK_IMPORTED_MODULE_0__["listen"])("click", ".add-fav", _modules_add_fav_add_fav__WEBPACK_IMPORTED_MODULE_4__["default"]);
Object(_util__WEBPACK_IMPORTED_MODULE_0__["listen"])("click", "[filter-dropdown]", _modules_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_5__["default"]);
Object(_util__WEBPACK_IMPORTED_MODULE_0__["listen"])("click", ".personal__del", _modules_personal_personal__WEBPACK_IMPORTED_MODULE_10__["removeItem"]);

if (window.matchMedia("(max-width: 767px)").matches) {
  Object(_util__WEBPACK_IMPORTED_MODULE_0__["listen"])("click", "[data-dropdown]", _modules_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_5__["default"]);
  Object(_modules_fixed_fixed__WEBPACK_IMPORTED_MODULE_9__["fixedMenu"])();
}

if (window.matchMedia("(max-width: 1280px)").matches) {
  Object(_modules_header_header__WEBPACK_IMPORTED_MODULE_11__["openHeaderItem"])();
}

if (window.matchMedia("(min-width: 767px)").matches) {
  Object(_modules_fixed_fixed__WEBPACK_IMPORTED_MODULE_9__["fixedsearch"])();
  Object(_util__WEBPACK_IMPORTED_MODULE_0__["listen"])("click", "[data-dropdown]", _modules_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_5__["default"]);
}

/***/ }),

/***/ "./src/js/util/animate.js":
/*!********************************!*\
  !*** ./src/js/util/animate.js ***!
  \********************************/
/*! exports provided: fadeIn, fadeOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeIn", function() { return fadeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOut", function() { return fadeOut; });
function fadeOut(element) {
  var op = 0.1;
  element.style.display = 'block';
  var timer = setInterval(function () {
    if (op >= 1) {
      clearInterval(timer);
    }

    element.style.opacity = op;
    element.style.filter = 'alpha(opacity=' + op * 100 + ")";
    op += op * 0.1;
  }, 10);
}

function fadeIn(element) {
  var op = 1;
  var timer = setInterval(function () {
    if (op <= 0.1) {
      clearInterval(timer);
      element.style.display = 'none';
    }

    element.style.opacity = op;
    element.style.filter = 'alpha(opacity=' + op * 100 + ")";
    op -= op * 0.1;
  }, 10);
}



/***/ }),

/***/ "./src/js/util/index.js":
/*!******************************!*\
  !*** ./src/js/util/index.js ***!
  \******************************/
/*! exports provided: $, $$, listen, fadeIn, fadeOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./query */ "./src/js/util/query.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$", function() { return _query__WEBPACK_IMPORTED_MODULE_0__["$"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$$", function() { return _query__WEBPACK_IMPORTED_MODULE_0__["$$"]; });

/* harmony import */ var _listen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listen */ "./src/js/util/listen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listen", function() { return _listen__WEBPACK_IMPORTED_MODULE_1__["listen"]; });

/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animate */ "./src/js/util/animate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeIn", function() { return _animate__WEBPACK_IMPORTED_MODULE_2__["fadeIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOut", function() { return _animate__WEBPACK_IMPORTED_MODULE_2__["fadeOut"]; });





/***/ }),

/***/ "./src/js/util/listen.js":
/*!*******************************!*\
  !*** ./src/js/util/listen.js ***!
  \*******************************/
/*! exports provided: listen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listen", function() { return listen; });
function listen(type, selector, callback) {
  document.addEventListener(type, function (event) {
    var target = event.target.closest(selector);

    if (target) {
      callback(event, target);
    }
  });
}

/***/ }),

/***/ "./src/js/util/query.js":
/*!******************************!*\
  !*** ./src/js/util/query.js ***!
  \******************************/
/*! exports provided: $, $$ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$", function() { return $$; });
function $(selector) {
  var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return scope.querySelector(selector);
}
function $$(selector) {
  var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return Array.from(scope.querySelectorAll(selector));
}

/***/ })

/******/ });
//# sourceMappingURL=general.js.map