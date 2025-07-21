import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/NavBar';
function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Home />
        <About />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
