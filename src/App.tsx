import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import TitlePage from 'pages/TitlePage';
import AboutPage from 'pages/AboutPage';
import ContactPage from 'pages/ContactPage';
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
      <ContactPage />
    </div>
  );
}

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    flex: '1 1 auto',
  },
});

export default App;
