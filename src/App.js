import React, {useEffect} from 'react'
import RichtextToolbar from './components/RichtextToolbar'
import './styles/app.css'

function App() {

  useEffect(()=>{
    const actionList=["bold","underline","italic","superscript","subscript","insertOrderedList","insertUnorderedList","justifyLeft","justifyCenter","justifyRight","justifyFull"]

    const textEditor = document.getElementById("richtext-editor")

    textEditor.addEventListener("click", ()=>{
        actionList.forEach(action=>{
            document.queryCommandState(action)?
            document.getElementById(`btn-${action}`).style.background = "darkgray"
            :document.getElementById(`btn-${action}`).style.background = "lightgray";
        })
    })
    textEditor.addEventListener("keyup", ()=>{
        actionList.forEach(action=>{
            document.queryCommandState(action)?
            document.getElementById(`btn-${action}`).style.background = "darkgray"
            :document.getElementById(`btn-${action}`).style.background = "lightgray";
        })
    })
  }, [])

  return (
    <div className="App">
      <div id="editorWindowWrapper">
        <RichtextToolbar />
        <div contentEditable="true" id="richtext-editor" placeholder="Please start typing..."/>
      </div>
      <div id="clause">
        <a target="_blank" href="https://icons8.com/icon/55907/align-text-left" rel="noreferrer">Align Text Left</a> favicon by <a target="_blank" href="https://icons8.com" rel="noreferrer">Icons8</a>
      </div>
    </div>
  );
}

export default App;
