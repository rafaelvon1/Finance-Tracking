document.addEventListener("DOMContentLoaded", async () => {
    const id_usuario = 1;

    try {
        // 🔹 Busca despesas do usuário
        const response = await fetch(`${API_URL}/despesas/user?id_usuario=${id_usuario}`);
        if (!response.ok) throw new Error("Erro ao buscar despesas do usuário");
        const tags_despesa = await response.json();

        if (Array.isArray(tags_despesa) && tags_despesa.length > 0) {
            // Preparar arrays para gráfico
            const despesasCategoriaLabels = tags_despesa.map(d => d.tag);
            const despesasCategoriaValores = tags_despesa.map(d => d.valor);

            // Gráfico de Pizza - Despesas por Categoria
            const ctxPizza = document.getElementById('graficoDespesasPizza').getContext('2d');
            new Chart(ctxPizza, {
                type: 'doughnut',
                data: {
                    labels: despesasCategoriaLabels,
                    datasets: [{
                        label: 'Despesas por Categoria',
                        data: despesasCategoriaValores,
                        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
                        borderColor: '#fff',
                        borderWidth: 2,
                        hoverOffset: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                padding: 15,
                                boxWidth: 12,
                                font: { size: 12 }
                            }
                        }
                    }
                }
            });
        }
    } catch (error) {
        console.error("❌ Erro ao carregar despesas para o gráfico:", error);
    }

    // --- Modais ---
    const modal = document.getElementById('modal');
    const modalAdicionar = document.getElementById('modal-adicionar');
    const modalRemover = document.getElementById('modal-remover');
    const modalMeta = document.getElementById('modal-meta');
    const modalListaSaldo = document.getElementById('modal-listaSaldo');
    const modalListaDespesas = document.getElementById('modal-listaDespesas');

    // Abrir modais individuais
    window.abrirModalAdicionar = () => { fecharTodosModais(); modalAdicionar.style.display = 'block'; modal.style.display = 'block'; };
    window.abrirModalRemover = () => { fecharTodosModais(); modalRemover.style.display = 'block'; modal.style.display = 'block'; };
    window.abrirModalMeta = () => { fecharTodosModais(); modalMeta.style.display = 'block'; modal.style.display = 'block'; };
    window.abrirModalListaSaldo = () => { fecharTodosModais(); modalListaSaldo.style.display = 'block'; modal.style.display = 'block'; };
    window.abrirModalListaDespesas = () => { fecharTodosModais(); modalListaDespesas.style.display = 'block'; modal.style.display = 'block'; };

    // Fechar todos os modais
    window.fecharTodosModais = () => {
        modalAdicionar.style.display = 'none';
        modalRemover.style.display = 'none';
        modalMeta.style.display = 'none';
        modalListaSaldo.style.display = 'none';
        modalListaDespesas.style.display = 'none';
        modal.style.display = 'none';
    };

    window.fecharModal = window.fecharTodosModais;
    window.fecharModalListaSaldo = () => { modalListaSaldo.style.display = 'none'; modal.style.display = 'none'; };
    window.fecharModalListaDespesas = () => { modalListaDespesas.style.display = 'none'; modal.style.display = 'none'; };

    // Fechar modal ao clicar fora
    window.onclick = (event) => {
        if (event.target === modal) fecharTodosModais();
    };
});
