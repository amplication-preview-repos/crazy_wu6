import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { NewsList } from "./news/NewsList";
import { NewsCreate } from "./news/NewsCreate";
import { NewsEdit } from "./news/NewsEdit";
import { NewsShow } from "./news/NewsShow";
import { SocialPostList } from "./socialPost/SocialPostList";
import { SocialPostCreate } from "./socialPost/SocialPostCreate";
import { SocialPostEdit } from "./socialPost/SocialPostEdit";
import { SocialPostShow } from "./socialPost/SocialPostShow";
import { PhotoGalleryList } from "./photoGallery/PhotoGalleryList";
import { PhotoGalleryCreate } from "./photoGallery/PhotoGalleryCreate";
import { PhotoGalleryEdit } from "./photoGallery/PhotoGalleryEdit";
import { PhotoGalleryShow } from "./photoGallery/PhotoGalleryShow";
import { EventList } from "./event/EventList";
import { EventCreate } from "./event/EventCreate";
import { EventEdit } from "./event/EventEdit";
import { EventShow } from "./event/EventShow";
import { QuickLinkList } from "./quickLink/QuickLinkList";
import { QuickLinkCreate } from "./quickLink/QuickLinkCreate";
import { QuickLinkEdit } from "./quickLink/QuickLinkEdit";
import { QuickLinkShow } from "./quickLink/QuickLinkShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"IntranetBlogService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="News"
          list={NewsList}
          edit={NewsEdit}
          create={NewsCreate}
          show={NewsShow}
        />
        <Resource
          name="SocialPost"
          list={SocialPostList}
          edit={SocialPostEdit}
          create={SocialPostCreate}
          show={SocialPostShow}
        />
        <Resource
          name="PhotoGallery"
          list={PhotoGalleryList}
          edit={PhotoGalleryEdit}
          create={PhotoGalleryCreate}
          show={PhotoGalleryShow}
        />
        <Resource
          name="Event"
          list={EventList}
          edit={EventEdit}
          create={EventCreate}
          show={EventShow}
        />
        <Resource
          name="QuickLink"
          list={QuickLinkList}
          edit={QuickLinkEdit}
          create={QuickLinkCreate}
          show={QuickLinkShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
