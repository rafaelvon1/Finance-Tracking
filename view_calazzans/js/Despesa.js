document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("FormDespesa");
  form.addEventListener("submit", async (event) => {
    event.preventDefault(); // impede reload da página

    // 🔹 Captura dos valores do formulário
    const descricao = document.getElementById("descricaoDespesa").value.trim();
    const dataISO = document.getElementById("dataDespesa").value;
    const valor = parseFloat(document.getElementById("valorDespesa").value);
    const status = document.getElementById("statusDespesa").value;
    const tag = document.getElementById("tagsDespesa").value;
    const frequencia = document.getElementById("frequenciaDespesa").value;
    const pagamento = document.getElementById("pagamentoDespesa").value;
    const parcelas = parseInt(document.getElementById("parcelasDespesa").value);

    // 🔹 Validação dos campos obrigatórios
    if (!descricao) {
      alert("Por favor, preencha a descrição da despesa.");
      return;
    }

    if (isNaN(valor) || valor <= 0) {
      alert("Informe um valor de despesa válido e positivo.");
      return;
    }

    if (!dataISO) {
      alert("Selecione uma data para a despesa.");
      return;
    }

    if (!parcelas || parcelas < 1) {
      alert("O número de parcelas deve ser no mínimo 1.");
      return;
    }

    // 🔹 Formatar data para o formato DD/MM/YYYY
    const partesData = dataISO.split("-");
    const dataFormatada = `${partesData[2]}/${partesData[1]}/${partesData[0]}`;
    document.getElementById("dataDespesaFormatada").value = dataFormatada;

    // 🔹 Simulação de payload (objeto que seria enviado)
    const payload = {
      id_usuario: 1, // exemplo fixo
      descricao_despesa: descricao,
      valor_despesa: valor,
      data_despesa: dataFormatada,
      status_despesa: status,
      tag_despesa: tag,
      frequencia_despesa: frequencia,
      pagamento_despesa: pagamento,
      parcelas_despesa: parcelas
    };

    // 🔹 Exibe no alert (modo de teste)
    alert(
      `✅ Formulário válido!\n\n` +
      `Descrição: ${descricao}\n` +
      `Valor: R$ ${valor.toFixed(2)}\n` +
      `Data: ${dataFormatada}\n` +
      `Status: ${status}\n` +
      `Tag: ${tag}\n` +
      `Frequência: ${frequencia}\n` +
      `Pagamento: ${pagamento}\n` +
      `Parcelas: ${parcelas}\n\n` +
      `Os dados não foram enviados pois o backend foi desativado.`
    );

    // 🔹 Aqui futuramente entrará o fetch() para sua API:
    /*
    try {
      const response = await fetch("http://localhost:8080/despesa/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error(`Erro: ${response.status}`);
      const result = await response.json();

      alert("Despesa adicionada com sucesso!");
      form.reset();

    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
      alert("Falha ao adicionar despesa. Tente novamente.");
    }
    */
  });
});
