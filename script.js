/*
TODO:
-animate opening
-change plus icon to minus
-when one answer is open, close all others
-add bg image
*/



const FAQs = document.querySelectorAll('.faq');
FAQs.forEach(function(faq, i) {
    const btn = faq.querySelector('img');
    const ans = faq.querySelector('.a');

    btn.addEventListener('click', () => {
        ans.classList.toggle('open');
    })
})