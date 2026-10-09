export default function UserCard({ user }) {
    return (
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800 truncate" title={user.name}>
                {user.name}
            </h3>
            <p className="text-sm text-gray-500 mb-4 truncate" title={user.email}>
                {user.email}
            </p>

            <div className="text-sm text-gray-900 space-y-1">
                <p className="truncate" title={user.company.name}>
                    <span className="font-medium text-gray-700">Perusahaan:</span> {user.company.name}
                </p>
                <p className="truncate" title={user.address.city}>
                    <span className="font-medium text-gray-700">Kota:</span> {user.address.city}
                </p>
            </div>
        </div>
    );
}
