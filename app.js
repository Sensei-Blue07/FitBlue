const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],K='fitblue.v1';
let S=JSON.parse(localStorage.getItem(K)||'null')||{week:1,logs:[],weights:[],water:{},photos:[],sess:{}};
const save=()=>{try{localStorage.setItem(K,JSON.stringify(S))}catch(e){toast('Stockage plein : supprime d’anciennes photos.')}};
const today=()=>new Date().toLocaleDateString('sv'),fmt=d=>new Date(d).toLocaleDateString('fr-FR',{day:'numeric',month:'short'});
const W=(a,b,c,d)=>[a,b,c,d],E={
A:[['Squats',W('2×12','3×12','3×15','3×15–18'),'Descends comme pour t’asseoir, dos droit, talons au sol.'],
['Fentes arrière',W('2×8 / jambe','2×8 / jambe','3×10 / jambe','3×10 / jambe'),'Le genou arrière frôle le sol, buste bien droit.'],
['Pont fessier',W('3×15','3×15','3×18','3×20'),'Serre les fessiers 1 s en haut du mouvement.'],
['Crunch contrôlé',W('2×10','2×12','3×12','3×15'),'Monte lentement, expire en haut, sans tirer sur la nuque.'],
['Touches des talons',W('2×12 / côté','2×12 / côté','3×15 / côté','3×15 / côté'),'Garde les abdos contractés, gagne en amplitude.'],
['Planche',W('2×25 s','2×30 s','3×35 s','3×45 s'),'Corps aligné : ni fesses en l’air, ni dos creusé.'],
['Mountain climbers',W('2×20 s','2×25 s','3×25 s','3×30 s'),'Rythme régulier, hanches basses. Ça brûle, c’est normal.']],
B:[['Squats',W('3×12','3×12','3×15','3×15'),'Poids sur les talons, genoux dans l’axe des pieds.'],
['Pompes (variante adaptée)',W('2×6–8','3×6–8','3×8–10','3×10–12'),'Mur, table, genoux ou classiques : choisis celle où tu tiens la forme.'],
['Pont fessier',W('3×15','3×18','3×20','3×20'),'Pousse dans les talons, bassin bien haut.'],
['Fentes arrière',W('3×8 / jambe','3×10 / jambe','3×10 / jambe','3×12 / jambe'),'Contrôle la descente, c’est elle qui construit le muscle.'],
['Dips sur chaise',W('2×6–8','2×8','3×8–10','3×10'),'Seulement avec une chaise parfaitement stable.'],
['Planche',W('2×30 s','2×35 s','3×40 s','3×45 s'),'Respire normalement, ne retiens pas ton souffle.'],
['Dead bug',W('2×8 / côté','2×8 / côté','3×10 / côté','3×10 / côté'),'Bas du dos plaqué au sol pendant tout le mouvement.'],
['Mountain climbers',W('3×20 s','3×25 s','3×25 s','3×30 s'),'Termine fort : dernière série à fond.']]};
const COACH=['Le muscle se construit pendant le repos : dors bien cette nuit.','Une répétition propre vaut mieux que cinq bâclées.','Tu n’as pas besoin d’être parfaite, juste régulière.','Le ventre part en dernier, mais il part. Garde le cap.','Bois un verre d’eau avant de t’échauffer.','Ajoute une répétition de plus que la dernière fois : c’est ça, progresser.','Les protéines à chaque repas : œuf, poisson, haricots, soja.','Prends une photo aujourd’hui : dans un mois tu me remercieras.','Passer de 95 à 65 kg demandait de la discipline. Là, tu construis.','Les abdos se dessinent à table autant qu’à l’entraînement.'],
FIN=['Bravo, séance validée ! Étire-toi et hydrate-toi.','Excellent travail. Tu viens de mettre de la graine de muscle.','Belle séance : c’est la régularité qui fait la différence.','Mission accomplie. Repos mérité et un bon repas riche en protéines.'];
let timer;
function toast(t){const e=$('#toast');e.textContent=t;e.hidden=false;setTimeout(()=>e.hidden=true,3000)}
function rest(s=60){clearInterval(timer);let n=s;$('#rest').hidden=false;$('#rt').textContent=n;timer=setInterval(()=>{$('#rt').textContent=--n;if(n<=0){stopRest();navigator.vibrate&&navigator.vibrate([200,100,200]);toast('Repos terminé, série suivante !')}},1000)}
function stopRest(){clearInterval(timer);$('#rest').hidden=true}
$('#rskip').onclick=stopRest;
function tab(id){$$('.tab').forEach(t=>t.classList.toggle('on',t.id===id));$$('.nav button').forEach(b=>b.classList.toggle('on',b.dataset.tab===id));if(id==='suivi')chart();scrollTo(0,0)}
$$('.nav button').forEach(b=>b.onclick=()=>{tab(b.dataset.tab);history.replaceState(0,'','#'+b.dataset.tab)});
function weekCount(){const l=Date.now()-7*864e5;return S.logs.filter(x=>new Date(x.d)>=l).length}
function home(){const h=new Date().getHours();$('#hello').textContent=h<12?'Bonjour 👋':h<18?'Bon après-midi 👋':'Bonsoir 👋';
$('#semaineT').textContent='Semaine '+S.week+' du programme';
$('#coach').textContent=COACH[Math.floor(Date.now()/864e5)%COACH.length];
const n=weekCount();$('#rn').textContent=n+'/4';$('#rf').style.strokeDashoffset=201*(1-Math.min(n,4)/4);
$('#wn').textContent=S.water[today()]||0;
$('#total').textContent=S.logs.length?S.logs.length+' séance(s) terminées. Dernière : '+fmt(S.logs.at(-1).d)+'.':'Aucune séance pour l’instant. Lance la première dans l’onglet Séance.'}
$('#wadd').onclick=()=>{S.water[today()]=(S.water[today()]||0)+1;save();home();if(S.water[today()]==8)toast('Objectif eau atteint !')};
function sess(){if(S.sess.d!==today()||!S.sess.done)S.sess={d:today(),t:S.sess.t||'A',done:[]};return S.sess}
function seance(){const s=sess(),L=E[s.t],w=S.week-1;$('#week').value=S.week;
$$('#typeSeg button').forEach(b=>b.classList.toggle('on',b.dataset.t===s.t));
$('#exos').innerHTML=L.map((e,i)=>{const n=parseInt(e[1][w]);return`<div class="card ex"><h3>${e[0]}</h3><div class="r">${e[1][w]}</div><div class="sets">${Array.from({length:n},(_,j)=>`<button data-k="${i}-${j}" class="${s.done.includes(i+'-'+j)?'on':''}">${j+1}</button>`).join('')}</div><p class="tip">💬 ${e[2]}</p></div>`}).join('');
$$('.sets button').forEach(b=>b.onclick=()=>{const k=b.dataset.k,i=s.done.indexOf(k);if(i<0){s.done.push(k);rest(60)}else s.done.splice(i,1);save();seance()});
const tot=L.reduce((a,e)=>a+parseInt(e[1][w]),0);$('#pbar').style.width=100*s.done.length/tot+'%'}
$$('#typeSeg button').forEach(b=>b.onclick=()=>{S.sess={d:today(),t:b.dataset.t,done:[]};save();seance()});
$('#week').onchange=e=>{S.week=+e.target.value;save();seance();home()};
$('#finish').onclick=()=>{const s=sess();if(!s.done.length)return toast('Valide au moins une série avant de terminer.');S.logs.push({d:today(),t:s.t,n:s.done.length});S.sess={d:today(),t:s.t,done:[]};save();stopRest();toast(FIN[S.logs.length%FIN.length]);seance();home()};
$('#addm').onclick=()=>{const w=parseFloat($('#iw').value),t=parseFloat($('#it').value);if(!w&&!t)return toast('Entre un poids ou un tour de taille.');S.weights.push({d:today(),w:w||null,t:t||null});save();$('#iw').value=$('#it').value='';chart();toast('Mesure enregistrée.')};
function chart(){const c=$('#chart'),r=devicePixelRatio||1,W=c.clientWidth,H=170;c.width=W*r;c.height=H*r;const x=c.getContext('2d');x.scale(r,r);
const P=S.weights.filter(m=>m.w);if(P.length<2){x.fillStyle='#93A3BD';x.font='14px sans-serif';x.fillText('Ajoute 2 mesures pour voir la courbe.',10,H/2)}else{
const v=P.map(m=>m.w),mn=Math.min(...v)-1,mx=Math.max(...v)+1,X=i=>20+i*(W-40)/(P.length-1),Y=y=>H-20-(y-mn)/(mx-mn)*(H-40);
x.strokeStyle='#4A85FF';x.lineWidth=3;x.lineJoin='round';x.beginPath();P.forEach((m,i)=>i?x.lineTo(X(i),Y(m.w)):x.moveTo(X(i),Y(m.w)));x.stroke();
x.fillStyle='#FF6B57';P.forEach((m,i)=>{x.beginPath();x.arc(X(i),Y(m.w),4,0,7);x.fill()});
const d=(v.at(-1)-v[0]).toFixed(1);$('#delta').textContent='Depuis le début : '+(d>0?'+':'')+d+' kg. Surveille aussi ton tour de taille : il baisse souvent avant la balance.'}
if(P.length<2)$('#delta').textContent='';
$('#mlist').innerHTML=S.weights.map((m,i)=>[m,i]).reverse().map(([m,i])=>`<div class="m"><span>${fmt(m.d)} · ${m.w?m.w+' kg':''} ${m.t?m.t+' cm':''}</span><button data-i="${i}">Supprimer</button></div>`).join('');
$$('#mlist button').forEach(b=>b.onclick=()=>{S.weights.splice(+b.dataset.i,1);save();chart()})}
$('#pf').onchange=e=>{const f=e.target.files[0];if(!f)return;const im=new Image();im.onload=()=>{const k=Math.min(1,600/im.width),c=document.createElement('canvas');c.width=im.width*k;c.height=im.height*k;c.getContext('2d').drawImage(im,0,0,c.width,c.height);S.photos.push({d:today(),img:c.toDataURL('image/jpeg',.7)});save();photos()};im.src=URL.createObjectURL(f);e.target.value=''};
function photos(){$('#grid').innerHTML=S.photos.map((p,i)=>`<div class="ph"><img src="${p.img}" alt="Photo du ${p.d}"><span>${fmt(p.d)}</span><button data-i="${i}" aria-label="Supprimer">✕</button></div>`).reverse().join('')||'<p class="mut">Aucune photo pour l’instant.</p>';
$$('.ph button').forEach(b=>b.onclick=()=>{S.photos.splice(+b.dataset.i,1);save();photos()})}
let dp;addEventListener('beforeinstallprompt',e=>{e.preventDefault();dp=e;$('#install').hidden=false});
$('#install').onclick=async()=>{dp.prompt();await dp.userChoice;$('#install').hidden=true};
if('serviceWorker'in navigator)navigator.serviceWorker.register('sw.js');
home();seance();photos();chart();if(location.hash)tab(location.hash.slice(1));
