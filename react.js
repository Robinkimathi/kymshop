import React, { useState, useEffect } from 'react';
import firebase from './firebase';
import 'firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
  // Your Firebase configuration settings
};

firebase.initializeApp(firebaseConfig);

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetch products from Firebase Firestore
  useEffect(() => {
    const db = firebase.firestore();

    // Retrieve products collection
    db.collection('products').onSnapshot(snapshot => {
      const productsData = [];
      snapshot.forEach(doc => {
        productsData.push({ id: doc.id, ...doc.data() });
      });
      setProducts(productsData);
    });
  }, []);

  // Add item to the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
    updateFirebaseCart([...cart, product]);
  };

  // Update cart items in Firebase Firestore
  const updateFirebaseCart = (items) => {
    const db = firebase.firestore();
    db.collection('userCarts').doc('userID').set({ items });
  };

  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.description} />
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <p>Ratings: {product.ratings}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <h2>Cart</h2>
      <div>
        {cart.map((item, index) => (
          <div key={index}>
            <p>{item.description}</p>
            <p>Price: {item.price}</p>
            {/* Other cart item details */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
