// Climb the node hierarchy to find and hide closest button
function hideParentButton(initialNode, maxNodesToCheck = 3) {
  let element = initialNode;
  let nChecked = 0;
  while (element && nChecked < maxNodesToCheck) {
    if (element.tagName === "BUTTON") {
      // Hide button
      element.style.display = "none";
      console.log("Hid premium button", element);
      break;
    }
    element = element.parentElement;
    nChecked++;
  }
}

function hidePremiumAds() {
  console.log("Hiding premium ads");

  const premiumIcons = document.getElementsByClassName("PremiumAnnotation");
  for (const icon of premiumIcons) {
    hideParentButton(icon);
  }
  const otherThings = document.getElementsByClassName("annotation");
  for (const thing of otherThings) {
    if (thing.textContent.includes("Premium")) {
      hideParentButton(thing);
    }
  }
}

hidePremiumAds();
