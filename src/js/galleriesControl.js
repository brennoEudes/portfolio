document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggleGallery");
    const gallery1 = document.querySelector(".gallery");
    const gallery2 = document.querySelector(".gallery-2");
    
    // Adiciona a classe "active" à gallery 1 no início
    gallery1.classList.add("active");
    toggleButton.classList.add("toggle-left"); // O botão começa na posição "left"
  
    // Alterna entre as galerias ao clicar no switch
    toggleButton.addEventListener("click", () => {
      if (gallery1.classList.contains("active")) {
        // Exibe gallery-2 e oculta gallery-1
        gallery1.classList.remove("active");
        gallery2.classList.add("active");
        
        // Atualiza o estado do switch (posição)
        toggleButton.classList.remove("toggle-left");
        toggleButton.classList.add("toggle-right");
      } else {
        // Exibe gallery-1 e oculta gallery-2
        gallery2.classList.remove("active");
        gallery1.classList.add("active");
        
        // Atualiza o estado do switch (posição)
        toggleButton.classList.remove("toggle-right");
        toggleButton.classList.add("toggle-left");
      }
    });
  });
  