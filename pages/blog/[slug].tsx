import { GetServerSideProps } from 'next';
import Post from '../../components/Post';
import posts from '../../posts';
import withLayout from '../../components/Layout';
import Card from '../../components/Card';

function Blog({ post }: any) {
    return (
        <div className="block space-y-6 md:flex md:space-x-6 md:space-y-0">
            <Card className="flex-1">
                <Post {...post} />
            </Card>
            <Card className="md:w-64">Sidebar</Card>
        </div>
    );
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
