import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Feedback from './components/Feedback';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <main>
        <Feedback />
      </main>
      <Footer />
    </div>
  );
}

export default App;
