/* ===================================
   TPIN GUIDE ZAMBIA
   script.js
=================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===========================
       Sticky Header
    =========================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.style.boxShadow = "0 8px 25px rgba(0,0,0,.12)";
            header.style.background = "#ffffff";

        } else {

            header.style.boxShadow = "0 2px 15px rgba(0,0,0,.08)";

        }

    });

    /* ===========================
       Smooth Scroll
    =========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });

    /* ===========================
       FAQ Accordion
    =========================== */

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const answer = item.querySelector("p");

        answer.style.display = "none";

        item.style.cursor = "pointer";

        item.addEventListener("click", () => {

            const visible = answer.style.display === "block";

            faqItems.forEach(i => {

                i.querySelector("p").style.display = "none";

            });

            answer.style.display = visible ? "none" : "block";

        });

    });

    /* ===========================
       Reveal Animation
    =========================== */

    const revealElements = document.querySelectorAll(

        ".card,.step,.service,.faq-item,.hero-image"

    );

    function reveal() {

        revealElements.forEach(el => {

            const top = el.getBoundingClientRect().top;

            const windowHeight = window.innerHeight;

            if (top < windowHeight - 120) {

                el.style.opacity = "1";
                el.style.transform = "translateY(0)";

            }

        });

    }

    revealElements.forEach(el => {

        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition = ".7s ease";

    });

    window.addEventListener("scroll", reveal);

    reveal();

    /* ===========================
       Active Navigation
    =========================== */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;

            if (scrollY >= top) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    /* ===========================
       Mobile Menu
    =========================== */

    const menuBtn = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    if (menuBtn) {

        menuBtn.addEventListener("click", () => {

            nav.classList.toggle("show");

        });

    }

    /* ===========================
       Back To Top
    =========================== */

    const backTop = document.querySelector(".back-to-top");

    if (backTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {

                backTop.classList.add("show");

            } else {

                backTop.classList.remove("show");

            }

        });

        backTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /* ===========================
       Simple Counter Animation
    =========================== */

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const update = () => {

            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;

            const increment = target / 80;

            if (count < target) {

                counter.innerText = Math.ceil(count + increment);

                setTimeout(update, 20);

            } else {

                counter.innerText = target;

            }

        };

        update();

    });

    /* ===========================
       Page Fade In
    =========================== */

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity .6s";

        document.body.style.opacity = "1";

    }, 100);

});