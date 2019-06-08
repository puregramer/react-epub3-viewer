/***
 * file name : PPaper/index.js
 * description : PPaper component
 * create date : 2019-01-09
 * creator : saltgamer
 ***/

import React, {Component, Fragment} from 'react';
import {
    $CurrentPage,
    $Epub, $PreloadCount,
    $Resize, $ShowingPageInDOM,
    setCurrentLoading,
    setEpub,
    setFlip,
    setResize,
    setCurrentPage,
    setDebugLog
} from '../Globals';
import Epub from '../Epub';
import Flip from '../Flip';
import Loading from '../components/Loading/enchanter';
import PageSeparator from '../components/PageSeparator/enchanter';
import Resize from '../Resize';
import {initGetParameter, preloadingPageData} from '../Engine';
import {getURLParameter} from '../Utility';
import {$DebugMode} from "../config";

export default class PPaper extends Component {
    constructor(props) {
        super(props);

        this.resizeTimer = null;

        this.state = {
            epubLoaded: false
        };

        this.renderRouter = () => {
            return (
                (this.state.epubLoaded ? <PageSeparator/> : '')
            );
        };

    }

    componentWillMount() {
        console.log('~> PPaper will mount!');

        initGetParameter();
        setEpub(new Epub(() => {
            const page = getURLParameter('page');
            if (page) {
                if (page > $Epub.totalPage) {
                    alert('[!] page is not found!');
                    setCurrentPage(1);
                } else {
                    setCurrentPage(parseInt(page, 10));
                    this.props.changePage();
                }

            } else {
                setCurrentPage(1);
            }
        }));

        setFlip(new Flip());
        setResize(new Resize());


        $Epub.loadContainerXmlObject()
            .then(() => {
                $Epub.loadContentOpf()
                    .then(() => {

                        console.log('~> $Epub: ', $Epub);

                        this.setState({epubLoaded: true});

                        preloadingPageData([$CurrentPage + $ShowingPageInDOM, $CurrentPage + $ShowingPageInDOM + $PreloadCount], () => {
                            setTimeout(() => {

                                setCurrentLoading(false);
                                this.props.changeLoading();
                                console.log(this.props);
                            }, 500);
                        });

                    });
            });


    }

    componentDidMount() {
        console.log('~> PPaper Did mount!');
        console.log('~> ', this.props);

        window.addEventListener('resize', this.resize.bind(this));
        window.addEventListener('orientationchange', this.resize.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize.bind(this));
        window.removeEventListener('orientationchange', this.resize.bind(this));
    }

    shouldComponentUpdate(nextProps) {
        /* console.log('[render nextProps] ', nextProps);
         console.log('[render this.props] ', this.props);*/
        return nextProps.currentLoading !== this.props.currentLoading;
    }

    resize() {
        this.resizeTimer = setTimeout(() => {
            clearTimeout(this.resizeTimer);
            $Resize.excute();
        });
    }

    render() {
        console.log('[render PPaper]', this.props);
        return (
            <Fragment>
                {this.renderRouter()}

                <Loading/>
                {$DebugMode ? <div className="debugLog" ref={dLog => setDebugLog(dLog)}/> : ''}

            </Fragment>
        );
    }

}