@GHSelectPage = React.createClass
  render: ->
    <div className='gh-page'>
      <div className='ui container'>
        <h2 className='ui header topbar'>
          <TopbarBack href='index.html' />
          <span>预约挂号</span>
        </h2>

        <div className='select'>
          <div className="ui cards three">
            <a className="card" href='gh-xc.html'>
              <div className="content">
                <div className='yunwen' />
                <div className="ui header"><span>现场挂号</span></div>
              </div>
            </a>
            <a className="card" href='gh-yy.html'>
              <div className="content">
                <div className='yunwen' />
                <div className="ui header"><span>预约取号</span></div>
              </div>
            </a>
            <a className="card" href='gh-zl.html'>
              <div className="content">
                <div className='yunwen' />
                <div className="ui header"><span>治疗预约</span></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

@GHXCPage = React.createClass
  render: ->
    <div className='gh-page'>
      <div className='ui container'>
        <h2 className='ui header topbar'>
          <TopbarBack href='gh-select.html' />
          <span>现场挂号</span>
        </h2>

        <div className='info-input-form'>
          <GHMenu active=0 />
          {
            inputs = [
              '　就诊人', '身份证号', '　手机号', '诊疗卡号', 
              '症状描述', '个人病史', '家庭病史'
            ]
            <FormPanel title='输入患者信息' inputs={inputs} to='gh-doctor-select.html'/>
          }
        </div>
      </div>
    </div>

@GHYYPage = React.createClass
  render: ->
    <div className='gh-page'>
      <div className='ui container'>
        <h2 className='ui header topbar'>
          <TopbarBack href='gh-select.html' />
          <span>预约取号</span>
        </h2>

        <div className='info-input-form'>
          {
            inputs = [
              '　预约号', '　手机号', '诊疗卡号'
            ]
            <FormPanel title='输入预约信息' inputs={inputs} to='gh-confirm.html'/>
          }
        </div>
      </div>
    </div>

GHMenu = React.createClass
  render: ->
    if @props.active == 0
      <div className="ui two item menu">
        <a className="active item">初次来访</a>
        <a className="item">再次来访</a>
      </div>
    else if @props.active == 1
      <div className="ui two item menu">
        <a className="item">初次来访</a>
        <a className="active item">再次来访</a>
      </div>

FormPanel = React.createClass
  render: ->
    <div className='panel'>
      <h3 className='ui header'>{@props.title}</h3>
      {
        for input, idx in @props.inputs
          <div key={idx} className='ui labeled input fluid'>
            <div className='ui label'>{input}</div>
            <input type="text" />
          </div>
      }
      <a className='ui right labeled icon button brown enter-yy' href={@props.to}>
        <i className='icon arrow right' />
        <span>获取预约信息</span>
      </a>
    </div>

@GHYYConfirmPage = React.createClass
  render: ->
    <div className='gh-page'>
      <div className='ui container'>
        <h2 className='ui header topbar'>
          <TopbarBack href='gh-yy.html' />
          <span>预约取号</span>
        </h2>

        <ConfirmYYInfoPanel />
      </div>
    </div>

ConfirmYYInfoPanel = React.createClass
  render: ->
    data = [
      ['　就诊人', '王大锤']
      ['预约医师', '叶建华（主任医师 - 体检科）']
      ['就诊时间', '2015-12-08（星期二）上午']
      ['门诊类型', '专家门诊']
    ]

    <div className='info-input-form yy-info'>
      <h3 className='ui header'>预约信息确认</h3>
      <div className="ui divided list">
        {
          for item, idx in data
            <div className='item' key={idx}>
              <div className="ui horizontal label">{item[0]}</div>
              <span>{item[1]}</span>
            </div>
        }
      </div>
      <a className='ui right labeled icon button brown enter-yy' href='gh-result.html'>
        <i className='icon arrow right' />
        <span>确认挂号</span>
      </a>
    </div>

@GHYYResultPage = React.createClass
  render: ->
    <div className='gh-page'>
      <div className='ui container'>
        <div className='info-input-form result'>
          <h3 className='ui header'>挂号成功</h3>
          <p style={'text-align': 'center'}>就诊号：<strong>105</strong></p>
          <a className='ui right labeled icon button brown enter-yy' href='javascript:;'>
            <i className='icon print' />
            <span>打印挂号单</span>
          </a>
          <a className='ui right labeled icon button enter-yy exit' href='gh-select.html'>
            <i className='icon arrow left' />
            <span>退出</span>
          </a>
        </div>
      </div>
    </div>

@GHDoctorSelectPage = React.createClass
  render: ->
    <div className='gh-page'>
      <div className='ui container'>
        <PADLeftPanel>
          <h2 className='ui header topbar'>
            <TopbarBack href='gh-xc.html' />
            医师
          </h2>
          <PADPanelList item_component=DoctorArrangeInfoItem />
        </PADLeftPanel>
        <PADRightPanel>
          <h2 className='ui header topbar'>排班表</h2>
        </PADRightPanel>
      </div>
    </div>

PADLeftPanel = React.createClass
  render: ->
    <div className='pad-left-panel'>
    {@props.children}
    </div>

PADRightPanel = React.createClass
  render: ->
    <div className='pad-right-panel'>
    {@props.children}
    </div>

PADPanelList = React.createClass
  render: ->
    data = [
      ['301', '王大锤', '男']
      ['302', '张本煜', '男']
      ['303', '小爱', '女']
      ['304', '孔连顺', '女']
      ['305', '刘循子墨', '男']
      ['306', '易小星', '男']
      ['307', '至尊玉', '男']
      ['308', '葛布', '女']
    ]

    <div className='pad-panel-list'>
    {
      for item, idx in data
        React.createElement @props.item_component,
          'key': idx
          'data': item
    }
    </div>

DoctorArrangeInfoItem = React.createClass
  render: ->
    data = @props.data

    <a className='item' href='javascript:;'>
      <span className='ui label'>{data[0]}</span>
      <span> - </span>
      <span>{data[1]}</span>
      <span> - </span>
      <span>{data[2]}</span>
      <span className='tail'>
        <i className='icon chevron right' />
      </span>
    </a>