export function getUrlParams(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}

export function switchDemoImages(environment) {
  if (environment === "development") {
    const targets = document.querySelectorAll("[data-demo-src]");
    const bgTargets = document.querySelectorAll("[data-demo-background]");

    if (typeof targets != "undefined" && targets != null) {
      for (var i = 0, len = targets.length; i < len; i++) {
        let demoUrl = targets[i].getAttribute("data-demo-src");
        targets[i].setAttribute("src", demoUrl);
      }
    }

    if (typeof bgTargets != "undefined" && bgTargets != null) {
      for (var i = 0, len = bgTargets.length; i < len; i++) {
        let demoBgUrl = bgTargets[i].getAttribute("data-demo-background");
        bgTargets[i].setAttribute("data-background", demoBgUrl);
      }
    }
  }
}

export function insertBgImages() {
  const targets = document.querySelectorAll("[data-background]");

  if (typeof targets != "undefined" && targets != null) {
    for (var i = 0, len = targets.length; i < len; i++) {
      let bgUrl = targets[i].getAttribute("data-background");
      targets[i].style.backgroundSize = "cover";
      targets[i].style.backgroundRepeat = "no-repeat";
      targets[i].style.backgroundImage = `url(${bgUrl})`;
    }
  }
}

export function initRipple() {
  document.body.addEventListener("mousedown", function(event) {

      var target = event.target;
  
      while (target) {
        
        if (!target.classList || !target.classList.contains("ripple")) {
          
          target = target.parentNode;
        }
        else {
          
          break;
        }
      }
        
      if (target && target.classList.contains("ripple")) {
        
          // Get necessary variables
          var rect        = target.getBoundingClientRect(),
              left        = rect.left,
              top         = rect.top,
              width       = target.offsetWidth,
              height      = target.offsetHeight,
              offsetTop   = target.offsetTop, 
              offsetLeft  = target.offsetLeft, 
              dx          = event.clientX - left,
              dy          = event.clientY - top,
              maxX        = Math.max(dx, width - dx),
              maxY        = Math.max(dy, height - dy),
              style       = window.getComputedStyle(target),
              radius      = Math.sqrt((maxX * maxX) + (maxY * maxY));
        
          // Create the ripple and its container
          var ripple = document.createElement("div"), 
              rippleContainer = document.createElement("div");
  
          // Add optional classes
          if (target.classList.contains("ripple-light")) {
              ripple.classList.add("ripple-light");
          }
          else if (target.classList.contains("ripple-dark")) {
              ripple.classList.add("ripple-dark");
          }
  
          // Add class, append and set location
          ripple.classList.add("ripple-effect");
          rippleContainer.classList.add("ripple-container");
          rippleContainer.appendChild(ripple);
          document.body.appendChild(rippleContainer);
  
          ripple.style.marginLeft   = dx + "px";
          ripple.style.marginTop    = dy + "px";
        
          rippleContainer.style.left    = left + (((window.pageXOffset || document.scrollLeft) - (document.clientLeft || 0)) || 0) + "px";
          rippleContainer.style.top     = top + (((window.pageYOffset || document.scrollTop) - (document.clientTop || 0)) || 0) + "px";
          rippleContainer.style.width   = width + "px";
          rippleContainer.style.height  = height + "px";
          rippleContainer.style.borderTopLeftRadius  = style.borderTopLeftRadius;
          rippleContainer.style.borderTopRightRadius  = style.borderTopRightRadius;
          rippleContainer.style.borderBottomLeftRadius  = style.borderBottomLeftRadius;
          rippleContainer.style.borderBottomRightRadius  = style.borderBottomRightRadius;
  
          setTimeout(function() {
  
              ripple.style.width  = radius * 2 + "px";
              ripple.style.height = radius * 2 + "px";
              ripple.style.marginLeft   = dx - radius + "px";
              ripple.style.marginTop    = dy - radius + "px";
          }, 0);
  
          setTimeout(function() {
  
              ripple.style.backgroundColor = "rgba(0, 0, 0, 0)";
          }, 250);
  
          setTimeout(function() {
  
              ripple.remove();
              rippleContainer.remove();
          }, 650);
      }
  });
}