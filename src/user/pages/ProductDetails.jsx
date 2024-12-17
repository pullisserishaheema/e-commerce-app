// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const ProductDetails = () => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     // Fetch product details from db.json based on productId
//     axios.get(`http://localhost:5000/products/${productId}`)
//       .then(response => {
//         setProduct(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching product details:', error);
//       });
//   }, [productId]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container mx-auto p-6">
//       <div className="flex">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-64 h-64 object-cover mr-8 rounded"
//         />
//         <div>
//           <h2 className="text-3xl font-bold">{product.name}</h2>
//           <p className="text-gray-600 mt-2">{product.description || 'No description available.'}</p>
//           <p className="font-semibold text-2xl mt-4">${product.price}</p>
//           <button className="mt-6 py-2 px-6 bg-blue-600 text-white rounded hover:bg-blue-700">
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams(); // Get productId from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details based on productId from db.json
    axios
      .get(`http://localhost:5000/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
      });
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>; // Loading state
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-64 h-64 object-cover mr-8 rounded"
        />

        {/* Product Details */}
        <div className="mt-4 md:mt-0">
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="text-gray-600 mt-2">{product.description || 'No description available.'}</p>

          {/* Specifications */}
          {product.specification && (
            <div className="mt-4">
              <h3 className="text-xl font-semibold">Specifications:</h3>
              <p className="text-gray-700 mt-2">{product.specification}</p>
            </div>
          )}

          {/* Product Price */}
          <p className="font-semibold text-2xl mt-4">₹ {product.price}</p>

          {/* Add to Cart */}
          <button className="mt-6 py-2 px-6 bg-blue-600 text-white rounded hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

