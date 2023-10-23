<template>
  <l-map
      :center="center"
      :zoom="zoom"
      class="map"
      ref="map"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
      @click = "onMapClick"
  >
    <l-tile-layer :url="url"/>


    <l-marker
        v-for="marker in markers"
        :key="marker.id"
        :lat-lng="marker.latLng"
    ></l-marker>

    <l-geo-json v-if="geodataJSON" :geojson="geodataJSON"></l-geo-json>

  </l-map>

</template>

<script>
import {LMap, LTileLayer, LMarker, LGeoJson} from '@vue-leaflet/vue-leaflet';
import 'leaflet/dist/leaflet.css';
import {getMushroomLocations, addMushroomLocation} from "@/services/mushroomService";

export default {
  name: "MushroomMap",

  components:{
    LMarker,
    LMap,
    LTileLayer,
    LGeoJson
  },
  data() {
    return {
      geodataJSON:null,
      center: [59.08217826154092, 24.713826028818772],  // Define a default center
      zoom: 10,        // Define a default zoom level
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', // Define a default tile layer URL
      markers: [],     // Define markers if you are using them
    }
  },

  async mounted() {
    try {
      const response = await getMushroomLocations();
      if (response) {
        console.log("GeoJSON Data:", response);
        this.geodataJSON = response;
      } else {
        console.error("Received undefined response from getMushroomLocations");
      }
    } catch (error) {
      console.error("Error fetching mushroom locations:", error);
    }
  },
  methods:{

      zoomUpdated(zoom) {
      this.zoom = zoom;
      console.log(this.zoom)
    },
    centerUpdated(center) {
      this.center = center;
    },
    async onMapClick(event) {
      const {lat, lng} = event.latlng;
      const name = prompt("Enter the mushroom name: ");
      const description = prompt("Enter the mushroom description: ");
      if (name && description) {
        const newLocation = { name, x: lng, y: lat, description};
        try {
          const addedLocation = await addMushroomLocation(newLocation);
          if (addedLocation) {
            this.markers.push({
              id: addedLocation.properties.id,
              latLng: [lat, lng],
            });
          }
        } catch (error) {
          console.error("Error adding mushroom location: ", error);
        }

      }
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