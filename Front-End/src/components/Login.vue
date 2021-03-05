<template>
    <div class="Home">
        <header>
            <nav>
                <div class="menu-item">
                    <router-link to="/"><a href="#">Login</a></router-link>
                </div>
            </nav>
        </header>
        <ventanaerror />
        <div class="wrapper fadeInDown">
            <div id="formContent">
                <br /><br /><br />
                <form>
                    <input
                        type="text"
                        id="login"
                        class="fadeIn second"
                        name="login"
                        placeholder="Correo Electronico"
                        v-model="email"
                    />
                    <input
                        type="password"
                        id="password"
                        class="fadeIn third"
                        name="password"
                        placeholder="Contraseña"
                        v-model="password"
                    />
                    <input
                        type="submit"
                        class="fadeIn fourth"
                        value="Log In"
                        v-on:click="login"
                    />
                    <input
                        type="submit"
                        class="fadeIn fourth"
                        value="Sign Up"
                        @click.prevent="register"
                    />
                </form>
                <!-- Remind Passowrd -->
                <div id="formFooter">
                    <a class="underlineHover" href="#" v-on:click="password">
                        Forgot Password?
                    </a>
                    <div id="components-demo"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Styles from "@/css/Login.css";
import ventanaerror from "./VentanaError";
import auth from "../services/auth.service";
import user from "../models/user";

export default {
    name: "login",
    components: {
        ventanaerror,
    },
    data() {
        return {
            password: "",
            email: "",
        };
    },
    mounted: function () {},
    methods: {
        login() {
            user.password = password;
            user.email = email;
            auth.login(user);
        },

        password: function () {
            this.$router.push("/password");
            // Forgot Password
        },
        register: function () {
            this.$router.push("/register");
            // Forgot Password
        },
    },
};
</script>
