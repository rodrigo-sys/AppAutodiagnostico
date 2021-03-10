<template>
    <div class="About">
        <br />
        <h1>Bienvenido</h1>
        <button
            type="submit"
            class="btn btn-danger"
            value="Sign Up"
            @click.prevent="logout"
        >
            Log-Out
        </button>
    </div>
</template>
<script>
import Styles from "@/css/Login.css";
import ventanaerror from "./VentanaError";
import auth from "../services/auth.service";
import User from "../models/user";

export default {
    name: "login",
    components: {
        ventanaerror,
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
        logout: function () {
            //this.loading = true;
            //this.$validator.validateAll().then((isValid) => {
            //if (!isValid) {
            //    this.loading = false;
            //    return;
            //}

                this.$store.dispatch("auth/logout").then(
                    () => {
                        this.$router.push("/login")
                    },
                    (error) => {
                        //this.loading = false;
                        this.message =
                            (error.response && error.response.data) ||
                            error.message ||
                            error.toString();
                    });
            //});
        },
        password: function () {
            this.$router.push("/password");
            // Forgot Password
        },
        diagnostico: function () {
            this.$router.push("/register");
            // Forgot Password
        },
        register: function () {
            this.$router.push("/diagnostico");
            // Forgot Password
        },
        home: function () {
            this.$router.push("/home");
            // Forgot Password
        },
    },
};
</script>
