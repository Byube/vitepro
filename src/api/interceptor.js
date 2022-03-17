import {getDataByAccessToken} from "@/common/sessionStorageUtil";

const ACCESS_TOKEN_HEADER = 'total-wallet-access-token';

export function setInterceptors(instance) {
    instance.interceptors.request.use(
        function(config) {
            // Do something before request is sent
            if(config.url !== 'admin/login'){
                let tempToken = getDataByAccessToken();
                if(!tempToken){
                    console.log("토큰이 없습니다.");
                    window.location.href = '/#/signIn';
                    return Promise.reject("토큰이 없습니다.");
                }
                config.headers[ACCESS_TOKEN_HEADER] = tempToken;
            }

            return config;
        },
        function(error) {
            // Do something with request error
            return Promise.reject(error);
        },
    );

    // Add a response interceptor
    instance.interceptors.response.use(
        function(response) {
            // Any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data
            if(response && response.data && response.data.code === 22001){
                window.location.href = '/#/signIn';
                return response;
            }
            return response;
        },
        error =>
         {
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
             if(error && error.response && error.response.status === 500) {
                 if(error.response.data && (error.response.data.message === 'Not Auth' || error.response.data.message === '유효하지않은 토큰입니다.')) {
                     window.location.href = '/#/signIn';
                 }
                 return Promise.reject(error.response);
             }
            return Promise.reject(error);
        },
    );
    return instance;
}