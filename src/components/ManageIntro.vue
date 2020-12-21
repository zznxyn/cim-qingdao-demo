<template>
    <div>
        <div class="side-cont-tab">
            <div class="title-cont">
                <div class="title-comp">
                    <tit :title="title"></tit>
                </div>
                <em class="icon-close" @click="closeManage"></em>
            </div>
            <div class="tab">
                <div v-if="!showSide" class="tab-item" v-for="(item,index) in tab" :key="index"
                    @click="clickTab(index)">
                    <span>{{item.name}}</span>
                    <em :class="{'active':item.active}"></em>
                </div>
                <div v-if="showSide" class="tab-item">
                    <span>项目详情</span>
                </div>
            </div>
            <div class="tab-content">
                <div class="tab-1" v-if="!showSide" :style="{ display: cur == 0 ? 'block' : 'none' }">
                    <div class="total-intro">
                        <ul>
                            <li v-for="(item, index) in totalIntro" :key="index">
                                <em>{{ item.name }}</em>
                                <span>{{ item.value }}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="introduce">
                        <p class="indent" v-for="item in detail" :key="item.id">
                            {{item.value}}
                        </p>
                    </div>
                </div>
                <div class="tab-2" :style="{ display: cur == 1||showSide ? 'block' : 'none' }">
                    <div class="other-solution" v-for="(item, index) in solutionList" :key="index">
                        <div class="solution-title">
                            <em class="icon-decet"></em>
                            <span>{{ item.title }}</span>
                            <em class="icon-sz" v-if="showDefault"></em>
                            <span @click="addProject(index)" v-if="showDefault">新增</span>
                        </div>
                        <div class="table">
                            <ul>
                                <li class="table-head">
                                    <span v-for="(item1, index1) in item.head" :key="index1">{{
                item1
              }}</span>
                                </li>
                                <li class="table-item" v-for="(item2, index2) in item.items" :key="index2">
                                    <span v-for="(item3, index3) in item2" :key="index3">{{
                item3
              }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="other-solution">
                        <div class="solution-title">
                            <em class="icon-decet"></em>
                            <span>项目资料</span>
                        </div>
                        <div class="tree">
                            <ul>
                                <li class="tree-node" v-for="(item,index) in treeData" :key="index"
                                    :class="{'active':item.active}">
                                    <div class="tree-node-cont" @click="expandNode(index)">
                                        <em class="icon-collect"></em>
                                        <em class="icon-pakage"></em>
                                        <span>{{item.title}}</span>
                                    </div>
                                    <ul class="tree-children-cont" v-if="item.active">
                                        <li class="tree-child" v-for="(item1,index1) in item.child">
                                            <span>{{item1}}</span>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import tit from './Title'
    import other from './Title1'
    export default {
        name: "ManageInto",
        props: {
            title: {
                type: String,
                default: ''
            },
            detail: {
                type: Array,
                default: []
            },
            showDefault: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                // title: '中远山东物流基地项目',
                tab: [{
                    id: 1,
                    name: '项目简介',
                    active: true,
                }, {
                    id: 2,
                    name: '项目详情',
                    active: false
                }],
                cur: 0,
                tabList: [{
                        name: "距离测量",
                        id: 1,
                        icon: "icon-distance",
                        active: false
                    },
                    {
                        name: "面积测量",
                        id: 2,
                        icon: "icon-area",
                        active: false
                    },
                    {
                        name: "时间推演",
                        id: 3,
                        icon: "icon-time",
                        active: false
                    }
                ],
                titleList: ["城市规划", "基础设施"],
                totalIntro: [{
                        name: '项目类型：',
                        value: '保税物流'
                    },
                    {
                        name: '项目阶段：',
                        value: '工程建设'
                    },
                    {
                        name: '设计单位：',
                        value: '青岛规划设计院'
                    },
                    {
                        name: '建设单位：',
                        value: '城建六局'
                    },
                    {
                        name: '监理单位：',
                        value: '青岛咨询有限公司'
                    },
                    {
                        name: '开工日期：',
                        value: '2019-02-10'
                    },
                ],
                solutionList: [{
                    title: '跟进情况',
                    head: ['情况描述', '跟进人', '录入时间'],
                    items: [
                        ['项目现场参观', '王金', '2020.09.15'],
                        ['项目签订合作框架协议', '王金', '2020.09.15'],
                        ['项目商讨支持政策', '王金', '2020.09.15'],
                        ['项目签订合同', '王金', '2020.09.15']
                    ]
                }, {
                    title: '问题阻力',
                    head: ['阻力描述', '跟进人', '录入时间'],
                    items: [
                        ['容积率不达标', '王金', '2020.09.15'],
                        ['建筑主体设计朝向待调整', '王金', '2020.09.15'],
                        ['外观设计不符合园区统一要求', '王金', '2020.09.15'],
                    ]
                }],
                treeData: [{
                        title: '立项用地规划许可阶段',
                        active: false,
                        child: ['企业设立登记', '现场办理类', '建设用地规划许可审批', '固定资产投资项目节能', '评估和审查', '抗震设防要求', '环境影响评价备案审批']
                    },
                    {
                        title: '工程建设许可阶段',
                        active: false,
                        child: ['企业设立登记', '现场办理类', '建设用地规划许可审批', '固定资产投资项目节能', '评估和审查', '抗震设防要求', '环境影响评价备案审批']
                    },
                    {
                        title: '施工许可阶段',
                        active: false,
                        child: ['企业设立登记', '现场办理类', '建设用地规划许可审批', '固定资产投资项目节能', '评估和审查', '抗震设防要求', '环境影响评价备案审批']
                    },
                    {
                        title: '竣工验收许可阶段',
                        active: false,
                        child: ['企业设立登记', '现场办理类', '建设用地规划许可审批', '固定资产投资项目节能', '评估和审查', '抗震设防要求', '环境影响评价备案审批']
                    }
                ]
            };
        },
        components: {
            tit,
            other,
        },
        computed: {
            showSide() {
                return this.$store.state.showSide;
            }
        },
        methods: {
            //打开树节点
            expandNode(i) {
                this.treeData[i].active = !this.treeData[i].active
            },
            //关闭项目信息
            closeManage() {
                this.$store.commit('closeManage')
            },
            clickTab(index) {
                this.cur = index;
                this.tab.forEach(item => {
                    item.active = false;
                });
                this.tab[index].active = true;
            },
            addProject(i) {
                this.$emit('clickAddDialog',i);
            }
        }
    };
</script>
<style scoped>
    .side-cont-tab {
        position: fixed;
        top: 6rem;
        bottom: 7.1rem;
        left: 2.45rem;
        width: 16.7rem;
        background: url("../assets/img/bg/bg_total_left2.png");
        background-size: 100% 100%;
        box-sizing: border-box;
        padding: 1.1rem 0.75rem 1.35rem 1.05rem;
        overflow-y: auto;
        z-index: 2147483547;
    }

    .title-cont {
        height: 0.8rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    /* .title-comp {
        width: 9.2rem;
    } */

    .icon-close {
        width: 0.75rem;
        height: 0.75rem;
        background: url('../assets/img/icon/icon_time_close.png');
        background-size: 100% 100%;
        margin-right: 0.55rem;
    }

    .icon-close:hover {
        cursor: pointer;
    }

    .total-intro ul {
        margin: 0.5rem 0;
    }

    .total-intro ul li {
        height: 0.6rem;
        line-height: 0.6rem;
        font-size: 0.6rem;
        text-align: left;
        margin-top: 0.65rem;
    }

    .total-intro ul li em {
        color: #fff;
        margin-left: 0.55rem;
    }

    .total-intro ul li span {
        color: #01e7fc;
    }

    .other-solution {
        margin-top: 1rem;
    }

    .other-solution .solution-title {
        display: flex;
        align-items: center;
    }

    .other-solution .solution-title .icon-decet {
        width: 0.4rem;
        height: 0.4rem;
        background: url("../assets/img/icon/icon_title_derect.png");
        background-size: 100% 100%;
        margin-right: 0.2rem;
    }

    .solution-title span:first-of-type {
        margin-right: 9.2rem;
    }

    .solution-title span:last-of-type {
        cursor: pointer;
    }

    .solution-title .icon-sz {
        width: 0.45rem;
        height: 0.45rem;
        background: url("../assets/img/manage/m-1.png");
        background-size: 100% 100%;
        margin-right: 0.2rem;
    }

    .other-solution .solution-title span {
        font-size: 0.7rem;
        color: #fff;
    }

    .other-solution .table {
        margin-top: 0.3rem;
    }

    .other-solution .table li {
        height: 1.2rem;
        width: 14.65rem;
        display: flex;
        align-items: center;
    }

    .other-solution .table li.table-head {
        background: rgba(24, 97, 245, 0.5);
    }

    .other-solution .table li span {
        font-size: 0.6rem;
        color: #fff;
        line-height: 1.2rem;
        height: 1.2rem;
        margin-left: 0.4rem;
    }

    .other-solution .table li span:first-of-type {
        width: 7.2rem;
        margin-left: 0.55rem;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .other-solution .table li span:last-of-type {
        margin-left: 1.75rem;
    }

    .other-solution .table li.table-item {
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    }

    .other-solution .tree .tree-node {
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    }

    .other-solution .tree .tree-node .tree-node-cont {
        height: 1.2rem;
        width: 100%;
        display: flex;
        align-items: center;
    }

    .other-solution .tree .tree-node .tree-node-cont:hover {
        cursor: pointer;
    }

    .other-solution .tree .tree-node .tree-node-cont .icon-collect {
        width: 0.3rem;
        height: 0.2rem;
        background: url("../assets/img/icon/icon_jiao.png");
        background-size: 100% 100%;
        transform: rotate(-90deg);
    }

    .other-solution .tree .tree-node.active .tree-node-cont .icon-collect {
        transform: rotate(0);
    }

    .other-solution .tree .tree-node .tree-node-cont .icon-pakage {
        width: 0.6rem;
        height: 0.6rem;
        background: url("../assets/img/icon/icon_pakage.png");
        background-size: 100% 100%;
        margin: 0 0.25rem;
    }

    .other-solution .tree .tree-node .tree-node-cont span {
        font-size: 0.6rem;
        color: #fff;
    }

    .tree-children-cont {
        margin-bottom: 0.6rem;
    }

    .tree-child {
        text-align: left;
        padding-left: 1.9rem;
    }

    .tree-child span {
        font-size: 0.6rem;
        color: #fff;
    }

    .tab {
        display: flex;
        justify-content: center;
        margin-top: 0.7rem;
    }

    .tab div {
        font-size: 0.6rem;
        font-family: Source Han Sans CN;
        font-weight: 300;
        color: #FFFFFF;
        cursor: pointer;
    }

    .tab div:first-child {
        margin-right: 1.45rem;
    }

    .indent {
        text-indent: 2em;
        font-size: 0.7rem;
        text-align: left;
        margin-bottom: 0.5rem;
        color: #ffffff;
    }

    .tab-item {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .tab-item em.active {
        width: 1rem;
        height: 0.1rem;
        background-color: #68E4F9;
    }
</style>