<template>
    <div class="table-cont" :class="{'active':showBg,'height':height}">
        <div class="action-cont">
            <div class="action-item-cont">
                <div class="action-item" v-for="(item,index) in currentTableData.tool" :key="index">
                    <span>{{item.name}}：</span>
                    <input v-if="item.type=='input'" type="text" placeholder="请输入">
                    <select v-else-if="item.type=='select'" name="" id="">
                        <option v-for="(item,index) in item.options" :value="index">{{item}}</option>
                    </select>
                    <div v-else class="picker-cont">
                        <a-config-provider :locale="zhCN">
                            <a-range-picker :show-time="{ format: 'HH:mm' }" format="YYYY-MM-DD HH:mm"
                                @change="dateChange" @ok="onOk" />

                        </a-config-provider>
                    </div>
                </div>
                <span class="action-tool-btn">查询</span>
                <span class="action-tool-btn active">重置</span>
            </div>
            <div class="action-btn-cont">
                <div v-for="(item,index) in currentTableData.action" :key="index"
                    @click="newBuild(index,currentTableData.id)">
                    <em :class="item.icon"></em>
                    <span>{{item.name}}</span>
                </div>
            </div>
        </div>
        <a-config-provider :locale="zhCN">
            <!--  :row-selection="id==8||id==9?null:rowSelection" -->
            <a-table :columns="currentTableData.columns" :pagination="id==8?false:pagination"
                :data-source="currentTableData.data"
                @change="handleTableChange">
                <!-- 资源管理操作 -->
                <span class="action" slot="manageAction" slot-scope="record">
                    <a href="javascript:;">
                        <em class="icon-edit"></em>
                        <span @click="edit">编辑</span>
                    </a>
                    <a href="javascript:;">
                        <em class="icon-delete"></em>
                        <span>删除</span>
                    </a>
                    <a href="javascript:;">
                        <em class="icon-position"></em>
                        <span @click="location">定位</span>
                    </a>
                </span>
                <!-- 调度指挥操作 -->
                <span class="action" slot="dispatchAction" slot-scope="record">
                    <a href="javascript:;">
                        <em class="icon-dispatch"></em>
                        <span @click="dispatch">调度</span>
                    </a>
                    <a href="javascript:;">
                        <em class="icon-path"></em>
                        <span @click="trajectory">轨迹</span>
                    </a>
                    <a href="javascript:;">
                        <em class="icon-position"></em>
                        <span @click="location">定位</span>
                    </a>
                    <a href="javascript:;">
                        <em class="icon-tell"></em>
                        <span>通话</span>
                    </a>
                </span>
                <!-- 预案演练 -->
                <span class="action" slot="planAction" slot-scope="record">
                    <a href="javascript:;" @click="manoeuvre">
                        <em class="icon-play"></em>
                        <span>演练</span>
                    </a>
                    <a href="javascript:;" @click="auditDetail">
                        <em class="icon-detail"></em>
                        <span >详情</span>
                    </a>
                    <a href="javascript:;" @click="auditEdit">
                        <em class="icon-edit"></em>
                        <span>编辑</span>
                    </a>
                    <a href="javascript:;">
                        <em class="icon-delete"></em>
                        <span>删除</span>
                    </a>
                </span>
                <!-- 监控管理 -->
                <span class="action" slot="monitorAction" slot-scope="record">
                    <a href="javascript:;">
                        <em class="icon-projection"></em>
                        <span @click="projection">投影</span>
                    </a>
                    <a href="javascript:;" @click="manageDetail">
                        <em class="icon-detail"></em>
                        <span>详情</span>
                    </a>
                    <a href="javascript:;" @click="videoEdit">
                        <em class="icon-edit"></em>
                        <span>编辑</span>
                    </a>
                    <a href="javascript:;">
                        <em class="icon-delete"></em>
                        <span>删除</span>
                    </a>
                </span>

                <!-- 在线.离线状态 -->
                <span slot="dispatchCordition" slot-scope="record">
                    <span v-if="record==1">在线</span>
                    <span v-else style="opacity:0.5">离线</span>
                </span>
                <!-- 维修管理操作 -->
                <span class="action" slot="repaireAction">
                    <a href="javascript:;" @click="editRepaireFn">
                        <em class="icon-edit"></em>
                        <span>编辑</span>
                    </a>
                    <a href="javascript:;">
                        <em class="icon-delete"></em>
                        <span>删除</span>
                    </a>
                    <a href="javascript:;" @click="location">
                        <em class="icon-position"></em>
                        <span>定位</span>
                    </a>
                </span>
                <!-- 维修管理状态 -->
                <span slot="repaireCordition" slot-scope="record">
                    <span v-if="record==1">已派单</span>
                    <span v-else style="color:#FF3433">未派单</span>
                </span>
                <!-- 维修管理附件 -->
                <span slot="folder" slot-scope="record">
                    <span v-if="record" style="color:#0095FF">查看</span>
                </span>
                <!-- 工单管理状态 -->
                <span slot="formCordition" slot-scope="record">
                    <span v-if="record==0">待确认</span>
                    <span v-else-if="record==1" style="color:#02E855">已确认</span>
                    <span v-else style="color:#FF3433">已作废</span>
                </span>
                <!-- 工单管理操作 -->
                <span class="action" slot="formAction">
                    <a href="javascript:;">
                        <em class="icon-delete"></em>
                        <span>作废</span>
                    </a>
                    <a href="javascript:;" @click="lookDetailFn">
                        <em class="icon-detail"></em>
                        <span>详情</span>
                    </a>
                </span>
                <!-- 数据分析库存 -->
                <span slot="restNum" slot-scope="record">
                    <span v-if="record<=8" style="color:#FF3433">{{record}}</span>
                    <span v-else>{{record}}</span>
                    <span v-if="record<=8" class="slot-replenish">库存不足</span>
                </span>
                <!-- 设备管理操作 -->
                <span class="action" slot="SetAction1">
                    <a href="javascript:;">
                        <em class="icon-edit"></em>
                        <span>编辑</span>
                    </a>
                    <a href="javascript:;">
                        <em class="icon-delete"></em>
                        <span>删除</span>
                    </a>
                    <a href="javascript:;">
                        <em class="icon-child"></em>
                        <span>添加子目录</span>
                    </a>
                </span>
                <span class="action" slot="SetAction2">
                    <a href="javascript:;" @click="editSetFn">
                        <em class="icon-edit"></em>
                        <span>编辑</span>
                    </a>
                    <a href="javascript:;">
                        <em class="icon-delete"></em>
                        <span>删除</span>
                    </a>
                    <a href="javascript:;" @click="location">
                        <em class="icon-position"></em>
                        <span>定位</span>
                    </a>
                </span>
            </a-table>
        </a-config-provider>
    </div>
</template>
<script>
    import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
    import tableData from '../assets/js/table'
    export default {
        name: 'table1',
        data() {
            return {
                zhCN,
                tableData,
                selectedRowKeys: [],
                pagination: {
                    current: 1,
                    pageSizeOptions: ['5', '10'],
                    total: 0,
                    showSizeChanger: true,
                    size:'small',
                    pageSize: 5
                },
                auditName:['新建','详情','编辑']
            }
        },
        props: {
            id: {
                type: Number,
                required: true
            },
            showBg: {
                type: Boolean,
                default: true
            },
            height:{
                type:Boolean,
                default:false
            }
        },
        computed: {
            shpList(){
                return this.$store.state.showList[12].list
            },
            rowSelection() {
                const {
                    selectedRowKeys
                } = this;
                return {
                    selectedRowKeys,
                    onChange: this.shooseRow,
                    hideDefaultSelections: true,
                    type: 'checkbox',
                    selections: true,
                    onSelection: this.onSelection,

                };
            },
            currentTableData() {
                let data = {};
                for (let i = 0; i < this.tableData.length; i++) {
                    if (this.tableData[i].id == this.id) {
                        data = this.tableData[i]
                    }
                }
                return data;
            }
        },
        mounted() {

        },
        methods: {
            shooseRow(record, selectedRows) {
                console.log(record, selectedRows)
                this.selectedRowKeys = record;
            },
            handleTableChange(pagination) {
                this.pagination = pagination;
            },
            dateChange(value, dateString) {
                console.log('Selected Time: ', value);
                console.log('Formatted Selected Time: ', dateString);
            },
            onOk(value) {
                console.log('onOk: ', value);
            },
            newBuild(i, j) {
                this.$emit('openDialog', i, j);
                // this.$emit('auditDetailClick',this.auditName[0]);
            },
            // //编辑打开弹窗
            // editFormFn(){
            //     this.$emit('openDialog',this.id)
            // },
            //编辑设备
            editSetFn(){
                this.$emit('openSetDialog')
            },
            //编辑维修
            editRepaireFn(){
                this.$emit('openRepaireDialog')
            },
            //查看详情
            lookDetailFn(){
                this.$emit('openDialog',this.id)
            },
            // 定位
            location() {
                this.$emit('flylocation');
            },
            // 调度
            dispatch() {
                this.$emit('openTableDialog');
            },
            // 轨迹
            trajectory() {
                this.$emit('tableTrajectory');
            },
            // 投影
            projection() {
                this.$emit('tableProjection');
            },
            // 编辑
            edit() {
                this.$emit('editTable');
            },
            //演练
            manoeuvre(){
                //演练
                this.$store.commit('setCarmeInfo',[-2581448.204410012, 4450740.958542701, 3758146.7788522905, 348.84611761299317, -75.37489099047194, 359.85772295775644])
                this.$store.commit('moveLabel')
                let data = {
                    list: ['label-img1','label-img2','label-img3'],
                    id: 5
                }
                this.$store.commit('addDivLabel', data)
                let data1 = {
                    list: ['center-img'],
                    id: 6
                }
                this.$store.commit('addDivLabel', data1)
                //添加线路
                for(let i=0;i<this.shpList.length;i++){
                    let obj = {
                        shpUrl: this.shpList[i].shpurl,
                        styleField: this.shpList[i].styleField,
                        colorTables: this.shpList[i].colorTables,
                        id:this.shpList[i].id
                    }
                    this.$store.commit('addShp',obj)
                } 
            },
            // 详情
            auditDetail() {
                this.$emit('auditDetailClick',this.auditName[1]);
            },
            // 预案编辑
            auditEdit() {
                this.$emit('auditDetailClick',this.auditName[2]);
            },
            // 监控详情
            manageDetail() {
                this.$emit('manageDetailClick',this.auditName[1]);
            },
            // 监控编辑
            videoEdit() {
                 this.$emit('manageVideoClick');
            }
        }
    }
</script>

<style>
    .table-cont {
        height: 18.25rem;
    }
    .table-cont.height{
        height: 38.25rem;
    }
    .table-cont.active {
        background: linear-gradient(180deg, rgba(0, 10, 50, 0.6) 0%, rgba(0, 10, 50, 0.1) 100%);
    }

    .table-cont .action-cont {
        height: 3.4rem;
        box-sizing: border-box;
        padding: 0 0.8rem;
        display: flex;
        justify-content: space-between;
    }

    .table-cont .action-cont .action-item-cont {
        width: 80%;
        display: flex;
        align-items: center;
        height: 100%;
    }

    .table-cont .action-cont .action-item-cont .action-item {
        margin-right: 1.25rem;
        display: flex;
        align-items: center;
    }

    .table-cont .action-cont .action-item-cont .action-item>span {
        font-size: 0.7rem;
        color: #fff;
        line-height: 3.4rem;
    }

    .table-cont .action-cont .action-item-cont .action-item>input,
    .table-cont .action-cont .action-item-cont .action-item>select {
        background: rgba(0, 10, 50, 0.6);
        height: 1.6rem;
        width: 6rem;
        box-shadow: none;
        outline: none;
        color: #fff;
        font-size: 0.7rem;
        line-height: 1.6rem;
        box-sizing: border-box;
        padding: 0 0.6rem;
        border: none;
    }

    .action-tool-btn {
        width: 3.3rem;
        height: 1.6rem;
        color: #fff;
        font-size: 0.7rem;
        line-height: 1.6rem;
        text-align: center;
        background: linear-gradient(180deg, #1861F5 0%, #1861F5 100%);
    }

    .action-tool-btn.active {
        background: rgba(255, 255, 255, 0.25);
        margin-left: 0.8rem;
    }

    .action-btn-cont {
        display: flex;
        align-items: center;
        width: 9.35rem;
        justify-content: space-between;
    }

    .action-btn-cont>div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 4.4rem;
        height: 1.6rem;
        background: #1861F5;
        cursor: pointer;
    }

    .action-btn-cont>div em {
        width: 0.7rem;
        height: 0.7rem;
        margin-right: 0.15rem;
    }

    .action-btn-cont>div span {
        font-size: 0.7rem;
        color: #fff;
        line-height: 1.6rem;
    }





    .picker-cont {
        width: 16rem;
        height: 1.6rem;
        background: rgba(0, 10, 50, 0.6);
    }

    /* .page-cont{
    width: 100%;
    display: flex;
    height: 2rem;
    justify-content: center;
    margin: 0.7rem 0;
} */



    /* 表格样式 */
    .ant-table-wrapper {
        width: 100%;
        box-sizing: border-box;
        padding: 0 0.55rem 0 1.55rem;
    }

    .ant-table .ant-table-row-indent+.ant-table-row-expand-icon {
        color: rgba(255, 212, 36, 1) !important;
        background: none !important;
    }

    .ant-table-thead {
        background: rgba(0, 10, 50, 0.6) !important;
        height: 1.8rem !important;
    }

    .ant-table-thead>tr>th,
    .ant-table-tbody>tr>td {
        background: none !important;
        color: #fff !important;
    }

    .ant-table-thead>tr>th {
        padding: 0.25rem 0.25rem 0.25rem 0.75rem !important;
    }

    .ant-table-tbody>tr>td {
        padding: 0 0 0 0.7rem !important;
    }

    .ant-table-fixed-right,
    .ant-table-fixed-right table {
        background: none !important;
    }

    .ant-table-row {
        height: 1.7rem !important;
    }

    .ant-table-row.ant-table-row-level-0:hover {
        background: rgba(24, 97, 245, 0.5);
    }

    .ant-pagination-options-size-changer.ant-select {
        border: 1px solid rgba(255, 255, 255, 0.6) !important;
        border-radius: 0.3rem !important;
    }

    .ant-pagination-disabled a,
    .ant-pagination-disabled:hover a,
    .ant-pagination-disabled:focus a,
    .ant-pagination-disabled .ant-pagination-item-link,
    .ant-pagination-disabled:hover .ant-pagination-item-link,
    .ant-pagination-disabled:focus .ant-pagination-item-link {
        background:#000A32 !important;
        color: #fff !important;
    }
    .ant-pagination-item{
        background: #000A32 !important;
        margin: 0 0.2rem !important;
    }
    .ant-pagination-item a{
        color: #fff !important;
    }
    .ant-pagination.mini .ant-pagination-options{
        margin-left: 0.2rem;
    }
    .ant-select-selection--single .ant-select-selection__rendered{
        margin-right: 7px !important;
    }
    .ant-pagination-item-active {
        border-color: #01E7FC !important;
        background: none !important;
        color: #fff !important;
    }
    .ant-pagination-prev .ant-pagination-item-link, .ant-pagination-next .ant-pagination-item-link{
        background: #000A32 !important;
    }
    .ant-pagination-item-link .anticon{
        color: #fff !important;
    }
    .ant-pagination-item-active a {
        color: #fff !important;
    }
    .ant-select-selection{
        background: #000A32 !important;
        border: none;
    }
    .ant-select-selection-selected-value{
        color: #fff !important;
    }
    .ant-table-tbody > tr > td,.ant-table-thead > tr > th{
        border-bottom: 1px solid rgba(255,255,255,0.1) !important;
    }

 
    /* 操作 */
    .icon-btn-path {
        background: url('../assets/img/icon/icon_path.png');
        background-size: 100% 100%;
    }

    .icon-btn-dispatch {
        background: url('../assets/img/icon/icon_dispatch.png');
        background-size: 100% 100%;
    }

    .icon-btn-delete {
        background: url('../assets/img/icon/icon_delete.png');
        background-size: 100% 100%;
    }

    .icon-btn-add {
        background: url('../assets/img/icon/icon_add.png');
        background-size: 100% 100%;
    }

    .icon-btn-output {
        background: url('../assets/img/icon/icon_output.png');
        background-size: 100% 100%;
    }

    .action {
        display: flex;
        align-items: center;
    }

    .action a {
        margin-right: 1.5rem;
        display: flex;
        align-items: center;
        min-width: 2.4rem;
    }

    .action a span {
        color: #01E7FC;
        font-size: 0.7rem;
    }

    .action a em {
        width: 0.7rem;
        height: 0.7rem;
        margin-right: 0.1rem;
    }

    .action a em.icon-position {
        width: 0.55rem;
        background: url('../assets/img/icon/icon_position.png');
        background-size: 100% 100%;
    }

    .icon-dispatch {
        background: url('../assets/img/icon/icon_dispatch_active.png');
        background-size: 100% 100%;
    }

    .icon-path {
        background: url('../assets/img/icon/icon_path_active.png');
        background-size: 100% 100%;
    }

    .icon-tell {
        background: url('../assets/img/icon/icon_tell.png');
        background-size: 100% 100%;
    }

    .icon-edit {
        background: url('../assets/img/icon/icon_edit.png');
        background-size: 100% 100%;
    }

    .icon-delete {
        background: url('../assets/img/icon/icon_delete_active.png');
        background-size: 100% 100%;
    }

    .icon-play {
        background: url('../assets/img/icon/icon_play.png');
        background-size: 100% 100%;
    }

    .icon-detail {
        background: url('../assets/img/icon/icon_detail.png');
        background-size: 100% 100%;
    }

    .icon-projection {
        background: url('../assets/img/icon/icon_projection.png');
        background-size: 100% 100%;
    }
    .icon-child{
        background: url('../assets/img/icon/icon_add_child.png');
        background-size: 100% 100%;
    }
    .slot-replenish {
        display: inline-block;
        width: 3rem;
        height: 1rem;
        font-size: 0.6rem;
        line-height: 0.6rem;
        color: #FFFFFF;
        background: #FF3433;
        border-radius: 1rem;
        line-height: 1rem;
        text-align: center;
        margin-left: 0.2rem;
    }
</style>