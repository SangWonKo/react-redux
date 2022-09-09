//entry 입력 -> module -> plugin -> output 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {  // webpack에 config 파일을 입력값으로 제공
  mode: 'development',    
  entry: './src/app.js', //입력정보 (어떤 js파일에서 시작하는지)
  output: {  // 출력
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  devServer: {
    compress: true,
    port: 9999,
  },
  module: { // 트랜스파일링
    rules: [
      {
        test: /\.js$/, // 매칭되는 파일들만 loader에 보내줘 (js파일만)
        exclude: /node_modules/,  //특정 directory 제외
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  },
  plugins: [  
    new HtmlWebpackPlugin({
      title: '2.3 setup webpack & babel',
      template: 'index.html'
    })
  ]
}