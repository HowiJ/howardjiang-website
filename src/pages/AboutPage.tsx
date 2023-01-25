import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import Text from 'components/Text';
import Page from 'components/Page';
import Link from 'components/Link';

type Props = Readonly<{}>;

function AboutPage(props: Props): React.ReactElement {
  return (
    <Page height="initial">
      <div className={css(styles.page)}>
        <div>
          <div className={css(styles.reached)}>
            <Text>You've Reached&nbsp;&nbsp;</Text>
          </div>
          <Text heading="h1">Howard Jiang</Text>
        </div>
        <br />
        <br />
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

const styles = StyleSheet.create({
  page: {
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  links: {
    flex: '1 1 auto',
    display: 'flex',
    gap: '12px',
    '@media (max-width: 800px)': {
      justifyContent: 'space-between',
      textAlign: 'left',
      flexDirection: 'column',
      gap: '8px',
    },
  },
  reached: {
    display: 'inline-block',
  },
});

export default AboutPage;
