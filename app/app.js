//this should be everything for this file!
import { changePageContent } from "../app/model.js";

function initListeners() {
  routing();
}

const routing = () => {
  //by having "a" on this function, routing will now work on every "a" tag, not just the nav
  $("a").on("click", (event) => {
    let btnID = event.currentTarget.id;
    let pageContentID = btnID + "Route";
    changePageContent(pageContentID);
  });
};

$(document).ready(function () {
  initListeners();
  //change 'homeRoute' to any of the other routes to keep that page up on page load
  changePageContent("homeRoute");
});

