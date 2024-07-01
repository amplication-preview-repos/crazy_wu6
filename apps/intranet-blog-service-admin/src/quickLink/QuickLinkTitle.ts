import { QuickLink as TQuickLink } from "../api/quickLink/QuickLink";

export const QUICKLINK_TITLE_FIELD = "backgroundColor";

export const QuickLinkTitle = (record: TQuickLink): string => {
  return record.backgroundColor?.toString() || String(record.id);
};
