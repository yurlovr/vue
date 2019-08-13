<template>
    <header class="app__header">
        <h1 class="app__header-main">
            Teleop
        </h1>
    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="scss" scoped>
    .app__header {
        height: 10vh;
        text-align: center;
        &-main {
             font-size: 42px;
             line-height: 48px;
             font-style: normal;
             font-weight: 300;
             color: #96B3D2;
            margin: 0;
         }
    }

</style>