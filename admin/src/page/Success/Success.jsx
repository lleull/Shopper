import styles from "./Success.module.css";
import img from "./../../Image/icons8-success-64.png";
import { addorder, removeall } from "../../Redux/Product/Productslice";
import { useDispatch } from "react-redux";
import { cartsuccess } from "../../Redux/Product/Productslice";
const Successbox = () => {
  const dispatch = useDispatch();
  const handlereload = () => {
    dispatch(addorder())
    dispatch(cartsuccess());
    dispatch(removeall());
    window.location.replace("/");
  };
  return (
    <div className={styles.page}>
      <div className={styles.order}>
        <img src={img} alt="as" className={styles.images} />
        <h4 className={styles.name}>Hey Leul Mekonnen</h4>
        <h2 className={styles.title}>Your Order Is Completed</h2>
        <span className={styles.para}>
          We`ll send your Products as soon as Possible
        </span>
        <button onClick={handlereload} type="submit" className={styles.btn}>
          Go To HomePage
        </button>
      </div>
    </div>
  );
};

export default Successbox;
