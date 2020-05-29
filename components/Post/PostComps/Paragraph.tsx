import { PostParagraph } from '../../../lib/types';

export default function Paragraph({ content }: PostParagraph) {
    return <p className="font-base">{content}</p>;
}
