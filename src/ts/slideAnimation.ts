declare var gsap : any;
type GSAPCallback = any;

const PADDING_TOP_ATTRIBUTE: string = "data-padding-top";
const PADDING_BOTTOM_ATTRIBUTE: string = "data-padding-bottom";

/**
 * Replicates jQuery's slideDown - Display the element with a sliding motion.
 * Assumes the element is hidden with display: none;
 *
 * @param { HTMLElement } element
 * @param { number } duration - in seconds, so 0.3 is 300ms
 * @param { GSAPCallback } callback
 */
export const slideDown = (
  element: HTMLElement | null,
  duration: number = 0.3,
  callback: GSAPCallback = () => {}
): void => {
  if (element) {
    element.style.height = "auto";

    const paddingTop: number = getPaddingTop(element);
    element.style.paddingTop = "0";

    const paddingBottom: number = getPaddingBottom(element);
    element.style.paddingBottom = "0";

    const targetHeight: number = element.offsetHeight;
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
const getPaddingTop = (element: HTMLElement): number => {
  if (element.getAttribute(PADDING_TOP_ATTRIBUTE)) {
    return parseFloat(element.getAttribute(PADDING_TOP_ATTRIBUTE)!);
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
 *
 * @param { HTMLElement } element
 *
 * @returns { number }
 */
const getPaddingBottom = (element: HTMLElement): number => {
  if (element.getAttribute(PADDING_BOTTOM_ATTRIBUTE)) {
    return parseFloat(element.getAttribute(PADDING_BOTTOM_ATTRIBUTE)!);
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
 * Set and get an attribute on an element
 *
 * @param { HTMLElement } element
 * @param { string } attribute
 * @param { string } value
 *
 * @returns { string }
 */
const setAndGetAttribute = (
  element: HTMLElement,
  attribute: string,
  value: string
): string => {
  element.setAttribute(attribute, value);
  return element.getAttribute(attribute)!;
};

/**
 * Replicates jQuery's slideUp - Hide the element with a sliding motion.
 *
 * @param { HTMLElement } element
 * @param { number } duration - in seconds, so 0.3 is 300ms
 * @param { GSAPCallback } callback
 */
export const slideUp = (
  element: HTMLElement | null,
  duration: number = 0.3,
  callback: GSAPCallback = () => {}
): void => {
  if (element) {
    const paddingTop: number = getPaddingTop(element);
    const paddingBottom: number = getPaddingBottom(element);

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
      }
    });
  }
};
