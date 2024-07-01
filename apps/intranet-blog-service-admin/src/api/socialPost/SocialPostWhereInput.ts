import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SocialPostWhereInput = {
  id?: StringFilter;
  image?: JsonFilter;
  shortDescription?: StringNullableFilter;
  title?: StringNullableFilter;
};
