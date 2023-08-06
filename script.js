//To go to my youtbe when uploader's details is clicked
const youtubeBtn = document.querySelector("#uploader_content");
youtubeBtn.addEventListener("click", goToYoutube);

function goToYoutube() {
  // Open the URL in a new tab
  window.open('https://www.youtube.com/channel/UC8AkWvF_GAWN79T_InKDKlQ', '_blank');

}
// for side buttons to scroll to selected section
//page 1
let summaryBtn = document.querySelector("#summaryButton");
let newProjBtn = document.querySelector("#newProjButton");
let downloadingBtn = document.querySelector("#downloadingButton");
let importingBtn = document.querySelector("#importingButton");

summaryBtn.addEventListener("click", scrollToTitle);
newProjBtn.addEventListener("click", scrollToNewProj);
downloadingBtn.addEventListener("click", scrollToDownloading);
importingBtn.addEventListener("click", scrollToAddingButton);

// first side nav button should scroll to the top
function scrollToTitle() {
  scrollToSection("title");

}

function scrollToNewProj() {
  scrollToSection("newProj");
}

function scrollToDownloading() {
  scrollToSection("downloading");
}

function scrollToAddingButton() {
  scrollToSection("importing");
}
//page 2
let controlBtn = document.querySelector("#controlButton");
let cutBtn = document.querySelector("#cutButton");
let cursorBtn = document.querySelector("#cursorButton");
let markerBtn = document.querySelector("#markerButton");

controlBtn.addEventListener("click", scrollToTitle);
cutBtn.addEventListener("click", scrollToCut);
cursorBtn.addEventListener("click", scrollToCursor);
markerBtn.addEventListener("click", scrollToMaker);

function scrollToCut() {
  scrollToSection("cut");
}

function scrollToCursor() {
  scrollToSection("cursor");
}

function scrollToMaker() {
  scrollToSection("marker");
}

//page 3

let transformBtn = document.querySelector("#transformButton");
let adjustmentBtn = document.querySelector("#adjustmentButton");
let shakeBtn = document.querySelector("#shakeButton");
let hueBtn = document.querySelector("#hueButton");

transformBtn.addEventListener("click", scrollToTitle);
adjustmentBtn.addEventListener("click", scrollToAdjustment);
shakeBtn.addEventListener("click", scrollToShake);
hueBtn.addEventListener("click", scrollToHue);

function scrollToAdjustment() {
  scrollToSection("adjustment");
}

function scrollToShake() {
  scrollToSection("shake");
}

function scrollToHue() {
  scrollToSection("hue");
}

//page 4
let effectsBtn = document.querySelector("#effectsButton");
let ccBtn = document.querySelector("#ccButton");
let checkupBtn = document.querySelector("#checkupButton");

effectsBtn.addEventListener("click", scrollToTitle);
ccBtn.addEventListener("click", scrollToCC);
checkupBtn.addEventListener("click", scrollToCheckup);

function scrollToCC() {
  scrollToSection("cc");
}
function scrollToCheckup() {
  scrollToSection("checkup");
}

document.addEventListener("load",currentPage);
function  currentPage()
{
  let topButtons = document.querySelectorAll("nav_buttons");
  topButtons[currentPage-1].classList.add("active");
}
let content = document.getElementById("content");
content.addEventListener("scroll", handleScroll);

// the fucntion to scroll to selected section
function scrollToSection(sectionId) {
  let section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}
// for buttons to stay red when section is reached
function handleScroll() {
  //select all the div found within the Intro section
  let sections = document.querySelectorAll(".section");

  //have an invisible line, it triggers add/remove (.active) when sections
  //reaches the line
  let scrollPosition = content.scrollTop + (content.offsetHeight / 2);

  //loop for the amount of sections
  sections.forEach((section) => {
    //obtain each section
    let sectionId = section.getAttribute("id");
    let button = document.querySelector(`#${sectionId}Button`);

    if (button) {
      let sectionTop = section.offsetTop;
      let sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    }
  });
}
/* for top nav */
/* selection of the top buttons */
const basicButton = document.querySelector("#basicsButton");
const controlsButton = document.querySelector("#controlsButton");
const editingButton = document.querySelector("#editingButton");
const finalisingButton = document.querySelector("#finalisingButton");
//select all pages to hide
var allpages = document.querySelectorAll(".page");
var allNav = document.querySelectorAll(".subnav");

hideallpages();

//hides all pages using for loop
function hideallpages() {
  for (let page of allpages) {
    page.style.display = "none";
  }
  for(let nav of allNav)
  {
    nav.style.display="none";
  }

}
//fucntion to show said page
function showpage(pageNumber) {
  //hide all active pages and nav first
  hideallpages();
  //select the section containing the pages and nav
  let shownpage = document.querySelector("#page" + pageNumber);
  let shownNav = document.querySelector("#nav_page" + pageNumber);
  //show the page and nav
  shownpage.style.display = "block";
  shownNav.style.display = "flex";
  let subnav = document.querySelectorAll(".subnav");
  currentNav = subnav[pageNumber-1];
  //change text of next button if at final section
  if(currentPage == 4)
  {
    let nextButtonTxt = document.querySelector("#nextButton_span");
    nextButtonTxt.innerHTML = "End Tutorial";
  }

  if(isNavShowned == false)
  {
    currentNav.style.left = "-250px"; 
  }
  else
  {
    currentNav.style.left = "0px";
  }
}
//always show first page (basics page) on load
window.addEventListener("load", function () {
  showpage(1);
});

//start on the first page
var currentPage = 1;
//gives each button event listeners to activate the pages
basicButton.addEventListener("click", function () {
  currentPage = 1;
  showpage(1);
});
controlsButton.addEventListener("click", function () {
  currentPage = 2;
  showpage(2);
});
editingButton.addEventListener("click", function () {
  currentPage = 3;
  showpage(3);
});
finalisingButton.addEventListener("click", function () {
  currentPage = 4;
  showpage(4);
});

//for next button's logic
const nextButton = document.querySelector("#next_button");


//go next page when button is clicked
nextButton.addEventListener("click",nextPage);
function nextPage() {
  //if its not the last page, go next
  if (currentPage < 4) {
    showpage(currentPage + 1);
    //increase current page by one
    currentPage++;
    //go to the top
    scrollToSection("title");
  }
  //do something else if last page(end of lesson button?)
  else {

    showEndScreen();
  }

}

//for hamburger button
const hamburger = document.querySelector("#show_side_nav");
hamburger.addEventListener("click", showNav);
var isNavShowned = false
// funciton to show the nav
function showNav()
{
  let subnav = document.querySelectorAll(".subnav");
  currentNav = subnav[currentPage-1];

  if(isNavShowned == false)
  {
    // Rotate the button 90 degrees
    hamburger.style.transform = `rotate(90deg)`;
    hamburger.style.backgroundImage = "url(images/universal/crossbutton.png)"
    currentNav.style.left = "0px";
    isNavShowned = true;
  }
  else
  {
    // Rotate the button back to original rotation
    hamburger.style.transform = `rotate(0deg)`;
    hamburger.style.backgroundImage = "url(images/universal/hamburger.png)"
    currentNav.style.left = "-250px";
    isNavShowned = false;
  }

}
//For interactivity
//mp3/4 convertion
const imageToChange = document.querySelector("#yt2mp");
const mpButton = document.querySelector("#mpButton");
var imageChanged = false;
mpButton.addEventListener("click", function() {
  if(imageChanged == true)
  {
    imageToChange.src = "images/basics/youtube-to-mp3.png";
    imageChanged = false;
  }
  else
  {
    imageToChange.src = "images/basics/youtube-to-mp4.png";
    imageChanged = true
  }

});

const convertedFile = document.querySelector("#convertedFile");
const convertButton = document.querySelector("#convertButton"); 
var hidden = true;
convertButton.addEventListener("click", function() {
  hidden = false;
  convertedFile.classList.remove("hidden");
  if(imageChanged == true)
  {
    convertedFile.src = "images/basics/mp4.png";
  }
  else
  {
    convertedFile.src = "images/basics/mp3.png";
  }

});

//Control C V game
const controlKey = document.querySelector("#controlKey");
const cKey = document.querySelector("#cKey");
const vKey = document.querySelector("#vKey")

var controlDown;
var cDown;
var vDown;
document.addEventListener("keydown", function(event) {
  if (event.key == "Control") {
    controlKey.classList.replace("keyboard-image","keyboard-image-expand");
    controlDown = true;
  }
  if (event.key == "c") {
    cKey.classList.replace("keyboard-image","keyboard-image-expand");
    cDown = true;
  }
  if (event.key == "v") {
    vKey.classList.replace("keyboard-image","keyboard-image-expand");
    vDown = true;
  }
});
document.addEventListener("keyup", function(event) {
  if (event.key == "Control") {
    controlKey.classList.replace("keyboard-image-expand","keyboard-image");
    controlDown = false;
  }
  if (event.key == "c") {
    cKey.classList.replace("keyboard-image-expand","keyboard-image");
    cDown = false;
  }
  if (event.key == "v") {
    vKey.classList.replace("keyboard-image-expand","keyboard-image");
    vDown = false;
  }
});
const intervalId = setInterval(showKeyboardResults, 1);
const keyboardResults = document.querySelector(".keyboardResults");
function showKeyboardResults() {
  let resultText = "";

  if (controlDown && cDown) {
    resultText = "Copy";
  } else if (controlDown && vDown) {
    resultText = "Paste";
  } else if (cDown) {
    resultText = "Razor Tool";
  } else if (vDown) {
    resultText = "Cursor Tool";
  }
  else{
    resultText = "Press the correct key(s)";
  }

  keyboardResults.textContent = resultText;
}
//s_shake search
const s_shake = document.querySelector('#s-shake');
function checkShakeInput() {
  var userInput = document.querySelector("#s_shakeInput").value;

  // Compare the user input with the expected value
  if (userInput == "S_Shake") {
    ShowSShake(); // Call the function A
  }
}
function ShowSShake() {
  s_shake.classList.remove("hidden");
}

//s_huesatbright search
const s_huesatbright = document.querySelector('#s-huesatbright');
function checkHuesatbrightInput() {
  var userInput = document.querySelector("#s_huesatbrightInput").value;

  // Compare the user input with the expected value
  if (userInput == "S_HueSatBright") {
    ShowHueSatBright(); // Call the function A
  }
}
function ShowHueSatBright() {
  s_huesatbright.classList.remove("hidden");
}
//mb_looks search
const mb_looks = document.querySelector('#mb-looks');
function checkLooksInput() {
  var userInput = document.querySelector("#mb-looksInput").value;

  // Compare the user input with the expected value
  if (userInput == "Looks") {
    ShowLooks(); // Call the function A
  }
}
function ShowLooks() {
  mb_looks.classList.remove("hidden");
}


const endBtn = document.querySelector("#end_button");
const endScreen = document.querySelector("#end_screen");

endBtn.addEventListener("click", restartTut);

function restartTut()
{
  endScreen.classList.replace("showflex","hidden");
  scrollToTitle();
  currentPage = 1;
  showpage(1);
}
function showEndScreen()
{
  endScreen.classList.replace("hidden","showflex");
}