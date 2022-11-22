import React from "react";
import Head from "./Head";
import Note from "./Note";
import notes from "../notes";

function mapper(note1){
    return(
        <Note 
        key={note1.id}
        note={note1.note} 
        stl={note1.stl} 
        title={note1.title}
        />
    )
}

var i=0;
var inputvalue="note";
var heading="title";
function App(){
    
    //var [note,setNote]=React.useState({...notes});
    //var nt=[...notes];

    function noteForm(){

    }

    var [nt,setnt]=React.useState([...notes]);
    function addNote(){
        console.log("pressed")
        if(inputvalue!="note" && heading!="title"){
            var clr=["aquamarine","lightcoral","plum"];
            var t=clr.length;
            var newNote=[{
                id:1,
                title:heading,
                note:inputvalue,
                stl:clr[i++%t]
            }]
            setnt([...nt,...newNote]);
        }
        else
            alert("TITLE OR NOTE NOT SET")
    }
    function form(event){
        inputvalue=event.target.value;
    }
    function form1(event){
        heading=event.target.value;
    }

    var [over,setOver]=React.useState(false);
    function overT(){
        setOver(true);
    }
    function overF(){
        setOver(false)
    }

    return (
        <div>
            <Head/>

            <div class="form">
                <input class="title" type="text" onChange={form1} placeholder="title"></input><br/>
                <input class="notetext" type="text" onChange={form} placeholder="note.."></input>
                <button style={over?{backgroundColor:"tomato"}:{backgroundColor:"rgba(0, 0, 0, 0.4)"}} onMouseOver={overT} onMouseOut={overF} type="button" onClick={addNote} class="add"><h4>+</h4></button><br/>
            </div>

            <div className="note-container">
                {nt.map(mapper)}
            </div>
           
        </div>
    )
}

export default App;