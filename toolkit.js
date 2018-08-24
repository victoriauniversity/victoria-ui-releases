/** Version: 0.10.5 (build #f9b526cfbb850ebbc6f45695d756a39c1fdf64d8 + )  | Friday, August 24, 2018, 12:40 AM */
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/**
 * Helper function for iterating over a collection
 *
 * @param collection
 * @param fn
 */
function each(collection, fn) {
    var i      = 0,
        length = collection.length,
        cont;

    for(i; i < length; i++) {
        cont = fn(collection[i], i);
        if(cont === false) {
            break; //allow early exit
        }
    }
}

/**
 * Helper function for determining whether target object is an array
 *
 * @param target the object under test
 * @return {Boolean} true if array, false otherwise
 */
function isArray(target) {
    return Object.prototype.toString.apply(target) === '[object Array]';
}

/**
 * Helper function for determining whether target object is a function
 *
 * @param target the object under test
 * @return {Boolean} true if function, false otherwise
 */
function isFunction(target) {
    return typeof target === 'function';
}

module.exports = {
    isFunction : isFunction,
    isArray : isArray,
    each : each
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jquery = _interopRequireDefault(__webpack_require__(0));

var _fastclick = _interopRequireDefault(__webpack_require__(3));

var _headroom = _interopRequireDefault(__webpack_require__(4));

var _enquire = _interopRequireDefault(__webpack_require__(5));

__webpack_require__(9);

__webpack_require__(10);

var _tracking = __webpack_require__(11);

var _popups = _interopRequireDefault(__webpack_require__(12));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** !Toolkit's core JS */

/* DEPENDENCIES & 3RD PARTY LIBRARIES IMPORTS */
// Include all standalone modules
// Initialise dependencies
(0, _tracking.trackerConfig)({
  autoRegister: true
}); // Export useful dependencies to the global namespace (~ window) so that
//  they can be used outside of this toolkit.

var _default = {};
exports.default = _default;

__webpack_require__(14); // TODO: set up multiple entry points for webpack bundles

/* CONSTANT ATTRIBUTES */


var TRANSITION_TIMEOUT = 200; //update in _settings.variables.scss(135)

var MOBILE_LARGE_AND_SMALLER = 'screen and (max-width: 42.99em)',
    //update in _settings.responsive.scss(57)
DESKTOP_AND_LARGER = 'screen and (min-width: 61em)',
    TABLET_AND_SMALLER = 'screen and (max-width: 975px)',
    // Iframe selectors
YOUTUBE_IFRAME_SELECTOR = 'iframe[src*="youtube"]',
    GMAPS_IFRAME_SELECTOR = 'iframe[src*="/maps/"]',
    VIMEO_IFRAME_SELECTOR = 'iframe[src*="vimeo"]';
/* SUPPORTING FUNCTIONS */

/** Wrap YT videos in .embed wrapper that helps with responsiveness. */

function wrapEmbeddedIframes() {
  var iframes = (0, _jquery.default)(YOUTUBE_IFRAME_SELECTOR + ', ' + GMAPS_IFRAME_SELECTOR + ', ' + VIMEO_IFRAME_SELECTOR),
      singleIframe = null,
      iframeClasses;
  iframes.each(function (index) {
    singleIframe = (0, _jquery.default)(this); // If it doesn't already have wrapper, wrap it!

    if (!singleIframe.parent().hasClass('embed')) {
      iframeClasses = singleIframe.attr("class") || '';
      singleIframe.wrap('<div class="embed ' + iframeClasses + '"></div>');
      if (iframeClasses) singleIframe.removeClass();
    }
  });
}
/** Safe implementation of the 'hasOwnProperty` */


function hasProp(obj, propName) {
  return Object.prototype.hasOwnProperty.call(obj, propName);
}
/** Deletes all study areas tiles that are display: none from DOM to
keep the markup clean (and easily handled by the CSS) */


function removedUnusedTiles() {
  (0, _jquery.default)('.tiles-wrap .tile').each(function () {
    if ((0, _jquery.default)(this).css("display") == "none") {
      (0, _jquery.default)(this).remove();
    }
  });
}

var SIDEMENU_CLASS = 'sidemenu';
var SIDEMENU_TOGGLE_CLASS = 'sidemenu-toggle';
var SIDEMENU_EXPANDER_CLASS = 'btn-expander';
var SIDEMENU_SUBMENU_CLASS = 'has-submenu';
var SIDEMENU_SELECTED_ITEM_CLASS = 'active';
var SIDEMENU_EXPANDED_CLASS = 'expanded';

function initExpandableSubmenu() {
  var expandableButtonElement = (0, _jquery.default)(this);
  var submenuContainer = expandableButtonElement.parent('.' + SIDEMENU_SUBMENU_CLASS); // Init default state

  var isExpanded = submenuContainer.hasClass(SIDEMENU_SELECTED_ITEM_CLASS);

  function apply() {
    if (isExpanded) {
      submenuContainer.addClass(SIDEMENU_EXPANDED_CLASS);
    } else {
      submenuContainer.removeClass(SIDEMENU_EXPANDED_CLASS);
    }
  } // Init


  apply(); // Bind `click` events to all expandable buttons

  expandableButtonElement.on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    isExpanded = !isExpanded;
    apply();
  });
}

function initSidemenuExpandability() {
  var menuElement = (0, _jquery.default)('.' + SIDEMENU_CLASS);
  enhanceSidemenu(menuElement); // Expanding/Collapsing of the entire side menu on mobile devices

  menuElement.children('.' + SIDEMENU_TOGGLE_CLASS).children('a').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    (0, _jquery.default)(this).parent().toggleClass(SIDEMENU_EXPANDED_CLASS);
  });
  var expandableButtons = menuElement.find('.' + SIDEMENU_EXPANDER_CLASS); // Add tracking if enabled

  if (_tracking.tracker.shouldTrackElement(menuElement)) {
    _tracking.tracker.registerForTracking(menuElement.find('li > a'), 'click', 'sidemenu-link');

    _tracking.tracker.registerForTracking(expandableButtons, 'click', 'sidemenu-expander');
  }

  expandableButtons.each(initExpandableSubmenu);
} //TODO: Remove after this was implemented on the backend (~ in Squiz)

/** Adds necessary classes and expanding/collapsing elements if the item has got submenu. */


var btnExpanderHtml = '<span class="btn-expander" title="Toggle subpages"></span>';

function enhanceSidemenu(menuElement) {
  menuElement.find('li').each(function () {
    var listItem = (0, _jquery.default)(this); // a) already has got a proper class in place? Skip!

    if (listItem.hasClass(SIDEMENU_SUBMENU_CLASS)) return; // b) No submenu in <li>? Skip!

    if (listItem.children('ul').length === 0) return; // c) Has got a submenu => Enhance sidemenu's HTML

    listItem.addClass(SIDEMENU_SUBMENU_CLASS);
    (0, _jquery.default)(btnExpanderHtml).insertAfter(listItem.children('a'));
  });
}
/** HELPERS */
//FIXME: Should be automatically pre-populated from the build/build.config.js


var ENV_HOSTNAME = {
  STAGE: 'cms.victoria.ac.nz',
  PROD: 'www.victoria.ac.nz',
  LOCAL: 'local.victoria.ac.nz'
};

function isAdminEnvironment() {
  return window.location.hostname === ENV_HOSTNAME.STAGE || window.location.hostname === ENV_HOSTNAME.LOCAL;
}
/**
 * Decodes email address into re-usable form.
 *
 * @deprecated Very old approach that won't work today - do not use.
 */


function decodeMailAddresses() {
  var a = 'dre:ams0of@g1niht.lp2c9u3v8k4w7y5j6zbx-_qfntigue6los5zar7b:y4dp8v3m9h2.x1w@k0jcq-_';
  var i, h, j, k, l, m, n, s;

  for (i = 0; i < document.links.length; i += 1) {
    h = document.links[i].hash;

    if (h.substring(0, 3) == '#sd') {
      k = '';
      l = h.substring(3, 5);
      m = h.lastIndexOf('?subject=');

      if (m == -1) {
        s = document.links[i].href;
      } else {
        s = h.substring(m);
        h = h.substring(0, m);
      }

      ;

      for (j = 5; j < h.length; j += 2) {
        k = k + a.charAt(h.substring(j, j + 2) - l - 1);
      }

      ;
      m = s.lastIndexOf('?subject=');

      if (m == -1) {
        document.links[i].href = k;
      } else {
        document.links[i].href = k + s.substring(m);
      }

      ;
      n = document.links[i].innerHTML;

      if (n == 'address') {
        document.links[i].innerHTML = k.substring(7);
      } else {
        document.links[i].title = k.substring(7);
      }

      ;
    }

    ;
  }

  ;
}
/** MESSAGE/NOTIFICATIONS HANDLING */


var ERROR_TYPES = {
  SIDEBAR_WIDGETS_COUNT_EXCEEDED: 'sidebar-widgets-count-exceeded'
};
/**
 * Renders the error message notification and adds it to the top of the
 * content window. Will show only to administrators within non-production
 * environments.
 *
 * @param {{type: string, message: string, invalidItems: Array[string]}} errorObject
 *
 * @returns {void}
 */

function showAdminErrorMessage(errorObject) {
  if (!errorObject || !isAdminEnvironment()) return;
  var invalidItemsListHtml;

  if (errorObject.invalidItems.length > 0) {
    invalidItemsListHtml = "\n      <ul>\n        <li>".concat(errorObject.invalidItems.join('</li><li>'), "</li>\n      </ul>\n    ");
  } // Template


  var errorNotificationHtml = "\n    <section class=\"flash-message error\">\n      ".concat(errorObject.message, "\n      ").concat(invalidItemsListHtml, "\n    </section>\n  ");
  (0, _jquery.default)('.content-panel > main > .formatting').prepend(errorNotificationHtml);
  console.error('Content-related error has occured', errorObject);
}
/** NAVIGATION */

/**
 * Adds the 'active' class to a main menu item
 * that corresponds with the current top-level URL path
 * segment.
 *
 * Note: This is *only* done due to Squiz 5.4 limitations. Once we can render
 * this class on the backend, this function can be deprecated.
 */


function addActiveClassToMainMenu() {
  // [url-path-segment]: [nav-item-classname]
  var rootPages = {
    'future': 'future',
    'international': 'international',
    'current': 'current',
    'research': 'research',
    'learning-teaching': 'learning-teaching'
  },
      urlPathSegments = window.location.pathname.split('/');

  if (urlPathSegments.length > 1 && urlPathSegments[1] !== '' && hasProp(rootPages, urlPathSegments[1])) {
    var activeNavItemClass = rootPages[urlPathSegments[1]];
    var activeNavItem = document.querySelector(".menu-bar .".concat(activeNavItemClass));
    if (activeNavItem) activeNavItem.classList.add('active');
  }
}
/** CONTENT DYNAMIC MANIPULATIONS */

/**
 * Moves `non-staff` contact cards into the previous/next <ul> with
 * regular staff.
 *
 * @deprecated This approach should not be used in new updates! Please, follow
 * clear syntax, so you don't have to move elements around.
 *
 * Notice: This is required to deal with structural and visual inconsistencies * that stem from legacy code that powers rendering of non-staff contact cards. Once
 * this is removed, this slow function can be removed too.
 */


var STAFF_LIST_CONTAINER_CLASSNAME = 'articles-container',
    STAFF_LIST_CLASSNAME = 'staff-list',
    STAFF_CONTACT_CLASSNAME = 'contact';

function moveOrphanedStaffCardIntoList() {
  var orphanBeforeStaffList = document.querySelector(".".concat(STAFF_CONTACT_CLASSNAME, " + .").concat(STAFF_LIST_CONTAINER_CLASSNAME));
  var orphanAfterStaffList = document.querySelector(".".concat(STAFF_LIST_CONTAINER_CLASSNAME, " + .").concat(STAFF_CONTACT_CLASSNAME));
  if (!orphanBeforeStaffList && !orphanAfterStaffList) return;

  while (orphanAfterStaffList) {
    var orphanedStaffCardElement = (0, _jquery.default)(orphanAfterStaffList);
    var staffListElement = orphanedStaffCardElement.prev().children(".".concat(STAFF_LIST_CLASSNAME));

    if (staffListElement.length === 0) {
      // Staff list is not within its container - abort
      console.warn("The 'non-staff' profile could not be placed within the list of other 'staff' profiles, beceause the *previous* block does not contain '".concat(STAFF_LIST_CLASSNAME, "' class. You might experience visual inconsistencies."), orphanAfterStaffList, staffListElement);
      return;
    }

    var listItem = (0, _jquery.default)('<li></li>').append(orphanedStaffCardElement);
    staffListElement.append(listItem);
    orphanAfterStaffList = document.querySelector(".".concat(STAFF_LIST_CONTAINER_CLASSNAME, " + .").concat(STAFF_CONTACT_CLASSNAME));
  } // Has to be re-evaluated again to reflect the previous content manipulations


  orphanBeforeStaffList = document.querySelector(".".concat(STAFF_CONTACT_CLASSNAME, " + .").concat(STAFF_LIST_CONTAINER_CLASSNAME));

  while (orphanBeforeStaffList) {
    var _orphanedStaffCardElement = (0, _jquery.default)(orphanBeforeStaffList).prev(".".concat(STAFF_CONTACT_CLASSNAME)); // Current selector is pointing to the <ul> - point to the previous sibling instead!


    var _staffListElement = _orphanedStaffCardElement.next().children(".".concat(STAFF_LIST_CLASSNAME));

    if (_staffListElement.length === 0) {
      // Staff list is not within its container - abort
      console.warn("The 'non-staff' profile could not be placed within the list of other 'staff' profiles, beceause the *following* block does not contain '".concat(STAFF_LIST_CLASSNAME, "' class. You might experience visual inconsistencies."), _orphanedStaffCardElement, _staffListElement);
      break;
    }

    var _listItem = (0, _jquery.default)('<li></li>').append(_orphanedStaffCardElement);

    _staffListElement.prepend(_listItem);

    orphanBeforeStaffList = document.querySelector(".".concat(STAFF_CONTACT_CLASSNAME, " + .").concat(STAFF_LIST_CONTAINER_CLASSNAME));
  }
}
/**
 * Because two sets of taught courses are rendered (one located at the top
 * of the page, one at the bottom), it hides the other, non-used counterpart.
 *
 * @deprecated
 *
 * Note: This is legacy code and can be removed when the backend renders
 * only one set of taught courses.
 */


function hideCoursesOnStaffProfile() {
  if (!window.courseLocation) return;

  if (window.courseLocation === 'top') {
    (0, _jquery.default)('#courses-bottom').css({
      display: 'none'
    });
  }

  if (window.courseLocation === 'bottom') {
    (0, _jquery.default)('#courses-top').css({
      display: 'none'
    });
  }
}
/** CONTENT SIDE-BAR */
// Constants


var SIDEBAR_WIDGET_CLASSNAME = 'data-sidebar',
    SIDEBAR_ID = 'rightHandMenu',
    SIDEBAR_WIDGETS_MAX = 3,
    WIDGET_LINKS_CLASSNAME = 'data-relatedLinks';
/**
 * Finds all widget blocks within the main content and moves them into the
 * right-hand sidebar.
 *
 * Note: This is *only* done due to Squiz 5.4 limitations. Once we can render
 * widgets into the sidebar on our backend, this client-side solution can be
 * deprecated.
 *
 * @returns {void}
 */

function moveWidgetsToSidebar() {
  // No widgets OR sidebar available -> Skip!
  if (!document.querySelector(".".concat(SIDEBAR_WIDGET_CLASSNAME)) || !document.getElementById(SIDEBAR_ID)) return; // Members
  // Original, unordered widgets

  var widgetsToMove = (0, _jquery.default)(".".concat(SIDEBAR_WIDGET_CLASSNAME)),
      sidebarElement = (0, _jquery.default)("#".concat(SIDEBAR_ID)); // Correctly ordered and prepared to be rendered

  var widgetsMoved = [];
  var error;
  widgetsToMove.each(function moveWidgetToSidebar() {
    var widgetElement = (0, _jquery.default)(this);

    if (widgetsMoved.length >= SIDEBAR_WIDGETS_MAX) {
      if (!error) {
        error = {
          type: ERROR_TYPES.SIDEBAR_WIDGETS_COUNT_EXCEEDED,
          message: "\n              <h2>Too many elements in the sidebar</h2>\n              <p>Currently added: ".concat(widgetsToMove.length, ", Maximum: ").concat(SIDEBAR_WIDGETS_MAX, ".</p>\n              <p>\n                <strong>Please remove the class '").concat(SIDEBAR_WIDGET_CLASSNAME, "' from all blocks you do not want to appear in the sidebar.</strong>\n              </p>\n              <p>\n                The blocks with following content will not be shown in the sidebar:\n              </p>\n            "),
          invalidItems: []
        };
      }

      error.invalidItems.push(this.id || "".concat(widgetElement.text().trim().substring(0, 80), "..."));
      return;
    }

    if (widgetElement.hasClass(WIDGET_LINKS_CLASSNAME)) {
      // A) Staff profile - add to the top!
      widgetsMoved.unshift(widgetElement);
    } else {
      // B) Others (downloads, publications etc.) - Add to the last positions
      widgetsMoved.push(widgetElement);
    } // Remove from its original location


    widgetElement.detach(); // Remove `display:none` if it exists

    widgetElement.css('display', '');
  }); // Render widgets in the sidebar

  sidebarElement.append.apply(sidebarElement, widgetsMoved); // Render errors, if any

  if (error) showAdminErrorMessage(error);
}
/** 'GO UP' BUTTON */


var BTN_UP_ID = 'btn-up',
    BTN_ADMIN_EDIT_ID = 'btn-admin',
    // ADMIN_URL_EXTENSION = '_edit', // Uncomment if the button and URL cannot be rendered by Squiz!
SCROLL_ANIMATION_DURATION_IN_MS = 700;

function initFloatingButtons() {
  var buttonUpElement = document.getElementById(BTN_UP_ID),
      buttonAdminElement = isAdminEnvironment() ? document.getElementById(BTN_ADMIN_EDIT_ID) : null;

  if (buttonUpElement) {
    (0, _jquery.default)(buttonUpElement).click(function (e) {
      e.preventDefault();
      (0, _jquery.default)('html,body').animate({
        scrollTop: 0
      }, SCROLL_ANIMATION_DURATION_IN_MS);
    });
  }

  if (buttonAdminElement) {
    (0, _jquery.default)(buttonAdminElement).css('display', ''); // Remove inline 'display'
    // Uncomment if the button and URL cannot be rendered by Squiz!
    // $( buttonAdminElement ).click( ( e ) => {
    //  e.preventDefault();
    //    window.location.href += `/${ADMIN_URL_EXTENSION}`;
    // })
  }
} // Run after the DOM has loaded...


(0, _jquery.default)(function () {
  moveWidgetsToSidebar();
  addActiveClassToMainMenu();
  moveOrphanedStaffCardIntoList(); // FIXME: Extract out to a standalone plugin and run on staff profiles *only*

  hideCoursesOnStaffProfile();

  _fastclick.default.attach(document.body);

  var $body = (0, _jquery.default)('body'),
      $globalNav = (0, _jquery.default)('#global-nav'),
      $globalSearch = (0, _jquery.default)('#global-search');
  /** Init side-menu, if it's present */

  if ((0, _jquery.default)(".".concat(SIDEMENU_CLASS)).length) {
    initSidemenuExpandability();
  }

  initFloatingButtons();
  decodeMailAddresses(); //http://wicky.nilia.ms/enquire.js/
  //TODO: Refactor and extract to its own library

  _enquire.default.register(MOBILE_LARGE_AND_SMALLER, function () {
    if ($globalNav.length) {
      var menuOutsideClickListener = function menuOutsideClickListener(event) {
        if (!(0, _jquery.default)(event.target).closest('#global-nav').length) {
          toggleMobileMenu();
        }
      };

      var eGlobalNav = $globalNav[0],
          bannerHeaderElement = (0, _jquery.default)('.site-header'),
          sidemenu = (0, _jquery.default)('.sidemenu');
      var headroom = new _headroom.default(eGlobalNav, {
        'offset': $globalNav.outerHeight(),
        // or scroll tolerance per direction
        tolerance: {
          down: 5,
          up: 20
        },
        'classes': {
          'initial': 'sticky',
          'pinned': 'slide-down',
          'unpinned': 'slide-up',
          'notTop': 'no-top'
        }
      });
      headroom.init();

      var disableHeadroom = function disableHeadroom() {
        if (headroom) {
          headroom.scroller.removeEventListener('scroll', headroom.debouncer, false);
        }
      };

      var enableHeadroom = function enableHeadroom() {
        if (headroom) {
          headroom.scroller.addEventListener('scroll', headroom.debouncer, false);
        }
      };

      var removeMenuOutClickListener = function removeMenuOutClickListener() {
        document.removeEventListener('click', menuOutsideClickListener);
      };

      var registerMenuOutClickListener = function registerMenuOutClickListener() {
        document.addEventListener('click', menuOutsideClickListener);
      };

      var toggleMobileMenu = function toggleMobileMenu() {
        $globalNav.find('.tcon').toggleClass('tcon-transform');
        $globalNav.toggleClass('is-open');
        if (!headroom) return;

        if ($globalNav.hasClass('is-open')) {
          disableHeadroom();
          $body.addClass('unscrollable');
          registerMenuOutClickListener();
        } else {
          enableHeadroom();
          $body.removeClass('unscrollable');
          removeMenuOutClickListener();
        }
      };

      ;
      $body.on('click ', '.js-toggle-global-nav', function (_event) {
        toggleMobileMenu();
      });
    }
  }); // Opens/closes global search bar & gains auto-focus


  $body.on('click ', '.js-toggle-global-search', function (_event) {
    var $this = (0, _jquery.default)(this);

    if ($this.data('js-has-active-transition')) {
      return false;
    }

    $this.data('js-has-active-transition', true);
    $this.find('.tcon').toggleClass('tcon-transform');

    if ($globalSearch.hasClass('is-open')) {
      $globalSearch.toggleClass('is-open', false);
      setTimeout(function () {
        $this.data('js-has-active-transition', false);
      }, TRANSITION_TIMEOUT);
    } else {
      $globalSearch.toggleClass('is-open', true);
      setTimeout(function () {
        $globalSearch.find('input:text').focus();
        $this.data('js-has-active-transition', false);
      }, TRANSITION_TIMEOUT);
    }

    _event.preventDefault();
  }); //Study areas tabs toggle

  (0, _jquery.default)('#study-area-tabs li a').click(function () {
    if ((0, _jquery.default)(this).parent().hasClass('active')) {
      return;
    }

    (0, _jquery.default)('.active').removeClass('active');
    (0, _jquery.default)(this).parent().addClass('active');
    (0, _jquery.default)('.study-areas').toggleClass('hidden');
    (0, _jquery.default)('.degrees-quals').toggleClass('hidden');
  });
  /* study areas toggle programme level initially hide postgrad */

  (0, _jquery.default)('.study-areas-postgrad').hide();
  (0, _jquery.default)('.switch .switch-input').on('change', function () {
    if ((0, _jquery.default)(this).attr('value') == 'undergraduate') {
      (0, _jquery.default)('#study-area-tabs > ul > li:nth-child(1) h4').html('<span class="icon-book-open"></span>Subject areas');
      (0, _jquery.default)('.study-areas-undergrad').show(500);
      (0, _jquery.default)('.study-areas-postgrad').hide(500);
    }

    if ((0, _jquery.default)(this).attr('value') == 'postgraduate') {
      (0, _jquery.default)('#study-area-tabs > ul > li:nth-child(1) h4').html('<span class="icon-book-open"></span> Postgraduate subjects');
      (0, _jquery.default)('.study-areas-postgrad').show(500);
      (0, _jquery.default)('.study-areas-undergrad').hide(500);
    }
  });
  /* dynamic height for tiles. setting height of all tiles from largest tile height */

  (0, _jquery.default)('.dynamic-height-tiles ').each(function (n) {
    //get array of heights for each group of class
    var tileHeights = (0, _jquery.default)(this).find('li.tile').map(function () {
      return (0, _jquery.default)(this).height();
    }).get(); //check heights for largest

    var maxHeight = Math.max.apply(null, tileHeights); //apply maxheight to tiles

    (0, _jquery.default)(this).find('li.tile').height(maxHeight + 16);
  });
  /* Navigation toggle on mobile */

  (0, _jquery.default)('.main-menu-toggle').on('click', function () {
    (0, _jquery.default)('.main-nav').slideToggle();
    (0, _jquery.default)('.search-bar').slideToggle();
    (0, _jquery.default)('.menu-toggle-icon').toggleClass('open');
  });
  /* Show search bar on desktop */

  (0, _jquery.default)('.search-item').on('click', function () {
    (0, _jquery.default)('.search-bar').slideToggle();
    var searchInputElement = (0, _jquery.default)('#search-query');

    if (searchInputElement.is(':visible')) {
      searchInputElement.focus();
    }
  });
  /** DOM manipulation */

  wrapEmbeddedIframes();
  removedUnusedTiles(); //TODO: Review - Can be removed after all the study areas are migrated
  //tile accordion

  (0, _jquery.default)('.tile-accordion .tile').not('.tile-accordion.content-page').on('click', function (evt) {
    // evt.preventDefault();
    if ((0, _jquery.default)(this).hasClass('accordion-closed')) {
      (0, _jquery.default)(this).children('.accordion-content ').slideDown();
      (0, _jquery.default)(this).removeClass('accordion-closed').addClass('accordion-open');
    } else if ((0, _jquery.default)(this).hasClass('accordion-open')) {
      (0, _jquery.default)(this).children('.accordion-content ').slideUp();
      (0, _jquery.default)(this).removeClass('accordion-open').addClass('accordion-closed');
    }

    (0, _jquery.default)(this).find('.links a').on('click', function (event) {
      event.stopPropagation();
    });
  });
});
/* Research hub content page tile accordian */

(0, _jquery.default)('.tile-accordion.content-page .tile .toggle').on('click', function (evt) {
  var $this = (0, _jquery.default)(this);
  $this.toggleClass('expanded');
  $this.siblings('p').toggle();
});
/* Add accessible title label for restricted links class  */

function restrictedLinkTitle() {
  var lockLinks = document.querySelectorAll('.link-restricted');

  for (var i = 0; i < lockLinks.length; i++) {
    lockLinks[i].setAttribute('title', 'Restricted intranet link');
  }
}

restrictedLinkTitle();
/* Research hub mega menu */

function hubMegaMenu() {
  var menu = (0, _jquery.default)('.hub-mega-menu .mega-menu-inner');
  var menuExpandButton = (0, _jquery.default)('.hub-mega-menu .btn-expander');
  var mobile = false;
  var desktop = false;

  _enquire.default.register(DESKTOP_AND_LARGER, function () {
    desktop = true;
    mobile = false;
  });

  _enquire.default.register(TABLET_AND_SMALLER, function () {
    desktop = false;
    mobile = true;
  });

  menuExpandButton.each(function () {
    var _this = this;

    (0, _jquery.default)(this).on('click', function (c) {
      var $this = (0, _jquery.default)(_this);

      if (desktop) {
        menu.toggleClass('expanded');
      }

      if (mobile) {
        menu.addClass('expanded');
        $this.parent().toggleClass('js-dropdown-show');
      }
    });
  });
}

if (document.getElementsByClassName('hub-mega-menu').length > 0) {
  var hubMegaMenuElement = (0, _jquery.default)('.hub-mega-menu');
  var megaMenuExpandButton = (0, _jquery.default)('.hub-mega-menu .btn-expander');
  hubMegaMenu();

  if (_tracking.tracker.shouldTrackElement(hubMegaMenuElement)) {
    _tracking.tracker.registerForTracking(hubMegaMenuElement.find('li > a'), 'click', 'megamenu-link');

    _tracking.tracker.registerForTracking(megaMenuExpandButton, 'click', 'megamenu-expander');
  }
}

function openPopup() {
  _popups.default.initAndOpen(this[0]);

  return this;
}
/**
 * jQuery's plugin as a utility factory
 * Usage as: $( jquerySelector ).vicApp().method( options )
 */


(function ($) {
  $.fn.vicApp = function () {
    return {
      openPopup: openPopup.bind(this)
    };
  };
})(jQuery);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;;(function () {
	'use strict';

	/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/


	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	function FastClick(layer, options) {
		var oldOnClick;

		options = options || {};

		/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
		this.trackingClick = false;


		/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
		this.trackingClickStart = 0;


		/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
		this.targetElement = null;


		/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartX = 0;


		/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartY = 0;


		/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
		this.lastTouchIdentifier = 0;


		/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
		this.touchBoundary = options.touchBoundary || 10;


		/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
		this.layer = layer;

		/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
		this.tapDelay = options.tapDelay || 200;

		/**
		 * The maximum time for a tap
		 *
		 * @type number
		 */
		this.tapTimeout = options.tapTimeout || 700;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function() { return method.apply(context, arguments); };
		}


		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function(type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function(type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
						if (!event.propagationStopped) {
							callback(event);
						}
					}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function(event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	/**
	* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	*
	* @type boolean
	*/
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


	/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */
	var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


	/**
	 * iOS 6.0-7.* requires the target element to be manually derived
	 *
	 * @type boolean
	 */
	var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

	/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
	FastClick.prototype.needsClick = function(target) {
		switch (target.nodeName.toLowerCase()) {

		// Don't send a synthetic click to disabled inputs (issue #62)
		case 'button':
		case 'select':
		case 'textarea':
			if (target.disabled) {
				return true;
			}

			break;
		case 'input':

			// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
			if ((deviceIsIOS && target.type === 'file') || target.disabled) {
				return true;
			}

			break;
		case 'label':
		case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
		case 'video':
			return true;
		}

		return (/\bneedsclick\b/).test(target.className);
	};


	/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
	FastClick.prototype.needsFocus = function(target) {
		switch (target.nodeName.toLowerCase()) {
		case 'textarea':
			return true;
		case 'select':
			return !deviceIsAndroid;
		case 'input':
			switch (target.type) {
			case 'button':
			case 'checkbox':
			case 'file':
			case 'image':
			case 'radio':
			case 'submit':
				return false;
			}

			// No point in attempting to focus disabled inputs
			return !target.disabled && !target.readOnly;
		default:
			return (/\bneedsfocus\b/).test(target.className);
		}
	};


	/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
	FastClick.prototype.sendClick = function(targetElement, event) {
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function(targetElement) {

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};


	/**
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.focus = function(targetElement) {
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};


	/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.updateScrollParent = function(targetElement) {
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};


	/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
	FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};


	/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchStart = function(event) {
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};


	/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.touchHasMoved = function(event) {
		var touch = event.changedTouches[0], boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};


	/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchMove = function(event) {
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};


	/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
	FastClick.prototype.findControl = function(labelElement) {

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};


	/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchEnd = function(event) {
		var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};


	/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.onTouchCancel = function() {
		this.trackingClick = false;
		this.targetElement = null;
	};


	/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onMouse = function(event) {

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};


	/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onClick = function(event) {
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};


	/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.destroy = function() {
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};


	/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
	FastClick.notNeeded = function(layer) {
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;
		var firefoxVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

			// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (firefoxVersion >= 27) {
			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
				return true;
			}
		}

		// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		return false;
	};


	/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	FastClick.attach = function(layer, options) {
		return new FastClick(layer, options);
	};


	if (true) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return FastClick;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * headroom.js v0.9.4 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2017 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */

(function(root, factory) {
  'use strict';

  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  else {}
}(this, function() {
  'use strict';

  /* exported features */
  
  var features = {
    bind : !!(function(){}.bind),
    classList : 'classList' in document.documentElement,
    rAF : !!(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame)
  };
  window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
  
  /**
   * Handles debouncing of events via requestAnimationFrame
   * @see http://www.html5rocks.com/en/tutorials/speed/animations/
   * @param {Function} callback The callback to handle whichever event
   */
  function Debouncer (callback) {
    this.callback = callback;
    this.ticking = false;
  }
  Debouncer.prototype = {
    constructor : Debouncer,
  
    /**
     * dispatches the event to the supplied callback
     * @private
     */
    update : function() {
      this.callback && this.callback();
      this.ticking = false;
    },
  
    /**
     * ensures events don't get stacked
     * @private
     */
    requestTick : function() {
      if(!this.ticking) {
        requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this)));
        this.ticking = true;
      }
    },
  
    /**
     * Attach this as the event listeners
     */
    handleEvent : function() {
      this.requestTick();
    }
  };
  /**
   * Check if object is part of the DOM
   * @constructor
   * @param {Object} obj element to check
   */
  function isDOMElement(obj) {
    return obj && typeof window !== 'undefined' && (obj === window || obj.nodeType);
  }
  
  /**
   * Helper function for extending objects
   */
  function extend (object /*, objectN ... */) {
    if(arguments.length <= 0) {
      throw new Error('Missing arguments in extend function');
    }
  
    var result = object || {},
        key,
        i;
  
    for (i = 1; i < arguments.length; i++) {
      var replacement = arguments[i] || {};
  
      for (key in replacement) {
        // Recurse into object except if the object is a DOM element
        if(typeof result[key] === 'object' && ! isDOMElement(result[key])) {
          result[key] = extend(result[key], replacement[key]);
        }
        else {
          result[key] = result[key] || replacement[key];
        }
      }
    }
  
    return result;
  }
  
  /**
   * Helper function for normalizing tolerance option to object format
   */
  function normalizeTolerance (t) {
    return t === Object(t) ? t : { down : t, up : t };
  }
  
  /**
   * UI enhancement for fixed headers.
   * Hides header when scrolling down
   * Shows header when scrolling up
   * @constructor
   * @param {DOMElement} elem the header element
   * @param {Object} options options for the widget
   */
  function Headroom (elem, options) {
    options = extend(options, Headroom.options);
  
    this.lastKnownScrollY = 0;
    this.elem             = elem;
    this.tolerance        = normalizeTolerance(options.tolerance);
    this.classes          = options.classes;
    this.offset           = options.offset;
    this.scroller         = options.scroller;
    this.initialised      = false;
    this.onPin            = options.onPin;
    this.onUnpin          = options.onUnpin;
    this.onTop            = options.onTop;
    this.onNotTop         = options.onNotTop;
    this.onBottom         = options.onBottom;
    this.onNotBottom      = options.onNotBottom;
  }
  Headroom.prototype = {
    constructor : Headroom,
  
    /**
     * Initialises the widget
     */
    init : function() {
      if(!Headroom.cutsTheMustard) {
        return;
      }
  
      this.debouncer = new Debouncer(this.update.bind(this));
      this.elem.classList.add(this.classes.initial);
  
      // defer event registration to handle browser
      // potentially restoring previous scroll position
      setTimeout(this.attachEvent.bind(this), 100);
  
      return this;
    },
  
    /**
     * Unattaches events and removes any classes that were added
     */
    destroy : function() {
      var classes = this.classes;
  
      this.initialised = false;
  
      for (var key in classes) {
        if(classes.hasOwnProperty(key)) {
          this.elem.classList.remove(classes[key]);
        }
      }
  
      this.scroller.removeEventListener('scroll', this.debouncer, false);
    },
  
    /**
     * Attaches the scroll event
     * @private
     */
    attachEvent : function() {
      if(!this.initialised){
        this.lastKnownScrollY = this.getScrollY();
        this.initialised = true;
        this.scroller.addEventListener('scroll', this.debouncer, false);
  
        this.debouncer.handleEvent();
      }
    },
  
    /**
     * Unpins the header if it's currently pinned
     */
    unpin : function() {
      var classList = this.elem.classList,
        classes = this.classes;
  
      if(classList.contains(classes.pinned) || !classList.contains(classes.unpinned)) {
        classList.add(classes.unpinned);
        classList.remove(classes.pinned);
        this.onUnpin && this.onUnpin.call(this);
      }
    },
  
    /**
     * Pins the header if it's currently unpinned
     */
    pin : function() {
      var classList = this.elem.classList,
        classes = this.classes;
  
      if(classList.contains(classes.unpinned)) {
        classList.remove(classes.unpinned);
        classList.add(classes.pinned);
        this.onPin && this.onPin.call(this);
      }
    },
  
    /**
     * Handles the top states
     */
    top : function() {
      var classList = this.elem.classList,
        classes = this.classes;
  
      if(!classList.contains(classes.top)) {
        classList.add(classes.top);
        classList.remove(classes.notTop);
        this.onTop && this.onTop.call(this);
      }
    },
  
    /**
     * Handles the not top state
     */
    notTop : function() {
      var classList = this.elem.classList,
        classes = this.classes;
  
      if(!classList.contains(classes.notTop)) {
        classList.add(classes.notTop);
        classList.remove(classes.top);
        this.onNotTop && this.onNotTop.call(this);
      }
    },
  
    bottom : function() {
      var classList = this.elem.classList,
        classes = this.classes;
  
      if(!classList.contains(classes.bottom)) {
        classList.add(classes.bottom);
        classList.remove(classes.notBottom);
        this.onBottom && this.onBottom.call(this);
      }
    },
  
    /**
     * Handles the not top state
     */
    notBottom : function() {
      var classList = this.elem.classList,
        classes = this.classes;
  
      if(!classList.contains(classes.notBottom)) {
        classList.add(classes.notBottom);
        classList.remove(classes.bottom);
        this.onNotBottom && this.onNotBottom.call(this);
      }
    },
  
    /**
     * Gets the Y scroll position
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY
     * @return {Number} pixels the page has scrolled along the Y-axis
     */
    getScrollY : function() {
      return (this.scroller.pageYOffset !== undefined)
        ? this.scroller.pageYOffset
        : (this.scroller.scrollTop !== undefined)
          ? this.scroller.scrollTop
          : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    },
  
    /**
     * Gets the height of the viewport
     * @see http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript
     * @return {int} the height of the viewport in pixels
     */
    getViewportHeight : function () {
      return window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;
    },
  
    /**
     * Gets the physical height of the DOM element
     * @param  {Object}  elm the element to calculate the physical height of which
     * @return {int}     the physical height of the element in pixels
     */
    getElementPhysicalHeight : function (elm) {
      return Math.max(
        elm.offsetHeight,
        elm.clientHeight
      );
    },
  
    /**
     * Gets the physical height of the scroller element
     * @return {int} the physical height of the scroller element in pixels
     */
    getScrollerPhysicalHeight : function () {
      return (this.scroller === window || this.scroller === document.body)
        ? this.getViewportHeight()
        : this.getElementPhysicalHeight(this.scroller);
    },
  
    /**
     * Gets the height of the document
     * @see http://james.padolsey.com/javascript/get-document-height-cross-browser/
     * @return {int} the height of the document in pixels
     */
    getDocumentHeight : function () {
      var body = document.body,
        documentElement = document.documentElement;
  
      return Math.max(
        body.scrollHeight, documentElement.scrollHeight,
        body.offsetHeight, documentElement.offsetHeight,
        body.clientHeight, documentElement.clientHeight
      );
    },
  
    /**
     * Gets the height of the DOM element
     * @param  {Object}  elm the element to calculate the height of which
     * @return {int}     the height of the element in pixels
     */
    getElementHeight : function (elm) {
      return Math.max(
        elm.scrollHeight,
        elm.offsetHeight,
        elm.clientHeight
      );
    },
  
    /**
     * Gets the height of the scroller element
     * @return {int} the height of the scroller element in pixels
     */
    getScrollerHeight : function () {
      return (this.scroller === window || this.scroller === document.body)
        ? this.getDocumentHeight()
        : this.getElementHeight(this.scroller);
    },
  
    /**
     * determines if the scroll position is outside of document boundaries
     * @param  {int}  currentScrollY the current y scroll position
     * @return {bool} true if out of bounds, false otherwise
     */
    isOutOfBounds : function (currentScrollY) {
      var pastTop  = currentScrollY < 0,
        pastBottom = currentScrollY + this.getScrollerPhysicalHeight() > this.getScrollerHeight();
  
      return pastTop || pastBottom;
    },
  
    /**
     * determines if the tolerance has been exceeded
     * @param  {int} currentScrollY the current scroll y position
     * @return {bool} true if tolerance exceeded, false otherwise
     */
    toleranceExceeded : function (currentScrollY, direction) {
      return Math.abs(currentScrollY-this.lastKnownScrollY) >= this.tolerance[direction];
    },
  
    /**
     * determine if it is appropriate to unpin
     * @param  {int} currentScrollY the current y scroll position
     * @param  {bool} toleranceExceeded has the tolerance been exceeded?
     * @return {bool} true if should unpin, false otherwise
     */
    shouldUnpin : function (currentScrollY, toleranceExceeded) {
      var scrollingDown = currentScrollY > this.lastKnownScrollY,
        pastOffset = currentScrollY >= this.offset;
  
      return scrollingDown && pastOffset && toleranceExceeded;
    },
  
    /**
     * determine if it is appropriate to pin
     * @param  {int} currentScrollY the current y scroll position
     * @param  {bool} toleranceExceeded has the tolerance been exceeded?
     * @return {bool} true if should pin, false otherwise
     */
    shouldPin : function (currentScrollY, toleranceExceeded) {
      var scrollingUp  = currentScrollY < this.lastKnownScrollY,
        pastOffset = currentScrollY <= this.offset;
  
      return (scrollingUp && toleranceExceeded) || pastOffset;
    },
  
    /**
     * Handles updating the state of the widget
     */
    update : function() {
      var currentScrollY  = this.getScrollY(),
        scrollDirection = currentScrollY > this.lastKnownScrollY ? 'down' : 'up',
        toleranceExceeded = this.toleranceExceeded(currentScrollY, scrollDirection);
  
      if(this.isOutOfBounds(currentScrollY)) { // Ignore bouncy scrolling in OSX
        return;
      }
  
      if (currentScrollY <= this.offset ) {
        this.top();
      } else {
        this.notTop();
      }
  
      if(currentScrollY + this.getViewportHeight() >= this.getScrollerHeight()) {
        this.bottom();
      }
      else {
        this.notBottom();
      }
  
      if(this.shouldUnpin(currentScrollY, toleranceExceeded)) {
        this.unpin();
      }
      else if(this.shouldPin(currentScrollY, toleranceExceeded)) {
        this.pin();
      }
  
      this.lastKnownScrollY = currentScrollY;
    }
  };
  /**
   * Default options
   * @type {Object}
   */
  Headroom.options = {
    tolerance : {
      up : 0,
      down : 0
    },
    offset : 0,
    scroller: window,
    classes : {
      pinned : 'headroom--pinned',
      unpinned : 'headroom--unpinned',
      top : 'headroom--top',
      notTop : 'headroom--not-top',
      bottom : 'headroom--bottom',
      notBottom : 'headroom--not-bottom',
      initial : 'headroom'
    }
  };
  Headroom.cutsTheMustard = typeof features !== 'undefined' && features.rAF && features.bind && features.classList;

  return Headroom;
}));

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var MediaQueryDispatch = __webpack_require__(6);
module.exports = new MediaQueryDispatch();


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var MediaQuery = __webpack_require__(7);
var Util = __webpack_require__(1);
var each = Util.each;
var isFunction = Util.isFunction;
var isArray = Util.isArray;

/**
 * Allows for registration of query handlers.
 * Manages the query handler's state and is responsible for wiring up browser events
 *
 * @constructor
 */
function MediaQueryDispatch () {
    if(!window.matchMedia) {
        throw new Error('matchMedia not present, legacy browsers require a polyfill');
    }

    this.queries = {};
    this.browserIsIncapable = !window.matchMedia('only all').matches;
}

MediaQueryDispatch.prototype = {

    constructor : MediaQueryDispatch,

    /**
     * Registers a handler for the given media query
     *
     * @param {string} q the media query
     * @param {object || Array || Function} options either a single query handler object, a function, or an array of query handlers
     * @param {function} options.match fired when query matched
     * @param {function} [options.unmatch] fired when a query is no longer matched
     * @param {function} [options.setup] fired when handler first triggered
     * @param {boolean} [options.deferSetup=false] whether setup should be run immediately or deferred until query is first matched
     * @param {boolean} [shouldDegrade=false] whether this particular media query should always run on incapable browsers
     */
    register : function(q, options, shouldDegrade) {
        var queries         = this.queries,
            isUnconditional = shouldDegrade && this.browserIsIncapable;

        if(!queries[q]) {
            queries[q] = new MediaQuery(q, isUnconditional);
        }

        //normalise to object in an array
        if(isFunction(options)) {
            options = { match : options };
        }
        if(!isArray(options)) {
            options = [options];
        }
        each(options, function(handler) {
            if (isFunction(handler)) {
                handler = { match : handler };
            }
            queries[q].addHandler(handler);
        });

        return this;
    },

    /**
     * unregisters a query and all it's handlers, or a specific handler for a query
     *
     * @param {string} q the media query to target
     * @param {object || function} [handler] specific handler to unregister
     */
    unregister : function(q, handler) {
        var query = this.queries[q];

        if(query) {
            if(handler) {
                query.removeHandler(handler);
            }
            else {
                query.clear();
                delete this.queries[q];
            }
        }

        return this;
    }
};

module.exports = MediaQueryDispatch;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var QueryHandler = __webpack_require__(8);
var each = __webpack_require__(1).each;

/**
 * Represents a single media query, manages it's state and registered handlers for this query
 *
 * @constructor
 * @param {string} query the media query string
 * @param {boolean} [isUnconditional=false] whether the media query should run regardless of whether the conditions are met. Primarily for helping older browsers deal with mobile-first design
 */
function MediaQuery(query, isUnconditional) {
    this.query = query;
    this.isUnconditional = isUnconditional;
    this.handlers = [];
    this.mql = window.matchMedia(query);

    var self = this;
    this.listener = function(mql) {
        // Chrome passes an MediaQueryListEvent object, while other browsers pass MediaQueryList directly
        self.mql = mql.currentTarget || mql;
        self.assess();
    };
    this.mql.addListener(this.listener);
}

MediaQuery.prototype = {

    constuctor : MediaQuery,

    /**
     * add a handler for this query, triggering if already active
     *
     * @param {object} handler
     * @param {function} handler.match callback for when query is activated
     * @param {function} [handler.unmatch] callback for when query is deactivated
     * @param {function} [handler.setup] callback for immediate execution when a query handler is registered
     * @param {boolean} [handler.deferSetup=false] should the setup callback be deferred until the first time the handler is matched?
     */
    addHandler : function(handler) {
        var qh = new QueryHandler(handler);
        this.handlers.push(qh);

        this.matches() && qh.on();
    },

    /**
     * removes the given handler from the collection, and calls it's destroy methods
     *
     * @param {object || function} handler the handler to remove
     */
    removeHandler : function(handler) {
        var handlers = this.handlers;
        each(handlers, function(h, i) {
            if(h.equals(handler)) {
                h.destroy();
                return !handlers.splice(i,1); //remove from array and exit each early
            }
        });
    },

    /**
     * Determine whether the media query should be considered a match
     *
     * @return {Boolean} true if media query can be considered a match, false otherwise
     */
    matches : function() {
        return this.mql.matches || this.isUnconditional;
    },

    /**
     * Clears all handlers and unbinds events
     */
    clear : function() {
        each(this.handlers, function(handler) {
            handler.destroy();
        });
        this.mql.removeListener(this.listener);
        this.handlers.length = 0; //clear array
    },

    /*
        * Assesses the query, turning on all handlers if it matches, turning them off if it doesn't match
        */
    assess : function() {
        var action = this.matches() ? 'on' : 'off';

        each(this.handlers, function(handler) {
            handler[action]();
        });
    }
};

module.exports = MediaQuery;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
 * Delegate to handle a media query being matched and unmatched.
 *
 * @param {object} options
 * @param {function} options.match callback for when the media query is matched
 * @param {function} [options.unmatch] callback for when the media query is unmatched
 * @param {function} [options.setup] one-time callback triggered the first time a query is matched
 * @param {boolean} [options.deferSetup=false] should the setup callback be run immediately, rather than first time query is matched?
 * @constructor
 */
function QueryHandler(options) {
    this.options = options;
    !options.deferSetup && this.setup();
}

QueryHandler.prototype = {

    constructor : QueryHandler,

    /**
     * coordinates setup of the handler
     *
     * @function
     */
    setup : function() {
        if(this.options.setup) {
            this.options.setup();
        }
        this.initialised = true;
    },

    /**
     * coordinates setup and triggering of the handler
     *
     * @function
     */
    on : function() {
        !this.initialised && this.setup();
        this.options.match && this.options.match();
    },

    /**
     * coordinates the unmatch event for the handler
     *
     * @function
     */
    off : function() {
        this.options.unmatch && this.options.unmatch();
    },

    /**
     * called when a handler is to be destroyed.
     * delegates to the destroy or unmatch callbacks, depending on availability.
     *
     * @function
     */
    destroy : function() {
        this.options.destroy ? this.options.destroy() : this.off();
    },

    /**
     * determines equality by reference.
     * if object is supplied compare options, if function, compare match callback
     *
     * @function
     * @param {object || function} [target] the target for comparison
     */
    equals : function(target) {
        return this.options === target || this.options.match === target;
    }

};

module.exports = QueryHandler;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! Lity - v2.3.1 - 2018-04-20
* http://sorgalla.com/lity/
* Copyright (c) 2015-2018 Jan Sorgalla; Licensed MIT */
(function(window, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = (function($) {
            return factory(window, $);
        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(typeof window !== "undefined" ? window : this, function(window, $) {
    'use strict';

    var document = window.document;

    var _win = $(window);
    var _deferred = $.Deferred;
    var _html = $('html');
    var _instances = [];

    var _attrAriaHidden = 'aria-hidden';
    var _dataAriaHidden = 'lity-' + _attrAriaHidden;

    var _focusableElementsSelector = 'a[href],area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),iframe,object,embed,[contenteditable],[tabindex]:not([tabindex^="-"])';

    var _defaultOptions = {
        esc: true,
        handler: null,
        handlers: {
            image: imageHandler,
            inline: inlineHandler,
            youtube: youtubeHandler,
            vimeo: vimeoHandler,
            googlemaps: googlemapsHandler,
            facebookvideo: facebookvideoHandler,
            iframe: iframeHandler
        },
        template: '<div class="lity" role="dialog" aria-label="Dialog Window (Press escape to close)" tabindex="-1"><div class="lity-wrap" data-lity-close role="document"><div class="lity-loader" aria-hidden="true">Loading...</div><div class="lity-container"><div class="lity-content"></div><button class="lity-close" type="button" aria-label="Close (Press escape to close)" data-lity-close>&times;</button></div></div></div>'
    };

    var _imageRegexp = /(^data:image\/)|(\.(png|jpe?g|gif|svg|webp|bmp|ico|tiff?)(\?\S*)?$)/i;
    var _youtubeRegex = /(youtube(-nocookie)?\.com|youtu\.be)\/(watch\?v=|v\/|u\/|embed\/?)?([\w-]{11})(.*)?/i;
    var _vimeoRegex =  /(vimeo(pro)?.com)\/(?:[^\d]+)?(\d+)\??(.*)?$/;
    var _googlemapsRegex = /((maps|www)\.)?google\.([^\/\?]+)\/?((maps\/?)?\?)(.*)/i;
    var _facebookvideoRegex = /(facebook\.com)\/([a-z0-9_-]*)\/videos\/([0-9]*)(.*)?$/i;

    var _transitionEndEvent = (function() {
        var el = document.createElement('div');

        var transEndEventNames = {
            WebkitTransition: 'webkitTransitionEnd',
            MozTransition: 'transitionend',
            OTransition: 'oTransitionEnd otransitionend',
            transition: 'transitionend'
        };

        for (var name in transEndEventNames) {
            if (el.style[name] !== undefined) {
                return transEndEventNames[name];
            }
        }

        return false;
    })();

    function transitionEnd(element) {
        var deferred = _deferred();

        if (!_transitionEndEvent || !element.length) {
            deferred.resolve();
        } else {
            element.one(_transitionEndEvent, deferred.resolve);
            setTimeout(deferred.resolve, 500);
        }

        return deferred.promise();
    }

    function settings(currSettings, key, value) {
        if (arguments.length === 1) {
            return $.extend({}, currSettings);
        }

        if (typeof key === 'string') {
            if (typeof value === 'undefined') {
                return typeof currSettings[key] === 'undefined'
                    ? null
                    : currSettings[key];
            }

            currSettings[key] = value;
        } else {
            $.extend(currSettings, key);
        }

        return this;
    }

    function parseQueryParams(params) {
        var pairs = decodeURI(params.split('#')[0]).split('&');
        var obj = {}, p;

        for (var i = 0, n = pairs.length; i < n; i++) {
            if (!pairs[i]) {
                continue;
            }

            p = pairs[i].split('=');
            obj[p[0]] = p[1];
        }

        return obj;
    }

    function appendQueryParams(url, params) {
        return url + (url.indexOf('?') > -1 ? '&' : '?') + $.param(params);
    }

    function transferHash(originalUrl, newUrl) {
        var pos = originalUrl.indexOf('#');

        if (-1 === pos) {
            return newUrl;
        }

        if (pos > 0) {
            originalUrl = originalUrl.substr(pos);
        }

        return newUrl + originalUrl;
    }

    function error(msg) {
        return $('<span class="lity-error"/>').append(msg);
    }

    function imageHandler(target, instance) {
        var desc = (instance.opener() && instance.opener().data('lity-desc')) || 'Image with no description';
        var img = $('<img src="' + target + '" alt="' + desc + '"/>');
        var deferred = _deferred();
        var failed = function() {
            deferred.reject(error('Failed loading image'));
        };

        img
            .on('load', function() {
                if (this.naturalWidth === 0) {
                    return failed();
                }

                deferred.resolve(img);
            })
            .on('error', failed)
        ;

        return deferred.promise();
    }

    imageHandler.test = function(target) {
        return _imageRegexp.test(target);
    };

    function inlineHandler(target, instance) {
        var el, placeholder, hasHideClass;

        try {
            el = $(target);
        } catch (e) {
            return false;
        }

        if (!el.length) {
            return false;
        }

        placeholder = $('<i style="display:none !important"/>');
        hasHideClass = el.hasClass('lity-hide');

        instance
            .element()
            .one('lity:remove', function() {
                placeholder
                    .before(el)
                    .remove()
                ;

                if (hasHideClass && !el.closest('.lity-content').length) {
                    el.addClass('lity-hide');
                }
            })
        ;

        return el
            .removeClass('lity-hide')
            .after(placeholder)
        ;
    }

    function youtubeHandler(target) {
        var matches = _youtubeRegex.exec(target);

        if (!matches) {
            return false;
        }

        return iframeHandler(
            transferHash(
                target,
                appendQueryParams(
                    'https://www.youtube' + (matches[2] || '') + '.com/embed/' + matches[4],
                    $.extend(
                        {
                            autoplay: 1
                        },
                        parseQueryParams(matches[5] || '')
                    )
                )
            )
        );
    }

    function vimeoHandler(target) {
        var matches = _vimeoRegex.exec(target);

        if (!matches) {
            return false;
        }

        return iframeHandler(
            transferHash(
                target,
                appendQueryParams(
                    'https://player.vimeo.com/video/' + matches[3],
                    $.extend(
                        {
                            autoplay: 1
                        },
                        parseQueryParams(matches[4] || '')
                    )
                )
            )
        );
    }

    function facebookvideoHandler(target) {
        var matches = _facebookvideoRegex.exec(target);

        if (!matches) {
            return false;
        }

        if (0 !== target.indexOf('http')) {
            target = 'https:' + target;
        }

        return iframeHandler(
            transferHash(
                target,
                appendQueryParams(
                    'https://www.facebook.com/plugins/video.php?href=' + target,
                    $.extend(
                        {
                            autoplay: 1
                        },
                        parseQueryParams(matches[4] || '')
                    )
                )
            )
        );
    }

    function googlemapsHandler(target) {
        var matches = _googlemapsRegex.exec(target);

        if (!matches) {
            return false;
        }

        return iframeHandler(
            transferHash(
                target,
                appendQueryParams(
                    'https://www.google.' + matches[3] + '/maps?' + matches[6],
                    {
                        output: matches[6].indexOf('layer=c') > 0 ? 'svembed' : 'embed'
                    }
                )
            )
        );
    }

    function iframeHandler(target) {
        return '<div class="lity-iframe-container"><iframe frameborder="0" allowfullscreen src="' + target + '"/></div>';
    }

    function winHeight() {
        return document.documentElement.clientHeight
            ? document.documentElement.clientHeight
            : Math.round(_win.height());
    }

    function keydown(e) {
        var current = currentInstance();

        if (!current) {
            return;
        }

        // ESC key
        if (e.keyCode === 27 && !!current.options('esc')) {
            current.close();
        }

        // TAB key
        if (e.keyCode === 9) {
            handleTabKey(e, current);
        }
    }

    function handleTabKey(e, instance) {
        var focusableElements = instance.element().find(_focusableElementsSelector);
        var focusedIndex = focusableElements.index(document.activeElement);

        if (e.shiftKey && focusedIndex <= 0) {
            focusableElements.get(focusableElements.length - 1).focus();
            e.preventDefault();
        } else if (!e.shiftKey && focusedIndex === focusableElements.length - 1) {
            focusableElements.get(0).focus();
            e.preventDefault();
        }
    }

    function resize() {
        $.each(_instances, function(i, instance) {
            instance.resize();
        });
    }

    function registerInstance(instanceToRegister) {
        if (1 === _instances.unshift(instanceToRegister)) {
            _html.addClass('lity-active');

            _win
                .on({
                    resize: resize,
                    keydown: keydown
                })
            ;
        }

        $('body > *').not(instanceToRegister.element())
            .addClass('lity-hidden')
            .each(function() {
                var el = $(this);

                if (undefined !== el.data(_dataAriaHidden)) {
                    return;
                }

                el.data(_dataAriaHidden, el.attr(_attrAriaHidden) || null);
            })
            .attr(_attrAriaHidden, 'true')
        ;
    }

    function removeInstance(instanceToRemove) {
        var show;

        instanceToRemove
            .element()
            .attr(_attrAriaHidden, 'true')
        ;

        if (1 === _instances.length) {
            _html.removeClass('lity-active');

            _win
                .off({
                    resize: resize,
                    keydown: keydown
                })
            ;
        }

        _instances = $.grep(_instances, function(instance) {
            return instanceToRemove !== instance;
        });

        if (!!_instances.length) {
            show = _instances[0].element();
        } else {
            show = $('.lity-hidden');
        }

        show
            .removeClass('lity-hidden')
            .each(function() {
                var el = $(this), oldAttr = el.data(_dataAriaHidden);

                if (!oldAttr) {
                    el.removeAttr(_attrAriaHidden);
                } else {
                    el.attr(_attrAriaHidden, oldAttr);
                }

                el.removeData(_dataAriaHidden);
            })
        ;
    }

    function currentInstance() {
        if (0 === _instances.length) {
            return null;
        }

        return _instances[0];
    }

    function factory(target, instance, handlers, preferredHandler) {
        var handler = 'inline', content;

        var currentHandlers = $.extend({}, handlers);

        if (preferredHandler && currentHandlers[preferredHandler]) {
            content = currentHandlers[preferredHandler](target, instance);
            handler = preferredHandler;
        } else {
            // Run inline and iframe handlers after all other handlers
            $.each(['inline', 'iframe'], function(i, name) {
                delete currentHandlers[name];

                currentHandlers[name] = handlers[name];
            });

            $.each(currentHandlers, function(name, currentHandler) {
                // Handler might be "removed" by setting callback to null
                if (!currentHandler) {
                    return true;
                }

                if (
                    currentHandler.test &&
                    !currentHandler.test(target, instance)
                ) {
                    return true;
                }

                content = currentHandler(target, instance);

                if (false !== content) {
                    handler = name;
                    return false;
                }
            });
        }

        return {handler: handler, content: content || ''};
    }

    function Lity(target, options, opener, activeElement) {
        var self = this;
        var result;
        var isReady = false;
        var isClosed = false;
        var element;
        var content;

        options = $.extend(
            {},
            _defaultOptions,
            options
        );

        element = $(options.template);

        // -- API --

        self.element = function() {
            return element;
        };

        self.opener = function() {
            return opener;
        };

        self.options  = $.proxy(settings, self, options);
        self.handlers = $.proxy(settings, self, options.handlers);

        self.resize = function() {
            if (!isReady || isClosed) {
                return;
            }

            content
                .css('max-height', winHeight() + 'px')
                .trigger('lity:resize', [self])
            ;
        };

        self.close = function() {
            if (!isReady || isClosed) {
                return;
            }

            isClosed = true;

            removeInstance(self);

            var deferred = _deferred();

            // We return focus only if the current focus is inside this instance
            if (
                activeElement &&
                (
                    document.activeElement === element[0] ||
                    $.contains(element[0], document.activeElement)
                )
            ) {
                try {
                    activeElement.focus();
                } catch (e) {
                    // Ignore exceptions, eg. for SVG elements which can't be
                    // focused in IE11
                }
            }

            content.trigger('lity:close', [self]);

            element
                .removeClass('lity-opened')
                .addClass('lity-closed')
            ;

            transitionEnd(content.add(element))
                .always(function() {
                    content.trigger('lity:remove', [self]);
                    element.remove();
                    element = undefined;
                    deferred.resolve();
                })
            ;

            return deferred.promise();
        };

        // -- Initialization --

        result = factory(target, self, options.handlers, options.handler);

        element
            .attr(_attrAriaHidden, 'false')
            .addClass('lity-loading lity-opened lity-' + result.handler)
            .appendTo('body')
            .focus()
            .on('click', '[data-lity-close]', function(e) {
                if ($(e.target).is('[data-lity-close]')) {
                    self.close();
                }
            })
            .trigger('lity:open', [self])
        ;

        registerInstance(self);

        $.when(result.content)
            .always(ready)
        ;

        function ready(result) {
            content = $(result)
                .css('max-height', winHeight() + 'px')
            ;

            element
                .find('.lity-loader')
                .each(function() {
                    var loader = $(this);

                    transitionEnd(loader)
                        .always(function() {
                            loader.remove();
                        })
                    ;
                })
            ;

            element
                .removeClass('lity-loading')
                .find('.lity-content')
                .empty()
                .append(content)
            ;

            isReady = true;

            content
                .trigger('lity:ready', [self])
            ;
        }
    }

    function lity(target, options, opener) {
        if (!target.preventDefault) {
            opener = $(opener);
        } else {
            target.preventDefault();
            opener = $(this);
            target = opener.data('lity-target') || opener.attr('href') || opener.attr('src');
        }

        var instance = new Lity(
            target,
            $.extend(
                {},
                opener.data('lity-options') || opener.data('lity'),
                options
            ),
            opener,
            document.activeElement
        );

        if (!target.preventDefault) {
            return instance;
        }
    }

    lity.version  = '2.3.1';
    lity.options  = $.proxy(settings, lity, _defaultOptions);
    lity.handlers = $.proxy(settings, lity, _defaultOptions.handlers);
    lity.current  = currentInstance;

    $(document).on('click.lity', '[data-lity]', lity);

    return lity;
}));


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
/*! Gecko-Picture - v1.0
 * https://github.com/scottjehl/picturefill/tree/3.0/src/plugins/gecko-picture
 * Firefox's early picture implementation (prior to FF41) is static and does
 * not react to viewport changes. This tiny module fixes this.
 */
(function(window) {
	/*jshint eqnull:true */
	var ua = navigator.userAgent;

	if ( window.HTMLPictureElement && ((/ecko/).test(ua) && ua.match(/rv\:(\d+)/) && RegExp.$1 < 45) ) {
		addEventListener("resize", (function() {
			var timer;

			var dummySrc = document.createElement("source");

			var fixRespimg = function(img) {
				var source, sizes;
				var picture = img.parentNode;

				if (picture.nodeName.toUpperCase() === "PICTURE") {
					source = dummySrc.cloneNode();

					picture.insertBefore(source, picture.firstElementChild);
					setTimeout(function() {
						picture.removeChild(source);
					});
				} else if (!img._pfLastSize || img.offsetWidth > img._pfLastSize) {
					img._pfLastSize = img.offsetWidth;
					sizes = img.sizes;
					img.sizes += ",100vw";
					setTimeout(function() {
						img.sizes = sizes;
					});
				}
			};

			var findPictureImgs = function() {
				var i;
				var imgs = document.querySelectorAll("picture > img, img[srcset][sizes]");
				for (i = 0; i < imgs.length; i++) {
					fixRespimg(imgs[i]);
				}
			};
			var onResize = function() {
				clearTimeout(timer);
				timer = setTimeout(findPictureImgs, 99);
			};
			var mq = window.matchMedia && matchMedia("(orientation: landscape)");
			var init = function() {
				onResize();

				if (mq && mq.addListener) {
					mq.addListener(onResize);
				}
			};

			dummySrc.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

			if (/^[c|i]|d$/.test(document.readyState || "")) {
				init();
			} else {
				document.addEventListener("DOMContentLoaded", init);
			}

			return onResize;
		})());
	}
})(window);

/*! Picturefill - v3.0.2
 * http://scottjehl.github.io/picturefill
 * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt;
 *  License: MIT
 */

(function( window, document, undefined ) {
	// Enable strict mode
	"use strict";

	// HTML shim|v it for old IE (IE9 will still need the HTML video tag workaround)
	document.createElement( "picture" );

	var warn, eminpx, alwaysCheckWDescriptor, evalId;
	// local object for method references and testing exposure
	var pf = {};
	var isSupportTestReady = false;
	var noop = function() {};
	var image = document.createElement( "img" );
	var getImgAttr = image.getAttribute;
	var setImgAttr = image.setAttribute;
	var removeImgAttr = image.removeAttribute;
	var docElem = document.documentElement;
	var types = {};
	var cfg = {
		//resource selection:
		algorithm: ""
	};
	var srcAttr = "data-pfsrc";
	var srcsetAttr = srcAttr + "set";
	// ua sniffing is done for undetectable img loading features,
	// to do some non crucial perf optimizations
	var ua = navigator.userAgent;
	var supportAbort = (/rident/).test(ua) || ((/ecko/).test(ua) && ua.match(/rv\:(\d+)/) && RegExp.$1 > 35 );
	var curSrcProp = "currentSrc";
	var regWDesc = /\s+\+?\d+(e\d+)?w/;
	var regSize = /(\([^)]+\))?\s*(.+)/;
	var setOptions = window.picturefillCFG;
	/**
	 * Shortcut property for https://w3c.github.io/webappsec/specs/mixedcontent/#restricts-mixed-content ( for easy overriding in tests )
	 */
	// baseStyle also used by getEmValue (i.e.: width: 1em is important)
	var baseStyle = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)";
	var fsCss = "font-size:100%!important;";
	var isVwDirty = true;

	var cssCache = {};
	var sizeLengthCache = {};
	var DPR = window.devicePixelRatio;
	var units = {
		px: 1,
		"in": 96
	};
	var anchor = document.createElement( "a" );
	/**
	 * alreadyRun flag used for setOptions. is it true setOptions will reevaluate
	 * @type {boolean}
	 */
	var alreadyRun = false;

	// Reusable, non-"g" Regexes

	// (Don't use \s, to avoid matching non-breaking space.)
	var regexLeadingSpaces = /^[ \t\n\r\u000c]+/,
	    regexLeadingCommasOrSpaces = /^[, \t\n\r\u000c]+/,
	    regexLeadingNotSpaces = /^[^ \t\n\r\u000c]+/,
	    regexTrailingCommas = /[,]+$/,
	    regexNonNegativeInteger = /^\d+$/,

	    // ( Positive or negative or unsigned integers or decimals, without or without exponents.
	    // Must include at least one digit.
	    // According to spec tests any decimal point must be followed by a digit.
	    // No leading plus sign is allowed.)
	    // https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number
	    regexFloatingPoint = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;

	var on = function(obj, evt, fn, capture) {
		if ( obj.addEventListener ) {
			obj.addEventListener(evt, fn, capture || false);
		} else if ( obj.attachEvent ) {
			obj.attachEvent( "on" + evt, fn);
		}
	};

	/**
	 * simple memoize function:
	 */

	var memoize = function(fn) {
		var cache = {};
		return function(input) {
			if ( !(input in cache) ) {
				cache[ input ] = fn(input);
			}
			return cache[ input ];
		};
	};

	// UTILITY FUNCTIONS

	// Manual is faster than RegEx
	// http://jsperf.com/whitespace-character/5
	function isSpace(c) {
		return (c === "\u0020" || // space
		        c === "\u0009" || // horizontal tab
		        c === "\u000A" || // new line
		        c === "\u000C" || // form feed
		        c === "\u000D");  // carriage return
	}

	/**
	 * gets a mediaquery and returns a boolean or gets a css length and returns a number
	 * @param css mediaqueries or css length
	 * @returns {boolean|number}
	 *
	 * based on: https://gist.github.com/jonathantneal/db4f77009b155f083738
	 */
	var evalCSS = (function() {

		var regLength = /^([\d\.]+)(em|vw|px)$/;
		var replace = function() {
			var args = arguments, index = 0, string = args[0];
			while (++index in args) {
				string = string.replace(args[index], args[++index]);
			}
			return string;
		};

		var buildStr = memoize(function(css) {

			return "return " + replace((css || "").toLowerCase(),
				// interpret `and`
				/\band\b/g, "&&",

				// interpret `,`
				/,/g, "||",

				// interpret `min-` as >=
				/min-([a-z-\s]+):/g, "e.$1>=",

				// interpret `max-` as <=
				/max-([a-z-\s]+):/g, "e.$1<=",

				//calc value
				/calc([^)]+)/g, "($1)",

				// interpret css values
				/(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)",
				//make eval less evil
				/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/ig, ""
			) + ";";
		});

		return function(css, length) {
			var parsedLength;
			if (!(css in cssCache)) {
				cssCache[css] = false;
				if (length && (parsedLength = css.match( regLength ))) {
					cssCache[css] = parsedLength[ 1 ] * units[parsedLength[ 2 ]];
				} else {
					/*jshint evil:true */
					try{
						cssCache[css] = new Function("e", buildStr(css))(units);
					} catch(e) {}
					/*jshint evil:false */
				}
			}
			return cssCache[css];
		};
	})();

	var setResolution = function( candidate, sizesattr ) {
		if ( candidate.w ) { // h = means height: || descriptor.type === 'h' do not handle yet...
			candidate.cWidth = pf.calcListLength( sizesattr || "100vw" );
			candidate.res = candidate.w / candidate.cWidth ;
		} else {
			candidate.res = candidate.d;
		}
		return candidate;
	};

	/**
	 *
	 * @param opt
	 */
	var picturefill = function( opt ) {

		if (!isSupportTestReady) {return;}

		var elements, i, plen;

		var options = opt || {};

		if ( options.elements && options.elements.nodeType === 1 ) {
			if ( options.elements.nodeName.toUpperCase() === "IMG" ) {
				options.elements =  [ options.elements ];
			} else {
				options.context = options.elements;
				options.elements =  null;
			}
		}

		elements = options.elements || pf.qsa( (options.context || document), ( options.reevaluate || options.reselect ) ? pf.sel : pf.selShort );

		if ( (plen = elements.length) ) {

			pf.setupRun( options );
			alreadyRun = true;

			// Loop through all elements
			for ( i = 0; i < plen; i++ ) {
				pf.fillImg(elements[ i ], options);
			}

			pf.teardownRun( options );
		}
	};

	/**
	 * outputs a warning for the developer
	 * @param {message}
	 * @type {Function}
	 */
	warn = ( window.console && console.warn ) ?
		function( message ) {
			console.warn( message );
		} :
		noop
	;

	if ( !(curSrcProp in image) ) {
		curSrcProp = "src";
	}

	// Add support for standard mime types.
	types[ "image/jpeg" ] = true;
	types[ "image/gif" ] = true;
	types[ "image/png" ] = true;

	function detectTypeSupport( type, typeUri ) {
		// based on Modernizr's lossless img-webp test
		// note: asynchronous
		var image = new window.Image();
		image.onerror = function() {
			types[ type ] = false;
			picturefill();
		};
		image.onload = function() {
			types[ type ] = image.width === 1;
			picturefill();
		};
		image.src = typeUri;
		return "pending";
	}

	// test svg support
	types[ "image/svg+xml" ] = document.implementation.hasFeature( "http://www.w3.org/TR/SVG11/feature#Image", "1.1" );

	/**
	 * updates the internal vW property with the current viewport width in px
	 */
	function updateMetrics() {

		isVwDirty = false;
		DPR = window.devicePixelRatio;
		cssCache = {};
		sizeLengthCache = {};

		pf.DPR = DPR || 1;

		units.width = Math.max(window.innerWidth || 0, docElem.clientWidth);
		units.height = Math.max(window.innerHeight || 0, docElem.clientHeight);

		units.vw = units.width / 100;
		units.vh = units.height / 100;

		evalId = [ units.height, units.width, DPR ].join("-");

		units.em = pf.getEmValue();
		units.rem = units.em;
	}

	function chooseLowRes( lowerValue, higherValue, dprValue, isCached ) {
		var bonusFactor, tooMuch, bonus, meanDensity;

		//experimental
		if (cfg.algorithm === "saveData" ){
			if ( lowerValue > 2.7 ) {
				meanDensity = dprValue + 1;
			} else {
				tooMuch = higherValue - dprValue;
				bonusFactor = Math.pow(lowerValue - 0.6, 1.5);

				bonus = tooMuch * bonusFactor;

				if (isCached) {
					bonus += 0.1 * bonusFactor;
				}

				meanDensity = lowerValue + bonus;
			}
		} else {
			meanDensity = (dprValue > 1) ?
				Math.sqrt(lowerValue * higherValue) :
				lowerValue;
		}

		return meanDensity > dprValue;
	}

	function applyBestCandidate( img ) {
		var srcSetCandidates;
		var matchingSet = pf.getSet( img );
		var evaluated = false;
		if ( matchingSet !== "pending" ) {
			evaluated = evalId;
			if ( matchingSet ) {
				srcSetCandidates = pf.setRes( matchingSet );
				pf.applySetCandidate( srcSetCandidates, img );
			}
		}
		img[ pf.ns ].evaled = evaluated;
	}

	function ascendingSort( a, b ) {
		return a.res - b.res;
	}

	function setSrcToCur( img, src, set ) {
		var candidate;
		if ( !set && src ) {
			set = img[ pf.ns ].sets;
			set = set && set[set.length - 1];
		}

		candidate = getCandidateForSrc(src, set);

		if ( candidate ) {
			src = pf.makeUrl(src);
			img[ pf.ns ].curSrc = src;
			img[ pf.ns ].curCan = candidate;

			if ( !candidate.res ) {
				setResolution( candidate, candidate.set.sizes );
			}
		}
		return candidate;
	}

	function getCandidateForSrc( src, set ) {
		var i, candidate, candidates;
		if ( src && set ) {
			candidates = pf.parseSet( set );
			src = pf.makeUrl(src);
			for ( i = 0; i < candidates.length; i++ ) {
				if ( src === pf.makeUrl(candidates[ i ].url) ) {
					candidate = candidates[ i ];
					break;
				}
			}
		}
		return candidate;
	}

	function getAllSourceElements( picture, candidates ) {
		var i, len, source, srcset;

		// SPEC mismatch intended for size and perf:
		// actually only source elements preceding the img should be used
		// also note: don't use qsa here, because IE8 sometimes doesn't like source as the key part in a selector
		var sources = picture.getElementsByTagName( "source" );

		for ( i = 0, len = sources.length; i < len; i++ ) {
			source = sources[ i ];
			source[ pf.ns ] = true;
			srcset = source.getAttribute( "srcset" );

			// if source does not have a srcset attribute, skip
			if ( srcset ) {
				candidates.push( {
					srcset: srcset,
					media: source.getAttribute( "media" ),
					type: source.getAttribute( "type" ),
					sizes: source.getAttribute( "sizes" )
				} );
			}
		}
	}

	/**
	 * Srcset Parser
	 * By Alex Bell |  MIT License
	 *
	 * @returns Array [{url: _, d: _, w: _, h:_, set:_(????)}, ...]
	 *
	 * Based super duper closely on the reference algorithm at:
	 * https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-srcset-attribute
	 */

	// 1. Let input be the value passed to this algorithm.
	// (TO-DO : Explain what "set" argument is here. Maybe choose a more
	// descriptive & more searchable name.  Since passing the "set" in really has
	// nothing to do with parsing proper, I would prefer this assignment eventually
	// go in an external fn.)
	function parseSrcset(input, set) {

		function collectCharacters(regEx) {
			var chars,
			    match = regEx.exec(input.substring(pos));
			if (match) {
				chars = match[ 0 ];
				pos += chars.length;
				return chars;
			}
		}

		var inputLength = input.length,
		    url,
		    descriptors,
		    currentDescriptor,
		    state,
		    c,

		    // 2. Let position be a pointer into input, initially pointing at the start
		    //    of the string.
		    pos = 0,

		    // 3. Let candidates be an initially empty source set.
		    candidates = [];

		/**
		* Adds descriptor properties to a candidate, pushes to the candidates array
		* @return undefined
		*/
		// (Declared outside of the while loop so that it's only created once.
		// (This fn is defined before it is used, in order to pass JSHINT.
		// Unfortunately this breaks the sequencing of the spec comments. :/ )
		function parseDescriptors() {

			// 9. Descriptor parser: Let error be no.
			var pError = false,

			// 10. Let width be absent.
			// 11. Let density be absent.
			// 12. Let future-compat-h be absent. (We're implementing it now as h)
			    w, d, h, i,
			    candidate = {},
			    desc, lastChar, value, intVal, floatVal;

			// 13. For each descriptor in descriptors, run the appropriate set of steps
			// from the following list:
			for (i = 0 ; i < descriptors.length; i++) {
				desc = descriptors[ i ];

				lastChar = desc[ desc.length - 1 ];
				value = desc.substring(0, desc.length - 1);
				intVal = parseInt(value, 10);
				floatVal = parseFloat(value);

				// If the descriptor consists of a valid non-negative integer followed by
				// a U+0077 LATIN SMALL LETTER W character
				if (regexNonNegativeInteger.test(value) && (lastChar === "w")) {

					// If width and density are not both absent, then let error be yes.
					if (w || d) {pError = true;}

					// Apply the rules for parsing non-negative integers to the descriptor.
					// If the result is zero, let error be yes.
					// Otherwise, let width be the result.
					if (intVal === 0) {pError = true;} else {w = intVal;}

				// If the descriptor consists of a valid floating-point number followed by
				// a U+0078 LATIN SMALL LETTER X character
				} else if (regexFloatingPoint.test(value) && (lastChar === "x")) {

					// If width, density and future-compat-h are not all absent, then let error
					// be yes.
					if (w || d || h) {pError = true;}

					// Apply the rules for parsing floating-point number values to the descriptor.
					// If the result is less than zero, let error be yes. Otherwise, let density
					// be the result.
					if (floatVal < 0) {pError = true;} else {d = floatVal;}

				// If the descriptor consists of a valid non-negative integer followed by
				// a U+0068 LATIN SMALL LETTER H character
				} else if (regexNonNegativeInteger.test(value) && (lastChar === "h")) {

					// If height and density are not both absent, then let error be yes.
					if (h || d) {pError = true;}

					// Apply the rules for parsing non-negative integers to the descriptor.
					// If the result is zero, let error be yes. Otherwise, let future-compat-h
					// be the result.
					if (intVal === 0) {pError = true;} else {h = intVal;}

				// Anything else, Let error be yes.
				} else {pError = true;}
			} // (close step 13 for loop)

			// 15. If error is still no, then append a new image source to candidates whose
			// URL is url, associated with a width width if not absent and a pixel
			// density density if not absent. Otherwise, there is a parse error.
			if (!pError) {
				candidate.url = url;

				if (w) { candidate.w = w;}
				if (d) { candidate.d = d;}
				if (h) { candidate.h = h;}
				if (!h && !d && !w) {candidate.d = 1;}
				if (candidate.d === 1) {set.has1x = true;}
				candidate.set = set;

				candidates.push(candidate);
			}
		} // (close parseDescriptors fn)

		/**
		* Tokenizes descriptor properties prior to parsing
		* Returns undefined.
		* (Again, this fn is defined before it is used, in order to pass JSHINT.
		* Unfortunately this breaks the logical sequencing of the spec comments. :/ )
		*/
		function tokenize() {

			// 8.1. Descriptor tokeniser: Skip whitespace
			collectCharacters(regexLeadingSpaces);

			// 8.2. Let current descriptor be the empty string.
			currentDescriptor = "";

			// 8.3. Let state be in descriptor.
			state = "in descriptor";

			while (true) {

				// 8.4. Let c be the character at position.
				c = input.charAt(pos);

				//  Do the following depending on the value of state.
				//  For the purpose of this step, "EOF" is a special character representing
				//  that position is past the end of input.

				// In descriptor
				if (state === "in descriptor") {
					// Do the following, depending on the value of c:

				  // Space character
				  // If current descriptor is not empty, append current descriptor to
				  // descriptors and let current descriptor be the empty string.
				  // Set state to after descriptor.
					if (isSpace(c)) {
						if (currentDescriptor) {
							descriptors.push(currentDescriptor);
							currentDescriptor = "";
							state = "after descriptor";
						}

					// U+002C COMMA (,)
					// Advance position to the next character in input. If current descriptor
					// is not empty, append current descriptor to descriptors. Jump to the step
					// labeled descriptor parser.
					} else if (c === ",") {
						pos += 1;
						if (currentDescriptor) {
							descriptors.push(currentDescriptor);
						}
						parseDescriptors();
						return;

					// U+0028 LEFT PARENTHESIS (()
					// Append c to current descriptor. Set state to in parens.
					} else if (c === "\u0028") {
						currentDescriptor = currentDescriptor + c;
						state = "in parens";

					// EOF
					// If current descriptor is not empty, append current descriptor to
					// descriptors. Jump to the step labeled descriptor parser.
					} else if (c === "") {
						if (currentDescriptor) {
							descriptors.push(currentDescriptor);
						}
						parseDescriptors();
						return;

					// Anything else
					// Append c to current descriptor.
					} else {
						currentDescriptor = currentDescriptor + c;
					}
				// (end "in descriptor"

				// In parens
				} else if (state === "in parens") {

					// U+0029 RIGHT PARENTHESIS ())
					// Append c to current descriptor. Set state to in descriptor.
					if (c === ")") {
						currentDescriptor = currentDescriptor + c;
						state = "in descriptor";

					// EOF
					// Append current descriptor to descriptors. Jump to the step labeled
					// descriptor parser.
					} else if (c === "") {
						descriptors.push(currentDescriptor);
						parseDescriptors();
						return;

					// Anything else
					// Append c to current descriptor.
					} else {
						currentDescriptor = currentDescriptor + c;
					}

				// After descriptor
				} else if (state === "after descriptor") {

					// Do the following, depending on the value of c:
					// Space character: Stay in this state.
					if (isSpace(c)) {

					// EOF: Jump to the step labeled descriptor parser.
					} else if (c === "") {
						parseDescriptors();
						return;

					// Anything else
					// Set state to in descriptor. Set position to the previous character in input.
					} else {
						state = "in descriptor";
						pos -= 1;

					}
				}

				// Advance position to the next character in input.
				pos += 1;

			// Repeat this step.
			} // (close while true loop)
		}

		// 4. Splitting loop: Collect a sequence of characters that are space
		//    characters or U+002C COMMA characters. If any U+002C COMMA characters
		//    were collected, that is a parse error.
		while (true) {
			collectCharacters(regexLeadingCommasOrSpaces);

			// 5. If position is past the end of input, return candidates and abort these steps.
			if (pos >= inputLength) {
				return candidates; // (we're done, this is the sole return path)
			}

			// 6. Collect a sequence of characters that are not space characters,
			//    and let that be url.
			url = collectCharacters(regexLeadingNotSpaces);

			// 7. Let descriptors be a new empty list.
			descriptors = [];

			// 8. If url ends with a U+002C COMMA character (,), follow these substeps:
			//		(1). Remove all trailing U+002C COMMA characters from url. If this removed
			//         more than one character, that is a parse error.
			if (url.slice(-1) === ",") {
				url = url.replace(regexTrailingCommas, "");
				// (Jump ahead to step 9 to skip tokenization and just push the candidate).
				parseDescriptors();

			//	Otherwise, follow these substeps:
			} else {
				tokenize();
			} // (close else of step 8)

		// 16. Return to the step labeled splitting loop.
		} // (Close of big while loop.)
	}

	/*
	 * Sizes Parser
	 *
	 * By Alex Bell |  MIT License
	 *
	 * Non-strict but accurate and lightweight JS Parser for the string value <img sizes="here">
	 *
	 * Reference algorithm at:
	 * https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-sizes-attribute
	 *
	 * Most comments are copied in directly from the spec
	 * (except for comments in parens).
	 *
	 * Grammar is:
	 * <source-size-list> = <source-size># [ , <source-size-value> ]? | <source-size-value>
	 * <source-size> = <media-condition> <source-size-value>
	 * <source-size-value> = <length>
	 * http://www.w3.org/html/wg/drafts/html/master/embedded-content.html#attr-img-sizes
	 *
	 * E.g. "(max-width: 30em) 100vw, (max-width: 50em) 70vw, 100vw"
	 * or "(min-width: 30em), calc(30vw - 15px)" or just "30vw"
	 *
	 * Returns the first valid <css-length> with a media condition that evaluates to true,
	 * or "100vw" if all valid media conditions evaluate to false.
	 *
	 */

	function parseSizes(strValue) {

		// (Percentage CSS lengths are not allowed in this case, to avoid confusion:
		// https://html.spec.whatwg.org/multipage/embedded-content.html#valid-source-size-list
		// CSS allows a single optional plus or minus sign:
		// http://www.w3.org/TR/CSS2/syndata.html#numbers
		// CSS is ASCII case-insensitive:
		// http://www.w3.org/TR/CSS2/syndata.html#characters )
		// Spec allows exponential notation for <number> type:
		// http://dev.w3.org/csswg/css-values/#numbers
		var regexCssLengthWithUnits = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i;

		// (This is a quick and lenient test. Because of optional unlimited-depth internal
		// grouping parens and strict spacing rules, this could get very complicated.)
		var regexCssCalc = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;

		var i;
		var unparsedSizesList;
		var unparsedSizesListLength;
		var unparsedSize;
		var lastComponentValue;
		var size;

		// UTILITY FUNCTIONS

		//  (Toy CSS parser. The goals here are:
		//  1) expansive test coverage without the weight of a full CSS parser.
		//  2) Avoiding regex wherever convenient.
		//  Quick tests: http://jsfiddle.net/gtntL4gr/3/
		//  Returns an array of arrays.)
		function parseComponentValues(str) {
			var chrctr;
			var component = "";
			var componentArray = [];
			var listArray = [];
			var parenDepth = 0;
			var pos = 0;
			var inComment = false;

			function pushComponent() {
				if (component) {
					componentArray.push(component);
					component = "";
				}
			}

			function pushComponentArray() {
				if (componentArray[0]) {
					listArray.push(componentArray);
					componentArray = [];
				}
			}

			// (Loop forwards from the beginning of the string.)
			while (true) {
				chrctr = str.charAt(pos);

				if (chrctr === "") { // ( End of string reached.)
					pushComponent();
					pushComponentArray();
					return listArray;
				} else if (inComment) {
					if ((chrctr === "*") && (str[pos + 1] === "/")) { // (At end of a comment.)
						inComment = false;
						pos += 2;
						pushComponent();
						continue;
					} else {
						pos += 1; // (Skip all characters inside comments.)
						continue;
					}
				} else if (isSpace(chrctr)) {
					// (If previous character in loop was also a space, or if
					// at the beginning of the string, do not add space char to
					// component.)
					if ( (str.charAt(pos - 1) && isSpace( str.charAt(pos - 1) ) ) || !component ) {
						pos += 1;
						continue;
					} else if (parenDepth === 0) {
						pushComponent();
						pos +=1;
						continue;
					} else {
						// (Replace any space character with a plain space for legibility.)
						chrctr = " ";
					}
				} else if (chrctr === "(") {
					parenDepth += 1;
				} else if (chrctr === ")") {
					parenDepth -= 1;
				} else if (chrctr === ",") {
					pushComponent();
					pushComponentArray();
					pos += 1;
					continue;
				} else if ( (chrctr === "/") && (str.charAt(pos + 1) === "*") ) {
					inComment = true;
					pos += 2;
					continue;
				}

				component = component + chrctr;
				pos += 1;
			}
		}

		function isValidNonNegativeSourceSizeValue(s) {
			if (regexCssLengthWithUnits.test(s) && (parseFloat(s) >= 0)) {return true;}
			if (regexCssCalc.test(s)) {return true;}
			// ( http://www.w3.org/TR/CSS2/syndata.html#numbers says:
			// "-0 is equivalent to 0 and is not a negative number." which means that
			// unitless zero and unitless negative zero must be accepted as special cases.)
			if ((s === "0") || (s === "-0") || (s === "+0")) {return true;}
			return false;
		}

		// When asked to parse a sizes attribute from an element, parse a
		// comma-separated list of component values from the value of the element's
		// sizes attribute (or the empty string, if the attribute is absent), and let
		// unparsed sizes list be the result.
		// http://dev.w3.org/csswg/css-syntax/#parse-comma-separated-list-of-component-values

		unparsedSizesList = parseComponentValues(strValue);
		unparsedSizesListLength = unparsedSizesList.length;

		// For each unparsed size in unparsed sizes list:
		for (i = 0; i < unparsedSizesListLength; i++) {
			unparsedSize = unparsedSizesList[i];

			// 1. Remove all consecutive <whitespace-token>s from the end of unparsed size.
			// ( parseComponentValues() already omits spaces outside of parens. )

			// If unparsed size is now empty, that is a parse error; continue to the next
			// iteration of this algorithm.
			// ( parseComponentValues() won't push an empty array. )

			// 2. If the last component value in unparsed size is a valid non-negative
			// <source-size-value>, let size be its value and remove the component value
			// from unparsed size. Any CSS function other than the calc() function is
			// invalid. Otherwise, there is a parse error; continue to the next iteration
			// of this algorithm.
			// http://dev.w3.org/csswg/css-syntax/#parse-component-value
			lastComponentValue = unparsedSize[unparsedSize.length - 1];

			if (isValidNonNegativeSourceSizeValue(lastComponentValue)) {
				size = lastComponentValue;
				unparsedSize.pop();
			} else {
				continue;
			}

			// 3. Remove all consecutive <whitespace-token>s from the end of unparsed
			// size. If unparsed size is now empty, return size and exit this algorithm.
			// If this was not the last item in unparsed sizes list, that is a parse error.
			if (unparsedSize.length === 0) {
				return size;
			}

			// 4. Parse the remaining component values in unparsed size as a
			// <media-condition>. If it does not parse correctly, or it does parse
			// correctly but the <media-condition> evaluates to false, continue to the
			// next iteration of this algorithm.
			// (Parsing all possible compound media conditions in JS is heavy, complicated,
			// and the payoff is unclear. Is there ever an situation where the
			// media condition parses incorrectly but still somehow evaluates to true?
			// Can we just rely on the browser/polyfill to do it?)
			unparsedSize = unparsedSize.join(" ");
			if (!(pf.matchesMedia( unparsedSize ) ) ) {
				continue;
			}

			// 5. Return size and exit this algorithm.
			return size;
		}

		// If the above algorithm exhausts unparsed sizes list without returning a
		// size value, return 100vw.
		return "100vw";
	}

	// namespace
	pf.ns = ("pf" + new Date().getTime()).substr(0, 9);

	// srcset support test
	pf.supSrcset = "srcset" in image;
	pf.supSizes = "sizes" in image;
	pf.supPicture = !!window.HTMLPictureElement;

	// UC browser does claim to support srcset and picture, but not sizes,
	// this extended test reveals the browser does support nothing
	if (pf.supSrcset && pf.supPicture && !pf.supSizes) {
		(function(image2) {
			image.srcset = "data:,a";
			image2.src = "data:,a";
			pf.supSrcset = image.complete === image2.complete;
			pf.supPicture = pf.supSrcset && pf.supPicture;
		})(document.createElement("img"));
	}

	// Safari9 has basic support for sizes, but does't expose the `sizes` idl attribute
	if (pf.supSrcset && !pf.supSizes) {

		(function() {
			var width2 = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==";
			var width1 = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
			var img = document.createElement("img");
			var test = function() {
				var width = img.width;

				if (width === 2) {
					pf.supSizes = true;
				}

				alwaysCheckWDescriptor = pf.supSrcset && !pf.supSizes;

				isSupportTestReady = true;
				// force async
				setTimeout(picturefill);
			};

			img.onload = test;
			img.onerror = test;
			img.setAttribute("sizes", "9px");

			img.srcset = width1 + " 1w," + width2 + " 9w";
			img.src = width1;
		})();

	} else {
		isSupportTestReady = true;
	}

	// using pf.qsa instead of dom traversing does scale much better,
	// especially on sites mixing responsive and non-responsive images
	pf.selShort = "picture>img,img[srcset]";
	pf.sel = pf.selShort;
	pf.cfg = cfg;

	/**
	 * Shortcut property for `devicePixelRatio` ( for easy overriding in tests )
	 */
	pf.DPR = (DPR  || 1 );
	pf.u = units;

	// container of supported mime types that one might need to qualify before using
	pf.types =  types;

	pf.setSize = noop;

	/**
	 * Gets a string and returns the absolute URL
	 * @param src
	 * @returns {String} absolute URL
	 */

	pf.makeUrl = memoize(function(src) {
		anchor.href = src;
		return anchor.href;
	});

	/**
	 * Gets a DOM element or document and a selctor and returns the found matches
	 * Can be extended with jQuery/Sizzle for IE7 support
	 * @param context
	 * @param sel
	 * @returns {NodeList|Array}
	 */
	pf.qsa = function(context, sel) {
		return ( "querySelector" in context ) ? context.querySelectorAll(sel) : [];
	};

	/**
	 * Shortcut method for matchMedia ( for easy overriding in tests )
	 * wether native or pf.mMQ is used will be decided lazy on first call
	 * @returns {boolean}
	 */
	pf.matchesMedia = function() {
		if ( window.matchMedia && (matchMedia( "(min-width: 0.1em)" ) || {}).matches ) {
			pf.matchesMedia = function( media ) {
				return !media || ( matchMedia( media ).matches );
			};
		} else {
			pf.matchesMedia = pf.mMQ;
		}

		return pf.matchesMedia.apply( this, arguments );
	};

	/**
	 * A simplified matchMedia implementation for IE8 and IE9
	 * handles only min-width/max-width with px or em values
	 * @param media
	 * @returns {boolean}
	 */
	pf.mMQ = function( media ) {
		return media ? evalCSS(media) : true;
	};

	/**
	 * Returns the calculated length in css pixel from the given sourceSizeValue
	 * http://dev.w3.org/csswg/css-values-3/#length-value
	 * intended Spec mismatches:
	 * * Does not check for invalid use of CSS functions
	 * * Does handle a computed length of 0 the same as a negative and therefore invalid value
	 * @param sourceSizeValue
	 * @returns {Number}
	 */
	pf.calcLength = function( sourceSizeValue ) {

		var value = evalCSS(sourceSizeValue, true) || false;
		if (value < 0) {
			value = false;
		}

		return value;
	};

	/**
	 * Takes a type string and checks if its supported
	 */

	pf.supportsType = function( type ) {
		return ( type ) ? types[ type ] : true;
	};

	/**
	 * Parses a sourceSize into mediaCondition (media) and sourceSizeValue (length)
	 * @param sourceSizeStr
	 * @returns {*}
	 */
	pf.parseSize = memoize(function( sourceSizeStr ) {
		var match = ( sourceSizeStr || "" ).match(regSize);
		return {
			media: match && match[1],
			length: match && match[2]
		};
	});

	pf.parseSet = function( set ) {
		if ( !set.cands ) {
			set.cands = parseSrcset(set.srcset, set);
		}
		return set.cands;
	};

	/**
	 * returns 1em in css px for html/body default size
	 * function taken from respondjs
	 * @returns {*|number}
	 */
	pf.getEmValue = function() {
		var body;
		if ( !eminpx && (body = document.body) ) {
			var div = document.createElement( "div" ),
				originalHTMLCSS = docElem.style.cssText,
				originalBodyCSS = body.style.cssText;

			div.style.cssText = baseStyle;

			// 1em in a media query is the value of the default font size of the browser
			// reset docElem and body to ensure the correct value is returned
			docElem.style.cssText = fsCss;
			body.style.cssText = fsCss;

			body.appendChild( div );
			eminpx = div.offsetWidth;
			body.removeChild( div );

			//also update eminpx before returning
			eminpx = parseFloat( eminpx, 10 );

			// restore the original values
			docElem.style.cssText = originalHTMLCSS;
			body.style.cssText = originalBodyCSS;

		}
		return eminpx || 16;
	};

	/**
	 * Takes a string of sizes and returns the width in pixels as a number
	 */
	pf.calcListLength = function( sourceSizeListStr ) {
		// Split up source size list, ie ( max-width: 30em ) 100%, ( max-width: 50em ) 50%, 33%
		//
		//                           or (min-width:30em) calc(30% - 15px)
		if ( !(sourceSizeListStr in sizeLengthCache) || cfg.uT ) {
			var winningLength = pf.calcLength( parseSizes( sourceSizeListStr ) );

			sizeLengthCache[ sourceSizeListStr ] = !winningLength ? units.width : winningLength;
		}

		return sizeLengthCache[ sourceSizeListStr ];
	};

	/**
	 * Takes a candidate object with a srcset property in the form of url/
	 * ex. "images/pic-medium.png 1x, images/pic-medium-2x.png 2x" or
	 *     "images/pic-medium.png 400w, images/pic-medium-2x.png 800w" or
	 *     "images/pic-small.png"
	 * Get an array of image candidates in the form of
	 *      {url: "/foo/bar.png", resolution: 1}
	 * where resolution is http://dev.w3.org/csswg/css-values-3/#resolution-value
	 * If sizes is specified, res is calculated
	 */
	pf.setRes = function( set ) {
		var candidates;
		if ( set ) {

			candidates = pf.parseSet( set );

			for ( var i = 0, len = candidates.length; i < len; i++ ) {
				setResolution( candidates[ i ], set.sizes );
			}
		}
		return candidates;
	};

	pf.setRes.res = setResolution;

	pf.applySetCandidate = function( candidates, img ) {
		if ( !candidates.length ) {return;}
		var candidate,
			i,
			j,
			length,
			bestCandidate,
			curSrc,
			curCan,
			candidateSrc,
			abortCurSrc;

		var imageData = img[ pf.ns ];
		var dpr = pf.DPR;

		curSrc = imageData.curSrc || img[curSrcProp];

		curCan = imageData.curCan || setSrcToCur(img, curSrc, candidates[0].set);

		// if we have a current source, we might either become lazy or give this source some advantage
		if ( curCan && curCan.set === candidates[ 0 ].set ) {

			// if browser can abort image request and the image has a higher pixel density than needed
			// and this image isn't downloaded yet, we skip next part and try to save bandwidth
			abortCurSrc = (supportAbort && !img.complete && curCan.res - 0.1 > dpr);

			if ( !abortCurSrc ) {
				curCan.cached = true;

				// if current candidate is "best", "better" or "okay",
				// set it to bestCandidate
				if ( curCan.res >= dpr ) {
					bestCandidate = curCan;
				}
			}
		}

		if ( !bestCandidate ) {

			candidates.sort( ascendingSort );

			length = candidates.length;
			bestCandidate = candidates[ length - 1 ];

			for ( i = 0; i < length; i++ ) {
				candidate = candidates[ i ];
				if ( candidate.res >= dpr ) {
					j = i - 1;

					// we have found the perfect candidate,
					// but let's improve this a little bit with some assumptions ;-)
					if (candidates[ j ] &&
						(abortCurSrc || curSrc !== pf.makeUrl( candidate.url )) &&
						chooseLowRes(candidates[ j ].res, candidate.res, dpr, candidates[ j ].cached)) {

						bestCandidate = candidates[ j ];

					} else {
						bestCandidate = candidate;
					}
					break;
				}
			}
		}

		if ( bestCandidate ) {

			candidateSrc = pf.makeUrl( bestCandidate.url );

			imageData.curSrc = candidateSrc;
			imageData.curCan = bestCandidate;

			if ( candidateSrc !== curSrc ) {
				pf.setSrc( img, bestCandidate );
			}
			pf.setSize( img );
		}
	};

	pf.setSrc = function( img, bestCandidate ) {
		var origWidth;
		img.src = bestCandidate.url;

		// although this is a specific Safari issue, we don't want to take too much different code paths
		if ( bestCandidate.set.type === "image/svg+xml" ) {
			origWidth = img.style.width;
			img.style.width = (img.offsetWidth + 1) + "px";

			// next line only should trigger a repaint
			// if... is only done to trick dead code removal
			if ( img.offsetWidth + 1 ) {
				img.style.width = origWidth;
			}
		}
	};

	pf.getSet = function( img ) {
		var i, set, supportsType;
		var match = false;
		var sets = img [ pf.ns ].sets;

		for ( i = 0; i < sets.length && !match; i++ ) {
			set = sets[i];

			if ( !set.srcset || !pf.matchesMedia( set.media ) || !(supportsType = pf.supportsType( set.type )) ) {
				continue;
			}

			if ( supportsType === "pending" ) {
				set = supportsType;
			}

			match = set;
			break;
		}

		return match;
	};

	pf.parseSets = function( element, parent, options ) {
		var srcsetAttribute, imageSet, isWDescripor, srcsetParsed;

		var hasPicture = parent && parent.nodeName.toUpperCase() === "PICTURE";
		var imageData = element[ pf.ns ];

		if ( imageData.src === undefined || options.src ) {
			imageData.src = getImgAttr.call( element, "src" );
			if ( imageData.src ) {
				setImgAttr.call( element, srcAttr, imageData.src );
			} else {
				removeImgAttr.call( element, srcAttr );
			}
		}

		if ( imageData.srcset === undefined || options.srcset || !pf.supSrcset || element.srcset ) {
			srcsetAttribute = getImgAttr.call( element, "srcset" );
			imageData.srcset = srcsetAttribute;
			srcsetParsed = true;
		}

		imageData.sets = [];

		if ( hasPicture ) {
			imageData.pic = true;
			getAllSourceElements( parent, imageData.sets );
		}

		if ( imageData.srcset ) {
			imageSet = {
				srcset: imageData.srcset,
				sizes: getImgAttr.call( element, "sizes" )
			};

			imageData.sets.push( imageSet );

			isWDescripor = (alwaysCheckWDescriptor || imageData.src) && regWDesc.test(imageData.srcset || "");

			// add normal src as candidate, if source has no w descriptor
			if ( !isWDescripor && imageData.src && !getCandidateForSrc(imageData.src, imageSet) && !imageSet.has1x ) {
				imageSet.srcset += ", " + imageData.src;
				imageSet.cands.push({
					url: imageData.src,
					d: 1,
					set: imageSet
				});
			}

		} else if ( imageData.src ) {
			imageData.sets.push( {
				srcset: imageData.src,
				sizes: null
			} );
		}

		imageData.curCan = null;
		imageData.curSrc = undefined;

		// if img has picture or the srcset was removed or has a srcset and does not support srcset at all
		// or has a w descriptor (and does not support sizes) set support to false to evaluate
		imageData.supported = !( hasPicture || ( imageSet && !pf.supSrcset ) || (isWDescripor && !pf.supSizes) );

		if ( srcsetParsed && pf.supSrcset && !imageData.supported ) {
			if ( srcsetAttribute ) {
				setImgAttr.call( element, srcsetAttr, srcsetAttribute );
				element.srcset = "";
			} else {
				removeImgAttr.call( element, srcsetAttr );
			}
		}

		if (imageData.supported && !imageData.srcset && ((!imageData.src && element.src) ||  element.src !== pf.makeUrl(imageData.src))) {
			if (imageData.src === null) {
				element.removeAttribute("src");
			} else {
				element.src = imageData.src;
			}
		}

		imageData.parsed = true;
	};

	pf.fillImg = function(element, options) {
		var imageData;
		var extreme = options.reselect || options.reevaluate;

		// expando for caching data on the img
		if ( !element[ pf.ns ] ) {
			element[ pf.ns ] = {};
		}

		imageData = element[ pf.ns ];

		// if the element has already been evaluated, skip it
		// unless `options.reevaluate` is set to true ( this, for example,
		// is set to true when running `picturefill` on `resize` ).
		if ( !extreme && imageData.evaled === evalId ) {
			return;
		}

		if ( !imageData.parsed || options.reevaluate ) {
			pf.parseSets( element, element.parentNode, options );
		}

		if ( !imageData.supported ) {
			applyBestCandidate( element );
		} else {
			imageData.evaled = evalId;
		}
	};

	pf.setupRun = function() {
		if ( !alreadyRun || isVwDirty || (DPR !== window.devicePixelRatio) ) {
			updateMetrics();
		}
	};

	// If picture is supported, well, that's awesome.
	if ( pf.supPicture ) {
		picturefill = noop;
		pf.fillImg = noop;
	} else {

		 // Set up picture polyfill by polling the document
		(function() {
			var isDomReady;
			var regReady = window.attachEvent ? /d$|^c/ : /d$|^c|^i/;

			var run = function() {
				var readyState = document.readyState || "";

				timerId = setTimeout(run, readyState === "loading" ? 200 :  999);
				if ( document.body ) {
					pf.fillImgs();
					isDomReady = isDomReady || regReady.test(readyState);
					if ( isDomReady ) {
						clearTimeout( timerId );
					}

				}
			};

			var timerId = setTimeout(run, document.body ? 9 : 99);

			// Also attach picturefill on resize and readystatechange
			// http://modernjavascript.blogspot.com/2013/08/building-better-debounce.html
			var debounce = function(func, wait) {
				var timeout, timestamp;
				var later = function() {
					var last = (new Date()) - timestamp;

					if (last < wait) {
						timeout = setTimeout(later, wait - last);
					} else {
						timeout = null;
						func();
					}
				};

				return function() {
					timestamp = new Date();

					if (!timeout) {
						timeout = setTimeout(later, wait);
					}
				};
			};
			var lastClientWidth = docElem.clientHeight;
			var onResize = function() {
				isVwDirty = Math.max(window.innerWidth || 0, docElem.clientWidth) !== units.width || docElem.clientHeight !== lastClientWidth;
				lastClientWidth = docElem.clientHeight;
				if ( isVwDirty ) {
					pf.fillImgs();
				}
			};

			on( window, "resize", debounce(onResize, 99 ) );
			on( document, "readystatechange", run );
		})();
	}

	pf.picturefill = picturefill;
	//use this internally for easy monkey patching/performance testing
	pf.fillImgs = picturefill;
	pf.teardownRun = noop;

	/* expose methods for testing */
	picturefill._ = pf;

	window.picturefillCFG = {
		pf: pf,
		push: function(args) {
			var name = args.shift();
			if (typeof pf[name] === "function") {
				pf[name].apply(pf, args);
			} else {
				cfg[name] = args[0];
				if (alreadyRun) {
					pf.fillImgs( { reselect: true } );
				}
			}
		}
	};

	while (setOptions && setOptions.length) {
		window.picturefillCFG.push(setOptions.shift());
	}

	/* expose picturefill */
	window.picturefill = picturefill;

	/* expose picturefill */
	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// CommonJS, just export
		module.exports = picturefill;
	} else if ( true ) {
		// AMD support
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return picturefill; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}

	// IE8 evals this sync, so it must be the last thing we do
	if ( !pf.supPicture ) {
		types[ "image/webp" ] = detectTypeSupport("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==" );
	}

} )( window, document );


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.tracker = exports.trackerConfig = void 0;

var _jquery = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Toolkit's standalone JS module for website tracking.
 *
 * @requires $ {jQuery}
 */
// Members
var GTM_TRACK_ATTRIBUTE = 'data-gtm-track';
var GTM_ID_ATTRIBUTE = 'data-gtm-id';
var GTM_DATA_ATTRIBUTE = 'data-gtm-vars';
var defaultConfig = {
  autoRegister: true
};
/** Start tracking automatically. */

var shouldAutoRegister = true; // Public methods

function pushTrackingInfoToGtm(trackingId, trackingSource, customDataExtension) {
  if (!window.dataLayer) {
    console.warn('`dataLayer` variable is unavailable. Please, check that your Google Tag Manager script is loading before any other script. The tracking might not work correctly!');
    window.dataLayer = []; // Init empty as fall-back to avoid hard errors

    return;
  }

  var event,
      customDataObject = {};

  if (trackingSource && !(typeof trackingSource.altKey === 'undefined')) {
    // is Event (see https://developer.mozilla.org/en-US/docs/Web/API/Event)
    event = trackingSource;
  } else {
    // is Object with custom properties OR null/undefined
    customDataObject = trackingSource || {};
  } // Event supplied -> Extract data automatically based on the type of event


  if (event) {
    // Custom data pre-sets based on event type (https://developer.mozilla.org/en-US/docs/Web/API/Event/type)
    switch (event.type) {
      case 'click':
        customDataObject = {
          selector: event.target,
          href: event.currentTarget.href,
          text: event.currentTarget.text
        };
        break;

      default:
        {
          console.warn("GTM: There is no tracking preset for the event type '".concat(event.type, "'. Please, track a different event or pass an Object with custom data that should be sent to Google Tag Manager."));
        }
    }

    customDataObject.eventType = event.type;
  } // Extend (and override) with the custom data object (if supplied)


  if (customDataExtension) {
    for (var property in customDataExtension) {
      if (customDataExtension.hasOwnProperty(property)) {
        customDataObject[property] = customDataExtension[property];
      }
    }
  }

  var dataLayerObject = {
    event: trackingId
  };
  if (customDataObject) dataLayerObject.custom = customDataObject; // Push to the GTM

  window.dataLayer.push(dataLayerObject);
}

function addGtmTrackingListeners(elementsList, eventType, trackingId) {
  if (!window.dataLayer) {
    console.warn('`dataLayer` variable is unavailable. Please, check that your Google Tag Manager script is loading before any other script.');
    window.dataLayer = []; // Fallback

    return;
  }

  elementsList.each(function attachTrackingHandlers() {
    var elementToTrack = (0, _jquery.default)(this),
        trackingEventType = eventType || elementToTrack.attr(GTM_TRACK_ATTRIBUTE) || 'auto',
        id = trackingId || elementToTrack.attr(GTM_ID_ATTRIBUTE) || elementToTrack[0].id,
        customDataJsonString = elementToTrack.attr(GTM_DATA_ATTRIBUTE);
    var customDataObject; // Convert the custom variables string into JSON

    if (customDataJsonString) {
      try {
        customDataObject = JSON.parse(customDataJsonString);
      } catch (err) {
        console.error("The element with tracking ID ".concat(id, " and its element '").concat(customDataJsonString, "' contains JSON string in invalid format. These information will not be pushed into Google Tag Manager..."), customDataJsonString, err);
      }
    }

    if (trackingEventType === 'auto') {// TODO: Determine binding event automatically based on the type of
      // the element (e.g. <a> => 'click' etc.)
    } else {
      elementToTrack.on(trackingEventType, function (event) {
        pushTrackingInfoToGtm(id, event, customDataObject);
      });
    }
  });
}

function shouldTrackByGtm(element) {
  element = (0, _jquery.default)(element);
  return Boolean(element.attr(GTM_TRACK_ATTRIBUTE) !== undefined);
} // Private functions


function autoregisterGtmTrackingListeners() {
  addGtmTrackingListeners((0, _jquery.default)("[".concat(GTM_TRACK_ATTRIBUTE, "]")));
} // Run after the DOM has loaded...


(0, _jquery.default)(function () {
  if (shouldAutoRegister) {
    /** Auto-register all on-demand elements to automatically start tracking. */
    setTimeout(autoregisterGtmTrackingListeners, 0);
  }
}); // Public API interface

var trackingApi = {
  shouldTrackElement: shouldTrackByGtm,
  trackEvent: pushTrackingInfoToGtm,

  /** Any element or set of elements can be dynamically tracked this way */
  registerForTracking: addGtmTrackingListeners
};

function overrideOptions() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultConfig,
      autoRegister = _ref.autoRegister;

  shouldAutoRegister = autoRegister;
}

var trackerConfig = overrideOptions;
exports.trackerConfig = trackerConfig;
var tracker = trackingApi; // Make API available for modules

exports.tracker = tracker;
var _default = trackingApi; // For a global imports

exports.default = _default;

window.toolkitTracker = function (opts) {
  overrideOptions(opts);
  return trackingApi;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _this = void 0;

/**
 * Toolkit's standalone JS module for popup-based interactions.
 *
 * @requires Cookie {cookies-js}
 */
// Dynamic 3rd party dependencies
var cookie;
var tracker = window.toolkitTracker ? window.toolkitTracker() : null;
var CLASSNAME = {
  POPUP_AUTOINIT: 'popup',
  BUTTON_OK: 'button-ok',
  BUTTON_CANCEL: 'button-cancel',
  BUTTON_CLOSE: 'btn-close'
};

function findAncestor(el, cls) {
  while ((el = el.parentElement) && !el.classList.contains(cls)) {
    ;
  }

  return el;
}
/** Popup launcher. */


function initPopupBox(popupElement) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$delayInMs = _ref.delayInMs,
      delayInMs = _ref$delayInMs === void 0 ? 7000 : _ref$delayInMs,
      _ref$suppressAfterCan = _ref.suppressAfterCanceling,
      suppressAfterCanceling = _ref$suppressAfterCan === void 0 ? true : _ref$suppressAfterCan;

  var COOKIE_ID = popupElement.id || 'popup-default';
  var COOKIE_SETTINGS = {
    expires: 2419200 // 28 days
    // secure  : true    //If set to true the secure attribute of the cookie

  };
  var popupContainerElement = findAncestor(popupElement, 'popup-positioner');
  var buttonOkElement = popupElement.getElementsByClassName(CLASSNAME.BUTTON_OK)[0],
      buttonCancelElement = popupElement.getElementsByClassName(CLASSNAME.BUTTON_CANCEL)[0],
      buttonCloseElement = popupElement.getElementsByClassName(CLASSNAME.BUTTON_CLOSE)[0],
      IS_SHOWN_CLASS = 'shown';

  function removeShownClass() {
    if (popupContainerElement) {
      popupContainerElement.classList.remove(IS_SHOWN_CLASS);
    } else {
      popupElement.classList.remove(IS_SHOWN_CLASS);
    }
  }

  function closePopupPermanently() {
    if (cookie) cookie.set(COOKIE_ID, true, COOKIE_SETTINGS);
  }

  function closePopup() {
    unbindButtonEvents();
    popupElement.setAttribute('data-shown', false);
    removeShownClass();
    if (suppressAfterCanceling) closePopupPermanently();
  }

  function close(event) {
    // If `positionerClass` exists, hide + save 'hidden' to cookies
    event.preventDefault();
    event.stopPropagation();
    closePopup();
  }

  function submit() {
    // If `positionerClass` exists, hide + save 'hidden' to cookies + continue to the page
    closePopup();
  }

  function cancel() {
    // If `positionerClass` exists, hide + save 'hidden' to cookies + continue to the page
    closePopup();
  } // Attach button events


  function bindButtonEvents() {
    if (buttonOkElement) buttonOkElement.addEventListener('click', submit);
    if (buttonCloseElement) buttonCloseElement.addEventListener('click', close);
    if (buttonCancelElement) buttonCancelElement.addEventListener('click', cancel);
  }

  function unbindButtonEvents() {
    if (buttonOkElement) buttonOkElement.removeEventListener('click', submit);
    if (buttonCloseElement) buttonCloseElement.removeEventListener('click', close);
    if (buttonCancelElement) buttonCancelElement.removeEventListener('click', cancel);
  }

  function addShownClass() {
    if (popupContainerElement) {
      document.getElementsByTagName('body')[0].appendChild(popupContainerElement);
      popupContainerElement.classList.add(IS_SHOWN_CLASS);
    } else {
      popupElement.classList.add(IS_SHOWN_CLASS);
    }
  }

  function isPopupShown() {
    return popupElement.getAttribute('data-shown') === 'true';
  }

  function showPopup() {
    bindButtonEvents();
    addShownClass();

    if (tracker && tracker.shouldTrackElement(popupElement)) {
      tracker.trackEvent(popupElement.id, {
        eventType: 'open'
      });
    }
  } // Constructor


  var shouldShowPopup = !cookie || !suppressAfterCanceling || cookie.get(COOKIE_ID) === undefined || !cookie.get(COOKIE_ID);

  if (shouldShowPopup && !isPopupShown()) {
    popupElement.setAttribute('data-shown', true); // Must be added here to prevent triggering setTimeout when clicking multiple time
    // If there's a positioner available, display after the timeout!

    setTimeout(function () {
      showPopup();
    }, delayInMs);
  }
}
/**
 * Function called on the jQuery Element, opens it as a popup.
 *
 * @param {Object} { delayInMs = 0, suppressAfterCanceling = false }
 *
 * @returns {DOMElement}
 */


function openPopupInstantly(popupElement) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$delayInMs = _ref2.delayInMs,
      delayInMs = _ref2$delayInMs === void 0 ? 0 : _ref2$delayInMs,
      _ref2$suppressAfterCa = _ref2.suppressAfterCanceling,
      suppressAfterCanceling = _ref2$suppressAfterCa === void 0 ? false : _ref2$suppressAfterCa;

  initPopupBox(popupElement, {
    delayInMs: delayInMs,
    suppressAfterCanceling: suppressAfterCanceling
  });
}

function autoInitialisePopups() {
  var autoloadPopups = document.getElementsByClassName(CLASSNAME.POPUP_AUTOINIT);

  for (var i = 0; i < autoloadPopups.length; i += 1) {
    var popupElement = autoloadPopups[i];

    if (popupElement.getAttribute('data-autoload') !== null) {
      // Autoload (~ show/hide) popup
      var optionsObject = {};

      if (popupElement.getAttribute('data-opts') !== null) {
        optionsObject = JSON.parse(popupElement.getAttribute('data-opts'));
      }

      initPopupBox(popupElement, optionsObject);
    }
  }
} // Public API interface


var popupsApi = {
  init: initPopupBox,
  initAndOpen: openPopupInstantly
}; // Initialiser

function init() {
  if (!cookie) {
    console.error('`Cookie-js` library is not available. Please, import the library for the correct functionality!');
  }

  if (!tracker) {
    console.warn('`Toolkit.tracking` library is not available, so the user actions related to popups will not be sent to the Google Tag Manager. Please, make sure the library is included to enable the tracking.');
  } // Run when the DOM is ready!


  if (document.readyState === 'complete') {
    autoInitialisePopups();
  } else {
    document.onreadystatechange = function () {
      if (document.readyState === 'complete') {
        // Find all existing popups and if they contain `data-autoload` attribute,
        autoInitialisePopups();
      }
    };
  }
}

if (!window.toolkitPopups) {
  // Not initialised yet
  // TODO: Move into encapsulated library module
  try {
    cookie = __webpack_require__(13);
    init();
  } catch (err) {
    // Fallback when the cookies-js is not included - Load from the CDN
    var isScriptLoaded = false;
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = '//cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js';

    s.onreadystatechange = function () {
      // After-load handler for IE
      if (isScriptLoaded) return;

      if (_this.readyState === 'complete' || _this.readyState === 'loaded') {
        cookie = window.Cookies;
        init();
        isScriptLoaded = true;
      }
    };

    s.onload = function () {
      // After-load handler for all the other browsers
      if (isScriptLoaded) return;
      cookie = window.Cookies;
      init();
      isScriptLoaded = true;
    };

    document.getElementsByTagName('head')[0].appendChild(s);
  } // For a global use


  window.toolkitPopups = popupsApi;
} // Make API available for modules


var _default = popupsApi;
exports.default = _default;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 * Cookies.js - 1.2.3
 * https://github.com/ScottHamper/Cookies
 *
 * This is free and unencumbered software released into the public domain.
 */
(function (global, undefined) {
    'use strict';

    var factory = function (window) {
        if (typeof window.document !== 'object') {
            throw new Error('Cookies.js requires a `window` with a `document` object');
        }

        var Cookies = function (key, value, options) {
            return arguments.length === 1 ?
                Cookies.get(key) : Cookies.set(key, value, options);
        };

        // Allows for setter injection in unit tests
        Cookies._document = window.document;

        // Used to ensure cookie keys do not collide with
        // built-in `Object` properties
        Cookies._cacheKeyPrefix = 'cookey.'; // Hurr hurr, :)
        
        Cookies._maxExpireDate = new Date('Fri, 31 Dec 9999 23:59:59 UTC');

        Cookies.defaults = {
            path: '/',
            secure: false
        };

        Cookies.get = function (key) {
            if (Cookies._cachedDocumentCookie !== Cookies._document.cookie) {
                Cookies._renewCache();
            }
            
            var value = Cookies._cache[Cookies._cacheKeyPrefix + key];

            return value === undefined ? undefined : decodeURIComponent(value);
        };

        Cookies.set = function (key, value, options) {
            options = Cookies._getExtendedOptions(options);
            options.expires = Cookies._getExpiresDate(value === undefined ? -1 : options.expires);

            Cookies._document.cookie = Cookies._generateCookieString(key, value, options);

            return Cookies;
        };

        Cookies.expire = function (key, options) {
            return Cookies.set(key, undefined, options);
        };

        Cookies._getExtendedOptions = function (options) {
            return {
                path: options && options.path || Cookies.defaults.path,
                domain: options && options.domain || Cookies.defaults.domain,
                expires: options && options.expires || Cookies.defaults.expires,
                secure: options && options.secure !== undefined ?  options.secure : Cookies.defaults.secure
            };
        };

        Cookies._isValidDate = function (date) {
            return Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date.getTime());
        };

        Cookies._getExpiresDate = function (expires, now) {
            now = now || new Date();

            if (typeof expires === 'number') {
                expires = expires === Infinity ?
                    Cookies._maxExpireDate : new Date(now.getTime() + expires * 1000);
            } else if (typeof expires === 'string') {
                expires = new Date(expires);
            }

            if (expires && !Cookies._isValidDate(expires)) {
                throw new Error('`expires` parameter cannot be converted to a valid Date instance');
            }

            return expires;
        };

        Cookies._generateCookieString = function (key, value, options) {
            key = key.replace(/[^#$&+\^`|]/g, encodeURIComponent);
            key = key.replace(/\(/g, '%28').replace(/\)/g, '%29');
            value = (value + '').replace(/[^!#$&-+\--:<-\[\]-~]/g, encodeURIComponent);
            options = options || {};

            var cookieString = key + '=' + value;
            cookieString += options.path ? ';path=' + options.path : '';
            cookieString += options.domain ? ';domain=' + options.domain : '';
            cookieString += options.expires ? ';expires=' + options.expires.toUTCString() : '';
            cookieString += options.secure ? ';secure' : '';

            return cookieString;
        };

        Cookies._getCacheFromString = function (documentCookie) {
            var cookieCache = {};
            var cookiesArray = documentCookie ? documentCookie.split('; ') : [];

            for (var i = 0; i < cookiesArray.length; i++) {
                var cookieKvp = Cookies._getKeyValuePairFromCookieString(cookiesArray[i]);

                if (cookieCache[Cookies._cacheKeyPrefix + cookieKvp.key] === undefined) {
                    cookieCache[Cookies._cacheKeyPrefix + cookieKvp.key] = cookieKvp.value;
                }
            }

            return cookieCache;
        };

        Cookies._getKeyValuePairFromCookieString = function (cookieString) {
            // "=" is a valid character in a cookie value according to RFC6265, so cannot `split('=')`
            var separatorIndex = cookieString.indexOf('=');

            // IE omits the "=" when the cookie value is an empty string
            separatorIndex = separatorIndex < 0 ? cookieString.length : separatorIndex;

            var key = cookieString.substr(0, separatorIndex);
            var decodedKey;
            try {
                decodedKey = decodeURIComponent(key);
            } catch (e) {
                if (console && typeof console.error === 'function') {
                    console.error('Could not decode cookie with key "' + key + '"', e);
                }
            }
            
            return {
                key: decodedKey,
                value: cookieString.substr(separatorIndex + 1) // Defer decoding value until accessed
            };
        };

        Cookies._renewCache = function () {
            Cookies._cache = Cookies._getCacheFromString(Cookies._document.cookie);
            Cookies._cachedDocumentCookie = Cookies._document.cookie;
        };

        Cookies._areEnabled = function () {
            var testKey = 'cookies.js';
            var areEnabled = Cookies.set(testKey, 1).get(testKey) === '1';
            Cookies.expire(testKey);
            return areEnabled;
        };

        Cookies.enabled = Cookies._areEnabled();

        return Cookies;
    };
    var cookiesExport = (global && typeof global.document === 'object') ? factory(global) : factory;

    // AMD support
    if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () { return cookiesExport; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    // CommonJS/Node.js support
    } else {}
})(typeof window === 'undefined' ? this : window);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _accent_map;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var $ = __webpack_require__(0);

$(function () {
  //filterTags parameter only needed for postgrad quals filter..
  function searchFilter(targetElements, searchInput, minQueryLength, filterTags) {
    var $targetElements = $(targetElements);
    var $searchInput = $(searchInput);
    var MIN_QUERY_LENGTH = minQueryLength;

    function noQualsMessage() {
      //add no quals message
      if ($(filterTags)) {
        $('.no-quals-message').remove();
        var isVisible = 0;
        var noResultsFilterName = '';
        $targetElements.each(function () {
          if ($(this).is(":visible")) {
            isVisible++;
          } else {}
        });

        if (isVisible == 0) {
          var activeFilter = $('.quals-filter .tag.tag-active').text(); // console.log('active filter', activeFilter);

          noResultsFilterName += activeFilter;

          if (activeFilter == 'All') {
            noResultsFilterName = '';
          }

          var noQualMessage = '<section class="flash-message error no-quals-message" style="margin-top:.5rem;"><p class="">Sorry, no <strong>' + noResultsFilterName + '</strong> qualifications available. Please try another qualification.</p></section>'; // console.log('no results filter name', noResultsFilterName);

          $('.study-areas-postgrad .quals-filter').after(noQualMessage);
        }
      }
    } // console.time('removing accents from all elements');


    $targetElements.each(function () {
      var $this = $(this);
      $this.data('search-text', accent_fold($this.find('h2').text()).toLowerCase());
      $this.data('search-keywords', accent_fold($this.data('search-keywords')).toLowerCase());
    }); // console.timeEnd('removing accents from all elements');
    // $('.no-quals-message').remove();

    $searchInput.on('propertychange change click keyup input paste', function (_event) {
      var _query = _event.currentTarget.value;

      if (_query.length < MIN_QUERY_LENGTH) {
        $targetElements.toggleClass('is-matching', false);
        $targetElements.toggleClass('is-not-matching', false);
        noQualsMessage();
        return;
      }

      _query = accent_fold(_query).toLowerCase();
      $targetElements.each(function () {
        var $this = $(this);

        if ($this.data('search-text').indexOf(_query) !== -1 || $this.data('search-keywords').indexOf(_query) !== -1) {
          $this.toggleClass('is-matching', true);
          $this.toggleClass('is-not-matching', false);
        } else {
          $this.toggleClass('is-matching', false);
          $this.toggleClass('is-not-matching', true);
        }
      });
      noQualsMessage();
      $('.is-matching').each(function (index) {
        //for each breakpoint
        if (window.matchMedia("(min-width: 88em)").matches) {
          alignGrid(4, index, $(this), '.is-matching');
        }

        if (window.matchMedia("(max-width: 87.99em) and (min-width: 61em)").matches) {
          alignGrid(3, index, $(this), '.is-matching');
        }

        if (window.matchMedia("(max-width: 60.99em) and (min-width: 43em)").matches) {
          alignGrid(2, index, $(this), '.is-matching');
        }

        if (index === 0) {
          $(this).css('margin-left', '0');
        }
      });
    });
    var tags = $(filterTags);

    function alignGrid(cols, index, tile, filter) {
      //resets margins for grid
      tile.css({
        'margin-right': '0.375rem'
      });
      tile.css({
        'margin-left': '0.375rem'
      });

      if ((index + 1) % cols === 0) {
        tile.css('margin-right', '0%'); //Need set time out to make sure style is applied

        setTimeout(function () {
          tile.nextAll(filter).first().css({
            'margin-left': '0rem'
          });
        }, 75);
      }
    }

    ;

    if (tags !== null) {
      tags.each(function () {
        //on tag click update input to filter
        $(this).on('click', function (e) {
          $(this).siblings().removeClass('tag-active');
          $(this).addClass('tag-active');

          if ($(this).text() !== "All") {
            // $(searchInput).val('');
            // $(searchInput).val($(this).text()).change();
            var tag = $(this).text().toLowerCase(); // console.log(tag);

            $targetElements.each(function () {
              var $this = $(this); // console.log('tile', $this.data());

              if ($this.data('search-text').indexOf(tag) !== -1 || $this.data('search-keywords').indexOf(tag) !== -1) {
                $this.toggleClass('show-filter', true);
                $this.toggleClass('hide-filter', false);
              } else {
                $this.toggleClass('show-filter', false);
                $this.toggleClass('hide-filter', true);
              }
            });
            noQualsMessage();
            $(this).css('margin-right', ''); //update margins to prevent grid breaking

            $('.show-filter').each(function (index) {
              //for each breakpoint
              if (window.matchMedia("(min-width: 88em)").matches) {
                alignGrid(4, index, $(this), '.show-filter');
              }

              if (window.matchMedia("(max-width: 87.99em) and (min-width: 61em)").matches) {
                alignGrid(3, index, $(this), '.show-filter');
              }

              if (window.matchMedia("(max-width: 60.99em) and (min-width: 43em)").matches) {
                alignGrid(2, index, $(this), '.show-filter');
              }

              if (index === 0) {
                $(this).css('margin-left', '0');
              }
            });
          } else {
            // $(searchInput).val('').change();
            $(targetElements).css({
              'margin-right': '',
              'margin-left': ''
            });
            $('.no-quals-message').remove();
            $targetElements.toggleClass('show-filter', true);
            $targetElements.toggleClass('hide-filter', false);
          }
        });
      });
    }
  }

  searchFilter('.postgrad-quals li', '#search-quals', 3, '.quals-filter .tag');
  searchFilter('#areas-of-study li', '#search-aos', 3);
}); //alistapart.com/article/accent-folding-for-auto-complete

var accent_map = (_accent_map = {
  'ẚ': 'a',
  'Á': 'a',
  'á': 'a',
  'À': 'a',
  'à': 'a',
  'Ă': 'a',
  'ă': 'a',
  'Ắ': 'a',
  'ắ': 'a',
  'Ằ': 'a',
  'ằ': 'a',
  'Ẵ': 'a',
  'ẵ': 'a',
  'Ẳ': 'a',
  'ẳ': 'a',
  'Â': 'a',
  'â': 'a',
  'Ấ': 'a',
  'ấ': 'a',
  'Ầ': 'a',
  'ầ': 'a',
  'Ẫ': 'a',
  'ẫ': 'a',
  'Ẩ': 'a',
  'ẩ': 'a',
  'Ǎ': 'a',
  'ǎ': 'a',
  'Å': 'a',
  'å': 'a',
  'Ǻ': 'a',
  'ǻ': 'a',
  'Ä': 'a',
  'ä': 'a',
  'Ǟ': 'a',
  'ǟ': 'a',
  'Ã': 'a',
  'ã': 'a',
  'Ȧ': 'a',
  'ȧ': 'a',
  'Ǡ': 'a',
  'ǡ': 'a',
  'Ą': 'a',
  'ą': 'a',
  'Ā': 'a',
  'ā': 'a',
  'Ả': 'a',
  'ả': 'a',
  'Ȁ': 'a',
  'ȁ': 'a',
  'Ȃ': 'a',
  'ȃ': 'a',
  'Ạ': 'a',
  'ạ': 'a',
  'Ặ': 'a',
  'ặ': 'a',
  'Ậ': 'a',
  'ậ': 'a',
  'Ḁ': 'a',
  'ḁ': 'a',
  'Ⱥ': 'a',
  'ⱥ': 'a',
  'Ǽ': 'a',
  'ǽ': 'a',
  'Ǣ': 'a',
  'ǣ': 'a',
  'Ḃ': 'b',
  'ḃ': 'b',
  'Ḅ': 'b',
  'ḅ': 'b',
  'Ḇ': 'b',
  'ḇ': 'b',
  'Ƀ': 'b',
  'ƀ': 'b',
  'ᵬ': 'b',
  'Ɓ': 'b',
  'ɓ': 'b',
  'Ƃ': 'b',
  'ƃ': 'b',
  'Ć': 'c',
  'ć': 'c',
  'Ĉ': 'c',
  'ĉ': 'c',
  'Č': 'c',
  'č': 'c',
  'Ċ': 'c',
  'ċ': 'c',
  'Ç': 'c',
  'ç': 'c',
  'Ḉ': 'c',
  'ḉ': 'c',
  'Ȼ': 'c',
  'ȼ': 'c',
  'Ƈ': 'c',
  'ƈ': 'c',
  'ɕ': 'c',
  'Ď': 'd',
  'ď': 'd',
  'Ḋ': 'd',
  'ḋ': 'd',
  'Ḑ': 'd',
  'ḑ': 'd',
  'Ḍ': 'd',
  'ḍ': 'd',
  'Ḓ': 'd',
  'ḓ': 'd',
  'Ḏ': 'd',
  'ḏ': 'd',
  'Đ': 'd',
  'đ': 'd',
  'ᵭ': 'd',
  'Ɖ': 'd',
  'ɖ': 'd',
  'Ɗ': 'd',
  'ɗ': 'd',
  'Ƌ': 'd',
  'ƌ': 'd',
  'ȡ': 'd',
  'ð': 'd',
  'É': 'e',
  'Ə': 'e',
  'Ǝ': 'e',
  'ǝ': 'e',
  'é': 'e',
  'È': 'e',
  'è': 'e',
  'Ĕ': 'e',
  'ĕ': 'e',
  'Ê': 'e',
  'ê': 'e',
  'Ế': 'e',
  'ế': 'e',
  'Ề': 'e',
  'ề': 'e',
  'Ễ': 'e',
  'ễ': 'e',
  'Ể': 'e',
  'ể': 'e',
  'Ě': 'e',
  'ě': 'e',
  'Ë': 'e',
  'ë': 'e',
  'Ẽ': 'e',
  'ẽ': 'e',
  'Ė': 'e',
  'ė': 'e',
  'Ȩ': 'e',
  'ȩ': 'e',
  'Ḝ': 'e',
  'ḝ': 'e',
  'Ę': 'e',
  'ę': 'e',
  'Ē': 'e',
  'ē': 'e',
  'Ḗ': 'e',
  'ḗ': 'e',
  'Ḕ': 'e',
  'ḕ': 'e',
  'Ẻ': 'e',
  'ẻ': 'e',
  'Ȅ': 'e',
  'ȅ': 'e',
  'Ȇ': 'e',
  'ȇ': 'e',
  'Ẹ': 'e',
  'ẹ': 'e',
  'Ệ': 'e',
  'ệ': 'e',
  'Ḙ': 'e',
  'ḙ': 'e',
  'Ḛ': 'e',
  'ḛ': 'e',
  'Ɇ': 'e',
  'ɇ': 'e',
  'ɚ': 'e',
  'ɝ': 'e',
  'Ḟ': 'f',
  'ḟ': 'f',
  'ᵮ': 'f',
  'Ƒ': 'f',
  'ƒ': 'f',
  'Ǵ': 'g',
  'ǵ': 'g',
  'Ğ': 'g',
  'ğ': 'g',
  'Ĝ': 'g',
  'ĝ': 'g',
  'Ǧ': 'g',
  'ǧ': 'g',
  'Ġ': 'g',
  'ġ': 'g',
  'Ģ': 'g',
  'ģ': 'g',
  'Ḡ': 'g',
  'ḡ': 'g',
  'Ǥ': 'g',
  'ǥ': 'g',
  'Ɠ': 'g',
  'ɠ': 'g',
  'Ĥ': 'h',
  'ĥ': 'h',
  'Ȟ': 'h',
  'ȟ': 'h',
  'Ḧ': 'h',
  'ḧ': 'h',
  'Ḣ': 'h',
  'ḣ': 'h',
  'Ḩ': 'h',
  'ḩ': 'h',
  'Ḥ': 'h',
  'ḥ': 'h',
  'Ḫ': 'h',
  'ḫ': 'h',
  'H': 'h',
  '̱': 'h',
  'ẖ': 'h',
  'Ħ': 'h',
  'ħ': 'h',
  'Ⱨ': 'h',
  'ⱨ': 'h',
  'Í': 'i',
  'í': 'i',
  'Ì': 'i',
  'ì': 'i',
  'Ĭ': 'i',
  'ĭ': 'i',
  'Î': 'i',
  'î': 'i',
  'Ǐ': 'i',
  'ǐ': 'i',
  'Ï': 'i',
  'ï': 'i',
  'Ḯ': 'i',
  'ḯ': 'i',
  'Ĩ': 'i',
  'ĩ': 'i',
  'İ': 'i',
  'i': 'i',
  'Į': 'i',
  'į': 'i',
  'Ī': 'i',
  'ī': 'i',
  'Ỉ': 'i',
  'ỉ': 'i',
  'Ȉ': 'i',
  'ȉ': 'i',
  'Ȋ': 'i',
  'ȋ': 'i',
  'Ị': 'i',
  'ị': 'i',
  'Ḭ': 'i',
  'ḭ': 'i',
  'I': 'i',
  'ı': 'i',
  'Ɨ': 'i',
  'ɨ': 'i',
  'Ĵ': 'j',
  'ĵ': 'j',
  'J': 'j',
  '̌': 'j',
  'ǰ': 'j',
  'ȷ': 'j',
  'Ɉ': 'j',
  'ɉ': 'j',
  'ʝ': 'j',
  'ɟ': 'j',
  'ʄ': 'j',
  'Ḱ': 'k',
  'ḱ': 'k',
  'Ǩ': 'k',
  'ǩ': 'k',
  'Ķ': 'k',
  'ķ': 'k',
  'Ḳ': 'k',
  'ḳ': 'k',
  'Ḵ': 'k',
  'ḵ': 'k',
  'Ƙ': 'k',
  'ƙ': 'k',
  'Ⱪ': 'k',
  'ⱪ': 'k',
  'Ĺ': 'a',
  'ĺ': 'l',
  'Ľ': 'l',
  'ľ': 'l',
  'Ļ': 'l',
  'ļ': 'l',
  'Ḷ': 'l',
  'ḷ': 'l',
  'Ḹ': 'l',
  'ḹ': 'l',
  'Ḽ': 'l',
  'ḽ': 'l',
  'Ḻ': 'l',
  'ḻ': 'l',
  'Ł': 'l',
  'ł': 'l'
}, _defineProperty(_accent_map, "\u0141", 'l'), _defineProperty(_accent_map, '̣', 'l'), _defineProperty(_accent_map, "\u0142", 'l'), _defineProperty(_accent_map, "\u0323", 'l'), _defineProperty(_accent_map, 'Ŀ', 'l'), _defineProperty(_accent_map, 'ŀ', 'l'), _defineProperty(_accent_map, 'Ƚ', 'l'), _defineProperty(_accent_map, 'ƚ', 'l'), _defineProperty(_accent_map, 'Ⱡ', 'l'), _defineProperty(_accent_map, 'ⱡ', 'l'), _defineProperty(_accent_map, 'Ɫ', 'l'), _defineProperty(_accent_map, 'ɫ', 'l'), _defineProperty(_accent_map, 'ɬ', 'l'), _defineProperty(_accent_map, 'ɭ', 'l'), _defineProperty(_accent_map, 'ȴ', 'l'), _defineProperty(_accent_map, 'Ḿ', 'm'), _defineProperty(_accent_map, 'ḿ', 'm'), _defineProperty(_accent_map, 'Ṁ', 'm'), _defineProperty(_accent_map, 'ṁ', 'm'), _defineProperty(_accent_map, 'Ṃ', 'm'), _defineProperty(_accent_map, 'ṃ', 'm'), _defineProperty(_accent_map, 'ɱ', 'm'), _defineProperty(_accent_map, 'Ń', 'n'), _defineProperty(_accent_map, 'ń', 'n'), _defineProperty(_accent_map, 'Ǹ', 'n'), _defineProperty(_accent_map, 'ǹ', 'n'), _defineProperty(_accent_map, 'Ň', 'n'), _defineProperty(_accent_map, 'ň', 'n'), _defineProperty(_accent_map, 'Ñ', 'n'), _defineProperty(_accent_map, 'ñ', 'n'), _defineProperty(_accent_map, 'Ṅ', 'n'), _defineProperty(_accent_map, 'ṅ', 'n'), _defineProperty(_accent_map, 'Ņ', 'n'), _defineProperty(_accent_map, 'ņ', 'n'), _defineProperty(_accent_map, 'Ṇ', 'n'), _defineProperty(_accent_map, 'ṇ', 'n'), _defineProperty(_accent_map, 'Ṋ', 'n'), _defineProperty(_accent_map, 'ṋ', 'n'), _defineProperty(_accent_map, 'Ṉ', 'n'), _defineProperty(_accent_map, 'ṉ', 'n'), _defineProperty(_accent_map, 'Ɲ', 'n'), _defineProperty(_accent_map, 'ɲ', 'n'), _defineProperty(_accent_map, 'Ƞ', 'n'), _defineProperty(_accent_map, 'ƞ', 'n'), _defineProperty(_accent_map, 'ɳ', 'n'), _defineProperty(_accent_map, 'ȵ', 'n'), _defineProperty(_accent_map, 'N', 'n'), _defineProperty(_accent_map, '̈', 'n'), _defineProperty(_accent_map, 'n', 'n'), _defineProperty(_accent_map, "\u0308", 'n'), _defineProperty(_accent_map, 'Ó', 'o'), _defineProperty(_accent_map, 'ó', 'o'), _defineProperty(_accent_map, 'Ò', 'o'), _defineProperty(_accent_map, 'ò', 'o'), _defineProperty(_accent_map, 'Ŏ', 'o'), _defineProperty(_accent_map, 'ŏ', 'o'), _defineProperty(_accent_map, 'Ô', 'o'), _defineProperty(_accent_map, 'ô', 'o'), _defineProperty(_accent_map, 'Ố', 'o'), _defineProperty(_accent_map, 'ố', 'o'), _defineProperty(_accent_map, 'Ồ', 'o'), _defineProperty(_accent_map, 'ồ', 'o'), _defineProperty(_accent_map, 'Ỗ', 'o'), _defineProperty(_accent_map, 'ỗ', 'o'), _defineProperty(_accent_map, 'Ổ', 'o'), _defineProperty(_accent_map, 'ổ', 'o'), _defineProperty(_accent_map, 'Ǒ', 'o'), _defineProperty(_accent_map, 'ǒ', 'o'), _defineProperty(_accent_map, 'Ö', 'o'), _defineProperty(_accent_map, 'ö', 'o'), _defineProperty(_accent_map, 'Ȫ', 'o'), _defineProperty(_accent_map, 'ȫ', 'o'), _defineProperty(_accent_map, 'Ő', 'o'), _defineProperty(_accent_map, 'ő', 'o'), _defineProperty(_accent_map, 'Õ', 'o'), _defineProperty(_accent_map, 'õ', 'o'), _defineProperty(_accent_map, 'Ṍ', 'o'), _defineProperty(_accent_map, 'ṍ', 'o'), _defineProperty(_accent_map, 'Ṏ', 'o'), _defineProperty(_accent_map, 'ṏ', 'o'), _defineProperty(_accent_map, 'Ȭ', 'o'), _defineProperty(_accent_map, 'ȭ', 'o'), _defineProperty(_accent_map, 'Ȯ', 'o'), _defineProperty(_accent_map, 'ȯ', 'o'), _defineProperty(_accent_map, 'Ȱ', 'o'), _defineProperty(_accent_map, 'ȱ', 'o'), _defineProperty(_accent_map, 'Ø', 'o'), _defineProperty(_accent_map, 'ø', 'o'), _defineProperty(_accent_map, 'Ǿ', 'o'), _defineProperty(_accent_map, 'ǿ', 'o'), _defineProperty(_accent_map, 'Ǫ', 'o'), _defineProperty(_accent_map, 'ǫ', 'o'), _defineProperty(_accent_map, 'Ǭ', 'o'), _defineProperty(_accent_map, 'ǭ', 'o'), _defineProperty(_accent_map, 'Ō', 'o'), _defineProperty(_accent_map, 'ō', 'o'), _defineProperty(_accent_map, 'Ṓ', 'o'), _defineProperty(_accent_map, 'ṓ', 'o'), _defineProperty(_accent_map, 'Ṑ', 'o'), _defineProperty(_accent_map, 'ṑ', 'o'), _defineProperty(_accent_map, 'Ỏ', 'o'), _defineProperty(_accent_map, 'ỏ', 'o'), _defineProperty(_accent_map, 'Ȍ', 'o'), _defineProperty(_accent_map, 'ȍ', 'o'), _defineProperty(_accent_map, 'Ȏ', 'o'), _defineProperty(_accent_map, 'ȏ', 'o'), _defineProperty(_accent_map, 'Ơ', 'o'), _defineProperty(_accent_map, 'ơ', 'o'), _defineProperty(_accent_map, 'Ớ', 'o'), _defineProperty(_accent_map, 'ớ', 'o'), _defineProperty(_accent_map, 'Ờ', 'o'), _defineProperty(_accent_map, 'ờ', 'o'), _defineProperty(_accent_map, 'Ỡ', 'o'), _defineProperty(_accent_map, 'ỡ', 'o'), _defineProperty(_accent_map, 'Ở', 'o'), _defineProperty(_accent_map, 'ở', 'o'), _defineProperty(_accent_map, 'Ợ', 'o'), _defineProperty(_accent_map, 'ợ', 'o'), _defineProperty(_accent_map, 'Ọ', 'o'), _defineProperty(_accent_map, 'ọ', 'o'), _defineProperty(_accent_map, 'Ộ', 'o'), _defineProperty(_accent_map, 'ộ', 'o'), _defineProperty(_accent_map, 'Ɵ', 'o'), _defineProperty(_accent_map, 'ɵ', 'o'), _defineProperty(_accent_map, 'Ṕ', 'p'), _defineProperty(_accent_map, 'ṕ', 'p'), _defineProperty(_accent_map, 'Ṗ', 'p'), _defineProperty(_accent_map, 'ṗ', 'p'), _defineProperty(_accent_map, 'Ᵽ', 'p'), _defineProperty(_accent_map, 'Ƥ', 'p'), _defineProperty(_accent_map, 'ƥ', 'p'), _defineProperty(_accent_map, 'P', 'p'), _defineProperty(_accent_map, '̃', 'p'), _defineProperty(_accent_map, 'p', 'p'), _defineProperty(_accent_map, "\u0303", 'p'), _defineProperty(_accent_map, 'ʠ', 'q'), _defineProperty(_accent_map, 'Ɋ', 'q'), _defineProperty(_accent_map, 'ɋ', 'q'), _defineProperty(_accent_map, 'Ŕ', 'r'), _defineProperty(_accent_map, 'ŕ', 'r'), _defineProperty(_accent_map, 'Ř', 'r'), _defineProperty(_accent_map, 'ř', 'r'), _defineProperty(_accent_map, 'Ṙ', 'r'), _defineProperty(_accent_map, 'ṙ', 'r'), _defineProperty(_accent_map, 'Ŗ', 'r'), _defineProperty(_accent_map, 'ŗ', 'r'), _defineProperty(_accent_map, 'Ȑ', 'r'), _defineProperty(_accent_map, 'ȑ', 'r'), _defineProperty(_accent_map, 'Ȓ', 'r'), _defineProperty(_accent_map, 'ȓ', 'r'), _defineProperty(_accent_map, 'Ṛ', 'r'), _defineProperty(_accent_map, 'ṛ', 'r'), _defineProperty(_accent_map, 'Ṝ', 'r'), _defineProperty(_accent_map, 'ṝ', 'r'), _defineProperty(_accent_map, 'Ṟ', 'r'), _defineProperty(_accent_map, 'ṟ', 'r'), _defineProperty(_accent_map, 'Ɍ', 'r'), _defineProperty(_accent_map, 'ɍ', 'r'), _defineProperty(_accent_map, 'ᵲ', 'r'), _defineProperty(_accent_map, 'ɼ', 'r'), _defineProperty(_accent_map, 'Ɽ', 'r'), _defineProperty(_accent_map, 'ɽ', 'r'), _defineProperty(_accent_map, 'ɾ', 'r'), _defineProperty(_accent_map, 'ᵳ', 'r'), _defineProperty(_accent_map, 'ß', 's'), _defineProperty(_accent_map, 'Ś', 's'), _defineProperty(_accent_map, 'ś', 's'), _defineProperty(_accent_map, 'Ṥ', 's'), _defineProperty(_accent_map, 'ṥ', 's'), _defineProperty(_accent_map, 'Ŝ', 's'), _defineProperty(_accent_map, 'ŝ', 's'), _defineProperty(_accent_map, 'Š', 's'), _defineProperty(_accent_map, 'š', 's'), _defineProperty(_accent_map, 'Ṧ', 's'), _defineProperty(_accent_map, 'ṧ', 's'), _defineProperty(_accent_map, 'Ṡ', 's'), _defineProperty(_accent_map, 'ṡ', 's'), _defineProperty(_accent_map, 'ẛ', 's'), _defineProperty(_accent_map, 'Ş', 's'), _defineProperty(_accent_map, 'ş', 's'), _defineProperty(_accent_map, 'Ṣ', 's'), _defineProperty(_accent_map, 'ṣ', 's'), _defineProperty(_accent_map, 'Ṩ', 's'), _defineProperty(_accent_map, 'ṩ', 's'), _defineProperty(_accent_map, 'Ș', 's'), _defineProperty(_accent_map, 'ș', 's'), _defineProperty(_accent_map, 'ʂ', 's'), _defineProperty(_accent_map, 'S', 's'), _defineProperty(_accent_map, '̩', 's'), _defineProperty(_accent_map, 's', 's'), _defineProperty(_accent_map, "\u0329", 's'), _defineProperty(_accent_map, 'Þ', 't'), _defineProperty(_accent_map, 'þ', 't'), _defineProperty(_accent_map, 'Ť', 't'), _defineProperty(_accent_map, 'ť', 't'), _defineProperty(_accent_map, 'T', 't'), _defineProperty(_accent_map, "\u0308", 't'), _defineProperty(_accent_map, 'ẗ', 't'), _defineProperty(_accent_map, 'Ṫ', 't'), _defineProperty(_accent_map, 'ṫ', 't'), _defineProperty(_accent_map, 'Ţ', 't'), _defineProperty(_accent_map, 'ţ', 't'), _defineProperty(_accent_map, 'Ṭ', 't'), _defineProperty(_accent_map, 'ṭ', 't'), _defineProperty(_accent_map, 'Ț', 't'), _defineProperty(_accent_map, 'ț', 't'), _defineProperty(_accent_map, 'Ṱ', 't'), _defineProperty(_accent_map, 'ṱ', 't'), _defineProperty(_accent_map, 'Ṯ', 't'), _defineProperty(_accent_map, 'ṯ', 't'), _defineProperty(_accent_map, 'Ŧ', 't'), _defineProperty(_accent_map, 'ŧ', 't'), _defineProperty(_accent_map, 'Ⱦ', 't'), _defineProperty(_accent_map, 'ⱦ', 't'), _defineProperty(_accent_map, 'ᵵ', 't'), _defineProperty(_accent_map, 'ƫ', 't'), _defineProperty(_accent_map, 'Ƭ', 't'), _defineProperty(_accent_map, 'ƭ', 't'), _defineProperty(_accent_map, 'Ʈ', 't'), _defineProperty(_accent_map, 'ʈ', 't'), _defineProperty(_accent_map, 'ȶ', 't'), _defineProperty(_accent_map, 'Ú', 'u'), _defineProperty(_accent_map, 'ú', 'u'), _defineProperty(_accent_map, 'Ù', 'u'), _defineProperty(_accent_map, 'ù', 'u'), _defineProperty(_accent_map, 'Ŭ', 'u'), _defineProperty(_accent_map, 'ŭ', 'u'), _defineProperty(_accent_map, 'Û', 'u'), _defineProperty(_accent_map, 'û', 'u'), _defineProperty(_accent_map, 'Ǔ', 'u'), _defineProperty(_accent_map, 'ǔ', 'u'), _defineProperty(_accent_map, 'Ů', 'u'), _defineProperty(_accent_map, 'ů', 'u'), _defineProperty(_accent_map, 'Ü', 'u'), _defineProperty(_accent_map, 'ü', 'u'), _defineProperty(_accent_map, 'Ǘ', 'u'), _defineProperty(_accent_map, 'ǘ', 'u'), _defineProperty(_accent_map, 'Ǜ', 'u'), _defineProperty(_accent_map, 'ǜ', 'u'), _defineProperty(_accent_map, 'Ǚ', 'u'), _defineProperty(_accent_map, 'ǚ', 'u'), _defineProperty(_accent_map, 'Ǖ', 'u'), _defineProperty(_accent_map, 'ǖ', 'u'), _defineProperty(_accent_map, 'Ű', 'u'), _defineProperty(_accent_map, 'ű', 'u'), _defineProperty(_accent_map, 'Ũ', 'u'), _defineProperty(_accent_map, 'ũ', 'u'), _defineProperty(_accent_map, 'Ṹ', 'u'), _defineProperty(_accent_map, 'ṹ', 'u'), _defineProperty(_accent_map, 'Ų', 'u'), _defineProperty(_accent_map, 'ų', 'u'), _defineProperty(_accent_map, 'Ū', 'u'), _defineProperty(_accent_map, 'ū', 'u'), _defineProperty(_accent_map, 'Ṻ', 'u'), _defineProperty(_accent_map, 'ṻ', 'u'), _defineProperty(_accent_map, 'Ủ', 'u'), _defineProperty(_accent_map, 'ủ', 'u'), _defineProperty(_accent_map, 'Ȕ', 'u'), _defineProperty(_accent_map, 'ȕ', 'u'), _defineProperty(_accent_map, 'Ȗ', 'u'), _defineProperty(_accent_map, 'ȗ', 'u'), _defineProperty(_accent_map, 'Ư', 'u'), _defineProperty(_accent_map, 'ư', 'u'), _defineProperty(_accent_map, 'Ứ', 'u'), _defineProperty(_accent_map, 'ứ', 'u'), _defineProperty(_accent_map, 'Ừ', 'u'), _defineProperty(_accent_map, 'ừ', 'u'), _defineProperty(_accent_map, 'Ữ', 'u'), _defineProperty(_accent_map, 'ữ', 'u'), _defineProperty(_accent_map, 'Ử', 'u'), _defineProperty(_accent_map, 'ử', 'u'), _defineProperty(_accent_map, 'Ự', 'u'), _defineProperty(_accent_map, 'ự', 'u'), _defineProperty(_accent_map, 'Ụ', 'u'), _defineProperty(_accent_map, 'ụ', 'u'), _defineProperty(_accent_map, 'Ṳ', 'u'), _defineProperty(_accent_map, 'ṳ', 'u'), _defineProperty(_accent_map, 'Ṷ', 'u'), _defineProperty(_accent_map, 'ṷ', 'u'), _defineProperty(_accent_map, 'Ṵ', 'u'), _defineProperty(_accent_map, 'ṵ', 'u'), _defineProperty(_accent_map, 'Ʉ', 'u'), _defineProperty(_accent_map, 'ʉ', 'u'), _defineProperty(_accent_map, 'Ṽ', 'v'), _defineProperty(_accent_map, 'ṽ', 'v'), _defineProperty(_accent_map, 'Ṿ', 'v'), _defineProperty(_accent_map, 'ṿ', 'v'), _defineProperty(_accent_map, 'Ʋ', 'v'), _defineProperty(_accent_map, 'ʋ', 'v'), _defineProperty(_accent_map, 'Ẃ', 'w'), _defineProperty(_accent_map, 'ẃ', 'w'), _defineProperty(_accent_map, 'Ẁ', 'w'), _defineProperty(_accent_map, 'ẁ', 'w'), _defineProperty(_accent_map, 'Ŵ', 'w'), _defineProperty(_accent_map, 'ŵ', 'w'), _defineProperty(_accent_map, 'W', 'w'), _defineProperty(_accent_map, '̊', 'w'), _defineProperty(_accent_map, 'ẘ', 'w'), _defineProperty(_accent_map, 'Ẅ', 'w'), _defineProperty(_accent_map, 'ẅ', 'w'), _defineProperty(_accent_map, 'Ẇ', 'w'), _defineProperty(_accent_map, 'ẇ', 'w'), _defineProperty(_accent_map, 'Ẉ', 'w'), _defineProperty(_accent_map, 'ẉ', 'w'), _defineProperty(_accent_map, 'Ẍ', 'x'), _defineProperty(_accent_map, 'ẍ', 'x'), _defineProperty(_accent_map, 'Ẋ', 'x'), _defineProperty(_accent_map, 'ẋ', 'x'), _defineProperty(_accent_map, 'Ý', 'y'), _defineProperty(_accent_map, 'ý', 'y'), _defineProperty(_accent_map, 'Ỳ', 'y'), _defineProperty(_accent_map, 'ỳ', 'y'), _defineProperty(_accent_map, 'Ŷ', 'y'), _defineProperty(_accent_map, 'ŷ', 'y'), _defineProperty(_accent_map, 'Y', 'y'), _defineProperty(_accent_map, "\u030A", 'y'), _defineProperty(_accent_map, 'ẙ', 'y'), _defineProperty(_accent_map, 'Ÿ', 'y'), _defineProperty(_accent_map, 'ÿ', 'y'), _defineProperty(_accent_map, 'Ỹ', 'y'), _defineProperty(_accent_map, 'ỹ', 'y'), _defineProperty(_accent_map, 'Ẏ', 'y'), _defineProperty(_accent_map, 'ẏ', 'y'), _defineProperty(_accent_map, 'Ȳ', 'y'), _defineProperty(_accent_map, 'ȳ', 'y'), _defineProperty(_accent_map, 'Ỷ', 'y'), _defineProperty(_accent_map, 'ỷ', 'y'), _defineProperty(_accent_map, 'Ỵ', 'y'), _defineProperty(_accent_map, 'ỵ', 'y'), _defineProperty(_accent_map, 'ʏ', 'y'), _defineProperty(_accent_map, 'Ɏ', 'y'), _defineProperty(_accent_map, 'ɏ', 'y'), _defineProperty(_accent_map, 'Ƴ', 'y'), _defineProperty(_accent_map, 'ƴ', 'y'), _defineProperty(_accent_map, 'Ź', 'z'), _defineProperty(_accent_map, 'ź', 'z'), _defineProperty(_accent_map, 'Ẑ', 'z'), _defineProperty(_accent_map, 'ẑ', 'z'), _defineProperty(_accent_map, 'Ž', 'z'), _defineProperty(_accent_map, 'ž', 'z'), _defineProperty(_accent_map, 'Ż', 'z'), _defineProperty(_accent_map, 'ż', 'z'), _defineProperty(_accent_map, 'Ẓ', 'z'), _defineProperty(_accent_map, 'ẓ', 'z'), _defineProperty(_accent_map, 'Ẕ', 'z'), _defineProperty(_accent_map, 'ẕ', 'z'), _defineProperty(_accent_map, 'Ƶ', 'z'), _defineProperty(_accent_map, 'ƶ', 'z'), _defineProperty(_accent_map, 'Ȥ', 'z'), _defineProperty(_accent_map, 'ȥ', 'z'), _defineProperty(_accent_map, 'ʐ', 'z'), _defineProperty(_accent_map, 'ʑ', 'z'), _defineProperty(_accent_map, 'Ⱬ', 'z'), _defineProperty(_accent_map, 'ⱬ', 'z'), _defineProperty(_accent_map, 'Ǯ', 'z'), _defineProperty(_accent_map, 'ǯ', 'z'), _defineProperty(_accent_map, 'ƺ', 'z'), _accent_map);

function accent_fold(s) {
  if (!s) {
    return '';
  }

  var ret = '';

  for (var i = 0; i < s.length; i++) {
    ret += accent_map[s.charAt(i)] || s.charAt(i);
  }

  return ret;
}

;

/***/ })
/******/ ]);