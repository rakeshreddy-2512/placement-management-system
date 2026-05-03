import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Layout({ children }) {
  const { user, logout } = useAuth();
  return (
    <div>
      <nav className="bg-slate-900 text-white px-6 py-4 flex justify-between">
        <Link to="/" className="font-bold">PlacementMS</Link>
        <div className="space-x-4">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/analytics">Analytics</Link>
          {user?.role === 'admin' && <Link to="/admin">Admin</Link>}
          {user ? <button onClick={logout}>Logout</button> : <Link to="/login">Login</Link>}
        </div>
      </nav>
      <main className="max-w-6xl mx-auto p-6">{children}</main>
    </div>
  );
}
