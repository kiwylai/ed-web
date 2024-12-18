import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { AntdResolve, createStyleImportPlugin } from "vite-plugin-style-import";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createStyleImportPlugin({
      resolves: [AntdResolve()], // 按需加载样式
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: { "@primary-color": "#1DA57A" }, // 修改 Ant Design 主颜色
        javascriptEnabled: true,
      },
    },
  },
});
