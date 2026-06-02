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

const destinations = {
  northern: {
    region: 'Northern Province',
    title: 'Volcanoes, gorillas, twin lakes, and cool mountain air.',
    intro: 'Northern Rwanda is the dramatic adventure capital: gorilla trekking, volcanic peaks, Musanze culture, and unforgettable green views.',
    promise: 'The iconic Rwanda experience lives in the north.',
    description: 'Base yourself in Musanze for premium lodges, gorilla trekking access, golden monkey hikes, village visits, and scenic drives around Lake Burera and Lake Ruhondo.',
    heroImage: 'https://source.unsplash.com/1800x1100/?rwanda,volcanoes,gorilla',
    featuredImage: 'https://source.unsplash.com/1100x850/?rwanda,musanze,mountains',
    highlights: [
      {
        title: 'Volcanoes National Park',
        text: 'Track mountain gorillas, meet golden monkeys, and walk through bamboo forest with expert guides.',
        image: 'https://source.unsplash.com/900x650/?gorilla,volcanoes,rwanda',
      },
      {
        title: 'Twin Lakes',
        text: 'Enjoy slow boat rides, scenic viewpoints, and peaceful lodge lunches by Burera and Ruhondo.',
        image: 'https://source.unsplash.com/900x650/?rwanda,twin,lakes',
      },
      {
        title: 'Musanze Culture',
        text: 'Add traditional dance, local food, craft markets, and community tourism to your mountain stay.',
        image: 'https://source.unsplash.com/900x650/?rwanda,culture,village',
      },
    ],
  },
  southern: {
    region: 'Southern Province',
    title: 'Royal heritage, rainforest canopy, tea hills, and deep culture.',
    intro: 'Southern Rwanda blends history and nature through Nyanza, Huye, Nyungwe Forest, museums, palaces, and tea estates.',
    promise: 'The south is Rwanda at its most cultural and richly green.',
    description: 'Travel south for the King\'s Palace Museum, Ethnographic Museum, Nyungwe canopy walk, chimpanzee trekking, and tea landscapes that feel endless.',
    heroImage: 'https://source.unsplash.com/1800x1100/?rwanda,nyungwe,forest',
    featuredImage: 'https://source.unsplash.com/1100x850/?rwanda,tea,plantation',
    highlights: [
      {
        title: 'Nyungwe Forest',
        text: 'Walk above the rainforest canopy, track chimpanzees, and explore one of Africa\'s oldest forests.',
        image: 'https://source.unsplash.com/900x650/?nyungwe,rainforest,rwanda',
      },
      {
        title: 'Nyanza Royal Heritage',
        text: 'Visit royal history sites and learn how Rwanda\'s cultural identity was shaped.',
        image: 'https://source.unsplash.com/900x650/?rwanda,heritage,museum',
      },
      {
        title: 'Tea Country',
        text: 'Drive through bright green estates, stop for tastings, and photograph quiet highland scenery.',
        image: 'https://source.unsplash.com/900x650/?rwanda,tea,hills',
      },
    ],
  },
  western: {
    region: 'Western Province',
    title: 'Lake Kivu, island sunsets, coffee routes, and beach-town calm.',
    intro: 'Western Rwanda is the country\'s soft landing: lakeside resorts, coffee experiences, boat rides, and beautiful roads between Rubavu, Karongi, and Rusizi.',
    promise: 'The west is where Rwanda slows down beautifully.',
    description: 'Use the western route for relaxation after trekking or safari. Lake Kivu brings swimming, kayaking, islands, coffee washing stations, and sunset dining.',
    heroImage: 'https://source.unsplash.com/1800x1100/?rwanda,lake,kivu',
    featuredImage: 'https://source.unsplash.com/1100x850/?lake,kivu,rwanda',
    highlights: [
      {
        title: 'Rubavu Beaches',
        text: 'Stay by the lake, enjoy waterfront restaurants, and take easy boat trips near the border city.',
        image: 'https://source.unsplash.com/900x650/?rubavu,lake,kivu',
      },
      {
        title: 'Karongi Islands',
        text: 'Cruise to small islands, watch sunset over the water, and enjoy calm boutique stays.',
        image: 'https://source.unsplash.com/900x650/?lake,kivu,island',
      },
      {
        title: 'Coffee Experiences',
        text: 'Visit washing stations and taste Rwandan coffee close to the farms that produce it.',
        image: 'https://source.unsplash.com/900x650/?rwanda,coffee,farm',
      },
    ],
  },
  eastern: {
    region: 'Eastern Province',
    title: 'Akagera safari plains, lakes, wildlife, and golden horizons.',
    intro: 'Eastern Rwanda is safari country, centered around Akagera National Park, big wildlife, lake systems, and open savannah views.',
    promise: 'The east brings the safari energy.',
    description: 'Plan game drives, boat safaris, lodge stays, birding, and warm sunrise routes through one of Rwanda\'s most exciting conservation landscapes.',
    heroImage: 'https://source.unsplash.com/1800x1100/?akagera,safari,rwanda',
    featuredImage: 'https://source.unsplash.com/1100x850/?rwanda,safari,wildlife',
    highlights: [
      {
        title: 'Akagera Game Drives',
        text: 'Look for lions, elephants, giraffes, zebras, antelope, buffalo, and wide-open landscapes.',
        image: 'https://source.unsplash.com/900x650/?akagera,wildlife,rwanda',
      },
      {
        title: 'Lake Ihema Boat Safari',
        text: 'See hippos, crocodiles, water birds, and park scenery from the water.',
        image: 'https://source.unsplash.com/900x650/?rwanda,lake,safari',
      },
      {
        title: 'Safari Lodges',
        text: 'Pair early drives with comfortable lodges, sundowners, and peaceful nights near the park.',
        image: 'https://source.unsplash.com/900x650/?safari,lodge,rwanda',
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
.highlights {
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
}
</style>
