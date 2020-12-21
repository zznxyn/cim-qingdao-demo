<template>
    <div class="about">
        <div class="logo">
            <img src="../assets/img/bg/bg_login.png" alt="">
        </div>
        <div class="login">
            <p class="title">智慧园区综合管理平台</p>
            <div class="input-box">
                <div class="box1">
                    <img src="../assets/img/bg/first_input.png" alt="">
                    <select name="" ref="select" id="select" v-model="current">
                        <option v-for="(item,index) in option" :key="index">{{item.name}}</option>
                    </select>
                </div>
            </div>
            <div class="input-box">
                <div class="box1">
                    <img src="../assets/img/bg/login-user.png" alt="">
                    <input type="text">
                </div>
            </div>
            <div class="input-box">
                <div class="box1">
                    <img src="../assets/img/bg/suo.png" alt="">
                    <input type="text">
                </div>
            </div>
            <div class="but" @click="login">登录</div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                current: '',
                option: [{
                    name: '园区管理',
                    id: 1,
                }, {
                    name: '招商管理',
                    id: 2,
                }, {
                    name: '规建管理',
                    id: 3,
                }, {
                    name: '企业申报',
                    id: 4,
                }, {
                    name: '规建预审',
                    id: 5,
                }]
            }
        },
        created() {
            this.current = this.option[0].name;
        },
        methods: {
            login() {
                let value = this.$refs.select.value;
                if (value == '园区管理') {
                    this.$router.push('/home');
                } else if (value == '招商管理') {
                    this.$router.push('/home/merchants');
                } else if (value == '规建管理') {
                    this.$router.push('/home/build');
                } else if (value == '企业申报') {
                    window.location.href = applyLogin;
                } else if (value == '规建预审') {
                    window.location.href = auditLogin;
                }
            }
        }
    }
</script>
<style scoped>
    .about {
        width: 100%;
        height: 100%;
        background: url('../assets/img/bg/bg-new-2.png');
        background-size: 100% 100%;
    }

    .logo {
        position: absolute;
        left: 50%;
        top: 9.8rem;
        transform: translateX(-50%);
    }

    .login {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 24rem;
    }

    .title {
        font-size: 1.2rem;
        font-weight: 500;
        color: #FFFFFF;
        margin-bottom: 2.55rem;
    }

    .input-box {
        margin-bottom: 0.45rem;
    }

    input {
        background: none;
        outline: none;
        border: none;
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
    }

    .box1 {
        width: 17.5rem;
        height: 2.5rem;
        background: #010B30;
        border: 1px solid #68E4F9;
        opacity: 0.5;
    }

    .box1 input {
        height: 2.5rem;
        font-size: 0.7rem;
        color: #fff;
        width: 15rem;
    }

    .box1 select {
        height: 2.4rem;
        font-size: 0.7rem;
        color: #fff;
        width: 15rem;
        background-color: #010B30;
    }

    .box1 img {
        vertical-align: middle;
        margin-right: 0.5rem;
    }

    .but {
        width: 100%;
        height: 2.5rem;
        background: linear-gradient(90deg, #2B64EC 0%, #68E4F9 100%);
        font-size: 1.2rem;
        line-height: 2.5rem;
        color: #fff;
        margin-top: 1.7rem;
        cursor: pointer;
    }
</style>