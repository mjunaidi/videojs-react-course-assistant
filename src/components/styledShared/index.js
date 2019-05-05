import { styled } from 'linaria/react';
import { colors, spacings } from '../../constants/styles';

export const ListWrapper = styled('div')`
  max-width: 350px;
  width: 30%;
  min-width: 250px;
  overflow-y: scroll;
  background-color: ${colors.dark1};
  display: flex;
  flex-direction: column;
  margin: 0px 4px;
  max-height: 100%;
`;

export const List = styled('div')`
  overflow: scroll;
  max-height: 100%;
`;

export const ListEntry = styled('div')`
  display: flex;
  max-height: 100px;
  margin: ${spacings.xs}px;
  margin-top: ${spacings.s}px;
  background-color: ${colors.dark1};
  overflow: hidden;
  a {
    display: block;
    color: ${colors.brand};
    font-weight: bold;
    &:hover {
      color: ${colors.accent};
    }
  }
`;

export const Heading = styled('div')`
  padding: ${spacings.xs}px;
  font-size: ${spacings.m}px;
  font-weight: bold;
  color: ${colors.light};
  background-color: ${colors.brand};
  display: flex;
  &.invert {
    color: ${colors.brand};
    background-color: ${colors.light};
  }
`;
