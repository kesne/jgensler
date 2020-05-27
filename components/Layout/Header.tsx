import { Layout, Typography } from 'antd';
import styled from 'styled-components';

const { Header: AntHeader } = Layout;

const TopBar = styled(AntHeader)`
    background-color: #292929;
    display: flex;
    align-items: center;
`;

// const TitleTest = styled(Typography.Title)`
//     margin-bottom: 0 !important;
//     color: white !important;
//     font-family: 'Montserrat', sans-serif !important;
// `;

export default function Header() {
    return (
        <TopBar>
            <Typography.Title level={1} inverse>J Gensler</TitleTest>
        </TopBar>
    );
}
