// Copyright (c) 2023 - 2025 Jeff Oliveira
// NotifymeJS
// Version 2.0
// https://github.com/jeffoliveira977/NotifymeJS

const errorIconFill = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
</svg>
`;

const errorIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
`;

const warningIconFill = `   
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
</svg>
`;

const warningIcon = `   
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
</svg>
`;

const infoIconFill = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
</svg>
`;

const infoIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>
`;

const successIconFill = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
`;

const successIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
</svg>
`;

const bellIconFill = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
</svg>
`;

const bellIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
</svg>
`;

const getIcon = (type, fill = false) => {
  const icons = {
    success: fill ? successIconFill : successIcon,
    info: fill ? infoIconFill : infoIcon,
    error: fill ? errorIconFill : errorIcon,
    warning: fill ? warningIconFill : warningIcon,
    notify: fill ? bellIconFill : bellIcon,
  };
  return icons[type] || "";
};

const PADDING_TOP_ATTRIBUTE = "data-padding-top";
const PADDING_BOTTOM_ATTRIBUTE = "data-padding-bottom";

const validPositions = [
  "topleft",
  "topright",
  "bottomleft",
  "bottomright",
  "topcenter",
  "bottomcenter",
];

/**
 * Set and get an attribute on an element
 */
const setAndGetAttribute = (element, attribute, value) => {
  element.setAttribute(attribute, value);
  return element.getAttribute(attribute);
};

/**
 * Set the padding top for reference on the element in case a slideUp is toggled before the animation has been completed
 */
const getPaddingTop = (element) => {
  if (element.getAttribute(PADDING_TOP_ATTRIBUTE)) {
    return parseFloat(element.getAttribute(PADDING_TOP_ATTRIBUTE));
  } else {
    return parseFloat(
      setAndGetAttribute(
        element,
        PADDING_TOP_ATTRIBUTE,
        parseFloat(getComputedStyle(element).paddingTop).toString()
      )
    );
  }
};

/**
 * Set the padding bottom for reference on the element in case a slideUp is toggled before the animation has been completed
 */
const getPaddingBottom = (element) => {
  if (element.getAttribute(PADDING_BOTTOM_ATTRIBUTE)) {
    return parseFloat(element.getAttribute(PADDING_BOTTOM_ATTRIBUTE));
  } else {
    return parseFloat(
      setAndGetAttribute(
        element,
        PADDING_BOTTOM_ATTRIBUTE,
        parseFloat(getComputedStyle(element).paddingBottom).toString()
      )
    );
  }
};

/**
 * Replicates jQuery's slideDown - Display the element with a sliding motion.
 * Assumes the element is hidden with display: none;
 */
const slideDown = (element, duration = 0.3, callback = () => {}) => {
  if (element) {
    element.style.height = "auto";
    const paddingTop = getPaddingTop(element);
    element.style.paddingTop = "0";
    const paddingBottom = getPaddingBottom(element);
    element.style.paddingBottom = "0";
    const targetHeight = element.offsetHeight;
    element.style.height = "0";
    gsap.to(element, {
      height: targetHeight,
      paddingTop: paddingTop,
      paddingBottom: paddingBottom,
      overwrite: "auto",
      duration: duration,
      ease: "power1.out",
      onComplete: () => {
        if (callback) {
          callback();
        }
      },
    });
  }
};

/**
 * Replicates jQuery's slideUp - Hide the element with a sliding motion.
 */
const slideUp = (element, duration = 0.3, callback = () => {}) => {
  if (element) {
    const paddingTop = getPaddingTop(element);
    const paddingBottom = getPaddingBottom(element);
    gsap.to(element, {
      height: 0,
      paddingTop: 0,
      paddingBottom: 0,
      overwrite: "auto",
      duration: duration,
      ease: "power1.in",
      onComplete: () => {
        element.style.display = "none";
        element.style.height = "auto";
        element.style.paddingTop = `${paddingTop}px`;
        element.style.paddingBottom = `${paddingBottom}px`;
        element.removeAttribute(PADDING_TOP_ATTRIBUTE);
        element.removeAttribute(PADDING_BOTTOM_ATTRIBUTE);
        if (callback) {
          callback();
        }
      },
    });
  }
};

class Notifyme {
  constructor(content) {
    this.content = {
      ...content,
      showIcon: content.showIcon ?? true,
      duration: content.duration ?? 5000,
      showAnimation: content.showAnimation.toLowerCase(),
      hideAnimation: content.hideAnimation.toLowerCase(),
      position: (content.position ?? "topright").toLowerCase(),
    };

    this.content.showAnimation = this.getAnimationType(
      this.content.showAnimation,
      { fade: "fadein", slide: "slideup" },
      "fadein"
    );

    this.content.hideAnimation = this.getAnimationType(
      this.content.hideAnimation,
      { fade: "fadeout", slide: "slidedown" },
      "fadeout"
    );

    this.content.showDuration = 1 - this.content.showDuration;
    this.content.hideDuration = 1 - this.content.hideDuration;
    this.startAnimFinished = false;

    this.container = null;
    this.wrapper = null;
    this.onCloseCallback = this.content.callback;
    this.onInitialization();
  }

  /**
   * Initialization function for the class.
   */
  onInitialization = () => {
    try {
      if (this.content.message.length === 0) {
        throw "Incorrect description";
      }

      // Validate the notification type
      const regex = /^(info|success|warning|error|notify)$/;
      if (!regex.test(this.content.type)) {
        throw "The notification type " + this.content.type + " is not valid";
      }
    } catch (error) {
      console.error(error);
      return;
    }

    this.buildContainer();
    this.onEventHandlers();
  };

  /**
   * Function to set up event handlers for the class.
   */
  onEventHandlers = () => {
    this.container.addEventListener("click", () => {
      this.onClose();
    });

    this.container.addEventListener("mouseover", () => {
      this.stopCloseTimeout();
    });

    this.container.addEventListener("mouseout", () => {
      this.startCloseTimeout();
    });

    // Close the notification when the close icon is clicked
    const close = this.container.querySelector(".notifyme-icon");
    close.addEventListener("click", () => {
      this.onClose();
    });

    this.startCloseTimeout();
  };

  /**
   * Build and display the notification container.
   */
  buildContainer = () => {
    const containerHTML = `
        <div class="notifyme-container notifyme-${this.content.type}">
            <div class="notifyme-message">
                <div class="notifyme-title">${this.content.title}</div>
                <div class="notifyme-description">${this.content.message}</div>
            </div>
            <div class="notifyme-close">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 352 512">
                    <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/>
                </svg>
            </div>
        </div>
    `;

    // Create a temporary div to hold the HTML content
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = containerHTML.trim();

    this.container = tempDiv.firstChild;

    // Insert an icon into the container if showIcon is enabled
    if (this.content.showIcon) {
      const iconHTML = `
            <div class="notifyme-icon">
                ${getIcon(this.content.type, true)}
            </div>
        `;
      this.container.insertAdjacentHTML("afterbegin", iconHTML);
    }

    // Append the container to the DOM
    this.appendContainer(this.container);

    // Apply animations based on the specified showAnimation
    if (this.isFadeInShowAnimation()) {
      this.fadeInContainer();
    } else if (this.isBounceShowAnimation()) {
      this.bounceInContainer();
    } else {
      slideDown(this.container, this.content.showDuration);
    }

    this.buildStyles();
    this.setPosition(this.content.position);
  };

  /**
   * Append the notification container to the appropriate wrapper in the DOM.
   */
  appendContainer(container) {
    const wrapperClass = validPositions.includes(this.content.position)
      ? `notifyme-${this.content.position}`
      : "notifyme-topright";

    this.wrapper = document.querySelector(`.notifyme-wrapper.${wrapperClass}`);

    // Check if a wrapper with the position class already exists
    // If it doesn't exist, create a new wrapper with the corresponding class
    if (!this.wrapper) {
      this.wrapper = document.createElement("div");
      this.wrapper.className = `notifyme-wrapper ${wrapperClass}`;
      document.body.appendChild(this.wrapper);
    }

    if (this.content.position.startsWith("top")) {
      this.wrapper.appendChild(container);
    } else {
      this.wrapper.insertBefore(container, this.wrapper.firstChild);
    }

    if (this.isRightPosition()) {
      this.wrapper.style.justifyItems = "end";
    }
  }

  /**
   * Apply custom styles to the notification container.
   */
  buildStyles() {
    if (this.content.customStyles) {
      const containerStyles = this.content.customStyles.containerStyle || {};
      const fontStyles = this.content.customStyles.fontStyle || {};

      // Apply custom styles to the notification container
      for (const key in containerStyles) {
        if (Object.prototype.hasOwnProperty.call(containerStyles, key)) {
          this.container?.style.setProperty(key, containerStyles[key]);
        }
      }

      // Apply custom font styles to the notification description
      const textElement = this.container.querySelector(".notifyme-description");
      if (textElement) {
        for (const key in fontStyles) {
          if (Object.prototype.hasOwnProperty.call(fontStyles, key)) {
            textElement.style.setProperty(key, fontStyles[key]);
          }
        }
      }
    }
  }

  /**
   * Get the animation type based on the provided animation string and mappings.
   */
  getAnimationType(animation, mappings, defaultAnimation) {
    if (!animation) return defaultAnimation;

    for (const [keyword, animationType] of Object.entries(mappings)) {
      if (animation.includes(keyword)) {
        return animationType;
      }
    }

    return animation;
  }

  /**
   * Set the position of the notification container within the wrapper.
   */
  setPosition = (position) => {
    this.position(validPositions.includes(position) ? position : "topright");
  };

  /**
   * Position the wrapper element based on the specified position.
   */
  position(position) {
    const styles = {
      topleft: { top: "0", left: "0" },
      topright: { top: "0", right: "0" },
      topcenter: { top: "0", left: "50%", transform: "translateX(-50%)" },
      bottomleft: { bottom: "0", left: "0" },
      bottomright: { bottom: "0", right: "0" },
      bottomcenter: { bottom: "0", left: "50%", transform: "translateX(-50%)" },
    };

    const selectedStyles = styles[position];

    if (selectedStyles) {
      for (const prop in selectedStyles) {
        this.wrapper.style[prop] = selectedStyles[prop];
      }
    }
  }

  /**
   * This function generates a fade or slide animation for the container element.
   */
  animateContainer(duration, isFadeIn, callback) {
    const timeline = gsap.timeline();

    const fromProps = {
      duration,
      opacity: isFadeIn ? 0 : 1,
      ease: isFadeIn ? "power1.in" : "power1.out",
    };

    const toProps = {
      duration,
      opacity: isFadeIn ? 1 : 0,
      ease: isFadeIn ? "power1.in" : "power1.out",
      onComplete: callback,
    };

    timeline.from(this.container, fromProps).to(this.container, toProps);
  }

  /**
   * Function to fade in the container.
   */
  fadeInContainer(callback) {
    const duration = this.content.showDuration;
    this.animateContainer(duration, true, callback);
  }

  /**
   * Function to fade out the container.
   */
  fadeOutContainer(callback) {
    const duration = this.content.hideDuration;
    this.animateContainer(duration, false, callback);
  }

  /**
   * Function to bounce in the container.
   */
  bounceInContainer(callback) {
    const timeline = gsap.timeline();
    const dir = this.content.showAnimation === "bounceright" ? 1 : -1;

    // Define the steps of the bounce in animation
    const animationSteps = [
      { x: dir === 1 ? "-100%" : "100%", opacity: 0 },
      { x: dir * -45, opacity: 1 },
      { x: dir * 20 },
      { x: dir * -5 },
      { x: 0 },
    ];

    // Add each step to the GSAP timeline
    timeline.from(this.container, {
      ...animationSteps[0],
      duration: this.content.showDuration,
      ease: "power1.in",
    });

    for (let i = 1; i < animationSteps.length; i++) {
      timeline.to(this.container, {
        x: animationSteps[i].x,
        opacity: animationSteps[i].opacity,
        duration: this.content.showDuration,
        ease: "power1.in",
        onComplete: () => {
          // If it's the last step, call the callback if provided
          if (
            i === animationSteps.length - 1 &&
            typeof callback === "function"
          ) {
            callback();
            this.startAnimFinished = true;
          }
        },
      });
    }
  }

  /**
   * Function to bounce out the container.
   */
  bounceOutContainer(callback) {
    const timeline = gsap.timeline();
    const dir = this.content.hideAnimation === "bounceright" ? 1 : -1;

    // Add the steps of the bounce out animation to the GSAP timeline
    timeline
      .to(this.container, {
        x: dir * 40,
        opacity: 1,
        duration: this.content.hideDuration,
      })
      .to(this.container, {
        x: dir === 1 ? "-100%" : "100%",
        duration: this.content.hideDuration,
        opacity: 0,
        onComplete: callback,
      });
  }

  /**
   * Close the notification and trigger the appropriate animation based on settings.
   */
  onClose = () => {
    if (
      this.container?.getAttribute("data-clicked") === "true" &&
      !this.startAnimFinished
    ) {
      return;
    }

    // Move the container down and remove it from the DOM
    const moveDownContainer = () => {
      gsap.to(this.container, {
        marginTop: "-100px",
        ease: "power1.in",
        onComplete: () => {
          this.container.remove();
          this.startAnimFinished = false;
          if (this.onCloseCallback) {
            this.onCloseCallback();
          }
        },
      });
    };

    // Mark the notification as clicked to prevent duplicate actions
    this.container?.setAttribute("data-clicked", "true");

    if (this.isFadeInHideAnimation()) {
      this.fadeOutContainer(moveDownContainer);
    } else if (this.isBounceHideAnimation()) {
      this.bounceOutContainer(moveDownContainer);
    } else {
      slideUp(this.container, this.content.hideDuration, moveDownContainer);
    }
  };

  /**
   * Start a timeout to automatically close the notification after a specified duration.
   */
  startCloseTimeout = () => {
    if (this.content.duration === -1) return;

    this.closeTimeout = setTimeout(() => {
      this.onClose();
    }, this.content.duration);
  };

  /**
   * Stop the currently running close timeout, preventing the notification from auto-closing.
   */
  stopCloseTimeout = () => {
    clearTimeout(this.closeTimeout);
  };

  /**
   * Check if the show animation is a bounce animation.
   */
  isBounceShowAnimation() {
    return this.content.showAnimation.includes("bounce");
  }

  /**
   * Check if the hide animation is a bounce animation.
   */
  isBounceHideAnimation() {
    return this.content.hideAnimation.includes("bounce");
  }

  /**
   * Check if the show animation is a fade-in animation.
   */
  isFadeInShowAnimation() {
    return this.content.showAnimation.includes("fade");
  }

  /**
   * Check if the hide animation is a fade-in animation.
   */
  isFadeInHideAnimation() {
    return this.content.hideAnimation.includes("fade");
  }

  /**
   * Check if the notification is positioned at the top.
   */
  isTopPosition() {
    return this.content.position.includes("top");
  }

  /**
   * Check if the notification is positioned at the bottom.
   */
  isBottomPosition() {
    return this.content.position.includes("bottom");
  }

  /**
   * Check if the notification is positioned to the left.
   */
  isLeftPosition() {
    return this.content.position.includes("left");
  }

  /**
   * Check if the notification is positioned to the right.
   */
  isRightPosition() {
    return this.content.position.includes("right");
  }

  /**
   * Check if the notification is centered horizontally.
   */
  isCenterPosition() {
    return this.content.position.includes("center");
  }

  /**
   * Check if the notification is positioned horizontally (left or right).
   */
  isHorizontalPosition() {
    return (
      this.content.position.includes("left") ||
      this.content.position.includes("right")
    );
  }

  /**
   * Check if the notification is positioned vertically (top or bottom).
   */
  isVerticalPosition() {
    return (
      this.content.position.includes("top") ||
      this.content.position.includes("bottom")
    );
  }
}

window.NotifymeJS = function NotifymeJS(content) {
  return new Notifyme(content);
};
