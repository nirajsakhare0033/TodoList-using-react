import React from 'react';


const ToDoList = (props) => {

       


        return (
                <div>
                        
                
                        <li> {props.text} <button className='ui blue button' onClick={() => props.onSelect(props.id)}>Delete</button></li>
                </div>
                        
                
        );

};


export default ToDoList;