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
    </div>
  );
}

export default App;
