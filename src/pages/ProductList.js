import React from 'react';
import PlantCard from '../components/PlantCard';

const plants = [
  { id: 1, name: 'Aloe Vera', price: 200, image: '/assets/images/plant1.jpg' },
  { id: 2, name: 'Snake Plant', price: 250, image: '/assets/images/plant2.jpg' },
  { id: 3, name: 'Peace Lily', price: 300, image: '/assets/images/plant3.jpg' },
  { id: 4, name: 'Spider Plant', price: 150, image: '/assets/images/plant4.jpg' },
  { id: 5, name: 'ZZ Plant', price: 350, image: '/assets/images/plant5.jpg' },
  { id: 6, name: 'Fiddle Leaf Fig', price: 500, image: '/assets/images/plant6.jpg' },
];

function ProductList() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', padding: '2rem' }}>
      {plants.map(plant => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </div>
  );
}

export default ProductList;
