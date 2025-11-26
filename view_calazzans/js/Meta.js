document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("FormMeta");

  form.addEventListener("submit", async (event) => {
    event.preventDefault(); // impede o reload da página

    // 🔹 Captura os valores do formulário
    const ValorMeta = document.getElementById("valorMeta").value;
    const id_usuario = usuario.id_usuario; // Exemplo fixo, será dinâmico quando tiver login

    // 🔹 Monta o objeto
    const payload = {
      id_usuario,
      meta: ValorMeta
    };

    // 🔹 Mostra os dados capturados (opcional)
    alert(`
🧾 Meta capturada:

• Meta: R$ ${payload.meta}
• ID Usuário: ${payload.id_usuario}
    `);

    try {
      // 🔹 Envia pro backend
      const response = await fetch(
        `${API_URL}/despesas/meta?id_usuario=${payload.id_usuario}&meta=${payload.meta}`,
        {
          method: "PUT"
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao atualizar meta!");
      }

      alert("✅ Meta atualizada com sucesso!");
    } catch (error) {
      console.error("Erro:", error);
      alert("❌ Falha ao atualizar meta!");
    }
  });
});
