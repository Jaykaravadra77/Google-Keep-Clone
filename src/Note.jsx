import React from 'react';
import '../src/index.css';
import DeleteIcon from '@material-ui/icons/Delete';
function Note(props) {
    function del(){
         
        props.delitem(props.id);
    }
    return (
         <>
            <div className="note">
                {/* <h1>J KEEP</h1> */}
              <h1>{props.title}</h1>
              <br/>
              <p>{props.content}</p>
              <br/>
               
             <button onClick={del}><DeleteIcon/> </button>
               

           
              
               
            </div>
         </>
    )
}

export default Note;
