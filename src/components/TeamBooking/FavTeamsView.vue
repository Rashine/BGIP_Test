<template>
  <div class="FavTeamsView">
    <div class="row py-4 px-md-4 px-sm-1">
      <div
        class="col-md-6 col-sm-12 d-flex justify-content-center"
        v-for="list in teams"
        :key="list.TeamName"
      >
        <TeamCard :team="list" :userinfo="userinfo" :name="'FavTeamsView'"></TeamCard>
      </div>
    </div>
  </div>
</template>

<script>
import TeamCard from "@/components/TeamBooking/TeamCard.vue";
export default {
  name:"FavTeamsView",
  components: {
    TeamCard,
  },
  props: ["teams", "userinfo"],
  data() {
    return {
      name:"Fav",
    }
  }
};
</script>



<style scoped>
</style>