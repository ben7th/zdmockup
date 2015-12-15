@DemoAdminHeader = React.createClass
  displayName: 'DemoAdminHeader'
  render: ->
    <div className='page-admin-head'>
      <div className='ui basic segment'>
        <div className='ui basic segment'>
          <h2 className='ui header page-title'>
            <span>{@props.data.title}</span>
            <div className='sub header'>{@props.data.desc}</div>
          </h2>
        </div>

        <div className='ui basic segment'>
          <div className='ui pointing menu'>
            {
              idx = 0
              for item in @props.data.secondary_items
                klass = ['item']
                klass.push 'active' if idx is 0
                <a key={idx++} className={klass.join(' ')}>{item}</a>
            }
          </div>
        </div>
      </div>
    </div>

  statics:
    Clinic: React.createClass
      displayName: 'DemoAdminHeader.Clinic'
      render: ->
        data =
          title: '店面与人员信息管理'
          desc: '设置门店机构，诊疗室，床位，以及人员信息'
          secondary_items: [
            '分店信息', '部门设置', '职员管理', '诊疗室管理', '床位管理'
          ]

        <DemoAdminHeader data={data} />

    Patient: React.createClass
      displayName: 'DemoAdminHeader.Patient'
      render: ->
        data =
          title: '患者信息管理'
          desc: '查看与管理患者档案，病历，以及诊疗回访信息'
          secondary_items: [
            '患者名单', '档案病历', '诊疗回访'
          ]

        <DemoAdminHeader data={data} />

    Register: React.createClass
      displayName: 'DemoAdminHeader.Register'
      render: ->
        data =
          title: '挂号分诊管理'
          desc: '导诊查看诊疗资源，预约与挂号信息，以及进行过号分诊处理'
          secondary_items: [
            '诊疗资源看板', '预约信息', '挂号信息', '分诊管理'
          ]

        <DemoAdminHeader data={data} />

    Charge: React.createClass
      displayName: 'DemoAdminHeader.Charge'
      render: ->
        data =
          title: '收费项目管理'
          desc: '设置收费项目， VIP 等级，以及进行会员充值'
          secondary_items: [
            '收费项管理', 'VIP 等级设置', '会员充值'
          ]

        <DemoAdminHeader data={data} />

    Plan: React.createClass
      displayName: 'DemoAdminHeader.Plan'
      render: ->
        data =
          title: '诊疗方案管理'
          desc: '设置各阶段诊疗方案录入项构成'
          secondary_items: [
            '方案定义', '录入项定义', '诊断模板管理'
          ]

        <DemoAdminHeader data={data} />

    Resource: React.createClass
      displayName: 'DemoAdminHeader.Resource'
      render: ->
        data =
          title: '药品耗材管理'
          desc: '管理药品耗材的库存信息'
          secondary_items: [
            '分类管理', '信息维护', '入库管理', '出库管理', '在库盘点'
          ]

        <DemoAdminHeader data={data} />

    System: React.createClass
      displayName: 'DemoAdminHeader.System'
      render: ->
        data =
          title: '系统基础设置'
          desc: '设置系统其它功能用到的基础数据'
          secondary_items: [
            '人员岗位定义', '床位类型定义', '缴费方式定义'
          ]

        <DemoAdminHeader data={data} />