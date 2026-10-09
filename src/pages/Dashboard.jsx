import { useEffect, useRef, useState } from "react";
import { useEffectOnce } from "react-use";
import { fetchUsers } from "../services/api";
import UserCard from "../components/UserCard";

export default function Dashboard() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");
    const inputRef = useRef(null);

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

    useEffect(() => {
        if (!loading && !error && inputRef.current) {
            inputRef.current.focus();
        }
    }, [loading, error]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-white">
                <p className="text-lg text-gray-600 animate-pulse">Memuat data pengguna...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="max-w-4xl mx-auto p-4 mt-8 bg-red-50 border-l-4 border-red-500 rounded">
                <h2 className="text-red-700 font-bold">Gagal Memuat Data</h2>
                <p className="text-red-600">{error.message}</p>
            </div>
        );
    }

    const userFilter = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLocaleLowerCase())
    );

    return (
        <div className="min-h-screen bg-white p-6 md:p-10">
            <div className="max-w-7xl mx-auto">

                <div className="mb-6 flex justify-center md:justify-end">
                    <input 
                        ref={inputRef}
                        type="text"
                        placeholder="Cari pengguna berdasarkan nama atau email..."
                        className="w-full md:w-1/2 lg:w-1/3 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {userFilter.length === 0 ? (
                    <div className="text-center text-gray-400 mt-10">
                        <p className="text-lg">Tidak ada user yang cocok dengan pencarian "{search}"</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {userFilter.map((user) => (
                            <UserCard key={user.id} user={user} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}