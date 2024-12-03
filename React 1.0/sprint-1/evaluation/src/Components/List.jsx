import { useState } from "react";
import AddItem from "./AddItem";
import ListItem from "./ListItem";
const maxLength = 5;

function List() {
  // const [data, setData] = useState([]);

  return (
    <div>
      <AddItem />
      {/* <ListItem /> */}
    </div>
  );
}

export default List;
