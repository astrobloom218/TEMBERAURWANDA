<template>
  <main class="about-page">
    <section class="hero">
      <div class="hero-content">
        <span class="eyebrow">About Tourism Rwanda</span>
        <h1>We make Rwanda feel cinematic, personal, and effortless.</h1>
        <p>
          Our work is simple: turn Rwanda's nature, culture, wildlife, and hospitality
          into premium journeys travelers remember for life.
        </p>
      </div>
    </section>

    <section class="story">
      <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Rwanda%20IntoreDancers.jpg" alt="Rwandan cultural experience" />
      <div>
        <span class="eyebrow">Our story</span>
        <h2>Local knowledge meets luxury travel planning.</h2>
        <p>
          Rwanda is compact, clean, beautiful, and full of contrasts: gorilla mountains,
          rainforest, safari plains, coffee hills, lakeside towns, and a capital city with
          a calm modern rhythm.
        </p>
        <p>
          We connect those places with smart timing, trusted guides, smooth transport,
          and stays that match the experience you want.
        </p>
      </div>
    </section>

    <section class="values">
      <article v-for="value in values" :key="value.title">
        <strong>{{ value.number }}</strong>
        <h3>{{ value.title }}</h3>
        <p>{{ value.text }}</p>
      </article>
    </section>

    <section class="gallery-strip">
      <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3?auto=format&fit=crop&w=900&q=85" alt="Rwanda gorilla trekking" />
      <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=85" alt="Lake Kivu Rwanda" />
      <img src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=900&q=85" alt="Akagera safari Rwanda" />
    </section>
  </main>
</template>

<script setup>
const values = [
  {
    number: '01',
    title: 'Respectful Tourism',
    text: 'Experiences are designed to honor communities, culture, parks, and natural spaces.',
  },
  {
    number: '02',
    title: 'Premium Comfort',
    text: 'Travel days are planned with good pacing, clean vehicles, quality stays, and clear support.',
  },
  {
    number: '03',
    title: 'Real Rwanda',
    text: 'We balance famous highlights with local routes, food, heritage, and quiet scenic places.',
  },
]
</script>

<style scoped>
.about-page {
  overflow: hidden;
  color: var(--ink);
}

.hero {
  min-height: 78vh;
  display: flex;
  align-items: center;
  padding: 90px 8%;
  background:
    linear-gradient(90deg, rgba(5, 42, 28, 0.9), rgba(5, 42, 28, 0.28)),
    url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=85') center/cover;
}

.hero-content {
  max-width: 920px;
  color: #fff;
  animation: riseIn 0.8s ease both;
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
  font-size: clamp(44px, 7vw, 82px);
  line-height: 1.02;
}

.hero p,
.story p,
.values p {
  line-height: 1.75;
}

.hero p {
  max-width: 760px;
  margin-top: 24px;
  color: #edf5ee;
  font-size: 21px;
}

.story {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 48px;
  align-items: center;
  padding: 95px 8%;
}

.story img {
  width: 100%;
  min-height: 520px;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: var(--shadow);
  animation: float3d 8s ease-in-out infinite;
}

.story h2 {
  font-size: clamp(34px, 5vw, 60px);
  line-height: 1.05;
}

.story p {
  margin-top: 18px;
  color: var(--muted);
  font-size: 18px;
}

.values {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  padding: 0 8% 95px;
}

.values article {
  min-height: 260px;
  padding: 30px;
  border-radius: 8px;
  background: #fff;
  box-shadow: var(--shadow);
  transform-style: preserve-3d;
  transition: 0.3s ease;
}

.values article:hover {
  transform: translateY(-12px) rotateX(5deg);
}

.values strong {
  color: var(--gold);
  font-size: 36px;
}

.values h3 {
  margin: 12px 0;
  color: var(--leaf);
  font-size: 26px;
}

.values p {
  color: var(--muted);
}

.gallery-strip {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
}

.gallery-strip img {
  width: 100%;
  height: 520px;
  object-fit: cover;
  filter: saturate(1.08);
}

@media (max-width: 860px) {
  .story,
  .values,
  .gallery-strip {
    grid-template-columns: 1fr;
  }
}
</style>
