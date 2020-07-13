// encodeURIComponent("a b&c # 你我他"); //编码http
// decodeURIComponent("xxx"); //解码http
var net = require("net");
var server = net.createServer();
var port = 80;
var msgs = [
  //示例数据
  {
    name: "Lily",
    content: "hello",
    timestamp: 1594626663191,
  },
  {
    name: "Jim",
    content: "world",
    timestamp: 1594626063191,
  },
];
server.on("connection", (conn) => {
  conn.on("data", (data) => {
    var d = data.toString();
    var [headers, body] = d.split("\r\n\r\n");
    var [firstLine, ...lines] = headers.split("\r\n");
    var [method, path] = firstLine.split(" ");
    if (method === "POST") {
      var msg = parseQueryString(body);
      msg.timestamp = Date.now();
      msgs.push(msg);
      conn.write("HTTP/1.1 302 Moved\r\n");
      conn.write("Location:/\r\n");
      conn.write("\r\n");
      conn.end();
      return;
    }
    conn.write("HTTP/1.1 200 OK\r\n");
    conn.write("Content-Type:text/html\r\n");
    conn.write("\r\n");
    conn.write(`
		<form method="POST" action="">
		Name: <input type="text" name="name"><br>
		Message: <textarea name="content"></textarea><br>
		<button type = "submit">Submit</button>
		</form>
		<hr>
		${Array.from(msgs)
      .reverse()
      .map(
        (msg) => `
       		<div>
						<h3>${msg.name.replace(/</g, "&lt;")}<small>${new Date(
          msg.timestamp
        ).toString()}</small></h3>
						<p>${msg.content.replace(/</g, "&lt;")}</p>
					</div>
			`
      )
      .join("")}
		`); //防止写入源代码，XSS攻击

    conn.end();
  });
  conn.on("error", () => {});
});

server.listen(port, () => {
  //服务套接字监听port
  console.log("listening on port", port); //监听成功后触发的事件
});

function parseQueryString(str) {
  //name=aa&message=bb 转成对象
  return str.split("&").reduce((result, pair) => {
    var [key, val] = pair.split("=");
    result[key] = decodeURIComponent(val);
    return result;
  }, {});
}
