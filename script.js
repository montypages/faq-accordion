/*
TODO:
-animate opening
-add bg image
*/



const FAQs = document.querySelectorAll('.faq');
FAQs.forEach(function(faq, index) {
    const btn = faq.querySelector('img');
    const ans = faq.querySelector('.a');

    btn.addEventListener('click', () => {
        for(let i = 0; i < FAQs.length; i++) {
            if (i !== index) {
                const otherBtn = FAQs[i].querySelector('img');
                otherBtn.src = 'assets/images/icon-plus.svg';
                FAQs[i].classList.remove('open');
            }
        }
        faq.classList.toggle('open');
        btn.src = faq.classList.contains('open')
            ? 'assets/images/icon-minus.svg' 
            : 'assets/images/icon-plus.svg';
    })
})