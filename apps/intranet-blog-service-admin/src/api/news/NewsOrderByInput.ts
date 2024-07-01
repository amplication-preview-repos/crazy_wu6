import { SortOrder } from "../../util/SortOrder";

export type NewsOrderByInput = {
  createdAt?: SortOrder;
  description1?: SortOrder;
  description2?: SortOrder;
  id?: SortOrder;
  postedBy?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
