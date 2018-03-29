import React, { Component } from 'react';
import {
    View,
    Image,
    Animated,
    PanResponder, Dimensions,
} from 'react-native';
let {width,height} = Dimensions.get('window');
import styles from './index_css';
export default class ItemAnimated extends Component{
    constructor(props){
        super(props);
        this.statics={
            title:'PanResponder Sample',
            description:'Shows the usr of'
        };
        this.state={
            animateHeight:new Animated.Value(0)
        }
        this._panResponder={};
        this._previousHeight=0;
        this._circleStyles={};
        this.show=false;
    }
    componentWillMount(){
        this._panResponder=PanResponder.create({
            onStartShouldSetPanResponder:(evt, gestureState) => true,
            onMoveShouldSetPanResponder:(evt, gestureState) => true,
            onPanResponderGrant:this._handlePanResponderGrant,
            onPanResponderMove: this._handlePanResponderMove,
            onPanResponderRelease: this._handlePanResponderEnd,
            onPanResponderTerminate: this._handlePanResponderEnd,
        });
        this._previousHeight=0;
        this._circleStyles={
            style:{
                height:this._previousHeight,
                backgroundColor:'green'
            }
        }
        void(function(){
            console.log('aaaaaa');
        })
    }
    componentDidMount(){
        this._updateNativeStyles();

    }
    render(){
        return (
            <View
                style={styles.container}
                {...this._panResponder.panHandlers}
            >
                <View
                    ref={(circle)=>{
                        this.circle=circle;
                    }}
                    style={styles.circle}
                >
                    <Image
                        source={{uri:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516770193724&di=e459de30bff20795846fd1dc624c428c&imgtype=0&src=http%3A%2F%2Fimg.25pp.com%2Fuploadfile%2Fapp%2Ficon%2F20160505%2F1462424979928721.jpg"}}
                        style = {{width:200,height:200,borderRadius:100,resizeMode:'cover'}}
                    />
                </View>
            </View>
        );
    }
    _updateNativeStyles(){
        this.circle && this.circle.setNativeProps(this._circleStyles)
    }
    _handlePanResponderMove=(evt, gestureState)=>{
        if(this.show && gestureState.dy < 0 || !this.show && gestureState.dy > 0){
            this._circleStyles.style.height = this._previousHeight + gestureState.dy;
            this._updateNativeStyles();
        }
    };
    _handlePanResponderGrant=(evt, gestureState)=>{
        this._highlight();
    };
    _handlePanResponderEnd=(evt, gestureState)=>{
        this._unHighlight();
        if(gestureState.dy<=-50 && this.show){
            this._circleStyles.style.height=0;
            this.show=false;
            this._updateNativeStyles();
        }else if(gestureState.dy >=50 && !this.show){
            this._circleStyles.style.height=height;
            this.show=true;
            this._updateNativeStyles();
        }else{
            this._circleStyles.style.height=this.show?height:0;
            this._updateNativeStyles();
        }
        this._previousHeight=this._circleStyles.style.height;
    };
    _highlight(){
        this._circleStyles.style.backgroundColor='rgba(0, 0, 0, 0.3)';
        this._updateNativeStyles();
    }
    _unHighlight(){
        this._circleStyles.style.backgroundColor = 'transparent';
        this._updateNativeStyles();
    }
}