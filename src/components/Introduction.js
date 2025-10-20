import React from 'react';

const Introduction = () => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h1 style={styles.title}>Rome, Italy</h1>
        <p style={styles.content}>
          Rome, Italy’s eternal city, charms visitors with its incredible blend of history, culture,
          and vibrant modern life. Explore iconic landmarks such as the Colosseum, the Roman Forum,
          and the Pantheon, and stroll through picturesque streets lined with cafes, boutiques, and
          lively piazzas. From awe-inspiring art and architecture to delightful cuisine and bustling
          markets, Rome offers endless opportunities to experience the rich legacy of the past and the
          lively spirit of the present. Travel enriches your life by broadening perspectives and
          opening doors to new possibilities. Venture out with courage and curiosity—the world
          awaits you. Cheering you on every step of the way! Stay inspired and keep exploring!
        </p>
      </div>
      <img
        src="/Rome/Colroseum.jpg"
        alt="Rome"
        style={styles.image}
      />
      <div style={styles.container}>
        <h1 style={styles.title}>Frence, Italy</h1>
        <p style={styles.content}>
        Florence, the heart of Tuscany, captivates travelers with its timeless beauty, Renaissance art, 
        and romantic atmosphere. As the birthplace of the Renaissance, Florence is home to masterpieces by 
        Michelangelo, Botticelli, and da Vinci. Walk across the iconic Ponte Vecchio, admire the stunning Duomo, 
        and lose yourself in charming alleyways filled with artisanal shops, cozy cafes, and centuries of history. 
        With every step, Florence offers a poetic blend of culture, creativity, and warmth.Travel enriches your life 
        by broadening perspectives and opening doors to new possibilities. Venture out with courage and curiosity—the 
        world awaits you. Cheering you on every step of the way!Stay inspired and keep exploring!
        </p>
      </div>
      <img
        src="/Florence/피렌체미술관뷰.jpg"
        alt="Rome"
        style={styles.image}
      />
      <div style={styles.container}>
        <h1 style={styles.title}>Venice, Italy</h1>
        <p style={styles.content}>
        Venice, the floating city of dreams, enchants visitors with its winding canals, historic architecture, and 
        magical atmosphere. Built on a network of islands, Venice offers unforgettable gondola rides through scenic 
        waterways, breathtaking views from the Rialto Bridge, and the vibrant charm of St. Mark's Square. From elegant 
        palazzos and artistic treasures to hidden alleys and peaceful lagoons, Venice invites you to slow down, wander, 
        and fall in love with every detail.Travel enriches your life by broadening perspectives and opening doors to new 
        possibilities. Venture out with courage and curiosity—the world awaits you. Cheering you on every step of the way!
        Stay inspired and keep exploring!
        </p>
      </div>
      <img
        src="/Venice/메인베니스.jpg"
        alt="Rome"
        style={styles.image}
      />

    <iframe
      title="Italy"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6150192.016158812!2d7.41640302751912!3d41.17765583014621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d4fe82448dd203%3A0xe22cf55c24635e6f!2z7J207YOI66as7JWE!5e0!3m2!1sko!2skr!4v1745409563518!5m2!1sko!2skr"
      width="100%"
      height="450"
      style={{ border: 0, marginTop: '1rem' }}
      allowFullScreen=""
      loading="lazy"
    />


    </section>
    
  )
};

    const styles = {
      section: {
        backgroundColor: '#fff',
        padding: '0 80px'       // 좌우 여백만 조금 주기
      },
      container: {
        display: 'flex',        
        alignItems: 'flex-start',
        gap: '34rem'             // 칼럼 사이 간격
      },
      title: {
        flex: '0 0 300px',      // 고정 너비 (필요에 따라 조절)
        textAlign: 'left',
        fontSize: '2.5rem',
        fontWeight: 600,
        margin: '3.5rem 0 1.5rem 0'
      },
      content: {
        flex: 1,                // 남은 공간을 모두 차지
        marginTop: '4rem',    // 제목과 수평 맞추기
        marginBottom: '1.5rem',
        lineHeight: 1.6,
        textAlign: 'left'
      },
      image: {
        width: '100%',        // 원하는 너비
        maxWidth: '670px',    // 최대 너비
        paddingLeft: '850px'
      }
    };

export default Introduction;


