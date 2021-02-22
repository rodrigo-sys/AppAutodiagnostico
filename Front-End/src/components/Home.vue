<template>
  <div class="Home">
    <div class="wrapper fadeInDown">
     <div class="container-fluid">
      <img src="../assets/ine.png" width="450" />
      <form>
        <input 
          type="submit"
          class="fadeIn fourth"
          value="Diagnostico"
          v-on:click="diagnostico"
        />

 <input 
          type="submit"
          class="fadeIn fourth"
          value="LogOut"
          v-on:click="LogOut"
        />
          </form>
  
</div>
    </div>
  </div>
</template>

<script>
import Styles from '@/css/Home.css'
export default {
  name: "home",

  methods:{  
    diagnostico: function () {
       this.$router.push("/diagnostico");
  },
    LogOut: function () {
       
  }
},
};
import styles from '@/css/Home.css'
</script>
