import "./Subscription.css";
import Navigation from "../../components/Navigation/Navigation";

const Subscription = () => {
  return (
    <div>
      <Navigation />
      <div className="subscription-container">
        <h1>Manage Your Subscription</h1>
        <p>Explore and manage your subscription plans here</p>

        <div className="subscription-plans">
          
          <div className="plan">
            <h3> Basic</h3>
            <p>$9.99/month</p>
            <button>Choose Plan</button>
          </div>

          
          <div className="plan">
            <h3>Standard</h3>
            <p>$14.99/month</p>
            <button>Choose Plan</button>
          </div>

          
          <div className="plan">
            <h3>Premium</h3>
            <p>$19.99/month</p>
            <button>Choose Plan</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
