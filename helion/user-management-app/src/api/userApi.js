const BASE_URL = "http://localhost:5091/api/user";

export const fetchUsers = async () => {
    const response = await fetch(`${BASE_URL}`);
    return response.json();
};

export const fetchUserById = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`);
    return response.json();
};

export const addUser = async (user) => {
    const response = await fetch(`${BASE_URL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    });
    return response.json();
};

export const updateUser = async (id, user) => {
    await fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    });
};

export const deleteUser = async (id) => {
    await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
    });
};

