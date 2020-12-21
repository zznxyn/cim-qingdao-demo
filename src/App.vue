<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
    @import url('../src/assets/fonts/fonts.css');

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        overflow: hidden;
        width: 100%;
        height: 100%;
    }

    p{
        margin-bottom: 0px!important;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }

    /* 日期组件样式修改 */
    .ant-calendar-picker-container {
        z-index: 999;
    }

    .ant-calendar-picker {
        width: 100% !important;
    }

    .ant-calendar-range-picker-input {
        color: #fff !important;
    }

    .ant-calendar-picker-input.ant-input {
        color: #fff !important;
    }

    .ant-calendar-picker-input.ant-input {
        background: none !important;
        border: none !important;
        outline: none !important;
        box-shadow: none !important;
    }
</style>