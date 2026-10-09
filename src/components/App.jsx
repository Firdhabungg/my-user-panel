import { Link, Outlet, useLocation } from "react-router";

export default function App() {
  const location = useLocation();

  const headerTitle = location.pathname.includes("/users/")
    ? "User Details"
    : "User Dashboard";

  return (
    <>
      <div className="bg-gray-900 min-h-screen flex flex-col">
        <header className="bg-gradient shadow-lg">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" className="flex items-center hover:opacity-90 transition-opacity duration-200">
              <i className="fas fa-users text-white text-2xl mr-3" />
              <div className="text-white font-bold text-xl">{headerTitle}</div>
            </Link>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8 flex-grow">
          <Outlet />
        </main>
      </div>
    </>
  )
}

