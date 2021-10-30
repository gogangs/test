import ListView from '../views/ListView';
import bus from '../utils/bus.js'

export default function createListView(name){
    return {
        //재사용할 인스턴스(컴포넌트) 옵션
        name: name,
        created(){
            bus.$emit('start:spinner');
            this.$store.dispatch('FETCH_LIST', this.$route.name)
            .then( () => {
              setTimeout(()=>{
                bus.$emit('end:spinner');
              }, 1000);
            })
            .catch((error)=>{
              console.log(error);
            });
        },
        render(createElement){
            return createElement(ListView);
        }
    }
}