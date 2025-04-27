// script.js
document.addEventListener("DOMContentLoaded", function() {
    const socialLinks = document.querySelectorAll('.social-links a');

    socialLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // لمنع تحميل الرابط عند النقر عليه
            alert(`You clicked on: ${link.textContent}`);
            window.location.href = link.href; // بعد إظهار التنبيه، يتم الانتقال إلى الرابط
        });
    });
});
