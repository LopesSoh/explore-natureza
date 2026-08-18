const imagens = document.querySelectorAll(".imagem-item");
const conteudos = document.querySelectorAll(".conteudo-tema");


imagens.forEach(function(imagem) {

    imagem.addEventListener("click", function() {

        const tema = imagem.dataset.tema;


        conteudos.forEach(function(conteudo) {

            conteudo.classList.remove("ativo");

        });


        const conteudoSelecionado = document.getElementById(tema);

        conteudoSelecionado.classList.add("ativo");

    });

});