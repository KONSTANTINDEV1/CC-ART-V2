// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js.js":[function(require,module,exports) {
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// //--- SMOOTH SCROLL BAR ---//
// import Scrollbar from "smooth-scrollbar";
// var options = {
//   daping: 0.2,
// };
// Scrollbar.init(document.querySelector("#my-scrollbar", options));
//--- MENU BUTTON ---//
var menuIcon = document.querySelector(".menu-icon");

function toggleMenuIcon() {
  menuIcon.classList.toggle("active");
}

menuIcon.addEventListener("click", toggleMenuIcon); //--- SCROLL NAV ---//

window.addEventListener("scroll", function () {
  var header = document.querySelector(".navbar");
  header.classList.toggle("sticky", window.scrollY > 800);
}); //--- SIDENAV ---//

$(document).ready(function () {
  $(".sidebarBtn").click(function () {
    $(".sidebar").toggleClass("active");
  });
}); // GSAP ANIMATION

var welcomeText = document.querySelector(".content-wrap");
var tl = new TimelineMax();
tl.fromTo(welcomeText, 2.3, {
  opacity: "0"
}, {
  opacity: "1",
  ease: Power2.easeInOut
});
gsap.from(".row", {
  opacity: 0,
  duration: 1.2,
  y: 60
});
gsap.from(".collections-page-text", {
  opacity: 0,
  duration: 1.2,
  x: 60
}); // AOS ANIMATIONS

AOS.init({
  offset: 300,
  // offset (in px) from the original trigger point
  duration: 700,
  // values from 0 to 3000, with step 50ms
  easing: "ease" // default easing for AOS animations

}); // BARBA

function delay(n) {
  n = n || 2000;
  return new Promise(function (done) {
    setTimeout(function () {
      done();
    }, n);
  });
}

function pageTransition() {
  var tl = gsap.timeline();
  tl.to(".loading-screen", {
    duration: 1.2,
    width: "100%",
    left: "0%",
    ease: "Expo.easeInOut"
  });
  tl.to(".loading-screen", {
    duration: 1,
    width: "100%",
    left: "-100%",
    ease: "Expo.easeInOut",
    delay: 1.5
  });
  tl.set(".loading-screen", {
    left: "-100%"
  });
}

function contentAnimation() {
  var tl = gsap.timeline();
}

barba.init({
  sync: true,
  transitions: [{
    leave: function leave(data) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var done;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                done = _this.async();
                pageTransition();
                _context.next = 4;
                return delay(1500);

              case 4:
                done();

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    enter: function enter(data) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                contentAnimation();

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    once: function once(data) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                contentAnimation();

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  }]
}); //--- CAROUSEL ---//
//-- Initialize Swiper

var swiper = new Swiper(".s1", {
  loop: false,
  grabCursor: true,
  spaceBetween: 100,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      autoResize: true
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30,
      autoResize: true
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 40,
      autoResize: true
    }
  }
});
var swiper2 = new Swiper(".s2", {
  zoom: {
    maxRatio: 5
  },
  grabCursor: true,
  freeMode: true,
  // autoplay: true,
  followFinger: true,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      autoResize: true
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30,
      autoResize: true
    },
    // when window width is >= 640px
    760: {
      slidesPerView: 2,
      spaceBetween: 40,
      autoResize: true
    },
    1000: {
      slidesPerView: 2,
      spaceBetween: 40,
      autoResize: true
    },
    1440: {
      slidesPerView: 2,
      spaceBetween: 40,
      autoResize: true
    },
    1800: {
      slidesPerView: 3,
      spaceBetween: 40,
      autoResize: true
    }
  }
});
barba.hooks.enter(function () {
  // this hook will be called during every transitions
  // before new page content enter…
  $(document).ready(function () {
    window.scrollTo(0, 0);
    var menuIcon = document.querySelector(".menu-icon");

    function toggleMenuIcon() {
      menuIcon.classList.toggle("active");
    }

    menuIcon.addEventListener("click", toggleMenuIcon);
    AOS.init({
      offset: 300,
      // offset (in px) from the original trigger point
      duration: 700,
      // values from 0 to 3000, with step 50ms
      easing: "ease" // default easing for AOS animations

    });
  });
  $(document).ready(function () {
    $(".sidebarBtn").click(function () {
      $(".sidebar").toggleClass("active");
    });
  }); // GSAP ANIMATION

  var welcomeText = document.querySelector(".content-wrap");
  var tl = new TimelineMax();
  tl.fromTo(welcomeText, 2.3, {
    opacity: "0"
  }, {
    opacity: "1",
    ease: Power2.easeInOut
  }); //--- CAROUSEL ---//
  //-- Initialize Swiper

  var swiper = new Swiper(".s1", {
    loop: false,
    grabCursor: true,
    spaceBetween: 100,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        autoResize: true
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 30,
        autoResize: true
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 1,
        spaceBetween: 40,
        autoResize: true
      }
    }
  });
  var swiper2 = new Swiper(".s2", {
    zoom: {
      maxRatio: 5
    },
    grabCursor: true,
    freeMode: true,
    // autoplay: true,
    followFinger: true,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        autoResize: true
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 30,
        autoResize: true
      },
      // when window width is >= 640px
      760: {
        slidesPerView: 2,
        spaceBetween: 40,
        autoResize: true
      },
      1000: {
        slidesPerView: 2,
        spaceBetween: 40,
        autoResize: true
      },
      1440: {
        slidesPerView: 2,
        spaceBetween: 40,
        autoResize: true
      },
      1800: {
        slidesPerView: 3,
        spaceBetween: 40,
        autoResize: true
      }
    }
  }); //--- IMG MODAL ---//

  var outerModal = document.querySelector(".outer-modal");
  var innerModal = document.querySelector(".inner-modal");

  function imgHandleClick(e) {
    var imgContainer = e.currentTarget;
    var img = imgContainer.closest(".single-collection-item-container");
    var imgSrc = img.querySelector("img").src;
    var Desc = img.dataset.description;
    var Contact = img.dataset.contact;
    var Name = img.dataset.name;
    innerModal.innerHTML = "\n    <img src=\"".concat(imgSrc, "\" alt=\"").concat(Desc, "\"/>\n    <div class=\"modal-text\">\n    <h2>").concat(Name, "</h2>\n    <p>").concat(Desc, "</p>\n    <p>").concat(Contact, "</p>\n  \n    <li><a href=\"/pages/contact.html\">CONTACT US</a></li>\n    </div>\n    ");
    outerModal.classList.toggle("open");
    console.log(innerModal); // document.body.classList.toggle('blur');
  } //--- ADD EVENTLISTENER TO ALL IMGS ---//


  document.querySelectorAll(".img-modal").forEach(function (item) {
    return item.addEventListener("click", imgHandleClick);
  }); //--- CLOSE MODAL WHEN CLICKING OUT OF IMG ---//

  outerModal.addEventListener("click", function (e) {
    var isOutside = !e.target.closest(".inner-modal");

    if (isOutside) {
      outerModal.classList.remove("open");
    }
  });
});
},{}],"../../../../.nvm/versions/node/v12.16.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51654" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../.nvm/versions/node/v12.16.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js.js"], null)
//# sourceMappingURL=/js.js.map