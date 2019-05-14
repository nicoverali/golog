import styled, {css} from 'styled-components';

const HeaderStyle = css`
  font-family: 'Arvo', 'Times New Roman';
`

const RegularStyle = css`
  font-family: 'Open Sans', sans-serif;
`

export const H1 = styled.h1`
  ${HeaderStyle}
  font-size: 64px;
  font-weight: 700;
`;

export const H2 = styled.h2`
  ${HeaderStyle}
  font-size: 48px;
  font-weight: 400;
`;

export const H3 = styled.h3`
  ${HeaderStyle}
  font-size: 36px;
  font-weight: 400;
`;

export const H4 = styled.h4`
  ${RegularStyle}
  font-size: 36px;
  font-weight: 600;
`;

export const H5 = styled.h5`
  ${RegularStyle}
  font-size: 24px;
  font-weight: 400;
`;

export const Subtitle = styled.span`
  ${RegularStyle}
  font-size: 22px;
  font-weight: 300;

  ${props => props.light && css`
    font-size: 18px;
  `}
`;

export const Quote = styled.span`
  ${RegularStyle}
  font-size: 16px;
  font-weight: 400;
  font-style: italic;
`;

export const ButtonText = styled.span`
${RegularStyle};
font-size: 16px;
font-weight: 600;
text-transform: uppercase;

${props => props.light && css`
  font-size: 14px;
  font-weight: 400;
  `}
  `

export const BodyCopy = styled.span`
  ${RegularStyle};
  font-size: 16px;
  font-weight: 400;

  ${props => props.light && css`
    font-size: 14px;
    font-weight: 300;
  `}
`;

export const Caption = styled.span`
  ${RegularStyle};
  font-size: 14px;
  font-weight: 300;

  ${props => props.light && css`
    font-size: 12px;
  `}
`;
