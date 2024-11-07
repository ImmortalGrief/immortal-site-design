const PAGES_URL = {
    HOME: "/home",
    RULES: "/rules",
    EVENTS: "/events"
}

function toggleAdapHeader() {
    let adap_header = document.getElementById('adap-site-header')
    if (adap_header) { adap_header.classList.toggle("active-header") }
}

function copyIP() {
    navigator.clipboard.writeText("54.36.232.14:25883");
    alert("IP скопирован")
}