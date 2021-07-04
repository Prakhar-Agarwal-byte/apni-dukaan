import commerce from "../lib/commerce";
import Fuse from "fuse.js";
import { useState, useEffect } from "react";

import ProductList from "../components/ProductList";
import SearchAndSort from "../components/SearchAndSort";

const HomePage = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProdList, setFilteredProdList] = useState(products);
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    const filteredListClone = [...filteredProdList];
    switch (sortOption) {
      case "CHAR_ASC":
        filteredListClone.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
        setFilteredProdList(filteredListClone);
        break;
      case "CHAR_DSC":
        filteredListClone.sort((a, b) => {
          if (a.name > b.name) {
            return -1;
          }
          if (a.name < b.name) {
            return 1;
          }
          return 0;
        });
        setFilteredProdList(filteredListClone);
        break;
      case "PRICE_ASC":
        filteredListClone.sort((a, b) => {
          if (a.price.raw < b.price.raw) {
            return -1;
          }
          if (a.price.raw > b.price.raw) {
            return 1;
          }
          return 0;
        });
        setFilteredProdList(filteredListClone);
        break;
      case "PRICE_DSC":
        filteredListClone.sort((a, b) => {
          if (a.price.raw > b.price.raw) {
            return -1;
          }
          if (a.price.raw < b.price.raw) {
            return 1;
          }
          return 0;
        });
        setFilteredProdList(filteredListClone);
        break;
      default:
        break;
    }
  }, [sortOption]);

  useEffect(() => {
    if (searchTerm == "") {
      setFilteredProdList(products);
    } else {
      const fuse = new Fuse(products, {
        keys: ["name", "description", "price.raw"],
      });
      const results = fuse.search(searchTerm);
      setFilteredProdList(results.map((result) => result.item));
    }
  }, [searchTerm]);

  return (
    <>
      <SearchAndSort
        setSearchTerm={setSearchTerm}
        setSortOption={setSortOption}
      />
      <ProductList products={filteredProdList} />
    </>
  );
};

export const getStaticProps = async () => {
  const { data: products } = await commerce.products.list();

  return {
    props: {
      products,
    },
  };
};

export default HomePage;
