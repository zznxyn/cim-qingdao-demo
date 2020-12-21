<template>
    <div class="container" :class="{'active':addActive}">
        <div class="tab-container" :class="{'active':!addActive}">
            <tab />
        </div>
        <div id="model-container" :class="{'active':addActive}">
            <div class="div-monitor" v-for="item in labelList[3]" :id="item.id" :class="{'active':item.active}"
                @click="playvideo(item.id)">
                <img class="div-monitor-icon" src="../assets/img/solution/icon_monitor.png" alt="">
            </div>
        </div>
        <div class="aside" :class="{'active':addActive}"></div>
        <div class="bottom" :class="{'active':addActive}"></div>
        <div class="right" :class="{'active':addActive}"></div>

        <div class="div-label" v-for="item in labelList[0]" :id="item.id" :class="{'active':item.active}"
            @click="labelClick(item.id,item.carmeInfo)">
            <div class="label-cont">
                <img class="bg-bottom" src="../assets/img/bg/bg_label_bottom.png" alt="">
                <div class="cover-cont"></div>
                <p><em class="label-dot" :class="item.color"></em>{{item.name}}</p>
            </div>
        </div>

        <div class="div-label2" v-for="item in labelList[1]" :id="item.id" :class="{'active':item.active}"
            @click="labelClick(item.id)">
            <div class="label-cont">
                <img class="bg-bottom" src="../assets/img/bg/bg_label_bottom.png" alt="">
                <div class="cover-cont"></div>
                <div class="lead-label">
                    <div class="left">
                        <p>{{item.name}}</p>
                        <ul>
                            <li>
                                <em>成立时间:</em>
                                <span>{{item.time}}</span>
                            </li>
                            <li>
                                <em>企业类型:</em>
                                <span>{{item.type}}</span>
                            </li>
                            <li>
                                <em>员工人数:</em>
                                <span>{{item.num}}</span>
                            </li>
                            <!-- <li>
                                <em>利润收益:</em>
                                <span>{{item.get}}</span>
                            </li> -->
                        </ul>
                    </div>
                    <div class="camare">
                        <img :src="item.img" alt="">
                    </div>
                </div>
            </div>
        </div>

        <div class="div-label3" v-for="item in labelList[2]" :id="item.id" :class="{'active':item.active}"
            @click="labelClick(item.id)">
            <div class="bg-div">{{item.name}}</div>
        </div>

        <div class="div-label4" v-for="(item,index) in labelList[4]" :id="item.id" :class="{'active':item.active}">
            <div class="icon-cont">
                <em class="label-icon" :class="item.icon"></em>
            </div>
            <div class="label-name">{{item.name}}</div>
        </div>

        <img class="label-img" :src="item.img" alt="" v-for="(item,index) in labelList[5]" :id="item.id" :class="{'active':item.active}">
        <img class="center" :src="item.img" alt="" v-for="(item,index) in labelList[6]" :id="item.id" :class="{'active':item.active}">

        <div class="routes">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    /* eslint-disable */
    import tab from '../components/Tabbar'

    export default {
        name: "Home",
        data() {
            return {
                scene: this.currentScene,
                imgData: [],
                modelLayer1: null
            }
        },
        computed: {
            currentScene() {
                return this.$store.state.scene
            },
            showDivModel() {
                return this.$store.state.showDivModel
            },
            labelList() {
                return this.$store.state.labelList
            },
            leaderList() {
                return this.$store.state.leaderList
            },
            leadShpManage() {
                return this.$store.state.leadShpManage
            },
            enterPriseShpManage() {
                return this.$store.state.enterPriseShpManage
            },
            addActive() {
                return this.$store.state.addActive
            },
            hideLeadEnterPriseShp() {
                return this.$store.state.hideLeadEnterPriseShp
            }
        },
        mounted() {
            this.scene = BcEngineX.createBcScene('model-container', {
                type: 0
            });
            this.$store.commit('saveScene', this.scene);
            window.scene = this.scene;

            // 三维引擎版本冲突临时解决方案
            if (scene._vectorLayerManager) {
                scene._vecterLayerManager = scene._vectorLayerManager;
            } else {
                scene._vectorLayerManager = scene._vecterLayerManager;
            }
            // 隐藏导航栏
            this.scene.setNavigationVisibility(false);
            // 设置天空盒
            initSkyBox(this.scene);
            setSkyBox();
            // 加载河流
            addWater(this.scene);
            //初始化加载模型
            this.$axios.get(
                    cimUrl + '/api/model/getGraph?projectId=84b575ac96434f18915e484358eec2e9')
                .then(res => {
                    if (res.data.code == 1) {
                        let data = res.data.data;
                        data.forEach(item => {
                            this.modelLayer = addGraph(this.scene, item);
                        });
                    }
                });
            this.$axios.get(
                    cimUrl + '/api/model/getGraph?projectId=d4c25646e40b413cb70e1641c05a37a6')
                .then(res => {
                    if (res.data.code == 1) {
                        let data = res.data.data;
                        data.forEach(item => {
                            this.modelLayer = addGraph(this.scene, item);
                        });
                    }
                });
            //医院
            this.$axios.get(
                    cimUrl + '/api/model/getGraph?projectId=0ed5e6555bd24632a26069899c304494')
                .then(res => {
                    if (res.data.code == 1) {
                        let data = res.data.data;
                        data.forEach(item => {
                            this.modelLayer = addGraph(this.scene, item);
                            this.$nextTick(function () {
                                this.$store.commit('saveModelLayer', this.modelLayer)
                            })
                        });
                    }
                });
            this.$axios.get(
                    cimUrl + '/api/model/getGraph?projectId=5b37e94fff984dcd999f1704298816a9')
                .then(res => {
                    if (res.data.code == 1) {
                        let data = res.data.data;
                        data.forEach(item => {
                            this.modelLayer = addGraph(this.scene, item);
                        });
                    }
                });
            //物流中心
            this.$axios.get(
                    cimUrl + '/api/model/getGraph?projectId=58c9163b75ef4adc9c5fd83e6edd6638')
                .then(res => {
                    if (res.data.code == 1) {
                        let data = res.data.data;
                        data.forEach(item => {
                            this.modelLayer1 = addGraph(this.scene, item);
                        });
                    }
                });
            // 智慧园区
            this.$axios.get(
                    cimUrl + '/api/model/getGraph?projectId=0a7c4f568d8c4c59a35263463d7f87b3')
                .then(res => {
                    if (res.data.code == 1) {
                        let data = res.data.data;
                        data.forEach(item => {
                            this.modelLayer1 = addGraph(this.scene, item);
                            this.$nextTick(function () {
                                this.$store.commit('saveModelLayer', this.modelLayer1)
                            })
                        });
                    }
                });
            //消防
            this.$axios.get(
                    cimUrl + '/api/model/getGraph?projectId=84b575ac96434f18915e484358eec2e9')
                .then(res => {
                    if (res.data.code == 1) {
                        let data = res.data.data;
                        data.forEach(item => {
                            this.modelLayer1 = addGraph(this.scene, item);
                            this.$nextTick(function () {
                                this.$store.commit('saveModelLayer', this.modelLayer1)
                            })
                        });
                    }
                })
        },
        components: {
            tab
        },
        methods: {
            labelClick(i, j) {
                if (j) {
                    this.$store.commit('setCarmeInfo', j)
                }

                if (i == 'divLabel5' || i == 'divLabel28' || i == 'divLabel11') {
                    this.$store.commit('showManage', true)
                } else {
                    this.$store.commit('showManage', false)
                }

                if ((i == 'divLabel11' || i == 'divLabel40' || i == 'divLabel44' || i == 'divLabel45') && this.$route
                    .name === 'solutions') {
                    this.$router.push({
                        name: 'single',
                        query: {
                            id: i
                        }
                    })
                }
                // 
                if (i == 'divLabel44' && this.$route.name === 'home') {
                    let camiraInfo = [-2581231.305876665, 4450640.198343101, 3758242.0077913436, 256.915977658072, -76.95719687551077, 0.0019099769871553619
                    ];
                    this.$store.commit('setCarmeInfo', camiraInfo);
                }
                if (i == 'divLabel11' && this.$route.name === 'home') {
                    let camiraInfo = [-2575011.0275891866, 4449162.424814832, 3762982.150429151, 354.69571707459414, -
                        9.748191939132179, 359.98276783498613
                    ];
                    this.$store.commit('setCarmeInfo', camiraInfo);
                }
                if (i == 'leaderLabel1') {
                    // 展示龙头企业详情
                    this.$store.commit('showLeadPrise', true);
                    // 隐藏shp
                    this.hideLeadEnterPriseShp.hideShp();
                    // 删除标签
                    this.$store.commit('moveLabel');
                    let camiraInfo = [-2575011.0275891866, 4449162.424814832, 3762982.150429151, 354.69571707459414, -
                        9.748191939132179, 359.98276783498613
                    ];
                    this.$store.commit('setCarmeInfo', camiraInfo);

                } else if (i == 'divLabel25') {
                    this.$store.commit('moveLabel');
                    let labelList = ['enterLabel1', 'enterLabel2', 'enterLabel3', 'enterLabel4', 'enterLabel5',
                        'enterLabel6'
                    ];
                    let data = {
                        list: labelList,
                        id: 2
                    }
                    this.$store.commit('addDivLabel', data);
                    // 定位到综保区
                    let cameraInfo = [-2578577.7946421704, 4457423.452159537, 3763016.45529964, 360, -
                        59.999990624517785, 360
                    ]
                    this.$store.commit('setCarmeInfo', cameraInfo)
                    this.leadShpManage.showShp(1000);
                } else if (i == 'enterLabel1') {
                    this.$store.commit('showEnterprisetManage', true);
                }
            },
            playvideo(i) {
                this.$store.commit('playVideo')
                if (i == 'monitor3' || i == 'monitor4') {
                    //
                    //-2580894.224432272, 4450384.53703009, 3758045.214208489, 256.9159885579886, -76.95719746235937, 0.001898788425230467
                    
                    this.$store.commit('setCarmeInfo', [-2580863.460874655, 4450213.497807175, 3757923.2485711616, 240.6490658373237, -66.27745671136249, 0.0007748257299139137])
                } else {
                    this.$store.commit('setCarmeInfo', [-2574967.943247246, 4449011.9309429005, 3763169.7319893287,
                        308.85094668243397, -32.898150030785914, 359.82947051321213
                    ])
                }
            }
        }
    };
</script>
<style scoped>
    @import "../assets/css/Widgets/widgets.css";

    .div-label:hover {
        cursor: pointer;
    }

    .container {
        width: 96rem;
        overflow: hidden;
        height: 100%;
        box-sizing: border-box;
        background: url('../assets/img/solution/bg_solution1.png');
        background-position: 0 0;
        background-size: 200% 100%;
    }

    .container.active {
        animation: changebg 1s 1s linear forwards;
    }

    @keyframes changebg {
        0% {
            background-position: 0 0;
        }

        1% {
            background-position: -96rem 0;
        }

        100% {
            background-position: -96rem 0;
        }
    }

    .tab-container {
        width: 100%;
        height: 2.4rem;
        position: absolute;
        top: 0;
        left: 0;
        /* z-index: 999; */
    }

    .tab-container.active {
        z-index: 11111111111111;
    }

    #model-container {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 96rem;
        z-index: 2;
        overflow: hidden;
    }

    #model-container.active {
        animation: modelm 1s 1s linear forwards;
        z-index: 9;
    }

    /* 模型区域移动 */
    @keyframes modelm {
        from {
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 96rem;
        }

        to {
            top: 5.1rem;
            left: 20.3rem;
            right: 20.5rem;
            bottom: 17.5rem;
            width: 55.2rem;
        }
    }

    .routes {
        position: absolute;
        top: 6.35rem;
        left: 0;
        right: 0;
        bottom: 5.6rem;
        /* z-index: 10; */
    }

    .aside {
        position: absolute;
        width: 5.45rem;
        top: 2.95rem;
        bottom: 0;
        left: 0;
        z-index: 9;
        background: url('../assets/img/bg/bg_left_side.png');
        background-size: 100% 100%;
        pointer-events: none;
    }

    .aside.active {
        background: none;
    }

    .right {
        position: absolute;
        width: 5.45rem;
        top: 2.95rem;
        bottom: 0;
        right: 0;
        z-index: 3;
        background: url('../assets/img/bg/bg_right_side.png');
        background-size: 100% 100%;
        pointer-events: none;
    }

    .right.active {
        background: none;
    }

    .bottom {
        height: 4.95rem;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: url('../assets/img/bg/bg_fotter.png');
        background-size: 100% 100%;
        z-index: 10;
        pointer-events: none;
    }

    .bottom.active {
        background: none;
    }

    .div-label {
        position: absolute;
        z-index: 8;
        display: none;
        top: 10rem;
        left: 20rem;
    }

    .div-label.active {
        display: block;
    }

    .div-label .label-cont {
        position: relative;
    }

    .label-cont .bg-bottom {
        display: inline-block;
        width: 1.9rem;
        height: 0.95rem;
        position: absolute;
        bottom: -2.4rem;
        left: -2.9rem;
    }

    .label-cont .cover-cont {
        position: absolute;
        left: -2rem;
        bottom: -1.95rem;
        z-index: 11;
    }

    .active .label-cont .bg-bottom {
        animation: hidebottom 0.5s linear forwards;
    }

    .active .label-cont .cover-cont {
        background: url('../assets/img/bg/bg_label_line.png');
        background-size: 100% 100%;
        animation: hidebox 0.5s 0.5s linear forwards;
    }

    .div-label.active .label-cont p {
        animation: hidewords 0.5s 1.5s linear forwards;
    }

    @keyframes hidebox {
        from {
            width: 0;
            height: 0
        }

        to {
            width: 1.1rem;
            height: 1.95rem
        }
    }

    @keyframes hidebottom {
        from {
            width: 0;
            height: 0;
            left: -2.05rem
        }

        to {
            width: 1.9rem;
            height: 0.95rem;
            left: -2.9rem
        }
    }

    @keyframes hidewords {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    .div-label .label-cont p {
        display: inline-block;
        margin-left: -0.95rem;
        font-size: 0.7rem;
        box-sizing: border-box;
        padding: 0 0.3rem;
        height: 1.5rem;
        background: rgba(0, 10, 50, 1);
        border-radius: 0 0.2rem 0.2rem 0;
        opacity: 0;
        color: #FFF;
        line-height: 1.5rem;
        border: 1px solid #fff;
        white-space: nowrap;
    }

    .label-cont p em {
        display: inline-block;
        width: 0.3rem;
        height: 0.3rem;
        vertical-align: middle;
        margin-right: 0.2rem;
        border-radius: 50%;
    }

    .col-1 {
        background: #94F260;
    }

    .col-2 {
        background: #F437CA;
    }

    .col-3 {
        background: #FF862F;
    }

    .col-4 {
        background: #FF3F3F;
    }

    .col-5 {
        background: #FDFF3F;
    }

    .col-6 {
        background: #01FCE7;
    }

    .col-7 {
        background: #01E7FB
    }

    .col-8 {
        background: #FFC777
    }

    .col-9 {
        background: #21FFB3
    }

    .col-10 {
        background: #F3FB01
    }

    .col-w {
        background: #fff;
    }

    .div-label2 {
        position: absolute;
        z-index: 8;
        display: none;
        top: 10rem;
        left: 20rem;
    }

    .active.div-label2 {
        display: block;
    }

    .div-label4 {
        position: absolute;
        left: 20rem;
        top: 10rem;
        width: 6.05rem;
        height: 2.4rem;
        z-index: 8;
        display: none;
    }

    .div-label4.active {
        display: block;
    }

    .div-label4 .icon-cont {
        width: 2.2rem;
        height: 2.4rem;
        background: url('../assets/img/solution/bg_solution_label.png');
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        padding-top: 0.55rem;
        position: relative;
        z-index: 9;
    }

    .div-label4 .icon-cont .label-icon {
        width: 1.2rem;
        height: 1.2rem;
    }

    .icon-medical {
        background: url('../assets/img/operationmethods/1-6-1.png');
        background-size: 100% 100%;
    }

    .icon-police {
        background: url('../assets/img/operationmethods/1-7.png');
        background-size: 100% 100%;
    }

    .icon-car {
        background: url('../assets/img/operationmethods/1-8.png');
        background-size: 100% 100%;
    }

    .icon-set-monitor {
        background: url('../assets/img/operationmethods/1-9.png');
        background-size: 100% 100%;
    }

    .icon-partol-line {
        background: url('../assets/img/operationmethods/1-10.png');
        background-size: 100% 100%;
    }

    .div-label4 .label-name {
        position: absolute;
        width: 5rem;
        height: 1.8rem;
        background: rgba(0, 10, 50, 0.5);
        border-radius: 0 0.9rem 0.9rem 0;
        box-sizing: border-box;
        top: 0.2rem;
        right: 0;
        padding-left: 1.1rem;
        line-height: 1.8rem;
        color: #fff;
    }


    .lead-label {
        width: 0;
        height: 7.5rem;
        background: #000A32aa;
        display: flex;
        justify-content: space-around;
        border-radius: 0 0.5rem 0.5rem 0;
        margin-left: -0.95rem;
        overflow: hidden;
    }

    .active .lead-label {
        animation: showlead 0.5s 1.5s linear forwards;
    }

    @keyframes showlead {
        from {
            width: 0;
            border: 1px solid transparent;
        }

        to {
            width: 17rem;
            border: 1px solid #fff;
        }
    }

    /* .div-label2 .label-cont .bg-bottom{
        top:9.45rem;
        left: -1rem;
    }
    .div-label2 .label-cont .cover-cont{
        bottom:-1.9rem;
        left:-1.05rem;
    } */
    .img1 {
        display: inline-block;
        width: 2.5rem;
        height: 3.55rem;
    }

    .left p {
        color: #51E7FF;
        font-weight: 400;
        font-size: 0.8rem;
        margin-top: 0.75rem;
        margin-left: 0.7rem;
        text-align: left;
        line-height: 1.2em;
    }

    .left ul li em,
    span {
        color: #ffff;
        font-size: 0.6rem;
    }

    .left ul {
        margin-top: 0.7rem;
        margin-left: 0.65rem;
    }

    .left ul li {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 0.25rem;
    }

    .camare {
        display: flex;
        align-items: center;
        margin-right: 0.25rem;
    }

    .camare img {
        width: 8.9rem;
        height: 8.65rem;
        height: 100%;
        background-size: 100% 100%;
    }

    .div-label3 {
        position: absolute;
        z-index: 8;
        display: none;
        top: 10rem;
        left: 20rem;
        cursor: pointer;
    }

    .bg-div {
        width: 5rem;
        height: 1.5rem;
        line-height: 1.3rem;
        background: url('../assets/img/bg/juxing.png');
        background-size: 100% 100%;
        font-size: 0.8rem;
        color: #fff;
    }

    .label-cont {
        position: absolute !important;
        left: 39px;
        bottom: 38px;
    }

    .label-cont img,
    .label-cont div {
        pointer-events: none;
    }

    .bg-div {
        position: absolute;
        bottom: 0px;
        left: -13px;
    }

    .active.div-label3 {
        display: block;
    }

    .div-monitor {
        position: absolute;
        width: 1.8rem;
        height: 2rem;
        background: url('../assets/img/solution/bg_solution_label.png');
        background-size: 100% 100%;
        text-align: center;
        line-height: 2rem;
        top: 10rem;
        left: 20rem;
        z-index: 999;
        display: none;
        opacity: 0;
    }

    .div-monitor.active {
        display: block;
        animation: showmonitor 0.5s 1s linear forwards;
    }

    @keyframes showmonitor {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    .div-monitor img.div-monitor-icon{
        width: 1rem;
        height: 1rem;
        margin-top: -0.35rem;
    }
    .label-img{
        display: block;
        width: 16.95rem;
        height: 10.95rem;
        position: absolute;
        z-index: 999999999999;
        left: 20rem;
        top: 20rem;
        transform: scale(0.6);
        display: none;
    }
    .label-img.active{
        display: block;
    }
    .center{
        width: 6.25rem;
        height: 6.25rem;
        position: absolute;
        z-index: 999999999999;
        left: 20rem;
        top: 20rem;
        transform: scale(0.6);
        display: none;
    }
    .center.active{
        display: block;
    }
</style>