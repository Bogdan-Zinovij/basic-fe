import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Feedback from './components/Feedback';
import Features from './components/Features';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <main>
        <Features />
        <Feedback />
      </main>
      <Footer />
    </div>
  );
}

export default App;
