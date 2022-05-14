<template>
  <div>
    <template v-for="(store, index) in allStores" :key="index">
      <div class="card" style="width: 18rem" :store="store">
        <img :src="store.CoverPhoto" class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">{{ store.StoreName }}</h5>
          <p class="card-text">
            {{ store.Introduction }}
          </p>
          <button class="btn btn-primary" @click="redirect(store.StoreUID)">
            店家詳細資訊
          </button>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { db } from "@/firebase/config";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
export default {
  name: "StoresView",
  data() {
    return {
      allStores: [],
    };
  },
  mounted() {
    // this.$store.dispatch("getAllStore");
    this.getAllStore();
    console.log("All stores getted!")
  },
  methods: {
    async getAllStore() {
      const dataBase = await collection(db, "Store");
      const dbResult = await getDocs(query(dataBase, orderBy("StoreName")));
      dbResult.docs.forEach((doc) => {
        this.allStores.push({ ...doc.data() });
      });
    },
    redirect(storeID) {
      this.$router.push(`/stores/${storeID}`);
    },
  },
};
</script>

<style>
</style>