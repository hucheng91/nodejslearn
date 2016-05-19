# cmd�²���mongodb

* ��װ��mongodb����Ҫ����һ��data,log������������mongodb,�½�һ��mongo.config,д��
```html
dbpath=E:\MongoDB\data
logpath=E:\MongoDB\log\mongo.log
```
���������ļ��Ϳ���ʹ����
## ��������
* �������ݿ⣺use myDB
* �鿴�������ݿ⣺show dbs
* ɾ�����ݿ⣺db..dropDatabase()
* ��ɾ�Ĳ�
  * �� ��db.myDb.insert({});
  * �飺db.myDb.find();
  * �ģ�
```html
db.collection.update(
   <query>,
   <update>,
   {
     upsert: <boolean>,
     multi: <boolean>,
     writeConcern: <document>
   }
)
����˵����
query : update�Ĳ�ѯ����������sql update��ѯ��where����ġ�
update : update�Ķ����һЩ���µĲ���������$,$inc...���ȣ�Ҳ�������Ϊsql update��ѯ��set�����
upsert : ��ѡ�������������˼�ǣ����������update�ļ�¼���Ƿ����objNew,trueΪ���룬Ĭ����false�������롣
multi : ��ѡ��mongodb Ĭ����false,ֻ�����ҵ��ĵ�һ����¼������������Ϊtrue,�ͰѰ����������������¼ȫ�����¡�
writeConcern :��ѡ���׳��쳣�ļ���
```
```javascript
ֻ���µ�һ����¼��
db.col.update( { "count" : { $gt : 1 } } , { $set : { "test2" : "OK"} } );
ȫ�����£�
db.col.update( { "count" : { $gt : 3 } } , { $set : { "test2" : "OK"} },false,true );
ֻ��ӵ�һ����
db.col.update( { "count" : { $gt : 4 } } , { $set : { "test5" : "OK"} },true,false );
ȫ����Ӽӽ�ȥ:
db.col.update( { "count" : { $gt : 5 } } , { $set : { "test5" : "OK"} },true,true );
ȫ�����£�
db.col.update( { "count" : { $gt : 15 } } , { $inc : { "count" : 1} },false,true );
ֻ���µ�һ����¼��
db.col.update( { "count" : { $gt : 10 } } , { $inc : { "count" : 1} },false,false );
```


