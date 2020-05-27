import { AppProps } from 'next/app';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import 'antd/dist/antd.css';
import { Typography } from 'antd';

const components = {
    h1: (props: any) => <Typography.Title level={1} {...props} />,
    h2: (props: any) => <Typography.Title level={2} {...props} />,
    h3: (props: any) => <Typography.Title level={3} {...props} />,
    p: (props: any) => <Typography.Paragraph {...props} />,
    code: (props: any) => <Typography.Text code {...props} />,
    inlineCode: (props: any) => <Typography.Text code {...props} />,
};

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <MDXProvider components={components}>
                <Component {...pageProps} />
            </MDXProvider>
        </>
    );
}
