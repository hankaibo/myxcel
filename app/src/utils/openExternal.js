// 将 Electron 的 shell 模块的 openExternal 的距离逻辑抽象出来
import { shell } from 'electron'
import _ from 'lodash'

const ASCII_URL = 'http://tool.oschina.net/commons?type=4'
const AOTU_URL = 'http://www.littleprincess.cn/'
const GITHUB_URL = 'https://github.com/hankaibo/myxcel'
const GITHUB_ISSUES_URL = 'https://github.com/hankaibo/myxcel/issues'
const XCEL_LANDING_PAGE = 'https://jusfoun-fe.github.io/'

export function openExternal(uri) {
  if (typeof uri === 'undefined' || uri === null) {
    return
  }
  if (_.isString(uri) && uri.trim() !== '') {
    switch (uri.toLowerCase()) {
      case 'ascii':
        shell.openExternal(ASCII_URL);
        break
      case 'aotu':
        shell.openExternal(AOTU_URL);
        break
      case 'issues':
        shell.openExternal(GITHUB_ISSUES_URL);
        break
      case 'github':
        shell.openExternal(GITHUB_URL);
        break
      case 'xcel':
        shell.openExternal(XCEL_LANDING_PAGE);
        break
      default:
        {
          console.log('无匹配的地址')
          shell.openExternal(AOTU_URL)
        }
    }
  }
}
