document.addEventListener("DOMContentLoaded", () => {
  const form_saldo = document.getElementById("FormSaldo");
  const saldoEl = document.getElementById("saldo");
  const id_usuario = 1;
  let editId = null;

  // 🔹 Define o ID de edição e carrega dados
  window.editId = function (id) {
    editId = id;
    carregarDadosSaldo(id);
  };

  // 🔹 Carrega dados no formulário
  async function carregarDadosSaldo(id) {
    console.log("🟡 Carregando dados do saldo...");
    try {
      const response = await fetch(`${API_URL}/saldo/${id}`);
      if (!response.ok) throw new Error("Erro ao buscar saldo");

      const saldo = await response.json();
      document.getElementById("descricaoRendimento").value = saldo.descricao_saldo || "";
      document.getElementById("tipoRendimento").value = saldo.tipo_saldo || "";
      document.getElementById("valorRendimento").value = saldo.valor || "";
      document.getElementById("dataRendimento").value = saldo.data_saldo?.split("T")[0] || "";
      document.getElementById("frequencia").value = saldo.frequencia || "";
      
      console.log("💾 Dados carregados:", saldo);
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
      alert("Falha ao carregar informações para edição.");
    }
  }

  // 🔹 Envio do formulário
  form_saldo.addEventListener("submit", async (event) => {
    event.preventDefault();

    const descricao = document.getElementById("descricaoRendimento").value;
    const tipo = document.getElementById("tipoRendimento").value;
    const valor = parseFloat(document.getElementById("valorRendimento").value);
    const data = document.getElementById("dataRendimento").value;
    const frequencia = document.getElementById("frequencia").value;

    if (!descricao) return alert("Por favor, preencha a descrição do saldo.");
    if (!tipo) return alert("Selecione o tipo de saldo.");
    if (isNaN(valor) || valor <= 0) return alert("Informe um valor válido e positivo.");
    if (!data) return alert("Selecione uma data para o saldo.");
    if (!frequencia) return alert("Selecione a frequência do saldo.");

    const payload = {
      id: editId || undefined,
      id_usuario,
      descricao_saldo: descricao,
      tipo_saldo: tipo,
      valor,
      data_saldo: data,
      frequencia
    };

    try {
      const endpoint = editId ? `${API_URL}/saldo/update` : `${API_URL}/saldo/add`;
      const method = editId ? "PUT" : "POST"; // se o backend espera sempre POST

      const response = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error(`Erro: ${response.status}`);
      const result = await response.json();
      
      if (editId) {
        alert("✅ Saldo atualizado com sucesso!");
      } else {
        alert("✅ Saldo cadastrado com sucesso!");
      }

      // 🔹 Recarrega a página após sucesso
      window.location.reload();

    } catch (error) {
      console.error("❌ Erro ao enviar os dados:", error);
      alert("Falha ao salvar o saldo. Verifique o console para detalhes.");
    }
  });
});
