<template>
  <div class="home">
    <div class="eg-cont">
      <img src="../../assets/img/img_eg_1.png" alt="">
    </div>
    <div class="left-side">
      <manage v-if="showManage" :detail="introDetail" :title="introTitle"></manage>
    </div>
    <div class="right-side">
      <div class="right-item">
        <other :name="otherTitle[0]"></other>
        <div class="side-item-cont">
          <div class="side-top">
            <div :class="{'active':item.active}" v-for="(item,index) in sideTopList" :key="index" @click="showLabel(index)">
              <div class="ringle-cont" :style="{'border-color':item.border}">
                <span>{{item.num}}</span>
                <p>{{item.name}}</p>
                <em class="dot" :class="item.bg"></em>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right-item">
        <other :name="otherTitle[1]"></other>
        <div class="charts-cont" id="bar-charts">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import tit from '../../components/Title'
import other from '../../components/Title1'
import manageIntro from '../../components/ManageIntro'
export default {
  name: "Home",
  data(){
    return {
      otherTitle:[['项目信息','XIANGMUXINXI'],['项目建设指数','JIANSHEZHISHU']],
      charts:null,
      introTitle:'中远海运空运山东物流总部基地',
      sideTopList:[
        {num:2,name:'立项规划',labelList:['divLabel26','divLabel27'],active:false,bg:'bg-1',border:'#01FCE7'},
        {num:2,name:'工程设计',labelList:['divLabel28','divLabel29'],active:false,bg:'bg-2',border:'#FF862F'},
        {num:3,name:'施工建设',labelList:['divLabel30','divLabel31','divLabel32'],active:false,bg:'bg-3',border:'#93F260'},
        {num:2,name:'竣工验收',labelList:['divLabel11','divLabel33'],active:false,bg:'bg-4',border:'#FDFF3F'},
      ],
      introDetail:[
        {value:'中远海运空运山东物流总部基地项目'},
        {value:'由中国远洋海运集团有限公司投资建设,总占地65亩，总投资5.47亿元，总建筑面积4.8万平方米，主要建设双层坡道高标库、办公楼及配套用房，预留冷链库。项目建成后,将依托青岛胶东国际机场区域性航空枢纽的优势,大力发展海、陆、空、铁、公多式联运、仓储物流、电商、快件、供应链管理等业务,打造中远海运空运山东地区航空物流综合基地。'}
      ],
    }
  },
  components:{
    tit,
    other,
    manage:manageIntro
  },
  computed: {
    showList(){
      return this.$store.state.showList[0].list
    },
    isLoad(){
      return this.$store.state.showList
    },
    showManage(){
      return this.$store.state.showManage
    }
  },
  mounted(){
    this.initCharts();
    // this.$store.commit('moveLabel');
    this.$store.commit('destroy');
    let _this = this;
    let timer = setInterval(function(){
      if(_this.isLoad){
        //飞到指定地点
        let cameraInfo = [-2582596.6553366845,4460475.894301395,3764330.423771431,3.56222,-59.99989794490947,359.9999999999998]
        _this.$store.commit('setCarmeInfo',cameraInfo)
        //添加shp
        for(let i=0;i<_this.showList.length;i++){
          let data = {
            shpUrl: _this.showList[i].shpurl,
            styleField: _this.showList[i].styleField,
            colorTables: _this.showList[i].colorTables,
            id:_this.showList[i].id
          }
          _this.$store.commit('addShp',data)
        }
        
        //添加标签
        let labelList = ['divLabel11','divLabel26','divLabel27','divLabel28','divLabel29','divLabel30','divLabel31','divLabel32','divLabel33'];
        let data1 = {
          list:labelList,
          id:0
        }
        _this.$store.commit('addDivLabel',data1)
        clearInterval(timer)
      }
    },1000)
    
    
  },
  methods:{
    showLabel(i){
      this.$store.commit('moveLabel')
      if(this.sideTopList[i].active){
        this.sideTopList.forEach(item => {
          item.active = false;
        });
        let labelList = ['divLabel11','divLabel26','divLabel27','divLabel28','divLabel29','divLabel30','divLabel31','divLabel32','divLabel33'];
        let data1 = {
          list:labelList,
          id:0
        }
        this.$store.commit('addDivLabel',data1)
      }else{
        this.sideTopList.forEach(item => {
          item.active = false;
        });
        this.sideTopList[i].active = true;
        let data = {
        list:this.sideTopList[i].labelList,
          id:0
        }
        this.$store.commit('addDivLabel',data)
      }
      
    },
    initCharts(){
      this.charts = this.$echarts.init(document.getElementById('bar-charts'));
      this.charts.setOption({
        legend: {
          data:['招商引资规模','投资落地规模'],
          textStyle:{
            color:"#FFF",
            align:'middle'
          },
          itemWidth:10,
          itemHeight:10
        },
        // tooltip: {},
        xAxis: {
          type: 'category',
          data:['1月','2月','3月','4月','5月','6月'],
          show:true,
          color:'#fff',
          boundaryGap:true,
          lineStyle:{
            color:'#fff',
          },
          axisLine:{
            lineStyle:{
              color:'#FFF'
            } 
          },
          axisTick:{
            show:false,
            alignWithLabel:true,
            lineStyle:{
              color:"#FFF",
              splitNumber:6,
              show:true
            }
          },
          axisLabel:{
            color:"#FFF"
          }
        },
        yAxis: {
          lineStyle:{
            color:'#fff',
          },
          max:110,
          name:'亿',
          axisLine:{
            lineStyle:{
              color:'#FFF'
            } 
          },
          splitLine:{
            lineStyle:{
              type:'dashed',
              color:'rgba(255,255,255,0.5)'
            }
          },
          minorTick:{
            splitNumber:4
          },
          axisTick:{
            show:false,
            alignWithLabel:true,
            lineStyle:{
              color:"#FFF",
              show:true
            }
          },
          axisLabel:{
            color:"#FFF"
          }
        },
        series: [
            {type: 'bar',name:'招商引资规模',data:[70,60,58,69,82,65],color:['#0091F7'],barWidth:'20%'},
            {type: 'bar',name:'投资落地规模',data:[53,72,77,46,100,82],color:['#00E856'],barWidth:'20%'},
        ]
      })
    }
  },
  destroyed(){
    this.$store.commit('closeManage')
    this.$store.commit('destroy')
    this.$store.commit('moveLabel')
  }
};
</script>
<style scoped>
.home{
  position: relative;
}
.left-side{
  position: absolute;
  top: 0;
  bottom: 5.6rem;
  left: 2.45rem;
  /* z-index: 10; */
}
.right-side{
  position: fixed;
  top:4.4rem;
  bottom: 0;
  right:0;
  width: 15rem;
  box-sizing: border-box;
  padding: 1.55rem 1rem 5.51rem;
  background: linear-gradient(to right, rgba(0,10,50,0.4) 0%,rgba(0,10,50,50%) 100%);
  /* z-index: 10; */
  z-index: 2147483547;
}
.right-side .right-item .side-item-cont{
  margin-top: 0.8rem;
  margin-bottom: 1.84rem;
}
.right-side .right-item:last-of-type{
  margin-top: 1.06rem;
}
.right-item .side-item-cont .side-top{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
}
.side-item-cont .side-top>div{
  width: 5.4rem;
  height: 5.4rem;
  margin-bottom: 0.9rem;
  background: url('../../assets/img/solution/bg_solution_item.png');
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.side-item-cont .side-top>div .ringle-cont{
  width: 3.4rem;
  height: 3.4rem;
  position:relative;
  border-radius: 50%;
}
.side-item-cont .side-top>div.active .ringle-cont{
  border-width: 2px;
  border-style: solid;
  border-color: none;
}
.side-item-cont .side-top>div:hover{
  cursor: pointer;
}

.ringle-cont span{
  padding-top: 0.2rem;
  font-size: 1.5rem;
  text-align: center;
  line-height: 1.5rem;
  height: 1.5rem;
  display: block;
  font-family: Num;
  color: #FFF;
}
.ringle-cont p{
  font-size: 0.6rem;
  height: 0.6rem;
  line-height: 0.6rem;
  color: rgba(255, 255, 255, 0.5);
  padding-top:0.3rem;
  margin-bottom: 0.4rem;
}
.dot{
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
  display: block;
  position: absolute;
  left:50%;
  margin-left: -0.15rem;
  bottom: 0.45rem;
}
.bg-1{
  background: #01FCE7;
}
.bg-2{
  background: #FF862F;
}
.bg-3{
  background: #93F260;
}
.bg-4{
  background: #FDFF3F;
}

.charts-cont{
  width: 13rem;
  height: 10.8rem;
  margin-top: 0.8rem;
}
.eg-cont{
  position: fixed;
  bottom:4rem;
  right:16rem;
  z-index: 99;
  width: 6rem;
}
.eg-cont img{
  width: 6rem;
}
</style>