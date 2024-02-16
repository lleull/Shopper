import styles from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { removefromcart } from "../Redux/Product/Productslice";
import { openaction } from "../Redux/Product/Productslice";
import close from "./../Image/icons8-close-50 (1).png";

const Cartproduct = () => {
  const cartdata = useSelector((state) => state.product.carts);
  const totalprice = useSelector((state) => state.product.totalprice);
  console.log(cartdata);
  const dispatch = useDispatch();

  console.log(cartdata);
  const openorder = () => {
    dispatch(openaction())
    window.location.replace("/order")

  }

  return (
    <div className={styles.section}>
      <div className={styles.overlay}></div>
      <div className={styles.wrap}>
        <h1 className={styles.headtitle}>
          <span className={styles.head}> Order Products</span>
          <img
            onClick={() => dispatch(openaction())}
            className={styles.close}
            src={close}
            alt="as"
          />
        </h1>
        <div className={styles.carts}>
          {cartdata?.map((carts) => (
            <div key={carts.id} className={styles.cart}>
              <div className={styles.cartwrap}>
                <div className={styles.images}>
                  <img className={styles.img} src={carts?.image} alt="as" />
                </div>
                <span className={styles.para}>{carts.title}</span>
                <span className={styles.price}>
                  ${carts.price}{" "}
                  <p
                    onClick={() => dispatch(removefromcart(carts))}
                    className={styles.remove}
                  >
                    Remove
                  </p>
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.total}>
          <h2 className={styles.totaltext}>Total Price</h2>
          <span className={styles.totalprice}>${totalprice}</span>
        </div>

        <button
          onClick={openorder}
          className={styles.checkbtn}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};
Cartproduct.propTypes = null;
export default Cartproduct;
