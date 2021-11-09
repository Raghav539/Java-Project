const box=document.getElementById("box");
const title=document.getElementById("title");
const image=document.getElementById("image");
const tab_switcher = document.getElementById("tab-switcher");

const list = new Linkedlist();

const data =[
    {title: "Chrome",value:"This is a window that contains chrome",url:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202110/Google-Chrome-Update-auf-Versi_1200x768.jpeg?a_rd.cQXtPUDzh3CjoyEhmnmmT87YhTa&size=770:433"},
    {title: "VS Code",value:"This is a window that contains VS Code",url:"https://cdn.freebiesupply.com/logos/large/2x/visual-studio-code-logo-png-transparent.png"},
    {title: "Sublime",value:"This is a window that contains Sublime text 2",url:"https://upload.wikimedia.org/wikipedia/en/d/d2/Sublime_Text_3_logo.png"},
    {title: "Final Cut",value:"This is a window that contains Final Cut Pro X",url:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/finalcutx-vl?wid=1024&hei=1024&fmt=jpeg&qlt=95&.v=0"},
    {title: "Photos",value:"This is a window that contains Photos",url:"https://www.xda-developers.com/files/2020/06/new-google-photos-logo-1024x672.jpg"},
    {title: "Calendar",value:"This is a window that contains Calendar",url:"https://www.pngkey.com/png/detail/236-2367048_logo-calendar-calendar-icon-png-blue.png"},
    {title: "Maps",value:"This is a window that contains Maps",url:"https://cdn.vox-cdn.com/thumbor/Sk0PlZgKCM6p3YS_4sMW2h6xVlQ=/1400x1050/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19700731/googlemaps.png"}
];

for(let i in data)
list.add({id:i});

tab_switcher.hidden = true;
let tabbable = false;

let point,children,offset;
setState();
document.addEventListener('keydown', function(e){
    console.log(e);
    if(e.key==="Control"){
    tabbable=true;
    point=list.head;}

    if(e.key==='a' && tabbable){
        tab_switcher.hidden=false;
        children[offset].classList.remove("sel");
        if(!point.next){//end of our list
            point=list.head;
            offset=0;}
            else{
                point=point.next;
                offset++;
            }
            children[offset].classList.add("sel");
    }
});
document.addEventListener("keyup",function(e){
    if(e.key==="Control"){
        tabbable=false;
        list.move_to_front(point);
        tab_switcher.hidden=true;
        setState();
    }
})
function setState(){
    image.src=data[list.head.content.id].url;
    title.innerHTML=data[list.head.content.id].title;
    box.innerHTML=data[list.head.content.id].value;

    tab_switcher.innerHTML ="";
    for(let n=list.head; !!n;n=n.next)
    tab_switcher.innerHTML += `<li class="list-group-item"><img src="${data[n.content.id].url}"><p>${data[n.content.id].title}</p></li>`;
    children = tab_switcher.childNodes;
    children[0].classList.add("sel");
    offset=0;

}