function List(props) {
  const { data, load, error } = props;

  if (load) {
    return <h4>Loading...</h4>;
  }

  if (error) {
    return <h1>Error...</h1>;
  }

  return (
    <div>
      {data.map((item) => (
        <div>
          <hr />
          <h3>{item.title}</h3>
          <img src={item.image} width="50px" alt="img" />
          <h4>{item.category}</h4>
          <h5>{item.price}</h5>
          <h6>{item.brand}</h6>
        </div>
      ))}
    </div>
  );
}

export default List;
