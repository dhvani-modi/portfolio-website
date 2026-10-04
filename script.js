/* =========================================================
   DHVANI MODI PORTFOLIO
   JavaScript + AngularJS
========================================================= */


/* ================= ANGULARJS ================= */

var app = angular.module("portfolioApp", []);


app.controller("PortfolioController", function ($scope) {

    $scope.learningTopics = [

        {
            title: "Web Development",

            description:
                "Building responsive websites using HTML, CSS, Bootstrap and JavaScript.",

            icon: "bi bi-window-stack"
        },

        {
            title: "JavaScript",

            description:
                "Learning interactive web functionality, DOM manipulation and form validation.",

            icon: "bi bi-filetype-js"
        },

        {
            title: "AngularJS",

            description:
                "Exploring directives, controllers, scope, services and dynamic web applications.",

            icon: "bi bi-diagram-3"
        },

        {
            title: "Data Structures",

            description:
                "Practicing algorithms and data structures using C and C++.",

            icon: "bi bi-diagram-2"
        }

    ];

});


/* ================= NAVBAR SCROLL ================= */

window.addEventListener("scroll", function () {

    var navbar = document.querySelector(".navbar");

    if (!navbar) {
        return;
    }

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* ================= ACTIVE NAVIGATION ================= */

window.addEventListener("scroll", function () {

    var sections = document.querySelectorAll("section[id]");

    var navLinks = document.querySelectorAll(".nav-link");

    var currentSection = "";

    sections.forEach(function (section) {

        var sectionTop = section.offsetTop - 160;

        var sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        var href = link.getAttribute("href");

        if (href === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});


/* ================= SMOOTH SCROLL ================= */

document.addEventListener("DOMContentLoaded", function () {

    var links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {

        link.addEventListener("click", function (event) {

            var targetId = this.getAttribute("href");

            if (
                targetId === "#" ||
                targetId === "" ||
                targetId === null
            ) {
                return;
            }

            var target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });


                /* Close mobile navbar */

                var navbarMenu =
                    document.querySelector(".navbar-collapse");

                if (
                    navbarMenu &&
                    navbarMenu.classList.contains("show")
                ) {

                    var bootstrapCollapse =
                        bootstrap.Collapse.getInstance(navbarMenu);

                    if (bootstrapCollapse) {

                        bootstrapCollapse.hide();

                    }

                }

            }

        });

    });

});


/* ================= CURRENT YEAR ================= */

document.addEventListener("DOMContentLoaded", function () {

    var yearElement =
        document.getElementById("currentYear");

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }

});


/* ================= PROJECT CARD ANIMATION ================= */

document.addEventListener("DOMContentLoaded", function () {

    var projectCards =
        document.querySelectorAll(".project-card");


    projectCards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {

            this.style.transform =
                "translateY(-9px)";

        });


        card.addEventListener("mouseleave", function () {

            this.style.transform =
                "translateY(0)";

        });

    });

});


/* ================= CERTIFICATE CARD ANIMATION ================= */

document.addEventListener("DOMContentLoaded", function () {

    var certificateCards =
        document.querySelectorAll(".certificate-card");


    certificateCards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {

            this.style.transform =
                "translateY(-8px)";

        });


        card.addEventListener("mouseleave", function () {

            this.style.transform =
                "translateY(0)";

        });

    });

});


/* ================= SKILL CARD ANIMATION ================= */

document.addEventListener("DOMContentLoaded", function () {

    var skillCards =
        document.querySelectorAll(".skill-card");


    skillCards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {

            this.style.transform =
                "translateY(-8px)";

        });


        card.addEventListener("mouseleave", function () {

            this.style.transform =
                "translateY(0)";

        });

    });

});


/* ================= JOURNEY CARD ANIMATION ================= */

document.addEventListener("DOMContentLoaded", function () {

    var journeyItems =
        document.querySelectorAll(".journey-item");


    journeyItems.forEach(function (item) {

        item.addEventListener("mouseenter", function () {

            this.style.transform =
                "translateX(7px)";

        });


        item.addEventListener("mouseleave", function () {

            this.style.transform =
                "translateX(0)";

        });

    });

});


/* ================= PAGE LOAD ================= */

window.addEventListener("load", function () {

    document.body.classList.add("page-loaded");

    console.log(
        "Dhvani Modi Portfolio Loaded Successfully!"
    );

});