import React from "react";

function ToDoItem(props){

  return (
    <div>
      <li>{props.text} <button onClick={() => {
      props.onChecked(props.id)
    }} style={{float: "right"}}>Delete</button></li>
    </div>
  );
}

export default ToDoItem;