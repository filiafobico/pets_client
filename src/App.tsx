import { Refine, Resource } from "@pankod/refine";

import "@pankod/refine/dist/styles.min.css";
import { DataProvider } from "@pankod/refine-strapi";
import strapiAuthProvider from "authProvider";
import { PetCreate } from 'client/create';
import { PetEdit } from 'client/edit';
import { PetList } from 'client/list';
import { PetShow } from 'client/show';

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
    </Refine>
  );
}

export default App;
