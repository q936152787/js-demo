let text = document.getElementById("introduction");
let style = document.getElementById("style");
const string =
  `/* 你好，我叫dx
  * 接下来我演示一下我的前端功底
  * 首先我要准备一个div */
  #taiji{
      border: 1px solid red;
      width: 200px;
      height: 200px;
} 
  /* 接下来我把 div 变成一个八卦图
  * 注意看好了
  * 首先，把 div 变成一个圆
  **/
  #taiji{
      border-radius: 50%;
      box-shadow: 0 0 3px rgba(0,0,0,0.5);
      border: none;
  }
  /* 八卦是阴阳形成的
  * 一黑一白
  **/
  #taiji{
      background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, 
      rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
  }
  /* 加两个神秘的小球 */
  #taiji::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, 
    rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#taiji::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 
    25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
  `;
let string2 = ''
for (let i = 0; i < string.length-1; i++) {
    console.log(string.length-1);
  setTimeout(() => {
    if(string[i] === "\n") string2 += '<br>';
    else if(string[i] === " ") string2 += '&nbsp';
    else{string2 += string[i]; 
    }  
    text.innerHTML = string2;
    style.innerHTML = string.substring(0,i);
  }, 10*i);
  
}
