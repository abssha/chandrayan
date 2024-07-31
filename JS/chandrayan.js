//giving id to body
document.body.id="u_body";
document.body.style.fontFamily="Raleway"

//creating header & navbar
var head=document.createElement('header');

var image=document.createElement('img');
image.setAttribute('src','./IMG/isro.png');
image.setAttribute('width','80');

var nav=document.createElement('nav');
var an_1=document.createElement('a');
var an_2=document.createElement('a');
var an_3=document.createElement('a');
var an_4=document.createElement('a');
var an_5=document.createElement('a');

an_1.innerHTML="Home";
an_2.innerHTML="Technologies";
an_3.innerHTML="South Pole";
an_4.innerHTML="Gallery";
an_5.innerHTML="About Us";

an_1.setAttribute('href','#');
an_2.setAttribute('href','#');
an_3.setAttribute('href','#');
an_4.setAttribute('href','#');
an_5.setAttribute('href','#');

an_1.className="nav-cc";
an_2.className="nav-cc";
an_3.className="nav-cc";
an_4.className="nav-cc";
an_5.className="nav-cc";

nav.append(an_1);
nav.append(an_2);
nav.append(an_3);
nav.append(an_4);
nav.append(an_5);
head.append(image);
head.append(nav);
document.body.append(head);

//styling 
head.style.height="65px";
head.style.width="100%";
head.style.background="#04396C";
head.style.position="relative";

image.style.display="inline-block";
image.style.paddingLeft="120px";
image.style.paddingTop="4px";

nav.style.display="inline-block";
nav.style.position="absolute";
nav.style.left="150px"
nav.style.top="20px";
nav.style.fontWeight="500";

var cc=document.querySelectorAll('.nav-cc');

for(c of cc)
{
    c.style.paddingLeft="270px";
    c.style.textDecoration="none";
    c.style.color="#fff";
    c.style.fontSize="17px";
}

cc[0].addEventListener('mouseover',function()
{
    cc[0].style.textDecoration="underline";
    cc[0].style.color="#B3ADAC";
});
cc[0].addEventListener('mouseout',function()
{
    cc[0].style.textDecoration="none";
    cc[0].style.color="#fff";
});

cc[1].addEventListener('mouseover',function()
{
    cc[1].style.textDecoration="underline";
    cc[1].style.color="#B3ADAC";
});
cc[1].addEventListener('mouseout',function()
{
    cc[1].style.textDecoration="none";
    cc[1].style.color="#fff";
});

cc[2].addEventListener('mouseover',function()
{
    cc[2].style.textDecoration="underline";
    cc[2].style.color="#B3ADAC";
});
cc[2].addEventListener('mouseout',function()
{
    cc[2].style.textDecoration="none";
    cc[2].style.color="#fff";
});

cc[3].addEventListener('mouseover',function()
{
    cc[3].style.textDecoration="underline";
    cc[3].style.color="#B3ADAC";
});
cc[3].addEventListener('mouseout',function()
{
    cc[3].style.textDecoration="none";
    cc[3].style.color="#fff";
});

cc[4].addEventListener('mouseover',function()
{
    cc[4].style.textDecoration="underline";
    cc[4].style.color="#B3ADAC";
});
cc[4].addEventListener('mouseout',function()
{
    cc[4].style.textDecoration="none";
    cc[4].style.color="#fff";
});

//creating marquee
var mar=document.createElement('marquee');
mar.setAttribute('behaviour','');
mar.setAttribute('direction','left');
mar.innerHTML="When Vikram lander of Chandrayaan-3 touched down on the Moon's surface on August 23, it kicked up a bunch of lunar dust and rocks, creating a bright area around the lander, as it was expected.";

document.body.append(mar);

//styling
mar.style.background="#98AEC4";
mar.style.margin="2px 0px";
mar.style.fontSize="16px";
mar.style.fontWeight="500";
mar.style.padding="5px";

//**********************************//
//creating main_body
var main=document.createElement('div');
var m_sec=document.createElement('sec');
var m_div=document.createElement('div');
var m_h1=document.createElement('h1');
var m_h3=document.createElement('h3');
var m_p=document.createElement('p');
var m_button=document.createElement('button');
var m_p1=document.createElement('p');
var m_p2=document.createElement('p');
var m_p3=document.createElement('p');
var m_p4=document.createElement('p');
var m_sec1=document.createElement('sec');
var m_div1=document.createElement('div');
var m_h1_2=document.createElement('h1');
var m_sec2=document.createElement('sec');
var m_sec3=document.createElement('sec');
var m_sec4=document.createElement('sec');
var m_div2=document.createElement('div');
var m_div2c=document.createElement('div');
var m_div2c1=document.createElement('div');
var m_div2_h1=document.createElement('h1');
var m_div2_p=document.createElement('p');
var m_div3c=document.createElement('div');
var m_div3c1=document.createElement('div');
var m_div3_h1=document.createElement('h1');
var m_div3_p=document.createElement('p');
var m_div4c=document.createElement('div');
var m_div4c1=document.createElement('div');
var m_div4_h1=document.createElement('h1');
var m_div4_p=document.createElement('p');
var m_div5=document.createElement('div');
var m_span1=document.createElement('span');
var m_span2=document.createElement('span');
var m_span3=document.createElement('span');
main.className="u_main";

m_h1.innerHTML="Chandrayaan-3";
m_h3.innerHTML="India's Achivement !";
m_p.innerHTML="Chandrayaan 3 Landed Successfully: The Wait is Over! Chandrayaan-3, a follow-on mission to Chandrayaan-2 has successfully soft-landed on the lunar surface. ISRO in one of its recent tweets shared the good news of Chandrayaan-3's successful soft landing on the lunar surface";
m_button.innerHTML="More info !";
m_p1.innerHTML="The spacecraft launched to the moon on July 14, 2023. at 5:05 a.m. EDT (ogo5 GMT or 2:35 p.m. tocal time July 14) from the Satish Dhawan Space Center in Sriharikota, India atop the medium-lift Launch Vehicle Mark-III (LVM3) rocket."
m_p2.innerHTML="Chandrayaan-3 successfully landed near the moon's south pole on Aug. 23. 2023. at 8:33 a.m. ET (1233 GMT or 6:03 p.m. India Standard Time). The mission is managed by the Indian Space Research Organisation (ISRO). ISRO's roots go back to the beginning of space exploration, as a predecessor agency was set up in 1962 and its first rocket launch was in 1963. ISRO itself was established in 1969"
m_p3.innerHTML="The three main objectives of Chandrayaan-3 are to land safely on the surface, to demonstrate rover operations and to perform scientific experiments on site, according to the official website. The mission called for a propulsion module to ferry the Chandrayaan-3' Vikram ('valor') lander and the solar-powered rover named Pragyan (Sanskrit for 'wisdom') rover together to the south pole of the moon, according to NASA. The module then entered lunar orbit and maneuvered into a roughly circular path about 6o miles (1oo km) above the surface. Then the lander separated from the module and aimed for a soft landing on the surface, achieving this on Aug. 23. 2023.";
m_p4.innerHTML="The lander and rover will collect science on the surface for 14 Earth days (a single day on the moon), while the propulsion module will gaze at our planet for its own science experiment. The spacecraft package (rover. lander and propulsion module) includes 'advanced technologies' to meet the mission objectives. ISRO says. Examples include hazard detection and avoidance on the rover, a landing leg mechanism to aim for a soft touchdown, and attimeters and velocity instruments to estimate altitude and speed above the moon. ISRO has performed several technology tests to simulate lunar conditions, the agency emphasized, focusing on matters such as soaking instruments in cold temperatures similar to the moon or doing a lander leg test on a simulated surface under different landing conditions."
m_h1_2.innerHTML="History of India's missions to moon";

m_div2_h1.innerHTML="Chandrayaan-1";
m_div2_p.innerHTML="Chandrayaan-1, India's first mission to Moon, was launched successfully on October 22, 2008 from SDSC SHAR, Sriharikota. The spacecraft was orbiting around the Moon at a height of 100 km from the lunar surface for chemical, mineralogical and photo-geologic mapping of the Moon. The spacecraft carried 11 scientific instruments built in India, USA, UK, Germany, Sweden and Bulgaria.";

m_div3_h1.innerHTML="Chandrayaan-2"
m_div3_p.innerHTML="The Chandrayaan-2 mission was successfully launched on 22nd July 2019 at 14:43 hrs by GSLV MkIII-M1 from Satish Dhawan Space Centre (SDSC), Sriharikota. After a series of Earth bound manoeuvres, the spacecraft entered into Lunar Transfer Trajectory (LTT) on August 14th."

m_div4_h1.innerHTML="Chandrayaan-3";
m_div4_p.innerHTML="Chandrayaan-3 is a follow-on mission to Chandrayaan-2 to demonstrate end-to-end capability in safe landing and roving on the lunar surface. It consists of Lander and Rover configuration. It will be launched by LVM3 from SDSC SHAR, Sriharikota.";

m_div2c1.innerHTML="Chandrayaan-1";
m_div3c1.innerHTML="Chandrayaan-2";
m_div4c1.innerHTML="Chandrayaan-3";

m_span1.innerHTML="Objectives of Chandrayaan 3 mission";
m_span2.innerHTML="The mission objectives of Chandrayaan-3 are: To demonstrate Safe and Soft Landing on Lunar Surface To demonstrate Rover roving on the moon and To conduct in-situ scientific experiments.";
m_span3.innerHTML="To achieve these objectives, the Lander incorporates advanced technologies such as altimeters, velocimeters, inertial measurement systems, propulsion systems, navigation and guidance systems. hazard detection and avoidance systems, and landing leg mechanisms. Goals of India's Moon Mission The primary goal of India's moon missions is to advance lunar exploration, ISRO aims to conduct scientific research and map its surface. The mission consists of three parts: the propulsion module, the lander module, and the rover. Each component plays a crucial role in enabling ISRO to accomplish its objectives."

m_div.append(m_h1);
m_div.append(m_h3);
m_div.append(m_p);
m_div.append(m_button);
m_sec.append(m_div);
m_sec1.append(m_p1);
m_sec1.append(m_p2);
m_sec1.append(m_p3);
m_sec1.append(m_p4);
m_div1.append(m_h1_2);
m_sec2.append(m_div2c);
m_sec2.append(m_div2c1);
m_div2.append(m_sec2);
m_sec3.append(m_div3c);
m_sec3.append(m_div3c1);
m_div2.append(m_sec3);
m_sec4.append(m_div4c);
m_sec4.append(m_div4c1);
m_div2.append(m_sec4);
m_div1.append(m_div2);
m_div2c.append(m_div2_h1);
m_div2c.append(m_div2_p);
m_div3c.append(m_div3_h1);
m_div3c.append(m_div3_p);
m_div4c.append(m_div4_h1);
m_div4c.append(m_div4_p);
m_div5.append(m_span1);
m_div5.append(m_span2);
m_div5.append(m_span3);
main.append(m_sec);
main.append(m_sec1);
main.append(m_div1);
main.append(m_div5);
document.body.append(main);

//style
main.style.height="2450px";

m_sec.style.display="block";
m_sec.style.margin="0px";
m_sec.style.width="100%";
m_sec.style.height="880px";
m_sec.style.background="url('./IMG/landing.jpg')";
m_sec.style.backgroundSize="contain";
m_sec.style.border="1px solid #000";

m_div.style.marginLeft="900px";
m_div.style.marginTop="220px";
m_div.style.width="800px";
m_div.style.height="500px";
m_div.style.color="#fff";

m_h1.style.fontSize="4em";
m_h1.style.margin="0px";
m_h1.style.textAlign="center";
m_h1.style.color="#F5DEB3";

m_h3.style.fontSize="2em";
m_h3.style.margin="0px";
m_h3.style.marginTop="30px";
m_h3.style.textAlign="center";
m_h3.style.textAlign="center";

m_p.style.margin="0px";
m_p.style.textAlign="center";
m_p.style.marginTop="10px";
m_p.style.fontSize="22px";
m_p.style.fontWeight="400";

m_button.style.background="transparent";
m_button.style.display="block";
m_button.style.color="#cfc5b1";
m_button.style.border="1px solid #cfc5b1";
m_button.style.borderRadius="7px";
m_button.style.padding="15px 50px";
m_button.style.margin="20px auto"
m_button.style.cursor="pointer"
m_button.style.fontSize="18px";

m_button.addEventListener('mouseover',function()
{
    m_button.style.background="#cfc5b1";
    m_button.style.color="#fff";
});
m_button.addEventListener('mouseout',function()
{
    m_button.style.background="transparent";
    m_button.style.color="#cfc5b1";
});

m_sec1.style.display="block";
m_sec1.style.marginTop="30px";
m_sec1.style.width="100%";
m_sec1.style.height="420px";
m_sec1.style.fontSize="22px";
m_sec1.style.textAlign="justify";
m_sec1.style.fontWeight="300";
m_sec1.style.color="#0d263e";

m_p1.style.margin="0px";
m_p1.style.marginLeft="10px";
m_p1.style.marginRight="10px";

m_p2.style.margin="0px";
m_p2.style.marginTop="10px";
m_p2.style.marginLeft="10px";
m_p2.style.marginRight="10px";

m_p3.style.margin="0px";
m_p3.style.marginTop="40px";
m_p3.style.marginLeft="10px";
m_p3.style.marginRight="10px";

m_p4.style.margin="0px";
m_p4.style.marginTop="40px";
m_p4.style.marginLeft="10px";
m_p4.style.marginRight="10px";

m_div1.style.width="100%";
m_div1.style.height="700px";
m_div1.style.marginTop="30px";
m_div1.style.boxShadow="0px 0px 2px 2px rgba(0,0,0,0.1)"; 
m_div1.style.background="#fffcf6"; 

m_h1_2.style.margin="0px";
m_h1_2.style.fontSize="40px";
m_h1_2.style.fontWeight="500";
m_h1_2.style.textAlign="center";
m_h1_2.style.paddingTop="40px";
m_h1_2.style.textShadow="1px 1px 2px rgba(0,0,0,0.6)";

m_div2.style.height="400px";
m_div2.style.maxWidth="100%";
m_div2.style.margin="0px";
m_div2.style.marginTop="50px";
m_div2.style.padding="20px" 

m_sec2.style.width="620px";
m_sec2.style.height="100%";
m_sec2.style.borderRadius="10px";
m_sec2.style.boxShadow="0px 0px 8px 8px rgba(0,0,0,0.1)";
m_sec2.style.display="inline-block";
m_sec2.style.background="url('./IMG/c1.jpeg')";
m_sec2.style.backgroundRepeat="no-repeat";
m_sec2.style.backgroundSize="cover";
m_sec2.style.position="relative";
m_sec2.style.overflow="hidden";

m_div2c.style.position="absolute";
m_div2c.style.height="320px";
m_div2c.style.maxWidth="620px";
m_div2c.style.borderRadius="10px";
m_div2c.style.background="rgba(0,0,0,0.5)";
m_div2c.style.color="#fff";
m_div2c.style.padding="40px";
m_div2c.style.top="-400px";
m_div2c.style.transition="top 0.3s ease-in-out";

m_div2c1.style.position="absolute";
m_div2c1.style.bottom="0";
m_div2c1.style.height="400px";
m_div2c1.style.width="620px";
m_div2c1.style.borderRadius="10px";
m_div2c1.style.background="rgba(0,0,0,0.5)";
m_div2c1.style.color="#F5DEB3";
m_div2c1.style.textAlign="center";
m_div2c1.style.lineHeight="400px";
m_div2c1.style.fontSize="40px";
m_div2c1.style.transition="bottom 0.3s ease-in-out";

m_div2_h1.style.textAlign="center";

m_div2_p.style.textAlign="center";
m_div2_p.style.fontSize="20px";

m_sec2.addEventListener('mouseover',function()
{
    m_div2c1.style.bottom="-400px";
});
m_sec2.addEventListener('mouseout',function()
{
    m_div2c1.style.bottom="0px";
});
m_sec2.addEventListener('mouseover',function()
{
    m_div2c.style.top="0";
});
m_sec2.addEventListener('mouseout',function()
{
    m_div2c.style.top="-400px";
});

m_sec3.style.width="620px";
m_sec3.style.height="100%";
m_sec3.style.borderRadius="10px";
m_sec3.style.boxShadow="0px 0px 8px 8px rgba(0,0,0,0.1)";
m_sec3.style.display="inline-block";
m_sec3.style.marginLeft="50px";
m_sec3.style.background="url('./IMG/c2.jpeg')";
m_sec3.style.backgroundRepeat="no-repeat";
m_sec3.style.backgroundSize="cover";
m_sec3.style.position="relative";
m_sec3.style.overflow="hidden";

m_div3c.style.position="absolute";
m_div3c.style.height="320px";
m_div3c.style.maxWidth="620px";
m_div3c.style.borderRadius="10px";
m_div3c.style.background="rgba(0,0,0,0.5)";
m_div3c.style.color="#fff";
m_div3c.style.padding="40px";
m_div3c.style.bottom="-400px";
m_div3c.style.transition="bottom 0.3s ease-in-out";

m_div3c1.style.position="absolute";
m_div3c1.style.top="0";
m_div3c1.style.height="400px";
m_div3c1.style.width="620px";
m_div3c1.style.borderRadius="10px";
m_div3c1.style.background="rgba(0,0,0,0.5)";
m_div3c1.style.color="#F5DEB3";
m_div3c1.style.textAlign="center";
m_div3c1.style.lineHeight="400px";
m_div3c1.style.fontSize="40px";
m_div3c1.style.transition="top 0.3s ease-in-out";

m_div3_h1.style.textAlign="center";

m_div3_p.style.textAlign="center";
m_div3_p.style.fontSize="20px";

m_sec3.addEventListener('mouseover',function()
{
    m_div3c1.style.top="-400px";
});
m_sec3.addEventListener('mouseout',function()
{
    m_div3c1.style.top="0px";
});
m_sec3.addEventListener('mouseover',function()
{
    m_div3c.style.bottom="0";
});
m_sec3.addEventListener('mouseout',function()
{
    m_div3c.style.bottom="-400px";
});

m_sec4.style.width="620px";
m_sec4.style.height="100%";
m_sec4.style.borderRadius="10px";
m_sec4.style.boxShadow="0px 0px 8px 8px rgba(0,0,0,0.1)";
m_sec4.style.display="inline-block";
m_sec4.style.marginLeft="50px";
m_sec4.style.background="url('./IMG/c3.jpeg')";
m_sec4.style.backgroundRepeat="no-repeat";
m_sec4.style.backgroundSize="cover";
m_sec4.style.position="relative";
m_sec4.style.overflow="hidden";

m_div4c.style.position="absolute";
m_div4c.style.height="400px";
m_div4c.style.maxWidth="620px";
m_div4c.style.borderRadius="10px";
m_div4c.style.background="rgba(0,0,0,0.5)";
m_div4c.style.color="#fff";
m_div4c.style.left="-620px";
m_div4c.style.transition="left 0.4s ease-in-out";

m_div4c1.style.position="absolute";
m_div4c1.style.right="0";
m_div4c1.style.height="400px";
m_div4c1.style.width="620px";
m_div4c1.style.borderRadius="10px";
m_div4c1.style.background="rgba(0,0,0,0.5)";
m_div4c1.style.color="#F5DEB3";
m_div4c1.style.textAlign="center";
m_div4c1.style.lineHeight="400px";
m_div4c1.style.fontSize="40px";
m_div4c1.style.transition="right 0.4s ease-in-out";

m_div4_h1.style.textAlign="center";
m_div4_h1.style.marginTop="60px";

m_div4_p.style.textAlign="center";
m_div4_p.style.fontSize="20px";
m_div4_p.style.margin="40px";

m_sec4.addEventListener('mouseover',function()
{
    m_div4c1.style.right="-620px";
});
m_sec4.addEventListener('mouseout',function()
{
    m_div4c1.style.right="0px";
});
m_sec4.addEventListener('mouseover',function()
{
    m_div4c.style.left="0";
});
m_sec4.addEventListener('mouseout',function()
{
    m_div4c.style.left="-620px";
});

m_div5.style.height="350px";
m_div5.style.width="100%";
m_div5.style.marginTop="20px";
m_div5.style.boxShadow="0px 0px 2px 2px rgba(0,0,0,0.1)";
m_div5.style.background="#f3f3f3";

m_span1.style.display="block";
m_span1.style.fontSize="40px";
m_span1.style.textAlign="center";
m_span1.style.fontWeight="400";
m_span1.style.paddingTop="50px";
m_span1.style.textShadow="1px 1px 2px rgba(0,0,0,0.6)";

m_span2.style.display="block";
m_span2.style.fontSize="23px";
m_span2.style.margin="20px 40px";
m_span2.style.textAlign="center";
m_span2.style.fontWeight="500";
m_span2.style.fontStyle="italic";

m_span3.style.display="block";
m_span3.style.fontSize="20px";
m_span3.style.margin="20px 40px";

//**********************************//
//creating footer
var foot=document.createElement('footer');
var f_div1=document.createElement('div');
var f_div2=document.createElement('div');

var f_sec1=document.createElement('sec');
var f_sec2=document.createElement('sec');
var f_sec3=document.createElement('sec');
var f_sec4=document.createElement('sec');
var f_sec5=document.createElement('sec');

var f_h3_1=document.createElement('h3');
var f_h3_2=document.createElement('h3');
var f_h3_3=document.createElement('h3');

var f_a1=document.createElement('a');
var f_a2=document.createElement('a');
var f_a3=document.createElement('a');

var f_span1=document.createElement('span');
var f_span2=document.createElement('span');

var f_span3=document.createElement('span');
var f_span4=document.createElement('span');

var f_hr=document.createElement('hr');
var f_span5=document.createElement('span');

f_h3_1.innerHTML="Useful Links";
f_a1.innerHTML="1. Tech Page";
f_a2.innerHTML="2. Gallery Page";
f_a3.innerHTML="3. Isro's Site";

f_h3_2.innerHTML="About Us";
f_span1.innerHTML="The Indian Space Research Organisation is the national space agency of India.";
f_span2.innerHTML="It operates as the primary research and development arm of the Department of Space (DoS).";

f_h3_3.innerHTML="Contact Us";
f_span3.innerHTML="ISRO Headquarters, Antariksh Bhavan, New BEL Road Bengaluru-560 094";
f_span4.innerHTML="Phone: +91 80 22172294 / 96 Email: isropr[at]isro[dot]gov[dot]in";

f_span5.innerHTML="© 2024 Chandrayaa-3 Project";

f_a1.setAttribute('href','#');
f_a2.setAttribute('href','#');
f_a3.setAttribute('href','https://www.isro.gov.in/');
f_a3.setAttribute('target','blank');

f_sec2.append(f_h3_1);
f_sec2.append(f_a1);
f_sec2.append(f_a2);
f_sec2.append(f_a3);

f_sec3.append(f_h3_2);
f_sec3.append(f_span1);
f_sec3.append(f_span2);

f_sec4.append(f_h3_3);
f_sec4.append(f_span3);
f_sec4.append(f_span4);

f_div2.append(f_hr);
f_div2.append(f_span5);

f_div1.append(f_sec1);
f_div1.append(f_sec2);
f_div1.append(f_sec3);
f_div1.append(f_sec4);
f_div1.append(f_sec5);

foot.append(f_div1);
foot.append(f_div2);
document.body.append(foot);

//styling
foot.style.width="100%";
foot.style.height="385px";
foot.style.background="#04396C";
foot.style.boxShadow="0px 0px 5px 5px rgba(0,0,0,0.1)"; 

f_div1.style.height="320px";
f_div1.style.maxWidth="100%";
f_div1.style.margin="0px 200px";
f_div1.style.position="relative";

f_sec1.style.height="320px";
f_sec1.style.width="300px";
f_sec1.style.display="inline-block";
f_sec1.style.background="url('./IMG/isro.png')";
f_sec1.style.backgroundRepeat="no-repeat";
f_sec1.style.backgroundSize="200px 150px";
f_sec1.style.backgroundPosition="70px 20px";

f_sec2.style.height="320px";
f_sec2.style.width="300px";
f_sec2.style.display="inline-block";
f_sec2.style.color="#fff";
f_sec2.style.position="absolute";
f_sec2.style.textAlign="center";

f_sec3.style.height="320px";
f_sec3.style.width="300px";
f_sec3.style.display="inline-block";
f_sec3.style.color="#fff";
f_sec3.style.position="absolute";
f_sec3.style.textAlign="center";
f_sec3.style.left="610px";

f_sec4.style.height="320px";
f_sec4.style.width="300px";
f_sec4.style.display="inline-block";
f_sec4.style.color="#fff";
f_sec4.style.position="absolute";
f_sec4.style.textAlign="center";
f_sec4.style.left="950px";

f_sec5.style.height="320px";
f_sec5.style.width="300px";
f_sec5.style.display="inline-block";
f_sec5.style.background="url('./IMG/satya.png')";
f_sec5.style.backgroundRepeat="no-repeat";
f_sec5.style.backgroundSize="200px 150px";
f_sec5.style.backgroundPosition="30px 20px";
f_sec5.style.position="absolute";
f_sec5.style.left="1250px";

f_h3_1.style.fontSize="30px";
f_h3_1.style.margin="0px";
f_h3_1.style.margin="30px 0px";

f_a1.style.display="block";
f_a1.style.fontSize="23px";
f_a1.style.color="#fff";
f_a1.style.textDecoration="none";

f_a2.style.display="block";
f_a2.style.fontSize="23px";
f_a2.style.marginTop="10px";
f_a2.style.color="#fff";
f_a2.style.textDecoration="none";

f_a3.style.display="block";
f_a3.style.fontSize="23px";
f_a3.style.marginTop="10px";
f_a3.style.color="#fff";
f_a3.style.textDecoration="none";

f_h3_2.style.fontSize="30px";
f_h3_2.style.margin="0px";
f_h3_2.style.margin="30px 0px";

f_span1.style.display="block";
f_span1.style.fontSize="20px";

f_span2.style.display="block";
f_span2.style.fontSize="20px";
f_span2.style.margin="8px 8px";

f_h3_3.style.fontSize="30px";
f_h3_3.style.margin="0px";
f_h3_3.style.margin="30px 0px";

f_span3.style.display="block";
f_span3.style.fontSize="20px";

f_span4.style.display="block";
f_span4.style.fontSize="20px";
f_span4.style.margin="8px 8px";

f_div2.style.height="60px";
f_div2.style.width="100%";

f_hr.style.margin="0px 20px";

f_span5.style.display="block";
f_span5.style.color="#fff";
f_span5.style.fontSize="20px";
f_span5.style.textAlign="center";
f_span5.style.lineHeight="50px";