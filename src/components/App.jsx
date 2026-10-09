import { Link, Outlet } from "react-router";

export default function App() {

  return (
    <>
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen flex flex-col">
              <div>
                  <header className="bg-gradient shadow-lg">
                      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                      <Link to="/" className="flex items-center hover:opacity-90 transition-opacity duration-200">
                          <i className="fas fa-users text-white text-2xl mr-3" />
                          <div className="text-white font-bold text-xl">User Panel Management</div>
                      </Link>
                      </div>
                  </header>
                  <main className="container mx-auto px-4 py-8 flex-grow">
                      <Outlet/>
                  </main>
                  </div>
          </div>
    </>
  )
}

