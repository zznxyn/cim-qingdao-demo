<template>
    <div class="home">
        <div class="left-container">
            <div class="type-event">
                <div class="titile-cont">
                    <tit :name="titleList[0]"></tit>
                </div>
                <div class="accident">
                    <img src="../../assets/img/operationmethods/1-1.png" alt="">
                </div>
            </div>
            <div class="event-trend">
                <div class="titile-cont">
                    <tit :name="titleList[1]"></tit>
                </div>
                <div class="echart">
                    <img src="../../assets/img/operationmethods/1-2.png" alt="">
                </div>
                <div class="event-list">
                    <div class="accident-type" v-for="item in accident" :key="item.id">
                        <em :class="item.class"></em>
                        <span>{{item.name}}</span>
                    </div>
                </div>
            </div>
            <div class="sudden-cont">
                <div class="titile-cont">
                    <tit :name="titleList[2]"></tit>
                </div>
                <div class="warning-detail">
                    <ul>
                        <li>
                            <div class="warning-info">
                                <p>2020.09.10 20：18 气象风险</p>
                                <p>强降雨引发地质灾害的可能性较大</p>
                            </div>
                            <em class="icon-warning"></em>
                        </li>
                        <li>
                            <div class="warning-info">
                                <p>2020.09.10 20：18 同类项目风险</p>
                                <p>七星关区一施工工地发生支架垮塌</p>
                            </div>
                        </li>
                        <li>
                            <div class="warning-info">
                                <p>2020.09.10 20：18 同类项目风险</p>
                                <p>因切割机漏电发生1人触电死亡事故</p>
                            </div>
                        </li>
                        <li>
                            <div class="warning-info">
                                <p>2020.09.10 20：18 重大事件风险</p>
                                <p>工地突发透水，引发隧道及路面坍塌</p>
                            </div>
                        </li>
                        <li>
                            <div class="warning-info">
                                <p>2020.09.10 20：18 重大事件风险</p>
                                <p>环路及道路将实施以下交通管制措施</p>
                            </div>
                        </li>
                        <li>
                            <div class="warning-info">
                                <p>2020.09.10 20：18 重大事件风险</p>
                                <p>环路及道路将实施以下交通管制措施</p>
                            </div>
                        </li>
                         <li>
                            <div class="warning-info">
                                <p>2020.09.10 20：18 重大事件风险</p>
                                <p>环路及道路将实施以下交通管制措施</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="tabbar">
                    <ul>
                        <li v-for="(item,index) in tab" :key="item.id" :class="{'active':item.active}"
                            @click="clickTab(index)">
                            {{item.name}}
                        </li>
                    </ul>
                    <span class="yes">页</span>
                </div>
            </div>
        </div>
        <div class="top-container">
            <div class="tab-menu">
                <div v-for="(item,index) in tabMenu" :key="item.id" :class="{'active':item.active}"
                    @click="menuTab(index)">{{item.name}}</div>
            </div>
        </div>
        <div class="right-container">
            <div class="basic">
                <div class="titile-cont" style="margin-left:4rem">
                    <tit :name="titleList[3]"></tit>
                </div>
                <div class="basic-list">
                    <div class="div-list" v-for="(item,index) in basicList" :key="item.id"
                        :class="{'active':item.active}" @click="basicTab(index)">
                        <em :class="item.active ? item.class1 : item.class"></em>
                        <span :class="{'active':item.active}">{{item.name}}</span>
                        <span :class="{'active':item.active}">{{item.num}}</span>
                    </div>
                </div>
            </div>
            <div class="video-cont">
                <div class="titile-cont" style="margin-left:4rem">
                    <tit :name="titleList[4]"></tit>
                </div>
                <div class="camera" style="margin-top:-0.5rem" v-for="(item,index) in videoList" :key="item.id">
                    <div class="camera-tit">
                        <div class="camera-div">
                            <em></em>
                            <span>{{item.title}}</span>
                        </div>
                        <span>{{item.time}}</span>
                    </div>
                    <div id="video">
                        <video-player id="myvideo" class="video-player vjs-custom-skin" ref="videoPlayer"
                            :playsinline="true" :options="playerOptions[index]"></video-player>
                    </div>
                </div>
            </div>
        </div>
        <div class="operation-cont" v-for="item in tableCo" :class="{'active' : item.active,'height':expand}">
            <div class="table-title">
                <span class="table-name">
                    {{tableName}}
                </span>
                <span class="table-tool">
                    <em class="icon-zoom" @click="expandTable"></em>
                    <em class="icon-close"></em>
                </span>
            </div>
            <tableComp :id="item.id" @openDialog="openDialog" @flylocation="flylocation"
                :height="expand"
                @openTableDialog="openTableDialog" @tableTrajectory="tableTrajectory"
                @tableProjection="tableProjection" @editTable="editTable" @auditDetailClick="auditDetailClick" @manageDetailClick="manageDetailClick" @manageVideoClick="manageVideoClick" />
        </div>
        <div class="dialog" v-if="showPop" @mousedown="drag" id="dialog">
            <!-- 资源管理 -->
            <div class="content" v-if="changeDialog === 0 && tableI ===0">
                <div class="close" @click="close">
                    <img src="../../assets/img/bg/manage-5.png" alt="">
                </div>
                <div class="icon-bg"></div>
                <div class="cont">
                    <div class="manage-cont">
                        <em></em>
                        <span>资源管理</span>
                    </div>
                    <div class="manage-inp">
                        <div class="name-cont">
                            <label for="">名称</label>
                            <input type="text">
                        </div>
                        <div class="select-conten">
                            <label>类型</label>
                            <select>
                                <option value="">安保人员</option>
                            </select>
                        </div>
                        <div class="name-cont" style="margin-top:0.8rem">
                            <label for="">设备</label>
                            <input type="text">
                        </div>
                        <div class="last-cont" style="margin-top:0.8rem">
                            <label for="">简介</label>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div class="btn">
                            <div>取消</div>
                            <div>保存</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 调度 -->
            <div class="dispatch" v-if="changeDialog === 1 && tableI ===1">
                <div class="close" @click="close">
                    <img src="../../assets/img/bg/manage-5.png" alt="">
                </div>
                <div class="icon-bg"></div>
                <div class="cont">
                    <div class="manage-cont">
                        <em></em>
                        <span>调度管理</span>
                    </div>
                    <div class="dispatch-box">
                        <div class="target">
                            <span>调度目标</span>
                            <label>
                                <input type="radio">
                                <em>李伟</em>
                            </label>
                            <label>
                                <input type="radio">
                                <em>张三</em>
                            </label>
                            <label>
                                <input type="radio">
                                <em>王五</em>
                            </label>
                        </div>
                        <div class="target" style="margin-top:1.3rem">
                            <span>调度类型</span>
                            <label>
                                <input type="radio">
                                <em>临时调度</em>
                            </label>
                            <label>
                                <input type="radio">
                                <em>线路调度</em>
                            </label>
                        </div>
                        <div class="select-conten">
                            <label>调度线路</label>
                            <select>
                                <option value="">日常巡检</option>
                            </select>
                        </div>
                        <div class="last-cont" style="margin-top:0.8rem">
                            <label for="">调度说明</label>
                            <textarea cols="30" rows="10"></textarea>
                        </div>
                    </div>
                    <div class="btn" style="margin-left:3rem">
                        <div>取消</div>
                        <div>保存</div>
                    </div>
                </div>
            </div>

            <!-- 轨迹 -->
            <div class="dispatch" style="height:14.8rem" v-if="changeDialog === 1 && tableI ===0">
                <div class="close" @click="close">
                    <img src="../../assets/img/bg/manage-5.png" alt="">
                </div>
                <div class="icon-bg"></div>
                <div class="cont">
                    <div class="manage-cont">
                        <em></em>
                        <span>轨迹查询</span>
                    </div>
                    <div class="dispatch-box">
                        <div class="target">
                            <span>查询目标</span>
                            <label>
                                <input type="radio">
                                <em>李伟</em>
                            </label>
                            <label>
                                <input type="radio">
                                <em>张三</em>
                            </label>
                            <label>
                                <input type="radio">
                                <em>王五</em>
                            </label>
                        </div>
                        <div class="start-time">
                            <span class="spa">开始日期</span>
                            <div class="time">
                                <a-config-provider :locale="zhCN">
                                    <a-date-picker :show-time="{ format: 'HH:mm' }" format="YYYY-MM-DD HH:mm"
                                        @change="dateChange" @ok="onOk" />

                                </a-config-provider>
                            </div>
                        </div>
                        <div class="start-time">
                            <span class="spa">结束时间</span>
                            <div class="time">
                                <a-config-provider :locale="zhCN">
                                    <a-date-picker :show-time="{ format: 'HH:mm' }" format="YYYY-MM-DD HH:mm"
                                        @change="dateChange" @ok="onOk" />

                                </a-config-provider>
                            </div>
                        </div>
                    </div>
                    <div class="btn" style="margin-left:3rem">
                        <div>取消</div>
                        <div>保存</div>
                    </div>
                </div>
            </div>

            <!-- 预案演练 -->
            <div class="drill" v-if="changeDialog === 2 && tableI ===0">
                <div class="close" @click="close">
                    <img src="../../assets/img/bg/manage-5.png" alt="">
                </div>
                <div class="icon-bg"></div>
                <div class="cont">
                    <div class="manage-cont">
                        <em></em>
                        <span>{{details}}</span>
                    </div>
                    <div class="manage-inp drill-cont">
                        <div class="name-cont">
                            <label for="">预案名称</label>
                            <input type="text">
                        </div>
                        <div class="select-conten">
                            <label>预案类型</label>
                            <select>
                                <option value="">安保人员</option>
                            </select>
                        </div>
                        <div class="drill-line">
                            <span>预案线路</span>
                            <table border="1" style="border-collapse: collapse;border:1px;table-layout:fixed">
                                <tr>
                                    <th>线路</th>
                                    <th>备注</th>
                                </tr>
                                <tr>
                                    <td>消防援救线路1</td>
                                    <td>一级消防援救线路</td>
                                </tr>
                                <tr>
                                    <td>消防援救线路1</td>
                                    <td>一级消防援救线路</td>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        <img src="../../assets/img/operationmethods/1-13.png" alt="">
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div class="drill-line">
                            <span>预案资源</span>
                            <table border="1" style="border-collapse: collapse;border:1px;table-layout:fixed">
                                <tr>
                                    <th>线路</th>
                                    <th>备注</th>
                                </tr>
                                <tr>
                                    <td>消防援救线路1</td>
                                    <td>一级消防援救线路</td>
                                </tr>
                                <tr>
                                    <td>消防援救线路1</td>
                                    <td>一级消防援救线路</td>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        <img src="../../assets/img/operationmethods/1-13.png"
                                            style="width:0.75rem;height:0.75rem" alt="">
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div class="select-conten">
                            <label>预案文件</label>
                            <select>
                                <option value="">请选择</option>
                            </select>
                        </div>
                        <div class="btn">
                            <div v-if="!showBtn">取消</div>
                            <div v-if="!showBtn">保存</div>
                            <div v-if="showBtn">关闭</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 监控管理 -->
            <div class="monitor" v-if="changeDialog === 3 && tableI === 0">
                <div class="close" @click="close">
                    <img src="../../assets/img/bg/manage-5.png" alt="">
                </div>
                <div class="icon-bg"></div>
                <div class="cont">
                    <div class="manage-cont">
                        <em></em>
                        <span>监控管理</span>
                    </div>
                    <div class="manage-inp">
                        <div class="name-cont">
                            <label for="">名称</label>
                            <input type="text">
                        </div>
                        <div class="select-conten">
                            <label>类型</label>
                            <select>
                                <option value="">摄像头</option>
                            </select>
                        </div>
                        <div class="name-cont" style="margin-top:0.8rem">
                            <label for="">设备</label>
                            <input type="text">
                        </div>
                        <div class="last-cont" style="margin-top:0.8rem">
                            <label for="">简介</label>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div class="btn">
                            <div v-if="!showvideoBtn">取消</div>
                            <div v-if="!showvideoBtn">保存</div>
                            <div v-if="showvideoBtn">关闭</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import tit from '../../components/Title1';
    import tableComp from '../../components/Table';
    import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
    export default {
        components: {
            tit,
            tableComp
        },
        data() {
            return {
                details:'新建',
                expand:false,
                showBtn:false,
                showvideoBtn:false,
                zhCN,
                showPop: false,
                tableName: '',
                changeDialog: 1,
                tableI: 1,
                tableCo: [{
                    id: 1,
                    active: false
                }, {
                    id: 2,
                    active: false
                }, {
                    id: 3,
                    active: false
                }, {
                    id: 4,
                    active: false
                }],
                showTable: false,
                titleList: [
                    ['突发事件类型', 'YUANQUXINXI'],
                    ['事件趋势分析', 'SHIJIANJUSHIFENXI'],
                    ['突发事件', 'BAOJINXINXI'],
                    ['基本情况', 'JIBENQINGKUANG'],
                    ['视频监控', 'SHIPINJIANKONG']
                ],
                accident: [{
                    id: 1,
                    class: 'dot-1',
                    name: '一般事故'
                }, {
                    id: 2,
                    class: 'dot-2',
                    name: '中型事故'
                }, {
                    id: 3,
                    class: 'dot-3',
                    name: '大型事故'
                }, {
                    id: 4,
                    class: 'dot-4',
                    name: '重型事故'
                }],
                tab: [{
                    id: 1,
                    name: '1',
                    active: true
                }, {
                    id: 2,
                    name: '2',
                    active: false
                }, {
                    id: 3,
                    name: '3',
                    active: false
                }, {
                    id: 4,
                    name: '4',
                    active: false
                }, {
                    id: 5,
                    name: '5',
                    active: false
                }],
                tabMenu: [{
                    id: 1,
                    name: '资源分布',
                    active: false
                }, {
                    id: 2,
                    name: '调度指挥',
                    active: false
                }, {
                    id: 3,
                    name: '预案演练',
                    active: false
                }, {
                    id: 4,
                    name: '监控管理',
                    active: false
                }],
                basicList: [{
                    id: 1,
                    class: 'icon-2',
                    class1: 'select-2',
                    name: '安保人员',
                    num: 3,
                    active: false
                }, {
                    id: 2,
                    class: 'icon-1',
                    class1: 'select-1',
                    name: '医护人员',
                    num: 6,
                    active: false
                }, {
                    id: 3,
                    class: 'icon-3',
                    class1: 'select-3',
                    name: '园区车辆',
                    num: 2,
                    active: false
                }, {
                    id: 4,
                    class: 'icon-4',
                    class1: 'select-4',
                    name: '监控设备',
                    num: 2,
                    active: false
                }, {
                    id: 5,
                    class: 'icon-5',
                    class1: 'select-5',
                    name: '应急路线',
                    num: 2,
                    active: false
                }],
                labelList: [
                    ['divLabel54', 'divLabel55', 'divLabel56', 'divLabel57', 'divLabel58', 'divLabel59',
                        'divLabel60',
                        'divLabel61', 'divLabe62', 'divLabel63', 'divLabel64', 'divLabel65', 'divLabel66',
                        'divLabel67', 'divLabel68'
                    ],
                    ['divLabel38'],
                    [],
                    ['divLabel54', 'divLabel55', 'divLabel56'],
                    ['divLabel57','divLabel58','divLabel59','divLabel60','divLabel61','divLabel62'],
                    ['divLabel63','divLabel64'],
                    ['divLabel65','divLabel66'],
                    ['divLabel67', 'divLabel68'],
                    ['divLabel4'],
                ],
                videoList: [{
                    id: 1,
                    title: '十字路口摄像头1',
                    time: '12:00:23',
                    movie: require('../../assets/video/1.mp4')
                }, {
                    id: 2,
                    title: '十字路口摄像头2',
                    time: '12:00:23',
                    movie: require('../../assets/video/1.mp4')
                }, {
                    id: 3,
                    title: '十字路口摄像头3',
                    time: '12:00:23',
                    movie: require('../../assets/video/1.mp4')
                }],
                playerOptions: [],
                getSourse: require('../../assets/video/2.mp4'),
            }
        },
        mounted() {
            // this.menuTab(0);
            this.$store.commit('destroy');
            let _this = this;
            let timer = setInterval(() => {
                if (_this.isLoad) {
                    // 显示标签
                    _this.showLabel(0);
                    clearInterval(timer);
                }
            })
        },
        computed: {
            // 是否生成scene
            isLoad() {
                return this.$store.state.isLoad
            },
        },
        created() {
            this.getMovieList();
        },
        methods: {
            // 获取视频
            getMovieList() {
                for (let i = 0; i < this.videoList.length; i++) {
                    let arrs = {
                        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                        autoplay: true, //如果true,浏览器准备好时开始回放。
                        muted: true, // 默认情况下将会消除任何音频。
                        loop: false, // 导致视频一结束就重新开始。
                        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                        language: 'zh-CN',
                        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                        sources: [{
                            type: "video/mp4",
                            src: this.videoList[i].movie //url地址 
                        }],
                        poster: require('../../assets/img/bg/her.png'), //你的封面地址
                        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                        controlBar: {
                            timeDivider: false,
                            durationDisplay: false,
                            remainingTimeDisplay: false,
                            fullscreenToggle: false, //全屏按钮
                        },
                        controls: false
                    };
                    this.playerOptions.push(arrs);
                }
            },
            //展开
            expandTable(){
                this.expand = !this.expand
            },
            //显示标签
            showLabel(i) {
                let data = {
                    list: this.labelList[i],
                    id: 4
                }
                this.$store.commit('addDivLabel', data)
            },
            // 拖拽
            drag(e) {
                let oDiv = document.getElementById('dialog');
                let innerX = e.clientX - oDiv.offsetLeft;
                let innerY = e.clientY - oDiv.offsetTop;
                document.onmousemove = (e) => {
                    let left = e.clientX - innerX;
                    let top = e.clientY - innerY;
                    oDiv.style.left = left + 'px';
                    oDiv.style.top = top + 'px';
                };
                document.onmouseup = () => {
                    document.onmousemove = null;
                    document.onmouseup = null;
                };
            },
            clickTab(i) {
                this.tab.forEach(item => {
                    item.active = false;
                });
                this.tab[i].active = true;
            },
            menuTab(i) {
                //清除标签
                
                this.$store.commit('moveLabel')
                //清除线路矢量图
                this.$store.commit('destroyOne','41');
                this.$store.commit('destroyOne','42');
                this.tabMenu.forEach(item => {
                    item.active = false;
                });
                this.tableCo.forEach(item => {
                    item.active = false;
                });
                this.tabMenu[i].active = true;
                this.tableCo[i].active = true;
                this.changeDialog = i;
                this.tableName = this.tabMenu[i].name
            },
            basicTab(i) {
                if (this.basicList[i].active) {
                    this.$store.commit('moveLabel');
                    this.basicList.forEach(item => {
                        item.active = false;
                    })
                    this.$nextTick(function () {
                        this.showLabel(0)
                    })
                } else {
                    this.$store.commit('moveLabel');
                    this.basicList.forEach(item => {
                        item.active = false;
                    })
                    this.basicList[i].active = true;
                    this.$nextTick(function () {
                        this.showLabel(i + 3)
                    })
                }
            },
            openDialog(i,j) {
                this.tableI = i;
                this.showPop = true;
                this.details = '新建';
                this.showBtn = false;
                this.showvideoBtn = false;
            },
            close() {
                this.showPop = false;
            },
            dateChange(value, dateString) {
                console.log('Selected Time: ', value);
                console.log('Formatted Selected Time: ', dateString);
            },
            onOk(value) {
                console.log('onOk: ', value);
            },
            // 定位
            flylocation() {
                let camiraInfo = [-2583568.517839574, 4453690.393966321, 3758144.4983768584, 4.579998741307465e-13, -
                    60.000038135445045, 359.9999999999995
                ];
                this.$store.commit('setCarmeInfo', camiraInfo);
            },
            // 调度
            openTableDialog() {
                this.openDialog(1,1);
            },
            // 轨迹
            tableTrajectory() {
                this.$store.commit('getPoint');
            },
            // 投影
            tableProjection() {
                for (let i = 0; i < this.videoList.length; i++) {
                    let myPlayer = this.$refs.videoPlayer[i].player;
                    myPlayer.src(this.getSourse);
                }
            },
            // 编辑
            editTable() {
                this.openDialog(0,1);
            },
            // 预案详情
            auditDetailClick(name) {
                this.openDialog(0);
                this.details = name;
                if(name == '详情') {
                    this.showBtn = true;
                }
            },
            // 监控详情
            manageDetailClick(name) {
                this.openDialog(0);
                if(name == '详情') {
                    this.showvideoBtn = true;
                }
            },
            // 监控编辑
            manageVideoClick() {
                this.openDialog(0);
            },
            
        }
    }
</script>
<style scoped>
    .operation-cont {
        position: fixed;
        bottom: 2.15rem;
        height: 18.25rem;
        left: 14.5rem;
        right: 14.5rem;
        z-index: 2147483547;
        display: none;
    }
    .operation-cont.height{
        height: 38.25rem;
    }
    .operation-cont.active {
        display: block;
    }

    .left-container {
        position: fixed;
        left: 0;
        bottom: 0;
        top: 4.35rem;
        width: 19.5rem;
        z-index: 2147483547;
        background: linear-gradient(90deg, rgba(0, 10, 50, 100%) 0%, rgba(0, 10, 50, 0) 100%);
        box-sizing: border-box;
        padding-top: 1.8rem;
        padding-left: 1.05rem;
    }

    .right-container {
        position: fixed;
        top: 4.35rem;
        bottom: 0;
        right: 0;
        width: 19rem;
        box-sizing: border-box;
        padding: 1.55rem 1rem 5.51rem;
        background: linear-gradient(-90deg, #000A32 0%, rgba(0, 10, 50, 0) 100%);
        z-index: 2147483547;
    }

    .titile-cont {
        margin-bottom: 1rem;
    }

    .accident,
    .echart {
        text-align: left;
    }

    .accident img {
        width: 12.5rem;
        height: 5.15rem;
    }

    .event-trend {
        margin-top: 2.05rem;
    }

    .echart img {
        width: 12.1rem;
        height: 6.7rem;
    }

    .accident-type em {
        display: inline-block;
        width: 0.3rem;
        height: 0.3rem;
        /* background: #01E7FC; */
        border-radius: 50%;
        margin-right: 0.5rem;
    }

    .accident-type span {
        font-size: 0.6rem;
        color: #ffffff;
        opacity: 0.6;
    }

    .dot-1 {
        background: #01E7FC;
    }

    .dot-2 {
        background: #14D971;
    }

    .dot-3 {
        background: #FFC63C;
    }

    .dot-4 {
        background: #F13E3A;
    }

    .accident-type {
        display: flex;
        align-items: center;

    }

    .event-list {
        display: flex;
        flex-wrap: wrap;
        width: 9rem;
        margin-left: 2.1rem;
        margin-top: 0.8rem;
    }

    .event-list div:nth-child(1) {
        margin-right: 0.65rem;
    }

    .event-list div:nth-child(3) {
        margin-right: 0.65rem;
    }

    .sudden-cont {
        margin-top: 2rem;
    }

    .warning-detail li {
        width: 12.9rem;
        height: 2.45rem;

    }

    .warning-detail li:nth-of-type(2n+1) {
        background: rgba(24, 97, 245, 0.2);
    }

    .warning-detail li {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .warning-detail li:first-of-type {
        background: url('../../assets/img/solution/bg_warnning.png');
        background-size: 100% 100%;
    }

    .warning-detail .warning-info p {
        font-size: 0.7rem;
        height: 0.7rem;
        line-height: 0.7rem;
        color: #fff;
        margin-left: 0.2rem;
        text-align: left;
    }

    .warning-detail .warning-info p:first-of-type {
        font-size: 0.6rem;
        height: 0.6rem;
        line-height: 0.6rem;
        margin-bottom: 0.2rem;
        color: #01E7FC;
    }

    .warning-detail li:first-of-type .warning-info p:first-of-type {
        color: #fff;
    }

    .tabbar ul {
        display: flex;
        margin-left: 2rem;
        /* margin-top: 0.7rem; */
    }

    .tabbar ul li {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.6rem;
        color: #fff;
        margin-right: 0.65rem;
        cursor: pointer;
    }

    .tabbar ul li.active {
        width: 0.9rem;
        height: 0.9rem;
        background: #1861F5;
        /* opacity: 0.5; */
        border-radius: 0.1rem;
    }

    .tabbar {
        display: flex;
    }

    .yes {
        font-size: 0.6rem;
        color: #fff;
        /* margin-top: -1.1em; */
    }

    .top-container {
        position: fixed;
        left: 35.2rem;
        right: 35.8rem;
        top: 5.35rem;
        z-index: 2147483547;
    }

    .tab-menu {
        width: 100%;
        height: 2.55rem;
        background: url('../../assets/img/operationmethods/1-3.png');
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
        background: url('../../assets/img/operationmethods/1-4.png');
        background-size: 100% 100%;
        color: #01E7FC;
    }



    .div-list {
        width: 12.65rem;
        height: 2rem;
        display: flex;
        align-items: center;
        background: url('../../assets/img/operationmethods/1-5.png');
        background-size: 100% 100%;
        margin-bottom: 0.5rem;
        cursor: pointer;
        margin-left: 4.35rem;
    }

    .div-list.active {
        background: url('../../assets/img/operationmethods/1-11.png');
        background-size: 100% 100%;
    }

    .div-list em {
        margin-left: 1.5rem;
    }

    .div-list span:first-of-type {
        margin-left: 0.55rem;
        font-size: 0.7rem;
        color: #ffffff;
        font-weight: 400;
    }

    .div-list span:last-of-type {
        margin-left: 4.3rem;
        font-size: 0.7rem;
        color: #ffffff;
        font-weight: 400;
    }

    .div-list span.active {
        color: #01E7FC;
    }


    /* .basic-list .div-list:last-of-type span:last-of-type {
        margin-left: 4.55rem;
    } */

    .icon-1 {
        width: 1.2rem;
        height: 1.2rem;
        display: inline-block;
        background: url('../../assets/img/operationmethods/1-6-1.png');
        background-size: 100% 100%;
    }

    .icon-2 {
        width: 1.2rem;
        height: 1.2rem;
        display: inline-block;
        background: url('../../assets/img/operationmethods/1-7.png');
        background-size: 100% 100%;
    }

    .icon-3 {
        width: 1.2rem;
        height: 1.2rem;
        display: inline-block;
        background: url('../../assets/img/operationmethods/1-8.png');
        background-size: 100% 100%;
    }

    .icon-4 {
        width: 1.2rem;
        height: 1.2rem;
        display: inline-block;
        background: url('../../assets/img/operationmethods/1-9.png');
        background-size: 100% 100%;
    }

    .icon-5 {
        width: 1.2rem;
        height: 1.2rem;
        display: inline-block;
        background: url('../../assets/img/operationmethods/1-10.png');
        background-size: 100% 100%;
    }

    .select-1 {
        width: 1.2rem;
        height: 1.2rem;
        display: inline-block;
        background: url('../../assets/img/operationmethods/1-6.png');
        background-size: 100% 100%;
    }

    .select-2 {
        width: 1.2rem;
        height: 1.2rem;
        display: inline-block;
        background: url('../../assets/img/operationmethods/1-7-1.png');
        background-size: 100% 100%;
    }

    .select-3 {
        width: 1.2rem;
        height: 1.2rem;
        display: inline-block;
        background: url('../../assets/img/operationmethods/1-8-1.png');
        background-size: 100% 100%;
    }

    .select-4 {
        width: 1.2rem;
        height: 1.2rem;
        display: inline-block;
        background: url('../../assets/img/operationmethods/1-9-1.png');
        background-size: 100% 100%;
    }

    .select-5 {
        width: 1.2rem;
        height: 1.2rem;
        display: inline-block;
        background: url('../../assets/img/operationmethods/1-10-1.png');
        background-size: 100% 100%;
    }

    .video-cont {
        margin-top: 2.25rem;
    }

    .camera {
        margin-bottom: 0.8rem;
    }

    .camera-tit {
        text-align: left;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-left: 4rem;
    }

    .camera em {
        display: inline-block;
        width: 0.3rem;
        height: 0.3rem;
        background: linear-gradient(0deg, #1861F5 0%, #01E7FC 100%);
        border-radius: 50%;
    }

    .camera span:first-of-type {
        font-size: 0.7rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #FFFFFF;
        margin-left: 0.4rem;
    }

    .camera span:last-of-type {
        font-size: 0.6rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #FFFFFF;
    }

    .camera img {
        width: 13rem;
        height: 7.3rem;
        margin-top: 0.2rem;
        margin-left: 4rem;
    }

    .dialog {
        background: linear-gradient(90deg, rgba(25, 34, 70, 0.9) 0%, rgba(25, 34, 70, 0.8) 47%, rgba(25, 34, 70, 0.9) 100%);
        position: absolute;
        left: 50%;
        top: 40%;
        transform: translate(-40%, -50%);
        z-index: 2147483547;
    }

    .content,
    .monitor,
    .dispatch {
        width: 23rem;
        height: 20.55rem;
    }

    .close {
        position: fixed;
        top: 0;
        right: -1.2rem;
        cursor: pointer;
    }

    .close img {
        width: 1.2rem;
        height: 4.15rem;
    }

    .icon-bg {
        position: absolute;
        width: 100%;
        height: 4.85rem;
        background: url('../../assets/img/operationmethods/1-12.png');
        background-size: 100% 100%;
    }

    .cont {
        position: absolute;
        left: 1.45rem;
        right: 3.2rem;
        top: 1.6rem;
    }

    .manage-cont {
        text-align: left;
    }

    .manage-inp {
        margin-left: 1.85rem;
        margin-top: 1.25rem;
    }

    .manage-cont em {
        width: 0.4rem;
        height: 0.4rem;
        display: inline-block;
        background: linear-gradient(0deg, #1861F5 0%, #01E7FC 100%);
        transform: rotate(-45deg);
    }

    .manage-cont span {
        font-size: 0.7rem;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #FFFFFF;
        margin-left: 0.25rem;
    }

    .name-cont,
    .select-conten,
    .last-cont,
    .dispatch-box {
        display: flex;
        align-items: center;
    }

    .name-cont,
    .select-conten,
    .last-cont label {
        font-size: 0.7rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.5);
        /* opacity: 0.5; */
    }

    .select-conten,
    .last-cont label {
        font-size: 0.7rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.5);
    }

    .name-cont input,
    .select-conten select {
        width: 14rem;
        height: 1.7rem;
        margin-left: 0.45rem;
        border: 0.05rem solid #ccc;
        outline: none;
        background: none;
        color: #ffffff;
        font-size: 0.7rem;
        text-indent: 1em;
    }

    .name-cont input {
        background: none !important;
    }

    .select-conten {
        margin-top: 0.8rem;
    }

    .last-cont textarea {
        width: 14rem;
        height: 5rem !important;
        margin-left: 0.45rem;
        border: 0.05rem solid #ccc;
        outline: none;
        background: none;
        color: #ffffff;
        font-size: 0.7rem;
        text-indent: 1em;
        resize: none;
    }

    .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1.5rem;
    }

    .btn div {
        width: 4rem;
        height: 1.6rem;
        line-height: 1.6rem;
        text-align: center;
        font-size: 0.7rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #FFFFFF;
        border-radius: 0.1rem;
    }

    .btn div:first-of-type {
        background: rgb(78, 83, 110);
        margin-right: 1.5rem;
    }

    .btn div:last-of-type {
        background: linear-gradient(90deg, #1861F5 0%, #01E7FC 100%);
    }

    .dispatch-box {
        margin-left: 0.85rem;
        margin-top: 1.25rem;
    }

    .target {
        display: flex;
    }

    .target span {
        font-size: 0.7rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #FFFFFF;
        opacity: 0.5;
        margin-right: 1.15rem;
    }

    .target label {
        display: flex;
        align-items: center;
        font-size: 0.7rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #FFFFFF;
        margin-right: 1.55rem;
    }

    .target label em {
        margin-left: 0.25rem;
    }

    .dispatch-box {
        flex-wrap: wrap;
    }

    .start-time {
        display: flex;
        align-items: center;
        margin-top: 1.25rem;
    }

    .start-time .spa {
        font-size: 0.7rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.5);
    }

    .time {
        width: 14rem;
        height: 1.7rem;
        margin-left: 0.3rem;
        border: 1px solid rgba(255, 255, 255, 0.5);
    }

    .drill {
        width: 23rem;
        height: 29.8rem;
    }

    .drill-cont {
        margin-left: 1rem !important;
    }

    .drill-line {
        display: flex;
        align-items: center;
        margin-top: 0.8rem;
    }

    .drill-line span {
        font-size: 0.7rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.5);
    }

    .drill-line table {
        width: 14rem;
        margin-left: 0.4rem;
        border-color: rgba(255, 255, 255, 0.5) !important;
    }

    .drill-line table tr {
        height: 1.7rem;
    }

    .drill-line table th,
    td {
        font-size: 0.7rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #fff;
    }


    .table-title {
        height: 1.8rem;
        width: 100%;
        background: rgba(0, 10, 50, 0.8);
        box-sizing: border-box;
        padding: 0 1rem 0 0.85rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .table-title .table-name {
        width: 4.5rem;
        height: 1.15rem;
        background: url('../../assets/img/bg/bg_table_title.png');
        background-size: 100% 100%;
        font-size: 0.7rem;
        color: #fff;
        line-height: 1.15rem;
    }

    #video {
        width: 13rem;
        height: 7.3rem;
        box-sizing: border-box;
        /* margin: 0 auto; */
        overflow: hidden;
        /* margin-top: 0.2rem; */
        margin-left: 4rem;
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
</style>