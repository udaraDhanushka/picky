import {Text, StyleSheet, Animated, View, Image} from 'react-native';
import {useEffect, useRef} from "react";
import {COLORS} from "@/constants/ColorPallet";
import appJson from '../../../app.json';

export default function SplashScreen({onFinish}:any){
    const logo = require('../../../assets/images/logo/picky1.png');
    const progress = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.timing(progress,{
            toValue:100,
            duration:5000,
            useNativeDriver:false
        }).start(()=>{
            onFinish();
        });
    }, [onFinish]);
    return(
        <View style={styles.container}>
            <View style={styles.logoWrapper}>
                <Image
                    style={styles.logo}
                    source={logo}
                    resizeMode={'contain'}/>
            </View>
            <Text style={styles.tagLine}> Swipe. Buy. Smile.</Text>
            <View style={styles.progressContainer}>
                <Animated.View
                    style={[styles.progressbar,
                        {width:progress.interpolate({inputRange:[0,100], outputRange:['0%','100%']})}]}
                />
            </View>
            <View style={styles.bottom}>
                <Text>Version : {appJson.expo.version}</Text>
                <Text>From : Neurazync</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    logoWrapper:{
        // borderWidth:1
    },
    logo:{
        height:80
    },
    tagLine:{
        // color:COLORS.textColor,
        fontSize:18
    },
    progressContainer:{
        width:'50%',
        height:5,
        backgroundColor:COLORS.darkGray,
        overflow:'hidden',
        borderRadius:5,
        marginTop:15
    },
    progressbar:{
        backgroundColor:COLORS.primaryBlue,
        borderRadius:5,
        height:'100%'
    },
    bottom:{
        color:COLORS.textColor,
        width:'100%',
        height:40,
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        padding:10,
        justifyContent:'space-between'
    }
})