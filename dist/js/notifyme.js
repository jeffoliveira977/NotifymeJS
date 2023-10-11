/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var errorIconFill = "\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-x-circle-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z\"/>\n</svg>\n";
var errorIcon = "\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-x-circle\" viewBox=\"0 0 16 16\">\n  <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\"/>\n  <path d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z\"/>\n</svg>\n";
var warningIconFill = "   \n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-exclamation-circle-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z\"/>\n</svg>\n";
var warningIcon = "   \n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-exclamation-circle\" viewBox=\"0 0 16 16\">\n  <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\"/>\n  <path d=\"M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z\"/>\n</svg>\n";
var infoIconFill = "\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-info-circle-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z\"/>\n</svg>\n";
var infoIcon = "\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-info-circle\" viewBox=\"0 0 16 16\">\n  <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\"/>\n  <path d=\"m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z\"/>\n</svg>\n";
var successIconFill = "\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-check-circle-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z\"/>\n</svg>\n";
var successIcon = "\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-check-circle\" viewBox=\"0 0 16 16\">\n  <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\"/>\n  <path d=\"M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z\"/>\n</svg>\n";
var bellIconFill = "\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-bell-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z\"/>\n</svg>\n";
var bellIcon = "\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-bell\" viewBox=\"0 0 16 16\">\n  <path d=\"M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z\"/>\n</svg>\n";
var getIcon = function (type, fill) {
    if (fill === void 0) { fill = false; }
    var icons = {
        success: fill ? successIconFill : successIcon,
        info: fill ? infoIconFill : infoIcon,
        error: fill ? errorIconFill : errorIcon,
        warning: fill ? warningIconFill : warningIcon,
        notify: fill ? bellIconFill : bellIcon,
    };
    return icons[type] || "";
};

var PADDING_TOP_ATTRIBUTE = "data-padding-top";
var PADDING_BOTTOM_ATTRIBUTE = "data-padding-bottom";
/**
 * Replicates jQuery's slideDown - Display the element with a sliding motion.
 * Assumes the element is hidden with display: none;
 *
 * @param { HTMLElement } element
 * @param { number } duration - in seconds, so 0.3 is 300ms
 * @param { GSAPCallback } callback
 */
var slideDown = function (element, duration, callback) {
    if (duration === void 0) { duration = 0.3; }
    if (callback === void 0) { callback = function () { }; }
    if (element) {
        element.style.height = "auto";
        var paddingTop = getPaddingTop(element);
        element.style.paddingTop = "0";
        var paddingBottom = getPaddingBottom(element);
        element.style.paddingBottom = "0";
        var targetHeight = element.offsetHeight;
        element.style.height = "0";
        gsap.to(element, {
            height: targetHeight,
            paddingTop: paddingTop,
            paddingBottom: paddingBottom,
            overwrite: "auto",
            duration: duration,
            ease: "power1.out",
            onComplete: function () {
                if (callback) {
                    callback();
                }
            }
        });
    }
};
/**
 * Set the padding top for reference on the element in case a slideUp is toggled before the animation has been completed
 *
 * @param { HTMLElement } element
 *
 * @returns { number }
 */
var getPaddingTop = function (element) {
    if (element.getAttribute(PADDING_TOP_ATTRIBUTE)) {
        return parseFloat(element.getAttribute(PADDING_TOP_ATTRIBUTE));
    }
    else {
        return parseFloat(setAndGetAttribute(element, PADDING_TOP_ATTRIBUTE, parseFloat(getComputedStyle(element).paddingTop).toString()));
    }
};
/**
 * Set the padding bottom for reference on the element in case a slideUp is toggled before the animation has been completed
 *
 * @param { HTMLElement } element
 *
 * @returns { number }
 */
var getPaddingBottom = function (element) {
    if (element.getAttribute(PADDING_BOTTOM_ATTRIBUTE)) {
        return parseFloat(element.getAttribute(PADDING_BOTTOM_ATTRIBUTE));
    }
    else {
        return parseFloat(setAndGetAttribute(element, PADDING_BOTTOM_ATTRIBUTE, parseFloat(getComputedStyle(element).paddingBottom).toString()));
    }
};
/**
 * Set and get an attribute on an element
 *
 * @param { HTMLElement } element
 * @param { string } attribute
 * @param { string } value
 *
 * @returns { string }
 */
var setAndGetAttribute = function (element, attribute, value) {
    element.setAttribute(attribute, value);
    return element.getAttribute(attribute);
};
/**
 * Replicates jQuery's slideUp - Hide the element with a sliding motion.
 *
 * @param { HTMLElement } element
 * @param { number } duration - in seconds, so 0.3 is 300ms
 * @param { GSAPCallback } callback
 */
var slideUp = function (element, duration, callback) {
    if (duration === void 0) { duration = 0.3; }
    if (callback === void 0) { callback = function () { }; }
    if (element) {
        var paddingTop_1 = getPaddingTop(element);
        var paddingBottom_1 = getPaddingBottom(element);
        gsap.to(element, {
            height: 0,
            paddingTop: 0,
            paddingBottom: 0,
            overwrite: "auto",
            duration: duration,
            ease: "power1.in",
            onComplete: function () {
                element.style.display = "none";
                element.style.height = "auto";
                element.style.paddingTop = "".concat(paddingTop_1, "px");
                element.style.paddingBottom = "".concat(paddingBottom_1, "px");
                element.removeAttribute(PADDING_TOP_ATTRIBUTE);
                element.removeAttribute(PADDING_BOTTOM_ATTRIBUTE);
                if (callback) {
                    callback();
                }
            }
        });
    }
};

var Notifyme = /** @class */ (function () {
    function Notifyme(content) {
        var _this = this;
        /**
         * Initialization function for the class.
         * @private
         */
        this.onInitialization = function () {
            try {
                if (_this.content.message.length === 0) {
                    throw "Incorrect description";
                }
                // Validate the notification type
                var regex = /^(info|success|warning|error|notify)$/;
                if (!regex.test(_this.content.type)) {
                    throw "The notification type " + _this.content.type + " is not valid";
                }
            }
            catch (error) {
                console.error(error);
                return;
            }
            // Build the container and set up event handlers
            _this.buildContainer();
            _this.onEventHandlers();
        };
        /**
         * Function to set up event handlers for the class.
         * @private
         */
        this.onEventHandlers = function () {
            var _a, _b, _c, _d;
            (_a = _this.container) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
                _this.onClose();
            });
            (_b = _this.container) === null || _b === void 0 ? void 0 : _b.addEventListener("mouseover", function () {
                _this.stopCloseTimeout();
            });
            (_c = _this.container) === null || _c === void 0 ? void 0 : _c.addEventListener("mouseout", function () {
                _this.startCloseTimeout();
            });
            // Close the notification when the close icon is clicked
            var close = (_d = _this.container) === null || _d === void 0 ? void 0 : _d.querySelector(".notifyme-icon");
            if (close) {
                close.addEventListener("click", function () {
                    _this.onClose();
                });
            }
            // Start the close timeout initially
            _this.startCloseTimeout();
        };
        /**
         * Build and display the notification container.
         */
        this.buildContainer = function () {
            var containerHTML = "\n        <div class=\"notifyme-container notifyme-".concat(_this.content.type, "\">\n            <div class=\"notifyme-message\">\n                <div class=\"notifyme-title\">").concat(_this.content.title, "</div>\n                <div class=\"notifyme-description\">").concat(_this.content.message, "</div>\n            </div>\n            <div class=\"notifyme-close\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"1em\" fill=\"currentColor\" viewBox=\"0 0 352 512\">\n                    <path d=\"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z\"/>\n                </svg>\n            </div>\n        </div>\n    ");
            // Create a temporary div to hold the HTML content
            var tempDiv = document.createElement("div");
            tempDiv.innerHTML = containerHTML.trim();
            _this.container = tempDiv.firstChild;
            // Insert an icon into the container if showIcon is enabled
            if (_this.content.showIcon) {
                var iconHTML = "\n            <div class=\"notifyme-icon\">\n                ".concat(getIcon(_this.content.type, true), "\n            </div>\n        ");
                console.log(typeof _this.container);
                _this.container.insertAdjacentHTML("afterbegin", iconHTML);
            }
            // Append the container to the DOM
            _this.appendContainer(_this.container);
            // Apply animations based on the specified showAnimation
            if (_this.isFadeInShowAnimation()) {
                _this.fadeInContainer();
            }
            else if (_this.isBounceShowAnimation()) {
                _this.bounceInContainer();
            }
            else {
                slideDown(_this.container, 0.5);
            }
            _this.buildStyles();
            _this.setPosition(_this.content.position || "");
        };
        /**
         * Set the position of the notification container within the wrapper.
         * @param {string} position - The desired position of the container.
         */
        this.setPosition = function (position) {
            var validPositions = [
                "topleft",
                "topright",
                "bottomleft",
                "bottomright",
                "topcenter",
                "bottomcenter"
            ];
            if (validPositions.includes(position)) {
                _this.position(_this.wrapper, position);
            }
            else {
                _this.position(_this.wrapper, "topRight"); // Default to "topRight" if the position is invalid
            }
        };
        /**
         * Close the notification and trigger the appropriate animation based on settings.
         */
        this.onClose = function () {
            var _a, _b;
            // Check if the notification has already been clicked to prevent double actions
            if (((_a = _this.container) === null || _a === void 0 ? void 0 : _a.getAttribute("data-clicked")) === "true") {
                return;
            }
            // Callback to be executed after the hide animation
            var moveDownContainer = function () {
                gsap.to(_this.container, {
                    marginTop: "-100px",
                    duration: 0.1,
                    ease: "power1.in",
                    onComplete: function () {
                        var _a;
                        (_a = _this.container) === null || _a === void 0 ? void 0 : _a.remove();
                        if (_this.onCloseCallback) {
                            _this.onCloseCallback();
                        }
                    }
                });
            };
            // Mark the notification as clicked to prevent duplicate actions
            (_b = _this.container) === null || _b === void 0 ? void 0 : _b.setAttribute("data-clicked", "true");
            if (_this.isFadeInHideAnimation()) {
                _this.fadeOutContainer(moveDownContainer);
            }
            else if (_this.isBounceHideAnimation()) {
                _this.bounceOutContainer(moveDownContainer);
            }
            else {
                slideUp(_this.container, _this.content.hideDuration, moveDownContainer);
            }
        };
        /**
         * Start a timeout to automatically close the notification after a specified duration.
         */
        this.startCloseTimeout = function () {
            if (_this.content.duration === -1)
                return;
            // Set a timeout to call the onClose function after the specified duration
            _this.closeTimeout = setTimeout(function () {
                _this.onClose();
            }, _this.content.duration);
        };
        /**
         * Stop the currently running close timeout, preventing the notification from auto-closing.
         */
        this.stopCloseTimeout = function () {
            clearTimeout(_this.closeTimeout);
        };
        this.content = __assign(__assign({}, content), { showIcon: content.showIcon === undefined ? true : content.showIcon, duration: content.duration === undefined ? 5000 : content.duration, showAnimation: content.showAnimation === undefined
                ? "bounceleft"
                : content.showAnimation, showDuration: content.showDuration === undefined ? 0.2 : content.showDuration, hideAnimation: content.hideAnimation === undefined
                ? "bounceleft"
                : content.hideAnimation, hideDuration: content.hideDuration === undefined ? 0.2 : content.hideDuration, position: content.position === undefined
                ? "topright"
                : content.position.toLowerCase() });
        this.container = null;
        this.wrapper = null;
        this.onCloseCallback = this.content.callback;
        this.onInitialization();
    }
    /**
     * Append the notification container to the appropriate wrapper in the DOM.
     * @param {HTMLElement} container - The notification container element.
     */
    Notifyme.prototype.appendContainer = function (container) {
        var validPositions = ["topLeft", "topRight", "bottomLeft", "bottomRight"];
        var wrapperClass = validPositions.includes(this.content.position || "")
            ? "notifyme-".concat(this.content.position)
            : "notifyme-topRight";
        // Check if a wrapper with the position class already exists
        this.wrapper = document.querySelector(".notifyme-wrapper.".concat(wrapperClass));
        // If it doesn't exist, create a new wrapper with the corresponding class
        if (!this.wrapper) {
            this.wrapper = document.createElement("div");
            this.wrapper.className = "notifyme-wrapper ".concat(wrapperClass);
            document.body.appendChild(this.wrapper);
        }
        if (this.isRightPosition()) {
            this.wrapper.style.justifyItems = "end";
        }
        // Insert the container at the beginning of the wrapper
        this.wrapper.insertBefore(container, this.wrapper.firstChild);
    };
    /**
     * Apply custom styles to the notification container.
     */
    Notifyme.prototype.buildStyles = function () {
        var _a, _b;
        if (this.content.customStyles) {
            var containerStyles = this.content.customStyles.containerStyle || {};
            var fontStyles = this.content.customStyles.fontStyle || {};
            // Apply custom styles to the notification container
            for (var key in containerStyles) {
                if (Object.prototype.hasOwnProperty.call(containerStyles, key)) {
                    (_a = this.container) === null || _a === void 0 ? void 0 : _a.style.setProperty(key, containerStyles[key]);
                }
            }
            // Apply custom font styles to the notification description
            var textElement = (_b = this.container) === null || _b === void 0 ? void 0 : _b.querySelector(".notifyme-description");
            if (textElement) {
                for (var key in fontStyles) {
                    if (Object.prototype.hasOwnProperty.call(fontStyles, key)) {
                        textElement.style.setProperty(key, fontStyles[key]);
                    }
                }
            }
        }
    };
    /**
     * Position the wrapper element based on the specified position.
     * @param {HTMLElement} wrapper - The wrapper element.
     * @param {string} position - The desired position.
     */
    Notifyme.prototype.position = function (wrapper, position) {
        if (wrapper) {
            switch (position) {
                case "topleft":
                case "topright":
                case "topcenter":
                    wrapper.style.top = "0";
                    if (position === "topleft") {
                        wrapper.style.left = "0";
                    }
                    else if (position === "topright") {
                        wrapper.style.right = "0";
                    }
                    else {
                        wrapper.style.left = "50%";
                        wrapper.style.transform = "translateX(-50%)";
                    }
                    break;
                case "bottomleft":
                case "bottomright":
                case "bottomcenter":
                    wrapper.style.bottom = "0";
                    if (position === "bottomleft") {
                        wrapper.style.left = "0";
                    }
                    else if (position === "bottomright") {
                        wrapper.style.right = "0";
                    }
                    else {
                        wrapper.style.left = "50%";
                        wrapper.style.transform = "translateX(-50%)";
                    }
                    break;
            }
        }
    };
    /**
     * This function generates a fade or slide animation for the container element.
     * @param {string} direction - The direction of the animation ("up", "down", "left", or "right").
     * @param {number} duration - The duration of the animation.
     * @param {boolean} isFadeIn - Whether the animation is a fade in (true) or fade out (false).
     * @param {GSAPCallback} callback - Optional callback function to be executed after the animation.
     * @private
     */
    Notifyme.prototype.animateContainer = function (direction, duration, isFadeIn, callback) {
        var timeline = gsap.timeline();
        var dir = direction === "up" || direction === "right" ? 1 : -1;
        var fromProps = {
            duration: duration,
            opacity: isFadeIn ? 0 : 1,
            ease: isFadeIn ? "power1.in" : "power1.out"
        };
        var toProps = {
            duration: duration,
            opacity: isFadeIn ? 1 : 0,
            ease: isFadeIn ? "power1.in" : "power1.out",
            onComplete: callback
        };
        // Set the 'x' or 'y' property depending on the direction of the animation
        if (direction === "up" || direction === "down") {
            fromProps["y"] = isFadeIn ? (dir === 1 ? "100%" : "-100%") : "0%";
            toProps["y"] = isFadeIn ? "0%" : dir === 1 ? "-100%" : "100%";
        }
        else {
            fromProps["x"] = isFadeIn ? (dir === 1 ? "-100%" : "100%") : "0%";
            toProps["x"] = isFadeIn ? "0%" : dir === 1 ? "-100%" : "100%";
        }
        timeline.from(this.container, fromProps).to(this.container, toProps);
    };
    /**
     * Function to fade in the container.
     * @param {Function} callback - Optional callback function to be executed after the animation.
     * @private
     */
    Notifyme.prototype.fadeInContainer = function (callback) {
        var _a, _b;
        if (callback === void 0) { callback = function () { }; }
        var duration = (_a = this.content.showDuration) !== null && _a !== void 0 ? _a : 0.2;
        var animationType = (_b = this.content.showAnimation) === null || _b === void 0 ? void 0 : _b.slice(4);
        if (animationType) {
            // Call the animateContainer function with parameters for a fade-in animation
            this.animateContainer(animationType, duration, true, callback);
        }
    };
    /**
     * Function to fade out the container.
     * @param {Function} callback - Optional callback function to be executed after the animation.
     * @private
     */
    Notifyme.prototype.fadeOutContainer = function (callback) {
        var _a, _b;
        if (callback === void 0) { callback = function () { }; }
        var duration = (_a = this.content.hideDuration) !== null && _a !== void 0 ? _a : 0.2;
        var animationType = (_b = this.content.hideAnimation) === null || _b === void 0 ? void 0 : _b.slice(4);
        // Check if animationType is defined before using it
        if (animationType) {
            // Call the animateContainer function with parameters for a fade-out animation
            this.animateContainer(animationType, duration, false, callback);
        }
    };
    /**
     * Function to bounce in the container.
     * @private
     */
    Notifyme.prototype.bounceInContainer = function () {
        var timeline = gsap.timeline();
        var dir = this.content.showAnimation === "bounceright" ? 1 : -1;
        // Define the steps of the bounce in animation
        var animationSteps = [
            { x: dir === 1 ? "-100%" : "100%", opacity: 0 },
            { x: dir * -45, opacity: 1 },
            { x: dir * 20 },
            { x: dir * -5 },
            { x: 0 }
        ];
        // Add each step to the GSAP timeline
        timeline.from(this.container, __assign(__assign({}, animationSteps[0]), { duration: this.content.showDuration, ease: "power1.in" }));
        for (var i = 1; i < animationSteps.length; i++) {
            timeline.to(this.container, {
                x: animationSteps[i].x,
                opacity: animationSteps[i].opacity,
                duration: this.content.showDuration,
                ease: "power1.in"
            });
        }
    };
    /**
     * Function to bounce out the container.
     * @param {Function} callback - Optional callback function to be executed after the animation.
     * @private
     */
    Notifyme.prototype.bounceOutContainer = function (callback) {
        if (callback === void 0) { callback = function () { }; }
        var timeline = gsap.timeline();
        var dir = this.content.hideAnimation === "bounceright" ? 1 : -1;
        // Add the steps of the bounce out animation to the GSAP timeline
        timeline
            .to(this.container, {
            x: dir * 40,
            opacity: 1,
            duration: this.content.hideDuration
        })
            .to(this.container, {
            x: dir === 1 ? "-100%" : "100%",
            duration: this.content.hideDuration,
            opacity: 0,
            onComplete: callback
        });
    };
    /**
     * Check if the show animation is a bounce animation.
     * @returns {boolean} True if it's a bounce animation, otherwise false.
     */
    Notifyme.prototype.isBounceShowAnimation = function () {
        var _a;
        return (_a = this.content.showAnimation) === null || _a === void 0 ? void 0 : _a.includes("bounce");
    };
    /**
     * Check if the hide animation is a bounce animation.
     * @returns {boolean} True if it's a bounce animation, otherwise false.
     */
    Notifyme.prototype.isBounceHideAnimation = function () {
        var _a;
        return (_a = this.content.hideAnimation) === null || _a === void 0 ? void 0 : _a.includes("bounce");
    };
    /**
     * Check if the show animation is a fade-in animation.
     * @returns {boolean} True if it's a fade-in animation, otherwise false.
     */
    Notifyme.prototype.isFadeInShowAnimation = function () {
        var _a;
        return (_a = this.content.showAnimation) === null || _a === void 0 ? void 0 : _a.includes("fade");
    };
    /**
     * Check if the hide animation is a fade-in animation.
     * @returns {boolean} True if it's a fade-in animation, otherwise false.
     */
    Notifyme.prototype.isFadeInHideAnimation = function () {
        var _a;
        return (_a = this.content.hideAnimation) === null || _a === void 0 ? void 0 : _a.includes("fade");
    };
    /**
     * Check if the notification is positioned at the top.
     * @returns {boolean} True if it's at the top, otherwise false.
     */
    Notifyme.prototype.isTopPosition = function () {
        var _a;
        return (_a = this.content.position) === null || _a === void 0 ? void 0 : _a.includes("top");
    };
    /**
     * Check if the notification is positioned at the bottom.
     * @returns {boolean} True if it's at the bottom, otherwise false.
     */
    Notifyme.prototype.isBottomPosition = function () {
        var _a;
        return (_a = this.content.position) === null || _a === void 0 ? void 0 : _a.includes("bottom");
    };
    /**
     * Check if the notification is positioned to the left.
     * @returns {boolean} True if it's to the left, otherwise false.
     */
    Notifyme.prototype.isLeftPosition = function () {
        var _a;
        return (_a = this.content.position) === null || _a === void 0 ? void 0 : _a.includes("left");
    };
    /**
     * Check if the notification is positioned to the right.
     * @returns {boolean} True if it's to the right, otherwise false.
     */
    Notifyme.prototype.isRightPosition = function () {
        var _a;
        return (_a = this.content.position) === null || _a === void 0 ? void 0 : _a.includes("right");
    };
    /**
     * Check if the notification is centered horizontally.
     * @returns {boolean} True if it's centered horizontally, otherwise false.
     */
    Notifyme.prototype.isCenterPosition = function () {
        var _a;
        return (_a = this.content.position) === null || _a === void 0 ? void 0 : _a.includes("center");
    };
    /**
     * Check if the notification is positioned horizontally (left or right).
     * @returns {boolean} True if it's positioned horizontally, otherwise false.
     */
    Notifyme.prototype.isHorizontalPosition = function () {
        var _a, _b;
        return (((_a = this.content.position) === null || _a === void 0 ? void 0 : _a.includes("left")) ||
            ((_b = this.content.position) === null || _b === void 0 ? void 0 : _b.includes("right")));
    };
    /**
     * Check if the notification is positioned vertically (top or bottom).
     * @returns {boolean} True if it's positioned vertically, otherwise false.
     */
    Notifyme.prototype.isVerticalPosition = function () {
        var _a, _b;
        return (((_a = this.content.position) === null || _a === void 0 ? void 0 : _a.includes("top")) ||
            ((_b = this.content.position) === null || _b === void 0 ? void 0 : _b.includes("bottom")));
    };
    return Notifyme;
}());
window.NotifymeJS = function NotifymeJS(content) {
    return new Notifyme(content);
};
