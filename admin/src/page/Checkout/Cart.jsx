import styles from "./checkout.module.css";
import { useSelector } from "react-redux";
import { cartsuccess} from "../../Redux/Product/Productslice";
import { useDispatch } from "react-redux";

const Checkout = () => {
  const dispatch = useDispatch();
  const totalprice = useSelector((state) => state.product.totalprice);

  const handleorder = () => {
    dispatch(cartsuccess());
  };

  return (
    <div className={styles.carts}>
      <div className={styles.first}>
        <div className={styles.deliver}>
          <h2 className={styles.deliverhead}>Delivery Details</h2>
          <div className={styles.editable}>
            <span className={styles.head}>Delivery On</span>
            <select className={styles.select}>
              <option value="bole">Bole street 1268</option>
              <option value="Kasanchis">Kasanchis ki st.12 road</option>
              <option value="mexico">Mexioc raft Inc. st.09</option>
            </select>
          </div>
          <div className={styles.editable}>
            <span className={styles.head}>Days and Home delivery</span>

            <select className={styles.select}>
              <option value="today">As soon As possible. Today </option>
              <option value="week">Afte a week</option>
              <option value="contact">Contact me before delivering</option>
            </select>
          </div>
        </div>
        <div className={styles.payment}>
          <div className={styles.editable}>
            <span className={styles.head}>Choose Payment Method</span>

            <select className={styles.select}>
              <option value="bole">Cash</option>
              <option value="Kasanchis">Telebirr</option>
            </select>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <span className={styles.firsthead}>Order Summary</span>
        <span className={styles.cardhead}>Products and Changes</span>
        <div className={styles.wraptext}>
          <h3 className={styles.type}>Product Price</h3>
          <h3 className={styles.type}>{totalprice}$</h3>
        </div>
        <div className={styles.wraptext}>
          <h3 className={styles.type}>Delivery</h3>
          <h3 className={styles.type}>3.00$</h3>
        </div>
        <span className={styles.cardhead}>Discount and Changes</span>
        <div className={styles.wraptext}>
          <h3 className={styles.type}>Product Discount</h3>
          <h3 className={styles.type}>4.340$</h3>
        </div>

        <div className={styles.total}>
          <div className={styles.wraptexts}>
            <h3 className={styles.totaltext}>Total</h3>
            <h3 className={styles.totaltype}>{totalprice}$</h3>
          </div>
          <button onClick={handleorder} className={styles.orderbtn} type="text">
            Complete Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
