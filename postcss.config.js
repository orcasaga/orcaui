import postcss from 'postcss';
import postcssImport from 'postcss-import';
import postcssMixins from 'postcss-mixins';
import postcssSimpleVars from 'postcss-simple-vars';
import postcssEach from 'postcss-each';
import postcssFor from 'postcss-for';
import postcssCalc from 'postcss-calc';

export default {
  plugins: [
    postcssImport(),
    postcssSimpleVars(),
    postcssMixins({
      mixins: {
        //shadow border / outer or inner
        'v1-shadow-bd': function (mixin, color = 'var(--_c-text-bd)', refer = 'rgba(0, 0, 0, .08)', inset = 'false') {
        
          const isInset = inset === 'true' || inset === true;
          if (isInset) {
            return {
              boxShadow: `0 0 0 1px ${color} inset, 0 .2rem .6rem ${refer}`
            };
          } else {
            return {
              boxShadow: `1px 0 0 ${color}, -1px 0 0 ${color}, 0 1px 0 ${color}, 0 -1px 0 ${color}, 0 .2rem .6rem ${refer}`
            };
          }
        },
      }
    }),
    postcssFor(),
    postcssEach(),
    postcssCalc(),
  ]
};