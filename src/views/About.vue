```vue
<template>
  <div class="about-page">

    <!-- HERO -->
    <section class="hero">
      <div class="hero-overlay">
        <div class="hero-content">
          <span class="tag">🇷🇼 Welcome To Rwanda</span>
          <h1>Discover The Heart Of Africa</h1>
          <p>
            Visit Rwanda is your gateway to breathtaking mountains, wildlife,
            culture, luxury tourism, unforgettable adventures, and beautiful
            landscapes.
          </p>

          <button>Explore Rwanda</button>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section class="about-section">
      <div class="section-title">
        <h2>About Visit Rwanda</h2>
        <div class="line"></div>
      </div>

      <div class="about-grid">
        <div class="about-image">
          <img
            src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5"
            alt="Rwanda"
          />
        </div>

        <div class="about-text">
          <h3>Experience Rwanda Like Never Before</h3>

          <p>
            Rwanda is one of Africa’s fastest growing tourism destinations,
            known for stunning landscapes, clean cities, mountain gorillas,
            volcanoes, lakes, luxury hotels, and rich culture.
          </p>

          <p>
            Our mission is to help visitors discover Rwanda’s hidden treasures
            while enjoying safe, premium, unforgettable experiences.
          </p>

          <div class="info-cards">
            <div class="info-card">
              <h4>🌍 Tourism</h4>
              <p>Explore parks, cities, lakes and volcanoes.</p>
            </div>

            <div class="info-card">
              <h4>🦍 Wildlife</h4>
              <p>Meet mountain gorillas and wildlife adventures.</p>
            </div>

            <div class="info-card">
              <h4>🏞 Nature</h4>
              <p>Beautiful landscapes and fresh environments.</p>
            </div>

            <div class="info-card">
              <h4>🎭 Culture</h4>
              <p>Experience Rwandan traditions and heritage.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- MISSION -->
    <section class="mission">
      <div class="card">
        <h2>Our Mission</h2>
        <p>
          To promote Rwanda as a premium tourism destination filled with
          unforgettable travel experiences, nature, luxury, and culture.
        </p>
      </div>

      <div class="card">
        <h2>Our Vision</h2>
        <p>
          To inspire millions of travelers around the world to discover the
          beauty of Rwanda.
        </p>
      </div>

      <div class="card">
        <h2>Our Goal</h2>
        <p>
          To help travelers plan their perfect Rwanda experience.
        </p>
      </div>
    </section>

    <!-- STATS -->
    <section class="stats">
      <div class="stat-card">
        <h1>100+</h1>
        <p>Tourist Attractions</p>
      </div>

      <div class="stat-card">
        <h1>4</h1>
        <p>National Parks</p>
      </div>

      <div class="stat-card">
        <h1>1000+</h1>
        <p>Wildlife Species</p>
      </div>

      <div class="stat-card">
        <h1>Millions</h1>
        <p>Visitors</p>
      </div>
    </section>

    <!-- WHY RWANDA -->
    <section class="why-rwanda">
      <div class="section-title">
        <h2>Why Visit Rwanda?</h2>
        <div class="line"></div>
      </div>

      <div class="why-grid">
        <div class="why-card">
          <h3>🦍 Gorilla Trekking</h3>
          <p>Meet mountain gorillas in breathtaking forests.</p>
        </div>

        <div class="why-card">
          <h3>🏙 Kigali City</h3>
          <p>Clean, modern, safe and beautiful city experience.</p>
        </div>

        <div class="why-card">
          <h3>🌋 Volcanoes</h3>
          <p>Adventure through Rwanda’s volcanic mountains.</p>
        </div>

        <div class="why-card">
          <h3>🌊 Lakes</h3>
          <p>Relax near beautiful lakes and luxury resorts.</p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <h2>Ready To Explore Rwanda?</h2>
      <p>
        Start your unforgettable journey today.
      </p>

      <button>Book Your Adventure</button>
    </section>

  </div>
</template>

<style scoped>
*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,sans-serif;
}

.about-page{
background:#f5f8f3;
}

/* HERO */
.hero{
height:100vh;
background:
linear-gradient(rgba(0,40,0,.6),rgba(0,0,0,.6)),
url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')
center/cover;
}

.hero-overlay{
height:100%;
display:flex;
justify-content:center;
align-items:center;
text-align:center;
padding:20px;
}

.hero-content{
max-width:900px;
}

.tag{
background:rgba(255,215,0,.2);
padding:10px 20px;
border-radius:30px;
color:gold;
font-weight:bold;
}

.hero-content h1{
font-size:80px;
color:white;
margin:30px 0;
line-height:1.1;
}

.hero-content p{
font-size:22px;
color:#ddd;
line-height:1.8;
margin-bottom:30px;
}

.hero-content button{
padding:18px 40px;
border:none;
background:gold;
border-radius:40px;
font-size:18px;
cursor:pointer;
transition:.4s;
font-weight:bold;
}

.hero-content button:hover{
background:white;
transform:translateY(-5px);
}

/* SECTION TITLE */
.section-title{
text-align:center;
margin-bottom:60px;
}

.section-title h2{
font-size:55px;
color:#0d5c2f;
}

.line{
width:120px;
height:5px;
background:gold;
margin:auto;
border-radius:20px;
margin-top:10px;
}

/* ABOUT */
.about-section{
padding:100px 10%;
}

.about-grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:60px;
align-items:center;
}

.about-image img{
width:100%;
border-radius:30px;
box-shadow:0 20px 50px rgba(0,0,0,.2);
}

.about-text h3{
font-size:45px;
color:#0d5c2f;
margin-bottom:20px;
}

.about-text p{
font-size:18px;
line-height:1.9;
color:#444;
margin-bottom:20px;
}

.info-cards{
display:grid;
grid-template-columns:repeat(2,1fr);
gap:20px;
margin-top:30px;
}

.info-card{
background:white;
padding:25px;
border-radius:20px;
box-shadow:0 10px 25px rgba(0,0,0,.1);
transition:.4s;
border-top:5px solid gold;
}

.info-card:hover{
transform:translateY(-10px);
}

/* MISSION */
.mission{
padding:100px 10%;
display:grid;
grid-template-columns:repeat(3,1fr);
gap:30px;
}

.card{
background:white;
padding:40px;
border-radius:30px;
box-shadow:0 10px 30px rgba(0,0,0,.1);
transition:.4s;
text-align:center;
}

.card:hover{
transform:translateY(-10px);
}

.card h2{
color:#0d5c2f;
margin-bottom:20px;
}

/* STATS */
.stats{
background:#0d5c2f;
padding:80px 10%;
display:grid;
grid-template-columns:repeat(4,1fr);
text-align:center;
gap:20px;
}

.stat-card h1{
font-size:55px;
color:gold;
}

.stat-card p{
color:white;
font-size:18px;
}

/* WHY */
.why-rwanda{
padding:100px 10%;
}

.why-grid{
display:grid;
grid-template-columns:repeat(4,1fr);
gap:25px;
}

.why-card{
background:white;
padding:40px;
border-radius:25px;
text-align:center;
box-shadow:0 10px 25px rgba(0,0,0,.1);
transition:.4s;
}

.why-card:hover{
transform:translateY(-10px);
}

.why-card h3{
color:#0d5c2f;
margin-bottom:15px;
}

/* CTA */
.cta{
padding:120px 20px;
text-align:center;
background:
linear-gradient(rgba(0,80,0,.8),rgba(0,80,0,.8)),
url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3')
center/cover;
}

.cta h2{
font-size:60px;
color:gold;
margin-bottom:20px;
}

.cta p{
color:white;
font-size:22px;
margin-bottom:30px;
}

.cta button{
padding:18px 40px;
border:none;
background:gold;
font-size:18px;
border-radius:40px;
cursor:pointer;
font-weight:bold;
}

/* MOBILE */
@media(max-width:900px){

.hero-content h1{
font-size:50px;
}

.about-grid,
.mission,
.stats,
.why-grid{
grid-template-columns:1fr;
}

.section-title h2{
font-size:40px;
}
}
</style>
```
