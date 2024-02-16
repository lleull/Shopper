import styles from "./Product.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { addcart } from "../../Redux/Product/Productslice";
import { useSelector, useDispatch } from "react-redux";
import { MdAddShoppingCart } from "react-icons/md";
import logo from "./../../Image/icons8-add-properties-64.png";
import { addsearch } from "../../Redux/Product/Productslice";
import { MdSearch } from "react-icons/md";
const Products = () => {
  const [Products, setProducts] = useState([]);
  console.log(Products);
  const dispatch = useDispatch();
  const searchinput = useSelector((state) => state.product.searchinput);
  const SearchData = Products.filter((data) => data.title.toLowerCase().includes(searchinput.toLowerCase()));
  useEffect(() => {
    const getdata = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        if (response.data) {
          setProducts(response.data?.products);
        } else {
          console.log("error");
        }
      } catch (error) {
        console.log(error);
      }
    };

    getdata();
  }, []);
  const Carts = useSelector((state) => state.product.carts);
  console.log(Carts);

  return (
    <div className={styles.products}>
      <div className={styles.firstline}>
      
          <form className={styles.form}>
            <input
              placeholder="Search a Product..."
              type="text"
              onChange={(e) => dispatch(addsearch(e.target.value))}
              className={styles.searchinput}
            />
            <MdSearch className={styles.searchicons} />
          </form>
        
        <h1 className={styles.grocery}>All Products</h1>
      </div>
      <div className={styles.cards}>
        {searchinput.length > 0
          ? SearchData.map((items) => (
              <div key={items.id} className={styles.card}>
                <div className={styles.imgfile}>
                  <img src={logo} alt="as" className={styles.logo} />
                  <img src={items.thumbnail} className={styles.img} alt="as" />
                </div>
                <div className={styles.descs}>
                  <span className={styles.gram}>{items.rating}</span>
                  <span className={styles.name}>{items.title}</span>
                </div>
                <div className={styles.mydesc}>
                  <span className={styles.gram}>1kg</span>
                  <span className={styles.price}>{items.price}$</span>
                </div>
                <button
                  onClick={() => {
                    dispatch(addcart(items));
                  }}
                  className={styles.btn}
                >
                  <MdAddShoppingCart className={styles.addicon} />
                  Add
                </button>
              </div>
            ))
          : Products.map((items) => (
              <div key={items.id} className={styles.card}>
                <div className={styles.imgfile}>
                  <img src={logo} alt="as" className={styles.logo} />
                  <img src={items.thumbnail} className={styles.img} alt="as" />
                </div>
                <div className={styles.descs}>
                  <span className={styles.gram}>{items.rating}</span>
                  <span className={styles.name}>{items.title}</span>
                </div>
                <div className={styles.mydesc}>
                  <span className={styles.gram}>1kg</span>
                  <span className={styles.price}>{items.price}$</span>
                </div>
                <button
                  onClick={() => {
                    dispatch(addcart(items));
                  }}
                  className={styles.btn}
                >
                  <MdAddShoppingCart className={styles.addicon} />
                  Add
                </button>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Products;
