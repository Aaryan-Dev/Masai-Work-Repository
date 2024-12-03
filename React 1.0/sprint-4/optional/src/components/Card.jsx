const Card = ({ data = [], most = null }) => {
  return (
    <div data-testid="data-list">
      {data.map((item) => {
        return (
          <div data-testid="superhero-list">
            {/*All the content of the card has to be added over here*/}
            {/* name: "", height: "", weight: "", power: "", */}
            {/* sd;vksdkv */}
            <h1>{item.name}</h1>
            <h3>{item.height}</h3>
            <h3>{item.weight}</h3>
            <h3>{item.power}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
