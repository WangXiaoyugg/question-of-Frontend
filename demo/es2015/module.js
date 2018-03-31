// 模块化 module
/**
 * 1. 引入模块
 * 2. 暴露模块
 */

 import fs from 'fs'
 import * as util from 'util'
 import { writeFile } from 'fs'
 import { writeFile as wf } from 'fs'
 import './index.css'

 import * as lib from 'lodash'
 lib.isEmpty();

 import { createSever as createHTTPServer } from 'http'

 // 不引入接口，仅运行模块代码
 import 'system-apply'
 
export const api = 'xxx/api'
export function method() {}
export class Foo {}
export default class Client {}
export * from 'util'

export { memeber } from 'module'
export {default as moduleDefault} from 'module'
