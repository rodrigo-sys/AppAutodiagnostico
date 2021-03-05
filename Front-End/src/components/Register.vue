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
                        v-model="name"
                    />
                    <input
                        type="text"
                        id="email-input"
                        class="fadeIn second"
                        name="email-input"
                        placeholder="Correo Electrónico"
                        v-model="email"
                    />
                    <input
                        type="password"
                        id="password-input"
                        class="fadeIn third"
                        name="password-input"
                        placeholder="Contraseña"
                        v-model="password"
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
                    <select v-model="sex">
                        <option>Masculino</option>
                        <option>Femenino</option>
                        <option>Otro</option>
                    </select>
                    <br />
                    Fec. Nacimiento
                    <input v-model="dateob" type="date" id="date" />
                    <br />
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
            password: "",
            email: "",
            name: "",
            sex: "",
            dateob: new Date(),
        };
    },
    mounted: function () {
        this.register({
            email: "asdf@gmail.com",
            name: "asdf",
            password: "123456",
        });
    },
    methods: {
        register(user) {
            //this.$router.push("/login");
        },
    },
};
</script>
