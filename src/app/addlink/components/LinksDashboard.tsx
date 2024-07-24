"use client"

import { useState } from 'react';
import Navbar from '../../Link/components/Navbar';
import PhonePreview from './PhonePreview';
import LinkForm from './LinkForm';
import LinkList from './LinkList';
import SaveButton from "../../reusables/SaveButton";

interface Link {
  platform: string;
  url: string;
}

export default function LinksDashboard() {
  const [links, setLinks] = useState<Link[]>([]);
  const [newLink, setNewLink] = useState<Link>({ platform: '', url: '' });

  const handleAddLink = () => {
    setLinks([...links, newLink]);
    setNewLink({ platform: '', url: '' });
  };

  const handleRemoveLink = (index: number) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <Navbar />
      <div className="flex flex-1 p-8">
        <PhonePreview links={links} />
        <div className="flex-1 bg-white shadow-md rounded-md p-8">
          <LinkForm newLink={newLink} setNewLink={setNewLink} handleAddLink={handleAddLink} />
          <LinkList links={links} handleRemoveLink={handleRemoveLink} />
        </div>
      </div>
      <SaveButton />
    </div>
  );
};

