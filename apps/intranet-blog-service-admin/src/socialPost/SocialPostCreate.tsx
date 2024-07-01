import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const SocialPostCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput
          label="shortDescription"
          multiline
          source="shortDescription"
        />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
