export const OfficeCard = ({ icon, title, address }) => (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
      <div className="flex gap-4">
        <div className="text-gray-900 text-xl mt-1">{icon}</div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
          <p className="text-sm text-gray-700 leading-relaxed">{address}</p>
        </div>
      </div>
    </div>
  );