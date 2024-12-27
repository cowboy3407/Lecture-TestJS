const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const form = document.getElementById('formleft');

form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const emailPattern = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 

    if (emailInput.value.trim() === '' || !emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = 'Valid email required';
        emailInput.style.border = "1px solid #FF6155";
        emailInput.style.background = "rgba(255, 97, 85, 0.15)";
        emailInput.classList.add('error-placeholder'); 
        emailInput.value = ''; 
        emailInput.placeholder = 'ash#loremcompany.com'; 
    } else {
        emailError.textContent = '';
        emailInput.style.border = '';
        emailInput.style.background = ''; 
        emailInput.classList.remove('error-placeholder'); 
        emailInput.value = '';
        window.location.href = './index1.html'; 
    }
});
