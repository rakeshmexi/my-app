import React,{useState} from 'react'

export default function Textform(props) {

    /*const [myStyle,setMyStyle] = useState({
        color: "dark",
        backgroundColor: "white"
    });*/

    /*const [btnText,setNewBtnText] = useState("Enable Dark Mode");

    const toggleStyle = ()=>{
        if(myStyle.color === "white"){

            setMyStyle({
                color: "#042743",
                backgroundColor: "white"
            })
            setNewBtnText("Enable Dark Mode")
        }
        else{
            setMyStyle({
                color: "white",
                backgroundColor: "#042743"
            })
            setNewBtnText("Enable Light Mode")
        }
    }*/

    const handleUpClick = ()=>{
        //console.log("Uppercase was clciked"+text);
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = ()=>{
        //console.log("Uppercase was clciked"+text);
        let newText=text.toLowerCase();
        setText(newText);
    }

    function capital_letter(str) 
    {
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    let newText=str.join(" ");
    setText(newText);
    }

    const handleclearClick = ()=>{
        //console.log("Uppercase was clciked"+text);
        let newText=" ";
        setText(newText);
    }

    const handleOnChange = (event)=>{
        //console.log("On change");
        setText(event.target.value);
    }
    
  const [text, setText] = useState("enter text here");
  return (
    <div className="container" style={{color: props.mode==="dark"?"white":"#042743"}}>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="dark"?"#042743":"white", color: props.mode==="dark"?"white":"#042743"}}  id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={handleUpClick}>convert to Uppercase</button>
            <button className="btn btn-primary" onClick={handleLoClick}>convert to Lowercase</button>
            <button className="btn btn-primary mx-3" onClick={capital_letter}>convert to Capitalcase</button>
            <button className="btn btn-primary mx-3" onClick={handleclearClick}>clear</button>
            
        </div>
        <div className="container" style={{color: props.mode==="dark"?"white":"#042743"}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{(text.split(".").length)-1} sentences</p>
            <p>{0.008 *text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </div>
    
  );
}
