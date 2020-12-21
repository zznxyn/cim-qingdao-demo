<template>
  <div class="home">
    <div class="eg-cont">
      <img :src="currentEg" alt="">
    </div>
    <div class="left-side">
      <div class="side-cont" v-if="!showTimeLine">
        <div class="side-cont-tab"  v-if="!showManage">
          <div class="side-tab-item" v-for="(item,index) in tabList" :key="item.id" @click="chooseTab(index)" :class="{'active':item.active}">
            <em :class="item.icon"></em>
            <span>{{item.name}}</span>
          </div>
        </div>
        <div class="manage-intro-cont" v-if="showManage">
          <manage :title="introTitle" :detail="introDetail"></manage>
        </div>
        <div class="side-cont-detail" v-if="!showManage">
          <div class="city-plan">
            <tit :title="titleList[0]"></tit>
            <div class="city-plan-detail">
              <ul>
                <li class="plan-node" v-for="(item,index) in treeData[0]" :key="index" :class="{'active':item.active}" @click="expandTree(0,index)">
                  <div class="node-cont">
                    <div class="icon-collect">
                      <em></em>
                    </div>
                    <span>{{item.name}}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="city-plan">
            <tit :title="titleList[1]"></tit>
            <div class="city-plan-detail">
              <ul>
                <li class="plan-node" v-for="(item,index) in treeData[1]" :key="index" :class="{'active':item.active}" @click="expandTree(1,index)">
                  <div class="node-cont">
                    <div class="icon-collect">
                      <em></em>
                    </div>
                    <span>{{item.name}}</span>
                  </div>
                  <ul class="childe-cont" v-if="item.active">
                    <li class="children" v-for="(item1,index1) in item.children" :key="index1" :class="{'active':item1.active}" @click.stop="checkTreeNode(1,index,index1)">
                      <em></em>
                      <span>{{item1.name}}</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="time-line-cont" v-if="showTimeLine">
        <div class="time-title">
          <em class="icon-time"></em>
          <span>时间推演</span>
          <em class="icon-close" @click="closeTimeLine"></em>
        </div>
        <div class="time-line-detail">
          <div class="time-line-item" v-for="(item,index) in timeLineData" :key="index" :class="{'active':item.active}">
            <p>{{item.value}}</p>
            <div class="time-bg-dot"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="right-side">
      <div class="right-item">
        <other :name="titleOtherList[0]"></other>
        <div class="side-item-cont">
          <div class="side-top">
            <div :class="{'active':!item.active}" @click="showShp(index)" v-for="(item,index) in otherPro" :key="index">
              <span>{{item.num}}</span>
              <p>{{item.name}}</p>
            </div>
            <!-- <div @click="showShp(1)">
              <span>2</span>
              <p>供而未用项目</p>
            </div> -->
          </div>
          <div class="side-bottom">
            <div class="bottom-item" v-for="(item,index) in progremList" :key="index" @click="proTime(index)" :class="{'active':item.active}" :style="{'border-color':item.border}">
              <p>{{item.num}}</p>
              <p>{{item.name}}</p>
              <em class="bottom-item-dot" :class="item.bg"></em>
            </div>
          </div>
        </div>
      </div>
      <div class="item1">
        <other :name="titleOtherList[1]"></other>
        <div id="charts1" class="charts"></div>
      </div>
      <div class="item2">
        <other :name="titleOtherList[2]"></other>
        <div id="charts2" class="charts"></div>
      </div>
    </div>
  </div>
  
</template>

<script>
/* eslint-disable */
import title from '../../components/Title'
import otherTit from "../../components/Title1"
import manage from '../../components/ManageIntro'
export default {
  name: "Home",
  data(){
    return {
      shpLine1:null,  
      shpLine2:null,  
      tabList:[
        {
          name:'距离测量',
          id:1,
          icon:'icon-distance',
          active:false
        },
        {
          name:'面积测量',
          id:2,
          icon:'icon-area',
          active:false
        },
        {
          name:'时间推演',
          id:3,
          icon:'icon-time',
          active:false
        }
      ],
      titleList:['城市规划','基础设施'],
      treeData:[
        [
          {
            name:'总体规划',
            show:false,
            active:false,
            children:[]
          },{
            name:'重点产业规划',
            active:false,
            children:[]
          },{
            name:'功能片区规划',
            active:false,
            children:[]
          },{
            name:'大沽河生态景观带',
            active:false,
            children:[]
          },{
            name:'胶济铁路生态廊道',
            active:false,
            children:[]
          }
        ],
        [
          {
            name:'地下管线数据',
            show:false,
            active:false,
            children:[
              {
                name:'中国移动管线',
                active:false
              },
              {
                name:'中国联通管线',
                active:false
              },{
                name:'中国铁通管线',
                active:false
              },
              {
                name:'供电通讯管线',
                active:false
              },{
                name:'供电管线',
                active:false
              },
              {
                name:'路灯管线',
                active:false
              },{
                name:'有线电视管线',
                active:false
              },
              {
                name:'天然气管线',
                active:false
              },{
                name:'热水管线',
                active:false
              },
              {
                name:'饮用水管线',
                active:false
              },{
                name:'污水管线',
                active:false
              },
              {
                name:'雨水管线',
                active:false
              }
            ]
          },{
            name:'园林公园数据',
            active:false,
            children:[]
          },{
            name:'河湖水系数据',
            active:false,
            children:[]
          },{
            name:'道路灯杆数据',
            active:false,
            children:[]
          }
        ],
      ],
      titleOtherList:[['项目信息',''],['招商指数',''],['项目建设指数','']],
      progremList:[
        {name:'项目谈判',color:'col-1',num:3,bg:'bg-1',active:false,border:'#94F260'},
        {name:'项目签约',color:'col-2',num:6,bg:'bg-2',active:false,border:'#F437CA'},
        {name:'土地出让',color:'col-3',num:2,bg:'bg-3',active:false,border:'#FF862F'},
        {name:'规划设计',color:'col-4',num:2,bg:'bg-4',active:false,border:'#FF3F3F'},
        {name:'工程建设',color:'col-5',num:2,bg:'bg-5',active:false,border:'#FDFF3F'},
        {name:'项目投产',color:'col-6',num:1,bg:'bg-6',active:false,border:'#01FCE7'}
      ],
      timeLineData:[
        {
          value:2020,
          active:true
        },
        {
          value:2021,
          active:false
        },
        {
          value:2022,
          active:false
        },
        {
          value:2023,
          active:false
        },
        {
          value:2024,
          active:false
        },
        {
          value:2025,
          active:false
        }
      ],
      introTitle:'中远海运空运山东物流总部基地',
      introDetail:[
        {value:'中远海运空运山东物流总部基地项目'},
        {value:'由中国远洋海运集团有限公司投资建设,总占地65亩，总投资5.47亿元，总建筑面积4.8万平方米，主要建设双层坡道高标库、办公楼及配套用房，预留冷链库。项目建成后,将依托青岛胶东国际机场区域性航空枢纽的优势,大力发展海、陆、空、铁、公多式联运、仓储物流、电商、快件、供应链管理等业务,打造中远海运空运山东地区航空物流综合基地。'}
      ],
      chart1:null,
      showTimeLine:false,
      chart2:null,
      egList:[require('../../assets/img/img_eg_1.png'),require('../../assets/img/img_eg_2.png'),require('../../assets/img/img_eg_3.png')],
      currentEg:null,
      otherPro:[
        {
          name:'批而未供项目',
          num:1,
          active:false
        },
        {
          name:'供而未用项目',
          num:2,
          active:false},
      ],
      labelList:[
        ['divLabel1','divLabel2','divLabel3','divLabel4','divLabel5','divLabel6','divLabel7','divLabel8','divLabel9','divLabel10','divLabel11','divLabel12','divLabel13','divLabel14','divLabel15','divLabel16'],
        ['divLabel38'],
        ['divLabel36','divLabel37'],
        ['divLabel1','divLabel6','divLabel9'],
        ['divLabel11','divLabel12','divLabel13','divLabel14','divLabel15','divLabel16'],
        ['divLabel2','divLabel3'],
        ['divLabel7','divLabel8'],
        ['divLabel10','divLabel5'],
        ['divLabel4'],
      ],
    }
  },
  components:{
    tit:title,
    other:otherTit,
    manage
  },
  computed:{
    showList(){
      return this.$store.state.showList
    },
    isLoad(){
      return this.$store.state.isLoad
    },
    showManage(){
      return this.$store.state.showManage
    },
  },
  mounted(){
    this.$store.commit('destroy');
    this.initChart('charts1',this.chart1);
    this.initChart('charts2',this.chart2);
    this.$store.commit('moveLabel')
    let _this = this;
    //显示标签
    setTimeout(function(){
      _this.showLabel(0);
    },2500)
    let timer = setInterval(function(){
      if(_this.isLoad){
          // 视角定位
        let camiraInfo = [-2593155.552924926, 4456399.72566925, 3754901.2473294754, 314.215475171983, -25.17359875425932, 359.8546631627681]
        _this.$store.commit('setCarmeInfo', camiraInfo);
        clearInterval(timer)
      }
    },1000)
  },
  methods:{
    //切换tab
    chooseTab(i){
      this.tabList.forEach(item=>{
        item.active = false;
      })
      this.tabList[i].active = true;
      if(i==2){
        this.showTimeLine = true
      }
    },
    //项目信息项目不同阶段点击事件
    proTime(i){
      this.otherPro.forEach(item=>[
        item.active = false
      ])
      if(this.progremList[i].active){
        this.$store.commit('moveLabel');
        this.progremList.forEach(item=>{
          item.active = false;
        })
        this.$nextTick(function(){
          this.showLabel(0)
        })
      }else{
        this.$store.commit('moveLabel');
        this.progremList.forEach(item=>{
          item.active = false;
        })
        this.progremList[i].active = true;
        this.$nextTick(function(){
          this.showLabel(i+3)
        })
      }
    },
    showLabel(i){
      let data = {
        list:this.labelList[i],
        id:0
      }
      this.$store.commit('addDivLabel',data)
    }, 
    //关闭时间轴
    closeTimeLine(){
      this.showTimeLine = false;
      this.tabList.forEach(item=>{
        item.active = false;
      })
    },
    //展开树  i——1级目录，j——2级目录
    expandTree(i,j){
      //城市规划点击事件
      if(i==0){
        this.$store.commit('destoryOther');
        this.treeData[0].forEach(item=>{
          item.active = false;
        })
        this.treeData[0][j].active = true;
        for(let x=0;x<this.showList[j].list.length;x++){
          let data = {
            shpUrl: this.showList[j].list[x].shpurl,
            color:this.showList[j].list[x].color,
            lineWidth:this.showList[j].list[x].lineWidth,
            styleField: this.showList[j].list[x].styleField,
            colorTables: this.showList[j].list[x].colorTables,
            id:this.showList[j].list[x].id,
          }
          if(!data.lineWidth){
              this.$store.commit('addShp',data)
          }else{
              this.$store.commit('addGeoJson',data)
          }
        }
        if(j<3){
          this.currentEg = this.egList[j]
        }else{
          this.currentEg = ''
        }
      }
      //基础设施
      if(i==1){
        this.treeData[i][j].active = !this.treeData[i][j].active;
        //飞到核心产业区
        let cameraInfo = [-2582596.6553366845,4460475.894301395,3764330.423771431,3.56222,-59.99989794490947,359.9999999999998]
        this.$store.commit('setCarmeInfo',cameraInfo)
      }
    },
    //选中树节点
    checkTreeNode(i,j,z){
      this.treeData[i][j].children[z].active = !this.treeData[i][j].children[z].active;
      if(this.treeData[i][j].children[z].active){
        let data = {
          shpUrl: this.showList[5].list[z].shpurl,
          styleField: this.showList[5].list[z].styleField,
          colorTables: this.showList[5].list[z].colorTables,
          id:this.showList[5].list[z].id
        }
        this.$store.commit('addShp',data)
      }else{
        let id = this.showList[5].list[z].id;
        this.$store.commit('destroyOne',id);
      }
    },
    //显示供而未用
    showShp(i){
      this.$store.commit('moveLabel')
      this.progremList.forEach(item=>{
        item.active = false
      })
      let label = [['divLabel38'],['divLabel36','divLabel37']];
      let data = {
        list:label[i],
        id:0
      }
      if(this.otherPro[i].active){
        this.otherPro.forEach(item=>{
          item.active = false
        })
        this.showLabel(0);
      }else{
        this.otherPro.forEach(item=>{
          item.active = false
        })
        this.otherPro[i].active = true;
        if(i==0){
          this.$store.commit('moveOneLabel',['divLabel36','divLabel37'])
        }else{
          this.$store.commit('moveOneLabel',['divLabel38'])
        }
        this.$store.commit('addDivLabel',data)
      }
    },
    //添加供而未用的项目shp
    addOtherShp(i){
      let shpList = [
        {
          shpUrl: '/BcEngineX/shp/批而未供项目.shp',
          styleField: 'OBJECTID_1',
          colorTables: {
            "5":[34 / 255,255 / 255,180 / 255, 1],
            "45":[34 / 255,255 / 255,180 / 255, 1],
            "363":[1 / 255,231 / 255,252 / 255, 1]
          },
          id:'333'
        },
        {
          shpUrl: '/BcEngineX/shp/供而未用项目_1024.shp',
          styleField: 'OBJECTID_1',
          colorTables: {
            "5":[34 / 255,255 / 255,180 / 255, 1],
            "45":[34 / 255,255 / 255,180 / 255, 1],
            "363":[1 / 255,231 / 255,252 / 255, 1]
          },
          id:'333'
        }
      ];
      this.$store.commit('addShp',shpList[i])
    },
    initChart(dom,context){
      context = this.$echarts.init(document.getElementById(dom));
      context.setOption({
        legend: {
          data:['招商引资规模','投资落地规模'],
          textStyle:{
            color:"#FFF",
            align:'middle'
          },
          itemWidth:5,
          itemHeight:5
        },
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
          name:'亿',
          nameGap:4,
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
    this.$store.commit('closeManage');
    this.$store.commit('destroy');
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
  z-index: 2147483547;
}
.side-cont-tab{
  position: absolute;
  top: 0;
  left: 0;
  width: 16.6rem;
  height: 2.8rem;
  background: url('../../assets/img/bg/bg_total_left1.png');
  background-size: 100% 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.time-line-cont{
  position: relative;
  z-index: 10;
}
.time-title{
  width: 7.3rem;
  height: 2.8rem;
  background: url('../../assets/img/bg/bg_time_pro.png');
  background-size: 100% 100%;
  display: flex;
  align-items: center;
}
.time-title .icon-time{
  width: 0.7rem;
  height: 0.75rem;
  background: url('../../assets/img/icon/icon_time_line_active.png');
  background-size: 100% 100%;
  margin: 0 0.3rem 0 0.9rem;
}
.time-title span{
  font-size: 0.7rem;
  color: #00E6FF;
  line-height: 2.8rem;
}
.time-title .icon-close{
  width: 0.75rem;
  height: 0.75rem;
  background: url('../../assets/img/icon/icon_time_close.png');
  background-size: 100% 100%;
  margin-left: 1rem;
}
.time-title .icon-close:hover{
  cursor: pointer;
}

.time-line-cont .time-line-detail{
  width: 4.5rem;
  height: 27rem;
  background: url('../../assets/img/bg/bg_time_line.png');
  background-size: 100% 100%;
  margin-top: 6.15rem;
  margin-left: 0.8rem;
  box-sizing: border-box;
  padding: 0.6rem 0 1.5rem 0;
  /* overflow-y: auto; */
}
.time-line-cont .time-line-detail .time-line-item{
  text-align: center;
}
.time-line-cont .time-line-detail .time-line-item p{
  /* width: 4.35rem; */
  text-align: center;
  color: #fff;
  font-size: 1rem;
  height: 2.48rem;
  padding-right: 0.35rem;
  line-height: 2.48rem;
}
.time-line-cont .time-line-detail .time-line-item.active{
  position: relative;
}
.time-line-cont .time-line-detail .time-line-item.active::after{
  content: '';
  position: absolute;
  width: 1.2rem;
  height: 1.2rem;
  background: url('../../assets/img/icon/icon_current_year.png');
  background-size: 100% 100%;
  top: 0.7rem;
  right: -1.1rem;
}
.time-line-cont .time-line-detail .time-line-item.active p{
  color: #01E7FC;
  font-size: 1.5rem;
  height: 2.65rem;
  line-height: 2.65rem;
}
.time-line-cont .time-line-detail .time-line-item .time-bg-dot{
  width: 0.25rem;
  height: 1.9rem;
  background: url('../../assets/img/bg/bg_time_dot.png');
  background-size: 100% 100%;
  display: inline-block;
  margin-right: 0.1rem;
}
.time-line-cont .time-line-detail .time-line-item:last-of-type .time-bg-dot{
  display: none;
}
.time-line-cont .time-line-detail .time-line-item.active .time-bg-dot{
  background: url('../../assets/img/bg/bg_time_dot_active.png');
  background-size: 100% 100%;
}
.side-tab-item{
  display: flex;
  align-items: center;
  height: 2.8rem;
}
.side-tab-item:first-of-type em{
  width: 1.05rem;
  height: 1rem;
}
.side-tab-item:nth-of-type(2) em{
  width: 0.8rem;
  height: 0.8rem;
}
.side-tab-item:last-of-type em{
  width: 0.7rem;
  height: 0.75rem;
  margin-right: 0.15rem;
}
.side-tab-item span{
  font-size: 0.7rem;
  color: #fff;
  line-height: 2.8rem;
}
.side-tab-item:hover{
  cursor: pointer;
}
.side-tab-item.active span,.side-tab-item:hover span{
  color: #01E7FC;
}
.side-cont-detail{
  position: fixed;
  top:9.8rem;
  bottom: 5.4rem;
  left: 2.45rem;
  width: 16.7rem;
  background: url('../../assets/img/bg/bg_total_left2.png');
  background-size: 100% 100%;
  box-sizing: border-box;
  padding: 1.1rem 0.95rem 1.35rem 1.05rem;
  overflow-y: auto;
}
.city-plan+.city-plan{
  margin-top: 1rem;
}
.side-cont-detail .city-plan-detail{
  width: 14.7rem;
  height: 16.3rem;
  border-color: rgba(81, 231, 255, 0.5);
  border-width: 0px 1px 1px 1px;
  border-style: solid ;
  margin-top: 0.2rem;
  overflow-y: auto;
  box-sizing: border-box;
  padding-left: 0.7rem;
}
.city-plan-detail .node-cont:hover{
  cursor: pointer;
}
.city-plan-detail .plan-node .node-cont{
  display: flex;
  align-items: center;
  height: 1.3rem;
}
.plan-node .node-cont .icon-collect{
  width: 0.4rem;
  height: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.city-plan-detail .plan-node .node-cont .icon-collect>em{
  width: 0rem;
  height: 0rem;
  border-left:0.2rem solid transparent;
  border-top:0.2rem solid transparent;
  border-right:0.2rem solid transparent;
  border-bottom:0.2rem solid #fff;
  transform: rotate(90deg);
}
.city-plan:last-of-type .city-plan-detail .plan-node.active .node-cont .icon-collect>em{
  transform: rotate(180deg);
  margin-top: 0.2rem;
  margin-left: -0.1rem;
}
.city-plan-detail .plan-node.active .node-cont span{
  color: #01E7FC;
}
.city-plan-detail .plan-node .node-cont>span{
  font-size: 0.7rem;
  color: #fff;
}
.plan-node .childe-cont{
  box-sizing: border-box;
  padding: 0.1rem 0;
}
.plan-node .childe-cont .children{
  height: 1.3rem;
  margin-left: 1.4rem;
  display: flex;
  align-items: center;
}
.plan-node .childe-cont .children:hover{
  cursor: pointer;
}
.plan-node .childe-cont .children em{
  width: 0.6rem;
  height: 0.6rem;
  background: rgba(255,255,255,0.5);
  opacity: 0;
  margin-right: 0.2rem;
  border-radius: 50%;
}
.plan-node .childe-cont .children:hover em{
  opacity: 1;
}
.plan-node .childe-cont .children.active em{
  border-radius: 0;
  opacity: 1;
  background: url('../../assets/img/icon/icon_item_check.png');
  background-size: 100% 100%;
}
.plan-node .childe-cont .children span{
  font-size: 0.7rem;
  color: #fff;
}
.childe-cont .children:hover span,.childe-cont .children.active span{
  color: rgba(1, 231, 252, 1);
}

.right-side{
  position: fixed;
  top:4.4rem;
  bottom: 0;
  right:0;
  width: 15rem;
  box-sizing: border-box;
  padding: 1.55rem 1rem 5.51rem;
  background: linear-gradient(to right, rgba(0,10,50,0.2) 0%,rgba(0,10,50,60%) 100%);
  z-index: 2147483547;
  /* linear-gradient(, #000000 0%,#ffffff 100%) */
}
/* .right-side .right-item{

} */
.right-side .right-item .side-item-cont{
  margin-top: 0.8rem;
  margin-bottom: 1.84rem;
}
.right-item .side-item-cont .side-top{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.side-item-cont .side-top>div{
  width: 5.5rem;
  height: 4.25rem;
}
.side-item-cont .side-top>div:hover{
  cursor: pointer;
}
.side-item-cont .side-top>div span{
  font-size: 1.5rem;
  text-align: center;
  line-height: 3.1rem;
  display: inline-block;
  width: 5.2rem;
  height: 3.1rem;
  font-family: Num;
}
.side-item-cont .side-top>div:first-of-type span{
  color: rgba(2, 231, 252, 1);
  background: url('../../assets/img/bg/bg_progrem1.png');
  background-size: 100%;
}
.side-item-cont .side-top>div:last-of-type span{
  color: rgba(34, 255, 180, 1);
  display: block;
  width: 5.2rem;
  height: 3.1rem;
  background: url('../../assets/img/bg/bg_progrem2.png');
  background-size: 100%;
}
.side-item-cont .side-top>div.active span{
  background: url('../../assets/img/bg/bg_none.png');
  background-size: 100% 100%;
  color:#fff;
}
.side-item-cont .side-top>div p{
  font-size: 0.7rem;
  text-align: center;
  font-weight: 500;
  height: 1.2rem;
  line-height: 1.2rem;
  color: #fff;
}

.side-bottom{
  margin-top: 1.2rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.side-bottom .bottom-item{
  width: 4.16rem;
  height: 3rem;
  text-align: center;
  margin-bottom: 1.2rem;
  position: relative;
}
.side-bottom .bottom-item.active{
  border-width: 1px;
  border-style: solid;
  border-radius: 0.5rem;
  /* border-color: none; */
}
.side-bottom .bottom-item:hover{
  cursor: pointer;
}
.side-bottom .bottom-item p{
  text-align: center;
}
.side-bottom .bottom-item p:first-of-type{
  font-size: 1.5rem;
  height: 1.75rem;
  line-height: 1.755rem;
  color: #fff;
  font-family: Num;
  /* margin-bottom: ; */
}
.side-bottom .bottom-item p:last-of-type{
  font-size: 0.7rem;
  height: 0.9rem;
  line-height: 0.9rem;
  color: #fff;
  font-family: Num;
}

.bottom-item-dot{
  width: 0.3rem;
  height: 0.3rem;
  margin-top: 0;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  left: 50%;
  margin-left: -0.15rem;
  bottom:-0.15rem;
}

.charts{
  width: 13rem;
  height: 10.8rem;
  margin-top: 0.8rem;
}



.col-1{
  color: #94F260;
}
.bg-1{
  background: #94F260;
}
.border-1{
  border-color:  #94F260;
}
.col-2{
  color: #F437CA;
}
.bg-2{
  background: #F437CA;
}
.border-2{
  border-color:  #F437CA;
}
.col-3{
  color:#FF862F;
}
.bg-3{
  background:#FF862F;
}
.border-3{
  border-color:  #FF862F;
}
.col-4{
  color: #FF3F3F;
}
.bg-4{
  background: #FF3F3F;
}
.border-4{
  border-color: #FF3F3F;
}
.col-5{
  color: #FDFF3F;
}
.bg-5{
  background: #FDFF3F;
}
.border-5{
  border-color: #FDFF3F;
}
.col-6{
  color: #01FCE7;
}
.bg-6{
  background: #01FCE7;
}
.border-6{
  border-color: #01FCE7;
}
.icon-distance{
  background: url('../../assets/img/icon/icon_distance.png');
  background-size: 100% 100%;
}
.active .icon-distance,.side-tab-item:hover .icon-distance{
  background: url('../../assets/img/icon/icon_distance_active.png');
  background-size: 100% 100%;
}
.icon-area{
  background: url('../../assets/img/icon/icon_area.png');
  background-size: 100% 100%;
}
.active .icon-area,.side-tab-item:hover .icon-area{
  background: url('../../assets/img/icon/icon_area_active.png');
  background-size: 100% 100%;
}
.icon-time{
  background: url('../../assets/img/icon/icon_time_line.png');
  background-size: 100% 100%;
}
.active .icon-time,.side-tab-item:hover .icon-time{
  background: url('../../assets/img/icon/icon_time_line_active.png');
  background-size: 100% 100%;
}

.eg-cont{
  position: fixed;
  bottom:4rem;
  right:16rem;
  z-index: 99;
  width: 6rem;
  /* height: auto; */
}
.eg-cont img{
  width: 6rem;
}
</style>
