<template>
  <header class="site-header">
    <RouterLink to="/" class="brand">
      <img src="../assets/visit rw.PNG" alt="Tourism Rwanda logo" />
      <span>Tourism Rwanda</span>
    </RouterLink>

    <nav class="nav-links" aria-label="Main navigation">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/services">Services</RouterLink>

      <div class="nav-item">
        <button type="button">Gallery <span>v</span></button>
        <div class="dropdown small">
          <RouterLink to="/photos">
            <img src="https://source.unsplash.com/240x160/?rwanda,kigali" alt="Rwanda photography preview" />
            <span>Photos</span>
          </RouterLink>
          <RouterLink to="/videos">
            <img src="https://source.unsplash.com/240x160/?rwanda,tourism" alt="Rwanda video preview" />
            <span>Videos</span>
          </RouterLink>
        </div>
      </div>

      <div class="nav-item">
        <button type="button">Destinations <span>v</span></button>
        <div class="dropdown destinations">
          <RouterLink
            v-for="destination in destinations"
            :key="destination.slug"
            :to="`/destinations/${destination.slug}`"
          >
            <img :src="destination.image" :alt="destination.name" />
            <span>
              <strong>{{ destination.name }}</strong>
              <small>{{ destination.caption }}</small>
            </span>
          </RouterLink>
        </div>
      </div>

      <RouterLink to="/contact">Contact</RouterLink>
    </nav>

    <select class="language-select" aria-label="Language">
      <option>English</option>
      <option>Kinyarwanda</option>
      <option>French</option>
      <option>Spanish</option>
    </select>
  </header>
</template>

<script setup>
const destinations = [
  {
    slug: 'northern',
    name: 'Northern Province',
    caption: 'Gorillas and volcanoes',
    image: 'https://source.unsplash.com/240x160/?rwanda,volcanoes,gorilla',
  },
  {
    slug: 'southern',
    name: 'Southern Province',
    caption: 'Culture and rainforest',
    image: 'https://source.unsplash.com/240x160/?rwanda,nyungwe,forest',
  },
  {
    slug: 'western',
    name: 'Western Province',
    caption: 'Lake Kivu escapes',
    image: 'https://source.unsplash.com/240x160/?rwanda,lake,kivu',
  },
  {
    slug: 'eastern',
    name: 'Eastern Province',
    caption: 'Akagera safari plains',
    image: 'https://source.unsplash.com/240x160/?rwanda,akagera,safari',
  },
]
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 14px 5%;
  background: #073b28;
  color: #fff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18);
}

.brand,
.nav-links,
.nav-links a,
.nav-item button {
  display: flex;
  align-items: center;
}

.brand {
  gap: 10px;
  color: #fff;
  font-weight: 800;
  text-decoration: none;
  white-space: nowrap;
}

.brand img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  object-fit: cover;
}

.nav-links {
  justify-content: center;
  gap: 6px;
  flex: 1;
}

.nav-links a,
.nav-item button {
  min-height: 42px;
  padding: 0 12px;
  border: 0;
  background: transparent;
  color: #fff;
  font: inherit;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
}

.nav-links a:hover,
.nav-links a.router-link-active,
.nav-item:hover button {
  color: #ffd447;
}

.nav-item {
  position: relative;
}

.nav-item button span {
  margin-left: 5px;
  font-size: 12px;
}

.dropdown {
  position: absolute;
  top: calc(100% + 12px);
  left: 50%;
  min-width: 260px;
  padding: 12px;
  background: #fff;
  border: 1px solid #e7eee9;
  border-radius: 8px;
  box-shadow: 0 24px 55px rgba(4, 39, 24, 0.24);
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, 8px);
  transition: 0.2s ease;
}

.nav-item:hover .dropdown,
.nav-item:focus-within .dropdown {
  opacity: 1;
  pointer-events: auto;
  transform: translate(-50%, 0);
}

.dropdown a {
  gap: 12px;
  min-height: 72px;
  padding: 8px;
  border-radius: 6px;
  color: #123d2c;
}

.dropdown a:hover {
  background: #eff8f1;
  color: #0d6b43;
}

.dropdown img {
  width: 76px;
  height: 54px;
  border-radius: 6px;
  object-fit: cover;
}

.dropdown strong,
.dropdown small {
  display: block;
}

.dropdown small {
  margin-top: 3px;
  color: #5f7269;
  font-size: 12px;
  font-weight: 500;
}

.language-select {
  min-height: 38px;
  max-width: 130px;
  border: 1px solid rgba(255, 255, 255, 0.24);
  border-radius: 6px;
  background: #0b4b33;
  color: #fff;
  font-weight: 700;
}

@media (max-width: 920px) {
  .site-header {
    align-items: flex-start;
    flex-direction: column;
  }

  .nav-links {
    width: 100%;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .dropdown {
    left: 0;
    transform: translateY(8px);
  }

  .nav-item:hover .dropdown,
  .nav-item:focus-within .dropdown {
    transform: translateY(0);
  }
}
</style>
