import mapJSONToComps from './PostComps';
import { PostData } from '../../lib/types';
import { FrontMatterResult } from 'front-matter';

// const MDX = ({ children }) => children;

export default function Post({ post }) {
    console.log(post);
    return <div>TODO: put stuff here</div>
    // return <MDX>{post}</MDX>;
    // return <div>{mapJSONToComps(post)}</div>;
}
