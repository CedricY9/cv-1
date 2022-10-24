/*
 * @Author: Yan
 * @Date: 2022-10-23 16:17:32
 * @LastEditTime: 2022-10-24 15:17:35
 * @FilePath: \codee:\jirenguwebcode\cv-1\src\main.js
 * @Description: 
 */
let html = document.querySelector('#html')//通过CSS选择器找到这个元素
let style = document.querySelector('#style')

let string = `
/* 你好，我是小y
 * 接下来我来演示一下前端功底
 * 首先准备一个div
 */
#div1{
    border: 1px solid red;
    width:200px;
    height:200px;
    color:red;
}
/* 接下来把div变成一个八卦图
 * 注意看好了
 * 首先把div变成一个圆圈
 */
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*
 * 八卦是阴阳形成
 * 一黑一白
 */
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*
 * 加两个神秘的小球
 */
#div1::before{
    width:100px;
    height:100px;

    transform:translateX(50%);
    background:#000;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);

}
#div1::after{
    width:100px;
    height:100px;

    transform:translateX(50%);
    background:#fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);

}
`

let n = 0
let string2 = ''//缓存显示到的结果

let step = () => {
    setTimeout(() => {
        //如果是回车就不照搬,不是回车就照搬
        if (string[n] === "\n") {
            string2 += '<br>'
        } else if (string[n] === " ") {
            string2 += '&nbsp'
        } else {
            string2 += string[n]
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n + 1);
        n = n + 1;
        window.scrollTo(0, 999999)
        html.scrollTo(0, 999999)
        if (n < string.length) {
            //不是最后一个
            step();
        }
    }, 0);
};
step();


