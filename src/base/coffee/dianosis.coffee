ScaleDragPaper = React.createClass
  getInitialState: ->
    scale: 1.0
    x: 0
    y: 0

  render: ->
    position =
      scale: @state.scale
      x: @state.x
      y: @state.y

    <div className='scale-drag-paper' ref='paper' draggable 
      onDragStart={@drag_start} 
      onMouseMove={@drag_move} 
      onMouseUp={@drag_end} 
      onWheel={@do_scale}
    >
      <ScaleDragPaper.ScaleContainer ref='container' position={position}>
      {@props.children}
      </ScaleDragPaper.ScaleContainer>
    </div>


  componentDidMount: ->



  statics:
    ScaleContainer: React.createClass
      render: ->
        style =
          "transform": "translate(#{@props.position.x}px, #{@props.position.y}px) scale(#{@props.position.scale})"

        <div className='paper-container' style={style}>
        {@props.children}
        </div>

SVGToucher = React.createClass
  displayName: 'SVGToucher'
  render: ->
    <div className='svg-toucher'
      draggable
      onDragStart={@drag_start} 
      onMouseMove={@drag_move} 
      onMouseUp={@drag_end} 
      onWheel={@do_scale}
    >
      <SVGToucher.PointsArea ref='area' template={@props.template} toucher={@} />
    </div>

  drag_start: (evt)->
    evt.preventDefault()
    @origin_x = @refs.area.state.x
    @origin_y = @refs.area.state.y
    @mouse_start_x = evt.pageX
    @mouse_start_y = evt.pageY
    @on_drag = true

  drag_move: (evt)->
    if @on_drag
      delta_x = evt.pageX - @mouse_start_x
      delta_y = evt.pageY - @mouse_start_y

      @refs.area.setState
        x: @origin_x + delta_x
        y: @origin_y + delta_y

  drag_end: (evt)->
    @on_drag = false #if @on_drag

  do_scale: (evt)->
    $toucher = jQuery ReactDOM.findDOMNode @
    offset = $toucher.offset()
    px = evt.pageX - offset.left
    py = evt.pageY - offset.top

    # console.log px, py, @refs.area.state.x, @refs.area.state.y
    cx = (px - @refs.area.state.x) / @refs.area.state.scale
    cy = (py - @refs.area.state.y) / @refs.area.state.scale

    @refs.area.compute_scale(evt.deltaY, cx, cy)
    # @refs.area.compute_scale(evt.deltaY, 0, 0)

  statics:
    PointsArea: React.createClass
      getInitialState: ->
        origin_width: 596
        origin_height: 842
        x: 0
        y: 0
        scale: 1.0

      render: ->
        width = @state.origin_width * @state.scale
        height = @state.origin_height * @state.scale

        style =
          'width': "#{width}px"
          'height': "#{height}px"
          'left': "#{@state.x}px"
          'top': "#{@state.y}px"

        points = [
          {x: 100, y: 100}
          {x: 200, y: 200}
          {x: 100, y: 140}
        ]

        <div className='points-area' style={style}>
          <SVGToucher.SVG name={@props.template} width={@state.origin_width} height={@state.origin_height} scale={@state.scale} />
          {
            for pdata, idx in points
              <SVGToucher.Point key={idx} data={pdata} scale={@state.scale} />
          }
        </div>

      componentDidMount: ->
        @aim_to_center()

      aim_to_center: ->
        $toucher = jQuery ReactDOM.findDOMNode @props.toucher
        tw = $toucher.width()
        th = $toucher.height()

        @setState
          x: (tw - @state.origin_width) / 2
          y: (th - @state.origin_height) / 2

      compute_scale: (dir, center_x, center_y)->
        i = 1.1

        if dir > 0
          # 缩小
          old_scale = @state.scale
          new_scale = @state.scale / i

          @setState 
            scale: new_scale
            x: @state.x - center_x * (new_scale - old_scale)
            y: @state.y - center_y * (new_scale - old_scale)

        if dir < 0
          # 放大
          old_scale = @state.scale
          new_scale = @state.scale * i

          @setState 
            scale: new_scale
            x: @state.x - center_x * (new_scale - old_scale)
            y: @state.y - center_y * (new_scale - old_scale)

    SVG: React.createClass
      render: ->
        src = "../svg/#{@props.name}.svg"
        style = 
          'transform': "scale(#{@props.scale})"
          'transformOrigin': '0 0'
        <img src={src} width={@props.width} height={@props.height} style={style} />

    Point: React.createClass
      render: ->
        left = @props.data.x * @props.scale
        top = @props.data.y * @props.scale
        style = 
          # 'transform': "translate(#{left}px, #{top}px)"
          'left': "#{left}px"
          'top': "#{top}px"
        <div className='point' style={style}></div>


@DiagnosisPage = React.createClass
  render: ->
    <div className='diagnosis-page'>
      <DiagnosisPage.Paper />
      <DiagnosisPage.Sidebar />
    </div>

  statics:
    Sidebar: React.createClass
      render: ->
        <div className='page-sidebar'>
          <DiagnosisPage.Logo />
        </div>

    Logo: React.createClass
      render: ->
        <div className='title-logo'>
          <div className='yw' />
          <div className='img' />
          <div className='yz' />
        </div>

    Paper: React.createClass
      render: ->
        <div className='page-paper'>
          <SVGToucher template='test' />
        </div>