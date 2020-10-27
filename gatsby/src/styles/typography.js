import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`

    html {
        font-family: 'Open Sans', sans-serif;
        color: var(--white);
    }
    p, li {
        letter-spacing: 0.5px;
    }
    h1, h2, h3, h4, h5, h6 {
        font-weight: normal;
        margin: 0;
    }
    a {
        color: var(--white);
        text-decoration-color: var(--blue);
        text-decoration-skip: none;
    }
    mark, .mark {
        background: var(--blue);
        padding: 0 2px 2px 2px;
        margin: 0;
        display: inline;
        line-height: 1;
    }
    .center {
        text-align: center;
    }
`;

export default Typography;