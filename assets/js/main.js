function showHideSideBar() {
  var breadcrumIcon = document.querySelector(".js-breadcrumb-icon");
  var mainLogo = document.querySelector(".js-main-logo");
  var mainLogoImg = mainLogo.querySelector(".js-main-logo-img");
  var sideBar = document.querySelector(".js-sidebar");
  var sideBarContent = sideBar.querySelector(".js-sidebar-content");
  var sideBarHideItems = document.querySelectorAll(".js-sidebar-hide");
  var mainPage = document.querySelector(".js-mainpage");

  // get sidebar default Width
  let sideBarWidth = sideBar.offsetWidth;
  // when user click on Breadcrum Icon
  breadcrumIcon.addEventListener("click", function () {
    // in case sidebar is showing
    if (sideBar.offsetWidth === sideBarWidth) {
      // rotate icon
      breadcrumIcon.style.transform = "rotate(180deg)";
      // minimize mainlogo
      mainLogo.style.width = "80px";
      mainLogoImg.style = "padding-left: 16px";
      // minimize sidebar
      sideBar.style.width = "80px";
      sideBarContent.style = "margin-left: 6px";
      mainPage.style = "margin-left: 80px";
      // hide sidebar content
      for (i = 0; i < sideBarHideItems.length; i++) {
        sideBarHideItems[i].classList.add("hide");
      }
    } else {
      breadcrumIcon.style.transform = "rotate(0deg)";
      mainLogo.style.width = "260px";
      mainLogoImg.style = "padding-left: 24px";
      sideBar.style.width = "260px";
      sideBarContent.style = "margin-left: 16px";
      mainPage.style = "margin-left: 260px";
      for (i = 0; i < sideBarHideItems.length; i++) {
        sideBarHideItems[i].classList.remove("hide");
      }
    }
  });
}

var mainContent = document.querySelector(".js-mainpage-content");
var mainMovingTabBtns = mainContent.querySelectorAll(".js-main-moving-tab-btn");
var mainContentItems = mainContent.querySelectorAll(".js-main-content-item");

var nftContent = mainContent.querySelector(".js-nft-content");
var nftMovingTabBtns = nftContent.querySelectorAll(".js-nft-moving-tab-btn");
var nftContentItems = nftContent.querySelectorAll(".js-nft-content-item");

// function for Moving Tabs
function clickMovingTab(movingTabBtns, contentItems) {
  // get all button for adding 'click' event
  for (let i = 0; i < movingTabBtns.length; i++) {
    movingTabBtns[i].addEventListener("click", () => {
      // remove 'active' status of all button
      for (let k = 0; k < movingTabBtns.length; k++) {
        movingTabBtns[k].classList.remove("active");
      }
      // add 'active' status for Clicked button
      movingTabBtns[i].classList.add("active");

      // show content for each button
      for (let j = 0; j < contentItems.length; j++) {
        contentItems[j].classList.add("hide");
        contentItems[j].classList.remove("show");
      }
      contentItems[i].classList.add("show");
    });
  }
}

window.onload = () => {
  showHideSideBar();
  clickMovingTab(mainMovingTabBtns, mainContentItems);
  clickMovingTab(nftMovingTabBtns, nftContentItems);
  // scroll to top when reload page
  window.scrollTo(0, 0);
};
