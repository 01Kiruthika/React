import React, { useReducer, useState } from "react";

const initialState = {
    users: []
};

function reducer(state, action) {
    debugger;
    switch (action.type) {
        case "ADD_USER":
            return {
                ...state,
                users: [...state.users, action.payload]

            };



        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter((user) => user.id !== action.payload)
            };


        case "UPDATE_USER":
            return {
                ...state,
                users: state.users.map((user) =>
                    user.id === action.payload.id
                        ? { ...user, name: action.payload.name }
                        : user
                )
            };


        default:
            return state;
    }
}

export default function Task() {
    const [state, dispatch] = useReducer(reducer, initialState);//CREATE SYNTAX
    const [name, setName] = useState("");//FOR NAME
    const [editId, setEditId] = useState(null);//FOR EDIT

    const handleSubmit = () => {
        debugger;
        if (!name.trim()) return;

        if (editId) {
            dispatch({
                type: "UPDATE_USER",
                payload: {
                    id: editId,
                    name: name
                }
            });
            setEditId(null);
        } else {
            dispatch({
                type: "ADD_USER",
                payload: {
                    id: Date.now(),
                    name: name
                }
            });
        }

        setName("");
    };

    const handleEdit = (user) => {
        debugger;
        setName(user.name);//FILL NAME IN INPUT BOX
        setEditId(user.id);//EDIT MODE ON
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>useReducer CRUD Example</h2>

            <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />


            <button onClick={handleSubmit}>
                {editId ? "Update" : "Add"}
            </button>

            <ul>
                {state.users.map((user) => (
                    <li key={user.id}>
                        {user.name}

                        <button onClick={() => handleEdit(user)}>
                            Edit
                        </button>

                        <button
                            onClick={() =>
                                dispatch({
                                    type: "DELETE_USER",
                                    payload: user.id
                                })
                            }
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div >
    );
}