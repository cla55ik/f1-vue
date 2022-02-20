<template>
<div class="pilot__list-wrapper">
    <div class="pilot__list-container" v-if="pilots && pilots.length">
        <div class="pilot__item-wrapper" v-for="pilot of pilots" :key="pilot.id">
            <div class="pilot__item-head">
                <div class="pilot__head-data">
                    <div class="pilot__head-name">
                        {{ pilot.name }} 
                    </div>
                    <div class="pilot__head-surname">
                        {{ pilot.surname }}
                    </div>
                </div>
                <div class="pilot__head-country">
                    <img :src="`data:image/jpg;base64,${pilot.country.img}`" alt="">
                    <!-- <div class="pilot__country-name">
                        {{ pilot.country.name}}
                    </div> -->
                </div>
            </div>
            <div class="pilot__item-data">
                <div class="pilot__item-team">               
                        {{ pilot.comand.name }}
                        <!-- <img :src="`data:image/jpg;base64,${pilot.comand.img}`" alt=""> -->
                </div>
                <div class="pilot__item-img">
                    <img :src="`data:image/jpg;base64,${pilot.img}`" alt="">
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
            pilots: [],
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
    },
    // updated() {
    //     this.setTeamBackground()
    // },
    // methods: {
    //     setTeamBackground() {
    //         this.pilots.forEach(item => {
    //             console.log(item);
    //         })
    //     }
        
    // }
}

</script>

<style scoped>
    .pilot__list-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .pilot__item-wrapper{
        border: 1px solid #ccc;
        border-radius: 15px;
        margin: 15px 0;
        /* padding: 20px 35px; */
        width: 30%;
    }

    .pilot__item-head {
        display: flex;
        justify-content: space-between;
        padding:25px;
        border-bottom: 1px solid #ccc;
    }
    
    .pilot__item-data{
        /* text-align: left; */
        display: flex;
        justify-content:space-between;
    }
    
    .pilot__head-data{
        text-align: left;
    }

    .pilot__head-name{
        font-size:18px;
        text-transform: uppercase;
    }
    
    .pilot__head-surname{
        font-size:26px;
        font-weight: bold;
        text-transform: uppercase;
    }

    .pilot__head-country{
        text-align: right;
    }

    .pilot__head-country img{
        width: 55px;
        height: auto;
        object-fit:contain;
        border-radius: 5px;
    }

    .pilot__country-name{
        font-size: 14px;
    }

    .pilot__item-team{
        padding: 15px 25px;
        display: flex;
        align-items: baseline;
    }

    .pilot__item-team img{
        width: 35px;
        margin-left: 10px;
        height: auto;
        object-fit:contain;
    }

    .pilot__item-name{
        font-size: 24px;
    }

    .pilot__item-img {
        display: flex;
        justify-content: end;
    }
    .pilot__item-img img{
        border-radius: 0px 0px 15px 0px;
    }

</style>