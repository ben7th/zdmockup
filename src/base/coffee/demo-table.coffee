@DemoAdminTable = React.createClass
  displayName: 'DemoAdminTable'
  render: ->
    <div className='demo-admin-table ui basic segment'>
      <div className='ui basic segment'>
        <DemoAdminTable.Table data={@props.data} />
      </div>
    </div>

  statics:
    Header: React.createClass
      render: ->
        <h2 className='ui header'>
          <span>{@props.data.name}管理</span>
          <div className='sub header'>{@props.data.desc}</div>
        </h2>

    Table: React.createClass
      render: ->
        <table className='ui celled table'>
          <thead><tr>
          {
            for name, text of @props.data.fields
              <th key={name}>{text}</th>
          }
          </tr></thead>
          <tbody>
          {
            for i in [0..2]
              <tr key={i}>
              {
                for name, text of @props.data.fields
                  value = @props.data.sample?[i]?[name] || <br /> 
                  <td key={name}><span>{value}</span></td>
              }
              </tr>
          }
          </tbody>
          <tfoot><tr><th colSpan='6'>
            <div className='ui right floated pagination menu'>
              <a className='icon item'><i className='icon left chevron' /></a>
              <a className='item'>1</a>
              <a className='item'>2</a>
              <a className='item'>3</a>
              <a className='icon item'><i className='icon right chevron' /></a>
            </div>
          </th></tr></tfoot>
        </table>