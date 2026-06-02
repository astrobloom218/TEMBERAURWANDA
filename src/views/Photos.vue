<template>
  <main class="media-page">
    <section class="hero">
      <span class="eyebrow">Photo gallery</span>
      <h1>Actual Rwanda moments, built into a bold visual gallery.</h1>
      <p>Volcanoes, Akagera, Nyungwe, Lake Kivu, Kigali, culture, wildlife, and landscapes.</p>
    </section>

    <section class="photo-grid">
      <article v-for="photo in photos" :key="photo.title">
        <img :src="photo.image" :alt="photo.title" />
        <div>
          <span>{{ photo.place }}</span>
          <h2>{{ photo.title }}</h2>
        </div>
      </article>
    </section>
  </main>
</template>

<script setup>
const photos = [
  { place: 'Northern', title: 'Volcanoes National Park', image: 'https://source.unsplash.com/900x1100/?rwanda,volcanoes,gorilla' },
  { place: 'Western', title: 'Lake Kivu Coast', image: 'https://source.unsplash.com/900x1100/?rwanda,lake,kivu' },
  { place: 'Eastern', title: 'Akagera Safari', image: 'https://source.unsplash.com/900x1100/?akagera,safari,rwanda' },
  { place: 'Southern', title: 'Nyungwe Rainforest', image: 'https://source.unsplash.com/900x1100/?nyungwe,rainforest,rwanda' },
  { place: 'Kigali', title: 'Clean City Views', image: 'https://source.unsplash.com/900x1100/?kigali,rwanda,city' },
  { place: 'Culture', title: 'Rwandan Heritage', image: 'https://source.unsplash.com/900x1100/?rwanda,culture,dance' },
]
</script>

<style scoped>
.media-page {
  color: var(--ink);
}

.hero {
  min-height: 56vh;
  padding: 90px 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background:
    linear-gradient(90deg, rgba(5, 42, 28, 0.9), rgba(5, 42, 28, 0.3)),
    url('https://source.unsplash.com/1800x1000/?rwanda,tourism') center/cover;
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
  max-width: 880px;
  margin-top: 14px;
  font-size: clamp(42px, 7vw, 78px);
  line-height: 1.03;
}

.hero p {
  max-width: 720px;
  margin-top: 22px;
  color: #edf5ee;
  font-size: 20px;
  line-height: 1.7;
}

.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  padding: 90px 8%;
  perspective: 1100px;
}

article {
  position: relative;
  min-height: 430px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: var(--shadow);
  transform-style: preserve-3d;
  transition: 0.35s ease;
}

article:hover {
  transform: translateY(-14px) rotateX(6deg) rotateY(-4deg);
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.45s ease;
}

article:hover img {
  transform: scale(1.1);
}

article::after {
  position: absolute;
  inset: 0;
  background: linear-gradient(transparent 35%, rgba(5, 42, 28, 0.88));
  content: "";
}

article div {
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 24px;
  z-index: 1;
  color: #fff;
}

article span {
  color: var(--gold);
  font-weight: 900;
}

h2 {
  margin-top: 8px;
  font-size: 27px;
}
</style>
