// ------------------------------ Task 1 ------------------------------------ //

const styles = [
  { backgroundColor: 'pink', color: 'black' },
  { backgroundColor: 'gray', color: 'white' },
  { backgroundColor: 'yellow', color: 'black' },
  { backgroundColor: 'blue', color: 'white' },
];

function StyleGenerator(styles) {
  let counter = styles.length;
  return () => {
    counter++;
    return styles[counter % styles.length];
  };
}
const getNextStyle = StyleGenerator(styles);

const firstElement = document.getElementById('first-element');
const secondElement =
  document.querySelector('#first-element').nextElementSibling;

firstElement.addEventListener('click', () => {
  const { backgroundColor, color } = getNextStyle();
  firstElement.style.backgroundColor = backgroundColor;
  firstElement.style.color = color;
});

secondElement.addEventListener('click', () => {
  const { backgroundColor, color } = getNextStyle();
  secondElement.style.backgroundColor = backgroundColor;
  secondElement.style.color = color;
});

// ------------------------------ Task 2 ------------------------------------ //

const addImageButton = document.querySelector('.add-img-btn');
const zoomInButton = document.querySelector('.zoom-in-btn');
const zoomOutButton = document.querySelector('.zoom-out-btn');
const removeImageButton = document.querySelector('.remove-img-btn');

const outerImgContainer = document.querySelector('.outer-img-container');
let imgContainer = document.querySelector('.img-container');

const imgContainerClassName = 'img-container';
const imgContainerHTML = `
  <a href="https://www.yaremcha.com.ua/">
    <img
      src="./images/yaremche.jpg"
      alt="Яремче"
    />
  </a>`;

const getLastImgContainer = () =>
  outerImgContainer.querySelector('div:last-child');

const scaleParams = {
  minScale: 0.5,
  maxScale: 5,
  scaleStep: 0.25,
  currentScale: 1,
  initialScale: 1,
};

function resetPrevImageScaleToDefault(imageContainer) {
  const element = imageContainer.querySelector('a');
  scaleParams.currentScale = scaleParams.initialScale;
  element.style.transform = `scale(${scaleParams.initialScale})`;
}

// Add image
addImageButton.addEventListener('click', () => {
  const lastImageContainer = getLastImgContainer();
  if (lastImageContainer) resetPrevImageScaleToDefault(lastImageContainer);

  const appendElement = document.createElement('div');
  appendElement.innerHTML = imgContainerHTML;
  appendElement.classList.add(imgContainerClassName);
  outerImgContainer.appendChild(appendElement);
});

// Remove image
removeImageButton.addEventListener('click', () => {
  const lastImageContainer = getLastImgContainer();
  if (!lastImageContainer) return;

  outerImgContainer.removeChild(lastImageContainer);
  scaleParams.currentScale = scaleParams.initialScale;
});

// Zoom-in image
zoomInButton.addEventListener('click', () => {
  const lastImageContainer = getLastImgContainer();
  if (!lastImageContainer) return;

  const nextScale = scaleParams.currentScale + scaleParams.scaleStep;
  if (nextScale > scaleParams.maxScale) return;

  const currentImageElement = lastImageContainer.querySelector('a');
  currentImageElement.style.transform = `scale(${nextScale})`;
  scaleParams.currentScale = nextScale;
});

// Zoom-out image
zoomOutButton.addEventListener('click', () => {
  const lastImageContainer = getLastImgContainer();
  if (!lastImageContainer) return;

  const nextScale = scaleParams.currentScale - scaleParams.scaleStep;
  if (nextScale < scaleParams.minScale) return;

  const currentImageElement = lastImageContainer.querySelector('a');
  currentImageElement.style.transform = `scale(${nextScale})`;
  scaleParams.currentScale = nextScale;
});
