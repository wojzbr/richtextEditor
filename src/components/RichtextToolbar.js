import React from 'react'
import SymbolsConsole from './SymbolsConsole';

import {
    AiOutlineOrderedList,
    AiOutlineAlignLeft, AiOutlineAlignCenter, AiOutlineAlignRight, AiOutlineMenu,
    AiOutlineUndo, AiOutlineRedo
} from "react-icons/ai"

import RichtextToolbarButton from './RichtextToolbarButton';

const greekAlphabet = ["α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ν", "ξ", "ο", "π", "ρ", "σ", "τ", "υ", "φ", "χ", "ψ", "ω"]
const mathSymbols = ["°", "±", "÷", "∞", "Σ", "√", "∛", "∫", "∅", "∆", "≤", "≥"]

const RichtextToolbar = () => {
    
    return (
        <div id="richtextToolbarWrapper">
            <RichtextToolbarButton action="bold" title="pogrubienie" text={<b>B</b>} />

            <RichtextToolbarButton action="underline" title="podkreślenie" text={<u>U</u>} />

            <RichtextToolbarButton action="italic" title="kursywa" text={<i>I</i>} />

            <RichtextToolbarButton action="superscript" title="indeks górny" text={<span>x<sup>n</sup></span>} />

            <RichtextToolbarButton action="subscript" title="indeks dolny" text={<span>x<sub>n</sub></span>} />

            <RichtextToolbarButton action="insertOrderedList" title="lista numerowana" text={<AiOutlineOrderedList size={20}/>} />

            <RichtextToolbarButton action="insertUnorderedList" title="lista nienumerowana" text="•" />

            <button
                title="alfabet grecki" 
                onClick={(e)=>e.preventDefault()}
                onMouseOver={()=>document.getElementById("greekLettersConsole").style.visibility="visible"}
                onMouseOut={()=>document.getElementById("greekLettersConsole").style.visibility="hidden"}
                className="richtextToolbarButton">
                α β
            </button>

            <SymbolsConsole id="greekLettersConsole" symbols={greekAlphabet}/>

            <button
                title="symbole matematyczne" 
                onClick={(e)=>e.preventDefault()}
                onMouseOver={()=>document.getElementById("mathSymbolsConsole").style.visibility="visible"}
                onMouseOut={()=>document.getElementById("mathSymbolsConsole").style.visibility="hidden"}
                className="richtextToolbarButton">
                ±
            </button>
            
            <SymbolsConsole id="mathSymbolsConsole" symbols={mathSymbols}/>

            <RichtextToolbarButton action="undo" title="cofnij zmianę" text={<AiOutlineUndo size={20}/>} />

            <RichtextToolbarButton action="redo" title="przywróć zmianę" text={<AiOutlineRedo size={20}/>} />

            <RichtextToolbarButton action="justifyLeft" title="wyrównanie do lewej" text={<AiOutlineAlignLeft size={20}/>} />

            <RichtextToolbarButton action="justifyCenter" title="wyrównanie do środka" text={<AiOutlineAlignCenter size={20}/>} />

            <RichtextToolbarButton action="justifyRight" title="wyrównanie do prawej" text={<AiOutlineAlignRight size={20}/>} />

            <RichtextToolbarButton action="justifyFull" title="justowanie" text={<AiOutlineMenu size={20}/>} />
        </div>
    )
}

export default RichtextToolbar;