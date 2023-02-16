const zorkaApp = {};

zorkaApp.toggleActiveClass = (toggleTrigger, toggledElement) => {
    toggleTrigger.addEventListener('click', () => {
        toggledElement.classList.toggle('active');
    });
}

zorkaApp.handleMobileNavToggle = () => {
    const navToggleButton = document.querySelector('.header__toggle');
    const navLinksMenu = document.querySelector('.header__mobile-fixed');
    zorkaApp.toggleActiveClass(navToggleButton, navLinksMenu)
}

zorkaApp.handleFooterListsToggle = () => {
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach((dropdownItem) => {
        zorkaApp.toggleActiveClass(dropdownItem, dropdownItem);
    })
}

zorkaApp.init = () => {
    zorkaApp.handleMobileNavToggle();
    zorkaApp.handleFooterListsToggle();
}

zorkaApp.init();