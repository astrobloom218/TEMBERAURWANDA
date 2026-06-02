<template>
  <main class="media-page">
    <section class="hero">
      <span class="eyebrow">Rwandan culture gallery</span>
      <h1>Crystal-clear images of Rwanda's living culture.</h1>
      <p>
        Intore dance, umushanana dress, basket weaving, drums, ceremony, and heritage
        moments shown big, bright, and easy to see.
      </p>
    </section>

    <section class="culture-intro">
      <div>
        <span class="eyebrow">Imbyino gakondo</span>
        <h2>Culture is the hero of this gallery.</h2>
      </div>
      <p>
        The page now focuses on Rwandan cultural life instead of random travel shots:
        dancers, craft, traditional clothing, and performance details fill the screen.
      </p>
    </section>

    <section class="photo-grid">
      <article v-for="photo in photos" :key="photo.title">
        <img :src="photo.image" :alt="photo.title" loading="lazy" />
        <div>
          <span>{{ photo.place }}</span>
          <h2>{{ photo.title }}</h2>
          <p>{{ photo.text }}</p>
        </div>
      </article>
    </section>
  </main>
</template>

<script setup>
const commons = 'https://commons.wikimedia.org/wiki/Special:FilePath/'

const photos = [
  {
    place: 'Intore',
    title: 'Rwanda Intore dancers',
    text: 'A traditional performance style full of rhythm, pride, and precision.',
    image: `${commons}Rwanda%20IntoreDancers.jpg`,
  },
  {
    place: 'Imbyino',
    title: 'Traditional dance for Rwandan culture',
    text: 'Bright ceremonial dress and movement captured in high resolution.',
    image: `${commons}Traditional%20dance%20for%20Rwandan%20culture.jpg`,
  },
  {
    place: 'Guhamiriza',
    title: 'Men performing traditional dance',
    text: 'Powerful warrior-style dance posture, energy, and cultural expression.',
    image: `${commons}Rwandan%20men%20performing%20traditional%20dance%20called%20%27GUHAMIRIZA%27.jpg`,
  },
  {
    place: 'Amaraba',
    title: 'Rwandese women performing traditional dance',
    text: 'Elegant choreography, fabric, and movement from a Rwandan performance.',
    image: `${commons}Rwandese%20women%20performing%20a%20traditional%20dance%20called%20%22.jpg`,
  },
  {
    place: 'Agaseke',
    title: 'Basket weaving in Rwanda',
    text: 'A handmade craft tradition practiced with patience, skill, and beauty.',
    image: `${commons}BASKET%20WEAVING.jpg`,
  },
  {
    place: 'Basketry',
    title: 'Rwandan woven wall art',
    text: 'Patterns and forms that carry cultural memory into modern homes.',
    image: `${commons}Ornaments%20for%20the%20wall%20in%20Rwandan%20culture.jpg`,
  },
]
</script>

<style scoped>
.media-page {
  color: var(--ink);
}

.hero {
  min-height: 62vh;
  padding: 90px 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background:
    linear-gradient(90deg, rgba(5, 42, 28, 0.92), rgba(5, 42, 28, 0.28)),
    url('https://commons.wikimedia.org/wiki/Special:FilePath/Traditional%20dance%20for%20Rwandan%20culture.jpg') center/cover;
  color: #fff;
}

.eyebrow {
  color: var(--gold);
  font-weight: 900;
  text-transform: uppercase;
}

h1,
h2,
p {
  margin: 0;
}

h1 {
  max-width: 920px;
  margin-top: 14px;
  font-size: clamp(42px, 7vw, 82px);
  line-height: 1.02;
}

.hero p {
  max-width: 760px;
  margin-top: 22px;
  color: #edf5ee;
  font-size: 20px;
  line-height: 1.75;
}

.culture-intro {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 34px;
  align-items: end;
  padding: 75px 8% 0;
}

.culture-intro h2 {
  max-width: 760px;
  font-size: clamp(34px, 5vw, 58px);
  line-height: 1.05;
}

.culture-intro p {
  color: var(--muted);
  font-size: 18px;
  line-height: 1.8;
}

.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 26px;
  padding: 70px 8% 100px;
  perspective: 1100px;
}

article {
  position: relative;
  min-height: 560px;
  overflow: hidden;
  border-radius: 8px;
  background: #10251c;
  box-shadow: var(--shadow);
  transform-style: preserve-3d;
  transition: 0.35s ease;
}

article:first-child {
  grid-column: span 2;
}

article:hover {
  transform: translateY(-14px) rotateX(5deg) rotateY(-3deg);
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  image-rendering: auto;
  filter: saturate(1.12) contrast(1.04);
  transition: 0.45s ease;
}

article:hover img {
  transform: scale(1.06);
}

article::after {
  position: absolute;
  inset: 0;
  background: linear-gradient(transparent 35%, rgba(5, 42, 28, 0.92));
  content: "";
}

article div {
  position: absolute;
  left: 26px;
  right: 26px;
  bottom: 26px;
  z-index: 1;
  color: #fff;
}

article span {
  color: var(--gold);
  font-weight: 900;
}

article h2 {
  margin-top: 8px;
  font-size: clamp(28px, 4vw, 42px);
  line-height: 1.05;
}

article p {
  max-width: 620px;
  margin-top: 10px;
  color: #eef6ef;
  line-height: 1.65;
}

@media (max-width: 820px) {
  .culture-intro {
    grid-template-columns: 1fr;
  }

  article:first-child {
    grid-column: auto;
  }

  article {
    min-height: 460px;
  }
}
</style>
