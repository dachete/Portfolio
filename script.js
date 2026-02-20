document.addEventListener('DOMContentLoaded', () => {
    
    // --- A. VALIDACIÓN DE FORMULARIO ---
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Evitar envío real del formulario

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Comprobar si hay campos vacíos
        if (name === '' || email === '' || message === '') {
            alert("Error: Por favor, rellena todos los campos del formulario.");
            return;
        }

        // Validación simple de email (opcional pero recomendada)
        if (!email.includes('@')) {
            alert("Error: Introduce un email válido.");
            return;
        }

        // Si todo está bien
        alert(`¡Gracias ${name}! Hemos recibido tu mensaje correctamente.`);
        contactForm.reset();
    });

    // --- B. CALCULADORA DE HIPOTECA ---
    const calcBtn = document.getElementById('calc-btn');
    
    calcBtn.addEventListener('click', function() {
        const amount = parseFloat(document.getElementById('amount').value);
        const resultArea = document.getElementById('result-area');
        const paymentSpan = document.getElementById('monthly-payment');

        if (isNaN(amount) || amount <= 0) {
            alert("Por favor, introduce una cantidad válida para la hipoteca.");
            resultArea.classList.add('hidden');
            return;
        }

        // Datos fijos: 3% anual a 30 años
        const annualInterest = 0.03; 
        const years = 30;
        
        // Fórmulas mensuales
        const monthlyInterest = annualInterest / 12;
        const totalPayments = years * 12;

        // Fórmula cuota mensual: M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1 ]
        const numerator = monthlyInterest * Math.pow(1 + monthlyInterest, totalPayments);
        const denominator = Math.pow(1 + monthlyInterest, totalPayments) - 1;
        
        const monthlyPayment = amount * (numerator / denominator);

        // Mostrar resultado con 2 decimales
        paymentSpan.textContent = monthlyPayment.toFixed(2);
        resultArea.classList.remove('hidden');
    });

    // --- C. MODO OSCURO/CLARO ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggleBtn.addEventListener('click', function() {
        body.classList.toggle('dark-mode');

        // Cambiar texto del botón según el estado
        if (body.classList.contains('dark-mode')) {
            themeToggleBtn.textContent = "☀️ Modo Claro";
        } else {
            themeToggleBtn.textContent = "🌙 Modo Oscuro";
        }
    });
});