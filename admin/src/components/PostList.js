import React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Filter,
  SelectInput,
  ReferenceInput,
  TextInput
} from "react-admin";

const PostFilter = props => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput
      label="User"
      source="userId"
      reference="users"
      emptyText="No filter"
    >
      <SelectInput optionText="name" />
    </ReferenceInput>
    <ReferenceInput
      label="Category"
      source="categoryId"
      reference="categories"
      emptyText="No filter"
    >
      <SelectInput optionText="title" />
    </ReferenceInput>
  </Filter>
);

export const PostList = props => (
  <List filters={<PostFilter />} {...props}>
    <Datagrid>
      <TextField source="title" />
      <TextField source="id" />
      <ReferenceField source="categoryId" reference="categories">
        <TextField source="title" />
      </ReferenceField>
      <ReferenceField source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <EditButton />
    </Datagrid>
  </List>
);

export const PostTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ""}</span>;
};
