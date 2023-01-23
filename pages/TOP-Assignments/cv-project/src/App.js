import './App.css';
import GeneralInfo from './Components/General-Info/GeneralInfo';
import Education from './Components/Education/Education';
import PractExp from './Components/Practical Exp/PracticalExp';
import Button from './Components/Button';
import CV from './Components/CV'
import { useRef, useState, useEffect } from 'react';

function App() {
  const titleClass = 'title';
  const [editMode, setEditMode] = useState(true);
  const [buttonText, setButtonText] = useState();
  const [formDisplay, setFormDisplay] = useState();
  const [cvComp, setCVComp] = useState();
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
  
/* Works but happens after render meaning CV rendered before form disappears making
   it look choppy, would have to move CV rendering to this as well and make useRefs
   dependencies
   */

  useEffect(()=>{
    if(editMode){
      setButtonText('Submit');
      setFormDisplay(formDisplay => ({display: 'inherit'}));
      setCVComp(<></>);
    }
    else{
      setButtonText('Edit');
      setFormDisplay(formDisplay => ({display: 'none'}));
      setCVComp(<CV genInfoRefs={genInfoRefs} edRefs={edRefs} pracExpRefs={pracExpRefs} />);
    }
  }, [editMode]);
  
  return (
    <div className="App">
      <form id="cv-form" style={formDisplay}>
        <GeneralInfo titleClass={titleClass} refs={genInfoRefs}
        />
        <Education titleClass={titleClass} refs={edRefs} />
        <PractExp titleClass={titleClass} refs={pracExpRefs} />
      </form>
      {cvComp}
      <Button text={buttonText} onClick={onSubmit}/>
    </div>
  );

  function onSubmit(e){
    e.preventDefault();
    setEditMode(editMode => !editMode); //value used on next click
  }
}

export default App;
