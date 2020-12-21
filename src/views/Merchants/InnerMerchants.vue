<template>
    <div class="home">
        <!-- 右侧按钮区域 -->
        <div class="ul_menu">
            <div v-for="(item,index) in menuList" :key="item.id" @click="changeRoutes(index)"
                :class="{'active':item.active}">
                <span>{{item.name}}</span>
            </div>
        </div>
        <!-- 临空区概况 -->
        <div class="box1" v-show="0===num">
            <div class="text">
                <div class="indent">
                    青岛胶东临空经济示范区于2016年10月20日获国家发改委、中国民航局联合批复,成为全国首个“国家级临空经济示范区",并明确了四大发展定位:区域性国际航空枢纽、高端临空产业基地、对外开放引领区、现代化生态智慧空港城。示范区总规划面积149平方公里,核心区位于胶州市域,规划面积139平方公里,拓展区面积221平方公里。
                </div>
                <div class="indent">
                    青岛胶东临空经济示范区获批以来,始终秉承“亩均论英雄”理念,坚持“向地下要空间,向空中要效益",整合要素资源助力高质量发展，全力发展以现代物流、航空工业、高科技制造、休闲会展等为主导的多元综合型空港经济,致力打造世界一流智慧空港城，为建设更高水平开放型现代化上合新区贡献临空力量。
                </div>
                <div class="indent">
                    按照习近平总书记关于新机场“是国家发展一个新的动力源”的科学论断,胶州市委、市政府在上级党委、政府正确领导下，全面推动青岛胶东临空经济示范区与青岛胶东国际机场同步规划、同步建设,并确立了“圈层+廊带”的发展思路,瞄准世界500强知名临空关联企业,开展定向招商、精准招商,重点发展三大航空产业(航空保障、航空物流、航空维修与制造),四大临空高新技术产业(高端制造、新一代信息技术、生物医药、科创研发)，四大临空服务业(会展商务、金融贸易、文化旅游、健康医疗)，着力构建完善“3+4+4”临空产业体系。
                </div>
                <!-- <p class="indent"></p> -->
            </div>
        </div>
        <!-- 产业空间规划 -->
        <div class="statis" v-show="1===num">
            <ul class="chart">
                <li v-for="item in chart[0]" :key="item.id">
                    <em :class="item.class"></em>
                    <span class="name">{{item.name}}</span>
                </li>
            </ul>
        </div>
        <!-- 重点发展产业 -->
        <div>
            <div class="statis" v-show="2===num">
                <ul class="chart">
                    <li v-for="item in chart[1]" :key="item.id">
                        <em :class="item.class"></em>
                        <span class="name">{{item.name}}</span>
                    </li>
                </ul>
            </div>
            <div class="box2" v-if="showEnterprisetManage">
                <div class="title-cont">
                    <div class="title-comp">
                        <tit :title="title"></tit>
                    </div>
                    <em class="icon-close" @click="showSupport"></em>
                </div>
                <div class="total-intro">
                    <ul>
                        <li v-for="item in areaList" :key="item.name">
                            <span class="name">{{item.name}}</span>
                            <em class="em">{{item.value}}</em>
                        </li>
                    </ul>
                </div>
                <div class="last">
                    <p class="p">规划控制条文:</p>
                    <ol>
                        <li>1、开发空间：地块为片区标志性建筑</li>
                        <li>2、城市设计：新建建筑为商业建筑</li>
                        <li>3、建议06-09-A4地块内公共厕所开放</li>
                    </ol>
                </div>
            </div>
        </div>
        <!-- 龙头企业 -->
        <div class="left" v-show="3===num" v-if="showLeadManage">
            <manage :title="title1" :detail="detail"></manage>
        </div>
        <!-- 产业政策扶持 -->
        <div class="left" v-show="4===num">
            <div class="title-cont">
                <div class="title-comp">
                    <tit :title="title2"></tit>
                </div>
                <em class="title-wz">MORE</em>
            </div>
            <div class="list">
                <div class="bg">
                    <span>标题</span>
                    <span>时间</span>
                </div>
                <ul class="list_tab">
                    <li v-for="(item,index) in tableList" :key="item.name" @click="showListDetail(index)">
                        <span>{{item.name}}</span>
                        <span>{{item.value}}</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="center-con" v-if="showDialog">
            <div class="dialog">
                <img src="../../assets/img/bg/manage-5.png" @click="closeDialog" class="cancel" alt="">
                <div class="dia-title">物流业支持政策</div>
                <p class="time">2020.09.15</p>
                <div class="dia-con">
                    <table border="1" style="border-collapse: collapse;border:1px">
                        <tr height="50px">
                            <th>序号</th>
                            <th>项目名称</th>
                            <th>申报基本条件</th>
                            <th>奖励政策</th>
                            <th>奖励依据</th>
                        </tr>
                        <tr>
                            <td width="5%">1</td>
                            <td>重点物流项目</td>
                            <td>鼓励新引进项目按其业态和产业定位向物流业集聚区（“两园两中心”）发展。对新引进的实际投资5
                                亿元以上且累计已完成实际投资额50%以上的在建重大物流项目，给予补助。（工程竣工验收通过且正常运营达到项目准入标准后兑付）。
                            </td>
                            <td>按项目实际投资额的1‰给予补助，单个项目最高不超过300万元，且只能享受一次补助。
                            </td>
                            <td rowspan="7">《关于加快现代物流产业发展的意见》(胶政发〔2018〕66 号)
                            </td>
                        </tr>
                        <tr>
                            <td width="5%">2</td>
                            <td>推进物流公共信息平台建设</td>
                            <td>从智慧物流角度，以物联网技术为基础，加快物流公共信息平台建设，整合物流、商流、信息流、资金流，拓展公众行业物流信息应用，构建物流大数据库，对企业自主研发、建设且投资200万元以上的项目给予奖励。
                            </td>
                            <td>按照项目投入的10%给予最高200万元奖励。</td>
                        </tr>
                        <tr>
                            <td width="5%">3</td>
                            <td>鼓励物流企业扩大信息化应用</td>
                            <td>鼓励物流企业扩大信息化应用，通过自主购置或开发信息管理系统，搭建与生产制造企业、商贸企业信息整合平台，实现产业互促融合发展。项目投资50 万元以上的给予补助。
                            </td>
                            <td>按照项目投入的10%给予最高50万</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td width="5%">4</td>
                            <td>鼓励企业高端设备投入</td>
                            <td>对采用自动存取设备、自动分拣设备、新能源车辆等先进设备的企业，且投资100万元以上的给予补助。
                            </td>
                            <td>按照设备投入的5%给予最高50万元补助。</td>
                        </tr>
                        <tr>
                            <td width="5%">5</td>
                            <td>支持物流企业做大做强</td>
                            <td>按照国家《物流企业分类与评估指标》标准和《冷链物流企业星级评估办法》，被评为国家3A（三星）、4A（四星）、5A（五星）级且纳入规模以上服务业统计的物流企业，给予奖励。
                            </td>
                            <td>被评为国家3A（三星）、4A（四星）、5A（五星）级且纳入规模以上服务业统计的物流企业，分别奖励20 万元、30 万元、50 万元。由3A 升4A、4A 升5A 的，补差计奖。
                            </td>
                        </tr>
                        <tr>
                            <td width="5%">6</td>
                            <td>培育壮大企业规模</td>
                            <td>对年营业收入首次超过100 亿元、50 亿元、30 亿元、20 亿元、10 亿元、5 亿元且纳入规模以上服务业统计的物流企业，给予奖励。
                            </td>
                            <td>分别给予企业经营者100 万元、50万元、30 万元、20 万元、10 万元、5 万元奖励。
                            </td>
                        </tr>
                        <tr>
                            <td width="5%">7</td>
                            <td>支持物流人才的培养和引进</td>
                            <td>对在本企业缴纳保险人员考取行业相关资格证书达到10 人(含)以上的物流企业，给予奖励，资格证书包括：国际物流学会的供应链SCOR 证书（级别不限）、英国皇家物流协会ILT
                                证书三级以上。
                            </td>
                            <td>给予20 万元一次性奖励。
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    /* eslint-disable */
    let timer = null;
    import title from '../../components/Title'
    import tit from '../../components/Title'
    import other from '../../components/Title1'
    import manageIntro from '../../components/ManageIntro'
    export default {
        name: "Home",
        components: {
            tit: title,
            manage: manageIntro,
            tit,
            other
        },
        data() {
            return {
                scene: null,
                showDialog: false,
                shpManage: null,
                shpManage1: null,
                shpManage2: null,
                shpManage3: null,
                shpManage4: null,
                shpManage5: null,
                shpManage6: null,
                shpManage7: null,
                shpManage8: null,
                shpManage9: null,
                shpManage10: null,
                shpManage11: null,
                shpManage12: null,
                shpManage13: null,
                shpManage14: null,
                shpManage15: null,
                shpManage16: null,
                shpManage17: null,
                shpManage18: null,
                shpManage19: null,
                shpManage20: null,
                shpManage21: null,
                shpManage22: null,
                shpManage23: null,
                shpManage24: null,
                num: 0,
                // title: '中远山东物流基地项目',
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
                title: 'DK8554-45',
                show: true,
                show1: true,
                menuList: [{
                        name: '临空区域概况',
                        id: 1,
                        active: true,
                    },
                    {
                        name: '产业空间规划',
                        id: 2,
                        active: false,
                    },
                    {
                        name: '重点发展产业',
                        id: 3,
                        active: false,
                    },
                    {
                        name: '龙头企业介绍',
                        id: 4,
                        active: false,
                    },
                    {
                        name: '产业扶持政策',
                        id: 5,
                        active: false,
                    }
                ],
                chart: [
                    [{
                            name: '机场核心区',
                            class: 'bg-pink',
                            id: 1
                        },
                        {
                            name: '产业片区',
                            class: 'bg-yello',
                            id: 2
                        }, {
                            name: '铁路公路生态廊道',
                            class: 'bg-green',
                            id: 3
                        }, {
                            name: '大沽河生态景观带',
                            class: 'bg-blue',
                            id: 4
                        }
                    ],
                    [{
                            name: '综合物流',
                            class: 'bg-1',
                            id: 1
                        },
                        {
                            name: '生活服务',
                            class: 'bg-2',
                            id: 2
                        }, {
                            name: '航空制造与维修',
                            class: 'bg-3',
                            id: 3
                        }, {
                            name: '商务休闲',
                            class: 'bg-4',
                            id: 4
                        },{
                            name: '企业研发',
                            class: 'bg-5',
                            id: 5
                        },{
                            name: '机场综合服务',
                            class: 'bg-6',
                            id: 6
                        },{
                            name: '公务航空运营保障',
                            class: 'bg-7',
                            id: 7
                        },{
                            name: '都市产业',
                            class: 'bg-8',
                            id: 8
                        }
                    ]
                ],
                areaList: [{
                        name: '地块编号:',
                        value: 'LK0103-10'
                    },
                    {
                        name: '项目名称:',
                        value: '中远物流总部基地项目'
                    },
                    {
                        name: '用地性质代号:',
                        value: '中远物流总部基地项目'
                    },
                    {
                        name: '用地性质名称:',
                        value: '商业用地'
                    },
                    {
                        name: '总用地面积:',
                        value: '1258.63㎡'
                    },
                    {
                        name: '净用地面积:',
                        value: '1212.63㎡'
                    },
                    {
                        name: '容积率:',
                        value: '3.25'
                    },
                    {
                        name: '绿地率:',
                        value: '3.25'
                    },
                    {
                        name: '建筑密度:',
                        value: '40'
                    },
                    {
                        name: '建筑限高上限:',
                        value: '235米'
                    },
                    {
                        name: '主要出口方向:',
                        value: '东'
                    },
                    {
                        name: '配套设置项目:',
                        value: '游乐场'
                    },
                    {
                        name: '建筑限高下限:',
                        value: '62米'
                    },
                    {
                        name: '居住人口:',
                        value: '1.2万'
                    },
                    {
                        name: '建筑后退距离:',
                        value: '568米'
                    },
                    {
                        name: '配建机动车位:',
                        value: '569个'
                    },
                    {
                        name: '容积率分布:',
                        value: '5类'
                    },
                ],
                title1: '中远物流总部基地项目',
                List: [{
                        name: '成立时间:',
                        value: '1984.12.26'
                    },
                    {
                        name: '企业类型:',
                        value: '智能制造'
                    },
                    {
                        name: '员工人数:',
                        value: '2.5万'
                    },
                    {
                        name: '利润收益:',
                        value: '12.26亿'
                    }
                ],
                title2: '政策公告',
                tableList: [{
                        name: '先进制造业支持政策',
                        value: '2020.09.15'
                    },
                    {
                        name: '物流业支持政策',
                        value: '2020.09.18'
                    },
                    {
                        name: '服务业支持政策',
                        value: '2020.09.20'
                    },
                    {
                        name: '电子商务扶持政策',
                        value: '2020.10.10'
                    },
                    {
                        name: '金融政策',
                        value: '2020.09.15'
                    },
                    {
                        name: '人才支撑政策',
                        value: '2020.09.16'
                    },
                    {
                        name: '创新创业政策',
                        value: '2020.09.19'
                    },
                ],
            }
        },
        computed: {
            showList() {
                return this.$store.state.showList
            },
            isLoad() {
                return this.$store.state.isLoad
            },
            showLeadManage() {
                return this.$store.state.showLeadManage
            },
            showEnterprisetManage() {
                return this.$store.state.showEnterprisetManage
            }
        },

        mounted() {
            let _this = this;
            // 隐藏标签
            _this.$store.commit('moveLabel');
            // 销毁
            _this.$store.commit('destroy');
            _this.$store.commit('destoryOther');
            setTimeout(function () {
                if (_this.isLoad) {
                    // 视角定位
                    let camiraInfo = [-2599611.053014836, 4491173.049517972, 3765072.0483634546, 0, -60, 0]
                    _this.$store.commit('setCarmeInfo', camiraInfo);
                    _this.scene = _this.$store.state.scene;
                    // 边界上浮
                    _this.initBoundary(_this.scene);
                    // 显示标签
                    setTimeout(function () {
                        _this.showGenLabel();
                    }, 2500);
                    // 初始化临空区shp
                    _this.initSpace(_this.scene);
                    // 初始化空间产业规划shp
                    _this.initGenManager(_this.scene);
                    // 初始化重点产业shp
                    _this.initEnterprise(_this.scene);
                    // 初始化龙头企业
                    _this.initLeadEnterprise(_this.scene);
                    // 初始化产业扶持
                    _this.initSupport(_this.scene);

                }
            }, 0);
            // 循环播放
            _this.tab();
        },
        methods: {
            tab() {
                let index = 0;
                let _this = this;
                this.timer = setInterval(function () {
                    if (index < 5) {
                        _this.changeRoutes(index, 1);
                        index = index + 1;
                    } else {
                        index = 0;
                    };
                }, 20000);
            },
            changeRoutes(i, isAuto) {
                if (!isAuto) {
                    clearInterval(this.timer);
                };

                let _this = this
                this.$store.commit('destroy');
                this.menuList.forEach(item => {
                    item.active = false;
                });
                this.menuList[i].active = true;
                this.num = i;
                if (i === 0) {
                    let cameraInfo = [-2600024.5481047085, 4492119.609841762, 3774895.319675066, 357.593795374802, -
                        68.86233774778853, 0.10811668658509134
                    ];
                    this.$store.commit('setCarmeInfo', cameraInfo);

                    let ds = this.shpManageGenAll.dataSource;
                    if (ds.length === 0) {
                        this.shpManage5.dataSource.forEach(d => ds.push(d));
                        this.shpManage6.dataSource.forEach(d => ds.push(d));
                        this.shpManage7.dataSource.forEach(d => ds.push(d));
                        this.shpManage8.dataSource.forEach(d => ds.push(d));
                        this.shpManage9.dataSource.forEach(d => ds.push(d));
                    };
                    this.shpManageGenAll.showShp(1000);
                    setTimeout(function () {
                        _this.showGenLabel();
                    }, 0);
                } else {
                    this.shpManageGenAll.hideShp();
                    this.$store.commit('moveLabel');
                }
                if (i === 1) {
                    let camiraInfo = [-2599611.053014836, 4491173.049517972, 3765072.0483634546, 0, -60, 0]
                    _this.$store.commit('setCarmeInfo', camiraInfo);
                    let ds = this.shpManageAll.dataSource;
                    if (ds.length === 0) {
                        this.shpManage.dataSource.forEach(d => ds.push(d));
                        this.shpManage1.dataSource.forEach(d => ds.push(d));
                        this.shpManage2.dataSource.forEach(d => ds.push(d));
                        this.shpManage3.dataSource.forEach(d => ds.push(d));
                        this.shpManage4.dataSource.forEach(d => ds.push(d));
                        this.shpManage18.dataSource.forEach(d => ds.push(d));
                        this.shpManage23.dataSource.forEach(d => ds.push(d));
                    }
                    this.shpManageAll.showShp(1000, this.shpManage.dataSource.length);
                    setTimeout(function () {
                        _this.showSpanLabel();
                    }, 2000)
                } else {
                    this.shpManageAll.hideShp();
                    this.$store.commit('moveLabel');
                };
                if (i === 2) {
                    let camiraInfo = [-2599611.053014836, 4491173.049517972, 3765072.0483634546, 0, -60, 0]
                    _this.$store.commit('setCarmeInfo', camiraInfo);
                    let ds = this.shpManageEnterpriseAll.dataSource;
                    if (ds.length === 0) {
                        this.shpManage10.dataSource.forEach(d => ds.push(d));
                        this.shpManage24.dataSource.forEach(d => ds.push(d));
                        this.shpManage17.dataSource.forEach(d => ds.push(d));
                    }
                    this.shpManageEnterpriseAll.showShp(1000, this.shpManage10.dataSource.length);
                    setTimeout(function () {
                        _this.showEnterPriseLabel();
                    }, 0);
                } else {
                    // 隐藏shp
                    this.shpManageEnterpriseAll.hideShp();
                    this.$store.commit('moveLabel');
                    this.$store.commit('showEnterprisetManage', false);
                };
                if (i === 3) {
                    let ds = this.shpManageLeadAll.dataSource;
                    if (ds.length === 0) {
                        this.shpManage19.dataSource.forEach(d => ds.push(d));
                        this.shpManage20.dataSource.forEach(d => ds.push(d));
                        this.shpManage21.dataSource.forEach(d => ds.push(d));
                        this.shpManage22.dataSource.forEach(d => ds.push(d));
                        this.shpManage11.dataSource.forEach(d => ds.push(d));
                    };
                    this.shpManageLeadAll.showShp(1000);
                    // 调用龙头企业shpManage
                    this.$store.commit('hideLeadEnterPriseShp', this.shpManageLeadAll);
                    setTimeout(function () {
                        // 定位到综保区
                        let cameraInfo = [-2578577.7946421704, 4457423.452159537, 3763016.45529964, 360, -
                            59.999990624517785, 360
                        ]
                        _this.$store.commit('setCarmeInfo', cameraInfo);
                        _this.showLeadLabel();
                    }, 1000)
                } else {
                    this.shpManageLeadAll.hideShp();
                    this.$store.commit('removeModal');
                    this.$store.commit('moveLabel');
                    this.$store.commit('showEnterprisetManage', false);
                };
                if (i === 4) {
                    let cameraInfo = [-2600024.5481047085, 4492119.609841762, 3774895.319675066, 357.593795374802, -
                        68.86233774778853, 0.10811668658509134
                    ];
                    let ds = this.shpManageSupportAll.dataSource;
                    if (ds.length === 0) {
                        this.shpManage12.dataSource.forEach(d => ds.push(d));
                        this.shpManage13.dataSource.forEach(d => ds.push(d));
                        this.shpManage14.dataSource.forEach(d => ds.push(d));
                        this.shpManage15.dataSource.forEach(d => ds.push(d));
                        this.shpManage16.dataSource.forEach(d => ds.push(d));
                    };
                    this.shpManageSupportAll.showShp(1000);
                    this.$store.commit('setCarmeInfo', cameraInfo);
                } else {
                    this.shpManageSupportAll.hideShp();
                    this.$store.commit('moveLabel');
                }
            },
            // 边界上浮
            initBoundary(scene) {
                let _this = this;
                let lines = [
                    [
                        [120.14896823100003, 36.419736141000044],
                        [120.1477389690001, 36.41829579800003],
                        [120.14773555600004, 36.41649346300005],
                        [120.14818035000008, 36.415862093000044],
                        [120.14817624200009, 36.41369929000007],
                        [120.14739391, 36.41270897100003],
                        [120.14794180500007, 36.40766173900005],
                        [120.14648826300004, 36.405410603000064],
                        [120.1464847100001, 36.40351814700006],
                        [120.1464828500001, 36.40252686000008],
                        [120.14881719200002, 36.399009404000026],
                        [120.14947391100009, 36.39801977500008],
                        [120.14992517400003, 36.39549344500006],
                        [120.1530409830001, 36.39278597500004],
                        [120.15348382800005, 36.391253412000026],
                        [120.15473822100012, 36.38691197800006],
                        [120.15870459700011, 36.38241508500005],
                        [120.16405417100009, 36.38240785800008],
                        [120.1717346690001, 36.37807142400004],
                        [120.18042036800011, 36.37508474400005],
                        [120.18141766800011, 36.37265005900008],
                        [120.1782931570001, 36.37076229400003],
                        [120.18152010100005, 36.368774847000054],
                        [120.18452721800008, 36.368139417000066],
                        [120.18786488600006, 36.36597139100007],
                        [120.18842201600012, 36.365970514000026],
                        [120.18953846000011, 36.36686992500006],
                        [120.19332631200007, 36.36659350300005],
                        [120.19420944000001, 36.36325771600008],
                        [120.19688061500005, 36.36208181500007],
                        [120.1975367440001, 36.36179296000006],
                        [120.20412217700004, 36.36178189100008],
                        [120.20990733800011, 36.35854504800005],
                        [120.21186577500009, 36.35744916300007],
                        [120.20765390300005, 36.34908661500003],
                        [120.20741938700007, 36.34467124400004],
                        [120.20708916300009, 36.338452999000026],
                        [120.20005231000005, 36.338826132000065],
                        [120.20003940600009, 36.33377954000008],
                        [120.2000345670001, 36.331887067000025],
                        [120.1960243100001, 36.33162335700007],
                        [120.19266680700002, 36.325050186000055],
                        [120.18742390000011, 36.32145378900003],
                        [120.18641949200003, 36.32055417600003],
                        [120.18641112300008, 36.317039572000056],
                        [120.18273363500009, 36.31587371100005],
                        [120.17932518500004, 36.31479300900003],
                        [120.17932106800004, 36.31299508800004],
                        [120.17370351800002, 36.311201012000026],
                        [120.17241533600009, 36.31078955700008],
                        [120.17413548400009, 36.30516244000006],
                        [120.17413428200007, 36.304621730000065],
                        [120.16889068000012, 36.29967272600004],
                        [120.16421324200007, 36.298958292000066],
                        [120.15808405700011, 36.29599263400007],
                        [120.15907776100005, 36.291935970000054],
                        [120.146383162, 36.289789333000044],
                        [120.14593185100011, 36.286545604000025],
                        [120.14170276800007, 36.28700128500003],
                        [120.14080594500001, 36.28348770500003],
                        [120.13679709900009, 36.282501049000075],
                        [120.13679269600004, 36.27997772200007],
                        [120.12754846900009, 36.27629305600004],
                        [120.11830850800004, 36.27486064800007],
                        [120.11463453500005, 36.27405315400006],
                        [120.11397134600008, 36.27720795700003],
                        [120.11375371500003, 36.28063268900007],
                        [120.11397973200008, 36.28297556900003],
                        [120.11454114500009, 36.28630943500008],
                        [120.11587983000004, 36.28829076200003],
                        [120.1158806300001, 36.28883147500005],
                        [120.11277323600007, 36.29541312400005],
                        [120.11199460000012, 36.29586445000007],
                        [120.10906620800006, 36.292443915000035],
                        [120.07600188200001, 36.29317772700006],
                        [120.06403221800008, 36.29253870600007],
                        [120.0640332160001, 36.29375895600003],
                        [120.06403378700008, 36.29445785200005],
                        [120.06447335700011, 36.29566054600008],
                        [120.06532999000001, 36.29791452200004],
                        [120.06555624100008, 36.301426212000024],
                        [120.06312475400011, 36.31142886300006],
                        [120.04075186200009, 36.30798587100003],
                        [120.02839073300004, 36.302582322000035],
                        [120.02538439300008, 36.30177192900004],
                        [120.02126484900009, 36.30123202000004],
                        [120.01658863700004, 36.300421691000054],
                        [120.01514120200011, 36.29988117000005],
                        [120.00779297000008, 36.29690795300007],
                        [120.00545506700007, 36.29672784500008],
                        [120.00256055600005, 36.297178537000036],
                        [119.99588075400004, 36.298890751000044],
                        [119.98864399400009, 36.30060254000006],
                        [119.98651519600003, 36.30110599000005],
                        [119.98084999600007, 36.303305109000064],
                        [119.97628459600003, 36.30519678400003]
                    ],
                    [
                        [119.97628459600003, 36.30519678400003],
                        [119.97183057900008, 36.30636736100007],
                        [119.96815630700007, 36.306366439000044],
                        [119.9614765660001, 36.30483245500005],
                        [119.95245971800011, 36.302125647000025],
                        [119.95002705200011, 36.30139522600007],
                        [119.9464479080001, 36.30167251200004],
                        [119.94477763100008, 36.30203222700004],
                        [119.93241450800008, 36.30770335700004],
                        [119.92361416000006, 36.31202375300006]
                    ],
                    [
                        [119.92361416000006, 36.31202375300006],
                        [119.92293905600002, 36.31914268500003],
                        [119.92293595100011, 36.32229683000003],
                        [119.92248514000005, 36.32770364300006],
                        [119.92228265300002, 36.33013192200008],
                        [119.92181105600002, 36.33356089500006],
                        [119.92091427600008, 36.33923775400007],
                        [119.92091172500011, 36.34176106100006],
                        [119.92035118700005, 36.34527529500008],
                        [119.91997807100006, 36.34761432700003],
                        [119.91967688200009, 36.35104240000004],
                        [119.9192286550001, 36.353565401000026],
                        [119.91889106300005, 36.35680941900006],
                        [119.91844287200001, 36.35924229700004],
                        [119.9182164560001, 36.36266662100007],
                        [119.9177683040001, 36.365009377000035],
                        [119.91731888600009, 36.36852366000005],
                        [119.9171112680001, 36.37014704300003],
                        [119.91798557400011, 36.370326474000024],
                        [119.93648220900002, 36.371779624000055],
                        [119.94395368400001, 36.37236577700003],
                        [119.95087324500003, 36.37290820700008],
                        [119.9538648350001, 36.37314259400006],
                        [119.95843406000006, 36.373500438000065],
                        [119.99331353700006, 36.376212088000045],
                        [119.99353636700005, 36.37684292400007],
                        [119.99219848700011, 36.382610371000055],
                        [119.99186387400005, 36.38513364000005],
                        [119.99140981200003, 36.38855739100006],
                        [119.99140954400002, 36.39099124400008],
                        [119.99108264800009, 36.39432556500003],
                        [119.99085296100009, 36.39666818400008],
                        [119.99063606700008, 36.400273275000075],
                        [119.99063589400009, 36.401715152000065],
                        [120.0103675470001, 36.40279647600005],
                        [120.01326600100003, 36.40279618900007],
                        [120.01761368100006, 36.402795627000046],
                        [120.02040060900003, 36.40261494900005],
                        [120.02474813700007, 36.40216354100005],
                        [120.02766989400004, 36.40186008000006],
                        [120.03199373200005, 36.40099029500004],
                        [120.03366580000011, 36.40080960100005],
                        [120.03589718800004, 36.404864227000076],
                        [120.0387983170001, 36.41009011700004],
                        [120.03980282500004, 36.41225259700008],
                        [120.04103094800007, 36.41549639700003],
                        [120.04181268400009, 36.41783916800006],
                        [120.0429255250001, 36.421173973000066],
                        [120.04367933500009, 36.42343271400006],
                        [120.04516296800011, 36.42693976100003],
                        [120.04594483700009, 36.429102267000076],
                        [120.0475079900001, 36.43225574400003],
                        [120.05074550400002, 36.437481184000035],
                        [120.05219670200006, 36.43946312600008],
                        [120.05443698200008, 36.44252250400007],
                        [120.0559372680001, 36.444571171000064],
                        [120.05812893900008, 36.44756370600004],
                        [120.05958051400012, 36.44954555400005],
                        [120.06191919300011, 36.45273832500004],
                        [120.0646992400001, 36.452736850000065],
                        [120.0761898610001, 36.45368864300008],
                        [120.0789836560001, 36.453919889000076],
                        [120.08055183700003, 36.45404966000007],
                        [120.08277303800003, 36.45521624000003],
                        [120.08534123300001, 36.45656496600003],
                        [120.08958031000009, 36.457374119000065],
                        [120.09237008700006, 36.45809292400003],
                        [120.09623699100007, 36.45908912700003],
                        [120.09962331200006, 36.45961906900004],
                        [120.10330611100005, 36.460607218000064],
                        [120.10620744700009, 36.461145369000064],
                        [120.10899751300008, 36.46186378500005],
                        [120.11055939900007, 36.46186234800007],
                        [120.11345978100007, 36.46167939400004],
                        [120.1176991750001, 36.46167528800004],
                        [120.12071095600004, 36.46140193100007],
                        [120.1249500450001, 36.46121733600006],
                        [120.12785416000008, 36.46109078600006],
                        [120.13231223700006, 36.46066870400006],
                        [120.1353095280001, 36.460384830000066],
                        [120.1377692210001, 36.46015181400003],
                        [120.1377627920001, 36.45651718600004],
                        [120.13775801100007, 36.45381370000007],
                        [120.13698482200004, 36.45327389100004],
                        [120.13407534900011, 36.447960324000064],
                        [120.13216994200002, 36.442555456000036],
                        [120.13495677000003, 36.441651172000036],
                        [120.1360330440001, 36.441301914000064],
                        [120.1393049940001, 36.44074501100005],
                        [120.14209298800006, 36.44056149200003],
                        [120.14644116900001, 36.440275143000065],
                        [120.14945074700006, 36.44007685300005],
                        [120.15369095800008, 36.439826192000055],
                        [120.15682138500006, 36.43964103800005],
                        [120.15870547200007, 36.43765683200007],
                        [120.15870382100002, 36.43684578500006],
                        [120.15914514600001, 36.43450216400004],
                        [120.15936101000011, 36.430987325000046],
                        [120.15935585200009, 36.428464063000035],
                        [120.15935382600003, 36.42747278100006],
                        [120.15890391500011, 36.425580928000045],
                        [120.15566757300007, 36.42432355600005],
                        [120.15494666600011, 36.42404345400007],
                        [120.15466130800007, 36.42297311100003],
                        [120.1532095870001, 36.421893580000074],
                        [120.14997279700003, 36.42027558500007],
                        [120.14896823100003, 36.419736141000044]
                    ],
                ]
                lines.forEach(line => {
                    let guid = scene.entityLayer.appendWirelineEntity(line, 100, 4,
                        '#54aaf7');
                    scene.entityLayer.setEntityTransparency(guid, 0);
                    let t = 0;
                    let step = 20;
                    let timer = setInterval(function () {
                        t += step;
                        scene.entityLayer.setEntityTransparency(guid, (t > 1000 ?
                            2000 - t :
                            t) / 1000);
                        if (t >= 2000) {
                            clearInterval(timer);

                            // TODO 加载 总规土地利用类型_84.shp
                            let ds = _this.shpManageGenAll.dataSource;
                            if (ds.length === 0) {
                                _this.shpManage5.dataSource.forEach(d => ds.push(d));
                                _this.shpManage6.dataSource.forEach(d => ds.push(d));
                                _this.shpManage7.dataSource.forEach(d => ds.push(d));
                                _this.shpManage8.dataSource.forEach(d => ds.push(d));
                                _this.shpManage9.dataSource.forEach(d => ds.push(d));
                            };
                            _this.shpManageGenAll.showShp(1000);

                        }
                    }, step * 3);
                });
            },
            // 临空区初始化shp
            initSpace(scene) {
                this.shpManage5 = initShpManager(scene, {
                    shpUrl: "BcEngineX/shp/总规土地利用类型_84.shp",
                    styleField: 'OBJECTID_2',
                    colorTables: [{
                        "1": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "2": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "3": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "5": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "8": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "11": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "16": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "19": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "21": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "29": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "31": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "33": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "34": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "36": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "37": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "38": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "42": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "44": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "49": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "51": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "53": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "59": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "61": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "67": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "68": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "69": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "70": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "77": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "81": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "89": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "92": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "93": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "95": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "102": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "105": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "106": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "108": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "109": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "110": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "111": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "114": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "119": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "120": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "122": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "124": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "132": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "134": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "137": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "138": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "143": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "145": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "146": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "147": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "153": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "155": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "158": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "159": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "160": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "163": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "168": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "172": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "173": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "175": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "181": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "183": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "185": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "186": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "189": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "190": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "192": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "194": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "195": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "196": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "197": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "198": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "199": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "200": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "201": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "202": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "209": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "212": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "213": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "214": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "216": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "217": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "218": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "219": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "220": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "221": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "222": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "223": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "224": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "225": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "226": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "228": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "238": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "239": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "240": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "242": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "243": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "245": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "247": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "249": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "250": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "251": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "252": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "254": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "255": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "257": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "258": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "260": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "261": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "263": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "265": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "271": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "272": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "273": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "274": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "275": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "279": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "282": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "283": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "286": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "292": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "293": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "301": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "303": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "305": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "309": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "310": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "311": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "315": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "266": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "317": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "4": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "6": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "7": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "9": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "10": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "12": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "13": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "14": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "15": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "17": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "18": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "20": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "22": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "23": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "26": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "28": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "32": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "39": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "40": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "43": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "45": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "46": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "47": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "48": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "50": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "52": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "54": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "55": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "56": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "57": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "304": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "58": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "60": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "62": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "64": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "65": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "71": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "72": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "73": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "74": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "75": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "76": [185 / 255, 138 / 255, 92 / 255, 0.7],
                        "79": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "80": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "82": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "83": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "84": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "85": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "86": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "78": [254 / 255, 0 / 255, 0 / 255, 0.7],
                        "87": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "88": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "90": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "91": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "94": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "96": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "97": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "98": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "99": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "100": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "101": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "103": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "104": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "107": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "112": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "113": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "115": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "116": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "117": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "231": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "267": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "276": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "278": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "281": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "295": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "296": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "302": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "308": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "118": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "121": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "123": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "125": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "126": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "127": [255 / 255, 128 / 255, 158 / 255, 0.7],
                        "128": [161 / 255, 184 / 255, 93 / 255, 0.7],
                        "129": [255 / 255, 191 / 255, 127 / 255, 0.7],
                        "130": [255 / 255, 191 / 255, 127 / 255, 0.7],
                        "131": [255 / 255, 191 / 255, 127 / 255, 0.7],
                        "133": [255 / 255, 0 / 255, 254 / 255, 0.7],
                        "135": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "139": [159 / 255, 126 / 255, 255 / 255, 0.7],
                        "140": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "141": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "149": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "150": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "151": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "154": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "157": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "161": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "162": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "164": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "165": [254 / 255, 0 / 255, 0 / 255, 0.7],
                        "169": [254 / 255, 0 / 255, 0 / 255, 0.7],
                        "177": [254 / 255, 0 / 255, 0 / 255, 0.7],
                        "215": [254 / 255, 0 / 255, 0 / 255, 0.7],
                        "227": [254 / 255, 0 / 255, 0 / 255, 0.7],
                        "230": [254 / 255, 0 / 255, 0 / 255, 0.7],
                        "284": [254 / 255, 0 / 255, 0 / 255, 0.7],
                        "285": [254 / 255, 0 / 255, 0 / 255, 0.7],
                        "287": [254 / 255, 0 / 255, 0 / 255, 0.7],
                        "166": [180 / 255, 180 / 255, 180 / 255, 0.7],
                        "259": [180 / 255, 180 / 255, 180 / 255, 0.7],
                        "170": [255 / 255, 0 / 255, 254 / 255, 0.7],
                        "171": [255 / 255, 0 / 255, 254 / 255, 0.7],
                        "174": [150 / 255, 0 / 255, 1 / 255, 0.7],
                        "203": [150 / 255, 0 / 255, 1 / 255, 0.7],
                        "204": [150 / 255, 0 / 255, 1 / 255, 0.7],
                        "205": [150 / 255, 0 / 255, 1 / 255, 0.7],
                        "206": [150 / 255, 0 / 255, 1 / 255, 0.7],
                        "207": [150 / 255, 0 / 255, 1 / 255, 0.7],
                        "208": [150 / 255, 0 / 255, 1 / 255, 0.7],
                        "210": [150 / 255, 0 / 255, 1 / 255, 0.7],
                        "211": [150 / 255, 0 / 255, 1 / 255, 0.7],
                        "180": [241 / 255, 192 / 255, 247 / 255, 0.7],
                        "184": [241 / 255, 192 / 255, 247 / 255, 0.7],
                        "187": [241 / 255, 192 / 255, 247 / 255, 0.7],
                        "188": [241 / 255, 192 / 255, 247 / 255, 0.7],
                        "191": [241 / 255, 192 / 255, 247 / 255, 0.7],
                        "193": [241 / 255, 192 / 255, 247 / 255, 0.7],
                        "232": [222 / 255, 110 / 255, 166 / 255, 0.7],
                        "236": [222 / 255, 110 / 255, 166 / 255, 0.7],
                        "237": [222 / 255, 110 / 255, 166 / 255, 0.7],
                        "244": [222 / 255, 110 / 255, 166 / 255, 0.7],
                        "277": [222 / 255, 110 / 255, 166 / 255, 0.7],
                        "280": [222 / 255, 110 / 255, 166 / 255, 0.7],
                        "233": [161 / 255, 184 / 255, 93 / 255, 0.7],
                        "235": [161 / 255, 184 / 255, 93 / 255, 0.7],
                        "297": [161 / 255, 184 / 255, 93 / 255, 0.7],
                        "234": [255 / 255, 128 / 255, 158 / 255, 0.7],
                        "241": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "246": [255 / 255, 191 / 255, 127 / 255, 0.7],
                        "248": [255 / 255, 191 / 255, 127 / 255, 0.7],
                        "253": [255 / 255, 191 / 255, 127 / 255, 0.7],
                        "256": [255 / 255, 191 / 255, 127 / 255, 0.7],
                        "289": [255 / 255, 191 / 255, 127 / 255, 0.7],
                        "264": [255 / 255, 191 / 255, 127 / 255, 0.7],
                        "268": [0 / 255, 138 / 255, 184 / 255, 0.7],
                        "269": [0 / 255, 138 / 255, 184 / 255, 0.7],
                        "270": [0 / 255, 138 / 255, 184 / 255, 0.7],
                        "288": [149 / 255, 74 / 255, 94 / 255, 0.7],
                        "307": [149 / 255, 74 / 255, 94 / 255, 0.7],
                        "290": [251 / 255, 207 / 255, 182 / 255, 0.7],
                        "291": [255 / 255, 191 / 255, 127 / 255, 0.7],
                        "136": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "306": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "299": [74 / 255, 112 / 255, 149 / 255, 0.7],
                        "300": [74 / 255, 112 / 255, 149 / 255, 0.7],
                        "298": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "312": [206 / 255, 217 / 255, 187 / 255, 0.7],
                        "313": [206 / 255, 217 / 255, 187 / 255, 0.7],
                        "314": [206 / 255, 217 / 255, 187 / 255, 0.7],
                    }],
                });
                this.shpManage6 = initShpManager(scene, {
                    shpUrl: 'BcEngineX/shp/综保区地块用地类型80转84_带地块编码_重点项目信息_RGB.shp',
                    styleField: 'YDLXBM',
                    colorTables: [{
                        "R2": [255 / 255, 255 / 255, 0 / 255, 0.7],
                        "W1": [191 / 255, 127 / 255, 255 / 255, 0.7],
                        "G2": [76 / 255, 153 / 255, 76 / 255, 0.7],
                        "G1": [0 / 255, 255 / 255, 0 / 255, 0.7],
                        "B1": [255 / 255, 0 / 255, 63 / 255, 0.7],
                        "B2": [204 / 255, 0 / 255, 0 / 255, 0.7],
                        "U": [0 / 255, 114 / 255, 153 / 255, 0.7],
                        "A33": [255 / 255, 0 / 255, 255 / 255, 0.7],
                        "A2": [255 / 255, 159 / 255, 127 / 255, 0.7],
                        "R22": [255 / 255, 223 / 255, 127 / 255, 0.7],
                        "U15": [0 / 255, 114 / 255, 153 / 255, 0.7],
                        "U31": [0 / 255, 114 / 255, 153 / 255, 0.7],
                        "U12": [0 / 255, 114 / 255, 153 / 255, 0.7],
                        "U14": [0 / 255, 114 / 255, 153 / 255, 0.7],
                        "U": [0 / 255, 114 / 255, 153 / 255, 0.7],
                        "U21": [0 / 255, 38 / 255, 153 / 255, 0.7],
                        "U12": [0 / 255, 114 / 255, 153 / 255, 0.7],
                        "S41": [128 / 255, 128 / 255, 128 / 255, 0.7],
                        "S42": [128 / 255, 128 / 255, 128 / 255, 0.7],
                        "H21": [128 / 255, 128 / 255, 128 / 255, 0.7],
                        "H0": [102 / 255, 204 / 255, 204 / 255, 0.7],
                        "S3": [192 / 255, 192 / 255, 192 / 255, 0.7],
                        "A1": [255 / 255, 223 / 255, 127 / 255, 0.7],
                        "R22": [255 / 255, 223 / 255, 127 / 255, 0.7],
                        "M1": [204 / 255, 153 / 255, 102 / 255, 0.7],
                        "W3": [159 / 255, 127 / 255, 255 / 255, 0.7],
                        "E1": [127 / 255, 255 / 255, 255 / 255, 0.7],
                        "RB": [255 / 255, 127 / 255, 0 / 255, 0.7],
                    }]
                });
                this.shpManage7 = initShpManager(scene, {
                    shpUrl: 'BcEngineX/shp/道路面_84.shp',
                    styleField: 'OBJECTID',
                    colorTables: [{
                        "1": [255 / 255, 255 / 255, 255 / 255, 0.7],
                    }]
                });
                this.shpManage8 = initShpManager(scene, {
                    shpUrl: 'BcEngineX/shp/河流_84.shp',
                    styleField: 'OBJECTID',
                    colorTables: [{
                        "1": [44 / 255, 102 / 255, 113 / 255, 0.7],
                    }]
                });
                this.shpManage9 = initShpManager(scene, {
                    shpUrl: 'BcEngineX/shp/规划红线_84.shp',
                    styleField: 'FID_',
                    colorTables: [{
                        "0": [84 / 255, 170 / 255, 247 / 255, 1],
                    }]
                });

                this.shpManageGenAll = initShpManager(scene, {
                    colorTables: [],
                });
            },
            // 产业空间规划初始化shp
            initGenManager(scene) {
                this.shpManage18 = initShpManager(scene, {
                    shpUrl: "/BcEngineX/shp/产业范围面_84.shp",
                    styleField: 'OBJECTID',
                    colorTables: [{
                        "1": [155 / 255, 155 / 255, 155 / 255, 0.4],
                    }],
                });

                this.shpManage = initShpManager(scene, {
                    shpUrl: "/BcEngineX/shp/产业功能分区1012.shp",
                    styleField: 'OBJECTID',
                    colorTables: [{
                        "1": [241 / 255, 231 / 255, 171 / 255, 0.7],
                    }, {
                        "2": [239 / 255, 127 / 255, 123 / 255, 0.7],
                    }, {
                        "3": [241 / 255, 231 / 255, 171 / 255, 0.7],
                        "8": [241 / 255, 231 / 255, 171 / 255, 0.7],
                    }, {
                        "4": [239 / 255, 127 / 255, 123 / 255, 0.7],
                        "5": [241 / 255, 231 / 255, 171 / 255, 0.7],
                        "6": [241 / 255, 231 / 255, 171 / 255, 0.7],
                    }, {
                        "7": [241 / 255, 231 / 255, 171 / 255, 0.7],
                    }],
                });

                this.shpManage1 = initShpManager(scene, {
                    shpUrl: "BcEngineX/shp/产业功能分区规划范围线_80_84.shp",
                    styleField: 'FID_',
                    colorTables: [{
                        "0": [255 / 255, 0 / 255, 0 / 255, 1],
                    }],
                });

                this.shpManage2 = initShpManager(scene, {
                    shpUrl: "BcEngineX/shp/胶济客专生态廊道_80_84.shp",
                    styleField: 'OBJECTID_1',
                    colorTables: [{
                        '9': [113 / 255, 196 / 255, 126 / 255,0.7],
                    }],
                });

                this.shpManage3 = initShpManager(scene, {
                    shpUrl: "BcEngineX/shp/大沽河景观带_a_80_84.shp",
                    styleField: 'OBJECTID_1',
                    colorTables: [{
                        '10': [113 / 255, 196 / 255, 126 / 255, 0.7]
                    }],
                });

                this.shpManage4 = initShpManager(scene, {
                    shpUrl: "BcEngineX/shp/胶济铁路生态廊道_a_80_84.shp",
                    styleField: 'OBJECTID_1',
                    colorTables: [{
                        '11': [113 / 255, 196 / 255, 126 / 255, 0.7],
                    }],
                });
                
                this.shpManage23 = initShpManager(scene, {
                    shpUrl: "BcEngineX/shp/产业功能分区1012.json",
                    styleField: "OBJECTID",
                    color: [0, 0, 1, 0],
                    lineWidth: 7,
                    colorTables: [{
                        "1": [241 / 255, 231 / 255, 171 / 255, 1],
                        "2": [239 / 255, 127 / 255, 123 / 255, 1],
                        "3": [241 / 255, 231 / 255, 171 / 255, 1],
                        "4": [239 / 255, 127 / 255, 123 / 255, 1],
                        "5": [241 / 255, 231 / 255, 171 / 255, 1],
                        "6": [241 / 255, 231 / 255, 171 / 255, 1],
                        "7": [241 / 255, 231 / 255, 171 / 255, 1],
                    }]
                });

                this.shpManageAll = initShpManager(scene, {
                    colorTables: [],
                });
            },
            // 初始化重点产业shp
            initEnterprise(scene) {
                this.shpManage17 = initShpManager(scene, {
                    shpUrl: "/BcEngineX/shp/产业范围面_84.shp",
                    styleField: 'OBJECTID',
                    colorTables: [{
                        "1": [200 / 255, 200 / 255, 180 / 255, 0.4],
                    }],
                });
                this.shpManage10 = initShpManager(scene, {
                    shpUrl: "/BcEngineX/shp/重点产业分区84坐标.shp",
                    styleField: 'CYLXMC',
                    colorTables: [{
                        'ZHWL': [195 / 255, 166 / 255, 219 / 255, 0.7],
                        'SHFW': [245 / 255, 245 / 255, 150 / 255, 0.7],
                        'TLJZXZXZ': [217 / 255, 108 / 255, 128 / 255, 0.7],
                    }, {
                        'WLZBHJG': [197 / 255, 161 / 255, 149 / 255, 0.7],
                        'SHFW': [245 / 255, 245 / 255, 150 / 255, 0.7],
                    }, {
                        'ZHWL': [195 / 255, 166 / 255, 219 / 255, 0.7],
                        'HKZZYWX': [197 / 255, 161 / 255, 149 / 255, 0.7],
                        'GDZZ': [197 / 255, 161 / 255, 149 / 255, 0.7],
                        'GWHKYYBZ': [161 / 255, 203 / 255, 228 / 255, 0.7],
                    }, {
                        'GWHKYYBZ': [161 / 255, 203 / 255, 228 / 255, 0.7],
                        'HKZZYWX': [197 / 255, 161 / 255, 149 / 255, 0.7],
                        'GWHKYYBZ': [161 / 255, 203 / 255, 228 / 255, 0.7],
                        'GWHKGSJD': [226 / 255, 110 / 255, 131 / 255, 0.7],
                        'HKBL': [226 / 255, 110 / 255, 131 / 255,0.7],
                        'GWJZLZL': [226 / 255, 110 / 255, 131 / 255, 0.7],
                    }, {
                        'SHFW': [245 / 255, 245 / 255, 150 / 255, 0.7],
                        'HKZBZZ': [169 / 255, 180 / 255, 221 / 255, 0.7],
                        'BSWL': [195 / 255, 166 / 255, 219 / 255, 0.7],
                        'SWXX': [217 / 255, 108 / 255, 128 / 255, 0.7],
                        'GDDZ': [153 / 255, 106 / 255, 206 / 255, 0.7],
                        'HKZBZZ': [169 / 255, 180 / 255, 221 / 255, 0.7],
                        'SWXX': [217 / 255, 108 / 255, 128 / 255, 0.7],
                        'QYYF/JYPX': [252 / 255, 179 / 255, 208 / 255, 0.7],
                        'SWSMZH': [217 / 255, 108 / 255, 128 / 255, 0.7],
                        'ZHWL': [195 / 255, 166 / 255, 219 / 255, 0.7],
                        'QYYF': [252 / 255, 179 / 255, 208 / 255, 0.7],
                        'GDZZ': [197 / 255, 161 / 255, 149 / 255, 0.7],
                        'QYYF': [252 / 255, 179 / 255, 208 / 255, 0.7],
                        'SHFW': [245 / 255, 245 / 255, 150 / 255, 0.7],
                        'DSCY': [235 / 255, 166 / 255, 194 / 255, 0.7],
                    }, {
                        'ZHWL': [195 / 255, 166 / 255, 219 / 255, 0.7],
                        'FJGZWX': [206 / 255, 168 / 255, 155 / 255,0.7],
                        'BSWL': [195 / 255, 166 / 255, 219 / 255,0.7],
                        'HKHY': [195 / 255, 166 / 255, 219 / 255, 0.7],
                        'HKWX': [197 / 255, 161 / 255, 149 / 255, 0.7],
                        'JCZHFW': [216 / 255, 159 / 255, 202 / 255, 0.7],
                        'FWWB': [192 / 255, 158 / 255, 146 / 255, 0.7],
                        'ZBJD': [216 / 255, 159 / 255, 202 / 255, 0.7],
                        'ZBJJ': [217 / 255, 108 / 255, 128 / 255, 0.7],
                        'HZSW': [228 / 255, 161 / 255, 189 / 255, 0.7],
                        'DSCY': [235 / 255, 166 / 255, 194 / 255, 0.7],
                        'ZHSMPS': [195 / 255, 166 / 255, 219 / 255, 0.7],
                        'DSCY': [235 / 255, 166 / 255, 194 / 255, 0.7],
                    }, {
                        'XXDJ': [217 / 255, 217 / 255, 217 / 255, 0.7],
                        'SHFW': [245 / 255, 245 / 255, 150 / 255, 0.7],
                        'SHFW': [245 / 255, 245 / 255, 150 / 255, 0.7],
                        'CYCY': [214 / 255, 155 / 255, 199 / 255, 0.7],
                        'SWXXYL': [217 / 255, 108 / 255, 128 / 255, 0.7],
                        'SHFW': [245 / 255, 245 / 255, 150 / 255, 0.7],
                    }],
                });
                
                this.$store.commit('initPriseShpManage', this.shpManage10);
                this.shpManage24 = initShpManager(scene, {
                    shpUrl: "BcEngineX/shp/重点产业分区84坐标.json",
                    // styleField: "CYLXMC",
                    color: [0.7, 0.7, 0.7, 1],
                    lineWidth: 4,
                    colorTables: [{
                        "1": [200 / 255, 200 / 255, 180 / 255, 1],
                    }]
                });
                this.shpManageEnterpriseAll = initShpManager(scene, {
                    colorTables: [],
                });
            },
            // 初始化龙头企业
            initLeadEnterprise(scene) {
                this.shpManage19 = initShpManager(scene, {
                    shpUrl: "BcEngineX/shp/总规土地利用类型_84.shp",
                    styleField: 'OBJECTID_2',
                    colorTables: [{
                        "1": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "2": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "3": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "5": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "8": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "11": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "16": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "19": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "21": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "29": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "31": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "33": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "34": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "36": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "37": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "38": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "42": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "44": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "49": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "51": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "53": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "59": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "61": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "67": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "68": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "69": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "70": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "77": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "81": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "89": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "92": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "93": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "95": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "102": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "105": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "106": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "108": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "109": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "110": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "111": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "114": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "119": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "120": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "122": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "124": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "132": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "134": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "137": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "138": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "143": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "145": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "146": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "147": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "153": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "155": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "158": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "159": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "160": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "163": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "168": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "172": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "173": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "175": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "181": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "183": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "185": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "186": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "189": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "190": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "192": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "194": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "195": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "196": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "197": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "198": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "199": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "200": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "201": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "202": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "209": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "212": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "213": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "214": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "216": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "217": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "218": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "219": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "220": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "221": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "222": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "223": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "224": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "225": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "226": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "228": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "238": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "239": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "240": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "242": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "243": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "245": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "247": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "249": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "250": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "251": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "252": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "254": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "255": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "257": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "258": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "260": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "261": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "263": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "265": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "271": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "272": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "273": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "274": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "275": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "279": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "282": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "283": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "286": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "292": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "293": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "301": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "303": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "305": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "309": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "310": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "311": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "315": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "266": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "317": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "4": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "6": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "7": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "9": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "10": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "12": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "13": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "14": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "15": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "17": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "18": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "20": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "22": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "23": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "26": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "28": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "32": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "39": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "40": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "43": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "45": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "46": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "47": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "48": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "50": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "52": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "54": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "55": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "56": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "57": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "304": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "58": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "60": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "62": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "64": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "65": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "71": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "72": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "73": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "74": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "75": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "76": [185 / 255, 138 / 255, 92 / 255, 0.7],
                        "79": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "80": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "82": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "83": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "84": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "85": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "86": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "78": [254 / 255, 0 / 255, 0 / 255, 0.7],
                        "87": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "88": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "90": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "91": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "94": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "96": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "97": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "98": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "99": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "100": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "101": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "103": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "104": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "107": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "112": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "113": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "115": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "116": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "117": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "231": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "267": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "276": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "278": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "281": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "295": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "296": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "302": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "308": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "118": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "121": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "123": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "125": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "126": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "127": [255 / 255, 128 / 255, 158 / 255, 0.7],
                        "128": [161 / 255, 184 / 255, 93 / 255, 0.7],
                        "129": [255 / 255, 191 / 255, 127 / 255, 0.7],
                        "130": [255 / 255, 191 / 255, 127 / 255, 0.7],
                        "131": [255 / 255, 191 / 255, 127 / 255, 0.7],
                        "133": [255 / 255, 0 / 255, 254 / 255, 0.7],
                        "135": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "139": [159 / 255, 126 / 255, 255 / 255, 0.7],
                        "140": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "141": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "149": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "150": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "151": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "154": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "157": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "161": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "162": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "164": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "165": [254 / 255, 0 / 255, 0 / 255, 0.7],
                        "169": [254 / 255, 0 / 255, 0 / 255, 0.7],
                        "177": [254 / 255, 0 / 255, 0 / 255, 0.7],
                        "215": [254 / 255, 0 / 255, 0 / 255, 0.7],
                        "227": [254 / 255, 0 / 255, 0 / 255, 0.7],
                        "230": [254 / 255, 0 / 255, 0 / 255, 0.7],
                        "284": [254 / 255, 0 / 255, 0 / 255, 0.7],
                        "285": [254 / 255, 0 / 255, 0 / 255, 0.7],
                        "287": [254 / 255, 0 / 255, 0 / 255, 0.7],
                        "166": [180 / 255, 180 / 255, 180 / 255, 0.7],
                        "259": [180 / 255, 180 / 255, 180 / 255, 0.7],
                        "170": [255 / 255, 0 / 255, 254 / 255, 0.7],
                        "171": [255 / 255, 0 / 255, 254 / 255, 0.7],
                        "174": [150 / 255, 0 / 255, 1 / 255, 0.7],
                        "203": [150 / 255, 0 / 255, 1 / 255, 0.7],
                        "204": [150 / 255, 0 / 255, 1 / 255, 0.7],
                        "205": [150 / 255, 0 / 255, 1 / 255, 0.7],
                        "206": [150 / 255, 0 / 255, 1 / 255, 0.7],
                        "207": [150 / 255, 0 / 255, 1 / 255, 0.7],
                        "208": [150 / 255, 0 / 255, 1 / 255, 0.7],
                        "210": [150 / 255, 0 / 255, 1 / 255, 0.7],
                        "211": [150 / 255, 0 / 255, 1 / 255, 0.7],
                        "180": [241 / 255, 192 / 255, 247 / 255, 0.7],
                        "184": [241 / 255, 192 / 255, 247 / 255, 0.7],
                        "187": [241 / 255, 192 / 255, 247 / 255, 0.7],
                        "188": [241 / 255, 192 / 255, 247 / 255, 0.7],
                        "191": [241 / 255, 192 / 255, 247 / 255, 0.7],
                        "193": [241 / 255, 192 / 255, 247 / 255, 0.7],
                        "232": [222 / 255, 110 / 255, 166 / 255, 0.7],
                        "236": [222 / 255, 110 / 255, 166 / 255, 0.7],
                        "237": [222 / 255, 110 / 255, 166 / 255, 0.7],
                        "244": [222 / 255, 110 / 255, 166 / 255, 0.7],
                        "277": [222 / 255, 110 / 255, 166 / 255, 0.7],
                        "280": [222 / 255, 110 / 255, 166 / 255, 0.7],
                        "233": [161 / 255, 184 / 255, 93 / 255, 0.7],
                        "235": [161 / 255, 184 / 255, 93 / 255, 0.7],
                        "297": [161 / 255, 184 / 255, 93 / 255, 0.7],
                        "234": [255 / 255, 128 / 255, 158 / 255, 0.7],
                        "241": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "246": [255 / 255, 191 / 255, 127 / 255, 0.7],
                        "248": [255 / 255, 191 / 255, 127 / 255, 0.7],
                        "253": [255 / 255, 191 / 255, 127 / 255, 0.7],
                        "256": [255 / 255, 191 / 255, 127 / 255, 0.7],
                        "289": [255 / 255, 191 / 255, 127 / 255, 0.7],
                        "264": [255 / 255, 191 / 255, 127 / 255, 0.7],
                        "268": [0 / 255, 138 / 255, 184 / 255, 0.7],
                        "269": [0 / 255, 138 / 255, 184 / 255, 0.7],
                        "270": [0 / 255, 138 / 255, 184 / 255, 0.7],
                        "288": [149 / 255, 74 / 255, 94 / 255, 0.7],
                        "307": [149 / 255, 74 / 255, 94 / 255, 0.7],
                        "290": [251 / 255, 207 / 255, 182 / 255, 0.7],
                        "291": [255 / 255, 191 / 255, 127 / 255, 0.7],
                        "136": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "306": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "299": [74 / 255, 112 / 255, 149 / 255, 0.7],
                        "300": [74 / 255, 112 / 255, 149 / 255, 0.7],
                        "298": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "312": [206 / 255, 217 / 255, 187 / 255, 0.7],
                        "313": [206 / 255, 217 / 255, 187 / 255, 0.7],
                        "314": [206 / 255, 217 / 255, 187 / 255, 0.7],
                    }],
                });
                this.shpManage11 = initShpManager(scene, {
                    shpUrl: "/BcEngineX/shp/综保区地块用地类型80转84_带地块编码_重点项目信息_RGB.shp",
                    styleField: 'YDLXBM',
                    colorTables: [{
                        "R2": [255 / 255, 255 / 255, 0 / 255, 0.7],
                        "W1": [191 / 255, 127 / 255, 255 / 255, 0.7],
                        "G2": [76 / 255, 153 / 255, 76 / 255, 0.7],
                        "G1": [0 / 255, 255 / 255, 0 / 255, 0.7],
                        "B1": [255 / 255, 0 / 255, 63 / 255, 0.7],
                        "B2": [204 / 255, 0 / 255, 0 / 255, 0.7],
                        "U": [0 / 255, 114 / 255, 153 / 255, 0.7],
                        "A33": [255 / 255, 0 / 255, 255 / 255, 0.7],
                        "A2": [255 / 255, 159 / 255, 127 / 255, 0.7],
                        "R22": [255 / 255, 223 / 255, 127 / 255, 0.7],
                        "U15": [0 / 255, 114 / 255, 153 / 255, 0.7],
                        "U31": [0 / 255, 114 / 255, 153 / 255, 0.7],
                        "U12": [0 / 255, 114 / 255, 153 / 255, 0.7],
                        "U14": [0 / 255, 114 / 255, 153 / 255, 0.7],
                        "U": [0 / 255, 114 / 255, 153 / 255, 0.7],
                        "U21": [0 / 255, 38 / 255, 153 / 255, 0.7],
                        "U12": [0 / 255, 114 / 255, 153 / 255, 0.7],
                        "S41": [128 / 255, 128 / 255, 128 / 255, 0.7],
                        "S42": [128 / 255, 128 / 255, 128 / 255, 0.7],
                        "H21": [128 / 255, 128 / 255, 128 / 255, 0.7],
                        "H0": [102 / 255, 204 / 255, 204 / 255, 0.7],
                        "S3": [192 / 255, 192 / 255, 192 / 255, 0.7],
                        "A1": [255 / 255, 223 / 255, 127 / 255, 0.7],
                        "R22": [255 / 255, 223 / 255, 127 / 255, 0.7],
                        "M1": [204 / 255, 153 / 255, 102 / 255, 0.7],
                        "W3": [159 / 255, 127 / 255, 255 / 255, 0.7],
                        "E1": [127 / 255, 255 / 255, 255 / 255, 0.7],
                        "RB": [255 / 255, 127 / 255, 0 / 255, 0.7],
                    }],
                });
                this.shpManage20 = initShpManager(scene, {
                    shpUrl: 'BcEngineX/shp/道路面_84.shp',
                    styleField: 'OBJECTID',
                    colorTables: [{
                        "1": [255 / 255, 255 / 255, 255 / 255, 0.7],
                    }]
                });
                this.shpManage21 = initShpManager(scene, {
                    shpUrl: 'BcEngineX/shp/河流_84.shp',
                    styleField: 'OBJECTID',
                    colorTables: [{
                        "1": [44 / 255, 102 / 255, 113 / 255, 0.7],
                    }]
                });
                this.shpManage22 = initShpManager(scene, {
                    shpUrl: 'BcEngineX/shp/规划红线_84.shp',
                    styleField: 'FID_',
                    colorTables: [{
                        "0": [84 / 255, 170 / 255, 247 / 255, 1],
                    }]
                });
                this.$store.commit('initLeadShpManage', this.shpManage11);
                this.shpManageLeadAll = initShpManager(scene, {
                    colorTables: [],
                });
            },
            // 初始化产业扶持政策
            initSupport(scene) {
                this.shpManage12 = initShpManager(scene, {
                    shpUrl: "BcEngineX/shp/总规土地利用类型_84.shp",
                    styleField: 'OBJECTID_2',
                    colorTables: [{
                        "1": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "2": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "3": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "5": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "8": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "11": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "16": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "19": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "21": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "29": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "31": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "33": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "34": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "36": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "37": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "38": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "42": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "44": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "49": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "51": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "53": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "59": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "61": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "67": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "68": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "69": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "70": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "77": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "81": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "89": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "92": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "93": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "95": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "102": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "105": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "106": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "108": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "109": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "110": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "111": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "114": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "119": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "120": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "122": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "124": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "132": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "134": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "137": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "138": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "143": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "145": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "146": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "147": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "153": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "155": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "158": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "159": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "160": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "163": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "168": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "172": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "173": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "175": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "181": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "183": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "185": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "186": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "189": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "190": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "192": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "194": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "195": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "196": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "197": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "198": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "199": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "200": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "201": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "202": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "209": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "212": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "213": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "214": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "216": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "217": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "218": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "219": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "220": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "221": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "222": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "223": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "224": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "225": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "226": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "228": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "238": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "239": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "240": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "242": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "243": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "245": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "247": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "249": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "250": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "251": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "252": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "254": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "255": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "257": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "258": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "260": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "261": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "263": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "265": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "271": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "272": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "273": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "274": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "275": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "279": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "282": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "283": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "286": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "292": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "293": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "301": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "303": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "305": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "309": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "310": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "311": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "315": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "266": [92 / 255, 161 / 255, 72 / 255, 0.4],
                        "317": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "4": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "6": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "7": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "9": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "10": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "12": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "13": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "14": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "15": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "17": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "18": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "20": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "22": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "23": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "26": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "28": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "32": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "39": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "40": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "43": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "45": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "46": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "47": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "48": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "50": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "52": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "54": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "55": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "56": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "57": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "304": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "58": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "60": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "62": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "64": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "65": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "71": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "72": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "73": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "74": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "75": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "76": [185 / 255, 138 / 255, 92 / 255, 0.7],
                        "79": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "80": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "82": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "83": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "84": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "85": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "86": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "78": [254 / 255, 0 / 255, 0 / 255, 0.7],
                        "87": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "88": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "90": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "91": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "94": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "96": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "97": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "98": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "99": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "100": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "101": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "103": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "104": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "107": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "112": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "113": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "115": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "116": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "117": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "231": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "267": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "276": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "278": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "281": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "295": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "296": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "302": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "308": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "118": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "121": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "123": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "125": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "126": [222 / 255, 165 / 255, 110 / 255, 0.7],
                        "127": [255 / 255, 128 / 255, 158 / 255, 0.7],
                        "128": [161 / 255, 184 / 255, 93 / 255, 0.7],
                        "129": [255 / 255, 191 / 255, 127 / 255, 0.7],
                        "130": [255 / 255, 191 / 255, 127 / 255, 0.7],
                        "131": [255 / 255, 191 / 255, 127 / 255, 0.7],
                        "133": [255 / 255, 0 / 255, 254 / 255, 0.7],
                        "135": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "139": [159 / 255, 126 / 255, 255 / 255, 0.7],
                        "140": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "141": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "149": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "150": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "151": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "154": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "157": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "161": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "162": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "164": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "165": [254 / 255, 0 / 255, 0 / 255, 0.7],
                        "169": [254 / 255, 0 / 255, 0 / 255, 0.7],
                        "177": [254 / 255, 0 / 255, 0 / 255, 0.7],
                        "215": [254 / 255, 0 / 255, 0 / 255, 0.7],
                        "227": [254 / 255, 0 / 255, 0 / 255, 0.7],
                        "230": [254 / 255, 0 / 255, 0 / 255, 0.7],
                        "284": [254 / 255, 0 / 255, 0 / 255, 0.7],
                        "285": [254 / 255, 0 / 255, 0 / 255, 0.7],
                        "287": [254 / 255, 0 / 255, 0 / 255, 0.7],
                        "166": [180 / 255, 180 / 255, 180 / 255, 0.7],
                        "259": [180 / 255, 180 / 255, 180 / 255, 0.7],
                        "170": [255 / 255, 0 / 255, 254 / 255, 0.7],
                        "171": [255 / 255, 0 / 255, 254 / 255, 0.7],
                        "174": [150 / 255, 0 / 255, 1 / 255, 0.7],
                        "203": [150 / 255, 0 / 255, 1 / 255, 0.7],
                        "204": [150 / 255, 0 / 255, 1 / 255, 0.7],
                        "205": [150 / 255, 0 / 255, 1 / 255, 0.7],
                        "206": [150 / 255, 0 / 255, 1 / 255, 0.7],
                        "207": [150 / 255, 0 / 255, 1 / 255, 0.7],
                        "208": [150 / 255, 0 / 255, 1 / 255, 0.7],
                        "210": [150 / 255, 0 / 255, 1 / 255, 0.7],
                        "211": [150 / 255, 0 / 255, 1 / 255, 0.7],
                        "180": [241 / 255, 192 / 255, 247 / 255, 0.7],
                        "184": [241 / 255, 192 / 255, 247 / 255, 0.7],
                        "187": [241 / 255, 192 / 255, 247 / 255, 0.7],
                        "188": [241 / 255, 192 / 255, 247 / 255, 0.7],
                        "191": [241 / 255, 192 / 255, 247 / 255, 0.7],
                        "193": [241 / 255, 192 / 255, 247 / 255, 0.7],
                        "232": [222 / 255, 110 / 255, 166 / 255, 0.7],
                        "236": [222 / 255, 110 / 255, 166 / 255, 0.7],
                        "237": [222 / 255, 110 / 255, 166 / 255, 0.7],
                        "244": [222 / 255, 110 / 255, 166 / 255, 0.7],
                        "277": [222 / 255, 110 / 255, 166 / 255, 0.7],
                        "280": [222 / 255, 110 / 255, 166 / 255, 0.7],
                        "233": [161 / 255, 184 / 255, 93 / 255, 0.7],
                        "235": [161 / 255, 184 / 255, 93 / 255, 0.7],
                        "297": [161 / 255, 184 / 255, 93 / 255, 0.7],
                        "234": [255 / 255, 128 / 255, 158 / 255, 0.7],
                        "241": [255 / 255, 255 / 255, 1 / 255, 0.7],
                        "246": [255 / 255, 191 / 255, 127 / 255, 0.7],
                        "248": [255 / 255, 191 / 255, 127 / 255, 0.7],
                        "253": [255 / 255, 191 / 255, 127 / 255, 0.7],
                        "256": [255 / 255, 191 / 255, 127 / 255, 0.7],
                        "289": [255 / 255, 191 / 255, 127 / 255, 0.7],
                        "264": [255 / 255, 191 / 255, 127 / 255, 0.7],
                        "268": [0 / 255, 138 / 255, 184 / 255, 0.7],
                        "269": [0 / 255, 138 / 255, 184 / 255, 0.7],
                        "270": [0 / 255, 138 / 255, 184 / 255, 0.7],
                        "288": [149 / 255, 74 / 255, 94 / 255, 0.7],
                        "307": [149 / 255, 74 / 255, 94 / 255, 0.7],
                        "290": [251 / 255, 207 / 255, 182 / 255, 0.7],
                        "291": [255 / 255, 191 / 255, 127 / 255, 0.7],
                        "136": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "306": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "299": [74 / 255, 112 / 255, 149 / 255, 0.7],
                        "300": [74 / 255, 112 / 255, 149 / 255, 0.7],
                        "298": [255 / 255, 190 / 255, 0 / 255, 0.7],
                        "312": [206 / 255, 217 / 255, 187 / 255, 0.7],
                        "313": [206 / 255, 217 / 255, 187 / 255, 0.7],
                        "314": [206 / 255, 217 / 255, 187 / 255, 0.7],
                    }],
                });
                this.shpManage13 = initShpManager(scene, {
                    shpUrl: 'BcEngineX/shp/综保区地块用地类型80转84_带地块编码_重点项目信息_RGB.shp',
                    styleField: 'YDLXBM',
                    colorTables: [{
                        "R2": [255 / 255, 255 / 255, 0 / 255, 0.7],
                        "W1": [191 / 255, 127 / 255, 255 / 255, 0.7],
                        "G2": [76 / 255, 153 / 255, 76 / 255, 0.7],
                        "G1": [0 / 255, 255 / 255, 0 / 255, 0.7],
                        "B1": [255 / 255, 0 / 255, 63 / 255, 0.7],
                        "B2": [204 / 255, 0 / 255, 0 / 255, 0.7],
                        "U": [0 / 255, 114 / 255, 153 / 255, 0.7],
                        "A33": [255 / 255, 0 / 255, 255 / 255, 0.7],
                        "A2": [255 / 255, 159 / 255, 127 / 255, 0.7],
                        "R22": [255 / 255, 223 / 255, 127 / 255, 0.7],
                        "U15": [0 / 255, 114 / 255, 153 / 255, 0.7],
                        "U31": [0 / 255, 114 / 255, 153 / 255, 0.7],
                        "U12": [0 / 255, 114 / 255, 153 / 255, 0.7],
                        "U14": [0 / 255, 114 / 255, 153 / 255, 0.7],
                        "U": [0 / 255, 114 / 255, 153 / 255, 0.7],
                        "U21": [0 / 255, 38 / 255, 153 / 255, 0.7],
                        "U12": [0 / 255, 114 / 255, 153 / 255, 0.7],
                        "S41": [128 / 255, 128 / 255, 128 / 255, 0.7],
                        "S42": [128 / 255, 128 / 255, 128 / 255, 0.7],
                        "H21": [128 / 255, 128 / 255, 128 / 255, 0.7],
                        "H0": [102 / 255, 204 / 255, 204 / 255, 0.7],
                        "S3": [192 / 255, 192 / 255, 192 / 255, 0.7],
                        "A1": [255 / 255, 223 / 255, 127 / 255, 0.7],
                        "R22": [255 / 255, 223 / 255, 127 / 255, 0.7],
                        "M1": [204 / 255, 153 / 255, 102 / 255, 0.7],
                        "W3": [159 / 255, 127 / 255, 255 / 255, 0.7],
                        "E1": [127 / 255, 255 / 255, 255 / 255, 0.7],
                        "RB": [255 / 255, 127 / 255, 0 / 255, 0.7],
                    }]
                });
                this.shpManage14 = initShpManager(scene, {
                    shpUrl: 'BcEngineX/shp/道路面_84.shp',
                    styleField: 'OBJECTID',
                    colorTables: [{
                        "1": [255 / 255, 255 / 255, 255 / 255, 0.7],
                    }]
                });
                this.shpManage15 = initShpManager(scene, {
                    shpUrl: 'BcEngineX/shp/河流_84.shp',
                    styleField: 'OBJECTID',
                    colorTables: [{
                        "1": [44 / 255, 102 / 255, 113 / 255, 0.7],
                    }]
                });
                this.shpManage16 = initShpManager(scene, {
                    shpUrl: "BcEngineX/shp/胶济铁路生态廊道_a_80_84.shp",
                    styleField: 'OBJECTID_1',
                    colorTables: [{
                        '11': [113 / 255, 196 / 255, 126 / 255, 1]
                    }],
                });
                this.shpManageSupportAll = initShpManager(scene, {
                    colorTables: [],
                });
            },
            // 添加div标签
            addDivLabel(scene) {
                window.labelManager = initLabelManager(scene);
                labelManager.addLabel({
                    divId: 'boxLabel1',
                    position: [120.047141, 36.386476, 10.101475366404962],
                });
            },
            //显示标签
            showGenLabel() {
                let labelList = ['divLabel17'];
                let data = {
                    list: labelList,
                    id: 0
                }
                this.$store.commit('addDivLabel', data)
            },
            showSpanLabel() {
                let labelList = ['divLabel18', 'divLabel19', 'divLabel20', 'divLabel21', 'divLabel46', 'divLabel47',
                    'divLabel48'
                ];
                let data = {
                    list: labelList,
                    id: 0
                }
                this.$store.commit('addDivLabel', data)
            },
            showEnterPriseLabel() {
                let labelList = ['divLabel22', 'divLabel23', 'divLabel24', 'divLabel25', 'divLabel49', 'divLabel50',
                    'divLabel51', 'divLabel52', 'divLabel53'
                ];
                let data = {
                    list: labelList,
                    id: 0
                }
                this.$store.commit('addDivLabel', data)
            },
            showLeadLabel() {
                let labelList = ['leaderLabel1', 'leaderLabel2', 'leaderLabel3', 'leaderLabel4', 'leaderLabel5'];
                let data = {
                    list: labelList,
                    id: 1
                }
                this.$store.commit('addDivLabel', data)
            },
            showSupportLabel() {
                let labelList = ['divLabel34'];
                let data = {
                    list: labelList,
                    id: 0
                }
                this.$store.commit('addDivLabel', data)
            },
            showBox() {
                this.$store.commit('showLeadPrise', false);
            },
            showSupport() {
                this.$store.commit('showEnterprisetManage', false);
            },
            closeDialog() {
                this.showDialog = false;
            },
            showListDetail(i) {
                if(i === 1) {
                    this.showDialog = true;
                }
            }
        },
        beforeDestroy() {
            clearInterval(this.timer);
            this.shpManageGenAll.destroy();
            this.shpManageAll.destroy();
            this.shpManageEnterpriseAll.destroy();
            this.shpManageLeadAll.destroy();
            this.shpManageSupportAll.destroy();
            this.$store.commit('moveLabel');
        }
    };
</script>

<style scoped>
    .dia-title {
        text-align: center;
        font-size: 0.8rem;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 0.8rem;
        margin-top: 1.8rem;
    }

    .time {
        text-align: center;
        font-size: 0.6rem;
        font-family: Source Han Sans CN;
        font-weight: 300;
        color: #FFFFFF;
        margin-top: 0.95rem;
    }

    .dia-con {
        font-size: 0.6rem;
        font-family: Source Han Sans CN;
        font-weight: 300;
        color: #FFFFFF;
        margin-left: 2.8rem;
        margin-right: 1.4rem;
        margin-top: 0.5rem;
    }

    .dia-con p {
        text-align: left;
        line-height: 0.9rem;
    }

    .ul_menu {
        position: absolute;
        right: 2.5rem;
        z-index: 2147483547;
    }

    .ul_menu div {
        width: 7.7rem;
        height: 1.2rem;
        background: url("../../assets/img/icon/icon_tab_5.png");
        background-size: 100% 100%;
        font-size: 0.8rem;
        color: #fff;
        cursor: pointer;
        margin-bottom: 1.25rem;
    }

    .home>.ul_menu>div.active {
        background: url("../../assets/img/icon/icon_tab_5_active.png");
        background-size: 100% 100%;
    }

    /* 临空区 */
    .box1 {
        position: fixed;
        top: 6rem;
        bottom: 7.1rem;
        left: 2.45rem;
        width: 16.7rem;
        background: url('../../assets/img/bg/bg_total_left2.png');
        background-size: 100% 100%;
        box-sizing: border-box;
        padding: 1.1rem 0.75rem 1.35rem 1.05rem;
        overflow-y: auto;
        z-index: 11111111111111;
    }

    .text {
        width: 85%;
        height: 92%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        box-sizing: border-box;
        overflow: auto;
    }

    .indent {
        text-indent: 2em;
        font-size: 0.7rem;
        text-align: left;
        margin-bottom: 0.5rem;
        color: #ffffff;
    }

    /* 空间产业规划 */
    .statis {
        position: fixed;
        left: 2.9rem;
        bottom: 4.6rem;
        z-index: 10;
    }

    .chart li {
        display: flex;
        align-items: center;
        margin-top: 0.2rem;
    }

    .name {
        color: #ffffff;
        font-size: 0.7rem;
        font-weight: 400;
        margin-left: 0.5rem;
    }

    .bg-pink {
        display: inline-block;
        width: 1.25rem;
        height: 0.35rem;
        background: rgba(239, 127, 123, 0.7);
    }

    .bg-yello {
        display: inline-block;
        width: 1.25rem;
        height: 0.35rem;
        background: rgba(241, 231, 171, 0.7);
    }

    .bg-green {
        display: inline-block;
        width: 1.25rem;
        height: 0.35rem;
        background: #65AF59;
    }

    .bg-blue {
        display: inline-block;
        width: 1.25rem;
        height: 0.35rem;
        background: rgba(113, 196, 126, 0.7);
    }

    /*重点发展企业 */
    .box2 {
        position: fixed;
        top: 8.55rem;
        bottom: 10.35rem;
        left: 2.45rem;
        width: 16.5rem;
        background: url('../../assets/img/bg/bg_total_left2.png');
        background-size: 100% 100%;
        box-sizing: border-box;
        padding: 1.1rem 0.75rem 1.35rem 1.05rem;
        overflow-y: auto;
        z-index: 11111111111111;
    }

    .title-cont {
        height: 0.8rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .icon-close {
        width: 0.75rem;
        height: 0.75rem;
        background: url('../../assets/img/icon/icon_time_close.png');
        background-size: 100% 100%;
        margin-right: 0.55rem;
    }

    .icon-close:hover {
        cursor: pointer;
    }

    .name {
        color: #ffffff;
        font-size: 0.7rem;
        font-weight: 400;
        margin-left: 0.55rem;
    }

    .em {
        color: #01E7FB;
        font-size: 0.7rem;
        font-weight: 400;
        margin-left: 0.55rem;
    }

    .total-intro ul li {
        height: 0.6rem;
        line-height: 0.6rem;
        font-size: 0.6rem;
        text-align: left;
        margin-top: 0.55rem;
    }

    .p {
        font-size: 0.7rem;
        color: #ffffff;
        text-align: left;
        margin-left: 0.55rem;
        margin-top: 0.55rem;
    }

    .last ol li {
        font-size: 0.7rem;
        color: #01E7FB;
        margin-top: 0.55rem;
        text-align: left;
        margin-left: 0.55rem;
    }

    /* 龙头企业 */
    .left {
        position: fixed;
        top: 6rem;
        bottom: 7.1rem;
        left: 2.45rem;
        width: 16.7rem;
        background: url('../../assets/img/bg/bg_total_left2.png');
        background-size: 100% 100%;
        box-sizing: border-box;
        padding: 1.1rem 0.75rem 1.35rem 1.05rem;
        overflow-y: auto;
        z-index: 11111111111111;
    }

    .ul {
        z-index: 3;
        position: absolute;
        left: 1.65rem;
        top: 2.75rem;
    }

    .ul li {
        text-align: left;
        margin-bottom: 0.25rem;
    }

    .ul li span {
        font-size: 0.6rem;
        z-index: 3;
        color: #fff;
    }

    .ul li span:last-child {
        color: #01E6FB !important;
    }

    .wz {
        position: absolute;
        top: 8.1rem;
        z-index: 3;
        padding: 0.95rem 1.2rem 0 0.65rem;
    }

    .indent {
        /* font-size: 0.6rem; */
        font-size: 0.9rem;
        text-align: left;
        margin-bottom: 0.5rem;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 1rem;
    }

    .title-cont {
        height: 0.8rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }


    .icon-close {
        width: 0.75rem;
        height: 0.75rem;
        background: url('../../assets/img/icon/icon_time_close.png');
        background-size: 100% 100%;
        margin-right: 0.55rem;
    }

    .icon-close:hover {
        cursor: pointer;
    }

    .isShow {
        display: none;
    }

    /* 产业政策 */
    .list {
        position: absolute;
        top: 2.95rem;
    }

    .bg {
        width: 14.65rem;
        height: 1.2rem;
        background-color: #1761F5cc;
        position: absolute;
    }

    .bg span {
        font-size: 0.6rem;
        font-weight: 300;
        color: #FFFFFF;
    }

    .bg span:first-child {
        position: absolute;
        left: 0.55rem;
        line-height: 1.2rem;
    }

    .bg span:last-child {
        position: absolute;
        right: 1.7rem;
        line-height: 1.2rem;
    }

    .list_tab {
        z-index: 3;
        width: 14.65rem;
        margin-top: 1.2rem;
    }

    .list_tab li {
        height: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 0.05rem solid rgba(255, 255, 255, 0.5);
        cursor: pointer;
    }

    .list_tab li span {
        color: #ffffff;
        font-size: 0.6rem;
        font-weight: 400;
        line-height: 0.8rem;
    }

    .list_tab li span:first-child {
        margin-left: 0.5rem;
    }

    .title-cont {
        height: 0.8rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .title-wz {
        font-size: 0.6rem;
        font-weight: 400;
        color: #ffffff;
        margin-right: 0.45rem;
    }

    /* .label-cont {
        position: relative;
    } */

    .cover-cont {
        position: absolute;
        left: -2rem;
        bottom: -1.95rem;
        z-index: 11;
        background: url('../../assets/img/bg/bg_label_line.png');
        background-size: 100% 100%;
        animation: hidebox 1s 1s linear forwards;
    }

    .label-cont p {
        /* display: inline-block; */
        margin-left: -0.95rem;
        font-size: 0.7rem;
        box-sizing: border-box;
        padding: 0 0.3rem;
        height: 1.5rem;
        background: rgba(0, 10, 50, 1);
        border-radius: 0 0.2rem 0.2rem 0;
        opacity: 0;
        line-height: 1.5rem;
        border: 1px solid #fff;
        color: #fff;
        animation: hidewords 1s 3s linear forwards;
    }

    .bg-bottom {
        display: inline-block;
        width: 1.9rem;
        height: 0.95rem;
        position: absolute;
        bottom: -2.4rem;
        left: -2.9rem;
        animation: hidebottom 1s linear forwards;
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

    table tr td {
        height: 3rem;
    }

    .chart li em {
        display: inline-block;
        width: 1.25rem;
        height: 0.35rem;
    }

    .bg-1 {
        background-color: rgba(195, 166, 219, 0.7);
    }

    .bg-2 {
        background-color: rgba(245, 245, 150, 0.7);
    }

    .bg-3 {
        background-color: rgba(197, 161, 149, 0.7);
    }

    .bg-4 {
        background-color: rgba(195, 166, 219, 0.7);
    }

    .bg-5 {
        background-color: rgba(217, 108, 128, 0.7);
    }

    .bg-6 {
        background-color: rgba(216, 159, 202, 0.7);
    }

    .bg-7 {
        background-color: rgba(161, 203, 228, 0.7);
    }

    .bg-8 {
        background-color: rgba(235, 166, 194, 0.7);
    }
</style>