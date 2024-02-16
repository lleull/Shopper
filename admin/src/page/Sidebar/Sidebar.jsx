import styles from "./Side.module.css";
import Sidedata from "./Sidedata";
const Sidebar = () => {



  return (
    <div className={styles.sidebar}>
      {Sidedata.map((sides) => (
        <div key={sides.id} className={styles.texts}>
           
          <img src={sides.image} alt="as" className={styles.logo} />
          <span  className={styles.text}>
            {sides.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
