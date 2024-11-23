import "./More.css";
import Navigation from "../../components/Navigation/Navigation";


import { FaUserCog, FaSyncAlt, FaRegLifeRing, FaShieldAlt, FaPencilAlt, FaBell, FaCloud, FaInfoCircle, FaCogs } from 'react-icons/fa';

const More = () => {
  return (
    <div>
      <Navigation />
      <div className="more-container">
        <h1>More Features</h1>
        <p>Discover additional tools and functionalities here</p>
        
        <div className="button-list">
          <button className="feature-btn">
            <FaSyncAlt className="icon" />
            <span>Sync Data</span>
          </button>
          <button className="feature-btn">
            <FaRegLifeRing className="icon" />
            <span>Help Center</span>
          </button>
   
          <button className="feature-btn">
            <FaPencilAlt className="icon" />
            <span>Edit Profile</span>
          </button>
          <button className="feature-btn">
            <FaBell className="icon" />
            <span>Notifications</span>
          </button>
          <button className="feature-btn">
            <FaCloud className="icon" />
            <span>Cloud Backup</span>
          </button>
          <button className="feature-btn">
            <FaInfoCircle className="icon" />
            <span>About Us</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default More;
