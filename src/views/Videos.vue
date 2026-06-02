<template>
  <main class="videos-page">
    <section class="hero">
      <span class="eyebrow">Video stories</span>
      <h1>Rwanda routes that feel ready for film.</h1>
      <p>Use these feature panels as video destinations for campaigns, tour reels, and travel stories.</p>
    </section>

    <section class="video-grid">
      <article v-for="video in videos" :key="video.title">
        <img :src="video.image" :alt="video.title" />
        <button type="button" aria-label="Play video">Play</button>
        <div>
          <span>{{ video.length }}</span>
          <h2>{{ video.title }}</h2>
          <p>{{ video.text }}</p>
        </div>
      </article>
    </section>
  </main>
</template>

<script setup>
const videos = [
  {
    title: 'Gorilla Trekking Morning',
    text: 'A cinematic route through Musanze, misty hills, and Volcanoes National Park.',
    length: '02:45',
    image: 'https://source.unsplash.com/1000x700/?rwanda,gorilla,forest',
  },
  {
    title: 'Akagera Safari Drive',
    text: 'Wide savannah, lake wildlife, and golden game-drive light in the east.',
    length: '03:20',
    image: 'https://source.unsplash.com/1000x700/?akagera,safari,wildlife',
  },
  {
    title: 'Lake Kivu Weekend',
    text: 'Waterfront relaxation, islands, coffee routes, and calm western sunsets.',
    length: '02:10',
    image: 'https://source.unsplash.com/1000x700/?lake,kivu,rwanda,sunset',
  },
]
</script>

<style scoped>
.videos-page {
  color: var(--ink);
}

.hero {
  min-height: 56vh;
  padding: 90px 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background:
    linear-gradient(90deg, rgba(5, 42, 28, 0.9), rgba(5, 42, 28, 0.28)),
    url('https://source.unsplash.com/1800x1000/?rwanda,travel,video') center/cover;
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
  max-width: 850px;
  margin-top: 14px;
  font-size: clamp(42px, 7vw, 78px);
  line-height: 1.03;
}

.hero p {
  max-width: 680px;
  margin-top: 22px;
  color: #edf5ee;
  font-size: 20px;
  line-height: 1.7;
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: 24px;
  padding: 90px 8%;
}

article {
  position: relative;
  overflow: hidden;
  min-height: 520px;
  border-radius: 8px;
  background: #fff;
  box-shadow: var(--shadow);
  transition: 0.35s ease;
}

article:hover {
  transform: translateY(-14px) rotateX(4deg);
}

img {
  width: 100%;
  height: 310px;
  object-fit: cover;
}

button {
  position: absolute;
  top: 240px;
  left: 24px;
  min-height: 56px;
  padding: 0 24px;
  border: 0;
  border-radius: 6px;
  background: var(--gold);
  color: var(--forest);
  cursor: pointer;
  font-weight: 900;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.28);
}

article div {
  padding: 38px 26px 26px;
}

span {
  color: #b18417;
  font-weight: 900;
}

h2 {
  margin-top: 8px;
  color: var(--leaf);
  font-size: 28px;
}

p {
  margin-top: 12px;
  color: var(--muted);
  line-height: 1.7;
}
</style>
