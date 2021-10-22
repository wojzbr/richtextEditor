import React from 'react'
import RichtextToolbarButton from './RichtextToolbarButton'

const SymbolsConsole = ({id, symbols}) => {
    return (
        <div
            onMouseOver={()=>document.getElementById(id).style.visibility="visible"}
            onMouseOut={()=>document.getElementById(id).style.visibility="hidden"}
            id={id}
        >
            {symbols.map(letter=><RichtextToolbarButton className="symbolsConsoleButton" action="insertHtml" value={letter} text={letter}/>)}


        </div>
    )
}

export default SymbolsConsole