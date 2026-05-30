<template>
  <div class="home">

    <!-- HERO SECTION -->
    <section class="hero">
      <div class="overlay"></div>

      <div class="hero-content">
        <h1>The Land of a Thousand Hills</h1>
       

        <div class="hero-buttons">
          <button class="btn-primary">Explore Rwanda</button>
          <button class="btn-secondary">Book Adventure</button>
        </div>
      </div>
    </section>

    <!-- DESTINATIONS -->
    <section class="destinations">
      <h2>Top Destinations</h2>

      <div class="card-container">

        <div class="card">
          <img src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1000" alt="Volcanoes National Park">
          <div class="card-content">
            <h3>Volcanoes National Park</h3>
            <p>
              Experience mountain gorillas and beautiful volcanic landscapes.
            </p>
          </div>
        </div>

        <div class="card">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1000" alt="Lake Kivu">
          <div class="card-content">
            <h3>Lake Kivu</h3>
            <p>
              Relax on peaceful beaches and enjoy luxury lakeside resorts.
            </p>
          </div>
        </div>

        <div class="card">
          <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1000" alt="Akagera National Park">
          <div class="card-content">
            <h3>Akagera National Park</h3>
            <p>
              Discover wildlife safaris, lions, elephants and unforgettable views.
            </p>
          </div>
        </div>

      </div>
    </section>

    <!-- WHY VISIT -->
    <section class="why-rwanda">
      <h2>Why Visit Rwanda?</h2>

      <div class="features">

        <div class="feature-box">
          <h3>🌍 Beautiful Nature</h3>
          <p>Green hills, lakes, volcanoes and amazing wildlife.</p>
        </div>

        <div class="feature-box">
          <h3>🦍 Gorilla Trekking</h3>
          <p>Get close to the rare mountain gorillas.</p>
        </div>

        <div class="feature-box">
          <h3>🏕️ Luxury Adventures</h3>
          <p>Experience safaris, resorts and unforgettable journeys.</p>
        </div>

      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <h2>Your Rwanda Adventure Starts Today</h2>
      <p>Book your dream destination and experience Rwanda like never before.</p>
      <button>Start Exploring</button>
    </section>

  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.home {
  font-family: Arial, sans-serif;
}

/* HERO */
.hero {
  position: relative;
  height: 100vh;
  background-image: url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.5);
}

.hero-content {
  position: relative;
  color: white;
  max-width: 800px;
  z-index: 2;
  padding: 20px;
}

.hero-content h1 {
  font-size: 4rem;
  margin-bottom: 20px;
  color: gold;
}

.hero-content p {
  font-size: 1.2rem;
  line-height: 1.8;
}

.hero-buttons {
  margin-top: 30px;
}

.btn-primary,
.btn-secondary {
  border: none;
  padding: 15px 35px;
  margin: 10px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.4s ease;
}

.btn-primary {
  background: gold;
}

.btn-primary:hover {
  transform: scale(1.08);
}

.btn-secondary {
  background: green;
  color: white;
}

.btn-secondary:hover {
  transform: scale(1.08);
}

/* DESTINATIONS */
.destinations {
  padding: 80px 10%;
  background: #f8f8f8;
  text-align: center;
}

.destinations h2 {
  font-size: 3rem;
  margin-bottom: 40px;
  color: green;
}

.card-container {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  width: 340px;
  background: white;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  transition: 0.4s;
}

.card:hover {
  transform: translateY(-15px);
}

.card img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}

.card-content {
  padding: 20px;
}

.card-content h3 {
  color: green;
  margin-bottom: 15px;
}

/* WHY RWANDA */
.why-rwanda {
  padding: 90px 10%;
  text-align: center;
}

.why-rwanda h2 {
  font-size: 3rem;
  color: gold;
  margin-bottom: 40px;
}

.features {
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
  justify-content: center;
}

.feature-box {
  width: 300px;
  background: white;
  padding: 30px;
  border-radius: 25px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.15);
  transition: 0.4s;
}

.feature-box:hover {
  transform: scale(1.06);
}

/* CTA */
.cta {
  background: linear-gradient(to right, green, gold);
  text-align: center;
  padding: 100px 20px;
  color: white;
}

.cta h2 {
  font-size: 3rem;
}

.cta p {
  margin: 20px 0;
  font-size: 1.1rem;
}

.cta button {
  border: none;
  padding: 16px 35px;
  border-radius: 50px;
  font-size: 1rem;
  cursor: pointer;
  background: white;
  transition: 0.3s;
}

.cta button:hover {
  transform: scale(1.08);
}

@media(max-width:768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }

  .card {
    width: 100%;
  }
}
</style>