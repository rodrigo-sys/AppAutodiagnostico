<template>
  <div class="Home">
    <div class="wrapper fadeInDown">
      <img src="../assets/ine.png" width="450" />
      <form>
        <input 
          type="submit"
          class="fadeIn fourth"
          value="Diagnostico"
          v-on:click="diagnostico"
        />
          </form>
    </div>
  </div>
</template>

<script>

export default {
  name: "home",

  methods:{  
    diagnostico: function () {
       this.$router.push("/diagnostico");
  }
},
};
import Home from '@/css/Home.css'
</script>
