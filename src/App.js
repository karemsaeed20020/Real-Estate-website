import './App.css';
import Companies from './components/Companies/Companies';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import GetStarted from './components/GetStarted/GetStarted';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Rescidences from './components/Rescidences/Rescidences';
import Values from './components/value/Values';


function App() {
  
  return (
    <div className='App'>
      <div>
        <div className='white-gradient' />
        <Header /> 
        <Hero />  
      </div>
      <Companies />
      <Rescidences />
      <Values />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
