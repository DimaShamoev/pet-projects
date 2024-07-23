window.addEventListener("load", () => {
    document.querySelector(".overlay").style.display = "none"
    document.querySelector("body").classList.remove("loaded")

    let darkModeBtn = document.querySelector(".bxs-moon");
    let click = false;

    darkModeBtn.addEventListener("click", () => {
        click = !click;

        let landingImg = document.querySelector(".landing");
        let navLogo = document.querySelector(".nav-logo")

        if (click === true) {
            document.querySelector("body").classList.add("dark");
            landingImg.style.background = "var(--dark-bg) no-repeat center";
            landingImg.style.backgroundSize = "cover";
            navLogo.src = "img/logo-w.png"
        } else {
            document.querySelector("body").classList.remove("dark");
            landingImg.style.background = "var(--light-bg) no-repeat center";
            landingImg.style.backgroundSize = "cover";
            navLogo.src = "img/logo-b.png"
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