import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import TitlePage from 'pages/TitlePage';
import AboutPage from 'pages/AboutPage';
import FadeIn from 'components/FadeIn';

function App() {
  return (
    <div className={css(styles.page)}>
      <FadeIn>
        <TitlePage />
      </FadeIn>
      <FadeIn>
        <AboutPage />
      </FadeIn>
    </div>
  );
}

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    maxWidth: 'min-content',
  },
  header: {
    flex: '1 1 auto',
  },
});

export default App;
