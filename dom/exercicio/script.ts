const links = document.querySelectorAll('.link');

links.forEach((link) => {
  if( link  instanceof HTMLAnchorElement){
    link.style.color = 'red'
  } else if(link instanceof HTMLButtonElement){
    link.style.color = 'red'
  }
})
function limitarTexto(texto) {
    // Se o texto tiver mais que 50 caracteres...
    if (texto.length > 50) {
        // Corta do caractere 0 até o 47 e junta com os 3 pontinhos
        return texto.slice(0, 47) + '...';
    }
    
    // Se for menor ou igual a 50, devolve o texto original sem mexer
    return texto;
}

document.addEventListener('DOMContentLoaded', () => {
    const elemento = document.querySelector('[aria-current="page"]');
    
    if (elemento) {
        // Pega o texto e limpa os espaços sobrando
        let textoOriginal = elemento.textContent.trim(); 
        
        // Aplica a nossa regra de limite
        let textoFormatado = limitarTexto(textoOriginal);
        
        console.log("Resultado final:", textoFormatado);
        
        // Se quiser devolver o texto cortado para a tela:
        // elemento.textContent = textoFormatado;
    }
});