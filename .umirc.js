
// ref: https://umijs.org/config/
export default {
  exportStatic: {},
  // publicPath: "https://bug000.github.io/housepage/",
  base: "/douhouse-0.0.2-shanghai/",
  publicPath: "http://45.76.180.79:8080/douhouse-0.0.2-shanghai/",
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'douhouse',
      dll: false,
      routes: {
        exclude: [],
      },
      hardSource: false,
    }],
  ],
}
