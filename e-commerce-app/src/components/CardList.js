import classes from "./CardList.module.css";
import Card from "./Card";
import { useState, useEffect, Fragment } from "react";
import Spinner from "../shared-components/Spinner";

function CardList() {
  const [searchField, setSearchField] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    const newFilteredList = products.filter((product) => {
      return product.title.toLowerCase().includes(searchField);
    });
    setFilteredList(newFilteredList);
  }, [products, searchField]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json.products);
      });
  }, []);

  const onSearchFieldHandler = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  console.log("rendering");

  return (
    <Fragment>
      <div className={classes.input_container}>
        <input
          type="search"
          value={searchField}
          onChange={onSearchFieldHandler}
        />
      </div>
      <div className={classes.container}>
        {filteredList.length === 0 ? (
          <div className={classes.spinner}>
            <Spinner />
          </div>
        ) : (
          filteredList.map((product) => {
            return <Card key={product.id} product={product} />;
          })
        )}
      </div>
    </Fragment>
  );
}

export default CardList;
