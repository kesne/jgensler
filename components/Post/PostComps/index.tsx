import Title from './Title';
import Paragraph from './Paragraph';
import { PostData } from '../../../lib/types';

interface CompList {
    [key: string]: (props: any) => JSX.Element;
}
const compList: CompList = {
    TITLE: Title,
    // SUBTITLE: Subtitle,
    PARAGRAPH: Paragraph,
};

export default function mapJSONToComps(post: PostData) {
    return post.content.map((data, i) => {
        const Component = compList[data.type];
        return <Component {...data} key={i} />;
    });
}
