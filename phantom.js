const addVRWindow = () => {
  let body = document.getElementsByTagName("body")[0];
  let window = document.createElement('div');
  window.style.zIndex = 10000;
  window.style.position = "absolute";
  window.style.width = `${screen.width}px`;
  window.style.height = `${screen.height}px`;
  window.id = "phantom";
  body.appendChild(window);
};

const addClientScript = () => {
  let body = document.getElementsByTagName("body")[0];
  let clientScript = document.createElement("script");
  clientScript.src = "https://rawgit.com/PhantomVRTranslate/PhantomScripts/master/client.bundle.js";
  body.appendChild(clientScript);
};

const addButton = () => {
  let button = document.getElementById("phantom-btn");
  button.addEventListener("click", () => {
    // addVRWindow();
    startVR();
  });
};

const startVR = () => {
  // window.hideBody();
  neoHide();
  addVRWindow();
  let mobile = false;
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    mobile = true;
  }
  ReactVR.init('https://rawgit.com/PhantomVRTranslate/PhantomScripts/master/index.bundle.js',
  // Attach it to the body tag
  document.getElementById('phantom'), {mobile});
  document
    .querySelector('[title="Full Screen"]')
    .click();
};

const phantomSetup = () => {
  addClientScript();
  addButton();
};
document.addEventListener("DOMContentLoaded", () => phantomSetup());

const neoHide = () => {
  let body = document.body;
  let children = body.children;
  for (let i = 0; i < children.length; i++) {
    let element = children[i];
    element.style.display = "none";
  }
};