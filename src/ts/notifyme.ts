import { getIcon } from "./icons";
import { slideUp, slideDown } from "./slideAnimation";

declare var gsap : any;
type GSAPCallback = any;

import "../scss/notifyme.scss";

interface NotifymeStyles {
  containerStyle?: {
    [key: string]: string;
  };
  fontStyle?: {
    [key: string]: string;
  };
}

interface NotifymeContent {
  message: string;
  type: string;
  title?: string;
  showIcon?: boolean;
  duration?: number;
  customStyles?: NotifymeStyles;
  position?: string;
  priority?: number;
  showAnimation?: string;
  showDuration?: number;
  hideAnimation?: string;
  hideDuration?: number;
  callback?: () => void;
}

class Notifyme {
  private content: NotifymeContent;
  private container: HTMLElement | null;
  private wrapper: HTMLElement | null;
  private closeTimeout: ReturnType<typeof setTimeout>;
  private onCloseCallback?: () => void;

  constructor(content: NotifymeContent) {
    this.content = {
      ...content,
      showIcon: content.showIcon === undefined ? true : content.showIcon,
      duration: content.duration === undefined ? 5000 : content.duration,
      showAnimation:
        content.showAnimation === undefined
          ? "bounceleft"
          : content.showAnimation,
      showDuration:
        content.showDuration === undefined ? 0.2 : content.showDuration,
      hideAnimation:
        content.hideAnimation === undefined
          ? "bounceleft"
          : content.hideAnimation,
      hideDuration:
        content.hideDuration === undefined ? 0.2 : content.hideDuration,
      position:
        content.position === undefined
          ? "topright"
          : content.position.toLowerCase()
    };

    this.container = null;
    this.wrapper = null;
    this.onCloseCallback = this.content.callback;
    this.onInitialization();
  }

  /**
   * Initialization function for the class.
   * @private
   */
  private onInitialization = (): void => {
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

    // Build the container and set up event handlers
    this.buildContainer();
    this.onEventHandlers();
  };

  /**
   * Function to set up event handlers for the class.
   * @private
   */
  private onEventHandlers = (): void => {
    this.container?.addEventListener("click", () => {
      this.onClose();
    });

    this.container?.addEventListener("mouseover", () => {
      this.stopCloseTimeout();
    });

    this.container?.addEventListener("mouseout", () => {
      this.startCloseTimeout();
    });

    // Close the notification when the close icon is clicked
    const close = this.container?.querySelector(".notifyme-icon");
    if (close) {
      close.addEventListener("click", () => {
        this.onClose();
      });
    }

    // Start the close timeout initially
    this.startCloseTimeout();
  };

  /**
   * Build and display the notification container.
   */
  private buildContainer = (): void => {
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

    this.container = tempDiv.firstChild as HTMLElement;

    // Insert an icon into the container if showIcon is enabled
    if (this.content.showIcon) {
      const iconHTML = `
            <div class="notifyme-icon">
                ${getIcon(this.content.type, true)}
            </div>
        `;
      console.log(typeof this.container);
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
      slideDown(this.container, 0.5);
    }

    this.buildStyles();
    this.setPosition(this.content.position || "");
  };

  /**
   * Append the notification container to the appropriate wrapper in the DOM.
   * @param {HTMLElement} container - The notification container element.
   */
  private appendContainer(container: HTMLElement) {
    const validPositions = ["topLeft", "topRight", "bottomLeft", "bottomRight"];
    const wrapperClass = validPositions.includes(this.content.position || "")
      ? `notifyme-${this.content.position}`
      : "notifyme-topRight";

    // Check if a wrapper with the position class already exists
    this.wrapper = document.querySelector(
      `.notifyme-wrapper.${wrapperClass}`
    ) as HTMLElement;

    // If it doesn't exist, create a new wrapper with the corresponding class
    if (!this.wrapper) {
      this.wrapper = document.createElement("div");
      this.wrapper.className = `notifyme-wrapper ${wrapperClass}`;
      document.body.appendChild(this.wrapper);
    }


    if (this.isRightPosition()) {
      this.wrapper.style.justifyItems = "end";
    }

    // Insert the container at the beginning of the wrapper
    this.wrapper.insertBefore(container, this.wrapper.firstChild);
  }

  /**
   * Apply custom styles to the notification container.
   */
  private buildStyles() {
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
      const textElement = this.container?.querySelector(
        ".notifyme-description"
      ) as HTMLElement;
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
   * Set the position of the notification container within the wrapper.
   * @param {string} position - The desired position of the container.
   */
  private setPosition = (position: string): void => {
    const validPositions: string[] = [
      "topleft",
      "topright",
      "bottomleft",
      "bottomright",
      "topcenter",
      "bottomcenter"
    ];

    if (validPositions.includes(position)) {
      this.position(this.wrapper, position);
    } else {
      this.position(this.wrapper, "topRight"); // Default to "topRight" if the position is invalid
    }
  };

  /**
   * Position the wrapper element based on the specified position.
   * @param {HTMLElement} wrapper - The wrapper element.
   * @param {string} position - The desired position.
   */
  private position(wrapper: HTMLElement | null, position: string) {
    if (wrapper) {
      switch (position) {
        case "topleft":
        case "topright":
        case "topcenter":
          wrapper.style.top = "0";
          if (position === "topleft") {
            wrapper.style.left = "0";
          } else if (position === "topright") {
            wrapper.style.right = "0";
          } else {
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
          } else if (position === "bottomright") {
            wrapper.style.right = "0";
          } else {
            wrapper.style.left = "50%";
            wrapper.style.transform = "translateX(-50%)";
          }
          break;
      }
    }
  }

  /**
   * This function generates a fade or slide animation for the container element.
   * @param {string} direction - The direction of the animation ("up", "down", "left", or "right").
   * @param {number} duration - The duration of the animation.
   * @param {boolean} isFadeIn - Whether the animation is a fade in (true) or fade out (false).
   * @param {GSAPCallback} callback - Optional callback function to be executed after the animation.
   * @private
   */
  private animateContainer(
    direction: string,
    duration: number,
    isFadeIn: boolean,
    callback: GSAPCallback
  ): void {

    const timeline = gsap.timeline();

    const dir = direction === "up" || direction === "right" ? 1 : -1;

    const fromProps: any = {
      duration,
      opacity: isFadeIn ? 0 : 1,
      ease: isFadeIn ? "power1.in" : "power1.out"
    };

    const toProps: any = {
      duration,
      opacity: isFadeIn ? 1 : 0,
      ease: isFadeIn ? "power1.in" : "power1.out",
      onComplete: callback
    };

    // Set the 'x' or 'y' property depending on the direction of the animation
    if (direction === "up" || direction === "down") {
      fromProps["y"] = isFadeIn ? (dir === 1 ? "100%" : "-100%") : "0%";
      toProps["y"] = isFadeIn ? "0%" : dir === 1 ? "-100%" : "100%";
    } else {
      fromProps["x"] = isFadeIn ? (dir === 1 ? "-100%" : "100%") : "0%";
      toProps["x"] = isFadeIn ? "0%" : dir === 1 ? "-100%" : "100%";
    }

    timeline.from(this.container, fromProps).to(this.container, toProps);
  }

  /**
   * Function to fade in the container.
   * @param {Function} callback - Optional callback function to be executed after the animation.
   * @private
   */
  private fadeInContainer(callback: GSAPCallback = () => {}): void {
    const duration = this.content.showDuration ?? 0.2;
    const animationType = this.content.showAnimation?.slice(4);

    if (animationType) {
      // Call the animateContainer function with parameters for a fade-in animation
      this.animateContainer(animationType, duration, true, callback);
    }
  }

  /**
   * Function to fade out the container.
   * @param {Function} callback - Optional callback function to be executed after the animation.
   * @private
   */
  private fadeOutContainer(callback: GSAPCallback = () => {}): void {
    const duration = this.content.hideDuration ?? 0.2;
    const animationType = this.content.hideAnimation?.slice(4);

    // Check if animationType is defined before using it
    if (animationType) {
      // Call the animateContainer function with parameters for a fade-out animation
      this.animateContainer(animationType, duration, false, callback);
    }
  }

  /**
   * Function to bounce in the container.
   * @private
   */
  private bounceInContainer(): void {
    const timeline = gsap.timeline();
    const dir = this.content.showAnimation === "bounceright" ? 1 : -1;

    // Define the steps of the bounce in animation
    const animationSteps = [
      { x: dir === 1 ? "-100%" : "100%", opacity: 0 },
      { x: dir * -45, opacity: 1 },
      { x: dir * 20 },
      { x: dir * -5 },
      { x: 0 }
    ];

    // Add each step to the GSAP timeline
    timeline.from(this.container, {
      ...animationSteps[0],
      duration: this.content.showDuration,
      ease: "power1.in"
    });

    for (let i = 1; i < animationSteps.length; i++) {
      timeline.to(this.container, {
        x: animationSteps[i].x,
        opacity: animationSteps[i].opacity,
        duration: this.content.showDuration,
        ease: "power1.in"
      });
    }
  }

  /**
   * Function to bounce out the container.
   * @param {Function} callback - Optional callback function to be executed after the animation.
   * @private
   */
  private bounceOutContainer(callback: GSAPCallback = () => {}): void {
    const timeline = gsap.timeline();
    const dir = this.content.hideAnimation === "bounceright" ? 1 : -1;

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
  }

  /**
   * Close the notification and trigger the appropriate animation based on settings.
   */
  private onClose = (): void => {
    // Check if the notification has already been clicked to prevent double actions
    if (this.container?.getAttribute("data-clicked") === "true") {
      return;
    }

    // Callback to be executed after the hide animation
    const moveDownContainer = () => {
      gsap.to(this.container, {
        marginTop: "-100px",
        duration: 0.1,
        ease: "power1.in",
        onComplete: () => {
          this.container?.remove();
          if (this.onCloseCallback) {
            this.onCloseCallback();
          }
        }
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
  private startCloseTimeout = (): void => {
    if (this.content.duration === -1) return;

    // Set a timeout to call the onClose function after the specified duration
    this.closeTimeout = setTimeout(() => {
      this.onClose();
    }, this.content.duration);
  };

  /**
   * Stop the currently running close timeout, preventing the notification from auto-closing.
   */
  private stopCloseTimeout = () => {
    clearTimeout(this.closeTimeout);
  };

  /**
   * Check if the show animation is a bounce animation.
   * @returns {boolean} True if it's a bounce animation, otherwise false.
   */
  private isBounceShowAnimation() {
    return this.content.showAnimation?.includes("bounce");
  }

  /**
   * Check if the hide animation is a bounce animation.
   * @returns {boolean} True if it's a bounce animation, otherwise false.
   */
  private isBounceHideAnimation() {
    return this.content.hideAnimation?.includes("bounce");
  }

  /**
   * Check if the show animation is a fade-in animation.
   * @returns {boolean} True if it's a fade-in animation, otherwise false.
   */
  private isFadeInShowAnimation() {
    return this.content.showAnimation?.includes("fade");
  }

  /**
   * Check if the hide animation is a fade-in animation.
   * @returns {boolean} True if it's a fade-in animation, otherwise false.
   */
  private isFadeInHideAnimation() {
    return this.content.hideAnimation?.includes("fade");
  }

  /**
   * Check if the notification is positioned at the top.
   * @returns {boolean} True if it's at the top, otherwise false.
   */
  private isTopPosition() {
    return this.content.position?.includes("top");
  }

  /**
   * Check if the notification is positioned at the bottom.
   * @returns {boolean} True if it's at the bottom, otherwise false.
   */
  private isBottomPosition() {
    return this.content.position?.includes("bottom");
  }

  /**
   * Check if the notification is positioned to the left.
   * @returns {boolean} True if it's to the left, otherwise false.
   */
  private isLeftPosition() {
    return this.content.position?.includes("left");
  }

  /**
   * Check if the notification is positioned to the right.
   * @returns {boolean} True if it's to the right, otherwise false.
   */
  private isRightPosition() {
    return this.content.position?.includes("right");
  }

  /**
   * Check if the notification is centered horizontally.
   * @returns {boolean} True if it's centered horizontally, otherwise false.
   */
  private isCenterPosition() {
    return this.content.position?.includes("center");
  }

  /**
   * Check if the notification is positioned horizontally (left or right).
   * @returns {boolean} True if it's positioned horizontally, otherwise false.
   */
  private isHorizontalPosition() {
    return (
      this.content.position?.includes("left") ||
      this.content.position?.includes("right")
    );
  }

  /**
   * Check if the notification is positioned vertically (top or bottom).
   * @returns {boolean} True if it's positioned vertically, otherwise false.
   */
  private isVerticalPosition() {
    return (
      this.content.position?.includes("top") ||
      this.content.position?.includes("bottom")
    );
  }
}

declare global {
  interface Window {
    NotifymeJS: (content: NotifymeContent) => any;
  }
}

window.NotifymeJS = function NotifymeJS(content: NotifymeContent) {
  return new Notifyme(content);
};
