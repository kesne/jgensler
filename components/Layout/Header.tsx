import { Layout, Typography } from 'antd';
import styled from 'styled-components';

const { Header: AntHeader } = Layout;

const TopBar = styled(AntHeader)`
    background-color: #292929;
    display: flex;
    align-items: center;
`;

const TitleTest = styled(Typography.Title)`
    && {
        margin-bottom: 0;
        color: white;
        font-family: 'Montserrat', sans-serif;
    }
`;

export default function Header() {
    return (
        <TopBar>
            <TitleTest level={1}>J Gensler</TitleTest>
        </TopBar>
    );
}
