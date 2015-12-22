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
        x: 0
        y: 0

      render: ->
        <div className='page-paper' onWheel={@scale} draggable onDragStart={@drag_start} onMouseMove={@drag_move} onMouseUp={@drag_end}>
          <DiagnosisPage.SVG name='test' scale={@state.scale} x={@state.x} y={@state.y}/>
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

      drag_start: (evt)->
        @origin_x = @state.x
        @origin_y = @state.y
        @drag_start_x = evt.pageX
        @drag_start_y = evt.pageY
        @on_drag = true
        evt.preventDefault()

      drag_move: (evt)->
        if @on_drag
          delta_x = evt.pageX - @drag_start_x
          delta_y = evt.pageY - @drag_start_y
          # console.log delta_x, delta_y

          @setState
            x: @origin_x + delta_x
            y: @origin_y + delta_y

      drag_end: (evt)->
        @on_drag = false #if @on_drag
          


    Sidebar: React.createClass
      render: ->
        <div className='page-sidebar'></div>

    SVG: React.createClass
      render: ->
        src = "../svg/#{@props.name}.svg"
        <div className='img-container' style={'transform': "translate(#{@props.x}px, #{@props.y}px)"}>
          <img src={src} height='600px' style={'transform': "scale(#{@props.scale})"}/>
        </div>