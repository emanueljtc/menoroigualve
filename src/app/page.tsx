/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useEffect, useState } from 'react';
import { fetchPeoples } from './services/ramdomUserService';
import { Person } from './interfaces/person';
import { ButtonPage, CardPerson, Filters } from './components';
import LoadingPage from './loading';
import { TGender } from './types/gender';
import { TCountry } from './types/country';
import { fetchCountries } from './services/countriesServices.';

/**
 * PeoplePage component is the main component of the application. It renders
 * a list of people with filters to search for specific people.
 *
 * @returns JSX.Element
 */
export default function PeoplePage() {
  // State variables
  const [peoples, setPeoples] = useState<Person[]>([]); // People results
  const [resultForPage, setResultForPage] = useState<number>(12); // Results per page
  const [gender, setGender] = useState<TGender>(null); // Gender filter
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  const [countries, setCountries] = useState<TCountry[]>([]); // Countries filter
  const [selectedCountry, setSelectedCountry] = useState<string>(''); // Selected country
  const [age, setAge] = useState<number>(0); // Age filter
  const [page, setPage] = useState<number>(1); // Current page

  /**
   * Fetches people from the API based on the provided filters.
   *
   * @param resultForPage - Number of results per page.
   * @param gender - Gender filter.
   * @param selectedCountry - Selected country filter.
   * @param page - Current page number.
   * @param age - Age filter.
   */
  const callPeople = async (
    resultForPage?: number,
    gender?: TGender,
    selectedCountry?: string,
    page: number = 1,
    age: number = 0
  ) => {
    setLoading(true);
    const response = await fetchPeoples(
      page,
      resultForPage,
      gender,
      selectedCountry ?? '',
      age
    );
    setPeoples(response.results);
    setLoading(false);
  };

  /**
   * Fetches countries from the API and sets the state variable.
   */
  const callCountries = async () => {
    try {
      const response = await fetchCountries();
      if (!response || !response.data) {
        throw new Error('Failed to fetch countries');
      }
      const { data } = response;
      const arrCountries = data.reduce((acc: TCountry[], country: TCountry) => {
        if (!country.name || !country.Iso2) {
          throw new Error('Invalid country data');
        }
        if (!acc.find((c: TCountry) => c.Iso2 === country.Iso2)) {
          acc.push({ name: country.name, Iso2: country.Iso2 });
        }
        return acc;
      }, [] as TCountry[]);
      setCountries(arrCountries);
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch countries');
    }
  };

  // Fetch people when the filters change
  useEffect(() => {
    callPeople(resultForPage, gender, selectedCountry, page, age);
  }, [resultForPage, gender, selectedCountry, page, age]);

  // Fetch countries when the people results change
  useEffect(() => {
    callCountries();
  }, [peoples]);

  return (
    <div className="mt-4 p-4 md:px-156 w-full">
      {/* Filters component */}
      <Filters
        setResultForPage={setResultForPage}
        setGender={setGender}
        setAge={setAge}
        countries={countries}
        setSelectedCountry={setSelectedCountry}
      />
      {/* Loading state */}
      {loading ? (
        <LoadingPage />
      ) : (
        <div className=" flex flex-wrap gap-6">
          {/* People results */}
          {peoples.length === 0 && <p>No hay resultados</p>}
          {peoples.map((person) => (
            <CardPerson key={person.name.first} person={person} />
          ))}
          {/* Pagination buttons */}
          <div className="w-full flex justify-center items-center mt-16 gap-16">
            <ButtonPage page={page} setPage={setPage} type="previous" />
            <ButtonPage page={page} setPage={setPage} type="next" />
          </div>
        </div>
      )}
    </div>
  );
}

