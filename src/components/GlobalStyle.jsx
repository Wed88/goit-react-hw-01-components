import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
.list {
  list-style: none;
}

.link {
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
  margin-bottom: 0;
}

ul,
ol {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
}

img {
  display: block;
}
`;
