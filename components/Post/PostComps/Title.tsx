import { PostTitle } from '../../../lib/types';

export default function Title({ content }: PostTitle) {
    return <h2 className="text-xl">{content}</h2>;
}
