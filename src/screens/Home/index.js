import React, {useEffect, useState} from 'react';
import {
    FlatList,
    Image, RefreshControl,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    View,
} from 'react-native';
import {ImageUrlConstants} from '../../assets/url/imageUrl';
import styles from './style';
import {ERROR, LOADING, SUCCESS} from "../../redux/constants/reduxConstant";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loader from "../../components/loader";
import {connect} from "react-redux";
import Footer from "../../components/footer";
import {useIsFocused} from "@react-navigation/native";


const Home = (props) => {

    const {width} = useWindowDimensions();
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState({});
    const [refreshing, setRefreshing] = useState(false);
    const [userId, setUserId] = useState(false);

    const isFocused = useIsFocused();
    useEffect(() => {
        (async () => {
            let user = await AsyncStorage.getItem('user');
            let myUser = JSON.parse(user);
            setUserId(myUser.id);
        })();
    }, []);


    useEffect(()=>{
        const userDetailsPath = props.HomeRes.userDetailsR;

        if(userDetailsPath.status===LOADING){
            setLoading(true);
        }else if(userDetailsPath.status===SUCCESS){
            console.log("sss",userDetailsPath)
            setUserData(userDetailsPath.value.data.data);
            setLoading(false);
        }else if(userDetailsPath.status===ERROR){
            console.log("error",userDetailsPath)
            setLoading(false);
        }
    },[props.HomeRes]);



    const onRefresh = () => {
        setRefreshing(true);
    };



    const handleTab=(tabValue)=>{
        if(tabValue==="MyStreeks"){
            props.navigation.navigate('MyStreeks');
        }else if(tabValue==="RecentHistory"){
            props.navigation.navigate('RecentHistory')
        }else if(tabValue==="UpcomingStreek"){
            props.navigation.navigate('UpcomingStreek')
        }
        console.log("tabValue",tabValue)
    }

    return (
        <SafeAreaView style={styles.bg}>
            <StatusBar backgroundColor={"white"} barStyle="dark-content" hidden={false}/>
            <Loader loading={loading}/>
            <View style={styles.homeHeader}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
                    <View style={styles.headerLeft}>
                        {userData && userData.image ? <Image
                            source={{uri:userData && userData.image && userData.image}}
                            style={styles.profileImage}
                        />:
                            <Image
                                source={ImageUrlConstants.dummyProfile1}
                                style={styles.profileImage}
                            />
                        }

                        <View style={styles.profileDes}>
                            <Text style={styles.profileTitle}>Hello</Text>
                            <Text
                                ellipsizeMode='tail'
                                numberOfLines={1}
                                style={styles.profileTitle}>{"Adom"}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{flex: 1,
                justifyContent: 'flex-end'}}>
                <Footer name="home" tabClick={(value)=>handleTab(value)}/>
            </View>


        </SafeAreaView>
    );
};
const mapStateToProps = (state /*, ownProps*/) => {
    return {
        HomeRes: state,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        defaultRequest: () => {

        },
        userDetailsRequest: (user_id) => {

        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
