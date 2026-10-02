const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],K='fitblue.v1';
let S=JSON.parse(localStorage.getItem(K)||'null')||{week:1,logs:[],weights:[],water:{},photos:[],sess:{}};
const save=()=>{try{localStorage.setItem(K,JSON.stringify(S))}catch(e){toast('Stockage plein : supprime d’anciennes photos.')}};
const today=()=>new Date().toLocaleDateString('sv'),fmt=d=>new Date(d).toLocaleDateString('fr-FR',{day:'numeric',month:'short'});
const W=(a,b,c,d)=>[a,b,c,d],
ST=[[50,14],[50,26],[50,52],[50,72],[50,90],[50,40],[50,54]],
LY=(P,Kk)=>[[10,82],[20,82],P,[66,62],[78,88],[34,86],[46,86]],
PL=[[20,58],[28,64],[56,74],[70,80],[86,87],[28,86],[42,86]],
SQ=[[60,30],[54,40],[36,62],[62,64],[52,90],[68,42],[80,42]],
FE=[[52,22],[50,34],[48,60],[64,68],[64,90],[52,48],[52,62],[38,80],[24,90]],
PO=[[[20,54],[28,58],[56,70],[70,78],[86,88],[28,74],[28,88]],[[20,72],[28,76],[56,80],[70,84],[86,88],[42,80],[28,88]]],
MC=[[[20,52],[28,58],[56,68],[70,76],[86,88],[28,74],[28,88],[44,72],[36,86]],[[20,52],[28,58],[56,68],[44,72],[36,86],[28,74],[28,88],[70,76],[86,88]]],
DB=[[[12,80],[22,82],[50,84],[50,60],[66,60],[22,66],[22,50],[50,60],[66,60]],[[12,80],[22,82],[50,84],[50,60],[66,60],[14,84],[4,86],[66,76],[84,86]]],
X={sq:[ST,SQ],fe:[ST,FE],pt:[LY([48,82]),LY([50,58])],cr:[[[12,80],[22,82],[50,84],[66,64],[78,88],[16,70],[12,76]],[[30,58],[32,68],[50,84],[66,64],[78,88],[40,60],[32,54]]],
ta:[[[12,80],[22,82],[50,84],[66,64],[78,88],[40,84],[56,84]],[[16,74],[26,76],[50,84],[66,64],[78,88],[46,78],[66,80]]],pl:[PL],mc:MC,po:PO,
di:[[[36,34],[32,44],[40,72],[62,66],[66,90],[31,52],[28,58]],[[40,48],[34,58],[42,84],[62,74],[66,90],[46,60],[28,58]]],db:DB},
E={A:[['Squats',W('2×12','3×12','3×15','3×15–18'),'Descends comme pour t’asseoir, dos droit, talons au sol.','sq'],
['Fentes arrière',W('2×8 / jambe','2×8 / jambe','3×10 / jambe','3×10 / jambe'),'Le genou arrière frôle le sol, buste droit.','fe'],
['Pont fessier',W('3×15','3×15','3×18','3×20'),'Serre les fessiers 1 s en haut.','pt'],
['Crunch contrôlé',W('2×10','2×12','3×12','3×15'),'Monte lentement, expire en haut, sans tirer sur la nuque.','cr'],
['Touches des talons',W('2×12 / côté','2×12 / côté','3×15 / côté','3×15 / côté'),'Abdos contractés, va chercher le talon de chaque côté.','ta'],
['Planche',W('2×25 s','2×30 s','3×35 s','3×45 s'),'Corps aligné : ni fesses en l’air, ni dos creusé.','pl'],
['Mountain climbers',W('2×20 s','2×25 s','3×25 s','3×30 s'),'Rythme régulier, hanches basses.','mc']],
B:[['Squats',W('3×12','3×12','3×15','3×15'),'Poids sur les talons, genoux dans l’axe des pieds.','sq'],
['Pompes (variante adaptée)',W('2×6–8','3×6–8','3×8–10','3×10–12'),'Mur, table, genoux ou classiques : garde la forme.','po'],
['Pont fessier',W('3×15','3×18','3×20','3×20'),'Pousse dans les talons, bassin bien haut.','pt'],
['Fentes arrière',W('3×8 / jambe','3×10 / jambe','3×10 / jambe','3×12 / jambe'),'Contrôle la descente : c’est elle qui construit le muscle.','fe'],
['Dips sur chaise',W('2×6–8','2×8','3×8–10','3×10'),'Seulement avec une chaise parfaitement stable.','di'],
['Planche',W('2×30 s','2×35 s','3×40 s','3×45 s'),'Respire normalement, ne retiens pas ton souffle.','pl'],
['Dead bug',W('2×8 / côté','2×8 / côté','3×10 / côté','3×10 / côté'),'Bas du dos plaqué au sol pendant tout le mouvement.','db'],
['Mountain climbers',W('3×20 s','3×25 s','3×25 s','3×30 s'),'Dernière série : à fond !','mc']]},
WARM=[['Marche rapide sur place',60],['Jumping jacks',30],['Talons-fesses',30],['Montées de genoux',30],['Rotation des épaules',30],['Rotation des hanches',30],['Squats sans charge ×10',0],['Fentes arrière légères ×5 / jambe',0],['Mobilité dynamique',120]],
STRE=[['Quadriceps : talon vers la fesse, chaque jambe',30],['Ischio-jambiers : jambe tendue, penche-toi',30],['Fessiers : cheville sur genou, assise',30],['Mollets : talon au sol contre un mur',30],['Pectoraux : bras contre un mur',30],['Épaules : bras croisé devant',30],['Dos : posture de l’enfant',40],['Abdominaux : posture du cobra',20]],
CAT=[['Glucides · énergie',['Igname','Patate douce','Riz','Pâte de maïs','Manioc / gari','Mil et sorgho','Pain complet']],['Protéines · muscle',['Œufs','Poisson','Volaille','Bœuf, chèvre, mouton','Soja','Haricots','Fromage peul']],['Bonnes graisses',['Arachide','Noix de cajou','Avocat','Beurre de karité','Noix de coco']],['Fruits',['Banane','Mangue','Papaye','Ananas','Goyave','Orange, mandarine','Baobab (pain de singe)']],['Légumes',['Tomate','Gombo','Oignon','Carotte','Chou','Aubergine','Feuilles vertes']]],
DISH=[['Petit-déjeuner',['Bouillie sans sucre + arachide + banane','Pain complet + omelette + banane']],['Déjeuner',['Riz + haricots + légumes','Pâte + sauce légumes + poisson','Riz + gombo + fromage peul']],['Collations',['Œuf dur','Noix de cajou (une poignée)','Un fruit : papaye, mangue, ananas ou goyave']],['Dîner (plus léger)',['Patate douce + légumes + fromage peul','Igname + sauce légumes + omelette (3 œufs)','Riz + haricots + poisson']]],
ENC=['Chaque séance te rapproche de ton objectif. Je suis fier de toi !','Tu as déjà prouvé que tu sais te transformer. Maintenant, on sculpte.','Pas besoin d’être parfaite : il faut juste revenir t’entraîner.','Le plus dur, c’est de commencer, et tu es déjà là. Bravo !','Pas d’énergie ? Fais au moins l’échauffement. Le reste suivra.','Ton corps change même quand la balance ne bouge pas. Fais confiance au processus.','Une série de plus, un pas de plus. Tu es plus forte que tu ne le crois.','Aujourd’hui, tu bats la version de toi d’hier.','Les résultats viennent à celles qui ne lâchent pas. Tiens bon !','Respire, concentre-toi et donne tout sur la dernière série.','Compare-toi à ta photo d’il y a un mois, jamais aux autres.','La discipline bat la motivation : même sans envie, tu bouges.','Tu construis un corps fort, pas seulement un ventre plat. Patience !','Le repos fait partie du programme. Récupère sans culpabiliser.'],
TIP=['Mange des protéines à chaque repas : œuf, poisson, haricots ou soja.','Bois un verre d’eau (250 ml) avant de t’entraîner.','Dors 7 à 8 h : c’est là que le muscle se construit.','Mesure ton tour de taille chaque semaine : il baisse souvent avant le poids.','Les abdos ne suffisent pas : le ventre baisse avec l’alimentation et l’effort de tout le corps.','Évite les boissons sucrées : l’eau reste ta meilleure alliée.','Mieux vaut un gainage propre de 30 s que 2 minutes bâclées.','Prends un féculent + une protéine dans l’heure qui suit la séance.','Expire en montant, inspire en descendant : ne bloque jamais ta respiration.','Mâche lentement : tu te sens rassasiée plus vite.','Prends tes photos à la même heure et dans la même lumière.','Étire-toi après chaque séance pour limiter les courbatures.','Mets des légumes à chaque repas : ils remplissent l’assiette sans alourdir.','Ajoute une répétition ou 5 s de gainage chaque semaine : c’est la surcharge progressive.'],
FIN=['Bravo, séance validée ! Étire-toi et hydrate-toi.','Excellent travail : tu viens de poser une brique de muscle.','Belle séance. C’est la régularité qui fait la différence.','Mission accomplie. Repos mérité et un bon repas riche en protéines.'],
LV=[['Débutante',0],['Motivée',100],['Régulière',250],['Guerrière',450],['Athlète',700],['Championne',1000],['Légende',1400]];
let timer;
function toast(t){const e=$('#toast');e.textContent=t;e.hidden=false;setTimeout(()=>e.hidden=true,3000)}
function rest(s=60,l='Repos'){clearInterval(timer);let n=s;$('#rl').textContent=l;$('#rest').hidden=false;$('#rt').textContent=n;timer=setInterval(()=>{$('#rt').textContent=--n;if(n<=0){stopRest();navigator.vibrate&&navigator.vibrate([200,100,200]);toast('Temps écoulé !')}},1000)}
function stopRest(){clearInterval(timer);$('#rest').hidden=true}
$('#rskip').onclick=stopRest;
function tab(id){$$('.tab').forEach(t=>t.classList.toggle('on',t.id===id));$$('.nav button').forEach(b=>b.classList.toggle('on',b.dataset.tab===id));if(id==='suivi')chart();scrollTo(0,0)}
$$('.nav button').forEach(b=>b.onclick=()=>{tab(b.dataset.tab);history.replaceState(0,'','#'+b.dataset.tab)});
function weekCount(){const l=Date.now()-7*864e5;return S.logs.filter(x=>new Date(x.d)>=l).length}
const lvl=()=>LV.reduce((r,l,i)=>(S.xp||0)>=l[1]?i:r,0),dayN=()=>Math.floor((Date.now()-new Date().getTimezoneOffset()*6e4)/864e5);
function xp(n){const a=lvl();S.xp=Math.max(0,(S.xp||0)+n);save();if(lvl()>a)toast('Niveau '+(lvl()+1)+' atteint : '+LV[lvl()][0]+' 🏆');home()}
function home(){const h=new Date().getHours(),l=lvl(),x=S.xp||0,nx=LV[l+1];$('#hello').textContent=h<12?'Bonjour 👋':h<18?'Bon après-midi 👋':'Bonsoir 👋';
$('#semaineT').textContent='Semaine '+S.week+' du programme';
$('#lb').textContent=l+1;$('#ln').textContent='Niveau '+(l+1)+' · '+LV[l][0];
$('#lx').style.width=(nx?100*(x-LV[l][1])/(nx[1]-LV[l][1]):100)+'%';$('#lt').textContent=nx?x+' XP · encore '+(nx[1]-x)+' XP pour « '+nx[0]+' »':x+' XP · niveau maximum !';
$('#coach').textContent=ENC[dayN()%ENC.length];$('#astuce').textContent=TIP[(dayN()*3+5)%TIP.length];
const n=weekCount(),g=S.water[today()]||0;$('#rn').textContent=n+'/4';$('#rf').style.strokeDashoffset=201*(1-Math.min(n,4)/4);
$('#wn').textContent=g;$('#wl').textContent=(g==1?'verre':'verres')+' = '+g*250+' ml sur 2 000 ml (8 verres de 250 ml)';
$('#total').textContent=S.logs.length?S.logs.length+' séance(s) terminées. Dernière : '+fmt(S.logs.at(-1).d)+'.':'Aucune séance pour l’instant. Lance la première dans l’onglet Séance.'}
$('#wadd').onclick=()=>{S.water[today()]=(S.water[today()]||0)+1;save();if(S.water[today()]==8){toast('Objectif atteint : 2 litres bus !');xp(15)}else home()};
function sess(){if(S.sess.d!==today()||!S.sess.done)S.sess={d:today(),t:S.sess.t||'A',done:[]};return S.sess}
const fig=(p,c)=>{const[H,S2,P,K,F,Ee,D,K2,F2]=p,L=(a,b,k='')=>`<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" class="${k}"/>`;return`<svg viewBox="0 0 100 100" class="fg"><line x1="0" y1="91" x2="100" y2="91" class="gr"/>${c?'<rect x="4" y="58" width="24" height="33" rx="3" class="ch"/>':''}${K2?L(P,K2,'b')+L(K2,F2,'b'):''}${L(S2,P)}${L(P,K)}${L(K,F)}${L(S2,Ee,'a')}${L(Ee,D,'a')}<circle cx="${H[0]}" cy="${H[1]}" r="7"/></svg>`};
function list(el,arr,pre){$(el).innerHTML=arr.map((r,i)=>`<button class="it" data-i="${i}"><span>${r[0]}</span><b>${r[1]?r[1]+' s':'✓'}</b></button>`).join('');$$(el+' .it').forEach(b=>b.onclick=()=>{const r=arr[b.dataset.i];b.classList.toggle('done');if(r[1]&&b.classList.contains('done'))rest(r[1],pre)})}
function seance(){const s=sess(),L=E[s.t],w=S.week-1;$('#week').value=S.week;
$$('#typeSeg button').forEach(b=>b.classList.toggle('on',b.dataset.t===s.t));
$('#exos').innerHTML=L.map((e,i)=>{const n=parseInt(e[1][w]),f=X[e[3]];return`<div class="card ex"><h3>${e[0]}</h3><div class="r">${e[1][w]}</div><div class="figs">${f.map((p,j)=>`<div>${fig(p,e[3]=='di')}<small>${f.length>1?(j?'Mouvement':'Départ'):'Tiens la position'}</small></div>`).join('')}</div><div class="sets">${Array.from({length:n},(_,j)=>`<button data-k="${i}-${j}" class="${s.done.includes(i+'-'+j)?'on':''}">${j+1}</button>`).join('')}</div><p class="tip">💬 ${e[2]}</p></div>`}).join('');
$$('.sets button').forEach(b=>b.onclick=()=>{const k=b.dataset.k,i=s.done.indexOf(k);if(i<0){s.done.push(k);rest(60);xp(5)}else{s.done.splice(i,1);xp(-5)}save();seance()});
const tot=L.reduce((a,e)=>a+parseInt(e[1][w]),0);$('#pbar').style.width=100*s.done.length/tot+'%'}
$$('#typeSeg button').forEach(b=>b.onclick=()=>{S.sess={d:today(),t:b.dataset.t,done:[]};save();seance()});
$('#week').onchange=e=>{S.week=+e.target.value;save();seance();home()};
$('#finish').onclick=()=>{const s=sess();if(!s.done.length)return toast('Valide au moins une série avant de terminer.');S.logs.push({d:today(),t:s.t,n:s.done.length});xp(30);S.sess={d:today(),t:s.t,done:[]};save();stopRest();toast(FIN[S.logs.length%FIN.length]);seance();home()};
$('#addm').onclick=()=>{const w=parseFloat($('#iw').value),t=parseFloat($('#it').value);if(!w&&!t)return toast('Entre un poids ou un tour de taille.');S.weights.push({d:today(),w:w||null,t:t||null});save();xp(10);$('#iw').value=$('#it').value='';chart();toast('Mesure enregistrée.')};
function chart(){const c=$('#chart'),r=devicePixelRatio||1,W=c.clientWidth,H=170;c.width=W*r;c.height=H*r;const x=c.getContext('2d');x.scale(r,r);
const P=S.weights.filter(m=>m.w);if(P.length<2){x.fillStyle='#93A3BD';x.font='14px sans-serif';x.fillText('Ajoute 2 mesures pour voir la courbe.',10,H/2)}else{
const v=P.map(m=>m.w),mn=Math.min(...v)-1,mx=Math.max(...v)+1,X=i=>20+i*(W-40)/(P.length-1),Y=y=>H-20-(y-mn)/(mx-mn)*(H-40);
x.strokeStyle='#4A85FF';x.lineWidth=3;x.lineJoin='round';x.beginPath();P.forEach((m,i)=>i?x.lineTo(X(i),Y(m.w)):x.moveTo(X(i),Y(m.w)));x.stroke();
x.fillStyle='#FF6B57';P.forEach((m,i)=>{x.beginPath();x.arc(X(i),Y(m.w),4,0,7);x.fill()});
const d=(v.at(-1)-v[0]).toFixed(1);$('#delta').textContent='Depuis le début : '+(d>0?'+':'')+d+' kg. Surveille aussi ton tour de taille : il baisse souvent avant la balance.'}
if(P.length<2)$('#delta').textContent='';
$('#mlist').innerHTML=S.weights.map((m,i)=>[m,i]).reverse().map(([m,i])=>`<div class="m"><span>${fmt(m.d)} · ${m.w?m.w+' kg':''} ${m.t?m.t+' cm':''}</span><button data-i="${i}">Supprimer</button></div>`).join('');
$$('#mlist button').forEach(b=>b.onclick=()=>{S.weights.splice(+b.dataset.i,1);save();chart()})}
$('#pf').onchange=e=>{const f=e.target.files[0];if(!f)return;const im=new Image();im.onload=()=>{const k=Math.min(1,600/im.width),c=document.createElement('canvas');c.width=im.width*k;c.height=im.height*k;c.getContext('2d').drawImage(im,0,0,c.width,c.height);S.photos.push({d:today(),img:c.toDataURL('image/jpeg',.7)});save();photos();xp(10)};im.src=URL.createObjectURL(f);e.target.value=''};
function photos(){$('#grid').innerHTML=S.photos.map((p,i)=>`<div class="ph"><img src="${p.img}" alt="Photo du ${p.d}"><span>${fmt(p.d)}</span><button data-i="${i}" aria-label="Supprimer">✕</button></div>`).reverse().join('')||'<p class="mut">Aucune photo pour l’instant.</p>';
$$('.ph button').forEach(b=>b.onclick=()=>{S.photos.splice(+b.dataset.i,1);save();photos()})}
let dp;addEventListener('beforeinstallprompt',e=>{e.preventDefault();dp=e;$('#install').hidden=false});
$('#install').onclick=async()=>{dp.prompt();await dp.userChoice;$('#install').hidden=true};
if('serviceWorker'in navigator)navigator.serviceWorker.register('sw.js');
const SYN=(S.xp||0);
$('#food').innerHTML='<div class="card"><b>La règle de l’assiette</b><p>½ légumes, ¼ protéines, ¼ féculents. Une source de protéines à chaque repas, y compris au petit-déjeuner et au dîner.</p></div>'+CAT.map(c=>`<div class="card"><b>${c[0]}</b><div class="chips">${c[1].map(x=>`<span>${x}</span>`).join('')}</div></div>`).join('')+'<div class="card"><b>Exemples de plats</b>'+DISH.map(d=>`<h4>${d[0]}</h4><ul>${d[1].map(x=>`<li>${x}</li>`).join('')}</ul>`).join('')+'</div>';
list('#warm',WARM,'Échauffement');list('#stre',STRE,'Étirement');
let ac,bt,st=0,nt=0,on=0,bass=[55,55,65.4,49];
const bpm=()=>+$('#bpm').value;$('#bpm').oninput=()=>$('#bv').textContent=bpm()+' BPM';
function nz(t,f,q,g,d){const n=ac.sampleRate*d,b=ac.createBuffer(1,n,ac.sampleRate),a=b.getChannelData(0);for(let i=0;i<n;i++)a[i]=Math.random()*2-1;const s=ac.createBufferSource(),fl=ac.createBiquadFilter(),G=ac.createGain();s.buffer=b;fl.type=q;fl.frequency.value=f;G.gain.setValueAtTime(g,t);G.gain.exponentialRampToValueAtTime(.001,t+d);s.connect(fl).connect(G).connect(ac.destination);s.start(t)}
function osc(t,type,f1,f2,g,d,lp){const o=ac.createOscillator(),G=ac.createGain(),F=ac.createBiquadFilter();o.type=type;o.frequency.setValueAtTime(f1,t);o.frequency.exponentialRampToValueAtTime(f2,t+d);F.frequency.value=lp||2e4;G.gain.setValueAtTime(g,t);G.gain.exponentialRampToValueAtTime(.001,t+d);o.connect(F).connect(G).connect(ac.destination);o.start(t);o.stop(t+d)}
function beat(s,t){if(s%4==0)osc(t,'sine',150,40,1,.2);if(s%2==1)nz(t,7000,'highpass',.25,.05);if(s%8==4)nz(t,1500,'bandpass',.6,.15);if([0,3,6,10,12,14].includes(s)){const f=bass[Math.floor(st/16)%4];osc(t,'sawtooth',f,f,.28,.14,400)}}
function pump(){while(nt<ac.currentTime+.15){beat(st%16,nt);nt+=60/bpm()/4;st++}}
$('#mp').onclick=()=>{if(on){clearInterval(bt);on=0;$('#mp').textContent='▶ Beat';return}ac=ac||new(window.AudioContext||window.webkitAudioContext)();ac.resume();st=0;nt=ac.currentTime+.05;bt=setInterval(pump,40);on=1;$('#mp').textContent='■ Stop'};
home();seance();photos();chart();if(location.hash)tab(location.hash.slice(1));
