<template>
    <div class="home" :class="{'active':addActive}">
        <div class="tab-cont">
            <div class="routers">
                <router-link :to="{name: item.path}" v-for="(item,index) in routesList" :key="item.id">
                    <div class="route-item">
                        <em :class="item.class"></em>
                        <span>{{item.name}}</span>
                        <div class="children-cont" v-if="item.children.length>0">
                            <div class="bg-jiao"></div>
                            <div class="detail-tab-cont">
                                <em class="bg-left"></em>
                                <router-link v-for="item1 in item.children" :key="item1.id" :to="{name: item1.path}">
                                    <p @click="toA(item.id,item1.id)">{{item1.name}}</p>
                                </router-link>
                                <em class="bg-right"></em>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="user">
                <div class="user-info">
                    <div class="user-info-cont" @mouseenter="showOutFn">
                        <em class="icon-user"></em>
                        <div class="user-info-detail">
                            <span>admin</span>
                            <span>ID:84566</span>
                        </div>
                        <em class="icon-jiao"></em>
                    </div>
                    <div class="out-login" v-if="showOut" @mouseleave="hideOutFn" @mouseenter="showOutFn">
                        <p>个人中心</p>
                        <p @click="outLogin">退出登录</p>
                    </div>
                </div>
                <span class="space-line"></span>
                <div class="user-weather">
                    <p>2020-10-02</p>
                    <p>18℃ 多云</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Tabbar",
        data() {
            return {
                routesList: [{
                        name: '总览',
                        class: 'icon-total',
                        id: 1,
                        path: 'home',
                        children: [],
                    },
                    {
                        name: '招商',
                        class: 'icon-businiss',
                        id: 2,
                        path: 'merchantsInner',
                        children: [{
                                name: '招商总览',
                                id: 1,
                                path: 'merchantsInner'
                            },
                            {
                                name: '招商项目管理',
                                id: 2,
                                path: 'manage'
                            },
                        ],
                    },
                    {
                        name: '规建',
                        class: 'icon-build',
                        id: 3,
                        path: 'rules',
                        children: [{
                                name: '规建总览',
                                id: 1,
                                path: 'rules'
                            },
                            {
                                name: '项目资料预审',
                                id: 2,
                                path: 'inquiry'
                            },
                            {
                                name: '智慧工地',
                                id: 3,
                                path: 'solutions'
                            }
                        ],
                    },
                    {
                        name: '运营',
                        class: 'icon-run',
                        id: 4,
                        path: 'methods',
                        children: [{
                                name: '应急预案',
                                id: 1,
                                path: 'methods'
                            },
                            {
                                name: '设备设施',
                                id: 2,
                                path: 'set'
                            }
                        ]
                    }
                ],
                showOut: false
            }
        },
        computed: {
            addActive() {
                return this.$store.state.addActive
            }
        },
        methods: {
            showOutFn() {
                let _this = this;
                this.showOut = true;
                let n = 0;
                let timer = setInterval(function () {
                    n++;
                    if (n >= 2) {
                        _this.showOut = false;
                        clearInterval(timer)
                    }
                }, 1000)
            },
            hideOutFn() {
                this.showOut = false;
            },
            outLogin() {
                this.$router.push({
                    name: 'login'
                })
            },
            toA(i,j) {
                if (i === 3 && j===2) {
                    window.location.href = auditDetail;
                }
            }
        }
    };
</script>
<style scoped>
    .home {
        width: 96rem;
        height: 9rem;
        background: url("../assets/img/bg/bg_tab.png");
        background-size: 100% 100%;
        display: flex;
        justify-content: flex-end;
        pointer-events: none;
    }

    .home.active {
        animation: change 1s 1s linear forwards;
    }

    @keyframes change {
        from {
            background: url("../assets/img/bg/bg_tab.png");
            background-size: 100% 100%;
        }

        to {
            background: url("../assets/img/bg/bg_top_active.png");
            background-size: 100% 100%;
        }
    }

    .tab-cont {
        display: flex;
        margin-top: 0.85rem;
        align-items: flex-start;
        pointer-events: none;
    }

    .routers {
        width: 18.6rem;
        height: 3.1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-right: 13rem;
        pointer-events: auto;
    }

    .routers .route-item {
        width: 3rem;
        height: 3.1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    .routers .route-item:hover {
        cursor: pointer;
        background: url('../assets/img/bg/bg_tab_item.png');
        background-size: 100% 100%;
    }

    .routers .route-item:hover .children-cont {
        display: block;
        z-index: 999;
    }

    .children-cont {
        display: none;
        position: absolute;
        bottom: -2.45rem;
        height: 2.6rem;
        text-align: center;
        width: auto;

    }

    .children-cont .bg-jiao {
        display: inline-block;
        width: 1.85rem;
        height: 0.6rem;
        background: url('../assets/img/bg/bg_tab_child_jiao.png');
        background-size: 100% 100%;
    }

    .children-cont .detail-tab-cont {
        height: 2.1rem;
        display: flex;
        align-items: center;
        background: rgba(0, 10, 50, 0.5);
        margin-top: -0.2rem;
    }

    .children-cont .detail-tab-cont .bg-left {
        display: inline-block;
        width: 0.3rem;
        height: 2.1rem;
        background: url('../assets/img/bg/bg_tab_child_left.png');
        background-size: 100% 100%;
    }

    .children-cont .detail-tab-cont .bg-right {
        display: inline-block;
        width: 0.3rem;
        height: 2.1rem;
        background: url('../assets/img/bg/bg_tab_child_right.png');
        background-size: 100% 100%;
    }

    .children-cont .detail-tab-cont .children-detail {
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        height: 2.1rem;
    }

    .children-cont .detail-tab-cont p {
        margin: 0;
        padding: 0 0.5rem;
        display: inline-block;
        font-size: 0.7rem;
        color: #fff;
        /* line-height: 0.4rem; */
        /* height: 0.4rem; */
        width: 5.2rem;
        border-left: 1px solid #01E7FC;
    }

    .children-cont .detail-tab-cont p:first-of-type {
        border-left: 0;
    }

    .children-cont .detail-tab-cont p:hover {
        cursor: pointer;
        color: #01E7FC;
    }

    .routers .router-link-active .route-item {
        background: url('../assets/img/bg/bg_tab_item.png');
        background-size: 100% 100%;
    }

    .routers .route-item em {
        width: 1.5rem;
        height: 1.5rem;
    }

    .routers .route-item span {
        font-size: 0.8rem;
        color: #fff;
    }

    .routers .router-link-active .route-item span,
    .routers .route-item:hover span {
        color: #01E7FC;
    }

    .user {
        width: 11.9rem;
        height: 3.1rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        pointer-events: auto;
    }

    .user-info {
        position: relative;
    }

    .user-info-cont {
        width: 4.45rem;
        height: 3.1rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .user-info-cont:hover {
        cursor: pointer;
    }

    .out-login {
        position: absolute;
        top: 2.5rem;
        left: 0;
        width: 4.8rem;
        height: 4.35rem;
        background: url('../assets/img/bg/bg_out_login.png');
        background-size: 100% 100%;
        z-index: 2222222222222222;
        box-sizing: border-box;
        padding-top: 1.2rem;
    }

    .out-login p {
        font-size: 0.7rem;
        color: #fff;
        height: 0.7rem;
        line-height: 0.7rem;
        margin-bottom: 0.75rem!important;
    }

    .out-login p:hover {
        cursor: pointer;
        color: #01E7FC;
    }

    .user-info-detail {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 2.85rem;
    }

    .user-info-detail span {
        font-size: 0.7rem;
        color: #fff;
    }

    .user-info-detail span:last-of-type {
        font-size: 0.6rem;
    }

    .space-line {
        width: 1px;
        height: 0.95rem;
        background: #fff;
    }

    .user-weather p {
        font-size: 0.7rem;
        color: #fff;
    }

    .user-weather p:last-of-type {
        font-size: 0.6rem;
    }

    .icon-total {
        background: url('../assets/img/icon/icon_tab_1.png');
        background-size: 100% 100%;
    }

    .router-link-active .icon-total,
    .routers .route-item:hover .icon-total {
        background: url('../assets/img/icon/icon_tab_1_active.png');
        background-size: 100% 100%;
    }

    .icon-businiss {
        background: url('../assets/img/icon/icon_tab_2.png');
        background-size: 100% 100%;
    }

    .router-link-active .icon-businiss,
    .routers .route-item:hover .icon-businiss {
        background: url('../assets/img/icon/icon_tab_2_active.png');
        background-size: 100% 100%;
    }

    .icon-build {
        background: url('../assets/img/icon/icon_tab_3.png');
        background-size: 100% 100%;
    }

    .router-link-active .icon-build,
    .routers .route-item:hover .icon-build {
        background: url('../assets/img/icon/icon_tab_3_active.png');
        background-size: 100% 100%;
    }

    .icon-run {
        background: url('../assets/img/icon/icon_tab_4.png');
        background-size: 100% 100%;
    }

    .router-link-active .icon-run,
    .routers .route-item:hover .icon-run {
        background: url('../assets/img/icon/icon_tab_4_active.png');
        background-size: 100% 100%;
    }

    .icon-user {
        width: 1.2rem;
        height: 1.45rem;
        background: url('../assets/img/icon/icon_user.png');
        background-size: 100% 100%;
    }

    .icon-jiao {
        width: 0.3rem;
        height: 0.25rem;
        background: url('../assets/img/icon/icon_jiao.png');
        background-size: 100% 100%;
    }
</style>