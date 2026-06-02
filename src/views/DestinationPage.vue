<template>
  <main class="destination-page">
    <section class="hero" :style="{ backgroundImage: heroBackground }">
      <div class="hero-content">
        <span class="eyebrow">{{ destination.region }}</span>
        <h1>{{ destination.title }}</h1>
        <p>{{ destination.intro }}</p>
      </div>
    </section>

    <section class="overview">
      <div>
        <span class="eyebrow">Why go</span>
        <h2>{{ destination.promise }}</h2>
        <p>{{ destination.description }}</p>
      </div>
      <img :src="destination.featuredImage" :alt="destination.title" />
    </section>

    <section class="highlights">
      <div class="section-heading">
        <span class="eyebrow">Top experiences</span>
        <h2>Plan a page-worthy route through {{ destination.region }}.</h2>
      </div>

      <div class="highlight-grid">
        <article v-for="item in destination.highlights" :key="item.title">
          <img :src="item.image" :alt="item.title" />
          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </article>
      </div>
    </section>

    <section class="region-gallery">
      <div class="section-heading">
        <span class="eyebrow">Regional photo story</span>
        <h2>See the places, culture, and mood of {{ destination.region }}.</h2>
      </div>

      <div class="photo-wall">
        <article v-for="photo in destination.gallery" :key="photo.title">
          <img :src="photo.image" :alt="photo.title" loading="lazy" />
          <div>
            <span>{{ photo.label }}</span>
            <h3>{{ photo.title }}</h3>
          </div>
        </article>
      </div>
    </section>

    <section class="cta">
      <h2>Want this region in your itinerary?</h2>
      <RouterLink to="/contact">Request A Custom Trip</RouterLink>
    </section>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const commons = 'https://commons.wikimedia.org/wiki/Special:FilePath/'

const destinations = {
  northern: {
    region: 'Northern Province',
    title: 'Volcanoes, gorillas, twin lakes, and cool mountain air.',
    intro: 'Northern Rwanda is the dramatic adventure capital: gorilla trekking, volcanic peaks, Musanze culture, and unforgettable green views.',
    promise: 'The iconic Rwanda experience lives in the north.',
    description: 'Base yourself in Musanze for premium lodges, gorilla trekking access, golden monkey hikes, village visits, and scenic drives around Lake Burera and Lake Ruhondo.',
    heroImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3?auto=format&fit=crop&w=1800&q=85',
    featuredImage: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85',
    highlights: [
      {
        title: 'Volcanoes National Park',
        text: 'Track mountain gorillas, meet golden monkeys, and walk through bamboo forest with expert guides.',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3?auto=format&fit=crop&w=1200&q=85',
      },
      {
        title: 'Twin Lakes',
        text: 'Enjoy slow boat rides, scenic viewpoints, and peaceful lodge lunches by Burera and Ruhondo.',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85',
      },
      {
        title: 'Musanze Culture',
        text: 'Add traditional dance, local food, craft markets, and community tourism to your mountain stay.',
        image: `${commons}Rwanda%20IntoreDancers.jpg`,
      },
    ],
    gallery: [
      {
        label: 'Volcanoes',
        title: 'Mountain gorilla country',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3?auto=format&fit=crop&w=1200&q=85',
      },
      {
        label: 'Musanze',
        title: 'Green northern hills',
        image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85',
      },
      {
        label: 'Twin Lakes',
        title: 'Burera and Ruhondo scenery',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85',
      },
      {
        label: 'Culture',
        title: 'Intore performance energy',
        image: `${commons}Rwanda%20IntoreDancers.jpg`,
      },
    ],
  },
  southern: {
    region: 'Southern Province',
    title: 'Royal heritage, rainforest canopy, tea hills, and deep culture.',
    intro: 'Southern Rwanda blends history and nature through Nyanza, Huye, Nyungwe Forest, museums, palaces, and tea estates.',
    promise: 'The south is Rwanda at its most cultural and richly green.',
    description: 'Travel south for the King\'s Palace Museum, Ethnographic Museum, Nyungwe canopy walk, chimpanzee trekking, and tea landscapes that feel endless.',
    heroImage: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1800&q=85',
    featuredImage: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=85',
    highlights: [
      {
        title: 'Nyungwe Forest',
        text: 'Walk above the rainforest canopy, track chimpanzees, and explore one of Africa\'s oldest forests.',
        image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=85',
      },
      {
        title: 'Nyanza Royal Heritage',
        text: 'Visit royal history sites and learn how Rwanda\'s cultural identity was shaped.',
        image: `${commons}Traditional%20dance%20for%20Rwandan%20culture.jpg`,
      },
      {
        title: 'Tea Country',
        text: 'Drive through bright green estates, stop for tastings, and photograph quiet highland scenery.',
        image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=85',
      },
    ],
    gallery: [
      {
        label: 'Nyungwe',
        title: 'Rainforest canopy and mist',
        image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=85',
      },
      {
        label: 'Tea hills',
        title: 'Southern tea landscapes',
        image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=85',
      },
      {
        label: 'Heritage',
        title: 'Royal and museum culture',
        image: `${commons}Rwanda%20IntoreDancers.jpg`,
      },
      {
        label: 'Dance',
        title: 'Traditional Rwandan culture',
        image: `${commons}Traditional%20dance%20for%20Rwandan%20culture.jpg`,
      },
    ],
  },
  western: {
    region: 'Western Province',
    title: 'Lake Kivu, island sunsets, coffee routes, and beach-town calm.',
    intro: 'Western Rwanda is the country\'s soft landing: lakeside resorts, coffee experiences, boat rides, and beautiful roads between Rubavu, Karongi, and Rusizi.',
    promise: 'The west is where Rwanda slows down beautifully.',
    description: 'Use the western route for relaxation after trekking or safari. Lake Kivu brings swimming, kayaking, islands, coffee washing stations, and sunset dining.',
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=85',
    featuredImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
    highlights: [
      {
        title: 'Rubavu Beaches',
        text: 'Stay by the lake, enjoy waterfront restaurants, and take easy boat trips near the border city.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
      },
      {
        title: 'Karongi Islands',
        text: 'Cruise to small islands, watch sunset over the water, and enjoy calm boutique stays.',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85',
      },
      {
        title: 'Coffee Experiences',
        text: 'Visit washing stations and taste Rwandan coffee close to the farms that produce it.',
        image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1200&q=85',
      },
    ],
    gallery: [
      {
        label: 'Lake Kivu',
        title: 'Clear western shoreline',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85',
      },
      {
        label: 'Rubavu',
        title: 'Beach-town calm',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
      },
      {
        label: 'Coffee',
        title: 'Coffee routes and farms',
        image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1200&q=85',
      },
      {
        label: 'Craft',
        title: 'Rwandan basket weaving',
        image: `${commons}BASKET%20WEAVING.jpg`,
      },
    ],
  },
  eastern: {
    region: 'Eastern Province',
    title: 'Akagera safari plains, lakes, wildlife, and golden horizons.',
    intro: 'Eastern Rwanda is safari country, centered around Akagera National Park, big wildlife, lake systems, and open savannah views.',
    promise: 'The east brings the safari energy.',
    description: 'Plan game drives, boat safaris, lodge stays, birding, and warm sunrise routes through one of Rwanda\'s most exciting conservation landscapes.',
    heroImage: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1800&q=85',
    featuredImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=85',
    highlights: [
      {
        title: 'Akagera Game Drives',
        text: 'Look for lions, elephants, giraffes, zebras, antelope, buffalo, and wide-open landscapes.',
        image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=85',
      },
      {
        title: 'Lake Ihema Boat Safari',
        text: 'See hippos, crocodiles, water birds, and park scenery from the water.',
        image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=85',
      },
      {
        title: 'Safari Lodges',
        text: 'Pair early drives with comfortable lodges, sundowners, and peaceful nights near the park.',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85',
      },
    ],
    gallery: [
      {
        label: 'Akagera',
        title: 'Safari plains and wildlife',
        image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=85',
      },
      {
        label: 'Lake Ihema',
        title: 'Boat safari atmosphere',
        image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=85',
      },
      {
        label: 'Savannah',
        title: 'Golden eastern horizons',
        image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=1200&q=85',
      },
      {
        label: 'Tradition',
        title: 'Guhamiriza cultural strength',
        image: `${commons}Rwandan%20men%20performing%20traditional%20dance%20called%20%27GUHAMIRIZA%27.jpg`,
      },
    ],
  },
}

const destination = computed(() => destinations[route.params.region] || destinations.northern)
const heroBackground = computed(() => `linear-gradient(90deg, rgba(5, 42, 28, 0.9), rgba(5, 42, 28, 0.34)), url('${destination.value.heroImage}')`)
</script>

<style scoped>
.destination-page {
  background: #f5f8f3;
  color: #143528;
  font-family: Arial, sans-serif;
}

.hero {
  min-height: 78vh;
  display: flex;
  align-items: center;
  padding: 90px 8%;
  background-position: center;
  background-size: cover;
}

.hero-content {
  max-width: 900px;
  color: #fff;
}

.eyebrow {
  display: inline-flex;
  margin-bottom: 14px;
  color: #d8a521;
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
  font-size: clamp(42px, 7vw, 78px);
  line-height: 1.03;
}

.hero p,
.overview p {
  max-width: 760px;
  margin-top: 24px;
  color: #edf5ee;
  font-size: 21px;
  line-height: 1.7;
}

.overview,
.highlights,
.region-gallery {
  padding: 90px 8%;
}

.overview {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 42px;
  align-items: center;
}

.overview h2,
.section-heading h2,
.cta h2 {
  font-size: clamp(32px, 5vw, 56px);
  line-height: 1.08;
}

.overview p {
  color: #586a61;
}

.overview img {
  width: 100%;
  min-height: 420px;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 18px 50px rgba(22, 58, 40, 0.14);
}

.section-heading {
  max-width: 760px;
  margin-bottom: 42px;
}

.highlight-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.highlight-grid article {
  overflow: hidden;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 18px 50px rgba(22, 58, 40, 0.12);
}

.highlight-grid img {
  width: 100%;
  height: 245px;
  object-fit: cover;
}

.highlight-grid div {
  padding: 25px;
}

.highlight-grid h3 {
  color: #0e5938;
  font-size: 24px;
}

.highlight-grid p {
  margin-top: 12px;
  color: #586a61;
  line-height: 1.75;
}

.region-gallery {
  background:
    radial-gradient(circle at 10% 10%, rgba(216, 165, 33, 0.14), transparent 22rem),
    #fff;
}

.photo-wall {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
  perspective: 1200px;
}

.photo-wall article {
  position: relative;
  min-height: 470px;
  overflow: hidden;
  border-radius: 8px;
  background: #0b3f2b;
  box-shadow: 0 18px 50px rgba(22, 58, 40, 0.14);
  transform-style: preserve-3d;
  transition: 0.35s ease;
}

.photo-wall article:first-child {
  grid-column: span 2;
}

.photo-wall article:hover {
  transform: translateY(-12px) rotateX(5deg) rotateY(-3deg);
}

.photo-wall img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(1.12) contrast(1.04);
  transition: 0.45s ease;
}

.photo-wall article:hover img {
  transform: scale(1.07);
}

.photo-wall article::after {
  position: absolute;
  inset: 0;
  background: linear-gradient(transparent 42%, rgba(5, 42, 28, 0.92));
  content: "";
}

.photo-wall div {
  position: absolute;
  left: 22px;
  right: 22px;
  bottom: 22px;
  z-index: 1;
  color: #fff;
}

.photo-wall span {
  color: #d8a521;
  font-weight: 900;
  text-transform: uppercase;
}

.photo-wall h3 {
  margin-top: 8px;
  font-size: clamp(24px, 3vw, 34px);
  line-height: 1.08;
}

.cta {
  padding: 80px 8%;
  text-align: center;
  background: #0b3f2b;
  color: #fff;
}

.cta a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  margin-top: 24px;
  padding: 0 24px;
  border-radius: 6px;
  background: #d8a521;
  color: #10251c;
  font-weight: 900;
  text-decoration: none;
}

@media (max-width: 860px) {
  .overview {
    grid-template-columns: 1fr;
  }

  .photo-wall {
    grid-template-columns: 1fr;
  }

  .photo-wall article:first-child {
    grid-column: auto;
  }

  .photo-wall article {
    min-height: 420px;
  }
}
</style>
