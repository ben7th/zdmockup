@DemoAdminTable = React.createClass
  displayName: 'DemoAdminTable'
  render: ->
    <div className='demo-admin-table ui basic segment'>
      <div className='ui basic segment'>
        <DemoAdminTable.Table data={@props.data} />
      </div>
    </div>

  statics:
    Table: React.createClass
      render: ->
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
            for i in [0..2]
              <tr key={i}>
                <td className='collapsing'>
                  <a className='ui mini button edit green'>
                    <i className='ui icon edit' />
                    <span>修改</span>
                  </a>
                </td>
                {
                  for name, text of @props.data.fields
                    value = @props.data.sample?[i]?[name] || <br /> 
                    <td key={name}>
                      <span>{value}</span>
                      {
                        if @props.data.manage[name]?
                          [icon, btn_text] = @props.data.manage[name]
                          <a className='ui mini manage button green'>
                            <i className="ui icon #{icon}" />
                            <span>{btn_text}</span>
                          </a>
                      }
                    </td>
                }
              </tr>
          }
          </tbody>
          <tfoot><tr>
            <th></th>
            <th colSpan={Object.keys(@props.data.fields).length}>
              <a className='ui labeled icon button large blue'>
                <i className='ui icon add' />
                <span>增加店面</span>
              </a>

              <div className='ui right floated pagination menu'>
                <a className='icon item'><i className='icon left chevron' /></a>
                <a className='item'>1</a>
                <a className='item'>2</a>
                <a className='item'>3</a>
                <a className='icon item'><i className='icon right chevron' /></a>
              </div>
            </th>
          </tr></tfoot>
        </table>


    Clinic: React.createClass
      render: ->
        data = 
          fields: 
            name: '店面名称'
            address: '地址'
            phone: '电话'
            director: '负责人'
            underlings: '下属店面'
            beds: '床位数'
          manage:
            underlings: ['setting', '设置']
            beds: ['setting', '设置']
          sample: [
            {
              name: '朝阳区总店'
              address: '北京朝阳区健翔桥东xx号'
              phone: '010-66668888'
              director: '张仲景'
              underlings: '2'
              beds: '200'
            },
            {
              name: '北苑路分店'
              address: '北京朝阳区北苑路xx号'
              phone: '010-66668889'
              director: '孙思邈'
              underlings: '0'
              beds: '100'
            },
            {
              name: '芍药居分店'
              address: '北京朝阳区文学馆路xx号'
              phone: '010-66668880'
              director: '钱乙'
              underlings: '0'
              beds: '100'
            }
          ]

        <DemoAdminTable data={data} />