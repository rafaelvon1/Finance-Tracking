document.addEventListener("DOMContentLoaded", async () => {
  const saldoEl = document.getElementById("saldo");
  const despesasEl = document.getElementById("despesas");
  const listaSaldoEl = document.querySelector("#modal-listaSaldo ul");
  const listaDespesasEl = document.querySelector("#modal-listaDespesas ul");
  const listaProximosEl = document.querySelector(".lista-datas");
  const listaDespesaQuadEl = document.querySelector(".lista-itens");
  const valorQuadradoEl = document.querySelector(".quadrado .valor");
  const valorDespesaQuadradoEl = document.querySelector(".quadrado .valor_despesa");
  const id_usuario = 1; // Exemplo fixo — depois será dinâmico via login

  try {
    // 🔹 Busca os saldos e despesas do usuário
    const [responseSaldo, responseDespesas] = await Promise.all([
      fetch(`${API_URL}/saldo/user?id_usuario=${id_usuario}`),
      fetch(`${API_URL}/despesas/user?id_usuario=${id_usuario}`)
    ]);

    const dataSaldos = await responseSaldo.json();
    const dataDespesas = await responseDespesas.json();

    console.log("Saldos recebidos:", dataSaldos);
    console.log("Despesas recebidas:", dataDespesas);

    // 🔹 Cálculo de totais
    const totalSaldo = Array.isArray(dataSaldos)
      ? dataSaldos.reduce((acc, saldo) => acc + (Number(saldo.valor) || 0), 0)
      : Number(dataSaldos.valor || 0);

    const totalDespesas = Array.isArray(dataDespesas)
      ? dataDespesas.reduce((acc, desp) => acc + (Number(desp.valor) || 0), 0)
      : Number(dataDespesas.valor || 0);

    // 🔹 Exibição no topo
    saldoEl.textContent = `R$ ${totalSaldo.toFixed(2)}`;
    despesasEl.textContent = `R$ ${totalDespesas.toFixed(2)}`;

    // 🔹 Saldo líquido no quadrado principal
    const saldoLiquido = totalSaldo - totalDespesas;
    valorQuadradoEl.textContent = `R$ ${saldoLiquido.toFixed(2)}`;

    //Despesa

    valorDespesaQuadradoEl.textContent = `R$ ${totalDespesas.toFixed(2)}`
    // 🔹 Limpa listas antes de preencher
    listaSaldoEl.innerHTML = "";
    listaDespesasEl.innerHTML = "";
    listaProximosEl.innerHTML = "";
    listaDespesaQuadEl.innerHTML="";
    // ============================================================
    // 🔸 LISTA DE SALDOS (modal + quadrado principal)
    // ============================================================
    if (Array.isArray(dataSaldos)) {
      dataSaldos.forEach((saldo) => {
        
        // --- Modal ---
        const liModal = document.createElement("li");
        liModal.innerHTML = `
          ${saldo.tipo_saldo}: R$ ${Number(saldo.valor).toFixed(2)} Data: ${saldo.data_saldo} 
          <a href="#" onclick="editId(${saldo.id}); alterarSaldo(${saldo.id});" title="Editar saldo" style="margin-left:10px;">🖋️</a>
          <a href="#" onclick="excluirSaldo(${saldo.id})" title="Excluir saldo" style="margin-left:5px;color:red;">🗑️</a>
        `;
        listaSaldoEl.appendChild(liModal);
        });
        // --- Quadrado principal (Próximos recebimentos) ---
        dataSaldos.slice(0,5).forEach((saldo) => {
        const liQuad = document.createElement("li");
        liQuad.innerHTML = `
          <span>R$ ${Number(saldo.valor).toFixed(2)}</span>
          <span>${saldo.tipo_saldo}</span>
          <span>${saldo.data_saldo}</span>
        `;
        listaProximosEl.appendChild(liQuad);
      });
    }

    // ============================================================
    // 🔸 LISTA DE DESPESAS (modal)
    // ============================================================
    if (Array.isArray(dataDespesas)) {
      dataDespesas.forEach((desp) => {
        

        const li = document.createElement("li");
        li.innerHTML = `
          R$ ${Number(desp.valor).toFixed(2)} 
          <small>(${desp.tag})</small> - ${desp.data_despesa}
          <a href="#" onclick="editId_despesa(${desp.id});alterarDespesa(${desp.id});" title="Editar despesa" style="margin-left:10px;">🖋️</a>
          <a href="#" onclick="excluirDespesa(${desp.id})" title="Excluir despesa" style="margin-left:5px;color:red;">🗑️</a>
        `;
        listaDespesasEl.appendChild(li);

        // --- Quadrado principal (Próximos recebimentos) ---
        const liQuad = document.createElement("li");
        liQuad.innerHTML = `
          <span>R$ ${Number(desp.valor).toFixed(2)}</span>
          <span>${desp.descricao_despesa}</span>
        `;
        listaDespesaQuadEl.appendChild(liQuad);
      });
    }

  } catch (error) {
    console.error("Erro ao carregar dados:", error);
    saldoEl.textContent = "Erro ao carregar saldo";
    despesasEl.textContent = "Erro ao carregar despesas";
  }
});


// ============================================================
// 🔹 Funções para Saldo
// ============================================================
// 🔹 Função principal de alteração
window.alterarSaldo = async function () {
  try {
    // Fecha outros modais antes
    fecharTodosModais();
    
    // Abre o modal de adicionar (reutilizado para edição)
    const modalAdicionar = document.getElementById("modal-adicionar");
    const modal = document.getElementById("modal"); // fundo/overlay
    if (modalAdicionar) modalAdicionar.style.display = "block";
    if (modal) modal.style.display = "block";

    // 🔹 Carrega os dados do saldo e preenche o formulário
  } catch (error) {
    console.error("Erro ao abrir modal de edição:", error);
    alert("Erro ao carregar dados para edição do saldo.");
  }
};


window.excluirSaldo = async function (id) {
  if (!confirm("Deseja realmente excluir este saldo?")) return;
  try {
    const response = await fetch(`${API_URL}/saldo/delete/${id}`, { method: "DELETE" });
    if (!response.ok) throw new Error("Erro ao excluir saldo");
    alert("🗑️ Saldo excluído com sucesso!");
    location.reload();
  } catch (error) {
    console.error(error);
    alert("Falha ao excluir saldo");
  }
};

// ============================================================
// 🔹 Funções para Despesas
// ============================================================
window.alterarDespesa = function () {
  try {
    // Fecha outros modais antes
    fecharTodosModais();
    
    // Abre o modal de adicionar (reutilizado para edição)
    const modalAdicionar = document.getElementById("modal-remover");
    const modal = document.getElementById("modal"); // fundo/overlay
    if (modalAdicionar) modalAdicionar.style.display = "block";
    if (modal) modal.style.display = "block";

    // 🔹 Carrega os dados do saldo e preenche o formulário
  } catch (error) {
    console.error("Erro ao abrir modal de edição:", error);
    alert("Erro ao carregar dados para edição da despesa.");
  }
};

window.excluirDespesa = async function (id) {
  if (!confirm("Deseja realmente excluir esta despesa?")) return;
  try {
    const response = await fetch(`${API_URL}/despesas/delete/${id}`, { method: "DELETE" });
    if (!response.ok) throw new Error("Erro ao excluir despesa");
    alert("🗑️ Despesa excluída com sucesso!");
    location.reload();
  } catch (error) {
    console.error(error);
    alert("Falha ao excluir despesa");
  }
};
