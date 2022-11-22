import React from "react";

function Note(props){
    console.log(props.stl)
    return(
    <div className="note" style={{backgroundColor:props.stl}}>
      <h1>{props.title}</h1>
      <p>{props.note}</p>
    </div>
    );
}
export default Note;