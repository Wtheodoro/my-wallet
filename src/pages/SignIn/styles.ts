import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.primary};
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2rem;

    > h2 {
        color: ${props => props.theme.colors.font};
        margin-left: 0.5rem;
    }

    > img {
        width: 2.5rem;
        height: 2.5rem;
    }
`;

export const Form = styled.form`
    width: 19rem;
    height: 19rem;
    padding: 1.8rem;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.tertiary};

`; 

export const FormTitle = styled.h1`
    margin-bottom: 2rem;
    color: ${props => props.theme.colors.font};

    &::after {
        content: '';
        display: block;
        width: 3.5rem;
        border-bottom: .6rem solid ${props => props.theme.colors.warning}
    }
`;
