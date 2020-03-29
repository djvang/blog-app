import React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import { PostList } from "./components/PostList";
import { UserList } from "./components/UserList";
import { CategoryList } from "./components/CategoryList";
import { PostEdit } from "./components/PostEdit";
import { PostCreate } from "./components/PostCreate";
import Dashboard from "./components/Dashboard";

import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import CategoryIcon from "@material-ui/icons/Category";

const dataProvider = jsonServerProvider("http://localhost:3000");
const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
    <Resource name="categories" list={CategoryList} icon={CategoryIcon} />
    <Resource name="users" list={UserList} icon={UserIcon} />
  </Admin>
);

export default App;
