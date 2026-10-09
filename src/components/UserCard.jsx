import { Link } from "react-router";

export default function UserCard({ user }) {
    return (
        <div className="bg-gray-800 p-5 rounded-lg shadow-blue-400 shadow-md hover:shadow-lg transition-shadow">
            <Link to={`/users/${user.id}`} className="block">
                <h3 className="text-lg text-white font-semibold truncate" title={user.name}>
                    <i className="fa-solid fa-user mr-2 text-white"></i>
                    {user.name}
                </h3>
                <p className="text-sm text-blue-400 mb-4 truncate" title={user.email}>
                    {user.email}
                </p>
            </Link>

            <div className="text-sm text-white space-y-1">
                <p className="truncate" title={user.company.name}>
                    <span className="font-medium text-white">Perusahaan:</span> {user.company.name}
                </p>
                <p className="truncate" title={user.address.city}>
                    <span className="font-medium text-white">Kota:</span> {user.address.city}
                </p>
            </div>
        </div>
    );
}
