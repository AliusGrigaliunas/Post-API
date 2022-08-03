function getParamData(data){
    let queryParams = document.location.search;
    let urlParams = new URLSearchParams(queryParams);
    let userId = urlParams.get(data);
    return userId;
}
export {getParamData};