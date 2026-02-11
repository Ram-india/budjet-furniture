export const InfoRow = ({ icon, label, value }) => (
    <div className="flex gap-4 items-start">
      <div className="text-gray-900 text-lg mt-1">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-medium text-gray-900">{value}</p>
      </div>
    </div>
  );