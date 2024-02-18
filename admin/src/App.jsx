import Navbar from "./page/Navbar/Navbar";
import Sidebar from "./page/Sidebar/Sidebar";
import styles from "./App.module.css";
import Home from "./page/Homepage/Home";
import Checkout from "./page/Checkout/Cart";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route} from "react-router-dom";
import { useLocation } from "react-router-dom";
import ReactDOM from "react-dom";
import Login from "./page/Login/Login";
import Register from "./page/Register/Register";
import { openaction, removeall } from "./Redux/Product/Productslice";
import Successbox from "./page/Success/Success";
import Cartproduct from "./Cart/Cart";
export const backURL = "https://shopappi.onrender.com";
const App = () => {
  const successcart = useSelector((state) => state.product.success);
  const successid = document.getElementById("success");
  const cartid = document.getElementById("cart");
  const opencart = useSelector((state) => state.product.opencart);

  const userid = localStorage.getItem("userid");
  console.log(userid);
  const dispatch = useDispatch();
  const location = useLocation();
  return (
    <div className={styles.home}>
      <Navbar />

      <div
        className={
          location.pathname === "/order" ? styles.apporder : styles.appcontainer
        }
      >
        <div
          className={
            location.pathname === "/order" ? styles.sideno : styles.sidebarapp
          }
        >
          <Sidebar onClick={() => dispatch(removeall())} />
        </div>
        <div className={styles.homeapp}>
          <Routes>
            <Route path="/" element={userid ? <Home /> : <Login />} />
            <Route path="/order" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
      {successcart ? ReactDOM.createPortal(<Successbox />, successid) : ""}
      {opencart
        ? ReactDOM.createPortal(
            <Cartproduct open={() => dispatch(openaction)} />,
            cartid
          )
        : ""}
    </div>
  );
};

export default App;
