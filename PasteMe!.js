/*

再ダウンロードするときはリロードしてから実行してね。

*/

const m=window.confirm("連番DLしますか？\n(なぜかJPGはできないです)");
let c=0;
const i=document.getElementsByTagName('img');
const p=()=>{
	let d = document.createElement('a');
	d.download = m ? "DL_"+(('00' + c).slice(-3)) : i[c].src.split("/").pop();
	d.href = i[c].src;
	document.body.appendChild(d);
	d.click();
	document.body.removeChild(d);
}
const t=setInterval(
	()=>{
		c++;
		if(c>=i.length){clearInterval(t);return;}
		p();
	}
,2000);