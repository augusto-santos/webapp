webpackJsonp([1],{

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var bind = __webpack_require__(118);
  var isBuffer = __webpack_require__(334);
  
  /*global toString:true*/
  
  // utils is a library of generic helper functions non-specific to axios
  
  var toString = Object.prototype.toString;
  
  /**
   * Determine if a value is an Array
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an Array, otherwise false
   */
  function isArray(val) {
    return toString.call(val) === '[object Array]';
  }
  
  /**
   * Determine if a value is an ArrayBuffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an ArrayBuffer, otherwise false
   */
  function isArrayBuffer(val) {
    return toString.call(val) === '[object ArrayBuffer]';
  }
  
  /**
   * Determine if a value is a FormData
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an FormData, otherwise false
   */
  function isFormData(val) {
    return (typeof FormData !== 'undefined') && (val instanceof FormData);
  }
  
  /**
   * Determine if a value is a view on an ArrayBuffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
   */
  function isArrayBufferView(val) {
    var result;
    if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
      result = ArrayBuffer.isView(val);
    } else {
      result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
    }
    return result;
  }
  
  /**
   * Determine if a value is a String
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a String, otherwise false
   */
  function isString(val) {
    return typeof val === 'string';
  }
  
  /**
   * Determine if a value is a Number
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Number, otherwise false
   */
  function isNumber(val) {
    return typeof val === 'number';
  }
  
  /**
   * Determine if a value is undefined
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if the value is undefined, otherwise false
   */
  function isUndefined(val) {
    return typeof val === 'undefined';
  }
  
  /**
   * Determine if a value is an Object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an Object, otherwise false
   */
  function isObject(val) {
    return val !== null && typeof val === 'object';
  }
  
  /**
   * Determine if a value is a Date
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Date, otherwise false
   */
  function isDate(val) {
    return toString.call(val) === '[object Date]';
  }
  
  /**
   * Determine if a value is a File
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a File, otherwise false
   */
  function isFile(val) {
    return toString.call(val) === '[object File]';
  }
  
  /**
   * Determine if a value is a Blob
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Blob, otherwise false
   */
  function isBlob(val) {
    return toString.call(val) === '[object Blob]';
  }
  
  /**
   * Determine if a value is a Function
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Function, otherwise false
   */
  function isFunction(val) {
    return toString.call(val) === '[object Function]';
  }
  
  /**
   * Determine if a value is a Stream
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Stream, otherwise false
   */
  function isStream(val) {
    return isObject(val) && isFunction(val.pipe);
  }
  
  /**
   * Determine if a value is a URLSearchParams object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a URLSearchParams object, otherwise false
   */
  function isURLSearchParams(val) {
    return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
  }
  
  /**
   * Trim excess whitespace off the beginning and end of a string
   *
   * @param {String} str The String to trim
   * @returns {String} The String freed of excess whitespace
   */
  function trim(str) {
    return str.replace(/^\s*/, '').replace(/\s*$/, '');
  }
  
  /**
   * Determine if we're running in a standard browser environment
   *
   * This allows axios to run in a web worker, and react-native.
   * Both environments support XMLHttpRequest, but not fully standard globals.
   *
   * web workers:
   *  typeof window -> undefined
   *  typeof document -> undefined
   *
   * react-native:
   *  navigator.product -> 'ReactNative'
   */
  function isStandardBrowserEnv() {
    if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
      return false;
    }
    return (
      typeof window !== 'undefined' &&
      typeof document !== 'undefined'
    );
  }
  
  /**
   * Iterate over an Array or an Object invoking a function for each item.
   *
   * If `obj` is an Array callback will be called passing
   * the value, index, and complete array for each item.
   *
   * If 'obj' is an Object callback will be called passing
   * the value, key, and complete object for each property.
   *
   * @param {Object|Array} obj The object to iterate
   * @param {Function} fn The callback to invoke for each item
   */
  function forEach(obj, fn) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === 'undefined') {
      return;
    }
  
    // Force an array if not already something iterable
    if (typeof obj !== 'object' && !isArray(obj)) {
      /*eslint no-param-reassign:0*/
      obj = [obj];
    }
  
    if (isArray(obj)) {
      // Iterate over array values
      for (var i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      // Iterate over object keys
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          fn.call(null, obj[key], key, obj);
        }
      }
    }
  }
  
  /**
   * Accepts varargs expecting each argument to be an object, then
   * immutably merges the properties of each object and returns result.
   *
   * When multiple objects contain the same key the later object in
   * the arguments list will take precedence.
   *
   * Example:
   *
   * ```js
   * var result = merge({foo: 123}, {foo: 456});
   * console.log(result.foo); // outputs 456
   * ```
   *
   * @param {Object} obj1 Object to merge
   * @returns {Object} Result of all merge properties
   */
  function merge(/* obj1, obj2, obj3, ... */) {
    var result = {};
    function assignValue(val, key) {
      if (typeof result[key] === 'object' && typeof val === 'object') {
        result[key] = merge(result[key], val);
      } else {
        result[key] = val;
      }
    }
  
    for (var i = 0, l = arguments.length; i < l; i++) {
      forEach(arguments[i], assignValue);
    }
    return result;
  }
  
  /**
   * Extends object a by mutably adding to it the properties of object b.
   *
   * @param {Object} a The object to be extended
   * @param {Object} b The object to copy properties from
   * @param {Object} thisArg The object to bind function to
   * @return {Object} The resulting value of object a
   */
  function extend(a, b, thisArg) {
    forEach(b, function assignValue(val, key) {
      if (thisArg && typeof val === 'function') {
        a[key] = bind(val, thisArg);
      } else {
        a[key] = val;
      }
    });
    return a;
  }
  
  module.exports = {
    isArray: isArray,
    isArrayBuffer: isArrayBuffer,
    isBuffer: isBuffer,
    isFormData: isFormData,
    isArrayBufferView: isArrayBufferView,
    isString: isString,
    isNumber: isNumber,
    isObject: isObject,
    isUndefined: isUndefined,
    isDate: isDate,
    isFile: isFile,
    isBlob: isBlob,
    isFunction: isFunction,
    isStream: isStream,
    isURLSearchParams: isURLSearchParams,
    isStandardBrowserEnv: isStandardBrowserEnv,
    forEach: forEach,
    merge: merge,
    extend: extend,
    trim: trim
  };


/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _getPrototypeOf = __webpack_require__(5);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(6);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(7);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(9);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(8);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(4);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Link = __webpack_require__(30);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var _Footer = __webpack_require__(59);
  
  var _Footer2 = _interopRequireDefault(_Footer);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Footer = function (_Component) {
      (0, _inherits3.default)(Footer, _Component);
  
      function Footer() {
          (0, _classCallCheck3.default)(this, Footer);
          return (0, _possibleConstructorReturn3.default)(this, (Footer.__proto__ || (0, _getPrototypeOf2.default)(Footer)).apply(this, arguments));
      }
  
      (0, _createClass3.default)(Footer, [{
          key: 'render',
          value: function render() {
              return _react2.default.createElement(
                  'div',
                  { className: '' + _Footer2.default.wrapperFooter },
                  _react2.default.createElement(
                      'div',
                      { className: '' + _Footer2.default.wrapperContainer },
                      _react2.default.createElement(
                          'div',
                          { className: '' + _Footer2.default.logoFooter },
                          _react2.default.createElement('img', { src: '/img/logo-footer.svg', alt: 'logo-site' }),
                          _react2.default.createElement(
                              'p',
                              null,
                              'Corpright \xA9 2017 HyperTextMarkLanguage\u2122 Inc.'
                          )
                      ),
                      _react2.default.createElement(
                          'div',
                          { className: '' + _Footer2.default.siteContent },
                          _react2.default.createElement(
                              _Link2.default,
                              { className: '' + _Footer2.default.link, to: '/' },
                              'Home'
                          ),
                          _react2.default.createElement(
                              _Link2.default,
                              { className: '' + _Footer2.default.link, to: '/get-started' },
                              'Get Started'
                          ),
                          _react2.default.createElement(
                              _Link2.default,
                              { className: '' + _Footer2.default.link, to: '/content' },
                              'Content'
                          ),
                          _react2.default.createElement(
                              _Link2.default,
                              { className: '' + _Footer2.default.link, to: '/post' },
                              'Post\'s'
                          )
                      ),
                      _react2.default.createElement(
                          'div',
                          { className: '' + _Footer2.default.contact },
                          _react2.default.createElement(
                              'p',
                              null,
                              'augusto.santos5575@gmail.com'
                          )
                      )
                  )
              );
          }
      }]);
      return Footer;
  }(_react.Component);
  
  exports.default = Footer;

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(11)();
  // imports
  
  
  // module
  exports.push([module.id, ":root{\n\t/*\n   * Typography\n   * ======================================================================== */\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.Footer_wrapperContainer_X9m{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  max-width: 992px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin: 0 auto;\n  padding: 15px 30px;\n}\n\n.Footer_wrapperFooter_1IG{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    height: 280px;\n    margin-top: 60px;\n    color: #424a68;\n    background: #1e2336;\n}\n\n.Footer_logoFooter_3dG{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    height: 180px;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n\n.Footer_logoFooter_3dG img{\n    width: 90px;\n    margin: 15px 0;\n}\n\n.Footer_logoFooter_3dG p{\n    font-size: 15px;\n    font-weight: 600;\n}\n\n.Footer_siteContent_2BA{\n    width: 100%;\n    max-width: 530px;\n    height: 40px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    border-bottom: 1px solid #424a68;\n    margin: 0 auto;\n}\n\n.Footer_link_1sU{\n    padding: 15px;\n    text-decoration: none;\n    color: #69768e;\n    will-change: color;\n    transition: color .3s ease;\n}\n\n.Footer_link_1sU:hover{\n    color: #fff;\n}\n\n.Footer_contact_M02{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    height: 25px;\n    margin-top: 10px;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}", "", {"version":3,"sources":["/./components/variable.css","/./components/Footer/Footer.css"],"names":[],"mappings":"AAAA;CACC;;gFAE+E;EAI9E;;gFAE8E;;EAO9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;AAED;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,YAAY;EACZ,iBAAgC;EAChC,6BAAuB;EAAvB,8BAAuB;MAAvB,2BAAuB;UAAvB,uBAAuB;EACvB,eAAe;EACf,mBAAmB;CACpB;;AC/BD;IACI,qBAAc;IAAd,qBAAc;IAAd,cAAc;IACd,YAAY;IACZ,cAAc;IACd,iBAAiB;IACjB,eAAe;IACf,oBAAwC;CAC3C;;AAED;IACI,qBAAc;IAAd,qBAAc;IAAd,cAAc;IACd,YAAY;IACZ,cAAc;IACd,0BAAoB;QAApB,uBAAoB;YAApB,oBAAoB;IACpB,yBAAwB;QAAxB,sBAAwB;YAAxB,wBAAwB;IACxB,6BAAuB;IAAvB,8BAAuB;QAAvB,2BAAuB;YAAvB,uBAAuB;CAC1B;;AAED;IACI,YAAY;IACZ,eAAe;CAClB;;AAED;IACI,gBAAgB;IAChB,iBAAiB;CACpB;;AAED;IACI,YAAY;IACZ,iBAAiB;IACjB,aAAa;IACb,qBAAc;IAAd,qBAAc;IAAd,cAAc;IACd,0BAAoB;QAApB,uBAAoB;YAApB,oBAAoB;IACpB,yBAAwB;QAAxB,sBAAwB;YAAxB,wBAAwB;IACxB,iCAAiC;IACjC,eAAe;CAClB;;AAED;IACI,cAAc;IACd,sBAAsB;IACtB,eAAe;IACf,mBAAmB;IACnB,2BAA2B;CAC9B;;AAED;IACI,YAAY;CACf;;AAED;IACI,qBAAc;IAAd,qBAAc;IAAd,cAAc;IACd,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,yBAAwB;QAAxB,sBAAwB;YAAxB,wBAAwB;IACxB,0BAAoB;QAApB,uBAAoB;YAApB,oBAAoB;CACvB","file":"Footer.css","sourcesContent":[":root{\n\t/*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n  --font-family-root: \"Source Sans Pro\", sans-serif;\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --color-primary: #4D86D4;\n  --color-footer-primary: #1e2336;\n\t--shadow-root: 0 0 2px 0 rgba(0, 0, 0, 0.15), 0 2px 2px 0 rgba(0, 0, 0, 0.25);\n  --shadow-root-hover: 0 0 6px 0 rgba(0, 0, 0, 0.15), 0 6px 6px 0 rgba(0, 0, 0, 0.25);\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\n.wrapperContainer{\n  display: flex;\n  width: 100%;\n  max-width: var(--screen-md-min);\n  flex-direction: column;\n  margin: 0 auto;\n  padding: 15px 30px;\n}","@import '../variable.css';\n\n.wrapperFooter{\n    display: flex;\n    width: 100%;\n    height: 280px;\n    margin-top: 60px;\n    color: #424a68;\n    background: var(--color-footer-primary);\n}\n\n.logoFooter{\n    display: flex;\n    width: 100%;\n    height: 180px;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n}\n\n.logoFooter img{\n    width: 90px;\n    margin: 15px 0;\n}\n\n.logoFooter p{\n    font-size: 15px;\n    font-weight: 600;\n}\n\n.siteContent{\n    width: 100%;\n    max-width: 530px;\n    height: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-bottom: 1px solid #424a68;\n    margin: 0 auto;\n}\n\n.link{\n    padding: 15px;\n    text-decoration: none;\n    color: #69768e;\n    will-change: color;\n    transition: color .3s ease;\n}\n\n.link:hover{\n    color: #fff;\n}\n\n.contact{\n    display: flex;\n    width: 100%;\n    height: 25px;\n    margin-top: 10px;\n    justify-content: center;\n    align-items: center;\n}"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"wrapperContainer": "Footer_wrapperContainer_X9m",
  	"wrapperFooter": "Footer_wrapperFooter_1IG",
  	"logoFooter": "Footer_logoFooter_3dG",
  	"siteContent": "Footer_siteContent_2BA",
  	"link": "Footer_link_1sU",
  	"contact": "Footer_contact_M02"
  };

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

  // style-loader: Adds some css to the DOM by adding a <style> tag
  
  // load the styles
  var content = __webpack_require__(51);
  if(typeof content === 'string') content = [[module.id, content, '']];
  // add the styles to the DOM
  var update = __webpack_require__(12)(content, {});
  if(content.locals) module.exports = content.locals;
  // Hot Module Replacement
  if(false) {
  	// When the styles change, update the <style> tags
  	if(!content.locals) {
  		module.hot.accept("!!../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../node_modules/postcss-loader/index.js!./Footer.css", function() {
  			var newContent = require("!!../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../node_modules/postcss-loader/index.js!./Footer.css");
  			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
  			update(newContent);
  		});
  	}
  	// When the module is disposed, remove the <style> tags
  	module.hot.dispose(function() { update(); });
  }

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

  /* WEBPACK VAR INJECTION */(function(process) {'use strict';
  
  var utils = __webpack_require__(18);
  var normalizeHeaderName = __webpack_require__(204);
  
  var DEFAULT_CONTENT_TYPE = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };
  
  function setContentTypeIfUnset(headers, value) {
    if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
      headers['Content-Type'] = value;
    }
  }
  
  function getDefaultAdapter() {
    var adapter;
    if (typeof XMLHttpRequest !== 'undefined') {
      // For browsers use XHR adapter
      adapter = __webpack_require__(114);
    } else if (typeof process !== 'undefined') {
      // For node use HTTP adapter
      adapter = __webpack_require__(114);
    }
    return adapter;
  }
  
  var defaults = {
    adapter: getDefaultAdapter(),
  
    transformRequest: [function transformRequest(data, headers) {
      normalizeHeaderName(headers, 'Content-Type');
      if (utils.isFormData(data) ||
        utils.isArrayBuffer(data) ||
        utils.isBuffer(data) ||
        utils.isStream(data) ||
        utils.isFile(data) ||
        utils.isBlob(data)
      ) {
        return data;
      }
      if (utils.isArrayBufferView(data)) {
        return data.buffer;
      }
      if (utils.isURLSearchParams(data)) {
        setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
        return data.toString();
      }
      if (utils.isObject(data)) {
        setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
        return JSON.stringify(data);
      }
      return data;
    }],
  
    transformResponse: [function transformResponse(data) {
      /*eslint no-param-reassign:0*/
      if (typeof data === 'string') {
        try {
          data = JSON.parse(data);
        } catch (e) { /* Ignore */ }
      }
      return data;
    }],
  
    timeout: 0,
  
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
  
    maxContentLength: -1,
  
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    }
  };
  
  defaults.headers = {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  };
  
  utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
    defaults.headers[method] = {};
  });
  
  utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
    defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
  });
  
  module.exports = defaults;
  
  /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(54)))

/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var utils = __webpack_require__(18);
  var settle = __webpack_require__(196);
  var buildURL = __webpack_require__(199);
  var parseHeaders = __webpack_require__(205);
  var isURLSameOrigin = __webpack_require__(203);
  var createError = __webpack_require__(117);
  var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(198);
  
  module.exports = function xhrAdapter(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      var requestData = config.data;
      var requestHeaders = config.headers;
  
      if (utils.isFormData(requestData)) {
        delete requestHeaders['Content-Type']; // Let the browser set it
      }
  
      var request = new XMLHttpRequest();
      var loadEvent = 'onreadystatechange';
      var xDomain = false;
  
      // For IE 8/9 CORS support
      // Only supports POST and GET calls and doesn't returns the response headers.
      // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
      if (("development") !== 'test' &&
          typeof window !== 'undefined' &&
          window.XDomainRequest && !('withCredentials' in request) &&
          !isURLSameOrigin(config.url)) {
        request = new window.XDomainRequest();
        loadEvent = 'onload';
        xDomain = true;
        request.onprogress = function handleProgress() {};
        request.ontimeout = function handleTimeout() {};
      }
  
      // HTTP basic authentication
      if (config.auth) {
        var username = config.auth.username || '';
        var password = config.auth.password || '';
        requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
      }
  
      request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);
  
      // Set the request timeout in MS
      request.timeout = config.timeout;
  
      // Listen for ready state
      request[loadEvent] = function handleLoad() {
        if (!request || (request.readyState !== 4 && !xDomain)) {
          return;
        }
  
        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
  
        // Prepare the response
        var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
        var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
        var response = {
          data: responseData,
          // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
          status: request.status === 1223 ? 204 : request.status,
          statusText: request.status === 1223 ? 'No Content' : request.statusText,
          headers: responseHeaders,
          config: config,
          request: request
        };
  
        settle(resolve, reject, response);
  
        // Clean up request
        request = null;
      };
  
      // Handle low level network errors
      request.onerror = function handleError() {
        // Real errors are hidden from us by the browser
        // onerror should only fire if it's a network error
        reject(createError('Network Error', config, null, request));
  
        // Clean up request
        request = null;
      };
  
      // Handle timeout
      request.ontimeout = function handleTimeout() {
        reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
          request));
  
        // Clean up request
        request = null;
      };
  
      // Add xsrf header
      // This is only done if running in a standard browser environment.
      // Specifically not if we're in a web worker, or react-native.
      if (utils.isStandardBrowserEnv()) {
        var cookies = __webpack_require__(201);
  
        // Add xsrf header
        var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
            cookies.read(config.xsrfCookieName) :
            undefined;
  
        if (xsrfValue) {
          requestHeaders[config.xsrfHeaderName] = xsrfValue;
        }
      }
  
      // Add headers to the request
      if ('setRequestHeader' in request) {
        utils.forEach(requestHeaders, function setRequestHeader(val, key) {
          if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
            // Remove Content-Type if data is undefined
            delete requestHeaders[key];
          } else {
            // Otherwise add header to the request
            request.setRequestHeader(key, val);
          }
        });
      }
  
      // Add withCredentials to request if needed
      if (config.withCredentials) {
        request.withCredentials = true;
      }
  
      // Add responseType to request if needed
      if (config.responseType) {
        try {
          request.responseType = config.responseType;
        } catch (e) {
          // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
          // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
          if (config.responseType !== 'json') {
            throw e;
          }
        }
      }
  
      // Handle progress if needed
      if (typeof config.onDownloadProgress === 'function') {
        request.addEventListener('progress', config.onDownloadProgress);
      }
  
      // Not all browsers support upload events
      if (typeof config.onUploadProgress === 'function' && request.upload) {
        request.upload.addEventListener('progress', config.onUploadProgress);
      }
  
      if (config.cancelToken) {
        // Handle cancellation
        config.cancelToken.promise.then(function onCanceled(cancel) {
          if (!request) {
            return;
          }
  
          request.abort();
          reject(cancel);
          // Clean up request
          request = null;
        });
      }
  
      if (requestData === undefined) {
        requestData = null;
      }
  
      // Send the request
      request.send(requestData);
    });
  };


/***/ }),

/***/ 115:
/***/ (function(module, exports) {

  'use strict';
  
  /**
   * A `Cancel` is an object that is thrown when an operation is canceled.
   *
   * @class
   * @param {string=} message The message.
   */
  function Cancel(message) {
    this.message = message;
  }
  
  Cancel.prototype.toString = function toString() {
    return 'Cancel' + (this.message ? ': ' + this.message : '');
  };
  
  Cancel.prototype.__CANCEL__ = true;
  
  module.exports = Cancel;


/***/ }),

/***/ 116:
/***/ (function(module, exports) {

  'use strict';
  
  module.exports = function isCancel(value) {
    return !!(value && value.__CANCEL__);
  };


/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var enhanceError = __webpack_require__(195);
  
  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {Object} config The config.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   * @returns {Error} The created error.
   */
  module.exports = function createError(message, config, code, request, response) {
    var error = new Error(message);
    return enhanceError(error, config, code, request, response);
  };


/***/ }),

/***/ 118:
/***/ (function(module, exports) {

  'use strict';
  
  module.exports = function bind(fn, thisArg) {
    return function wrap() {
      var args = new Array(arguments.length);
      for (var i = 0; i < args.length; i++) {
        args[i] = arguments[i];
      }
      return fn.apply(thisArg, args);
    };
  };


/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  
  var _GetStarted = __webpack_require__(233);
  
  var _GetStarted2 = _interopRequireDefault(_GetStarted);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = _GetStarted2.default; /**
                                           * React App SDK (https://github.com/kriasoft/react-app)
                                           *
                                           * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
                                           *
                                           * This source code is licensed under the MIT license found in the
                                           * LICENSE.txt file in the root directory of this source tree.
                                           */

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__(190);

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var utils = __webpack_require__(18);
  var bind = __webpack_require__(118);
  var Axios = __webpack_require__(192);
  var defaults = __webpack_require__(76);
  
  /**
   * Create an instance of Axios
   *
   * @param {Object} defaultConfig The default config for the instance
   * @return {Axios} A new instance of Axios
   */
  function createInstance(defaultConfig) {
    var context = new Axios(defaultConfig);
    var instance = bind(Axios.prototype.request, context);
  
    // Copy axios.prototype to instance
    utils.extend(instance, Axios.prototype, context);
  
    // Copy context to instance
    utils.extend(instance, context);
  
    return instance;
  }
  
  // Create the default instance to be exported
  var axios = createInstance(defaults);
  
  // Expose Axios class to allow class inheritance
  axios.Axios = Axios;
  
  // Factory for creating new instances
  axios.create = function create(instanceConfig) {
    return createInstance(utils.merge(defaults, instanceConfig));
  };
  
  // Expose Cancel & CancelToken
  axios.Cancel = __webpack_require__(115);
  axios.CancelToken = __webpack_require__(191);
  axios.isCancel = __webpack_require__(116);
  
  // Expose all/spread
  axios.all = function all(promises) {
    return Promise.all(promises);
  };
  axios.spread = __webpack_require__(206);
  
  module.exports = axios;
  
  // Allow use of default import syntax in TypeScript
  module.exports.default = axios;


/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var Cancel = __webpack_require__(115);
  
  /**
   * A `CancelToken` is an object that can be used to request cancellation of an operation.
   *
   * @class
   * @param {Function} executor The executor function.
   */
  function CancelToken(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }
  
    var resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
  
    var token = this;
    executor(function cancel(message) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }
  
      token.reason = new Cancel(message);
      resolvePromise(token.reason);
    });
  }
  
  /**
   * Throws a `Cancel` if cancellation has been requested.
   */
  CancelToken.prototype.throwIfRequested = function throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  };
  
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  CancelToken.source = function source() {
    var cancel;
    var token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token: token,
      cancel: cancel
    };
  };
  
  module.exports = CancelToken;


/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var defaults = __webpack_require__(76);
  var utils = __webpack_require__(18);
  var InterceptorManager = __webpack_require__(193);
  var dispatchRequest = __webpack_require__(194);
  var isAbsoluteURL = __webpack_require__(202);
  var combineURLs = __webpack_require__(200);
  
  /**
   * Create a new instance of Axios
   *
   * @param {Object} instanceConfig The default config for the instance
   */
  function Axios(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager()
    };
  }
  
  /**
   * Dispatch a request
   *
   * @param {Object} config The config specific for this request (merged with this.defaults)
   */
  Axios.prototype.request = function request(config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof config === 'string') {
      config = utils.merge({
        url: arguments[0]
      }, arguments[1]);
    }
  
    config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
    config.method = config.method.toLowerCase();
  
    // Support baseURL config
    if (config.baseURL && !isAbsoluteURL(config.url)) {
      config.url = combineURLs(config.baseURL, config.url);
    }
  
    // Hook up interceptors middleware
    var chain = [dispatchRequest, undefined];
    var promise = Promise.resolve(config);
  
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      chain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
  
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      chain.push(interceptor.fulfilled, interceptor.rejected);
    });
  
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }
  
    return promise;
  };
  
  // Provide aliases for supported request methods
  utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
    /*eslint func-names:0*/
    Axios.prototype[method] = function(url, config) {
      return this.request(utils.merge(config || {}, {
        method: method,
        url: url
      }));
    };
  });
  
  utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
    /*eslint func-names:0*/
    Axios.prototype[method] = function(url, data, config) {
      return this.request(utils.merge(config || {}, {
        method: method,
        url: url,
        data: data
      }));
    };
  });
  
  module.exports = Axios;


/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var utils = __webpack_require__(18);
  
  function InterceptorManager() {
    this.handlers = [];
  }
  
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  InterceptorManager.prototype.use = function use(fulfilled, rejected) {
    this.handlers.push({
      fulfilled: fulfilled,
      rejected: rejected
    });
    return this.handlers.length - 1;
  };
  
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   */
  InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  };
  
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   */
  InterceptorManager.prototype.forEach = function forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  };
  
  module.exports = InterceptorManager;


/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var utils = __webpack_require__(18);
  var transformData = __webpack_require__(197);
  var isCancel = __webpack_require__(116);
  var defaults = __webpack_require__(76);
  
  /**
   * Throws a `Cancel` if cancellation has been requested.
   */
  function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
      config.cancelToken.throwIfRequested();
    }
  }
  
  /**
   * Dispatch a request to the server using the configured adapter.
   *
   * @param {object} config The config that is to be used for the request
   * @returns {Promise} The Promise to be fulfilled
   */
  module.exports = function dispatchRequest(config) {
    throwIfCancellationRequested(config);
  
    // Ensure headers exist
    config.headers = config.headers || {};
  
    // Transform request data
    config.data = transformData(
      config.data,
      config.headers,
      config.transformRequest
    );
  
    // Flatten headers
    config.headers = utils.merge(
      config.headers.common || {},
      config.headers[config.method] || {},
      config.headers || {}
    );
  
    utils.forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      function cleanHeaderConfig(method) {
        delete config.headers[method];
      }
    );
  
    var adapter = config.adapter || defaults.adapter;
  
    return adapter(config).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config);
  
      // Transform response data
      response.data = transformData(
        response.data,
        response.headers,
        config.transformResponse
      );
  
      return response;
    }, function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config);
  
        // Transform response data
        if (reason && reason.response) {
          reason.response.data = transformData(
            reason.response.data,
            reason.response.headers,
            config.transformResponse
          );
        }
      }
  
      return Promise.reject(reason);
    });
  };


/***/ }),

/***/ 195:
/***/ (function(module, exports) {

  'use strict';
  
  /**
   * Update an Error with the specified config, error code, and response.
   *
   * @param {Error} error The error to update.
   * @param {Object} config The config.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   * @returns {Error} The error.
   */
  module.exports = function enhanceError(error, config, code, request, response) {
    error.config = config;
    if (code) {
      error.code = code;
    }
    error.request = request;
    error.response = response;
    return error;
  };


/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var createError = __webpack_require__(117);
  
  /**
   * Resolve or reject a Promise based on response status.
   *
   * @param {Function} resolve A function that resolves the promise.
   * @param {Function} reject A function that rejects the promise.
   * @param {object} response The response.
   */
  module.exports = function settle(resolve, reject, response) {
    var validateStatus = response.config.validateStatus;
    // Note: status is not exposed by XDomainRequest
    if (!response.status || !validateStatus || validateStatus(response.status)) {
      resolve(response);
    } else {
      reject(createError(
        'Request failed with status code ' + response.status,
        response.config,
        null,
        response.request,
        response
      ));
    }
  };


/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var utils = __webpack_require__(18);
  
  /**
   * Transform the data for a request or a response
   *
   * @param {Object|String} data The data to be transformed
   * @param {Array} headers The headers for the request or response
   * @param {Array|Function} fns A single function or Array of functions
   * @returns {*} The resulting transformed data
   */
  module.exports = function transformData(data, headers, fns) {
    /*eslint no-param-reassign:0*/
    utils.forEach(fns, function transform(fn) {
      data = fn(data, headers);
    });
  
    return data;
  };


/***/ }),

/***/ 198:
/***/ (function(module, exports) {

  'use strict';
  
  // btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js
  
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  
  function E() {
    this.message = 'String contains an invalid character';
  }
  E.prototype = new Error;
  E.prototype.code = 5;
  E.prototype.name = 'InvalidCharacterError';
  
  function btoa(input) {
    var str = String(input);
    var output = '';
    for (
      // initialize result and counter
      var block, charCode, idx = 0, map = chars;
      // if the next str index does not exist:
      //   change the mapping table to "="
      //   check if d has no fractional digits
      str.charAt(idx | 0) || (map = '=', idx % 1);
      // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
      output += map.charAt(63 & block >> 8 - idx % 1 * 8)
    ) {
      charCode = str.charCodeAt(idx += 3 / 4);
      if (charCode > 0xFF) {
        throw new E();
      }
      block = block << 8 | charCode;
    }
    return output;
  }
  
  module.exports = btoa;


/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var utils = __webpack_require__(18);
  
  function encode(val) {
    return encodeURIComponent(val).
      replace(/%40/gi, '@').
      replace(/%3A/gi, ':').
      replace(/%24/g, '$').
      replace(/%2C/gi, ',').
      replace(/%20/g, '+').
      replace(/%5B/gi, '[').
      replace(/%5D/gi, ']');
  }
  
  /**
   * Build a URL by appending params to the end
   *
   * @param {string} url The base of the url (e.g., http://www.google.com)
   * @param {object} [params] The params to be appended
   * @returns {string} The formatted url
   */
  module.exports = function buildURL(url, params, paramsSerializer) {
    /*eslint no-param-reassign:0*/
    if (!params) {
      return url;
    }
  
    var serializedParams;
    if (paramsSerializer) {
      serializedParams = paramsSerializer(params);
    } else if (utils.isURLSearchParams(params)) {
      serializedParams = params.toString();
    } else {
      var parts = [];
  
      utils.forEach(params, function serialize(val, key) {
        if (val === null || typeof val === 'undefined') {
          return;
        }
  
        if (utils.isArray(val)) {
          key = key + '[]';
        }
  
        if (!utils.isArray(val)) {
          val = [val];
        }
  
        utils.forEach(val, function parseValue(v) {
          if (utils.isDate(v)) {
            v = v.toISOString();
          } else if (utils.isObject(v)) {
            v = JSON.stringify(v);
          }
          parts.push(encode(key) + '=' + encode(v));
        });
      });
  
      serializedParams = parts.join('&');
    }
  
    if (serializedParams) {
      url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }
  
    return url;
  };


/***/ }),

/***/ 200:
/***/ (function(module, exports) {

  'use strict';
  
  /**
   * Creates a new URL by combining the specified URLs
   *
   * @param {string} baseURL The base URL
   * @param {string} relativeURL The relative URL
   * @returns {string} The combined URL
   */
  module.exports = function combineURLs(baseURL, relativeURL) {
    return relativeURL
      ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
      : baseURL;
  };


/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var utils = __webpack_require__(18);
  
  module.exports = (
    utils.isStandardBrowserEnv() ?
  
    // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));
  
          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }
  
          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }
  
          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }
  
          if (secure === true) {
            cookie.push('secure');
          }
  
          document.cookie = cookie.join('; ');
        },
  
        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },
  
        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :
  
    // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
  );


/***/ }),

/***/ 202:
/***/ (function(module, exports) {

  'use strict';
  
  /**
   * Determines whether the specified URL is absolute
   *
   * @param {string} url The URL to test
   * @returns {boolean} True if the specified URL is absolute, otherwise false
   */
  module.exports = function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
  };


/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var utils = __webpack_require__(18);
  
  module.exports = (
    utils.isStandardBrowserEnv() ?
  
    // Standard browser envs have full support of the APIs needed to test
    // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;
  
      /**
      * Parse a URL to discover it's components
      *
      * @param {String} url The URL to be parsed
      * @returns {Object}
      */
      function resolveURL(url) {
        var href = url;
  
        if (msie) {
          // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }
  
        urlParsingNode.setAttribute('href', href);
  
        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                    urlParsingNode.pathname :
                    '/' + urlParsingNode.pathname
        };
      }
  
      originURL = resolveURL(window.location.href);
  
      /**
      * Determine if a URL shares the same origin as the current location
      *
      * @param {String} requestURL The URL to test
      * @returns {boolean} True if URL shares the same origin, otherwise false
      */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
              parsed.host === originURL.host);
      };
    })() :
  
    // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
  );


/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var utils = __webpack_require__(18);
  
  module.exports = function normalizeHeaderName(headers, normalizedName) {
    utils.forEach(headers, function processHeader(value, name) {
      if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
        headers[normalizedName] = value;
        delete headers[name];
      }
    });
  };


/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var utils = __webpack_require__(18);
  
  /**
   * Parse headers into an object
   *
   * ```
   * Date: Wed, 27 Aug 2014 08:58:49 GMT
   * Content-Type: application/json
   * Connection: keep-alive
   * Transfer-Encoding: chunked
   * ```
   *
   * @param {String} headers Headers needing to be parsed
   * @returns {Object} Headers parsed into an object
   */
  module.exports = function parseHeaders(headers) {
    var parsed = {};
    var key;
    var val;
    var i;
  
    if (!headers) { return parsed; }
  
    utils.forEach(headers.split('\n'), function parser(line) {
      i = line.indexOf(':');
      key = utils.trim(line.substr(0, i)).toLowerCase();
      val = utils.trim(line.substr(i + 1));
  
      if (key) {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    });
  
    return parsed;
  };


/***/ }),

/***/ 206:
/***/ (function(module, exports) {

  'use strict';
  
  /**
   * Syntactic sugar for invoking a function and expanding an array for arguments.
   *
   * Common use case would be to use `Function.prototype.apply`.
   *
   *  ```js
   *  function f(x, y, z) {}
   *  var args = [1, 2, 3];
   *  f.apply(null, args);
   *  ```
   *
   * With `spread` this example can be re-written.
   *
   *  ```js
   *  spread(function(x, y, z) {})([1, 2, 3]);
   *  ```
   *
   * @param {Function} callback
   * @returns {Function}
   */
  module.exports = function spread(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  };


/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends2 = __webpack_require__(46);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _getPrototypeOf = __webpack_require__(5);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(6);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(7);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(9);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(8);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(4);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _axios = __webpack_require__(189);
  
  var _axios2 = _interopRequireDefault(_axios);
  
  var _Layout = __webpack_require__(60);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _Footer = __webpack_require__(45);
  
  var _Footer2 = _interopRequireDefault(_Footer);
  
  var _GetStarted = __webpack_require__(455);
  
  var _GetStarted2 = _interopRequireDefault(_GetStarted);
  
  var _GetStarted3 = __webpack_require__(464);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var URL = 'http://0.0.0.0:3000/api/Posts';
  
  var AboutPage = function (_React$Component) {
    (0, _inherits3.default)(AboutPage, _React$Component);
  
    function AboutPage(props) {
      (0, _classCallCheck3.default)(this, AboutPage);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (AboutPage.__proto__ || (0, _getPrototypeOf2.default)(AboutPage)).call(this, props));
  
      _this.state = { content: [] };
  
      _this.refresh();
      return _this;
    }
  
    (0, _createClass3.default)(AboutPage, [{
      key: 'refresh',
      value: function refresh() {
        var _this2 = this;
  
        _axios2.default.get('' + URL).then(function (resp) {
          return _this2.setState((0, _extends3.default)({}, _this2.state, { content: resp.data }));
        });
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        document.title = _GetStarted3.title;
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          _Layout2.default,
          { className: _GetStarted2.default.content },
          _react2.default.createElement(
            'div',
            { className: '' + _GetStarted2.default.wrapperContainer },
            _react2.default.createElement(
              'h1',
              null,
              _GetStarted3.title
            ),
            this.state.content.map(function (items) {
              return _react2.default.createElement(
                'div',
                { key: items.id, className: '' + _GetStarted2.default.wrapperPosts },
                _react2.default.createElement(
                  'div',
                  { className: '' + _GetStarted2.default.info },
                  _react2.default.createElement(
                    'h4',
                    null,
                    items.title
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    items.atCreated
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: '' + _GetStarted2.default.counts },
                  _react2.default.createElement(
                    'div',
                    { className: '' + _GetStarted2.default.itemsCount },
                    _react2.default.createElement(
                      'i',
                      { className: 'material-icons' },
                      'visibility'
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      items.viewrs
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: '' + _GetStarted2.default.itemsCount },
                    _react2.default.createElement(
                      'i',
                      { className: 'material-icons' },
                      'forum'
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      items.commentaries
                    )
                  )
                )
              );
            })
          ),
          _react2.default.createElement(_Footer2.default, null)
        );
      }
    }]);
    return AboutPage;
  }(_react2.default.Component);
  
  exports.default = AboutPage;

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(11)();
  // imports
  
  
  // module
  exports.push([module.id, ":root{\n\t/*\n   * Typography\n   * ======================================================================== */\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.GetStarted_wrapperContainer_2de{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  max-width: 992px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin: 0 auto;\n  padding: 15px 30px;\n}\n\n@media screen and (max-width: 1024px) {\n\n  .GetStarted_content_ns2 {\n    padding: 0 16px;\n  }\n\n}\n\n.GetStarted_wrapperPosts_2fy{\n\theight: 60px;\n    width: 100%;\n    padding: 0 10px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row;\n            flex-flow: row;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    cursor: pointer;\n}\n\n.GetStarted_info_3w4{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\twidth: 50%;\n\theight: 100%;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-flow: column;\n\t        flex-flow: column;\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n}\n\n.GetStarted_info_3w4 h4{\n\tfont-size: 20px;\n    font-weight: 500;\n}\n\n.GetStarted_info_3w4 p{\n    font-size: 12px;\n    font-weight: 600;\n    color: #555;\n}\n\n.GetStarted_counts_32N{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\twidth: 50%;\n\theight: 100%;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\t-webkit-box-pack: end;\n\t    -ms-flex-pack: end;\n\t        justify-content: flex-end;\n}\n\n.GetStarted_itemsCount_UWL{\n    width: 70px;\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    color: #444;\n}\n\n.GetStarted_itemsCount_UWL p{\n\tmargin: 0 5px;\n    font-size: 14px;\n    color: #555;\n    font-weight: 600;\n}", "", {"version":3,"sources":["/./components/variable.css","/./routes/GetStarted/GetStarted.css"],"names":[],"mappings":"AAAA;CACC;;gFAE+E;EAI9E;;gFAE8E;;EAO9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;AAED;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,YAAY;EACZ,iBAAgC;EAChC,6BAAuB;EAAvB,8BAAuB;MAAvB,2BAAuB;UAAvB,uBAAuB;EACvB,eAAe;EACf,mBAAmB;CACpB;;AC/BD;;EAEE;IACE,gBAAgB;GACjB;;CAEF;;AAED;CACC,aAAa;IACV,YAAY;IACZ,gBAAgB;IAChB,qBAAc;IAAd,qBAAc;IAAd,cAAc;IACd,+BAAe;IAAf,8BAAe;QAAf,mBAAe;YAAf,eAAe;IACf,0BAAoB;QAApB,uBAAoB;YAApB,oBAAoB;IACpB,gBAAgB;CACnB;;AAED;CACC,qBAAc;CAAd,qBAAc;CAAd,cAAc;CACd,WAAW;CACX,aAAa;CACb,6BAAkB;CAAlB,8BAAkB;KAAlB,sBAAkB;SAAlB,kBAAkB;CAClB,yBAAwB;KAAxB,sBAAwB;SAAxB,wBAAwB;CACxB;;AAED;CACC,gBAAgB;IACb,iBAAiB;CACpB;;AAED;IACI,gBAAgB;IAChB,iBAAiB;IACjB,YAAY;CACf;;AAED;CACC,qBAAc;CAAd,qBAAc;CAAd,cAAc;CACd,WAAW;CACX,aAAa;CACb,0BAAoB;KAApB,uBAAoB;SAApB,oBAAoB;CACpB,sBAA0B;KAA1B,mBAA0B;SAA1B,0BAA0B;CAC1B;;AAED;IACI,YAAY;IACZ,aAAa;IACb,qBAAc;IAAd,qBAAc;IAAd,cAAc;IACd,0BAAoB;QAApB,uBAAoB;YAApB,oBAAoB;IACpB,YAAY;CACf;;AAED;CACC,cAAc;IACX,gBAAgB;IAChB,YAAY;IACZ,iBAAiB;CACpB","file":"GetStarted.css","sourcesContent":[":root{\n\t/*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n  --font-family-root: \"Source Sans Pro\", sans-serif;\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --color-primary: #4D86D4;\n  --color-footer-primary: #1e2336;\n\t--shadow-root: 0 0 2px 0 rgba(0, 0, 0, 0.15), 0 2px 2px 0 rgba(0, 0, 0, 0.25);\n  --shadow-root-hover: 0 0 6px 0 rgba(0, 0, 0, 0.15), 0 6px 6px 0 rgba(0, 0, 0, 0.25);\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\n.wrapperContainer{\n  display: flex;\n  width: 100%;\n  max-width: var(--screen-md-min);\n  flex-direction: column;\n  margin: 0 auto;\n  padding: 15px 30px;\n}","@import '../../components/variable.css';\n\n@media screen and (max-width: 1024px) {\n\n  .content {\n    padding: 0 16px;\n  }\n\n}\n\n.wrapperPosts{\n\theight: 60px;\n    width: 100%;\n    padding: 0 10px;\n    display: flex;\n    flex-flow: row;\n    align-items: center;\n    cursor: pointer;\n}\n\n.info{\n\tdisplay: flex;\n\twidth: 50%;\n\theight: 100%;\n\tflex-flow: column;\n\tjustify-content: center;\n}\n\n.info h4{\n\tfont-size: 20px;\n    font-weight: 500;\n}\n\n.info p{\n    font-size: 12px;\n    font-weight: 600;\n    color: #555;\n}\n\n.counts{\n\tdisplay: flex;\n\twidth: 50%;\n\theight: 100%;\n\talign-items: center;\n\tjustify-content: flex-end;\n}\n\n.itemsCount{\n    width: 70px;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    color: #444;\n}\n\n.itemsCount p{\n\tmargin: 0 5px;\n    font-size: 14px;\n    color: #555;\n    font-weight: 600;\n}"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"wrapperContainer": "GetStarted_wrapperContainer_2de",
  	"content": "GetStarted_content_ns2",
  	"wrapperPosts": "GetStarted_wrapperPosts_2fy",
  	"info": "GetStarted_info_3w4",
  	"counts": "GetStarted_counts_32N",
  	"itemsCount": "GetStarted_itemsCount_UWL"
  };

/***/ }),

/***/ 334:
/***/ (function(module, exports) {

  /*!
   * Determine if an object is a Buffer
   *
   * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
   * @license  MIT
   */
  
  // The _isBuffer check is for Safari 5-7 support, because it's missing
  // Object.prototype.constructor. Remove this eventually
  module.exports = function (obj) {
    return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
  }
  
  function isBuffer (obj) {
    return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
  }
  
  // For Node v0.10 support. Remove this eventually.
  function isSlowBuffer (obj) {
    return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
  }


/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

  // style-loader: Adds some css to the DOM by adding a <style> tag
  
  // load the styles
  var content = __webpack_require__(310);
  if(typeof content === 'string') content = [[module.id, content, '']];
  // add the styles to the DOM
  var update = __webpack_require__(12)(content, {});
  if(content.locals) module.exports = content.locals;
  // Hot Module Replacement
  if(false) {
  	// When the styles change, update the <style> tags
  	if(!content.locals) {
  		module.hot.accept("!!../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../node_modules/postcss-loader/index.js!./GetStarted.css", function() {
  			var newContent = require("!!../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../node_modules/postcss-loader/index.js!./GetStarted.css");
  			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
  			update(newContent);
  		});
  	}
  	// When the module is disposed, remove the <style> tags
  	module.hot.dispose(function() { update(); });
  }

/***/ }),

/***/ 464:
/***/ (function(module, exports) {

  module.exports = {"title":"Getting Started","html":"<h2>Cadme comitum fecere</h2>\n<p>Lorem markdownum velis auras figuram spes solebat spectabat, cum alium,\nplenissima aratri visae herbarum in corpore silvas consumpta. Subito virgae nec\nparatae flexit et niveae repperit erat paratu cum albis steterat conclamat hic!</p>\n<p>Nocte suae ligat! <em>Si</em> nitidum pervia, illa tua, ab minimo pasci dabitur? In\nfictus concurreret pennis, illis cum accipe rogavi in et nostro cum lacertis\nhostibus ab saxo ne. Genibusque vixque; sine videt terribili lucos ipsum vobis\nresque, et suum pietatis fulvis, est velle. Semele oscula ferat frigidus mactata\nmontes, es me parari, piae.</p>\n<h2>Inflataque ait leves frigida</h2>\n<p>Letum per ipsa nostro animae, mari illuc in levi corpus aestibus excussam\ndeflentem sic cuius. Venere dedit illa cui in quo senecta artus bella inficit,\nAchaica. Videbatur crinem resonantia alto dea umida dicitur igne; meus signa\nhabet; est. Cognovit coepta: similes fugis: habuissem votivi liquida: ictus visi\nnostra me Adoni.</p>\n<h2>Laedar cum margine quoque</h2>\n<p>Quam dato ullis, acer venturi volantes! Tuam non non cursu acta hic, novem\nnutrit, in sidera viscera iam fontes tempora, omnes. Saturnius artus inquit,\nconatoque erectos lenius, carinae, ora est infamia elige per Medusaei induitur.\nQuem quem ab postquam tunc frondescere nodis capiam labique. Voluere luce\nSemeles.</p>\n<pre><code>    <span class=\"hljs-keyword\">if</span> (delete(digital, hibernateSoft, dynamicExcelVpn) &gt; io_secondary_led /\n            <span class=\"hljs-number\">84</span>) {\n        disk = load;\n        orientationPci.matrix_laptop(modelSsdTweet);\n    } <span class=\"hljs-keyword\">else</span> {\n        kdeEmoticonLed.mebibyte_algorithm_domain(<span class=\"hljs-number\">2</span>,\n                hackerCtr.rom_iso_desktop.scarewarePrimaryBankruptcy(station,\n                disk_mask_matrix, restore_crt));\n        cameraSpyware(<span class=\"hljs-number\">4</span>, multitasking(<span class=\"hljs-number\">-3</span>, log_dfs_controller));\n        menuCisc.swappable -= w(mount_vle_unicode, <span class=\"hljs-number\">5</span>);\n    }\n    <span class=\"hljs-keyword\">var</span> optic_spider = <span class=\"hljs-keyword\">new</span><span class=\"hljs-type\">bieFunctionThick</span>(<span class=\"hljs-number\">-3</span>, esportsKbpsUnix);\n    <span class=\"hljs-keyword\">var</span> dvd_ctp_resolution = dithering;\n</code></pre>\n<h2>Usus fixurus illi petunt</h2>\n<p>Domosque tune amas mihi adhuc et <em>alter per</em> suasque versavitque iners\ncrescentemque nomen verba nunc. Acervos hinc natus si habet. Et cervix imago\nquod! Arduus dolet!</p>\n<pre><code>    cpcDdrCommand.window(moodleAlpha, im, server_alpha.doubleVrmlMonochrome(\n            iosBar - -<span class=\"hljs-number\">2</span>, white_dual, ad(<span class=\"hljs-number\">2</span>, <span class=\"hljs-number\">94</span>, <span class=\"hljs-number\">83</span>)));\n    mbps_typeface_publishing.bit.host_flash_capacity(click(<span class=\"hljs-number\">90</span>,\n            cyberspace_srgb_pup - mpeg, marketing_trackback +\n            table_plagiarism_domain));\n    syn_e = powerExtension * defragmentNntpOsd(alertOutputNode(pop,\n            pageResponsiveDrive));\n    <span class=\"hljs-function\"><span class=\"hljs-keyword\">method</span> -= <span class=\"hljs-title\">switch_newsgroup_flaming</span>;</span>\n</code></pre>\n<p>Aliquid mansura arida altismunera <strong>in illi</strong>. Dignus vir pontum <em>crimen\nversabat</em> carpunt omnes rotis Canentem erant in Oebalio, et manu senecta\niungere. Prima diurnis!</p>\n"};

/***/ })

});
//# sourceMappingURL=1.js.map?208f3a1bfc932f281fd5