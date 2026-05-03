import { useEffect, useState } from 'react';
import api from '../services/api';

export default function AdminPage() {
  const [stats, setStats] = useState(null);
  useEffect(() => { api.get('/admin/stats').then((res) => setStats(res.data)); }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Admin Panel</h2>
      <div className="bg-white rounded-xl p-4 shadow">
        <pre>{JSON.stringify(stats, null, 2)}</pre>
      </div>
    </div>
  );
}
