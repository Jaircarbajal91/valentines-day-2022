const weddingPhotos = {
  'bro-cousin': '../../images/wedding/bro-cousin.jpeg',
  'cover-picture': '../../images/wedding/cover-picture.jpg',
  'cutting-cake': '../../images/wedding/cutting-cake.jpeg',
  'dad-bride': '../../images/wedding/dad-bride.jpeg',
  'dip': '../../images/wedding/dip.jpeg',
  'first-sight': '../../images/wedding/first-sight.jpeg',
  'getting-married': '../../images/wedding/getting-married.jpeg',
  'groom-family-bride': '../../images/wedding/groom-family-bride.jpeg',
  'just-married-arch': '../../images/wedding/just-married-arch.jpeg',
  'just-married-bw': '../../images/wedding/just-married-bw.jpg',
  'just-married': '../../images/wedding/just-married.jpeg',
  'kiss': '../../images/wedding/kiss.jpeg',
  'outside-courthouse': '../../images/wedding/outside-courthouse.jpg',
  'stairs': '../../images/wedding/stairs.jpeg',
  'wedding-cake': '../../images/wedding/wedding-cake.jpg',
}

const petsPhotos = {
  'baby-yoba': '../../images/pets/baby-yoba.JPG',
  'boba-blanket': '../../images/pets/boba-blanket.jpeg',
  'boba-chabenzo1': '../../images/pets/boba-chabenzo1.jpeg',
  'boba-chip': '../../images/pets/boba-chip-mom.JPG',
  'boba-dumb': '../../images/pets/boba-dumb.jpeg',
  'boba-oven': '../../images/pets/boba-oven-mit.jpeg',
  'boba-portrait': '../../images/pets/boba-portrait.jpeg',
  'chip-carrier': '../../images/pets/chip-carrier.JPG',
  'chip-meerkat': '../../images/pets/chip-meerkat.jpeg',
  'chip-relaxing': '../../images/pets/chip-relaxing.JPG',
  'chip-side': '../../images/pets/chip-side-eye.JPG',
  'chip-winking': '../../images/pets/chip-winking.JPG',
  'IMG_1286.JPG': '../../images/pets/IMG_1286.JPG',
  'pretty-eyes': '../../images/pets/pretty-eyes.JPG',
  'puppy-chip1': '../../images/pets/puppy-chip1.JPG',
  'puppy-chip2': '../../images/pets/puppy-chip2.JPG',
  'puppy-chip3': '../../images/pets/puppy-chip3.JPG',
  'smokey-and': '../../images/pets/smokey-and-mom.JPG',
  'smokey-angry1': '../../images/pets/smokey-angry1.JPG',
  'smokey-angry2': '../../images/pets/smokey-angry2.jpeg',
  'smokey-baby1': '../../images/pets/smokey-baby1.JPG',
  'smokey-baby2': '../../images/pets/smokey-baby2.PNG',
  'smokey-beauty': '../../images/pets/smokey-beauty.jpeg',
  'smokey-boba': '../../images/pets/smokey-boba.jpeg',
  'smokey-comfy': '../../images/pets/smokey-comfy.jpeg',
  'smokey-comfy1': '../../images/pets/smokey-comfy1.jpeg',
  'smokey-funny1': '../../images/pets/smokey-funny1.jpeg',
  'smokey-funny2': '../../images/pets/smokey-funny2.jpeg',
  'smokey-nice-personality': '../../images/pets/smokey-nice-personality.jpeg',
  'smokey-tounge': '../../images/pets/smokey-tounge.JPG',
}

const otherPhotos = {
  'baby-tika': '../../images/other/baby-tika.JPG',
  'boot.jpeg': '../../images/other/boot.jpeg',
  'christmas-disney': '../../images/other/christmas-disney.jpeg',
  'cute-tika': '../../images/other/cute-tika.JPG',
  'drawing.jpeg': '../../images/other/drawing.jpeg',
  'family-kids': '../../images/other/family-kids.JPG',
  'fist.jpeg': '../../images/other/fist.jpeg',
  'haircut-jair': '../../images/other/haircut-jair.JPG',
  'head-shirt': '../../images/other/head-shirt.jpeg',
  'hole-sock1': '../../images/other/hole-sock1.jpg',
  'hole-sock2': '../../images/other/hole-sock2.jpg',
  'IMG_2209.JPG': '../../images/other/IMG_2209.JPG',
  'IMG_3307.jpeg': '../../images/other/IMG_3307.jpeg',
  'just-married-disney-masks': '../../images/other/just-married-disney-masks.jpeg',
  'oc-fair': '../../images/other/oc-fair.jpg',
  'photo-booth1': '../../images/other/photo-booth1.jpeg',
  'photo-booth2': '../../images/other/photo-booth2.jpg',
  'pretty-tika1': '../../images/other/pretty-tika1.jpeg',
  'pretty-tika1': '../../images/other/pretty-tika1.JPG',
  'pumpkin-patch': '../../images/other/pumpkin-patch.jpg',
  'sb-tika-smile': '../../images/other/sb-tika-smile.JPG',
  'school-tika': '../../images/other/school-tika.JPG',
  'sister-child': '../../images/other/sister-child.jpeg',
  'smiling-tika': '../../images/other/smiling-tika.jpeg',
  'toddler-tika': '../../images/other/toddler-tika.jpeg',
  'us-disney-christmas': '../../images/other/us-disney-christmas.JPG',
  'us-healthy': '../../images/other/us-healthy-junk.jpeg',
  'us-home': '../../images/other/us-home.jpeg',
  'us-six': '../../images/other/us-six-flags.jpeg',
  'us-universal-studios': '../../images/other/us-universal-studios.JPG',
  'us1.jpeg': '../../images/other/us1.jpeg',
  'yummy-tika1': '../../images/other/yummy-tika1.JPG',
  'yummy-tika2': '../../images/other/yummy-tika2.JPG',
}


const content = document.querySelector('.content');
const closeModalButton = document.querySelector('.modal-close');
const modalBg = document.querySelector('.modal-bg');
const modal = document.querySelector('.modal')

function createImgCard(photoGallery) {
  for (let path in photoGallery) {
    let img = document.createElement('img');
    img.src = photoGallery[path]
    img.alt = path
    img.classList.add('photo')
    content.append(img)
    img.addEventListener('click', (e) => {
      let srcName = e.target.getAttribute('src')
      modal.style.backgroundImage = `url("${srcName}")`
      modalBg.classList.add('bg-active');
    })
  }
}
createImgCard(weddingPhotos)
createImgCard(otherPhotos)
createImgCard(petsPhotos)

closeModalButton.addEventListener('click', (e) => {
  modalBg.classList.remove('bg-active');
})