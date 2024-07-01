import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type NewsWhereInput = {
  description1?: StringNullableFilter;
  description2?: StringNullableFilter;
  id?: StringFilter;
  postedBy?: StringNullableFilter;
  title?: StringNullableFilter;
};
