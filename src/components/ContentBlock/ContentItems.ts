export interface TextContentItem {
  type: 'text';
  content: string;
}

export interface ButtonContentItem {
  type: 'button';
  text: string;
  local: boolean;
  link: string;
}

export type ContentItem = TextContentItem | ButtonContentItem;

export const isTextContentItem = (item: ContentItem): item is TextContentItem =>
  (item as TextContentItem).type === 'text';

  export const isButtonContentItem = (item: ContentItem): item is ButtonContentItem =>
  (item as ButtonContentItem).type === 'button';