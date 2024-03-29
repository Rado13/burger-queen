import React, { Component } from 'react';

import styles from './Modal.module.css';

import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps.show !== this.props.show;
    }
// tymto sledujem tu a v ordersummary.js
    componentDidUpdate () {
        console.log('[Modal] DidUpdate');
    }


    render () {
        return (
    <>
    <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
    <div className={styles.Modal}
    style={{
        trasnform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: this.props.show ? '1' : '0'
        }} >
        {this.props.children}
    </div>
    </>
        )
    }   
}

export default Modal;