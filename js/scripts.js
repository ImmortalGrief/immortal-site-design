const PAGES_URL = {
    HOME: "/home",
    RULES: "/rules",
    EVENTS: "/events"
}

const SOCIAL_URLS = {
    VK: "https://vk.com/immortal_grief",
    DONATION_ALERTS: "",
    DISCORD: "",
    TELEGRAM: "",
    YOUTUBE: ""
}

const PRICES = {
    VIP: 29,
    PREMIUM: 119,
    HERO: 249,
    LEGEND: 379,
    ELITE: 559,
    DELUXE: 1099,
    PRIME: 2399,

    MONEY_CASE: 30,
    DONATE_CASE: 125,
    SPAWNER_CASE: 180
}

const formatNumber = (num) => {
    // convert 10000 to 10.000
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

function toggleAdapHeader() {
    let adap_header = document.getElementById('adap-site-header')
    if (adap_header) { adap_header.classList.toggle("active-header") }
}

document.getElementById("mail").addEventListener("click", () => {
    let mail = document.getElementById("mail").getAttribute("data-clipboard-text")
    navigator.clipboard.writeText(mail)
    alert("Почта скопирована!")
})

document.getElementById("ip-button").addEventListener("click", () => {
    let IP = document.getElementById("ip-button").getAttribute("data-clipboard-text")
    navigator.clipboard.writeText(IP)
    alert("IP скопирован!")
})
