import React from "react";

interface Expert {
  id: string;
  name: string;
  specialty: string;
  location: string;
  image: string;
}

export default function ExpertCard({ expert }: { expert: Expert }) {
  return (
    <div className="flex items-start p-3 bg-white rounded-lg shadow hover:bg-gray-100 cursor-pointer transition">
      <img
        src={expert.image}
        alt={expert.name}
        className="w-14 h-14 rounded-full object-cover"
      />
      <div className="ml-3 flex-1">
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-gray-800">{expert.name}</h3>
          <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
            CESK 인증
          </span>
        </div>

        <p className="text-sm text-gray-600 mt-0.5">{expert.specialty}</p>

        <p className="text-xs text-gray-400 mt-0.5 flex items-center">
          <i className="fas fa-map-marker-alt mr-1" />
          {expert.location}
        </p>
      </div>
    </div>
  );
}
