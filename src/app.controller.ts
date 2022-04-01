import {Body, Controller, Get, Post} from '@nestjs/common';
import {registerFont,} from 'canvas'
import {AppService} from "./app.service";


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Post()
  async getImg(@Body() data: { bg: string, font: string, title: string, desc: string }) {


    const {bg, font, title, desc} = data;

    // 加载字体
    registerFont('public/AlibabaBold.ttf', {family: 'AliBold'})
    registerFont('public/AlibabaLight.ttf', {family: 'AliLight'})
    registerFont('public/AlibabaRegular.ttf', {family: 'AliRegular'})
    registerFont('public/cexwz.ttf', {family: 'Crxwz'})
    registerFont('public/pmzd.ttf', {family: 'Pmzd'})
    registerFont('public/rb.ttf', {family: 'Rb'})
    registerFont('public/rzzy.ttf', {family: 'Rzzy'})
    registerFont('public/zkkl.ttf', {family: 'Zkkl'})
    registerFont('public/zkwy.ttf', {family: 'Zkwy'})

    // 获取字体图像信息
    const fontImgInfo = await this.appService.getFont(font, title, desc);

    // 生成分享图片
    const share = await this.appService.creatShare(bg, font, title, desc);

    // 生成公众号封面图
    const banner = await this.appService.creatBanner(bg, font, title, desc);

    return {
      font: fontImgInfo.dataUrl,
      shar: share.dataUrl,
      banner: banner.dataUrl
    }
  }

}
