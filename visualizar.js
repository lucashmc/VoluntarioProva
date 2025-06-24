window.addEventListener("DOMContentLoaded", () => {
    const lista = document.getElementById("lista-ongs");
    const ongs = JSON.parse(localStorage.getItem('ongs')) || [];

    if (ongs.length === 0) {
        lista.innerHTML = "<p>Nenhuma ONG cadastrada ainda.</p>";
        return;
    }

    ongs.forEach((ong, index) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h2>${ong.nomeOng}</h2>
            <p><strong>Responsável:</strong> ${ong.nomeCompleto}</p>
            <p><strong>Telefone:</strong> ${ong.telefone}</p>
            <P><strong>sobre:</strong>${ong.sobre}</p>
            <p><strong>CPF:</strong> ${ong.cpf}</p>
            <p><strong>Endereço:</strong> ${ong.endereco}, ${ong.cidade} - ${ong.estado}, CEP: ${ong.cep}</p>
            <p><strong>Categoria:</strong> ${ong.categoria}</p>
        `;

        lista.appendChild(card);
    });
});