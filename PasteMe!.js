/*

再ダウンロードするときはリロードしてから実行してね。

*/

let c=0;
const i=document.getElementsByTagName('img');
const p=()=>{
	let d = document.createElement('a');
	d.download = "DL_"+(('00' + c).slice(-3));
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
,1000);