// https://umijs.org/config/
import { defineConfig } from 'umi';

export default defineConfig({
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'child', // 唯一 id
          entry: '//localhost:8001', // html entry
        },
      ],
    },
  },
  plugins: [
    // https://github.com/zthxxx/react-dev-inspector
    'react-dev-inspector/plugins/umi/react-inspector',
  ],
  // https://github.com/zthxxx/react-dev-inspector#inspector-loader-props
  inspectorConfig: {
    exclude: [],
    babelPlugins: [],
    babelOptions: {},
  },
});
