import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Feedback from './components/Feedback';
import Features from './components/Features';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <main>
        <Features />
        <Info />
        <Feedback />
      </main>
      <Footer />
    </div>
  );
}

export default App;
