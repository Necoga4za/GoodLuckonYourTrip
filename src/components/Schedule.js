import React from 'react';
import { Link } from 'react-router-dom';

const Schedule = ()=> {
  return (
    <>
    <nav style={styles.nav}>
  <ul style={styles.menu}>
    <li><Link to="/" style={styles.link}>[Rome]</Link></li>
    <li><Link to="/Introduction" style={styles.link}>[Florence]</Link></li>
    <li><Link to="/Gallery" style={styles.link}>[Venice]</Link></li>
  </ul>
</nav>


    <section style={styles.section}>
      {[1, 2, 3, 4, 5, 6].map((num) => (
        <React.Fragment key={num}>
          <div style={styles.content}>
            <p style={styles.day}>[DAY1]</p>
            <p style={styles.number}>[{num}]</p>

            <div style={styles.info}>
              <span style={styles.name}>Place</span> <span>{placeList[num - 1]}</span><br />
              <span style={styles.name}>Comment</span> <span>{commentList[num - 1]}</span><br />
              <span style={styles.name}>Horoscope</span> <span>{starList[num - 1]}</span><br />
              <span style={styles.name}>Location</span> <span>{locationList[num - 1]}</span>
            </div>

            <img src={smallImageList[num - 1]} alt="s" style={styles.smallimage} />
            <img src={imageList[num - 1]} alt="ss" style={styles.image} />
          </div>
          <div style={styles.underline}></div>
        </React.Fragment>
      ))}
    </section>
    </>
  );
};


      const placeList = [
        "산타 마리아 마조레 대성당",
        "Trattoria Vecchia Roma",
        "Danesi Caffè",
        "Villa Borghese",
        "La Casa del Caffè Tazza d'Oro",
        "Fontana di Trevi"
      ];

      const commentList = [
        "Let's find Bernini's remains.",
        "It's very salty.",
        "Cappuccino for breakfast.",
        "Puppy heaven.",
        "the taste of coffee in summer",
        "the taste of coffee in summer"
      ];

      const starList = ["☆☆☆☆", "☆☆", "☆☆☆☆☆", "☆☆☆☆☆", "☆☆☆☆", "☆☆"];

      const locationList = [
        "P.za di Santa Maria Maggiore, 00100 Roma RM, Italy",
        "Via Ferruccio, 12/b/c, 00185 Roma RM, Italy",
        "Via Volturno, 2F, 00185 Roma RM,Italy",
        "00197 Rome, Metropolitan City of Rome Capital,Italy",
        "Via del Lavatore, 81/82/82A, 00187 Roma RM, Italy",
        "Piazza di Trevi, 00187 Roma RM,Italy",
      ];

      const smallImageList = [
        "/Rome/s.jpg",
        "/Rome/wine.jpg",
        "/Rome/street.jpg",
        "/Rome/greeeeeen.jpg",
        "/Rome/coffe2.jpg",
        "/Rome/ita.jpg"
      ];

      const imageList = [
        "/Rome/ss.jpg",
        "/Rome/eat1.jpg",
        "/Rome/coffee.jpg",
        "/Rome/greeeeeeen.jpg",
        "/Rome/coffe.jpg",
        "/Rome/IMG_9816.jpg"
      ];

const styles = {
  section: {
    backgroundColor: '#fff',
    padding: '70px 80px',
    textAlign: 'center',
  },
  day: {
    margin: '0',
    textAlign: 'left',
    fontWeight: '600',
    width: '50px',
    paddingRight: '500px',
    color: 'white'
  },
  number: {
    fontWeight: '600'
  },
  content: {
    textAlign: 'left',
    display: 'flex',
    marginLeft: 'auto'
  },
  underline: {
    height: '1px',
    backgroundColor: '#8E8E8E',
    width: '63%',
    marginTop: '30px',
    marginLeft: 'auto',
    marginBottom: '80px'
  },
  info: {
    paddingTop: '300px',
    flexShrink: 0,
    marginLeft: 'auto',
    width: '600px'
  },
  name: {
    fontWeight: '600'
  },
  image: {
    width: '100%',
    maxWidth: '300px',
    textAlign: 'right',
    flexShrink: 0
  },
  smallimage: {
    height: '100%',
    maxWidth: '100px',
    textAlign: 'right',
    paddingRight: '20px'
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

export default Schedule;
