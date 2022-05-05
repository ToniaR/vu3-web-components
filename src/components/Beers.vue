<script lang="ts">
import { defineComponent, ref } from "vue";

const beersComponent = defineComponent({
    setup(props, content) {
        const beers = ref([
            {
                name: "Buzz",
                image_url: "https://images.punkapi.com/v2/keg.png"
            },
            {
                name: "Trashy Blonde",
                image_url: "https://images.punkapi.com/v2/2.png"
            },
            {   
                name: "Berliner Weisse With Yuzu - B-Sides",
                image_url: "https://images.punkapi.com/v2/keg.png"
            }
        ]);

        return { beers };
    }
});

export default beersComponent;

</script>

<template>
    <div class="beers-component">
        <h2>This is a web component</h2>
        <template 
            v-for="(beer, index) in beers"
            :key="index">
            <img
                :src="beer.image_url"
                class="hello-beer-item"
            />
            <strong class="styled-text">{{ beer.name }} </strong>
        </template>
    </div>
</template>

<style scoped>
.beers-component {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 4px 2px 10px rgb(149 149 149 / 50%);
    width: 50%;
    max-width: 450px;
    margin: 0 auto;
    padding: 1rem;
    background: #fff;
}

.hello-beer-item {
    width: 100%;
    height: 150px;
    object-fit: contain;
    padding: 1rem;
    border-radius: 5px;
    margin: 0.5rem 0;
    box-sizing: border-box;
}
</style>