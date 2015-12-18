@DemoAdminTable = React.createClass
  displayName: 'DemoAdminTable'
  render: ->
    <div className='demo-admin-table ui basic segment'>
      {
        if @props.data.filters?
          <DemoAdminTable.Filter data={@props.data.filters} />
      }
      
      <DemoAdminTable.Table data={@props.data} />
    </div>

  statics:
    Table: React.createClass
      render: ->
        <div className='ui basic segment table-table'>
          <table className='ui celled table'>
            <thead><tr>
              <th></th>
              {
                for name, text of @props.data.fields
                  <th key={name}>{text}</th>
              }
            </tr></thead>
            <tbody>
            {
              idx = 0
              for sdata in @props.data.sample || [{}, {}, {}]
                <tr key={idx++}>
                  <DemoAdminTable.EditTD />
                  {
                    for name, text of @props.data.fields
                      value = sdata[name]
                      if (manage = @props.data.manage?[name])?
                        link = @props.data.manage_links?[name]
                        <DemoAdminTable.ManageTD key={name} value={value} manage={manage} link={link} />
                      else
                        <DemoAdminTable.CommonTD key={name} value={value} />

                  }
                </tr>
            }
            </tbody>
            <DemoAdminTable.Tfoot data={@props.data} />
          </table>
        </div>

    ManageTD: React.createClass
      render: ->
        [icon, btn_text] = @props.manage
        link = @props.link || 'javascript:;'
        <td className='manage collapsing'>
          <a className='ui compact mini manage button teal basic' href={link}>
            <i className="icon #{icon}" />
            <span>{btn_text}</span>
          </a>
          <DemoAdminTable.TDValue data={@props.value} />
        </td>

    CommonTD: React.createClass
      render: ->
        <td>
          <DemoAdminTable.TDValue data={@props.value} />
        </td>

    EditTD: React.createClass
      render: ->
        <td className='collapsing'>
          <a className='ui compact mini button edit teal'>
            <i className='icon pencil' />
            <span>修改</span>
          </a>
        </td>

    TDValue: React.createClass
      render: ->
        if not @props.data?
          <span className='value'>&nbsp;</span> 
        else if typeof(@props.data) is 'object'
          <div className='value labels'>
          {
            for key, value of @props.data
              <div key={key} className='ui label'>
                <span>{key}</span>
                {
                  if value?
                    <div className='detail'>{value}</div>
                }
              </div>
          }
          </div>
        else
          <span className='value'>{@props.data}</span>

    Filter: React.createClass
      render: ->
        <div ref='filters' className='ui basic segment table-filter'>
        {
          for key, sdata of @props.data
            <div key={key} className="ui floating labeled icon dropdown button mini">
              <i className="filter icon"></i>
              <span className="text disabled">选择{sdata.text}</span>
              <div className="menu">
                <div className="header">
                  <i className="tags icon"></i>
                  <span>根据{sdata.text}过滤</span>
                </div>
                {
                  idx = 0
                  for value in sdata.values
                    <DemoAdminTable.FilterDropDownItem key={idx++} data={value} />
                }
              </div>
            </div>
        }
        </div>

      componentDidMount: ->
        jQuery(@refs.filters).find('.ui.dropdown').dropdown()

    FilterDropDownItem: React.createClass
      render: ->
        if Array.isArray @props.data
          <div className="item">
            <i className="dropdown icon"></i>
            <span>{@props.data[0]}</span>
            <div className='menu'>
            {
              idx = 0
              for value in @props.data[1]
                <DemoAdminTable.FilterDropDownItem key={idx++} data={value} />
            }
            </div>
          </div>
        else
          <div className="item">
            <span>{@props.data}</span>
          </div>

    Tfoot: React.createClass
      render: ->
        <tfoot><tr>
          <th></th>
          <th colSpan={Object.keys(@props.data.fields).length}>
            <DemoAdminTable.AddButton data={@props.data.add_button} />
            <DemoAdminTable.Pagination />
          </th>
        </tr></tfoot>

    Pagination: React.createClass
      render: ->
        <div className='ui right floated pagination menu'>
          <a className='icon item'><i className='icon left chevron' /></a>
          <a className='item active'>1</a>
          <a className='item'>2</a>
          <a className='item'>3</a>
          <a className='icon item'><i className='icon right chevron' /></a>
        </div>

    AddButton: React.createClass
      render: ->
        if @props.data?
          <a className='ui labeled icon button green'>
            <i className='icon add' />
            <span>{@props.data}</span>
          </a>
        else
          <div></div>

    # -----------------

    Company: React.createClass
      render: ->
        data =
          fields:
            name: '分公司名称'
            address: '地址'
            phone: '电话'
            director: '负责人'
            underlings: '下辖店面'
          manage:
            underlings: ['list layout', '设置']
          manage_links:
            underlings: 'clinic-branch.html'
          add_button: '增加分公司'
          sample: [
            {
              name: '苏州分公司'
              address: '江苏省苏州市园区娄东路 ** 号'
              phone: '0512-12345678'
              director: '张仲景'
              underlings: '3'
            },
            {
              name: '北京分公司'
              address: '北京市朝阳区北苑路 ** 号'
              phone: '010-12345678'
              director: '孙思邈'
              underlings: '2'
            }
          ]
        <DemoAdminTable data={data} />

    Clinic: React.createClass
      render: ->
        data = 
          fields: 
            name: '店面名称'
            address: '地址'
            phone: '电话'
            director: '负责人'
            belongs_to: '所属分公司'
            beds: '床位数'
          manage:
            beds: ['list layout', '设置']
          manage_links:
            beds: 'clinic-room.html'
          add_button: '增加店面'
          filters: 
            belongs_to:
              text: '分公司' 
              values: ['苏州分公司', '北京分公司']
          sample: [
            {
              name: '奥体分店'
              address: '北京朝阳区惠新西街 ** 号'
              phone: '010-12345677'
              director: '扁鹊'
              belongs_to: '北京分公司'
              beds: '100'
            },
            {
              name: '芍药居分店'
              address: '北京朝阳区文学馆路 ** 号'
              phone: '010-12345676'
              director: '钱乙'
              belongs_to: '北京分公司'
              beds: '150'
            }
          ]

        <DemoAdminTable data={data} />

    Department: React.createClass
      render: ->
        data = 
          fields: 
            name: '部门名称'
            persons: '部门人员'
          manage:
            persons: ['list layout', '设置']
          manage_links:
            persons: 'clinic-person.html'
          add_button: '增加部门'
          filters: 
            belongs_to:
              text: '店面' 
              values: [
                ['苏州分公司', ['园区分店', '虎丘区分店', '吴中区分店']]
                ['北京分公司', ['奥体分店', '芍药居分店']]
              ]
          sample: [
            {
              name: '行政部'
              persons: 3
            },
            {
              name: '体检部'
              persons: 10
            },
            {
              name: '诊疗部'
              persons: 10
            },
            {
              name: '后勤部'
              persons: 5
            }
          ]

        <DemoAdminTable data={data} />

    Person: React.createClass
      render: ->
        data = 
          fields: 
            name: '姓名'
            age: '年龄'
            gender: '性别'
            post: '岗位'
            company: '所属分公司'
            clinic: '店面'
            department: '部门'
          add_button: '增加人员'
          filters: 
            clinic:
              text: '店面' 
              values: [
                ['苏州分公司', ['园区分店', '虎丘区分店', '吴中区分店']]
                ['北京分公司', ['奥体分店', '芍药居分店']]
              ]
            department:
              text: '部门'
              values: ['行政部', '体检部', '诊疗部', '后勤部']
          sample: [
            {
              name: '顾慎为'
              age: '32'
              gender: '男'
              post: '体检师'
              company: '北京分公司'
              clinic: '奥体分店'
              department: '体检部'
            }
            {
              name: '霍允'
              age: '29'
              gender: '女'
              post: '助理'
              company: '北京分公司'
              clinic: '奥体分店'
              department: '行政部'
            }
            {
              name: '宁七味'
              age: '53'
              gender: '男'
              post: '诊疗师'
              company: '北京分公司'
              clinic: '奥体分店'
              department: '诊疗部'
            }
            {
              name: '江水瑶'
              age: '42'
              gender: '女'
              post: '诊疗师'
              company: '北京分公司'
              clinic: '奥体分店'
              department: '诊疗部'
            }
          ]

        <DemoAdminTable data={data} />

    Room: React.createClass
      render: ->
        data = 
          fields: 
            name: '诊疗室名称'
            clinic: '所属店面'
            projects: '诊疗项目与床位'
          add_button: '增加诊疗室'
          manage:
            projects: ['setting layout', '调整']
          filters: 
            clinic:
              text: '店面' 
              values: [
                ['苏州分公司', ['园区分店', '虎丘区分店', '吴中区分店']]
                ['北京分公司', ['奥体分店', '芍药居分店']]
              ]
          sample: [
            {
              name: '第一诊疗室'
              clinic: '奥体分店'
              projects: {
                '五官检查': null
                '胸腹检查': 2
              }
            }
            {
              name: '第二诊疗室'
              clinic: '奥体分店'
              projects: {
                '推拿': 10
                '针灸': 10
              }
            }
            {
              name: '第三诊疗室'
              clinic: '奥体分店'
              projects: {
                '刮痧': 10
                '火罐': 10
              }
            }
          ]

        <DemoAdminTable data={data} />

    Post: React.createClass
      render: ->
        data = 
          fields: 
            name: '岗位名称'
            desc: '岗位描述'
            privilege: '岗位权限'
          add_button: '增加岗位'
          manage:
            privilege: ['setting layout', '调整']
          sample: [
            {
              name: '行政管理'
              privilege:
                '店面人员管理': null
                '患者信息管理': null
            }
            {
              name: '导诊'
              privilege:
                '挂号分诊操作': null
            }
            {
              name: '医师'
              privilege:
                '诊疗报告录入': null
                '收费项选取': null
            }
            {
              name: '诊疗师'
              privilege:
                '诊疗报告录入': null
                '收费项选取': null
            }
            {
              name: '后勤助理'
              privilege:
                '药品耗材管理': null
            }
          ]

        <DemoAdminTable data={data} />

    Project: React.createClass
      render: ->
        data = 
          fields: 
            name: '诊疗项目名称'
            need_bed: '是否需要床位'
            input_type: '报告录入方式'
            input_items: '包含录入项'
            need_photo:  '是否拍照'
            template: '模板'
          add_button: '增加诊疗项目'
          manage:
            input_items: ['setting layout', '调整']
            template: ['setting layout', '调整']
          sample: [
            {
              name: '普通体检'
              need_bed: '否'
              input_type: '普通录入'
              input_items: 44
              need_photo: '否'
              template: '有'
            }
            {
              name: '面诊'
              need_bed: '否'
              input_type: '触点录入'
              input_items: 13
              need_photo: '是'
              template: '有'
            }
            {
              name: '背诊'
              need_bed: '否'
              input_type: '触点录入'
              input_items: 9
              need_photo: '是'
              template: '有'
            }
          ]

        <DemoAdminTable data={data} />