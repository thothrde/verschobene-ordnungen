(() => {
  const SOURCE = {
    collection:'https://stumbleduponthis.de/photocollection/',
    blog:'https://stumbleduponthis.de/photoblog/',
    manhattan:'https://stumbleduponthis.de/manhattan/',
    owl:'https://stumbleduponthis.de/OWL/'
  };
  const I=(src,title,source)=>({src,title,source:SOURCE[source]});

  const P = {
    // Photocollection — ausdrücklich starke / ausstellungswürdige Auswahl
    cube:I('https://stumbleduponthis.de/wp-content/uploads/2026/05/TheCubeHBF-04-26-scaled.jpg','TheCubeHBF-04-26','collection'),
    mirror:I('https://stumbleduponthis.de/wp-content/uploads/2026/05/MirrorCity1-scaled.jpg','MirrorCity1','collection'),
    kpm:I('https://stumbleduponthis.de/wp-content/uploads/2023/06/KPM-Fenster-3-scaled.jpg','KPM-Fenster-3','collection'),
    views:I('https://stumbleduponthis.de/wp-content/uploads/2025/06/SchoeneAussichten-scaled.jpg','SchoeneAussichten','collection'),
    leipzig:I('https://stumbleduponthis.de/wp-content/uploads/2024/08/Leipzig-Schrei-und-Schoene.jpg','Leipzig-Schrei-und-Schoene','collection'),
    renaissance:I('https://stumbleduponthis.de/wp-content/uploads/2024/06/HH-Renaissance-scaled.jpg','HH-Renaissance','collection'),
    polaris:I('https://stumbleduponthis.de/wp-content/uploads/2025/06/Polaris-Kristall-Schatten.jpg','Polaris-Kristall-Schatten','collection'),
    church:I('https://stumbleduponthis.de/wp-content/uploads/2024/07/churchlight1-scaled.jpg','churchlight1','collection'),
    tunnel:I('https://stumbleduponthis.de/wp-content/uploads/2024/02/OrangerTunnel-scaled.jpg','OrangerTunnel','collection'),
    sphere:I('https://stumbleduponthis.de/wp-content/uploads/2025/01/Spiegelsphere-final-scaled.jpg','Spiegelsphere-final','collection'),
    lightfog:I('https://stumbleduponthis.de/wp-content/uploads/2023/10/Licht-Nebel-Strahlen-scaled.jpg','Licht-Nebel-Strahlen','collection'),
    roses:I('https://stumbleduponthis.de/wp-content/uploads/2025/06/TurmRosenBlankHH.jpg','TurmRosenBlankHH','collection'),
    postsoc:I('https://stumbleduponthis.de/wp-content/uploads/2024/08/postsozRealismus.jpg','postsozRealismus','collection'),

    // Photoblog
    gem:I('https://stumbleduponthis.de/wp-content/uploads/2024/06/C-gemmirror-2.jpg','C-gemmirror-2','blog'),
    iron:I('https://stumbleduponthis.de/wp-content/uploads/2024/03/Eisenengel.jpg','Eisenengel','blog'),
    cafe:I('https://stumbleduponthis.de/wp-content/uploads/2023/07/Cafespiegelung-grau.jpg','Cafespiegelung-grau','blog'),
    doors:I('https://stumbleduponthis.de/wp-content/uploads/2023/07/Tuerfluchten.png','Tuerfluchten','blog'),
    nature:I('https://stumbleduponthis.de/wp-content/uploads/2023/06/naturschutzmoabit-scaled.jpg','naturschutzmoabit','blog'),
    beauty:I('https://stumbleduponthis.de/wp-content/uploads/2024/02/BeautyhasanAddress-scaled.jpg','BeautyhasanAddress','blog'),
    future:I('https://stumbleduponthis.de/wp-content/uploads/2024/03/BVG-Future-1-scaled.jpg','BVG-Future','blog'),
    hbf:I('https://stumbleduponthis.de/wp-content/uploads/2023/06/HBF-Strahlungen.png','HBF-Strahlungen','blog'),
    velo:I('https://stumbleduponthis.de/wp-content/uploads/2023/07/velodromrunner.jpg','velodromrunner','blog'),
    brunnen:I('https://stumbleduponthis.de/wp-content/uploads/2023/06/C-FotoFotoMBrunnen2.jpg','C-FotoFotoMBrunnen2','blog'),
    sphinx:I('https://stumbleduponthis.de/wp-content/uploads/2023/06/Friedhofssphinxen.jpg','Friedhofssphinxen','blog'),
    inside:I('https://stumbleduponthis.de/wp-content/uploads/2023/06/Inside-Potsdam-scaled.jpg','Inside-Potsdam','blog'),
    collage:I('https://stumbleduponthis.de/wp-content/uploads/2023/06/Collagenversuch.png','Collagenversuch','blog'),
    rainwalk:I('https://stumbleduponthis.de/wp-content/uploads/2023/08/CwaitingRainwalk-2-scaled.jpg','CwaitingRainwalk-2','blog'),
    wallstreet:I('https://stumbleduponthis.de/wp-content/uploads/2023/11/Berlin-Wallstreet-scaled.jpg','Berlin-Wallstreet','blog'),

    // Manhattan — erste und zweite obere Auswahl
    meabove:I('https://stumbleduponthis.de/wp-content/uploads/2023/09/NYC-me-from-above-gespiegelt-scaled.jpg','NYC-me-from-above-gespiegelt','manhattan'),
    escher:I('https://stumbleduponthis.de/wp-content/uploads/2023/09/NYC-eschercrystal-scaled.jpg','NYC-eschercrystal','manhattan'),
    nycmirror:I('https://stumbleduponthis.de/wp-content/uploads/2023/09/NYC-spiegelndestadt-scaled.jpg','NYC-spiegelndestadt','manhattan'),
    wtc:I('https://stumbleduponthis.de/wp-content/uploads/2023/09/NYC-wtc-1-scaled.jpg','NYC-wtc-1','manhattan'),
    fog:I('https://stumbleduponthis.de/wp-content/uploads/2023/09/NYC-nebelsilouetten-scaled.jpg','NYC-nebelsilouetten','manhattan'),
    rainred:I('https://stumbleduponthis.de/wp-content/uploads/2023/09/NYC-Park-Regenrotszene.jpg','NYC-Park-Regenrotszene','manhattan'),
    parabola:I('https://stumbleduponthis.de/wp-content/uploads/2023/09/NYC-C-parabolic-light-scaled.jpg','NYC-C-parabolic-light','manhattan'),
    redcrystal:I('https://stumbleduponthis.de/wp-content/uploads/2023/09/NYC-red-tree-crystalbuildings-scaled.jpg','NYC-red-tree-crystalbuildings','manhattan'),
    station:I('https://stumbleduponthis.de/wp-content/uploads/2023/09/NYC-StationandTower-scaled.jpg','NYC-StationandTower','manhattan'),
    meadow:I('https://stumbleduponthis.de/wp-content/uploads/2023/09/NYC-hochwiese-tuerme-wie-grashalme-scaled.jpg','NYC-hochwiese-tuerme-wie-grashalme','manhattan'),
    libraryman:I('https://stumbleduponthis.de/wp-content/uploads/2023/09/NYC-columbia-libraryman-scaled.jpg','NYC-columbia-libraryman','manhattan'),
    stop:I('https://stumbleduponthis.de/wp-content/uploads/2023/11/MyslfStopOneWay-scaled.jpg','MyslfStopOneWay','manhattan'),
    redtree:I('https://stumbleduponthis.de/wp-content/uploads/2023/09/NYC-red-tree-besser-scaled.jpg','NYC-red-tree-besser','manhattan'),
    houses:I('https://stumbleduponthis.de/wp-content/uploads/2023/09/NYC-haeusermeer.jpg','NYC-haeusermeer','manhattan'),
    verticals:I('https://stumbleduponthis.de/wp-content/uploads/2023/09/NYC-Mitte-altNeu-Senkrechten-scaled.jpg','NYC-Mitte-altNeu-Senkrechten','manhattan'),
    evening:I('https://stumbleduponthis.de/wp-content/uploads/2023/09/NYC-abendreflexionen-scaled.jpg','NYC-abendreflexionen','manhattan'),
    steamed:I('https://stumbleduponthis.de/wp-content/uploads/2023/09/NYC-t-vernebelt-2.jpg','NYC-t-vernebelt-2','manhattan'),
    bubble:I('https://stumbleduponthis.de/wp-content/uploads/2023/09/NYC-Seifenblase-Hochzeitspaar-besser-scaled.jpg','NYC-Seifenblase-Hochzeitspaar-besser','manhattan'),

    // OWL — Kern des Fotoessays / starke Einzelbilder
    o3065:I('https://stumbleduponthis.de/wp-content/uploads/2024/02/IMG_3065-scaled.jpg','IMG_3065','owl'),
    o3146:I('https://stumbleduponthis.de/wp-content/uploads/2024/02/IMG_3146-scaled.jpg','IMG_3146','owl'),
    luebeck:I('https://stumbleduponthis.de/wp-content/uploads/2024/02/NachbarschaftsluebeckisierungBielefeld-scaled.jpg','NachbarschaftsluebeckisierungBielefeld','owl'),
    o3752:I('https://stumbleduponthis.de/wp-content/uploads/2024/02/IMG_3752-scaled.jpg','IMG_3752','owl'),
    o3030:I('https://stumbleduponthis.de/wp-content/uploads/2024/02/IMG_3030-scaled.jpg','IMG_3030','owl'),
    bburg:I('https://stumbleduponthis.de/wp-content/uploads/2024/02/Bielefeld-Burgblick-scaled.jpg','Bielefeld-Burgblick','owl'),
    burgb:I('https://stumbleduponthis.de/wp-content/uploads/2024/02/Burgblick-Bielefeld-scaled.jpg','Burgblick-Bielefeld','owl'),
    o3126:I('https://stumbleduponthis.de/wp-content/uploads/2024/02/IMG_3126-scaled.jpg','IMG_3126','owl'),
    consequence:I('https://stumbleduponthis.de/wp-content/uploads/2023/11/B-Konsequenzstrasse.jpg','B-Konsequenzstrasse','owl'),
    autumnwall:I('https://stumbleduponthis.de/wp-content/uploads/2024/02/B-Herbstmauer-scaled.jpg','B-Herbstmauer','owl'),
    tree:I('https://stumbleduponthis.de/wp-content/uploads/2023/11/B-leuchtenderBaum-scaled.jpg','B-leuchtenderBaum','owl'),
    geese:I('https://stumbleduponthis.de/wp-content/uploads/2023/11/B-Gaense-4-scaled.jpg','B-Gaense-4','owl'),
    o3763:I('https://stumbleduponthis.de/wp-content/uploads/2024/02/IMG_3763-scaled.jpg','IMG_3763','owl'),
    o3114:I('https://stumbleduponthis.de/wp-content/uploads/2024/03/IMG_3114-neu-scaled.jpg','IMG_3114-neu','owl'),
    farms:I('https://stumbleduponthis.de/wp-content/uploads/2024/03/OWL-HoefeimWald-scaled.jpg','OWL-HoefeimWald','owl'),
    o3120:I('https://stumbleduponthis.de/wp-content/uploads/2024/02/IMG_3120-scaled.jpg','IMG_3120','owl'),
    o3026:I('https://stumbleduponthis.de/wp-content/uploads/2024/02/IMG_3026-scaled.jpg','IMG_3026','owl'),
    o3059:I('https://stumbleduponthis.de/wp-content/uploads/2024/02/IMG_3059-scaled.jpg','IMG_3059','owl'),
    o3122:I('https://stumbleduponthis.de/wp-content/uploads/2024/02/IMG_3122-scaled.jpg','IMG_3122','owl'),
    old:I('https://stumbleduponthis.de/wp-content/uploads/2024/02/NW-Foto-1987.jpg','NW-Foto-1987','owl')
  };


  // v0.7: vollständige Ausstellungsauswahl mit kurzen Zwischentiteln vor den Bildgruppen.
  // Szenen mit mehr als zwei Bildern laufen länger als Einzel- und Doppelszenen.
  const T={open:4200,text:3600,single:3200,duet:3500,trip:5600,flick:6400,close:5600};
  const scenes=[
    {type:'opening',duration:T.open,kicker:'Thomas Riepe',title:'Verschobene Ordnungen',sub:'Bilder, Nachbilder, zweite Lesarten · 66 Fotografien · automatische Folge · Zwischentitel vor den Bildgruppen.'},

    {type:'text',duration:T.text,text:'Die Stadt fällt durch ihre eigenen Fenster'},
    {type:'duet',duration:T.duet,imgs:[P.mirror,P.nycmirror],label:'Spiegel / Stadt'},
    {type:'triptych',duration:T.trip,imgs:[P.cube,P.escher,P.wtc],label:'Konstruktion / Raster / Durchblick'},

    {type:'text',duration:T.text,text:'Die Dinge treffen sich hinter unserem Rücken'},
    {type:'flicker',duration:T.flick,imgs:[P.kpm,P.cafe,P.gem]},
    {type:'duet',duration:T.duet,imgs:[P.sphere,P.meabove],label:'Beobachter / Wiederholung'},
    {type:'triptych',duration:T.trip,imgs:[P.leipzig,P.renaissance,P.sphinx],label:'Begegnungen, die niemand arrangiert hat'},

    {type:'text',duration:T.text,text:'Das Licht kennt geheime Ausgänge'},
    {type:'split',duration:T.duet,imgs:[P.church,P.polaris]},
    {type:'duet',duration:T.duet,imgs:[P.lightfog,P.hbf],label:'Licht wird Gegenstand'},
    {type:'triptych',duration:T.trip,imgs:[P.tunnel,P.doors,P.o3065],label:'Schwelle / Flucht / Durchgang'},

    {type:'text',duration:T.text,text:'Die Zimmer treiben an die Oberfläche'},
    {type:'flicker',duration:T.flick,imgs:[P.o3146,P.luebeck,P.o3752]},
    {type:'duet',duration:T.duet,imgs:[P.inside,P.collage],label:'Innen / Außen / Verdopplung'},
    {type:'single',duration:T.single,img:P.brunnen},

    {type:'text',duration:T.text,text:'Rot verirrt sich in der Geometrie'},
    {type:'triptych',duration:T.trip,imgs:[P.redtree,P.redcrystal,P.roses],label:'Rot / Natur / Konstruktion'},
    {type:'duet',duration:T.duet,imgs:[P.meadow,P.velo],label:'Maßstab / Bewegung'},
    {type:'flicker',duration:T.flick,imgs:[P.houses,P.verticals,P.station]},

    {type:'text',duration:T.text,text:'Der Regen löscht die Maßstäbe'},
    {type:'duet',duration:T.duet,imgs:[P.evening,P.fog],label:'Sichtbarkeit / Verschwinden'},
    {type:'triptych',duration:T.trip,imgs:[P.rainred,P.steamed,P.rainwalk],label:'Regen / Dampf / Übergang'},
    {type:'single',duration:T.single,img:P.parabola},

    {type:'text',duration:T.text,text:'Die Wörter schlafen nicht in ihren Schildern'},
    {type:'duet',duration:T.duet,imgs:[P.libraryman,P.stop],label:'Figur / Zeichen'},
    {type:'triptych',duration:T.trip,imgs:[P.beauty,P.future,P.wallstreet],label:'Gefundene Sätze'},
    {type:'duet',duration:T.duet,imgs:[P.nature,P.consequence],label:'Benennung verändert den Ort'},

    {type:'text',duration:T.text,text:'Die Kulissen bemerken uns'},
    {type:'flicker',duration:T.flick,imgs:[P.iron,P.postsoc,P.views]},
    {type:'duet',duration:T.duet,imgs:[P.bubble,P.tree],label:'Ereignis / Farbe'},

    {type:'text',duration:T.text,text:'Die Landschaft erinnert sich an Wege'},
    {type:'triptych',duration:T.trip,imgs:[P.o3030,P.o3026,P.o3059],label:'Wege / Fläche / Entfernung'},
    {type:'duet',duration:T.duet,imgs:[P.bburg,P.burgb],label:'Blick / Gegenblick'},
    {type:'triptych',duration:T.trip,imgs:[P.o3126,P.farms,P.o3114],label:'Landschaft als Konstruktion'},

    {type:'text',duration:T.text,text:'Die Nähe wandert an den Horizont'},
    {type:'flicker',duration:T.flick,imgs:[P.o3120,P.o3122,P.o3763]},
    {type:'duet',duration:T.duet,imgs:[P.autumnwall,P.geese],label:'Nähe / Ferne'},
    {type:'single',duration:T.single,img:P.o3752},

    {type:'text',duration:T.text,text:'Bilder haben ein Gedächtnis aus Glas'},
    {type:'flicker',duration:T.flick,imgs:[P.redcrystal,P.polaris,P.collage]},
    {type:'duet',duration:T.duet,imgs:[P.cube,P.inside],label:'Montage ohne Montage'},
    {type:'triptych',duration:T.trip,imgs:[P.cafe,P.sphere,P.mirror],label:'Nachbilder'},

    {type:'text',duration:T.text,text:'Die Vergangenheit steht plötzlich im Fenster'},
    {type:'afterimage',duration:T.trip,old:P.mirror,img:P.old},
    {type:'duet',duration:T.duet,imgs:[P.old,P.o3114],label:'Damals / Ort'},
    {type:'triptych',duration:T.trip,imgs:[P.o3065,P.luebeck,P.consequence],label:'Zugang / Verlauf / Konsequenz'},

    {type:'text',duration:T.text,text:'Die Welt fotografiert zurück'},
    {type:'flicker',duration:T.flick,imgs:[P.wtc,P.escher,P.meabove]},
    {type:'duet',duration:T.duet,imgs:[P.brunnen,P.postsoc],label:'Fotograf / Fotografierter / Bild'},
    {type:'triptych',duration:T.trip,imgs:[P.leipzig,P.future,P.stop],label:'Drei gefundene Beziehungen'},

    {type:'closing',duration:T.close,title:'Das vorige Bild ist fort.<br>Seine Wirkung nicht.',sub:'66 Fotografien. Zwischentitel stehen jeweils vor den folgenden Bildgruppen. Die Folge startet automatisch; Leertaste pausiert, Pfeiltasten wechseln, P zeigt Provenienz.'}
  ];

  const stage=document.querySelector('#stage'), memory=document.querySelector('#memory'), fill=document.querySelector('#timelineFill'), count=document.querySelector('#sceneCount');
  const playBtn=document.querySelector('#playBtn'), prevBtn=document.querySelector('#prevBtn'), nextBtn=document.querySelector('#nextBtn'), provBtn=document.querySelector('#provBtn');
  let index=-1,playing=true,timer=null,raf=null,startTime=0,elapsedBeforePause=0,lastImage=null,currentNode=null;
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const photo=(im,cls='')=>`<figure class="photo ${cls}"><img src="${im.src}" alt="${esc(im.title)}"></figure>`;
  const prov=ims=>{const list=(Array.isArray(ims)?ims:[ims]).filter(Boolean); if(!list.length)return'';return `<div class="prov"><span>${list.map(i=>esc(i.title)).join(' · ')}</span><a href="${list[0].source}" target="_blank" rel="noopener">Quelle</a></div>`};
  function renderScene(s){const el=document.createElement('section');el.className=`scene ${s.type}${s.side?' '+s.side:''}`;el.style.setProperty('--scene-duration',`${s.duration}ms`);
    if(s.type==='opening')el.innerHTML=`<div class="text-wrap"><p class="kicker">${s.kicker}</p><h1>${s.title}</h1><p class="sub">${s.sub}</p></div>`;
    else if(s.type==='text')el.innerHTML=`<div class="text-wrap intertitle-wrap"><p>${s.text}</p></div>`;
    else if(s.type==='single'||s.type==='full')el.innerHTML=photo(s.img,'contain')+prov(s.img);
    else if(s.type==='duet')el.innerHTML=photo(s.imgs[0],'p1')+photo(s.imgs[1],'p2')+`<div class="relation">${s.label||''}</div>`+prov(s.imgs);
    else if(s.type==='triptych')el.innerHTML=photo(s.imgs[0],'p1')+photo(s.imgs[1],'p2')+photo(s.imgs[2],'p3')+`<div class="relation">${s.label||''}</div>`+prov(s.imgs);
    else if(s.type==='split')el.innerHTML=photo(s.imgs[0],'p1')+photo(s.imgs[1],'p2')+prov(s.imgs);
    else if(s.type==='flicker')el.innerHTML=photo(s.imgs[0],'p1 contain')+photo(s.imgs[1],'p2 contain')+photo(s.imgs[2],'p3 contain')+prov(s.imgs);
    else if(s.type==='afterimage')el.innerHTML=`<div class="old"><img src="${s.old.src}" alt="" aria-hidden="true"></div>`+photo(s.img,'contain')+prov([s.old,s.img]);
    else if(s.type==='closing')el.innerHTML=`<div class="text-wrap"><p class="kicker">VERSCHOBENE ORDNUNGEN</p><h2>${s.title}</h2><p class="small">${s.sub}</p></div>`;
    return el;}
  function sceneImages(s){if(s.img)return[s.img];if(s.imgs)return s.imgs;if(s.old)return[s.old,s.img].filter(Boolean);return[]}
  function preloadAround(i){for(let k=0;k<5;k++)sceneImages(scenes[(i+k)%scenes.length]).forEach(im=>{const x=new Image();x.src=im.src})}
  function setMemory(im){memory.classList.remove('on');if(!im){memory.style.backgroundImage='';return}memory.style.backgroundImage=`url("${im.src}")`;requestAnimationFrame(()=>memory.classList.add('on'))}
  function progressLoop(now){const s=scenes[index];if(!playing||!s)return;const elapsed=elapsedBeforePause+(now-startTime);fill.style.width=`${Math.min(100,elapsed/s.duration*100)}%`;raf=requestAnimationFrame(progressLoop)}
  function schedule(){clearTimeout(timer);cancelAnimationFrame(raf);if(!playing)return;const s=scenes[index],remaining=Math.max(100,s.duration-elapsedBeforePause);startTime=performance.now();timer=setTimeout(()=>show(index+1),remaining);raf=requestAnimationFrame(progressLoop)}
  function show(i){clearTimeout(timer);cancelAnimationFrame(raf);const old=currentNode,oldScene=index>=0?scenes[index]:null;if(oldScene){const ims=sceneImages(oldScene);if(ims.length)lastImage=ims[ims.length-1]}index=(i+scenes.length)%scenes.length;elapsedBeforePause=0;fill.style.width='0%';count.textContent=`${String(index+1).padStart(2,'0')} / ${String(scenes.length).padStart(2,'0')}`;setMemory(lastImage);const node=renderScene(scenes[index]);stage.appendChild(node);requestAnimationFrame(()=>{node.classList.add('current','enter');if(old){old.classList.remove('current');old.classList.add('leaving');setTimeout(()=>old.remove(),900)}});currentNode=node;preloadAround(index);schedule()}
  function pause(){if(!playing)return;playing=false;clearTimeout(timer);cancelAnimationFrame(raf);elapsedBeforePause+=performance.now()-startTime;playBtn.textContent='Weiter';playBtn.setAttribute('aria-pressed','false')}
  function play(){if(playing)return;playing=true;playBtn.textContent='Pause';playBtn.setAttribute('aria-pressed','true');schedule()}
  function togglePlay(){playing?pause():play()}
  playBtn.addEventListener('click',()=>{document.body.classList.add('interacted');togglePlay()});
  prevBtn.addEventListener('click',()=>{document.body.classList.add('interacted');show(index-1)});nextBtn.addEventListener('click',()=>{document.body.classList.add('interacted');show(index+1)});
  provBtn.addEventListener('click',()=>{document.body.classList.add('interacted');const on=document.body.classList.toggle('show-prov');provBtn.setAttribute('aria-pressed',on?'true':'false')});
  document.addEventListener('keydown',e=>{if(['INPUT','TEXTAREA'].includes(document.activeElement?.tagName))return;if(e.code==='Space'){e.preventDefault();togglePlay()}else if(e.key==='ArrowRight'||e.key==='ArrowDown'){e.preventDefault();show(index+1)}else if(e.key==='ArrowLeft'||e.key==='ArrowUp'){e.preventDefault();show(index-1)}else if(e.key.toLowerCase()==='p')provBtn.click();document.body.classList.add('interacted')});
  show(0);
})();
