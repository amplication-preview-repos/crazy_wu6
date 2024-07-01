import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type PhotoGalleryWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  photosAndVideos?: JsonFilter;
  title?: StringNullableFilter;
};
