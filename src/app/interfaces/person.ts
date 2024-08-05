export interface Person {
  name: {
    title: string;
    first: string;
    last: string;
  };
  gender: string;
  dob: {
    date: string;
    age: number;
  };
  location: {
    city: string;
    state: string;
    country: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

