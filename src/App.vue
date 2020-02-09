<template>
  <main>
    <px-header :links="links" />

    <router-view class="container px-5 sm:px-20 py-20 flex justify-center" />
  </main>
</template>

<script>
import PxHeader from "@/components/PxHeader";

export default {
  name: "App",
  components: {
    PxHeader
  },
  data() {
    return {
      links: [
        {
          title: "BTC",
          to: { name: "CoinDetail", params: { id: "bitcoin" } }
        },
        {
          title: "ETH",
          to: { name: "CoinDetail", params: { id: "ethereum" } }
        },
        {
          title: "XRP",
          to: { name: "CoinDetail", params: { id: "ripple" } }
        },
        {
          title: "BCH",
          to: { name: "CoinDetail", params: { id: "bitcoin-cash" } }
        },
        {
          title: "BSV",
          to: { name: "CoinDetail", params: { id: "bitcoin-sv" } }
        },
        {
          title: "LTC",
          to: { name: "CoinDetail", params: { id: "litecoin" } }
        },
        {
          title: "LTC",
          to: { name: "CoinDetail", params: { id: "litecoin" } }
        },
        {
          title: "USDT",
          to: { name: "CoinDetail", params: { id: "tether" } }
        },
        {
          title: "BNB",
          to: { name: "CoinDetail", params: { id: "binance-coin" } }
        },
        {
          title: "XTZ",
          to: { name: "CoinDetail", params: { id: "texos" } }
        }
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
