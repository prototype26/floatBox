import React,{useState} from 'react';
import './Box.css';
const Box = (props)=>{

    var boxStyle ={
        top: props.topVal,
        left: props.leftVal,
    }

    var listItemStyle = {
        zIndex : props.zindex,        
    }

    return(
    <li style={listItemStyle} id={props.id} >
    <div style={boxStyle} className="box" 
    onClick={(event)=>props.boxClickHandler(event)} onKeyDown={(event)=>props.boxKeyCheckHandler(event)} tabIndex="0"><p>Box{props.id}</p>
    </div>
    </li>
    );
}

export default Box;