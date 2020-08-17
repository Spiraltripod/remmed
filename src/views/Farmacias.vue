<template>
    <div class="mb-16">
        <p class="h1 text-center mt-14">Farmacias</p>
        <v-container>
            <v-card>
                <GmapMap :center="currentLocation" :map-type-id="mapTypeId" :zoom="15">
                <GmapMarker
                    v-for="(item, index) in markers"
                    :key="index"
                    :position="item.position"
                    @click="center = item.position"
                />
                </GmapMap> 
            </v-card>
        </v-container>

        <v-container>
            <v-card v-for="farmacia in farmacias" :key="farmacia.nombre">
              <v-card-text>
                <p class="h5">{{farmacia.nombre}}</p>
                <p>{{farmacia.direccion}}</p>
              </v-card-text>
            </v-card>
        </v-container>

        <bottomBar class="mt-5"></bottomBar>
    </div>
</template>

<script>
import bottomBar from '../components/bottombar'

export default {
    components: {
        bottomBar
    },

  data() {
    return {
      currentLocation: {lat : 0, lng : 0},
      center: { lat: 18.501303, lng: -69.983770 },
      mapTypeId: "terrain",
      markers: [
        { position: { lat: 18.489720, lng: -69.992429 } },
        { position: { lat: 18.496155, lng: -69.959276 } },
        { position: { lat: 18.494794, lng: -69.986786 } },
        { position: { lat: 18.498057, lng: -69.992621 } },
        { position: { lat: 18.500939, lng: -69.989677 } },
        { position: { lat: 18.506982, lng: -69.988926 } },
        { position: { lat: 18.507577, lng: -69.988320 } },
        { position: { lat: 18.505854, lng: -69.981222 } },
        { position: { lat: 18.506592, lng: -69.977341 } },
        { position: { lat: 18.506450, lng: -69.976244 } },
      ],
      farmacias: [
        {nombre: 'Farmacia Los Hidalgos', direccion: 'Plaza El Fresno, Av. República de Colombia casi esq, Av. Monumental, 10702'},
        {nombre: 'Farmacia Yamila I', direccion: 'Av. República de Colombia No 17, Santo Domingo'},
        {nombre: 'Farmacias Carol', direccion: 'Patio Colombia'},
        {nombre: 'Farmacia Jardin Botanico', direccion: 'Santo Domingo, Jardin Botanico, Republica de Colombia'},
        {nombre: 'Farmacia Amell', direccion: 'Av Monumental 4, Santo Domingo'},
        {nombre: 'Farmacia Medicar GBC', direccion: 'Av. Carlos Pérez Ricart (antigua Sol Poniente)#5, plaza Cesi local 1-B Altos de Arroyo Hondo II, Santo Domingo 10605'},
        {nombre: 'Farmacia Villa Claudia', direccion: 'P17, Santo Domingo'},
        {nombre: 'Farmacia del pueblo', direccion: 'Av.Monumental,  Hospital Municipal Doctor Jacinto'},
        {nombre: 'Farmacia Efigenia', direccion: 'Tierra Llana, Calle 3ra'},
        {nombre: 'Farmacia Pockels (Los Peralejos)', direccion: 'Calle 1ra, Santo Domingo'}
      ]
    };
  },

  mounted() {
    this.locatorButtonPressed() 
  },

  methods: {
    locatorButtonPressed() {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.currentLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
        },
        error => {
          console.log(error.message);
        },
      )   
    }
  },
}
</script>

<style lang="scss" scoped>
.vue-map-container {
  height: 600px;
  max-width: 1500px;
  width: 100%;
}
</style>