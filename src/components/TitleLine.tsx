import React from 'react';
import { StyleSheet, css } from 'aphrodite';

type Props = Readonly<{
  origin: 'left' | 'right';
}>;

function TitleLine({ origin }: Props): React.ReactElement {
  return (
    <div
      className={css(
        styles.main,
        origin === 'left' && styles.fromLeft,
        origin === 'right' && styles.fromRight,
      )}
    />
  );
}

const translateKeyframesLeft = [
  {
    '0%': {
      left: '-300px',
    },
    '100%': {
      left: '0',
    },
  },
];
const translateKeyframesRight = [
  {
    '0%': {
      right: '0',
    },
    '100%': {
      right: 'calc(100vw - 352px)',
    },
  },
];
const translateKeyframesRightResp = [
  {
    '0%': {
      right: '0',
    },
    '100%': {
      right: 'calc(100vw - 232px)',
    },
  },
];
const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    borderRadius: '32px',
    backgroundColor: '#7B9095',
    height: '8px',
  },
  fromLeft: {
    width: '128px',
    animationName: [translateKeyframesLeft],
    animationDuration: '1s',
    '@media (max-width: 800px)': {
      width: '82px',
    },
  },
  fromRight: {
    width: '200px',
    top: '4px',
    animationName: [translateKeyframesRight],
    animationDuration: '1s',
    'animation-fill-mode': 'forwards',
    '@media (max-width: 800px)': {
      top: '-2px',
      animationName: [translateKeyframesRightResp],
      width: '128px',
    },
  },
});

export default TitleLine;
