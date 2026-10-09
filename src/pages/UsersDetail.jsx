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
                <Link to={"/users"} className="text-blue-500 hover:text-blue-300 mr-4 flex items-center transition-colors duration-200">
                    <i className="fas fa-arrow-left mr-2" /> Back to Users
                </Link>
                <h1 className="text-2xl font-bold text-white flex items-center">
                    User Details
                </h1>
            </div>
            <div className="bg-gray-800 bg-opacity-80 rounded-xl shadow-custom shadow-blue-400 shadow-md hover:shadow-lg overflow-hidden max-w-2xl mx-auto animate-fade-in">
                <div className="p-6">
                    <div className="space-y-5">
                        <div className="flex justify-center items-center">
                                <div className="flex flex-col items-center gap-2">
                                    <i className="fas fa-user text-blue-400 text-6xl" />
                                    <p className="text-white text-2xl font-bold">{users.username}</p>
                                </div>
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                            <div className="bg-gray-900 bg-opacity-50 p-3 rounded-lg shadow-md border border-gray-600 transition-all duration-200 hover:bg-opacity-70">
                                <div className="flex items-center mb-2">
                                    <i className="fa-solid fa-id-card text-blue-500 mr-2" />
                                    <h3 className="text-gray-300 text-sm font-medium">Full Name</h3>
                                </div>
                                <p className="text-white text-lg">{users.name}</p>
                            </div>
                            <div className="bg-gray-900 bg-opacity-50 p-3 rounded-lg shadow-md border border-gray-600 transition-all duration-200 hover:bg-opacity-70">
                                <div className="flex items-center mb-2">
                                    <i className="fa-solid fa-envelope text-blue-500 mr-2" />
                                    <h3 className="text-gray-300 text-sm font-medium">Email</h3>
                                </div>
                                <p className="text-white text-lg">{users.email}</p>
                            </div>
                            <div className="bg-gray-900 bg-opacity-50 p-3 rounded-lg shadow-md border border-gray-600 transition-all duration-200 hover:bg-opacity-70">
                                <div className="flex items-center mb-2">
                                    <i className="fa-solid fa-phone text-blue-500 mr-2" />
                                    <h3 className="text-gray-300 text-sm font-medium">Phone</h3>
                                </div>
                                <p className="text-white text-lg">{users.phone}</p>
                            </div>
                            <div className="bg-gray-900 bg-opacity-50 p-3 rounded-lg shadow-md border border-gray-600 transition-all duration-200 hover:bg-opacity-70">
                                <div className="flex items-center mb-2">
                                    <i className="fa-solid fa-map-marker-alt text-blue-500 mr-2" />
                                    <h3 className="text-gray-300 text-sm font-medium">Address</h3>
                                </div>
                                <p className="text-white text-lg">{users.address.street}, {users.address.suite}, {users.address.city} - ({users.address.zipcode})</p>
                            </div>
                            <div className="bg-gray-900 bg-opacity-50 p-3 rounded-lg shadow-md border border-gray-600 transition-all duration-200 hover:bg-opacity-70">
                                <div className="flex items-center mb-2">
                                    <i className="fa-solid fa-building text-blue-500 mr-2" />
                                    <h3 className="text-gray-300 text-sm font-medium">Company</h3>
                                </div>
                                <p className="text-white text-lg">{users.company.name}</p>
                            </div>
                            <div className="bg-gray-900 bg-opacity-50 p-3 rounded-lg shadow-md border border-gray-600 transition-all duration-200 hover:bg-opacity-70">
                                <div className="flex items-center mb-2">
                                    <i className="fa-solid fa-globe text-blue-500 mr-2" />
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