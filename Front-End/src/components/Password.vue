<template>
    <div class="Home">
        <div class="wrapper fadeInDown">
            <h2>Recupera tu cuenta</h2>
            <form>
                <input
                    type="text"
                    id="recuperar"
                    class="fadeIn second"
                    name="recuperar"
                    placeholder="Introduzca su email"
                    v-model="email"
                />
            </form>
            <input
                type="submit"
                class="fadeIn fourth"
                @click.prevent="recuperar"
                value="Aceptar"
            />
        </div>
    </div>
</template>

<script>
import Styles from "@/css/Password.css";
export default {
    name: "home",

    methods: {
        recuperar: function () {
            //  Codigo para logearse
        },
    },
};
</script>
