document.addEventListener('DOMContentLoaded', function () {
    emailjs.init('vwDi-15NIctzAxQHK');

    const form = document.getElementById('contactForm');
    const submitBtn = form.querySelector('button[type="submit"]');
    
    function checkFormValidity() {
        submitBtn.disabled = !form.checkValidity();
    }

    form.addEventListener('input', checkFormValidity);

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        emailjs.sendForm('service_xcsnvzp', 'template_hmgya9t', form)
            .then(() => {
                form.querySelector('#submitSuccessMessage').classList.remove('d-none');
                form.reset();
                checkFormValidity();
            }, (error) => {
                form.querySelector('#submitErrorMessage').classList.remove('d-none');
            });
    });

    checkFormValidity();
});