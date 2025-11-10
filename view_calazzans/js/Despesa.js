document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("FormDespesa");
  const DespesaEl = document.getElementById("Despesas");
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

    // 🔹 Criação do objeto (payload) no formato esperado pelo backend
    const payload = {
      id_usuario: 1, // substitua pelo ID real do usuário logado
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
      const response = await fetch("http://localhost:8080/despesas/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error(`Erro: ${response.status}`);
      const result = await response.json();

      alert("✅ Despesa adicionada com sucesso!");
      form.reset();

      // 🔹 Atualiza o saldo na tela somando o novo valor
      let DespesaAtual = Number(DespesaEl.textContent.replace("R$", "").replace(",", ".")) || 0;
      DespesaAtual += valor;
      DespesaEl.textContent = `R$ ${DespesaAtual.toFixed(2)}`;

    } catch (error) {
      console.error("❌ Erro ao enviar os dados:", error);
      alert("Falha ao adicionar despesa. Verifique o console para mais detalhes.");
    }
  });
});

