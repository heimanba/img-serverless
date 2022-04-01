import {Injectable} from '@nestjs/common';
import {createCanvas, loadImage} from "canvas";

@Injectable()
export class AppService {

    async getFont(font, title, desc) {

        // canvas 数据初始化
        const canvas = createCanvas(600, 130)
        const ctx = canvas.getContext('2d')

        // 居中
        ctx.moveTo(300, 0)
        ctx.stroke()

        // 主文案
        ctx.textAlign = 'center'
        ctx.font = `50px ${font}`
        ctx.fillStyle = 'blue'
        ctx.fillText(
            `${title}`,
            300,
            40
        );
        ctx.stroke();

        // 副文案
        ctx.textAlign = 'center'
        ctx.font = `30px ${font}`
        ctx.fillStyle = 'blue'
        ctx.fillText(
            `${desc}`,
            300,
            120
        );
        ctx.stroke();

        return {
            dataUrl: canvas.toDataURL(),
            buffer: canvas.toBuffer(),
        }
    }

    async creatShare(bg, font, title, desc) {
        // canvas 数据初始化
        const canvas = createCanvas(750, 526)
        const ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, 750, 526)

        const bgImg = await loadImage(bg ? bg : 'https://src.e7wei.com/1302145JEA5XHM2A.png')

        ctx.drawImage(bgImg, 0, 0, 750, 526)

        // 居中
        ctx.moveTo(375, 80)
        ctx.stroke()

        // 主文案
        ctx.textAlign = 'center'
        ctx.font = `50px ${font}`
        ctx.fillStyle = 'blue'
        ctx.fillText(
            `${title}`,
            375,
            140
        );
        ctx.stroke();

        // 副文案
        ctx.textAlign = 'center'
        ctx.font = `30px ${font}`
        ctx.fillStyle = 'blue'
        ctx.fillText(
            `${desc}`,
            375,
            220
        );
        ctx.stroke();

        return {
            dataUrl: canvas.toDataURL(),
            buffer: canvas.toBuffer(),
        }
    }

    async creatBanner(bg, font, title, desc) {
        // canvas 数据初始化
        const canvas = createCanvas(900, 500)
        const ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, 900, 500)

        const bgImg = await loadImage(bg ? bg : 'https://src.e7wei.com/1302145JEA5XHM2A.png')

        ctx.drawImage(bgImg, 0, 0, 950, 500)

        // 居中
        ctx.moveTo(450, 250)
        ctx.stroke()

        // 主文案
        ctx.textAlign = 'center'
        ctx.font = `50px ${font}`
        ctx.fillStyle = 'blue'
        ctx.fillText(
            `${title}`,
            375,
            140
        );
        ctx.stroke();

        // 副文案
        ctx.textAlign = 'center'
        ctx.font = `30px ${font}`
        ctx.fillStyle = 'blue'
        ctx.fillText(
            `${desc}`,
            375,
            220
        );
        ctx.stroke();

        return {
            dataUrl: canvas.toDataURL(),
            buffer: canvas.toBuffer(),
        }
    }
}
