<template>
<div>
  <div class='h100 light-bg'>
      <ButtonSideBar v-for="button in buttons" :key="button.id" :text="button.text" :action="button.action"/>
  </div>
</div>
</template>

<script>
import ButtonSideBar from './../ButtonSideBar'
import sidebarbuttons from '../../assets/data/data.js'

export default {
    name: 'Sidebar',
    components: {
        ButtonSideBar
    },
    data: function() {
        return {
            buttons: sidebarbuttons
        }
        
    }

}
</script>

<style>
    .h100 {
        height: 100%;
    }

</style>