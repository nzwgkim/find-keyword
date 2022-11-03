import React, { useEffect, useState } from "react";

function Products() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useError();
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const SALES = "data/saleProducts.json";
  const NORMALS = "data/products.json";

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(checked ? SALES : NORMALS)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        // console.log(products);
      })
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
    return () => {
      console.log("💦");
    };
  }, [checked]);

  if (loading) return <p>Loading...</p>;
  if (e) return <p>{e}</p>;

  return (
    <div>
      <h1>Products</h1>
      <input
        type="checkbox"
        id="checkbox"
        value={checked}
        onChange={() => setChecked(!checked)}
      />
      <label htmlFor="checkbox"> Only for Sales</label>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <article>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </article>
            </li>
          );
        })}
      </ul>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}

export default Products;
