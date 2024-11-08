const PAGES_URL = {
    HOME: "/home",
    RULES: "/rules",
    EVENTS: "/events"
}

function toggleAdapHeader() {
    let adap_header = document.getElementById('adap-site-header')
    if (adap_header) { adap_header.classList.toggle("active-header") }
}


document.getElementById("ip-button").addEventListener("click", () => {
    let IP = document.getElementById("ip-button").getAttribute("data-clipboard-text")
    navigator.clipboard.writeText(IP)
})
