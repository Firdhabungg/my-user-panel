import { Link, Outlet, useLocation } from "react-router";

export default function App() {
  const location = useLocation();

  return (
    <>
      <div className="bg-white min-h-screen flex flex-col">
        <header className="bg-gradient-to-r from-blue-800 to-gray-900 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/users" className="flex items-center hover:opacity-90 transition-opacity duration-200">
              <i className="fas fa-users text-white text-2xl mr-3" />
              <div className="text-white font-bold text-xl">User Dashboard</div>
            </Link>
          </div>
        </header>
        <main className="container mx-auto p-4 flex-grow">
          <Outlet />
        </main>
      </div>
    </>
  )
}

