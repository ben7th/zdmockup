@GHSelectPage = React.createClass
  render: ->
    <div className='gh-page'>
      <div className='ui container'>
        <h2 className='ui header topbar'>
          <TopbarBack href='index.html' />
          <span>预约挂号</span>
        </h2>

        <div className='select'>
          <div className="ui cards two">
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
          <div className="ui two item menu">
            <a className="active item">初次来访</a>
            <a className="item">再次来访</a>
          </div>

          <div className='panel'>
            <h3 className='ui header'>输入患者信息</h3>
            {
              inputs = [
                '　就诊人', '身份证号', '　手机号', '诊疗卡号', 
                '症状描述', '个人病史', '家庭病史'
              ]

              for input, idx in inputs
                <div key={idx} className='ui labeled input fluid'>
                  <div className='ui label'>{input}</div>
                  <input type="text" />
                </div>
            }
            <a className='ui labeled button brown'>
              进入预约
              <i className='icon arrow right' />
            </a>
          </div>
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
      </div>
    </div>