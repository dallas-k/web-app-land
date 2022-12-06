"use strict";

import request from 'request';
import * as open from './data.js';

let url = 'http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcOffiTrade'; /*URL*/
let queryParams = '?' + encodeURIComponent('serviceKey') + '=' +open.accessKey; /*Service Key*/
queryParams += '&' + encodeURIComponent('LAWD_CD') + '=' + encodeURIComponent('11110'); /**/
queryParams += '&' + encodeURIComponent('DEAL_YMD') + '=' + encodeURIComponent('201512'); /**/

request(url+queryParams, (err, response, body) => {
    if(err) throw err;
    console.log(body);
});





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

// let url = dandok_trade["url"];
// let query = `?${dandok_trade['location']}=`+encodeURIComponent('11110')+`&${dandok_trade['month']}=`+encodeURIComponent('201512')+'&'+encodeURIComponent('serviceKey')+`=${accessKey}`;
// console.log(url+query);

// let xhr = new XMLHttpRequest();
// xhr.open('GET',url+query);
// xhr.onreadystatechange = function () {
//     if(this.readyState == 4) {
//         alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
//     }
// };

// xhr.send('');