import {
    Dimensions
} from 'react-native';
let {width, height}=Dimensions.get('window');
export default {
    container:{
        flex: 1,
        backgroundColor:'pink',
        alignItems:'stretch',
        flexDirection:'column',
        elevation:1,
    },
    circle:{
        justifyContent:'center',
        width:width,
        height:height,
        position:'absolute',
        top:0,
        left:0,
        elevation:10,
        alignItems:'center',
    }
}