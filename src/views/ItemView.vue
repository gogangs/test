<template>
  <div>
      <!-- 질문 상세 정보 -->
      <!-- <section>
        <div class="user-container">
        <div>
          <i class="far fa-user"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/user/${ask_data.user}`">{{ask_data.user}}</router-link>
          <div>{{ask_data.time_ago}}</div>
        </div>
        </div>
        <h2>{{ask_data.title}}</h2>
      </section>
      <section v-html="ask_data.content">
      </section> -->
      <user-profile>
        <div slot="username">name : <router-link :to="`/user/${ask_data.user}`">{{ask_data.user}}</router-link></div>
        <template slot="time">Posted : {{ask_data.time_ago}}</template>
      </user-profile>
      <h2>{{ask_data.title}}</h2>
      <section v-html="ask_data.content"></section>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import UserProfile from '../components/UserProfile.vue';
export default {
  components: { 
    UserProfile 
  },created(){
    // console.log(this.$route.query.id);
    this.$store.dispatch('FETCH_ASK_INFO', this.$route.params.id);
  },
  computed:{
    ...mapState({ask_data:state => state.ask_data}),
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  margin-left: 5px;
  margin-top: 5px;
  align-items: center;
}
.fa-user {
  font-size: 2.5em;
}
.user-description {
  padding-left : 10px;
}
</style>