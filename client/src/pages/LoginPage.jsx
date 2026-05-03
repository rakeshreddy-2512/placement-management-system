import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';

export default function LoginPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'student' });
  const [isRegister, setIsRegister] = useState(false);
  const { saveAuth } = useAuth();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const endpoint = isRegister ? '/auth/register' : '/auth/login';
    const { data } = await api.post(endpoint, form);
    saveAuth(data);
    navigate('/dashboard');
  };

  return (
    <form onSubmit={submit} className="max-w-md mx-auto bg-white p-6 rounded-xl shadow space-y-4">
      <h2 className="text-2xl font-semibold">{isRegister ? 'Register' : 'Login'}</h2>
      {isRegister && <input className="w-full border p-2" placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} required />}
      <input className="w-full border p-2" placeholder="Email" type="email" onChange={(e) => setForm({ ...form, email: e.target.value })} required />
      <input className="w-full border p-2" placeholder="Password" type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} required />
      {isRegister && (
        <select className="w-full border p-2" onChange={(e) => setForm({ ...form, role: e.target.value })}>
          <option value="student">Student</option>
          <option value="company">Company</option>
          <option value="admin">Admin</option>
        </select>
      )}
      <button className="w-full bg-slate-900 text-white py-2 rounded">Continue</button>
      <button type="button" className="w-full underline" onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? 'Have an account? Login' : 'New user? Register'}
      </button>
    </form>
  );
}
