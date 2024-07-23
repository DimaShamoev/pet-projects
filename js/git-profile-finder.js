let input = document.querySelector(".input");
let btn = document.querySelector(".btn");

let userImg = document.querySelector(".img-block");
let userName = document.querySelector(".user-name");
let userLogin = document.querySelector(".user-login");
let userBio = document.querySelector(".user-bio");
let userDate = document.querySelector(".user-join-date");

let userFollowers = document.querySelector(".followers-cnt");
let userFollowing = document.querySelector(".followings-cnt");
let userRepos = document.querySelector(".repos-cnt");

let userLoc = document.querySelector(".loc");
let userProf = document.querySelector(".prof");
let userProfLink = document.querySelector(".prof-link")
let userTwt = document.querySelector(".twtt");
let userOffice = document.querySelector(".office");

let img = document.createElement("img");
let imgBlock = document.querySelector(".img-block");

let findUser = () => {
    let url = `https://api.github.com/users/${input.value}`;

    async function getUrl() {
        let response = await fetch(url);
        let data = await response.json();
        let dateData = data.created_at.slice(0, data.created_at.length - 10)
        

        img.src = data.avatar_url;
        imgBlock.appendChild(img);

        userName.innerHTML = data.name;
        userLogin.innerHTML = `@${data.login}`;
        userDate.innerHTML = `Joined: ${dateData}`;
        userBio.innerHTML = "" || data.bio === null ? "User doesn't have a Bio" : data.bio
        userRepos.innerHTML = data.public_repos;
        userFollowers.innerHTML = data.followers;
        userFollowing.innerHTML = data.following;

        userLoc.innerHTML = "" || data.location === null ? "No Location" : data.location
        userTwt.innerHTML = "" || data.twitter_username === null ? "No Twitter" : `@${data.twitter_username}`
        userOffice.innerHTML = "" || data.company === null ? "No Office" : `@${data.company}`
        userProfLink.href = data.html_url;
        userProfLink.innerHTML = "Go To Profile"
    }

    getUrl();
}

btn.addEventListener("click", findUser);
input.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        findUser()
    }
})
