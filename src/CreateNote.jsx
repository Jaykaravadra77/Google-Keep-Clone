import React from 'react';
import '../src/index.css';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';


function CreateNote(props) {
    let [expand,setExpand]= useState(false);

    let [note, setNote] = useState({
        title: "",
        content: ""
    });
    function change(event) {
        event.preventDefault();
        let { name, value } = event.target;
        setNote((preval) => {
           return{
               ...preval,
               [name]:value
           }
     
      })
   
    } function addNote(event) {
        event.preventDefault();
        props.oncl(note);
        setNote(({ 
            title:"",
            content:""
        }))
    }
    function setEx(){
        setExpand(true);
    }
    function dbEx(){
        setExpand(false);
    }
    return (
        <>

            <div className="create_note" onDoubleClick={dbEx}>
                <form>
                    {expand?
                    <input type="text" name="title"  onChange={change} value={note.title} placeholder="title" className="change" />
                    :null}
                    <br />
                    <textarea rows="" cols="" name="content"  onChange={change} value={note.content} onClick={setEx} placeholder="Write a note"   >

                    </textarea><br />
                    {expand?
                    <button onClick={addNote}><AddIcon style={{ fontSize: 30, color: "white" }}>add_circle</AddIcon></button>
                    :null}
                </form>
            </div>

        </>
    )
}

export default CreateNote;
