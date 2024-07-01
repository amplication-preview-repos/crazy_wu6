import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const NewsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description1" multiline source="description1" />
        <TextInput label="description2" multiline source="description2" />
        <TextInput label="postedBy" multiline source="postedBy" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
