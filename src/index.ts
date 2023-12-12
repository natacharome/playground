import { DarkThemeHandler } from "./helper/dark-theme-handler";
import { navigate } from "./router/router";

window.addEventListener("hashchange", navigate);
navigate();
DarkThemeHandler.runDarkThemeHander();
