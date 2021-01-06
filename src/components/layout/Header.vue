<template>
    <div class="green-bg">
        <ul class='nav'>
            <li class="light-bg"><router-link class="dark link-item" to="/home">Home</router-link></li>
            <li v-if="display()" class="light-bg" style="float:right"><a class="dark link-item" v-on:click="removeToken()" href="/login">Logout</a></li>
        </ul>     
    </div>
</template>

<script>
export default {
    name: 'Header',
    data: function() {
        return {
            login: false
        }
    },
    methods: {
        removeToken: function() {
            sessionStorage.setItem("auth", "")
        },
        display: function() {
            const path = window.location.pathname.split('/')[1]
            if(path === 'home') {
                return true
            } else {
                return false
            }
        }
    }

}
</script>

<style>
.nav {
    list-style-type: none;
    overflow: hidden;
    padding-inline-start: 20px;
    padding-inline-end: 20px;
}

li {
    float:left;
}

.link-item {
    display: block;
    text-align: center;
    text-decoration: none;
    padding: 20px;
    font-family: 'Courier Prime', monospace;
}

.link-item:hover {
    font-family: 'Courier Prime', monospace;
    background-color:  #201E1F;
    color: #FEEFDD;
}

</style>