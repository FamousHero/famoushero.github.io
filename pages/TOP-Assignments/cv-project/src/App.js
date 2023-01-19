import './App.css';
import GeneralInfo from './Components/General-Info/GeneralInfo';
import Education from './Components/Education/Education';
import PractExp from './Components/Practical Exp/PracticalExp';
import SubmitButton from './Components/SubmitButton';
import { useRef } from 'react';

function App() {
  const titleClass = 'title';
  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  
  return (
    <div className="App">
      <form id="cv-form">
        <GeneralInfo titleClass={titleClass} nameRef={nameRef}
          phoneRef={phoneRef} emailRef={emailRef}
        />
        <Education titleClass={titleClass}/>
        <PractExp titleClass={titleClass}/>
        <SubmitButton onClick={onSubmit}/>
      </form>
    </div>
  );

  function onSubmit(e){
    e.preventDefault();
    console.log(nameRef.current.value, " ",
    phoneRef.current.value, " ", 
    emailRef.current.value);
    
  }
}

export default App;
