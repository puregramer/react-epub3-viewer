/***
 * file name : Loading/index.js
 * description : Loading component
 * create date : 2019-01-09
 * creator : saltgamer
 ***/

import React, {Component} from 'react';

import '../../../style/Loading.css';

export default class Loading extends Component {
    componentDidMount() {
        /*   console.log(this.props.isLoading);
           setTimeout(() => {
               this.props.hideLoading();
               console.log(this.props.isLoading);
           }, 2000);*/

        console.log('~> loading: ', this.props);
    }

    render() {
        const {
            currentLoading

        } = this.props;

        const loadingBars = [1, 2, 3, 4, 5].map((num) =>
            <div className={`loadingIconBar barIcon` + num} key={num}/>);

        return (
            currentLoading && (
                <div className="loadingContainer">
                    <div className="loadingBarBox">
                        {loadingBars}
                    </div>
                </div>
            )
        );
    }
}
