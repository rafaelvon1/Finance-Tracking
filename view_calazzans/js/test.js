// esse script exibe a varivel saldo no html na label-> Saldo do mês e Despesas do mês:

// Exemplo: valor vindo da API ou calculado
const saldo = 125120.50;
const despesas = 4444;
// Exibe no console
console.log("Saldo:", saldo);
console.log("despesa:", despesas);
// Mostra no HTML formatado
document.getElementById("saldo").textContent = `R$ ${saldo.toFixed(2)}`;
document.getElementById("despesas").textContent = `R$ ${despesas.toFixed(2)}`;
