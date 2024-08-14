import logo from './logo.svg';
import './App.css';
import BarChart from './components/BarChart';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import DoughnutChart from './components/DoughnutChart';
import RadarChart from './components/RadarChart';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
);


function App() {
  return (
    <div className="App">
     <div className='container'>
     <BarChart/> 
     </div>
     <div className='container'>
     <LineChart/> 
     </div>
     <div className='container'>
     <PieChart/> 
     </div>
     <div className='container'>
     <DoughnutChart/> 
     </div>
     <div className='container'>
     <RadarChart/> 
     </div>
    </div>
  );
}

export default App;
