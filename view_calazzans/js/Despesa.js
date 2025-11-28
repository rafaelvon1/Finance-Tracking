document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("FormDespesa");
  const DespesaEl = document.getElementById("despesas");
  const id_usuario = usuario.id_usuario;
  let editId = null;
  window.editId_despesa = function (id) {
  editId = id;
  carregarDadosDespesa(id);
  };

  // 🔹 Carrega dados no formulário de despesas
  async function carregarDadosDespesa(id) {
    console.log("🟡 Carregando dados da despesa...");
    try {
      console.log("caiu onde deveria",id)
      const response = await fetch(`${API_URL}/despesas/${id}`);
      if (!response.ok) throw new Error("Erro ao buscar despesa");

      const despesa = await response.json();

      // Preenche os campos do formulário
      document.getElementById("descricaoDespesa").value = despesa.descricao_despesa || "";
      document.getElementById("valorDespesa").value = despesa.valor || "";
      document.getElementById("dataDespesa").value = despesa.data_despesa?.split("T")[0] || "";
      document.getElementById("pagamentoDespesa").value = despesa.forma_pagamento || "";
      document.getElementById("frequenciaDespesa").value = despesa.frequencia || "";
      document.getElementById("parcelasDespesa").value = despesa.parcelas || "";
      document.getElementById("statusDespesa").value = despesa.status_despesa || "";
      document.getElementById("tagsDespesa").value = despesa.tag || "";

      console.log("💾 Dados carregados para edição:", despesa);
    } catch (error) {
      console.error("❌ Erro ao carregar dados:", error);
      alert("Falha ao carregar informações da despesa para edição.");
    }
  }



  form.addEventListener("submit", async (event) => {
    event.preventDefault(); // impede reload da página

    // 🔹 Captura dos valores do formulário
    const descricao = document.getElementById("descricaoDespesa").value.trim();
    const dataISO = document.getElementById("dataDespesa").value;
    const valor = parseFloat(document.getElementById("valorDespesa").value);
    const status = document.getElementById("statusDespesa").value;
    const tag = document.getElementById("tagsDespesa").value;
    const frequencia = document.getElementById("frequenciaDespesa").value;
    const forma_pagamento = document.getElementById("pagamentoDespesa").value;
    const parcelas = parseInt(document.getElementById("parcelasDespesa").value);

    // 🔹 Validação dos campos obrigatórios
    if (!descricao) return alert("Por favor, preencha a descrição da despesa.");
    if (isNaN(valor) || valor <= 0) return alert("Informe um valor válido e positivo.");
    if (!dataISO) return alert("Selecione uma data para a despesa.");
    if (!parcelas || parcelas < 1) return alert("O número de parcelas deve ser no mínimo 1.");

    // 🔹 Converter data para formato ISO (exemplo compatível com backend)
    const data_despesa = new Date(dataISO).toISOString();
    console.log
    // 🔹 Criação do objeto (payload) no formato esperado pelo backend
    const payload = {
      id: editId || undefined,
      id_usuario, // substitua pelo ID real do usuário logado
      descricao_despesa: descricao,
      valor: valor,
      tag: tag,
      status_despesa: status,
      frequencia: frequencia,
      forma_pagamento: forma_pagamento,
      parcelas: parcelas,
      meta_gasto: 0.0, // evita erro de null no backend
      data_despesa: data_despesa
    };

    console.log("Enviando payload:", payload);

    // 🔹 Envio para a API
    try {
      
      const endpoint = editId ? `${API_URL}/despesas/update` : `${API_URL}/despesas/add`;
      const method = editId ? "PUT" : "POST"; // se o backend espera sempre POST

      const response = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error(`Erro: ${response.status}`);
      const result = await response.json();
      
      if (editId) {
        alert("✅ Despesa atualizado com sucesso!");
      } else {
        alert("✅  cadastrado com sucesso!");
      }

      // 🔹 Recarrega a página após sucesso
      window.location.reload();

    } catch (error) {
      console.error("❌ Erro ao enviar os dados:", error);
      alert("Falha ao salvar o saldo. Verifique o console para detalhes.");
    }
  });
});

