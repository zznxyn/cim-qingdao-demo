<template>
    <div class="home">
        <div class="left-contain">
            <manage v-if="showManage" :title="title" :detail="detail" :showDefault="true"
                @clickAddDialog="clickAddDialog"></manage>
        </div>
        <div class="right-contain">
            <div class="new-project">
                <img src="../../assets/img/bg/ju-img.png" alt="">
                <p @click="addProject">新建项目</p>
            </div>
            <div class="right-item">
                <other :name="otherTitle[0]"></other>
                <div class="side-item-cont">
                    <div class="side-top">
                        <div v-for="(item,index) in progremList" :key="index" @click="proTime(index)">
                            <p>{{item.num}}</p>
                            <p>{{item.name}}</p>
                            <em class="circle" :class="item.bg"></em>
                            <span class="line" v-if="item.active" :style="{'border-color':item.border}"></span>
                        </div>
                    </div>
                </div>
                <div class="search">
                    <p>项目搜索</p>
                    <div class="sea">
                        <div><input type="text"></div>
                        <div @click="showDetail"><img src="../../assets/img/bg/manage-3.png"
                                style="width:1.8rem;height:1.8rem" alt=""></div>
                    </div>
                    <div class="last" v-if="showD">
                        <p class="p"><img src="../../assets/img/bg/shijian.png" alt="">最近看过</p>
                        <ul>
                            <li v-for="(item,index) in projectList" :key="item.id" @click="toProject(index)">
                                {{item.value}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="center-con" v-if="showDialog">
            <div class="dialog">
                <img src="../../assets/img/bg/manage-5.png" @click="closeDialog" class="cancel" alt="">
                <div class="cont">
                    <div class="pro1">
                        <div class="title">
                            <span></span>
                            <p>项目基本信息</p>
                        </div>
                        <div class="box">
                            <div class="sr" v-for="item in addList" :key="item.name">
                                <span>{{item.name}}</span>
                                <div class="inp">
                                    <input type="text">
                                </div>
                            </div>
                            <div class="sr">
                                <span>入驻地块</span>
                                <div class="inp">
                                    <select name="">
                                        <option>DK8554-45</option>
                                        <option>SD-455912</option>
                                        <option>QW24587-VB</option>
                                        <option>LK0102-12A</option>
                                        <option>FH4558-458</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pro2">
                        <div class="title">
                            <span></span>
                            <p>项目情况</p>
                        </div>
                        <div class="box">
                            <div class="sr-2">
                                <span>跟进情况</span>
                                <div class="inp-2">
                                    <textarea name="" id="" cols="30" rows="10"></textarea>
                                    <!-- <em>请输入</em> -->
                                    <!-- <inpuitem.valuet type="text" placeholder="海尔跨境智慧管理项目"> -->
                                </div>
                            </div>
                        </div>
                        <div class="box" style="margin-top:0.5rem">
                            <div class="sr-2">
                                <span>备注</span>
                                <div class="inp-2">
                                    <textarea name="" id="" cols="30" rows="10"></textarea>
                                    <!-- <em>请输入</em> -->
                                    <!-- <inpuitem.valuet type="text" placeholder="海尔跨境智慧管理项目"> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="btn">
                    <div class="left-btn">保存</div>
                    <div class="right-btn">取消</div>
                </div>
            </div>
        </div>
        <div class="addDialog" v-if="showAddDialog">
            <img src="../../assets/img/bg/manage-5.png" @click="closeAddDialog" class="cancel-1" alt="">
            <div class="cont">
                <div class="pro1">
                    <div class="title">
                        <span></span>
                        <p v-if="cur == 0">跟进情况</p>
                        <p v-if="cur == 1">问题阻力</p>
                    </div>
                    <div class="box">
                        <div class="sr" v-for="item in addList2" :key="item.name">
                            <span>{{item.name}}</span>
                            <div class="inp">
                                <input type="text">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pro2">
                    <div class="box">
                        <div class="sr-2">
                            <span>情况描述</span>
                            <div class="inp-3">
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn">
                <div class="left-btn">保存</div>
                <div class="right-btn">取消</div>
            </div>
        </div>
    </div>
</template>

<script>
    import tit from '../../components/Title'
    import other from '../../components/Title1'
    import manageIntro from '../../components/ManageIntro'

    let projectId = '5b37e94fff984dcd999f1704298816a9'

    export default {
        name: "Home",
        data() {
            return {
                title: '中远山东物流基地项目',
                detail: [{
                    id: 1,
                    value: '由中国远洋海运集团有限公司投资建设,总占地65亩，总投资5.47亿元，总建筑面积4.8万平方米，主要建设双层坡道高标库、办公楼及配套用房，预留冷链库。项目建成后,将依托青岛胶东国际机场区域性航空枢纽的优势,大力发展海、陆、空、铁、公多式联运、仓储物流、电商、快件、供应链管理等业务,打造中远海运空运山东地区航空物流综合基地。'
                }, {
                    id: 2,
                    value: ''
                }, {
                    id: 3,
                    value: ''
                }],
                showDialog: false,
                showAddDialog: false,
                showD: true,
                modelLayer: null,
                otherTitle: [
                    ['项目列表']
                ],
                projectList: [{
                    id: 1,
                    value: '中远海运空运山东物流总部基地项目'
                }, {
                    id: 2,
                    value: '海程邦达半导体芯片项目'
                }, {
                    id: 3,
                    value: '成龙国际仓储物流项目'
                }, {
                    id: 4,
                    value: '航空港供应链物流项目'
                }, {
                    id: 5,
                    value: '九天国际航空培训项目'
                }, {
                    id: 6,
                    value: '青岛空港国际名品展销中心项目'
                }],
                addList: [{
                    name: '项目名称',
                    value: '海尔跨境智慧管理项目',
                }, {
                    name: '企业负责人',
                    value: '李伟',
                }, {
                    name: '联系方式',
                    value: '122385955757',
                }, {
                    name: '项目类型',
                    value: '制造业',
                }, {
                    name: '招商对接人',
                    value: '李伟',
                }, {
                    name: '对接日期',
                    value: '2019-10-29',
                }],
                addList2: [{
                    name: '跟进人'
                }, {
                    name: '录入时间'
                }],
                cur: 0,
                progremList: [{
                        name: '项目谈判',
                        color: 'col-1',
                        num: 3,
                        bg: 'bg-1',
                        active: false,
                        border: '#94F260'
                    },
                    {
                        name: '项目签约',
                        color: 'col-2',
                        num: 6,
                        bg: 'bg-2',
                        active: false,
                        border: '#FFFD33'
                    },
                    {
                        name: '土地出让',
                        color: 'col-3',
                        num: 2,
                        bg: 'bg-3',
                        active: false,
                        border: '#02FCE7'
                    },
                    {
                        name: '规划设计',
                        color: 'col-4',
                        num: 2,
                        bg: 'bg-4',
                        active: false,
                        border: '#FF6666'
                    },
                    {
                        name: '工程建设',
                        color: 'col-5',
                        num: 2,
                        bg: 'bg-5',
                        active: false,
                        border: '#FFA562'
                    },
                    {
                        name: '项目投产',
                        color: 'col-6',
                        num: 1,
                        bg: 'bg-6',
                        active: false,
                        border: '#E14CC4'
                    }
                ],
                labelList: [
                    ['divLabel1', 'divLabel2', 'divLabel3', 'divLabel4', 'divLabel5', 'divLabel6', 'divLabel7',
                        'divLabel8', 'divLabel9', 'divLabel10', 'divLabel11', 'divLabel12', 'divLabel13',
                        'divLabel14', 'divLabel15', 'divLabel16'
                    ],
                    ['divLabel38'],
                    ['divLabel36', 'divLabel37'],


                    
                    // ['divLabel1', 'divLabel6', 'divLabel9'],
                    // ['divLabel11', 'divLabel12', 'divLabel13', 'divLabel14', 'divLabel15', 'divLabel16'],
                    // ['divLabel2', 'divLabel3'],
                    // ['divLabel7', 'divLabel8'],
                    // ['divLabel10', 'divLabel5'],
                    // ['divLabel4'],
                    ['divLabel1', 'divLabel6', 'divLabel9'],
                    ['divLabel5', 'divLabel10'],
                    ['divLabel4'],
                    ['divLabel7','divLabel8'],
                    ['divLabel2', 'divLabel3'],
                    ['divLabel11', 'divLabel12'],
                ],
            }
        },
        components: {
            manage: manageIntro,
            tit,
            other
        },
        computed: {
            scene() {
                return this.$store.state.scene
            },
            isLoad() {
                return this.$store.state.isLoad
            },
            showManage() {
                return this.$store.state.showManage
            },
            showList() {
                return this.$store.state.showList[0].list
            },
        },
        mounted() {
            let _this = this;
            _this.$store.commit('destroy');
            _this.$store.commit('moveLabel');
            let timer = setInterval(function () {
                if (_this.isLoad) {
                    // 视角定位
                    let camiraInfo = [-2578002.168557427, 4455813.570448061, 3763406.809951671,
                        1.526666247102488e-13, -59.999947782831455, 359.9999999999998
                    ]
                    _this.$store.commit('setCarmeInfo', camiraInfo);
                    //添加shp
                    for (let i = 0; i < _this.showList.length; i++) {
                        let data = {
                            shpUrl: _this.showList[i].shpurl,
                            styleField: _this.showList[i].styleField,
                            colorTables: _this.showList[i].colorTables,
                            id: _this.showList[i].id
                        };
                        _this.$store.commit('addShp', data)
                    };
                    _this.showLabel(0);
                    clearInterval(timer);
                };
            }, 1000)
        },
        methods: {
            //显示标签
            showLabel(i) {
                let data = {
                    list: this.labelList[i],
                    id: 0
                }
                this.$store.commit('addDivLabel', data)
            },
            proTime(i) {
                if (this.progremList[i].active) {
                    this.$store.commit('moveLabel');
                    this.progremList.forEach(item => {
                        item.active = false;
                    })
                    this.$nextTick(function () {
                        this.showLabel(0)
                    })
                } else {
                    this.$store.commit('moveLabel');
                    this.progremList.forEach(item => {
                        item.active = false;
                    })
                    this.progremList[i].active = true;
                    this.$nextTick(function () {
                        this.showLabel(i + 3)
                    })
                }
            },
            // 加载模型
            loadModel() {
                this.$axios.get(
                        cimUrl + '/api/model/getGraph?projectId=58c9163b75ef4adc9c5fd83e6edd6638')
                    .then(res => {
                        if (res.data.code == 1) {
                            let data = res.data.data;
                            data.forEach(item => {
                                this.modelLayer = addGraph(this.scene, item);
                            });
                        }
                    })
            },
            // 点击
            toProject(i) {
                if (i == 0) {
                    let camiraInfo = [-2575398.002978681, 4449809.155443757, 3763606.5776275005, 354.37959754612, -
                        76.31813379024932, 359.922964706167
                    ];
                    this.$store.commit('setCarmeInfo', camiraInfo);
                    // this.loadModel();

                }
            },
            addProject() {
                this.showDialog = true;
            },
            closeDialog() {
                this.showDialog = false;
            },
            showDetail() {
                // this.showD = true;
            },
            clickAddDialog(i) {
                this.cur = i;
                this.showAddDialog = true;
            },
            closeAddDialog() {
                this.showAddDialog = false;
            }
        },
        destroyed() {
            // 关闭详情
            this.$store.commit('closeManage');
            // 消除标签
            this.$store.commit('moveLabel');
            // 销毁模型
            removeGraph(this.scene, this.modelLayer);
        }
    };
</script>

<style scoped>
    p{
        margin-bottom: 0;
    }
    .left-contain {
        position: absolute;
        top: 0;
        bottom: 5.6rem;
        left: 2.45rem;
    }

    .right-contain {
        position: fixed;
        top: 4.4rem;
        bottom: 0;
        right: 0;
        width: 15rem;
        box-sizing: border-box;
        padding: 1.55rem 1rem 5.51rem;
        background: linear-gradient(to right, rgba(0, 10, 50, 0) 0%, rgba(0, 10, 50, 60%) 100%);
        z-index: 2147483547;
    }

    .new-project {
        background: linear-gradient(90deg, #2B64EC 0%, #68E4F9 100%);
        opacity: 0.8;
        height: 2rem;
        justify-content: center;
        align-items: center;
        display: flex;
        cursor: pointer;
    }

    .new-project p {
        font-size: 0.8rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #FFFFFF;
        margin-left: 0.35rem;
    }

    .new-project img {
        vertical-align: middle;
    }

    .right-side .right-item .side-item-cont {
        margin-top: 0.9rem;
        margin-bottom: 1.84rem;
    }

    .right-side .right-item:last-of-type {
        margin-top: 1.06rem;
    }

    .right-item .side-item-cont .side-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        flex-wrap: wrap;
        cursor: pointer;
    }

    .side-item-cont .side-top>div {
        width: 5.4rem;
        height: 5.4rem;
        margin-bottom: 0.7rem;
        background: url('../../assets/img/bg/manage-1.png');
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .side-item-cont .side-top>div p:first-of-type {
        font-size: 1.5rem;
        height: 1.5rem;
        line-height: 1.5rem;
        color: #fff;
        /* margin-top: 1.15rem; */
    }

    .side-item-cont .side-top>div .circle {
        display: inline-block;
        width: 0.3rem;
        height: 0.3rem;
        /* background: #A9EE74; */
        border-radius: 50%;
        margin-top: 0.2rem;
    }


    .side-item-cont .side-top>div p:last-of-type {
        font-size: 0.7rem;
        height: 0.7rem;
        line-height: 0.8rem;
        color: rgba(255, 255, 255, 0.5);
    }

    .right-item {
        margin-top: 1.15rem;
    }

    .search p {
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #FFFFFF;
        text-align: left;
        /* margin-left: 0.25rem; */
        margin-bottom: 0.4rem;
    }

    .sea {
        display: flex;
        height: 1.8rem;
    }

    .sea div:first-child {
        width: 11.25rem;
        height: 1.8rem;
        background: url('../../assets/img/bg/manage-2.png');
        background-size: 100% 100%;
    }

    .sea div:last-child {
        cursor: pointer;
    }

    .sea input {
        background: none;
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        font-size: 0.7rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #FFFFFF;
        margin-left: 0.7rem;
    }

    .sea span {
        position: absolute;
        color: #fff;
        font-size: 0.7rem;
        line-height: 1.8rem;
        margin-left: 0.95rem;
    }

    .last ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .last ul li {
        width: 100%;
        text-align: left;
        font-size: 0.6rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #FFFFFF;
        height: 1.5rem;
        line-height: 1.5rem;
        border-bottom: 0.05rem solid #ccc;
        cursor: pointer;
    }

    .search .p {
        font-size: 0.6rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #FFFFFF;
        opacity: 0.5;
        margin-left: -0.5rem;
        margin-top: 0.25rem;
    }

    /* .center-con {
        position: absolute;
        top: 0.6rem;
        left: 0;
        right: 0;
        bottom: 0.35rem;
        z-index: 99;
    } */

    .dialog {
        width: 55%;
        height: 100%;
        background: url('../../assets/img/bg/manage-4.png');
        background-size: 100% 100%;
        position: absolute;
        left: 22.95rem;
        z-index: 22222222222222;
    }

    .cancel {
        position: absolute;
        right: -1.2rem;
        cursor: pointer;
    }

    .cancel-1 {
        position: absolute;
        right: -1.1rem;
        cursor: pointer;
    }

    .cont {
        width: 90%;
        margin: auto;
    }

    .title {
        display: flex;
        align-items: center;
    }

    .title span {
        display: inline-block;
        width: 8px;
        height: 8px;
        background: linear-gradient(0deg, #2B64EC 0%, #68E4F9 100%);
        transform: rotate(-45deg);
    }

    .title p {
        font-size: 0.7rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #FFFFFF;
        margin-left: 0.25rem;
    }

    .pro1 {
        margin-top: 2.1rem;
    }

    .sr {
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        margin-bottom: 0.8rem;
    }

    .sr span {
        font-size: 0.7rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #FFFFFF;
        opacity: 0.5;
        margin-left: 0.75rem;
    }

    .inp {
        width: 15rem;
        height: 1.7rem;
        border: 1px solid #ccc;
        /* opacity: 0.5; */
        margin-top: 0.25rem;
    }

    .inp em {
        font-size: 0.7rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #FFFFFF;
        margin-left: 0.7rem;
        height: 1.8rem;
        line-height: 1.8rem;
        text-align: left;
        display: inline-block;
        width: 100%;
    }

    .inp input {
        background: none;
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        font-size: 0.7rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #FFFFFF;
        margin-left: 0.7rem;
    }

    .box {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .inp-2 {
        width: 100%;
        height: 7.1rem;
        border: 1px solid #ccc;
    }

    .inp-3 {
        width: 100%;
        height: 13.75rem;
        border: 1px solid #ccc;
    }

    .sr-2 {
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .sr-2 span {
        font-size: 0.7rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #FFFFFF;
        opacity: 0.5;
        margin-left: 0.75rem;
        margin-bottom: 0.25rem;
    }

    .sr-2 em {
        font-size: 0.7rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #FFFFFF;
        margin-left: 0.7rem;
        text-align: left;
        display: inline-block;
        width: 100%;
    }

    .btn {
        display: flex;
        justify-content: center;
        margin-top: 1.2rem;
    }

    .btn div {
        width: 5rem;
        height: 1.7rem;
        background: linear-gradient(90deg, #2B64EC 0%, #68E4F9 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFFFFF;
        cursor: pointer;
    }

    .left-btn {
        width: 5rem;
        height: 1.7rem;
        background: linear-gradient(90deg, #2B64EC 0%, #68E4F9 100%);
        margin-right: 2.5rem;
    }

    textarea {
        outline: none;
        resize: none;
        background: none;
        border: none;
        width: 100%;
        height: 100%;
        font-size: 0.7rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #FFFFFF;
        margin-left: 0.7rem;
    }

    .col-1 {
        color: #94F260;
    }

    .bg-1 {
        background: #94F260;
    }

    .col-2 {
        color: #FFFD33;
    }

    .bg-2 {
        background: #FFFD33;
    }

    .col-3 {
        color: #02FCE7;
    }

    .bg-3 {
        background: #02FCE7;
    }

    .col-4 {
        color: #FF6666;
    }

    .bg-4 {
        background: #FF6666;
    }

    .col-5 {
        color: #FFA562;
    }

    .bg-5 {
        background: #FFA562;
    }

    .col-6 {
        color: #E14CC4;
    }

    .bg-6 {
        background: #E14CC4;
    }

    .addDialog {
        width: 40%;
        height: 73%;
        background: url('../../assets/img/manage/m-2.png');
        background-size: 100% 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 22222222222222;
    }

    select {
        /*重置Chrome和Firefox的select边框样式*/
        border: 1px solid #000;
        /*清除默认的select选择框样式*/
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
        background: none;
        outline: none;
        border: none;
        width: 97%;
        height: 100%;
        color: #fff;
        background-color: #010B30;
        opacity: 0.3;
        margin-left: 0.5rem;
    }

    .line {
        border: 2px solid red;
        width: 67px;
        height: 67px;
        border-radius: 50%;
        position: absolute;
    }
</style>