const accordionItem = document.querySelectorAll('.accordion-item');
console.log(accordionItem);

accordionItem.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    })
})