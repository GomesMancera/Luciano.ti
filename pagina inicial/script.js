document.addEventListener("DOMContentLoaded", function () {
    // Validação do formulário de contato
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const nome = document.getElementById("nome").value;
            const email = document.getElementById("email").value;
            const mensagem = document.getElementById("mensagem").value;

            if (nome === "" || email === "" || mensagem === "") {
                alert("Por favor, preencha todos os campos.");
            } else {
                alert("Mensagem enviada com sucesso!");
                contactForm.reset();
            }
        });
    }

    // Simulação de login na área do cliente
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const email = document.getElementById("email").value;
            const senha = document.getElementById("senha").value;

            if (email === "cliente@mancerati.com" && senha === "1234") {
                alert("Login bem-sucedido! Redirecionando...");
                window.location.href = "dashboard.html";
            } else {
                alert("Credenciais inválidas. Tente novamente.");
            }
        });
    }

    // Animação suave para rolagem entre seções
    const linksInternos = document.querySelectorAll("nav ul li a");
    linksInternos.forEach(link => {
        link.addEventListener("click", function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                const target = document.querySelector(this.hash);
                if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });

    // Exibir ano atual no footer
    const footer = document.querySelector("footer p");
    if (footer) {
        const year = new Date().getFullYear();
        footer.innerHTML = `&copy; ${year} Mancera TI - Todos os direitos reservados.`;
    }

    // Corrigir o problema do menu ao rolar (fixa a cor corretamente)
    window.addEventListener("scroll", function () {
        var header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});
