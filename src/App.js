import './App.css';
import HeroSection from './components/HeroSection';
import MintingSection from './components/MintingSection';
import Footer from './components/Footer';
import NFTGallery from './components/NFTGallery';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <MintingSection />
      <NFTGallery />
      <Footer />
    </div>
  );
}

export default App;
