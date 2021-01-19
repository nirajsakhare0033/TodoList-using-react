
import React, { useState} from 'react';
import './index';
import ToDoList from './ToDoList';

const App = () => {

        const [intTodo, setintTodo] = useState('');

        //hooks
        const[Items, setItems] = useState([]);

        const itemEvent = (event) => {
                setintTodo(event.target.value);
                        
        };

        const listOfItem = () => {
                setItems((oldItems) => {
                        return [...oldItems, intTodo];
                });
                setintTodo('');
        };

        const deleteItems = (id) => {
                console.log(deleteItems);

                setItems((oldItems) => {
                        return oldItems.filter((arrEle, index) => {
                                return index !== id;

                        })
                })

        };



        return(
                <div className='ui container'>
                        <div className='center-div'>
                                <br />
                                <h1>Todo list</h1>
                                <br />
                                <div className='ui massive icon input'> 
                                        <input type='text' placeholder='Add item' value={intTodo} onChange={itemEvent} /> 
                                        <button className='positive ui button' onClick={listOfItem}>Add-List</button>                                
                                </div>
                                <br />
                                <hr />
                                
                                <ol><h2>
                                        {Items.map((itemval, index) => {
                                               return <ToDoList key={index} id={index} text={itemval} onSelect={deleteItems} />;
                                        })}
                                </h2></ol>

                                

                        </div>
                        
                </div>
        );
};


export default App;
