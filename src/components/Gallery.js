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
        <p style={styles.p}>Rome, Oct 2024</p>
      <img
        src="/Rome/bunissiiimo.jpg"
        alt="부니시모모"
        style={styles.image}
      />
      <img
        src="/Rome/coffe.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Rome/Dontbeasadperson.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Rome/gang.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Rome/eu1.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Rome/eat1.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Rome/espros.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Rome/flying.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Rome/ggood.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Rome/goodmorning.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Rome/goodsky.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Rome/gellato.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Rome/greeeeeeen.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Rome/greeeeeen.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Rome/greeeen.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Rome/greeen.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Rome/green.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Rome/gri.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Rome/htoel.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Rome/icecream.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Rome/iron.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Rome/ita.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Rome/italllt.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Rome/pasta.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Rome/potato.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Rome/s.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Rome/RomeMagenet.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Rome/ss.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Rome/sss.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Rome/strite5.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Rome/toel.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Rome/ttra.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Rome/vatixxan.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Rome/vatican.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Rome/wine.jpg"
        alt="Rome"
        style={styles.image}
      />
      <img
        src="/Rome/woo.jpg"
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
