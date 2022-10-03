let temps=document.getElementsByClassName('ham-links');
let x=0;

document.getElementById('ham').addEventListener("click",function(){
  if(x===1) x=0;
  else x=1;
  console.log("hi");
  toggle();
});

function toggle(){
  if(x===1)
  for (let temp of temps) {
    temp.classList.add('ham-links-show');
  }

  else
  for (let temp of temps) {
    temp.classList.remove('ham-links-show');
  }
}
// temp.classList.add('ham-links-show');
