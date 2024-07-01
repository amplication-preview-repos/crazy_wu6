import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SocialPostEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput
          label="shortDescription"
          multiline
          source="shortDescription"
        />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
