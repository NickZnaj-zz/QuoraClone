var React = require('react'),
    defaultColors = [
      'rgb(  0,   0,   0)', 'rgb(230,   0,   0)', 'rgb(255, 153,   0)',
      'rgb(255, 255,   0)', 'rgb(  0, 138,   0)', 'rgb(  0, 102, 204)',
      'rgb(153,  51, 255)', 'rgb(255, 255, 255)', 'rgb(250, 204, 204)',
      'rgb(255, 235, 204)', 'rgb(255, 255, 204)', 'rgb(204, 232, 204)',
      'rgb(204, 224, 245)', 'rgb(235, 214, 255)', 'rgb(187, 187, 187)',
      'rgb(240, 102, 102)', 'rgb(255, 194, 102)', 'rgb(255, 255, 102)',
      'rgb(102, 185, 102)', 'rgb(102, 163, 224)', 'rgb(194, 133, 255)',
      'rgb(136, 136, 136)', 'rgb(161,   0,   0)', 'rgb(178, 107,   0)',
      'rgb(178, 178,   0)', 'rgb(  0,  97,   0)', 'rgb(  0,  71, 178)',
      'rgb(107,  36, 178)', 'rgb( 68,  68,  68)', 'rgb( 92,   0,   0)',
      'rgb(102,  61,   0)', 'rgb(102, 102,   0)', 'rgb(  0,  55,   0)',
      'rgb(  0,  41, 102)', 'rgb( 61,  20,  10)',
    ];

var AnswerToolbar = React.createClass({
  render: function() {

    return (
      <div id="toolbar" className="ql-toolbar-container toolbar">
        <span className="ql-format-separator"></span>
        <select
          className="ql-font"
          data-reactid='2'>
          <option value="sans-serif">Sans Serif</option>
          <option value="serif">Serif</option>
          <option value="monospace">Monospace</option>
        </select>
        <span className="ql-format-separator"></span>
        <select
          defaultValue='13px'
          className="ql-size"
          data-reactid='3'>
          <option value="10px">Small</option>
          <option value="13px">Normal</option>
          <option value="18px">Large</option>
          <option value="32px">Huge</option>
        </select>
        <span className="ql-format-separator"></span>
        <span className="ql-bold ql-format-button"></span>
        <span className="ql-italic ql-format-button"></span>
        <span className="ql-strike ql-format-button"></span>
        <span className="ql-underline ql-format-button"></span>
        <span className="ql-format-separator"></span>
        <select
          className="ql-background ql-format-button"
          data-reactid='c'>
          {defaultColors.map(function (color, key) {
            return (<option key={key} value={color} />);
          })}
        </select>
        <span className="ql-format-separator"></span>
        <select
          className="ql-color ql-format-button"
          data-reactid='e'>
          {defaultColors.map(function (color, key) {
            return (<option key={key} value={color} />);
          })}
        </select>
        <span className="ql-format-separator"></span>
        <span className="ql-bullet ql-format-button"/>
        <span className="ql-list ql-format-button"/>
        <span className="ql-format-separator"></span>
          <select
            className="ql-align ql-format-button"
            data-reactid='f'>
            <option value='left'></option>
            <option value='center'></option>
            <option value='right'></option>
            <option value='justify'></option>
          </select>
      </div>
    );
  },
});

module.exports = AnswerToolbar;
