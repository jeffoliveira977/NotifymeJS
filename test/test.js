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
        "background-color": randomColorRGB,
        "border-radius": "10px"
      },
      fontStyle: {
        color: inverseRandomColorRGB
      }
    };
    
    NotifymeJS({
      message: message,customStyles: customStyles,
      type: type,
      title: type,
      duration: -1,
      position: "bottomright",
      showAnimation: "slideup",
      showDuration: 0.2,
      hideAnimation: "slideup",
      hideDuration: 0.2
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