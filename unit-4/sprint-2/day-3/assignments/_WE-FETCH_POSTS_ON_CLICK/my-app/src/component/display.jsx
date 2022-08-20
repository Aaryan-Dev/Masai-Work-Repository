

function Display(props) {
    const { data } = props;
    
    return (
        <>
            { data.map((el) => <li>{el.title}</li>)}
            
        </>
    );  

}
  

export default Display;