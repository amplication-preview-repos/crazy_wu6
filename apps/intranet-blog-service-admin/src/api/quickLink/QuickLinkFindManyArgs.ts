import { QuickLinkWhereInput } from "./QuickLinkWhereInput";
import { QuickLinkOrderByInput } from "./QuickLinkOrderByInput";

export type QuickLinkFindManyArgs = {
  where?: QuickLinkWhereInput;
  orderBy?: Array<QuickLinkOrderByInput>;
  skip?: number;
  take?: number;
};
