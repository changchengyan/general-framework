
/**
 * 全局配置文件在这，方便自己 ，也要方便他人
 *   注释信息一定要 写清楚
 */
// 公共方法
var getIndexUrl = function (app) {
    var indexPath = "";
    if (app) {
        indexPath = location.protocol + "//" + location.host + app;
    } else {
        indexPath = location.protocol + "//" + location.host;
    }
    return indexPath;
};
// 服务端文件所在的根目录 
window.baseURL = getIndexUrl("/pipe/pc");

//服务器端静态资源所在的目录    
window.static_baseUrl = getIndexUrl("/pipe/pc/static")

//arcgis 启动IP
window.arcgis_IP = "http://sw.nxstjt.com";
// arcgis 的资源图层IP
window.arcgis_resourceIP = "http://sw.nxstjt.com"; 

// 说明 该地址既是接口地址 、也是跳转服务地址
window.base_api_url = 'http://www.whdse.cn:56038/pipe'   //  开发服务器

//水凝 管网图层  线上
window.waterAge_gisUrl ="http://sw.nxstjt.com/arcgis/rest/services//waterAgeMapService/MapServer/0"

//arcgis 导出服务地址
window.arcgisExportMap = arcgis_IP+"/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task";


