document.getElementById("logout").addEventListener("click", () => {
    
    const confirmar = confirm("Tem certeza que deseja sair da sua conta?");

    if (confirmar) {
        // Remove os dados de login
        localStorage.removeItem("usuarioLogado");

        localStorage.clear();

        window.location.href = "/view_calazzans/login.html";
    }

});