document.addEventListener("DOMContentLoaded", async () => {
  const saldoEl = document.getElementById("saldo");
  const despesasEl = document.getElementById("despesas");
  const id_usuario = 1; // Exemplo fixo (depois será dinâmico via login)

  try {
    // 🔹 Busca os saldos do usuário
    const responseSaldo = await fetch(`http://localhost:8080/saldo/user?id_usuario=${id_usuario}`);
    const dataSaldos = await responseSaldo.json();

    // 🔹 Busca as despesas do usuário
    const responseDespesas = await fetch(`http://localhost:8080/despesas/user?id_usuario=${id_usuario}`);
    const dataDespesas = await responseDespesas.json();

    console.log("Saldos recebidos:", dataSaldos);
    console.log("Despesas recebidas:", dataDespesas);

    // 🔹 Soma todos os saldos
    const totalSaldo = Array.isArray(dataSaldos)
      ? dataSaldos.reduce((acc, saldo) => acc + (Number(saldo.valor) || 0), 0)
      : Number(dataSaldos.valor || 0);

    // 🔹 Soma todas as despesas
    const totalDespesas = Array.isArray(dataDespesas)
      ? dataDespesas.reduce((acc, desp) => acc + (Number(desp.valor) || 0), 0)
      : Number(dataDespesas.valor || 0);

    // 🔹 Exibe no HTML
    saldoEl.textContent = `R$ ${totalSaldo.toFixed(2)}`;
    despesasEl.textContent = `R$ ${totalDespesas.toFixed(2)}`;
  } catch (error) {
    console.error("Erro ao carregar dados:", error);
    saldoEl.textContent = "Erro ao carregar saldo";
    despesasEl.textContent = "Erro ao carregar despesas";
  }
});
