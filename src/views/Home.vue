<template>
  <main class="home-page">
    <section class="hero">
      <div class="hero-scene">
        <div class="hero-card glass-surface">
          <span class="eyebrow">Visit Rwanda in style</span>
          <h1>Rwanda, designed like a dream itinerary.</h1>
          <p>
            Gorilla trekking, Akagera safaris, Lake Kivu sunsets, Nyungwe rainforest,
            and Kigali culture shaped into one premium travel experience.
          </p>
          <div class="hero-actions">
            <RouterLink to="/services">Explore Services</RouterLink>
            <RouterLink to="/destinations/northern">See Destinations</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <section class="showcase">
      <div class="section-heading">
        <span class="eyebrow">The routes everyone remembers</span>
        <h2>Four powerful regions, one unforgettable country.</h2>
      </div>

      <div class="destination-grid">
        <RouterLink
          v-for="card in destinations"
          :key="card.title"
          :to="card.to"
          class="destination-card"
        >
          <img :src="card.image" :alt="card.title" />
          <div>
            <span>{{ card.region }}</span>
            <h3>{{ card.title }}</h3>
            <p>{{ card.text }}</p>
          </div>
        </RouterLink>
      </div>
    </section>

    <section class="cinematic-band">
      <div>
        <span class="eyebrow">Peak travel energy</span>
        <h2>Private, polished, and built around the moments you came for.</h2>
      </div>
      <div class="stats">
        <article><strong>4</strong><span>National parks</span></article>
        <article><strong>30+</strong><span>Signature routes</span></article>
        <article><strong>24/7</strong><span>Trip support</span></article>
      </div>
    </section>
  </main>
</template>

<script setup>
const destinations = [
  {
    region: 'Northern Province',
    title: 'Volcanoes and gorillas',
    text: 'Iconic trekking, twin lakes, Musanze culture, and cool mountain lodges.',
    image: 'https://source.unsplash.com/900x700/?rwanda,volcanoes,gorilla',
    to: '/destinations/northern',
  },
  {
    region: 'Southern Province',
    title: 'Nyungwe and heritage',
    text: 'Rainforest canopy walks, royal history, tea estates, and deep culture.',
    image: 'https://source.unsplash.com/900x700/?rwanda,nyungwe,forest',
    to: '/destinations/southern',
  },
  {
    region: 'Western Province',
    title: 'Lake Kivu escapes',
    text: 'Lakeside resorts, islands, coffee routes, and golden evening views.',
    image: 'https://source.unsplash.com/900x700/?rwanda,lake,kivu',
    to: '/destinations/western',
  },
  {
    region: 'Eastern Province',
    title: 'Akagera safari plains',
    text: 'Game drives, boat safaris, wildlife lodges, and big open horizons.',
    image: 'https://source.unsplash.com/900x700/?akagera,safari,rwanda',
    to: '/destinations/eastern',
  },
]
</script>

<style scoped>
.home-page {
  color: var(--ink);
  overflow: hidden;
}

.hero {
  position: relative;
  min-height: 92vh;
  display: grid;
  place-items: center;
  padding: 90px 8%;
  background:
    linear-gradient(120deg, rgba(5, 42, 28, 0.9), rgba(5, 42, 28, 0.2)),
    url('https://source.unsplash.com/1900x1200/?rwanda,landscape') center/cover;
  isolation: isolate;
}

.hero::before {
  position: absolute;
  inset: 0;
  z-index: -1;
  background: inherit;
  content: "";
  animation: slowZoom 18s ease-in-out infinite alternate;
}

.hero-scene {
  width: min(1120px, 100%);
  perspective: 1200px;
}

.hero-card {
  max-width: 760px;
  padding: clamp(32px, 6vw, 64px);
  border-radius: 8px;
  transform-style: preserve-3d;
  animation: riseIn 0.8s ease both, float3d 7s ease-in-out 1s infinite;
}

.eyebrow {
  display: inline-flex;
  margin-bottom: 14px;
  color: var(--gold);
  font-weight: 900;
  text-transform: uppercase;
}

h1,
h2,
h3,
p {
  margin: 0;
}

h1 {
  color: #fff;
  font-size: clamp(46px, 8vw, 92px);
  line-height: 0.98;
  text-shadow: 0 20px 45px rgba(0, 0, 0, 0.28);
}

.hero p {
  margin-top: 24px;
  color: #f4fbf5;
  font-size: 21px;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 32px;
}

.hero-actions a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 0 24px;
  border-radius: 6px;
  color: #10251c;
  background: var(--gold);
  font-weight: 900;
  text-decoration: none;
  transition: 0.25s ease;
}

.hero-actions a + a {
  background: #fff;
}

.hero-actions a:hover {
  transform: translateY(-5px) rotateX(8deg);
  box-shadow: 0 18px 35px rgba(0, 0, 0, 0.22);
}

.showcase {
  padding: 92px 8%;
}

.section-heading {
  max-width: 780px;
  margin-bottom: 42px;
}

.section-heading h2,
.cinematic-band h2 {
  font-size: clamp(34px, 5vw, 62px);
  line-height: 1.05;
}

.destination-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  perspective: 1000px;
}

.destination-card {
  overflow: hidden;
  border-radius: 8px;
  background: #fff;
  color: inherit;
  text-decoration: none;
  box-shadow: var(--shadow);
  transform-style: preserve-3d;
  transition: 0.35s ease;
  animation: riseIn 0.7s ease both;
}

.destination-card:hover {
  transform: translateY(-14px) rotateX(5deg) rotateY(-4deg);
}

.destination-card img {
  width: 100%;
  height: 280px;
  object-fit: cover;
  transition: 0.45s ease;
}

.destination-card:hover img {
  transform: scale(1.08);
}

.destination-card div {
  padding: 24px;
}

.destination-card span {
  color: #b18417;
  font-weight: 900;
}

.destination-card h3 {
  margin-top: 8px;
  color: var(--leaf);
  font-size: 25px;
}

.destination-card p {
  margin-top: 12px;
  color: var(--muted);
  line-height: 1.7;
}

.cinematic-band {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 0.8fr);
  gap: 40px;
  align-items: center;
  padding: 90px 8%;
  background:
    linear-gradient(120deg, rgba(5, 42, 28, 0.92), rgba(13, 107, 67, 0.78)),
    url('https://source.unsplash.com/1800x900/?rwanda,kigali') center/cover;
  color: #fff;
}

.stats {
  display: grid;
  gap: 16px;
}

.stats article {
  padding: 24px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.18);
}

.stats strong,
.stats span {
  display: block;
}

.stats strong {
  color: var(--gold);
  font-size: 46px;
}

@media (max-width: 820px) {
  .cinematic-band {
    grid-template-columns: 1fr;
  }
}
</style>
