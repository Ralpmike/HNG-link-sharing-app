"use client"
import Image from 'next/image';
import AddLink from '../components/AddLink';
import { useRouter } from 'next/navigation';
import SaveButton from '@/app/reusables/SaveButton';
import LinkForm from '../components/LinkForm';
import { Fragment } from 'react';

const CustomizeLinks = () => {

  const router = useRouter()

  return (
    <div className='flex flex-col w-full'>
      <div className=" max-w-[50.5rem] flex flex-col gap-6 p-10 bg-white w-full h-[739px]">
        <div className='gap-2 flex flex-col'>
          <h2 className="font-bold text-dark leading-[3rem] text-[2rem]">Customize your links</h2>
          <p className="leading-[1.5rem] text-dark-light text-[16px] font-normal">Add/edit/remove links below and then share all your profiles with the world!</p>
        </div>
        <div className='flex flex-col gap-6 '>
          <AddLink handleClick={() => router.push('')} />
          <LinkForm newLink={{
            platform: '',
            url: ''
          }} setNewLink={function (link: { platform: string; url: string; }): void {
            throw new Error('Function not implemented.');
          }} handleAddLink={function (): void {
            throw new Error('Function not implemented.');
          }} />
        </div>
      </div>
      <div>
        <SaveButton />
      </div>
    </div>
  );
};

export default CustomizeLinks;
