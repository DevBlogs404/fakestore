import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import Product from "../components/Product";
import { useSelector, useDispatch } from "react-redux";
import { productList } from "../redux/productAction";

const Products = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);

  useEffect(() => {
    dispatch(productList());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Navigation />
      <div className="container mx-auto grid grid-cols-1 p-6 gap-10  md:grid-cols-2 lg:grid-cols-4  ">
        {data.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};

export default Products;
