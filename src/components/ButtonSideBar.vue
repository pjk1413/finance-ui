
<template>
  <a href="" class="side-btn pink-bg dark courier">{{text}}</a>
</template>

<script>
export default {
    name: 'ButtonSidebar',
    props: {
        text: {
            type: String,
        },
        action: {
            type: String
        }
    }

}
</script>

<style scoped>

.side-btn {
    width: 100%;
    display: block;
    padding: 10px;
    text-decoration: none;
    border-bottom: 1px solid #ffcbb8;
}

</style>