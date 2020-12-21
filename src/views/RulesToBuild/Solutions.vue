<template>
  <div class="home">
    <div class="left-cont">
      <div class="total-area">
        <div class="titile-cont">
          <tit :name="titleList[0]"/>
        </div>
        <div class="area-info">
          <div class="area-item" v-for="(item,index) in areaInfo" :key="index">
            <img :src="item.img" alt="">
            <div>
              <p class="font-15  family-num">{{item.num}}</p>
              <p>{{item.name}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="project-info">
        <div class="titile-cont">
          <tit :name="titleList[1]"/>
        </div>
        <div class="project-info-cont">
          <span>
            <p class="active family-num">152</p>
            <p>总计</p>
          </span>
          <div class="progress-bar">
            <ul>
              <li @click="showLabel(0)">
                <div class="progress-info-cont">
                  <span>在建</span>
                  <span class="family-num">3</span>
                </div>
                <div class="progress-info-detail">
                  <span></span>
                </div>
              </li>
              <li @click="showLabel(1)">
                <div class="progress-info-cont">
                  <span>待建</span>
                  <span class="family-num">2</span>
                </div>
                <div class="progress-info-detail">
                  <span></span>
                </div>
              </li>
              <li @click="showLabel(2)">
                <div class="progress-info-cont">
                  <span>完工</span>
                  <span class="family-num">1</span>
                </div>
                <div class="progress-info-detail">
                  <span></span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="project-info">
        <div class="titile-cont">
          <tit :name="titleList[2]"/>
        </div>
        <div class="project-info-cont">
          <span>
            <p class="active family-num">684</p>
            <p>设备总量</p>
          </span>
          <div class="sets-cont">
            <div class="sets-item">
              <p class="active family-num">55</p>
              <p>碾轧车</p>
            </div>
            <div class="sets-item">
              <p class="active family-num">55</p>
              <p>碾轧车</p>
            </div>
            <div class="sets-item">
              <p class="active family-num">55</p>
              <p>碾轧车</p>
            </div>
            <div class="sets-item">
              <p class="active family-num">55</p>
              <p>碾轧车</p>
            </div>
          </div>
        </div>
      </div>
      <div class="warning-cont">
        <div class="titile-cont">
          <tit :name="titleList[3]"/>
        </div>
        <div class="warning-detail">
          <ul>
            <li>
              <div class="warning-info">
                <p>2020.09.10    20：18  气象风险</p>
                <p>强降雨引发地质灾害的可能性较大</p>
              </div>
              <em class="icon-warning"></em>
            </li>
            <li>
              <div class="warning-info">
                <p>2020.09.10    20：18  同类项目风险</p>
                <p>七星关区一施工工地发生支架垮塌</p>
              </div>
            </li>
            <li>
              <div class="warning-info">
                <p>2020.09.10    20：18  同类项目风险</p>
                <p>因切割机漏电发生1人触电死亡事故</p>
              </div>
            </li>
            <li>
              <div class="warning-info">
                <p>2020.09.10    20：18  重大事件风险</p>
                <p>工地突发透水，引发隧道及路面坍塌</p>
              </div>
            </li>
            <li>
              <div class="warning-info">
                <p>2020.09.10    20：18  重大事件风险</p>
                <p>环路及道路将实施以下交通管制措施</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="right-cont">
      <div>
        <div class="titile-cont">
          <tit :name="titleList[4]"/>
        </div>
        <div class="cont-1">
          <img src="../../assets/img/solution/img_pic_pro1.png" alt="">
          <img src="../../assets/img/solution/img_pic_pro2.png" alt="">
          <img src="../../assets/img/solution/img_pic_pro3.png" alt="">
          <img src="../../assets/img/solution/img_pic_pro4.png" alt="">
        </div>
      </div>
      <div>
        <div class="titile-cont">
          <tit :name="titleList[5]"/>
        </div>
        <div class="cont-2">
          <img src="../../assets/img/solution/img_charts.png" alt="">
        </div>
      </div>
      <div>
        <div class="titile-cont">
          <tit :name="titleList[6]"/>
        </div>
        <div class="cont-3">
          <img src="../../assets/img/solution/img-charts1.png" alt="">
        </div>
      </div>
    </div>
    <div class="bottom-cont">
      <swiper />
    </div>
  </div>
</template>

<script>
import swiper from '../../components/Swiper'
import tit from '../../components/Title1'
export default {
  name: "Home",
  data(){
    return {
      titleList:[
        ['工地总览','GONGDIZONGLAN'],
        ['项目信息','XIANGMUXINXI'],
        ['机械设备监控','JIANKONG'],
        ['报警信息','BAOJINXINXI'],
        ['进度汇总','JINGDUHUIZONG'],
        ['质量问题分析','ZHILIANGWENTI'],
        ['安全隐患分类','ANQUANYINGHUAN'],
      ],
      areaInfo:[
        {name:'参建单位',num:'48',img:require('../../assets/img/solution/img_pic1.png')},
        {name:'现场人员',num:'3000',img:require('../../assets/img/solution/img_pic2.png')},
        {name:'作业点',num:'6000',img:require('../../assets/img/solution/img_pic3.png')},
        {name:'大型机具',num:'56',img:require('../../assets/img/solution/img_pic4.png')},
      ],
      labelList:[
        ['divLabel39','divLabel40','divLabel45'],
        ['divLabel41','divLabel42'],
        ['divLabel43'],
      ]
    }
  },
  components:{
    tit,
    swiper
  },
  computed:{
    isLoad(){
      return this.$store.state.isLoad;
    },
    modelLayers(){
      return this.$store.state.modelLayers
    }
  },
  mounted(){
    let   _this = this;
    let timer = setInterval(function(){
      if(_this.isLoad){
        _this.addLabel()
        clearInterval(timer)
        _this.$store.commit('setCarmeInfo', [-2584422.8344191127, 4467188.124360572, 3763429.7334714527, 22.22901779436363, -62.28972732760065, 0.11533320169682076])
      }
    },1000)
  },
  methods:{
    addLabel(){
      let labelList = ['divLabel11','divLabel3','divLabel6','divLabel44'];
      let data = {
        list:labelList,
        id:0
      }
      this.$store.commit('addDivLabel',data)
    },
    //点击在建，待建，完工对应的事件
    showLabel(i){
      

      this.$store.commit('moveLabel')
      let data = {
        list:this.labelList[i],
        id:0
      }
      this.$store.commit('addDivLabel',data)
    }
  },
  destroyed(){
    this.$store.commit('moveLabel')
    this.$store.commit('destroy')
  }
};
</script>
<style scoped>
.home{
  position: relative;
}
.left-cont{
  position: fixed;
  top: 4.35rem;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: 19.5rem;
  background: linear-gradient(90deg, rgba(0, 10, 50, 100%) 0%, rgba(0, 10, 50, 0) 100%);
  box-sizing: border-box;
  padding-top: 1.8rem;
  padding-left: 1.05rem;
}
.titile-cont{
  margin-bottom: 1rem;
}
.area-info{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: 7.55rem;
}
.area-item {
  display: flex;
  justify-content: space-around;
  /* align-items: center; */
  margin-bottom: 1.3rem;
}
.area-item img{
  width: 2.2rem;
  height: 2.2rem;
}
.area-item>div{
  width: 4.95rem;
  box-sizing: border-box;
  padding-left: 0.7rem;
  padding-top: 0.2rem;
}
.area-item p{
  color: #fff;
  font-size: 0.7rem;
  line-height: 1rem;
  text-align: left;
}
.area-item p.font-15{
  font-size: 1.5rem;
  margin-bottom: 0.2rem;
}
.project-info-cont{
  display: flex;
  height: 7.1rem;
}
.project-info-cont>span{
  width: 5rem;
  height: 5.1rem;
  background: url('../../assets/img/solution/bg_yuan.png');
  background-size: 100% 100%;
}
.project-info-cont>span>p{
  width: 100%;
  color: #fff;
  text-align: center;
  font-size: 0.7rem;
  line-height: 0.7rem;
  height: 0.7rem;
}
.project-info-cont>span>p.active{
  font-size: 1.5rem;
  margin-top: 1.6rem;
  height: 1.5rem;
  line-height: 1.5rem;
}
/* 进度条 */
.progress-bar{
  width: 6.4rem;
  height: 5.1rem;
  margin-left: 0.95rem;
}
.progress-bar li{
  margin-bottom: 0.7rem;
  height: 1.1rem;
}
.progress-bar li:hover{
  cursor: pointer;
}
.progress-bar li:last-of-type{
  margin-bottom: 0;
}
.progress-info-cont{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.progress-info-cont span{
  color: #fff;
  font-size: 0.7rem;
}
.progress-info-cont span:last-of-type{
  font-size: 1rem;
}
.progress-info-detail{
  width: 6.4rem;
  height: 0.2rem;
  background: rgba(255,255,255,0.2);
}

.progress-info-detail span{
  width: 0.9rem;
  height: 0.2rem;
  display: block;
  background: #1861F5;
}

.progress-bar li:nth-of-type(2) .progress-info-detail span{
  width: 5.4rem;
  height: 0.2rem;
  display: block;
  background: linear-gradient(90deg, #1861F5 0%, #01E7FC 100%);;
}
.sets-cont{
  display: flex;
  flex-wrap: wrap;
  margin-left: 1.3rem;
  width: 10rem;
}
.sets-cont .sets-item{
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 1.8rem;
  margin-bottom: 0.8rem;
}
.sets-cont .sets-item p{
  color: #fff;
  font-size: 0.7rem;
  height: 0.7rem;
  line-height: 0.7rem;
}
.sets-cont .sets-item p.active{
  font-size: 1rem;
  height: 1rem;
  line-height: 1rem;
}

.warning-detail li{
  width: 12.9rem;
  height: 2.7rem;

}

.warning-detail li:nth-of-type(2n+1){
  background: rgba(24, 97, 245, 0.2);
}
.warning-detail li{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.warning-detail li:first-of-type{
  background: url('../../assets/img/solution/bg_warnning.png');
  background-size: 100% 100%;
}
.warning-detail .warning-info p{
  font-size: 0.7rem;
  height: 0.7rem;
  line-height: 0.7rem;
  color: #fff;
  margin-left: 0.2rem;
  text-align: left;
}
.warning-detail .warning-info p:first-of-type{
  font-size: 0.6rem;
  height: 0.6rem;
  line-height: 0.6rem;
  margin-bottom: 0.2rem;
  color: #01E7FC;
}
.warning-detail li:first-of-type .warning-info p:first-of-type{
  color: #fff;
}

.icon-warning{
  width: 1.55rem;
  height: 1.35rem;
  background: url('../../assets/img/solution/icon_warnning.png');
  background-size: 100% 100%;
  margin-right: 0.4rem;
}
.right-cont{
  position: fixed;
  top:4.35rem;
  bottom: 0;
  right:0;
  width: 19rem;
  box-sizing: border-box;
  padding: 1.55rem 1rem 5.51rem;
  background: linear-gradient(to right, rgba(0,10,50,0) 0%,rgba(0,10,50,60%) 100%);
  z-index: 2;
}
.cont-1{
  height: 16.8rem;
}
.cont-1 img{
  width: 12.85rem;
  height: 3.1rem;
  margin-bottom: 0.85rem;
}
.cont-2{
  height: 11.6rem;
}
.cont-2 img{
  width: 13rem;
  height: 10rem;
}
.cont-3 img{
  width: 12.59rem;
  height: 9.48rem;
}
.bottom-cont{
  left:20.3rem;
  right:20.4rem;
  bottom: 0;
  height: 7.75rem;
  position: fixed;
  z-index: 11;
}
.font-10{
  font-size: 1rem;
}
.font-7{
  font-size: 0.7rem;
}
.family-num{
  font-family: Num;
}
</style>
