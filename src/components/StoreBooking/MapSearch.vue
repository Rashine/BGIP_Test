<template>
  <div class="map-container border rounded">
    <GMap
      v-if="!isLoading"
      :center="{ lat, lng }"
      :stores="stores"
      :streetViewControl="false"
      :mapTypeControl="false"
      :fullscreenControl="true"
      :zoomControl="true"
    ></GMap>
  </div>
</template>

<script>
import GMap from "../GMap.vue";

export default {
  name: "MapSearch",
  components: {
    GMap,
  },
  data() {
    return {
      // 中正紀念堂經緯度
      lat: 25.035702,
      lng: 121.518831,
      stores: [],
    };
  },
};
</script>

<style scoped>
.google-map {
  width: 100%;
  height: 400px;
}
</style>
