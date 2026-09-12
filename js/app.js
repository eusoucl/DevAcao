import {
    configurarCadastro,
    mostrarCadastros
} from "./cadastro.js";

import {
    gerarCardsIniciativas
} from "./templates.js";

const conteudo = document.getElementById("conteudo");


function carregarPagina() {
    const rota = window.location.hash || "#inicio";

    if (rota === "#inicio") {
        conteudo.innerHTML = `
            <section>
                <h2>Quem somos</h2>

                <p>
                    A DevAção é uma organização criada para ensinar programação
                    a quem deseja dar os primeiros passos na área de tecnologia,
                    tornando o aprendizado mais acessível.
                </p>
            </section>

            <section>
                <h2>Sobre a DevAção</h2>

                <p>
                    Acreditamos que o conhecimento em programação abre novas
                    oportunidades de estudo e trabalho. Imagine que o HTML seja
                    o corpo, o CSS as roupas e o JavaScript a mente: juntos
                    formam a base de páginas web interativas.
                </p>

                <img
                    src="../img/Programcorp.png"
                    alt="Imagem mostrando como HTML, CSS e JavaScript juntos formam uma pessoa"
                >
            </section>

            <section>
                <h2>Fale Conosco</h2>

                <address>
                    E-mail:
                    <a href="mailto:contato@devacao.org">
                        contato@devacao.org
                    </a>

                    <br>

                    Telefone:
                    <a href="tel:+5531996694242">
                        (31) 99669-4242
                    </a>

                    <br>

                    Endereço: Rua Abril, 123 - Matipo, MG
                </address>
            </section>

            <section>
                <h2>Componentes de Feedback</h2>

                <article>
                    <h3>Badge</h3>

                    <p>
                        Projeto:
                        <span class="badge">Ativo</span>
                    </p>
                </article>

                <article>
                    <h3>Alerta</h3>

                    <div class="alert" role="alert">
                        <strong>Informação:</strong>
                        As inscrições para novos voluntários estão abertas.
                    </div>
                </article>

                <article>
                    <h3>Modal</h3>

                    <button
                        type="button"
                        id="abrir-modal"
                    >
                        Ver mensagem
                    </button>
                </article>
            </section>

            <div
                id="modal"
                class="modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="titulo-modal"
            >
                <div class="modal-conteudo">

                    <h2 id="titulo-modal">
                        Obrigado!
                    </h2>

                    <p>
                        Sua participação ajuda a DevAção a transformar
                        conhecimento em oportunidades.
                    </p>

                    <button
                        type="button"
                        id="fechar-modal"
                    >
                        Fechar
                    </button>

                </div>
            </div>
        `;

        configurarModal();
    }

    else if (rota === "#projetos") {

        const cards = gerarCardsIniciativas();

        conteudo.innerHTML = `
            <section class="iniciativas">

                <h2>Nossas Iniciativas</h2>

                <p>
                    Conheça alguns dos projetos que aproximam mais pessoas
                    do mundo da programação, de forma gratuita.
                </p>

                ${cards}

            </section>

            <section>

                <h2>Como Doar</h2>

                <p>
                    Sua doação ajuda a manter nossos cursos gratuitos.
                    Contribua de duas formas:
                </p>

                <article>
                    <h3>Doação única via Pix</h3>

                    <p>
                        Chave Pix:
                        <strong>31999999911</strong>
                    </p>
                </article>

                <article>
                    <h3>Apadrinhamento mensal</h3>

                    <p>
                        Torne-se um apoiador recorrente e ajude a garantir
                        a continuidade dos nossos projetos.
                    </p>
                </article>

            </section>
        `;
    }

    else if (rota === "#cadastro") {
        conteudo.innerHTML = `
            <section>

                <h2>Cadastro de Voluntário</h2>

                <p>
                    Preencha o formulário para fazer parte da rede
                    de colaboradores da DevAção.
                </p>

                <form
                    id="form-cadastro"
                    novalidate
                >

                    <fieldset>

                        <legend>Dados pessoais</legend>

                        <div>
                            <label for="nome">
                                Nome completo
                            </label>

                            <br>

                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                required
                                minlength="5"
                            >

                            <small
                                class="erro"
                                aria-live="polite"
                            ></small>
                        </div>

                        <div>
                            <label for="email">
                                E-mail
                            </label>

                            <br>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                            >

                            <small
                                class="erro"
                                aria-live="polite"
                            ></small>
                        </div>

                        <div>
                            <label for="cpf">
                                CPF
                            </label>

                            <br>

                            <input
                                type="text"
                                id="cpf"
                                name="cpf"
                                required
                                maxlength="14"
                                pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}"
                                placeholder="000.000.000-00"
                            >

                            <small
                                class="erro"
                                aria-live="polite"
                            ></small>
                        </div>

                        <div>
                            <label for="telefone">
                                Telefone
                            </label>

                            <br>

                            <input
                                type="tel"
                                id="telefone"
                                name="telefone"
                                required
                                maxlength="15"
                                pattern="\\(\\d{2}\\) \\d{4,5}-\\d{4}"
                                placeholder="(00) 00000-0000"
                            >

                            <small
                                class="erro"
                                aria-live="polite"
                            ></small>
                        </div>

                    </fieldset>


                    <fieldset>

                        <legend>Endereço</legend>

                        <div>
                            <label for="cep">
                                CEP
                            </label>

                            <br>

                            <input
                                type="text"
                                id="cep"
                                name="cep"
                                required
                                maxlength="9"
                                pattern="\\d{5}-\\d{3}"
                                placeholder="00000-000"
                            >

                            <small
                                class="erro"
                                aria-live="polite"
                            ></small>
                        </div>

                    </fieldset>


                    <fieldset>

                        <legend>Sobre você</legend>

                        <div>
                            <label for="area">
                                Área de interesse
                            </label>

                            <br>

                            <select
                                id="area"
                                name="area"
                                required
                            >
                                <option value="">
                                    Selecione
                                </option>

                                <option value="oficina">
                                    Oficina de Lógica
                                </option>

                                <option value="trilha-web">
                                    Trilha Web
                                </option>

                                <option value="mentoria">
                                    Mentoria
                                </option>
                            </select>

                            <small
                                class="erro"
                                aria-live="polite"
                            ></small>
                        </div>

                        <div>

                            <label>

                                <input
                                    type="checkbox"
                                    id="termos"
                                    name="termos"
                                    required
                                >

                                Aceito os termos de uso.

                            </label>

                            <small
                                class="erro"
                                aria-live="polite"
                            ></small>
                        </div>

                    </fieldset>


                    <button type="submit">
                        Enviar cadastro
                    </button>


                    <p
                        id="mensagem-sucesso"
                        role="status"
                        aria-live="polite"
                    ></p>

                </form>


                <section>

                    <h2>
                        Voluntários cadastrados
                    </h2>

                    <div id="lista-cadastros"></div>

                </section>

            </section>
        `;

        configurarCadastro();
        mostrarCadastros();
    }


    /*
        Move o foco para o conteúdo principal
        depois da troca de rota da SPA.
    */

    conteudo.focus();
}


function configurarModal() {
    const modal = document.getElementById("modal");

    const abrirModal =
        document.getElementById("abrir-modal");

    const fecharModal =
        document.getElementById("fechar-modal");


    abrirModal.addEventListener("click", () => {

        modal.classList.add("ativo");

        fecharModal.focus();

    });


    fecharModal.addEventListener("click", () => {

        modal.classList.remove("ativo");

        abrirModal.focus();

    });


    modal.addEventListener("keydown", (evento) => {

        if (evento.key === "Escape") {

            modal.classList.remove("ativo");

            abrirModal.focus();

        }

    });
}


window.addEventListener(
    "DOMContentLoaded",
    carregarPagina
);

window.addEventListener(
    "hashchange",
    carregarPagina
);