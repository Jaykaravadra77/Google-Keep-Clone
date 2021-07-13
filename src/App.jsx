import React, { useState } from 'react';
import Header from '../src/Header';
import Footer from '../src/Footer';
import CreateNote from '../src/CreateNote';
import Note from '../src/Note';
import '../src/index.css';

function App() {
    let [addedItems,setAdedItems]= useState([]);
  
    function addNote(note){
       setAdedItems((preval)=>{
        return [...preval,note];
       })
 
    }
    
    function deleteNote(id){
            setAdedItems((prevdata)=>{
                 return(  prevdata.filter((data,index)=>{
                       return index!==id;  
                   }))
            })
                //  prevdata.filter((data,index)=>{
                //      return index !== id
                //  })
             
            
         
    }
    return (
         <>
             <Header/> 
             <CreateNote oncl={addNote}/>
              {addedItems.map((val,index)=>{
                  return(
                      <Note title={val.title} content={val.content} key={index} id={index} delitem={deleteNote} />
                  )
              })}
             <Footer/>
         </>
    )
}

export default App;
