# lang



```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

:::tip
单例模式

SendMode Input
SetWorkingDir, %A_ScriptDir%
:::

```js
// 先选择最外层的ul
let ul=document.querySelectorAll('.block-icon-list.clearfix')[1].children
// 然后遍历子类li
for (let li of ul){
    li.querySelectorAll('.cover-item.iconfont.cover-item-line.icon-gouwuche1')[0].click()
}

```

```rust

fn main() {
    println!("Hello World!");
}
```

```dart
import 'dart:io';
import 'package:crypto/crypto.dart' as crypto;
import 'dart:typed_data';

bool isPhone(String input) {
  RegExp pathReg = RegExp(r"\.\\");
  return pathReg.hasMatch(input);
}

void main(List<String> arguments) async {

  var filePath = arguments[0] ;
  if(isPhone(filePath)){
    filePath=arguments[0].substring(2);

  }
  print(filePath);
  File file = File(filePath);

  try {
    final fileStream = file.openRead();
    var md5 = crypto.md5;
    final checksum = (await md5.bind(fileStream).first).toString();
    print(checksum);
  } catch (e) {
    print(e);
    print("找不到文件");
  }
}

```

```python
# -*- coding: UTF-8 -*-

# 打印九九乘法表
for i in range(1, 10):
        for j in range(1, i+1):
            # 打印语句中，大括号及其里面的字符 (称作格式化字段) 将会被 .format() 中的参数替换,注意有个点的
            print('{}x{}={}\t'.format(i, j, i*j), end='')  
        print()
```

## 判断窗口是否存在

```autohotkey
if WinActive("ahk_class Notepad") or WinActive("ahk_class" ClassName)
    WinClose ; 使用 WinActive 找到的窗口.
```

## 等待窗口激活

```r
data <- read.csv("sites.csv", encoding="UTF-8")

print(is.data.frame(data))  # 查看是否是数据框
print(ncol(data))  # 列数
print(nrow(data))  # 行数
```

```txt
#SingleInstance, Force
SendMode Input
SetWorkingDir, %A_ScriptDir%

Run, notepad.exe
WinWaitActive, ahk_exe Notepad3.exe, , 5
if ErrorLevel
{
    MsgBox, WinWait timed out.
    return
}
else {
    MsgBox, notepad actived!
}
```
