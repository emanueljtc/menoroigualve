import React, { Dispatch, SetStateAction } from 'react';
import Select from '../Select';
import Input from '../Input';
import { TCountry } from '@/app/types/country';
import { TGender } from '@/app/types/gender';

/**
 * Filters component for filtering people results.
 *
 * @param setResultForPage - Dispatch function to set the number of results per page.
 * @param setGender - Dispatch function to set the gender filter.
 * @param setAge - Dispatch function to set the age filter.
 * @param countries - Optional array of countries to filter by.
 * @param setSelectedCountry - Dispatch function to set the selected country filter.
 * @returns JSX.Element
 */
const Filters = ({
  setResultForPage,
  setGender,
  setAge,
  countries = [],
  setSelectedCountry,
}: {
  setResultForPage: Dispatch<SetStateAction<number>>;
  setGender: Dispatch<SetStateAction<TGender>>;
  setAge: Dispatch<SetStateAction<number>>;
  countries?: TCountry[];
  setSelectedCountry: Dispatch<SetStateAction<string>>;
}): JSX.Element => {

  return (
    // Container for the filters
    <div className="flex md:flex-row flex-col w-full md:w-2/5  justify-between">
      {/* Select component for number of results per page */}
      <Select label="Resultados por página" setValue={setResultForPage}>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </Select>
      {/* Select component for gender filter */}
      <Select label="Género" setValue={setGender} widthSelect="w-auto">
        <option value="">Seleccione</option>
        <option value="female">Femenino</option>
        <option value="male">Masculino</option>
      </Select>
      {/* Select component for country filter */}
      <Select
        label="Nacionalidad"
        setValue={setSelectedCountry}
        widthSelect="w-auto"
      >
        <option value="">Seleccione</option>
        {
          // Map through the countries array and create an option for each country
          countries.map((country) => (
            <option key={country?.Iso2} value={country?.Iso2 ?? ''}>
              {country?.name ?? ''}
            </option>
          ))
        }
      </Select>
      {/* Input component for age filter */}
      <Input label="Edad" setValue={setAge} placeHolder="Ejm. 36" />
    </div>
  );
};

export default Filters;

