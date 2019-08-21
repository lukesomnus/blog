import React from 'react';


class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop:'2.5rem',
          paddingTop: '1rem',
          color:'var(--themeColor)'
        }}
      >
        <a
          href="https://mobile.twitter.com/dan_abramov"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color:'var(--themeColor)'}}
        >
            github
        </a>{' '}
        &bull;{' '}
        <a
          href="https://github.com/gaearon"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color:'var(--themeColor)'}}
        >
          知乎
        </a>{' '}
        &bull;{' '}
        <a
          href="https://stackoverflow.com/users/458193/dan-abramov"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color:'var(--themeColor)'}}
        >
          bilibili
        </a>
      </footer>
    );
  }
}

export default Footer;
