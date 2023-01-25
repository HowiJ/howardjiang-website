import { StyleSheet, css } from 'aphrodite';
import React from 'react';

import Page from 'components/Page';
import Text from 'components/Text';

type Props = Readonly<{}>;

function TitlePage(props: Props): React.ReactElement {
  return (
    <Page height="initial">
      <div className={css(styles.page)}>
        <div className={css(styles.header)}>
          <Text heading="m">Hello.</Text>
        </div>
      </div>
    </Page>
  );
}

const nameKeyframes = [
  {
    '0%': {
      width: '0px',
    },
    '100%': {
      width: '100%',
    },
  },
];
const styles = StyleSheet.create({
  page: {
    flex: '1 1 auto',
    '@media (max-width: 800px)': {
      paddingTop: '32px',
    },
  },
  header: {
    flex: '1 1 auto',
    flexDirection: 'column',
    display: 'flex',
    animationName: [nameKeyframes],
    animationDuration: '2s',
    animationDelay: '0.25s',
    overflow: 'hidden',
  },
});

export default TitlePage;
