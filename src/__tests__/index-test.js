
var React = require('react/addons');
var Simultate = React.addons.TestUtils.Simulate;
var click = Simulate.click;
require('node-jsx').install();

var Debugger = require('../index.jsx');
var assert = require('assert');
// add node jsx lib


describe('when <Tabs> is rendered', function () {
  var fixtureData = {
  	
  }

  var node, html, tabs, panel, borderFixture;
  beforeEach(function (done) {
    var component = React.render(<Tabs data={fixtureData}/>, document.body, function () {
      node = React.findDOMNode(this);
      html = node.innerHTML;
      tabs = node.querySelectorAll('.Tab');
      panel = node.querySelector('.TabPanel');

      borderFixture = document.createElement('div');
      borderFixture.setAttribute('style', 'border-bottom-color: #000;');

      done();
    });
  });

  afterEach(function () {
    React.unmountComponentAtNode(document.body);
  });

  it('renders the USA tab', function () {
    assert(!!html.match(/USA/), 'USA tab was not rendered');
  });


