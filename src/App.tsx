import { Refine, Resource } from "@pankod/refine";

import "@pankod/refine/dist/styles.min.css";
import { DataProvider } from "@pankod/refine-strapi";
import strapiAuthProvider from "authProvider";
import { PetCreate } from 'client/pet/create';
import { PetEdit } from 'client//pet/edit';
import { PetList } from 'client/pet/list';
import { PetShow } from 'client/pet/show';
import { PeopleCreate } from 'client/people/create';
import { PeopleEdit } from 'client//people/edit';
import { PeopleList } from 'client/people/list';
import { PeopleShow } from 'client/people/show';

function App() {
  const API_URL = "https://serverpets.herokuapp.com";

  const { authProvider, axiosInstance } = strapiAuthProvider(API_URL);
  const dataProvider = DataProvider(API_URL, axiosInstance);

  return (
    <Refine dataProvider={dataProvider} authProvider={authProvider} >
      <Resource
        name="pets"
        edit={PetEdit}
        list={PetList}
        show={PetShow}
        create={PetCreate}
        canDelete
      />
      <Resource
        name="people"
        edit={PeopleEdit}
        list={PeopleList}
        show={PeopleShow}
        create={PeopleCreate}
        canDelete
      />
    </Refine>
  );
}

export default App;
