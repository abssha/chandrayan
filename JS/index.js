document.body.id="u_body";

//creating haedaer element and styling it
var h=document.createElement('header');
h.innerHTML="Header";

h.className="common";
//appending header to body
document.getElementById('u_body').append(h);

//creating and styling nav element
var n=document.createElement('nav');
n.innerHTML="NavBar";
n.style.marginTop="10px";

n.className="common"
//appending nav to body
document.getElementById('u_body').append(n);

//creating aside & section elements
var as1=document.createElement('aside');
as1.innerHTML="Aside1";
as1.className="display"
as1.style.width="24%";

var sec=document.createElement('section');
sec.innerHTML="Section";
sec.className="display"
sec.style.width="48.6%";

var as2=document.createElement('aside');
as2.innerHTML="Aside2";
as2.className="display"
as2.style.width="24%";

//appending aside & section to body
document.getElementById('u_body').append(as1);
document.getElementById('u_body').append(sec);
document.getElementById('u_body').append(as2);

//styling aside & section elements
var arr=document.querySelectorAll('.display');
arr.forEach(function(currentValue, index, arr)
{
    arr[index].style.display="inline-block";
    arr[index].style.textAlign="center";
    arr[index].style.border="1px solid #000";
    arr[index].style.margin="10px 2px";
    arr[index].style.height="390px";
    arr[index].style.lineHeight="300px";
    arr[index].style.color="green";
});

//creating footer
let f=document.createElement('footer');
f.innerHTML="footer";

f.setAttribute('class','common');
//appending footer to body
document.body.appendChild(f);

var cc=document.querySelectorAll('.common');

//further styles for header, nav, footer
for(c of cc)
{
    c.style.color="green";
    c.style.height="100px";
    c.style.width="100%";
    c.style.border="1px solid #000";
    c.style.lineHeight="100px";
    c.style.textAlign="center";
}