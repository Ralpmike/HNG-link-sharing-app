// /components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5 stick top-0 left-0 right-0 bg-white border-b border-gray-200">
      <div className="text-xl font-bold">devlinks</div>
      <ul className="flex gap-6">
        <li><Link href="/links" className="text-blue-600">Links</Link></li>
        <li><Link href="/profile-details">Profile Details</Link></li>
      </ul>
      <button className="bg-blue-600 text-white py-2 px-4 rounded-lg">Preview</button>
    </nav>
  );
};

export default Navbar;
