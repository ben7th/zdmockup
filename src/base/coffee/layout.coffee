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
      <DemoManageSidebar.Item icon='hospital' text='店面人员' link='clinic' />
      <DemoManageSidebar.Item icon='user' text='患者信息' link='patient' />
      <DemoManageSidebar.Item icon='treatment' text='挂号分诊' link='register' />
      <DemoManageSidebar.Item icon='yen' text='收费项目' link='charge' />
      <DemoManageSidebar.Item icon='file text outline' text='诊疗方案' link='plan' />
      <DemoManageSidebar.Item icon='first aid' text='药品耗材' link='resource' />
      <DemoManageSidebar.Item icon='setting' text='系统设置' link='system' />
    </div>

  statics:
    Item: React.createClass
      render: ->
        href = if @props.link then "#{@props.link}.html" else 'javascript:;'
        klass = ['item blue']
        if @current_sidebar_active_item() == @props.link
          klass.push 'active'

        <a className={klass.join(' ')} href={href}>
          <i className="icon #{@props.icon}" />
          <span>{@props.text}</span>
        </a>

      current_sidebar_active_item: ->
        page = location.href.split('/demo/').pop()
        mark = page.split('.html')[0]