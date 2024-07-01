import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const QuickLinkEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="backgroundColor" source="backgroundColor" />
        <TextInput label="text" source="text" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
