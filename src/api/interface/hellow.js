
/**
 * 
 *   在 项目 页面中引用 并使用
 * 
 *     import {getData}  from  "@/api/about/about"
 * 
 *      getData(params).then(res=>{
 *              
 *      }).catch(error=>{
 * 
 *      })
 * 
 * 
 */
import fetch from "../fetch"

import domainURL from "../urls"

//  获取数据
export function getData(params) {
    return fetch({
        url: domainURL.getData,
        method: "post",
        params: params
    })
}

