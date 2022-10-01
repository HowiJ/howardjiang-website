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
        heading === 'h1' && styles.h1,
        heading === 'p' && styles.p,
        heading === 't' && styles.t,
        display === 'block' && styles.displayBlock,
      )}
    >
      {children}
    </span>
  );
}

const styles = StyleSheet.create({
  p: {
    fontSize: '16px',
    fontWeight: 'lighter',
    '@media (max-width: 800px)': {
      fontSize: '24px',
    },
  },
  h1: {
    display: 'block',
    fontSize: '40px',
    fontWeight: 'lighter',
    '@media (max-width: 800px)': {
      fontSize: '32px',
    },
  },
  t: {
    display: 'block',
    fontSize: '80px',
    fontWeight: 'lighter',
    '@media (max-width: 800px)': {
      fontSize: '48px',
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
