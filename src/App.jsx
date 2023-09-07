import './App.css';
import Header from './components/Header/Header';

import FirstSection from './components/FirstSection/FirstSection';
import SecondSection from './components/SecondSection/SecondSection';
import ThirdSection from './components/ThirdSection/ThirdSection';
import FourthSection from './components/FourthSection/FourthSection';
import FivethSection from './components/FivethSection/FivethSection';
import SixthSection from './components/SixthSection/SixthSection';

import TwiceColourText from './components/TwiceColourText/TwiceColourText';


import logoPic from './pictures/mainLogo.svg'

import fbPic from './pictures/fbIcon.svg'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="mainWrapper">


        <Header />

        <FirstSection />

        <SecondSection />

        <ThirdSection />

        <FourthSection />

        <FivethSection />

        <SixthSection />

        <Footer />



      </div>
    </div >
  );
}

export default App;
