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