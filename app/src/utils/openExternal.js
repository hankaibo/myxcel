// 将 Electron 的 shell 模块的 openExternal 的距离逻辑抽象出来
import { shell } from 'electron'
import _ from 'lodash'

const ASCII_URL = 'http://tool.oschina.net/commons?type=4'
const JUSFOUN_FE = 'https://jusfoun-fe.github.io/'
const GITHUB_URL = 'https://github.com/hankaibo/myxcel'
const GITHUB_ISSUES_URL = 'https://github.com/hankaibo/myxcel/issues'

export function openExternal(uri) {
  if (typeof uri === 'undefined' || uri === null) {
    return
  }
  if (_.isString(uri) && uri.trim() !== '') {
    switch (uri.toLowerCase()) {
      case 'ascii':
        shell.openExternal(ASCII_URL);
        break
      case 'jusfoun-fe':
        shell.openExternal(JUSFOUN_FE);
        break
      case 'issues':
        shell.openExternal(GITHUB_ISSUES_URL);
        break
      case 'github':
        shell.openExternal(GITHUB_URL);
        break
      default:
        {
          console.log('无匹配的地址')
          shell.openExternal(JUSFOUN_FE)
        }
    }
  }
}
