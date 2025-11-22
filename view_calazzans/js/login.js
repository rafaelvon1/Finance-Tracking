document.getElementById("login").addEventListener("submit",async function(e){
            e.preventDefault();

            const email = document.getElementById("email").value;
            const senha = document.getElementById("senha").value;

            const response = await fetch("http://localhost:8080/login",{
                method :  "POST",
                headers:{
                    "Content-Type": "application/json"
                }, body: JSON.stringify({username: document.getElementById("email").value,
                password: document.getElementById("senha").value
                })
            })
            const msg = document.getElementById("msg")

            //se user e senha estiverem corretor entra na página
            if(response.ok){
                const text = await response.text()
                msg.style.color = "green"
                msg.textContent = text


            setTimeout(() => {
                window.location.href = "../view/GerenciarCalazzans.html";
        }, 1000);


            }else {
                const text = await response.text()
                msg.style.color = "red"
                msg.textContent = text
            }
        });