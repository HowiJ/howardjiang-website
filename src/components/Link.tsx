import type { Align, Display, Heading } from 'components/TextTypes';

import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Text from 'components/Text';

type Props = Readonly<{
  align?: Align;
  children: React.ReactNode;
  display?: Display;
  heading?: Heading;
  icon?: React.ReactNode;
  src: string;
}>;

function Link({
  align = 'left',
  children,
  display = 'inline',
  heading = 'link',
  icon,
  src,
}: Props): React.ReactElement {
  return (
    <a
      href={src}
      className={css(
        styles.anchor,
        align === 'center' && styles.alignCenter,
        display === 'block' && styles.displayBlock,
      )}
    >
      {icon != null && <span className={css(styles.icon)}>{icon}</span>}
      <Text heading={heading}>{children}</Text>
    </a>
  );
}

const styles = StyleSheet.create({
  anchor: {
    color: 'default',
    flex: 'none',
    display: 'inline-block',
    alignSelf: 'flex-start',
    ':visited': {
      color: '#4682B4',
    },
  },
  icon: {
    paddingRight: '4px',
  },
  alignCenter: {
    color: '#4682B4',
    textAlign: 'center',
  },
  displayBlock: {
    display: 'block',
  },
});

export default Link;
