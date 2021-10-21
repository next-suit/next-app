# next-app
ReactBase + Expo build iOS + Android + Web three platform

## 生成key

```bash
keytool -genkeypair -v -keystore ${next-app-keystore}.jks -alias ${next-app} -keyalg RSA -keysize 2048 -validity 9125

// 更改 ${} 两处变量为自己的命名
// 假设输入的key的密码为 123456
```

#### 编译时的一些环境变量，需要在 .bashrc/.zshrc 里配置，配置完需重启IDE生效
```bash
# expo 编译相关
export EXPO_USERNAME="your expo username"
export EXPO_PASSWORD="your expo password"
export EXPO_ANDROID_KEYSTORE_PASSWORD="123456"
export EXPO_ANDROID_KEY_PASSWORD="123456"
```

## 自动更新
- [expo 官网文档](https://docs.expo.dev/distribution/hosting-your-app)

**执行步骤**
- 先 expo export 出静态文件(见附录1)，然后上传github/自己的服务器
- 使用打包出来的资源编译APP
   - build:android 打包时加入选项 --public-url https://next-suit.github.io/next-app-update/android-index.json
   - build:ios 打包时加入选项 --public-url https://next-suit.github.io/next-app-update/ios-index.json
- 新APP上传自己的一个固定下载链接，老APP会自动在github上下载资源文件自动升级

**附录1：expo export 导出资源文件**
```bash
# 示例为 github 上建立一个公共项目，并且在 Setting->Pages中选择一个主题后即可访问，然后填入访问地址

# 新APP，重新开始
expo export --public-url https://next-suit.github.io/next-app-update/
# 得到一个dist文件夹
cd dist
git init
git checkout gh-pages
git remote add origin git@github.com:next-suit/next-app-update.git
git add * && git commit -m "Update my app with this JS bundle"
git push -u origin gh-pages
cd ..


# 已经存在，开始更新
expo export --public-url https://next-suit.github.io/next-app-update/ && cd dist && git add * && git commit -m "Update my app with this JS bundle" && git push -u origin gh-pages && cd ..
```
