module.exports = {
  // devServer: {
  //   https: false
  // },
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            "nav-bar-title-font-size": "20px",
            "font-size-xs": "10px",
            "font-size-sm": "12px", //12px
            "font-size-md": "16px",  //14px
            "font-size-lg": "18px",  //16px
            "cell-border-color": "rgba(97, 100, 98, 0.815)"
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            //hack: `true; @import "your-less-file-path.less";`,
          },
        },
      },
    },
  },
  publicPath: './',
	assetsDir: 'static',
};