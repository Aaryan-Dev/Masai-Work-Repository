import React, { memo, useMemo } from "react";

const expensiveOperation = (ms) => {
  const start = Date.now();
  while (Date.now() - start < ms) {
    continue;
  }
  return true;
};

const TodoItems = ({ id, title, status, handleToggle, handleDelete }) => {
  //expensive synchronous operation/logic -> that takes too much amount of time to complete.

  //functions -> synchronous -> take time -> Dev -> 200

  useMemo(() => expensiveOperation(200), []);
  //   expensiveOperation(200);

  //   console.log(isDelayed);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", margin: "0.5rem 0" }}
    >
      <div>{title}</div>
      <div>{status ? "True" : "False"}</div>
      <button onClick={() => handleToggle(id)}>Toggle status</button>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
};

// props -> data

// const checkEquality = (prevProps, currentProps) => {
//   console.log(prevProps, currentProps);
//   //true or false
//   return (
//     prevProps.status === currentProps.status &&
//     prevProps.title === currentProps.title
//   );
//   //   return {} //expression
//   //   return () // multiline data
// };

export default React.memo(TodoItems);

// prevProps => handleToggle -> object
// currentProps => handleToggle -> object
// {} === {} ? How is the object different for same function?
// {} -> Ax183
// {} -> Ax183
// {} === {} true

// export default React.memo(TodoItems, checkEquality);

// === on the props; Prev Render  and the current Render
// if the props have changed, then re-render the component
// else don't re-render

// {} === {}; false -> useSelector issue
//

// React.memo -> with equality function -> by skipping the func check
// React.memo -> with useCallback
