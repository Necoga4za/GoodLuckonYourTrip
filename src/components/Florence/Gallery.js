import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  return (
    <section style={styles.section}>

<nav style={styles.nav}>
  <ul style={styles.menu}>
    <li><Link to="/Gallery" style={styles.link}>[Rome]</Link></li>
    <li><Link to="/Florence/Gallery" style={styles.link}>[Florence]</Link></li>
    <li><Link to="/Venice/Gallery" style={styles.link}>[Venice]</Link></li>

  </ul>
</nav>
        <p style={styles.p}>Florence, Oct 2024</p>
      <img
        src="/Florence/1.jpg"
        alt="0"
        style={styles.image}
      />
      <img
        src="/Florence/2.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Florence/3.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Florence/4.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Florence/5.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Florence/6.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Florence/7.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Florence/8.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Florence/9.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Florence/10.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Florence/11.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Florence/12.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Florence/13.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Florence/14.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Florence/15.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Florence/16.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Florence/17.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Florence/18.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Florence/19.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Florence/20.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Florence/21.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Florence/22.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Florence/23.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Florence/24.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Florence/25.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Florence/26.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Florence/27.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Florence/28.jpg"
        alt="Rome"
        style={styles.image}
      />

    </section>
  )
};

    const styles = {
      section: {
        backgroundColor: '#fff',
        marginTop: '50px',
        textAlign: 'center'   
      },
      p: {
        margin: '0',
        textAlign: 'right' ,
        padding: '0 80px'
      },
      image: {
        width: '100%',        // 원하는 너비
        maxWidth: '300px',    // 최대 너비
        padding: '50px'
      },
      nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '50px',
        paddingLeft: '80px'
    },
    menu: {
        listStyle: 'none',
        display: 'flex',
        gap: '2rem',
        margin: 0,
        padding: 0
    },
    link: {
        textDecoration: 'none',
        color: 'Black'
    },
    };

export default Gallery;
