import { ReactNode } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const A = styled.a`
    padding: 0 1rem 0 1rem;
    color: #292929;
`;

type Props = {
    children: ReactNode;
    href: string;
    pseudo?: string;
};
export default function Item({ children, href, pseudo }: Props) {
    return (
        <li>
            <Link href={href || '/'} as={pseudo || href || '/'} passHref>
                <A>{children}</A>
            </Link>
        </li>
    );
}
