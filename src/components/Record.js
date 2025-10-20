import React from 'react';

const ArticleCard = ({ variant, color, image, title, date, paragraph }) => {
  return (
    <div style={{ ...styles.card, ...styles[variant] }}> 
      <h2 style={{ ...styles.title, color }}>{title}</h2>
      <p style={styles.date}>Italy, October 2024</p>
      <img src={image} alt="incident" style={styles.image} />
      <p style={{ ...styles.excerpt, color }}>{paragraph.slice(0, 50)}...</p>
      <p style={{ ...styles.paragraph, color }}>{paragraph}</p>
    </div>
  );
};

const paragraphText = `During my trip to Florence, I stayed at an Airbnb with a beautiful garden and the cutest cats — the place had amazing reviews and truly lived up to them.

However, communication was tricky. Since it was a one-on-one setup and the host was older, I messaged them a few hours early to say I might arrive ahead of schedule, but didn’t get a reply. With no way to check in or contact anyone, I grew anxious, especially with plans later in the day. The house was hard to find, the streets were uneven cobblestones, and I was close to tears dragging my suitcase around.

Thankfully, the host arrived just as I was about to give up — turns out they were out grocery shopping. While I did arrive early, the lack of communication made things stressful.

Still, the stay was lovely and I'd return in a heartbeat. But one thing’s for sure: being close to the train station is a must in cities like Florence. The 20-minute walk felt endless with a heavy suitcase and rough roads!`;

const paragraphText2 = `On my way from Rome airport to the city center, I took the airport train. I had heard people talk about body odor in Europe, but this was my first time actually experiencing it — and it hit me hard.

The train unexpectedly stopped for about an hour mid-journey, packed with people, and there was barely any air circulation. The smell was overwhelming, and I started to get a headache. I even found myself subtly covering my nose at times because it was just too much to handle.

Later, I heard that covering your nose like that could be seen as a form of discrimination, which made me feel a bit conflicted… But honestly, I was just trying to survive that moment.

Even walking around the city, the sudden waves of body odor were hard to adjust to. I wonder — is it something you eventually get used to?`

const paragraphText3 = `I arrived in Venice later in the afternoon, so by the time I settled in, it was already getting dark. My plan was to visit a local supermarket — I love checking out grocery stores in different countries! — and cook a meal with whatever I found.

Without checking the time, I headed out toward the store. I wasn’t staying on the main island of Venice, but in a more residential area. Unlike the tourist spots, the streets there were incredibly dark, quiet, and barely lit. It felt more like a regular neighborhood than a destination, and honestly, it was a bit scary.

Looking back, I probably should’ve turned around sooner, but I kept walking — only to find the store was already closed. On the way back, feeling frustrated and disappointed, a man on a bicycle suddenly started following me and trying to talk to me. I couldn’t understand what he was saying, but it made me feel really uneasy.

That was the moment it hit me — maybe this is why people say solo travel can be risky, especially for women.`

const paragraphText4 = `Rome was the first stop on my trip to Italy, and getting there was quite the journey. I had a layover in Qatar before heading to Rome, and on the flight from Doha to Rome, I was seated next to an Italian man — he kind of reminded me of someone from The Simpsons, haha.

We exchanged a few glances and small talk throughout the flight, and I got the impression that he was just… a really kind, wholesome man. You know that “good uncle” kind of vibe? It made the long flight feel a little more comfortable.

As we were about to land, he pulled out some candy and offered one to me. It was a familiar coffee-flavored hard candy — the kind that brings a little warmth when you're far from home. I actually snapped a photo of it because it felt like such a sweet gesture, literally and emotionally.

Later, at the airport, I saw him again and he greeted me with a cheerful “Cia cia!” — which I later learned is an informal way of saying hello or goodbye in Italian.

It was a lovely moment, and it made a nice impression on me at the start of my trip.
But just a little tip: if you’re offered food by a stranger while traveling abroad, it’s always smart to be cautious — not everyone may be as kind as my seatmate. So, don’t accept things too quickly like I did!`

const App = () => {
  return (
    <div style={styles.container}>
      <ArticleCard 
        variant="gray"
        color="black"
        image="/Rome/key.jpg"
        title="Dragging My Suitcase Through Florence, Fighting Back Tears"
        paragraph={paragraphText}
      />
      <ArticleCard 
        variant="gray"
        color="black"
        image="/Rome/nose.jpg"
        title="Can You Get Used to This? My Nose Says No."
        paragraph={paragraphText2}
      />
      <ArticleCard 
        variant="gray"
        color="black"
        image="/Rome/sca.jpg"
        title="The Night I Truly Felt Alone in Venice"
        paragraph={paragraphText3}
      />
      <ArticleCard 
        variant="gray"
        color="black"
        image="/Rome/candy.jpg"
        title="The Italian Uncle I Met at 30,000 Feet"
        paragraph={paragraphText4}
      />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingLeft: '80px',
    paddingRight: '80px',
    paddingTop: '50px',
    gap: '20px'
  },
  card: {
    width: '350px',
    padding: '20px',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    paddingTop: '40px',
    paddingBottom: '40px',
    paddingLeft: '40px',
    paddingRight: '40px'
  },
  // red: {
  //   backgroundColor: '#ffeeee'
  // },
  gray: {
    backgroundColor: '#f0f0f0'
  },
  // blue: {
  //   backgroundColor: '#eef3ff'
  // },
  title: {
    fontSize: '1.2rem',
    marginBottom: '0.5rem',
    fontFamily: 'Georgia, serif',
    textAlign: 'center',
    fontWeight: '550'
  },
  date: {
    fontSize: '0.8rem',
    color: '#666',
    marginBottom: '3.rem',
    textAlign: 'center',
    marginTop: '10px',
  },
  image: {
    width: '100%',
    height: 'auto',
    marginBottom: '1rem'
  },
  excerpt: {
    fontSize: '0.9rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem'
  },
  paragraph: {
    fontSize: '0.85rem',
    lineHeight: '1.5'
  }
};

export default App;
