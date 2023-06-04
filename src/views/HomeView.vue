<template>
  <v-container>
    <div>
      <nav>
        <router-link to="/account-sign-up-page">회원가입</router-link> 


      </nav>
    </div>
  </v-container>
</template>
<script>
  import HelloWorld from '../components/HelloWorld'
  export default {
    name: 'Home',
    components: {
      HelloWorld,
    },
  }
</script>