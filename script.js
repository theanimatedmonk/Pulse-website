document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.parentElement;
            const accordionContent = accordionItem.querySelector('.accordion-content');
            const accordionIcon = this.querySelector('.accordion-icon');

            const isOpen = accordionContent.style.maxHeight && accordionContent.style.maxHeight !== '0px';

            // Toggle the clicked accordion content and icon
            if (!isOpen) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
                accordionIcon.classList.add('rotate');
            } else {
                accordionContent.style.maxHeight = null;
                accordionIcon.classList.remove('rotate');
            }
        });
    });
});

//Request a demo form & contact form
function openHubSpotForm1() {
    var contactElement = document.getElementById('Contact');
    if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
    }
}


function toggleMenu() {
    const menuOverlay = document.getElementById('menuOverlay');
    const mainHeader = document.querySelector('.main-header');
    const hamburger = document.querySelector('.hamburger');

    if (menuOverlay.classList.contains('show')) {
        menuOverlay.classList.remove('show');
        setTimeout(() => {
            menuOverlay.style.display = 'none';
        }, 300); // Wait for transition to complete
        if (window.innerWidth <= 768) {
            hamburger.style.display = 'block';
        }
    } else {
        menuOverlay.style.display = 'flex';
        setTimeout(() => {
            menuOverlay.classList.add('show');
        }, 50); // Delay for smooth transition start
        mainHeader.style.display = 'none';
        hamburger.style.display = 'none';
    }
}

function handleResize() {
    const mainHeader = document.querySelector('.main-header');
    const hamburger = document.querySelector('.hamburger');
    const menuOverlay = document.getElementById('menuOverlay');

    if (window.innerWidth > 768) {
        mainHeader.style.display = 'flex';
        hamburger.style.display = 'none';
        menuOverlay.style.display = 'none';
    } else {
        mainHeader.style.display = 'none';
        hamburger.style.display = 'block';
    }
}

function hideMenu() {
    const menuOverlay = document.getElementById('menuOverlay');
    const hamburger = document.querySelector('.hamburger');

    if (menuOverlay.classList.contains('show')) {
        menuOverlay.classList.remove('show');
        setTimeout(() => {
            menuOverlay.style.display = 'none';
        }, 300); // Wait for transition to complete
        if (window.innerWidth <= 768) {
            hamburger.style.display = 'block';
        }
    }
}

document.querySelectorAll('.overlay-nav a').forEach(link => {
    link.addEventListener('click', hideMenu);
});

window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);
