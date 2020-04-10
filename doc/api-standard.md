## 接口规范

url:  希望统一以` /xxxxx`作为前缀，

contentType使用默认的：`'application/json; charset=UTF-8'`

返回报文结构：

```
{

 	data: json,  //返回接口数据

	message: string， // 返回相关信息，一般在接口非200时会使用此处的错误消息

	statusCode: 200，// 遵守http code规范，200成功，300跳转，400权限相关，500错误相关

}
```

约定：所有产品接口的参数和response的key使用小驼峰命名法；

​			所有产品接口的返回值中的 data 字段，如果有数据必须以json的形式返回，没有数据建议返回null；