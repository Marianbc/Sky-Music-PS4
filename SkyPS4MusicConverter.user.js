// ==UserScript==
// @name        New script - sky-music.github.io
// @namespace   Violentmonkey Scripts
// @match       https://sky-music.github.io/songs/*
// @grant       none
// @version     1.0
// @author      -
// @description 5/2/2023, 8:23:23 PM
// ==/UserScript==

function htmlToElement(html) {
  var template = document.createElement('template');
  html = html.trim();
  template.innerHTML = html;
  return template.content.firstChild;
}

function loopThroughDivs(nodee) {
  console.log(nodee);
  divs = nodee.childnodes;
  console.log(divs);
  divs.forEach(div => {
    try{
      console.log(div);
    }
    catch(err){
      console.log(err.message)
    }
    loopThroughDivs(div);
  })
}

console.log("yo");
const foos = document.getElementsByClassName('harp');
console.log("STARTING");

for(let i = 0; i < foos.length; i++) {
  console.log(foos[i]);
}

//input path & text to display
function addText(p, txt)
{
    var t = document.createElementNS("http://www.w3.org/2000/svg", "text");
    var b = p.getBBox();
    t.setAttribute("transform", "translate(" + 13 + " " + 65 + ")");// + (b.x + b.width/2) + " " + (b.y + b.height/2) + ")");
    t.textContent = txt;
    //t.setAttribute("fill", "red");
    t.setAttribute("font-size", "50");
    p.parentNode.insertBefore(t, p.nextSibling);
}

/*
<tr>
<td>L2
</td>
<td>R2
</td>
<td>D▼
</td>
<td>×
</td>
<td>D◀
</td></tr>
<tr>
<td>□
</td>
<td>D▲
</td>
<td>△
</td>
<td>D▶
</td>
<td>○
</td></tr>
<tr>
<td>L1
</td>
<td>R1
</td>
<td>L◀
</td>
<td>R◀
</td>
<td>L▶
</td></tr>
*/

for(const foo of foos){

for (const child of foo.children) {
  console.log(child.tagName);
  console.log(child);
  //loopThroughDivs(child);
  TRCount = 0;
  for (const TR of child.children) {
    TRCount = TRCount + 1;
    console.log("TRs" + TRCount);
    console.log(TR);
    console.log(TR.children.length);
    TDCount = 0;
    for (const note of TR.children) {
      TDCount = TDCount + 1;
      console.log("TDs" + TDCount);
      console.log(note);
      console.log(!(note.children[0].classList[0] == "OFF"));
      //console.log(note.children[0]);
      //console.log(note.children[0].children[0]);
      if (!(note.children[0].classList[0] == "OFF")) {
        //console.log(note.children[0].children.length);
        //console.log(note.children[0].children[0]);
        //console.log(note.children[0].children[1]);
        //console.log(note.children[0].children[2]);


        //addText(,"LR");
        switch(TRCount) {
          case 1:
            switch(TDCount) {
              case 1:
                try{
                  note.children[0].removeChild(note.children[0].children[1]);
                  note.children[0].removeChild(note.children[0].children[1]);
                  addText(note.children[0].children[0],"L2");
                } catch(err){
                  console.log(err.message);
                }
                break;
              case 2:
                try{
                  note.children[0].removeChild(note.children[0].children[1]);
                  addText(note.children[0].children[0],"R2");
                } catch(err){
                  console.log(err.message);
                }
                break;
              case 3:
                try{
                  note.children[0].removeChild(note.children[0].children[1]);
                  addText(note.children[0].children[0],"D▼");
                } catch(err){
                  console.log(err.message);
                }
                break;
              case 4:
                try{
                  note.children[0].removeChild(note.children[0].children[1]);
                  addText(note.children[0].children[0],"X");
                } catch(err){
                  console.log(err.message);
                }
                break;
              case 5:
                try{
                  note.children[0].removeChild(note.children[0].children[1]);
                  addText(note.children[0].children[0],"D◀");
                } catch(err){
                  console.log(err.message);
                }
                break;

              default:
                console.log("broken irreprebly 1");
            }
            break;
          case 2:
            switch(TDCount) {
              case 1:
                try{
                  note.children[0].removeChild(note.children[0].children[1]);
                  addText(note.children[0].children[0],"□");
                } catch(err){
                  console.log(err.message);
                }
                break;
              case 2:
                try{
                  note.children[0].removeChild(note.children[0].children[1]);
                  addText(note.children[0].children[0],"D▲");
                } catch(err){
                  console.log(err.message);
                }
                break;
              case 3:
                try{
                  note.children[0].removeChild(note.children[0].children[1]);
                  //console.log(note.children[0].children[1]);
                  note.children[0].removeChild(note.children[0].children[1]);
                  //console.log("WRITING");
                  addText(note.children[0].children[0],"△");
                } catch(err){
                  console.log(err.message);
                }
                break;
              case 4:
                try{
                  note.children[0].removeChild(note.children[0].children[1]);
                  addText(note.children[0].children[0],"D▶");
                } catch(err){
                  console.log(err.message);
                }
                break;
              case 5:
                try{
                  note.children[0].removeChild(note.children[0].children[1]);
                  addText(note.children[0].children[0],"○");
                } catch(err){
                  console.log(err.message);
                }
                break;

              default:
                console.log("broken irreprebly 2");
            }
            break;
          case 3:
            switch(TDCount) {
              case 1:
                try{
                  note.children[0].removeChild(note.children[0].children[1]);
                  addText(note.children[0].children[0],"L1");
                } catch(err){
                  console.log(err.message);
                }
                break;
              case 2:
                try{
                  note.children[0].removeChild(note.children[0].children[1]);
                  addText(note.children[0].children[0],"R1");
                } catch(err){
                  console.log(err.message);
                }
                break;
              case 3:
                try{
                  note.children[0].removeChild(note.children[0].children[1]);
                  addText(note.children[0].children[0],"L◀");
                } catch(err){
                  console.log(err.message);
                }
                break;
              case 4:
                try{
                  note.children[0].removeChild(note.children[0].children[1]);
                  addText(note.children[0].children[0],"R◀");
                } catch(err){
                  console.log(err.message);
                }
                break;
              case 5:
                try{
                  note.children[0].removeChild(note.children[0].children[1]);
                  //console.log(note.children[0].children[1]);
                  note.children[0].removeChild(note.children[0].children[1]);
                  //console.log("WRITING");
                  addText(note.children[0].children[0],"L▶");
                } catch(err){
                  console.log(err.message);
                }
                break;

              default:
                console.log("broken irreprebly 3");
            }
            break;
          default:
            console.log("Something broke horribly");
        }
      };
    }
    //for(let i = 0; i < TR.children.length; i++) {
    //  console.log(TR.children[i]);
    //}
  }
}
}
//loopThroughDivs(foos[1]);

//console.log(foos[1]);