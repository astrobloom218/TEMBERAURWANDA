<template>
  <main class="services-page">
    <section class="hero">
      <div class="hero-content">
        <span class="eyebrow">Premium Rwanda travel design</span>
        <h1>Elite Tourism Services For Every Rwanda Journey</h1>
        <p>
          Private guides, safari planning, gorilla trekking, luxury stays, lake escapes,
          cultural visits, and smooth transport handled with care from arrival to departure.
        </p>
        <RouterLink to="/contact" class="primary-link">Plan My Trip</RouterLink>
      </div>
    </section>

    <section class="section">
      <div class="section-heading">
        <span class="eyebrow">What we arrange</span>
        <h2>Travel services built for comfort, safety, and wonder</h2>
      </div>

      <div class="service-grid">
        <article v-for="service in services" :key="service.title" class="service-card">
          <img :src="service.image" :alt="service.title" />
          <div>
            <span>{{ service.kicker }}</span>
            <h3>{{ service.title }}</h3>
            <p>{{ service.text }}</p>
          </div>
        </article>
      </div>
    </section>

    <section class="feature-band">
      <div>
        <span class="eyebrow">Signature packages</span>
        <h2>From the volcanoes to Lake Kivu, the route feels effortless.</h2>
      </div>
      <div class="package-list">
        <article v-for="item in packages" :key="item.title">
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </section>

    <section class="section">
      <div class="section-heading">
        <span class="eyebrow">Why travelers choose us</span>
        <h2>Peak-level planning with real local knowledge</h2>
      </div>

      <div class="why-grid">
        <article v-for="reason in reasons" :key="reason.title">
          <strong>{{ reason.number }}</strong>
          <h3>{{ reason.title }}</h3>
          <p>{{ reason.text }}</p>
        </article>
      </div>
    </section>

    <section class="cta">
      <h2>Ready for a Rwanda itinerary that feels first class?</h2>
      <p>Tell us your travel dates, group size, and dream experiences. We will shape the journey.</p>
      <RouterLink to="/contact" class="primary-link">Start Booking</RouterLink>
    </section>
  </main>
</template>

<script setup>
const services = [
  {
    kicker: 'Wildlife',
    title: 'Gorilla Trekking Permits',
    text: 'Guided Volcanoes National Park planning, permit support, lodge pairing, and clear trek-day preparation.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3?auto=format&fit=crop&w=1200&q=85',
  },
  {
    kicker: 'Safari',
    title: 'Akagera Game Drives',
    text: 'Private safari vehicles, expert guides, boat safaris, and sunrise-to-sunset wildlife routes.',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=85',
  },
  {
    kicker: 'Hotels',
    title: 'Luxury Lodge Booking',
    text: 'Hand-picked resorts and boutique stays in Kigali, Musanze, Nyungwe, Akagera, and Lake Kivu.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85',
  },
  {
    kicker: 'Transport',
    title: 'Private Driver Service',
    text: 'Clean vehicles, airport pickup, inter-province transfers, and patient drivers who know the country.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85',
  },
  {
    kicker: 'Culture',
    title: 'Heritage Experiences',
    text: 'Museum visits, traditional dance, craft villages, food experiences, and respectful community tourism.',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rwanda%20IntoreDancers.jpg',
  },
  {
    kicker: 'Nature',
    title: 'Lake And Forest Retreats',
    text: 'Lake Kivu relaxation, Nyungwe canopy walks, tea routes, kayaking, and slow scenic travel.',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=85',
  },
]

const packages = [
  {
    title: '3-Day Kigali And Akagera',
    text: 'City highlights, Genocide Memorial visit, lakeside safari lodge, game drive, and boat safari.',
  },
  {
    title: '5-Day Gorilla And Culture',
    text: 'Musanze base, gorilla trekking, twin lakes, cultural village, and premium private transfers.',
  },
  {
    title: '7-Day Rwanda Grand Route',
    text: 'Kigali, Volcanoes, Lake Kivu, Nyungwe, tea landscapes, and a refined southern return.',
  },
]

const reasons = [
  {
    number: '01',
    title: 'Local Experts',
    text: 'Routes are planned by people who understand Rwanda beyond the brochure.',
  },
  {
    number: '02',
    title: 'Premium Details',
    text: 'The small things are handled: timing, comfort stops, permits, and hotel coordination.',
  },
  {
    number: '03',
    title: 'Flexible Travel',
    text: 'Private trips can move at your pace, from family friendly to luxury adventure.',
  },
  {
    number: '04',
    title: 'Clear Support',
    text: 'You get direct communication before and during the journey.',
  },
]
</script>

<style scoped>
.services-page {
  background: #f6f8f3;
  color: #143528;
  font-family: Arial, sans-serif;
}

.hero {
  min-height: 82vh;
  display: flex;
  align-items: center;
  padding: 90px 8%;
  background:
    linear-gradient(90deg, rgba(5, 42, 28, 0.88), rgba(5, 42, 28, 0.42)),
    url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3?auto=format&fit=crop&w=1800&q=85') center/cover;
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
  letter-spacing: 0;
  text-transform: uppercase;
}

h1,
h2,
h3,
p {
  margin: 0;
}

.hero h1 {
  max-width: 900px;
  font-size: clamp(42px, 7vw, 82px);
  line-height: 1.03;
}

.hero p {
  max-width: 760px;
  margin: 24px 0 32px;
  color: #edf5ee;
  font-size: 21px;
  line-height: 1.7;
}

.primary-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 24px;
  border-radius: 6px;
  background: #d8a521;
  color: #10251c;
  font-weight: 800;
  text-decoration: none;
}

.section {
  padding: 90px 8%;
}

.section-heading {
  max-width: 760px;
  margin-bottom: 42px;
}

.section-heading h2,
.feature-band h2,
.cta h2 {
  font-size: clamp(32px, 5vw, 56px);
  line-height: 1.08;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.service-card {
  overflow: hidden;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 18px 50px rgba(22, 58, 40, 0.12);
}

.service-card img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}

.service-card div {
  padding: 26px;
}

.service-card span {
  color: #b18417;
  font-weight: 800;
}

.service-card h3,
.why-grid h3,
.package-list h3 {
  margin: 8px 0 12px;
  color: #0e5938;
  font-size: 24px;
}

.service-card p,
.why-grid p,
.package-list p,
.cta p {
  color: #586a61;
  line-height: 1.75;
}

.feature-band {
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  gap: 42px;
  padding: 90px 8%;
  background: #0b3f2b;
  color: #fff;
}

.package-list {
  display: grid;
  gap: 16px;
}

.package-list article {
  padding: 24px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.07);
}

.package-list h3,
.package-list p {
  color: #fff;
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.why-grid article {
  padding: 28px;
  border-left: 5px solid #d8a521;
  border-radius: 8px;
  background: #fff;
}

.why-grid strong {
  color: #d8a521;
  font-size: 28px;
}

.cta {
  padding: 92px 8%;
  text-align: center;
  background:
    linear-gradient(rgba(5, 42, 28, 0.82), rgba(5, 42, 28, 0.82)),
    url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=85') center/cover;
  color: #fff;
}

.cta p {
  max-width: 700px;
  margin: 18px auto 28px;
  color: #edf5ee;
  font-size: 18px;
}

@media (max-width: 820px) {
  .feature-band {
    grid-template-columns: 1fr;
  }
}
</style>
