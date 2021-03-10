<template>
    <div class="Home">
        <div class="wrapper fadeInDown">
            <div id="formContent">
                <br /><br /><br />
                <form>
                    <input
                        type="text"
                        id="name-input"
                        class="fadeIn second"
                        name="name-input"
                        placeholder="Nombre y Apellido"
                        v-model="user.username"
                    />
                    <input
                        type="text"
                        id="email-input"
                        class="fadeIn second"
                        name="email-input"
                        placeholder="Correo Electrónico"
                        v-model="user.email"
                    />
                    <input
                        type="password"
                        id="password-input"
                        class="fadeIn third"
                        name="password-input"
                        placeholder="Contraseña"
                        v-model="user.password"
                    />
                    <input
                        type="password"
                        id="repassword-input"
                        class="fadeIn third"
                        name="repassword-input"
                        placeholder="Confirmar contraseña"
                    />
                    <br />
                    <br />
                    Sexo:
                    <select v-model="user.sex">
                        <option>Hombre</option>
                        <option>Mujer</option>
                        <option>Otro</option></select
                    ><br />
                    Fec. Nacimiento <input type="date" id="date" /><br />
                    <button
                        class="btn btn-secondary fadeIn fourth"
                        @click.prevent="register"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Styles from "@/css/Register.css";
import auth from "../services/auth.service";
import User from "../models/user";

export default {
    name: "register",
    data() {
        return {
            user: new User("", "", ""),
            submitted: false,
            successful: false,
            message: "",
        };
    },
    computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
        },
    },
    mounted: function () {
        if (this.loggedIn) {
            this.$router.push("/diagnostico");
        } /*
        this.register({
            email: "asdf@gmail.com",
            name: "asdf",
            password: "123456",
        });*/
    },
    methods: {
        register() {
            this.message = "";
            this.submitted = true;
            //this.$validator.validate().then((isValid) => {
            //if (isValid) {
            this.$store.dispatch("auth/register", this.user).then(
                (data) => {
                    this.message = data.message;
                    this.successful = true;
                    console.log(this.message);
                    this.$router.push("/login");
                },
                (error) => {
                    this.message =
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString();
                    this.successful = false;
                    console.log(this.message);
                }
            );
            //}
            //});
        },
    },
};
</script>
