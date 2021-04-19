import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 70px auto;

    grid-template-areas:
    'Aside MainHeader'
    'Aside Content';

    height: 100vh;

    @media(max-width: 768px) {
        grid-template-columns: 100%;
        grid-template-rows: 70px auto;

        grid-template-areas:
        'MainHeader'
        'Content';
    }

    /* Just to block screen smaller than 315px */
    min-width: 315px;
`;
