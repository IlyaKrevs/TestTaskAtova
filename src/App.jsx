import './App.css';
import Header from './components/Header/Header';

import FirstSection from './components/FirstSection/FirstSection';
import SecondSection from './components/SecondSection/SecondSection';
import ThirdSection from './components/ThirdSection/ThirdSection';
import FourthSection from './components/FourthSection/FourthSection';

import TwiceColourText from './components/TwiceColourText/TwiceColourText';


function App() {
  return (
    <div className="App">
      <div className="mainWrapper">


        <Header />

        <FirstSection />

        <SecondSection />

        <ThirdSection />

        <FourthSection />

        <div className="fivethSection">

          <div className="titleContainer">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="12.5" stroke="#FFBEC0" stroke-width="3" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="30" viewBox="0 0 27 30" fill="none">
              <path d="M20.332 2.38134C22.7028 1.10127 25.5703 2.86769 25.4935 5.56089L24.9565 24.3833C24.8797 27.0765 21.9162 28.6765 19.6222 27.2634L3.59007 17.3872C1.2961 15.9741 1.39213 12.6076 3.76293 11.3275L20.332 2.38134Z" stroke="#FFBEC0" stroke-width="3" />
            </svg>

            <div className="titleText">

              <TwiceColourText basicText='Reviews By Success Students ' colourPart='Success' />

            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" fill="none">
              <path d="M1.7397 6.71773C0.991922 4.12928 3.32665 1.702 5.9422 2.34864L22.7565 6.50558C25.372 7.15221 26.3067 10.3878 24.439 12.3296L12.4318 24.8127C10.564 26.7545 7.29459 25.9462 6.54681 23.3578L1.7397 6.71773Z" stroke="#FFA395" stroke-width="3" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <circle cx="15" cy="15" r="13.5" stroke="#FFBEC0" stroke-width="3" />
            </svg>
          </div>

        </div>

      </div>
    </div >
  );
}

export default App;
