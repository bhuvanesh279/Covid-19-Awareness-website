<%@ page contentType ="text/html"pageEncoding="UTF-8"%>
<%@ page import = "java.io.*,java.util.*,java.sql.*"%>
<%@ page import = "javax.servlet.http.*,javax.servlet.*"%>
<%@ taglib url="http://java.sun.com/jsp/jst1/core" prefix = "c"%>
<%@ taglib url="http://java.sun.com/jsp/jst1/sql" prefix = "sql"%>
<html>
<head>
<title> SELECT OPERATION</title>
</head>
<body>
<sql:setDatasourse var =" mydb" driver = "org.apache.derby.jdbc.ClientDriver" url
="org.apache.derby.jdbc.ClientDriver"/>
<sql:setDatasourse user = "root" password = "pass123"/>
<sql:update datasourse =" "${mydb}" var ="result"> INSERT INTO vaccine
details(Districkname,firstdose ,seconddose,total)
VALUES (${param.t1},${param.t2},${param.t3},${param.t4})</sql:update>
<sql:query datasourse ="${mydb}" var ="result"> SELECT * from vaccine details
</sql:query>
<table border = "1" width = "100%"> <tr> <th>Districk name</th> <th>firstdose</th>
<th>seconddose</th> <th>total</th> </te>
<c:forEach var = "row" items = "${result.rows}">
<td><c:out value = "${row.name}"/></td>
<td><c:out value = "${row.Districkname}"/></td>
<td><c:out value = "${row.firstdose}"/></td>
<td><c:out value = "${row.seconddose}"/></td>
<td><c:out value = "${row.total}"/></td>
</tr> </c:forEach>
</table>
</body>
</html>