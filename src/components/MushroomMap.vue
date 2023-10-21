<template>
  <l-map
      :center="center"
      :zoom="zoom"
      class="map"
      ref="map"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
  >
    <l-tile-layer
        :url="url"
    ></l-tile-layer>

    <l-marker
        v-for="marker in markers"
        :key="marker.id"
        :lat-lng="marker.latLng"
    ></l-marker>
  </l-map>

</template>

<script>
import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  name: "MushroomMap",
  components:{
    LMarker,
    LMap,
    LTileLayer
  },
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      center: [59.396153, 24.657925],
      zoom: 15,
      markers: [
            { id: 1, latLng: [59.396153, 24.657925] },
            { id: 2, latLng: [59.397153, 24.658925] },
            { id: 3, latLng: [59.398153, 24.659925] },
            { id: 4, latLng: [59.396653, 24.656925] },
            { id: 5, latLng: [59.398153, 24.655925] },
            { id: 6, latLng: [59.398153, 24.652925] },
          ]
    }
  },
  methods:{
      zoomUpdated(zoom) {
      this.zoom = zoom;
      console.log(this.markers)
    },
    centerUpdated(center) {
      this.center = center;
    },
  }
}
</script>


<style>
.map {
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

</style>