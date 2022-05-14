<template>
  <div class="google-map" id="map"></div>
</template>

<script>
import { db } from "@/firebase/config";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
export default {
  props: {
    center: {
      type: Object,
      // 預設中心，中正紀念堂經緯度
      default: () => ({ lat: 25.035702, lng: 121.518831 }),
    },
    zoom: {
      type: Number,
      default: 14,
    },
    streetViewControl: {
      type: Boolean,
      default: true,
    },
    mapTypeControl: {
      type: Boolean,
      default: true,
    },
    fullscreenControl: {
      type: Boolean,
      default: true,
    },
    zoomControl: {
      type: Boolean,
      default: true,
    },
    stores: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      map: null,
      infowindow: null,
      markers: [],
      allStores: [],
    };
  },
  // 當發現中心位置改變時，更新中心位置與地標
  watch: {
    center() {
      this.resetCenter();
      this.setMarker();
    },
  },
  // created() {
  //   this.getAllStore();
  // },
  mounted() {
    this.getAllStore()
      .then(() => {
        this.initMap();
      })
      .then(() => {
        this.setMarker();
      });
  },
  methods: {
    async getAllStore() {
      const dataBase = await collection(db, "Store");
      const dbResult = await getDocs(query(dataBase, orderBy("StoreName")));
      dbResult.docs.forEach((doc) => {
        this.allStores.push({ ...doc.data() });
      });
    },
    initMap() {
      const google = window.google;
      this.map = new google.maps.Map(document.getElementById("map"), {
        center: this.center,
        zoom: this.zoom,
        maxZoom: 20,
        minZoom: 3,
        streetViewControl: this.streetViewControl,
        mapTypeControl: this.mapTypeControl,
        fullscreenControl: this.fullscreenControl,
        zoomControl: this.zoomControl,
        // 客製化地圖樣式
        styles: [
          // 隱藏一般商家
          {
            featureType: "poi.business",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          // 隱藏公園描述
          {
            featureType: "poi.park",
            elementType: "labels.text",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
        ],
      });
    },
    resetCenter() {
      // set center
      this.map.panTo({ lat: this.center.lat, lng: this.center.lng });
    },
    clearMarkers() {
      this.markers.forEach((marker) => marker.setMap(null));
      this.markers = [];
    },
    setMarker() {
      const google = window.google;

      // clear existing markers
      this.clearMarkers();

      this.allStores.forEach((location) => {
        // console.log(location);
        const marker = new google.maps.Marker({
          position: {
            lat: location.StoreLocation.lat,
            lng: location.StoreLocation.lng,
          },
          map: this.map,
        });

        // save markers
        this.markers.push(marker);

        const infowindow = new google.maps.InfoWindow({
          content: `
          <div id="content">
            <p id="firstHeading" class="firstHeading">${location.StoreName}</p>
          </div>
        `,
          maxWidth: 200,
        });

        marker.addListener("click", () => {
          if (this.infowindow) this.infowindow.close();
          infowindow.open(this.map, marker);
          this.infowindow = infowindow;
        });
      });
    },
  },
};
</script>
