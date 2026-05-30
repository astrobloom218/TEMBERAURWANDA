<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="overlay">
        <div class="hero-content">
          <h1>About Visit Rwanda</h1>
          <p>
            Discover the beauty, culture, wildlife, and unforgettable
            experiences that make Rwanda the heart of African tourism.
          </p>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about-section">
      <div class="container">
        <div class="text-content">
          <h2>Who We Are</h2>
          <p>
            Visit Rwanda is a tourism platform dedicated to helping travelers
            explore the incredible beauty of Rwanda. From breathtaking
            mountains and national parks to vibrant cities and cultural
            experiences, Rwanda offers something unforgettable for every
            traveler.
          </p>

          <p>
            We aim to connect visitors with Rwanda’s most beautiful places,
            exciting adventures, wildlife experiences, and rich traditions.
            Whether you love nature, luxury travel, photography, or culture,
            Rwanda welcomes you.
          </p>
        </div>

        <div class="image-box">
          <img
            src="/src/assets/Rwanda.jpg"
            alt="Rwanda tourism"
          />
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="mission-vision">
      <div class="card">
        <h2>Our Mission</h2>
        <p>
          To promote Rwanda as one of Africa’s leading tourism destinations by
          showcasing its beauty, wildlife, culture, and unforgettable travel
          experiences.
        </p>
      </div>

      <div class="card">
        <h2>Our Vision</h2>
        <p>
          To inspire people around the world to visit Rwanda and experience a
          country filled with safety, cleanliness, adventure, hospitality, and
          natural beauty.
        </p>
      </div>
    </section>

    <!-- Why Visit Rwanda -->
    <section class="why-rwanda">
      <h2>Why Visit Rwanda?</h2>

      <div class="features">
        <div class="feature-card">
          <h3>🌍 Beautiful Nature</h3>
          <p>
            Explore mountains, lakes, forests, volcanoes, and stunning natural
            scenery unlike anywhere else.
          </p>
        </div>

        <div class="feature-card">
          <h3>🦍 Wildlife Adventures</h3>
          <p>
            Experience gorilla trekking, safaris, bird watching, and national
            parks filled with wildlife.
          </p>
        </div>

        <div class="feature-card">
          <h3>🏙️ Clean & Safe Cities</h3>
          <p>
            Kigali is one of Africa’s cleanest and safest cities with modern
            attractions and welcoming people.
          </p>
        </div>

        <div class="feature-card">
          <h3>🎭 Rich Culture</h3>
          <p>
            Discover traditional dances, local food, storytelling, music, and
            Rwandan history.
          </p>
        </div>
      </div>
    </section>

    <!-- Statistics -->
    <section class="stats">
      <div class="stat-box">
        <h1>100+</h1>
        <p>Tourist Attractions</p>
      </div>

      <div class="stat-box">
        <h1>4</h1>
        <p>National Parks</p>
      </div>

      <div class="stat-box">
        <h1>1000+</h1>
        <p>Wildlife Species</p>
      </div>

      <div class="stat-box">
        <h1>Millions</h1>
        <p>Happy Visitors</p>
      </div>
    </section>

    <!-- Experience Section -->
    <section class="experience">
      <h2>Experience Rwanda</h2>
      <p>
        Whether you dream of hiking volcanoes, relaxing near beautiful lakes,
        meeting mountain gorillas, exploring Kigali city, or learning local
        culture, Rwanda promises unforgettable memories and adventures.
      </p>
    </section>

    <!-- CTA -->
    <section class="cta">
      <h2>Ready To Explore Rwanda?</h2>
      <p>
        Start your journey today and experience one of Africa’s most beautiful
        destinations.
      </p>

      <button>Explore Destinations</button>
    </section>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.about-page {
  font-family: Arial, sans-serif;
  background: #f5f8f2;
}

/* HERO */
.hero {
  height: 90vh;
  background: linear-gradient(
      rgba(0, 50, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ),
    url("")
      center/cover no-repeat;
}

.overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
  padding: 20px;
}

.hero-content h1 {
  color: gold;
  font-size: 70px;
  margin-bottom: 20px;
}

.hero-content p {
  color: white;
  font-size: 22px;
  max-width: 700px;
  line-height: 1.7;
}

/* ABOUT */
.about-section {
  padding: 90px 10%;
}

.container {
  display: flex;
  gap: 50px;
  align-items: center;
  flex-wrap: wrap;
}

.text-content {
  flex: 1;
}

.text-content h2 {
  color: darkgreen;
  font-size: 45px;
  margin-bottom: 20px;
}

.text-content p {
  color: #444;
  line-height: 1.9;
  margin-bottom: 20px;
  font-size: 18px;
}

.image-box {
  flex: 1;
}

.image-box img {
  width: 100%;
  border-radius: 25px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

/* Mission Vision */
.mission-vision {
  display: flex;
  gap: 30px;
  padding: 70px 10%;
  flex-wrap: wrap;
}

.card {
  flex: 1;
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  transition: 0.4s;
  border-top: 6px solid gold;
}

.card:hover {
  transform: translateY(-10px);
}

.card h2 {
  color: darkgreen;
  margin-bottom: 20px;
}

.card p {
  color: #555;
  line-height: 1.8;
}

/* WHY RWANDA */
.why-rwanda {
  padding: 80px 10%;
  text-align: center;
}

.why-rwanda h2 {
  font-size: 50px;
  color: darkgreen;
  margin-bottom: 40px;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}

.feature-card {
  background: white;
  padding: 35px;
  border-radius: 20px;
  transition: 0.4s;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

.feature-card:hover {
  transform: scale(1.05);
}

.feature-card h3 {
  color: goldenrod;
  margin-bottom: 15px;
}

.feature-card p {
  color: #555;
  line-height: 1.7;
}

/* STATS */
.stats {
  background: darkgreen;
  padding: 70px 10%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: center;
}

.stat-box {
  color: white;
}

.stat-box h1 {
  font-size: 50px;
  color: gold;
}

.stat-box p {
  margin-top: 10px;
}

/* EXPERIENCE */
.experience {
  text-align: center;
  padding: 90px 10%;
}

.experience h2 {
  color: darkgreen;
  font-size: 50px;
  margin-bottom: 20px;
}

.experience p {
  max-width: 900px;
  margin: auto;
  line-height: 1.9;
  color: #555;
  font-size: 18px;
}

/* CTA */
.cta {
  background: linear-gradient(to right, darkgreen, green);
  text-align: center;
  padding: 90px 20px;
}

.cta h2 {
  color: gold;
  font-size: 50px;
}

.cta p {
  color: white;
  margin: 20px 0;
  font-size: 18px;
}

.cta button {
  background: gold;
  border: none;
  padding: 15px 40px;
  font-size: 18px;
  border-radius: 40px;
  cursor: pointer;
  transition: 0.3s;
}

.cta button:hover {
  background: white;
}

/* RESPONSIVE */
@media(max-width:768px) {
  .hero-content h1 {
    font-size: 45px;
  }

  .why-rwanda h2,
  .experience h2,
  .cta h2 {
    font-size: 35px;
  }

  .stats {
    gap: 30px;
    justify-content: center;
  }
}
</style>