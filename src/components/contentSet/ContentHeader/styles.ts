import styled from 'styled-components';

interface ITitleContainerProps {
    lineColor: string
}

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
`;

export const TitleContainer = styled.div<ITitleContainerProps>`

    > h1 {
        /* props by default theme */
        color: ${props => props.theme.colors.font};

        &::after {
            content: '';
            display: block;
            width: 55px;
            /* props by props via component*/
            border-bottom: 0.6rem solid ${props => props.lineColor};
        }
    }
`;

export const Controllers = styled.div`
    display: flex;
    justify-content: center;
`;
