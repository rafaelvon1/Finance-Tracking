async function fetchDados() {
  try {
    const response = await fetch(`${API_URL}/calazzans`);

    if (!response.ok) {
      throw new Error("Erro ao buscar vagas");
    }

    const data = await response.json();
    const tbody = document.getElementById("tabela-produtos");
    tbody.innerHTML = "";

    data.forEach(vaga => {

      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="vaga">${vaga.nome}</td>
        <td class="vaga">${vaga.email}</td>
        <td class="vaga">${vaga.senha}</td>

        </td>
      `;
      tbody.appendChild(tr);
    });
  } catch (error) {
    console.error("Erro ao carregar vagas:", error);
  }
}

// atualiza a pagina a cada 1 segundo mostrando as novas vagas
document.addEventListener("DOMContentLoaded", () => {
  fetchDados();
  setInterval(fetchDados, 1000); 
}); ;
