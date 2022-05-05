import {Dimensions, StyleSheet} from 'react-native';
import {font} from '../../assets/url/fontSizes';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: '#F8F9FB',
    },
    homeScrollView: {
        flex: 1,
        padding: 15,
        paddingBottom:0,
        //marginBottom: 40,
        justifyContent:'center',
        alignItems: 'center',
    },
    homeHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#fff',
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 35,
        height: 35,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#7DC23B',
    },
    profileDes: {
        paddingLeft: 10,
    },

    profileTitle: {
        fontSize: 12,
        color: '#1B1E25',
        fontFamily: font.RobotoMedium,
        width:180
    },
    profileKey: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    keyIcon: {
        width: 6,
        height: 11,
    },
    keyPrice: {
        fontSize: 12,
        color: '#7DC23B',
        paddingLeft: 5,
        fontFamily: font.RobotoBold,
        marginLeft:10,
    },
    headerRight: {
        flexDirection: 'row',
    },
    dolorBtn: {
        marginRight: 10,
    },
    dolor: {
        width: 23,
        height: 28,
    },
    notificationIcon: {
        width: 28,
        height: 28,
    },

    upcomingList: {
        padding: 15,
    },
    streeksBox: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        width: windowWidth / 1.08,
    },
    streeksBoxLeft: {
        width: 80,
    },
    streeksBoxTopBg: {
        flexDirection: 'row',
    },
    streeksImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
        resizeMode: 'cover',
    },
    streeksBoxRight: {
        flex: 1,
        paddingLeft: 15,
    },
    streeksBoxTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    streeksBoxTopLeft: {
        flex: 1,
        paddingRight: 10,
    },
    id: {
        fontSize: 12,
        color: '#878787',
    },
    title: {
        fontSize: 15,
        color: '#101010',
        fontFamily: font.RobotoBold,
    },
    registeredBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    registered: {
        fontSize: 12,
        color: '#878787',
    },
    groupUser: {
        width: 14,
        height: 8,
        marginRight: 5,
    },
    price: {
        fontSize: 14,
        color: '#55A20B',
        textAlign: 'right',
        fontFamily: font.RobotoBold,
    },
    paidText: {
        backgroundColor: '#ECECEC',
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 25,
        textAlign: 'center',
        fontSize: 8,
        marginTop: 5,
        color: '#878787',
    },
    streeksP: {
        fontSize: 12,
        color: '#878787',
    },
    viewDetailBtn: {
        marginTop: 5,
    },
    viewDetailBtnText: {
        fontSize: 14,
        color: '#101010',
        fontFamily: font.RobotoBold,
    },

    streeksBoxBottom: {
        borderTopWidth: 1,
        borderColor: '#F2F2F2',
        paddingTop: 15,
        marginTop: 15,
    },

    dateBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    marBot0: {
        marginBottom: 0,
    },
    calIcon: {
        width: 18,
        height: 18,
    },
    dateText: {
        paddingLeft: 5,
        fontSize: 12,
        color: '#101010',
    },
    timerBox: {
        backgroundColor: '#FF3C3C',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 5,
        marginTop: 8,
    },
    clockTime: {
        paddingLeft: 5,
        fontSize: 12,
        color: '#fff',
        fontFamily: font.RobotoMedium,
    },
    clockIcon: {
        marginRight: 10,
    },
    streeksDes: {
        marginBottom:5,
        //backgroundColor:'red'
    },
    htmlDes:{
        height: 15,
        justifyContent:'center',
        overflow:'hidden'
    }


});

export default styles;
