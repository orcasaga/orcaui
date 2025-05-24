
import pkg from './package.json' assert { type: 'json' };
const now = new Date();
const times = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate() + ' ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
const note = `
/*!
 * @since Last modified: ${times}
 * @name OrcaUI front-end framework.
 * @version ${pkg.version}
 * @author OrcaUI development team <orcasaga@outlook.com>
 * @description OrcaUI is a self-contained UI framework that delivers the power and elegance of native Web Components. Like its namesake orca, it combines comprehensive features with intuitive usability - offering ready-to-use components that work across all modern browsers. Designed for developers who need production-ready UI solutions without framework dependencies.
 * @see {@link https://www.orcaui.com|Official website}
 * @see {@link https://github.com/orcasaga/orcaui/issues|github issues}
 * @see {@link https://gitee.com/orcasaga/orcaui/issues|Gitee issues}
 * @see {@link https://www.npmjs.com/package/orcaui|NPM}
 * @issue Discord Group https://discord.gg/ffwSrF5D
 * @copyright This software supports the MIT License, allowing free learning and commercial use, but please retain the terms 'OrcaUI' & 'ORCAUI' within the software.
 * @license MIT license
*/
`;
export default note;