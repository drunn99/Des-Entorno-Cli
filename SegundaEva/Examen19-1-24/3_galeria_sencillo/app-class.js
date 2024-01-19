// Hicimos un ejercicio de galerías. Simplemente hay que ver qué ha cambiado entre este ejercicio y el que hicimos en términos de html
// y modificar el js para que funcione todo.

function getElement(selection) {
    const element = document.querySelector(selection);
    if (element) {
      return element;
    }
    throw new Error(
      `Please check "${selection}" selector, no such element exists`
    );
  }
  
  class Gallery {
    static initializedButtons = false;
    constructor(element) {
      this.images = element.children;
      this.modalWindow = document.querySelector(".modal");
      this.mainImg = document.querySelector(".main-img");
      this.imageName = document.querySelector(".image-name");
      this.modalImages = document.querySelector(".modal-images");
      this.prevBtn = document.querySelector(".boton-previo");
      this.nextBtn = document.querySelector(".boton-siguiente");
      this.closeBtn = document.querySelector(".boton-cerrar");
  
      //Abrir modal
      [...this.images].forEach(img => {
        img.addEventListener("click", () => {
          this.openModal(img, this.images);
        })
      });
  
      //Asignación de los botones (Compruebo si ya se ha hecho para evitar añadir varios eventos al mismo botón)
      if (!Gallery.initializedButtons) {
        this.nextBtn.addEventListener("click", () => { this.nextImage() });
        this.prevBtn.addEventListener("click", () => { this.prevImage() });
        Gallery.initializedButtons = true;
      }
  
      //Cerrar modal
      this.closeBtn.addEventListener("click", () => {
        this.closeModal();
      });
    }
  
    openModal(selectedImage, list) {
      //Cambiar imágen principal
      this.setMainImage(selectedImage);
      //Eliminar listado de las anteriores imágenes del modal
      [...this.modalImages.children].forEach(img => {
        this.modalImages.removeChild(img);
      });
      //Crear listado de las siguientes imágenes a mostrar
      [...list].forEach(img => {
        let newModalImage = img.cloneNode(false);
        //Resaltar la imágen principal seleccionada en la lista
        let modalClass = selectedImage == img ? "modal-img selected" : "modal-img";
        newModalImage.setAttribute("class", modalClass);
        //Añadir evento click sobre las imágenes
        newModalImage.addEventListener("click", () => {
          this.chooseImage(newModalImage);
        });
        //Añadir imágenes a la lista de imágenes modales
        this.modalImages.appendChild(newModalImage);
      });
  
      //Mostrar modal
      this.modalWindow.setAttribute("class", "modal open");
    }
  
    //Ocultar modal
    closeModal() {
      this.modalWindow.setAttribute("class", "modal");
    }
  
    //Cambiar la imágen principal y seleccionar esta en la lista de imágenes
    chooseImage(selectedImg) {
      [...this.modalImages.children].forEach(img => {
        if (selectedImg == img) {
          this.setMainImage(selectedImg);
          img.setAttribute("class", "modal-img selected");
        } else {
          img.setAttribute("class", "modal-img");
        }
      })
    }
  
    //Cambiar imágen principal
    setMainImage(selectedImage) {
      this.mainImg.setAttribute("src", selectedImage.getAttribute("src"));
      this.imageName.innerHTML = (selectedImage.getAttribute("title"));
    }
  
    //Cambiar imágen a la siguiente
    nextImage() {
      let arrOfImages = [...this.modalImages.children];
      let nextImage = arrOfImages[(this.getMainImgIndex() + 1) % arrOfImages.length];
      this.chooseImage(nextImage);
    }
  
    //Cambiar imágen a la anterior
    prevImage() {
      let arrOfImages = [...this.modalImages.children];
      let nextImage = arrOfImages[((this.getMainImgIndex() - 1)+arrOfImages.length) % arrOfImages.length];
      this.chooseImage(nextImage);
    }
  
    //Devuelve el índice de la imágen modal seleccionada 
    getMainImgIndex() {
      let arrOfImages = [...this.modalImages.children]
      for (let i = 0; i < arrOfImages.length; i++) {
        if (this.mainImg.getAttribute("src") == arrOfImages[i].getAttribute("src")) {
          return i;
        }
      }
      return -1;
    }
  
  }
  
  
  /**
   * Crear una CLASE Galería que contenga:
   * - Constructor al que se le pasa un elemento (se tendrán variables con array de todas las imágenes, el class modal, class main-img, 
   *   class image-name, class modal-images y los botones de cerrar y de ir a izquierda y derecha) Enlazar ahí los diferentes "comportamientos"
   * Ej: this.closeModal = this.closeModal.bind(this);
   * 
   * - openModal(selectedImage, list) (aquí habrá que mostrar el modal, introducir la imagen clicada, bindear los listener a los botones)
   * - setMainImage(selectedImage) Para introducir en el modal la imagen
   * - closeModal() - Quitar la modal de la vista Y quitar eventos de botones que ya no se ven
   * - nextImage()
   * - prevImage()
   * - chooseImage(e) - Se ejecuta cuando clicamos en alguna de las imágenes con clase modal-images
   */
  
  const nature = new Gallery(getElement('.naturaleza'));