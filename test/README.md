# 关于面试测试
收到这个测试后，由于我对rethink,redux，horizon之前没有接触过，我google一把，查看了对应的文档，对rethink实现了简单的增删改查

然后我 instal 了项目，遇到了问题，我本地环境是window 10,错误是

```javascript
:\Users\pc\Documents\GitHub\lovli.js>npm start

> lovli.js@0.5.0 start C:\Users\pc\Documents\GitHub\lovli.js
> LATER_COV= babel-node bin/dev.js

'LATER_COV' 不是内部或外部命令，也不是可运行的程序
或批处理文件。
npm ERR! Windows_NT 10.0.10586
npm ERR! argv "F:\\sdk\\node.exe" "C:\\Users\\pc\\AppData\\Roaming\\npm\\node_modules\\npm\\bin\\npm-cli.js" "start"
npm ERR! node v6.1.0
npm ERR! npm  v3.8.7
npm ERR! code ELIFECYCLE
npm ERR! lovli.js@0.5.0 start: `LATER_COV= babel-node bin/dev.js`
npm ERR! Exit status 1
```
定位到package.json
```javascript
 "scripts": {
    "start": "LATER_COV= babel-node bin/dev.js",
    "prod": "LATER_COV= npm run build && node ./.build/server.bundle.js",
    "build": "webpack --config=config/webpack/webpack.config.client.prod.js && webpack --config=config/webpack/webpack.config.server.js"
  }
```
出现以上问题后 我怀疑是window 的原因，切换到centos ,还是报同样问题；然后就郁闷了，于是找到lovli.js的作者，给他发了个邮件，这个老外挺好的给我回了邮件，邮件如下：
```javascript


```
上面这句话给了我想法，如是，怒删LATER_COV，把package改成
```javascript
 "scripts": {
    "start": "babel-node bin/dev.js",
    "prod": "npm run build && node ./.build/server.bundle.js",
    "build": "webpack --config=config/webpack/webpack.config.client.prod.js && webpack --config=config/webpack/webpack.config.server.js"
  }
```
再次npm start ,ok 项目成功启动，接着打开rethinkdb,访问端口3000，
按照测试需求，我实现了下面操作，在AddTodoButton.js修改
```javascript
import React from 'react';
import { subscribe } from 'horizon-react';
import { createDoc } from 'horizon-react/lib/utils';

import styles from './styles';

const AddTodoButton = (props) => {
  const collection = props.horizon('todos');
  const addTodo = (t,m) => createDoc(collection, { text: t ,messageType:m});

  return (
      <div>
      <input
  id="todo-text"
  className={styles.input}
type="text"
placeholder="A new todo item..."
/>
<select
id="todo-type"
className={styles.input}
placeholder="select.."
    >
    <option>broadcast</option>
    <option>emergency</option>
    <option>regular</option>
    <option>advertising</option>
    </select>
<div
className={styles.button}
onClick={() => { addTodo(document.getElementById('todo-text').value,document.getElementById('todo-type').value); document.getElementById('todo-text').value = '';document.getElementById('todo-type').value='' }}
>
+ Add todo
</div>
</div>
);
};

export default subscribe()(AddTodoButton);
```
接着修改TodoItem.js
```html
<span className={styles.caption}>text: {todo.text || '-'}</span>
<span className={styles.caption}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
<span className={styles.caption}>mType:{ todo.messageType||'-'}</span>
```
页面展示


#基本就完成了测试，然后改成redux-form时，我遇到了很多问题，目前就还没有实现，对很多方法不熟，我把我整个处理这个面试测试写下来是想通过整个过程展示我平常处理事情的方法，我没有redux-form实现，是因为我接触node才半个月，对这些不是很熟，我以前都是在研究原生javascript,因为我觉得只有才原理上明白整个语言，把骨架搭起来，研究各种js框架才快的起来，毕竟js框 架更新太快，但原理是不会变的，如果有一段缓冲的学习时间，我能很快掌握这方面知识的；知道华院数据是做大数据分析的，非常感兴趣，希望能给个机会