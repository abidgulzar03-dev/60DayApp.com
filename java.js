let orderButton = document.querySelector(".rightbox");

orderButton.addEventListener("click", function () {
    orderButton.innerText = "Booking...";
    orderButton.style.backgroundColor = "white";
    orderButton.style.color = "black";
    
});

// SMOOTH SCROLL (only for internal links)
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// TOGGLE MENU
function toggleMenu() {
    const midbox = document.getElementById("midbox");
    const toggle = document.querySelector(".menu-toggle");

    midbox.classList.toggle("active");
    toggle.classList.toggle("active");
}


// CLOSE MENU WHEN CLICKING LINKS
const navLinks = document.querySelectorAll(".menu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("midbox").classList.remove("active");
        document.querySelector(".menu-toggle").classList.remove("active");
    });
});