<template>
  <main class="videos-page">
    <section class="hero">
      <span class="eyebrow">Rwandan culture videos</span>
      <h1>Clear, playable videos of Rwandan traditional dance.</h1>
      <p>
        Real cultural video clips are now embedded directly on the page with large controls,
        sharp posters, and visible captions.
      </p>
    </section>

    <section class="video-grid">
      <article v-for="video in videos" :key="video.title">
        <div class="video-frame">
          <video controls preload="metadata" :poster="video.poster">
            <source :src="video.src" type="video/webm" />
            Your browser does not support HTML video.
          </video>
        </div>
        <div class="video-copy">
          <span>{{ video.label }}</span>
          <h2>{{ video.title }}</h2>
          <p>{{ video.text }}</p>
        </div>
      </article>
    </section>
  </main>
</template>

<script setup>
const commons = 'https://commons.wikimedia.org/wiki/Special:FilePath/'

const videos = [
  {
    label: 'Traditional dance',
    title: 'Amaraba dance in Rwanda',
    text: 'A real Rwandan traditional dance video with visible movement, dress, and rhythm.',
    src: `${commons}Traditional%20dance.webm`,
    poster: `${commons}Traditional%20dance%20for%20Rwandan%20culture.jpg`,
  },
  {
    label: 'Nkombo culture',
    title: 'Abasamyi dancers from Rusizi',
    text: 'A clear 1080p clip of traditional Rwandan people from Nkombo dancing in celebration.',
    src: `${commons}Traditional%20Rwandan%20People%20called%20Abasamyi%20dancing.webm`,
    poster: `${commons}Traditional%20dance%20for%20Rwandan%20culture.jpg`,
  },
  {
    label: 'Kinyarwanda dance',
    title: 'Men performing Kinyarwanda dance',
    text: 'A vertical cultural performance clip showing Rwandan movement and heritage.',
    src: `${commons}Kinyarwanda%20Dance.webm`,
    poster: `${commons}Rwandan%20men%20performing%20traditional%20dance%20called%20%27GUHAMIRIZA%27.jpg`,
  },
]
</script>

<style scoped>
.videos-page {
  color: var(--ink);
}

.hero {
  min-height: 62vh;
  padding: 90px 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background:
    linear-gradient(90deg, rgba(5, 42, 28, 0.92), rgba(5, 42, 28, 0.24)),
    url('https://commons.wikimedia.org/wiki/Special:FilePath/Rwanda%20IntoreDancers.jpg') center/cover;
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
  max-width: 900px;
  margin-top: 14px;
  font-size: clamp(42px, 7vw, 82px);
  line-height: 1.02;
}

.hero p {
  max-width: 740px;
  margin-top: 22px;
  color: #edf5ee;
  font-size: 20px;
  line-height: 1.75;
}

.video-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 34px;
  padding: 90px 8% 105px;
}

article {
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(280px, 0.75fr);
  gap: 0;
  overflow: hidden;
  border-radius: 8px;
  background: #fff;
  box-shadow: var(--shadow);
  transform-style: preserve-3d;
  transition: 0.35s ease;
}

article:hover {
  transform: translateY(-12px) rotateX(3deg);
}

.video-frame {
  position: relative;
  min-height: 470px;
  background:
    linear-gradient(135deg, rgba(5, 42, 28, 0.85), rgba(13, 107, 67, 0.5)),
    #0b2419;
}

video {
  width: 100%;
  height: 100%;
  min-height: 470px;
  display: block;
  object-fit: contain;
  background: #061911;
}

.video-copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: clamp(28px, 5vw, 46px);
  background:
    radial-gradient(circle at 90% 10%, rgba(216, 165, 33, 0.16), transparent 18rem),
    #fff;
}

span {
  color: #b18417;
  font-weight: 900;
  text-transform: uppercase;
}

h2 {
  margin-top: 12px;
  color: var(--leaf);
  font-size: clamp(30px, 4vw, 48px);
  line-height: 1.05;
}

p {
  margin-top: 16px;
  color: var(--muted);
  font-size: 18px;
  line-height: 1.75;
}

@media (max-width: 920px) {
  article {
    grid-template-columns: 1fr;
  }

  .video-frame,
  video {
    min-height: 360px;
  }
}
</style>
