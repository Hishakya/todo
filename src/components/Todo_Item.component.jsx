import React from "react";


const TodoItem = ({ todo }) => {
  return (
    <React.Fragment>
      <div >
        {todo}
      </div>
    </React.Fragment>
  );
};

export default TodoItem;
