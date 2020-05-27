import { Layout } from 'antd';
import Header from './Header';

export default function withLayout(Component: (props: any) => JSX.Element) {
    return (props: any) => {
        return (
            <Layout>
                <Header />
                <Layout.Content>
                    <Component {...props} />
                </Layout.Content>
            </Layout>
        );
    };
}
