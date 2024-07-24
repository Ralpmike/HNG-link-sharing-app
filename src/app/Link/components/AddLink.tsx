// /components/AddLink.js

const AddLink = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <div className="flex gap-4 items-center mt-4 w-full">

      <button onClick={handleClick} className="border-[1px] text-primary border-primary hover:bg-primary-lighter px-[17px] py-[11px] w-full rounded-lg leading-[24px] text-[1rem] font-semibold">+ Add new link</button>
    </div>
  );
};

export default AddLink;
