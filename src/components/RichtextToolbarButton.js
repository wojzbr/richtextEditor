import React from 'react'

import executeCommand from '../methods/executeCommand'

const RichtextToolbarButton = ({ title, className="richtextToolbarButton", action, value=null, text }) => {
    return (
        <button
            title={title}
            className={className}
            onMouseDown={(e)=>e.preventDefault()}
            id={`btn-${action}`}
            onClick={(e)=>{
                if (document.activeElement.id!=="tytul") executeCommand(action, value)
                else if (action !== "bold") executeCommand(action, value)
            }}
        >
            {text}
        </button>
    )
}

export default RichtextToolbarButton;