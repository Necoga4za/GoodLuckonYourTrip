import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section style={styles.section}>
      {/* 상단 배경 */}
      <div
        style={{
          backgroundImage: 'url("/headBack.png")',
          height: '55px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginBottom: '1.5rem'
        }}
      ></div>

      {/* 타이틀 */}
      <h1 style={styles.h1}>Good Luck on Your Trip</h1>

      {/* 좌우 두 칼럼 배치 */}
      <div style={styles.mainWrapper}>
        {/* 왼쪽 칼럼 - [INFO] 설명 */}
        <div style={styles.infoRow}>
          <div style={styles.label}>[INFO]</div>
          <div style={styles.content}>
            <p>
            This website shares memorable places, experiences, and moments 
            from my travels around the world. Visitors can discover new 
            cultures, hidden gems, and practical insights for their journeys.
             I hope this space inspires and guides your adventures.
            </p>
            <p>
            Travel enriches your life by broadening perspectives and opening 
            doors to new possibilities. Venture out with courage and curiosity
            —the world awaits you. Cheering you on every step of the way!

            Stay inspired and keep exploring!
            </p>
            <p>Insta@noeyso0</p>
          </div>
        </div>

        {/* 오른쪽 칼럼 - TRACK 리스트 */}
        <div>
        <div style={styles.infoRow}>
          <div style={styles.label}>[TRACKS]</div>
          <div style={styles.rightColumn}>
          {<Link to="/Introduction" style={styles.link}><div style={styles.row}><span>[ITALY]</span>   <span style={styles.description}>Rome, Frene, Venice, Vatican </span> <span >Once</span> <span>Oct 2024</span></div></Link>}
          {<Link to="/Frence/Introduction" style={styles.link}><div style={styles.row}><span>[FRENCE]</span>    <span style={styles.description}>Paris </span> <span >Once</span> <span>Oct 2024</span></div></Link>}
          {<Link to="/Taiwan/Introduction" style={styles.link}><div style={styles.row}><span>[TAIWAN]</span>    <span style={styles.description}>Tainan, Taizong, Taipie </span> <span >fourth</span> <span>Nov 2024</span></div></Link>}
          {<Link to="/Hongkong/Introduction" style={styles.link}><div style={styles.row}><span>[HONGKONG]</span>    <span style={styles.description}>Honkong, Makao, Shenzhen </span> <span>Twice</span> <span>Nov 2024</span></div></Link>}
          {<Link to="/Japan/Introduction" style={styles.link}><div style={styles.row}><span>[JAPAN]</span>    <span style={styles.description}>Osaka, Kobe, Nara, Kyoto, Tokyo </span> <span>Thrice</span> <span>Mar 2025</span></div></Link>}
          </div>
          </div>
        </div>
      </div>

      {/* 하단 구분선 이미지
      <div
        style={{
          backgroundImage: 'url("/Rectangle 10.png")',
          height: '30px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginTop: '4rem'
        }}
      ></div> */}
    </section>
  );
};

            const styles = {
            section: {
                backgroundColor: '#fff',
            },
            h1: {
                textAlign: 'center',
                margin: '3.5rem',
                fontSize: '2.5rem',
                fontFamily: 'Georgia, serif',
                fontWeight: 300
            },
            link: {
              textDecoration: 'none',  // 밑줄 제거
              color: 'black',          // 검정색 텍스트
            },
            mainWrapper: {
                display: 'flex',
                justifyContent: 'space-between',
                gap: '8rem',
                margin: '0 auto',             // 중앙 정렬 유지
                alignItems: 'flex-start',
                fontFamily: '"IBM Plex Sans", sans-serif',
                padding: '0 80px'             
            },
            infoRow: {
                display: 'flex',
                alignItems: 'flex-start',
                flex: 1,
                gap: '1rem',
                width: '700px',
            },
            label: {
                minWidth: '80px',
                fontWeight: 'bold',
                color: '#444'
            },
            content: {
                flex: 1,
                color: '#333',
                lineHeight: '1.6'
            },
            rightColumn: {
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.8rem',
                fontSize: '0.9rem',
                color: '#333'
            },
            row: {
                display: 'flex',
                gap: '2rem', 
                flexWrap: 'wrap',
                alignItems: 'center'
            },
            description: {
                flex: 1,
                minWidth: '120px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
            }
            };

export default Header;
