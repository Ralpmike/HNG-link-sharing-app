
import Image from "next/image";

const ProfilePreview = () => {
  return (
    <div className="border-2 max-w-[560px] bg-white h-[834px] w-full flex justify-center items-center">
      <div className="border-[1px] px-[11px] py-[5px] rounded-[60px] max-w-[306px] w-full border-dark-light ">
        <div className="w-full  max-w-[285px] h-[631px] mx-auto border-dark-light relative rounded-lg flex flex-col items-center justify-center">
          <Image
            src={"/images/Subtractmobile.png"}
            width={285}
            height={611}
            alt="profile"
            className="w-full"

          />
          <div className="object-cover  absolute z-10">
            <div className="w-24 h-24 bg-gray-300 rounded-full mb-4">Rapha</div>
            <div className="w-3/4 h-6 bg-gray-300 rounded mb-2">Micha</div>
            <div className="w-3/4 h-6 bg-gray-300 rounded">Uda</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePreview;
