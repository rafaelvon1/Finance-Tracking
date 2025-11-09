document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("FormMeta");
  
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // impede o reload da página

    // 🔹 Captura os valores do formulário
    const ValorMeta = document.getElementById("valorMeta").value;
    const id_usuario = 1; // Exemplo fixo, será armazenado no login 

    // 🔹 Monta o objeto
    const payload = {
      id_usuario,
      meta_gasto: ValorMeta
    };

    // 🔹 Mostra os dados capturados
    alert(`
🧾 Meta capturada:

• Meta: R$ ${payload.meta_gasto}
• ID Usuário: ${payload.id_usuario}
    `);
  });
});
