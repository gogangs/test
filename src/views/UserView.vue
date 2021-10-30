<template>
  <div>
      <user-profile>
        <div slot="username">
            name : {{user_data.id}}
        </div>
        <span slot="time">
            created: {{user_data.created}}, 
        </span>
        <span slot="karma">karma : {{user_data.karma}}</span>
      </user-profile>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import UserProfile from '../components/UserProfile.vue';

export default {
  components: { UserProfile },
  created(){
    this.$store.dispatch('FETCH_USER_INFO', this.$route.params.id);
  },
  computed:{
    ...mapState({user_data:state => state.user_data}),
  }
}
</script>

<style>

</style>