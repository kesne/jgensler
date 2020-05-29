import { Typography } from 'antd';
import styled from 'styled-components';

const TitleContainer = styled.div`
    padding: 0 50px 0 50px;
    height: 100%;
    display: flex;
    align-items: center;

    background: #292929;
`;
const TitleContainerDiagonal = styled.div`
    display: block;
    background-image: linear-gradient(45deg, #292929 50%, transparent 50%);
    height: 100%;
    width: 64px;
`;

const JGensler = styled(Typography.Title)`
    margin-bottom: 0 !important;
    color: #edf2f7 !important;
    font-family: 'Montserrat', sans-serif !important;
`;

export default function Title() {
    return (
        <>
            <TitleContainer>
                <JGensler level={1}>J Gensler</JGensler>
            </TitleContainer>
            <TitleContainerDiagonal />
        </>
    );
}
