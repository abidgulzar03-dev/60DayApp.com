let orderButton = document.querySelector(".rightbox");

orderButton.addEventListener("click", function () {
    orderButton.innerText = "Booking...";
    orderButton.style.backgroundColor = "white";
    orderButton.style.color = "black";
    
});


document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))?.scrollIntoView({
            behavior: "smooth"
        });
    });
});


const toggleBtn = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
toggleBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});


const links = document.querySelectorAll("#menu a");

links.forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("menu").classList.remove("active");
    });
});

