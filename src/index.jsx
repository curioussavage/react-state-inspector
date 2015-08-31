var React = require('react');
var JSONTree = require('react-json-tree');


var styles = {
  container: {
    backgroundColor: 'white',
    padding: '10px',
    maxHeight: '300px',
    overflow: 'scroll'
  }
};

var Debugger = React.createClass({

	propTypes: {
		updateParentState: React.PropTypes.func,
		state: React.PropTypes.object.isRequired
	},

  getInitialState: function() {
    return {
      pastStates: [],
      sliderVal: 1,
      isDragging: false
    };
  },
  
  componentDidMount: function() {
    var states = this.state.pastStates;
    states.push(this.props.state);

    this.setState({
      sliderVal: states.length, 
      pastStates: states,
    });

  },
  
  componentWillReceiveProps: function(nextProps) {
    if (this.state.isDragging) {
      return;
    }
      
    var states = this.state.pastStates;

    states.push(this.props.state);
    this.setState({
      sliderVal: states.length - 1, 
      pastStates: states,
    });
  },
  
  handleSliderChange: function() {
   var val = this.refs.slider.getDOMNode().value;
   
   if (this.props.updateParentState) {
   	var newState = this.state.pastStates[val];
	  this.props.updateParentState(newState);
   }

    this.setState({
      sliderVal: val,
      isDragging: true
    });
  },
  
  handleCheckbox: function() {
    var isDragging = this.state.isDragging;
    if (isDragging) {
    	var pastStates = this.state.pastStates;
	   	var newState = pastStates[pastStates.length - 1];
      if (this.props.updateParentState) {
        this.props.updateParentState(newState);  
      }
		  
    }

    this.setState({isDragging: !isDragging});
  },

  render: function() {
    var pastStates = this.state.pastStates;
    var sliderVal = this.state.sliderVal;
    var isDragging = this.state.isDragging;
    var max = (pastStates.length - 1);
    var min = pastStates.length ? 0 : -1;
    var sliderPosition = isDragging ? sliderVal : (pastStates.length - 1);
    var preval = isDragging ? pastStates[sliderVal] : this.props.state;

    return (
      <div style={ styles.container }>
      <label>
        rewind mode {' '}
        <input
          type="checkbox"
          checked={ isDragging }
          onChange={ this.handleCheckbox }
        />
      </label><br/>
        <input 
          type="range"
          min={ min }
          max={ max }
          ref="slider"
          value={ sliderPosition }
          onChange={ this.handleSliderChange }
        />
        <JSONTree data={preval} />        
      </div>
    )
  }
});

module.exports = Debugger;