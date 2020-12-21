<template>
    <div>
        <div class="view-point-cont">
            <em class="icon-pre control"></em>
            <ul class="view-point-detail">
                <li>
                    <img src="../assets/img/bg/her.png" alt="">
                </li>
                <li class="active">
                    <img src="../assets/img/leaderprise/leader-3.png" alt="">
                </li>
                <li>
                    <img src="../assets/img/leaderprise/leader-4.png" alt="">
                </li>
            </ul>
            <em class="icon-next control"></em>
         </div>
    </div>
</template>
<script>
export default {
    name:'swiper'
}
</script>
<style scoped>
.view-point-cont{
  width: 25rem;
  height: 5rem;
  background: linear-gradient(90deg, rgba(0, 10, 50, 0) 0%, #000A32 50%, rgba(2, 15, 48, 0) 100%);
  position: absolute;
  top: 0;
  left:50%;
  margin-left: -12.5rem;
}
 .view-point-cont .control{
  width: 1.65rem;
  height: 1.65rem;
}
.control:hover{
  cursor: pointer;
}
.view-point-cont{
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.view-point-detail{
  display: flex;
  width: 18.6rem;
  box-sizing: border-box;
  justify-content: space-between;
  padding: 0 0.8rem;
}
.view-point-detail li{
  width: 5rem;
  height: 4rem;
}
.view-point-detail li.active{
  background: url('../assets/img/solution/bg_view_point.png');
  background-size: 100% 100%;
}
.view-point-detail li img{
  width: 100%;
  height: 100%;
}
.icon-pre{
  background: url('../assets/img/solution/icon_pre_one.png');
  background-size: 100% 100%;
}
.icon-next{
  background: url('../assets/img/solution/icon_next_one.png');
  background-size: 100% 100%;
}
</style>