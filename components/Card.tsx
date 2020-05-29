import clsx from 'clsx';

export default function Card({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={clsx('bg-white p-6 rounded shadow-sm', className)}>
            {children}
        </div>
    );
}
