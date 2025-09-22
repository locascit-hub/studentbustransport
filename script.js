const bNo=new URLSearchParams(window.location.search).get('bNo');
const iframe=document.querySelector('iframe');
if(bNo){
  iframe.src=`https://dev-cit-locas-transport.vercel.app/route-detail/${bNo}`;
}
else{
  iframe.src=`https://dev-cit-locas-transport.vercel.app/route-detail/63`;
}
