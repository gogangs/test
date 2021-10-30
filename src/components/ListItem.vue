<template>
  <div>
      <ul class="news-list">
        <li v-for="item in listItems" v-bind:key="item.id" class="post">
          <div class="points">
            {{ item.points || 0 }}
          </div>
          <div>
            <p class="news-title">
              <router-link v-if="routeName === 'ask'" v-bind:to="'/item/'+item.id">{{ item.title }}</router-link>
              <a v-bind:href="item.url" v-else-if="routeName === 'news'">{{ item.title }}</a>
              <span v-else>{{ item.title }}</span>
            </p>
            <template v-if="routeName === 'jobs'">
                <small class="link-text">
                {{ item.time_ago }}
                <a v-bind:href="item.domain">{{item.domain}}</a>
                </small>
            </template>
            <template v-else>
                <small class="link-text">
                {{ item.time_ago }} by <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
                </small>
            </template>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
    data(){
        return {
            routeName:''
        }
    },
  created(){
    this.routeName = this.$route.name;
  },
  computed:{
      listItems(){
        return this.$store.state.list;
        // if(this.routeName  === 'news'){
        //     return this.$store.state.news;
        // } else if(this.routeName  === 'ask'){
        //     return this.$store.state.asks;
        // } else if(this.routeName  === 'jobs'){
        //     return this.$store.state.jobs;
        // } else return [];
      }
  }
}
</script>

<style scoped>
.news-list {
 margin: 0;
 padding:0;
}
.post {
  display: flex;
  border-bottom:1px solid #eee;
  list-style: none;
  align-items: center;
}
.points {
  display: flex;
  width: 80px;
  height: 60px;
  align-items: center;
  justify-content: center;
  color:#42b683;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>