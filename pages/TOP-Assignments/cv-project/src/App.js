import './App.css';
import GeneralInfo from './Components/General-Info/GeneralInfo';
import Education from './Components/Education/Education';
import PractExp from './Components/Practical Exp/PracticalExp';
import Button from './Components/Button';
import CV from './Components/CV'
import { useRef, useState } from 'react';

function App() {
  const titleClass = 'title';
  const [editMode, setEditMode] = useState(true);
  const [buttonText, setButtonText] = useState();
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
  
  
  return (
    <div className="App">
      {editMode?
      <form id="cv-form">
        <GeneralInfo titleClass={titleClass} refs={genInfoRefs}
        />
        <Education titleClass={titleClass} refs={edRefs} />
        <PractExp titleClass={titleClass} refs={pracExpRefs} />
      </form>: 
          <CV genInfoRefs={genInfoRefs} edRefs={edRefs} pracExpRefs={pracExpRefs} />
        }
      <Button text={buttonText} onClick={onSubmit}/>
    </div>
  );

  function onSubmit(e){
    e.preventDefault();
    setEditMode(editMode => !editMode); //value used on next click
    buttonText === 'Submit'? setButtonText(buttonText=>'Edit'): setButtonText(buttonText=>'Submit');
  }
}

export default App;
