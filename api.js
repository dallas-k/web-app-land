const XMLHttpRequest = require('xmlhttprequest');

let xhr = new XMLHttpRequest();

function read(){
    let url = 'http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcOffiRent'; /*URL*/
    let serviceKey = 'mmgaRe2jArTS%2B4%2BZ%2F3bFdLysADDBgldElPJr8bttAHStiCDJ0b1pxBpM%2FMHL%2F8Z6QwtT2Y3aRiK2WUdt6qx8xQ%3D%3D'

    let queryParams = '?' + encodeURIComponent('serviceKey') + '='+serviceKey; /*Service Key*/
    queryParams += '&' + encodeURIComponent('LAWD_CD') + '=' + encodeURIComponent('11110'); /**/
    queryParams += '&' + encodeURIComponent('DEAL_YMD') + '=' + encodeURIComponent('201512'); /**/
    xhr.open('GET', url + queryParams);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
        }
    };

    xhr.send();
}

read();