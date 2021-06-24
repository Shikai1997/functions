/**
 * 從 href 取得指定參數的值
 * @param {String} item search 變數名稱
 */
function QueryString(item) {
    var sValue = location.href.match(
        new RegExp("[?&]" + item + "=([^&]*)(&?)", "i")
    );
    return sValue ? sValue[1] : sValue;
}

/**
 * 取得cookies
 * @param {String} name 字串
 */
function getCookies(name) {
    var cookieValue = "";
    var search = name + "=";
    if (document.cookie.length > 0) {
        var offset = document.cookie.indexOf(search);
        if (offset != -1) {
            offset += search.length;
            var end = document.cookie.indexOf(";", offset);
            if (end == -1) end = document.cookie.length;
            cookieValue = unescape(document.cookie.substring(offset, end));
        }
    }
    return cookieValue;
}