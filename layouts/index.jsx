import withLayout from '../components/Layout';

export default function Layout(frontMatter) {
    return withLayout(({ children: content }) => {
        return (
            <div>
                <h1>{frontMatter.title}</h1>
                {content}
            </div>
        );
    });
}
