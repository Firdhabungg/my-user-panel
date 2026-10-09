import { useState } from "react";
import { Link, useParams } from "react-router";
import { useEffectOnce } from "react-use";
import { fetchUserDetails } from "../services/api";

export default function UsersDetail() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { id } = useParams();

    useEffectOnce(() => {
        const loadUsersDetail = async () => {
            try {
                const data = await fetchUserDetails(id);
                setUsers(data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        loadUsersDetail()
    });

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-50">
                <p className="text-lg text-white animate-pulse">Memuat data detail pengguna...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="max-w-4xl mx-auto p-4 mt-8 bg-red-50 border-l-4 border-red-500 rounded">
                <h2 className="text-red-700 font-bold">Gagal Memuat Data Detail Pengguna</h2>
                <p className="text-red-600">{error.message}</p>
            </div>
        );
    }
    return (
        <>
            <div className="flex items-center mb-6">
                <Link to={"/"} className="text-blue-400 hover:text-blue-300 mr-4 flex items-center transition-colors duration-200">
                    <i className="fas fa-arrow-left mr-2" /> Back to Users
                </Link>
                <h1 className="text-2xl font-bold text-white flex items-center">
                    <i className="fas fa-id-card text-blue-400 mr-3" /> {users.username}
                </h1>
            </div>
            <div className="bg-white bg-opacity-80 rounded-xl shadow-custom border border-gray-700 overflow-hidden max-w-2xl mx-auto animate-fade-in">
                <div className="p-6">
                    <div className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="bg-gray-900 bg-opacity-50 p-5 rounded-lg shadow-md border border-gray-600 transition-all duration-200 hover:bg-opacity-70">
                                <div className="flex items-center mb-2">
                                    <i className="fas fa-user-tag text-blue-400" />
                                    <h3 className="text-gray-300 text-sm font-medium">Name</h3>
                                </div>
                                <p className="text-white text-lg">{users.name}</p>
                            </div>
                            <div className="bg-gray-900 bg-opacity-50 p-5 rounded-lg shadow-md border border-gray-600 transition-all duration-200 hover:bg-opacity-70">
                                <div className="flex items-center mb-2">
                                    <i className="fas fa-user-tag text-blue-400" />
                                    <h3 className="text-gray-300 text-sm font-medium">Email</h3>
                                </div>
                                <p className="text-white text-lg">{users.email}</p>
                            </div>
                            <div className="bg-gray-900 bg-opacity-50 p-5 rounded-lg shadow-md border border-gray-600 transition-all duration-200 hover:bg-opacity-70">
                                <div className="flex items-center mb-2">
                                    <i className="fas fa-user-tag text-blue-400" />
                                    <h3 className="text-gray-300 text-sm font-medium">No Telepon</h3>
                                </div>
                                <p className="text-white text-lg">{users.phone}</p>
                            </div>
                            <div className="bg-gray-900 bg-opacity-50 p-5 rounded-lg shadow-md border border-gray-600 transition-all duration-200 hover:bg-opacity-70">
                                <div className="flex items-center mb-2">
                                    <i className="fas fa-user-tag text-blue-400" />
                                    <h3 className="text-gray-300 text-sm font-medium">Alamat</h3>
                                </div>
                                <p className="text-white text-lg">{users.address.street}, {users.address.suite}, {users.address.city}</p>
                            </div>
                            <div className="bg-gray-900 bg-opacity-50 p-5 rounded-lg shadow-md border border-gray-600 transition-all duration-200 hover:bg-opacity-70">
                                <div className="flex items-center mb-2">
                                    <i className="fas fa-user-tag text-blue-400" />
                                    <h3 className="text-gray-300 text-sm font-medium">Perusahaan</h3>
                                </div>
                                <p className="text-white text-lg">{users.company.name}</p>
                            </div>
                            <div className="bg-gray-900 bg-opacity-50 p-5 rounded-lg shadow-md border border-gray-600 transition-all duration-200 hover:bg-opacity-70">
                                <div className="flex items-center mb-2">
                                    <i className="fas fa-user-tag text-blue-400" />
                                    <h3 className="text-gray-300 text-sm font-medium">Website</h3>
                                </div>
                                <p className="text-white text-lg">{users.website}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}