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
        <p style={styles.p}>Venice, Oct 2024</p>
      <img
        src="/Venice/1.jpg"
        alt="1"
        style={styles.image}
      />
      <img
        src="/Venice/2.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Venice/3.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Venice/4.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Venice/5.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Venice/6.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Venice/7.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Venice/8.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Venice/9.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Venice/10.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Venice/11.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Venice/12.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Venice/13.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Venice/14.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Venice/15.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Venice/16.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Venice/17.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Venice/18.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Venice/19.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Venice/20.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Venice/21.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Venice/22.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Venice/23.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Venice/24.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Venice/25.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Venice/26.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Venice/27.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Venice/28.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Venice/29.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Venice/30.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Venice/31.jpg"
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
