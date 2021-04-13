import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
`;

export const TitleContainer = styled.div`

    > h1 {
        color: ${props => props.theme.colors.font};

        &::after {
            content: '';
            display: block;
            width: 55px;
            border-bottom: 0.6rem solid ${props => props.theme.colors.warning};
        }
    }
`;

export const Controllers = styled.div`
    
`;
