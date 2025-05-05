import React, { useState, FormEvent } from "react";
import {
  ProfileImageUploader,
  BasicInfoSection,
  SpecialtySelector,
  ExperienceSection,
  CertificatesSection,
  RegionSelector,
  IntroductionSection,
  ConsentSection,
  SubmitSection,
} from "./components";
import { TrainerPayload, registerTrainer } from "./services/registerTrainer";

interface RegistrationPageProps {
  onComplete: () => void;
}

export default function RegistrationPage({ onComplete }: RegistrationPageProps) {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [specialties, setSpecialties] = useState<string[]>([]);
  const [experience, setExperience] = useState("");
  const [certificates, setCertificates] = useState([{ name: "", issueDate: "", expiryDate: "" }]);
  const [awards, setAwards] = useState([{ name: "", year: "" }]);
  const [region, setRegion] = useState("");
  const [district, setDistrict] = useState("");
  const [address, setAddress] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [philosophy, setPhilosophy] = useState("");
  const [programs, setPrograms] = useState([
    { name: "", duration: "", price: "", description: "" },
  ]);
  const [ceskCert, setCeskCert] = useState(false);
  const [privacyAgree, setPrivacyAgree] = useState(false);

  const isDisabled = !(
    name && phone && email &&
    specialties.length > 0 &&
    experience && region && district &&
    introduction && privacyAgree
  );

  const handleSubmit = async (e?: FormEvent) => {
    if (e) e.preventDefault();
    if (isDisabled) return;

    const payload: TrainerPayload = {
      name,
      phone,
      email,
      title,
      specialties,
      experience,
      certificates,
      awards,
      region,
      district,
      address,
      introduction,
      philosophy,
      profileImage,
      programs,
      ceskCert,
    };

    try {
      await registerTrainer(payload);
      alert("트레이너 등록이 완료되었습니다.");
      onComplete();
    } catch (err) {
      console.error("등록 실패", err);
      alert("등록 중 오류가 발생했습니다.");
    }
  };

  return (
    <form
      className="flex flex-col min-h-screen bg-gray-50 pb-24"
      onSubmit={handleSubmit}
    >
      <header className="fixed top-0 w-full bg-white px-4 py-3 shadow z-10 flex items-center">
        <button
          type="button"
          onClick={onComplete}
          className="flex items-center text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-100 active:scale-95 transition transform duration-150 rounded-md px-3 py-1.5 cursor-pointer"
        >
          <i className="fas fa-chevron-left mr-1" />
          뒤로가기
        </button>
        <h1 className="text-lg font-bold text-center flex-1 -ml-6">트레이너 등록</h1>
      </header>

      <main className="mt-16 max-w-md mx-auto px-4 space-y-6">
        <ProfileImageUploader profileImage={profileImage} onImageUpload={(file) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            if (e.target?.result) setProfileImage(e.target.result as string);
          };
          reader.readAsDataURL(file);
        }} />

        <BasicInfoSection
          name={name}
          phone={phone}
          email={email}
          onChange={(field, value) => {
            if (field === "name") setName(value);
            if (field === "phone") setPhone(value);
            if (field === "email") setEmail(value);
          }}
        />

        {/* 직함 추가 */}
        <div>
          <label className="block text-sm font-medium mb-1">직함</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border px-3 py-2 rounded-md text-sm"
          />
        </div>

        <SpecialtySelector
          specialties={specialties}
          onToggle={(spec) =>
            setSpecialties((prev) =>
              prev.includes(spec) ? prev.filter((x) => x !== spec) : [...prev, spec]
            )
          }
        />

        <ExperienceSection experience={experience} onChange={setExperience} />

        <CertificatesSection
          certificates={certificates}
          onAdd={() => setCertificates([...certificates, { name: "", issueDate: "", expiryDate: "" }])}
          onChange={(idx, field, val) =>
            setCertificates((c) => {
              const copy = [...c];
              copy[idx] = { ...copy[idx], [field]: val };
              return copy;
            })
          }
          onRemove={(idx) => setCertificates(certificates.filter((_, i) => i !== idx))}
        />

        {/* 수상 이력 */}
        <div>
          <label className="block text-sm font-bold mb-2">수상 이력</label>
          <div className="space-y-3">
            {awards.map((award, idx) => (
              <div key={idx} className="flex gap-2 items-center">
                <input
                  type="text"
                  placeholder="수상명"
                  value={award.name}
                  onChange={(e) => {
                    const updated = [...awards];
                    updated[idx].name = e.target.value;
                    setAwards(updated);
                  }}
                  className="flex-1 border px-2 py-1 rounded-md text-sm"
                />
                <input
                  type="text"
                  placeholder="년도"
                  value={award.year}
                  onChange={(e) => {
                    const updated = [...awards];
                    updated[idx].year = e.target.value;
                    setAwards(updated);
                  }}
                  className="w-20 border px-2 py-1 rounded-md text-sm"
                />
                <button type="button" className="text-sm text-red-500" onClick={() => setAwards(awards.filter((_, i) => i !== idx))}>
                  삭제
                </button>
              </div>
            ))}
            <button type="button" className="text-sm text-blue-600 mt-2" onClick={() => setAwards([...awards, { name: "", year: "" }])}>
              + 수상 추가
            </button>
          </div>
        </div>

        <RegionSelector
          region={region}
          district={district}
          address={address}
          onRegionChange={setRegion}
          onDistrictChange={setDistrict}
          onAddressChange={setAddress}
        />

        <IntroductionSection text={introduction} onChange={setIntroduction} />

        {/* 철학 */}
        <div>
          <label className="block text-sm font-medium mb-1">트레이닝 철학</label>
          <textarea
            value={philosophy}
            onChange={(e) => setPhilosophy(e.target.value)}
            rows={3}
            className="w-full border px-3 py-2 rounded-md text-sm"
          />
        </div>

        {/* 프로그램 */}
        <div>
          <label className="block text-sm font-bold mb-2">프로그램</label>
          <div className="space-y-4">
            {programs.map((program, idx) => (
              <div key={idx} className="bg-gray-50 p-3 rounded-lg space-y-2">
                <input
                  type="text"
                  placeholder="프로그램명"
                  value={program.name}
                  onChange={(e) => {
                    const copy = [...programs];
                    copy[idx].name = e.target.value;
                    setPrograms(copy);
                  }}
                  className="w-full border px-2 py-1 rounded text-sm"
                />
                <input
                  type="text"
                  placeholder="기간 / 횟수"
                  value={program.duration}
                  onChange={(e) => {
                    const copy = [...programs];
                    copy[idx].duration = e.target.value;
                    setPrograms(copy);
                  }}
                  className="w-full border px-2 py-1 rounded text-sm"
                />
                <input
                  type="text"
                  placeholder="가격"
                  value={program.price}
                  onChange={(e) => {
                    const copy = [...programs];
                    copy[idx].price = e.target.value;
                    setPrograms(copy);
                  }}
                  className="w-full border px-2 py-1 rounded text-sm"
                />
                <textarea
                  placeholder="설명"
                  value={program.description}
                  onChange={(e) => {
                    const copy = [...programs];
                    copy[idx].description = e.target.value;
                    setPrograms(copy);
                  }}
                  rows={2}
                  className="w-full border px-2 py-1 rounded text-sm"
                />
                <button
                  type="button"
                  className="text-sm text-red-500"
                  onClick={() => setPrograms(programs.filter((_, i) => i !== idx))}
                >
                  삭제
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() =>
                setPrograms([...programs, { name: "", duration: "", price: "", description: "" }])
              }
              className="text-sm text-blue-600"
            >
              + 프로그램 추가
            </button>
          </div>
        </div>

        <ConsentSection
          cesk={ceskCert}
          onCesk={setCeskCert}
          privacy={privacyAgree}
          onPrivacy={setPrivacyAgree}
        />

        <SubmitSection disabled={isDisabled} onSubmit={handleSubmit} />
      </main>
    </form>
  );
}
