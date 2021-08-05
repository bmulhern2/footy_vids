import React, { useState } from 'react';
import { gql, request } from 'graphql-request';

const url = "http://localhost:8080/graphql";

const AddMessage = () => {
    let [todo, setTodo] = useState();
    const handleChange = (e) => {
        setTodo(e.target.value);
    };
    const handleClick = () => {
        const query = gql`
        mutation {
            getVideos() {
                
            }
        }
    `;
    request(url, query).then(res => {
        console.log(res);
        window.location.reload();
    })
    };
    return (
        <div className="flex items-center">
            <input type="text" placeholder="add a todo" onChange={handleChange} />
            <button onClick={handleClick}>Add Todo</button>
        </div>
    );
};

export default AddMessage;