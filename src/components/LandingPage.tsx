import '../App.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay">
          <h1 className="hero-title">MacBook Pro 14</h1>
          <p className="hero-subtitle">Power that moves your ideas forward</p>
          <button className="cta-button">Learn More</button>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2 className="features-title">Why Choose MacBook Pro 14</h2>
        <div className="features-grid">
          <div className="feature">
            <img src="https://images.unsplash.com/photo-1526406915894-7bcd65f60845?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fE1hY2Jvb2slMjAxNCUyMHByb3xlbnwwfHwwfHx8MA%3D%3D" alt="Performance" />
            <h3>Unmatched Performance</h3>
            <p>Powered by the M1 Pro or M1 Max chips, delivering extreme performance and power efficiency.</p>
          </div>
          <div className="feature">
            <img src="https://images.unsplash.com/photo-1589256972986-67e43d0e20dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fE1hY2Jvb2slMjAxNCUyMHByb3xlbnwwfHwwfHx8MA%3D%3D" alt="Battery Life" />
            <h3>All-Day Battery Life</h3>
            <p>Stay unplugged longer with up to 17 hours of battery life on a single charge.</p>
          </div>
          <div className="feature">
            <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzAzN3wwfDF8c2VhcmNofDF8fG1hY2Jvb2slMjBwcm98ZW58MHx8fHwxNjEyNzM2MjI2&ixlib=rb-1.2.1&q=80&w=1080" alt="Display" />
            <h3>Stunning Display</h3>
            <p>Experience breathtaking visuals with the Liquid Retina XDR display, with vivid colors and high contrast.</p>
          </div>
          <div className="feature">
            <img src="https://images.unsplash.com/flagged/photo-1590183030142-efad5a97612f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fE1hY2Jvb2slMjAxNCUyMHBybyUyMHBvd2VyfGVufDB8fDB8fHww" alt="Portability" />
            <h3>Portability & Power</h3>
            <p>Lightweight design without sacrificing power, perfect for on-the-go professionals.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Apple Inc. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
