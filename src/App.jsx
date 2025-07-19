import './App.css';
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
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
