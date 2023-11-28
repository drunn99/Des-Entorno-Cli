if (document.cookie) {
    window.scroll(0, document.cookie.split(";")[0].split("=")[1]);
}

document.addEventListener("scroll", function () {
    let now = new Date();
    let newExpiracy = new Date(now.getTime() + (1000 * 60 * 60 * 24 * 7));
    document.cookie = `coordScroll=${window.scrollY}; expires=${newExpiracy}`;
})
