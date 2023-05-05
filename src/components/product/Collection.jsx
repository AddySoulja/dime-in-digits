import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { storeProducts } from "../../redux/slices/productsSlice";
import { fetchProducts } from "./controllers/fetchProducts";
import { useCallback } from "react";
import Loading from "../common/Loading";
import Card from "../common/Card";

const Collection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [productsInStore, setProductsInStore] = useState(
    useSelector((state) => state.products)
  );
  const dispatch = useDispatch();

  const data = useCallback(async () => {
    return await fetchProducts();
  }, []);

  useEffect(() => {
    if (productsInStore.products.length === 0) {
      setIsLoading(true);
      data().then((res) => {
        if (Array.isArray(res)) {
          dispatch(storeProducts(res));
          setProductsInStore({ products: [...res] });
          setIsLoading(false);
        }
      });
    }
  }, [data, dispatch, productsInStore.products]);

  return isLoading ? (
    <Loading />
  ) : (
    productsInStore.products.map((item) => (
      <Link to={`/explore/${item.id}`} key={`itema${item.id}`}>
        <li key={`itemc${item.id}`}>
          <Card item={item} />
        </li>
      </Link>
    ))
  );
};

export default Collection;
