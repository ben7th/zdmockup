@DemoIndexPage = React.createClass
  render: ->
    <div className='demo-index-page'>
      <div className='ui vertical segment page-title'>
        <div className='ui container'>
          <DemoIndexPage.Header />
        </div>
      </div>
      <div className='ui vertical segment'>
        <div className='ui container'>
          <DemoIndexPage.Cards />
        </div>
      </div>
    </div>

  statics:
    Header: React.createClass
      render: ->
        <h1 className='ui header lishu'>
          <span>正道中医系统演示</span>
        </h1>

    Cards: React.createClass
      render: ->
        data = [
          {
            name: '诊断'
            desc: '综合规范化诊断记录系统'
            key: 'zhenduan'
            href: 'diagnosis.html'
          }
          {
            name: '业务'
            desc: '预约，体检，诊疗业务操作演示'
            key: 'yewu'
          }
          {
            name: '管理'
            desc: '后台管理，维护，信息查看等功能'
            href: 'clinic.html'
            key: 'guanli'
          }
        ]

        <div className="ui cards">
        {
          for item, idx in data
            href = item.href || 'javascript:;'

            <a key={idx} className="card" href={href}>
              <div className="content">
                <div className='yunwen' />
                <div className="header lishu #{item.key}"><span>{item.name}</span></div>
                <div className="description">{item.desc}</div>
              </div>
            </a>
        }
        </div>