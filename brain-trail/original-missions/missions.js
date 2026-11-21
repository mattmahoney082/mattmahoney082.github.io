/* Unit 3 and Unit 4 teacher-led missions. Mathematical diagrams are deliberately word-free. */
(function(root){
"use strict";
const metadata=[
  {
    "unit": 3,
    "id": "one-more-stair",
    "iso": "2026-10-13",
    "date": "Tue 13 Oct 2026",
    "source": "Bluebonnet Kindergarten Math Module 1, Lessons 30–31",
    "preferred": 10,
    "focus": "one more is the next number",
    "name": "One More Stair",
    "summary": "Watch the stairs grow and show how many are on the next step.",
    "grows": "This grows out of Baby Bear’s stairs, where the room built cube stairs that go up by one and said “3. One more is 4” at every step.",
    "steps": [
      "Look at the step on the board and count it.",
      "Show the next step — one more — with cubes, fingers or a number card.",
      "Tap Reveal and say it together: “4. One more is 5.”"
    ],
    "materials": "Linking cubes, fingers, number cards 1 to 10, or a device"
  },
  {
    "unit": 3,
    "id": "which-towers-are-hiding",
    "iso": "2026-10-15",
    "date": "Thu 15 Oct 2026",
    "source": "Bluebonnet Kindergarten Math Module 1, Lessons 32–33",
    "preferred": 10,
    "focus": "one more, one less",
    "name": "Which Towers Are Hiding?",
    "summary": "Some towers in the stairs are hiding — show which numbers are missing.",
    "grows": "This grows out of the hidden towers, where the room closed its eyes while towers were taken out of the 1-to-10 stairs and worked out which were gone, then took cubes off a ten one at a time.",
    "steps": [
      "Look at the stairs and find the gap.",
      "Show the missing number with a tower, fingers, a number card or by pointing.",
      "Tap Reveal, then say the numbers one more and one less than it."
    ],
    "materials": "Linking cube towers 1 to 10, number cards 1 to 10, fingers, or a device"
  },
  {
    "unit": 3,
    "id": "down-the-stairs",
    "iso": "2026-10-19",
    "date": "Mon 19 Oct 2026",
    "source": "Bluebonnet Kindergarten Math Module 1, Lessons 34–35",
    "preferred": 10,
    "focus": "one less is the step below",
    "name": "Down the Stairs",
    "summary": "See the step and show the one below it — one less.",
    "grows": "This grows out of Baby Bear going down the stairs, where the room took one cube at a time off a stair of ten and said “10. One less is 9” at every step.",
    "steps": [
      "Look at the stair on the board and count it.",
      "Show the stair below it — one less — with cubes, fingers or a number card.",
      "Tap Reveal and say it together: “6. One less is 5.”"
    ],
    "materials": "Linking cube stairs, fingers, number cards 0 to 10, or a device"
  },
  {
    "unit": 3,
    "id": "before-and-after",
    "iso": "2026-10-21",
    "date": "Wed 21 Oct 2026",
    "source": "Teacher-created review of Bluebonnet Kindergarten Math Module 1, Topics E–H",
    "preferred": 10,
    "focus": "the number before and the number after",
    "name": "Before and After",
    "summary": "Look at the tower and show the number just before it or just after it.",
    "grows": "This grows out of the one more, one less echo, where the room held up a card and said “I have 5. One more is 6” and “5. One less is 4.”",
    "steps": [
      "Look at the tower and the arrow — up means one more, down means one less.",
      "Show the number just after or just before it with cubes, fingers or a number card.",
      "Tap Reveal and say it together: “7. One more is 8.”"
    ],
    "materials": "Linking cubes, number cards 0 to 10, fingers, or a device"
  },
  {
    "unit": 3,
    "id": "triangle-hunt",
    "iso": "2026-10-23",
    "date": "Fri 23 Oct 2026",
    "source": "Bluebonnet Kindergarten Math Module 2, Lessons 1–2",
    "preferred": 5,
    "focus": "three straight sides, three corners, closed",
    "name": "Triangle Hunt",
    "summary": "Find every triangle in the picture and show how many.",
    "grows": "This grows out of the Triangle and Not a Triangle graph, where the room counted straight sides and corners and checked each shape was closed before it went in a column.",
    "steps": [
      "Look at every shape in the picture and find the triangles.",
      "Show how many triangles with fingers, a number card or by pointing.",
      "Tap Reveal, watch each triangle light up, and count them together."
    ],
    "materials": "Fingers, number cards 0 to 10, a whiteboard to draw a triangle, or a device"
  },
  {
    "unit": 3,
    "id": "rectangle-and-circle-hunt",
    "iso": "2026-10-27",
    "date": "Tue 27 Oct 2026",
    "source": "Bluebonnet Kindergarten Math Module 2, Lessons 3–4",
    "preferred": 5,
    "focus": "square corners, or no corners at all",
    "name": "Rectangle and Circle Hunt",
    "summary": "Find the rectangles, or the circles, and show how many.",
    "grows": "This grows out of the Rectangle and Circle picture graphs, where the room sorted shapes by four straight sides and square corners, then by round, closed and no corners.",
    "steps": [
      "Look at the small shape at the top: today we hunt rectangles, or circles.",
      "Show how many are in the picture with fingers, a number card or by pointing.",
      "Tap Reveal, watch each one light up, and count them together."
    ],
    "materials": "Fingers, number cards 0 to 10, a whiteboard to draw the shape, or a device"
  },
  {
    "unit": 3,
    "id": "how-many-faces",
    "iso": "2026-10-29",
    "date": "Thu 29 Oct 2026",
    "source": "Bluebonnet Kindergarten Math Module 2, Lessons 5–6",
    "preferred": 10,
    "focus": "a face is a flat part you can trace",
    "name": "How Many Faces?",
    "summary": "Look at the solid and show how many flat faces it has.",
    "grows": "This grows out of Face or No Face, where the room touched and counted the flat faces of a cone, a cylinder and a cube, and found that a sphere has none.",
    "steps": [
      "Look at the solid on the board and find its flat faces.",
      "Show how many faces with fingers, a number card, or by holding up the same solid.",
      "Tap Reveal, watch each face light up, and count them together."
    ],
    "materials": "A ball, a cube, a capped marker, a Play-Doh cone, fingers, number cards 0 to 10, or a device"
  },
  {
    "unit": 3,
    "id": "flat-or-solid",
    "iso": "2026-11-02",
    "date": "Mon 2 Nov 2026",
    "source": "Bluebonnet Kindergarten Math Module 2, Lessons 7–8",
    "preferred": 5,
    "focus": "flat lies down, solid stands up",
    "name": "Flat or Solid?",
    "summary": "Look at the table and show how many things are solid.",
    "grows": "This grows out of Bird and Ant, where the room looked across the desks and saw that the solids stood up while the flat card and the drawings disappeared, then sorted flat from solid.",
    "steps": [
      "Look at everything on the table, whichever way it is turned.",
      "Show how many are solid with fingers, a number card, or by holding up the matching solid.",
      "Tap Reveal, watch each solid stand up, and count them together."
    ],
    "materials": "A ball, a cube, a capped marker, a Play-Doh cone, a flat card, fingers, number cards 0 to 10, or a device"
  },
  {
    "unit": 3,
    "id": "still-the-same-shape",
    "iso": "2026-11-04",
    "date": "Wed 4 Nov 2026",
    "source": "Teacher-created review of Bluebonnet Kindergarten Math Module 2, Topics A–C",
    "preferred": 5,
    "focus": "turn it or flip it, it is still the same shape",
    "name": "Still the Same Shape",
    "summary": "Find every shape that matches the one at the top, however it is turned.",
    "grows": "This grows out of the Triangle, Rectangle and Circle graph and Guess My Rule, where triangles pointing down, squares turned sideways and cones upside down kept their names.",
    "steps": [
      "Look at the shape at the top.",
      "Show how many shapes below are the same shape, however they are turned.",
      "Tap Reveal, watch each one turn back to match, and count them together."
    ],
    "materials": "A ball, a cube, a capped marker, a Play-Doh cone, fingers, number cards 0 to 10, or a device"
  },
  {
    "unit": 3,
    "id": "picture-graph-count",
    "iso": "2026-11-06",
    "date": "Fri 6 Nov 2026",
    "source": "Teacher-created: our four weeks of observations",
    "preferred": 5,
    "focus": "count each column, then compare",
    "name": "Picture Graph Count",
    "summary": "Count the column the arrow shows — then find the column with more.",
    "grows": "This grows out of our journal graph and our Did It Change? towers, where the room coloured one box for each page and each observation, then compared the columns.",
    "steps": [
      "Look at the column the arrow points to.",
      "Show how many boxes are in it with fingers, a number card or cubes.",
      "Tap Reveal, count the boxes together, and point to the column with more."
    ],
    "materials": "Linking cubes, fingers, number cards 0 to 10, or a device"
  },
  {
    "unit": 4,
    "id": "line-up-the-ends",
    "iso": "2026-11-10",
    "date": "Tue 10 Nov 2026",
    "source": "Bluebonnet Kindergarten Math Module 3, Lessons 1–2",
    "preferred": 5,
    "focus": "line up the ends",
    "name": "Line Up the Ends",
    "summary": "Line up the ends, then show which stick is longer.",
    "grows": "This grows out of the Magic Show and Longer Than My Strip, where the room lined up cube sticks and paper strips at the edge of a desk before deciding which was longer.",
    "steps": [
      "Look at the two sticks, even if their ends do not line up.",
      "Point to the one you think is really longer, and show how many cubes longer with fingers or cubes.",
      "Tap Reveal, watch the ends slide into line, and count the difference together."
    ],
    "materials": "Two linking-cube sticks, a strip of paper, fingers, number cards 0 to 10, or a device"
  },
  {
    "unit": 4,
    "id": "longer-than-five",
    "iso": "2026-11-12",
    "date": "Thu 12 Nov 2026",
    "source": "Bluebonnet Kindergarten Math Module 3, Lessons 3–4",
    "preferred": 10,
    "focus": "five is the stick to beat",
    "name": "Longer Than Five?",
    "summary": "Hold up your 5-stick. Is the stick on the board longer or shorter?",
    "grows": "This grows out of Number Stairs and the 5-Stick, where every stick on the table was held against a 5-stick and sorted as longer than or shorter than it.",
    "steps": [
      "Hold up your own 5-stick and look at the stick beside the 5-stick on the board.",
      "Show longer or shorter, and how many cubes the stick has, with cubes, fingers or a number card.",
      "Tap Reveal and count the stick together, cube by cube."
    ],
    "materials": "Linking cubes, a 5-stick, fingers, number cards 0 to 10, or a device"
  },
  {
    "unit": 4,
    "id": "same-as-the-gray-stick",
    "iso": "2026-11-16",
    "date": "Mon 16 Nov 2026",
    "source": "Bluebonnet Kindergarten Math Module 3, Lessons 5–7",
    "preferred": 5,
    "focus": "together, the same length",
    "name": "Same as the Gray Stick",
    "summary": "Show how many cubes make the stick the same length as the gray stick.",
    "grows": "This grows out of the riddle of the 5-stick, where two short sticks laid end to end under the 5-stick were together the same length as it.",
    "steps": [
      "Look at the gray stick and the coloured part under it.",
      "Show how many more cubes the other part needs, with cubes, fingers, a number card or by pointing.",
      "Tap Reveal, watch the missing part slide in, and count its cubes together."
    ],
    "materials": "Linking cubes, fingers, number cards 0 to 10, or a device"
  },
  {
    "unit": 4,
    "id": "tip-the-balance",
    "iso": "2026-11-18",
    "date": "Wed 18 Nov 2026",
    "source": "Bluebonnet Kindergarten Math Module 3, Lessons 8–9",
    "preferred": 3,
    "focus": "the heavier side goes down",
    "name": "Tip the Balance",
    "summary": "Show which side will go down, then reveal the balance tipping.",
    "grows": "This grows out of the ruler balance, where the room guessed first and then watched the heavier side go down, even when it was the smaller thing.",
    "steps": [
      "Look at the two things on the balance.",
      "Point, tip a hand or say which side will go down, or say they will stay level.",
      "Tap Reveal and watch the balance tip, or stay level."
    ],
    "materials": "A ruler balance, two things from the tray, hands to tip, or a device"
  },
  {
    "unit": 4,
    "id": "as-heavy-as",
    "iso": "2026-11-20",
    "date": "Fri 20 Nov 2026",
    "source": "Bluebonnet Kindergarten Math Module 3, Lessons 10–12",
    "preferred": 10,
    "focus": "count the units until it balances, then switch the units",
    "name": "As Heavy As",
    "summary": "Count how many units make the balance level, then switch the units and count again.",
    "grows": "This grows out of the ruler balance, where chips and then cubes were added one at a time beside a pencil and a marker until the ruler lay level.",
    "steps": [
      "Look at the thing on the balance and the small picture that says what to add.",
      "Show how many cubes or chips will make it level, with fingers, cubes, a number card or by pointing.",
      "Tap Reveal, watch them drop in one at a time, and count together until it is level."
    ],
    "materials": "A ruler balance, linking cubes, bingo chips, fingers, number cards 0 to 20, or a device"
  },
  {
    "unit": 4,
    "id": "pour-and-count",
    "iso": "2026-12-01",
    "date": "Tue 1 Dec 2026",
    "source": "Bluebonnet Kindergarten Math Module 3, Lessons 13–14",
    "preferred": 10,
    "focus": "pour it anywhere, the amount stays the same",
    "name": "Pour and Count",
    "summary": "Count the cubes, watch them pour into a new container, and show how many are there now.",
    "grows": "This grows out of the drawer of cubes poured into the tall tumbler, where it only went partway up but filled the drawer again when poured back.",
    "steps": [
      "Count the cubes in the first container together.",
      "Watch them pour into the new container, then show how many are there now, with cubes, fingers, a number card or by pointing.",
      "Tap Reveal and count them in the new container together."
    ],
    "materials": "Loose linking cubes, two containers, fingers, number cards 0 to 20, or a device"
  },
  {
    "unit": 4,
    "id": "longer-heavier-holds-more",
    "iso": "2026-12-03",
    "date": "Thu 3 Dec 2026",
    "source": "Bluebonnet Kindergarten Math Module 3, Mid-Module Assessment (Topics A–D)",
    "preferred": 10,
    "focus": "say what we compare, then compare",
    "name": "Longer, Heavier, Holds More",
    "summary": "See what this round compares, then show the longer, the heavier, or the one that holds more.",
    "grows": "This grows out of the review, where the room lined up pencils, compared cube sticks, held a book and a ball, and poured a drawer into the tumbler.",
    "steps": [
      "Look at the small picture that says what we compare: a ruler, a hand-scale or a cup.",
      "Point to the longer, the heavier, or the one that holds more, or show that they are the same.",
      "Tap Reveal and watch the two slide together, the balance tip, or the cubes pour."
    ],
    "materials": "Linking cubes, two things from the tray, a container, fingers, number cards 0 to 20, or a device"
  },
  {
    "unit": 4,
    "id": "enough-for-everyone",
    "iso": "2026-12-07",
    "date": "Mon 7 Dec 2026",
    "source": "Bluebonnet Kindergarten Math Module 3, Lessons 15–16",
    "preferred": 5,
    "focus": "one for each, then look",
    "name": "Enough for Everyone?",
    "summary": "Match one to one and show how many more we need.",
    "grows": "This grows out of Set the Table, where one board, one marker, one tub and one pouch went to each person and the room found enough, not enough or too many.",
    "steps": [
      "Look at the friends and the things.",
      "Show how many more things we need so everyone has one.",
      "Tap Reveal, watch the lines match, and count the ones left without."
    ],
    "materials": "Linking cubes, Play-Doh tubs, fingers, number cards 0 to 10, or a device"
  },
  {
    "unit": 4,
    "id": "line-them-up",
    "iso": "2026-12-09",
    "date": "Wed 9 Dec 2026",
    "source": "Bluebonnet Kindergarten Math Module 3, Lessons 17–18",
    "preferred": 5,
    "focus": "match one to one, then look for the leftovers",
    "name": "Line Them Up",
    "summary": "Match the two rows and show how many are left over.",
    "grows": "This grows out of Fewer Than, where the chips and the cubes were matched one to one, one cube put back at a time, until fewer became the same.",
    "steps": [
      "Look at the two rows.",
      "Show how many are left over when you match them one to one.",
      "Tap Reveal, watch the pairs join, and point to the row with fewer."
    ],
    "materials": "Linking cubes, bingo chips, fingers, number cards 0 to 10, or a device"
  },
  {
    "unit": 4,
    "id": "taller-tower",
    "iso": "2026-12-11",
    "date": "Fri 11 Dec 2026",
    "source": "Teacher-created: Flying Machine groups",
    "preferred": 5,
    "focus": "line them up, then compare",
    "name": "Taller Tower",
    "summary": "Count each tower, then show how many more the taller one has.",
    "grows": "This grows out of sorting the class’s Flying Machine versions into push, pull and wind, building a cube tower for each group, and comparing the towers.",
    "steps": [
      "Look at the two towers.",
      "Show how many more cubes the taller tower has.",
      "Tap Reveal, watch the towers line up, and count the extra."
    ],
    "materials": "Linking cubes, fingers, number cards 0 to 10, or a device"
  }
];
const C={navy:'#102A56',blue:'#2670B8',red:'#A32424',orange:'#E8622A',purple:'#6B3FA0',yellow:'#FFD66B',green:'#2E7D45',gray:'#9CA9BA',pale:'#EFF4FB'};
const arr=(n,fn)=>Array.from({length:Math.max(0,n)},(_,i)=>fn(i)).join('');
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const text=(x,y,t,size=30,color=C.navy,extra='')=>`<text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="middle" font-size="${size}" fill="${color}" font-family="Arial,sans-serif" font-weight="800" ${extra}>${esc(t)}</text>`;
const line=(x1,y1,x2,y2,color=C.navy,extra='')=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" ${extra.includes('stroke-width')?'':'stroke-width="3"'} ${extra}/>`;
const step=(i,extra=0)=>`class="count-in" style="animation-delay:${extra+i*.14}s"`;
const cube=(x,y,s,color=C.blue,extra='')=>`<rect x="${x}" y="${y}" width="${s}" height="${s}" rx="${Math.min(3,s/8)}" fill="${color}" stroke="${C.navy}" stroke-width="${s<20?1.2:2}" ${extra}/>`;
const tower=(n,x,y,s,color=C.blue,extra='',split=true)=>arr(n,i=>cube(x,y-(i+1)*s,s,!split||i<5?color:C.orange,extra));
const stick=(n,x,y,s,color=C.blue,numbered=false,delay=0,split=true)=>arr(n,i=>`<g ${numbered?step(i,delay):''}>${cube(x+i*s,y,s,!split||i<5?color:C.orange)}${numbered?text(x+(i+.5)*s,y+s/2,i+1,s*.5,'#fff'):''}</g>`);
const svg=(body,label,dense=false,height=440)=>`<div class="math-viewport${dense?' dense':''}"><svg class="math-diagram" viewBox="0 0 900 ${height}" role="img" aria-label="${esc(label)}"><defs><radialGradient id="sphere-shade" cx="30%" cy="25%"><stop offset="0" stop-color="#E1F2FF"/><stop offset="1" stop-color="${C.blue}"/></radialGradient></defs>${body}</svg></div>`;
const mark=(x,y,n,i=0)=>`<g ${step(i)}><circle cx="${x}" cy="${y}" r="17" fill="${C.yellow}" stroke="${C.navy}" stroke-width="2"/>${text(x,y,n,22)}</g>`;
const answer=(data,body,after,symbol='?',label='Maths challenge',more={})=>({data,symbol,prompt:label,answer:String(data.answer),visual:svg(body,label,data.max>10),revealedVisual:svg(after,label+' revealed',data.max>10),...more});
const shapes=['triangle','rectangle','circle','cube','sphere','cylinder','cone'];
function flatShape(type,color=C.blue,variant=0){
 const attrs=`fill="${color}" stroke="${C.navy}" stroke-width="3" stroke-linejoin="round"`;
 switch(type){
 case 'triangle':return `<polygon points="${variant%2?'-33,23 28,29 15,-29':'-30,27 30,27 0,-29'}" ${attrs}/>`;
 case 'rectangle':return `<rect x="${variant%2?-20:-36}" y="-22" width="${variant%2?40:72}" height="44" ${attrs}/>`;
 case 'square':return `<rect x="-25" y="-25" width="50" height="50" ${attrs}/>`;
 case 'circle':return `<circle r="28" ${attrs}/>`;
 case 'oval':return `<ellipse rx="37" ry="20" ${attrs}/>`;
 case 'open':return `<path d="M-30 25L0-29 30 25H-18" fill="none" stroke="${color}" stroke-width="6" stroke-linejoin="round"/>`;
 case 'slice':return `<path d="M0-30L33 24Q0 49-33 24Z" ${attrs}/>`;
 case 'half':return `<path d="M-33 15A33 33 0 0 1 33 15Z" ${attrs}/>`;
 case 'slant':return `<polygon points="-20,-25 38,-25 20,25 -38,25" ${attrs}/>`;
 case 'hexagon':return `<polygon points="-30,0 -15,-26 15,-26 30,0 15,26 -15,26" ${attrs}/>`;
 default:return '';
 }
}
function solidShape(type,reveal=false,start=0,scale=1){
 let faces=[],base='';
 if(type==='sphere')base=`<circle r="33" fill="url(#sphere-shade)" stroke="${C.navy}" stroke-width="2"/>`;
 if(type==='cube'||type==='box'){
 const stretch=type==='box'?1.35:1;
 const polys=['-30,-15 4,-34 38,-14 4,5','-30,-15 4,5 4,42 -30,22','4,5 38,-14 38,23 4,42','-30,-15 4,-34 4,3 -30,22','4,-34 38,-14 38,23 4,3','-30,22 4,3 38,23 4,42'];
 base=`<g transform="scale(${stretch} 1)">${polys.slice(0,3).map((p,i)=>`<polygon points="${p}" fill="${['#8DC7EC','#2670B8','#5194C9'][i]}" fill-opacity=".72" stroke="${C.navy}" stroke-width="2"/>`).join('')}${polys.slice(3).map(p=>`<polygon points="${p}" fill="none" stroke="${C.navy}" stroke-opacity=".45" stroke-width="2" stroke-dasharray="3 4"/>`).join('')}</g>`;
 faces=polys.map((p,i)=>`<polygon points="${p}" transform="scale(${stretch} 1)" fill="${C.yellow}" fill-opacity=".36" stroke="${C.red}" stroke-width="4" ${i>2?'stroke-dasharray="4 3"':''}/>`);
 }else if(type==='cylinder'){
 base=`<path d="M-30-25V25A30 13 0 0 0 30 25V-25" fill="#8DC7EC" stroke="${C.navy}" stroke-width="2"/><ellipse cy="-25" rx="30" ry="13" fill="#DAF0FF" stroke="${C.navy}" stroke-width="2"/><ellipse cy="25" rx="30" ry="13" fill="none" stroke="${C.navy}" stroke-width="2" stroke-dasharray="3 4"/>`;
 faces=[`<ellipse cy="-25" rx="30" ry="13" fill="${C.yellow}" stroke="${C.red}" stroke-width="4"/>`,`<ellipse cy="25" rx="30" ry="13" fill="${C.yellow}" fill-opacity=".6" stroke="${C.red}" stroke-width="4" stroke-dasharray="4 3"/>`];
 }else if(type==='cone'){
 base=`<path d="M0-38L33 27Q0 47-33 27Z" fill="#8DC7EC" stroke="${C.navy}" stroke-width="2"/><ellipse cy="27" rx="33" ry="11" fill="none" stroke="${C.navy}" stroke-width="2" stroke-dasharray="3 4"/>`;
 faces=[`<ellipse cy="27" rx="33" ry="11" fill="${C.yellow}" fill-opacity=".6" stroke="${C.red}" stroke-width="4" stroke-dasharray="4 3"/>`];
 }
 // A separate trace of each flat face keeps hidden-face counting unambiguous.
 const faceTraces=reveal?faces.map((f,i)=>`<g ${step(start+i)}>${f}</g>`).join(''):'';
 return `<g transform="scale(${scale})">${base}${faceTraces}</g>`;
}
const faceCount=t=>({sphere:0,cone:1,cylinder:2,cube:6,box:6}[t]||0);
const geometry=(t,v=0)=>shapes.indexOf(t)>2||t==='box'?solidShape(t):flatShape(t,[C.blue,C.orange,C.purple][v%3],v);
function stairChallenge(id,max,r){
 const n=[0,Math.max(0,max-1),1,Math.floor(max/2),Math.max(0,max-2),0][r%6];
 if(id==='before-and-after'){
 const dir=r%2===0?1:-1,from=dir>0?n:Math.max(1,n),to=from+dir,s=Math.min(40,310/max);
 const b=tower(from,275,375,s)+text(275+s/2,405,from)+text(450,65,dir>0?'↑':'↓',70);
 const a=b+`<g class="build-in">${tower(to,560,375,s,C.purple)}</g>`+text(560+s/2,405,to);
 return answer({max,kind:id,from,to,dir,answer:to},b,a,dir>0?'↑':'↓','Show the number before or after');
 }
 if(id==='which-towers-are-hiding'){
 const count=Math.min(1+r%3,max),start=r%6===5?0:Math.min(max-count+1,1+(r%2)),missing=Array.from({length:count},(_,i)=>start+i),s=Math.min(36,315/max),dx=800/(max+1);
 const draw=reveal=>arr(max+1,i=>{const x=50+i*dx,is=missing.includes(i);return (!is||reveal?`<g ${is?step(i-start):''}>${tower(i,x,370,s,is?C.purple:C.blue)}${text(x+s/2,403,i,26)}</g>`:text(x+s/2,403,'?',28))+(!is?'':`<rect x="${x-3}" y="38" width="${s+6}" height="344" rx="6" fill="none" stroke="${C.purple}" stroke-width="2" stroke-dasharray="5 5"/>`)});
 const neighbours=missing.map(v=>`${v>0?v-1+' ← ':''}${v}${v<max?' → '+(v+1):''}`).join('   ·   ');
 return answer({max,kind:id,missing,neighbours,answer:missing.join(' · ')},draw(false),draw(true),'?','Show the hidden towers',{answer:neighbours,explanation:neighbours});
 }
 const down=id==='down-the-stairs',from=down?[1,max,Math.min(2,max),Math.max(1,Math.floor(max/2)),max,1][r%6]:n,to=from+(down?-1:1),s=Math.min(35,310/max),dx=800/(max+1);
 const draw=reveal=>arr(max+1,j=>{const i=down?max-j:j,x=50+j*dx,highlight=i===from,covered=!down&&i===to&&!reveal;if(covered)return text(x+s/2,405,'?',28,C.purple);const count=down&&reveal&&highlight?to:i;let part=`<g opacity="${highlight||(!down&&i===to&&reveal)?1:.24}">${tower(count,x,370,s,highlight?C.purple:C.blue)}${text(x+s/2,405,count,26)}</g>`;if(down&&reveal&&highlight)part+=`<g class="lift-away">${cube(x,370-from*s,s,C.purple)}</g>`;if(!down&&reveal&&i===to)part=`<g class="build-in">${part}</g>`;return part;});
 return answer({max,kind:id,from,to,answer:to},draw(false),draw(true),down?'↓':'↑',down?'Show one less':'Show one more');
}
function huntChallenge(id,max,r){
 const target=id==='triangle-hunt'?'triangle':id==='rectangle-and-circle-hunt'?(r%2?'circle':'rectangle'):shapes[r%7];
 const n=[Math.min(3,max),0,max,Math.min(2,max),Math.max(1,max-1),1][r%6];
 const distractors=id==='triangle-hunt'?['circle','square','rectangle','hexagon','open','slice']:id==='rectangle-and-circle-hunt'?['triangle','hexagon','oval','half','slant']:target==='triangle'?['open','slice','circle','cube']:target==='circle'?['oval','half','triangle','sphere']:target==='rectangle'?['slant','triangle','circle','cube']:['triangle','oval',target==='cone'?'cylinder':'cone','rectangle'].filter(t=>t!==target);
 let items=Array.from({length:n},(_,i)=>({type:target==='rectangle'&&i%3===1?'square':target,match:true,v:i}));
 items=items.concat(distractors.map((type,i)=>({type,match:false,v:n+i}))).sort((a,b)=>((a.v*7+r*3)%31)-((b.v*7+r*3)%31));
 const cols=max>10?7:5,rows=Math.ceil(items.length/cols),dx=800/cols,dy=Math.min(100,345/rows),sc=Math.min(1,dy/85),cue=`<g transform="translate(450 45) scale(.65)">${geometry(target)}</g>`;
 const draw=reveal=>cue+items.map((o,i)=>{const x=50+dx/2+(i%cols)*dx,y=115+Math.floor(i/cols)*dy,angle=[0,90,180,35,-65][o.v%5],size=sc*[1,.78,.92][o.v%3],index=items.slice(0,i+1).filter(x=>x.match).length;return `<g transform="translate(${x} ${y})"><g ${reveal&&o.match?`class="shape-return" style="--turn:${angle}deg;animation-delay:${(index-1)*.14}s"`:`transform="rotate(${angle})"`}><g transform="scale(${id==='still-the-same-shape'&&i%2?-size:size} ${size})">${reveal&&o.match&&id==='still-the-same-shape'&&i%2?`<animateTransform attributeName="transform" type="scale" from="${-size} ${size}" to="${size} ${size}" dur=".6s" fill="freeze"/>`:''}${geometry(o.type,o.v)}</g></g>${reveal&&o.match?`<g ${step(index-1)}><rect x="-51" y="-45" width="102" height="91" rx="14" fill="none" stroke="${C.red}" stroke-width="4"/>${mark(39,-35,index)}</g>`:''}</g>`}).join('');
 return answer({max,kind:id,target,n,items,answer:n},draw(false),draw(true),'?','Find the matching shapes');
}
function facesChallenge(max,r){
 const configs=max===3?[['sphere'],['cone'],['cylinder'],['sphere'],['cylinder'],['cone']]:max===5?[['sphere'],['cone','cylinder'],['cylinder','cylinder'],['cone'],['sphere','cylinder'],['cone','cone']]:max===10?[['sphere'],['cube'],['cube','cylinder'],['cone','cube'],['cylinder','cylinder'],['cube','cone']]:[['sphere','sphere'],['cube','box'],['cube','cube','box'],['cone','cylinder','box'],['box','cylinder'],['cube','box','cone']];
 const types=configs[r%6],total=types.reduce((n,t)=>n+faceCount(t),0),dx=780/types.length;let offset=0;
 const before=types.map((t,i)=>`<g transform="translate(${60+dx*(i+.5)} 175)">${solidShape(t,false,0,1.8)}</g>`).join('');
 const after=types.map((t,i)=>{const count=faceCount(t),x=60+dx*(i+.5),result=`<g transform="translate(${x} 175)">${solidShape(t,true,offset,1.8)}</g>`+arr(count,j=>{const cx=x+(j-(count-1)/2)*29;return `<g ${step(offset+j)}>${t==='cube'||t==='box'?cube(cx-11,300,22,C.yellow):`<ellipse cx="${cx}" cy="311" rx="12" ry="9" fill="${C.yellow}" stroke="${C.navy}" stroke-width="2"/>`}${text(cx,345,offset+j+1,23)}</g>`})+(count===0?text(x,330,0,32):'');offset+=count;return result}).join('');
 return answer({max,kind:'how-many-faces',types,total,answer:total},before,after,'?','Count the flat faces, including hidden faces');
}
function flatSolidChallenge(max,r){
 const n=[Math.min(3,max),0,max,1,Math.min(2,max),Math.max(1,max-1)][r%6],types=['sphere','cube','cylinder','cone','cube','cone'];
 const items=Array.from({length:n},(_,i)=>({type:types[i%6],solid:true,v:i})).concat([{type:'rectangle',solid:false,v:1},{type:'triangle',solid:false,v:3},{type:'circle',solid:false,v:4}]);
 const cols=max>10?7:5,rows=Math.ceil(items.length/cols),dy=Math.min(110,330/rows),sc=Math.min(1,dy/95);
 const draw=reveal=>`<rect x="25" y="45" width="850" height="370" rx="30" fill="#F6F1E7" stroke="${C.gray}" stroke-width="3"/>`+items.map((o,i)=>{const x=75+(i%cols)*(750/(cols-1)),y=115+Math.floor(i/cols)*dy;return `<g transform="translate(${x} ${y})">${o.solid?`<ellipse cy="41" rx="36" ry="9" fill="${C.navy}" opacity=".14"/>`:''}<g ${reveal&&o.solid?step(i):''}><g ${reveal&&o.solid?'class="solid-lift"':''}><g transform="rotate(${[0,45,180,-30][o.v%4]}) scale(${sc} ${o.solid?sc:sc*.42})">${geometry(o.type,o.v)}</g></g>${reveal&&o.solid?mark(35,-25,i+1):''}</g></g>`}).join('');
 return answer({max,kind:'flat-or-solid',n,items,answer:n},draw(false),draw(true),'?','Show how many things are solid');
}
function graphChallenge(max,r){
 const compare=r%6>=4,counts=r%6===5?[max,max]:r%6===1?[0,Math.min(2,max),1]:r%6===4?[Math.max(0,max-2),max]:[Math.min(max,2+r%3),Math.max(0,max-1),r%2?1:0],picked=r%counts.length,biggest=Math.max(...counts),winners=counts.map((v,i)=>v===biggest?i:-1).filter(i=>i>=0),s=Math.min(42,290/max),dx=760/counts.length,icons=r%2?['🍃','🍂','🌼']:['☀️','☂️','❄️'];
 const draw=reveal=>text(450,32,compare?'↑ ↑':'',45)+counts.map((n,j)=>{const x=70+(j+.5)*dx-s/2;return `${!compare&&j===picked?text(x+s/2,65,'↓',46):''}`+arr(n,i=>`<g ${reveal?step(i):''}>${cube(x,365-(i+1)*s,s,reveal?C.blue:'#fff')}${reveal?text(x+s/2,365-(i+.5)*s,i+1,s*.62,reveal?'#fff':C.navy):''}</g>`)+text(x+s/2,408,icons[j],37)+(reveal&&compare&&winners.includes(j)?`<rect x="${x-12}" y="${365-n*s-10}" width="${s+24}" height="${n*s+20}" rx="8" fill="none" stroke="${C.red}" stroke-width="5"/>`:'')+(reveal&&!compare&&j===picked&&n===0?text(x+s/2,338,0,32):'')}).join('')+line(40,370,860,370);
 return answer({max,kind:'picture-graph-count',compare,counts,picked,winners,answer:compare?(winners.length>1?'=':'↑'):counts[picked]},draw(false),draw(true),compare?'↑ ↑':'↓','Count a column or point to the column with more');
}
function lengthChallenge(id,max,r){
 let a,b,known,answerN;if(id==='line-up-the-ends'){const diff=[Math.min(2,max),0,max,1,Math.max(1,max-1),0][r%6],base=2+(r%3);a=base+(r%2?0:diff);b=base+(r%2?diff:0);answerN=diff;}else if(id==='longer-than-five'){a=5;b=[Math.min(3,max),0,max,Math.min(5,max),1,Math.min(5,max)][r%6];answerN=b;}else{a=[max,Math.min(2,max),max,0,max,Math.min(3,max)][r%6];known=[Math.max(0,a-1),a,0,0,Math.floor(a/2),a][r%6];b=a;answerN=a-known;}
 const diff=Math.abs(a-b),misaligned=id==='line-up-the-ends'&&r%3!==2,limit=Math.max(a,b,5)+(misaligned?diff+2:0),s=Math.min(55,700/limit),origin=90,offset=(diff+2)*s,shiftA=misaligned&&a<=b?offset:0,shiftB=misaligned&&a>b?offset:0;
 const moving=(content,shift,reveal)=>reveal?`<g class="slide-to-edge" style="--shift:${shift}px">${content}</g>`:`<g transform="translate(${shift} 0)">${content}</g>`;
 const draw=reveal=>{
 let body=line(origin-4,80,origin-4,360,C.gray,'stroke-dasharray="7 5"')+moving(stick(a,origin,130,s,id==='same-as-the-gray-stick'?C.gray:C.blue,false,0,id!=='same-as-the-gray-stick'),shiftA,reveal);
 if(id==='same-as-the-gray-stick')body+=stick(known,origin,260,s,C.blue,false,0,false)+(reveal?`<g class="slide-part" style="--shift:100px">${arr(a-known,i=>`<g ${step(i,.6)}>${cube(origin+(known+i)*s,260,s,C.orange)}${text(origin+(known+i+.5)*s,260+s/2,i+1,s*.55,'#fff')}</g>`)}</g>`:text(origin+(known+.7)*s,260+s/2,'?',40,C.purple));
 else {body+=moving(stick(b,origin,260,s,C.blue,reveal&&id==='longer-than-five'),shiftB,reveal);if(reveal&&id==='line-up-the-ends'){const longer=Math.max(a,b),shorter=Math.min(a,b),y=a>=b?130:260;body+=arr(longer-shorter,i=>`<g ${step(i,.7)}><rect x="${origin+(shorter+i)*s}" y="${y}" width="${s}" height="${s}" fill="${C.yellow}" stroke="${C.red}" stroke-width="3"/>${text(origin+(shorter+i+.5)*s,y+s/2,i+1,s*.55)}</g>`);} }
 if(reveal)body+=text(815,220,id==='longer-than-five'?(b===5?'=':b>5?'↑':'↓'):a===b&&id==='line-up-the-ends'?'=':'',60);
 return body;
 };
 return answer({max,kind:id,a,b,known,difference:diff,answer:answerN},draw(false),draw(true),id==='longer-than-five'?'5':'↔',id==='same-as-the-gray-stick'?'Show the missing length':'Compare the lengths');
}
const pairs=[{left:'🎈',right:'🪨',leftSize:83,rightSize:48,tilt:-1},{left:'📕',right:'🪶',leftSize:58,rightSize:77,tilt:1},{left:'🧱',right:'🧱',leftSize:60,rightSize:60,tilt:0},{left:'📦',right:'🪨',leftSize:88,rightSize:47,tilt:-1},{left:'🧦',right:'👟',leftSize:60,rightSize:65,tilt:-1},{left:'🟠',right:'🟠',leftSize:60,rightSize:60,tilt:0}];
function balance(pair,reveal,x=450,y=270,scale=1){
 const a=reveal?-pair.tilt*12:0;
 return `<g transform="translate(${x} ${y}) scale(${scale})"><path d="M0-15L-35 100H35Z" fill="${C.gray}" stroke="${C.navy}" stroke-width="4"/><g ${reveal?'class="balance-tip"':''} style="--tip:${a}deg" transform="rotate(${a})">${line(-185,0,185,0,C.navy,'stroke-width="9"')}${line(-170,-8,-170,-50)}${line(170,-8,170,-50)}${line(-225,-50,-115,-50)}${line(115,-50,225,-50)}${text(-170,-100,pair.left,pair.leftSize||64)}${text(170,-100,pair.right,pair.rightSize||64)}</g>${reveal&&pair.tilt===0?text(0,-45,'=',42):''}</g>`;
}
function balanceChallenge(max,r){
 const count=max===20?3:max===10?2:1,selected=Array.from({length:count},(_,i)=>pairs[(r+i)%pairs.length]),scale=count===1?1.35:count===2?.83:.59;
 const draw=reveal=>selected.map((p,i)=>balance(p,reveal,(i+.5)*900/count,270,scale)).join('');
 return answer({max,kind:'tip-the-balance',pairs:selected,count,answer:selected.map(p=>p.tilt===0?'=':p.tilt>0?'←':'→').join('   ')},draw(false),draw(true),'⚖','Point to the heavier side, or show the same');
}
function heavyChallenge(max,r){
 const k=Math.floor(r/2)%3,unit=r%2?'chip':'cube',objects=['✏️','🖍️','🍎'],base=Math.min(Math.floor(max/2),[1,2,Math.floor(max/2)][k]),n=base*(unit==='chip'?2:1),object=objects[k];
 const units=(reveal)=>arr(n,i=>{const x=590+(i%5)*27,y=237-Math.floor(i/5)*27;return `<g opacity="${reveal?0:1}">${reveal?`<set attributeName="opacity" to="1" begin="${i*.32}s" fill="freeze"/><animateTransform attributeName="transform" type="translate" from="0 -85" to="0 0" begin="${i*.32}s" dur=".3s" fill="freeze"/>`:''}${unit==='cube'?cube(x,y,23,C.red):`<circle cx="${x+12}" cy="${y+12}" r="11" fill="${C.red}" stroke="${C.navy}" stroke-width="2"/>`}${reveal?text(x+12,y+12,i+1,14,'#fff'):''}</g>`});
 const cue=unit==='cube'?cube(433,20,34,C.red):`<circle cx="450" cy="37" r="18" fill="${C.red}" stroke="${C.navy}" stroke-width="3"/>`;
 const body=cue+balance({left:object,right:'',tilt:1},true,450,310,1)+text(620,205,'?',45,C.purple);
 const after=cue+`<path d="M450 295L415 410H485Z" fill="${C.gray}" stroke="${C.navy}" stroke-width="4"/><g class="weigh-level" style="animation-duration:${Math.max(.4,n*.32)}s">${line(265,310,635,310,C.navy,'stroke-width="9"')}${line(280,302,280,260)}${line(620,302,620,260)}${line(225,260,335,260)}${line(565,260,695,260)}${text(280,210,object,64)}${units(true)}</g>`;
 return answer({max,kind:'as-heavy-as',object,unit,unitWeight:unit==='cube'?2:1,weight:base*2,n,answer:n},body,after,'⚖','Estimate and count the units until the balance is level');
}
const vessels=[{w:110,h:245},{w:230,h:115},{w:310,h:75},{w:170,h:180}];
function vessel(x,y,type,extra=''){
 const {w,h}=vessels[type%4];return `<path d="M${x-w/2} ${y-h}V${y}H${x+w/2}V${y-h}" fill="#F4FAFF" fill-opacity=".8" stroke="${C.navy}" stroke-width="5" stroke-linejoin="round" ${extra}/>`;
}
function cubePile(n,x,y,type,reveal=false,offset=0){const {w,h}=vessels[type%4],cols=Math.max(1,Math.floor((w-18)/27)),size=Math.min(24,(h-15)/Math.ceil(Math.max(1,n)/cols));return arr(n,i=>{const cx=x-w/2+12+(i%cols)*27,cy=y-8-(Math.floor(i/cols)+1)*(size+3);return `<g ${reveal?step(i+offset):''}>${cube(cx,cy,size,C.blue)}${reveal?text(cx+size/2,cy+size/2,i+offset+1,size*.58,'#fff'):''}</g>`})}
function pourChallenge(max,r){
 const n=[max,0,Math.min(3,max),max,Math.min(2,max),max][r%6],spill=r%3===2?Math.min(n,Math.max(1,Math.floor(n/3))):0,inside=n-spill,from=r%4,to=(from+1)%4;
 const cols=Math.min(7,Math.max(1,inside)),smallWidth=cols*27+18,smallHeight=Math.ceil(Math.max(1,inside)/cols)*27+16;
 const receiver=spill?`<path d="M${640-smallWidth/2} ${360-smallHeight}V360H${640+smallWidth/2}V${360-smallHeight}" fill="#F4FAFF" stroke="${C.navy}" stroke-width="5"/>`:vessel(640,360,to);
 const received=(reveal)=>spill?arr(inside,i=>{const x=640-smallWidth/2+9+(i%cols)*27,y=352-(Math.floor(i/cols)+1)*27;return `<g ${reveal?step(i):''}>${cube(x,y,24,C.blue)}${reveal?text(x+12,y+12,i+1,14,'#fff'):''}</g>`}):cubePile(inside,640,360,to,reveal);
 const empty=vessel(230,360,from)+receiver,before=empty+cubePile(n,230,360,from)+text(230,65,n,45)+text(450,180,'↷',65),landing=empty+received(false)+arr(spill,i=>cube(803+(i%3)*25,360-Math.floor(i/3)*25,22,C.blue));
 const after=empty+received(true)+arr(spill,i=>`<g ${step(inside+i)}>${cube(803+(i%3)*25,360-Math.floor(i/3)*25,22,C.blue)}${text(814+(i%3)*25,371-Math.floor(i/3)*25,inside+i+1,13,'#fff')}</g>`)+text(450,60,spill?`${inside} + ${spill} = ${n}`:`${n} = ${n}`,40);
 const stream=arr(n,i=>`<g class="pour-cube" style="--sx:${-410+(i%3)*25}px;--sy:${-130-Math.floor(i/3)*10}px;animation-delay:${i*.06}s">${cube(625,300,22,C.blue)}</g>`);
 return answer({max,kind:'pour-and-count',n,inside,spill,from,to,answer:n},before,after,'↷','Count, pour, and show how many',{preparedVisual:svg(landing+stream,'Cubes poured into a different container',max>10),prepareLabel:'Pour the cubes'});
}
function comparisonChallenge(max,r){
 const kind=['length','weight','capacity'][r%3],equal=Math.floor(r/3)%2===1;
 if(kind==='weight'){
 const p=equal?pairs[2]:pairs[0],b=balance(p,false),a=balance(p,true);
 return answer({max,kind:'longer-heavier-holds-more',comparison:kind,equal,answer:equal?'=':'→'},b,a,'⚖','Point to the heavier object');
 }
 if(kind==='length'){
 const a=max,b=equal?max:Math.max(0,max-2),s=Math.min(55,700/(max+3)),start=85;
 const draw=reveal=>line(start,95,start,365,C.gray,'stroke-dasharray="7 5"')+stick(a,start,150,s)+(reveal?`<g class="slide-to-edge" style="--shift:${s*3}px">${stick(b,start,280,s,C.purple)}</g>`:stick(b,start+s*3,280,s,C.purple))+(reveal?arr(a-b,i=>`<g ${step(i,.4)}><rect x="${start+(b+i)*s}" y="150" width="${s}" height="${s}" fill="${C.yellow}" stroke="${C.red}" stroke-width="3"/>${max>=10?text(start+(b+i+.5)*s,150+s/2,i+1,s*.55):''}</g>`):'');
 return answer({max,kind:'longer-heavier-holds-more',comparison:kind,equal,a,b,answer:equal?'=':max>=10?a-b:'↑'},draw(false),draw(true),'📏','Point to the longer stick');
 }
 const reverse=!equal&&Math.floor(r/6)%2===1,a=equal?4:reverse?4:6,b=equal?4:reverse?6:4,inside=Math.min(a,b),spill=Math.max(0,a-b),destinationCols=b===6?3:4;
 const container=(x,count,cols)=>{const rows=Math.ceil(count/cols),w=cols*35+18,h=rows*35+18;return `<path d="M${x-w/2} ${360-h}V360H${x+w/2}V${360-h}" fill="#F4FAFF" stroke="${C.navy}" stroke-width="5"/>`};
 const cubes=(x,count,cols)=>arr(count,i=>cube(x-(cols*35+18)/2+9+(i%cols)*35,351-(Math.floor(i/cols)+1)*35,32,C.blue));
 const before=container(240,a,2)+cubes(240,a,2)+container(660,b,destinationCols),after=container(240,a,2)+container(660,b,destinationCols)+cubes(660,inside,destinationCols)+arr(spill,i=>cube(805+i*37,329,32,C.blue))+text(450,80,equal?'=':a>b?'←':'→',55);
 return answer({max,kind:'longer-heavier-holds-more',comparison:kind,equal,capacityA:a,capacityB:b,inside,spill,answer:equal?'=':a>b?'←':'→'},before,after+arr(a,i=>`<g class="pour-cube" style="--sx:-420px;--sy:-160px;animation-delay:${i*.08}s">${cube(645,320,32,C.blue)}</g>`),'🥛','Point to the container that holds more');
}
const friends=['🧒🏽','👧🏻','🧑🏾‍🦽','👦🏿','👧🏼','🧒🏻','👦🏽','👧🏾'];
function matchingChallenge(id,max,r){
 let a,b;if(id==='enough-for-everyone'){
 const cap=max===3?4:max;const pairs=[[cap,cap-1],[Math.min(2,cap),Math.min(2,cap)],[Math.min(2,cap),Math.min(2,cap)+1],[0,0],[cap,Math.max(max===3?1:0,cap-max)],[1,0]];[a,b]=pairs[r%6];
 }else{[a,b]=[[max,Math.max(0,max-2)],[0,0],[Math.max(0,max-1),max],[Math.min(2,max),1],[1,max],[max,max]][r%6]}
 const need=Math.max(0,a-b),diff=Math.abs(a-b),fewer=id==='line-them-up'&&r%6>=4,slots=Math.max(1,a,b),dx=Math.min(110,790/slots),start=450-(slots-1)*dx/2,size=Math.min(64,dx*.85),objects=['🥛','🎩','🪑'];
 const icon=(i,row)=>id==='enough-for-everyone'?(row===0?friends[i%friends.length]:objects[r%3]):r%2?(row===0?'🟦':'🔴'):(row===0?'⭐':'☀️');
 const draw=reveal=>arr(Math.min(a,b),i=>reveal?line(start+i*dx,165,start+i*dx,280,C.gray,`${step(i)} stroke-width="4"`):'')+arr(a,i=>`<g>${text(start+i*dx,120,icon(i,0),size)}${reveal&&i>=b?`<rect x="${start+i*dx-size*.6}" y="${120-size*.6}" width="${size*1.2}" height="${size*1.2}" rx="12" fill="none" stroke="${C.red}" stroke-width="4" ${step(i)}/>`:''}</g>`)+arr(b,i=>`<g>${text(start+i*dx,325,icon(i,1),size)}${reveal&&i>=a?`<rect x="${start+i*dx-size*.6}" y="${325-size*.6}" width="${size*1.2}" height="${size*1.2}" rx="12" fill="none" stroke="${C.orange}" stroke-width="4" ${step(i)}/>`:''}</g>`)+(reveal&&fewer?text(450,225,a===b?'=':a<b?'↑':'↓',48):'');
 return answer({max,kind:id,a,b,need,diff,fewer,answer:id==='enough-for-everyone'?need:fewer?(a===b?'=':a<b?'↑':'↓'):diff},draw(false),draw(true),fewer?'↓ ↓':'↕',id==='enough-for-everyone'?'Show how many more things are needed':'Match the rows and look for leftovers');
}
function tallerChallenge(max,r){
 const [a,b]=[[max,Math.max(0,max-2)],[0,0],[Math.min(1,max),max],[max,max],[0,max],[max,Math.max(0,max-1)]][r%6],s=Math.min(48,320/max),floor=360;
 const draw=reveal=>{const lx=reveal?450-s-6:230,rx=reveal?456:670;return line(125,floor,780,floor,C.gray)+`<g ${reveal?'class="slide-to-edge" style="--shift:'+(230-lx)+'px"':''}>${tower(a,lx,floor,s,C.blue,'',false)}${text(lx+s/2,410,['→','←','💨'][r%3],30,C.blue)}</g><g ${reveal?'class="slide-to-edge" style="--shift:'+(670-rx)+'px"':''}>${tower(b,rx,floor,s,C.red,'',false)}${text(rx+s/2,410,['←','💨','→'][r%3],30,C.red)}</g>`+(reveal?arr(Math.abs(a-b),i=>{const x=a>b?lx:rx,y=floor-(Math.min(a,b)+i+1)*s;return `<g ${step(i)}><rect x="${x}" y="${y}" width="${s}" height="${s}" fill="${C.yellow}" stroke="${C.navy}" stroke-width="3"/>${text(x+s/2,y+s/2,i+1,s*.6)}</g>`}):'');};
 return answer({max,kind:'taller-tower',a,b,answer:Math.abs(a-b)},draw(false),draw(true),'↑ ↑','Show how many more cubes the taller tower has');
}
function exhibitionChallenge(id,max,r){
 if(id==='exhibition-systems-check'){
  const result=comparisonChallenge(max,r);result.data.kind=id;
  result.prompt='Review the design comparisons: '+result.prompt.toLowerCase();
  return result;
 }
 if(r%6>=4){
  const result=huntChallenge(r%6===4?'triangle-hunt':'rectangle-and-circle-hunt',max,r);result.data.kind=id;
  result.prompt='Find the shapes used in Cycle Wheels and Flying Machines';return result;
 }
 const mode=r%6,n=mode===0?0:mode===1?max:mode===2?Math.max(0,max-1):Math.min(max,2),to=mode===2?n+1:mode===3?n-1:n;
 const display=(count,scatter,reveal)=>{
  const cols=max>10?7:5,dx=740/cols,dy=70;
  return `<rect x="55" y="80" width="790" height="325" rx="20" fill="${C.pale}" stroke="${C.navy}" stroke-width="5"/>`+arr(count,i=>{
   const order=scatter?count-1-i:i,x=105+(order%cols)*dx+(scatter?12*(i%2):0),y=130+Math.floor(order/cols)*dy+(scatter?18*(i%2):0);
   return `<g ${reveal?step(i):''}><g transform="translate(${x} ${y}) scale(.65)">${flatShape(i%2?'square':'triangle',i%2?C.purple:C.blue,i)}</g>${reveal?mark(x+28,y-20,i+1,i):''}</g>`;
  })+(count===0?text(450,245,0,65):'');
 };
 // The first two rounds rearrange the same set; the next two add or remove one.
 const before=display(n,false,false),after=display(to,mode<2,true);
 return answer({max,kind:id,mode,from:n,to,answer:to},before,after,mode===2?'↑':mode===3?'↓':'↷',mode===2?'Show one more display piece':mode===3?'Show one less display piece':'Count the display pieces; rearranging keeps the count');
}
function build(id,max,round){
 if(![3,5,10,20].includes(max))throw Error('Unsupported number size');
 const r=Math.max(0,round-1);let result;
 if(['exhibition-display-detectives','exhibition-systems-check'].includes(id))result=exhibitionChallenge(id,max,r);
 else if(['one-more-stair','which-towers-are-hiding','down-the-stairs','before-and-after'].includes(id))result=stairChallenge(id,max,r);
 else if(['triangle-hunt','rectangle-and-circle-hunt','still-the-same-shape'].includes(id))result=huntChallenge(id,max,r);
 else if(id==='how-many-faces')result=facesChallenge(max,r);
 else if(id==='flat-or-solid')result=flatSolidChallenge(max,r);
 else if(id==='picture-graph-count')result=graphChallenge(max,r);
 else if(['line-up-the-ends','longer-than-five','same-as-the-gray-stick'].includes(id))result=lengthChallenge(id,max,r);
 else if(id==='tip-the-balance')result=balanceChallenge(max,r);
 else if(id==='as-heavy-as')result=heavyChallenge(max,r);
 else if(id==='pour-and-count')result=pourChallenge(max,r);
 else if(id==='longer-heavier-holds-more')result=comparisonChallenge(max,r);
 else if(['enough-for-everyone','line-them-up'].includes(id))result=matchingChallenge(id,max,r);
 else if(id==='taller-tower')result=tallerChallenge(max,r);
 else return null;
 result.symbolic=true;return result;
}
root.RiseMissions={metadata,build};
})(typeof window==='undefined'?globalThis:window);
