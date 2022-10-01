import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Text from 'components/Text';
import Page from 'components/Page';

type Props = Readonly<{}>;

function AboutPage(props: Props): React.ReactElement {
  return (
    <Page height="initial">
      <div className={css(styles.page)}>
        <Text heading="h1">About</Text>
        <Text display="block">
          I'm Howard Jiang, a software engineer well versed in full stack
          technologies.
        </Text>
        <Text display="block">
          Feel free to check out my LinkedIn for more information.
        </Text>
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
