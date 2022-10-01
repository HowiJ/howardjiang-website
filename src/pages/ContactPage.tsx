import React from 'react';
import { StyleSheet, css } from 'aphrodite';

type Props = Readonly<{}>;

function ContactPage(props: Props): React.ReactElement {
  return <div className={css(styles.page)} />;
}

const styles = StyleSheet.create({
  page: {
    flex: '1 1 auto',
  },
});

export default ContactPage;
