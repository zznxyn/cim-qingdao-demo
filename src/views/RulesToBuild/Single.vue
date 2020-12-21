<template>
    <div class="single-cont" ref="single">
        <div class="return-cont" :class="{'active':addActive}">
            <em class="name-dot"></em>
            <span>{{returnName}}</span>
            <em class="return" @click="returnBack"></em>
        </div>
        <div class="left-side" :class="{'active':addActive}">
            <div class="moniter-cont">
                <div class="moniter-left">
                    <div class="left-item">
                        <em class="icon icon-1"></em>
                        <div class="left-detail">
                            <p class="active">7.00</p>
                            <p>PM2.5</p>
                        </div>
                    </div>
                    <div class="left-item">
                        <em class="icon icon-2"></em>
                        <div class="left-detail">
                            <p class="active">45.20</p>
                            <p>噪音</p>
                        </div>
                    </div>
                    <div class="left-item">
                        <em class="icon icon-3"></em>
                        <div class="left-detail">
                            <p class="active">1.3m/s</p>
                            <p>风速</p>
                        </div>
                    </div>
                </div>
                <div class="moniter-center">
                    <p class="font-15 col-b">9.00</p>
                    <p class="font-8 col-w">AQI  优秀</p>
                </div>
                <div class="moniter-right">
                    <div class="left-item">
                        <em class="icon icon-4"></em>
                        <div class="left-detail">
                            <p class="active">5.6</p>
                            <p>水PH值</p>
                        </div>
                    </div>
                    <div class="left-item">
                        <em class="icon icon-5"></em>
                        <div class="left-detail">
                            <p class="active">24℃</p>
                            <p>温度</p>
                        </div>
                    </div>
                    <div class="left-item">
                        <em class="icon icon-6"></em>
                        <div class="left-detail">
                            <p class="active">7.26%</p>
                            <p>湿度</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="patrol-cont">
                <div class="patrol-top">
                    <div class="rate-item">
                        <div class="rate-num">
                            <em class="rate"></em>
                            <p>安全</p>
                        </div>
                        <div class="rate-intro">
                            <div class="intro-cont">
                                <p>186</p>
                                <div>
                                    <em></em>
                                    <span>待整改</span>
                                </div>
                            </div>
                            <div class="intro-cont">
                                <p>165</p>
                                <div>
                                    <em class="active"></em>
                                    <span>已完成</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="rate-item">
                        <div class="rate-num">
                            <em class="rate active"></em>
                            <p>质量</p>
                        </div>
                        <div class="rate-intro">
                            <div class="intro-cont">
                                <p>186</p>
                                <div>
                                    <em></em>
                                    <span>待整改</span>
                                </div>
                            </div>
                            <div class="intro-cont">
                                <p>165</p>
                                <div>
                                    <em class="active"></em>
                                    <span>已完成</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="patrol-bottom">
                    <div class="patrol-check">
                        <div class="check-left">
                            <div class="check-item active">
                                <em></em>
                                <span>安全</span>
                            </div>
                            <div class="check-item">
                                <em></em>
                                <span>质量</span>
                            </div>
                        </div>
                        <div class="check-right">
                            <em class="dot-1"></em>
                            <span>一般隐患</span>
                            <em class="dot-2"></em>
                            <span>较大隐患</span>
                            <em class="dot-3"></em>
                            <span>重大隐患</span>
                        </div>
                    </div>
                    <div class="patrol-charts"></div>
                </div>
            </div>
            <div class="warning-cont">
                <div class="warning-detail">
                <ul>
                    <li>
                        <div class="warning-info">
                            <p>2020.09.10    20：18</p>
                            <p>扬尘PM2.5细颗粒物过高</p>
                        </div>
                        <em class="icon-warning"></em>
                    </li>
                    <li>
                        <div class="warning-info">
                            <p>2020.09.10    20：18</p>
                            <p>用电不规范，私拉乱接</p>
                        </div>
                    </li>
                    <li>
                        <div class="warning-info">
                            <p>2020.09.10    20：18</p>
                            <p>脚手架未按标准架设，铺板未固定和使用探头板</p>
                        </div>
                    </li>
                    <li>
                        <div class="warning-info">
                            <p>2020.09.10    20：18</p>
                            <p>起重件和吊篮下人员逗留</p>
                        </div>
                    </li>
                </ul>
                </div>
            </div>
        </div>
        <div class="right-side" :class="{'active':addActive}">
            <div class="video-cont">
                <div class="video-bg-top"></div>
                <div id="video">
                    <video-player id="myvideo" class="video-player vjs-custom-skin"
                        ref="videoPlayer"
                        :playsinline="false"
                        :options="playerOptions"
                    ></video-player>
                </div>
                <div class="video-bg-bottom"></div>
            </div>
            <div class="fell-cont">
                <div class="fell-item" v-for="(item,index) in fellList" :key="index">
                    <div>
                        <span>{{item.num}}</span>
                    </div>
                    <p>{{item.name}}</p>
                </div>
            </div>
            <div class="car-cont">
                <div class="car-cont-left">
                    <span>59</span>
                    <p>现场车辆</p>
                    <p>当前时间   16:30</p>
                </div>
                <div class="car-cont-right">
                    <p><em></em><span>入场数量</span><em class="active"></em><span>出场数量</span></p>
                    <div></div>
                </div>
            </div>
            <div class="process-cont">
                <div class="process-detail"></div>
            </div>
        </div>
        <div class="bottom-cont" :class="{'active':addActive}">
            <div class="doing-cont">
                <div class="doing-days">
                    <em>已施工</em>
                    <span>307</span>
                    <em>天</em>
                </div>
                <div class="doing-time">
                    <div class="doing-item" :class="{'active':item.active}" v-for="(item,index) in doingTime" :key="index">
                        <em class="icon"></em>
                        <span class="item-time">{{item.time}}</span>
                        <span class="item-intro">{{item.name}}</span>
                    </div>
                </div>
            </div>
            <div class="bottom-charts">
                <div class="left-charts">
                    <div class="left-charts-title">
                        <span>现场人员</span>
                        <img src="../../assets/img/solution/bg_solution7.png" alt="">
                    </div>
                    <div class="left-charts-detail">
                        <div class="left-charts-items" v-for="(item,index) in otherList" :key="index">
                            <div>
                                <span>{{item.num}}</span>
                            </div>
                            <p>{{item.name}}</p>
                        </div>
                    </div>
                </div>
                <div class="right-charts">
                    <div class="right-charts-title">
                        <span>今日劳动力曲线</span>
                        <img src="../../assets/img/solution/bg_solution8.png" alt="">
                    </div>
                    <div class="right-charts-detail"></div>
                </div>
            </div>
        </div>
        <div class="swiper-cont" :class="{'active':addActive}">
            <!-- <swiper></swiper> -->
        </div>
    </div>
</template>
<script>
import swiper from '../../components/Swiper'
export default {
    name:'Single',
    data(){
        return {
            fellList:[
                {num:15,name:'危险区域预警'},
                {num:5,name:'违章识别提醒'},
                {num:12,name:'人员健康监测'},
                {num:25,name:'吊塔数量'},
                {num:2,name:'今日报警台数'},
                {num:3,name:'今日预警台数'},
            ],
            doingTime:[
                {time:'2018.02.10',name:'开工',active:false},
                {time:'2018.05.10',name:'教学楼',active:false},
                {time:'2018.06.15',name:'河道工程',active:false},
                {time:'2018.09.10',name:'住宿楼',active:false},
                {time:'2018.11.28',name:'1号食堂',active:false},
                {time:'2019.01.01',name:'2号食堂',active:false},
                {time:'暂无',name:'游泳池',active:false},
                {time:'暂无',name:'竣工验收',active:true},
            ],
            otherList:[
                {name:'项目登记人数',num:'1565'},
                {name:'今日出勤人数',num:'1230'},
                {name:'现场实时人数',num:'1220'},
                {name:'人员流动率',num:'10%'},
            ],
            returnName:'',
            video:null
        }
    },
    components:{
        swiper
    },
    computed: {
        addActive() {
            return this.$store.state.addActive
        },
        isLoad(){
            return this.$store.state.isLoad;
        },
        playerOptions(){
            return this.$store.state.playerOptions
        },
        modelLayer(){
            return this.$store.state.modelLayer1
        }
    },
    mounted(){
        this.$store.commit('addAction')
        let _this = this;
        let timer = setInterval(function(){
            if(_this.isLoad){
                _this.$store.commit('removeModal');
                    
                clearInterval(timer)
            }
        },1000)
        let timer1 = setInterval(function(){
            // if(_this.modelLayer){
                if(_this.$route.query.id=='divLabel11'||_this.$route.query.id=='divLabel40'){
                    _this.$store.commit('flyModalFront')  
                    _this.addLabel(0)
                    _this.returnName = '中远海运空运山东物流总部基地';
                }else{
                    _this.addLabel(1)
                    _this.returnName = '胶东国际机场配套项目';
                    _this.$store.commit('setCarmeInfo',[-2581128.4680673103, 4450191.413427755, 3757895.8682789407, 261.5775035203742, -34.473245041605956, 0.0005519497701813038])
                }
                clearInterval(timer1)
            // }
        },1000)
    },
    methods:{
        returnBack(){
            this.$router.go(-1);
            // this.$store.commit('getCarmeInfo')
        },
        addLabel(i){
            let labelList = [['monitor1','monitor2'],['monitor3','monitor4']];
            let data = {
                list:labelList[i],
                id:3
            }
            this.$store.commit('addDivLabel',data)
        },
    },
    destroyed(){
        this.returnName = '';
        this.$store.commit('removeAction')
        this.$store.commit('moveLabel')
    }
}
</script>
<style scoped>
.single-cont{
    position: relative;
}
.return-cont{
    position: fixed;
    width: 16.7rem;
    height: 2.55rem;
    background: urL('../../assets/img/solution/bg_solution_return.png');
    background-size: 100% 100%;
    top: 5.85rem;
    left:50%;
    margin-left: -8.35rem;
    z-index: 999;
    display: flex;
    align-items: center;
    opacity: 0;
}
.return-cont.active{
    animation: swipershow 1s 1.8s linear forwards;
}
.return-cont span{
    font-size: 0.8rem;
    color: #fff;
    width: 80%;
}
.name-dot{
    width: 0.3rem;
    height: 0.3rem;
    background: #01E7FC;
    border-radius: 50%;
    margin-left: 0.5rem;
    margin-right: 0.45rem;
}
.return{
    width: 0.75rem;
    height: 0.8rem;
    background: url('../../assets/img/solution/icon_solution_return.png');
    background-size: 100% 100%;
    margin-left: 1rem;
}
.return:hover{
    cursor: pointer;
}
.left-side{
    position: fixed;
    top: 4.95rem;
    bottom: 0;
    left: 0;
    width: 20.3rem;
    z-index: 99;
    box-sizing: border-box;
    padding-left: 1rem;
    opacity: 0;
}
.left-side.active{
    animation: swipershow 1s 1.8s linear forwards;
}
.left-side .moniter-cont{
    width: 19rem;
    height: 11.25rem;
    background: url('../../assets/img/solution/bg_solution21.png');
    background-size: 100% 100%;
    margin-bottom: 0.35rem;
    padding: 2.6rem 0 1.15rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
 .left-item{
    display: flex;
}
.left-item .icon{
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.35rem;
}
.left-item+.left-item{
    margin-top: 1.5rem;
}
.left-item .left-detail p{
    color: #fff;
    font-size: 0.7rem;
    height: 0.7rem;
    line-height: 0.7rem;
    text-align: left;
}
.left-item .left-detail p.active{
    font-size: 1rem;
    color: #01E7FC;
    height: 1rem;
    line-height: 1rem;
    font-family: Num;
}
.moniter-center{
    width: 7.5rem;
    height: 7.5rem;
    background: url('../../assets/img/solution/bg_saolution1.png');
    background-size:100% 100%;
}
.moniter-center P:first-of-type{
    margin: 2.15rem 0 0.4rem;
    font-family: Num;
}
.patrol-cont{
    width: 19rem;
    height: 20rem;
    background: url('../../assets/img/solution/bg_solution22.png');
    background-size: 100% 100%;
}
.patrol-top{
    display: flex;
    padding-top: 3rem;
    justify-content: space-around;
    width: 100%;
    box-sizing: border-box;
}
.patrol-top .rate-item{
    display: flex;
}
.patrol-top .rate-item .rate-num .rate{
    display: inline-block;
    width: 4.5rem;
    height: 4.5rem;
    background: url('../../assets/img/solution/bg_solution2.png');
    background-size: 100% 100%;
}
.patrol-top .rate-item .rate-num p{
    font-size: 0.7rem;
    line-height: 1rem;
    color: #fff;
}
.patrol-top .rate-item .rate-num .rate.active{
    background: url('../../assets/img/solution/bg_solution3.png');
    background-size: 100% 100%;
    width: 5rem;
}
.patrol-top .rate-item .rate-intro{
    margin-left: 0.25rem;
}
.intro-cont+.intro-cont{
    margin-top: 0.6rem;
}
.patrol-top .rate-item .rate-intro .intro-cont p{
    font-size: 1rem;
    color: #fff;
    font-family: Num;
    line-height: 1rem;
    height: 1rem;
} 
.patrol-top .rate-item .rate-intro .intro-cont>div{
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.patrol-top .rate-item .rate-intro .intro-cont em{
    display: inline-block;
    width: 0.4rem;
    height: 0.4rem;
    background: #1861F5;
    margin-right: 0.2rem;
}
.patrol-top .rate-item .rate-intro .intro-cont em.active{
    background: #03DAFB;
}
.patrol-top .rate-item .rate-intro .intro-cont span{
    font-size: 0.6rem;
    color: #fff;
}
.patrol-bottom{
    margin-top: 1.1rem;
}
.patrol-bottom .patrol-check{
    display: flex;
}
.patrol-bottom .patrol-check .check-left{
    width: 5.25rem;
    height: 1.2rem;
    background: url('../../assets/img/solution/bg_solution5.png');
    background-size: 100% 100%;
    margin-left: 1.6rem;
    margin-right: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.patrol-check .check-left .check-item{
    display: flex;
    align-items: center;
}
.patrol-check .check-left .check-item em{
    width: 0.5rem;
    height: 0.5rem;
    background: url('../../assets/img/icon/icon_uncheck.png');
    background-size: 100% 100%;
    margin-right: 0.1rem;
}
.patrol-check .check-left .check-item.active em{
    background: url('../../assets/img/icon/icon_check.png');
    background-size: 100% 100%;
}
.patrol-check .check-left .check-item span{
    font-size: 0.6rem;
    color: #FFFFFF;
}
.patrol-check .check-left .check-item.active span{
    font-size: 0.6rem;
    color: rgba(255,255,255,0.5);
}

.check-right em{
    display: inline-block;
    width: 0.25rem;
    height: 0.25rem;
    border-radius: 50%;
    margin-right: 0.2rem;
    vertical-align: middle;
}
.check-right span{
    font-size: 0.6rem;
    color: rgba(255,255,255,0.5);
    margin-right: 0.45rem;
}
.check-right span:last-of-type{
    margin-right: 0.8rem;
}
.patrol-charts{
    width: 16.75rem;
    height: 6.9rem;
    background: url('../../assets/img/solution/bg_solution4.png');
    background-size: 100% 100%;
    margin: 0.3rem 0 0 1.1rem ;
}
.warning-cont{
    width: 18.95rem;
    height: 14.35rem;
    background: url('../../assets/img/solution/bg_solution23.png');
    background-size: 100% 100%;
    margin-top: 0.4rem;
}
.warning-detail{
    padding-top: 2.6rem;
}
.warning-detail li{
  width: 18.95rem;
  height: 2.7rem;
 padding-left: 0.65rem;
 box-sizing: border-box;
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
.right-side{
    position: fixed;
    top: 4.95rem;
    bottom: 0;
    right: 0;
    width: 20.5rem;
    z-index: 99;
    box-sizing: border-box;
    padding: 0 0.8rem 0 0.65rem;
    opacity: 0;
}
.right-side.active{
    animation: swipershow 1s 1.8s linear forwards;
}
.video-cont{
    width: 19rem;
    height: 11.15rem;
    position: relative;
    padding-top: 1.15rem;
    box-sizing: border-box;
}
.video-cont #video{
    width: 19rem;
    height: 10rem;
    box-sizing: border-box;
    margin: 0 auto;
    overflow: hidden;
}
.video-bg-top{
    position: absolute;
    width: 19rem;
    height: 2.2rem;
    background: url('../../assets/img/solution/bg_video_top.png');
    background-size: 100% 100%;
    top: 0;
    left: 0;
    z-index: 3;
}
.video-bg-bottom{
    position: absolute;
    width: 19rem;
    height: 0.8rem;
    background: url('../../assets/img/solution/bg_video_bottom.png');
    background-size: 100% 100%;
    bottom: 0;
    left: 0;
    z-index: 3;
}
.fell-cont{
    width: 19.05rem;
    height: 8.6rem;
    background: url('../../assets/img/solution/bg_solution26.png');
    background-size: 100% 100%;
    margin-top: 0.35rem;
    padding: 2.2rem 1.45rem 0;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between; */
}
.fell-cont .fell-item{
    margin-right: 2.6rem;
}
.fell-cont .fell-item:nth-of-type(3n){
    margin-right: 0;
}
.fell-cont .fell-item>div{
    width: 3.2rem;
    height: 1.85rem;
    background: url('../../assets/img/solution/bg_solution9.png');
    background-size: 100% 100%;
}
.fell-cont .fell-item>div span{
    font-size: 1rem;
    color: #01E7FC;
    font-family: Num;
    line-height: 1.4rem;
    padding-top: 0.65rem;
    display: block;
    text-align: center;
    height: 1.2rem;
}
.fell-cont .fell-item>p{
    font-size: 0.6rem;
    color: #fff;
    line-height: 0.6rem;
    height: 0.6rem;
    margin-top: 0.25rem;
}
/* 车辆监控 */
.car-cont{
    width: 19.05rem;
    height: 11.1rem;
    background: url('../../assets/img/solution/bg_solution27.png');
    background-size: 100% 100%;
    margin-top: 0.35rem;
    display: flex;
}
.car-cont-left{
    padding-top: 3.05rem;
    margin-left: 1rem;
}

.car-cont-left>span{
    display: block;
    width: 4.5rem;
    height: 4.6rem;
    background: url('../../assets/img/solution/bg_yuan.png');
    background-size: 100% 100%;
    font-family: Num;
    color: #01E7FC;
    font-size: 1.5rem;
    line-height: 4.6rem;
    text-align: center;
}
.car-cont-left p:first-of-type{
    font-size: 0.7rem;
    color: #fff;
    height: 0.7rem;
    line-height: 0.7rem;
    margin-top: 0.5rem;
}
.car-cont-left p:last-of-type{
    font-size: 0.6rem;
    color: rgba(255,255,255,0.5);
    line-height: 0.6rem;
    height: 0.6rem;
    margin-top: 0.25rem;
}
.car-cont-right{
    padding-top: 2.25rem;
    width: 11.7rem;
    margin-left: 1.15rem;
}
.car-cont-right p{
    height: 0.6rem;
    text-align: right;
    padding-bottom: 0.35rem;
}
.car-cont-right p span{
    font-size: 0.6rem;
    color: rgba(255,255,255,0.5);
}
.car-cont-right p em{
    display: inline-block;
    width: 0.25rem;
    height: 0.25rem;
    border-radius: 50%;
    background: #0E9CFF;
    vertical-align: middle;
    margin-right: 0.1rem;
}
.car-cont-right p em.active{
    background: #FFF100;
    margin-left: 0.7rem;
}
.car-cont-right>div{
    width: 11.7rem;
    height: 6.8rem;
    margin-top: 0.35rem;
    background: url('../../assets/img/solution/charts_solution2.png');
    background-size: 100% 100%;
}
/* 过程资料 */
.process-cont{
    width: 18.95rem;
    height: 14.35rem;
    background: url('../../assets/img/solution/bg_solution28.png');
    background-size: 100% 100%;
    margin-top: 0.35rem;
    box-sizing: border-box;
    padding-top: 3.2rem;
}
.process-detail{
    width: 16.7rem;
    height: 9.35rem;
    background: url('../../assets/img/solution/bg_solution10.png');
    background-size: 100% 100%;
    margin-left: 0.6rem;
}
.bottom-cont{
    position: fixed;
    left:20.3rem;
    right:20.4rem;
    bottom: 2.75rem;
    height: 14.35rem;
    background: url('../../assets/img/solution/bg_solution24.png');
    background-size: 100% 100%;
    box-sizing: border-box;
    padding-top: 3.9rem;
    opacity: 0;
}
.bottom-cont.active{
    animation: swipershow 1s 1.8s linear forwards;
}
.doing-cont{
    display: flex;
    align-items: center;
}
.doing-days{
    width: 9.7rem;
    height: 3.3rem;
    background: url('../../assets/img/solution/bg_solution5.png');
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    margin-left: 1.95rem;
}
.doing-days em{
    font-size: 0.6rem;
    color: #fff;
    line-height: 3.3rem;
    height: 3.3rem;
}
.doing-days span{
    font-size: 1.5rem;
    color: #01E7FC;
    margin: 0 0.75rem;
    font-family: Num;
    line-height: 3.3rem;
    height: 3.3rem;
}
.doing-time{
    display: flex;
    align-items: flex-start;
}
.doing-time .doing-item{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 4.5rem;
    height: 3.3rem;
    margin-left: 1rem;
}
.doing-time .doing-item::after{
    content:'';
    position: absolute;
    width: 5.35rem;
    height: 1px;
    background: #00FFFF;
    top:0.65rem;
    left:2.25rem;
}
.doing-time .doing-item:first-of-type{
    margin-left: 0;
}
.doing-time .doing-item:last-of-type::after{
    width: 0;
}
.doing-time .doing-item em{
    width: 0.85rem;
    height: 0.85rem;
    background: url('../../assets/img/solution/icon_solution_dot.png');
    background-size: 100% 100%;
    margin-top: 0.1rem;
    margin-bottom: 0.3rem;
    position: relative;
    z-index: 99;
}
.doing-time .doing-item.active em{
    width: 0.35rem;
    height: 0.35rem;
    background: #fff;
    border-radius: 50%;
    margin-bottom: 0.5rem;
    margin-top: 0.4rem;
}
.item-time{
    font-size: 0.6rem;
    height: 0.6rem;
    line-height: 0.6rem;
    color: rgba(255,255,255,0.5);
    margin-bottom:0.4rem;
}
.item-intro{
    font-size: 0.7rem;
    color: #fff;
    height: 0.7rem;
    line-height: 0.7rem;
}
.bottom-charts{
    display: flex;
}

.left-charts{
    margin-left: 1.15rem;
    padding-top: 1.05rem;
}

.left-charts .left-charts-title{
    display: flex;
    align-items: center;
    height: 0.9rem;
}
.left-charts .left-charts-title span{
    font-size: 0.9rem;
    color: #fff;
    margin-right: 0.4rem;
    line-height: 0.9rem;
}
.left-charts .left-charts-title img{
    width: 18.4rem;
    height: 0.45rem;
    margin-top: 0.4rem;
}

.left-charts-detail{
    display: flex;
    padding-left: 1.6rem;
    margin-top: 1.5rem;
}
.left-charts-detail .left-charts-items{
    margin-right: 1.5rem;
}
.left-charts-detail .left-charts-items>div{
    width: 3.9rem;
    height: 1.9rem;
    background: url('../../assets/img/solution/bg_solution6.png');
    background-size: 100% 100%;
    padding-top: 1rem;
    box-sizing: border-box;
}
.left-charts-detail .left-charts-items>div span{
    font-size: 1rem;
    color: #01E7FC;
    font-family: Num;
    height: 1rem;
    line-height: 1rem;
}
.left-charts-detail .left-charts-items p{
    font-size: 0.7rem;
    color: #fff;
    line-height: 0.7rem;
    height: 0.7rem;
    margin-top: 0.25rem;
}
.right-charts{
    padding-top: 1.05rem;
    margin-left: 3rem;
}
.right-charts .right-charts-title span{
    font-size: 0.9rem;
    color: #fff;
    margin-right: 0.4rem;
    line-height: 0.9rem;
}
.right-charts .right-charts-title img{
    width: 19.6rem;
    height: 0.35rem;
    margin-top: 0.4rem;
}
.right-charts-detail{
    width: 26.6rem;
    height: 4.96rem;
    background: url('../../assets/img/solution/charts_solution3.png');
    background-size: 100% 100%;
    margin-top: 0.2rem;
}
.swiper-cont{
    position: fixed;
    bottom: 17.8rem;
    height: 5rem;
    left:36.25rem;
    right:34.75rem;
    z-index: 999;
    opacity: 0;
}
.swiper-cont.active{
    animation: swipershow 1s 1.8s linear forwards;
}
@keyframes swipershow {
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}
.dot-1{
    background: #03DBFC;
}
.dot-2{
    background: #EFE206;
}
.dot-3{
    background: #ED3636;
}
.font-15{
    font-size: 1.5rem;
    line-height: 1.5rem;
    height: 1.5rem;
}
.font-8{
    font-size: 0.6rem;
    line-height: 0.6rem;
    height: 0.6rem;
}
.col-w{
    color: #fff;
}
.col-b{
    color: #01E7FC;
}
.icon-1{
    background: url('../../assets/img/solution/bg_solution12.png');
    background-size: 100% 100%;
}
.icon-2{
    background: url('../../assets/img/solution/bg_solution14.png');
    background-size: 100% 100%;
}
.icon-3{
    background: url('../../assets/img/solution/bg_solution16.png');
    background-size: 100% 100%;
}
.icon-4{
    background: url('../../assets/img/solution/bg_solution13.png');
    background-size: 100% 100%;
}
.icon-5{
    background: url('../../assets/img/solution/bg_solution15.png');
    background-size: 100% 100%;
}
.icon-6{
    background: url('../../assets/img/solution/bg_solution17.png');
    background-size: 100% 100%;
}
.icon-warning{
  width: 1.55rem;
  height: 1.35rem;
  background: url('../../assets/img/solution/icon_warnning.png');
  background-size: 100% 100%;
  margin-right: 0.4rem;
}
</style>