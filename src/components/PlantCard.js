import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

function PlantCard({ plant }) {
  const dispatch = useDispatch();
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '10px' }}>
      <img src={plant.image} alt={plant.name} style={{ width: '100%' }} />
      <h3>{plant.name}</h3>
      <p>₹{plant.price}</p>
      <button onClick={() => dispatch(addToCart(plant))}>Add to Cart</button>
    </div>
  );
}

export default PlantCard;