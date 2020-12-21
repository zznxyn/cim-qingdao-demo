<template>
  <div class="container">
    <div class="set-container" :class="{'active':id==7}">
        <div class="top-container">
            <div class="tab-menu">
                <div v-for="(item,index) in tabMenu" :key="index" :class="{'active':item.active}"
                    @click="menuTab(index)">{{item.name}}</div>
            </div>
        </div>
        <div class="data-analyze-cont" v-show="id==7">
            <div class="analyze-table-cont" :class="{'active':id==7}">
                <tableComp :id="id" :showBg="showBg"/>
            </div>
            <div class="chart-cont">
                <p class="chart-name">载物电梯库存趋势</p>
                <select class="select-cont" name="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <div class="charts" id="charts">

                </div>
            </div>
        </div>
        <div class="set-cont" v-if="id!=7" :class="{'height':expand}">
            <div class="table-title">
                <span class="table-name">
                    {{tableName}}
                </span>
                <span class="table-tool">
                    <em class="icon-zoom" @click="expandTable"></em>
                    <em class="icon-close"></em>
                </span>
            </div>
            <div class="normal-table" v-if="id!=8">
                <tableComp :id="id" @openDialog="openDialog" @openRepaireDialog="openRepaireDialog" @flylocation="flylocation"/>
            </div>
            <div class="ser-manage-cont" v-if="id==8">
                <div class="tree-table">
                    <tableComp :id="id" :showBg="showBg"/>
                </div>
                <div class="set-detail-cont">
                    <tableComp :id="id+1" :showBg="showBg" 
                                :height="expand"
                                @openDialog="openDialog"
                                @openSetDialog="openSetDialog"
                                @flylocation="flylocation"
                            />
                </div>
            </div>
        </div>
    </div>
    <div class="dialog-cont" v-if="modelShow1" @mousedown="drag" id="dialog">
        <div class="dialog-bg"></div>
        <span class="dialog-close" @click="closeModel(0)"></span>
        <div class="dialog-inner-cont">
            <p class="dialog-title">
                <em></em>
                <span>{{currentDialog.name}}</span>
            </p>
            <div class="dialog-detail">
                <div class="dialog-item" v-for="(item,index) in currentDialog.innerList" :key="index">
                    <span>{{item.name}}:</span>
                    <select v-if="item.type=='select'" name="" id="">
                        <option value="">请选择</option>
                    </select>
                    <input v-else-if="item.type=='input'" type="text" placeholder="请输入">
                    <div v-else class="picker-cont">
                        <a-config-provider :locale="zhCN">
                            <a-date-picker :show-time="{ format: 'HH:mm' }" format="YYYY-MM-DD HH:mm"
                                @change="dateChange" @ok="onOk" />

                        </a-config-provider>
                    </div>

                </div>
            </div>


            <div class="dialog-other-cont">
                <div class="folder-upload-cont" v-if="currentDialog.showOther">
                    <span>附件:</span>
                    <em>点击上传</em>
                </div>
                <p v-if="currentDialog.showOther">只能上传jpg/png/pdf/world文件，且大小不超过5M</p>
                <ul v-if="currentDialog.showOther">
                    <li>
                        <div>
                            <em class="icon-pic"></em>
                            <span>维修设备构造图.pdf</span>
                        </div>
                        <em class="icon-folder-close"></em>
                    </li>
                    <li>
                        <div>
                            <em class="icon-pic"></em>
                            <span>维修设备构造图.pdf</span>
                        </div>
                        <em class="icon-folder-close"></em>
                    </li>
                    <li>
                        <div>
                            <em class="icon-pic"></em>
                            <span>维修设备构造图.pdf</span>
                        </div>
                        <em class="icon-folder-close"></em>
                    </li>
                    <li>
                        <div>
                            <em class="icon-pic"></em>
                            <span>维修设备构造图.pdf</span>
                        </div>
                        <em class="icon-folder-close"></em>
                    </li>
                </ul>
                <div class="btn-cont">
                    <span class="active">取消</span>
                    <span>确定 </span>
                </div>
            </div>
        </div>
    </div>
    <div class="dialog-cont" @mousedown="drag" id="dialog1" v-if="modelShow2">
        <div class="dialog-bg"></div>
        <span class="dialog-close" @click="closeModel(1)"></span>
        <div class="dialog-inner-cont">
            <p class="dialog-title">
                <em></em>
                <span>维修工单详情</span>
            </p>
            <div class="dialog-detail">
                <div class="dialog-item active">
                    <span>设备名称:</span>
                    <span>检票阀门</span>
                </div>
                <div class="dialog-item active">
                    <span>规格型号:</span>
                    <span>Wwer-21</span>
                </div>
                <div class="dialog-item active">
                    <span>安装位置:</span>
                    <span>2A入口</span>
                </div>
                <div class="dialog-item active">
                    <span>故障类型:</span>
                    <span>设备故障</span>
                </div>
                <div class="dialog-item active">
                    <span>班组:</span>
                    <span>5班</span>
                </div>
                <div class="dialog-item active">
                    <span>计划完成时间:</span>
                    <span>2020-06-12</span>
                </div>
                <div class="dialog-item active">
                    <span>故障描述:</span>
                    <span>大门松动</span>
                </div>
            </div>


            <div class="dialog-other-cont">
                <div class="btn-cont">
                    <span>确定 </span>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
import tableComp from "../../components/Table";
import echart from 'echarts'
export default {
  name: "Set",
  data() {
    return {
      zhCN,
      id: 5,
      showBg:false,
      expand:false,
      tabMenu: [
        {
          id: 5,
          name: "维修管理",
          active: true
        },
        {
          id: 6,
          name: "工单管理",
          active: false
        },
        {
          id: 8,
          name: "设备管理",
          active: false
        },
        {
          id: 7,
          name: "数据分析",
          active: false
        }
      ],
      dialogData:[
          //维修计划
          {
              showOther:true,
              name:'维修计划',
              innerList:[
                  {
                      name:'设备名称',
                      type:'select'
                  },
                  {
                      name:'故障类型',
                      type:'select'
                  },
                  {
                      name:'故障级别',
                      type:'select'
                  },
                  {
                      name:'故障描述',
                      type:'input'
                  },
                  {
                      name:'选择日期',
                      type:'picker'
                  },
              ]  
          },
          {   
              name:'设备管理',
              showOther:false,
              innerList:[
                  {
                      name:'设备名称',
                      type:'input'
                  },
                  {
                      name:'故障型号',
                      type:'input'
                  },
                  {
                      name:'安装位置',
                      type:'input'
                  },
                  {
                      name:'设备类型',
                      type:'select'
                  },
              ]
          }
      ],
      currentDialog:{},//当前弹窗内容
      charts:null,
      modelShow1:false,
      modelShow2:false
    };
  },
  computed: {
    tableName(){
        let name = '';
        for(let i=0;i<this.tabMenu.length;i++){
            if(this.tabMenu[i].active){
                name = this.tabMenu[i].name 
            }
        }
        return name;
    }
  },
  components: {
    tableComp
  },
  mounted(){
    //   let _this = this;
    //   let timer = setInterval(function(){
    //       if(_this.$store.state.scene){
    //           _this.$store.commit('getPoint',5)
    //           clearInterval(timer)
    //       } 
    //   },1000)
  },
  methods: {
    menuTab(i) {
      this.tabMenu.forEach(item => {
        item.active = false;
      });
      this.tabMenu[i].active = true;
      this.id = this.tabMenu[i].id;
      if(this.id==7||this.id==8){
          this.initCharts()
          this.showBg = false;
      }else{
          this.showBg = true;
      }
    //   this.$store.commit('getCarmeInfo')
    },
    expandTable(){
        this.expand = !this.expand
    },
    initCharts(){
        this.charts = this.$echarts.init(document.getElementById('charts'));
        this.charts.setOption({
            legend: {
                data: ['当前库存', '满足率'],
                textStyle:{
                    color:"#FFF",
                    align:'middle'
                },
                itemWidth:10,
                itemHeight:10
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'item',
                }
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                    axisPointer: {
                        type: 'shadow'
                    },
                    color:'#fff',
                    boundaryGap:true,
                    lineStyle:{
                        color:'#979797',
                    },
                    axisLine:{
                        lineStyle:{
                        color:'#979797'
                        } 
                    },
                    axisTick:{
                        show:false,
                        alignWithLabel:true,
                        lineStyle:{
                        color:"#979797",
                        splitNumber:6,
                        show:true
                        }
                    },
                    axisLabel:{
                        color:"#979797"
                    }
                }
            ],
            yAxis: [
                
                {
                    type: 'value',
                    name: '水量',
                    min: 0,
                    max: 250,
                    interval: 50,
                    axisLabel: {
                        formatter: '{value}'
                    },
                    lineStyle:{
                        color:'#979797',
                    },
                    // max:110,
                    name:'库存/个',
                    axisLine:{
                        lineStyle:{
                            color:'#979797'
                        } 
                    },
                    splitLine:{
                        lineStyle:{
                            type:'solid',
                            color:'#3F4859'
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
                },
                {
                    type: 'value',
                    name: '温度',
                    min: 0,
                    max: 25,
                    interval: 5,
                    axisLabel: {
                        formatter: '{value}'
                    },
                    lineStyle:{
                        color:'#979797',
                    },
                    name:'库存/个',
                    axisLine:{
                        lineStyle:{
                            color:'#979797'
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
                }
            ],
            series: [
                {
                    name: '当前库存',
                    type: 'bar',
                    color:new echart.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: "#01E7FC" },
                        { offset: 1, color: "#1861F5" },
                    ]),
                    barWidth:'30%',
                    data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                },
                {
                    name: '满足率',
                    type: 'line',
                    yAxisIndex: 1,
                    color:['#50FFE4'],
                    data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                }
            ]
        })
    },

    // 拖拽
    drag(e){
        let odiv;
        if(this.modelShow1){
            odiv = document.getElementById('dialog')
        }else{
            odiv = document.getElementById('dialog1')
        }
        let innerX = e.clientX - odiv.offsetLeft;
        let innerY = e.clientY - odiv.offsetTop;
        document.onmousemove = (e)=>{
            let left = e.clientX - innerX;  
            let top = e.clientY - innerY;
            odiv.style.left = left + 'px';
            odiv.style.top = top + 'px';
        };
        document.onmouseup = () => {
            document.onmousemove = null;
            document.onmouseup = null;
        };
    },
    //打开弹窗
    openDialog(i,j){
        if(j==5||j==9){
            if(i==0){
                this.modelShow1 = true;
            }
            if(j==5){
                this.currentDialog = this.dialogData[0]
            }else{
                this.currentDialog = this.dialogData[1]
            }
        }else{
            this.modelShow2 = true;
        }
    },
    //设备编辑
    openSetDialog(){
        this.modelShow1 = true;
        this.currentDialog = this.dialogData[1]
    },
    //维修详情
    openRepaireDialog(){
        this.currentDialog = this.dialogData[0]
        this.modelShow1 = true;
    },
    //关闭弹窗
    closeModel(i){
        if(i==0){
            this.modelShow1 = false
        }else{
            this.modelShow2 = false;
        }
    },
    // 定位
    flylocation() {
        let camiraInfo = [-2583568.517839574, 4453690.393966321, 3758144.4983768584, 4.579998741307465e-13, -
            60.000038135445045, 359.9999999999995
        ];
        this.$store.commit('setCarmeInfo', camiraInfo);
    }
  }
};
</script>

<style>
.container {
  position: absolute;
  width: 100%;
}

.set-container.active{
    background: linear-gradient(180deg, rgba(0, 10, 50, 0.6) 0%, rgba(0, 10, 50, 0.3) 100%);
    height: 49.05rem;
    position: fixed;
    z-index: 99;
    top: 4.95rem;
    bottom: 0;
    left: 0;
    right: 0;
    box-sizing: border-box;
    padding-top: 4.45rem;
}
.set-cont {
  position: fixed;
  bottom: 2.15rem;
  height: 18.25rem;
  left: 0;
  right: 0;
  z-index: 2147483547;
}
.set-cont.height{
    height: 38.25rem;
}
.normal-table{
    box-sizing: border-box;
}
.top-container {
    height: 5rem;
    position: fixed;
    left: 35.2rem;
    right: 35.8rem;
    top: 6.05rem;
    z-index: 2147483547;
}
.tab-menu {
  width: 100%;
  height: 2.55rem;
  background: url("../../assets/img/operationmethods/1-3.png");
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.tab-menu div {
  font-size: 0.8rem;
  font-weight: 400;
  color: #ffffff;
  width: 4.55rem;
  height: 1.15rem;
  cursor: pointer;
}

.tab-menu div.active {
  background: url("../../assets/img/operationmethods/1-4.png");
  background-size: 100% 100%;
  color: #01e7fc;
}
.table-title{
    height: 1.8rem;
    width: 100%;
    background: rgba(0,10,50,0.8);
    box-sizing: border-box;
    padding: 0 1rem 0 0.85rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.table-title .table-name{
    width: 4.5rem;
    height: 1.15rem;
    background: url('../../assets/img/bg/bg_table_title.png');
    background-size: 100% 100%;
    font-size: 0.7rem;
    color: #fff;
    line-height: 1.15rem;
}
.table-title .table-tool {
    display: flex;
    align-items: center;
}

.table-title .table-tool .icon-zoom {
    width: 0.9rem;
    height: 0.9rem;
    background: url('../../assets/img/icon/icon_zoom.png');
    background-size: 100% 100%;
    margin-right: 1rem;
}

.table-title .table-tool .icon-close {
    width: 1rem;
    height: 1rem;
    background: url('../../assets/img/icon/icon_table_close.png');
    background-size: 100% 100%;
}

.table-title .table-tool em:hover {
    cursor: pointer;
}
.data-analyze-cont{
    display: flex;
}

.analyze-table-cont{
    width: 57.9rem;
    position: relative;
    box-sizing: border-box;
    padding: 0 1.7rem 0 4.25rem;
}
.analyze-table-cont::after{
    content: '';
    position: absolute;
    width: 1px;
    height: 43.85rem;
    right: 0;
    top: 0.85rem;
    background: #fff;
}
.chart-cont{
    width: 38.05rem;
    box-sizing: border-box;
    padding: 0 1.35rem;
}
.chart-name{
    font-size: 0.8rem;
    color: #fff;
    line-height: 2.5rem;
    padding-top: 0.7rem;
}
.select-cont{
    margin-bottom: 0.8rem;
    width: 6rem;
    height: 1.6rem;
    display: block;
    box-sizing: border-box;
    padding: 0 0.6rem;
    font-size: 0.7rem;
    color: #fff;
    background: rgba(0, 10, 50, 0.8);
}
.charts{
    width: 37.8rem;
    height: 19.5rem;
}
.ser-manage-cont{
    display: flex;
    justify-content: space-between;
    padding: 0.2rem 0.2rem 0;
    box-sizing: border-box;
    background: linear-gradient(180deg, rgba(0, 10, 50, 0.6) 0%, rgba(0, 10, 50, 0.1) 100%);
}
.ser-manage-cont .tree-table{
    width: 35.6rem;
    height: 16.8rem;
    box-sizing: border-box;
    border:1px solid #979797;
}
.ser-manage-cont .set-detail-cont{
    width: 59.6rem;
    height: 16.8rem;
    box-sizing: border-box;
    border: 1px solid #979797;
}
   .ant-calendar-picker-container{
        z-index: 111111111102 !important;
    }
/* 弹窗 */
.dialog-cont{
    width: 23rem;
    min-height: 8rem;
    background: rgba(0, 10, 50, 0.8);
    position: absolute;
    top: 4rem;
    left: 10rem;
    z-index: 2147483547;
    padding-bottom: 1.55rem;
}
.dialog-bg{
    width: 23rem;
    height: 4.85rem;
    background: url('../../assets/img/bg/bg_dialog.png');
    background-size: 100% 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
}
.dialog-close{
    width: 1.2rem;
    height: 4.15rem;
    background: url('../../assets/img/icon/icon_dialog_close.png');
    background-size: 100% 100%;
    display: block;
    position: absolute;
    top: 0;
    right: -1.2rem;
}
.dialog-close:hover{
    cursor: pointer;
}
.dialog-inner-cont{
    width: 100%;
    box-sizing: border-box;
    padding-right: 1.95rem;
    padding-top: 1.5rem;
    z-index: 99;
    position: relative;
}
.dialog-title{
    height: 0.95rem;
    display: flex;
    align-items: center;
    margin-left: 1.4rem;
    margin-bottom: 1.3rem;
}
.dialog-title em{
    width: 0.4rem;
    height: 0.4rem;
    background: url('../../assets/img/icon/icon_title_derect.png');
    background-size: 100% 100%;
    margin-right: 0.3rem;
}
.dialog-title span{
    font-size: 0.7rem;
    color: #fff;
    line-height: 0.95rem;
    height: 0.95rem;
}
.dialog-item{
    height: 1.6rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 0.8rem;
}
.dialog-item span{
    color: rgba(255,255,255,0.5);
    font-size: 0.7rem;
    margin-right: 0.45rem;
}
.dialog-item.active span:last-of-type{
    width: 13rem;
    height: 1.6rem;
    text-align: left;
    line-height: 1.6rem;
    color: #fff;
}
.dialog-item select,.dialog-item input,.picker-cont{
    width: 15rem;
    height: 1.6rem;
    outline: none;
    box-shadow:none;
    border:1px solid rgba(255,255,255,0.5);
    color: rgba(255,255,255,0.5);
    line-height: 1.6rem;
    box-sizing: border-box;
    padding: 0 0.4rem;
    background: none;
    border-radius: 0.2rem;
}
.dialog-other-cont .folder-upload-cont{
    display: flex;
    align-items: center;
    height: 1.6rem;
    display: flex;
}
.dialog-other-cont .folder-upload-cont span{
    font-size: 0.7rem;
    color: rgba(255,255,255,0.5);
    line-height: 1.5rem;
    margin-right: 0.5rem;
    margin-left: 4rem;
}
.dialog-other-cont .folder-upload-cont em{
    width: 4rem;
    height: 1.6rem;
    text-align: center;
    line-height: 1.6rem;
    color: #fff;
    font-size: 0.7rem;
    background: #1861F5;
    border-radius: 0.2rem;
}
.dialog-other-cont .folder-upload-cont em:hover{
    cursor: pointer;
}
.dialog-other-cont>p{
    text-align: center;
    height: 1.6rem;
    color: rgba(255,255,255,0.5);
    font-size: 0.6rem;
    line-height: 1.6rem;
    padding-left: 4.3rem;
    margin-bottom: 0;
}
.dialog-other-cont ul{
    margin-left: 6.05rem;
    height: 3.6rem;
    overflow-y: auto;
}
.dialog-other-cont ul li{
    width: 14.55rem;
    height: 1.2rem;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;
    padding: 0 0.7rem 0 0.45rem;
}
.dialog-other-cont ul li:hover{
    background: rgba(24,97,245,0.45);
}
.dialog-other-cont ul li>div{
    display: flex;
    align-items: center;
}
.dialog-other-cont ul li>div .icon-pic{
    width: 0.6rem;
    height: 0.7rem;
    background: url('../../assets/img/icon/icon_dialog_folder.png');
    background-size: 100% 100%;
}
.dialog-other-cont ul li>div span{
    font-size: 0.7rem;
    color: #fff;
    margin-left: 0.2rem;
    line-height: 1.2rem;
}
.dialog-other-cont ul li .icon-folder-close{
    width: 0.42rem;
    height: 0.42rem;
    background: url('../../assets/img/icon/icon_dialog_close1.png');
    background-size: 100% 100%;
    display: none;
}
.dialog-other-cont ul li .icon-folder-close:hover{
    cursor: pointer;
}
.dialog-other-cont ul li:hover .icon-folder-close{
    display: block;
}
.btn-cont{
    margin-top: 0.85rem;
    text-align: center;
}
.btn-cont>span{
    display: inline-block;
    width: 4rem;
    height: 1.6rem;
    line-height: 1.6rem;
    text-align: center;
    font-size: 0.7rem;
    color: #fff;
    background: linear-gradient(180deg, #01E7FC 0%, #1861F5 100%);
    border-radius: 0.2rem;
    /* margin-right: 0.5rem; */
}
.btn-cont>span:hover{
    cursor: pointer;
}
.btn-cont>span.active{
    background: rgba(255, 255, 255, 0.25);
    margin-right: 0.5rem;
}
.col-green{
    color: #01E7FC;
}
</style>