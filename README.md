# NotifymeJS

NotifymeJS is an advanced and fully customizable notification plugin. It offers seamless fade, bounce, and slide animations without the need for jQuery, relying solely on the GSAP library for animation. It provides complete design control, enhancing the user experience and simplifying your web projects..

## How to Use

1. Add the following CSS to your HTML file to style the notifications:

```html
<link href="../dist/css/notifyme.css" rel="stylesheet" />
```
[Include the GSAP library](https://github.com/greensock/GSAP)

```html
<script src="../lib/GSAP/dist/gsap.js"></script>
```
Include the Notifyme library. Now, include the Notifyme library to enable the notifications

```html
<script src="../dist/js/notifyme.js"></script>
```
Here is an example of how to use NotifymeJS to create a notification:
```js

const customStyles = {
      containerStyle: {
        "border-radius": "10px"
      },
      fontStyle: {
        color: "rgb(255, 255, 255)"
      }
    };

NotifymeJS({
  message: "This is an information notification.", // Display message
  customStyles: customStyles, // Custom CSS styles for the notification container
  type: "info",   // Types: info, success, error, warning, notify
  title: "Info", // Notification title
  duration: 3000, // Notification duration in milliseconds
  position: "bottomright", // Positions: topleft, topright, bottomleft, bottomright, topcenter and bottomcenter
  showAnimation: "slideup", // Animations: fadein, fadeout, slideup, slidedown, bounceright and bounceleft
  showDuration: 0.2, // Show animation duration in seconds
  hideAnimation: "slideup", // Animations: fadein, fadeout, slideup, slidedown, bounceright and bounceleft
  hideDuration: 0.2 // Hide animation duration in seconds
});
