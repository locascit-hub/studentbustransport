const bNo=new URLSearchParams(window.location.search).get('bNo');
const iframe=document.querySelector('iframe');
if(bNo){
  iframe.src=`http://10.101.66.88:5000/route-detail/${bNo}`;
}
else{
  iframe.src=`http://10.101.66.88:5000/route-detail/63`;
}