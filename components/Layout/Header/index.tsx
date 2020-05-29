import { Layout } from 'antd';
import styled from 'styled-components';
import Title from './Title';
import NavItem from './NavItem';

const { Header: AntHeader } = Layout;

const TopBar = styled(AntHeader)`
    background-color: #edf2f7;
    display: flex;
    align-items: center;
    padding: 0;
`;
const Nav = styled.nav`
    list-style-type: none;
    display: flex;
    height: 100%;
`;

// Colors being used are #292929 for dark gray and #e9eff5 for light blue. Need to fix how these are accessed

export default function Header() {
    return (
        <TopBar>
            <Title />
            <Nav>
                <NavItem href="/about">About</NavItem>
                <NavItem href="/blog">Blog</NavItem>
            </Nav>
        </TopBar>
    );
}
