export function obterCadastros() {
    return JSON.parse(localStorage.getItem("cadastros")) || [];
}

export function salvarCadastro(cadastro) {
    const cadastros = obterCadastros();

    cadastros.push(cadastro);

    localStorage.setItem(
        "cadastros",
        JSON.stringify(cadastros)
    );
}