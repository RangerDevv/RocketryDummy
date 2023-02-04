let LoadingScreen = document.getElementById("LoadingSc")

setTimeout(function() {
    LoadingScreen.classList.add("hidden")
    LoadingScreen.classList.remove("block")
    window.scrollTo(0, 0)
}, 3500)
