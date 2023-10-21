<template>
  <div id="app">
    <l-map style="height: 100vh; width: 100%;" :zoom="13" :center="[59.396153, 24.657925]">
      <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tile-layer>
      <l-marker :lat-lng="[59.396153, 24.657925]"></l-marker>
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
    }
}
</script>
