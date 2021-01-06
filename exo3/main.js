window.addEventListener("deviceorientation", handleOrientation, true);

function handleOrientation(event) {
    alert(event)
    var absolute = event.absolute;
    var alpha    = event.alpha;
    var beta     = event.beta;
    var gamma    = event.gamma;
  
    // Faites quelque chose avec les données acquises. ;)

  }
  