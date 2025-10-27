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
          src={process.env.PUBLIC_URL + "/Rome/bunissiiimo.jpg"}
        alt="부니시모모"
        style={styles.image}
      />
      <img
          src={process.env.PUBLIC_URL + "/Rome/coffe.jpg"}
        alt="Rome"
        style={styles.image}
      />
      <img
          src={process.env.PUBLIC_URL + "/Rome/Dontbeasadperson.jpg"}
        alt="Rome"
        style={styles.image}
      />
      <img
          src={process.env.PUBLIC_URL + "/Rome/gang.jpg"}
        alt="Rome"
        style={styles.image}
      />
      <img
          src={process.env.PUBLIC_URL + "/Rome/eu1.jpg"}
        alt="Rome"
        style={styles.image}
      />
      <img
          src={process.env.PUBLIC_URL + "/Rome/eat1.jpg"}
        alt="Rome"
        style={styles.image}
      />
      <img
          src={process.env.PUBLIC_URL + "/Rome/espros.jpg"}
        alt="Rome"
        style={styles.image}
      />
      <img
          src={process.env.PUBLIC_URL + "/Rome/flying.jpg"}
        alt="Rome"
        style={styles.image}
      />
      <img
          src={process.env.PUBLIC_URL + "/Rome/ggood.jpg"}
        alt="Rome"
        style={styles.image}
      />
      <img
          src={process.env.PUBLIC_URL + "/Rome/goodmorning.jpg"}
        alt="Rome"
        style={styles.image}
      />
      <img
          src={process.env.PUBLIC_URL + "/Rome/goodsky.jpg"}
        alt="Rome"
        style={styles.image}
      />
      <img
          src={process.env.PUBLIC_URL + "/Rome/gellato.jpg"}
        alt="Rome"
        style={styles.image}
      />
      <img
          src={process.env.PUBLIC_URL + "/Rome/greeeeeeen.jpg"}
        alt="Rome"
        style={styles.image}
      />
      <img
          src={process.env.PUBLIC_URL + "/Rome/greeeeeen.jpg"}
        alt="Rome"
        style={styles.image}
      />
      <img
          src={process.env.PUBLIC_URL + "/Rome/greeeen.jpg"}
        alt="Rome"
        style={styles.image}
      />
      <img
          src={process.env.PUBLIC_URL + "/Rome/greeen.jpg"}
        alt="Rome"
        style={styles.image}
      />
      <img
          src={process.env.PUBLIC_URL + "/Rome/green.jpg"}
        alt="Rome"
        style={styles.image}
      />
      <img
          src={process.env.PUBLIC_URL + "/Rome/gri.jpg"}
        alt="Rome"
        style={styles.image}
      />
      <img
          src={process.env.PUBLIC_URL + "/Rome/htoel.jpg"}
        alt="Rome"
        style={styles.image}
      />
      <img
          src={process.env.PUBLIC_URL + "/Rome/icecream.jpg"}
        alt="Rome"
        style={styles.image}
      />
      <img
          src={process.env.PUBLIC_URL + "/Rome/iron.jpg"}
        alt="Rome"
        style={styles.image}
      />
      <img
          src={process.env.PUBLIC_URL + "/Rome/ita.jpg"}
        alt="Rome"
        style={styles.image}
      />
      <img
          src={process.env.PUBLIC_URL + "/Rome/italllt.jpg"}
        alt="Rome"
        style={styles.image}
      />
      <img
          src={process.env.PUBLIC_URL + "/Rome/pasta.jpg"}
        alt="Rome"
        style={styles.image}
      />
      <img
          src={process.env.PUBLIC_URL + "/Rome/potato.jpg"}
        alt="Rome"
        style={styles.image}
      />
      <img
          src={process.env.PUBLIC_URL + "/Rome/s.jpg"}
        alt="Rome"
        style={styles.image}
      />
      <img
          src={process.env.PUBLIC_URL + "/Rome/RomeMagenet.jpg"}
        alt="Rome"
        style={styles.image}
      />
      <img
          src={process.env.PUBLIC_URL + "/Rome/ss.jpg"}
        alt="Rome"
        style={styles.image}
      />
      <img
          src={process.env.PUBLIC_URL + "/Rome/sss.jpg"}
        alt="Rome"
        style={styles.image}
      />
      <img
          src={process.env.PUBLIC_URL + "/Rome/strite5.jpg"}
        alt="Rome"
        style={styles.image}
      />
      <img
          src={process.env.PUBLIC_URL + "/Rome/toel.jpg"}
        alt="Rome"
        style={styles.image}
      />
      <img
          src={process.env.PUBLIC_URL + "/Rome/ttra.jpg"}
        alt="Rome"
        style={styles.image}
      />
      <img
          src={process.env.PUBLIC_URL + "/Rome/vatixxan.jpg"}
        alt="Rome"
        style={styles.image}
      />
      <img
          src={process.env.PUBLIC_URL + "/Rome/vatican.jpg"}
        alt="Rome"
        style={styles.image}
      />
      <img
          src={process.env.PUBLIC_URL + "/Rome/wine.jpg"}
        alt="Rome"
        style={styles.image}
      />
      <img
          src={process.env.PUBLIC_URL + "/Rome/woo.jpg"}
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
