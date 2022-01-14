<template>
<div class="pilot__list-wrapper">
    <div class="pilot__list-container" v-if="pilots && pilots.length">
        <div class="pilot__item-wrapper" v-for="pilot of pilots" :key="pilot.id">
            <div class="pilot__item-head">
                <div class="pilot__item-img">
                    <img src="" alt="">
                </div>
                <div class="pilot__item-data">
                    <div class="pilot__item-name">
                        {{ pilot.name }} {{ pilot.surname }}
                    </div>
                    <div class="pilot__item-country">
                        {{ pilot.country.name}}
                    </div>
                    <div class="pilot__item-team">
                        {{ pilot.comand.name }}
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
        border-color: #e4e4e4;
        border-radius: 15px;
    }
</style>