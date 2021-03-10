<template>
    <div class="About">
        <navbar />
        <br />
        <h1>Bienvenido</h1>
    </div>
</template>
<script>
import Styles from "@/css/Login.css";
import ventanaerror from "@/components/VentanaError";
import auth from "@/services/auth.service";
import User from "@/models/user";
import navbar from "@/components/Nav";

export default {
    name: "login",
    components: {
        ventanaerror,
        navbar,
    },
    data() {
        return {
            user: new User("", ""),
            //loading: false,
            message: "",
        };
    },
    computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
        },
    },
    //mounted: function () {},
    methods: {
    },
};
</script>
