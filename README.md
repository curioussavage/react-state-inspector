# react-state-inspector
A simple component to examine changes to state


example usage:

```javascript
var React = require('react');
var StateInspector = require('react-state-inspector');

var MyComponent = React.createClass({
getInitialState: function () {
  return {
    stateVal: '',
    secondVal: []
  }
},

updateState: function(state) {
  this.setState(state);
},

render: function() {
  return (
    <div>
      <StateInspector state={ this.state } updateParentState={this.updateState} />
    </div>
  )
}
...
```

## Accepted props: 

`state` and optionally `updateParentState` which is a method to simply replace the parents state with past states which are saved in an array.

Has limited use cases but thats about as easy as it gets. Mostly an experiment to help me wrap my mind around the possiblitiess of React and one way data flow/flux.

Thank you to Ryan florence and Michael Jackson for inspiration!
