document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("FormSaldo");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // impede o reload da página

    // 🔹 Captura os valores do formulário
    const descricao = document.getElementById("descricaoRendimento").value;
    const tipo = document.getElementById("tipoRendimento").value;
    const valor = parseFloat(document.getElementById("valorRendimento").value);
    const data = document.getElementById("dataRendimento").value;
    const frequencia = document.getElementById("frequencia").value;

    const id_usuario = 1; // Exemplo fixo esse id sera armazenado no login 

    // 🔹 Monta o objeto
    const payload = {
      id_usuario,
      descricao_rendimento: descricao,
      tipo_rendimento: tipo,
      valor_rendimento: valor,
      data_rendimento: data,
      frequencia_rendimento: frequencia
    };

    // 🔹 Mostra os dados capturados
    alert(`
🧾 Rendimento capturado:

• Descrição: ${payload.descricao_rendimento}
• Tipo: ${payload.tipo_rendimento}
• Valor: R$ ${payload.valor_rendimento.toFixed(2)}
• Data: ${payload.data_rendimento}
• Frequência: ${payload.frequencia_rendimento}
• ID Usuário: ${payload.id_usuario}
    `);
  });
});
