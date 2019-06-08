/***
 * file name : Arrows/index.js
 * description : Arrows component
 * create date : 2019-02-13
 * creator : saltgamer
 ***/

import React, {Component, Fragment} from 'react';
import {
    $CurrentMode,
    $CurrentPage,
    $ArrowScaleFactor,
    $Epub,
    $Flip,
    $NextArrow,
    $PrevArrow,
    setCurrentPage,
    setNextArrow,
    setPrevArrow,
    $ShowingPageInDOM,
    $PreloadCount
} from '../../Globals';
import {
    _view,
    preloadingPageData, removePageString,
    setDisplayArrows,
    viewPage
} from '../../Engine';

import '../../../style/Arrows.css';

export default class Arrows extends Component {
    constructor(props) {
        super(props);

        this.arrowPrevEvent = (e) => {
            // console.log('~~> arrowPrevEvent!');

            $PrevArrow.classList.remove('enable');
            $PrevArrow.classList.add('disable');

            $NextArrow.classList.remove('enable');
            $NextArrow.classList.add('disable');

            $Flip.pageFlipPrev(() => {
                const page = _view($CurrentPage).shift() - 1;
                setCurrentPage(page);
                this.props.changePage();

                removePageString(page);
            });

        };

        this.arrowNextEvent = (e) => {
            // console.log('~~> arrowNextEvent!');

            $NextArrow.classList.remove('enable');
            $NextArrow.classList.add('disable');

            $PrevArrow.classList.remove('enable');
            $PrevArrow.classList.add('disable');

            $Flip.pageFlipNext(() => {
                const page = _view($CurrentPage).pop() + 1;
                setCurrentPage(page);
                this.props.changePage();

                removePageString(page);
            });

            preloadingPageData([$CurrentPage + $ShowingPageInDOM, $CurrentPage + $ShowingPageInDOM + $PreloadCount]);


        };
    }

    componentWillMount() {
    }

    componentDidMount() {
        console.log('~> Arrows: ', this.props);

    }

    componentWillUnmount() {
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.currentPage !== this.props.currentPage) {
            setDisplayArrows();
        }

    }

    shouldComponentUpdate(nextProps) {
        return nextProps.currentPage !== this.props.currentPage;
    }

    render() {
        console.log('[render arrows]');
        const {
            currentPage
        } = this.props;

        const arrowSize = window.innerWidth / $ArrowScaleFactor,
            view = viewPage(currentPage);

        console.log('**~~~~~~~~> ');
        console.log('* currentPage: ', currentPage);
        console.log('* $Epub.totalPage: ', $Epub.totalPage);
        console.log('**~~~~~~~~> ');

        return (
            <Fragment>
                <div className={`arrowButton arrowPrev ` + (currentPage === 1 || (currentPage === 2
                    && $CurrentMode === 'double') ? 'disable' : 'disable')}
                     style={{
                         width: arrowSize, height: arrowSize, backgroundSize: arrowSize + 'px ' + arrowSize + 'px',
                         marginTop: -arrowSize / 2
                     }}
                     onClick={this.arrowPrevEvent}
                     ref={arrow => setPrevArrow(arrow)}
                />
                <div className={`arrowButton arrowNext ` + (view[0] === $Epub.totalPage ||
                view[1] === $Epub.totalPage ? 'disable' : 'disable')}
                     style={{
                         width: arrowSize, height: arrowSize, backgroundSize: arrowSize + 'px ' + arrowSize + 'px',
                         marginTop: -arrowSize / 2
                     }}
                     onClick={this.arrowNextEvent}
                     ref={arrow => setNextArrow(arrow)}
                />
            </Fragment>

        );

    }
}
