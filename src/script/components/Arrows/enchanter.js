/***
 * file name : Arrows/enchanter.js
 * description : Arrows enchanter
 * create date : 2019-02-13
 * creator : saltgamer
 ***/

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators as Actions} from "../../reducer";
import Arrows from './index';

function mapStateToProps(state) {
    const {
        currentPage
    } = state;
    return {
        currentPage
    };
}

function mapDispatchToProps(dispatch) {
    return {
        changePage: bindActionCreators(Actions.changePage, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Arrows);