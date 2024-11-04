import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchUserById } from '../api/userApi';
import './UserDetails.css';

const UserDetails = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            const data = await fetchUserById(id);
            setUser(data);
        };
        getUser();
    }, [id]);

    if (!user) return <p>Loading...</p>;

    return (
        <div className="user-details-container">
            <h2 className="user-details-title">Detalii utilizator</h2>
            <p className="user-details-info">Nume: {user.name}</p>
            <p className="user-details-info">Email: {user.email}</p>
            <p className="user-details-text">
                Acest utilizator a fost adaugat la sistemu pe data de {user.dateAdded}. El are acces la diverse functii
                si poate sa interactioneze cu alt utilizatori in platforma. Daca doriti sa modificati detalii acestui utilizator, 
                apasați pe butonul de editare.
            </p>
            <p className="user-details-warning">
                Atentie: Informatiile trebuie verificat inainte de a fi salvate pentru a evitam erorile. Utilizatorul 
                poate sa fie eliminat din sistem daca nu mai este necesar.
            </p>
            <Link to="/" className="back-link">Inapoi la Lista de Utilizatori</Link>
        </div>
    );
};

export default UserDetails;

