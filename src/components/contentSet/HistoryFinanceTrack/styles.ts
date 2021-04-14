import styled from 'styled-components';

interface ITagProps {
    color: string
}

export const Container = styled.li`
    list-style: none;
    background-color: ${props => props.theme.colors.tertiary};
    border-radius: 10px;
    margin: 0.6rem 0;
    padding: 0.8rem 0.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: all .3s;

    &:hover {
        opacity: .7;
        transform: translateX(0.6rem)
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 0.7rem;

        & span {
            font-size: 1.5rem;
            font-weight: 500;
        }
    }

    /* to relative Tag */
    position: relative;
`;

export const Tag = styled.div<ITagProps>`
    position: absolute;
    left: 0;
    width: 0.8rem;
    height: 60%;
    background-color: ${props => props.color};
`;