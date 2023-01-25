import type { Align, Display, Heading } from 'components/TextTypes';

import React from 'react';
import { StyleSheet, css } from 'aphrodite';

type Props = Readonly<{
  align?: Align;
  children?: React.ReactNode;
  heading?: Heading;
  display?: Display;
}>;

function Text({
  children,
  heading = 'p',
  align = 'left',
  display = 'inline',
}: Props) {
  return (
    <span
      className={css(
        align === 'center' && styles.alignCenter,
        align === 'left' && styles.alignLeft,
        heading === 'm' && styles.m,
        heading === 'h1' && styles.h1,
        heading === 't' && styles.t,
        heading === 'p' && styles.p,
        heading === 'link' && styles.link,
        display === 'block' && styles.displayBlock,
      )}
    >
      {children}
    </span>
  );
}

const styles = StyleSheet.create({
  m: {
    // massive
    fontSize: 'calc(160px + 5vw)',
    fontWeight: 'lighter',
    '@media (max-width: 800px)': {
      fontSize: 'calc(96px + 1vw)',
    },
  },
  t: {
    fontSize: '80px',
    fontWeight: 'lighter',
    '@media (max-width: 800px)': {
      fontSize: '48px',
    },
  },
  h1: {
    fontSize: '40px',
    fontWeight: 'lighter',
    '@media (max-width: 800px)': {
      fontSize: '32px',
    },
  },
  p: {
    fontSize: '16px',
    fontWeight: 'lighter',
    '@media (max-width: 800px)': {
      fontSize: '20px',
    },
  },
  link: {
    fontSize: '12px',
    fontWeight: 'lighter',
    '@media (max-width: 800px)': {
      fontSize: '12px',
    },
  },
  alignLeft: {
    textAlign: 'left',
  },
  alignCenter: {
    textAlign: 'center',
  },
  displayBlock: {
    display: 'block',
  },
});

export default Text;
