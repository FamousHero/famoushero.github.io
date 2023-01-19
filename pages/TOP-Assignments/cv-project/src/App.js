import './App.css';
import GeneralInfo from './Components/General-Info/GeneralInfo';
import Education from './Components/Education/Education';
import PractExp from './Components/Practical Exp/PracticalExp';
import SubmitButton from './Components/SubmitButton';
import CV from './Components/CV'
import { useRef, useState } from 'react';

function App() {
  const titleClass = 'title';
  const genInfoRefs = {
    nameRef: useRef(),
    phoneRef: useRef(),
    emailRef: useRef(),
  };
  const edRefs = {
    schoolRef: useRef(),
    majorRef: useRef(),
    startRef: useRef(),
    endRef: useRef(),
    
  };
  const pracExpRefs = {
    companyRef: useRef(),
    positionRef: useRef(),
    tasksRef: useRef(),
    startRef: useRef(),
    endRef: useRef()
  }

  const [cvComp, setCvComp] = useState();
  
  return (
    <div className="App">
      <form id="cv-form">
        <GeneralInfo titleClass={titleClass} refs={genInfoRefs}
        />
        <Education titleClass={titleClass} refs={edRefs} />
        <PractExp titleClass={titleClass} refs={pracExpRefs} />
        <SubmitButton onClick={onSubmit}/>
      </form>
      {cvComp}
    </div>
  );

  function onSubmit(e){
    e.preventDefault();
    console.log(genInfoRefs["nameRef"]);
    console.log('Education start: ', edRefs['startRef'].current.value);
    console.log('Education end: ', edRefs['endRef'].current.value);
    console.log('Practical Exp start: ', pracExpRefs['startRef'].current.value);
    console.log('Practical Exp end: ', pracExpRefs['endRef'].current.value);
    setCvComp(oldCV => <CV genInfoRefs={genInfoRefs} edRefs={edRefs} pracExpRefs={pracExpRefs} />);
  }
}

export default App;
