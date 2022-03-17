import axios from 'axios';
import config from './config'



export const login = async (accountID, password) => {
    const url = process.env.VUE_APP_SERVER_URL + 'auth-api/login/manager?id=' + accountID + '&pwd=' + password;
    const options = config.auth
    options.method = 'post'
    options.url = url

    try {
        const response = await axios(options)
        // const requestOption = {
        //     method:'POST',
        //     headers:{"Content-Type": "application/json"},
        // }
        // const res = await fetch('http://3.34.94.144:8080/v1/auth-api/login/manager?id=admin&pwd=1234',requestOption);
        const returnData = response.data
        // console.log(response)
        console.log(returnData)
        console.log(response)
        console.log(response.config)
        console.log('>>>>')
        // console.log(res)
        console.log(response.headers['total-wallet-access-token'])
        if (returnData.code === '0') {
            console.log('test');
            if (response.headers['total-wallet-access-token']) {
                returnData.accessToken = response.headers['total-wallet-access-token']
                sessionStorage.setItem('accessToken',response.headers['total-wallet-access-token']);
            } else {
                window.location.href = '/#/signIn';
            }
        }
        return returnData
    } catch (error) {
        return error.response ? error.response.data : config.networkError
    }

}
