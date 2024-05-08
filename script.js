document.addEventListener("DOMContentLoaded", () => {
    function quandoVisivel(selector1, selector2) {
      const elemento = document.querySelector(selector1, selector2);
      if (elemento) {
        const observador = new IntersectionObserver((entradas) => {
          entradas.forEach(entrada => {
            if (entrada.isIntersecting && entrada.intersectionRatio >= 0.2) { // Limite de 50%
              elemento1.style.filter = "blur(5px)"; // Aplicar blur
              elemento1.style.transition = "filter 0.3s ease-in-out"; // Transição suave
            } else {
              elemento1.style.filter = "none"; // Remover blur
              elemento1.style.transition = "filter 0.3s ease-in-out"; // Transição suave
            }          

          });  
        }, {
          threshold: 0.2  // Limiar único de 50%
        });

        let expandido = false;
        const observador2 = new IntersectionObserver((entradas) => {
            entradas.forEach(entrada => {
                if (entrada.isIntersecting) {
                    if (!expandido) {
                      // Expande o elemento se ainda não tiver expandido
                      elemento2.style.transition = "width 0.4s linear";
                      elemento2.style.width = "100vw";
                      elemento2.style.borderRadius = "0";
                      expandido = true;
                    }
                  } else if (entrada.boundingClientRect.y > 0) {
                    // Se o elemento não está visível e o scroll está subindo
                    elemento2.style.transition = "width 0.2s ease-in-out";
                    elemento2.style.width = "30vw";
                    elemento2.style.borderTopLeftRadius = "30px";
                    elemento2.style.borderTopRightRadius = "30px";
                    expandido = false;
                  }
  
            });  
          }, {
            threshold: 0.85  // Limiar único de 50%
          });

        const elemento1 = document.querySelector('.backgroundSection1'); // Selecionar elemento a ser desfocado
        const elemento2 = document.querySelector('.backgroundSection2');

  
        observador.observe(elemento);
        observador2.observe(elemento);

      } else {
        console.log("Elemento não encontrado");
      }
    }
  
    // Uso da função
    quandoVisivel('.backgroundSection2', '.backgroundSection1');
  });
  