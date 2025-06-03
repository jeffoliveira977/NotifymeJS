window.onload = () => {
  let notifymeHandler;
  const config = {
    position: "bottomcenter", // Positions: topleft, topright, bottomleft, bottomright, topcenter and bottomcenter
    showAnimation: "bounceleft", // Animations: fadein, fadeout, slideup, slidedown, bounceright and bounceleft
    hideAnimation: "bounceright", // Animations: fadein, fadeout, slideup, slidedown, bounceright and bounceleft
    duration: 4000, // Notification duration in milliseconds
    showDuration: 0.8, // Show animation duration in seconds
    hideDuration: 0.8, // Hide animation duration in seconds
  };
  const showNotification = (type, message) => {
    const customStyles = {
      containerStyle: {
        "border-radius": "10px",
      },
      fontStyle: {
        color: "rgb(255, 255, 255)",
      },
    };
    notifymeHandler = window.NotifymeJS({
      message: config.message || message, // Display message
      customStyles: customStyles, // Custom CSS styles for the notification container
      type: type, // Types: info, success, error, warning, notify
      title: config.title || type, // Notification title
      position: config.position, // Position of the notification
      showAnimation: config.showAnimation, // Show animation type
      hideAnimation: config.hideAnimation, // Hide animation type
      duration: config.duration, // Duration of the notification in milliseconds
      showDuration: config.showDuration, // Show animation duration in seconds
      hideDuration: config.hideDuration, // Hide animation duration in seconds
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

  const positionSelect = document.getElementById("position-select");

  positionSelect.addEventListener("change", (event) => {
    const value = event.target.value;
    console.log(value);
    config.position = value;
  });

  const showAnimationSelect = document.getElementById("show-animation-select");

  showAnimationSelect.addEventListener("change", (event) => {
    const value = event.target.value;
    config.showAnimation = value;
  });

  const hideAnimationSelect = document.getElementById("hide-animation-select");

  hideAnimationSelect.addEventListener("change", (event) => {
    const value = event.target.value;
    config.hideAnimation = value;
  });

  const durationRange = document.getElementById("duration-range");
  const durationValue = document.getElementById("duration-value");

  durationRange.addEventListener("input", () => {
    const currentValue = durationRange.value;

    durationValue.textContent = currentValue;
    config.duration = currentValue;
  });

  const showDurationRange = document.getElementById("show-speed-range");
  const showDurationValue = document.getElementById("show-speed-value");

  showDurationRange.addEventListener("input", () => {
    const currentValue = showDurationRange.value;

    showDurationValue.textContent = currentValue;
    config.showDuration = currentValue;
  });

  const hideDurationRange = document.getElementById("hide-speed-range");
  const hideDurationValue = document.getElementById("hide-speed-value");

  hideDurationRange.addEventListener("input", () => {
    const currentValue = hideDurationRange.value;

    hideDurationValue.textContent = currentValue;
    config.hideDuration = currentValue;
  });

  const titleInput = document.getElementById("title-input");
  titleInput.addEventListener("input", () => {
    const value = titleInput.value;
    config.title = value;
  });

  const descriptionInput = document.getElementById("description-input");
  descriptionInput.addEventListener("input", () => {
    const value = descriptionInput.value;
    config.message = value;
  });
};
