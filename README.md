## demorn
> react native demo调试项目

thememain.js 主题主界面

loginview.js qq登陆页面demo

##打包步骤

1.在工程根目录下执行打包命令，比如 
> react-native bundle --entry-file index.android.js --bundle-output ./android/app/src/main/assets/index.android.bundle --platform android --assets-dest 

> 注意:[./android/app/src/main/assets/]文件夹存在。

2.增量升级的话不要把图片资源直接打包到res中，脚本如下： 
> react-native bundle --entry-file index.android.js --bundle-output ./bundle/androidBundle/index.android.jsbundle --platform android --assets-dest ./bundle/androidBundle/ --dev false

3.保证MainActivity.Java中的setBundleAssetName与你的jsbundle文件名一致，比如.setBundleAssetName(“index.android.jsbundle”)就与我生成的资源名一致
