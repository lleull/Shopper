import styles from "./Home.module.css";
import Products from "../Products/Products";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { backURL } from "../../App";
import axios from "axios";
import { adduserdata } from "../../Redux/User/Userslice";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getdatt = async () => {
      const id = localStorage.getItem("userid");
      const res = await axios.get(`${backURL}/login/${id}`);
      if (res.data) {
        dispatch(adduserdata(res.data));
      } else {
        console.log("Erro while getting user data");
      }
    };
    getdatt();
  }, [dispatch]);
  return (
    <div className={styles.homepage}>
      <div className={styles.products}>
        <Products />
      </div>
    </div>
  );
};

export default Home;
