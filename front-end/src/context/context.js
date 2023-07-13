import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext(UserContextProvider);


export default function UserContextProvider(props) {



    function mahmoud() {
        console.log("mahmoud");
    }


    async function register(data) {
        console.log("called");

        try {
            const res = await axios.post('http://localhost:3001/register', data);
            return res;
        } catch (err) {
            return err;
        }
    }

    return (
        <UserContext.Provider value={{ register, mahmoud }}>
            {props.children}
        </UserContext.Provider>
    );
}