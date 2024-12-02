        // Função para mostrar a notificação
        document.getElementById("botao-notificacao").addEventListener("click", function() {
            var notificacao = document.getElementById("notificacao");
            
            // Exibe a notificação
            notificacao.style.display = "block";

            // Esconde a notificação após 3 segundos
            setTimeout(function() {
                notificacao.style.display = "none";
            }, 3000); // 3000 milissegundos (3 segundos)
        });