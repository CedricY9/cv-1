/*
 * @Author: Yan
 * @Date: 2022-10-23 16:17:32
 * @LastEditTime: 2022-10-23 16:57:48
 * @FilePath: \codee:\jirenguwebcode\cv-1\src\main.js
 * @Description: 
 */ let demo = document.querySelector("#demo") //通过CSS选择器找到这个元素
;
let string = `你好，我是一名前端新人`;
let n = 0;
demo.innerHTML = string.substring(0, n);
let step = ()=>{
    setTimeout(()=>{
        if (n + 1 >= string.length) return;
        n = n + 1;
        demo.innerHTML = string.substring(0, n);
        step();
    }, 150);
};
step();

//# sourceMappingURL=index.de158e3a.js.map
