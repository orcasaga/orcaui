//获得文件头注释
import pkg from './package.json' assert { type: 'json' };
const now = new Date();
const times = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate() + ' ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
//打包后的文件会丢失入口文件的注释，需要在这里插入，使用/*!可以避免css压缩min文件是被删掉
const note = `
/*!
 * @since Last modified: ${times}
 * @name ORCAUI front-end framework.
 * @version ${pkg.version}
 */
`;
export default note;