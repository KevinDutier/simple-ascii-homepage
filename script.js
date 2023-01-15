let dt = new Date();
let time = document.querySelector(".datetime"); 

time.innerHTML = (("0"+dt.getDate()).slice(-2)) +"."+ (("0"+(dt.getMonth()+1)).slice(-2)) +"."+ (dt.getFullYear()) +"&nbsp; - &nbsp;"+ (("0"+dt.getHours()).slice(-2)) +":"+ (("0"+dt.getMinutes()).slice(-2));

// updates time every 5 seconds
setInterval(() => {
    let d = new Date();
    time.innerHTML = (("0"+d.getDate()).slice(-2)) +"."+ (("0"+(d.getMonth()+1)).slice(-2)) +"."+ (d.getFullYear()) +"&nbsp; - &nbsp;"+ (("0"+d.getHours()).slice(-2)) +":"+ (("0"+d.getMinutes()).slice(-2));
}, 5_000);
