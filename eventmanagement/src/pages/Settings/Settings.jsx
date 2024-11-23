import "./Settings.css";
import Navigation from "../../components/Navigation/Navigation";
import { FaUserCircle, FaLock, FaBell, FaSignOutAlt, FaCog, FaLanguage } from "react-icons/fa"; 

const Settings = () => {
  return (
    <div className="settings-page">
      <Navigation />
      <div className="settings-container">
        <h1>Settings</h1>
        <p>Customize your preferences and manage application settings</p>
        <div className="settings-buttons">
          
          <div className="settings-item">
            <FaUserCircle className="settings-icon" />
            <button disabled className="settings-button">Account</button>
          </div>
          
          <div className="settings-item">
            <FaLock className="settings-icon" />
            <button disabled className="settings-button">Privacy</button>
          </div>
          
          <div className="settings-item">
            <FaBell className="settings-icon" />
            <button disabled className="settings-button">Notifications</button>
          </div>

          <div className="settings-item">
            <FaCog className="settings-icon" />
            <button disabled className="settings-button">General Settings</button>
          </div>
          
          <div className="settings-item">
            <FaLanguage className="settings-icon" />
            <button disabled className="settings-button">Language</button>
          </div>
          <div className="settings-item">
            <FaSignOutAlt className="settings-icon" />
            <button disabled className="settings-button">Log Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
