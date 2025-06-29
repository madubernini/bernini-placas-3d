$(document).ready(function() {
    new Typed(".typing", {
        strings: ["Dados", "Automação", "Softwares"],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true
    });

    new Typed(".typing-code", {
        strings: ['<span style="color: #de3291">while</span> <span style="color: #2baefb">(</span>alive<span style="color: #2baefb">) {</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4bda3a">eat</span><span style="color: #f5d121">()</span>;<br>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4bda3a">code</span><span style="color: #f5d121">()</span>;<br>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4bda3a">play</span><span style="color: #f5d121">()</span>;<br>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4bda3a">sleep</span><span style="color: #f5d121">()</span>;<br><span style="color: #2baefb">}</span>'],
        typeSpeed: 60,
        backSpeed: 20,
        loop: true,
        showCursor: false
    });

    (() => {
        'use strict';
        const forms = document.querySelectorAll('.needs-validation');
        Array.prototype.slice.call(forms).forEach((form) => {
            form.addEventListener('submit', (event) => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
            }, false);
        });
    })();
});