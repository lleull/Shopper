import styles from "./Navbar.module.css";
import userimg from "./../../Image/icons8-user-32.png";
import { useDispatch, useSelector } from "react-redux";
import arrow from "./../../Image/icons8-down-arrow-50 (1).png";
import {
  openaction,
  removeall,
  addsearch,
} from "../../Redux/Product/Productslice";
import { removeuser } from "../../Redux/User/Userslice";
import {
  MdSearch,
  MdDeliveryDining,
  MdOutlineTimer,
  MdApps,
  MdSupervisedUserCircle,
  MdShoppingCartCheckout,
  MdShoppingBag,
  MdOutlineTag,
} from "react-icons/md";
import { useState } from "react";
const Navbar = () => {
  const dispatch = useDispatch();
  const [showuser, setshowuser] = useState(false);
  const totalprice = useSelector((state) => state.product.totalprice);

  const UserData = useSelector((state) => state.user.Userdata);
  console.log(UserData);

  const handlehome = () => {
    window.location.replace("/");
    dispatch(removeall());
  };
  const handleLogout = () => {
    localStorage.removeItem("userid"), dispatch(removeuser());
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.wrapnav}>
        <div className={styles.firstnav}>
          <h1 onClick={() => handlehome()} className={styles.title}>
            Shopperwwwwwddwwdwwqwwdq
          </h1>
        </div>
        <div className={styles.secondnav}>
          <form className={styles.form}>
            <input
              placeholder="Search a Product..."
              type="text"
              onChange={(e) => dispatch(addsearch(e.target.value))}
              className={styles.searchinput}
            />
            <MdSearch className={styles.searchicons} />
          </form>
        </div>
        <div className={styles.thirdnav}>
          <div className={styles.thirdwrap}>
            <div className={styles.navpart}>
              <MdDeliveryDining className={styles.icons} />
              <div className={styles.thirdpart}>
                <h3 className={styles.firsttext}>Delivery</h3>
                <h3 className={styles.secondtext}>Vs 305, A.A</h3>
              </div>
            </div>
            <div className={styles.navpart}>
              <MdOutlineTimer className={styles.icons} />
              <div className={styles.thirdpart}>
                <h3 className={styles.firsttext}>Fri, 1:32</h3>
                <h3 className={styles.secondtext}>12:00 - 13:00</h3>
              </div>
            </div>
            <div className={styles.navpart}>
              <img src={userimg} alt="s" className={styles.icons} />
              <img
                src={arrow}
                onClick={() => setshowuser(!showuser)}
                alt="s"
                className={showuser ? styles.downarrow : styles.arrow}
              />
            </div>
            {showuser
              ? UserData?.map((user) => (
                  <div key={user.id} className={styles.userinfo}>
                    <h3 className={styles.username}>{user.username}</h3>
                    <span className={styles.orderhistory}>
                      <span className={styles.type}>Order</span>
                      <span className={styles.type}>0</span>
                    </span>
                    <button onClick={handleLogout} className={styles.logout}>
                      Logout
                    </button>
                  </div>
                ))
              : null}
          </div>
        </div>
        <div className={styles.mobile}>
          <div
            onClick={() => dispatch(openaction())}
            className={totalprice > 0 ? styles.cartadded : styles.wraptext}
          >
            <MdShoppingCartCheckout className={styles.icons} />
            <h4 className={styles.texts}>${totalprice}</h4>
          </div>
          <div className={styles.navpart}>
            <img src={userimg} alt="s" className={styles.icons} />
            <img
              onClick={() => setshowuser(!showuser)}
              className={showuser ? styles.downarrow : styles.arrow}
              src={arrow}
              alt="s"
            />
            {showuser
              ? UserData?.map((user) => (
                  <div key={user.id} className={styles.userinfo}>
                    <h3 className={styles.username}>{user.username}</h3>
                    <span className={styles.orderhistory}>
                      <span className={styles.type}>Order</span>
                      <span className={styles.type}>0</span>
                    </span>
                    <button
                      onClick={() => dispatch(removeuser())}
                      className={styles.logout}
                    >
                      Logout
                    </button>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
      <div className={styles.navdetail}>
        {/* <div className={styles.wraptext}>
          <MdOutlineTag className={styles.icons} />
          <h4 className={styles.texts}>Offers</h4>
        </div>
        <div className={styles.wraptext}>
          <MdApps className={styles.icons} />
          <h4 className={styles.texts}>Products</h4>
        </div>
        <div className={styles.wraptext}>
          <MdSupervisedUserCircle className={styles.icons} />
          <h4 className={styles.texts}>Users</h4>
        </div>
        <div className={styles.wraptext}>
          <MdShoppingBag className={styles.icons} />
          <h4 className={styles.texts}>Orders</h4>
        </div> */}
        <div
          onClick={() => dispatch(openaction())}
          className={totalprice > 0 ? styles.cartadded : styles.wraptext}
        >
          <MdShoppingCartCheckout className={styles.icons} />
          <h4 className={styles.texts}>${totalprice}</h4>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
