import { GetServerSideProps } from 'next';
import Post from '../../components/Post';
import posts from '../../posts';
import withLayout from '../../components/Layout';

function Blog({ post }: any) {
    return <Blog {...post} />;
}

export const getServerSideProps: GetServerSideProps = async context => {
    const slug = context?.params?.slug as string;
    const temp = posts.find(e => e.slug === slug);
    const post = temp === undefined ? { props: {} } : temp;
    return {
        props: {
            post,
        },
    };
};

export default withLayout(Blog);
