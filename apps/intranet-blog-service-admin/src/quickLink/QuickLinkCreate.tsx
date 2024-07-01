import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const QuickLinkCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="backgroundColor" source="backgroundColor" />
        <TextInput label="text" source="text" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Create>
  );
};
