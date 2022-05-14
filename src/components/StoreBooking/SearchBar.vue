<template>
  <div class="searchbar row d-flex gy-1">
    <!-- TODO: Search -->
    <div class="col-md-6 search-block">
      <form class="d-flex">
        <input
          class="form-control border border-secondary"
          type="search"
          placeholder="請輸入關鍵字"
          aria-label="Search"
          v-model="infos.searchWords"
        />
        <button
          class="btn btn-secondary"
          type="button"
          @click="doSearch()"
        >
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
    <!-- TODO: Region Select -->
    <div class="col-md-3 region-select-block">
      <div class="input-group">
        <button
          type="button"
          class="region-select-output btn btn-outline-secondary"
        >
          {{ infos.region }}
        </button>
        <button
          type="button"
          class="
            split-btn
            btn btn-secondary
            dropdown-toggle dropdown-toggle-split
          "
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span class="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul class="region-dropdown-menu dropdown-menu dropdown-menu-end">
          <li
            class="dropdown-item"
            v-for="region in regions"
            :key="region"
            @click="getRegion(region)"
          >
            {{ region }}
          </li>
        </ul>
      </div>
    </div>
    <!-- TODO: Category Select -->
    <div class="col-md-3">
      <div class="input-group category-select-block">
        <button
          type="button"
          class="category-select-output btn btn-outline-secondary"
        >
          {{ infos.category }}
        </button>
        <button
          type="button"
          class="
            split-btn
            btn btn-secondary
            dropdown-toggle dropdown-toggle-split
          "
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span class="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul class="category-dropdown-menu dropdown-menu dropdown-menu-end">
          <li
            class="dropdown-item"
            v-for="category in categorys"
            :key="category"
            @click="getCategory(category)"
          >
            {{ category }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      infos: {
        category: "全類別",
        region: "全地區",
        searchWords: "",
      },
      
      Region: "全地區",
      regions: ["全地區", "信義區", "大安區", "松山區", "中正區"],
      Category: "全類別",
      categorys: ["全類別", "桌遊店家", "密室逃脫", "合租空間"],
    };
  },

  methods: {
    getRegion: function (region) {
      this.infos.region = region;
    },
    getCategory: function (category) {
      this.infos.category = category;
    },
    doSearch: function () {
      this.$emit("searchStore", this.infos);
    },
  },
  watch: {
    infos: {
      handler: "doSearch",
      deep: true,
    },
  },
};
</script>

<style scoped>
.searchbar {
  background-color: #ffffff;
  padding: 25px;
  border: 1px #dddddd solid;
}
/* .col-md-6,
.col-md-3 {
  border: 1px #111111 solid;
} */

/* Select-block */
.region-select-output,
.category-select-output {
  width: 140px;
  cursor: default;
}
.region-select-output:hover,
.category-select-output:hover {
  background-color: #fff;
  color: var(--input-gray);
  cursor: default;
}
.region-dropdown-menu,
.category-dropdown-menu {
  width: 170px;
  cursor: pointer;
}
</style>
