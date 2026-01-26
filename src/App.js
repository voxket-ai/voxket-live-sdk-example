import './App.css';
import VoxketWidget from '@voxket-ai/voxket-live';
import '@voxket-ai/voxket-live/style.css';

const products = [
  { id: 1, name: 'Premium Wireless Headphones', price: 299.99, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop', category: 'Electronics' },
  { id: 2, name: 'Minimalist Watch', price: 189.99, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop', category: 'Accessories' },
  { id: 3, name: 'Running Sneakers', price: 129.99, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop', category: 'Footwear' },
  { id: 4, name: 'Leather Backpack', price: 159.99, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop', category: 'Bags' },
  { id: 5, name: 'Smart Speaker', price: 99.99, image: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=300&h=300&fit=crop', category: 'Electronics' },
  { id: 6, name: 'Sunglasses', price: 79.99, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop', category: 'Accessories' },
];

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">🛒</span>
            <span className="logo-text">ShopStyle</span>
          </div>
          <nav className="nav">
            <a href="#home" className="nav-link active">Home</a>
            <a href="#products" className="nav-link">Products</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          <div className="header-actions">
            <button className="icon-btn">🔍</button>
            <button className="icon-btn">❤️ <span className="badge">2</span></button>
            <button className="icon-btn">🛒 <span className="badge">3</span></button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Your Style</h1>
          <p>Shop the latest trends in fashion and electronics with exclusive deals</p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Shop Now</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <div className="container">
          <h2 className="section-title">Shop by Category</h2>
          <div className="category-grid">
            <div className="category-card">
              <span className="category-icon">🎧</span>
              <h3>Electronics</h3>
            </div>
            <div className="category-card">
              <span className="category-icon">👟</span>
              <h3>Footwear</h3>
            </div>
            <div className="category-card">
              <span className="category-icon">⌚</span>
              <h3>Accessories</h3>
            </div>
            <div className="category-card">
              <span className="category-icon">👜</span>
              <h3>Bags</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="products" id="products">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <div className="product-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <button className="wishlist-btn">❤️</button>
                </div>
                <div className="product-info">
                  <span className="product-category">{product.category}</span>
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-footer">
                    <span className="product-price">${product.price}</span>
                    <button className="add-to-cart">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="container">
          <div className="feature-grid">
            <div className="feature-card">
              <span className="feature-icon">🚚</span>
              <h3>Free Shipping</h3>
              <p>On orders over $50</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🔄</span>
              <h3>Easy Returns</h3>
              <p>30-day return policy</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🔒</span>
              <h3>Secure Payment</h3>
              <p>100% secure checkout</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">💬</span>
              <h3>24/7 Support</h3>
              <p>AI-powered assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <span className="logo-icon">🛒</span>
              <span className="logo-text">ShopStyle</span>
              <p>Your one-stop shop for all things stylish</p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <a href="#home">Home</a>
              <a href="#products">Products</a>
              <a href="#about">About Us</a>
            </div>
            <div className="footer-links">
              <h4>Support</h4>
              <a href="#faq">FAQ</a>
              <a href="#shipping">Shipping</a>
              <a href="#returns">Returns</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 ShopStyle. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Voxket Widget - Popup Mode with Light Theme */}
      <VoxketWidget
        agentId="fab20438-867f-4261-8dff-1b82d1009f2f"
        baseUrl="https://qa-api.voxket.ai"
        appId="com.voxket.ai.test"
        appSecret="wa4sPM7E0pRP28o6ueDEu12PtIUMCeklY58E3B6trTYNrPFxkXioFN6ZKQPV5ywo"
        participantName="Customer"
        modalities={['voice', 'chat']}
        theme="light"
        displayType="popup"
        popupPosition="bottom-right"
        popupTriggerText="Need Help?"
        onSessionStart={(sessionId) => {
          console.log('Session started:', sessionId);
        }}
        onSessionEnd={(metrics) => {
          console.log('Session ended:', metrics);
        }}
      />
    </div>
  );
}

export default App;
