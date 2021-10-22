export default function executeCommand(action, value) {
    document.execCommand(action, false, value);
    if(action==="justifyLeft"||action==="justifyCenter"||action==="justifyRight"||action==="justifyFull"){
        document.getElementById(`btn-justifyLeft`).style.background = "lightgray";
        document.getElementById(`btn-justifyCenter`).style.background = "lightgray";
        document.getElementById(`btn-justifyRight`).style.background = "lightgray";
        document.getElementById(`btn-justifyFull`).style.background = "lightgray";
    }
    if(action==="superscript"||action==="subscript"){
        document.getElementById(`btn-superscript`).style.background = "lightgray";
        document.getElementById(`btn-subscript`).style.background = "lightgray";
    }
    document.queryCommandState(action)?
        document.getElementById(`btn-${action}`).style.background = "darkgray"
        :document.getElementById(`btn-${action}`).style.background = "lightgray";
}