import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ProductStrip from '../components/ProductStrip';

// Mui
import { Stack } from '@mui/material/';
import { PageWrapperStyle } from '../styles/GeneralStyle';

function ElectricGuitars() {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const { slug } = useParams();

  const fetchProducts = async () => {
    try {
      // Dynamically import the data
      const products = await import(`../assets/data/${slug}.js`);

      // Access the default export (in this case, the array of objects)
      setProducts(products.default);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, [location.pathname]);

  return (
    <Stack spacing={4} useFlexGap sx={PageWrapperStyle}>
      {products.map((item) => (
        <ProductStrip key={item.id} product={item} />
      ))}
    </Stack>
  );
}

export default ElectricGuitars;
