<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListMixin from '../mixins/ListMixin';
export default {
  mixins:[ListMixin],
}
</script>

<style>
.jobs-list {
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
.jobs-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>