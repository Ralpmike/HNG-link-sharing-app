"use client"
import Image from 'next/image';
import AddLink from './AddLink';
import DisabledButton from '@/app/reusables/DisabledButton';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const CustomizeLinks = () => {

  const [toggleComponent, setToggleComponent] = useState(false);

  const handleToggle = () => {
    setToggleComponent(!toggleComponent);
  }

  return (
    <div className='w-full flex flex-col items center'>
      <div className=" max-w-[50.5rem] flex flex-col gap-6 p-10 bg-white h-[739px]">
        <div className='gap-2 flex flex-col'>
          <h2 className="font-bold text-dark leading-[3rem] text-[2rem]">Customize your links</h2>
          <p className="leading-[1.5rem] text-dark-light text-[16px] font-normal">Add/edit/remove links below and then share all your profiles with the world!</p>
        </div>
        <div className='flex flex-col gap-6'>
          <AddLink onClick={handleToggle} />
          {!toggleComponent ?

            (<div className=" bg-gray-light rounded-lg flex flex-col items-center gap-10 px-[1.25rem] py-[3.9375rem]">
              <Image
                width={300}
                height={200}
                alt='profile'
                src={'/images/addlink-img.svg'}
              />
              <div className='flex-col flex gap-6 items-center justify-center  '>
                <h2 className="font-bold text-dark leading-[3rem] text-[2rem]">Let&#39;s get you started</h2>
                <p className='leading-[1.5rem] w-full max-w-[488px] text-center text-dark-light text-[16px] font-normal'>Use the &#34;Add new link&#34; button to get started. Once you have more than one link, you can reorder and edit them. We&#39;re here to help you share your profiles with everyone!</p>
              </div>

            </div>)
            :
            "hhjhhhjjhhhhjjhhjhjjh"
          }
        </div>
      </div>
      <div>
        <DisabledButton />
      </div>
    </div>
  );
};

export default CustomizeLinks;
