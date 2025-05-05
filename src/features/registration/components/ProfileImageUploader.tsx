import React from "react";

export interface ProfileImageUploaderProps {
  profileImage: string | null;
  onImageUpload: (file: File) => void;
}

export default function ProfileImageUploader({
  profileImage,
  onImageUpload,
}: ProfileImageUploaderProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) onImageUpload(e.target.files[0]);
  };

  return (
    <div className="flex flex-col items-center my-6">
      <div className="relative w-24 h-24 mb-2">
        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border-2 border-blue-500">
          {profileImage
            ? <img src={profileImage} alt="프로필" className="object-cover w-full h-full"/>
            : <i className="fas fa-user text-3xl text-gray-400"></i>
          }
        </div>
        <label htmlFor="profile-upload" 
               className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer shadow-md">
          <i className="fas fa-camera"></i>
        </label>
        <input id="profile-upload" type="file" accept="image/*" className="hidden"
               onChange={handleChange}/>
      </div>
      <p className="text-sm text-gray-500">프로필 사진을 등록해주세요</p>
    </div>
  );
}
