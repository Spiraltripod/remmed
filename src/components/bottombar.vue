<template>
  <div>
      <nav class="nav">
      <a @click="inicio()" class="nav__link">
        <i class="material-icons nav__icon">home</i>
        <span class="nav__text">Inicio</span>
      </a>
      
      <a @click="calendario()" href="#" class="nav__link nav__link">
        <i class="material-icons nav__icon">date_range</i>
        <span class="nav__text">Calendario</span>
      </a>

      <a @click="farmacias()" href="#" class="nav__link">
        <i class="material-icons nav__icon">location_on</i>
        <span class="nav__text">Farmacias</span>
      </a>

      <a @click="ajustes()" href="#" class="nav__link">
        <i class="material-icons nav__icon">settings</i>
        <span class="nav__text">Ajustes</span>
      </a>
    </nav> 
  </div>
</template>

<script>
export default {
  
  methods: {
      inicio() {
        this.$router.push({name: 'inicio'})
      },

      calendario() {
        this.$router.push({name: 'calendario'})
      },

      farmacias() {
        this.$router.push({name: 'farmacias'})
      },

      ajustes() {
        this.$router.push({name: 'ajustes'})
      }
  },

}
</script>

<style scoped>

.nav {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 70px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    background-color: #00514e;
    display: flex;
    overflow-x: auto;
}

.nav__link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    min-width: 50px;
    overflow: hidden;
    white-space: nowrap;
    font-family: sans-serif;
    font-size: 13px;
    color: #ffffff;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    transition: background-color 0.1s ease-in-out;
}

.nav__link:hover {
    background-color: #003836;
}

.nav__link--active {
    color: #009578;
}

.nav__icon {
    font-size: 28px;
}
</style>