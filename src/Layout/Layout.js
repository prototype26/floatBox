import React ,{useState,useEffect}from 'react';
import './Layout.css';
import Box from '../Box/Box';
const Layout = ()=>{

    const [boxCount,setBoxCount] = useState(0);
    const [boxArr,setBoxArr] = useState([]);
    const [keyBoardVal,setKeyboardVal] = useState(true);
    const [liItemId,setLiItemId] = useState("item0");
    const [topVal,setTopVal] = useState(boxCount+100);
    const [leftVal,setLeftVal] = useState(boxCount+100);

    const addBoxHandler=()=>{
        setBoxCount(boxCount+1);
        setTopVal(boxCount+100);
        setLeftVal(boxCount+100);
        var idVal = "item"+boxCount;
        setBoxArr([...boxArr,<Box id={idVal} 
                                  topVal={topVal} 
                                  leftVal={leftVal} 
                                  zindex={boxCount+10}
                                  boxClickHandler={boxClickHandler}
                                  boxKeyCheckHandler={boxKeyCheckHandler}
                            />]);
    }
    
    const boxKeyCheckHandler = (event)=>{
        switch (event.which) {
            case 8:
                if(keyBoardVal){
                    deleteBoxHandler();
                }
                
                break;
            case 38:
            case 87:
                if(keyBoardVal){
                boxArr.forEach((ele) => {
                    if(ele.props.id == liItemId)
                    {
                    //event target is string value    
                    var topOffset = parseInt((event.target.style.top.split("px")[0])) - 15;
                    if(topOffset>-100)
                    {
                        event.target.style.top = topOffset+"px";
                    }
                    }
                })
                console.log("UP pressed");
                }
                break;
            case 40:
            case 83:
                if(keyBoardVal){
                boxArr.forEach((ele) => {
                    if(ele.props.id == liItemId)
                    {
                    //event target is string value    
                    var topOffset = parseInt((event.target.style.top.split("px")[0])) + 15;
                    if(topOffset < 300)
                    {
                        event.target.style.top = topOffset+"px";
                    }
                    }
                })
                console.log("DOWN pressed");
                }
                break;
            case 37:
            case 65:
                if(keyBoardVal){
                boxArr.forEach((ele) => {
                    if(ele.props.id == liItemId)
                    {
                    //event target is string value    
                    var leftOffset = parseInt((event.target.style.left.split("px")[0])) - 15;
                    if(leftOffset > -515)
                    {
                        event.target.style.left = leftOffset+"px";
                    }
                    }
                })
                console.log("LEFT pressed");
                }
                break;
            case 39:
            case 68:
                if(keyBoardVal){
                boxArr.forEach((ele) => {
                    if(ele.props.id == liItemId)
                    {
                    //event target is string value    
                    var leftOffset = parseInt((event.target.style.left.split("px")[0])) + 15;
                    if(leftOffset < 730)
                    {
                        event.target.style.left = leftOffset+"px";
                    }
                    }
                })
                console.log("RIGHT pressed");
                }
                break;
            default:
                break;
        }
    }

    const deleteBoxHandler =()=>{
        console.log(keyBoardVal);
        setBoxCount(boxCount-1);
        setBoxArr(boxArr.filter(ele =>ele.props.id != liItemId)) //liItemId set in box click handler
    }
     
    const boxClickHandler=(event)=>{
        event.preventDefault();
        console.log("box clicked");
        console.log(keyBoardVal)
        var eleId = event.target.parentNode.id.toString();
        setLiItemId(eleId);
        if(eleId){
        document.querySelectorAll(`ul li div`).forEach(node=>{
            node.style.borderColor = "black";
        })
        document.querySelector(`ul #${eleId} div`).style.borderColor = "red";
    }
    }

    return(
        <div className="parentDiv">
            <button className="button1" onClick={addBoxHandler}>Add box</button>
            <button className="button2" onClick={()=>setKeyboardVal(keyBoardVal?false:true)}>Toggle Keyboard</button>
            <p>{keyBoardVal?"Keyboard Enabled":"Keyboard Disabled"}</p>
            <div id="divUl">
                <ul id="ulListId">
                {boxArr}
                </ul>
            </div>
        </div>
    )
}

export default Layout;