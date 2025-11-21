const form = document.getElementById('login');

        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            const email = document.getElementById('email').value;
            const senha = document.getElementById('senha').value;

            //Monta objeto DTO LoginRequest 
            const dadosLogin = {
                email: email,
                senha: senha
            };

            try {
                const response = await fetch('http://localhost:8080/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(dadosLogin)
                });

                if (response.ok) {
                    const usuario = await response.json();
                    alert("Login realizado com sucesso! Bem-vindo " + usuario.email);

                    setTimeout(() => {
                window.location.href = "/view_calazzans/GerenciarCalazzans.html"
            }, 1000)

                } else {
                    const erroTexto = await response.text();
                    document.getElementById('mensagem').innerText = erroTexto
                }

            } catch (error) {
                console.error('Erro:', error);
                document.getElementById('mensagem').innerText = "Erro ao conectar com o servidor."
            }
        })