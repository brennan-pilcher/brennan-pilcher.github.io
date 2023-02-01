export interface HeadingContentItem {
  type: 'heading';
  text: string;
  isSubheading?: boolean;
}

export interface TextContentItem {
  type: 'text';
  text: string;
  bold?: boolean;
}

export interface ButtonContentItem {
  type: 'button';
  text: string;
  local: boolean;
  link: string;
}

export type ContentItem =
  | HeadingContentItem
  | TextContentItem
  | ButtonContentItem;

export const isHeadingContentItem = (item: ContentItem): item is HeadingContentItem =>
  (item as HeadingContentItem).type === 'heading';

export const isTextContentItem = (item: ContentItem): item is TextContentItem =>
  (item as TextContentItem).type === 'text';

export const isButtonContentItem = (item: ContentItem): item is ButtonContentItem =>
  (item as ButtonContentItem).type === 'button';