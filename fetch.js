// index.js
// 获取数据
fetch('http://jsonplaceholder.typicode.com/posts/1')
.then((res) => res.json())
.then((data) => {
	console.log(data)
})
