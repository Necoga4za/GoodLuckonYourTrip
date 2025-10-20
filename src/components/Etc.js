import React from 'react';

const LogEntry = ({ index, place, date, diary }) => {
  return (
    <div style={styles.logRow}>
      <div style={styles.index}>{index < 10 ? `0${index}/` : `${index}/`}</div>
      <div style={styles.centerBlock}>
        <div style={styles.place}>{place}</div>
        <div style={styles.date}>{date}</div>
      </div>
      <div style={styles.rightBlock}>
        <div style={styles.label}>Diary</div>
        <div style={styles.diary}>{diary}</div>
      </div>
    </div>
  );
};

const diaryText = `After a long journey, I finally arrived in Rome. The evening was calm — just a simple dinner, checking into my accommodation, and trying to take in the fact that I was really here, in Italy.`;
const diaryText1 = `The Vatican tour was everything I hoped for, and more. I spent time with wonderful people I met along the way, and we shared a meaningful experience. Later, walking through the Borghese Gardens, I felt completely at peace. That morning's cappuccino? One of the best I've ever had — truly moving in its simplicity.`
const diaryText2 = `I had the best seafood tomato pasta of my life. It’s a taste I’ll never forget. I attempted to visit the Pantheon for the second time, but once again, no luck. I then made my way to Florence — the check-in process was rough and a bit stressful. Still, the T-bone steak that evening and a quiet walk to see the night view made up for it.`
const diaryText3 = `I visited a beautiful art museum, and somehow ended up spending the day with the same people from yesterday. We waited in a long line for a famous pizza place — and it was absolutely worth it. I also found a magnet that I really liked. Back at the accommodation, one of the friends I made surprised me with a bottle of white wine. The taste was unforgettable, and the gesture even more touching.`
const diaryText4 = `The garden I saw that morning, and the cats sunbathing peacefully, were beautiful. I wish I had more time to enjoy that moment. I visited the Duomo and stumbled upon a theater-bookstore hybrid that was simply amazing. I was so tired I ended up dozing off, but the space left a deep impression. Then, I prepared to move on to Venice.`
const diaryText5 = `Arriving in Venice late, the streets were dark and quiet. I wasn’t staying in the touristy part of the city, and everything closed early. On my way back from a failed grocery run, a man on a bicycle started following me and talking to me. I rushed back to my accommodation, unsettled but safe. Later that night, I went to the hostel bar and ended up meeting a group of foreign travelers. We drank wine, sang songs, and laughed — it was my first time making international friends like that, and it was refreshing and exciting.`
const diaryText6 = `My proper exploration of Venice began. The winding alleys were confusing but full of charm. I met a kind and lovely travel companion, and together we explored old cafes and beautiful, nostalgic streets. The weather wasn’t great, but the company made it special nonetheless.
This journey has already been filled with so many emotions — peace, tension, joy, and connection. I can’t wait to see what comes next.
`

const App = () => {
  return (
    <div style={styles.logContainer}>
      <LogEntry index={1} place="Rome" date="2024.10.19" diary={diaryText} />
      <LogEntry index={2} place="Vatican / Borghese Park" date="2024.10.20" diary={diaryText1} />
      <LogEntry index={3} place="Florence (T-bone Steak)" date="2024.10.21" diary={diaryText2} />
      <LogEntry index={4} place="Florence (Art Museum)" date="2024.10.22" diary={diaryText3} />
      <LogEntry index={5} place="Florence (Duomo)" date="2024.10.23" diary={diaryText4} />
      <LogEntry index={6} place="Venice (Hostel Night)" date="2024.10.24" diary={diaryText5} />
      <LogEntry index={7} place="Venice (Exploration Day)" date="2024.10.25" diary={diaryText6} />
    </div>
  );
};

const styles = {
  logContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '80px',
    padding: '60px'
  },
  logRow: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  index: {
    width: '10%',
    fontWeight: 'bold',
    paddingLeft: '20px'
  },
  centerBlock: {
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.5rem'
  },
  rightBlock: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  place: {
    fontWeight: 'bold'
  },
  date: {
    fontSize: '0.9rem',
    color: '#444'
  },
  label: {
    fontWeight: 'bold'
  },
  diary: {
    fontSize: '0.85rem',
    color: '#444',
    lineHeight: 1.6
  }
};

export default App;
