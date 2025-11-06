function toggleDropdown() {
    document.getElementById("dropdownList").classList.toggle("show");
}

function selectFlag(flag) {
    document.getElementById("selectedFlag").src = flag.src;
    document.getElementById("dropdownList").classList.remove("show");
}

window.onclick = function(event) {
    if (!event.target.closest(".dropdown")) {
        document.getElementById("dropdownList").classList.remove("show");
    }
};