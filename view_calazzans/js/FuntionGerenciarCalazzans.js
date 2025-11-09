document.addEventListener("DOMContentLoaded", () => {
            // Dados estáticos para os gráficos
            const vendasMensaisLabels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'];
            const vendasMensaisValores = [500, 750, 600, 900, 800, 1100]; // Valores de exemplo
            
            const despesasCategoriaLabels = ['Alimentação', 'Transporte', 'Moradia', 'Lazer', 'Serviços', 'Outros'];
            const despesasCategoriaValores = [300, 150, 200, 100, 50, 50]; // Total: 850 (Exemplo)

            // Função para mostrar/ocultar despesas
            window.toggleDespesas = function(botao) {
                const container = botao.closest('.despesa-lista');
                const itensOcultos = container.querySelectorAll('.oculto');
                const ocultosVisiveis = itensOcultos.length > 0 && itensOcultos[0].style.display === 'list-item';

                if (ocultosVisiveis) {
                    itensOcultos.forEach(item => item.style.display = 'none');
                    botao.textContent = 'Ver mais';
                } else {
                    itensOcultos.forEach(item => item.style.display = 'list-item');
                    botao.textContent = 'Ver menos';
                }
            }


            // Gráfico de Pizza - Despesas por Categoria
            const ctxPizza = document.getElementById('graficoDespesasPizza').getContext('2d');
            const graficoDespesasPizza = new Chart(ctxPizza, {
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
                                font: {
                                    size: 12
                                }
                            }
                        }
                    }
                }
            });


            // --- Lógica do Modal ---
            const modal = document.getElementById('modal');
            const modalAdicionar = document.getElementById('modal-adicionar');
            const modalRemover = document.getElementById('modal-remover');
            const modalMeta = document.getElementById('modal-meta');

            window.abrirModal = function(tipo) {
                fecharModal();
                if (tipo === 'adicionar') {
                    modalAdicionar.style.display = 'block';
                } else if (tipo === 'remover') {
                    modalRemover.style.display = 'block';
                } else if (tipo === 'meta') {
                    modalMeta.style.display = 'block';
                }
                modal.style.display = 'block';
            }

            window.fecharModal = function() {
                modal.style.display = 'none';
                modalAdicionar.style.display = 'none';
                modalRemover.style.display = 'none';
                modalMeta.style.display = 'none';
            }

            window.onclick = function(event) {
                if (event.target === modal) {
                    fecharModal();
                }
            }
            
        });