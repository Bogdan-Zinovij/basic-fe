import { useEffect } from 'react';
import { useState } from 'react';
import GoodsCard from '../GoodsCard';

import './style.css';

const GoodsGallery = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    const res = await fetch('https://fakestoreapi.com/products?limit=6');
    const products = await res.json();
    setItems(products);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <h2>Goods gallery:</h2>
      {loading ? <div>Loading products...</div> : null}
      <ul className="goods-gallery">
        {items.map(({ title, price, image, id }) => {
          return (
            <GoodsCard key={id} name={title} price={price} imgUrl={image} />
          );
        })}
      </ul>
    </>
  );
};

export default GoodsGallery;
