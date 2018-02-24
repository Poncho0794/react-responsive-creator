import React , { Component } from 'react'; //eslint-disable-line

export default (ParentComponent, DesktopComponent, MobileComponent, extraMethods={})=>{
  return class ResponsiveComponent extends Component {
    constructor(props) {
      super(props);
      const mobile = (window.navigator.userAgent.indexOf('Android') >= 0)
											|| (window.navigator.userAgent.indexOf('IPhone') >= 0)
											|| (window.navigator.userAgent.indexOf('IPad') >= 0);
      this.state={
        width: window.innerWidth,
        mobile:mobile
      };
      this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount() {
      window.addEventListener('resize', this.updateDimensions);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.updateDimensions);
    }

    updateDimensions() {
      const mobile = (window.navigator.userAgent.indexOf('Android') >= 0)
											|| (window.navigator.userAgent.indexOf('IPhone') >= 0)
											|| (window.navigator.userAgent.indexOf('IPad') >= 0);
      this.setState ({
        width: window.innerWidth,
        mobile:mobile
      });
    }

    render(){
      return (
        <ParentComponent>
          {(this.state.width < 1024 || this.state.mobile) ?
            <MobileComponent
              {...this.props}
              {...ParentComponent}
            />:
            <DesktopComponent
              {...this.props}
              {...ParentComponent}
            />
          }
        </ParentComponent>
      );
    }
  };
};
