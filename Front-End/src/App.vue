<template>
    <div id="app">
        <header>
            <Navbar />
        </header>
        <router-view />
    </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
    name: "App",
    components: {
        Navbar,
    },
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: "montserrat", sans-serif;
}
header {
    width: 100vw;
    background-color: #222;
    padding: 15px;
}
</style>
