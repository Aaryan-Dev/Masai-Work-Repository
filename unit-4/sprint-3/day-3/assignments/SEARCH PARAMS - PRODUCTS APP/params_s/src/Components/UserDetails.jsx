import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


const getUsers = (id) => (
    
    fetch(`https://reqres.in/api/users/${id}`).then((res) => {
        return res.json();
    })

);

function UserDetails() {
    
    const [data, setData] = useState({});
    
    const param = useParams();

      console.log(param);
    useEffect(() => {
        getUsers(param.id)
            .then((res) => {
                setData(res.data);
            }).catch((err) => {
                console.log(err);
            })

    }, [param.id])

    console.log(data);

    return (
        <>
            <img src={data.avatar} width="100px" />
            <li>{data.email}</li>
            <u>{`${data.first_name} ${data.last_name}`}</u>
        </>

    );
}

export default UserDetails;