import _ from 'lodash';
import './style.css'
import printMe from './print.js';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}
function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');
  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);
     // 将图像添加到我们现有的 div。

  return element;
}

document.body.appendChild(component());

 if (module.hot) {
   module.hot.accept('./print.js', function() {
     console.log('Accepting the updated printMe module!');
     printMe();
   })
 }