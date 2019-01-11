/**
 * 全局配置文件在这，方便自己 ，也要方便他人
 *   注释信息一定要 写清楚
 */

//
let dse = {};
// 服务端需要修改路径为 文件所在的根目录 dse.baseURL = getIndexUrl("/pipe/pages/app/pipe/");
dse.baseURL = baseURL; // ******
dse.static_baseUrl = static_baseUrl;

dse.version = '1.0.0';
// 说明 该地址既是接口地址 、也是跳转服务地址

dse.base_api_url = base_api_url;

export default dse

