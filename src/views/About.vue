<template>
  <div class="about">
    <h1 @click="over">{{name}}</h1>
    <div @click="pay">{{num}}</div>
    <div>{{fund(a,2)}}</div>
  </div>
</template>
<script>
import {mapActions, mapMutations,mapState} from 'vuex'
console.log(mapMutations);
export default {
  data(){
    return {
      a:5
    }
  },
  created(){
    // console.log(this.$options);
    this.a = 3
  },
  computed:{
    // ...mapGetters ...mapState 写在computed中
    ...mapState({
      name:(state)=> state.bag.name,
      num:(state) => state.file.num
    }),
    fund() {
      return (a,b)=>{
        return a+b
      }
    }
  },
  methods:{
    // 辅助函数 ...mapMutations ...mapActions 写在 methods
    // 辅助函数 '模块名称/模块中的方法'
    ...mapMutations(['bag/handle','file/handle']),
    ...mapActions(['file/handleV']),
    over(){
      // 调用方法(带参数)
      this['bag/handle']('yunmu')
      // this.$store.commit('bag/handle')
    },
    pay(){
      // this['file/handleV'](5)
      this.$store.dispatch('file/handleV',100)
    }
  }
}
</script>
