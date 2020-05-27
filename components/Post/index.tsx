import mapJSONToComps from './PostComps';
import { PostData } from '../../lib/types';

export default function Post(post: PostData) {
    return <div>{mapJSONToComps(post)}</div>;
}
