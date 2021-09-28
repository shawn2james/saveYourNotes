import './App.css';
import logo from './assets/music-icon.png';

function App() {
  return (
    <div>
      <header>
          <div className="container">
              <div className="logo w-full flex">
                  <span className="initial">S</span><span>ave</span><span className="initial">Y</span><span>our</span><span className="initial">N</span><span>otes</span>  
                  <img src={logo} alt="" />
              </div>

              <nav className="navbar flex justify-evenly">
                  <a href="/home.html" className="nav-item" id="home-tab">Home</a>
                  <a href="#" className="nav-item" id="about-tab">About</a>
                  <a href="login.html" className="nav-item" id="log-in-tab">Log in</a>
                  <button className="button-lg-light nav-item" id="sign-up-tab">
                      <span>Sign up</span>
                  </button>
              </nav>
          </div>
      </header>
    </div>
  );
}

export default App;
