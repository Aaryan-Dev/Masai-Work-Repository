import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useSearchParams } from "react-router-dom";
    
const getUsers = (page) => (
    fetch(`https://reqres.in/api/users?page=${page}`).then((res) => {
        return res.json();
    })
    );

function Users() {

    const [data, setData] = useState([]);
    const [search, setSearch] = useSearchParams();
    
    const currentPage = Number(search.get("page")) || 1;

    //saving
    const [page, setPage] = useState(currentPage);
    //not saving
    const [text, setText] = useState(null);



    useEffect(() => {
       
        getUsers(page).then((res) => {
            setData(res.data)
            console.log(res)
        }).catch((err) => {
            console.log(err);
        })
        
    }, [page])

    useEffect(() => {
        setSearch({page, q:text})
    }, [page, text]);

    console.log(data);
    
    return (
        <>
            <button disabled={page==1} onClick={() => setPage(page - 1)}>Prev</button>
            <button  >{page}</button>
            <button disabled={page == 2} onClick={() => setPage(page + 1)}>Next</button>
            
             <input value={text} onChange={(e)=>setText(e.target.value)} type="text" placeholder="Type to see in url"/>

            {data.map((el) => (
                <Link key={el.id} to={`/users/${el.id}`} > {el.first_name }</Link>
            ))}
        </>
                );
                

}

export default Users;