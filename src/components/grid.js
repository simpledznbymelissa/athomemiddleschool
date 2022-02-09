import React from 'react';
import styled from 'styled-components';

const GridWrapper = styled.section`
  display: grid;

@media only screen and (min-width: 640px) {
    grid-template-columns: 47.5% 47.5%;
    grid-column-gap: 5%;
    grid-row-gap: 40px;
}
@media only screen and (min-width: 1023px) {
    grid-template-columns: 30% 30% 30%;
    grid-column-gap: 3.33%;
    grid-row-gap: 40px;
}
`

const Grid = ({columns, children, style}) => {
  return (
    <GridWrapper columns={columns} style={style}>
      {children}
    </GridWrapper>
  )
}

export default Grid;