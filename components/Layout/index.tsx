import Header from './Header';

export default function withLayout(Component: (props: any) => JSX.Element) {
    return (props: any) => {
        return (
            <>
                <Header />
                <div className="container mx-auto flex-1 mt-8">
                    <Component {...props} />
                </div>
            </>
        );
    };
}
