import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Text from 'components/Text';
import Page from 'components/Page';

type Props = Readonly<{}>;

function AboutPage(props: Props): React.ReactElement {
  return (
    <Page height="full">
      <div className={css(styles.page)}>
        <Text heading="h1">About</Text>
      </div>
    </Page>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: '1 1 auto',
  },
});

export default AboutPage;
