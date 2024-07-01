import { SortOrder } from "../../util/SortOrder";

export type SocialPostOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  shortDescription?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
