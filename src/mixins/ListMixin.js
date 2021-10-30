
import bus from '../utils/bus.js'
import ListItem from '../components/ListItem.vue';

export default {
    //재사용할 컴포넌트 옵션
  components:{
    ListItem
  },
  mounted(){
    bus.$emit('end:spinner');
  }
}