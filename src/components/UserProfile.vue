<template>
  <div>
      <section>
        <div class="user-container">
            <div>
            <i class="far fa-user"></i>
            </div>
            <div class="user-description">
                <slot name="username">

                </slot>
                <slot name="time">

                </slot>
                <slot name="karma"></slot>
            </div>
        </div>
      </section>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
//   created(){
//     // console.log(this.$route.query.id);
//     this.$store.dispatch('FETCH_ASK_INFO', this.$route.params.id);
//   },
//   computed:{
//     ...mapState({ask_data:state => state.ask_data}),
//   }
  computed:{
    ...mapState({user_data:state => state.user_data}),
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