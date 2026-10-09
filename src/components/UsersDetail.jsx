import { Link, useNavigate } from "react-router";

export default function UsersDetail() {
    const navigation = useNavigate();

    function handleBack(e) {
        e.preventDefault();
        navigation(-1);
    }
    return (
        <>
            <div className="flex items-center mb-6">
                <a href="#" onClick={handleBack} className="text-blue-400 hover:text-blue-300 mr-4 flex items-center transition-colors duration-200">
                    <i className="fas fa-arrow-left mr-2" /> Back to Users
                </a>
                <h1 className="text-2xl font-bold text-white flex items-center">
                <i className="fas fa-id-card text-blue-400 mr-3" /> User Details
                </h1>
            </div>
            <div className="bg-gray-800 bg-opacity-80 rounded-xl shadow-custom border border-gray-700 overflow-hidden max-w-2xl mx-auto animate-fade-in">
                <div className="p-8">  
                    <div className="space-y-5 mb-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="bg-gray-700 bg-opacity-50 p-5 rounded-lg shadow-md border border-gray-600 transition-all duration-200 hover:bg-opacity-70">
                                <div className="flex items-center mb-2">
                                <i className="fas fa-user-tag text-blue-400 mr-2" />
                                <h3 className="text-gray-300 text-sm font-medium">First Name</h3>
                                </div>
                                <p className="text-white text-lg ml-6"></p>
                            </div>
                            <div className="bg-gray-700 bg-opacity-50 p-5 rounded-lg shadow-md border border-gray-600 transition-all duration-200 hover:bg-opacity-70">
                                <div className="flex items-center mb-2">
                                <i className="fas fa-user-tag text-blue-400 mr-2" />
                                <h3 className="text-gray-300 text-sm font-medium">Last Name</h3>
                                </div>
                                <p className="text-white text-lg ml-6"></p>
                            </div>
                            <div className="bg-gray-700 bg-opacity-50 p-5 rounded-lg shadow-md border border-gray-600 transition-all duration-200 hover:bg-opacity-70">
                                <div className="flex items-center mb-2">
                                <i className="fas fa-user-tag text-blue-400 mr-2" />
                                <h3 className="text-gray-300 text-sm font-medium">Email</h3>
                                </div>
                                <p className="text-white text-lg ml-6"></p>
                            </div>
                        </div>
                    
                        <div className="flex justify-end space-x-4">
                            <Link to="#" className="px-5 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 flex items-center shadow-md">
                            <i className="fas fa-arrow-left mr-2" /> Back
                            </Link>
                            <Link to="#" className="px-5 py-3 bg-gradient text-white rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-lg transform hover:-translate-y-0.5 flex items-center">
                            <i className="fas fa-user-edit mr-2" /> Edit Users
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}