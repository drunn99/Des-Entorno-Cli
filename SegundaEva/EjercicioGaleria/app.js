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
  constructor(element) {
    this.images = [...element.childNodes];
    this.modalWindow = document.querySelector(".modal");
    this.mainImg = document.querySelector(".main-img");
    this.imageName = document.querySelector(".image-name");
    this.modalImages = document.querySelector(".modal-images");
    this.prevBtn = document.querySelector(".prev-btn");
    this.nextBtn = document.querySelector(".next-btn");
    //Asignación de funciones a propiedades
    
  }

  openModal(selectedImage, list) {
    this.images.forEach(img => {
      img.addEventListener("click", () => {
        console.log("click en imagen");
        this.modalWindow.setAttribute("class","modal open")
      })
    });
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


const nature = new Gallery(getElement('.nature'));
const city = new Gallery(getElement('.city'));
