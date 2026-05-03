import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const sample = [
  { month: 'Jan', placements: 12 },
  { month: 'Feb', placements: 18 },
  { month: 'Mar', placements: 22 },
  { month: 'Apr', placements: 27 }
];

export default function AnalyticsPage() {
  return (
    <div className="bg-white p-6 rounded-xl shadow h-96">
      <h2 className="text-2xl font-semibold mb-4">Placement Analytics</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={sample}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="placements" fill="#0f172a" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
