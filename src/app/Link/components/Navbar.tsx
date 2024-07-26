"use client"
import Link from 'next/link';
import { VscLink } from 'react-icons/vsc';
import { LuLink } from "react-icons/lu";
import { usePathname } from 'next/navigation';



const Navbar = () => {

  const pathname = usePathname()
  return (
    <nav className="w-full max-h-[126px] p-6 bg-gray-light">
      <div className='flex justify-between items-center h-[78px] py-[1rem] px-[1.25rem] stick top-0 left-0 right-0 bg-white border-b border-gray-200'>
        <div className="flex items-center  gap-[7px]">
          <VscLink size={26} color="white" className="bg-primary rounded-lg p-[2px]" />
          <h2 className="text-[2rem] font-bold">devlinks</h2>
        </div>
        <ul className="flex gap-6 items-center">
          <li ><Link href="/Link" className={`flex items-center gap-[7px] py-[11px] px-[27px] rounded-lg ${pathname === '/Link' ? 'bg-primary-lighter' : ''}`}>
            <LuLink /> Links
          </Link></li>
          <li><Link href="/profile-details">Profile Details</Link></li>
        </ul>
        <button className="border-[1px] text-primary border-primary-light py-[11px] px-[27px] rounded-lg">Preview</button>

      </div>
    </nav>
  );
};

export default Navbar;
