
import { changePageContent } from "../app/model.js";

function initListeners() {
  routing();
}

const routing = () => {
  //by having "a" on this function
  $("a").on("click", (event) => {
    let btnID = event.currentTarget.id;
    let pageContentID = btnID + "Route";
    changePageContent(pageContentID);
  });
};

$(document).ready(function () {
  initListeners();

  changePageContent("homeRoute");
});

