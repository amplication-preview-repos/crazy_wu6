import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type QuickLinkWhereInput = {
  backgroundColor?: StringNullableFilter;
  id?: StringFilter;
  text?: StringNullableFilter;
  url?: StringNullableFilter;
};
