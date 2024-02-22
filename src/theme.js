import { createEffect, createSignal } from "solid-js";

const [theme, setTheme] = createSignal(JSON.parse(localStorage.getItem("siteTheme")));
createEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme());
    localStorage.setItem("siteTheme", JSON.stringify(theme()));
});

export {
    theme,
    setTheme
};