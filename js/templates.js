const iniciativas = [
    {
        titulo: "Oficina de Lógica de Programação",
        imagem: "../img/oficina.png",
        alt: "Ilustração representando lógica de programação e fluxogramas",
        descricao: "Encontros semanais para iniciantes desenvolverem o raciocínio lógico antes de partir para uma linguagem específica."
    },
    {
        titulo: "Trilha Web Iniciante",
        imagem: "../img/trilha.png",
        alt: "Ilustração representando desenvolvimento web com HTML, CSS e JavaScript",
        descricao: "Curso introdutório de HTML, CSS e JavaScript para construir o primeiro site do zero em 8 semanas."
    },
    {
        titulo: "Mentoria para Primeiro Emprego em Tech",
        imagem: "../img/mentoria.png",
        alt: "Ilustração representando mentoria e orientação de carreira",
        descricao: "Voluntários da área orientam alunos na construção de currículo, portfólio e preparação para entrevistas."
    }
];

export function gerarCardsIniciativas() {
    return iniciativas.map(iniciativa => `
        <article>
            <h3>${iniciativa.titulo}</h3>
            <img src="${iniciativa.imagem}" alt="${iniciativa.alt}">
            <p>${iniciativa.descricao}</p>
        </article>
    `).join("");
}