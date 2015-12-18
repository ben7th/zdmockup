@DemoIndexPage = React.createClass
  render: ->
    <div className='ui container'>
      <div className='ui basic segment'>
        <h1 className='ui header'>
          <span>正道中医系统演示</span>
        </h1>
      </div>
      <div className='ui basic segment'>
        <div className="ui cards">
          <div className="blue card">
            <div className="content">
              <div className="header">后台管理</div>
              <div className="description">
                后台管理，维护，信息查看等功能
              </div>
            </div>
            <div className="extra content">
              <a className="ui blue fluid button" href='clinic.html'>打开 DEMO</a>
            </div>
          </div>
          <div className="orange card">
            <div className="content">
              <div className="header">
                前台流程
              </div>
              <div className="description">
                预约，体检，诊疗业务操作演示
              </div>
            </div>
            <div className="extra content">
              <div className="ui orange fluid button disabled">打开 DEMO</div>
            </div>
          </div>
        </div>
      </div>
    </div>