const API_URL = import.meta.env.VITE_API_PATH || 'https://jsonplaceholder.typicode.com/';

export const fetchUsers = async () => {
    try {
        const response = await fetch(`${API_URL}users`);

        if (!response.ok) {
            throw new Error(`Gagal mengambil data! Status HTTP: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching users:", error);

        throw error;
    }
};
