const Modal = {
    open(){
      // Abrir Modal
      // Adicionar a class active ao Modal
      document
        .querySelector(".modal-overlay")
        .classList.add("active")
    },
    close(){
      // Fechar Modal
      // Remover a class active do Modal
      document
        .querySelector(".modal-overlay")
        .classList.remove("active")
    }
}
