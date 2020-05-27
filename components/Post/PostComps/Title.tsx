import { Typography } from 'antd';
import { PostTitle } from '../../../lib/types';

export default function Title({ content }: PostTitle) {
    return <Typography.Title level={2}>{content}</Typography.Title>;
}
