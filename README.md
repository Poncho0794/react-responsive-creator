
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>react-responsive-creator</title>
  <link rel="stylesheet" href="https://stackedit.io/style.css" />
</head>

<body class="stackedit">
  <div class="stackedit__html"><h1 id="react-responsive-creator">react-responsive-creator</h1>
<p>react-responsive-creator is a High order component, that recives the parent component and uses it as a container, the Desktop version and the Mobile version, it helps when the mobile and the desktop version are totally diferent and you need 2 differents components.</p>
<p><strong>NOTE:</strong> the breakpoint is <em>1024px</em></p>
<h1 id="getting-starter">Getting starter</h1>
<h2 id="install">Install</h2>
<pre><code>npm install react-responsive-creator
</code></pre>
<p>or</p>
<pre><code>yarn add react-responsive-creator
</code></pre>
<h2 id="usage">Usage</h2>
<p>You need the container component like this (in this example, we are going to use redux):</p>
<pre><code>import React, { Component } from 'react' //eslint-disable-line
import TestDesktop from './TestDesktop'
import TestMobile from './TestMobile'
import {withResponsive} from 'react-responsive-creator'
import { connect } from 'react-redux'
import {testAction} from '../../actions/TestAction'

class Test extends Component {
	constructor(props){
		super(props)
		this.onSearch = this.onSearch.bind(this);
		console.log(this);
	}

	onSearch(test) {
		console.log(test);
	}

	render(){
    	/*This is important to show the 2 versions of the component */
		return &lt;div&gt;{this.props.children}&lt;/div&gt;
	}
}

const mapState = state =&gt; ({
	test:state.test
})

const mapDisptach = (dispatch) =&gt; ({
	testAction: userAgent =&gt; {dispatch(testAction(userAgent))}
})

export default connect(mapState,mapDisptach)(withResponsive(Test,TestDesktop,TestMobile))
</code></pre>
<p>And the <code>TestDesktop.js</code> looks like:</p>
<pre><code>import React, { Component } from 'react'; //eslint-disable-line

class TestDesktop  extends Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.testAction(window.navigator.userAgent);//eslint-disable-line
  }
  render(){
    return (
      &lt;div&gt;
        &lt;span&gt;Desktop&lt;/span&gt;
        &lt;button onClick={this.handleClick}&gt;Test&lt;/button&gt;
      &lt;/div&gt;
    );
  }
}
export default TestDesktop;
</code></pre>
<p>And the <code>TestMobile.js</code> looks like:</p>
<pre><code>import React, { Component } from 'react' //eslint-disable-line

class TestMobile  extends Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
 	 this.props.testAction(window.navigator.userAgent);//eslint-disable-line
 	}
  render(){
    return (
      &lt;div&gt;
        &lt;span&gt;Mobile&lt;/span&gt;
        &lt;button onClick={this.handleClick}&gt;Test&lt;/button&gt;
        &lt;span&gt;REDUX: {JSON.stringify(this.props.test)}&lt;/span&gt;
      &lt;/div&gt;
    );
  }
}
export default TestMobile;
</code></pre>
<p>Reducer and Action looks like:</p>
<pre><code>export const testAction = userAgent =&gt; ({
  type: 'TEST',
  payload:userAgent
});

const test = (state = 0, action) =&gt; {
  switch (action.type) {
    case 'TEST':
      return action;
    default:
      return state;
  }
};

export default test;
</code></pre>
<h2 id="props">Props</h2>

<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>ParentComponent</td>
<td>The container that will be listening the window’s size changes and wher you can manage the redux conection</td>
</tr>
<tr>
<td>DesktopComponent</td>
<td>The desktop version of the component</td>
</tr>
<tr>
<td>MobileComponent</td>
<td>The Mobile version of the component</td>
</tr>
</tbody>
</table><h2 id="to-do">To Do</h2>
<ul>
<li>Add test</li>
<li>Pass extra methods to the children</li>
</ul>
</div>
</body>

</html>
react-responsive-creator
Mostrando react-responsive-creator
