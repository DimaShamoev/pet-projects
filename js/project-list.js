window.addEventListener("load", () => {
    document.querySelector(".overlay").style.display = "none"
    document.querySelector("body").classList.remove("loaded")

    let darkModeBtn = document.querySelector(".bxs-moon");
    let click = false;

    darkModeBtn.addEventListener("click", () => {
        click = !click;

        let navLogo = document.querySelector(".nav-logo")

        if (click === true) {
            navLogo.src = "../../img/logo-w.png";
            document.querySelector("body").classList.add("dark");
        } else {
            navLogo.src = "../../img/logo-b.png";
            document.querySelector("body").classList.remove("dark");
        }
    })

    let asideMenuBtn = document.querySelector(".bx-menu");
    let asideMenuBlock = document.querySelector(".aside-menu")
    asideMenuBtn.addEventListener("click", () => {
        asideMenuBlock.classList.add("active-aside")
        document.querySelector("body").style.height = "100vh"
        document.querySelector("body").style.overflow = "hidden"
        asideMenuBlock.style.padding = "20px"
    })

    let asideExitBtn = document.querySelector(".bx-x");
    asideExitBtn.addEventListener("click", () => {
        asideMenuBlock.classList.remove("active-aside")
        asideMenuBlock.style.padding = "0"
        document.querySelector("body").style.height = "auto"
        document.querySelector("body").style.overflow = "auto"
    })

})