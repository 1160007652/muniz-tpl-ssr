import { useStaticRendering } from 'mobx-react';

import Config from './Config';

const isServer = typeof window === 'undefined';

// 如果真，在服务端只被渲染Store， 不进行observer响应， 否则在前端时，进行响应
useStaticRendering(isServer);

/**
 * 导出 RootStore
 */
export class RootStore {
  constructor(initState = {}) {
    for (const k in Config) {
      if (Config.hasOwnProperty(k)) {
        this[k] = new Config[k](initState[k]);
      }
    }
  }
}

let store = null;

/**
 * 导出服务端初始化 RootSTore
 * @param {object} initialState 初始化Store 数据
 */
export function initializeStore(initialState = {}) {
  if (isServer) {
    return new RootStore(initialState);
  }
  if (store === null) {
    store = new RootStore(initialState);
  }

  return store;
}
