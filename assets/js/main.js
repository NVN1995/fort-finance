function showHideSideBar() {
  var breadcrumIcon = document.querySelector(".js-breadcrumb-icon");
  var mainLogo = document.querySelector(".js-main-logo");
  var mainLogoImg = mainLogo.querySelector(".js-main-logo-img");
  var sideBar = document.querySelector(".js-sidebar");
  var sideBarContent = sideBar.querySelector(".js-sidebar-content");
  var sideBarHideItems = document.querySelectorAll(".js-sidebar-hide");
  var mainPage = document.querySelector(".js-mainpage");

  let sideBarWidth = sideBar.offsetWidth;
  breadcrumIcon.addEventListener("click", function () {
    if (sideBar.offsetWidth === sideBarWidth) {
      breadcrumIcon.style.transform = "rotate(180deg)";
      mainLogo.style.width = "80px";
      mainLogoImg.style = "padding-left: 16px";
      sideBar.style.width = "80px";
      sideBarContent.style = "margin-left: 6px";
      mainPage.style = "margin-left: 80px";
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

// function clickMovingTab() {
//   var mainContent = document.querySelector(".js-mainpage-content");
//   var mainMovingTabBtns = mainContent.querySelectorAll(
//     ".js-main-moving-tab-btn"
//   );
//   var mainContentItems = mainContent.querySelectorAll(".js-main-content-item");

//   for (let i = 0; i < mainMovingTabBtns.length; i++) {
//     mainMovingTabBtns[i].addEventListener("click", () => {
//       for (let k = 0; k < mainMovingTabBtns.length; k++) {
//         mainMovingTabBtns[k].classList.remove("active");
//       }
//       mainMovingTabBtns[i].classList.add("active");
//       for (let j = 0; j < mainContentItems.length; j++) {
//         mainContentItems[j].classList.add("hide");
//         mainContentItems[j].classList.remove("show");
//       }
//       mainContentItems[i].classList.add("show");
//     });
//   }
// }

var mainContent = document.querySelector(".js-mainpage-content");
var mainMovingTabBtns = mainContent.querySelectorAll(".js-main-moving-tab-btn");
var mainContentItems = mainContent.querySelectorAll(".js-main-content-item");

var nftContent = mainContent.querySelector(".js-nft-content");
var nftMovingTabBtns = nftContent.querySelectorAll(".js-nft-moving-tab-btn");
var nftContentItems = nftContent.querySelectorAll(".js-nft-content-item");

function clickMovingTab(movingTabBtns, contentItems) {
  for (let i = 0; i < movingTabBtns.length; i++) {
    movingTabBtns[i].addEventListener("click", () => {
      for (let k = 0; k < movingTabBtns.length; k++) {
        movingTabBtns[k].classList.remove("active");
      }
      movingTabBtns[i].classList.add("active");
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
  window.scrollTo(0, 0);
};
