<template>
    <div class="title-cont">
        <em class="icon-title-left"></em>
        <span>{{name}}</span>
        <em class="icon-title-right"></em>
    </div>
</template>
<script>
export default {
    name:'Title',
    data(){
        return {
            name:this.title
        }
    },
    props:{
        title:{
            required:true,
            type:String
        }
    }
}
</script>
<style scoped>
    .title-cont{
        display: flex;
        align-items: center;
        height: 0.8rem;
    }
    .title-cont span{
        font-size: 0.8rem;
        color: #01E7FC;
        font-weight: 500;
        margin: 0 0.35rem;
        line-height: 0.8rem;
    }
    .title-cont .icon-title-left{
        width: 0.25rem;
        height: 0.8rem;
        background: url('../assets/img/icon/icon_title_left.png');
        background-size: 100% 100%;
    }
    .title-cont .icon-title-right{
        width: 0.25rem;
        height: 0.8rem;
        background: url('../assets/img/icon/icon_title_right.png');
        background-size: 100% 100%;
    }
</style>