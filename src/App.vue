<template>
  <div id="app">
    <l-map style="height: 100vh; width: 100%;" :zoom="15" :center="[59.396153, 24.657925]">
      <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tile-layer>
      <l-marker v-for="marker in markers" :key="marker.id" :lat-lng="marker.latLng"></l-marker>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker
    },

  data() {
    return {
      markers: [
        { id: 1, latLng: [59.396153, 24.657925] },
        { id: 2, latLng: [59.397153, 24.658925] },
        { id: 3, latLng: [59.398153, 24.659925] },
        { id: 4, latLng: [59.396653, 24.656925] },
        { id: 5, latLng: [59.398153, 24.655925] },
        { id: 6, latLng: [59.398153, 24.652925] },
      ]
    }
  }
}
</script>
