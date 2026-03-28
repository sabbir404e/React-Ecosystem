import { Suspense } from 'react';
import './App.css';
import DaisyNav from './components/DaisyNav/DaisyNav';
import NavBar from './components/NavBar/NavBar';
import PricingOptions from './components/PricingOptions/PricingOptions';
import ResultsCharts from './components/ResultsCharts/ResultsCharts';
import axios from 'axios';
import MarksChart from './components/MarksChart/MarksChart';


const pricingPromise = fetch('pricingPlans.json').then(res => res.json());
const marksPromise = axios.get('marksData.json');

function App() {

  return (
    <>
        <header>
            {/* <DaisyNav></DaisyNav> */}
          <h2 className='text-5xl font-bold mb-10'>Connect with us</h2>
          <NavBar></NavBar>
        </header>

        <main>
           <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
              <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
              <ResultsCharts></ResultsCharts>
           </Suspense>

           <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
              <MarksChart marksPromise={marksPromise}></MarksChart>
           </Suspense>
        </main>

          
    </>
  )
}

export default App
