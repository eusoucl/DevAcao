import { obterCadastros, salvarCadastro } from "./storage.js";

export function configurarCadastro() {

    const cpf = document.getElementById("cpf");
    const tel = document.getElementById("telefone");
    const cep = document.getElementById("cep");
    const form = document.getElementById("form-cadastro");

    cpf.oninput = e => e.target.value = e.target.value
        .replace(/\D/g, "")
        .slice(0, 11)
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    tel.oninput = e => e.target.value = e.target.value
        .replace(/\D/g, "")
        .slice(0, 11)
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{4,5})(\d{4})$/, "$1-$2");

    cep.oninput = e => e.target.value = e.target.value
        .replace(/\D/g, "")
        .slice(0, 8)
        .replace(/(\d{5})(\d)/, "$1-$2");

    function validarCPF(v) {

        const n = v.replace(/\D/g, "");

        if (n.length !== 11 || /^(\d)\1{10}$/.test(n)) {
            return false;
        }

        for (let t = 9; t < 11; t++) {

            let soma = 0;

            for (let i = 0; i < t; i++) {
                soma += parseInt(n[i]) * (t + 1 - i);
            }

            let resto = (soma * 10) % 11;

            if (resto >= 10) {
                resto = 0;
            }

            if (resto !== parseInt(n[t])) {
                return false;
            }
        }

        return true;
    }

    form.onsubmit = e => {

        e.preventDefault();

        let ok = true;

        form.querySelectorAll(".erro").forEach(el => {
            el.textContent = "";
        });

        form.querySelectorAll("input, select").forEach(campo => {

            if (!campo.checkValidity()) {

                ok = false;

                campo.closest("div")
                    .querySelector(".erro")
                    .textContent = campo.validationMessage;
            }
        });

        if (cpf.checkValidity() && !validarCPF(cpf.value)) {

            ok = false;

            cpf.closest("div")
                .querySelector(".erro")
                .textContent = "CPF inválido.";
        }

        if (ok) {

            const novoCadastro = {
                nome: document.getElementById("nome").value,
                email: document.getElementById("email").value,
                cpf: document.getElementById("cpf").value,
                telefone: document.getElementById("telefone").value,
                cep: document.getElementById("cep").value,
                area: document.getElementById("area").value
            };

            salvarCadastro(novoCadastro);

            mostrarCadastros();

            Swal.fire({
                title: "Cadastro realizado!",
                text: "Obrigado por fazer parte da DevAção.",
                icon: "success",
                confirmButtonText: "Continuar"
            });

            form.reset();
        }
    };
}

export function mostrarCadastros() {

    const lista = document.getElementById("lista-cadastros");

    const cadastros = obterCadastros();

    if (cadastros.length === 0) {
        lista.innerHTML = "<p>Nenhum voluntário cadastrado.</p>";
        return;
    }

    lista.innerHTML = cadastros.map(cadastro => `
        <article>
            <h3>${cadastro.nome}</h3>

            <p>
                <strong>E-mail:</strong>
                ${cadastro.email}
            </p>

            <p>
                <strong>Telefone:</strong>
                ${cadastro.telefone}
            </p>

            <p>
                <strong>Área de interesse:</strong>
                ${cadastro.area}
            </p>
        </article>
    `).join("");
}