import {postApi} from '../../services/postApi'
import apiName from '../../constants/apiName'
import {invoiceLoading, invoiceSuccess, invoiceError} from "../constants/reduxConstant";


const apiLoading = () => ({type: invoiceLoading});
const apiSucceed = payload => ({type: invoiceSuccess, payload});
const apiError = payload => ({type: invoiceError, payload});

const InvoiceA = (user_id,token) => async (dispatchEvent, getState) => {
    console.log('InvoiceA user_id', user_id,'invoice tocken',token)
   const obj ={'proc':'sps_get_invoicesData','input':[user_id,"05/01/2020","08/30/2022","N"]}

    dispatchEvent(apiLoading());
    try {
        postApi(apiName.invoice, obj,token)
            .then(async res => {
                console.log("Get invoice ",res)
                if (res.data.errCode === "0") {
                    console.log("Get invoice sucessfull")
                    dispatchEvent(apiSucceed(res.data));
                } else {
                    dispatchEvent(apiError(res));
                }
            })
            .catch(error => {
                dispatchEvent(apiError(error));
            });
    } catch (e) {
        dispatchEvent(apiError(e));
    }
};
export default InvoiceA;
