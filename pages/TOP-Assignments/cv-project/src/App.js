import './App.css';
import GeneralInfo from './Components/General-Info/GeneralInfo';
import Education from './Components/Education/Education';
import PractExp from './Components/Practical Exp/PracticalExp';

function App() {
  const titleClass = 'title';

  
  return (
    <div className="App">
        <GeneralInfo titleClass={titleClass}/>
        <Education titleClass={titleClass}/>
        <PractExp titleClass={titleClass}/>
    </div>
  );
}

export default App;
