import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const plants = [
  { 
    id: 1, 
    name: 'Snake Plant', 
    price: 29.99, 
    category: 'Succulents', 
    image: '/images/snake plant.jpg' 
  },
  { 
    id: 2, 
    name: 'Peace Lily', 
    price: 24.99, 
    category: 'Flowering', 
    image: '/images/lilly.jpg' 
  },
  { 
    id: 3, 
    name: 'Spider Plant', 
    price: 19.99, 
    category: 'Air Purifying', 
    image: '/images/spider plant.jpg' 
  },
  { 
    id: 4, 
    name: 'Aloe Vera', 
    price: 14.99, 
    category: 'Succulents', 
    image: '/images/alovera.webp' 
  },
  { 
    id: 5, 
    name: 'Monstera', 
    price: 39.99, 
    category: 'Large Plants', 
    image: '/images/snake plant.jpg' 
  },
  { 
    id: 6, 
    name: 'Pothos', 
    price: 12.99, 
    category: 'Trailing', 
    image: '/images/spider plant.jpg' 
  },
  { 
    id: 7, 
    name: 'Rubber Plant', 
    price: 27.99, 
    category: 'Large Plants', 
    image: '/images/snake plant.jpg' 
  },
  { 
    id: 8, 
    name: 'ZZ Plant', 
    price: 18.99, 
    category: 'Succulents', 
    image: '/images/spider plant.jpg' 
  }
];

const ProductListing = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="product-listing">
      <h1>Our Collection</h1>
      <div className="categories">
        <div className="category">
          <h2>Succulents</h2>
          <div className="plants-grid">
            {plants.filter(p => p.category === 'Succulents').map(plant => (
              <div key={plant.id} className="plant-card">
                <img src={plant.image} alt={plant.name} />
                <h3>{plant.name}</h3>
                <p>${plant.price}</p>
                <button 
                  onClick={() => handleAddToCart(plant)}
                  disabled={cartItems.some(item => item.id === plant.id)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="category">
          <h2>Flowering</h2>
          <div className="plants-grid">
            {plants.filter(p => p.category === 'Flowering').map(plant => (
              <div key={plant.id} className="plant-card">
                <img src={plant.image} alt={plant.name} />
                <h3>{plant.name}</h3>
                <p>${plant.price}</p>
                <button 
                  onClick={() => handleAddToCart(plant)}
                  disabled={cartItems.some(item => item.id === plant.id)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="category">
          <h2>Air Purifying</h2>
          <div className="plants-grid">
            {plants.filter(p => p.category === 'Air Purifying').map(plant => (
              <div key={plant.id} className="plant-card">
                <img src={plant.image} alt={plant.name} />
                <h3>{plant.name}</h3>
                <p>${plant.price}</p>
                <button 
                  onClick={() => handleAddToCart(plant)}
                  disabled={cartItems.some(item => item.id === plant.id)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
