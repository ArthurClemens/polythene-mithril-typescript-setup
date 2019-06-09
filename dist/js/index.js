/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/cyano-mithril/dist/cyano-mithril.mjs":
/*!************************************************************!*\
  !*** ../node_modules/cyano-mithril/dist/cyano-mithril.mjs ***!
  \************************************************************/
/*! exports provided: a, cast, getRef, h, jsx, useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cast", function() { return cast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRef", function() { return getRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return useCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return useEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return useLayoutEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return useMemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return useReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return useRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return useState; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/index.js");


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

let currentState;
const call = Function.prototype.call.bind(Function.prototype.call);

const scheduleRender = () => // Call m within the function body so environments with a global instance of m (like flems.io) don't complain
mithril__WEBPACK_IMPORTED_MODULE_0__.redraw();

const updateDeps = deps => {
  const state = currentState;
  const index = state.depsIndex++;
  const prevDeps = state.depsStates[index] || [];
  const shouldRecompute = deps === undefined ? true // Always compute
  : Array.isArray(deps) ? deps.length > 0 ? !deps.every((x, i) => x === prevDeps[i]) // Only compute when one of the deps has changed
  : !state.setup // Empty array: only compute at mount
  : false; // Invalid value, do nothing

  state.depsStates[index] = deps;
  return shouldRecompute;
};

const effect = function effect() {
  let isAsync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return (fn, deps) => {
    const state = currentState;
    const shouldRecompute = updateDeps(deps);

    if (shouldRecompute) {
      const runCallbackFn = () => {
        const teardown = fn(); // A callback may return a function. If any, add it to the teardowns:

        if (typeof teardown === "function") {
          // Store this this function to be called at unmount
          state.teardowns.set(fn, teardown); // At unmount, call re-render at least once

          state.teardowns.set("_", scheduleRender);
        }
      };

      state.updates.push(isAsync ? () => new Promise(resolve => requestAnimationFrame(resolve)).then(runCallbackFn) : runCallbackFn);
    }
  };
};

const updateState = function updateState(initialValue) {
  let newValueFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value => value;
  const state = currentState;
  const index = state.statesIndex++;

  if (!state.setup) {
    state.states[index] = initialValue;
  }

  return [state.states[index], value => {
    const previousValue = state.states[index];
    const newValue = newValueFn(value, index);
    state.states[index] = newValue;

    if (JSON.stringify(newValue) !== JSON.stringify(previousValue)) {
      scheduleRender(); // Calling redraw multiple times: Mithril will drop extraneous redraw calls, so performance should not be an issue
    }
  }, index];
};

const useState = initialValue => {
  const state = currentState;

  const newValueFn = (value, index) => typeof value === "function" ? value(state.states[index]) : value;

  return updateState(initialValue, newValueFn);
};

const useEffect = effect(true);
const useLayoutEffect = effect();

const useReducer = (reducer, initialArg, initFn) => {
  const state = currentState; // From the React docs: You can also create the initial state lazily. To do this, you can pass an init function as the third argument. The initial state will be set to init(initialArg).

  const initialValue = !state.setup && initFn ? initFn(initialArg) : initialArg;

  const getValueDispatch = () => {
    const _updateState = updateState(initialValue),
          _updateState2 = _slicedToArray(_updateState, 3),
          value = _updateState2[0],
          setValue = _updateState2[1],
          index = _updateState2[2];

    const dispatch = action => {
      const previousValue = state.states[index];
      return setValue( // Next state:
      reducer(previousValue, action));
    };

    return [value, dispatch];
  };

  return getValueDispatch();
};

const useRef = initialValue => {
  // A ref is a persisted object that will not be updated, so it has no setter
  const _updateState3 = updateState({
    current: initialValue
  }),
        _updateState4 = _slicedToArray(_updateState3, 1),
        value = _updateState4[0];

  return value;
};

const useMemo = (fn, deps) => {
  const state = currentState;
  const shouldRecompute = updateDeps(deps);

  const _ref = !state.setup ? updateState(fn()) : updateState(),
        _ref2 = _slicedToArray(_ref, 2),
        memoized = _ref2[0],
        setMemoized = _ref2[1];

  if (state.setup && shouldRecompute) {
    setMemoized(fn());
  }

  return memoized;
};

const useCallback = (fn, deps) => useMemo(() => fn, deps);

const withHooks = (component, initialProps) => {
  const init = vnode => {
    Object.assign(vnode.state, {
      setup: false,
      states: [],
      statesIndex: 0,
      depsStates: [],
      depsIndex: 0,
      updates: [],
      teardowns: new Map() // Keep track of teardowns even when the update was run only once

    });
  };

  const update = vnode => {
    const prevState = currentState;
    currentState = vnode.state;

    try {
      vnode.state.updates.forEach(call);
    } finally {
      Object.assign(vnode.state, {
        setup: true,
        updates: [],
        depsIndex: 0,
        statesIndex: 0
      });
      currentState = prevState;
    }
  };

  const render = vnode => {
    const prevState = currentState;
    currentState = vnode.state;

    try {
      return component(_objectSpread({}, initialProps, vnode.attrs, {
        vnode,
        children: vnode.children
      }));
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    } finally {
      currentState = prevState;
    }
  };

  const teardown = vnode => {
    const prevState = currentState;
    currentState = vnode.state;

    try {
      [...vnode.state.teardowns.values()].forEach(call);
    } finally {
      currentState = prevState;
    }
  };

  return {
    oninit: init,
    oncreate: update,
    onupdate: update,
    view: render,
    onremove: teardown
  };
};

var htmlAttributes = {
  accept: "accept",
  acceptcharset: "acceptcharset",
  accesskey: "accesskey",
  action: "action",
  allowfullscreen: "allowfullscreen",
  allowtransparency: "allowtransparency",
  alt: "alt",
  async: "async",
  autocomplete: "autocomplete",
  autofocus: "autofocus",
  autoplay: "autoplay",
  capture: "capture",
  cellpadding: "cellpadding",
  cellspacing: "cellspacing",
  challenge: "challenge",
  charset: "charset",
  checked: "checked",
  class: "className",
  classid: "classid",
  classname: "className",
  // Special case:
  className: "className",
  colspan: "colspan",
  cols: "cols",
  content: "content",
  contenteditable: "contenteditable",
  contextmenu: "contextmenu",
  controls: "controls",
  coords: "coords",
  crossorigin: "crossorigin",
  data: "data",
  datetime: "datetime",
  default: "default",
  defer: "defer",
  dir: "dir",
  disabled: "disabled",
  download: "download",
  draggable: "draggable",
  enctype: "enctype",
  form: "form",
  formaction: "formaction",
  formenctype: "formenctype",
  formmethod: "formmethod",
  formnovalidate: "formnovalidate",
  formtarget: "formtarget",
  frameborder: "frameborder",
  headers: "headers",
  height: "height",
  hidden: "hidden",
  high: "high",
  href: "href",
  hreflang: "hreflang",
  htmlfor: "htmlfor",
  httpequiv: "httpequiv",
  icon: "icon",
  id: "id",
  inputmode: "inputmode",
  integrity: "integrity",
  is: "is",
  keyparams: "keyparams",
  keytype: "keytype",
  kind: "kind",
  label: "label",
  lang: "lang",
  list: "list",
  loop: "loop",
  low: "low",
  manifest: "manifest",
  marginheight: "marginheight",
  marginwidth: "marginwidth",
  max: "max",
  maxlength: "maxlength",
  media: "media",
  mediagroup: "mediagroup",
  method: "method",
  min: "min",
  minlength: "minlength",
  multiple: "multiple",
  muted: "muted",
  name: "name",
  novalidate: "novalidate",
  nonce: "nonce",
  onblur: "onblur",
  onchange: "onchange",
  onclick: "onclick",
  onfocus: "onfocus",
  oninput: "oninput",
  onkeydown: "onkeydown",
  onkeyup: "onkeyup",
  onmousedown: "onmousedown",
  onmouseout: "onmouseout",
  onmouseover: "onmouseover",
  onmouseup: "onmouseup",
  onscroll: "onscroll",
  onsubmit: "onsubmit",
  ontouchend: "ontouchend",
  ontouchmove: "ontouchmove",
  ontouchstart: "ontouchstart",
  open: "open",
  optimum: "optimum",
  pattern: "pattern",
  placeholder: "placeholder",
  poster: "poster",
  preload: "preload",
  radiogroup: "radiogroup",
  readonly: "readonly",
  rel: "rel",
  required: "required",
  reversed: "reversed",
  role: "role",
  rowspan: "rowspan",
  rows: "rows",
  sandbox: "sandbox",
  scope: "scope",
  scoped: "scoped",
  scrolling: "scrolling",
  seamless: "seamless",
  selected: "selected",
  shape: "shape",
  size: "size",
  sizes: "sizes",
  span: "span",
  spellcheck: "spellcheck",
  src: "src",
  srcdoc: "srcdoc",
  srclang: "srclang",
  srcset: "srcset",
  start: "start",
  step: "step",
  style: "style",
  summary: "summary",
  tabindex: "tabindex",
  target: "target",
  title: "title",
  type: "type",
  usemap: "usemap",
  value: "value",
  width: "width",
  wmode: "wmode",
  wrap: "wrap"
};

const a = htmlAttributes;
const h = mithril__WEBPACK_IMPORTED_MODULE_0__ || {};
const trust = h.trust;

h.trust = (html, wrapper) => wrapper ? mithril__WEBPACK_IMPORTED_MODULE_0__(wrapper, trust(html)) : trust(html);

h.displayName = "mithril";
const jsx = mithril__WEBPACK_IMPORTED_MODULE_0__;
const getRef = fn => ({
  oncreate: vnode => fn(vnode.dom)
});
const cast = withHooks;




/***/ }),

/***/ "../node_modules/mithril/api/mount.js":
/*!********************************************!*\
  !*** ../node_modules/mithril/api/mount.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vnode = __webpack_require__(/*! ../render/vnode */ "../node_modules/mithril/render/vnode.js")

module.exports = function(redrawService) {
	return function(root, component) {
		if (component === null) {
			redrawService.render(root, [])
			redrawService.unsubscribe(root)
			return
		}
		
		if (component.view == null && typeof component !== "function") throw new Error("m.mount(element, component) expects a component, not a vnode")
		
		var run = function() {
			redrawService.render(root, Vnode(component))
		}
		redrawService.subscribe(root, run)
		run()
	}
}


/***/ }),

/***/ "../node_modules/mithril/api/redraw.js":
/*!*********************************************!*\
  !*** ../node_modules/mithril/api/redraw.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var coreRenderer = __webpack_require__(/*! ../render/render */ "../node_modules/mithril/render/render.js")

function throttle(callback) {
	var pending = null
	return function() {
		if (pending === null) {
			pending = requestAnimationFrame(function() {
				pending = null
				callback()
			})
		}
	}
}


module.exports = function($window, throttleMock) {
	var renderService = coreRenderer($window)
	var callbacks = []
	var rendering = false

	function subscribe(key, callback) {
		unsubscribe(key)
		callbacks.push(key, callback)
	}
	function unsubscribe(key) {
		var index = callbacks.indexOf(key)
		if (index > -1) callbacks.splice(index, 2)
	}
	function sync() {
		if (rendering) throw new Error("Nested m.redraw.sync() call")
		rendering = true
		for (var i = 1; i < callbacks.length; i+=2) try {callbacks[i]()} catch (e) {if (typeof console !== "undefined") console.error(e)}
		rendering = false
	}

	var redraw = (throttleMock || throttle)(sync)
	redraw.sync = sync
	renderService.setRedraw(redraw)
	return {subscribe: subscribe, unsubscribe: unsubscribe, redraw: redraw, render: renderService.render}
}


/***/ }),

/***/ "../node_modules/mithril/api/router.js":
/*!*********************************************!*\
  !*** ../node_modules/mithril/api/router.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vnode = __webpack_require__(/*! ../render/vnode */ "../node_modules/mithril/render/vnode.js")
var Promise = __webpack_require__(/*! ../promise/promise */ "../node_modules/mithril/promise/promise.js")
var coreRouter = __webpack_require__(/*! ../router/router */ "../node_modules/mithril/router/router.js")

module.exports = function($window, redrawService) {
	var routeService = coreRouter($window)

	var identity = function(v) {return v}
	var render, component, attrs, currentPath, lastUpdate
	var route = function(root, defaultRoute, routes) {
		if (root == null) throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined")
		function run() {
			if (render != null) redrawService.render(root, render(Vnode(component, attrs.key, attrs)))
		}
		var redraw = function() {
			run()
			redraw = redrawService.redraw
		}
		redrawService.subscribe(root, run)
		var bail = function(path) {
			if (path !== defaultRoute) routeService.setPath(defaultRoute, null, {replace: true})
			else throw new Error("Could not resolve default route " + defaultRoute)
		}
		routeService.defineRoutes(routes, function(payload, params, path, route) {
			var update = lastUpdate = function(routeResolver, comp) {
				if (update !== lastUpdate) return
				component = comp != null && (typeof comp.view === "function" || typeof comp === "function")? comp : "div"
				attrs = params, currentPath = path, lastUpdate = null
				render = (routeResolver.render || identity).bind(routeResolver)
				redraw()
			}
			if (payload.view || typeof payload === "function") update({}, payload)
			else {
				if (payload.onmatch) {
					Promise.resolve(payload.onmatch(params, path, route)).then(function(resolved) {
						update(payload, resolved)
					}, function () { bail(path) })
				}
				else update(payload, "div")
			}
		}, bail, defaultRoute)
	}
	route.set = function(path, data, options) {
		if (lastUpdate != null) {
			options = options || {}
			options.replace = true
		}
		lastUpdate = null
		routeService.setPath(path, data, options)
	}
	route.get = function() {return currentPath}
	route.prefix = function(prefix) {routeService.prefix = prefix}
	var link = function(options, vnode) {
		vnode.dom.setAttribute("href", routeService.prefix + vnode.attrs.href)
		vnode.dom.onclick = function(e) {
			if (e.ctrlKey || e.metaKey || e.shiftKey || e.which === 2) return
			e.preventDefault()
			e.redraw = false
			var href = this.getAttribute("href")
			if (href.indexOf(routeService.prefix) === 0) href = href.slice(routeService.prefix.length)
			route.set(href, undefined, options)
		}
	}
	route.link = function(args) {
		if (args.tag == null) return link.bind(link, args)
		return link({}, args)
	}
	route.param = function(key) {
		if(typeof attrs !== "undefined" && typeof key !== "undefined") return attrs[key]
		return attrs
	}

	return route
}


/***/ }),

/***/ "../node_modules/mithril/hyperscript.js":
/*!**********************************************!*\
  !*** ../node_modules/mithril/hyperscript.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hyperscript = __webpack_require__(/*! ./render/hyperscript */ "../node_modules/mithril/render/hyperscript.js")

hyperscript.trust = __webpack_require__(/*! ./render/trust */ "../node_modules/mithril/render/trust.js")
hyperscript.fragment = __webpack_require__(/*! ./render/fragment */ "../node_modules/mithril/render/fragment.js")

module.exports = hyperscript


/***/ }),

/***/ "../node_modules/mithril/index.js":
/*!****************************************!*\
  !*** ../node_modules/mithril/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hyperscript = __webpack_require__(/*! ./hyperscript */ "../node_modules/mithril/hyperscript.js")
var m = function m() { return hyperscript.apply(this, arguments) }
m.m = hyperscript
m.trust = hyperscript.trust
m.fragment = hyperscript.fragment

var requestService = __webpack_require__(/*! ./request */ "../node_modules/mithril/request.js")
var redrawService = __webpack_require__(/*! ./redraw */ "../node_modules/mithril/redraw.js")

requestService.setCompletionCallback(redrawService.redraw)

m.mount = __webpack_require__(/*! ./mount */ "../node_modules/mithril/mount.js")
m.route = __webpack_require__(/*! ./route */ "../node_modules/mithril/route.js")
m.render = __webpack_require__(/*! ./render */ "../node_modules/mithril/render.js").render
m.redraw = redrawService.redraw
m.request = requestService.request
m.jsonp = requestService.jsonp
m.parseQueryString = __webpack_require__(/*! ./querystring/parse */ "../node_modules/mithril/querystring/parse.js")
m.buildQueryString = __webpack_require__(/*! ./querystring/build */ "../node_modules/mithril/querystring/build.js")
m.parsePathname = __webpack_require__(/*! ./pathname/parse */ "../node_modules/mithril/pathname/parse.js")
m.buildPathname = __webpack_require__(/*! ./pathname/build */ "../node_modules/mithril/pathname/build.js")
m.version = "bleeding-edge"
m.vnode = __webpack_require__(/*! ./render/vnode */ "../node_modules/mithril/render/vnode.js")
m.PromisePolyfill = __webpack_require__(/*! ./promise/polyfill */ "../node_modules/mithril/promise/polyfill.js")

module.exports = m


/***/ }),

/***/ "../node_modules/mithril/mount.js":
/*!****************************************!*\
  !*** ../node_modules/mithril/mount.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var redrawService = __webpack_require__(/*! ./redraw */ "../node_modules/mithril/redraw.js")

module.exports = __webpack_require__(/*! ./api/mount */ "../node_modules/mithril/api/mount.js")(redrawService)


/***/ }),

/***/ "../node_modules/mithril/pathname/assign.js":
/*!**************************************************!*\
  !*** ../node_modules/mithril/pathname/assign.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Object.assign || function(target, source) {
	Object.keys(source).forEach(function(key) { target[key] = source[key] })
}


/***/ }),

/***/ "../node_modules/mithril/pathname/build.js":
/*!*************************************************!*\
  !*** ../node_modules/mithril/pathname/build.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var buildQueryString = __webpack_require__(/*! ../querystring/build */ "../node_modules/mithril/querystring/build.js")
var assign = __webpack_require__(/*! ./assign */ "../node_modules/mithril/pathname/assign.js")

// Returns `path` from `template` + `params`
module.exports = function(template, params) {
	if ((/:([^\/\.-]+)(\.{3})?:/).test(template)) {
		throw new SyntaxError("Template parameter names *must* be separated")
	}
	if (params == null) return template
	var queryIndex = template.indexOf("?")
	var hashIndex = template.indexOf("#")
	var queryEnd = hashIndex < 0 ? template.length : hashIndex
	var pathEnd = queryIndex < 0 ? queryEnd : queryIndex
	var path = template.slice(0, pathEnd)
	var query = {}

	assign(query, params)

	var resolved = path.replace(/:([^\/\.-]+)(\.{3})?/g, function(m, key, variadic) {
		delete query[key]
		// If no such parameter exists, don't interpolate it.
		if (params[key] == null) return m
		// Escape normal parameters, but not variadic ones.
		return variadic ? params[key] : encodeURIComponent(String(params[key]))
	})

	// In case the template substitution adds new query/hash parameters.
	var newQueryIndex = resolved.indexOf("?")
	var newHashIndex = resolved.indexOf("#")
	var newQueryEnd = newHashIndex < 0 ? resolved.length : newHashIndex
	var newPathEnd = newQueryIndex < 0 ? newQueryEnd : newQueryIndex
	var result = resolved.slice(0, newPathEnd)

	if (queryIndex >= 0) result += "?" + template.slice(queryIndex, queryEnd)
	if (newQueryIndex >= 0) result += (queryIndex < 0 ? "?" : "&") + resolved.slice(newQueryIndex, newQueryEnd)
	var querystring = buildQueryString(query)
	if (querystring) result += (queryIndex < 0 && newQueryIndex < 0 ? "?" : "&") + querystring
	if (hashIndex >= 0) result += template.slice(hashIndex)
	if (newHashIndex >= 0) result += (hashIndex < 0 ? "" : "&") + resolved.slice(newHashIndex)
	return result
}


/***/ }),

/***/ "../node_modules/mithril/pathname/compileTemplate.js":
/*!***********************************************************!*\
  !*** ../node_modules/mithril/pathname/compileTemplate.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parsePathname = __webpack_require__(/*! ./parse */ "../node_modules/mithril/pathname/parse.js")

// Compiles a template into a function that takes a resolved path (without query
// strings) and returns an object containing the template parameters with their
// parsed values. This expects the input of the compiled template to be the
// output of `parsePathname`. Note that it does *not* remove query parameters
// specified in the template.
module.exports = function(template) {
	var templateData = parsePathname(template)
	var templateKeys = Object.keys(templateData.params)
	var keys = []
	var regexp = new RegExp("^" + templateData.path.replace(
		// I escape literal text so people can use things like `:file.:ext` or
		// `:lang-:locale` in routes. This is all merged into one pass so I
		// don't also accidentally escape `-` and make it harder to detect it to
		// ban it from template parameters.
		/:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g,
		function(m, key, extra) {
			if (key == null) return "\\" + m
			keys.push({k: key, r: extra === "..."})
			if (extra === "...") return "(.*)"
			if (extra === ".") return "([^/]+)\\."
			return "([^/]+)" + (extra || "")
		}
	) + "$")
	return function(data) {
		// First, check the params. Usually, there isn't any, and it's just
		// checking a static set.
		for (var i = 0; i < templateKeys.length; i++) {
			if (templateData.params[templateKeys[i]] !== data.params[templateKeys[i]]) return false
		}
		// If no interpolations exist, let's skip all the ceremony
		if (!keys.length) return regexp.test(data.path)
		var values = regexp.exec(data.path)
		if (values == null) return false
		for (var i = 0; i < keys.length; i++) {
			data.params[keys[i].k] = keys[i].r ? values[i + 1] : decodeURIComponent(values[i + 1])
		}
		return true
	}
}


/***/ }),

/***/ "../node_modules/mithril/pathname/parse.js":
/*!*************************************************!*\
  !*** ../node_modules/mithril/pathname/parse.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parseQueryString = __webpack_require__(/*! ../querystring/parse */ "../node_modules/mithril/querystring/parse.js")

// Returns `{path, params}` from `url`
module.exports = function(url) {
	var queryIndex = url.indexOf("?")
	var hashIndex = url.indexOf("#")
	var queryEnd = hashIndex < 0 ? url.length : hashIndex
	var pathEnd = queryIndex < 0 ? queryEnd : queryIndex
	var path = url.slice(0, pathEnd).replace(/\/{2,}/g, "/")
	var params = {}

	if (!path) path = "/"
	else {
		if (path[0] !== "/") path = "/" + path
		if (path.length > 1 && path[path.length - 1] === "/") path = path.slice(0, -1)
	}
	// Note: these are reversed because `parseQueryString` appends parameters
	// only if they don't exist. Please don't flip them.
	if (queryIndex >= 0) parseQueryString(url.slice(queryIndex + 1, queryEnd), params)
	if (hashIndex >= 0) parseQueryString(url.slice(hashIndex + 1), params)
	return {path: path, params: params}
}


/***/ }),

/***/ "../node_modules/mithril/promise/polyfill.js":
/*!***************************************************!*\
  !*** ../node_modules/mithril/promise/polyfill.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {
/** @constructor */
var PromisePolyfill = function(executor) {
	if (!(this instanceof PromisePolyfill)) throw new Error("Promise must be called with `new`")
	if (typeof executor !== "function") throw new TypeError("executor must be a function")

	var self = this, resolvers = [], rejectors = [], resolveCurrent = handler(resolvers, true), rejectCurrent = handler(rejectors, false)
	var instance = self._instance = {resolvers: resolvers, rejectors: rejectors}
	var callAsync = typeof setImmediate === "function" ? setImmediate : setTimeout
	function handler(list, shouldAbsorb) {
		return function execute(value) {
			var then
			try {
				if (shouldAbsorb && value != null && (typeof value === "object" || typeof value === "function") && typeof (then = value.then) === "function") {
					if (value === self) throw new TypeError("Promise can't be resolved w/ itself")
					executeOnce(then.bind(value))
				}
				else {
					callAsync(function() {
						if (!shouldAbsorb && list.length === 0) console.error("Possible unhandled promise rejection:", value)
						for (var i = 0; i < list.length; i++) list[i](value)
						resolvers.length = 0, rejectors.length = 0
						instance.state = shouldAbsorb
						instance.retry = function() {execute(value)}
					})
				}
			}
			catch (e) {
				rejectCurrent(e)
			}
		}
	}
	function executeOnce(then) {
		var runs = 0
		function run(fn) {
			return function(value) {
				if (runs++ > 0) return
				fn(value)
			}
		}
		var onerror = run(rejectCurrent)
		try {then(run(resolveCurrent), onerror)} catch (e) {onerror(e)}
	}

	executeOnce(executor)
}
PromisePolyfill.prototype.then = function(onFulfilled, onRejection) {
	var self = this, instance = self._instance
	function handle(callback, list, next, state) {
		list.push(function(value) {
			if (typeof callback !== "function") next(value)
			else try {resolveNext(callback(value))} catch (e) {if (rejectNext) rejectNext(e)}
		})
		if (typeof instance.retry === "function" && state === instance.state) instance.retry()
	}
	var resolveNext, rejectNext
	var promise = new PromisePolyfill(function(resolve, reject) {resolveNext = resolve, rejectNext = reject})
	handle(onFulfilled, instance.resolvers, resolveNext, true), handle(onRejection, instance.rejectors, rejectNext, false)
	return promise
}
PromisePolyfill.prototype.catch = function(onRejection) {
	return this.then(null, onRejection)
}
PromisePolyfill.prototype.finally = function(callback) {
	return this.then(
		function(value) {
			return PromisePolyfill.resolve(callback()).then(function() {
				return value
			})
		},
		function(reason) {
			return PromisePolyfill.resolve(callback()).then(function() {
				return PromisePolyfill.reject(reason);
			})
		}
	)
}
PromisePolyfill.resolve = function(value) {
	if (value instanceof PromisePolyfill) return value
	return new PromisePolyfill(function(resolve) {resolve(value)})
}
PromisePolyfill.reject = function(value) {
	return new PromisePolyfill(function(resolve, reject) {reject(value)})
}
PromisePolyfill.all = function(list) {
	return new PromisePolyfill(function(resolve, reject) {
		var total = list.length, count = 0, values = []
		if (list.length === 0) resolve([])
		else for (var i = 0; i < list.length; i++) {
			(function(i) {
				function consume(value) {
					count++
					values[i] = value
					if (count === total) resolve(values)
				}
				if (list[i] != null && (typeof list[i] === "object" || typeof list[i] === "function") && typeof list[i].then === "function") {
					list[i].then(consume, reject)
				}
				else consume(list[i])
			})(i)
		}
	})
}
PromisePolyfill.race = function(list) {
	return new PromisePolyfill(function(resolve, reject) {
		for (var i = 0; i < list.length; i++) {
			list[i].then(resolve, reject)
		}
	})
}

module.exports = PromisePolyfill

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../timers-browserify/main.js */ "../node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "../node_modules/mithril/promise/promise.js":
/*!**************************************************!*\
  !*** ../node_modules/mithril/promise/promise.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var PromisePolyfill = __webpack_require__(/*! ./polyfill */ "../node_modules/mithril/promise/polyfill.js")

if (typeof window !== "undefined") {
	if (typeof window.Promise === "undefined") {
		window.Promise = PromisePolyfill
	} else if (!window.Promise.prototype.finally) {
		window.Promise.prototype.finally = PromisePolyfill.prototype.finally
	}
	module.exports = window.Promise
} else if (typeof global !== "undefined") {
	if (typeof global.Promise === "undefined") {
		global.Promise = PromisePolyfill
	} else if (!global.Promise.prototype.finally) {
		global.Promise.prototype.finally = PromisePolyfill.prototype.finally
	}
	module.exports = global.Promise
} else {
	module.exports = PromisePolyfill
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/mithril/querystring/build.js":
/*!****************************************************!*\
  !*** ../node_modules/mithril/querystring/build.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(object) {
	if (Object.prototype.toString.call(object) !== "[object Object]") return ""

	var args = []
	for (var key in object) {
		destructure(key, object[key])
	}

	return args.join("&")

	function destructure(key, value) {
		if (Array.isArray(value)) {
			for (var i = 0; i < value.length; i++) {
				destructure(key + "[" + i + "]", value[i])
			}
		}
		else if (Object.prototype.toString.call(value) === "[object Object]") {
			for (var i in value) {
				destructure(key + "[" + i + "]", value[i])
			}
		}
		else args.push(encodeURIComponent(key) + (value != null && value !== "" ? "=" + encodeURIComponent(value) : ""))
	}
}


/***/ }),

/***/ "../node_modules/mithril/querystring/parse.js":
/*!****************************************************!*\
  !*** ../node_modules/mithril/querystring/parse.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// The extra `data` parameter is for if you want to append to an existing
// parameters object.
module.exports = function(string, data) {
	if (data == null) data = {}
	if (string === "" || string == null) return {}
	if (string.charAt(0) === "?") string = string.slice(1)

	var entries = string.split("&"), counters = {}
	for (var i = 0; i < entries.length; i++) {
		var entry = entries[i].split("=")
		var key = decodeURIComponent(entry[0])
		var value = entry.length === 2 ? decodeURIComponent(entry[1]) : ""

		if (value === "true") value = true
		else if (value === "false") value = false

		var levels = key.split(/\]\[?|\[/)
		var cursor = data
		if (key.indexOf("[") > -1) levels.pop()
		for (var j = 0; j < levels.length; j++) {
			var level = levels[j], nextLevel = levels[j + 1]
			var isNumber = nextLevel == "" || !isNaN(parseInt(nextLevel, 10))
			var isValue = j === levels.length - 1
			if (level === "") {
				var key = levels.slice(0, j).join()
				if (counters[key] == null) {
					counters[key] = Array.isArray(cursor) ? cursor.length : 0
				}
				level = counters[key]++
			}
			if (isValue) cursor[level] = value
			else if (cursor[level] == null) cursor[level] = isNumber ? [] : {}
			cursor = cursor[level]
		}
	}
	return data
}


/***/ }),

/***/ "../node_modules/mithril/redraw.js":
/*!*****************************************!*\
  !*** ../node_modules/mithril/redraw.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./api/redraw */ "../node_modules/mithril/api/redraw.js")(window)


/***/ }),

/***/ "../node_modules/mithril/render.js":
/*!*****************************************!*\
  !*** ../node_modules/mithril/render.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./render/render */ "../node_modules/mithril/render/render.js")(window)


/***/ }),

/***/ "../node_modules/mithril/render/fragment.js":
/*!**************************************************!*\
  !*** ../node_modules/mithril/render/fragment.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vnode = __webpack_require__(/*! ../render/vnode */ "../node_modules/mithril/render/vnode.js")
var hyperscriptVnode = __webpack_require__(/*! ./hyperscriptVnode */ "../node_modules/mithril/render/hyperscriptVnode.js")

module.exports = function() {
	var vnode = hyperscriptVnode.apply(0, arguments)

	vnode.tag = "["
	vnode.children = Vnode.normalizeChildren(vnode.children)
	return vnode
}


/***/ }),

/***/ "../node_modules/mithril/render/hyperscript.js":
/*!*****************************************************!*\
  !*** ../node_modules/mithril/render/hyperscript.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vnode = __webpack_require__(/*! ../render/vnode */ "../node_modules/mithril/render/vnode.js")
var hyperscriptVnode = __webpack_require__(/*! ./hyperscriptVnode */ "../node_modules/mithril/render/hyperscriptVnode.js")

var selectorParser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g
var selectorCache = {}
var hasOwn = {}.hasOwnProperty

function isEmpty(object) {
	for (var key in object) if (hasOwn.call(object, key)) return false
	return true
}

function compileSelector(selector) {
	var match, tag = "div", classes = [], attrs = {}
	while (match = selectorParser.exec(selector)) {
		var type = match[1], value = match[2]
		if (type === "" && value !== "") tag = value
		else if (type === "#") attrs.id = value
		else if (type === ".") classes.push(value)
		else if (match[3][0] === "[") {
			var attrValue = match[6]
			if (attrValue) attrValue = attrValue.replace(/\\(["'])/g, "$1").replace(/\\\\/g, "\\")
			if (match[4] === "class") classes.push(attrValue)
			else attrs[match[4]] = attrValue === "" ? attrValue : attrValue || true
		}
	}
	if (classes.length > 0) attrs.className = classes.join(" ")
	return selectorCache[selector] = {tag: tag, attrs: attrs}
}

function execSelector(state, vnode) {
	var attrs = vnode.attrs
	var children = Vnode.normalizeChildren(vnode.children)
	var hasClass = hasOwn.call(attrs, "class")
	var className = hasClass ? attrs.class : attrs.className

	vnode.tag = state.tag
	vnode.attrs = null
	vnode.children = undefined

	if (!isEmpty(state.attrs) && !isEmpty(attrs)) {
		var newAttrs = {}

		for (var key in attrs) {
			if (hasOwn.call(attrs, key)) newAttrs[key] = attrs[key]
		}

		attrs = newAttrs
	}

	for (var key in state.attrs) {
		if (hasOwn.call(state.attrs, key) && key !== "className" && !hasOwn.call(attrs, key)){
			attrs[key] = state.attrs[key]
		}
	}
	if (className != null || state.attrs.className != null) attrs.className =
		className != null
			? state.attrs.className != null
				? String(state.attrs.className) + " " + String(className)
				: className
			: state.attrs.className != null
				? state.attrs.className
				: null

	if (hasClass) attrs.class = null

	for (var key in attrs) {
		if (hasOwn.call(attrs, key) && key !== "key") {
			vnode.attrs = attrs
			break
		}
	}

	if (Array.isArray(children) && children.length === 1 && children[0] != null && children[0].tag === "#") {
		vnode.text = children[0].children
	} else {
		vnode.children = children
	}

	return vnode
}

function hyperscript(selector) {
	if (selector == null || typeof selector !== "string" && typeof selector !== "function" && typeof selector.view !== "function") {
		throw Error("The selector must be either a string or a component.");
	}

	var vnode = hyperscriptVnode.apply(1, arguments)

	if (typeof selector === "string") {
		vnode.children = Vnode.normalizeChildren(vnode.children)
		if (selector !== "[") return execSelector(selectorCache[selector] || compileSelector(selector), vnode)
	}
	
	vnode.tag = selector
	return vnode
}

module.exports = hyperscript


/***/ }),

/***/ "../node_modules/mithril/render/hyperscriptVnode.js":
/*!**********************************************************!*\
  !*** ../node_modules/mithril/render/hyperscriptVnode.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vnode = __webpack_require__(/*! ../render/vnode */ "../node_modules/mithril/render/vnode.js")

// Call via `hyperscriptVnode.apply(startOffset, arguments)`
//
// The reason I do it this way, forwarding the arguments and passing the start
// offset in `this`, is so I don't have to create a temporary array in a
// performance-critical path.
//
// In native ES6, I'd instead add a final `...args` parameter to the
// `hyperscript` and `fragment` factories and define this as
// `hyperscriptVnode(...args)`, since modern engines do optimize that away. But
// ES5 (what Mithril requires thanks to IE support) doesn't give me that luxury,
// and engines aren't nearly intelligent enough to do either of these:
//
// 1. Elide the allocation for `[].slice.call(arguments, 1)` when it's passed to
//    another function only to be indexed.
// 2. Elide an `arguments` allocation when it's passed to any function other
//    than `Function.prototype.apply` or `Reflect.apply`.
//
// In ES6, it'd probably look closer to this (I'd need to profile it, though):
// module.exports = function(attrs, ...children) {
//     if (attrs == null || typeof attrs === "object" && attrs.tag == null && !Array.isArray(attrs)) {
//         if (children.length === 1 && Array.isArray(children[0])) children = children[0]
//     } else {
//         children = children.length === 0 && Array.isArray(attrs) ? attrs : [attrs, ...children]
//         attrs = undefined
//     }
//
//     if (attrs == null) attrs = {}
//     return Vnode("", attrs.key, attrs, children)
// }
module.exports = function() {
	var attrs = arguments[this], start = this + 1, children

	if (attrs == null) {
		attrs = {}
	} else if (typeof attrs !== "object" || attrs.tag != null || Array.isArray(attrs)) {
		attrs = {}
		start = this
	}

	if (arguments.length === start + 1) {
		children = arguments[start]
		if (!Array.isArray(children)) children = [children]
	} else {
		children = []
		while (start < arguments.length) children.push(arguments[start++])
	}

	return Vnode("", attrs.key, attrs, children)
}


/***/ }),

/***/ "../node_modules/mithril/render/render.js":
/*!************************************************!*\
  !*** ../node_modules/mithril/render/render.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vnode = __webpack_require__(/*! ../render/vnode */ "../node_modules/mithril/render/vnode.js")

module.exports = function($window) {
	var $doc = $window.document

	var nameSpace = {
		svg: "http://www.w3.org/2000/svg",
		math: "http://www.w3.org/1998/Math/MathML"
	}

	var redraw
	function setRedraw(callback) {return redraw = callback}

	function getNameSpace(vnode) {
		return vnode.attrs && vnode.attrs.xmlns || nameSpace[vnode.tag]
	}

	//sanity check to discourage people from doing `vnode.state = ...`
	function checkState(vnode, original) {
		if (vnode.state !== original) throw new Error("`vnode.state` must not be modified")
	}

	//Note: the hook is passed as the `this` argument to allow proxying the
	//arguments without requiring a full array allocation to do so. It also
	//takes advantage of the fact the current `vnode` is the first argument in
	//all lifecycle methods.
	function callHook(vnode) {
		var original = vnode.state
		try {
			return this.apply(original, arguments)
		} finally {
			checkState(vnode, original)
		}
	}

	// IE11 (at least) throws an UnspecifiedError when accessing document.activeElement when
	// inside an iframe. Catch and swallow this error, and heavy-handidly return null.
	function activeElement() {
		try {
			return $doc.activeElement
		} catch (e) {
			return null
		}
	}
	//create
	function createNodes(parent, vnodes, start, end, hooks, nextSibling, ns) {
		for (var i = start; i < end; i++) {
			var vnode = vnodes[i]
			if (vnode != null) {
				createNode(parent, vnode, hooks, ns, nextSibling)
			}
		}
	}
	function createNode(parent, vnode, hooks, ns, nextSibling) {
		var tag = vnode.tag
		if (typeof tag === "string") {
			vnode.state = {}
			if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks)
			switch (tag) {
				case "#": createText(parent, vnode, nextSibling); break
				case "<": createHTML(parent, vnode, ns, nextSibling); break
				case "[": createFragment(parent, vnode, hooks, ns, nextSibling); break
				default: createElement(parent, vnode, hooks, ns, nextSibling)
			}
		}
		else createComponent(parent, vnode, hooks, ns, nextSibling)
	}
	function createText(parent, vnode, nextSibling) {
		vnode.dom = $doc.createTextNode(vnode.children)
		insertNode(parent, vnode.dom, nextSibling)
	}
	var possibleParents = {caption: "table", thead: "table", tbody: "table", tfoot: "table", tr: "tbody", th: "tr", td: "tr", colgroup: "table", col: "colgroup"}
	function createHTML(parent, vnode, ns, nextSibling) {
		var match = vnode.children.match(/^\s*?<(\w+)/im) || []
		// not using the proper parent makes the child element(s) vanish.
		//     var div = document.createElement("div")
		//     div.innerHTML = "<td>i</td><td>j</td>"
		//     console.log(div.innerHTML)
		// --> "ij", no <td> in sight.
		var temp = $doc.createElement(possibleParents[match[1]] || "div")
		if (ns === "http://www.w3.org/2000/svg") {
			temp.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\">" + vnode.children + "</svg>"
			temp = temp.firstChild
		} else {
			temp.innerHTML = vnode.children
		}
		vnode.dom = temp.firstChild
		vnode.domSize = temp.childNodes.length
		var fragment = $doc.createDocumentFragment()
		var child
		while (child = temp.firstChild) {
			fragment.appendChild(child)
		}
		insertNode(parent, fragment, nextSibling)
	}
	function createFragment(parent, vnode, hooks, ns, nextSibling) {
		var fragment = $doc.createDocumentFragment()
		if (vnode.children != null) {
			var children = vnode.children
			createNodes(fragment, children, 0, children.length, hooks, null, ns)
		}
		vnode.dom = fragment.firstChild
		vnode.domSize = fragment.childNodes.length
		insertNode(parent, fragment, nextSibling)
	}
	function createElement(parent, vnode, hooks, ns, nextSibling) {
		var tag = vnode.tag
		var attrs = vnode.attrs
		var is = attrs && attrs.is

		ns = getNameSpace(vnode) || ns

		var element = ns ?
			is ? $doc.createElementNS(ns, tag, {is: is}) : $doc.createElementNS(ns, tag) :
			is ? $doc.createElement(tag, {is: is}) : $doc.createElement(tag)
		vnode.dom = element

		if (attrs != null) {
			setAttrs(vnode, attrs, ns)
		}

		insertNode(parent, element, nextSibling)

		if (attrs != null && attrs.contenteditable != null) {
			setContentEditable(vnode)
		}
		else {
			if (vnode.text != null) {
				if (vnode.text !== "") element.textContent = vnode.text
				else vnode.children = [Vnode("#", undefined, undefined, vnode.text, undefined, undefined)]
			}
			if (vnode.children != null) {
				var children = vnode.children
				createNodes(element, children, 0, children.length, hooks, null, ns)
				if (vnode.tag === "select" && attrs != null) setLateSelectAttrs(vnode, attrs)
			}
		}
	}
	function initComponent(vnode, hooks) {
		var sentinel
		if (typeof vnode.tag.view === "function") {
			vnode.state = Object.create(vnode.tag)
			sentinel = vnode.state.view
			if (sentinel.$$reentrantLock$$ != null) return
			sentinel.$$reentrantLock$$ = true
		} else {
			vnode.state = void 0
			sentinel = vnode.tag
			if (sentinel.$$reentrantLock$$ != null) return
			sentinel.$$reentrantLock$$ = true
			vnode.state = (vnode.tag.prototype != null && typeof vnode.tag.prototype.view === "function") ? new vnode.tag(vnode) : vnode.tag(vnode)
		}
		initLifecycle(vnode.state, vnode, hooks)
		if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks)
		vnode.instance = Vnode.normalize(callHook.call(vnode.state.view, vnode))
		if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument")
		sentinel.$$reentrantLock$$ = null
	}
	function createComponent(parent, vnode, hooks, ns, nextSibling) {
		initComponent(vnode, hooks)
		if (vnode.instance != null) {
			createNode(parent, vnode.instance, hooks, ns, nextSibling)
			vnode.dom = vnode.instance.dom
			vnode.domSize = vnode.dom != null ? vnode.instance.domSize : 0
		}
		else {
			vnode.domSize = 0
		}
	}

	//update
	/**
	 * @param {Element|Fragment} parent - the parent element
	 * @param {Vnode[] | null} old - the list of vnodes of the last `render()` call for
	 *                               this part of the tree
	 * @param {Vnode[] | null} vnodes - as above, but for the current `render()` call.
	 * @param {Function[]} hooks - an accumulator of post-render hooks (oncreate/onupdate)
	 * @param {Element | null} nextSibling - the next DOM node if we're dealing with a
	 *                                       fragment that is not the last item in its
	 *                                       parent
	 * @param {'svg' | 'math' | String | null} ns) - the current XML namespace, if any
	 * @returns void
	 */
	// This function diffs and patches lists of vnodes, both keyed and unkeyed.
	//
	// We will:
	//
	// 1. describe its general structure
	// 2. focus on the diff algorithm optimizations
	// 3. discuss DOM node operations.

	// ## Overview:
	//
	// The updateNodes() function:
	// - deals with trivial cases
	// - determines whether the lists are keyed or unkeyed based on the first non-null node
	//   of each list.
	// - diffs them and patches the DOM if needed (that's the brunt of the code)
	// - manages the leftovers: after diffing, are there:
	//   - old nodes left to remove?
	// 	 - new nodes to insert?
	// 	 deal with them!
	//
	// The lists are only iterated over once, with an exception for the nodes in `old` that
	// are visited in the fourth part of the diff and in the `removeNodes` loop.

	// ## Diffing
	//
	// Reading https://github.com/localvoid/ivi/blob/ddc09d06abaef45248e6133f7040d00d3c6be853/packages/ivi/src/vdom/implementation.ts#L617-L837
	// may be good for context on longest increasing subsequence-based logic for moving nodes.
	//
	// In order to diff keyed lists, one has to
	//
	// 1) match nodes in both lists, per key, and update them accordingly
	// 2) create the nodes present in the new list, but absent in the old one
	// 3) remove the nodes present in the old list, but absent in the new one
	// 4) figure out what nodes in 1) to move in order to minimize the DOM operations.
	//
	// To achieve 1) one can create a dictionary of keys => index (for the old list), then iterate
	// over the new list and for each new vnode, find the corresponding vnode in the old list using
	// the map.
	// 2) is achieved in the same step: if a new node has no corresponding entry in the map, it is new
	// and must be created.
	// For the removals, we actually remove the nodes that have been updated from the old list.
	// The nodes that remain in that list after 1) and 2) have been performed can be safely removed.
	// The fourth step is a bit more complex and relies on the longest increasing subsequence (LIS)
	// algorithm.
	//
	// the longest increasing subsequence is the list of nodes that can remain in place. Imagine going
	// from `1,2,3,4,5` to `4,5,1,2,3` where the numbers are not necessarily the keys, but the indices
	// corresponding to the keyed nodes in the old list (keyed nodes `e,d,c,b,a` => `b,a,e,d,c` would
	//  match the above lists, for example).
	//
	// In there are two increasing subsequences: `4,5` and `1,2,3`, the latter being the longest. We
	// can update those nodes without moving them, and only call `insertNode` on `4` and `5`.
	//
	// @localvoid adapted the algo to also support node deletions and insertions (the `lis` is actually
	// the longest increasing subsequence *of old nodes still present in the new list*).
	//
	// It is a general algorithm that is fireproof in all circumstances, but it requires the allocation
	// and the construction of a `key => oldIndex` map, and three arrays (one with `newIndex => oldIndex`,
	// the `LIS` and a temporary one to create the LIS).
	//
	// So we cheat where we can: if the tails of the lists are identical, they are guaranteed to be part of
	// the LIS and can be updated without moving them.
	//
	// If two nodes are swapped, they are guaranteed not to be part of the LIS, and must be moved (with
	// the exception of the last node if the list is fully reversed).
	//
	// ## Finding the next sibling.
	//
	// `updateNode()` and `createNode()` expect a nextSibling parameter to perform DOM operations.
	// When the list is being traversed top-down, at any index, the DOM nodes up to the previous
	// vnode reflect the content of the new list, whereas the rest of the DOM nodes reflect the old
	// list. The next sibling must be looked for in the old list using `getNextSibling(... oldStart + 1 ...)`.
	//
	// In the other scenarios (swaps, upwards traversal, map-based diff),
	// the new vnodes list is traversed upwards. The DOM nodes at the bottom of the list reflect the
	// bottom part of the new vnodes list, and we can use the `v.dom`  value of the previous node
	// as the next sibling (cached in the `nextSibling` variable).


	// ## DOM node moves
	//
	// In most scenarios `updateNode()` and `createNode()` perform the DOM operations. However,
	// this is not the case if the node moved (second and fourth part of the diff algo). We move
	// the old DOM nodes before updateNode runs because it enables us to use the cached `nextSibling`
	// variable rather than fetching it using `getNextSibling()`.
	//
	// The fourth part of the diff currently inserts nodes unconditionally, leading to issues
	// like #1791 and #1999. We need to be smarter about those situations where adjascent old
	// nodes remain together in the new list in a way that isn't covered by parts one and
	// three of the diff algo.

	function updateNodes(parent, old, vnodes, hooks, nextSibling, ns) {
		if (old === vnodes || old == null && vnodes == null) return
		else if (old == null || old.length === 0) createNodes(parent, vnodes, 0, vnodes.length, hooks, nextSibling, ns)
		else if (vnodes == null || vnodes.length === 0) removeNodes(old, 0, old.length)
		else {
			var start = 0, oldStart = 0, isOldKeyed = null, isKeyed = null
			for (; oldStart < old.length; oldStart++) {
				if (old[oldStart] != null) {
					isOldKeyed = old[oldStart].key != null
					break
				}
			}
			for (; start < vnodes.length; start++) {
				if (vnodes[start] != null) {
					isKeyed = vnodes[start].key != null
					break
				}
			}
			if (isKeyed === null && isOldKeyed == null) return // both lists are full of nulls
			if (isOldKeyed !== isKeyed) {
				removeNodes(old, oldStart, old.length)
				createNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns)
			} else if (!isKeyed) {
				// Don't index past the end of either list (causes deopts).
				var commonLength = old.length < vnodes.length ? old.length : vnodes.length
				// Rewind if necessary to the first non-null index on either side.
				// We could alternatively either explicitly create or remove nodes when `start !== oldStart`
				// but that would be optimizing for sparse lists which are more rare than dense ones.
				start = start < oldStart ? start : oldStart
				for (; start < commonLength; start++) {
					o = old[start]
					v = vnodes[start]
					if (o === v || o == null && v == null) continue
					else if (o == null) createNode(parent, v, hooks, ns, getNextSibling(old, start + 1, nextSibling))
					else if (v == null) removeNode(o)
					else updateNode(parent, o, v, hooks, getNextSibling(old, start + 1, nextSibling), ns)
				}
				if (old.length > commonLength) removeNodes(old, start, old.length)
				if (vnodes.length > commonLength) createNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns)
			} else {
				// keyed diff
				var oldEnd = old.length - 1, end = vnodes.length - 1, map, o, v, oe, ve, topSibling

				// bottom-up
				while (oldEnd >= oldStart && end >= start) {
					oe = old[oldEnd]
					ve = vnodes[end]
					if (oe == null) oldEnd--
					else if (ve == null) end--
					else if (oe.key === ve.key) {
						if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns)
						if (ve.dom != null) nextSibling = ve.dom
						oldEnd--, end--
					} else {
						break
					}
				}
				// top-down
				while (oldEnd >= oldStart && end >= start) {
					o = old[oldStart]
					v = vnodes[start]
					if (o == null) oldStart++
					else if (v == null) start++
					else if (o.key === v.key) {
						oldStart++, start++
						if (o !== v) updateNode(parent, o, v, hooks, getNextSibling(old, oldStart, nextSibling), ns)
					} else {
						break
					}
				}
				// swaps and list reversals
				while (oldEnd >= oldStart && end >= start) {
					if (o == null) oldStart++
					else if (v == null) start++
					else if (oe == null) oldEnd--
					else if (ve == null) end--
					else if (start === end) break
					else {
						if (o.key !== ve.key || oe.key !== v.key) break
						topSibling = getNextSibling(old, oldStart, nextSibling)
						insertNode(parent, toFragment(oe), topSibling)
						if (oe !== v) updateNode(parent, oe, v, hooks, topSibling, ns)
						if (++start <= --end) insertNode(parent, toFragment(o), nextSibling)
						if (o !== ve) updateNode(parent, o, ve, hooks, nextSibling, ns)
						if (ve.dom != null) nextSibling = ve.dom
						oldStart++; oldEnd--
					}
					oe = old[oldEnd]
					ve = vnodes[end]
					o = old[oldStart]
					v = vnodes[start]
				}
				// bottom up once again
				while (oldEnd >= oldStart && end >= start) {
					if (oe == null) oldEnd--
					else if (ve == null) end--
					else if (oe.key === ve.key) {
						if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns)
						if (ve.dom != null) nextSibling = ve.dom
						oldEnd--, end--
					} else {
						break
					}
					oe = old[oldEnd]
					ve = vnodes[end]
				}
				if (start > end) removeNodes(old, oldStart, oldEnd + 1)
				else if (oldStart > oldEnd) createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns)
				else {
					// inspired by ivi https://github.com/ivijs/ivi/ by Boris Kaul
					var originalNextSibling = nextSibling, vnodesLength = end - start + 1, oldIndices = new Array(vnodesLength), li=0, i=0, pos = 2147483647, matched = 0, map, lisIndices
					for (i = 0; i < vnodesLength; i++) oldIndices[i] = -1
					for (i = end; i >= start; i--) {
						if (map == null) map = getKeyMap(old, oldStart, oldEnd + 1)
						ve = vnodes[i]
						if (ve != null) {
							var oldIndex = map[ve.key]
							if (oldIndex != null) {
								pos = (oldIndex < pos) ? oldIndex : -1 // becomes -1 if nodes were re-ordered
								oldIndices[i-start] = oldIndex
								oe = old[oldIndex]
								old[oldIndex] = null
								if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns)
								if (ve.dom != null) nextSibling = ve.dom
								matched++
							}
						}
					}
					nextSibling = originalNextSibling
					if (matched !== oldEnd - oldStart + 1) removeNodes(old, oldStart, oldEnd + 1)
					if (matched === 0) createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns)
					else {
						if (pos === -1) {
							// the indices of the indices of the items that are part of the
							// longest increasing subsequence in the oldIndices list
							lisIndices = makeLisIndices(oldIndices)
							li = lisIndices.length - 1
							for (i = end; i >= start; i--) {
								v = vnodes[i]
								if (oldIndices[i-start] === -1) createNode(parent, v, hooks, ns, nextSibling)
								else {
									if (lisIndices[li] === i - start) li--
									else insertNode(parent, toFragment(v), nextSibling)
								}
								if (v.dom != null) nextSibling = vnodes[i].dom
							}
						} else {
							for (i = end; i >= start; i--) {
								v = vnodes[i]
								if (oldIndices[i-start] === -1) createNode(parent, v, hooks, ns, nextSibling)
								if (v.dom != null) nextSibling = vnodes[i].dom
							}
						}
					}
				}
			}
		}
	}
	function updateNode(parent, old, vnode, hooks, nextSibling, ns) {
		var oldTag = old.tag, tag = vnode.tag
		if (oldTag === tag) {
			vnode.state = old.state
			vnode.events = old.events
			if (shouldNotUpdate(vnode, old)) return
			if (typeof oldTag === "string") {
				if (vnode.attrs != null) {
					updateLifecycle(vnode.attrs, vnode, hooks)
				}
				switch (oldTag) {
					case "#": updateText(old, vnode); break
					case "<": updateHTML(parent, old, vnode, ns, nextSibling); break
					case "[": updateFragment(parent, old, vnode, hooks, nextSibling, ns); break
					default: updateElement(old, vnode, hooks, ns)
				}
			}
			else updateComponent(parent, old, vnode, hooks, nextSibling, ns)
		}
		else {
			removeNode(old)
			createNode(parent, vnode, hooks, ns, nextSibling)
		}
	}
	function updateText(old, vnode) {
		if (old.children.toString() !== vnode.children.toString()) {
			old.dom.nodeValue = vnode.children
		}
		vnode.dom = old.dom
	}
	function updateHTML(parent, old, vnode, ns, nextSibling) {
		if (old.children !== vnode.children) {
			toFragment(old)
			createHTML(parent, vnode, ns, nextSibling)
		}
		else vnode.dom = old.dom, vnode.domSize = old.domSize
	}
	function updateFragment(parent, old, vnode, hooks, nextSibling, ns) {
		updateNodes(parent, old.children, vnode.children, hooks, nextSibling, ns)
		var domSize = 0, children = vnode.children
		vnode.dom = null
		if (children != null) {
			for (var i = 0; i < children.length; i++) {
				var child = children[i]
				if (child != null && child.dom != null) {
					if (vnode.dom == null) vnode.dom = child.dom
					domSize += child.domSize || 1
				}
			}
			if (domSize !== 1) vnode.domSize = domSize
		}
	}
	function updateElement(old, vnode, hooks, ns) {
		var element = vnode.dom = old.dom
		ns = getNameSpace(vnode) || ns

		if (vnode.tag === "textarea") {
			if (vnode.attrs == null) vnode.attrs = {}
			if (vnode.text != null) {
				vnode.attrs.value = vnode.text //FIXME handle multiple children
				vnode.text = undefined
			}
		}
		updateAttrs(vnode, old.attrs, vnode.attrs, ns)
		if (vnode.attrs != null && vnode.attrs.contenteditable != null) {
			setContentEditable(vnode)
		}
		else if (old.text != null && vnode.text != null && vnode.text !== "") {
			if (old.text.toString() !== vnode.text.toString()) old.dom.firstChild.nodeValue = vnode.text
		}
		else {
			if (old.text != null) old.children = [Vnode("#", undefined, undefined, old.text, undefined, old.dom.firstChild)]
			if (vnode.text != null) vnode.children = [Vnode("#", undefined, undefined, vnode.text, undefined, undefined)]
			updateNodes(element, old.children, vnode.children, hooks, null, ns)
		}
	}
	function updateComponent(parent, old, vnode, hooks, nextSibling, ns) {
		vnode.instance = Vnode.normalize(callHook.call(vnode.state.view, vnode))
		if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument")
		updateLifecycle(vnode.state, vnode, hooks)
		if (vnode.attrs != null) updateLifecycle(vnode.attrs, vnode, hooks)
		if (vnode.instance != null) {
			if (old.instance == null) createNode(parent, vnode.instance, hooks, ns, nextSibling)
			else updateNode(parent, old.instance, vnode.instance, hooks, nextSibling, ns)
			vnode.dom = vnode.instance.dom
			vnode.domSize = vnode.instance.domSize
		}
		else if (old.instance != null) {
			removeNode(old.instance)
			vnode.dom = undefined
			vnode.domSize = 0
		}
		else {
			vnode.dom = old.dom
			vnode.domSize = old.domSize
		}
	}
	function getKeyMap(vnodes, start, end) {
		var map = Object.create(null)
		for (; start < end; start++) {
			var vnode = vnodes[start]
			if (vnode != null) {
				var key = vnode.key
				if (key != null) map[key] = start
			}
		}
		return map
	}
	// Lifted from ivi https://github.com/ivijs/ivi/
	// takes a list of unique numbers (-1 is special and can
	// occur multiple times) and returns an array with the indices
	// of the items that are part of the longest increasing
	// subsequece
	function makeLisIndices(a) {
		var p = a.slice()
		var result = []
		result.push(0)
		var u
		var v
		for (var i = 0, il = a.length; i < il; ++i) {
			if (a[i] === -1) {
				continue
			}
			var j = result[result.length - 1]
			if (a[j] < a[i]) {
				p[i] = j
				result.push(i)
				continue
			}
			u = 0
			v = result.length - 1
			while (u < v) {
				var c = ((u + v) / 2) | 0 // eslint-disable-line no-bitwise
				if (a[result[c]] < a[i]) {
					u = c + 1
				}
				else {
					v = c
				}
			}
			if (a[i] < a[result[u]]) {
				if (u > 0) {
					p[i] = result[u - 1]
				}
				result[u] = i
			}
		}
		u = result.length
		v = result[u - 1]
		while (u-- > 0) {
			result[u] = v
			v = p[v]
		}
		return result
	}

	function toFragment(vnode) {
		var count = vnode.domSize
		if (count != null || vnode.dom == null) {
			var fragment = $doc.createDocumentFragment()
			if (count > 0) {
				var dom = vnode.dom
				while (--count) fragment.appendChild(dom.nextSibling)
				fragment.insertBefore(dom, fragment.firstChild)
			}
			return fragment
		}
		else return vnode.dom
	}
	function getNextSibling(vnodes, i, nextSibling) {
		for (; i < vnodes.length; i++) {
			if (vnodes[i] != null && vnodes[i].dom != null) return vnodes[i].dom
		}
		return nextSibling
	}

	function insertNode(parent, dom, nextSibling) {
		if (nextSibling != null) parent.insertBefore(dom, nextSibling)
		else parent.appendChild(dom)
	}

	function setContentEditable(vnode) {
		var children = vnode.children
		if (children != null && children.length === 1 && children[0].tag === "<") {
			var content = children[0].children
			if (vnode.dom.innerHTML !== content) vnode.dom.innerHTML = content
		}
		else if (vnode.text != null || children != null && children.length !== 0) throw new Error("Child node of a contenteditable must be trusted")
	}

	//remove
	function removeNodes(vnodes, start, end) {
		for (var i = start; i < end; i++) {
			var vnode = vnodes[i]
			if (vnode != null) removeNode(vnode)
		}
	}
	function removeNode(vnode) {
		var expected = 1, called = 0
		var original = vnode.state
		if (typeof vnode.tag !== "string" && typeof vnode.state.onbeforeremove === "function") {
			var result = callHook.call(vnode.state.onbeforeremove, vnode)
			if (result != null && typeof result.then === "function") {
				expected++
				result.then(continuation, continuation)
			}
		}
		if (vnode.attrs && typeof vnode.attrs.onbeforeremove === "function") {
			var result = callHook.call(vnode.attrs.onbeforeremove, vnode)
			if (result != null && typeof result.then === "function") {
				expected++
				result.then(continuation, continuation)
			}
		}
		continuation()
		function continuation() {
			if (++called === expected) {
				checkState(vnode, original)
				onremove(vnode)
				if (vnode.dom) {
					var parent = vnode.dom.parentNode
					var count = vnode.domSize || 1
					while (--count) parent.removeChild(vnode.dom.nextSibling)
					parent.removeChild(vnode.dom)
				}
			}
		}
	}
	function onremove(vnode) {
		if (typeof vnode.tag !== "string" && typeof vnode.state.onremove === "function") callHook.call(vnode.state.onremove, vnode)
		if (vnode.attrs && typeof vnode.attrs.onremove === "function") callHook.call(vnode.attrs.onremove, vnode)
		if (typeof vnode.tag !== "string") {
			if (vnode.instance != null) onremove(vnode.instance)
		} else {
			var children = vnode.children
			if (Array.isArray(children)) {
				for (var i = 0; i < children.length; i++) {
					var child = children[i]
					if (child != null) onremove(child)
				}
			}
		}
	}

	//attrs
	function setAttrs(vnode, attrs, ns) {
		for (var key in attrs) {
			setAttr(vnode, key, null, attrs[key], ns)
		}
	}
	function setAttr(vnode, key, old, value, ns) {
		if (key === "key" || key === "is" || value == null || isLifecycleMethod(key) || (old === value && !isFormAttribute(vnode, key)) && typeof value !== "object") return
		if (key[0] === "o" && key[1] === "n") return updateEvent(vnode, key, value)
		if (key.slice(0, 6) === "xlink:") vnode.dom.setAttributeNS("http://www.w3.org/1999/xlink", key.slice(6), value)
		else if (key === "style") updateStyle(vnode.dom, old, value)
		else if (hasPropertyKey(vnode, key, ns)) {
			if (key === "value") {
				// Only do the coercion if we're actually going to check the value.
				/* eslint-disable no-implicit-coercion */
				//setting input[value] to same value by typing on focused element moves cursor to end in Chrome
				if ((vnode.tag === "input" || vnode.tag === "textarea") && vnode.dom.value === "" + value && vnode.dom === activeElement()) return
				//setting select[value] to same value while having select open blinks select dropdown in Chrome
				if (vnode.tag === "select" && old !== null && vnode.dom.value === "" + value) return
				//setting option[value] to same value while having select open blinks select dropdown in Chrome
				if (vnode.tag === "option" && old !== null && vnode.dom.value === "" + value) return
				/* eslint-enable no-implicit-coercion */
			}
			// If you assign an input type that is not supported by IE 11 with an assignment expression, an error will occur.
			if (vnode.tag === "input" && key === "type") vnode.dom.setAttribute(key, value)
			else vnode.dom[key] = value
		} else {
			if (typeof value === "boolean") {
				if (value) vnode.dom.setAttribute(key, "")
				else vnode.dom.removeAttribute(key)
			}
			else vnode.dom.setAttribute(key === "className" ? "class" : key, value)
		}
	}
	function removeAttr(vnode, key, old, ns) {
		if (key === "key" || key === "is" || old == null || isLifecycleMethod(key)) return
		if (key[0] === "o" && key[1] === "n" && !isLifecycleMethod(key)) updateEvent(vnode, key, undefined)
		else if (key === "style") updateStyle(vnode.dom, old, null)
		else if (
			hasPropertyKey(vnode, key, ns)
			&& key !== "className"
			&& !(key === "value" && (
				vnode.tag === "option"
				|| vnode.tag === "select" && vnode.dom.selectedIndex === -1 && vnode.dom === activeElement()
			))
			&& !(vnode.tag === "input" && key === "type")
		) {
			vnode.dom[key] = null
		} else {
			var nsLastIndex = key.indexOf(":")
			if (nsLastIndex !== -1) key = key.slice(nsLastIndex + 1)
			if (old !== false) vnode.dom.removeAttribute(key === "className" ? "class" : key)
		}
	}
	function setLateSelectAttrs(vnode, attrs) {
		if ("value" in attrs) {
			if(attrs.value === null) {
				if (vnode.dom.selectedIndex !== -1) vnode.dom.value = null
			} else {
				var normalized = "" + attrs.value // eslint-disable-line no-implicit-coercion
				if (vnode.dom.value !== normalized || vnode.dom.selectedIndex === -1) {
					vnode.dom.value = normalized
				}
			}
		}
		if ("selectedIndex" in attrs) setAttr(vnode, "selectedIndex", null, attrs.selectedIndex, undefined)
	}
	function updateAttrs(vnode, old, attrs, ns) {
		if (attrs != null) {
			for (var key in attrs) {
				setAttr(vnode, key, old && old[key], attrs[key], ns)
			}
		}
		var val
		if (old != null) {
			for (var key in old) {
				if (((val = old[key]) != null) && (attrs == null || attrs[key] == null)) {
					removeAttr(vnode, key, val, ns)
				}
			}
		}
	}
	function isFormAttribute(vnode, attr) {
		return attr === "value" || attr === "checked" || attr === "selectedIndex" || attr === "selected" && vnode.dom === activeElement() || vnode.tag === "option" && vnode.dom.parentNode === $doc.activeElement
	}
	function isLifecycleMethod(attr) {
		return attr === "oninit" || attr === "oncreate" || attr === "onupdate" || attr === "onremove" || attr === "onbeforeremove" || attr === "onbeforeupdate"
	}
	function hasPropertyKey(vnode, key, ns) {
		// Filter out namespaced keys
		return ns === undefined && (
			// If it's a custom element, just keep it.
			vnode.tag.indexOf("-") > -1 || vnode.attrs != null && vnode.attrs.is ||
			// If it's a normal element, let's try to avoid a few browser bugs.
			key !== "href" && key !== "list" && key !== "form" && key !== "width" && key !== "height"// && key !== "type"
			// Defer the property check until *after* we check everything.
		) && key in vnode.dom
	}

	//style
	var uppercaseRegex = /[A-Z]/g
	function toLowerCase(capital) { return "-" + capital.toLowerCase() }
	function normalizeKey(key) {
		return key[0] === "-" && key[1] === "-" ? key :
			key === "cssFloat" ? "float" :
				key.replace(uppercaseRegex, toLowerCase)
	}
	function updateStyle(element, old, style) {
		if (old === style) {
			// Styles are equivalent, do nothing.
		} else if (style == null) {
			// New style is missing, just clear it.
			element.style.cssText = ""
		} else if (typeof style !== "object") {
			// New style is a string, let engine deal with patching.
			element.style.cssText = style
		} else if (old == null || typeof old !== "object") {
			// `old` is missing or a string, `style` is an object.
			element.style.cssText = ""
			// Add new style properties
			for (var key in style) {
				var value = style[key]
				if (value != null) element.style.setProperty(normalizeKey(key), String(value))
			}
		} else {
			// Both old & new are (different) objects.
			// Update style properties that have changed
			for (var key in style) {
				var value = style[key]
				if (value != null && (value = String(value)) !== String(old[key])) {
					element.style.setProperty(normalizeKey(key), value)
				}
			}
			// Remove style properties that no longer exist
			for (var key in old) {
				if (old[key] != null && style[key] == null) {
					element.style.removeProperty(normalizeKey(key))
				}
			}
		}
	}

	// Here's an explanation of how this works:
	// 1. The event names are always (by design) prefixed by `on`.
	// 2. The EventListener interface accepts either a function or an object
	//    with a `handleEvent` method.
	// 3. The object does not inherit from `Object.prototype`, to avoid
	//    any potential interference with that (e.g. setters).
	// 4. The event name is remapped to the handler before calling it.
	// 5. In function-based event handlers, `ev.target === this`. We replicate
	//    that below.
	// 6. In function-based event handlers, `return false` prevents the default
	//    action and stops event propagation. We replicate that below.
	function EventDict() {}
	EventDict.prototype = Object.create(null)
	EventDict.prototype.handleEvent = function (ev) {
		var handler = this["on" + ev.type]
		var result
		if (typeof handler === "function") result = handler.call(ev.currentTarget, ev)
		else if (typeof handler.handleEvent === "function") handler.handleEvent(ev)
		if (ev.redraw === false) ev.redraw = undefined
		else if (typeof redraw === "function") redraw()
		if (result === false) {
			ev.preventDefault()
			ev.stopPropagation()
		}
	}

	//event
	function updateEvent(vnode, key, value) {
		if (vnode.events != null) {
			if (vnode.events[key] === value) return
			if (value != null && (typeof value === "function" || typeof value === "object")) {
				if (vnode.events[key] == null) vnode.dom.addEventListener(key.slice(2), vnode.events, false)
				vnode.events[key] = value
			} else {
				if (vnode.events[key] != null) vnode.dom.removeEventListener(key.slice(2), vnode.events, false)
				vnode.events[key] = undefined
			}
		} else if (value != null && (typeof value === "function" || typeof value === "object")) {
			vnode.events = new EventDict()
			vnode.dom.addEventListener(key.slice(2), vnode.events, false)
			vnode.events[key] = value
		}
	}

	//lifecycle
	function initLifecycle(source, vnode, hooks) {
		if (typeof source.oninit === "function") callHook.call(source.oninit, vnode)
		if (typeof source.oncreate === "function") hooks.push(callHook.bind(source.oncreate, vnode))
	}
	function updateLifecycle(source, vnode, hooks) {
		if (typeof source.onupdate === "function") hooks.push(callHook.bind(source.onupdate, vnode))
	}
	function shouldNotUpdate(vnode, old) {
		do {
			if (vnode.attrs != null && typeof vnode.attrs.onbeforeupdate === "function") {
				var force = callHook.call(vnode.attrs.onbeforeupdate, vnode, old)
				if (force !== undefined && !force) break
			}
			if (typeof vnode.tag !== "string" && typeof vnode.state.onbeforeupdate === "function") {
				var force = callHook.call(vnode.state.onbeforeupdate, vnode, old)
				if (force !== undefined && !force) break
			}
			return false
		} while (false); // eslint-disable-line no-constant-condition
		vnode.dom = old.dom
		vnode.domSize = old.domSize
		vnode.instance = old.instance
		return true
	}

	function render(dom, vnodes) {
		if (!dom) throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.")
		var hooks = []
		var active = activeElement()
		var namespace = dom.namespaceURI

		// First time rendering into a node clears it out
		if (dom.vnodes == null) dom.textContent = ""

		vnodes = Vnode.normalizeChildren(Array.isArray(vnodes) ? vnodes : [vnodes])
		updateNodes(dom, dom.vnodes, vnodes, hooks, null, namespace === "http://www.w3.org/1999/xhtml" ? undefined : namespace)
		dom.vnodes = vnodes
		// `document.activeElement` can return null: https://html.spec.whatwg.org/multipage/interaction.html#dom-document-activeelement
		if (active != null && activeElement() !== active && typeof active.focus === "function") active.focus()
		for (var i = 0; i < hooks.length; i++) hooks[i]()
	}

	return {render: render, setRedraw: setRedraw}
}


/***/ }),

/***/ "../node_modules/mithril/render/trust.js":
/*!***********************************************!*\
  !*** ../node_modules/mithril/render/trust.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vnode = __webpack_require__(/*! ../render/vnode */ "../node_modules/mithril/render/vnode.js")

module.exports = function(html) {
	if (html == null) html = ""
	return Vnode("<", undefined, undefined, html, undefined, undefined)
}


/***/ }),

/***/ "../node_modules/mithril/render/vnode.js":
/*!***********************************************!*\
  !*** ../node_modules/mithril/render/vnode.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Vnode(tag, key, attrs, children, text, dom) {
	return {tag: tag, key: key, attrs: attrs, children: children, text: text, dom: dom, domSize: undefined, state: undefined, events: undefined, instance: undefined}
}
Vnode.normalize = function(node) {
	if (Array.isArray(node)) return Vnode("[", undefined, undefined, Vnode.normalizeChildren(node), undefined, undefined)
	if (node != null && typeof node !== "object") return Vnode("#", undefined, undefined, node === false ? "" : node, undefined, undefined)
	return node
}
Vnode.normalizeChildren = function(input) {
	var children = []
	for (var i = 0; i < input.length; i++) {
		children[i] = Vnode.normalize(input[i])
	}
	return children
}

module.exports = Vnode


/***/ }),

/***/ "../node_modules/mithril/request.js":
/*!******************************************!*\
  !*** ../node_modules/mithril/request.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PromisePolyfill = __webpack_require__(/*! ./promise/promise */ "../node_modules/mithril/promise/promise.js")
module.exports = __webpack_require__(/*! ./request/request */ "../node_modules/mithril/request/request.js")(window, PromisePolyfill)


/***/ }),

/***/ "../node_modules/mithril/request/request.js":
/*!**************************************************!*\
  !*** ../node_modules/mithril/request/request.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var buildPathname = __webpack_require__(/*! ../pathname/build */ "../node_modules/mithril/pathname/build.js")

module.exports = function($window, Promise) {
	var callbackCount = 0
	var oncompletion

	function makeRequest(factory) {
		return function(url, args) {
			if (typeof url !== "string") { args = url; url = url.url }
			else if (args == null) args = {}
			var promise = new Promise(function(resolve, reject) {
				factory(buildPathname(url, args.params), args, function (data) {
					if (typeof args.type === "function") {
						if (Array.isArray(data)) {
							for (var i = 0; i < data.length; i++) {
								data[i] = new args.type(data[i])
							}
						}
						else data = new args.type(data)
					}
					resolve(data)
				}, reject)
			})
			if (args.background === true) return promise
			var count = 0
			function complete() {
				if (--count === 0 && typeof oncompletion === "function") oncompletion()
			}

			return wrap(promise)

			function wrap(promise) {
				var then = promise.then
				promise.then = function() {
					count++
					var next = then.apply(promise, arguments)
					next.then(complete, function(e) {
						complete()
						if (count === 0) throw e
					})
					return wrap(next)
				}
				return promise
			}
		}
	}

	function hasHeader(args, name) {
		for (var key in args.headers) {
			if ({}.hasOwnProperty.call(args.headers, key) && name.test(key)) return true
		}
		return false
	}

	return {
		request: makeRequest(function(url, args, resolve, reject) {
			var method = args.method != null ? args.method.toUpperCase() : "GET"
			var body = args.body
			var assumeJSON = (args.serialize == null || args.serialize === JSON.serialize) && !(body instanceof $window.FormData)

			var xhr = new $window.XMLHttpRequest(),
				aborted = false,
				_abort = xhr.abort

			xhr.abort = function abort() {
				aborted = true
				_abort.call(xhr)
			}

			xhr.open(method, url, args.async !== false, typeof args.user === "string" ? args.user : undefined, typeof args.password === "string" ? args.password : undefined)

			if (assumeJSON && body != null && !hasHeader(args, /^content-type$/i)) {
				xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8")
			}
			if (typeof args.deserialize !== "function" && !hasHeader(args, /^accept$/i)) {
				xhr.setRequestHeader("Accept", "application/json, text/*")
			}
			if (args.withCredentials) xhr.withCredentials = args.withCredentials
			if (args.timeout) xhr.timeout = args.timeout
			xhr.responseType = args.responseType || (typeof args.extract === "function" ? "" : "json")

			for (var key in args.headers) {
				if ({}.hasOwnProperty.call(args.headers, key)) {
					xhr.setRequestHeader(key, args.headers[key])
				}
			}

			if (typeof args.config === "function") xhr = args.config(xhr, args) || xhr

			xhr.onreadystatechange = function() {
				// Don't throw errors on xhr.abort().
				if(aborted) return

				if (xhr.readyState === 4) {
					try {
						var success = (xhr.status >= 200 && xhr.status < 300) || xhr.status === 304 || (/^file:\/\//i).test(url)
						// When the response type isn't "" or "text",
						// `xhr.responseText` is the wrong thing to use.
						// Browsers do the right thing and throw here, and we
						// should honor that and do the right thing by
						// preferring `xhr.response` where possible/practical.
						var response = xhr.response, message

						if (response == null) {
							try {
								response = xhr.responseText
								// Note: this snippet is intentionally *after*
								// `xhr.responseText` is accessed, since the
								// above will throw in modern browsers (thus
								// skipping the rest of this section). It's an
								// IE hack to detect and work around the lack of
								// native `responseType: "json"` support there.
								if (typeof args.extract !== "function" && xhr.responseType === "json") response = JSON.parse(response)
							}
							catch (e) { response = null }
						}

						if (typeof args.extract === "function") {
							response = args.extract(xhr, args)
							success = true
						} else if (typeof args.deserialize === "function") {
							response = args.deserialize(response)
						}
						if (success) resolve(response)
						else {
							try { message = xhr.responseText }
							catch (e) { message = response }
							var error = new Error(message)
							error.code = xhr.status
							error.response = response
							reject(error)
						}
					}
					catch (e) {
						reject(e)
					}
				}
			}

			if (body == null) xhr.send()
			else if (typeof args.serialize === "function") xhr.send(args.serialize(body))
			else if (body instanceof $window.FormData) xhr.send(body)
			else xhr.send(JSON.stringify(body))
		}),
		jsonp: makeRequest(function(url, args, resolve, reject) {
			var callbackName = args.callbackName || "_mithril_" + Math.round(Math.random() * 1e16) + "_" + callbackCount++
			var script = $window.document.createElement("script")
			$window[callbackName] = function(data) {
				delete $window[callbackName]
				script.parentNode.removeChild(script)
				resolve(data)
			}
			script.onerror = function() {
				delete $window[callbackName]
				script.parentNode.removeChild(script)
				reject(new Error("JSONP request failed"))
			}
			script.src = url + (url.indexOf("?") < 0 ? "?" : "&") +
				encodeURIComponent(args.callbackKey || "callback") + "=" +
				encodeURIComponent(callbackName)
			$window.document.documentElement.appendChild(script)
		}),
		setCompletionCallback: function(callback) {
			oncompletion = callback
		},
	}
}


/***/ }),

/***/ "../node_modules/mithril/route.js":
/*!****************************************!*\
  !*** ../node_modules/mithril/route.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var redrawService = __webpack_require__(/*! ./redraw */ "../node_modules/mithril/redraw.js")

module.exports = __webpack_require__(/*! ./api/router */ "../node_modules/mithril/api/router.js")(window, redrawService)


/***/ }),

/***/ "../node_modules/mithril/router/router.js":
/*!************************************************!*\
  !*** ../node_modules/mithril/router/router.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {

var buildPathname = __webpack_require__(/*! ../pathname/build */ "../node_modules/mithril/pathname/build.js")
var parsePathname = __webpack_require__(/*! ../pathname/parse */ "../node_modules/mithril/pathname/parse.js")
var compileTemplate = __webpack_require__(/*! ../pathname/compileTemplate */ "../node_modules/mithril/pathname/compileTemplate.js")
var assign = __webpack_require__(/*! ../pathname/assign */ "../node_modules/mithril/pathname/assign.js")

module.exports = function($window) {
	var supportsPushState = typeof $window.history.pushState === "function"
	var callAsync = typeof setImmediate === "function" ? setImmediate : setTimeout

	function normalize(fragment) {
		var data = $window.location[fragment].replace(/(?:%[a-f89][a-f0-9])+/gim, decodeURIComponent)
		if (fragment === "pathname" && data[0] !== "/") data = "/" + data
		return data
	}

	var asyncId
	var router = {prefix: "#!"}
	router.getPath = function() {
		if (router.prefix.charAt(0) === "#") return normalize("hash").slice(router.prefix.length)
		if (router.prefix.charAt(0) === "?") return normalize("search").slice(router.prefix.length) + normalize("hash")
		return normalize("pathname").slice(router.prefix.length) + normalize("search") + normalize("hash")
	}

	router.setPath = function(path, data, options) {
		path = buildPathname(path, data)
		if (supportsPushState) {
			var state = options ? options.state : null
			var title = options ? options.title : null
			$window.onpopstate()
			if (options && options.replace) $window.history.replaceState(state, title, router.prefix + path)
			else $window.history.pushState(state, title, router.prefix + path)
		}
		else $window.location.href = router.prefix + path
	}

	router.defineRoutes = function(routes, resolve, reject, defaultRoute) {
		var compiled = Object.keys(routes).map(function(route) {
			if (route.charAt(0) !== "/") throw new SyntaxError("Routes must start with a `/`")
			if ((/:([^\/\.-]+)(\.{3})?:/).test(route)) {
				throw new SyntaxError("Route parameter names must be separated with either `/`, `.`, or `-`")
			}
			return {
				route: route,
				component: routes[route],
				check: compileTemplate(route),
			}
		})

		if (defaultRoute != null) {
			var defaultData = parsePathname(defaultRoute)

			if (!compiled.some(function (i) { return i.check(defaultData) })) {
				throw new ReferenceError("Default route doesn't match any known routes")
			}
		}

		function resolveRoute() {
			var path = router.getPath()
			var data = parsePathname(path)

			assign(data.params, $window.history.state)

			for (var i = 0; i < compiled.length; i++) {
				if (compiled[i].check(data)) {
					resolve(compiled[i].component, data.params, path, compiled[i].route)
					return
				}
			}

			reject(path, data.params)
		}

		if (supportsPushState) {
			$window.onpopstate = function() {
				if (asyncId) return
				asyncId = callAsync(function() {
					asyncId = null
					resolveRoute()
				})
			}
		}
		else if (router.prefix.charAt(0) === "#") $window.onhashchange = resolveRoute
		resolveRoute()
	}

	return router
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../timers-browserify/main.js */ "../node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "../node_modules/polythene-core-base-spinner/dist/polythene-core-base-spinner.mjs":
/*!****************************************************************************************!*\
  !*** ../node_modules/polythene-core-base-spinner/dist/polythene-core-base-spinner.mjs ***!
  \****************************************************************************************/
/*! exports provided: _BaseSpinner */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_BaseSpinner", function() { return _BaseSpinner; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../node_modules/polythene-core/dist/polythene-core.mjs");


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var classes = {
  component: "pe-spinner",
  // elements
  animation: "pe-spinner__animation",
  placeholder: "pe-spinner__placeholder",
  // states
  animated: "pe-spinner--animated",
  fab: "pe-spinner--fab",
  large: "pe-spinner--large",
  medium: "pe-spinner--medium",
  permanent: "pe-spinner--permanent",
  raised: "pe-spinner--raised",
  regular: "pe-spinner--regular",
  singleColor: "pe-spinner--single-color",
  small: "pe-spinner--small",
  visible: "pe-spinner--visible"
};

var showSpinner = function showSpinner(opts) {
  return Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["transitionComponent"])(_objectSpread({}, opts, {
    isShow: true
  }));
}; // const hideSpinner = opts =>
//   transitionComponent({
//     ...opts,
//     isShow: false
//   });


var initialTransitionState = {
  isVisible: false,
  isTransitioning: false,
  isHiding: false
};
var _BaseSpinner = function _BaseSpinner(_ref) {
  var h = _ref.h,
      a = _ref.a,
      useReducer = _ref.useReducer,
      useState = _ref.useState,
      useEffect = _ref.useEffect,
      getRef = _ref.getRef,
      Shadow = _ref.Shadow,
      props = _objectWithoutProperties(_ref, ["h", "a", "useReducer", "useState", "useEffect", "getRef", "Shadow"]);

  var _useReducer = useReducer(polythene_core__WEBPACK_IMPORTED_MODULE_0__["transitionStateReducer"], initialTransitionState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      transitionState = _useReducer2[0],
      dispatchTransitionState = _useReducer2[1];

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      domElement = _useState2[0],
      setDomElement = _useState2[1];

  var isVisible = (transitionState || initialTransitionState).isVisible;
  var transitionOptions = {
    dispatchTransitionState: dispatchTransitionState,
    props: props,
    domElements: {
      el: domElement
    },
    showClass: classes.visible
  };
  useEffect(function () {
    if (!domElement) {
      return;
    }

    if (!props.permanent) {
      showSpinner(transitionOptions);
    }
  }, [domElement]);

  var componentProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props), getRef(function (dom) {
    return dom && !domElement && (setDomElement(dom), props.ref && props.ref(dom));
  }), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.component, props.instanceClass, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["classForSize"])(classes, props.size), props.singleColor ? classes.singleColor : null, props.raised ? classes.raised : null, props.animated ? classes.animated : null, props.permanent ? classes.permanent : null, isVisible ? classes.visible : null, props.className || props[a["class"]]].join(" ")
  }, props.events); // if (state.hide) {
  //   setTimeout(() => { hideSpinner(state, attrs); }, 0);
  // }


  var content = [props.before, props.content, props.after].filter(Boolean);
  return h("div", componentProps, [props.raised && content.length > 0 ? h(Shadow, {
    key: "shadow",
    shadowDepth: props.shadowDepth
  }) : null, content]);
};




/***/ }),

/***/ "../node_modules/polythene-core-button-group/dist/polythene-core-button-group.mjs":
/*!****************************************************************************************!*\
  !*** ../node_modules/polythene-core-button-group/dist/polythene-core-button-group.mjs ***!
  \****************************************************************************************/
/*! exports provided: _ButtonGroup */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_ButtonGroup", function() { return _ButtonGroup; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var classes = {
  component: "pe-button-group"
};

var _ButtonGroup = function _ButtonGroup(_ref) {
  var h = _ref.h,
      a = _ref.a,
      props = _objectWithoutProperties(_ref, ["h", "a"]);

  var componentProps = _extends({}, props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.component, props.className || props[a["class"]]].join(" ")
  });

  return h(props.element || "div", componentProps, props.children);
};




/***/ }),

/***/ "../node_modules/polythene-core-button/dist/polythene-core-button.mjs":
/*!****************************************************************************!*\
  !*** ../node_modules/polythene-core-button/dist/polythene-core-button.mjs ***!
  \****************************************************************************/
/*! exports provided: _Button */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Button", function() { return _Button; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../node_modules/polythene-core/dist/polythene-core.mjs");
/* harmony import */ var polythene_core_shadow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core-shadow */ "../node_modules/polythene-core-shadow/dist/polythene-core-shadow.mjs");



function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var classes = {
  component: "pe-text-button",
  "super": "pe-button",
  row: "pe-button-row",
  // elements      
  content: "pe-button__content",
  label: "pe-button__label",
  textLabel: "pe-button__text-label",
  wash: "pe-button__wash",
  washColor: "pe-button__wash-color",
  dropdown: "pe-button__dropdown",
  // states      
  border: "pe-button--border",
  contained: "pe-button--contained",
  disabled: "pe-button--disabled",
  dropdownClosed: "pe-button--dropdown-closed",
  dropdownOpen: "pe-button--dropdown-open",
  extraWide: "pe-button--extra-wide",
  hasDropdown: "pe-button--dropdown",
  highLabel: "pe-button--high-label",
  inactive: "pe-button--inactive",
  raised: "pe-button--raised",
  selected: "pe-button--selected",
  separatorAtStart: "pe-button--separator-start",
  hasHover: "pe-button--has-hover"
};

var shadowClasses = {
  component: "pe-shadow",
  // elements      
  bottomShadow: "pe-shadow__bottom",
  topShadow: "pe-shadow__top",
  // states
  animated: "pe-shadow--animated",
  depth_n: "pe-shadow--depth-",
  with_active_shadow: "pe-with-active-shadow"
};

var DEFAULT_SHADOW_DEPTH = 1;
var _Button = function _Button(_ref) {
  var _objectSpread3;

  var h = _ref.h,
      a = _ref.a,
      getRef = _ref.getRef,
      useState = _ref.useState,
      useEffect = _ref.useEffect,
      useRef = _ref.useRef,
      Ripple = _ref.Ripple,
      Shadow = _ref.Shadow,
      Icon = _ref.Icon,
      props = _objectWithoutProperties(_ref, ["h", "a", "getRef", "useState", "useEffect", "useRef", "Ripple", "Shadow", "Icon"]);

  var events = props.events || {};

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      domElement = _useState2[0],
      setDomElement = _useState2[1];

  var contentElement = useRef();

  var _useState3 = useState(props.inactive),
      _useState4 = _slicedToArray(_useState3, 2),
      isInactive = _useState4[0],
      setIsInactive = _useState4[1];

  var disabled = props.disabled;
  var inactive = props.inactive || isInactive;

  var onClickHandler = events[a.onclick] || function () {};

  var onKeyUpHandler = events[a.onkeyup] || onClickHandler;
  var shadowDepth = props.raised ? props.shadowDepth !== undefined ? props.shadowDepth : DEFAULT_SHADOW_DEPTH : 0;
  var animateOnTap = props.animateOnTap !== false ? true : false;

  var handleInactivate = function handleInactivate() {
    if (props.inactivate === undefined) {
      return;
    }

    setIsInactive(true);
    setTimeout(function () {
      return setIsInactive(false);
    }, props.inactivate * 1000);
  };

  var hasHover = !disabled && !props.selected && (props.raised ? props.wash : props.wash !== false);

  var handleMouseLeave = function handleMouseLeave(e) {
    domElement.blur();
    domElement.removeEventListener("mouseleave", handleMouseLeave);
  };

  var componentProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props, {
    add: [a.formaction, "type"],
    remove: ["style"]
  }), // Set style on content, not on component
  getRef(function (dom) {
    if (!dom || domElement) {
      return;
    }

    setDomElement(dom);

    if (dom.querySelector) {
      contentElement.current = dom.querySelector(".".concat(classes.content));
    }

    if (props.getRef) {
      props.getRef(dom);
    }
  }), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes["super"], props.parentClassName || classes.component, props.contained ? classes.contained : null, // Raised button classes
    props.raised ? classes.contained : null, props.raised ? classes.raised : null, props.raised && animateOnTap ? shadowClasses.with_active_shadow : null, props.raised && animateOnTap ? Object(polythene_core_shadow__WEBPACK_IMPORTED_MODULE_1__["getDepthClass"])(shadowDepth + 1) : null, //
    hasHover ? classes.hasHover : null, props.selected ? classes.selected : null, props.highLabel ? classes.highLabel : null, props.extraWide ? classes.extraWide : null, disabled ? classes.disabled : null, inactive ? classes.inactive : null, props.separatorAtStart ? classes.separatorAtStart : null, props.border || props.borders ? classes.border : null, props.dropdown ? classes.hasDropdown : null, props.dropdown ? props.dropdown.open ? classes.dropdownOpen : classes.dropdownClosed : null, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a["class"]]].join(" ")
  }, inactive ? null : _objectSpread(_defineProperty({}, a.tabindex, disabled || inactive ? -1 : props[a.tabindex] || 0), events, (_objectSpread3 = {}, _defineProperty(_objectSpread3, a.onmousedown, function (e) {
    return domElement && domElement.addEventListener && domElement.addEventListener("mouseleave", handleMouseLeave), props.events && props.events[a.onmousedown] && props.events[a.onmousedown](e);
  }), _defineProperty(_objectSpread3, a.onclick, function (e) {
    return document.activeElement === domElement && document.activeElement.blur(), handleInactivate(), onClickHandler(e);
  }), _defineProperty(_objectSpread3, a.onkeyup, function (e) {
    if (e.keyCode === 13 && document.activeElement === domElement) {
      document.activeElement.blur();

      if (onKeyUpHandler) {
        onKeyUpHandler(e);
      }
    }

    props.events && props.events[a.onkeyup] && props.events[a.onkeyup](e);
  }), _objectSpread3)), props.url, disabled ? {
    disabled: true
  } : null);

  var noink = props.ink !== undefined && props.ink === false;
  var buttonContent = props.content ? props.content : props.label !== undefined ? _typeof(props.label) === "object" ? props.label : h("div", {
    className: classes.label,
    key: "label"
  }, h("div", {
    className: classes.textLabel,
    style: props.textStyle
  }, props.label)) : props.children;
  return h(props.element || "a", componentProps, [props.before, h("div", {
    className: classes.content,
    style: props.style
  }, [h(Shadow, {
    key: "shadow",
    shadowDepth: shadowDepth !== undefined ? shadowDepth : 0,
    animated: true
  }), disabled || noink ? null : h(Ripple, _extends({}, {
    key: "ripple",
    target: contentElement.current
  }, props.ripple)), h("div", {
    key: "wash",
    className: classes.wash
  }, h("div", {
    className: classes.washColor
  })), buttonContent, props.dropdown ? h(Icon, {
    className: classes.dropdown,
    key: "dropdown",
    svg: {
      content: h.trust(polythene_core__WEBPACK_IMPORTED_MODULE_0__["iconDropdownDown"])
    }
  }) : null]), props.after]);
};




/***/ }),

/***/ "../node_modules/polythene-core-card/dist/polythene-core-card.mjs":
/*!************************************************************************!*\
  !*** ../node_modules/polythene-core-card/dist/polythene-core-card.mjs ***!
  \************************************************************************/
/*! exports provided: _Card, _CardActions, _CardMedia, _CardPrimary */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Card", function() { return _Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CardActions", function() { return _CardActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CardMedia", function() { return _CardMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CardPrimary", function() { return _CardPrimary; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../node_modules/polythene-core/dist/polythene-core.mjs");


function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var classes = {
  component: "pe-card",
  // elements
  actions: "pe-card__actions",
  any: "pe-card__any",
  content: "pe-card__content",
  header: "pe-card__header",
  headerTitle: "pe-card__header-title",
  media: "pe-card__media",
  mediaDimmer: "pe-card__media__dimmer",
  overlay: "pe-card__overlay",
  overlayContent: "pe-card__overlay__content",
  primary: "pe-card__primary",
  primaryMedia: "pe-card__primary-media",
  subtitle: "pe-card__subtitle",
  text: "pe-card__text",
  title: "pe-card__title",
  // states
  actionsBorder: "pe-card__actions--border",
  actionsHorizontal: "pe-card__actions--horizontal",
  actionsJustified: "pe-card__actions--justified",
  actionsTight: "pe-card__actions--tight",
  actionsVertical: "pe-card__actions--vertical",
  mediaCropX: "pe-card__media--crop-x",
  mediaCropY: "pe-card__media--crop-y",
  mediaOriginStart: "pe-card__media--origin-start",
  mediaOriginCenter: "pe-card__media--origin-center",
  mediaOriginEnd: "pe-card__media--origin-end",
  mediaLarge: "pe-card__media--large",
  mediaMedium: "pe-card__media--medium",
  mediaRatioLandscape: "pe-card__media--landscape",
  mediaRatioSquare: "pe-card__media--square",
  mediaRegular: "pe-card__media--regular",
  mediaSmall: "pe-card__media--small",
  overlaySheet: "pe-card__overlay--sheet",
  primaryHasMedia: "pe-card__primary--media",
  primaryTight: "pe-card__primary--tight",
  textTight: "pe-card__text--tight"
};

var createOverlay = function createOverlay(_ref) {
  var dispatcher = _ref.dispatcher,
      props = _ref.props,
      h = _ref.h,
      a = _ref.a;
  var element = props.element || "div";
  var content = props.content.map(dispatcher);
  return h("div", {
    key: props.key || "card-overlay",
    style: props.style,
    className: [classes.overlay, props.sheet ? classes.overlaySheet : null, props.tone === "light" ? null : "pe-dark-tone", // default dark tone
    props.tone === "light" ? "pe-light-tone" : null].join(" ")
  }, [h(element, {
    key: "content",
    className: [classes.overlayContent, props.className || props[a["class"]]].join(" ")
  }, content), h("div", {
    key: "dimmer",
    className: classes.mediaDimmer
  })]);
};

var createAny = function createAny(_ref2) {
  var props = _ref2.props,
      h = _ref2.h,
      a = _ref2.a;
  var element = props.element || "div";
  return h(element, _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props), {
    key: props.key || "card-any",
    className: [classes.any, props.tight ? classes.textTight : null, props.className || props[a["class"]]].join(" ")
  }), props.content);
};

var createText = function createText(_ref3) {
  var props = _ref3.props,
      h = _ref3.h,
      a = _ref3.a;
  var element = props.element || "div";
  return h(element, _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props), {
    key: props.key || "card-text",
    className: [classes.text, props.tight ? classes.textTight : null, props.className || props[a["class"]]].join(" ")
  }, props.events), props.content);
};

var createHeader = function createHeader(_ref4) {
  var props = _ref4.props,
      h = _ref4.h,
      a = _ref4.a,
      Icon = _ref4.Icon,
      ListTile = _ref4.ListTile;
  return h(ListTile, _extends({}, props, {
    key: props.key || "card-header",
    className: [classes.header, props.className || props[a["class"]]].join(" ")
  }, props.icon ? {
    front: h(Icon, props.icon)
  } : null));
};

var _Card = function _Card(_ref5) {
  var h = _ref5.h,
      a = _ref5.a,
      CardActions = _ref5.CardActions,
      CardMedia = _ref5.CardMedia,
      CardPrimary = _ref5.CardPrimary,
      Icon = _ref5.Icon,
      ListTile = _ref5.ListTile,
      Shadow = _ref5.Shadow,
      props = _objectWithoutProperties(_ref5, ["h", "a", "CardActions", "CardMedia", "CardPrimary", "Icon", "ListTile", "Shadow"]);

  var componentProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.component, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a["class"]]].join(" ")
  }, props.url, props.events);

  var dispatcher = function dispatcher(block) {
    var key = Object.keys(block)[0];

    var props = _extends({}, block[key], {
      dispatcher: dispatcher,
      key: key
    });

    switch (key) {
      case "actions":
        return h(CardActions, props);

      case "header":
        return createHeader({
          props: props,
          h: h,
          a: a,
          Icon: Icon,
          ListTile: ListTile
        });

      case "media":
        return h(CardMedia, props);

      case "overlay":
        return createOverlay({
          dispatcher: dispatcher,
          props: props,
          h: h,
          a: a
        });

      case "primary":
        return h(CardPrimary, props);

      case "text":
        return createText({
          props: props,
          h: h,
          a: a
        });

      case "any":
        return createAny({
          props: props,
          h: h,
          a: a
        });

      default:
        throw "Content type \"".concat(key, "\" does not exist");
    }
  };

  var contents = [props.before, Array.isArray(props.content) ? props.content.map(dispatcher) : props.content, // deprecated
  props.after];
  var shadowDepth = props.shadowDepth !== undefined ? props.shadowDepth : props.z; // deprecated

  var content = [h(Shadow, {
    shadowDepth: shadowDepth !== undefined ? shadowDepth : 1,
    animated: true,
    key: "shadow"
  }), h("div", {
    className: classes.content,
    key: "content"
  }, contents), props.children];
  var element = props.element || props.url ? "a" : "div";
  return h(element, componentProps, content);
};

var imageRatios = {
  landscape: 16 / 9,
  square: 1
};
var mediaSizeClasses = {
  small: classes.mediaSmall,
  regular: classes.mediaRegular,
  medium: classes.mediaMedium,
  large: classes.mediaLarge
};

var mediaSizeClass = function mediaSizeClass() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "regular";
  return mediaSizeClasses[size];
};

var initImage = function initImage(_ref) {
  var dom = _ref.dom,
      img = _ref.img,
      ratio = _ref.ratio,
      origin = _ref.origin;

  img.onload = function () {
    // use a background image on the image container
    if (img.tagName === "IMG") {
      dom.style.backgroundImage = "url(".concat(img.src, ")");
    }

    var naturalRatio = this.naturalWidth / this.naturalHeight; // crop-x: crop over x axis
    // crop-y: crop over y axis

    var cropClass = naturalRatio < imageRatios[ratio] ? classes.mediaCropX : classes.mediaCropY;
    dom.classList.add(cropClass);
    var originClass = origin === "start" ? classes.mediaOriginStart : origin === "end" ? classes.mediaOriginEnd : classes.mediaOriginCenter;
    dom.classList.add(originClass);
  };
};

var _CardMedia = function _CardMedia(_ref2) {
  var h = _ref2.h,
      a = _ref2.a,
      useEffect = _ref2.useEffect,
      useState = _ref2.useState,
      getRef = _ref2.getRef,
      props = _objectWithoutProperties(_ref2, ["h", "a", "useEffect", "useState", "getRef"]);

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      domElement = _useState2[0],
      setDomElement = _useState2[1];

  var ratio = props.ratio || "landscape";
  useEffect(function () {
    if (!domElement) {
      return;
    }

    var ratio = props.ratio || "landscape";
    var origin = props.origin || "center";
    var img = domElement.querySelector("img") || domElement.querySelector("iframe");
    initImage({
      dom: domElement,
      img: img,
      ratio: ratio,
      origin: origin
    });
  }, [domElement]);

  var componentProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props), getRef(function (dom) {
    return dom && !domElement && setDomElement(dom);
  }), props.testId && {
    "data-test-id": props.testId
  }, {
    key: "card-media",
    className: [classes.media, mediaSizeClass(props.size), ratio === "landscape" ? classes.mediaRatioLandscape : classes.mediaRatioSquare, props.className || props[a["class"]]].join(" ")
  }, props.events);

  var dispatcher = props.dispatcher;
  var content = [_extends({}, props.content, {
    key: "content"
  }), props.overlay ? dispatcher({
    overlay: props.overlay,
    key: "overlay"
  }) : props.showDimmer && h("div", {
    className: classes.mediaDimmer,
    key: "dimmer"
  })];
  return h(props.element || "div", componentProps, content);
};

var buttonClasses = {
  component: "pe-text-button",
  "super": "pe-button",
  row: "pe-button-row",
  // elements      
  content: "pe-button__content",
  label: "pe-button__label",
  textLabel: "pe-button__text-label",
  wash: "pe-button__wash",
  washColor: "pe-button__wash-color",
  dropdown: "pe-button__dropdown",
  // states      
  border: "pe-button--border",
  contained: "pe-button--contained",
  disabled: "pe-button--disabled",
  dropdownClosed: "pe-button--dropdown-closed",
  dropdownOpen: "pe-button--dropdown-open",
  extraWide: "pe-button--extra-wide",
  hasDropdown: "pe-button--dropdown",
  highLabel: "pe-button--high-label",
  inactive: "pe-button--inactive",
  raised: "pe-button--raised",
  selected: "pe-button--selected",
  separatorAtStart: "pe-button--separator-start",
  hasHover: "pe-button--has-hover"
};

var actionLayoutClasses = {
  horizontal: classes.actionsHorizontal,
  vertical: classes.actionsVertical,
  justified: classes.actionsJustified
};

var actionClassForLayout = function actionClassForLayout() {
  var layout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "horizontal";
  return actionLayoutClasses[layout];
};

var _CardActions = function _CardActions(_ref) {
  var h = _ref.h,
      a = _ref.a,
      props = _objectWithoutProperties(_ref, ["h", "a"]);

  var componentProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props), props.testId && {
    "data-test-id": props.testId
  }, {
    key: "card-actions",
    className: [classes.actions, props.layout !== "vertical" ? buttonClasses.row : null, actionClassForLayout(props.layout), props.border || props.bordered ? classes.actionsBorder : null, props.tight ? classes.actionsTight : null, props.className || props[a["class"]]].join(" ")
  }, props.events);

  var content = props.content || props.children;
  return h(props.element || "div", componentProps, content);
};

var _CardPrimary = function _CardPrimary(_ref) {
  var h = _ref.h,
      a = _ref.a,
      props = _objectWithoutProperties(_ref, ["h", "a"]);

  var primaryHasMedia = Array.isArray(props.content) ? props.content.reduce(function (total, current) {
    return Object.keys(current)[0] === "media" ? true : total;
  }, false) : props.media || false;

  var componentProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props), props.testId && {
    "data-test-id": props.testId
  }, {
    key: "card-primary",
    className: [classes.primary, props.tight ? classes.primaryTight : null, primaryHasMedia ? classes.primaryHasMedia : null, props.className || props[a["class"]]].join(" ")
  }, props.events);

  var dispatcher = props.dispatcher;
  var primaryDispatch = {
    title: function title(pAttrs) {
      return pAttrs.attrs // Mithril
      || pAttrs.props // React
      ? pAttrs || pAttrs.props : h("div", {
        className: classes.title,
        key: "title",
        style: pAttrs.style
      }, [pAttrs.title, pAttrs.subtitle ? h("div", {
        className: classes.subtitle,
        key: "subtitle"
      }, pAttrs.subtitle) : null]);
    },
    media: function media(pAttrs) {
      return h("div", {
        className: classes.primaryMedia,
        key: "media",
        style: pAttrs.style
      }, dispatcher({
        media: pAttrs
      }));
    },
    actions: function actions(pAttrs) {
      return dispatcher({
        actions: pAttrs
      });
    }
  };
  var content = Array.isArray(props.content) ? props.content.map(function (block) {
    var key = Object.keys(block)[0];
    var pAttrs = block[key];
    return primaryDispatch[key] ? primaryDispatch[key](pAttrs) : block;
  }) : [props.title ? primaryDispatch.title({
    title: props.title,
    subtitle: props.subtitle,
    key: "title"
  }) : null, props.media ? primaryDispatch.media(props.media) : null, props.actions ? primaryDispatch.actions(props.actions) : null, props.content];
  return h(props.element || "div", componentProps, content);
};




/***/ }),

/***/ "../node_modules/polythene-core-checkbox/dist/polythene-core-checkbox.mjs":
/*!********************************************************************************!*\
  !*** ../node_modules/polythene-core-checkbox/dist/polythene-core-checkbox.mjs ***!
  \********************************************************************************/
/*! exports provided: _Checkbox */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Checkbox", function() { return _Checkbox; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var classes = {
  component: "pe-checkbox-control"
};

var iconOn = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z\"/></svg>";
var iconOff = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\"/></svg>";
var icons = {
  iconOff: iconOff,
  iconOn: iconOn
};
var _Checkbox = function _Checkbox(_ref) {
  var h = _ref.h,
      SelectionControl = _ref.SelectionControl,
      props = _objectWithoutProperties(_ref, ["h", "SelectionControl"]);

  var componentProps = _extends({}, props, {
    icons: icons,
    selectable: props.selectable || function () {
      return true;
    },
    // default: always selectable, regardless the checked state
    instanceClass: classes.component,
    type: "checkbox"
  });

  return h(SelectionControl, componentProps);
};




/***/ }),

/***/ "../node_modules/polythene-core-dialog-pane/dist/polythene-core-dialog-pane.mjs":
/*!**************************************************************************************!*\
  !*** ../node_modules/polythene-core-dialog-pane/dist/polythene-core-dialog-pane.mjs ***!
  \**************************************************************************************/
/*! exports provided: _DialogPane */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_DialogPane", function() { return _DialogPane; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../node_modules/polythene-core/dist/polythene-core.mjs");


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var classes = {
  component: "pe-dialog-pane",
  // elements
  actions: "pe-dialog-pane__actions",
  body: "pe-dialog-pane__body",
  content: "pe-dialog-pane__content",
  footer: "pe-dialog-pane__footer",
  header: "pe-dialog-pane__header",
  title: "pe-dialog-pane__title",
  // states
  withHeader: "pe-dialog-pane--header",
  withFooter: "pe-dialog-pane--footer",
  headerWithTitle: "pe-dialog-pane__header--title",
  footerWithButtons: "pe-dialog-pane__footer--buttons",
  footerHigh: "pe-dialog-pane__footer--high",
  borderBottom: "pe-dialog-pane--border-bottom",
  borderTop: "pe-dialog-pane--border-top",
  fullBleed: "pe-dialog-pane--body-full-bleed"
};

var buttonClasses = {
  component: "pe-text-button",
  "super": "pe-button",
  row: "pe-button-row",
  // elements      
  content: "pe-button__content",
  label: "pe-button__label",
  textLabel: "pe-button__text-label",
  wash: "pe-button__wash",
  washColor: "pe-button__wash-color",
  dropdown: "pe-button__dropdown",
  // states      
  border: "pe-button--border",
  contained: "pe-button--contained",
  disabled: "pe-button--disabled",
  dropdownClosed: "pe-button--dropdown-closed",
  dropdownOpen: "pe-button--dropdown-open",
  extraWide: "pe-button--extra-wide",
  hasDropdown: "pe-button--dropdown",
  highLabel: "pe-button--high-label",
  inactive: "pe-button--inactive",
  raised: "pe-button--raised",
  selected: "pe-button--selected",
  separatorAtStart: "pe-button--separator-start",
  hasHover: "pe-button--has-hover"
};

var SCROLL_WATCH_END_TIMER = 50;
var _DialogPane = function _DialogPane(_ref) {
  var h = _ref.h,
      a = _ref.a,
      useState = _ref.useState,
      useEffect = _ref.useEffect,
      useRef = _ref.useRef,
      getRef = _ref.getRef,
      unpackedProps = _objectWithoutProperties(_ref, ["h", "a", "useState", "useEffect", "useRef", "getRef"]);

  var props = Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["unpackAttrs"])(unpackedProps);

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      domElement = _useState2[0],
      setDomElement = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isScrolling = _useState4[0],
      setIsScrolling = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      hasTopOverflow = _useState6[0],
      setHasTopOverflow = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      hasBottomOverflow = _useState8[0],
      setHasBottomOverflow = _useState8[1];

  var headerElRef = useRef();
  var footerElRef = useRef();
  var scrollElRef = useRef();
  var scrollWatchIdRef = useRef();

  var updateScrollOverflowState = function updateScrollOverflowState() {
    var scroller = scrollElRef.current;

    if (!scroller) {
      return;
    }

    setHasTopOverflow(scroller.scrollTop > 0);
    setHasBottomOverflow(scroller.scrollHeight - (scroller.scrollTop + scroller.getBoundingClientRect().height) > 0);
  };

  useEffect(function () {
    if (!domElement) {
      return;
    }

    headerElRef.current = domElement.querySelector(".".concat(classes.header));
    footerElRef.current = domElement.querySelector(".".concat(classes.footer));
    scrollElRef.current = domElement.querySelector(".".concat(classes.body));
  }, [domElement]);
  useEffect(function () {
    if (!scrollElRef.current) {
      return;
    }

    var update = function update() {
      updateScrollOverflowState();
    };

    Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["subscribe"])("resize", update);
    return function () {
      Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["unsubscribe"])("resize", update);
    };
  }, [scrollElRef.current]);
  useEffect(function () {
    updateScrollOverflowState();
  }, [scrollElRef.current, isScrolling]);
  var withHeader = props.header !== undefined || props.title !== undefined;
  var withFooter = props.footer !== undefined || props.footerButtons !== undefined;
  var borders = props.borders || "overflow";
  var showTopBorder = borders === "always" || withHeader && borders === "overflow" && hasTopOverflow;
  var showBottomBorder = borders === "always" || withFooter && borders === "overflow" && hasBottomOverflow;

  var componentProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props, {
    remove: ["style"]
  }), // style set in content, and set by show/hide transition
  props.testId && {
    "data-test-id": props.testId
  }, getRef(function (dom) {
    return dom && !domElement && (setDomElement(dom), props.ref && props.ref(dom));
  }), {
    className: [classes.component, props.fullBleed ? classes.fullBleed : null, showTopBorder ? classes.borderTop : null, showBottomBorder ? classes.borderBottom : null, withHeader ? classes.withHeader : null, withFooter ? classes.withFooter : null, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a["class"]]].join(" ")
  }, props.formOptions);

  var contents = h("div", {
    className: [classes.content, props.menu ? classes.menuContent : null].join(" "),
    style: props.style
  }, [props.header ? props.header : props.title ? h("div", {
    className: [classes.header, classes.headerWithTitle].join(" "),
    key: "title"
  }, h("div", {
    className: classes.title
  }, props.title)) : null, h("div", _defineProperty({
    className: classes.body,
    key: "body"
  }, a.onscroll, function () {
    setIsScrolling(true);
    clearTimeout(scrollWatchIdRef.current);
    scrollWatchIdRef.current = setTimeout(function () {
      setIsScrolling(false);
    }, SCROLL_WATCH_END_TIMER);
  }), props.content || props.body || props.menu), props.footer ? h("div", {
    className: classes.footer,
    key: "footer"
  }, props.footer) : props.footerButtons ? h("div", {
    className: [classes.footer, classes.footerWithButtons, buttonClasses.row].join(" "),
    key: "footer"
  }, h("div", {
    className: classes.actions
  }, props.footerButtons)) : null]);
  var content = [props.before, contents, props.after];
  return h(props.element || "form", componentProps, content);
};




/***/ }),

/***/ "../node_modules/polythene-core-dialog/dist/polythene-core-dialog.mjs":
/*!****************************************************************************!*\
  !*** ../node_modules/polythene-core-dialog/dist/polythene-core-dialog.mjs ***!
  \****************************************************************************/
/*! exports provided: _Dialog, openDialogsSelector */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Dialog", function() { return _Dialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openDialogsSelector", function() { return openDialogsSelector; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../node_modules/polythene-core/dist/polythene-core.mjs");


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var listTileClasses = {
  component: "pe-list-tile",
  // elements
  content: "pe-list-tile__content",
  highSubtitle: "pe-list-tile__high-subtitle",
  primary: "pe-list-tile__primary",
  secondary: "pe-list-tile__secondary",
  subtitle: "pe-list-tile__subtitle",
  title: "pe-list-tile__title",
  contentFront: "pe-list-tile__content-front",
  // states  
  compact: "pe-list-tile--compact",
  compactFront: "pe-list-tile--compact-front",
  disabled: "pe-list-tile--disabled",
  hasFront: "pe-list-tile--front",
  hasHighSubtitle: "pe-list-tile--high-subtitle",
  hasSubtitle: "pe-list-tile--subtitle",
  header: "pe-list-tile--header",
  hoverable: "pe-list-tile--hoverable",
  insetH: "pe-list-tile--inset-h",
  insetV: "pe-list-tile--inset-v",
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
  rounded: "pe-list-tile--rounded",
  highlight: "pe-list-tile--highlight",
  sticky: "pe-list-tile--sticky",
  navigation: "pe-list-tile--navigation"
};

var menuClasses = {
  component: "pe-menu",
  // elements
  panel: "pe-menu__panel",
  content: "pe-menu__content",
  placeholder: "pe-menu__placeholder",
  backdrop: "pe-menu__backdrop",
  // states
  floating: "pe-menu--floating",
  origin: "pe-menu--origin",
  permanent: "pe-menu--permanent",
  showBackdrop: "pe-menu--backdrop",
  visible: "pe-menu--visible",
  width_auto: "pe-menu--width-auto",
  width_n: "pe-menu--width-",
  isTopMenu: "pe-menu--top-menu",
  // lookup
  listTile: listTileClasses.component,
  selectedListTile: listTileClasses.selected
};

var classes = {
  component: "pe-dialog",
  // elements
  placeholder: "pe-dialog__placeholder",
  holder: "pe-dialog__holder",
  content: "pe-dialog__content",
  backdrop: "pe-dialog__backdrop",
  touch: "pe-dialog__touch",
  // states
  fullScreen: "pe-dialog--full-screen",
  modal: "pe-dialog--modal",
  open: "pe-dialog--open",
  // class set to html element
  visible: "pe-dialog--visible",
  // class set to dialog element
  showBackdrop: "pe-dialog--backdrop",
  transition: "pe-dialog--transition",
  // lookup
  menuContent: menuClasses.content
};

var DEFAULT_SHADOW_DEPTH = 3;
var openDialogsSelector = ".".concat(classes.component);

var createPane = function createPane(_ref) {
  var h = _ref.h,
      Pane = _ref.Pane,
      props = _ref.props;
  return h(Pane, {
    body: props.content || props.body || props.menu || props.children,
    element: props.element,
    borders: props.borders,
    className: props.className,
    footer: props.footer,
    footerButtons: props.footerButtons,
    formOptions: props.formOptions,
    fullBleed: props.fullBleed,
    header: props.header,
    style: props.style,
    title: props.title
  });
};

var _Dialog = function _Dialog(_ref2) {
  var h = _ref2.h,
      a = _ref2.a,
      useState = _ref2.useState,
      useEffect = _ref2.useEffect,
      useRef = _ref2.useRef,
      getRef = _ref2.getRef,
      useReducer = _ref2.useReducer,
      Pane = _ref2.Pane,
      Shadow = _ref2.Shadow,
      openDialogsSelector = _ref2.openDialogsSelector,
      props = _objectWithoutProperties(_ref2, ["h", "a", "useState", "useEffect", "useRef", "getRef", "useReducer", "Pane", "Shadow", "openDialogsSelector"]);

  var _useReducer = useReducer(polythene_core__WEBPACK_IMPORTED_MODULE_0__["transitionStateReducer"], polythene_core__WEBPACK_IMPORTED_MODULE_0__["initialTransitionState"]),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      transitionState = _useReducer2[0],
      dispatchTransitionState = _useReducer2[1];

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      domElement = _useState2[0],
      setDomElement = _useState2[1];

  var backdropElRef = useRef();
  var touchElRef = useRef();
  var contentElRef = useRef();
  var isVisible = (transitionState || polythene_core__WEBPACK_IMPORTED_MODULE_0__["initialTransitionState"]).isVisible;
  var isTransitioning = (transitionState || polythene_core__WEBPACK_IMPORTED_MODULE_0__["initialTransitionState"]).isTransitioning;
  var isHiding = (transitionState || polythene_core__WEBPACK_IMPORTED_MODULE_0__["initialTransitionState"]).isHiding;

  var transitionOptions = function transitionOptions(_ref3) {
    var isShow = _ref3.isShow,
        _ref3$hideDelay = _ref3.hideDelay,
        hideDelay = _ref3$hideDelay === void 0 ? props.hideDelay : _ref3$hideDelay,
        referrer = _ref3.referrer;
    return {
      dispatchTransitionState: dispatchTransitionState,
      instanceId: props.instanceId,
      props: _extends({}, props, {
        hideDelay: hideDelay
      }),
      isShow: isShow,
      domElements: {
        el: domElement,
        contentEl: contentElRef.current,
        backdropEl: backdropElRef.current
      },
      showClass: classes.visible,
      transitionClass: classes.transition,
      referrer: referrer
    };
  };

  var showDialog = function showDialog() {
    return Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["transitionComponent"])(transitionOptions({
      isShow: true
    }));
  };

  var hideDialog = function hideDialog() {
    var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        hideDelay = _ref4.hideDelay,
        referrer = _ref4.referrer;

    return Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["transitionComponent"])(transitionOptions({
      isShow: false,
      hideDelay: hideDelay,
      referrer: referrer
    }));
  };

  var isModal = function isModal() {
    return props.modal || domElement && domElement.classList.contains(classes.modal) || Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["stylePropCompare"])({
      element: domElement,
      pseudoSelector: ":before",
      prop: "content",
      contains: "\"".concat("modal", "\"")
    });
  };

  var isFullScreen = function isFullScreen() {
    return props.fullScreen || domElement && domElement.classList.contains(classes.fullScreen) || Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["stylePropCompare"])({
      element: domElement,
      pseudoSelector: ":before",
      prop: "content",
      contains: "\"".concat("full_screen", "\"")
    });
  }; // DOM elements


  useEffect(function () {
    if (!domElement) {
      return;
    }

    backdropElRef.current = domElement.querySelector(".".concat(classes.backdrop));
    touchElRef.current = domElement.querySelector(".".concat(classes.touch));
    contentElRef.current = domElement.querySelector(".".concat(classes.content));
  }, [domElement]); // Handle Escape key

  useEffect(function () {
    if (!domElement || props.inactive) {
      return;
    }

    var handleEscape = function handleEscape(e) {
      if (props.disableEscape && (isFullScreen() || isModal())) return;

      if (e.key === "Escape" || e.key === "Esc") {
        // "Esc" for IE11
        var openDialogs = document.querySelectorAll(openDialogsSelector);

        if (openDialogs[openDialogs.length - 1] === domElement) {
          hideDialog({
            hideDelay: 0
          });
        }
      }
    };

    Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["subscribe"])("keydown", handleEscape);
    return function () {
      Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["unsubscribe"])("keydown", handleEscape);
    };
  }, [domElement, props.inactive]); // Show / hide logic

  useEffect(function () {
    if (!domElement || isTransitioning || isHiding) {
      return;
    }

    if (props.hide) {
      if (isVisible) {
        hideDialog();
      }
    } else if (props.show) {
      if (!isVisible) {
        showDialog();
      }
    }
  }, [domElement, isTransitioning, isHiding, isVisible, props.hide, props.show]);

  var componentProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props, {
    remove: ["style"]
  }), // style set in content, and set by show/hide transition
  getRef(function (dom) {
    return dom && !domElement && (setDomElement(dom), props.ref && props.ref(dom));
  }), _defineProperty({
    className: [props.parentClassName || classes.component, props.fromMultipleClassName, props.fullScreen ? classes.fullScreen : null, props.modal ? classes.modal : null, props.backdrop ? classes.showBackdrop : null, // classes.visible is set in showDialog though transition
    props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a["class"]]].join(" "),
    "data-spawn-id": props.spawnId,
    // received from Multi
    "data-instance-id": props.instanceId
  }, a.onclick, function (e) {
    if (e.target !== domElement && e.target !== backdropElRef.current && e.target !== touchElRef.current) {
      return;
    }

    if (isModal()) {
      // not allowed
      return;
    }

    hideDialog();
  }));

  var pane = props.panesOptions && props.panesOptions.length ? h(Pane, props.panesOptions[0]) : props.panes && props.panes.length ? props.panes[0] : createPane({
    h: h,
    Pane: Pane,
    props: props
  });
  var shadowDepth = props.shadowDepth;
  var content = [h("div", {
    key: "backdrop",
    className: classes.backdrop
  }), h("div", {
    key: "touch",
    className: classes.touch
  }), h("div", {
    className: [classes.content, props.menu ? classes.menuContent : null].join(" "),
    key: "content"
  }, [props.fullScreen ? null : h(Shadow, {
    shadowDepth: shadowDepth !== undefined ? shadowDepth : DEFAULT_SHADOW_DEPTH,
    animated: true,
    key: "shadow"
  }), props.before, pane, props.after])];
  return h("div", componentProps, content);
};




/***/ }),

/***/ "../node_modules/polythene-core-drawer/dist/polythene-core-drawer.mjs":
/*!****************************************************************************!*\
  !*** ../node_modules/polythene-core-drawer/dist/polythene-core-drawer.mjs ***!
  \****************************************************************************/
/*! exports provided: _Drawer, openDialogsSelector */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Drawer", function() { return _Drawer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openDialogsSelector", function() { return openDialogsSelector; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var listTileClasses = {
  component: "pe-list-tile",
  // elements
  content: "pe-list-tile__content",
  highSubtitle: "pe-list-tile__high-subtitle",
  primary: "pe-list-tile__primary",
  secondary: "pe-list-tile__secondary",
  subtitle: "pe-list-tile__subtitle",
  title: "pe-list-tile__title",
  contentFront: "pe-list-tile__content-front",
  // states  
  compact: "pe-list-tile--compact",
  compactFront: "pe-list-tile--compact-front",
  disabled: "pe-list-tile--disabled",
  hasFront: "pe-list-tile--front",
  hasHighSubtitle: "pe-list-tile--high-subtitle",
  hasSubtitle: "pe-list-tile--subtitle",
  header: "pe-list-tile--header",
  hoverable: "pe-list-tile--hoverable",
  insetH: "pe-list-tile--inset-h",
  insetV: "pe-list-tile--inset-v",
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
  rounded: "pe-list-tile--rounded",
  highlight: "pe-list-tile--highlight",
  sticky: "pe-list-tile--sticky",
  navigation: "pe-list-tile--navigation"
};

var menuClasses = {
  component: "pe-menu",
  // elements
  panel: "pe-menu__panel",
  content: "pe-menu__content",
  placeholder: "pe-menu__placeholder",
  backdrop: "pe-menu__backdrop",
  // states
  floating: "pe-menu--floating",
  origin: "pe-menu--origin",
  permanent: "pe-menu--permanent",
  showBackdrop: "pe-menu--backdrop",
  visible: "pe-menu--visible",
  width_auto: "pe-menu--width-auto",
  width_n: "pe-menu--width-",
  isTopMenu: "pe-menu--top-menu",
  // lookup
  listTile: listTileClasses.component,
  selectedListTile: listTileClasses.selected
};

var dialogClasses = {
  component: "pe-dialog",
  // elements
  placeholder: "pe-dialog__placeholder",
  holder: "pe-dialog__holder",
  content: "pe-dialog__content",
  backdrop: "pe-dialog__backdrop",
  touch: "pe-dialog__touch",
  // states
  fullScreen: "pe-dialog--full-screen",
  modal: "pe-dialog--modal",
  open: "pe-dialog--open",
  // class set to html element
  visible: "pe-dialog--visible",
  // class set to dialog element
  showBackdrop: "pe-dialog--backdrop",
  transition: "pe-dialog--transition",
  // lookup
  menuContent: menuClasses.content
};

var classes = {
  component: "pe-dialog pe-drawer",
  // states
  cover: "pe-drawer--cover",
  push: "pe-drawer--push",
  mini: "pe-drawer--mini",
  permanent: "pe-drawer--permanent",
  border: "pe-drawer--border",
  floating: "pe-drawer--floating",
  fixed: "pe-drawer--fixed",
  anchorEnd: "pe-drawer--anchor-end",
  visible: dialogClasses.visible
};

var openDialogsSelector = ".".concat(classes.component, ".").concat(classes.visible, ":not(.").concat(classes.permanent, "),.").concat(classes.component, ".").concat(classes.visible, ".").concat(classes.mini, ",.").concat(classes.component, ".").concat(classes.cover, ",.").concat(classes.component, ".").concat(classes.permanent, ".").concat(classes.visible).replace(/ /g, ".");
var _Drawer = function _Drawer(_ref) {
  var h = _ref.h,
      Dialog = _ref.Dialog,
      props = _objectWithoutProperties(_ref, ["h", "Dialog"]);

  var isCover = !(props.push || props.permanent || props.mini);

  var componentProps = _extends({}, props, {
    fullBleed: true,
    className: null,
    parentClassName: [props.className, classes.component, isCover ? classes.cover : null, props.push ? classes.push : null, props.permanent ? classes.permanent : null, props.border ? classes.border : null, props.mini ? classes.mini : null, props.floating ? classes.floating : null, props.fixed ? classes.fixed : null, props.anchor === "end" ? classes.anchorEnd : null].join(" "),
    inactive: props.permanent && !props.mini,
    shadowDepth: props.shadowDepth !== undefined ? props.shadowDepth : 0
  });

  return h(Dialog, componentProps, props.children);
};




/***/ }),

/***/ "../node_modules/polythene-core-fab/dist/polythene-core-fab.mjs":
/*!**********************************************************************!*\
  !*** ../node_modules/polythene-core-fab/dist/polythene-core-fab.mjs ***!
  \**********************************************************************/
/*! exports provided: _FAB */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_FAB", function() { return _FAB; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var classes = {
  component: "pe-fab",
  // elements
  content: "pe-fab__content",
  // states
  mini: "pe-fab--mini"
};

var _FAB = function _FAB(_ref) {
  var h = _ref.h,
      a = _ref.a,
      Button = _ref.Button,
      Icon = _ref.Icon,
      props = _objectWithoutProperties(_ref, ["h", "a", "Button", "Icon"]);

  var content = props.content ? props.content : props.icon ? h(Icon, props.icon) : props.children;

  var componentProps = _extends({}, props, {
    content: h("div", {
      className: classes.content
    }, content),
    parentClassName: [classes.component, props.mini ? classes.mini : null, props.className || props[a["class"]]].join(" "),
    className: null,
    // defaults
    ripple: {
      center: true,
      opacityDecayVelocity: 0.24
    },
    shadow: {
      increase: 5
    },
    ink: true,
    wash: true,
    raised: true,
    animateOnTap: props.animateOnTap !== undefined ? props.animateOnTap : true
  });

  return h(Button, componentProps, content);
};




/***/ }),

/***/ "../node_modules/polythene-core-icon-button/dist/polythene-core-icon-button.mjs":
/*!**************************************************************************************!*\
  !*** ../node_modules/polythene-core-icon-button/dist/polythene-core-icon-button.mjs ***!
  \**************************************************************************************/
/*! exports provided: _IconButton */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_IconButton", function() { return _IconButton; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var classes = {
  component: "pe-button pe-icon-button",
  // elements
  content: "pe-icon-button__content",
  label: "pe-icon-button__label",
  // states
  compact: "pe-icon-button--compact"
};

var _IconButton = function _IconButton(_ref) {
  var h = _ref.h,
      Icon = _ref.Icon,
      Button = _ref.Button,
      props = _objectWithoutProperties(_ref, ["h", "Icon", "Button"]);

  var content = props.content ? props.content : props.icon ? h(Icon, props.icon) : props.children;

  var buttonProps = _extends({}, {
    content: h("div", {
      className: classes.content
    }, content),
    after: props.label && h("div", {
      className: classes.label
    }, props.label),
    parentClassName: [props.parentClassName || classes.component, props.compact ? classes.compact : null].join(" "),
    // defaults
    wash: false,
    animateOnTap: false
  }, props);

  return h(Button, buttonProps);
};




/***/ }),

/***/ "../node_modules/polythene-core-icon/dist/polythene-core-icon.mjs":
/*!************************************************************************!*\
  !*** ../node_modules/polythene-core-icon/dist/polythene-core-icon.mjs ***!
  \************************************************************************/
/*! exports provided: _Icon */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Icon", function() { return _Icon; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../node_modules/polythene-core/dist/polythene-core.mjs");


function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var classes = {
  component: "pe-icon",
  // states
  avatar: "pe-icon--avatar",
  large: "pe-icon--large",
  medium: "pe-icon--medium",
  regular: "pe-icon--regular",
  small: "pe-icon--small"
};

var _Icon = function _Icon(_ref) {
  var h = _ref.h,
      a = _ref.a,
      SVG = _ref.SVG,
      props = _objectWithoutProperties(_ref, ["h", "a", "SVG"]);

  var componentProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.component, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["classForSize"])(classes, props.size), props.avatar ? classes.avatar : null, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a["class"]]].join(" ")
  }, props.events);

  var content = [props.before, props.content ? props.content : props.svg ? h(SVG, props.svg) : props.src ? h("img", {
    src: props.src
  }) : props.children, props.after];
  return h(props.element || "div", componentProps, content);
};




/***/ }),

/***/ "../node_modules/polythene-core-ios-spinner/dist/polythene-core-ios-spinner.mjs":
/*!**************************************************************************************!*\
  !*** ../node_modules/polythene-core-ios-spinner/dist/polythene-core-ios-spinner.mjs ***!
  \**************************************************************************************/
/*! exports provided: _Spinner */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Spinner", function() { return _Spinner; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var classes = {
  component: "pe-ios-spinner",
  // elements
  blades: "pe-ios-spinner__blades",
  blade: "pe-ios-spinner__blade"
};

var blade = function blade(num, h) {
  return h("div", {
    key: "blade-".concat(num),
    className: classes.blade
  });
};

var _Spinner = function _Spinner(_ref) {
  var h = _ref.h,
      BaseSpinner = _ref.BaseSpinner,
      props = _objectWithoutProperties(_ref, ["h", "BaseSpinner"]);

  var content = props.content || h("div", {
    key: "content",
    className: classes.blades
  }, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (num) {
    return blade(num, h);
  }));

  var componentProps = _extends({}, props, {
    className: [classes.component, props.className].join(" "),
    content: content
  });

  return h(BaseSpinner, componentProps);
};




/***/ }),

/***/ "../node_modules/polythene-core-list-tile/dist/polythene-core-list-tile.mjs":
/*!**********************************************************************************!*\
  !*** ../node_modules/polythene-core-list-tile/dist/polythene-core-list-tile.mjs ***!
  \**********************************************************************************/
/*! exports provided: _ListTile */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_ListTile", function() { return _ListTile; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../node_modules/polythene-core/dist/polythene-core.mjs");


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var classes = {
  component: "pe-list-tile",
  // elements
  content: "pe-list-tile__content",
  highSubtitle: "pe-list-tile__high-subtitle",
  primary: "pe-list-tile__primary",
  secondary: "pe-list-tile__secondary",
  subtitle: "pe-list-tile__subtitle",
  title: "pe-list-tile__title",
  contentFront: "pe-list-tile__content-front",
  // states  
  compact: "pe-list-tile--compact",
  compactFront: "pe-list-tile--compact-front",
  disabled: "pe-list-tile--disabled",
  hasFront: "pe-list-tile--front",
  hasHighSubtitle: "pe-list-tile--high-subtitle",
  hasSubtitle: "pe-list-tile--subtitle",
  header: "pe-list-tile--header",
  hoverable: "pe-list-tile--hoverable",
  insetH: "pe-list-tile--inset-h",
  insetV: "pe-list-tile--inset-v",
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
  rounded: "pe-list-tile--rounded",
  highlight: "pe-list-tile--highlight",
  sticky: "pe-list-tile--sticky",
  navigation: "pe-list-tile--navigation"
};

var _ListTile = function _ListTile(_ref) {
  var h = _ref.h,
      a = _ref.a,
      Ripple = _ref.Ripple,
      Icon = _ref.Icon,
      props = _objectWithoutProperties(_ref, ["h", "a", "Ripple", "Icon"]);

  var hasTabIndex = !props.header && !props.url && !(props.secondary && props.secondary.url);
  var heightClass = props.subtitle ? classes.hasSubtitle : props.highSubtitle ? classes.hasHighSubtitle : props.front || props.indent ? classes.hasFront : null;

  var componentProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props, {
    remove: ["tabindex", "tabIndex"]
  }), // tabindex is set elsewhere
  props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.component, props.selected ? classes.selected : null, props.disabled ? classes.disabled : null, props.sticky ? classes.sticky : null, props.compact ? classes.compact : null, props.hoverable ? classes.hoverable : null, props.selectable ? classes.selectable : null, props.highlight ? classes.highlight : null, props.rounded ? classes.rounded : null, props.header ? classes.header : null, props.inset || props.insetH ? classes.insetH : null, props.inset || props.insetV ? classes.insetV : null, props.navigation ? classes.navigation : null, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, heightClass, props.className || props[a["class"]]].join(" ")
  }, hasTabIndex && _defineProperty({}, a.tabindex, props[a.tabindex] || 0) // events and url are attached to primary content to not interfere with controls
  );

  var primaryProps = _extends({}, {
    key: "primary"
  }, props);

  delete primaryProps.id;
  delete primaryProps[a["class"]];
  var contents = [props.ink && !props.disabled ? h(Ripple, _extends({}, props.ripple, {
    key: "ripple"
  })) : null, primaryContent({
    h: h,
    a: a,
    props: primaryProps
  }), props.secondary ? secondaryContent({
    h: h,
    a: a,
    Icon: Icon,
    props: props.secondary
  }) : null];
  var content = [props.before, contents, props.after];
  return h("div", // because primary or secondary content can be an "a", the container is always defined as "div", and option `element` is passed to primary content
  componentProps, content);
};

var primaryContent = function primaryContent(_ref3) {
  var h = _ref3.h,
      a = _ref3.a,
      props = _ref3.props;
  var url = props.keyboardControl ? null : props.url;
  var element = props.element ? props.element : url ? "a" : "div";
  var contentFrontClass = [classes.content, classes.contentFront, props.compactFront ? classes.compactFront : null].join(" ");
  var frontComp = props.front || props.indent ? h("div", _extends({}, {
    key: "front"
  }, {
    className: contentFrontClass
  }), props.front) : null;
  var hasTabIndex = !props.header && props.url;

  var elementProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props), props.events, {
    key: "primary"
  }, {
    className: classes.primary,
    style: null
  }, hasTabIndex && _defineProperty({}, a.tabindex, props[a.tabindex] || 0), url);

  var content = props.content ? props.content : [frontComp, h("div", {
    className: classes.content,
    style: props.style
  }, [props.title && !props.content ? h("div", _extends({}, {
    key: "title"
  }, {
    className: classes.title
  }), props.title) : null, props.subtitle ? h("div", _extends({}, {
    key: "subtitle"
  }, {
    className: classes.subtitle
  }), props.subtitle) : null, props.highSubtitle ? h("div", _extends({}, {
    key: "highSubtitle"
  }, {
    className: classes.subtitle + " " + classes.highSubtitle
  }), props.highSubtitle) : null, props.subContent ? h("div", _extends({}, {
    key: "subContent"
  }, {
    className: classes.subContent
  }), props.subContent) : null, props.children])];
  return h(element, elementProps, content);
};

var secondaryContent = function secondaryContent(_ref5) {
  var h = _ref5.h,
      a = _ref5.a,
      Icon = _ref5.Icon,
      _ref5$props = _ref5.props,
      props = _ref5$props === void 0 ? {} : _ref5$props;
  var url = props.keyboardControl ? null : props.url;
  var element = props.element ? props.element : url ? "a" : "div";
  var hasTabIndex = props.url;
  return h(element, _extends({}, url, {
    className: classes.secondary
  }, props.events, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props), hasTabIndex && _defineProperty({}, a.tabindex, props[a.tabindex] || 0), {
    key: "secondary"
  }), h("div", {
    className: classes.content
  }, [props.icon ? h(Icon, props.icon) : null, props.content ? props.content : null]));
};




/***/ }),

/***/ "../node_modules/polythene-core-list/dist/polythene-core-list.mjs":
/*!************************************************************************!*\
  !*** ../node_modules/polythene-core-list/dist/polythene-core-list.mjs ***!
  \************************************************************************/
/*! exports provided: _List */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_List", function() { return _List; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../node_modules/polythene-core/dist/polythene-core.mjs");


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var listTileClasses = {
  component: "pe-list-tile",
  // elements
  content: "pe-list-tile__content",
  highSubtitle: "pe-list-tile__high-subtitle",
  primary: "pe-list-tile__primary",
  secondary: "pe-list-tile__secondary",
  subtitle: "pe-list-tile__subtitle",
  title: "pe-list-tile__title",
  contentFront: "pe-list-tile__content-front",
  // states  
  compact: "pe-list-tile--compact",
  compactFront: "pe-list-tile--compact-front",
  disabled: "pe-list-tile--disabled",
  hasFront: "pe-list-tile--front",
  hasHighSubtitle: "pe-list-tile--high-subtitle",
  hasSubtitle: "pe-list-tile--subtitle",
  header: "pe-list-tile--header",
  hoverable: "pe-list-tile--hoverable",
  insetH: "pe-list-tile--inset-h",
  insetV: "pe-list-tile--inset-v",
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
  rounded: "pe-list-tile--rounded",
  highlight: "pe-list-tile--highlight",
  sticky: "pe-list-tile--sticky",
  navigation: "pe-list-tile--navigation"
};

var classes = {
  component: "pe-list",
  // states
  border: "pe-list--border",
  compact: "pe-list--compact",
  hasHeader: "pe-list--header",
  indentedBorder: "pe-list--indented-border",
  padding: "pe-list--padding",
  paddingTop: "pe-list--padding-top",
  paddingBottom: "pe-list--padding-bottom",
  // lookup
  header: listTileClasses.header
};

var paddingClasses = {
  both: classes.padding,
  bottom: classes.paddingBottom,
  top: classes.paddingTop,
  none: null
};

var paddingClass = function paddingClass() {
  var attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "both";
  return paddingClasses[attr];
};

var _List = function _List(_ref) {
  var h = _ref.h,
      a = _ref.a,
      ListTile = _ref.ListTile,
      props = _objectWithoutProperties(_ref, ["h", "a", "ListTile"]);

  var componentProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.component, props.border || props.borders ? classes.border : null, props.indentedBorder || props.indentedBorders ? classes.indentedBorder : null, props.header ? classes.hasHeader : null, props.compact ? classes.compact : null, paddingClass(props.padding), props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a["class"]]].join(" ")
  });

  var headerOpts;

  if (props.header) {
    headerOpts = _extends({}, props.header);
    headerOpts[a["class"]] = [classes.header, headerOpts[a["class"]] || null].join(" ");
  }

  var tiles = props.tiles ? props.tiles : props.content ? props.content : props.children;
  var contents = [headerOpts ? h(ListTile, _objectSpread({
    key: "header"
  }, props.all, headerOpts, {
    header: true
  })) : undefined, props.all ? tiles.map(function (tileOpts) {
    return h(ListTile, _objectSpread({}, props.all, tileOpts));
  }) : tiles];
  var content = [props.before, contents, props.after];
  return h(props.element || "div", componentProps, content);
};




/***/ }),

/***/ "../node_modules/polythene-core-material-design-progress-spinner/dist/polythene-core-material-design-progress-spinner.mjs":
/*!********************************************************************************************************************************!*\
  !*** ../node_modules/polythene-core-material-design-progress-spinner/dist/polythene-core-material-design-progress-spinner.mjs ***!
  \********************************************************************************************************************************/
/*! exports provided: _Spinner */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Spinner", function() { return _Spinner; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../node_modules/polythene-core/dist/polythene-core.mjs");
/* harmony import */ var polythene_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-utilities */ "../node_modules/polythene-utilities/dist/polythene-utilities.mjs");



function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var classes = {
  component: "pe-md-progress-spinner",
  // elements
  animation: "pe-md-progress-spinner__animation",
  circle: "pe-md-progress-spinner__circle",
  circleRight: "pe-md-progress-spinner__circle-right",
  circleLeft: "pe-md-progress-spinner__circle-left"
};

var percentageValue = function percentageValue(min, max) {
  var percentage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return min + (max - min) * percentage;
};

var rotateCircle = function rotateCircle(domElement, min, max, percentage) {
  var style = domElement.style;
  style["transform"] = style["-webkit-transform"] = style["-moz-transform"] = style["-ms-transform"] = style["-o-transform"] = "rotate(" + percentageValue(min, max, percentage) + "deg)";
};

var animate = function animate(stateEl, size, percentage) {
  var animationEl = stateEl.querySelector("." + classes.animation);
  var animationElStyle = animationEl.style;

  if (percentage < 0.5) {
    animationElStyle.clip = "rect(0px, " + size + "px, " + size + "px, " + size / 2 + "px)";
  } else {
    animationElStyle.clip = "rect(auto, auto, auto, auto)";
  }

  var leftCircle = stateEl.querySelector("." + classes.circleLeft);
  var rightCircle = stateEl.querySelector("." + classes.circleRight);
  leftCircle.style.clip = rightCircle.style.clip = "rect(0px, " + size / 2 + "px, " + size + "px, " + "0px)";
  rotateCircle(rightCircle, 0, 180, Math.min(1, percentage * 2));
  rotateCircle(leftCircle, 0, 360, percentage);
};

var updateWithPercentage = function updateWithPercentage(_ref) {
  var domElement = _ref.domElement,
      isAnimating = _ref.isAnimating,
      setIsAnimating = _ref.setIsAnimating,
      percentage = _ref.percentage,
      setPercentage = _ref.setPercentage,
      size = _ref.size,
      props = _ref.props;

  if (!domElement || isAnimating || size === undefined || props.percentage === undefined) {
    return;
  }

  var currentPercentage = Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["unpackAttrs"])(props.percentage);
  var previousPercentage = percentage;

  if (previousPercentage !== currentPercentage) {
    var easingFn = props.animated ? polythene_utilities__WEBPACK_IMPORTED_MODULE_1__["easing"].easeInOutQuad : function (v) {
      return v;
    };

    if (props.animated) {
      var animationDuration = props.updateDuration !== undefined ? props.updateDuration * 1000 : Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["styleDurationToMs"])(Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["getStyle"])({
        element: domElement.querySelector(".".concat(classes.animation)),
        prop: "animation-duration"
      }));
      var start = null;

      var step = function step(timestamp) {
        if (!start) start = timestamp;
        var progress = timestamp - start;
        var stepPercentage = 1.0 / animationDuration * progress;
        var newPercentage = previousPercentage + stepPercentage * (currentPercentage - previousPercentage);
        animate(domElement, size, easingFn(newPercentage));

        if (start && progress < animationDuration) {
          window.requestAnimationFrame(step);
        } else {
          start = null;
          setPercentage(currentPercentage);
          setIsAnimating(false);
        }
      };

      setIsAnimating(true);
      window.requestAnimationFrame(step);
    } else {
      animate(domElement, size, easingFn(currentPercentage));
      setPercentage(currentPercentage);
    }
  }
};

var getSize = function getSize(element) {
  return Math.round(element ? parseFloat(Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["getStyle"])({
    element: element,
    prop: "height"
  })) - 2 * parseFloat(Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["getStyle"])({
    element: element,
    prop: "padding"
  })) : 0);
};

var _Spinner = function _Spinner(_ref2) {
  var h = _ref2.h,
      useState = _ref2.useState,
      useEffect = _ref2.useEffect,
      BaseSpinner = _ref2.BaseSpinner,
      props = _objectWithoutProperties(_ref2, ["h", "useState", "useEffect", "BaseSpinner"]);

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      percentage = _useState2[0],
      setPercentage = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isAnimating = _useState4[0],
      setIsAnimating = _useState4[1];

  var _useState5 = useState(),
      _useState6 = _slicedToArray(_useState5, 2),
      domElement = _useState6[0],
      setDomElement = _useState6[1];

  var _useState7 = useState(),
      _useState8 = _slicedToArray(_useState7, 2),
      size = _useState8[0],
      setSize = _useState8[1];

  useEffect(function () {
    if (!domElement) {
      return;
    }

    setSize(getSize(domElement));
  }, [domElement]);
  updateWithPercentage({
    domElement: domElement,
    isAnimating: isAnimating,
    percentage: percentage,
    setPercentage: setPercentage,
    setIsAnimating: setIsAnimating,
    size: size,
    props: props
  });
  var content = props.content || h("div", {
    key: "content",
    className: classes.animation,
    style: {
      width: size + "px",
      height: size + "px"
    }
  }, [h("div", {
    key: "left",
    className: [classes.circle, classes.circleLeft].join(" ")
  }), h("div", {
    key: "right",
    className: [classes.circle, classes.circleRight].join(" ")
  })]);

  var componentProps = _extends({}, props, {
    ref: function ref(dom) {
      return dom && !domElement && setDomElement(dom);
    },
    className: [classes.component, props.className].join(" "),
    content: content
  });

  return h(BaseSpinner, componentProps);
};




/***/ }),

/***/ "../node_modules/polythene-core-material-design-spinner/dist/polythene-core-material-design-spinner.mjs":
/*!**************************************************************************************************************!*\
  !*** ../node_modules/polythene-core-material-design-spinner/dist/polythene-core-material-design-spinner.mjs ***!
  \**************************************************************************************************************/
/*! exports provided: _Spinner */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Spinner", function() { return _Spinner; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var classes = {
  component: "pe-md-spinner",
  // elements
  animation: "pe-md-spinner__animation",
  circle: "pe-md-spinner__circle",
  circleClipper: "pe-md-spinner__circle-clipper",
  circleClipperLeft: "pe-md-spinner__circle-clipper-left",
  circleClipperRight: "pe-md-spinner__circle-clipper-right",
  gapPatch: "pe-md-spinner__gap-patch",
  layer: "pe-md-spinner__layer",
  layerN: "pe-md-spinner__layer-"
};

var layer = function layer(num, h) {
  return h("div", {
    key: num,
    className: [classes.layer, classes.layerN + num].join(" ")
  }, [h("div", {
    key: "clipper-left",
    className: [classes.circleClipper, classes.circleClipperLeft].join(" ")
  }, h("div", {
    key: "circle",
    className: classes.circle
  })), h("div", {
    key: "gap-patch",
    className: classes.gapPatch
  }, h("div", {
    className: classes.circle
  })), h("div", {
    key: "clipper-right",
    className: [classes.circleClipper, classes.circleClipperRight].join(" ")
  }, h("div", {
    className: classes.circle
  }))]);
};

var _Spinner = function _Spinner(_ref) {
  var h = _ref.h,
      BaseSpinner = _ref.BaseSpinner,
      props = _objectWithoutProperties(_ref, ["h", "BaseSpinner"]);

  var content = props.content || h("div", {
    key: "content",
    className: classes.animation
  }, [1, 2, 3, 4].map(function (num) {
    return layer(num, h);
  }));

  var componentProps = _extends({}, props, {
    className: [classes.component, props.className].join(" "),
    content: content
  });

  return h(BaseSpinner, componentProps);
};




/***/ }),

/***/ "../node_modules/polythene-core-menu/dist/polythene-core-menu.mjs":
/*!************************************************************************!*\
  !*** ../node_modules/polythene-core-menu/dist/polythene-core-menu.mjs ***!
  \************************************************************************/
/*! exports provided: _Menu */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Menu", function() { return _Menu; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../node_modules/polythene-core/dist/polythene-core.mjs");


function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var listTileClasses = {
  component: "pe-list-tile",
  // elements
  content: "pe-list-tile__content",
  highSubtitle: "pe-list-tile__high-subtitle",
  primary: "pe-list-tile__primary",
  secondary: "pe-list-tile__secondary",
  subtitle: "pe-list-tile__subtitle",
  title: "pe-list-tile__title",
  contentFront: "pe-list-tile__content-front",
  // states  
  compact: "pe-list-tile--compact",
  compactFront: "pe-list-tile--compact-front",
  disabled: "pe-list-tile--disabled",
  hasFront: "pe-list-tile--front",
  hasHighSubtitle: "pe-list-tile--high-subtitle",
  hasSubtitle: "pe-list-tile--subtitle",
  header: "pe-list-tile--header",
  hoverable: "pe-list-tile--hoverable",
  insetH: "pe-list-tile--inset-h",
  insetV: "pe-list-tile--inset-v",
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
  rounded: "pe-list-tile--rounded",
  highlight: "pe-list-tile--highlight",
  sticky: "pe-list-tile--sticky",
  navigation: "pe-list-tile--navigation"
};

var classes = {
  component: "pe-menu",
  // elements
  panel: "pe-menu__panel",
  content: "pe-menu__content",
  placeholder: "pe-menu__placeholder",
  backdrop: "pe-menu__backdrop",
  // states
  floating: "pe-menu--floating",
  origin: "pe-menu--origin",
  permanent: "pe-menu--permanent",
  showBackdrop: "pe-menu--backdrop",
  visible: "pe-menu--visible",
  width_auto: "pe-menu--width-auto",
  width_n: "pe-menu--width-",
  isTopMenu: "pe-menu--top-menu",
  // lookup
  listTile: listTileClasses.component,
  selectedListTile: listTileClasses.selected
};

var DEFAULT_OFFSET_H = 0;
var DEFAULT_OFFSET_V = "79%";
var DEFAULT_TYPE = "floating";
var MIN_WIDTH = 1.5;
var DEFAULT_SHADOW_DEPTH = 1;

var unifyWidth = function unifyWidth(width) {
  return width < MIN_WIDTH ? MIN_WIDTH : width;
};

var widthClass = function widthClass(size) {
  return classes.width_n + size.toString().replace(".", "-");
};

var _Menu = function _Menu(_ref) {
  var h = _ref.h,
      a = _ref.a,
      useReducer = _ref.useReducer,
      useState = _ref.useState,
      useEffect = _ref.useEffect,
      useRef = _ref.useRef,
      getRef = _ref.getRef,
      Shadow = _ref.Shadow,
      props = _objectWithoutProperties(_ref, ["h", "a", "useReducer", "useState", "useEffect", "useRef", "getRef", "Shadow"]);

  var _useReducer = useReducer(polythene_core__WEBPACK_IMPORTED_MODULE_0__["transitionStateReducer"], polythene_core__WEBPACK_IMPORTED_MODULE_0__["initialTransitionState"]),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      dispatchTransitionState = _useReducer2[1];

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      domElement = _useState2[0],
      setDomElement = _useState2[1];

  var _useState3 = useState(!!props.permanent),
      _useState4 = _slicedToArray(_useState3, 2),
      setIsVisible = _useState4[1];

  var panelElRef = useRef();
  var contentElRef = useRef();

  var update = function update() {
    positionMenu();
    scrollContent();
  };

  var transitionOptions = function transitionOptions(_ref2) {
    var isShow = _ref2.isShow,
        _ref2$hideDelay = _ref2.hideDelay,
        hideDelay = _ref2$hideDelay === void 0 ? props.hideDelay : _ref2$hideDelay;
    return {
      dispatchTransitionState: dispatchTransitionState,
      setIsVisible: setIsVisible,
      props: _extends({}, props, {
        hideDelay: hideDelay
      }),
      isShow: isShow,
      beforeTransition: isShow ? function () {
        return update();
      } : null,
      domElements: {
        el: panelElRef.current,
        showClassElement: domElement
      },
      showClass: classes.visible
    };
  };

  var isTopMenu = function isTopMenu() {
    return props.topMenu || Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["stylePropCompare"])({
      element: domElement,
      pseudoSelector: ":before",
      prop: "content",
      contains: "\"".concat("top_menu", "\"")
    });
  };

  var positionMenu = function positionMenu() {
    if (polythene_core__WEBPACK_IMPORTED_MODULE_0__["isServer"]) {
      return;
    }

    if (!props.target) {
      return;
    }

    var panelEl = panelElRef.current;
    var contentEl = contentElRef.current;
    var targetEl = document.querySelector(props.target);

    if (!targetEl) {
      return;
    }

    if (!panelEl) {
      return;
    } // Don't set the position or top offset if the menu position is fixed


    var hasStylePositionFixed = Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["stylePropCompare"])({
      element: panelEl,
      prop: "position",
      equals: "fixed"
    });

    if (hasStylePositionFixed && !isTopMenu()) {
      _extends(panelEl.style, {});

      panelEl.offsetHeight; // force reflow

      return;
    }

    var parentRect = panelEl.parentNode.getBoundingClientRect();
    var targetRect = targetEl.getBoundingClientRect();
    var attrsOffsetH = props.offsetH !== undefined ? props.offsetH : props.offset !== undefined ? props.offset // deprecated
    : DEFAULT_OFFSET_H;
    var attrsOffsetV = props.offsetV !== undefined ? props.offsetV : DEFAULT_OFFSET_V;
    var offsetH = attrsOffsetH.toString().indexOf("%") !== -1 ? Math.round(parseFloat(attrsOffsetH) * 0.01 * targetRect.width) : Math.round(parseFloat(attrsOffsetH));
    var offsetV = attrsOffsetV.toString().indexOf("%") !== -1 ? Math.round(parseFloat(attrsOffsetV) * 0.01 * targetRect.height) : Math.round(parseFloat(attrsOffsetV));
    var positionOffsetV = offsetV;
    var attrsOrigin = props.origin || "top";
    var origin = attrsOrigin.split(/\W+/).reduce(function (acc, curr) {
      return acc[curr] = true, acc;
    }, {});
    var firstItem = contentEl.querySelectorAll("." + classes.listTile)[0];

    if (props.reposition) {
      // get the first List Tile to calculate the top position  
      var selectedItem = contentEl.querySelector("." + classes.selectedListTile);

      if (firstItem && selectedItem) {
        // calculate v position: menu should shift upward relative to the first item
        var firstItemRect = firstItem.getBoundingClientRect();
        var selectedItemRect = selectedItem.getBoundingClientRect();
        positionOffsetV = firstItemRect.top - selectedItemRect.top;
      } // align to middle of target


      var alignEl = selectedItem || firstItem;
      var alignRect = alignEl.getBoundingClientRect();

      var _targetRect = targetEl.getBoundingClientRect();

      var heightDiff = _targetRect.height - alignRect.height;
      positionOffsetV += Math.abs(heightDiff) / 2;
    } else if (props.origin && !hasStylePositionFixed) {
      if (origin.top) {
        positionOffsetV += targetRect.top - parentRect.top;
      } else if (origin.bottom) {
        positionOffsetV += targetRect.top - parentRect.bottom;
      }
    }

    if (props.height) {
      var firstItemHeight = firstItem ? firstItem.clientHeight : 48; // default List Tile height

      if (props.height === "max") {
        var topMargin = positionOffsetV;
        var bottomMargin = firstItemHeight;
        panelEl.style.height = "calc(100% - ".concat(topMargin + bottomMargin, "px)");
      } else {
        var height = /^\d+$/.test(props.height.toString()) ? "".concat(props.height, "px") : props.height;
        panelEl.style.height = height;
      }
    } // prevent animated changes


    var transitionDuration = panelEl.style.transitionDuration;
    panelEl.style.transitionDuration = "0ms";

    if (panelEl.parentNode && !hasStylePositionFixed) {
      if (origin.right) {
        panelEl.style.right = targetRect.right - parentRect.right + offsetH + "px";
      } else {
        panelEl.style.left = targetRect.left - parentRect.left + offsetH + "px";
      }

      if (origin.bottom) {
        panelEl.style.bottom = positionOffsetV + "px";
      } else {
        panelEl.style.top = positionOffsetV + "px";
      }

      panelEl.style.transformOrigin = attrsOrigin.split(/\W+/).join(" ");
    }

    panelEl.offsetHeight; // force reflow

    panelEl.style.transitionDuration = transitionDuration;
  };

  var scrollContent = function scrollContent() {
    if (polythene_core__WEBPACK_IMPORTED_MODULE_0__["isServer"]) {
      return;
    }

    if (!props.scrollTarget) {
      return;
    }

    var scrollTargetEl = document.querySelector(props.scrollTarget);

    if (!scrollTargetEl) {
      return;
    }

    contentElRef.current.scrollTop = scrollTargetEl.offsetTop;
  };

  var showMenu = function showMenu() {
    return Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["transitionComponent"])(transitionOptions({
      isShow: true
    }));
  };

  var hideMenu = function hideMenu() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        hideDelay = _ref3.hideDelay;

    return Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["transitionComponent"])(transitionOptions({
      isShow: false,
      hideDelay: hideDelay
    }));
  };

  useEffect(function () {
    if (!domElement) {
      return;
    }

    panelElRef.current = domElement.querySelector(".".concat(classes.panel));

    _extends(panelElRef.current.style, props.style);

    contentElRef.current = domElement.querySelector(".".concat(classes.content));

    var handleEscape = function handleEscape(e) {
      if (e.key === "Escape" || e.key === "Esc") {
        hideMenu({
          hideDelay: 0
        });
      }
    };

    var handleDismissTap = function handleDismissTap(e) {
      if (e.target === panelElRef.current) {
        return;
      }

      hideMenu();
    };

    var activateDismissTap = function activateDismissTap() {
      polythene_core__WEBPACK_IMPORTED_MODULE_0__["pointerEndDownEvent"].forEach(function (evt) {
        return document.addEventListener(evt, handleDismissTap);
      });
    };

    var deActivateDismissTap = function deActivateDismissTap() {
      polythene_core__WEBPACK_IMPORTED_MODULE_0__["pointerEndDownEvent"].forEach(function (evt) {
        return document.removeEventListener(evt, handleDismissTap);
      });
    };

    if (!props.permanent) {
      Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["subscribe"])("resize", update);
      Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["subscribe"])("keydown", handleEscape);
      setTimeout(function () {
        activateDismissTap();
        showMenu();
      }, 0);
    }

    return function () {
      if (!props.permanent) {
        Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["unsubscribe"])("resize", update);
        Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["unsubscribe"])("keydown", handleEscape);
        deActivateDismissTap();
      }
    };
  }, [domElement]);
  var type = props.type || DEFAULT_TYPE;

  var componentProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props, {
    remove: ["style"]
  }), props.testId && {
    "data-test-id": props.testId
  }, getRef(function (dom) {
    return dom && !domElement && (setDomElement(dom), props.getRef && props.getRef(dom));
  }), {
    className: [classes.component, props.permanent ? classes.permanent : null, props.origin ? classes.origin : null, props.backdrop ? classes.showBackdrop : null, props.topMenu ? classes.isTopMenu : null, type === "floating" && !props.permanent ? classes.floating : null, props.width || props.size ? widthClass(unifyWidth(props.width || props.size)) : null, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a["class"]]].join(" ")
  });

  var shadowDepth = props.shadowDepth !== undefined ? props.shadowDepth : DEFAULT_SHADOW_DEPTH;
  var contents = [h("div", {
    key: "backdrop",
    className: classes.backdrop
  }), h("div", {
    className: classes.panel,
    key: "panel"
  }, [h(Shadow, {
    shadowDepth: shadowDepth,
    animated: true,
    key: "shadow"
  }), h("div", {
    className: classes.content,
    key: "content"
  }, props.content || props.children)])];
  var content = [props.before, contents, props.after];
  return h(props.element || "div", componentProps, content);
};




/***/ }),

/***/ "../node_modules/polythene-core-notification/dist/polythene-core-notification.mjs":
/*!****************************************************************************************!*\
  !*** ../node_modules/polythene-core-notification/dist/polythene-core-notification.mjs ***!
  \****************************************************************************************/
/*! exports provided: _Notification */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Notification", function() { return _Notification; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../node_modules/polythene-core/dist/polythene-core.mjs");
/* harmony import */ var polythene_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-utilities */ "../node_modules/polythene-utilities/dist/polythene-utilities.mjs");



function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var classes = {
  component: "pe-notification",
  // elements
  action: "pe-notification__action",
  content: "pe-notification__content",
  holder: "pe-notification__holder",
  placeholder: "pe-notification__placeholder",
  title: "pe-notification__title",
  // states
  hasContainer: "pe-notification--container",
  horizontal: "pe-notification--horizontal",
  multilineTitle: "pe-notification__title--multi-line",
  vertical: "pe-notification--vertical",
  visible: "pe-notification--visible"
};

var DEFAULT_TIME_OUT = 3;

var setTitleStyles = function setTitleStyles(titleEl) {
  if (polythene_core__WEBPACK_IMPORTED_MODULE_0__["isServer"]) return;
  var height = titleEl.getBoundingClientRect().height;
  var lineHeight = parseInt(window.getComputedStyle(titleEl).lineHeight, 10);
  var paddingTop = parseInt(window.getComputedStyle(titleEl).paddingTop, 10);
  var paddingBottom = parseInt(window.getComputedStyle(titleEl).paddingBottom, 10);

  if (height > lineHeight + paddingTop + paddingBottom) {
    titleEl.classList.add(classes.multilineTitle);
  }
};

var _Notification = function _Notification(_ref) {
  var h = _ref.h,
      a = _ref.a,
      useState = _ref.useState,
      useEffect = _ref.useEffect,
      useRef = _ref.useRef,
      getRef = _ref.getRef,
      useReducer = _ref.useReducer,
      props = _objectWithoutProperties(_ref, ["h", "a", "useState", "useEffect", "useRef", "getRef", "useReducer"]);

  var _useReducer = useReducer(polythene_core__WEBPACK_IMPORTED_MODULE_0__["transitionStateReducer"], polythene_core__WEBPACK_IMPORTED_MODULE_0__["initialTransitionState"]),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      transitionState = _useReducer2[0],
      dispatchTransitionState = _useReducer2[1];

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      domElement = _useState2[0],
      setDomElement = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isPaused = _useState4[0],
      setIsPaused = _useState4[1];

  var containerElRef = useRef();
  var titleElRef = useRef();
  var timerRef = useRef(new polythene_utilities__WEBPACK_IMPORTED_MODULE_1__["Timer"]());
  var isVisible = (transitionState || polythene_core__WEBPACK_IMPORTED_MODULE_0__["initialTransitionState"]).isVisible;
  var isTransitioning = (transitionState || polythene_core__WEBPACK_IMPORTED_MODULE_0__["initialTransitionState"]).isTransitioning;
  var isHiding = (transitionState || polythene_core__WEBPACK_IMPORTED_MODULE_0__["initialTransitionState"]).isHiding;
  var timer = timerRef && timerRef.current;

  var transitionOptions = function transitionOptions(_ref2) {
    var isShow = _ref2.isShow,
        referrer = _ref2.referrer;
    return {
      dispatchTransitionState: dispatchTransitionState,
      instanceId: props.instanceId,
      props: props,
      isShow: isShow,
      beforeTransition: stopTimer,
      afterTransition: isShow ? function () {
        // set timer to hide in a few seconds
        var timeout = props.timeout;

        if (timeout === 0) ; else {
          var timeoutSeconds = timeout !== undefined ? timeout : DEFAULT_TIME_OUT;
          timer.start(function () {
            return hideNotification();
          }, timeoutSeconds);
        }
      } : null,
      domElements: {
        el: domElement,
        containerEl: containerElRef.current
      },
      showClass: classes.visible,
      referrer: referrer
    };
  };

  var showNotification = function showNotification() {
    return Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["transitionComponent"])(transitionOptions({
      isShow: true
    }));
  };

  var hideNotification = function hideNotification() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        referrer = _ref3.referrer;

    return Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["transitionComponent"])(transitionOptions({
      isShow: false,
      referrer: referrer
    }));
  };

  var pause = function pause() {
    setIsPaused(true);

    if (timer) {
      timer.pause();
    }
  };

  var unpause = function unpause() {
    setIsPaused(false);

    if (timer) {
      timer.resume();
    }
  };

  var stopTimer = function stopTimer() {
    if (timer) {
      timer.stop();
    }
  };

  useEffect(function () {
    return function () {
      stopTimer();
    };
  }, []); // DOM elements

  useEffect(function () {
    if (!domElement) {
      return;
    }

    if (polythene_core__WEBPACK_IMPORTED_MODULE_0__["isClient"]) {
      // props.holderSelector is passed as option to Multiple
      containerElRef.current = document.querySelector(props.containerSelector || props.holderSelector);

      if (!containerElRef.current) {
        console.error("No container element found"); // eslint-disable-line no-console
      }

      if (props.containerSelector && containerElRef.current) {
        containerElRef.current.classList.add(classes.hasContainer);
      }
    }

    titleElRef.current = domElement.querySelector(".".concat(classes.title));

    if (titleElRef.current) {
      setTitleStyles(titleElRef.current);
    }
  }, [domElement]); // Show / hide logic

  useEffect(function () {
    if (!domElement || isTransitioning || isHiding) {
      return;
    }

    if (props.hide) {
      if (isVisible) {
        hideNotification();
      }
    } else if (props.show) {
      if (!isVisible) {
        showNotification();
      }
    }
  }, [domElement, isTransitioning, isVisible, isHiding, props.hide, props.show]); // Pause logic

  useEffect(function () {
    if (!domElement || isTransitioning || isHiding) {
      return;
    }

    if (props.unpause) {
      if (isPaused) {
        unpause();
      }
    } else if (props.pause) {
      if (!isPaused) {
        pause();
      }
    }
  }, [domElement, isTransitioning, isHiding, props.pause, props.unpause]);

  var componentProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props, {
    remove: ["style"]
  }), // style set in content, and set by show/hide transition
  getRef(function (dom) {
    return dom && !domElement && (setDomElement(dom), props.ref && props.ref(dom));
  }), props.testId && {
    "data-test-id": props.testId
  }, _defineProperty({
    className: [classes.component, props.fromMultipleClassName, // classes.visible is set in showNotification though transition
    props.tone === "light" ? null : "pe-dark-tone", // default dark tone
    props.containerSelector ? classes.hasContainer : null, props.layout === "vertical" ? classes.vertical : classes.horizontal, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a["class"]]].join(" ")
  }, a.onclick, function (e) {
    return e.preventDefault();
  }));

  var contents = h("div", {
    className: classes.content,
    style: props.style
  }, props.content || [props.title ? h("div", {
    className: classes.title
  }, props.title) : null, props.action ? h("div", {
    className: classes.action
  }, props.action) : null]);
  var content = [props.before, contents, props.after];
  return h(props.element || "div", componentProps, content);
};




/***/ }),

/***/ "../node_modules/polythene-core-radio-button/dist/polythene-core-radio-button.mjs":
/*!****************************************************************************************!*\
  !*** ../node_modules/polythene-core-radio-button/dist/polythene-core-radio-button.mjs ***!
  \****************************************************************************************/
/*! exports provided: _RadioButton */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_RadioButton", function() { return _RadioButton; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var classes = {
  component: "pe-radio-control"
};

var iconOn = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"/></svg>";
var iconOff = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"/></svg>";
var icons = {
  iconOff: iconOff,
  iconOn: iconOn
};
var _RadioButton = function _RadioButton(_ref) {
  var h = _ref.h,
      SelectionControl = _ref.SelectionControl,
      props = _objectWithoutProperties(_ref, ["h", "SelectionControl"]);

  var componentProps = _extends({}, props, {
    icons: icons,
    selectable: props.selectable || function (selected) {
      return !selected;
    },
    // default: only selectable when not checked
    instanceClass: classes.component,
    type: "radio"
  });

  return h(SelectionControl, componentProps);
};




/***/ }),

/***/ "../node_modules/polythene-core-radio-group/dist/polythene-core-radio-group.mjs":
/*!**************************************************************************************!*\
  !*** ../node_modules/polythene-core-radio-group/dist/polythene-core-radio-group.mjs ***!
  \**************************************************************************************/
/*! exports provided: _RadioGroup */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_RadioGroup", function() { return _RadioGroup; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../node_modules/polythene-core/dist/polythene-core.mjs");


function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var classes = {
  component: "pe-radio-group"
};

var _RadioGroup = function _RadioGroup(_ref) {
  var h = _ref.h,
      a = _ref.a,
      useState = _ref.useState,
      useEffect = _ref.useEffect,
      RadioButton = _ref.RadioButton,
      props = _objectWithoutProperties(_ref, ["h", "a", "useState", "useEffect", "RadioButton"]);

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      checkedIndex = _useState2[0],
      setCheckedIndex = _useState2[1];

  var buttons = props.content || props.buttons || props.children;
  useEffect(function () {
    var index = buttons.reduce(function (acc, buttonOpts, index) {
      if (buttonOpts.value === undefined) {
        console.error("Option 'value' not set for radio button"); // eslint-disable-line no-console
      }

      return acc !== null ? acc : buttonOpts.defaultChecked !== undefined || props.defaultCheckedValue !== undefined && buttonOpts.value === props.defaultCheckedValue || props.defaultSelectedValue !== undefined && buttonOpts.value === props.defaultSelectedValue // deprecated
      ? index : acc;
    }, null);
    setCheckedIndex(index);
  }, []);

  var componentProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.component, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a["class"]]].join(" ")
  });

  var groupCheckedValue = props.checkedValue;
  var contents = buttons.length ? buttons.map(function (buttonOpts, index) {
    if (!buttonOpts) {
      return null;
    }

    var isChecked = buttonOpts.checked !== undefined ? buttonOpts.checked : groupCheckedValue !== undefined ? buttonOpts.value === groupCheckedValue : checkedIndex === index;
    return h(RadioButton, _extends({}, {
      /* group attributes that may be overwritten by individual buttons */
      name: props.name
    }, props.all,
    /* individual button options */
    buttonOpts, {
      /* this component's options */
      onChange: function onChange(_ref2) {
        var value = _ref2.value;
        return setCheckedIndex(index), props.onChange && props.onChange({
          value: value
        });
      },
      checked: isChecked,
      key: buttonOpts.value // required for proper selection

    }));
  }) : null;
  var content = [props.before, contents, props.after];
  return h(props.element || "div", componentProps, content);
};




/***/ }),

/***/ "../node_modules/polythene-core-ripple/dist/polythene-core-ripple.mjs":
/*!****************************************************************************!*\
  !*** ../node_modules/polythene-core-ripple/dist/polythene-core-ripple.mjs ***!
  \****************************************************************************/
/*! exports provided: _Ripple */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Ripple", function() { return _Ripple; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../node_modules/polythene-core/dist/polythene-core.mjs");
/* harmony import */ var polythene_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-theme */ "../node_modules/polythene-theme/dist/polythene-theme.mjs");



function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var ANIMATION_END_EVENT = Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["getAnimationEndEvent"])();
var DEFAULT_START_OPACITY = 0.2;
var DEFAULT_END_OPACITY = 0.0;
var DEFAULT_START_SCALE = 0.1;
var DEFAULT_END_SCALE = 2.0;
var OPACITY_DECAY_VELOCITY = 0.35;

var addStyleToHead = function addStyleToHead(id, stylesheet) {
  if (polythene_core__WEBPACK_IMPORTED_MODULE_0__["isServer"]) return;
  var documentRef = window.document;
  var styleEl = documentRef.createElement("style");
  styleEl.setAttribute("id", id);
  styleEl.appendChild(documentRef.createTextNode(stylesheet));
  documentRef.head.appendChild(styleEl);
};

var removeStyleFromHead = function removeStyleFromHead(id) {
  if (polythene_core__WEBPACK_IMPORTED_MODULE_0__["isServer"]) return;
  var el = document.getElementById(id);

  if (el && el.parentNode) {
    el.parentNode.removeChild(el);
  }
};

var animation = (function (_ref) {
  var e = _ref.e,
      id = _ref.id,
      el = _ref.el,
      props = _ref.props,
      classes = _ref.classes;
  return new Promise(function (resolve) {
    var container = document.createElement("div");
    container.setAttribute("class", classes.mask);
    el.appendChild(container);
    var waves = document.createElement("div");
    waves.setAttribute("class", classes.waves);
    container.appendChild(waves);
    var rect = el.getBoundingClientRect();
    var x = polythene_core__WEBPACK_IMPORTED_MODULE_0__["isTouch"] && e.touches ? e.touches[0].pageX : e.clientX;
    var y = polythene_core__WEBPACK_IMPORTED_MODULE_0__["isTouch"] && e.touches ? e.touches[0].pageY : e.clientY;
    var w = el.offsetWidth;
    var h = el.offsetHeight;
    var waveRadius = Math.sqrt(w * w + h * h);
    var mx = props.center ? rect.left + rect.width / 2 : x;
    var my = props.center ? rect.top + rect.height / 2 : y;
    var rx = mx - rect.left - waveRadius / 2;
    var ry = my - rect.top - waveRadius / 2;
    var startOpacity = props.startOpacity !== undefined ? props.startOpacity : DEFAULT_START_OPACITY;
    var opacityDecayVelocity = props.opacityDecayVelocity !== undefined ? props.opacityDecayVelocity : OPACITY_DECAY_VELOCITY;
    var endOpacity = props.endOpacity || DEFAULT_END_OPACITY;
    var startScale = props.startScale || DEFAULT_START_SCALE;
    var endScale = props.endScale || DEFAULT_END_SCALE;
    var duration = props.duration ? props.duration : 1 / opacityDecayVelocity * 0.2;
    var color = window.getComputedStyle(el).color;
    var style = waves.style;
    style.width = style.height = waveRadius + "px";
    style.top = ry + "px";
    style.left = rx + "px";
    style["animation-duration"] = style["-webkit-animation-duration"] = style["-moz-animation-duration"] = style["-o-animation-duration"] = duration + "s";
    style.backgroundColor = color;
    style.opacity = startOpacity;
    style.animationName = id;
    style.animationTimingFunction = props.animationTimingFunction || polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].animation_curve_default;
    var rippleStyleSheet = "@keyframes ".concat(id, " {\n      0% {\n        transform:scale(").concat(startScale, ");\n        opacity: ").concat(startOpacity, "\n      }\n      100% {\n        transform:scale(").concat(endScale, ");\n        opacity: ").concat(endOpacity, ";\n      }\n    }");
    addStyleToHead(id, rippleStyleSheet);

    var animationDone = function animationDone(evt) {
      removeStyleFromHead(id);
      waves.removeEventListener(ANIMATION_END_EVENT, animationDone, false);

      if (props.persistent) {
        style.opacity = endOpacity;
        style.transform = "scale(" + endScale + ")";
      } else {
        waves.classList.remove(classes.wavesAnimating);
        container.removeChild(waves);
        el.removeChild(container);
      }

      resolve(evt);
    };

    waves.addEventListener(ANIMATION_END_EVENT, animationDone, false);
    waves.classList.add(classes.wavesAnimating);
  });
});

var classes = {
  component: "pe-ripple",
  // elements
  mask: "pe-ripple__mask",
  waves: "pe-ripple__waves",
  // states
  unconstrained: "pe-ripple--unconstrained",
  wavesAnimating: "pe-ripple__waves--animating"
};

var useAnimationsState = function useAnimationsState(_ref) {
  var useState = _ref.useState;

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      animations = _useState2[0],
      setAnimations = _useState2[1];

  return [animations, function (addId, animation) {
    return setAnimations(_extends({}, animations, _defineProperty({}, addId, animation)));
  }, function (removeId) {
    var updated = _extends({}, animations);

    delete updated[removeId];
    setAnimations(updated);
  }];
};

var _Ripple = function _Ripple(_ref2) {
  var h = _ref2.h,
      a = _ref2.a,
      getRef = _ref2.getRef,
      useState = _ref2.useState,
      useEffect = _ref2.useEffect,
      props = _objectWithoutProperties(_ref2, ["h", "a", "getRef", "useState", "useEffect"]);

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      domElement = _useState4[0],
      setDomElement = _useState4[1];

  var _useAnimationsState = useAnimationsState({
    useState: useState
  }),
      _useAnimationsState2 = _slicedToArray(_useAnimationsState, 3),
      animations = _useAnimationsState2[0],
      addAnimation = _useAnimationsState2[1],
      removeAnimation = _useAnimationsState2[2];

  var isAnimating = animations ? Object.keys(animations).length > 0 : false;
  var triggerEl = props.target || (domElement ? domElement.parentElement : undefined);

  var tap = function tap(e) {
    if (props.disabled || !domElement || !props.multi && isAnimating) {
      return;
    }

    if (props.start) {
      props.start(e);
    }

    var id = "ripple_animation_".concat(new Date().getTime());
    var rippleAnimation = animation({
      e: e,
      id: id,
      el: domElement,
      props: props,
      classes: classes
    }).then(function (evt) {
      if (props.end) {
        props.end(evt);
      }

      removeAnimation(id);
    });
    addAnimation(id, rippleAnimation);
  };

  useEffect(function () {
    if (triggerEl && triggerEl.addEventListener) {
      polythene_core__WEBPACK_IMPORTED_MODULE_0__["pointerEndEvent"].forEach(function (evt) {
        return triggerEl.addEventListener(evt, tap, false);
      });
      return function () {
        polythene_core__WEBPACK_IMPORTED_MODULE_0__["pointerEndEvent"].forEach(function (evt) {
          return triggerEl.removeEventListener(evt, tap, false);
        });
      };
    }
  }, [triggerEl]);

  var componentProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props), getRef(function (dom) {
    return dom && !domElement && setDomElement(dom);
  }), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.component, props.unconstrained ? classes.unconstrained : null, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a["class"]]].join(" ")
  });

  var content = [props.before, props.after];
  return h(props.element || "div", componentProps, content);
};




/***/ }),

/***/ "../node_modules/polythene-core-search/dist/polythene-core-search.mjs":
/*!****************************************************************************!*\
  !*** ../node_modules/polythene-core-search/dist/polythene-core-search.mjs ***!
  \****************************************************************************/
/*! exports provided: _Search */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Search", function() { return _Search; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../node_modules/polythene-core/dist/polythene-core.mjs");


function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var classes = {
  component: "pe-search",
  // elements
  content: "pe-search__content",
  // states
  searchFullWidth: "pe-search--full-width",
  searchInset: "pe-search--inset"
};

var getNameOfState = function getNameOfState(searchState) {
  return searchState.focus && searchState.dirty ? "focus_dirty" : searchState.focus ? "focus" : searchState.dirty ? "dirty" : "none";
};

var _Search = function _Search(_ref) {
  var h = _ref.h,
      a = _ref.a,
      useState = _ref.useState,
      TextField = _ref.TextField,
      props = _objectWithoutProperties(_ref, ["h", "a", "useState", "TextField"]);

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      searchState = _useState2[0],
      setSearchState = _useState2[1];

  var componentProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.component, props.fullWidth ? classes.searchFullWidth : classes.searchInset, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a["class"]]].join(" ")
  }, props.events);

  var searchStateName = getNameOfState(searchState);
  var buttons = (props.buttons || {})[searchStateName] || {};
  var textfieldAttrs = props.textfield || {};
  var contents = h("div", {
    className: classes.content
  }, [buttons.before, h(TextField, _extends({}, textfieldAttrs, {
    key: "input",
    onChange: function onChange(newState) {
      setSearchState(newState);

      if (textfieldAttrs.onChange) {
        textfieldAttrs.onChange(newState);
      }
    }
  })), buttons.after]);
  var content = [props.before, contents, props.after];
  return h(props.element || "div", componentProps, content);
};




/***/ }),

/***/ "../node_modules/polythene-core-selection-control/dist/polythene-core-selection-control.mjs":
/*!**************************************************************************************************!*\
  !*** ../node_modules/polythene-core-selection-control/dist/polythene-core-selection-control.mjs ***!
  \**************************************************************************************************/
/*! exports provided: _SelectionControl, _ViewControl */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_SelectionControl", function() { return _SelectionControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_ViewControl", function() { return _ViewControl; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../node_modules/polythene-core/dist/polythene-core.mjs");


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var classes = {
  component: "pe-control",
  // elements
  formLabel: "pe-control__form-label",
  input: "pe-control__input",
  label: "pe-control__label",
  // states
  disabled: "pe-control--disabled",
  inactive: "pe-control--inactive",
  large: "pe-control--large",
  medium: "pe-control--medium",
  off: "pe-control--off",
  on: "pe-control--on",
  regular: "pe-control--regular",
  small: "pe-control--small",
  // control view elements
  box: "pe-control__box",
  button: "pe-control__button",
  // control view states
  buttonOff: "pe-control__button--off",
  buttonOn: "pe-control__button--on"
};

var _SelectionControl = function _SelectionControl(_ref) {
  var h = _ref.h,
      a = _ref.a,
      useState = _ref.useState,
      ViewControl = _ref.ViewControl,
      props = _objectWithoutProperties(_ref, ["h", "a", "useState", "ViewControl"]);

  var defaultChecked = props.defaultChecked !== undefined ? props.defaultChecked : props.checked || false;

  var _useState = useState(defaultChecked),
      _useState2 = _slicedToArray(_useState, 2),
      previousIsChecked = _useState2[0],
      setIsChecked = _useState2[1];

  var isChecked = props.checked !== undefined ? props.checked : previousIsChecked;
  var selectable = props.selectable !== undefined ? props.selectable(isChecked) : false;
  var inactive = props.disabled || !selectable;

  var notifyChange = function notifyChange(e, isChecked) {
    if (props.onChange) {
      props.onChange({
        event: e,
        checked: isChecked,
        value: props.value
      });
    }
  };

  var onChange = function onChange(e) {
    var isChecked = e.currentTarget.checked;

    if (props.type === "radio") ; else {
      setIsChecked(isChecked);
    }

    notifyChange(e, isChecked);
  };

  var toggle = function toggle(e) {
    var newChecked = !isChecked;
    setIsChecked(newChecked);
    notifyChange(e, newChecked);
  };

  var viewControlClickHandler = props.events && props.events[a.onclick];
  var viewControlKeyDownHandler = props.events && props.events[a.onkeydown] ? props.events[a.onkeydown] : function (e) {
    if (e.key === "Enter" || e.keyCode === 32) {
      e.preventDefault();

      if (viewControlClickHandler) {
        viewControlClickHandler(e);
      } else {
        toggle(e);
      }
    }
  };

  var componentProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.component, props.instanceClass, // for instance pe-checkbox-control
    isChecked ? classes.on : classes.off, props.disabled ? classes.disabled : null, inactive ? classes.inactive : null, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["classForSize"])(classes, props.size), props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a["class"]]].join(" ")
  });

  var content = h("label", _extends({}, {
    className: classes.formLabel
  }, viewControlClickHandler && _defineProperty({}, a.onclick, function (e) {
    return e.preventDefault(), viewControlClickHandler(e);
  })), [props.before, h(ViewControl, _extends({}, props, {
    inactive: inactive,
    checked: isChecked,
    events: _defineProperty({}, a.onkeydown, viewControlKeyDownHandler)
  })), props.label ? h(".".concat(classes.label), {
    key: "label"
  }, props.label) : null, h("input", _extends({}, props.events, {
    key: "input",
    name: props.name,
    type: props.type,
    value: props.value,
    checked: isChecked
  }, props.disabled || inactive ? _defineProperty({}, a.readonly, "readonly") : _defineProperty({}, a.onchange, onChange))), props.after]);
  return h(props.element || "div", componentProps, content);
};

var CONTENT = [{
  iconType: "iconOn",
  className: classes.buttonOn
}, {
  iconType: "iconOff",
  className: classes.buttonOff
}];

var createIcon = function createIcon(h, iconType, props, className) {
  return (// if props.iconOn/props.iconOff is passed, use that icon options object and ignore size
    // otherwise create a new object
    _extends({}, {
      className: className,
      key: iconType
    }, props[iconType] ? props[iconType] : {
      svg: {
        content: h.trust(props.icons[iconType])
      }
    }, props.icon, props.size ? {
      size: props.size
    } : null)
  );
};

var _ViewControl = function _ViewControl(_ref) {
  var h = _ref.h,
      Icon = _ref.Icon,
      IconButton = _ref.IconButton,
      props = _objectWithoutProperties(_ref, ["h", "Icon", "IconButton"]);

  var element = props.element || ".".concat(classes.box);
  var content = h(IconButton, _extends({}, {
    element: "div",
    className: classes.button,
    content: CONTENT.map(function (o) {
      return h(Icon, createIcon(h, o.iconType, props, o.className));
    }),
    ripple: {
      center: true
    },
    disabled: props.disabled,
    events: props.events,
    inactive: props.inactive
  }, props.iconButton // for example for hover behaviour
  ));
  return h(element, null, content);
};




/***/ }),

/***/ "../node_modules/polythene-core-shadow/dist/polythene-core-shadow.mjs":
/*!****************************************************************************!*\
  !*** ../node_modules/polythene-core-shadow/dist/polythene-core-shadow.mjs ***!
  \****************************************************************************/
/*! exports provided: _Shadow, getDepthClass */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Shadow", function() { return _Shadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDepthClass", function() { return getDepthClass; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../node_modules/polythene-core/dist/polythene-core.mjs");


function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var classes = {
  component: "pe-shadow",
  // elements      
  bottomShadow: "pe-shadow__bottom",
  topShadow: "pe-shadow__top",
  // states
  animated: "pe-shadow--animated",
  depth_n: "pe-shadow--depth-",
  with_active_shadow: "pe-with-active-shadow"
};

var DEFAULT_SHADOW_DEPTH = 1;
var getDepthClass = function getDepthClass(shadowDepth) {
  return shadowDepth !== undefined ? "".concat(classes.depth_n).concat(Math.min(5, shadowDepth)) : DEFAULT_SHADOW_DEPTH;
};
var _Shadow = function _Shadow(_ref) {
  var h = _ref.h,
      a = _ref.a,
      props = _objectWithoutProperties(_ref, ["h", "a"]);

  var depthClass = getDepthClass(props.shadowDepth);

  var componentProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.component, depthClass, props.animated && classes.animated, props.className || props[a["class"]]].join(" ")
  });

  var content = [props.before, props.content ? props.content : props.children, props.after];
  return h(props.element || "div", componentProps, [content, h("div", {
    key: "bottom",
    className: [classes.bottomShadow].join(" ")
  }), h("div", {
    key: "top",
    className: [classes.topShadow].join(" ")
  })]);
};




/***/ }),

/***/ "../node_modules/polythene-core-slider/dist/polythene-core-slider.mjs":
/*!****************************************************************************!*\
  !*** ../node_modules/polythene-core-slider/dist/polythene-core-slider.mjs ***!
  \****************************************************************************/
/*! exports provided: _Slider */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Slider", function() { return _Slider; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../node_modules/polythene-core/dist/polythene-core.mjs");


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var classes = {
  component: "pe-slider",
  // elements
  control: "pe-slider__control",
  label: "pe-slider__label",
  pin: "pe-slider__pin",
  thumb: "pe-slider__thumb",
  tick: "pe-slider__tick",
  ticks: "pe-slider__ticks",
  track: "pe-slider__track",
  trackBar: "pe-slider__track-bar",
  trackBarValue: "pe-slider__track-bar-value",
  trackPart: "pe-slider__track-part",
  trackPartRest: "pe-slider__track-rest",
  trackPartValue: "pe-slider__track-value",
  // states
  hasFocus: "pe-slider--focus",
  hasPin: "pe-slider--pin",
  hasTicks: "pe-slider--ticks",
  hasTrack: "pe-slider--track",
  isActive: "pe-slider--active",
  isAtMin: "pe-slider--min",
  isDisabled: "pe-slider--disabled",
  tickValue: "pe-slider__tick--value"
};

var MAX_TICKS = 100;

var positionFromEvent = function positionFromEvent(e, isVertical) {
  return (// isVertical not yet implemented
    polythene_core__WEBPACK_IMPORTED_MODULE_0__["isTouch"] && e.touches ? isVertical ? e.touches[0].pageY : e.touches[0].pageX : isVertical ? e.pageY : e.pageX
  );
};

var _Slider = function _Slider(_ref) {
  var _ref3;

  var h = _ref.h,
      a = _ref.a,
      useState = _ref.useState,
      useEffect = _ref.useEffect,
      useRef = _ref.useRef,
      getRef = _ref.getRef,
      props = _objectWithoutProperties(_ref, ["h", "a", "useState", "useEffect", "useRef", "getRef"]);

  var min = props.min !== undefined ? props.min : 0;
  var max = props.max !== undefined ? props.max : 100;
  var range = max - min;
  var stepSize = props.stepSize !== undefined ? props.stepSize : 1;
  var normalizeFactor = 1 / stepSize;
  var hasTicks = props.ticks !== undefined && props.ticks !== false;
  var interactiveTrack = props.interactiveTrack !== undefined ? props.interactiveTrack : true;
  var stepCount = Math.min(MAX_TICKS, parseInt(range / stepSize, 10));
  var defaultValue = props.defaultValue !== undefined ? props.defaultValue : props.value !== undefined ? props.value : 0;
  var focusElementRef = useRef();
  var trackElRef = useRef();
  var controlElRef = useRef();
  var pinElRef = useRef();

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      domElement = _useState2[0],
      setDomElement = _useState2[1];

  var _useState3 = useState(min),
      _useState4 = _slicedToArray(_useState3, 2),
      fraction = _useState4[0],
      setFraction = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      hasFocus = _useState6[0],
      setHasFocus = _useState6[1];

  var _useState7 = useState(),
      _useState8 = _slicedToArray(_useState7, 2),
      value = _useState8[0],
      setValue = _useState8[1];

  var _useState9 = useState(),
      _useState10 = _slicedToArray(_useState9, 2),
      previousValue = _useState10[0],
      setPreviousValue = _useState10[1];

  var _useState11 = useState(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isActive = _useState12[0],
      setIsActive = _useState12[1];

  var isDraggingRef = useRef(false);
  var clickOffsetRef = useRef(0);
  var rangeWidthRef = useRef(0);
  var rangeOffsetRef = useRef(0);
  var controlWidthRef = useRef(0);

  var updatePinPosition = function updatePinPosition() {
    if (controlElRef.current && pinElRef.current) {
      var left = fraction * rangeWidthRef.current;
      pinElRef.current.style.left = left + "px";
    }
  };

  var generateTickMarks = function generateTickMarks(h, stepCount, stepSize, value) {
    var items = [];
    var stepWithValue = value / stepSize;
    var s = 0;

    while (s < stepCount + 1) {
      items.push(h("div", {
        className: s <= stepWithValue ? [classes.tick, classes.tickValue].join(" ") : classes.tick,
        key: "tick-".concat(s)
      }));
      s++;
    }

    return items;
  };

  var readRangeData = function readRangeData() {
    if (controlElRef.current && polythene_core__WEBPACK_IMPORTED_MODULE_0__["isClient"]) {
      // range is from the far left to the far right minus the thumb width (max x is at the left side of the thumb)
      controlWidthRef.current = parseFloat(Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["getStyle"])({
        element: controlElRef.current,
        prop: "width"
      }));
      rangeWidthRef.current = trackElRef.current.getBoundingClientRect().width - controlWidthRef.current;
      var styles = window.getComputedStyle(trackElRef.current);
      rangeOffsetRef.current = parseFloat(styles.marginLeft);
    }
  };

  var updateClickOffset = function updateClickOffset() {
    var controlOffset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    clickOffsetRef.current = trackElRef.current.getBoundingClientRect().left - (rangeOffsetRef.current - controlWidthRef.current / 2) + controlOffset;
  };

  var initControlEvent = function initControlEvent(e) {
    var controlPos = controlElRef.current.getBoundingClientRect().left;
    var eventPos = positionFromEvent(e);
    var controlOffset = eventPos - controlPos - controlWidthRef.current / 2;
    updateClickOffset(controlOffset);
  };

  var initTrackEvent = function initTrackEvent() {
    return updateClickOffset(0);
  };

  var handlePosEvent = function handlePosEvent(e) {
    var pos = positionFromEvent(e) - clickOffsetRef.current;
    var newValue = min + (pos - rangeOffsetRef.current) / rangeWidthRef.current * range;
    updateValue(newValue);
  };

  var startDrag = function startDrag(e) {
    if (isDraggingRef.current) return;
    e.preventDefault();
    isDraggingRef.current = true;
    setIsActive(true);
    deFocus();

    var drag = function drag(e) {
      if (!isDraggingRef.current) return;
      handlePosEvent(e);
    };

    var endDrag = function endDrag() {
      if (!isDraggingRef.current) return;
      deFocus();

      if (polythene_core__WEBPACK_IMPORTED_MODULE_0__["isClient"]) {
        polythene_core__WEBPACK_IMPORTED_MODULE_0__["pointerMoveEvent"].forEach(function (evt) {
          return window.removeEventListener(evt, drag);
        });
        polythene_core__WEBPACK_IMPORTED_MODULE_0__["pointerEndDownEvent"].forEach(function (evt) {
          return window.removeEventListener(evt, endDrag);
        });
      }

      isDraggingRef.current = false;
      setIsActive(false);
    };

    if (polythene_core__WEBPACK_IMPORTED_MODULE_0__["isClient"]) {
      polythene_core__WEBPACK_IMPORTED_MODULE_0__["pointerMoveEvent"].forEach(function (evt) {
        return window.addEventListener(evt, drag);
      });
      polythene_core__WEBPACK_IMPORTED_MODULE_0__["pointerEndDownEvent"].forEach(function (evt) {
        return window.addEventListener(evt, endDrag);
      });
    }

    readRangeData();
  };

  var handleNewValue = function handleNewValue(_ref2) {
    var value = _ref2.value,
        _ref2$shouldNotify = _ref2.shouldNotify,
        shouldNotify = _ref2$shouldNotify === void 0 ? false : _ref2$shouldNotify;
    if (value < min) value = min;
    if (value > max) value = max;
    var newValue = stepSize ? Math.round(value * normalizeFactor) / normalizeFactor : value;
    setFraction((newValue - min) / range);
    setPreviousValue(newValue);
    setValue(newValue);

    if (shouldNotify && props.onChange) {
      props.onChange({
        value: newValue
      });
    }
  };

  var updateValue = function updateValue(value) {
    handleNewValue({
      value: value,
      shouldNotify: true
    });
  };

  var increment = function increment(useLargeStep) {
    return updateValue(value + (useLargeStep ? 10 : 1) * (stepSize || 1));
  };

  var decrement = function decrement(useLargeStep) {
    return updateValue(value - (useLargeStep ? 10 : 1) * (stepSize || 1));
  };

  var deFocus = function deFocus() {
    if (focusElementRef.current) {
      focusElementRef.current.blur();
    }

    focusElementRef.current = undefined;
    setHasFocus(false);
  };

  var focus = function focus(element) {
    deFocus();
    focusElementRef.current = element;
    setHasFocus(true);
  };

  useEffect(function () {
    if (!domElement) {
      return;
    }

    trackElRef.current = domElement.querySelector(".".concat(classes.track));
    controlElRef.current = domElement.querySelector(".".concat(classes.control));
    pinElRef.current = domElement.querySelector(".".concat(classes.pin));
    readRangeData();
    handleNewValue({
      value: defaultValue
    });
  }, [domElement]);
  useEffect(function () {
    if (!props.pin) {
      return;
    }

    updatePinPosition();
  }, [value]); // Handle external changes of `value`

  useEffect(function () {
    if (previousValue !== props.value) {
      handleNewValue({
        value: props.value
      });
    }
  }, [props.value]);

  var componentProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props), getRef(function (dom) {
    return dom && !domElement && setDomElement(dom);
  }), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.component, props.disabled ? classes.isDisabled : null, props.pin ? classes.hasPin : null, interactiveTrack ? classes.hasTrack : null, isActive ? classes.isActive : null, hasFocus ? classes.hasFocus : null, fraction === 0 ? classes.isAtMin : null, hasTicks ? classes.hasTicks : null, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a["class"]]].join(" ")
  });

  var onStartTrack = function onStartTrack(e) {
    e.preventDefault();

    if (isDraggingRef.current) {
      return;
    }

    readRangeData();
    initTrackEvent();
    handlePosEvent(e);
    startDrag(e);
  };

  var onInitDrag = function onInitDrag(e) {
    e.preventDefault();
    readRangeData();
    initControlEvent(e);
    startDrag(e);
  };

  var flexValueCss = fraction + " 1 0%";
  var flexRestValue = 1 - fraction;
  var flexRestCss = flexRestValue + " 1 0%";
  var content = [props.before, h("div", _extends({}, {
    className: classes.track
  }, interactiveTrack && !props.disabled && polythene_core__WEBPACK_IMPORTED_MODULE_0__["pointerStartDownEvent"].reduce(function (acc, evt) {
    return acc[a["on".concat(evt)]] = onStartTrack, acc;
  }, {})), [h("div", {
    className: classes.trackPart + " " + classes.trackPartValue,
    key: "trackPartValue",
    style: {
      flex: flexValueCss,
      msFlex: flexValueCss,
      WebkitFlex: flexValueCss
    }
  }, h("div", {
    className: classes.trackBar
  }, h("div", {
    className: classes.trackBarValue
  }))), h("div", _extends({}, {
    className: classes.control,
    key: "control"
  }, props.disabled ? {
    disabled: true
  } : (_ref3 = {}, _defineProperty(_ref3, a.tabindex, props[a.tabindex] || 0), _defineProperty(_ref3, a.onfocus, function () {
    return focus(controlElRef.current);
  }), _defineProperty(_ref3, a.onblur, function () {
    return deFocus();
  }), _defineProperty(_ref3, a.onkeydown, function (e) {
    if (e.key !== "Tab") {
      e.preventDefault();
    }

    if (e.key === "Escape" || e.key === "Esc") {
      controlElRef.current.blur(e);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowDown" || e.key === "Left" || e.key === "Down") {
      decrement(!!e.shiftKey);
    } else if (e.key === "ArrowRight" || e.key === "ArrowUp" || e.key === "Right" || e.key === "Up") {
      increment(!!e.shiftKey);
    } else if (e.key === "Home") {
      updateValue(min);
    } else if (e.key === "End") {
      updateValue(max);
    } else if (e.key === "PageDown") {
      decrement(true);
    } else if (e.key === "PageUp") {
      increment(true);
    }

    readRangeData(); // updatePinPosition();
  }), _ref3), !props.disabled && polythene_core__WEBPACK_IMPORTED_MODULE_0__["pointerStartDownEvent"].reduce(function (acc, evt) {
    return acc[a["on".concat(evt)]] = onInitDrag, acc;
  }, {}), props.events ? props.events : null, hasTicks ? {
    step: stepCount
  } : null), props.icon ? h("div", {
    className: classes.thumb,
    key: "icon"
  }, props.icon) : null), h("div", {
    className: classes.trackPart + " " + classes.trackPartRest,
    key: "trackPartRest",
    style: {
      flex: flexRestCss,
      msFlex: flexRestCss,
      WebkitFlex: flexRestCss,
      maxWidth: flexRestValue * 100 + "%" // for IE Edge

    }
  }, h("div", {
    className: classes.trackBar
  }, h("div", {
    className: classes.trackBarValue
  }))), hasTicks && !props.disabled ? h("div", {
    className: classes.ticks,
    key: "ticks"
  }, generateTickMarks(h, stepCount, stepSize, value)) : null, hasTicks && props.pin && !props.disabled ? h("div", {
    className: classes.pin,
    key: "pin",
    value: value
  }) : null]), props.after];
  return h(props.element || "div", componentProps, content);
};




/***/ }),

/***/ "../node_modules/polythene-core-snackbar/dist/polythene-core-snackbar.mjs":
/*!********************************************************************************!*\
  !*** ../node_modules/polythene-core-snackbar/dist/polythene-core-snackbar.mjs ***!
  \********************************************************************************/
/*! exports provided: _Snackbar, transitions */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitions", function() { return transitions; });
/* harmony import */ var polythene_core_notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-notification */ "../node_modules/polythene-core-notification/dist/polythene-core-notification.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_Snackbar", function() { return polythene_core_notification__WEBPACK_IMPORTED_MODULE_0__["_Notification"]; });



var DEFAULT_DURATION = 0.4;

var show = function show(_ref) {
  var containerEl = _ref.containerEl,
      el = _ref.el,
      duration = _ref.duration,
      delay = _ref.delay;
  return {
    el: containerEl,
    duration: duration || DEFAULT_DURATION,
    delay: delay || 0,
    before: function before() {
      el.style.display = "block";
      var height = el.getBoundingClientRect().height;
      containerEl.style.transform = "translate3d(0, ".concat(height, "px, 0)");
    },
    transition: function transition() {
      return containerEl.style.transform = "translate3d(0, 0px, 0)";
    }
  };
};

var hide = function hide(_ref2) {
  var containerEl = _ref2.containerEl,
      el = _ref2.el,
      duration = _ref2.duration,
      delay = _ref2.delay;
  return {
    el: containerEl,
    duration: duration || DEFAULT_DURATION,
    delay: delay || 0,
    transition: function transition() {
      var height = el.getBoundingClientRect().height;
      containerEl.style.transform = "translate3d(0, ".concat(height, "px, 0)");
    },
    // reset to original position to counter the removal of the snackbar instance
    after: function after() {
      // prevent a "bounce back"
      el.style.display = "none";
      containerEl.style.transitionDuration = "0ms";
      containerEl.style.transform = "translate3d(0, 0px, 0)";
    }
  };
};

var transitions = {
  show: show,
  hide: hide
};




/***/ }),

/***/ "../node_modules/polythene-core-svg/dist/polythene-core-svg.mjs":
/*!**********************************************************************!*\
  !*** ../node_modules/polythene-core-svg/dist/polythene-core-svg.mjs ***!
  \**********************************************************************/
/*! exports provided: _SVG */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_SVG", function() { return _SVG; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../node_modules/polythene-core/dist/polythene-core.mjs");


function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var classes = {
  component: "pe-svg"
};

var _SVG = function _SVG(_ref) {
  var h = _ref.h,
      a = _ref.a,
      useEffect = _ref.useEffect,
      useState = _ref.useState,
      getRef = _ref.getRef,
      props = _objectWithoutProperties(_ref, ["h", "a", "useEffect", "useState", "getRef"]);

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      domElement = _useState2[0],
      setDomElement = _useState2[1];

  useEffect(function () {
    if (!domElement) {
      return;
    } // Prevent that SVG gets keyboard focus


    var svgElement = domElement.querySelector("svg");

    if (svgElement) {
      svgElement.setAttribute("focusable", "false");
    }
  }, [domElement]);

  var componentProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props), getRef(function (dom) {
    return dom && !domElement && (setDomElement(dom), props.getRef && props.getRef(dom));
  }), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.component, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a["class"]]].join(" ")
  });

  var content = [props.before, props.content ? props.content : props.children, props.after];
  return h(props.element || "div", componentProps, content);
};




/***/ }),

/***/ "../node_modules/polythene-core-switch/dist/polythene-core-switch.mjs":
/*!****************************************************************************!*\
  !*** ../node_modules/polythene-core-switch/dist/polythene-core-switch.mjs ***!
  \****************************************************************************/
/*! exports provided: _Switch, _ViewControl */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Switch", function() { return _Switch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_ViewControl", function() { return _ViewControl; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var classes = {
  component: "pe-switch-control",
  // elements
  knob: "pe-switch-control__knob",
  thumb: "pe-switch-control__thumb",
  track: "pe-switch-control__track"
};

var _Switch = function _Switch(_ref) {
  var h = _ref.h,
      SelectionControl = _ref.SelectionControl,
      props = _objectWithoutProperties(_ref, ["h", "SelectionControl"]);

  var componentProps = _extends({}, props, {
    selectable: props.selectable || function () {
      return true;
    },
    // default: always selectable, regardless of the checked state
    instanceClass: classes.component,
    type: "checkbox"
  });

  return h(SelectionControl, componentProps);
};

var _ViewControl = function _ViewControl(_ref) {
  var h = _ref.h,
      a = _ref.a,
      IconButton = _ref.IconButton,
      Shadow = _ref.Shadow,
      props = _objectWithoutProperties(_ref, ["h", "a", "IconButton", "Shadow"]);

  var element = props.element || "div";
  var shadowDepthOff = props.shadowDepthOff !== undefined ? props.shadowDepthOff : props.zOff !== undefined ? props.zOff // deprecated
  : 1;
  var shadowDepthOn = props.shadowDepthOn !== undefined ? props.shadowDepthOn : props.zOn !== undefined ? props.zOn // deprecated
  : 2;
  var shadowDepth = props.checked ? shadowDepthOn : shadowDepthOff;
  var raised = props.raised !== undefined ? props.raised : true;
  return h(element, null, [h("div", {
    className: classes.track,
    key: "track"
  }), h(IconButton, _extends({}, {
    className: classes.thumb,
    key: "button",
    content: h("div", {
      className: classes.knob
    }, [props.icon ? props.icon : null, raised ? h(Shadow, {
      shadowDepth: shadowDepth,
      animated: true
    }) : null]),
    style: props.style,
    disabled: props.disabled,
    events: props.events,
    ink: props.ink || false,
    inactive: props.inactive
  }, props.iconButton))]);
};




/***/ }),

/***/ "../node_modules/polythene-core-tabs/dist/polythene-core-tabs.mjs":
/*!************************************************************************!*\
  !*** ../node_modules/polythene-core-tabs/dist/polythene-core-tabs.mjs ***!
  \************************************************************************/
/*! exports provided: _ScrollButton, _Tab, _Tabs */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_ScrollButton", function() { return _ScrollButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Tab", function() { return _Tab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Tabs", function() { return _Tabs; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../node_modules/polythene-core/dist/polythene-core.mjs");
/* harmony import */ var polythene_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-utilities */ "../node_modules/polythene-utilities/dist/polythene-utilities.mjs");



function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var buttonClasses = {
  component: "pe-text-button",
  "super": "pe-button",
  row: "pe-button-row",
  // elements      
  content: "pe-button__content",
  label: "pe-button__label",
  textLabel: "pe-button__text-label",
  wash: "pe-button__wash",
  washColor: "pe-button__wash-color",
  dropdown: "pe-button__dropdown",
  // states      
  border: "pe-button--border",
  contained: "pe-button--contained",
  disabled: "pe-button--disabled",
  dropdownClosed: "pe-button--dropdown-closed",
  dropdownOpen: "pe-button--dropdown-open",
  extraWide: "pe-button--extra-wide",
  hasDropdown: "pe-button--dropdown",
  highLabel: "pe-button--high-label",
  inactive: "pe-button--inactive",
  raised: "pe-button--raised",
  selected: "pe-button--selected",
  separatorAtStart: "pe-button--separator-start",
  hasHover: "pe-button--has-hover"
};

var classes = {
  component: "pe-tabs",
  // elements
  indicator: "pe-tabs__indicator",
  scrollButton: "pe-tabs__scroll-button",
  scrollButtonAtEnd: "pe-tabs__scroll-button-end",
  scrollButtonAtStart: "pe-tabs__scroll-button-start",
  tab: "pe-tab",
  tabContent: "pe-tabs__tab-content",
  tabRow: "pe-tabs__row",
  // states
  activeSelectable: "pe-tabs__active--selectable",
  isAtEnd: "pe-tabs--end",
  isAtStart: "pe-tabs--start",
  isAutofit: "pe-tabs--autofit",
  isMenu: "pe-tabs--menu",
  scrollable: "pe-tabs--scrollable",
  compactTabs: "pe-tabs--compact",
  tabHasIcon: "pe-tabs__tab--icon",
  tabRowCentered: "pe-tabs__row--centered",
  tabRowIndent: "pe-tabs__row--indent",
  // lookup
  label: buttonClasses.label
};

var SCROLL_SPEED = 600; // px per second

var SCROLL_DELAY = .15; // seconds

var SCROLL_MIN_DURATION = .5; // seconds

var INDICATOR_SLIDE_MIN_DURATION = .25; // seconds

var getButtons = function getButtons(props) {
  return props.content ? props.content : props.tabs ? props.tabs : props.children || [];
};

var getIndex = function getIndex(props) {
  var buttons = getButtons(props);
  var selectedIndex = Array.isArray(buttons) ? buttons.reduce(function (acc, tab, index) {
    return acc === undefined && !tab.disabled && tab.selected ? index : acc;
  }, undefined) : undefined;

  if (selectedIndex !== undefined) {
    return selectedIndex;
  }

  var attrsSelectedTabIndex = props.selectedTabIndex !== undefined ? props.selectedTabIndex : props.selectedTab !== undefined // deprecated
  ? props.selectedTab : undefined;
  return attrsSelectedTabIndex !== undefined ? attrsSelectedTabIndex : 0;
};

var scrollButtonGetNewIndex = function scrollButtonGetNewIndex(index, tabs) {
  var minTabIndex = 0;
  var maxTabIndex = tabs.length - 1;
  return {
    backward: Math.max(index - 1, minTabIndex),
    forward: Math.min(index + 1, maxTabIndex)
  };
};

var sortByLargestWidth = function sortByLargestWidth(a, b) {
  return a < b ? 1 : a > b ? -1 : 0;
};

var _Tabs = function _Tabs(_ref) {
  var h = _ref.h,
      a = _ref.a,
      getRef = _ref.getRef,
      useState = _ref.useState,
      useEffect = _ref.useEffect,
      ScrollButton = _ref.ScrollButton,
      Tab = _ref.Tab,
      props = _objectWithoutProperties(_ref, ["h", "a", "getRef", "useState", "useEffect", "ScrollButton", "Tab"]);

  var buttons = getButtons(props);

  if (buttons.length === 0) {
    throw new Error("No tabs specified");
  }

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      domElement = _useState2[0],
      setDomElement = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      RTL = _useState4[0],
      setRTL = _useState4[1];

  var tabIndex = getIndex(props) || 0;

  var _useState5 = useState(tabIndex),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedTabIndex = _useState6[0],
      setSelectedTabIndex = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isScrollButtonAtStart = _useState8[0],
      setIsScrollButtonAtStart = _useState8[1];

  var _useState9 = useState(false),
      _useState10 = _slicedToArray(_useState9, 2),
      isScrollButtonAtEnd = _useState10[0],
      setIsScrollButtonAtEnd = _useState10[1];

  var _useState11 = useState([]),
      _useState12 = _slicedToArray(_useState11, 2),
      tabs = _useState12[0],
      setTabs = _useState12[1];

  var _useState13 = useState(),
      _useState14 = _slicedToArray(_useState13, 2),
      previousSelectedTabIndex = _useState14[0],
      setPreviousSelectedTabIndex = _useState14[1];

  var managesScroll = props.scrollable && !polythene_core__WEBPACK_IMPORTED_MODULE_0__["isTouch"];
  var tabRowElement = domElement && domElement.querySelector(".".concat(classes.tabRow));
  var tabIndicatorElement = domElement && domElement.querySelector(".".concat(classes.indicator));
  var isTabsInited = !!domElement && tabs.length === buttons.length;
  useEffect(function () {
    if (!tabRowElement) return;

    var tabRowTabs = _toConsumableArray(tabRowElement.querySelectorAll("[data-index]")).map(function (dom) {
      var index = parseInt(dom.getAttribute("data-index"), 10);
      return {
        dom: dom,
        options: buttons[index]
      };
    });

    if (tabRowTabs) {
      setTabs(tabRowTabs);
    }
  }, [tabRowElement]);

  var handleScrollButtonClick = function handleScrollButtonClick(e, direction) {
    e.stopPropagation();
    e.preventDefault();
    var newIndex = scrollButtonGetNewIndex(selectedTabIndex, tabs)[direction];

    if (newIndex !== selectedTabIndex) {
      updateWithTabIndex({
        index: newIndex,
        animate: true
      });
    } else {
      scrollToTab(newIndex);
    }
  };

  var updateScrollButtons = function updateScrollButtons() {
    var scrollLeft = tabRowElement.scrollLeft;
    var minTabIndex = 0;
    var maxTabIndex = tabs.length - 1;
    var isAtStart = tabRowElement.scrollLeft === 0 && selectedTabIndex === minTabIndex;
    var isAtEnd = scrollLeft >= tabRowElement.scrollWidth - domElement.getBoundingClientRect().width - 1 && selectedTabIndex === maxTabIndex;
    setIsScrollButtonAtStart(isAtStart);
    setIsScrollButtonAtEnd(isAtEnd);
  };

  var updateIndicator = function updateIndicator(_ref2) {
    var selectedTabElement = _ref2.selectedTabElement,
        animate = _ref2.animate;

    if (!tabIndicatorElement) {
      return;
    }

    var parentRect = domElement.getBoundingClientRect();
    var rect = selectedTabElement.getBoundingClientRect();
    var buttonSize = managesScroll ? rect.height : 0;
    var translateX = RTL ? rect.right - parentRect.right + tabRowElement.scrollLeft + buttonSize : rect.left - parentRect.left + tabRowElement.scrollLeft - buttonSize;
    var scaleX = 1 / (parentRect.width - 2 * buttonSize) * rect.width;
    var transformCmd = "translate(".concat(translateX, "px, 0) scaleX(").concat(scaleX, ")");
    var duration = animate ? INDICATOR_SLIDE_MIN_DURATION : 0;
    var style = tabIndicatorElement.style;
    style["transition-duration"] = duration + "s";
    style.opacity = 1;
    style.transform = transformCmd;
  };

  var scrollToTab = function scrollToTab(tabIndex) {
    var scroller = tabRowElement; // Scroll to position of selected tab

    var tabLeft = tabs.slice(0, tabIndex).reduce(function (totalWidth, tabData) {
      return totalWidth + tabData.dom.getBoundingClientRect().width;
    }, 0); // Tabs at the far right will not fully move to the left
    // because the scrollable row will stick to the right 
    // to get the max scroll left, we subtract the visible viewport from the scroll width

    var scrollerWidth = scroller.getBoundingClientRect().width; // frame width

    var scrollingWidth = scroller.scrollWidth;
    var maxScroll = scrollingWidth - scrollerWidth;
    var left = RTL ? -1 * Math.min(tabLeft, maxScroll) : Math.min(tabLeft, maxScroll);
    var currentLeft = scroller.scrollLeft;

    if (currentLeft !== left) {
      var duration = Math.abs(currentLeft - left) / SCROLL_SPEED;
      var delaySeconds = SCROLL_DELAY;
      setTimeout(function () {
        Object(polythene_utilities__WEBPACK_IMPORTED_MODULE_1__["scrollTo"])({
          element: scroller,
          to: left,
          duration: Math.max(SCROLL_MIN_DURATION, duration),
          direction: "horizontal"
        }).then(updateScrollButtons);
      }, delaySeconds * 1000);
    }
  };

  var updateWithTabIndex = function updateWithTabIndex(_ref3) {
    var index = _ref3.index,
        animate = _ref3.animate;

    if (!tabs.length) {
      return;
    }

    setSelectedTabIndex(index);
    var selectedTabElement = tabs[index].dom;

    if (selectedTabElement) {
      updateIndicator({
        selectedTabElement: selectedTabElement,
        animate: animate
      });
    }

    if (managesScroll) {
      updateScrollButtons();
    }

    scrollToTab(index);

    if (props.onChange) {
      props.onChange({
        index: index,
        options: tabs[index].options,
        el: selectedTabElement
      });
    }
  };

  useEffect(function () {
    if (!isTabsInited) {
      return;
    }

    setRTL(Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["isRTL"])({
      element: domElement
    }));

    var redrawLargestWidth = function redrawLargestWidth() {
      if (props.largestWidth) {
        var widths = tabs.map(function (_ref4) {
          var dom = _ref4.dom;
          return dom.getBoundingClientRect().width;
        });
        var largest = widths.sort(sortByLargestWidth)[0];
        tabs.forEach(function (_ref5) {
          var dom = _ref5.dom;
          return dom.style.width = largest + "px";
        });
      }
    };

    var redraw = function redraw() {
      return redrawLargestWidth(), updateWithTabIndex({
        index: selectedTabIndex,
        animate: false
      });
    };

    var handleFontEvent = function handleFontEvent(_ref6) {
      var name = _ref6.name;
      return name === "active" || name === "inactive" ? redraw() : null;
    };

    Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["subscribe"])("resize", redraw);
    Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["subscribe"])("webfontloader", handleFontEvent);
    redraw();
    return function () {
      Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["unsubscribe"])("resize", redraw);
      Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["unsubscribe"])("webfontloader", handleFontEvent);
    };
  }, [isTabsInited]);
  var autofit = props.scrollable || props.centered ? false : props.autofit ? true : false; // Keep selected tab up to date

  if (tabIndex !== undefined && previousSelectedTabIndex !== tabIndex) {
    updateWithTabIndex({
      index: tabIndex,
      animate: true
    });
  }

  if (previousSelectedTabIndex !== tabIndex) {
    setPreviousSelectedTabIndex(tabIndex);
  }

  var componentProps = _extends({}, getRef(function (dom) {
    return dom && !domElement && setDomElement(dom);
  }), Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.component, props.scrollable ? classes.scrollable : null, isScrollButtonAtStart ? classes.isAtStart : null, isScrollButtonAtEnd ? classes.isAtEnd : null, props.activeSelected ? classes.activeSelectable : null, autofit ? classes.isAutofit : null, props.compact ? classes.compactTabs : null, props.menu ? classes.isMenu : null, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a["class"]]].join(" ")
  });

  var tabRow = buttons.map(function () {
    var buttonOpts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var index = arguments.length > 1 ? arguments[1] : undefined;

    var buttonOptsCombined = _extends({}, buttonOpts, {
      // These options can be overridden by `all`
      selected: index === selectedTabIndex,
      animateOnTap: props.animateOnTap !== false ? true : false
    }, props.all, {
      // Internal options, should not get overridden
      index: index,
      key: buttonOpts.key || "tab-".concat(index),
      onSelect: function onSelect() {
        return updateWithTabIndex({
          index: index,
          animate: props.noIndicatorSlide ? false : true
        });
      }
    });

    return h(Tab, buttonOptsCombined);
  });
  var scrollButtonAtStart = null,
      scrollButtonAtEnd = null;

  if (props.scrollable) {
    scrollButtonAtStart = h(ScrollButton, _extends({}, {
      key: "backward",
      icon: props.scrollIconBackward,
      className: classes.scrollButtonAtStart,
      position: "start",
      events: _defineProperty({}, a.onclick, function (e) {
        return handleScrollButtonClick(e, "backward");
      }),
      isRTL: RTL
    }));
    scrollButtonAtEnd = h(ScrollButton, _extends({}, {
      key: "forward",
      icon: props.scrollIconForward,
      className: classes.scrollButtonAtEnd,
      position: "end",
      events: _defineProperty({}, a.onclick, function (e) {
        return handleScrollButtonClick(e, "forward");
      }),
      isRTL: RTL
    }));
  }

  var tabIndicator = props.hideIndicator ? null : h("div", {
    key: "indicator",
    className: classes.indicator
  });
  return h("div", componentProps, [props.before, scrollButtonAtStart, h("div", {
    key: "tabrow",
    className: [classes.tabRow, props.centered ? classes.tabRowCentered : null, props.scrollable ? classes.tabRowIndent : null].join(" ")
  }, [tabRow, tabIndicator]), scrollButtonAtEnd, props.after]);
};

var _Tab = function _Tab(_ref) {
  var h = _ref.h,
      a = _ref.a,
      Button = _ref.Button,
      Icon = _ref.Icon,
      props = _objectWithoutProperties(_ref, ["h", "a", "Button", "Icon"]);

  // Let internal onclick function co-exist with passed button option
  var events = props.events || {};

  events[a.onclick] = events[a.onclick] || function () {};

  var componentProps = _extends({}, props, props.testId && {
    "data-test-id": props.testId
  }, {
    "data-index": props.index,
    content: h("div", {
      className: classes.tabContent
    }, [props.icon ? h(Icon, props.icon) : null, props.label ? h("div", {
      className: classes.label
    }, h("span", props.label)) : null]),
    className: [classes.tab, props.icon && props.label ? classes.tabHasIcon : null, props.className || props[a["class"]]].join(" "),
    selected: props.selected,
    wash: false,
    ripple: true,
    events: _extends({}, events, _defineProperty({}, a.onclick, function (e) {
      props.onSelect();
      events[a.onclick](e);
    }))
  });

  var content = props.children;
  return h(Button, componentProps, content);
};

var arrowBackward = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/></svg>";
var arrowForward = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>";
var _ScrollButton = function _ScrollButton(_ref) {
  var h = _ref.h,
      a = _ref.a,
      IconButton = _ref.IconButton,
      props = _objectWithoutProperties(_ref, ["h", "a", "IconButton"]);

  var icon = props.position === "start" ? props.icon || {
    svg: {
      content: h.trust(props.isRTL ? arrowForward : arrowBackward)
    }
  } : props.icon || {
    svg: {
      content: h.trust(props.isRTL ? arrowBackward : arrowForward)
    }
  };

  var componentProps = _extends({}, {
    className: [classes.scrollButton, props.className || props[a["class"]]].join(" "),
    icon: icon,
    ripple: {
      center: true
    },
    events: props.events
  });

  return h(IconButton, componentProps);
};




/***/ }),

/***/ "../node_modules/polythene-core-textfield/dist/polythene-core-textfield.mjs":
/*!**********************************************************************************!*\
  !*** ../node_modules/polythene-core-textfield/dist/polythene-core-textfield.mjs ***!
  \**********************************************************************************/
/*! exports provided: _TextField */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_TextField", function() { return _TextField; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../node_modules/polythene-core/dist/polythene-core.mjs");


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var classes = {
  component: "pe-textfield",
  // elements
  counter: "pe-textfield__counter",
  error: "pe-textfield__error",
  errorPlaceholder: "pe-textfield__error-placeholder",
  focusHelp: "pe-textfield__help-focus",
  help: "pe-textfield__help",
  input: "pe-textfield__input",
  inputArea: "pe-textfield__input-area",
  label: "pe-textfield__label",
  optionalIndicator: "pe-textfield__optional-indicator",
  requiredIndicator: "pe-textfield__required-indicator",
  // states
  hasCounter: "pe-textfield--counter",
  hasFloatingLabel: "pe-textfield--floating-label",
  hasFullWidth: "pe-textfield--full-width",
  hideClear: "pe-textfield--hide-clear",
  hideSpinner: "pe-textfield--hide-spinner",
  hideValidation: "pe-textfield--hide-validation",
  isDense: "pe-textfield--dense",
  isRequired: "pe-textfield--required",
  stateDirty: "pe-textfield--dirty",
  stateDisabled: "pe-textfield--disabled",
  stateFocused: "pe-textfield--focused",
  stateInvalid: "pe-textfield--invalid",
  stateReadonly: "pe-textfield--readonly"
};

var DEFAULT_VALID_STATE = {
  invalid: false,
  message: undefined
};

var ignoreEvent = function ignoreEvent(props, name) {
  return props.ignoreEvents && props.ignoreEvents.indexOf(name) !== -1;
};

var _TextField = function _TextField(_ref) {
  var h = _ref.h,
      a = _ref.a,
      useState = _ref.useState,
      useEffect = _ref.useEffect,
      useRef = _ref.useRef,
      getRef = _ref.getRef,
      props = _objectWithoutProperties(_ref, ["h", "a", "useState", "useEffect", "useRef", "getRef"]);

  var defaultValue = props.defaultValue !== undefined && props.defaultValue !== null ? props.defaultValue.toString() : props.value !== undefined && props.value !== null ? props.value.toString() : "";

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      domElement = _useState2[0],
      setDomElement = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isInvalid = _useState4[0],
      setIsInvalid = _useState4[1];

  var _useState5 = useState(defaultValue),
      _useState6 = _slicedToArray(_useState5, 2),
      value = _useState6[0],
      setValue = _useState6[1];

  var inputElRef = useRef();
  var previousValueRef = useRef();
  var previousStatusRef = useRef();
  var isDirtyRef = useRef(defaultValue !== "");
  var hasFocusRef = useRef(false);
  var isTouchedRef = useRef(false);
  var errorRef = useRef(props.error);
  var inputType = props.multiLine ? "textarea" : "input";
  var showErrorPlaceholder = !!(props.valid !== undefined || props.validate || props.min || props.max || props[a.minlength] || props[a.maxlength] || props.required || props.pattern);

  var handleStateUpdate = function handleStateUpdate() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        type = _ref2.type,
        focus = _ref2.focus,
        value = _ref2.value;

    if (!inputElRef.current) {
      return;
    }

    if (value !== undefined) {
      inputElRef.current.value = value;
    }

    if (focus !== undefined) {
      hasFocusRef.current = focus;

      if (focus) {
        inputElRef.current.focus();
      } else {
        inputElRef.current.blur();
      }
    }

    if (type === "input" && (props.validateOnInput || props.counter)) {
      isTouchedRef.current = inputElRef.current.value !== defaultValue;
    }

    if (type !== "input") {
      isTouchedRef.current = inputElRef.current.value !== defaultValue;
    }

    if (type === "onblur") {
      isTouchedRef.current = true;
    }

    isDirtyRef.current = inputElRef.current.value !== "";
    checkValidity();
    notifyState();

    if (previousValueRef.current !== inputElRef.current.value) {
      setValue(inputElRef.current.value); // force update
    }
  };

  var validateCustom = function validateCustom() {
    if (!inputElRef.current) {
      return DEFAULT_VALID_STATE;
    }

    var validState = props.validate(inputElRef.current.value);
    return {
      invalid: validState && !validState.valid,
      message: validState && validState.error
    };
  };

  var validateCounter = function validateCounter() {
    return {
      invalid: inputElRef.current.value.length > props.counter,
      message: props.error
    };
  };

  var validateHTML = function validateHTML() {
    return {
      invalid: !inputElRef.current.checkValidity(),
      message: props.error
    };
  };

  var getValidStatus = function getValidStatus() {
    var status = DEFAULT_VALID_STATE; // props.validateResetOnClear: reset validation when field is cleared

    if (isTouchedRef.current && isInvalid && inputElRef.current.value.length === 0 && props.validateResetOnClear) {
      isTouchedRef.current = false;
      setIsInvalid(false);
      errorRef.current = undefined;
    }

    if (props.counter) {
      status = validateCounter();
    }

    if (!status.invalid && inputElRef.current.checkValidity) {
      status = validateHTML();
    }

    if (!status.invalid && props.validate) {
      status = validateCustom();
    }

    return status;
  };

  var checkValidity = function checkValidity() {
    // default
    var status = props.valid !== undefined ? {
      invalid: !props.valid,
      message: props.error
    } : !isTouchedRef.current && !props.validateAtStart ? DEFAULT_VALID_STATE : getValidStatus();
    var previousInvalid = isInvalid;
    errorRef.current = status.message;

    if (status.invalid !== previousInvalid) {
      setIsInvalid(status.invalid);
    }

    if (!status.invalid) {
      errorRef.current = undefined;
    }
  };

  var notifyState = function notifyState() {
    if (props.onChange) {
      var validStatus = getValidStatus();
      var status = {
        focus: hasFocusRef.current,
        dirty: isDirtyRef.current,
        invalid: validStatus.invalid,
        error: validStatus.error,
        value: inputElRef.current.value
      };

      if (JSON.stringify(status) !== JSON.stringify(previousStatusRef.current)) {
        props.onChange(_objectSpread({}, status, {
          el: inputElRef.current,
          setInputState: function setInputState(newState) {
            var hasNewValue = newState.value !== undefined && newState.value !== inputElRef.current.value;
            var hasNewFocus = newState.focus !== undefined && newState.focus !== hasFocusRef.current;

            if (hasNewValue || hasNewFocus) {
              handleStateUpdate(newState);
            }
          }
        }));
        previousStatusRef.current = status;
      }
    }
  };

  useEffect(function () {
    if (!domElement) {
      return;
    }

    inputElRef.current = domElement.querySelector(inputType);
    inputElRef.current.value = defaultValue;
    handleStateUpdate();
    checkValidity(); // handle `validateAtStart`

    notifyState();
  }, [domElement]); // Handle value updates

  useEffect(function () {
    if (!inputElRef.current) {
      return;
    }

    var value = props.value !== undefined && props.value !== null ? props.value : inputElRef.current ? inputElRef.current.value : previousValueRef.current;
    var valueStr = value === undefined || value === null ? "" : value.toString();

    if (inputElRef.current && previousValueRef.current !== valueStr) {
      inputElRef.current.value = valueStr;
      previousValueRef.current = valueStr;
      handleStateUpdate({
        type: "input"
      });
    }
  }, [inputElRef.current, props.value]); // Handle error state updates

  useEffect(function () {
    if (!inputElRef.current) {
      return;
    }

    checkValidity();
    notifyState();
  }, [props, inputElRef.current && inputElRef.current.value]);

  var componentProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props), props.testId && {
    "data-test-id": props.testId
  }, getRef(function (dom) {
    return dom && !domElement && (setDomElement(dom), props.ref && props.ref(dom));
  }), {
    className: [classes.component, isInvalid ? classes.stateInvalid : "", hasFocusRef.current ? classes.stateFocused : "", isDirtyRef.current ? classes.stateDirty : "", props.floatingLabel ? classes.hasFloatingLabel : "", props.disabled ? classes.stateDisabled : "", props.readonly ? classes.stateReadonly : "", props.dense ? classes.isDense : "", props.required ? classes.isRequired : "", props.fullWidth ? classes.hasFullWidth : "", props.counter ? classes.hasCounter : "", props.hideSpinner !== false && props.hideSpinner !== undefined ? classes.hideSpinner : "", props.hideClear !== false && props.hideClear !== undefined ? classes.hideClear : "", props.hideValidation ? classes.hideValidation : "", props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a["class"]]].join(" ")
  });

  var allProps = _objectSpread({}, props, props.domAttributes);

  var errorMessage = props.error || errorRef.current;
  var type = allProps.multiLine ? null : !allProps.type || allProps.type === "submit" || allProps.type === "search" ? "text" : allProps.type;
  var showError = isInvalid && errorMessage !== undefined;
  var inactive = allProps.disabled || allProps[a.readonly];
  var requiredIndicator = allProps.required && allProps.requiredIndicator !== "" ? h("span", {
    key: "required",
    className: classes.requiredIndicator
  }, allProps.requiredIndicator || "*") : null;
  var optionalIndicator = !allProps.required && allProps.optionalIndicator ? h("span", {
    key: "optional",
    className: classes.optionalIndicator
  }, allProps.optionalIndicator) : null;
  var label = allProps.label ? [allProps.label, requiredIndicator, optionalIndicator] : null;
  var contents = [h("div", {
    className: classes.inputArea,
    key: "input-area"
  }, [label ? h("label", {
    key: "label",
    className: classes.label
  }, label) : null, h(inputType, _extends({}, {
    key: "input",
    className: classes.input,
    disabled: allProps.disabled
  }, type ? {
    type: type
  } : null, allProps.name ? {
    name: allProps.name
  } : null, !ignoreEvent(allProps, a.onclick) ? _defineProperty({}, a.onclick, function () {
    if (inactive) {
      return;
    } // in case the browser does not give the field focus,
    // for instance when the user tapped to the current field off screen


    handleStateUpdate({
      focus: true
    });
  }) : null, !ignoreEvent(allProps, a.onfocus) ? _defineProperty({}, a.onfocus, function () {
    if (inactive) {
      return;
    }

    handleStateUpdate({
      focus: true
    }); // set CSS class manually in case field gets focus but is off screen
    // and no redraw is triggered
    // at the next redraw `hasFocusRef.current` will be read and the focus class be set
    // in the props.class statement

    if (domElement) {
      domElement.classList.add(classes.stateFocused);
    }
  }) : null, !ignoreEvent(allProps, a.onblur) ? _defineProperty({}, a.onblur, function () {
    handleStateUpdate({
      type: "onblur",
      focus: false
    }); // same principle as onfocus

    domElement.classList.remove(classes.stateFocused);
  }) : null, !ignoreEvent(allProps, a.oninput) ? _defineProperty({}, a.oninput, function (e) {
    // default input event
    // may be overwritten by props.events
    handleStateUpdate({
      type: "input"
    });
  }) : null, !ignoreEvent(allProps, a.onkeydown) ? _defineProperty({}, a.onkeydown, function (e) {
    if (e.key === "Enter") {
      isTouchedRef.current = true;
    } else if (e.key === "Escape" || e.key === "Esc") {
      handleStateUpdate({
        focus: false
      });
    }
  }) : null, allProps.events ? allProps.events : null, // NOTE: may overwrite oninput
  allProps.required !== undefined && !!allProps.required ? {
    required: true
  } : null, allProps[a.readonly] !== undefined && !!allProps[a.readonly] ? _defineProperty({}, a.readonly, true) : null, allProps.pattern !== undefined ? {
    pattern: allProps.pattern
  } : null, allProps[a.maxlength] !== undefined ? _defineProperty({}, a.maxlength, allProps[a.maxlength]) : null, allProps[a.minlength] !== undefined ? _defineProperty({}, a.minlength, allProps[a.minlength]) : null, allProps.max !== undefined ? {
    max: allProps.max
  } : null, allProps.min !== undefined ? {
    min: allProps.min
  } : null, allProps[a.autofocus] !== undefined ? _defineProperty({}, a.autofocus, allProps[a.autofocus]) : null, allProps[a.tabindex] !== undefined ? _defineProperty({}, a.tabindex, allProps[a.tabindex]) : null, allProps.rows !== undefined ? {
    rows: allProps.rows
  } : null, allProps.placeholder !== undefined ? {
    placeholder: allProps.placeholder
  } : null, allProps.domAttributes !== undefined ? _objectSpread({}, allProps.domAttributes) : null))]), allProps.counter ? h("div", {
    key: 'counter',
    className: classes.counter
  }, (value.length || 0) + " / " + allProps.counter) : null, allProps.help && !showError ? h("div", {
    key: "help",
    className: [classes.help, allProps.focusHelp ? classes.focusHelp : null].join(" ")
  }, allProps.help) : null, showError ? h("div", {
    key: "error",
    className: classes.error
  }, errorMessage) : showErrorPlaceholder && !allProps.help ? h("div", {
    key: "error-placeholder",
    className: classes.errorPlaceholder
  }) : null];
  var content = [props.before, contents, props.after];
  return h(props.element || "div", componentProps, content);
};




/***/ }),

/***/ "../node_modules/polythene-core-toolbar/dist/polythene-core-toolbar.mjs":
/*!******************************************************************************!*\
  !*** ../node_modules/polythene-core-toolbar/dist/polythene-core-toolbar.mjs ***!
  \******************************************************************************/
/*! exports provided: _Toolbar, _ToolbarTitle */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Toolbar", function() { return _Toolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_ToolbarTitle", function() { return _ToolbarTitle; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../node_modules/polythene-core/dist/polythene-core.mjs");


function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var classes = {
  // Toolbar
  component: "pe-toolbar",
  // states
  compact: "pe-toolbar--compact",
  appBar: "pe-toolbar--app-bar",
  // Toolbar title
  // elements
  title: "pe-toolbar__title",
  // states
  centeredTitle: "pe-toolbar__title--center",
  indentedTitle: "pe-toolbar__title--indent",
  fullbleed: "pe-toolbar--fullbleed",
  border: "pe-toolbar--border"
};

var _Toolbar = function _Toolbar(_ref) {
  var h = _ref.h,
      a = _ref.a,
      Shadow = _ref.Shadow,
      props = _objectWithoutProperties(_ref, ["h", "a", "Shadow"]);

  var componentProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.component, props.compact ? classes.compact : null, props.fullbleed ? classes.fullbleed : null, props.border ? classes.border : null, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a["class"]]].join(" ")
  }, props.events);

  var content = [props.before, props.content || props.children, props.after];
  var shadow = props.shadowDepth !== undefined ? h(Shadow, {
    shadowDepth: props.shadowDepth,
    animated: true,
    key: "shadow"
  }) : null;
  return h(props.element || "div", componentProps, [content, shadow]);
};

var _ToolbarTitle = function _ToolbarTitle(_ref) {
  var h = _ref.h,
      a = _ref.a,
      props = _objectWithoutProperties(_ref, ["h", "a"]);

  var element = props.element ? props.element : props.url ? "a" : "div";

  var componentProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.title, props.indent ? classes.indentedTitle : null, props.center ? classes.centeredTitle : null, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a["class"]]].join(" ")
  }, props.events, props.url);

  var content = props.text ? props.text : props.content ? props.content : props.children;
  return h(element, componentProps, content);
};




/***/ }),

/***/ "../node_modules/polythene-core/dist/polythene-core.mjs":
/*!**************************************************************!*\
  !*** ../node_modules/polythene-core/dist/polythene-core.mjs ***!
  \**************************************************************/
/*! exports provided: Multi, _Conditional, classForSize, deprecation, emit, filterSupportedAttributes, getAnimationEndEvent, getStyle, hide, iconDropdownDown, iconDropdownUp, initialTransitionState, isClient, isRTL, isServer, isTouch, pointerEndDownEvent, pointerEndEvent, pointerMoveEvent, pointerStartDownEvent, pointerStartEvent, show, styleDurationToMs, stylePropCompare, subscribe, throttle, transitionComponent, transitionStateReducer, unpackAttrs, unsubscribe */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Multi", function() { return Multi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Conditional", function() { return _Conditional; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classForSize", function() { return classForSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deprecation", function() { return deprecation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emit", function() { return emit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterSupportedAttributes", function() { return filterSupportedAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAnimationEndEvent", function() { return getAnimationEndEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return hide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iconDropdownDown", function() { return iconDropdownDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iconDropdownUp", function() { return iconDropdownUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialTransitionState", function() { return initialTransitionState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isClient", function() { return isClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRTL", function() { return isRTL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isServer", function() { return isServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTouch", function() { return isTouch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointerEndDownEvent", function() { return pointerEndDownEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointerEndEvent", function() { return pointerEndEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointerMoveEvent", function() { return pointerMoveEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointerStartDownEvent", function() { return pointerStartDownEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointerStartEvent", function() { return pointerStartEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleDurationToMs", function() { return styleDurationToMs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stylePropCompare", function() { return stylePropCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribe", function() { return subscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitionComponent", function() { return transitionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitionStateReducer", function() { return transitionStateReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unpackAttrs", function() { return unpackAttrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsubscribe", function() { return unsubscribe; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

// @ts-check
var modes = {
  hidden: "hidden",
  visible: "visible",
  exposing: "exposing",
  hiding: "hiding"
};
var _Conditional = function _Conditional(_ref) {
  var h = _ref.h,
      useState = _ref.useState,
      useEffect = _ref.useEffect,
      props = _objectWithoutProperties(_ref, ["h", "useState", "useEffect"]);

  var initialMode = props.permanent ? modes.visible : props.permanent || props.show ? modes.visible : modes.hidden;

  var _useState = useState(initialMode),
      _useState2 = _slicedToArray(_useState, 2),
      mode = _useState2[0],
      setMode = _useState2[1];

  useEffect(function () {
    var newMode = mode;

    if (props.permanent) {
      if (mode === modes.visible && props.show) {
        newMode = modes.exposing;
      } else if (mode === modes.exposing && !props.show) {
        newMode = modes.hiding;
      }
    } else {
      // "normal" type
      if (mode === modes.hidden && props.show) {
        newMode = modes.visible;
      } else if (mode === modes.visible && !props.show) {
        newMode = modes.hiding;
      }
    }

    if (newMode !== mode) {
      setMode(newMode);
    }
  }, [props]);
  var placeholder = h("span", {
    className: props.placeholderClassName
  }); // No didHide callback passed: use normal visibility evaluation

  if (!props.didHide) {
    return props.permanent || props.inactive || props.show ? h(props.instance, props) : placeholder;
  }

  var visible = mode !== modes.hidden;
  return visible ? h(props.instance, _objectSpread({}, props, {
    didHide:
    /**
     * @param {any} args
     */
    function didHide(args) {
      return props.didHide(args), setMode(props.permanent ? modes.visible : modes.hidden);
    }
  }, mode === modes.hiding ? {
    show: true,
    hide: true
  } : undefined)) : placeholder;
};

// @ts-check

/**
 * 
 * @param {string} component 
 * @param {object} params
 * @param {string} [params.option]
 * @param {string} [params.newOption]
 * @param {string} [params.newOption]
 * @param {string} [params.newComponent]
 * @param {string} [params.since]
 */
var deprecation = function deprecation(component, _ref) {
  var option = _ref.option,
      newOption = _ref.newOption,
      newComponent = _ref.newComponent,
      since = _ref.since;
  var version = since ? "Since version ".concat(since, ".") : "";
  return option && console.warn("".concat(component, ": option '").concat(option, "' is deprecated and will be removed in later versions. Use '").concat(newOption, "' instead. ").concat(version)), // eslint-disable-line no-console
  newComponent && !newOption && console.warn("".concat(component, ": this component is deprecated and will be removed in later versions. Use component '").concat(newComponent, "' instead. ").concat(version)), // eslint-disable-line no-console
  newComponent && newOption && console.warn("".concat(component, ": this component is deprecated and will be removed in later versions. Use component '").concat(newComponent, "' with option '").concat(newOption, "' instead. ").concat(version)) // eslint-disable-line no-console
  ;
};

// @ts-check

/**
 * Reducer helper function.
 * @param {object} acc 
 * @param {string} p 
 * @returns {object}
 */
var r = function r(acc, p) {
  return acc[p] = 1, acc;
};
/**
 * List of default attributes.
 * Separately handled:
 * - class
 * - element
 * @type Array<string> defaultAttrs
 */


var defaultAttrs = [// Universal
"key", "style", "href", "id", "data-index", // React
"tabIndex", // Mithril
"tabindex", "oninit", "oncreate", "onupdate", "onbeforeremove", "onremove", "onbeforeupdate"];
/**
 * 
 * @param {{[s: string]: string}} attrs 
 * @param {object} [modifications] 
 * @param {Array<string>} [modifications.add]
 * @param {Array<string>} [modifications.remove]
 * @returns {object}
 */

var filterSupportedAttributes = function filterSupportedAttributes(attrs) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      add = _ref.add,
      remove = _ref.remove;

  /**
   * @type {{[s: string]: string}} removeLookup 
   */
  var removeLookup = remove ? remove.reduce(r, {}) : {};
  /**
   * @type {Array<string>} attrsList 
   */

  var attrsList = add ? defaultAttrs.concat(add) : defaultAttrs;
  var supported = attrsList.filter(function (item) {
    return !removeLookup[item];
  }).reduce(r, {});
  return Object.keys(attrs).reduce(
  /**
   * @param {object} acc
   * @param {string} key
   */
  function (acc, key) {
    return supported[key] ? acc[key] = attrs[key] : null, acc;
  }, {});
};
/**
 * 
 * @param {object|function} attrs 
 * @returns {object}
 */

var unpackAttrs = function unpackAttrs(attrs) {
  return typeof attrs === "function" ? attrs() : attrs;
};
/**
 * 
 * @param {{[s: string]: string}} classes 
 * @returns {{[s: string]: string}}
 */

var sizeClasses = function sizeClasses(classes) {
  return {
    small: classes.small,
    regular: classes.regular,
    medium: classes.medium,
    large: classes.large,
    fab: classes.fab
  };
};
/**
 * 
 * @param {{[s: string]: string}} classes 
 * @param {string} [size] 
 * @returns {object}
 */


var classForSize = function classForSize(classes) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "regular";
  return sizeClasses(classes)[size];
};

var isClient = typeof document !== "undefined";
var isServer = !isClient;

// @ts-check
/**
 * @type {{[s: string]: string}} evts
 */

var evts = {
  "animation": "animationend",
  "OAnimation": "oAnimationEnd",
  "MozAnimation": "animationend",
  "WebkitAnimation": "webkitAnimationEnd"
};
var getAnimationEndEvent = function getAnimationEndEvent() {
  if (isClient) {
    var el = document.createElement("fakeelement");
    /**
     * @type {string} a
     */

    for (var a in evts) {
      /**
       * @type {object} style
       */
      var style = el.style;

      if (style[a] !== undefined) {
        return evts[a];
      }
    }
  }
};

// @ts-check

/**
 * @param {object} params
 * @param {object} params.element
 * @param {string} [params.selector]
 * @param {string} [params.pseudoSelector]
 * @param {string} params.prop
 * @returns {object|undefined}
 */
var getStyle = function getStyle(_ref) {
  var element = _ref.element,
      selector = _ref.selector,
      pseudoSelector = _ref.pseudoSelector,
      prop = _ref.prop;
  var el = selector ? element.querySelector(selector) : element;

  if (!el) {
    return undefined;
  }

  if (el.currentStyle) {
    return el.currentStyle;
  }

  if (window.getComputedStyle) {
    var defaultView = document.defaultView;

    if (defaultView) {
      var style = defaultView.getComputedStyle(el, pseudoSelector);

      if (style) {
        return style.getPropertyValue(prop);
      }
    }
  }

  return undefined;
};
/**
 * 
 * @param {object} params
 * @param {object} params.element
 * @param {string} [params.selector]
 * @param {string} [params.pseudoSelector]
 * @param {string} params.prop
 * @param {string} [params.equals]
 * @param {string} [params.contains]
 * @returns {boolean}
 */

var stylePropCompare = function stylePropCompare(_ref2) {
  var element = _ref2.element,
      selector = _ref2.selector,
      pseudoSelector = _ref2.pseudoSelector,
      prop = _ref2.prop,
      equals = _ref2.equals,
      contains = _ref2.contains;
  var el = selector ? element.querySelector(selector) : element;

  if (!el) {
    return false;
  }

  var defaultView = document.defaultView;

  if (defaultView) {
    if (equals !== undefined) {
      return equals === defaultView.getComputedStyle(el, pseudoSelector).getPropertyValue(prop);
    }

    if (contains !== undefined) {
      return defaultView.getComputedStyle(el, pseudoSelector).getPropertyValue(prop).indexOf(contains) !== -1;
    }
  }

  return false;
};
/**
 * 
 * @param {object} params
 * @param {object} params.element
 * @param {string} params.selector
 * @returns {boolean}
 */

var isRTL = function isRTL(_ref3) {
  var _ref3$element = _ref3.element,
      element = _ref3$element === void 0 ? document : _ref3$element,
      selector = _ref3.selector;
  return stylePropCompare({
    element: element,
    selector: selector,
    prop: "direction",
    equals: "rtl"
  });
};
/**
 * 
 * @param {string} durationStr 
 * @returns {number}
 */

var styleDurationToMs = function styleDurationToMs(durationStr) {
  var parsed = parseFloat(durationStr) * (durationStr.indexOf("ms") === -1 ? 1000 : 1);
  return isNaN(parsed) ? 0 : parsed;
};

var iconDropdownUp = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"dd-up-svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7 14l5-5 5 5z\"/></svg>";
var iconDropdownDown = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"dd-down-svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7 10l5 5 5-5z\"/></svg>";

// @ts-check
var isTouch = isServer ? false : "ontouchstart" in document.documentElement;
var pointerStartEvent = isTouch ? ["touchstart", "click"] : ["click"];
var pointerEndEvent = isTouch ? ["click", "mouseup"] : ["mouseup"];
var pointerStartDownEvent = isTouch ? ["touchstart", "mousedown"] : ["mousedown"];
var pointerMoveEvent = isTouch ? ["touchmove", "mousemove"] : ["mousemove"];
var pointerEndDownEvent = isTouch ? ["touchend", "mouseup"] : ["mouseup"];

if (isClient) {
  var htmlElement = document.querySelector("html");

  if (htmlElement) {
    htmlElement.classList.add(isTouch ? "pe-touch" : "pe-no-touch");
  }
}

// @ts-check
/**
 * @type {{[s: string]: Array<function>}} listeners
 */

var listeners = {};
/**
 * @param {function} func
 * @param {number} [s]
 * @param {object} [context]
 * @returns {function}
 * @see https://gist.github.com/Eartz/fe651f2fadcc11444549
 */

var throttle = function throttle(func) {
  var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.05;
  var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : isClient ? window : {};
  var wait = false;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var later = function later() {
      return func.apply(context, args);
    };

    if (!wait) {
      later();
      wait = true;
      setTimeout(function () {
        return wait = false;
      }, s);
    }
  };
};
/**
 * 
 * @param {string} eventName 
 * @param {object} listener 
 * @param {number} [delay] 
 */

var subscribe = function subscribe(eventName, listener, delay) {
  listeners[eventName] = listeners[eventName] || [];
  listeners[eventName].push(delay ? throttle(listener, delay) : listener);
};
/**
 * 
 * @param {string} eventName 
 * @param {object} listener 
 */

var unsubscribe = function unsubscribe(eventName, listener) {
  if (!listeners[eventName]) {
    return;
  }

  var index = listeners[eventName].indexOf(listener);

  if (index > -1) {
    listeners[eventName].splice(index, 1);
  }
};
/**
 * 
 * @param {string} eventName 
 * @param {object} event 
 */

var emit = function emit(eventName, event) {
  if (!listeners[eventName]) {
    return;
  }

  listeners[eventName].forEach(function (listener) {
    return listener(event);
  });
};

if (isClient) {
  window.addEventListener("resize", function (e) {
    return emit("resize", e);
  });
  window.addEventListener("scroll", function (e) {
    return emit("scroll", e);
  });
  window.addEventListener("keydown", function (e) {
    return emit("keydown", e);
  });
  pointerEndEvent.forEach(function (eventName) {
    return window.addEventListener(eventName, function (e) {
      return emit(eventName, e);
    });
  });
}

/**
 * @typedef {object} Item 
 */

/**
 * 
 * @param {object} params
 * @param {object} params.options
 */

var Multi = function Multi(_ref) {
  var mOptions = _ref.options;

  /**
   * @type {Array<Item>} items
   */
  var items = []; // This is shared between all instances of a type (Dialog, Notification, ...)

  /*
  @param e: { id, eventName }
  */

  var onChange = function onChange(e) {
    emit(mOptions.name, e);
  };

  var itemIndex = function itemIndex(id) {
    var item = findItem(id);
    return items.indexOf(item);
  };

  var removeItem = function removeItem(id) {
    var index = itemIndex(id);

    if (index !== -1) {
      items.splice(index, 1);
      onChange({
        id: id,
        name: "removeItem"
      });
    }
  };

  var replaceItem = function replaceItem(id, newItem) {
    var index = itemIndex(id);

    if (index !== -1) {
      items[index] = newItem;
    }
  };

  var findItem = function findItem(id) {
    // traditional for loop for IE10
    for (var i = 0; i < items.length; i++) {
      if (items[i].instanceId === id) {
        return items[i];
      }
    }
  };

  var next = function next() {
    if (items.length) {
      items[0].show = true;
    }

    onChange({
      id: items.length ? items[0].instanceId : null,
      name: "next"
    });
  };

  var remove = function remove() {
    var instanceId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mOptions.defaultId;

    if (mOptions.queue) {
      items.shift();
      next();
    } else {
      removeItem(instanceId);
    }
  };

  var removeAll = function removeAll() {
    items.length = 0;
    onChange({
      id: null,
      name: "removeAll"
    });
  };

  var setPauseState = function setPauseState(pause, instanceId) {
    var item = findItem(instanceId);

    if (item) {
      item.pause = pause;
      item.unpause = !pause;
      onChange({
        id: instanceId,
        name: pause ? "pause" : "unpause"
      });
    }
  };

  var createItem = function createItem(itemAttrs, instanceId, spawn) {
    var resolveShow;
    var resolveHide;
    var props = unpackAttrs(itemAttrs);

    var didShow = function didShow() {
      if (props.didShow) {
        props.didShow(instanceId);
      }

      onChange({
        id: instanceId,
        name: "didShow"
      });
      return resolveShow(instanceId);
    };

    var showPromise = new Promise(function (resolve) {
      return resolveShow = resolve;
    });
    var hidePromise = new Promise(function (resolve) {
      return resolveHide = resolve;
    });

    var didHide = function didHide() {
      if (props.didHide) {
        props.didHide(instanceId);
      }

      onChange({
        id: instanceId,
        name: "didHide"
      });
      remove(instanceId);
      return resolveHide(instanceId);
    };

    return _objectSpread({}, mOptions, {
      // keyId: mOptions.queue ? new Date().getTime() : undefined, // to force rendering a new component
      instanceId: instanceId,
      spawn: spawn,
      props: itemAttrs,
      show: mOptions.queue ? false : true,
      showPromise: showPromise,
      hidePromise: hidePromise,
      didShow: didShow,
      didHide: didHide
    });
  };

  var count = function count() {
    return items.length;
  };

  var pause = function pause() {
    var instanceId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mOptions.defaultId;
    return setPauseState(true, instanceId);
  };

  var unpause = function unpause() {
    var instanceId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mOptions.defaultId;
    return setPauseState(false, instanceId);
  };

  var show = function show() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var spawnOpts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var instanceId = spawnOpts.id || mOptions.defaultId;
    var spawn = spawnOpts.spawn || mOptions.defaultId;
    var item = createItem(props, instanceId, spawn);
    onChange({
      id: instanceId,
      name: "show"
    });

    if (mOptions.queue) {
      items.push(item);

      if (items.length === 1) {
        next();
      }
    } else {
      var storedItem = findItem(instanceId);

      if (!storedItem) {
        items.push(item);
      } else {
        replaceItem(instanceId, item);
      }
    }

    return item.showPromise;
  };

  var hide = function hide() {
    var spawnOpts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var instanceId = spawnOpts.id || mOptions.defaultId;
    var item = mOptions.queue && items.length ? items[0] : findItem(instanceId);

    if (item) {
      item.hide = true;
    }

    onChange({
      id: instanceId,
      name: "hide"
    });
    return item ? item.hidePromise : Promise.resolve(instanceId);
  };

  var clear = removeAll;

  var render = function render(_ref2) {
    var h = _ref2.h,
        useState = _ref2.useState,
        useEffect = _ref2.useEffect,
        props = _objectWithoutProperties(_ref2, ["h", "useState", "useEffect"]);

    var _useState = useState(),
        _useState2 = _slicedToArray(_useState, 2),
        setCurrent = _useState2[1];

    useEffect(function () {
      subscribe(mOptions.name, setCurrent);
      return function () {
        unsubscribe(mOptions.name, setCurrent);
      };
    }, []);
    var spawn = props.spawn || mOptions.defaultId;
    var candidates = items.filter(function (item) {
      return item.show && item.spawn === spawn;
    });

    if (mOptions.htmlShowClass && isClient && document.documentElement) {
      document.documentElement.classList[candidates.length ? "add" : "remove"](mOptions.htmlShowClass);
    }

    return !candidates.length ? h(mOptions.placeholder) // placeholder because we cannot return null
    : h(mOptions.holderSelector, {
      className: props.position === "container" ? "pe-multiple--container" : "pe-multiple--screen"
    }, candidates.map(function (itemData) {
      return h(mOptions.instance, _objectSpread({}, unpackAttrs(props), {
        fromMultipleClear: clear,
        spawnId: spawn,
        // from mOptions:
        fromMultipleClassName: mOptions.className,
        holderSelector: mOptions.holderSelector,
        transitions: mOptions.transitions,
        // from itemData:
        fromMultipleDidHide: itemData.didHide,
        fromMultipleDidShow: itemData.didShow,
        hide: itemData.hide,
        instanceId: itemData.instanceId,
        key: itemData.key !== undefined ? itemData.key : itemData.keyId,
        pause: itemData.pause,
        show: itemData.show,
        unpause: itemData.unpause
      }, unpackAttrs(itemData.props)));
    }));
  };

  return {
    clear: clear,
    count: count,
    hide: hide,
    pause: pause,
    remove: remove,
    show: show,
    unpause: unpause,
    render: render
  };
};
Multi["displayName"] = "Multi";

var TRANSITION_TYPES = {
  SHOW: "show",
  HIDE: "hide",
  DONE: "done"
};
var initialTransitionState = {
  isVisible: false,
  isTransitioning: false,
  isHiding: false
};
var transitionStateReducer = function transitionStateReducer(state, type) {
  switch (type) {
    case TRANSITION_TYPES.SHOW:
      return _objectSpread({}, state, {
        isTransitioning: true,
        isVisible: true,
        isHiding: false
      });

    case TRANSITION_TYPES.HIDE:
      return _objectSpread({}, state, {
        isTransitioning: true,
        isHiding: true
      });

    case TRANSITION_TYPES.SHOW_DONE:
      return _objectSpread({}, state, {
        isTransitioning: false,
        isVisible: true,
        isHiding: false
      });

    case TRANSITION_TYPES.HIDE_DONE:
      return _objectSpread({}, state, {
        isTransitioning: false,
        isVisible: false,
        isHiding: false
      });

    default:
      throw new Error("Unhandled action type: ".concat(type));
  }
};
/**
 * 
 * @typedef {{ el?: HTMLElement, duration?: number, hasDuration?: boolean, delay?: number, hasDelay?: boolean, timingFunction?: string, transitionClass?: string, transitionClassElement?: HTMLElement, before?: () => void, after?: () => void, transition?: () => void, showClass?: string, showClassElement?: HTMLElement  }} TransitionOpts
 */

var DEFAULT_DURATION = .240;
var DEFAULT_DELAY = 0;
/**
 * 
 * @param {TransitionOpts} opts 
 * @returns {Promise}
 */

var show = function show(opts) {
  return transition(opts, "show");
};
/**
 * 
 * @param {TransitionOpts} opts
 * @returns {Promise} 
 */

var hide = function hide(opts) {
  return transition(opts, "hide");
};
/**
 * 
 * @param {TransitionOpts} opts 
 * @param {"show"|"hide"} state 
 * @returns {Promise}
 */

var transition = function transition(opts, state) {
  var el = opts.el;

  if (!el) {
    return Promise.resolve();
  } else {
    return new Promise(function (resolve) {
      var style = el.style;
      /**
       * @type {object} computedStyle
       */

      var computedStyle = isClient ? window.getComputedStyle(el) : {};
      var duration = opts.hasDuration && opts.duration !== undefined ? opts.duration * 1000.0 : styleDurationToMs(computedStyle.transitionDuration);
      var delay = opts.hasDelay && opts.delay !== undefined ? opts.delay * 1000.0 : styleDurationToMs(computedStyle.transitionDelay);
      var timingFunction = opts.timingFunction || computedStyle.transitionTimingFunction;

      if (opts.transitionClass) {
        var transitionClassElement = opts.transitionClassElement || el;
        transitionClassElement.classList.add(opts.transitionClass);
      }

      var before = function before() {
        style.transitionDuration = "0ms";
        style.transitionDelay = "0ms";

        if (opts.before && typeof opts.before === "function") {
          opts.before();
        }
      };

      var maybeBefore = opts.before && state === "show" ? before : opts.before && state === "hide" ? before : null;

      var after = function after() {
        if (opts.after && typeof opts.after === "function") {
          opts.after();
        }
      };

      var applyTransition = function applyTransition() {
        style.transitionDuration = duration + "ms";
        style.transitionDelay = delay + "ms";

        if (timingFunction) {
          style.transitionTimingFunction = timingFunction;
        }

        if (opts.showClass) {
          var showClassElement = opts.showClassElement || el;
          showClassElement.classList[state === "show" ? "add" : "remove"](opts.showClass);
        }

        if (opts.transition) {
          opts.transition();
        }
      };

      var doTransition = function doTransition() {
        applyTransition();
        setTimeout(function () {
          if (after) {
            after();
          }

          if (opts.transitionClass) {
            var _transitionClassElement = opts.transitionClassElement || el;

            _transitionClassElement.classList.remove(opts.transitionClass);

            el.offsetHeight; // force reflow
          }

          resolve();
        }, duration + delay);
      };

      var maybeDelayTransition = function maybeDelayTransition() {
        if (duration === 0) {
          doTransition();
        } else {
          setTimeout(doTransition, 0);
        }
      };

      if (maybeBefore) {
        maybeBefore();
        el.offsetHeight; // force reflow

        setTimeout(function () {
          maybeDelayTransition();
        }, 0);
      } else {
        maybeDelayTransition();
      }
    });
  }
};
/**
 * 
 * @param {object} params
 * @param {(string) => void} [params.dispatchTransitionState]
 * @param {boolean} [params.isShow]
 * @param {boolean} [params.isTransitioning]
 * @param {string} [params.instanceId]
 * @param {(boolean) => void} [params.setIsTransitioning]
 * @param {(boolean) => void} [params.setIsVisible]
 * @param {object} [params.props]
 * @param {object} [params.domElements]
 * @param {() => void} [params.beforeTransition]
 * @param {() => void} [params.afterTransition]
 * @param {string} [params.showClass]
 * @param {string} [params.transitionClass]
 * @param {string} [params.referrer]
 * @returns {Promise}
 */


var transitionComponent = function transitionComponent(_ref) {
  var dispatchTransitionState = _ref.dispatchTransitionState,
      isTransitioning = _ref.isTransitioning,
      instanceId = _ref.instanceId,
      isShow = _ref.isShow,
      props = _ref.props,
      domElements = _ref.domElements,
      beforeTransition = _ref.beforeTransition,
      afterTransition = _ref.afterTransition,
      showClass = _ref.showClass,
      transitionClass = _ref.transitionClass,
      referrer = _ref.referrer;

  if (isTransitioning) {
    return Promise.resolve();
  }

  dispatchTransitionState(isShow ? TRANSITION_TYPES.SHOW : TRANSITION_TYPES.HIDE);

  if (beforeTransition) {
    beforeTransition();
  }

  var duration = isShow ? props.showDuration : props.hideDuration;
  var delay = isShow ? props.showDelay : props.hideDelay;
  var timingFunction = isShow ? props.showTimingFunction : props.hideTimingFunction;
  var transitions = props.transitions;
  var fn = isShow ? show : hide;

  var opts1 = _objectSpread({}, props, domElements, {
    showClass: showClass,
    transitionClass: transitionClass,
    duration: duration,
    delay: delay,
    timingFunction: timingFunction
  });

  var opts2 = _objectSpread({}, opts1, transitions ? (isShow ? transitions.show : transitions.hide)(opts1) : undefined);

  var opts3 = _objectSpread({}, opts2, {
    duration: opts2.duration !== undefined ? opts2.duration : DEFAULT_DURATION,
    hasDuration: opts2.duration !== undefined,
    delay: opts2.delay !== undefined ? opts2.delay : DEFAULT_DELAY,
    hasDelay: opts2.delay !== undefined
  });

  return fn(opts3).then(function () {
    var id = instanceId;

    if (afterTransition) {
      afterTransition();
    }

    dispatchTransitionState(isShow ? TRANSITION_TYPES.SHOW_DONE : TRANSITION_TYPES.HIDE_DONE); // Component may unmount after this point

    if (isShow ? props.fromMultipleDidShow : props.fromMultipleDidHide) {
      (isShow ? props.fromMultipleDidShow : props.fromMultipleDidHide)(id); // when used with Multiple; this will call props.didShow / props.didHide
    } else if (isShow ? props.didShow : props.didHide) {
      (isShow ? props.didShow : props.didHide)(id); // when used directly
    }
  });
};




/***/ }),

/***/ "../node_modules/polythene-css/dist/polythene-typography.css":
/*!*******************************************************************!*\
  !*** ../node_modules/polythene-css/dist/polythene-typography.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../node_modules/polythene-css/dist/polythene.css":
/*!********************************************************!*\
  !*** ../node_modules/polythene-css/dist/polythene.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"pe-spinner":"pe-spinner","pe-spinner--raised":"pe-spinner--raised","pe-spinner--permanent":"pe-spinner--permanent","pe-spinner--visible":"pe-spinner--visible","pe-spinner--fab":"pe-spinner--fab","pe-spinner--large":"pe-spinner--large","pe-spinner--medium":"pe-spinner--medium","pe-spinner--regular":"pe-spinner--regular","pe-spinner--small":"pe-spinner--small","pe-dark-tone":"pe-dark-tone","pe-light-tone":"pe-light-tone","pe-button-group":"pe-button-group","pe-button":"pe-button","pe-button--disabled":"pe-button--disabled","pe-button--inactive":"pe-button--inactive","pe-button--selected":"pe-button--selected","pe-button__content":"pe-button__content","pe-button__label":"pe-button__label","pe-button__wash":"pe-button__wash","pe-button__wash-color":"pe-button__wash-color","pe-button-row":"pe-button-row","pe-text-button":"pe-text-button","pe-button--separator-start":"pe-button--separator-start","pe-button--border":"pe-button--border","pe-ripple":"pe-ripple","pe-button--has-hover":"pe-button--has-hover","pe-button__dropdown":"pe-button__dropdown","pe-button__text-label":"pe-button__text-label","pe-button--dropdown":"pe-button--dropdown","pe-svg":"pe-svg","pe-button--dropdown-open":"pe-button--dropdown-open","pe-rtl":"pe-rtl","pe-button--high-label":"pe-button--high-label","pe-button--extra-wide":"pe-button--extra-wide","pe-button--contained":"pe-button--contained","pe-card":"pe-card","pe-card__content":"pe-card__content","pe-card__media":"pe-card__media","pe-card__media--landscape":"pe-card__media--landscape","pe-card__media--square":"pe-card__media--square","pe-card__media--crop-x":"pe-card__media--crop-x","pe-card__media--origin-start":"pe-card__media--origin-start","pe-card__media--origin-end":"pe-card__media--origin-end","pe-card__media--crop-y":"pe-card__media--crop-y","pe-card__header":"pe-card__header","pe-card__primary-media":"pe-card__primary-media","pe-card__media__dimmer":"pe-card__media__dimmer","pe-card__overlay":"pe-card__overlay","pe-card__overlay__content":"pe-card__overlay__content","pe-list-tile__title":"pe-list-tile__title","pe-list-tile__subtitle":"pe-list-tile__subtitle","pe-card__primary":"pe-card__primary","pe-card__text":"pe-card__text","pe-card__title":"pe-card__title","pe-card__subtitle":"pe-card__subtitle","pe-card__actions":"pe-card__actions","pe-card__actions--tight":"pe-card__actions--tight","pe-card__actions--vertical":"pe-card__actions--vertical","pe-card__actions--horizontal":"pe-card__actions--horizontal","pe-card__actions--justified":"pe-card__actions--justified","pe-list":"pe-list","pe-card__primary--media":"pe-card__primary--media","pe-card__media--large":"pe-card__media--large","pe-card__media--medium":"pe-card__media--medium","pe-card__media--regular":"pe-card__media--regular","pe-card__media--small":"pe-card__media--small","pe-card__text--tight":"pe-card__text--tight","pe-card__primary--tight":"pe-card__primary--tight","pe-card__overlay--sheet":"pe-card__overlay--sheet","pe-card__actions--border":"pe-card__actions--border","pe-dialog-pane":"pe-dialog-pane","pe-dialog-pane__content":"pe-dialog-pane__content","pe-dialog-pane__title":"pe-dialog-pane__title","pe-toolbar":"pe-toolbar","pe-dialog-pane__header":"pe-dialog-pane__header","pe-dialog-pane__body":"pe-dialog-pane__body","pe-dialog-pane--body-full-bleed":"pe-dialog-pane--body-full-bleed","pe-dialog-pane__header--title":"pe-dialog-pane__header--title","pe-dialog-pane__footer":"pe-dialog-pane__footer","pe-dialog-pane__footer--high":"pe-dialog-pane__footer--high","pe-dialog-pane__footer--buttons":"pe-dialog-pane__footer--buttons","pe-dialog-pane__actions":"pe-dialog-pane__actions","pe-dialog__content":"pe-dialog__content","pe-menu__content":"pe-menu__content","pe-dialog-pane--footer":"pe-dialog-pane--footer","pe-dialog-pane--border-top":"pe-dialog-pane--border-top","pe-dialog-pane--border-bottom":"pe-dialog-pane--border-bottom","pe-dialog":"pe-dialog","pe-dialog--full-screen":"pe-dialog--full-screen","pe-dialog__backdrop":"pe-dialog__backdrop","pe-dialog--backdrop":"pe-dialog--backdrop","pe-dialog--visible":"pe-dialog--visible","pe-dialog__holder":"pe-dialog__holder","pe-drawer":"pe-drawer","pe-drawer--fixed":"pe-drawer--fixed","pe-drawer--border":"pe-drawer--border","pe-dialog--transition":"pe-dialog--transition","pe-drawer--mini":"pe-drawer--mini","pe-drawer--permanent":"pe-drawer--permanent","pe-drawer--floating":"pe-drawer--floating","pe-drawer--cover":"pe-drawer--cover","pe-dialog__touch":"pe-dialog__touch","pe-drawer--push":"pe-drawer--push","pe-drawer--anchor-end":"pe-drawer--anchor-end","pe-fab":"pe-fab","pe-fab__content":"pe-fab__content","pe-fab--mini":"pe-fab--mini","pe-icon-button":"pe-icon-button","pe-icon-button__content":"pe-icon-button__content","pe-icon-button__label":"pe-icon-button__label","pe-icon-button--compact":"pe-icon-button--compact","pe-icon":"pe-icon","pe-icon--avatar":"pe-icon--avatar","pe-icon--small":"pe-icon--small","pe-icon--regular":"pe-icon--regular","pe-icon--medium":"pe-icon--medium","pe-icon--large":"pe-icon--large","pe-ios-spinner":"pe-ios-spinner","pe-ios-spinner__blades":"pe-ios-spinner__blades","pe-ios-spinner__blade":"pe-ios-spinner__blade","iosSpinnerFade":"iosSpinnerFade","pe-list-tile":"pe-list-tile","pe-list-tile__content-front":"pe-list-tile__content-front","pe-list-tile__content":"pe-list-tile__content","pe-list-tile--navigation":"pe-list-tile--navigation","pe-list-tile--sticky":"pe-list-tile--sticky","pe-list-tile--inset-h":"pe-list-tile--inset-h","pe-list-tile--inset-v":"pe-list-tile--inset-v","pe-list-tile__primary":"pe-list-tile__primary","pe-list-tile__secondary":"pe-list-tile__secondary","pe-list-tile--header":"pe-list-tile--header","pe-list-tile--disabled":"pe-list-tile--disabled","pe-list-tile__high-subtitle":"pe-list-tile__high-subtitle","pe-list-tile--selected":"pe-list-tile--selected","pe-list-tile--subtitle":"pe-list-tile--subtitle","pe-list-tile--high-subtitle":"pe-list-tile--high-subtitle","pe-no-touch":"pe-no-touch","pe-list-tile--hoverable":"pe-list-tile--hoverable","pe-list-tile--selectable":"pe-list-tile--selectable","pe-list-tile--compact-front":"pe-list-tile--compact-front","pe-list--compact":"pe-list--compact","pe-list-tile--compact":"pe-list-tile--compact","pe-list-tile--rounded":"pe-list-tile--rounded","pe-list-tile--highlight":"pe-list-tile--highlight","pe-list--header":"pe-list--header","pe-list--indented-border":"pe-list--indented-border","pe-list--border":"pe-list--border","pe-list--padding":"pe-list--padding","pe-list--padding-top":"pe-list--padding-top","pe-list--padding-bottom":"pe-list--padding-bottom","pe-md-progress-spinner":"pe-md-progress-spinner","pe-md-progress-spinner__animation":"pe-md-progress-spinner__animation","pe-md-progress-spinner__circle":"pe-md-progress-spinner__circle","pe-md-progress-spinner__circle-left":"pe-md-progress-spinner__circle-left","pe-md-progress-spinner__circle-right":"pe-md-progress-spinner__circle-right","pe-md-spinner":"pe-md-spinner","pe-md-spinner__animation":"pe-md-spinner__animation","pe-md-spinner__gap-patch":"pe-md-spinner__gap-patch","pe-md-spinner__circle":"pe-md-spinner__circle","pe-md-spinner__circle-clipper":"pe-md-spinner__circle-clipper","pe-md-spinner__circle-clipper-left":"pe-md-spinner__circle-clipper-left","pe-md-spinner__circle-clipper-right":"pe-md-spinner__circle-clipper-right","pe-md-spinner__layer":"pe-md-spinner__layer","pe-md-spinner__layer-1":"pe-md-spinner__layer-1","mdSpinnerFillUnfillRotate":"mdSpinnerFillUnfillRotate","mdSpinnerLayer1FadeInOut":"mdSpinnerLayer1FadeInOut","pe-md-spinner__layer-2":"pe-md-spinner__layer-2","mdSpinnerLayer2FadeInOut":"mdSpinnerLayer2FadeInOut","pe-md-spinner__layer-3":"pe-md-spinner__layer-3","mdSpinnerLayer3FadeInOut":"mdSpinnerLayer3FadeInOut","pe-md-spinner__layer-4":"pe-md-spinner__layer-4","mdSpinnerLayer4FadeInOut":"mdSpinnerLayer4FadeInOut","mdSpinnerLeftSpin":"mdSpinnerLeftSpin","mdSpinnerRightSpin":"mdSpinnerRightSpin","mdSpinnerRotate":"mdSpinnerRotate","pe-spinner--single-color":"pe-spinner--single-color","pe-menu":"pe-menu","pe-menu--width-auto":"pe-menu--width-auto","pe-menu--permanent":"pe-menu--permanent","pe-menu__panel":"pe-menu__panel","pe-menu--floating":"pe-menu--floating","pe-menu__backdrop":"pe-menu__backdrop","pe-menu--backdrop":"pe-menu--backdrop","pe-menu--visible":"pe-menu--visible","pe-menu--top-menu":"pe-menu--top-menu","pe-menu--width-1-5":"pe-menu--width-1-5","pe-menu--width-2":"pe-menu--width-2","pe-menu--width-3":"pe-menu--width-3","pe-menu--width-4":"pe-menu--width-4","pe-menu--width-5":"pe-menu--width-5","pe-menu--width-6":"pe-menu--width-6","pe-menu--width-7":"pe-menu--width-7","pe-menu--full-height":"pe-menu--full-height","pe-menu--origin":"pe-menu--origin","pe-notification":"pe-notification","pe-notification__title":"pe-notification__title","pe-notification__action":"pe-notification__action","pe-notification__content":"pe-notification__content","pe-notification--horizontal":"pe-notification--horizontal","pe-notification--vertical":"pe-notification--vertical","pe-notification--visible":"pe-notification--visible","pe-notification__title--multi-line":"pe-notification__title--multi-line","pe-notification__holder":"pe-notification__holder","pe-multiple--screen":"pe-multiple--screen","pe-notification--container":"pe-notification--container","pe-multiple--container":"pe-multiple--container","pe-radio-group":"pe-radio-group","pe-ripple--unconstrained":"pe-ripple--unconstrained","pe-ripple__mask":"pe-ripple__mask","pe-ripple__waves":"pe-ripple__waves","pe-ripple__waves--animating":"pe-ripple__waves--animating","pe-search":"pe-search","pe-textfield":"pe-textfield","pe-textfield__input-area":"pe-textfield__input-area","pe-textfield__input":"pe-textfield__input","pe-textfield__label":"pe-textfield__label","pe-search__content":"pe-search__content","pe-search--full-width":"pe-search--full-width","pe-search--inset":"pe-search--inset","pe-control":"pe-control","pe-control__form-label":"pe-control__form-label","pe-control--inactive":"pe-control--inactive","pe-control__box":"pe-control__box","pe-control__button":"pe-control__button","pe-control--off":"pe-control--off","pe-control__button--on":"pe-control__button--on","pe-control__button--off":"pe-control__button--off","pe-control--on":"pe-control--on","pe-control__label":"pe-control__label","pe-control--disabled":"pe-control--disabled","pe-control--small":"pe-control--small","pe-control--regular":"pe-control--regular","pe-control--medium":"pe-control--medium","pe-control--large":"pe-control--large","pe-shadow":"pe-shadow","pe-shadow__top":"pe-shadow__top","pe-shadow__bottom":"pe-shadow__bottom","pe-shadow--animated":"pe-shadow--animated","pe-with-active-shadow":"pe-with-active-shadow","pe-shadow--depth-0":"pe-shadow--depth-0","pe-shadow--depth-1":"pe-shadow--depth-1","pe-shadow--depth-2":"pe-shadow--depth-2","pe-shadow--depth-3":"pe-shadow--depth-3","pe-shadow--depth-4":"pe-shadow--depth-4","pe-shadow--depth-5":"pe-shadow--depth-5","pe-slider":"pe-slider","pe-slider__track":"pe-slider__track","pe-slider__control":"pe-slider__control","pe-slider__thumb":"pe-slider__thumb","pe-slider__label":"pe-slider__label","pe-slider__track-part":"pe-slider__track-part","pe-slider__track-rest":"pe-slider__track-rest","pe-slider__track-value":"pe-slider__track-value","pe-slider__track-bar":"pe-slider__track-bar","pe-slider__track-bar-value":"pe-slider__track-bar-value","pe-slider__ticks":"pe-slider__ticks","pe-slider__pin":"pe-slider__pin","pe-slider--pin":"pe-slider--pin","pe-slider--active":"pe-slider--active","pe-slider--focus":"pe-slider--focus","pe-slider--disabled":"pe-slider--disabled","pe-slider--track":"pe-slider--track","pe-slider--ticks":"pe-slider--ticks","pe-slider__tick":"pe-slider__tick","pe-slider--min":"pe-slider--min","pe-slider--tick":"pe-slider--tick","pe-slider__tick--value":"pe-slider__tick--value","pe-slider--tick--value":"pe-slider--tick--value","pe-snackbar":"pe-snackbar","pe-snackbar__holder":"pe-snackbar__holder","pe-switch-control":"pe-switch-control","pe-switch-control__track":"pe-switch-control__track","pe-switch-control__thumb":"pe-switch-control__thumb","pe-switch-control__knob":"pe-switch-control__knob","pe-tabs":"pe-tabs","pe-tabs__indicator":"pe-tabs__indicator","pe-tabs--scrollable":"pe-tabs--scrollable","pe-tabs__scroll-button":"pe-tabs__scroll-button","pe-tabs__tab":"pe-tabs__tab","pe-tabs--end":"pe-tabs--end","pe-tabs__scroll-button-end":"pe-tabs__scroll-button-end","pe-tabs--start":"pe-tabs--start","pe-tabs__scroll-button-start":"pe-tabs__scroll-button-start","pe-tabs__row":"pe-tabs__row","pe-tabs__row--indent":"pe-tabs__row--indent","pe-tabs__row--centered":"pe-tabs__row--centered","pe-tabs__scroll-button-offset":"pe-tabs__scroll-button-offset","pe-toolbar--tabs":"pe-toolbar--tabs","pe-toolbar__bar":"pe-toolbar__bar","pe-tab":"pe-tab","pe-tabs__tab--icon":"pe-tabs__tab--icon","pe-tabs--menu":"pe-tabs--menu","pe-tabs--compact":"pe-tabs--compact","pe-tabs__tab-content":"pe-tabs__tab-content","pe-tabs--autofit":"pe-tabs--autofit","pe-tabs__active--selectable":"pe-tabs__active--selectable","pe-tabs--small":"pe-tabs--small","pe-textfield__counter":"pe-textfield__counter","pe-textfield--focused":"pe-textfield--focused","pe-textfield--dirty":"pe-textfield--dirty","pe-textfield--no-char":"pe-textfield--no-char","pe-textfield__optional-indicator":"pe-textfield__optional-indicator","pe-textfield__required-indicator":"pe-textfield__required-indicator","pe-textfield--floating-label":"pe-textfield--floating-label","pe-textfield--disabled":"pe-textfield--disabled","pe-textfield--readonly":"pe-textfield--readonly","pe-textfield__error":"pe-textfield__error","pe-textfield__error-placeholder":"pe-textfield__error-placeholder","pe-textfield__help":"pe-textfield__help","pe-textfield__help-focus":"pe-textfield__help-focus","pe-textfield--hide-clear":"pe-textfield--hide-clear","pe-textfield--hide-spinner":"pe-textfield--hide-spinner","pe-textfield--full-width":"pe-textfield--full-width","pe-textfield--dense":"pe-textfield--dense","pe-textfield--invalid":"pe-textfield--invalid","pe-textfield--hide-validation":"pe-textfield--hide-validation","pe-textfield--required":"pe-textfield--required","pe-textfield--counter":"pe-textfield--counter","pe-toolbar--fullbleed":"pe-toolbar--fullbleed","pe-toolbar--border":"pe-toolbar--border","pe-toolbar__title":"pe-toolbar__title","pe-toolbar__title--indent":"pe-toolbar__title--indent","pe-toolbar__title--center":"pe-toolbar__title--center","pe-action":"pe-action","pe-fit":"pe-fit","pe-toolbar--compact":"pe-toolbar--compact","mdSpinnerFadeOut":"mdSpinnerFadeOut"};

/***/ }),

/***/ "../node_modules/polythene-mithril-base-spinner/dist/polythene-mithril-base-spinner.mjs":
/*!**********************************************************************************************!*\
  !*** ../node_modules/polythene-mithril-base-spinner/dist/polythene-mithril-base-spinner.mjs ***!
  \**********************************************************************************************/
/*! exports provided: BaseSpinner */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseSpinner", function() { return BaseSpinner; });
/* harmony import */ var polythene_core_base_spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-base-spinner */ "../node_modules/polythene-core-base-spinner/dist/polythene-core-base-spinner.mjs");
/* harmony import */ var polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-mithril-shadow */ "../node_modules/polythene-mithril-shadow/dist/polythene-mithril-shadow.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cyano-mithril */ "../node_modules/cyano-mithril/dist/cyano-mithril.mjs");




var classes = {
  component: "pe-spinner",
  // elements
  animation: "pe-spinner__animation",
  placeholder: "pe-spinner__placeholder",
  // states
  animated: "pe-spinner--animated",
  fab: "pe-spinner--fab",
  large: "pe-spinner--large",
  medium: "pe-spinner--medium",
  permanent: "pe-spinner--permanent",
  raised: "pe-spinner--raised",
  regular: "pe-spinner--regular",
  singleColor: "pe-spinner--single-color",
  small: "pe-spinner--small",
  visible: "pe-spinner--visible"
};

var BaseSpinner = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["cast"])(polythene_core_base_spinner__WEBPACK_IMPORTED_MODULE_0__["_BaseSpinner"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["a"],
  useReducer: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["useReducer"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["useState"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["useEffect"],
  getRef: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["getRef"],
  Shadow: polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_1__["Shadow"]
});
BaseSpinner["displayName"] = "BaseSpinner";
BaseSpinner["classes"] = classes;




/***/ }),

/***/ "../node_modules/polythene-mithril-button-group/dist/polythene-mithril-button-group.mjs":
/*!**********************************************************************************************!*\
  !*** ../node_modules/polythene-mithril-button-group/dist/polythene-mithril-button-group.mjs ***!
  \**********************************************************************************************/
/*! exports provided: ButtonGroup */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGroup", function() { return ButtonGroup; });
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cyano-mithril */ "../node_modules/cyano-mithril/dist/cyano-mithril.mjs");
/* harmony import */ var polythene_core_button_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core-button-group */ "../node_modules/polythene-core-button-group/dist/polythene-core-button-group.mjs");



var ButtonGroup = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["cast"])(polythene_core_button_group__WEBPACK_IMPORTED_MODULE_1__["_ButtonGroup"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["a"]
});
ButtonGroup["displayName"] = "ButtonGroup";




/***/ }),

/***/ "../node_modules/polythene-mithril-button/dist/polythene-mithril-button.mjs":
/*!**********************************************************************************!*\
  !*** ../node_modules/polythene-mithril-button/dist/polythene-mithril-button.mjs ***!
  \**********************************************************************************/
/*! exports provided: Button */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var polythene_core_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-button */ "../node_modules/polythene-core-button/dist/polythene-core-button.mjs");
/* harmony import */ var polythene_mithril_ripple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-mithril-ripple */ "../node_modules/polythene-mithril-ripple/dist/polythene-mithril-ripple.mjs");
/* harmony import */ var polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-mithril-icon */ "../node_modules/polythene-mithril-icon/dist/polythene-mithril-icon.mjs");
/* harmony import */ var polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-mithril-shadow */ "../node_modules/polythene-mithril-shadow/dist/polythene-mithril-shadow.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cyano-mithril */ "../node_modules/cyano-mithril/dist/cyano-mithril.mjs");






var Button = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_4__["cast"])(polythene_core_button__WEBPACK_IMPORTED_MODULE_0__["_Button"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_4__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_4__["a"],
  getRef: cyano_mithril__WEBPACK_IMPORTED_MODULE_4__["getRef"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_4__["useState"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_4__["useEffect"],
  useRef: cyano_mithril__WEBPACK_IMPORTED_MODULE_4__["useRef"],
  Ripple: polythene_mithril_ripple__WEBPACK_IMPORTED_MODULE_1__["Ripple"],
  Shadow: polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_3__["Shadow"],
  Icon: polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_2__["Icon"]
});




/***/ }),

/***/ "../node_modules/polythene-mithril-card/dist/polythene-mithril-card.mjs":
/*!******************************************************************************!*\
  !*** ../node_modules/polythene-mithril-card/dist/polythene-mithril-card.mjs ***!
  \******************************************************************************/
/*! exports provided: Card */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony import */ var polythene_core_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-card */ "../node_modules/polythene-core-card/dist/polythene-core-card.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cyano-mithril */ "../node_modules/cyano-mithril/dist/cyano-mithril.mjs");
/* harmony import */ var polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-mithril-icon */ "../node_modules/polythene-mithril-icon/dist/polythene-mithril-icon.mjs");
/* harmony import */ var polythene_mithril_list_tile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-mithril-list-tile */ "../node_modules/polythene-mithril-list-tile/dist/polythene-mithril-list-tile.mjs");
/* harmony import */ var polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! polythene-mithril-shadow */ "../node_modules/polythene-mithril-shadow/dist/polythene-mithril-shadow.mjs");






var CardActions = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["cast"])(polythene_core_card__WEBPACK_IMPORTED_MODULE_0__["_CardActions"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["a"]
});
CardActions["displayName"] = "CardActions";

var CardMedia = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["cast"])(polythene_core_card__WEBPACK_IMPORTED_MODULE_0__["_CardMedia"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["a"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useState"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useEffect"],
  getRef: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["getRef"]
});
CardMedia["displayName"] = "CardMedia";

var CardPrimary = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["cast"])(polythene_core_card__WEBPACK_IMPORTED_MODULE_0__["_CardPrimary"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["a"]
});
CardPrimary["displayName"] = "CardPrimary";

var Card = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["cast"])(polythene_core_card__WEBPACK_IMPORTED_MODULE_0__["_Card"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["a"],
  CardActions: CardActions,
  CardMedia: CardMedia,
  CardPrimary: CardPrimary,
  Icon: polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_2__["Icon"],
  ListTile: polythene_mithril_list_tile__WEBPACK_IMPORTED_MODULE_3__["ListTile"],
  Shadow: polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_4__["Shadow"]
});
Card["displayName"] = "Card";




/***/ }),

/***/ "../node_modules/polythene-mithril-checkbox/dist/polythene-mithril-checkbox.mjs":
/*!**************************************************************************************!*\
  !*** ../node_modules/polythene-mithril-checkbox/dist/polythene-mithril-checkbox.mjs ***!
  \**************************************************************************************/
/*! exports provided: Checkbox */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox; });
/* harmony import */ var polythene_core_checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-checkbox */ "../node_modules/polythene-core-checkbox/dist/polythene-core-checkbox.mjs");
/* harmony import */ var polythene_core_selection_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core-selection-control */ "../node_modules/polythene-core-selection-control/dist/polythene-core-selection-control.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cyano-mithril */ "../node_modules/cyano-mithril/dist/cyano-mithril.mjs");
/* harmony import */ var polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-mithril-icon */ "../node_modules/polythene-mithril-icon/dist/polythene-mithril-icon.mjs");
/* harmony import */ var polythene_mithril_icon_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! polythene-mithril-icon-button */ "../node_modules/polythene-mithril-icon-button/dist/polythene-mithril-icon-button.mjs");






var ViewControl = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["cast"])(polythene_core_selection_control__WEBPACK_IMPORTED_MODULE_1__["_ViewControl"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["a"],
  Icon: polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_3__["Icon"],
  IconButton: polythene_mithril_icon_button__WEBPACK_IMPORTED_MODULE_4__["IconButton"]
});
ViewControl["displayName"] = "ViewControl";
var SelectionControl = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["cast"])(polythene_core_selection_control__WEBPACK_IMPORTED_MODULE_1__["_SelectionControl"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["a"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["useState"],
  ViewControl: ViewControl
});
SelectionControl["displayName"] = "SelectionControl";
var Checkbox = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["cast"])(polythene_core_checkbox__WEBPACK_IMPORTED_MODULE_0__["_Checkbox"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["a"],
  SelectionControl: SelectionControl
});
Checkbox["displayName"] = "Checkbox";




/***/ }),

/***/ "../node_modules/polythene-mithril-dialog-pane/dist/polythene-mithril-dialog-pane.mjs":
/*!********************************************************************************************!*\
  !*** ../node_modules/polythene-mithril-dialog-pane/dist/polythene-mithril-dialog-pane.mjs ***!
  \********************************************************************************************/
/*! exports provided: DialogPane */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogPane", function() { return DialogPane; });
/* harmony import */ var polythene_core_dialog_pane__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-dialog-pane */ "../node_modules/polythene-core-dialog-pane/dist/polythene-core-dialog-pane.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cyano-mithril */ "../node_modules/cyano-mithril/dist/cyano-mithril.mjs");



var DialogPane = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["cast"])(polythene_core_dialog_pane__WEBPACK_IMPORTED_MODULE_0__["_DialogPane"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["a"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useState"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useEffect"],
  useRef: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useRef"],
  getRef: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["getRef"]
});
DialogPane["displayName"] = "DialogPane";




/***/ }),

/***/ "../node_modules/polythene-mithril-dialog/dist/polythene-mithril-dialog.mjs":
/*!**********************************************************************************!*\
  !*** ../node_modules/polythene-mithril-dialog/dist/polythene-mithril-dialog.mjs ***!
  \**********************************************************************************/
/*! exports provided: Dialog, DialogInstance */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return Dialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogInstance", function() { return DialogInstance; });
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cyano-mithril */ "../node_modules/cyano-mithril/dist/cyano-mithril.mjs");
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core */ "../node_modules/polythene-core/dist/polythene-core.mjs");
/* harmony import */ var polythene_core_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-core-dialog */ "../node_modules/polythene-core-dialog/dist/polythene-core-dialog.mjs");
/* harmony import */ var polythene_mithril_dialog_pane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-mithril-dialog-pane */ "../node_modules/polythene-mithril-dialog-pane/dist/polythene-mithril-dialog-pane.mjs");
/* harmony import */ var polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! polythene-mithril-shadow */ "../node_modules/polythene-mithril-shadow/dist/polythene-mithril-shadow.mjs");






var listTileClasses = {
  component: "pe-list-tile",
  // elements
  content: "pe-list-tile__content",
  highSubtitle: "pe-list-tile__high-subtitle",
  primary: "pe-list-tile__primary",
  secondary: "pe-list-tile__secondary",
  subtitle: "pe-list-tile__subtitle",
  title: "pe-list-tile__title",
  contentFront: "pe-list-tile__content-front",
  // states  
  compact: "pe-list-tile--compact",
  compactFront: "pe-list-tile--compact-front",
  disabled: "pe-list-tile--disabled",
  hasFront: "pe-list-tile--front",
  hasHighSubtitle: "pe-list-tile--high-subtitle",
  hasSubtitle: "pe-list-tile--subtitle",
  header: "pe-list-tile--header",
  hoverable: "pe-list-tile--hoverable",
  insetH: "pe-list-tile--inset-h",
  insetV: "pe-list-tile--inset-v",
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
  rounded: "pe-list-tile--rounded",
  highlight: "pe-list-tile--highlight",
  sticky: "pe-list-tile--sticky",
  navigation: "pe-list-tile--navigation"
};

var menuClasses = {
  component: "pe-menu",
  // elements
  panel: "pe-menu__panel",
  content: "pe-menu__content",
  placeholder: "pe-menu__placeholder",
  backdrop: "pe-menu__backdrop",
  // states
  floating: "pe-menu--floating",
  origin: "pe-menu--origin",
  permanent: "pe-menu--permanent",
  showBackdrop: "pe-menu--backdrop",
  visible: "pe-menu--visible",
  width_auto: "pe-menu--width-auto",
  width_n: "pe-menu--width-",
  isTopMenu: "pe-menu--top-menu",
  // lookup
  listTile: listTileClasses.component,
  selectedListTile: listTileClasses.selected
};

var classes = {
  component: "pe-dialog",
  // elements
  placeholder: "pe-dialog__placeholder",
  holder: "pe-dialog__holder",
  content: "pe-dialog__content",
  backdrop: "pe-dialog__backdrop",
  touch: "pe-dialog__touch",
  // states
  fullScreen: "pe-dialog--full-screen",
  modal: "pe-dialog--modal",
  open: "pe-dialog--open",
  // class set to html element
  visible: "pe-dialog--visible",
  // class set to dialog element
  showBackdrop: "pe-dialog--backdrop",
  transition: "pe-dialog--transition",
  // lookup
  menuContent: menuClasses.content
};

var DialogInstance = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["cast"])(polythene_core_dialog__WEBPACK_IMPORTED_MODULE_2__["_Dialog"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["a"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["useState"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["useEffect"],
  useRef: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["useRef"],
  getRef: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["getRef"],
  useReducer: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["useReducer"],
  Shadow: polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_4__["Shadow"],
  Pane: polythene_mithril_dialog_pane__WEBPACK_IMPORTED_MODULE_3__["DialogPane"],
  openDialogsSelector: polythene_core_dialog__WEBPACK_IMPORTED_MODULE_2__["openDialogsSelector"]
});
DialogInstance["displayName"] = "DialogInstance";
var options = {
  name: "dialog",
  htmlShowClass: classes.open,
  defaultId: "default_dialog",
  holderSelector: "div.".concat(classes.holder),
  instance: DialogInstance,
  placeholder: "span.".concat(classes.placeholder)
};
var MultipleInstance = Object(polythene_core__WEBPACK_IMPORTED_MODULE_1__["Multi"])({
  options: options
});
var Dialog = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["cast"])(MultipleInstance.render, {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["h"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["useState"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["useEffect"]
});
Object.getOwnPropertyNames(MultipleInstance).filter(function (p) {
  return p !== "render";
}).forEach(function (p) {
  return Dialog[p] = MultipleInstance[p];
});
Dialog["displayName"] = "Dialog";




/***/ }),

/***/ "../node_modules/polythene-mithril-drawer/dist/polythene-mithril-drawer.mjs":
/*!**********************************************************************************!*\
  !*** ../node_modules/polythene-mithril-drawer/dist/polythene-mithril-drawer.mjs ***!
  \**********************************************************************************/
/*! exports provided: Drawer */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Drawer", function() { return Drawer; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../node_modules/polythene-core/dist/polythene-core.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cyano-mithril */ "../node_modules/cyano-mithril/dist/cyano-mithril.mjs");
/* harmony import */ var polythene_core_drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-core-drawer */ "../node_modules/polythene-core-drawer/dist/polythene-core-drawer.mjs");
/* harmony import */ var polythene_mithril_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-mithril-dialog */ "../node_modules/polythene-mithril-dialog/dist/polythene-mithril-dialog.mjs");





function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

var listTileClasses = {
  component: "pe-list-tile",
  // elements
  content: "pe-list-tile__content",
  highSubtitle: "pe-list-tile__high-subtitle",
  primary: "pe-list-tile__primary",
  secondary: "pe-list-tile__secondary",
  subtitle: "pe-list-tile__subtitle",
  title: "pe-list-tile__title",
  contentFront: "pe-list-tile__content-front",
  // states  
  compact: "pe-list-tile--compact",
  compactFront: "pe-list-tile--compact-front",
  disabled: "pe-list-tile--disabled",
  hasFront: "pe-list-tile--front",
  hasHighSubtitle: "pe-list-tile--high-subtitle",
  hasSubtitle: "pe-list-tile--subtitle",
  header: "pe-list-tile--header",
  hoverable: "pe-list-tile--hoverable",
  insetH: "pe-list-tile--inset-h",
  insetV: "pe-list-tile--inset-v",
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
  rounded: "pe-list-tile--rounded",
  highlight: "pe-list-tile--highlight",
  sticky: "pe-list-tile--sticky",
  navigation: "pe-list-tile--navigation"
};

var menuClasses = {
  component: "pe-menu",
  // elements
  panel: "pe-menu__panel",
  content: "pe-menu__content",
  placeholder: "pe-menu__placeholder",
  backdrop: "pe-menu__backdrop",
  // states
  floating: "pe-menu--floating",
  origin: "pe-menu--origin",
  permanent: "pe-menu--permanent",
  showBackdrop: "pe-menu--backdrop",
  visible: "pe-menu--visible",
  width_auto: "pe-menu--width-auto",
  width_n: "pe-menu--width-",
  isTopMenu: "pe-menu--top-menu",
  // lookup
  listTile: listTileClasses.component,
  selectedListTile: listTileClasses.selected
};

var dialogClasses = {
  component: "pe-dialog",
  // elements
  placeholder: "pe-dialog__placeholder",
  holder: "pe-dialog__holder",
  content: "pe-dialog__content",
  backdrop: "pe-dialog__backdrop",
  touch: "pe-dialog__touch",
  // states
  fullScreen: "pe-dialog--full-screen",
  modal: "pe-dialog--modal",
  open: "pe-dialog--open",
  // class set to html element
  visible: "pe-dialog--visible",
  // class set to dialog element
  showBackdrop: "pe-dialog--backdrop",
  transition: "pe-dialog--transition",
  // lookup
  menuContent: menuClasses.content
};

var classes = {
  component: "pe-dialog pe-drawer",
  // states
  cover: "pe-drawer--cover",
  push: "pe-drawer--push",
  mini: "pe-drawer--mini",
  permanent: "pe-drawer--permanent",
  border: "pe-drawer--border",
  floating: "pe-drawer--floating",
  fixed: "pe-drawer--fixed",
  anchorEnd: "pe-drawer--anchor-end",
  visible: dialogClasses.visible
};

var DrawerInstance = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["cast"])(polythene_core_drawer__WEBPACK_IMPORTED_MODULE_2__["_Drawer"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["h"],
  Dialog: polythene_mithril_dialog__WEBPACK_IMPORTED_MODULE_3__["DialogInstance"],
  openDialogsSelector: polythene_core_drawer__WEBPACK_IMPORTED_MODULE_2__["openDialogsSelector"]
});
DrawerInstance["displayName"] = "DrawerInstance";
var DrawerToggle = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["cast"])(polythene_core__WEBPACK_IMPORTED_MODULE_0__["_Conditional"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["h"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useState"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useEffect"]
});
DrawerToggle["displayName"] = "DrawerToggle";
var Drawer = {
  view: function view(vnode) {
    return Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["h"])(DrawerToggle, _objectSpread({}, vnode.attrs, {
      placeholderClassName: classes.placeholder,
      instance: DrawerInstance,
      permanent: vnode.attrs.permanent || vnode.attrs.mini // passed to Conditional

    }));
  }
};
Drawer["displayName"] = "Drawer";




/***/ }),

/***/ "../node_modules/polythene-mithril-fab/dist/polythene-mithril-fab.mjs":
/*!****************************************************************************!*\
  !*** ../node_modules/polythene-mithril-fab/dist/polythene-mithril-fab.mjs ***!
  \****************************************************************************/
/*! exports provided: FAB */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAB", function() { return FAB; });
/* harmony import */ var polythene_core_fab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-fab */ "../node_modules/polythene-core-fab/dist/polythene-core-fab.mjs");
/* harmony import */ var polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-mithril-icon */ "../node_modules/polythene-mithril-icon/dist/polythene-mithril-icon.mjs");
/* harmony import */ var polythene_mithril_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-mithril-button */ "../node_modules/polythene-mithril-button/dist/polythene-mithril-button.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cyano-mithril */ "../node_modules/cyano-mithril/dist/cyano-mithril.mjs");





var FAB = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_3__["cast"])(polythene_core_fab__WEBPACK_IMPORTED_MODULE_0__["_FAB"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_3__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_3__["a"],
  Button: polythene_mithril_button__WEBPACK_IMPORTED_MODULE_2__["Button"],
  Icon: polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"]
});
FAB["displayName"] = "FAB";




/***/ }),

/***/ "../node_modules/polythene-mithril-icon-button/dist/polythene-mithril-icon-button.mjs":
/*!********************************************************************************************!*\
  !*** ../node_modules/polythene-mithril-icon-button/dist/polythene-mithril-icon-button.mjs ***!
  \********************************************************************************************/
/*! exports provided: IconButton */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconButton", function() { return IconButton; });
/* harmony import */ var polythene_core_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-icon-button */ "../node_modules/polythene-core-icon-button/dist/polythene-core-icon-button.mjs");
/* harmony import */ var polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-mithril-icon */ "../node_modules/polythene-mithril-icon/dist/polythene-mithril-icon.mjs");
/* harmony import */ var polythene_mithril_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-mithril-button */ "../node_modules/polythene-mithril-button/dist/polythene-mithril-button.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cyano-mithril */ "../node_modules/cyano-mithril/dist/cyano-mithril.mjs");





var IconButton = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_3__["cast"])(polythene_core_icon_button__WEBPACK_IMPORTED_MODULE_0__["_IconButton"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_3__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_3__["a"],
  Icon: polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"],
  Button: polythene_mithril_button__WEBPACK_IMPORTED_MODULE_2__["Button"]
});




/***/ }),

/***/ "../node_modules/polythene-mithril-icon/dist/polythene-mithril-icon.mjs":
/*!******************************************************************************!*\
  !*** ../node_modules/polythene-mithril-icon/dist/polythene-mithril-icon.mjs ***!
  \******************************************************************************/
/*! exports provided: Icon */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony import */ var polythene_core_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-icon */ "../node_modules/polythene-core-icon/dist/polythene-core-icon.mjs");
/* harmony import */ var polythene_mithril_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-mithril-svg */ "../node_modules/polythene-mithril-svg/dist/polythene-mithril-svg.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cyano-mithril */ "../node_modules/cyano-mithril/dist/cyano-mithril.mjs");




var Icon = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["cast"])(polythene_core_icon__WEBPACK_IMPORTED_MODULE_0__["_Icon"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["a"],
  SVG: polythene_mithril_svg__WEBPACK_IMPORTED_MODULE_1__["SVG"]
});
Icon["displayName"] = "Icon";




/***/ }),

/***/ "../node_modules/polythene-mithril-ios-spinner/dist/polythene-mithril-ios-spinner.mjs":
/*!********************************************************************************************!*\
  !*** ../node_modules/polythene-mithril-ios-spinner/dist/polythene-mithril-ios-spinner.mjs ***!
  \********************************************************************************************/
/*! exports provided: IOSSpinner */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IOSSpinner", function() { return IOSSpinner; });
/* harmony import */ var polythene_mithril_base_spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-mithril-base-spinner */ "../node_modules/polythene-mithril-base-spinner/dist/polythene-mithril-base-spinner.mjs");
/* harmony import */ var polythene_core_ios_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core-ios-spinner */ "../node_modules/polythene-core-ios-spinner/dist/polythene-core-ios-spinner.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cyano-mithril */ "../node_modules/cyano-mithril/dist/cyano-mithril.mjs");
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-core */ "../node_modules/polythene-core/dist/polythene-core.mjs");





function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

var classes = {
  component: "pe-ios-spinner",
  // elements
  blades: "pe-ios-spinner__blades",
  blade: "pe-ios-spinner__blade"
};

var baseSpinnerClasses = {
  component: "pe-spinner",
  // elements
  animation: "pe-spinner__animation",
  placeholder: "pe-spinner__placeholder",
  // states
  animated: "pe-spinner--animated",
  fab: "pe-spinner--fab",
  large: "pe-spinner--large",
  medium: "pe-spinner--medium",
  permanent: "pe-spinner--permanent",
  raised: "pe-spinner--raised",
  regular: "pe-spinner--regular",
  singleColor: "pe-spinner--single-color",
  small: "pe-spinner--small",
  visible: "pe-spinner--visible"
};

var Spinner = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["cast"])(polythene_core_ios_spinner__WEBPACK_IMPORTED_MODULE_1__["_Spinner"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["h"],
  BaseSpinner: polythene_mithril_base_spinner__WEBPACK_IMPORTED_MODULE_0__["BaseSpinner"]
});
var SpinnerToggle = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["cast"])(polythene_core__WEBPACK_IMPORTED_MODULE_3__["_Conditional"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["h"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["useState"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["useEffect"]
});
SpinnerToggle["displayName"] = "IOSSpinnerToggle";
var IOSSpinner = {
  view: function view(vnode) {
    return Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["h"])(SpinnerToggle, _objectSpread({}, vnode.attrs, {
      placeholderClassName: baseSpinnerClasses.placeholder,
      instance: Spinner
    }));
  }
};
IOSSpinner["classes"] = classes;
IOSSpinner["displayName"] = "IOSSpinner";




/***/ }),

/***/ "../node_modules/polythene-mithril-list-tile/dist/polythene-mithril-list-tile.mjs":
/*!****************************************************************************************!*\
  !*** ../node_modules/polythene-mithril-list-tile/dist/polythene-mithril-list-tile.mjs ***!
  \****************************************************************************************/
/*! exports provided: ListTile */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTile", function() { return ListTile; });
/* harmony import */ var polythene_core_list_tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-list-tile */ "../node_modules/polythene-core-list-tile/dist/polythene-core-list-tile.mjs");
/* harmony import */ var polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-mithril-icon */ "../node_modules/polythene-mithril-icon/dist/polythene-mithril-icon.mjs");
/* harmony import */ var polythene_mithril_ripple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-mithril-ripple */ "../node_modules/polythene-mithril-ripple/dist/polythene-mithril-ripple.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cyano-mithril */ "../node_modules/cyano-mithril/dist/cyano-mithril.mjs");





var ListTile = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_3__["cast"])(polythene_core_list_tile__WEBPACK_IMPORTED_MODULE_0__["_ListTile"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_3__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_3__["a"],
  Icon: polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"],
  Ripple: polythene_mithril_ripple__WEBPACK_IMPORTED_MODULE_2__["Ripple"]
});
ListTile["displayName"] = "ListTile";




/***/ }),

/***/ "../node_modules/polythene-mithril-list/dist/polythene-mithril-list.mjs":
/*!******************************************************************************!*\
  !*** ../node_modules/polythene-mithril-list/dist/polythene-mithril-list.mjs ***!
  \******************************************************************************/
/*! exports provided: List */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony import */ var polythene_core_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-list */ "../node_modules/polythene-core-list/dist/polythene-core-list.mjs");
/* harmony import */ var polythene_mithril_list_tile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-mithril-list-tile */ "../node_modules/polythene-mithril-list-tile/dist/polythene-mithril-list-tile.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cyano-mithril */ "../node_modules/cyano-mithril/dist/cyano-mithril.mjs");




var List = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["cast"])(polythene_core_list__WEBPACK_IMPORTED_MODULE_0__["_List"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["a"],
  ListTile: polythene_mithril_list_tile__WEBPACK_IMPORTED_MODULE_1__["ListTile"]
});
List["displayName"] = "List";




/***/ }),

/***/ "../node_modules/polythene-mithril-material-design-progress-spinner/dist/polythene-mithril-material-design-progress-spinner.mjs":
/*!**************************************************************************************************************************************!*\
  !*** ../node_modules/polythene-mithril-material-design-progress-spinner/dist/polythene-mithril-material-design-progress-spinner.mjs ***!
  \**************************************************************************************************************************************/
/*! exports provided: MaterialDesignProgressSpinner */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialDesignProgressSpinner", function() { return MaterialDesignProgressSpinner; });
/* harmony import */ var polythene_mithril_base_spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-mithril-base-spinner */ "../node_modules/polythene-mithril-base-spinner/dist/polythene-mithril-base-spinner.mjs");
/* harmony import */ var polythene_core_material_design_progress_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core-material-design-progress-spinner */ "../node_modules/polythene-core-material-design-progress-spinner/dist/polythene-core-material-design-progress-spinner.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cyano-mithril */ "../node_modules/cyano-mithril/dist/cyano-mithril.mjs");
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-core */ "../node_modules/polythene-core/dist/polythene-core.mjs");





function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

var classes = {
  component: "pe-md-progress-spinner",
  // elements
  animation: "pe-md-progress-spinner__animation",
  circle: "pe-md-progress-spinner__circle",
  circleRight: "pe-md-progress-spinner__circle-right",
  circleLeft: "pe-md-progress-spinner__circle-left"
};

var baseSpinnerClasses = {
  component: "pe-spinner",
  // elements
  animation: "pe-spinner__animation",
  placeholder: "pe-spinner__placeholder",
  // states
  animated: "pe-spinner--animated",
  fab: "pe-spinner--fab",
  large: "pe-spinner--large",
  medium: "pe-spinner--medium",
  permanent: "pe-spinner--permanent",
  raised: "pe-spinner--raised",
  regular: "pe-spinner--regular",
  singleColor: "pe-spinner--single-color",
  small: "pe-spinner--small",
  visible: "pe-spinner--visible"
};

var Spinner = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["cast"])(polythene_core_material_design_progress_spinner__WEBPACK_IMPORTED_MODULE_1__["_Spinner"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["h"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["useState"],
  useRef: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["useRef"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["useEffect"],
  BaseSpinner: polythene_mithril_base_spinner__WEBPACK_IMPORTED_MODULE_0__["BaseSpinner"]
});
var SpinnerToggle = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["cast"])(polythene_core__WEBPACK_IMPORTED_MODULE_3__["_Conditional"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["h"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["useState"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["useEffect"]
});
SpinnerToggle["displayName"] = "MaterialDesignProgressSpinnerToggle";
var MaterialDesignProgressSpinner = {
  view: function view(vnode) {
    return Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["h"])(SpinnerToggle, _objectSpread({}, vnode.attrs, {
      placeholderClassName: baseSpinnerClasses.placeholder,
      instance: Spinner
    }));
  }
};
MaterialDesignProgressSpinner["classes"] = classes;
MaterialDesignProgressSpinner["displayName"] = "MaterialDesignProgressSpinner";




/***/ }),

/***/ "../node_modules/polythene-mithril-material-design-spinner/dist/polythene-mithril-material-design-spinner.mjs":
/*!********************************************************************************************************************!*\
  !*** ../node_modules/polythene-mithril-material-design-spinner/dist/polythene-mithril-material-design-spinner.mjs ***!
  \********************************************************************************************************************/
/*! exports provided: MaterialDesignSpinner */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialDesignSpinner", function() { return MaterialDesignSpinner; });
/* harmony import */ var polythene_mithril_base_spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-mithril-base-spinner */ "../node_modules/polythene-mithril-base-spinner/dist/polythene-mithril-base-spinner.mjs");
/* harmony import */ var polythene_core_material_design_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core-material-design-spinner */ "../node_modules/polythene-core-material-design-spinner/dist/polythene-core-material-design-spinner.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cyano-mithril */ "../node_modules/cyano-mithril/dist/cyano-mithril.mjs");
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-core */ "../node_modules/polythene-core/dist/polythene-core.mjs");





function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

var classes = {
  component: "pe-md-spinner",
  // elements
  animation: "pe-md-spinner__animation",
  circle: "pe-md-spinner__circle",
  circleClipper: "pe-md-spinner__circle-clipper",
  circleClipperLeft: "pe-md-spinner__circle-clipper-left",
  circleClipperRight: "pe-md-spinner__circle-clipper-right",
  gapPatch: "pe-md-spinner__gap-patch",
  layer: "pe-md-spinner__layer",
  layerN: "pe-md-spinner__layer-"
};

var baseSpinnerClasses = {
  component: "pe-spinner",
  // elements
  animation: "pe-spinner__animation",
  placeholder: "pe-spinner__placeholder",
  // states
  animated: "pe-spinner--animated",
  fab: "pe-spinner--fab",
  large: "pe-spinner--large",
  medium: "pe-spinner--medium",
  permanent: "pe-spinner--permanent",
  raised: "pe-spinner--raised",
  regular: "pe-spinner--regular",
  singleColor: "pe-spinner--single-color",
  small: "pe-spinner--small",
  visible: "pe-spinner--visible"
};

var Spinner = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["cast"])(polythene_core_material_design_spinner__WEBPACK_IMPORTED_MODULE_1__["_Spinner"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["h"],
  BaseSpinner: polythene_mithril_base_spinner__WEBPACK_IMPORTED_MODULE_0__["BaseSpinner"]
});
var SpinnerToggle = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["cast"])(polythene_core__WEBPACK_IMPORTED_MODULE_3__["_Conditional"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["h"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["useState"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["useEffect"]
});
SpinnerToggle["displayName"] = "MaterialDesignSpinnerToggle";
var MaterialDesignSpinner = {
  view: function view(vnode) {
    return Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["h"])(SpinnerToggle, _objectSpread({}, vnode.attrs, {
      placeholderClassName: baseSpinnerClasses.placeholder,
      instance: Spinner
    }));
  }
};
MaterialDesignSpinner["classes"] = classes;
MaterialDesignSpinner["displayName"] = "MaterialDesignSpinner";




/***/ }),

/***/ "../node_modules/polythene-mithril-menu/dist/polythene-mithril-menu.mjs":
/*!******************************************************************************!*\
  !*** ../node_modules/polythene-mithril-menu/dist/polythene-mithril-menu.mjs ***!
  \******************************************************************************/
/*! exports provided: Menu */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../node_modules/polythene-core/dist/polythene-core.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cyano-mithril */ "../node_modules/cyano-mithril/dist/cyano-mithril.mjs");
/* harmony import */ var polythene_core_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-core-menu */ "../node_modules/polythene-core-menu/dist/polythene-core-menu.mjs");
/* harmony import */ var polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-mithril-shadow */ "../node_modules/polythene-mithril-shadow/dist/polythene-mithril-shadow.mjs");





function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

var listTileClasses = {
  component: "pe-list-tile",
  // elements
  content: "pe-list-tile__content",
  highSubtitle: "pe-list-tile__high-subtitle",
  primary: "pe-list-tile__primary",
  secondary: "pe-list-tile__secondary",
  subtitle: "pe-list-tile__subtitle",
  title: "pe-list-tile__title",
  contentFront: "pe-list-tile__content-front",
  // states  
  compact: "pe-list-tile--compact",
  compactFront: "pe-list-tile--compact-front",
  disabled: "pe-list-tile--disabled",
  hasFront: "pe-list-tile--front",
  hasHighSubtitle: "pe-list-tile--high-subtitle",
  hasSubtitle: "pe-list-tile--subtitle",
  header: "pe-list-tile--header",
  hoverable: "pe-list-tile--hoverable",
  insetH: "pe-list-tile--inset-h",
  insetV: "pe-list-tile--inset-v",
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
  rounded: "pe-list-tile--rounded",
  highlight: "pe-list-tile--highlight",
  sticky: "pe-list-tile--sticky",
  navigation: "pe-list-tile--navigation"
};

var classes = {
  component: "pe-menu",
  // elements
  panel: "pe-menu__panel",
  content: "pe-menu__content",
  placeholder: "pe-menu__placeholder",
  backdrop: "pe-menu__backdrop",
  // states
  floating: "pe-menu--floating",
  origin: "pe-menu--origin",
  permanent: "pe-menu--permanent",
  showBackdrop: "pe-menu--backdrop",
  visible: "pe-menu--visible",
  width_auto: "pe-menu--width-auto",
  width_n: "pe-menu--width-",
  isTopMenu: "pe-menu--top-menu",
  // lookup
  listTile: listTileClasses.component,
  selectedListTile: listTileClasses.selected
};

var MenuInstance = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["cast"])(polythene_core_menu__WEBPACK_IMPORTED_MODULE_2__["_Menu"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["a"],
  useReducer: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useReducer"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useState"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useEffect"],
  useRef: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useRef"],
  getRef: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["getRef"],
  Shadow: polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_3__["Shadow"]
});
var MenuToggle = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["cast"])(polythene_core__WEBPACK_IMPORTED_MODULE_0__["_Conditional"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["h"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useState"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useEffect"]
});
MenuToggle["displayName"] = "MenuToggle";
var Menu = {
  view: function view(vnode) {
    return Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["h"])(MenuToggle, _objectSpread({}, vnode.attrs, {
      placeholderClassName: classes.placeholder,
      instance: MenuInstance
    }));
  }
};
Menu["displayName"] = "Menu";




/***/ }),

/***/ "../node_modules/polythene-mithril-notification/dist/polythene-mithril-notification.mjs":
/*!**********************************************************************************************!*\
  !*** ../node_modules/polythene-mithril-notification/dist/polythene-mithril-notification.mjs ***!
  \**********************************************************************************************/
/*! exports provided: Notification, NotificationInstance */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return Notification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationInstance", function() { return NotificationInstance; });
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cyano-mithril */ "../node_modules/cyano-mithril/dist/cyano-mithril.mjs");
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core */ "../node_modules/polythene-core/dist/polythene-core.mjs");
/* harmony import */ var polythene_core_notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-core-notification */ "../node_modules/polythene-core-notification/dist/polythene-core-notification.mjs");




var classes = {
  component: "pe-notification",
  // elements
  action: "pe-notification__action",
  content: "pe-notification__content",
  holder: "pe-notification__holder",
  placeholder: "pe-notification__placeholder",
  title: "pe-notification__title",
  // states
  hasContainer: "pe-notification--container",
  horizontal: "pe-notification--horizontal",
  multilineTitle: "pe-notification__title--multi-line",
  vertical: "pe-notification--vertical",
  visible: "pe-notification--visible"
};

var NotificationInstance = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["cast"])(polythene_core_notification__WEBPACK_IMPORTED_MODULE_2__["_Notification"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["a"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["useState"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["useEffect"],
  useRef: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["useRef"],
  getRef: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["getRef"],
  useReducer: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["useReducer"]
});
NotificationInstance["displayName"] = "NotificationInstance";
var options = {
  name: "notification",
  className: classes.component,
  htmlShowClass: classes.open,
  defaultId: "default_notification",
  holderSelector: ".".concat(classes.holder),
  instance: NotificationInstance,
  placeholder: "span.".concat(classes.placeholder),
  queue: true
};
var MultipleInstance = Object(polythene_core__WEBPACK_IMPORTED_MODULE_1__["Multi"])({
  options: options
});
var Notification = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["cast"])(MultipleInstance.render, {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["h"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["useState"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["useEffect"]
});
Object.getOwnPropertyNames(MultipleInstance).filter(function (p) {
  return p !== "render";
}).forEach(function (p) {
  return Notification[p] = MultipleInstance[p];
});
Notification["displayName"] = "Notification";




/***/ }),

/***/ "../node_modules/polythene-mithril-radio-button/dist/polythene-mithril-radio-button.mjs":
/*!**********************************************************************************************!*\
  !*** ../node_modules/polythene-mithril-radio-button/dist/polythene-mithril-radio-button.mjs ***!
  \**********************************************************************************************/
/*! exports provided: RadioButton */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioButton", function() { return RadioButton; });
/* harmony import */ var polythene_core_radio_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-radio-button */ "../node_modules/polythene-core-radio-button/dist/polythene-core-radio-button.mjs");
/* harmony import */ var polythene_core_selection_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core-selection-control */ "../node_modules/polythene-core-selection-control/dist/polythene-core-selection-control.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cyano-mithril */ "../node_modules/cyano-mithril/dist/cyano-mithril.mjs");
/* harmony import */ var polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-mithril-icon */ "../node_modules/polythene-mithril-icon/dist/polythene-mithril-icon.mjs");
/* harmony import */ var polythene_mithril_icon_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! polythene-mithril-icon-button */ "../node_modules/polythene-mithril-icon-button/dist/polythene-mithril-icon-button.mjs");






var ViewControl = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["cast"])(polythene_core_selection_control__WEBPACK_IMPORTED_MODULE_1__["_ViewControl"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["a"],
  Icon: polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_3__["Icon"],
  IconButton: polythene_mithril_icon_button__WEBPACK_IMPORTED_MODULE_4__["IconButton"]
});
ViewControl["displayName"] = "ViewControl";
var SelectionControl = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["cast"])(polythene_core_selection_control__WEBPACK_IMPORTED_MODULE_1__["_SelectionControl"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["a"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["useState"],
  ViewControl: ViewControl
});
SelectionControl["displayName"] = "SelectionControl";
var RadioButton = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["cast"])(polythene_core_radio_button__WEBPACK_IMPORTED_MODULE_0__["_RadioButton"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["a"],
  SelectionControl: SelectionControl
});
RadioButton["displayName"] = "RadioButton";




/***/ }),

/***/ "../node_modules/polythene-mithril-radio-group/dist/polythene-mithril-radio-group.mjs":
/*!********************************************************************************************!*\
  !*** ../node_modules/polythene-mithril-radio-group/dist/polythene-mithril-radio-group.mjs ***!
  \********************************************************************************************/
/*! exports provided: RadioGroup */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return RadioGroup; });
/* harmony import */ var polythene_core_radio_group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-radio-group */ "../node_modules/polythene-core-radio-group/dist/polythene-core-radio-group.mjs");
/* harmony import */ var polythene_mithril_radio_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-mithril-radio-button */ "../node_modules/polythene-mithril-radio-button/dist/polythene-mithril-radio-button.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cyano-mithril */ "../node_modules/cyano-mithril/dist/cyano-mithril.mjs");




var RadioGroup = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["cast"])(polythene_core_radio_group__WEBPACK_IMPORTED_MODULE_0__["_RadioGroup"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["a"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["useState"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["useEffect"],
  RadioButton: polythene_mithril_radio_button__WEBPACK_IMPORTED_MODULE_1__["RadioButton"]
});
RadioGroup["displayName"] = "RadioGroup";




/***/ }),

/***/ "../node_modules/polythene-mithril-raised-button/dist/polythene-mithril-raised-button.mjs":
/*!************************************************************************************************!*\
  !*** ../node_modules/polythene-mithril-raised-button/dist/polythene-mithril-raised-button.mjs ***!
  \************************************************************************************************/
/*! exports provided: RaisedButton */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaisedButton", function() { return RaisedButton; });
/* harmony import */ var polythene_mithril_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-mithril-button */ "../node_modules/polythene-mithril-button/dist/polythene-mithril-button.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cyano-mithril */ "../node_modules/cyano-mithril/dist/cyano-mithril.mjs");



function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

var RaisedButton = {
  view: function view(vnode) {
    return Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["h"])(polythene_mithril_button__WEBPACK_IMPORTED_MODULE_0__["Button"], _objectSpread({
      raised: true
    }, vnode.attrs), vnode.children);
  }
};
RaisedButton["displayName"] = "RaisedButton";




/***/ }),

/***/ "../node_modules/polythene-mithril-ripple/dist/polythene-mithril-ripple.mjs":
/*!**********************************************************************************!*\
  !*** ../node_modules/polythene-mithril-ripple/dist/polythene-mithril-ripple.mjs ***!
  \**********************************************************************************/
/*! exports provided: Ripple */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ripple", function() { return Ripple; });
/* harmony import */ var polythene_core_ripple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-ripple */ "../node_modules/polythene-core-ripple/dist/polythene-core-ripple.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cyano-mithril */ "../node_modules/cyano-mithril/dist/cyano-mithril.mjs");



var Ripple = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["cast"])(polythene_core_ripple__WEBPACK_IMPORTED_MODULE_0__["_Ripple"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["a"],
  getRef: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["getRef"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useState"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useEffect"]
});
Ripple["displayName"] = "Ripple";




/***/ }),

/***/ "../node_modules/polythene-mithril-search/dist/polythene-mithril-search.mjs":
/*!**********************************************************************************!*\
  !*** ../node_modules/polythene-mithril-search/dist/polythene-mithril-search.mjs ***!
  \**********************************************************************************/
/*! exports provided: Search */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return Search; });
/* harmony import */ var polythene_core_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-search */ "../node_modules/polythene-core-search/dist/polythene-core-search.mjs");
/* harmony import */ var polythene_mithril_textfield__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-mithril-textfield */ "../node_modules/polythene-mithril-textfield/dist/polythene-mithril-textfield.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cyano-mithril */ "../node_modules/cyano-mithril/dist/cyano-mithril.mjs");




var Search = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["cast"])(polythene_core_search__WEBPACK_IMPORTED_MODULE_0__["_Search"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["a"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["useState"],
  TextField: polythene_mithril_textfield__WEBPACK_IMPORTED_MODULE_1__["TextField"]
});
Search["displayName"] = "Search";




/***/ }),

/***/ "../node_modules/polythene-mithril-shadow/dist/polythene-mithril-shadow.mjs":
/*!**********************************************************************************!*\
  !*** ../node_modules/polythene-mithril-shadow/dist/polythene-mithril-shadow.mjs ***!
  \**********************************************************************************/
/*! exports provided: Shadow */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shadow", function() { return Shadow; });
/* harmony import */ var polythene_core_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-shadow */ "../node_modules/polythene-core-shadow/dist/polythene-core-shadow.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cyano-mithril */ "../node_modules/cyano-mithril/dist/cyano-mithril.mjs");



var Shadow = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["cast"])(polythene_core_shadow__WEBPACK_IMPORTED_MODULE_0__["_Shadow"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["a"]
});
Shadow["displayName"] = "Shadow";




/***/ }),

/***/ "../node_modules/polythene-mithril-slider/dist/polythene-mithril-slider.mjs":
/*!**********************************************************************************!*\
  !*** ../node_modules/polythene-mithril-slider/dist/polythene-mithril-slider.mjs ***!
  \**********************************************************************************/
/*! exports provided: Slider */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return Slider; });
/* harmony import */ var polythene_core_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-slider */ "../node_modules/polythene-core-slider/dist/polythene-core-slider.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cyano-mithril */ "../node_modules/cyano-mithril/dist/cyano-mithril.mjs");



var Slider = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["cast"])(polythene_core_slider__WEBPACK_IMPORTED_MODULE_0__["_Slider"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["a"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useState"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useEffect"],
  useRef: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useRef"],
  getRef: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["getRef"]
});
Slider["displayName"] = "Slider";




/***/ }),

/***/ "../node_modules/polythene-mithril-snackbar/dist/polythene-mithril-snackbar.mjs":
/*!**************************************************************************************!*\
  !*** ../node_modules/polythene-mithril-snackbar/dist/polythene-mithril-snackbar.mjs ***!
  \**************************************************************************************/
/*! exports provided: Snackbar, SnackbarInstance */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Snackbar", function() { return Snackbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarInstance", function() { return SnackbarInstance; });
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cyano-mithril */ "../node_modules/cyano-mithril/dist/cyano-mithril.mjs");
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core */ "../node_modules/polythene-core/dist/polythene-core.mjs");
/* harmony import */ var polythene_core_snackbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-core-snackbar */ "../node_modules/polythene-core-snackbar/dist/polythene-core-snackbar.mjs");




function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

var notificationClasses = {
  component: "pe-notification",
  // elements
  action: "pe-notification__action",
  content: "pe-notification__content",
  holder: "pe-notification__holder",
  placeholder: "pe-notification__placeholder",
  title: "pe-notification__title",
  // states
  hasContainer: "pe-notification--container",
  horizontal: "pe-notification--horizontal",
  multilineTitle: "pe-notification__title--multi-line",
  vertical: "pe-notification--vertical",
  visible: "pe-notification--visible"
};

var classes = _objectSpread({}, notificationClasses, {
  component: "pe-notification pe-snackbar",
  // elements
  holder: "pe-snackbar__holder",
  placeholder: "pe-snackbar__placeholder",
  // states
  open: "pe-snackbar--open"
});

var SnackbarInstance = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["cast"])(polythene_core_snackbar__WEBPACK_IMPORTED_MODULE_2__["_Snackbar"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["a"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["useState"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["useEffect"],
  useRef: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["useRef"],
  getRef: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["getRef"],
  useReducer: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["useReducer"]
});
SnackbarInstance["displayName"] = "SnackbarInstance";
var options = {
  name: "snackbar",
  className: classes.component,
  htmlShowClass: classes.open,
  defaultId: "default_snackbar",
  holderSelector: ".".concat(classes.holder),
  instance: SnackbarInstance,
  placeholder: "span.".concat(classes.placeholder),
  queue: true,
  transitions: polythene_core_snackbar__WEBPACK_IMPORTED_MODULE_2__["transitions"]
};
var MultipleInstance = Object(polythene_core__WEBPACK_IMPORTED_MODULE_1__["Multi"])({
  options: options
});
var Snackbar = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["cast"])(MultipleInstance.render, {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["h"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["useState"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["useEffect"]
});
Object.getOwnPropertyNames(MultipleInstance).filter(function (p) {
  return p !== "render";
}).forEach(function (p) {
  return Snackbar[p] = MultipleInstance[p];
});
Snackbar["displayName"] = "Snackbar";




/***/ }),

/***/ "../node_modules/polythene-mithril-svg/dist/polythene-mithril-svg.mjs":
/*!****************************************************************************!*\
  !*** ../node_modules/polythene-mithril-svg/dist/polythene-mithril-svg.mjs ***!
  \****************************************************************************/
/*! exports provided: SVG */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVG", function() { return SVG; });
/* harmony import */ var polythene_core_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-svg */ "../node_modules/polythene-core-svg/dist/polythene-core-svg.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cyano-mithril */ "../node_modules/cyano-mithril/dist/cyano-mithril.mjs");



var SVG = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["cast"])(polythene_core_svg__WEBPACK_IMPORTED_MODULE_0__["_SVG"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["a"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useEffect"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useState"],
  getRef: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["getRef"]
});




/***/ }),

/***/ "../node_modules/polythene-mithril-switch/dist/polythene-mithril-switch.mjs":
/*!**********************************************************************************!*\
  !*** ../node_modules/polythene-mithril-switch/dist/polythene-mithril-switch.mjs ***!
  \**********************************************************************************/
/*! exports provided: Switch */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return Switch; });
/* harmony import */ var polythene_core_switch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-switch */ "../node_modules/polythene-core-switch/dist/polythene-core-switch.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cyano-mithril */ "../node_modules/cyano-mithril/dist/cyano-mithril.mjs");
/* harmony import */ var polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-mithril-shadow */ "../node_modules/polythene-mithril-shadow/dist/polythene-mithril-shadow.mjs");
/* harmony import */ var polythene_mithril_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-mithril-icon-button */ "../node_modules/polythene-mithril-icon-button/dist/polythene-mithril-icon-button.mjs");
/* harmony import */ var polythene_core_selection_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! polythene-core-selection-control */ "../node_modules/polythene-core-selection-control/dist/polythene-core-selection-control.mjs");






var ViewControl = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["cast"])(polythene_core_switch__WEBPACK_IMPORTED_MODULE_0__["_ViewControl"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["a"],
  Shadow: polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_2__["Shadow"],
  IconButton: polythene_mithril_icon_button__WEBPACK_IMPORTED_MODULE_3__["IconButton"]
});
ViewControl["displayName"] = "ViewControl";
var SelectionControl = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["cast"])(polythene_core_selection_control__WEBPACK_IMPORTED_MODULE_4__["_SelectionControl"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["a"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useState"],
  ViewControl: ViewControl
});
SelectionControl["displayName"] = "SelectionControl";
var Switch = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["cast"])(polythene_core_switch__WEBPACK_IMPORTED_MODULE_0__["_Switch"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["a"],
  SelectionControl: SelectionControl
});
Switch["displayName"] = "Switch";




/***/ }),

/***/ "../node_modules/polythene-mithril-tabs/dist/polythene-mithril-tabs.mjs":
/*!******************************************************************************!*\
  !*** ../node_modules/polythene-mithril-tabs/dist/polythene-mithril-tabs.mjs ***!
  \******************************************************************************/
/*! exports provided: Tabs */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return Tabs; });
/* harmony import */ var polythene_core_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-tabs */ "../node_modules/polythene-core-tabs/dist/polythene-core-tabs.mjs");
/* harmony import */ var polythene_mithril_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-mithril-button */ "../node_modules/polythene-mithril-button/dist/polythene-mithril-button.mjs");
/* harmony import */ var polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-mithril-icon */ "../node_modules/polythene-mithril-icon/dist/polythene-mithril-icon.mjs");
/* harmony import */ var polythene_mithril_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-mithril-icon-button */ "../node_modules/polythene-mithril-icon-button/dist/polythene-mithril-icon-button.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cyano-mithril */ "../node_modules/cyano-mithril/dist/cyano-mithril.mjs");






var ScrollButton = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_4__["cast"])(polythene_core_tabs__WEBPACK_IMPORTED_MODULE_0__["_ScrollButton"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_4__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_4__["a"],
  IconButton: polythene_mithril_icon_button__WEBPACK_IMPORTED_MODULE_3__["IconButton"]
});
var Tab = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_4__["cast"])(polythene_core_tabs__WEBPACK_IMPORTED_MODULE_0__["_Tab"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_4__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_4__["a"],
  Button: polythene_mithril_button__WEBPACK_IMPORTED_MODULE_1__["Button"],
  Icon: polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_2__["Icon"]
});
var Tabs = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_4__["cast"])(polythene_core_tabs__WEBPACK_IMPORTED_MODULE_0__["_Tabs"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_4__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_4__["a"],
  getRef: cyano_mithril__WEBPACK_IMPORTED_MODULE_4__["getRef"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_4__["useState"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_4__["useEffect"],
  ScrollButton: ScrollButton,
  Tab: Tab
});
Tabs["displayName"] = "Tabs";




/***/ }),

/***/ "../node_modules/polythene-mithril-textfield/dist/polythene-mithril-textfield.mjs":
/*!****************************************************************************************!*\
  !*** ../node_modules/polythene-mithril-textfield/dist/polythene-mithril-textfield.mjs ***!
  \****************************************************************************************/
/*! exports provided: TextField */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextField", function() { return TextField; });
/* harmony import */ var polythene_core_textfield__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-textfield */ "../node_modules/polythene-core-textfield/dist/polythene-core-textfield.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cyano-mithril */ "../node_modules/cyano-mithril/dist/cyano-mithril.mjs");



var TextField = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["cast"])(polythene_core_textfield__WEBPACK_IMPORTED_MODULE_0__["_TextField"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["a"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useEffect"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useState"],
  useRef: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useRef"],
  getRef: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["getRef"]
});
TextField["displayName"] = "TextField";




/***/ }),

/***/ "../node_modules/polythene-mithril-toolbar/dist/polythene-mithril-toolbar.mjs":
/*!************************************************************************************!*\
  !*** ../node_modules/polythene-mithril-toolbar/dist/polythene-mithril-toolbar.mjs ***!
  \************************************************************************************/
/*! exports provided: Toolbar, ToolbarTitle */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toolbar", function() { return Toolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarTitle", function() { return ToolbarTitle; });
/* harmony import */ var polythene_core_toolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-toolbar */ "../node_modules/polythene-core-toolbar/dist/polythene-core-toolbar.mjs");
/* harmony import */ var polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-mithril-shadow */ "../node_modules/polythene-mithril-shadow/dist/polythene-mithril-shadow.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cyano-mithril */ "../node_modules/cyano-mithril/dist/cyano-mithril.mjs");




var Toolbar = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["cast"])(polythene_core_toolbar__WEBPACK_IMPORTED_MODULE_0__["_Toolbar"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["a"],
  Shadow: polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_1__["Shadow"]
});

var ToolbarTitle = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["cast"])(polythene_core_toolbar__WEBPACK_IMPORTED_MODULE_0__["_ToolbarTitle"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["a"]
});

// @ts-check




/***/ }),

/***/ "../node_modules/polythene-mithril/dist/polythene-mithril.mjs":
/*!********************************************************************!*\
  !*** ../node_modules/polythene-mithril/dist/polythene-mithril.mjs ***!
  \********************************************************************/
/*! exports provided: Button, ButtonGroup, Card, Checkbox, Dialog, DialogInstance, DialogPane, Drawer, FAB, Icon, IconButton, IOSSpinner, List, ListTile, MaterialDesignProgressSpinner, MaterialDesignSpinner, Menu, Notification, NotificationInstance, RadioButton, RadioGroup, RaisedButton, Ripple, Search, Shadow, Slider, Snackbar, SnackbarInstance, SVG, Switch, Tabs, TextField, Toolbar, ToolbarTitle */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var polythene_mithril_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-mithril-button */ "../node_modules/polythene-mithril-button/dist/polythene-mithril-button.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return polythene_mithril_button__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony import */ var polythene_mithril_button_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-mithril-button-group */ "../node_modules/polythene-mithril-button-group/dist/polythene-mithril-button-group.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonGroup", function() { return polythene_mithril_button_group__WEBPACK_IMPORTED_MODULE_1__["ButtonGroup"]; });

/* harmony import */ var polythene_mithril_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-mithril-card */ "../node_modules/polythene-mithril-card/dist/polythene-mithril-card.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return polythene_mithril_card__WEBPACK_IMPORTED_MODULE_2__["Card"]; });

/* harmony import */ var polythene_mithril_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-mithril-checkbox */ "../node_modules/polythene-mithril-checkbox/dist/polythene-mithril-checkbox.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return polythene_mithril_checkbox__WEBPACK_IMPORTED_MODULE_3__["Checkbox"]; });

/* harmony import */ var polythene_mithril_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! polythene-mithril-dialog */ "../node_modules/polythene-mithril-dialog/dist/polythene-mithril-dialog.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return polythene_mithril_dialog__WEBPACK_IMPORTED_MODULE_4__["Dialog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogInstance", function() { return polythene_mithril_dialog__WEBPACK_IMPORTED_MODULE_4__["DialogInstance"]; });

/* harmony import */ var polythene_mithril_dialog_pane__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! polythene-mithril-dialog-pane */ "../node_modules/polythene-mithril-dialog-pane/dist/polythene-mithril-dialog-pane.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogPane", function() { return polythene_mithril_dialog_pane__WEBPACK_IMPORTED_MODULE_5__["DialogPane"]; });

/* harmony import */ var polythene_mithril_drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! polythene-mithril-drawer */ "../node_modules/polythene-mithril-drawer/dist/polythene-mithril-drawer.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Drawer", function() { return polythene_mithril_drawer__WEBPACK_IMPORTED_MODULE_6__["Drawer"]; });

/* harmony import */ var polythene_mithril_fab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! polythene-mithril-fab */ "../node_modules/polythene-mithril-fab/dist/polythene-mithril-fab.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FAB", function() { return polythene_mithril_fab__WEBPACK_IMPORTED_MODULE_7__["FAB"]; });

/* harmony import */ var polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! polythene-mithril-icon */ "../node_modules/polythene-mithril-icon/dist/polythene-mithril-icon.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_8__["Icon"]; });

/* harmony import */ var polythene_mithril_icon_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! polythene-mithril-icon-button */ "../node_modules/polythene-mithril-icon-button/dist/polythene-mithril-icon-button.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconButton", function() { return polythene_mithril_icon_button__WEBPACK_IMPORTED_MODULE_9__["IconButton"]; });

/* harmony import */ var polythene_mithril_ios_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! polythene-mithril-ios-spinner */ "../node_modules/polythene-mithril-ios-spinner/dist/polythene-mithril-ios-spinner.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IOSSpinner", function() { return polythene_mithril_ios_spinner__WEBPACK_IMPORTED_MODULE_10__["IOSSpinner"]; });

/* harmony import */ var polythene_mithril_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! polythene-mithril-list */ "../node_modules/polythene-mithril-list/dist/polythene-mithril-list.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "List", function() { return polythene_mithril_list__WEBPACK_IMPORTED_MODULE_11__["List"]; });

/* harmony import */ var polythene_mithril_list_tile__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! polythene-mithril-list-tile */ "../node_modules/polythene-mithril-list-tile/dist/polythene-mithril-list-tile.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListTile", function() { return polythene_mithril_list_tile__WEBPACK_IMPORTED_MODULE_12__["ListTile"]; });

/* harmony import */ var polythene_mithril_material_design_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! polythene-mithril-material-design-progress-spinner */ "../node_modules/polythene-mithril-material-design-progress-spinner/dist/polythene-mithril-material-design-progress-spinner.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialDesignProgressSpinner", function() { return polythene_mithril_material_design_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MaterialDesignProgressSpinner"]; });

/* harmony import */ var polythene_mithril_material_design_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! polythene-mithril-material-design-spinner */ "../node_modules/polythene-mithril-material-design-spinner/dist/polythene-mithril-material-design-spinner.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialDesignSpinner", function() { return polythene_mithril_material_design_spinner__WEBPACK_IMPORTED_MODULE_14__["MaterialDesignSpinner"]; });

/* harmony import */ var polythene_mithril_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! polythene-mithril-menu */ "../node_modules/polythene-mithril-menu/dist/polythene-mithril-menu.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return polythene_mithril_menu__WEBPACK_IMPORTED_MODULE_15__["Menu"]; });

/* harmony import */ var polythene_mithril_notification__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! polythene-mithril-notification */ "../node_modules/polythene-mithril-notification/dist/polythene-mithril-notification.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return polythene_mithril_notification__WEBPACK_IMPORTED_MODULE_16__["Notification"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationInstance", function() { return polythene_mithril_notification__WEBPACK_IMPORTED_MODULE_16__["NotificationInstance"]; });

/* harmony import */ var polythene_mithril_radio_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! polythene-mithril-radio-button */ "../node_modules/polythene-mithril-radio-button/dist/polythene-mithril-radio-button.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioButton", function() { return polythene_mithril_radio_button__WEBPACK_IMPORTED_MODULE_17__["RadioButton"]; });

/* harmony import */ var polythene_mithril_radio_group__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! polythene-mithril-radio-group */ "../node_modules/polythene-mithril-radio-group/dist/polythene-mithril-radio-group.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return polythene_mithril_radio_group__WEBPACK_IMPORTED_MODULE_18__["RadioGroup"]; });

/* harmony import */ var polythene_mithril_raised_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! polythene-mithril-raised-button */ "../node_modules/polythene-mithril-raised-button/dist/polythene-mithril-raised-button.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RaisedButton", function() { return polythene_mithril_raised_button__WEBPACK_IMPORTED_MODULE_19__["RaisedButton"]; });

/* harmony import */ var polythene_mithril_ripple__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! polythene-mithril-ripple */ "../node_modules/polythene-mithril-ripple/dist/polythene-mithril-ripple.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ripple", function() { return polythene_mithril_ripple__WEBPACK_IMPORTED_MODULE_20__["Ripple"]; });

/* harmony import */ var polythene_mithril_search__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! polythene-mithril-search */ "../node_modules/polythene-mithril-search/dist/polythene-mithril-search.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return polythene_mithril_search__WEBPACK_IMPORTED_MODULE_21__["Search"]; });

/* harmony import */ var polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! polythene-mithril-shadow */ "../node_modules/polythene-mithril-shadow/dist/polythene-mithril-shadow.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Shadow", function() { return polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_22__["Shadow"]; });

/* harmony import */ var polythene_mithril_slider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! polythene-mithril-slider */ "../node_modules/polythene-mithril-slider/dist/polythene-mithril-slider.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return polythene_mithril_slider__WEBPACK_IMPORTED_MODULE_23__["Slider"]; });

/* harmony import */ var polythene_mithril_snackbar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! polythene-mithril-snackbar */ "../node_modules/polythene-mithril-snackbar/dist/polythene-mithril-snackbar.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Snackbar", function() { return polythene_mithril_snackbar__WEBPACK_IMPORTED_MODULE_24__["Snackbar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SnackbarInstance", function() { return polythene_mithril_snackbar__WEBPACK_IMPORTED_MODULE_24__["SnackbarInstance"]; });

/* harmony import */ var polythene_mithril_svg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! polythene-mithril-svg */ "../node_modules/polythene-mithril-svg/dist/polythene-mithril-svg.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVG", function() { return polythene_mithril_svg__WEBPACK_IMPORTED_MODULE_25__["SVG"]; });

/* harmony import */ var polythene_mithril_switch__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! polythene-mithril-switch */ "../node_modules/polythene-mithril-switch/dist/polythene-mithril-switch.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return polythene_mithril_switch__WEBPACK_IMPORTED_MODULE_26__["Switch"]; });

/* harmony import */ var polythene_mithril_tabs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! polythene-mithril-tabs */ "../node_modules/polythene-mithril-tabs/dist/polythene-mithril-tabs.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return polythene_mithril_tabs__WEBPACK_IMPORTED_MODULE_27__["Tabs"]; });

/* harmony import */ var polythene_mithril_textfield__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! polythene-mithril-textfield */ "../node_modules/polythene-mithril-textfield/dist/polythene-mithril-textfield.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextField", function() { return polythene_mithril_textfield__WEBPACK_IMPORTED_MODULE_28__["TextField"]; });

/* harmony import */ var polythene_mithril_toolbar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! polythene-mithril-toolbar */ "../node_modules/polythene-mithril-toolbar/dist/polythene-mithril-toolbar.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toolbar", function() { return polythene_mithril_toolbar__WEBPACK_IMPORTED_MODULE_29__["Toolbar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToolbarTitle", function() { return polythene_mithril_toolbar__WEBPACK_IMPORTED_MODULE_29__["ToolbarTitle"]; });

































/***/ }),

/***/ "../node_modules/polythene-style/dist/polythene-style.mjs":
/*!****************************************************************!*\
  !*** ../node_modules/polythene-style/dist/polythene-style.mjs ***!
  \****************************************************************/
/*! exports provided: vars */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vars", function() { return vars; });
// @ts-check
// Global style variables
var grid_unit = 4;
var grid_unit_component = 8;
var increment = 7 * grid_unit_component; // 7 * 8 = 56

var increment_large = 8 * grid_unit_component; // 8 * 8 = 64

var vars = {
  // grid
  grid_unit: grid_unit,
  grid_unit_component: grid_unit_component,
  increment: increment,
  increment_large: increment_large,
  grid_unit_menu: 56,
  grid_unit_icon_button: 6 * grid_unit_component,
  // 48
  // common sizes
  unit_block_border_radius: 4,
  unit_item_border_radius: 4,
  unit_indent: 72,
  unit_indent_large: 80,
  unit_side_padding: 16,
  // buttons
  unit_touch_height: 48,
  unit_icon_size_small: 2 * grid_unit_component,
  // 16
  unit_icon_size: 3 * grid_unit_component,
  // 24
  unit_icon_size_medium: 4 * grid_unit_component,
  // 32
  unit_icon_size_large: 5 * grid_unit_component,
  // 40
  // screen dimensions
  unit_screen_size_extra_large: 1280,
  unit_screen_size_large: 960,
  unit_screen_size_medium: 480,
  unit_screen_size_small: 320,
  // transitions
  animation_duration: ".18s",
  animation_curve_slow_in_fast_out: "cubic-bezier(.4, 0, .2, 1)",
  animation_curve_slow_in_linear_out: "cubic-bezier(0, 0, .2, 1)",
  animation_curve_linear_in_fast_out: "cubic-bezier(.4, 0, 1, 1)",
  animation_curve_default: "ease-out",
  // font
  font_weight_light: 300,
  font_weight_normal: 400,
  font_weight_medium: 500,
  font_weight_bold: 700,
  font_size_title: 20,
  line_height: 1.5,
  // base colors
  color_primary: "33, 150, 243",
  // blue 500
  color_primary_active: "30, 136, 229",
  // blue 600
  color_primary_dark: "25, 118, 210",
  // blue 700
  color_primary_faded: "100, 181, 249",
  // blue 300
  color_primary_foreground: "255, 255, 255",
  color_light_background: "255, 255, 255",
  color_light_foreground: "0, 0, 0",
  color_dark_background: "34, 34, 34",
  color_dark_foreground: "255, 255, 255",
  // blends
  blend_light_text_primary: .87,
  blend_light_text_regular: .73,
  blend_light_text_secondary: .54,
  blend_light_text_tertiary: .40,
  blend_light_text_disabled: .26,
  blend_light_border_medium: .24,
  blend_light_border_light: .11,
  blend_light_background_active: .14,
  blend_light_background_hover: .06,
  blend_light_background_hover_medium: .12,
  // for the lighter tinted icon buttons
  blend_light_background_disabled: .09,
  blend_light_overlay_background: .3,
  blend_dark_text_primary: 1,
  blend_dark_text_regular: .87,
  blend_dark_text_secondary: .70,
  blend_dark_text_tertiary: .40,
  blend_dark_text_disabled: .26,
  blend_dark_border_medium: .22,
  blend_dark_border_light: .10,
  blend_dark_background_active: .14,
  blend_dark_background_hover: .08,
  blend_dark_background_hoverMedium: .12,
  // for the lighter tinted icon buttons
  blend_dark_background_disabled: .12,
  blend_dark_overlay_background: .3,

  /*
  Breakpoints
  Specs: https://material.io/guidelines/layout/responsive-ui.html#responsive-ui-breakpoints
  Breakbpoint naming: inspiration from
  https://medium.freecodecamp.org/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862
  */
  breakpoint_for_phone_only: 599,
  // set max-width  cols: 4,  gutter: 16
  breakpoint_for_tablet_portrait_up: 600,
  // set min-width  cols: 8,  gutter: 24
  breakpoint_for_tablet_landscape_up: 840,
  // etc.           cols: 12, gutter: 24
  breakpoint_for_desktop_up: 1280,
  breakpoint_for_big_desktop_up: 1600,
  breakpoint_for_tv_up: 1920,
  // z-index
  z_toolbar: 100,
  z_menu: 1000,
  z_app_bar: 2000,
  z_drawer: 3000,
  z_notification: 5000,
  z_dialog: 7000
};

// @ts-check




/***/ }),

/***/ "../node_modules/polythene-theme/dist/polythene-theme.mjs":
/*!****************************************************************!*\
  !*** ../node_modules/polythene-theme/dist/polythene-theme.mjs ***!
  \****************************************************************/
/*! exports provided: vars, componentConfig */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentConfig", function() { return componentConfig; });
/* harmony import */ var polythene_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-style */ "../node_modules/polythene-style/dist/polythene-style.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vars", function() { return polythene_style__WEBPACK_IMPORTED_MODULE_0__["vars"]; });



// @ts-check
// Placeholder for custom theme config file
// In your app paths setup, change the current path to your custom config file; see the theme README.
// Example:
// export const componentConfig = {
//     Button: vars => {
//         const mainColor = '#e4521b';
//         const textColor = '#fff';
//         const newVars = Object.assign(
//           {},
//           vars,
//           {
//             border_radius:                        0,
//             color_light_raised_normal_background: mainColor,
//             color_light_raised_normal_text:       textColor,
//             color_dark_raised_normal_background:  mainColor,
//             color_dark_raised_normal_text:        textColor
//           }
//         );
//         return [
//             { '': vars }, // default vars for all pages
//             { '.example-custom-theme ': newVars } // custom vars for this selector
//         ];
//     }
// };
var componentConfig = {};

// @ts-check




/***/ }),

/***/ "../node_modules/polythene-utilities/dist/polythene-utilities.mjs":
/*!************************************************************************!*\
  !*** ../node_modules/polythene-utilities/dist/polythene-utilities.mjs ***!
  \************************************************************************/
/*! exports provided: Timer, addWebFont, easing, scrollTo */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addWebFont", function() { return addWebFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easing", function() { return easing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTo", function() { return scrollTo; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../node_modules/polythene-core/dist/polythene-core.mjs");


function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var addWebFont = function addWebFont(vendor, config) {
  if (polythene_core__WEBPACK_IMPORTED_MODULE_0__["isServer"]) return;

  if (!window["WebFontConfig"]) {
    /**
     * @param {object} params
     * @param {string} [params.name]
     * @param {string} [params.familyName]
     * @param {any} [params.fvd]
     */
    var emitEvent = function emitEvent(_ref) {
      var name = _ref.name,
          familyName = _ref.familyName,
          fvd = _ref.fvd;
      return Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["emit"])("webfontloader", {
        name: name,
        familyName: familyName,
        fvd: fvd,
        vendor: vendor,
        config: config
      });
    };

    window["WebFontConfig"] = {
      loading: function loading() {
        return emitEvent({
          name: "loading"
        });
      },
      active: function active() {
        return emitEvent({
          name: "active"
        });
      },
      inactive: function inactive() {
        return emitEvent({
          name: "inactive"
        });
      },
      fontloading: function fontloading(familyName, fvd) {
        return emitEvent({
          name: "fontloading",
          familyName: familyName,
          fvd: fvd
        });
      },
      fontactive: function fontactive(familyName, fvd) {
        return emitEvent({
          name: "fontactive",
          familyName: familyName,
          fvd: fvd
        });
      },
      fontinactive: function fontinactive(familyName, fvd) {
        return emitEvent({
          name: "fontinactive",
          familyName: familyName,
          fvd: fvd
        });
      }
    };

    (function () {
      var wf = document.createElement("script");
      wf.src = (document.location.protocol === "https:" ? "https" : "http") + "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js";
      wf.type = "text/javascript";
      wf.async = true;
      var s = document.getElementsByTagName("script")[0];

      if (s && s.parentNode) {
        s.parentNode.insertBefore(wf, s);
      }
    })();
  }

  var vendorCfg = window["WebFontConfig"][vendor] || {};

  if (config) {
    _extends(vendorCfg, config);
  }

  window["WebFontConfig"][vendor] = vendorCfg;
};

/*
https://gist.github.com/gre/1650294
Easing Functions - inspired from http://gizma.com/easing/
Only considering the t value for the range [0, 1] => [0, 1]
*/
var easing = {
  // no easing, no acceleration
  linear: function linear(t) {
    return t;
  },
  // accelerating from zero velocity
  easeInQuad: function easeInQuad(t) {
    return t * t;
  },
  // decelerating to zero velocity
  easeOutQuad: function easeOutQuad(t) {
    return t * (2 - t);
  },
  // acceleration until halfway, then deceleration
  easeInOutQuad: function easeInOutQuad(t) {
    return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },
  // accelerating from zero velocity
  easeInCubic: function easeInCubic(t) {
    return t * t * t;
  },
  // decelerating to zero velocity
  easeOutCubic: function easeOutCubic(t) {
    return --t * t * t + 1;
  },
  // acceleration until halfway, then deceleration
  easeInOutCubic: function easeInOutCubic(t) {
    return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },
  // accelerating from zero velocity
  easeInQuart: function easeInQuart(t) {
    return t * t * t * t;
  },
  // decelerating to zero velocity
  easeOutQuart: function easeOutQuart(t) {
    return 1 - --t * t * t * t;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuart: function easeInOutQuart(t) {
    return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  },
  // accelerating from zero velocity
  easeInQuint: function easeInQuint(t) {
    return t * t * t * t * t;
  },
  // decelerating to zero velocity
  easeOutQuint: function easeOutQuint(t) {
    return 1 + --t * t * t * t * t;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuint: function easeInOutQuint(t) {
    return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
  }
};

/*
 Animated scroll to a position.
 Derived from https://github.com/madebysource/animated-scrollto
 Adapted to Mithril and rewritten to es6.
*/
var scrollTo = function scrollTo(opts) {
  if (polythene_core__WEBPACK_IMPORTED_MODULE_0__["isServer"]) {
    return;
  }

  var element = opts.element;
  var which = opts.direction === "horizontal" ? "scrollLeft" : "scrollTop";
  var to = opts.to;
  var duration = opts.duration * 1000;
  var easingFn = opts.easing || easing.easeInOutCubic;
  var start = element[which];
  var change = to - start;
  var animationStart = new Date().getTime();
  var animating = true;
  return new Promise(function (resolve) {
    var animateScroll = function animateScroll() {
      if (!animating) {
        return;
      }

      requestAnimFrame(animateScroll);
      var now = new Date().getTime();
      var percentage = (now - animationStart) / duration;
      var val = start + change * easingFn(percentage);
      element[which] = val;

      if (percentage >= 1) {
        element[which] = to;
        animating = false;
        resolve();
      }
    };

    requestAnimFrame(animateScroll);
  });
};
var requestAnimFrame = polythene_core__WEBPACK_IMPORTED_MODULE_0__["isServer"] ? function () {} : function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window["mozRequestAnimationFrame"] || function (callback) {
    return window.setTimeout(callback, 1000 / 60);
  };
}();

// @ts-check
var Timer = function Timer() {
  /** @type {number} */
  var timerId;
  /** @type {number} */

  var startTime;
  /** @type {number} */

  var remaining;
  /** @type {() => any} */

  var cb;

  var stop = function stop() {
    if (polythene_core__WEBPACK_IMPORTED_MODULE_0__["isClient"]) {
      window.clearTimeout(timerId);
    }
  };

  var pause = function pause() {
    return stop(), remaining -= new Date().getTime() - startTime;
  };

  var startTimer = function startTimer() {
    if (polythene_core__WEBPACK_IMPORTED_MODULE_0__["isClient"]) {
      stop();
      startTime = new Date().getTime();
      timerId = window.setTimeout(cb, remaining);
    }
  };

  var start = function start(callback, duration) {
    return cb = callback, remaining = duration * 1000, startTimer();
  };

  var resume = function resume() {
    return startTimer();
  };

  return {
    start: start,
    pause: pause,
    resume: resume,
    stop: stop
  };
};




/***/ }),

/***/ "../node_modules/process/browser.js":
/*!******************************************!*\
  !*** ../node_modules/process/browser.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
function defaultClearTimeout () {
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
} ())
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
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
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
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
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
    while(len) {
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

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../node_modules/setimmediate/setImmediate.js":
/*!****************************************************!*\
  !*** ../node_modules/setimmediate/setImmediate.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "../node_modules/process/browser.js")))

/***/ }),

/***/ "../node_modules/timers-browserify/main.js":
/*!*************************************************!*\
  !*** ../node_modules/timers-browserify/main.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "../node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mithril_1 = __importDefault(__webpack_require__(/*! mithril */ "../node_modules/mithril/index.js"));
var polythene_mithril_1 = __webpack_require__(/*! polythene-mithril */ "../node_modules/polythene-mithril/dist/polythene-mithril.mjs");
__webpack_require__(/*! polythene-css/dist/polythene.css */ "../node_modules/polythene-css/dist/polythene.css"); // Component CSS
__webpack_require__(/*! polythene-css/dist/polythene-typography.css */ "../node_modules/polythene-css/dist/polythene-typography.css"); // Default Material Design styles including Roboto font
var App = {
    view: function () {
        return mithril_1.default("div", [
            mithril_1.default(polythene_mithril_1.Button, {
                raised: true,
                label: "Open dialog",
                events: {
                    onclick: function () {
                        polythene_mithril_1.Dialog.show({
                            /* note the Dialog component is below the other elements in the app */
                            title: "Hello",
                            body: "Click background to hide or press ESCAPE.",
                            backdrop: true
                        });
                    }
                }
            }),
            mithril_1.default(polythene_mithril_1.Dialog)
        ]);
    }
};
var rootElement = document.getElementById("root");
if (rootElement) {
    mithril_1.default.mount(rootElement, App);
}


/***/ })

/******/ });
//# sourceMappingURL=index.js.map