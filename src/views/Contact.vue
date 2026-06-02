<template>
  <main class="contact-page">
    <section class="hero">
      <div class="hero-content">
        <span class="eyebrow">Contact our travel desk</span>
        <h1>Let us build your Rwanda trip with elite-level care.</h1>
        <p>
          Share your dates, interests, and pace. We will help with permits, hotels,
          private transport, guides, and a clean itinerary across Rwanda.
        </p>
      </div>
    </section>

    <section class="contact-layout">
      <div class="contact-panel">
        <span class="eyebrow">Start here</span>
        <h2>Send a trip request</h2>

        <form @submit.prevent>
          <label>
            Full name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Email address
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            Travel interest
            <select>
              <option>Gorilla trekking</option>
              <option>Akagera safari</option>
              <option>Lake Kivu retreat</option>
              <option>Full Rwanda itinerary</option>
            </select>
          </label>
          <label>
            Message
            <textarea rows="6" placeholder="Tell us your dates, group size, and dream trip."></textarea>
          </label>
          <button type="submit">Send Message</button>
        </form>
      </div>

      <aside class="details-panel">
        <img src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=1200&q=85" alt="Kigali Rwanda travel view" />
        <div class="detail-grid">
          <article v-for="item in details" :key="item.title">
            <span>{{ item.label }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </aside>
    </section>

    <section class="map-section">
      <div>
        <span class="eyebrow">Find us</span>
        <h2>Kigali is the starting point for unforgettable Rwanda routes.</h2>
      </div>
      <iframe
        title="Kigali Rwanda map"
        src="https://www.google.com/maps?q=Kigali,Rwanda&output=embed"
        loading="lazy"
        allowfullscreen
      ></iframe>
    </section>
  </main>
</template>

<script setup>
const details = [
  {
    label: 'Location',
    title: 'Kigali, Rwanda',
    text: 'Airport pickup, city experiences, and private trips across all provinces.',
  },
  {
    label: 'Phone',
    title: '+250 788 823 626',
    text: 'Call or message us for quick support with bookings and travel timing.',
  },
  {
    label: 'Email',
    title: 'info@temberurwanda.com',
    text: 'Send your request and we will respond with clear next steps.',
  },
  {
    label: 'Hours',
    title: 'Daily, 8:00 AM - 8:00 PM',
    text: 'Travel support is available every day for visitors already in Rwanda.',
  },
]
</script>

<style scoped>
.contact-page {
  background: #f5f8f3;
  color: #143528;
  font-family: Arial, sans-serif;
}

.hero {
  min-height: 72vh;
  display: flex;
  align-items: center;
  padding: 90px 8%;
  background:
    linear-gradient(90deg, rgba(5, 42, 28, 0.9), rgba(5, 42, 28, 0.36)),
    url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=85') center/cover;
}

.hero-content {
  max-width: 850px;
  color: #fff;
}

.eyebrow {
  display: inline-flex;
  margin-bottom: 14px;
  color: #d8a521;
  font-weight: 800;
  text-transform: uppercase;
}

h1,
h2,
h3,
p {
  margin: 0;
}

.hero h1 {
  font-size: clamp(42px, 7vw, 78px);
  line-height: 1.03;
}

.hero p {
  max-width: 760px;
  margin-top: 24px;
  color: #edf5ee;
  font-size: 21px;
  line-height: 1.7;
}

.contact-layout {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 36px;
  padding: 90px 8%;
}

.contact-panel,
.details-panel article {
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 18px 50px rgba(22, 58, 40, 0.12);
}

.contact-panel {
  padding: 34px;
}

.contact-panel h2,
.map-section h2 {
  font-size: clamp(32px, 5vw, 52px);
  line-height: 1.08;
}

form {
  display: grid;
  gap: 18px;
  margin-top: 28px;
}

label {
  display: grid;
  gap: 8px;
  color: #244a3b;
  font-weight: 800;
}

input,
select,
textarea {
  width: 100%;
  border: 1px solid #dbe6df;
  border-radius: 6px;
  background: #f9fbf8;
  color: #143528;
  font: inherit;
  padding: 15px 14px;
  outline: none;
}

input:focus,
select:focus,
textarea:focus {
  border-color: #d8a521;
  box-shadow: 0 0 0 3px rgba(216, 165, 33, 0.2);
}

button {
  min-height: 52px;
  border: 0;
  border-radius: 6px;
  background: #d8a521;
  color: #10251c;
  cursor: pointer;
  font: inherit;
  font-weight: 900;
}

.details-panel {
  display: grid;
  gap: 18px;
}

.details-panel img {
  width: 100%;
  min-height: 300px;
  max-height: 420px;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 18px 50px rgba(22, 58, 40, 0.16);
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.details-panel article {
  padding: 24px;
}

.details-panel span {
  color: #b18417;
  font-weight: 900;
}

.details-panel h3 {
  margin: 8px 0 10px;
  color: #0e5938;
  font-size: 22px;
}

.details-panel p {
  color: #586a61;
  line-height: 1.7;
}

.map-section {
  display: grid;
  grid-template-columns: minmax(0, 0.75fr) minmax(0, 1.25fr);
  gap: 34px;
  align-items: center;
  padding: 80px 8% 100px;
  background: #fff;
}

iframe {
  width: 100%;
  min-height: 440px;
  border: 0;
  border-radius: 8px;
  box-shadow: 0 18px 50px rgba(22, 58, 40, 0.12);
}

@media (max-width: 900px) {
  .contact-layout,
  .map-section {
    grid-template-columns: 1fr;
  }

  .detail-grid {
    grid-template-columns: 1fr;
  }
}
</style>
