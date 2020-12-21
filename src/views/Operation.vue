<template>
  <div>
    <router-view />
  </div>
</template>
<script>
export default {
  name:'Operation',
  mounted(){
    let _this = this;
    let timer = setInterval(function(){
      if(_this.$store.state.scene){
        _this.$store.commit('setCarmeInfo',[-2585124.763926463, 4455257.635183331, 3760211.9975124625, 348.8461165266943, -75.37489242816274, 359.85772408043186])

        let labelList = ['divLabel99'];
        let data = {
          list:labelList,
          id:0
        }
        _this.$store.commit('addDivLabel',data)
        clearInterval(timer)
      }
    },1000)
  },
  computed:{
    showList(){
      return this.$store.state.showList[11].list
    }
  }
}
</script>
<style>
</style>