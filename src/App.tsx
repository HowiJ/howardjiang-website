import React from 'react';
import TitlePage from 'pages/TitlePage';
import AboutPage from 'pages/AboutPage';
import ContactPage from 'pages/ContactPage';
import { StyleSheet, css } from 'aphrodite';

function App() {
  return (
    <div className={css(styles.page)}>
      <TitlePage />
      <AboutPage />
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
