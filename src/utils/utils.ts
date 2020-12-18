
class Utils {

  /**
   * 设置标题
   * @param title 标题
   */
  static setTitle(title: string) {
    document.title = title ?? process.env.VUE_APP_TITLE;
  }

/**
 * 在新窗口中打开一个URL地址
 * @param url 要打开的地址
 */
  static openUrl(url: string) {
    var a = document.createElement('a')
    a.setAttribute('href', url)
    a.setAttribute('target', '_blank')
    //a.setAttribute('id', 'tmpLink')
    document.body.appendChild(a)
    a.click()

    document.body.removeChild(a)
  }

}
