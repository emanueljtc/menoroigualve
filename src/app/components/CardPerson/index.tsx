import { Person } from '@/app/interfaces/person';
import Image from 'next/image';
import React from 'react';
import { Nunito, Lato } from 'next/font/google';

const nunito = Nunito({ subsets: ['latin'] });
const lato = Lato({ subsets: ['latin'], weight: '400' });

const CardPerson = ({ person }: { person: Person }) => {
  const { name, picture, location, dob, gender } = person;
  return (
    <div className="w-full md:w-85 bg-white flex p-2 gap-4  rounded-lg">
      <div className="w-full">
        <Image
          src={picture.large}
          alt="Avatar"
          width={100}
          height={100}
          className="w-full rounded-lg"
        />
      </div>
      <div className="w-full flex flex-col gap-2">
        <p
          className={`${nunito.className} text-2xl font-normal text-primary-30`}
        >
          {name.first} {name.last}
        </p>
        <p className={`${lato.className} text-sm tracking-wide text-gray-30`}>
          {location.country}
        </p>
        <p className={`${lato.className} text-sm  tracking-wide text-gray-30`}>
          {gender === 'male' ? 'Masculino' : 'Femenino'}
        </p>
        <p className={`${lato.className} text-sm  tracking-wide text-gray-30`}>
          {dob.age} años
        </p>
      </div>
    </div>
  );
};

export default CardPerson;

