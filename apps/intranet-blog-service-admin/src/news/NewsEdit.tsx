import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const NewsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description1" multiline source="description1" />
        <TextInput label="description2" multiline source="description2" />
        <TextInput label="postedBy" multiline source="postedBy" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
