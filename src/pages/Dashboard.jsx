import { useState } from "react";
import { useEffectOnce } from "react-use";
import { fetchUsers } from "../services/api";

export default function Dashboard() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffectOnce(() => {
        const loadUsers = async () => {
            try {
                const data = await fetchUsers();
                setUsers(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        loadUsers();
    });

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <>
            <h1>Dashboard Page</h1>
            <p>Selamat datang di halaman Dashboard</p>
        </>
    );
}