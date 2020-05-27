export enum ItemType {
    TITLE = 'TITLE',
    // SUBTITLE = 'SUBTITLE',
    // SECTION = 'SECTION',
    PARAGRAPH = 'PARAGRAPH',
    // IMAGE = 'IMAGE',
    // CODEBLOCK = 'CODEBLOCK',
}
export interface PostTitle {
    type: ItemType.TITLE;
    content: string;
}
export interface PostParagraph {
    type: ItemType.PARAGRAPH;
    content: string;
}
type PostItem = PostTitle | PostParagraph;

export interface PostData {
    slug: string;
    content: PostItem[];
}
