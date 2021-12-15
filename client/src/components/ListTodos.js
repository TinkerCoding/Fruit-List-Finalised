import React, { Fragment, useEffect, useState} from "react";

import EditTodo from "./EditTodo";
import Quantity from "./Quantity";





const ListTodos = ({setTotalCount}) => {     /// I am passing down props to my constants 
  const [todos, setTodos] = useState([]);

  //delete todo function

  const deleteTodo = async id => {
      try {
        const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
            method: "DELETE"
      });

        setTodos(todos.filter(todo => todo.todo_id !== id));
      } catch (err) {
        console.error(err.message);
      }
    };
  
  const getTodos = async () => {
      try {
        const response = await fetch("http://localhost:5000/todos");
        const jsonData = await response.json();
 

   console.log(jsonData);

   totalCount(jsonData);    ////passing in jsondata


        setTodos(jsonData);     
      } catch (err) {
        console.error(err.message);
      }
    };



 const totalCount = (todos) => {                    //// See where todo is right here, this is called a parameter, which will be defined when I call my function, i.e my totalCount function.
   let total = 0  
   
                                                    /// const is immutable, "let" you can update it 
 for (var i = 0;  i < todos.length; i++){
   
let singletodo = todos[i]

total = total + parseInt(singletodo.count);                         //assignment 

////// this is type coercion, (javaScript has a unique way of allowing a programmer not to worry about types, we will assume you are building it a string)


console.log("this is a single todo ", singletodo.count);   ///// bracket nototation lets you access each element in an array. 

 }





console.log(setTotalCount);
setTotalCount(total);


};

    useEffect(() => {
        getTodos();
        setTotalCount(4);     /// Get rid of this 4
    }, []);

    console.log(todos);

/////we are passing down props to your quantity and edittodo components.


    return ( 
      <Fragment>
       {" "}
        <table class="table mt-5 text-center">
         <thead>
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Edit</th>
            <th>Delete</th>
         </tr>
        </thead>
       <tbody>
        {/*<tr>
           <td>John</td>
           <td>Doe</td>
           <td>john@example.com</td>
         </tr>  */}


         {todos.map(todo => (
             <tr key={todo.todo_id}>
                <td>{todo.description}</td>
                <td>
                  <Quantity todo={todo}/>
                </td>
                <td>
                    <EditTodo todo={todo} />
                </td>





              
                <td>
                   <button 
                      className="btn btn-danger" 
                      onClick={() => deleteTodo(todo.todo_id)}
                    >
                      Delete
                    </button>
                </td>
             </tr>
         ))}
       </tbody> 
     </table>
   </Fragment>
   );
         };

 export default ListTodos;