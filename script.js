/*
TODO:
-add border for focus
-add bg image
*/



const FAQs = document.querySelectorAll('.faq');
FAQs.forEach(function(faq, index) {
    const btn = faq.querySelector('img');
    const ans = faq.querySelector('.a');
    const q = faq.querySelector('.q');

    function toggleOpenClose() {
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
    }

    btn.addEventListener('click', () => toggleOpenClose());
    q.addEventListener('click', () => toggleOpenClose());
})