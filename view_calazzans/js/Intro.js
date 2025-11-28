function enterSite() {
    document.querySelector(".intro-container").classList.add("fade-out");
    setTimeout(() => {
        window.location.href = "GerenciarCalazzans.html"; 
    }, 800);
}
