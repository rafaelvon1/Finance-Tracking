document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("FormSaldo");
  const saldoEl = document.getElementById("saldo"); // Elemento HTML que mostra o saldo
  const id_usuario = 1; // Exemplo fixo (deverá vir do login futuramente)

  form.addEventListener("submit", async (event) => {
    event.preventDefault(); // impede o reload da página

    // 🔹 Captura os valores do formulário
    const descricao = document.getElementById("descricaoRendimento").value;
    const tipo = document.getElementById("tipoRendimento").value;
    const valor = parseFloat(document.getElementById("valorRendimento").value);
    const data = document.getElementById("dataRendimento").value;
    const frequencia = document.getElementById("frequencia").value;

    // 🔹 Validações básicas
    if (!descricao) return alert("Por favor, preencha a descrição do saldo.");
    if (!tipo) return alert("Selecione o tipo de saldo.");
    if (isNaN(valor) || valor <= 0) return alert("Informe um valor válido e positivo.");
    if (!data) return alert("Selecione uma data para o saldo.");
    if (!frequencia) return alert("Selecione a frequência do saldo.");

    // 🔹 Monta o objeto conforme o formato esperado pelo backend
    const payload = {
      id_usuario,
      descricao_saldo: descricao,
      tipo_saldo: tipo,
      valor: valor,
      data_saldo: data,
      frequencia: frequencia
    };

    console.log("Enviando payload:", payload);

    try {
      const response = await fetch("http://localhost:8080/saldo/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error(`Erro: ${response.status}`);
      const result = await response.json();

      alert("✅ Saldo cadastrado com sucesso!");
      form.reset();

      // 🔹 Atualiza o saldo na tela somando o novo valor
      let saldoAtual = Number(saldoEl.textContent.replace("R$", "").replace(",", ".")) || 0;
      saldoAtual += valor;
      saldoEl.textContent = `R$ ${saldoAtual.toFixed(2)}`;

    } catch (error) {
      console.error("❌ Erro ao enviar os dados:", error);
      alert("Falha ao adicionar saldo. Verifique o console para detalhes.");
    }
  });
});
