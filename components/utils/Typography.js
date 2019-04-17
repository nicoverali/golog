import styled, {css} from 'styled-components';

const HeaderStyle = css`
  font-family: 'Arvo', 'Times New Roman';
`

const RegularStyle = css`
  font-family: 'Open Sans', sans-serif;
`

/** STYLES **/

export const H1Style = css`
  ${HeaderStyle}
  font-size: 64px;
  font-weight: 700;
`;

export const H2Style = css`
  ${HeaderStyle}
  font-size: 48px;
  font-weight: 400;
`;

export const H3Style = css`
  ${HeaderStyle}
  font-size: 36px;
  font-weight: 400;
`;

export const H4Style = css`
  ${RegularStyle}
  font-size: 36px;
  font-weight: 600;
`;

export const H5Style = css`
  ${RegularStyle}
  font-size: 24px;
  font-weight: 400;
`;

export const SubtitleStyle = css`
  ${RegularStyle}
  font-size: 22px;
  font-weight: 300;

  ${props => props.light && css`
    font-size: 18px;
  `}
`;

export const QuoteStyle = css`
  ${RegularStyle}
  font-size: 16px;
  font-weight: 400;
  font-style: italic;
`;

export const ButtonTextStyle = css`
${RegularStyle};
font-size: 16px;
font-weight: 600;
text-transform: uppercase;

${props => props.light && css`
  font-size: 14px;
  font-weight: 400;
  `}
  `

export const BodyCopyStyle = css`
  ${RegularStyle};
  font-size: 16px;
  font-weight: 400;

  ${props => props.light && css`
    font-size: 14px;
    font-weight: 300;
  `}
`;

export const CaptionStyle = css`
  ${RegularStyle};
  font-size: 14px;
  font-weight: 300;

  ${props => props.light && css`
    font-size: 12px;
  `}
`;


/** COMPONENTS **/


export const H1 = styled.h1('', H1Style);

export const H2 = styled.h2('', H2Style);

export const H3 = styled.h3('', H3Style);

export const H4 = styled.h4('', H4Style);

export const H5 = styled.h5('', H5Style);

export const Subtitle = styled.span('', SubtitleStyle);

export const Quote = styled.span('', QuoteStyle);

export const ButtonText = styled.span('', ButtonTextStyle);

export const BodyCopy = styled.span('', BodyCopyStyle);

export const Caption = styled.span('', CaptionStyle);
