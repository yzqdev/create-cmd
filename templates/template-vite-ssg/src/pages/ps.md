# 字符串

​

 ```java
public void writeText(){
    PrintWriter writer = new PrintWriter("the-file-name.txt", "UTF-8");
    writer.println("The first line");
    writer.println("The second line");
    writer.close()
}
 ```

 ```go
func TestHello(t *testing.T) {
 want := "Hello World!"
 if Hello() != want {
  t.Errorf("Hello() != %s", want)
 }
}
```

Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned |  |
| col 2 is      | centered      |    |
| zebra stripes | are neat      |     |

The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3
