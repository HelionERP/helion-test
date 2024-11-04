import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchUsers, deleteUser } from '../api/userApi';
import './UserList.css';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers().then(setUsers);
    }, []);

    const handleDelete = async (id) => {
        await deleteUser(id);
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <div className="user-list-container">
            <h1 className="user-list-title">User List</h1>
            <Link to="/add-user" className="user-list-add-link">Add New User</Link>
            <ul className="user-list">
                {users.map(user => (
                    <li className="user-list-item" key={user.id}>
                        <span>{user.name} - {user.email}</span>
                        <div className="user-list-actions">
                            <Link to={`/user/${user.id}`} className="user-action">Details</Link>
                            <Link to={`/edit-user/${user.id}`} className="user-action">Edit</Link>
                            <button onClick={() => handleDelete(user.id)} className="user-delete">Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;

