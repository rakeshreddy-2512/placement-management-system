import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';

export default function DashboardPage() {
  const { user } = useAuth();
  const [data, setData] = useState([]);

  useEffect(() => {
    const load = async () => {
      if (user?.role === 'student') {
        const res = await api.get('/student/jobs/eligible');
        setData(res.data);
      } else if (user?.role === 'company') {
        const res = await api.get('/company/applications');
        setData(res.data);
      }
    };
    load();
  }, [user]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{user?.role === 'company' ? 'Company Dashboard' : 'Student Dashboard'}</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {data.map((item) => (
          <div key={item._id} className="bg-white p-4 rounded-xl shadow">
            <pre className="text-xs whitespace-pre-wrap">{JSON.stringify(item, null, 2)}</pre>
          </div>
        ))}
      </div>
    </div>
  );
}
