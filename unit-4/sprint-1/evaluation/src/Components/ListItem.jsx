import AddItem from "./AddItem";
function ListItem(props) {
  // const { id, status, title } = props;

  const style = { display: "flex", gap: 8, justifyContent: "center" };
  return (
    <div data-testid="list-container" style={style}>
      <p data-testid="list-item">
        <b data-testid="list-item-title">Title</b>
        <span data-testid="list-item-status">status</span>
      </p>
      <button data-testid="delete-btn">DELETE</button>
    </div>
  );
}

export default ListItem;
