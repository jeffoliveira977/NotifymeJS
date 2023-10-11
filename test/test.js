window.onload = function () {

  const showNotification = (type, message) => {
  
    const getRandomColor = () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return { r, g, b };
    }
    
    const randomColor = getRandomColor();
    
    const getInverseRandomColor = () => {
      const inverseR = 255 - randomColor.r;
      const inverseG = 255 - randomColor.g;
      const inverseB = 255 - randomColor.b;
      return `rgb(${inverseR},${inverseG},${inverseB})`;
    }
    
    const randomColorRGB = `rgb(${randomColor.r},${randomColor.g},${randomColor.b})`;
    const inverseRandomColorRGB = getInverseRandomColor();
    
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
  };

  document.getElementById("info-button").addEventListener("click", () => {
    showNotification("info", "This is an information notification.");
  });

  document.getElementById("success-button").addEventListener("click", () => {
    showNotification("success", "This is a success notification.");
  });

  document.getElementById("warning-button").addEventListener("click", () => {
    showNotification("warning", "This is a warning notification.");
  });

  document.getElementById("error-button").addEventListener("click", () => {
    showNotification("error", "This is an error notification.");
  });

};