<template>
  <div>
    <bounce-loader
      class="custom-class"
      :color="'#bada55'"
      :loading="isLoading"
      :size="60"
    ></bounce-loader>
    <px-assets-table v-if="!isLoading" :assets="assets"></px-assets-table>
  </div>
</template>
<script>
import PxAssetsTable from "@/components/PxAssetsTable";
import api from "../api";

export default {
  name: "Home",
  components: {
    PxAssetsTable
  },
  data() {
    return {
      isLoading: true,
      assets: []
    };
  },
  created() {
    this.isLoading = true;
    let limit = 20;

    api
      .getAssets(limit)
      .then(assets => (this.assets = assets))
      .finally(() => (this.isLoading = false))
      .catch(err => console.log(err));
  }
};
</script>
