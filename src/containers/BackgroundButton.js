import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

export default class BackgroundButton extends Component {
    render() {
        return (
            <div>
                <div>
                <a href="generator"><Button variant="success">Background generator</Button></a>
                </div>
            </div>
        )
    }
}
