```vue
<template>
  <nav>
    <div class="logo">
      <router-link to="/">
        <span class="brand">Best Buy Store</span>
      </router-link>
    </div>

    <button class="hamburger" @click="toggleNav">
      <span class="hamburger-icon"></span>
    </button>

    <ul class="nav-links" :class="{ 'nav-links--open': isNavOpen }">
      <li><router-link to="/" @click="closeNav">Products</router-link></li>
      <li><router-link to="/cart" @click="closeNav">Cart ({{ cartItemCount }})</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'TopNav',
  props: ['cartItemCount'],
  data() {
    return {
      isNavOpen: false
    }
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen
    },
    closeNav() {
      this.isNavOpen = false
    }
  }
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0046be; /* Best Buy blue */
  color: #fff;
  padding: 0.75rem 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

.brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}

.nav-links {
  display: flex;
  list-style: none;
  font-size: 1.2rem;
  font-weight: bold;
}

.nav-links li {
  margin-left: 1.5rem;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
}

.nav-links a:hover {
  text-decoration: underline;
}

.hamburger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
}

.hamburger-icon {
  display: block;
  width: 20px;
  height: 2px;
  background-color: #fff;
  position: relative;
}

.hamburger-icon::before,
.hamburger-icon::after {
  content: '';
  display: block;
  width: 20px;
  height: 2px;
  background-color: #fff;
  position: absolute;
  left: 0;
}

.hamburger-icon::before {
  top: -6px;
}

.hamburger-icon::after {
  bottom: -6px;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #0046be;
    padding: 1rem;
  }

  .nav-links--open {
    display: block;
  }

  .nav-links--open li {
    padding: 0.5rem 0;
  }

  .hamburger {
    display: block;
  }
}
</style>
```
