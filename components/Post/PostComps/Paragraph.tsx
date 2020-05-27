import { Typography } from 'antd';
import { PostParagraph } from '../../../lib/types';

export default function Paragraph({ content }: PostParagraph) {
    return <Typography.Paragraph>{content}</Typography.Paragraph>;
}
