import { StyleSheet, css } from 'aphrodite';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import TitleLine from 'components/TitleLine';
import Link from 'components/Link';
import Page from 'components/Page';
import Text from 'components/Text';

type Props = Readonly<{}>;

function TitlePage(props: Props): React.ReactElement {
  return (
    <Page height="initial">
      <div className={css(styles.page)}>
        <div className={css(styles.lines)}>
          <div className={css(styles.header)}>
            <Text heading="t">Howard</Text>
            <Text heading="t">Jiang</Text>
          </div>
          <TitleLine origin="left" />
          <TitleLine origin="right" />
        </div>
        <Text heading="p">Software Engineer</Text>
        <div className={css(styles.links)}>
          <Link
            icon={<FontAwesomeIcon icon={faLinkedin} />}
            src="https://linkedin.com/in/howijiang"
          >
            linkedin/in/howijiang
          </Link>
          <Link
            icon={<FontAwesomeIcon icon={faGithub} />}
            src="https://github.com/HowiJ"
          >
            github.com/HowiJ
          </Link>
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
    animationDuration: '3s',
    overflow: 'hidden',
  },
  lines: {
    position: 'relative',
    marginBottom: '32px',
  },
  links: {
    flex: '1 1 auto',
    display: 'flex',
    gap: '12px',
    paddingTop: '32px',
    '@media (max-width: 800px)': {
      justifyContent: 'space-between',
      textAlign: 'left',
      flexDirection: 'column',
      gap: '8px',
    },
  },
});

export default TitlePage;
