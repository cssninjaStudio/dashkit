"use strict";

//Alpine JS and plugins import
import Alpine from "alpinejs";
import intersect from "@alpinejs/intersect";
import collapse from "@alpinejs/collapse";
import Fern from "@ryangjchandler/fern";

window.Alpine = Alpine;
//Init intersect plugin
Alpine.plugin(intersect);
//Init collapse plugin
Alpine.plugin(collapse);
//Init Fern plugin
Alpine.plugin(Fern);
//Init Fern persisted store
Alpine.persistedStore("app", {
  isDark: false,
  isSidebarOpened: false,
  activeSidebar: "dashboard",
  activeSidebarMenu: "",
  isSidebarRightOpened: false,
  isProfileOpen: false,
});
//Start Alpine JS
Alpine.start();

//Icons
const feather = require("feather-icons");

//Components
import { initVideoPlayers } from "./libs/components/player/player";
import { initMapBox } from "./libs/components/map/map";
import { insertBgImages, initRipple } from "./libs/utils/utils";
import { initLazyLoading } from "./libs/utils/lazyload";
import "./libs/demo";
import "./libs/components";
import "./libs/pages";

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    //Switch demo images
    // const changeImages = switchDemoImages(env);

    //Switch backgrounds
    const changeBackgrounds = insertBgImages();

    //Feather Icons
    const featherIcons = feather.replace();

    //Lazy Loading
    const lazy = initLazyLoading();

    //Ripple effect
    const ripples = initRipple();

    //Video Players
    const players = initVideoPlayers();

    //Maps
    const maps = initMapBox();
  }
};
