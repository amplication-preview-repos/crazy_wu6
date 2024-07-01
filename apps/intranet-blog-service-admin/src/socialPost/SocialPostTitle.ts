import { SocialPost as TSocialPost } from "../api/socialPost/SocialPost";

export const SOCIALPOST_TITLE_FIELD = "title";

export const SocialPostTitle = (record: TSocialPost): string => {
  return record.title?.toString() || String(record.id);
};
