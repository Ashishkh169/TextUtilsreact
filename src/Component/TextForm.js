import React, {useState} from 'react'

export default function TextForm(props) {
     const handleUpClick = ()=>{
        //    console.log("UpperCase was Clicked" + text);
           let newText= text.toUpperCase();
           setText(newText);
           props.showAlert("Converted to uppercase!" , "success");
     }

     const handleLoClick = ()=>{
        // console.log("UpperCase was Clicked" + text);
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!" , "success");
  }

    
   const handleClearClick = ()=>{
          let newText ="";
          setText(newText);
   } 

 
     const handleOnChange= (e)=>{
        //   console.log("On Change");
          setText(e.target.value);
     }
       
    const [text, setText] = useState("");
    // const [myStyle, setMyStyle] = useState({
    //      color : 'black',
    //      backgroundColor : 'white',
    //      button : '#0d6efd'
    // })

    // const [btnText, setBtnText] = useState("Enable Dark Mode");
    // const toggleStyle = ()=>{
    //       if(myStyle.color === 'white'){
    //           setMyStyle({
    //               color : 'black',
    //               backgroundColor : 'white'
    //           })

    //           setBtnText('Enable Dark Mode');
    //       }
    //       else{
    //         setMyStyle({
    //           color : 'white',
    //           backgroundColor : 'black',
    //           border:'2px solid #ffffff',
    //           padding:'40px'
    //       })

    //       setBtnText('Enable light Mode');
    //       }
    // }
  return (
    <>
     
    <div className='container my-3' style={{color : props.mode === 'dark'?'white':'black'}}>
     <h1>{props.heading}</h1>
     <div className="mb-3">
     <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}}  id="exampleFormControlTextarea1" rows="8"></textarea>
    <button className='btn btn-danger my-3 mx-1' onClick={handleUpClick}>Convert To Uppercase</button>
    <button className='btn btn-danger my-3 mx-1' onClick={handleLoClick}>Convert To LowerCase</button>
    <button className='btn btn-danger my-3 mx-1' onClick={handleClearClick}>Clear All Text</button>

  </div>
    </div>
    <div className="container demo" style={{color : props.mode === 'dark'?'white':'black'}}>
          <h1>Your Text Summary</h1>
          <p>{text.split(" ").length} words and {text.length} characters</p>
           <p>{0.008 * text.split(" ").length}minutes read</p>
           <h2>Preview</h2>
           <p>{text.length>0?text:"Enter something in the textbox in the textbox above to preview it here"}</p>
    </div>

    
    </>
  )
}
