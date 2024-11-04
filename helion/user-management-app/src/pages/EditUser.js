import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchUserById, updateUser } from '../api/userApi';
import './EditUser.css';

const EditUser = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const getUser = async () => {
            const user = await fetchUserById(id);
            if (user) {
                setName(user.name);
                setEmail(user.email);
            }
        };
        getUser();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateUser(id, { id, name, email });
        navigate('/');
    };

    return (
        <div className="edit-user-container">
            <h2 className="edit-user-title">Edit User</h2>
            <form onSubmit={handleSubmit} className="edit-user-form">
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
                <button type="submit" className="submit-button">Update User</button>
            </form>
        </div>
    );
};

export default EditUser;

