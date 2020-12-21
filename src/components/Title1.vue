<template>
    <div class="title-1">
        <em class="icon-dot"></em>
        <span>{{title[0]}}</span>
        <em class="icon-line"></em>
        <span class="font-10">{{title[1]}}</span>
    </div>
</template>
<script>
export default {
    name:'Title1',
    data(){
        return {
            title:this.name
        }
    },
    props:{
        name:{
            required:true,
            type:Array
        }
    }
}
</script>
<style scoped>
.title-1{
    height: 1.1rem;
    display: flex;
    align-items: center;
}
.icon-dot{
    width: 1rem;
    height: 1rem;
    background: url('../assets/img/icon/icon_title_dot.png');
    background-size: 100% 100%;
}
.icon-line{
    width: 0.3rem;
    height: 0.9rem;
    background: url('../assets/img/icon/icon_title_line.png');
    background-size: 100% 100%;
}
.title-1 span{
    height: 1.1rem;
    line-height: 1.1rem;
}
.title-1 span:first-of-type{
    margin: 0 0.25rem 0 0.3rem;
    font-size: 0.8rem;
    color: #fff;
}
.font-10{
    font-size: 0.5rem;
    color: #fff;
    margin-left: 0.2rem;
}
</style>