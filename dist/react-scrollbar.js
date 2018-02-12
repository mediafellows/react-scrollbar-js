(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["react-scrollbar"] = factory(require("react"));
	else
		root["react-scrollbar"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

  var isValidElement = function isValidElement(object) {
    return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(12)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(11)();
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(1);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _verticalScrollbar = __webpack_require__(15);

var _verticalScrollbar2 = _interopRequireDefault(_verticalScrollbar);

var _horizontalScrollbar = __webpack_require__(13);

var _horizontalScrollbar2 = _interopRequireDefault(_horizontalScrollbar);

__webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollWrapper = function (_React$Component) {
  _inherits(ScrollWrapper, _React$Component);

  function ScrollWrapper() {
    _classCallCheck(this, ScrollWrapper);

    var _this = _possibleConstructorReturn(this, (ScrollWrapper.__proto__ || Object.getPrototypeOf(ScrollWrapper)).call(this));

    _this.state = {
      ready: false,
      scrollY: null,
      scrollX: null,
      top: 0,
      left: 0,
      scrollAreaHeight: null,
      scrollAreaWidth: null,
      scrollWrapperHeight: null,
      scrollWrapperWidth: null,
      verticalHeight: null,
      vMovement: 0,
      hMovement: 0,
      dragging: false, // note: dragging - fake pseudo class
      scrolling: false, // changes: scrolling (new fake pseudo class)
      reset: false, // changes: change state without rendering
      start: { y: 0, x: 0 }
    };

    _this.updateSize = _this.updateSize.bind(_this);
    _this.calculateSize = _this.calculateSize.bind(_this);
    _this.scroll = _this.scroll.bind(_this);
    _this.startDrag = _this.startDrag.bind(_this);
    _this.onDrag = _this.onDrag.bind(_this);
    _this.stopDrag = _this.stopDrag.bind(_this);
    _this.handleChangePosition = _this.handleChangePosition.bind(_this);
    _this.handleScrollbarDragging = _this.handleScrollbarDragging.bind(_this);
    _this.handleScrollbarStopDrag = _this.handleScrollbarStopDrag.bind(_this);
    return _this;
  }

  _createClass(ScrollWrapper, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateSize();

      // Attach The Event for Responsive View~
      window.addEventListener('resize', this.updateSize);
    }

    // changes: update scrollbars when parent resizing

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      this.updateSize();
    }

    // changes: reset settings without rerendering (need for scrolling state)

  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (nextState.reset) {
        this.setState({ reset: false });
        return false;
      }
      return true;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      // Remove Event
      window.removeEventListener('resize', this.updateSize);
    }
  }, {
    key: 'onDrag',
    value: function onDrag(event) {
      if (this.state.dragging) {
        event.preventDefault();
        var e = event.changedTouches ? event.changedTouches[0] : event;

        // Invers the Movement
        var yMovement = this.state.start.y - e.clientY;
        var xMovement = this.state.start.x - e.clientX;

        // Update the last e.client
        this.setState({ start: { y: e.clientY, x: e.clientX } });

        // The next Vertical Value will be
        var nextY = this.state.top + yMovement;
        var nextX = this.state.left + xMovement;

        this.normalizeVertical(nextY);
        this.normalizeHorizontal(nextX);
      }
    }
  }, {
    key: 'getSize',
    value: function getSize() {
      // The Elements
      var $scrollArea = this.scrollArea;
      var $scrollWrapper = this.scrollWrapper;

      // Get new Elements Size
      var elementSize = {
        // Scroll Area Height and Width

        // changes: support margin and no one child
        scrollAreaHeight: $scrollArea.getBoundingClientRect().height,
        scrollAreaWidth: $scrollArea.children[0].clientWidth, // fixme: not working same way

        // Scroll Wrapper Height and Width
        scrollWrapperHeight: $scrollWrapper.clientHeight,
        scrollWrapperWidth: $scrollWrapper.clientWidth
      };

      return elementSize;
    }
  }, {
    key: 'stopDrag',
    value: function stopDrag() {
      this.setState({ dragging: false });
    }
  }, {
    key: 'scrollToY',
    value: function scrollToY(pos) {
      var maxVal = this.state.scrollAreaHeight - this.state.scrollWrapperHeight;
      var val = pos;
      if (typeof pos === 'string') {
        var valK = parseInt(pos.match(/-?[\d]*%$/)[0], 10) / 100;
        val = valK * maxVal;
      }

      if (val < 0) {
        val = maxVal + val;
      }
      this.normalizeVertical(val);
    }
  }, {
    key: 'scrollToX',
    value: function scrollToX(pos) {
      var maxVal = this.state.scrollAreaWidth - this.state.scrollWrapperWidth;
      var val = pos;
      if (typeof pos === 'string') {
        var valK = parseInt(pos.match(/-?[\d]*%$/)[0], 10) / 100;
        val = valK * maxVal;
      }

      if (val < 0) {
        val = maxVal + val;
      }
      this.normalizeHorizontal(val);
    }
  }, {
    key: 'normalizeVertical',
    value: function normalizeVertical(nextPos, nextState) {
      var _this2 = this;

      // Vertical Scrolling
      var lowerEnd = this.state.scrollAreaHeight - this.state.scrollWrapperHeight;

      // Max Scroll Down
      // Max Scroll Up
      var trim = function trim(max, min, val) {
        var tmax = val > max ? max : val;
        var tmin = tmax < min ? min : tmax;
        return tmin;
      };
      var next = trim(lowerEnd, 0, nextPos);

      // Update the Vertical Value
      this.setState({
        top: next,
        vMovement: next / this.state.scrollAreaHeight * 100
      }, function () {
        return _this2.setState(_extends({}, nextState));
      }); // changes: update state after operation
    }
  }, {
    key: 'normalizeHorizontal',
    value: function normalizeHorizontal(nextPos, nextState) {
      var _this3 = this;

      // Horizontal Scrolling
      var rightEnd = this.state.scrollAreaWidth - this.state.scrollWrapperWidth;

      // Max Scroll Right
      // Max Scroll Right
      var trim = function trim(max, min, val) {
        var tmax = val > max ? max : val;
        var tmin = tmax < min ? min : tmax;
        return tmin;
      };
      var next = trim(rightEnd, 0, nextPos);

      // Update the Horizontal Value
      this.setState({
        left: next,
        hMovement: next / this.state.scrollAreaWidth * 100
      }, function () {
        return _this3.setState(_extends({}, nextState));
      }); // changes: update state after operation
    }
  }, {
    key: 'handleChangePosition',
    value: function handleChangePosition(movement, orientation) {
      var _this4 = this;

      // Make sure the content height is not changed
      this.calculateSize(function () {
        // Convert Percentage to Pixel
        var next = movement / 100;
        if (orientation === 'vertical') _this4.normalizeVertical(next * _this4.state.scrollAreaHeight);
        if (orientation === 'horizontal') _this4.normalizeHorizontal(next * _this4.state.scrollAreaWidth);
      });
    }
  }, {
    key: 'handleScrollbarDragging',
    value: function handleScrollbarDragging() {
      this.setState({ dragging: true });
    }
  }, {
    key: 'handleScrollbarStopDrag',
    value: function handleScrollbarStopDrag() {
      this.setState({ dragging: false });
    }
  }, {
    key: 'updateSize',
    value: function updateSize() {
      var elementSize = this.getSize();

      if (elementSize.scrollWrapperHeight !== this.state.scrollWrapperHeight || elementSize.scrollWrapperWidth !== this.state.scrollWrapperWidth || elementSize.scrollAreaHeight !== this.state.scrollAreaHeight || elementSize.scrollAreaWidth !== this.state.scrollAreaWidth) {
        // Set the State!
        this.setState({

          // Scroll Area Height and Width
          scrollAreaHeight: elementSize.scrollAreaHeight,
          scrollAreaWidth: elementSize.scrollAreaWidth,

          // Scroll Wrapper Height and Width
          scrollWrapperHeight: elementSize.scrollWrapperHeight,
          scrollWrapperWidth: elementSize.scrollWrapperWidth,

          // Make sure The wrapper is Ready, then render the scrollbar
          ready: true
        });
      }
    }
  }, {
    key: 'calculateSize',
    value: function calculateSize(cb) {
      var elementSize = this.getSize();

      if (elementSize.scrollWrapperHeight !== this.state.scrollWrapperHeight || elementSize.scrollWrapperWidth !== this.state.scrollWrapperWidth || elementSize.scrollAreaHeight !== this.state.scrollAreaHeight || elementSize.scrollAreaWidth !== this.state.scrollAreaWidth) {
        // Set the State!
        this.setState({
          // Scroll Area Height and Width
          scrollAreaHeight: elementSize.scrollAreaHeight,
          scrollAreaWidth: elementSize.scrollAreaWidth,

          // Scroll Wrapper Height and Width
          scrollWrapperHeight: elementSize.scrollWrapperHeight,
          scrollWrapperWidth: elementSize.scrollWrapperWidth,

          // Make sure The wrapper is Ready, then render the scrollbar
          ready: true
        }, cb);
      } else cb();
    }

    // DRAG EVENT JUST FOR TOUCH DEVICE~

  }, {
    key: 'startDrag',
    value: function startDrag(event) {
      var _this5 = this;

      event.preventDefault();
      event.stopPropagation();

      var e = event.changedTouches ? event.changedTouches[0] : event;

      // Make sure the content height is not changed
      this.calculateSize(function () {
        // Prepare to drag
        _this5.setState({
          dragging: true,
          start: { y: e.pageY, x: e.pageX }
        });
      });
    }
  }, {
    key: 'scroll',
    value: function scroll(e) {
      var _this6 = this;

      e.preventDefault();

      // Make sure the content height is not changed
      this.calculateSize(function () {
        // Set the wheel step
        var num = _this6.props.speed;

        // DOM events
        var shifted = e.shiftKey;
        var scrollY = e.deltaY > 0 ? num : -num;
        var scrollX = e.deltaX > 0 ? num : -num;

        // Fix Mozilla Shifted Wheel~
        if (shifted && e.deltaX === 0) scrollX = e.deltaY > 0 ? num : -num;

        // Next Value
        var nextY = _this6.state.top + scrollY;
        var nextX = _this6.state.left + scrollX;

        // Is it Scrollable?
        var canScrollY = _this6.state.scrollAreaHeight > _this6.state.scrollWrapperHeight;
        var canScrollX = _this6.state.scrollAreaWidth > _this6.state.scrollWrapperWidth;

        // changes: Set scrolling state before changing position
        _this6.setState({ scrolling: true }, function () {
          // Vertical Scrolling
          if (canScrollY && !shifted) {
            _this6.normalizeVertical(nextY, { scrolling: false, reset: true });
          }

          // Horizontal Scrolling
          if (shifted && canScrollX) {
            _this6.normalizeHorizontal(nextX, { scrolling: false, reset: true });
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this7 = this;

      var className = function className(base, name, pos, isDrg, isScr) {
        return [base + name, base + name + pos, isDrg ? base + name + ':dragging' : '', isDrg ? base + name + pos + ':dragging' : '', isScr ? base + name + ':scrolling' : '', isScr ? base + name + pos + ':scrolling' : ''].join(' ');
      };

      return _react2.default.createElement(
        'div',
        {
          onClick: this.updateSize,
          className: this.props.className,
          ref: function ref(c) {
            _this7.scrollWrapper = c;
          },
          style: _extends({}, this.props.style, { overflow: 'hidden', position: 'relative' })
        },
        _react2.default.createElement(
          'div',
          {
            className: className('-reactjs-scrollbar', '-area', '', this.state.dragging, this.state.scrolling),
            ref: function ref(c) {
              _this7.scrollArea = c;
            },
            onWheel: this.scroll,
            onTouchStart: this.startDrag,
            onTouchMove: this.onDrag,
            onTouchEnd: this.stopDrag,
            onChange: this.updateSize,
            style: { marginTop: this.state.top * -1 + 'px', marginLeft: this.state.left * -1 + 'px' }
          },
          this.props.children,
          this.state.ready ? _react2.default.createElement(_verticalScrollbar2.default, {
            area: { height: this.state.scrollAreaHeight },
            wrapper: { height: this.state.scrollWrapperHeight },
            scrolling: this.state.vMovement,
            draggingFromParent: this.state.dragging,
            onChangePosition: this.handleChangePosition,
            onDragging: this.handleScrollbarDragging,
            onStopDrag: this.handleScrollbarStopDrag
          }) : null,
          this.state.ready ? _react2.default.createElement(_horizontalScrollbar2.default, {
            area: { width: this.state.scrollAreaWidth },
            wrapper: { width: this.state.scrollWrapperWidth },
            scrolling: this.state.hMovement,
            draggingFromParent: this.state.dragging,
            onChangePosition: this.handleChangePosition,
            onDragging: this.handleScrollbarDragging,
            onStopDrag: this.handleScrollbarStopDrag
          }) : null
        )
      );
    }
  }]);

  return ScrollWrapper;
}(_react2.default.Component);

// The Props


ScrollWrapper.propTypes = {
  speed: _propTypes2.default.number,
  className: _propTypes2.default.string,
  style: _propTypes2.default.shape(),
  children: _propTypes2.default.node
};

ScrollWrapper.defaultProps = {
  speed: 53,
  className: 'react-scrollbar-default',
  style: {},
  children: null
};

exports.default = ScrollWrapper;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function () {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for (var i = 0; i < this.length; i++) {
			var item = this[i];
			if (item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(2);
  var warning = __webpack_require__(6);
  var ReactPropTypesSecret = __webpack_require__(4);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, _typeof(typeSpecs[typeSpecName]));
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error === 'undefined' ? 'undefined' : _typeof(error));
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(1);
var invariant = __webpack_require__(2);
var ReactPropTypesSecret = __webpack_require__(4);

module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var emptyFunction = __webpack_require__(1);
var invariant = __webpack_require__(2);
var warning = __webpack_require__(6);
var assign = __webpack_require__(9);

var ReactPropTypesSecret = __webpack_require__(4);
var checkPropTypes = __webpack_require__(10);

module.exports = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (!manualPropTypeCallCache[cacheKey] &&
          // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            warning(false, 'You are manually calling a React.PropTypes validation ' + 'function for the `%s` prop on `%s`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.', propFullName, componentName);
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(false, 'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received %s at index %s.', getPostfixForTypeWarning(checker), i);
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HorizontalScrollbar = function (_React$Component) {
  _inherits(HorizontalScrollbar, _React$Component);

  function HorizontalScrollbar() {
    _classCallCheck(this, HorizontalScrollbar);

    var _this = _possibleConstructorReturn(this, (HorizontalScrollbar.__proto__ || Object.getPrototypeOf(HorizontalScrollbar)).call(this));

    _this.state = {
      width: 0,
      dragging: false,
      start: 0
    };

    _this.jump = _this.jump.bind(_this);
    _this.startDrag = _this.startDrag.bind(_this);
    return _this;
  }

  _createClass(HorizontalScrollbar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.calculateSize(this.props);

      // Put the Listener
      document.addEventListener('mousemove', this.onDrag.bind(this));
      document.addEventListener('touchmove', this.onDrag.bind(this));
      document.addEventListener('mouseup', this.stopDrag.bind(this));
      document.addEventListener('touchend', this.stopDrag.bind(this));
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.wrapper.width !== this.props.wrapper.width || nextProps.area.width !== this.props.area.width) this.calculateSize(nextProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      // Remove the Listener
      document.removeEventListener('mousemove', this.onDrag.bind(this));
      document.removeEventListener('touchmove', this.onDrag.bind(this));
      document.removeEventListener('mouseup', this.stopDrag.bind(this));
      document.removeEventListener('touchend', this.stopDrag.bind(this));
    }
  }, {
    key: 'onDrag',
    value: function onDrag(event) {
      var _this2 = this;

      if (this.state.dragging) {
        // Make The Parent being in the Dragging State
        this.props.onDragging();

        event.preventDefault();
        event.stopPropagation();

        var e = event.changedTouches ? event.changedTouches[0] : event;

        var xMovement = e.clientX - this.state.start;
        var xMovementPercentage = xMovement / this.props.wrapper.width * 100;

        // Update the last e.clientX
        this.setState({ start: e.clientX }, function () {
          // The next Horizontal Value will be
          var next = _this2.props.scrolling + xMovementPercentage;

          // Tell the parent to change the position
          _this2.props.onChangePosition(next, 'horizontal');
        });
      }
    }
  }, {
    key: 'startDrag',
    value: function startDrag(event) {
      event.preventDefault();
      event.stopPropagation();

      var e = event.changedTouches ? event.changedTouches[0] : event;

      // Prepare to drag
      this.setState({
        dragging: true,
        start: e.clientX
      });
    }
  }, {
    key: 'stopDrag',
    value: function stopDrag() {
      if (this.state.dragging) {
        // Parent Should Change the Dragging State
        this.props.onStopDrag();
        this.setState({ dragging: false });
      }
    }
  }, {
    key: 'jump',
    value: function jump(e) {
      var _this3 = this;

      var isContainer = e.target === this.container;

      if (isContainer) {
        // Get the Element Position
        var position = this.scrollbar.getBoundingClientRect();

        // Calculate the horizontal Movement
        var xMovement = e.clientX - position.left;
        var centerize = this.state.width / 2;
        var xMovementPercentage = xMovement / this.props.wrapper.width * 100 - centerize;

        // Update the last e.clientX
        this.setState({ start: e.clientX }, function () {
          // The next Horizontal Value will be
          var next = _this3.props.scrolling + xMovementPercentage;

          // Tell the parent to change the position
          _this3.props.onChangePosition(next, 'horizontal');
        });
      }
    }
  }, {
    key: 'calculateSize',
    value: function calculateSize(source) {
      // Scrollbar Width
      this.setState({ width: source.wrapper.width / source.area.width * 100 });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var className = function className(base, name, pos, act, isAct) {
        return [base + name, base + name + pos, isAct ? base + name + act : '', isAct ? base + name + pos + act : ''].join(' ');
      };

      if (this.state.width < 100) {
        return _react2.default.createElement(
          'div',
          {
            className: className('-reactjs-scrollbar', '-track', ':horizontal', ':dragging', this.state.dragging || this.props.draggingFromParent),
            ref: function ref(c) {
              _this4.container = c;
            },
            onClick: this.jump,
            style: { position: 'absolute' }
          },
          _react2.default.createElement('div', {
            className: className('-reactjs-scrollbar', '-thumb', ':horizontal', ':dragging', this.state.dragging || this.props.draggingFromParent),
            ref: function ref(c) {
              _this4.scrollbar = c;
            },
            onTouchStart: this.startDrag,
            onMouseDown: this.startDrag,
            style: {
              position: 'relative',
              width: this.state.width + '%',
              left: this.props.scrolling + '%'
            }
          })
        );
      }
      return null;
    }
  }]);

  return HorizontalScrollbar;
}(_react2.default.Component);

// The Props


HorizontalScrollbar.propTypes = {
  draggingFromParent: _propTypes2.default.bool.isRequired,
  scrolling: _propTypes2.default.number.isRequired,
  wrapper: _propTypes2.default.shape().isRequired,
  area: _propTypes2.default.shape().isRequired,
  onChangePosition: _propTypes2.default.func.isRequired,
  onDragging: _propTypes2.default.func.isRequired,
  onStopDrag: _propTypes2.default.func.isRequired
};

exports.default = HorizontalScrollbar;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactScrollbar = __webpack_require__(7);

var _reactScrollbar2 = _interopRequireDefault(_reactScrollbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _reactScrollbar2.default;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VerticalScrollbar = function (_React$Component) {
  _inherits(VerticalScrollbar, _React$Component);

  function VerticalScrollbar() {
    _classCallCheck(this, VerticalScrollbar);

    var _this = _possibleConstructorReturn(this, (VerticalScrollbar.__proto__ || Object.getPrototypeOf(VerticalScrollbar)).call(this));

    _this.state = {
      height: 0,
      dragging: false,
      start: 0
    };

    _this.jump = _this.jump.bind(_this);
    _this.startDrag = _this.startDrag.bind(_this);
    return _this;
  }

  _createClass(VerticalScrollbar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.calculateSize(this.props);

      // Put the Listener
      document.addEventListener('mousemove', this.onDrag.bind(this));
      document.addEventListener('touchmove', this.onDrag.bind(this));
      document.addEventListener('mouseup', this.stopDrag.bind(this));
      document.addEventListener('touchend', this.stopDrag.bind(this));
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.wrapper.height !== this.props.wrapper.height || nextProps.area.height !== this.props.area.height) this.calculateSize(nextProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      // Remove the Listener
      document.removeEventListener('mousemove', this.onDrag.bind(this));
      document.removeEventListener('touchmove', this.onDrag.bind(this));
      document.removeEventListener('mouseup', this.stopDrag.bind(this));
      document.removeEventListener('touchend', this.stopDrag.bind(this));
    }
  }, {
    key: 'onDrag',
    value: function onDrag(event) {
      var _this2 = this;

      if (this.state.dragging) {
        // Make The Parent being in the Dragging State
        this.props.onDragging();

        event.preventDefault();
        event.stopPropagation();

        var e = event.changedTouches ? event.changedTouches[0] : event;

        var yMovement = e.clientY - this.state.start;
        var yMovementPercentage = yMovement / this.props.wrapper.height * 100;

        // Update the last e.clientY
        this.setState({ start: e.clientY }, function () {
          // The next Vertical Value will be
          var next = _this2.props.scrolling + yMovementPercentage;

          // Tell the parent to change the position
          _this2.props.onChangePosition(next, 'vertical');
        });
      }
    }
  }, {
    key: 'getSize',
    value: function getSize() {
      // The Elements
      var $scrollArea = this.container.parentElement;
      var $scrollWrapper = $scrollArea.parentElement;

      // Get new Elements Size
      var elementSize = {
        // Scroll Area Height and Width
        scrollAreaHeight: $scrollArea.children[0].clientHeight,
        scrollAreaWidth: $scrollArea.children[0].clientWidth,

        // Scroll Wrapper Height and Width
        scrollWrapperHeight: $scrollWrapper.clientHeight,
        scrollWrapperWidth: $scrollWrapper.clientWidth
      };
      return elementSize;
    }
  }, {
    key: 'startDrag',
    value: function startDrag(event) {
      event.preventDefault();
      event.stopPropagation();

      var e = event.changedTouches ? event.changedTouches[0] : event;

      // Prepare to drag
      this.setState({
        dragging: true,
        start: e.clientY
      });
    }
  }, {
    key: 'stopDrag',
    value: function stopDrag() {
      if (this.state.dragging) {
        // Parent Should Change the Dragging State
        this.props.onStopDrag();
        this.setState({ dragging: false });
      }
    }
  }, {
    key: 'jump',
    value: function jump(e) {
      var _this3 = this;

      var isContainer = e.target === this.container;

      if (isContainer) {
        // Get the Element Position
        var position = this.scrollbar.getBoundingClientRect();

        // Calculate the vertical Movement
        var yMovement = e.clientY - position.top;
        var centerize = this.state.height / 2;
        var yMovementPercentage = yMovement / this.props.wrapper.height * 100 - centerize;

        // Update the last e.clientY
        this.setState({ start: e.clientY }, function () {
          // The next Vertical Value will be
          var next = _this3.props.scrolling + yMovementPercentage;

          // Tell the parent to change the position
          _this3.props.onChangePosition(next, 'vertical');
        });
      }
    }
  }, {
    key: 'calculateSize',
    value: function calculateSize(source) {
      // Scrollbar Width
      this.setState({ height: source.wrapper.height / source.area.height * 100 });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var className = function className(base, name, pos, act, isAct) {
        return [base + name, base + name + pos, isAct ? base + name + act : '', isAct ? base + name + pos + act : ''].join(' ');
      };

      if (this.state.height < 100) {
        return _react2.default.createElement(
          'div',
          {
            className: className('-reactjs-scrollbar', '-track', ':vertical', ':dragging', this.state.dragging || this.props.draggingFromParent),
            ref: function ref(c) {
              _this4.container = c;
            },
            onClick: this.jump,
            style: { position: 'absolute' }
          },
          _react2.default.createElement('div', {
            className: className('-reactjs-scrollbar', '-thumb', ':vertical', ':dragging', this.state.dragging || this.props.draggingFromParent),
            ref: function ref(c) {
              _this4.scrollbar = c;
            },
            onTouchStart: this.startDrag,
            onMouseDown: this.startDrag,
            style: {
              position: 'relative',
              height: this.state.height + '%',
              top: this.props.scrolling + '%'
            }
          })
        );
      }
      return null;
    }
  }]);

  return VerticalScrollbar;
}(_react2.default.Component);

// The Props


VerticalScrollbar.propTypes = {
  draggingFromParent: _propTypes2.default.bool.isRequired,
  scrolling: _propTypes2.default.number.isRequired,
  wrapper: _propTypes2.default.shape().isRequired,
  area: _propTypes2.default.shape().isRequired,
  onChangePosition: _propTypes2.default.func.isRequired,
  onDragging: _propTypes2.default.func.isRequired,
  onStopDrag: _propTypes2.default.func.isRequired
};

exports.default = VerticalScrollbar;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".react-scrollbar-default .-reactjs-scrollbar-area\\:scrolling {\n  transition: all 0.5s ease;\n  -moz-transition: all 0.5s ease;\n  -webkit-transition: all 0.5s ease;\n  -o-transition: all 0.5s ease; }\n  .react-scrollbar-default .-reactjs-scrollbar-area\\:scrolling .-reactjs-scrollbar-thumb {\n    transition: all 0.5s ease;\n    -moz-transition: all 0.5s ease;\n    -webkit-transition: all 0.5s ease;\n    -o-transition: all 0.5s ease; }\n\n.react-scrollbar-default .-reactjs-scrollbar-area:hover .-reactjs-scrollbar-track {\n  opacity: 1; }\n\n.react-scrollbar-default .-reactjs-scrollbar-track {\n  transition: all 0.5s ease;\n  -moz-transition: all 0.5s ease;\n  -webkit-transition: all 0.5s ease;\n  -o-transition: all 0.5s ease;\n  opacity: 0.5;\n  background: transparent; }\n  .react-scrollbar-default .-reactjs-scrollbar-track:hover {\n    background: rgba(0, 0, 0, 0.3); }\n  .react-scrollbar-default .-reactjs-scrollbar-track\\:vertical {\n    width: 10px;\n    height: 100%;\n    top: 0;\n    right: 0; }\n  .react-scrollbar-default .-reactjs-scrollbar-track\\:horizontal {\n    height: 10px;\n    width: 100%;\n    bottom: 0;\n    right: 0; }\n\n.react-scrollbar-default .-reactjs-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.5);\n  cursor: default;\n  width: 10px;\n  height: 10px; }\n", ""]);

// exports


/***/ }),
/* 17 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(16);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(17)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/index.js!./style_default.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/index.js!./style_default.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=react-scrollbar.js.map