import homeStyles from "../../styles/home/Home.module.css";
import Image from "next/image";
import HavensImage from "../../assets/images/havesn.jpg";

const CareHome = () => {
  return (
    <div className={homeStyles.maincontainer}>
      <div className={homeStyles.imageDiv}>
        <br />
        <Image
          src={HavensImage}
          alt="Havens Flyer"
          // layout="responsive"
          className={homeStyles.image}
        />
      </div>
      
      <div className={homeStyles.announcement}>
        <h3 className={homeStyles.glow}>Attention!</h3>
        <h4 className={homeStyles.glow}>Registration Starting soon</h4>
      </div>
      <br />
      <br />
    </div>
  );
};

export default CareHome;
