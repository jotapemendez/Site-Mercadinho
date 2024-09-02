 
// Função barra de pesquisa

const products = ["Produto 1", "Produto 2", "Produto 3", "Outro Produto", "Mais um Produto"];

function search() {
    const input = document.getElementById("search-text");
    const filter = input.value.toLowerCase();
    const suggestions = document.getElementById("suggestions");
    
    // Limpa as sugestões anteriores
    suggestions.innerHTML = '';
    
    // Verifica se o campo de busca está vazio
    if (!filter) {
        suggestions.style.display = 'none';
        return;
    }

    // Filtra os produtos com base no texto digitado
    const filteredProducts = products.filter(product => product.toLowerCase().includes(filter));

    // Se houver resultados, mostre-os
    if (filteredProducts.length > 0) {
        filteredProducts.forEach(product => {
            const suggestionItem = document.createElement("div");
            suggestionItem.textContent = product;
            suggestionItem.onclick = () => {
                input.value = product;
                suggestions.style.display = 'none';
            };
            suggestions.appendChild(suggestionItem);
        });
        suggestions.style.display = 'block';
    } else {
        suggestions.style.display = 'none';
    }
}

// Esconde as sugestões quando o usuário clica fora
document.addEventListener("click", function(e) {
    const suggestions = document.getElementById("suggestions");
    if (!suggestions.contains(e.target) && e.target !== document.getElementById("search-text")) {
        suggestions.style.display = 'none';
    }
});





// INTERATIVIDADE DO SLIDER

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
     nextImage();
}, 2000)


function nextImage(){
     count++;
     if(count>3){
          count = 1;
     }

     document.getElementById("radio"+count).checked = true;
}