import React from 'react';
import { StyleSheet, css } from 'aphrodite';

type Props = Readonly<{
  children: React.ReactNode;
  height?: 'full' | 'initial';
}>;

function Page({ children, height = 'initial' }: Props): React.ReactElement {
  return (
    <div className={css(styles.page, height === 'full' && styles.fullHeight)}>
      {children}
    </div>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: '1 1 auto',
    display: 'flex',
    outline: '1px solid #EEEEEE',
    paddingLeft: '32px',
  },
  fullHeight: {
    minHeight: '100vh',
  },
});

export default Page;
