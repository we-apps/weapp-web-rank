// 获取全局应用程序实例对象
const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: '我的',
    userInfo: {
      wechat: '',
      nickName: '全栈弄潮儿',
      describe: '欢迎关注我的微信公众号',
      avatarUrl: '../../images/qrcode.png'
    },
    imageUrl: '',
    imageUrls: ['https://upload.jianshu.io/users/upload_avatars/3100736/ac238e47-6978-4e2a-86f5-9d15aba2f914.jpg', '', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1966241482,3635901778&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3289087239,3379578403&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=235964461,1252733691&fm=27&gp=0.jpg', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=680844055,1184814108&fm=11&gp=0.jpg']
  },
  goToUrl() {
    wx.navigateTo({
      url: '../out/out', //
      success: function () {

      },  //成功后的回调；
      fail: function () { },  //失败后的回调；
      complete: function () { }  //结束后的回调(成功，失败都会执行)
  });
  },
  onShareAppMessage: function () {
    this.imageUrl = this.data.imageUrls[Math.floor(Math.random() * this.data.imageUrls.length)];
    return {
      title: '前端最火的框架都在这里了！',
      // desc: '前端最火的框架都在这里了！',
      path: '/pages/index/index',
      imageUrl: this.imageUrl
    }
  }
})
