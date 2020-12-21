let tableData = [
        {
            id:1,
            name:'资源管理',
            tool:[
                {name:'资源名称',type:'input'},
                {name:'资源类型',type:'select',options:['安保人员','医护人员','园区车辆','监控设备']},
                {name:'资源状态',type:'select',options:['在线','离线']},
            ],
            action:[
                {
                    name:'新建',
                    icon:'icon-btn-add'
                },
                {
                    name:'批量删除',
                    icon:'icon-btn-delete'
                }
            ],
            columns:[
                {title: "序号",customRender: (value, row, index) => `${index+1}`,width:100},
                {title: '名称',dataIndex: 'name',key: 'name'},
                {title: '类型',dataIndex: 'type',key: 'type'},
                {title: '状态',dataIndex: 'cordition',key: 'cordition',scopedSlots: { customRender: 'dispatchCordition' }},
                {title: '简介',dataIndex: 'introduce',key: 'introduce',width:400},
                {title: '操作',dataIndex: 'action',key: 'action',scopedSlots: { customRender: 'manageAction' },width:300}
            ],
            data:[
                {
                    key: '1',
                    name: '摄像头-01',
                    type: '监控设备',
                    cordition: 1,
                    introduce: '光明北街82-1号大门口',
                },
                {
                    key: '2',
                    name: '王文',
                    type: '安保人员',
                    cordition: 1,
                    introduce: '光明北街80-3号',
                },
                {
                    key: '3',
                    name: '黄潇',
                    type: '医护人员',
                    cordition: 0,
                    introduce: '光明北街82-3号',
                },
                {
                    key: '4',
                    name: '渝DAE436',
                    type: '园区车辆',
                    cordition: 1,
                    introduce: '光明北街81-2号大门口',
                },
                {
                    key: '5',
                    name: '爱丽丝',
                    type: '医护人员',
                    cordition: 0,
                    introduce: '光明北街80-2号',
                },{
                    key: '6',
                    name: '张安',
                    type: '安保人员',
                    cordition: 1,
                    introduce: '光明北街82-4号',
                },
            ]
        },
        {
            id:2,
            name:'调度指挥',
            tool:[
                {name:'资源名称',type:'input'},
                {name:'资源类型',type:'select',options:['安保人员','医护人员','园区车辆','监控设备']},
                {name:'资源状态',type:'select',options:['在线','离线']},
            ],
            action:[
                {
                    name:'批量轨迹',
                    icon:'icon-btn-path'
                },
                {
                    name:'批量调度',
                    icon:'icon-btn-dispatch'
                }
            ],
            columns:[
                {title: "序号",customRender: (value, row, index) => `${index+1}`,width:100},
                {title: '名称',dataIndex: 'name',key: 'name'},
                {title: '类型',dataIndex: 'type',key: 'type'},
                {title: '状态',dataIndex: 'cordition',key: 'cordition',scopedSlots: { customRender: 'dispatchCordition' }},
                {title: '简介',dataIndex: 'introduce',key: 'introduce',width:400},
                {title: '操作',dataIndex: 'action',key: 'action',scopedSlots: { customRender: 'dispatchAction' },width:300}
            ],
            data:[
                {
                    key: '1',
                    name: '张安',
                    type: '安保人员',
                    cordition: 1,
                    introduce: '光明北街82号',
                },
                {
                    key: '2',
                    name: '张曹进',
                    type: '医护人员',
                    cordition: 1,
                    introduce: '光明北街83号附12号',
                },
                {
                    key: '3',
                    name: '王金',
                    type: '医护人员',
                    cordition: 0,
                    introduce: '光明北街82号附11号',
                },
                {
                    key: '4',
                    name: '京BC3542',
                    type: '园区车辆',
                    cordition: 1,
                    introduce: '光明北街82号',
                },
                {
                    key: '5',
                    name: '京BC8932',
                    type: '园区车辆',
                    cordition: 0,
                    introduce: '光明北街83号',
                },{
                    key: '6',
                    name: '立讯',
                    type: '安保人员',
                    cordition: 1,
                    introduce: '光明北街82号',
                },
            ]
        },
        {
            id:3,
            name:'预案演练',
            tool:[
                {name:'名称',type:'input'},
                {name:'类型',type:'select',options:['安保人员','医护人员','园区车辆','监控设备']},
            ],
            action:[
                {
                    name:'新建',
                    icon:'icon-btn-add'
                },
                {
                    name:'批量删除',
                    icon:'icon-btn-delete'
                }
            ],
            columns:[
                {title: "序号",customRender: (value, row, index) => `${index+1}`,width:100},
                {title: '名称',dataIndex: 'name',key: 'name'},
                {title: '类型',dataIndex: 'type',key: 'type'},
                {title: '简介',dataIndex: 'introduce',key: 'introduce',width:400},
                {title: '操作',dataIndex: 'action',key: 'action',scopedSlots: { customRender: 'planAction' },width:300}
            ],
            data:[
                {
                    key: '1',
                    name: '张安',
                    type: '安保人员',
                    introduce: '光明北街82号',
                },
                {
                    key: '2',
                    name: '王金山',
                    type: '医护人员',
                    introduce: '光明北街80号附42号',
                },
                {
                    key: '3',
                    name: '蹊跷选',
                    type: '医护人员',
                    introduce: '光明北街81号附99号',
                },
                {
                    key: '4',
                    name: '李思安',
                    type: '安保人员',
                    introduce: '光明北街85号',
                },
                {
                    key: '5',
                    name: '京DG3526',
                    type: '园区车辆',
                    introduce: '光明北街82号',
                },{
                    key: '6',
                    name: '京DG3356',
                    type: '园区车辆',
                    introduce: '光明北街82号',
                },
            ]
        },
        {
            id:4,
            name:'监控管理',
            tool:[
                {name:'名称',type:'input'},
                {name:'类型',type:'select',options:['园区车辆','监控设备']},
            ],
            action:[
                {
                    name:'新建',
                    icon:'icon-btn-add'
                },
                {
                    name:'批量删除',
                    icon:'icon-btn-delete'
                }
            ],
            columns:[
                {title: "序号",customRender: (value, row, index) => `${index+1}`,width:100},
                {title: '名称',dataIndex: 'name',key: 'name'},
                {title: '类型',dataIndex: 'type',key: 'type'},
                {title: '简介',dataIndex: 'introduce',key: 'introduce',width:400},
                {title: '操作',dataIndex: 'action',key: 'action',scopedSlots: { customRender: 'monitorAction' },width:300}
            ],
            data:[
                {
                    key: '1',
                    name: '园区摄像头1',
                    type: '监控设备',
                    introduce: '光明北街81号附12号大门',
                },
                {
                    key: '2',
                    name: '园区摄像头2',
                    type: '监控设备',
                    introduce: '光明北街83号附12号大门',
                },
                {
                    key: '3',
                    name: '园区摄像头3',
                    type: '监控设备',
                    introduce: '光明北街83号附19号大门',
                },
                {
                    key: '4',
                    name: '园区车辆1-京DE6854',
                    type: '园区车辆',
                    introduce: '光明北街81号',
                },
                {
                    key: '5',
                    name: '园区车辆2-京DE5274',
                    type: '园区车辆',
                    introduce: '光明北街82号',
                },{
                    key: '6',
                    name: '园区车辆3-京DE6886',
                    type: '园区车辆',
                    introduce: '光明北街83号',
                },
            ]
        },
        {
            id:5,
            name:'维修管理',
            tool:[
                {name:'设备名称',type:'input'},
                {name:'报修日期',type:'picker'},
                {name:'状态',type:'select',options:['已派单','未派单']},
            ],
            action:[
                {
                    name:'新建',
                    icon:'icon-btn-add'
                },
                {
                    name:'批量删除',
                    icon:'icon-btn-delete'
                }
            ],
            columns:[
                {title: "序号",customRender: (value, row, index) => `${index+1}`,width:100},
                {title: '设备名称',dataIndex: 'name',key: 'name'},
                {title: '规格型号',dataIndex: 'Num',key: 'Num'},
                {title: '安装位置',dataIndex: 'position',key: 'position'},
                {title: '故障类型',dataIndex: 'broken',key: 'broken'},
                {title: '故障级别',dataIndex: 'level',key: 'level'},
                {title: '故障描述',dataIndex: 'description',key: 'description'},
                {title: '报修人',dataIndex: 'person',key: 'person'},
                {title: '报修时间',dataIndex: 'beginTime',key: 'beginTime'},
                {title: '维修截止时间',dataIndex: 'endTime',key: 'endTime'},
                {title: '状态',dataIndex: 'type',key: 'type',scopedSlots: { customRender: 'repaireCordition' }},
                {title: '附件',dataIndex: 'floder',key: 'floder',scopedSlots: { customRender: 'folder' }},
                {title: '操作',dataIndex: 'action',key: 'action',scopedSlots: { customRender: 'repaireAction' },width:300}
            ],
            data:[
                {
                    key: '1',
                    name: 'A计划',
                    Num: '路线1',
                    position: '设备故障',
                    broken:'设备故障',
                    level:'大修',
                    description:'阀门松动',
                    person:'张之超',
                    beginTime:'2020/11/13',
                    endTime:'2020/11/14',
                    type:1,
                    floder:true
                },
                {
                    key: '2',
                    name: 'A-3计划',
                    Num: '路线1-5',
                    position: '设备故障',
                    broken:'设备故障',
                    level:'大修',
                    description:'系统反应迟钝',
                    person:'张之超',
                    beginTime:'2020/11/05',
                    endTime:'2020/11/06',
                    type:0,
                    floder:false
                },
                {
                    key: '3',
                    name: 'A-7计划',
                    Num: '路线1',
                    position: '设备故障',
                    broken:'设备故障',
                    level:'小修',
                    description:'螺丝松动',
                    person:'张之超',
                    beginTime:'2020/11/03',
                    endTime:'2020/11/05',
                    type:1,
                    floder:false
                },
                {
                    key: '4',
                    name: 'B-2计划',
                    Num: '路线4',
                    position: '设备故障',
                    broken:'设备故障',
                    level:'中修',
                    description:'大门迟缓',
                    person:'张之超',
                    beginTime:'2020/10/22',
                    endTime:'2020/10/24',
                    type:0,
                    floder:true
                },
                {
                    key: '5',
                    name: 'C-2计划',
                    Num: '路线1-7',
                    position: '设备故障',
                    broken:'设备故障',
                    level:'大修',
                    description:'阀门松动',
                    person:'张之超',
                    beginTime:'2020/10/15',
                    endTime:'2020/10/15',
                    type:1,
                    floder:true
                }
            ]
        },{
            id:6,
            name:'工单管理',
            tool:[
                {name:'班组名称',type:'input'},
                {name:'状态',type:'select',options:['待确认','已确认','已作废']},
            ],
            action:[],
            columns:[
                {title: "序号",customRender: (value, row, index) => `${index+1}`,width:100},
                {title: '工单编号',dataIndex: 'name',key: 'name'},
                {title: '班组',dataIndex: 'Num',key: 'Num'},
                {title: '任务类型',dataIndex: 'description',key: 'description'},
                {title: '制单人',dataIndex: 'person',key: 'person'},
                {title: '制单时间',dataIndex: 'beginTime',key: 'beginTime'},
                {title: '状态',dataIndex: 'type',key: 'type',scopedSlots: { customRender: 'formCordition' }},
                {title: '操作',dataIndex: 'action',key: 'action',scopedSlots: { customRender: 'formAction' },width:300}
            ],
            data:[
                {
                    key: '1',
                    name: 'A计划',
                    Num: '路线1',
                    description:'阀门松动',
                    person:'赵晓超',
                    beginTime:'2020/11/13',
                    type:0
                },
                {
                    key: '2',
                    name: 'A-3计划',
                    Num: '路线1-5',
                    description:'系统反应迟钝',
                    person:'赵晓超',
                    beginTime:'2020/11/05',
                    type:1
                },
                {
                    key: '3',
                    name: 'A-7计划',
                    Num: '路线1',
                    description:'螺丝松动',
                    person:'赵晓超',
                    beginTime:'2020/11/03',
                    type:1
                },
                {
                    key: '4',
                    name: 'B-2计划',
                    Num: '路线4',
                    description:'大门迟缓',
                    person:'赵晓超',
                    beginTime:'2020/10/23',
                    type:2
                },
                {
                    key: '5',
                    name: 'C-2计划',
                    Num: '路线1-7',
                    description:'阀门松动',
                    person:'赵晓超',
                    beginTime:'2020/10/15',
                    type:1
                },
            ]
        },{
            id:7,  //数据分析
            name:'',
            tool:[
                {name:'设备名称',type:'input'},
                {name:'时间',type:'picker'},
            ],
            action:[
                {name:'导出',icon:'icon-btn-output'}
            ],
            columns:[
                {title: "序号",customRender: (value, row, index) => `${index+1}`,width:100},
                {title: '备件名称',dataIndex: 'name',key: 'name'},
                {title: '备件类型',dataIndex: 'Num',key: 'Num'},
                {title: '规格型号',dataIndex: 'description',key: 'description'},
                {title: '当前库存',dataIndex: 'level',key: 'person',scopedSlots: { customRender: 'restNum' }},
                {title: '满足条件',dataIndex: 'person',key: 'level'},
                {title: '下次采购时间',dataIndex: 'beginTime',key: 'beginTime'}
            ],
            data:[
                {
                    key: '1',
                    name: '大厅扶梯',
                    Num: '集装件',
                    description:'BH-s',
                    person:'4',
                    beginTime:'2021/02/12',
                    level:10
                },
                {
                    key: '2',
                    name: '乘客电梯',
                    Num: '零件',
                    description:'BH-s',
                    person:'10',
                    beginTime:'2021/02/12',
                    level:1
                },
                {
                    key: '3',
                    name: '载物电梯',
                    Num: '零件',
                    description:'BH-s',
                    person:'10',
                    beginTime:'2021/02/12',
                    level:1
                },
                {
                    key: '4',
                    name: '大厅扶梯',
                    Num: '零件',
                    description:'BH-s',
                    person:'10',
                    beginTime:'2021/02/12',
                    level:2
                },
                {
                    key: '5',
                    name: '毛坯件',
                    Num: '集装件',
                    description:'BH-s',
                    person:'10',
                    beginTime:'2021/02/12',
                    level:1
                },
            ]
        },{
            id:8,  //设备管理左边
            name:'',
            tool:[
                {name:'设备组名称',type:'input'},
            ],
            action:[],
            columns:[
                {title: "设备组",dataIndex: 'name',key: 'name'},
                {title: '操作',scopedSlots: { customRender: 'SetAction1'}}
            ],
            data:[
                {
                    key: '1',
                    name: '机械设备',
                    Num: '路线1',
                    children:[
                        {
                            key:'1-1',
                            name:'机械1',
                            Num:'2'
                        }
                    ]
                },
                {
                    key: '2',
                    name: '零件组',
                    Num: '路线1',
                    children:[
                        {
                            key:'2-1',
                            name:'零件组1',
                            Num:'2'
                        },
                        {
                            name:'零件组2',
                            key:'2-2',
                            Num:'2'
                        }
                    ]
                },
            ]
        },{
            id:9,  //设备管理右边
            name:'',
            tool:[
                {name:'设备名称',type:'input'},
                {name:'时间',type:'picker'},
            ],
            action:[
                {name:'新建',icon:'icon-btn-add'},
                {name:'批量删除',icon:'icon-btn-delete'}
            ],
            columns:[
                {title: "设备名称",dataIndex: 'name',key: 'name'},
                {title: '备件编号',dataIndex: 'level',key: 'level'},
                {title: '规格型号',dataIndex: 'Num',key: 'Num'},
                {title: '安装位置',dataIndex: 'description',key: 'description'},
                {title: '设备类型',dataIndex: 'person',key: 'person'},
                {title: '操作',scopedSlots: { customRender: 'SetAction2'}} 
            ],
            data:[
                {
                    key: 1,
                    name: '摄像头',
                    Num: 'JOOAN-IP66',
                    description:'园区大门左侧',
                    person:'红外夜视',
                    level:'set-0832001'
                },
                {
                    key: 2,
                    name: '摄像头',
                    Num: 'JOOAN-IP66',
                    description:'园区南大门左侧',
                    person:'红外夜视',
                    level:'set-0832002'
                },
                {
                    key: 3,
                    name: '阀门',
                    Num: 'ARROW',
                    description:'园区供气房总阀门',
                    person:'精铜角阀',
                    level:'set-0832003'
                },
                {
                    key: 4,
                    name: '显示器',
                    Num: '戴尔S2421HSX',
                    description:'4k高清显示器',
                    person:'机房',
                    level:'set-0832004'
                },
                {
                    key: 5,
                    name: '电闸',
                    Num: '德力西电气（DELIXI ELECTRIC）',
                    description:'德力西电气配电箱专用阀门',
                    person:'机房',
                    level:'set-0832005'
                },
            ]
        }
    ]
export default tableData;