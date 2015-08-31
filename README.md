# react-state-inspector
A simple component to examine changes to state


example usage:

```javascript
var React = require('react');
var Debugger = require('react-state-inspector');

var MyComponent = React.createClass({
getInitialState: function () {
  return {
    stateVal: '',
    secondVal: []
  }
},

render: function() {
  return (
    <div>
      <Debugger state={ this.state }  />
    </div>
  )
}
...
```

Has limited use cases but thats about as easy as it gets. Mostly an experiment to help me wrap my mind around the possiblitiess of React and one way data flow/flux.
