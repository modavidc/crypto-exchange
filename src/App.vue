<template>
    <main>
        <div>
            <bounce-loader
                class="custom-class"
                :color="'#bada55'"
                :loading="isLoading"
                :size="30"
            ></bounce-loader>

            <px-header v-if="!isLoading" :links="links" />
        </div>

        <router-view
            class="container px-5 sm:px-20 py-20 flex justify-center"
        />
    </main>
</template>

<script>
import PxHeader from '@/components/PxHeader';
import api from './api';

export default {
    name: 'App',
    components: {
        PxHeader
    },
    data() {
        return {
            isLoading: true,
            links: []
        };
    },
    methods: {
        getAssetsLinks(assets) {
            let assetsLinks = [];

            assets.forEach((asset) => {
                assetsLinks.push(this.formatAssetLink(asset));
            });

            return assetsLinks;
        },
        formatAssetLink(asset) {
            let assetLink = {
                title: asset.symbol,
                to: { name: 'CoinDetail', params: { id: asset.id } }
            };

            return assetLink;
        }
    },
    created() {
        this.isLoading = true;
        let limit = 10;

        api.getAssets(limit)
            .then((assets) => {
                this.links = this.getAssetsLinks(assets);
            })
            .finally(() => (this.isLoading = false))
            .catch((err) => console.log(err));
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
