@DemoTopMenu = React.createClass
  render: ->
    <div className='ui fixed inverted menu'>
      <div className='ui container'>
        <a className='item' onClick={@show_sidebar}>
          <i className='icon sidebar' />
          <span>显示侧栏菜单</span>
        </a>
      </div>
    </div>

  show_sidebar: ->
    jQuery('body > .sidebar').sidebar('toggle')

@DemoManageSidebar = React.createClass
  render: ->
    <div className='ui left vertical inverted sidebar labeled icon menu visible'>
      <DemoManageSidebar.Item icon='hospital' text='店面人员' />
      <DemoManageSidebar.Item icon='user' text='患者信息' />
      <DemoManageSidebar.Item icon='treatment' text='挂号分诊' />
      <DemoManageSidebar.Item icon='yen' text='收费项目' />
      <DemoManageSidebar.Item icon='file text outline' text='诊疗方案' />
      <DemoManageSidebar.Item icon='first aid' text='药品耗材' link='material' />
      <DemoManageSidebar.Item icon='setting' text='系统设置' link='system' />
    </div>

  statics:
    Item: React.createClass
      render: ->
        href = if @props.link then "/demo/#{@props.link}.html" else 'javascript:;'

        <a className='item' href={href}>
          <i className="icon #{@props.icon}" />
          <span>{@props.text}</span>
        </a>