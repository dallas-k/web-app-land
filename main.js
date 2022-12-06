let accessKey = "mmgaRe2jArTS%2B4%2BZ%2F3bFdLysADDBgldElPJr8bttAHStiCDJ0b1pxBpM%2FMHL%2F8Z6QwtT2Y3aRiK2WUdt6qx8xQ%3D%3D";

const offi_rent = {
    url : "http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcOffiRent",
    location : encodeURIComponent('LAWD_CD'), // 5자리 코드
    month : encodeURIComponent('DEAL_YMD') // ex)201512
}
const offi_trade = {
    url : "http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcOffiTrade",
    location : encodeURIComponent('LAWD_CD'), // 5자리 코드
    month : encodeURIComponent('DEAL_YMD') // ex)201512
}
const yeonrip_rent = {
    url : "http://openapi.molit.go.kr:8081/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcRHRent",
    location : encodeURIComponent('LAWD_CD'), // 5자리 코드
    month : encodeURIComponent('DEAL_YMD') // ex)201512
}
const yeonrip_trade = {
    url : "http://openapi.molit.go.kr:8081/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcRHTrade",
    location : encodeURIComponent('LAWD_CD'), // 5자리 코드
    month : encodeURIComponent('DEAL_YMD') // ex)201512
}
const apt_rent = {
    url : "http://openapi.molit.go.kr:8081/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptRent",
    location : encodeURIComponent('LAWD_CD'), // 5자리 코드
    month : encodeURIComponent('DEAL_YMD') // ex)201512
}
const apt_trade = {
    url : "http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev",
    location : encodeURIComponent('LAWD_CD'), // 5자리 코드
    month : encodeURIComponent('DEAL_YMD') // ex)201512
}
const dandok_rent = {
    url : "http://openapi.molit.go.kr:8081/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcSHRent",
    location : encodeURIComponent('LAWD_CD'), // 5자리 코드
    month : encodeURIComponent('DEAL_YMD') // ex)201512
}
const dandok_trade = {
    url : "http://openapi.molit.go.kr:8081/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcSHTrade",
    location : encodeURIComponent('LAWD_CD'), // 5자리 코드
    month : encodeURIComponent('DEAL_YMD') // ex)201512
}


// let xhr = new XMLHttpRequest();
// let url = 'http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcOffiTrade'; /*URL*/
// let queryParams = '?' + encodeURIComponent('serviceKey') + '='+accessKey; /*Service Key*/
// queryParams += '&' + encodeURIComponent('LAWD_CD') + '=' + encodeURIComponent('11110'); /**/
// queryParams += '&' + encodeURIComponent('DEAL_YMD') + '=' + encodeURIComponent('201512'); /**/
// xhr.open('GET', url + queryParams);
// xhr.onreadystatechange = function () {
//     if (this.readyState == 4) {
//         alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
//     }
// };

let url = dandok_trade["url"];
let query = `?${dandok_trade['location']}=`+encodeURIComponent('11110')+`&${dandok_trade['month']}=`+encodeURIComponent('201512')+'&'+encodeURIComponent('serviceKey')+`=${accessKey}`;
console.log(url+query);

let xhr = new XMLHttpRequest();
xhr.open('GET',url+query);
xhr.onreadystatechange = function () {
    if(this.readyState == 4) {
        alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
    }
};

xhr.send('');