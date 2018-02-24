
# react-responsive-creator

react-responsive-creator is a High order component, that recives the parent component and uses it as a container, the Desktop version and the Mobile version, it helps when the mobile and the desktop version are totally diferent and you need 2 differents components.

**NOTE:** the breakpoint is *1024px*

# Getting starter

## Install

    npm install react-responsive-creator
or

    yarn add react-responsive-creator

## Usage

You need the container component like this (in this example, we are going to use redux):
 ```javascript
 import React, { Component } from 'react'
import TestDesktop from './TestDesktop'
import TestMobile from './TestMobile'
import {withResponsive} from 'react-responsive-creator'
import { connect } from 'react-redux'
import {testAction} from '../../actions/TestAction'

class Test extends Component {
	constructor(props){
		super(props)
	}

	render(){
		return <div>{this.props.children}</div>
	}
}

const mapState = state => ({
	test:state.test
})

const mapDisptach = (dispatch) => ({
	testAction: userAgent => {dispatch(testAction(userAgent))}
})

export default connect(mapState,mapDisptach)(withResponsive(Test,TestDesktop,TestMobile))
```

And the `TestDesktop.js` looks like:
```javascript
    import React, { Component } from 'react'; //eslint-disable-line

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
          <div>
            <span>Desktop</span>
            <button onClick={this.handleClick}>Test</button>
          </div>
        );
      }
    }
    export default TestDesktop;
```
And the `TestMobile.js` looks like:
```javascript
   import React, { Component } from 'react'

    class TestMobile  extends Component{
      constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
      }
      handleClick(){
     	 this.props.testAction(window.navigator.userAgent);
     	}
      render(){
        return (
          <div>
            <span>Mobile</span>
            <button onClick={this.handleClick}>Test</button>
            <span>REDUX: {JSON.stringify(this.props.test)}</span>
          </div>
        );
      }
    }
    export default TestMobile;
```
Reducer and Action looks like:
```javascript
    export const testAction = userAgent => ({
      type: 'TEST',
      payload:userAgent
    });

    const test = (state = 0, action) => {
      switch (action.type) {
        case 'TEST':
          return action;
        default:
          return state;
      }
    };

    export default test;
```
## Props

|Name| Description |
|--|--|
| ParentComponent | The container that will be listening the window's size changes and wher you can manage the redux conection |
|DesktopComponent| The desktop version of the component |
| MobileComponent | The Mobile version of the component |



## To Do

 - Add test
 - Pass extra methods to the children
