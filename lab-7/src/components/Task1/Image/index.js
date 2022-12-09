import yaremcheImg from '../../../assets/yaremche.webp';
import './style.css';
import { useState } from 'react';

const Image = () => {
  const scaleParams = {
    minScale: 0.5,
    maxScale: 5,
    scaleStep: 0.25,
    initialScale: 1,
  };

  let [images, setImages] = useState([
    { src: yaremcheImg, scale: scaleParams.initialScale },
  ]);

  const handleAdd = () => {
    const newImage = {
      src: yaremcheImg,
      scale: scaleParams.initialScale,
    };

    setImages([...images, newImage]);
  };

  const handleRemove = () => {
    setImages(images.slice(0, images.length - 1));
  };

  const handleZoomIn = () => {
    if (!images.length) return;

    const lastImage = images[images.length - 1];
    const nextScale = lastImage.scale + scaleParams.scaleStep;
    if (nextScale > scaleParams.maxScale) return;

    lastImage.scale = nextScale;
    setImages([...images.slice(0, images.length - 1), lastImage]);
  };

  const handleZoomOut = () => {
    if (!images.length) return;

    const lastImage = images[images.length - 1];
    const nextScale = lastImage.scale - scaleParams.scaleStep;
    if (nextScale < scaleParams.minScale) return;

    lastImage.scale = nextScale;
    setImages([...images.slice(0, images.length - 1), lastImage]);
  };

  return (
    <div>
      {images.length ? (
        <div className="img-container">
          {images.map(({ src, scale }) => {
            return (
              <a href="https://www.yaremcha.com.ua/">
                <img
                  width="400px"
                  src={src}
                  alt="Яремче"
                  style={{ transform: `scale(${scale})` }}
                />
              </a>
            );
          })}
        </div>
      ) : null}
      <button className="add-img-btn" onClick={handleAdd}>
        Додати
      </button>
      <button className="zoom-in-btn" onClick={handleZoomIn}>
        Збільшити
      </button>
      <button className="zoom-out-btn" onClick={handleZoomOut}>
        Зменшити
      </button>
      <button className="remove-img-btn" onClick={handleRemove}>
        Видалити
      </button>
    </div>
  );
};
export default Image;
