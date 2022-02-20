// (() => {
//     const menuBtnRef = document.querySelector("[data-menu-button]");
//     const mobileMenuRef = document.querySelector("[data-menu]");

//     menuBtnRef.addEventListener("click", () => {
//         const expanded =
//             menuBtnRef.getAttribute("aria-expanded") === "true" || false;

//         menuBtnRef.classList.toggle("is-open");
//         menuBtnRef.setAttribute("aria-expanded", !expanded);

//         mobileMenuRef.classList.toggle("is-open");
//     });
// })();
(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
    const bodyElement = document.querySelector('body');

    menuBtnRef.addEventListener("click", () => {
        const expanded =
            menuBtnRef.getAttribute("aria-expanded") === "true" || false;

        menuBtnRef.classList.toggle("is-open");
        menuBtnRef.setAttribute("aria-expanded", !expanded);
        bodyElement.classList.toggle("body-is-open");
        mobileMenuRef.classList.toggle("is-open");
    });
})();