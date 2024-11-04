import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../api/userApi';
import './AddUser.css';

const AddUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addUser({ name, email });
        navigate('/');
    };

    return (
        <div className="add-user-container">
            <h2 className="add-user-title">Add User</h2>
            <form onSubmit={handleSubmit} className="add-user-form">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="input-field"
                    required
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="input-field"
                    required
                />
                <button type="submit" className="submit-button">Add User</button>
            </form>
        </div>
    );
};

export default AddUser;

