const bNo=new URLSearchParams(window.location.search).get('bNo');
const iframe=document.querySelector('iframe');
if(bNo){
  iframe.src=`https://cit-locas-transport-dev-locascit-hubs-projects.vercel.app/route-detail/${bNo}`;
}
else{
  iframe.src=`https://cit-locas-transport-dev-locascit-hubs-projects.vercel.app/route-detail/63`;
}
