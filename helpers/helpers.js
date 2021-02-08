export function preventDefaultOnReloadPage (e) {
    if(e.target.getAttribute('href') || e.target.getAttribute('type') === "submit" || e.target.nodeName === "BUTTON") {
        e.preventDefault();
    };
};
