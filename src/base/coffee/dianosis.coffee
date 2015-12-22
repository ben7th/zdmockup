@DiagnosisPage = React.createClass
  render: ->
    <div className='diagnosis-page'>
      <DiagnosisPage.Paper />
      <DiagnosisPage.Sidebar />
    </div>

  statics:
    Paper: React.createClass
      getInitialState: ->
        scale: 1
      render: ->
        <div className='page-paper' onWheel={@scale}>
          <DiagnosisPage.SVG name='test' scale={@state.scale} />
        </div>

      scale: (evt)->
        scale = @state.scale
        i = 1.1

        if evt.deltaY > 0
          # 缩小
          @setState scale: scale / i

        if evt.deltaY < 0
          # 放大
          @setState scale: scale * i

        # console.log @state.scale

    Sidebar: React.createClass
      render: ->
        <div className='page-sidebar'></div>

    SVG: React.createClass
      render: ->
        src = "../svg/#{@props.name}.svg"
        <img src={src} height='600px' style={'transform': "scale(#{@props.scale})"}/>