import React, { Component } from "react";
import "babel-polyfill";

export default (loadComponent, placeholder="loading") => {
    return class AsyncComponent extends Component {
        constructor () {
            super();
            this.unmount = false;
            this.state = {
                Child: null
            }
        }

        async componentDidMount() {
            const { default: Child } = await loadComponent();
            if (this.unmount) return;
            this.setState({
                Child: Child
            })
        }

        componentWillUnmount() {
            this.unmount = true;
        }

        render () {
            const { Child } = this.state;
            if (Child) {
                return (
                    <Child {...this.props}></Child>
                )
            } else {
                return placeholder
            }
        }
    }
}