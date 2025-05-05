import React from "react";

interface TrainerHeaderProps {
  trainer: {
    name: string;
    profileImage?: string;
    location: string;
    specialty: string;
    experience: string;
    ceskCert?: boolean;
  };
}

export default function TrainerHeader({ trainer }: TrainerHeaderProps) {
  return (
    <div className="flex items-center bg-white rounded-lg shadow p-4">
      <img
        src={trainer.profileImage || "/default-profile.png"}
        alt={trainer.name}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div className="ml-4 flex-1">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-800">{trainer.name}</h2>
          {trainer.ceskCert && (
            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
              CESK 인증
            </span>
          )}
        </div>
        <p className="text-sm text-gray-600 mt-1">{trainer.specialty}</p>
        <p className="text-xs text-gray-500 mt-0.5">{trainer.location} · {trainer.experience}</p>
      </div>
    </div>
  );
}
