<template>
<div class="pilot__list-wrapper">
    <div class="pilot__list-container" v-if="pilots && pilots.length">
        <div class="pilot__item-wrapper" v-for="pilot of pilots" :key="pilot.id">
            <div class="pilot__item-head">
                <div class="pilot__item-img">
                    <img :src="`data:image/jpg;base64,${pilot.img}`" alt="">
                </div>
                <div class="pilot__item-data">
                    <div class="pilot__item-name">
                        {{ pilot.name }} {{ pilot.surname }}
                    </div>
                    <div class="pilot__item-country">
                        {{ pilot.country.name}}
                        <img :src="`data:image/jpg;base64,${pilot.country.img}`" alt="">
                    </div>
                    <div class="pilot__item-team">
                        {{ pilot.comand.name }}
                        <img :src="`data:image/jpg;base64,${pilot.comand.img}`" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div>
    <ul v-if="errors">
        <li v-for="error of errors" :key="error.id">
            <p>{{ error.message }}</p>
        </li>
    </ul>
</div>
    
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            pilots: []
        }
    },
    mounted() {
        axios.get('http://127.0.0.1:8000/api/pilot')
        .then(response => {
            this.pilots = response.data.items;
        })
        .catch(e => {
            this.errors = e
        })
    }
}

</script>

<style scoped>
    .pilot__list-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .pilot__item-wrapper{
        border: 1px solid #000;
        border-radius: 15px;
        margin: 15px 0;
        padding: 20px 35px;
        width: 40%;
    }

    .pilot__item-head {
        display: flex;
        justify-content: space-between;
    }
    
    .pilot__item-data{
        text-align: left;
    }

    .pilot__item-country img{
        width: 30px;
        height: auto;
        object-fit:contain;
    }

    .pilot__item-team img{
        width: 50px;
        height: auto;
        object-fit:contain;
    }

    .pilot__item-name{
        font-size: 24px;
    }

</style>