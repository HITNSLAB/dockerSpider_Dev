(function() {
var aa=encodeURIComponent,ba=window,ca=Object,da=Infinity,ea=document,fa=isNaN,h=Math,ga=Array,ha=Number,ia=NaN,m=Error,ja=Boolean,ka=parseInt,la=parseFloat,na=isFinite,oa=decodeURIComponent;function pa(a,b){return a.width=b}function qa(a,b){return a.data=b}function ra(a,b){return a.ceil=b}function sa(a,b){return a.floor=b}function ta(a,b){return a.format=b}function ua(a,b){return a.remove=b}function va(a,b){return a.clear=b}function wa(a,b){return a.getColumnIndex=b}
function xa(a,b){return a.stroke=b}function ya(a,b){return a.getTime=b}function za(a,b){return a.fill=b}function Aa(a,b){return a.toString=b}function Ba(a,b){return a.position=b}function Ca(a,b){return a.toJSON=b}function Da(a,b){return a.next=b}function Ea(a,b){return a.constructor=b}function Fa(a,b){return a.fontSize=b}function Ga(a,b){return a.message=b}function Ia(a,b){return a.clone=b}function Ka(a,b){return a.start=b}function La(a,b){return a.init=b}function Ma(a,b){return a.bottom=b}
function Na(a,b){return a.scale=b}function Oa(a,b){return a.rows=b}function Pa(a,b){return a.contains=b}function Qa(a,b){return a.label=b}function Ra(a,b){return a.display=b}function Sa(a,b){return a.height=b}function Ta(a,b){return a.right=b}function Ua(a,b){return a.isEmpty=b}function Wa(a,b){return a.round=b}function Xa(a,b){return a.innerHTML=b}function Ya(a,b){return a.color=b}function Za(a,b){return a.left=b}function $a(a,b){return a.equals=b}function ab(a,b){return a.cssText=b}
function bb(a,b){return a.getHeight=b}function cb(a,b){return a.type=b}function db(a,b){return a.tabIndex=b}function eb(a,b){return a.translate=b}function fb(a,b){return a.name=b}function gb(a,b){return a.getValue=b}function hb(a,b){return a.parse=b}function ib(a,b){return a.visibility=b}function jb(a,b){return a.bold=b}function kb(a,b){return a.length=b}function lb(a,b){return a.prototype=b}function mb(a,b){return a.className=b}function nb(a,b){return a.opacity=b}
function ob(a,b){return a.sort=b}
var q="appendChild",pb="filter",qb="activeElement",rb="getBoundingClientRect",sb="shift",tb="exec",r="width",ub="collapse",vb="pattern",wb="replace",xb="toFixed",yb="ceil",t="floor",zb="content",Ab="offsetWidth",Bb="concat",Cb="charAt",Db="createTextNode",Eb="getDate",Fb="insertBefore",Gb="interval",Hb="targetTouches",Ib="screenX",Kb="screenY",Lb="match",Mb="getUTCFullYear",Nb="format",Ob="getBoxObjectFor",Pb="cols",Qb="remove",Rb="querySelector",Sb="createElement",Tb="scrollHeight",Ub="firstChild",
Vb="forEach",Wb="clientLeft",w="setAttribute",Xb="clientTop",Yb="clear",Zb="childNodes",$b="stroke",ac="bind",bc="getHours",cc="names",dc="nextSibling",ec="getTime",fc="getElementsByTagName",gc="documentElement",hc="substr",ic="fill",jc="previousSibling",kc="toString",lc="propertyIsEnumerable",mc="position",nc="getDay",oc="sourceIndex",pc="index",qc="next",rc="split",tc="offsetParent",uc="constructor",vc="userAgent",wc="stack",xc="location",yc="fontSize",zc="hasOwnProperty",x="style",Ac="ownerDocument",
Bc="clone",Cc="search",Dc="lastChild",Ec="getUTCMonth",Fc="getYear",Gc="scrollWidth",y="start",Hc="random",Ic="setProperty",Jc="getFullYear",Kc="init",Lc="scrollLeft",Mc="bottom",Nc="href",Oc="setTime",Pc="rows",Rc="contains",Sc="apply",Tc="tagName",Uc="removeAttribute",Vc="getMinutes",Wc="label",Xc="display",Yc="offsetTop",A="height",Zc="offsetHeight",$c="Range",ad="execScript",bd="nodeValue",cd="right",C="push",dd="isEmpty",fd="valueOf",gd="stringify",hd="test",id="text",E="round",jd="slice",kd=
"nodeType",ld="load",md="getElementById",nd="innerHTML",od="value",pd="item",qd="indexOf",F="color",rd="compareDocumentPosition",sd="nodeName",td="createRange",G="left",ud="setMonth",vd="fromCharCode",wd="setFullYear",xd="atan2",yd="children",zd="sqrt",Ad="Format",H="type",Bd="defaultView",Cd="name",I="getValue",Dd="clientX",Ed="clientY",Fd="setDate",Gd="scrollTop",Hd="getMonth",Id="bold",J="length",K="prototype",Jd="className",Kd="clientWidth",Ld="document",Md="getSeconds",Nd="getUTCDate",Od="opacity",
Pd="getMilliseconds",Qd="visualization",Rd="disabled",Sd="offsetLeft",Td="body",Ud="removeChild",L="call",Vd="some",Wd="lastIndexOf",Xd="getAttribute",Yd="querySelectorAll",Zd="setUTCMonth",$d="clientHeight",ae="charCodeAt",be="compatMode",ce="sort",de="currentStyle",ee="substring",fe="documentMode",ge="every",he="getUTCMinutes",ie="getUTCHours",je="parentNode",ke="toUpperCase",le="splice",me="join",oe="unshift",pe="toLowerCase",qe="getTimezoneOffset",O="",aaa="\x00",re="\n",se=" ",te=" and ",baa=
" does not match type ",caa=' name="',daa=' type="',ue='"',ve='" />',we="#",eaa="#$1$1$2$2$3$3",xe="#000000",ye="#808080",ze="#fff",Ae="#ffffff",Be="$",Ce="$1",De="%",Ee="&",Fe="&#0;",He="&#39;",Ie="&amp;",faa="&client=google-gviz",Je="&gt;",Ke="&lt;",Le="&quot;",Me="'",gaa="''",Ne="(",haa="(^",Oe=")",iaa=")([a-z])",Pe="*",Qe="+",Re=",",Se=", ",Te="-",jaa="-moz",kaa="-ms",laa="-o",maa="-transform",naa="-webkit",Ue=".",Ve="...",We=".SSS",oaa='.png" height="12" width="',paa="//ajax.googleapis.com/ajax",
qaa="/static/modules/gviz/",raa="/util/bar_",saa="/util/format.css",Xe="0",Ye="0.5",Ze="0.6",taa="00",$e="000",uaa="0000000000000000",af="1",vaa="1.0",waa="1.9",bf="10",cf="3",df="9",ef=":",ff=":ss",gf=";",hf="<",xaa="</span>\u00a0",yaa="</table>",zaa="</tr>",jf="<br>",Aaa='<img style="padding: 0" src="',Baa='<span style="padding: 0; float: left; white-space: nowrap;">',Caa="<table>",Daa="<td>&nbsp;</td>",Eaa="<td></td>",kf="<tr>",lf="=",mf=">",nf="?",Faa="@",of="A",Gaa="APPLET",Haa="AREA",Iaa="BASE",
pf="BR",qf="BUTTON",Jaa="COL",Kaa="COMMAND",rf="CSS1Compat",Laa="Can't combine significant digits and minimum fraction digits",sf="Column ",tf="Container is not defined",uf="DAY",vf="DIV",Maa="Date(",yf="December",zf="E",Naa="EMBED",Oaa="Etc/GMT",Af="F",Paa="FRAME",Bf="February",Qaa="G",Raa="GMT",Saa="H",Cf="HH:mm",Taa="HOUR",Df="HR",Uaa="IFRAME",Vaa="IMG",Ef="INPUT",Waa="ISINDEX",Xaa="JavaScript",Yaa="K",Zaa="KEYGEN",Ff="L",$aa="LINK",Gf="M",aba="META",Hf="MILLISECOND",bba="MINUTE",If="MMM d",Jf=
"MONTH",Kf="MSIE",cba="Moz",dba="MozOpacity",Lf="N",eba="NOFRAMES",fba="NOSCRIPT",Mf="November",Nf="O",gba="OBJECT",hba="PARAM",Of="Q",iba="Q yyyy",Pf="QUARTER",Qf="S",Rf="SCRIPT",jba="SECOND",Sf="SELECT",Tf="SOURCE",kba="STYLE",lba="SVG",Uf="Saturday",Vf="September",mba="Style",Wf="T",Xf="TEXTAREA",Yf="TL",Zf="TR",nba="TRACK",bg="Thursday",oba="Too many percent/permill",pba="Type mismatch. Value ",qba="UTC",rba="Uneven number of arguments",eg="W",sba="WBR",tba="WEEK",uba="Webkit",fg="Wednesday",
vba="Width",gg="YEAR",hg="Z",wba="[",xba="[object Array]",yba="[object Function]",zba="[object Window]",Aba="\\",Bba="\\$1",ig="\\\\",jg="\\s",Cba="\\u",Dba="\\x08",kg="]",Eba="]+",Fba="_bar_format_old_value",lg="_default_",mg="a",pg="absolute",Gba="alpha(opacity=",Hba="amp",qg="aria-",rg="array",sg="auto",tg="b",ug="background-color:",Iba="bar.groupWidth",vg="body",wg="boolean",Jba="borderBottom",Kba="borderBottomWidth",Lba="borderLeft",Mba="borderLeftWidth",Nba="borderRight",Oba="borderRightWidth",
Pba="borderTop",Qba="borderTopWidth",xg="both",yg="c",Rba="call",Sba="callee",Tba="class",Uba="className",Vba="clearMinutes",Wba="color:",zg="column",Xba="columnFilters[",Yba="compare",Ag="d",Zba="data-",Bg="date",Cg="datetime",$ba="decimalSymbol",aca="desc",Dg="direction",Eg="display",P="div",bca="document",Fg="f",Gg="false",Ig="filter",Jg="fixed",Kg="focus",cca="for",dca="formatType",eca="fractionDigits",Lg="full",Mg="function",Ng="g",fca="google-visualization-formatters-arrow-dr",gca="google-visualization-formatters-arrow-empty",
hca="google-visualization-formatters-arrow-ug",ica="google.charts.",jca="google.loader.GoogleApisBase",kca="google.maps.DirectionsService",lca="google.visualization.",mca="google.visualization.ModulePath",nca="google.visualization.NumberFormat",oca="google.visualization.Version",pca="groupingSymbol",qca="gt",Og="h",Pg="h:mm a",Qg="head",Rg="height",rca="hex",Sg="hidden",Tg="horizontal",Ug="href",Vg="html",Wg="https",Zg="inline",sca="innerText",$g="k",ah="left",bh="link",ch="long",tca="lt",dh="m",
uca="maps",eh="maxValue",fh="medium",gh="minValue",vca="ms",wca="named",xca="native code",yca="negativeColor",zca="negativeParens",Aca="new ",Q="none",hh="null",T="number",ih="o",jh="object",kh="on",lh="opacity",Bca="outerHTML",oh="overflow",Cca="paddingBottom",Dca="paddingLeft",Eca="paddingRight",Fca="paddingTop",ph="pattern",Gca="pixelHeight",Hca="pixelLeft",Ica="pixelWidth",qh="position",rh="prefix",U="px",Jca="quot",sh="r",th="relative",uh="rgb",vh="role",wh="rtl",xh="s",Kca="scaleFactor",yh=
"script",zh="selection",Lca="sensor=false",Ah="short",Bh="single",Ch="solid",Mca="sortColumns",Nca="sortColumns[",Oca="sourceIndex",Pca="splice",Dh="static",Eh="string",Fh="style",Qca="stylesheet",Gh="suffix",Rca="tabIndex",Sca="tabindex",Tca="text/css",Hh="text/javascript",Uca="textContent",Ih="time",Vca="timeZone",Jh="timeofday",Kh="transform",Lh="transparent",Mh="true",Nh="type",Oh="unselectable",Ph="v",Qh="value",Wca="valueType",Xca="var ",Yca="var _et_ = 1;",Rh="vertical",Sh="visible",Zca="visualization",
Th="w",Uh="white",Vh="width",Wh="y",Xh="z",$ca="zoomButtonsOrder",Yh="{",ada="{0}",bda="{1}",cda="|[",Zh="}",$h="\u00a0",dda="\u00a4",eda="\u2030",W,ai=ai||{},bi=this;function ci(a){return void 0!==a}function di(a,b,c){a=a[rc](Ue);c=c||bi;a[0]in c||!c[ad]||c[ad](Xca+a[0]);for(var d;a[J]&&(d=a[sb]());)!a[J]&&ci(b)?c[d]=b:c=c[d]?c[d]:c[d]={}}function ei(a,b){for(var c=a[rc](Ue),d=b||bi,e;e=c[sb]();)if(null!=d[e])d=d[e];else return null;return d}function fi(){}
function gi(a){a.Vb=function(){return a.bfa?a.bfa:a.bfa=new a}}function hi(a){var b=typeof a;if(b==jh)if(a){if(a instanceof ga)return rg;if(a instanceof ca)return b;var c=ca[K][kc][L](a);if(c==zba)return jh;if(c==xba||typeof a[J]==T&&"undefined"!=typeof a[le]&&"undefined"!=typeof a[lc]&&!a[lc](Pca))return rg;if(c==yba||"undefined"!=typeof a[L]&&"undefined"!=typeof a[lc]&&!a[lc](Rba))return Mg}else return hh;else if(b==Mg&&"undefined"==typeof a[L])return jh;return b}
function ii(a){return null===a}function ji(a){return null!=a}function ki(a){return hi(a)==rg}function li(a){var b=hi(a);return b==rg||b==jh&&typeof a[J]==T}function mi(a){return ni(a)&&typeof a[Jc]==Mg}function oi(a){return typeof a==Eh}function pi(a){return typeof a==wg}function qi(a){return typeof a==T}function ri(a){return hi(a)==Mg}function ni(a){var b=typeof a;return b==jh&&null!=a||b==Mg}function ti(a){return a[fda]||(a[fda]=++gda)}var fda="closure_uid_"+(1E9*h[Hc]()>>>0),gda=0;
function hda(a,b,c){return a[L][Sc](a[ac],arguments)}function ida(a,b,c){if(!a)throw m();if(2<arguments[J]){var d=ga[K][jd][L](arguments,2);return function(){var c=ga[K][jd][L](arguments);ga[K][oe][Sc](c,d);return a[Sc](b,c)}}return function(){return a[Sc](b,arguments)}}function X(a,b,c){X=Function[K][ac]&&-1!=Function[K][ac][kc]()[qd](xca)?hda:ida;return X[Sc](null,arguments)}
function ui(a,b){var c=ga[K][jd][L](arguments,1);return function(){var b=c[jd]();b[C][Sc](b,arguments);return a[Sc](this,b)}}var vi=Date.now||function(){return+new Date};function jda(a){if(bi[ad])bi[ad](a,Xaa);else if(bi.eval)if(null==wi&&(bi.eval(Yca),"undefined"!=typeof bi._et_?(delete bi._et_,wi=!0):wi=!1),wi)bi.eval(a);else{var b=bi[Ld],c=b[Sb](yh);cb(c,Hh);c.defer=!1;c[q](b[Db](a));b[Td][q](c);b[Td][Ud](c)}else throw m("goog.globalEval not available");}var wi=null;

    function Y(a, b) {
        function c() {
        }

        lb(c, b[K]);
        a.e = b[K];
        lb(a, new c);
        Ea(a[K], a);
        a.je = function (a, c, f) {
            var g = ga[K][jd][L](arguments, 2);
            return b[K][c][Sc](a, g)
        }
    }

    var google = google || ba.google || {};

    function xi(a) {
        if (m.captureStackTrace) m.captureStackTrace(this, xi); else {
            var b = m()[wc];
            b && (this.stack = b)
        }
        a && Ga(this, String(a))
    }

    Y(xi, m);
    fb(xi[K], "CustomError");
    var kda;

    function yi(a, b) {
        return 0 == a[Wd](b, 0)
    }

    function lda(a) {
        var b = a[J] - 1;
        return 0 <= b && a[qd](De, b) == b
    }

    function zi(a) {
        return /^[\s\xa0]*$/[hd](a)
    }

    function Ai(a) {
        return zi(Bi(a))
    }

    function Ci(a) {
        return !/[^0-9]/[hd](a)
    }

    function mda(a) {
        return a[wb](/[\t\r\n ]+/g, se)[wb](/^[\t\r\n ]+|[\t\r\n ]+$/g, O)
    }

    function Di(a) {
        return a[wb](/^[\s\xa0]+|[\s\xa0]+$/g, O)
    }

    function Ei(a, b) {
        if (b) a = a[wb](nda, Ie)[wb](oda, Ke)[wb](pda, Je)[wb](qda, Le)[wb](rda, He)[wb](sda, Fe); else {
            if (!tda[hd](a))return a;
            -1 != a[qd](Ee) && (a = a[wb](nda, Ie));
            -1 != a[qd](hf) && (a = a[wb](oda, Ke));
            -1 != a[qd](mf) && (a = a[wb](pda, Je));
            -1 != a[qd](ue) && (a = a[wb](qda, Le));
            -1 != a[qd](Me) && (a = a[wb](rda, He));
            -1 != a[qd](aaa) && (a = a[wb](sda, Fe))
        }
        return a
    }

    var nda = /&/g, oda = /</g, pda = />/g, qda = /"/g, rda = /'/g, sda = /\x00/g, tda = /[\x00&<>"']/;

    function uda(a) {
        return Fi(a, Ee) ? bca in bi ? vda(a) : wda(a) : a
    }
function vda(a){var b={"&amp;":Ee,"&lt;":hf,"&gt;":mf,"&quot;":ue},c;c=bi[Ld][Sb](P);return a[wb](xda,function(a,e){var f=b[a];if(f)return f;if(e[Cb](0)==we){var g=ha(Xe+e[hc](1));fa(g)||(f=String[vd](g))}f||(Xa(c,a+se),f=c[Ub][bd][jd](0,-1));return b[a]=f})}function wda(a){return a[wb](/&([^;]+);/g,function(a,c){switch(c){case Hba:return Ee;case tca:return hf;case qca:return mf;case Jca:return ue;default:if(c[Cb](0)==we){var d=ha(Xe+c[hc](1));if(!fa(d))return String[vd](d)}return a}})}var xda=/&([^;\s<&]+);?/g;
function Gi(a,b){a[J]>b&&(a=a[ee](0,b-3)+Ve);return a}function Fi(a,b){return-1!=a[qd](b)}function Hi(a,b){return ga(b+1)[me](a)}function Ii(a,b){var c=ci(void 0)?a[xb](void 0):String(a),d=c[qd](Ue);-1==d&&(d=c[J]);return Hi(Xe,h.max(0,b-d))+c}function Bi(a){return null==a?O:String(a)}function yda(a){return ga[K][me][L](arguments,O)}
function Ji(a,b){for(var c=0,d=Di(String(a))[rc](Ue),e=Di(String(b))[rc](Ue),f=h.max(d[J],e[J]),g=0;0==c&&g<f;g++){var k=d[g]||O,l=e[g]||O,n=/(\d*)(\D*)/g,p=/(\d*)(\D*)/g;do{var s=n[tb](k)||[O,O,O],u=p[tb](l)||[O,O,O];if(0==s[0][J]&&0==u[0][J])break;c=Ki(0==s[1][J]?0:ka(s[1],10),0==u[1][J]?0:ka(u[1],10))||Ki(0==s[2][J],0==u[2][J])||Ki(s[2],u[2])}while(0==c)}return c}function Ki(a,b){return a<b?-1:a>b?1:0}function Li(a){for(var b=0,c=0;c<a[J];++c)b=31*b+a[ae](c),b%=4294967296;return b}

    var zda = 2147483648 * h[Hc]() | 0;

    function Mi(a) {
        var b = ha(a);
        return 0 == b && zi(a) ? ia : b
    }

    function Ni(a) {
        return String(a)[wb](/\-([a-z])/g, function (a, c) {
            return c[ke]()
        })
    }

    function Ada(a) {
        var b = oi(void 0) ? "undefined"[wb](/([-()\[\]{}+?*.$\^|,:#<!\\])/g, Bba)[wb](/\x08/g, Dba) : jg;
        return a[wb](new RegExp(haa + (b ? cda + b + Eba : O) + iaa, Ng), function (a, b, e) {
            return b + e[ke]()
        })
    }

    function Oi(a) {
        return a[a[J] - 1]
    }

    var Pi = ga[K], Qi = Pi[qd] ? function (a, b, c) {
        return Pi[qd][L](a, b, c)
    } : function (a, b, c) {
        c = null == c ? 0 : 0 > c ? h.max(0, a[J] + c) : c;
        if (oi(a))return oi(b) && 1 == b[J] ? a[qd](b, c) : -1;
        for (; c < a[J]; c++)if (c in a && a[c] === b)return c;
        return -1
    }, Bda = Pi[Wd] ? function (a, b, c) {
        return Pi[Wd][L](a, b, null == c ? a[J] - 1 : c)
    } : function (a, b, c) {
        c = null == c ? a[J] - 1 : c;
        0 > c && (c = h.max(0, a[J] + c));
        if (oi(a))return oi(b) && 1 == b[J] ? a[Wd](b, c) : -1;
        for (; 0 <= c; c--)if (c in a && a[c] === b)return c;
        return -1
    }, Z = Pi[Vb] ? function (a, b, c) {
        Pi[Vb][L](a, b, c)
    } : function (a, b, c) {
        for (var d =
a[J],e=oi(a)?a[rc](O):a,f=0;f<d;f++)f in e&&b[L](c,e[f],f,a)};function Ri(a,b,c){for(var d=a[J],e=oi(a)?a[rc](O):a,d=d-1;0<=d;--d)d in e&&b[L](c,e[d],d,a)}
var Si=Pi[pb]?function(a,b,c){return Pi[pb][L](a,b,c)}:function(a,b,c){for(var d=a[J],e=[],f=0,g=oi(a)?a[rc](O):a,k=0;k<d;k++)if(k in g){var l=g[k];b[L](c,l,k,a)&&(e[f++]=l)}return e},Ti=Pi.map?function(a,b,c){return Pi.map[L](a,b,c)}:function(a,b,c){for(var d=a[J],e=ga(d),f=oi(a)?a[rc](O):a,g=0;g<d;g++)g in f&&(e[g]=b[L](c,f[g],g,a));return e},Ui=Pi.reduce?function(a,b,c,d){d&&(b=X(b,d));return Pi.reduce[L](a,b,c)}:function(a,b,c,d){var e=c;Z(a,function(c,g){e=b[L](d,e,c,g,a)});return e},Vi=Pi[Vd]?
function(a,b,c){return Pi[Vd][L](a,b,c)}:function(a,b,c){for(var d=a[J],e=oi(a)?a[rc](O):a,f=0;f<d;f++)if(f in e&&b[L](c,e[f],f,a))return!0;return!1},Wi=Pi[ge]?function(a,b,c){return Pi[ge][L](a,b,c)}:function(a,b,c){for(var d=a[J],e=oi(a)?a[rc](O):a,f=0;f<d;f++)if(f in e&&!b[L](c,e[f],f,a))return!1;return!0};function Cda(a,b){var c=0;Z(a,function(a,e,f){b[L](void 0,a,e,f)&&++c},void 0);return c}function Xi(a,b,c){b=Yi(a,b,c);return 0>b?null:oi(a)?a[Cb](b):a[b]}
function Yi(a,b,c){for(var d=a[J],e=oi(a)?a[rc](O):a,f=0;f<d;f++)if(f in e&&b[L](c,e[f],f,a))return f;return-1}function Zi(a,b){var c;t:{var d=a[J];c=oi(a)?a[rc](O):a;for(d-=1;0<=d;d--)if(d in c&&b[L](void 0,c[d],d,a)){c=d;break t}c=-1}return 0>c?null:oi(a)?a[Cb](c):a[c]}function $i(a,b){return 0<=Qi(a,b)}function aj(a){return 0==a[J]}function bj(a){if(!ki(a))for(var b=a[J]-1;0<=b;b--)delete a[b];kb(a,0)}function cj(a,b,c){dj(a,c,0,b)}
function ej(a,b){var c=Qi(a,b),d;(d=0<=c)&&Pi[le][L](a,c,1);return d}function fj(a){return Pi[Bb][Sc](Pi,arguments)}function gj(a){var b=a[J];if(0<b){for(var c=ga(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}function ij(a,b){for(var c=1;c<arguments[J];c++){var d=arguments[c],e;if(ki(d)||(e=li(d))&&ca[K][zc][L](d,Sba))a[C][Sc](a,d);else if(e)for(var f=a[J],g=d[J],k=0;k<g;k++)a[f+k]=d[k];else a[C](d)}}function dj(a,b,c,d){return Pi[le][Sc](a,jj(arguments,1))}
function jj(a,b,c){return 2>=arguments[J]?Pi[jd][L](a,b):Pi[jd][L](a,b,c)}function Dda(a){for(var b={},c=0,d=0;d<a[J];){var e=a[d++],f=ni(e)?ih+ti(e):(typeof e)[Cb](0)+e;ca[K][zc][L](b,f)||(b[f]=!0,a[c++]=e)}kb(a,c)}function kj(a,b,c){return Eda(a,c||lj,!1,b)}function Fda(a,b,c){return Eda(a,b,!0,void 0,c)}function Eda(a,b,c,d,e){for(var f=0,g=a[J],k;f<g;){var l=f+g>>1,n;n=c?b[L](e,a[l],l,a):b(d,a[l]);0<n?f=l+1:(g=l,k=!n)}return k?f:~f}function mj(a,b){a[ce](b||lj)}
function nj(a,b){for(var c=0;c<a[J];c++)a[c]={index:c,value:a[c]};var d=b||lj;mj(a,function(a,b){return d(a[od],b[od])||a[pc]-b[pc]});for(c=0;c<a[J];c++)a[c]=a[c][od]}function Gda(a){var b=lj;mj(a,function(a,d){return b(a.x,d.x)})}function oj(a,b){if(!li(a)||!li(b)||a[J]!=b[J])return!1;for(var c=a[J],d=Hda,e=0;e<c;e++)if(!d(a[e],b[e]))return!1;return!0}function lj(a,b){return a>b?1:a<b?-1:0}function Hda(a,b){return a===b}
function Ida(a,b){for(var c={},d=0;d<a[J];d++){var e=a[d],f=b[L](void 0,e,d,a);ci(f)&&(c[f]||(c[f]=[]))[C](e)}return c}function pj(a){var b=[];if(0>1*(a-0))return[];for(var c=0;c<a;c+=1)b[C](c);return b}function qj(a,b){for(var c=[],d=0;d<b;d++)c[d]=a;return c}function vj(a){for(var b=[],c=0;c<arguments[J];c++){var d=arguments[c];ki(d)?b[C][Sc](b,vj[Sc](null,d)):b[C](d)}return b}

    function wj(a) {
        if (!arguments[J])return [];
        for (var b = [], c = 0; ; c++) {
            for (var d = [], e = 0; e < arguments[J]; e++) {
                var f = arguments[e];
                if (c >= f[J])return b;
                d[C](f[c])
            }
            b[C](d)
        }
    }

    function xj(a) {
        return function () {
            return a
        }
    }

    var Jda = xj(!0), yj = xj(null);

    function zj(a) {
        return a
    }

    function Kda(a) {
        var b;
        b = b || 0;
        return function () {
            return a[Sc](this, ga[K][jd][L](arguments, 0, b))
        }
    }

    function Lda() {
        return function () {
            return !ii[Sc](this, arguments)
        }
    }

    function Aj(a, b, c) {
        return h.min(h.max(a, b), c)
    }

    function Bj(a, b) {
        var c = a % b;
        return 0 > c * b ? c + b : c
    }

    function Cj(a, b, c) {
        return a + c * (b - a)
    }

    function Dj(a) {
        return a * h.PI / 180
    }

    function Ej(a, b) {
        return b * h.cos(Dj(a))
    }

    function Fj(a, b) {
        return b * h.sin(Dj(a))
    }

    function Gj(a, b, c, d) {
        return Bj(180 * h[xd](d - b, c - a) / h.PI, 360)
    }

    function Hj(a) {
        return 0 == a ? 0 : 0 > a ? -1 : 1
    }

    function Ij(a) {
        return Ui(arguments, function (a, c) {
            return a + c
        }, 0)
    }

    function Jj(a) {
        return Ij[Sc](null, arguments) / arguments[J]
    }

    function Kj(a) {
        return na(a) && 0 == a % 1
    }

    function Lj(a) {
        return na(a) && !fa(a)
    }

    var Mj = "StopIteration" in bi ? bi.StopIteration : m("StopIteration");

    function Nj() {
    }

    Da(Nj[K], function () {
        throw Mj;
    });
    Nj[K].at = function () {
        return this
    };
    function Pj(a) {
        if (a instanceof Nj)return a;
        if (typeof a.at == Mg)return a.at(!1);
        if (li(a)) {
            var b = 0, c = new Nj;
            Da(c, function () {
                for (; ;) {
                    if (b >= a[J])throw Mj;
                    if (b in a)return a[b++];
                    b++
                }
            });
            return c
        }
        throw m("Not implemented");
    }

    function Qj(a, b, c) {
        if (li(a))try {
            Z(a, b, c)
        } catch (d) {
            if (d !== Mj)throw d;
        } else {
            a = Pj(a);
            try {
                for (; ;)b[L](c, a[qc](), void 0, a)
            } catch (e) {
                if (e !== Mj)throw e;
            }
        }
    }

    function Rj(a, b, c) {
        var d = 0, e = a, f = c || 1;
        1 < arguments[J] && (d = a, e = b);
        if (0 == f)throw m("Range step argument must not be zero");
        var g = new Nj;
        Da(g, function () {
            if (0 < f && d >= e || 0 > f && d <= e)throw Mj;
            var a = d;
            d += f;
            return a
        });
        return g
    }

    function Mda(a, b, c) {
        var d = Pj(a);
        a = new Nj;
        Da(a, function () {
            var a = d[qc]();
            return b[L](c, a, void 0, d)
        });
        return a
    }

    function Nda(a) {
        var b = Pj(arguments), c = new Nj, d = null;
        Da(c, function () {
            for (; ;) {
                if (null == d) {
                    var a = b[qc]();
                    d = Pj(a)
                }
                try {
                    return d[qc]()
                } catch (c) {
                    if (c !== Mj)throw c;
                    d = null
                }
            }
        });
        return c
    }

    function Oda(a) {
        if (li(a))return gj(a);
        a = Pj(a);
        var b = [];
        Qj(a, function (a) {
            b[C](a)
        });
        return b
    }

    function Pda(a) {
        try {
            return Pj(a)[qc]()
        } catch (b) {
            if (b != Mj)throw b;
            return null
        }
    }

    function Sj(a, b, c) {
        for (var d in a)b[L](c, a[d], d, a)
    }

    function Vj(a, b, c) {
        var d = {}, e;
        for (e in a)d[e] = b[L](c, a[e], e, a);
        return d
    }

    function Wj(a, b) {
        for (var c in a)if (b[L](void 0, a[c], c, a))return !0;
        return !1
    }

    function Xj(a, b, c) {
        for (var d in a)if (!b[L](c, a[d], d, a))return !1;
        return !0
    }

    function Qda(a) {
        var b = 0, c;
        for (c in a)b++;
        return b
    }

    function Yj(a) {
        for (var b in a)return a[b]
    }

    function Zj(a) {
        var b = [], c = 0, d;
        for (d in a)b[c++] = a[d];
        return b
    }

    function ak(a) {
        var b = [], c = 0, d;
        for (d in a)b[c++] = d;
        return b
    }

    function bk(a, b) {
        for (var c in a)if (a[c] == b)return !0;
        return !1
    }

    function ck(a) {
        for (var b in a)return !1;
        return !0
    }

    function dk(a, b) {
        b in a && delete a[b]
    }

    function ek(a, b, c) {
        if (b in a)throw m('The object already contains the key "' + b + ue);
        a[b] = c
    }

    function fk(a, b, c) {
        return b in a ? a[b] : a[b] = c
    }

    function gk(a) {
        var b = {}, c;
        for (c in a)b[c] = a[c];
        return b
    }

    function hk(a) {
        var b = hi(a);
        if (b == jh || b == rg) {
            if (a[Bc])return a[Bc]();
            var b = b == rg ? [] : {}, c;
            for (c in a)b[c] = hk(a[c]);
            return b
        }
        return a
    }
function ik(a){var b={},c;for(c in a)b[a[c]]=c;return b}var Rda="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function jk(a,b){for(var c,d,e=1;e<arguments[J];e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Rda[J];f++)c=Rda[f],ca[K][zc][L](d,c)&&(a[c]=d[c])}}

    function Sda(a) {
        var b = arguments[J];
        if (1 == b && ki(arguments[0]))return Sda[Sc](null, arguments[0]);
        if (b % 2)throw m(rba);
        for (var c = {}, d = 0; d < b; d += 2)c[arguments[d]] = arguments[d + 1];
        return c
    }

    function kk(a) {
        var b = arguments[J];
        if (1 == b && ki(arguments[0]))return kk[Sc](null, arguments[0]);
        for (var c = {}, d = 0; d < b; d++)c[arguments[d]] = !0;
        return c
    }

    function lk(a, b) {
        this.gb = {};
        this.ne = [];
        this.Oy = this.Tb = 0;
        var c = arguments[J];
        if (1 < c) {
            if (c % 2)throw m(rba);
            for (var d = 0; d < c; d += 2)this.set(arguments[d], arguments[d + 1])
        } else a && this.jD(a)
    }

    W = lk[K];
    W.dc = function () {
        return this.Tb
    };
    W.Ua = function () {
        mk(this);
        for (var a = [], b = 0; b < this.ne[J]; b++)a[C](this.gb[this.ne[b]]);
        return a
    };
    W.Mk = function () {
        mk(this);
        return this.ne[Bb]()
    };
    W.bf = function (a) {
        return nk(this.gb, a)
    };
    W.$T = function (a) {
        for (var b = 0; b < this.ne[J]; b++) {
            var c = this.ne[b];
            if (nk(this.gb, c) && this.gb[c] == a)return !0
        }
        return !1
    };
    $a(W, function (a, b) {
        if (this === a)return !0;
        if (this.Tb != a.dc())return !1;
        var c = b || Tda;
        mk(this);
        for (var d, e = 0; d = this.ne[e]; e++)if (!c(this.get(d), a.get(d)))return !1;
        return !0
    });
    function Tda(a, b) {
        return a === b
    }

    Ua(W, function () {
        return 0 == this.Tb
    });
    va(W, function () {
        this.gb = {};
        kb(this.ne, 0);
        this.Oy = this.Tb = 0
    });
    ua(W, function (a) {
        return nk(this.gb, a) ? (delete this.gb[a], this.Tb--, this.Oy++, this.ne[J] > 2 * this.Tb && mk(this), !0) : !1
    });
function mk(a){if(a.Tb!=a.ne[J]){for(var b=0,c=0;b<a.ne[J];){var d=a.ne[b];nk(a.gb,d)&&(a.ne[c++]=d);b++}kb(a.ne,c)}if(a.Tb!=a.ne[J]){for(var e={},c=b=0;b<a.ne[J];)d=a.ne[b],nk(e,d)||(a.ne[c++]=d,e[d]=1),b++;kb(a.ne,c)}}W.get=function(a,b){return nk(this.gb,a)?this.gb[a]:b};W.set=function(a,b){nk(this.gb,a)||(this.Tb++,this.ne[C](a),this.Oy++);this.gb[a]=b};W.jD=function(a){var b;a instanceof lk?(b=a.Mk(),a=a.Ua()):(b=ak(a),a=Zj(a));for(var c=0;c<b[J];c++)this.set(b[c],a[c])};
W.forEach=function(a,b){for(var c=this.Mk(),d=0;d<c[J];d++){var e=c[d],f=this.get(e);a[L](b,f,e,this)}};Ia(W,function(){return new lk(this)});W.transpose=function(){for(var a=new lk,b=0;b<this.ne[J];b++){var c=this.ne[b];a.set(this.gb[c],c)}return a};W.at=function(a){mk(this);var b=0,c=this.ne,d=this.gb,e=this.Oy,f=this,g=new Nj;Da(g,function(){for(;;){if(e!=f.Oy)throw m("The map has changed since the iterator was created");if(b>=c[J])throw Mj;var g=c[b++];return a?g:d[g]}});return g};
    function nk(a, b) {
        return ca[K][zc][L](a, b)
    }

    function Uda(a) {
        return typeof a.dc == Mg ? a.dc() : li(a) || oi(a) ? a[J] : Qda(a)
    }

    function ok(a) {
        if (typeof a.Ua == Mg)return a.Ua();
        if (oi(a))return a[rc](O);
        if (li(a)) {
            for (var b = [], c = a[J], d = 0; d < c; d++)b[C](a[d]);
            return b
        }
        return Zj(a)
    }

    function pk(a) {
        if (typeof a.Mk == Mg)return a.Mk();
        if (typeof a.Ua != Mg) {
            if (li(a) || oi(a)) {
                var b = [];
                a = a[J];
                for (var c = 0; c < a; c++)b[C](c);
                return b
            }
            return ak(a)
        }
    }

    function qk(a, b, c) {
        if (typeof a[Vb] == Mg) a[Vb](b, c); else if (li(a) || oi(a)) Z(a, b, c); else for (var d = pk(a), e = ok(a), f = e[J], g = 0; g < f; g++)b[L](c, e[g], d && d[g], a)
    }

    function Vda(a, b, c) {
        if (typeof a[pb] == Mg)return a[pb](b, c);
        if (li(a) || oi(a))return Si(a, b, c);
        var d, e = pk(a), f = ok(a), g = f[J];
        if (e) {
            d = {};
            for (var k = 0; k < g; k++)b[L](c, f[k], e[k], a) && (d[e[k]] = f[k])
        } else for (d = [], k = 0; k < g; k++)b[L](c, f[k], void 0, a) && d[C](f[k]);
        return d
    }

    function Wda(a, b, c) {
        if (typeof a.map == Mg)return a.map(b, c);
        if (li(a) || oi(a))return Ti(a, b, c);
        var d, e = pk(a), f = ok(a), g = f[J];
        if (e) {
            d = {};
            for (var k = 0; k < g; k++)d[e[k]] = b[L](c, f[k], e[k], a)
        } else for (d = [], k = 0; k < g; k++)d[k] = b[L](c, f[k], void 0, a);
        return d
    }

    function Xda(a, b, c) {
        if (typeof a[ge] == Mg)return a[ge](b, c);
        if (li(a) || oi(a))return Wi(a, b, c);
        for (var d = pk(a), e = ok(a), f = e[J], g = 0; g < f; g++)if (!b[L](c, e[g], d && d[g], a))return !1;
        return !0
    }

    function sk(a) {
        this.gb = new lk;
        a && this.jD(a)
    }

    function tk(a) {
        var b = typeof a;
        return b == jh && a || b == Mg ? ih + ti(a) : b[hc](0, 1) + a
    }

    W = sk[K];
    W.dc = function () {
        return this.gb.dc()
    };
    W.add = function (a) {
        this.gb.set(tk(a), a)
    };
    W.jD = function (a) {
        a = ok(a);
        for (var b = a[J], c = 0; c < b; c++)this.add(a[c])
    };
    W.mc = function (a) {
        a = ok(a);
        for (var b = a[J], c = 0; c < b; c++)this[Qb](a[c])
    };
    ua(W, function (a) {
        return this.gb[Qb](tk(a))
    });
    va(W, function () {
        this.gb[Yb]()
    });
    Ua(W, function () {
        return this.gb[dd]()
    });
    Pa(W, function (a) {
        return this.gb.bf(tk(a))
    });
    W.Nz = function (a) {
        var b = new sk;
        a = ok(a);
        for (var c = 0; c < a[J]; c++) {
            var d = a[c];
            this[Rc](d) && b.add(d)
        }
        return b
    };
    W.im = function (a) {
        var b = this[Bc]();
        b.mc(a);
        return b
    };
    W.Ua = function () {
        return this.gb.Ua()
    };
    Ia(W, function () {
        return new sk(this)
    });
    $a(W, function (a) {
        return this.dc() == Uda(a) && this.xU(a)
    });
    W.xU = function (a) {
        var b = Uda(a);
        if (this.dc() > b)return !1;
        !(a instanceof sk) && 5 < b && (a = new sk(a));
        return Xda(this, function (b) {
            var d = a;
            return typeof d[Rc] == Mg ? d[Rc](b) : typeof d.$T == Mg ? d.$T(b) : li(d) || oi(d) ? $i(d, b) : bk(d, b)
        })
    };
    W.at = function () {
        return this.gb.at(!1)
    };
    var uk;
    t:{
        var Yda = bi.navigator;
        if (Yda) {
            var Zda = Yda[vc];
            if (Zda) {
                uk = Zda;
                break t
            }
        }
        uk = O
    }
    var vk, wk, xk, $da;

    function yk() {
        return bi.navigator || null
    }

    var zk = Fi(uk, "Opera") || Fi(uk, "OPR"), Ak = Fi(uk, "Trident") || Fi(uk, Kf),
        Bk = Fi(uk, "Gecko") && !Fi(uk[pe](), "webkit") && !(Fi(uk, "Trident") || Fi(uk, Kf)),
        Ek = Fi(uk[pe](), "webkit"), aea = Ek && Fi(uk, "Mobile"), bea = yk(), Fk = bea && bea.platform || O;
    vk = Fi(Fk, "Mac");
    wk = Fi(Fk, "Win");
    xk = Fi(Fk, "Linux");
    $da = !!yk() && Fi(yk().appVersion || O, "X11");
    var Gk = uk;
    Gk && Fi(Gk, "Android");
    Gk && Fi(Gk, "iPhone");
    Gk && Fi(Gk, "iPad");
    function cea() {
        var a = bi[Ld];
        return a ? a[fe] : void 0
    }

    var Hk = function () {
        var a = O, b;
        if (zk && bi.opera)return a = bi.opera.version, ri(a) ? a() : a;
        Bk ? b = /rv\:([^\);]+)(\)|;)/ : Ak ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : Ek && (b = /WebKit\/(\S+)/);
        b && (a = (a = b[tb](uk)) ? a[1] : O);
        return Ak && (b = cea(), b > la(a)) ? String(b) : a
    }(), dea = {};

    function Ik(a) {
        return dea[a] || (dea[a] = 0 <= Ji(Hk, a))
    }

    function Jk(a) {
        return Ak && eea >= a
    }

    var fea = bi[Ld], eea = fea && Ak ? cea() || (fea[be] == rf ? ka(Hk, 10) : 5) : void 0;

    function Kk(a, b) {
        this.x = ci(a) ? a : 0;
        this.y = ci(b) ? b : 0
    }

    W = Kk[K];
    Ia(W, function () {
        return new Kk(this.x, this.y)
    });
    function Lk(a, b) {
        return a == b ? !0 : a && b ? a.x == b.x && a.y == b.y : !1
    }

    function Mk(a, b) {
        var c = a.x - b.x, d = a.y - b.y;
        return h[zd](c * c + d * d)
    }

    function Nk(a, b) {
        return new Kk(a.x - b.x, a.y - b.y)
    }

    function Ok(a, b) {
        return new Kk(a.x + b.x, a.y + b.y)
    }

    ra(W, function () {
        this.x = h[yb](this.x);
        this.y = h[yb](this.y);
        return this
    });
    sa(W, function () {
        this.x = h[t](this.x);
        this.y = h[t](this.y);
        return this
    });
Wa(W,function(){this.x=h[E](this.x);this.y=h[E](this.y);return this});eb(W,function(a,b){a instanceof Kk?(this.x+=a.x,this.y+=a.y):(this.x+=a,qi(b)&&(this.y+=b));return this});Na(W,function(a,b){var c=qi(b)?b:a;this.x*=a;this.y*=c;return this});function Pk(a,b){pa(this,a);Sa(this,b)}function Qk(a,b){return a==b?!0:a&&b?a[r]==b[r]&&a[A]==b[A]:!1}W=Pk[K];Ia(W,function(){return new Pk(this[r],this[A])});function Rk(a){return h.min(a[r],a[A])}W.area=function(){return this[r]*this[A]};Ua(W,function(){return!this.area()});ra(W,function(){pa(this,h[yb](this[r]));Sa(this,h[yb](this[A]));return this});sa(W,function(){pa(this,h[t](this[r]));Sa(this,h[t](this[A]));return this});Wa(W,function(){pa(this,h[E](this[r]));Sa(this,h[E](this[A]));return this});
Na(W,function(a,b){var c=qi(b)?b:a;pa(this,this[r]*a);Sa(this,this[A]*c);return this});var gea=!Ak||Jk(9),hea=!Bk&&!Ak||Ak&&Jk(9)||Bk&&Ik("1.9.1"),iea=Ak&&!Ik(df),jea=Ak||zk||Ek;function Sk(a){return a?new Tk(Uk(a)):kda||(kda=new Tk)}function Vk(a){return oi(a)?ea[md](a):a}function Wk(a,b,c){return Xk(ea,a,b,c)}function Yk(a,b){var c=b||ea;return c[Yd]&&c[Rb]?c[Yd](Ue+a):Xk(ea,Pe,a,b)}function Zk(a,b){var c=b||ea,d=null;return(d=c[Yd]&&c[Rb]?c[Rb](Ue+a):Xk(ea,Pe,a,b)[0])||null}
function Xk(a,b,c,d){a=d||a;b=b&&b!=Pe?b[ke]():O;if(a[Yd]&&a[Rb]&&(b||c))return a[Yd](b+(c?Ue+c:O));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,g;g=a[f];f++)b==g[sd]&&(d[e++]=g);kb(d,e);return d}return a}a=a[fc](b||Pe);if(c){d={};for(f=e=0;g=a[f];f++)b=g[Jd],typeof b[rc]==Mg&&$i(b[rc](/\s+/),c)&&(d[e++]=g);kb(d,e);return d}return a}
function $k(a,b){Sj(b,function(b,d){d==Fh?ab(a[x],b):d==Tba?mb(a,b):d==cca?a.htmlFor=b:d in kea?a[w](kea[d],b):yi(d,qg)||yi(d,Zba)?a[w](d,b):a[d]=b})}var kea={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:Rg,maxlength:"maxLength",role:vh,rowspan:"rowSpan",type:Nh,usemap:"useMap",valign:"vAlign",width:Vh};function al(a){a=a[Ld];a=a[be]==rf?a[gc]:a[Td];return new Pk(a[Kd],a[$d])}function lea(a){return Ek||a[be]!=rf?a[Td]||a[gc]:a[gc]}
function bl(a){return a?a.parentWindow||a[Bd]:ba}function cl(a,b,c){return mea(ea,arguments)}function mea(a,b){var c=b[0],d=b[1];if(!gea&&d&&(d[Cd]||d[H])){c=[hf,c];d[Cd]&&c[C](caa,Ei(d[Cd]),ue);if(d[H]){c[C](daa,Ei(d[H]),ue);var e={};jk(e,d);delete e[H];d=e}c[C](mf);c=c[me](O)}c=a[Sb](c);d&&(oi(d)?mb(c,d):ki(d)?mb(c,d[me](se)):$k(c,d));2<b[J]&&nea(a,c,b,2);return c}function nea(a,b,c,d){function e(c){c&&b[q](oi(c)?a[Db](c):c)}for(;d<c[J];d++){var f=c[d];li(f)&&!dl(f)?Z(oea(f)?gj(f):f,e):e(f)}}
function el(a){return ea[Sb](a)}function fl(a){if(1!=a[kd])return!1;switch(a[Tc]){case Gaa:case Haa:case Iaa:case pf:case Jaa:case Kaa:case Naa:case Paa:case Df:case Vaa:case Ef:case Uaa:case Waa:case Zaa:case $aa:case eba:case fba:case aba:case gba:case hba:case Rf:case Tf:case kba:case nba:case sba:return!1}return!0}function pea(a,b){a[q](b)}function gl(a,b){nea(Uk(a),a,arguments,1)}function hl(a){for(var b;b=a[Ub];)a[Ud](b)}function il(a,b){b[je]&&b[je][Fb](a,b)}
function jl(a,b){b[je]&&b[je][Fb](a,b[dc])}function kl(a){return a&&a[je]?a[je][Ud](a):null}function ll(a){return hea&&void 0!=a[yd]?a[yd]:Si(a[Zb],function(a){return 1==a[kd]})}function ml(a){return void 0!=a.firstElementChild?a.firstElementChild:qea(a[Ub])}function qea(a){for(;a&&1!=a[kd];)a=a[dc];return a}function dl(a){return ni(a)&&0<a[kd]}function nl(a){return ni(a)&&1==a[kd]}
function ol(a){var b;if(jea&&!(Ak&&Ik(df)&&!Ik(bf)&&bi.SVGElement&&a instanceof bi.SVGElement)&&(b=a.parentElement))return b;b=a[je];return nl(b)?b:null}function pl(a,b){if(a[Rc]&&1==b[kd])return a==b||a[Rc](b);if("undefined"!=typeof a[rd])return a==b||ja(a[rd](b)&16);for(;b&&a!=b;)b=b[je];return b==a}
function rea(a,b){if(a==b)return 0;if(a[rd])return a[rd](b)&2?1:-1;if(Ak&&!Jk(9)){if(9==a[kd])return-1;if(9==b[kd])return 1}if(Oca in a||a[je]&&Oca in a[je]){var c=1==a[kd],d=1==b[kd];if(c&&d)return a[oc]-b[oc];var e=a[je],f=b[je];return e==f?sea(a,b):!c&&pl(e,b)?-1*tea(a,b):!d&&pl(f,a)?tea(b,a):(c?a[oc]:e[oc])-(d?b[oc]:f[oc])}d=Uk(a);c=d[td]();c.selectNode(a);c[ub](!0);d=d[td]();d.selectNode(b);d[ub](!0);return c.compareBoundaryPoints(bi[$c].START_TO_END,d)}
function tea(a,b){var c=a[je];if(c==b)return-1;for(var d=b;d[je]!=c;)d=d[je];return sea(d,a)}function sea(a,b){for(var c=b;c=c[jc];)if(c==a)return-1;return 1}function Uk(a){return 9==a[kd]?a:a[Ac]||a[Ld]}function ql(a,b){if(Uca in a)a.textContent=b;else if(3==a[kd])qa(a,b);else if(a[Ub]&&3==a[Ub][kd]){for(;a[Dc]!=a[Ub];)a[Ud](a[Dc]);qa(a[Ub],b)}else{hl(a);var c=Uk(a);a[q](c[Db](String(b)))}}function uea(a){if(Bca in a)return a.outerHTML;var b=Uk(a)[Sb](P);b[q](a.cloneNode(!0));return b[nd]}
function vea(a,b){var c=[];return tl(a,b,c,!0)?c[0]:void 0}function wea(a,b){var c=[];tl(a,b,c,!1);return c}function tl(a,b,c,d){if(null!=a)for(a=a[Ub];a;){if(b(a)&&(c[C](a),d)||tl(a,b,c,d))return!0;a=a[dc]}return!1}var xea={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},yea={IMG:se,BR:re};function ul(a,b){b?db(a,0):(db(a,-1),a[Uc](Rca))}function vl(a){a=a.getAttributeNode(Sca);return null!=a&&a.specified}function wl(a){a=a.tabIndex;return qi(a)&&0<=a&&32768>a}
function xl(a){if(iea&&sca in a)a=a.innerText[wb](/(\r\n|\r|\n)/g,re);else{var b=[];yl(a,b,!0);a=b[me](O)}a=a[wb](/ \xAD /g,se)[wb](/\xAD/g,O);a=a[wb](/\u200B/g,O);iea||(a=a[wb](/ +/g,se));a!=se&&(a=a[wb](/^\s*/,O));return a}function zl(a){var b=[];yl(a,b,!1);return b[me](O)}function yl(a,b,c){if(!(a[sd]in xea))if(3==a[kd])c?b[C](String(a[bd])[wb](/(\r\n|\r|\n)/g,O)):b[C](a[bd]);else if(a[sd]in yea)b[C](yea[a[sd]]);else for(a=a[Ub];a;)yl(a,b,c),a=a[dc]}
function oea(a){if(a&&typeof a[J]==T){if(ni(a))return typeof a[pd]==Mg||typeof a[pd]==Eh;if(ri(a))return typeof a[pd]==Mg}return!1}function zea(a){return Al(a,function(a){return a[sd]==lba&&!0},!0)}function Al(a,b,c){c||(a=a[je]);for(c=0;a;){if(b(a))return a;a=a[je];c++}return null}function Bl(a){try{return a&&a[qb]}catch(b){}return null}function Tk(a){this.qf=a||bi[Ld]||ea}W=Tk[K];W.ia=Sk;W.gc=function(){return this.qf};W.a=function(a){return oi(a)?this.qf[md](a):a};
W.St=function(a,b){return Zk(a,b||this.qf)};W.f8=function(a,b){return Zk(a,b||this.qf)};W.jw=$k;W.j=function(a,b,c){return mea(this.qf,arguments)};W.createElement=function(a){return this.qf[Sb](a)};W.createTextNode=function(a){return this.qf[Db](String(a))};W.ega=function(a,b,c){var d=this.qf,e=!!c;c=[kf];for(var f=0;f<b;f++)c[C](e?Daa:Eaa);c[C](zaa);c=c[me](O);b=[Caa];for(f=0;f<a;f++)b[C](c);b[C](yaa);a=d[Sb](vf);Xa(a,b[me](O));return a[Ud](a[Ub])};
function Cl(a,b){var c;var d=a.qf;c=d[Sb](P);Ak?(Xa(c,jf+b),c[Ud](c[Ub])):Xa(c,b);if(1==c[Zb][J])c=c[Ud](c[Ub]);else{for(d=d.createDocumentFragment();c[Ub];)d[q](c[Ub]);c=d}return c}function Dl(a){return a.qf[be]==rf}W.QB=function(){var a=this.qf;return a.parentWindow||a[Bd]};function El(a){var b=a.qf;a=lea(b);b=b.parentWindow||b[Bd];return Ak&&Ik(bf)&&b.pageYOffset!=a[Gd]?new Kk(a[Lc],a[Gd]):new Kk(b.pageXOffset||a[Lc],b.pageYOffset||a[Gd])}W.vF=function(a){return Bl(a||this.qf)};W.appendChild=pea;
    W.append = gl;
    W.Nc = hl;
    W.a_ = il;
    W.Sia = jl;
    W.removeNode = kl;
    W.Xf = ll;
    W.nN = ml;
    W.dM = dl;
    W.Jla = nl;
    Pa(W, pl);
    W.Xpa = ql;
    W.vr = function (a) {
        var b;
        (b = a[Tc] == of || a[Tc] == Ef || a[Tc] == Xf || a[Tc] == Sf || a[Tc] == qf ? !a[Rd] && (!vl(a) || wl(a)) : vl(a) && wl(a)) && Ak ? (a = ri(a[rb]) ? a[rb]() : {
            height: a[Zc],
            width: a[Ab]
        }, a = null != a && 0 < a[A] && 0 < a[r]) : a = b;
        return a
    };
    function Aea() {
        return Ek ? uba : Bk ? cba : Ak ? vca : zk ? Nf : null
    }

    function Bea() {
        return Ek ? naa : Bk ? jaa : Ak ? kaa : zk ? laa : null
    }

    function Fl(a, b, c, d) {
        this.top = a;
        Ta(this, b);
        Ma(this, c);
        Za(this, d)
    }

    W = Fl[K];
    W.mb = function () {
        return this[cd] - this[G]
    };
    bb(W, function () {
        return this[Mc] - this.top
    });
    Ia(W, function () {
        return new Fl(this.top, this[cd], this[Mc], this[G])
    });
    Pa(W, function (a) {
        return this && a ? a instanceof Fl ? a[G] >= this[G] && a[cd] <= this[cd] && a.top >= this.top && a[Mc] <= this[Mc] : a.x >= this[G] && a.x <= this[cd] && a.y >= this.top && a.y <= this[Mc] : !1
    });
    W.expand = function (a, b, c, d) {
        ni(a) ? (this.top -= a.top, Ta(this, this[cd] + a[cd]), Ma(this, this[Mc] + a[Mc]), Za(this, this[G] - a[G])) : (this.top -= a, Ta(this, this[cd] + b), Ma(this, this[Mc] + c), Za(this, this[G] - d));
        return this
    };
    function Gl(a, b) {
        Za(a, h.min(a[G], b[G]));
        a.top = h.min(a.top, b.top);
        Ta(a, h.max(a[cd], b[cd]));
        Ma(a, h.max(a[Mc], b[Mc]))
    }

    function Hl(a, b) {
        return a[G] <= b[cd] && b[G] <= a[cd] && a.top <= b[Mc] && b.top <= a[Mc]
    }
ra(W,function(){this.top=h[yb](this.top);Ta(this,h[yb](this[cd]));Ma(this,h[yb](this[Mc]));Za(this,h[yb](this[G]));return this});sa(W,function(){this.top=h[t](this.top);Ta(this,h[t](this[cd]));Ma(this,h[t](this[Mc]));Za(this,h[t](this[G]));return this});Wa(W,function(){this.top=h[E](this.top);Ta(this,h[E](this[cd]));Ma(this,h[E](this[Mc]));Za(this,h[E](this[G]));return this});
eb(W,function(a,b){a instanceof Kk?(Za(this,this[G]+a.x),Ta(this,this[cd]+a.x),this.top+=a.y,Ma(this,this[Mc]+a.y)):(Za(this,this[G]+a),Ta(this,this[cd]+a),qi(b)&&(this.top+=b,Ma(this,this[Mc]+b)));return this});Na(W,function(a,b){var c=qi(b)?b:a;Za(this,this[G]*a);Ta(this,this[cd]*a);this.top*=c;Ma(this,this[Mc]*c);return this});function Il(a,b,c,d){Za(this,a);this.top=b;pa(this,c);Sa(this,d)}W=Il[K];Ia(W,function(){return new Il(this[G],this.top,this[r],this[A])});function Jl(a){return new Fl(a.top,a[G]+a[r],a.top+a[A],a[G])}function Kl(a){return new Il(a[G],a.top,a[cd]-a[G],a[Mc]-a.top)}function Ll(a,b){return a==b?!0:a&&b?a[G]==b[G]&&a[r]==b[r]&&a.top==b.top&&a[A]==b[A]:!1}
W.Nz=function(a){var b=h.max(this[G],a[G]),c=h.min(this[G]+this[r],a[G]+a[r]);if(b<=c){var d=h.max(this.top,a.top);a=h.min(this.top+this[A],a.top+a[A]);if(d<=a)return Za(this,b),this.top=d,pa(this,c-b),Sa(this,a-d),!0}return!1};function Cea(a,b){var c=h.max(a[G],b[G]),d=h.min(a[G]+a[r],b[G]+b[r]);if(c<=d){var e=h.max(a.top,b.top),f=h.min(a.top+a[A],b.top+b[A]);if(e<=f)return new Il(c,e,d-c,f-e)}return null}
W.im=function(a){var b=Cea(this,a);if(b&&b[A]&&b[r]){var b=[],c=this.top,d=this[A],e=this[G]+this[r],f=this.top+this[A],g=a[G]+a[r],k=a.top+a[A];a.top>this.top&&(b[C](new Il(this[G],this.top,this[r],a.top-this.top)),c=a.top,d-=a.top-this.top);k<f&&(b[C](new Il(this[G],k,this[r],f-k)),d=k-c);a[G]>this[G]&&b[C](new Il(this[G],c,a[G]-this[G],d));g<e&&b[C](new Il(g,c,e-g,d));a=b}else a=[this[Bc]()];return a};
Pa(W,function(a){return a instanceof Il?this[G]<=a[G]&&this[G]+this[r]>=a[G]+a[r]&&this.top<=a.top&&this.top+this[A]>=a.top+a[A]:a.x>=this[G]&&a.x<=this[G]+this[r]&&a.y>=this.top&&a.y<=this.top+this[A]});function Dea(a,b){var c=b.x<a[G]?a[G]-b.x:h.max(b.x-(a[G]+a[r]),0),d=b.y<a.top?a.top-b.y:h.max(b.y-(a.top+a[A]),0);return c*c+d*d}W.distance=function(a){return h[zd](Dea(this,a))};W.ac=function(){return new Pk(this[r],this[A])};
W.getCenter=function(){return new Kk(this[G]+this[r]/2,this.top+this[A]/2)};ra(W,function(){Za(this,h[yb](this[G]));this.top=h[yb](this.top);pa(this,h[yb](this[r]));Sa(this,h[yb](this[A]));return this});sa(W,function(){Za(this,h[t](this[G]));this.top=h[t](this.top);pa(this,h[t](this[r]));Sa(this,h[t](this[A]));return this});Wa(W,function(){Za(this,h[E](this[G]));this.top=h[E](this.top);pa(this,h[E](this[r]));Sa(this,h[E](this[A]));return this});
eb(W,function(a,b){a instanceof Kk?(Za(this,this[G]+a.x),this.top+=a.y):(Za(this,this[G]+a),qi(b)&&(this.top+=b));return this});Na(W,function(a,b){var c=qi(b)?b:a;Za(this,this[G]*a);pa(this,this[r]*a);this.top*=c;Sa(this,this[A]*c);return this});function Ml(a,b,c){oi(b)?Eea(a,c,b):Sj(b,ui(Eea,a))}function Eea(a,b,c){(c=Fea(a,c))&&(a[x][c]=b)}function Fea(a,b){var c=Ni(b);if(void 0===a[x][c]){var d=Aea()+Ada(c);if(void 0!==a[x][d])return d}return c}function Gea(a,b){var c=a[x][Ni(b)];return"undefined"!==typeof c?c:a[x][Fea(a,b)]||O}function Nl(a,b){var c=Uk(a);return c[Bd]&&c[Bd].getComputedStyle&&(c=c[Bd].getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||O:O}function Ol(a,b){return Nl(a,b)||(a[de]?a[de][b]:null)||a[x]&&a[x][b]}
function Pl(a){return Ol(a,qh)}function Ql(a,b,c){var d,e=Bk&&(vk||$da)&&Ik(waa);b instanceof Kk?(d=b.x,b=b.y):(d=b,b=c);Za(a[x],Rl(d,e));a[x].top=Rl(b,e)}function Sl(a){return new Kk(a[Sd],a[Yc])}function Tl(a){a=a?Uk(a):ea;return!Ak||Jk(9)||Dl(Sk(a))?a[gc]:a[Td]}function Ul(a){var b;try{b=a[rb]()}catch(c){return{left:0,top:0,right:0,bottom:0}}Ak&&a[Ac][Td]&&(a=a[Ac],Za(b,b[G]-(a[gc][Wb]+a[Td][Wb])),b.top-=a[gc][Xb]+a[Td][Xb]);return b}
function Hea(a){if(Ak&&!Jk(8))return a[tc];var b=Uk(a),c=Ol(a,qh),d=c==Jg||c==pg;for(a=a[je];a&&a!=b;a=a[je])if(c=Ol(a,qh),d=d&&c==Dh&&a!=b[gc]&&a!=b[Td],!d&&(a[Gc]>a[Kd]||a[Tb]>a[$d]||c==Jg||c==pg||c==th))return a;return null}
function Vl(a){for(var b=new Fl(0,da,da,0),c=Sk(a),d=c.gc()[Td],e=c.gc()[gc],f=lea(c.qf);a=Hea(a);)if(!(Ak&&0==a[Kd]||Ek&&0==a[$d]&&a==d)&&a!=d&&a!=e&&Ol(a,oh)!=Sh){var g=Wl(a),k;k=a;if(Bk&&!Ik(waa)){var l=la(Nl(k,Mba));if(Xl(k))var n=k[Ab]-k[Kd]-l-la(Nl(k,Oba)),l=l+n;k=new Kk(l,la(Nl(k,Qba)))}else k=new Kk(k[Wb],k[Xb]);g.x+=k.x;g.y+=k.y;b.top=h.max(b.top,g.y);Ta(b,h.min(b[cd],g.x+a[Kd]));Ma(b,h.min(b[Mc],g.y+a[$d]));Za(b,h.max(b[G],g.x))}d=f[Lc];f=f[Gd];Za(b,h.max(b[G],d));b.top=h.max(b.top,f);c=
c.QB();c=al(c||ba);Ta(b,h.min(b[cd],d+c[r]));Ma(b,h.min(b[Mc],f+c[A]));return 0<=b.top&&0<=b[G]&&b[Mc]>b.top&&b[cd]>b[G]?b:null}
function Wl(a){var b,c=Uk(a),d=Ol(a,qh),e=Bk&&c[Ob]&&!a[rb]&&d==pg&&(b=c[Ob](a))&&(0>b[Ib]||0>b[Kb]),f=new Kk(0,0),g=Tl(c);if(a==g)return f;if(a[rb])b=Ul(a),a=El(Sk(c)),f.x=b[G]+a.x,f.y=b.top+a.y;else if(c[Ob]&&!e)b=c[Ob](a),a=c[Ob](g),f.x=b[Ib]-a[Ib],f.y=b[Kb]-a[Kb];else{b=a;do{f.x+=b[Sd];f.y+=b[Yc];b!=a&&(f.x+=b[Wb]||0,f.y+=b[Xb]||0);if(Ek&&Pl(b)==Jg){f.x+=c[Td][Lc];f.y+=c[Td][Gd];break}b=b[tc]}while(b&&b!=a);if(zk||Ek&&d==pg)f.y-=c[Td][Yc];for(b=a;(b=Hea(b))&&b!=c[Td]&&b!=g;)f.x-=b[Lc],zk&&b[Tc]==
Zf||(f.y-=b[Gd])}return f}function Yl(a,b){var c=Zl(a),d=Zl(b);return new Kk(c.x-d.x,c.y-d.y)}function Iea(a){var b;if(a[rb])b=Ul(a),b=new Kk(b[G],b.top);else{b=El(Sk(a));var c=Wl(a);b=new Kk(c.x-b.x,c.y-b.y)}if(Bk&&!Ik(12)){i:{c=Ni(Kh);if(void 0===a[x][c]&&(c=Aea()+Ada(c),void 0!==a[x][c])){c=Bea()+maa;break i}c=Kh}a=(a=Ol(a,c)||Ol(a,Kh))?(a=a[Lb](Jea))?new Kk(la(a[1]),la(a[2])):new Kk(0,0):new Kk(0,0);a=Ok(b,a)}else a=b;return a}
function Zl(a){if(1==a[kd])return Iea(a);var b=ri(a.vsa),c=a;a[Hb]?c=a[Hb][0]:b&&a.Qa[Hb]&&(c=a.Qa[Hb][0]);return new Kk(c[Dd],c[Ed])}function $l(a,b,c){if(b instanceof Pk)c=b[A],b=b[r];else if(void 0==c)throw m("missing height argument");am(a,b);cm(a,c)}function Rl(a,b){typeof a==T&&(a=(b?h[E](a):a)+U);return a}function cm(a,b){Sa(a[x],Rl(b,!0))}function am(a,b){pa(a[x],Rl(b,!0))}function dm(a){return em(a)}
function em(a){var b=Kea;if(Ol(a,Eg)!=Q)return b(a);var c=a[x],d=c[Xc],e=c.visibility,f=c[mc];ib(c,Sg);Ba(c,pg);Ra(c,Zg);a=b(a);Ra(c,d);Ba(c,f);ib(c,e);return a}function Kea(a){var b=a[Ab],c=a[Zc],d=Ek&&!b&&!c;return ci(b)&&!d||!a[rb]?new Pk(b,c):(a=Ul(a),new Pk(a[cd]-a[G],a[Mc]-a.top))}function fm(a){var b=Wl(a);a=em(a);return new Il(b.x,b.y,a[r],a[A])}function gm(a,b){var c=a[x];lh in c?nb(c,b):dba in c?c.MozOpacity=b:Ig in c&&(c.filter=b===O?O:Gba+100*b+Oe)}function hm(a,b){Ra(a[x],b?O:Q)}
function im(a){var b=Sk(void 0),c=null,c=b.gc();if(Ak&&c.createStyleSheet)b=c=c.createStyleSheet(),Ak&&ci(b.cssText)?ab(b,a):Xa(b,a);else{var d=Xk(b.qf,Qg,void 0,void 0)[0];d||(c=Xk(b.qf,vg,void 0,void 0)[0],d=b.j(Qg),c[je][Fb](d,c));var e=c=b.j(Fh);Ak&&ci(e.cssText)?ab(e,a):Xa(e,a);b[q](d,c)}return c}function Xl(a){return wh==Ol(a,Dg)}var jm=Bk?"MozUserSelect":Ek?"WebkitUserSelect":null;
function km(a,b,c){c=c?null:a[fc](Pe);if(jm){if(b=b?Q:O,a[x][jm]=b,c){a=0;for(var d;d=c[a];a++)d[x][jm]=b}}else if(Ak||zk)if(b=b?kh:O,a[w](Oh,b),c)for(a=0;d=c[a];a++)d[w](Oh,b)}function lm(a){var b=Uk(a),c=Ak&&a[de];if(c&&Dl(Sk(b))&&c[r]!=sg&&c[A]!=sg&&!c.boxSizing)return b=mm(a,c[r],Vh,Ica),a=mm(a,c[A],Rg,Gca),new Pk(b,a);c=new Pk(a[Ab],a[Zc]);b=nm(a);a=om(a);return new Pk(c[r]-a[G]-b[G]-b[cd]-a[cd],c[A]-a.top-b.top-b[Mc]-a[Mc])}
function mm(a,b,c,d){if(/^\d+px?$/[hd](b))return ka(b,10);var e=a[x][c],f=a.runtimeStyle[c];a.runtimeStyle[c]=a[de][c];a[x][c]=b;b=a[x][d];a[x][c]=e;a.runtimeStyle[c]=f;return b}function pm(a,b){var c=a[de]?a[de][b]:null;return c?mm(a,c,ah,Hca):0}function nm(a){if(Ak){var b=pm(a,Dca),c=pm(a,Eca),d=pm(a,Fca);a=pm(a,Cca);return new Fl(d,c,a,b)}b=Nl(a,Dca);c=Nl(a,Eca);d=Nl(a,Fca);a=Nl(a,Cca);return new Fl(la(d),la(c),la(a),la(b))}var Lea={thin:2,medium:4,thick:6};
function qm(a,b){if((a[de]?a[de][b+mba]:null)==Q)return 0;var c=a[de]?a[de][b+vba]:null;return c in Lea?Lea[c]:mm(a,c,ah,Hca)}function om(a){if(Ak&&!Jk(9)){var b=qm(a,Lba),c=qm(a,Nba),d=qm(a,Pba);a=qm(a,Jba);return new Fl(d,c,a,b)}b=Nl(a,Mba);c=Nl(a,Oba);d=Nl(a,Qba);a=Nl(a,Kba);return new Fl(la(d),la(c),la(a),la(b))}function rm(a){var b={};Z(a[rc](/\s*;\s*/),function(a){a=a[rc](/\s*:\s*/);2==a[J]&&(b[Ni(a[0][pe]())]=a[1])});return b}var Jea=/matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;var Mea=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function sm(a){if(tm){tm=!1;var b=bi[xc];if(b){var c=b[Nc];if(c&&(c=um(c))&&c!=b.hostname)throw tm=!0,m();}}return a[Lb](Mea)}var tm=Ek;function um(a){return(a=sm(a)[3]||null)&&oa(a)}function vm(a){return(a=sm(a)[5]||null)&&oa(a)}
function wm(a,b,c,d){for(var e=c[J];0<=(b=a[qd](c,b))&&b<d;){var f=a[ae](b-1);if(38==f||63==f)if(f=a[ae](b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}var xm=/#|$/;function ym(a,b){var c=a[Cc](xm),d=wm(a,0,b,c);if(0>d)return null;var e=a[qd](Ee,d);if(0>e||e>c)e=c;d+=b[J]+1;return oa(a[hc](d,e-d)[wb](/\+/g,se))}var Nea=/[?&]($|#)/;function zm(a,b){for(var c=a[Cc](xm),d=0,e,f=[];0<=(e=wm(a,d,b,c));)f[C](a[ee](d,e)),d=h.min(a[qd](Ee,e)+1||c,c);f[C](a[hc](d));return f[me](O)[wb](Nea,Ce)}

    function Am(a, b, c) {
        a = [zm(a, b), Ee, b];
        null != c && a[C](lf, aa(String(c)));
        a[1] && (c = a[0], b = c[qd](we), 0 <= b && (a[C](c[hc](b)), a[0] = c = c[hc](0, b)), b = c[qd](nf), 0 > b ? a[1] = nf : b == c[J] - 1 && (a[1] = void 0));
        return a[me](O)
    }

    var Bm = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: xe,
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
gold:"#ffd700",goldenrod:"#daa520",gray:ye,green:"#008000",greenyellow:"#adff2f",grey:ye,honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",
lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",
navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",
silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:Ae,whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Cm(a){var b={};a=String(a);var c=a[Cb](0)==we?a:we+a;if(Dm[hd](c))return b.od=Em(c),cb(b,rca),b;c=Oea(a);if(c[J])return b.od=Fm(c),cb(b,uh),b;if(Bm&&(c=Bm[a[pe]()]))return b.od=c,cb(b,wca),b;throw m(a+" is not a valid color string");}function Gm(a){return!!(Dm[hd](a[Cb](0)==we?a:we+a)||Oea(a)[J]||Bm&&Bm[a[pe]()])}var Pea=/#(.)(.)(.)/;function Em(a){if(!Dm[hd](a))throw m(Me+a+"' is not a valid hex color");4==a[J]&&(a=a[wb](Pea,eaa));return a[pe]()}
function Hm(a){a=Em(a);return[ka(a[hc](1,2),16),ka(a[hc](3,2),16),ka(a[hc](5,2),16)]}function Im(a,b,c){a=ha(a);b=ha(b);c=ha(c);if(fa(a)||0>a||255<a||fa(b)||0>b||255<b||fa(c)||0>c||255<c)throw m('"('+a+Re+b+Re+c+'") is not a valid RGB color');a=Jm(a[kc](16));b=Jm(b[kc](16));c=Jm(c[kc](16));return we+a+b+c}function Fm(a){return Im(a[0],a[1],a[2])}
function Qea(a){var b=a[0]/255,c=a[1]/255;a=a[2]/255;var d=h.max(b,c,a),e=h.min(b,c,a),f=0,g=0,k=.5*(d+e);d!=e&&(d==b?f=60*(c-a)/(d-e):d==c?f=60*(a-b)/(d-e)+120:d==a&&(f=60*(b-c)/(d-e)+240),g=0<k&&.5>=k?(d-e)/(2*k):(d-e)/(2-2*k));return[h[E](f+360)%360,g,k]}function Km(a,b,c){0>c?c+=1:1<c&&(c-=1);return 1>6*c?a+6*(b-a)*c:1>2*c?b:2>3*c?a+(b-a)*(2/3-c)*6:a}
function Rea(a){var b=a[1],c=a[2],d=0,e=0,f=0;a=a[0]/360;if(0==b)d=e=f=255*c;else var g=f=0,g=.5>c?c*(1+b):c+b-b*c,f=2*c-g,d=255*Km(f,g,a+1/3),e=255*Km(f,g,a),f=255*Km(f,g,a-1/3);return[h[E](d),h[E](e),h[E](f)]}var Dm=/^#(?:[0-9a-f]{3}){1,2}$/i,Sea=/^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;function Oea(a){var b=a[Lb](Sea);if(b){a=ha(b[1]);var c=ha(b[2]),b=ha(b[3]);if(0<=a&&255>=a&&0<=c&&255>=c&&0<=b&&255>=b)return[a,c,b]}return[]}
function Jm(a){return 1==a[J]?Xe+a:a}function Lm(a,b,c){c=Aj(c,0,1);return[h[E](c*a[0]+(1-c)*b[0]),h[E](c*a[1]+(1-c)*b[1]),h[E](c*a[2]+(1-c)*b[2])]}function Mm(a,b){return Lm([0,0,0],a,b)}function Nm(a,b){return Lm([255,255,255],a,b)}function Om(a,b){for(var c=[],d=0;d<b[J];d++)c[C]({color:b[d],Dh:Tea(b[d],a)+Uea(b[d],a)});c[ce](function(a,b){return b.Dh-a.Dh});return c[0][F]}function Tea(a,b){return h.abs(h[E]((299*a[0]+587*a[1]+114*a[2])/1E3)-h[E]((299*b[0]+587*b[1]+114*b[2])/1E3))}

    function Uea(a, b) {
        return h.abs(a[0] - b[0]) + h.abs(a[1] - b[1]) + h.abs(a[2] - b[2])
    }

    function Pm(a, b) {
        Ka(this, a < b ? a : b);
        this.end = a < b ? b : a
    }

    Ia(Pm[K], function () {
        return new Pm(this[y], this.end)
    });
    Pm[K].getLength = function () {
        return this.end - this[y]
    };
    function Qm(a, b) {
        Ka(a, h.min(a[y], b));
        a.end = h.max(a.end, b)
    }

    function Rm(a, b) {
        return h.max(a[y], b[y]) <= h.min(a.end, b.end)
    }

    function Sm(a, b) {
        return a[y] <= b && a.end >= b
    }

    function Tm(a, b) {
        a && (a.logicalname = b)
    }

    function Vea(a) {
        return (a = Al(a, function (a) {
            return null != a.logicalname
        }, !0)) ? a.logicalname : lg
    }

    function Um(a) {
        return a == Q || a == O || a == Lh ? Q : Cm(a).od
    }

    function Vm(a) {
        if (a == Q)return Q;
        a = Hm(a);
        a = h[E]((a[0] + a[1] + a[2]) / 3);
        return Im(a, a, a)
    }

    function Wea(a) {
        a = gk(a);
        null == a[Id] && jb(a, !0);
        return a
    }

    function Xea(a, b) {
        var c = a.j(b[Cd], b.Sc);
        a.jw(c, {style: b[x]});
        if (null != b[zb]) {
            var d = ki(b[zb]) ? b[zb] : [b[zb]];
            Z(d, function (b) {
                if (oi(b)) a[q](c, a[Db](b)); else b = oi(b[zb]) && b.Fna ? Cl(a, b[zb]) : Xea(a, b), a[q](c, b)
            })
        }
        null != b.id && Tm(c, b.id);
        return c
    }

    function Wm(a, b) {
        a = a || {};
        if (2 == arguments[J]) {
            var c = arguments[1], d;
            for (d in c)if (ki(c[d])) a[d] = gj(c[d]); else if (typeof a[d] === jh && null != a[d]) a[d] = Wm(a[d], c[d]); else if (typeof c[d] === jh && null != c[d]) a[d] = Wm({}, c[d]); else if (null == a[d] || null != c[d]) a[d] = c[d]
        } else if (2 < arguments[J])for (c = 1, d = arguments[J]; c < d; c++)a = Wm(a, arguments[c]);
        return a
    }

    function Xm(a, b, c) {
        return a && a != Q ? b && b != Q ? Fm(Lm(Hm(a), Hm(b), c)) : a : b
    }

    function Ym(a, b) {
        if (null == b)return a;
        var c = new Pm(b, b);
        return a ? new Pm(h.min(a[y], c[y]), h.max(a.end, c.end)) : c
    }

    function Yea(a, b, c) {
        var d = null != b ? b : a && null != c && c < a[y] ? c : a ? a[y] : null;
        a = null != c ? c : a && null != b && b > a.end ? b : a ? a.end : null;
        return null != d && null != a ? new Pm(d, a) : null
    }

    function Zm(a) {
        if (0 == a[J])return null;
        for (var b = a[0][Bc](), c = 1; c < a[J]; c++)Gl(b, a[c]);
        return b
    }

    function $m(a, b) {
        var c = kj(a, b);
        if (0 <= c)return b;
        c = -(c + 1);
        if (0 == c)return a[0];
        if (c == a[J])return Oi(a);
        var d = a[c - 1], c = a[c];
        return h.abs(b - d) <= h.abs(b - c) ? d : c
    }

    function an(a, b, c) {
        this.yd = a;
        this.Uk = Um(b);
        this.Ay = Um(null != c ? c : Ae)
    }

    W = an[K];
    W.Ib = function () {
        return this.yd
    };
    W.Vd = function () {
        return this.Uk
    };
    W.hs = function () {
        return this.Ay
    };
    Ia(W, function () {
        return new an(this.yd, this.Uk, this.Ay)
    });
    W.lH = function () {
        return new an(this.yd, Vm(this.Uk), Vm(this.Ay))
    };
    function bn(a) {
        a = a || {};
        this.CC = Q;
        null != a[ic] && this.Oe(a[ic]);
        this.Pe = 1;
        null != a.Ce && this.Ch(a.Ce);
        this.re = Q;
        null != a[$b] && this.hd(a[$b]);
        this.Nb = 1;
        null != a.ua && this.mk(a.ua);
        this.qi = 1;
        null != a.Xg && cn(this, a.Xg);
        this.nl = Ch;
        null != a.cQ && (this.nl = a.cQ);
        this.VH = null != a.Gi ? a.Gi : null;
        this.WH = null != a.Hi ? a.Hi : null;
        this.Hg = null;
        a.Eh && (this.Hg = gk(a.Eh), this.Hg.jg = Um(this.Hg.jg), this.Hg.Rf = Um(this.Hg.Rf));
        this.vd = null;
        a[vb] && (this.vd = a[vb]);
        this.b9 = null
    }

    W = bn[K];
    W.jj = function () {
        return {
            fill: this.cb(),
            Ce: this.Pe,
            stroke: this.re,
            ua: this.Nb,
            Xg: this.qi,
            cQ: this.nl,
            Gi: this.VH,
            Hi: this.WH,
            Eh: hk(this.Hg),
            pattern: hk(this.vd)
        }
    };
Ca(W,function(){var a=this.Hg||null;a&&(a={color1:a.jg,color2:a.Rf,opacity1:a.Yv,opacity2:a.Zv,x1:a.x1,y1:a.y1,x2:a.Hb,y2:a.Lb,useObjectBoundingBoxUnits:a.vt,sharpTransition:a.RE});var b=this.vd||null;b&&(b={style:b.Ib(),color:b.Vd(),bgcolor:b.hs()});a={fill:this.cb(),fillOpacity:this.Pe,stroke:this.re,strokeWidth:this.Nb,strokeOpacity:this.qi,strokeDashStyle:this.nl,rx:this.VH,ry:this.WH,gradient:a,pattern:b};return"undefined"!==typeof JSON&&JSON[gd]?JSON[gd](a):dn(a)});Ia(W,function(){return new bn(this.jj())});
W.lH=function(){var a=this[Bc]();a.Oe(Vm(this.CC));a.hd(Vm(this.re));if(this.Hg){var b=gk(this.Hg);b.jg=Vm(this.Hg.jg);b.Rf=Vm(this.Hg.Rf);a.Eh=b}this.vd&&(b=this.vd.lH(),a.vd=b);return a};function Zea(a){return null==a||a==Q}W.Oe=function(a){this.CC=Um(a)};W.cb=function(){return this.CC};W.Ch=function(a){this.Pe=Aj(a,0,1)};W.hd=function(a,b){this.re=Um(a);null!=b&&this.mk(b)};W.Kca=function(){return this.re};W.mk=function(a){this.Nb=a};function en(a){return nn(a)?a.Nb:0}
function cn(a,b){a.qi=Aj(b,0,1)}W.getShadow=function(){return this.b9};function on(a){return 0<a.Pe&&(!Zea(a.CC)||null!=a.Hg||null!=a.vd)}function nn(a){return 0<a.Nb&&0<a.qi&&!Zea(a.re)}function pn(a){return on(a)&&1<=a.Pe}var qn=new bn({Ce:0,fill:Uh,Xg:0,stroke:Uh});function rn(a,b){return new bn({stroke:Q,fill:a,Ce:null!=b?b:1})}function sn(a,b,c,d){return new bn({stroke:a,ua:b,Xg:null!=d?d:1,fill:null!=c&&c?ze:Q})}

    function $ea(a, b) {
        var c;
        if (a === b) c = !0; else if (null == a || null == b) c = !1; else {
            if (c = a.CC == b.CC && a.Pe == b.Pe && a.re == b.re && a.Nb == b.Nb && a.qi == b.qi && a.nl == b.nl && a.VH == b.VH && a.WH == b.WH) {
                c = a.Eh;
                var d = b.Eh;
                c = c === d ? !0 : null == c || null == d ? !1 : c.jg == d.jg && c.Rf == d.Rf && c.x1 == d.x1 && c.y1 == d.y1 && c.Hb == d.Hb && c.Lb == d.Lb && c.vt === d.vt
            }
            c && (c = a.vd, d = b.vd, c = c === d ? !0 : null == c || null == d ? !1 : c.Ay == d.Ay && c.Uk == d.Uk && c.yd == d.yd)
        }
        return c
    }

    var tn, un = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        afa = ["Sunday", "Monday", "Tuesday", fg, bg, "Friday", Uf];
    tn = {
        ERAS: ["BC", "AD"],
        ERANAMES: ["Before Christ", "Anno Domini"],
        NARROWMONTHS: ["J", Af, Gf, of, Gf, "J", "J", of, Qf, Nf, Lf, "D"],
        STANDALONENARROWMONTHS: ["J", Af, Gf, of, Gf, "J", "J", of, Qf, Nf, Lf, "D"],
        MONTHS: ["January", Bf, "March", "April", "May", "June", "July", "August", Vf, "October", Mf, yf],
        STANDALONEMONTHS: ["January", Bf, "March", "April", "May", "June", "July", "August", Vf, "October", Mf, yf],
        SHORTMONTHS: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        STANDALONESHORTMONTHS: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
WEEKDAYS:["Sunday","Monday","Tuesday",fg,bg,"Friday",Uf],STANDALONEWEEKDAYS:["Sunday","Monday","Tuesday",fg,bg,"Friday",Uf],SHORTWEEKDAYS:"Sun Mon Tue Wed Thu Fri Sat".split(" "),STANDALONESHORTWEEKDAYS:"Sun Mon Tue Wed Thu Fri Sat".split(" "),NARROWWEEKDAYS:[Qf,Gf,Wf,eg,Wf,Af,Qf],STANDALONENARROWWEEKDAYS:[Qf,Gf,Wf,eg,Wf,Af,Qf],SHORTQUARTERS:["Q1","Q2","Q3","Q4"],QUARTERS:["1st quarter","2nd quarter","3rd quarter","4th quarter"],AMPMS:["AM","PM"],DATEFORMATS:["EEEE, MMMM d, y","MMMM d, y","MMM d, y",
"M/d/yy"],TIMEFORMATS:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a",Pg],DATETIMEFORMATS:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],FIRSTDAYOFWEEK:6,WEEKENDRANGE:[5,6],FIRSTWEEKCUTOFFDAY:5};function vn(a,b){switch(b){case 1:return 0!=a%4||0==a%100&&0!=a%400?28:29;case 5:case 8:case 10:case 3:return 30}return 31}function bfa(a,b){var c=b||new Date(vi());return a[Jc]()==c[Jc]()}function wn(a,b,c){qi(a)?(this.tb=cfa(a,b||0,c||1),xn(this,c||1)):ni(a)?(this.tb=cfa(a[Jc](),a[Hd](),a[Eb]()),xn(this,a[Eb]())):(this.tb=new Date(vi()),this.tb.setHours(0),this.tb.setMinutes(0),this.tb.setSeconds(0),this.tb.setMilliseconds(0))}
function cfa(a,b,c){b=new Date(a,b,c);0<=a&&100>a&&b[wd](b[Jc]()-1900);return b}W=wn[K];W.Qea=tn.FIRSTDAYOFWEEK;W.Rea=tn.FIRSTWEEKCUTOFFDAY;Ia(W,function(){var a=new wn(this.tb);a.Qea=this.Qea;a.Rea=this.Rea;return a});W.getFullYear=function(){return this.tb[Jc]()};W.getYear=function(){return this[Jc]()};W.getMonth=function(){return this.tb[Hd]()};W.getDate=function(){return this.tb[Eb]()};ya(W,function(){return this.tb[ec]()});W.getDay=function(){return this.tb[nc]()};W.getUTCFullYear=function(){return this.tb[Mb]()};
W.getUTCMonth=function(){return this.tb[Ec]()};W.getUTCDate=function(){return this.tb[Nd]()};W.getUTCHours=function(){return this.tb[ie]()};W.getUTCMinutes=function(){return this.tb[he]()};W.getTimezoneOffset=function(){return this.tb[qe]()};W.set=function(a){this.tb=new Date(a[Jc](),a[Hd](),a[Eb]())};W.setFullYear=function(a){this.tb[wd](a)};W.setMonth=function(a){this.tb[ud](a)};W.setDate=function(a){this.tb[Fd](a)};W.setTime=function(a){this.tb[Oc](a)};W.setUTCFullYear=function(a){this.tb.setUTCFullYear(a)};
W.setUTCMonth=function(a){this.tb[Zd](a)};W.setUTCDate=function(a){this.tb.setUTCDate(a)};W.add=function(a){if(a.years||a.months){var b=this[Hd]()+a.months+12*a.years,c=this[Fc]()+h[t](b/12),b=b%12;0>b&&(b+=12);var d=h.min(vn(c,b),this[Eb]());this[Fd](1);this[wd](c);this[ud](b);this[Fd](d)}a.days&&(a=new Date((new Date(this[Fc](),this[Hd](),this[Eb](),12))[ec]()+864E5*a.days),this[Fd](1),this[wd](a[Jc]()),this[ud](a[Hd]()),this[Fd](a[Eb]()),xn(this,a[Eb]()))};
    W.awa = function () {
        return [this[Jc](), Ii(this[Hd]() + 1, 2), Ii(this[Eb](), 2)][me](O) + O
    };
    $a(W, function (a) {
        return !(!a || this[Fc]() != a[Fc]() || this[Hd]() != a[Hd]() || this[Eb]() != a[Eb]())
    });
    Aa(W, function () {
        return this.awa()
    });
    function xn(a, b) {
        a[Eb]() != b && a.tb.setUTCHours(a.tb[ie]() + (a[Eb]() < b ? 1 : -1))
    }

    W.valueOf = function () {
        return this.tb[fd]()
    };
    function yn(a, b) {
        return a[ec]() - b[ec]()
    }

    function zn(a, b) {
        if (null == a && null == b)return a === b;
        if (a === b)return !0;
        var c = hi(a), d = hi(b);
        if (c != d)return !1;
        var d = mi(a), e = mi(b);
        if (d != e)return !1;
        switch (c) {
            case jh:
                if (d && e)return 0 == yn(a, b);
                for (var f in a)if (a[zc](f) && (!b[zc](f) || !zn(a[f], b[f])))return !1;
                for (var g in b)if (b[zc](g) && !a[zc](g))return !1;
                return !0;
            case rg:
                if (a[J] != b[J])return !1;
                for (c = 0; c < a[J]; ++c)if (!zn(a[c], b[c]))return !1;
                return !0;
            case Mg:
                return !0;
            case Eh:
            case T:
            case wg:
                return !1;
            default:
                throw m("Error while comparing " + a + te + b + ": unexpected type of obj1 " +
                    c);
        }
    }

    function An(a) {
        if (mi(a)) {
            var b = new Date;
            b[Oc](a[fd]());
            return b
        }
        var c = hi(a);
        if (c == jh || c == rg) {
            if (a[Bc])return a[Bc]();
            c = c == rg ? [] : {};
            for (b in a)c[b] = An(a[b]);
            return c
        }
        return a
    }

    function Bn(a) {
        this.Ti = a || [{}]
    }

    function Cn(a, b) {
        cj(a.Ti, b, 1)
    }

    function dfa(a, b) {
        for (var c in b)ni(b[c]) && a[c] ? dfa(a[c], b[c]) : a[c] = b[c]
    }

    function efa(a, b) {
        Sj(b, function (b, d) {
            ni(b) && !ki(b) ? (a[d] = a[d] || {}, efa(a[d], b)) : null != b && (a[d] = b)
        })
    }

    function Dn(a) {
        var b = {};
        Ri(a.Ti, function (a) {
            efa(b, a)
        });
        return b
    }

    function En(a, b, c) {
        t:{
            b = b[rc](Ue);
            a = a || bi;
            for (var d = 0; d < b[J]; d++) {
                var e = b[d];
                if (null != a[e]) a = a[e]; else {
                    b = null;
                    break t
                }
            }
            b = a
        }
        return null != b && ri(c) ? c(b) : b
    }

    Bn[K].S = function (a, b, c) {
        for (var d = null, e = 0; e < this.Ti[J]; e++) {
            t:{
                var d = this.Ti[e], f = a, g = c;
                if (oi(f)) d = En(d, f, g); else {
                    for (var k = 0; k < f[J]; ++k) {
                        var l = En(d, f[k], g);
                        if (null != l) {
                            d = l;
                            break t
                        }
                    }
                    d = null
                }
            }
            if (null != d)return d
        }
        d = b;
        return ci(d) ? d : null
    };
    function Fn(a, b, c, d) {
        c = null != c ? gk(c) : {};
        for (var e = a.Ti[J] - 1; 0 <= e; e--) {
            var f = c, g = a.Ti[e], k = b, l = d;
            oi(k) && (k = [k]);
            for (var n = k[J] - 1; 0 <= n; --n) {
                var p = En(g, k[n], l) || {};
                jk(f, p)
            }
        }
        return c
    }
function Gn(a,b,c){c=null!=c?gk(c):{};oi(b)&&(b=[b]);for(var d=a.Ti[J]-1;0<=d;d--)for(var e=b[J]-1;0<=e;--e){var f=En(a.Ti[d],b[e])||{};Wm(c,f)}return c}function Hn(a){if(null==a)return null;if(typeof a==wg)return a;a=String(a);return a==af||a[pe]()==Mh?!0:a==Xe||a[pe]()==Gg?!1:null}function In(a,b,c){a=Jn(a,b);if(null!=a)return a;ci(c)||(c=!1);return c}function Jn(a,b){return a.S(b,null,Hn)}function Kn(a){if(null==a)return null;if(typeof a==T)return a;a=Mi(String(a));return fa(a)?null:a}
function Ln(a){return null!=a?ki(a)?Ti(a,Kn):null:null}function ffa(a){if(null==a)return null;if(qi(a))return a;a=ha(a);return fa(a)?null:a}function Mn(a,b,c){a=Nn(a,b);if(null!=a)return a;ci(c)||(c=0);return c}function gfa(a,b,c){a=a.S(b,null,ffa);if(null!=a)return a;ci(c)||(c=0);return c}function Nn(a,b){return a.S(b,null,Kn)}function On(a){a=Kn(a);return null!=a&&0<=a?a:null}function Pn(a,b,c){a=a.S(b,null,On);if(null!=a)return a;ci(c)||(c=0);return c}
function Qn(a){a=On(a);return null!=a?Aj(a,0,1):null}function Rn(a,b,c){a=a.S(b,null,Qn);if(null!=a)return a;ci(c)||(c=0);return c}function Sn(a){return null!=a?String(a):null}function Tn(a,b,c){ci(c)||(c=O);return a.S(b,c,Sn)}function Un(a,b){return a.S(b,null,Sn)}function Vn(a,b){var c=Sn(a);if(!c)return null;if($i(b||[],c))return c;try{return Um(c)}catch(d){return null}}function Wn(a,b,c){return a.S(b,c,Vn)}function Xn(a,b,c,d){return a.S(b,d,function(a){return Vn(a,c)})}
function Yn(a,b){return a.S(b,null,Vn)}function hfa(a){var b;a=a.S($ca,null,ifa);if(null!=a)return a;ci(b)||(b=[]);return b}function ifa(a){return null!=a?ki(a)?Ti(a,String):null:null}function Zn(a,b){var c=Sn(b);return bk(a,c)?c:null}function $n(a,b,c,d){return a.S(b,d,X(Zn,null,c))}function ao(a,b,c){return a.S(b,null,X(Zn,null,c))}function bo(a,b,c){ci(c)||(c=null);return a.S(b,c)}
function co(a,b,c){c=c?c.jj():null;a=Fn(a,b,c,function(a){ni(a)||(a={fill:a});var b={},c=Vn(a[ic]);null!=c&&za(b,c);c=Qn(a.fillOpacity);null!=c&&(b.Ce=c);c=Vn(a[$b]);null!=c&&xa(b,c);c=On(a.strokeWidth);null!=c&&(b.ua=c);c=Qn(a.strokeOpacity);null!=c&&(b.Xg=c);c=Ln(a.strokeDashStyle);null!=c&&ki(c)&&(b.cQ=c);c=Kn(a.rx);null!=c&&(b.Gi=c);c=Kn(a.ry);null!=c&&(b.Hi=c);(a=a.gradient)&&null!=a.color1&&null!=a.color2&&null!=a.x1&&null!=a.y1&&null!=a.x2&&null!=a.y2&&(c={},c.jg=Vn(a.color1),c.Rf=Vn(a.color2),
c.Yv=Qn(a.opacity1),c.Zv=Qn(a.opacity2),c.x1=a.x1,c.y1=a.y1,c.Hb=a.x2,c.Lb=a.y2,c.vt=Hn(a.useObjectBoundingBoxUnits),b.Eh=c);return b});a=new bn(a);on(a)||(a.Oe(qn.cb()),a.Ch(qn.Pe));nn(a)||(a.hd(qn.re),cn(a,qn.qi));return a}
function eo(a,b){var c={},d=Vn(a[F],b);null!=d&&Ya(c,d);d=Qn(a[Od]);null!=d&&nb(c,d);d=Vn(a.auraColor,b);null!=d&&(c.lc=d);if(d=On(a.auraWidth))c.Qwa=d;if(d=Sn(a.fontName))c.ab=d;(d=On(a[yc]))&&Fa(c,d);d=Hn(a[Id]);null!=d&&jb(c,d);d=Hn(a.italic);null!=d&&(c.Tc=d);d=Hn(a.underline);null!=d&&(c.Se=d);return c}function fo(a,b,c){return Fn(a,b,c,function(a){return eo(a)})}function jfa(a,b,c,d){return Fn(a,b,d,function(a){return eo(a,c)})}
function kfa(a,b){var c=Fn(a,b,void 0);return{format:c[Nb],interval:c[Gb]}}function lfa(a,b){var c=null,d=Kn(b);if(null!=d)c=d;else if(d=Sn(b),null!=d&&lda(d)){var c=d[J]-1,e=d;0<=c&&c<d[J]&&(e=d[hc](0,c)+d[hc](c+1,d[J]-c-1));c=a*Mi(e)/100}null!=c&&(c=Aj(c,0,a));return c}function mfa(a,b){var c,d=go(a,Iba,b);if(null!=d)return d;ci(c)||(c=0);return c}function go(a,b,c){return a.S(b,null,X(lfa,null,c))}

    var nfa = {Eya: "multiple", cza: Bh}, ho = {NONE: Q, Lua: Kg, Tua: zh, Ry: xg},
        ofa = {NONE: Q, Lua: Kg, Tua: zh, Ry: xg}, pfa = {NU: Tg, OU: Rh, Ry: xg};

    function qfa() {
        this.yn = !1;
        this.r4 = []
    }

    gi(qfa);
    function rfa(a, b, c) {
        var d = c.callback;
        c.callback = function () {
            var b = d[Sc](this, arguments);
            0 < a.r4[J] ? (a.r4[sb]()(), a.yn = !0) : a.yn = !1;
            return b
        };
        b = X(google[ld], bi.google, Zca, b, c);
        if (a.yn) a.r4[C](b); else a.yn = !0, b()
    }

    function io(a, b, c) {
        return b.S(Vh, null, On) || lm(a)[r] || c || 400
    }

    function jo(a, b, c) {
        return b.S(Rg, null, On) || lm(a)[A] || c || 200
    }

    function ko(a, b, c, d) {
        return b && (b = b[r], oi(b) && Ci(b) && (b = ka(b, 10)), typeof b == T && 30 <= b && (!d || b <= d)) || a && (b = a[Kd], 30 <= b && (!d || b <= d)) ? b : c || 400
    }

    function lo(a, b, c, d, e) {
        return b && (b = b[A], oi(b) && Ci(b) && (b = ka(b, 10)), typeof b == T && b >= (e || 30) && (!d || b <= d)) || a && (b = a[$d], b >= (e || 30) && (!d || b <= d)) ? b : c || 200
    }

    function sfa(a) {
        var b = tfa, c = a && a.colors;
        c && 0 != c[J] || (c = (a = a && a[F]) ? [a] : b);
        return c
    }

    function mo() {
        var a = ei(mca);
        if (null != a)return a;
        a = ei(jca);
        null != a || (a = paa);
        var b = ei(oca);
        null != b || (b = vaa);
        return a + qaa + b
    }

    function ufa() {
        if (0 == ea[fc](Qg)[J]) {
            var a = ea[fc](Vg)[0], b = ea[fc](vg)[0], c = ea[Sb](Qg);
            a[Fb](c, b)
        }
        return ea[fc](Qg)[0]
    }

    function no(a) {
        a = mo() + a;
        for (var b = ea[fc]($aa), c = 0; c < b[J]; c++)if (b[c] && b[c][Xd](Ug) && b[c][Xd](Ug) === a)return;
        b = ea[Sb](bh);
        b.href = a;
        b.rel = Qca;
        cb(b, Tca);
        ufa()[q](b)
    }

    var oo = [];
function vfa(a){function b(){if(wfa()){var a=oo;oo=[];Z(a,function(a){a()})}else throw m("Error: cannot load Maps API.");}wfa()?a():(oo[C](a),1==oo[J]&&(a=Lca,xfa()&&(a+=faa),google[ld](uca,cf,{callback:b,other_params:a})))}function xfa(){var a=bi[xc][Nc];if(!Ai(a)){if((sm(a)[1]||null)!=Wg)return!1;a=um(a);if(!Ai(a)){var b=/^ajax\.googleapis\.com$/[hd](a);return/\.google\.com$/[hd](a)||b}}return!1}function wfa(){return!!ei(kca)}
function po(a){var b=null,c=bi.google;(c=c&&c[Qd]&&c[Qd].Locale)&&c.packages&&c.packages[a]&&(b=c.locale);return b}function qo(a,b){var c=hi(a);b=(31*b+Li(c))%67108864;switch(c){case jh:if(a[uc]==Date)b=(31*b+Li(Bg))%67108864,b=qo(a[ec](),b);else{c=ak(a);mj(c);var c=kk(c),d;for(d in c)b=qo(a[d],qo(d,b))}break;case rg:for(d=0;d<a[J];d++)b=qo(a[d],qo(String(d),b));break;default:b=(31*b+Li(String(a)))%67108864}return b}function ro(a){if(!dl(a))throw m(tf);return a}

    function so(a) {
        a = Xi(Ti([lca + a, ica + a, a], function (a) {
            return ei(a)
        }), ri);
        return null != a ? a : null
    }

    function uo(a) {
        this.b = a || {};
        no(saa)
    }

    ta(uo[K], function (a, b) {
        if (a.D(b) == T)for (var c = this.b.base || 0, d = 0; d < a.M(); d++) {
            var e = a[I](d, b), f = null, f = e < c ? fca : e > c ? hca : gca;
            a[Ic](d, b, Uba, f)
        }
    });
    function vo(a) {
        a = String(a);
        if (/^\s*$/[hd](a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/[hd](a[wb](/\\["\\\/bfnrtu]/g, Faa)[wb](/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, kg)[wb](/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, O)))try {
            return eval(Ne + a + Oe)
        } catch (b) {
        }
        throw m("Invalid JSON string: " + a);
    }

    function zo(a) {
        return eval(Ne + a + Oe)
    }

    function dn(a) {
        return (new yfa(void 0)).rg(a)
    }

    function yfa(a) {
        this.WU = a
    }

    yfa[K].rg = function (a) {
        var b = [];
        Ao(this, a, b);
        return b[me](O)
    };
    function Ao(a, b, c) {
        switch (typeof b) {
            case Eh:
                zfa(b, c);
                break;
            case T:
                c[C](na(b) && !fa(b) ? b : hh);
                break;
            case wg:
                c[C](b);
                break;
            case "undefined":
                c[C](hh);
                break;
            case jh:
                if (null == b) {
                    c[C](hh);
                    break
                }
                if (ki(b)) {
                    var d = b[J];
                    c[C](wba);
                    for (var e = O, f = 0; f < d; f++)c[C](e), e = b[f], Ao(a, a.WU ? a.WU[L](b, String(f), e) : e, c), e = Re;
                    c[C](kg);
                    break
                }
                c[C](Yh);
                d = O;
                for (f in b)ca[K][zc][L](b, f) && (e = b[f], typeof e != Mg && (c[C](d), zfa(f, c), c[C](ef), Ao(a, a.WU ? a.WU[L](b, f, e) : e, c), d = Re));
                c[C](Zh);
                break;
            case Mg:
                break;
            default:
                throw m("Unknown type: " +
                    typeof b);
        }
    }

    var Bo = {
        '"': '\\"',
        "\\": ig,
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\u000b"
    }, Afa = /\uffff/[hd]("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;

    function zfa(a, b) {
        b[C](ue, a[wb](Afa, function (a) {
            if (a in Bo)return Bo[a];
            var b = a[ae](0), e = Cba;
            16 > b ? e += $e : 256 > b ? e += taa : 4096 > b && (e += Xe);
            return Bo[a] = e + b[kc](16)
        }), ue)
    }

    function Co(a) {
        return dn(Do(a, Eo))
    }

    function Fo(a) {
        vo(a);
        return Bfa(a)
    }

    function Bfa(a) {
        a = Go(a);
        return eval(Ne + a + Oe)
    }

    function Do(a, b) {
        a = b(a);
        var c = hi(a);
        if (c == jh || c == rg) {
            var c = c == rg ? [] : {}, d;
            for (d in a)if (a[zc](d)) {
                var e = Do(a[d], b);
                ci(e) && (c[d] = e)
            }
        } else c = a;
        return c
    }

    function Go(a) {
        return a[wb](/"(Date\([\d,\s]*\))"/g, function (a, c) {
            return Aca + c
        })
    }

    function Eo(a) {
        mi(a) && (a = 0 !== a[Pd]() ? [a[Jc](), a[Hd](), a[Eb](), a[bc](), a[Vc](), a[Md](), a[Pd]()] : 0 !== a[Md]() || 0 !== a[Vc]() || 0 !== a[bc]() ? [a[Jc](), a[Hd](), a[Eb](), a[bc](), a[Vc](), a[Md]()] : [a[Jc](), a[Hd](), a[Eb]()], a = Maa + a[me](Se) + Oe);
        return a
    }

    var Cfa = {qxa: wg, Gya: T, jza: Eh, Gua: Bg, rza: Jh, Hua: Cg};
    var Dfa = {zya: Hf, Wya: jba, Aya: bba, Xxa: Taa, Mxa: uf, Cza: tba, Cya: Jf, Sya: Pf, Gza: gg};

    function Ho(a) {
        switch (a) {
            case Hf:
                return 1;
            case jba:
                return 1E3;
            case bba:
                return 6E4;
            case Taa:
                return 36E5;
            case uf:
                return 864E5;
            case tba:
                return 6048E5;
            case Jf:
                return 2629746E3;
            case Pf:
                return 7889238E3;
            case gg:
                return 31556952E3
        }
        return 0
    }

    function Io() {
    }

    function Jo(a) {
        if (typeof a == T) {
            var b = new Io;
            b.xfa = a;
            var c;
            c = a;
            if (0 == c) c = Oaa; else {
                var d = [Oaa, 0 > c ? Te : Qe];
                c = h.abs(c);
                d[C](h[t](c / 60) % 100);
                c %= 60;
                0 != c && d[C](ef, Ii(c, 2));
                c = d[me](O)
            }
            b.yfa = c;
            0 == a ? a = qba : (c = [qba, 0 > a ? Qe : Te], a = h.abs(a), c[C](h[t](a / 60) % 100), a %= 60, 0 != a && c[C](ef, a), a = c[me](O));
            b.m4 = [a, a];
            b.PD = [];
            return b
        }
        b = new Io;
        b.yfa = a.id;
        b.xfa = -a.std_offset;
        b.m4 = a[cc];
        b.PD = a.transitions;
        return b
    }

    W = Io[K];
    W.getDaylightAdjustment = function (a) {
        a = Date.UTC(a[Mb](), a[Ec](), a[Nd](), a[ie](), a[he]()) / 36E5;
        for (var b = 0; b < this.PD[J] && a >= this.PD[b];)b += 2;
        return 0 == b ? 0 : this.PD[b - 1]
    };
    W.getGMTString = function (a) {
        a = this.getOffset(a);
        var b = [Raa];
        b[C](0 >= a ? Qe : Te);
        a = h.abs(a);
        b[C](Ii(h[t](a / 60) % 100, 2), ef, Ii(a % 60, 2));
        return b[me](O)
    };
    W.getLongName = function (a) {
        return this.m4[this.isDaylightTime(a) ? 3 : 1]
    };
    W.getOffset = function (a) {
        return this.xfa - this.getDaylightAdjustment(a)
    };
W.getRFCTimeZoneString=function(a){a=-this.getOffset(a);var b=[0>a?Te:Qe];a=h.abs(a);b[C](Ii(h[t](a/60)%100,2),Ii(a%60,2));return b[me](O)};W.getShortName=function(a){return this.m4[this.isDaylightTime(a)?2:0]};W.getTimeZoneId=function(){return this.yfa};W.isDaylightTime=function(a){return 0<this.getDaylightAdjustment(a)};function Ko(a,b){this.wU=[];this.uf=b||tn;typeof a==T?this.hT(a):this.ft(a)}var Efa=[/^\'(?:[^\']|\'\')*\'/,/^(?:G+|y+|M+|k+|S+|E+|a+|h+|K+|H+|c+|L+|Q+|d+|m+|s+|v+|w+|z+|Z+)/,/^[^\'GyMkSEahKHcLQdmsvwzZ]+/];Ko[K].ft=function(a){for(;a;)for(var b=0;b<Efa[J];++b){var c=a[Lb](Efa[b]);if(c){c=c[0];a=a[ee](c[J]);0==b&&(c==gaa?c=Me:(c=c[ee](1,c[J]-1),c=c[wb](/\'\'/,Me)));this.wU[C]({text:c,type:b});break}}};
ta(Ko[K],function(a,b){if(!a)throw m("The date to format must be non-null.");var c=b?6E4*(a[qe]()-b.getOffset(a)):0,d=c?new Date(a[ec]()+c):a,e=d;b&&d[qe]()!=a[qe]()&&(c+=0<c?-864E5:864E5,e=new Date(a[ec]()+c));for(var c=[],f=0;f<this.wU[J];++f){var g=this.wU[f][id];1==this.wU[f][H]?c[C](Ffa(this,g,a,d,e,b)):c[C](g)}return c[me](O)});
Ko[K].hT=function(a){var b;if(4>a)b=this.uf.DATEFORMATS[a];else if(8>a)b=this.uf.TIMEFORMATS[a-4];else if(12>a)b=this.uf.DATETIMEFORMATS[a-8],b=b[wb](bda,this.uf.DATEFORMATS[a-8]),b=b[wb](ada,this.uf.TIMEFORMATS[a-8]);else{this.hT(10);return}this.ft(b)};function Lo(a,b){var c;c=String(b);var d=a.uf||tn;if(void 0!==d.ita){for(var e=[],f=0;f<c[J];f++){var g=c[ae](f);e[C](48<=g&&57>=g?String[vd](d.ita+g-48):c[Cb](f))}c=e[me](O)}return c}
function Mo(a){if(!(a[bc]&&a[Md]&&a[Vc]))throw m("The date to format has no time (probably a goog.date.Date). Use Date or goog.date.DateTime, or use a pattern without time fields.");}

    function Ffa(a, b, c, d, e, f) {
        var g = b[J];
        switch (b[Cb](0)) {
            case Qaa:
                return c = 0 < d[Jc]() ? 1 : 0, 4 <= g ? a.uf.ERANAMES[c] : a.uf.ERAS[c];
            case Wh:
                return c = d[Jc](), 0 > c && (c = -c), 2 == g && (c %= 100), Lo(a, Ii(c, g));
            case Gf:
                switch (c = d[Hd](), g) {
                    case 5:
                        a = a.uf.NARROWMONTHS[c];
                        break;
                    case 4:
                        a = a.uf.MONTHS[c];
                        break;
                    case 3:
                        a = a.uf.SHORTMONTHS[c];
                        break;
                    default:
                        a = Lo(a, Ii(c + 1, g))
                }
                return a;
            case $g:
                return Mo(e), Lo(a, Ii(e[bc]() || 24, g));
            case Qf:
                return c = e[ec]() % 1E3 / 1E3, Lo(a, c[xb](h.min(3, g))[hc](2) + (3 < g ? Ii(0, g - 3) : O));
            case zf:
                return c =
                    d[nc](), 4 <= g ? a.uf.WEEKDAYS[c] : a.uf.SHORTWEEKDAYS[c];
            case mg:
                return Mo(e), g = e[bc](), a.uf.AMPMS[12 <= g && 24 > g ? 1 : 0];
            case Og:
                return Mo(e), Lo(a, Ii(e[bc]() % 12 || 12, g));
            case Yaa:
                return Mo(e), Lo(a, Ii(e[bc]() % 12, g));
            case Saa:
                return Mo(e), Lo(a, Ii(e[bc](), g));
            case yg:
                switch (c = d[nc](), g) {
                    case 5:
                        a = a.uf.STANDALONENARROWWEEKDAYS[c];
                        break;
                    case 4:
                        a = a.uf.STANDALONEWEEKDAYS[c];
                        break;
                    case 3:
                        a = a.uf.STANDALONESHORTWEEKDAYS[c];
                        break;
                    default:
                        a = Lo(a, Ii(c, 1))
                }
                return a;
            case Ff:
                switch (c = d[Hd](), g) {
                    case 5:
                        a = a.uf.STANDALONENARROWMONTHS[c];
                        break;
                    case 4:
                        a = a.uf.STANDALONEMONTHS[c];
                        break;
                    case 3:
                        a = a.uf.STANDALONESHORTMONTHS[c];
                        break;
                    default:
                        a = Lo(a, Ii(c + 1, g))
                }
                return a;
            case Of:
                return c = h[t](d[Hd]() / 3), 4 > g ? a.uf.SHORTQUARTERS[c] : a.uf.QUARTERS[c];
            case Ag:
                return Lo(a, Ii(d[Eb](), g));
            case dh:
                return Mo(e), Lo(a, Ii(e[Vc](), g));
            case xh:
                return Mo(e), Lo(a, Ii(e[Md](), g));
            case Ph:
                return a = f || Jo(c[qe]()), a.getTimeZoneId();
            case Th:
                return c = new Date(e[Jc](), e[Hd](), e[Eb]()), b = a.uf.FIRSTDAYOFWEEK || 0, c = c[fd]() + 864E5 * (((a.uf.FIRSTWEEKCUTOFFDAY || 3) - b + 7) %
                    7 - ((c[nc]() + 6) % 7 - b + 7) % 7), c = h[t](h[E]((c - (new Date((new Date(c))[Jc](), 0, 1))[fd]()) / 864E5) / 7) + 1, Lo(a, Ii(c, g));
            case Xh:
                return a = f || Jo(c[qe]()), 4 > g ? a.getShortName(c) : a.getLongName(c);
            case hg:
                return b = f || Jo(c[qe]()), 4 > g ? b.getRFCTimeZoneString(c) : Lo(a, b.getGMTString(c));
            default:
                return O
        }
    }

    var Gfa = {
        YEAR_FULL: Wh,
        YEAR_FULL_WITH_ERA: "y G",
        YEAR_MONTH_ABBR: "MMM y",
        YEAR_MONTH_FULL: "MMMM y",
        MONTH_DAY_ABBR: If,
        MONTH_DAY_FULL: "MMMM dd",
        MONTH_DAY_SHORT: "M/d",
        MONTH_DAY_MEDIUM: "MMMM d",
        MONTH_DAY_YEAR_MEDIUM: "MMM d, y",
        WEEKDAY_MONTH_DAY_MEDIUM: "EEE, MMM d",
        WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, MMM d, y",
        DAY_ABBR: Ag
    }, No = Gfa, No = Gfa;
    var Hfa = {
        Tta: {
            1E3: {other: "0K"},
            1E4: {other: "00K"},
            1E5: {other: "000K"},
            1E6: {other: "0M"},
            1E7: {other: "00M"},
            1E8: {other: "000M"},
            1E9: {other: "0B"},
            1E10: {other: "00B"},
            1E11: {other: "000B"},
            1E12: {other: "0T"},
            1E13: {other: "00T"},
            1E14: {other: "000T"}
        }, Sta: {
            1E3: {other: "0 thousand"},
            1E4: {other: "00 thousand"},
            1E5: {other: "000 thousand"},
            1E6: {other: "0 million"},
            1E7: {other: "00 million"},
            1E8: {other: "000 million"},
            1E9: {other: "0 billion"},
            1E10: {other: "00 billion"},
            1E11: {other: "000 billion"},
            1E12: {other: "0 trillion"},
            1E13: {other: "00 trillion"},
            1E14: {other: "000 trillion"}
        }
    }, Oo = Hfa, Oo = Hfa;

    function Ifa(a) {
        var b = Po.Eua, c = [Xe];
        a = Qo[a][0] & 7;
        if (0 < a) {
            c[C](Ue);
            for (var d = 0; d < a; d++)c[C](Xe)
        }
        return b[wb](/0.00/g, c[me](O))
    }
var Qo={AED:[2,"dh","\u062f.\u0625.","DH"],ALL:[0,"Lek","Lek"],AUD:[2,Be,"AU$"],BDT:[2,"\u09f3","Tk"],BGN:[2,"lev","lev"],BRL:[2,"R$","R$"],CAD:[2,Be,"C$"],CDF:[2,"FrCD","CDF"],CHF:[2,"CHF","CHF"],CLP:[0,Be,"CL$"],CNY:[2,"\u00a5","RMB\u00a5"],COP:[0,Be,"COL$"],CRC:[0,"\u20a1","CR\u20a1"],CZK:[50,"K\u010d","K\u010d"],DKK:[18,"kr","kr"],DOP:[2,Be,"RD$"],EGP:[2,"\u00a3","LE"],ETB:[2,"Birr","Birr"],EUR:[2,"\u20ac","\u20ac"],GBP:[2,"\u00a3","GB\u00a3"],HKD:[2,Be,"HK$"],HRK:[2,"kn","kn"],HUF:[0,"Ft","Ft"],
IDR:[0,"Rp","Rp"],ILS:[2,"\u20aa","IL\u20aa"],INR:[2,"\u20b9","Rs"],IRR:[0,"Rial","IRR"],ISK:[0,"kr","kr"],JMD:[2,Be,"JA$"],JPY:[0,"\u00a5","JP\u00a5"],KRW:[0,"\u20a9","KR\u20a9"],LKR:[2,"Rs","SLRs"],LTL:[2,"Lt","Lt"],LVL:[2,"Ls","Ls"],MNT:[0,"\u20ae","MN\u20ae"],MXN:[2,Be,"Mex$"],MYR:[2,"RM","RM"],NOK:[50,"kr","NOkr"],PAB:[2,"B/.","B/."],PEN:[2,"S/.","S/."],PHP:[2,"\u20b1","Php"],PKR:[0,"Rs","PKRs."],PLN:[50,"z\u0142","z\u0142"],RON:[2,"RON","RON"],RSD:[0,"din","RSD"],RUB:[50,"\u0440\u0443\u0431.",
"\u0440\u0443\u0431."],SAR:[2,"Rial","Rial"],SEK:[2,"kr","kr"],SGD:[2,Be,"S$"],THB:[2,"\u0e3f","THB"],TRY:[2,Yf,"YTL"],TWD:[2,"NT$","NT$"],TZS:[0,"TSh","TSh"],UAH:[2,"\u20b4","UAH"],USD:[2,Be,"US$"],UYU:[2,Be,"$U"],VND:[0,"\u20ab","VN\u20ab"],YER:[0,"Rial","Rial"],ZAR:[2,"R","ZAR"]};var Jfa={DECIMAL_SEP:Ue,GROUP_SEP:Re,eL:De,y3:Xe,rta:Qe,qta:Te,qea:zf,kea:eda,c3:"\u221e",Hra:"NaN",DECIMAL_PATTERN:"#,##0.###",mta:"#E0",a4:"#,##0%",Eua:"\u00a4#,##0.00",uqa:"USD"},Po=Jfa,Po=Jfa;function Ro(a,b,c){this.AK=b||Po.uqa;this.mqa=c||0;this.TS=40;this.Uo=1;this.bz=0;this.Uy=3;this.bT=this.ct=0;this.bda=this.wca=!1;this.kK=this.Qy=O;this.Av=Te;this.ND=O;this.tj=1;this.Z1=3;this.XS=this.vca=!1;this.wK=0;this.ada=null;typeof a==T?this.hT(a):this.ft(a)}var So=!1;W=Ro[K];W.setMinimumFractionDigits=function(a){if(0<this.bz&&0<a)throw m(Laa);this.ct=a;return this};W.setMaximumFractionDigits=function(a){this.Uy=a;return this};
W.setSignificantDigits=function(a){if(0<this.ct&&0<=a)throw m(Laa);this.bz=a;return this};
W.ft=function(a){this.vd=a[wb](/ /g,$h);var b=[0];this.Qy=To(this,a,b);for(var c=b[0],d=-1,e=0,f=0,g=0,k=-1,l=a[J],n=!0;b[0]<l&&n;b[0]++)switch(a[Cb](b[0])){case we:0<f?g++:e++;0<=k&&0>d&&k++;break;case Xe:if(0<g)throw m('Unexpected "0" in pattern "'+a+ue);f++;0<=k&&0>d&&k++;break;case Re:k=0;break;case Ue:if(0<=d)throw m('Multiple decimal separators in pattern "'+a+ue);d=e+f+g;break;case zf:if(this.XS)throw m('Multiple exponential symbols in pattern "'+a+ue);this.XS=!0;this.bT=0;b[0]+1<l&&a[Cb](b[0]+
1)==Qe&&(b[0]++,this.wca=!0);for(;b[0]+1<l&&a[Cb](b[0]+1)==Xe;)b[0]++,this.bT++;if(1>e+f||1>this.bT)throw m('Malformed exponential pattern "'+a+ue);n=!1;break;default:b[0]--,n=!1}0==f&&0<e&&0<=d&&(f=d,0==f&&f++,g=e-f,e=f-1,f=1);if(0>d&&0<g||0<=d&&(d<e||d>e+f)||0==k)throw m('Malformed pattern "'+a+ue);g=e+f+g;this.Uy=0<=d?g-d:0;0<=d&&(this.ct=e+f-d,0>this.ct&&(this.ct=0));this.Uo=(0<=d?d:g)-e;this.XS&&(this.TS=e+this.Uo,0==this.Uy&&0==this.Uo&&(this.Uo=1));this.Z1=h.max(0,k);this.vca=0==d||d==g;c=
b[0]-c;this.kK=To(this,a,b);b[0]<a[J]&&a[Cb](b[0])==gf?(b[0]++,this.Av=To(this,a,b),b[0]+=c,this.ND=To(this,a,b)):(this.Av=this.Qy+this.Av,this.ND+=this.kK)};W.hT=function(a){switch(a){case 1:this.ft(Po.DECIMAL_PATTERN);break;case 2:this.ft(Po.mta);break;case 3:this.ft(Po.a4);break;case 4:this.ft(Ifa(this.AK));break;case 5:Kfa(this,1);break;case 6:Kfa(this,2);break;default:throw m("Unsupported pattern type.");}};
function Kfa(a,b){a.wK=b;a.ft(Po.DECIMAL_PATTERN);a.setMinimumFractionDigits(0);a.setMaximumFractionDigits(2);a.setSignificantDigits(2)}
hb(W,function(a,b){var c=b||[0];if(0!=this.wK)throw m("Parsing of compact numbers is unimplemented");var d=ia;a=a[wb](/ /g,$h);var e=a[qd](this.Qy,c[0])==c[0],f=a[qd](this.Av,c[0])==c[0];e&&f&&(this.Qy[J]>this.Av[J]?f=!1:this.Qy[J]<this.Av[J]&&(e=!1));e?c[0]+=this.Qy[J]:f&&(c[0]+=this.Av[J]);if(a[qd](Po.c3,c[0])==c[0])c[0]+=Po.c3[J],d=da;else{var d=a,g=!1,k=!1,l=!1,n=1,p=Po.DECIMAL_SEP,s=Po.GROUP_SEP,u=Po.qea;if(0!=this.wK)throw m("Parsing of compact style numbers is not implemented");for(var v=O;c[0]<
d[J];c[0]++){var z=d[Cb](c[0]),B=Lfa(z);if(0<=B&&9>=B)v+=B,l=!0;else if(z==p[Cb](0)){if(g||k)break;v+=Ue;g=!0}else if(z==s[Cb](0)&&($h!=s[Cb](0)||c[0]+1<d[J]&&0<=Lfa(d[Cb](c[0]+1)))){if(g||k)break}else if(z==u[Cb](0)){if(k)break;v+=zf;k=!0}else if(z==Qe||z==Te)v+=z;else if(z==Po.eL[Cb](0)){if(1!=n)break;n=100;if(l){c[0]++;break}}else if(z==Po.kea[Cb](0)){if(1!=n)break;n=1E3;if(l){c[0]++;break}}else break}d=la(v)/n}if(e){if(a[qd](this.kK,c[0])!=c[0])return ia;c[0]+=this.kK[J]}else if(f){if(a[qd](this.ND,
c[0])!=c[0])return ia;c[0]+=this.ND[J]}return f?-d:d});
ta(W,function(a){if(fa(a))return Po.Hra;var b=[],c;var d=null===this.ada?a:this.ada,e=a;0==this.wK?c=Uo:(d=h.abs(d),e=h.abs(e),c=Mfa(this,1>=d?0:Vo(d)).divisorBase,e/=h.pow(10,c),Wo(this,e),d/=h.pow(10,c),d=Wo(this,d),c=Mfa(this,c+Vo(d.uda)));a/=h.pow(10,c.divisorBase);b[C](c.prefix);d=0>a||0==a&&0>1/a;b[C](d?this.Av:this.Qy);if(na(a))if(a=a*(d?-1:1)*this.tj,this.XS)if(0==a)Xo(this,a,this.Uo,b),Nfa(this,0,b);else{e=h.log(a)/h.log(10);e=h[t](e+2E-15);a/=h.pow(10,e);var f=this.Uo;if(1<this.TS&&this.TS>
this.Uo){for(;0!=e%this.TS;)a*=10,e--;f=1}else 1>this.Uo?(e++,a/=10):(e-=this.Uo-1,a*=h.pow(10,this.Uo-1));Xo(this,a,f,b);Nfa(this,e,b)}else Xo(this,a,this.Uo,b);else b[C](Po.c3);b[C](d?this.ND:this.kK);b[C](c.suffix);return b[me](O)});function Wo(a,b){var c=h.pow(10,a.Uy),d=0>=a.bz?h[E](b*c):h[E](Ofa(b*c,a.bz,a.Uy)),e;na(d)?(e=h[t](d/c),c=h[t](d-e*c)):(e=b,c=0);return{uda:e,Gsa:c}}
function Xo(a,b,c,d){if(a.ct>a.Uy)throw m("Min value must be less than max value");b=Wo(a,b);var e=h.pow(10,a.Uy),f=b.uda,g=b.Gsa,k=0==f?0:Vo(f)+1,l=0<a.ct||0<g||a.bda&&k<a.bz;b=a.ct;l&&(b=a.bda&&0<a.bz?a.bz-k:a.ct);for(var n=O,k=f;1E20<k;)n=Xe+n,k=h[E](k/10);var n=k+n,p=Po.DECIMAL_SEP,s=Po.GROUP_SEP,k=So?48:Po.y3[ae](0),u=n[J];if(0<f||0<c){for(f=u;f<c;f++)d[C](String[vd](k));for(f=0;f<u;f++)d[C](String[vd](k+1*n[Cb](f))),1<u-f&&0<a.Z1&&1==(u-f)%a.Z1&&d[C](s)}else l||d[C](String[vd](k));(a.vca||l)&&
d[C](p);a=O+(g+e);for(c=a[J];a[Cb](c-1)==Xe&&c>b+1;)c--;for(f=1;f<c;f++)d[C](String[vd](k+1*a[Cb](f)))}function Nfa(a,b,c){c[C](Po.qea);0>b?(b=-b,c[C](Po.qta)):a.wca&&c[C](Po.rta);b=O+b;for(var d=So?Xe:Po.y3,e=b[J];e<a.bT;e++)c[C](d);c[C](b)}function Lfa(a){a=a[ae](0);if(48<=a&&58>a)return a-48;var b=Po.y3[ae](0);return b<=a&&a<b+10?a-b:-1}
function To(a,b,c){for(var d=O,e=!1,f=b[J];c[0]<f;c[0]++){var g=b[Cb](c[0]);if(g==Me)c[0]+1<f&&b[Cb](c[0]+1)==Me?(c[0]++,d+=Me):e=!e;else if(e)d+=g;else switch(g){case we:case Xe:case Re:case Ue:case gf:return d;case dda:if(c[0]+1<f&&b[Cb](c[0]+1)==dda)c[0]++,d+=a.AK;else switch(a.mqa){case 0:d+=Qo[a.AK][1];break;case 2:var g=a.AK,k=Qo[g],d=d+(g==k[1]?g:g+se+k[1]);break;case 1:d+=Qo[a.AK][2]}break;case De:if(1!=a.tj)throw m(oba);a.tj=100;d+=Po.eL;break;case eda:if(1!=a.tj)throw m(oba);a.tj=1E3;d+=
    Po.kea;
    break;
    default:
        d += g
}
}
    return d
}

    var Uo = {prefix: O, suffix: O, divisorBase: 0};

    function Mfa(a, b) {
        var c = 1 == a.wK ? Oo.Tta : Oo.Sta;
        if (3 > b)return Uo;
        b = h.min(14, b);
        c = c[h.pow(10, b)];
        if (!c)return Uo;
        c = c.other;
        return c && c != Xe ? (c = /([^0]*)(0+)(.*)/[tb](c)) ? {
            prefix: c[1],
            suffix: c[3],
            divisorBase: b - (c[2][J] - 1)
        } : Uo : Uo
    }

    function Vo(a) {
        for (var b = 0; 1 <= (a /= 10);)b++;
        return b
    }

    function Ofa(a, b, c) {
        if (!a)return a;
        b = b - Vo(a) - 1;
        if (b < -c)return c = h.pow(10, c), h[E](a / c) * c;
        c = h.pow(10, b);
        return h[E](a * c) / c
    }

    ta(Ko[K], Ko[K][Nb]);
    Ko.Format = {
        FULL_DATE: 0,
        LONG_DATE: 1,
        MEDIUM_DATE: 2,
        SHORT_DATE: 3,
        FULL_TIME: 4,
        LONG_TIME: 5,
        MEDIUM_TIME: 6,
        SHORT_TIME: 7,
        FULL_DATETIME: 8,
        LONG_DATETIME: 9,
        MEDIUM_DATETIME: 10,
        SHORT_DATETIME: 11
    };
    var Yo = No;
    Ro.Format = {Iua: 1, Sua: 2, eL: 3, Dua: 4, Cua: 5, Bua: 6};
    ta(Ro[K], Ro[K][Nb]);
    Ro.setEnforceAsciiDigits = function (a) {
        So = a
    };
    Ro.isEnforceAsciiDigits = function () {
        return So
    };
    var Zo = Po;
    Io.createTimeZone = Jo;
    function $o() {
    }

    $o[K].getStringValue = function (a, b) {
        var c = this.D(b);
        if (c !== Eh)throw m(sf + b + " must be of type string, was " + c);
        return this[I](a, b)
    };
    function ap() {
    }

    ap[K].Oc = function (a) {
        return this.PU(a)
    };
    function bp(a) {
        this[Kc](a)
    }

    Y(bp, ap);
    La(bp[K], function (a) {
        a = new Bn([a || {}, {formatType: Ah, valueType: Cg}]);
        this.vd = a.S(ph);
        this.sd = null;
        this.Wpa = ao(a, dca, Pfa);
        this.Ppa = ao(a, Wca, Qfa);
        this.Vpa = In(a, Vba, !1);
        this.Qca = null;
        a = Nn(a, Vca);
        null != a && (this.Qca = Io.createTimeZone(60 * -a))
    });
    var cp = Ko[Ad], Pfa = {Sxa: Lg, nya: ch, tya: fh, SHORT: Ah}, Qfa = {Gua: Bg, Hua: Cg, pza: Ih};

    function Rfa(a, b) {
        switch (a) {
            case Bg:
                switch (b) {
                    case Lg:
                        return Ko[Ad].FULL_DATE;
                    case ch:
                        return Ko[Ad].LONG_DATE;
                    case fh:
                        return Ko[Ad].MEDIUM_DATE;
                    case Ah:
                        return Ko[Ad].SHORT_DATE
                }
            case Cg:
                switch (b) {
                    case Lg:
                        return Ko[Ad].FULL_DATETIME;
                    case ch:
                        return Ko[Ad].LONG_DATETIME;
                    case fh:
                        return Ko[Ad].MEDIUM_DATETIME;
                    case Ah:
                        return Ko[Ad].SHORT_DATETIME
                }
            case Ih:
                switch (b) {
                    case Lg:
                        return Ko[Ad].FULL_TIME;
                    case ch:
                        return Ko[Ad].LONG_TIME;
                    case fh:
                        return Ko[Ad].MEDIUM_TIME;
                    case Ah:
                        return Ko[Ad].SHORT_TIME
                }
            default:
                return Ko[Ad].FULL_DATETIME
        }
    }
bp[K].gl=function(a){switch(a){case gg:a=Yo.YEAR_FULL;break;case Pf:a=iba;break;case Jf:a=Yo.YEAR_MONTH_ABBR;break;case uf:a=Ko[Ad].SHORT_DATE;break;default:a=Ko[Ad].SHORT_DATETIME}this[Kc]({pattern:a,timeZone:0})};ta(bp[K],function(a,b){var c=Zn(Qfa,a.D(b));if(c==Bg||c==Cg)for(var c=this.QO(c),d=a.M(),e=0;e<d;e++){var f=a[I](e,b),f=Sfa(this,c,f);a.Tx(e,b,f)}});bp[K].PU=function(a){this.sd||(this.sd=this.QO(this.Ppa));return Sfa(this,this.sd,a)};
    bp[K].QO = function (a) {
        var b = this.vd;
        null != b || (b = Rfa(a, this.Wpa));
        return new Ko(b)
    };
    function Sfa(a, b, c) {
        if (null === c)return O;
        var d = a.Qca;
        null == d && (d = Io.createTimeZone(c[qe]()));
        c = new Date(c[ec]());
        a.Vpa && c.setMinutes(0);
        return b[Nb](c, d)
    }

    function dp(a) {
        var b = new Bn([a || {}, {
            decimalSymbol: Tfa,
            groupingSymbol: Ufa,
            fractionDigits: 2,
            negativeParens: !1,
            prefix: O,
            suffix: O,
            scaleFactor: 1
        }]);
        this.nz = Pn(b, eca);
        a && qi(a.fractionDigits) && fa(a.fractionDigits) && (this.nz = ia);
        this.ksa = Tn(b, $ba);
        this.v3 = Tn(b, pca);
        this.vea = Tn(b, rh);
        this.wea = Tn(b, Gh);
        this.oba = Yn(b, yca);
        this.uea = In(b, zca);
        (this.vd = Un(b, ph)) && this.vd[pe]() in Vfa && (this.vd = Vfa[this.vd[pe]()]);
        this.iI = Mn(b, Kca);
        if (0 >= this.iI)throw m("Scale factor must be a positive number.");
    }

    Y(dp, ap);
    var Vfa = {
        decimal: Ro[Ad].Iua,
        scientific: Ro[Ad].Sua,
        percent: Ro[Ad].eL,
        currency: Ro[Ad].Dua,
        "short": Ro[Ad].Cua,
        "long": Ro[Ad].Bua
    }, Wfa = !1, Tfa = Zo.DECIMAL_SEP, Ufa = Zo.GROUP_SEP, ep = Zo.DECIMAL_PATTERN;
    ta(dp[K], function (a, b) {
        if (a.D(b) == T)for (var c = 0; c < a.M(); c++) {
            var d = a[I](c, b);
            if (null != d) {
                var e = this.Oc(d);
                a.Tx(c, b, e);
                !Ai(this.oba) && 0 > d && a[Ic](c, b, Fh, Wba + this.oba + gf)
            }
        }
    });
dp[K].PU=function(a){var b=null,b=a/this.iI;if(null===this.vd){if(fa(this.nz))return String(a);this.uea&&(b=h.abs(b));var c=b;0==this.nz&&(c=h[E](c));b=[];0>c&&(c=-c,b[C](Te));var d=h.pow(10,this.nz),e=h[E](c*d),c=String(h[t](e/d)),d=String(e%d);if(3<c[J]&&this.v3)for(e=c[J]%3,0<e&&(b[C](c[ee](0,e),this.v3),c=c[ee](e));3<c[J];)b[C](c[ee](0,3),this.v3),c=c[ee](3);b[C](c);0<this.nz&&(b[C](this.ksa),d[J]<this.nz&&(d=uaa+d),b[C](d[ee](d[J]-this.nz)));b=b[me](O);b=this.vea+b+this.wea;this.uea&&0>a&&(b=
Ne+b+Oe)}else c=new Ro(this.vd),a=Ro.isEnforceAsciiDigits(),Ro.setEnforceAsciiDigits(!Wfa),b=c[Nb](b),b=this.vea+b+this.wea,Ro.setEnforceAsciiDigits(a);return b};function Xfa(a){return null==a?null:ri(a.Fy)?a:ki(a)?Yfa(a):new fp(a)}function Zfa(a){var b={};if(hi(a)!=jh||mi(a))b.v=null!=a?a:null,b.f=null;else{b.v="undefined"==typeof a.v?null:a.v;var c=typeof a.f;if("undefined"==c||c==hh)b.f=null;else if(c==Eh)b.f=a.f;else throw m("Formatted value ('f'), if specified, must be a string.");c=typeof a.p;if(c==jh)b.p=a.p;else if(c!=hh&&"undefined"!=c)throw m("Properties ('p'), if specified, must be an Object.");}return{v:b.v,f:b.f,p:b.p}}
function $fa(a,b,c){if(typeof b==jh&&zg in b){if(aca in b&&typeof b.desc!=wg)throw m('Property "desc" in '+c+" must be boolean.");if(Yba in b&&!ri(b.compare))throw m('Property "compare" in '+c+" must be a function.");}else throw m(c+' must be an object with a "column" property.');gp(a,b.column)}
function aga(a,b,c){function d(d,e){for(var f=0;f<c[J];f++){var g=c[f],k=g.column,l=b(d,k),B=b(e,k),k=g.compare?null===l?null===B?0:-1:null===B?1:g.compare(l,B):hp(a.D(k),l,B);if(0!=k)return k*(g.desc?-1:1)}return 0}if(ri(c))d=c;else if(typeof c==T)gp(a,c),c=[{column:c}];else if(typeof c==jh)if(li(c)){if(1>c[J])throw m("sortColumns is an empty array. Must have at least one element.");for(var e={},f=[],g=0;g<c[J];g++){var k,l=c[g];if(typeof c[g]==T)k=c[g],gp(a,k),l={column:c[g]};else if(typeof c[g]==
jh)k=c[g].column,$fa(a,c[g],Nca+g+kg);else throw m("sortColumns is an array, but not composed of only objects or numbers.");if(k in e)throw m("Column index "+k+" is duplicated in sortColumns.");e[k]=!0;f[C](l)}c=f}else $fa(a,c,Mca),c=[c];return d}function ip(a,b){var c=a.M();if(0<c){if(h[t](b)!==b||0>b||b>=c)throw m("Invalid row index "+b+". Should be in the range [0-"+(c-1)+"].");}else throw m("Table has no rows.");}
function gp(a,b){var c=a.H();if(0<c){if(h[t](b)!==b||0>b||b>=c)throw m("Invalid column index "+b+". Should be an integer in the range [0-"+(c-1)+"].");}else throw m("Table has no columns.");}function jp(a,b,c){a=a.D(b);if(!bga(c,a))throw m(pba+c+baa+a+" in column index "+b);}
function bga(a,b){if(null==a)return!0;var c=typeof a;switch(b){case T:if(c==T)return!0;break;case Eh:if(c==Eh)return!0;break;case wg:if(c==wg)return!0;break;case Bg:case Cg:if(mi(a))return!0;break;case Jh:if(li(a)&&2<a[J]&&5>a[J]){for(var c=!0,d=0;d<a[J];d++){var e=a[d];if(typeof e!=T||e!=h[t](e)){c=!1;break}}if(0>a[0]||0>a[1]||59<a[1]||0>a[2]||59<a[2])c=!1;4==a[J]&&(0>a[3]||999<a[3])&&(c=!1);if(c)return!0}}return!1}
function hp(a,b,c){if(null==b)return null==c?0:-1;if(null==c)return 1;switch(a){case Jh:for(a=0;3>a;a++){if(b[a]<c[a])return-1;if(c[a]<b[a])return 1}b=4>b[J]?0:b[3];c=4>c[J]?0:c[3];return b<c?-1:c<b?1:0;default:return b<c?-1:c<b?1:0}}function cga(a,b){gp(a,b);var c=a.D(b),d=null,e=null,f,g,k=a.M();for(f=0;f<k;f++)if(g=a[I](f,b),null!=g){e=d=g;break}if(null==d)return{min:null,max:null};for(f++;f<k;f++)g=a[I](f,b),null!=g&&(0>hp(c,g,d)?d=g:0>hp(c,e,g)&&(e=g));return{min:d,max:e}}
function dga(a,b){for(var c=aga(a,function(b,c){return a[I](b,c)},b),d=[],e=a.M(),f=0;f<e;f++)d[C](f);nj(d,c);return d}function ega(a,b){gp(a,b);var c=a.M();if(0==c)return[];for(var d=[],e=0;e<c;++e)d[C](a[I](e,b));var f=a.D(b);nj(d,function(a,b){return hp(f,a,b)});var c=d[0],g=[];g[C](c);for(e=1;e<d[J];e++){var k=d[e];0!=hp(f,k,c)&&g[C](k);c=k}return g}
function fga(a,b,c){if(ri(b))return b(a,c);for(var d=0;d<b[J];d++){var e=b[d],f=e.column,g=a[I](c,f),k=a.D(f);if(Qh in e){if(0!==hp(k,g,e[od]))return!1}else if(null!=e.minValue||null!=e.maxValue)if(null==g||null!=e.minValue&&0>hp(k,g,e.minValue)||null!=e.maxValue&&0<hp(k,g,e.maxValue))return!1;if(ri(e[hd])&&!e[hd](g,c,f,a))return!1}return!0}
function gga(a,b){if(!ri(b)){if(!li(b)||0==b[J])throw m("columnFilters must be a non-empty array");for(var c={},d=0;d<b[J];d++){if(typeof b[d]!=jh||!(zg in b[d])){if(!(Qh in b[d]||gh in b[d]||eh in b[d]))throw m(Xba+d+'] must have properties "column" and "value", "minValue"or "maxValue"');if(Qh in b[d]&&(gh in b[d]||eh in b[d]))throw m(Xba+d+'] must specify either "value" or range properties ("minValue" and/or "maxValue"');}var e=b[d].column;if(e in c)throw m("Column index "+e+" is duplicate in columnFilters.");
gp(a,e);jp(a,e,b[d][od]);c[e]=!0}}c=[];d=a.M();for(e=0;e<d;e++)fga(a,b,e)&&c[C](e);return c}function kp(a,b){var c,d;switch(b){case Jh:c=new Date(1970,0,1,a[0],a[1],a[2],a[3]||0);d=Cf;if(a[2]||a[3])d+=ff;a[3]&&(d+=We);d=new bp({pattern:d});c=d.Oc(c);break;case Bg:d=new bp({formatType:fh,valueType:Bg});c=d.Oc(a);break;case Cg:d=new bp({formatType:fh,valueType:Cg});c=d.Oc(a);break;case T:d=new dp({fractionDigits:ia});c=d.Oc(a);break;default:c=null!=a?String(a):O}return c}
function hga(a,b){var c={};if(!ki(a))throw m("Not an array");if(0<a[J]){var d=!b,e,f;if(d)e=Ti(a[0],function(a){if(oi(a))return{label:a};if(ni(a))return gk(a);throw m("Unknown header type: "+a);});else{e=[];f=0;ki(a[0])?f=a[0][J]:ni(a[0])&&yg in a[0]&&ki(a[0].c)&&(f=a[0].c[J]);for(var g=0;g<f;g++)e[C]({type:void 0})}c.cols=e;Oa(c,[]);f=e[J];for(var k=ga(e[J]),d=d?jj(a,1):a,g=0;g<d[J];g++){var l=d[g];if(ki(l))l={c:l};else if(!(ni(l)&&yg in l))throw m("Invalid row type for row "+g);if(l.c[J]!==e[J])throw m("Row "+
g+" has "+l.c[J]+" columns, but must have "+e[J]);l.c=gj(l.c);c[Pc][C](l);for(var n=0;n<f;n++){var p=Eh,p=l.c[n];ni(p)&&(Ph in p||Fg in p)?p=p.v:l.c[n]={v:p};if(null==e[n][H]&&(null==k[n]||k[n]===Bg)&&null!=p){if(oi(p))p=Eh;else if(qi(p))p=T;else if(ki(p))p=Jh;else if(pi(p))p=wg;else if(mi(p))p=new Date(p),p=0!==p[bc]()+p[Vc]()+p[Md]()+p[Pd]()?Cg:Bg;else throw m("Unknown type of value in "+g+Re+n);k[n]=p}}}Z(c[Pb],function(a,b){null!=a[H]||cb(a,k[b]||Eh)})}return c}

    function Yfa(a, b) {
        return new fp(hga(a, b))
    }

    function iga(a, b, c, d) {
        for (var e = null, f = a.M(); (d ? 0 <= b : b < f) && null === e;)e = a[I](b, c), b += d ? -1 : 1;
        return e
    }

    var jga = {Aza: Ye, Bza: Ze};

    function fp(a, b) {
        this.Oy = b === Ye ? Ye : Ze;
        if (!ri(this.Fy))throw m('You called google.visualization.DataTable() without the "new" keyword');
        a ? (oi(a) ? a = Fo(a) : kga(a), this.Pf = [], this.Nf = [], this.mt = a.p || null, null != a[Pb] && Z(a[Pb], X(function (a) {
            this.Gg(a)
        }, this)), null != a[Pc] && (this.Nf = a[Pc])) : (this.Pf = [], this.Nf = [], this.mt = null);
        this.Gc = []
    }

    Y(fp, $o);
    function kga(a) {
        var b = a[Pb] || [];
        a = a[Pc] || [];
        for (var c = b[J], d = 0; d < c; d++) {
            var e = b[d][H];
            if (e == Bg || e == Cg)for (var e = a[J], f = 0; f < e; f++) {
                var g = a[f].c[d];
                if (g) {
                    var k = g.v;
                    if (mi(k))return;
                    oi(k) && (g = Co(g), g = Fo(g), a[f].c[d] = g)
                }
            }
        }
    }

    W = fp[K];
    W.Pf = null;
    W.Oy = null;
    W.Nf = null;
    W.mt = null;
    W.Gc = null;
    W.M = function () {
        return this.Nf[J]
    };
    W.H = function () {
        return this.Pf[J]
    };
    W.Xe = function (a) {
        gp(this, a);
        return this.Pf[a].id || O
    };
    wa(W, function (a) {
        for (var b = this.Pf, c = 0; c < b[J]; c++)if (b[c].id == a)return c;
        return -1
    });
W.Ra=function(a){gp(this,a);return String(this.Pf[a][Wc]||O)};W.$u=function(a){gp(this,a);return this.Pf[a][vb]};W.mr=function(a){a=this.gj(a,vh);return a=oi(a)?a:O};W.D=function(a){gp(this,a);return this.Pf[a][H]};gb(W,function(a,b){ip(this,a);gp(this,b);var c=this.Hs(a,b),d=null;c&&(d=c.v,d=ci(d)?d:null);return d});W.Hs=function(a,b){return this.Nf[a].c[b]};
W.Ea=function(a,b){ip(this,a);gp(this,b);var c=this.Hs(a,b),d=O;if(c)if("undefined"!=typeof c.f&&null!=c.f)d=c.f;else{this.Gc[a]=this.Gc[a]||[];var e=this.Gc[a],c=e[b]||{};e[b]=c;ci(c.df)?d=c.df:(e=this[I](a,b),null===e||(d=kp(e,this.D(b))),c.df=d)}return d};W.hp=function(a,b,c){ip(this,a);gp(this,b);return(a=(a=this.Hs(a,b))&&a.p)&&c in a?a[c]:null};W.jj=function(a,b){ip(this,a);gp(this,b);var c=this.Hs(a,b);c||(c={v:null,f:null},this.Nf[a].c[b]=c);c.p||(c.p={});return c.p};W.Fy=function(){return this.mt};
W.xT=function(a){var b=this.mt;return b&&a in b?b[a]:null};W.Xva=function(a){this.mt=a};W.Yva=function(a,b){this.mt||(this.mt={});this.mt[a]=b};W.Fa=function(a,b,c){this.cc(a,b,c,void 0,void 0)};W.Tx=function(a,b,c){this.cc(a,b,void 0,c,void 0)};W.jw=function(a,b,c){this.cc(a,b,void 0,void 0,c)};W.setProperty=function(a,b,c,d){this.jj(a,b)[c]=d};
W.cc=function(a,b,c,d,e){ip(this,a);gp(this,b);var f=this.Gc[a];f&&f[b]&&(f[b]={});f=this.Hs(a,b);f||(f={},this.Nf[a].c[b]=f);"undefined"!=typeof c&&(this.D(b)==T&&oi(c)&&!fa(c)?f.v=ha(c):(jp(this,b,c),f.v=c));"undefined"!=typeof d&&(f.f=d);ci(e)&&(f.p=ni(e)?e:{})};W.Wva=function(a,b){ip(this,a);this.Nf[a].p=b};W.i6=function(a,b,c){this.IK(a)[b]=c};W.Mr=function(a,b){ip(this,a);var c=this.Nf[a];return(c=c&&c.p)&&b in c?c[b]:null};W.IK=function(a){ip(this,a);a=this.Nf[a];a.p||(a.p={});return a.p};
W.Jva=function(a,b){gp(this,a);Qa(this.Pf[a],b)};W.lca=function(a,b){gp(this,a);this.Pf[a].p=b};W.Kw=function(a,b,c){this.Er(a)[b]=c};W.gj=function(a,b){gp(this,a);var c=this.Pf[a];return(c=c&&c.p)&&b in c?c[b]:null};W.Er=function(a){gp(this,a);a=this.Pf[a];a.p||(a.p={});return a.p};
W.pfa=function(a,b,c,d){a!==this.Pf[J]&&(this.Gc=[],gp(this,a));ni(b)||(b={id:d||O,label:c||O,pattern:O,type:b});c=b[H];if(!bk(Cfa,c))throw m("Invalid type, "+c+', for column "'+(b[Wc]||b.id||a)+'".');if(c=b.role)d=b.p||{},null==d.role&&(d.role=c,b.p=d);this.Pf[le](a,0,b);for(b=0;b<this.Nf[J];b++)this.Nf[b].c[le](a,0,{v:null,f:null})};W.Gg=function(a,b,c){this.pfa(this.Pf[J],a,b,c);return this.Pf[J]-1};function lga(a,b,c){c=Zfa(c);jp(a,b,c.v);return c}
W.z0=function(a,b){a!==this.Nf[J]&&(this.Gc=[],ip(this,a));var c;if(ki(b))c=b;else if(typeof b==T){if(b!=h[t](b)||0>b)throw m("Invalid value for numOrArray: "+b+". If numOrArray is a number it should be a nonnegative integer.");c=qj(null,b)}else throw m("Invalid value for numOrArray. Should be a number or an array of arrays of cells.");for(var d=[],e=0;e<c[J];e++){var f=c[e],g=[];if(null===f)for(f=0;f<this.Pf[J];f++)g[C]({v:null,f:null});else if(ki(f)){if(f[J]!=this.Pf[J])throw m("Row given with size different than "+
this.Pf[J]+" (the number of columns in the table).");for(var k=0;k<f[J];k++)g[C](lga(this,k,f[k]))}else throw m("Every row given must be either null or an array.");f={};f.c=g;d[C](f);1E4==d[J]&&(g=d,ui(dj,this.Nf,a,0)[Sc](null,g),a+=d[J],d=[])}c=d;ui(dj,this.Nf,a,0)[Sc](null,c);return a+d[J]-1};W.cB=function(a){if(typeof a==T||ki(a))return this.z0(this.Nf[J],a);throw m("Argument given to addRows must be either a number or an array");};
W.Sq=function(a){if(ki(a))return this.cB([a]);if(null!=a)throw m("If argument is given to addRow, it must be an array, or null");return this.cB(1)};W.Sp=function(a){return cga(this,a)};W.dp=function(a){return dga(this,a)};ob(W,function(a){this.Gc=[];a=aga(this,function(a,c){var d=a.c[c];return d?d.v:null},a);nj(this.Nf,a)});W.uT=function(a){gp(this,a);return a};W.sT=function(a){ip(this,a);return a};Ia(W,function(){return new fp(this.ys())});
W.ys=function(){return Do({cols:this.Pf,rows:this.Nf,p:this.mt},Eo)};Ca(W,function(){return dn(this.ys())});W.QT=function(a){return ega(this,a)};W.tL=function(a){return gga(this,a)};W.qga=function(a,b){0>=b||(this.Gc=[],ip(this,a),a+b>this.Nf[J]&&(b=this.Nf[J]-a),this.Nf[le](a,b))};W.sC=function(a){this.qga(a,1)};W.pga=function(a,b){if(!(0>=b)){this.Gc=[];gp(this,a);a+b>this.Pf[J]&&(b=this.Pf[J]-a);this.Pf[le](a,b);for(var c=0;c<this.Nf[J];c++)this.Nf[c].c[le](a,b)}};W.e4=function(a){this.pga(a,1)};function lp(a){this.b=a||{};mp||(mp=mo()+raa)}var mp=null,mga={red:sh,blue:tg,green:Ng};function np(a,b,c){0<b&&c[C](Aaa,mp,a,oaa,b,ve)}
ta(lp[K],function(a,b){if(a.D(b)==T){var c=this.b,d=c.min,e=c.max,f=null;if(null==d||null==e)f=a.Sp(b),null==e&&(e=f.max),null==d&&(d=h.min(0,f.min));d>=e&&(f=f||a.Sp(b),e=f.max,d=f.min);d==e&&(0==d?e=1:0<d?d=0:e=0);var f=e-d,g=c.base||0,g=h.max(d,h.min(e,g)),k=c[r]||100,l=c.showValue;null==l&&(l=!0);for(var n=h[E]((g-d)/f*k),p=k-n,s=0;s<a.M();s++){var u=a[I](s,b),v=[],u=h.max(d,h.min(e,u)),z=h[yb]((u-d)/f*k);v[C](Baa);np(xh,1,v);var B=nga(c.colorPositive,tg),D=nga(c.colorNegative,sh),N=c.drawZeroLine?
    1 : 0;
    0 < n ? u < g ? (np(Th, z, v), np(D, n - z, v), 0 < N && np(Xh, N, v), np(Th, p, v)) : (np(Th, n, v), 0 < N && np(Xh, N, v), np(B, z - n, v), np(Th, k - z, v)) : (np(B, z, v), np(Th, k - z, v));
    np(xh, 1, v);
    u = a.hp(s, b, Fba);
    null == u && (u = a.Ea(s, b), a[Ic](s, b, Fba, u));
    l && (v[C]($h), v[C](u));
    v[C](xaa);
    a.Tx(s, b, v[me](O))
}
}
});
    function nga(a, b) {
        a = (a || O)[pe]();
        return mga[a] || b
    }

    function op(a, b, c, d) {
        mi(a) && (a = a[ec]());
        mi(b) && (b = b[ec]());
        ki(a) && (a = pp(a));
        ki(b) && (b = pp(b));
        this.iN = a;
        this.jN = b;
        this.Uk = c;
        this.Ay = d
    }

    Pa(op[K], function (a) {
        var b = this.iN, c = this.jN;
        if (null == a)return null == b && null == c;
        mi(a) ? a = a[ec]() : ki(a) && (a = pp(a));
        return (null == b || a >= b) && (null == c || a < c)
    });
    op[K].Vd = function () {
        return this.Uk
    };
    op[K].hs = function () {
        return this.Ay
    };
    function qp(a, b, c, d, e) {
        op[L](this, a, b, c, O);
        this.I3 = b - a;
        0 >= this.I3 && (this.I3 = 1);
        this.Isa = Hm(Cm(d).od);
        this.Jsa = Hm(Cm(e).od)
    }

    Y(qp, op);
    qp[K].hs = function (a) {
        if (!qi(a))return O;
        a = Lm(this.Isa, this.Jsa, 1 - (a - this.iN) / this.I3);
        return Im(a[0], a[1], a[2])
    };
    function rp() {
        this.uS = []
    }

    rp[K].addRange = function (a, b, c, d) {
        this.uS[C](new op(a, b, c, d))
    };
    rp[K].eva = function (a, b, c, d, e) {
        this.uS[C](new qp(a, b, c, d, e))
    };
    ta(rp[K], function (a, b) {
        var c = a.D(b);
        if (c == T || c == Eh || c == Bg || c == Cg || c == Jh)for (c = 0; c < a.M(); c++) {
            for (var d = a[I](c, b), e = O, f = 0; f < this.uS[J]; f++) {
                var g = this.uS[f];
                if (g[Rc](d)) {
                    f = g.Vd();
                    d = g.hs(d);
                    f && (e += Wba + f + gf);
                    d && (e += ug + d + gf);
                    break
                }
            }
            a[Ic](c, b, Fh, e)
        }
    });
    function pp(a) {
        return 36E5 * a[0] + 6E4 * a[1] + 1E3 * a[2] + (4 == a[J] ? a[3] : 0)
    }

    function sp(a) {
        this.vd = a || O
    }

    function oga(a, b, c, d, e, f, g) {
        return 0 < f && g[f - 1] == Aba ? d : b.Ea(a, c[ka(e, 10)])
    }

    ta(sp[K], function (a, b, c, d) {
        var e = b[0];
        null != c && hi(c) == T && (e = c);
        c = d || null;
        for (d = 0; d < a.M(); d++) {
            var f = this.vd[wb](/{(\d+)}/g, ui(oga, d, a, b)), f = f[wb](/\\(.)/g, Ce);
            c ? a[Ic](d, e, c, f) : a.Tx(d, e, f)
        }
    });
    di(nca, dp, void 0);
    ta(dp[K], dp[K][Nb]);
    dp[K].formatValue = dp[K].Oc;
    di("google.visualization.NumberFormat.useNativeCharactersIfAvailable", function (a) {
        Wfa = a
    }, void 0);
    di("google.visualization.NumberFormat.DECIMAL_SEP", Tfa, void 0);
    di("google.visualization.NumberFormat.GROUP_SEP", Ufa, void 0);
    di("google.visualization.NumberFormat.DECIMAL_PATTERN", ep, void 0);
    di("google.visualization.ColorFormat", rp, void 0);
    ta(rp[K], rp[K][Nb]);
    rp[K].addRange = rp[K].addRange;
    rp[K].addGradientRange = rp[K].eva;
    di("google.visualization.BarFormat", lp, void 0);
    ta(lp[K], lp[K][Nb]);
    di("google.visualization.ArrowFormat", uo, void 0);
    ta(uo[K], uo[K][Nb]);
    di("google.visualization.PatternFormat", sp, void 0);
    ta(sp[K], sp[K][Nb]);
    di("google.visualization.DateFormat", bp, void 0);
    ta(bp[K], bp[K][Nb]);
    bp[K].formatValue = bp[K].Oc;
    di(nca, dp, void 0);
    ta(dp[K], dp[K][Nb]);
    di("google.visualization.TableColorFormat", rp, void 0);
    di("google.visualization.TableBarFormat", lp, void 0);
    ta(lp[K], lp[K][Nb]);
    di("google.visualization.TableArrowFormat", uo, void 0);
    ta(uo[K], uo[K][Nb]);
    di("google.visualization.TablePatternFormat", sp, void 0);
    ta(sp[K], sp[K][Nb]);
    di("google.visualization.TableDateFormat", bp, void 0);
    window.google && window.google.loader && window.google.loader.eval && window.google.loader.eval.visualization && (window.google.loader.eval.visualization = function () {
        eval(arguments[0])
    });
    function tp(a, b) {
        return a.onload = b
    }

    function up(a, b) {
        return a.dispatchEvent = b
    }

    function vp(a, b) {
        return a.setPath = b
    }

    function wp(a, b) {
        return a.screenX = b
    }

    function xp(a, b) {
        return a.screenY = b
    }

    function yp(a, b) {
        return a.send = b
    }

    function Ap(a, b) {
        return a.getName = b
    }

    function Gp(a, b) {
        return a.keyCode = b
    }

    function Hp(a, b) {
        return a.handleEvent = b
    }

    function Ip(a, b) {
        return a.bind = b
    }

    function Jp(a, b) {
        return a.altKey = b
    }

    function Kp(a, b) {
        return a.index = b
    }

    function Lp(a, b) {
        return a.setOptions = b
    }
function Mp(a,b){return a.getOption=b}function Np(a,b){return a.state=b}function Op(a,b){return a.options=b}function Pp(a,b){return a.getState=b}function Qp(a,b){return a.onreadystatechange=b}function Rp(a,b){return a.cancel=b}function Sp(a,b){return a.metaKey=b}function Tp(a,b){return a.currentTarget=b}function Up(a,b){return a.clientX=b}function Vp(a,b){return a.clientY=b}function Wp(a,b){return a.stop=b}function Xp(a,b){return a.title=b}function Yp(a,b){return a.abort=b}
function Zp(a,b){return a.visualization=b}function $p(a,b){return a.target=b}function aq(a,b){return a.draw=b}
var bq="relatedTarget",cq="clearTimeout",dq="reverse",$="data",eq="preventDefault",fq="dispatchEvent",gq="setPath",hq="MAX_VALUE",iq="send",jq="getName",kq="charCode",lq="keyCode",mq="LatLng",nq="handleEvent",oq="getColumnIndex",pq="source",qq="bounds",rq="altKey",sq="create",tq="table",uq="toJSON",vq="LatLngBounds",wq="getStringValue",xq="setTimeout",yq="stopPropagation",zq="setOptions",Aq="message",Bq="maps",Cq="getOption",Dq="state",Eq="options",Fq="protocol",Gq="enabled",Hq="getState",Iq="removeNode",
Jq="offsetX",Kq="offsetY",Lq="gadgets",Mq="open",Nq="cancel",Oq="RequestParameters",Qq="button",Rq="metaKey",Sq="currentTarget",Tq="readyState",Uq="addEventListener",Vq="parse",Wq="stop",Xq="abort",Yq="ctrlKey",Zq="getPath",$q="view",ar="target",br="draw",cr="shiftKey",pga="\n\x3c/script>",qga="\r",rga=" [",sga=" at line ",tga=" does not fit either the Control or Visualization specification.",uga=" does not fit the Control specification while handling 'ready' event.",vga=" does not fit the Control specification.",
dr=" must be of type '",wga='""',xga='">\n',yga="%22",zga="%27",Aga="&requireauth=1&",er="'.",fr="..",Bga="./",ir=".format",jr="/",Cga="/.",Dga="//",Ega="/chart.html",Fga="/chart.js",Gga="/gviz/tq",kr="/tq",vr="528",wr="8",Hga=":\n",Iga=";sig:",Jga=";type:",xr="<CRLF>",Kga="<EMPTY>",yr="<EOF>",zr="<EOR>",Lga='<script type="text/javascript" src="',Ar="AnnotatedTimeLine",Br="AreaChart",Cr="AreaChart-stacked",Dr="BarChart",Er="BubbleChart",Fr="CandlestickChart",Mga="Cannot bind a control to itself.",
Gr="ColumnChart",Hr="ComboChart",Nga="Content-Type",Oga="Custom response handler must be a function.",Pga="Dashboard",Qga="GET",Ir="Gauge",Jr="GeoChart",Kr="Histogram",Lr="ImageRadarChart",Mr="ImageSparkLine",Rga="Incompatible data table: ",Sga="Invalid DataView column type.",Nr="Invalid data table format: column #",Tga="Invalid data table format: must have 3 columns.",Uga="Invalid data table format: must have at least 2 columns.",Or="LineChart",Vga="MSXML2.XMLHTTP",Wga="MSXML2.XMLHTTP.3.0",Xga="MSXML2.XMLHTTP.6.0",
Pr="Map",Yga="Microsoft.XMLHTTP",Qr="MotionChart",Zga="Name",$ga="One or more participants failed to draw()",Rr="OrgChart",Sr="POST",Tr="PieChart",aha="Request timed out",Ur="ScatterChart",Vr="SteppedAreaChart",Wr="Table",bha="The requested control and participant cannot be bound together, as this would introduce a dependency cycle",cha="Timed out after ",Xr="Timeline",Yr="TreeMap",dha="Type",Zr="WordTree",eha="\\c",$r="^",fha="_table_query_refresh_interval",gha="_table_query_url",hha="a String",
iha="abort",as="addTrendLine",bs="address",jha="an Array",cs="annotatedtimeline",kha="application/x-www-form-urlencoded;charset=utf-8",ds="bar",es="block",fs="chart",gs="click",hs="complete",lha="content-type",mha="control",is="controls",js="corechart",nha="dashboard",ks="data",ls="datatable",oha="date|datetime",pha="detailed_message",qha="display: none; padding-top: 2px",ms="domain",ns="domainAxis",rha="draw",os="drawing",sha="emptyString",ps="error",qs="focusin",rs="focusout",tha="gadgets.io.makeRequest",
uha="gadgets.io.makeRequest failed",ss="gauge",ts="geochart",vha="google.maps.Geocoder",wha="google.visualization.LoadArgs",xha="google.visualization.Query",yha="google.visualization.events.addListener",zha="google.visualization.events.addOneTimeListener",Aha="google.visualization.events.removeAllListeners",Bha="google.visualization.events.removeListener",Cha="google.visualization.events.trigger",us="hasLabelsColumn",Dha="hl",vs="http",Eha="http%",Fha="http://dummy.com",Gha="https%",Hha="identity",
ws="imagesparkline",xs="img",Iha="invalid_query",ys="json",zs="keypress",As="latlng",Bs="linktable",Cs="makeRequest",Jha="make_request_failed",Ds="map",Es="markers",Kha="message",Lha="modifier",Fs="motionchart",Gs="mousedown",Hs="mouseout",Is="mouseover",Mha="ms, aborting",Nha="nodetable",Oha="not_modified",Pha="options",Js="orgchart",Qha="padding: 2px",Ks="pending",Rha="percent",Sha="position: absolute; top: 0; left: 0; z-index: 1;",Tha="pub",Ls="ready",Uha="readystatechange",Vha="reason",Wha="refresh",
Ms="regioncode",Ns="regions",Xha="reqId:",Os="right",Ps="select",Yha="series.1.lineWidth",Zha="series.1.pointSize",$ha="series.1.visibleInLegend",aia="sig:",Qs="span",Rs="statechange",bia="stringify",cia="success",Ss="table",dia="targetAxes.0",eia="targetAxes.1",Ts="targetAxis",Us="text",fia="the wrong type of data",Vs="tick",Ws="timeline",gia="timeline.taskMajor",hia="timeout",Xs="tooltip",iia="tqrt",Ys="treemap",Zs="ui",jia="ui.type",$s="uichange",kia="user_not_authenticated",at="vAxis",bt="warning",
lia="window.event",mia="withCredentials",ct="xhr",dt="xhrpost",nia="zx",et="|",oia="\u00d7";function qt(a){this.Spa=pia(a);this.m2=a.status;this.Dv=[];this.Ev=[];this.Ev=a.warnings||[];this.Dv=a.errors||[];qia(this.Ev);qia(this.Dv);this.m2!=ps&&(this.V1=a.sig,this.t=new fp(a[tq],this.Spa))}function qia(a){for(var b=0;b<a[J];b++){var c=a[b].detailed_message;if(c){var d=a[b],c=c?c[Lb](ria)&&!c[Lb](sia)?c:c[wb](/&/g,Ie)[wb](/</g,Ke)[wb](/>/g,Je)[wb](/\"/g,Le):O;d.detailed_message=c}}}
var ria=/^[^<]*(<a(( )+target=('_blank')?("_blank")?)?( )+(href=('[^']*')?("[^"]*")?)>[^<]*<\/a>[^<]*)*$/,sia=/javascript((s)?( )?)*:/;function pia(a){a=a.version||Ze;return bk(jga,a)?a:Ze}W=qt[K];W.V1=null;W.t=null;W.lj=function(){return this.m2==ps};W.l3=function(){return this.m2==bt};function tia(a){for(var b=0;b<a.Dv[J];b++)if(a.Dv[b].reason==Oha)return!0;for(b=0;b<a.Ev[J];b++)if(a.Ev[b].reason==Oha)return!0;return!1}W.Va=function(){return this.t};
function rt(a,b){return a.lj()&&a.Dv&&a.Dv[0]&&a.Dv[0][b]?a.Dv[0][b]:a.l3()&&a.Ev&&a.Ev[0]&&a.Ev[0][b]?a.Ev[0][b]:null}W.pea=function(){var a=rt(this,Vha);return null!=a&&a!=O?[a]:[]};W.zJ=function(){return rt(this,Kha)||O};W.J2=function(){return rt(this,pha)||O};var st={H4:"google-visualization-errors"};st.ica=st.H4+Te;st.nea=st.H4+ef;st.v4=st.H4+"-all-";st.r1=st.nea+" container is null";st.hpa="background-color: #c00000; color: white; padding: 2px;";st.jpa="background-color: #fff4c2; color: black; white-space: nowrap; padding: 2px; border: 1px solid black;";st.kpa="font: normal 0.8em arial,sans-serif; margin-bottom: 5px;";st.ipa="font-size: 1.1em; color: #0000cc; font-weight: bold; cursor: pointer; padding-left: 10px; color: black;text-align: right; vertical-align: top;";
st.gca=0;
st.Md=function(a,b,c,d){if(!st.eG(a))throw m(st.r1+". message: "+b);c=st.qpa(b,c,d);var e=c.errorMessage;b=c.detailedMessage;c=c[Eq];var f=null!=c.showInTooltip?!!c.showInTooltip:!0,g=(c[H]==bt?bt:ps)==ps?st.hpa:st.jpa,g=g+(c[x]?c[x]:O),k=!!c.removable;d=Sk();var e=d.j(Qs,{style:g},d[Db](e)),g=st.ica+st.gca++,l=d.j(P,{id:g,style:st.kpa},e);b&&(f?Xp(e,b):(f=ea[Sb](Qs),Xa(f,b),d[q](l,d.j(P,{style:Qha},f))));k&&(b=d.j(Qs,{style:st.ipa},d[Db](oia)),b.onclick=ui(st.J1,l),d[q](e,b));st.lpa(a,l);c.removeDuplicates&&
st.rpa(a,l);return g};st.mc=function(a){if(!st.eG(a))throw m(st.r1);if(a=st.l4(a,!1))Ra(a[x],Q),hl(a)};st.gD=function(a,b){if(!st.eG(a))throw m(st.r1);if(!b)throw m(st.nea+" response is null");if(!b.lj()&&!b.l3())return null;var c=b.pea(),d=!0;b.lj()&&(d=!($i(c,kia)||$i(c,Iha)));var c=b.zJ(),e=b.J2(),d={showInTooltip:d};cb(d,b.lj()?ps:bt);d.removeDuplicates=!0;return st.Md(a,c,e,d)};st.Gva=function(a){a=ea[md](a);return st.A4(a)?(st.J1(a),!0):!1};
st.pc=function(a){a=ea[md](a);return st.A4(a)?a[je][je]:null};st.LR=function(a,b){return function(){try{a[Sc](null,arguments)}catch(c){ri(b)?b(c):st.Md(b,c[Aq])}}};st.J1=function(a){var b=a[je];kl(a);0==b[Zb][J]&&Ra(b[x],Q)};st.A4=function(a){return dl(a)&&a.id&&yi(a.id,st.ica)&&(a=a[je])&&a.id&&yi(a.id,st.v4)&&a[je]?!0:!1};
st.qpa=function(a,b,c){var d=null!=a&&a?a:ps,e=O,f={},g=arguments[J];2==g?b&&hi(b)==jh?f=b:e=null!=b?b:e:3==g&&(e=null!=b?b:e,f=c||{});d=Di(d);e=Di(e);return{errorMessage:d,detailedMessage:e,options:f}};st.eG=function(a){return null!=a&&dl(a)};st.l4=function(a,b){for(var c=a[Zb],d=null,e=Sk(),f=0;f<c[J];f++)if(c[f].id&&yi(c[f].id,st.v4)){d=c[f];e[Iq](d);break}!d&&b&&(d=st.v4+st.gca++,d=cl(P,{id:d,style:qha},null));d&&((c=a[Ub])?e.a_(d,c):e[q](a,d));return d};
    st.lpa = function (a, b) {
        var c = st.l4(a, !0);
        Ra(c[x], es);
        c[q](b)
    };
    st.gua = function (a, b) {
        var c = st.l4(a, !0);
        Z(c && c[Zb], function (a) {
            st.A4(a) && b(a)
        })
    };
    st.rpa = function (a, b) {
        var c = /id="?google-visualization-errors-[0-9]*"?/, d = uea(b), d = d[wb](c, O), e = [];
        st.gua(a, function (a) {
            if (a != b) {
                var g = uea(a), g = g[wb](c, O);
                g == d && e[C](a)
            }
        });
        Z(e, st.J1)
    };
    function tt(a) {
        var b;
        if (0 == ea[fc](Qg)[J]) {
            b = ea[fc](Vg)[0];
            var c = ea[fc](vg)[0], d = ea[Sb](Qg);
            b[Fb](d, c)
        }
        b = ea[fc](Qg)[0];
        c = ea[Sb](yh);
        cb(c, Hh);
        c.src = a;
        b[q](c)
    }

    function uia(a) {
        return function (b) {
            st.mc(a);
            var c = b.lj();
            c && st.gD(a, b);
            return !c
        }
    }

    function ut() {
    }

    ut[K].nk = !1;
    ut[K].Vg = function () {
        return this.nk
    };
    ut[K].Z = function () {
        this.nk || (this.nk = !0, this.B())
    };
    function vt(a, b) {
        var c = ui(wt, b);
        a.DL || (a.DL = []);
        a.DL[C](ci(void 0) ? X(c, void 0) : c)
    }

    ut[K].B = function () {
        if (this.DL)for (; this.DL[J];)this.DL[sb]()()
    };
    function wt(a) {
        a && typeof a.Z == Mg && a.Z()
    }

    function via(a) {
        for (var b = 0, c = arguments[J]; b < c; ++b) {
            var d = arguments[b];
            li(d) ? via[Sc](null, d) : wt(d)
        }
    }

    function xt(a, b) {
        cb(this, a);
        $p(this, b);
        Tp(this, this[ar]);
        this.defaultPrevented = this.zz = !1;
        this.yda = !0
    }

    xt[K].B = function () {
    };
    xt[K].Z = function () {
    };
    xt[K].stopPropagation = function () {
        this.zz = !0
    };
    xt[K].preventDefault = function () {
        this.defaultPrevented = !0;
        this.yda = !1
    };
    function yt(a) {
        a[eq]()
    }

    function zt(a) {
        zt[se](a);
        return a
    }

    zt[se] = fi;
    var wia = !Ak || Jk(9), xia = !Ak || Jk(9), yia = Ak && !Ik(df);
    !Ek || Ik(vr);
    Bk && Ik("1.9b") || Ak && Ik(wr) || zk && Ik("9.5") || Ek && Ik(vr);
    Bk && !Ik(wr) || Ak && Ik(df);
    var zia = Ak ? qs : "DOMFocusIn", Aia = Ak ? rs : "DOMFocusOut";

    function At(a, b) {
        xt[L](this, a ? a[H] : O);
        $p(this, null);
        Tp(this, null);
        this.relatedTarget = null;
        this.offsetY = this.offsetX = 0;
        Up(this, 0);
        Vp(this, 0);
        wp(this, 0);
        xp(this, 0);
        this.button = 0;
        Gp(this, 0);
        this.charCode = 0;
        this.ctrlKey = !1;
        Jp(this, !1);
        this.shiftKey = !1;
        Sp(this, !1);
        Np(this, null);
        this.S2 = !1;
        this.Qa = null;
        a && this[Kc](a, b)
    }

    Y(At, xt);
    var Bia = [1, 4, 2];
    W = At[K];
    La(W, function (a, b) {
        var c = cb(this, a[H]);
        $p(this, a[ar] || a.srcElement);
        Tp(this, b);
        var d = a[bq];
        if (d) {
            if (Bk) {
                var e;
                t:{
                    try {
                        zt(d[sd]);
                        e = !0;
                        break t
                    } catch (f) {
                    }
                    e = !1
                }
                e || (d = null)
            }
        } else c == Is ? d = a.fromElement : c == Hs && (d = a.toElement);
        this.relatedTarget = d;
        this.offsetX = Ek || void 0 !== a[Jq] ? a[Jq] : a.layerX;
        this.offsetY = Ek || void 0 !== a[Kq] ? a[Kq] : a.layerY;
        Up(this, void 0 !== a[Dd] ? a[Dd] : a.pageX);
        Vp(this, void 0 !== a[Ed] ? a[Ed] : a.pageY);
        wp(this, a[Ib] || 0);
        xp(this, a[Kb] || 0);
        this.button = a[Qq];
        Gp(this, a[lq] || 0);
        this.charCode = a[kq] ||
(c==zs?a[lq]:0);this.ctrlKey=a[Yq];Jp(this,a[rq]);this.shiftKey=a[cr];Sp(this,a[Rq]);this.S2=vk?a[Rq]:a[Yq];Np(this,a[Dq]);this.Qa=a;a.defaultPrevented&&this[eq]()});function Bt(a,b){return wia?a.Qa[Qq]==b:a[H]==gs?0==b:!!(a.Qa[Qq]&Bia[b])}function Ct(a){return Bt(a,0)&&!(Ek&&vk&&a[Yq])}W.stopPropagation=function(){At.e[yq][L](this);this.Qa[yq]?this.Qa[yq]():this.Qa.cancelBubble=!0};
    W.preventDefault = function () {
        At.e[eq][L](this);
        var a = this.Qa;
        if (a[eq]) a[eq](); else if (a.returnValue = !1, yia)try {
            (a[Yq] || 112 <= a[lq] && 123 >= a[lq]) && Gp(a, -1)
        } catch (b) {
        }
    };
    W.vsa = function () {
        return this.Qa
    };
    W.B = function () {
    };
    var Dt = "closure_listenable_" + (1E6 * h[Hc]() | 0);

    function Et(a) {
        return !(!a || !a[Dt])
    }

    var Cia = 0;

    function Dia(a, b, c, d, e) {
        this.Vo = a;
        this.OT = null;
        this.src = b;
        cb(this, c);
        this.hE = !!d;
        this.Ta = e;
        this.key = ++Cia;
        this.eE = this.FT = !1
    }

    function Ft(a) {
        a.eE = !0;
        a.Vo = null;
        a.OT = null;
        a.src = null;
        a.Ta = null
    }

    function Gt(a) {
        this.src = a;
        this.Bh = {};
        this.mL = 0
    }

    W = Gt[K];
    W.add = function (a, b, c, d, e) {
        var f = a[kc]();
        a = this.Bh[f];
        a || (a = this.Bh[f] = [], this.mL++);
        var g = Ht(a, b, d, e);
        -1 < g ? (b = a[g], c || (b.FT = !1)) : (b = new Dia(b, this.src, f, !!d, e), b.FT = c, a[C](b));
        return b
    };
    ua(W, function (a, b, c, d) {
        a = a[kc]();
        if (!(a in this.Bh))return !1;
        var e = this.Bh[a];
        b = Ht(e, b, c, d);
        return -1 < b ? (Ft(e[b]), Pi[le][L](e, b, 1), 0 == e[J] && (delete this.Bh[a], this.mL--), !0) : !1
    });
    function It(a, b) {
        var c = b[H];
        if (!(c in a.Bh))return !1;
        var d = ej(a.Bh[c], b);
        d && (Ft(b), 0 == a.Bh[c][J] && (delete a.Bh[c], a.mL--));
        return d
    }

    W.mc = function (a) {
        a = a && a[kc]();
        var b = 0, c;
        for (c in this.Bh)if (!a || c == a) {
            for (var d = this.Bh[c], e = 0; e < d[J]; e++)++b, Ft(d[e]);
            delete this.Bh[c];
            this.mL--
        }
        return b
    };
    W.eU = function (a, b) {
        var c = this.Bh[a[kc]()], d = [];
        if (c)for (var e = 0; e < c[J]; ++e) {
            var f = c[e];
            f.hE == b && d[C](f)
        }
        return d
    };
    W.VK = function (a, b, c, d) {
        a = this.Bh[a[kc]()];
        var e = -1;
        a && (e = Ht(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    W.EU = function (a, b) {
        var c = ci(a), d = c ? a[kc]() : O, e = ci(b);
        return Wj(this.Bh, function (a) {
            for (var g = 0; g < a[J]; ++g)if (!(c && a[g][H] != d || e && a[g].hE != b))return !0;
            return !1
        })
    };
    function Ht(a, b, c, d) {
        for (var e = 0; e < a[J]; ++e) {
            var f = a[e];
            if (!f.eE && f.Vo == b && f.hE == !!c && f.Ta == d)return e
        }
        return -1
    }

    var Jt = "closure_lm_" + (1E6 * h[Hc]() | 0), Kt = {}, Eia = 0;

    function Lt(a, b, c, d, e) {
        if (ki(b)) {
            for (var f = 0; f < b[J]; f++)Lt(a, b[f], c, d, e);
            return null
        }
        c = Mt(c);
        return Et(a) ? a.m(b, c, d, e) : Fia(a, b, c, !1, d, e)
    }

    function Fia(a, b, c, d, e, f) {
        if (!b)throw m("Invalid event type");
        var g = !!e, k = Nt(a);
        k || (a[Jt] = k = new Gt(a));
        c = k.add(b, c, d, e, f);
        if (c.OT)return c;
        d = Gia();
        c.OT = d;
        d.src = a;
        d.Vo = c;
        a[Uq] ? a[Uq](b[kc](), d, g) : a.attachEvent(Hia(b[kc]()), d);
        Eia++;
        return c
    }

    function Gia() {
        var a = Iia, b = xia ? function (c) {
            return a[L](b.src, b.Vo, c)
        } : function (c) {
            c = a[L](b.src, b.Vo, c);
            if (!c)return c
        };
        return b
    }

    function Ot(a, b, c, d, e) {
        if (ki(b)) {
            for (var f = 0; f < b[J]; f++)Ot(a, b[f], c, d, e);
            return null
        }
        c = Mt(c);
        return Et(a) ? a.AC(b, c, d, e) : Fia(a, b, c, !0, d, e)
    }

    function Pt(a, b, c, d, e) {
        if (ki(b))for (var f = 0; f < b[J]; f++)Pt(a, b[f], c, d, e); else c = Mt(c), Et(a) ? a.vb(b, c, d, e) : a && (a = Nt(a)) && (b = a.VK(b, c, !!d, e)) && Qt(b)
    }
function Qt(a){if(qi(a)||!a||a.eE)return!1;var b=a.src;if(Et(b))return It(b.Yl,a);var c=a[H],d=a.OT;b.removeEventListener?b.removeEventListener(c,d,a.hE):b.detachEvent&&b.detachEvent(Hia(c),d);Eia--;(c=Nt(b))?(It(c,a),0==c.mL&&(c.src=null,b[Jt]=null)):Ft(a);return!0}function Rt(a){if(!a)return 0;if(Et(a))return a.Yl?a.Yl.mc(void 0):0;a=Nt(a);if(!a)return 0;var b=0,c;for(c in a.Bh)for(var d=a.Bh[c][Bb](),e=0;e<d[J];++e)Qt(d[e])&&++b;return b}
function Jia(a){if(Et(a))return a.EU(Gs,!1);a=Nt(a);return!!a&&a.EU(Gs,!1)}function Hia(a){return a in Kt?Kt[a]:Kt[a]=kh+a}function Kia(a,b,c,d){var e=1;if(a=Nt(a))if(b=a.Bh[b[kc]()])for(b=b[Bb](),a=0;a<b[J];a++){var f=b[a];f&&f.hE==c&&!f.eE&&(e&=!1!==Lia(f,d))}return ja(e)}function Lia(a,b){var c=a.Vo,d=a.Ta||a.src;a.FT&&Qt(a);return c[L](d,b)}
function Iia(a,b){if(a.eE)return!0;if(!xia){var c=b||ei(lia),d=new At(c,this),e=!0;if(!(0>c[lq]||void 0!=c.returnValue)){t:{var f=!1;if(0==c[lq])try{Gp(c,-1);break t}catch(g){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d[Sq];f;f=f[je])c[C](f);for(var f=a[H],k=c[J]-1;!d.zz&&0<=k;k--)Tp(d,c[k]),e&=Kia(c[k],f,!0,d);for(k=0;!d.zz&&k<c[J];k++)Tp(d,c[k]),e&=Kia(c[k],f,!1,d)}return e}return Lia(a,new At(b,this))}function Nt(a){a=a[Jt];return a instanceof Gt?a:null}

    var St = "__closure_events_fn_" + (1E9 * h[Hc]() >>> 0);

    function Mt(a) {
        if (ri(a))return a;
        a[St] || (a[St] = function (b) {
            return a[nq](b)
        });
        return a[St]
    }

    function Tt() {
        this.Yl = new Gt(this);
        this.Xsa = this;
        this.$C = null
    }

    Y(Tt, ut);
    Tt[K][Dt] = !0;
    W = Tt[K];
    W.IA = function (a) {
        this.$C = a
    };
    W.addEventListener = function (a, b, c, d) {
        Lt(this, a, b, c, d)
    };
    W.removeEventListener = function (a, b, c, d) {
        Pt(this, a, b, c, d)
    };
    up(W, function (a) {
        var b, c = this.$C;
        if (c)for (b = []; c; c = c.$C)b[C](c);
        var c = this.Xsa, d = a[H] || a;
        if (oi(a)) a = new xt(a, c); else if (a instanceof xt) $p(a, a[ar] || c); else {
            var e = a;
            a = new xt(d, c);
            jk(a, e)
        }
        var e = !0, f;
        if (b)for (var g = b[J] - 1; !a.zz && 0 <= g; g--)f = Tp(a, b[g]), e = Ut(f, d, !0, a) && e;
        a.zz || (f = Tp(a, c), e = Ut(f, d, !0, a) && e, a.zz || (e = Ut(f, d, !1, a) && e));
        if (b)for (g = 0; !a.zz && g < b[J]; g++)f = Tp(a, b[g]), e = Ut(f, d, !1, a) && e;
        return e
    });
    W.B = function () {
        Tt.e.B[L](this);
        this.Yl && this.Yl.mc(void 0);
        this.$C = null
    };
W.m=function(a,b,c,d){return this.Yl.add(String(a),b,!1,c,d)};W.AC=function(a,b,c,d){return this.Yl.add(String(a),b,!0,c,d)};W.vb=function(a,b,c,d){return this.Yl[Qb](String(a),b,c,d)};function Ut(a,b,c,d){b=a.Yl.Bh[String(b)];if(!b)return!0;b=b[Bb]();for(var e=!0,f=0;f<b[J];++f){var g=b[f];if(g&&!g.eE&&g.hE==c){var k=g.Vo,l=g.Ta||g.src;g.FT&&It(a.Yl,g);e=!1!==k[L](l,d)&&e}}return e&&!1!=d.yda}W.eU=function(a,b){return this.Yl.eU(String(a),b)};
W.VK=function(a,b,c,d){return this.Yl.VK(String(a),b,c,d)};W.EU=function(a,b){return this.Yl.EU(ci(a)?String(a):void 0,b)};function Vt(a,b){Tt[L](this);this.Iv=a||1;this.hD=b||bi;this.x3=X(this.q3,this);this.rE=vi()}Y(Vt,Tt);W=Vt[K];W.enabled=!1;W.fd=null;W.q3=function(){if(this[Gq]){var a=vi()-this.rE;0<a&&a<.8*this.Iv?this.fd=this.hD[xq](this.x3,this.Iv-a):(this.fd&&(this.hD[cq](this.fd),this.fd=null),this[fq](Vs),this[Gq]&&(this.fd=this.hD[xq](this.x3,this.Iv),this.rE=vi()))}};Ka(W,function(){this.enabled=!0;this.fd||(this.fd=this.hD[xq](this.x3,this.Iv),this.rE=vi())});
    Wp(W, function () {
        this.enabled = !1;
        this.fd && (this.hD[cq](this.fd), this.fd = null)
    });
    W.B = function () {
        Vt.e.B[L](this);
        this[Wq]();
        delete this.hD
    };
    function Wt(a, b, c) {
        if (ri(a)) c && (a = X(a, c)); else if (a && typeof a[nq] == Mg) a = X(a[nq], a); else throw m("Invalid listener argument");
        return 2147483647 < b ? -1 : bi[xq](a, b || 0)
    }

    function Xt(a) {
        bi[cq](a)
    }

    function Yt() {
    }

    Yt[K].cga = null;
    Yt[K].kd = function () {
        var a;
        (a = this.cga) || (a = {}, Mia(this) && (a[0] = !0, a[1] = !0), a = this.cga = a);
        return a
    };
    var Zt;

    function Nia() {
    }

    Y(Nia, Yt);
    function Oia(a) {
        return (a = Mia(a)) ? new ActiveXObject(a) : new XMLHttpRequest
    }

    function Mia(a) {
        if (!a.jga && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = [Xga, Wga, Vga, Yga], c = 0; c < b[J]; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d), a.jga = d
                } catch (e) {
                }
            }
            throw m("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a.jga
    }

    Zt = new Nia;
    function $t(a) {
        Tt[L](this);
        this.headers = new lk;
        this.fT = a || null;
        this.Zu = !1;
        this.cT = this.Hd = null;
        this.Vy = this.f2 = O;
        this.iy = this.Q1 = this.OS = this.e2 = !1;
        this.eT = 0;
        this.dT = null;
        this.yca = O;
        this.c2 = this.daa = !1
    }

    Y($t, Tt);
    var Pia = /^https?$/i, Qia = [Sr, "PUT"], Ria = [];
    W = $t[K];
    W.poa = function () {
        this.Z();
        ej(Ria, this)
    };
    yp(W, function (a, b, c, d) {
        if (this.Hd)throw m("[goog.net.XhrIo] Object is active with another request=" + this.f2 + "; newUri=" + a);
        b = b ? b[ke]() : Qga;
        this.f2 = a;
        this.Vy = O;
        this.e2 = !1;
        this.Zu = !0;
        this.Hd = this.fT ? Oia(this.fT) : Oia(Zt);
        this.cT = this.fT ? this.fT.kd() : Zt.kd();
        Qp(this.Hd, X(this.Hca, this));
        try {
            this.Q1 = !0, this.Hd[Mq](b, String(a), !0), this.Q1 = !1
        } catch (e) {
            this.Us(5, e);
            return
        }
        a = c || O;
        var f = this.headers[Bc]();
        d && qk(d, function (a, b) {
            f.set(b, a)
        });
        d = Xi(f.Mk(), Sia);
        c = bi.FormData && a instanceof bi.FormData;
        !$i(Qia, b) ||
d||c||f.set(Nga,kha);f[Vb](function(a,b){this.Hd.setRequestHeader(b,a)},this);this.yca&&(this.Hd.responseType=this.yca);mia in this.Hd&&(this.Hd.withCredentials=this.daa);try{Tia(this),0<this.eT&&((this.c2=Uia(this.Hd))?(this.Hd.timeout=this.eT,this.Hd.ontimeout=X(this.lf,this)):this.dT=Wt(this.lf,this.eT,this)),this.OS=!0,this.Hd[iq](a),this.OS=!1}catch(g){this.Us(5,g)}});function Uia(a){return Ak&&Ik(9)&&qi(a.timeout)&&ci(a.ontimeout)}function Sia(a){return lha==a[pe]()}
W.lf=function(){"undefined"!=typeof ai&&this.Hd&&(this.Vy=cha+this.eT+Mha,this[fq](hia),this[Xq](8))};W.Us=function(a,b){this.Zu=!1;this.Hd&&(this.iy=!0,this.Hd[Xq](),this.iy=!1);this.Vy=b;Via(this);au(this)};function Via(a){a.e2||(a.e2=!0,a[fq](hs),a[fq](ps))}Yp(W,function(){this.Hd&&this.Zu&&(this.Zu=!1,this.iy=!0,this.Hd[Xq](),this.iy=!1,this[fq](hs),this[fq](iha),au(this))});W.B=function(){this.Hd&&(this.Zu&&(this.Zu=!1,this.iy=!0,this.Hd[Xq](),this.iy=!1),au(this,!0));$t.e.B[L](this)};
W.Hca=function(){this.nk||(this.Q1||this.OS||this.iy?Wia(this):this.Wsa())};W.Wsa=function(){Wia(this)};function Wia(a){if(a.Zu&&"undefined"!=typeof ai&&(!a.cT[1]||4!=bu(a)||2!=cu(a)))if(a.OS&&4==bu(a))Wt(a.Hca,0,a);else if(a[fq](Uha),4==bu(a)){a.Zu=!1;try{if(Xia(a))a[fq](hs),a[fq](cia);else{var b;try{b=2<bu(a)?a.Hd.statusText:O}catch(c){b=O}a.Vy=b+rga+cu(a)+kg;Via(a)}}finally{au(a)}}}

    function au(a, b) {
        if (a.Hd) {
            Tia(a);
            var c = a.Hd, d = a.cT[0] ? fi : null;
            a.Hd = null;
            a.cT = null;
            b || a[fq](Ls);
            try {
                Qp(c, d)
            } catch (e) {
            }
        }
    }

    function Tia(a) {
        a.Hd && a.c2 && (a.Hd.ontimeout = null);
        qi(a.dT) && (Xt(a.dT), a.dT = null)
    }

    W.Rk = function () {
        return !!this.Hd
    };
    function Xia(a) {
        var b = cu(a), c;
        switch (b) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
                c = !0;
                break;
            default:
                c = !1
        }
        if (!c) {
            if (b = 0 === b) a = sm(String(a.f2))[1] || null, !a && self[xc] && (a = self[xc][Fq], a = a[hc](0, a[J] - 1)), b = !Pia[hd](a ? a[pe]() : O);
            c = b
        }
        return c
    }

    function bu(a) {
        return a.Hd ? a.Hd[Tq] : 0
    }

    function cu(a) {
        try {
            return 2 < bu(a) ? a.Hd.status : -1
        } catch (b) {
            return -1
        }
    }

    function Yia(a) {
        return oi(a.Vy) ? a.Vy : String(a.Vy)
    }

    function du(a, b) {
        var c;
        if (a instanceof du) this.Dn = ci(b) ? b : a.Dn, eu(this, a.Nl), c = a.iz, fu(this), this.iz = c, gu(this, a.Jv), hu(this, a.Lv), this[gq](a[Zq]()), iu(this, a.mj[Bc]()), c = a.hz, fu(this), this.hz = c; else if (a && (c = sm(String(a)))) {
            this.Dn = !!b;
            eu(this, c[1] || O, !0);
            var d = c[2] || O;
            fu(this);
            this.iz = ju(d);
            gu(this, c[3] || O, !0);
            hu(this, c[4]);
            this[gq](c[5] || O, !0);
            iu(this, c[6] || O, !0);
            c = c[7] || O;
            fu(this);
            this.hz = ju(c)
        } else this.Dn = !!b, this.mj = new ku(null, 0, this.Dn)
    }

    W = du[K];
    W.Nl = O;
    W.iz = O;
    W.Jv = O;
    W.Lv = null;
    W.$k = O;
    W.hz = O;
    W.Cva = !1;
    W.Dn = !1;
    Aa(W, function () {
        var a = [], b = this.Nl;
        b && a[C](lu(b, Zia), ef);
        if (b = this.Jv) {
            a[C](Dga);
            var c = this.iz;
            c && a[C](lu(c, Zia), Faa);
            a[C](aa(String(b)));
            b = this.Lv;
            null != b && a[C](ef, String(b))
        }
        if (b = this[Zq]()) this.Jv && b[Cb](0) != jr && a[C](jr), a[C](lu(b, b[Cb](0) == jr ? $ia : aja));
        (b = this.mj[kc]()) && a[C](nf, b);
        (b = this.hz) && a[C](we, lu(b, bja));
        return a[me](O)
    });
W.resolve=function(a){var b=this[Bc](),c=!!a.Nl;c?eu(b,a.Nl):c=!!a.iz;if(c){var d=a.iz;fu(b);b.iz=d}else c=!!a.Jv;c?gu(b,a.Jv):c=null!=a.Lv;d=a[Zq]();if(c)hu(b,a.Lv);else if(c=!!a.$k){if(d[Cb](0)!=jr)if(this.Jv&&!this.$k)d=jr+d;else{var e=b[Zq]()[Wd](jr);-1!=e&&(d=b[Zq]()[hc](0,e+1)+d)}e=d;if(e==fr||e==Ue)d=O;else if(Fi(e,Bga)||Fi(e,Cga)){for(var d=yi(e,jr),e=e[rc](jr),f=[],g=0;g<e[J];){var k=e[g++];k==Ue?d&&g==e[J]&&f[C](O):k==fr?((1<f[J]||1==f[J]&&f[0]!=O)&&f.pop(),d&&g==e[J]&&f[C](O)):(f[C](k),
d=!0)}d=f[me](jr)}else d=e}c?b[gq](d):c=a.mj[kc]()!==O;c?iu(b,ju(a.mj[kc]())):c=!!a.hz;c&&(a=a.hz,fu(b),b.hz=a);return b};Ia(W,function(){return new du(this)});function eu(a,b,c){fu(a);a.Nl=c?ju(b):b;a.Nl&&(a.Nl=a.Nl[wb](/:$/,O))}function gu(a,b,c){fu(a);a.Jv=c?ju(b):b}function hu(a,b){fu(a);if(b){b=ha(b);if(fa(b)||0>b)throw m("Bad port number "+b);a.Lv=b}else a.Lv=null}W.getPath=function(){return this.$k};vp(W,function(a,b){fu(this);this.$k=b?ju(a):a;return this});
function iu(a,b,c){fu(a);b instanceof ku?(a.mj=b,a.mj.T3(a.Dn)):(c||(b=lu(b,cja)),a.mj=new ku(b,0,a.Dn));return a}W.Ik=function(a,b){return iu(this,a,b)};W.ro=function(){return this.mj[kc]()};W.Yc=function(a,b){fu(this);this.mj.set(a,b);return this};function dja(a,b,c){fu(a);ki(c)||(c=[String(c)]);a.mj.setValues(b,c)}function mu(a,b){return a.mj.get(b)}W.u3=function(a){fu(this);this.mj[Qb](a);return this};function fu(a){if(a.Cva)throw m("Tried to modify a read-only Uri");}
W.T3=function(a){this.Dn=a;this.mj&&this.mj.T3(a);return this};function eja(a){return a instanceof du?a[Bc]():new du(a,void 0)}function ju(a){return a?oa(a):O}function lu(a,b){return oi(a)?encodeURI(a)[wb](b,fja):null}function fja(a){a=a[ae](0);return De+(a>>4&15)[kc](16)+(a&15)[kc](16)}var Zia=/[#\/\?@]/g,aja=/[\#\?:]/g,$ia=/[\#\?]/g,cja=/[\#\?@]/g,bja=/#/g;function ku(a,b,c){this.gm=a||null;this.Dn=!!c}
function nu(a){if(!a.ig&&(a.ig=new lk,a.Tb=0,a.gm))for(var b=a.gm[rc](Ee),c=0;c<b[J];c++){var d=b[c][qd](lf),e=null,f=null;0<=d?(e=b[c][ee](0,d),f=b[c][ee](d+1)):e=b[c];e=oa(e[wb](/\+/g,se));e=ou(a,e);a.add(e,f?oa(f[wb](/\+/g,se)):O)}}W=ku[K];W.ig=null;W.Tb=null;W.dc=function(){nu(this);return this.Tb};W.add=function(a,b){nu(this);this.gm=null;a=ou(this,a);var c=this.ig.get(a);c||this.ig.set(a,c=[]);c[C](b);this.Tb++;return this};
ua(W,function(a){nu(this);a=ou(this,a);return this.ig.bf(a)?(this.gm=null,this.Tb-=this.ig.get(a)[J],this.ig[Qb](a)):!1});va(W,function(){this.ig=this.gm=null;this.Tb=0});Ua(W,function(){nu(this);return 0==this.Tb});W.bf=function(a){nu(this);a=ou(this,a);return this.ig.bf(a)};W.$T=function(a){var b=this.Ua();return $i(b,a)};W.Mk=function(){nu(this);for(var a=this.ig.Ua(),b=this.ig.Mk(),c=[],d=0;d<b[J];d++)for(var e=a[d],f=0;f<e[J];f++)c[C](b[d]);return c};
W.Ua=function(a){nu(this);var b=[];if(oi(a))this.bf(a)&&(b=fj(b,this.ig.get(ou(this,a))));else{a=this.ig.Ua();for(var c=0;c<a[J];c++)b=fj(b,a[c])}return b};W.set=function(a,b){nu(this);this.gm=null;a=ou(this,a);this.bf(a)&&(this.Tb-=this.ig.get(a)[J]);this.ig.set(a,[b]);this.Tb++;return this};W.get=function(a,b){var c=a?this.Ua(a):[];return 0<c[J]?String(c[0]):b};W.setValues=function(a,b){this[Qb](a);0<b[J]&&(this.gm=null,this.ig.set(ou(this,a),gj(b)),this.Tb+=b[J])};
Aa(W,function(){if(this.gm)return this.gm;if(!this.ig)return O;for(var a=[],b=this.ig.Mk(),c=0;c<b[J];c++)for(var d=b[c],e=aa(String(d)),d=this.Ua(d),f=0;f<d[J];f++){var g=e;d[f]!==O&&(g+=lf+aa(String(d[f])));a[C](g)}return this.gm=a[me](Ee)});Ia(W,function(){var a=new ku;a.gm=this.gm;this.ig&&(a.ig=this.ig[Bc](),a.Tb=this.Tb);return a});function ou(a,b){var c=String(b);a.Dn&&(c=c[pe]());return c}
W.T3=function(a){a&&!this.Dn&&(nu(this),this.gm=null,this.ig[Vb](function(a,c){var d=c[pe]();c!=d&&(this[Qb](c),this.setValues(d,a))},this));this.Dn=a};W.extend=function(a){for(var b=0;b<arguments[J];b++)qk(arguments[b],function(a,b){this.add(b,a)},this)};var gja=/\/spreadsheet/,hja=/\/(ccc|tq|pub)$/,ija=/^spreadsheets?[0-9]?\.google\.com$/,jja=/^docs\.google\.com*$/,kja=/^(trix|spreadsheets|docs|webdrive)(-[a-z]+)?\.(corp|sandbox)\.google\.com/,lja=/^(\w*\.){1,2}corp\.google\.com$/,mja=/\/spreadsheets(\/d\/[^/]+)?/,nja=/\/(edit|gviz\/tq|)$/,oja=/^docs\.google\.com*$/,pja=/^docs\.sandbox\.google\.com*$/,qja=/^(\w*\.){1,2}corp\.google\.com$/,rja=/^\/a\/([\w-]+\.)+\w+/,pu=/^(\/a\/([\w-]+\.)+\w+)?/,sja=/^[a-z]+\d+\:[a-z]+\d+$/i,tja=/^[a-z]+\d+$/i;
function qu(a){var b=um(a),c=ija[hd](b),d=kja[hd](b),e=lja[hd](b),b=jja[hd](b),f=vm(a),g=new RegExp(pu[pq]+hja[pq]),f=(a=(new RegExp(pu[pq]+gja[pq]+hja[pq]))[hd](f))||g[hd](f);return b&&a||(d||e||c)&&f}function uja(a){var b=um(a),c=pja[hd](b),d=qja[hd](b),b=oja[hd](b);a=vm(a);a=(new RegExp(pu[pq]+mja[pq]+nja[pq]))[hd](a);return(b||c||d)&&a}

    function vja(a) {
        if (!tja[hd](a))return null;
        a = a[ke]();
        for (var b, c = O, d = 0; d < a[J]; d++) {
            var e = a[ae](d);
            if (65 > e || 90 < e) {
                c = a[ee](0, d);
                b = a[ee](d);
                break
            }
        }
        a = 0;
        d = 1;
        for (e = c[J] - 1; 0 <= e; e--)a += d * (c[ae](e) - 64), d *= 26;
        c = a;
        b = ka(b, 10);
        return fa(b) || 0 >= b || 0 > c ? null : new Kk(c, b)
    }

    var wja = {firstLineIsHeader: !1};

    function ru(a, b, c, d) {
        b = b[rc](/\r?\n/)[c];
        Ga(this, a + sga + (c + 1) + Hga + b);
        Ga(this, this[Aq] + (re + Hi(se, -1 == d ? b[J] : d) + $r))
    }

    Y(ru, m);
    di("vis.csv.ParseError", ru, void 0);
    fb(ru[K], "ParseError");
    function su(a) {
        this.b = a || {};
        Sj(wja, function (a, c) {
            fk(this.b, c, a)
        }, this)
    }

    di("vis.csv.Parser", su, void 0);
    hb(su[K], function (a) {
        function b(a) {
            a == xr && (l--, n = p);
            s = a
        }

        function c() {
            p = n;
            if (null != s) {
                var b = s;
                b == xr && (l++, n = 0);
                s = null;
                return b
            }
            if (k >= g)return yr;
            b = a[Cb](k++);
            n++;
            var c = !1;
            b == re ? c = !0 : b == qga && (k < g && a[Cb](k) == re && k++, c = !0);
            return c ? (l++, n = 0, xr) : b
        }

        function d() {
            var d = k, e = u;
            u = !1;
            var f = c();
            if (f == Kga)return zr;
            if (f == yr || f == xr)return e ? (b(Kga), O) : zr;
            if (f == ue) {
                d = k;
                e = null;
                for (f = c(); f != yr; f = c())if (f == ue)if (e = k - 1, f = c(), f == ue) e = null; else {
                    if (f == Re || f == yr || f == xr) {
                        f == xr && b(f);
                        break
                    }
                    throw new ru('Unexpected character "' +
f+'" after quote mark',a,l,n-1);}if(null==e)throw new ru("Unexpected end of text after open quote",a,l,n);return a[ee](d,e)[wb](/""/g,ue)}for(;f!=yr&&f!=Re&&f!=xr;f=c())if(f==ue)throw new ru("Unexpected quote mark",a,l,n-1);f==Re&&(u=!0);f!=yr&&f!=xr||b(f);return a[ee](d,f==yr?k:k-1)[wb](/[\r\n]+/g,O)}function e(){if(k>=g)return yr;for(var a=[],b=d();b!=zr;b=d())a[C](b);return a}var f=this.b.firstLineIsHeader,g=a[J],k=0,l=0,n=0,p=0,s=null,u=!1,v=[],z=[],B=null;f&&(v=e(),B=v[J]);for(var D=e();D!=yr;D=
e()){null==B&&(B=D[J]);if(D[J]!=B)throw new ru("Record has "+D[J]+" field"+(1==D[J]?O:xh)+", but expected "+B,a,l-1,-1);if(f){for(var N={},M=0;M<D[J];M++)N[v[M]]=D[M];z[C](N)}else z[C](D)}return z});hb(su[K],su[K][Vq]);function xja(a,b,c){this.cqa=new su;this.GS=null!=c?c:!1;this.bqa=a;for(a=0;a<b[J];a++)if(c=b[a],!yja[c])throw m("Unsupported type: "+c);this.dqa=b;this.Qb=[]}var yja={number:function(a){var b=la(a);if(fa(b))throw m("Not a number "+a);return b},string:function(a){return a},"boolean":function(a){return a[pe]()===Mh},date:function(a){return new Date(a)},datetime:function(a){return new Date(a)},timeofday:function(a){return a[rc](Re)}};function tu(a,b){var c=b||{};this.maa=ci(c.csvColumns);this.Dpa=c.csvColumns;this.GS=!!c.csvHasHeader;this.e1=c.sendMethod||sg;this.coa=!!c.xhrWithCredentials;if(!bk(zja,this.e1))throw m("Send method not supported: "+this.e1);this.cba=c.makeRequestParams_||{};if(uja(a)){var d=a,c=new du(d);433==c.Lv&&hu(c,null);var e=c[Zq](),e=e[wb](/\/edit$/,Gga);c[gq](e);e=um(d);d=!ii(ha(sm(d)[4]||null)||null);d=qja[hd](e)&&d;eu(c,d?vs:Wg);a=c[kc]()}else if(qu(a)){e=a;c=new du(e);433==c.Lv&&hu(c,null);d=c[Zq]();
d=d[wb](/\/ccc$/,kr);/\/pub$/[hd](d)&&(d=d[wb](/\/pub$/,kr),c.Yc(Tha,af));c[gq](d);var d=um(e),e=null!=(ha(sm(e)[4]||null)||null),f=kja[hd](d),d=lja[hd](d)&&!f&&e;eu(c,d?vs:Wg);a=c[kc]()}d=a;c=qu(d);d=vm(d);d=rja[hd](d);(c=c&&d)||(d=a,c=uja(d),d=vm(d),d=rja[hd](d),c=c&&d);this.boa=c;this.aoa=a;this.d1=Aja++;uu[C](this)}var zja={Eza:ct,Fza:dt,Vya:"scriptInjection",pya:Cs,Vfa:sg},Bja=new lk({"X-DataSource-Auth":mg}),Aja=0,vu={};tu[K].Ofa=30;var uu=[],wu=bi[Lq];
function Cja(){for(var a=0;a<uu[J];a++){var b=uu[a];b.J3&&b.fu()}}function Dja(a,b){var c=a[qd](we);-1!=c&&(a=a[ee](0,c));var d=a[qd](nf),e=c=O,f=[];-1==d?c=a:(c=a[ee](0,d),e=a[ee](d+1),f=e[rc](Ee));d=[];for(e=0;e<f[J];e++){var g=f[e][rc](lf),k={};fb(k,g[0]);k.S4=f[e];d[C](k)}for(var l in b){f=b[l];g=!1;for(e=0;e<d[J];e++)if(d[e][Cd]==l){d[e].S4=l+lf+aa(f);g=!0;break}g||(e={},fb(e,l),e.S4=l+lf+aa(f),d[C](e))}l=c;if(0<d[J]){l+=nf;c=[];for(e=0;e<d[J];e++)c[C](d[e].S4);l+=c[me](Ee)}return l}W=tu[K];
W.soa=function(a,b){if(Xia(b[ar])){var c;var d=b[ar];try{c=d.Hd?d.Hd.responseText:O}catch(e){c=O}c=Di(c);if(this.maa){var f=new xja(c,this.Dpa,this.GS),d=f.cqa[Vq](f.bqa);c=new fp;if(d&&0<d[J]){for(var g=[],k=f.dqa,l=0,n=k[J];l<n;l++)g[C]({type:k[l],label:[]});if(f.GS)for(k=0,n=g[J];k<n;k++)g[k][Wc][C](d[0][k]);k=0;for(n=g[J];k<n;k++)l=g[k],c.Gg(l[H],l[Wc][me](se));f.Qb=g;g=f.Qb;n=f=f.GS?1:0;for(k=d[J];n<k;n++){c.Sq();for(var l=0,p=g[J];l<p;l++)c.cc(n-f,l,yja[g[l][H]](d[n][l]))}}d={};d.table=c[uq]();
d.version=pia(d);d.reqId=a;xu(d)}else c[Lb](/^({.*})$/)?(c=Bfa(c),xu(c)):jda(Go(c))}else if(this.nv)yu(this,xha,Yia(b[ar]));else throw m("google.visualization.Query: "+Yia(b[ar]));};function xu(a){var b=a.reqId,c=vu[b];if(c)vu[b]=null,c.qE(a);else throw m("Missing query for request id: "+b);}W.nv=null;W.uU=null;W.KU=null;W.Lj=null;W.p1=null;W.vD=null;W.J3=!0;W.Il=0;W.LJ=null;W.Rk=!1;W.Bn=function(a){if(typeof a!=T||0>a)throw m("Refresh interval must be a non-negative number");this.Il=a;zu(this)};
function Au(a){a.KU&&(ba[cq](a.KU),a.KU=null)}function yu(a,b,c,d){a.qE({version:Ze,status:ps,errors:[{reason:b,message:c,detailed_message:d}]})}
W.fu=function(){var a;a=this.aoa;var b={};this.Lj&&(b.tq=String(this.Lj));var c=Xha+String(this.d1),d=this.LJ;d&&(c+=Iga+d);this.p1&&(c+=Jga+this.p1);b.tqx=c;if(this.vD){var c=[],e;for(e in this.vD)c[C](e+ef+this.vD[e]);b.tqh=c[me](gf)}a=Dja(a,b);this.Il&&(a=new du(a),Ek&&(fu(a),a.Yc(nia,h[t](2147483648*h[Hc]())[kc](36)+h.abs(h[t](2147483648*h[Hc]())^vi())[kc](36))),a=a[kc]());e={};vu[String(this.d1)]=this;c=this.e1;b=Qga;c==dt&&(c=ct,b=Sr);c==sg&&(c={},/[?&]alt=gviz(&[^&]*)*$/[hd](a)?e=Cs:(d=ym(a,
iia)||sg,d=d[rc](ef),e=d[0],e!==ct&&e!==dt||!$i(d,mia)||(c.xhrWithCredentials=!0),bk(zja,e)||(e=sg)),e={sendMethod:e,options:c},c=e.sendMethod,e=e[Eq]);if(c==Cs)if(ei(tha))b=this.cba,null==b[wu.io[Oq].CONTENT_TYPE]&&(b[wu.io[Oq].CONTENT_TYPE]=wu.io.ContentType.TEXT),null==b[wu.io[Oq].AUTHORIZATION]&&(b[wu.io[Oq].AUTHORIZATION]=wu.io.AuthorizationType.SIGNED),null==b.OAUTH_ENABLE_PRIVATE_NETWORK&&(b.OAUTH_ENABLE_PRIVATE_NETWORK=!0),null==b.OAUTH_ADD_EMAIL&&(b.OAUTH_ADD_EMAIL=!0),wu.io.makeRequest(a,
X(this.roa,this),b),Bu(this);else throw m("gadgets.io.makeRequest is not defined.");else{if(!(d=c==ct)){if(c=c==sg)d=bi[xc][Nc],c=(new du(d)).resolve(new du(a))[kc](),d=sm(d),c=sm(c),c=d[3]==c[3]&&d[1]==c[1]&&d[4]==c[4];d=c}if(d){c=void 0;d=a;b==Sr&&(a=a[rc](nf),1<=a[J]&&(d=a[0]),2<=a[J]&&(c=a[1]));a=d;d=X(ui(this.soa,this.d1),this);e=this.coa||!!e.xhrWithCredentials;var f=new $t;Ria[C](f);d&&f.m(hs,d);f.AC(Ls,f.poa);e&&(f.daa=e);f[iq](a,b,c,Bja)}else{if(this.maa)throw m("CSV files on other domains are not supported. Please use sendMethod: 'xhr' or 'auto' and serve your .csv file from the same domain as this page.");
b=ea[fc](vg)[0];e=null===this.LJ;this.boa&&e?(e=ea[Sb](xs),Eja(this,e,a),b[q](e)):(Bu(this),tt(a),zu(this))}}};function Eja(a,b,c){b.onerror=function(){Bu(a);tt(c);zu(a)};tp(b,function(){Bu(a);tt(c);zu(a)});Ra(b[x],Q);var d=c+Aga+(new Date)[ec]();b.src=d}W.roa=function(a){if(null!=a&&a[$])jda(Go(a[$]));else{var b=O;a&&a.errors&&(b=a.errors[me](se));yu(this,Jha,uha,b)}};function Bu(a){Au(a);a.KU=ba[xq](function(){yu(a,hia,aha)},1E3*a.Ofa)}function Fja(a){a.uU&&(ba[cq](a.uU),a.uU=null)}
function zu(a){Fja(a);0!=a.Il&&a.J3&&a.Rk&&(a.uU=ba[xq](function(){a.fu()},1E3*a.Il))}yp(W,function(a){this.Rk=!0;this.nv=a;this.fu()});W.makeRequest=function(a,b){this.Rk=!0;this.nv=a;this.Xwa=Cs;this.cba=b||{};this.fu()};Yp(W,function(){this.Rk=!1;Au(this);Fja(this)});W.qE=function(a){Au(this);a=new qt(a);if(!tia(a)){this.LJ=a.lj()?null:a.V1;var b=this.nv;b[L](b,a)}};W.setTimeout=function(a){if(typeof a!=T||fa(a)||0>=a)throw m("Timeout must be a positive number");this.Ofa=a};
W.Vva=function(a){if(typeof a!=wg)throw m("Refreshable must be a boolean");return this.J3=a};W.Ik=function(a){if(typeof a!=Eh)throw m("queryString must be a string");this.Lj=a};W.Rva=function(a){this.p1=a;null!=a&&this.Pfa(Nh,a)};W.Pfa=function(a,b){a=a[wb](/\\/g,ig);b=b[wb](/\\/g,ig);a=a[wb](/:/g,eha);b=b[wb](/:/g,eha);a=a[wb](/;/g,jg);b=b[wb](/;/g,jg);this.vD||(this.vD={});this.vD[a]=b};function Cu(){Gja||(Gja=!0,bi.Vta&&bi.Vta.$wa(Cja,{pollingInterval:100}),bi[Lq]&&(Hja(),this.Dfa()));var a=Wk(vg)[0];this.Yta=uia(a)}var Gja=!1;Cu[K].Sfa=200;function Du(){return!!bi[Lq]&&!!bi[Lq].rpc}Cu[K].Dfa=function(){if(Du()){var a=bi[Lq];ri(a.rpc.register)&&a.rpc.register(Wha,Cja)}else 0<this.Sfa&&(this.Sfa--,ba[xq](X(this.Dfa,this),100))};Cu[K].jva=function(a){var b=a.getString(gha),c=b[pe]();if(0==c[qd](Eha)||0==c[qd](Gha))b=oa(b);b=new tu(b);a=a.getInt(fha);b.Bn(a);return b};Cu[K].bwa=function(a){return this.Yta(a)};
function Hja(){if(Du()){var a=bi[Lq];try{a.rpc.getRelayUrl(fr)||a.rpc.setRelayUrl(fr,Fha)}catch(b){ri(a.rpc.setRelayUrl)&&a.rpc.setRelayUrl(fr,Fha)}}}bi[Lq]&&!Du()&&tt("//www-opensocial.googleusercontent.com/gadgets/rpc/rpc.v.js");Hja();var Gu=bi.__gvizguard__?ei(yha):function(a,b,c){a=Eu(a);b=Lt(a,b,Ija(c));return new Fu(b)},Hu=bi.__gvizguard__?ei(zha):function(a,b,c){a=Eu(a);b=Ot(a,b,Ija(c));return new Fu(b)},Ju=bi.__gvizguard__?ei(Cha):function(a,b,c){Eu(a)[fq](new Iu(b,c))},Ku=bi.__gvizguard__?ei(Bha):function(a){return(a=a&&ri(a.getKey)&&a.getKey())?Qt(a):!1},Lu=bi.__gvizguard__?ei(Aha):function(a){var b=Eu(a),b=Rt(b);wt(a.__eventTarget);a.__eventTarget=void 0;return b};
function Eu(a){var b=a.__eventTarget;null==b&&(b=new Tt,a.__eventTarget=b);return a=b}function Ija(a){return function(b){b&&b.Qta?a(b.Gs):a()}}function Fu(a){this.Dva=a}Fu[K].getKey=function(){return this.Dva};function Iu(a,b){xt[L](this,a);this.Gs=b}Y(Iu,xt);Iu[K].Qta=function(){return this.Gs};function Mu(a){this.t=a;var b=[];a=a.H();for(var c=0;c<a;c++)b[C](c);this.Qb=b;this.Js=!0;this.Is=null;this.S0=[];this.by=!0}Y(Mu,$o);W=Mu[K];W.Va=function(){return this.t};function Jja(a){for(var b=[],c=a.t.M(),d=0;d<c;d++)b[C](d);a.Is=b;a.by=!0}
W.gr=function(a){for(var b=this.t,c=ak(Kja),d=0;d<a[J];d++){var e=a[d];if(qi(e))gp(b,e);else if(ni(e)){var f=e.sourceColumn,e=e.calc;if(oi(e)){if(!c||c&&!$i(c,e))throw m('Unknown function "'+e+ue);null!=f&&gp(b,f)}}else throw m("Invalid column input, expected either a number or an object.");}this.Qb=hk(a);a=this.t;b=this.Qb;for(c=0;c<b[J];c++)if(d=b[c],ni(d)){if(f=d.role)e=d.properties||{},e.role=f,d.properties=e;f=d.sourceColumn;qi(f)&&(gp(a,f),d.calc=d.calc||Hha,cb(d,d[H]||a.D(f)))}this.by=!0};
function Lja(a,b,c){if(ki(b)){if(ci(c))throw m("If the first parameter is an array, no second parameter is expected");for(var d=0;d<b[J];d++)ip(a.t,b[d]);return gj(b)}if(hi(b)==T){if(!hi(c)==T)throw m("If first parameter is a number, second parameter must be specified and be a number.");if(b>c)throw m("The first parameter (min) must be smaller than or equal to the second parameter (max).");ip(a.t,b);ip(a.t,c);a=[];for(d=b;d<=c;d++)a[C](d);return a}throw m("First parameter must be a number or an array.");
}W.Wn=function(a,b){this.Is=Lja(this,a,b);this.Js=!1;this.by=!0};W.Kaa=function(){return hk(this.Qb)};W.sea=function(){if(this.Js){for(var a=[],b=this.t.M(),c=0;c<b;c++)a[C](c);return a}return gj(this.Is)};W.zva=function(a){this.gr(Si(this.Qb,function(b){return!$i(a,b)}));this.by=!0};W.Ava=function(a,b){var c=Lja(this,a,b);this.Js&&(Jja(this),this.Js=!1);this.Wn(Si(this.Is,function(a){return!$i(c,a)}));this.by=!0};
W.vR=function(a){for(var b=0;b<this.Qb[J];b++){var c=this.Qb[b];if(c==a||ni(c)&&c.sourceColumn==a)return b}return-1};W.OR=function(a){return this.Js?0>a||a>=this.t.M()?-1:a:Qi(this.Is,a)};W.wG=function(a){gp(this,a);a=this.Qb[a];return qi(a)?a:ni(a)&&qi(a.sourceColumn)?a.sourceColumn:-1};W.uT=function(a){a=this.wG(a);return-1==a?a:a=this.t.uT(a)};W.um=function(a){ip(this,a);return this.Js?a:this.Is[a]};W.sT=function(a){a=this.um(a);return a=this.t.sT(a)};W.M=function(){return this.Js?this.t.M():this.Is[J]};
W.H=function(){return this.Qb[J]};W.Xe=function(a){gp(this,a);a=this.Qb[a];return qi(a)?this.t.Xe(a):a.id||O};wa(W,function(a){for(var b=0;b<this.Qb[J];b++){var c=this.Qb[b];if(ni(c)&&c.id==a)return b}a=this.t[oq](a);return this.vR(a)});W.Ra=function(a){gp(this,a);a=this.Qb[a];return qi(a)?this.t.Ra(a):a[Wc]||O};W.$u=function(a){gp(this,a);a=this.Qb[a];return qi(a)?this.t.$u(a):null};W.mr=function(a){a=this.gj(a,vh);return a=oi(a)?a:O};
W.D=function(a){gp(this,a);a=this.Qb[a];return qi(a)?this.t.D(a):a[H]};
W.Hs=function(a,b){gp(this,b);var c=this.Qb[b],d=null,e=this.um(a);if(ni(c)){if(this.by){for(c=0;c<this.Qb[J];c++)ni(this.Qb[c])&&(this.S0[c]=[]);this.by=!1}c=this.S0[b][e];if(!ci(c)){var c=null,d=this.Qb[b],f=d.calc;oi(f)?(f=Kja[f],c=f(this.t,e,d)):ri(f)&&(c=f[L](null,this.t,e));c=Zfa(c);d=d[H];f=c.v;if(Ai(d))throw m('"type" must be specified');if(!bga(f,d))throw m(pba+f+baa+d);this.S0[b][e]=c}d=c;d.p=ni(d.p)?d.p:{}}else if(qi(c))d={v:this.t[I](e,c),f:null,p:null};else throw m("Invalid column definition: "+
d);return d};gb(W,function(a,b){return this.Hs(a,b).v});W.Ea=function(a,b){var c=this.Hs(a,b);if(null==c.f){var d=this.Qb[b];if(ni(d))d=this.D(b),c.f=null!=c.v?kp(c.v,d):O;else if(qi(d)){var e=this.um(a);c.f=this.t.Ea(e,d)}}return c.f};W.hp=function(a,b,c){a=this.jj(a,b)[c];return ci(a)?a:null};W.jj=function(a,b){var c=this.Hs(a,b);if(!c.p){var c=this.um(a),d=this.wG(b);return this.t.jj(c,d)}return c.p};W.gj=function(a,b){gp(this,a);var c=this.Qb[a];return qi(c)?this.t.gj(c,b):this.Er(a)[b]||null};
W.Er=function(a){gp(this,a);a=this.Qb[a];return qi(a)?this.t.Er(a):a.properties||{}};W.xT=function(a){return this.t.xT(a)};W.Fy=function(){return this.t.Fy()};W.Mr=function(a,b){var c=this.um(a);return this.t.Mr(c,b)};W.IK=function(a){ip(this,a);a=this.um(a);return this.t.IK(a)};W.Sp=function(a){return cga(this,a)};W.QT=function(a){return ega(this,a)};W.dp=function(a){return dga(this,a)};W.tL=function(a){return gga(this,a)};
W.Ex=function(){var a=this.t;ri(a.Ex)&&(a=a.Ex());var a=a.ys(),b=this.H(),c=this.M(),d,e,f,g=[],k=[];for(d=0;d<b;d++){f=this.Qb[d];if(ni(f))e=gk(f),delete e.calc,delete e.sourceColumn;else if(qi(f))e=a[Pb][f];else throw m(Sga);g[C](e)}for(e=0;e<c;e++){var l=a[Pc][this.Js?e:this.Is[e]],n=[];for(d=0;d<b;d++){f=this.Qb[d];if(ni(f))f={v:this[I](e,d)};else if(qi(f))f=l.c[this.Qb[d]];else throw m(Sga);n[C](f)}l.c=n;k[C](l)}a.cols=g;Oa(a,k);return a=new fp(a)};
W.ys=function(){for(var a={},b=[],c=0;c<this.Qb[J];c++){var d=this.Qb[c];ni(d)&&!oi(d.calc)||b[C](d)}aj(b)||(a.columns=b);this.Js||Oa(a,gj(this.Is));return a};Ca(W,function(){return Co(this.ys())});function Nu(a,b){oi(b)&&(b=Fo(b));var c=new Mu(a),d=b.columns,e=b[Pc];null!=d&&c.gr(d);null!=e&&c.Wn(e);return c}

    var Kja = {
        emptyString: function () {
            return O
        }, error: function (a, b, c) {
            var d = c.sourceColumn, e = c.magnitude;
            if (!qi(d) || !qi(e))return null;
            a = a[I](b, d);
            return qi(a) ? c.errorType == Rha ? a + e / 100 * a : a + e : null
        }, stringify: function (a, b, c) {
            c = c.sourceColumn;
            return qi(c) ? a.Ea(b, c) : O
        }, fillFromTop: function (a, b, c) {
            c = c.sourceColumn;
            return qi(c) ? iga(a, b, c, !0) : null
        }, fillFromBottom: function (a, b, c) {
            c = c.sourceColumn;
            return qi(c) ? iga(a, b, c, !1) : null
        }, identity: function (a, b, c) {
            c = c.sourceColumn;
            return qi(c) ? a[I](b, c) : null
        }
    };

    function Ou(a, b, c) {
        this.IP = a;
        this.n = b;
        a = Pl(b);
        a != O && a != Dh || Ml(b, qh, th);
        this.zK = null;
        c && (this.zK = cl(P, {style: Sha}))
    }

    function Mja(a) {
        return a.zK ? (a.zK[je] != a.n && a.n[q](a.zK), a.zK) : a.n
    }

    Ou[K].Md = function (a) {
        Nja(this, a, ps)
    };
    function Pu(a, b) {
        Nja(a, b, bt)
    }

    function Nja(a, b, c) {
        var d = Mja(a);
        c = {removable: !0, type: c};
        b = {id: st.Md(d, b, null, c), message: b, detailedMessage: O, options: c};
        Ju(a.IP, ps, b)
    }

    Ou[K].mc = function () {
        var a = Mja(this);
        st.mc(a)
    };
    function Qu(a, b, c) {
        try {
            b[L](c)
        } catch (d) {
            a.Md(d[Aq])
        }
    }

    function Oja(a) {
        this.Ec = a;
        this.JT = !1
    }

    Oja[K].Ksa = function (a, b) {
        return X(function () {
            if (!this.JT) {
                var c = arguments;
                Qu(this.Ec, function () {
                    a[Sc](b, c)
                })
            }
        }, this)
    };
    function Ru(a) {
        this.ra = ro(a);
        this.kv = new Ou(this, this.ra);
        this.Mv = null
    }

    Y(Ru, ut);
    Ru[K].pc = function () {
        return this.ra
    };
    aq(Ru[K], function (a, b, c) {
        Qu(this.kv, X(function () {
            this.mf(a, b, c)
        }, this))
    });
    Ru[K].mf = function (a, b, c) {
        if (!a)throw m("Data table is not defined.");
        if (!ri(a.Fy))throw b = fia, ki(a) ? b = jha : oi(a) && (b = hha), m("You called the draw() method with " + b + " rather than a DataTable or DataView");
        this.Mv && (this.Mv.JT = !0);
        this.Mv = new Oja(this.kv);
        var d = X(this.Mv.Ksa, this.Mv);
        this.mm(d, a, b, c)
    };
    Ru[K].Zf = function () {
        this.Mv && (this.Mv.JT = !0, this.Mv = null);
        this.sh()
    };
    function Su(a, b, c, d) {
        this.Lj = a;
        this.IP = b;
        this.b = c || {};
        this.n = d;
        this.Ec = null;
        d && (this.Ec = this.L_ = uia(d));
        if (!(b && rha in b) || typeof b[br] != Mg)throw m("Visualization must have a draw method.");
    }

    W = Su[K];
    W.L_ = null;
    W.fE = null;
    W.xK = null;
    W.t = null;
    Lp(W, function (a) {
        this.b = a || {}
    });
    aq(W, function () {
        this.t && this.IP[br](this.t, this.b)
    });
    W.Mva = function (a) {
        var b = this.n;
        this.Ec = a ? a : b ? this.Ec = this.L_ : null
    };
W.UD=function(){if(!this.Ec)throw m("If no container was supplied, a custom error handler must be supplied instead.");var a=this;this.Lj[iq](function(b){var c=a.fE;c&&c(b);a.qE(b);(c=a.xK)&&c(b)})};W.qE=function(a){var b=this.Ec;b(a)&&(this.t=a.Va(),this.IP[br](this.t,this.b))};W.DT=function(a){if(null!=a){if(typeof a!=Mg)throw m(Oga);this.fE=a}};W.CT=function(a){if(null!=a){if(typeof a!=Mg)throw m("Custom post response handler must be a function.");this.xK=a}};Yp(W,function(){this.Lj[Xq]()});function Tu(a,b){this.ff=b;this.Rsa=a}yp(Tu[K],function(a){this.nv=a;this.fu()});Tu[K].fu=function(){var a;a=this.ff;var b={},c,d=this.LJ;d&&(c=aia+d);c&&(b.tqx=c,a=Dja(a,b));this.Rsa[L](this,X(this.qE,this),a)};Tu[K].qE=function(a){a=new qt(a);if(!tia(a)){this.LJ=a.lj()?null:a.V1;var b=this.nv;b[L](b,a)}};function Uu(){this.nm=[];this.Cn=[]}function Pja(a){aj(a.nm)&&(a.nm=a.Cn,a.nm[dq](),a.Cn=[])}function Vu(a){Pja(a);return a.nm.pop()}W=Uu[K];W.Ao=function(){Pja(this);return Oi(this.nm)};W.dc=function(){return this.nm[J]+this.Cn[J]};Ua(W,function(){return aj(this.nm)&&aj(this.Cn)});va(W,function(){this.nm=[];this.Cn=[]});Pa(W,function(a){return $i(this.nm,a)||$i(this.Cn,a)});ua(W,function(a){var b=Bda(this.nm,a);if(0>b)return ej(this.Cn,a);Pi[le][L](this.nm,b,1);return!0});
W.Ua=function(){for(var a=[],b=this.nm[J]-1;0<=b;--b)a[C](this.nm[b]);for(var c=this.Cn[J],b=0;b<c;++b)a[C](this.Cn[b]);return a};function Wu(){if(!ei(vha))throw m("your page is missing the google maps API");this.lE=new google[Bq].Geocoder;this.Gc={};this.Gc[dn({address:O})]={response:[],status:google[Bq].GeocoderStatus.ZERO_RESULTS};this.yn=new sk;this.yv=new lk;this.KD=new Uu}gi(Wu);function Xu(a,b,c){this.kt=a||[];this.lL=0;this.Qs=b;this.CS=!1;this.mU=new lk;this.msa=c||this.kt[J]}Rp(Xu[K],function(){this.CS=!0});
Xu[K].finish=function(a,b){var c=dn(a);this.mU.bf(c)||this.mU.set(c,b);c=[];if(!this.CS){for(var d=this.kt[J],e=this.lL;e<d;e++){var f=dn(this.kt[e]);if(!this.mU.bf(f))break;f=this.mU.get(f);null!=f&&(f=f.response);c[C](f)}c[J]<this.msa&&this.lL+c[J]<d||(this.lL+=c[J],this.Qs(c),this.lL>=this.kt[J]&&this[Nq]())}};function Yu(){this.kt=[];this.lE=null}Yu[K].add=function(a){this.kt[C](a)};
Yu[K].create=function(a,b,c){if(null!=this.lE){var d=new Xu(a,b,c);this.add(d);this.lE.geocode(d)}else vfa(X(function(){null==this.lE&&(this.lE=Wu.Vb());this[sq](a,b,c)},this))};Rp(Yu[K],function(){Z(this.kt,function(a){a[Nq]()});this.kt=[]});Wu[K].geocode=function(a){Z(a.kt,X(function(b){var c=dn(b);c in this.Gc?a.finish(b,this.Gc[c]):(this.yv.bf(c)||(this.KD.Cn[C](b),this.yv.set(c,[])),this.yv.get(c)[C](a))},this));this.Rda()};
Wu[K].Rda=function(){if(0!==this.KD.dc()||0!==this.yn.dc()){var a=0<this.yn.dc()?vo(this.yn.Ua()[0]):this.KD.Ao(),b=dn(a);if(b in this.Gc){var c=this.yv.get(b),c=this.Gc[b];Vu(this.KD);this.lT(a,c.response,c.status);this.yv[Qb](b)}else 0===this.yn.dc()&&0<this.KD.dc()?(Vu(this.KD),c=this.yv.get(b),Wi(c,function(a){return a.CS})?this.lT(a,null,null):(this.yn.add(b),Qja(this,a,X(this.lT,this,a)))):0<this.yn.dc()&&Qja(this,a,X(this.lT,this,a))}};
function Qja(a,b,c){if(ni(b)&&(b=hk(b),b[qq])){var d=b[qq];b.bounds=new google[Bq][vq](new google[Bq][mq](d.lo.lat,d.lo.lng),new google[Bq][mq](d.hi.lat,d.hi.lng))}a.lE.geocode(b,c)}function Rja(a,b,c){var d=dn(b),e=a.yv.get(d);null!=e&&Z(e,function(a){a.CS||a.finish(b,c)});a.yn[Qb](d);a.yv[Qb](d)}
Wu[K].lT=function(a,b,c){var d=0;if(c==google[Bq].GeocoderStatus.OVER_QUERY_LIMIT)d=520;else if(c==google[Bq].GeocoderStatus.OK){var e=dn(a);b={response:b,status:c};this.Gc[e]=b;Rja(this,a,b)}else Rja(this,a,{response:null,status:c});this.JT=!1;Wt(X(this.Rda,this),d,this)};function Zu(){}function $u(a){if(!(ni(a)&&ri(a.H)&&ri(a.M)))throw m("Invalid data table.");}W=Zu[K];W.jk=function(a){return this.Pb(a)?2:0};W.$a=function(a,b,c){return a.H()>b&&c==a.D(b)};function Sja(a,b,c,d){for(var e=0;e<d[J];e++)if(a.$a(b,c,d[e]))return!0;return!1}W.indexOf=function(a,b){for(var c=0;c<a.H();c++)if(a.D(c)==b)return c;return-1};function av(a,b,c){for(var d=0;d<b[J];++d){var e=b[d];if(e>=a.H()||a.D(e)!=c[d])return!1}return!0}

    function bv(a, b, c) {
        return a.$a(b, c, T) ? cv(b, c, function (a) {
            return 0 <= a
        }) : !1
    }

    function cv(a, b, c) {
        for (var d = h.min(a.M(), 20), e = 0; e < d; e++) {
            var f = a[I](e, b);
            if (null != f && !c(f))return !1
        }
        return !0
    }

    W.Qpa = function (a) {
        return Sm(new Pm(-90, 90), a) && !Kj(a)
    };
    W.Rpa = function (a) {
        return Sm(new Pm(-180, 180), a) && !Kj(a)
    };
    function Tja(a) {
        for (var b = a.QT(0), c = h.min(a.M(), 20), d = 0, e = 0; e < c; e++) {
            var f = a[I](e, 1);
            f && !$i(b, f) || d++
        }
        return .6 < d / c
    }

    function dv() {
    }

    Y(dv, Zu);
    dv[K].Pb = function (a) {
        try {
            this.gd(a)
        } catch (b) {
            return !1
        }
        return !0
    };
    dv[K].gd = function (a) {
        $u(a);
        var b = a.H();
        if (2 > b)throw m(Uga);
        for (var c = !0, d = [], e = 0; e < b; e++) {
            var f = a.mr(e);
            zi(f) && (c ? (f = ms, c = !1) : f = ks);
            d[C](f)
        }
        if (d[0] !== ms)throw m("Invalid data format: first column must be domain.");
        a = Uja(d);
        return {
            qg: a.qg, vw: Ti(a.Ve, function (a) {
                return {
                    tl: a.zc, qg: a.qg, l: Ti(a.Ve, function (a) {
                        return {jM: a.zc, qg: a.qg}
                    })
                }
            })
        }
    };
    function Uja(a) {
        for (var b = [ms, ks], c = {Ve: [], qg: {}}, d = [c], e = -1, f = 0; f < a[J]; f++) {
            var g = a[f], k = Qi(b, g), l = null;
            0 <= k && (l = {zc: f, zw: g, Ve: [], qg: {}});
            if (0 <= k && k < e) {
                e -= k;
                for (g = 0; g <= e; g++)d.pop();
                e = k;
                k = d[d[J] - 1];
                d[C](l);
                k.Ve[C](l)
            } else 0 <= e && g === b[e] ? (d.pop(), k = d[d[J] - 1], d[C](l), k.Ve[C](l)) : e + 1 < b[J] && g === b[e + 1] ? (k = d[d[J] - 1], e++, d[C](l), k.Ve[C](l)) : (k = d[d[J] - 1], g in k.qg || (k.qg[g] = []), k.qg[g][C](f))
        }
        return c
    }

    function ev() {
    }

    Y(ev, Zu);
    ev[K].Pb = function (a) {
        $u(a);
        var b = a.H();
        if (2 > b)return !1;
        var c = a.D(0);
        if (c != Bg && c != Cg || a.D(1) != T)return !1;
        for (var c = 0, d = 1; d < b; d++) {
            var e = a.D(d);
            if (e == T) c = 0; else if (e == Eh) {
                if (c++, 2 < c)return !1
            } else return !1
        }
        return !0
    };
    ev[K].jk = function (a) {
        if (!this.Pb(a))return 0;
        var b = !1, c = 0 < this[qd](a, Eh), b = a.M(), d = a.dp(0);
        if (50 < b) b = !0; else {
            for (var e = ha[hq], f = ha.MIN_VALUE, g = 1; g < b; g++)var k = h.abs(a[I](d[g - 1], 0) - a[I](d[g], 0)), e = 0 < k && k < e ? k : e, f = k > f ? k : f;
            b = 0 != e && 50 < f / e ? !0 : !1
        }
        return c && b ? 3 : c || b ? 2 : 1
    };
    function fv(a) {
        this.Aba = !!(a || {}).Rfa
    }

    Y(fv, Zu);
    fv[K].Pb = function (a) {
        $u(a);
        var b = 0, c = a.H();
        if (1 > c)return !1;
        if (!this.$a(a, 0, T) && (b++, this.Aba))for (; b < c && this.$a(a, b, Eh);)b++;
        for (var d = null; b < c;) {
            var e = a.D(b);
            if (e == T) d = {}; else if (this.Aba && e == Eh) {
                if (!d)return !1
            } else if (e == wg) {
                if (!d || d.$w)return !1;
                d.$w = b
            } else return !1;
            b++
        }
        return null !== d
    };
    function gv(a) {
        this.uQ = a && a.Td || !1;
        fv[L](this, a)
    }

    Y(gv, fv);
    gv[K].Pb = function (a) {
        $u(a);
        if (!gv.e.Pb[L](this, a))return !1;
        var b = a.H();
        if (this.uQ)for (var c = 1; c < b; c++)if (this.$a(a, c, T) && !bv(this, a, c))return !1;
        return !0
    };
    gv[K].jk = function (a) {
        for (var b = a.H(), c = a.M(), d = 0, e = !1, f = 0; f < b; f++)this.$a(a, f, T) && (d++, bv(this, a, f) || (e = !0));
        return this.Pb(a) ? 1 == c || e || this.$a(a, 0, Eh) ? 1 : 2 < d && this.uQ ? 3 : 1 != d || this.uQ ? 1 : 2 : 0
    };
    function hv() {
    }

    Y(hv, Zu);
    hv[K].Pb = function (a) {
        $u(a);
        var b = a.H();
        return 3 > b || 5 < b || !this.$a(a, 0, Eh) || !this.$a(a, 1, T) || !this.$a(a, 2, T) || 3 < b && !this.$a(a, 3, Eh) || 4 < b && !this.$a(a, 4, T) ? !1 : !0
    };
    hv[K].jk = function (a) {
        if (this.Pb(a)) {
            var b;
            if (this.$a(a, 3, Eh)) {
                b = {};
                for (var c = 0, d = h.min(a.M(), 20), e = 0; e < d; e++) {
                    var f = a[I](e, 3);
                    b[f] || c++;
                    b[f] = !0
                }
                b = 10 > c
            } else b = !1;
            a = b ? 3 : this.$a(a, 3, Eh) ? 1 : 2
        } else a = 0;
        return a
    };
    function iv() {
    }

    Y(iv, Zu);
    iv[K].Pb = function (a) {
        try {
            this.gd(a)
        } catch (b) {
            return !1
        }
        return !0
    };
    iv[K].gd = function (a) {
        $u(a);
        var b = a.H();
        if (2 !== b && 3 !== b)throw m("Invalid data table format: must have 2 or 3 columns.");
        var c = 1, d = 2;
        2 === b && (c--, d--);
        this.Kb(a, 0, Eh);
        this.Kb(a, c, Eh);
        this.Kb(a, d, T);
        return {ou: c, dma: 0, yC: d}
    };
    iv[K].Kb = function (a, b, c) {
        if (!this.$a(a, b, c))throw m(Nr + b + dr + c + er);
    };
    function jv(a) {
        this.rn = a;
        this.n$ = new lk
    }

    Kp(jv[K], function () {
        return this.rn
    });
    function kv() {
    }

    Y(kv, Zu);
    kv[K].Pb = function (a) {
        try {
            this.gd(a)
        } catch (b) {
            return !1
        }
        return !0
    };
    kv[K].gd = function (a) {
        $u(a);
        for (var b = [], c = a.H(), d = 0; d < c; ++d) {
            var e = a.mr(d);
            if (e === O) b[C](new jv(d)); else {
                if (1 > b[J])throw m("At least 1 data column must come before any role column.");
                Oi(b).n$.set(e, d)
            }
        }
        if (2 != b[J])throw m("Invalid data table format: must have 2 data columns.");
        c = b[0];
        b = b[1];
        this.Kb(a, c[pc](), oha);
        this.Kb(a, b[pc](), T);
        return {OZ: c, yC: b}
    };
    kv[K].Kb = function (a, b, c) {
        if (!Vi(c[rc](et), function (c) {
                return this.$a(a, b, c)
            }, this))throw m(Nr + b + dr + c + er);
    };
    function lv() {
    }

    Y(lv, Zu);
    lv[K].Pb = function (a) {
        $u(a);
        var b = a.H();
        if (5 > b || 6 < b || !(this.$a(a, 0, Eh) && this.$a(a, 1, T) && this.$a(a, 2, T) && this.$a(a, 3, T) && this.$a(a, 4, T)) || 6 == b && !this.$a(a, 5, Eh))return !1;
        for (var b = h.min(a.M(), 20), c = 0; c < b; c++) {
            var d = a[I](c, 1), e = a[I](c, 2), f = a[I](c, 3), g = a[I](c, 4);
            if (d != h.min(d, e, f, g) || g != h.max(d, e, f, g))return !1
        }
        return !0
    };
    lv[K].jk = function (a) {
        return this.Pb(a) ? 3 : 0
    };
    function mv() {
        fv[L](this)
    }

    Y(mv, fv);
    mv[K].jk = function (a) {
        var b = this.$a(a, 0, T), c = a.H();
        b || c--;
        return this.Pb(a) ? 2 > c ? 1 : 2 : 0
    };
    function nv() {
        this.Us = null
    }

    Y(nv, Zu);
    nv[K].Pb = function (a) {
        return !!Vja(this, a)
    };
    nv[K].gd = function (a) {
        a = Vja(this, a);
        if (null != a)return a;
        throw m(this.Us);
    };
    function Vja(a, b) {
        var c = new jv(0), d = new jv(1), e = new jv(2), f = new jv(3), g = new jv(4), k = new jv(5), l = new jv(6);
        return a.Kb(b, c[pc](), Eh) && a.Kb(b, d[pc](), Eh) && a.Kb(b, e[pc](), Bg) && a.Kb(b, f[pc](), Bg) && a.Kb(b, g[pc](), T) && a.Kb(b, k[pc](), T) && a.Kb(b, l[pc](), Eh) ? {
            Xra: c,
            ou: d,
            $G: e,
            ZG: f,
            Wra: g,
            Yra: k,
            Ura: l
        } : null
    }
nv[K].Kb=function(a,b,c){return this.$a(a,b,c)?!0:(this.Us=Nr+b+dr+c+er,!1)};function ov(){}Y(ov,Zu);ov[K].Pb=function(a){$u(a);var b;b=a.H();if(1>b||2<b)b=!1;else{var c=!0;2==b&&(c=c&&this.$a(a,0,Eh));b=c=c&&bv(this,a,b-1)}if(!b)if(b=a.H(),c=a.M(),0==b||1!=c)b=!1;else{for(var c=!0,d=0;d<b;d++)if(!this.$a(a,d,T)){c=!1;break}b=c}return b};ov[K].jk=function(a){return this.Pb(a)?1<a.M()?2:3:0};function pv(){}Y(pv,Zu);var Wja={Uya:Ns,rya:Es,TEXT:Us,Vfa:sg};pv[K].Pb=function(a){var b=a.H();if(1>b||2<b)return!1;var c=this.$a(a,0,Eh);2==b&&(c=c&&this.$a(a,1,T));return c};pv[K].jk=function(a){return this.Pb(a)?1:0};
pv[K].gd=function(a,b,c){try{b=b||sg;var d=0,e,f=-1,g=-1,k=-1,l=-1;if(av(a,[d,d+1],[T,T])){e=As;k=d;l=d+1;d+=2;if(b===Ns)throw m("displayMode must be set to Markers when using lat/long addresses.");b===sg&&(b=Es)}else if(av(a,[d],[Eh])){switch(b){case sg:e=Ms;b=Ns;f=d;break;case Ns:e=Ms;f=d;break;case Es:case Us:e=bs;g=d;break;default:throw m("Unknown displayMode: "+b);}d+=1}else throw m("Unknown address type.");var n=null;av(a,[d],[Eh])&&Xs!=a.gj(d,vh)&&(n=d++);var p=null,s=null;av(a,[d],[T])&&(p=
    d++, av(a, [d], [T]) && (s = d++));
    var u = null;
    av(a, [d], [Eh]) && Xs == a.gj(d, vh) && (u = d++);
    e != Ms && null != p && null == s && (s = p);
    if (a.H() != d)throw m("Table contains more columns than expected (Expecting " + d + " columns)");
    return {JZ: e, d5: b, XH: f, YH: g, bC: k, cC: l, pI: n, pu: p, fC: s, E_: u}
} catch (v) {
    return c && c.Md(Rga + v), null
}
};
    function qv() {
    }

    Y(qv, Zu);
    qv[K].Pb = function (a) {
        try {
            this.gd(a)
        } catch (b) {
            return !1
        }
        return !0
    };
    qv[K].gd = function (a) {
        $u(a);
        if (5 != a.H())throw m("Invalid data table format: must have 5 columns.");
        this.Kb(a, 0, T);
        this.Kb(a, 1, T);
        this.Kb(a, 2, T);
        this.Kb(a, 3, T);
        this.Kb(a, 4, Eh);
        return {Qja: 0, Rja: 1, Pja: 2, Nja: 3, Oja: 4}
    };
    qv[K].Kb = function (a, b, c) {
        if (!this.$a(a, b, c))throw m(Nr + b + dr + c + er);
    };
    function rv(a) {
        fv[L](this, a)
    }

    Y(rv, fv);
    rv[K].Pb = function (a) {
        $u(a);
        if (!rv.e.Pb[L](this, a))return !1;
        var b = a.H();
        if (this.uQ)for (var c = 1; c < b; c++)if (this.$a(a, c, T) && !bv(this, a, c))return !1;
        return !0
    };
    rv[K].jk = function (a) {
        for (var b = a.H(), c = a.M(), d = 0, e = 0, f = 0; f < b; f++)this.$a(a, f, T) ? d++ : this.$a(a, f, Bg) && e++;
        return this.Pb(a) ? 10 > c ? 1 : 2 > d && 0 == e ? 3 : 2 : 0
    };
    function sv() {
    }

    Y(sv, Zu);
    sv[K].Pb = function (a) {
        return Xja(this, a) || Yja(this, a)
    };
    sv[K].jk = function (a) {
        var b = Xja(this, a);
        a = Yja(this, a);
        return b || a ? a ? 1 : 3 : 0
    };
    function Xja(a, b) {
        $u(b);
        var c = b.H();
        if (2 > c || 3 < c)return !1;
        var d = a.$a(b, 0, T), d = d && a.$a(b, 1, T);
        3 == c && (d = d && a.$a(b, 2, Eh));
        if (c = d) a.$a(b, 0, T) && a.$a(b, 1, T) ? (c = X(a.Qpa, a), d = X(a.Rpa, a), c = cv(b, 0, c) && cv(b, 1, d)) : c = !1;
        return c
    }

    function Yja(a, b) {
        $u(b);
        var c = b.H();
        return 1 > c || 2 < c || !a.$a(b, 0, Eh) || 2 == c && !a.$a(b, 1, Eh) ? !1 : !0
    }

    function tv() {
    }

    Y(tv, Zu);
    tv[K].Pb = function (a) {
        $u(a);
        var b = a.H();
        if (3 > b || a.D(0) != Eh)return !1;
        var c = a.D(1);
        if (c != T && c != Bg && c != Eh || c == Eh && !Zja(a) && !$ja(a) || c == T && !cv(a, 1, function (a) {
                return Kj(a)
            }))return !1;
        for (c = 2; c < b; c++) {
            var d = a.D(c);
            if (d != T && d != Eh)return !1
        }
        return !0
    };
    tv[K].jk = function (a) {
        return this.Pb(a) ? this.$a(a, 1, T) && !aka(a) ? 1 : 3 : 0
    };
    function aka(a) {
        return cv(a, 1, function (a) {
            return 1900 < a && 2100 > a
        })
    }

    function Zja(a) {
        return cv(a, 1, function (a) {
            return 7 != a[J] || fa(a[ee](0, 3)) || a[Cb](4) != eg || fa(a[ee](6, 7)) ? !1 : !0
        })
    }

    function $ja(a) {
        return cv(a, 1, function (a) {
            return 6 != a[J] || fa(a[ee](0, 3)) || a[Cb](4) != Of || fa(a[Cb](5)) ? !1 : !0
        })
    }

    function uv() {
    }

    Y(uv, Zu);
    uv[K].Pb = function (a) {
        $u(a);
        var b = a.H();
        if (2 > b || 3 < b)return !1;
        var c = this.$a(a, 0, Eh) && this.$a(a, 1, Eh);
        3 == b && (c = c && this.$a(a, 2, Eh));
        return c && Tja(a)
    };
    uv[K].jk = function (a) {
        return this.Pb(a) ? 3 : 0
    };
    function vv() {
    }

    Y(vv, Zu);
    vv[K].Pb = function (a) {
        $u(a);
        var b = a.H();
        if (1 > b || 2 < b)return !1;
        var c = this.$a(a, b - 1, T);
        return c = c && bv(this, a, b - 1)
    };
    vv[K].jk = function (a) {
        if (this.Pb(a))if (1 == a.M()) a = 1; else {
            var b;
            if (!(b = !this.$a(a, 0, Eh) || 25 < a.M())) {
                for (var c = b = 0; c < a.M(); c++)b += a[I](c, 1);
                b = !(97 < b && 103 > b || .97 < b && 1.03 > b)
            }
            a = b ? 2 : 3
        } else a = 0;
        return a
    };
    function wv() {
    }

    Y(wv, Zu);
    wv[K].Pb = function (a) {
        $u(a);
        var b = a.H();
        if (0 == b)return !1;
        for (var c = this.$a(a, 0, Eh) ? 1 : 0, d = b > c; c < b; c++)if (!this.$a(a, c, T)) {
            d = !1;
            break
        }
        return d
    };
    function xv() {
    }

    Y(xv, Zu);
    xv[K].Pb = function (a) {
        try {
            this.gd(a)
        } catch (b) {
            return !1
        }
        return !0
    };
    xv[K].gd = function (a) {
        if (ki(a)) {
            var b = a[0];
            a = a[1];
            var c = b.H();
            if (3 !== c)throw m("Invalid linkTable format: must have 3 columns.");
            this.Kb(Bs, b, 0, T);
            this.Kb(Bs, b, 1, T);
            this.Kb(Bs, b, 2, T);
            c = a.H();
            if (1 !== c && 2 !== c)throw m("Invalid nodeTable format: must have 1 or 2 columns.");
            this.Kb(Nha, a, 0, Eh);
            2 === c && this.Kb(Nha, a, 1, Eh);
            for (var d = [], e = [], f = 0, g = b.M(); f < g; ++f) {
                var k = b[I](f, 0), l = b[I](f, 1), n = b[I](f, 2);
                e[C]({source: k, target: l, value: n})
            }
            f = 0;
            for (g = a.M(); f < g; ++f)d[C]({name: a[I](f, 0), nb: 2 === c ? a[I](f, 1) : O});
            return {
                links: e,
nodes:d}}$u(a);if(3!==a.H())throw m(Tga);this.Kb(ls,a,0,Eh);this.Kb(ls,a,1,Eh);this.Kb(ls,a,2,T);b=new lk;c=[];d=[];e=0;for(f=a.M();e<f;++e)g=a[wq](e,0),k=a[wq](e,1),g=bka(b,c,g),k=bka(b,c,k),l=a[I](e,2),d[C]({source:g,target:k,value:l});return{links:d,nodes:c}};function bka(a,b,c){if(a.bf(c))return a.get(c);a.set(c,b[J]);b[C]({name:c,nb:O});return b[J]-1}xv[K].Kb=function(a,b,c,d){if(!this.$a(b,c,d))throw m("Invalid format in "+a+": column #"+c+dr+d+er);};function yv(){}Y(yv,Zu);yv[K].Pb=function(a){$u(a);var b=a.H();if(2>b||this.$a(a,0,wg)||this.$a(a,0,Eh))return!1;for(var c=1,d=0,e=0;c<b;){var f=a.D(c);if(f==T)d++,e=0;else if(f==wg){if(e++,0==d||1<e)return!1}else return!1;c++}return 0<d};function zv(){}Y(zv,Zu);zv[K].Pb=function(a){$u(a);for(var b=!0,c=a.H(),d=0;d<c;d++)if(!this.$a(a,d,T)){b=!1;break}return b};zv[K].jk=function(a){return this.Pb(a)?2>a.H()?1:2:0};function Av(){}Y(Av,Zu);Av[K].Pb=function(a){try{this.gd(a)}catch(b){return!1}return!0};Av[K].gd=function(a){$u(a);var b=a.H();if(1>b)throw m("Invalid data table format: must have at least 1 column.");this.Kb(a,0,Bg);for(var c=[],d=1;d<b;d++)this.Kb(a,d,T),c[C](d);return{OZ:0,Vla:c}};Av[K].Kb=function(a,b,c){if(!this.$a(a,b,c))throw m(Nr+b+dr+c+er);};function Bv(){}Y(Bv,Zu);Bv[K].Pb=function(a){try{this.gd(a)}catch(b){return!1}return!0};Bv[K].gd=function(a){$u(a);if(3!=a.H())throw m(Tga);this.Kb(a,0,Eh);this.Kb(a,1,T);this.Kb(a,2,Eh);return{ou:0,Jma:2,yC:1}};Bv[K].Kb=function(a,b,c){if(!this.$a(a,b,c))throw m(Nr+b+dr+c+er);};function Cv(){}Y(Cv,Zu);Cv[K].Pb=function(){return!0};function Dv(){}Y(Dv,Zu);Dv[K].Pb=function(a){try{this.gd(a)}catch(b){return!1}return!0};Dv[K].gd=function(a){$u(a);a=a.H();if(2>a)throw m(Uga);return{numColumns:a}};function Ev(a){this.b=a||new Bn([])}Y(Ev,Zu);var cka=[Bg,T,Cg];Ev[K].Pb=function(a){try{this.gd(a)}catch(b){return!1}return!0};
Ev[K].gd=function(a){$u(a);for(var b=[],c=a.H(),d=0;d<c;++d){var e=a.mr(d);if(e===O)b[C]({index:d,qg:{}});else{if(1>b[J])throw m("At least 1 data column must come before any role columns");Oi(b).qg[e]=d}}c=b[J];if(3!==c&&4!==c)throw m("Invalid data table format: must have 3 or 4 data columns.");d=4==c;this.Kb(a,b[0][pc],Eh);d&&this.Kb(a,b[1][pc],Eh);this.Kb(a,b[d?2:1][pc],cka);this.Kb(a,b[d?3:2][pc],cka);return 4===c?(a=!In(this.b,gia,!0),{ou:b[a?1:0],EB:b[a?0:1],$G:b[2],ZG:b[3]}):{ou:b[0],EB:null,
$G:b[1],ZG:b[2]}};Ev[K].Kb=function(a,b,c){ki(c)||(c=[c]);if(!Sja(this,a,b,c))throw m(Nr+b+dr+c+er);};function Lv(){}Y(Lv,Zu);Lv[K].Pb=function(a){try{this.gd(a)}catch(b){return!1}return!0};Lv[K].gd=function(a){$u(a);if(2>a.H())throw m("Invalid data table format: must have 2 columns.");this.Kb(a,0,Bg);this.Kb(a,1,T);return{Owa:0,Pwa:1}};Lv[K].Kb=function(a,b,c){ki(c)||(c=[c]);if(!Sja(this,a,b,c))throw m(Nr+b+dr+c+er);};function Mv(){}Y(Mv,Zu);Mv[K].Pb=function(a){$u(a);var b=a.H();if(2>b||4<b)return!1;var c=this.$a(a,0,Eh)&&this.$a(a,1,Eh);2<b&&(c=c&&bv(this,a,2))&&3<b&&(c=c&&this.$a(a,3,T));return c&&Tja(a)};Mv[K].jk=function(a){return this.Pb(a)?3:0};function Nv(a){this.el=ki(a)?a:Zj(dka)}Nv[K].sW=function(a){var b=[];Sj(this.el,function(c){var d=eka[c],e=d&&d[Nb];e&&(e=e.jk(a),0!=e&&b[C]({type:c,Nea:e,Be:d.Be}))});fka(b);return Ti(b,function(a){return a[H]})};function fka(a){nj(a,function(a,c){var d=a.Nea-c.Nea;0==d&&(d=a.Be-c.Be);return-d})}
var dka={gxa:Ar,qua:Br,mxa:Dr,xxa:Er,zxa:Fr,Hxa:Gr,vua:Hr,Txa:Ir,Uxa:Jr,Nua:Kr,Yxa:Lr,Zxa:Mr,Dya:Qr,Oua:Or,Oya:Tr,qya:Pr,Hya:Rr,Rua:Ur,fza:Cr,hza:Vr,m7:Wr,qza:Xr,sza:Yr,Zua:Zr},eka={AnnotatedTimeLine:{format:new ev,Be:3},AreaChart:{format:new gv({Rfa:!0}),Be:2},BarChart:{format:new fv,Be:2},BubbleChart:{format:new hv,Be:2},CandlestickChart:{format:new lv,Be:2},ColumnChart:{format:new fv,Be:2},ComboChart:{format:new mv,Be:2},Gauge:{format:new ov,Be:1},GeoChart:{format:new pv,Be:3},Histogram:{format:new rv,
Be:3},LineChart:{format:new fv({Rfa:!0}),Be:2},ImageRadarChart:{format:new wv,Be:1},ImageSparkLine:{format:new zv,Be:1},Map:{format:new sv,Be:2},MotionChart:{format:new tv,Be:3},OrgChart:{format:new uv,Be:2},PieChart:{format:new vv,Be:2},ScatterChart:{format:new yv,Be:2},"AreaChart-stacked":{format:new gv({Td:!0}),Be:2},SteppedAreaChart:{format:new gv,Be:2},Table:{format:new Cv,Be:0},Timeline:{format:new Ev,Be:2},TreeMap:{format:new Mv,Be:2},WordTree:{format:new pv,Be:2}};di("google.visualization.ChartSelection",Nv,void 0);Nv[K].calculateChartTypes=Nv[K].sW;var gka={"google.charts.Bar":ds,AnnotatedTimeLine:cs,AnnotationChart:"annotationchart",AreaChart:js,BarChart:js,BubbleChart:js,CandlestickChart:js,ColumnChart:js,ComboChart:js,Gauge:ss,GeoChart:ts,GeoMap:"geomap",Histogram:js,ImageAreaChart:"imageareachart",ImageBarChart:"imagebarchart",ImageCandlestickChart:"imagechart",ImageChart:"imagechart",ImageLineChart:"imagelinechart",ImagePieChart:"imagepiechart",ImageSparkLine:ws,IntensityMap:"intensitymap",LineChart:js,Map:Ds,MotionChart:Fs,OrgChart:Js,
        PieChart: js,
        RangeSelector: js,
        ScatterChart: js,
        SparklineChart: js,
        SteppedAreaChart: js,
        Table: Ss,
        Timeline: Ws,
        TreeMap: Ys,
        StringFilter: is,
        DateRangeFilter: is,
        NumberRangeFilter: is,
        CategoryFilter: is,
        ChartRangeFilter: is,
        NumberRangeSetter: is,
        ColumnSelector: is,
        Dashboard: is
    };

    function Ov(a, b) {
        var c = a.useFormatFromData;
        pi(c) && !c || !Ai(a[Nb]) || (b = Si(b, function (a) {
            return !Ai(a)
        }), Dda(b), 1 == b[J] && (c = hka(b[0]), ta(a, c)))
    }

    function hka(a) {
        Ai(a) || (a = a[wb](/\d/g, Xe), a = a[wb](/#{10,}/, Hi(we, 10)));
        return a
    }

    function ika(a) {
        var b = jka(a), c = new Mu(a);
        c.gr([0, 1, {
            type: T, calc: function (c, e) {
                var f = Pv(a, e);
                return null != f ? b.yK * f.x + b.Cqa : null
            }
        }]);
        return c
    }

    function jka(a) {
        var b;
        b = a.M();
        for (var c = new Kk, d = 0; d < b; d++) {
            var e = Pv(a, d);
            null != e && (c.x += e.x, c.y += e.y)
        }
        b = new Kk(c.x / b, c.y / b);
        for (e = d = c = 0; e < a.M(); e++) {
            var f = Pv(a, e);
            null != f && (f = new Kk(f.x - b.x, f.y - b.y), c += f.x * f.y, d += f.x * f.x)
        }
        a = {};
        a.yK = c / d || 1;
        a.Cqa = b.y - a.yK * b.x;
        return a
    }

    function Pv(a, b) {
        var c = a[I](b, 0), d = a[I](b, 1);
        return null == c || null == d ? null : new Kk(c, d)
    }

    function kka(a) {
        var b = a.bc(), c = a.Va();
        a = a.kd();
        var d;
        t:if (d = a.useFormatFromData, pi(d) && !d) d = !1; else {
            d = [at, Ts, dia, eia, ns];
            for (var e = 0; e < d[J]; e++)if (ei(d[e] + ir, a)) {
                d = !1;
                break t
            }
            d = !0
        }
        if (d)if (b == Er) 3 > c.H() || (b = c.$u(1), d = a.hAxis || {}, Ov(d, [b]), a.hAxis = d, c = c.$u(2), b = a.vAxes || {}, d = b[0] || {}, Ov(d, [c]), b[0] = d, a.vAxes = b); else {
            d = a.vAxes || [{}, {}];
            for (var e = a.hAxis || {}, f = d[0] || {}, g = d[1] || {}, k = [], l = [], n = c && c.H() || 0, p = 0; p < n; p++)if (c.D(p) == T) {
                var s = c.$u(p), u;
                u = p;
                0 == u ? u = null : (u--, u = ((a.series || {})[u] || {}).targetAxisIndex ||
                    0);
                switch (u) {
                    case 0:
                        k[C](s);
                        break;
                    case 1:
                        l[C](s)
                }
            }
            b == Dr ? Ov(e, k) : (Ov(f, k), Ov(g, l));
            0 < n && c.D(0) != Eh && (b = b == Dr ? f : e, s = c.$u(0), Ov(b, [s]));
            d[0] = f;
            d[1] = g;
            a.vAxes = d;
            a.hAxis = e
        }
    }

    function lka(a) {
        if (a[Cq](as)) {
            var b = a.Va();
            a.bc() == Ur && 2 == b.H() && (b = ika(b), a.Fh(b), a.K(Yha, 2), a.K(Zha, 0), a.K($ha, !1));
            a.K(as, null)
        }
    }

    function mka(a) {
        var b = a.Va(), c = a.zk;
        if (ki(c))for (var d = 0; d < c[J]; d++)b = Nu(b, c[d]); else null != c && (b = Nu(b, c));
        a.cD(null);
        a.Fh(b)
    }

    function nka(a) {
        var b = a.bc();
        if ((gka[b] || null) == js && b != Ur) {
            var b = a.Va(), c = a[Cq](us);
            if (null != c) {
                for (var d = [{
                    calc: c ? bia : sha,
                    sourceColumn: 0,
                    type: Eh
                }], e = b.H(), c = c ? 1 : 0; c < e; c++)d[C](c);
                b = new Mu(b);
                b.gr(d);
                a.K(us, null);
                a.Fh(b)
            }
        }
    }

    function Qv(a, b) {
        var c = b || {};
        oi(c) && (c = Fo(c));
        this.sH = c.containerId || null;
        this.ON = a;
        this.Mg = c[a + dha] || null;
        this.mi = c[a + Zga] || null;
        this.RB = null;
        Zp(this, null);
        this.XO = null;
        this.ff = c.dataSourceUrl || null;
        this.t = null;
        this.Fh(c.dataTable);
        this.b = c[Eq] || {};
        this.o = c[Dq] || {};
        var d = c.packages;
        this.wO = ci(d) ? d : null;
        this.Lj = c.query || null;
        this.Il = c.refreshInterval || null;
        this.zk = c[$q] || null;
        this.WF = null;
        this.l8 = [mka, nka, kka, lka];
        this.q9 = c.isDefaultVisualization || !ci(c.isDefaultVisualization)
    }

    Y(Qv, ut);
    W = Qv[K];
    W.rca = null;
    W.vU = null;
    W.n = null;
    Ia(W, function () {
        var a = new this[uc](this[uq]());
        a.WF = this.WF;
        return a
    });
    W.B = function () {
        this[Yb]();
        Qv.e.B[L](this)
    };
    va(W, function () {
        Rv(this)
    });
aq(W,function(a){a=Vk(a||O);if(!dl(a)){var b=this.sH;a=Vk(b);if(!dl(a))throw m("The container #"+b+" is null or not defined.");}this.n=a;try{if(null==this.bc())throw m("The "+this.ON+" type is not defined.");if(so(this.bc()))this.Pba(a);else{var c=X(this.Pba,this,a),c=st.LR(c,X(this.nq,this,a)),d=this.wO;if(null==d){var e=this.bc(),e=e[wb](lca,O),d=gka[e]||null;if(null==d)throw m("Invalid visualization type: "+e);}oi(d)&&(d=[d]);var d={packages:d,callback:c},f=ei(oca);null===f&&(f=vaa);d=d?d:{callback:fi};
d.callback=d.callback||fi;var g,e=null,k=ei(wha);k&&0<=wm(k,0,Dha,k[Cc](xm))&&(e=ym(k,Dha));(g=e)&&!d.language&&(d.language=g);rfa(qfa.Vb(),f,d)}}catch(l){this.nq(a,l)}});Ca(W,function(){return Co(oka(this,this.Va()))});W.ys=function(){return oka(this,this.rca||this.Va())};
function oka(a,b){var c=a.wO,d=void 0;null===b||(d=ri(b.Ex)?b.Ex().ys():b.ys());c={containerId:a.sH||void 0,dataSourceUrl:a.ff||void 0,dataTable:d,options:a.kd()||void 0,state:a[Hq]()||void 0,packages:null===c?void 0:c,refreshInterval:a.Il||void 0,query:a.ro()||void 0,view:a.zk||void 0,isDefaultVisualization:a.Yca()};c[a.ON+dha]=a.bc()||void 0;c[a.ON+Zga]=a[jq]()||void 0;a.Xca(c);return c}W.Xca=function(){};W.SU=function(){return this.ff};W.Va=function(){return this.t};W.bc=function(){return this.Mg};
Ap(W,function(){return this.mi});W.Q4=function(){return this[Qd]};W.QU=function(){return this.sH};W.ro=function(){return this.Lj};W.TU=function(){return this.Il};Mp(W,function(a,b){return Sv(this.b,a,b)});function Sv(a,b,c){a=-1==b[qd](Ue)?a[b]:ei(b,a);c=ci(c)?c:null;return null!=a?a:c}W.kd=function(){return this.b};Pp(W,function(){return this.o});W.Yca=function(){return this.q9};W.Ni=function(a){this.ff=a};W.Nva=function(a){this.WF=a};W.tva=function(){return this.WF};W.Fh=function(a){this.t=Xfa(a)};
W.wv=function(a){this.Mg=a};W.eo=function(a){this.mi=a};W.XU=function(a){this.sH=a};W.Ik=function(a){this.Lj=a};W.Bn=function(a){this.Il=a};W.K=function(a,b){pka(this.b,a,b)};function pka(a,b,c){null==c?ii(Sv(a,b))||(c=b[rc](Ue),1<c[J]&&(b=c.pop(),a=Sv(a,c[me](Ue))),delete a[b]):di(b,c,a)}Lp(W,function(a){this.b=a||{}});W.setProperty=function(a,b){var c=a[rc](Ue);if(0<c[J]){var d=c[sb]();if(d=qka[d])if(0===c[J])d.set[Sc](this,b);else d=d.get[Sc](this),pka(d,c[me](Ue),b)}};
W.Cc=function(a){this.o=a||{}};W.AJ=function(a){this.wO=a};W.cD=function(a){this.zk=a};W.Zva=function(a){a!=this[Qd]&&(this.XO=a)};W.j6=function(a){this.q9=a};W.ZS=function(){return new this[uc](this.ys())};W.UU=function(){return this.zk};W.N4=function(){return this.wO};W.nq=function(a,b){var c=b&&b[Aq]||ps,d=st.Md(a,c);Ju(this,ps,{id:d,message:c})};
W.xR=function(a,b){var c=so(this.bc());if(!c)throw m("Invalid "+this.ON+" type: "+this.bc());this.XO&&(Rv(this),Zp(this,this.XO),this.XO=null);var d;if(d=this[Qd]&&this[Qd][uc]==c)d=(d=this[Qd])&&ri(d.pc)?d.pc()==a:!1;d?c=this[Qd]:(Rv(this),c=new c(a));this.RB&&this.RB!=c&&ri(this.RB.Zf)&&this.RB.Zf();this.RB=c;rka(this,c);this.rca=b;d=An(this.kd());d=new Tv({chartType:this.bc(),dataTable:b,options:d,view:this.zk});for(var e=0;e<this.l8[J];e++)this.l8[e](d);c[br](d.Va(),d.kd(),this[Hq]())};
W.Fva=function(a){ki(this.zk)?this.zk[C](a):this.zk=null===this.zk?[a]:[this.zk,a]};W.sra=function(a,b){if(b.lj()){var c=b.zJ(),d=b.J2(),e=st.gD(a,b);Ju(this,ps,{id:e,message:c,detailedMessage:d})}else this.xR(a,b.Va())};function rka(a,b){ska(a);var c=[];Z([Ls,Ps,ps,Rs],function(d){var e=Gu(b,d,function(c){d==Ls&&(a.RB=null,Zp(a,b));d!=Ls&&d!=Rs||!ri(b[Hq])||a.Cc(b[Hq][L](b));Ju(a,d,c)});c[C](e)});a.vU=c}
W.Pba=function(a){var b=this.Va();if(b)this.xR(a,b);else if(null!=this.ff)b=X(this.sra,this,a),b=st.LR(b,X(this.nq,this,a)),this.zS(b,!0);else throw m("Cannot draw chart: no data specified.");};W.zS=function(a,b){var c=pi(b)?b:!1,d=new tu(this.ff||O),e=this.Il;e&&c&&d.Bn(e);(c=this.ro())&&d.Ik(c);d[iq](a)};function Rv(a){a[Qd]&&ri(a[Qd].Zf)&&a[Qd].Zf();wt(a[Qd]);Zp(a,null)}function ska(a){ki(a.vU)&&(Z(a.vU,function(a){Ku(a)}),a.vU=null)}
var qka={name:{get:Qv[K][jq],set:Qv[K].eo},type:{get:Qv[K].bc,set:Qv[K].wv},containerId:{get:Qv[K].QU,set:Qv[K].XU},options:{get:Qv[K].kd,set:Qv[K][zq]},state:{get:Qv[K][Hq],set:Qv[K].Cc},dataSourceUrl:{get:Qv[K].SU,set:Qv[K].Ni},dataTable:{get:Qv[K].Va,set:Qv[K].Fh},refreshInterval:{get:Qv[K].TU,set:Qv[K].Bn},query:{get:Qv[K].ro,set:Qv[K].Ik},view:{get:Qv[K].UU,set:Qv[K].cD}};function Tv(a){Qv[L](this,fs,a)}Y(Tv,Qv);W=Tv[K];W.ge=Qv[K].Q4;W.bO=Qv[K].Zva;W.Nd=Qv[K].wv;W.eb=Qv[K].bc;W.dZ=Qv[K].eo;
W.cZ=Qv[K][jq];function Uv(a){Qv[L](this,mha,a)}Y(Uv,Qv);W=Uv[K];W.gT=Qv[K].Q4;W.Lva=Qv[K].wv;W.sva=Qv[K].bc;W.Kva=Qv[K].eo;W.rva=Qv[K][jq];function Vv(a){this.he=a;this.ne={}}Y(Vv,ut);var tka=[];W=Vv[K];W.m=function(a,b,c,d){return Wv(this,a,b,c,d)};function Xv(a,b,c,d,e){Wv(a,b,c,d,!1,e)}function Wv(a,b,c,d,e,f){ki(c)||(c&&(tka[0]=c[kc]()),c=tka);for(var g=0;g<c[J];g++){var k=Lt(b,c[g],d||a[nq],e||!1,f||a.he||a);if(!k)break;a.ne[k.key]=k}return a}W.AC=function(a,b,c,d){return uka(this,a,b,c,d)};
function uka(a,b,c,d,e,f){if(ki(c))for(var g=0;g<c[J];g++)uka(a,b,c[g],d,e,f);else{b=Ot(b,c,d||a[nq],e,f||a.he||a);if(!b)return a;a.ne[b.key]=b}return a}W.vb=function(a,b,c,d,e){if(ki(b))for(var f=0;f<b[J];f++)this.vb(a,b[f],c,d,e);else c=c||this[nq],e=e||this.he||this,c=Mt(c),d=!!d,b=Et(a)?a.VK(b,c,d,e):a?(a=Nt(a))?a.VK(b,c,d,e):null:null,b&&(Qt(b),delete this.ne[b.key]);return this};W.mc=function(){Sj(this.ne,Qt);this.ne={}};W.B=function(){Vv.e.B[L](this);this.mc()};
Hp(W,function(){throw m("EventHandler.handleEvent not implemented");});function Yv(a){this.n=a;this.G=new Vv(this)}Y(Yv,ut);W=Yv[K];W.B=function(){this[Yb]();Yv.e.B[L](this)};va(W,function(){this.G.mc();wt(this.G);hl(this.n)});W.pc=function(){return this.n};W.addEventListener=function(a,b,c,d,e){e?Wv(this.G,a,b,c,d,e):this.G.m(a,b,c,d)};aq(W,function(){});Pp(W,function(){return{}});function Zv(a){this.n=ro(a);this.Ec=new Ou(this,this.n);this.xca=[]}Y(Zv,ut);W=Zv[K];W.B=function(){this[Yb]();Zv.e.B[L](this)};va(W,function(){vka(this)});W.ya=null;W.cA=null;W.b=null;W.Xc=null;W.oI=null;W.$Y=null;W.o=null;W.Hu=null;W.Va=function(){return this.ya};W.kd=function(){return this.b};W.nj=function(){return{}};W.El=function(a,b){return bo(b,Zs,{})};W.ps=function(){return O};W.Wda=function(a){this.xca=a};W.cR=function(){return this.xca};W.gq=function(){};
Pp(W,function(){return this.o?Fo(Co(this.o)):null});aq(W,function(a,b,c){this.ya=a;this.cA=b||{};this.$Y=c||{};Qu(this.Ec,this.FA,this)});
W.FA=function(){if(this.ya){this.o=this.$Y||{};if(!ni(this.o))throw m("Control state must be an object.");this.Hu=this.Hu||this.o;this.b=new Bn([this.cA,this.nj()||{}]);this.gq(this.ya,this.b,this.o);vka(this);var a=Tn(this.b,jia,this.ps());this.Xc=(a=so(a))?new a(this.n):null;if(!this.Xc)throw m("Invalid Ui instance.");this.oI=Gu(this.Xc,$s,X(this.Kka,this));this.Xc[br](this.o,this.El(this.ya,this.b));this.o=this.Xc[Hq]();Ju(this,Ls,null)}};
function vka(a){a.oI&&(Ku(a.oI),wt(a.oI),a.oI=null);wt(a.Xc);a.Xc=null;hl(a.n)}W.Kka=function(a){this.o=this.Xc[Hq]();Ju(this,Rs,a)};W.st=function(){Qu(this.Ec,this.Usa,this)};W.Usa=function(){this.Hu&&(this.$Y=this.Hu,this.FA())};function $v(){this.rh=new lk;this.jt=new lk;this.zv=new lk}function wka(a,b,c){xka(a,b,c)||(a.rh.set(aw(b),b),a.rh.set(aw(c),c),yka(b,c,a.jt),yka(c,b,a.zv))}W=$v[K];va(W,function(){this.rh[Yb]();this.jt[Yb]();this.zv[Yb]()});Ua(W,function(){return this.rh[dd]()});W.u2=function(){try{return zka(this),!0}catch(a){return!1}};W.dc=function(){return this.rh.dc()};W.Ua=function(){return this.rh.Ua()};Pa(W,function(a){return this.rh.bf(aw(a))});
function xka(a,b,c){b=aw(b);return a.jt.bf(b)&&a.jt.get(b)[Rc](aw(c))}function bw(a,b){if(!a[Rc](b))return null;var c=a.zv.get(aw(b));return c?Wda(c,function(a){return this.rh.get(a)},a):null}W.Xf=function(a){return this[Rc](a)?(a=this.jt.get(aw(a)))?Wda(a,function(a){return this.rh.get(a)},this):null:null};function cw(a){if(a.rh[dd]())return[];var b=[];qk(a.jt,function(a,d){this.zv.bf(d)||b[C](this.rh.get(d))},a);if(0==b[J])throw m("Invalid state: DAG has not root node(s).");return b}
function zka(a){for(var b=Aka(a.zv),c=[],d=Ti(cw(a),function(a){return aw(a)},a);0<d[J];){for(var e=[],f=0;f<d[J];f++){var g=d[f];c[C](a.rh.get(g));var k=a.jt.get(g);k&&qk(k,function(a){b.get(a)[Qb](g);b.get(a)[dd]()&&(b[Qb](a),e[C](a))})}d=e}if(c[J]!=a.rh.dc())throw m("cycle detected");}Ia(W,function(){return this[dd]()?new $v:$v[K].wT[Sc](this,cw(this))});W.wT=function(a){var b=new $v;if(0==arguments[J])return b;for(var c=0;c<arguments[J];c++)Bka(this,arguments[c],b);return b};
    function Bka(a, b, c) {
        var d = a.Xf(b);
        d && qk(d, function (a) {
            wka(c, b, a);
            Bka(this, a, c)
        }, a)
    }

    function aw(a) {
        var b = typeof a;
        return b == jh && a || b == Mg ? ih + ti(a) : b[hc](0, 1) + a
    }

    function yka(a, b, c) {
        var d = c.get(aw(a));
        d || (d = new sk, c.set(aw(a), d));
        d.add(aw(b))
    }

    function Cka(a, b, c) {
        var d = c.get(aw(a));
        d[Qb](aw(b));
        d[dd]() && c[Qb](aw(a))
    }

    function Dka(a, b) {
        return !a.jt.bf(aw(b)) && !a.zv.bf(aw(b))
    }

    function Aka(a) {
        var b = new lk;
        qk(a, function (a, d) {
            b.set(d, a[Bc]())
        });
        return b
    }

    function dw(a) {
        this.yh = new $v;
        this.nT = null;
        this.UK = [];
        this.Ec = new Ou(this, a);
        this.An = null
    }

    Y(dw, ut);
    W = dw[K];
    W.B = function () {
        this[Yb]();
        dw.e.B[L](this)
    };
    va(W, function () {
        Z(this.UK, function (a) {
            Ku(a)
        });
        this.UK = [];
        this.An = null;
        this.yh[Yb]()
    });
    W.nq = function (a) {
        this.Ec.Md(a)
    };
    Ip(W, function (a, b) {
        if (Eka(a))if (Fka(b)) {
            var c = ti(a);
            if (ti(b) == c) this.nq(Mga); else {
                c = [];
                this.yh[Rc](a) || c[C](a);
                this.yh[Rc](b) || c[C](b);
                wka(this.yh, a, b);
                var d;
                this.yh.u2() ? d = !0 : (this.nq(bha), d = !1);
                if (d)for (d = 0; d < c[J]; d++)this.UK[C](Gu(c[d], Rs, X(this.Tra, this, c[d]))), this.UK[C](Gu(c[d], Ls, X(this.Sra, this, c[d]))), this.UK[C](Gu(c[d], ps, X(this.Rra, this, c[d]))); else c = this.yh, xka(c, a, b) && (Cka(a, b, c.jt), Cka(b, a, c.zv), Dka(c, a) && c.rh[Qb](aw(a)), Dka(c, b) && c.rh[Qb](aw(b)))
            }
        } else this.nq(b + tga); else this.nq(a +
vga)});aq(W,function(a){if(a&&!this.yh[dd]()){this.nT=Xfa(a);this.An=new ew(this);a=cw(this.yh);for(var b=0;b<a[J];b++)a[b].Fh(this.nT);this.An[y](a)}});function Fka(a){return ni(a)&&ri(a[br])&&ri(a.setDataTable)}function Eka(a){return Fka(a)&&ri(a.getControl)}W.Tra=function(a){this.An=this.An||new ew(this);Gka(this.An,a)};
W.Sra=function(a){var b;if(b=Eka(a)){b=a.gT();var c;if(c=ni(b)){if(ri(b.applyOperator))t:{b=this.yh;c=b.wT(a);for(var d=c.Ua(),e=0;e<d[J];e++){var f=d[e];if(f!=a&&bw(c,f)[J]!=bw(b,f)[J]){b=!1;break t}}b=!0}else b=ri(b[Sc]);c=b}b=!c}b?this.nq(a+uga):(this.An=this.An||new ew(this),Gka(this.An,a))};W.Rra=function(a){this.An&&this.An.handleError(a)};function Hka(a,b){b?Ju(a,Ls,null):a.nq($ga);a.An=null}
function Ika(a,b){if(1==b[J])return b[0];for(var c=b[0],d=jj(b,1),e=new sk(Jka(a,d[0])),f=1;f<d[J]&&(e=e.Nz(Jka(a,d[f])),!e[dd]());f++);for(var f=[],g=0;g<c.M();g++)e[Rc](Kka(a,c,g))&&f[C](g);e=new sk(Lka(a,d[0]));for(g=1;g<d[J]&&(e=e.Nz(Lka(a,d[g])),!e[dd]());g++);d=[];for(g=0;g<c.H();g++)e[Rc](Mka(a,c,g))&&d[C](g);c=new Mu(c);c.Wn(f);c.gr(d);return c}function Jka(a,b){for(var c=[],d=0;d<b.M();d++){var e=Kka(a,b,d);null!=e&&c[C](e)}return c}
function Kka(a,b,c){for(;b!==a.nT;)c=b.um(c),b=b.Va();return c}function Lka(a,b){for(var c=[],d=0;d<b.H();d++){var e=Mka(a,b,d);null!=e&&c[C](e)}return c}function Mka(a,b,c){for(;b!==a.nT&&-1!==c;)c=b.wG(c),b=b.Va();-1==c&&(c=null);return c}function ew(a){this.ws=a;this.yh=a.yh[Bc]();this.Bq={};a=this.yh.Ua();for(var b=0;b<a[J];b++)this.Bq[ti(a[b])]=Ls}Ka(ew[K],function(a){ew[K].Pea[Sc](this,a);for(var b=0;b<a[J];b++)this.mf(a[b])});
function Gka(a,b){if(a.yh[Rc](b)){switch(a.Bq[ti(b)]){case Ks:break;case ps:break;case os:a.Bq[ti(b)]=Ls;Nka(a,b);break;case Ls:a.Pea(b);Nka(a,b);break;default:ti(b)}Oka(a)}}ew[K].handleError=function(a){if(this.yh[Rc](a)){switch(this.Bq[ti(a)]){case Ks:case Ls:case ps:break;case os:this.Bq[ti(a)]=ps;a=this.yh.wT(a).Ua();for(var b=1;b<a[J];b++)this.Bq[ti(a[b])]=ps;break;default:ti(a)}Oka(this)}};
function Oka(a){var b=0;Xj(a.Bq,function(a){if(a==ps)b++;else if(a!=Ls)return!1;return!0},a)&&Hka(a.ws,0==b)}ew[K].Pea=function(a){for(var b=$v[K].wT[Sc](this.yh,arguments),c=b.Ua(),d=0;d<c[J];d++){var e=b,f=c[d];if(!e[Rc](f)||e.zv.bf(aw(f)))this.Bq[ti(c[d])]=Ks}};ew[K].mf=function(a){this.Bq[ti(a)]=os;var b=st.LR(function(){a[br]()},X(this.handleError,this,a));Wt(b)};
    function Nka(a, b) {
        var c = a.yh.Xf(b);
        if (c) {
            var d = b.gT();
            d.Wda && d.Wda(c);
            for (d = 0; d < c[J]; d++) {
                var e = c[d], f;
                t:{
                    f = a;
                    var g = bw(f.yh, e);
                    if (g)for (var k = 0; k < g[J]; k++)if (f.Bq[ti(g[k])] != Ls) {
                        f = !1;
                        break t
                    }
                    f = !0
                }
                f && (f = Pka(a, e), e.Fh(f), a.mf(e))
            }
        }
    }

    function Pka(a, b) {
        var c = Ti(bw(a.yh, b), function (a) {
            a = a.gT();
            if (ri(a[Sc]))return a[Sc][L](a)
        });
        return Ika(a.ws, c)
    }

    function fw(a) {
        this.n = a;
        this.ws = new dw(a);
        wt(this.z_);
        this.z_ = Gu(this.ws, Ls, X(this.Eca, this, Ls));
        wt(this.y_);
        this.y_ = Gu(this.ws, ps, X(this.Eca, this, ps))
    }

    Y(fw, ut);
    W = fw[K];
    W.B = function () {
        this[Yb]();
        wt(this.z_);
        wt(this.y_);
        wt(this.ws);
        fw.e.B[L](this)
    };
    va(W, function () {
        Ku(this.z_);
        Ku(this.y_);
        this.ws[Yb]()
    });
    Ip(W, function (a, b) {
        ki(a) || (a = [a]);
        ki(b) || (b = [b]);
        for (var c = 0; c < a[J]; c++)for (var d = 0; d < b[J]; d++)this.ws[ac](a[c], b[d]);
        return this
    });
    aq(W, function (a) {
        this.ws[br](a)
    });
    W.pc = function () {
        return this.n
    };
    W.Eca = function (a, b) {
        Ju(this, a, b || null)
    };
    function gw(a) {
        Qv[L](this, nha, a);
        a = a || {};
        oi(a) && (a = Fo(a));
        this.zq = a.wrappers || null;
        this.yD = a.bindings || null;
        this.wv(a.dashboardType || Pga);
        hw(this)
    }

    Y(gw, Qv);
    W = gw[K];
    W.xR = function (a, b) {
        function c(a) {
            return f[a]
        }

        wt(this[Qd]);
        a = ro(a);
        for (var d = new fw(a), e = this.yD || [], f = this.zq, g = e[J], k = 0; k < g; k++) {
            var l = Ti(e[k].controls, c), n = Ti(e[k].participants, c);
            d[ac](l, n)
        }
        Zp(this, d);
        gw.e.xR[L](this, a, b)
    };
    W.Xca = function (a) {
        a.wrappers = this.zq ? Ti(this.zq, function (a) {
            return a[uq]()
        }) : void 0;
        a.bindings = this.yD || void 0
    };
W.$va=function(a){this.zq=a||null;hw(this)};W.yva=function(){return this.zq};W.Iva=function(a){this.yD=a||null;hw(this)};W.nva=function(){return this.yD};W.uva=Qv[K].Q4;W.Pva=Qv[K].eo;W.vva=Qv[K][jq];function hw(a){var b=a.zq;if(null!==b&&!ki(b)){var c=[];Sj(b,function(a,b){ri(a[uq])||(a=iw(a));a.eo(b);c[C](a)},a);b=c}var d=a.yD;jw(b)&&jw(d)||(a.zq=Ti(b,a.m1,a),a.yD=Ti(d,a.Tsa,a))}W.m1=function(a){ri(a[uq])||(a=iw(a));a.Fh(null);a.Ni(null);return a};
    W.Tsa = function (a) {
        var b = a.controls, c = a.participants;
        if (jw(b) || jw(c))throw m("invalid binding: " + a);
        b = Ti(b, this.fga, this);
        c = Ti(c, this.fga, this);
        return {controls: b, participants: c}
    };
    W.fga = function (a) {
        var b = a, c = /^{.*}$/;
        if (ni(a) || oi(a) && c[hd](a))return ri(b[uq]) || (b = iw(b)), this.zq[C](b), this.zq[J] - 1;
        a = Qka(this);
        a = Ai(b) ? -1 : Qi(a, b);
        if (-1 == a)throw m("Invalid wrapper name: " + b);
        return a
    };
    function Qka(a) {
        return Ti(a.zq, function (a) {
            return a[jq]()
        })
    }

    function jw(a) {
        return ki(a) ? aj(a) : !0
    }

    function kw(a, b) {
        iw(a)[br](b)
    }

    function iw(a) {
        a = a || {};
        oi(a) && (a = Fo(a));
        return a.controlType ? new Uv(a) : a.dashboardType ? new gw(a) : new Tv(a)
    }

    function lw(a, b, c) {
        var d = b.D(c), e = b.Xe(c), f = b.Ra(c), d = a.Gg(d, f, e);
        a.lca(d, b.Er(c))
    }

    function mw(a) {
        for (var b = 0, c = 0; c < a[J]; c++)b += a[c];
        return b
    }

    function Rka(a) {
        return a[J]
    }

    function Ska(a) {
        return mw(a) / a[J]
    }

    function nw(a, b, c) {
        function d(a, b, c, d) {
            return b[L](null, c[I](d, a))
        }

        var e = [], f = [];
        Z(b, function (a) {
            if (qi(a)) e[C](a); else if (hi(a) == jh) {
                var b = a.column;
                Lha in a && f[C]([b, {calc: ui(d, b, a.modifier), type: a[H], label: a[Wc], id: a.id}]);
                e[C](b)
            }
        });
        if (!aj(f)) {
            for (var g = new Mu(a), k = g.Kaa(), l = a.M(), n = 0; n < l; n++)Z(f, function (a) {
                k[a[0]] = a[1]
            });
            g.gr(k);
            a = g
        }
        var p = new fp, s = [];
        Z(e, function (c, d) {
            var e = a.D(c), f = b[d][Wc] || a.Ra(c), g = null != b[d].id ? b[d].id : a.Xe(c);
            p.Gg(e, f, g);
            s[C](e)
        });
        c = c || [];
        Z(c, function (b) {
            var c = b.column,
d=b[Wc]||a.Ra(c),c=null!=b.id?b.id:a.Xe(c);p.Gg(b[H],d,c)});var u=[];Z(e,function(a){u[C]({column:a})});for(var v=a.dp(u),z=[],B=0;B<c[J];B++)z[C]([]);for(B=0;B<v[J];B++){Z(c,function(b,c){z[c][C](a[I](v[B],b.column))});g=!1;if(B<v[J]-1)for(g=!0,l=0;l<e[J];l++){var n=a[I](v[B],e[l]),D=a[I](v[B+1],e[l]);if(0!=hp(s[l],n,D)){g=!1;break}}if(!g){var N=p.Sq();Z(e,function(b,c){p.Fa(N,c,a[I](v[B],b))});var M=b[J];Z(c,function(a,b){var c=a.aggregation[L](null,z[b]);p.Fa(N,M+b,c)});for(g=0;g<c[J];g++)z[g]=
            []
        }
        }
        return p
    }

    di("google.visualization.drawChart", kw, void 0);
    di("google.visualization.drawFromUrl", function (a, b) {
        var c = new du(b || ea[xc][Nc]), d = mu(c, ys), e;
        null != d ? e = d : (e = {}, Z(c.mj.Mk(), function (a) {
            var b = mu(c, a);
            try {
                null != b && (b = Fo(b))
            } catch (d) {
            }
            e[a] = b
        }), Op(e, hk(e)));
        kw(e, a)
    }, void 0);
    di("google.visualization.createUrl", function (a, b) {
        oi(a) && (a = Fo(a));
        var c = [], d, e;
        for (e in a)if (e == Pha) {
            var f = a[e], g;
            for (g in f)d = f[g], oi(d) || (d = Co(d)), c[C](g + lf + aa(String(d)))
        } else d = a[e], oi(d) || (d = ri(d[uq]) ? d[uq]() : Co(d)), c[C](e + lf + aa(String(d)));
        d = mo() + Ega;
        d = d[wb](/^https?:/, O);
        c = (b || d) + nf + c[me](Ee);
        c = c[wb](/'/g, zga);
        return c = c[wb](/"/g, yga)
    }, void 0);
di("google.visualization.createSnippet",function(a){var b=mo()+Fga,b=b[wb](/^https?:/,O),b=Lga+b+xga;a=iw(a)[uq]();a=a[wb](/</g,Ke);a=a[wb](/>/g,Je);return b=b+a+pga},void 0);di("google.visualization.createWrapper",iw,void 0);di("google.visualization.ChartWrapper",Tv,void 0);va(Tv[K],Tv[K][Yb]);aq(Tv[K],Tv[K][br]);Ia(Tv[K],Tv[K][Bc]);Ca(Tv[K],Tv[K][uq]);Tv[K].getSnapshot=Tv[K].ZS;Tv[K].getDataSourceUrl=Tv[K].SU;Tv[K].getDataTable=Tv[K].Va;Tv[K].getChartName=Tv[K].cZ;Tv[K].getChartType=Tv[K].eb;
Tv[K].getChart=Tv[K].ge;Tv[K].getContainerId=Tv[K].QU;Tv[K].getPackages=Tv[K].N4;Tv[K].getQuery=Tv[K].ro;Tv[K].getRefreshInterval=Tv[K].TU;Tv[K].getView=Tv[K].UU;Mp(Tv[K],Tv[K][Cq]);Tv[K].getOptions=Tv[K].kd;Pp(Tv[K],Tv[K][Hq]);Tv[K].getCustomRequestHandler=Tv[K].tva;Tv[K].isDefaultVisualization=Tv[K].Yca;Tv[K].pushView=Tv[K].Fva;Tv[K].sendQuery=Tv[K].zS;Tv[K].setDataSourceUrl=Tv[K].Ni;Tv[K].setDataTable=Tv[K].Fh;Tv[K].setChart=Tv[K].bO;Tv[K].setChartName=Tv[K].dZ;Tv[K].setChartType=Tv[K].Nd;
Tv[K].setContainerId=Tv[K].XU;Tv[K].setIsDefaultVisualization=Tv[K].j6;Tv[K].setPackages=Tv[K].AJ;Tv[K].setQuery=Tv[K].Ik;Tv[K].setRefreshInterval=Tv[K].Bn;Tv[K].setView=Tv[K].cD;Tv[K].setOption=Tv[K].K;Lp(Tv[K],Tv[K][zq]);Tv[K].setState=Tv[K].Cc;Tv[K].setCustomRequestHandler=Tv[K].Nva;di("google.visualization.ControlWrapper",Uv,void 0);va(Uv[K],Uv[K][Yb]);aq(Uv[K],Uv[K][br]);Ca(Uv[K],Uv[K][uq]);Uv[K].getSnapshot=Uv[K].ZS;Uv[K].getDataSourceUrl=Uv[K].SU;Uv[K].getDataTable=Uv[K].Va;
Uv[K].getControlName=Uv[K].rva;Uv[K].getControlType=Uv[K].sva;Uv[K].getControl=Uv[K].gT;Uv[K].getContainerId=Uv[K].QU;Uv[K].getPackages=Uv[K].N4;Uv[K].getQuery=Uv[K].ro;Uv[K].getRefreshInterval=Uv[K].TU;Uv[K].getView=Uv[K].UU;Mp(Uv[K],Uv[K][Cq]);Uv[K].getOptions=Uv[K].kd;Pp(Uv[K],Uv[K][Hq]);Uv[K].sendQuery=Uv[K].zS;Uv[K].setDataSourceUrl=Uv[K].Ni;Uv[K].setDataTable=Uv[K].Fh;Uv[K].setControlName=Uv[K].Kva;Uv[K].setControlType=Uv[K].Lva;Uv[K].setContainerId=Uv[K].XU;Uv[K].setPackages=Uv[K].AJ;
Uv[K].setQuery=Uv[K].Ik;Uv[K].setRefreshInterval=Uv[K].Bn;Uv[K].setView=Uv[K].cD;Uv[K].setOption=Uv[K].K;Lp(Uv[K],Uv[K][zq]);Uv[K].setState=Uv[K].Cc;di("google.visualization.DashboardWrapper",gw,void 0);va(gw[K],gw[K][Yb]);aq(gw[K],gw[K][br]);Ca(gw[K],gw[K][uq]);gw[K].getBindings=gw[K].nva;gw[K].getDataSourceUrl=gw[K].SU;gw[K].getDataTable=gw[K].Va;gw[K].getDashboard=gw[K].uva;gw[K].getDashboardName=gw[K].vva;gw[K].getContainerId=gw[K].QU;gw[K].getPackages=gw[K].N4;gw[K].getQuery=gw[K].ro;
gw[K].getRefreshInterval=gw[K].TU;gw[K].getView=gw[K].UU;gw[K].getWrappers=gw[K].yva;gw[K].setBindings=gw[K].Iva;gw[K].setDataSourceUrl=gw[K].Ni;gw[K].setDataTable=gw[K].Fh;gw[K].setDashboardName=gw[K].Pva;gw[K].setContainerId=gw[K].XU;gw[K].setPackages=gw[K].AJ;gw[K].setQuery=gw[K].Ik;gw[K].setRefreshInterval=gw[K].Bn;gw[K].setView=gw[K].cD;gw[K].getSnapshot=gw[K].ZS;gw[K].setWrappers=gw[K].$va;di("google.visualization.data.avg",Ska,void 0);di("google.visualization.data.count",Rka,void 0);di("google.visualization.data.group",nw,void 0);
di("google.visualization.data.join",function(a,b,c,d,e,f){var g=c==ah||c==Lg,k=c==Os||c==Lg,l=new fp,n=[];Z(d,function(c){var d=a.D(c[0]),e=b.D(c[1]);if(d!=e)throw m("Key types do not match:"+d+Se+e);lw(l,a,c[0]);n[C](d)});var p=[],s=[];Z(d,function(a){p[C]({column:a[0]});s[C]({column:a[1]})});var u=a.dp(p),v=b.dp(s);Z(e,function(b){lw(l,a,b)});Z(f,function(a){lw(l,b,a)});for(var z=!1,B=0,D=0,N=0;B<u[J]||D<v[J];){var M=0,R=[];if(D>=v[J])if(g)R[0]=u[B],M=-1;else break;else if(B>=u[J])if(k)R[1]=v[D],
M=1;else break;else{R[0]=u[B];R[1]=v[D];for(var S=0;S<d[J];S++){var M=a[I](R[0],d[S][0]),V=b[I](R[1],d[S][1]),M=hp(n[S],M,V);if(0!=M)break}}if(z&&0!=M)z=!1,D++;else{if(-1==M&&g||1==M&&k||0==M){l.Sq();var ma,Ja;-1==M&&g||0==M&&c!=Os?(ma=a,Ja=0):(ma=b,Ja=1);Z(d,function(a,b){c==Lg?l.Fa(N,b,ma[I](R[Ja],a[Ja])):l.cc(N,b,ma[I](R[Ja],a[Ja]),ma.Ea(R[Ja],a[Ja]),ma.jj(R[Ja],a[Ja]))});if(-1==M&&g||0==M){var Ha=d[J];Z(e,function(b,c){l.cc(N,c+Ha,a[I](R[0],b),a.Ea(R[0],b),a.jj(R[0],b))})}if(1==M&&k||0==M)Ha=
e[J]+d[J],Z(f,function(a,c){l.cc(N,c+Ha,b[I](R[1],a),b.Ea(R[1],a),b.jj(R[1],a))});N++}1==M?D++:B++;0==M&&(z=!0)}}return l},void 0);di("google.visualization.data.max",function(a){if(0==a[J])return null;for(var b=a[0],c=1;c<a[J];c++){var d=a[c];null!=d&&d>b&&(b=d)}return b},void 0);di("google.visualization.data.min",function(a){if(0==a[J])return null;for(var b=a[0],c=1;c<a[J];c++){var d=a[c];null!=d&&d<b&&(b=d)}return b},void 0);di("google.visualization.data.month",function(a){return a[Hd]()+1},void 0);
di("google.visualization.data.sum",mw,void 0);di("__gvizguard__",!0,void 0);di(xha,tu,void 0);tu[K].makeRequest=tu[K].makeRequest;tu[K].setRefreshInterval=tu[K].Bn;tu[K].setQuery=tu[K].Ik;yp(tu[K],tu[K][iq]);tu[K].setRefreshable=tu[K].Vva;tu[K].setTimeout=tu[K][xq];tu[K].setHandlerType=tu[K].Rva;tu[K].setHandlerParameter=tu[K].Pfa;tu.setResponse=xu;Yp(tu[K],tu[K][Xq]);di("google.visualization.CustomQuery",Tu,void 0);yp(Tu[K],Tu[K][iq]);di("google.visualization.QueryResponse",qt,void 0);qt[K].getDataTable=qt[K].Va;qt[K].isError=qt[K].lj;
qt[K].hasWarning=qt[K].l3;qt[K].getReasons=qt[K].pea;qt[K].getMessage=qt[K].zJ;qt[K].getDetailedMessage=qt[K].J2;di("google.visualization.DataTable",fp,void 0);fp[K].addColumn=fp[K].Gg;fp[K].addRow=fp[K].Sq;fp[K].addRows=fp[K].cB;Ia(fp[K],fp[K][Bc]);fp[K].getColumnId=fp[K].Xe;wa(fp[K],fp[K][oq]);fp[K].getColumnLabel=fp[K].Ra;fp[K].getColumnPattern=fp[K].$u;fp[K].getColumnProperty=fp[K].gj;fp[K].getColumnProperties=fp[K].Er;fp[K].getColumnRange=fp[K].Sp;fp[K].getColumnRole=fp[K].mr;
fp[K].getColumnType=fp[K].D;fp[K].getDistinctValues=fp[K].QT;fp[K].getFilteredRows=fp[K].tL;fp[K].getFormattedValue=fp[K].Ea;fp[K].getNumberOfColumns=fp[K].H;fp[K].getNumberOfRows=fp[K].M;fp[K].getProperties=fp[K].jj;fp[K].getProperty=fp[K].hp;fp[K].getRowProperty=fp[K].Mr;fp[K].getRowProperties=fp[K].IK;fp[K].getSortedRows=fp[K].dp;fp[K].getTableProperty=fp[K].xT;fp[K].getTableProperties=fp[K].Fy;fp[K].getUnderlyingTableColumnIndex=fp[K].uT;fp[K].getUnderlyingTableRowIndex=fp[K].sT;gb(fp[K],fp[K][I]);
fp[K].insertColumn=fp[K].pfa;fp[K].insertRows=fp[K].z0;fp[K].removeColumn=fp[K].e4;fp[K].removeColumns=fp[K].pga;fp[K].removeRow=fp[K].sC;fp[K].removeRows=fp[K].qga;fp[K].setCell=fp[K].cc;fp[K].setColumnLabel=fp[K].Jva;fp[K].setColumnProperties=fp[K].lca;fp[K].setColumnProperty=fp[K].Kw;fp[K].setFormattedValue=fp[K].Tx;fp[K].setProperties=fp[K].jw;fp[K].setProperty=fp[K][Ic];fp[K].setRowProperties=fp[K].Wva;fp[K].setRowProperty=fp[K].i6;fp[K].setTableProperties=fp[K].Xva;fp[K].setTableProperty=fp[K].Yva;
fp[K].setValue=fp[K].Fa;ob(fp[K],fp[K][ce]);Ca(fp[K],fp[K][uq]);di("google.visualization.DataView",Mu,void 0);Mu.fromJSON=Nu;Mu[K].getColumnId=Mu[K].Xe;wa(Mu[K],Mu[K][oq]);Mu[K].getColumnLabel=Mu[K].Ra;Mu[K].getColumnPattern=Mu[K].$u;Mu[K].getColumnProperty=Mu[K].gj;Mu[K].getColumnProperty=Mu[K].gj;Mu[K].getColumnProperties=Mu[K].Er;Mu[K].getColumnRange=Mu[K].Sp;Mu[K].getColumnRole=Mu[K].mr;Mu[K].getColumnType=Mu[K].D;Mu[K].getDistinctValues=Mu[K].QT;Mu[K].getFilteredRows=Mu[K].tL;
Mu[K].getFormattedValue=Mu[K].Ea;Mu[K].getNumberOfColumns=Mu[K].H;Mu[K].getNumberOfRows=Mu[K].M;Mu[K].getProperties=Mu[K].jj;Mu[K].getProperty=Mu[K].hp;Mu[K].getRowProperty=Mu[K].Mr;Mu[K].getRowProperties=Mu[K].IK;Mu[K].getSortedRows=Mu[K].dp;Mu[K].getTableColumnIndex=Mu[K].wG;Mu[K].getUnderlyingTableColumnIndex=Mu[K].uT;Mu[K].getTableRowIndex=Mu[K].um;Mu[K].getUnderlyingTableRowIndex=Mu[K].sT;Mu[K].getTableProperty=Mu[K].xT;Mu[K].getTableProperties=Mu[K].Fy;gb(Mu[K],Mu[K][I]);
Mu[K].getViewColumnIndex=Mu[K].vR;Mu[K].getViewColumns=Mu[K].Kaa;Mu[K].getViewRowIndex=Mu[K].OR;Mu[K].getViewRows=Mu[K].sea;Mu[K].hideColumns=Mu[K].zva;Mu[K].hideRows=Mu[K].Ava;Mu[K].setColumns=Mu[K].gr;Mu[K].setRows=Mu[K].Wn;Mu[K].toDataTable=Mu[K].Ex;Ca(Mu[K],Mu[K][uq]);di("google.visualization.errors",st,void 0);st.addError=st.Md;st.removeAll=st.mc;st.removeError=st.Gva;st.addErrorFromQueryResponse=st.gD;st.getContainer=st.pc;st.createProtectedCallback=st.LR;di(yha,Gu,void 0);di(zha,Hu,void 0);
di(Cha,Ju,void 0);di(Bha,Ku,void 0);di(Aha,Lu,void 0);di("google.visualization.QueryWrapper",Su,void 0);Lp(Su[K],Su[K][zq]);aq(Su[K],Su[K][br]);Su[K].setCustomErrorHandler=Su[K].Mva;Su[K].sendAndDraw=Su[K].UD;Su[K].setCustomPostResponseHandler=Su[K].CT;Su[K].setCustomResponseHandler=Su[K].DT;Yp(Su[K],Su[K][Xq]);di("google.visualization.arrayToDataTable",Yfa,void 0);di("google.visualization.datautils.compareValues",hp,void 0);
    di("google.visualization.dataTableToCsv", function (a) {
        for (var b = O, c = 0; c < a.M(); c++) {
            for (var d = 0; d < a.H(); d++) {
                0 < d && (b += Re);
                var e = a.Ea(c, d), e = e[wb](/"/g, wga), f = -1 != e[qd](Re), g = -1 != e[qd](re), k = -1 != e[qd](ue);
                if (f || g || k) e = ue + e + ue;
                b += e
            }
            b += re
        }
        return b
    }, void 0);
    di("google.visualization.GadgetHelper", Cu, void 0);
    Cu[K].createQueryFromPrefs = Cu[K].jva;
    Cu[K].validateResponse = Cu[K].bwa;
    window.google && window.google.loader && window.google.loader.eval && window.google.loader.eval.visualization && (window.google.loader.eval.visualization = function () {
        eval(arguments[0])
    });
    var ow = unescape, pw = escape, qw = setTimeout, rw = navigator;

    function sw(a, b) {
        return a.direction = b
    }

    function tw(a, b) {
        return a.filled = b
    }

    function uw(a, b) {
        return a.weight = b
    }

    function vw(a, b) {
        return a.collapse = b
    }

    function ww(a, b) {
        return a.selected = b
    }

    function xw(a, b) {
        return a.stroked = b
    }

    function yw(a, b) {
        return a.fillcolor = b
    }

    function zw(a, b) {
        return a.select = b
    }

    function Aw(a, b) {
        return a.values = b
    }

    function Bw(a, b) {
        return a.setRadius = b
    }

    function Cw(a, b) {
        return a.setSelection = b
    }

    function Dw(a, b) {
        return a.depth = b
    }
function Ew(a,b){return a.refresh=b}function Fw(a,b){return a.items=b}function Gw(a,b){return a.whiteSpace=b}function Hw(a,b){return a.strokeweight=b}function Iw(a,b){return a.fillStyle=b}function Jw(a,b){return a.setVisible=b}function Kw(a,b){return a.marginWidth=b}function Lw(a,b){return a.cursor=b}function Mw(a,b){return a.size=b}function Nw(a,b){return a.setVisibleChartRange=b}function Ow(a,b){return a.coordorigin=b}function Pw(a,b){return a.style=b}function Qw(a,b){return a.close=b}
function Rw(a,b){return a.ticks=b}function Sw(a,b){return a.getPosition=b}function Tw(a,b){return a.isEnabled=b}function Uw(a,b){return a.range=b}function Vw(a,b){return a.marginHeight=b}function Ww(a,b){return a.coordinates=b}function Xw(a,b){return a.action=b}function Yw(a,b){return a.reset=b}function Zw(a,b){return a.startTime=b}function $w(a,b){return a.node=b}function ax(a,b){return a.lineWidth=b}function bx(a,b){return a.frameBorder=b}function cx(a,b){return a.text=b}
function dx(a,b){return a.annotations=b}function ex(a,b){return a.createCaption=b}function fx(a,b){return a.fontFamily=b}function gx(a,b){return a.value=b}function hx(a,b){return a.move=b}function ix(a,b){return a.strokeStyle=b}function jx(a,b){return a.backgroundColor=b}function kx(a,b){return a.strokecolor=b}function lx(a,b){return a.radius=b}function mx(a,b){return a.children=b}function nx(a,b){return a.scrolling=b}function ox(a,b){return a.orientation=b}
function px(a,b){return a.setContent=b}function qx(a,b){return a.getContent=b}function rx(a,b){return a.visible=b}function sx(a,b){return a.fontWeight=b}function tx(a,b){return a.scrollTop=b}function ux(a,b){return a.endTime=b}function vx(a,b){return a.getColors=b}function wx(a,b){return a.labels=b}function xx(a,b){return a.getSelection=b}function yx(a,b){return a.rect=b}function zx(a,b){return a.disabled=b}function Ax(a,b){return a.textAlign=b}function Bx(a,b){return a.background=b}
function Cx(a,b){return a.fontStyle=b}function Dx(a,b){return a.getId=b}function Ex(a,b){return a.anchor=b}function Fx(a,b){return a.coords=b}function Gx(a,b){return a.coordsize=b}function Hx(a,b){return a.setPosition=b}function Ix(a,b){return a.element=b}function Jx(a,b){return a.update=b}function Kx(a,b){return a.transform=b}function Lx(a,b){return a.debug=b}
var Mx="origin",Nx="order",Ox="direction",Px="shape",Qx="fillColor",Rx="getParent",Sx="center",Tx="classList",Ux="selection",Vx="inRange",Wx="extend",Xx="layout",Yx="selected",Zx="collapsed",$x="geometry",ay="setEnd",by="trim",cy="strokeColor",dy="registerElement",ey="write",gy="definition",jy="fillText",ky="focus",ly="select",my="values",ny="padding",oy="elements",py="moveTo",qy="setSelection",ry="depth",sy="getBounds",ty="datum",uy="offset",vy="items",Jy="contentWindow",Ky="duplicate",Ly="time",
My="caption",Ny="setVisible",Oy="cursor",Py="html",Qy="views",Ry="size",Sy="MapTypeId",Ty="createElementNS",Uy="setVisibleChartRange",Vy="handle",Wy="save",Xy="count",Yy="nodes",Zy="rotate",$y="moveToElementText",az="addListener",bz="close",cz="ticks",dz="parent",ez="dataType",fz="getPosition",gz="isEnabled",hz="range",iz="cells",jz="multiple",kz="fireEvent",lz="coordinates",mz="scale",nz="restore",oz="action",pz="startTime",qz="fillRect",rz="attributes",sz="node",tz="compact",uz="lineWidth",vz="closePath",
wz="Text",xz="isCollapsed",yz="margin",zz="lineTo",Az="icon",Bz="replaceChild",Cz="annotations",Dz="getCenter",Ez="createCaption",Fz="blur",Gz="Rect",Hz="move",Iz="backgroundColor",Jz="domain",Kz="updateOptions",Lz="radius",Mz="equals",Nz="beginPath",Oz="getHeight",Pz="play",Qz="path",Rz="detach",Sz="getContext",Tz="translate",Uz="LN10",Vz="orientation",Wz="setContent",Xz="getContent",Yz="visible",Zz="keys",$z="setActive",aA="strokeRect",bA="frames",cA="setStart",dA="property",eA="getColors",fA="title",
gA="labels",hA="getSelection",iA="duration",jA="scope",kA="rect",lA="then",mA="textAlign",nA="alpha",oA="Circle",pA="background",qA="entries",rA="getId",sA="anchor",tA="moveEnd",uA="coords",vA="compareEndPoints",wA="addColorStop",xA="setPosition",yA="element",zA="contentDocument",AA="axis",BA="update",CA="areas",DA="append",EA="transform",FA="debug",GA="event",Tka="\n M/d",Uka="\n a",Vka="\n yyyy",Wka="\x0B",HA=" (",Xka=" (count)",Yka=" * ",Zka=" + ",IA=" - ",$ka=" - Flash Player Installation",ala=
" / ",bla=" 0 ",JA=" 0 0 1 ",cla=" = ",dla=" [+]",ela=" _loaded = true;",fla=" already defined.",gla=" does not have a domain column.",KA=' id="',hla=" loaded, but verification object ",ila=' onload="CHART_loaded()"',LA=" to ",jla=" was not defined.",kla=' xmlns:svg="http://www.w3.org/2000/svg"',lla=' xmlns:xlink="http://www.w3.org/1999/xlink">',MA='" ',mla='" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="',nla='" height="',ola='" name="',pla='" src="http://www.google.com/ig/ifr?url=',
qla='" style="',NA='" value="',rla='" width="',OA='">',PA='"></div>',sla="#.###",QA="#000",tla="#000020",RA="#00f",SA="#0f0",TA="#109618",UA="#222222",ula="#333",VA="#333333",WA="#3399CC",XA="#434343",YA="#444444",ZA="#666",$A="#666666",vla="#7993ad",wla="#7f9a6b",xla="#8080ff",aB="#994499",bB="#999",cB="#999999",yla="#9bbdde",dB="#CCCCCC",eB="#DC3912",zla="#DDD",fB="#EFE6DC",gB="#FF9900",hB="#FFFFFF",Ala="#a2c488",Bla="#a992ad",Cla="#ad7d79",Dla="#aea971",Ela="#b7b7b7",Fla="#c991ff",iB="#ccc",jB=
"#cccccc",Gla="#cdc785",Hla="#ce9839",Ila="#d2feb0",Jla="#d6b9db",kB="#dc3912",Kla="#dea19b",Lla="#default#VML",lB="#e0e0e0",mB="#eee",Mla="#eeee5b",Nla="#eeeeac",Ola="#eeeeee",nB="#f00",Pla="#ffbc46",Qla="#ffd1c9",Rla="#fff0db",Sla="$1 ",Tla="$version",Ula="%s",Vla="%s's administration (under dispute)",Wla="%s://www.gstatic.com/charts/%s/%s/",Xla="&up_",Yla="&up__table_query_url=",Zla="').send(\n     function(response) {\n      new ",$la="']});\n\n   function drawVisualization() {\n    new google.visualization.Query('",
ama='(\n       document.getElementById(\'visualization\')).\n        draw(response.getDataTable(), null);\n      });\n   }\n\n   google.setOnLoadCallback(drawVisualization);\n  \x3c/script>\n </head>\n <body>\n  <div id="visualization" style="width: 500px; height: 500px;"></div>\n </body>\n</html>',bma=") translate(",cma=",0,",dma="--",ema="-10000px",fma="-1000px",gma="-active",hma="-bg",ima="-buttons",oB="-caption",jma="-checkbox",kma="-checked",lma="-collapse-left",mma="-collapse-right",pB="-content",
qB="-default",rB="-disabled",sB="-dropdown",nma="-focused",oma="-highlight",pma="-horizontal",qma="-hover",tB="-inner-box",rma="-mag",sma="-open",uB="-outer-box",tma="-rtl",uma="-selected",vma="-title",wma="-title-close",xma="-title-draggable",yma="-title-text",zma="-unchecked",Ama="-undetermined",Bma="-vertical",Cma="-webkit-user-select:none;",Dma="../../shapes/rect-util",Ema="../../shapes/shapes",vB="./abstract_shape",wB="./circle",xB="./ellipse",Fma="./group",yB="./line",zB="./path",Gma="./path-util",
AB="./rect",Hma="./shapes",BB="./svg-util",CB="./text",Ima=".annotations.",Jma=".gif",Kma=".gradient.from",Lma=".gradient.to",Mma=".gradient.x1",Nma=".gradient.x2",Oma=".gradient.y1",Pma=".gradient.y2",Qma=".js",Rma=".lbl",Sma=".offset",Tma=".style",Uma=".type",Vma="//chart.googleapis.com/chart",Wma="/>",Xma="/core/patterns/",DB="/core/tooltip.css",EB="0 0",Yma="0 0 4 4",FB="0%",Zma="0.###E0",$ma="1.8",ana="1/",GB="100%",bna="12pt Times New Roman",HB="15px",IB="1e12",JB="1px",cna="1px solid infotext",
KB="2",dna="200px",LB="2d",MB="4",ena="420+",fna="49.99%",gna="5.5",hna="50%",ina="525",jna="531",kna="532.0",lna="533.17.9",NB="6",OB="7",mna="808080",nna="9.0",ona="90%",PB=": ",pna=":m",QB=":mm",qna=":|",rna=";color: #333333;margin:0;font-style:",sna=";font-weight:",tna=";height:",una=";overflow-y:",vna=";stop-opacity:",wna=";text-decoration:",xna=";width:",yna="< ",RB="</body>",SB="</div>",TB="</head>",UB="</html>",VB="</li>",zna="</object>",Ana="\x3c/script>",WB="</span>",XB="</td>",Bna="</th>",
Cna="</tr>\n",Dna='<?xml version="1.0"?>',Ena='<body marginwidth="0" marginheight="0"',Fna="<default>",Gna='<div id="chartArea"></div>',Hna='<div id="renderers"></div>',Ina='<embed type="application/x-shockwave-flash" src="',YB="<head>",Jna='<html xmlns:v="urn:schemas-microsoft-com:vml">',Kna='<html xmlns="http://www.w3.org/1999/xhtml"',Lna='<html>\n <head>\n  <title>Google Visualization API</title>\n  <script type="text/javascript" src="http://www.google.com/jsapi">\x3c/script>\n  <script type="text/javascript">\n   google.load(\'visualization\', \'1\', {packages: [\'',
Mna='<iframe style="',Nna='<object id="',Ona='<param name="',Pna='<param name="flashvars" value="',Qna='<param name="movie" value="',Rna='<script type="text/javascript">',Sna='<span style="color:',ZB="<style> v\\:* { behavior:url(#default#VML);}</style>",$B="<td>",Tna="<th>",aC='="',bC="A ",Una="A chart.",Vna="A tabular representation of the data in the chart.",eC="AT",Wna="AbstractStatsModel",Xna="ActiveX",Yna="Add to iGoogle",Zna="All data columns of the same series must be of the same data type",
$na="All domains must be of the same data type",fC="Area",gC="Arial",aoa="B",hC="BACKGROUND",boa="BODY",iC="Bars",coa="Billion",jC="C",kC="CELL",lC="COLUMN",doa="COLUMN_INDEX",mC="COM",CC="COUNTRIES",eoa="Cancel",foa="Chart options",goa="Circle",hoa="Click",ioa="Click to expand annotations",joa="Close",koa="Color",DC="Columns",EC="Component already rendered",loa="Const{",moa="Copy-Paste this code to an HTML page",noa="Current: ",ooa="DOMMouseScroll",poa="Data has no columns.",qoa="Data must contain at least two columns.",
FC="Data table is not defined",roa="DblClick",soa="Drawing_Frame_",toa="Each values column may be followed by one or two annotation columns. column number ",uoa="Ellipse",GC="End",voa="EndToEnd",woa="Error while loading script ",xoa="Export data as CSV",yoa="Export data as HTML",zoa='Failed geocoding "',Aoa="First column must be a domain column",Boa="First column must contain date, or date and time.",Coa="GVIZARC ",Doa="GViz is Great.",Eoa="Geocoding failed for all data points",Foa="Google Visualization",
Goa="Google_Visualization",Hoa="Group",Ioa="HEAD",Joa="HH:mm MMMM dd, yyyy",Koa="HH:mm:ss",Loa="HH:mm:ss.SSS",Moa="HTML",Noa="HoverIn",Ooa="HoverOut",Poa="Items",Qoa="Javascript code",Roa="Jsloader error (code #",Soa="L ",HC="LI",Toa="Last domain does not have enough data columns (missing ",IC="Line",JC="Lines",Uoa="M ",Voa="METROS",KC="MMM",LC="MMMM dd, yyyy",Woa="Million",Xoa="MouseDown",Yoa="MouseUp",MC="No data",Zoa="No datatable provided.",$oa="OK",apa="Only one data column with role 'tooltip' per series is allowed",
bpa="Other",cpa="PROVINCES",dpa="Path",NC="Pie",epa="PlugIn",fpa="Previous data",gpa="Previous: ",hpa="Promise cannot resolve to itself",ipa="Publish to web page",jpa="Quadrillion",kpa="REGIONS",OC="ROW",PC="ROW_INDEX",lpa="Rect",mpa="Requested map does not exist.",npa="RightClick",opa="SU",ppa="SUBREGIONS",QC="SUBTYPE",RC="Scatter",qpa="Script ",rpa="Scroll",spa="Shape does not exist in this group.",tpa="Shockwave Flash",upa="ShockwaveFlash.ShockwaveFlash",vpa="ShockwaveFlash.ShockwaveFlash.",wpa=
"ShockwaveFlash.ShockwaveFlash.6",xpa="ShockwaveFlash.ShockwaveFlash.7",ypa="SourceAlpha",zpa="SourceGraphic",SC="Start",Apa="Start and end points must be 2D",Bpa="StartToEnd",Cpa="StartToStart",TC="TD",UC="Text",Dpa="The columns type does not match the supported data format. See documentation for supported formats.",Epa="The visualization is not ready yet.",Fpa="Timeout reached for loading script ",VC="To",Gpa="Trendline ",Hpa="Trillion",Ipa="UK",Jpa="UL",WC="US",XC="US-",Kpa="UTF-8",Lpa="Unable to set parent component",
Mpa="Unexpected domain column (column #",Npa="Unknown granularity.",YC="Value",Opa="Verification object ",Ppa="WA",Qpa="Windows CE",ZC="X",Rpa="Y",Spa="Your browser does not support charts",$C="_",Tpa="_ABSTRACT_RENDERER_ID_",Upa="__",Vpa="__DISPUTED__",Wpa="__DISPUTED__All",Xpa="__internal_",Ypa="_callbacks_.",aD="_focusedLabels",bD="_selectedLabels",Zpa="_trendline",$pa="charts-button",aqa="charts-checkbox",bqa="charts-container",cqa="charts-control",
dqa="charts-custom-button",eqa="charts-flat-button",cD="charts-inline-block",dD="charts-inline-block ",fqa="charts-link-button",eD="charts-menu",gqa="charts-menu-button",hqa="charts-menuheader",iqa="charts-menuitem",jqa="charts-menuitem-accel",kqa="charts-menuitem-mnemonic-separator",fD="charts-menuseparator",lqa="charts-modalpopup",
gD="charts-option",mqa="charts-option-selected",nqa="charts-select",oqa="charts-serverchart-image",pqa="charts-slider-disabled",qqa="charts-slider-dragging",rqa="charts-slider-thumb-dragging",hD="action",sqa="actionsMenu.disabledTextStyle",tqa="actionsMenu.textStyle",uqa="actionsMenuEntry",vqa="actionsMenuEntryClick",wqa="actionsMenuEntryHoverIn",xqa="actionsMenuEntryHoverOut",yqa="activate",iD="activedescendant",
jD="add",zqa="additions text",Aqa="ae",Bqa="afterhide",Cqa="aftershow",Dqa="aggregationTarget",kD="allValuesSuffix",Eqa="allowContainerBoundaryTextCufoff",lD="always",Fqa="alwaysOutside",Gqa="angle",Hqa="animate",mD="animation",nD="animation.duration",Iqa="animation.easing",Jqa="animation.maxFramesPerSecond",Kqa="animationEasing",Lqa="animationfinish",Mqa="animationframefinish",oD="annotation",Nqa="annotation.",Oqa="annotationClick",Pqa="annotationHoverIn",Qqa="annotationHoverOut",Rqa="annotations.alwaysOutside",
Sqa="annotations.boxStyle",Tqa="annotations.datum.alwaysOutside",Uqa="annotations.datum.boxStyle",Vqa="annotations.datum.highContrast",Wqa="annotations.datum.stemColor",Xqa="annotations.datum.stemLength",Yqa="annotations.datum.style",Zqa="annotations.datum.textStyle",$qa="annotations.domain.boxStyle",ara="annotations.domain.stemColor",bra="annotations.domain.stemLength",cra="annotations.domain.style",dra="annotations.domain.textStyle",era="annotations.highContrast",fra="annotations.stemColor",gra=
"annotations.stemLength",hra="annotations.style",pD="annotations.textStyle",qD="annotationtext",ira="antialiased",jra="any",rD="arc",sD="area",kra="area.",tD="areaOpacity",lra="aria-activedescendant",uD="aria-hidden",vD="aria-label",wD="arial",mra="attachToEnd",nra="attachToStart",xD="axis",ora="axisBackgroundColor",pra="axisLabelFormatter",qra="axisTitlesPosition",rra="axistick",yD="background",sra="background-color",zD="backgroundColor",AD="backgroundColor.fill",tra="bar.",ura="barWidth",BD="bars",
CD="baseline",DD="baselineColor",ED="beforedrag",FD="beforehide",GD="beforeshow",vra="begin",wra="bfbfbf",xra="bg",HD="bhg",ID="bhs",JD="black",KD="blue",LD="blur",MD="bold",yra="bold ",ND="border",OD="border-box",zra="border:0;vertical-align:bottom;",PD="bottom",QD="bottom-space",RD="bottom-vert",SD="bottom_left",Ara="bound",TD="bounds",UD="box",Bra="boxStyle",Cra="boxWidth",Dra="boxes",VD="br",WD="bubble",Era="bubble.opacity",Fra="bubble.stroke",Gra="bubble.textStyle",XD="bubbles",YD="button",ZD=
"bvg",$D="bvs",Hra="callImmediate",Ira="callback",aE="cancel",bE="candlestick",Jra="candlestick.fallingColor",Kra="candlestick.hollowIsRising",Lra="candlestick.risingColor",cE="candlesticks",dE="canvas",eE="category",Mra="categoryClick",Nra="categoryHoverIn",Ora="categoryHoverOut",fE="categorypoint",gE="categorysensitivityarea",Pra="cccccc",hE="cell",iE="center",Qra="centerSelectionAroundData",jE="change",kE="character",lE="chartArea",mE="chartArea.backgroundColor",nE="chartArea.height",oE="chartArea.left",
pE="chartArea.top",qE="chartArea.width",Rra="chartClick",Sra="chartDblClick",Tra="chartDrag",Ura="chartDragEnd",Vra="chartDragStart",Wra="chartHoverIn",Xra="chartHoverOut",Yra="chartMouseDown",Zra="chartMouseMove",$ra="chartMouseUp",asa="chartOptions",bsa="chartPinch",csa="chartPinchEnd",dsa="chartPinchStart",esa="chartRightClick",fsa="chartScroll",rE="chartType",sE="chartarea",gsa="charteditor",tE="chco",hsa="chd",isa="chdl",jsa="check",uE="checkbox",vE="checked",ksa="chf",lsa="chl",msa="chld",wE=
"chs",xE="cht",nsa="chtt",osa="chxl",psa="chxt",yE="circle",zE="classdef",qsa="clear",AE="clip-path",rsa="clip.height",ssa="clip.width",tsa="clip.x",usa="clip.y",vsa="clipPath",BE="clipped",wsa="clone",CE="close",DE="closedPhase",EE="col-resize",xsa="collapse",FE="color",ysa="color2",zsa="colorAxis.colors",Asa="colorAxis.legend.numberFormat",Bsa="colorAxis.legend.position",Csa="colorAxis.legend.textStyle",Dsa="colorAxis.maxValue",Esa="colorAxis.minValue",Fsa="colorAxis.values",Gsa="colorAxis.values must not contain nulls",
GE="colorBar",Hsa="colorbar",HE="colors",Isa="columns",Jsa="connectSteps",IE="contextmenu",Ksa="continents",JE="corners.bottomleft.rx",KE="corners.bottomleft.ry",LE="corners.bottomright.rx",ME="corners.bottomright.ry",NE="corners.rx",OE="corners.ry",PE="corners.topleft.rx",QE="corners.topleft.ry",RE="corners.topright.rx",SE="corners.topright.ry",TE="countries",Lsa="countries_en",Msa="country",Nsa="crosshair.color",Osa="crosshair.focused.color",Psa="crosshair.focused.opacity",Qsa="crosshair.focused.orientation",
Rsa="crosshair.opacity",Ssa="crosshair.orientation",Tsa="crosshair.selected.color",Usa="crosshair.selected.opacity",Vsa="crosshair.selected.orientation",Wsa="crosshair.trigger",Xsa="csv",Ysa="cursor:default;-webkit-user-select:none;-moz-osx-font-smoothing:grayscale;",UE="curve",VE="curveType",Zsa="cut",WE="cx",XE="cy",YE="dash",$sa="dataOpacity",ata="datalessRegionColor",ZE="dateFormat",$E="datum",bta="datumClick",cta="datumHoverIn",dta="datumHoverOut",eta="days",aF="dblclick",fta="deactivate",gta=
"debug",bF="default",hta="defaultColor",cF="defs",ita="degree",jta="destroy",kta="detectflash",dF="dialogselect",lta="diamond",eF="diff.newData.opacity",mta="diff.newData.tooltip.prefix",nta="diff.newData.widthFactor",ota="diff.oldData.color",fF="diff.oldData.opacity",pta="diff.oldData.tooltip.prefix",gF="disable",qta="disabled",rta="display:table-cell;padding: 0;margin: 0;border: 0",sta="display:table;position:absolute;padding:0;margin:0;border:0",tta="displayAnnotations",uta="displayDateBarSeparator",
vta="displayLegendDots",wta="displayLegendValues",xta="displayMode",hF="displayRangeSelector",yta="displayZoomButtons",zta="disputed",iF="dive",jF="doExpressInstall",Ata="down",kF="drag",Bta="dragToPan",Cta="dragToZoom",Dta="dragend",Eta="dragstart",Fta="drawCircle",Gta="drawEllipse",Hta="drawLine",Ita="drawRect",Jta="drawShape",Kta="drawText",Lta="drop",lF="dx",mF="dy",nF="e",Mta="earlycancel",Nta="easing",Ota="elaborated",Pta="elaborated.isDisputed",Qta="elaborated.origin.x",Rta="elaborated.origin.y",
Sta="elaborated.rowId",oF="ellipse",Tta="empty",pF="en",qF="enable",rF="enableInteractivity",Uta="enableRegionInteractivity",Vta="enableScrollWheel",sF="end",tF="enter",Wta="expanded",uF="explicit",vF="explorer",wF="explorer.actions",Xta="explorer.axis",Yta="explorer.axis.",Zta="explorer.keepInBounds",$ta="explorer.maxZoomIn",aua="explorer.maxZoomOut",bua="explorer.zoomDelta",cua="feComponentTransfer",dua="feFuncA",eua="feGaussianBlur",fua="feMerge",xF="feMergeNode",gua="feOffset",yF="feature",zF=
"featureClick",AF="featureHover",BF="featureMove",CF="fgrid",hua="file:",DF="fill",EF="fill-opacity",FF="fill.color",iua="fill.opacity",jua="fillColor",kua="fillOpacity",GF="finish",HF="finishAnimation",lua="firstVisibleText",mua="fixedRangeSize",nua='flashvars="',IF="focusTarget",oua="focusedFeature",pua="focusedMarker",qua="font-family",rua="font-family:",sua="font-size",JF="font-style",KF="font-weight",tua="font.family",uua="font.size",vua="font.weight",LF="fontColor",wua="fontFamily",MF="fontName",
NF="fontSize",xua="fontWeight",OF="forceIFrame",PF="format",yua="formatOptions",QF="formatOptions.prefix",RF="formatOptions.scaleFactor",SF="formatOptions.suffix",zua="formatter.numDecimals",Aua="formatter.numSignificantDigits",Bua="formatter.unit",Cua="formatter.useMagnitudes",Dua="function CHART_loaded() {",Eua="g_vml_",Fua="g_vml_:",Gua="g_vml_\\:*{behavior:url(#default#VML)}",Hua="geocodingContext",TF="get",UF="getcontext",Iua="goog_",Jua="google-visualization-toolbar-big-dialog",Kua="google-visualization-toolbar-html-code-explanation",
Lua="google-visualization-toolbar-small-dialog",VF="google-visualization-tooltip",Mua="google-visualization-tooltip-action",Nua="google-visualization-tooltip-action-list",Oua="google-visualization-tooltip-item",Pua="google-visualization-tooltip-item-list",Qua="google-visualization-tooltip-separator",Rua="google-visualization-tooltip-square",Sua="google.visualization.AreaChart",Tua="google.visualization.BarChart",Uua="google.visualization.ColumnChart",Vua="google.visualization.LineChart",Wua="google.visualization.PieChart",
Xua="google.visualization.ScatterChart",Yua="google_visualization_geochart_",Zua="google_visualization_geochart_boundingBoxes",$ua="google_visualization_geochart_mapList",WF="gradient",ava="gradientUnits",bva="green",XF="grid",cva="gridline",YF="gridlineColor",dva="gridlines.allowMinor",ZF="gridlines.color",$F="gridlines.count",eva="gridlines.minMajorTextDistance",fva="gridlines.minMinorTextDistance",gva="gridlines.minNotchDistance",hva="gridlines.minStrongLineDistance",iva="gridlines.minStrongToWeakLineDistance",
jva="gridlines.minWeakLineDistance",kva="gridlines.minorGridlineOpacity",lva="gridlines.minorTextOpacity",mva="gridlines.newTimeline",nva="gridlines.unitThreshold",ova="gridlines.units.",aG="group",pva="hAxes.",bG="hAxis",qva="hAxis#",cG="halign",dG="haspopup",eG="headerColor",fG="headerHeight",rva="heading",sva="height:",gG="hide",hG="high",tva="highContrast",iG="highlight",jG="histogram",uva="histogram.bucketSize",kG="histogram.hideBucketItems",vva="histogram.lastBucketPercentile",wva="histogram.maxBucketNumber",
xva="histogram.minBucketNumber",yva="histogram.sortBucketItems",zva="histogramBucketItems",Ava="histogramBuckets",Bva="histogramElementIndexes",Cva="hover",lG="hoverIn",mG="hoverOut",Dva="htmlcode",Eva="http:",Fva="http://www.google.com/ig/adde?moduleurl=",Gva="http://www.w3.org/1999/xlink",nG="http://www.w3.org/2000/svg",oG="https:",pG="hybrid",qG="id",Hva="identifier",rG="iframe",Iva="igoogle",Jva="image",Kva="image/png",Lva="image/svg+xml",sG="in",tG="inAndOut",Mva="inTextPosition",Nva="info/boundingBoxes.js",
Ova="info/mapList.js",Pva="infobackground",uG="input",vG="inside",Qva="interactivityModel",wG="interpolateNulls",xG="interval",Rva="interval.",Sva="intervals.",yG="is3D",Tva="isDiff",Uva="isRtl",zG="isStacked",AG="italic",Vva="italic ",Wva='javascript:""',Xva="jscode",Yva="kavrayskiy-vii",Zva="keepAspectRatio",BG="key",CG="keydown",DG="keyup",EG="l",FG="label",GG="labelInLegend",HG="labeled",IG="labelledby",$va="leave",JG="legend",KG="legend.alignment",awa="legend.bar.length",bwa="legend.maxLines",
cwa="legend.newLegend",dwa="legend.numberFormat",ewa="legend.orientation",fwa="legend.pagingTextStyle",LG="legend.position",gwa="legend.scrollArrows.activeColor",hwa="legend.scrollArrows.inactiveColor",iwa="legend.scrollArrows.orientation",jwa="legend.showPageIndex",MG="legend.textStyle",kwa="legendEntry",lwa="legendEntryClick",mwa="legendEntryHoverIn",nwa="legendEntryHoverOut",owa="legendFontSize",pwa="legendScrollButton",qwa="legendScrollButtonClick",rwa="legendTextColor",NG="legendTextStyle",OG=
"legendentry",PG="legendscrollbutton",QG="letter",RG="li",SG="line",swa="line-spacing",TG="line.",twa="lineColor",uwa="lineDashStyle",vwa="lineSize",wwa="lineSpacing",xwa="lineWeight",UG="lineWidth",VG="linear",WG="linearGradient",XG="links",ywa="listbox",zwa="load",Awa="loaded",YG="log",ZG="logScale",Bwa="logScaleX",Cwa="losecapture",Dwa="low",$G="ltr",Ewa="magnifyingGlass.enable",Fwa="magnifyingGlass.zoomFactor",aH="magnifyingGlassBorder",bH="magnifyingGlassTriangle",Gwa="majorAxisTextColor",Hwa=
"mapLoaded",cH="mapType",Iwa="mapfiles/%s.js",dH="marker",Jwa="marker.style.stroke",Kwa="marker.style.stroke.color",Lwa="marker.style.stroke.width",eH="markerClick",fH="markerHover",Mwa="markerMove",Nwa="markerOpacity",gH="math",Owa="matrix(",yH="max",zH="max-width",Pwa="maxAlternation",AH="maxColor",Qwa="maxColorValue",BH="maxDepth",Rwa="maxTextLines",CH="maximized",Swa="menu",Twa="menuitem",Uwa="menuitemcheckbox",Vwa="menuitemradio",DH="mercator",Wwa="meta",EH="metros",FH="midColor",GH="middle",
HH="min",IH="minColor",Xwa="minColorValue",Ywa="minRangeSize",Zwa="minTextSpacing",$wa="minorAxisTextColor",JH="minorGridlines.color",axa="minorGridlines.count",bxa="minorGridlines.units.",KH="mirrorLog",LH="mixed",cxa="modal-dialog",MH="month",NH="mouseenter",OH="mouseleave",PH="mousemove",QH="mouseup",RH="mousewheel",SH="move",TH="move_offscreen",UH="name",VH="natural",WH="no",dxa="nodeType",XH="normal",exa="notime",YH="nowrap",fxa="objectBoundingBox",gxa="ocean",ZH="off",$H="offset",aI="ok",bI=
"old-data",hxa="onmousedown",cI="onmousemove",dI="onmouseout",eI="onmouseover",ixa="onmouseup",jxa="onreadystatechange",kxa="onunload",lxa="opacity2",fI="opaque",gI="open",mxa="optimizeQuality",hI="option",iI="orientation",jI="out",nxa="out:csv;",oxa="out:html;",pxa="outTextPosition",kI="outside",qxa="oval",rxa="overflow:auto;position:absolute;top:0;width:100px;height:100px",sxa="overflow:hidden;position:relative;width:",txa="overflowX",uxa="overlaybox",lI="owns",mI="p",vxa="p3",wxa="package",xxa=
"paste",nI="path",yxa="pathinterval",zxa="patternUnits",Axa="pc",oI="percentage",Bxa="phase",pI="pie",qI="piecewiseLinear",Cxa="pinchToZoom",Dxa="pixelsPerLabel",Exa="placeholder",rI="play",Fxa="playAnimation",sI="point",Gxa="point.",Hxa="point.shape",Ixa="point.size",Jxa="point.visible",Kxa="pointShape",tI="pointSize",uI="pointer",vI="points",wI="pointsensitivityarea",xI="polygon",Lxa="posinset",Mxa="position:absolute;display:none;",Nxa="position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden",
Oxa="position:relative;overflow:hidden",Pxa="pre",Qxa="preserveAspectRatio",Rxa="pressed",yI="pretty",zI="primarydiagonalstripes",Sxa="projection",Txa="propertychange",AI="provinces",Uxa="pt",Vxa="purple",Wxa="px ",BI="px;",Xxa="px;overflow-x:",Yxa="px;position: absolute;top:0;left:0;",Zxa="quadtree",$xa="rabl",aya="rabl-use-parent",bya="rablclip",cya="rablgradient",dya="rablshadow",CI="range",eya="rangeChangeEventFiringRate",DI="rangechange",EI="rect",fya="rect(",gya="red",FI="redirectUrl",GI="redraw",
HI="region",hya="regionClick",II="remove",iya="removeSerieButton",jya="removeSerieButtonClick",kya="removeSerieButtonHoverIn",lya="removeSerieButtonHoverOut",mya="removeShape",nya="removeserie",oya="removeseriebutton",pya="renderers",JI="renderers/abstract/abstractrenderer",qya="renderers/canvas/canvas",rya="renderers/canvas/circle",sya="renderers/canvas/ellipse",tya="renderers/canvas/line",uya="renderers/canvas/path",vya="renderers/canvas/rect",wya="renderers/canvas/shapes",xya="renderers/canvas/text",
yya="renderers/svg/circle",zya="renderers/svg/ellipse",Aya="renderers/svg/group",Bya="renderers/svg/line",Cya="renderers/svg/path",Dya="renderers/svg/path-util",Eya="renderers/svg/rect",Fya="renderers/svg/shapes",Gya="renderers/svg/svg",Hya="renderers/svg/svg-util",Iya="renderers/svg/text",Jya="repeat",Kya="reset",KI="resize",LI="resolution",Lya="resume",Mya="reverse",Nya="reverseAxis",MI="reverseCategories",Oya="rgb(",Pya="rgba(",NI="rgba(0,0,0,0)",OI="right-space",Qya="rightClickToReset",PI="rightclick",
QI="rotate",RI="rotate(",SI="row",Rya="row-resize",TI="rowlabels",UI="rows",VI="rx",WI="ry",XI="sans-serif",Sya="scale(",YI="scaleType",ZI="scatter",$I="screen",aJ="scroll",Tya="scrollToZoom",Uya="secondarydiagonalstripes",bJ="selected",cJ="selectedRows",dJ="selectionMode",eJ="separator",Vya="serie",Wya="serieClick",Xya="serieHoverIn",Yya="serieHoverOut",fJ="series",gJ="series-color",hJ="series-color-dark",Zya="series-color-light",iJ="series.",$ya="series.0.enableInteractivity",aza="seriesType",jJ=
"set",bza="setsize",kJ="shadow.opacity",lJ="shadow.radius",cza="shadow.x-offset",dza="shadow.xOffset",mJ="shadow.xoffset",eza="shadow.y-offset",fza="shadow.yOffset",nJ="shadow.yoffset",oJ="shape",gza="shapes/abstract_shape",hza="shapes/circle",iza="shapes/ellipse",jza="shapes/group",kza="shapes/line",lza="shapes/path",mza="shapes/rect",nza="shapes/rect-util",pJ="shapes/shapes",oza="shapes/text",pza="shortBarWidth",qza="shortdash",rza="shouldHighlightSelection",qJ="show",sza="showChartButtons",tza=
"showGeocodeWarnings",rJ="showLine",uza="showR2",vza="showRemoveSeriesButton",wza="showScale",xza="showSidePanel",yza="showTextEvery",zza="showTextEveryMode",sJ="showTip",tJ="showTooltips",Aza="sideScreenColor",Bza="sizeAxis.logScale",Cza="sizeAxis.maxSize",Dza="sizeAxis.maxValue",Eza="sizeAxis.minSize",Fza="sizeAxis.minValue",Gza="sizeAxis.scaleType",Hza="slantedText",Iza="slantedTextAngle",uJ="slider",Jza="slope",vJ="smoothingFactor",Kza="snapToData",Lza="sortBubblesBySize",Mza="sparkline",wJ="square",
xJ="src",yJ="stack",Nza="stageShape",zJ="star",AJ="start",Oza="state",eAa="stdDeviation",fAa="stemColor",gAa="stemLength",BJ="step",CJ="steppedArea",DJ="steppedareabar",hAa="sticks",EJ="stop",iAa="stop-color",FJ="stop-color:",GJ="stroke",jAa="stroke-dasharray",kAa="stroke-linecap",HJ="stroke-opacity",IJ="stroke-width",JJ="stroke.color",lAa="stroke.opacity",mAa="stroke.width",nAa="strokeColor",oAa="strokeOpacity",pAa="strokeWidth",qAa="subcontinents",rAa="submit",KJ="svg",LJ="swf",MJ="t",sAa="targetAxes.",
NJ="targetAxisIndex",OJ="tbody",PJ="td",QJ="text-anchor",tAa="text-decoration",uAa="textColor",vAa="textFontSize",wAa="textPosition",RJ="textStyle",xAa="textpath",SJ="textpathok",yAa="thickness",zAa="tickScoringWeights",AAa="ticklines",TJ="ticks",BAa="timeGranularity",UJ="title",CAa="titleColor",VJ="titleFontSize",DAa="titlePosition",WJ="titleTextStyle",EAa="titleX",XJ="titleY",YJ="toggle_display",FAa="tooltip.ignoreBounds",GAa="tooltip.isHtml",HAa="tooltip.pivot.x",IAa="tooltip.pivot.y",JAa="tooltip.showColorCode",
KAa="tooltip.showDisputedText",LAa="tooltip.showEmpty",MAa="tooltip.showTitle",NAa="tooltip.textStyle",ZJ="tooltip.trigger",OAa="tooltipFontSize",PAa="tooltipHoverIn",QAa="tooltipHoverOut",RAa="tooltipText",SAa="tooltipTextColor",TAa="tooltipTextStyle",UAa="tooltipTrigger",$J="top",aK="top-space",bK="top_left",VAa="top_right",WAa="touchcancel",XAa="touchend",YAa="touchmove",cK="touchstart",ZAa="tqx",dK="tr",$Aa="track",aBa="translate(",bBa="trendlines.",cBa="triangle",dBa="trigger",eBa="tspan",fBa=
"type_error:Const",gBa="type_error:SafeHtml",eK="ul",hBa="unbound",iBa="uncheck",fK="underline",gK="unhighlight",jBa="unselect",kBa="up",lBa="uritoolong",mBa="url(",hK="url(#",iK="urn:schemas-microsoft-com:vml",nBa="useExpressInstall",oBa="useLargeControl",pBa="useMapTypeControl",jK="userSpaceOnUse",kK="v-text-align",lK="v:fill",qBa="v:group",mK="v:oval",nK="v:path",rBa="v:rect",oK="v:shape",sBa="v:stroke",tBa="v:textpath",pK="vAxes",uBa="vAxes.",vBa="vAxis#",qK="valign",wBa="value-and-percentage",
xBa="valueFormatter",yBa="valuemax",zBa="valuemin",ABa="valuenow",BBa="valuetext",CBa="var _loaded = false;",rK="version",sK="viewBox",tK="viewWindow.max",uK="viewWindow.min",DBa="viewWindow.numericMax",EBa="viewWindow.numericMin",vK="viewWindowMode",wK="visibleInLegend",xK="width: ",FBa="width: 700px; height: 500px;",GBa="width:100px;height:100px;overflow:scroll;position:absolute;visibility:hidden;",yK="wordtree",zK="world",AK="x",BK="x1",CK="x2",HBa="xiRedirectUrl",DK="y1",EK="y2",IBa="year",JBa=
        "yyyy", KBa = "zOrder", FK = "zSoyz", LBa = "zoomAroundSelection", MBa = "zoomLevel", GK = "{}", NBa = "\u00b0",
    OBa = "\u25bc";

    function HK(a, b) {
        var c = b || PBa;
        return function () {
            var b = this || bi, b = b.closure_memoize_cache_ || (b.closure_memoize_cache_ = {}),
                e = c(ti(a), arguments);
            return b[zc](e) ? b[e] : b[e] = a[Sc](this, arguments)
        }
    }

    function PBa(a, b) {
        for (var c = [a], d = b[J] - 1; 0 <= d; --d)c[C](typeof b[d], b[d]);
        return c[me](Wka)
    }

    var QBa = kk([sD, "base", VD, "col", "command", "embed", "hr", xs, uG, "keygen", bh, Wwa, "param", "source", $Aa, "wbr"]);
    var RBa = /<[^>]*>|&[^;]+;/g;

    function IK(a, b) {
        return b ? a[wb](RBa, O) : a
    }

    var SBa = /[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]/,
        TBa = /^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]/,
        UBa = /^http:\/\/.*/,
        VBa = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Arab|Hebr|Thaa|Nkoo|Tfng))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;

    function JK() {
        return VBa[hd](po(gsa) || pF)
    }

    var WBa = /\s+/, XBa = /\d/;

    function YBa(a, b) {
        for (var c = 0, d = 0, e = !1, f = IK(a, b)[rc](WBa), g = 0; g < f[J]; g++) {
            var k = f[g];
            TBa[hd](IK(k, void 0)) ? (c++, d++) : UBa[hd](k) ? e = !0 : SBa[hd](IK(k, void 0)) ? d++ : XBa[hd](k) && (e = !0)
        }
        return 0 == d ? e ? 1 : 0 : .4 < c / d ? -1 : 1
    }

    function KK() {
        this.D4 = O;
        this.aua = ZBa
    }

    KK[K].BU = !0;
    KK[K].zU = function () {
        return this.D4
    };
    Aa(KK[K], function () {
        return loa + this.D4 + Zh
    });
    function $Ba(a) {
        return a instanceof KK && a[uc] === KK && a.aua === ZBa ? a.D4 : fBa
    }

    var ZBa = {};

    function LK() {
        this.d4 = O;
        this.gta = aCa
    }

    LK[K].BU = !0;
    var aCa = {};
    LK[K].zU = function () {
        return this.d4
    };
    function bCa(a) {
        var b = new LK;
        b.d4 = a;
        return b
    }

    var cCa = bCa(O), dCa = /^[-.%_!# a-zA-Z0-9]+$/;

    function MK() {
        this.CE = O;
        this.hta = eCa
    }

    MK[K].BU = !0;
    MK[K].zU = function () {
        return this.CE
    };
    MK[K].tfa = !0;
    MK[K].rz = function () {
        return 1
    };
    var eCa = {};

    function NK() {
        this.CE = O;
        this.Lta = fCa;
        this.Bfa = null
    }

    NK[K].tfa = !0;
    NK[K].rz = function () {
        return this.Bfa
    };
    NK[K].BU = !0;
    NK[K].zU = function () {
        return this.CE
    };
    function OK(a) {
        return a instanceof NK && a[uc] === NK && a.Lta === fCa ? a.CE : gBa
    }

    function PK(a) {
        if (a instanceof NK)return a;
        var b = null;
        a.tfa && (b = a.rz());
        return QK(Ei(a.BU ? a.zU() : String(a)), b)
    }

    var gCa = /^[a-zA-Z0-9-]+$/, hCa = kk(hD, "cite", ks, "formaction", Ug, "manifest", "poster", xJ),
        iCa = kk(bh, yh, Fh);

    function jCa(a) {
        function b(a) {
            ki(a) ? Z(a, b) : (a = PK(a), d += OK(a), a = a.rz(), 0 == c ? c = a : 0 != a && c != a && (c = null))
        }

        var c = 0, d = O;
        Z(arguments, b);
        return QK(d, c)
    }

    var fCa = {};

    function QK(a, b) {
        var c = new NK;
        c.CE = a;
        c.Bfa = b;
        return c
    }

    var RK = QK(O, 0);

    function SK(a, b) {
        Xa(a, OK(b))
    }

    function kCa(a) {
        var b = a[Sd], c = a[tc];
        c || Pl(a) != Jg || (c = Uk(a)[gc]);
        if (!c)return b;
        if (Bk)var d = om(c), b = b + d[G]; else Jk(8) && !Jk(9) && (d = om(c), b -= d[G]);
        return Xl(c) ? c[Kd] - (b + a[Ab]) : b
    }

    function TK(a, b, c, d, e, f, g, k, l) {
        var n = UK(c), p = fm(a), s = Vl(a);
        s && p.Nz(Kl(s));
        var s = Sk(a), u = Sk(c);
        if (s.gc() != u.gc()) {
            var v = s.gc()[Td], u = u.QB(), z = new Kk(0, 0), B = bl(Uk(v)), D = v;
            do {
                var N = B == u ? Wl(D) : Iea(D);
                z.x += N.x;
                z.y += N.y
            } while (B && B != u && (D = B.frameElement) && (B = B[dz]));
            v = Nk(z, Wl(v));
            !Ak || Jk(9) || Dl(s) || (v = Nk(v, El(s)));
            Za(p, p[G] + v.x);
            p.top += v.y
        }
        a = VK(a, b);
        p = new Kk(a & 2 ? p[G] + p[r] : p[G], a & 1 ? p.top + p[A] : p.top);
        p = Nk(p, n);
        e && (p.x += (a & 2 ? -1 : 1) * e.x, p.y += (a & 1 ? -1 : 1) * e.y);
        var M;
        if (g)if (l) M = l; else if (M = Vl(c)) M.top -= n.y, Ta(M,
            M[cd] - n.x), Ma(M, M[Mc] - n.y), Za(M, M[G] - n.x);
        return WK(p, c, d, f, M, g, k)
    }

    function UK(a) {
        var b;
        if (a = a[tc]) {
            var c = a[Tc] == Moa || a[Tc] == boa;
            c && Pl(a) == Dh || (b = Wl(a), c || (c = (c = Xl(a)) && Bk ? -a[Lc] : !c || Ak && Ik(wr) || Ol(a, txa) == Sh ? a[Lc] : a[Gc] - a[Kd] - a[Lc], b = Nk(b, new Kk(c, a[Gd]))))
        }
        return b || new Kk
    }
function WK(a,b,c,d,e,f,g){a=a[Bc]();var k=0,l=VK(b,c);c=em(b);g=g?g[Bc]():c[Bc]();if(d||0!=l)l&2?a.x-=g[r]+(d?d[cd]:0):d&&(a.x+=d[G]),l&1?a.y-=g[A]+(d?d[Mc]:0):d&&(a.y+=d.top);if(f&&(e?(k=a,d=0,65==(f&65)&&(k.x<e[G]||k.x>=e[cd])&&(f&=-2),132==(f&132)&&(k.y<e.top||k.y>=e[Mc])&&(f&=-5),k.x<e[G]&&f&1&&(k.x=e[G],d|=1),k.x<e[G]&&k.x+g[r]>e[cd]&&f&16&&(pa(g,h.max(g[r]-(k.x+g[r]-e[cd]),0)),d|=4),k.x+g[r]>e[cd]&&f&1&&(k.x=h.max(e[cd]-g[r],e[G]),d|=1),f&2&&(d=d|(k.x<e[G]?16:0)|(k.x+g[r]>e[cd]?32:0)),k.y<
e.top&&f&4&&(k.y=e.top,d|=2),k.y<=e.top&&k.y+g[A]<e[Mc]&&f&32&&(Sa(g,h.max(g[A]-(e.top-k.y),0)),k.y=e.top,d|=8),k.y>=e.top&&k.y+g[A]>e[Mc]&&f&32&&(Sa(g,h.max(g[A]-(k.y+g[A]-e[Mc]),0)),d|=8),k.y+g[A]>e[Mc]&&f&4&&(k.y=h.max(e[Mc]-g[A],e.top),d|=2),f&8&&(d=d|(k.y<e.top?64:0)|(k.y+g[A]>e[Mc]?128:0)),k=d):k=256,k&496))return k;Ql(b,a);Qk(c,g)||(a=Uk(b),e=Dl(Sk(a)),!Ak||Ik(bf)||e&&Ik(wr)?(b=b[x],Bk?b.MozBoxSizing=OD:Ek?b.WebkitBoxSizing=OD:b.boxSizing=OD,pa(b,h.max(g[r],0)+U),Sa(b,h.max(g[A],0)+U)):(a=
    b[x], e ? (e = nm(b), b = om(b), a.pixelWidth = g[r] - b[G] - e[G] - e[cd] - b[cd], a.pixelHeight = g[A] - b.top - e.top - e[Mc] - b[Mc]) : (a.pixelWidth = g[r], a.pixelHeight = g[A])));
    return k
}

    function VK(a, b) {
        return (b & 4 && Xl(a) ? b ^ 2 : b) & -5
    }

    function XK() {
    }

    XK[K].Ze = function () {
    };
    function YK(a, b, c) {
        Ix(this, a);
        this.EI = b;
        this.$ta = c
    }

    Y(YK, XK);
    YK[K].Ze = function (a, b, c) {
        TK(this[yA], this.EI, a, b, void 0, c, this.$ta)
    };
    function ZK(a, b) {
        this.X = a instanceof Kk ? a : new Kk(a, b)
    }

    Y(ZK, XK);
    ZK[K].Ze = function (a, b, c, d) {
        TK(Tl(a), 0, a, b, this.X, c, null, d)
    };
    function $K(a, b, c, d) {
        YK[L](this, a, b);
        this.ZP = c ? 5 : 0;
        this.t4 = d || void 0
    }

    Y($K, YK);
    $K[K].vla = function () {
        return this.ZP
    };
    $K[K].Ze = function (a, b, c, d) {
        var e = TK(this[yA], this.EI, a, b, null, c, 10, d, this.t4);
        if (e & 496) {
            var f = aL(e, this.EI);
            b = aL(e, b);
            e = TK(this[yA], f, a, b, null, c, 10, d, this.t4);
            e & 496 && (f = aL(e, f), b = aL(e, b), TK(this[yA], f, a, b, null, c, this.ZP, d, this.t4))
        }
    };
    function aL(a, b) {
        a & 48 && (b ^= 2);
        a & 192 && (b ^= 1);
        return b
    }

    function bL(a, b) {
        this.X = a instanceof Kk ? a : new Kk(a, b)
    }

    Y(bL, XK);
    bL[K].Ze = function (a, b, c, d) {
        var e;
        e = Uk(a);
        var f = e[Td];
        e = e[gc];
        e = new Kk(f[Lc] || e[Lc], f[Gd] || e[Gd]);
        f = this.X.x + e.x;
        e = this.X.y + e.y;
        var g = UK(a), f = f - g.x;
        e -= g.y;
        WK(new Kk(f, e), a, b, c, null, null, d)
    };
    function lCa(a) {
        if (a[rq] && !a[Yq] || a[Rq] || 112 <= a[lq] && 123 >= a[lq])return !1;
        switch (a[lq]) {
            case 18:
            case 20:
            case 93:
            case 17:
            case 40:
            case 35:
            case 27:
            case 36:
            case 45:
            case 37:
            case 224:
            case 91:
            case 144:
            case 12:
            case 34:
            case 33:
            case 19:
            case 255:
            case 44:
            case 39:
            case 145:
            case 16:
            case 38:
            case 224:
            case 92:
                return !1;
            case 0:
                return !Bk;
            default:
                return 166 > a[lq] || 183 < a[lq]
        }
    }

    function mCa(a, b, c, d, e) {
        if (!(Ak || Ek && Ik(ina)))return !0;
        if (vk && e)return cL(a);
        if (e && !d)return !1;
        qi(b) && (b = dL(b));
        if (!c && (17 == b || 18 == b || vk && 91 == b))return !1;
        if (Ek && d && c)switch (a) {
            case 220:
            case 219:
            case 221:
            case 192:
            case 186:
            case 189:
            case 187:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
                return !1
        }
        if (Ak && d && b == a)return !1;
        switch (a) {
            case 13:
                return !0;
            case 27:
                return !Ek
        }
        return cL(a)
    }

    function cL(a) {
        if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || Ek && 0 == a)return !0;
        switch (a) {
            case 32:
            case 63:
            case 107:
            case 109:
            case 110:
            case 111:
            case 186:
            case 59:
            case 189:
            case 187:
            case 61:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
            case 219:
            case 220:
            case 221:
                return !0;
            default:
                return !1
        }
    }

    function dL(a) {
        if (Bk) a = nCa(a); else if (vk && Ek)switch (a) {
            case 93:
                a = 91;
                break;
        }
        return a
    }

    function nCa(a) {
        switch (a) {
            case 61:
                return 187;
            case 59:
                return 186;
            case 173:
                return 189;
            case 224:
                return 91;
            case 0:
                return 224;
            default:
                return a
        }
    }

    function eL(a, b) {
        Tt[L](this);
        this.he = new Vv(this);
        this.Iw(a || null);
        b && this.wv(b)
    }

    Y(eL, Tt);
    W = eL[K];
    W.q = null;
    W.xaa = !0;
    W.f$ = null;
    W.Zca = null;
    W.ZC = !1;
    W.Opa = !1;
    W.d0 = -1;
    W.Wma = !1;
    W.Ypa = !0;
    W.Mg = YJ;
    W.bc = function () {
        return this.Mg
    };
    W.wv = function (a) {
        this.Mg = a
    };
    W.a = function () {
        return this.q
    };
    W.Iw = function (a) {
        oCa(this);
        this.q = a
    };
    W.kN = function (a) {
        oCa(this);
        this.xaa = a
    };
    W.LO = function (a, b) {
        this.WB = a;
        this.rC = b
    };
    W.tc = function () {
        return this.he
    };
    function oCa(a) {
        if (a.ZC)throw m("Can not change this state of the popup while showing.");
    }

    W.R = function () {
        return this.ZC
    };
    Jw(W, function (a) {
        this.WB && this.WB[Wq]();
        this.rC && this.rC[Wq]();
        a ? this.U2() : this.DD()
    });
    W.Ze = fi;
W.U2=function(){if(!this.ZC&&this.JY()){if(!this.q)throw m("Caller must call setElement before trying to show the popup");this.Ze();var a=Uk(this.q);this.Wma&&this.he.m(a,CG,this.Xma,!0);if(this.xaa)if(this.he.m(a,Gs,this.Aaa,!0),Ak){var b;try{b=a[qb]}catch(c){}for(;b&&b[sd]==Uaa;){try{var d=b[zA]||b[Jy][Ld]}catch(e){break}a=d;b=a[qb]}this.he.m(a,Gs,this.Aaa,!0);this.he.m(a,fta,this.zaa)}else this.he.m(a,LD,this.zaa);this.Mg==YJ?(ib(this.q[x],Sh),hm(this.q,!0)):this.Mg==TH&&this.Ze();this.ZC=!0;this.d0=
vi();this.WB?(Ot(this.WB,sF,this.Baa,!1,this),this.WB[Pz]()):this.Baa()}};W.DD=function(a){if(!this.ZC||!this[fq]({type:FD,target:a}))return!1;this.he&&this.he.mc();this.ZC=!1;vi();this.rC?(Ot(this.rC,sF,ui(this.lea,a),!1,this),this.rC[Pz]()):this.lea(a);return!0};W.lea=function(a){this.Mg==YJ?this.Opa?Wt(this.Fca,0,this):this.Fca():this.Mg==TH&&(this.q[x].top=ema);this.m_(a)};W.Fca=function(){ib(this.q[x],Sg);hm(this.q,!1)};W.JY=function(){return this[fq](GD)};W.Baa=function(){this[fq](qJ)};
W.m_=function(a){this[fq]({type:gG,target:a})};W.Aaa=function(a){a=a[ar];pl(this.q,a)||pCa(this,a)||this.Zca&&!pl(this.Zca,a)||150>vi()-this.d0||this.DD(a)};W.Xma=function(a){27==a[lq]&&this.DD(a[ar])&&(a[eq](),a[yq]())};W.zaa=function(a){if(this.Ypa){var b=Uk(this.q);if("undefined"!=typeof ea[qb]){if(a=b[qb],!a||pl(this.q,a)||a[Tc]==boa)return}else if(a[ar]!=b)return;150>vi()-this.d0||this.DD()}};function pCa(a,b){return Vi(a.f$||[],function(a){return b===a||pl(a,b)})}
W.B=function(){eL.e.B[L](this);this.he.Z();wt(this.WB);wt(this.rC);delete this.q;delete this.he;delete this.f$};function fL(a,b){this.t9=4;this.za=b||void 0;eL[L](this,a)}Y(fL,eL);Sw(fL[K],function(){return this.za||null});Hx(fL[K],function(a){this.za=a||void 0;this.R()&&this.Ze()});fL[K].Ze=function(){if(this.za){var a=!this.R()&&this.bc()!=TH,b=this.a();a&&(ib(b[x],Sg),hm(b,!0));this.za.Ze(b,this.t9,this.uwa);a&&hm(b,!1)}};function gL(a,b,c){this.U=c||(a?Sk(Vk(a)):Sk());fL[L](this,this.U.j(P,{style:Mxa}));this.xb=new Kk(1,1);this.Pa=new sk;a&&this.dA(a);null!=b&&this.Pr(b)}Y(gL,fL);var hL=[];W=gL[K];W.eg=null;mb(W,"charts-tooltip");W.VO=500;W.i$=0;W.ia=function(){return this.U};W.dA=function(a){a=Vk(a);this.Pa.add(a);Lt(a,Is,this.ko,!1,this);Lt(a,Hs,this.fU,!1,this);Lt(a,PH,this.eea,!1,this);Lt(a,Kg,this.Du,!1,this);Lt(a,LD,this.fU,!1,this)};
W.detach=function(a){if(a)a=Vk(a),qCa(this,a),this.Pa[Qb](a);else{for(var b=this.Pa.Ua(),c=0;a=b[c];c++)qCa(this,a);this.Pa[Yb]()}};function qCa(a,b){Pt(b,Is,a.ko,!1,a);Pt(b,Hs,a.fU,!1,a);Pt(b,PH,a.eea,!1,a);Pt(b,Kg,a.Du,!1,a);Pt(b,LD,a.fU,!1,a)}W.Pr=function(a){ql(this.a(),a)};W.s1=function(a){var b=this.a();b&&SK(b,a)};W.Iw=function(a){var b=this.a();b&&kl(b);gL.e.Iw[L](this,a);a&&(b=this.U.gc()[Td],b[Fb](a,b[Dc]))};W.Gv=function(){return xl(this.a())};W.S7=function(){return this.a()[nd]};
Pp(W,function(){return this.Bv?this.R()?4:1:this.$I?3:this.R()?2:0});W.JY=function(){if(!eL[K].JY[L](this))return!1;if(this[sA])for(var a,b=0;a=hL[b];b++)pl(a.a(),this[sA])||a[Ny](!1);$i(hL,this)||hL[C](this);a=this.a();mb(a,this[Jd]);iL(this);Lt(a,Is,this.Gaa,!1,this);Lt(a,Hs,this.Faa,!1,this);jL(this);return!0};
W.m_=function(){ej(hL,this);for(var a=this.a(),b,c=0;b=hL[c];c++)b[sA]&&pl(a,b[sA])&&b[Ny](!1);this.Haa&&kL(this.Haa);Pt(a,Is,this.Gaa,!1,this);Pt(a,Hs,this.Faa,!1,this);Ex(this,void 0);0==this[Hq]()&&(this.iQ=!1);eL[K].m_[L](this)};W.Tea=function(a,b){this[sA]==a&&this.Pa[Rc](this[sA])&&(this.iQ||!this.Nwa?(this[Ny](!1),this.R()||(Ex(this,a),this[xA](b||this.PP(0)),this[Ny](!0))):Ex(this,void 0));this.Bv=void 0};W.d2=function(){return this.Pa};W.vF=function(){return this.eg};
W.Rta=function(a){this.$I=void 0;a==this[sA]&&(null!=this.eg&&(this.eg==this.a()||this.Pa[Rc](this.eg))||this.Z$&&this.Z$.eg||this[Ny](!1))};function rCa(a,b){var c=El(a.U);a.xb.x=b[Dd]+c.x;a.xb.y=b[Ed]+c.y}W.ko=function(a){var b=lL(this,a[ar]);this.eg=b;iL(this);b!=this[sA]&&(Ex(this,b),this.Bv||(this.Bv=Wt(X(this.Tea,this,b,void 0),this.VO)),sCa(this),rCa(this,a))};function lL(a,b){try{for(;b&&!a.Pa[Rc](b);)b=b[je];return b}catch(c){return null}}W.eea=function(a){rCa(this,a);this.iQ=!0};
W.Du=function(a){this.eg=a=lL(this,a[ar]);this.iQ=!0;if(this[sA]!=a){Ex(this,a);var b=this.PP(1);iL(this);this.Bv||(this.Bv=Wt(X(this.Tea,this,a,b),this.VO));sCa(this)}};W.PP=function(a){return 0==a?(a=this.xb[Bc](),new mL(a)):new nL(this.eg)};function sCa(a){if(a[sA])for(var b,c=0;b=hL[c];c++)pl(b.a(),a[sA])&&(b.Z$=a,a.Haa=b)}W.fU=function(a){var b=lL(this,a[ar]),c=lL(this,a[bq]);b!=c&&(b==this.eg&&(this.eg=null),jL(this),this.iQ=!1,!this.R()||a[bq]&&pl(this.a(),a[bq])?Ex(this,void 0):kL(this))};
W.Gaa=function(){var a=this.a();this.eg!=a&&(iL(this),this.eg=a)};W.Faa=function(a){var b=this.a();this.eg!=b||a[bq]&&pl(b,a[bq])||(this.eg=null,kL(this))};function jL(a){a.Bv&&(Xt(a.Bv),a.Bv=void 0)}function kL(a){2==a[Hq]()&&(a.$I=Wt(X(a.Rta,a,a[sA]),a.i$))}function iL(a){a.$I&&(Xt(a.$I),a.$I=void 0)}W.B=function(){this[Ny](!1);jL(this);this[Rz]();this.a()&&kl(this.a());this.eg=null;delete this.U;gL.e.B[L](this)};function mL(a,b){ZK[L](this,a,b)}Y(mL,ZK);
mL[K].Ze=function(a,b,c){b=Tl(a);b=Vl(b);c=c?new Fl(c.top+10,c[cd],c[Mc],c[G]+10):new Fl(10,0,0,10);WK(this.X,a,4,c,b,9)&496&&WK(this.X,a,4,c,b,5)};function nL(a){YK[L](this,a,3)}Y(nL,YK);nL[K].Ze=function(a,b,c){var d=new Kk(10,0);TK(this[yA],this.EI,a,b,d,c,9)&496&&TK(this[yA],2,a,1,d,c,5)};function oL(a){var b=null,c=null;ri(a)?b=a:c=a;this.fqa=b;this.q=c;this.qT=null}oL[K].bo=function(a){this.qT=a;this.q&&Tm(this.q,a)};oL[K].Uu=function(){return this.q?Vea(this.q):this.qT};oL[K].a=function(){this.q||(this.q=this.fqa(),null===this.qT||Tm(this.q,this.qT));return this.q};function pL(){this.md=[]}W=pL[K];W.Tj=function(a){this.md[C](a)};hx(W,function(a,b){this.Tj(qL(a,b))});W.da=function(a,b){this.Tj({type:SG,data:{x:a,y:b}})};W.Bp=function(a,b,c,d,e,f){this.Tj({type:UE,data:{x1:a,y1:b,Hb:c,Lb:d,x:e,y:f}})};W.xf=function(a,b,c,d,e,f,g){this.Tj({type:rD,data:{jC:a,kC:b,Gi:c,Hi:d,ax:e,Lr:f,nba:g}})};
    function rL(a, b, c) {
        if (0 != b[J])if (0 == a.md[J] ? a[Hz](b[0].x, b[0].y) : a.da(b[0].x, b[0].y), c)for (var d = 1; d < b[J]; ++d)a.Bp(c[d - 1][1].x, c[d - 1][1].y, c[d][0].x, c[d][0].y, b[d].x, b[d].y); else for (d = 1; d < b[J]; ++d)a.da(b[d].x, b[d].y)
    }

    Qw(W, function () {
        this.Tj({type: CE, data: null})
    });
    function qL(a, b) {
        return {type: SH, data: {x: a, y: b}}
    }

    function sL(a, b) {
        var c = new pL;
        0 < a[J] && (rL(c, a), b || c[bz]());
        return c
    }

    var tCa = {Vua: AJ, sua: iE, Jua: sF};

    function tL(a, b, c) {
        switch (c) {
            case AJ:
                c = a;
                a += b;
                break;
            case sF:
                c = a - b;
                break;
            case iE:
                c = a - b / 2;
                a += b / 2;
                break;
            default:
                c = a = ia
        }
        return {start: c, end: a}
    }

    function uL(a, b, c, d) {
        d && (c = c === AJ ? sF : c === sF ? AJ : c);
        switch (c) {
            case sF:
                return b;
            case iE:
                return Jj(a, b);
            default:
                return a
        }
    }

    function vL(a, b) {
        this.ra = a;
        this.pD = b;
        this.wt = null;
        this.Qf = HK(X(function (a, b) {
            return this.qD(a, b)
        }, this), function (a, b) {
            var e = [a, b[0]];
            Sj(b[1], function (a, b) {
                e[C](a);
                e[C](b)
            });
            return e[me]($C)
        });
        this.Nv = null
    }

    Y(vL, ut);
    function wL() {
        bi.__googleVisualizationAbstractRendererElementsCount__ = bi.__googleVisualizationAbstractRendererElementsCount__ || 0;
        var a = Tpa + bi.__googleVisualizationAbstractRendererElementsCount__[kc]();
        bi.__googleVisualizationAbstractRendererElementsCount__++;
        return a
    }

    W = vL[K];
    pa(W, 0);
    Sa(W, 0);
    W.qm = function (a, b) {
        var c = this.aR(a, b);
        c.bo(lg);
        return this.wt = c
    };
    W.deleteContents = function (a) {
        this.M4(a)
    };
    W.flush = function () {
    };
    va(W, function () {
        this.sh()
    });
    W.sh = function () {
        this.wt = null
    };
    W.B = function () {
        this.sh();
        vL.e.B[L](this)
    };
    W.pc = function () {
        return this.ra
    };
    W.bo = function (a, b) {
        a && (a[uc] == oL ? a.bo(b) : Tm(a, b))
    };
    W.Uu = function (a) {
        return Vea(a)
    };
    W.appendChild = function (a, b) {
        if (b) {
            var c;
            if (b[uc] == oL) {
                if (!b.q)return;
                c = b.a()
            } else c = b;
            a.a()[q](c)
        }
    };
    W.replaceChild = function (a, b, c) {
        a.a()[Bz](b, c)
    };
W.Nc=function(a){if(a.q){var b=a.a();this.ju.Nc(b);a.a()}};W.Ba=function(a){a=null!=a?a:!1;var b=new oL(X(this.s0,this));a||b.a();return b};W.EA=function(){};W.YF=function(){return null};function xL(a,b,c,d,e,f){var g=new pL;g[Hz](b,c);g.da(d,e);return a.Bc(g,f)}
W.Bc=function(a,b){for(var c=[],d=0;d<a.md[J];d++){var e=c,f=a.md[d];switch(f[H]){case SH:f=f[$];this.nd(e,f.x,f.y);break;case SG:f=f[$];this.xa(e,f.x,f.y);break;case UE:f=f[$];this.lr(e,f.x1,f.y1,f.Hb,f.Lb,f.x,f.y);break;case rD:f=f[$];this.Wm(e,f.jC,f.kC,f.Gi,f.Hi,f.ax,f.Lr,f.nba);break;case CE:this.Qi(e)}}return this.l1(c,b)};W.oe=function(a,b,c,d,e){a=this.Ow(a,b,c,d);this[q](e,a);return a};W.pk=function(a,b,c,d,e,f){a=this.L4(a,b,c,d,e);this[q](f,a);return a};
W.hb=function(a,b,c,d,e,f){a=this.fl(a,b,c,d,e);this[q](f,a);return a};W.JL=function(a,b,c,d,e,f){a=xL(this,a,b,c,d,e);this[q](f,a);return a};W.sa=function(a,b,c){a=this.Bc(a,b);this[q](c,a);return a};W.Sd=function(a,b,c,d,e,f,g,k,l){a=this.gx(a,b,c,d,e,f,g,l);this[q](k,a);return a};W.Ii=function(a,b,c,d,e,f,g,k,l,n){a=this.zL(a,b,c,d,e,f,g,k,n);this[q](l,a);return a};function uCa(a,b,c,d,e,f,g,k,l,n){b=a.Vs(b,c,d,e,f,g,k,l,void 0);a[q](n,b)}W.ml=function(a,b){return this.Qf(a,b)[r]};W.zC=function(){return!1};
    W.NF = yj;
    function vCa(a) {
        return Al(a, function (a) {
            return a.referencepoint
        }, !0)
    }

    function yL(a) {
        var b = vCa(a[ar]);
        return Yl(a, b)
    }

    function zL(a, b) {
        vL[L](this, a, b);
        this.ju = Sk(a);
        this.qP = this.ju.gc();
        this.kr = [];
        this.G = new Vv
    }

    Y(zL, vL);
    function wCa(a, b, c, d) {
        b = new gL(b);
        var e = a.ju.j(P);
        c = c[rc](re);
        e[q](a.ju[Db](c[0]));
        for (var f = 1; f < c[J]; ++f)e[q](a.ju.j(VD)), e[q](a.ju[Db](c[f]));
        Ml(e, d);
        b.a()[q](e);
        b.VO = 100;
        b.i$ = 100;
        a.kr[C](b)
    }

    W = zL[K];
    W.Yf = function (a) {
        this.ju[Iq](a);
        Rt(a)
    };
    va(W, function () {
        this.G.mc();
        wt(this.G);
        this.G = new Vv;
        zL.e[Yb][L](this)
    });
    W.sh = function () {
        zL.e.sh[L](this);
        Z(this.kr, function (a) {
            wt(a)
        });
        bj(this.kr);
        this.ju.Nc(this.ra);
        this.G.mc();
        wt(this.G)
    };
    W.ul = function (a) {
        var b = vCa(a);
        return b ? (b = Yl(a, b), a = em(a), new Fl(b.y, b.x + a[r], b.y + a[A], b.x)) : null
    };
    W.hc = function (a, b, c) {
        a[uc] == oL && (a = a.a());
        this.G.m(a, b, c)
    };
    W.replaceChild = function (a, b, c) {
        zL.e[Bz][L](this, a, b, c);
        Rt(c)
    };
    function AL(a, b, c, d) {
        this.x0 = a;
        this.y0 = b;
        this.x1 = c;
        this.y1 = d
    }

    Ia(AL[K], function () {
        return new AL(this.x0, this.y0, this.x1, this.y1)
    });
    $a(AL[K], function (a) {
        return this.x0 == a.x0 && this.y0 == a.y0 && this.x1 == a.x1 && this.y1 == a.y1
    });
    function xCa(a) {
        var b = a.x1 - a.x0;
        a = a.y1 - a.y0;
        return h[zd](b * b + a * a)
    }

    function BL(a, b) {
        return new Kk(Cj(a.x0, a.x1, b), Cj(a.y0, a.y1, b))
    }

    function CL(a, b) {
        this.x = a;
        this.y = b
    }

    Y(CL, Kk);
    W = CL[K];
    Ia(W, function () {
        return new CL(this.x, this.y)
    });
    W.lga = function () {
        return h[zd](this.x * this.x + this.y * this.y)
    };
    Na(W, Kk[K][mz]);
    W.add = function (a) {
        this.x += a.x;
        this.y += a.y;
        return this
    };
    W.B4 = function (a) {
        this.x -= a.x;
        this.y -= a.y;
        return this
    };
    W.rotate = function (a) {
        var b = h.cos(a);
        a = h.sin(a);
        var c = this.y * b + this.x * a;
        this.x = this.x * b - this.y * a;
        this.y = c;
        return this
    };
    $a(W, function (a) {
        return this == a || !!a && this.x == a.x && this.y == a.y
    });
    function DL(a, b) {
        return new CL(a.x + b.x, a.y + b.y)
    }

    function EL(a, b) {
        return new CL(a.x - b.x, a.y - b.y)
    }

    function FL(a, b) {
        zL[L](this, a, b);
        this.na = null;
        var c = Sk(b)[Sb](dE);
        this.pD[q](c);
        this.gea = c[Sz](LB);
        this.cU = null
    }

    Y(FL, zL);
    function GL(a) {
        a.$da || (a.na[Nz](), a.$da = !0)
    }

    W = FL[K];
    W.aR = function (a, b) {
        var c = Sk(this.ra)[Sb](dE);
        c[w](Vh, a);
        c[w](Rg, b);
        this.ra[q](c);
        this.na = c[Sz](LB);
        return new oL(c)
    };
    W.M4 = function () {
        var a = this.wt.a();
        this.na.clearRect(0, 0, a[r], a[A])
    };
    function HL(a) {
        return Sk(a.ra)[Sb](Tta)
    }

    function IL(a, b) {
        if (a == Q)return NI;
        b == Q && (b = 1);
        return Pya + Hm(a) + Re + b + Oe
    }

    function JL(a, b) {
        "undefined" !== typeof a.setLineDash ? a.setLineDash(b) : a.Iza = b
    }
W.yi=function(a){ix(this.na,IL(a.re,a.qi));Iw(this.na,IL(a.cb(),a.Pe));var b=a.nl;null!=b&&b==YE?JL(this.na,[8,2]):ki(b)?JL(this.na,b):JL(this.na,[]);var b=a.vd,c=a.Hg;if(null!=b){var d;switch(b.Ib()){case zI:c=this.qP[Sb](dE),c[w](Vh,4),c[w](Rg,4),d=c[Sz](LB),Iw(d,b.hs()),d[qz](0,0,4,4),ix(d,b.Vd()),d[Nz](),ax(d,2),d.lineCap=wJ,d[py](2,0),d[zz](4,2),d[py](0,2),d[zz](2,4),d[$b](),d=c}Iw(this.na,this.na.createPattern(d,Jya))}else null!=c&&(b=this.na.createLinearGradient(+c.x1,+c.y1,+c.Hb,+c.Lb),b[wA](0,
c.jg),b[wA](1,c.Rf),Iw(this.na,b));ax(this.na,a.Nb)};function yCa(a,b){b.lc&&b.lc!=Q?(ix(a,b.lc),ax(a,3)):ix(a,NI);Iw(a,IL(b[F],b[Od]?b[Od]:1));JL(a,[]);var c=O;b.Tc&&(c=Vva);b[Id]&&(c+=yra);c+=b[yc]+Wxa+b.ab;a.font=c}W.Ow=function(a,b,c,d){this.na[Nz]();this.yi(d);this.na.arc(a,b,c,0,2*h.PI);this.na[vz]();this.na[ic]();this.na[$b]();return HL(this)};
W.L4=function(a,b,c,d,e){this.na[Wy]();this.yi(e);this.na[Tz](a,b);c>d?(this.na[mz](1,d/c),a=c):(this.na[mz](c/d,1),a=d);this.na.arc(0,0,a,0,2*h.PI,!1);this.na[ic]();this.na[$b]();this.na[nz]();return HL(this)};W.fl=function(a,b,c,d,e){this.yi(e);this.na[qz](a,b,c,d);this.na[aA](a,b,c,d);return HL(this)};W.o0=function(){return HL(this)};W.l1=function(a,b){this.yi(b);this.na[ic]();this.na[$b]();this.$da=!1;return HL(this)};W.gx=function(a,b,c,d,e,f,g){return this.Vs(a,b,c,d,0,e,f,g)};
W.zL=function(a,b,c,d,e,f,g,k){var l=uL(b,d,f),n=uL(c,e,f),p=xCa(new AL(b,c,d,e));return this.Vs(a,l,n,p,Gj(b,c,d,e),f,g,k)};
W.Vs=function(a,b,c,d,e,f,g,k){yCa(this.na,k);this.na[Wy]();e=Dj(e);d=b*h.sin(-e)+c*h.cos(-e);b=b*h.cos(-e)-c*h.sin(-e);this.na[Zy](e);g==AJ?d+=4*k[yc]/5:g==iE?d+=k[yc]/3:g==sF&&(d-=k[yc]/5);f!=AJ&&(f==iE?b-=this.qD(a,k)[r]/2:f==sF&&(b-=this.qD(a,k)[r]));this.na.strokeText(a,b,d);this.na[jy](a,b,d);k.Se&&(this.na[Nz](),e=k[yc]/15,d+=e+1,1>e&&(e=1),ax(this.na,e),this.na[py](b,d),this.na[zz](this.na.measureText(a)[r]+b,d),ix(this.na,this.na.fillStyle),this.na[$b]());this.na[nz]();return HL(this)};
W.s0=function(){return HL(this)};W.EA=function(a){if(null===a)return HL(this);this.cU=a;this.na[Wy]();this.na[Nz]();Iw(this.na,NI);this.na[kA](a[G],a.top,a[r],a[A]);this.na.clip();return HL(this)};W.YF=function(){var a=this.cU;this.cU&&(this.cU=null,this.na[nz]());return a};W.uF=function(){return HL(this)};W.nd=function(a,b,c){GL(this);this.na[py](b,c)};W.xa=function(a,b,c){GL(this);this.na[zz](b,c)};W.lr=function(a,b,c,d,e,f,g){GL(this);this.na.bezierCurveTo(b,c,d,e,f,g)};
    W.Qi = function () {
        GL(this);
        this.na[vz]()
    };
    W.Wm = function (a, b, c, d, e, f, g, k) {
        GL(this);
        f = Dj(f - 90);
        g = Dj(g - 90);
        a = h.max(d, e);
        this.na[Wy]();
        this.na[Tz](b, c);
        this.na[mz](d / a, e / a);
        this.na.arc(0, 0, a, f, g, !k);
        this.na[nz]()
    };
    W.Em = function () {
    };
    W.yg = function () {
    };
    W.Yj = function () {
    };
    W.gS = function () {
    };
    W.hS = function () {
    };
    W.hd = function () {
    };
    W.qD = function (a, b) {
        yCa(this.gea, b);
        return new Pk(this.gea.measureText(a)[r], b[yc])
    };
    W.k2 = function () {
        return HL(this)
    };
    W.pj = function () {
    };
    var KL;

    function LL(a, b) {
        b ? a[w](vh, b) : a[Uc](vh)
    }

    function ML(a, b, c) {
        li(c) && (c = c[me](se));
        var d = qg + b;
        if (c === O || void 0 == c) KL || (KL = {
            atomic: !1,
            autocomplete: Q,
            dropeffect: Q,
            haspopup: !1,
            live: ZH,
            multiline: !1,
            multiselectable: !1,
            orientation: Rh,
            readonly: !1,
            relevant: zqa,
            required: !1,
            sort: Q,
            busy: !1,
            disabled: !1,
            hidden: !1,
            invalid: Gg
        }), c = KL, b in c ? a[w](d, c[b]) : a[Uc](d); else a[w](d, c)
    }

    function NL(a, b) {
        var c = a[Xd](qg + b);
        return null == c || void 0 == c ? O : String(c)
    }

    function OL(a) {
        this.n = a;
        this.G = new Vv
    }

    Y(OL, ut);
    W = OL[K];
    W.pc = function () {
        return this.n
    };
    va(W, function () {
        this.gG();
        this.G = new Vv
    });
    W.gG = function () {
        hl(this.n);
        this.G.mc();
        wt(this.G)
    };
    W.B = function () {
        this.gG();
        OL.e.B[L](this)
    };
    W.hc = function (a, b, c) {
        this.G.m(a, b, c)
    };
    function PL(a, b) {
        zL[L](this, a, b);
        this.Cp = null;
        this.kQ = {};
        this.j_ = {};
        this.qD(Doa, {fontSize: 8, ab: gC, bold: !1, Tc: !1})
    }

    Y(PL, zL);
    function zCa(a, b) {
        a.Cp = a.Za(cF);
        a.Cp[w](qG, cF);
        a.kQ = {};
        a.j_ = {};
        a.H$ = {};
        b[q](a.Cp)
    }

    W = PL[K];
    W.aR = function (a, b) {
        pa(this, a);
        Sa(this, b);
        var c = this.Za(KJ);
        c[w](Vh, a);
        c[w](Rg, b);
        c[x].overflow = Sg;
        c[w](vD, Una);
        this.ra[q](c);
        zCa(this, c);
        return new oL(c)
    };
    W.ul = function (a) {
        if (a instanceof bi.SVGElement && a[Tc][pe]() !== nI) {
            var b = a.getBBox();
            return b.y | b.x | b[A] | b[r] ? new Fl(b.y, b.x + b[r], b.y + b[A], b.x) : PL.e.ul[L](this, a)
        }
        return PL.e.ul[L](this, a)
    };
    W.M4 = function () {
        for (var a = this.wt.a(), b = a[Zb], c = b[J]; 1 < c;)a[Ud](b[0]), c--;
        zCa(this, a)
    };
    W.$pa = function () {
        return this.ra[nd]
    };
    Wa(W, function (a) {
        return h[E](100 * a) / 100
    });
    W.Ow = function (a, b, c, d) {
        var e = this.Za(yE);
        e[w](WE, a);
        e[w](XE, b);
        e[w](sh, c);
        this.pj(e, d);
        return e
    };
W.L4=function(a,b,c,d,e){var f=this.Za(oF);f[w](WE,a);f[w](XE,b);f[w](VI,c);f[w](WI,d);this.pj(f,e);return f};W.fl=function(a,b,c,d,e){var f=this.Za(EI);f[w](AK,a);f[w](Wh,b);f[w](Vh,c);f[w](Rg,d);this.pj(f,e);return f};W.o0=function(a,b,c,d,e,f,g){b=sva+c+Xxa+(f?aJ:Sg)+una+(g?aJ:Sg)+xna+b+Yxa;d=this.aR(d,e);if(li(a))for(e=0,c=a[J];e<c;e++)this[q](d,a[e]);else this[q](d,a);a=cl(P,{style:b},d.a());this.ra[q](a);return{append:[],events:[d.a()]}};
W.l1=function(a,b){var c=this.Za(nI);0<a[J]&&c[w](Ag,a[me](O));this.pj(c,b);return c};W.gx=function(a,b,c,d,e,f,g,k){return this.Vs(a,b,c,d,0,e,f,g,k)};W.zL=function(a,b,c,d,e,f,g,k,l){var n=uL(b,d,f,l),p=uL(c,e,f,l),s=xCa(new AL(b,c,d,e));return this.Vs(a,n,p,s,Gj(b,c,d,e),f,g,k,l)};
W.Vs=function(a,b,c,d,e,f,g,k,l){var n=ci(k[Od])?k[Od]:1,p=new bn({fill:k[F],Ce:n});if(k[F]&&k[F]!=Q&&k.lc&&k.lc!=Q){var n=new bn({fill:k[F],Ce:n,stroke:k.lc,Xg:n,ua:3}),s=this.Ba();this.YI(a,b,c,d,e,f,g,k,n,s,l)[w](uD,Mh);this.YI(a,b,c,d,e,f,g,k,p,s,l);return s.a()}return this.XI(a,b,c,d,e,f,g,k,p,l)};
W.XI=function(a,b,c,d,e,f,g,k,l,n){d=this.Za(Us);g=tL(0,k[yc],g);g=uL(g[y],g.end,sF);g-=.15*k[yc];g=new CL(0,g);g[Zy](Dj(e));c=new CL(b,c);c.add(g);b=c.x;c=c.y;d[q](this.qP[Db](a));switch(f){case AJ:d[w](QJ,AJ);break;case iE:d[w](QJ,GH);break;case sF:d[w](QJ,sF)}d[w](AK,b);d[w](Wh,c);d[w](qua,k.ab);d[w](sua,k[yc]||0);k[Id]&&d[w](KF,MD);k.Tc&&d[w](JF,AG);k.Se&&d[w](tAa,fK);n&&d[w](Dg,wh);0!=e&&d[w](Kh,RI+e+se+b+se+c+Oe);this.pj(d,l);return d};
W.YI=function(a,b,c,d,e,f,g,k,l,n,p){a=this.XI(a,b,c,d,e,f,g,k,l,p);this[q](n,a);return a};W.s0=function(){return this.Za(Ng)};W.uF=function(a,b,c){var d=wL(),e=this.Za(vsa);c?(c=this.Za(oF),c[w](WE,b[G]+b[r]/2),c[w](XE,b.top+b[A]/2),c[w](VI,b[r]/2),c[w](WI,b[A]/2)):(c=this.Za(EI),c[w](AK,b[G]),c[w](Wh,b.top),c[w](Vh,b[r]),c[w](Rg,b[A]));e[q](c);e[w](qG,d);this.Cp[q](e);a=a.a();b=O;Bk&&(b=ba[xc][Nc][rc](we)[0]);a[w](AE,mBa+b+we+d+Oe);return a};W.nd=function(a,b,c){a[C](Gf+b+Re+c)};
W.xa=function(a,b,c){a[C](Ff+b+Re+c)};W.lr=function(a,b,c,d,e,f,g){a[C](jC+b+Re+c+Re+d+Re+e+Re+f+Re+g)};W.Qi=function(a){a[C](hg)};W.Wm=function(a,b,c,d,e,f,g,k){if(0<d&&0<e){var l;l=Bj(g,360)-Bj(f,360);180<l?l-=360:-180>=l&&(l=360+l);var n=2*h.PI*h.min(d,e);.1>h.abs(l/360*n)&&(l=(.1/n*360-h.abs(l))*Hj(l)/2,f-=l,g+=l)}f=Bj(f,360);g=Bj(g,360);var n=Ej(g-90,d),p=Fj(g-90,e);l=k?g-f:f-g;0>l&&(l+=360);a[C](of+d+Re+e+cma+(180<l?1:0)+Re+(k?1:0)+Re+(b+n)+Re+(c+p))};
W.Em=function(a,b,c){a[w](Kh,aBa+b+Se+c+Oe)};W.yg=function(a,b){a[w](Vh,b)};W.Yj=function(a,b){a[w](Rg,b)};W.gS=function(a,b){a[w](AK,b)};W.hS=function(a,b){a[w](Wh,b)};W.hd=function(a,b,c){a[w](IJ,c);b&&a[w](GJ,b)};W.qD=function(a,b){var c=this.pD;qa(c[Ub],a);var d=c[x];fx(d,b.ab);Fa(d,b[yc]+U);sx(d,b[Id]?MD:O);Cx(d,b.Tc?AG:O);Ra(d,es);var e=c[Kd],c=c[$d];Ra(d,Q);return new Pk(e,c)};
W.k2=function(){if(null!=this.Nv)return this.Nv;var a=el(P);ab(a[x],rxa);var b=el(P);$l(b,dna,dna);a[q](b);ea[Td][q](a);b=a[Ab]-a[Kd];kl(a);return this.Nv=b};W.Za=function(a){return this.qP[Ty](nG,a)};
W.pj=function(a,b){nn(b)?(a[w](GJ,b.re),a[w](IJ,b.Nb),nn(b)&&1<=b.qi?a[Uc](HJ):a[w](HJ,b.qi),b.nl!=Ch?a[w](jAa,ACa(b.nl,b.Nb)):a[Uc](jAa)):(a[w](GJ,Q),a[w](IJ,0));pn(b)?a[Uc](EF):a[w](EF,b.Pe);var c=b.VH;qi(c)&&a[w](VI,c);c=b.WH;qi(c)&&a[w](WI,c);var d=b.Hg;if(d){var e=qo(d,1)[kc](),c=this.j_[e];if(!c){c=wL();this.j_[e]=c;var e=this.Za(WG),f=d.x1,g=d.Hb,k=d.y1,l=d.Lb,n=d.jg,p=d.Rf,s=d.Yv||1,u=d.Zv||1,v=d.vt?fxa:jK;e[w](qG,c);e[w](BK,f);e[w](DK,k);e[w](CK,g);e[w](EK,l);e[w](ava,v);f=FJ+n+vna+s;p=FJ+
p+vna+u;u=this.Za(EJ);u[w]($H,FB);u[w](Fh,f);e[q](u);d.RE&&(d=this.Za(EJ),d[w]($H,fna),d[w](Fh,f),e[q](d),d=this.Za(EJ),d[w]($H,hna),d[w](Fh,p),e[q](d));d=this.Za(EJ);d[w]($H,GB);d[w](Fh,p);e[q](d);this.Cp[q](e)}a[w](DF,hK+c+Oe)}else if(null!=b.vd){e=b.vd;c=e.Ib()+$C+e.Vd()+$C+e.hs();if(!(c in this.kQ)){d=null;switch(e.Ib()){case zI:d=this.Za(ph);d[w](zxa,jK);d[w](AK,Xe);d[w](Wh,Xe);d[w](Vh,MB);d[w](Rg,MB);d[w](sK,Yma);p=this.Za(EI);p[w](AK,Xe);p[w](Wh,Xe);p[w](Vh,MB);p[w](Rg,MB);p[w](DF,e.hs());
d[q](p);p=this.Za(Ng);p[w](GJ,e.Vd());p[w](kAa,wJ);e=this.Za(SG);e[w](BK,KB);e[w](DK,Xe);e[w](CK,MB);e[w](EK,KB);e[w](IJ,KB);p[q](e);e=this.Za(SG);e[w](BK,Xe);e[w](DK,KB);e[w](CK,KB);e[w](EK,MB);e[w](IJ,KB);p[q](e);d[q](p);break;case Uya:d=this.Za(ph),d[w](zxa,jK),d[w](AK,Xe),d[w](Wh,Xe),d[w](Vh,NB),d[w](Rg,NB),d[w](sK,Yma),p=this.Za(EI),p[w](AK,Xe),p[w](Wh,Xe),p[w](Vh,MB),p[w](Rg,MB),p[w](DF,e.hs()),d[q](p),p=this.Za(Ng),p[w](GJ,e.Vd()),p[w](kAa,wJ),e=this.Za(SG),e[w](BK,KB),e[w](DK,Xe),e[w](CK,
Xe),e[w](EK,KB),e[w](IJ,KB),p[q](e),e=this.Za(SG),e[w](BK,MB),e[w](DK,KB),e[w](CK,KB),e[w](EK,MB),e[w](IJ,KB),p[q](e),d[q](p)}e=wL();d[w](qG,e);this.Cp[q](d);this.kQ[c]=e}c=this.kQ[c];a[w](DF,hK+c+Oe)}else a[w](DF,b.cb());null!=b.b9&&(d=b.getShadow(),e=qo(d,1)[kc](),c=this.H$[e],c||(c=wL(),this.H$[e]=c,e=this.Za(Ig),e[w](qG,c),p=this.Za(eua),p[w](sG,ypa),p[w](eAa,d[Lz]),e[q](p),p=this.Za(gua),p[w](lF,d.Awa||0),p[w](mF,d.Bwa||0),e[q](p),null!=d[Od]&&(p=this.Za(cua),u=this.Za(dua),u[w](Nh,VG),u[w](Jza,
d[Od]),p[q](u),e[q](p)),d=this.Za(fua),p=this.Za(xF),d[q](p),p=this.Za(xF),p[w](sG,zpa),d[q](p),e[q](d),this.Cp[q](e)),a[w](Ig,hK+c+Oe))};function ACa(a,b){if(ki(a))return a[me](Re);switch(a){case Ch:return Xe;case YE:return String(4*b)+Re+String(b);default:return ACa(Ch,b)}}W.NF=function(){var a=cl(P,{"aria-label":Vna,style:Nxa});this.ra[q](a);this.ra[w](vD,Una);this.ra[Ub][w](uD,!0);return a};function QL(a,b){zL[L](this,a,b);this.fv=null}Y(QL,zL);W=QL[K];W.aR=function(a,b){pa(this,a);Sa(this,b);var c=this.ie(P);this.Sj(c,-5E4,-5E4,this[r]+1E5,this[A]+1E5);this.ra[q](c);var d=this.Ba(),e=d.a();Ow(e,EB);Gx(e,a+se+b);e[x].top=5E4;Za(e[x],5E4);c[q](e);return d};W.M4=function(){for(var a=this.wt.a(),b=a[Zb],c=b[J];1<c;)a[Ud](b[0]),c--};Wa(W,function(a){return h[E](a)});W.Ow=function(a,b,c,d){var e=this.ie(mK),f=2*c;this.Sj(e,a-c,b-c,f,f);this.pj(e,d,!1);return e};
W.L4=function(a,b,c,d,e){var f=this.ie(mK);this.Sj(f,a-c,b-d,2*c,2*d);this.pj(f,e,!1);return f};W.fl=function(a,b,c,d,e){var f=this.ie(rBa),g=pn(e)&&1<=d&&1<=c&&null==e.Hg;this.pj(f,e,g);if(nn(e)||g)c=h.max(c-1,0),d=h.max(d-1,0);this.Sj(f,a,b,c,d);return f};W.o0=function(a,b,c,d,e,f,g){b=cl(P,{style:sva+c+Xxa+(f?aJ:Sg)+una+(g?aJ:Sg)+xna+b+BI});b=new oL(b);if(li(a))for(c=0,d=a[J];c<d;c++)this[q](b,a[c]);else this[q](b,a);return{append:[b.a()],events:[]}};
W.l1=function(a,b){for(var c=this.ie(oK),d=this.ie(nK);0<a[J]&&yi(Oi(a),Gf);)a=jj(a,0,a[J]-1);d[w](Ph,a[me](O));this.Sj(c,0,0,this[r],this[A]);c[q](d);this.pj(c,b,!1);return c};W.gx=function(a,b,c,d,e,f,g){b=tL(b,d,e);c=tL(c,g[yc],f);f=iE;c=uL(c[y],c.end,f);return this.zL(a,b[y],c,b.end,c,e,f,g)};
W.zL=function(a,b,c,d,e,f,g,k){var l=new bn({fill:k[F]});if(k[F]&&k[F]!=Q&&k.lc&&k.lc!=Q){var n=new bn({fill:k[F],stroke:k.lc,ua:2}),p=this.Ba();this.YI(a,b,c,d,e,f,g,k,n,p);this.YI(a,b,c,d,e,f,g,k,l,p);return p.a()}return this.XI(a,b,c,d,e,f,g,k,l)};W.Vs=function(a,b,c,d,e,f,g,k){e=Dj(e);d=tL(b,d,f);b=new CL(b,c);var l=new CL(d[y],c),l=l[Bc]().B4(b)[Zy](e).add(b);c=new CL(d.end,c);c=c[Bc]().B4(b)[Zy](e).add(b);return this.zL(a,l.x,l.y,c.x,c.y,f,g,k)};
W.XI=function(a,b,c,d,e,f,g,k,l){var n=this.ie(oK);this.Sj(n,0,0,this[r],this[A]);g!=iE&&(g=tL(0,k[yc],g),g=uL(g[y],g.end,iE),g=new CL(0,g),g[Zy](Dj(Gj(b,c,d,e))),c=new CL(b,c),e=new CL(d,e),c.add(g),e.add(g),b=c.x,c=c.y,d=e.x,e=e.y);b=h[E](b);c=h[E](c);d=h[E](d);e=h[E](e);g=this.ie(nK);g[w](Ph,Gf+b+Re+c+Ff+d+Re+e+zf);g[w](SJ,Mh);b=this.ie(tBa);b[w](kh,Mh);d=b[x];Fa(d,k[yc]||O);fx(d,k.ab||O);switch(f){case AJ:d[w](kK,ah);break;case iE:d[w](kK,iE);break;case sF:d[w](kK,Os)}k[Id]&&sx(d,MD);k.Tc&&Cx(d,
AG);b[w](Eh,a);n[q](g);n[q](b);this.pj(n,l,!1);return n};W.YI=function(a,b,c,d,e,f,g,k,l,n){a=this.XI(a,b,c,d,e,f,g,k,l);this[q](n,a);return a};W.s0=function(){var a=this.ie(qBa);this.Sj(a,0,0,this[r],this[A]);return a};W.uF=function(a,b){var c=this.ie(P),d=[this.Zb(5E4+b.top),this.Zb(5E4+b[G]+b[r]),this.Zb(5E4+b.top+b[A]),this.Zb(5E4+b[G])];c[x].clip=fya+d[me](Se)+Oe;this.Sj(c,0,0,this[r]+1E5,this[A]+1E5);a.a();d=new oL(c);this[q](d,a);this.hb(1,1,1,1,new bn({fill:Uh}),d);return c};
W.nd=function(a,b,c){a[C](Gf+h[E](b)+Re+h[E](c))};W.xa=function(a,b,c){a[C](Ff+h[E](b)+Re+h[E](c))};W.lr=function(a,b,c,d,e,f,g){a[C](jC+h[E](b)+Re+h[E](c)+Re+h[E](d)+Re+h[E](e)+Re+h[E](f)+Re+h[E](g))};W.Qi=function(a){a[C](ZC)};
W.Wm=function(a,b,c,d,e,f,g,k){f=Bj(f,360);g=Bj(g,360);var l=h[E](Ej(f-90,d)),n=h[E](Fj(f-90,e)),p=h[E](Ej(g-90,d)),s=h[E](Fj(g-90,e));d=h[E](d);e=h[E](e);b=h[E](b);c=h[E](c);l===p&&n===s&&(k&&180>Bj(g-f,360)||!k&&180>Bj(f-g,360))||a[C]((k?Ppa:eC)+(b-d)+Re+(c-e)+Re+(b+d)+Re+(c+e)+Re+(b+l)+Re+(c+n)+Re+(b+p)+Re+(c+s))};W.Em=function(a,b,c){a[x].top=this.Zb(c);Za(a[x],this.Zb(b))};W.yg=function(a,b){pa(a[x],this.Zb(b))};W.Yj=function(a,b){Sa(a[x],this.Zb(b))};W.gS=function(a,b){Za(a[x],this.Zb(b))};
W.hS=function(a,b){a[x].top=this.Zb(b)};W.hd=function(a,b,c){0==c?xw(a,!1):(xw(a,!0),b&&kx(a,b),Hw(a,c))};W.qD=function(a,b){var c=this.pD;qa(c[Ub],a);var d=c[x];fx(d,b.ab);Fa(d,this.Zb(b[yc]||0));sx(d,b[Id]?MD:O);Cx(d,b.Tc?AG:O);Ra(d,es);var e=c[Kd],c=c[$d];Ra(d,Q);b[Id]&&(e*=1.1);b.Tc&&(e*=.9);return new Pk(e,c)};W.k2=function(){if(null!=this.Nv)return this.Nv;var a=cl(P,{style:GBa});this.pD[q](a);Ra(this.pD[x],es);this.Nv=a[Ab]-a[Kd];Ra(this.pD[x],Q);kl(a);return this.Nv};
W.Zb=function(a){return h[E](a)+U};W.ie=function(a){return this.qP[Sb](a)};
W.pj=function(a,b,c){for(var d=a[yd],e=0;e<d[J];e++)a[yd][e][Tc]!=DF&&a[yd][e][Tc]!=GJ||a[Ud](d[e]);c=null!=c?c:!0;if(nn(b)){if(xw(a,!0),Hw(a,b.Nb),kx(a,b.re),c=!(nn(b)&&1<=b.qi),d=b.nl!=Ch,c||d)e=this.ie(sBa),c&&nb(e,String(h[E](100*b.qi))+De),d&&(e.dashstyle=BCa(b.nl)),a[q](e)}else c&&pn(b)?(xw(a,!0),Hw(a,1),kx(a,b.cb())):xw(a,!1);ci(a.filled)&&tw(a,!0);c=b.Hg;if(null!=c){b=this.ie(lK);b[w](FE,c.jg);b[w](ysa,c.Rf);b[w](lh,c.Yv||1);b[w](lxa,c.Zv||1);var d=c.x1,e=c.y1,f=c.Hb;c=c.Lb;typeof d==Eh&&
(d=ka(d,10));typeof e==Eh&&(e=ka(e,10));typeof f==Eh&&(f=ka(f,10));typeof c==Eh&&(c=ka(c,10));c=Gj(d,e,f,c);c=Bj(270-c,360);b[w](Gqa,c);b[w](Nh,WF);a[q](b)}else b.vd?(c=b.vd,b=this.ie(lK),b[w](Nh,ph),b[w](FE,c.Vd()),b[w](ysa,c.hs()),c=mo()+Xma+c.Ib()+Jma,b[w](xJ,c),a[q](b)):b.cb()==Q?tw(a,!1):pn(b)?yw(a,b.cb()):(c=this.ie(lK),nb(c,String(h[E](100*b.Pe))+De),Ya(c,b.cb()),a[q](c))};W.Sj=function(a,b,c,d,e){a=a[x];Ba(a,pg);Za(a,this.Zb(b));a.top=this.Zb(c);pa(a,this.Zb(d));Sa(a,this.Zb(e))};W.zC=function(){return!0};
    function BCa(a) {
        if (ki(a))return a[me](se);
        switch (a) {
            case Ch:
                return Ch;
            case YE:
                return qza;
            default:
                return BCa(Ch)
        }
    }

    function RL(a, b, c, d) {
        if (!(Ak ? 0 <= Ji(Hk, gna) : Bk ? 0 <= Ji(Hk, $ma) : zk ? 0 <= Ji(Hk, nna) : Ek && 0 <= Ji(Hk, ena)))throw m("Graphics is not supported");
        for (var e = h[t](1E5 * h[Hc]()); ba[bA][soa + e];)e++;
        this.Ek = soa + e;
        (a = this.ra = a) && (a.referencepoint = !0);
        Xa(this.ra, O);
        this.Qk = b;
        this.Lm = Sk(this.ra);
        this.s_ = this.Vl = null;
        this.os = !1;
        this.zQ = [];
        this.xk = null;
        this.eqa = (b = Ak ? null != ea[fe] ? 9 > ea[fe] : !Ik(df) : !1) ? QL : PL;
        if (this.xQ = b || d) d = this.Lm[Sb](rG), fb(d, this.Ek), d.id = this.Ek, pa(d, this.Qk[r][kc]()), Sa(d, this.Qk[A][kc]()), bx(d, 0),
            nx(d, WH), Vw(d, 0), Kw(d, 0), d.allowTransparency = Mh, b || cb(d, Lva), this.Lm[q](this.ra, d), d = d[zA] || d[Jy][Ld], d[Mq](), a = [], b ? (a[C](Jna), a[C](YB), a[C](ZB)) : (a[C](Dna), a[C](Kna), a[C](kla), a[C](lla), a[C](YB)), a[C](Rna), a[C](CBa), a[C](Dua), a[C](ela), a[C](Zh), a[C](Ana), a[C](TB), a[C](Ena), a[C](ila), a[C](mf), a[C](Hna), a[C](RB), a[C](UB), d[ey](a[me](re)), d[bz]();
        CCa(this, c)
    }

    Y(RL, ut);
    function CCa(a, b) {
        var c = X(a.nua, a), d = X(a.oua, a);
        SL(c, d, b)
    }

    W = RL[K];
W.oua=function(){if(this.xQ){var a;a=(a=this.Lm.a(this.Ek))?a[zA]||a[Jy][Ld]:null;var b=this.Vl=a[md](pya);b&&(b.referencepoint=!0);this.s_=TL(a[Td],this.Qk)}else this.Vl=this.Lm[Sb](P),Ml(this.Vl,qh,th),$l(this.Vl,this.Qk),this.Vl.dir=$G,this.ra[q](this.Vl),this.s_=TL(this.ra,this.Qk);this.os=!0};function TL(a,b){var c=Sk(a),d=c[Sb](P),e=d[x];Ra(e,Q);Ba(e,pg);e.top=b[A]+10+U;Za(e,b[r]+10+U);Gw(e,YH);ML(d,Sg,!0);d[w](uD,!0);e=c.gc();c[q](d,e[Db](se));c[q](a,d);return d}
W.nua=function(){if(!this.xQ)return!0;var a;return(a=(a=this.Lm.a(this.Ek))?a[Jy]||bl(a[zA]||a[Jy][Ld]):null)&&a._loaded};W.jb=function(a){if(!this.os)return null;for(a=null!=a?a:0;this.zQ[J]<=a;){var b=Sk(this.Vl)[Sb](P);Ml(b,qh,pg);Ql(b,0,0);$l(b,GB,GB);this.Vl[q](b);b=new this.eqa(b,this.s_);vt(this,b);this.zQ[C](b)}return this.zQ[a]};W.lA=function(){if(!this.os)return null;if(!this.xk){var a;a=this.Lm[Sb](P);this.xk=new OL(a);this.Lm[q](this.ra,this.xk.pc())}return this.xk};
W.Zq=function(a,b){SL(X(function(){return null!=this.Vl},this),a,b)};Jx(W,function(a,b){if(!Qk(this.Qk,a))if(this.Qk=a,this.xQ){var c=this.Lm.a(this.Ek);c&&(pa(c,this.Qk[r][kc]()),Sa(c,this.Qk[A][kc]()))}else this.os&&$l(this.Vl,this.Qk);this.os||CCa(this,b)});function SL(a,b,c,d){a[L]()?b[L]():DCa(a,b,c,d)}function DCa(a,b,c,d){var e=null!=d?d:10;ba[xq](c(function(){SL(a,b,c,e)}),e)}W.B=function(){this.Lm.Nc(this.ra);wt(this.xk);Z(this.zQ,function(a){wt(a)});RL.e.B[L](this)};function UL(){this.md=[]}W=UL[K];W.Tj=function(a,b){this.md[C]({brush:a,d_:b})};hx(W,function(a,b){this.Tj(null,qL(a,b))});W.da=function(a,b,c){this.Tj(a,{type:SG,data:{x:b,y:c}})};W.Bp=function(a,b,c,d,e,f,g){this.Tj(a,{type:UE,data:{x1:b,y1:c,Hb:d,Lb:e,x:f,y:g}})};W.xf=function(a,b,c,d,e,f,g,k){this.Tj(a,{type:rD,data:{jC:b,kC:c,Gi:d,Hi:e,ax:f,Lr:g,nba:k}})};Qw(W,function(a){var b=this.md[0].d_[$];this.da(a,b.x,b.y)});
function ECa(a){switch(a[H]){case SH:case SG:case UE:return a=a[$],new Kk(a.x,a.y);case rD:a=a[$];var b=Bj(a.Lr,360);return new Kk(a.jC+Ej(b-90,a.Gi),a.kC+Fj(b-90,a.Hi));default:return new Kk(0,0)}}
W.Bc=function(a){for(var b=[],c=null,d=0;d<this.md[J];d++){var e=this.md[d],f=e.d_;if(f[H]==SH)c=ECa(f);else{t:{for(var e=e.brush,g=0;g<b[J];g++){var k=b[g];if($ea(e,k.brush)){e=k;break t}}k={brush:e,md:new pL,ef:null};b[C](k);e=k}Lk(e.ef,c)||e.md[Hz](c.x,c.y);e.md.Tj(f);c=e.ef=ECa(f)}}if(aj(b))a=null;else if(1==b[J])a=a.Bc(b[0].md,b[0].brush);else{c=a.Ba();for(d=0;d<b[J];d++)f=b[d],f=a.Bc(f.md,f.brush),a[q](c,f);a=c.a()}return a};
    function FCa(a) {
        for (var b = new pL, c = 0; c < a.md[J]; c++)b.Tj(a.md[c].d_);
        return b
    }

    function GCa(a, b) {
        var c = new pL, d = a.md;
        if (0 == d[J] || 1 == d[J])return c;
        for (var e = [null], f = 0; f < d[J]; f++) {
            var g = d[f];
            g[$] && e[C](new Kk(g[$].x, g[$].y))
        }
        e[C](null);
        var g = d[d[J] - 1][H] == CE, f = e[1][Bc](), k = e[2][Bc](), l = e[e[J] - 3][Bc](), n = e[e[J] - 2][Bc]();
        g ? (e[0] = n, e[e[J] - 1] = f) : Lk(f, n) ? (e[0] = l, e[e[J] - 1] = k) : (e[0] = BL(new AL(f.x, f.y, k.x, k.y), -1), e[e[J] - 1] = BL(new AL(n.x, n.y, l.x, l.y), -1));
        for (var k = 0 > b, p = null, s = null, n = null, l = e[J] - 2, f = 0; f <= l; f++)if (!Lk(e[f], e[f + 1])) {
            var u;
            u = e[f];
            var v = e[f + 1], z, B = (v.y - u.y) / (v.x - u.x);
            z =
                na(B) ? {Ul: B, Yo: u.y - B * u.x} : {Ul: da, Yo: u.x};
            B = z.Ul;
            z = z.Yo;
            if (B == da) u = {Ul: da, Yo: 0 > v.y - u.y ? z + b : z - b}; else {
                var D = b * h[zd](1 + B * B);
                u = {Ul: B, Yo: 0 < v.x - u.x ? z + D : z - D}
            }
            p ? (v = VL(p, u), ni(v) ? (B = VL(WL(s, e[f]), p), z = VL(WL(e[f], s), p), B = Sm(new Pm(B.x, z.x), v.x) && Sm(new Pm(B.y, z.y), v.y)) : B = v == da, p = B && v != da ? v : VL(WL(e[f], s), p), c.Tj(HCa(n, p)), B || (n = VL(WL(e[f], e[f + 1]), u), c.xf(e[f].x, e[f].y, h.abs(b), h.abs(b), 180 - 180 * h[xd](p.x - e[f].x, p.y - e[f].y) / h.PI, 180 - 180 * h[xd](n.x - e[f].x, n.y - e[f].y) / h.PI, k)), p = u, s = e[f], n = d[f]) : (p = u, s = e[f], n = qL(d[f].x,
d[f].y))}g&&c[bz]();return c}function HCa(a,b){var c=hk(a);switch(a[H]){case SH:case SG:c[$].x=b.x;c[$].y=b.y;break;case UE:c[$].x=b.x;c[$].y=b.y;var d=b.x-a[$].x,e=b.y-a[$].y;c[$].x1+=d;c[$].y1+=e;c[$].Hb+=d;c[$].Lb+=e}return c}function WL(a,b){var c=(a.x-b.x)/(b.y-a.y),d;na(c)?d=a.y-c*a.x:(c=da,d=a.x);return{Ul:c,Yo:d}}

    function VL(a, b) {
        var c = a.Ul, d = a.Yo, e = b.Ul, f = b.Yo;
        na(c) || (c = da);
        na(e) || (e = da);
        if (c == e || 1E-5 >= h.abs(c - e))return d == f || 1E-5 >= h.abs(d - f) ? da : null;
        if (c == da)return new Kk(d, e * d + f);
        if (e == da)return new Kk(f, c * f + d);
        var g = e - c;
        return new Kk(-(f - d) / g, (d * e - c * f) / g)
    }

    var XL = function () {
        function a(a, b) {
            if (-1 === b[qd](Ue))return b;
            var c = a[rc](jr);
            c.pop();
            var d = b[rc](jr), l = d.pop();
            if (d[0] === Ue) d[le][Sc](d, [0, 1][Bb](c)); else {
                for (var n = 0, p = d[J]; n < p; n++)if (d[n] === fr) c.pop(), d[le](n, 1), n--; else break;
                d = c[Bb](d)
            }
            d[C](l);
            return d[me](jr)
        }

        function b(b, c, g) {
            for (var k = [], l = 0, n = c[J]; l < n; l++)k[C](d[a(b, c[l])]);
            d[b] = g[Sc](this, k)
        }

        var c, d = {};
        b(zE, [], function () {
            function a() {
            }

            function b(c) {
                lb(a, c);
                return new a
            }

            function c(a) {
                return function () {
                    throw'abstract method "' + a + '" not implemented.';
                }
            }

            function d(a, b) {
                this.IW(a);
                this.lB[a][C](b);
                return this
            }

            function l(a, b) {
                this.IW(a);
                for (var c = this.lB[a], d = null, e = 0, f = c[J]; e < f; e++)if (c[e] === b) {
                    d = e;
                    break
                }
                return null != d ? (c[le](d, 1), !0) : !1
            }

            function n(a, b) {
                this.IW(a);
                for (var c = this.lB[a], d = [], e = 0, f = c[J]; e < f; e++)d[C](c[e]);
                for (e = 0; e < f; e++)d[e][Sc](this, b);
                return 0 < f
            }

            function p(a) {
                if (!this.lB[zc](a))throw'event type "' + a + '" unknown.';
            }

            var s = {};
            s.Ir = ca[sq] || b;
            s.Kha = c;
            s.Dha = function (a) {
                for (var b = [Fta, Gta, Hta, Ita, Jta, Kta, mya, Nza, qsa], d, e = 0, f = b[J]; e < f; e++)d =
b[e],a[K][d]=c(d)};s.NW=function(a){a[K].m=d;a[K].vb=l;a[K].fireEvent=n;a[K].IW=p};return s});b(gza,[zE],function(a){function b(a){this.lB={add:[],click:[],getcontext:[],mousemove:[],mouseenter:[],mouseleave:[],box:[],redraw:[],remove:[],playAnimation:[],finishAnimation:[]};this.kl=this.ya=null;this.yd={};this.FG=[];this.qN=[];this.Lha=d[ac](this);if(null!=a)for(var e in a)c[L](this,e,a[e])}function c(a,b){b instanceof ca&&(b=b[kc]());if(this.yd[a]===b)return!1;this.yd[a]=b;this.fo=null;return!0}
function d(){if(!this.HW){for(var a=0,b=this.qN[J];a<b;a++)this.Mha(this.qN[a]);this.qN=[]}}qa(b[K],function(a){return void 0!==a?(this.ya=a,this):this.ya});Pw(b[K],function(a,b){return void 0!==b?(c[L](this,a,b)&&this[kz](GI,[this,a]),this):a?this.yd[a]:this.yd});b[K].getContext=function(){this.kl||this[kz](UF,[this]);return this.kl};b[K].ul=function(){if(!(null!=this.fo||this.jB()&&null!=this.fo||this[kz](UD,[this])&&null!=this.fo))throw"cannot determine bounding box until inserted into a scene.";
return this.fo};b[K].jB=function(){return!1};b[K].Mha=function(a){if(this.HW)this.qN[C](a);else a=this.FG[qd](a),-1<a&&this.FG[le](a,1),0===this.FG[J]&&this.vb(HF,this.Lha)};Ia(b[K],a.Kha(wsa));a.NW(b);return b});b(JI,[zE,gza],function(a){function b(a,c,d){this.Q=c;this.qa=d;this.lB={add:[],click:[],mousemove:[],mouseenter:[],mouseleave:[],redraw:[],remove:[]}}a.NW(b);a.Dha(b);return b});b(jza,[vB,zE],function(a,b){function c(b,d){a[L](this,d);this.mg=[];if(b)throw"prepopulating a group is unimplemented.";
this.oB=l[ac](this);this.Hl=n[ac](this);this.nB=p[ac](this);this.GG=s[ac](this)}function d(a){if(a[Sz]())throw"cannot add a shape to a group that already has a context.";this.mg[C](a);a.m(GI,this.oB);a.m(gs,this.Hl);a.m(PH,this.Hl);a.m(NH,this.Hl);a.m(OH,this.Hl);a.m(UF,this.nB);a.m(II,this.GG);this[kz](jD,[a,!1]);return this}function l(){}function n(a){this[kz](a[H],[a])}function p(a){a.kl=this;return!0}function s(a){var b=this.mg[qd](a);if(0>b)throw spa;a.vb(GI,this.oB);a.vb(gs,this.Hl);a.vb(PH,
this.Hl);a.vb(NH,this.Hl);a.vb(OH,this.Hl);a.vb(UF,this.nB);a.vb(II,this.GG);a.kl=null;this.mg[le](b,1);return!0}function u(a){if(0>this.mg[qd](a))throw spa;a[kz](II,[a]);return this}lb(c,b.Ir(a[K]));Ea(c[K],c);c.mh=Hoa;c[K].hu=d;c[K].add=d;va(c[K],function(){for(var a=0,b=this.mg[J];a<b;a++)this.mg[a].vb(GI,this.oB),this[kz](II,[this.mg[a]]);this.mg=[];this[kz](GI,[this]);return this});Pa(c[K],function(a){return 0<=this.mg[qd](a)});c[K].oN=u;ua(c[K],u);c[K].LW=function(){return this.mg};return c});
b(hza,[vB,zE],function(a,b){function c(b,d,f,g){g=g||{};g.r=null==b?g.r:b;g.x=null==d?g.x:d;g.y=null==f?g.y:f;a[L](this,g)}lb(c,b.Ir(a[K]));Ea(c[K],c);c.mh=goa;c[K].jB=function(){var a=this[x](sh),b=this[x](AK),c=this[x](Wh);this.fo={x:b-a,y:c-a,width:2*a,height:2*a};return!0};return c});b(iza,[vB,zE],function(a,b){function c(b,d,f,g,s){s=s||{};s.rx=null==b?s.rx:b;s.ry=null==d?s.ry:d;s.x=null==f?s.x:f;s.y=null==g?s.y:g;a[L](this,s)}lb(c,b.Ir(a[K]));Ea(c[K],c);c.mh=uoa;c[K].jB=function(){var a=this[x](VI),
b=this[x](WI),c=this[x](AK),d=this[x](Wh);this.fo={x:c-a,y:d-b,width:2*a,height:2*b};return!0};return c});b(kza,[vB,zE],function(a,b){function c(b,d,f,g,s){s=s||{};s.x1=null==b?s.x1:b;s.y1=null==d?s.y1:d;s.x2=null==f?s.x2:f;s.y2=null==g?s.y2:g;a[L](this,s)}lb(c,b.Ir(a[K]));Ea(c[K],c);c.mh=IC;c[K].jB=function(){var a=this[x](BK),b=this[x](DK),c=this[x](CK),d=this[x](EK);this.fo={x:h.min(a,c),y:h.min(b,d),width:h.abs(c-a),height:h.abs(d-b)};return!0};return c});b(gH,[],function(){function a(b,c){var d=
b%c;return 0>d*c?d+c:d}function b(c,d,f){c=a(c,360);d=a(d,360);d<c&&(d+=360);f=a(f,360);f<c&&(f+=360);return f<=d}return{pN:a,gwa:function(c,d,l,n,p,s,u){p=a(p,360);s=a(s,360);var v=p/180*h.PI,z=p/180*h.PI,B=c+l*h.cos(v),v=d+n*h.sin(v),D=c+l*h.cos(z),z=d+n*h.sin(z);u||(u=p,p=s,s=u);u=b(p,s,0)?c+l:h.max(B,D);var N=b(p,s,90)?d+n:h.max(v,z);c=b(p,s,180)?c-l:h.min(B,D);d=b(p,s,270)?d-n:h.min(v,z);return{x1:c,y1:d,Hb:u,Lb:N}},hwa:function(a,b,c,d){function e(p){var v=1-p,z=v*v,B=p*p,D=z*v,z=3*p*z,v=3*
v*B;p*=B;f[C](a.x*D+b.x*z+c.x*v+d.x*p);u[C](a.y*D+b.y*z+c.y*v+d.y*p)}var f=[a.x,d.x],u=[a.y,d.y],v=2*a.x-4*b.x+2*c.x,z=b.x-a.x,B=-a.x+3*b.x+d.x-3*c.x,D=(-v+h[zd](v*v-4*z*B))/(2*B),v=(-v-h[zd](v*v-4*z*B))/(2*B);h.abs(D)>IB&&(D=.5);h.abs(v)>IB&&(v=.5);0<D&&1>D&&e(D);0<v&&1>v&&e(v);v=2*a.y-4*b.y+2*c.y;z=b.y-a.y;B=-a.y+3*b.y+d.y-3*c.y;D=(-v+h[zd](v*v-4*z*B))/(2*B);v=(-v-h[zd](v*v-4*z*B))/(2*B);h.abs(D)>IB&&(D=.5);h.abs(v)>IB&&(v=.5);0<D&&1>D&&e(D);0<v&&1>v&&e(v);D={x1:h.min[Sc](h,f),y1:h.min[Sc](h,u),
Hb:h.max[Sc](h,f),Lb:h.max[Sc](h,u)};pa(D,D.Hb-D.x1);Sa(D,D.Lb-D.y1);return D}}});b(lza,[vB,zE,gH],function(a,b,c){function d(b){a[L](this,b);this.fo={x1:null,y1:null,Hb:null,Lb:null,width:0,height:0};this.Pp=[]}lb(d,b.Ir(a[K]));Ea(d[K],d);d.mh=dpa;d[K].jB=function(){return!1};hx(d[K],function(a,b){this.Pp[C](Uoa+a+se+b);return this});d[K].line=function(a,b){this.Pp[C](Soa+a+se+b);return this};d[K].arc=function(a,b,d,e,f,k,z){f=c.pN(f,360);k=c.pN(k,360);270===f&&0===k?this.Pp[C](bC+d+se+e+JA+(d+a)+
se+b):180===f&&270===k?this.Pp[C](bC+d+se+e+JA+a+se+(b-e)):0===f&&90===k?this.Pp[C](bC+d+se+e+JA+a+se+(b+e)):90===f&&180===k?this.Pp[C](bC+d+se+e+JA+(a-d)+se+b):this.Pp[C](Coa+a+se+b+se+d+se+e+se+f+se+k+se+ha(z));return this};Qw(d[K],function(){this.Pp[C](hg);return this});return d});b(mza,[vB,zE],function(a,b){function c(b,d,f,g,s){s=s||{};s.x=null==b?s.x:b;s.y=null==d?s.y:d;pa(s,null==f?s[r]:f);Sa(s,null==g?s[A]:g);a[L](this,s)}lb(c,b.Ir(a[K]));Ea(c[K],c);c.mh=lpa;c[K].jB=function(){this.fo={x:this[x](AK),
y:this[x](Wh),width:this[x](Vh),height:this[x](Rg)};return!0};Ia(c[K],function(){return new c(this[x](AK),this[x](Wh),this[x](Vh),this[x](Rg),this[x]())});return c});b(oza,[vB,zE],function(a,b){function c(b,d,f,g){g=g||{};g.x=null==b?g.x:b;g.y=null==d?g.y:d;cx(g,null==f?g[id]:f);a[L](this,g)}lb(c,b.Ir(a[K]));Ea(c[K],c);c.mh=UC;return c});b(pJ,[Fma,wB,xB,yB,zB,AB,CB],function(a,b,c,d,l,n,p){return{cV:a,Circle:b,DG:c,lu:d,wW:l,Rect:n,Text:p}});b(Hya,[],function(){function a(b){for(var c=0,d=arguments[J];c<
d;c++)if(null!=arguments[c])return arguments[c]}function b(c,d,f){s(c,d,f,!1);d=a(d[x](FF),d[x](jua),d[x](DF));typeof d!==Eh&&typeof d!==T||c[w](DF,d)}function c(b,d){var f=a(d[x](iua),d[x](kua),d[x](EF));typeof f!==Eh&&typeof f!==T||b[w](EF,f)}function d(b,c,f){s(b,c,f,!0);c=a(c[x](JJ),c[x](nAa),c[x](GJ));typeof c!==Eh&&typeof c!==T||b[w](GJ,c)}function l(b,c){var d=a(c[x](lAa),c[x](oAa),c[x](HJ));typeof d!==Eh&&typeof d!==T||b[w](HJ,d)}function n(b,c){var d=a(c[x](mAa),c[x](pAa),c[x](IJ));typeof d!==
Eh&&typeof d!==T||b[w](IJ,d)}function p(a,b){var c=b[x](lh);typeof c!==Eh&&typeof c!==T||a[w](lh,c)}function s(a,b,c,d){var e=d?GJ:DF,f=b[x](e+Kma),g=b[x](e+Lma);d=a[Xd](e);if(f&&g){var k=b[x](e+Mma)||FB,l=b[x](e+Oma)||FB,n=b[x](e+Nma)||GB,p=b[x](e+Pma)||FB,e=[f,g,k,l,n,p][me](),s=b.Jr;if(b=s?R[e]:M[e])u=b[Xd](qG);else{b=ea[Ty](nG,WG);var u=cya+(s?V++:S++);b[w](qG,u);b[w](BK,k);b[w](DK,l);b[w](CK,n);b[w](EK,p);k=ea[Ty](nG,EJ);k[w](iAa,f);k[w]($H,FB);f=ea[Ty](nG,EJ);f[w](iAa,g);f[w]($H,GB);b[q](k);
b[q](f);for(s?R[e]=b:M[e]=b;c[sd]!==KJ;)c=c[je];c=c[Rb](cF)||c;c[Fb](b,c[Ub])}c=hK+u+Oe;d!==c&&a[w](DF,c)}else d&&d[hc](0,5)===hK&&a[Uc](e)}function u(a,b,c){var d=b[x](lJ)||0,e=b[x](kJ)||0;if(d||e){var f=b[x](dza)||b[x](cza)||b[x](mJ)||0,g=b[x](fza)||b[x](eza)||b[x](nJ)||0,k=[d,e,f,g][me](),l=b.Jr,n=l?Ja[k]:ma[k];if(n)b=n[Xd](qG);else{n=ea[Ty](nG,Ig);b=dya+(l?Va++:Ha++);n[w](qG,b);var p=ea[Ty](nG,eua);p[w](sG,ypa);p[w](eAa,d);d=ea[Ty](nG,gua);d[w](lF,f);d[w](mF,g);if(null!=e){var s=ea[Ty](nG,cua),
u=ea[Ty](nG,dua);u[w](Nh,VG);u[w](Jza,e)}var f=ea[Ty](nG,fua),g=ea[Ty](nG,xF),v=ea[Ty](nG,xF);v[w](sG,zpa);n[q](p);n[q](d);null!=e&&(s[q](u),n[q](s));f[q](g);f[q](v);n[q](f);for(l?Ja[k]=n:ma[k]=n;c[sd]!==KJ;)c=c[je];c=c[Rb](cF)||c;c[Fb](n,c[Ub])}c=a[Xd](Ig);b=hK+b+Oe;c!==b&&a[w](Ig,b)}else a.hasAttribute(Ig)&&a[Uc](Ig)}var v={"fill.color":b,fillColor:b,fill:b,"fill.gradient.from":b,"fill.gradient.to":b,"fill.gradient.x1":b,"fill.gradient.y1":b,"fill.gradient.x2":b,"fill.gradient.y2":b,"fill.opacity":c,
fillOpacity:c,"fill-opacity":c,opacity:p,"stroke.color":d,strokeColor:d,stroke:d,"stroke.gradient.from":d,"stroke.gradient.to":d,"stroke.gradient.x1":d,"stroke.gradient.y1":d,"stroke.gradient.x2":d,"stroke.gradient.y2":d,"stroke.opacity":l,strokeOpacity:l,"stroke-opacity":l,"stroke.width":n,strokeWidth:n,"stroke-width":n,x:function(a,b){var c=b[x](AK);a[w](AK,c)},y:function(a,b){var c=b[x](Wh);a[w](Wh,c)}},z={},B={},D=0,N=0,M={},R={},S=0,V=0,ma={},Ja={},Ha=0,Va=0;return{Eha:u,Yw:function(a,e,s){p(a,
e);b(a,e,s);c(a,e);d(a,e,s);l(a,e);n(a,e);u(a,e,s);var v=e[x](ssa),M=e[x](rsa);if(v&&M){var ma=e[x](tsa)||0,R=e[x](usa)||0,S=[ma,R,v,M][me](),V=e.Jr;if(e=V?B[S]:z[S])Ja=e[Xd](qG);else{e=ea[Ty](nG,vsa);var Ja=bya+(V?N++:D++);e[w](qG,Ja);var Ha=ea[Ty](nG,EI);Ha[w](AK,ma);Ha[w](Wh,R);Ha[w](Vh,v);Ha[w](Rg,M);e[q](Ha);for(V?B[S]=e:z[S]=e;s[sd]!==KJ;)s=s[je];s=s[Rb](cF)||s;s[Fb](e,s[Ub])}a[w](AE,hK+Ja+Oe)}else a.hasAttribute(AE)&&a[Uc](AE)},iB:function(a,b,c,d,e){e=e||{};return(b=e[b]||v[b])?(b(a,c,d),
!0):!1},Gha:function(){for(var a in ma)if(ma[zc](a)){var b=ma[a];b[je][Ud](b);delete ma[a]}Ha=0;ma={};for(var c in M)ma[zc](c)&&(a=M[c],a[je][Ud](a),delete M[c]);S=0;M={};for(var d in z)z[zc](d)&&(c=z[d],c[je][Ud](c),delete z[d]);D=0;z={}}}});b(yya,[BB],function(a){function b(a,c){var d=c[x](AK);a[w](WE,d)}function c(a,b){var d=b[x](Wh);a[w](XE,d)}function d(a,b){var c=b[x](sh);a[w](sh,c)}var l={},n={r:d,x:b,y:c};aq(l,function(l,n,u){u=u||ea[Ty](nG,yE);b(u,l);c(u,l);d(u,l);a.Yw(u,l,n);n&&u[je]!==
n&&n[q](u);return u});l.ih=function(b,c,d,f){a.iB(f,c,b,d,n)};return l});b(zya,[BB],function(a){return{draw:function(b,c,d){d=d||ea[Ty](nG,oF);var l=b[x](AK);d[w](WE,l);l=b[x](Wh);d[w](XE,l);l=b[x](VI);d[w](VI,l);l=b[x](WI);d[w](WI,l);a.Yw(d,b,c);c&&d[je]!==c&&c[q](d);return d},ih:function(b,c,d,l){a.iB(l,c,b,d)}}});b(Bya,[BB],function(a){function b(a,c){var d=c[x](BK);a[w](BK,d)}function c(a,b){var d=b[x](DK);a[w](DK,d)}function d(a,b){var c=b[x](CK);a[w](CK,c)}function l(a,b){var c=b[x](EK);a[w](EK,
c)}var n={},p={x1:b,x2:d,y1:c,y2:l};aq(n,function(n,p,v){v=v||ea[Ty](nG,SG);b(v,n);d(v,n);c(v,n);l(v,n);a.Yw(v,n,p);p&&v[je]!==p&&p[q](v);return v});n.ih=function(b,c,d,f){a.iB(f,c,b,d,p)};return n});b(Dya,[gH,BB],function(a,b){function c(b){b=b.Pp;for(var d=[],f=0,g=b[J];f<g;f++){var s=b[f];if(s[ee](0,8)===Coa){var u=s[rc](se),v=+u[1],z=+u[2],s=+u[3],B=+u[4],D=a.pN(+u[5],360),N=a.pN(+u[6],360),u=!!+u[7],v=v+h.cos(N/180*h.PI)*s,z=z+h.sin(N/180*h.PI)*B,D=u?N-D:D-N;0>D&&(D+=360);s=bC+s+se+B+bla+ha(180<
D)+se+ha(u)+se+v+se+z}d[C](s)}return d[me](se)}return{o6:function(a,d,e){var p=e||ea[Ty](nG,nI);e||p[w](Ag,c(d));b.Yw(p,d,a);return p},Hha:c}});b(Cya,[Gma,BB],function(a,b){return{draw:function(b,c,d){b=a.o6(c,b,d);c&&b[je]!==c&&c[q](b);return b},ih:function(a,c,d,e){b.iB(e,c,a,d)}}});b(nza,[zB],function(a){return{Iha:function(a){var b=a[x](PE)||0,c=a[x](QE)||0,d=a[x](RE)||0,e=a[x](SE)||0,p=a[x](JE)||0,s=a[x](KE)||0,u=a[x](LE)||0;a=a[x](ME)||0;return b||c||d||e||p||s||u||a},n6:function(b){var c=b[x](PE)||
0,d=b[x](QE)||0,l=b[x](RE)||0,n=b[x](SE)||0,p=b[x](JE)||0,s=b[x](KE)||0,u=b[x](LE)||0,v=b[x](ME)||0,z=b[x](Vh),B=b[x](Rg),D=b[x](AK),N=b[x](Wh),D=0<=z?D:D+z,N=0<=B?N:N+B,z=h.abs(z),B=h.abs(B);if(c+l>z)var M=z/(c+l),c=c*M,d=d*M,l=l*M,n=n*M;p+u>z&&(M=z/(p+u),p*=M,s*=M,u*=M,v*=M);d+s>B&&(M=B/(d+s),c*=M,d*=M,p*=M,s*=M);n+v>B&&(M=B/(n+v),l*=M,n*=M,u*=M,v*=M);return(new a(b[x]()))[Hz](D+z-l,N).arc(D+z-l,N+n,l,n,270,0,!0).line(D+z,N+B-v).arc(D+z-u,N+B-v,u,v,0,90,!0).line(D+p,N+B).arc(D+p,N+B-s,p,s,90,180,
!0).line(D,N+d).arc(D+c,N+d,c,d,180,270,!0)[bz]()}}});b(Eya,[Dma,Gma,BB],function(a,b,c){return{draw:function(d,l,n){var p=d[x](NE),s=d[x](OE),u=d[x](Vh),v=d[x](Rg),z=d[x](AK),B=d[x](Wh),z=0<=u?z:z+u,B=0<=v?B:B+v,u=h.abs(u),v=h.abs(v);typeof p===T&&typeof s===T||!a.Iha(d)?(n=n||ea[Ty](nG,EI),n[w](AK,z),n[w](Wh,B),n[w](Vh,u),n[w](Rg,v),null!=p&&typeof p===T&&n[w](VI,p),null!=s&&typeof s===T&&n[w](WI,s),c.Yw(n,d,l)):(d=a.n6(d),n=b.o6(l,d,n));l&&n[je]!==l&&l[q](n);return n},ih:function(d,l,n,p){if(!c.iB(p,
l,d,n))switch(l){case NE:case OE:case PE:case QE:case RE:case SE:case JE:case KE:case LE:case ME:p[Tc][pe]()===nI?(d=a.n6(d),d=b.Hha(d),p[w](Ag,d)):l===NE?p[w](VI,d[x](NE)):l===OE&&p[w](WI,d[x](OE));break;case lJ:case kJ:case dza:case cza:case mJ:case fza:case eza:case nJ:c.Eha(p,d,n);break;default:throw'unknown property on rect "'+l+'".';}}}});b(Iya,[BB,Ema],function(a){function b(a,c){var d=c[x](tua)||c[x](wua)||c[x](MF);typeof d===Eh&&fx(a[x],d)}function c(a,b){var d=b[x](uua)||b[x](NF);typeof d===
T&&(d+=U);typeof d===Eh&&Fa(a[x],d)}function d(a,b){var c=b[x](vua)||b[x](xua);typeof c!==Eh&&typeof c!==T||sx(a[x],c)}function l(a,b){!0===b[x](AG)&&Cx(a[x],AG)}function n(a,b){!0===b[x](fK)&&(a[x].textDecoration=fK)}function p(p,s,u){var D=p[x](wwa)||p[x](swa)||0,N=p[x](Us);typeof N===Eh&&(N=N[rc](re));var M=p[x](Wh),R=!0;1===N[J]&&(N=N[0],R=!1);var S=R?O:N,V=p[x](AK);u=u&&u[Tc]===Us?u:ea[Ty](nG,Us);u.textContent=S;u[w](aya,Mh);u[w](AK,null==V?p[x](AK):V);u[w](Wh,null==M?p[x](Wh):M);u[w](Fh,Ysa);
u[x].webkitFontSmoothing=ira;a.Yw(u,p,s);l(u,p);n(u,p);b(u,p);c(u,p);d(u,p);M=u;s&&M[je]!==s&&s[q](M);s=[];if(R)for(S=0,u=N[J];S<u;S++){V=ea[Ty](nG,eBa);V.textContent=N[S];V[w](AK,p[x](AK));V[w](Wh,p[x](Wh));var ma=M.getBBox()[A];0<S&&(ma+=D);V[w](mF,ma+U);M[q](V);s[C](V)}D=R?s:[M];N=h.max(0,h.min(1,p[x](cG)||0));if(fa(N)||!na(N))N=0;s=p[x](qK);if(typeof s===T){if(s=h.max(0,h.min(1,s)),fa(s)||!na(s))s=0}else s=CD;S=M.getBBox();u=p[x](Wh)-S.y;V=D[D[J]-1][Tc][pe]()===eBa?D[D[J]-1][rb]().top-M[rb]().top:
D[D[J]-1].getBBox().y-S.y;R=p[x](Wh);if(typeof s===T)R=R+u-S[A]*s;else if(s===CD)R=R+u-V;else throw"Unrecognized valign value: "+s;M[w](Wh,R);s=0;for(S=D[J];s<S;s++)u=D[s],u[w](lF,-u.getComputedTextLength()*N+U),u[w](Wh,R);D=p[x](QI);null!=D&&0!=D&&M[w](Kh,RI+D+se+p[x](AK)+se+p[x](Wh)+Oe);return M}var s={},u={"font.family":b,fontFamily:b,fontName:b,"font.size":c,fontSize:c,"font.weight":d,fontWeight:d,italic:l,underline:n};aq(s,p);s.ih=function(b,c,d,f){if(!a.iB(f,c,b,d,u))if(c===Us||c===cG||c===
qK){for(;f&&f[Ub];)f[Ud](f[Ub]);b=p(b,d,f);if(f!==b)throw"error redrawing text";}else throw'error redrawing text element with changed property "'+c+'".';};return s});b(Aya,[wB,xB,yB,zB,AB,CB,BB],function(a,b,c,d,l,n,p){function s(a,b,c){c=c||ea[Ty](nG,Ng);p.Yw(c,a,b);b&&c[je]!==b&&b[q](c);return c}a={};aq(a,s);a.ih=function(a,b,c){b=s(a,b,c);c!==b&&a[Sz]()[kz](jD,[a,b,!1]);a=a.mg[jd]();a[dq]();return a};return a});b(Fya,[pJ,Fma,wB,xB,yB,zB,AB,CB],function(a,b,c,d,l,n,p,s){var u={};u[a.cV.mh]=b;u[a[oA].mh]=
c;u[a.DG.mh]=d;u[a.lu.mh]=l;u[a.wW.mh]=n;u[a[Gz].mh]=p;u[a[wz].mh]=s;return u});b(Gya,[JI,zE,pJ,Hma,BB],function(a,b,c,d,l){function n(b,c,d){a[L](this,b,c,d);var f=this.svg=ea[Ty](nG,KJ);f[w](Vh,c);f[w](Rg,d);S[L]({svg:b});f[q](ea[Ty](nG,cF));b[q](f);this.nB=D[ac](this);this.OW=N[ac](this);this.oB=B[ac](this);this.GG=v[ac](this);this.q6=s[ac](this);this.Hl=z[ac](this);this.r6=M[ac](this);f[Uq](gs,this.Hl);f[Uq](PH,this.Hl);f[Uq](Is,this.Hl);f[Uq](Hs,this.Hl);this.Qp=[];this.elements=[]}function p(a,
b,c){var d=this.Qp[qd](a);if(0<=d){if(null!=this[oy][d]||!a.Jr)throw"Shape exists and is not a staged shape.";a.Jr=!1;this[oy][d]=b}else this.Qp[C](a),this[oy][C](b);a[uc].mh===UC&&a.m(UD,this.OW);a.m(GI,this.oB);a.m(jD,this.q6);a.m(Fxa,this.r6);a.m(II,this.GG);c&&a.m(UF,this.nB);return a}function s(a,b){var c=b?this.svg:R[L](this,a[Sz]()),c=d[a[uc].mh][br](a,c);p[L](this,a,c,!!b);u[L](this,a,c);return a}function u(a,b){if(a.LW)for(var c=a.mg,e=0,f=c[J];e<f;e++){var g=c[e],l=d[g[uc].mh][br](g,b);
p[L](this,g,l,!1);u[L](this,g,l)}}function v(a){var b=this.Qp[qd](a);if(0>b)return!1;if(a.LW){for(var b=a.mg,c=0,d=b[J];c<d;c++)a[kz](II,[b[c]]);b=this.Qp[qd](a)}a.Jr||this[oy][b][je][Ud](this[oy][b]);this.Qp[le](b,1);this[oy][le](b,1);a.vb(UD,this.OW);a.vb(GI,this.oB);a.vb(II,this.GG);a.vb(UF,this.nB);a.vb(jD,this.q6);a.vb(Fxa,this.r6);a.kl=null;return!0}function z(a){for(var b=a[ar];null!=b[Xd](aya);)b=b[je];var c=this[oy][qd](a[ar]);if(0<=c){var b=a[Jq],d=a[Kq];a=a[H];a===Is?a=NH:a===Hs&&(a=OH);
c=this.Qp[c];c[kz](a,[{point:{x:b,y:d},type:a,target:c}])}}function B(a,b){var c=a[Sz]()||this,e=R[L](this,a),c=R[L](this,c);d[a[uc].mh].ih(a,b,c,e)}function D(a){a.kl=this}function N(a){if(a[uc].mh!==dpa){if(a.Jr){var b;if(!this.p6){b=this.p6=ea[Sb](P);Ba(b[x],pg);b[x].top=fma;Za(b[x],fma);Gw(b[x],YH);var c=ea[Ty](nG,KJ);b[q](c);ea[Td][q](b)}b=this.p6;Ra(b[x],es);c=d[a[uc].mh][br](a,b[Ub])}else c=R[L](this,a);var e=c.getBBox();a.fo={width:e[r],height:e[A],x:e.x,y:e.y};a.Jr&&(Ra(b[x],Q),c[je][Ud](c))}}
function M(a){function b(k){c||(c=k);a.FG[Vb](function(b,l){if(!f[l])if(e[l]||(e[l]=b.Jha(b.iN,b.jN,b.Dk,c),d[l]=c+b.Dk),k>=d[l])a[x](b.s6,b.jN),g--,f[l]=!0,b[kz](HF,[a,b]);else a[x](b.s6,e[l](k))});g?this.SW=n.t6[L](V,b):(this.SW=void 0,a.HW=!1,a[kz](HF,[a]))}var c,d=[],e=[],f=[];a.HW=!0;var g=a.FG[J];this.SW=n.t6[L](V,b)}function R(a){if(a===this)return this.svg;a=this.Qp[qd](a);return 0>a?null:this[oy][a]}function S(){for(var a=this.svg,b;a[Ub];)a[Ub][Tc]===cF&&(b=!0),a[Ud](a[Ub]);b&&a[q](ea[Ty](nG,
cF));this.Qp=[];this.elements=[];l.Gha();n.Fha[L](V,this.SW)}var V=function(){return this}();n.t6=V.requestAnimationFrame||V.mozRequestAnimationFrame||V.webkitRequestAnimationFrame||V.msRequestAnimationFrame||function(a){V[xq]((function(){return a[L](this,Date.now())},1E3/60))};n.Fha=V.cancelRequestAnimationFrame||V.cancelAnimationFrame||V.mozCancelRequestAnimationFrame||V.mozCancelAnimationFrame||V.webkitCancelRequestAnimationFrame||V.webkitCancelAnimationFrame||V.msCancelRequestAnimationFrame||
V.msCancelAnimationFrame||V[cq];lb(n,b.Ir(a[K]));Ea(n[K],n);n[K].hu=function(a){return R[L](this,a)||a[Sz]()?(a[kz](GI,[a]),a):s[L](this,a,!0)};n[K].oe=function(a,b,d,e){a=new c[oA](a,b,d,e);return this.hu(a)};n[K].pk=function(a,b,d,e,f){a=new c.DG(a,b,d,e,f);return this.hu(a)};n[K].hb=function(a,b,d,e,f){a=new c[Gz](a,b,d,e,f);return this.hu(a)};n[K].JL=function(a,b,d,e,f){a=new c.lu(a,b,d,e,f);return this.hu(a)};n[K].Sd=function(a,b,d,e){d=new c[wz](a,b,d,e);return this.hu(d)};n[K].oN=function(a){if(null==
a[Sz]())throw"Attempted to remove shape that doesn't have a context.";return a[kz](II,[a])};n[K].Nha=function(a){if(a.Jr)throw m("can't stage a shape that's already staged.");if(-1!==this.Qp[qd](a))throw m("can't stage a shape that's already drawn.");a.Jr=!0;this.Qp[C](a);this[oy][C](null);a.m(UD,this.OW);a.m(UF,this.nB)};va(n[K],S);return n});b(Zxa,[],function(){function a(b,c){if(!b||b.x1>=b.Hb||b.y1>=b.Lb)throw"Error constructing QuadTree: invalid bounds given.";this.lN=c||0;this.bounds=b;this.nodes=
ga(4);this.mB=!1;Fw(this,[])}function b(a,c){if(this.mB){var d=this.JW(c);b[L](this[Yy][d],a,c)}a[C][Sc](a,this[vy]);return a}lb(a,{insert:function(a){var b=a.ul();if(this.mB){var c=this.JW(b),c=this[Yy][c],d=c[qq];b.x1>=d.x1&&b.Hb<=d.Hb&&b.y1>=d.y1&&b.Lb<=d.Lb?c.insert(a):this[vy][C](a)}else if(this[vy][C](a),4>this.lN&&4<this[vy][J]){this[rc]();a=0;for(b=this[vy][J];a<b;a++)this.insert(this[vy][a]);Fw(this,this[vy][J]>b?this[vy][le](b,this[vy][J]-b):[])}},clear:function(){Fw(this,[]);if(this.mB){for(var a=
0,b=this[Yy][J];a<b;a++)this[Yy][a][Yb]();delete this[Yy];this.nodes=ga(4);this.mB=!1}},query:function(a){return b[L](this,[],a)},JW:function(a){var b=!(a.y1>(this[qq].y1+this[qq].Lb)/2),c=0;a.x1>(this[qq].x1+this[qq].Hb)/2?c=b?1:2:b||(c=3);return c},split:function(){var b=(this[qq].Hb-this[qq].x1)/2,c=(this[qq].Lb-this[qq].y1)/2,d=this[qq].x1,f=this[qq].y1,p=this.lN+1;this[Yy][0]=new a({x1:d,y1:f,Hb:d+b,Lb:f+c},p);this[Yy][1]=new a({x1:d+b,y1:f,Hb:d+b+b,Lb:f+c},p);this[Yy][2]=new a({x1:d+b,y1:f+
c,Hb:d+b+b,Lb:f+c+c},p);this[Yy][3]=new a({x1:d,y1:f+c,Hb:d+b,Lb:f+c+c},p);this.mB=!0},remove:function(a){var b=this[vy][qd](a);return 0<=b?(this[vy][le](b,1),!0):this.mB?!this[Yy][ge](function(b){return!b[Qb](a)}):!1}});return a});b(rya,[],function(){return{draw:function(a,b){b[Nz]();b.arc(a.x,a.y,a.eu,0,2*h.PI,!1);b[vz]();b[ic]()},kB:function(a,b){var c=a.x-b.x,d=a.y-b.y;return h[zd](c*c+d*d)<=a.eu}}});b(sya,[],function(){return{draw:function(a,b){b[Wy]();b[Nz]();b[Tz](a.x-a.Gi,a.y-a.Hi);b[mz](a.Gi,
a.Hi);b.arc(1,1,1,0,2*h.PI,!1);Iw(b,nB);b[ic]();b[nz]()},kB:function(a,b){var c=(b.x-a.x)/a.Gi,d=(b.y-a.y)/a.Hi;return 1>=c*c+d*d}}});b(tya,[],function(){return{draw:function(a,b){b[Wy]();b[Nz]();b[py](a.x1,a.y1);b[zz](a.Hb,a.Lb);b[vz]();ix(b,Vxa);b[$b]();b[nz]()},kB:function(a,b){var c=(a.y1-a.Lb)/(a.x1-a.Hb);return.5>h.abs(c*b.x+(a.y1-c*a.x1)-b.y)}}});b(uya,[],function(){function a(b,c){c[Nz]();for(var d=b.Pp,e=0,n=d[J];e<n;e++){var p=d[e][rc](se);switch(p[0]){case Gf:c[py](p[1],p[2]);break;case Ff:c[zz](p[1],
p[2]);break;case jC:c.bezierCurveTo(p[1],p[2],p[3],p[4],p[5],p[6]);break;case hg:c[vz]();return;default:throw'unknown path command "'+d[e]+'".';}}}return{draw:function(b,c){c[Wy]();a(b,c);Iw(c,RA);c[ic]();c[nz]()},kB:function(b,c){var d=ea[Sb](dE)[Sz](LB);a(b,d);return d.isPointInPath(c.x,c.y)||d.iwa(c.x,c.y)}}});b(vya,[],function(){return{draw:function(a,b){b[Wy]();b[Nz]();b[kA](a.x,a.y,a[r],a[A]);Iw(b,SA);b[ic]();b[nz]()},kB:function(a,b){return b.x>a.x&&b.x<a.x+a[r]&&b.y>a.y&&b.y<a.y+a[A]}}});
b(xya,[],function(){return{draw:function(a,b){b.font=bna;b[jy](a.Ke,a.x,a.y)},kB:function(a,b){var c=a.ul();return b.x>c.x&&b.x<c.x+c[r]&&b.y>c.y&&b.y<c.y+c[A]}}});b(wya,[wB,xB,yB,zB,AB,CB],function(a,b,c,d,l,n){return{Circle:a,DG:b,lu:c,wW:d,Rect:l,Text:n}});b(qya,[Zxa,JI,zE,pJ,Hma],function(a,b,c,d,l){function n(c,d,g){b[L](this,c,d,g);var k=this.canvas=ea[Sb](dE);k[w](Vh,d);k[w](Rg,g);k[w](Fh,Cma);c[q](k);this.Zw=k[Sz](LB);this.QW=new a({x1:0,y1:0,Hb:d,Lb:g});this.all=[];c[Uq](gs,s[ac](this))}
function p(a){this.all[C](a);a.m(UD,u[ac](this));this.QW.insert(a);return a}function s(a){var b={x:a[Jq],y:a[Kq]};a=[];for(var c=this.QW.query({x1:b.x,y1:b.y,Hb:b.x,Lb:b.y}),d=0,e=c[J];d<e;d++){var f=c[d];l[f[uc][Cd]].kB(f,b)&&a[C](f)}if(a[J]){b=-1;c=a[0];d=0;for(e=a[J];d<e;d++)f=this.all[qd](a[d]),f>b&&(b=f,c=a[d]);c[kz](gs)}}function u(a){a[uc][Cd]===UC&&(a.fo={width:this.Zw.measureText(a.Ke)[r],height:12,x:a.x,y:a.y})}lb(n,c.Ir(b[K]));Ea(n[K],n);n[K].hu=function(a){l[a[uc][Cd]][br](a,this.Zw);
return p[L](this,a)};n[K].oe=function(a,b,c){a=new d[oA](a,b,c);l[oA][br](a,this.Zw);return p[L](this,a)};n[K].pk=function(a,b,c,e){a=new d.DG(a,b,c,e);l.DG[br](a,this.Zw);return p[L](this,a)};n[K].hb=function(a,b,c,e){a=new d[Gz](a,b,c,e);l[Gz][br](a,this.Zw);return p[L](this,a)};n[K].JL=function(a,b,c,e){a=new d.lu(a,b,c,e);l.lu[br](a,this.Zw);return p[L](this,a)};n[K].oN=function(a){var b=this.all[qd](a);if(0>b)return!1;this.QW[Qb](a);this.all[le](b,1);pa(this.canvas,this.canvas[r]);a=0;for(b=
this.all[J];a<b;a++){var c=this.all[a];c&&l[c[uc][Cd]][br](c,this.Zw)}return!0};return n});b(mD,[zE],function(a){function b(a,d,e,f,s){this.s6=a;this.iN=d;this.jN=e;this.Dk=f;this.Jha=s||c;this.lB={finishAnimation:[]}}function c(a,b,d,e){var f=(b-a)/d,g=f*-e+a;return function(a){return f*a+g}}a.NW(b);return b});b($xa,[Gya,qya,pJ,mD],function(a,b,d,k){function l(c,k,l,z){var B;l===KJ?B=a:l===dE&&(B=b);p.F=B;p.fe=d;p.S5=n;return new B(z,c,k)}function n(a){return function(b,c){var e=new d[wz](0,0,b,
c);a.Nha(e);var f=e.ul();a.oN(e);delete f.x;delete f.y;return f}}var p=c=function(a,b,c,d,e){var f=function(){return this}(),g,k=!1;e&&e.fonts&&f.WebFont?WebFont[ld]({google:{families:e.fonts},active:function(){g&&g(l(a,b,c,d))},fontinactive:function(){throw m("one or more fonts could not be loaded.");}}):k=!0;return{then:function(e){if(k)f[xq](e[ac](f,l(a,b,c,d)),0);else g=e}}};p.fe=d;p.fwa=k});return c}();function YL(a,b,c,d){this.ra=a;this.Qk=new Pk(0,0);this.Mca=d||null;this[BA](b,c)}Y(YL,RL);W=YL[K];W.jb=function(){return this.Ww};W.lA=function(){return{}};W.Zq=function(a,b){YL.e.Zq[L](this,a,b)};Jx(W,function(a){if(!Qk(this.Qk,a)){this.Qk=a[Bc]();var b=this;this.Vl=null;this.So&&this.So[Yb]();(new XL(a[r]||0,a[A]||0,KJ,this.ra,this.Mca?{fonts:this.Mca}:void 0))[lA](function(a){b.Ww=a;b.Ww.Qf=XL.$c=HK(XL.S5(b.Ww),function(a,b){var c=[a,b[0]];c[C](JSON[gd](b[1]));return c[me]($C)});b.Vl={}})}});
W.B=function(){};function ZL(a,b,c,d,e){this.wg=!!b;a&&this[xA](a,d);Dw(this,void 0!=e?e:this.Yk||0);this.wg&&Dw(this,-1*this[ry]);this.rU=!c}Y(ZL,Nj);W=ZL[K];$w(W,null);W.Yk=0;W.j3=!1;Hx(W,function(a,b,c){$w(this,a);a&&(this.Yk=qi(b)?b:1!=this[sz][kd]?0:this.wg?-1:1);qi(c)&&Dw(this,c)});W.NR=function(a){$w(this,a[sz]);this.Yk=a.Yk;Dw(this,a[ry]);this.wg=a.wg;this.rU=a.rU};Ia(W,function(){return new ZL(this[sz],this.wg,!this.rU,this.Yk,this[ry])});
Da(W,function(){var a;if(this.j3){if(!this[sz]||this.rU&&0==this[ry])throw Mj;a=this[sz];var b=this.wg?-1:1;if(this.Yk==b){var c=this.wg?a[Dc]:a[Ub];c?this[xA](c):this[xA](a,-1*b)}else(c=this.wg?a[jc]:a[dc])?this[xA](c):this[xA](a[je],-1*b);Dw(this,this[ry]+this.Yk*(this.wg?-1:1))}else this.j3=!0;a=this[sz];if(!this[sz])throw Mj;return a});$a(W,function(a){return a[sz]==this[sz]&&(!this[sz]||a.Yk==this.Yk)});
W.splice=function(a){var b=this[sz],c=this.wg?1:-1;this.Yk==c&&(this.Yk=-1*c,Dw(this,this[ry]+this.Yk*(this.wg?-1:1)));this.wg=!this.wg;ZL[K][qc][L](this);this.wg=!this.wg;for(var c=li(arguments[0])?arguments[0]:arguments,d=c[J]-1;0<=d;d--)jl(c[d],b);kl(b)};function $L(){}$L[K].vda=function(){return!1};$L[K].gc=function(){return Uk(Ak?this.pc():this.qj())};$L[K].QB=function(){return bl(this.gc())};$L[K].containsNode=function(a,b){return this.QD(ICa(a),b)};function JCa(a,b){ZL[L](this,a,b,!0)}Y(JCa,ZL);function aM(a,b,c,d,e){var f;a&&(this.ae=a,this.$d=b,this.Gd=c,this.Zd=d,1==a[kd]&&a[Tc]!=pf&&(a=a[Zb],(b=a[b])?(this.ae=b,this.$d=0):(a[J]&&(this.ae=Oi(a)),f=!0)),1==c[kd]&&((this.Gd=c[Zb][d])?this.Zd=0:this.Gd=c));ZL[L](this,e?this.Gd:this.ae,e,!0);if(f)try{this[qc]()}catch(g){if(g!=Mj)throw g;}}Y(aM,JCa);W=aM[K];W.ae=null;W.Gd=null;W.$d=0;W.Zd=0;W.qj=function(){return this.ae};W.Zl=function(){return this.Gd};W.fpa=function(){return this.j3&&this[sz]==this.Gd&&(!this.Zd||1!=this.Yk)};
Da(W,function(){if(this.fpa())throw Mj;return aM.e[qc][L](this)});W.NR=function(a){this.ae=a.ae;this.Gd=a.Gd;this.$d=a.$d;this.Zd=a.Zd;this.Co=a.Co;aM.e.NR[L](this,a)};Ia(W,function(){var a=new aM(this.ae,this.$d,this.Gd,this.Zd,this.Co);a.NR(this);return a});function bM(){}bM[K].QD=function(a,b){var c=b&&!a[xz](),d=a.Ka;try{return c?0<=this.nn(d,0,1)&&0>=this.nn(d,1,0):0<=this.nn(d,0,0)&&0>=this.nn(d,1,1)}catch(e){if(!Ak)throw e;return!1}};bM[K].containsNode=function(a,b){return this.QD(cM(a),b)};bM[K].at=function(){return new aM(this.qj(),this.jn(),this.Zl(),this.Lo())};function dM(a){this.Ka=a}Y(dM,bM);function eM(a){var b=Uk(a)[td]();if(3==a[kd])b[cA](a,0),b[ay](a,a[J]);else if(fM(a)){for(var c,d=a;(c=d[Ub])&&fM(c);)d=c;b[cA](d,0);for(d=a;(c=d[Dc])&&fM(c);)d=c;b[ay](d,1==d[kd]?d[Zb][J]:d[J])}else c=a[je],a=Qi(c[Zb],a),b[cA](c,a),b[ay](c,a+1);return b}function gM(a,b,c,d){var e=Uk(a)[td]();e[cA](a,b);e[ay](c,d);return e}W=dM[K];Ia(W,function(){return new this[uc](this.Ka.cloneRange())});W.pc=function(){return this.Ka.commonAncestorContainer};W.qj=function(){return this.Ka.startContainer};
W.jn=function(){return this.Ka.startOffset};W.Zl=function(){return this.Ka.endContainer};W.Lo=function(){return this.Ka.endOffset};W.nn=function(a,b,c){return this.Ka.compareBoundaryPoints(1==c?1==b?bi[$c].START_TO_START:bi[$c].START_TO_END:1==b?bi[$c].END_TO_START:bi[$c].END_TO_END,a)};W.isCollapsed=function(){return this.Ka[Zx]};W.Gv=function(){return this.Ka[kc]()};zw(W,function(a){var b=bl(Uk(this.qj()));this.aK(b[hA](),a)});W.aK=function(a){a.removeAllRanges();a.addRange(this.Ka)};vw(W,function(a){this.Ka[ub](a)});function hM(a){this.Ka=a}Y(hM,dM);hM[K].aK=function(a,b){if(!b||this[xz]())hM.e.aK[L](this,a,b);else a[ub](this.Zl(),this.Lo()),a[Wx](this.qj(),this.jn())};function iM(a,b){this.Ka=a;this.Wj=b}Y(iM,bM);function jM(a){var b=Uk(a)[Td].createTextRange();if(1==a[kd])b[$y](a),fM(a)&&!a[Zb][J]&&b[ub](!1);else{for(var c=0,d=a;d=d[jc];){var e=d[kd];if(3==e)c+=d[J];else if(1==e){b[$y](d);break}}d||b[$y](a[je]);b[ub](!d);c&&b[Hz](kE,c);b[tA](kE,a[J])}return b}W=iM[K];W.et=null;W.ae=null;W.Gd=null;W.$d=-1;W.Zd=-1;Ia(W,function(){var a=new iM(this.Ka[Ky](),this.Wj);a.et=this.et;a.ae=this.ae;a.Gd=this.Gd;return a});
W.pc=function(){if(!this.et){var a=this.Ka[id],b=this.Ka[Ky](),c=a[wb](/ +$/,O);(c=a[J]-c[J])&&b[tA](kE,-c);c=b.parentElement();b=b.htmlText[wb](/(\r\n|\r|\n)+/g,se)[J];if(this[xz]()&&0<b)return this.et=c;for(;b>c.outerHTML[wb](/(\r\n|\r|\n)+/g,se)[J];)c=c[je];for(;1==c[Zb][J]&&c.innerText==KCa(c[Ub])&&fM(c[Ub]);)c=c[Ub];0==a[J]&&(c=LCa(this,c));this.et=c}return this.et};
function LCa(a,b){for(var c=b[Zb],d=0,e=c[J];d<e;d++){var f=c[d];if(fM(f)){var g=jM(f),k=g.htmlText!=f.outerHTML;if(a[xz]()&&k?0<=a.nn(g,1,1)&&0>=a.nn(g,1,0):a.Ka[Vx](g))return LCa(a,f)}}return b}W.qj=function(){this.ae||(this.ae=kM(this,1),this[xz]()&&(this.Gd=this.ae));return this.ae};W.jn=function(){0>this.$d&&(this.$d=this.kE(1),this[xz]()&&(this.Zd=this.$d));return this.$d};W.Zl=function(){if(this[xz]())return this.qj();this.Gd||(this.Gd=kM(this,0));return this.Gd};
W.Lo=function(){if(this[xz]())return this.jn();0>this.Zd&&(this.Zd=this.kE(0),this[xz]()&&(this.$d=this.Zd));return this.Zd};W.nn=function(a,b,c){return this.Ka[vA]((1==b?SC:GC)+VC+(1==c?SC:GC),a)};
function kM(a,b,c){c=c||a.pc();if(!c||!c[Ub])return c;for(var d=1==b,e=0,f=c[Zb][J];e<f;e++){var g=d?e:f-e-1,k=c[Zb][g],l;try{l=cM(k)}catch(n){continue}var p=l.Ka;if(a[xz]())if(!fM(k)){if(0==a.nn(p,1,1)){a.$d=a.Zd=g;break}}else{if(l.QD(a))return kM(a,b,k)}else{if(a.QD(l)){if(!fM(k)){d?a.$d=g:a.Zd=g+1;break}return kM(a,b,k)}if(0>a.nn(p,1,0)&&0<a.nn(p,0,1))return kM(a,b,k)}}return c}
W.kE=function(a,b){var c=1==a,d=b||(c?this.qj():this.Zl());if(1==d[kd]){for(var d=d[Zb],e=d[J],f=c?1:-1,g=c?0:e-1;0<=g&&g<e;g+=f){var k=d[g];if(!fM(k)&&0==this.Ka[vA]((1==a?SC:GC)+VC+(1==a?SC:GC),cM(k).Ka))return c?g:g+1}return-1==g?0:g}e=this.Ka[Ky]();f=jM(d);e.setEndPoint(c?voa:Cpa,f);e=e[id][J];return c?d[J]-e:e};function KCa(a){return 3==a[kd]?a[bd]:a.innerText}W.isCollapsed=function(){return 0==this.Ka[vA](Bpa,this.Ka)};W.Gv=function(){return this.Ka[id]};zw(W,function(){this.Ka[ly]()});
    vw(W, function (a) {
        this.Ka[ub](a);
        a ? (this.Gd = this.ae, this.Zd = this.$d) : (this.ae = this.Gd, this.$d = this.Zd)
    });
    function lM(a) {
        this.Ka = a
    }

    Y(lM, dM);
    lM[K].aK = function (a) {
        a[ub](this.qj(), this.jn());
        this.Zl() == this.qj() && this.Lo() == this.jn() || a[Wx](this.Zl(), this.Lo());
        0 == a.rangeCount && a.addRange(this.Ka)
    };
    function mM(a) {
        this.Ka = a
    }

    Y(mM, dM);
    mM[K].nn = function (a, b, c) {
        return Ik(vr) ? mM.e.nn[L](this, a, b, c) : this.Ka.compareBoundaryPoints(1 == c ? 1 == b ? bi[$c].START_TO_START : bi[$c].END_TO_START : 1 == b ? bi[$c].START_TO_END : bi[$c].END_TO_END, a)
    };
    mM[K].aK = function (a, b) {
        a.removeAllRanges();
        b ? a.setBaseAndExtent(this.Zl(), this.Lo(), this.qj(), this.jn()) : a.setBaseAndExtent(this.qj(), this.jn(), this.Zl(), this.Lo())
    };
    function cM(a) {
        if (Ak && !Jk(9)) {
            var b = new iM(jM(a), Uk(a));
            if (fM(a)) {
                for (var c, d = a; (c = d[Ub]) && fM(c);)d = c;
                b.ae = d;
                b.$d = 0;
                for (d = a; (c = d[Dc]) && fM(c);)d = c;
                b.Gd = d;
                b.Zd = 1 == d[kd] ? d[Zb][J] : d[J];
                b.et = a
            } else b.ae = b.Gd = b.et = a[je], b.$d = Qi(b.et[Zb], a), b.Zd = b.$d + 1;
            a = b
        } else a = Ek ? new mM(eM(a)) : Bk ? new hM(eM(a)) : zk ? new lM(eM(a)) : new dM(eM(a));
        return a
    }

    function fM(a) {
        return fl(a) || 3 == a[kd]
    }

    function nM() {
    }

    Y(nM, $L);
    W = nM[K];
    W.Fv = null;
    W.ae = null;
    W.$d = null;
    W.Gd = null;
    W.Zd = null;
    W.Co = !1;
    Ia(W, function () {
        var a = new nM;
        a.Fv = this.Fv && this.Fv[Bc]();
        a.ae = this.ae;
        a.$d = this.$d;
        a.Gd = this.Gd;
        a.Zd = this.Zd;
        a.Co = this.Co;
        return a
    });
    W.bc = function () {
        return Us
    };
    function oM(a) {
        var b;
        if (!(b = a.Fv)) {
            b = a.qj();
            var c = a.jn(), d = a.Zl(), e = a.Lo();
            if (Ak && !Jk(9)) {
                var f = b, g = c, k = d, l = e, n = !1;
                1 == f[kd] && (g = f[Zb][g], n = !g, f = g || f[Dc] || f, g = 0);
                var p = jM(f);
                g && p[Hz](kE, g);
                if (f == k && g == l) p[ub](!0); else n && p[ub](!1), n = !1, 1 == k[kd] && (k = (g = k[Zb][l]) || k[Dc] || k, l = 0, n = !g), f = jM(k), f[ub](!n), l && f[tA](kE, l), p.setEndPoint(voa, f);
                l = new iM(p, Uk(b));
                l.ae = b;
                l.$d = c;
                l.Gd = d;
                l.Zd = e;
                b = l
            } else b = Ek ? new mM(gM(b, c, d, e)) : Bk ? new hM(gM(b, c, d, e)) : zk ? new lM(gM(b, c, d, e)) : new dM(gM(b, c, d, e));
            b = a.Fv = b
        }
        return b
    }
W.pc=function(){return oM(this).pc()};W.qj=function(){return this.ae||(this.ae=oM(this).qj())};W.jn=function(){return null!=this.$d?this.$d:this.$d=oM(this).jn()};W.Zl=function(){return this.Gd||(this.Gd=oM(this).Zl())};W.Lo=function(){return null!=this.Zd?this.Zd:this.Zd=oM(this).Lo()};W.vda=function(){return this.Co};W.QD=function(a,b){var c=a.bc();return c==Us?oM(this).QD(oM(a),b):c==mha?(c=a.d2(),(b?Vi:Wi)(c,function(a){return this.containsNode(a,b)},this)):!1};W.isCollapsed=function(){return oM(this)[xz]()};
    W.Gv = function () {
        return oM(this).Gv()
    };
    W.at = function () {
        return new aM(this.qj(), this.jn(), this.Zl(), this.Lo())
    };
    zw(W, function () {
        oM(this)[ly](this.Co)
    });
    vw(W, function (a) {
        a = this.vda() ? !a : a;
        this.Fv && this.Fv[ub](a);
        a ? (this.Gd = this.ae, this.Zd = this.$d) : (this.ae = this.Gd, this.$d = this.Zd);
        this.Co = !1
    });
    function ICa(a) {
        a = cM(a);
        var b = new nM;
        b.Fv = a;
        b.Co = !1;
        return b
    }

    function MCa(a, b, c, d) {
        if (a == c)return d < b;
        var e;
        if (1 == a[kd] && b)if (e = a[Zb][b]) a = e, b = 0; else if (pl(a, c))return !0;
        if (1 == c[kd] && d)if (e = c[Zb][d]) c = e, d = 0; else if (pl(c, a))return !1;
        return 0 < (rea(a, c) || b - d)
    }

    function pM() {
    }

    gi(pM);
    pM[K].Eva = 0;
    function qM(a) {
        return ef + (a.Eva++)[kc](36)
    }

    function rM(a) {
        Tt[L](this);
        this.U = a || Sk();
        this.pq = NCa;
        this.ic = null;
        this.Db = !1;
        this.q = null;
        this.zu = void 0;
        this.Zn = this.qd = this.Yd = this.xl = null;
        this.J7 = !1
    }

    Y(rM, Tt);
    rM[K].Ssa = pM.Vb();
    var NCa = null;

    function OCa(a, b) {
        switch (a) {
            case 1:
                return b ? gF : qF;
            case 2:
                return b ? iG : gK;
            case 4:
                return b ? yqa : fta;
            case 8:
                return b ? Ps : jBa;
            case 16:
                return b ? jsa : iBa;
            case 32:
                return b ? Kg : LD;
            case 64:
                return b ? gI : CE
        }
        throw m("Invalid component state");
    }

    W = rM[K];
    Dx(W, function () {
        return this.ic || (this.ic = qM(this.Ssa))
    });
    W.bx = function (a) {
        this.Yd && this.Yd.Zn && (dk(this.Yd.Zn, this.ic), ek(this.Yd.Zn, a, this));
        this.ic = a
    };
    W.a = function () {
        return this.q
    };
    W.St = function (a) {
        return this.q ? this.U.St(a, this.q) : null
    };
    W.f8 = function (a) {
        return this.St(a)
    };
    W.tc = function () {
        this.zu || (this.zu = new Vv(this));
        return this.zu
    };
    function sM(a, b) {
        if (a == b)throw m(Lpa);
        if (b && a.Yd && a.ic && a.Yd.wB(a.ic) && a.Yd != b)throw m(Lpa);
        a.Yd = b;
        rM.e.IA[L](a, b)
    }

    W.getParent = function () {
        return this.Yd
    };
W.IA=function(a){if(this.Yd&&this.Yd!=a)throw m("Method not supported");rM.e.IA[L](this,a)};W.ia=function(){return this.U};W.j=function(){this.q=this.U[Sb](P)};W.C=function(a){this.Iz(a)};W.Iz=function(a,b){if(this.Db)throw m(EC);this.q||this.j();a?a[Fb](this.q,b||null):this.U.gc()[Td][q](this.q);this.Yd&&!this.Yd.Db||this.Fb()};
W.Ma=function(a){if(this.Db)throw m(EC);if(a&&this.Zh(a)){this.J7=!0;var b=Uk(a);this.U&&this.U.gc()==b||(this.U=Sk(a));this.Ef(a);this.Fb()}else throw m("Invalid element to decorate");};W.Zh=function(){return!0};W.Ef=function(a){this.q=a};W.Fb=function(){this.Db=!0;tM(this,function(a){!a.Db&&a.a()&&a.Fb()})};W.He=function(){tM(this,function(a){a.Db&&a.He()});this.zu&&this.zu.mc();this.Db=!1};
W.B=function(){this.Db&&this.He();this.zu&&(this.zu.Z(),delete this.zu);tM(this,function(a){a.Z()});!this.J7&&this.q&&kl(this.q);this.Yd=this.xl=this.q=this.Zn=this.qd=null;rM.e.B[L](this)};function uM(a){return a.xl}W.va=function(a,b){this.ky(a,this.ng(),b)};
W.ky=function(a,b,c){if(a.Db&&(c||!this.Db))throw m(EC);if(0>b||b>this.ng())throw m("Child component index out of bounds");this.Zn&&this.qd||(this.Zn={},this.qd=[]);if(a[Rx]()==this){var d=a[rA]();this.Zn[d]=a;ej(this.qd,a)}else ek(this.Zn,a[rA](),a);sM(a,this);cj(this.qd,a,b);a.Db&&this.Db&&a[Rx]()==this?(c=this.Ya(),c[Fb](a.a(),c[Zb][b]||null)):c?(this.q||this.j(),b=this.wf(b+1),a.Iz(this.Ya(),b?b.q:null)):this.Db&&!a.Db&&a.q&&a.q[je]&&1==a.q[je][kd]&&a.Fb()};W.Ya=function(){return this.q};
W.hh=function(){null==this.pq&&(this.pq=Xl(this.Db?this.q:this.U.gc()[Td]));return this.pq};W.pw=function(a){if(this.Db)throw m(EC);this.pq=a};W.ng=function(){return this.qd?this.qd[J]:0};W.wB=function(a){if(this.Zn&&a){var b=this.Zn;a=(a in b?b[a]:void 0)||null}else a=null;return a};W.wf=function(a){return this.qd?this.qd[a]||null:null};function tM(a,b,c){a.qd&&Z(a.qd,b,c)}function vM(a,b){return a.qd&&b?Qi(a.qd,b):-1}
W.removeChild=function(a,b){if(a){var c=oi(a)?a:a[rA]();a=this.wB(c);c&&a&&(dk(this.Zn,c),ej(this.qd,a),b&&(a.He(),a.q&&kl(a.q)),sM(a,null))}if(!a)throw m("Child is not in parent component");return a};function PCa(a,b){return a[Ud](a.wf(0),b)}W.Nc=function(a){for(var b=[];this.qd&&0!=this.qd[J];)b[C](PCa(this,a));return b};function wM(a){if(a[Tx])return a[Tx];a=a[Jd];return oi(a)&&a[Lb](/\S+/g)||[]}function QCa(a,b){mb(a,b)}function xM(a,b){return a[Tx]?a[Tx][Rc](b):$i(wM(a),b)}function yM(a,b){a[Tx]?a[Tx].add(b):xM(a,b)||mb(a,a[Jd]+(0<a[Jd][J]?se+b:b))}function zM(a,b){if(a[Tx])Z(b,function(b){yM(a,b)});else{var c={};Z(wM(a),function(a){c[a]=!0});Z(b,function(a){c[a]=!0});mb(a,O);for(var d in c)mb(a,a[Jd]+(0<a[Jd][J]?se+d:d))}}

    function AM(a, b) {
        if (a[Tx]) a[Tx][Qb](b); else xM(a, b) && mb(a, Si(wM(a), function (a) {
            return a != b
        })[me](se))
    }

    function BM(a, b) {
        a[Tx] ? Z(b, function (b) {
            AM(a, b)
        }) : mb(a, Si(wM(a), function (a) {
            return !$i(b, a)
        })[me](se))
    }

    function CM(a, b, c) {
        c ? yM(a, b) : AM(a, b)
    }

    function DM(a, b, c) {
        Tt[L](this);
        $p(this, a);
        this.handle = b || a;
        this.G2 = c || new Il(ia, ia, ia, ia);
        this.qf = Uk(a);
        this.G = new Vv(this);
        vt(this, this.G);
        Lt(this[Vy], [cK, Gs], this.A$, !1, this)
    }

    Y(DM, Tt);
    var EM = Ak || Bk && Ik("1.9.3");
    W = DM[K];
    Up(W, 0);
    Vp(W, 0);
    wp(W, 0);
    xp(W, 0);
    W.Eu = 0;
    W.ll = 0;
    W.Cu = 0;
    W.fs = 0;
    W.tg = !0;
    W.iq = !1;
    W.saa = 0;
    W.xO = 0;
    W.Zma = !1;
    W.hy = !1;
    W.ru = function (a) {
        this.hy = a
    };
    W.tc = function () {
        return this.G
    };
    function FM(a, b) {
        a.G2 = b || new Il(ia, ia, ia, ia)
    }

    W.La = function (a) {
        this.tg = a
    };
    W.B = function () {
        DM.e.B[L](this);
        Pt(this[Vy], [cK, Gs], this.A$, !1, this);
        this.G.mc();
        EM && this.qf.releaseCapture();
        $p(this, null);
        this.handle = null
    };
    W.bI = function () {
        ci(this.pq) || (this.pq = Xl(this[ar]));
        return this.pq
    };
W.A$=function(a){var b=a[H]==Gs;if(!this.tg||this.iq||b&&!Ct(a))this[fq](Mta);else{GM(a);if(0==this.saa)if(this[fq](new HM(AJ,this,a[Dd],a[Ed],a)))this.iq=!0,a[eq]();else return;else a[eq]();var b=this.qf,c=b[gc],d=!EM;this.G.m(b,[YAa,PH],this.oM,d);this.G.m(b,[XAa,QH],this.kR,d);EM?(c.setCapture(!1),this.G.m(c,Cwa,this.kR)):this.G.m(bl(b),LD,this.kR);Ak&&this.Zma&&this.G.m(b,Eta,yt);this.ana&&this.G.m(this.ana,aJ,this.$ma,d);Up(this,this.Eu=a[Dd]);Vp(this,this.ll=a[Ed]);wp(this,a[Ib]);xp(this,a[Kb]);
this.Cu=this.hy?kCa(this[ar]):this[ar][Sd];this.fs=this[ar][Yc];this.j0=El(Sk(this.qf));this.xO=vi()}};W.kR=function(a){this.G.mc();EM&&this.qf.releaseCapture();if(this.iq){GM(a);this.iq=!1;var b=RCa(this,this.Cu),c=SCa(this,this.fs);this[fq](new HM(sF,this,a[Dd],a[Ed],a,b,c))}else this[fq](Mta)};function GM(a){var b=a[H];b==cK||b==YAa?a[Kc](a.Qa[Hb][0],a[Sq]):b!=XAa&&b!=WAa||a[Kc](a.Qa.changedTouches[0],a[Sq])}
W.oM=function(a){if(this.tg){GM(a);var b=(this.hy&&this.bI()?-1:1)*(a[Dd]-this[Dd]),c=a[Ed]-this[Ed];Up(this,a[Dd]);Vp(this,a[Ed]);wp(this,a[Ib]);xp(this,a[Kb]);if(!this.iq){var d=this.Eu-this[Dd],e=this.ll-this[Ed];if(d*d+e*e>this.saa)if(this[fq](new HM(AJ,this,a[Dd],a[Ed],a)))this.iq=!0;else{this.nk||this.kR(a);return}}c=TCa(this,b,c);b=c.x;c=c.y;this.iq&&this[fq](new HM(ED,this,a[Dd],a[Ed],a,b,c))&&(UCa(this,a,b,c),a[eq]())}};
function TCa(a,b,c){var d=El(Sk(a.qf));b+=d.x-a.j0.x;c+=d.y-a.j0.y;a.j0=d;a.Cu+=b;a.fs+=c;b=RCa(a,a.Cu);a=SCa(a,a.fs);return new Kk(b,a)}W.$ma=function(a){var b=TCa(this,0,0);Up(a,this[Dd]);Vp(a,this[Ed]);UCa(this,a,b.x,b.y)};function UCa(a,b,c,d){a.Fx(c,d);a[fq](new HM(kF,a,b[Dd],b[Ed],b,c,d))}function RCa(a,b){var c=a.G2,d=fa(c[G])?null:c[G],c=fa(c[r])?0:c[r];return h.min(null!=d?d+c:da,h.max(null!=d?d:-da,b))}
function SCa(a,b){var c=a.G2,d=fa(c.top)?null:c.top,c=fa(c[A])?0:c[A];return h.min(null!=d?d+c:da,h.max(null!=d?d:-da,b))}W.Fx=function(a,b){this.hy&&this.bI()?Ta(this[ar][x],a+U):Za(this[ar][x],a+U);this[ar][x].top=b+U};function HM(a,b,c,d,e,f,g){xt[L](this,a);Up(this,c);Vp(this,d);this.cma=e;Za(this,ci(f)?f:b.Cu);this.top=ci(g)?g:b.fs;this.n_=b}Y(HM,xt);function IM(a){Tt[L](this);this.q=a;a=Ak?rs:LD;this.ema=Lt(this.q,Ak?qs:Kg,this,!Ak);this.fma=Lt(this.q,a,this,!Ak)}Y(IM,Tt);Hp(IM[K],function(a){var b=new At(a.Qa);cb(b,a[H]==qs||a[H]==Kg?qs:rs);this[fq](b)});IM[K].B=function(){IM.e.B[L](this);Qt(this.ema);Qt(this.fma);delete this.q};function JM(a,b){rM[L](this,b);this.Ina=!!a;this.$B=null}Y(JM,rM);W=JM[K];W.qX=null;W.ee=!1;W.Cl=null;W.ej=null;W.ho=null;W.V_=!1;W.ca=function(){return lqa};W.XB=function(){return this.Cl};W.j=function(){JM.e.j[L](this);var a=this.a(),b=Di(this.ca())[rc](se);zM(a,b);ul(a,!0);hm(a,!1);VCa(this);WCa(this)};function VCa(a){if(a.Ina&&!a.ej){var b;b=a.ia().j(rG,{frameborder:0,style:zra,src:Wva});a.ej=b;mb(a.ej,a.ca()+hma);hm(a.ej,!1);gm(a.ej,0)}a.Cl||(a.Cl=a.ia().j(P,a.ca()+hma),hm(a.Cl,!1))}
function WCa(a){a.ho||(a.ho=a.ia()[Sb](Qs),hm(a.ho,!1),ul(a.ho,!0),Ba(a.ho[x],pg))}W.kaa=function(){this.V_=!1};W.Zh=function(a){return!!a&&a[Tc]==vf};W.Ef=function(a){JM.e.Ef[L](this,a);a=Di(this.ca())[rc](se);zM(this.a(),a);VCa(this);WCa(this);hm(this.a(),!1)};W.Fb=function(){this.ej&&il(this.ej,this.a());il(this.Cl,this.a());JM.e.Fb[L](this);jl(this.ho,this.a());this.qX=new IM(this.ia().gc());this.tc().m(this.qX,qs,this.Pia);KM(this,!1)};
W.He=function(){this.R()&&this[Ny](!1);wt(this.qX);JM.e.He[L](this);kl(this.ej);kl(this.Cl);kl(this.ho)};Jw(W,function(a){a!=this.ee&&(this.Cx&&this.Cx[Wq](),this.eC&&this.eC[Wq](),this.kx&&this.kx[Wq](),this.IB&&this.IB[Wq](),this.Db&&KM(this,a),a?this.U2():this.DD())});function KM(a,b){if(b){a.zD||(a.zD=[]);for(var c=a.ia(),c=c.Xf(c.gc()[Td]),d=0;d<c[J];d++){var e=c[d];e==a.q||NL(e,Sg)||(ML(e,Sg,!0),a.zD[C](e))}}else if(a.zD){for(d=0;d<a.zD[J];d++)a.zD[d][Uc](uD);a.zD=null}}
W.LO=function(a,b,c,d){this.Cx=a;this.kx=b;this.eC=c;this.IB=d};W.U2=function(){if(this[fq](GD)){try{this.$B=this.ia().gc()[qb]}catch(a){}this.AY();this.Ze();this.tc().m(this.ia().QB(),KI,this.AY);XCa(this,!0);this[ky]();this.ee=!0;this.Cx&&this.eC?(Ot(this.Cx,sF,this.fQ,!1,this),this.eC[Pz](),this.Cx[Pz]()):this.fQ()}};
W.DD=function(){if(this[fq](FD)){this.tc().vb(this.ia().QB(),KI,this.AY);this.ee=!1;this.kx&&this.IB?(Ot(this.kx,sF,this.IO,!1,this),this.IB[Pz](),this.kx[Pz]()):this.IO();t:{try{var a=this.ia(),b=a.gc()[Td],c=a.gc()[qb]||b;if(!this.$B||this.$B==b){this.$B=null;break t}(c==b||a[Rc](this.a(),c))&&this.$B[ky]()}catch(d){}this.$B=null}}};function XCa(a,b){a.ej&&hm(a.ej,b);a.Cl&&hm(a.Cl,b);hm(a.a(),b);hm(a.ho,b)}W.fQ=function(){this[fq](qJ)};W.IO=function(){XCa(this,!1);this[fq](gG)};W.R=function(){return this.ee};
W.focus=function(){this.sfa()};W.AY=function(){this.ej&&hm(this.ej,!1);this.Cl&&hm(this.Cl,!1);var a=this.ia().gc(),b=al(bl(a)||ba||ba),c=h.max(b[r],h.max(a[Td][Gc],a[gc][Gc])),a=h.max(b[A],h.max(a[Td][Tb],a[gc][Tb]));this.ej&&(hm(this.ej,!0),$l(this.ej,c,a));this.Cl&&(hm(this.Cl,!0),$l(this.Cl,c,a))};
W.Ze=function(){var a=this.ia().gc(),b=bl(a)||ba;if(Pl(this.a())==Jg)var c=a=0;else c=El(this.ia()),a=c.x,c=c.y;var d=dm(this.a()),b=al(b||ba),a=h.max(a+b[r]/2-d[r]/2,0),c=h.max(c+b[A]/2-d[A]/2,0);Ql(this.a(),a,c);Ql(this.ho,a,c)};W.Pia=function(a){this.V_?this.kaa():a[ar]==this.ho&&Wt(this.sfa,0,this)};W.sfa=function(){try{Ak&&this.ia().gc()[Td][ky](),this.a()[ky]()}catch(a){}};W.B=function(){wt(this.Cx);this.Cx=null;wt(this.kx);this.kx=null;wt(this.eC);this.eC=null;wt(this.IB);this.IB=null;JM.e.B[L](this)};function LM(a,b,c){JM[L](this,b,c);this.Hj=a||cxa;this.ji=(new MM).rj(NM,!0).rj(OM,!1,!0)}Y(LM,JM);W=LM[K];W.Lma=!0;W.lF=!0;W.bF=!0;W.Q7=!0;W.aN=.5;W.Uf=O;W.og=null;W.Rj=null;W.yI=!1;W.Fk=null;W.Xi=null;W.dN=null;W.Pi=null;W.Hk=null;W.Ih=null;W.EL="dialog";W.ca=function(){return this.Hj};W.setTitle=function(a){this.Uf=a;this.Xi&&ql(this.Xi,a)};W.getTitle=function(){return this.Uf};px(W,function(a){this.og=a=QK(a,null);this.Hk&&SK(this.Hk,a)});qx(W,function(){return null!=this.og?OK(this.og):O});
W.Et=function(){return this.EL};W.z4=function(a){this.EL=a};function PM(a){a.a()||a.C()}W.Ya=function(){PM(this);return this.Hk};function YCa(a){PM(a);return a.a()}W.XB=function(){PM(this);return LM.e.XB[L](this)};function QM(a,b){a.aN=b;if(a.a()){var c=a.XB();c&&gm(c,a.aN)}}function RM(a,b){a.bF=b;if(a.Db){var c=a.ia(),d=a.XB(),e=a.ej;b?(e&&c.a_(e,a.a()),c.a_(d,a.a())):(c[Iq](e),c[Iq](d))}a.R()&&KM(a,b)}W.getDraggable=function(){return this.Q7};
function ZCa(a,b){var c=Di(a.Hj+xma)[rc](se);a.a()&&(b?zM(a.Fk,c):BM(a.Fk,c));if(b&&!a.Rj){var d;d=new DM(a.a(),a.Fk);a.Rj=d;zM(a.Fk,c);Lt(a.Rj,AJ,a.f_,!1,a)}else!b&&a.Rj&&(a.Rj.Z(),a.Rj=null)}
W.j=function(){LM.e.j[L](this);var a=this.a(),b=this.ia();this.Fk=b.j(P,this.Hj+vma,this.Xi=b.j(Qs,{className:this.Hj+yma,id:this[rA]()},this.Uf),this.Pi=b.j(Qs,this.Hj+wma));gl(a,this.Fk,this.Hk=b.j(P,this.Hj+pB),this.Ih=b.j(P,this.Hj+ima));LL(this.Xi,rva);LL(this.Pi,YD);ul(this.Pi,!0);ML(this.Pi,FG,joa);this.dN=this.Xi.id;LL(a,this.Et());ML(a,IG,this.dN||O);this.og&&SK(this.Hk,this.og);hm(this.Pi,this.lF);this.ji&&(a=this.ji,a.q=this.Ih,a.C());hm(this.Ih,!!this.ji);QM(this,this.aN)};
W.Ef=function(a){LM.e.Ef[L](this,a);a=this.a();var b=this.Hj+pB;this.Hk=Wk(null,b,a)[0];this.Hk||(this.Hk=this.ia().j(P,b),this.og&&SK(this.Hk,this.og),a[q](this.Hk));var b=this.Hj+vma,c=this.Hj+yma,d=this.Hj+wma;(this.Fk=Wk(null,b,a)[0])?(this.Xi=Wk(null,c,this.Fk)[0],this.Pi=Wk(null,d,this.Fk)[0]):(this.Fk=this.ia().j(P,b),a[Fb](this.Fk,this.Hk));this.Xi?(this.Uf=xl(this.Xi),this.Xi.id||(this.Xi.id=this[rA]())):(this.Xi=cl(Qs,{className:c,id:this[rA]()}),this.Fk[q](this.Xi));this.dN=this.Xi.id;
ML(a,IG,this.dN||O);this.Pi||(this.Pi=this.ia().j(Qs,d),this.Fk[q](this.Pi));hm(this.Pi,this.lF);b=this.Hj+ima;(this.Ih=Wk(null,b,a)[0])?(this.ji=new MM(this.ia()),this.ji.Ma(this.Ih)):(this.Ih=this.ia().j(P,b),a[q](this.Ih),this.ji&&(a=this.ji,a.q=this.Ih,a.C()),hm(this.Ih,!!this.ji));QM(this,this.aN)};
W.Fb=function(){LM.e.Fb[L](this);this.tc().m(this.a(),CG,this.R7).m(this.a(),zs,this.R7);this.tc().m(this.Ih,gs,this.pja);ZCa(this,this.Q7);this.tc().m(this.Pi,gs,this.qja);var a=this.a();LL(a,this.Et());this.Xi.id!==O&&ML(a,IG,this.Xi.id);this.bF||RM(this,!1)};W.He=function(){this.R()&&this[Ny](!1);ZCa(this,!1);LM.e.He[L](this)};Jw(W,function(a){a!=this.R()&&(this.Db||this.C(),LM.e[Ny][L](this,a))});W.fQ=function(){LM.e.fQ[L](this);this[fq](Cqa)};
W.IO=function(){LM.e.IO[L](this);this[fq](Bqa);this.yI&&this.Z()};W.f_=function(){var a=this.ia().gc(),b=al(bl(a)||ba||ba),c=h.max(a[Td][Gc],b[r]),a=h.max(a[Td][Tb],b[A]),d=dm(this.a());Pl(this.a())==Jg?FM(this.Rj,new Il(0,0,h.max(0,b[r]-d[r]),h.max(0,b[A]-d[A]))):FM(this.Rj,new Il(0,0,c-d[r],a-d[A]))};W.qja=function(){SM(this)};function SM(a){if(a.lF){var b=a.ji,c=b&&b.U_;if(c)b=b.get(c),a[fq](new TM(c,b))&&a[Ny](!1);else a[Ny](!1)}}W.kV=function(a){this.yI=a};
W.B=function(){this.Ih=this.Pi=null;LM.e.B[L](this)};W.pja=function(a){t:{for(a=a[ar];null!=a&&a!=this.Ih;){if(a[Tc]==qf)break t;a=a[je]}a=null}if(a&&!a[Rd]){a=a[Cd];var b=this.ji.get(a);this[fq](new TM(a,b))&&this[Ny](!1)}};
W.R7=function(a){var b=!1,c=!1,d=this.ji,e=a[ar];if(a[H]==CG)if(this.Lma&&27==a[lq]){var f=d&&d.U_,e=e[Tc]==Sf&&!e[Rd];f&&!e?(c=!0,b=d.get(f),b=this[fq](new TM(f,b))):e||(b=!0)}else{if(9==a[lq]&&a[cr]&&e==this.a()){this.V_=!0;try{this.ho[ky]()}catch(g){}Wt(this.kaa,0,this)}}else if(13==a[lq]){if(e[Tc]==qf&&!e[Rd])f=e[Cd];else if(e==this.Pi)SM(this);else if(d){var k=d.XY,l=k&&UM(d,k),e=(e[Tc]==Xf||e[Tc]==Sf||e[Tc]==of)&&!e[Rd];!l||l[Rd]||e||(f=k)}f&&d&&(c=!0,b=this[fq](new TM(f,String(d.get(f)))))}else e==
this.Pi&&32==a[lq]&&SM(this);if(b||c)a[yq](),a[eq]();b&&this[Ny](!1)};function TM(a,b){cb(this,dF);this.key=a;this.caption=b}Y(TM,xt);function MM(a){this.U=a||Sk();lk[L](this)}Y(MM,lk);W=MM[K];W.Hj="charts-buttonset";W.XY=null;W.q=null;W.U_=null;W.set=function(a,b,c,d){lk[K].set[L](this,a,b);c&&(this.XY=a);d&&(this.U_=a);return this};W.rj=function(a,b,c){return this.set(a.key,a[My],b,c)};
W.C=function(){if(this.q){SK(this.q,RK);var a=Sk(this.q);this[Vb](function(b,c){var d=a.j(YD,{name:c},b);c==this.XY&&mb(d,this.Hj+qB);this.q[q](d)},this)}};W.Ma=function(a){if(a&&1==a[kd]){this.q=a;a=this.q[fc](YD);for(var b=0,c,d,e;c=a[b];b++)if(d=c[Cd]||c.id,e=xl(c)||c[od],d){var f=0==b;this.set(d,e,f,c[Cd]==aE);f&&yM(c,this.Hj+qB)}}};W.a=function(){return this.q};W.ia=function(){return this.U};function UM(a,b){for(var c=a.q[fc](qf),d=0,e;e=c[d];d++)if(e[Cd]==b||e.id==b)return e;return null}
var NM={key:aI,caption:$oa},OM={key:aE,caption:eoa},$Ca={key:"yes",caption:"Yes"},aDa={key:WH,caption:"No"},bDa={key:"save",caption:"Save"},cDa={key:"continue",caption:"Continue"};"undefined"!=typeof ea&&((new MM).rj(NM,!0,!0),(new MM).rj(NM,!0).rj(OM,!1,!0),(new MM).rj($Ca,!0).rj(aDa,!1,!0),(new MM).rj($Ca).rj(aDa,!0).rj(OM,!1,!0),(new MM).rj(cDa).rj(bDa).rj(OM,!0,!0));function VM(a,b){Tt[L](this);a&&this.dA(a,b)}Y(VM,Tt);W=VM[K];W.q=null;W.RS=null;W.W1=null;W.SS=null;W.dm=-1;W.uv=-1;W.p3=!1;
var dDa={3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,63273:36,63275:35,63276:33,63277:34,63289:144,63302:45},eDa={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},fDa=Ak||Ek&&Ik(ina),gDa=vk&&Bk;W=VM[K];
W.Pm=function(a){Ek&&(17==this.dm&&!a[Yq]||18==this.dm&&!a[rq]||vk&&91==this.dm&&!a[Rq])&&(this.uv=this.dm=-1);-1==this.dm&&(a[Yq]&&17!=a[lq]?this.dm=17:a[rq]&&18!=a[lq]?this.dm=18:a[Rq]&&91!=a[lq]&&(this.dm=91));if(fDa&&!mCa(a[lq],this.dm,a[cr],a[Yq],a[rq]))this[nq](a);else this.uv=dL(a[lq]),gDa&&(this.p3=a[rq])};W.Npa=function(a){this.uv=this.dm=-1;this.p3=a[rq]};
Hp(W,function(a){var b=a.Qa,c,d,e=b[rq];Ak&&a[H]==zs?(c=this.uv,d=13!=c&&27!=c?b[lq]:0):Ek&&a[H]==zs?(c=this.uv,d=0<=b[kq]&&63232>b[kq]&&cL(c)?b[kq]:0):zk?(c=this.uv,d=cL(c)?b[lq]:0):(c=b[lq]||this.uv,d=b[kq]||0,gDa&&(e=this.p3),vk&&63==d&&224==c&&(c=191));var f=c=dL(c),g=b.keyIdentifier;c?63232<=c&&c in dDa?f=dDa[c]:25==c&&a[cr]&&(f=9):g&&g in eDa&&(f=eDa[g]);a=f==this.dm;this.dm=f;b=new hDa(f,d,a,b);Jp(b,e);this[fq](b)});W.a=function(){return this.q};
W.dA=function(a,b){this.SS&&this[Rz]();this.q=a;this.RS=Lt(this.q,zs,this,b);this.W1=Lt(this.q,CG,this.Pm,b,this);this.SS=Lt(this.q,DG,this.Npa,b,this)};W.detach=function(){this.RS&&(Qt(this.RS),Qt(this.W1),Qt(this.SS),this.SS=this.W1=this.RS=null);this.q=null;this.uv=this.dm=-1};W.B=function(){VM.e.B[L](this);this[Rz]()};function hDa(a,b,c,d){At[L](this,d);cb(this,BG);Gp(this,a);this.charCode=b;this.repeat=c}Y(hDa,At);function WM(){}var XM;gi(WM);function iDa(a){var b=new YM;b.ca=function(){return a};return b}var jDa={button:Rxa,checkbox:vE,menuitem:bJ,menuitemcheckbox:vE,menuitemradio:vE,radio:vE,tab:bJ,treeitem:bJ};W=WM[K];W.Xk=function(){};W.j=function(a){var b=a.ia().j(P,this.Sl(a)[me](se),a[Xz]());ZM(this,a,b);return b};W.Ya=function(a){return a};W.Zr=function(a,b,c){if(a=a.a?a.a():a){var d=[b];Ak&&!Ik(OB)&&(d=$M(wM(a),b),d[C](b));(c?zM:BM)(a,d)}};W.Zh=function(){return!0};
W.Ma=function(a,b){b.id&&a.bx(b.id);var c=this.Ya(b);c&&c[Ub]?a.HA(c[Ub][dc]?gj(c[Zb]):c[Ub]):a.HA(null);var d=0,e=this.ca(),f=this.ca(),g=!1,k=!1,c=!1,l=gj(wM(b));Z(l,function(a){g||a!=e?k||a!=f?d|=this.D_(a):k=!0:(g=!0,f==e&&(k=!0))},this);a.o=d;g||(l[C](e),f==e&&(k=!0));k||l[C](f);var n=a.qo;n&&l[C][Sc](l,n);if(Ak&&!Ik(OB)){var p=$M(l);0<p[J]&&(l[C][Sc](l,p),c=!0)}g&&k&&!n&&!c||QCa(b,l[me](se));ZM(this,a,b);return b};W.Im=function(a){a.hh()&&this.pw(a.a(),!0);a[gz]()&&this.Sn(a,a.R())};
function aN(a,b,c){if(a=c||a.Xk())c=b[Xd](vh)||null,a!=c&&LL(b,a)}function ZM(a,b,c){b.R()||ML(c,Sg,!b.R());b[gz]()||a.Xp(c,1,!b[gz]());bN(b,8)&&a.Xp(c,8,b.fR());bN(b,16)&&a.Xp(c,16,b.Am());bN(b,64)&&a.Xp(c,64,cN(b,64))}W.hH=function(a,b){km(a,!b,!Ak&&!zk)};W.pw=function(a,b){this.Zr(a,this.ca()+tma,b)};W.vr=function(a){var b;return bN(a,32)&&(b=a.Kg())?vl(b)&&wl(b):!1};
W.Sn=function(a,b){var c;if(bN(a,32)&&(c=a.Kg())){if(!b&&cN(a,32)){try{c[Fz]()}catch(d){}cN(a,32)&&a.Bx(null)}(vl(c)&&wl(c))!=b&&ul(c,b)}};Jw(W,function(a,b){hm(a,b);a&&ML(a,Sg,!b)});W.Cc=function(a,b,c){var d=a.a();if(d){var e=this.eI(b);e&&this.Zr(a,e,c);this.Xp(d,b,c)}};W.Xp=function(a,b,c){XM||(XM={1:qta,8:bJ,16:vE,64:Wta});b=XM[b];var d=a[Xd](vh)||null;d&&(d=jDa[d]||b,b=b==vE||b==bJ?d:b);b&&ML(a,b,c)};
px(W,function(a,b){var c=this.Ya(a);if(c&&(hl(c),b))if(oi(b))ql(c,b);else{var d=function(a){if(a){var b=Uk(c);c[q](oi(a)?b[Db](a):a)}};ki(b)?Z(b,d):!li(b)||dxa in b?d(b):Z(gj(b),d)}});W.Kg=function(a){return a.a()};W.ca=function(){return cqa};W.Sl=function(a){var b=this.ca(),c=[b],d=this.ca();d!=b&&c[C](d);b=a[Hq]();for(d=[];b;){var e=b&-b;d[C](this.eI(e));b&=~e}c[C][Sc](c,d);(a=a.qo)&&c[C][Sc](c,a);Ak&&!Ik(OB)&&c[C][Sc](c,$M(c));return c};
    function $M(a, b) {
        var c = [];
        b && (a = a[Bb]([b]));
        Z([], function (d) {
            !Wi(d, ui($i, a)) || b && !$i(d, b) || c[C](d[me]($C))
        });
        return c
    }

    W.eI = function (a) {
        this.bU || kDa(this);
        return this.bU[a]
    };
    W.D_ = function (a) {
        this.Nfa || (this.bU || kDa(this), this.Nfa = ik(this.bU));
        a = ka(this.Nfa[a], 10);
        return fa(a) ? 0 : a
    };
    function kDa(a) {
        var b = a.ca();
        Fi(b[wb](/\xa0|\s/g, se), se);
        a.bU = {1: b + rB, 2: b + qma, 4: b + gma, 8: b + uma, 16: b + kma, 32: b + nma, 64: b + sma}
    }

    function dN(a, b) {
        if (!a)throw m("Invalid class name " + a);
        if (!ri(b))throw m("Invalid decorator function " + b);
        eN[a] = b
    }

    function lDa(a) {
        var b;
        a = wM(a);
        for (var c = 0, d = a[J]; c < d; c++)if (b = a[c], b = b in eN ? eN[b]() : null)return b;
        return null
    }

    var mDa = {}, eN = {};

    function nDa(a) {
        var b = lDa(a);
        b && b.Ma(a);
        return b
    }

    function fN(a, b, c) {
        rM[L](this, c);
        if (!b) {
            b = this[uc];
            for (var d; b;) {
                d = ti(b);
                if (d = mDa[d])break;
                b = b.e ? b.e[uc] : null
            }
            b = d ? ri(d.Vb) ? d.Vb() : new d : null
        }
        this.g = b;
        this.HA(ci(a) ? a : null)
    }

    Y(fN, rM);
    W = fN[K];
    W.og = null;
    W.o = 0;
    W.cI = 39;
    W.rs = 255;
    W.Ts = 0;
    W.ee = !0;
    W.qo = null;
    W.hN = !0;
    W.JN = !1;
    W.EL = null;
    function gN(a, b) {
        a.Db && b != a.hN && oDa(a, b);
        a.hN = b
    }

    W.Kg = function () {
        return this.g.Kg(this)
    };
    W.rP = function () {
        return this.Df || (this.Df = new VM)
    };
    W.jb = function () {
        return this.g
    };
    W.Hba = function (a) {
        if (this.Db)throw m(EC);
        this.a() && (this.q = null);
        this.g = a
    };
    W.Nn = function (a) {
        a && (this.qo ? $i(this.qo, a) || this.qo[C](a) : this.qo = [a], this.g.Zr(this, a, !0))
    };
    W.Zr = function (a, b) {
        b ? this.Nn(a) : a && this.qo && ej(this.qo, a) && (0 == this.qo[J] && (this.qo = null), this.g.Zr(this, a, !1))
    };
    W.j = function () {
        var a = this.g.j(this);
        this.q = a;
        aN(this.g, a, this.Et());
        this.JN || this.g.hH(a, !1);
        this.R() || this.g[Ny](a, !1)
    };
    W.Et = function () {
        return this.EL
    };
    W.z4 = function (a) {
        this.EL = a
    };
    W.Ya = function () {
        return this.g.Ya(this.a())
    };
W.Zh=function(a){return this.g.Zh(a)};W.Ef=function(a){this.q=a=this.g.Ma(this,a);aN(this.g,a,this.Et());this.JN||this.g.hH(a,!1);this.ee=a[x][Xc]!=Q};W.Fb=function(){fN.e.Fb[L](this);this.g.Im(this);if(this.cI&-2&&(this.hN&&oDa(this,!0),bN(this,32))){var a=this.Kg();if(a){var b=this.rP();b.dA(a);this.tc().m(b,BG,this.Yi).m(a,Kg,this.Du).m(a,LD,this.Bx)}}};
function oDa(a,b){var c=a.tc(),d=a.a();b?(c.m(d,Is,a.ko).m(d,Gs,a.af).m(d,QH,a.Tp).m(d,Hs,a.tO),a.qI!=fi&&c.m(d,IE,a.qI),Ak&&c.m(d,aF,a.v9)):(c.vb(d,Is,a.ko).vb(d,Gs,a.af).vb(d,QH,a.Tp).vb(d,Hs,a.tO),a.qI!=fi&&c.vb(d,IE,a.qI),Ak&&c.vb(d,aF,a.v9))}W.He=function(){fN.e.He[L](this);this.Df&&this.Df[Rz]();this.R()&&this[gz]()&&this.g.Sn(this,!1)};W.B=function(){fN.e.B[L](this);this.Df&&(this.Df.Z(),delete this.Df);delete this.g;this.qo=this.og=null};qx(W,function(){return this.og});
px(W,function(a){this.g[Wz](this.a(),a);this.HA(a)});W.HA=function(a){this.og=a};W.Bl=function(){var a=this[Xz]();if(!a)return O;a=oi(a)?a:ki(a)?Ti(a,zl)[me](O):xl(a);return mda(a)};W.pw=function(a){fN.e.pw[L](this,a);var b=this.a();b&&this.g.pw(b,a)};W.hH=function(a){this.JN=a;var b=this.a();b&&this.g.hH(b,a)};W.R=function(){return this.ee};Jw(W,function(a,b){if(b||this.ee!=a&&this[fq](a?qJ:gG)){var c=this.a();c&&this.g[Ny](c,a);this[gz]()&&this.g.Sn(this,a);this.ee=a;return!0}return!1});
Tw(W,function(){return!cN(this,1)});W.La=function(a){var b=this[Rx]();b&&typeof b[gz]==Mg&&!b[gz]()||!hN(this,1,!a)||(a||(this[$z](!1),this.Rh(!1)),this.R()&&this.g.Sn(this,a),this.Cc(1,!a))};W.Rh=function(a){hN(this,2,a)&&this.Cc(2,a)};W.Rk=function(){return cN(this,4)};W.setActive=function(a){hN(this,4,a)&&this.Cc(4,a)};W.fR=function(){return cN(this,8)};W.jo=function(a){hN(this,8,a)&&this.Cc(8,a)};W.Am=function(){return cN(this,16)};W.Zg=function(a){hN(this,16,a)&&this.Cc(16,a)};
W.HD=function(a){hN(this,32,a)&&this.Cc(32,a)};W.Ad=function(a){hN(this,64,a)&&this.Cc(64,a)};Pp(W,function(){return this.o});function cN(a,b){return!!(a.o&b)}W.Cc=function(a,b){bN(this,a)&&b!=cN(this,a)&&(this.g.Cc(this,a,b),this.o=b?this.o|a:this.o&~a)};function bN(a,b){return!!(a.cI&b)}W.cg=function(a,b){if(this.Db&&cN(this,a)&&!b)throw m(EC);!b&&cN(this,a)&&this.Cc(a,!1);this.cI=b?this.cI|a:this.cI&~a};function iN(a,b){return!!(a.rs&b)&&bN(a,b)}
function hN(a,b,c){return bN(a,b)&&cN(a,b)!=c&&(!(a.Ts&b)||a[fq](OCa(b,c)))&&!a.nk}W.ko=function(a){!pDa(a,this.a())&&this[fq](tF)&&this[gz]()&&iN(this,2)&&this.Rh(!0)};W.tO=function(a){!pDa(a,this.a())&&this[fq]($va)&&(iN(this,4)&&this[$z](!1),iN(this,2)&&this.Rh(!1))};W.qI=fi;function pDa(a,b){return!!a[bq]&&pl(b,a[bq])}W.af=function(a){this[gz]()&&(iN(this,2)&&this.Rh(!0),Ct(a)&&(iN(this,4)&&this[$z](!0),this.g.vr(this)&&this.Kg()[ky]()));!this.JN&&Ct(a)&&a[eq]()};
W.Tp=function(a){this[gz]()&&(iN(this,2)&&this.Rh(!0),this.Rk()&&this.ti(a)&&iN(this,4)&&this[$z](!1))};W.v9=function(a){this[gz]()&&this.ti(a)};W.ti=function(a){iN(this,16)&&this.Zg(!this.Am());iN(this,8)&&this.jo(!0);iN(this,64)&&this.Ad(!cN(this,64));var b=new xt(hD,this);a&&(Jp(b,a[rq]),b.ctrlKey=a[Yq],Sp(b,a[Rq]),b.shiftKey=a[cr],b.S2=a.S2);return this[fq](b)};W.Du=function(){iN(this,32)&&this.HD(!0)};W.Bx=function(){iN(this,4)&&this[$z](!1);iN(this,32)&&this.HD(!1)};
W.Yi=function(a){return this.R()&&this[gz]()&&this.Xj(a)?(a[eq](),a[yq](),!0):!1};W.Xj=function(a){return 13==a[lq]&&this.ti(a)};if(!ri(fN))throw m("Invalid component class "+fN);if(!ri(WM))throw m("Invalid renderer class "+WM);var qDa=ti(fN);mDa[qDa]=WM;dN(cqa,function(){return new fN(null)});function jN(){this.o3=[]}Y(jN,WM);gi(jN);function kN(a,b){var c=a.o3[b];if(!c){switch(b){case 0:c=a.ca()+oma;break;case 1:c=a.ca()+jma;break;case 2:c=a.ca()+pB}a.o3[b]=c}return c}W=jN[K];W.Xk=function(){return Twa};W.j=function(a){var b=a.ia().j(P,this.Sl(a)[me](se),rDa(this,a[Xz](),a.ia()));lN(this,a,b,bN(a,8)||bN(a,16));return b};W.Ya=function(a){return a&&a[Ub]};
W.Ma=function(a,b){var c=ml(b),d=kN(this,2);c&&xM(c,d)||b[q](rDa(this,b[Zb],a.ia()));xM(b,gD)&&(a.fP(!0),this.fP(a,b,!0));return jN.e.Ma[L](this,a,b)};px(W,function(a,b){var c=this.Ya(a),d=mN(this,a)?c[Ub]:null;jN.e[Wz][L](this,a,b);d&&!mN(this,a)&&c[Fb](d,c[Ub]||null)});function rDa(a,b,c){a=kN(a,2);return c.j(P,a,b)}W.oZ=function(a,b,c){a&&b&&lN(this,a,b,c)};W.fP=function(a,b,c){a&&b&&lN(this,a,b,c)};function mN(a,b){var c=a.Ya(b);if(c){var c=c[Ub],d=kN(a,1);return!!c&&nl(c)&&xM(c,d)}return!1}
function lN(a,b,c,d){aN(a,c,b.Et());ZM(a,b,c);if(d!=mN(a,c))if(CM(c,gD,d),c=a.Ya(c),d)a=kN(a,1),c[Fb](b.ia().j(P,a),c[Ub]||null);else c[Ud](c[Ub])}W.eI=function(a){switch(a){case 2:return kN(this,0);case 16:case 8:return mqa;default:return jN.e.eI[L](this,a)}};W.D_=function(a){var b=kN(this,0);switch(a){case mqa:return 16;case b:return 2;default:return jN.e.D_[L](this,a)}};W.ca=function(){return iqa};function nN(a,b,c,d){fN[L](this,a,d||jN.Vb(),c);this.Fa(b)}Y(nN,fN);W=nN[K];gb(W,function(){var a=this.xl;return null!=a?a:this.Bl()});W.Fa=function(a){this.xl=a};W.cg=function(a,b){nN.e.cg[L](this,a,b);switch(a){case 8:this.Am()&&!b&&this.Zg(!1);var c=this.a();c&&this.jb().oZ(this,c,b);break;case 16:(c=this.a())&&this.jb().fP(this,c,b)}};W.oZ=function(a){this.cg(8,a)};W.fP=function(a){this.cg(16,a)};
W.Bl=function(){var a=this[Xz]();return ki(a)?(a=Ti(a,function(a){return nl(a)&&(xM(a,jqa)||xM(a,kqa))?O:zl(a)})[me](O),mda(a)):nN.e.Bl[L](this)};W.Tp=function(a){var b=this[Rx]();if(b){var c=b.tba;b.tba=null;if(c&&qi(a[Dd])&&Lk(c,new Kk(a[Dd],a[Ed])))return}nN.e.Tp[L](this,a)};W.Xj=function(a){return a[lq]==this.K0&&this.ti(a)?!0:nN.e.Xj[L](this,a)};W.toa=function(){return this.K0};dN(iqa,function(){return new nN(null)});nN[K].Et=function(){return bN(this,16)?Uwa:bN(this,8)?Vwa:nN.e.Et[L](this)};function oN(a,b,c,d){$K[L](this,a,b,c||d);if(c||d)this.ZP=65|(d?32:132)}Y(oN,$K);var pN,qN;qN=pN=!1;var rN=uk;rN&&(-1!=rN[qd]("Firefox")||-1!=rN[qd]("Camino")||(-1!=rN[qd]("iPhone")||-1!=rN[qd]("iPod")?pN=!0:-1!=rN[qd]("iPad")?qN=!0:-1!=rN[qd]("Chrome")||-1!=rN[qd]("Android")||rN[qd]("Safari")));var sDa=pN,tDa=qN;function sN(){}Y(sN,WM);gi(sN);W=sN[K];W.Xk=function(){return YD};W.Xp=function(a,b,c){switch(b){case 8:case 16:ML(a,Rxa,c);break;default:case 64:case 1:sN.e.Xp[L](this,a,b,c)}};W.j=function(a){var b=sN.e.j[L](this,a);this.aj(b,a.Zm());var c=a[I]();c&&this.Fa(b,c);bN(a,16)&&this.Xp(b,16,a.Am());return b};W.Ma=function(a,b){b=sN.e.Ma[L](this,a,b);var c=this[I](b);a.wd=c;a.VB(this.Zm(b));bN(a,16)&&this.Xp(b,16,a.Am());return b};gb(W,fi);W.Fa=fi;W.Zm=function(a){return a[fA]};
W.aj=function(a,b){a&&(b?Xp(a,b):a[Uc](UJ))};W.ku=function(a,b){var c=a.hh(),d=this.ca()+lma,e=this.ca()+mma;a.Zr(c?e:d,!!(b&1));a.Zr(c?d:e,!!(b&2))};W.ca=function(){return $pa};function tN(){}Y(tN,sN);gi(tN);W=tN[K];W.Xk=function(){};W.j=function(a){gN(a,!1);a.rs&=-256;a.cg(32,!1);return a.ia().j(YD,{"class":this.Sl(a)[me](se),disabled:!a[gz](),title:a.Zm()||O,value:a[I]()||O},a.Bl()||O)};W.Zh=function(a){return a[Tc]==qf||a[Tc]==Ef&&(a[H]==YD||a[H]==rAa||a[H]==Kya)};W.Ma=function(a,b){gN(a,!1);a.rs&=-256;a.cg(32,!1);if(b[Rd]){var c=this.eI(1);yM(b,c)}return tN.e.Ma[L](this,a,b)};W.Im=function(a){a.tc().m(a.a(),gs,a.ti)};W.hH=fi;W.pw=fi;W.vr=function(a){return a[gz]()};
W.Sn=fi;W.Cc=function(a,b,c){tN.e.Cc[L](this,a,b,c);(a=a.a())&&1==b&&zx(a,c)};gb(W,function(a){return a[od]});W.Fa=function(a,b){a&&gx(a,b)};W.Xp=fi;function uN(a,b,c){fN[L](this,a,b||tN.Vb(),c)}Y(uN,fN);W=uN[K];gb(W,function(){return this.wd});W.Fa=function(a){this.wd=a;this.jb().Fa(this.a(),a)};W.Zm=function(){return this.ha};W.aj=function(a){this.ha=a;this.jb().aj(this.a(),a)};W.VB=function(a){this.ha=a};W.ku=function(a){this.jb().ku(this,a)};W.B=function(){uN.e.B[L](this);delete this.wd;delete this.ha};W.Fb=function(){uN.e.Fb[L](this);if(bN(this,32)){var a=this.Kg();a&&this.tc().m(a,DG,this.Xj)}};
W.Xj=function(a){return 13==a[lq]&&a[H]==BG||32==a[lq]&&a[H]==DG?this.ti(a):32==a[lq]};dN($pa,function(){return new uN(null)});function vN(a){this.JU=a}gi(vN);W=vN[K];W.Xk=function(){return this.JU};function wN(a,b){a&&db(a,b?0:-1)}W.j=function(a){return a.ia().j(P,this.Sl(a)[me](se))};W.Ya=function(a){return a};W.Zh=function(a){return a[Tc]==vf};W.Ma=function(a,b){b.id&&a.bx(b.id);var c=this.ca(),d=!1,e=wM(b);e&&Z(e,function(b){b==c?d=!0:b&&this.w0(a,b,c)},this);d||yM(b,c);uDa(this,a,this.Ya(b));return b};W.w0=function(a,b,c){b==c+rB?a.La(!1):b==c+pma?a.mI(Tg):b==c+Bma&&a.mI(Rh)};
function uDa(a,b,c){if(c)for(var d=c[Ub],e;d&&d[je]==c;){e=d[dc];if(1==d[kd]){var f=a.w_(d);f&&(f.q=d,b[gz]()||f.La(!1),b.va(f),f.Ma(d))}else d[bd]&&Di(d[bd])!=O||c[Ud](d);d=e}}W.w_=function(a){return lDa(a)};W.Im=function(a){a=a.a();km(a,!0,Bk);Ak&&(a.hideFocus=!0);var b=this.Xk();b&&LL(a,b)};W.Kg=function(a){return a.a()};W.ca=function(){return bqa};W.Sl=function(a){var b=this.ca(),c=[b,a.us()==Tg?b+pma:b+Bma];a[gz]()||c[C](b+rB);return c};function xN(a,b,c){rM[L](this,c);this.g=b||vN.Vb();this.lb=a||Rh}Y(xN,rM);W=xN[K];W.HY=null;W.Df=null;W.g=null;W.lb=null;W.ee=!0;W.tg=!0;W.Y2=!0;W.Kf=-1;W.lh=null;W.Vn=!1;W.Qna=!1;W.pma=!0;W.Nr=null;W.Kg=function(){return this.HY||this.g.Kg(this)};W.rP=function(){return this.Df||(this.Df=new VM(this.Kg()))};W.jb=function(){return this.g};W.Hba=function(a){if(this.a())throw m(EC);this.g=a};W.j=function(){this.q=this.g.j(this)};W.Ya=function(){return this.g.Ya(this.a())};W.Zh=function(a){return this.g.Zh(a)};
W.Ef=function(a){this.q=this.g.Ma(this,a);a[x][Xc]==Q&&(this.ee=!1)};W.Fb=function(){xN.e.Fb[L](this);tM(this,function(a){a.Db&&vDa(this,a)},this);var a=this.a();this.g.Im(this);this[Ny](this.ee,!0);this.tc().m(this,tF,this.WW).m(this,iG,this.xG).m(this,gK,this.GW).m(this,gI,this.Wha).m(this,CE,this.Uha).m(a,Gs,this.af).m(Uk(a),QH,this.Vha).m(a,[Gs,QH,Is,Hs,IE],this.Tha);this.vr()&&wDa(this,!0)};
function wDa(a,b){var c=a.tc(),d=a.Kg();b?c.m(d,Kg,a.Du).m(d,LD,a.Bx).m(a.rP(),BG,a.Yi):c.vb(d,Kg,a.Du).vb(d,LD,a.Bx).vb(a.rP(),BG,a.Yi)}W.He=function(){this.Gf(-1);this.lh&&this.lh.Ad(!1);this.Vn=!1;xN.e.He[L](this)};W.B=function(){xN.e.B[L](this);this.Df&&(this.Df.Z(),this.Df=null);this.g=this.lh=this.Nr=this.HY=null};W.WW=function(){return!0};
W.xG=function(a){var b=vM(this,a[ar]);if(-1<b&&b!=this.Kf){var c=yN(this);c&&c.Rh(!1);this.Kf=b;c=yN(this);this.Vn&&c[$z](!0);this.pma&&this.lh&&c!=this.lh&&(bN(c,64)?c.Ad(!0):this.lh.Ad(!1))}b=this.a();null!=a[ar].a()&&ML(b,iD,a[ar].a().id)};W.GW=function(a){a[ar]==yN(this)&&(this.Kf=-1);this.a()[Uc](lra)};W.Wha=function(a){(a=a[ar])&&a!=this.lh&&a[Rx]()==this&&(this.lh&&this.lh.Ad(!1),this.lh=a)};W.Uha=function(a){a[ar]==this.lh&&(this.lh=null)};
W.af=function(a){this.tg&&(this.Vn=!0);var b=this.Kg();b&&vl(b)&&wl(b)?b[ky]():a[eq]()};W.Vha=function(){this.Vn=!1};W.Tha=function(a){var b;t:{b=a[ar];if(this.Nr)for(var c=this.a();b&&b!==c;){var d=b.id;if(d in this.Nr){b=this.Nr[d];break t}b=b[je]}b=null}if(b)switch(a[H]){case Gs:b.af(a);break;case QH:b.Tp(a);break;case Is:b.ko(a);break;case Hs:b.tO(a);break;case IE:b.qI(a)}};W.Du=function(){};W.Bx=function(){this.Gf(-1);this.Vn=!1;this.lh&&this.lh.Ad(!1)};
W.Yi=function(a){return this[gz]()&&this.R()&&(0!=this.ng()||this.HY)&&this.Xj(a)?(a[eq](),a[yq](),!0):!1};
W.Xj=function(a){var b=yN(this);if(b&&typeof b.Yi==Mg&&b.Yi(a)||this.lh&&this.lh!=b&&typeof this.lh.Yi==Mg&&this.lh.Yi(a))return!0;if(a[cr]||a[Yq]||a[Rq]||a[rq])return!1;switch(a[lq]){case 27:if(this.vr())this.Kg()[Fz]();else return!1;break;case 36:xDa(this);break;case 35:yDa(this);break;case 38:if(this.lb==Rh)zN(this);else return!1;break;case 37:if(this.lb==Tg)this.hh()?AN(this):zN(this);else return!1;break;case 40:if(this.lb==Rh)AN(this);else return!1;break;case 39:if(this.lb==Tg)this.hh()?zN(this):
AN(this);else return!1;break;default:return!1}return!0};function vDa(a,b){var c=b.a(),c=c.id||(c.id=b[rA]());a.Nr||(a.Nr={});a.Nr[c]=b}W.va=function(a,b){xN.e.va[L](this,a,b)};W.ky=function(a,b,c){a.Ts|=2;a.Ts|=64;!this.vr()&&this.Qna||a.cg(32,!1);gN(a,!1);xN.e.ky[L](this,a,b,c);a.Db&&this.Db&&vDa(this,a);b<=this.Kf&&this.Kf++};
W.removeChild=function(a,b){if(a=oi(a)?this.wB(a):a){var c=vM(this,a);-1!=c&&(c==this.Kf?(a.Rh(!1),this.Kf=-1):c<this.Kf&&this.Kf--);(c=a.a())&&c.id&&this.Nr&&dk(this.Nr,c.id)}a=xN.e[Ud][L](this,a,b);gN(a,!0);return a};W.us=function(){return this.lb};W.mI=function(a){if(this.a())throw m(EC);this.lb=a};W.R=function(){return this.ee};Jw(W,function(a,b){if(b||this.ee!=a&&this[fq](a?qJ:gG)){this.ee=a;var c=this.a();c&&(hm(c,a),this.vr()&&wN(this.Kg(),this.tg&&this.ee),b||this[fq](this.ee?Cqa:Bqa));return!0}return!1});
Tw(W,function(){return this.tg});W.La=function(a){this.tg!=a&&this[fq](a?qF:gF)&&(a?(this.tg=!0,tM(this,function(a){a.pda?delete a.pda:a.La(!0)})):(tM(this,function(a){a[gz]()?a.La(!1):a.pda=!0}),this.Vn=this.tg=!1),this.vr()&&wN(this.Kg(),a&&this.ee))};W.vr=function(){return this.Y2};W.Sn=function(a){a!=this.Y2&&this.Db&&wDa(this,a);this.Y2=a;this.tg&&this.ee&&wN(this.Kg(),a)};W.Gf=function(a){(a=this.wf(a))?a.Rh(!0):-1<this.Kf&&yN(this).Rh(!1)};W.Rh=function(a){this.Gf(vM(this,a))};
function yN(a){return a.wf(a.Kf)}function xDa(a){BN(a,function(a,c){return(a+1)%c},a.ng()-1)}function yDa(a){BN(a,function(a,c){a--;return 0>a?c-1:a},0)}function AN(a){BN(a,function(a,c){return(a+1)%c},a.Kf)}function zN(a){BN(a,function(a,c){a--;return 0>a?c-1:a},a.Kf)}function BN(a,b,c){c=0>c?vM(a,a.lh):c;var d=a.ng();c=b[L](a,c,d);for(var e=0;e<=d;){var f=a.wf(c);if(f&&a.zea(f)){a.g1(c);break}e++;c=b[L](a,c,d)}}W.zea=function(a){return a.R()&&a[gz]()&&bN(a,2)};W.g1=function(a){this.Gf(a)};function CN(){}Y(CN,WM);gi(CN);CN[K].ca=function(){return hqa};function DN(a,b,c){fN[L](this,a,c||CN.Vb(),b);this.cg(1,!1);this.cg(2,!1);this.cg(4,!1);this.cg(32,!1);this.o=1}Y(DN,fN);dN(hqa,function(){return new DN(null)});function EN(){}Y(EN,WM);gi(EN);EN[K].j=function(a){return a.ia().j(P,this.ca())};EN[K].Ma=function(a,b){b.id&&a.bx(b.id);if(b[Tc]==Df){var c=b;b=this.j(a);il(b,c);kl(c)}else yM(b,this.ca());return b};px(EN[K],function(){});EN[K].ca=function(){return fD};function FN(a,b){fN[L](this,null,a||EN.Vb(),b);this.cg(1,!1);this.cg(2,!1);this.cg(4,!1);this.cg(32,!1);this.o=1}Y(FN,fN);FN[K].Fb=function(){FN.e.Fb[L](this);var a=this.a();LL(a,eJ)};dN(fD,function(){return new FN});function GN(a){this.JU=a||Swa}Y(GN,vN);gi(GN);W=GN[K];W.Zh=function(a){return a[Tc]==Jpa||GN.e.Zh[L](this,a)};W.w_=function(a){return a[Tc]==Df?new FN:GN.e.w_[L](this,a)};W.ss=function(a,b){return pl(a.a(),b)};W.ca=function(){return eD};W.Im=function(a){GN.e.Im[L](this,a);a=a.a();ML(a,dG,Mh)};dN(fD,function(){return new FN});function HN(a,b){xN[L](this,Rh,b||GN.Vb(),a);this.Sn(!1)}Y(HN,xN);W=HN[K];W.rI=!0;W.Eba=!1;W.ca=function(){return this.jb().ca()};W.ss=function(a){if(this.jb().ss(this,a))return!0;for(var b=0,c=this.ng();b<c;b++){var d=this.wf(b);if(typeof d.ss==Mg&&d.ss(a))return!0}return!1};W.Aj=function(a){this.va(a,!0)};W.mv=function(a,b){this.ky(a,b,!0)};W.rd=function(a){return this.wf(a)};W.eh=function(){return this.ng()};W.fx=function(){var a=[];tM(this,function(b){a[C](b)});return a};
Hx(W,function(a,b){var c=this.R();c||hm(this.a(),!0);var d=this.a(),e=a,f=b,g=Wl(d);e instanceof Kk&&(f=e.y,e=e.x);Ql(d,d[Sd]+(e-g.x),d[Yc]+(f-g.y));c||hm(this.a(),!1)});Sw(W,function(){return this.R()?Wl(this.a()):null});Jw(W,function(a,b,c){(b=HN.e[Ny][L](this,a,b))&&a&&this.Db&&this.rI&&this.Kg()[ky]();this.tba=a&&c&&qi(c[Dd])?new Kk(c[Dd],c[Ed]):null;return b});W.WW=function(a){this.rI&&this.Kg()[ky]();return HN.e.WW[L](this,a)};W.zea=function(a){return(this.Eba||a[gz]())&&a.R()&&bN(a,2)};
W.Ef=function(a){var b=this.jb(),c;c=this.ia();var d=b.ca()+pB;c=Xk(c.qf,P,d,a);for(var d=c[J],e=0;e<d;e++)uDa(b,this,c[e]);HN.e.Ef[L](this,a)};W.Xj=function(a){var b=HN.e.Xj[L](this,a);b||tM(this,function(c){!b&&c.toa&&c.K0==a[lq]&&(this[gz]()&&this.Rh(c),b=c.Yi(a))},this);return b};
W.Gf=function(a){HN.e.Gf[L](this,a);if(a=this.wf(a)){var b=a.a();a=this.a();var c=Wl(b),d=Wl(a),e=om(a),f=c.x-d.x-e[G],c=c.y-d.y-e.top,d=a[$d]-b[Zc],e=a[Lc],g=a[Gd],e=e+h.min(f,h.max(f-(a[Kd]-b[Ab]),0)),g=g+h.min(c,h.max(c-d,0)),b=new Kk(e,g);a.scrollLeft=b.x;tx(a,b.y)}};function IN(){}Y(IN,sN);gi(IN);W=IN[K];W.j=function(a){var b={"class":dD+this.Sl(a)[me](se)},b=a.ia().j(P,b,this.$P(a[Xz](),a.ia()));this.aj(b,a.Zm());ZM(this,a,b);return b};W.Xk=function(){return YD};W.Ya=function(a){return a&&a[Ub][Ub]};W.$P=function(a,b){return b.j(P,dD+(this.ca()+uB),b.j(P,dD+(this.ca()+tB),a))};W.Zh=function(a){return a[Tc]==vf};
    W.Ma = function (a, b) {
        zDa(b, !0);
        zDa(b, !1);
        var c;
        t:{
            c = a.ia().nN(b);
            var d = this.ca() + uB;
            if (c && xM(c, d) && (c = a.ia().nN(c), d = this.ca() + tB, c && xM(c, d))) {
                c = !0;
                break t
            }
            c = !1
        }
        c || b[q](this.$P(b[Zb], a.ia()));
        zM(b, [cD, this.ca()]);
        return IN.e.Ma[L](this, a, b)
    };
    W.ca = function () {
        return dqa
    };
    function zDa(a, b) {
        if (a)for (var c = b ? a[Ub] : a[Dc], d; c && c[je] == a;) {
            d = b ? c[dc] : c[jc];
            if (3 == c[kd]) {
                var e = c[bd];
                if (Di(e) == O) a[Ud](c); else {
                    c.nodeValue = b ? e[wb](/^[\s\xa0]+/, O) : e[wb](/[\s\xa0]+$/, O);
                    break
                }
            } else break;
            c = d
        }
    }

    function JN() {
    }

    Y(JN, IN);
    gi(JN);
    W = JN[K];
    W.Ya = function (a) {
        return JN.e.Ya[L](this, a && a[Ub])
    };
    W.Ma = function (a, b) {
        var c = Wk(Pe, eD, b)[0];
        if (c) {
            hm(c, !1);
            Uk(c)[Td][q](c);
            var d = new HN;
            d.Ma(c);
            a.Jm(d)
        }
        return JN.e.Ma[L](this, a, b)
    };
    W.$P = function (a, b) {
        return JN.e.$P[L](this, [this[Ez](a, b), this.OP(b)], b)
    };
    ex(W, function (a, b) {
        return KN(a, this.ca(), b)
    });
    function KN(a, b, c) {
        return c.j(P, dD + (b + oB), a)
    }

    W.OP = function (a) {
        return a.j(P, dD + (this.ca() + sB), $h)
    };
    W.ca = function () {
        return gqa
    };
    function LN(a, b, c, d, e) {
        uN[L](this, a, c || JN.Vb(), d);
        this.cg(64, !0);
        this.wP = new oN(null, 5);
        b && this.Jm(b);
        this.wka = null;
        this.fd = new Vt(500);
        !sDa && !tDa || Ik(lna) || (this.mA = !0);
        this.Boa = e || GN.Vb()
    }

    Y(LN, uN);
    W = LN[K];
    W.mA = !1;
    W.oha = !1;
    W.Fb = function () {
        LN.e.Fb[L](this);
        ADa(this, !0);
        this.$ && MN(this, this.$, !0);
        ML(this.q, dG, !!this.$)
    };
    W.He = function () {
        LN.e.He[L](this);
        ADa(this, !1);
        if (this.$) {
            this.Ad(!1);
            this.$.He();
            MN(this, this.$, !1);
            var a = this.$.a();
            a && kl(a)
        }
    };
    W.B = function () {
        LN.e.B[L](this);
        this.$ && (this.$.Z(), delete this.$);
        delete this.iia;
        this.fd.Z()
    };
    W.af = function (a) {
        LN.e.af[L](this, a);
        this.Rk() && (this.Ad(!cN(this, 64), a), this.$ && (this.$.Vn = cN(this, 64)))
    };
    W.Tp = function (a) {
        LN.e.Tp[L](this, a);
        this.$ && !this.Rk() && (this.$.Vn = !1)
    };
    W.ti = function () {
        this[$z](!1);
        return !0
    };
    W.lha = function (a) {
        this.$ && this.$.R() && !this.ss(a[ar]) && this.Ad(!1)
    };
    W.ss = function (a) {
        return a && pl(this.a(), a) || this.$ && this.$.ss(a) || !1
    };
W.Xj=function(a){if(32==a[lq]){if(a[eq](),a[H]!=DG)return!0}else if(a[H]!=BG)return!1;if(this.$&&this.$.R()){var b=this.$.Yi(a);return 27==a[lq]?(this.Ad(!1),!0):b}return 40==a[lq]||38==a[lq]||32==a[lq]||13==a[lq]?(this.Ad(!0,a),!0):!1};W.Xx=function(){this.Ad(!1)};W.mha=function(){this.Rk()||this.Ad(!1)};W.Bx=function(a){this.mA||this.Ad(!1);LN.e.Bx[L](this,a)};W.Jf=function(){this.$||this.Jm(new HN(this.ia(),this.Boa));return this.$||null};
W.Jm=function(a){var b=this.$;if(a!=b&&(b&&(this.Ad(!1),this.Db&&MN(this,b,!1),delete this.$),this.Db&&ML(this.q,dG,!!a),a)){this.$=a;sM(a,this);a[Ny](!1);var c=this.mA;(a.rI=c)&&a.Sn(!0);this.Db&&MN(this,a,!0)}return b};W.Aj=function(a){this.Jf().va(a,!0)};W.mv=function(a,b){this.Jf().ky(a,b,!0)};W.rd=function(a){return this.$?this.$.wf(a):null};W.eh=function(){return this.$?this.$.ng():0};Jw(W,function(a,b){var c=LN.e[Ny][L](this,a,b);c&&!this.R()&&this.Ad(!1);return c});
W.La=function(a){LN.e.La[L](this,a);this[gz]()||this.Ad(!1)};W.jca=function(){this.Ad(!0)};W.dw=function(){this.Ad(!1)};
W.Ad=function(a,b){LN.e.Ad[L](this,a);if(this.$&&cN(this,64)==a){if(a){if(!this.$.Db)if(this.oha){var c;c=this.a();(c=void 0!=c.nextElementSibling?c.nextElementSibling:qea(c[dc]))?this.$.Iz(c[je],c):this.$.C(this.a()[je])}else this.$.C();this.X5=Vl(this.a());this.W5=fm(this.a());this.xM();this.$.Gf(!b||40!=b[lq]&&38!=b[lq]?-1:0)}else{this[$z](!1);this.$.Vn=!1;if(c=this.a())ML(c,iD,O),ML(c,lI,O);null!=this.QM&&(this.QM=void 0,(c=this.$.a())&&$l(c,O,O))}this.$[Ny](a,!1,b);if(!this.nk){c=this.tc();var d=
a?c.m:c.vb;d[L](c,this.ia().gc(),Gs,this.lha,!0);this.mA&&d[L](c,this.$,LD,this.mha);d[L](c,this.fd,Vs,this.nha);a?this.fd[y]():this.fd[Wq]()}}};W.xM=function(){if(this.$.Db){var a=this.iia||this.a(),b=this.wP;Ix(this.wP,a);a=this.$.a();this.$.R()||(ib(a[x],Sg),hm(a,!0));!this.QM&&this.wP.vla&&this.wP.ZP&32&&(this.QM=em(a));b.Ze(a,b.EI^1,this.wka,this.QM);this.$.R()||(hm(a,!1),ib(a[x],Sh))}};
W.nha=function(){var a=fm(this.a()),b=Vl(this.a()),c;(c=!Ll(this.W5,a))||(c=this.X5,c=!(c==b||c&&b&&c.top==b.top&&c[cd]==b[cd]&&c[Mc]==b[Mc]&&c[G]==b[G]));c&&(this.W5=a,this.X5=b,this.xM())};function MN(a,b,c){var d=a.tc();c=c?d.m:d.vb;c[L](d,b,hD,a.Xx);c[L](d,b,iG,a.xG);c[L](d,b,gK,a.GW)}function ADa(a,b){var c=a.tc();(b?c.m:c.vb)[L](c,a.a(),CG,a.wla)}W.xG=function(a){var b=this.a();if(a=a[ar].a()){var c=NL(a,iD);a=Uk(a)[md](c)||a;a.id||(c=pM.Vb(),a.id=qM(c));c=O;a&&(c=a.id);ML(b,iD,c);ML(b,lI,a.id)}};
W.wla=function(a){bN(this,32)&&this.Kg()&&this.$&&this.$.R()&&a[yq]()};W.GW=function(){if(!yN(this.$)){var a=this.a();ML(a,iD,O);ML(a,lI,O)}};dN(gqa,function(){return new LN(null)});function NN(a){Tt[L](this);this.Ds=[];BDa(this,a)}Y(NN,Tt);W=NN[K];W.vy=null;W.EP=null;W.eh=function(){return this.Ds[J]};W.rd=function(a){return this.Ds[a]||null};function BDa(a,b){b&&(Z(b,function(a){this.IC(a,!1)},a),ij(a.Ds,b))}W.Aj=function(a){this.mv(a,this.eh())};W.mv=function(a,b){a&&(this.IC(a,!1),cj(this.Ds,a,b))};W.$e=function(){return this.vy};W.fx=function(){return gj(this.Ds)};W.Pk=function(a){a!=this.vy&&(this.IC(this.vy,!1),this.vy=a,this.IC(a,!0));this[fq](Ps)};
W.yp=function(){var a=this.vy;return a?Qi(this.Ds,a):-1};W.wl=function(a){this.Pk(this.rd(a))};va(W,function(){bj(this.Ds);this.vy=null});W.B=function(){NN.e.B[L](this);delete this.Ds;this.vy=null};W.IC=function(a,b){a&&(typeof this.EP==Mg?this.EP(a,b):typeof a.jo==Mg&&a.jo(b))};function ON(a,b,c,d,e){LN[L](this,a,b,c,d,e||new GN(ywa));this.tN=this[Xz]();this.g_=null;this.z4(ywa)}Y(ON,LN);W=ON[K];W.pa=null;W.Fb=function(){ON.e.Fb[L](this);PN(this);CDa(this)};W.Ef=function(a){ON.e.Ef[L](this,a);(a=this.Bl())?(this.tN=a,PN(this)):this.$e()||this.wl(0)};W.B=function(){ON.e.B[L](this);this.pa&&(this.pa.Z(),this.pa=null);this.tN=null};W.Xx=function(a){this.Pk(a[ar]);ON.e.Xx[L](this,a);a[yq]();this[fq](hD)};W.t_=function(){var a=this.$e();ON.e.Fa[L](this,a&&a[I]());PN(this)};
W.Jm=function(a){var b=ON.e.Jm[L](this,a);a!=b&&(this.pa&&this.pa[Yb](),a&&(this.pa?tM(a,function(a){QN(a);this.pa.Aj(a)},this):RN(this,a)));return b};W.Aj=function(a){QN(a);ON.e.Aj[L](this,a);this.pa?this.pa.Aj(a):RN(this,this.Jf());SN(this)};W.mv=function(a,b){QN(a);ON.e.mv[L](this,a,b);this.pa?this.pa.mv(a,b):RN(this,this.Jf())};W.Pk=function(a){if(this.pa){var b=this.$e();this.pa.Pk(a);a!=b&&this[fq](jE)}};W.wl=function(a){this.pa&&this.Pk(this.pa.rd(a))};
W.Fa=function(a){if(null!=a&&this.pa)for(var b=0,c;c=this.pa.rd(b);b++)if(c&&typeof c[I]==Mg&&c[I]()==a){this.Pk(c);return}this.Pk(null)};gb(W,function(){var a=this.$e();return a?a[I]():null});W.$e=function(){return this.pa?this.pa.$e():null};W.yp=function(){return this.pa?this.pa.yp():-1};function RN(a,b){a.pa=new NN;b&&tM(b,function(a){QN(a);this.pa.Aj(a)},a);CDa(a)}function CDa(a){a.pa&&a.tc().m(a.pa,Ps,a.t_)}
function PN(a){var b=a.$e();a[Wz](b?b.Bl():a.tN);var c=a.jb().Ya(a.a());c&&a.ia().Jla(c)&&(null==a.g_&&(a.g_=NL(c,FG)),b=(b=b?b.a():null)?NL(b,FG):a.g_,ML(c,FG,b),SN(a))}function SN(a){var b=a.jb();if(b&&(b=b.Ya(a.a()))){var c=a.q;b.id||(b.id=qM(pM.Vb()));LL(b,hI);ML(c,iD,b.id);a.pa&&(c=a.pa.fx(),c=Cda(c,function(a){return a instanceof nN}),ML(b,bza,c),ML(b,Lxa,1+a.pa.yp()))}}function QN(a){a.z4(a instanceof nN?hI:eJ)}W.Ad=function(a,b){ON.e.Ad[L](this,a,b);cN(this,64)?this.Jf().Gf(this.yp()):SN(this)};
dN(nqa,function(){return new ON(null)});function TN(a,b){this.U=Sk();this.n=a;this.uba=[];this.mf(b)}TN[K].xC=null;
function DDa(a,b){var c=Sk(),d,e,f=null;switch(a){case 2:d=new LM(Lua);f=CI+d[rA]();e=c.j(P,null,c.j(P,{"class":Kua},moa),c.j(VD,null),c.j(Pxa,null,c.j(P,{id:f},b[Aq])));break;case 3:d=new LM(Jua);e=c.j(P,null,c.j(P,{"class":Kua},moa),c.j(VD,null));var g=c.j(P,null,c.j(Pxa,null,b[Aq]));c[q](e,g)}d[Wz](e[nd]);c=d;PM(c);Xa(c.Xi,Foa);c=d;PM(c);Xa(c.Ih,O);d[Ny](!0);if(f){d=c=Vk(f);f=0;e=1;g=new nM;g.Co=MCa(d,f,c,e);if(nl(d)&&!fl(d)){var k=d[je],f=Qi(k[Zb],d);d=k}nl(c)&&!fl(c)&&(k=c[je],e=Qi(k[Zb],c),
c=k);g.Co?(g.ae=c,g.$d=e,g.Gd=d,g.Zd=f):(g.ae=d,g.$d=f,g.Gd=c,g.Zd=e);g[ly]()}}
TN[K].mf=function(a){a=a||[];var b=this.n,c=this.U;c.Nc(b);if(!b)throw m(tf);var d=c.j(Qs,null),e=[c.j(Qs,null,foa)];this.xC=new ON(e);if(a)for(e=0;e<a[J];e++){var f=null,f=a[e],g=f.datasource,k=f.gadget,l=f.userprefs,n=f[Qd],p=f[wxa],s=f[x]||FBa;switch(f[H]){case Xsa:f=UN(this,e,ui(function(a){ba[Mq]((new du(a)).Yc(ZAa,nxa),Goa)},g),xoa);break;case Dva:f=UN(this,e,ui(function(a,b){DDa(2,{message:Mna+s+pla+aa(a)+Yla+aa(b)+EDa(l)+ve})},k,g),ipa);break;case Xva:f=UN(this,e,ui(function(a,b,c){DDa(3,
{message:Lna+aa(b)+$la+a+Zla+aa(c)+ama})},g,p,n),Qoa);break;case Vg:f=UN(this,e,ui(function(a){ba[Mq]((new du(a)).Yc(ZAa,oxa),Goa)},g),yoa);break;case Iva:f=UN(this,e,ui(function(a,b,c){ba[Mq](Fva+aa(a)+Yla+aa(b)+EDa(c))},k,g,l),Yna);break;default:throw m("No such toolbar component as: "+f.toSource());}f&&this.xC.Aj(f)}Lt(this.xC,hD,X(this.xla,this));this.xC.C(d);c[q](b,d)};TN[K].xla=function(){var a=this.xC.yp();this.uba[a]();this.xC.wl(-1)};function UN(a,b,c,d){d=new nN(d);a.uba[b]=c;return d}

    function EDa(a) {
        if (!a)return O;
        var b = O, c;
        for (c in a)b += Xla + c + lf + aa(a[c]);
        return b
    }

    function YM() {
    }

    Y(YM, WM);
    gi(YM);
    YM[K].j = function (a) {
        var b = a.ia().j(Qs, this.Sl(a)[me](se));
        FDa(this, b, a.Rp);
        return b
    };
    YM[K].Ma = function (a, b) {
        b = YM.e.Ma[L](this, a, b);
        var c = wM(b), d = !1;
        $i(c, VN(this, null)) ? d = null : $i(c, VN(this, !0)) ? d = !0 : $i(c, VN(this, !1)) && (d = !1);
        a.Rp = d;
        ML(b, vE, null == d ? LH : !0 == d ? Mh : Gg);
        return b
    };
    YM[K].Xk = function () {
        return uE
    };
    function FDa(a, b, c) {
        if (b) {
            var d = VN(a, c);
            xM(b, d) || (Sj(GDa, function (a) {
                a = VN(this, a);
                CM(b, a, a == d)
            }, a), ML(b, vE, null == c ? LH : !0 == c ? Mh : Gg))
        }
    }

    YM[K].ca = function () {
        return aqa
    };
    function VN(a, b) {
        var c = a.ca();
        if (!0 == b)return c + kma;
        if (!1 == b)return c + zma;
        if (null == b)return c + Ama;
        throw m("Invalid checkbox state: " + b);
    }

    function WN(a, b, c) {
        c = c || YM.Vb();
        fN[L](this, null, c, b);
        this.Rp = ci(a) ? a : !1
    }

    Y(WN, fN);
    var GDa = {Exa: !0, wza: !1, xza: null};
    W = WN[K];
    W.Ob = null;
    W.Am = function () {
        return !0 == this.Rp
    };
    W.Zg = function (a) {
        a != this.Rp && (this.Rp = a, FDa(this.jb(), this.a(), this.Rp))
    };
    W.Bm = function (a) {
        this.Db ? (this.He(), this.Ob = a, this.Fb()) : this.Ob = a
    };
    W.toggle = function () {
        this.Zg(this.Rp ? !1 : !0)
    };
    W.Fb = function () {
        WN.e.Fb[L](this);
        if (this.hN) {
            var a = this.tc();
            this.Ob && a.m(this.Ob, gs, this.XX).m(this.Ob, Is, this.ko).m(this.Ob, Hs, this.tO).m(this.Ob, Gs, this.af).m(this.Ob, QH, this.Tp);
            a.m(this.a(), gs, this.XX)
        }
        this.Ob && (this.Ob.id || (this.Ob.id = this[rA]() + Rma), a = this.a(), ML(a, IG, this.Ob.id))
    };
    W.La = function (a) {
        WN.e.La[L](this, a);
        (a = this.a()) && db(a, this[gz]() ? 0 : -1)
    };
    W.XX = function (a) {
        a[yq]();
        var b = this.Rp ? iBa : jsa;
        this[gz]() && !a[ar][Nc] && this[fq](b) && (a[eq](), this.toggle(), this[fq](jE))
    };
W.Xj=function(a){32==a[lq]&&this.XX(a);return!1};dN(aqa,function(){return new WN});function XN(a,b){Tt[L](this);this.q=a;var c=nl(this.q)?this.q:this.q?this.q[Td]:null;this.Epa=!!c&&Xl(c);this.L$=Lt(this.q,Bk?ooa:RH,this,b)}Y(XN,Tt);
Hp(XN[K],function(a){var b=0,c=0,d=0;a=a.Qa;if(a[H]==RH){c=1;if(Ak||Ek&&(wk||Ik(kna)))c=40;d=YN(-a.wheelDelta,c);ci(a.wheelDeltaX)?(b=YN(-a.wheelDeltaX,c),c=YN(-a.wheelDeltaY,c)):c=d}else d=a.detail,100<d?d=3:-100>d&&(d=-3),ci(a[AA])&&a[AA]===a.HORIZONTAL_AXIS?b=d:c=d;qi(this.Hea)&&(b=Aj(b,-this.Hea,this.Hea));qi(this.Iea)&&(c=Aj(c,-this.Iea,this.Iea));this.Epa&&(b=-b);b=new HDa(d,a,b,c);this[fq](b)});function YN(a,b){return Ek&&(vk||xk)&&0!=a%b?a:a/b}
XN[K].B=function(){XN.e.B[L](this);Qt(this.L$);this.L$=null};function HDa(a,b,c,d){At[L](this,b);cb(this,RH);this.detail=a;this.Cu=c;this.fs=d}Y(HDa,At);function ZN(){Tt[L](this);this.o=0;Zw(this,null);ux(this,null)}Y(ZN,Tt);ZN[K].Su=function(){return 1==this.o};ZN[K].WI=function(){this.oj(vra)};ZN[K].Wx=function(){this.oj(sF)};ZN[K].oj=function(a){this[fq](a)};function $N(){ZN[L](this);this.vs=[]}Y($N,ZN);$N[K].add=function(a){$i(this.vs,a)||(this.vs[C](a),Lt(a,GF,this.Cfa,!1,this))};ua($N[K],function(a){ej(this.vs,a)&&Pt(a,GF,this.Cfa,!1,this)});$N[K].B=function(){Z(this.vs,function(a){a.Z()});kb(this.vs,0);$N.e.B[L](this)};function aO(){$N[L](this);this.U1=0}Y(aO,$N);
    aO[K].play = function (a) {
        if (0 == this.vs[J])return !1;
        if (a || 0 == this.o) this.U1 = 0, this.WI(); else if (this.Su())return !1;
        this.oj(rI);
        -1 == this.o && this.oj(Lya);
        var b = -1 == this.o && !a;
        Zw(this, vi());
        ux(this, null);
        this.o = 1;
        Z(this.vs, function (c) {
            b && -1 != c.o || c[Pz](a)
        });
        return !0
    };
    Wp(aO[K], function (a) {
        Z(this.vs, function (b) {
            0 == b.o || b[Wq](a)
        });
        this.o = 0;
        ux(this, vi());
        this.oj(EJ);
        this.Wx()
    });
    aO[K].Cfa = function () {
        this.U1++;
        this.U1 == this.vs[J] && (ux(this, vi()), this.o = 0, this.oj(GF), this.Wx())
    };
    function bO(a, b, c) {
        this.ms = a;
        this.Iv = b || 0;
        this.he = c;
        this.Qs = X(this.YK, this)
    }

    Y(bO, ut);
    W = bO[K];
    W.ic = 0;
    W.B = function () {
        bO.e.B[L](this);
        this[Wq]();
        delete this.ms;
        delete this.he
    };
    Ka(W, function (a) {
        this[Wq]();
        this.ic = Wt(this.Qs, ci(a) ? a : this.Iv)
    });
    Wp(W, function () {
        this.Rk() && Xt(this.ic);
        this.ic = 0
    });
    W.ZT = function () {
        this[Wq]();
        this.YK()
    };
    W.Rk = function () {
        return 0 != this.ic
    };
    W.YK = function () {
        this.ic = 0;
        this.ms && this.ms[L](this.he)
    };
    var cO = {}, dO = null;

    function eO(a) {
        a = ti(a);
        delete cO[a];
        ck(cO) && dO && dO[Wq]()
    }

    function IDa() {
        dO || (dO = new bO(function () {
            JDa()
        }, 20));
        var a = dO;
        a.Rk() || a[y]()
    }

    function JDa() {
        var a = vi();
        Sj(cO, function (b) {
            KDa(b, a)
        });
        ck(cO) || IDa()
    }

    function gO(a, b, c, d) {
        ZN[L](this);
        if (!ki(a) || !ki(b))throw m("Start and end parameters must be arrays");
        if (a[J] != b[J])throw m("Start and end points must be the same length");
        this.$i = a;
        this.ur = b;
        this.duration = c;
        this.ffa = d;
        Fx(this, []);
        this.hy = !1
    }

    Y(gO, ZN);
    W = gO[K];
    W.ru = function (a) {
        this.hy = a
    };
    W.un = 0;
    W.play = function (a) {
        if (a || 0 == this.o) this.un = 0, Fx(this, this.$i); else if (this.Su())return !1;
        eO(this);
        a = vi();
        Zw(this, a);
        -1 == this.o && Zw(this, this[pz] - this[iA] * this.un);
        ux(this, this[pz] + this[iA]);
        this.un || this.WI();
        this.oj(rI);
        -1 == this.o && this.oj(Lya);
        this.o = 1;
        var b = ti(this);
        b in cO || (cO[b] = this);
        IDa();
        KDa(this, a);
        return !0
    };
    Wp(W, function (a) {
        eO(this);
        this.o = 0;
        a && (this.un = 1);
        LDa(this, this.un);
        this.oj(EJ);
        this.Wx()
    });
    W.B = function () {
        0 == this.o || this[Wq](!1);
        this.oj(jta);
        gO.e.B[L](this)
    };
function KDa(a,b){a.un=(b-a[pz])/(a.endTime-a[pz]);1<=a.un&&(a.un=1);LDa(a,a.un);1==a.un?(a.o=0,eO(a),a.oj(GF),a.Wx()):a.Su()&&a.g0()}function LDa(a,b){ri(a.ffa)&&(b=a.ffa(b));Fx(a,ga(a.$i[J]));for(var c=0;c<a.$i[J];c++)a[uA][c]=(a.ur[c]-a.$i[c])*b+a.$i[c]}W.g0=function(){this.oj(Hqa)};W.oj=function(a){this[fq](new MDa(a,this))};function MDa(a,b){xt[L](this,a);Fx(this,b[uA]);this.x=b[uA][0];this.y=b[uA][1];this.z=b[uA][2];this.duration=b[iA];this.un=b.un;Np(this,b.o)}Y(MDa,xt);function hO(a,b,c,d,e){gO[L](this,b,c,d,e);Ix(this,a)}Y(hO,gO);W=hO[K];W.Ny=fi;W.hh=function(){ci(this.pq)||(this.pq=Xl(this[yA]));return this.pq};W.g0=function(){this.Ny();hO.e.g0[L](this)};W.Wx=function(){this.Ny();hO.e.Wx[L](this)};W.WI=function(){this.Ny();hO.e.WI[L](this)};function iO(a,b,c,d,e){if(2!=b[J]||2!=c[J])throw m(Apa);hO[Sc](this,arguments)}Y(iO,hO);iO[K].Ny=function(){var a=this.hy&&this.hh()?Os:ah;this[yA][x][a]=h[E](this[uA][0])+U;this[yA][x].top=h[E](this[uA][1])+U};
function jO(a,b,c,d,e){if(2!=b[J]||2!=c[J])throw m(Apa);hO[Sc](this,arguments)}Y(jO,hO);jO[K].Ny=function(){pa(this[yA][x],h[E](this[uA][0])+U);Sa(this[yA][x],h[E](this[uA][1])+U)};function kO(a,b,c,d,e){hO[L](this,a,[b],[c],d,e)}Y(kO,hO);kO[K].Ny=function(){pa(this[yA][x],h[E](this[uA][0])+U)};function lO(a,b,c,d,e){hO[L](this,a,[b],[c],d,e)}Y(lO,hO);lO[K].Ny=function(){Sa(this[yA][x],h[E](this[uA][0])+U)};function mO(){Tt[L](this)}Y(mO,Tt);W=mO[K];W.wd=0;W.Wo=0;W.zn=100;W.fm=0;W.sj=1;W.Zk=!1;W.Iy=!1;W.Fa=function(a){a=nO(this,a);this.wd!=a&&(this.wd=a+this.fm>this.zn?this.zn-this.fm:a<this.Wo?this.Wo:a,this.Zk||this.Iy||this[fq](jE))};gb(W,function(){return nO(this,this.wd)});W.VS=function(a){a=nO(this,a);this.fm!=a&&(this.fm=0>a?0:this.wd+a>this.zn?this.zn-this.wd:a,this.Zk||this.Iy||this[fq](jE))};W.Ml=function(){var a=this.fm;return null==this.sj?a:h[E](a/this.sj)*this.sj};
W.zt=function(a){if(this.Wo!=a){var b=this.Zk;this.Zk=!0;this.Wo=a;a+this.fm>this.zn&&(this.fm=this.zn-this.Wo);a>this.wd&&this.Fa(a);a>this.zn&&(this.fm=0,this.Uq(a),this.Fa(a));(this.Zk=b)||this.Iy||this[fq](jE)}};W.of=function(){return nO(this,this.Wo)};W.Uq=function(a){a=nO(this,a);if(this.zn!=a){var b=this.Zk;this.Zk=!0;this.zn=a;a<this.wd+this.fm&&this.Fa(a-this.fm);a<this.Wo&&(this.fm=0,this.zt(a),this.Fa(this.zn));a<this.Wo+this.fm&&(this.fm=this.zn-this.Wo);(this.Zk=b)||this.Iy||this[fq](jE)}};
    W.nf = function () {
        return nO(this, this.zn)
    };
    W.xJ = function () {
        return this.sj
    };
    W.wS = function (a) {
        this.sj != a && (this.sj = a, a = this.Zk, this.Zk = !0, this.Uq(this.nf()), this.VS(this.Ml()), this.Fa(this[I]()), (this.Zk = a) || this.Iy || this[fq](jE))
    };
    function nO(a, b) {
        return null == a.sj ? b : a.Wo + h[E]((b - a.Wo) / a.sj) * a.sj
    }

    function oO(a, b) {
        rM[L](this, a);
        this.Jaa = null;
        this.Ne = new mO;
        this.Bma = b || yj;
        Lt(this.Ne, jE, this.Tca, !1, this)
    }

    Y(oO, rM);
    W = oO[K];
    W.lb = Tg;
    W.nR = !1;
    W.Mka = !1;
    W.pn = 10;
    W.JS = 0;
    W.r9 = !0;
    W.xO = 0;
    W.Lka = 1E3;
    W.tg = !0;
    W.Fl = !1;
    W.j = function () {
        oO.e.j[L](this);
        var a = this.ia().j(P, this.ca(this.lb));
        this.Ef(a)
    };
    W.Ef = function (a) {
        oO.e.Ef[L](this, a);
        yM(a, this.ca(this.lb));
        this.vka();
        a = this.a();
        LL(a, uJ);
        NDa(this)
    };
    W.Fb = function () {
        oO.e.Fb[L](this);
        this.Al = new DM(this.Cd);
        this.Fp = new DM(this.Wi);
        this.Al.ru(this.Fl);
        this.Fp.ru(this.Fl);
        this.Al.Fx = this.Fp.Fx = fi;
        this.Df = new VM(this.a());
        ODa(this, !0);
        db(this.a(), 0);
        pO(this)
    };
function ODa(a,b){b?(a.tc().m(a.Al,ED,a.FP).m(a.Fp,ED,a.FP).m(a.Al,[AJ,sF],a.Ku).m(a.Fp,[AJ,sF],a.Ku).m(a.Df,BG,a.Pm).m(a.a(),gs,a.HP).m(a.a(),Gs,a.HP),a.r9&&PDa(a,!0)):(a.tc().vb(a.Al,ED,a.FP).vb(a.Fp,ED,a.FP).vb(a.Al,[AJ,sF],a.Ku).vb(a.Fp,[AJ,sF],a.Ku).vb(a.Df,BG,a.Pm).vb(a.a(),gs,a.HP).vb(a.a(),Gs,a.HP),a.r9&&PDa(a,!1))}W.He=function(){oO.e.He[L](this);via(this.Al,this.Fp,this.Df,this.vm)};
W.FP=function(a){var b=a.n_==this.Al?this.Cd:this.Wi,c;this.lb==Rh?(c=this.a()[$d]-b[Zc],c=(c-a.top)/c*(this.nf()-this.of())+this.of()):(c=this.a()[Kd]-b[Ab],c=a[G]/c*(this.nf()-this.of())+this.of());c=a.n_==this.Al?h.min(h.max(c,this.of()),this[I]()+this.Ml()):h.min(h.max(c,this[I]()),this.nf());qO(this,b,c)};W.Ku=function(a){var b=a[H]==AJ;CM(this.a(),qqa,b);CM(a[ar][Vy],rqa,b);a=a.n_==this.Al;b?(this[fq](nF),this[fq](a?mg:yg)):(this[fq](Fg),this[fq](a?tg:Ag))};
W.Pm=function(a){var b=!0;switch(a[lq]){case 36:rO(this,this.of());break;case 35:rO(this,this.nf());break;case 33:sO(this,this.pn);break;case 34:sO(this,-this.pn);break;case 37:var c=this.Fl&&this.hh()?1:-1;sO(this,a[cr]?c*this.pn:c*this.My);break;case 40:sO(this,a[cr]?-this.pn:-this.My);break;case 39:c=this.Fl&&this.hh()?-1:1;sO(this,a[cr]?c*this.pn:c*this.My);break;case 38:sO(this,a[cr]?this.pn:this.My);break;default:b=!1}b&&a[eq]()};
W.HP=function(a){this.a()[ky]&&this.a()[ky]();var b=a[ar];pl(this.Cd,b)||pl(this.Wi,b)||(b=a[H]==gs,b&&vi()<this.xO+this.Lka||(b||(this.xO=vi()),this.Mka?rO(this,QDa(this,a)):(this.ZY(a),this.bn=RDa(this,QDa(this,a)),this.g9=this.lb==Rh?this.nx<this.bn[Yc]:this.nx>tO(this,this.bn)+this.bn[Ab],a=Uk(this.a()),this.tc().m(a,QH,this.QY,!0).m(this.a(),PH,this.ZY),this.du||(this.du=new Vt(200),this.tc().m(this.du,Vs,this.k9)),this.k9(),this.du[y]())))};
W.Z9=function(a){sO(this,(0<a.detail?-1:1)*this.My);a[eq]()};W.k9=function(){var a;if(this.lb==Rh){var b=this.nx,c=this.bn[Yc];this.g9?b<c&&(a=uO(this,this.bn)+this.pn):b>c+this.bn[Zc]&&(a=uO(this,this.bn)-this.pn)}else b=this.nx,c=tO(this,this.bn),this.g9?b>c+this.bn[Ab]&&(a=uO(this,this.bn)+this.pn):b<c&&(a=uO(this,this.bn)-this.pn);ci(a)&&qO(this,this.bn,a)};W.QY=function(){this.du&&this.du[Wq]();var a=Uk(this.a());this.tc().vb(a,QH,this.QY,!0).vb(this.a(),PH,this.ZY)};
function vO(a,b){var c=Yl(b,a.a());return a.lb==Rh?c.y:a.Fl&&a.hh()?a.a()[Kd]-c.x:c.x}W.ZY=function(a){this.nx=vO(this,a)};function QDa(a,b){var c=a.of(),d=a.nf();if(a.lb==Rh){var e=a.Cd[Zc],f=a.a()[$d]-e,e=vO(a,b)-e/2;return(d-c)*(f-e)/f+c}e=a.Cd[Ab];f=a.a()[Kd]-e;e=vO(a,b)-e/2;return(d-c)*e/f+c}function uO(a,b){if(b==a.Cd)return a.Ne[I]();if(b==a.Wi)return a.Ne[I]()+a.Ne.Ml();throw m("Illegal thumb element. Neither minThumb nor maxThumb");}
function sO(a,b){h.abs(b)<a.xJ()&&(b=Hj(b)*a.xJ());var c=uO(a,a.Cd)+b,d=uO(a,a.Wi)+b,c=Aj(c,a.of(),a.nf()-a.JS),d=Aj(d,a.of()+a.JS,a.nf());wO(a,c,d-c)}function qO(a,b,c){var d=nO(a.Ne,c);c=b==a.Cd?d:a.Ne[I]();b=b==a.Wi?d:a.Ne[I]()+a.Ne.Ml();c>=a.of()&&b>=c+a.JS&&a.nf()>=b&&wO(a,c,b-c)}function wO(a,b,c){a.of()<=b&&b<=a.nf()-c&&a.JS<=c&&c<=a.nf()-b&&(b!=a[I]()||c!=a.Ml())&&(a.Ne.Iy=!0,a.Ne.VS(0),a.Ne.Fa(b),a.Ne.VS(c),a.Ne.Iy=!1,a.Tca())}W.of=function(){return this.Ne.of()};W.zt=function(a){this.Ne.zt(a)};
W.nf=function(){return this.Ne.nf()};W.Uq=function(a){this.Ne.Uq(a)};function RDa(a,b){return b<=a.Ne[I]()+a.Ne.Ml()/2?a.Cd:a.Wi}W.Tca=function(){pO(this);NDa(this);this[fq](jE)};
function pO(a){if(a.Cd&&!a.nR){var b=xO(a,uO(a,a.Cd)),c=xO(a,uO(a,a.Wi));if(a.lb==Rh)a.Cd[x].top=b.y+U,a.Wi[x].top=c.y+U,a.vg&&(b=yO(c.y,b.y,a.Cd[Zc]),a.vg[x].top=b[uy]+U,Sa(a.vg[x],b[Ry]+U));else{var d=a.Fl&&a.hh()?Os:ah;a.Cd[x][d]=b.x+U;a.Wi[x][d]=c.x+U;a.vg&&(b=yO(b.x,c.x,a.Cd[Ab]),a.vg[x][d]=b[uy]+U,pa(a.vg[x],b[Ry]+U))}}}function yO(a,b,c){var d=h[yb](c/2);return{offset:a+d,size:h.max(b-a+c-2*d,0)}}
function xO(a,b){var c=new Kk;if(a.Cd){var d=a.of(),e=a.nf(),d=b==d&&d==e?0:(b-d)/(e-d);a.lb==Rh?(e=a.Cd[Zc],e=a.a()[$d]-e,d=h[E](d*e),c.x=tO(a,a.Cd),c.y=e-d):(e=a.a()[Kd]-a.Cd[Ab],d=h[E](d*e),c.x=d,c.y=a.Cd[Yc])}return c}
function rO(a,b){b=Aj(b,a.of(),a.nf());a.nR&&a.KO[Wq](!0);var c=new aO,d,e=RDa(a,b),f=a[I](),g=a.Ml(),k=uO(a,e),l=xO(a,k);d=a.xJ();h.abs(b-k)<d&&(b=Aj(k+(b>k?d:-d),a.of(),a.nf()));qO(a,e,b);k=xO(a,uO(a,e));d=a.lb==Rh?[tO(a,e),k.y]:[k.x,e[Yc]];l=new iO(e,[l.x,l.y],d,100);l.ru(a.Fl);c.add(l);a.vg&&SDa(a,e,f,g,k,c);a.Jaa&&(e=a.Jaa.Cwa(f,b,100),Z(e,function(a){c.add(a)}));a.KO=c;a.tc().m(c,sF,a.Dna);a.nR=!0;c[Pz](!1)}
function SDa(a,b,c,d,e,f){var g=xO(a,c),k=xO(a,c+d);c=g;d=k;b==a.Cd?c=e:d=e;a.lb==Rh?(b=yO(k.y,g.y,a.Cd[Zc]),g=yO(d.y,c.y,a.Cd[Zc]),e=new iO(a.vg,[tO(a,a.vg),b[uy]],[tO(a,a.vg),g[uy]],100),b=new lO(a.vg,b[Ry],g[Ry],100)):(b=yO(g.x,k.x,a.Cd[Ab]),g=yO(c.x,d.x,a.Cd[Ab]),e=new iO(a.vg,[b[uy],a.vg[Yc]],[g[uy],a.vg[Yc]],100),b=new kO(a.vg,b[Ry],g[Ry],100));e.ru(a.Fl);b.ru(a.Fl);f.add(e);f.add(b)}W.Dna=function(){this.nR=!1};
W.mI=function(a){if(this.lb!=a){var b=this.ca(this.lb),c=this.ca(a);this.lb=a;this.a()&&(a=this.a(),xM(a,b)&&(AM(a,b),yM(a,c)),b=this.Fl&&this.hh()?Os:ah,this.Cd[x][b]=this.Cd[x].top=O,this.Wi[x][b]=this.Wi[x].top=O,this.vg&&(this.vg[x][b]=this.vg[x].top=O,pa(this.vg[x],Sa(this.vg[x],O))),pO(this))}};W.us=function(){return this.lb};
W.B=function(){oO.e.B[L](this);this.du&&this.du.Z();delete this.du;this.KO&&this.KO.Z();delete this.KO;delete this.Cd;delete this.Wi;this.vg&&delete this.vg;this.Ne.Z();delete this.Ne;this.Df&&(this.Df.Z(),delete this.Df);this.vm&&(this.vm.Z(),delete this.vm);this.Al&&(this.Al.Z(),delete this.Al);this.Fp&&(this.Fp.Z(),delete this.Fp)};W.My=1;W.xJ=function(){return this.Ne.xJ()};W.wS=function(a){this.Ne.wS(a)};gb(W,function(){return this.Ne[I]()});W.Fa=function(a){qO(this,this.Cd,a)};W.Ml=function(){return this.Ne.Ml()};
    W.VS = function (a) {
        qO(this, this.Wi, this.Ne[I]() + a)
    };
    Jw(W, function (a) {
        hm(this.a(), a);
        a && pO(this)
    });
    function NDa(a) {
        var b = a.a();
        b && (ML(b, zBa, a.of()), ML(b, yBa, a.nf()), ML(b, ABa, a[I]()), ML(b, BBa, a.Bma(a[I]()) || O))
    }

    function PDa(a, b) {
        b ? (a.vm || (a.vm = new XN(a.a())), a.tc().m(a.vm, RH, a.Z9)) : a.tc().vb(a.vm, RH, a.Z9)
    }

    W.La = function (a) {
        this.tg != a && this[fq](a ? qF : gF) && (this.tg = a, ODa(this, a), a || this.QY(), CM(this.a(), pqa, !a))
    };
    Tw(W, function () {
        return this.tg
    });
    function tO(a, b) {
        return a.Fl ? kCa(b) : b[Sd]
    }

    di("google.visualization.drawToolbar", function (a, b) {
        new TN(a, b)
    }, void 0);
    function zO() {
        this.Ac = new sk;
        this.al = new sk;
        this.Ai = new sk
    }

    W = zO[K];
    va(W, function () {
        this.Ac = new sk;
        this.al = new sk;
        this.Ai = new sk
    });
    Ia(W, function () {
        var a = new zO;
        a.Ac = new sk(this.Ac.Ua());
        a.al = new sk(this.al.Ua());
        a.Ai = new sk(this.Ai.Ua());
        return a
    });
    $a(W, function (a) {
        return this.Ac[Mz](a.Ac) && this.al[Mz](a.al) && this.Ai[Mz](a.Ai)
    });
    function AO(a, b) {
        var c = [];
        Qj(b == SI ? a.Ac : a.al, function (a) {
            c[C](ka(a, 10))
        });
        return c
    }

    function IO(a) {
        return AO(a, SI)
    }

    function JO(a) {
        var b = [];
        Qj(a.Ai, function (a) {
            a = a[rc](Re);
            b[C]({row: ka(a[0], 10), column: ka(a[1], 10)})
        });
        return b
    }

    xx(W, function () {
        for (var a = [], b = IO(this), c = AO(this, zg), d = JO(this), e = 0; e < b[J]; e++) {
            var f = {};
            f.row = b[e];
            f.column = null;
            a[C](f)
        }
        for (e = 0; e < c[J]; e++)f = {row: null}, f.column = c[e], a[C](f);
        for (e = 0; e < d[J]; e++)f = {}, f.row = d[e].row, f.column = d[e].column, a[C](f);
        return a
    });
    function KO(a, b) {
        return a.Ac[Rc](String(b))
    }

    function ZO(a, b) {
        return a.al[Rc](String(b))
    }
function $O(a,b,c){if(b==SI?KO(a,c[0]):b==zg?ZO(a,c[0]):a.Ai[Rc](String(c[0]+Re+c[1])))return!1;b==SI?a.Ac.add(String(c[0])):b==zg?a.al.add(String(c[0])):a.Ai.add(String(c[0]+Re+c[1]));return!0}W.Sq=function(a){return $O(this,SI,[a])};W.Gg=function(a){return $O(this,zg,[a])};function aP(a,b,c){var d=KO(a,b);c&&a[Yb]();d?a.sC(b):a.Sq(b)}function bP(a,b,c){var d=ZO(a,b);c&&a[Yb]();d?a.e4(b):a.Gg(b)}function cP(a,b,c,d){var e=a.Ai[Rc](String(b+Re+c));d&&a[Yb]();e?a.vfa(b,c):$O(a,hE,[b,c])}
W.sC=function(a){if(!KO(this,a))return!1;this.Ac[Qb](String(a));return!0};W.e4=function(a){if(!ZO(this,a))return!1;this.al[Qb](String(a));return!0};W.vfa=function(a,b){if(!this.Ai[Rc](String(a+Re+b)))return!1;this.Ai[Qb](String(a+Re+b));return!0};
    Cw(W, function (a) {
        var b = new sk, c = new sk, d = new sk;
        a || (a = []);
        for (var e = 0; e < a[J]; e++) {
            var f = a[e];
            null != f.row && null != f.column ? d.add(String(f.row + Re + f.column)) : null != f.row ? b.add(String(f.row)) : null != f.column && c.add(String(f.column))
        }
        var g = b.im(this.Ac), k = c.im(this.al), l = d.im(this.Ai);
        a = this.Ac.im(b);
        e = this.al.im(c);
        f = this.Ai.im(d);
        this.Ac = b;
        this.al = c;
        this.Ai = d;
        b = new zO;
        b.Ac = g;
        b.al = k;
        b.Ai = l;
        c = new zO;
        c.Ac = a;
        c.al = e;
        c.Ai = f;
        return new TDa(b, c)
    });
    function TDa(a, b) {
        this.zH = a;
        this.AH = b
    }

    function UDa() {
        var a = [0, 10, 1, 2, 1, 18, 95, 33, 13, 1, 594, 112, 275, 7, 263, 45, 1, 1, 1, 2, 1, 2, 1, 1, 56, 5, 11, 11, 48, 21, 16, 1, 101, 7, 1, 1, 6, 2, 2, 1, 4, 33, 1, 1, 1, 30, 27, 91, 11, 58, 9, 34, 4, 1, 9, 1, 3, 1, 5, 43, 3, 136, 31, 1, 17, 37, 1, 1, 1, 1, 3, 8, 4, 1, 2, 1, 7, 8, 2, 2, 21, 8, 1, 2, 17, 39, 1, 1, 1, 2, 6, 6, 1, 9, 5, 4, 2, 2, 12, 2, 15, 2, 1, 17, 39, 2, 3, 12, 4, 8, 6, 17, 2, 3, 14, 1, 17, 39, 1, 1, 3, 8, 4, 1, 20, 2, 29, 1, 2, 17, 39, 1, 1, 2, 1, 6, 6, 9, 6, 4, 2, 2, 13, 1, 16, 1, 18, 41, 1, 1, 1, 12, 1, 9, 1, 41, 3, 17, 37, 4, 3, 5, 7, 8, 3, 2, 8, 2, 30, 2, 17, 39, 1, 1, 1, 1, 2, 1, 3, 1, 5, 1, 8, 9, 1, 3, 2, 30, 2, 17, 38, 3, 1, 2, 5, 7, 1, 9, 1, 10, 2, 30, 2, 22, 48,
            5, 1, 2, 6, 7, 19, 2, 13, 46, 2, 1, 1, 1, 6, 1, 12, 8, 50, 46, 2, 1, 1, 1, 9, 11, 6, 14, 2, 58, 2, 27, 1, 1, 1, 1, 1, 4, 2, 49, 14, 1, 4, 1, 1, 2, 5, 48, 9, 1, 57, 33, 12, 4, 1, 6, 1, 2, 2, 2, 1, 16, 2, 4, 2, 2, 4, 3, 1, 3, 2, 7, 3, 4, 13, 1, 1, 1, 2, 6, 1, 1, 14, 1, 98, 96, 72, 88, 349, 3, 931, 15, 2, 1, 14, 15, 2, 1, 14, 15, 2, 15, 15, 14, 35, 17, 2, 1, 7, 8, 1, 2, 9, 1, 1, 9, 1, 45, 3, 155, 1, 87, 31, 3, 4, 2, 9, 1, 6, 3, 20, 19, 29, 44, 9, 3, 2, 1, 69, 23, 2, 3, 4, 45, 6, 2, 1, 1, 1, 8, 1, 1, 1, 2, 8, 6, 13, 128, 4, 1, 14, 33, 1, 1, 5, 1, 1, 5, 1, 1, 1, 7, 31, 9, 12, 2, 1, 7, 23, 1, 4, 2, 2, 2, 2, 2, 11, 3, 2, 36, 2, 1, 1, 2, 3, 1, 1, 3, 2, 12, 36, 8, 8, 2, 2, 21, 3, 128, 3, 1, 13, 1, 7, 4, 1, 4, 2, 1, 203,
64,523,1,2,2,24,7,49,16,96,33,3070,3,141,1,96,32,554,6,105,2,30164,4,1,10,33,1,80,2,272,1,3,1,4,1,23,2,2,1,24,30,4,4,3,8,1,1,13,2,16,34,16,1,27,18,24,24,4,8,2,23,11,1,1,12,32,3,1,5,3,3,36,1,2,4,2,1,3,1,69,35,6,2,2,2,2,12,1,8,1,1,18,16,1,3,6,1,5,48,1,1,3,2,2,5,2,1,1,32,9,1,2,2,5,1,1,201,14,2,1,1,9,8,2,1,2,1,2,1,1,1,18,11184,27,49,1028,1024,6942,1,737,16,16,7,216,1,158,2,89,3,513,1,2051,15,40,7,1,1472,1,1,1,53,14,1,57,2,1,45,3,4,2,1,1,2,1,66,3,36,5,1,6,2,75,2,1,48,3,9,1,1,1258,1,1,1,2,6,1,1,22681,62,
4,25042,1,1,3,3,1,5,8,8,2,7,30,4,148,3,8097,26,790017,255],b=[1,13,1,12,1,0,1,0,1,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,1,0,2,0,2,0,2,0,2,1,0,2,0,2,0,2,0,1,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,4,0,5,2,4,2,0,4,2,4,6,4,0,2,5,0,2,0,5,2,4,0,5,2,0,2,4,2,4,6,0,2,5,0,2,0,5,0,2,4,0,5,2,4,2,6,2,5,0,2,0,2,4,0,5,2,0,4,2,4,6,0,2,0,2,4,0,5,2,0,2,4,2,4,6,2,5,0,2,0,5,0,2,0,5,2,4,2,4,6,0,2,0,4,0,5,0,2,4,2,6,2,5,0,2,0,4,0,5,2,0,4,2,4,2,4,2,4,2,6,2,5,0,2,0,4,0,5,0,2,4,2,4,6,0,2,0,2,0,4,0,5,6,2,4,2,4,2,4,0,5,0,2,0,4,2,6,
0,2,0,5,0,2,0,4,2,0,2,0,5,0,2,0,2,0,2,0,2,0,4,5,2,4,2,6,0,2,0,2,0,2,0,5,0,2,4,2,0,6,4,2,5,0,5,0,4,2,5,2,5,0,5,0,5,2,5,2,0,4,2,0,2,5,0,2,0,7,8,9,0,2,0,5,2,6,0,5,2,6,0,5,2,0,5,2,5,0,2,4,2,4,2,4,2,6,2,0,2,0,2,0,2,0,5,2,4,2,4,2,4,2,0,5,0,5,0,4,0,4,0,5,2,4,0,5,0,5,4,2,4,2,6,0,2,0,2,4,2,0,2,4,0,5,2,4,2,4,2,4,2,4,6,5,0,2,0,2,4,0,5,4,2,4,2,6,4,5,0,5,0,5,0,2,4,2,4,2,4,2,6,0,5,4,2,4,2,0,5,0,2,0,2,4,2,0,2,0,4,2,0,2,0,1,2,1,0,1,0,1,0,2,0,2,0,6,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,6,5,2,5,4,2,4,0,5,0,5,0,5,0,5,0,
            4, 0, 5, 4, 6, 0, 2, 0, 5, 0, 2, 0, 5, 2, 4, 6, 0, 7, 2, 4, 0, 5, 0, 5, 2, 4, 2, 4, 2, 4, 6, 0, 5, 2, 4, 2, 4, 2, 0, 2, 0, 2, 4, 0, 5, 0, 5, 0, 5, 0, 5, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 5, 4, 2, 4, 0, 4, 6, 0, 5, 0, 5, 0, 5, 0, 4, 2, 4, 2, 4, 0, 4, 6, 0, 11, 8, 9, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1, 0, 2, 0, 1, 0, 2, 0, 2, 0, 2, 6, 0, 4, 2, 4, 0, 2, 6, 0, 2, 4, 0, 4, 2, 4, 6, 2, 0, 1, 0, 2, 0, 2, 4, 2, 6, 0, 2, 4, 0, 4, 2, 4, 6, 0, 2, 4, 2, 4, 2, 6, 2, 0, 4, 2, 0, 2, 4, 2, 0, 4, 2, 1, 2, 0, 2, 0, 2, 0, 2, 0, 14, 0, 1, 2];
        this.oga = null;
        if (a[J] != b[J])return null;
        this.oga = a;
        for (var c = 1; c < a[J]; c++)null == a[c] ? a[c] = a[c - 1] + 1 : a[c] += a[c - 1];
        Aw(this, b)
    }

    var dP = null;

    function VDa(a) {
        if (44032 <= a && 55203 >= a)return 16 == a % 28 ? 10 : 11;
        dP || (dP = new UDa);
        for (var b = dP, c = b.oga, d = 0, e = c[J]; 8 < e - d;) {
            var f = e + d >> 1;
            c[f] <= a ? d = f : e = f
        }
        for (; d < e && !(a < c[d]); ++d);
        a = d - 1;
        return 0 > a ? null : b[my][a]
    }

    h.pow(1024, -3);
    h.pow(1024, -2);
    h.pow(1024, 2);
    h.pow(1024, 3);
    h.pow(1024, 4);
    h.pow(1024, 5);
    Ak && Ik(8);
    function WDa(a) {
        this.bua = typeof a == T ? 0 < a ? 1 : 0 > a ? -1 : null : null == a ? null : a ? -1 : 1
    }

    WDa[K].cua = YBa;
    var eP = {}, XDa = {}, fP = {};

    function gP() {
        throw m("Do not instantiate directly");
    }

    gP[K].kL = null;
    Aa(gP[K], function () {
        return this[zb]
    });
    function hP(a, b, c) {
        Xa(a, iP(b(c || jP, void 0, void 0)))
    }

    function kP(a, b, c, d) {
        d = (d || Sk())[Sb](vf);
        a = iP(a(b || jP, void 0, c));
        Xa(d, a);
        return 1 == d[Zb][J] && (a = d[Ub], 1 == a[kd]) ? a : d
    }

    function iP(a) {
        if (!ni(a))return String(a);
        if (a instanceof gP) {
            if (a.Gq === eP)return a[zb];
            if (a.Gq === fP)return Ei(a[zb])
        }
        return FK
    }

    var jP = {};

    function YDa(a) {
        if (null != a)switch (a.kL) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    }

    function lP() {
        gP[L](this)
    }

    Y(lP, gP);
    lP[K].Gq = eP;
    function mP(a) {
        return null != a && a.Gq === eP ? a : a instanceof NK ? nP(OK(a), a.rz()) : nP(Ei(String(String(a))), YDa(a))
    }

    function oP() {
        gP[L](this)
    }

    Y(oP, gP);
    oP[K].Gq = {};
    function pP(a, b) {
        this.content = String(a);
        this.kL = null != b ? b : null
    }

    Y(pP, gP);
    pP[K].Gq = fP;
    function ZDa(a) {
        function b() {
        }

        lb(b, a[K]);
        return function (a, d) {
            var e = new b;
            e.content = String(a);
            void 0 !== d && (e.kL = d);
            return e
        }
    }

    var nP = ZDa(lP);
    ZDa(oP);
    function qP(a, b) {
        var c = new Tk(void 0) || Sk(), d = iP(a(b || jP, void 0, void 0));
        return Cl(c, d)
    }

    function rP(a, b) {
        function c() {
        }

        lb(c, a);
        var d = new c, e;
        for (e in b)d[e] = b[e];
        return d
    }

    var sP = function (a) {
        function b() {
        }

        lb(b, a[K]);
        return function (a, d) {
            if (!String(a))return O;
            var e = new b;
            e.content = String(a);
            void 0 !== d && (e.kL = d);
            return e
        }
    }(lP);
function tP(a){null!=a&&a.Gq===eP?(a=String(a[zb])[wb]($Da,O)[wb](aEa,Ke),a=String(a)[wb](bEa,cEa)):a=Ei(String(a));return a}function uP(a){null!=a&&a.Gq===XDa?a=a[zb][wb](/([^"'\s])$/,Sla):(a=String(a),a=dEa[hd](a)?a:FK);return a}function vP(a){return null!=a&&a.Gq===fP?FK:a}
var eEa={"\x00":Fe,"\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;",'"':Le,"&":Ie,"'":He,"-":"&#45;","/":"&#47;","<":Ke,"=":"&#61;",">":Je,"\u0060":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function cEa(a){return eEa[a]}
var bEa=/[\x00\x22\x27\x3c\x3e]/g,dEa=/^(?!style|on|action|archive|background|cite|classid|codebase|data|dsync|href|longdesc|src|usemap)(?:[a-z0-9_$:-]*)$/i,$Da=/<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,aEa=/</g;function wP(a,b){if(a instanceof wP)this.Jd=a.kD();else{var c;if(c=li(a))t:{for(var d=c=0;d<a[J];d++){if(!li(a[d])||0<c&&a[d][J]!=c){c=!1;break t}for(var e=0;e<a[d][J];e++)if(!qi(a[d][e])){c=!1;break t}0==c&&(c=a[d][J])}c=0!=c}if(c)this.Jd=gj(a);else if(a instanceof Pk)this.Jd=fEa(a[A],a[r]);else if(qi(a)&&qi(b)&&0<a&&0<b)this.Jd=fEa(a,b);else throw m("Invalid argument(s) for Matrix contructor");}this.ja=new Pk(this.Jd[0][J],this.Jd[J])}
function xP(a,b,c){for(var d=0;d<a.ac()[A];d++)for(var e=0;e<a.ac()[r];e++)b[L](c,a.Jd[d][e],d,e,a)}function yP(a,b){var c=new wP(a.ac());xP(a,function(d,e,f){c.Jd[e][f]=b[L](void 0,d,e,f,a)});return c}function fEa(a,b){for(var c=[],d=0;d<a;d++){c[d]=[];for(var e=0;e<b;e++)c[d][e]=0}return c}W=wP[K];W.add=function(a){if(!Qk(this.ja,a.ac()))throw m("Matrix summation is only supported on arrays of equal size");return yP(this,function(b,c,d){return b+a.Jd[c][d]})};
function gEa(a,b){if(a.ja[A]!=b.ac()[A])throw m("The given matrix has height "+b.ja[A]+", but  needs to have height "+a.ja[A]+Ue);var c=new wP(a.ja[A],a.ja[r]+b.ja[r]);xP(a,function(a,b,f){c.Jd[b][f]=a});xP(b,function(a,b,f){c.Jd[b][this.ja[r]+f]=a},a);return c}$a(W,function(a,b){if(this.ja[r]!=a.ja[r]||this.ja[A]!=a.ja[A])return!1;for(var c=b||0,d=0;d<this.ja[A];d++)for(var e=0;e<this.ja[r];e++)if(!(h.abs(this.Jd[d][e]-a.Jd[d][e])<=(c||1E-6)))return!1;return!0});
W.qoa=function(){if(this.ja[r]!=this.ja[A])throw m("An inverse can only be taken on a square matrix.");if(1==this.ac()[r]){var a=zP(this,0,0);return 0==a?null:new wP([[1/a]])}for(var a=this.ja[A],b=[],c=0;c<a;c++){b[c]=[];for(var d=0;d<a;d++)b[c][d]=c==d?1:0}a=new wP(b);b=hEa(gEa(this,a));return iEa(b,0,a.ja[r]-1,a.ja[A]-1)[Mz](a)?iEa(b,a.ja[r]):null};
function hEa(a){for(var b=new wP(a),c=0,d=0;d<b.ja[A]&&!(c>=b.ja[r]);d++){for(var e=d;0==b.Jd[e][c];)if(e++,e==b.ja[A]&&(e=d,c++,c==b.ja[r]))return b;var f=a,g=d,k=f.Jd[e];f.Jd[e]=f.Jd[g];f.Jd[g]=k;e=b.Jd[d][c];for(f=c;f<b.ja[r];f++)b.Jd[d][f]/=e;for(e=0;e<b.ja[A];e++)if(e!=d)for(g=b.Jd[e][c],f=c;f<b.ja[r];f++)b.Jd[e][f]-=g*b.Jd[d][f];c++}return b}W.ac=function(){return this.ja};function AP(a){var b=new wP(a.ja[r],a.ja[A]);xP(a,function(a,d,e){b.Jd[e][d]=a});return b}
function zP(a,b,c){return 0<=b&&b<a.ja[A]&&0<=c&&c<a.ja[r]?a.Jd[b][c]:null}W.multiply=function(a){if(a instanceof wP){if(this.ja[r]!=a.ac()[A])throw m("Invalid matrices for multiplication. Second matrix should have the same number of rows as the first has columns.");return jEa(this,a)}if(qi(a))return kEa(this,a);throw m("A matrix can only be multiplied by a number or another matrix.");};
W.B4=function(a){if(!Qk(this.ja,a.ac()))throw m("Matrix subtraction is only supported on arrays of equal size.");return yP(this,function(b,c,d){return b-a.Jd[c][d]})};W.kD=function(){return this.Jd};function iEa(a,b,c,d){var e=new wP((c?c:a.ja[A]-1)-0+1,(d?d:a.ja[r]-1)-b+1);xP(e,function(a,c,d){e.Jd[c][d]=this.Jd[0+c][b+d]},a);return e}

    function jEa(a, b) {
        var c = new wP(a.ja[A], b.ac()[r]);
        xP(c, function (a, e, f) {
            for (var g = a = 0; g < this.ja[r]; g++)a += zP(this, e, g) * zP(b, g, f);
            if (!(0 <= e && e < c.ja[A] && 0 <= f && f < c.ja[r]))throw m("Index out of bounds when setting matrix value, (" + e + Re + f + ") in size (" + c.ja[A] + Re + c.ja[r] + Oe);
            c.Jd[e][f] = a
        }, a);
        return c
    }

    function kEa(a, b) {
        return yP(a, function (a) {
            return a * b
        })
    }

    function lEa(a) {
        return a
    }

    function BP(a) {
        if (void 0 === a)return lEa;
        if (typeof a == Mg)return a;
        if (typeof a == Eh)return function (b) {
            return b[a]
        };
        throw"Bad type for verbal.evaluator: " + a;
    }

    function mEa(a) {
        a = a[jd](0);
        mj(a, void 0);
        return a
    }

    function CP(a, b) {
        var c = BP(b);
        return Ui(a, function (a, b) {
            return a + c(b)
        }, 0)
    }

    function DP(a, b) {
        return CP(a, b) / a[J]
    }

    function nEa(a) {
        var b = mEa(a);
        return [0, .25, .5, .75, 1].map(function (a) {
            a *= b[J] - 1;
            return (b[h[t](a)] + b[h[yb](a)]) / 2
        })
    }

    function oEa(a, b) {
        return h[zd](pEa(a, b))
    }

    function pEa(a, b) {
        var c = BP(b), d = DP(a, function (a) {
            a = c(a);
            return a * a
        }), e = DP(a, c);
        return h.max(d - e * e, 0)
    }

    function qEa(a) {
        var b = BP(void 0), c = null;
        Z(a, function (a) {
            a = b(a);
            c >= a || (c = a)
        });
        return c
    }

    function EP(a) {
        var b = BP(void 0);
        return b(FP(a, function (a) {
            return -b(a)
        }))
    }

    function FP(a, b) {
        var c = BP(b), d, e;
        Z(a, function (a) {
            var b = c(a);
            d >= b || (d = b, e = a)
        });
        return e
    }

    function GP(a, b) {
        var c = BP(b);
        return FP(a, function (a) {
            return -c(a)
        })
    }

    var rEa = 1 / h[zd](2 * h.PI);

    function sEa(a, b, c) {
        if (0 > c)throw"Bad normal distribution: sigma = " + c + Ue;
        if (0 == c)return a == b ? da : 0;
        a = (a - b) / c;
        return rEa * h.exp(-.5 * a * a) / c
    }

    function tEa(a) {
        var b = {};
        a[Vb](function (a) {
            b[a] = (a in b ? b[a] : 0) + 1
        });
        return b
    }

    function uEa(a) {
        var b = tEa(a), c = qEa(Zj(b));
        return ak(b)[pb](function (a) {
            return b[a] == c
        }).map(function (b) {
            return typeof a[0] == T ? +b : b
        })
    }

    function HP(a) {
        this.ka = a || {};
        this.wh = this.vh = 0;
        fb(this, Wna)
    }

    function IP(a, b) {
        Sj(b, function (a, b) {
            fk(this.ka, b, a)
        }, a)
    }

    var vEa = h.log(10);

    function JP(a) {
        return a[me](we)
    }

    var wEa = ["minorgridline", cva, sD, DJ, ds, yxa, CD, xG, SG, bE, WD, oD, wI, sI, UJ, rra, "axistitle", gE, qD, JG, PG, OG, Hsa, Xs, hD];

    function KP(a, b, c, d) {
        return {html: xEa(a), Fea: !1, Gea: d, anchor: c, Eea: b, $A: 20, margin: 5}
    }

    function xEa(a) {
        if (0 == a[qA][J])return {name: P, content: [], Sc: {className: VF}};
        var b = Yi(a[qA], function (a) {
            return a[H] == eJ
        }), c;
        -1 == b ? c = yEa(a[qA]) : (c = yEa(jj(a[qA], 0, b)), a = zEa(jj(a[qA], b + 1)), c = fj(c, {
            name: P,
            Sc: {className: Qua}
        }, a));
        return {name: P, content: c, Sc: {className: VF}}
    }

    function yEa(a) {
        return {
            name: eK, Sc: {className: Pua}, content: Ti(a, function (a) {
                return {name: RG, content: AEa(a[$]), Sc: {className: Oua}}
            })
        }
    }

    function zEa(a) {
        return {
            name: eK, Sc: {className: Nua}, content: Ti(a, function (a) {
                return {name: RG, id: JP([hD, a[$].id]), content: AEa(a[$]), Sc: {className: Mua}}
            })
        }
    }

    function AEa(a) {
        return Ti(a[vy], function (a, c) {
            switch (a[H]) {
                case Us:
                    var d = a[$][x];
                    return {
                        name: Qs,
                        style: rua + d.ab + rna + (d.Tc ? AG : Q) + wna + (d.Se ? fK : Q) + sna + (d[Id] ? MD : Q) + gf,
                        Fna: !!a[Py],
                        content: (0 == c ? O : se) + a[$][id]
                    };
                case wJ:
                    return {name: P, style: ug + (a[$].brush && a[$].brush.cb()) + gf, Sc: {className: Rua}}
            }
        })
    }

    function LP(a, b, c, d, e, f, g, k, l) {
        var n = {items: []};
        null != e && (e = rn(e, f), n[vy][C]({type: wJ, data: {size: b[yc] / 2, brush: e}}));
        null != g && n[vy][C](MP(g, b));
        if (null != c) {
            if (null == d)throw m("Line title is specified without a text style.");
            c = MP(c + ef, d);
            n[vy][C](c)
        }
        c = MP(a, b, k);
        n[vy][C](c);
        null != l && (n.id = l, Bx(n, {brush: qn}));
        return {type: SG, data: n}
    }

    function BEa() {
        return {type: eJ, data: {brush: sn(mB, 1)}}
    }

    function MP(a, b, c) {
        a = {type: Us, data: {text: a, style: b}};
        c && (a.html = !0);
        return a
    }

    function NP(a, b, c, d, e, f, g, k, l) {
        if (k)return KP(a, e, d, f);
        for (var n = k = 0; n < a[qA][J]; n++) {
            var p = a[qA][n];
            if (p[H] == SG)for (var p = p[$], s = 0; s < p[vy][J]; s++) {
                var u = p[vy][s];
                u[H] == Us && (k = h.max(k, u[$][x][yc]))
            }
        }
        0 == k && (k = g || 0);
        var v;
        g = k;
        for (s = n = p = 0; s < a[qA][J]; s++)switch (u = a[qA][s], u[H]) {
            case SG:
                u = CEa(u[$], b);
                n += u[A] + (0 < s ? u.Hv : 0);
                p = h.max(p, u[r]);
                break;
            case eJ:
                n += 1.5 * g + u[$].brush.Nb
        }
        p = h.max(p, 2 * g);
        p = h[E](p + 2 * g / 1.618);
        g = h[E](n + 2 * g / 1.618);
        v = new Pk(p, g);
        var n = Hj(d.x - f.x), p = Hj(d.y - f.y), z = null, z = c ? new Kk(d.x + n * k, d.y +
p*(k+v[A]/2)):new Kk(d.x+n*v[r]/2,d.y+p*v[A]/2),s=z.x-v[r]/2,u=s+v[r],B=z.y-v[A]/2,D=B+v[A];g={};c&&(c=new Kk(z.x,Cj(d.y,z.y,k/(k+v[A]/2))),z=new Kk(Cj(z.x,d.x,-1),c.y),c.x=h[E](c.x),c.y=h[E](c.y),z.x=h[E](z.x),z.y=h[E](z.y),g.$j=1==n*p?[c,d,z]:[z,d,c]);g.fa=new Fl(h[E](B),h[E](u),h[E](D),h[E](s));d=e[G]+5;c=e[cd]-5;if(!(g.fa[G]>=d&&g.fa[cd]<=c)){n=hk(g);p=n.fa[G];Za(n.fa,Cj(f.x,n.fa[cd],-1));Ta(n.fa,Cj(f.x,p,-1));if(p=n.$j)s=p[0],p[0]=p[2],p[2]=s,p[0].x=Cj(f.x,p[0].x,-1),p[1].x=Cj(f.x,p[1].x,-1),
p[2].x=Cj(f.x,p[2].x,-1);n.fa[G]>=d&&n.fa[cd]<=c?(g.fa=n.fa,g.$j=n.$j):(g.$j&&(p=new Pm(d+4,c-4),s=new Pm(n.$j[0].x,n.$j[2].x),u=new Pm(g.$j[0].x,g.$j[2].x),!(p[y]<=u[y]&&p.end>=u.end)&&p[y]<=s[y]&&p.end>=s.end&&(g.fa=n.fa,g.$j=n.$j)),g.fa[cd]>c&&(Za(g.fa,g.fa[G]-(g.fa[cd]-c)),Ta(g.fa,c)),g.fa[G]<d&&(Ta(g.fa,g.fa[cd]+(d-g.fa[G])),Za(g.fa,d)))}d=e.top+5;e=e[Mc]-5;if(!(g.fa.top>=d&&g.fa[Mc]<=e)){c=hk(g);n=c.fa.top;c.fa.top=Cj(f.y,c.fa[Mc],-1);Ma(c.fa,Cj(f.y,n,-1));if(n=c.$j)p=n[0],n[0]=n[2],n[2]=p,
n[0].y=Cj(f.y,n[0].y,-1),n[1].y=Cj(f.y,n[1].y,-1),n[2].y=Cj(f.y,n[2].y,-1);c.fa.top>=d&&c.fa[Mc]<=e?(g.fa=c.fa,g.$j=c.$j):(g.fa[Mc]>e&&(g.fa.top-=g.fa[Mc]-e,Ma(g.fa,e)),g.fa.top<d&&(Ma(g.fa,g.fa[Mc]+(d-g.fa.top)),g.fa.top=d),delete g.$j)}f=k;e={};k=f/1.618;k=new Fl(g.fa.top+k,g.fa[cd]-k,g.fa[Mc]-k,g.fa[G]+k);d=[];var N=k.top,n=a[qA][J],M=!1;for(c=0;c<n;c++)if(a[qA][c].fK){M=!0;break}var R=[],p=[];for(c=0;c<n;c++)if(v=a[qA][c],v[H]===SG){var S=v[$],s=[];p[C](s);D=0;for(z=S[vy][J];D<z;D++){var V=DEa(S[vy][D],
b);s[C](V);v.fK&&(D>R[J]-1?R[C](V[r]):R[D]=h.max(R[D],V[r]))}}s=[];u=[];B=0;if(M)for(c=0;c<n;c++)if(v=a[qA][c],v[H]==SG){M=[];u[C](M);var ma=0;if(v.fK)for(S=v[$],D=0,z=S[vy][J];D<z;D++)V=p[B][D],v=R[D]-V[r],M[C](v),ma+=v;s[C](ma);B++}for(c=B=0;c<n;c++){v=a[qA][c];R={Gh:v,data:{}};switch(v[H]){case SG:S=v[$];M=R[$];ma=CEa(S,b);v.fK&&pa(ma,ma[r]+s[B]);0<c&&(N+=ma.Hv);S[pA]&&Bx(M,{fa:new Fl(N-ma.Hv/2,g.fa[cd],N+ma[A]+ma.Hv,g.fa[G])});for(var Ja=[],Ha=k[G],D=0,z=S[vy][J];D<z;D++){S={};V=p[B][D];v.fK&&
pa(V,V[r]+u[B][D]);0<D&&(Ha+=V.iT);var Va=N+(ma[A]-V[A])/2;S.fa=new Fl(h[E](Va),h[E](Ha+V[r]),h[E](Va+V[A]),h[E](Ha));l&&(Va=k[cd]-(S.fa[G]-k[G])-S.fa[G]-V[r],Za(S.fa,S.fa[G]+Va),Ta(S.fa,S.fa[cd]+Va));Ja[C](S);Ha+=V[r]}Fw(M,Ja);N+=ma[A];B++;break;case eJ:D=v[$],z=N+f+D.brush.Nb/2,R[$].line=new AL(g.fa[G],z,g.fa[cd],z),N+=1.5*f+D.brush.Nb/2}d[C](R)}e.entries=d;e.x$=!!l;return{outline:g,UI:e}}

    function CEa(a, b) {
        for (var c = 0, d = 0, e = 0, f = 0; f < a[vy][J]; f++)var g = DEa(a[vy][f], b), c = c + (g[r] + (0 < f ? g.iT : 0)), d = h.max(d, g[A]), e = h.max(e, g[A] / 2 + g.Hv);
        return {width: c, height: d, Hv: e - d / 2}
    }

    function DEa(a, b) {
        switch (a[H]) {
            case Us:
                var c = a[$][x];
                return {width: b ? b(String(a[$][id]), c)[r] : 0, height: c[yc], Hv: c[yc] / 3.236, iT: c[yc] / 3.236};
            case wJ:
                var d = c = a[$][Ry];
                return {width: c, height: c, Hv: d, iT: d};
            default:
                return d = c = a[$][Ry], {width: c, height: c, Hv: d, iT: d}
        }
    }

    function OP(a) {
        this.Qs = a;
        this.$s = da;
        this.rE = 0;
        a = new Vt(15);
        vt(this, a);
        Lt(a, Vs, X(this.q3, this));
        this.fd = a
    }

    Y(OP, ut);
    function PP(a, b) {
        var c = a.$s;
        a.$s = h.min(a.$s, b);
        Lj(a.$s) ? Lj(c) || a.fd[y]() : a.fd[Wq]()
    }

    OP[K].q3 = function () {
        var a = vi();
        this.$s -= a - this.rE;
        this.rE = a;
        0 >= this.$s && (this.Qs(), this.$s = da, this.fd[Wq]())
    };
    function QP(a, b, c, d, e, f) {
        var g = null != e ? e : 1;
        if (0 == g)return {I: [], te: !1, gh: 0};
        e = [];
        b = EEa(b, e, d, g, null != f ? f : !1, function (b) {
            return a(b, c)[r]
        });
        return {I: e, te: b.gt, gh: b.gh}
    }

    function EEa(a, b, c, d, e, f) {
        var g = f(a);
        if (g <= c)return a && ij(b, a[kc]()[rc](re)), {gt: !1, gh: g};
        if (1 < d) {
            for (var k = 0, l = 0, g = 1; g < a[J]; g++) {
                var n = a[Cb](g);
                if (n == se || n == re) {
                    var p = f(a[hc](0, g));
                    if (p <= c)if (l = p, k = g, n == re)break; else continue;
                    break
                }
            }
            if (0 < k)return b[C](a[hc](0, k)), b = EEa(a[hc](k + 1), b, c, d - 1, !1, f), {
                gt: b.gt,
                gh: h.max(l, b.gh)
            }
        }
        if (e && (d = f(a[hc](0, 1) + Ve), c < d)) {
            for (g = h.min(a[J], 5); 1 <= g; g--)if (d = f(a[hc](0, g)), d <= c)return b[C](a[hc](0, g)), {
                gt: !0,
                gh: d
            };
            return {gt: !0, gh: 0}
        }
        d = f(Ve);
        if (c < d) {
            for (g = 2; 1 <= g; g--)if (a =
                    f("..."[hc](0, g)), a <= c)return b[C]("..."[hc](0, g)), {gt: !0, gh: a};
            return {gt: !0, gh: 0}
        }
        for (g = a[J] - 1; 1 <= g; g--)if (e = a[hc](0, g) + Ve, l = f(e), l <= c)return b[C](e), {gt: !0, gh: l};
        b[C](Ve);
        return {gt: !0, gh: d}
    }

    function FEa(a) {
        var b = {background: Pva, padding: JB, border: cna};
        null != a[yc] && (Fa(b, a[yc] + U), b.margin = a[yc] + U);
        null != a.ab && fx(b, a.ab);
        return b
    }

    function RP() {
        this.So = this.w4 = null
    }

    function GEa(a) {
        var b = new RP;
        b.w4 = a;
        return b
    }

    function HEa(a) {
        var b = new RP;
        b.So = a;
        return b
    }

    function SP(a) {
        if (null != a.w4)return a.w4;
        throw m("AbstractRenderer not set");
    }

    RP[K].Ww = function () {
        if (null != this.So)return this.So;
        throw m("RaBl not set");
    };
    function TP(a, b) {
        this.Mg = a;
        this.Jb = null != b && gk(b) || {}
    }

    function UP(a) {
        return VP(new TP(OC), PC, a)
    }

    function WP(a, b) {
        var c = VP(new TP(lC), doa, a);
        null != b && VP(c, QC, b);
        return c
    }

    function XP(a, b) {
        return VP(VP(new TP(kC), PC, b), doa, a)
    }

    function YP(a) {
        a = vo(a);
        return new TP(a.Mg, a.Jb)
    }

    Ia(TP[K], function () {
        return YP(this.rg())
    });
    $a(TP[K], function (a) {
        if (!a || this.Mg != a.Mg)return !1;
        var b = ak(this.Jb);
        return b[J] !== ak(a.Jb)[J] ? !1 : Wi(Ti(b, X(function (b) {
            return this.Jb[b] === a.Jb[b]
        }, this)), zj)
    });
    function IEa(a) {
        var b = {}, c;
        for (c in a.Jb)b[c] = a.Jb[c];
        return b
    }

    function VP(a, b, c) {
        a.Jb[b] = c;
        return a
    }

    cb(TP[K], function () {
        return this.Mg
    });
    TP[K].rg = function () {
        return dn(this)
    };
    function JEa(a) {
        cb(this, a);
        qa(this, null)
    }

    function ZP(a, b) {
        oi(a) && (a = new JEa(a));
        this.rq = a;
        this.oq = [];
        b && this.oq[C](b)
    }

    function KEa() {
        this.Rs = [];
        this.Ss = [];
        this.yS = !1
    }

    function $P() {
        ww(this, new zO);
        this.Ci = this.Gn = this.rf = null
    }

    Ia($P[K], function () {
        var a = new $P;
        ww(a, this[Yx][Bc]());
        a.rf = this.rf ? this.rf[Bc]() : null;
        a.Gn = this.Gn ? this.Gn[Bc]() : null;
        a.Ci = this.Ci ? this.Ci[Bc]() : null;
        return a
    });
    $a($P[K], function (a) {
        return this[Yx][Mz](a[Yx]) && (this.rf ? this.rf[Mz](a.rf) : !a.rf) && (this.Gn ? this.Gn[Mz](a.Gn) : !a.Gn) && (this.Ci ? this.Ci[Mz](a.Ci) : !a.Ci)
    });
    function LEa(a) {
        this.o = null;
        this.gv = [];
        this.sv = a
    }

    W = LEa[K];
    W.cK = function (a) {
        if (this.o[Mz](a))return {yS: !1, Rs: [], Ss: []};
        var b = this.gv;
        a = this.Vk(a);
        return this.oK(a, b)
    };
    W.Vk = function (a) {
        if (null == this.sv)return [];
        var b = Ui(this.sv, function (b, d) {
            ij(b, d.Vk(a));
            return b
        }, [], this);
        this.gv = b;
        this.o = a[Bc]();
        return b
    };
    W.oK = function (a, b) {
        var c = this.Rv(a), d = this.Rv(b), e = c.im(d), c = d.im(c), d = new KEa;
        d.Rs = this.Sv(e);
        d.Ss = this.Sv(c);
        return d
    };
    W.Rv = function (a) {
        a = Ti(a, function (a) {
            return dn(a)
        });
        return new sk(a)
    };
    W.Sv = function (a) {
        a = a.Ua();
        return Ti(a, function (a) {
            a = vo(a);
            a.oq = Ti(a.oq, function (a) {
                return new TP(a.Mg, a.Jb)
            });
            return a
        })
    };
    function aQ(a, b) {
        this.Bpa = new sk(a);
        this.Cpa = new sk(b)
    }

    function bQ(a) {
        aQ[L](this, a, [lG, mG])
    }

    Y(bQ, aQ);
    bQ[K].lK = function (a, b, c) {
        if (b == lG) {
            if (!a[Mz](c.rf))return c.rf = a, !0
        } else if (null != c.rf)return c.rf = null, !0;
        return !1
    };
    bQ[K].Vk = function (a) {
        return null != a.rf ? [new ZP(Kg, a.rf)] : []
    };
    function MEa() {
    }

    function cQ(a, b, c, d, e) {
        this.iD = a;
        this.F = b;
        this.ke = GEa(b);
        this.Dr = c;
        this.zs = null;
        this.zy = NEa;
        this.ts = d;
        this.xS = e;
        this.No = null
    }

    Y(cQ, MEa);
    W = cQ[K];
    aq(W, function (a) {
        this.zs = {};
        var b = this.F;
        b[Yb]();
        this.No = this.iD.qv(a, this.Dr);
        a = this.No.ac();
        a = b.qm(a[r], a[A]);
        for (var c = 0; c < this.zy[J]; c++) {
            var d = this.zy[c], e = b.Ba();
            b[q](a, e);
            this.zs[d] = e
        }
        this.No[br](this);
        this.c1(a)
    });
    W.eK = function (a) {
        this.zy = a
    };
    Ew(W, function (a) {
        this.uL(a.Ss, !1);
        this.uL(a.Rs, !0);
        this.No[br](this)
    });
    W.uL = function (a, b) {
        for (var c = 0; c < a[J]; c++)for (var d = a[c], e = d.oq, f = 0; f < e[J]; f++)this.No.wn(e[f], d.rq, b)
    };
    W.c1 = function (a) {
        var b = this.F;
        b.hc(a, IE, yt);
        b.hc(a, Is, this.xS(X(this[nq], this, lG)));
        b.hc(a, Hs, this.xS(X(this[nq], this, mG)));
        b.hc(a, gs, this.xS(X(this[nq], this, gs)))
    };
    Hp(W, function (a, b) {
        b[yq] && b[yq]();
        var c = this.F.Uu(b[ar]);
        c != lg && (c = YP(c), this.ts(c, a))
    });
    W.jb = function () {
        return this.ke
    };
    W.De = function (a, b, c, d) {
        null != b ? this.u4(a, b) : this.oo(a, c, d)
    };
W.oo=function(a,b,c){this.F[q](this.zs[c],a);this.F.bo(a,b.rg())};W.u4=function(a,b){ol(b)[Bz](a,b);var c=this.F.Uu(b);this.F.bo(a,c)};W.Yf=function(a){this.F.Yf(a)};var NEa=[yD,UI,TI,bD,aD];function dQ(a){this.dz=a;this.o=null}dQ[K].Cc=function(a){this.o=a[Bc]()};dQ[K].qw=function(a){var b=this.o;a[Yx][Mz](b[Yx])||this[fq](Ps,null);null===a.Ci||a.Ci[Mz](b.Ci)||this[fq](Ps,null);var c=a.rf,d=b.rf,e=c;if(!c&&d||c&&!c[Mz](d)){var b=eI,f;if(!d)f=c.Jb.ROW_INDEX;else if(!c)b=dI,f=d.Jb.ROW_INDEX,e=d;else if(d[H]()!==c[H]()||d.Jb.ROW_INDEX!==c.Jb.ROW_INDEX)f=c.Jb.ROW_INDEX;c={row:f};e&&(e=e.Jb.DATE,null!=e&&(c.date=e));this[fq](b,c)}this.o=a[Bc]()};up(dQ[K],function(a,b){Ju(this.dz,a,b)});function eQ(a,b){this.o=null;this.sv=b;this.bb=new OP(a);vt(this,this.bb)}Y(eQ,ut);eQ[K].Cc=function(a){this.o=a};eQ[K].gJ=function(){return X(this[nq],this)};Hp(eQ[K],function(a,b){if(null!=this.sv){var c=!1;Z(this.sv,function(d){d.Bpa[Rc](a[H]())&&d.Cpa[Rc](b)&&(d=d.lK(a,b,this.o),c=c||d)},this);c&&PP(this.bb,50)}});function fQ(a,b,c,d,e,f){this.iD=a;Np(this,null);this.uK=null;a=this.iD.mz(e);this.rda=new LEa(a);e=f(X(this.li,this,!0));this.ts=new eQ(e,a);vt(this,this.ts);this.qda=this.iD.Ey(b,c,this.ts.gJ(),f);this.M2=new dQ(d)}Y(fQ,ut);aq(fQ[K],function(a,b){Np(this,b[Bc]());this.ts.Cc(this[Dq]);this.M2.Cc(this[Dq]);var c=this.rda.Vk(this[Dq]);this.qda[br](a,c);this.uK=this[Dq][Bc]();this.M2[fq](Ls,null)});fQ[K].li=function(a){var b=this.rda.cK(this[Dq]);this.qda.refresh(b);this.uK=this[Dq][Bc]();a&&this.M2.qw(this[Dq])};
Cw(fQ[K],function(a){this.li(!0);this[Dq][Yx][qy](a);this.li(!1)});xx(fQ[K],function(){if(null==this.uK.Ci)return this.uK[Yx][hA]();var a=this.uK.Ci,b={};null!=a.Jb.DATE&&(b.date=a.Jb.DATE);null!=a.Jb.ROW_INDEX&&(b.row=a.Jb.ROW_INDEX);return[b]});function gQ(a){Ru[L](this,a)}Y(gQ,Ru);gQ[K].mz=function(){return null};gQ[K].sh=function(){wt(this.Qd);this.Qd=null};Cw(gQ[K],function(a){this.Qd&&this.Qd[qy](a)});xx(gQ[K],function(){return this.Qd?this.Qd[hA]():[]});function hQ(a,b){var c=b?OEa:PEa,d=c[J];this.Mo=[];for(var e=1+h[t]((a-1)/d),f=h[yb](a/e),g=[],k=0;k<d;k++)c[k][1]<f&&g[C](c[k][0]);for(k=0;k<a;k++){var c=g[b?k%f:h[t](k/e)],l=h.pow(b?.7:.85,b?h[t](k/f):k%e);this.Mo[k]=Ti(c,function(a){return~~(l*a+255*(1-l))})}}
var PEa=[[[66,133,244],0],[[219,68,55],0],[[244,180,0],0],[[15,157,88],0],[[171,71,188],0],[[0,172,193],0],[[255,112,67],0],[[158,157,36],0],[[92,107,192],0],[[240,98,146],0],[[0,121,107],0],[[194,24,91],0]],OEa=[[[67,69,157],6],[[83,168,251],8],[[95,150,84],10],[[241,202,58],2],[[231,113,27],5],[[135,27,71],4],[[67,116,224],0],[[26,135,99],1],[[185,194,70],9],[[228,147,7],7],[[211,54,45],3]];hQ[K].ac=function(){return this.Mo[J]};hQ[K].Vd=function(a){return Oya+this.Mo[a]+Oe};
    function iQ(a, b) {
        function c(a) {
            a = a[kc](16);
            1 == a[J] && (a = Xe + a);
            return a
        }

        var d = a.Mo[b];
        return we + (c(d[0]) + c(d[1]) + c(d[2]))[ke]()
    }

    function QEa(a) {
        var b = [];
        b[C](Caa);
        REa(b, a, SEa);
        for (var c = a.M(), d = 0; d < c; ++d)REa(b, a, function (a, b, c) {
            var k = d;
            a[C]($B);
            b = Ei(b[I](k, c) + O);
            a[C](O + b);
            a[C](XB)
        });
        b[C](yaa);
        return b[me](O)
    }

    function REa(a, b, c) {
        a[C](kf);
        for (var d = b.H(), e = 0; e < d; ++e)b.mr(e) === O && c(a, b, e);
        a[C](Cna)
    }

    function SEa(a, b, c) {
        a[C](Tna);
        a[C](O + Ei(b.Ra(c) || b.Xe(c)));
        a[C](Bna)
    }

    function jQ(a) {
        Ru[L](this, a);
        this.Go = null
    }

    Y(jQ, gQ);
    W = jQ[K];
    W.Ey = function (a, b, c, d) {
        if (null == b)throw m("Internal error: missing overlayArea");
        a = SP(a);
        return new cQ(this, a, b, c, d)
    };
    W.mm = function (a, b, c) {
        st.mc(this.ra);
        c = new Bn([c || {}, this.nj() || {}]);
        var d = io(this.ra, c), e = jo(this.ra, c), d = new Pk(d, e), e = In(c, OF);
        this.ida(d, a, e);
        this.Go.Zq(X(this.yr, this, b, c, d, a), a)
    };
    W.ida = function (a, b, c) {
        null != this.Go ? this.Go[BA](a, b) : this.Go = new RL(this.ra, a, b, c)
    };
    W.yr = function (a, b, c, d) {
        var e = this.Go.jb(), f = this.Go.lA();
        c = this.Dq(a, b, X(e.Qf, e), c).Xh();
        wt(this.Qd);
        var g = e instanceof vL ? GEa(e) : HEa(e);
        this.Qd = new fQ(this, g, f, this, b, d);
        b = new $P;
        this.Qd[br](c, b);
        e.NF && (e = e.NF()) && a && Xa(e, QEa(a))
    };
    W.sh = function () {
        jQ.e.sh[L](this);
        wt(this.Go);
        this.Go = null
    };
    function kQ() {
        this.Mo = null;
        this.bL = new lk;
        this.sE = new lk
    }

    kQ[K].Mz = function (a, b) {
        this.bL.bf(a) || this.bL.set(a, this.bL.dc());
        null != b && !this.sE.bf(b) && this.sE.set(b, this.sE.dc())
    };
    kQ[K].fB = function (a, b) {
        null == this.Mo && (this.Mo = new hQ(this.bL.dc()));
        var c = iQ(this.Mo, this.bL.get(a));
        if (2 > this.sE.dc() || null == b)return c;
        var c = Hm(c), d = this.sE.get(b);
        return Fm(Lm(c, [255, 255, 255], 1 - d / this.sE.dc()))
    };
    function lQ(a, b, c) {
        this.Sm = a;
        this.xr = b[Bc]();
        this.Wl = c
    }

    function mQ() {
        this.Ys = new lk;
        this.vS = null;
        this.qba = !0
    }

    mQ[K].Lda = function () {
        return []
    };
    aq(mQ[K], function (a) {
        if (null == this.vS) {
            this.vS = new lk;
            var b = this.Lda(a);
            Z(b, X(this.Mda, this, a, this.vS))
        }
        var b = this.XK(a), c = new sk(this.Ys.Mk());
        Z(b, function (b) {
            var e = b.xr.rg();
            c[Qb](e);
            this.Mda(a, this.Ys, b)
        }, this);
        this.qba && Qj(c, function (b) {
            var c = this.Ys.get(b);
            a.Yf(c.Sm);
            this.Ys[Qb](b)
        }, this)
    });
    mQ[K].Mda = function (a, b, c) {
        var d = c.xr.rg(), e = b.get(d, null);
        e && e.V2 && a.Yf(e.V2);
        c.Wl[0] === $C ? (hm(e.Sm, !1), e.V2 = c.Sm, e.jra = c.Wl, a.oo(e.V2, e.xr, e.jra)) : e != c && (null === e || e.Wl !== c.Wl ? (null != e && a.Yf(e.Sm), a.oo(c.Sm, c.xr, c.Wl)) : a.De(c.Sm, e.Sm, c.xr, c.Wl), b.set(d, c))
    };
    function TEa(a, b) {
        UEa(b);
        return 0 == b[J] ? null === a ? 0 : a : Ui(b, function (a, b) {
            return a + b
        }, 0)
    }

    function VEa(a, b) {
        UEa(b);
        if (0 == b[J])return a;
        var c = Si(b, function (a) {
            return null != a
        });
        return 0 == c[J] ? null : TEa(a, c) / c[J]
    }

    function UEa(a) {
        Z(a, function () {
        })
    }

    function nQ(a) {
        this.Ti = qj({}, a);
        this.g4 = qj({}, a)
    }

    function oQ(a, b, c) {
        var d = a.Ti[J];
        for (a.Ti[b] = c; b < d; ++b)a.g4[b] = pQ(a, 0 == b ? {} : a.g4[b - 1], a.Ti[b])
    }

    function WEa(a) {
        var b = hi(a);
        return b != jh && b != rg || b == jh && ri(a[Bc]) || mi(a)
    }

    function pQ(a, b, c) {
        if (WEa(c) || WEa(b) || hi(c) == rg)return c;
        if (hi(b) == jh) {
            var d = gk(b);
            Sj(c, function (a, c) {
                d[c] = c in b && null != b[c] ? pQ(this, b[c], a) : a
            }, a)
        } else d = gj(b), Sj(c, function (a, c) {
            d[c] = pQ(this, b[c], a)
        }, a);
        return d
    }

    nQ[K].compact = function () {
        return Oi(this.g4)
    };
    function qQ(a, b) {
        this.ic = a;
        this.mi = b
    }

    Y(qQ, ut);
    var XEa = [];
    W = qQ[K];
    W.Yd = null;
    W.qd = null;
    W.bx = function (a) {
        this.ic = a
    };
    Dx(W, function () {
        return this.ic
    });
    Ap(W, function () {
        return this.mi
    });
    W.getParent = function () {
        return this.Yd
    };
    W.mG = function () {
        return !this.ng()
    };
    W.Xf = function () {
        return this.qd || XEa
    };
    W.wf = function (a) {
        return this.Xf()[a] || null
    };
    W.ng = function () {
        return this.Xf()[J]
    };
    bb(W, function () {
        var a = this.Xf();
        return Ui(a, function (a, c) {
                return h.max(a, c[Oz]())
            }, -1) + 1
    });
    function YEa(a) {
        var b = [];
        for (a = a[Rx](); a;)b[C](a), a = a[Rx]();
        return b
    }

    Pa(W, function (a) {
        do a = a[Rx](); while (a && a != this);
        return ja(a)
    });
    W.rK = function (a, b) {
        function c(d, e) {
            !1 !== a[L](b, d, e) && Z(d.Xf(), function (a) {
                c(a, e + 1)
            })
        }

        c(this, 0)
    };
    W.find = function (a, b) {
        var c = [];
        this.rK(function (d) {
            a[L](b, d) && c[C](d)
        });
        return c
    };
    W.vT = function (a, b, c, d) {
        for (var e = a[L](d, this), f = [], g = this.Xf(), k = 0; k < g[J]; k++) {
            var l = g[k].vT(a, b, c, d);
            f[C](l)
        }
        a = b[L](d, e, f);
        c && c[L](d, this, a);
        return a
    };
W.va=function(a){a.Yd=this;this.qd=this.qd||[];this.qd[C](a);vt(this,a)};function rQ(a,b,c){qQ[L](this,c,a);this.t=b}Y(rQ,qQ);W=rQ[K];W.Va=function(){return this.t};function ZEa(a){return a.Ea(0)||a[jq]()}W.Mr=function(a){return this.L1(this.t.Mr,a)};gb(W,function(a){return this.L1(this.t[I],a)});W.Ea=function(a){return this.L1(this.t.Ea,a)};W.L1=function(a,b){var c=this[rA]();return null!=c?(c=[c],ij(c,jj(arguments,1)),a[Sc](this.t,c)):null};function sQ(){this.Mp=[];this.Kx={}}Y(sQ,ut);W=sQ[K];W.aD=function(a){var b=a[rA]();null!=b&&(this.Kx[b]=a)};bb(W,function(){return Ui(this.Mp,function(a,b){return h.max(a,b[Oz]())},-1)});W.rK=function(a,b){for(var c=this.Mp,d=0;d<c[J];d++)c[d].rK(a,b)};W.find=function(a,b){for(var c=[],d=this.Mp,e=0;e<d[J];e++)ij(c,d[e].find(a,b));return c};W.vT=function(a,b,c,d){for(var e=this.Mp,f=0;f<e[J];f++)e[f].vT(a,b,c,d)};function tQ(a,b){sQ[L](this);if(2>a.H())throw m("Data table should have at least 2 columns");if(a.D(0)!=Eh)throw m("Column 0 must be of type string");if(a.D(1)!=Eh)throw m("Column 1 must be of type string");for(var c=this.Xq(b),d=c.r7,e=c.s7,c=c.t7,f={},g=[],k=0;k<a.M();k++){var l=a[I](k,0);if(l){var n=f[l];n?null==n[rA]()&&n.bx(k):(f[l]=n=new rQ(l,a,k),g[C](n));if(l=n[I](1)){var p=f[l];p||(f[l]=p=new rQ(l,a,null),g[C](p));if(n[Rx]()){if(e)throw m("More than one row with the same id ("+n[jq]()+").");
    } else if (n != p && !n[Rc](p)) p.va(n); else if (d)throw m("Data contains a cycle: " + $Ea(fj(p, YEa(p))) + Ue);
    }
    }
    }
        for (d = 0; d < g[J]; d++) {
            n = g[d];
            if (c && ii(n[rA]()))throw m('Failed to find row with id "' + n[jq]() + '".');
            n[Rx]() ? this.aD(n) : (e = n, this.Mp[C](e), vt(this, e), this.aD(e))
        }
    }

    Y(tQ, sQ);
    function $Ea(a) {
        return Ti(a, function (a) {
            return a[jq]()
        })[kc]()
    }

    tQ[K].Xq = function (a) {
        var b = new nQ(2);
        oQ(b, 0, {r7: !0, s7: !0, t7: !0});
        null != a && oQ(b, 1, a);
        return b[tz]()
    };
    function uQ(a, b, c) {
        sQ[L](this);
        a = a.Mp;
        for (var d = 0; d < a[J]; d++) {
            var e = aFa(this, a[d], b, c);
            this.Mp[C](e);
            vt(this, e);
            this.aD(e)
        }
    }

    Y(uQ, sQ);
    function aFa(a, b, c, d) {
        var e = c[L](d, b);
        b = b.Xf();
        for (var f = 0; f < b[J]; f++) {
            var g = aFa(a, b[f], c, d);
            a.aD(g);
            e.va(g)
        }
        return e
    }

    function vQ() {
        this.ik = [];
        this.Tb = [];
        this.jm = []
    }

    vQ[K].Fq = null;
    vQ[K].Ug = null;
    vQ[K].Yy = !0;
    var bFa = [2, 2, 6, 6, 0];
    W = vQ[K];
    va(W, function () {
        kb(this.ik, 0);
        kb(this.Tb, 0);
        kb(this.jm, 0);
        delete this.Fq;
        delete this.Ug;
        delete this.Yy;
        return this
    });
    W.moveTo = function (a, b) {
        0 == Oi(this.ik) ? kb(this.jm, this.jm[J] - 2) : (this.ik[C](0), this.Tb[C](1));
        this.jm[C](a, b);
        this.Ug = this.Fq = [a, b];
        return this
    };
    W.lineTo = function (a) {
        var b = Oi(this.ik);
        if (null == b)throw m("Path cannot start with lineTo");
        1 != b && (this.ik[C](1), this.Tb[C](0));
        for (b = 0; b < arguments[J]; b += 2) {
            var c = arguments[b], d = arguments[b + 1];
            this.jm[C](c, d)
        }
        this.Tb[this.Tb[J] - 1] += b / 2;
        this.Ug = [c, d];
        return this
    };
W.rfa=function(a){var b=Oi(this.ik);if(null==b)throw m("Path cannot start with curve");2!=b&&(this.ik[C](2),this.Tb[C](0));for(b=0;b<arguments[J];b+=6){var c=arguments[b+4],d=arguments[b+5];this.jm[C](arguments[b],arguments[b+1],arguments[b+2],arguments[b+3],c,d)}this.Tb[this.Tb[J]-1]+=b/6;this.Ug=[c,d];return this};Qw(W,function(){var a=Oi(this.ik);if(null==a)throw m("Path cannot start with close");4!=a&&(this.ik[C](4),this.Tb[C](1),this.Ug=this.Fq);return this});
W.arc=function(a,b,c,d,e,f,g){a+=Ej(e,c);b+=Fj(e,d);g?this.Ug&&a==this.Ug[0]&&b==this.Ug[1]||this[zz](a,b):this[py](a,b);return this.arcTo(c,d,e,f)};W.arcTo=function(a,b,c,d){var e=this.Ug[0]-Ej(c,a)+Ej(c+d,a),f=this.Ug[1]-Fj(c,b)+Fj(c+d,b);this.ik[C](3);this.Tb[C](1);this.jm[C](a,b,c,d,e,f);this.Yy=!1;this.Ug=[e,f];return this};
W.fva=function(a,b,c,d){var e=this.Ug[0]-Ej(c,a),f=this.Ug[1]-Fj(c,b),g=Dj(d);d=h[yb](h.abs(g)/h.PI*2);g/=d;c=Dj(c);for(var k=0;k<d;k++){var l=h.cos(c),n=h.sin(c),p=4/3*h.sin(g/2)/(1+h.cos(g/2)),s=e+(l-p*n)*a,u=f+(n+p*l)*b;c+=g;l=h.cos(c);n=h.sin(c);this.rfa(s,u,e+(l+p*n)*a,f+(n-p*l)*b,e+l*a,f+n*b)}return this};function wQ(a,b){for(var c=a.jm,d=0,e=0,f=a.ik[J];e<f;e++){var g=a.ik[e],k=bFa[g]*a.Tb[e];b(g,c[jd](d,d+k));d+=k}}
Ia(W,function(){var a=new this[uc];a.ik=this.ik[Bb]();a.Tb=this.Tb[Bb]();a.jm=this.jm[Bb]();a.Fq=this.Fq&&this.Fq[Bb]();a.Ug=this.Ug&&this.Ug[Bb]();a.Yy=this.Yy;return a});var xQ={};xQ[0]=vQ[K][py];xQ[1]=vQ[K][zz];xQ[4]=vQ[K][bz];xQ[2]=vQ[K].rfa;xQ[3]=vQ[K].fva;function cFa(a){if(a.Yy)return a[Bc]();var b=new vQ;wQ(a,function(a,d){xQ[a][Sc](b,d)});return b}
Kx(vQ[K],function(a){if(!this.Yy)throw m("Non-simple path");a[EA](this.jm,0,this.jm,0,this.jm[J]/2);this.Fq&&a[EA](this.Fq,0,this.Fq,0,1);this.Ug&&this.Fq!=this.Ug&&a[EA](this.Ug,0,this.Ug,0,1);return this});Ua(vQ[K],function(){return 0==this.ik[J]});function yQ(a,b,c,d,e){rM[L](this,e);pa(this,a);Sa(this,b);this.po=c||null;this.qH=d||null}Y(yQ,rM);W=yQ[K];W.bg=null;W.wu=0;W.lx=0;function zQ(a){return a.po?new Pk(a.po,a.qH):a.Kk()}W.ac=function(){return this.Kk()};W.Kk=function(){return this.Db?dm(this.a()):qi(this[r])&&qi(this[A])?new Pk(this[r],this[A]):null};function AQ(a){var b=a.Kk();return b?b[r]/zQ(a)[r]:0}W.Yf=function(a){kl(a.a())};W.oe=function(a,b,c,d,e,f){return this.pk(a,b,c,c,d,e,f)};
W.Sd=function(a,b,c,d,e,f,g,k,l,n,p){var s=k[Ry]/2;c=g==PD?c+e-s:g==iE?c+e/2:c+s;return this.Ii(a,b,c,b+d,c,f,k,l,n,p)};W.Bc=function(){return new vQ};function BQ(a,b,c,d,e,f){if(6==arguments[J])this.setTransform(a,b,c,d,e,f);else{if(0!=arguments[J])throw m("Insufficient matrix parameters");this.fk=this.hk=1;this.uj=this.gk=this.dk=this.ek=0}}W=BQ[K];Ia(W,function(){return new BQ(this.fk,this.uj,this.gk,this.hk,this.dk,this.ek)});W.setTransform=function(a,b,c,d,e,f){if(!(qi(a)&&qi(b)&&qi(c)&&qi(d)&&qi(e)&&qi(f)))throw m("Invalid transform parameters");this.fk=a;this.uj=b;this.gk=c;this.hk=d;this.dk=e;this.ek=f;return this};
W.NR=function(a){this.fk=a.fk;this.uj=a.uj;this.gk=a.gk;this.hk=a.hk;this.dk=a.dk;this.ek=a.ek;return this};Na(W,function(a,b){this.fk*=a;this.uj*=a;this.gk*=b;this.hk*=b;return this});eb(W,function(a,b){this.dk+=a*this.fk+b*this.gk;this.ek+=a*this.uj+b*this.hk;return this});
W.rotate=function(a,b,c){var d=new BQ,e=h.cos(a);a=h.sin(a);b=d.setTransform(e,a,-a,e,b-b*e+c*a,c-b*a-c*e);c=this.fk;d=this.gk;this.fk=b.fk*c+b.uj*d;this.gk=b.gk*c+b.hk*d;this.dk+=b.dk*c+b.ek*d;c=this.uj;d=this.hk;this.uj=b.fk*c+b.uj*d;this.hk=b.gk*c+b.hk*d;this.ek+=b.dk*c+b.ek*d;return this};Aa(W,function(){return Owa+[this.fk,this.uj,this.gk,this.hk,this.dk,this.ek][me]()+Oe});
Kx(W,function(a,b,c,d,e){var f=b;for(b+=2*e;f<b;){e=a[f++];var g=a[f++];c[d++]=e*this.fk+g*this.gk+this.dk;c[d++]=e*this.uj+g*this.hk+this.ek}});$a(W,function(a){return this==a?!0:a?this.fk==a.fk&&this.gk==a.gk&&this.dk==a.dk&&this.uj==a.uj&&this.hk==a.hk&&this.ek==a.ek:!1});function CQ(a,b){Tt[L](this);this.q=a;this.zd=b;this[Dt]=!1}Y(CQ,Tt);W=CQ[K];W.zd=null;W.q=null;W.Wy=null;W.a=function(){return this.q};W.iga=function(){return this.zd};W.addEventListener=function(a,b,c,d){Lt(this.q,a,b,c,d)};W.removeEventListener=function(a,b,c,d){Pt(this.q,a,b,c,d)};W.B=function(){CQ.e.B[L](this);Rt(this.q)};function DQ(a,b,c,d){CQ[L](this,a,b);this.hd(c);this.Oe(d)}Y(DQ,CQ);W=DQ[K];za(W,null);W.re=null;W.Oe=function(a){za(this,a);this.zd.W3(this,a)};W.cb=function(){return this[ic]};W.hd=function(a){this.re=a;this.zd.C3(this,a)};W.Kca=function(){return this.re};function EQ(a,b,c,d){DQ[L](this,a,b,c,d)}Y(EQ,DQ);function FQ(a,b){CQ[L](this,a,b)}Y(FQ,CQ);function GQ(a,b){CQ[L](this,a,b)}Y(GQ,CQ);function HQ(a,b,c,d){DQ[L](this,a,b,c,d)}Y(HQ,DQ);function IQ(a,b,c,d){DQ[L](this,a,b,c,d)}Y(IQ,DQ);function JQ(a,b,c,d){DQ[L](this,a,b,c,d)}Y(JQ,DQ);function KQ(a){CQ[L](this,null,a);this.qd=[]}Y(KQ,FQ);va(KQ[K],function(){this.qd[J]&&(kb(this.qd,0),this.zd.ih())});KQ[K].Ye=function(){};KQ[K].appendChild=function(a){this.qd[C](a)};aq(KQ[K],function(){for(var a=0,b=this.qd[J];a<b;a++)this.zd.De(this.qd[a])});function LQ(a,b,c,d,e,f,g,k){DQ[L](this,a,b,g,k);this.dfa=c;this.efa=d;this.L3=e;this.M3=f;this.$k=new vQ;MQ(this);this.N3=new NQ(null,b,this.$k,g,k)}Y(LQ,EQ);
function MQ(a){a.$k[Yb]();a.$k[py](a.dfa+Ej(0,a.L3),a.efa+Fj(0,a.M3));a.$k.arcTo(a.L3,a.M3,0,360);a.$k[bz]()}LQ[K].setCenter=function(a,b){this.dfa=a;this.efa=b;MQ(this);this.N3[gq](this.$k)};Bw(LQ[K],function(a,b){this.L3=a;this.M3=b;MQ(this);this.N3[gq](this.$k)});aq(LQ[K],function(a){this.N3[br](a)});function OQ(a,b,c,d,e,f,g,k){DQ[L](this,a,b,g,k);this.Pv=c;this.Qv=d;this.gz=e;this.fz=f}Y(OQ,IQ);Hx(OQ[K],function(a,b){this.Pv=a;this.Qv=b;this.Eq&&this.zd.ih()});OQ[K].Eq=!1;
OQ[K].Ye=function(a,b){this.gz=a;this.fz=b;this.Eq&&this.zd.ih()};aq(OQ[K],function(a){this.Eq=!0;a[Nz]();a[py](this.Pv,this.Qv);a[zz](this.Pv,this.Qv+this.fz);a[zz](this.Pv+this.gz,this.Qv+this.fz);a[zz](this.Pv+this.gz,this.Qv);a[vz]()});function NQ(a,b,c,d,e){DQ[L](this,a,b,d,e);this[gq](c)}Y(NQ,HQ);NQ[K].Eq=!1;vp(NQ[K],function(a){this.$k=a.Yy?a:cFa(a);this.Eq&&this.zd.ih()});
aq(NQ[K],function(a){this.Eq=!0;a[Nz]();wQ(this.$k,function(b,c){switch(b){case 0:a[py](c[0],c[1]);break;case 1:for(var d=0;d<c[J];d+=2)a[zz](c[d],c[d+1]);break;case 2:for(d=0;d<c[J];d+=6)a.bezierCurveTo(c[d],c[d+1],c[d+2],c[d+3],c[d+4],c[d+5]);break;case 3:throw m("Canvas paths cannot contain arcs");case 4:a[vz]()}})});
function PQ(a,b,c,d,e,f,g,k,l,n){var p=cl(vf,{style:sta});DQ[L](this,p,a,l,n);this.Ke=b;this.q$=c;this.Rla=d;this.r$=e;this.Sla=f;this.Pla=g||ah;this.Qla=k;this.pQ=cl(vf,{style:rta});c=this.q$;k=this.r$;d=this.Rla;e=this.Sla;l=this.Pla;f=this.Qla;b=this.a()[x];g=AQ(this.zd);n=this.zd;var s=n.Kk();n=s?s[A]/zQ(n)[A]:0;c==k?(b.lineHeight=ona,this.pQ[x].verticalAlign=l==iE?GH:l==ah?d<e?$J:PD:d<e?PD:$J,Ax(b,iE),k=f[Ry]*g,b.top=h[E](h.min(d,e)*n)+U,Za(b,h[E]((c-k/2)*g)+U),pa(b,h[E](k)+U),Sa(b,h.abs(d-e)*
n+U),Fa(b,.6*f[Ry]*n+Uxa)):(b.lineHeight=GB,this.pQ[x].verticalAlign=$J,Ax(b,l),b.top=h[E](((d+e)/2-2*f[Ry]/3)*n)+U,Za(b,h[E](c*g)+U),pa(b,h[E](h.abs(k-c)*g)+U),Sa(b,sg),Fa(b,f[Ry]*n+Uxa));sx(b,f[Id]?MD:XH);Cx(b,f.Tc?AG:XH);fx(b,f.family);c=this.cb();Ya(b,c.Vd()||c.J9());dFa(this);a.a()[q](p);p[q](this.pQ)}Y(PQ,JQ);PQ[K].Pr=function(a){this.Ke=a;dFa(this)};PQ[K].Oe=function(a){za(this,a);var b=this.a();b&&Ya(b[x],a.Vd()||a.J9())};PQ[K].hd=function(){};aq(PQ[K],function(){});
function dFa(a){Xa(a.pQ,a.q$==a.r$?Ti(a.Ke[rc](O),function(a){return Ei(a)})[me](jf):Ei(a.Ke))}function QQ(a,b,c,d,e,f,g){CQ[L](this,a,b);this.Pv=c;this.Qv=d;this.gz=e;this.fz=f;this.xsa=g}Y(QQ,GQ);W=QQ[K];W.Eq=!1;Hx(W,function(a,b){this.Pv=a;this.Qv=b;this.Eq&&this.zd.ih()});W.Ye=function(a,b){this.gz=a;this.fz=b;this.Eq&&this.zd.ih()};aq(W,function(a){this.Vda?(this.gz&&this.fz&&a.drawImage(this.Vda,this.Pv,this.Qv,this.gz,this.fz),this.Eq=!0):(a=new Image,tp(a,X(this.Esa,this,a)),a.src=this.xsa)});
    W.Esa = function (a) {
        this.Vda = a;
        this.zd.ih()
    };
    function eFa() {
    }

    function RQ(a, b) {
        this.Uk = a;
        this.ym = null == b ? 1 : b
    }

    Y(RQ, eFa);
    RQ[K].Vd = function () {
        return this.Uk
    };
    function SQ(a, b, c, d, e) {
        yQ[L](this, a, b, c, d, e)
    }

    Y(SQ, yQ);
    W = SQ[K];
    W.W3 = function () {
        this.ih()
    };
    W.C3 = function () {
        this.ih()
    };
    function fFa(a, b) {
        var c = a[Sz]();
        c[Wy]();
        var d = b.Wy ? b.Wy[Bc]() : new BQ, e = d.dk, f = d.ek;
        (e || f) && c[Tz](e, f);
        (d = d.uj) && c[Zy](h.asin(d))
    }

    W.j = function () {
        var a = this.U.j(P, {style: Oxa});
        this.q = a;
        this.oc = this.U.j(dE);
        a[q](this.oc);
        this.u_ = this.bg = new KQ(this);
        this.Zla = 0;
        TQ(this)
    };
    W.getContext = function () {
        this.a() || this.j();
        this.kl || (this.kl = this.oc[Sz](LB), this.kl[Wy]());
        return this.kl
    };
    W.Ye = function (a, b) {
        pa(this, a);
        Sa(this, b);
        TQ(this);
        this.ih()
    };
    W.Kk = function () {
        var a = this[r], b = this[A], c = oi(a) && -1 != a[qd](De), d = oi(b) && -1 != b[qd](De);
        if (!this.Db && (c || d))return null;
        var e, f;
        c && (e = this.a()[je], f = em(e), a = la(a) * f[r] / 100);
        d && (e = e || this.a()[je], f = f || em(e), b = la(b) * f[A] / 100);
        return new Pk(a, b)
    };
    function TQ(a) {
        $l(a.a(), a[r], a[A]);
        var b = a.Kk();
        b && ($l(a.oc, b[r], b[A]), pa(a.oc, b[r]), Sa(a.oc, b[A]), a.kl = null)
    }
Yw(W,function(){var a=this[Sz]();a[nz]();var b=this.Kk();b[r]&&b[A]&&a.clearRect(0,0,b[r],b[A]);a[Wy]()});va(W,function(){this.reset();this.bg[Yb]();for(var a=this.a();1<a[Zb][J];)a[Ud](a[Dc])});W.ih=function(){if(!this.Rwa&&this.Db){this.reset();if(this.po){var a=this.Kk();this[Sz]()[mz](a[r]/this.po,a[A]/this.qH)}(this.wu||this.lx)&&this[Sz]()[Tz](-this.wu,-this.lx);fFa(this,this.bg);this.bg[br](this.kl);this[Sz]()[nz]()}};
W.De=function(a){if(!(a instanceof PQ)){var b=this[Sz]();fFa(this,a);if(a.cb&&a.Kca){var c=a.cb();if(c)if(c instanceof RQ)0!=c.ym&&(b.globalAlpha=c.ym,Iw(b,c.Vd()),a[br](b),b[ic](),b.globalAlpha=1);else{var d=b.createLinearGradient(c.Jwa(),c.Lwa(),c.Kwa(),c.Mwa());d[wA](0,c.J9());d[wA](1,c.Iwa());Iw(b,d);a[br](b);b[ic]()}if(c=a.re)a[br](b),ix(b,c.Vd()),a=c.mb(),oi(a)&&-1!=a[qd](U)&&(a=la(a)/AQ(this)),ax(b,a),b[$b]()}else a[br](b);this[Sz]()[nz]()}};W.tn=function(a,b){this[DA](a,b)};
W.append=function(a,b){b=b||this.bg;b[q](a);!this.Db||this.Zla||b!=this.bg&&b!=this.u_||this.De(a)};W.pk=function(a,b,c,d,e,f,g){a=new LQ(null,this,a,b,c,d,e,f);this[DA](a,g);return a};W.hb=function(a,b,c,d,e,f,g){a=new OQ(null,this,a,b,c,d,e,f);this[DA](a,g);return a};W.drawImage=function(a,b,c,d,e,f){a=new QQ(null,this,a,b,c,d,e);this[DA](a,f);return a};W.Ii=function(a,b,c,d,e,f,g,k,l,n){a=new PQ(this,a,b,c,d,e,f,g,k,l);this[DA](a,n);return a};
W.sa=function(a,b,c,d){a=new NQ(null,this,a,b,c);this[DA](a,d);return a};W.Ba=function(a){var b=new KQ(this);a=a||this.bg;if(a==this.bg||a==this.u_)this.u_=b;this[DA](b,a);return b};W.B=function(){this.kl=null;SQ.e.B[L](this)};W.Fb=function(){var a=this.Kk();SQ.e.Fb[L](this);a||(TQ(this),this[fq](KI));this.ih()};function UQ(a,b){this.Q=a;this.Uk=b}UQ[K].mb=function(){return this.Q};UQ[K].Vd=function(){return this.Uk};function VQ(a,b){CQ[L](this,a,b)}Y(VQ,FQ);va(VQ[K],function(){hl(this.a())});VQ[K].Ye=function(a,b){WQ(this.a(),{width:a,height:b})};function XQ(a,b,c,d){DQ[L](this,a,b,c,d)}Y(XQ,EQ);XQ[K].setCenter=function(a,b){WQ(this.a(),{cx:a,cy:b})};Bw(XQ[K],function(a,b){WQ(this.a(),{rx:a,ry:b})});function YQ(a,b,c,d){DQ[L](this,a,b,c,d)}Y(YQ,IQ);Hx(YQ[K],function(a,b){WQ(this.a(),{x:a,y:b})});YQ[K].Ye=function(a,b){WQ(this.a(),{width:a,height:b})};function ZQ(a,b,c,d){DQ[L](this,a,b,c,d)}Y(ZQ,HQ);
vp(ZQ[K],function(a){WQ(this.a(),{d:gFa(a)})});function $Q(a,b,c,d){DQ[L](this,a,b,c,d)}Y($Q,JQ);$Q[K].Pr=function(a){qa(this.a()[Ub],a)};function aR(a,b){CQ[L](this,a,b)}Y(aR,GQ);Hx(aR[K],function(a,b){WQ(this.a(),{x:a,y:b})});aR[K].Ye=function(a,b){WQ(this.a(),{width:a,height:b})};function bR(a,b,c,d,e){yQ[L](this,a,b,c,d,e);this.Cp={};this.XW=Ek&&!Ik(526);this.he=new Vv(this)}var cR;Y(bR,yQ);W=bR[K];W.Za=function(a,b){var c=this.U.gc()[Ty](nG,a);b&&WQ(c,b);return c};function WQ(a,b){for(var c in b)a[w](c,b[c])}W.tn=function(a,b){(b||this.bg).a()[q](a.a())};W.W3=function(a,b){var c=a.a();if(b instanceof RQ)c[w](DF,b.Vd()),c[w](EF,b.ym);else c[w](DF,Q)};
W.C3=function(a,b){var c=a.a();if(b){c[w](GJ,b.Vd());var d=b.mb();oi(d)&&-1!=d[qd](U)?c[w](IJ,la(d)/AQ(this)):c[w](IJ,d)}else c[w](GJ,Q)};W.j=function(){var a=this.Za(KJ,{width:this[r],height:this[A],overflow:Sg}),b=this.Za(Ng);this.IX=this.Za(cF);this.bg=new VQ(b,this);a[q](this.IX);a[q](b);this.q=a;if(this.po||this.wu||this.lx)this.a()[w](Qxa,Q),this.XW?this.vN():this.a()[w](sK,this.wu+se+this.lx+se+(this.po?this.po+se+this.qH:O))};
W.vN=function(){if(this.Db&&(this.po||this.wu||!this.lx)){var a=this.Kk();if(0==a[r])ib(this.a()[x],Sg);else{ib(this.a()[x],O);var b=-this.wu,c=-this.lx,d=a[r]/this.po,a=a[A]/this.qH;this.bg.a()[w](Kh,Sya+d+se+a+bma+b+se+c+Oe)}}};W.Ye=function(a,b){$l(this.a(),a,b)};
W.Kk=function(){if(!Bk)return this.Db?dm(this.a()):bR.e.Kk[L](this);var a=this[r],b=this[A],c=oi(a)&&-1!=a[qd](De),d=oi(b)&&-1!=b[qd](De);if(!this.Db&&(c||d))return null;var e,f;c&&(e=this.a()[je],f=em(e),a=la(a)*f[r]/100);d&&(e=e||this.a()[je],f=f||em(e),b=la(b)*f[A]/100);return new Pk(a,b)};va(W,function(){this.bg[Yb]();hl(this.IX);this.Cp={}});W.pk=function(a,b,c,d,e,f,g){a=this.Za(oF,{cx:a,cy:b,rx:c,ry:d});e=new XQ(a,this,e,f);this.tn(e,g);return e};
W.hb=function(a,b,c,d,e,f,g){a=this.Za(EI,{x:a,y:b,width:c,height:d});e=new YQ(a,this,e,f);this.tn(e,g);return e};W.drawImage=function(a,b,c,d,e,f){a=this.Za(Jva,{x:a,y:b,width:c,height:d,"image-rendering":mxa,preserveAspectRatio:Q});a.setAttributeNS(Gva,Ug,e);e=new aR(a,this);this.tn(e,f);return e};
W.Ii=function(a,b,c,d,e,f,g,k,l,n){var p=h[E](Gj(b,c,d,e));d-=b;e-=c;e=h[E](h[zd](d*d+e*e));var s=g[Ry];d={"font-family":g.family,"font-size":s};var u=h[E](.85*s),s=h[E](c-s/2+u),u=b;f==iE?(u+=h[E](e/2),d[QJ]=GH):f==Os&&(u+=e,d[QJ]=sF);d.x=u;d.y=s;g[Id]&&(d[KF]=MD);g.Tc&&(d[JF]=AG);0!=p&&Kx(d,RI+p+se+b+se+c+Oe);b=this.Za(Us,d);b[q](this.U.gc()[Db](a));null==k&&Bk&&vk&&(a=JD,l instanceof RQ&&(a=l.Vd()),k=new UQ(1,a));l=new $Q(b,this,k,l);this.tn(l,n);return l};
W.sa=function(a,b,c,d){a=this.Za(nI,{d:gFa(a)});b=new ZQ(a,this,b,c);this.tn(b,d);return b};function gFa(a){var b=[];wQ(a,function(a,d){switch(a){case 0:b[C](Gf);ga[K][C][Sc](b,d);break;case 1:b[C](Ff);ga[K][C][Sc](b,d);break;case 2:b[C](jC);ga[K][C][Sc](b,d);break;case 3:var e=d[3];b[C](of,d[0],d[1],0,180<h.abs(e)?1:0,0<e?1:0,d[4],d[5]);break;case 4:b[C](hg)}});return b[me](se)}W.Ba=function(a){var b=this.Za(Ng);(a||this.bg).a()[q](b);return new VQ(b,this)};W.ml=function(){};
    W.Fb = function () {
        var a = this.Kk();
        bR.e.Fb[L](this);
        a || this[fq](KI);
        if (this.XW) {
            var a = this[r], b = this[A];
            typeof a == Eh && -1 != a[qd](De) && typeof b == Eh && -1 != b[qd](De) && this.he.m(hFa(), Vs, this.vN);
            this.vN()
        }
    };
    W.He = function () {
        bR.e.He[L](this);
        this.XW && this.he.vb(hFa(), Vs, this.vN)
    };
    W.B = function () {
        delete this.Cp;
        delete this.IX;
        delete this.bg;
        bR.e.B[L](this)
    };
    function hFa() {
        cR || (cR = new Vt(400), cR[y]());
        return cR
    }

    function dR() {
        return this.q = this.zd.U.a(this.ic) || this.q
    }

    function eR(a, b) {
        this.ic = a.id;
        CQ[L](this, a, b)
    }

    Y(eR, FQ);
    eR[K].a = dR;
    va(eR[K], function () {
        hl(this.a())
    });
    eR[K].Ye = function (a, b) {
        var c = this.a(), d = c[x];
        pa(d, fR(a) + U);
        Sa(d, fR(b) + U);
        Gx(c, fR(a) + se + fR(b));
        this.zd.bg != this && Ow(c, EB)
    };
    function gR(a, b, c, d, e, f, g, k) {
        this.ic = a.id;
        DQ[L](this, a, b, g, k);
        this.jC = c;
        this.kC = d;
        this.Gi = e;
        this.Hi = f
    }

    Y(gR, EQ);
    gR[K].a = dR;
    gR[K].setCenter = function (a, b) {
        this.jC = a;
        this.kC = b;
        hR(this.a(), a - this.Gi, b - this.Hi, 2 * this.Gi, 2 * this.Hi)
    };
    Bw(gR[K], function (a, b) {
        this.Gi = a;
        this.Hi = b;
        hR(this.a(), this.jC - a, this.kC - b, 2 * a, 2 * b)
    });
    function iR(a, b, c, d) {
        this.ic = a.id;
        DQ[L](this, a, b, c, d)
    }

    Y(iR, IQ);
    iR[K].a = dR;
    Hx(iR[K], function (a, b) {
        var c = this.a()[x];
        Za(c, jR(a));
        c.top = jR(b)
    });
    iR[K].Ye = function (a, b) {
        var c = this.a()[x];
        pa(c, fR(a) + U);
        Sa(c, fR(b) + U)
    };
    function kR(a, b, c, d) {
        this.ic = a.id;
        DQ[L](this, a, b, c, d)
    }

    Y(kR, HQ);
    kR[K].a = dR;
    vp(kR[K], function (a) {
        lR(this.a(), nI, iFa(a))
    });
    function mR(a, b, c, d) {
        this.ic = a.id;
        DQ[L](this, a, b, c, d)
    }

    Y(mR, JQ);
    mR[K].a = dR;
mR[K].Pr=function(a){lR(this.a()[Zb][1],Eh,a)};function nR(a,b){this.ic=a.id;CQ[L](this,a,b)}Y(nR,GQ);nR[K].a=dR;Hx(nR[K],function(a,b){var c=this.a()[x];Za(c,jR(a));c.top=jR(b)});nR[K].Ye=function(a,b){var c=this.a()[x];pa(c,jR(a));Sa(c,jR(b))};function oR(a,b,c,d,e){yQ[L](this,a,b,c,d,e);this.he=new Vv(this)}Y(oR,yQ);var pR=ea[fe]&&8<=ea[fe];function jFa(a){return oi(a)&&lda(a)?a:la(a[kc]())+U}function qR(a){return h[E](100*(la(a[kc]())-.5))}function jR(a){return qR(a)+U}function fR(a){return h[E](100*la(a[kc]()))}function lR(a,b,c){pR?a[b]=c:a[w](b,c)}function rR(a,b){var c=a.U[Sb](Fua+b);c.id=Iua+zda++;return c}function sR(a){pR&&a.Db&&Xa(a.a(),a.a()[nd])}oR[K].tn=function(a,b){(b||this.bg).a()[q](a.a());sR(this)};
oR[K].W3=function(a,b){var c=a.a();yw(c,O);for(var d=0;d<c[Zb][J];d++){var e=c[Zb][d];e[Tc]==DF&&c[Ud](e)}b instanceof RQ?b.Vd()==Lh?tw(c,!1):1!=b.ym?(tw(c,!0),d=rR(this,DF),nb(d,h[E](100*b.ym)+De),Ya(d,b.Vd()),c[q](d)):(tw(c,!0),yw(c,b.Vd())):tw(c,!1);sR(this)};oR[K].C3=function(a,b){var c=a.a();if(b){xw(c,!0);var d=b.mb(),d=oi(d)&&-1==d[qd](U)?la(d):d*AQ(this),e=c[fc](GJ)[0];1>d?(e=e||rR(this,GJ),nb(e,d),uw(e,JB),Ya(e,b.Vd()),c[q](e)):(e&&c[Ud](e),kx(c,b.Vd()),Hw(c,d+U))}else xw(c,!1);sR(this)};
function hR(a,b,c,d,e){var f=a[x];Ba(f,pg);Za(f,jR(b));f.top=jR(c);pa(f,fR(d)+U);Sa(f,fR(e)+U);a[Tc]==oJ&&Gx(a,fR(d)+se+fR(e))}function tR(a,b){var c=rR(a,b),d=zQ(a);hR(c,0,0,d[r],d[A]);return c}try{eval("document.namespaces")}catch(kFa){}W=oR[K];
W.j=function(){var a=this.U.gc();a.namespaces.g_vml_||(pR?a.namespaces.add(Eua,iK,Lla):a.namespaces.add(Eua,iK),ab(a.createStyleSheet(),Gua));var a=this[r],b=this[A],c=this.U.j(P,{style:sxa+jFa(a)+tna+jFa(b)});this.q=c;var d=rR(this,aG),e=d[x];Ba(e,pg);Za(e,e.top=0);pa(e,this[r]);Sa(e,this[A]);Gx(d,this.po?fR(this.po)+se+fR(this.qH):fR(a)+se+fR(b));Ow(d,ci(this.wu)?fR(this.wu)+se+fR(this.lx):EB);c[q](d);this.bg=new eR(d,this);Lt(c,KI,X(this.rW,this))};
W.rW=function(){var a=dm(this.a()),b=this.bg.a()[x];if(a[r])pa(b,a[r]+U),Sa(b,a[A]+U);else{for(a=this.a();a&&a[de]&&a[de][Xc]!=Q;)a=a[je];a&&a[de]&&this.he.m(a,Txa,this.rW)}this[fq](KI)};W.Ye=function(a,b){$l(this.a(),a,b)};W.Kk=function(){var a=this.a();return new Pk(a[x].pixelWidth||a[Ab]||1,a[x].pixelHeight||a[Zc]||1)};va(W,function(){this.bg[Yb]()});W.pk=function(a,b,c,d,e,f,g){var k=rR(this,qxa);hR(k,a-c,b-d,2*c,2*d);a=new gR(k,this,a,b,c,d,e,f);this.tn(a,g);return a};
W.hb=function(a,b,c,d,e,f,g){var k=rR(this,EI);hR(k,a,b,c,d);a=new iR(k,this,e,f);this.tn(a,g);return a};W.drawImage=function(a,b,c,d,e,f){var g=rR(this,Jva);hR(g,a,b,c,d);lR(g,xJ,e);a=new nR(g,this);this.tn(a,f);return a};
W.Ii=function(a,b,c,d,e,f,g,k,l,n){var p=tR(this,oJ),s=rR(this,nI);b=Gf+qR(b)+Re+qR(c)+Ff+qR(d)+Re+qR(e)+zf;lR(s,Ph,b);lR(s,SJ,Mh);b=rR(this,xAa);b[w](kh,Mh);c=b[x];Fa(c,g[Ry]*AQ(this));fx(c,g.family);null!=f&&(c[kK]=f);g[Id]&&sx(c,MD);g.Tc&&Cx(c,AG);lR(b,Eh,a);p[q](s);p[q](b);a=new mR(p,this,k,l);this.tn(a,n);return a};W.sa=function(a,b,c,d){var e=tR(this,oJ);lR(e,nI,iFa(a));a=new kR(e,this,b,c);this.tn(a,d);return a};
function iFa(a){var b=[];wQ(a,function(a,d){switch(a){case 0:b[C](dh);ga[K][C][Sc](b,Ti(d,fR));break;case 1:b[C](EG);ga[K][C][Sc](b,Ti(d,fR));break;case 2:b[C](yg);ga[K][C][Sc](b,Ti(d,fR));break;case 4:b[C](AK);break;case 3:var e=d[2]+d[3],f=fR(d[4]-Ej(e,d[0])),e=fR(d[5]-Fj(e,d[1])),g=fR(d[0]),k=fR(d[1]),l=h[E](-65536*d[2]),n=h[E](-65536*d[3]);b[C](Aqa,f,e,g,k,l,n)}});return b[me](se)}W.Ba=function(a){var b=tR(this,aG);(a||this.bg).a()[q](b);return new eR(b,this)};W.ml=function(){return 0};
W.Fb=function(){oR.e.Fb[L](this);this.rW();sR(this)};W.B=function(){this.bg=null;oR.e.B[L](this)};function uR(a,b,c,d,e){rM[L](this,d);this.Le=new du(e||Vma);this.dI=O;this.Od=[];this.xA=[];this.aQ=[];this.xu=[];this.Ala=[];this.Dla=[];this.II=[];this.VZ={};this.Bla={};this.bQ={};this.Cla={};this.wv(a);this.Ye(b,c);this.Ga=vR(this)?0:da}Y(uR,rM);W=uR[K];W.C7=2048;W.Tla=0;W.Ula=0;W.ob=-da;W.Uf=null;W.uY=null;W.j=function(){var a=this.ac();this.q=this.ia().j(xs,{src:wR(this),"class":oqa,width:a[0],height:a[1]})};W.Ef=function(a){a.src=wR(this);this.q=a};
function wR(a){var b;a.dI!=O?b=xR(a,a.dI):(b=xR(a,nF))||(b=xR(a,xh));b||a[fq](new lFa(a.Le[kc]()));return a.Le}function mFa(a,b){var c=[];Z(b,function(a){a.area=a.area||xra;a.rq=a.rq||xh;c[C]([a.area,a.rq,a[F]][me]())});c=c[me](et);a.Yc(ksa,c)}W.wv=function(a){this.Le.Yc(xE,a)};W.bc=function(){return mu(this.Le,xE)};W.Ye=function(a,b){var c=[a||300,b||150][me](AK);this.Le.Yc(wE,c)};W.ac=function(){return mu(this.Le,wE)[rc](AK)};W.ZO=function(a){this.Ga=a};W.YO=function(a){this.ob=a};
function yR(a,b){a.xu=b;a.Le.Yc(lsa,a.xu[me](et))}function zR(a){a=a.bc();return a==VD||a==HD||a==ID||a==ZD||a==$D}function vR(a){a=a.bc();return a==mI||a==vxa||a==Axa}function nFa(a){a=a.bc();return a==VD||a==HD||a==ID}function oFa(a){a=a.bc();return a==VD||a==ID||a==$D}W.Yc=function(a,b){this.Le.Yc(a,b)};W.u3=function(a){this.Le.u3(a)};W.setTitle=function(a){this.Uf=a;this.Le.Yc(nsa,this.Uf[wb](/\n/g,et))};function AR(a,b){a.II[C](b);a.Le.Yc(psa,a.II[me](Re));return a.II[J]-1}
function BR(a,b,c){a.VZ[b]=c;b=pFa(a,a.VZ,qna,et);a.Le.Yc(osa,b)}function CR(a,b,c,d){var e;e=da;for(var f=0,g=b[J];f<g;++f){var k=b[f];null!=k&&k<e&&(e=k)}e<a.Ga&&(a.Ga=e);e=-da;f=0;for(g=b[J];f<g;++f)k=b[f],null!=k&&k>e&&(e=k);e>a.ob&&(a.ob=e);if(ci(d)){if(a.aQ[J]<a.Od[J])throw m("Cannot start adding legends text after first element.");a.aQ[C](d);a.Le.Yc(isa,a.aQ[me](et))}a.Od[C](b);a.xA[C](c);a.Le.Yc(tE,a.xA[me](Re))}W.getData=function(a){return ci(a)?this.Od[a]:this.Od};
function xR(a,b){for(var c=[],d=0,e=a.Od[J];d<e;++d){var f=c,g=d,k;k=a;for(var l=a.Od[d],n=a.Ga,p=a.ob,s=b,u=[],v=0,z=l[J];v<z;++v)u[C](qFa(l[v],n,p,s));k=u[me](k.dI==MJ?Re:O);f[g]=k}c=c[me](b==MJ?et:Re);c=null==a.uY?yda(b,ef,c):yda(b,a.uY,ef,c);a.Le.Yc(hsa,c);return a.Le[kc]()[J]<a.C7}function pFa(a,b,c,d){var e=[],f=0;for(a=a.II[J];f<a;++f)b[f]&&e[C](f+c+b[f][me](d));return e[me](et)}var rFa=h.pow(64,2)-1;
function qFa(a,b,c,d){var e=d==nF;if(null===a||!ci(a)||fa(a)||a<b||a>c)return e?Upa:$C;if(d==MJ)return String(a);d=.5;c>b&&(d=(a-b)/(c-b));if(e)return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-."[Cb](h[t](d*rFa/64))+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-."[Cb](h[t](d*rFa%64));a=h[E](61*d);return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"[Cb](a)}
uR[K].B=function(){uR.e.B[L](this);delete this.xu;delete this.Ala;delete this.Dla;delete this.Tla;delete this.Ula;delete this.xA;delete this.aQ;delete this.Od;this.Le=null;delete this.Ga;delete this.ob;this.Uf=null;delete this.II;delete this.VZ;delete this.Bla;delete this.bQ;delete this.Cla};function lFa(a){xt[L](this,lBa);this.uri=a}Y(lFa,xt);function DR(a,b,c){this.Mg=a;this.uoa=b;this.Me={};this.Dra=!1;this.Zo=null;this.voa=c;a===nI&&(za(this.Me,Q),xa(this.Me,QA),this.Zo=new XL.fe.wW(this.Me))}W=DR[K];Yw(W,function(){this.Dra&&(this.Me=ca.getPrototypeOf(this.Me))});W.Sm=function(){if(null==this.Zo){var a=sFa[this.Mg];if(!a)throw m("No draw routine for "+this.Mg+Ue);this.Zo=a[L](null,this.Me)}return this.Zo};W.Sea=function(){return this.Me};function ER(a,b){a.Me.x=b;return a}function FR(a,b){a.Me.y=b;return a}
W.yg=function(a){pa(this.Me,a);return this};W.Yj=function(a){Sa(this.Me,a);return this};W.Pr=function(a){cx(this.Me,a);return this};Bw(W,function(a){lx(this.Me,a);return this});function GR(a,b,c,d){var e=d||{};Fn(b,c,null,function(b){var c=Vn(b[ic]||e[ic])||Q;a.Oe(c);c=Qn(b.fillOpacity);null!=c&&a.Ch(c);c=Vn(b[$b]||e[$b]);null!=c&&a.hd(c);b=On(b.strokeWidth);null!=b&&a.mk(b);return null})}W.hd=function(a){xa(this.Me,a);this.Zo&&this.Zo[x](GJ,a);return this};
W.mk=function(a){this.Me.strokeWidth=a;this.Zo&&this.Zo[x](pAa,a);return this};W.Oe=function(a){za(this.Me,a);return this};W.Ch=function(a){this.Me.fillOpacity=a;return this};hx(W,function(a,b){this.Zo[Hz](a,b);return this});W.da=function(a,b){this.Zo.line(a,b);return this};W.xf=function(a,b,c,d,e,f,g){this.Zo.arc(a,b,c,d,e,f,g);return this};function tFa(a,b){fx(a.Me,b);return a}function HR(a,b){Fa(a.Me,b);return a}function uFa(a,b){var c=a.Me.corners={};c.rx=b;c.ry=b}
function vFa(a,b){a.Me.halign=b;return a}function wFa(a,b){a.Me.valign=b;return a}var sFa={circle:function(a){return new XL.fe[oA](a[Lz],a.x,a.y,{fill:a[ic]})},line:function(a){return new XL.fe.lu(a.x,a.y,a.Hb,a.Lb,a)},rect:function(a){return new XL.fe[Gz](a.x,a.y,a[r],a[A],a)},text:function(a){return new XL.fe[wz](a.x,a.y,a[id],a)}};function IR(a){this.mg=[];this.ja=a;this.k3=0}IR[K].ac=function(){return this.ja};IR[K].LW=function(){return this.mg};IR[K].da=function(a,b,c,d,e,f){a=FR(ER(new DR(SG,a||JR(this),b||yD),c),d);a.Me.x2=e;a.Me.y2=f;this.mg[C](a);return a};function KR(a,b,c,d,e,f,g){b=FR(ER(new DR(EI,b||JR(a),c||yD),d),e).yg(f).Yj(g);a.mg[C](b);return b}IR[K].bu=function(a,b,c,d,e,f){a=FR(ER((new DR(Us,a||JR(this),b||yD)).Pr(c),d),e).yg(f);this.mg[C](a);return a};
    function JR(a) {
        var b = new TP(hC);
        VP(b, QC, Xpa + a.k3);
        a.k3 += 1;
        return b
    }

    function LR(a, b) {
        var c = ga[K][jd][L](arguments), d = c[sb]();
        if ("undefined" == typeof d)throw m("[goog.string.format] Template required");
        return d[wb](/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function (a, b, d, k, l, n, p, s) {
            if (n == De)return De;
            var u = c[sb]();
            if ("undefined" == typeof u)throw m("[goog.string.format] Not enough arguments");
            arguments[0] = u;
            return MR[n][Sc](null, arguments)
        })
    }

    var MR = {
        s: function (a, b, c) {
            return fa(c) || c == O || a[J] >= c ? a : a = -1 < b[qd](Te, 0) ? a + Hi(se, c - a[J]) : Hi(se, c - a[J]) + a
        }, f: function (a, b, c, d, e) {
            d = a[kc]();
            fa(e) || e == O || (d = a[xb](e));
            var f;
            f = 0 > a ? Te : 0 <= b[qd](Qe) ? Qe : 0 <= b[qd](se) ? se : O;
            0 <= a && (d = f + d);
            if (fa(c) || d[J] >= c)return d;
            d = fa(e) ? h.abs(a)[kc]() : h.abs(a)[xb](e);
            a = c - d[J] - f[J];
            0 <= b[qd](Te, 0) ? d = f + d + Hi(se, a) : (b = 0 <= b[qd](Xe, 0) ? Xe : se, d = f + Hi(b, a) + d);
            return d
        }, d: function (a, b, c, d, e, f, g, k) {
            return MR.f(ka(a, 10), b, c, d, 0, f, g, k)
        }
    };
    MR.i = MR.d;
    MR.u = MR.d;
    function NR(a, b) {
        var c;
        c = bi[xc][Nc];
        c = Ai(c) || (sm(c)[1] || null) != vs ? Wg : vs;
        return LR(Wla, c, a, b)
    }

    function xFa(a, b) {
        if (a) {
            if (b[J] != a[J])throw m("colorsScale and valuesScale must be of the same length");
        } else if (1 != b[J])throw m("colorsScale must contain exactly one element when no valueScale is provided");
        this.Wk = a;
        this.lv = Ti(b, function (a) {
            return Cm(a).od
        })
    }

    var yFa = [fB, TA], zFa = [eB, fB, TA];

    function OR(a, b) {
        if (!a.Wk)return a.lv[0];
        if (b >= a.Wk[a.Wk[J] - 1])return a.lv[a.lv[J] - 1];
        if (b <= a.Wk[0])return a.lv[0];
        var c = kj(a.Wk, b);
        if (0 <= c)return a.lv[c];
        var d = -c - 2, c = -c - 1;
        return Xm(a.lv[c], a.lv[d], (b - a.Wk[d]) / (a.Wk[c] - a.Wk[d]))
    }
function AFa(a,b){b&&0!=b[J]?1==b[J]&&(b=[yFa[0],b[0]]):b=a&&3==a[J]?zFa:yFa;if(!a||2>a[J])return{values:null,e3:[Oi(b)]};var c=a[0],d=a[a[J]-1],e=d-c;if(0==e)return{values:[d],e3:[Oi(b)]};if(2==a[J])for(a=[],d=e/(b[J]-1),e=0;e<b[J];e++)a[C](c+d*e);return{values:a,e3:b}}
function BFa(a,b){var c=null,d=a.S(Fsa);if(d&&0<d[J]){1==d[J]&&(d=[d[0],d[0]]);b&&(null==d[0]&&(d[0]=b[y]),null==d[d[J]-1]&&(d[d[J]-1]=b.end));if(null==d[0])throw m(Gsa);for(c=1;c<d[J];c++){if(null==d[c])throw m(Gsa);if(d[c]<d[c-1])throw m("colorAxis.values must be a monotonically increasing series");}c=d}else{var d=Nn(a,Esa),e=Nn(a,Dsa);if(null!=d&&null!=e&&d>e)throw m("colorAxis.minValue ("+d+") must be at most colorAxis.maxValue ("+e+Oe);(d=Yea(b,d,e))&&(c=[d[y],d.end])}d=a.S(HE);d=a.S(zsa,d);
    c = AFa(c, d);
    return new xFa(c[my], c.e3)
}

    function PR(a, b) {
        var c = a[Py], c = Xea(Sk(b), c);
        b[q](c);
        a.Fea && Xa(c, a[Py][zb]);
        var d, e = a[sA], f = a.Gea;
        d = a.Eea;
        var g = a.$A, k = a[yz], l = new Pk(c[Kd], c[$d]), n = e.y + (g + l[A] / 2) * Hj(e.y - f.y),
            e = Aj(e.x + (g + l[r] / 2) * Hj(e.x - f.x) - l[r] / 2, d[G] + k, d[cd] - k - l[r]);
        d = Aj(n - l[A] / 2, d.top + k, d[Mc] - k - l[A]);
        d = new Kk(e, d);
        pa(c[x], c[Kd] + 1 + U);
        Sa(c[x], c[$d] + U);
        Za(c[x], d.x + U);
        c[x].top = d.y + U;
        return c
    }

    function QR(a, b, c) {
        var d = b.Ba(), e = a.outline, f = new pL,
            g = new Fl(e.fa.top + .5, e.fa[cd] + .5, e.fa[Mc] + .5, e.fa[G] + .5), k = e.$j;
        f[Hz](g[G] + 1, g[Mc]);
        f.xf(g[G] + 1, g[Mc] - 1, 1, 1, 180, 270, !0);
        f.da(g[G], g.top + 1);
        f.xf(g[G] + 1, g.top + 1, 1, 1, 270, 0, !0);
        if (null != k && k[0].y == e.fa.top)for (var l = 0; 3 > l; ++l)f.da(k[l].x + .5, k[l].y + .5);
        f.da(g[cd] - 1, g.top);
        f.xf(g[cd] - 1, g.top + 1, 1, 1, 0, 90, !0);
        f.da(g[cd], g[Mc] - 1);
        f.xf(g[cd] - 1, g[Mc] - 1, 1, 1, 90, 180, !0);
        if (null != k && k[0].y == e.fa[Mc])for (l = 0; 3 > l; ++l)f.da(k[l].x + .5, k[l].y + .5);
        f[bz]();
        e = [new bn({
            fill: Uh,
            stroke: iB, ua: 1
        }), new bn({fill: iB, ua: 0, Ce: .6}), new bn({fill: iB, ua: 0, Ce: .4})];
        for (g = e[J] - 1; 0 <= g; --g)k = b.sa(f, e[g], d), b.Em(k, g, g);
        a = a.UI;
        for (f = 0; f < a[qA][J]; f++)switch (k = a[qA][f], g = k.Gh, e = b.Ba(), b[q](d, e), g[H]) {
            case SG:
                g = g[$];
                k = k[$];
                k[pA] && b.hb(k[pA].fa[G], k[pA].fa.top, k[pA].fa[cd] - k[pA].fa[G], k[pA].fa[Mc] - k[pA].fa.top, g[pA].brush, e);
                for (l = 0; l < k[vy][J]; l++) {
                    var n = g[vy][l], p = k[vy][l];
                    switch (n[H]) {
                        case Us:
                            b.Sd(n[$][id], a.x$ ? p.fa[cd] : p.fa[G], p.fa.top, 1, AJ, AJ, n[$][x], e, a.x$);
                            break;
                        case wJ:
                            b.hb(p.fa[G], p.fa.top,
                                p.fa[cd] - p.fa[G], p.fa[Mc] - p.fa.top, n[$].brush, e)
                    }
                }
                null != g.id && (g = JP([hD, g.id]), b.bo(e, g));
                break;
            case eJ:
                g = g[$], k = k[$], l = new pL, l[Hz](k.line.x0, k.line.y0), l.da(k.line.x1, k.line.y1), b.sa(l, g.brush, e)
        }
        b[q](c, d);
        return d
    }

    function RR(a, b) {
        this.x = a || 0;
        this.y = b || 0
    }

    Ia(RR[K], function () {
        return new RR(this.x, this.y)
    });
    function SR(a) {
        var b = Ti(a.I, function (b) {
            var d = a[sA] ? a[sA] : {x: 0, y: 0}, e = tL(b.x + d.x, b[J], a.Kc);
            b = tL(b.y + d.y, a.ba[yc], a.Jc);
            return e[y] == e.end || b[y] == b.end ? null : new Fl(b[y], e.end, b.end, e[y])
        }), b = Si(b, ji);
        return Zm(b)
    }

    function CFa(a, b) {
        return h.abs(a - b)
    }

    function DFa(a, b, c) {
        if (!a || !b)return !0;
        var d = c || CFa;
        return Xj(a, function (a, c) {
            var g = b[c];
            return !ci(b[c]) || .05 >= d(a, g)
        })
    }

    function EFa(a, b, c) {
        if (0 == a.x || 0 == b.x)return {x: 0, y: (0 == a.x && 0 == b.x ? 0 : 0 == a.x ? a.y : b.y) * c / 6};
        c = c / 3 * h.min(h.abs(a.x), h.abs(b.x));
        b = (a.y / a.x + b.y / b.x) / 2;
        return 0 < a.x ? {x: c, y: c * b} : {x: -c, y: -c * b}
    }

    function FFa(a, b, c) {
        var d = a.lga(), e = b.lga();
        if (0 == d || 0 == e)return new CL(0, 0);
        d = h[zd](d / e);
        a = DL(a[Bc]()[mz](1 / d), b[Bc]()[mz](d));
        a[mz](c / 6);
        return a
    }

    function TR(a, b, c, d, e) {
        c = c ? EFa : FFa;
        for (var f = [], g = 0; g < a[J]; ++g) {
            var k, l;
            e ? (k = GFa(a, g, 1, d), l = GFa(a, g, -1, d)) : (k = d ? (g + 1) % a[J] : g + 1, l = d ? (a[J] + g - 1) % a[J] : g - 1);
            null != k && null != l && null != a[g] && null != a[l] && null != a[k] ? (k = c(EL(a[g], a[l]), EL(a[k], a[g]), b), f[C]([EL(a[g], k), DL(a[g], k)])) : null != a[g] ? f[C]([a[g][Bc](), a[g][Bc]()]) : f[C](null)
        }
        return f
    }

    function GFa(a, b, c, d) {
        var e = b + c;
        for (d && (e = (e + a[J]) % a[J]); e != b && 0 <= e && e < a[J];) {
            if (null != a[e])return e;
            e += c;
            d && (e = (e + a[J]) % a[J])
        }
        return null
    }
function UR(a,b,c){c=c||0;var d=Yi(b,function(b){return b[c]>a});return-1==d?b[J]-1:0==d?0:b[d][c]-a<a-b[d-1][c]?d:d-1}function HFa(a,b,c){var d;d=d||0;c=c||0;if(0<b[J]&&a<=Oi(b))return c=UR(a,b,d),[c,b[c][d]];var e=b[J]-1-c,f=Oi(b)[d],g=b[e][d],k=f-g,l=h[t]((a-f)/k);a=a-f-l*k;e=Ti(jj(b,e),function(a){return[a[d]-g]});a=UR(a,e,0);return[b[J]-1+l*c+a,f+l*k+e[a][0]]}function VR(a,b,c){for(var d=[],e=0;e<a;e++)d[e]=b[L](c,e);return d}function IFa(a){return null!=a.max?a.max:a.min}
function JFa(a,b,c,d){ci(c)||(c=0);ci(d)||(d=a[J]);c=b-c;for(var e=0,f=0<=c?0:null,g=0,k=0,l=null,n=null;e<a[J];){var p=a[e].min,s=IFa(a[e])-p,g=g+p;if(g<=c)var f=e+1,u=h.min(c-g,s),k=g+u,n=p+u;if(g>b)return e>=d?{Yo:e,last:l,nL:b-(g-p)}:null===f?null:{Yo:f,last:n,nL:c-k};u=h.min(b-g,s);g+=u;l=p+u;e++}return{Yo:e,last:l,nL:b-g}}function KFa(a,b,c){a=Ti(a,c||zj);mj(a);for(var d=c=0;d<a[J];d++){var e=a[J]-d,f=(a[d]-c)*e;if(f<=b)c=a[d],b-=f;else{c+=b/e;b=0;break}}return{usa:c,nL:b}}
function WR(a,b,c,d){var e=JFa(a,b,c,d);if(!e)return null;b=e.nL;c=jj(a,0,e.Yo);d=Ui(c,function(a,b){return h.max(a,b.Wb[J])},0);var f=Ti(c,IFa);0<f[J]&&(f[f[J]-1]=e.last);for(var g=0;g<d;g++){e=KFa(c,b,function(a){return a.Wb[g]||0});b=e.nL;for(var k=0;k<f[J];k++)f[k]+=h.min(e.usa,a[k].Wb[g]||0);if(0==b)break}return f}function XR(a,b){var c=WR(a,b,void 0,void 0),d={};Z(a,function(a,b){var g=a.key;null!=d[g]||(d[g]=[]);b<c[J]&&d[g][C](c[b])});return d}
function LFa(a,b){for(var c=jj(arguments,1),d=[],e=0;e<c[J];e+=2){var f=h.min(c[e],a[J]),g=h.min(c[e+1],a[J]),f=jj(a,f,g);ij(d,f)}return d}function YR(a){if(0==a)return 0;a=h.abs(a);for(var b=0;16>b;++b){if(h.abs(a-h[E](a))<1E-7*a)return b;a*=10}return 16}function ZR(a){var b=ep;if(0>=a)return b[hc](0,b[Wd](Ue));for(var b=b[hc](0,b[Wd](Ue)+1),c=0;c<a;c++)b+=we;return b}function $R(a,b){return oi(a)?[a+Ue+b]:Ti(a,function(a){return a+Ue+b})}function aS(a,b,c){return 0>b||0>c?null:a[b][c]}
function MFa(a,b,c,d,e,f){var g=[],k=aS(c,d-1,e);k&&g[C]({oU:k,km:k.km+1,qL:d-1,pU:null,rL:null,qU:null});(k=aS(c,d,e-1))&&g[C]({oU:k,km:k.km+1,qL:null,pU:null,rL:e-1,qU:null});(c=aS(c,d-1,e-1))&&f(a[d-1],b[e-1])&&g[C]({oU:c,km:c.km,qL:d-1,pU:e-1,rL:e-1,qU:d-1});mj(g,function(a,b){return a.km-b.km});return 0<g[J]?g[0]:{oU:null,km:0,qL:null,pU:null,rL:null,qU:null}}
function NFa(a,b,c){var d=c||function(a,b){return a==b};c=[];for(var e=0,f=a[J];e<=f;e++){c[e]=c[e]||[];for(var g=0,k=b[J];g<=k;g++)c[e][g]=MFa(a,b,c,e,g,d)}a={};b={};k=c[f][k];for(c=k.km;k;)null!=k.qL&&(a[k.qL]=k.pU),null!=k.rL&&(b[k.rL]=k.qU),k=k.oU;return{km:c,O8:a,P8:b}}
function OFa(a,b,c){function d(a,b,c){if(null==c)return 0;if(c===b[J]-1||null==a)return c;var d=f(b[c]);if(null==d)return c+1;b=f(b[c+1]);return null==b?c:h.abs(a-d)<=h.abs(a-b)?c:c+1}if(!a||!b||0===a[J]||0===b[J])return null;for(var e=[],f=c||zj,g=c=0,k,l;c<a[J]||g<b[J];)c<a[J]&&(k=f(a[c])),g<b[J]&&(l=f(b[g])),c<a[J]&&g<b[J]&&k==l?(e[C]({value:k,cE:c,dE:g}),c++,g++):c<a[J]&&(null==k||g==b[J]||k<l)?(e[C]({value:k,cE:c,dE:null}),c++):g<b[J]&&(null==l||c==a[J]||l<k)&&(e[C]({value:l,cE:null,dE:g}),g++);
var n=null,p=null;Z(e,function(c){null==c.cE?c.cE=d(c[od],a,n):n=c.cE;null==c.dE?c.dE=d(c[od],b,p):p=c.dE});return e}function bS(a,b){for(var c in a)if(!$i(b,c))return!1;return!0}function PFa(a,b,c,d){for(var e=1,f=0;1E3>f;f++){var g=QFa(a,b,c,e),k=QFa(a,b,c,0),l=DFa(a,g,d),k=DFa(a,k,d);if(l&&k)break;a=g;e*=.99}return a}function QFa(a,b,c,d){var e={};Sj(a,function(f,g){for(var k=f,l=0;l<b[J];l++)var n=(0,b[l])(a,g,d),k=c(k,n);e[g]=k});return e}

    function cS(a, b, c) {
        if (c)return dS(Si(a, ji), b);
        var d = -1;
        for (c = 0; c < a[J]; c++)if (null === a[c]) {
            d = jj(a, d + 1, c);
            d = dS(d, b);
            if (null !== d)return d;
            d = c
        }
        a = jj(a, d + 1);
        return dS(a, b)
    }

    function dS(a, b) {
        var c = kj(a, b, function (a, b) {
            return lj(a, b.x)
        });
        if (0 <= c)return a[c].y;
        var d = -(c + 1);
        if (0 == d || d == a[J])return null;
        c = a[d - 1];
        d = a[d];
        return BL(new AL(c.x, c.y, d.x, d.y), (b - c.x) / (d.x - c.x)).y
    }

    function RFa() {
        return {
            transform: function (a) {
                return a
            }, inverse: function (a) {
                return a
            }
        }
    }

    function SFa(a) {
        var b = TFa(a);
        return {
            transform: function (a) {
                var d = UFa(b, a, function (a) {
                    return a[pq]
                });
                return null === d ? a : d[ar] + (a - d[pq]) * d.FE
            }, inverse: function (a) {
                var d = UFa(b, a, function (a) {
                    return a[ar]
                });
                return null === d ? a : 0 == d.FE ? d[pq] : d[pq] + (a - d[ar]) / d.FE
            }
        }
    }

    function TFa(a) {
        for (var b = [], c = 0, d = null, e = 0; e < a[J]; e++) {
            var f = a[e], g = f.gna, k = f[y], f = f.end, l = g / (f - k);
            null === d || d != k ? (d = {source: k, target: k + c, FE: l}, b[C](d)) : (d = b[b[J] - 1], d.FE = l);
            b[C]({source: f, target: k + c + g, FE: 1});
            c += g - (f - k);
            d = f
        }
        return b
    }

    function UFa(a, b, c) {
        b = kj(a, {source: b, target: b, FE: 0}, function (a, b) {
            var f = c(a), g = c(b);
            return f < g ? -1 : f > g ? 1 : 0
        });
        0 > b && (b = -b - 2);
        return 0 > b ? null : a[b]
    }

    function VFa() {
        return {
            transform: function (a) {
                return h.log(a) / h[Uz]
            }, inverse: function (a) {
                return h.pow(10, a)
            }
        }
    }

    function WFa(a) {
        return {
            transform: function (b) {
                return b > a ? h.log(b / a) / h[Uz] : b < -a ? -h.log(-b / a) / h[Uz] : 0
            }, inverse: function (b) {
                return 0 < b ? h.pow(10, b) * a : 0 > b ? -h.pow(10, -b) * a : 0
            }
        }
    }

    var XFa = {Nya: qI, mya: YG, Bya: KH};

    function eS(a, b, c) {
        return (c = ao(a, c, XFa)) ? c : In(a, b) ? YG : qI
    }

    function YFa(a, b, c) {
        switch (a) {
            case qI:
                return aj(c) ? RFa() : SFa(c);
            case YG:
                return VFa();
            case KH:
                return WFa(b);
            default:
                return RFa()
        }
    }

    function ZFa(a) {
        bi[xq](function () {
            throw a;
        }, 0)
    }

    var fS;

    function $Fa() {
        var a = bi.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof ba && ba.postMessage && ba[Uq] && (a = function () {
            var a = ea[Sb](rG);
            Ra(a[x], Q);
            a.src = O;
            ea[gc][q](a);
            var b = a[Jy], a = b[Ld];
            a[Mq]();
            a[ey](O);
            a[bz]();
            var c = Hra + h[Hc](), d = b[xc][Fq] == hua ? Pe : b[xc][Fq] + Dga + b[xc].host, a = X(function (a) {
                if (a[Mx] == d || a[$] == c) this.port1.onmessage()
            }, this);
            b[Uq](Kha, a, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function () {
                    b.postMessage(c, d)
                }
            }
        });
        if ("undefined" !== typeof a) {
            var b = new a, c = {}, d = c;
            b.port1.onmessage =
                function () {
                    c = c[qc];
                    var a = c.dga;
                    c.dga = null;
                    a()
                };
            return function (a) {
                Da(d, {dga: a});
                d = d[qc];
                b.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof ea && jxa in ea[Sb](yh) ? function (a) {
            var b = ea[Sb](yh);
            Qp(b, function () {
                Qp(b, null);
                b[je][Ud](b);
                b = null;
                a();
                a = null
            });
            ea[gc][q](b)
        } : function (a) {
            bi[xq](a, 0)
        }
    }

    function gS(a, b) {
        hS || aGa();
        iS || (hS(), iS = !0);
        jS[C](new bGa(a, b))
    }

    var hS;

    function aGa() {
        if (bi.Promise && bi.Promise.resolve) {
            var a = bi.Promise.resolve();
            hS = function () {
                a[lA](cGa)
            }
        } else hS = function () {
            var a = cGa;
            ri(bi.setImmediate) ? bi.setImmediate(a) : (fS || (fS = $Fa()), fS(a))
        }
    }

    var iS = !1, jS = [];

    function cGa() {
        for (; jS[J];) {
            var a = jS;
            jS = [];
            for (var b = 0; b < a[J]; b++) {
                var c = a[b];
                try {
                    c.lva[L](c[jA])
                } catch (d) {
                    ZFa(d)
                }
            }
        }
        iS = !1
    }

    function bGa(a, b) {
        this.lva = a;
        this.scope = b
    }

    function dGa(a) {
        a[K].then = a[K][lA];
        a[K].$goog_Thenable = !0
    }

    function eGa(a) {
        if (!a)return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    }

    function kS(a, b) {
        this.o = 0;
        this.Xs = void 0;
        this.vn = this.Yd = null;
        this.MS = this.O1 = !1;
        try {
            var c = this;
            a[L](b, function (a) {
                lS(c, 2, a)
            }, function (a) {
                lS(c, 3, a)
            })
        } catch (d) {
            lS(this, 3, d)
        }
    }

    kS[K].then = function (a, b, c) {
        return fGa(this, ri(a) ? a : null, ri(b) ? b : null, c)
    };
    dGa(kS);
    Rp(kS[K], function (a) {
        0 == this.o && gS(function () {
            var b = new mS(a);
            gGa(this, b)
        }, this)
    });
    function gGa(a, b) {
        if (0 == a.o)if (a.Yd) {
            var c = a.Yd;
            if (c.vn) {
                for (var d = 0, e = -1, f = 0, g; g = c.vn[f]; f++)if (g = g.YS)if (d++, g == a && (e = f), 0 <= e && 1 < d)break;
                0 <= e && (0 == c.o && 1 == d ? gGa(c, b) : (d = c.vn[le](e, 1)[0], hGa(c, d, 3, b)))
            }
        } else lS(a, 3, b)
    }

    function iGa(a, b) {
        a.vn && a.vn[J] || 2 != a.o && 3 != a.o || jGa(a);
        a.vn || (a.vn = []);
        a.vn[C](b)
    }
function fGa(a,b,c,d){var e={YS:null,Zea:null,$ea:null};e.YS=new kS(function(a,g){e.Zea=b?function(c){try{var e=b[L](d,c);a(e)}catch(n){g(n)}}:a;e.$ea=c?function(b){try{var e=c[L](d,b);!ci(e)&&b instanceof mS?g(b):a(e)}catch(n){g(n)}}:g});e.YS.Yd=a;iGa(a,e);return e.YS}kS[K].Rca=function(a){this.o=0;lS(this,2,a)};kS[K].Sca=function(a){this.o=0;lS(this,3,a)};
function lS(a,b,c){if(0==a.o){if(a==c)b=3,c=new TypeError(hpa);else{if(eGa(c)){a.o=1;c[lA](a.Rca,a.Sca,a);return}if(ni(c))try{var d=c[lA];if(ri(d)){kGa(a,c,d);return}}catch(e){b=3,c=e}}a.Xs=c;a.o=b;jGa(a);3!=b||c instanceof mS||lGa(a,c)}}function kGa(a,b,c){function d(b){f||(f=!0,a.Sca(b))}function e(b){f||(f=!0,a.Rca(b))}a.o=1;var f=!1;try{c[L](b,e,d)}catch(g){d(g)}}function jGa(a){a.O1||(a.O1=!0,gS(a.fua,a))}
kS[K].fua=function(){for(;this.vn&&this.vn[J];){var a=this.vn;this.vn=[];for(var b=0;b<a[J];b++)hGa(this,a[b],this.o,this.Xs)}this.O1=!1};function hGa(a,b,c,d){if(2==c)b.Zea(d);else{for(;a&&a.MS;a=a.Yd)a.MS=!1;b.$ea(d)}}function lGa(a,b){a.MS=!0;gS(function(){a.MS&&mGa[L](null,b)})}var mGa=ZFa;function mS(a){xi[L](this,a)}Y(mS,xi);fb(mS[K],aE);/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function nS(a,b){this.cf=[];this.Nda=a;this.Wca=b||null;this.BK=this.ZD=!1;this.Xs=void 0;this.b3=this.aqa=this.r2=!1;this.rT=0;this.Yd=null;this.p2=0}W=nS[K];Rp(W,function(a){if(this.ZD)this.Xs instanceof nS&&this.Xs[Nq]();else{if(this.Yd){var b=this.Yd;delete this.Yd;if(a)b[Nq](a);else b.p2--,0>=b.p2&&b[Nq]()}this.Nda?this.Nda[L](this.Wca,this):this.b3=!0;this.ZD||oS(this,new pS)}});W.kda=function(a,b){this.r2=!1;qS(this,a,b)};function qS(a,b,c){a.ZD=!0;a.Xs=c;a.BK=!b;nGa(a)}
W.vu=function(){if(this.ZD){if(!this.b3)throw new rS;this.b3=!1}};W.gfa=function(a){this.vu();qS(this,!0,a)};function oS(a,b){a.vu();qS(a,!1,b)}function oGa(a,b){sS(a,b,null,void 0)}function pGa(a,b){sS(a,null,b,void 0)}function sS(a,b,c,d){a.cf[C]([b,c,d]);a.ZD&&nGa(a)}W.then=function(a,b,c){var d,e,f=new kS(function(a,b){d=a;e=b});sS(this,d,function(a){a instanceof pS?f[Nq]():e(a)});return f[lA](a,b,c)};dGa(nS);nS[K].lj=function(a){return a instanceof m};
function qGa(a){return Vi(a.cf,function(a){return ri(a[1])})}
function nGa(a){if(a.rT&&a.ZD&&qGa(a)){var b=a.rT,c=tS[b];c&&(bi[cq](c.ic),delete tS[b]);a.rT=0}a.Yd&&(a.Yd.p2--,delete a.Yd);for(var b=a.Xs,d=c=!1;a.cf[J]&&!a.r2;){var e=a.cf[sb](),f=e[0],g=e[1],e=e[2];if(f=a.BK?g:f)try{var k=f[L](e||a.Wca,b);ci(k)&&(a.BK=a.BK&&(k==b||a.lj(k)),a.Xs=b=k);eGa(b)&&(d=!0,a.r2=!0)}catch(l){b=l,a.BK=!0,qGa(a)||(c=!0)}}a.Xs=b;if(d)if(k=X(a.kda,a,!0),d=X(a.kda,a,!1),b instanceof nS)sS(b,k,d),b.aqa=!0;else b[lA](k,d);c&&(b=new rGa(b),tS[b.ic]=b,a.rT=b.ic)}
function sGa(a){var b=new nS;oS(b,a);return b}function rS(){xi[L](this)}Y(rS,xi);Ga(rS[K],"Deferred has already fired");fb(rS[K],"AlreadyCalledError");function pS(){xi[L](this)}Y(pS,xi);Ga(pS[K],"Deferred was canceled");fb(pS[K],"CanceledError");function rGa(a){this.ic=bi[xq](X(this.Hsa,this),0);this.Us=a}rGa[K].Hsa=function(){delete tS[this.ic];throw this.Us;};var tS={};function tGa(a,b){var c=b||{},d=c[Ld]||ea,e=el(Rf),f={ifa:e,lf:void 0},g=new nS(uGa,f),k=null,l=null!=c.timeout?c.timeout:5E3;0<l&&(k=ba[xq](function(){uS(e,!0);oS(g,new vS(1,Fpa+a))},l),f.lf=k);tp(e,Qp(e,function(){e[Tq]&&e[Tq]!=Awa&&e[Tq]!=hs||(uS(e,c.Tda||!1,k),g.gfa(null))}));e.onerror=function(){uS(e,!0,k);oS(g,new vS(0,woa+a))};$k(e,{type:Hh,charset:Kpa,src:a});vGa(d)[q](e);return g}
function wS(a,b){bi.closure_verification||(bi.closure_verification={});var c=bi.closure_verification;if(ci(c[b]))return sGa(new vS(3,Opa+b+fla));var d=tGa(a,{Tda:!0}),e=new nS(X(d[Nq],d));oGa(d,function(){var d=c[b];ci(d)?(e.gfa(d),delete c[b]):oS(e,new vS(2,qpa+a+hla+b+jla))});pGa(d,function(a){ci(c[b])&&delete c[b];oS(e,a)});return e}function vGa(a){var b=a[fc](Ioa);return!b||aj(b)?a[gc]:b[0]}function uGa(){if(this&&this.ifa){var a=this.ifa;a&&a[Tc]==Rf&&uS(a,!0,this.lf)}}
function uS(a,b,c){null!=c&&bi[cq](c);tp(a,fi);a.onerror=fi;Qp(a,fi);b&&ba[xq](function(){kl(a)},0)}function vS(a,b){var c=Roa+a+Oe;b&&(c+=PB+b);xi[L](this,c);this.code=a}Y(vS,xi);var __flash_unloadHandler,__flash_savedUnloadHandler;/*
 SWFObject v1.5: Flash Player detection and embed -
 http://blog.deconcept.com/swfobject/

 SWFObject is (c) 2007 Geoff Stearns and is released under the MIT License:
 http://www.opensource.org/licenses/mit-license.php

*/
function xS(a,b,c,d,e,f,g,k,l,n){if(ea[md]){this.tra=n?n:kta;t:{n=this.tra;var p=ea[xc][Cc]||ea[xc].hash;if(null==n)n=p;else{if(p)for(var p=p[ee](1)[rc](Ee),s=0;s<p[J];s++)if(p[s][ee](0,p[s][qd](lf))==n){n=p[s][ee](p[s][qd](lf)+1);break t}n=O}}this.qra=n;this.ka={};this.$m={};this.attributes=[];a&&this[w](LJ,a);b&&this[w](qG,b);c&&this[w](Vh,c);d&&this[w](Rg,d);e&&this[w](rK,new yS(e[kc]()[rc](Ue)));t:if(a=new yS([0,0,0]),rw.plugins&&rw.mimeTypes[J])(b=rw.plugins[tpa])&&b.description&&(a=new yS(b.description[wb](/([a-zA-Z]|\s)+/,
O)[wb](/(\s+r|\s+b[0-9]+)/,Ue)[rc](Ue)));else if(rw[vc]&&0<=rw[vc][qd](Qpa))for(b=1,c=3;b;)try{c++,b=new ActiveXObject(vpa+c),a=new yS([c,0,0])}catch(u){b=null}else{b=null;try{b=new ActiveXObject(xpa)}catch(v){try{b=new ActiveXObject(wpa),a=new yS([6,0,21]),b.Swa=lD}catch(z){if(6==a.oE)break t}try{b=new ActiveXObject(upa)}catch(B){}}null!=b&&(a=new yS(b.GetVariable(Tla)[rc](se)[1][rc](Re)))}this.RT=a;!ba.opera&&ea.all&&7<this.RT.oE&&(wGa=!0);f&&(this.ka.bgcolor=f);this.ka.quality=g?g:hG;this[w](nBa,
!1);this[w](jF,!1);this[w](HBa,k?k:ba[xc]);this[w](FI,O);l&&this[w](FI,l)}}var wGa;
lb(xS,{setAttribute:function(a,b){this[rz][a]=b},getAttribute:function(a){return this[rz][a]},getParams:function(){return this.ka},write:function(a){if(this[Xd](nBa)&&zS(this.RT,new yS([6,0,65]))&&!zS(this.RT,this[Xd](rK))){this[w](jF,!0);var b=pw(this[Xd](HBa));this.$m.MMredirectURL=b;Xp(ea,ea[fA][jd](0,47)+$ka);this.$m.MMdoctitle=ea[fA]}if(this.qra||this[Xd](jF)||zS(this.RT,this[Xd](rK))){a=typeof a==Eh?ea[md](a):a;b=O;if(rw.plugins&&rw.mimeTypes&&rw.mimeTypes[J]){this[Xd](jF)&&(this.$m.MMplayerType=
epa,this[w](LJ,this.pta));var b=Ina+this[Xd](LJ)+rla+this[Xd](Vh)+nla+this[Xd](Rg)+qla+this[Xd](Fh)+ue,b=b+(KA+this[Xd](qG)+ola+this[Xd](qG)+MA),c=this.getParams(),d;for(d in c)b+=[d]+aC+c[d]+MA;d=xGa(this)[me](Ee);0<d[J]&&(b+=nua+d+ue);b+=Wma}else{this[Xd](jF)&&(this.$m.MMplayerType=Xna,this[w](LJ,this.pta));b=Nna+this[Xd](qG)+mla+this[Xd](Vh)+nla+this[Xd](Rg)+qla+this[Xd](Fh)+OA;b+=Qna+this[Xd](LJ)+ve;c=this.getParams();for(d in c)b+=Ona+d+NA+c[d]+ve;d=xGa(this)[me](Ee);0<d[J]&&(b+=Pna+d+ve);b+=
zna}Xa(a,b);return!0}this[Xd](FI)!=O&&ea[xc][wb](this[Xd](FI));return!1}});function xGa(a){var b=[],c;a=a.$m;for(c in a)b[b[J]]=c+lf+a[c];return b}function yS(a){this.oE=null!=a[0]?ka(a[0],10):0;this.IU=null!=a[1]?ka(a[1],10):0;this.rev=null!=a[2]?ka(a[2],10):0}function zS(a,b){return a.oE<b.oE?!1:a.oE>b.oE?!0:a.IU<b.IU?!1:a.IU>b.IU?!0:a.rev<b.rev?!1:!0}function yGa(){for(var a=ea[fc](gba),b=a[J]-1;0<=b;b--){Ra(a[b][x],Q);for(var c in a[b])typeof a[b][c]==Mg&&(a[b][c]=function(){})}}
if(wGa&&!zGa){ba.attachEvent("onbeforeunload",function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){};ba.attachEvent(kxa,yGa)});var zGa=!0}!ea[md]&&ea.all&&(ea.getElementById=function(a){return ea.all[a]});function AGa(a){this.kva=a}var BGa=NR("regioncoder",Xe)+"geocodes",AS={};function CGa(a,b){a=Di(a[pe]());a=aa(String(a));var c=AS[a];if(null==c){AS[a]=[b];var c=BGa+jr+a+Qma,d=ufa(),e=ea[Sb](yh);cb(e,Hh);e.src=c;d[q](e);Wt(ui(DGa,a,null),5E3)}else hi(c)==rg?$i(c,b)||c[C](b):Wt(ui(b,c),0)}function DGa(a,b){if(b){var c=new AGa(b),d=AS[a];if(hi(d)==rg){AS[a]=c;for(var e=0;e<d[J];e++)d[e](c)}}else if(d=AS[a],hi(d)==rg)for(AS[a]=null,e=0;e<d[J];e++)d[e](null)}
function EGa(a,b){b=Di(b[pe]());return a.kva[b]}
var FGa=["AD","AE","AF","AG","AL","AM","AO","AR",eC,"AU","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BN","BO",pf,"BS","BT","BW","BY","BZ","CA","CD","CF","CG","CH","CI","CL","CM","CN","CO","CR","CS","CU","CV","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","ER","ES","ET","FI","FJ","FM","FR","GA","GB","GD","GE","GH","GM","GN","GQ","GR","GT","GW","GY","HN",Df,"HT","HU","ID","IE","IL","IN","IQ","IR","IS","IT","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KZ","LA","LB",HC,
"LK","LR","LS","LT","LU","LV","LY","MA","MD","ME","MG","MH","MK","ML","MM","MN","MR","MT","MU","MV","MW","MX","MY","MZ","NA","NE","NG","NI","NL","NO","NP","NR","NZ","OM","PA","PE","PG","PH","PK","PL","PT","PW","PY","QA","RO","RS","RU","RW","SA","SB","SC","SD","SE","SG","SH","SI","SK","SL","SM","SN","SO","SR","ST","SV","SY","SZ",TC,"TG","TH","TJ",Yf,"TM","TN","TO",Zf,"TT","TV","TW","TZ","UA","UG","UM",WC,"UY","UZ","VC","VE","VN","VU","WS","YE","YU","ZA","ZM","ZW"];di("gviz.util.RegionCoder.dictionaryReady",DGa,void 0);var GGa={NU:Tg,OU:Rh};
function BS(a,b,c,d){var e={},f={},g=b.d$||ep;if(b[Vz]==Tg){var f=b.ba,e=a.Wk[0],k=a.Wk[a.Wk[J]-1],g=new dp({pattern:g}),e=g.Oc(e),k=g.Oc(k),f={Fg:{text:e,width:d?d(e,f)[r]:0,height:f[yc]},Yg:{text:k,width:d?d(k,f)[r]:0,height:f[yc]}};d=f.Fg[A]/4;e=new Il(f.Fg[r]+d,0,b[r]-(f.Fg[r]+f.Yg[r]+2*d),b[A])}else e=new Il(0,0,b[r],b[A]);d=.33*e[A];var k=2*(d/h[zd](3)),g=new Il(e[G]+k/2,e.top+d+1,e[r]-k,e[A]-d-1),l=a.lv,n=a.Wk,p=n[n[J]-1]-n[0],s;if(0==p)s=[{xh:new Il(g[G],g.top,g[r],g[A]),brush:new bn({fill:l[0]})}];
else{s=[];for(var p=g[r]/p,u=g[G],v=0,z=0;z<n[J]-1;++z)v=u+(n[z+1]-n[z])*p,s[z]={xh:new Il(u,g.top,v-u,g[A]),brush:new bn({Eh:{x1:u,y1:0,Hb:v,Lb:0,jg:l[z],Rf:l[z+1]}})},u=v}g=s;if(null!=g&&0<g[J]&&(0>g[0].xh[r]||0>g[0].xh[A]))return null;l=e;n=b.c$;e=[];for(s=0;s<c[J];++s)p=c[s][od],u=a.Wk,p<u[0]?p=0:(v=l[r]-k,p>u[u[J]-1]?p=v:(z=u[u[J]-1]-u[0],p=0==z?.5*v:(p-u[0])/z*v)),p=l[G]+p+k/2,p=[p-k/2,l.top,p+k/2,l.top,p,l.top+d],u=new bn({fill:n,stroke:n}),e[s]={path:p,brush:u};a=[];b[Vz]==Tg&&(a=f,c=[],c[0]=
{x:0,y:b[A]-a.Fg[A],text:a.Fg[id],style:b.ba},c[1]={x:b[r]-a.Yg[r],y:b[A]-a.Yg[A],text:a.Yg[id],style:b.ba},a=c);a={jZ:g,kZ:e,lZ:a};f=a.jZ;for(c=0;c<f[J];++c)d=f[c],b[Vz]==Rh&&(k=d.xh[G],Za(d.xh,d.xh.top),d.xh.top=k,k=d.xh[r],pa(d.xh,d.xh[A]),Sa(d.xh,k)),Za(d.xh,d.xh[G]+b[G]),d.xh.top+=b.top,k=d.brush[Bc](),d.brush=k,d=k.Hg,b[Vz]==Rh&&(d.y1=d.x1,d.x1=0,d.Lb=d.Hb,d.Hb=0),null!=d&&(d.x1+=b[G],d.y1+=b.top,d.Hb+=b[G],d.Lb+=b.top);f=a.kZ;for(c=0;c<f[J];++c)for(d=0;3>d;++d)b[Vz]==Rh&&(k=f[c][Qz][2*d],f[c][Qz][2*
d] = f[c][Qz][2 * d + 1], f[c][Qz][2 * d + 1] = k), f[c][Qz][2 * d] += b[G], f[c][Qz][2 * d + 1] += b.top;
    f = a.lZ;
    for (c = 0; c < f[J]; ++c)f[c].x += b[G], f[c].y += b.top;
    return a
}

    var HGa = {Ixa: Ksa, kza: qAa, Jxa: TE, Rya: AI, xya: EH};

    function CS(a) {
        this.b = a || {}
    }

    CS[K].OX = function () {
        return 1.618
    };
    CS[K].set = function (a, b) {
        this.b[a] = b
    };
    CS[K].kd = function () {
        return hk(this.b)
    };
    function DS(a) {
        var b = 0, c = 0;
        if (a.boundingBox)var d = a.boundingBox.lo, c = a.boundingBox.hi, b = (c[0] - d[0]) / 2 + d[0],
            c = (c[1] - d[1]) / 2 + d[1];
        d = [29.5, 45.5];
        b = {parallels: d, origin: {lat: b, lng: c}};
        c = b[Mx];
        a[Mx] && jk(c, a[Mx]);
        jk(b, a);
        b.origin = c;
        b.bm && 0 !== b.bm[J] ? 2 > b.bm[J] && (b.bm[1] = h.abs(b.bm[0] - d[0]) > h.abs(b.bm[0] - d[1]) ? d[0] : d[1]) : b.bm = d;
        this.b = a || {};
        this.$0 = b[Mx].lat / (180 / h.PI);
        this.bS = b[Mx].lng / (180 / h.PI);
        this.Po = Ti(b.parallels, function (a) {
            return a / (180 / h.PI)
        })
    }

    Y(DS, CS);
    DS[K].yE = function (a) {
        return Ti(arguments, X(function (a) {
            var c = a[0] / (180 / h.PI), d = .5 * (h.sin(this.Po[0]) + h.sin(this.Po[1]));
            a = d * (a[1] / (180 / h.PI) - this.bS);
            var e = h.cos(this.Po[0]), e = e * e + 2 * d * h.sin(this.Po[0]), c = h[zd](e - 2 * d * h.sin(c)) / d,
                d = h[zd](e - 2 * d * h.sin(this.$0)) / d;
            return {x: 180 / h.PI * h.sin(a) * c, y: 180 / h.PI * (d - c * h.cos(a))}
        }, this))
    };
    function ES(a) {
        this.b = a || {}
    }

    Y(ES, CS);
    ES[K].OX = function () {
        return 2.2
    };
    ES[K].yE = function (a) {
        return Ti(arguments, function (a) {
            var c = a[0] / (180 / h.PI);
            a = a[1] / (180 / h.PI) * 3 / (2 * h.PI) * (180 / h.PI);
            return {x: h[zd](h.PI * h.PI / 3 - c * c) * a, y: c}
        })
    };
    function FS(a) {
        var b = 0, c = 0;
        if (a.boundingBox)var d = a.boundingBox.lo, c = a.boundingBox.hi, b = (c[0] - d[0]) / 2 + d[0],
            c = (c[1] - d[1]) / 2 + d[1];
        d = [20, 50];
        b = {parallels: d, origin: {lat: b, lng: c}};
        c = b[Mx];
        a[Mx] && jk(c, a[Mx]);
        jk(b, a);
        b.origin = c;
        b.bm && 0 !== b.bm[J] ? 2 > b.bm[J] && (b.bm[1] = h.abs(b.bm[0] - d[0]) > h.abs(b.bm[0] - d[1]) ? d[0] : d[1]) : b.bm = d;
        this.b = a || {};
        this.$0 = b[Mx].lat / (180 / h.PI);
        this.bS = b[Mx].lng / (180 / h.PI);
        this.Po = Ti(b.parallels, function (a) {
            return a / (180 / h.PI)
        })
    }

    Y(FS, CS);
FS[K].yE=function(a){return Ti(arguments,X(function(a){var c=a[0]/(180/h.PI);a=a[1]/(180/h.PI);var d=h.log(1/h.cos(this.Po[1])*h.cos(this.Po[0]))/h.log(h.tan(.25*h.PI+.5*this.Po[1])*(1/h.tan(.25*h.PI+.5*this.Po[0]))),e=h.cos(this.Po[0])*h.pow(h.tan(.25*h.PI+.5*this.Po[0]),d)/d,c=e*h.pow(1/h.tan(.25*h.PI+.5*c),d),e=e*h.pow(1/h.tan(.25*h.PI+.5*this.$0),d);return{x:180/h.PI*h.sin(d*(a-this.bS))*c,y:e-180/h.PI*h.cos(d*(a-this.bS))*c}},this))};function GS(a){return 180/h.PI*(h.atan(h.exp(a/(180/h.PI)))-h.PI/4)*2}function HS(){this.Jq={}}HS[K].track=function(a){Z(arguments,X(function(a){for(var c in a)if(a[zc](c)){c in this.Jq||(this.Jq[c]={min:da,max:-da});if(!this.Jq[c].min||a[c]<this.Jq[c].min)this.Jq[c].min=a[c];if(!this.Jq[c].max||a[c]>this.Jq[c].max)this.Jq[c].max=a[c]}},this))};HS[K].getBounds=function(a){return{min:this.Jq[a].min,max:this.Jq[a].max}};function IS(a){this.b=a||{}}Y(IS,CS);IS[K].yE=function(a){return Ti(arguments,function(a){return{x:a[1],y:180/h.PI*h.log(h.tan(a[0]/180*.5*h.PI+h.PI/4))}})};var IGa={exa:"albers",gya:Yva,jya:"lambert",wya:DH},JS={};JS.mercator=IS;JS[Yva]=ES;JS.albers=DS;JS.lambert=FS;var JGa={NONE:Q,TOP_LEFT:bK,TOP_RIGHT:VAa,BOTTOM_LEFT:SD,BOTTOM_RIGHT:"bottom_right"},KGa={NONE:Q,Tya:HI,txa:TD,Ry:xg};function LGa(a){return Fn(a,Sxa,{name:DH},function(a){ni(a)||(a={name:a});var c=a[Cd];if(null!=c&&!bk(IGa,Sn(c)))throw m("The projection you specified is not valid.");return a})}
var MGa={region:zK,resolution:TE,domain:mC,displayMode:sg,showGeocodeWarnings:!1,backgroundColor:{fill:Uh,stroke:ZA,strokeWidth:0},datalessRegionColor:"F5F5F5",defaultColor:"267114",markerOpacity:1,selectionMode:Bh,fontName:gC,geocodingContext:HI,tooltip:{isHtml:!1,textStyle:{fontName:gC,fontSize:13,color:JD},trigger:Kg,showDisputedText:!1,showTitle:!0},colorAxis:{minValue:null,maxValue:null,values:null},sizeAxis:{minValue:null,maxValue:null,minSize:3,maxSize:12},legend:{position:SD,orientation:Tg,
textStyle:{color:JD,auraColor:Uh}},marker:{style:{stroke:{color:iB,width:1}}},projection:DH,keepAspectRatio:!0,magnifyingGlass:{enable:!0,zoomFactor:5}};function KS(a){this.Ec=a;this.VD=null;this.Cca=!0;this.JK=null;this.up=new Yu;this.nsa=/^([a-zA-Z][a-zA-Z]|[a-zA-Z][a-zA-Z]\-[a-zA-Z0-9](|[a-zA-Z0-9](|[a-zA-Z0-9]))|\d\d\d)$/;this.Ira=/^\d\d\d$/}Y(KS,ut);W=KS[K];W.m3=function(a){this.VD=a;null!=this.Zta&&this.Zta(a)};function NGa(a,b,c,d,e,f){a.Cca=e;if(0==b.M())Wt(function(){f([],[],!0)});else switch(c.JZ){case As:a.cY(b,c,f);break;case Ms:OGa(a,b,c,d,f);break;case bs:a.bY(b,c,d,f)}}
W.cY=function(a,b,c){for(var d=[],e=0;e<a.M();e++){var f=a[I](e,b.bC),g=a[I](e,b.cC);d[e]=null==f||null==g?null:{lat:Bi(f),lng:Bi(g)}}Wt(function(){c([],d,!0)})};function OGa(a,b,c,d,e){for(var f=[],g=0;g<b.M();g++)f[C](b[I](g,c.XH));d.xn==EH||d.xn==Ksa||d.xn==qAa?a.YX(d,f,e):a.ZX(d,f,e)}W.YX=function(a,b,c){a=yi(a.Cv,WC)&&a.xn==EH;for(var d=[],e=0;e<b[J];e++){var f=Bi(b[e]);a&&this.Ira[hd](f)&&(f=XC+f);d[C](f[ke]())}Wt(function(){c(d,[],!0)})};
W.ZX=function(a,b,c){var d=a.Cv,e;e=a.xn==AI&&0<=kj(FGa,d)?d:Lsa;if(a.xn==AI&&d==WC)for(a=0;a<b[J];++a){var f=b[a];2==f[J]&&(b[a]=XC+f)}CGa(e,this.Zi(function(a){a=this.I_(b,a);for(var e=[],f=0;f<b[J];f++)if(null==a[f]){var n=b[f];e[C]({g2:n,Vca:f,Uca:null});a[f]=n}aj(e)?c(a,[],!0):(c(a,[],!1),PGa(this,e,d,c,a))}))};W.I_=function(a,b){for(var c=[],d=0;d<a[J];++d){var e=Di(Bi(a[d]))[pe](),f=b&&EGa(b,e),e=f?f:this.nsa[hd](e)?e[ke]():null;c[C](e)}return c};function LS(a,b){a.Cca&&a.Ec&&Pu(a.Ec,b)}
W.bY=function(a,b,c,d){var e=[];c=c.Cv;2==c[J]&&(c=c[ke](),c=c[wb](/GB/,Ipa),c=c[wb](/RU/,opa),c=c[wb](/TP/,Yf));for(var f=0;f<a.M();f++){var g=Bi(a[I](f,b.YH));QGa(this,c)&&(g+=se+c);e[C]({g2:g,Uca:f,Vca:null})}PGa(this,e,c,d,[])};function QGa(a,b){return b==zK||Ci(b)?!1:a.JK===HI||a.JK===xg}
function RGa(a){var b=da,c=da,d=-da,e=-da;if(null!=a.VD&&0!==a.VD[Qy][J])return Z(a.VD[Qy],function(a){a=a.Vt;b=h.min(b,a.jh[0]);c=h.min(b,a.jh[1]);d=h.max(d,a.ri[0]);e=h.max(d,a.ri[1])}),{lo:{lat:b,lng:c},hi:{lat:d,lng:e}}}function PGa(a,b,c,d,e){for(var f=[],g=0;g<b[J];g++){var k={address:b[g].g2};QGa(a,c)&&(k.region=c);a.JK!==TD&&a.JK!==xg||(k.bounds=RGa(a));f[C](k)}b=gj(b);d=X(a.R_,a,b,d,e,[]);a.up[sq](f,d,1)}
W.R_=function(a,b,c,d,e){for(var f=e[J],g=0;g<f;g++){var k=a[g],l=k.g2,n=k.Vca,p=k.Uca;if(e[g]&&e[g][0]){k=e[g][0];if(null!=n){var s=n,u=k.address_components,v=null;1==u[J]&&0<=Qi(u[0].types,Msa)?v=u[0].short_name:2==u[J]&&u[1].short_name==WC&&(v=XC+u[0].short_name);c[s]=v;c[n]||(LS(this,zoa+l+ue),c[n]=l)}null!=p&&(l=p,n=k,n={lat:n[$x][xc].lat(),lng:n[$x][xc].lng()},d[l]=n)}else null!=n&&(c[n]=null),null!=p&&(d[p]=null),LS(this,zoa+l+ue)}dj(a,0,f);(a=aj(a))&&Wi(c,ii)&&Wi(d,ii)&&LS(this,Eoa);b(c,d,
    a)
};
    W.Zi = function (a) {
        return X(a, this)
    };
    W.B = function () {
        this.up[Nq]();
        KS.e.B[L](this)
    };
    function SGa(a, b, c) {
        for (var d = 0; d < a[J]; ++d)b.hb(a[d].xh[G], a[d].xh.top, a[d].xh[r], a[d].xh[A], a[d].brush, c)
    }

    function TGa(a, b, c) {
        for (var d = 0; d < a[J]; ++d) {
            var e = new pL;
            e[Hz](a[d][Qz][0], a[d][Qz][1]);
            e.da(a[d][Qz][2], a[d][Qz][3]);
            e.da(a[d][Qz][4], a[d][Qz][5]);
            e[bz]();
            b.sa(e, a[d].brush, c)
        }
    }

    function UGa(a, b, c) {
        for (var d = 0; d < a[J]; ++d)b.Sd(a[d][id], a[d].x, a[d].y, 1, AJ, AJ, a[d][x], c)
    }

    function MS(a) {
        return a[me](Ue)
    }

    function NS(a, b, c) {
        this.g = b;
        this.Qf = X(this.g.Qf, this.g);
        this.xk = a;
        this.hP = [];
        this.fb = c;
        this.td = {};
        this.yc = new Tt;
        this.bZ = this.Gw = this.Rw = this.Qw = this.Lw = this.iu = this.XA = null
    }

    Y(NS, ut);
    NS[K].m = function (a, b) {
        Lt(this.yc, a, b)
    };
    function VGa(a, b) {
        var c = a.g;
        c[Yb]();
        var d = c.qm(b[r], b[A]);
        a.td = {};
        var e = c.Ba();
        WGa(a, e, b, new Il(0, 0, b[r], b[A]), !1);
        var f = c.Ba(), g = a.g, k = g.Ba();
        a.Lw = g.Ba();
        for (var l = 0; l < b[Qy][J]; ++l)XGa(a, k, b, b[Qy][l], !1), YGa(a, b, b[Qy][l]);
        a.iu = g.Ba();
        OS(a, a.iu, b.Hz, !1, b.lk);
        g[q](f, k);
        g[q](f, a.Lw);
        g[q](f, a.iu);
        g = b.jha;
        f = c.uF(f, a.zC() ? new Il(g[G], g.top, g[r] - 1, g[A] - 1) : g);
        a.Rw = c.Ba();
        ZGa(a, b);
        a.Gw = c.Ba();
        $Ga(a, b);
        a.Qw = c.Ba();
        aHa(a, b);
        c[q](d, e);
        c[q](e, f);
        c[q](e, a.Rw);
        c[q](e, a.Gw);
        c[q](e, a.Qw);
        a.XA = b;
        bHa(a, d)
    }
function PS(a,b,c){c=c||!1;a.g.Nc(a.Qw);aHa(a,b);if(c||!zn(a.XA.pA,b.pA))for(a.g.Nc(a.Lw),c=0;c<b[Qy][J];++c)YGa(a,b,b[Qy][c]);cHa(a,b);a.g.Nc(a.Rw);ZGa(a,b);a.bZ!=(b.jF?b.jF.Jn:null)&&(a.g.Nc(a.Gw),$Ga(a,b));a.XA=b}function YGa(a,b,c){var d=a.g.Ba();c=Si(c.O,function(a){return $i(b.pA,a.id)});for(var e=0;e<c[J];++e)dHa(a,d,b,c[e]);a.g[q](a.Lw,d)}function eHa(a,b){var c=a.g;Z(ll(a.iu.a()),function(a){Z(ll(a),function(a){c.Yf(a)},this)},a);OS(a,a.iu,b.Hz,!1,b.lk)}
var fHa=new bn({ua:cf,stroke:JD,Xg:"0.2"}),gHa=new bn({ua:af,stroke:JD,Xg:"0.1"});function dHa(a,b,c,d){a.zC()||(c=c.gA[d.id].pe,QS(a,b,d,!1,!1,[fHa,gHa,c[ic]]),aj(d.en)||(QS(a,b,d,!0,!1,[c.en]),QS(a,b,d,!1,!1,[c.border])))}
function $Ga(a,b){var c=b.jF;if(c){var d=a.Gw,e=a.g,f=c[$q].Yz,g=f[G]+f[r]/2,k=f.top+f[A]/2,l=f[r]/2,n=f[A]/2,p=c.I7.x,s=c.I7.y,u=new bn({fill:mna,Ce:.25}),v=new pL;v[Hz](p,s);v.da(p,s+(k>s?n:-n));v.da(p+(g>p?l:-l),s);v[bz]();p=e.sa(v,u,d);RS(a,p,bH,!0);p=new bn({fill:Uh});p=e.pk(g,k,l,n,p,d);RS(a,p,aH,!0);p=new bn({stroke:wra,ua:1.5});p=e.pk(g,k,l,n,p,d);RS(a,p,aH,!0);p=e.Ba();f=e.uF(p,new Il(f[G]+3.5,f.top+3.5,f[r]-7,f[A]-7),!0);e[q](d,f);f=new bn({stroke:Pra,ua:1.5});d=e.pk(g,k,l-3.5,n-3.5,f,d);
RS(a,d,aH,!0);d=c[$q];WGa(a,p,b,d.Yz,!0);XGa(a,p,b,d,!0);OS(a,p,c.Hz,!0,b.lk);a.bZ=c.Jn}else a.bZ=null}function aHa(a,b){0<a.hP[J]&&(Ti(a.hP,function(a){this.g.Yf(a)},a),a.hP=[]);a.hP=0<b.kr[J]?Ti(b.kr,function(a){return a[Py]?PR(a,this.xk.pc()):QR(a,this.g,this.Qw).a()},a):[]}function hHa(a,b){Sj(b.gA,function(a,b){var e=a.pe;SS(this,b,yF,e[ic]);SS(this,b,zta,e.en);SS(this,b,ND,e.border)},a)}function SS(a,b,c,d){b=MS([c,b]);b=a.td[b];if(null!=b)for(c=0;c<b[J];++c)a.g.pj(b[c],d)}
function bHa(a,b){var c=a.Zi(function(a){var b=iHa(this,a[ar]);if(b&&b.nQ){var c=jHa(a[H],b[H]),d=b.Wu,b=gk(b[$]);a[H]==Hs?b.Rn=!1:a[H]==Is&&(b.Rn=!0);b.xb=yL(a);this.yc[fq]({type:c,Wu:d,data:b})}}),d=a.g;d.hc(b,PH,c);d.hc(b,Hs,c);d.hc(b,Is,c);d.hc(b,gs,c)}function jHa(a,b){switch(b){case yF:switch(a){case gs:return zF;case PH:return BF;case Hs:case Is:return AF}case dH:switch(a){case gs:return eH;case PH:return Mwa;case Hs:case Is:return fH}}return null}
function RS(a,b,c,d){TS(a,b,[Af,c,af,d?af:Xe,O,Xe])}function TS(a,b,c){c=c[me](we);a.g.bo(b,c)}function iHa(a,b){var c=a.g.Uu(b);if(!c||c==lg)return null;var c=c[rc](we),d=c[1],e=c[2]==af?!0:!1,f=c[3]==af?!0:!1;switch(c[0]){case Af:return{type:yF,Wu:d,nQ:e,data:{sJ:f,xr:c[4]?c[4]:null,pH:c[5]==af?!0:!1}};case Gf:return{type:dH,Wu:d,nQ:e,data:{sJ:f,Jn:c[4],Oi:Mi(c[5]),Uz:c[6]==af?!0:!1}};default:return null}}function WGa(a,b,c,d,e){b=a.g.hb(d[G],d.top,d[r],d[A],c.LE,b);RS(a,b,gxa,e)}
function XGa(a,b,c,d,e){for(var f=a.g.Ba(),g=0;g<d.O[J];++g){var k=a,l=f,n=d.O[g],p=e,s=c.gA[n.id].pe;QS(k,l,n,!1,p,[s[ic]],yF);aj(n.en)||(QS(k,l,n,!0,p,[s.en],zta),QS(k,l,n,!1,p,[s.border],ND))}a.g[q](b,f)}
function QS(a,b,c,d,e,f,g){var k=d?c.en:c.YC,l=c.id;(g=null!=g?MS([g,l]):null)&&(a.td[g]=a.td[g]||[]);for(l=0;l<k[J];++l){var n;n=k[l];var p=new pL;kHa(p,n.NJ,VH);for(var s=0;s<n.MJ[J];s++)kHa(p,n.MJ[s],Mya);n=p;if(0<n.md[J])for(p=0;p<f[J];++p)if(s=a.g.sa(n,f[p],b))TS(a,s,[Af,yF,c.nQ?af:Xe,e?af:Xe,c.id,d?af:Xe]),g&&a.td[g][C](s)}}
function kHa(a,b,c){b=b.k;var d=b[J];if(!(1>=d)){var e=c==VH?0:d-1,d=c==VH?d:-1;c=c==VH?1:-1;for(var f=e;f!=d;f+=c){var g=b[f][0],k=b[f][1];f==e?a[Hz](g,k):a.da(g,k)}a[bz]()}}
function OS(a,b,c,d,e){var f=a.g;c=gj(c);mj(c,function(a,b){return b[Ry]-a[Ry]});for(var g=0;g<c[J];++g){var k=c[g],l=f.Ba();TS(a,l,[Gf,dH,af,d?af:Xe,k.Jn,k.Oi,k.Uz?af:Xe]);f[q](b,l);a.fb.d5===Us?f.Sd(k[Wc],k.x,k.y,20,iE,iE,{ab:e,fontSize:k[Ry],color:k.brush.cb(),opacity:k.brush.Pe,lc:O,bold:!1,Se:!1,Tc:!1},l):f.oe(k.x,k.y,k[Ry],k.brush,l);k=MS([dH,k.Jn]);a.td[k]=l.a()}}
function cHa(a,b){var c=a.g,d=a.XA.rA;Z(d,function(a){if(!$i(b.rA,a)){a=MS([dH,a]);a=ll(this.td[a]);for(var d=1;d<a[J];++d)c.Yf(a[d])}},a);Z(b.rA,function(a){if(!$i(d,a)){a=MS([dH,a]);a=this.td[a];var b=ml(a).cloneNode(!0);c.pj(b,fHa);a[q](b)}},a)}function ZGa(a,b){if(b.Ei){var c=b.Ei,d=a.g,e=a.Rw;SGa(c.jZ,d,e);TGa(c.kZ,d,e);UGa(c.lZ,d,e)}}

    NS[K].B = function () {
        Rt(this.yc);
        null != this.Lia && this.g.Yf(this.Lia);
        this.g[Yb]();
        wt(this.XA);
        this.XA = null;
        this.iu && this.g.Yf(this.iu.a());
        this.iu = null;
        this.Lw && this.g.Yf(this.Lw.a());
        this.Lw = null;
        this.Qw && this.g.Yf(this.Qw.a());
        this.Qw = null;
        this.Rw && this.g.Yf(this.Rw.a());
        this.Rw = null;
        this.Gw && this.g.Yf(this.Gw.a());
        this.Gw = null;
        NS.e.B[L](this)
    };
    NS[K].Zi = function (a) {
        return X(a, this)
    };
    NS[K].zC = function () {
        return this.g.zC()
    };
    function US(a) {
        this.selection = new zO;
        this.Fu = this.Vj = this.gI = this.rf = null;
        if (null != a) {
            this[Ux][qy](a[Ux]);
            var b = new Bn([a]);
            this.rf = Un(b, oua);
            this.gI = Un(b, pua);
            if (null != Fn(b, Ota)) {
                a = Nn(b, Sta);
                var c = Jn(b, Pta), d = Nn(b, Qta), b = Nn(b, Rta);
                null != a && null != d && null != b && null != c && (this.Vj = {Oi: a, pH: c, origin: {x: d, y: b}})
            }
        }
    }

    Ia(US[K], function () {
        var a = new US;
        a.selection = this[Ux][Bc]();
        a.rf = hk(this.rf);
        a.Vj = hk(this.Vj);
        a.Fu = hk(this.Fu);
        return a
    });
    $a(US[K], function (a) {
        return dn(this) == dn(a)
    });
    function lHa(a, b) {
        var c = new Fl(-5, -5, -5, -5);
        this.Om = b[Bc]().expand(c);
        c = 2 * Rk(a) / 5;
        this.z$ = new Pk(c, c)
    }

    lHa[K].W$ = function (a, b, c) {
        var d = b.JV, e = b.Yz.ac();
        b = la(a.lat);
        a = la(a.lng);
        a < d.jh[1] ? a += 360 : a > d.ri[1] && (a -= 360);
        c = Rk(this.z$) / 2 / c / (e[A] / (d.ri[0] - d.jh[0]));
        return {ri: [b + c, a + c], jh: [b - c, a - c]}
    };
    function mHa(a, b) {
        var c = Xi(a.Hz, function (a) {
            return a.Oi == b
        });
        if (!c)return !1;
        var d = a[$q].Yz, c = Mk(new Kk(c.x, c.y), new Kk(d[G] + d[r] / 2, d.top + d[A] / 2)), d = Rk(d.ac()) / 2;
        return c < .9 * d
    }

    function VS(a, b, c, d) {
        this.tg = !a.zC() && In(b, Ewa);
        this.o = c;
        this.bb = d;
        this.uD = this.VJ = null
    }

    Hp(VS[K], function (a, b) {
        if (!this.tg)return !1;
        if (nHa(this, a) || this.QX(a, b))return !0;
        var c = a.Wu == yF;
        return a[$].sJ && c ? !0 : !1
    });
    VS[K].QX = function (a, b) {
        if (a[H] != fH)return !1;
        if (a[$].Rn) {
            if (!a[$].Uz)return !1;
            if (b && mHa(b, a[$].Oi))return !0;
            oHa(this);
            this.VJ = ba[xq](this.Zi(function () {
                this.VJ = null;
                this.o.Fu = {Jn: a[$].Jn, Oi: a[$].Oi};
                PP(this.bb, 0)
            }), 300);
            return !0
        }
        oHa(this);
        return !1
    };
    function nHa(a, b) {
        if (!a.o.Fu)return !1;
        switch (b[H]) {
            case eH:
            case zF:
                var c;
                b[$].sJ ? c = !1 : (WS(a), c = !0);
                return c;
            case fH:
            case AF:
                if (b[$].Rn) {
                    c = b.Wu == dH;
                    var d = b.Wu == bH;
                    b[$].sJ && !d ? XS(a) : c && (b[$].Uz ? XS(a) : WS(a))
                } else null === a.uD && (c = b.Wu == dH, (b[$].sJ || c) && pHa(a));
                return !1;
            case BF:
                return b.Wu == bH ? (pHa(a), c = !0) : c = !1, c;
            default:
                return !1
        }
    }

    function pHa(a) {
        XS(a);
        a.uD = ba[xq](a.Zi(function () {
            this.uD = null;
            WS(this)
        }), 500)
    }

    function WS(a) {
        a.o.Fu = null;
        PP(a.bb, 0)
    }

    function oHa(a) {
        null !== a.VJ && (bi[cq](a.VJ), a.VJ = null)
    }
function XS(a){null!==a.uD&&(bi[cq](a.uD),a.uD=null)}VS[K].Zi=function(a){return X(a,this)};function qHa(a,b,c,d){this.R3=h.pow(a,2);this.Q3=h.pow(b,2);this.Vsa=b;this.S3=(this.Hq=c?new Pm(d[EA](c[y]),d[EA](c.end)):null)?this.Hq.end-this.Hq[y]:null;this.hfa=d}function rHa(a,b){var c=null;null!=b&&null!=a.hfa&&(b=a.hfa[EA](b));if(null!=b&&null!=a.Hq)0===a.S3&&b===a.Hq[y]?c=(a.Q3+a.R3)/2:b<=a.Hq[y]?c=a.R3:b>=a.Hq.end&&(c=a.Q3);else if(!a.S3||null==b)return a.Vsa;null==c&&(b=Aj(b,a.Hq[y],a.Hq.end),c=Cj(a.R3,a.Q3,(b-a.Hq[y])/a.S3));return h[E](h[zd](c))}

    function sHa(a, b) {
        var c = Pn(a, Eza), d = Pn(a, Cza);
        if (c > d)throw m("sizeAxis.minSize (" + c + ") must be at most sizeAxis.maxSize (" + d + Oe);
        var e = Nn(a, Fza), f = Nn(a, Dza);
        if (null != e && null != f && e > f)throw m("sizeAxis.minValue (" + e + ") must be at most sizeAxis.maxValue (" + f + Oe);
        e = Yea(b, e, f);
        f = eS(a, Bza, Gza);
        f = YFa(f, ia, []);
        return new qHa(c, d, e, f)
    }

    function YS(a) {
        this.b = a || {}
    }

    Y(YS, CS);
    YS[K].OX = function () {
        return 1
    };
    YS[K].yE = function (a) {
        return Ti(arguments, function (a) {
            return {x: a[1], y: a[0]}
        })
    };
    function tHa(a, b, c, d, e, f) {
        this.b = a;
        var g = LGa(a);
        this.TV = new JS[g[Cd]](g);
        this.Q = b;
        this.qa = c;
        var k = en(co(a, zD)), g = b - k, k = c - k, l = h[E]((b - g) / 2), n = h[E]((c - k) / 2);
        this.wr = new Il(l, n, g, k);
        l = this.wr;
        if (Jn(a, Zva))var p = l[r], n = l[A], s = this.TV.OX(), g = h.min(p, h[E](n * s)),
            k = h[E]((p - g) / 2) + l[G], p = h.min(n, h[E](p / s)), l = h[E]((n - p) / 2) + l.top,
            g = new Il(k, l, g, p); else g = l[Bc]();
        this.Wt = g;
        this.Ld = d;
        this.t = e;
        this.fb = f;
        this.L5 = Pn(a, NF, h[E](h.pow(2 * (this.wr[r] + this.wr[A]), 1 / 3)));
        this.xha = Wn(a, [Kwa, Jwa], iB);
        this.yha = Pn(a, Lwa, 1);
        this.RV = Tn(a, MF);
        this.Qq = uHa(this);
        this.TE = vHa(this);
        d = a.S(JG);
        this.via = hi(d) == jh;
        this.gO = $n(a, LG, JGa, SD);
        this.f7 = Rn(a, awa, 1 / 3);
        this.fO = $n(a, ewa, GGa, Tg);
        this.g7 = fo(a, MG, {ab: this.RV, fontSize: this.L5});
        this.oW = Un(a, dwa);
        this.nia = Wn(a, ata, O);
        this.bN = Wn(a, hta, O);
        this.x5 = wHa(this);
        this.zha = xHa(this);
        d = fo(a, NAa);
        e = Wea(d);
        this.tA = $n(a, ZJ, ho, Kg);
        this.tt = this.tA != Q;
        this.Br = {normal: d, bold: e};
        d = In(a, KAa);
        this.Zha = In(a, MAa);
        this.Yha = d ? Vla : Ula;
        this.mX = In(a, GAa);
        this.Ria = 10;
        this.aW = this.tp = this.wA = null;
        this.eA =
iB;this.wF=null;this.wha=Rn(a,Nwa);this.$ha=new lHa(this.Wt.ac(),new Fl(0,b,c,0))}function yHa(a,b){for(var c=0,d=a.wA[J];c<d;c++)for(var e=a.wA[c].pX.O,f=0,g=e[J];f<g;f++){var k=e[f];if(k.id==b)return k}return null}function zHa(a,b){var c=AHa(a,a.nia),d={};Z(b[Qy],function(a){Z(a.O,function(a){d[a.id]={pe:c}},this)},a);return d}
function BHa(a,b){for(var c=new HS,d=1;10>d;d++){var e=(a.ri[1]-a.jh[1])/10*d+a.jh[1],f=(a.ri[0]-a.jh[0])/10*d+a.jh[0],e=b.yE([f,a.jh[1]],[f,a.ri[1]],[a.jh[0],e],[a.ri[0],e]);c.track[Sc](c,e)}d=c[sy](AK);c=c[sy](Wh);return{ri:[c.max,d.max],jh:[c.min,d.min]}}W=tHa[K];
W.V6=function(a,b,c,d){for(var e=CHa(this,Nda(Pj(d.YC),Pj(d.en)));e[1]>a.ri[1];)e[1]-=360;for(;e[1]<a.jh[1];)e[1]+=360;return{id:d.id,center:this.EZ(a,b,c,e),YC:Ti(d.YC,X(this.Bea,this,a,b,c)),en:Ti(d.en,X(this.Bea,this,a,b,c)),nQ:d.id!=Wpa}};function CHa(a,b){var c=0,d=0,e=0;Qj(b,function(a){Z(a.NJ,function(a){c+=a[0];d+=Bj(a[1],360);e++},this)},a);return[c/e,d/e]}W.Bea=function(a,b,c,d){return{NJ:this.Afa(a,b,c,d.NJ),MJ:Ti(d.MJ,X(this.Afa,this,a,b,c))}};
W.Afa=function(a,b,c,d){return{k:Ti(d,X(this.EZ,this,a,b,c))}};W.EZ=function(a,b,c,d){var e=a.jh;a=a.ri;var f=b[r],g=b[A],k=b[G];b=b.top;c=c.yE(d)[0];return[k+f*(c.x-e[1])/(a[1]-e[1]),b+g*(1-(c.y-e[0])/(a[0]-e[0]))]};function DHa(a,b){var c=[];a.tp=[];for(var d=Ti(a.wA,function(a){return a.pX}),e=0;e<b[J];++e){var f=b[e],g={location:f,KX:{}};if(null!=f){f=EHa(a,e,f,d);ij(c,f);for(var k=0;k<f[J];k++){var l=f[k];g.KX[l.Jn]=l}}a.tp[C](g)}FHa(c);return c}
function FHa(a){for(var b=0;b<a[J];b++){for(var c=a[b],d=new Kk(c.x,c.y),e=0,f=0;f<a[J];f++)if(b!=f){var g=a[f],k=Mk(d,new Kk(g.x,g.y));k<c[Ry]+g[Ry]&&(e+=c[Ry]+g[Ry]-k)}c.Uz=e>c[Ry]}}
function EHa(a,b,c,d){var e=a.zha(b),f=a.x5(b);if(null==f)return[];var f=new bn({stroke:a.xha,ua:a.yha,fill:f,Ce:a.wha}),g=la(c.lat),k=[];c=la(c.lng);c=[c,c+360,c-360];for(var l=0;l<d[J];++l){var n=d[l],p=a.wF[l],s=n.JV;if(!(g<s.jh[0]||g>s.ri[0])){for(var u=0;u<c[J];++u){var v=c[u];if(!(v<s.jh[1]||v>s.ri[1])){var v=a.EZ(n.Vt,n.Yz,p,[g,v]),z=String(b+Te+n.id+Te+u),B=dH;null!=a.fb.pI&&0<=a.fb.pI?B=a.t.Ea(b,a.fb.pI):null!=a.fb.YH&&0<=a.fb.YH?B=a.t.Ea(b,a.fb.YH):null!=a.fb.XH&&0<=a.fb.XH?B=a.t.Ea(b,a.fb.XH):
null!=a.fb.bC&&null!=a.fb.cC&&0<=a.fb.bC&&0<=a.fb.cC&&(B=GHa(a.t[I](b,a.fb.bC),a.t[I](b,a.fb.cC)));k[C]({Jn:z,label:B,Oi:b,x:v[0],y:v[1],size:e,brush:f,Uz:!1})}}if(0<k[J])break}}return k}
function HHa(a,b,c){var d=a.tp,e=d[c],f=e.KX[b];if(!f.Uz)return null;var g=b[rc](Te)[1],k=a.wA[g],l=a.wF[g],n=Mn(a.b,Fwa),p=a.$ha,e=p.W$(e[xc],k.pX,n),f=new Kk(f.x,f.y),n=p.Om,p=p.z$,s=f.x;s+p[r]>n[cd]&&(s=f.x-p[r]);var u=f.y-p[A];u<n.top&&(u=f.y);p=new Il(s,u,p[r],p[A]);l=BHa(e,l);c={id:g+Te+c+rma,Vt:l,JV:e,Yz:p,O:Ti(k.O,X(a.V6,a,e,p,new YS))};g=[];for(k=0;k<d[J];k++)l=d[k][xc],null!=l&&ij(g,EHa(a,k,l,[c]));return{Jn:b,I7:f,view:c,Hz:g}}
function IHa(a,b){if(!a.via||null==a.Qq||!a.Qq.Wk)return null;var c=a.g7[yc],d=a.wr[r],e=a.wr[A],f={top:0,left:0,width:a.fO==Tg?d*a.f7:e*a.f7,height:1.5*c,orientation:a.fO,ba:a.g7,c$:JD,d$:a.oW};f.top=a.gO==bK||a.gO==VAa?3*c:a.fO==Rh?e-c-f[r]:e-c-f[A];Za(f,a.gO==bK||a.gO==SD?.5*c:a.fO==Rh?d-c-f[A]:d-c-f[r]);Za(f,f[G]+a.wr[G]);f.top+=a.wr.top;return BS(a.Qq,f,b,a.Ld)}function JHa(a,b){for(var c=null,d=0;d<a.t.M();++d)var e=a.t[I](d,b),c=Ym(c,e);return c}
function wHa(a){var b=a.fb.pu;return null!=b?function(a){a=this.t[I](a,b);return null!=a?OR(this.Qq,a):this.bN}:function(){return this.bN}}function xHa(a){var b=a.fb.fC;return null!=b?function(a){a=this.t[I](a,b);return rHa(this.TE,a)}:function(){return this.Ria}}function uHa(a){var b=a.fb.pu;if(null==b)return null;b=JHa(a,b);return BFa(a.b,b)}function vHa(a){var b=a.fb.fC,b=null!=b?JHa(a,b):null;return sHa(a.b,b)}
function KHa(a,b){var c={pA:[],rA:[]};null!=b.rf&&(c.pA=[b.rf]);null!=b.gI&&(c.rA=[b.gI]);c.kr=[];var d=a.tt&&(a.tA===xg||a.tA===zh);Z(IO(b[Ux]),function(a){var b=LHa(this,a,!1),e=this.Ld,f=this.Br.normal[yc],g=new Fl(0,this.Q-1,this.qa-1,0),u=this.tp[a];a=(a=this.aW[a])&&yHa(this,a);var v=null,z=null;a?(c.pA[C](a.id),d&&(v=z=new Kk(a[Sx][0],a[Sx][1]),c.kr[C](NP(b,e,!1,z,g,v,void 0,this.mX)))):u&&Sj(u.KX,function(a,k){c.rA[C](k);d&&c.kr[C](NP(b,e,!1,new Kk(a.x-f,a.y-f),g,new Kk(a.x,a.y),void 0,this.mX))},
this)},a);if(null!=b.Vj){if(a.tt&&(a.tA===xg||a.tA===Kg)){var e=LHa(a,b.Vj.Oi,b.Vj.pH),f=a.Br.normal[yc],g=new Kk(b.Vj[Mx].x,b.Vj[Mx].y);c.kr[C](NP(e,a.Ld,!1,new Kk(g.x-f,g.y-f),new Fl(0,a.Q-1,a.qa-1,0),g,void 0,a.mX))}null!=a.fb.pu&&(e={value:a.t[I](b.Vj.Oi,a.fb.pu)},c.Ei=IHa(a,[e]))}null!=b.Fu&&(c.jF=HHa(a,b.Fu.Jn,b.Fu.Oi));return c}function MHa(a,b,c){b=0<=a?c:b;a=h.abs(a);c=h[t](a);var d=60*(a-c);a=h[t](d);d=h[E](60*(d-a));return c+NBa+a+Me+d+ue+b}
function GHa(a,b){return MHa(a,Qf,Lf)+se+MHa(b,eg,zf)}
function LHa(a,b,c){var d=a.fb,e=a.t,f={entries:[]},g;if(null!=d.pI)g=e.Ea(b,d.pI);else switch(d.JZ){case As:c=e[I](b,d.bC);g=e[I](b,d.cC);g=GHa(c,g);break;case Ms:g=e.Ea(b,d.XH);c&&(g=LR(a.Yha,g));break;case bs:g=e.Ea(b,d.YH);break;default:g=O}a.Zha&&(c=LP(g,a.Br[Id]),f[qA][C](c));if(null!=d.E_)if(c=e.Ea(b,d.E_),e.gj(d.E_,Vg))f[qA][C](LP(c,a.Br.normal,void 0,void 0,void 0,void 0,void 0,!0));else for(b=c[rc](re),d=0;d<b[J];d++)c=LP(b[d],a.Br.normal),f[qA][C](c);else null!=d.pu&&(g=e.Ra(d.pu),c=e.Ea(b,
    d.pu), c = LP(c, a.Br[Id], g, a.Br.normal), f[qA][C](c)), null != d.fC && d.fC != d.pu && (g = e.Ra(d.fC), c = e.Ea(b, d.fC), c = LP(c, a.Br[Id], g, a.Br.normal), f[qA][C](c));
    return f
}

    W.Zi = function (a) {
        return X(a, this)
    };
    function AHa(a, b) {
        var c = b === Q ? [255, 255, 255] : Hm(b), c = Fm(Mm(c, .1));
        return {
            fill: new bn({stroke: c, fill: b}),
            en: new bn({stroke: Q, pattern: new an(zI, b, b == a.eA ? ze : a.eA)}),
            border: new bn({stroke: c})
        }
    }

    function ZS(a, b, c, d, e, f, g, k, l) {
        this.zl = a;
        this.b = b;
        this.Q = c;
        this.qa = d;
        this.fb = f;
        this.o = g;
        this.Dm = null;
        this.fX = !1;
        this.Yja = k;
        this.Un = l;
        this.vV = !1;
        this.wV = null;
        this.L6 = !1;
        this.bb = new OP(this.Zi(this.er));
        this.NB = new nQ(3);
        this.lP = [!1, !1, !1];
        this.Vz = new tHa(this.b, this.Q, this.qa, this.zl.Qf, e, this.fb);
        this.M6 = new VS(a, b, g, this.bb);
        this.P7 = In(b, Uta, f.d5 == Ns);
        this.NX()
    }

    Y(ZS, ut);
    W = ZS[K];
    W.m3 = function (a, b) {
        var c;
        c = this.Vz;
        var d = c.b;
        c.wA = [];
        c.wF = [];
        for (var e = [], f = 0, g = a[Qy][J]; f < g; f++) {
            var k = a[Qy][f], l = c.TV.kd();
            l.boundingBox = {lo: k.Vt.jh, hi: k.Vt.ri};
            l = new c.TV[uc](l);
            c.wF[C](l);
            var l = c, n = k, p = f,
                s = new Il(n.xia * l.Wt[r] + l.Wt[G], n.yia * l.Wt[A] + l.Wt.top, n[mz] * l.Wt[r], n[mz] * l.Wt[A]),
                u = l.wF[p], v = BHa(n.Vt, u),
                l = {id: String(p), Vt: v, JV: n.Vt, Yz: s, O: Ti(n.O, X(l.V6, l, v, s, u))};
            e[C](l);
            c.wA[C]({O: k.O, pX: l})
        }
        c = {
            width: c.Q,
            height: c.qa,
            jha: c.Wt,
            Kz: $n(d, dJ, nfa, Bh),
            jwa: c.tA,
            LE: co(d, zD),
            W4: Yn(d, YF),
            title: {
                text: Tn(d,
UJ),ba:fo(d,WJ,{ab:c.RV,fontSize:c.L5}),I:[],align:AJ,sb:O},views:e,gA:zHa(c,a),pA:[],rA:[],Hz:[],Ei:null,jF:null,lk:c.RV};this.IF(0,c);this.vV=!0;this.Un(Hwa,b);null!=this.wV?this.wV():this.er()};
function NHa(a,b,c,d,e,f){a.fX=!1;var g=a.Zi(function(){this.L6=d;if(null!=e){this.Dm=null;var a=this.Vz;a.t=e;a.Qq=uHa(a);a.TE=vHa(a)}null!=f&&(this.o=f,this.M6.o=f);a=this.Vz;a.aW=[];for(var g={},n=0;n<a.t.M();++n){var p=b[n];a.aW[C](p);if(null!=p){var s=a.x5(n);null!=s&&(g[p]={Oi:n,pe:AHa(a,s)})}}a={gA:g,Hz:DHa(a,c),Ei:IHa(a,[])};this.IF(1,a);this.er()});a.vV?g():a.wV=g}Cw(W,function(a){this.o[Ux][qy](a);PP(this.bb,1)});xx(W,function(){return this.o[Ux][hA]()});
W.er=function(){if(this.vV){if(null==this.Dm||!this.Dm[Mz](this.o)){var a=KHa(this.Vz,this.o);this.IF(2,a)}a=this.NB[tz]();if(this.lP[0])VGa(this.zl,a);else if(this.lP[1]){var b=this.zl;hHa(b,a);eHa(b,a);PS(b,a,!0)}else PS(this.zl,a);this.lP=[!1,!1,!1];this.Dm=this.o[Bc]();!this.fX&&this.L6&&(this.Yja(),this.fX=!0)}};
W.tpa=function(a){if(!$S(this,a)&&this.P7){var b=a[$].xr;null!==b&&(a[$].Rn?(this.o.rf=b,b=OHa(this,b),this.o.Vj=null!=b?{Oi:b,pH:a[$].pH,origin:{x:a[$].xb.x,y:a[$].xb.y}}:null):(this.o.rf=null,this.o.Vj=null),PP(this.bb,50))}};W.wpa=function(a){$S(this,a)||(a[$].Rn?(this.o.gI=a[$].Jn,this.o.Vj={Oi:a[$].Oi,pH:!1,origin:{x:a[$].xb.x,y:a[$].xb.y}}):(this.o.gI=null,this.o.Vj=null),PP(this.bb,50))};W.upa=function(a){$S(this,a)||PHa(this,a)};W.xpa=function(a){PHa(this,a)};
function PHa(a,b){null!=a.o.Vj&&(a.o.Vj.origin={x:b[$].xb.x,y:b[$].xb.y},PP(a.bb,3))}W.spa=function(a){if(!$S(this,a)&&this.P7){var b=a[$].xr;null===b||this.Un(hya,{region:b});b=OHa(this,b);this.ww(a,b)}};W.vpa=function(a){$S(this,a)||this.ww(a,a[$].Oi)};W.ww=function(a,b){var c=this.NB[tz]().Kz==Bh;if(null!=b)aP(this.o[Ux],b,c),this.Un(Ps,{});else this.o[Ux][Yb]();this.bb&&PP(this.bb,50)};function $S(a,b){var c=a.NB[tz]();return a.M6[nq](b,c?c.jF:null)}
W.NX=function(){this.zl.m(zF,this.Zi(this.spa));this.zl.m(AF,this.Zi(this.tpa));this.zl.m(BF,this.Zi(this.upa));this.zl.m(eH,this.Zi(this.vpa));this.zl.m(fH,this.Zi(this.wpa));this.zl.m(Mwa,this.Zi(this.xpa))};function OHa(a,b){if(null===b)return null;var c=a.NB[tz]();return c.gA[b]?c.gA[b].Oi:null}W.IF=function(a,b){oQ(this.NB,a,b);this.lP[a]=!0};W.B=function(){wt(this.bb);this.bb=null;wt(this.zl);this.zl=null;wt(this.Vz);this.Vz=null;ZS.e.B[L](this)};W.Zi=function(a){return X(a,this)};var QHa={COM:{COUNTRIES:["002","005","009","011","013","014","015","017","018","019","021","029","030","034","035","039","053","054","057","061","142","143","145","150","151","154","155","AD","AE","AF","AG","AI","AL","AM","AO","AR","AS",eC,"AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ",pf,"BS","BT","BV","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CR","CU","CV","CW","CX","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG",
"EH","ER","ES","ET","FI","FJ","FK","FM","FO","FR","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM","HN",Df,"HT","HU","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC",HC,"LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL",
"NO","NP","NR","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SV","SX","SY","SZ","TC",TC,"TF","TG","TH","TJ","TK",Yf,"TM","TN","TO",Zf,"TT","TV","TW","TZ","UA","UG","UM",WC,"UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","XK","YE","YT","ZA","ZM","ZW",zK],METROS:[WC,"US-500","US-501","US-502","US-503","US-504","US-505","US-506","US-507","US-508",
"US-509","US-510","US-511","US-512","US-513","US-514","US-515","US-516","US-517","US-518","US-519","US-520","US-521","US-522","US-523","US-524","US-525","US-526","US-527","US-528","US-529","US-530","US-531","US-532","US-533","US-534","US-535","US-536","US-537","US-538","US-539","US-540","US-541","US-542","US-543","US-544","US-545","US-546","US-547","US-548","US-549","US-550","US-551","US-552","US-553","US-554","US-555","US-556","US-557","US-558","US-559","US-560","US-561","US-563","US-564","US-565",
"US-566","US-567","US-569","US-570","US-571","US-573","US-574","US-575","US-576","US-577","US-581","US-582","US-583","US-584","US-588","US-592","US-596","US-597","US-598","US-600","US-602","US-603","US-604","US-605","US-606","US-609","US-610","US-611","US-612","US-613","US-616","US-617","US-618","US-619","US-622","US-623","US-624","US-625","US-626","US-627","US-628","US-630","US-631","US-632","US-633","US-634","US-635","US-636","US-637","US-638","US-639","US-640","US-641","US-642","US-643","US-644",
"US-647","US-648","US-649","US-650","US-651","US-652","US-656","US-657","US-658","US-659","US-661","US-662","US-669","US-670","US-671","US-673","US-675","US-676","US-678","US-679","US-682","US-686","US-687","US-691","US-692","US-693","US-698","US-702","US-705","US-709","US-710","US-711","US-716","US-717","US-718","US-722","US-724","US-725","US-734","US-736","US-737","US-740","US-743","US-744","US-745","US-746","US-747","US-749","US-751","US-752","US-753","US-754","US-755","US-756","US-757","US-758",
"US-759","US-760","US-762","US-764","US-765","US-766","US-767","US-770","US-771","US-773","US-789","US-790","US-798","US-800","US-801","US-802","US-803","US-804","US-807","US-810","US-811","US-813","US-819","US-820","US-821","US-825","US-828","US-839","US-855","US-862","US-866","US-868","US-881","US-AK","US-AL","US-AR","US-AZ","US-CA","US-CO","US-CT","US-DC","US-DE","US-FL","US-GA","US-HI","US-IA","US-ID","US-IL","US-IN","US-KS","US-KY","US-LA","US-MA","US-MD","US-ME","US-MI","US-MN","US-MO","US-MS",
"US-MT","US-NC","US-ND","US-NE","US-NH","US-NJ","US-NM","US-NV","US-NY","US-OH","US-OK","US-OR","US-PA","US-RI","US-SC","US-SD","US-TN","US-TX","US-UT","US-VA","US-VT","US-WA","US-WI","US-WV","US-WY"],PROVINCES:["AD","AE","AF","AG","AL","AM","AO","AR",eC,"AU","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BN","BO","BQ",pf,"BS","BT","BW","BY","BZ","CA","CD","CF","CG","CH","CI","CL","CM","CN","CO","CR","CU","CV","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","EH","ER","ES","ET","FI","FJ",
"FM","FR","GA","GB","GD","GE","GH","GL","GM","GN","GQ","GR","GT","GW","GY","HN",Df,"HT","HU","ID","IE","IL","IN","IQ","IR","IS","IT","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KZ","LA","LB","LC",HC,"LK","LR","LS","LT","LU","LV","LY","MA","MD","ME","MG","MH","MK","ML","MM","MN","MR","MU","MV","MW","MX","MY","MZ","NA","NE","NG","NI","NL","NO","NP","NR","NZ","OM","PA","PE","PG","PH","PK","PL","PT","PW","PY","QA","RO","RS","RU","RW","SA","SB","SC","SD","SE","SH","SI","SK","SL","SM",
"SN","SO","SR","SS","ST","SV","SY","SZ",TC,"TG","TH","TJ",Yf,"TM","TN","TO",Zf,"TT","TV","TZ","UA","UG",WC,"US-AK","US-AL","US-AR","US-AZ","US-CA","US-CO","US-CT","US-DC","US-DE","US-FL","US-GA","US-HI","US-IA","US-ID","US-IL","US-IN","US-KS","US-KY","US-LA","US-MA","US-MD","US-ME","US-MI","US-MN","US-MO","US-MS","US-MT","US-NC","US-ND","US-NE","US-NH","US-NJ","US-NM","US-NV","US-NY","US-OH","US-OK","US-OR","US-PA","US-RI","US-SC","US-SD","US-TN","US-TX","US-UT","US-VA","US-VT","US-WA","US-WI","US-WV",
"US-WY","UY","UZ","VC","VE","VN","VU","YE","ZA","ZM","ZW"],REGIONS:["002","009","019","142","150",zK],SUBREGIONS:["002","005","009","011","013","014","015","017","018","019","021","029","030","034","035","039","053","054","057","061","142","143","145","150","151","154","155",zK]},IN:{COUNTRIES:["002","009","019","030","034","035","142","143","145","151","AF","BD","BT","CN","IN","MM","NP","PK","RU","TJ","UZ",zK],PROVINCES:"AF BD BT CN IN MM NP PK RU TJ UZ".split(" "),REGIONS:["002","009","019","142",
zK],SUBREGIONS:["002","009","019","030","034","035","142","143","145","151",zK]}};var aT={},bT={},cT=null,RHa=NR(ts,bf),dT=RHa;function SHa(a,b,c){dT=a?a+jr:RHa;bT={};eT=null;a?sS(wS(dT+Ova,$ua),function(a){fT=a;b()},function(){c()}):(fT=QHa,b())}
function THa(a,b){if(null==b)throw m("Callback is null or undefined");var c=UHa(a);if(ci(bT[c])){var d=X(b,null,bT[c]);qw(d,0)}else if(ci(aT[c]))aT[c][C](b);else aT[c]=[b],d=dT+LR(Iwa,c),sS(wS(d,Yua+c[wb](Te,Be)),function(a){var b={views:Ti(a[Qy],VHa)};bT[c]=b;Z(aT[c],function(a){a(b)});delete aT[c]},function(){Z(aT[c],function(a){a(null)});delete aT[c]})}function UHa(a){var b=O;a[Jz]!=mC&&(b=a[Jz]+$C);return b+a.Cv+$C+WHa(a.xn)}
function WHa(a){null!=cT||(cT={continents:kpa,subcontinents:ppa,countries:CC,provinces:cpa,metros:Voa});return cT[a]}var fT=QHa;function XHa(a){var b=a[Jz],c=a.Cv;a=WHa(a.xn);if(b=fT[b])if(b=b[a])return 0<=kj(b,c);return!1}var eT=null;function YHa(a){null!=eT?a(eT):sS(wS(dT+Nva,Zua),function(b){eT=b=Ti(b,ZHa);a(b)},function(){a(null)})}
function VHa(a){for(var b=Ti(a.features,$Ha),c={},d=[],e=0;e<b[J];e++){var f=b[e],g=f.id;yi(g,Vpa)?c[g]=f:d[C](f)}for(e=0;e<d[J];e++)f=d[e],b=c[Vpa+f.id],f.en=b?b.YC:[];if(c=c.__DISPUTED__All)c.en=c.YC,d[C](c);return{O:d,Vt:aIa(a.boundingBox),xia:a.xoffset,yia:a.yoffset,scale:a[mz]}}function $Ha(a){return{id:a.id,YC:Ti(a.polygons,bIa),en:[]}}function bIa(a){return li(a)?{NJ:gT(a),MJ:[]}:{NJ:gT(a.shell),MJ:Ti(a.holes,gT)}}function gT(a){return Ti(a,function(a){return[GS(a[0]),la(a[1])]})}

    function aIa(a) {
        return {ri: [GS(a.hi[0]), la(a.hi[1])], jh: [GS(a.lo[0]), la(a.lo[1])]}
    }

    function ZHa(a) {
        return {Cv: a.region, xn: a.resolution, domain: a[Jz], sqa: Ti(a.boundingBoxes, aIa)}
    }

    function cIa(a, b, c, d) {
        var e = Tn(c, HI);
        if (e != sg) d(hT(e, c)); else if (b.JZ != As) d(hT(zK, c)); else {
            for (var f = ao(c, LI, HGa), g = Un(c, ms), k = [], e = 0; e < a.M(); ++e)k[C]({
                lat: a[I](e, b.bC),
                lng: a[I](e, b.cC)
            });
            YHa(function (a) {
                if (a) {
                    t:{
                        for (var b = 0; b < a[J]; ++b) {
                            var e = a[b];
                            if (null == f || e.xn == f)if (null == g || e[Jz] == g) {
                                for (var s = !0, u = 0; u < k[J]; ++u) {
                                    for (var v = k[u], z = !1, B = e.sqa, D = 0; D < B[J]; ++D)if (dIa(v, B[D])) {
                                        z = !0;
                                        break
                                    }
                                    if (!z) {
                                        s = !1;
                                        break
                                    }
                                }
                                if (s) {
                                    a = {Cv: e.Cv, xn: e.xn, domain: e[Jz]};
                                    break t
                                }
                            }
                        }
                        a = null
                    }
                    null != a ? d(a) : d(hT(zK, c))
                } else d(null)
            })
        }
    }

    function hT(a, b) {
        var c = $n(b, LI, HGa, TE), d = Tn(b, ms), c = {Cv: a, xn: c, domain: d};
        return XHa(c) || c[Jz] != mC && (c.domain = mC, XHa(c)) ? c : null
    }

    function dIa(a, b) {
        return a.lat > b.jh[0] && a.lat < b.ri[0] && Vi([-360, 0, 360], function (c) {
                return a.lng + c > b.jh[1] && a.lng + c < b.ri[1]
            })
    }

    function iT(a) {
        Ru[L](this, a);
        this.am = this.Xa = null;
        this.Cy = new KS(this.kv);
        this.Z0 = O;
        this.Oa = this.Xm = null
    }

    Y(iT, Ru);
    W = iT[K];
    W.mm = function (a, b, c, d) {
        no(DB);
        st.mc(this.ra);
        this.Xm = a;
        wt(this.Cy);
        this.Cy = new KS(this.kv);
        a = c || {};
        a = Fo(Co(a));
        var e = new Bn([a, MGa]), f = new US(d);
        this.Oa = this.Au(this.ra, e);
        d = $n(e, xta, Wja, sg);
        var g = (new pv).gd(b, d, this.kv);
        if (null != g) {
            var k = dn({options: a, format: g, size: this.Oa});
            d = this.Xm(function (a) {
                if (null == a)throw m(mpa);
                eIa(this, b, g, e, k, f, a)
            }, this);
            cIa(b, g, e, d)
        }
    };
    W.kk = function () {
        var a = Sk(this.ra)[Sb](P), b = TL(a, this.Oa), c = new OL(a), d = new FL(a, b), b = this.am,
            c = new NS(c, d, b.zl.fb), b = b.NB[tz]();
        VGa(c, b);
        hHa(c, b);
        eHa(c, b);
        PS(c, b, !0);
        PS(c, b);
        return a[Zb][0].toDataURL(Kva)
    };
    W.Au = function (a, b) {
        var c = io(a, b, -1), d = jo(a, b, -1);
        -1 == c && -1 == d ? (c = 556, d = 347) : -1 == c ? c = h[E](556 * d / 347) : -1 == d && (d = h[E](347 * c / 556));
        return new Pk(c, d)
    };
function eIa(a,b,c,d,e,f,g){var k=In(d,tza);if(a.Z0==e)fIa(a,!1,d,b,c,g,k,f,e);else{if(null!=a.Xa)a.Xa[BA](a.Oa,a.Xm);else{var l=In(d,OF);a.Xa=new RL(a.ra,a.Oa,a.Xm,l)}a.Xa.Zq(X(function(){var a=this.Xa.jb(),l=this.Xa.lA(),a=new NS(l,a,c);null!=this.am&&wt(this.am);l=this.Oa;wt(this.am);this.am=new ZS(a,d,l[r],l[A],b,c,f,X(this.Doa,this),X(this.Qba,this));fIa(this,!0,d,b,c,g,k,f,e)},a),a.Xm)}}
function fIa(a,b,c,d,e,f,g,k,l){c=$n(c,Hua,KGa,HI);var n=c===TD||c===xg,p=a.Xm(function(a,b,c){NHa(this.am,a,b,c,d,k)},a),s=X(function(){NGa(this.Cy,d,e,f,g,p)},a);a.Cy.JK=c;b&&(a.Cy.VD=null,THa(f,a.Xm(function(a){null!=a?(this.am.m3(a,f),n&&(this.Cy.m3(a),s()),this.Z0=l):this.kv.Md(mpa)},a)));n||(a.Cy.VD=null,s())}Cw(W,function(a){null!=this.am?this.am[qy](a):this.kv.Md(Epa)});xx(W,function(){if(null!=this.am)return this.am[hA]();this.kv.Md(Epa);return[]});W.Doa=function(){this.Qba(Ls,{})};
W.Qba=function(a,b){Ju(this,a,b)};W.sh=function(){this.Z0=O;wt(this.am);this.am=null;wt(this.Xa);this.Xa=null};di("google.visualization.GeoChart",iT,void 0);aq(iT[K],iT[K][br]);iT[K].getImageURI=iT[K].kk;Cw(iT[K],iT[K][qy]);xx(iT[K],iT[K][hA]);iT[K].clearChart=iT[K].Zf;di("google.visualization.GeoChart.mapExists",function(a){null!=a||(a={});a=new Bn([a,MGa]);var b=Tn(a,HI);return null!=hT(b,a)},void 0);di("google.visualization.GeoChart.setMapsSource",function(a,b,c){SHa(a,function(){b&&b()},function(){c&&c()})},void 0);function jT(a,b,c,d,e){this.iD=a;this.F=b.Ww();this.ke=b;this.zs=null;this.zy=gIa;this.ts=d;this.xS=e;this.No=null}Y(jT,MEa);W=jT[K];aq(W,function(a){this.zs={};this.F[Yb]();this.No=this.iD.qv(a,null);this.No.ac();for(a=0;a<this.zy[J];a++){var b=this.zs[this.zy[a]]=new XL.fe.cV;this.c1(b)}this.No[br](this);hIa(this)});function hIa(a){var b=a.ke.Ww();Z(Zj(a.zs),function(a){b.hu(a)},a)}W.eK=function(a){this.zy=a};Ew(W,function(a){this.uL(a.Ss,!1);this.uL(a.Rs,!0);this.No[br](this)});
W.uL=function(a,b){for(var c=0;c<a[J];c++)for(var d=a[c],e=d.oq,f=0;f<e[J];f++)this.No.wn(e[f],d.rq,b)};W.c1=function(a){function b(a,b){return function(e){a[Sc](b,[this,e])}}a.m(gs,b(function(a,b){kT(this,gs,a,b)},this));a.m(PH,b(function(a,b){kT(this,lG,a,b)},this));a.m(OH,b(function(a,b){kT(this,mG,a,b)},this))};function kT(a,b,c,d){c=d[ar];(c=c[$]()&&c[$]().idStr)&&c!=lg&&(c=YP(c),a.ts(c,b))}W.jb=function(){return this.ke};W.oo=function(a,b,c){var d=a[$]()||{};d.idStr=b.rg();a[$](d);this.zs[c].add(a)};
W.De=function(a,b,c,d){b!==a&&(b&&this.Yf(b),this.oo(a,c,d))};W.Yf=function(a){a&&this.F.oN(a)};var gIa=[yD,UI,TI,bD,aD];function lT(a){Ru[L](this,a);this.So=null}Y(lT,gQ);W=lT[K];W.mm=function(a,b,c){st.mc(this.ra);c=new Bn([c||{},this.nj()||{}]);var d=io(this.ra,c),e=jo(this.ra,c),d=new Pk(d,e);this.So=new XL(d[r],d[A],KJ,this.ra);this.So[lA](X(this.yr,this,b,c,d,a))};W.yr=function(a,b,c,d,e){this.So=e;a=this.Dq(a,b,HK(XL.S5(this.So),function(a,b){var c=[a,b[0]];c[C](JSON[gd](b[1]));return c[me]($C)}),c).Xh();c=HEa(this.So);this.Qd=new fQ(this,c,null,this,b,d);b=new $P;this.Qd[br](a,b)};W.sh=function(){lT.e.sh[L](this)};
W.Ey=function(a,b,c,d){a=new jT(this,a,0,c,d);(b=this.Lfa())&&a.eK(b);return a};W.Lfa=function(){};function iIa(){this.Ys=new lk;this.Y=this.ja=this.vS=null}W=iIa[K];W.wn=function(){};W.EJ=function(a){this.Y=a;this.Ye(a.ac())};W.Ye=function(a){this.ja=a};W.ac=function(){return this.ja};aq(W,function(a){var b=new lk;Z(this.Y.mg,function(c){var d=c.uoa.rg();this.Ys.bf(d)?c.Sm=this.Ys.get(d).Sm:a.zs[c.voa].add(c.Sm());b.set(d,c)},this);Qj(this.Ys.at(!0),function(a){b.bf(a)},this);this.Ys=b;hIa(a)});function mT(a){lT[L](this,a)}Y(mT,lT);mT[K].qv=function(a){var b=new iIa;b.EJ(a);return b};function nT(){this.Qsa=HK(X(this.dua,this));ta(this,X(this.eua,this))}gi(nT);nT[K].eua=function(a,b){return this.Qsa(a).Oc(b)};nT[K].dua=function(a){return new bp({pattern:a,valueType:Ih})};function oT(a,b,c){Qa(this,a);this.ba=b;Ax(this,c||null)}oT[K].mb=function(a){for(var b=this[Wc][rc](re),c=0,d=0,e=b[J];d<e;d++)c=h.max(c,a(b[d],this.ba));return c};function pT(a,b,c,d,e,f,g){this.Q=a;this.xd=b;this.Hf=c;this.Dw=e;this.Cna=f;this.Rm=!0;this.Rg=[];this.A0=d;this.ll=null;this.dG=0;this.Yma=g||null;a=X(this.Noa,this);b=Dygraph.pickDateTickGranularity(this.xd,this.Hf,this.Q,a);this.to=Dygraph.getDateAxis(this.xd,this.Hf,b,a);this.to[0].v[fd]()>this.xd&&(this.to[oe]({v:this.xd,label:O}),this.Rg[oe](new oT(O,{})));this.xd=h.min(this.to[0].v[fd](),this.xd);a=this.to[this.to[J]-1].v[fd]();a>this.Hf[fd]()&&(this.Hf=a);this.mZ=this.Q/(this.Hf-this.xd);
this.uh=[];a=0;for(b=this.to[J];a<b;a++)this.uh[C](this[mz](this.to[a].v))}
aq(pT[K],function(a,b,c){if(this.Rm){if(null==this.ll)throw"startY must be set before calling draw().";var d=this.to[J]-1;if(0!==d){var e=this.Rg[0],f=e.mb(a),g=[new Pm(this.uh[0]-f/2,this.uh[0]+f/2)],k=[];this.uh[0]-f/2<this.A0-this.Dw&&(Ax(e,AJ),Ka(g[0],this.uh[0]),g[0].end=this.uh[0]+f);var e=this.Rg[d],f=e.mb(a),l=new Pm(this.uh[d]-f/2,this.uh[d]+f/2);f/2+this.uh[d]-this.Cna>this.Q+this.A0&&(Ax(e,sF),Ka(l,this.uh[d]-f),l.end=this.uh[d]);Rm(l,g[0])?k[C](d):g[C](l);for(e=1;e<d;e++){var n=this.Rg[e];
switch(n[mA]){case AJ:n=new Pm(this.uh[e],this.uh[e]+n.mb(a));break;case iE:case null:n=new Pm(this.uh[e]-n.mb(a)/2,this.uh[e]+n.mb(a)/2);break;case sF:n=new Pm(this.uh[e]-n.mb(a),this.uh[e]);break;default:throw m("unknown alignment in tick label.");}for(var p=!1,f=0,l=g[J];f<l;f++)if(Rm(g[f],n)){p=!0;break}p?k[C](e):g[C](n)}f=0;for(l=k[J];f<l;f++)n=this.Rg[k[f]],Qa(n,O)}a={};d=0;for(g=this.to[J];d<g;d++)if(p=this.Rg[d],!(this.xd>this.to[d].v)&&p[Wc]){for(var k=b,e=this.uh[d],f=this.ll+10,l=p[mA]||
iE,n=p.ba,p=p[Wc][rc](re),s=[],u=0,v=p[J];u<v;u++)s[C](k(p[u],e,f,15,l,AJ,n)),f+=15;k=s;e=0;for(f=k[J];e<f;e++)c(k[e],null,a)}this.Rm=!1}});Na(pT[K],function(a){return(a-this.xd)*this.mZ+this.A0});
pT[K].Noa=function(a){function b(a,b){return e(c.Yma||a,b)}var c=this,d=!0,e=nT.Vb()[Nb];switch(a){case pra:return function(a,e){var k,l;c.dG=e;if(e<=Dygraph.THIRTY_SECONDLY)return l=b(xh,a),c.Rg[C](new oT(l,{lc:O,bold:!1,color:JD,ab:gC,fontSize:13,Tc:!1,Se:!1})),c.Rg[J]-1+O;if(e<=Dygraph.THIRTY_MINUTELY)return l=QB,0===a[Vc]()||d?(k=!0,l=Cf):k=!1,d=!1,l=b(l,a),c.Rg[C](new oT(l,{lc:O,bold:k,color:JD,ab:gC,fontSize:13,Tc:!1,Se:!1})),c.Rg[J]-1+O;if(e<=Dygraph.SIX_HOURLY)return l=Og,k=a[bc](),0!==a[Vc]()&&
(l+=pna),k=12===k||0===k||d,d=c.xd>a[fd]()?!0:!1,k&&(l+=Uka),l=b(l,a),c.Rg[C](new oT(l,{lc:O,bold:k,color:JD,ab:gC,fontSize:13,Tc:!1,Se:!1})),c.Rg[J]-1+O;if(e<=Dygraph.DAILY)return l=zf,0===a[nc]()||d?(l+=Tka,k=!0):k=!1,d=!1,l=b(l,a),c.Rg[C](new oT(l,{lc:O,bold:k,color:JD,ab:gC,fontSize:13,Tc:!1,Se:!1})),c.Rg[J]-1+O;if(e<=Dygraph.WEEKLY)return k=d,d=!1,l=b(If,a),c.Rg[C](new oT(l,{lc:O,bold:k,color:JD,ab:gC,fontSize:13,Tc:!1,Se:!1})),c.Rg[J]-1+O;if(e<=Dygraph.BIANNUAL)return l=KC,k=0===a[Hd]()||d,
    d = c.xd > a[fd]() ? !0 : !1, k && (l += Vka), l = b(l, a), c.Rg[C](new oT(l, {
    lc: O,
    bold: k,
    color: JD,
    ab: gC,
    fontSize: 13,
    Tc: !1,
    Se: !1
})), c.Rg[J] - 1 + O;
    if (e <= Dygraph.CENTENNIAL)return l = b(JBa, a), c.Rg[C](new oT(l, {
        lc: O,
        bold: !1,
        color: JD,
        ab: gC,
        fontSize: 13,
        Tc: !1,
        Se: !1
    })), c.Rg[J] - 1 + O;
    throw Npa;
};
    case Dxa:
        return 50
}
};
    function qT() {
    }

    fi[K].qn = function () {
        return this
    };
    fi[K].Hy = function () {
        return !1
    };
    fi[K].Iba = function () {
        return !1
    };
    function rT(a, b) {
        return 0 > b ? a / h.pow(10, -b) : a * h.pow(10, b)
    }

    function sT(a) {
        a = h.abs(.4342944819032518 * h.log(a));
        return 1E-7 > h.abs(a - h[E](a))
    }

    function tT(a) {
        return h[t](.4342944819032518 * h.log(a))
    }

    function uT(a) {
        return h[yb](.4342944819032518 * h.log(a))
    }

    function vT() {
    }

    W = vT[K];
    La(W, function (a, b, c) {
        this.b = a;
        this.SF = b;
        this.hq = null === c || 0 > c ? this.F$() : 2 < c ? c - 1 : 1;
        Rw(this, []);
        this.sc = da;
        this.qc = -da;
        ta(this, Un(a, this.Ja(PF)));
        a.S(this.Ja(xBa), function (a, b) {
            return b
        });
        this.yB = null
    });
    W.iC = function (a, b) {
        var c = eS(this.b, this.Ja(ZG), this.Ja(YI));
        if (!aj(b) && c != qI)throw m("Non-linear scale with gaps is not supported.");
        for (var d = [], e = 0; e < b[J]; e++) {
            var f;
            t:{
                var g = b[e];
                f = this.p0(g.Qka);
                var k = this.CJ(g.xd), g = this.CJ(g.Hf);
                if (0 < f)if (k + f < g) k += f; else {
                    f = null;
                    break t
                }
                f = {gna: 0, start: k, end: g}
            }
            f && d[C](f)
        }
        this.yB = YFa(c, rT(1, tT(a)), d)
    };
    W.Ja = function (a) {
        return $R(this.SF, a)
    };
    W.F$ = function () {
        return -1
    };
function jIa(a,b,c,d){d&&(a.nc(wT(a,b)),a.nc(wT(a,c)));a.sc==da&&a.qc==-da&&(a.sc=0,a.qc=1);a.sc==da&&(a.sc=a.qc);a.qc==-da&&(a.qc=a.sc);a.sc==a.qc&&(0==a.sc?(a.sc=-1,a.qc=1):0<a.sc?(a.sc/=2,a.qc*=2):(a.sc*=2,a.qc/=2));a.uI(a.sc,a.qc,d);a.Q2(a.sc,a.qc,d);a.MI();a.hq=h.max(1,a[cz][J]-1)}W.uI=function(){};W.rp=function(a){Rw(this,a)};function xT(a){a.sd||a.MI();return a.sd}function wT(a,b){var c=yT(a,b);if(null==c)return null;c=a.yB[EA](c);return na(c)?c:null}

    function yT(a, b) {
        return null != b ? a.CJ(b) : null
    }

    W.nc = function (a) {
        null != a && (this.sc = h.min(this.sc, a), this.qc = h.max(this.qc, a))
    };
    W.pp = function (a) {
        return this.UF(this.yB.inverse(a))
    };
    W.I$ = function (a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    function kIa(a) {
        this.Zp = a || String
    }

    var lIa = {
        number: function (a, b) {
            return b.Zp(a[od])
        }, identifier: function (a) {
            return a[Cd]
        }, "+": function () {
            return Zka
        }, "-": function () {
            return IA
        }, "--": function () {
            return Te
        }, "=": function () {
            return cla
        }, "*": function () {
            return Yka
        }, "(": function () {
            return Ne
        }, ")": function () {
            return Oe
        }, ",": function () {
            return Se
        }, "^": function () {
            return $r
        }
    };
    kIa[K].C = function (a) {
        return Ti(a, function (a) {
            return lIa[a.Iq()](a, this)
        }, this)[me](O)
    };
    function zT() {
    }

    Y(zT, qT);
    zT[K].Iq = function () {
        return Te
    };
    function AT() {
    }

    Y(AT, qT);
    AT[K].Iq = function () {
        return Qe
    };
    function BT(a) {
        this.zh = a
    }

    Y(BT, fi);
    BT[K].join = function (a) {
        var b = [];
        Z(this.zh, function (c, d) {
            0 < d && b[C](a);
            var e = !1;
            c instanceof BT && 1 < c.zh[J] && this.vL() > c.vL() && (e = !0);
            e && b[C](new CT);
            ij(b, c.Fm());
            e && b[C](new DT)
        }, this);
        return b
    };
    BT[K].qn = function () {
        if (1 === this.zh[J])return this.zh[0];
        var a = [];
        Z(this.zh, function (b) {
            a[C](b.qn())
        });
        this.zh = a;
        return this
    };
    function ET(a) {
        this.zh = a
    }

    Y(ET, BT);
    ET[K].vL = function () {
        return 1
    };
    ET[K].Fm = function () {
        var a = [];
        Z(this.zh, function (b) {
            var c = b.Hy();
            0 < a[J] && c ? (a[C](new zT), b = (new FT(b)).qn()) : 0 < a[J] && a[C](new AT);
            a = fj(a, b.Fm())
        });
        return a
    };
    function DT() {
    }

    Y(DT, qT);
    DT[K].Iq = function () {
        return Oe
    };
    function GT(a) {
        fb(this, a)
    }

    Y(GT, qT);
    GT[K].Iq = function () {
        return Hva
    };
    function CT() {
    }

    Y(CT, qT);
    CT[K].Iq = function () {
        return Ne
    };
    function HT() {
    }

    Y(HT, qT);
    HT[K].Iq = function () {
        return lf
    };
    function IT(a) {
        this.zh = a
    }

    Y(IT, BT);
    IT[K].vL = function () {
        return 0
    };
    IT[K].Fm = function () {
        return this[me](new HT)
    };
    function JT() {
    }

    Y(JT, qT);
    JT[K].Iq = function () {
        return Pe
    };
    function KT() {
    }

    Y(KT, qT);
    KT[K].Iq = function () {
        return dma
    };
    function mIa(a) {
        this.zh = [a]
    }

    Y(mIa, BT);
    function FT(a) {
        this.zh = [a]
    }

    Y(FT, mIa);
    FT[K].qn = function () {
        var a = this.zh[0].qn();
        if (a.Hy()) {
            if (a instanceof FT)return a.zh[0];
            if (a instanceof LT)return new LT(-a[I]());
            throw m("Unknown type of negative.");
        }
        return new FT(a)
    };
    FT[K].Fm = function () {
        return fj([new KT], this.zh[0].Fm())
    };
    FT[K].Hy = function () {
        return this.qn() instanceof FT
    };
    function MT(a) {
        gx(this, a)
    }

    Y(MT, qT);
    MT[K].Iq = function () {
        return T
    };
    function LT(a) {
        gx(this, a)
    }

    Y(LT, fi);
    LT[K].Fm = function () {
        return [new MT(this[od])]
    };
    LT[K].Hy = function () {
        return 0 > this[od]
    };
    gb(LT[K], function () {
        return this[od]
    });
    LT[K].Iba = function () {
        return !0
    };
    function NT(a, b) {
        this.zh = a;
        this.Fba = null != b ? b : !1
    }

    Y(NT, BT);
    NT[K].vL = function () {
        return 2
    };
    NT[K].qn = function () {
        NT.e.qn[L](this);
        var a = 0, b = [], c = 1;
        Z(this.zh, function (d) {
            d.Hy() && (d = (new FT(d)).qn(), a++);
            d.Iba() && (c *= d[I](), d = null);
            d && b[C](d)
        });
        1 !== c && dj(b, 0, 0, new LT(c));
        var d = new NT(b, this.Fba);
        a % 2 && (d = new FT(d));
        return d
    };
    NT[K].Fm = function () {
        return this.Fba ? fj[Sc](null, Ti(this.zh, function (a) {
            return a.Fm()
        })) : this[me](new JT)
    };
    NT[K].Hy = function () {
        var a = 0;
        Z(this.zh, function (b) {
            b.Hy() && a++
        });
        return !!(a % 2)
    };
    function nIa(a, b) {
        this.ya = [];
        this.tea = a;
        this.xea = b
    }

    function OT(a, b) {
        if (0 < a.ya[J]) {
            var c = a.ya[a.ya[J] - 1][0], d = b - c;
            if (d > a.tea && (d = h[E](d / a.tea), 1 < d))for (var e = 1; e < d; e++) {
                var f = e / d * (b - c) + c;
                a.ya[C]([f, a.xea(f)])
            }
        }
        a.ya[C]([b, a.xea(b)])
    }

    nIa[K].sm = function () {
        return this.ya
    };
    function oIa(a, b, c, d) {
        a = pIa(a, b, c, {range: d[hz], Jca: d.Jca, kA: 1});
        return null === a || fa(a.sp) ? null : {data: a[$], sp: a.sp, Ut: {offset: a.HJ[0], yK: a.HJ[1]}}
    }

    function PT(a) {
        fb(this, a)
    }

    Y(PT, fi);
    PT[K].Fm = function () {
        return [new GT(this[Cd])]
    };
    Ap(PT[K], function () {
        return this[Cd]
    });
    function QT() {
    }

    Y(QT, qT);
    QT[K].Iq = function () {
        return $r
    };
    function RT(a) {
        this.zh = a
    }

    Y(RT, BT);
    RT[K].vL = function () {
        return 3
    };
    RT[K].Fm = function () {
        return this[me](new QT)
    };
    function qIa(a) {
        this.yT = a.kA + 1;
        this.Ka = a[hz];
        this.vqa = a.Jca;
        this.o2 = this.H2 = 0;
        this.ya = []
    }

    qIa[K].add = function (a, b) {
        if (0 < this.ya[J]) {
            var c = a - this.ya[this.ya[J] - 1].x;
            0 < c && (this.H2 += c)
        }
        this.o2 += b;
        this.ya[C]({x: a, y: b})
    };
    function rIa(a) {
        var b = a.vqa || null != a.Ka && null != a.Ka.min && Lj(a.Ka.min) && null != a.Ka.max && Lj(a.Ka.max) && (a.Ka.max - a.Ka.min) / 100 || void 0;
        null != b && Lj(b) || (b = a.H2 / (a.ya[J] - 1));
        return b
    }

    function sIa(a, b) {
        return Ui(a.ya, function (a, d) {
            return a + h.pow(d.x, b)
        }, 0)
    }

    function tIa(a, b) {
        return Ui(a.ya, function (a, d) {
            return a + h.pow(d.x, b) * d.y
        }, 0)
    }

    function uIa(a) {
        for (var b = [], c = a.yT, d = 0; d < c; d++) {
            for (var e = ga(c + 1), f = 0; f <= c; f++)e[f] = f < c ? sIa(a, d + f) : tIa(a, d);
            b[C](e)
        }
        return new wP(b)
    }

    function vIa(a) {
        var b = hEa(uIa(a));
        return Ti(pj(a.yT), function (a) {
            return zP(b, a, this.yT)
        }, a)
    }

    function wIa(a, b) {
        var c = a.yT;
        return function (a) {
            for (var e = 0, f = 0; f < c; f++)e += b[f] * h.pow(a, f);
            return e
        }
    }
function xIa(a,b){var c=wIa(a,b),d=rIa(a);if(null==d||fa(d)||!Lj(d)||0===d)return null;var d=new nIa(d,c),e=a.ya;mj(e,function(a,b){return a.x>b.x?1:a.x<b.x?-1:0});var f=a.o2/e[J],g=a.Ka;null!=a.Ka&&null!=a.Ka.min&&Lj(a.Ka.min)&&g.min<e[0].x&&OT(d,g.min);for(var k=0,l=0,n=!0,p=0;p<e[J];p++){var s=e[p].x,u=e[p].y,v=c(s),n=n&&v===u;OT(d,s);k+=h.pow(u-v,2);l+=h.pow(u-f,2)}c=n?1:1-k/l;null!=a.Ka&&null!=a.Ka.max&&Lj(a.Ka.max)&&g.max>e[e[J]-1].x&&OT(d,g.max);return{data:d.sm(),sp:c}}

    function yIa(a) {
        var b = vIa(a), c;
        c = [];
        for (var d = b[J] - 1; 0 <= d; d--) {
            var e = b[d];
            if (null != e && 0 !== e) {
                e = new LT(e);
                if (0 < d) {
                    var f = new PT(AK);
                    1 < d && (f = new RT([f, new LT(d)]));
                    e = new NT([e, f], !0)
                }
                c[C](e)
            }
        }
        c = new IT([new PT(Wh), new ET(c)]);
        a = xIa(a, b);
        return null != a && 0 !== a[$][J] ? {HJ: b, data: a[$], sp: a.sp, Ut: c.qn()} : null
    }

    function pIa(a, b, c, d) {
        var e = new qIa(d);
        Qj(Rj(a), function (a) {
            var d = b(a);
            a = c(a);
            null != d && Lj(d) && null != a && Lj(a) && e.add(d, a)
        });
        return yIa(e)
    }

    var zIa = {LINEAR: VG, Qxa: "exponential", Pya: "polynomial"}, AIa = {
        linear: function (a, b, c, d) {
            a = oIa(a, b, c, d);
            if (null === a)return null;
            b = new IT([new PT(Wh), new ET([new NT([new LT(a.Ut.yK), new PT(AK)]), new LT(a.Ut[uy])])]);
            return {data: a[$], sp: a.sp, Ut: b.qn()}
        }, exponential: function (a, b, c, d) {
            for (var e = da, f = 0; f < a; f++) {
                var g = b(f), k = c(f);
                null != k && k < e && (e = k)
            }
            e = 0 < e ? null : e - 1;
            a = oIa(a, b, function (a) {
                a = c(a);
                if (null == a)return null;
                null != e && (a -= e);
                return h.log(a)
            }, d);
            if (null === a)return null;
            b = [];
            for (f = 0; f < a[$][J]; f++)g = a[$][f][0],
                k = h.exp(a[$][f][1]), null != e && (k += e), b[C]([g, k]);
            f = new NT([new LT(h.exp(a.Ut[uy])), new RT([new PT(nF), new NT([new LT(a.Ut.yK), new PT(AK)], !0)])], !0);
            null === e || (f = new ET([f, new LT(e)]));
            f = (new IT([new PT(Wh), f])).qn();
            return {data: b, sp: a.sp, Ut: f}
        }
    };
    AIa.polynomial = pIa;
    var BIa = {NONE: Q, Mya: pI, Mua: Mg, Qua: ZI, vxa: WD, Nua: jG},
        CIa = {NONE: Q, Yfa: SG, pua: sD, gza: CJ, rua: BD, yxa: cE, Qua: ZI, wxa: XD},
        DIa = {rua: BD, iza: hAa, uxa: Dra, POINTS: vI, Yfa: SG, pua: sD, NONE: Q}, EIa = {Kxa: hJ, lya: Zya, Gxa: gJ},
        FIa = {Wfa: eE, bga: Qh, Axa: fE}, GIa = {Qya: yI, sya: CH, Kua: uF},
        HIa = {NONE: Q, RIGHT: Os, LEFT: ah, TOP: $J, BOTTOM: PD, Xfa: sG, iya: HG, rxa: RD},
        IIa = {NONE: Q, TOP: $J, BOTTOM: PD, Xfa: sG}, ST = {OU: Rh, NU: Tg}, JIa = {Vua: AJ, sua: iE, Jua: sF},
        TT = {NONE: Q, Xfa: sG, Jya: jI}, KIa = {sxa: Ara, vza: hBa}, LIa = {Wxa: hG, oya: Dwa}, MIa = {
            NONE: Q, hya: FG, bga: Qh, Pua: oI,
zza:wBa},NIa={Ry:xg,bga:Qh,Pua:oI},OIa={DEFAULT:bF,Nxa:iF},PIa={Lxa:$E,Wfa:eE,Uua:fJ},QIa={Vfa:sg,Wfa:eE,Uua:fJ,NONE:Q},UT={NONE:Q,Mua:Mg,Lya:Bxa,Fxa:DE},RIa={lxa:nra,kxa:mra},VT={kya:QG,Yfa:SG},WT=[{color:"#3366CC",lighter:"#45AFE2"},{color:eB,lighter:"#FF3300"},{color:gB,lighter:"#FFCC00"},{color:TA,lighter:"#14C21D"},{color:"#990099",lighter:"#DF51FD"},{color:"#0099C6",lighter:"#15CBFF"},{color:"#DD4477",lighter:"#FF97D2"},{color:"#66AA00",lighter:"#97FB00"},{color:"#B82E2E",lighter:"#DB6651"},
{color:"#316395",lighter:"#518BC6"},{color:aB,lighter:"#BD6CBD"},{color:"#22AA99",lighter:"#35D7C2"},{color:"#AAAA11",lighter:"#E9E91F"},{color:"#6633CC",lighter:"#9877DD"},{color:"#E67300",lighter:"#FF8F20"},{color:"#8B0707",lighter:"#D20B0B"},{color:"#651067",lighter:"#B61DBA"},{color:"#329262",lighter:"#40BD7E"},{color:"#5574A6",lighter:"#6AA7C4"},{color:"#3B3EAC",lighter:"#6D70CD"},{color:"#B77322",lighter:"#DA9136"},{color:"#16D620",lighter:"#2DEA36"},{color:"#B91383",lighter:"#E81EA6"},{color:"#F4359E",
lighter:"#F558AE"},{color:"#9C5935",lighter:"#C07145"},{color:"#A9C413",lighter:"#D7EE53"},{color:"#2A778D",lighter:"#3EA7C6"},{color:"#668D1C",lighter:"#97D129"},{color:"#BEA413",lighter:"#E9CA1D"},{color:"#0C5922",lighter:"#149638"},{color:"#743411",lighter:"#C5571D"}],SIa={color:"#EEEEEE",lighter:"#FEFEFE"},TIa=[[5],[2,5],[2,5],[2,4,6,8],[2,4,6,8],[2,3,4,5,6,7],[2,3,4,5,6,7,8],[2,3,4,5,6,7,8,9]],UIa={titleTextStyle:{color:UA,italic:!0},gridlines:{baseline:sg,minorTextOpacity:.7,minorGridlineOpacity:.4,
newTimeline:!1,allowMinor:!0,minStrongLineDistance:40,minWeakLineDistance:40,minStrongToWeakLineDistance:5,minNotchDistance:10,minMajorTextDistance:10,minMinorTextDistance:5,unitThreshold:1.5,units:{milliseconds:{format:["h:mm:ss.SSS a"],interval:[1,5,10,50,100,200,500]},seconds:{format:["h:mm:ss a"],interval:[1,5,10,15,30]},minutes:{format:[Pg],interval:[1,2,5,15,30]},hours:{format:["h a"],interval:[1,2,6,12]},days:{format:[If,Ag],interval:[1,2,7]},months:{format:["MMM y","MMM yy",KC],interval:[1,
3,6]},years:{format:[Wh],interval:[1,2,5,10,20,50,100,200,500,1E3]}}},minorGridlines:{units:{milliseconds:{format:[We],interval:[50,100,200,500]},seconds:{format:[ff],interval:[1,5,10,15]},minutes:{format:[QB],interval:[1,2,5,15]},hours:{format:["h a"],interval:[1,2,6]},days:{format:[Ag],interval:[1,7]},months:{format:[KC,"MM","MMMMM"],interval:[1,3]},years:{format:[Wh],interval:[1,2,5,10,20,50,100,200,500,1E3]}}}},VIa={histogram:{hAxis:{baselineColor:Q,gridlines:{color:Q}},bar:{groupWidth:GB}}},
WIa={vAxis:UIa,hAxis:UIa,sizeAxis:{minSize:5,maxSize:30},fontName:gC,titleTextStyle:{color:xe,bold:!0},bubble:{textStyle:{color:xe}},candlestick:{hollowIsRising:!1},annotations:{datum:{textStyle:{color:gJ},stemColor:cB},domain:{textStyle:{color:UA},stemColor:cB}},majorAxisTextColor:UA,minorAxisTextColor:YA,backgroundColor:{fill:ze,stroke:$A,strokeWidth:0},chartArea:{backgroundColor:{fill:Q}},tooltip:{textStyle:{color:xe}},baselineColor:VA,gridlineColor:jB,pieSliceBorderColor:Ae,pieResidueSliceColor:jB,
pieSliceTextStyle:{color:Ae},areaOpacity:.3,intervals:{style:BD,color:hJ,lineWidth:1,fillOpacity:.3,barWidth:.25,shortBarWidth:.1,boxWidth:.25,dataOpacity:1,pointSize:6},actionsMenu:{textStyle:{color:xe},disabledTextStyle:{color:"#c0c0c0"}},legend:{newLegend:!1,textStyle:{color:UA},pagingTextStyle:{color:"#0011cc"},scrollArrows:{activeColor:"#0011cc",inactiveColor:jB}},aggregationTarget:sg,colorAxis:{legend:{textStyle:{color:xe}}},bar:{groupWidth:100/1.618+De},histogram:{lastBucketPercentile:0,hideBucketItems:!1,
        bucketSize: -1,
        minBucketNumer: 5,
        maxBucketNumber: 50
    }
};

    function XIa(a) {
        return h.pow(a, 3)
    }

    function YIa(a) {
        return 1 - h.pow(1 - a, 3)
    }

    function ZIa(a) {
        return 3 * a * a - 2 * a * a * a
    }

    var $Ia = {LINEAR: VG, aya: sG, Iya: jI, fya: tG};

    function aJa(a) {
        switch (a) {
            case VG:
                return zj;
            case sG:
                return XIa;
            case jI:
                return YIa;
            case tG:
                return ZIa;
            default:
                return zj
        }
    }

    function bJa(a, b, c) {
        b = Pn(a, nD, b);
        if (!b)return null;
        var d = Pn(a, Jqa, 30);
        a = $n(a, Iqa, $Ia, c);
        a = aJa(a);
        return {duration: b, z5: a, OV: d}
    }

    function cJa(a) {
        a = a[Jd];
        return oi(a) && a[Lb](/\S+/g) || []
    }

    function dJa(a, b) {
        for (var c = cJa(a), d = jj(arguments, 1), e = c, f = 0; f < d[J]; f++)$i(e, d[f]) || e[C](d[f]);
        c = c[me](se);
        mb(a, c)
    }

    function eJa(a, b) {
        var c = cJa(a), d = jj(arguments, 1), c = fJa(c, d)[me](se);
        mb(a, c)
    }

    function fJa(a, b) {
        return Si(a, function (a) {
            return !$i(b, a)
        })
    }

    function XT() {
    }

    Y(XT, sN);
    gi(XT);
    W = XT[K];
    W.j = function (a) {
        var b = {"class": dD + this.Sl(a)[me](se)}, b = a.ia().j(P, b, a[Xz]());
        this.aj(b, a.Zm());
        ZM(this, a, b);
        return b
    };
    W.Xk = function () {
        return YD
    };
    W.Zh = function (a) {
        return a[Tc] == vf
    };
    W.Ma = function (a, b) {
        yM(b, cD);
        return XT.e.Ma[L](this, a, b)
    };
    gb(W, function () {
        return O
    });
    W.ca = function () {
        return eqa
    };
    dN(eqa, function () {
        return new uN(null, XT.Vb())
    });
    function YT() {
    }

    Y(YT, XT);
    gi(YT);
    YT[K].ca = function () {
        return fqa
    };
    dN(fqa, function () {
        return new uN(null, YT.Vb())
    });
    function ZT(a, b) {
        return $T(a, b, 0)
    }

    function $T(a, b, c) {
        for (var d = new Date(a[ec]()), e = !1, f = b[J], g = [h[t], h[yb]][c], k = 0; k < f; ++k) {
            var l = a[jJ + aU[k]], n = a[TF + aU[k]][Sc](a), p = b[k], s = gJa[k];
            if (0 == p) e = e || 0 != n && 0 != c, l[Sc](d, [s]); else {
                e ? l[Sc](d, [s + p * (1 + h[t]((n - s) / p))]) : l[Sc](d, [s + p * g((n - s) / p)]);
                break
            }
        }
        return d
    }

    function hJa(a, b) {
        var c = h[E], d = gj(a), e;
        for (e = 0; e < d[J] && 0 == b[e]; ++e)d[e] = 0;
        if (0 == e)return d[0] = c(a[0] / b[0]) * b[0], d;
        var f = 0;
        a[e - 1] >= iJa[e - 1] ? f = .7 : 0 < a[e - 1] && (f = .1);
        d[e] = c((a[e] + f) / b[e]) * b[e];
        return d
    }

    function jJa(a) {
        a = ZT(a, [0, 0, 0, 0, 1]);
        return a = bU(a, [0, 0, 0, 0, (7 + a[nc]() - 1) % 7], -1)
    }

    function cU(a, b, c) {
        var d = Ti(b, function (a) {
            return [h.log(dU(a))]
        });
        if (!c)return a = UR(h.log(a), d), b[a];
        c = HFa(h.log(a), d, c);
        a = c[0];
        return a <= d[J] - 1 ? b[a] : hJa(eU(h.exp(c[1])), Oi(b))
    }

    function bU(a, b, c) {
        a = new Date(a[ec]());
        var d;
        t:{
            for (d = 0; d < b[J]; ++d)if (0 != b[d]) {
                d = !1;
                break t
            }
            d = !0
        }
        if (d)return a;
        for (d = 0; d < b[J]; ++d)if (0 != b[d]) {
            var e = aU[d], f = a[jJ + e], e = a[TF + e][Sc](a, []);
            f[Sc](a, [e + c * b[d]])
        }
        return a
    }
function fU(a,b,c,d){this.kfa=a[ec]();this.dB=b;this.Ysa=d;this.X3=a[TF+aU[c]][Sc](a,[]);this.Zsa=a[jJ+aU[c]];this.zx=new Date(this.kfa)}Da(fU[K],function(){var a=this.zx;this.zx=new Date(this.kfa);this.X3+=this.Ysa;this.Zsa[Sc](this.zx,[this.X3]);return a});fU[K].Ao=function(){return this.zx<this.dB?this.zx:null};function kJa(a){a=Yi(a,function(a){return 0!=a});return h.max(0,a)}function dU(a){if(null==a)return-1;for(var b=0,c=a[J],d=0;d<c;++d)b+=a[d]*gU[d];return b}
function eU(a){for(var b=[],c=gU[J]-1;0<=c;c--)b[c]=h[t](a/gU[c]),a-=b[c]*gU[c];return b}function hU(a){a=iU(a);return dU(a)}function jU(a){return eU(a)[dq]()}function iU(a){a=4>a[J]?fj(a,qj(0,4-a[J])):gj(a);return a[dq]()}function lJa(a){a=iU(a);var b=new Date(1970,0,1,0,0,0,0);b[wd]((a[6]||0)+1970);b[ud](a[5]||0);b[Fd]((a[4]||0)+1);b.setHours(a[3]||0);b.setMinutes(a[2]||0);b.setSeconds(a[1]||0);b.setMilliseconds(a[0]||0);return b}function mJa(a,b){return Ti(a,function(a){return a*b})}

    var aU = "Milliseconds Seconds Minutes Hours Date Month FullYear".split(" "),
        kU = ["milliseconds", "seconds", "minutes", "hours", eta, "months", "years"], lU = {};
    Z(kU, function (a, b) {
        lU[a] = b
    });
    var mU = [[1], [0, 1], [0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 1]],
        gJa = [0, 0, 0, 0, 1, 0, 0], iJa = [500, 30, 30, 12, 15, 6, 0],
        gU = [1, 1E3, 6E4, 36E5, 864E5, 2629743830, 31556926E3];

    function nU(a) {
        switch (a) {
            case Bg:
            case Cg:
                return {ak: nJa, By: oJa};
            case Jh:
                return {ak: pJa, By: qJa};
            case T:
            case Eh:
                return {ak: rJa, By: sJa};
            default:
                return {ak: rJa, By: sJa}
        }
    }

    function rJa(a) {
        return ha(a)
    }

    function sJa(a) {
        return a
    }

    function nJa(a) {
        return a[ec]()
    }

    function oJa(a) {
        return new Date(a)
    }

    function pJa(a) {
        return hU(a)
    }

    function qJa(a) {
        return jU(a)
    }

    function oU(a, b, c) {
        this.P_ = a;
        this.YQ = b;
        this.Y0 = c
    }

    Y(oU, vT);
    W = oU[K];
    La(W, function (a, b, c) {
        oU.e[Kc][L](this, a, b, c);
        a = Fn(a, this.Ja(yua));
        b = [];
        b[C](a.millisecond);
        b[C](a.second);
        b[C](a.minute);
        b[C](a.hour);
        b[C](a.day);
        b[C](a.month);
        b[C](a.year);
        this.Y0 = tJa([b, qj(this[Nb], b[J]), this.Y0])
    });
    function tJa(a) {
        a = wj[Sc](null, a);
        return Ti(a, function (a) {
            return Xi(a, function (a) {
                return a
            })
        })
    }

    W.S = function (a, b) {
        return a.S(b)
    };
    W.CJ = function (a) {
        return nJa(a)
    };
    W.UF = function (a) {
        return oJa(a)
    };
    W.p0 = function (a) {
        return a
    };
    W.f0 = function () {
        var a = new Date(0);
        a[wd](0);
        return a
    };
    W.uI = function (a, b, c) {
        var d = this.hq;
        -1 === d && (d = 6);
        var e = (b - a) / d, d = cU(e, this.P_, this.YQ);
        c ? (a = ZT(new Date(a), d), b = $T(new Date(b), d, 1)) : (a = $T(new Date(a), d, 1), b = ZT(new Date(b), d));
        e = eU(e);
        e = hJa(e, d);
        this.oda = e = 0 < dU(e) ? e : d;
        this.mra = a;
        this.Dda = b;
        c && (this.sc = a[ec](), this.qc = b[ec]())
    };
    W.Q2 = function (a, b, c) {
        a = [];
        for (b = this.mra; b < this.Dda;)a[C](b[ec]()), b = bU(b, this.oda, 1);
        if (c || b <= this.Dda) a[C](b[ec]()), this.qc = h.max(this.qc, b[ec]());
        this.rp(a)
    };
W.MI=function(){var a=kJa(this.oda),a=this.Y0[a];this.sd=typeof a===jh?new bp(a):new bp({pattern:a})};
var uJa=[[0,0,0,0,1],[0,0,0,0,2],[0,0,0,0,7],[0,0,0,0,0,1],[0,0,0,0,0,3],[0,0,0,0,0,6],[0,0,0,0,0,12],[0,0,0,0,0,0,1],[0,0,0,0,0,0,5],[0,0,0,0,0,0,10],[0,0,0,0,0,0,25],[0,0,0,0,0,0,50],[0,0,0,0,0,0,100]],vJa=[cp.MEDIUM_DATE,cp.MEDIUM_DATE,cp.MEDIUM_DATE,cp.MEDIUM_DATE,cp.MEDIUM_DATE,Yo.YEAR_MONTH_ABBR,Wh],wJa=[[1],[2],[5],[10],[20],[50],[100],[200],[500],[0,1],[0,2],[0,5],[0,10],[0,15],[0,30],[0,0,1],[0,0,2],[0,0,5],[0,0,10],[0,0,15],[0,0,30],[0,0,0,1],[0,0,0,2],[0,0,0,3],[0,0,0,4],[0,0,0,6],[0,0,
0,12],[0,0,0,0,1],[0,0,0,0,2],[0,0,0,0,7],[0,0,0,0,0,1],[0,0,0,0,0,3],[0,0,0,0,0,6],[0,0,0,0,0,12],[0,0,0,0,0,0,1],[0,0,0,0,0,0,5],[0,0,0,0,0,0,10],[0,0,0,0,0,0,25],[0,0,0,0,0,0,50],[0,0,0,0,0,0,100]],xJa=[cp.MEDIUM_TIME,cp.MEDIUM_TIME,cp.SHORT_TIME,{pattern:cp.SHORT_TIME,clearMinutes:!0},cp.MEDIUM_DATE,Yo.YEAR_MONTH_ABBR,Wh];function yJa(a,b,c,d,e,f,g,k){var l=b-a;if(0>=l)return null;for(var n=h[t](h.log(l)/h.log(10)),l=VR(5,function(a){return{je:h.pow(10,n-a),gU:5}}),p=[],s=!1,u=0;u<l[J];++u){var v=l[u],z=zJa(a/(v.je*v.gU),b/(v.je*v.gU),c,d,e,f,g),p=p[Bb](Ti(z,function(a){return[v,a]}));if(s)break;s=!aj(z)}return Ui(p,function(a,b){for(var c=b[0],d=b[1],e=null,f=d.Kra;f<=d.Jra&&e!=f;e=f,f+=d.Lra){var e=h[E](c.gU*f),l=h[E](c.gU*(f+g*d.Mra)),n=k(e,l,c.je);n>a.km&&(a={km:n,hea:{$i:h[E](e)*c.je,ur:h[E](l)*c.je}})}return a},
        {km: -da, hea: null}).hea
    }

    function zJa(a, b, c, d, e, f, g) {
        for (var k = [], l = b - a, n = d + f, p = h[yb](l / (1 - (c + e)) / g), l = h[t](l / (1 - n) / g); p < da && p <= l; ++p) {
            var n = p * g, s = h[yb](h.max(a - d * n, b - (1 - e) * n)), u = h[t](h.min(a - c * n, b - (1 - f) * n)),
                v = 1;
            0 < b && 0 > a ? 1 < g && (s = h[yb](s / p) * p, u = h[t](u / p) * p, v = p) : 0 <= a ? s = h.max(0, s) : u = h.min(-n, u);
            0 <= u - s && k[C]({Mra: p, Lra: v, Kra: s, Jra: u})
        }
        return k
    }

    function pU(a) {
        if (0 == a)return 0;
        0 > a && (a = -a);
        if (.5 > a)return 0;
        for (; 0 == h[E](a % 10);)a = h[E](a / 10);
        return 1 == a || 5 == a ? .5 : h[t](h.log(a) / h.log(10)) + 1
    }

    function qU() {
        this.h$ = 0
    }

    Y(qU, vT);
    W = qU[K];
    W.F$ = function () {
        return 4
    };
    La(W, function (a, b, c) {
        qU.e[Kc][L](this, a, b, c);
        this.sd = null;
        this.iI = Mn(a, this.Ja(RF), 1);
        this.DQ = a.S(this.Ja(zAa), [10, 2, 5, 1])
    });
    W.Q2 = function (a, b, c) {
        var d, e, f, g, k;
        c ? (d = X(AJa, null, this.DQ, this.hq, a, b), e = -1E-4, f = 1 / h.max(this.hq, 3), g = e, k = f) : (e = -1 / h.max(this.hq, 3), f = 0, g = e, k = f, this.DQ[0] *= -1, d = X(AJa, null, this.DQ, this.hq, this.sc, this.qc));
        c = this.hq;
        (d = yJa(a, b, e, f, g, k, c, d)) || (0 <= a || 0 >= b || 1 == c ? d = {
            $i: a,
            ur: b
        } : (d = h.max(1, h.min(c - 1, h[E](b / (b - a) * c))), c -= d, a = h.max(b / d, -a / c), d = {
            $i: -c * a,
            ur: d * a
        }));
        a = d;
        b = (a.ur - a.$i) / this.hq;
        c = [];
        for (d = 0; d <= this.hq; ++d)c[C](a.$i + b * d);
        this.sc = h.min(c[0], this.sc);
        this.qc = h.max(c[c[J] - 1], this.qc);
        this.rp(c)
    };
W.rp=function(a){qU.e.rp[L](this,a);var b=0;Z(this[cz],function(a){a=this.pp(a);b=h.max(b,YR(a/this.iI))},this);this.h$=b};W.MI=function(){var a={pattern:this[Nb],fractionDigits:this[Nb]?null:this.h$,scaleFactor:this.iI,prefix:Un(this.b,this.Ja(QF)),suffix:Un(this.b,this.Ja(SF))};this.sd=new dp(a)};function AJa(a,b,c,d,e,f,g){c=a[0]*(d-c)/(g*(f-e));d=(f-e)/b;for(g=1;g<b;++g)c-=a[1]*h.pow(pU(e+g*d),1.2);c-=a[2]*h.pow(pU(e),1.2);c-=a[2]*h.pow(pU(f),1.2);return c-=a[3]*h.pow(pU(d),1.2)}
W.S=function(a,b){return Nn(a,b)};W.CJ=function(a){return ha(a)};W.UF=function(a){return a};W.p0=function(a){return a};W.f0=function(){return 0};function BJa(){this.FL={}}var rU=null;function sU(){return rU?rU:rU=new BJa}BJa[K].qh=function(a){return(a=this.FL[a])?a[Sc](null,[]):null};function tU(){this.G1=1}Y(tU,vT);W=tU[K];W.S=function(a,b){return a.S(b)};W.I$=function(a,b){var c=hU(a),d=hU(b);return c<d?-1:c>d?1:0};W.CJ=function(a){return hU(a)};W.UF=function(a){return jU(a)};W.p0=function(a){return a};W.f0=function(){return jU(0)};W.uI=function(a,b,c){var d=this.hq;-1===d&&(d=6);var d=(b-a)/d,e=cU(d,CJa,0);this.G1=kJa(e);e=dU(e);this.tickSize=d=h.max(1,h[E](d/e))*e;c?(a=h[t](a/d)*d,b=h[yb](b/d)*d):(a=h[yb](a/d)*d,b=h[t](b/d)*d);this.Ga=a;this.ob=b;c&&(this.sc=a,this.qc=b)};
W.Q2=function(){for(var a=[],b=this.Ga;b<this.ob;)a[C](b),b+=this.tickSize;a[C](b);this.rp(a)};W.MI=function(){var a=new bp({pattern:this[Nb]?this[Nb]:1<this.G1?Cf:1===this.G1?Koa:Loa});this.sd={Oc:function(b){b=lJa(b);return a.Oc(b)}}};var CJa=[[0,1,0,0],[0,2,0,0],[0,5,0,0],[0,10,0,0],[0,20,0,0],[0,30,0,0],[0,0,1,0],[0,0,5,0],[0,0,10,0],[0,0,15,0],[0,0,30,0],[0,0,0,1],[0,0,0,2],[0,0,0,3],[0,0,0,4],[0,0,0,6],[0,0,0,12]];sU().FL.timeofday=function(){return new tU};sU().FL.date=function(){return new oU(uJa,3,vJa)};sU().FL.datetime=function(){return new oU(wJa,3,xJa)};sU().FL.number=function(){return new qU};function uU(){}W=uU[K];W.dQ=function(a){var b=a.pb;a=a.nb;var c=vU(this,b,a);return this.l[b].k[c].de.hw||(this.Da[c]?this.Da[a].Nt[0]:null)};function DJa(a,b){var c=b.pb,d=vU(a,c,b.nb);return a.l[c].k[d].de.Cm||a.l[c][fA]}W.e_=function(a){return a.nb};W.WX=function(a){return{Wa:a.nb,zc:this.l[a.pb].ut}};W.UN=function(a){var b=this.Pq[a.zc].uc;return null!=b?{pb:b,nb:this.Nq[a.Wa]}:null};W.IG=function(a,b){return this.l[a].k[b].de};function wU(a,b){this.F=b;this.Dr=a;this.bw=this.Lq=this.yY=this.Mb=this.tw=this.td=this.Oq=null}W=wU[K];W.cp=function(a,b){this.td={};this.tw={};this.F[Yb]();this.Dr[Yb]();EJa(this,a,b);var c=this.Mb,c=this.F.qm(c[r],c[A]);FJa(this,b,c)};function EJa(a,b,c){var d=new nQ(2);oQ(d,0,b);oQ(d,1,c);a.Mb=d[tz]()}
function FJa(a,b,c){a[dy](c.a(),fs);var d=a.Mb,e=a.F,f=d.LE;!on(f)&&!nn(f)||e.hb(0,0,d[r],d[A],f,c);d.Lz==jI&&(f=a.Dt(d[fA],c),a[dy](f,UJ));a.Lq=e.Ba(!0);f=d.Ca;a.JE(f);f&&f[mc]!=sG&&(e[q](c,a.Lq),a[dy](a.Lq.a(),JG));a.bw=e.Ba(!0);f=d.Ei;GJa(a,f);f&&f[mc]!=sG&&(e[q](c,a.bw),a.td.colorbar=a.bw.a());a.yY=e.Ba(!1);a.S8(d,c)||a.gW(d,c);e[q](c,a.yY);a.Oq=b}
W.gW=function(a,b){var c={color:JD,ab:a.lk,fontSize:a.pm,bold:!1,Tc:!1,Se:!1};this.zj(MC,c,a.A[r]);var d=a.A.top+h[E](a.A[A]/2);this.F.Ii(MC,a.A[G],d,a.A[G]+a.A[r],d,iE,iE,c,b)};W.JE=function(a){if(a){var b=a.Ot;if(b){var c;a.LH?c=a.area:(c=Ti(b,function(a){return HJa(a)},this),c=Zm(c));c&&(c=Kl(c),this.F.hb(c[G],c.top,c[r],c[A],qn,this.Lq));for(c=0;c<b[J];c++)IJa(this,b[c]);JJa(this,a.LH)}}};function HJa(a){var b=[];if(a.Aa){var c=SR(a.Aa);c&&b[C](c)}a.Wc&&b[C](Jl(a.Wc[lz]));return Zm(b)}
function xU(a,b,c,d,e,f,g){var k=a.F.YF(),l=f[H],n=ha(f.sides);null!=n&&Lj(n)||(n=5);var p=ha(f.rotation);null!=p&&Lj(p)||(p=0);p=p/180*h.PI-h.PI/2;l===cBa?(l=xI,n=3):l===wJ?(l=xI,n=4,p+=h.PI/4):l===lta&&(l=xI,n=4);var s=l===zJ;500<n&&(l===xI||l===zJ)&&(l=yE);var u=null;if(l===xI||l===zJ){f=ha(f.dent);null!=f&&Lj(f)||(5<=n?(f=h.cos(h.PI/n),f-=h.pow(h.sin(h.PI/n),2)/h.sin(h.PI/2-h.PI/n)):f=.3);f*=d;l===zJ&&(n*=2);l=new pL;for(u=0;u<n;u++){var v=d;s&&u%2&&(v=f);var z=2*h.PI/n*u+p,B=h.cos(z)*v+b,v=h.sin(z)*
v+c;0<u?l.da(B,v):l[Hz](B,v)}l[bz]();u=a.F.Bc(l,e)}else u=a.F.Ow(b,c,d,e);u&&g&&a.F[q](g,u);a.F.EA(k);return u}
function IJa(a,b){if(b.R){var c=a.F.Ba(!1),d=JP([OG,b[pc]]);a[dy](c.a(),d,OG);if(d=HJa(b))d=Kl(d),a.F.hb(d[G],d.top,d[r],d[A],qn,c);b.Aa&&a.Dt(b.Aa,c);if(b.Wc)if(d=a.Mb.l[b[pc]],a.Mb.U4&&d&&!d.Dh&&d.QE){var e=b.Wc[lz][G],f=b.Wc[lz][r],g=b.Wc[lz][A],k=e+f/2,l=b.Wc[lz].top+g/2;d.Vv&&a.F.hb(e,l,f,g/2,d.Vv,c);var n=.5*g,p=d.Lc;p&&(p.Nb>n&&(p=p[Bc](),p.mk(n)),a.F.JL(e,l,e+f,l,p,c));d.Cg&&((e=d.QE)||(e={type:yE}),xU(a,k,l,g/2,d.Cg,e,c))}else a.F.hb(b.Wc[lz][G],b.Wc[lz].top,b.Wc[lz][r],b.Wc[lz][A],b.Wc.brush,
c);d=null;b.Eg&&b.Eg.R&&(k=b.Eg[lz].x,l=b.Eg[lz].y,e=b.Eg.brush,d=a.F,g=d.Ba(),d.hb(k,l,12,12,e,g),d[q](c,g),e=new pL,e[Hz](k+2,l+2),e.da(k+12-2,l+12-2),e[Hz](k+12-2,l+2),e.da(k+2,l+12-2),k=new bn,k.hd(Ae),k.mk(2),d.sa(e,k,g),d=g.a(),g=JP([oya,b[pc]]),a[dy](d,g));a.F[q](a.Lq,c)}}function JJa(a,b){b&&(KJa(a,b.iZ,-1),b.hZ&&a.Dt(b.hZ,a.Lq),KJa(a,b.gZ,1))}function KJa(a,b,c){if(b){var d=sL(b[Qz]),d=a.F.sa(d,b.brush,a.Lq);b.Bu&&(b=JP([PG,c]),a[dy](d,b))}}
function GJa(a,b){if(b){var c=b[gy],d=a.F,e=a.bw;SGa(c.jZ,d,e);TGa(c.kZ,d,e);UGa(c.lZ,d,e);c=a.F.hb(b.QH[G],b.QH.top,b.QH[r],b.QH[A],qn,a.bw);a[dy](c,Hsa)}}W.zj=function(a,b,c){var d=b[yc];a=this.F.ml(a,b);a>c&&(d=h.max(1,h[t](b[yc]*c/a)));return d};function yU(a,b){var c=a.td[b];c&&(a.F.Yf(c),delete a.td[b])}W.HF=function(a,b){var c=a[Py]?PR(a,this.Dr.pc()):QR(a,this.F,this.yY).a();this[dy](c,b)};W.Dt=function(a,b,c){(a=LJa(this,a,c))&&this.F[q](b,a);return a};
function LJa(a,b,c){var d=b.I;if(!d||0==d[J])return null;a=a.F;var e=b.ba,f=b.Kq,g=null!=b.Gb?b.Gb:0,k=b[sA]?b[sA]:{x:0,y:0},l=b.sb,n=!!l||c||!1;c=a.Ba();if(0===g&&f){var p=SR(b);if(p){var s=h[yb](p[G]-3)+.5,u=h[t](p.top-1)+.5;a.hb(s,u,h[t](p[cd]+3)+.5-s,h[t](p[Mc]+1)+.5-u,f,c)}}for(f=0;f<d[J];f++)p=d[f],0===g?a.Sd(p[id],p.x+k.x,p.y+k.y,p[J],b.Kc,b.Jc,e,c):uCa(a,p[id],p.x+k.x,p.y+k.y,p[J],g,b.Kc,b.Jc,e,c);if(n){n=null;if(0===g)(p=SR(b))&&(n=a.hb(p[G],p.top,p[cd]-p[G],p[Mc]-p.top,qn,c));else{var v=
Dj(g);b=hk(b);b.Gb=0;k=(new CL(k.x,k.y))[Zy](-v);Ex(b,new RR(k.x,k.y));for(f=0;f<d[J];f++)k=(new CL(d[f].x,d[f].y))[Zy](-v),b.I[f].x=k.x,b.I[f].y=k.y;if(p=SR(b))d=[new CL(p[G],p.top),new CL(p[cd],p.top),new CL(p[cd],p[Mc]),new CL(p[G],p[Mc])],Z(d,function(a){a[Zy](v)}),d=sL(d,!1),n=a.sa(d,qn,c)}l&&n&&wCa(a,n,l,FEa(e))}return c.a()}W.De=function(a,b,c){var d=this.td[b];null!=d?this.F[Bz](a,c,d):this.F[q](a,c);this[dy](c,b)};
W.registerElement=function(a,b,c){a&&(this.F.bo(a,b),this.td[b]=a,c&&(this.tw[c]||(this.tw[c]=[]),$i(this.tw[c],b)||this.tw[c][C](b)))};function zU(a,b){var c=a.td[b];c&&(a.F.Yf(c),delete a.td[b])}W.ul=function(a){var b=[];if(this.td[a]){var c=this.F.ul(this.td[a]);c&&b[C](c)}a=this.tw[a]||[];for(var d=0;d<a[J];++d)(c=this.F.ul(this.td[a[d]]))&&b[C](c);return Zm(b)};function AU(a,b){return a.V&&a.V.brush||a.brush||b.Cg}function BU(a,b){return null===a.$r?null:a.$r||b.Lc}function CU(a){return a[H]==SG||a[H]==sD||a[H]==ZI}function DU(a,b){return null!=a[Yz]?a[Yz]:b.HL}function MJa(a,b){var c=a.k[b],d=a.k[b-1],e=a.k[b+1],d=!d||!d.V||d.Qe,e=!e||!e.V||e.Qe;return!(!c||!c.V||c.Qe)&&d&&e}function vU(a,b,c){b=a.l[b];return b.$g&&ci(b.E5)?(a=a.l[b.E5].k[c],a=null!=a?a.Vf.ol:a,null!=a?kj(b.k,a,function(a,b){return a-b.Vf.ol}):c):c}
function NJa(a,b){return a.V&&null!=a.V[Lz]?a.V[Lz]:null!=a[Lz]?a[Lz]:b.ad}function EU(a,b){return NJa(a,b)+en(AU(a,b))/2}function OJa(a){return a.Td&&a.kb==Mg&&a[Vz]==Tg}
function FU(a,b){for(var c=new UL,d=!0,e=!0,f=null,g=null,k=0;k<a.k[J];k++){var l=a.k[k];if(l&&l.V&&null!=l.V.x&&null!=l.V.y){d&&(f=k,d=!1);var n=l.V,p=BU(l,a);e||null===p?(c[Hz](n.x,n.y),e=!1):a.aY?c.Bp(p,a.k[g].cs.x,a.k[g].cs.y,l.bs.x,l.bs.y,n.x,n.y):c.da(p,n.x,n.y);g=k}else e=!b||d}!d&a.ija&&(d=b?g:a.k[J]-1,f=b?f:0,null!=d&&null!=f&&a.k[d]&&a.k[f]&&(p=BU(a.k[f],a),a.aY?c.Bp(p,a.k[d].cs.x,a.k[d].cs.y,a.k[f].bs.x,a.k[f].bs.y,a.k[f].V.x,a.k[f].V.y):c[bz](p)));return c}
function GU(a){for(var b=new UL,c=!0,d=0;d<a.k[J];d++){var e=a.k[d].V;null!=e.x&&null!=e.y?(c||b.da(BU(a.k[d],a),e.vM,e.wM),(c||e.vM!=e.tM||e.wM!=e.uM)&&b[Hz](e.tM,e.uM),c=!1):c=!0}return b}function PJa(a,b,c){return(c=(a=a.ce)&&a[c||0])&&c[mc].Ee(b)}function QJa(a,b,c){return(c=(a=a.Kd)&&a[c||0])&&c[mc].Ee(b)}function RJa(a,b,c){return(c=(a=a.ce)&&a[c||0])&&c[mc].rk(b)}function SJa(a,b,c){return(c=(a=a.Kd)&&a[c||0])&&c[mc].rk(b)}
function TJa(a,b,c,d){for(var e=a.l,f=null,g=da,k,l=new Kk(b,c),n=0,p=e[J];n<p;n++){var s=e[n];if(!s.$g)if(a.kb===pI){t:{var u=b,v=c;k=d;var z=s.Oz.x-u,B=s.Oz.y-v,D=0<-z*(s.Oz.y-s.kf.y)+B*(s.Oz.x-s.kf.x);if(0<-(s.yt.x-s.Hh.x)*B+(s.yt.y-s.Hh.y)*z&&D&&(z=h[zd](h.pow(s.yt.x-s.Hh.x,2)+h.pow(s.yt.y-s.Hh.y,2)),h[zd](h.pow(s.yt.x-u,2)+h.pow(s.yt.y-v,2))<z+k)){s=!0;break t}s=!1}if(s)return{Wa:n}}else{u=0;for(v=s.k[J];u<v;u++)if((k=s.k[u])&&null!=k.V)switch(k=k.V,s[H]){case SG:case XD:case ZI:k=Mk(l,k);k<
d && k < g && (f = {QL: u, Wa: n}, g = k);
    break;
    case cE:
    case BD:
        z = null;
        s[H] === BD ? z = new Il(k[G], k.top, k[r], k[A]) : s[H] === cE && (z = k.line, B = h.min(k[kA].top, z.top), z = new Il(k[kA][G], B, k[kA][r], h.max(k[kA].top + k[kA][A], z.top + z[A]) - B));
        k = d;
        z = z.distance(l);
        (k = z > k ? null : z) && k < g && (f = {QL: u, Wa: n}, g = k);
        break;
    default:
        throw"unknown chart type for getPointDatum.";
}
    if (0 === g)break
}
}
    return f
}

    function HU(a, b) {
        wU[L](this, a, b);
        this.zf = null;
        this.q2 = []
    }

    Y(HU, wU);
    function IU(a, b, c) {
        a.q2[C]({definition: b, id: c})
    }

    function JU(a) {
        var b = a.F.YF();
        Z(a.q2, X(function (a) {
            this.HF(a[gy], a.id)
        }, a));
        a.F.EA(b);
        a.q2 = []
    }

    W = HU[K];
    W.S8 = function (a, b) {
        function c(b) {
            b = a.l[b];
            return !a.jd || b[H] !== ZI || b.HL
        }

        UJa(this, a);
        var d = this.F.Ba(!1);
        this.F[q](b, d);
        this[dy](d.a(), sE);
        Sj(this.zf, function (a) {
            a.Ue || (a.Ue = this.F.Ba(!(ci(a.c6) && !a.c6)))
        }, this);
        this.F.hb(a.A[G], a.A.top, a.A[r], a.A[A], a.Y4, d);
        a.Lz == sG && this.Dt(a[fA], this.zf[fA].Ue);
        a.iF && this.Dt(a.iF, this.zf.axistitle.Ue);
        Z(a.Da, function (a, b) {
            a.Uc && KU(this, a.Uc, null, b)
        }, this);
        Sj(a.ce, function (b) {
            VJa(this, a, b)
        }, this);
        Sj(a.Kd, function (b) {
            WJa(this, a, b)
        }, this);
        var e = new Il(a.A[G], a.A.top,
a.A[r],a.A[A]);this.F.EA(e);for(var f=[],g=0;g<a.l[J];g++)c(g)&&f[C]({OE:a.l[g].OE,index:g});nj(f,function(a,b){return lj(a.OE,b.OE)});for(g=0;g<f[J];g++){var k=f[g][pc];LU(this,a.l[k],k)}a.jd&&a.l[0][H]===ZI&&XJa(this,a,b);for(g=0;g<a.Da[J];g++)a.Da[g].sb&&(f=JP([Xs,g]),IU(this,a.Da[g].sb,f));g=this.F.YF();Sj(a.ce,function(a){YJa(this,a)},this);Sj(a.Kd,function(a){YJa(this,a)},this);this.F.EA(g);JU(this);var l=this.F.Ba(!1),e=this.F.uF(l,e);this.F[q](d,e);Z(wEa,function(a){var c=this.zf[a].Ue;if(c){var e;
switch(this.zf[a][mc]){case BE:e=l;break;case vG:e=d;break;case kI:e=b}this.F[q](e,c)}},this);return!0};
function UJa(a,b){a.zf={};var c=a.zf;Xw(c,{position:kI});c.annotation={position:BE};c.annotationtext={position:vG};c.area={position:BE};c.bar={position:BE};c.baseline={position:BE};c.bubble={position:BE};c.categorysensitivityarea={position:BE};c.candlestick={position:BE};c.histogram={position:BE};c.gridline={position:BE};c.interval={position:BE};c.line={position:BE};c.minorgridline={position:BE};c.overlaybox={position:BE};c.pathinterval={position:BE};c.point={position:vG,c6:!1};c.pointsensitivityarea=
{position:vG};c.steppedareabar={position:BE};c.tooltip={position:kI};Xp(c,{position:b.Lz==sG?vG:kI});c.axistick={position:vG};c.axistitle={position:b.ME==sG?vG:kI};var d=b.Ca&&b.Ca[mc]==sG,e=d?a.Lq:null,d=d?vG:kI;c.legend={Ue:e,position:d};c.legendscrollbutton={Ue:e,position:d};c.legendentry={Ue:e,position:d};e=b.Ei&&b.Ei[mc]==sG;c.colorbar={Ue:e?a.bw:null,position:e?vG:kI}}
function LU(a,b,c){if(b[H]==XD)ZJa(a,b,c);else if(b[H]==BD)$Ja(a,b,c);else if(b[H]==CJ)$Ja(a,b,c);else if(b[H]==cE)for(var d=0;d<b.k[J];d++)aKa(a,c,b.k[d],d);else if(b[H]==sD){var e=a.Mb.Td,f=a.Mb.xj;if(0!=b.k[J]){for(var f=f&&!e,g=[],k={start:null,end:null,brush:null},d=0;d<=b.k[J];d++){var l=b.k[d];l&&!l.Qe?null===k[y]?Ka(k,d):(l=l.eF||b.Vv,null===k.brush||$ea(k.brush,l)?(k.end=d,k.brush=l):(g[C](k),k={start:d-1,end:d,brush:l})):f&&d!==b.k[J]||(null===k[y]||null===k.end||g[C](k),d<b.k[J]&&(k={start:null,
end:null,brush:null}))}l=a.F.Ba();for(d=0;d<g[J];d++){var k=g[d],n=k.brush,p=new pL,s=p,u=b,v=e,z=k[y],k=k.end,B=!0,D=null;s[Hz](u.k[z].V.DV,u.k[z].V.EV);for(var N=z;N<=k;N++){var M=u.k[N],R=M.V;M.Qe||(s.da(R.vM,R.wM),R.tM==R.vM&&R.uM==R.wM||s.da(R.tM,R.uM),null!=R.x&&null!=R.y&&(B=!1,D=N))}if(!B)if(v)for(N=k;N>=z;N--)R=u.k[N].V,s.da(R.FV,R.GV),R.DV==R.FV&&R.EV==R.GV||s.da(R.DV,R.EV);else R=u.k[D].V,s.da(R.FV,R.GV),s[bz]();a.F.sa(p,n,l)}d=JP([sD,c]);a.De(a.zf.area.Ue,d,l.a());if(e){d=GU(b);e=JP([SG,
c]);f=d.Bc(a.F);g=bKa(a,b);if(f){l=b.Ln;n=b.Ji;if(l||n){g=g||a.F.Ba();if(l)for(d=0;d<l.Ie[J];d++)a.F.sa(l.Ie[d][Qz],l.Ie[d].brush,g);n&&a.F.sa(n[Qz],n.brush,g)}g&&a.F[q](g,f)}d=g?g.a():f;null!=d&&a.De(a.zf.line.Ue,e,d);MU(a,b,c)}else cKa(a,b,c,f)}}else cKa(a,b,c,a.Mb.xj);if(b.vf&&b.vf.Fi)for(b=b.vf.Fi,d=0;e=b[d];++d)0!=e.line[J]&&(f=new pL,rL(f,e.line,e.ZU),e[Mc]&&rL(f,e[Mc],e.kha),g=a.F.Ba(),a.F.sa(f,e.brush,g),e=g.a(),f=JP([yxa,c,d]),a.De(a.zf.pathinterval.Ue,f,e))}
function dKa(a,b,c,d,e){b[H]==BD||b[H]==CJ?a.Ge(b,c,d,e):b[H]==cE?aKa(a,c,d,e):b[H]==XD?a.IH(b,c,d,e):NU(a,b,c,d,e,a.zf.point.Ue)}function ZJa(a,b,c){var d=a.zf.bubble.Ue,e=VR(b.k[J],function(a){return a});b.Yga&&mj(e,function(a,c){var d=b.k[a],e=b.k[c];return(e?e.V[Lz]:0)-(d?d.V[Lz]:0)});for(var f=0;f<e[J];f++){var g=e[f],k=b.k[g];k&&(a.IH(b,c,k,g),k=a.F.Sd(k[id],k.V.x,k.V.y,k.Zga,iE,iE,k.ba,d),g=JP([WD,c,g]),a.F.bo(k,g))}}function $Ja(a,b,c){for(var d=0;d<b.k[J];d++)a.Ge(b,c,b.k[d],d)}
W.Ge=function(a,b,c,d){if(c&&c.V){var e=c.brush||AU(c,a),f=a[H]==BD?ds:DJ,g=JP([f,b,d]),k=c.V.Rq||c.V,e=this.F.fl(k[G],k.top,k[r],k[A],e),k=null,l=c.V.outline,n=c.Ln,p=c.Ji;if(l||n||p){k=this.F.Ba();this.F[q](k,e);if(l){var s=c.Lc||a.Lc,l=sL(l,!0);this.F.sa(l,s,k)}if(n)for(s=0;s<n.Ie[J];s++)l=n.Ie[s][kA],this.F.hb(l[G],l.top,l[r],l[A],n.Ie[s].brush,k);p&&this.F.hb(p[kA][G],p[kA].top,p[kA][r],p[kA][A],p.brush,k)}e=k?k.a():e;this.De(this.zf[f].Ue,g,e);c.sb&&(f=JP([Xs,b,d]),IU(this,c.sb,f));c.Uc&&KU(this,
c.Uc,b,d);c.V.fr&&eKa(this,a,b,d,c.V.fr)}};function bKa(a,b){var c=null,d=null;Z(b.k,function(a,f){MJa(b,f)&&(c||(c=this.F.Ba()),d||(d=rn(b.Lc.re,b.Lc.qi)),DU(a,b)||this.F.oe(a.V.x,a.V.y,b[uz],d,c))},a);return c}
function cKa(a,b,c,d){var e=JP([SG,c]);if(0>=b[uz])zU(a,e),MU(a,b,c);else{var f=FU(b,d);if(!aj(f.md)){d=(f=f.Bc(a.F))&&d?null:bKa(a,b);if(f){var g=b.Ln,k=b.Ji;if(g||k){d||(d=a.F.Ba());if(g)for(var l=0;l<g.Ie[J];l++)a.F.sa(g.Ie[l][Qz],g.Ie[l].brush,d);k&&a.F.sa(k[Qz],k.brush,d)}d&&a.F[q](d,f)}f=d?d.a():f;null!=f&&a.De(a.zf.line.Ue,e,f);MU(a,b,c)}}}
function XJa(a,b,c){for(var d=0,e=b.l[J];d<e;d+=2){var f=b.l[d],g=b.l[d+1],k=f.k[J];if(0!=k)for(var l=new bn({stroke:f.Cg.cb(),Xg:f.Cg.Pe,ua:1}),n=0;n<k;n++){var p=f.k[n],s=g.k[n];p&&p.V&&!p.Qe&&a.F.JL(p.V.x,p.V.y,s.V.x,s.V.y,l,c)}}}function MU(a,b,c){for(var d=0;d<b.k[J];d++)NU(a,b,c,b.k[d],d,a.zf.point.Ue)}W.IH=function(a,b,c,d){NU(this,a,b,c,d,this.zf.bubble.Ue)};
function fKa(a,b,c,d){var e=null,f=b.Ji,g=b.Ln,k=b.M7;if(f||g||k)e=a.F.Ba();k&&a.F.sa(k[Qz],k.brush,e);(k=b[Px])&&k[H]||(k={type:yE});f&&xU(a,f.x,f.y,f[Lz]+.5,f.brush,k,e);if(g)for(f=0;f<g.Ie[J];f++)xU(a,g.x,g.y,g.Ie[f][Lz],g.Ie[f].brush,k,e);b=xU(a,b.V.x,b.V.y,c,d,k);e&&a.F[q](e,b);return e?e.a():b}
function NU(a,b,c,d,e,f){var g;if(g=d&&d.V&&!d.Qe)t:{var k=d.V;g=EU(d,b);var l=a.Mb.A;if(k.x-g>=l[cd]||k.x+g<=l[G]||k.y-g>=l[Mc]||k.y+g<=l.top)g=!1;else{if((k.x>=l[cd]||k.x<=l[G])&&(k.y>=l[Mc]||k.y<=l.top)){g*=g;var n=k.x-l[cd],p=k.x-l[G],s=k.y-l[Mc],k=k.y-l.top,l=n*n,p=p*p,s=s*s,k=k*k;if(l+s>=g&&l+k>=g&&p+k>=g&&p+s>=g){g=!1;break t}}g=!0}}g&&(g=JP([b[H]==XD?WD:sI,c,e]),DU(d,b)?a.De(f,g,fKa(a,d,NJa(d,b),AU(d,b))):zU(a,g),d.sb&&(f=JP([Xs,c,e]),IU(a,d.sb,f)),d.Uc&&KU(a,d.Uc,c,e),d.V.fr&&eKa(a,b,c,e,
d.V.fr))}function aKa(a,b,c,d){if(c&&c.V){var e=a.F.fl(c.V.line[G],c.V.line.top,c.V.line[r],c.V.line[A],c.Lc),f=a.F.fl(c.V[kA][G],c.V[kA].top,c.V[kA][r],c.V[kA][A],c.Pz),g=a.F.Ba();a.F[q](g,e);a.F[q](g,f);if(e=c.Ln)for(f=0;f<e.Ie[J];f++){var k=e.Ie[f][kA];a.F.hb(k[G],k.top,k[r],k[A],e.Ie[f].brush,g)}(e=c.Ji)&&a.F.hb(e[kA][G],e[kA].top,e[kA][r],e[kA][A],e.brush,g);e=JP([bE,b,d]);a.De(a.zf.candlestick.Ue,e,g.a());c.sb&&(b=JP([Xs,b,d]),IU(a,c.sb,b))}}
function KU(a,b,c,d){if(b){var e=b.G5,f=a.Mb.A;if(!(!e||e.x<f[G]||e.x>f[cd])&&(f=b[gA])&&!aj(f)){var g=[oD,d];null!=c&&cj(g,c,1);var g=JP(g),k=e.x,l=e.y,n=e[J],p=e[F],e=e[Vz]==Tg?[n,1]:[1,n],e=a.F.fl(h.min(k,k+e[0]),h.min(l,l+e[1]),h.abs(e[0]),h.abs(e[1]),new bn({fill:p}));a.De(a.zf.annotation.Ue,g,e);e=a.F.Ba();g=[qD,d];null!=c&&cj(g,c,1);k=null;b.bundle&&!b.bundle.$U&&(f=[b.bundle[Wc]],k=-1);b=a.F.YF();for(l=0;l<f[J];l++)if(n=f[l],p=LJa(a,n,!0)){if(n.ha){var s=JP([Xs,c,d,l]);IU(a,n.ha,s)}a.F[q](e,
p);n=gj(g);n[C](k||l);n=JP(n);a[dy](p,n)}a.F.EA(b);c=JP(g);a.De(a.zf.annotationtext.Ue,c,e.a())}}}
function eKa(a,b,c,d,e){if(null!=b.vf){var f=a.F.Ba();b=b.vf.qF;for(var g=0;g<e[J];g++){var k=e[g][kA],l=b[e[g].pF];if(l&&l[x]!=sD&&l[x]!=SG){var n=l.brush;if(0==k[r]&&0==k[A])l=l.aM/2,0<l&&(k=a.F.Ow(k[G],k.top,l,n),a.F[q](f,k));else if(0==k[r]||0==k[A])l=new pL,l[Hz](k[G],k.top),l.da(k[G]+k[r],k.top+k[A]),a.F.sa(l,n,f);else a.F[q](f,a.F.fl(k[G],k.top,k[r],k[A],n))}}f.q&&(c=JP([xG,c,d]),f=f.a(),a.De(a.zf[Gb].Ue,c,f))}}
function VJa(a,b,c){var d=X(function(a,d){var e=h[t](a.X),l=null!=a[J]?a[J]:b.A[A],n=c.Jj.X,n=h.min(n,n+c.Jj[Ox]*l);return this.F.hb(e,n,1,l,a.brush,d)},a),e=X(function(a,d){var e=h[t](a.X),l=null!=a[J]?a[J]:b.A[Mc],n=c.Jj.X,n=h.min(n,n-c.Jj[Ox]*l);return this.F.hb(e,n,1,l,a.brush,d)},a);gKa(a,c,d,e)}
function WJa(a,b,c){var d=X(function(a,d){var e=h[t](a.X),l=null!=a[J]?a[J]:b.A[r],n=c.Jj.X,n=h.min(n,n+c.Jj[Ox]*l);return this.F.hb(n,e,l,1,a.brush,d)},a),e=X(function(a,d){var e=h[t](a.X),l=null!=a[J]?a[J]:b.A[G],n=c.Jj.X,n=h.min(n,n-c.Jj[Ox]*l);return this.F.hb(n,e,l,1,a.brush,d)},a);gKa(a,c,d,e)}
function gKa(a,b,c,d){var e=X(function(a,c,d){if(a){var e=this.zf[c].Ue,n=JP([b[Cd],c]);Z(a,function(a,f){var u=JP([b[Cd],c,f]);hKa(this,a,d,e,u,n)},this)}},a);e(b.Ia,cva,c);e(b.Th,rra,d);d=a.zf.baseline.Ue;e=JP([b[Cd],CD]);hKa(a,b.Eb,c,d,e)}function hKa(a,b,c,d,e,f){var g;if(g=b&&b.R)g=b.brush,g=!(!on(g)&&!nn(g));g&&(b=c(b,d),a[dy](b,e,f))}
function YJa(a,b){var c=a.zf,d=a.Dt(b[fA],c.axistitle.Ue),e=JP([b[Cd],UJ]);a[dy](d,e);if(b[id]){var f=c.axistick.Ue,g=JP([b[Cd],FG]);Z(b[id],function(a,c){if(a.R){var d=this.Dt(a.Aa,f),e=JP([b[Cd],FG,c]);this[dy](d,e,g)}},a)}}W.m5=function(a,b){this.bM(a);this.h2(a,b)};
W.bM=function(a){var b=this.Oq;if(b){for(var c in b.l){var d=a.l[c];if(bS(b.l[c],ak({k:null}))){var e=b.l[c].k,f;for(f in e){var g=e[f];if(g.sb){var k=JP([Xs,ha(c),ha(f)]);yU(this,k)}if(g=g.Uc)for(var l in g[gA])g[gA][l].ha&&(k=JP([Xs,ha(c),ha(f),ha(l)]),yU(this,k));dKa(this,d,ha(c),d.k[f],ha(f))}}else{for(f in b.l[c].k)b.l[c].k[f].sb&&(k=JP([Xs,ha(c),ha(f)]),yU(this,k));LU(this,d,ha(c))}}for(var n in b.Da)if(c=b.Da[n],c.sb&&(k=JP([Xs,ha(n)]),yU(this,k)),g=c.Uc){for(l in g[gA])g[gA][l].ha&&(k=JP([Xs,
    null, ha(n), ha(l)]), yU(this, k));
    KU(this, a.Da[n].Uc, null, ha(n))
}
    JU(this)
}
};
    W.h2 = function (a, b) {
        for (var c in b.l) {
            var d = a.l[c];
            if (bS(b.l[c], ak({k: null})))for (var e in b.l[c].k) {
                var f = new nQ(2);
                oQ(f, 0, d.k[e]);
                oQ(f, 1, b.l[c].k[e]);
                f = f[tz]();
                dKa(this, d, ha(c), f, ha(e))
            } else f = new nQ(2), oQ(f, 0, d), oQ(f, 1, b.l[c]), d = f[tz](), LU(this, d, ha(c))
        }
        for (var g in b.Da)b.Da[g].sb && (c = JP([Xs, ha(g)]), IU(this, b.Da[g].sb, c)), b.Da[g].Uc && (c = new nQ(2), oQ(c, 0, a.Da[g].Uc), oQ(c, 1, b.Da[g].Uc), c = c[tz](), KU(this, c, null, ha(g)));
        JU(this)
    };
    function iKa(a) {
        this.x = a.x || 0;
        this.y = a.y || 0;
        this.pf = new RR(this.x, this.y);
        kb(this, a[J]);
        cx(this, a[id])
    }

    function jKa(a) {
        cx(this, a[id]);
        this.ba = a.ba;
        this.I = a.I;
        this.Kc = a.Kc;
        this.Jc = a.Jc;
        this.sb = void 0 !== a.sb ? a.sb : O;
        this.de = a.de;
        this.Gb = null != a.Gb ? a.Gb : 0;
        Ex(this, void 0 !== a[sA] ? a[sA] : null);
        this.hC = !!a.hC
    }

    jKa[K].W$ = function () {
        var a = this, b = Ti(this.I, function (b) {
            var d = a[sA] ? a[sA] : {x: 0, y: 0}, e = tL(b.x + d.x, b[J], a.Kc);
            b = tL(b.y + d.y, a.ba[yc], a.Jc);
            return e[y] == e.end || b[y] == b.end ? null : new Fl(b[y], e.end, b.end, e[y])
        }), b = Si(b, ji);
        return Zm(b)
    };
    function kKa(a) {
        a = Si(a[rc](Zh), function (a) {
            return null != a && Di(a) !== O
        });
        for (var b = {}, c = 0; c < a[J]; c++) {
            var d = a[c][rc](Yh), e = Ti(d[0][rc](Re), Di), f = rm(Di(d[1]));
            0 === e[J] ? jk(b, f) : Z(e, function (a) {
                b[a] = b[a] || {};
                jk(b[a], f)
            })
        }
        return b
    }

    var OU = {}, lKa = !1;

    function mKa(a) {
        if (!lKa) {
            var b = {
                colors: [{color: Kla, dark: Cla, light: Qla}, {color: Gla, dark: Dla, light: Nla}, {
                    color: Jla,
                    dark: Bla,
                    light: Rla
                }, {color: Ala, dark: wla, light: Ila}, {color: Pla, dark: Hla, light: Mla}, {
                    color: yla,
                    dark: vla,
                    light: Fla
                }],
                backgroundColor: {gradient: {color1: xla, color2: tla, x1: FB, y1: FB, x2: GB, y2: GB}},
                titleTextStyle: {color: Uh},
                hAxis: {textStyle: {color: Uh}, titleTextStyle: {color: Uh}},
                vAxis: {textStyle: {color: Uh}, titleTextStyle: {color: Uh}},
                legend: {textStyle: {color: Uh}},
                chartArea: {backgroundColor: {stroke: lB, fill: Q}},
areaOpacity:.8};OU.classic=b;b={titlePosition:sG,axisTitlesPosition:sG,legend:{position:sG},chartArea:{width:GB,height:GB},vAxis:{textPosition:sG},hAxis:{textPosition:sG}};OU.maximized=b;b={enableInteractivity:!1,legend:{position:Q},seriesType:sD,lineWidth:1.6,chartArea:{width:GB,height:GB},vAxis:{textPosition:Q,gridlines:{color:Q},baselineColor:Q},hAxis:{textPosition:Q,gridlines:{color:Q},baselineColor:Q}};OU.sparkline=b;lKa=!0}return OU[a]}

    function PU(a) {
        var b = {};
        Ya(b, a[F] || a);
        var c = Um(b[F]);
        c == Q ? (b.wb = a.darker || c, b.ij = a.lighter || c) : (c = Hm(c), b.wb = a.darker || Fm(Mm(c, .25)), b.ij = a.lighter || Fm(Nm(c, .25)));
        return b
    }

    function QU(a, b, c, d) {
        this.kg = a;
        this.b = b;
        this.rm = d;
        this.Ld = c;
        this.Ha = fo(this.b, Gra, {ab: d.lk, fontSize: d.pm, lc: d.Xv});
        this.re = Wn(this.b, Fra, iB);
        this.ym = Rn(this.b, Era, .8);
        this.hV = 0;
        this.XE = 1;
        this.ZE = 2;
        this.Vq = 3;
        this.Wq = 4;
        this.fp = this.g5 = this.f5 = this.i5 = this.h5 = O;
        this.zV = this.b.S(HE, WT);
        this.bN = PU(this.zV[0])[F];
        this.TE = this.Qq = this.AV = this.yV = this.Wz = this.Tz = null;
        this.yj()
    }

    QU[K].yj = function () {
        function a(a, b, d) {
            if (c.H() <= a)return O;
            var e = c.D(a);
            if (b && !$i(d, e))throw m(sf + a + " must be of type " + d[me](jr));
            if (!b && $i(d, e))throw m(sf + a + " cannot be of type " + d[me](jr));
            return e
        }

        var b = this.rm, c = this.kg, d = c.H();
        if (3 > d)throw m("Data table should have at least 3 columns");
        a(this.hV, !0, [Eh]);
        var e = a(this.XE, !1, [Eh]), f = a(this.ZE, !1, [Eh]);
        this.h5 = c.Ra(this.XE);
        this.i5 = c.Ra(this.ZE);
        qi(this.Vq) && this.Vq < d ? (this.fp = a(this.Vq, !0, [T, Eh]), this.fp == Eh && (this.Tz = {}, this.Wz = []), this.f5 = c.Ra(this.Vq)) :
this.Vq=null;var g=!1;qi(this.Wq)&&this.Wq<d?(a(this.Wq,!0,[T]),this.g5=c.Ra(this.Wq),g=In(this.b,Lza,!0)):this.Wq=null;b.Da=[];b.Nq={};for(d=0;d<c.M();d++){var k=c.um(d);b.Nq[k]=d}b.l=[{type:XD,Wg:In(this.b,[$ya,rF],!0),HL:!0,Yga:g,k:[],dwa:this.Tz,ewa:this.Wz}];b.Ft=e;b.rF=[f];b.Sf={};b.Sf.bubbles=1;b.Kn=[]};function nKa(a,b,c){for(var d=a.kg,e=0;e<d.M();e++){var f=d[I](e,a.XE),g=d[I](e,a.ZE),f=yT(b.ea,f),g=yT(c.ea,g);null!=f&&RU(b,f);null!=g&&RU(c,g)}}
function oKa(a,b,c,d){for(var e=0;e<a.kg.M();e++){var f;t:{f=a;var g=b,k=c,l=e,n=f.kg,p=n[I](l,f.hV),s=n.Ea(l,f.hV),u=n[I](l,f.XE),v=n[I](l,f.ZE),z=null;if(null!=f.Vq&&(z=n[I](l,f.Vq),null==z)){f=null;break t}var B=null;if(null!=f.Wq&&(B=n[I](l,f.Wq),null==B)){f=null;break t}n=f.Ld(s,f.Ha)[r];if(f.fp==T)f.yV=Ym(f.yV,z);else if(f.fp==Eh){var D=z,N=f.Tz[D];if(!N){var N=iJ+D+Ue,M=Wn(f.b,N+FE,f.zV[f.Wz[J]%f.zV[J]]),M=PU(M),R=In(f.b,N+wK,!0),N=Tn(f.b,N+GG,D),N={color:M[F],Fz:R,Ez:N};f.Tz[D]=N;f.Wz[C](D)}}f.AV=
Ym(f.AV,B);u=wT(g.ea,u);v=wT(k.ea,v);null===u||null===v?f=null:(SU(g,u)&&SU(k,v)&&(g.nc(u),k.nc(v)),g=f.cW(l,s),f={id:p,text:s,Zga:n,ba:f.Ha,de:g,Vf:{x:u,y:v,color:z,size:B}})}a.rm.l[0].k[C](f)}if(a.fp==T)a.Qq=BFa(a.b,a.yV),d.a6(a.Qq);else if(a.fp==Eh)for(e=0;e<a.Wz[J];e++)b=a.Wz[e],c=a.Tz[b],c.Fz&&a.rm.Kn[C]({index:e,id:b,text:c.Ez,brush:new bn({fill:c[F]}),R:!0});a.TE=sHa(a.b,a.AV)}
QU[K].cW=function(a,b){var c=this.kg,d=c.Ea(a,this.XE),e=c.Ea(a,this.ZE),d=[{title:this.h5,value:d},{title:this.i5,value:e}];null!=this.Vq&&(e=c.Ea(a,this.Vq),d[C]({title:this.f5,value:e}));null!=this.Wq&&(c=c.Ea(a,this.Wq),d[C]({title:this.g5,value:c}));return{title:b,I:d}};function pKa(){this.Ym=0;this.rY=this.aq=-1;this.gs=0;this.JH=-1}
pKa[K].create=function(a,b,c,d,e){if(0!=a[J]&&(a=Si(a,function(a){return null!=a}),mj(a),0!=a[J]))if(a[0]==a[a[J]-1])this.Ym=1,this.aq=a[0],this.rY=a[0],this.JH=0;else{var f=h[yb](.5*a[J])-1,g=h.min(a[J]-1,h[yb]((100-b)/100*a[J])-1),k=h.max(0,h[yb](b/100*a[J])-1);b=qKa(a);var l=a[f]-h.min(a[f]-a[0],1.5*(a[f]-a[k]));l!=a[0]&&(this.gs=1,b&&(l=h[t](l)));var n=a[f]+h.min(a[a[J]-1]-a[f],1.5*(a[g]-a[f])),f=Si(a,function(a){return a<n&&a>l});this.Ym=qi(c)&&0<c?c:rKa(l,n,f[J],b,d,e);this.aq=this.Ym*(1==this.gs?
h[E](l/this.Ym):h[t](l/this.Ym));1==this.gs&&this.aq<a[0]&&(this.gs=0);a=h[t]((n-this.aq)/this.Ym);this.rY=this.Ym*a+this.aq;this.JH=a+this.gs}};function qKa(a){for(var b=0;b<a[J];b++)if(!Kj(a[b]))return!1;return!0}function sKa(a){var b=[];1==a.gs&&b[C](yna+(a.aq.toPrecision(10)-0));for(var c=a.JH-a.gs,d=0;d<c+1;d++)b[C]((d*a.Ym+a.aq).toPrecision(10)-0+Qe);return b}function tKa(a){for(var b=[],c=0;c<=a.JH+1;c++)b[C]((c-a.gs)*a.Ym+a.aq);return b}

    function rKa(a, b, c, d, e, f) {
        if (a == b)return 1;
        if (0 == c)return b - a;
        c = h[zd](c);
        var g = null != e && 0 < e, k = null != f && 0 < f;
        e = g && k ? f > e ? Aj(c, e, f) : c : g ? h.max(c, e) : k ? h.min(c, f) : c;
        a = (b - a) / e;
        b = .8 * a;
        e = 1.2 * a;
        f = h[E];
        if (!(a > e || a < b || b >= e)) {
            c = 1;
            g = a;
            do {
                var g = a, l = c, k = f;
                0 == g || !Lj(g) || 0 >= l || (l = (0 == g ? 1 : h.pow(10, h[yb](-h.log(h.abs(g)) / h[Uz]) - 1)) * h.pow(10, h.max(0, l)), l *= 0 < g ? 1 : -1, g = h.max(5 * k(l * g / 5), 1) / l);
                c++
            } while (!(g >= b && g <= e) && 5 > c);
            a = 5 > c ? g : a
        }
        return d ? .5 < a ? h[E](a) : 1 : a
    }

    function uKa(a, b, c) {
        this.rm = a;
        this.za = c ? $n(b, Bsa, IIa, c) : Q;
        this.Ha = fo(b, Csa, {ab: a.lk, fontSize: a.pm, lc: this.za == sG ? a.Xv : Q});
        this.oW = Un(b, Asa);
        this.me = this.fc = null
    }

    W = uKa[K];
    Sw(W, function () {
        return this.za
    });
    bb(W, function () {
        return 1.5 * this.Ha[yc]
    });
    W.getArea = function () {
        return this.fc
    };
    W.ip = function (a) {
        this.fc = a
    };
    W.a6 = function (a) {
        this.me = a
    };
    W.Bw = function () {
        if (!this.fc || !this.me)return null;
        var a = {
            top: this.fc.top,
            left: this.fc[G],
            width: this.fc[cd] - this.fc[G],
            height: this.fc[Mc] - this.fc.top,
            orientation: Tg,
            ba: this.Ha,
            c$: JD,
            d$: this.oW
        }, b = BS(this.me, a, [], this.rm.$c);
        return null != b ? {position: this.za, scale: this.me, QH: a, definition: b} : null
    };
    function TU(a, b, c) {
        this.W2 = a;
        this.qa = b;
        this.XT = a - b / 2;
        this.Sja = c;
        Kp(this, 0)
    }

    TU[K].gu = function () {
        return this.XT
    };
    TU[K].hn = function (a) {
        this.XT = a
    };
    TU[K].getCenter = function () {
        return this.XT + this.qa / 2
    };
    bb(TU[K], function () {
        return this.qa
    });
    function vKa(a, b) {
        this.vJ = a;
        this.vz = b;
        for (var c = 0, d = b[J]; c < d; c++)Kp(b[c], c)
    }

    function wKa(a) {
        for (var b = 0, c = 0, d = a.vz[J]; c < d; c++)b += a.vz[c][Oz]();
        if (b > a.vJ)throw m("Not enough space for labels. Need: " + b + " got: " + a.vJ);
        a.vz[ce](function (a, b) {
            var c = a.W2, d = b.W2;
            return c == d ? a[pc] > b[pc] ? 1 : 0 : c > d ? 1 : -1
        });
        c = 0;
        for (d = a.vz[J]; c < d; c++) {
            var b = a.vz[c], e = xKa(a, b.gu(), b[Oz]());
            b.hn(e)
        }
        c = [];
        b = 0;
        for (d = a.vz[J]; b < d; b++)c[C]([a.vz[b]]);
        for (; yKa(a, c););
    }

    function yKa(a, b) {
        for (var c = 0; c < b[J] - 1; c++) {
            var d = b[c], e = b[c + 1], f = d[d[J] - 1];
            if (f.XT + f.qa > e[0].gu()) {
                for (var f = a, g = e, e = 0; e < g[J]; e++)d[C](g[e]);
                for (var k = 0, e = g = 0; e < d[J]; e++)k += d[e].W2, g += d[e][Oz]();
                k = k / d[J] - g / 2;
                k = xKa(f, k, g);
                for (e = 0; e < d[J]; e++)f = d[e], f.hn(k), k += f[Oz]();
                b[le](c + 1, 1);
                return !0
            }
        }
        return !1
    }

    function xKa(a, b, c) {
        return Aj(b, 0, a.vJ - c)
    }

    function UU(a, b, c, d) {
        this.rm = a;
        this.za = c ? $n(b, LG, HIa, c) : Q;
        this.iO = $n(b, KG, JIa, this.za == PD ? iE : AJ);
        c = Tg;
        if (this.za == ah || this.za == Os || this.za == HG || this.za == RD) c = Rh;
        this.lb = c;
        this.Ha = fo(b, MG, {ab: a.lk, fontSize: a.pm, lc: this.za == sG ? a.Xv : Q});
        this.Or = !1;
        this.d8 = fo(b, fwa, this.Ha);
        this.Ld = a.$c;
        this.gH = this.Ha[yc];
        d = d ? Aj(d, 1, 2) : 1;
        this.Lk = this.gH * d;
        this.nu = h[E](this.Ha[yc] / (1.618 * 1.618));
        this.RF = this.fc = null;
        this.jY = In(b, jwa, !0);
        this.Dja = $n(b, iwa, ST, this.lb);
        this.Bja = co(b, gwa);
        this.Cja = co(b, hwa);
        this.fg = null;
        this.PO = this.nu;
        this.tx = this.ux = this.iY = 0;
        this.m6 = this.za == $J ? Pn(b, bwa, 1) : 1;
        this.XF = 0
    }

    Sw(UU[K], function () {
        return this.za
    });
    UU[K].getArea = function () {
        return this.fc
    };
    UU[K].ip = function (a) {
        this.fc = a
    };
    function zKa(a) {
        a.RF = Si(a.rm.Kn, function (a) {
            return a.R
        })
    }
UU[K].Bw=function(){if(!this.fc)return null;if(this.za!=Q)if(this.lb==Rh)AKa(this);else{for(var a=[1,9,99,0],b=0;b<a[J];++b){var c;t:{c=a[b];var d=this.fc[cd]-this.fc[G],e=!1;1!=c&&(d-=2*(this.Lk+this.nu),e=!0,0!=c&&(d-=VU(this,c)+this.nu));var f=WU(this,this.RF,d);if(0==f[J])this.Or=!1;else{this.fg=[];for(var g=this.RF;0<g[J];){if(0<c&&this.fg[J]==c){c=!1;break t}for(var k=[BKa(this,f,g,e)],l=1;l<this.XF&&g[J]!=f[J];l++)g=jj(g,f[J]),f=WU(this,g,d),k[C](BKa(this,f,g,e));k=CKa(this,k);this.fg[C](k);
g=jj(g,f[J]);f=WU(this,g,d)}this.Or=1<this.fg[J]}c=!0}if(c)break}this.Or&&(this.iY=h[E]((this.fc.top+this.fc[Mc]-this.Lk)/2),this.tx=this.fc[cd]-this.Lk,this.ux=this.tx-this.PO-this.Lk,this.jY&&(a=VU(this,this.fg[J]),this.ux-=a+this.PO))}a=this.fg&&0<this.fg[J]?this.fg[0]:null;if(this.Or){b=1<this.fg[J];c=this.iY;d=null;this.jY&&(d=ana+this.fg[J],e=this.ux+this.Lk,f=this.tx-e,d={text:d,ba:this.d8,Kq:null,I:[{x:e+f/2,y:c,text:d,length:f}],Kc:iE,Jc:AJ,sb:O,anchor:null,Gb:0});var g=this.Dja==Rh,k=this.Lk,
l=h[E](k/2),n=this.ux,p=this.tx,f=e=null;g?(e=[{x:n+k,y:c+k},{x:n+l,y:c},{x:n,y:c+k}],f=[{x:p,y:c},{x:p+k,y:c},{x:p+l,y:c+k}]):(e=[{x:n+k,y:c+k},{x:n+k,y:c},{x:n,y:c+l}],f=[{x:p,y:c},{x:p+k,y:c+l},{x:p,y:c+k}]);c={Bu:this.Bja,DP:this.Cja};b={iZ:{path:e,Bu:!1,pe:c,brush:c.DP},gZ:{path:f,Bu:b,pe:c,brush:b?c.Bu:c.DP},hZ:d}}else b=null;return{position:this.za,area:this.fc,fg:this.fg,Ot:a,LH:b}};
function AKa(a){var b=h.max(a.fc[cd]-a.fc[G]-(a.Lk+a.nu),0),c=a.fc[Mc]-a.fc.top,d=h.max(c-2*a.gH,0),e=a.RF,f=a.rm;OJa(f)&&e[dq]();var g=Ti(e,function(a){a=QP(this.Ld,a[id],this.Ha,b,da);0==a.I[J]&&(a.I=[O]);return a},a);if(a.za!=HG||f.oV!=SG&&f.oV!=sD)if(c=XU(a,g,c),a.Or=DKa(e,c),a.Or)if(c=XU(a,g,d),ci(c[0])&&0!=c[0][J]){for(a.fg=[];0<e[J];){f=EKa(a,c,e);a.fg[C](f);for(f=0;ci(c[f])&&0!=c[f][J];)++f;g=jj(g,f);c=XU(a,g,d);e=jj(e,f)}a.Or&&(a.iY=h[E](a.fc[Mc]-a.gH),a.ux=a.fc[G],a.tx=a.ux+a.Lk+a.PO,a.jY&&
(d=VU(a,a.fg[J]),a.tx+=d+a.PO))}else a.Or=!1;else f=EKa(a,c,e),a.fg=[f];else f=FKa(a,g,c,e),a.fg=[f]}function XU(a,b,c){var d=a.Ha[yc],e=h[E](d/1.618),f=h[E](d/3.236);a=GKa(a,b,d+e,d+f);return XR(a,c)}function HKa(a,b){var c=Yj(a.rm.ce),d=a.rm.l[b],e=Ti(d.k,function(a){return!a||a.Qe?null:new Kk(a.V.x,a.V.y)}),d=cS(e,c.ef,d.xj);return null===d?IKa(e,c.ef):d}
function IKa(a,b){a=Si(a,ji);var c=-(kj(a,b,function(a,b){return lj(a,b.x)})+1),c=jj(a,0,c);return(c=Zi(c,function(a){return null!==a.y}))?c.y:null}
function FKa(a,b,c,d){for(var e=a.fc[cd]-a.fc[G],f=h[E](a.fc[G]),g=[],k=[],l=a.rm.Cz==iF,n=0;n<d[J];n++){var p=d[n],s=QP(a.Ld,p[id],a.Ha,e,b[n].I[J]),u={};u.id=p.id;u.brush=p.brush[Bc]();var v=gk(a.Ha);Ya(v,u.brush.cb());u.Aa={text:p[id],ba:v,Kq:null,I:[],Kc:AJ,Jc:AJ,sb:s.te?p[id]:O,anchor:null,Gb:0};v.lc&&u.brush.hd(v.lc,1);u.R=!0;for(var z=0;z<s.I[J];z++)u.Aa.I[C]({length:e,text:s.I[z]});l&&(z=a.Ld(u.Aa.I[0][id],v)[r],u.Eg={},Ww(u.Eg,{x:f+z+5}),u.Eg.brush=u.brush,u.Eg.R=!1);Kp(u,p[pc]);z=HKa(a,
u[pc])||0;v=a.Ld(u.Aa.I[0],v)[A];p=new TU(z,u.Aa.I[J]*v,u);g[C](p);k[C](u)}wKa(new vKa(c,g));for(z=0;z<g[J];z++)for(p=g[z],a=p.gu(),u=p.Sja,b=u.Aa.I,n=0;n<b[J];n++)b[n].y=h[E](n*v+a),b[n].x=f,l&&(u.Eg[lz].y=b[n].y);return k}
function EKa(a,b,c){for(var d=a.Lk+a.nu,e=a.fc[cd]-a.fc[G]-d,f=a.Ha[yc],g=h[E](f/1.618),k=h[E](f/3.236),l=f+g,n=f+k,f=[],k=0,p=h[E](a.fc[G]),s=0;s<c[J];s++){var u=c[s],v=b[s][J];if(0!=v){var z=QP(a.Ld,u[id],a.Ha,e,v),v={};v.id=u.id;v.Aa={text:u[id],ba:a.Ha,Kq:null,I:[],anchor:new RR(p,0),Kc:AJ,Jc:AJ,sb:z.te?u[id]:O,Gb:0};v.Wc={};Ww(v.Wc,new Il(p,k,a.Lk,a.gH));v.Wc.brush=u.brush[Bc]();a.Ha.lc&&v.Wc.brush.hd(a.Ha.lc,1);v.R=!0;for(var B=0;B<z.I[J];B++)0<B&&(k+=n),v.Aa.I[C]({x:d,y:k,length:e,text:z.I[B]});
Kp(v,u[pc]);k+=l;f[C](v)}}b=h[E](a.fc.top);a.Or||(g=k-g,c=a.fc[Mc]-a.fc.top,a.iO==sF?b+=c-g:a.iO==iE&&(b+=h[t]((c-g)/2)));for(s=0;s<f[J];s++)v=f[s],v.Wc[lz].top+=b,v.Aa[sA].y+=b;return f}function GKa(a,b,c,d){for(var e=Ui(b,function(a,b){return h.max(a,b.I[J])},0),f=[],g=0;g<e;g++){var k=0==g?c:d;Z(b,function(a,b){g<a.I[J]&&f[C]({key:b,min:0==g&&0==b?this.Ha[yc]:k,Wb:[]})},a)}return f}function DKa(a,b){var c=a[J]-1;return 1<a[J]&&1>b[c][J]}
function CKa(a,b){var c=a.fc[Mc]-a.fc.top,d=a.Ha[yc],e=c-a.XF*d,f=1<a.XF?e/(a.XF-1):0,g=(c-((d+f)*b[J]-f))/2,k=[];Z(b,function(a){var b=h[E](g);Z(a,function(a){a.Aa[sA].y+=b;a.Wc[lz].top+=b});g+=d+f;ij(k,a)});return k}function WU(a,b,c){var d=a.Lk+a.nu,e=h.min(a.rm[r]*(2-1.618)/2,c);if(e<d)return[];a=JKa(a,e,b);return WR(a,c)}
function BKa(a,b,c,d){for(var e=a.fc[cd]-a.fc[G],f=a.Lk+a.nu,g=h[E](1.618*a.Ha[yc]),k=[],l=0,n=h[E](a.fc.top),p=0;p<b[J];p++){var s=c[p],u=QP(a.Ld,s[id],a.Ha,b[p]-f-(0<p?g:0),1),v=0<u.I[J]?u.I[0]:O,z=a.Ld(v,a.Ha)[r],B=[{x:l+f,y:0,length:z,text:v}],D={};D.id=s.id;D.Aa={text:s[id],ba:a.Ha,Kq:null,I:v?B:[],anchor:new RR(0,n),Kc:AJ,Jc:AJ,sb:u.te?s[id]:O,Gb:0};D.R=!0;D.Wc={};D.Wc.brush=s.brush[Bc]();a.Ha.lc&&D.Wc.brush.hd(a.Ha.lc,1);Ww(D.Wc,new Il(l,n,a.Lk,a.gH));Kp(D,s[pc]);k[C](D);l+=z+f+g}b=a.fc[G];
    d || (d = l - g, a.iO == sF ? b += e - d : a.iO == iE && (b += h[t]((e - d) / 2)));
    for (p = 0; p < k[J]; p++)D = k[p], Za(D.Wc[lz], D.Wc[lz][G] + b), D.Aa[sA].x += b;
    return k
}

    function JKa(a, b, c) {
        var d = a.Lk + a.nu, e = h[E](1.618 * a.Ha[yc]);
        return Ti(c, function (a, c) {
            var k = this.Ld(a[id], this.Ha)[r] + d, l = h.min(b, k), k = k - l;
            0 < c && (l += e);
            return {min: l, Wb: [k]}
        }, a)
    }

    function VU(a, b) {
        for (var c = Xe; 10 <= b;)c += Xe, b /= 10;
        return a.Ld(c + jr + c, a.d8)[r]
    }

    function YU(a, b, c, d, e) {
        this.nA = a;
        this.Ub = null;
        Op(this, b);
        this.$c = c;
        this.Ej = this.Cf = null;
        a = this.N = this.e7();
        a.$c = c;
        pa(a, d);
        Sa(a, e);
        a.kb = $n(b, Nh, BIa, Q);
        a.lk = Tn(b, MF);
        a.pm = Pn(b, NF, h[E](h.pow(2 * (a[r] + a[A]), 1 / 3)));
        a.oV = $n(b, aza, CIa, SG);
        a.Wg = In(b, rF, !0);
        a.pr = In(b, GAa);
        a.Kz = $n(b, dJ, nfa, Bh);
        a.U4 = In(b, cwa);
        a.LE = co(b, zD);
        a.Y4 = co(b, mE);
        c = a.Y4;
        d = a.LE;
        c = pn(c) ? c.cb() : pn(d) ? on(c) ? Xm(c.cb(), d.cb(), c.Pe) : d.cb() : null;
        a.KL = c;
        a.tga = Wn(b, DD, O);
        a.W4 = Wn(b, YF, O);
        a.Xv = a.KL || O;
        c = Tn(b, UJ);
        a.Lz = $n(b, DAa, TT, jI);
        d = fo(b, WJ, {
            ab: a.lk,
            fontSize: a.pm, lc: a.Lz == sG ? a.Xv : Q
        });
        Xp(a, {text: c, ba: d, Kq: null, I: [], Kc: AJ, Jc: sF, sb: O, anchor: null, Gb: 0});
        a.ME = $n(b, qra, TT, jI);
        a.Pc = In(b, yG);
        a.Kt = In(b, Uva, !1);
        a.V4 = In(b, rza, !0);
        a.xj = In(b, wG);
        a.Cz = $n(b, Qva, OIa, bF);
        this.d7();
        this[Kc]();
        if (a.Cz == iF && (!a.Sf || a.Sf.line != a.l[J]))throw m("DIVE interactivity model is only supported when all series are of type line.");
    }

    YU[K].e7 = function () {
        return new uU
    };
    YU[K].Bz = function () {
        return this.N
    };
La(YU[K],function(){var a=this.N;KKa(this);var b=this.y8(),c=this.x8(),d=null,e=a.kb;!a.jd||e!==pI&&e!==ZI?a.U4&&e!==pI&&e!==WD&&(d=2):d=2;this.Cf=new UU(a,this[Eq],b,d);this.Ej=new uKa(a,this[Eq],c);this.w8();zKa(this.Cf);var b=this.N,e=b[fA].ba[yc],c=this.Cf.Ha[yc],f=this.Cf[fz](),g=this.Ej.Ha[yc],k=this.Ej[fz](),d=b.Lz==jI?b[fA][id]:O,l=QP(this.$c,d,b[fA].ba,b.A[r],da),n=h.max(2,h[E](e/3.236)),p=h.max(2,h[E](c/1.618)),g=h.max(2,h[E](g/1.618)),s=h.max(2,h[E](1.618*b.pm)),u=[];u[C]({key:QD,min:2,
Wb:[s-2]});u[C]({key:aK,min:0,Wb:[da]});0<l.I[J]&&u[C]({key:UJ,min:e+2,Wb:[]});if(f==$J){for(var f=this.Cf,s=b.A[r],v=f.RF,z=WU(f,v,s),B=1;(0==f.m6||f.m6>B)&&z[J]<v[J];)++B,v=jj(v,z[J]),z=WU(f,v,s);s=B;for(f=0;f<s;++f)u[C]({key:JG,min:c+2,Wb:[p-2]})}k==$J&&u[C]({key:GE,min:this.Ej[Oz]()+2,Wb:[g-2]});for(f=1;f<l.I[J];f++)u[C]({key:UJ,min:e+2,Wb:[n-2]});k=XR(u,b.A.top);e=k[aK][0]||0;l=k[fA]||[];n=QP(this.$c,d,b[fA].ba,b.A[r],l[J]);for(f=0;f<n.I[J];f++)e+=l[f],b[fA].I[C]({text:n.I[f],x:b.A[G],y:e,length:b.A[r]});
b[fA].sb=n.te?d:O;d=k.legend||[];0<d[J]&&(this.Cf.XF=d[J],c=e+d[0]-c,e+=Ij[Sc](null,d),this.Cf.ip(new Fl(c,b.A[cd],e,b.A[G])));c=k.colorBar||[];0<c[J]&&(e+=c[0],b=new Fl(e-this.Ej[Oz](),b.A[cd],e,b.A[G]),this.Ej.ip(b));a.Ca=this.Cf.Bw();a.Ei=this.Ej.Bw()});YU[K].d7=function(){var a=this.nA,b=new Mu(a);if(2>b.H())throw m("Not enough columns given to draw the requested chart.");if(In(this[Eq],MI)){for(var c=[],a=a.M()-1;0<=a;a--)c[C](a);b.Wn(c)}this.Ub=b};
function LKa(a,b,c,d){null!=b||(b=d());b=h[E](b);null!=a||(a=(c-b)/2);a=h[E](a);b=h.min(a+b,c);return{start:a,end:b}}

    function KKa(a) {
        var b = a.N, c = go(a[Eq], qE, b[r]), d = go(a[Eq], nE, b[A]), e = go(a[Eq], pE, b[A]), f = go(a[Eq], oE, b[r]),
            g = X(function () {
                var a = b[r] / 1.618, c = b[r] - b[A] * (1.618 - 1);
                return h[E](a > c ? a : (a + 2 * c) / 3)
            }, a), f = LKa(f, c, b[r], g), c = h.min(f[y], f.end), f = f.end, g = f - c;
        a = X(function () {
            var a = b[A] / 1.618, c = b[A] - b[r] * (1.618 - 1);
            return h[E](a > c ? a : (a + 2 * c) / 3)
        }, a);
        e = LKa(e, d, b[A], a);
        d = h.min(e[y], e.end);
        e = e.end;
        b.A = {left: c, right: f, width: g, top: d, bottom: e, height: e - d}
    }

    function ZU(a, b, c, d) {
        return new MKa(a, b, c, d)
    }

    function MKa(a, b, c, d) {
        this.nP = b;
        this.sd = new dp({pattern: a});
        this.fsa = c;
        this.esa = d
    }

    ta(MKa[K], function (a) {
        a /= this.nP;
        return this.sd.Oc(a) + (se + (2 > h.abs(a) ? this.fsa : this.esa))
    });
    function $U() {
        this.mea = new Date;
        this.gl(Hf)
    }

    $U[K].gl = function (a) {
        switch (a) {
            case gg:
                a = Yo.YEAR_FULL;
                break;
            case Pf:
                a = iba;
                break;
            case Jf:
                a = Yo.YEAR_MONTH_ABBR;
                break;
            case uf:
                a = Ko[Ad].SHORT_DATE;
                break;
            default:
                a = Ko[Ad].SHORT_DATETIME
        }
        this.sd = new bp({pattern: a, timeZone: 0})
    };
    ta($U[K], function (a) {
        this.mea[Oc](a);
        return this.sd.Oc(this.mea)
    });
    function aV() {
        this.U3 = null;
        this.uE = [];
        this.BX = this.lz = this.gL = null
    }

    function bV(a, b) {
        a.U3 = b;
        return a
    }

    function cV(a, b) {
        a.gL = b;
        return a
    }

    aV[K].lp = function (a) {
        this.lz = a;
        return this
    };
    function NKa(a, b) {
        var c;
        c = ZR(qi(b) ? b : 3);
        c = [ZU(c, h.pow(10, 15), jpa, jpa), ZU(c, h.pow(10, 12), Hpa, Hpa), ZU(c, h.pow(10, 9), coa, coa), ZU(c, h.pow(10, 6), Woa, Woa)];
        a.uE = c;
        return a
    }

    function dV(a) {
        var b;
        b = ZR(qi(5) ? 5 : 3);
        b = [ZU(b, h.pow(10, 15), Of, Of), ZU(b, h.pow(10, 12), Wf, Wf), ZU(b, h.pow(10, 9), aoa, aoa), ZU(b, h.pow(10, 6), Gf, Gf)];
        a.uE = b;
        return a
    }

    aV[K].sm = function () {
        var a;
        a = this.BX ? new dp(this.BX) : new dp({pattern: ZR(qi(this.U3) ? this.U3 : 16)});
        return new OKa(a, this.uE, this.gL, this.lz)
    };
function OKa(a,b,c,d){this.qsa=a;this.uE=b||[];this.gL=c||null;this.lz=d||null}ta(OKa[K],function(a){var b=0>a;a=h.abs(a);if(this.gL){var c=this.gL;if(0!=a){var d=h[t](h.log(h.abs(a))/vEa)+1;d>c?(c=h.pow(10,d-c),a=h[E](a/c)*c):(c=h.pow(10,c-d),a=h[E](a*c)/c)}}c=null;for(d=0;d<this.uE[J];d++){var e=this.uE[d];if(a>=e.nP){c=e[Nb](a);break}}null==c&&(c=this.qsa.Oc(a));this.lz&&(a=this.lz.symbol,d=this.lz.usePadding?se:O,c=this.lz[mc]==Os?c+d+a:a+d+c);return b?Te+c:c});function eV(a,b,c,d,e,f){this.wd=a;this.za=b;this.qx=c;this.tu=d;this.Ob=f}function PKa(a,b,c){return new eV(a,b,!0,!0,0,c)}function fV(a,b,c){return new eV(a,b,!1,!1,0,c)}Sw(eV[K],function(){return h[E](this.za)});gb(eV[K],function(){return this.wd});eV[K].bd=function(){return this.Ob};eV[K].Bm=function(a){this.Ob=a};function gV(a,b){this.dL=a;this.cL=b||0;var c;c=this.dL+this.cL;if(1<=c)c=1;else{var d=c[kc]();c=0;var e=d[qd](nF);-1!=e?c=ka(d[hc](e+1),10):e=d[J];d=d[qd](Ue);-1!=d&&(c-=e-1-d);c=h.pow(10,-c)}this.jea=c;this.za=0}W=gV[K];Da(W,function(){this.za++;return this[I]()});W.Qg=function(){this.za--;return this[I]()};gb(W,function(){return h[E]((this.za*this.dL+this.cL)*this.jea)/this.jea});sa(W,function(a){this.za=h[t]((a-this.cL)/this.dL);return this[I]()});
ra(W,function(a){this.za=h[yb]((a-this.cL)/this.dL);return this[I]()});Wa(W,function(a){this.za=h[E]((a-this.cL)/this.dL);return this[I]()});function QKa(a,b,c,d){this.la=a;this.ug=b;this.lb=c;this.sd=d}function RKa(a,b){var c=b[J];if(0<c)for(;--c;)if(SKa(a,b[c-1],b[c]))return!1;return!0}function SKa(a,b,c){var d=TKa(a,b),e=TKa(a,c);return h.abs(a.la.ib(b)-a.la.ib(c))<(d+e)/2}function TKa(a,b){var c=a.sd[Nb](b);return a.ug.cv(c,a.lb)}function UKa(a,b,c){b=a.la.tf(b);a=a.la.tf(c);return h.abs(a-b)}function hV(a,b){for(var c=[],d=0;d<b[J];d++){var e=b[d];c[C](PKa(e,a.la.ib(e),a.sd[Nb](e)))}return c}

    function iV(a, b, c, d) {
        if (b == c)return [b];
        if (!Lj(b))return [c];
        var e = [];
        for (b = a[yb](b); b <= c;)e[C](b), b = a[qc]();
        1 == e[J] && (b = (new gV(d / 10))[t](c), b != e[0] && e[C](b));
        return e
    }

    function jV(a, b, c, d, e) {
        this.GK = a;
        this.pT = b;
        this.tU = c;
        this.G3 = d;
        this.xE = e;
        a = kV(this, a);
        b = kV(this, b) - a;
        this.pz = (d - c) / b;
        this.pL = this.pz * a - c
    }

    jV[K].ib = function (a) {
        return kV(this, a) * this.pz - this.pL
    };
    jV[K].tf = function (a) {
        switch (a = (a + this.pL) / this.pz, this.xE) {
            case 0:
                a = h.pow(h.E, a);
                break;
            case 1:
                break;
            default:
                a = h.pow(a * this.xE + 1, 1 / this.xE)
        }
        return a
    };
    function kV(a, b) {
        switch (a.xE) {
            case 0:
                return h.log(b);
            case 1:
                return b;
            default:
                return (h.pow(b, a.xE) - 1) / a.xE
        }
    }

    function lV(a, b, c, d, e, f) {
        this.dt = a;
        this.vK = b;
        this.WA = c;
        this.TA = d;
        this.Kv = e;
        this.dda = f;
        this.dt == this.vK ? e = this.dt / 2 : fa(this.dda) ? e = rT(1, tT(this.vK - this.dt)) / 1E3 : (e = this.dda / 2, 0 < this.dt && (e = h.min(this.dt, e)));
        this.hm = e;
        a >= this.hm ? (this.hg = new jV(a, b, c, d, this.Kv), this.Di = h[E](this.hg.ib(this.hm))) : b <= -this.hm ? (this.hg = new jV(-b, -a, d, c, this.Kv), this.Di = h[E](this.hg.ib(this.hm)), f = 2 * this.Di - d, e = 2 * this.Di - c, this.hg = new jV(-b, -a, f, e, this.Kv)) : a >= -this.hm ? (this.Di = h[E](c), this.hg = new jV(this.hm, b, this.Di,
            d, this.Kv)) : b <= this.hm ? (this.Di = h[E](d), e = 2 * this.Di - c, this.hg = new jV(this.hm, -a, this.Di, e, this.Kv)) : (this.hg = new jV(this.hm, b, 0, 1, this.Kv), e = this.hg.ib(-a), this.Di = h[E](c + e / (e + 1) * (d - c)), b >= -a ? this.hg = new jV(this.hm, b, this.Di, d, this.Kv) : (e = 2 * this.Di - c, this.hg = new jV(this.hm, -a, this.Di, e, this.Kv)));
        this.wg = d < c
    }

    W = lV[K];
    W.$b = function () {
        return this.dt
    };
    W.ec = function () {
        return this.vK
    };
    W.Fo = function () {
        return this.WA
    };
    W.fn = function () {
        return this.TA
    };
W.tf=function(a){if(this.dt==this.vK)return this.dt;var b=this.wg?-1:1;return a*b>this.Di*b?this.hg.tf(a):a*b<this.Di*b?-this.hg.tf(2*this.Di-a):0};W.ib=function(a){return this.dt==this.vK?h.abs(this.WA-this.TA)/2:a>this.hm?this.hg.ib(a):a<-this.hm?2*this.Di-this.hg.ib(-a):this.Di};function mV(a){this.hsa=a[Bb]();this.$K=a[J];this.za=0}W=mV[K];Da(W,function(){this.za++;return this[I]()});W.Qg=function(){this.za--;return this[I]()};gb(W,function(){var a=h[t](this.za/this.$K);return rT(this.hsa[this.za-a*this.$K],a)});sa(W,function(a){this.za=this.$K*uT(a);if(this[I]()!=a)for(;this.Qg()>a;);return this[I]()});ra(W,function(a){this.za=this.$K*tT(a);if(this[I]()!=a)for(;this[qc]()<a;);return this[I]()});
Wa(W,function(a){this.za=this.$K*uT(a);if(this[I]()!=a){for(;this.Qg()>a;);if(a-this[I]()<this[qc]()-a)return this.Qg()}return this[I]()});function nV(a,b,c,d,e){this.hg=a;this.K2=e;this.sq=new QKa(a,c,d,b);this.Ms=new mV([1,2,5])}nV[K].wH=function(){var a=this.K1(),b;this.Ms[t](a);do b=new gV(a),b=iV(b,this.hg.$b(),this.hg.ec(),a),a=this.Ms[qc]();while(!RKa(this.sq,b));return hV(this.sq,b)};nV[K].K1=function(){var a=this.hg.Fo(),b=this.hg.fn(),c=UKa(this.sq,b-this.K2,b),d=UKa(this.sq,a,a+this.K2),c=h.max(d,c),d=this.hg.ib(0);d>=a&&d<=b&&(a=this.hg.tf(this.hg.ib(0)+this.K2),c=h.max(c,a));return this.Ms[yb](c)};function oV(a,b,c,d){this.GK=a;this.pT=b;this.V3=c;this.jfa=d;this.pz=(this.jfa-this.V3)/(this.pT-this.GK);this.pL=this.pz*this.GK-this.V3}W=oV[K];W.tf=function(a){return(a+this.pL)/this.pz};W.ib=function(a){return a*this.pz-this.pL};W.Fo=function(){return this.V3};W.fn=function(){return this.jfa};W.$b=function(){return this.GK};W.ec=function(){return this.pT};function pV(a,b){this.oT=a;this.EK=h[t](a/10);this.it=a-this.EK;this.kc=0;this.tT=tT(h.abs(b));this.cz=this.it*this.tT;this.za=0}function VKa(a){var b=h[t](a.za/a.it);a=10*(a.za+a.EK-b*a.it)/a.oT;0==a&&(a=1);return rT(a,b)}W=pV[K];gb(W,function(){this.za=h.abs(this.kc)+this.cz;return 0<this.kc?VKa(this):0>this.kc?-VKa(this):0});Da(W,function(){this.kc++;return this[I]()});W.Qg=function(){this.kc--;return this[I]()};
sa(W,function(a){var b=this.EK,c=tT(h.abs(a));if(h.abs(a)<=h.pow(10,this.tT))return this.kc=0>a?-1:0,this[I]();0<a?this.kc=this.it*c-this.cz:0>a&&(this.kc=this.cz-this.it*c,b=-b);this[I]()!=a&&(c=this.oT*a/rT(1,uT(h.abs(a))),this.kc+=h[t](c)-b);return this[I]()});
ra(W,function(a){var b=this.EK,c=tT(h.abs(a));if(h.abs(a)<=h.pow(10,this.tT))return this.kc=0<a?1:0,this[I]();0<a?this.kc=this.it*c-this.cz:0>a&&(this.kc=this.cz-this.it*c,b=-b);this[I]()!=a&&(c=this.oT*a/rT(1,uT(h.abs(a))),this.kc+=h[yb](c)-b);return this[I]()});
Wa(W,function(a){var b=tT(h.abs(a));if(h.abs(a)<=h.pow(10,this.tT))return this.kc=0;if(0<a){this.kc=this.it*b-this.cz;if(this[qc]()>a)return a-this[I]()>=this.Qg()-a?this[qc]():this[I]();this.Qg()}else if(0>a){this.kc=this.cz-this.it*b;if(this.Qg()<a)return a-this[I]()<this[qc]()-a?this.Qg():this[I]();this[qc]()}this[I]()!=a&&(b=this.oT*a/rT(1,uT(h.abs(a))),this.kc+=h[E](b)-this.EK);return this[I]()});function qV(a,b,c,d,e,f){this.la=a;this.sd=b;this.ug=c;this.lb=d;this.Zj=f;this.woa=e;this.sq=new QKa(a,c,d,b);this.Ms=new mV([1,2,5])}
qV[K].wH=function(){var a=this.Zj/10,b=this.K1(),c=new pV(b,a),c=iV(c,this.la.$b(),this.la.ec(),b);if(2>c[J])return hV(this.sq,c);var b=c[0],d=c[1];if(0==b){if(3>c[J])return hV(this.sq,c);b=d;d=c[2]}c=rT(1,uT(h.abs(b)));c==b&&(c*=10);this.Ms[yb](c/h.abs(d-b));do if(b=this.Ms.Qg(),c=new pV(b,a),c=iV(c,this.la.$b(),this.la.ec(),b),b=this.sq,d=[],!(1>=c[J]||0!=c[0])){d[C](c[0]);for(var e=1,f=c[J];e<f;e++)SKa(b,c[0],c[e])||d[C](c[e]);c=d}while(!RKa(this.sq,c));return hV(this.sq,c)};
qV[K].K1=function(){var a=this.la.ib(10*this.Zj),b;this.Ms[t](1);do b=this.Ms[qc](),b=this.la.ib(10*this.Zj*(b-1)/b);while(h.abs(a-b)>=this.woa);return this.Ms.Qg()};function WKa(a,b){this.yz=null!=a?a:1;12<this.yz&&(this.dta=new gV(h[t](this.yz/12)));this.cta=b||0;this.om=new Date;this[t](0)}W=WKa[K];gb(W,function(){return this.om[ec]()});Da(W,function(){var a=this.om[Ec](),a=a+this.yz;this.om[Zd](a);return this[I]()});W.Qg=function(){this.om[Zd](this.om[Ec]()-this.yz);return this[I]()};
sa(W,function(a){this.om[Oc](a);1<this.yz&&(this.om[Zd](this.om[Ec]()-(this.om[Ec]()+12-this.cta)%this.yz%12),12<this.yz&&(a=this.dta[t](this.om[Mb]()),this.om.setUTCFullYear(a)));this.om.setUTCDate(1);this.om.setUTCHours(0,0,0,0);return this[I]()});ra(W,function(a){return this[t](a)<a?this[qc]():this[I]()});Wa(W,function(a){return this[t](a)!=a&&a-this[I]()<this[qc]()-a?this.Qg():this[I]()});function XKa(){this.za=0}W=XKa[K];Da(W,function(){this.za++;return this[I]()});W.Qg=function(){this.za--;return this[I]()};gb(W,function(){return rT(1,this.za)});sa(W,function(a){this.za=tT(a);return this[I]()});ra(W,function(a){this.za=uT(a);return this[I]()});Wa(W,function(a){var b=rT(1,uT(a)),c=b/10;this.za=h[E](.4342944819032518*h.log(a-c<b-a?c:b));return this[I]()});function YKa(a){a?(this.ck=[1E3,5E3,1E4,15E3,3E4,6E4,3E5,6E5,9E5,18E5,36E5,108E5,216E5,432E5,864E5,6048E5,2629746E3,7889238E3,31556952E3],this.cf=new mV([1,2,5])):(this.ck=[1E3,6E4,36E5,864E5,6048E5,2629746E3,7889238E3,31556952E3],this.cf=new XKa);this.jT=this.cf[E](this.ck[0]);this.s2=this.cf.Qg();this.gqa=this.s2+(this.jT-this.s2)/2;this.YD=this.ck[this.ck[J]-1];this.cf[E](1);this.cda=this.YD*this.cf[qc]();this.iqa=this.YD+(this.cda-this.YD)/2;rV(this,2)}
function rV(a,b){a.t2=1==b||4==b;2==b?a.za=0:3==b?a.za=a.ck[J]-1:1==b?a.tj=1:4==b&&(a.tj=a.YD)}W=YKa[K];gb(W,function(){return this.t2?this.tj*this.cf[I]():this.ck[this.za]});sa(W,function(a){if(a<this.jT)return rV(this,1),this.cf[t](a);if(a>=this.cda)return rV(this,4),this.tj*this.cf[t](a/this.tj);for(rV(this,2);a>=this.ck[this.za];)this.za++;return this.ck[--this.za]});
ra(W,function(a){if(a<=this.s2)return rV(this,1),this.cf[yb](a);if(a>this.YD)return rV(this,4),this.tj*this.cf[yb](a/this.tj);for(rV(this,3);a<=this.ck[this.za];)this.za--;return this.ck[++this.za]});Wa(W,function(a){if(a<this.gqa)return rV(this,1),this.cf[E](a);if(a>=this.iqa)return rV(this,4),this.tj*this.cf[E](a/this.tj);for(rV(this,3);0<this.za&&a<this.ck[this.za];)this.za--;this.ck[this.za+1]-a<=a-this.ck[this.za]&&this.za++;return this.ck[this.za]});
Da(W,function(){this.t2?(this.cf[qc](),1==this.tj&&this.cf[I]()==this.jT&&rV(this,2)):(this.za++,this.za==this.ck[J]&&(rV(this,4),this.cf[E](1),this.cf[qc]()));return this[I]()});W.Qg=function(){this.t2?(this.cf.Qg(),this.tj==this.YD&&1==this.cf[I]()&&rV(this,3)):(this.za--,-1==this.za&&(rV(this,1),this.cf[E](this.jT),this.cf.Qg()));return this[I]()};function sV(a){a=(new YKa(!0))[E](a);return 2629746E3>a?6048E5==a?new gV(a,3456E5):new gV(a):new WKa(h[E](a/2629746E3))}
function ZKa(a){if(!na(a))return exa;var b=new Date;b[Oc](a);a=O+tV(b[Mb]()[kc](),4);var c=b[Ec](),d=b[Nd](),e=1!=d,f=b[ie](),g=b[he](),k=b.getUTCSeconds(),b=b.getUTCMilliseconds(),l=0!=f||0!=g||0!=k||0!=b;if(0!=c||e||l)a=a+Te+tV((c+1)[kc](),2);if(e||l)a+=Te,a+=tV(d[kc](),2);l&&(a+=Wf,a+=tV(f[kc](),2),a+=ef,a+=tV(g[kc](),2),a+=ef,a+=tV(k[kc](),2),a+=Ue,a+=tV(b[kc](),3));return a}
function uV(a,b){var c=O,d=new Date;d[Oc](a);var e=d[Ec](),f=d[Nd](),g=d[ie](),k=d[he](),l=d.getUTCSeconds(),n=d.getUTCMilliseconds(),c=c+tV(d[Mb]()[kc](),4);if(b==gg)return c;c=c+Te+tV((e+1)[kc](),2);if(b==Jf)return c;c+=Te;c+=tV(f[kc](),2);if(b==uf)return c;c+=Wf;c+=tV(g[kc](),2);c+=ef;c+=tV(k[kc](),2);c+=ef;c+=tV(l[kc](),2);c+=Ue;return c+=tV(n[kc](),3)}function tV(a,b){for(var c=a[J];c<b;c++)a=Xe+a;return a}
function vV(a){if(a==exa||null==a||a==O)return ia;var b=0,c=0,d=1,e=0,f=0,g=0,k=0,b=ka(a[hc](0,4),10);4<a[J]&&(c=ka(a[hc](5,2),10)-1,7<a[J]&&(d=ka(a[hc](8,2),10),10<a[J]&&(e=ka(a[hc](11,2),10),f=ka(a[hc](14,2),10),g=ka(a[hc](17,2),10),k=ka(a[hc](20,3),10))));return Date.UTC(b,c,d,e,f,g,k)}function wV(a,b){if(a[y]==a.end||0==b)return a;var c=(a.end-a[y])*b,d;d=a[y];d=0>d?-$Ka(-d,c):aLa(d,c);var e=a.end,c=0>e?-aLa(-e,c):$Ka(e,c);return new Pm(d,c)}
function aLa(a,b){if(0==a)return 0;for(var c=a,d=0,e=ia;0<c;){var f=tT(c),g=rT(1,f),k=bLa(c);if(5<k&&(e=5*g+d,e=xV(e,f),e<=a&&e>a-b))break;e=k*g+d;e=xV(e,f);if(e<=a&&e>a-b)break;f=k*g;d+=f;c-=f}return e}function $Ka(a,b){if(0==a)return 0;for(var c=a,d=0,e=ia;0<c;){var f=tT(c),g=rT(1,f),k=bLa(c);if(5>k&&(e=5*g+d,e=xV(e,f),e<=a+b&&e>=a))break;e=k*g+d;e=xV(e,f);if(e<=a+b&&e>=a)break;e=(k+1)*g+d;e=xV(e,f);if(e<=a+b&&e>=a)break;f=k*g;d+=f;c-=f}return e}

    function xV(a, b) {
        var c = rT(1, h.abs(b));
        return h[E](a * c) / c
    }

    function bLa(a) {
        var b = tT(a), b = rT(1, b);
        a /= b;
        b = h.abs(h[E](a) - a);
        0 != b && 1E-10 > b && (a = h[E](a));
        return h[t](a)
    }

    function cLa(a, b, c, d, e, f, g, k, l) {
        this.rma = a;
        this.U$ = b;
        this.V$ = c;
        this.ug = d;
        this.dg = e;
        this.la = f;
        this.VQ = g;
        this.lb = k;
        this.K_ = l;
        this.qma = Ho(a);
        this.XQ = Ho(b);
        this.dg.gl(this.U$)
    }

    function dLa(a, b, c) {
        var d = a.la.ib(b);
        c = a.la.ib(c);
        d = (d + c) / 2;
        return fV(a.la.tf(d), d, a.dg[Nb](b))
    }

    function yV(a, b, c, d, e, f, g) {
        this.la = a;
        this.qk = b;
        this.ug = c;
        this.dg = d;
        this.VQ = e;
        this.lb = f;
        this.K_ = g;
        this.X$ = [zV(this, uf, 1), zV(this, uf, 7), zV(this, Jf, 1), zV(this, Jf, 2), zV(this, Jf, 3), zV(this, Pf, 1), zV(this, Jf, 6), zV(this, gg, 1), zV(this, gg, 2), zV(this, gg, 5), zV(this, gg, 10), zV(this, gg, 20), zV(this, gg, 50), zV(this, gg, 100), zV(this, gg, 1E3), zV(this, gg, 1E4), zV(this, gg, 1E7)]
    }

    function zV(a, b, c) {
        return new cLa(a.qk, b, c, a.ug, a.dg, a.la, a.VQ, a.lb, a.K_)
    }

    yV[K].wH = function () {
        for (var a = Ho(this.qk), b = 0; b < this.X$[J]; b++) {
            var c = this.X$[b];
            if (a <= c.XQ) {
                t:{
                    var d = c, e = d.la.$b(), f = d.la.ec();
                    d.dg.gl(d.rma);
                    if (e == f) c = [fV(e, h.abs(d.la.Fo() - d.la.fn()) / 2, d.dg[Nb](e))]; else {
                        var g, c = d.dg[Nb](f);
                        g = new eV(f, d.la.fn(), !0, !0, 0, c);
                        d.dg.gl(d.U$);
                        for (var k = 1 == d.V$ && d.XQ > d.qma, l = sV(d.XQ * d.V$), n = sV(d.XQ), c = [], p = ia, s = l[yb](e), e = n[yb](e); e <= f; e = n[qc]()) {
                            var u = d.la.ib(e);
                            if (e == s) {
                                var s = l[qc](), v = d, z = p, B = e, D = v.ug.cv(v.dg[Nb](z), v.lb),
                                    N = v.ug.cv(v.dg[Nb](B), v.lb);
                                if (h.abs(v.la.ib(z) -
v.la.ib(B))-(D+N)/2<v.VQ){c=null;break t}k?(fa(p)||c[C](dLa(d,p,e)),c[C](new eV(e,u,!0,!0,0,null))):(p=PKa(e,u,d.dg[Nb](e)),c[C](p));p=e}else c[C](new eV(e,u,!1,!0,0,null))}k&&f<e&&(l=d,k=c,e=n,n=l.dg[Nb](f),s=l.ug.cv(n,l.lb),p=e[I](),e=e.Qg(),e=l.la.ib(e),p=l.la.ib(p),l=l.la.ib(f),p=(e+p)/2,l-p>s/2&&k[C](fV(f,p,n)));if(d.K_){f=d;n=g;l=c;k=void 0;i:{for(k=l[J]-1;0<=k;k--)if(null!=l[k].bd()){k=l[k];break i}k=null}null!=k&&(l=f.ug.cv(k.bd(),f.lb),s=f.ug.cv(n.bd(),f.lb),h.abs(k[fz]()-n[fz]())-(l+s)/
                        2 < f.VQ && k.Bm(null));
                            c[C](g)
                        }
                        g = c;
                        for (n = f = 0; n < g[J]; n++)null != g[n].bd() && f++;
                        if (2 > f) c = d, d = c.dg[Nb](c.la.$b()), g = c.dg[Nb](c.la.ec()), d = d + Te + g, g = [], f = h.abs(c.la.Fo() - c.la.fn()), c.ug.mb(d) > f + 40 || g[C](fV(ia, c.la.Fo() + c.la.fn() / 2, d)), c = g; else {
                            i:{
                                d = c;
                                if (!(2 > d[J]))for (g = d[0], f = 1; f < d[J]; f++) {
                                    n = d[f];
                                    if (5 > h.abs(n[fz]() - g[fz]()) && g[I]() != n[I]()) {
                                        d = !0;
                                        break i
                                    }
                                    g = n
                                }
                                d = !1
                            }
                            if (d) {
                                d = [];
                                for (g = 0; g < c[J]; g++)f = c[g], f.tu && !f.qx || d[C](f);
                                c = d
                            }
                        }
                    }
                }
                if (null != c)return c
            }
        }
        return []
    };
    function AV(a, b, c, d, e, f, g, k, l, n, p) {
        e && (e = c, c = d, d = e);
        if (a == b)return g = (d - c) / 2 + c, p = p[Nb](a), [fV(a, g, p)];
        a = 1 == f ? new oV(a, b, c, d) : new lV(a, b, c, d, f, g);
        if (a.$b() == a.ec()) b = 1; else {
            c = h.min(a.Fo(), a.fn());
            d = h.max(a.Fo(), a.fn());
            f = h.abs(a.tf(c));
            e = h.abs(a.tf(d));
            b = h.max(f, e);
            var s = 0, u = a.ib(0);
            if (c > u || u > d) s = h.min(f, e);
            c = a.ib(s);
            b = a.ib(b);
            b = eLa(c, a) / eLa(b, a)
        }
        return (.65 < b ? new nV(a, p, n, k, l) : new qV(a, p, n, k, l, g)).wH()
    }

    function eLa(a, b) {
        var c = b.tf(a), d = b.tf(a + 10);
        return h.abs(d - c)
    }

    function BV(a, b) {
        this.kua = a;
        this.jua = b
    }

    BV[K].mb = function (a) {
        return a[J] * this.kua
    };
    bb(BV[K], function () {
        return this.jua
    });
    BV[K].cv = function (a, b) {
        return b == Tg ? this.mb(a) : this[Oz](a)
    };
    function CV(a, b) {
        this.Vx = a;
        this.Ha = b
    }

    CV[K].mb = function (a) {
        return this.Vx(a, this.Ha)[r]
    };
    bb(CV[K], function (a) {
        return this.Vx(a, this.Ha)[A]
    });
    CV[K].cv = function (a, b) {
        return b == Tg ? this.mb(a) : this[Oz](a)
    };
    function fLa(a, b, c, d, e, f) {
        this.P_ = a;
        this.YQ = b;
        this.b = c;
        this.W8 = d;
        this.hka = Pn(c, d(hva));
        this.jka = Pn(c, d(jva));
        this.ika = Pn(c, d(iva));
        this.gka = Pn(c, d(gva));
        this.fka = Pn(c, d(eva));
        this.O6 = Pn(c, d(fva));
        this.una = Pn(c, d(nva));
        this.V8 = In(c, d(dva));
        this.yf = e;
        this.RH = f
    }

    function gLa(a, b, c, d) {
        return new fLa(hLa, iLa, a, b, c, d)
    }

    fLa[K].aia = function (a, b, c, d, e, f) {
        b = jLa(this, a, b, c);
        a = kfa(this.b, this.W8(ova + b.lp));
        c = lU[b.lp];
        a = kLa(this, {
            Fg: b.Fg,
            Yg: b.Yg,
            K8: b.lp,
            J8: c,
            H8: mU[c],
            I8: a[Nb],
            EY: a[Gb],
            D8: this.hka,
            Bt: e.Bt,
            ud: e.ud,
            E8: this.fka,
            DY: [],
            C8: 0
        }, d, f);
        if (!a || 0 === a.Ia[J])return {Ia: [], Mi: []};
        if (!(this.V8 && 1 == a[jz] && 0 < c)) {
            f = DV(this, e.ud, 1 != a[jz] ? 0 : 1, a.Ia, a.gP);
            if (this.V8 && 1 < a[jz]) {
                if (a.Vja / a[jz] < this.gka) d = []; else {
                    e = e.Bt;
                    c = [];
                    b = new fU(a.Ia[0].ta, new Date(b.Yg + this.RH), lU[b.lp], 1);
                    for (var g = 0; b.zx < b.dB;) {
                        if (0 != g % a[jz]) {
                            var k = b[qc](),
l=d(k[ec]());c[C]({ta:k,X:l,R:!0,brush:e,length:5})}g++}d=c}a=fj(a.Ia,d)}else a=a.Ia;return{Ia:a,Mi:f}}c-=1;g=kU[c];k=kfa(this.b,this.W8(bxa+g));f=kLa(this,{Fg:b.Fg,Yg:b.Yg,K8:g,J8:c,H8:mU[c],I8:k[Nb],EY:k[Gb],D8:this.jka,Bt:e.YL,ud:e.hF,E8:this.O6,DY:a.Ia,C8:this.ika},d,f);if(null==f)return d=DV(this,e.ud,2,a.Ia,a.gP),{Ia:a.Ia,Mi:d};d=DV(this,e.ud,1,a.Ia,a.gP);e=DV(this,e.hF,1,f.Ia,f.gP,d);a=fj(f.Ia,a.Ia);f=fj(d,e);return{Ia:a,Mi:f}};
function jLa(a,b,c,d){var e=h[E](.15*(c-b));b-=e;c+=e;cU(d,lLa,a.YQ);a=cU((c-b)/a.una/2,a.P_,a.YQ);var f=mLa(a);a=Yi(mU,function(a){return oj(a,f)});return{Fg:b,Yg:c,lp:kU[a]}}
function kLa(a,b,c,d){for(var e=Ti(b.I8,function(a){return new bp({pattern:a})}),f=0;f<b.EY[J];++f){var g=b.EY[f],k=0,l=mJa(b.H8,g),l=ZT(new Date(b.Fg+a.RH),l);b.K8===eta&&(l=jJa(l));for(var n=new fU(l,new Date(b.Yg+a.RH),b.J8,g),l=[],p=!0,s=c(b.Fg),u=-1;n.zx<n.dB;){var v=n[qc](),z=c(v[ec]()-a.RH);-1==u&&z>=s&&(u=l[J]);var B=n.Ao();if(null!=B){B=c(B[ec]()-a.RH);if(B<z+1)break;if(B-z<b.D8){p=!1;break}}for(B=!1;k<b.DY[J];){var D=b.DY[k];if(h.abs(D.X-z)<b.C8){B=!0;break}if(D.X>z){k=h.max(0,k-1);break}k++}B||
l[C]({ta:v,X:z,R:!0,brush:b.Bt,length:null})}if(p){1<u&&(l=jj(l,u-1));k=p=null;for(s=0;s<e[J];++s){u=e[s];v=!0;z=[];for(n=0;n<l[J];++n){var B=l[n],D=u.Oc(B.ta),N=d(D,b.ud),N=a.yf?N[A]:N[r];if(n+1<l[J]&&l[n+1].X-B.X<b.E8+N){v=!1;break}z[C]({text:D,size:N})}if(v&&0<z[J]){p=s;k=z;break}}if(null!=p){a=da;for(n=0;n<l[J]-1;++n)a=h.min(a,l[n+1].X-l[n].X);return{Ia:l,gP:k,multiple:g,Vja:a}}}}return null}
function DV(a,b,c,d,e,f){var g=[];if(null!=f)for(var k=0;k<f[J];++k){var l=f[k].Aa,n=l.I[0];g[C](nLa(n.x,n[J],l.Kc,a.O6))}a=1==c?AJ:iE;f=0;k=[];l=2==c?d[J]-1:d[J];for(n=0;n<l;++n){var p=d[n];if(p.R&&e[n]){for(var s=h[E](2==c?(d[n+1].X+p.X)/2:p.X),u=e[n][Ry],v=nLa(s,u,a),z=!0;f<g[J];){var B=g[f];if(Rm(v,B)){z=!1;break}if(B[y]>v.end){f=h.max(0,f-1);break}f++}z&&k[C]({ta:p.ta,R:!0,X:s,Aa:{text:e[n][id],ba:b,I:[{x:s,y:0,text:e[n][id],length:u}],Kc:a,Jc:sF,vwa:e[n][id],anchor:null,Gb:0}})}}return k}
function mLa(a){return Ti(a,function(a){return 0<a?1:0})}function nLa(a,b,c,d){d=ci(d)?d:0;c==AJ?(c=a,a=c+b):(c=h[E](a-b/2),a=h[E](a+b/2));return new Pm(c-d,a+d)}
var lLa=[[1],[50],[500],[0,1],[0,15],[0,30],[0,0,1],[0,0,15],[0,0,30],[0,0,0,1],[0,0,0,6],[0,0,0,12],[0,0,0,0,1],[0,0,0,0,7],[0,0,0,0,0,1],[0,0,0,0,0,3],[0,0,0,0,0,6],[0,0,0,0,0,0,1]],hLa=[[1],[2],[5],[10],[20],[50],[100],[200],[500],[0,1],[0,2],[0,5],[0,10],[0,15],[0,30],[0,0,1],[0,0,2],[0,0,5],[0,0,10],[0,0,15],[0,0,30],[0,0,0,1],[0,0,0,2],[0,0,0,3],[0,0,0,4],[0,0,0,6],[0,0,0,12],[0,0,0,0,1],[0,0,0,0,2],[0,0,0,0,7],[0,0,0,0,0,1],[0,0,0,0,0,3],[0,0,0,0,0,0,1],[0,0,0,0,0,0,10],[0,0,0,0,0,0,50],[0,
0,0,0,0,0,100]],iLa=3;function EV(a,b,c,d,e,f,g){this.SF=c;this.b=b;Kp(this,d);cb(this,$n(b,this.Ja(Nh),FIa,e));this.Yg=this.Fg=null;this.mF=[];this.hr=null;this.Rga=0<a.Sf.bars;c=Tn(b,this.Ja(UJ));d=a.ME===sG?a.Xv:Q;d={ab:a.lk,fontSize:a.pm,lc:d};d=fo(b,this.Ja(WJ),d);Xp(this,{text:c,ba:d,Kq:null,I:[],Kc:iE,Jc:AJ,sb:O,anchor:null,Gb:0});this.bV=!1;this.Mi=null;this.wm=$n(b,this.Ja(wAa),TT,jI);c=this[H]!=Qh||a.kb==ZI?Wn(b,Gwa,O):Wn(b,$wa,O);d=this.wm===sG?a.Xv:Q;c={color:c,ab:a.lk,fontSize:a.pm,lc:d};this.ud=fo(b,this.Ja(RJ),
c);d=Pn(b,this.Ja(lva));d=Xm(this.ud[F],a.KL||ze,d);this.hF=fo(b,this.Ja(RJ),c);Ya(this.hF,d);this.Wga=$n(b,this.Ja(pxa),KIa,hBa);this.b5=$n(b,this.Ja(Mva),LIa,Dwa);c=Wn(b,this.Ja(DD),a.tga);this.Vga=new bn({fill:c});c=Wn(b,this.Ja(ZF),a.W4);this.Bt=new bn({fill:c});this.vp=Pn(b,this.Ja(axa),0);d=Pn(b,this.Ja(kva));a=Xm(c,a.KL||ze,d);a=Wn(b,this.Ja(JH),a);this.YL=new bn({fill:a});this.gp=2;this.a5=h.max(this.gp,h[E](this[fA].ba[yc]/3.236));Rw(this,[]);if(this.Ui=g||b.S(this.Ja(TJ)))this.Ui=Ti(this.Ui,
function(a){var b={};b.v=ci(a.v)?a.v:a;oi(a.f)&&(b.f=a.f);return b});this.fF=0;this.tm=Mn(b,this.Ja(Dg),1);sw(this,this.tm);this.ef=this.Te=null;this.fA=this.lw=0;this.zb={min:-da,max:da};this.dr=null;this.fha=f;f=eS(this.b,this.Ja(ZG),this.Ja(YI));this.iha=f===KH;this.Rz=f===YG||this.iha;this[H]==Qh?(this.mV=this.Eb=this.ea=null,this.qk=$n(b,this.Ja(BAa),Dfa,Hf),this.ZL=da):this.Ui=null}W=EV[K];W.Ja=function(a){return $R(this.SF,a)};
function RU(a,b){qi(b)&&0!==b&&!fa(b)&&(a.ZL=h.min(h.abs(b),a.ZL))}W.iC=function(a){this.ea.iC(this.ZL/10,a||[])};function FV(a,b,c){var d=sU().qh(b);a.Ox=Nn(c,a.Ja($F));var e=a.us(),e=!a.Rz&&bo(c,vF)&&(!bo(c,Xta)||Un(c,a.Ja(Yta+e)));!a.Ui&&(e||0>a.Ox||null===a.Ox&&a.Rz)&&(a.mV=!0,a.Ox=-1);d[Kc](c,a.SF,a.Ox);a.ea=d;a.dataType=b;a.Fg=d.S(c,a.Ja(gh));a.Yg=d.S(c,a.Ja(eh));a.hr=c.S(a.Ja(CD),WIa.vAxis.gridlines.baseline)}
function GV(a,b){a.dr=ao(b,a.Ja(vK),GIa);if(null===a.dr||a.dr==uF){if(a[H]==Qh){var c=a.ea,d=c.S(b,a.Ja(EBa));qi(d)||(d=wT(c,c.S(b,a.Ja(uK))));var e=c.S(b,a.Ja(DBa));qi(e)||(e=wT(c,c.S(b,a.Ja(tK))));null!=d&&(a.zb.min=d);null!=e&&(a.zb.max=e)}else a.zb.min=Mn(b,a.Ja(uK),a.zb.min),a.zb.max=Mn(b,a.Ja(tK),a.zb.max);a.zb.min>a.zb.max&&(c=a.zb.min,a.zb.min=a.zb.max,a.zb.max=c);a.dr=a.zb.min!=-da||a.zb.max!=da?uF:a.fha;a[H]==Qh&&a.dr==uF&&(a.zb.min!=-da&&(a.ea.sc=a.zb.min),a.zb.max!=da&&(a.ea.qc=a.zb.max))}}
function oLa(a){return a.dr==uF&&(a.zb.min==-da||a.zb.max==da)}function pLa(a){if(a[H]==Qh&&!a.ea)throw m("Axis type/data type mismatch for "+a.SF);}
function qLa(a,b,c,d,e,f){a.Te=d+(1==a[Ox]?.5:-.5);a.fF=c-1;a.ef=d+c*a[Ox];c=a.a$(b);rLa(a)&&(a.mV||In(a.b,a.Ja(mva)))&&(a.bV=!0);b=a.bV?sLa(a,b,e,f):tLa(a,b,e,f);return{title:a[fA],name:a.b$(),type:a[H],ap:a.Rz,dataType:a[ez],tm:a.tm,Te:a.Te,ef:a.ef,Xd:{Ee:X(a.L9,a),rk:X(a.pp,a)},position:{Ee:X(a.UH,a),rk:X(a.O7,a)},Jj:c,Eb:b.Eb,Ia:b.Ia,Th:b.Th,text:a.Mi}}
function tLa(a,b,c,d){a[H]==Qh?(uLa(a),a.Ui?vLa(a):a.mV?rLa(a)?wLa(a,b):xLa(a,b):yLa(a)):zLa(a,b,a.fF+1);var e=ALa(a),f=null;if(a[H]==Qh){var f=Ti(a[cz],function(a){return{a9:a,ta:a.ta,X:a.X,R:!0,length:null,brush:this.Bt}},a),g;if(g=a.Rz?BLa(a,f):CLa(a,f))g=Ti(g,function(a){return{ta:this.O7(a),X:a,R:!0,length:null,brush:this.YL}},a),ij(f,g);Ri(f,function(a){if(a.X*this[Ox]<this.Te*this[Ox]||HV(this,a.X))a.R=!1,ej(this[cz],a.a9);delete a.a9},a)}g=null;In(a.b,a.Ja(AAa))&&(f&&(g=gj(f)),e&&ij(g||[],
[e]));a.$W(b,c,d,null);a.YW(b);return{Ia:f,Th:g,Eb:e}}
function sLa(a,b,c,d){IV(a);if(a.ea.sc>=a.ea.qc)return{Ia:null,Th:null,Eb:null};var e=ALa(a);mj(a.mF);for(var f=da,g=1;g<a.mF[J];++g){var k=a.mF[g]-a.mF[g-1];k&&(f=h.min(f,k))}f===da&&(f=0);var l=a.WM(b)[Vz]===Rh,g=0;a.ea instanceof tU&&(g=(new Date(1970,0,1))[ec]());var g=gLa(a.b,X(a.Ja,a),l,g),k={ud:a.ud,Bt:a.Bt,hF:a.hF,YL:a.YL},n=a[Ox];sw(a,1);var p=g.aia(a.ea.sc,a.ea.qc,f,X(a.Fe,a),k,b.$c);sw(a,n);-1===n&&(Ri(p.Ia,function(a){a.X=JV(this,a.X)},a),Ri(p.Mi,function(a){a.X=JV(this,a.X);a.Aa.I[0].x=
JV(this,a.Aa.I[0].x)},a));Ri(p.Mi,function(a){a.ta=this.ea.pp(a.ta[ec]());if(l){var b=a.Aa.I[0].x;a.Aa.I[0].x=a.Aa.I[0].y;a.Aa.I[0].y=b}},a);Ri(p.Ia,function(a){a.ta=this.ea.pp(a.ta[ec]());if(a.X*this[Ox]<this.Te*this[Ox]||HV(this,a.X))a.R=!1,ej(p.Ia,a)},a);var s=Rw(a,[]);Ri(p.Mi,function(a){a.X*this[Ox]<this.Te*this[Ox]||HV(this,a.X)?ej(p.Mi,a):s[C]({ta:a.ta,X:a.X,text:a.Aa[id],R:a.R})},a);a.$W(b,c,d,p.Mi);a.YW(b);return{Ia:p.Ia,Th:null,Eb:e}}
function zLa(a,b,c){var d;a.dr==uF?(a.zb.min==-da?a.zb.min=h.min(0,a.zb.max-1):a.zb.max==da&&(a.zb.max=h.max(b.Da[J],a.zb.min+1)),d=a.zb.max-a.zb.min):(a.zb.min=0,a.zb.max=b.Da[J],d=b.Da[J]);a.Rga&&(d=h.min(d,h[t]((c+1)/2)));a[H]==fE&&(d=h.max(1,d-1));a.fA=DLa(a);a.lw=a.fF/d;Rw(a,VR(b.Da[J],function(a){var c=a-this.fA;return{ta:b.Da[a][$],X:this.Fe(a),text:b.Da[a].Nt[0],R:0<=c&&c<=d}},a))}
function vLa(a){var b=a.ea;mj(a.Ui,function(a,c){return b.I$(a.v,c.v)});0<a.Ui[J]&&(a.nc(wT(b,a.Ui[0].v)),a.nc(wT(b,a.Ui[a.Ui[J]-1].v)));IV(a);b.uI(b.sc,b.qc,!1);-1===a.tm&&(a.Ui=gj(a.Ui),a.Ui[dq]());var c=Ti(a.Ui,function(a){return wT(this.ea,a.v)},a);b.rp(c);var d=xT(a.ea);Rw(a,Ti(a.Ui,function(a){var c=a.v,g=wT(b,c),g=this.Fe(g);a=a.f;oi(a)||(a=d.Oc(c));return{ta:c,X:g,text:a,R:!0}},a))}
function yLa(a){jIa(a.ea,a.Fg,a.Yg,a.dr==yI||oLa(a));a.Rz&&ELa(a);var b=a.ea[cz];oLa(a)&&(b=Si(b,function(a){return a>=this.zb.min&&a<=this.zb.max},a));qi(a.Ox)&&2>a.Ox&&(b=jj(b,0,a.Ox));a.ea.rp(b);a.ea.MI();var c=xT(a.ea);IV(a);Rw(a,Ti(a.ea[cz],function(a){var b=this.ea.pp(a),f=c.Oc(b);return{ta:b,X:this.Fe(a),text:f,R:!0}},a))}
function ELa(a){var b=da,c=null,d,e=a.ea[cz],e=Ti(e,function(a){d=0<a-c?1:-1;a=d*h[t](d*a);c&&0!==a*c&&0<a-c&&(b=h.min(b,h.abs(a-c)));return c=a});b!==da&&(c=null,Ri(e,function(a,g){null!==c&&(c===a&&Pi[le][L](e,g,1),h.abs(a-c)>b&&(d=0<a-c?1:-1,cj(e,c+d*b,g+1)));c=a}));a.ea.rp(e)}
function wLa(a,b){IV(a);var c=a.ea,d=a.WM(b);c.uI(c.sc,c.qc,!1);var e=xT(c);e.gl(a.qk);var f=d.WA,g=d.TA-1,k=new CV(b.$c,a.ud);if(d.wg)var l=f,f=g,g=l;d=(new yV(new oV(c.sc,c.qc,f,g),a.qk,k,e,10,d[Vz],!1)).wH();Rw(a,[]);for(e=0;e<d[J];e++)f=d[e],f.bd()&&a[cz][C]({ta:c.pp(f[I]()),X:f[fz](),text:f.bd(),R:!0})}
function CLa(a,b){if(!b||1>=b[J]||0==a.vp)return null;var c=(b[1].X-b[0].X)/(a.vp+1),d=[],e,f,g=b[0].X;for(e=f=h[t]((g-a.Te)/c);0<e;e--){var k=h[t](g-c*e);1<h.abs(k-a.Te)&&d[C](k)}for(e=0;e<b[J]-1;e++)for(g=b[e].X,f=0;f<a.vp;f++)g+=c,d[C](h[t](g));g=Oi(b).X;f=h[t]((a.ef-g)/c);for(e=1;e<=f;e++)k=h[t](g+c*e),1<h.abs(k-a.ef)&&d[C](k);return d}
function BLa(a,b){if(!b||1>=b[J]||0==a.vp)return null;for(var c=b[0],d=c.ta,e=d,f=[c],g=1;g<b[J]-1;g++)c=b[g],e=d,d=c.ta,0!==d&&(sT(d)||e&&sT(e/d))&&f[C](c);f[C](b[b[J]-1]);b=f;if(1>=b[J])return null;var k=b[1].X-b[0].X,c=[],d=[],l;a.vp=h.min(TIa[J],a.vp);e=TIa[a.vp-1];a.vp=e[J];for(g=0;g<a.vp;g++)f=h.log(e[g])/h.log(10),d[C](f);for(g=0;g<b[J]-1;g++)if(e=b[g].X,f=1,k=b[g+1].ta/b[g].ta,!(0>k)&&sT(k))for(1>k&&(f=-1,e=b[g+1].X),k=b[g+1].X-b[g].X,l=0;l<a.vp;l++)c[C](e+f*k*d[l]);return c}
function ALa(a){var b=null;a[H]==Qh&&a.Eb&&(b={ta:a.Eb.ta,X:a.Eb.X,R:!0,length:null,brush:a.Vga});return b}function uLa(a){null!=a.hr&&a.hr!==sg&&a.nc(wT(a.ea,a.hr));null!=a.Fg&&a.nc(wT(a.ea,a.Fg));null!=a.Yg&&a.nc(wT(a.ea,a.Yg))}
function IV(a){var b=Lj(a.zb.min)?a.zb.min:a.ea.sc,c=Lj(a.zb.max)?a.zb.max:a.ea.qc;b===c&&(b-=1,c+=1);a.lw=a.fF/(c-b);b!==da&&(a.fA=b);if(ci(a.hr)&&a.hr!==sg)b=wT(a.ea,a.hr);else{var d=wT(a.ea,a.ea.f0()),b=Aj(d,b,c);Lj(b)||(b=0)}a.Eb=null;Lj(b)&&(c=a.Fe(b),fa(c)||(a.Eb={ta:a.ea.pp(b),X:c}))}
function xLa(a,b){if(a.dr==yI&&na(a.ea.sc)&&na(a.ea.qc)){var c=wV(new Pm(a.ea.sc,a.ea.qc),.1);a.nc(c[y]);a.nc(c.end)}IV(a);var c=a.WM(b),d=a.ea.yB.inverse(a.ea.sc),e=a.ea.yB.inverse(a.ea.qc);RU(a,d);RU(a,e);var f=a.Rz?0:1,g=new CV(b.$c,a.ud),k,l=a.b;k=new aV;var n=Un(l,a.Ja(PF));bo(l,a.Ja(yua));var p=Nn(l,a.Ja(RF)),s=Un(l,a.Ja(QF)),u=Un(a.b,a.Ja(SF));n||p||s||u?k.BX={pattern:n,scaleFactor:p,prefix:s,suffix:u}:(n=Nn(l,a.Ja(zua)),qi(n)&&bV(k,n),n=Nn(l,a.Ja(Aua)),qi(n)&&cV(k,n),(n=l.S(a.Ja(Bua)))&&k.lp({symbol:n.symbol,
position:n[mc],usePadding:n.usePadding}),In(l,a.Ja(Cua))&&dV(k));k=k.sm();l=[];Lj(d)&&(l=AV(d,e,c.WA,c.TA-1,c.wg,f,a.ZL,c[Vz],40,g,k));Rw(a,[]);for(c=0;c<l[J];c++)d=l[c],e=d[I](),f=a.ea.yB[EA](e),a[cz][C]({ta:e,X:a.Fe(f),text:d.bd(),R:!0})}W.nc=function(a){this[H]==Qh&&null!=a&&SU(this,a)&&(this.ea.nc(a),this.mF[C](a))};function FLa(a){if(a[H]==Qh){var b=a.ea,c=.01*(b.qc-b.sc);0<b.sc&&a.zb.min==-da&&(b.sc=h.max(b.sc-c,0));0>b.qc&&a.zb.max==da&&(b.qc=h.min(b.qc+c,0))}}
W.Fe=function(a){return null!=a?this.Te+(a-this.fA)*this[Ox]*this.lw:null};function JV(a,b){if(null==b)return null;sw(a,1);var c=null!=b?(b-a.Te)*a[Ox]/a.lw+a.fA:null;sw(a,-1);return a.Fe(c)}W.L9=function(a){return this[H]==Qh?wT(this.ea,a):a};W.pp=function(a){return null!=a?this[H]==Qh?this.ea.pp(a):a:null};W.O7=function(a){a=null!=a?(a-this.Te)*this[Ox]/this.lw+this.fA:null;return null!=a?this.pp(a):null};W.UH=function(a){return this.Fe(this.L9(a))};
    function DLa(a) {
        switch (a[H]) {
            case eE:
                return a.zb.min - .5
        }
        return a.zb.min
    }

    function SU(a, b) {
        return a[H] == Qh ? b >= a.zb.min && b <= a.zb.max : b >= h[t](a.zb.min) && b < h[yb](a.zb.max)
    }

    function HV(a, b) {
        return b * a[Ox] > a.ef * a[Ox]
    }

    function rLa(a) {
        return null != a.ea && (a.ea instanceof oU || a.ea instanceof tU)
    }

    function GLa(a, b, c, d, e, f, g, k, l, n) {
        this.fba = a;
        this.Yh = b;
        this.Bqa = c;
        this.Kpa = d;
        this.Qda = e;
        this.UT = f;
        this.Xna = g;
        this.Wna = k;
        this.Vna = l;
        this.eba = n
    }

    function HLa(a, b, c, d) {
        switch (d) {
            case mra:
                return (b - 1 - a) % c;
            default:
                return a
        }
    }

    function KV(a, b, c) {
        b = h[yb]((a.Yh[J] - 0) / (b * c));
        return 2 > a.Yh[J] || 2 > b
    }

    function ILa(a, b, c, d, e) {
        b = HLa(b, a.Yh[J], d, a.Xna);
        for (var f = 1 >= a.Yh[J] ? a.fba : h.abs(a.Yh[1].X - a.Yh[0].X) * d - a.Wna, g = []; b < a.Yh[J]; b += d) {
            var k = a.Yh[b], l = k.R && !a.Vna ? h.min(f, 2 * k.X, 2 * (a.fba - k.X)) : f, n = a.eba(k[id], l, e),
                p = n.te;
            l < f && (p = a.eba(k[id], f, e).te);
            g[C]({ta: k.ta, R: k.R, X: k.X, U6: c, text: k[id], width: n.gh, layout: n, te: p})
        }
        return g
    }

    function JLa(a, b, c, d) {
        var e = b * c;
        d = 1 < b ? 1 : d;
        for (var f = [], g = 0; g < b; g++) {
            var k = ILa(a, a.Bqa + g * c, g * d, e, d);
            ij(f, k)
        }
        mj(f, function (a, b) {
            return a.X - b.X
        });
        return f
    }
function LV(a,b,c){a=JLa(a,b,c,a.Kpa);return Ui(a,function(a,b){return{su:h.max(a.su,b[Xx].I[J]),te:a.te||b.te}},{su:0,te:!1})}function MV(a){for(var b=1,c=a.UT||1,d=LV(a,b,c),e=b;d.te&&b<a.Qda;){b++;if(KV(a,b,c))break;e=b;d=LV(a,e,c)}b=c;if(!a.UT)for(;d.te;){c++;if(KV(a,e,c))break;b=c;d=LV(a,e,b)}return{yX:e,hx:b,su:d.su*e}}function NV(a,b,c,d,e){a=JLa(a,b,c,d);e=Ui(a,function(a,b){var c=b.te?1:0;delete b.te;return a+c},0)<=a[J]*e;return{eO:a,Oea:e}}

    function KLa(a, b, c, d, e) {
        var f = h.min(a.Qda, d);
        b = h.min(b, f);
        c = a.UT || c;
        for (var g = NV(a, b, c, d, e), k = b; !g.Oea && b < f;) {
            b++;
            if (KV(a, b, c))break;
            k = b;
            g = NV(a, k, c, d, e)
        }
        f = c;
        if (!a.UT)for (; !g.Oea;) {
            c++;
            if (KV(a, k, c))break;
            f = c;
            g = NV(a, k, f, d, e)
        }
        return {yX: k, hx: f, eO: g.eO}
    }

    function OV(a, b, c, d, e, f, g) {
        EV[L](this, a, b, fj([pva + d, bG], c), d, e, f, g);
        this.tX = Jn(b, this.Ja(Hza));
        a = Pn(b, this.Ja(Iza), 30);
        if (0 > a || 90 < a) a = 30;
        this.nka = a;
        this.pP = Dj(a);
        this.Q6 = Pn(b, this.Ja(lua));
        this.R6 = Pn(b, this.Ja(Rwa), da);
        this.jX = Pn(b, this.Ja(Pwa), 2);
        this.FN = Pn(b, this.Ja(yza), 0);
        this.eX = $n(b, this.Ja(zza), RIa, nra);
        this.S6 = Pn(b, this.Ja(Zwa), this.ud[yc]);
        this.P6 = In(b, this.Ja(Eqa), !1)
    }

    Y(OV, EV);
    W = OV[K];
    W.b$ = function () {
        return qva + this[pc]
    };
    W.vZ = function (a, b, c) {
        return qLa(this, a, a.A[r], 1 == this[Ox] ? a.A[G] : a.A[cd], b, c)
    };
W.$W=function(a,b,c,d){if(0==this[pc]){var e=a.$c,f=this.ud[yc],g=this[fA].ba[yc],k=b.Ha[yc],l=a.ME==jI?this[fA][id]:O,n=this,p=new GLa(a[r],this[cz],this.Q6,this.R6,this.jX,this.FN,this.eX,this.S6,this.P6,function(a,b,c){return QP(e,a,n.ud,b,c)}),s=this.FN||1,u,v;if(this.wm==jI&&!d)if(null!=this.tX)this.tX?v=PV(this,e):u=MV(p);else if(this[cz][J]*f/(this.jX*s)<=a[r]){if(u=MV(p),u.hx>s||0==u.su)v=PV(this,e),u=null}else v=PV(this,e);var z=QP(e,l,this[fA].ba,a.A[r],da),B=this.gp,D=h.max(B,h[E](f/1.618)),
N=h.max(B,h[E](f/3.236)),M=function(){return{key:TJ,min:v.minHeight+B,max:v.maxHeight+B,Wb:[D-B]}},R=[];R[C]({key:QD,min:B,Wb:[da]});0<z.I[J]&&R[C]({key:UJ,min:g+B,Wb:[da]});b[fz]()==PD&&R[C]({key:JG,min:k+B,Wb:[da]});c[fz]()==PD&&R[C]({key:GE,min:c[Oz]()+B,Wb:[da]});var S=R[J];d||u&&0<u.su?R[C]({key:TJ,min:f+B,Wb:[D-B]}):v&&R[C](M());var V=R[J];if(u)for(var ma=1;ma<u.su;ma++)R[C]({key:TJ,min:f+B,Wb:[N-B]});f=R[J];for(ma=1;ma<z.I[J];ma++)R[C]({key:UJ,min:g+B,Wb:[this.a5-B]});var g=XR(R,a[A]-a.A[Mc]),
Ja=g[cz]||[],Ha;u&&(Ha=KLa(p,u.yX,u.hx,Ja[J],0),null==this.tX&&Ha.hx>s&&(Ha=u=null,v=PV(this,e),R[S]=M(),R=LFa(R,0,V,f,void 0),g=XR(R,a[A]-a.A[Mc])));var Va=a.A[Mc],Ja=g[cz]||[];if(0<Ja[J]){for(ma=1;ma<Ja[J];ma++)Ja[ma]+=Ja[ma-1];if(d){p=Va+Ja[0];for(ma=0;ma<d[J];ma++)s=d[ma].Aa,Ex(s,s[sA]||new RR(0,0)),s[sA].y=p;this.Mi=d}else u?this.Mi=Ti(Ha.eO,function(a){var b=Ti(a[Xx].I,function(b,c){return{x:0,y:Ja[a.U6+c],length:a[r],text:b}},this);return{ta:a.ta,R:a.R,Aa:{text:a[id],ba:this.ud,I:b,Kc:iE,Jc:sF,
sb:a[Xx].te?a[id]:O,anchor:new RR(a.X,Va),Gb:0}}},this):v&&(ma=Ja[0],d=h.min(ma-B,v.maxHeight),this.Mi=LLa(this,e,Va+ma-d,d,v.hx));Va+=Oi(Ja)}d=g[fA]||[];if(0<d[J])for(p=QP(e,l,this[fA].ba,a.A[r],d[J]),this[fA].sb=p.te?l:O,ma=0;ma<d[J];ma++)Va+=d[ma],this[fA].Jc=sF,this[fA].I[C]({x:a.A[G]+a.A[r]/2,y:Va,length:a.A[r],text:p.I[ma]});l=g.legend||[];0<l[J]&&(Va+=l[0],b.ip(new Fl(Va-k,a.A[cd],Va,a.A[G])));b=g.colorBar||[];0<b[J]&&(Va+=b[0],a=new Fl(Va-c[Oz](),a.A[cd],Va,a.A[G]),c.ip(a))}};
function PV(a,b){function c(a){a=b(a[id],d)[r]*f+e*g;return h[yb](a)}var d=a.ud,e=d[yc],f=h.sin(a.pP),g=h.cos(a.pP),k=a.FN;k||(k=2>a[cz][J]?1:h[yb]((e+a.gp)/f/h.abs(a[cz][1].X-a[cz][0].X)));for(var l=0,n=0;n<a[cz][J];n+=k)l=h.max(c(a[cz][n]),l);n=c({text:Ve});return{minHeight:h.min(l,n),maxHeight:l,hx:k}}
function LLa(a,b,c,d,e){var f=a.ud[yc],g=h.sin(a.pP),k=HLa(0,a[cz][J],e,a.eX);d=(d-f*h.cos(a.pP))/g;d=h[t](d);for(var l=[];k<a[cz][J];k+=e){var n=a[cz][k],p=QP(b,n[id],a.ud,d,1),s={text:n[id],ba:a.ud,I:[],Gb:-a.nka,Kc:sF,Jc:AJ,sb:p.te?n[id]:O,anchor:new RR(n.X-.5*g*f,c)};0<p.I[J]&&s.I[C]({x:0,y:0,length:d,text:p.I[0]});l[C]({ta:n.ta,R:n.R,Aa:s})}return l}
W.YW=function(a){if(0==this[pc]){var b=a.$c,c=this.ud[yc],d=new GLa(a[r],this[cz],this.Q6,this.R6,this.jX,this.FN,this.eX,this.S6,this.P6,X(function(a,c,d){return QP(b,a,this.ud,c,d)},this)),e,f=this.b5;this.wm==sG&&(e=MV(d),this.bV&&(f=hG));var g=this.gp,k=h.max(this.gp,h[E](c/3.236)),l=h.max(this.gp,h[E](c/1.618)),l=this[H]==Qh?k:l,n=h.max(g,h[E](c/3.236)),p,s;this[H]==Qh?f===hG?(p=AJ,s=k):(p=sF,s=-k):(p=iE,s=0);f=[];f[C]({key:aK,min:g,Wb:[da]});if(e)for(k=0;k<e.su;k++)f[C]({key:TJ,min:c+g,Wb:[(0==
k?l:n)-g]});var u=XR(f,h[t](a.A[A]/2))[cz]||[];if(0<u[J]){for(k=1;k<u[J];k++)u[k]+=u[k-1];c=KLa(d,e.yX,e.hx,u[J],.5);this.Mi=Ti(c.eO,function(b){var c=b[Xx].I;c[dq]();c=Ti(c,function(a,c){return{x:0,y:-u[b.U6+c],length:b[r],text:a}},this);return{ta:b.ta,R:b.R,Aa:{text:b[id],ba:this.ud,I:c,Kc:p,Jc:AJ,sb:b[Xx].te?b[id]:O,anchor:new RR(s+b.X,a.A[Mc]),Gb:0}}},this)}}};W.WM=function(a){var b={};b.wg=-1==this[Ox];b.WA=a.A[G];b.TA=a.A[cd];ox(b,this.us());return b};W.us=function(){return Tg};
W.a$=function(a){return 0==this[pc]?{X:a.A[Mc],direction:-1}:{X:a.A.top,direction:1}};function MLa(a){return new CL(h[E](a.x),h[E](a.y))}function NLa(a){return Ui(arguments,DL,new CL(0,0))}function OLa(a){return Ui(arguments,function(a,c){return new Pk(a[r]+c[r],a[A]+c[A])},new Pk(0,0))}function QV(a,b,c){return new CL(h.cos(a)*b,h.sin(a)*c)}function PLa(a){return new CL(a[0],a[1])}function QLa(a,b){return Ti([[a.x-b[r]/2,a.y-b[A]/2],[a.x+b[r]/2,a.y-b[A]/2],[a.x+b[r]/2,a.y+b[A]/2],[a.x-b[r]/2,a.y+b[A]/2]],PLa)}

    function RLa(a, b, c, d) {
        return new Il(h.min(a, c), h.min(b, d), h.abs(c - a), h.abs(d - b))
    }

    function RV(a, b, c, d, e, f, g) {
        EV[L](this, a, b, fj([uBa + d, at], c), d, e, f, g);
        this[H] == Qh && sw(this, -this[Ox])
    }

    Y(RV, EV);
    W = RV[K];
    W.b$ = function () {
        return vBa + this[pc]
    };
    W.vZ = function (a, b, c) {
        return qLa(this, a, a.A[A], 1 == this[Ox] ? a.A.top : a.A[Mc], b, c)
    };
    W.$W = function (a) {
        var b = a.$c, c = this.ud[yc], d = this[fA].ba[yc], e = a.ME == jI ? this[fA][id] : O, f = this.gp,
            g = Ui(this[cz], function (a, c) {
                return h.max(a, b(c[id], this.ud)[r])
            }, 0, this), k = b(Ve, this.ud)[r], k = h.min(k, g), l = QP(b, e, this[fA].ba, a.A[A], da), n = [];
        this.wm == jI ? n[C]({key: OI, min: f, Wb: [c - f]}) : n[C]({key: OI, min: 0, Wb: [da]});
        0 < l.I[J] && n[C]({key: UJ, min: d + f, Wb: [da]});
        this.wm == jI && n[C]({key: TJ, min: k + f, max: g + f, Wb: [da]});
        for (c = 1; c < l.I[J]; c++)n[C]({key: UJ, min: d + f, Wb: [this.a5 - f]});
        var d = XR(n, 0 == this[pc] ? a.A[G] : a[r] - a.A[cd]),
p=0==this[pc]?0:a[r],l=d[fA]||[];if(0<l[J])for(n=QP(b,e,this[fA].ba,a.A[A],l[J]),1===this[pc]&&n.I[dq](),this[fA].sb=n.te?e:O,c=0;c<l[J];c++)p+=l[c]*(0==this[pc]?1:-1),this[fA].Gb=-90,this[fA].Jc=0==this[pc]?sF:AJ,this[fA].I[C]({x:p,y:a.A.top+a.A[A]/2,length:a.A[A],text:n.I[c]});if(this.wm==jI){var e=d[cz][0]||0,p=p+e*(0==this[pc]?1:-1),s=h.min(g,e-f);this.Mi=s<k?[]:Ti(this[cz],function(b,c){var d=0==this[pc]?sF:AJ,e=iE;this.Wga==Ara&&(0==c&&(e=1==this[Ox]?AJ:sF),c==this[cz][J]-1&&(e=1==this[Ox]?
sF:AJ));return SLa(this,a,b,p,s,d,e,0)},this)}};
W.YW=function(a){var b=a.$c,c=this.ud[yc],d=this.gp,e=h.max(this.gp,h[E](c/3.236)),c=h.max(this.gp,h[E](c/1.618)),c=this[H]==Qh?e:c,f,g;this[H]==Qh?this.b5==hG?(f=sF,g=e):(f=AJ,g=-e):(f=iE,g=0);var e=Ui(this[cz],function(a,c){return h.max(a,b(c[id],this.ud)[r])},0,this),k=b(Ve,this.ud)[r],k=h.min(k,e),l=[];l[C]({key:OI,min:d,Wb:[da]});this.wm==sG&&l[C]({key:TJ,min:k+d,max:e+c,Wb:[]});var c=XR(l,a.A[r]/2),n=0==this[pc]?a.A[G]:a.A[cd];if(this.wm==sG){var c=c[cz][0]||0,p=h.min(e,c-d),n=n+(c-p)*(0==this[pc]?
1:-1);this.Mi=Ti(this[cz],function(b){return SLa(this,a,b,n,p,0==this[pc]?AJ:sF,f,g)},this)}};function SLa(a,b,c,d,e,f,g,k){b=QP(b.$c,c[id],a.ud,e,1);var l=Ti(b.I,function(a){return{x:0,y:0,length:e,text:a}},a);return{ta:c.ta,R:c.R,Aa:{text:c[id],ba:a.ud,Kq:null,I:l,Kc:f,Jc:g,sb:b.te?c[id]:O,anchor:new RR(d,c.X-k),Gb:0}}}W.WM=function(a){var b={};b.wg=-1==this[Ox];b.WA=a.A.top;b.TA=a.A[Mc];ox(b,this.us());return b};W.us=function(){return Rh};
W.a$=function(a){return 0==this[pc]?{X:a.A[G],direction:1}:{X:a.A[cd],direction:-1}};function SV(a,b,c,d,e){this.qr=this.qO=this.BV=this.jf=this.ld=this.gf=this.Dg=this.ub=null;this.Pw=1;this.yO=null;YU[L](this,a,b,c,d,e)}Y(SV,YU);W=SV[K];
La(W,function(){var a=this[Eq];this.tt=ao(a,ZJ,ho)!=Q;this.N.di=$n(a,IF,PIa,$E);if(this.N.di==eE&&this.N.kb!=Mg)throw m("Focus target "+this.N.di+" is not supported for the chosen chart type.");this.N.jd=In(this[Eq],Tva);this.N.kb==WD?this.qr=new QU(this.Ub,this[Eq],this.$c,this.N):(this.ub=a.S(HE,WT),TLa(this));a=0<this.N.Sf.bars||0<this.N.Sf.area||0<this.N.Sf.steppedArea;this.N.Td=In(this[Eq],zG)&&a;this.N.X4=In(this[Eq],vza,!1);a=this.N;switch(a.kb){case Mg:case jG:ox(a,$n(this[Eq],iI,ST,O));if(!a[Vz])throw m("Unspecified orientation.");
this.jf={};this.Dg={};this.gf={};var b,c,d,e;switch(a[Vz]){case Tg:d=OV;e=this.Dg;b=RV;c=this.gf;break;case Rh:d=RV,e=this.gf,b=OV,c=this.Dg}for(var f=this.BV.Ua(),g=0;g<f[J];++g){var k=f[g],l=new b(a,this[Eq],[sAa+k,Ts],k,Qh,yI);if(l[H]!=Qh)throw m("Target-axis must be of type value");this.jf[k]=l;c[k]=l}var n;a.kb===jG&&(n=a.l[0].Sc.histogramBuckets);b=d;c=this[Eq];if(this.Ub.D(0)==Eh)i:{switch(ULa(this)){case sD:d=1<this.N.Da[J]?fE:eE;break i;case SG:case BD:case CJ:case cE:d=eE;break i}d=null}else d=
Qh;this.ld=new b(a,c,[ns],0,d,CH,n);e[0]=this.ld;break;case ZI:case WD:this.Dg={0:new OV(a,this[Eq],[],0,Qh,yI)},this.gf={0:new RV(a,this[Eq],[],0,Qh,yI)}}VLa(this);SV.e[Kc][L](this)});
function TLa(a){var b=a.N,c=a.Ub,d=b.kb==ZI?function(){return ZI}:b.kb===jG?function(){return BD}:X(function(a){return $n(this[Eq],iJ+a+Uma,CIa,b.oV)},a),d=b.jd?WLa(c,d,b.kb):XLa(c,d);b.Da=[];b.Nq={};for(var e=d.uk,f=0;f<c.M();f++){var g=c.um(f),k=c[I](f,0),l=Ti(e,function(a){return c.Ea(f,a.ga[Jz][0])||O}),k={data:k,Nt:l,ut:g};if(l=e[0].ga.tooltip)k.de=TV(a,l[0],f);b.Da[C](k);b.Nq[g]=f}b.l=[];for(f=0;f<d.dX[J];f++)e=YLa(a,f,d.dX[f]),b.l[C](e),ck(c.Er(f))||(b.l[f].Sc=c.Er(f));b.Pq=d.E6;b.uk=d.uk;
b.Ft=d.Ft;b.rF={};b.Sf={};a.BV=new sk;a.qO=[];for(f=0;f<b.l[J];++f){d=b.l[f];a.BV.add(d.qe);e=b.rF[d.qe];if(null==e)b.rF[d.qe]=d[ez];else if(e!=d[ez])throw m("All series on a given axis must be of the same data type");b.Sf[d[H]]=(b.Sf[d[H]]||0)+1;e=a.qO[d.qe]||{};a.qO[d.qe]=e;e[d[H]]=(e[d[H]]||0)+1}}
function ZLa(a){var b={},c=a.N;c.Kn=[];var d=X(function(a){var d=c.l[a];if(c.jd&&d[H]===ZI){var g=[this[Eq].S(fF,.5),this[Eq].S(eF,1)],k=d[F][F];c.Kn[C]({id:d.id,text:d.Ez,brush:new bn({Eh:{jg:k,Rf:k,Yv:g[0],Zv:g[1],x1:GB,y1:FB,Hb:FB,Lb:FB,vt:!0,RE:!0}}),index:a,R:d.Fz})}else g=new bn({fill:d[F][F]}),d.dF&&g.Ch(d.dF),c.Kn[C]({id:d.id,text:d.Ez,brush:g,index:a,R:d.Fz});b[a]=!0},a);Z(c.l,function(a,c){b[c]||(d(c),null!=a.UE&&d(a.UE))},a);c.jd&&c.l[0][H]===BD&&c.Kn[C]({id:-1,text:fpa,brush:new bn({fill:SIa[F]}),
index:-1,R:!0})}
function $La(a,b){function c(a){return a=864E5*a+e}function d(a){a-=e;return a/864E5}for(var e=(new Date(1900,0,1,0,0,0))[ec](),f=new Ro(Zma),g=new Ro(sla),k=new kIa(function(a){return 0!==a&&(1E5<h.abs(a)||.01>h.abs(a))?f[Nb](a):g[Nb](a)}),l=a.N,n=l.kb==ZI?ZI:SG,p=0,s=l.l[J],u=0;u<s;u++){var v=l.l[u],z=bBa+u+Ue;if(null!=bo(a[Eq],bBa+u)){p++;var B=$n(a[Eq],z+Nh,zIa,VG),D=a[Eq].S(z+FE,Fna),N=D===Fna;N&&(D=v.Cg.cb());var N=Rn(a[Eq],[z+lh,lh],N?.5:1),M=Pn(a[Eq],[z+tI,tI],0),R=0<M;0>=M&&(M=6);M/=2;0<
M&&(M+=1);var S={};null!=v.ga[$]&&qa(S,v.ga[$]);var V=Pn(a[Eq],[z+UG,UG],2);$n(a[Eq],z+VE,UT,Q);In(a[Eq],z+wK,!1);var D=PU(D),B=AIa[B],ma=a.Dg[0],Ja=a.gf[0];if(l[Vz]===Rh)var Ha=ma,ma=Ja,Ja=Ha;if(ma[H]===Qh){var Va=ma.ea,Ge=Ja.ea,Jb=v.ga[$][0],Qc=zj,ne=zj;0<b.M()&&mi(b[I](0,0))&&(Qc=d,ne=c);ma={min:Qc(Va.sc),max:Qc(Va.qc)};B=B(b.M(),function(a){a=b[I](a,0);a=yT(Va,a);return Qc(a)},function(a){return yT(Ge,b[I](a,Jb))},{range:ma,kA:Mn(a[Eq],z+ita,3)});if(null!==B){ma=Tn(a[Eq],z+UJ,k.C(B.Ut.Fm())||
Gpa+p);Ja=Ti(B[$],function(a){var b=ne(a[0]),b=null!=b?Va.UF(b):null;a=a[1];a=null!=a?Ge.UF(a):null;return[b,a]});v.UE=l.l[J];Ha=sn(D[F],V);cn(Ha,N);var sc=rn(D[F]);sc.Ch(N);var ed=Tn(a[Eq],z+GG,ma);In(a[Eq],z+uza,!1)&&(ed+=re+k.C((new IT([new RT([new PT(sh),new LT(2)]),new LT(B.sp)])).Fm()));l.l[C]({id:v.id+Zpa,title:ma,$g:!0,data:Ja,dataType:v[ez],Wg:In(a[Eq],[z+rF,rF],!0),R:!0,ut:0,ga:S,E5:u,We:v.We,vf:null,color:D,dF:N,Cg:sc,Lc:Ha,Vv:null,cF:null,type:n,OE:Mn(a[Eq],z+KBa,0),lineWidth:V,ad:M,Z4:12,
cw:$n(a[Eq],z+VE,UT,Q),OL:Pn(a[Eq],[z+vJ,vJ],1),HL:R,k:[],ZU:[],qe:v.qe,Fz:In(a[Eq],z+wK,!1),Ez:ed})}}}}}
function XLa(a,b){for(var c=[],d=[],e=null,f=null,g=0,k=[],l=0;l<a.H();++l){var n=a.D(l),p=a.gj(l,vh)||(0==l?ms:ks);if(0==l&&p!==ms)throw m(Aoa);if(p==ms){if(0<g)throw m(Mpa+l+Oe);e={ga:{},dataType:n};f={uc:null,We:d[J]};d[C](e)}0==g&&p===ks&&(f=c[J],g=b(f),e={type:g,dataType:n,ga:{}},f={uc:f,We:null},c[C](e),g=g===cE?4:1);if(p===ks&&(g--,n!==e[ez]))throw m(Zna);if(p===Xs&&e.ga[p])throw m(apa);e.ga[p]=e.ga[p]||[];k[C]({uc:f.uc,We:f.We,zw:p,Zz:e.ga[p][J]});e.ga[p][C](l)}if(0<g)throw m(Toa+g+Oe);e=
0;n=d[0][ez];for(l=0;l<c[J];++l){if(d[J]<=e)throw m("Series #"+l+gla);p=d[e+1];f=c[l].ga[$];if(p&&p.ga[Jz][0]<=f[0]&&(++e,n!==d[e][ez]))throw m($na);c[l].We=e}return{dX:c,uk:d,Ft:n,E6:k}}function aMa(a,b){if(a!==b)throw m("Column types must be consistent: equal for domain columns and for columns in the same serie.");}
function WLa(a,b,c){var d=[],e=[],f=null,g=[];if(c===ZI){for(var k=a.H()-2,l=function(a){if(a!==ks&&a!==bI)throw m("All columns must be either data or old-data columns");},n={data:null,"old-data":null},f=a.D(0),p=0;2>p;++p){var s=a.D(p);c=a.gj(p,vh);l(c);aMa(f,s);s={ga:{},dataType:s};s.ga.domain=[p];e[C](s);n[c]=p;g[C]({We:p,zw:ms,Zz:0,uc:null})}for(p=0;p<k;++p){var u=2+p,s=a.D(p);c=a.gj(p,vh);l(c);p%2&&aMa(d[p-1][ez],s);var v=n[c],s={type:b(p),dataType:s,We:v,ga:{}};s.ga[c]=[u];d[C](s);g[C]({We:v,
zw:c,Zz:0,uc:p})}}else if(c===Mg){k=f=null;for(p=l=0;p<a.H();++p){s=a.D(p);c=a.gj(p,vh)||(0===p?ms:ks);if(0===p&&c!==ms)throw m(Aoa);if(c===ms){if(0<l)throw m(Mpa+p+Oe);f={ga:{},dataType:s};k={uc:null,We:e[J]};e[C](f)}0!==l||c!==ks&&c!==bI||(k=d[J],l=b(k),f={type:l,dataType:s,ga:{}},k={uc:k,We:null},d[C](f),l=l===cE?4:c===bI?2:1);if(c===ks||c===bI)if(l--,s!==f[ez])throw m(Zna);if(c===Xs&&f.ga[c])throw m(apa);f.ga[c]=f.ga[c]||[];g[C]({uc:k.uc,We:k.We,zw:c,Zz:f.ga[c][J]});f.ga[c][C](p)}if(0<l)throw m(Toa+
l+Oe);a=0;f=e[0][ez];for(p=0;p<d[J];++p){if(e[J]<=a)throw m("Series #"+p+gla);b=e[a+1];c=d[p].ga[bI]||d[p].ga[$];if(b&&b.ga[Jz][0]<=c[0]&&(++a,f!==e[a][ez]))throw m($na);d[p].We=a}}return{dX:d,uk:e,Ft:f,E6:g}}W.iG=function(a){a=a.ga[bI];return null!=a&&0<a[J]};
function YLa(a,b,c){var d=c[H],e=c.ga,f=c.We,g=a[Eq],k=iJ+b+Ue,l=e[$]||e[bI],n=a.Ub.wG(l[0]),p=a.Ub.Ra(l[0])||O,s=d==ZI?0:2,u=Pn(g,[k+tI,tI],d==ZI?7:0),v=d==SG||d==sD||d==ZI?0<u:!0;0==u&&(u=d==ZI?7:6);u/=2;0<u&&(u+=1);b=g.S(k+FE,a.ub[(a.N.jd&&d==ZI?h[t](b/2):b)%a.ub[J]]);b=PU(b);var z=null;if(d==sD||d==CJ)z=Rn(g,[k+tD,tD]),z=rn(b[F],z);var B=null;if(d==cE)var B=new bn({stroke:b[F],ua:2,fill:b[F]}),D=new bn({stroke:b[F],ua:2,fill:ze}),N=In(g,Kra),M=N?B:D,B={C5:co(g,[k+Lra,Lra],N?D:B),B5:co(g,[k+Jra,
Jra],M)};s=Pn(g,[k+UG,UG],s);D=sn(b[F],s);if(N=g.S([k+uwa,uwa],null,Ln))D.nl=N;N=Pn(g,[k+$sa,$sa],1);M=null;if(d===ZI||d===SG||d===sD)M=bo(g,[k+Kxa,Kxa],{type:yE}),oi(M)&&(M={type:M});var R=null;if(a.N.jd&&d===ZI){var S=a.iG(c),N=S?a[Eq].S(fF,.5):a[Eq].S(eF,1);S&&(R=!1)}S=d==CJ?z:rn(b[F],N);if(a.N.jd)if(d===BD)var V=g.S(ota,SIa),V=PU(V),V={background:{Cg:rn(V[F],N)}};else d===ZI&&a.iG(c)&&(v=!1);var ma=bMa(a,e,g,k,b);return{id:a.Ub.Xe(l[0]),title:p,dataType:c[ez],R:!0,ut:n,ga:e,We:f,Wg:In(g,[k+rF,
rF],!0),vf:ma,color:b,dF:N,Cg:S,Lc:D,QE:M,Dh:V,Vv:z,cF:B,type:d,OE:Mn(g,k+KBa,0),lineWidth:s,ad:u,Z4:12,cw:$n(g,[k+VE,VE],UT,Q),OL:Pn(g,[k+vJ,vJ],1),HL:v,k:[],ZU:[],qe:Pn(g,[k+NJ,NJ],0),Fz:null!=R?R:In(g,k+wK,!0),Ez:Tn(g,k+GG,p)}}
function bMa(a,b,c,d,e){function f(a,b){return g(a,b)[Bb]([d+b,b])}function g(a,b){return[d+Rva+a+Ue+b,d+Sva+b,Rva+a+Ue+b,Sva+b]}var k=b[Gb];if(!k)return null;b={Cb:[],Gx:[],uP:[],k:[],areas:[],I:[],qF:{}};for(var l={},n=0;n<k[J];n++){var p=k[n],s=a.Ub.Xe(p)||a.Ub.Ra(p)||bF,u=ao(c,g(s,Fh),DIa);switch(u){case BD:b.Cb[C](p);break;case hAa:b.Gx[C](p);break;case Dra:b.uP[C](p);break;case vI:b.k[C](p);break;case sD:b[CA][C](p);break;case SG:b.I[C](p);break;case Q:break;default:throw m("Invalid interval style: "+
u);}s in l?l[s][C](p):l[s]=[p]}1<b.Cb[J]&&0==b.Gx[J]&&(b.Gx=[b.Cb[0],b.Cb[b.Cb[J]-1]]);if(0!=b.Gx[J]%2)throw m("Stick-intervals must be defined by an even number of columns");if(0!=b[CA][J]%2)throw m("Area-intervals must be defined by an even number of columns");for(s in l){u=Pn(c,g(s,UG));n=Rn(c,g(s,kua));p=Xn(c,g(s,FE),Zj(EIa),O);p=UV(p,e);n=new bn({stroke:p,fill:p,Ce:n,ua:u});p=Pn(c,g(s,ura));a=Pn(c,g(s,pza));var k=Pn(c,g(s,Cra)),v=Pn(c,g(s,tI)),u=ao(c,g(s,Fh),DIa),z=In(c,f(s,wG)),B=$n(c,f(s,VE),
UT,Q),D=Pn(c,f(s,vJ),1),u={style:u,brush:n,rka:p,tka:a,ska:k,aM:v,xj:z,cw:B,OL:D};a=l[s];for(n=0;n<a[J];++n)p=a[n],b.qF[p]=u}return b}function ULa(a){var b=[SG,sD,CJ,BD,cE],c={};Z(b,function(a,b){c[a]=b});a=Ui(a.N.l,function(a,b){return h.max(a,c[b[H]])},0);return b[a]}
function VLa(a){var b=a.N;switch(b.kb){case ZI:case WD:if(b.Ft==Eh)throw m("X values column cannot be of type string");var c=b.rF[0];if(c==Eh)throw m("Data column(s) cannot be of type string");var d=a.Dg[0],e=a.gf[0];if(d[H]!=Qh)throw m("The x-axis must be of type value");FV(d,b.Ft,a[Eq]);if(e[H]!=Qh)throw m("The y-axis must be of type value");FV(e,c,a[Eq]);break;case Mg:case jG:c=a.ld;if(c[H]==Qh){if(b.Ft==Eh)throw m("Domain column cannot be of type string, it should be the X values on a continuous domain axis");
FV(c,b.Ft,a[Eq])}Sj(a.jf,function(a,c){var d=b.rF[c];if(d==Eh)throw m("Data column(s) for axis #"+c+" cannot be of type string");FV(a,d,this[Eq]);d=this.qO[c];null===a.hr&&(0<d.bars||0<d.area||0<d.steppedArea)&&(a.hr=0)},a)}Sj(a.Dg,function(a){pLa(a)});Sj(a.gf,function(a){pLa(a)})}
function cMa(a){if(null===VV(a))return[];for(var b=(a.N.uk[0].ga[Jz]||[])[0],c=[],d=null,e=a.Ub,f=0;f<e.M();f++){var g=e[I](f,b),k=WV(a,f);if(null!==d&&null!=k){if(0>k)throw m("Invalid gap value ("+k+") in data row #"+f+". Gap value must be non-negative.");c[C]({xd:d,Hf:g,Qka:k})}d=g}return c}W.y8=function(){return this.qr&&this.qr.fp==T?null:null!=this.gf[0]&&null!=this.gf[1]?$J:null!=this.gf[1]?ah:Os};W.x8=function(){return this.qr&&this.qr.fp==T?$J:null};
function XV(a){var b=a.ga[$];return b?b[0]:a.ga[bI][0]}function dMa(a){for(var b=a.N,c=a.Ub,d=a.ld,e=0;e<b.Da[J];e++){for(var f=0;f<b.l[J];f++){var g=b.l[f],k=a.jf[g.qe],g=c[I](e,XV(g)),g=yT(k.ea,g);null!=g&&RU(k,g)}d[H]==Qh&&(f=c[I](e,0),f=yT(d.ea,f),RU(d,f))}}function eMa(a){var b=a.N,c=a.Ub,d=a.Dg[0];a=a.gf[0];for(var e=0;e<c.M();e++)for(var f=0;f<b.l[J];f++){var g=b.l[f],k=XV(g),g=c[I](e,b.uk[g.We].ga[Jz][0]),k=c[I](e,k),g=yT(d.ea,g),k=yT(a.ea,k);null!=g&&RU(d,g);null!=k&&RU(a,k)}}
W.w8=function(){var a=this.N;fMa(this);(a.Td||a.jd||a.kb===jG)&&Sj(this.jf,function(a){a.nc(0)});if(a.kb===Mg||a.kb===jG)dMa(this),this.ld[H]==Qh&&this.ld.iC(cMa(this)),GV(this.ld,this[Eq]),Sj(this.jf,function(a){a.iC();GV(a,this[Eq])},this);else{var b=this.Dg[0],c=this.gf[0];a.kb==WD?nKa(this.qr,b,c):a.kb==ZI&&eMa(this);b.iC();GV(b,this[Eq]);c.iC();GV(c,this[Eq])}a.Sf.bars&&gMa(this,BD);if(a.Sf.steppedArea){if(this.ld[H]==Qh)throw m("Stepped area series with value domain axis is not supported.");
gMa(this,CJ)}a.Sf.candlesticks&&hMa(this);a.Sf.line&&(iMa(this),jMa(this));a.Sf.area&&kMa(this);a.Sf.scatter&&(lMa(this),jMa(this));a.Sf.bubbles&&oKa(this.qr,this.Dg[0],this.gf[0],this.Ej);(a.Sf.bars||a.Sf.candlesticks)&&a.kb!==jG&&this.ld&&this.ld[H]==Qh&&mMa(this);a.ce=Vj(this.Dg,function(a){return a.vZ(this.N,this.Cf,this.Ej)},this);a.Kd=Vj(this.gf,function(a){return a.vZ(this.N,this.Cf,this.Ej)},this);nMa(this);oMa(this);pMa(this);(a.kb===Mg&&a[Vz]===Tg||a.Sf.bars)&&qMa(this);var b=this.Cf[fz](),
c=this.Cf.Ha[yc],d=null;b!=Os&&b!=HG||null!=this.gf[1]||(d=new Fl(a.A.top,a[r]-c,a.A[Mc],a.A[cd]+c));b!=ah||null!=this.gf[0]||(d=new Fl(a.A.top,a.A[G]-c,a.A[Mc],c));d&&d[cd]>=d[G]&&this.Cf.ip(d);rMa(this);sMa(this);this.qr||($La(this,this.Ub),ZLa(this),tMa(this))};
function fMa(a){var b=a.N,c=a.$c,d=Yj(a.Dg)[fA].ba,e=h.max(b[fA].ba[yc],d[yc]),f=a.Cf.Ha[yc],g=a.Cf[fz](),k=a.Ej.Ha[yc],l=a.Ej[fz](),n=b.Lz==sG?b[fA][id]:O,p=O,s=O;if(b.ME==sG){var u=function(a){var b=ak(a);mj(b);b=Ti(b,function(b){return a[b][fA][id]});return Si(b,function(a){return a!=O})[me](Se)};switch(b.kb){case ZI:case WD:p=u(a.Dg);s=u(a.gf);break;case Mg:p=u({0:a.ld}),s=u(a.jf)}}var p=p&&s?p+ala+s:p?p:s?s:O,s=h.max(2,h[E](e/1.618)),v=h.max(2,h[E](f/1.618)),z=h.max(2,h[E](k/1.618)),B=b.A[r]-
2*s,k=QP(c,n,b[fA].ba,B,1),u=0<k.I[J]?k.I[0]:O,D=c(u,b[fA].ba)[r],N=h[E](h.max(2,1.618*e)),B=h.max(B-D-N,0),c=QP(c,p,d,B,1),N=0<c.I[J]?c.I[0]:O,M=[];M[C]({key:QD,min:2,Wb:[da]});(u||N)&&M[C]({key:UJ,min:e+2,Wb:[s-2]});g==sG&&M[C]({key:JG,min:f+2,Wb:[v-2]});l==sG&&M[C]({key:GE,min:a.Ej[Oz]()+2,Wb:[z-2]});g=XR(M,h[t](b.A[A]/2));e=b.A.top;l=g[fA]||[];0<l[J]&&(e+=l[0],u&&(b[fA].I[C]({text:u,x:b.A[G]+s,y:e,length:D}),b[fA].sb=k.te?n:O),N&&(b.iF={text:p,ba:d,Kq:null,I:[],Kc:sF,Jc:sF,sb:c.te?p:O,anchor:null,
Gb:0},b.iF.I[C]({text:N,x:b.A[cd]-s,y:e,length:B})));d=g.legend||[];0<d[J]&&(e+=d[0],a.Cf.ip(new Fl(e-f,b.A[cd],e,b.A[G])));f=g.colorBar||[];0<f[J]&&(e+=f[0],b=new Fl(e-a.Ej[Oz](),b.A[cd],e,b.A[G]),a.Ej.ip(b))}function gMa(a,b){var c=a.N;c.jd?uMa(a,b):vMa(a,b,c.Td)}function mMa(a){var b=a.ld,c=Si(a.N.Da,function(a,b){return 0!=WV(this,b)},a),d=da,e;Z(c,function(a){a=wT(b.ea,a[$]);ci(e)&&(d=h.min(d,h.abs(a-e)));e=a},a);Lj(d)&&(a=d/2,b.nc(b.ea.sc-a),b.nc(b.ea.qc+a))}
function vMa(a,b,c){var d=a.N,e=a.Ub,f=a.ld,g=a.N.kb===jG,k=(d.A[A]-1)/wMa(c,d,e);a.N.mw=g&&xMa(k,In(a[Eq],kG));for(var l=0;l<d.Da[J];l++)for(var k=0==WV(a,l),n=Vj(a.jf,function(){return[0,0]}),p=-1,s=0;s<d.l[J];s++){var u=d.l[s];if(u[H]==b){p++;!1==c&&(n[u.qe]=[0,0]);var v=u.k;if(k)v[C](null);else{var z=u.qe,B=a.jf[z],D=e[I](l,u.ga[$][0]),D=wT(B.ea,D),N=YV(a,l);f.nc(N);var M=0<D?0:1,R=n[z];SU(f,N)&&(c?B.nc(D+R[M]):B.nc(D));c||(a.Pw=h.max(a.Pw,p+1));var z=function(a,b,c,d){b={Vf:{nr:l,yw:b,tk:c,hl:a+
(d||g?R[M]:0),ol:N,VF:ZV(this,u,l,R[M],!0)}};null==a&&(b.Qe=!0);u[H]==CJ&&(c=v[J],b.Vf.b6=0!=c&&v[c-1]?v[c-1].Vf.hl:null);$V(this,b,u,s,l);v[C](b);R[M]+=a},B=c?0:p,S=c||g?R[M]:null;if(g&&!a.N.mw)for(var V=0;V<D;V++)S=c||g?R[M]:null,z[L](a,1,B,S,c);else z[L](a,D,B,S,c)}}}c||Sj(a.jf,function(a){FLa(a)})}
function uMa(a,b){for(var c=a.N,d=a.Ub,e=a.ld,f=Si(c.l,function(a){return a[H]==b}),g=0;g<c.Da[J];++g){var k=0==WV(a,g),l=YV(a,g);e.nc(l);for(var n=SU(e,l),p=[bI,ks],s=0;s<f[J];++s){var u=f[s];if(k){u.k[C](null);return}for(var v=a.jf[u.qe],z=v.ea,B=0;B<p[J];++B){var D=p[B],N=d[I](g,u.ga[D][0]),N=wT(z,N);if(null===N){u.k[C](null);return}n&&v.nc(N);a.Pw=h.max(a.Pw,s+1);D={brush:D==bI?u.Dh[pA].Cg:null,Vf:{nr:g,yw:s,tk:null,hl:N,ol:l,oia:D==ks,VF:ZV(a,u,g,0,!0)}};$V(a,D,u,s,g);u.k[C](D)}}}Sj(a.jf,function(a){FLa(a)})}
function hMa(a){var b=a.N,c=a.Ub,d=a.ld,e=Si(b.l,function(a){return a[H]==cE});Z(b.Da,function(a,b){var k=0==WV(this,b);Z(e,function(a,e){if(k)a.k[C](null);else{var f=a.ga[$],s=this.jf[a.qe];this.Pw=h.max(this.Pw,e+1);var u=c[I](b,f[0]),v=c[I](b,f[1]),z=c[I](b,f[2]),f=c[I](b,f[3]),u=wT(s.ea,u),v=wT(s.ea,v),z=wT(s.ea,z),f=wT(s.ea,f);if(null===u||null===f||null===v||null===z)a.k[C](null);else{var B=YV(this,b);d.nc(B);var D=z<v;SU(d,B)&&(s.nc(u),s.nc(f));s={Pz:D?a.cF.B5:a.cF.C5,Lc:rn(a[F][F]),Vf:{nr:b,
yw:e,fja:u,lineTo:f,gja:D?z:v,hja:D?v:z,eja:D,ol:B}};$V(this,s,a,e,b);a.k[C](s)}}},this)},a)}function yMa(a,b){var c=a.N,d=a.Ub,e=a.ld,f=c.l[b];if(f[H]==SG)for(var c=f.$g?f[$]:c.Da,g=0;g<c[J];g++){var k=a.jf[f.qe],l=f.ga[$][0],l=f.$g?f[$][g][1]:d[I](g,l),l=wT(k.ea,l),n;if(null!=l){var p=YV(a,g,f);e.nc(p);(n=SU(e,p)&&!f.$g)&&k.nc(l);k=f.$g?null:ZV(a,f,g,0,n)}else n=!1,k=null;k={Vf:{nr:g,yw:0,ol:p,Mw:l,VF:k},shape:f.QE,C6:n};null==l&&(k.Qe=!0);$V(a,k,f,b,g);f.k[C](k)}}
function iMa(a){for(var b=a.N,c=0;c<b.l[J];c++)yMa(a,c);zMa(a);aW(a)}function zMa(a){for(var b=a.ld,c=a.N.l,d=0;d<c[J];d++){var e=c[d];if((e[H]==SG||e[H]==sD)&&0!=e[uz]){var f=a.jf[e.qe],g=Ti(e.k,function(a){return!a||a.Qe?null:new Kk(a.Vf.ol,a.Vf.Mw)}),k=a.N.xj,e=cS(g,DLa(b),k),l;t:{switch(b[H]){case fE:l=b.zb.max-1;break t;case eE:l=b.zb.max-.5;break t}l=b.zb.max}k=cS(g,l,k);f.nc(e);f.nc(k)}}}
function kMa(a){for(var b=a.N,c=a.Ub,d=a.ld,e=b.xj,f=0;f<b.Da[J];f++)for(var g=Vj(a.jf,function(){return 0}),k=gk(g),l=gk(g),n=0;n<b.l[J];n++){var p=b.l[n];if(p[H]==sD){var s=p.qe,u=a.jf[s],v=null,z=null,B=p.ga[$][0],D=c[I](f,B),D=wT(u.ea,D),N=YV(a,f),M;if(null==D||fa(D))b.Td&&(v=k[s],z=g[s]),s={w6:N,x6:v,u6:N,v6:z,A6:N,B6:z,y6:N,z6:v},M=!1;else{var R,S;M=0<f?c[I](f-1,B):null;var V=f<c.M()-1?c[I](f+1,B):null;b.Td?(B=D+l[s],v=k[s],z=g[s],R=k[s]+D,S=g[s]+D,f==c.M()-1||null!==V&&!fa(V)?k[s]+=D:R=k[s],
0==f||null!==M&&!fa(M)?g[s]+=D:S=g[s]):(R=S=B=D,f==c.M()-1||null!==V&&!fa(V)?R=B:e||(R=null),0==f||null!==M&&!fa(M)?S=B:e||(S=null));d.nc(N);(M=SU(d,N))&&u.nc(B);u=ZV(a,p,f,l[s],M);b.Td&&(l[s]=B);s={ol:N,Mw:B,nr:f,yw:0,A6:N,B6:S,y6:N,z6:R,w6:N,x6:v,u6:N,v6:z,VF:u}}s={Vf:s,shape:p.QE,C6:M};$V(a,s,p,n,f);if(null==D||fa(D))s.Qe=!0;p.k[C](s)}}zMa(a);aW(a)}function tMa(a){Z(a.N.l,function(a,c){a.$g&&(a[H]===ZI?AMa(this,c):a[H]===SG&&yMa(this,c),BMa(this,c))},a)}
function AMa(a,b){var c=a.N,d=a.Ub,e=a.Dg[0],f=a.gf[0],g=c.l[b],k=g.We;if(g[H]===ZI)for(var l=g.$g?g[$][J]:d.M(),n=0;n<l;n++){var p=c.uk[k].ga[Jz][0],s=XV(g),p=g.$g?g[$][n][0]:d[I](n,p),u=g.$g?g[$][n][1]:d[I](n,s),s=wT(e.ea,p),p=wT(f.ea,u);if(null===s||null===p)g.k[C](null);else(u=SU(e,s)&&SU(f,p))&&!g.$g&&(e.nc(s),f.nc(p)),s={Vf:{x:s,y:p},shape:g.QE,uia:u},$V(a,s,g,b,n),g.k[C](s)}}function lMa(a){for(var b=a.N,c=0;c<b.l[J];c++)AMa(a,c);aW(a)}
function aW(a){function b(a){return!(!a||a.Qe)}for(var c=X(function(a){var b=null!=a.Vf?a.Vf.nr:null;return{$w:null!=a.$w?a.$w:1,sx:null!=a.sx?a.sx:1,scope:null!=a[jA]?a[jA]:!0,tla:null!=b?WV(this,b):null}},a),d=null===VV(a),e=0;e<a.N.l[J];e++){var f=a.N.l[e],g=f.Vv,k=f.ga.emphasis||[],l=f.ga[jA]||[];if(0!=(f.ga.certainty||[])[J]||0!=k[J]||0!=l[J]||!d)for(var k=Zi(f.k,b),n=c(k||{}),l=0;l<f.k[J];l++){var p=f.k[l];if(p&&!p.Qe){var s=c(p),u=f.Lc;s[jA]||n[jA]||(f.Y9=f.Y9||u.lH(),u=f.Y9,p.$r=u,g&&(f.X9=
f.X9||g.lH(),p.eF=f.X9));if(1>s.$w||1>n.$w)u=bW(u,!1),p.$r=u;1!=s.sx&&1!=n.sx&&(n=h.min(n.sx,s.sx),u=CMa(u,n),p.$r=u);0==s.tla&&k&&!k.Qe&&(p.$r=null);n=s}k=p}}}
function DMa(a){var b={fill:{},stroke:{},shape:{}};null!=a&&(null!=a[Yz]&&rx(b,a[Yz]),null!=a[Ry]&&Mw(b,a[Ry]),null!=a[F]&&Ya(b[ic],Ya(b[$b],a[F])),null!=a[Od]&&nb(b[ic],nb(b[$b],a[Od])),null!=a[Qx]&&Ya(b[ic],a[Qx]),null!=a.fillOpacity&&nb(b[ic],a.fillOpacity),null!=a[cy]&&Ya(b[$b],a[cy]),null!=a.strokeOpacity&&nb(b[$b],a.strokeOpacity),null!=a.strokeWidth&&pa(b[$b],a.strokeWidth),null!=a.shapeType&&cb(b[Px],a.shapeType),null!=a.shapeSides&&(b[Px].sides=a.shapeSides),null!=a.shapeRotation&&(b[Px].rotation=
a.shapeRotation),null!=a.shapeDent&&(b[Px].dent=a.shapeDent));return b}function EMa(a,b,c){var d=void 0;b=null!=b.ga[x]?b.ga[x][0]:void 0;if(null!=b&&a.Ub.D(b)===Eh&&(a=a.Ub[I](c,b),null!=a)){var e,d=Di(a);if(Gm(d))e={fill:{color:d},stroke:{color:d}};else if(d[Cb](0)===Yh){try{var f=vo(d)}catch(g){}null!=f&&(e=f)}null==e&&(Fi(d,Yh)?(e=Vj(kKa(d),DMa),O in e&&(jk(e,e[O]),dk(e,O)),Pe in e&&(jk(e,e[Pe]),dk(e,Pe))):e=DMa(rm(d)));d=e}if(null!=d)return new Bn([d])}
function $V(a,b,c,d,e){a.tt&&(b.de=FMa(a,c,d,e));var f=EMa(a,c,e);d=GMa(a,c,e);var g=HMa(a,c,e);a=IMa(a,c,e);e=EU(b,c);var k=c.Cg;if(null!=f){var k=k[Bc](),l=function(a,b,c){b=b||O;c!==GJ&&(a.Oe(Wn(f,[b+FF,b+DF],a.cb())),a.Ch(Rn(f,b+iua,a.Pe)));c!==DF&&(a.hd(Wn(f,[b+JJ,b+GJ],a.re)),cn(a,Rn(f,b+lAa,a.qi)),a.mk(Mn(f,b+mAa,a.Nb)))};lx(b,e=Pn(f,Ixa,e));var n=bo(f,Hxa);null!=n&&(b.shape=n);n=Jn(f,Jxa);null!=n&&rx(b,n);l(k);switch(c[H]){case SG:case ZI:case sD:l(k,Gxa);null!=c.Lc&&(b.$r=(b.$r||b.Lc||c.Lc)[Bc](),
l(b.$r,null,GJ),l(b.$r,TG,GJ));null!=c.Vv&&(b.eF=(b.eF||b.Lc||c.Vv)[Bc](),l(b.eF,null,DF),l(b.eF,kra,DF));break;case CJ:l(k,kra,DF),null!=c.Lc&&(b.Lc=(b.Lc||c.Lc)[Bc](),l(b.Lc,null,GJ),l(b.Lc,TG,GJ));case BD:l(k,tra);break;case cE:b.Pz=b.Pz[Bc](),l(b.Pz),l(b.Lc),l(b.Pz,tra),l(b.Lc,TG)}b.brush=k}a||(b.scope=a,c.Xaa=c.Xaa||k.lH(),k=c.Xaa,b.brush=k);1!=g&&(b.sx=g,c[H]==SG||c[H]==sD||c[H]==ZI)&&(e=h[E](e*h[zd](g)*10)/10,lx(b,e));if(1>d)switch(b.$w=d,c[H]){case SG:case sD:case ZI:b.brush=bW(k,!0);lx(b,
h.max(e-en(b.brush)/2,0));break;case BD:case CJ:b.brush=bW(k,!1)}}function FMa(a,b,c,d){c=a.cW(b,c,d);var e=b.ga.tooltip;e&&!b.$g&&(a=TV(a,e[0],d))&&jk(c,a);c.ql=!!c.ql;return c}function TV(a,b,c){var d=a.Ub;a=a.N.pr&&(d.hp(c,b,Vg)||d.gj(b,Vg));b=d.Ea(c,b);return{ql:!!a,ki:b?!0:!1,content:b}}
W.cW=function(a,b,c){if(this.N.kb===ZI||a.$g){var d=this.Ub,e=this.N,f,g,k,l;if(a.$g)f=a[$][c][0],g=a[$][c][1],null!=f&&(f=kp(f,d.D(a.We))),null!=g&&(g=kp(g,a[ez])),k=e.di===eE?g:f+Se+g,l=f;else if(this.N.jd){var n=this.Dg[0][fA][id]||ZC,p=this.gf[0][fA][id]||Rpa;k=b%2?b-1:b;b=e.l[k];k=e.l[k+1];f=e.uk[k.We].ga[Jz][0];g=XV(k);f=d.Ea(c,f);g=d.Ea(c,g);k=n+PB+f+Se+p+PB+g;f=e.uk[b.We].ga[Jz][0];g=XV(b);f=d.Ea(c,f);g=d.Ea(c,g);k+=re+n+PB+f+Se+p+PB+g}else f=e.uk[a.We].ga[Jz][0],g=XV(a),f=d.Ea(c,f),g=d.Ea(c,
g),k=f+Se+g;a={ki:!1,content:k,Cm:a[fA],hw:l}}else a=JMa(this,a,c);return a};
function JMa(a,b,c){var d=a.Ub,e=a.N.Da[c],e=b.$g?b[$][c][0][kc]():e.Nt[b.We];if(b[H]==cE){var f=b.ga[$];a=d.Ea(c,f[0])+IA+d.Ea(c,f[3])+Se+d.Ea(c,f[1])+IA+d.Ea(c,f[2])}else if(a.N.jd){var g=b.ga[bI],f=b.ga[$],k=a.Ub[I](c,g[0]);a=a.Ub[I](c,f[0]);g=d.Ea(c,g[0]);f=d.Ea(c,f[0]);if(null===k&&zi(g)&&null===a&&zi(f))return{ki:!1,content:null};a=f+re+g}else{f=b.ga[$];k=b.$g?b[$][c][1]:a.Ub[I](c,f[0]);a=b.$g?b[$][c][1][kc]():a.Ub.Ea(c,f[0]);if(null===k&&zi(a))return{ki:!1,content:null};k=b.ga[Gb]||[];k[J]&&
(k=Ti(k,function(a){return d.Ea(c,a)}),a+=rga+k[me](Se)+kg)}return{ki:!1,content:a,hw:e,Cm:b[fA],ql:!1}}
function jMa(a){function b(a){return{ol:a.x,Mw:a.y}}function c(a){return new CL(a.ol,a.Mw)}function d(a){return{x:a.x,y:a.y}}function e(a){return new CL(a.x,a.y)}var f=a.N,g=a.ld,k=X(function(a,b,c){b.uia&&(this.Dg[0].nc(c.x),this.gf[0].nc(c.y))},a);a=X(function(a,b,c){g.nc(c.ol);b.C6&&this.jf[a.qe].nc(c.Mw)},a);var l,n,p;switch(f.kb){case ZI:l=e;n=d;p=k;break;case Mg:l=c,n=b,p=a}for(k=0;k<f.l[J];k++)if(a=f.l[k],a[H]==ZI||a[H]==SG)if($i([Mg,Bxa,DE],a.cw)){var s=a[H]==ZI&&a.cw==DE,u=a.cw==Mg;a.aY=
!0;a.ija=s;s=TR(Ti(a.k,function(a){return!a||a.Qe?null:l(a.Vf)}),a.OL,u,s,f.xj);for(u=0;u<a.k[J];++u){var v=a.k[u];if(s[u]){var z=n(s[u][0]),B=n(s[u][1]);v.G7=z;v.H7=B;p(a,v,z);p(a,v,B)}}}else a.aY=!1}
function oMa(a){if(a.N.di==eE){var b=a.ld,c=pj(a.N.Da[J]);nj(c,X(function(a,b){return lj(cW(this,a),cW(this,b))},a));var d=b.Te,e=b.ef;if(d>e)var f=d,d=e,e=f;for(var g,k,f=0;f<c[J];f++){var l=c[f];k=cW(a,l);if(null!=k){if(HV(b,k))return;if(!(k*b[Ox]<b.Te*b[Ox])){g=f;break}}}if(ci(g))for(var n=d,p,d=null,f=g;f<c[J];f++){null!=d&&f<d&&(f=d,d=null);l=c[f];g=n;if(f==c[J]-1){dW(a,l,g,e);break}p=cW(a,c[f+1]);if(null==p){for(n=f+2;n<c[J];n++)if(p=cW(a,c[n]),null!=p){d=n;break}if(null==p){dW(a,l,g,e);break}}if(HV(b,
p)){dW(a,l,g,e);break}n=Jj(k,p);dW(a,l,g,n);k=p}}}function cW(a,b){var c=a.N.Da,d=a.ld;return d[H]==Qh?null!=c[b][$]?d.UH(c[b][$]):null:d.Fe(b)}function dW(a,b,c,d){function e(){var a=c;c=d;d=a}var f=a.N.A.top,g=a.N.A[Mc],k=a.N.A[G],l=a.N.A[cd],n=a.ld[Ox];b=a.N.Da[b];a.N[Vz]==Tg?1==n?(d<c&&e(),b.UQ=new Fl(f,d,g,c)):(d>c&&e(),b.UQ=new Fl(f,c,g,d)):1==n?(d<c&&e(),b.UQ=new Fl(c,l,d,k)):(d>c&&e(),b.UQ=new Fl(d,l,c,k))}
function rMa(a){var b=a.N;Sj(b.Kd,function(a,d){eW(this,this.gf[d],b.Kd[d],this.Ipa)},a);Sj(b.ce,function(a,d){eW(this,this.Dg[d],b.ce[d],this.Hpa)},a)}function sMa(a){var b=a.N;Sj(b.ce,function(a,d){eW(this,this.Dg[d],b.ce[d],this.rqa)},a)}function eW(a,b,c,d){c[id]&&cx(c,Si(c[id],X(d,a,b)))}W.Hpa=function(a,b){var c=this.N,d=b.Aa;return d.Gb?!0:(d=SR(d))?a.wm!=sG||(new Fl(c.A.top,c.A[cd],c.A[Mc],c.A[G]))[Rc](d)?!0:!1:!0};
W.rqa=function(a,b){var c=this.N;if(a.wm!=sG)return!0;var d=b.Aa;if(d.Gb)return!0;var e=SR(d);if(!e)return!0;var d=d.ba[yc]/2,f=new Fl(e.top,e[cd]+d,e[Mc],e[G]-d),g;for(g in c.Kd){var k=ha(g);if(this.gf[k].wm==sG&&!(1>(c.Kd[k][id]?c.Kd[k][id][J]:0))){var l=SR(c.Kd[k][id][0].Aa),n=SR(Oi(c.Kd[k][id]).Aa);if(l||n){if(l&&Hl(f,l)||n&&Hl(f,n))return!1;l?n?(k=h.min(l[G],n[G]),l=h.max(l[cd],n[cd])):(k=l[G],l=l[cd]):(k=n[G],l=n[cd]);if(h.abs(e[G]-k)<d||h.abs(e[cd]-l)<d)return!1}}}return!0};
W.Ipa=function(a,b){var c=this.N,d=new Fl(c.A.top,c.A[cd],c.A[Mc],c.A[G]),e=b.Aa,f=e.ba[yc]/2,e=SR(e);if(!e)return!0;if(a.wm==sG&&!d[Rc](e))return!1;d=new Fl(e.top,e[cd]+f,e[Mc],e[G]-f);return(f=SR(c[fA]))&&Hl(d,f)||(c=c.iF?SR(c.iF):null)&&Hl(d,c)?!1:(c=this.Cf.getArea())&&Hl(d,c)?!1:!0};
function qMa(a){var b=a.N,c=a.ld,d=a[Eq],e={ab:b.lk,fontSize:b.pm,lc:b.Xv},f=fo(d,[dra,pD],e),g=co(d,[$qa,Sqa]),k=Wn(d,[ara,fra],O),l=Mn(d,[bra,gra],5),n=$n(d,[cra,hra],VT,QG);Z(a.N.Da,function(a,d){var e=[],p=[];Z(b.uk,function(a){a=this.LL(d,a.ga,n);ij(e,a.sN);ij(p,a.line)},this);if(e[J]||p[J]){var s=YV(this,d),s=c.Fe(s),u=b.A.top+b.A[A];e[J]&&(u={x:s,y:u},a.Uc=KMa(this,u,Q,O,!1,this.N[Vz],e,f,g,l,k));p[J]&&(u={x:s,y:null},a.Uc=LMa(this,u,p,f,k))}},a);var p=Zj(EIa),s=In(d,[Vqa,era],!0),u=In(d,[Tqa,
Rqa],!1),v=jfa(d,[Zqa,pD],p,e),z=co(d,[Uqa,Sqa]),B=Xn(d,[Wqa,fra],p,O),D=Mn(d,[Xqa,gra],12),N=$n(d,[Yqa,hra],VT,QG);Z(a.N.l,function(a,b){if(a[H]==sD||a[H]==BD||a[H]==SG||a[H]==ZI){var c=iJ+b+Ima,e=In(d,c+tva,s),f=In(d,c+Fqa,u),g=jfa(d,c+RJ,p,v);Ya(g,UV(g[F],a[F]));var k=co(d,[c+Bra],z),l=Xn(d,c+fAa,p,B),n=Mn(d,c+gAa,D),l=UV(l,a[F]);$n(d,c+Fh,VT,N);for(c=0;c<a.k[J];++c)if(null!=a.k[c]&&null!=a.k[c].V){var Jb=a.k[c],Qc=this.LL(c,a.ga,N),ne=Jb.V,sc=on(a.Cg)?a.Cg.cb():e?ze:QA,Jb=Jb.brush&&on(Jb.brush)?
Jb.brush.cb():sc;if(Jb!==sc&&e){var sc=gk(g),ed=[.1,.2,.3],wf=Hm(Jb),rk=Hm(this.N.LE.cb()),mh=Ti(ed,ui(Mm,wf)),ed=Ti(ed,ui(Nm,wf)),wf=Fm(Om(rk,fj([wf],mh,ed)));Ya(sc,wf)}else sc=g;Qc.sN[J]&&(a.k[c].Uc=KMa(this,ne,a[H],Jb,this.N.Td,this.N[Vz],Qc.sN,sc,k,n,l,e,f));Qc.line[J]&&(a.k[c].Uc=LMa(this,ne,Qc.line,g,l))}}},a)}
W.LL=function(a,b,c){var d=this.Ub,e=b.annotation,f={line:[],sN:[]};if(null==e)return f;b=b.annotationText||[];for(var g=0;g<e[J];++g){var k=e[g],l=k+1,n=0<=Qi(b,l);d[I](a,k)&&(l={text:d.Ea(a,k),e8:n?l:null,rowIndex:a},$n(this[Eq],Nqa+k+Tma,VT,c)==SG?f.line[C](l):f.sN[C](l))}return f};
function KMa(a,b,c,d,e,f,g,k,l,n,p,s,u){var v=[[64,64,64],[128,128,128],[255,255,255]],z=null==s?!0:s;s=c===BD;var B,D;if(s)var N=new Il(b[G],b.top,b[r],b[A]),M=D=b.top,R=B=h[t](b[G]+b[r]/2);else var R=B=b.x,M=D=b.y;var S=M-n,V=S,ma=-n,Ja=g[J],Ha=n+k[yc]*Ja;M-Ha<a.N.A.top&&M+Ha<a.N.A[Mc]&&(S=M+Ha,V=M+n+k[yc],ma=n);M=null;1<Ja&&(n=R,M=V,V=null,V=g[0][id]+dla,Ha=a.$c(V,k),c===BD&&Ha[r]>b[r]?(c=b[G],n=AJ):(c=n,n=iE),V={$U:!1,label:{text:V,ba:k,I:[{x:0,y:0,length:Ha[r],text:V}],Kc:n,Jc:sF,anchor:new RR(c,
M),Gb:0}},a.tt&&(V[Wc].sb=ioa),M=V);c=[];for(n=0;n<Ja;n++){var V=g[n],Va=a.$c(V[id],k),Ha={},Ge=new RR(B,S),Jb=null;Ha.ba=Do(k,Eo);if(s){if(N&&!u){var Jb=Hm(d),Qc=Fm(Om(Jb,v)),Jb=f===Tg?$J:Os,ne=Do(k,Eo);z&&(ne.lc=Q,Ya(ne,Qc));t:{var sc=V[id],ed=ne,wf=Jb,Jb=N,rk=a.$c,ne=a.tt,mh=qi(2)?2:0,xf=qi(2)?2:0,Qc=rk(sc,ed),Pq,$f=Jb.ac();Pq=Qc[r]<=$f[r]&&Qc[A]<=$f[A];var $f={},hj=[];cx($f,sc);$f.ba=ed;if(wf===$J)wf=h[t](Jb[Dz]().x),xf=Jb.top+xf,$f.Kc=iE,$f.Jc=AJ;else if(wf===Os)wf=Jb[G]+(Jb[r]-mh),xf=h[t](Jb[Dz]().y),
$f.Kc=sF,$f.Jc=iE;else throw m("Invalid text block position.");if(!Pq||Qc[r]>Jb[r]-mh)if(Qc[A]<Jb[A]){if(ed=QP(rk,sc,ed,Jb[r]-mh,Jb[A]/(Qc[A]+2)),hj=ed.I,ed.te){var Oj=sc;$f.hC=!0}}else if(Jb[A]>ed[yc]/3)Oj=sc,hj=[Ve],xf=h[t](Jb[Dz]().y),$f.Jc=iE,$f.hC=!0;else{Jb=null;break t}$f.I=[];if(hj[J])for(ed=sc=0,rk=hj[J];ed<rk;ed++)$f.I[C](new iKa({x:0,y:sc,length:Jb[r],text:hj[ed]})),sc+=Qc[A];else $f.I[C](new iKa({x:0,y:0,length:Qc[r],text:sc}));$f.Gb=0;Ex($f,new RR(wf,xf));ne&&Oj&&($f.de={ql:!1,ki:!1,
content:Oj});Jb=new jKa($f)}}if(u||!e&&(!Jb||1<Jb.I[J]||Jb.hC))switch(f){case Tg:Ha.Jc=sF;b[r]>Va[r]?(Ge.x=B,Ha.Kc=iE):(Ge.x=N[G],Ha.Kc=AJ);break;case Rh:Ge.x=N[G]+N[r]+2,Ha.Kc=AJ,Ha.Jc=iE,Ge.y=N[Dz]().y}}else Ge.x=R,Ha.Kc=iE,Ha.Jc=sF;if(Jb&&(e||!e&&!Jb.hC)){c[C](Jb);var ag=!0}else{switch(f){case Tg:Ha.Kc=iE;Ha.Jc=sF;break;case Rh:Ha.Kc=AJ,Ha.Jc=iE}cx(Ha,V[id]);Ha.ba=k;Ha.Kq=l;Ex(Ha,Ge);Ha.hC=!1;Ha.I=[{x:0,y:0,length:Va[r],text:V[id]}];Ha.Gb=0;Va=V.e8;a.tt&&null!=Va&&(Ha.de=TV(a,Va,V.rowIndex));c[C](Ha);
S-=k[yc]}}n=ag?0:ma;a=Rh;s&&f===Rh&&(n=0,a=Tg,B=b[G]+b[r],D=h[t](b.top+b[A]/2));return{G5:{x:B,y:D,length:n,orientation:a,color:p},labels:c,bundle:M?M:null}}
function LMa(a,b,c,d,e){var f=b.x,g=b.y,k=d[yc];b=[];for(var l=0;l<c[J];l++){var n=c[l],p=QP(a.N.$c,n[id],d,a.N.A[A]-k);b[C](p)}if(null!=g){for(l=n=0;l<b[J];l++)p=b[l],n=h.max(n,p.gh);l=n+k;g=h[E](g-l/2);g<a.N.A.top&&(g=a.N.A.top);k=g+l;k>a.N.A[Mc]&&(k=a.N.A[Mc],g=k-l)}else g=a.N.A.top,k=a.N.A[Mc];for(var s=h[E]((g+k)/2),u=f+2,v=[],l=0;l<c[J];l++){var n=c[l],p=b[l],p={text:n,ba:d,I:[{x:u,y:s,length:p.gh,text:p.I[0]}],Kc:iE,Jc:AJ,anchor:null,Gb:270},z=n.e8;a.tt&&null!=z&&(p.de=TV(a,z,n.rowIndex));
v[C](p);u+=d[yc]}return{G5:{x:f,y:g,length:k-g,orientation:Rh,color:e},labels:v,bundle:null}}function BMa(a,b){var c=a.N.l[b],d=MMa(a,c);c.k&&Z(c.k,function(a){null!=a&&(a.V=d(a.Vf),null!=a.G7&&(a.bs=d(a.G7)),null!=a.H7&&(a.cs=d(a.H7)))});c.vf&&(0<c.vf.I[J]||0<c.vf[CA][J])&&NMa(c)}function pMa(a){Z(a.N.l,function(a,c){BMa(this,c)},a)}
function NMa(a){function b(b){var c=e[b];delete e[b];if(c&&1<c.line[J]){c[Mc]&&c[Mc][dq]();if(f[b].cw!=Q){var d=f[b].cw==Mg;b=f[b].OL;c.ZU=TR(c.line,b,d,!1,!1);c[Mc]&&(c.kha=TR(c[Mc],b,d,!1,!1))}a.vf.Fi[C](c)}}function c(a,b){if(!e[a]){var c=f[a].brush[Bc](),d=f[a][x],g={};g.pF=a;g.line=[];d==sD?(c.mk(0),Ma(g,[])):c.Ch(0);g.brush=c;e[a]=g}e[a].line[C](new CL(b[G],b.top));e[a][Mc]&&e[a][Mc][C](new CL(b[G]+b[r],b.top+b[A]))}function d(a){a=f[a][x];return a==sD||a==SG}var e={},f=a.vf.qF;a.vf.Fi=[];for(var g=
0;g<a.k[J];g++){var k={},l=a.k[g];if(l&&l.V&&l.V.fr)for(var l=l.V.fr,n=0;n<l[J];++n){var p=l[n].pF;d(p)&&(k[p]=!0,c(p,l[n][kA]))}for(p in e)k[p]||f[p].xj||b(p)}for(p in e)b(p)}function MMa(a,b){switch(b[H]){case ZI:return X(a.Gta,a,b);case XD:return X(a.Dta,a,b);case SG:return X(a.Fta,a,b);case BD:return X(a.Cta,a,b);case CJ:return X(a.Hta,a,b);case cE:return X(a.Eta,a,b);case sD:return X(a.Bta,a,b)}return null}W.Gta=function(a,b){return{x:this.Dg[0].Fe(b.x),y:this.gf[0].Fe(b.y)}};
W.Dta=function(a,b){var c=this.qr,d=this.Dg[0].Fe(b.x),e=this.gf[0].Fe(b.y),f;f=c.fp==T?OR(c.Qq,b[F]):c.fp==Eh?c.Tz[b[F]][F]:c.bN;f=new bn({fill:f,Ce:c.ym,stroke:c.re});c=rHa(c.TE,b[Ry]);return{x:d,y:e,brush:f,radius:c,jP:c}};W.Fta=function(a,b){var c=fW(this,a.qe,b.ol,b.Mw);c.fr=gW(this,a,b);return c};W.Cta=function(a,b){var c=hW(this,a,b,b.tk,b.hl);return c?{top:c.top,left:c[G],width:c[r],height:c[A],fr:gW(this,a,b)}:null};
W.Eta=function(a,b){var c=hW(this,a,b,b.gja,b.hja),d=hW(this,a,b,b.fja,b[zz]);if(!c||!d)return null;pa(d,2);Za(d,d[G]+(c[r]-(c[r]%2?3:2))/2);var e=b.eja?a.cF.B5:a.cF.C5;nn(e)&&(e=e.Nb/2,Sa(c,c[A]-2*e),pa(c,c[r]-2*e),Za(c,c[G]+e),c.top+=e);Sa(c,h.max(c[A],2));pa(c,h.max(c[r],1));return{rect:c,line:d}};
W.Hta=function(a,b){var c=this.jf[a.qe];null==b.tk&&(b.tk=wT(c.ea,c.Eb.ta));var d=this.ld,e=d[cz][b.nr].X,f=d.lw,g=h[t](e-d[Ox]*f/2),f=h[t](e+d[Ox]*f/2),k=c.Fe(b.hl),d=iW(this,g,c.Fe(b.tk)),e=iW(this,g,k),f=iW(this,f,k),k=[];In(this[Eq],Jsa,!0)&&null!=b.b6&&(c=iW(this,g,c.Fe(b.b6)),k[C](c));k[C](e);k[C](f);return{Rq:RLa(d.x,d.y,f.x,f.y),outline:k,fr:gW(this,a,b)}};
function hW(a,b,c,d,e){var f=a.ld,g=a.jf[b.qe];b=a.yO;null!=d||(d=wT(g.ea,g.Eb.ta));if(c.yw>=b.z8||c.nr>=f[cz][J]&&f[H]!=Qh)return null;f=h.min(g.Fe(d),g.Fe(e));d=h.max(g.Fe(d),g.Fe(e));g=(e=a.N.kb===jG)?xMa(g.lw,In(a[Eq],kG))?0:1:h.min(1,.2*(d-f));0===g||h[t](f+g)<h[t](d)&&h[t](f+g)>h[t](f)?(f=h[t](f+g),d=h[t](d)):f+=g;var k=Mn(a[Eq],nta,.3),g=OMa(a,c);c=(c.oia?k:1)*b.aP/2;b=(e?h[yb]:h[t])(g-c);c=h[t](g+c);f=iW(a,b,f);a=iW(a,c,d);return RLa(f.x,f.y,a.x,a.y)}
W.Bta=function(a,b){function c(a){return null!=a?a:e}var d=this.jf[a.qe],e=wT(d.ea,d.Eb.ta),d=fW(this,a.qe,b.ol,b.Mw),f=fW(this,a.qe,b.u6,c(b.v6)),g=fW(this,a.qe,b.w6,c(b.x6)),k=fW(this,a.qe,b.y6,c(b.z6)),l=fW(this,a.qe,b.A6,c(b.B6)),n=gW(this,a,b);return{x:d.x,y:d.y,DV:f.x,EV:f.y,FV:g.x,GV:g.y,tM:k.x,uM:k.y,vM:l.x,wM:l.y,fr:n}};
function gW(a,b,c){if(!c.VF)return[];var d=a.ld;b=a.jf[b.qe];var e=a.yO;if(c.yw>=e.z8||c.nr>=d[cz][J]&&d[H]!=Qh)return[];for(var f=OMa(a,c),g=[],k=0,l;l=c.VF[k];k++){var n=b.Fe(l.Cka),p=b.Fe(l.Dka),s=(d[H]==Qh?d[cz]&&1<d[cz][J]?d[cz][1].X-d[cz][0].X:0:e.aP)*l.Eka,u=h.abs(n-p),p=iW(a,f-s/2,h.min(p,n)),n=p.x,p=p.y,s=iW(a,s,u);g[C]({rect:new Il(n,p,s.x,s.y),pF:l.pF})}return g}function OMa(a,b){var c=a.ld,d=a.yO;return(c[H]==Qh?c.Fe(b.ol):c[cz][b.nr].X)-d.Gla+(d.aP+1)*b.yw+d.aP/2}
function UV(a,b){switch(a){case hJ:return b.wb;case Zya:return b.ij;case gJ:return b[F];default:return a}}function iW(a,b,c){switch(a.N[Vz]){case Tg:return{x:b,y:c};case Rh:return{x:c,y:b}}throw m("Invalid orientation.");}function fW(a,b,c,d){return iW(a,a.ld.Fe(c),a.jf[b].Fe(d))}function bW(a,b){var c=a[Bc]();if(on(c)&&c.cb()!=Ae){var d=new an(zI,c.cb());c.vd=d;!nn(c)&&b&&(c.hd(c.cb()),c.mk(1))}else nn(c)&&(c.nl=YE);return c}function CMa(a,b){var c=a[Bc]();c.mk(c.Nb*b);return c}
function GMa(a,b,c){a=a.Ub;b=b.ga.certainty||[];return b[J]&&(c=a[I](c,b[0]),null!=c)?a.D(b[0])==wg?c?1:0:c:1}function IMa(a,b,c){a=a.Ub;b=b.ga[jA]||[];return b[J]&&(c=a[I](c,b[0]),null!=c)?!!c:!0}function HMa(a,b,c){a=a.Ub;b=b.ga.emphasis||[];return b[J]&&(c=a[I](c,b[0]),null!=c)?a.D(b[0])==wg?c?2:1:c:1}function WV(a,b){var c=VV(a);return null===c?null:a.Ub[I](b,c)}function VV(a){if(null===a.ld||a.ld[H]!=Qh)return null;a=a.N.uk[0].ga.gap||[];return aj(a)?null:a[0]}
function ZV(a,b,c,d,e){function f(a,b,f){var g=wT(k.ea,l[I](c,a));b=wT(k.ea,l[I](c,b));null!=g&&null!=b&&(g+=d,b+=d,e&&(k.nc(g),k.nc(b)),n[C]({Dka:g,Cka:b,Eka:f,pF:a}))}var g=b.vf;if(!g)return null;var k=a.jf[b.qe],l=a.Ub,n=[];for(a=0;a<g.Gx[J];a+=2)f(g.Gx[a],g.Gx[a+1],0);for(var p=0,s=g.uP[J]-1;p<=s;p++,s--)a=g.uP[p],b=g.uP[s],f(a,b,g.qF[a].ska);for(b=0;b<g.k[J];b++)a=g.k[b],f(a,a,0);for(b=0;b<g.Cb[J];b++)a=g.Cb[b],p=g.qF[a],f(a,a,0==b||b==g.Cb[J]-1?p.rka:p.tka);p=0;for(s=g[CA][J]-1;p<=s;p++,s--)a=
g[CA][p],b=g[CA][s],f(a,b,0);for(b=0;b<g.I[J];b++)a=g.I[b],f(a,a,0);return n[J]?n:null}function nMa(a){var b=a.N;if(b.Sf.bars||b.Sf.candlesticks||!ii(Xi(b.l,function(a){return null!=a.vf}))){var c=Si(b.Da,function(a,b){return 0!=WV(this,b)},a),c=PMa(a.ld,c),c=h.max(c,1),d=mfa(a[Eq],c),d=h.max(d,1),e=h.min(a.Pw,h[t]((d+1)/2)),f=(d-e+1)/e;c>d&&(f=h[t](f));a.yO={z8:e,aP:f,Gla:b.kb===jG?0:((f+1)*e-1)/2}}}

    function PMa(a, b) {
        if (aj(b))return 0;
        if (a[H] == Qh) {
            for (var c = a.fF, d = null, e = 0; e < b[J]; e++) {
                var f = a.UH(b[e][$]);
                null != d && (c = h.min(c, h.abs(f - d)));
                d = f
            }
            return c
        }
        return h.abs(a.UH(1) - a.UH(0))
    }

    function YV(a, b, c) {
        var d = a.Ub;
        a = a.ld;
        a[H] == Qh && (b = c && c.$g ? c[$][b][0] : d[I](b, 0), b = wT(a.ea, b));
        return b
    }

    function jW(a) {
        this.Mn = a;
        this.f1 = [];
        this.kS = !1;
        this.ai = {ze: null, Eu: 0, ll: 0, RJ: 0, SJ: 0}
    }

    jW[K].af = function (a, b, c) {
        this.f1[c] = !0;
        0 === c && (this.ai.ze = b, this.ai.Eu = a.x, this.ai.ll = a.y, this.ai.RJ = a.x, this.ai.SJ = a.y)
    };
    up(jW[K], function (a, b) {
        this.Mn[fq]({type: a, data: b})
    });
    function kW(a, b, c, d) {
        this.Mn = a;
        this.F = b;
        this.Dr = c;
        this.bh = d;
        this.yy = null;
        this.D0 = new jW(a);
        this.hQ = null
    }

    Y(kW, ut);
    W = kW[K];
    W.B = function () {
        this.F[Yb]();
        this.Dr[Yb]();
        wt(this.hQ);
        kW.e.B[L](this)
    };
    function QMa(a) {
        var b = a.F.wt;
        RMa(a, X(function (a, d) {
            this.F.hc(b, a, d)
        }, a));
        wt(a.hQ);
        a.hQ = new XN(a.F.pc());
        Lt(a.hQ, RH, X(a.Gpa, a))
    }

    function SMa(a) {
        var b = a.Dr.pc();
        RMa(a, X(function (a, d) {
            this.Dr.hc(b, a, d)
        }, a))
    }

    function TMa(a) {
        var b = ea;
        UMa(a, X(function (a, d) {
            this.Dr.hc(b, a, d)
        }, a))
    }

    function UMa(a, b) {
        b(PH, X(a.lua, a));
        b(QH, X(a.mua, a))
    }

    function RMa(a, b) {
        b(Is, X(a.wfa, a));
        b(Hs, X(a.xta, a));
        b(PH, X(a.wfa, a));
        b(QH, X(a.wta, a));
        b(Gs, X(a.vta, a));
        b(gs, X(a.tta, a));
        b(IE, X(a.yta, a));
        b(aF, X(a.uta, a))
    }

    W.lua = function (a) {
        var b = Zl(this.F.pc());
        a = Zl(a);
        a.x -= b.x;
        a.y -= b.y;
        b = this.D0;
        b.f1[0] && (b.ai.RJ = a.x, b.ai.SJ = a.y, b.kS || b[fq](Vra, {
            ze: b.ai.ze,
            xb: {x: b.ai.Eu, y: b.ai.ll}
        }), b.kS = !0, b[fq](Tra, {ze: b.ai.ze, xb: {x: b.ai.RJ, y: b.ai.SJ}}))
    };
W.mua=function(a){var b=Zl(this.F.pc()),c=Zl(a);c.x-=b.x;c.y-=b.y;b=this.D0;a=a[Qq];b.f1[a]=!1;0===a&&b.kS&&(b.kS=!1,b.ai.RJ=c.x,b.ai.SJ=c.y,b[fq](Ura,{ze:b.ai.ze,xb:{x:b.ai.RJ,y:b.ai.SJ}}))};W.wfa=function(a){var b=yL(a),c=this.lt(a);a[H]==PH&&this[fq](Zra,{xb:b,ze:c});c!=this.yy&&(null!=this.yy&&VMa(this,this.yy),this[fq](Wra,{xb:b}),lW(this,Noa,c),this.yy=c)};W.xta=function(a){a=this.lt(a);a==this.yy&&(VMa(this,a),this.yy=null)};function VMa(a,b){a[fq](Xra,null);lW(a,Ooa,b)}
W.wta=function(a){var b=yL(a);a=this.lt(a);this[fq]($ra,{xb:b,ze:a});lW(this,Yoa,a)};W.vta=function(a){var b=yL(a),c=this.lt(a);this[fq](Yra,{xb:b,ze:c,preventDefault:X(a[eq],a)});lW(this,Xoa,c);this.D0.af(b,c,a[Qq])};W.tta=function(a){var b=yL(a);a=this.lt(a);this[fq](Rra,{xb:b,ze:a});lW(this,hoa,a)};W.yta=function(a){var b=yL(a),c=this.lt(a);this[fq](esa,{xb:b,ze:c});lW(this,npa,c);yt(a)};W.uta=function(a){var b=yL(a);a=this.lt(a);this[fq](Sra,{xb:b,ze:a});lW(this,roa,a)};
W.Gpa=function(a){var b=yL(a),c=this.lt(a);this[fq](fsa,{xb:b,ze:c,wheelDelta:a.detail,preventDefault:X(a[eq],a)});lW(this,rpa,c)};
function lW(a,b,c){var d=c[rc](we);switch(d[0]){case Xs:var e=c=null,f=null;a.bh==pI?c=ha(d[1]):4==d[J]?(c=d[1]?ha(d[1]):null,e=ha(d[2]),f=ha(d[3])):3==d[J]?(c=ha(d[1]),e=ha(d[2])):e=ha(d[1]);d={uc:c,fj:e,Hx:f};a[fq](Xs+b,d);break;case hD:d={Xw:d[1]};a[fq](uqa+b,d);break;case OG:d=ha(d[1]);if(0>d)break;d={ZQ:d};a[fq](kwa+b,d);break;case PG:d={Goa:ha(d[1])};a[fq](pwa+b,d);break;case oya:d=ha(d[1]);d={ZQ:d};a[fq](iya+b,d);break;default:a.Xda(b,c)}}up(W,function(a,b){this.Mn[fq]({type:a,data:b})});function mW(a,b,c,d){kW[L](this,a,b,c,d.kb);this.P=d;this.n0=WMa(this)}Y(mW,kW);mW[K].n5=function(a){this.P=a;this.n0=WMa(this)};function WMa(a){var b=a.P;if(b.kb!=Mg&&b.kb!=ZI)return{};a={};for(var b=b.l,c=0;c<b[J];c++){var d=b[c];if(CU(d))for(var e=d.k,f=0;f<e[J];f++){var g=e[f];if(g&&g.V&&!g.Qe){var k=JP([sI,c,f]);a[k]={center:g.V,radius:g.V&&null!=g.V.jP?g.V.jP:null!=g.jP?g.jP:d.Z4,uc:c,fj:f}}}}return a}
mW[K].lt=function(a){var b=this.F.Uu(a[ar]),c=yL(a),c=XMa(this,c);if(a[H]==Hs){a=this.yy;if(null==a)return b;c=c==a?null:a}if(null!=c){a=YMa(b);var d=YMa(c),b=a>d?b:c}this.P.di==eE?(c=b[rc](we)[0],c=c!=ds&&c!=WD&&c!=bE&&c!=sI&&c!=wI&&c!=DJ):c=!0;return c?b:fs};
function XMa(a,b){if(!(new Il(a.P.A[G]+1,a.P.A.top+1,a.P.A[r]-2,a.P.A[A]-2))[Rc](b))return null;switch(a.P.di){case $E:var c=b.x,d=b.y,e=null,f=da,g;for(g in a.n0){var k=a.n0[g],l=k[Sx].x,n=k[Sx].y,p=k[Lz];l-c<=p&&l-c>=-p&&n-d<=p&&n-d>=-p&&(l=(l-c)*(l-c)+(n-d)*(n-d),l<=p*p&&l<=f&&(e=JP([wI,k.uc,k.fj]),f=l))}return e;case eE:t:{c=a.P.Da;for(d=0;d<c[J];d++)if((e=c[d].UQ)&&e[Rc](b)){c=JP([gE,d]);break t}c=null}return c}return null}function YMa(a){a=a[rc](we);return Qi(wEa,a[0])}
mW[K].Xda=function(a,b){var c=b[rc](we);switch(c[0]){case ds:case WD:case bE:case sI:case wI:case DJ:var d=ha(c[1]),c={uc:d,fj:ha(c[2])};this[fq]($E+a,c);break;case gE:c=ha(c[1]);c={uc:null,fj:c};this[fq](eE+a,c);break;case qD:d=ha(Oi(c));this[fq](oD+a,3==c[J]?{uc:null,fj:ha(c[1]),Hx:d}:{uc:ha(c[1]),fj:ha(c[2]),Hx:d});break;case SG:case sD:d=ha(c[1]),c={uc:d,fj:null},this[fq](Vya+a,c)}};function nW(a,b){this.xv={};this.Ov={};this.mE=[];this[Kz](a,b)}function ZMa(a){Z(a.mE,function(a){$Ma(this,this.Ov[a])},a)}nW[K].updateOptions=function(a,b){this.Ha=fo(a,tqa,b);this.Vra=fo(a,sqa,b);ZMa(this)};nW[K].getEntries=function(){for(var a=[],b=0,c=this.mE[J];b<c;b++){var d=this.mE[b],e=this.Ov[d];if(!e[Yz]||e[Yz]()){var f=null,f=e[Gq]&&!e[Gq]()?LP(e[id]||O,this.Vra,null,null,null,null,null,!1,null):hk(this.xv[d]);a[C](f)}}return a};
function $Ma(a,b){if(!b.id)throw m("Missing mandatory ID for action.");var c=null;a.Ov[b.id]?c=a.Ov[b.id]:(c=a.Ov[b.id]={id:b.id,text:void 0,visible:void 0,enabled:void 0,action:void 0},a.mE[C](b.id));jk(c,b);a.xv[b.id]=LP(c[id]||O,a.Ha,null,null,null,null,null,!1,c.id)}nW[K].oh=function(a){(a=this.Ov[a])&&(a=hk(a));return a};function aNa(a,b){a.UI=a.UI||{};var c=a.UI;c.entries=c[qA]||{};c=c[qA];c[b]=c[b]||{};c=c[b];c.Gh=c.Gh||{};return c.Gh}

    nW[K].Bs = function (a, b, c) {
        if (!a[Py]) {
            var d = b.Sa.Xw;
            null != d && (a = Yi(a.UI[qA], function (a) {
                return a.Gh[$].id == d
            }), -1 !== a && (c = aNa(c, a), qa(c, c[$] || {}), Bx(c[$], c[$][pA] || {}), c[$][pA].brush = rn(zla)))
        }
    };
    function bNa(a) {
        this.Mb = a
    }

    function oW(a, b) {
        var c = {index: {}, order: [], Nt: {}};
        Z(b, function (a) {
            var b = this.getKey(a);
            if (null != b) {
                if (!c.Nt[zc](b)) {
                    var f = this.getTitle(a);
                    f && (c.Nt[b] = f)
                }
                c[pc][zc](b) || (c[pc][b] = [], c[Nx][C](b));
                c[pc][b][C](a)
            }
        }, a);
        return c
    }

    function pW(a) {
        this.Mb = a
    }

    Y(pW, bNa);
    pW[K].getKey = function (a) {
        return this.Mb.e_(a)
    };
    pW[K].getTitle = function (a) {
        return this.Mb.dQ(a)
    };
    qx(pW[K], function (a, b, c) {
        var d = DJa(this.Mb, c);
        return cNa(a, d, b[zb] || O, !0, a.ona, this.Mb.l[c.pb])
    });
    function qW(a) {
        this.Mb = a
    }

    Y(qW, bNa);
    qW[K].getKey = function (a) {
        return a.pb
    };
    qW[K].getTitle = function (a) {
        return DJa(this.Mb, a)
    };
    qx(qW[K], function (a, b, c) {
        c = this.Mb.dQ(c) || O;
        return [c ? LP(b[zb] || O, a.wI, c, a.Ha) : null]
    });
    function rW(a, b, c, d) {
        b = fo(a, NAa, {ab: b.ab, fontSize: b[yc]});
        this.Qr = In(a, JAa, c == eE);
        this.ona = In(a, JAa, !0);
        this.Vka = In(a, LAa, !0);
        this.Ha = b;
        this.wI = Wea(b);
        this.se = d || null;
        this.n9 = Tn(a, mta, noa);
        this.o9 = Tn(a, pta, gpa)
    }

    rW[K].qu = function () {
    };
    function sW(a, b, c, d) {
        rW[L](this, a, b, c, d)
    }

    Y(sW, rW);
    sW[K].C9 = function (a, b, c) {
        var d = a.Mb, e = d.l[b];
        c = d.IG(b, c);
        var f = !1, g = null, k = null, l = null != d.jd && d.jd;
        if (d.jd)if (f = !0, k = [this.n9, this.o9], d = e[H], d === BD) g = [{
            color: e.Cg.cb(),
            alpha: e.Cg.Pe
        }, {
            color: e.Dh[pA].Cg.cb(),
            alpha: e.Dh[pA].Cg.Pe
        }]; else if (d === ZI) d = b % 2 ? b - 1 : b, b = a.Mb.l[d], d = a.Mb.l[d + 1], g = [{
            color: d.Cg.cb(),
            alpha: d.Cg.Pe
        }, {color: b.Cg.cb(), alpha: b.Cg.Pe}]; else throw m("Diff chart not supported for the chosen chart type.");
        b = {entries: []};
        if (c.I)for (c[fA] && tW(this, b, c[fA]), e = 0; e < c.I[J]; e++)k = c.I[e], f = b, k =
(l=k[fA])?LP(k[od],this.wI,l,this.Ha):null,null!=k&&f[qA][C](k);else c.hw&&!c.ki?(tW(this,b,c.hw),uW(this,b,c.Cm,c[zb],!0,this.Qr,e,f,g,k,l)):c.Cm&&!c.ki?uW(this,b,c.Cm,c[zb],!0,this.Qr,e,!0,g,k,l):null!=c[zb]&&uW(this,b,null,c[zb],!1,this.Qr,e);this.qu(b,a.vk);return b};
function dNa(a,b,c,d){var e=b.Mb,f=new pW(e),g=new qW(e),k=null;d==eE?k=f:d==fJ&&(k=g);var l;if(k)l=oW(k,c);else{d=oW(f,c);var n=oW(g,c),k=g;l=n;1==d[Nx][J]&&1<n[Nx][J]&&(k=f,l=d)}var p={entries:[]};Z(l[Nx],function(a){tW(this,p,l.Nt[a][kc]());Z(l[pc][a],function(a){var b=e.IG(a.pb,a.nb);b.ki?uW(this,p,null,b[zb],!1,this.Qr,e.l[a.pb]):p[qA][C][Sc](p[qA],k[Xz](this,b,a))},this)},a);a.qu(p,b.vk,0<c[J]);return p}
sW[K].D9=function(a,b){var c=a.Mb,d=c.l[b],e=d.de,f=null,g=null,k=null!=c.jd&&c.jd;c.jd&&(f=c.l[J],f=(b+f/c.pie.ei[J])%f,g=c.l[f],c={color:d.brush.cb(),alpha:d.brush.Pe},g={color:g.brush.cb(),alpha:g.brush.Pe},f=b>f?[c,g]:[g,c],g=[this.n9,this.o9]);c={entries:[]};e.Cm?uW(this,c,e.Cm,e[zb],!0,this.Qr,d,!0,f,g,k):uW(this,c,null,e[zb],!1,this.Qr,d);this.qu(c,a.vk);return c};
function eNa(a,b,c){var d=b.Mb,e={entries:[]};Z(c,X(function(a){a=d.l[a];var b=a.de;b.Cm?uW(this,e,b.Cm,b[zb],!0,this.Qr,a,!0):uW(this,e,null,b[zb],!1,this.Qr,a)},a));a.qu(e,b.vk);return e}
sW[K].B9=function(a,b){var c=a.Mb,d=c.Da[b].de,e=!1,f={entries:[]};if(d&&d[zb])uW(this,f,null,d[zb],!1,!1);else{var g=0,k=1,l=c.l[J];OJa(c)&&(g=c.l[J]-1,l=k=-1);for(var n=null;g!=l;g+=k){var p=c.l[g],d=vU(c,g,b);if(n!=p.We){var n=p.We,s=c.Da[b].Nt[n];Ai(s)||tW(this,f,s)}p.k[d]&&p.k[d].de&&p.k[d].de[zb]&&(d=p.k[d].de,uW(this,f,d.Cm,d[zb],!0,this.Qr,p,void 0,void 0,void 0,void 0,d.ki&&d.ql),e=!0)}}null!=a.vk&&0<a.vk[J]&&(e=!0);this.qu(f,a.vk);return e||this.Vka?f:null};
function tW(a,b,c){a=LP(c,a.wI);b[qA][C](a)}function cNa(a,b,c,d,e,f,g,k,l,n,p){g=null!=g?g:!1;d=d?a.wI:a.Ha;c=c[rc](re);var s=e?f[F][F]:null;b=g&&null!=b?LP(b,a.Ha,null,null,s,f&&f.dF):LP(c[0],d,b,a.Ha,s,f&&f.dF,null,p);a=[b];for(g=g?0:1;g<c[J];g++)s=null!=k?k[g][F]:e?Q:null,b=LP(c[g],d,null,null,s,null!=k?k[g][nA]:null,null!=l?l[g]:null,p),b.fK=n,a[C](b);return a}function uW(a,b,c,d,e,f,g,k,l,n,p,s){b[qA][C][Sc](b[qA],cNa(a,c,d,e,f,g,k,l,n,p,s))}
sW[K].qu=function(a,b,c){b&&0!==b[J]&&((void 0==c||c)&&a[qA][C](BEa()),ij(a[qA],b))};function vW(a,b,c){rW[L](this,a,b,c);this.R$=this.wI;this.SQ=gk(this.Ha);Ya(this.SQ,$A);Fa(this.SQ,this.SQ[yc]-2)}Y(vW,rW);vW[K].C9=function(a,b,c){b=a.Mb.l[b];a=b.k[c].de;c=[];b.Fz||(b=LP(b[fA],this.R$),c[C](b));b=LP(a[zb],this.R$);c[C](b);a=LP(a.hw,this.SQ);c[C](a);return{entries:c}};vW[K].D9=function(){return{entries:[]}};vW[K].B9=function(){return{entries:[]}};function fNa(a,b,c){this.ds=b;this.Om=In(a,FAa,!1)?new Fl(-da,da,da,-da):new Fl(0,c[r],c[A],0);this.Dx=null;c=Nn(a,HAa);var d=Nn(a,IAa);null!=c&&qi(c)&&Lj(c)&&null!=d&&qi(d)&&Lj(d)&&(this.Dx=new Kk(c,d));b=null!=b.se&&0<b.se.getEntries()[J]?xg:Kg;this.qV=$n(a,ZJ,ho,b)}function wW(a){if(a.kb==pI){var b=a.pie[Sx];return new Kk(b.x,b.y)}b=Yj(a.ce);b=null!=b.Eb?b.Eb.X:h.min(b.Te,b.ef);a=Yj(a.Kd);a=null!=a.Eb?a.Eb.X:h.max(a.Te,a.ef);return new Kk(b,a)}function gNa(a,b){a.Om=b}
function xW(a,b,c){var d=b.V;b=EU(b,c);a=wW(a);b=1+h[yb](b/h[zd](2));return new Kk(d.x+(d.x>=a.x?b:-b),d.y+(d.y<=a.y?-b:b))}function hNa(a,b){var c=DL(a.pie[Sx],QV(((b.$q?45:(b.Ud+b.pd)/2)/180-.5)*h.PI,a.pie.cd,a.pie.dd)),c=new Kk(c.x+b[uy].x,c.y+b[uy].y);c.x=Aj(c.x,0,a[r]);c.y=Aj(c.y,0,a[A]);return c}function iNa(a){var b=a[sA]?a[sA]:new Kk(0,0),c=a.I[0],d=a.ba[yc];return 270==a.Gb?new Kk(b.x+c.x+d,b.y+c.y-c[J]/2):new Kk(b.x+c.x+c[J]/2,b.y+c.y-d)}
function jNa(a,b,c){var d=a.l[b],e=d[H];c=vU(a,b,c);switch(a.kb){case Mg:case jG:switch(e){case BD:case CJ:return d=d.k[c],d=d.V.Rq||d.V,b=wW(a),d=new Kk(d[G]+(d[G]<b.x?0:d[r]),d.top+(d.top<b.y?0:d[A])),kNa(a,d),d;case SG:case sD:return xW(a,d.k[c],d);case cE:return d=d.k[c].V[kA],b=wW(a),d=new Kk(d[G]+d[r]>b.x?d[G]+d[r]:d[G],d.top<b.y?d.top:d.top+d[A]),kNa(a,d),d}case ZI:return xW(a,d.k[c],d);case WD:c=d.k[c];b=c.V;d=xW(a,c,d);if(d.x<a.A[G]||d.x>a.A[cd])d.x+=2*(b.x-d.x);if(d.y<a.A.top||d.y>a.A[Mc])d.y+=
2*(b.y-d.y);return d}return new Kk(0,0)}function kNa(a,b){var c=a.A;b.x=Aj(b.x,c[G],c[cd]);b.y=Aj(b.y,c.top,c[Mc])}function lNa(a,b,c,d){var e=null,f=null,g=Yj(b.ce),k=Yj(b.Kd),l=g.tm,n=k.tm,p=d;b[Vz]&&b[Vz]!==Tg?(n=-n,k[H]===Qh&&(p=b.Da[d][$]),f=k[mc].Ee(p)):(g[H]===Qh&&(p=b.Da[d][$]),e=g[mc].Ee(p));a=a.ds.Ha[yc];c.x=null===e?c.x:e;c.y=null===f?c.y:f;e=c.x-l*a;f=c.y+n*a;return new Kk(e,f)}
function mNa(a,b){var c=DL(a.pie[Sx],QV(((b.$q?45:(b.Ud+b.pd)/2)/180-.5)*h.PI,a.pie.cd-.1,a.pie.dd-.1));return new Kk(c.x+b[uy].x,c.y+b[uy].y)}function nNa(a){var b=a[sA]?a[sA]:new Kk(0,0),c=a.I[0],d=a.ba[yc];return 270==a.Gb?new Kk(b.x+c.x+d/2,b.y+c.y):new Kk(b.x+c.x,b.y+c.y-d/2)}
function oNa(a,b,c){c=vU(a,b,c);var d=a.l[b];b=d[H];c=d.k[c].V;if(b==BD||b==CJ||b==cE){var e=c.Rq||c[kA]||c;c=e[G];b=e[r];var d=c+b,f=e.top,e=e[A],g=f+e,k=wW(a);a=a[Vz]==Tg?g>k.y?new Kk(c+b/2,g-.1):new Kk(c+b/2,f+.1):c<k.x?new Kk(c+.1,f+e/2):new Kk(d-.1,f+e/2)}else a=new Kk(c.x,c.y);return a}
function yW(a,b,c,d,e,f){if(null===c||null===d||null===e)if(null===c||null===d)if(null!==c&&null===d){d=b.Mb;f=d.l[c];e=hNa(d,f);f=mNa(d,f);var g=d.l[c].de;g.ql&&g.ki?a=zW(a,g[zb],f):(b=a.ds.D9(b,c),a=NP(b,d.$c,!0,e,a.Om,f,void 0,d.pr,d.Kt))}else if(null!==c||null===d||null===e)null===c&&null!==d?(c=b.Mb,e=f[Bc](),f=lNa(a,c,e,d),e=a.Dx?Ok(f,a.Dx):e,(g=c.Da[d].de)&&g.ql&&g.ki?a=zW(a,g[zb],e):(b=a.ds.B9(b,d),a=null===b?null:NP(b,c.$c,!1,f,a.Om,e,void 0,c.pr,c.Kt))):a=null;else{c=b.Mb;var g=c.Da[d].Uc[gA][e],
k=g.de;k?(f=iNa(g),g=nNa(g),k.ql&&k.ki?a=zW(a,k[zb],g):(k=a.ds,d={entries:[LP(b.Mb.Da[d].Uc[gA][e].de[zb],k.Ha)]},0<b.vk[J]&&k.qu(d,b.vk),a=NP(d,c.$c,!1,f,a.Om,g,void 0,c.pr,c.Kt))):a=null}else e=b.Mb,f=jNa(e,c,d),g=a.Dx?Ok(f,a.Dx):oNa(e,c,d),k=e.l[c].k[d].de,k.ql&&k.ki?a=zW(a,k[zb],g):(b=a.ds.C9(b,c,d),a=NP(b,e.$c,!0,f,a.Om,g,void 0,e.pr,e.Kt));else{f=b.Mb;var k=f.l[c].k[d].Uc[gA][e],l=k.de;l?(g=iNa(k),k=nNa(k),l.ql&&l.ki?a=zW(a,l[zb],k):(l=a.ds,d={entries:[LP(b.Mb.l[c].k[d].Uc[gA][e].de[zb],l.Ha)]},
l.qu(d,b.vk),a=NP(d,f.$c,!1,g,a.Om,k,void 0,f.pr,f.Kt))):a=null}return a}function pNa(a,b,c,d){var e=b.Mb,f=b.Mb.l[d];d=hNa(e,f);var f=mNa(e,f),g=Ti(c,function(a){return e.l[a].de});Vi(g,function(a){return a.ql&&a.ki});b=eNa(a.ds,b,c);return NP(b,e.$c,!0,d,a.Om,f,void 0,e.pr,e.Kt)}
function qNa(a,b,c,d,e){var f=b.Mb,g=jNa(f,d.pb,d.nb);d=oNa(f,d.pb,d.nb);var k=Ti(c,function(a){var b=vU(f,a.pb,a.nb);return f.l[a.pb].k[b].de});Vi(k,function(a){return a.ql&&a.ki});b=dNa(a.ds,b,c,e);return NP(b,f.$c,!0,g,a.Om,d,void 0,f.pr,f.Kt)}

    function rNa(a, b, c, d, e) {
        var f = b.Mb;
        d = d[Bc]();
        var g = lNa(a, f, d, c[c[J] - 1]);
        d = a.Dx ? Ok(g, a.Dx) : d;
        var k = Ti(c, function (a) {
            return f.Da[a].de
        });
        Vi(k, function (a) {
            return a && a.ql && a.ki
        });
        var l = [];
        Z(c, function (a) {
            Z(f.l, function (b, c) {
                l[C]({pb: c, nb: a})
            })
        });
        b = dNa(a.ds, b, l, e);
        return null === b ? null : NP(b, f.$c, !1, g, a.Om, d, void 0, f.pr, f.Kt)
    }

    function zW(a, b, c) {
        return {html: {content: b, Sc: {className: VF}}, Fea: !0, Gea: c, anchor: c, Eea: a.Om, $A: 20, margin: 5}
    }

    function AW(a, b, c, d, e, f) {
        this.se = f;
        d == iF || this.se ? null != this.se && this.se[Kz](a, c) : this.se = new nW(a, c);
        c = d == iF ? new vW(a, c, e) : new sW(a, c, e, this.se);
        this.Tn = new fNa(a, c, b)
    }

    function BW(a, b, c) {
        var d = {};
        if (null != c.Ca.GC) {
            d.Ca = d.Ca || {};
            var e = b.Ca, f = c.Ca.GC;
            d.Ca.Ot = e.fg[f];
            var g = f + 1 + jr + e.fg[J], k = e.LH.iZ, l = 0 < f, e = e.LH.gZ, f = f < b.Ca.fg[J] - 1;
            d.Ca.LH = {
                iZ: {brush: l ? k.pe.Bu : k.pe.DP, Bu: l},
                gZ: {brush: f ? e.pe.Bu : e.pe.DP, Bu: f},
                hZ: {text: g, I: {0: {text: g}}}
            }
        }
        a.Bs(b, c, d);
        return d
    }

    AW[K].dj = function (a) {
        this.se && $Ma(this.se, a)
    };
    AW[K].oh = function (a) {
        if (this.se)return this.se.oh(a)
    };
    AW[K].cj = function (a) {
        if (this.se) {
            var b = this.se;
            a in b.xv && delete b.xv[a];
            a in b.Ov && delete b.Ov[a];
            a = Qi(b.mE, a);
            0 <= a && b.mE[le](a, 1)
        }
    };
    function CW(a) {
        ww(this, new zO);
        this.Sa = {pb: null, datum: null, nb: null};
        dx(this, {Sa: null, $L: null});
        this.Ca = {Sa: {Gh: null}, GC: null};
        this.Uh = {Sa: {Xw: null}};
        Lw(this, {position: null, uX: null});
        this.fi = this.Qn = null;
        a && (this[Yx][qy](a[Yx]), a.Sa && (this.Sa = DW(this.Sa, a.Sa)), a[Cz] && dx(this, DW(this[Cz], a[Cz])), a.Ca && (this.Ca = DW(this.Ca, a.Ca)), a.Uh && (this.Uh = DW(this.Uh, a.Uh)), a.Qn && (this.Qn = DW(this.Qn, a.Qn)), a.fi && DW(this.fi, a.fi))
    }

    Ia(CW[K], function () {
        var a = new CW;
        ww(a, this[Yx][Bc]());
        a.Sa = An(this.Sa);
        dx(a, An(this[Cz]));
        a.Ca = An(this.Ca);
        a.Uh = An(this.Uh);
        Lw(a, An(this[Oy]));
        a.Qn = An(this.Qn);
        a.fi = An(this.fi);
        return a
    });
    $a(CW[K], function (a, b) {
        var c = ci(b) ? b : !1;
        return this[Yx][Mz](a[Yx]) && zn(this.Sa, a.Sa) && zn(this[Cz], a[Cz]) && zn(this.Ca, a.Ca) && zn(this.Uh, a.Uh) && (c || zn(this[Oy], a[Oy])) && zn(this.Qn, a.Qn) && zn(this.fi, a.fi)
    });
    function DW(a, b) {
        var c = new nQ(2);
        oQ(c, 0, a);
        oQ(c, 1, b);
        return c[tz]()
    }

    function EW() {
    }

    Y(EW, uU);
    W = EW[K];
    W.dQ = function (a) {
        var b = a.pb, c = a.nb;
        return this.mw ? EW.e.dQ[L](this, a) : this.l[b].Sc.histogramBucketItems[c][Wc].hw
    };
    W.e_ = function (a) {
        return this.mw ? EW.e.e_[L](this, a) : this.l[a.pb].Sc.histogramBucketItems[a.nb].Wa
    };
    W.WX = function (a) {
        if (this.mw)return EW.e.WX[L](this, a);
        a = this.l[a.pb].Sc.histogramBucketItems[a.nb];
        return {Wa: a.Wa, zc: a.zc}
    };
    W.UN = function (a) {
        var b = this.Pq[a.zc].uc;
        return null != b ? this.mw ? EW.e.UN[L](this, a) : {
            pb: b,
            nb: this.l[b].Sc.histogramElementIndexes[a.Wa]
        } : null
    };
    W.IG = function (a, b) {
        var c = this.l[a], d = c.k[b];
        return this.mw ? {I: [{title: Poa, value: d.Vf.hl - d.Vf.tk}]} : c.Sc.histogramBucketItems[b][Wc]
    };
    function FW(a, b, c, d, e) {
        SV[L](this, a, b, c, d, e)
    }

    Y(FW, SV);
    FW[K].e7 = function () {
        return new EW
    };
FW[K].d7=function(){for(var a=this.nA,b=a.D(0)===Eh,c=b?1:0,d=[],e=a.M(),f=a.H(),g=0;g<e;g++)for(var k=c;k<f;k++){var l=a[I](g,k);qi(l)&&!na(l)||null===l&&!this.N.xj||d[C](l||0)}var g=Mn(this[Eq],uva),n=Mn(this[Eq],vva),k=Mn(this[Eq],xva),l=Mn(this[Eq],wva),p=In(this[Eq],yva),s=new pKa;s[sq](d,n,g,k,l);g=g||s.Ym;n=[];l=sKa(s);d=new fp;d.Gg(T,FG);for(g=c;g<f;g++)for(k=a.Ra(g)+Xka,d.Gg(T,k),n[g-c]=[],k=0;k<l[J];k++)n[g-c][C]([]);a=tKa(s);for(g=0;g<l[J];g++)d.Sq(),d.Fa(g,0,a[g]);for(g=0;g<e;g++)for(a=
b?this.nA[I](g,0):O,k=c;k<f;k++)if(l=this.nA[I](g,k),!(qi(l)&&!na(l)||null===l&&!this.N.xj)){var u=0==s.Ym||l<s.aq?0:l>=s.rY?s.JH:h[t]((l-s.aq)/s.Ym)+s.gs,v=k+1-c;d.Fa(u,v,(d[I](u,v)||0)+1);v=this.nA.Ra(k)||YC;n[k-c][u][C]({Wa:g,zc:k,label:{title:a,hw:a,Cm:v,content:l[kc](),I:[{title:v,value:l||0}]}})}for(var z=[],k=c;k<f;k++)z[k]=[];for(k=c;k<f;k++)b=vj(n[k-c]),p&&b[ce](function(a,b){var c=a[Wc].I[0][od],d=b[Wc].I[0][od];return c<d?-1:c>d?1:0}),d.Kw(k-c,zva,b),Z(b,function(a,b){z[a.zc][a.Wa]=b});
    for (k = c; k < f; k++)d.Kw(k - c, Bva, z[k]);
    c = tKa(s);
    d.Kw(0, Ava, c);
    this.Ub = new Mu(d)
};
    function xMa(a, b) {
        return 4 > a || b
    }

    function wMa(a, b, c) {
        for (var d = [], e = 0; e < b.Da[J]; e++) {
            d[e] = [];
            for (var f = 0; f < b.l[J]; f++) {
                var g = b.l[f];
                if (g[H] == BD) {
                    var k = a ? 0 : f;
                    d[e][k] = (d[e][k] || 0) + c[I](e, g.ga[$][0])
                }
            }
        }
        for (e = a = 0; e < d[J]; e++)for (f = 0; f < d[e][J]; f++)a = h.max(d[e][f], a);
        return a
    }

    function GW(a, b, c, d, e, f, g) {
        AW[L](this, a, b, c, d, e, g);
        this.iP = ao(a, Wsa, ofa);
        this.qka = $n(a, [Vsa, Ssa], pfa, xg);
        this.Tka = $n(a, [Qsa, Ssa], pfa, xg);
        this.oka = Yn(a, [Tsa, Nsa]);
        this.Rka = Yn(a, [Osa, Nsa]);
        this.pka = Rn(a, [Usa, Rsa], 1);
        this.Ska = Rn(a, [Psa, Rsa], 1);
        this.fY = $n(a, Dqa, QIa, Q);
        this.qM = !0
    }

    Y(GW, AW);
    GW[K].Bs = function (a, b, c) {
        this.qM = !0;
        switch (a.Cz) {
            case bF:
                this.s4(a, b, c);
                break;
            case iF:
                sNa(this, a, b, c)
        }
    };
    GW[K].l5 = function (a, b) {
        return a[Mz](b, this.qM)
    };
    function tNa(a) {
        return Vi(a.l, function (a) {
            return a.Wg
        })
    }

    function HW(a, b, c) {
        a.l = a.l || {};
        a = a.l;
        a[b] = a[b] || {};
        b = a[b];
        b.k = b.k || {};
        b = b.k;
        b[c] = b[c] || {};
        return b[c]
    }

    function IW(a, b, c) {
        if (null != b)return a = HW(a, b, c), a.Uc = a.Uc || {}, a.Uc;
        a = JW(a, c);
        a.Uc = a.Uc || {};
        return a.Uc
    }

    function KW(a, b) {
        a.l = a.l || {};
        var c = a.l;
        c[b] = c[b] || {};
        return c[b]
    }

    function JW(a, b) {
        a.Da = a.Da || {};
        var c = a.Da;
        c[b] = c[b] || {};
        return c[b]
    }

    function LW(a, b) {
        a.Ca = a.Ca || {};
        var c = a.Ca;
        c.Ot = c.Ot || {};
        c = c.Ot;
        c[b] = c[b] || {};
        return c[b]
    }
GW[K].s4=function(a,b,c){var d={Mb:a,vk:this.se.getEntries(),Gt:c,Ak:b.Uh},e=b.Uh.Sa.Xw;null!=e&&Xw(b.Uh.Sa,this.se.oh(e)[oz]);for(var e=this.Tn.qV,f=e==zh||e==xg,e=e==Kg||e==xg,g=this.fY!=Q,k=this.se&&0<d.vk[J],l=JO(b[Yx]),n=1<l[J]&&(g||k),p=0;p<l[J];++p){var s=l[p],u=s.column,v=s.row,z=a.Pq[u],s=z.uc;if(v=a.UN({zc:u,Wa:v}))switch(z.zw){case ks:MW(this,a,v.pb,v.nb,c);f&&!n&&NW(this,d,v.pb,v.nb);break;case oD:if(null!=s?!a.l[s].Wg:!a.Wg)break;s=z.Zz;uNa(v.pb,v.nb,s,c);f&&OW(this,d,v.pb,v.nb,s)}}f&&
n&&!a.mw&&(p=Si(Ti(l,function(b){return a.UN({zc:b.column,Wa:b.row})}),ji),0<p[J]&&vNa(this,d,g?p:[],p[p[J]-1]));l=AO(b[Yx],zg);for(p=0;p<l[J];++p)u=l[p],z=a.Pq[u],null!=z&&(s=z.uc,null!=s&&wNa(this,a,s,c));l=a.kb===WD;n=IO(b[Yx]);g=1<n[J]&&(g||k);for(p=0;p<n[J];++p)v=n[p],k=a.Nq[v],l?(s=0,MW(this,a,s,k,c),f&&!g&&NW(this,d,s,k)):(xNa(this,a,k,c),f&&!g&&yNa(this,d,b[Oy].uX,k));g&&(l?NW(this,d,0,a.Nq[n[n[J]-1]]):f&&(f=Ti(n,function(b){return a.Nq[b]}),0<f[J]&&zNa(this,d,b[Oy].uX,f)));f=b.Sa.pb;p=b.Sa[ty];
null!=p?a.l[f].Wg&&(PW(this,a,f,p,c),e&&NW(this,d,f,p),ANa(a,f,p,c)):null!=f&&a.l[f].Wg&&QW(this,a,f,c);f=b.Ca.Sa.Gh;null!=f&&a.l[f].Wg&&QW(this,a,f,c);f=b.Sa.nb;null!=f&&a.Da[f]&&(BNa(this,a,f,c),e&&tNa(d.Mb)&&(yNa(this,d,b[Oy][mc],f),this.qM=!1));if(f=b[Cz].$L)f=IW(c,f.uc,f.pV),f.bundle=f.bundle||{},f.bundle.$U=!0;(f=b[Cz].Sa)&&e&&(p=a.Pq[f.zc],e=p.uc,f=a.Nq[f.Wa],p=p.Zz,(null!=e?a.l[e].Wg:a.Wg)&&OW(this,d,e,f,p));if(b=b.fi)c.fi=b};var CNa=[.25,.1,.05],DNa=[.3,.1,.05],ENa=[.3,.15,.05];
function PW(a,b,c,d,e){var f=b.l[c],g=f.k[d];if(g&&!g.Qe&&g.V&&(!CU(f)||0!=f[uz]||DU(g,f))){var k=f[H]==BD?ENa:CNa;e=HW(e,c,d);e.Ln={};c=e.Ln;c.Ie=[];for(d=0;d<k[J];d++){var l=new bn({fill:Q,stroke:JD,Xg:k[d],ua:1});c.Ie[C]({brush:l})}switch(f[H]){case BD:case CJ:case cE:a=g.V.Rq||g.V[kA]||g.V;b=new Il(a[G],a.top,a[r],a[A]);for(d=0;d<k[J];d++)a=c.Ie[d].brush.Nb,yx(c.Ie[d],new Il(b[G]-a/2,b.top-a/2,b[r]+a,b[A]+a)),Za(b,b[G]-a),b.top-=a,pa(b,b[r]+2*a),Sa(b,b[A]+2*a);break;case SG:case sD:case ZI:case XD:rx(e,
!0);c.x=g.V.x;c.y=g.V.y;if(a.iP===xg||a.iP===Kg)d=AU(g,f),d=sn(a.Rka||d.cb(),1,!1,a.Ska),FNa(b,g,e,d,a.Tka);e.Ji?(a=e.Ji,b=a[Lz]+a.brush.Nb/2):b=EU(g,f);for(d=0;d<k[J];d++)a=c.Ie[d].brush.Nb,lx(c.Ie[d],b+a/2),b+=a}}}
function QW(a,b,c,d){var e=b.l[c],f;if(CU(e)&&0<e[uz]){f=KW(d,c);f.Ln={};f=f.Ln;f.Ie=[];var g;g=e[H]==sD?b.Td?GU(e):FU(e,!1):FU(e,b.xj);g=FCa(g);for(var k=e.Lc.Nb/2,l=0;l<DNa[J];l++){var n=new bn({fill:Q,stroke:JD,Xg:DNa[l],ua:1}),p=GCa(g,k+n.Nb/2);f.Ie[C]({brush:n,path:p});k+=n.Nb}}f=(f=(f=d.l)&&f[c])&&f.k;for(g=0;g<e.k[J];++g)k=e.k[g],!k||k.Qe||(DU(k,e)||f&&f[g]&&f[g][Yz])&&PW(a,b,c,g,d);b.jd&&e[H]===ZI&&!a.iG(e.ga)&&QW(a,b,c-1,d)}GW[K].iG=function(a){a=a[bI];return null!=a&&0<a[J]};
function BNa(a,b,c,d){for(var e=b.l,f=0;f<e[J];++f){var g=vU(b,f,c);b.l[f].Wg&&null!=g&&PW(a,b,f,g,d)}}
function MW(a,b,c,d,e){var f=b.l[c],g=f.k[d];if(g&&!g.Qe&&g.V&&(!CU(f)||0!=f[uz]||DU(g,f))){var k=AU(g,f);c=HW(e,c,d);c.Ji={};d=c.Ji;var l=b.KL;e=1;null==l&&(l=Uh,e=0);switch(f[H]){case BD:case CJ:case cE:e=1;d.brush=qn[Bc]();d.brush.hd(l);f[H]==cE&&(a=Hm(Cm(k.cb()).od),b=Hm(Cm(l).od),f=Hm(Cm(g.Pz.cb()).od),d.brush.hd(Fm(Om(f,[a,b]))));cn(d.brush,e);d.brush.mk(1);g=g.V.Rq||g.V[kA]||g.V;k=k.Nb;a=d.brush.Nb;yx(d,new Il(g[G]+k/2+1.5+a/2,g.top+k/2+1.5+a/2,g[r]-(k+3+a),g[A]-(k+3+a)));(0>=d[kA][r]||0>=
d[kA][A])&&delete c.Ji;break;case SG:case sD:case ZI:case XD:rx(c,!0);d.x=g.V.x;d.y=g.V.y;if(a.iP===xg||a.iP===zh){var n=sn(a.oka||k.cb(),1,!1,a.pka);FNa(b,g,c,n,a.qka)}d.brush=new bn({fill:l,Ce:e,stroke:k.cb(),ua:1});lx(d,EU(g,f)+1.5+d.brush.Nb/2)}}}
function FNa(a,b,c,d,e){c=c.M7||(c.M7={});c.x=b.V.x;c.y=b.V.y;c.brush=d;b=new Kk(a.A[G],c.y);d=new Kk(a.A[cd],c.y);var f=new Kk(c.x,a.A.top);a=new Kk(c.x,a.A[Mc]);c.path=c[Qz]||new pL;if(e===xg||e===Rh)for(f=sL([f,a]),a=0;a<f.md[J]-1;a++)c[Qz].Tj(f.md[a]);if(e===xg||e===Tg)for(e=sL([b,d]),a=0;a<e.md[J]-1;a++)c[Qz].Tj(e.md[a]);c[Qz][bz]()}
function wNa(a,b,c,d){var e=b.l[c];if((e[H]==SG||e[H]==sD||e[H]==ZI)&&0<e[uz]){var f=KW(d,c);f.Ji={};var f=f.Ji,g;g=e[H]==sD?b.Td?GU(e):FU(e,!1):FU(e,b.xj);g=FCa(g);f.brush=new bn({stroke:e.Lc.re,ua:h.min(1,e.Lc.Nb/2)});f.path=GCa(g,-(e.Lc.Nb/2+2+f.brush.Nb/2))}for(f=0;f<e.k[J];++f)g=e.k[f],!g||g.Qe||(DU(g,e)||MJa(e,f)&&!b.xj)&&MW(a,b,c,f,d);b.jd&&e[H]===ZI&&!a.iG(e.ga)&&wNa(a,b,c-1,d)}function xNa(a,b,c,d){for(var e=b.l,f=0;f<e[J];++f){var g=vU(b,f,c);null!=g&&MW(a,b,f,g,d)}}
function GNa(a,b,c,d){c=HW(b.Gt,c.pb,c.nb);var e=null!=b.Ak;c.sb=d;e&&a.se.Bs(d,b.Ak,c.sb)}function NW(a,b,c,d){var e=yW(a.Tn,b,c,d,null);GNa(a,b,{pb:c,nb:d},e)}function vNa(a,b,c,d){c=qNa(a.Tn,b,c,d,a.fY);GNa(a,b,d,c)}function zNa(a,b,c,d){if(c){c=rNa(a.Tn,b,d,c,a.fY);d=JW(b.Gt,d[d[J]-1]);var e=null!=b.Ak;d.sb=c;e&&a.se.Bs(c,b.Ak,d.sb)}}function yNa(a,b,c,d){if(c){var e=JW(b.Gt,d),f=null!=b.Ak;c=yW(a.Tn,b,null,d,null,c);null!==c&&(e.sb=c,f&&a.se.Bs(c,b.Ak,e.sb))}}
function OW(a,b,c,d,e){var f=IW(b.Gt,c,d);wx(f,f[gA]||{});f=f[gA];f[e]=f[e]||{};var f=f[e],g=null!=b.Ak;c=yW(a.Tn,b,c,d,e);f.ha=c;g&&c&&a.se.Bs(c,b.Ak,f.ha)}function ANa(a,b,c,d){if(a.Ei){var e=a.Ei;a=BS(e[mz],e.QH,[{value:a.l[b].k[c].Vf[F]}],a.$c);d.Ei={definition:a}}}function uNa(a,b,c,d){a=IW(d,a,b);wx(a,a[gA]||{});a=a[gA];a[c]=a[c]||{};c=a[c];c.ba=c.ba||{};jb(c.ba,!0)}
function sNa(a,b,c,d){var e={Mb:b,vk:[],Gt:d,Ak:null},f=c.Sa.pb,g=c.Sa[ty];b.Ca&&gNa(a.Tn,new Fl(0,b.Ca.area[G],b[A],0));var k=a.Tn.qV;if(null!=f&&null==g){for(var l=c[Oy][mc].x,n=b.l[f].k,g=Si(n,function(a){return null!=a}),p=0;p<g[J]&&g[p].V.x<l;)p++;0==p?g=0:p==g[J]?g=g[J]-1:(l=l<Jj(g[p-1].V.x,g[p].V.x)?p-1:p,g=Qi(n,g[l]));a.qM=!1}n=null;if(null!=g)for(n=HW(d,f,g),rx(n,!0),k==Kg&&NW(a,e,f,g),b.Ca&&(n=LW(d,f),n.Eg={R:b.X4}),n=0;n<b.l[J];n++)n!=f&&(b.Ca&&(g=LW(d,n),g.Aa={ba:{color:dB}}),g=KW(d,n),
l=b.l[n],g.Lc=l.Lc[Bc](),cn(g.Lc,.3));if(f=c[Cz].$L)f=IW(d,f.uc,f.pV),f.bundle=f.bundle||{},f.bundle.$U=!0;if(g=c[Cz].Sa)n=b.Pq[g.zc],f=n.uc,g=b.Nq[g.Wa],n=n.Zz,(null!=f?b.l[f].Wg:b.Wg)&&OW(a,e,f,g,n);if(b.Ca&&b.Ca[mc]==HG&&null!=c.Ca.Sa.Gh){c=c.Ca.Sa.Gh;n=LW(d,c);n.Eg={R:b.X4};for(var f=b.l[c].k,s,n=f[J]-1;0<=n;n--)if((g=f[n])&&!g.Qe&&g.V&&(new Fl(b.A.top,b.A[cd],b.A[Mc],b.A[G]))[Rc](new Kk(g.V.x,g.V.y))){s=n;break}null!=s&&(n=HW(d,c,s),rx(n,!0),k==Kg&&NW(a,e,c,s));for(n=0;n<b.l[J];n++)n!=c&&(g=
    LW(d, n), g.Aa = {ba: {color: dB}}, g = KW(d, n), l = b.l[n], g.Lc = l.Lc[Bc](), cn(g.Lc, .3))
}
}

    function HNa(a, b) {
        this.Cr = a;
        this.Tw = b;
        this.Oj = gk(a);
        var c = a[r] != b[r] || a[A] != b[A];
        !c && a.A && b.A && (c = a.A[r] != b.A[r] || a.A[A] != b.A[A] || a.A[G] != b.A[G] || a.A.top != b.A.top);
        this.Oj[fA] && c && nb(this.Oj[fA].ba, 0);
        this.Oj.ce && (this.Oj.ce = Vj(this.Oj.ce, gk), this.Nia = Vj(a.ce, function (d, e) {
            return INa(a.ce[e], b.ce[e], this.Oj.ce[e], !0, !1, c)
        }, this));
        this.Oj.Kd && (this.Oj.Kd = Vj(this.Oj.Kd, gk), this.Oia = Vj(a.Kd, function (d, e) {
            return INa(a.Kd[e], b.Kd[e], this.Oj.Kd[e], !1, !0, c)
        }, this));
        this.co = this.Jk = null;
        JNa(this);
        this.w7 =
            this.v7 = null;
        KNa(this)
    }
function INa(a,b,c,d,e,f){if(!a||!b)return null;var g=gk(a),k=gk(a);k.Jj=b.Jj;k.Te=b.Te;k.ef=b.ef;c[fA]&&f&&nb(c[fA].ba,0);if(a[H]==Qh&&b[H]==Qh&&a[ez]===b[ez]){a.Eb&&b.Eb&&(k.Eb=b.Eb,c.Eb=gk(c.Eb));k.Xd=gk(k.Xd);Ba(k,gk(k[mc]));c.Xd=gk(c.Xd);Ba(c,gk(c[mc]));k[mc].Ee=b[mc].Ee;if(a.Ia&&b.Ia){k.Ia=gj(k.Ia);c.Ia=gj(c.Ia);var l=k.Ia,n=c.Ia;for(f=0;f<l[J];f++){l[f]=gk(l[f]);n[f]=gk(n[f]);var p=l[f],s=a.Xd.Ee(p.ta),s=b.Xd.rk(s);p.X=b[mc].Ee(s)}}if(a.Th&&b.Th)for(k.Th=gj(k.Th),c.Th=gj(c.Th),l=k.Th,n=c.Th,
f=0;f<l[J];f++)l[f]=gk(l[f]),n[f]=gk(n[f]),p=l[f],s=a.Xd.Ee(p.ta),s=b.Xd.rk(s),p.X=b[mc].Ee(s);if(a[id]&&b[id])for(cx(k,gj(k[id])),cx(c,gj(c[id])),s=k[id],c=c[id],RW(s),RW(c),f=0;f<s[J];f++)LNa(a,b,a[id][f],b[id][f],s[f],d,e)}else if(a[id]&&b[id]){var u=NFa(a[id],b[id],function(a,b){return a.ta==b.ta});cx(g,Si(a[id],function(a,b){return null!=u.O8[b]}));cx(k,Si(b[id],function(a,b){return null!=u.P8[b]}));cx(c,gj(g[id]));RW(g[id]);RW(k[id]);RW(c[id])}return[g,k]}
function LNa(a,b,c,d,e,f,g){var k=e.Aa,l=a.Xd.Ee(e.ta),l=b.Xd.rk(l);a=a[mc].Ee(e.ta);b=b[mc].Ee(l);f&&(f=c.Aa[sA].x-a,k[sA].x=b+f,d&&(k[sA].y=d.Aa[sA].y));g&&(f=c.Aa[sA].y-a,k[sA].y=b+f,d&&(k[sA].x=d.Aa[sA].x))}function RW(a){Z(a,function(b,c){a[c]=gk(a[c]);b=a[c];b.Aa=gk(b.Aa);var d=b.Aa;if(d[sA]){var e=d[sA];Ex(d,new RR(e.x,e.y))}})}
function JNa(a){var b=a.Cr,c=a.Tw;if(b.l&&c.l){var d=NFa(b.l,c.l,function(a,b){return a.id==b.id});a.Jk=Si(b.l,function(a,b){return null!=d.O8[b]});a.co=Si(c.l,function(a,b){return null!=d.P8[b]});b.kb==Mg||b.kb==ZI?(b=b[Vz]==Tg?b.ce[0]:b.Kd[0],c=c[Vz]==Tg?c.ce[0]:c.Kd[0],b[H]==Qh&&c[H]==Qh&&b[ez]===c[ez]?MNa(a,b.Xd.Ee,b.Xd.rk):NNa(a)):b.kb==WD&&ONa(a)}}
function NNa(a){var b=a.Cr.Da,c=a.Tw.Da;if(b&&c){var d={},e={},f={},g={};Z(b,function(a,b){null!=a[$]&&(f[a[$]]=b)});Z(c,function(a,b){null!=a[$]&&(g[a[$]]=b)});Z(b,function(a,b){null!=a[$]&&(d[b]=g[a[$]])});Z(c,function(a,b){if(null!=a[$]){var c=f[a[$]];d[c]!==b&&(c=null);e[b]=c}});Z(b,function(a,b){null!=a[$]&&e[g[a[$]]]!==b&&(d[b]=null)});for(var k=0,l=0,n=[],p=[];k<b[J]||l<c[J];)k<b[J]&&null==d[k]?(p[C]({Yx:{si:k,ez:!0},Zx:{si:l,ez:!1}}),n[C]({data:b[k][$]}),k++):(l<c[J]&&null==e[l]?(p[C]({Yx:{si:k,
ez:!1},Zx:{si:l,ez:!0}}),n[C]({data:c[l][$]})):(p[C]({Yx:{si:k,ez:!0},Zx:{si:l,ez:!0}}),n[C]({data:b[k][$]}),k++),l++);a.Oj.Da=n;var s=function(a,b){return 0==b?a[0]:b>=a[J]?Oi(a):SW(a[b-1],a[b],.5)};a.Cr.jd?PNa(a,p,function(a,b,c,d){return b.ez?a[b.si*c+d]:s(a,b.si*c+d)}):TW(a,p,function(a,b){return b.ez?a[b.si]:s(a,b.si)})}}
function MNa(a,b,c){var d=a.Cr.Da,e=a.Tw.Da;if(d&&e)if(0==d[J]||0==e[J])a.Oj.Da=[],TW(a,[],function(){return null});else{var f=function(a){return b(a[$])},g=[],k=[];if(d[J]===e[J])for(var l=0;l<d[J];l++)k[C]({Yx:l,Zx:l}),g[C]({data:c(Jj(f(d[l]),f(e[l])))});else l=OFa(d,e,f),Z(l,function(a){var b=a.cE;a=a.dE;var l;null!=d[b]&&null!=e[a]&&(l=c(Jj(f(d[b]),f(e[a]))));null!=l&&(k[C]({Yx:b,Zx:a}),g[C]({data:l}))});a.Oj.Da=g;a.Cr.jd?PNa(a,k,function(a,b,c,d){return a[b*c+d]}):TW(a,k,function(a,b){return a[b]})}}
function ONa(a){function b(a){a=gk(a);a.V=gk(a.V);a.V.brush=a.V.brush[Bc]();a.V.brush.Ch(0);cn(a.V.brush,0);a.ba=gk(a.ba);nb(a.ba,0);return a}var c=a.Jk[0].k,d=a.co[0].k,e=[],f=[],g=[],k={};Z(d,function(a,b){null!=a&&(ci(k[a.id])||(k[a.id]=[]),k[a.id][C](b))});Sj(c,function(a,b){if(null!=a){var c=a.id&&k[a.id],c=c&&c[sb]();ci(c)?g[C]({Yx:b,Zx:c}):e[C](a)}});Sj(k,function(a){Z(a,function(a){f[C](d[a])})});TW(a,g,function(a,b){return a[b]});var c=Ti(e,b),l=Ti(f,b);a.Jk[0].xB=fj(e,l);a.co[0].xB=fj(c,
f)}function TW(a,b,c){for(var d=0;d<a.Jk[J];d++){for(var e=a.Jk[d].k,f=a.co[d].k,g=[],k=[],l=0;l<b[J];l++){var n=b[l],p=c(e,n.Yx),n=c(f,n.Zx);p&&!p.Qe&&n&&!n.Qe&&(g[C](p),k[C](n))}a.Jk[d]=UW(a.Jk[d],g);a.co[d]=UW(a.co[d],k)}}
function PNa(a,b,c){for(var d=0;d<a.Jk[J];d++){var e=a.Jk[d].k,f=a.co[d].k,g=[],k=[];if(0<b[J])for(var l=h[yb](e[J]/b[J]),n=h[yb](f[J]/b[J]),p=0;p<b[J];p++){for(var s=b[p],u=0;u<l;u++){var v=c(e,s.Yx,l,u);v&&!v.Qe&&g[C](v)}for(u=0;u<n;u++)(v=c(f,s.Zx,n,u))&&!v.Qe&&k[C](v)}a.Jk[d]=UW(a.Jk[d],g);a.co[d]=UW(a.co[d],k)}}function UW(a,b){var c=gk(a);c.k=b;return c}function KNa(a){var b=a.Cr,c=a.Tw;b.Ca&&b.Ca.fg&&c.Ca&&c.Ca.fg&&(a.Oj.Ca=null)}
function VW(a,b,c){if(a!==b)if(a&&a[uc]==bn&&b&&b[uc]==bn)a=new bn({fill:Xm(a.cb(),b.cb(),1-c),Ce:VW(a.Pe,b.Pe,c),stroke:Xm(a.re,b.re,1-c),ua:VW(a.Nb,b.Nb,c),Xg:VW(a.qi,b.qi,c),cQ:a.nl,Eh:a.Hg,pattern:a.vd});else if(ki(a)&&ki(b))if(a){if(b){for(var d=[],e=h.min(a[J],b[J]),f=0;f<e;f++)d[C](VW(a[f],b[f],c));a=d}}else a=b;else a=ni(a)||ni(b)?QNa(a,b,c):oi(a)||oi(b)?a:qi(a)&&qi(b)?a*(1-c)+b*c:null;return a}
function QNa(a,b,c){if(!a)return b;if(!b)return a;var d={};Sj(a,function(e,f){ci(b[f])&&(d[f]=VW(a[f],b[f],c))});return d}function RNa(a,b,c,d,e){b=!e||(c?b>=c.top&&b<=c[Mc]:!1);return(!d||(c?a>=c[G]&&a<=c[cd]:!1))&&b}
function SNa(a,b,c,d,e){a[mc]&&a[mc].Ee&&b[mc]&&b[mc].Ee&&(c[mc].Ee=function(c){var d=a[mc].Ee(c);c=b[mc].Ee(c);return VW(d,c,e)});a[fA]&&b[fA]&&Z(c[fA].I,function(c,d){c.x=VW(a[fA].I[d].x,b[fA].I[d].x,e);c.y=VW(a[fA].I[d].y,b[fA].I[d].y,e)});a.Eb&&b.Eb&&(c.Eb.X=VW(a.Eb.X,b.Eb.X,e));a.Ia&&b.Ia&&Z(c.Ia,function(c,g){c.X=VW(a.Ia[g].X,b.Ia[g].X,e);c.R=d(c.X,c.X)});a.Th&&b.Th&&Z(c.Th,function(c,g){c.X=VW(a.Th[g].X,b.Th[g].X,e);c.R=d(c.X,c.X)});a.Jj&&b.Jj&&(c.Jj=QNa(a.Jj,b.Jj,e));null!=a.Te&&null!=b.Te&&
(c.Te=VW(a.Te,b.Te,e));null!=a.ef&&null!=b.ef&&(c.ef=VW(a.ef,b.ef,e));a[id]&&b[id]&&Z(c[id],function(c,g){if(c){var k=a[id][g].Aa,l=b[id][g].Aa,n=c.Aa;n&&n[sA]&&(n[sA].x=VW(k[sA].x,l[sA].x,e),n[sA].y=VW(k[sA].y,l[sA].y,e));c.Aa&&(k=0<c.Aa.I[J],c.R=d((k?c.Aa.I[0].x:0)+c.Aa[sA].x,(k?c.Aa.I[0].y:0)+c.Aa[sA].y))}})}
function SW(a,b,c){if(!a||!b)return null;var d=gk(a);if(ci(a.V)||ci(b.V))d.V=VW(a.V||{},b.V||{},c),d.Vf=VW(a.Vf||{},b.Vf||{},c);ci(a.bs)&&ci(b.bs)&&(d.bs=VW(a.bs,b.bs,c));ci(a.cs)&&ci(b.cs)&&(d.cs=VW(a.cs,b.cs,c));ci(a.ba)&&ci(b.ba)&&a.ba!==b.ba&&(d.ba=gk(a.ba),Ya(d.ba,Xm(a.ba[F],b.ba[F],1-c)),nb(d.ba,VW(ci(a.ba[Od])?a.ba[Od]:1,ci(b.ba[Od])?b.ba[Od]:1,c)));null!=a.Uc&&null!=b.Uc&&a.Uc[gA][0][id]===b.Uc[gA][0][id]?d.Uc=VW(a.Uc,b.Uc,c):delete d.Uc;return d}
HNa[K].interpolate=function(a){var b=this.Oj;if(b.ce){var c=function(a,c){return RNa(a,c,b.A,!0,!1)};Sj(b.ce,function(b,d){var e=this.Nia[d];e&&SNa(e[0],e[1],b,c,a)},this)}if(b.Kd){var d=function(a,c){return RNa(a,c,b.A,!1,!0)};Sj(b.Kd,function(b,c){var e=this.Oia[c];e&&SNa(e[0],e[1],b,d,a)},this)}if(this.Jk&&this.co){b.l=[];for(var e=0;e<this.Jk[J];++e){var f=this.Jk[e],g=this.co[e],k=gk(g);if(f&&g&&f[H]==g[H]){if(f.k&&g.k){k.k=[];for(var l=0;l<f.k[J];l++)k.k[l]=SW(f.k[l],g.k[l],a);if(f.xB&&g.xB)for(l=
0;l<f.xB[J];l++)k.k[C](SW(f.xB[l],g.xB[l],a))}f.vf&&f.vf.Fi&&g.vf&&g.vf.Fi&&(k.vf=gk(k.vf),k.vf.Fi=VW(f.vf.Fi,g.vf.Fi,a))}b.l[e]=k}}b[A]&&Sa(b,VW(this.Cr[A],this.Tw[A],a));b[r]&&pa(b,VW(this.Cr[r],this.Tw[r],a));b.A&&(b.A=VW(this.Cr.A,this.Tw.A,a));if(this.v7&&this.w7&&b.Ca&&b.Ca.Ot)for(e=0;e<b.Ca.Ot[J];e++){f=b.Ca.Ot[e];g=this.v7[e];k=this.w7[e];if(f.Aa&&f.Aa.I&&g.Aa&&g.Aa.I&&!aj(g.Aa.I)&&k.Aa&&k.Aa.I)for(var n=f.Aa.I,p=g.Aa.I,s=k.Aa.I,u=p[J],l=0;l<n[J];l++){var v=l<u?p[l]:p[u-1];n[l].x=VW(v.x,s[l].x,
a);n[l].y=VW(v.y,s[l].y,a)}f.Wc&&f.Wc[lz]&&g.Wc&&g.Wc[lz]&&k.Wc&&k.Wc[lz]&&(l=VW(g.Wc[lz],k.Wc[lz],a),Ww(f.Wc,new Il(l[G],l.top,l[r],l[A])));f.Eg&&f.Eg[lz]&&g.Eg&&g.Eg[lz]&&k.Eg&&k.Eg[lz]&&Ww(f.Eg,VW(g.Eg[lz],k.Eg[lz],a))}return b};function WW(a){this.dz=a}
WW[K].qw=function(a,b,c,d){var e=[],f=b.Sa,g=a.Sa;if(f.pb!=g.pb||f[ty]!=g[ty])null!=g.pb&&e[C](XW(dI,g.pb,g[ty],c,d)),null!=f.pb&&e[C](XW(eI,f.pb,f[ty],c,d));f.nb!=g.nb&&(null!=g.nb&&(g=g.nb,e[C]({type:dI,data:{row:g,column:null}})),null!=f.nb&&(g=f.nb,e[C]({type:eI,data:{row:g,column:null}})));f=b[Cz].Sa;g=a[Cz].Sa;!g||f&&f.Wa==g.Wa&&f.zc==g.zc||e[C]({type:dI,data:{row:g.Wa,column:g.zc}});!f||g&&f.Wa==g.Wa&&f.zc==g.zc||e[C]({type:eI,data:{row:f.Wa,column:f.zc}});f=b.Ca.Sa;g=a.Ca.Sa;f.Gh!=g.Gh&&(null!=
g.Gh && e[C](XW(dI, g.Gh, null, c, d)), null != f.Gh && e[C](XW(eI, f.Gh, null, c, d)));
    b[Yx][Mz](a[Yx]) || e[C]({type: Ps});
    Z(e, X(function (a) {
        this[fq](a[H], a[$])
    }, this))
};
    up(WW[K], function (a, b) {
        Ju(this.dz, a, b || null)
    });
    function XW(a, b, c, d, e) {
        b = e[b];
        d == pI ? (c = b.ut, d = null) : d = b.ut;
        return {type: a, data: {row: c, column: d}}
    }

    function YW(a, b) {
        return Aj(a.x, b[G], b[G] + b[r]) === a.x && Aj(a.y, b.top, b.top + b[A]) === a.y ? !0 : !1
    }

    function TNa(a, b) {
        this.Ju = a;
        this.Iu = b
    }

    function UNa(a, b, c, d, e, f) {
        var g = a.ce[0] ? 0 : 1, k = a.Kd[0] ? 0 : 1, l = a.ce[g];
        a = a.Kd[k];
        var n = l[ez] && nU(l[ez]).ak, p = a[ez] && nU(a[ez]).ak;
        this.qs = b;
        this.wy = X(function (a) {
            return n ? n(this.qs.getHAxisValue(a, g)) : a
        }, this);
        this.xy = X(function (a) {
            return p ? p(this.qs.getVAxisValue(a, k)) : a
        }, this);
        b = this.qs.getChartAreaBoundingBox();
        this.kn = this.wy(b[G]);
        this.ln = this.xy(b.top + b[A]);
        this.Jo = this.wy(b[G] + b[r]);
        this.Ko = this.xy(b.top);
        this.QR = this.kn;
        this.RR = this.ln;
        this.uR = this.Jo - this.kn;
        this.tR = this.Ko - this.ln;
        Na(this, 1);
        this.dpa = c;
        this.z1 = d;
        this.eca = e;
        this.VR = f
    }

    function ZW(a, b, c) {
        this.Xr = c;
        this.Na = a;
        this.Nj = b;
        this.Pg = null
    }

    W = ZW[K];
    Pp(W, function () {
        return this.Na
    });
    W.Ew = function (a) {
        this.Pg = a
    };
    W.az = function () {
    };
    W.Zy = function () {
    };
    W.$y = function () {
    };
    W.nE = function () {
    };
    W.$D = function () {
    };
    W.aE = function () {
    };
    W.XD = function () {
    };
    W.WD = function () {
    };
    W.af = function () {
    };
    W.updateOptions = function () {
        var a = {hAxis: {viewWindowMode: uF, viewWindow: {}}, vAxis: {viewWindowMode: uF, viewWindow: {}}};
        this.Na.Qn = a;
        this.Xr.Ju && (fa(this.Pg.kn) || (a.hAxis.viewWindow.numericMin = this.Pg.kn), fa(this.Pg.Jo) || (a.hAxis.viewWindow.numericMax = this.Pg.Jo));
        this.Xr.Iu && (fa(this.Pg.ln) || (a.vAxis.viewWindow.numericMin = this.Pg.ln), fa(this.Pg.Ko) || (a.vAxis.viewWindow.numericMax = this.Pg.Ko))
    };
    function $W(a, b, c) {
        ZW[L](this, a, b, c);
        this.Qa = null
    }

    Y($W, ZW);
    W = $W[K];
    W.az = function (a) {
        var b = this.Nj().getChartAreaBoundingBox();
        YW(a, b) && (this.Qa = {x: a.x, y: a.y, Dd: 0, le: 0})
    };
    W.Zy = function (a) {
        if (this.Qa) {
            var b = a.x;
            a = a.y;
            this.Qa = {Dd: b - this.Qa.x, le: a - this.Qa.y, x: b, y: a};
            this.iE()
        }
    };
    W.$y = function () {
        this.Qa = null
    };
    W.af = function (a, b) {
        var c = this.Nj().getChartAreaBoundingBox();
        YW(a, c) && b()
    };
W.iE=function(){var a=this.Pg;if(a){var b=this.Nj();a.qs=b;var c=this.Xr;if(c.Ju){var b=this.Qa.x-this.Qa.Dd,d=a.wy(this.Qa.x)-a.wy(b),e=a.kn-d,f=a.Jo-d,b=h.max(e,a.QR),g=h.min(f,a.QR+a.uR);if(a.VR&&(b===e||0>d)&&(g===f||0<d)||!a.VR)a.kn=e,a.Jo=f}c.Iu&&(b=this.Qa.y-this.Qa.le,c=a.xy(this.Qa.y)-a.xy(b),d=a.ln-c,e=a.Ko-c,b=h.max(d,a.RR),g=h.min(e,a.RR+a.tR),a.VR&&(b===d||0>c)&&(g===e||0<c)||!a.VR)&&(a.ln=d,a.Ko=e);this[Kz]()}};function aX(a,b,c){ZW[L](this,a,b,c);this.Qa=null}Y(aX,ZW);W=aX[K];W.az=function(a){var b=this.Nj().getChartAreaBoundingBox();YW(a,b)&&(this.Qa={Eu:a.x,ll:a.y,C2:0,D2:0})};
W.Zy=function(a){if(this.Qa){var b=this.Nj().getChartAreaBoundingBox(),c=this.Xr;this.A2(a,b);this.Qa.C2=a.x;this.Qa.D2=a.y;if(c.Ju){a=h.min(this.Qa.Eu,this.Qa.C2);var d=h.abs(this.Qa.Eu-this.Qa.C2)}else a=b[G],d=b[r];c.Iu?(c=h.min(this.Qa.ll,this.Qa.D2),b=h.abs(this.Qa.ll-this.Qa.D2)):(c=b.top,b=b[A]);this[Hq]().fi={left:a,top:c,width:d,height:b,color:KD,opacity:.2}}};W.$y=function(){this.Qa&&(this.iE(),this.Qa=null)};
W.iE=function(){var a=this.Xr,b=this.Pg,c=this.Nj();b.qs=c;var d=this[Hq]().fi,e=b.wy(d[G]),f=b.wy(d[G]+d[r]),c=b.xy(d.top),d=b.xy(d.top+d[A]);if(e!==f&&c!==d){var g=b.uR*b.z1;if(a.Ju){var k=h.min(e,f),e=h.max(e,f);e-k<g&&(e=(k+e)/2,k=e-g/2,e+=g/2);b.kn=k;b.Jo=e}g=b.tR*b.z1;a.Iu&&(a=h.min(c,d),c=h.max(c,d),c-a<g&&(e=(a+c)/2,a=e-g/2,c=e+g/2),b.ln=a,b.Ko=c);this[Kz]()}};W.A2=function(a,b){a.x=Aj(a.x,b[G],b[G]+b[r]);a.y=Aj(a.y,b.top,b.top+b[A])};function bX(a,b,c){ZW[L](this,a,b,c);this.Qa=null}Y(bX,ZW);W=bX[K];W.nE=function(a){var b=this.Nj().getChartAreaBoundingBox();YW(a,b)&&(this.Qa={x:a.x,y:a.y,scale:a.gesture[mz],Ica:1})};W.$D=function(a){if(this.Qa){var b=this.Nj().getChartAreaBoundingBox();this.A2(a,b);this.Qa.Ica=this.Qa[mz];Na(this.Qa,a.gesture[mz]);this.iE()}};W.aE=function(){this.Qa&&(this.iE(),this.Qa=null)};
W.iE=function(){var a=this.Pg,b=this.Nj();a.qs=b;if(a){var b=1-(this.Qa.Ica-this.Qa[mz]),c=a.wy(this.Qa.x),d=a.Jo-c;a.kn=c-(c-a.kn)/b;a.Jo=c+d/b;c=a.xy(this.Qa.y);d=a.Ko-c;a.ln=c-(c-a.ln)/b;a.Ko=c+d/b;this[Kz]()}};W.A2=function(a,b){a.x=Aj(a.x,b[G],b[G]+b[r]);a.y=Aj(a.y,b.top,b.top+b[A])};function cX(a,b,c){ZW[L](this,a,b,c)}Y(cX,ZW);cX[K].WD=function(){var a=this.Pg;Na(a,1);a.kn=a.QR;a.Jo=a.QR+a.uR;a.ln=a.RR;a.Ko=a.RR+a.tR;this[Kz]()};function dX(a,b,c){ZW[L](this,a,b,c)}Y(dX,ZW);dX[K].XD=function(a,b){var c=this.Xr,d=this.Nj().getChartAreaBoundingBox();if(YW(a,d)){b();d=this.Pg;if(0>a.wheelDelta){if(d[mz]>=d.dpa)return;Na(d,d[mz]*d.eca)}else{if(d[mz]<=d.z1)return;Na(d,d[mz]/d.eca)}if(c.Ju){var e=(d.Jo+d.kn)/2,f=d.uR*d[mz]/2;d.kn=e-f;d.Jo=e+f}c.Iu&&(c=(d.Ko+d.ln)/2,e=d.tR*d[mz]/2,d.ln=c-e,d.Ko=c+e);this[Kz]()}};var VNa=[{isEnabled:function(a){a=a.S(wF);return null==a||ki(a)&&$i(a,Bta)?!0:!1},constructor:$W},{isEnabled:function(a){a=a.S(wF);return ki(a)&&$i(a,Cta)?!0:!1},constructor:aX},{isEnabled:function(a){a=a.S(wF);return null==a||ki(a)&&$i(a,Qya)?!0:!1},constructor:cX},{isEnabled:function(a){a=a.S(wF);return ki(a)&&$i(a,Cxa),!1},constructor:bX},{isEnabled:function(a){a=a.S(wF);return null==a||ki(a)&&$i(a,Tya)?!0:!1},constructor:dX}];function WNa(a,b,c,d){if(c.S(Nh)===pI)throw m("Cannot use explorer with a pie chart");this.b=c;this.Na=a;this.Xr=null;this.Nj=b;this.P=d;this.Pg=null;this.yo=[];XNa(this)}W=WNa[K];W.Ew=function(){var a=Mn(this.b,aua,4);1>a&&(a=1/a);var b=Mn(this.b,$ta,.25);1<b&&(b=1/b);var c=Mn(this.b,bua,1.5),d=In(this.b,Zta,!1);this.Pg=new UNa(this.P,this.Nj(),a,b,c,d);Z(this.yo,function(a){a.Ew(this.Pg)},this)};
function XNa(a){var b=a.P.ce[0]?0:1,c=a.P.Kd[0]?0:1,d=a.P.ce[b],e=a.P.Kd[c],b=!a.P.ce[1-b]&&d[H]===Qh&&!d.ap,c=!a.P.Kd[1-c]&&e[H]===Qh&&!e.ap,e=a.b.S(vF)[AA];e===Tg?c=!1:e===Rh&&(b=!1);a.Xr=new TNa(b,c);Z(VNa,function(a){a[gz](this.b)&&this.yo[C](new a[uc](this.Na,this.Nj,this.Xr))},a)}W.az=function(a){Z(this.yo,function(b){b.az(a)},this)};W.Zy=function(a){Z(this.yo,function(b){b.Zy(a)},this)};W.$y=function(a){Z(this.yo,function(b){b.$y(a)},this)};W.WD=function(a){Z(this.yo,function(b){b.WD(a)},this)};
W.XD=function(a,b){Z(this.yo,function(c){c.XD(a,b)},this)};W.af=function(a,b){Z(this.yo,function(c){c.af(a,b)},this)};W.nE=function(a,b){Z(this.yo,function(c){c.nE(a,b)},this)};W.$D=function(a,b){Z(this.yo,function(c){c.$D(a,b)},this)};W.aE=function(a,b){Z(this.yo,function(c){c.aE(a,b)},this)};var YNa=[{isEnabled:function(a){return a.S(vF)?!0:!1},constructor:WNa}];function ZNa(a,b,c,d){this.b=a;this.o=b;this.Nj=c;this.P=d;this.zo=[];this.bb=null;$Na(this)}function $Na(a){a.b&&Z(YNa,function(a){a[gz]&&a[gz](this.b)&&this.zo[C](new a[uc](this.o,this.Nj,this.b,this.P))},a)}W=ZNa[K];W.$y=function(a){Z(this.zo,function(b){b.$y(a)});PP(this.bb,15)};W.Zy=function(a){Z(this.zo,function(b){b.Zy(a)});PP(this.bb,5)};W.az=function(a){Z(this.zo,function(b){b.az(a)});PP(this.bb,5)};W.XD=function(a,b){Z(this.zo,function(c){c.XD(a,b)});PP(this.bb,5)};
W.WD=function(a){Z(this.zo,function(b){b.WD(a)});PP(this.bb,5)};W.af=function(a,b){Z(this.zo,function(c){c.af(a,b)})};W.nE=function(a,b){Z(this.zo,function(c){c.nE(a,b)})};W.$D=function(a,b){Z(this.zo,function(c){c.$D(a,b)});PP(this.bb,5)};W.aE=function(a,b){Z(this.zo,function(c){c.aE(a,b)});PP(this.bb,15)};W.Ew=function(){Z(this.zo,function(a){a.Ew()})};function eX(a,b,c,d,e,f){this.P=a;this.Na=b;this.Mn=c;this.hf=d;this.bb=new OP(e);vt(this,this.bb);this.Oo=f;this.Oo.bb=this.bb;this.NX()}Y(eX,ut);W=eX[K];W.B=function(){Rt(this.Mn);eX.e.B[L](this)};W.Pqa=function(a){Ba(this.Na[Oy],a[$].xb);PP(this.bb,5)};W.Qqa=function(){};W.Sqa=function(a){Ba(this.Na[Oy],a[$].xb);this.hf[fq](cI,{targetID:a[$].ze,x:a[$].xb.x,y:a[$].xb.y})};W.Tqa=function(a){this.hf[fq](ixa,{targetID:a[$].ze,x:a[$].xb.x,y:a[$].xb.y})};
W.Rqa=function(a){var b={targetID:a[$].ze,x:a[$].xb.x,y:a[$].xb.y};this.hf[fq](hxa,b);this.Oo.af(b,a[$][eq])};W.Kqa=function(a){this.hf[fq](gs,{targetID:a[$].ze,x:a[$].xb.x,y:a[$].xb.y})};W.Xqa=function(a){a={targetID:a[$].ze,x:a[$].xb.x,y:a[$].xb.y};this.hf[fq](PI,a);this.Oo.WD(a)};W.Lqa=function(a){this.hf[fq](aF,{targetID:a[$].ze,x:a[$].xb.x,y:a[$].xb.y})};W.Yqa=function(a){var b={targetID:a[$].ze,x:a[$].xb.x,y:a[$].xb.y,wheelDelta:a[$].wheelDelta};this.hf[fq](aJ,b);this.Oo.XD(b,a[$][eq])};
W.Nqa=function(a){a={targetID:a[$].ze,x:a[$].xb.x,y:a[$].xb.y};this.hf[fq](Eta,a);this.Oo.az(a)};W.Oqa=function(a){a={targetID:a[$].ze,x:a[$].xb.x,y:a[$].xb.y};this.hf[fq](kF,a);this.Oo.Zy(a)};W.Mqa=function(a){a={targetID:a[$].ze,x:a[$].xb.x,y:a[$].xb.y};this.hf[fq](Dta,a);this.Oo.$y(a)};W.Vqa=function(a){this.Oo.nE({targetID:a[$].ze,x:a[$].xb.x,y:a[$].xb.y,gesture:a[$].Eda},a[$][eq])};W.Wqa=function(a){this.Oo.$D({targetID:a[$].ze,x:a[$].xb.x,y:a[$].xb.y,gesture:a[$].Eda},a[$][eq])};
W.Uqa=function(a){this.Oo.aE({targetID:a[$].ze,x:a[$].xb.x,y:a[$].xb.y,gesture:a[$].Eda},a[$][eq])};W.Iqa=function(a){this.Na.Sa.nb=a[$].fj;PP(this.bb,50)};W.Jqa=function(){Ba(this.Na[Oy],null);this.Na.Sa.nb=null;PP(this.bb,50)};W.Hqa=function(a){var b=this.P;this.Na[Oy].uX=this.Na[Oy][mc][Bc]();a=a[$].fj;Vi(b.l,function(a){return a.Wg})&&(aP(this.Na[Yx],b.Da[a].ut,b.Kz==Bh),PP(this.bb,0))};W.zda=function(a){this.P.kb!=WD&&(this.Na.Ca.Sa.Gh=a[$].ZQ,PP(this.bb,50))};
W.Ada=function(){this.P.kb!=WD&&(this.Na.Ca.Sa.Gh=null,PP(this.bb,250))};W.bra=function(a){this.P.kb!=WD&&(aOa(this,a[$].ZQ),PP(this.bb,0))};W.cra=function(a){null==this.Na.Ca.GC&&(this.Na.Ca.GC=0);this.Na.Ca.GC+=a[$].Goa;PP(this.bb,0)};W.eaa=function(a){if(this.P.kb!=WD){var b=this.P.Cz;if(this.P.di==fJ||b==iF)this.Na.Sa.pb=a[$].uc,PP(this.bb,50)}};W.Gba=function(){if(this.P.kb!=WD){var a=this.P.Cz;if(this.P.di==fJ||a==iF)this.Na.Sa.pb=null,PP(this.bb,250)}};
W.T8=function(a){this.P.kb!=WD&&this.P.di==fJ&&(aOa(this,a[$].uc),PP(this.bb,0))};W.fra=function(a){this.zda(a)};W.gra=function(){this.Ada()};W.dra=function(a){this.hf[fq](nya,{index:a[$].ZQ})};W.$qa=function(a){this.P.di==fJ?this.eaa(a):(this.Na.Sa.pb=a[$].uc,this.Na.Sa.datum=a[$].fj,PP(this.bb,50))};W.ara=function(){this.P.di==fJ?this.Gba():(fX(this),PP(this.bb,250))};
W.Zqa=function(a){var b=this.P;if(b.di==fJ)this.T8(a);else{var c=b.Kz==Bh;a={nb:a[$].fj,pb:a[$].uc};var d=b.l[a.pb];d.Wg&&(b.kb==WD?aP(this.Na[Yx],a.nb,c):d.$g||(b=b.WX(a),this.P.di==fJ?bP(this.Na[Yx],b.zc,c):cP(this.Na[Yx],b.Wa,b.zc,c)));PP(this.bb,0)}};W.G$=function(a){var b=a[$].Hx;-1!=b&&(this.Na[Cz].Sa={Wa:a[$].fj,zc:bOa(this,a[$].uc,b)},fX(this),PP(this.bb,50))};W.aaa=function(a){-1!=a[$].Hx&&(this.Na[Cz].Sa=null,PP(this.bb,250))};
W.Gqa=function(a){var b=this.P,c=b.Kz==Bh,d=a[$].fj,e=a[$].uc;a=a[$].Hx;b.l[e].Wg&&(-1==a?this.Na[Cz].$L={uc:e,pV:d}:cP(this.Na[Yx],d,bOa(this,e,a),c));PP(this.bb,0)};W.hra=function(a){if(null===a[$].Hx){switch(this.P.di){case $E:this.Na.Sa.datum=a[$].fj;this.Na.Sa.pb=a[$].uc;break;case fJ:this.Na.Sa.pb=a[$].uc;break;case eE:this.Na.Sa.nb=a[$].fj}PP(this.bb,50)}else this.G$(a)};
W.ira=function(a){if(null===a[$].Hx){switch(this.P.di){case $E:fX(this);break;case fJ:this.Na.Sa.pb=null;break;case eE:Ba(this.Na[Oy],null),this.Na.Sa.nb=null}PP(this.bb,750)}else this.aaa(a)};W.Eqa=function(a){this.Na.Uh.Sa.Xw=a[$].Xw;PP(this.bb,50)};W.Fqa=function(){this.Na.Uh.Sa.Xw=null;PP(this.bb,250)};W.Dqa=function(){this.Na.Uh.Sa[oz]&&this.Na.Uh.Sa[oz]();PP(this.bb,250)};W.Ew=function(){this.Oo.Ew()};function fX(a){a.Na.Sa.pb=null;a.Na.Sa.datum=null}
function bOa(a,b,c){a=a.P;var d=null;if(null!=b)d=a.l[b].ga.annotation;else for(b=0;b<a.uk[J];++b)d=a.uk[b].ga.annotation;return d[c]}
W.NX=function(){var a=X(function(a,c){Lt(this.Mn,a,X(c,this))},this);a(Wra,this.Pqa);a(Xra,this.Qqa);a(Zra,this.Sqa);a($ra,this.Tqa);a(Yra,this.Rqa);a(Rra,this.Kqa);a(esa,this.Xqa);a(Sra,this.Lqa);a(fsa,this.Yqa);a(Vra,this.Nqa);a(Tra,this.Oqa);a(Ura,this.Mqa);a(dsa,this.Vqa);a(bsa,this.Wqa);a(csa,this.Uqa);a(Nra,this.Iqa);a(Ora,this.Jqa);a(Mra,this.Hqa);a(mwa,this.zda);a(nwa,this.Ada);a(lwa,this.bra);a(qwa,this.cra);a(Xya,this.eaa);a(Yya,this.Gba);a(Wya,this.T8);a(kya,this.fra);a(lya,this.gra);a(jya,
    this.dra);
    a(cta, this.$qa);
    a(dta, this.ara);
    a(bta, this.Zqa);
    a(Pqa, this.G$);
    a(Qqa, this.aaa);
    a(Oqa, this.Gqa);
    a(PAa, this.hra);
    a(QAa, this.ira);
    a(wqa, this.Eqa);
    a(xqa, this.Fqa);
    a(vqa, this.Dqa)
};
    function aOa(a, b) {
        var c = a.P;
        if (c.l[b].Wg) {
            var d = c.Kz == Bh, e = c.l[b].ut;
            c.kb == pI ? aP(a.Na[Yx], e, d) : bP(a.Na[Yx], e, d)
        }
    }

    function gX(a) {
        Ru[L](this, a);
        this.bh = null;
        this.lb = Tg;
        this.Wf = this.Qc = this.b = this.P = this.A5 = null;
        this.mM = [];
        this.Lg = this.Xa = this.sw = this.Na = null;
        this.Mn = new Tt;
        this.G = null;
        this.hf = new WW(this);
        this.In = null
    }

    Y(gX, Ru);
    W = gX[K];
    W.B = function () {
        this.sh();
        wt(this.Mn);
        gX.e.B[L](this)
    };
    W.Ph = null;
    W.VL = function (a, b, c, d, e) {
        return this.bh === pI ? hX[K].VL[Sc](this, arguments) : this.bh === jG ? new FW(a, b, c, d, e) : new SV(a, b, c, d, e)
    };
    W.PV = function (a, b, c, d, e, f, g) {
        return this.bh === pI ? hX[K].PV[Sc](this, arguments) : new GW(a, b, c, d, e, 0, g)
    };
    W.D1 = function (a, b, c, d) {
        return this.bh === pI ? hX[K].D1[Sc](this, arguments) : new mW(a, b, c, d)
    };
    W.nM = function (a, b) {
        return this.bh === pI ? hX[K].nM[Sc](this, arguments) : new HU(a, b)
    };
    W.Nd = function (a, b, c, d) {
        this.bh = a;
        null != b && (this.isa = b);
        null != c && (this.lb = c);
        null != d && (this.A5 = d)
    };
    W.mga = function (a) {
        a && this[uc] !== hX && (this.__proto__ ? (this.__proto__ = hX[K], Ea(this, hX), this[uc][L](this, this.ra)) : this.Nd(pI))
    };
aq(W,function(a,b,c){this.mga(ni(b)&&b[H]===pI);Ru[K][br][L](this,a,b,c)});
W.mm=function(a,b,c,d){no(DB);c=c||{};c=Fo(Co(c));cOa(this,c);dOa(this,c);ox(c,c[Vz]||this.lb);c.theme=c.theme||this.A5;this.bh!=Q&&eOa(c);if(this.bh!=pI&&Hn(c.reverseCategories)){var e=c[Vz]===Rh?at:bG;c[e]=c[e]||{};sw(c[e],-1);delete c.reverseCategories}fOa(c);st.mc(this.ra);if(!b)throw m(FC);Vi(pj(b.H()),function(a){return b.mr(a)==bI})&&(c.isDiff=!0);this.rw=b.D(0)!=T?1:0;this.ii=b.M();gOa(this);if(c.isStacked&&c.vAxis&&c.vAxis.baseline)throw m("Cannot set a non-zero base-line for a stacked chart");
var f=c.theme||[];ki(f)||(f=[f]);for(var e=[c],g=0;g<f[J];++g){var k;if(oi(f[g]))k=mKa(f[g]);else if(ni(f[g]))k=f[g];else throw m("Theme should be a theme name or an options object.");e[C](k)}c=c[H][pe]();VIa[c]&&e[C](VIa[c]);e[C](WIa);this.b=new Bn(e);this.bh=$n(this.b,Nh,BIa,Q);this.Q=io(this.ra,this.b);this.qa=jo(this.ra,this.b);c=new Pk(this.Q,this.qa);e=In(this.b,OF);if(!this.Xa||this.Xa.nk)try{this.Xa=new RL(this.ra,c,a,e)}catch(l){throw m(Spa);}else this.Xa[BA](c,a);this.Na=new CW(d);this.t=
b;this.Xa.Zq(X(this.yr,this),a)};
W.yr=function(){var a=this.Xa.jb(),b=this.Xa.lA(),c;this.Lg?(c=this.Lg.J5,this.Tq()):c=this.P;var d=this.b,e=this.VL(this.t,d,X(a.Qf,a),this.Q,this.qa).Bz(),f=new ZNa(d,this.Na,X(this.jp,this),e);wt(this.G);this.G=new eX(e,this.Na,this.Mn,this.hf,X(this.li,this,!0),f);this.Wf=this.PV(d,new Pk(this.Q,this.qa),{ab:e.lk,fontSize:e.pm},e.Cz,e.di,e.l[J],this.Wf?this.Wf.se:void 0);Z(this.mM,X(function(a){oi(a)?this.cj(a):this.dj(a)},this));this.mM=[];this.Qc=this.nM(b,a);(b=bJa(d,0,VG))&&c&&c.kb==e.kb?
(this.P=null,d=vi(),this.Tq(),this.Lg={cwa:c,I5:e,aha:new HNa(c,e),J5:c,startTime:d,endTime:d+b[iA],K5:0,timer:new Vt(10),$ga:b.z5,OV:b.OV,H5:!1},this.O5(),Lt(this.Lg.timer,Vs,X(this.O5,this)),this.Lg.timer[y](),this.P=e):(this.P=e,hOa(this),iOa(this));a.NF&&(a=a.NF())&&this.t&&Xa(a,QEa(this.t));this.hf[fq](Ls);this.G.Ew()};W.Uv=function(a,b){if(this.bh===pI)return iX(a,b);throw m("Cannot compute diff for this chart type.");};
function iX(a,b){var c=new fp,d=b.M(),e=b.H(),f=a.D(0)!=T;f&&c.Gg(a.D(0),a.Ra(0));for(var g=f?1:0,k=g;k<e;++k)c.Gg({type:a.D(k),label:a.Ra(k),role:bI}),c.Gg({type:b.D(k),label:b.Ra(k),role:ks});c.cB(d);for(var l=0;l<d;++l){k=null;f&&(k=b[I](l,0),c.cc(l,0,k));for(var n=g,k=g;k<e;++k){var p=a[I](l,k);c.cc(l,n,p);n+=1;p=b[I](l,k);c.cc(l,n,p);n+=1}}return c}
function cOa(a,b){switch(b[H]){case SG:a.Nd(Mg,SG,Tg);cb(b,null);break;case sD:a.Nd(Mg,sD,Tg);cb(b,null);break;case Isa:a.Nd(Mg,BD,Tg);cb(b,null);break;case BD:a.Nd(Mg,BD,Rh);cb(b,null);break;case ZI:a.Nd(ZI);cb(b,null);break;case pI:a.Nd(pI),cb(b,null)}var c=a.bh;c==Q&&(c=null);var d=b[H]||Q;d==Q&&(d=null);if(!c&&!d)throw m("Unspecified chart type.");if(c&&d&&c!=d)throw m("Incompatible chart types.");cb(b,c||d)}
function dOa(a,b){if(b[H]==Mg){var c=a.isa;c==Q&&(c=null);var d=b.seriesType||Q;d==Q&&(d=null);if(c&&d&&c!=d)throw m("Incompatible default series types.");b.seriesType=c||d}}
function eOa(a){a.hAxis=a.hAxis||{};a.vAxis=a.vAxis||{};var b=a.hAxis,c=a.vAxis,d=null;switch(a[H]){case ZI:d=c;break;case Mg:a.targetAxis=a.targetAxis||{},d=a.targetAxis}d&&(jX(a,HH,d,gh),jX(a,yH,d,eh),jX(a,ZG,d,ZG));b&&(jX(a,Bwa,b,ZG),jX(a,EAa,b,UJ));c&&jX(a,XJ,c,UJ);a.smoothLine&&!ci(a.curveType)&&(a.curveType=Mg);jX(a,vwa,a,UG);jX(a,Nya,a,MI);a.chartArea=a.chartArea||{};jX(a,ora,a.chartArea,zD)}
function fOa(a){kX(a,CAa,VJ,WJ);kX(a,rwa,owa,NG);lX(a.hAxis);for(var b in a.hAxes)lX(a.hAxes[b]);lX(a.vAxis);for(b in a.vAxes)lX(a.vAxes[b]);b=a.tooltip;null==b&&(b={},a.tooltip=b);kX(a,SAa,OAa,TAa);jX(a,TAa,b,RJ);jX(a,RAa,b,Us);jX(a,UAa,b,dBa);b.trigger==Cva&&(b.trigger=Kg);b=a.legend;if(null==b)b={},a.legend=b;else if(typeof b==Eh){var c=b;b={};a.legend=b;Ba(b,c)}jX(a,NG,b,RJ);b=a.animation;null==b?(b={},a.animation=b):typeof b==T&&(c=1E3*b,b={},a.animation=b,b.duration=c);jX(a,Kqa,b,Nta)}
function lX(a){if(null!=a){kX(a,uAa,vAa,RJ);kX(a,CAa,VJ,WJ);a.gridlines=a.gridlines||{};var b=a.gridlines,c=a.numberOfSections;!ci(b[Xy])&&ci(c)&&typeof c==T&&(b.count=c+1);a=a.gridlineColor;!ci(b[F])&&ci(a)&&Ya(b,a)}}function kX(a,b,c,d){a[d]=a[d]||{};d=a[d];jX(a,b,d,FE);jX(a,c,d,NF)}function jX(a,b,c,d){ci(a[b])&&!ci(c[d])&&(c[d]=a[b])}W.sh=function(){this.Tq();gOa(this);wt(this.Xa);Rt(this)};function gOa(a){if(a.G&&!a.G.nk){var b=a.G.bb;b.$s=da;b.fd[Wq]()}wt(a.G);wt(a.In);Rt(a.Mn)}
W.dj=function(a){null!=this.Wf?this.Wf.dj(a):this.mM[C](a)};function jOa(a,b){var c=new zO;c[qy](b);for(var c=JO(c),d=!1,e=0;e<c[J];e++){var f=c[e],g=f.column,f=f.row,g=a.P.Pq&&a.P.Pq[g];if(!g)return!1;var k=g.uc,l,n;null!=k?l=a.P.l[k].k[f]:n=a.P.Da[f];if(!l&&!n)return!1;if(g.zw==oD){if(d)return!1;d=!0;if(!(l||n).Uc)return!1}}return!0}
Cw(W,function(a){if(jOa(this,a)){var b=null;if(this.P.kb!=pI){var c=new zO;c[qy](a);for(var c=JO(c),d=0;d<c[J];d++){var e=c[d],f=this.P.Pq[e.column];if(f.zw==oD){b={uc:f.uc,pV:e.row};break}}}this.li(!0);this.Na[Yx][qy](a);b&&(this.Na[Cz].$L=b);this.li(!1)}});
W.li=function(a){var b=this.sw;if(!this.Wf.l5(this.Na,this.sw)){var c=this.Na.Qn,d;if(c){dfa(this.b.Ti[0],c);c=this.Xa.jb();c=this.VL(this.t,this.b,X(c.Qf,c),this.Q,this.qa).Bz();this.G.P=c;this.In.n5&&this.In.n5(c);d=BW(this.Wf,c,this.Na);this.P=c;this.Qc.bM(this.P);var c=this.Qc,e=this.P;c.td={};c.tw={};EJa(c,e,d);c.F.deleteContents(!0);FJa(c,d,c.F.wt);c.F.flush();this.Na.Qn=null}else{d=BW(this.Wf,this.P,this.Na);var c=this.Qc,e=this.P,f=ak({l:null,Da:null,Ca:null,bp:null,Ei:null,fi:null});bS(d,
f)&&bS(c.Oq,f)?(zn(d.Ca,c.Oq.Ca)||(c.F.Nc(c.Lq),f=new nQ(2),oQ(f,0,e.Ca||{}),oQ(f,1,d.Ca||{}),f=f[tz](),c.JE(f)),zn(d.Ei,c.Oq.Ei)||(c.F.Nc(c.bw),f=new nQ(2),oQ(f,0,e.Ei||{}),oQ(f,1,d.Ei||{}),f=f[tz](),GJa(c,f)),c.m5(e,d),zn(d.fi,c.Oq.fi)||(zU(c,uxa),e=d.fi,f=new bn,f.Oe(e[F]),f.Ch(e[Od]),e=c.F.hb(e[G],e.top,e[r],e[A],f,c.F.wt),c[dy](e,uxa)),c.Oq=d):c.cp(e,d)}this.sw=this.Na[Bc]()}a&&this.hf.qw(b,this.sw,this.P.kb,this.P.l)};xx(W,function(){return this.sw?this.sw[Yx][hA]():[]});
W.oh=function(a){return this.Wf?this.Wf.oh(a):void 0};W.cj=function(a){null!=this.Wf?this.Wf.cj(a):this.mM[C](a)};W.dump=function(){var a=this.Xa.jb();return a.$pa?a.ra[nd]:O};function hOa(a){var b=BW(a.Wf,a.P,a.Na);a.Qc.cp(a.P,b);a.sw=a.Na[Bc]()}function iOa(a){var b=a.Xa.jb(),c=a.Xa.lA();wt(a.In);a.In=a.D1(a.Mn,b,c,a.P);QMa(a.In);SMa(a.In);TMa(a.In)}
W.O5=function(){var a=this.Lg;this.P=null;if(a.H5)this.Tq(),this.P=a.I5,hOa(this),iOa(this),this.hf[fq](Lqa);else{var b=vi(),c=(b-a[pz])/(a.endTime-a[pz]);if(1>c){if(b-a.K5<1E3/this.Lg.OV)return}else c=1,a.H5=!0;c=a.aha.interpolate(a.$ga(c));a.J5=c;a.K5=b;this.Qc.cp(c,{});this.hf[fq](Mqa)}this.P=a.I5};W.Tq=function(){this.Lg&&(wt(this.Lg.timer),this.Lg=null)};W.kra=function(){var a=this.P.A;return{left:a[G],top:a.top,width:a[r],height:a[A]}};
W.ul=function(a){return null==this.Qc?null:(a=this.Qc.ul(a))?{left:a[G],top:a.top,width:a[cd]-a[G],height:a[Mc]-a.top}:null};W.jp=function(){var a=this.P;return{getChartAreaBoundingBox:X(this.kra,this),getBoundingBox:X(this.ul,this),getXLocation:X(PJa,null,a),getYLocation:X(QJa,null,a),getHAxisValue:X(RJa,null,a),getVAxisValue:X(SJa,null,a),getPointDatum:X(TJa,null,a)}};W.Bz=function(){return this.P};
W.kk=function(){if(!this.b)throw m("Chart not drawn.");var a=new Pk(this.Q,this.qa),b=Sk(this.ra)[Sb](P),a=TL(b,a),a=new FL(b,a),c=new OL(b),a=this.nM(c,a),c=BW(this.Wf,this.P,this.Na);a.cp(this.P,c);return b[Zb][0].toDataURL(Kva)};function mX(a){gX[L](this,a);this.Nd(Mg,sD,Tg)}Y(mX,gX);function nX(a){gX[L](this,a);this.Nd(Mg,CJ,Tg)}Y(nX,gX);function oX(a){gX[L](this,a);this.Nd(Mg,Q,Tg,Mza)}Y(oX,gX);function pX(a){gX[L](this,a);this.Nd(Mg,SG,Tg)}Y(pX,gX);function qX(a){gX[L](this,a);this.Nd(ZI)}Y(qX,gX);qX[K].Uv=function(a,b){return iX(a,b)};function rX(a){gX[L](this,a);this.Nd(WD)}Y(rX,gX);function sX(a){gX[L](this,a);this.Nd(Mg,BD,Rh)}Y(sX,gX);sX[K].Uv=function(a,b){return iX(a,b)};
function tX(a){gX[L](this,a);this.Nd(Mg,cE,Tg)}Y(tX,gX);function uX(a){gX[L](this,a);this.Nd(Mg,BD,Tg)}Y(uX,gX);uX[K].Uv=function(a,b){return iX(a,b)};function vX(a){gX[L](this,a);this.Nd(Mg,Q,Tg)}Y(vX,gX);function wX(a){gX[L](this,a);this.Nd(jG,BD,Tg)}Y(wX,gX);function xX(a){Tt[L](this);this.td={};this.L=null;this.wk={$t:!1};this.ZF=this.$F=this.G=this.g=this.Ng=this.P=this.Ij=this.t=null;this.n=a;this.cG=50;this.T5=0;this.cN=1;this.dW=this.eW=this.gM=!1;this.RM=this.UM=this.eV=this.fV=null;this.yf=!1;this.ed=null;this.o={range:null,mN:null,dh:null};this.Kj={Gk:{min:0,max:0},value:{min:0,max:0}};this.kW=null;this.gV=!1;this.au=null}Y(xX,Tt);
var yX={pca:HH,oca:yH,Ry:xg},zX={q5:"rangeSelectorMinHandle",p5:"rangeSelectorMaxHandle",s5:"rangeSelectorMinScreen",r5:"rangeSelectorMaxScreen"},kOa={Oua:Or,qua:Br,vua:Hr,Rua:Ur},lOa={fill:iB,Ce:.5},mOa={chartArea:{top:Xe,height:GB},enableInteractivity:!1,legend:{position:Q},hAxis:{textPosition:sG},vAxis:{textPosition:Q,gridlines:{color:Q}}},nOa={chartArea:{left:Xe,width:GB},enableInteractivity:!1,legend:{position:Q},vAxis:{textPosition:sG},hAxis:{textPosition:Q,gridlines:{color:Q}}},AX={brush:new bn({stroke:QA,
fill:ze}),aI:new Pk(10,16),Yla:3};W=xX[K];
aq(W,function(a,b,c){this.Zf();this.t=a;this.Ij=nU(a.D(0));this.td={};null==this.$F&&(this.$F=new OP(X(this.Ila,this)));null==this.ZF&&(this.ZF=new OP(X(this.mY,this,!0)));b=new Bn([b||{}]);this.Xq(b);this.ed=this.k$(b);c=c||{};Gu(this.L,Ls,X(this.Hla,this,c));this.gM&&(this.UM=this.t[I](0,0),this.RM=this.t[I](h.max(0,this.t.M()-1),0),b={min:this.UM,max:this.RM},c[hz]&&oOa(this,b,c[hz]),this.ed.domainAxis=this.ed.domainAxis||{},this.ed.domainAxis.viewWindow=b);this.L[br](a,this.ed)});
W.Xq=function(a){this.cG=Pn(a,eya,50);this.T5=Pn(a,Ywa,0);this.lV=In(a,mua,!1);this.gM=In(a,LBa,!1);this.eW=In(a,Kza,!1);this.dW=In(a,Qra,!1);this.fV=co(a,Aza,new bn(lOa));this.eV=qn[Bc]();this.Zf();var b=null;switch($n(a,rE,kOa,Hr)){case Br:b=new mX(this.n);break;case Hr:b=new vX(this.n);break;case Ur:b=new qX(this.n);break;case Or:b=new pX(this.n);break;default:b=new vX(this.n)}this.L=b;this.yf=$n(a,iI,ST,Tg)==Rh};W.k$=function(a){a=An(Fn(a,asa));a.theme=this.yf?nOa:mOa;return a};
function pOa(a,b){var c=VR(a.M(),function(b){return a[I](b,0)}),c=Si(c,ji);return Ti(c,b)}W.Hla=function(a){Lu(this.L);this.wk={$t:!0};qOa(this,a);wt(this.g);this.g=this.L.Xa.jb(1);wt(this.G);this.G=new Vv;this.mf()};W.l$=function(a){Lu(this.L);qOa(this,a);BX(this,xg)};
function qOa(a,b){a.P=a.L.Bz();a.Ng=a.yf?a.P.Kd[0]:a.P.ce[0];var c=a.Kj,d;d={min:h.min(a.Ng.Te,a.Ng.ef),max:h.max(a.Ng.Te,a.Ng.ef)};c.Gk=d;c=a.Kj;d=a.Ng[mc].rk(a.Ng.Te);var e=a.Ng[mc].rk(a.Ng.ef);d={min:h.min(d,e),max:h.max(d,e)};gx(c,d);c=a.T5;if(0>=c)a.cN=1;else{d=0;d=a.Kj.Gk.min;var e=a.Ng[mc].rk(d),f=null;mi(e)?(f=new Date,f[Oc](e[ec]()+c)):f=e+c;d=h[yb](h.abs(a.Ng[mc].Ee(f)-d));c=h.max(d,1);a.cN=c<a.Kj.Gk.max-a.Kj.Gk.min?c:1}if(a.eW||a.dW)c=a.Ng,d=pOa(a.t,c[mc].Ee),c=a.yf?1==c.tm?d[dq]():d:1==
c.tm?d:d[dq](),a.kW=c;b&&(c=b[hz],Uw(a.o,rOa(a,ni(c)?c[y]:null,ni(c)?c.end:null)))}
W.mf=function(){var a=this.g,b=this.P,c=a.qm(b[r],b[A]),d=a.Ba(!1);a[q](c,d);c=b.A;a.hb(0,0,b[r],b[A],this.eV,d);var b=a.hb(c[G],c.top,c[r],c[A],this.eV,d),e=sOa(this),e=a.hb(e[G],e.top,e[r],e[A],this.fV,d);this.td[zX.s5]=e;e=tOa(this);e=a.hb(e[G],e.top,e[r],e[A],this.fV,d);this.td[zX.r5]=e;e=uOa(this,this.o[hz].Mh,c,a,d);this.td[zX.q5]=e;a=uOa(this,this.o[hz].Lh,c,a,d);this.td[zX.p5]=a;var f=Uk(this.n);this.G.m(f[Td],PH,X(this.Tga,this,this.wk));this.G.m(f[Td],QH,X(this.v5,this,this.wk));d=d.a();
this.G.m(d,PH,X(this.Uga,this,this.wk));this.G.m(d,Hs,X(this.FF,this,this.wk,{type:$I,Rn:!1}));(this.gV=Al(d,function(a){return a==f[Td]}))||this.G.m(d,QH,X(this.v5,this,this.wk));this.lV||(vOa(this,e,HH,HH),vOa(this,a,yH,yH));this.G.m(b,Gs,X(this.iM,this,this.wk,{dh:xg}));this.G.m(b,Is,X(this.FF,this,this.wk,{type:$I,Rn:!0}));this.G.m(b,Hs,X(this.FF,this,this.wk,{type:$I,Rn:!1}));Ju(this,Ls,null)};
function vOa(a,b,c,d){a.G.m(b,Gs,X(a.iM,a,a.wk,{dh:d}));a.G.m(b,Is,X(a.FF,a,a.wk,{type:c,Rn:!0}));a.G.m(b,Hs,X(a.FF,a,a.wk,{type:c,Rn:!1}))}
function uOa(a,b,c,d,e){var f=AX.aI,g=AX.Yla,k=AX.brush,l=d.Ba(!1);d[q](e,l);e=.5*f[r];var n=a.yf?c[G]:h[t](b-e)+.5;b=a.yf?h[t](b-e)+.5:c.top;d.Em(l.a(),n,b);a.yf?(b=h[E](e),b=sL(a.yf?[{x:0,y:b},{x:0+c[r],y:b}]:[{x:0,y:b},{x:0,y:b+c[A]}]),d.sa(b,k,l),a.lV||wOa(a,.5*(c[r]-f[A]),0,f[A],f[r],g,d,k,l)):(b=h[E](e),b=sL(a.yf?[{x:b,y:0},{x:b+c[r],y:0}]:[{x:b,y:0},{x:b,y:0+c[A]}]),d.sa(b,k,l),a.lV||wOa(a,0,.5*(c[A]-f[A]),f[r],f[A],g,d,k,l));return l.a()}
function wOa(a,b,c,d,e,f,g,k,l){d=b+d;e=c+e;var n=sL([{x:b+f,y:c},{x:d-f,y:c},{x:d,y:c+f},{x:d,y:e-f},{x:d-f,y:e},{x:b+f,y:e},{x:b,y:e-f},{x:b,y:c+f}],!1);g.sa(n,k,l);f+=1;a.yf?(a=sL([{x:b+f,y:c+f},{x:d-f,y:c+f}]),b=sL([{x:b+f,y:e-f},{x:d-f,y:e-f}])):(a=sL([{x:b+f,y:c+f},{x:b+f,y:e-f}]),b=sL([{x:d-f,y:c+f},{x:d-f,y:e-f}]));g.sa(a,k,l);g.sa(b,k,l)}function sOa(a){var b=a.P.A,c=a.o[hz].Mh;return a.yf?new Il(b[G],b.top,b[r],c-b.top):new Il(b[G],b.top,c-b[G],b[A])}
function tOa(a){var b=a.P.A,c=a.o[hz].Lh;return a.yf?new Il(b[G],c,b[r],b[Mc]-c):new Il(c,b.top,b[cd]-c,b[A])}function rOa(a,b,c){var d=a.Kj.Gk.min,e=a.Kj.Gk.max,f=1==a.Ng.tm&&!a.yf;null!=b&&(b=a.Ng[mc].Ee(b),f?d=h.max(b,d):e=h.min(b,e));null!=c&&(a=a.Ng[mc].Ee(c),f?e=h.min(a,e):d=h.max(a,d));return{Mh:d,Lh:e}}W.mQ=function(){var a=this.o[hz],b=this.Ng[mc].rk(a.Mh),a=this.Ng[mc].rk(a.Lh),c=1==this.Ng.tm&&!this.yf;return{start:c?b:a,end:c?a:b}};
W.Uva=function(a,b){if(!this.wk.$t)return!1;var c=this.o[hz];if(null==c.Mh||null==c.Lh)return!1;c=rOa(this,a,b);c=CX(this,c.Mh,c.Lh,xg);this.o.dh=null;return c};function CX(a,b,c,d){var e=a.o[hz];if(e.Mh==b&&e.Lh==c)return!1;Uw(a.o,{Mh:b,Lh:c});BX(a,d);return!0}
function BX(a,b){var c=a.yf?AX.aI[A]:AX.aI[r],d=a.yf?AX.aI[r]:AX.aI[A];if(b!=yH){var e=sOa(a),f=a.td[zX.s5],g=a.td[zX.q5];if(a.yf){var k=h[t](e.top+e[A]-.5*d)+.5;a.g.Em(g,0,k);a.g.hS(f,e.top);a.g.Yj(f,e[A])}else k=h[t](e[G]+e[r]-.5*c)+.5,a.g.Em(g,k,0),a.g.gS(f,e[G]),a.g.yg(f,e[r])}b!=HH&&(e=tOa(a),f=a.td[zX.r5],g=a.td[zX.p5],a.yf?(k=h[t](e.top-.5*d)+.5,a.g.Em(g,0,k),a.g.hS(f,e.top),a.g.Yj(f,e[A])):(k=h[t](e[G]-.5*c)+.5,a.g.Em(g,k,0),a.g.gS(f,e[G]),a.g.yg(f,e[r])))}W.Ila=function(){BX(this,this.o.dh)};
function xOa(a){var b=a.Kj.Gk.max-a.Kj.Gk.min,c=a.Ng.tm,d=(a.o[hz].Mh-a.Kj.Gk.min)/b;if(.1>d)return{direction:-1*c,t$:d/.1};a=(a.Kj.Gk.max-a.o[hz].Lh)/b;return.1>a?{direction:1*c,t$:a/.1}:null}function DX(a){if(a.gM){var b=!1;a.o.dh==xg&&xOa(a)&&(b=!0);b&&!a.au?(a.au=new Vt(a.cG),a.G.m(a.au,Vs,X(a.tma,a)),a.au[y]()):!b&&a.au&&(wt(a.au),a.au=null)}}
W.tma=function(){if(this.au){var a=xOa(this),b=this.cG/Cj(1E3,6E4,a.t$),c=this.Ij.ak(this.UM),d=this.Ij.ak(this.RM),e=(d-c)*b,b=this.ed.domainAxis.viewWindow,f=b.max,g=this.Ij.ak(b.min),f=this.Ij.ak(f);0>a[Ox]?(c=h.max(g-e,c),a=f-(g-c)):(a=h.min(f+e,d),c=g+(a-f));g=this.Ij.By(c);a=this.Ij.By(a);b.min=g;b.max=a;Gu(this.L,Ls,X(this.l$,this,null));this.L[br](this.t,this.ed);this.mY(!0)}};W.Uga=function(a,b){a.$t&&null!=this.o.dh&&(this.gV||yOa(this,b),Lw(b[ar][x],SH))};
W.Tga=function(a,b){a.$t&&null!=this.o.dh&&yOa(this,b)};function yOa(a,b){var c=a.o;c[hz]&&null!=c[hz].Mh&&null!=c[hz].Lh||Uw(c,{Mh:a.Kj.Gk.min,Lh:a.Kj.Gk.max});var d=Zl(b),e,d=(a.yf?d.y:d.x)-c.mN,f=a.o[hz],g=a.Kj.Gk,k;switch(a.o.dh){case xg:e=g.min-f.Mh;k=g.max-f.Lh;break;case HH:e=g.min-f.Mh;k=f.Lh-a.cN-f.Mh;break;case yH:e=f.Mh+a.cN-f.Lh,k=g.max-f.Lh}e=Aj(d,e,k);c.mN+=e;c.dh!=yH&&(c[hz].Mh+=e);c.dh!=HH&&(c[hz].Lh+=e);DX(a);PP(a.$F,a.cG);PP(a.ZF,a.cG)}
W.iM=function(a,b,c){if(a.$t&&Ct(c)){a=Zl(c);var d=this.o;d.mN=this.yf?a.y:a.x;d.dh=b.dh;DX(this);c[eq]()}};
W.v5=function(a){if(a.$t&&(a=this.o,null!==a.dh)){if(this.eW){var b=this.kW,c=a[hz].Lh,d=$m(b,a[hz].Mh),c=$m(b,c);CX(this,d,c,a.dh)}else if(this.dW){var e=new Pm(a[hz].Mh,a[hz].Lh),d=e.end-e[y],c=this.Kj.Gk,f=b=this.kW,g=X(Sm,null,e),b=Xi(f,g),g=Zi(f,g);if(null===b||null===g)b=$m(f,e[y]),f=$m(f,e.end),g=b=f=h.abs(e[y]-b)<=h.abs(e.end-f)?b:f;e=e.end-e[y];b=Jj(b,g)-e/2;e=new Pm(b,b+e);Ka(e,h.max(e[y],c.min));e.end=e[y]+d;e.end=h.min(e.end,c.max);Ka(e,e.end-d);CX(this,e[y],e.end,a.dh)}else this.gM&&
a.dh!=xg&&(d=this.ed.domainAxis.viewWindow,c=this.mQ(),oOa(this,d,c),Gu(this.L,Ls,X(this.l$,this,{range:c})),this.L[br](this.t,this.ed));this.mY(!1);a.dh=null;DX(this)}};
function oOa(a,b,c){var d=b.max,e=a.Ij.ak(b.min),d=a.Ij.ak(d),f=d-e;0===f&&(e-=1,d+=1,f=2);var g=c[y];c=c.end;if(null!=g&&null!=c){var k=a.Ij.ak(g),l=a.Ij.ak(c);c=l-k;var g=.1*f,n=.6*f;c>=g&&c<=n||(k=(k+l)/2,f/=(c<g?.9*n:1.1*g)/c,f=new Pm(k-f/2,k+f/2),c<g||(e=a.Ij.ak(a.UM),d=a.Ij.ak(a.RM)),zOa(f,new Pm(e,d)),e=a.Ij.By(f[y]),a=a.Ij.By(f.end),b.min=e,b.max=a)}}function zOa(a,b){a[y]<b[y]&&(a.end+=b[y]-a[y],Ka(a,b[y]));a.end>b.end&&(Ka(a,a[y]-(a.end-b.end)),a.end=b.end);a[y]<b[y]&&Ka(a,b[y])}
W.FF=function(a,b,c){a.$t&&!this.o.dh&&Lw(c[ar][x],b.Rn?b[H]==$I?SH:this.yf?Rya:EE:bF)};W.mY=function(a){var b=this.o.dh,c=this.mQ();if(null!=b&&null!=c){var d=this.Ng.tm;Ju(this,DI,{start:c[y],end:c.end,startChanged:b==(1==d?yX.pca:yX.oca)||b==yX.Ry,endChanged:b==(1==d?yX.oca:yX.pca)||b==yX.Ry,inProgress:a})}};W.Zf=function(){this.L&&(Lu(this.L),wt(this.$F),this.$F=null,wt(this.ZF),this.ZF=null,this.wk.$t=!1,wt(this.g),this.g=null,wt(this.G),this.G=null,this.L.Zf(),this.L=null,Rt(this))};function EX(a){aQ[L](this,a,[lG,mG])}Y(EX,aQ);EX[K].lK=function(a,b,c){if(b==lG){if(!a[Mz](c.Gn))return c.Gn=a,!0}else if(null!=c.Gn)return c.Gn=null,!0;return!1};EX[K].Vk=function(a){return null!=a.Gn?[new ZP(Xs,a.rf)]:[]};var AOa={day:864E5,hour:36E5,minute:6E4,second:1E3,millisecond:1};function FX(a){var b=GX(a),c;t:{c=a[rc](se);if(2===c[J]){c=ha(c[0]);if(qi(c)&&!fa(c))break t;throw m('Invalid number for increment: "'+a+'".');}c=1}b=AOa[b];if(!b)throw m('Invalid number for increment "'+a+'".');return c*b}function GX(a){var b=a[J]-1;a=a[Cb](b)===xh?a[ee](0,b):a;a=a[rc](se);return 2===a[J]?a[1]:a[0]}function BOa(a,b,c){a=ha(a);b=(a-c)%FX(b);return a=new Date(a-b)}

    function COa(a, b, c) {
        a = ha(a);
        c = a - c;
        b = FX(b);
        c %= b;
        return a = 0 === c ? new Date(a) : new Date(a + b - c)
    }

    function HX(a) {
        Tt[L](this);
        this.fd = null;
        this.q = a;
        a = Ak || Ek && !Ik(jna) && a[Tc] == Xf;
        this.G = new Vv(this);
        this.G.m(this.q, a ? [CG, xxa, Zsa, Lta, uG] : uG, this)
    }

    Y(HX, Tt);
    Hp(HX[K], function (a) {
        if (a[H] == uG) Ak && Ik(10) && 0 == a[lq] && 0 == a[kq] || (IX(this), zk && this.q != Uk(this.q)[qb] || this[fq](DOa(a))); else if (a[H] != CG || lCa(a)) {
            var b = a[H] == CG ? this.q[od] : null;
            Ak && 229 == a[lq] && (b = null);
            var c = DOa(a);
            IX(this);
            this.fd = Wt(function () {
                this.fd = null;
                this.q[od] != b && this[fq](c)
            }, 0, this)
        }
    });
    function IX(a) {
        null != a.fd && (Xt(a.fd), a.fd = null)
    }

    function DOa(a) {
        a = new At(a.Qa);
        cb(a, uG);
        return a
    }

    HX[K].B = function () {
        HX.e.B[L](this);
        this.G.Z();
        IX(this);
        delete this.q
    };
    function JX(a, b, c) {
        uN[L](this, a, b || IN.Vb(), c)
    }

    Y(JX, uN);
    dN(dqa, function () {
        return new JX(null)
    });
    function KX(a, b) {
        rM[L](this, b);
        this.Ob = a || O
    }

    var LX;
    Y(KX, rM);
    W = KX[K];
    W.kq = null;
    W.Rma = 10;
    function MX() {
        null != LX || (LX = Exa in ea[Sb](uG));
        return LX
    }

    W.OH = !1;
    W.j = function () {
        this.q = this.ia().j(uG, {type: Us})
    };
    W.Ef = function (a) {
        KX.e.Ef[L](this, a);
        this.Ob || (this.Ob = a[Xd](FG) || O);
        Bl(Uk(a)) == a && (this.OH = !0, a = this.a(), AM(a, this.vI));
        MX() && (this.a().placeholder = this.Ob);
        a = this.a();
        ML(a, FG, this.Ob)
    };
W.Fb=function(){KX.e.Fb[L](this);var a=new Vv(this);a.m(this.a(),Kg,this.q7);a.m(this.a(),LD,this.dO);if(MX())this.G=a;else{Bk&&a.m(this.a(),[zs,CG,DG],this.Wia);var b=Uk(this.a());a.m(bl(b),zwa,this.Xia);this.G=a;EOa(this)}this.vu();this.a().Ki=this};W.He=function(){KX.e.He[L](this);this.G&&(this.G.Z(),this.G=null);this.a().Ki=null};function EOa(a){!a.ela&&a.G&&a.a().form&&(a.G.m(a.a().form,rAa,a.fla),a.ela=!0)}W.B=function(){KX.e.B[L](this);this.G&&(this.G.Z(),this.G=null)};W.vI="label-input-label";
W.q7=function(){this.OH=!0;var a=this.a();AM(a,this.vI);if(!MX()&&!NX(this)&&!this.Mma){var b=this,a=function(){b.a()&&gx(b.a(),O)};Ak?Wt(a,10):a()}};W.dO=function(){MX()||(this.G.vb(this.a(),gs,this.q7),this.kq=null);this.OH=!1;this.vu()};W.Wia=function(a){27==a[lq]&&(a[H]==CG?this.kq=this.a()[od]:a[H]==zs?gx(this.a(),this.kq):a[H]==DG&&(this.kq=null),a[eq]())};W.fla=function(){NX(this)||(gx(this.a(),O),Wt(this.rna,10,this))};W.rna=function(){NX(this)||gx(this.a(),this.Ob)};W.Xia=function(){this.vu()};
function NX(a){return!!a.a()&&a.a()[od]!=O&&a.a()[od]!=a.Ob}va(W,function(){gx(this.a(),O);null!=this.kq&&(this.kq=O)});Yw(W,function(){NX(this)&&(this[Yb](),this.vu())});W.Fa=function(a){null!=this.kq&&(this.kq=a);gx(this.a(),a);this.vu()};gb(W,function(){return null!=this.kq?this.kq:NX(this)?this.a()[od]:O});W.Bm=function(a){var b=this.a();MX()?(b&&(b.placeholder=a),this.Ob=a):NX(this)||(b&&gx(b,O),this.Ob=a,this.oaa());b&&ML(b,FG,this.Ob)};W.bd=function(){return this.Ob};
W.vu=function(){var a=this.a();MX()?this.a().placeholder!=this.Ob&&(this.a().placeholder=this.Ob):EOa(this);ML(a,FG,this.Ob);NX(this)?(a=this.a(),AM(a,this.vI)):(this.Mma||this.OH||(a=this.a(),yM(a,this.vI)),MX()||Wt(this.oaa,this.Rma,this))};W.La=function(a){zx(this.a(),!a);var b=this.a();CM(b,this.vI+rB,!a)};Tw(W,function(){return!this.a()[Rd]});W.oaa=function(){!this.a()||NX(this)||this.OH||gx(this.a(),this.Ob)};function OX(a,b){this.Le=new du(a);this.Cra=b?b:Ira;this.lf=5E3}var FOa=0;yp(OX[K],function(a,b,c,d){a=a||null;d=d||$C+(FOa++)[kc](36)+vi()[kc](36);bi._callbacks_||(bi._callbacks_={});var e=this.Le[Bc]();if(a)for(var f in a)a[zc]&&!a[zc](f)||dja(e,f,a[f]);b&&(bi._callbacks_[d]=GOa(d,b),dja(e,this.Cra,Ypa+d));b=tGa(e[kc](),{timeout:this.lf,Tda:!0});pGa(b,HOa(d,a,c));return{ic:d,Yda:b}});Rp(OX[K],function(a){a&&(a.Yda&&a.Yda[Nq](),a.ic&&PX(a.ic,!1))});
    function HOa(a, b, c) {
        return function () {
            PX(a, !1);
            c && c(b)
        }
    }

    function GOa(a, b) {
        return function (c) {
            PX(a, !0);
            b[Sc](void 0, arguments)
        }
    }

    function PX(a, b) {
        bi._callbacks_[a] && (b ? delete bi._callbacks_[a] : bi._callbacks_[a] = fi)
    }

    window.google && window.google.loader && window.google.loader.eval && window.google.loader.eval.visualization && (window.google.loader.eval.visualization = function () {
        eval(arguments[0])
    });
    var oYa = "border: 0; padding: 0; margin: 0;", pYa = "border: 0; padding: 0; margin: 0; width: ",
        qYa = "greenColor", rYa = "greenFrom", sYa = "greenTo", tYa = "majorTicks", uYa = "minorTicks",
        vYa = "redColor", wYa = "redFrom", xYa = "redTo", yYa = "yellowColor", zYa = "yellowFrom", AYa = "yellowTo";
function a0(a,b,c,d,e){Tt[L](this);this.n=a;this.Q=b;this.qa=c;this.aF={ab:wD,fontSize:d,color:VA,lc:O,bold:!1,Tc:!1,Se:!1};this.nja={ab:wD,fontSize:d,color:JD,lc:O,bold:!1,Tc:!1,Se:!1};this.uha={ab:wD,fontSize:0,color:VA,lc:O,bold:!1,Tc:!1,Se:!1};this.tha=e;this.Tf=this.Xa=this.g=null;this.vW=[]}Y(a0,Tt);
var BYa=new bn({fill:jB,stroke:VA,ua:1}),CYa=new bn({fill:"#f7f7f7",stroke:lB,ua:2}),DYa=new bn({stroke:$A,ua:1}),EYa=new bn({stroke:VA,ua:2}),FYa=new bn({fill:kB,Ce:.7,stroke:"#c63310",ua:1}),GYa=new bn({fill:"#4684ee",stroke:$A,ua:1});W=a0[K];W.Ga=ia;W.ob=ia;W.B7=ia;W.Qz=ia;W.wd=0;W.WZ=null;W.QF=null;W.JX=null;W.oQ=270;W.k7=0;W.m$=null;W.JI=null;W.Cw=null;W.Lg=null;W.of=function(){return this.Ga};W.zt=function(a){this.Ga=a};W.nf=function(){return this.ob};W.Uq=function(a){this.ob=a};
W.Fa=function(a,b,c){this.wd=a;this.WZ=b;this.Tq();a=b0(this,a);null!=this.JI&&c?(this.Lg=new gO([this.JI],[a],c[iA],c.z5),Lt(this.Lg,[vra,Hqa,sF],this.dsa,!1,this),Lt(this.Lg,sF,this.csa,!1,this),this.Lg[Pz](!1)):(this.JI=a,c0(this))};W.rp=function(a,b){this.B7=h.max(1,a);this.Qz=h.max(1,b)};W.ZV=function(a){this.Cw=a};function d0(a,b,c,d){a.vW[C]({Ee:b,rk:c,color:d})}W.h8=function(){};va(W,function(){this.Tq();wt(this.Xa);this.Xa=null;Rt(this)});
aq(W,function(a,b){var c=new Pk(this.Q,this.qa);null!=this.Xa?this.Xa[BA](c,a):this.Xa=new RL(this.n,c,a,b);this.Xa.Zq(X(this.yr,this),a)});
W.yr=function(){var a=this.Xa.jb(),b=a.qm(this.Q,this.qa);a.hc(b,IE,yt);this.g=a;var c=this.Tf=a.Ba(!1);a[q](b,c);var d,e,b=h.min(this.Q,this.qa),b=h[E](.45*b),f=this.Q/2,g=this.qa/2;a.oe(f-.5,g-.5,b,BYa,c);b-=BYa.Nb;b=h[E](.9*b);a.oe(f-.5,g-.5,b,CYa,c);b-=2*CYa.Nb;e=.75*b;for(var k=0;k<this.vW[J];k++){var l=this.vW[k],n=l.rk,p=e0(this,l.Ee),s=e0(this,n),n=new pL,u=f+Ej(p,b),v=g+Fj(p,b);n[Hz](u,v);n.xf(f,g,b,b,p+90,s+90,!0);u=f+Ej(s,e);v=g+Fj(s,e);n.da(u,v);n.xf(f,g,e,e,s+90,p+90,!1);n[bz]();a.sa(n,
new bn({fill:l[F]}),c)}if(this.QF||this.JX)this.QF&&(e=g-h[E](.35*b),a.Ii(this.QF,0,e,this.Q,e,iE,iE,this.aF,c)),this.JX&&(e=g+h[E](.35*b),a.Ii(this.JX,0,e,this.Q,e,iE,iE,this.aF,c));var l=this.Qz,p=.8*b,s=.9*b,u=this.B7*l,v=(this.ob-this.Ga)/u,z=new pL,B=new pL,D=this.uha,N=h[E](.14*b);Fa(D,N);for(k=0;k<=u;k++){var M=e0(this,k*v+this.Ga),R=0==k%l,S=R?p:s,n=R?z:B;d=f+Ej(M,S);e=g+Fj(M,S);n[Hz](d,e);d=f+Ej(M,b);e=g+Fj(M,b);n.da(d,e);R&&this.Cw&&(n=this.Cw[h[t](k/l)])&&(d=f+Ej(M,S-N/2),e=g+Fj(M,S-N/
2),S=iE,280<M||90>M?(S=sF,M=0):90<=M&&260>M?(S=AJ,M=d,d=this.Q):(R=h.min(d,this.Q-d),M=d-R,d+=R,e+=h[E](N/4)),a.Ii(n,M,e,d,e,S,iE,D,c))}a.sa(B,DYa,c);a.sa(z,EYa,c);this.Tq();b0(this,this.wd);this.k7=b;c0(this);this.tha()};W.dsa=function(a){this.JI=a.x;c0(this)};W.csa=function(){this.Tq()};W.Tq=function(){this.Lg&&(Rt(this.Lg),this.Lg[Wq](!1),wt(this.Lg),this.Lg=null)};function b0(a,b){var c=(b-a.Ga)/(a.ob-a.Ga),c=h.max(c,-.02);return c=h.min(c,1.02)}
function e0(a,b){var c=b0(a,b);return a.oQ*c+Bj((360-a.oQ)/2+90,360)}

    function c0(a) {
        if (a.g) {
            var b = a.k7, c = a.g, d = a.Q / 2, e = a.qa / 2, f = a.oQ * a.JI + Bj((360 - a.oQ) / 2 + 90, 360),
                g = h[E](.95 * b), k = h[E](.3 * b), l = Ej(f, g), g = Fj(f, g), n = Ej(f, k), k = Fj(f, k),
                f = Bj(f + 90, 360), p = .07 * b, s = Ej(f, p), p = Fj(f, p), f = new pL;
            f[Hz](d + l, e + g);
            f.Bp(d + s, e + p, d - n + s / 2, e - k + p / 2, d - n, e - k);
            f.Bp(d - n - s / 2, e - k - p / 2, d - s, e - p, d + l, e + g);
            l = h[E](.15 * b);
            (g = a.m$) ? c.Nc(g) : g = a.m$ = c.Ba();
            a.WZ && (b = e + h[E](.75 * b), c.Ii(a.WZ, 0, b, a.Q, b, iE, iE, a.nja, g));
            c.sa(f, FYa, g);
            c.oe(d - .5, e - .5, l, GYa, g);
            c[q](a.Tf, g)
        }
    }

    function HYa(a, b, c, d) {
        this.n = a;
        this.Q = b;
        this.qa = c;
        this.yM = d;
        this.wx = [];
        this.Vc = [];
        this.Cw = [];
        this.vY = [];
        this.yk = [];
        this.Ga = 0;
        this.ob = 100;
        this.j$ = this.WV = this.IM = this.HM = this.XV = this.LM = this.KM = this.VV = this.EM = this.zM = null;
        this.xp = !0;
        this.zY = 0
    }

    W = HYa[K];
    W.Qz = 2;
    W.zt = function (a) {
        this.Ga != a && (this.Ga = a, this.xp = !0)
    };
    W.of = function () {
        return this.Ga
    };
    W.Uq = function (a) {
        this.ob != a && (this.ob = a, this.xp = !0)
    };
    W.nf = function () {
        return this.ob
    };
    W.h8 = function (a) {
        this.j$ = a
    };
    W.setValues = function (a, b, c) {
        this.xp = this.xp || this.Vc[J] != a[J] || this.yk[J] != c[J] || !oj(this.yk, c);
        this.Vc = a;
        this.vY = b;
        this.yk = c
    };
    W.ZV = function (a) {
        1 == a[J] && (a = [O, a[0], O]);
        oj(this.Cw, a) || (this.Cw = a, this.xp = !0)
    };
    function f0(a, b, c) {
        return h.min(h[t](a.Q / c), h[t](a.qa / b))
    }

    aq(W, function (a) {
        if (this.xp) IYa(this, a); else for (a = 0; a < this.Vc[J]; a++) {
            var b = this.wx[a];
            b.QF = this.yk[a];
            b.Fa(this.Vc[a], this.vY[a], this.j$)
        }
    });
function IYa(a,b){a[Yb]();var c=a.Vc[J],d=1,e=1;if(1<c)for(var f=h[t](h[zd](a.Q*a.qa/c)),e=h[t](a.Q/f),d=h[t](a.qa/f);!(c<=h[t](a.Q/f)*h[t](a.qa/f));){var g=f0(a,d,e+1),k=f0(a,d+1,e);g>=k&&(f=g,e++);k>=g&&(f=k,d++)}f=f0(a,d,e);f-=4;k=Sk();k.Nc(a.n);a.wx=[];if(0!=c){var l=k.j(Ss,{style:oYa,cellpadding:2,cellspacing:0,align:iE}),n=k.j(OJ,null);k[q](l,n);for(var g=[],p=0,s=0;s<d;s++){var u=k.j(dK,{style:oYa});k[q](n,u);for(var v=0;v<e;v++){var z=k.j(PJ,{style:pYa+f+BI});g[p++]=z;k[q](u,z)}}k[q](a.n,
l);d=h[E](.1*f);a.zY=0;a.xp=!0;for(e=0;e<c;e++)k=a.wx[e]=new a0(g[e],f,f,d,X(function(){this.zY++;this.zY==this.wx[J]&&(this.xp=!1)},a)),k.zt(a.Ga),k.Uq(a.ob),k.QF=a.yk[e],l=a.Cw,n=l[J],k.rp(1<n?n-1:4,a.Qz),0<n&&k.ZV(l),k.Fa(a.Vc[e],a.vY[e],null),null!=a.zM&&null!=a.EM&&d0(k,a.zM,a.EM,a.VV),null!=a.KM&&null!=a.LM&&d0(k,a.KM,a.LM,a.XV),null!=a.HM&&null!=a.IM&&d0(k,a.HM,a.IM,a.WV),k[br](b,a.yM)}}va(W,function(){for(var a=0;a<this.wx[J];++a)this.wx[a][Yb]();this.wx=[]});function g0(a){Ru[L](this,a);this.U=Sk()}Y(g0,Ru);W=g0[K];W.Q=0;W.qa=0;W.yM=!0;
W.mm=function(a,b,c){var d=new Bn([c||{}]);c=this.ra;var e=io(c,d),f=jo(c,d),g=In(d,OF);if(e!=this.Q||f!=this.qa||g!=this.yM)this.MH&&this.MH[Yb](),this.MH=new HYa(c,e,f,g),this.Q=e,this.qa=f,this.yM=g;c=this.MH;e=Mn(d,HH,0);c.zt(e);e=Mn(d,yH,100);c.Uq(e);e=[String(c.of()),O,O,O,String(c.nf())];e=d.S(tYa,e);c.ZV(e);e=Mn(d,uYa,2);c.Qz!=e&&(c.Qz=e,c.xp=!0);var e=Nn(d,rYa),f=Nn(d,sYa),g=Nn(d,zYa),k=Nn(d,AYa),l=Nn(d,wYa),n=Nn(d,xYa),p=Wn(d,qYa,TA),s=Wn(d,yYa,gB),u=Wn(d,vYa,eB);if(c.zM!=e||c.EM!=f||c.VV!=
    p || c.KM != g || c.LM != k || c.XV != s || c.HM != l || c.IM != n || c.WV != u) c.zM = e, c.EM = f, c.VV = p, c.KM = g, c.LM = k, c.XV = s, c.HM = l, c.IM = n, c.WV = u, c.xp = !0;
    d = bJa(d, 400, tG);
    c.h8(d);
    d = [];
    e = [];
    f = [];
    if (2 == b.H() && b.D(0) == Eh && b.D(1) == T)for (g = 0; g < b.M(); g++)null != b[I](g, 0) && null != b[I](g, 1) && (f[C](b[I](g, 0)), d[C](b[I](g, 1)), e[C](b.Ea(g, 1))); else for (k = 0; k < b.H(); k++)if (b.D(k) == T)for (g = 0; g < b.M(); g++)null != b[I](g, k) && (d[C](b[I](g, k)), e[C](b.Ea(g, k)), f[C](b.Ra(k)));
    c.setValues(d, e, f);
    c[br](a);
    Ju(this, Ls, null)
};
    W.sh = function () {
        this.MH && this.MH[Yb]()
    };
    di("google.visualization.Gauge", g0, void 0);
    aq(g0[K], g0[K][br]);
    g0[K].clearChart = g0[K].Zf;
    g0[K].getContainer = g0[K].pc;
    window.google && window.google.loader && window.google.loader.eval && window.google.loader.eval.visualization && (window.google.loader.eval.visualization = function () {
        eval(arguments[0])
    });
    function l0(a, b) {
        return a.time = b
    }
var sZa="tooltip.text",tZa="slices.",uZa="sliceVisibilityThreshold",m0="slice",n0="size",vZa="shouldHighlightHover",wZa="pieStartAngle",xZa="pieSliceTextStyle",o0="pieSliceText",p0="pieSliceBorderColor",yZa="pieResidueSliceLabel",zZa="pieResidueSliceColor",q0="pieHole",AZa="legend.labeledValueText",BZa="legend.iconWidthScaleFactor",CZa="inline-block",DZa="displayTinySlicesInLegend",EZa="diff.oldData.inCenter",FZa="diff.innerCircle.radiusFactor",GZa="diff.innerCircle.borderFactor",r0="certainty",HZa=
"annotationText",IZa="9e9e9e",s0="636363",JZa=".visibleInLegend",KZa=".textStyle",LZa=".hole",MZa=".enableInteractivity",NZa=".color",t0="#990000",OZa="#444";function u0(a,b){wU[L](this,a,b);this.zN=this.Tf=null}Y(u0,wU);u0[K].S8=function(a,b){var c=this.F;if(1>a.l[J])return!1;this.Tf=b;for(var d=a.pie.ei,e=a.l[J]/d[J],f=0;f<d[J];++f){for(var g=d[f].cd,k=d[f].dd,l=d[f].YM,n=f*e,p=n+e;n<p&&180>a.l[n].pd;)v0(this,a.l[n],g,k),n+=1;l&&v0(this,l,g,k);for(l=p-1;l>=n;--l)v0(this,a.l[l],g,k)}a.bp&&(this.zN=c.Ba(),PZa(this,a.bp),c[q](this.Tf,this.zN));return!0};
function v0(a,b,c,d){if(b.R){var e=a.F.Ba(),f=a.Mb,g=f.pie[Sx],k=b[uy];if(b.Xb){var l=f.pie.Dz,n=b.Xb,p=new pL;p[Hz](k.x+n.kf.x,k.y+n.kf.y);p.da(k.x+n.kf.x,k.y+n.kf.y+l);p.xf(k.x+g.x,k.y+g.y+l,c,d,n.Ud,n.pd,!0);p.da(k.x+n.Hh.x,k.y+n.Hh.y);p.xf(k.x+g.x,k.y+g.y,c,d,n.pd,n.Ud,!1);a.F.sa(p,n.brush,e)}if(b.Ct||b.nw)l=f.pie.Dz,n=new pL,n[Hz](k.x+g.x,k.y+g.y),n.da(k.x+g.x,k.y+g.y+l),b.nw&&(n.da(k.x+b.Hh.x,k.y+b.Hh.y+l),n.da(k.x+b.Hh.x,k.y+b.Hh.y)),b.Ct&&(n.da(k.x+b.kf.x,k.y+b.kf.y+l),n.da(k.x+b.kf.x,k.y+
b.kf.y)),a.F.sa(n,b.WL,e);n=b.gw?b.gw.brush:b.brush;b.$q?0==b.kF&&0==b.Xz?a.F.pk(g.x,g.y,c,d,n,e):(p=new pL,p[Hz](g.x,g.y-d),p.xf(g.x,g.y,c,d,0,180,!0),p.xf(g.x,g.y,c,d,180,360,!0),p[Hz](g.x,g.y-b.Xz),p.xf(g.x,g.y,b.kF,b.Xz,360,180,!1),p.xf(g.x,g.y,b.kF,b.Xz,180,0,!1),p[bz](),a.F.sa(p,n,e)):(p=new pL,p[Hz](k.x+b.Oz.x,k.y+b.Oz.y),p.da(k.x+b.kf.x,k.y+b.kf.y),p.xf(k.x+g.x,k.y+g.y,c,d,b.Ud,b.pd,!0),p.da(k.x+b.yt.x,k.y+b.yt.y),p.xf(k.x+g.x,k.y+g.y,b.kF,b.Xz,b.pd,b.Ud,!1),a.F.sa(p,n,e));b.Ji&&f.V4&&QZa(a,
b.Ji,e);if(c=b.Ln){c.Xb&&(d=new pL,d[Hz](c.Xb.kf.x,c.Xb.kf.y),d.da(c.Xb.kf.x,c.Xb.kf.y+l),d.xf(c.Xb.Oh.x,c.Xb.Oh.y+l,c.Xb.cd,c.Xb.dd,c.Xb.Ud,c.Xb.pd,!0),d.da(c.Xb.Hh.x,c.Xb.Hh.y),d.xf(c.Xb.Oh.x,c.Xb.Oh.y,c.Xb.cd,c.Xb.dd,c.Xb.pd,c.Xb.Ud,!1),a.F.sa(d,c.Xb.brush,e));if(c.Ct||c.nw)d=new pL,d[Hz](c.oA.x,c.oA.y),d.da(c.eM.x,c.eM.y),d.da(c.eM.x,c.eM.y+l),d.da(c.oA.x,c.oA.y+l),d.da(c.oA.x,c.oA.y),a.F.sa(d,c.WL,e);QZa(a,c,e)}b.tV&&a.F.Sd(b[id],b.uV.x+k.x,b.uV.y+k.y,b.fM[r],AJ,AJ,b.ba,e);k=JP([m0,b[pc]]);e=
e.a();a.De(a.Tf,k,e);b.sb&&(e=JP([Xs,b[pc]]),a.HF(b.sb,e))}}function QZa(a,b,c){if(b.$q)a.F.pk(b.Oh.x,b.Oh.y,b.cd,b.dd,b.brush,c);else{var d=new pL;d[Hz](b.kf.x,b.kf.y);d.xf(b.Oh.x,b.Oh.y,b.cd,b.dd,b.Ud,b.pd,!0);a.F.sa(d,b.brush,c)}}
function PZa(a,b){for(var c=X(a.Dt,a),d=X(a[dy],a),e=a.F,f=a.zN,g=0;g<b[J];++g){var k=b[g],l=e.Ba(),n=e.Ba(),p=new pL;p[Hz](k.$i.x+.5,k.$i.y+.5);p.da(k.e6+.5,k.$i.y+.5);p.da(k.e6+.5,k.ur.y+.5);p.da(k.ur.x+.5,k.ur.y+.5);e.sa(p,k.Lc,n);e.oe(k.$i.x+.5,k.$i.y+.5,k.d6,k.sha,n);c(k.aA,l);c(k.bA,l);e[q](f,l);e[q](f,n);k=JP([OG,k[pc]]);d(l.a(),k)}}
u0[K].m5=function(a,b){if(!zn(b.bp,this.Oq.bp)){this.F.Nc(this.zN);var c=new nQ(2);oQ(c,0,a.bp||{});oQ(c,1,b.bp||{});c=c[tz]();PZa(this,c)}this.bM(a);this.h2(a,b)};u0[K].bM=function(a){var b=this.Oq;if(b)for(var c in b.l){if(b.l[c].sb){var d=JP([Xs,ha(c)]);yU(this,d)}d=a.pie.ei[c<a.l[J]/a.pie.ei[J]?0:1];v0(this,a.l[c],d.cd,d.dd)}};u0[K].h2=function(a,b){for(var c in b.l){var d=new nQ(2);oQ(d,0,a.l[c]);oQ(d,1,b.l[c]);var e=a.pie.ei[c<a.l[J]/a.pie.ei[J]?0:1],f=e.cd,e=e.dd;v0(this,d[tz](),f,e)}};function RZa(a,b,c,d,e){var f=a[cd]-a[G],g=gk(d),k=gk(d);Ya(k,IZa);d=d[yc]/3.236;var l=g[yc]+d,n=k[yc]+d,p=SZa(a,f,b,g,k,d,e),s=[],u;2==c?(c=a[cd],a=a[G],u=sF):(c=a[G],a=a[cd],u=AJ);for(var v=0;v<e[J];++v){var z=e[v],B=p[v];if(null!=B){var D=QP(b,z.aA,g,f,B.OI),N=QP(b,z.bA,k,f,B.QI),M=MLa(new CL(c,B.y));s[C]({d6:2,$i:MLa(z.N6(Aj(B.y,z.yN[y],z.yN.end))),e6:a,ur:M,sha:new bn({fill:s0,Ce:.7}),Lc:new bn({stroke:s0,ua:1,Xg:.7}),zwa:d,aA:{text:z.aA,ba:g,anchor:new RR(M.x,M.y),I:Ti(D.I,function(a,b){return{x:0,
y:(b-D.I[J])*l,length:D.gh,text:a}}),Kc:u,Jc:AJ,sb:D.te?z.aA:O,Gb:0},wwa:g,bA:{text:z.bA,ba:k,anchor:new RR(M.x,M.y),I:Ti(N.I,function(a,b){return{x:0,y:(b+1)*n,length:N.gh,text:a}}),Kc:u,Jc:sF,sb:N.te?z.bA:O,Gb:0},ywa:k,xwa:u,index:z[pc]})}}return s}
function SZa(a,b,c,d,e,f,g){var k=d[yc]+f,l=e[yc]+f,n=Ti(g,function(a,g){var k=QP(c,a.aA,d,b,da),l=QP(c,a.bA,e,b,da);return{sK:g,Y1:a.d9,Xy:a.d9,OI:k.I[J],QI:l.I[J],$S:f,aT:f}});mj(n,function(a,b){return a.Xy-b.Xy});n=gj(n);mj(n,function(a,b){return g[a.sK].c9-g[b.sK].c9});var p=[];0<n[J]&&p[C](n.pop());for(var s=null,u=0,v;v=w0(a,k,l,g,p,!1),!(0===n[J]||v.tK&&15<u);)v.tK?(u++,s&&ej(p,s)):u=0,s=n.pop(),p[C](s),mj(p,function(a,b){return a.Xy-b.Xy});v.tK&&s&&(ej(p,s),v=w0(a,k,l,g,p,!1));a=w0(a,k,l,
g,p,!0);a.tK||(v=a);return v[Xx]}function w0(a,b,c,d,e,f){0<e[J]&&(e[0].$S=0,Oi(e).aT=0);for(var g=0;g<e[J];g++){var k=e[g],l=e[g-1],n=e[g+1],n=n?d[n.sK].yN.end-5:a[Mc];k.Mea=new Pm(h.min(k.Y1,l?d[l.sK].yN[y]+5:a.top),h.max(k.Y1,n))}a=TZa(a,b,c,e,f);d=!1;f={};for(g=0;g<e[J];g++){var k=e[g],l=a[g],n=(l[sA]-l.top-k.$S)/b,p=(l[Mc]-l[sA]-k.aT)/c,n=h[t](n+.1),p=h[t](p+.1),s=n<k.OI||p<k.QI;d=d||s;f[k.sK]={y:l[sA],OI:n,QI:p,tK:s}}return{layout:f,tK:d}}
function TZa(a,b,c,d,e){var f=Vj(d,function(a){return{anchor:a.Xy,top:a.Xy-(a.OI*b+a.$S),bottom:a.Xy+(a.QI*c+a.aT)}}),g=[];g[C](function(b,c){var d=b[c].top;return 0==c?{top:h.max(a.top-d,0)}:{top:h.max(b[Mi(c)-1][Mc]-d,0)/2}});g[C](function(b,c){var e=b[c][Mc];return c==d[J]-1?{bottom:h.min(a[Mc]-e,0)}:{bottom:h.min(b[Mi(c)+1].top-e,0)/2}});g[C](function(a,c,f){var g=a[c][sA]-a[c].top;a=h.max(-g,0);c=d[c];c=h.max(c.OI*b+c.$S-h.max(g,0),0);f=(a+c*(e?1:f))/2;return{anchor:f,top:-f}});g[C](function(a,
b,f){var g=a[b][Mc]-a[b][sA];a=h.max(-g,0);b=d[b];b=h.max(b.QI*c+b.aT-h.max(g,0),0);f=(a+b*(e?1:f))/2;return{anchor:-f,bottom:f}});g[C](function(a,b){var c=a[b][sA],e=d[b];return{anchor:Aj(c,e.Mea[y],e.Mea.end)-c}});e&&g[C](function(a,b,c){return{anchor:(d[b].Y1-a[b][sA])*c}});var k=PFa(f,g,function(a,b){return{anchor:a[sA]+(b[sA]||0),top:a.top+(b.top||0),bottom:a[Mc]+(b[Mc]||0)}},function(a,b){return h.max(h.abs(a[sA]-b[sA]),h.abs(a.top-b.top),h.abs(a[Mc]-b[Mc]))});return Ti(d,function(a,b){var c=
    k[String(b)];
    return {anchor: c[sA], top: c.top, bottom: c[Mc]}
})
}

    function UZa(a, b) {
        var c = Yi(a, function (a) {
            return a[pc] == b
        });
        if (0 > c)return {};
        var d = {};
        d[c] = {d6: 4, Lc: new bn({stroke: s0, ua: 2, Xg: .7})};
        return d
    }

    function x0(a, b, c, d, e) {
        this.ub = b.S(HE, WT);
        this.G8 = Mn(b, wZa, 0);
        this.Wja = 0 > Mn(b, Dg, 1);
        YU[L](this, a, b, c, d, e)
    }

    Y(x0, YU);
    La(x0[K], function () {
        this.N.di = fJ;
        this.N.jd = In(this[Eq], Tva);
        this.N.Pc &= !this.N.jd;
        this.N.jd && (this.N.Dh = this.N.Dh || {}, this.N.Dh.pie = this.N.Dh.pie || {}, this.N.Dh.pie.k5 = this[Eq].S(EZa, !0), this.N.Dh.pie.rV = this[Eq].S(FZa, .6));
        for (var a = 0; a < this.Ub.M(); a++)if (0 > this.Ub[I](a, 1))throw m("Negative values are invalid for a pie chart.");
        x0.e[Kc][L](this)
    });
    x0[K].y8 = function () {
        return Os
    };
    x0[K].x8 = function () {
        return null
    };
x0[K].w8=function(){var a=this.N;if(this.Ub.D(0)!=Eh)throw m("Pie chart should have a first column of type string");var b;b=this.N;var c=b.A,d=this.Cf[fz](),e=null,f=null,g=h[E](1.618*b.pm),e=h[E](c[r]*(1-1/1.618)-g);d==ah?(f=new Fl(c.top,c[G]+e,c[Mc],c[G]),e=new Fl(c.top,c[cd],c[Mc],f[cd]+g)):d==Os?(f=new Fl(c.top,c[cd],c[Mc],c[cd]-e),e=new Fl(c.top,f[G]-g,c[Mc],c[G])):d==RD?(e=new Fl(c.top,c[cd],c.top+1/1.618*(c[Mc]-c.top-g),c[G]),f=new Fl(e[Mc]+g,c[cd],c[Mc],c[G])):e=new Fl(c.top,c[cd],c[Mc],c[G]);
var c=0,d=h.min(e[cd]-e[G],e[Mc]-e.top),k=g=h[t](d/2),d=h[E]((e[cd]+e[G])/2),e=h[E]((e[Mc]+e.top)/2);b.Pc&&(k*=.8,c=g/5,e-=c/2);if(b.jd){var l={cd:g*b.Dh.pie.rV,dd:k*b.Dh.pie.rV},g={cd:g,dd:k};b={pie:{center:new CL(d,e),cd:g.cd,dd:g.dd,Dz:c,ei:b.Dh.pie.k5?[l,g]:[g,l]},Ca:f}}else b={pie:{center:new CL(d,e),cd:g,dd:k,Dz:c,ei:[{cd:g,dd:k}]},Ca:f};VZa(this,b);f=this.Cf[fz]();b.Ca?this.Cf.ip(b.Ca):f==PD?this.Cf.ip(WZa(this)):f==HG&&XZa(this,a.A,b,this.Cf.Ha)};
function YZa(a,b,c){var d=a.N,e={},f=Wn(a[Eq],p0,O);a=b[F];var g=b.wb;b=b.ij;var k;d.Pc?(d=a,k=g,f=b):k=d=f;e.normal=new bn({stroke:d,ua:1,fill:a,Ce:null!=c?c:1});e.wb=new bn({stroke:k,ua:1,fill:g,Ce:null!=c?c:1});e.ij=new bn({stroke:f,ua:1,fill:b,Ce:null!=c?c:1});return e}function WZa(a){var b=a.N,c=b[A]-b.A[Mc];a=a.Cf.Ha[yc];var d=[];d[C]({min:2,Wb:[da]});var e=d[J];d[C]({min:a+2,Wb:[da]});c=WR(d,c);return c[J]>e?(c=b.A[Mc]+c[e],new Fl(c-a,b.A[cd],c,b.A[G])):null}
function VZa(a,b){var c=a.N,d=a.Ub,e=b.pie[Sx],f=b.pie.Dz,g=d.M(),k=PU(Wn(a[Eq],zZa,O)),l=YZa(a,k,1),n=fo(a[Eq],xZa,{ab:c.lk,fontSize:c.pm}),p=$n(a[Eq],o0,MIa,c.jd?Q:oI),s=$n(a[Eq],sZa,NIa,xg),u=Rn(a[Eq],uZa,1/720),v=In(a[Eq],DZa),z=Tn(a[Eq],yZa,bpa),B=Rn(a[Eq],q0,0);a[Eq][BZa]=2;c.l=[];c.Kn=[];var D,N,M;c.jd?(D=a[Eq].S(GZa,.01),D=c.Dh.pie.rV*(1+D),D=c.Dh.pie.k5?[0,D]:[D,0],N=[!1,!0],M=[a[Eq].S(fF,.5),a[Eq].S(eF,1)]):(D=[0],N=[!0],M=[1]);c.pie={center:e,Dz:f,cd:b.pie.cd,dd:b.pie.dd,ei:[]};for(var f=
X(function(a,b){var d=c.l[a];if(1==b)y0(d,s,d);else{var e=c.l[a-g];y0(d,s,d,e);y0(e,s,d,e)}},a),R=X(function(a){var b=c.pie.ei[a-1].YM,d=c.pie.ei[0].YM;1==a&&b?y0(b,s,b):1<a&&(b&&d?(y0(b,s,b,d),y0(d,s,b,d)):b?(d={yA:Xe,df:Xe},y0(b,s,b,d)):d&&(b={yA:Xe,df:Xe},y0(d,s,b,d)))},a),S=X(function(a,b,d,e,f){c.jd?c.Kn[C]({id:a,text:b,brush:new bn({Eh:{jg:d,Rf:d,Yv:M[0],Zv:M[1],x1:GB,y1:FB,Hb:FB,Lb:FB,vt:!0,RE:!0}}),index:e,R:f}):c.Kn[C]({id:a,text:b,brush:new bn({fill:d}),index:e,R:f})},a),V=c.pie.ei,ma=b.pie.ei,
Ja=ma[J],Ha=0,Va=0;Va<Ja;++Va){for(var Ge=ma[Va],Jb=null,Qc=Ge.cd,Ge=Ge.dd,ne=D[Va],sc=N[Va],ed=0,wf=0,rk=0,mh=0;mh<g;mh++)rk+=d[I](mh,Va+1)||0;for(mh=0;mh<g;++mh){var xf=d[I](mh,Va+1)||0,Pq=d.Ea(mh,Va+1),$f=d[I](mh,0),hj=d.Ea(mh,0),Oj=wf/rk,ag=Oj+xf/rk,Xg=ag-Oj>=u;Xg?wf+=xf:ed+=xf;var gr=tZa+Ha,zp=a[Eq].S(gr+NZa,a.ub[mh%a.ub[J]]),zp=PU(zp),iy=YZa(a,zp,M[Va]),dC=Mn(a[Eq],gr+Sma,0),hr=Rn(a[Eq],gr+LZa,B)+ne,Yg=fo(a[Eq],gr+KZa,n),to=In(a[Eq],[gr+MZa,rF],!0),xf=ZZa(a,Ha,mh,Oj,ag,xf,Pq,hj,Xg,e,Qc,Ge,hr,
dC,p,Yg,zp,iy,to);c.l[C](xf);Xg=In(a[Eq],gr+JZa,sc&&(Xg||v));S($f,hj,zp[F],Ha,Xg);Va==Ja-1&&f(Ha,Ja);Ha+=1}0<ed&&(Oj=1-ed/rk,ag=1,xf=ed,Pq=String(ed),hj=z,Jb=ZZa(a,-1,-1,Oj,ag,xf,Pq,hj,!0,e,Qc,Ge,B+ne,0,p,n,k,l,!1),sc&&!v&&S(O,hj,k[F],-1,!0));V[C]({cd:Qc,dd:Ge,YM:Jb});Va==Ja-1&&R(Ja)}}function z0(a,b){switch(b){case oI:return a.yA;case Qh:return a.df;case xg:return a.df+HA+a.yA+Oe}return O}
function ZZa(a,b,c,d,e,f,g,k,l,n,p,s,u,v,z,B,D,N,M){var R=a.N;if(R.Pc||1<=u)u=0;var S={},V=e-d;gx(S,f);S.df=g;Ya(S,D);S.pe=N;S.brush=S.pe.normal;Xp(S,k);Kp(S,b);S.Wg=M;S.ut=0<=c?a.Ub.um(c):null;S.R=l;b=p*u;u*=s;S.kF=b;S.Xz=u;S.Ud=360*d+a.G8;S.pd=360*e+a.G8;a.Wja&&(c=360-S.Ud,S.Ud=360-S.pd,S.pd=c);c=h.PI*(S.Ud-90)/180;f=h.PI*(S.pd-90)/180;S.yA=h[E](1E3*V)/10+De;k=O;switch(z){case oI:k=S.yA;break;case FG:k=S[fA];break;case Qh:k=g;break;case wBa:k=g+HA+S.yA+Oe}cx(S,k);if(!l)return S;S.ba=B;a=a.$c(S[id],
B)[r];B=B[yc];S.fM=new Pk(a,B);S.$q=1==V;if(S[id])if(S.$q)S.uV=EL(n,new CL(a/2,B/2)),S.tV=!0;else{V=p-B;B=s-B;a=S.fM;a=new Pk(a[r]/V,a[A]/B);g=new Pk(2/V,2/B);l=QV((c+f)/2+h.PI,1,1);i:{z=QLa(new CL(0,0),a);k=1;D=h.min;for(N=0;N<z[J];++N){var ma=z[N];M=l.x*ma.x+l.y*ma.y;ma=M*M+1-(ma.x*ma.x+ma.y*ma.y);0>ma?M=null:(ma=h[zd](ma),M=[M-ma,M+ma]);if(null===M||0>M[1]){z=null;break i}k=D(k,M[1])}z=k}if(.4>z)a=null;else{l=l[Bc]();l[mz](-z);a=OLa(a,g,g);i:{a=QLa(l,a);g=Bj(f-c,2*h.PI);z=0;k=g;for(D=0;D<a[J];++D){N=
Bj(h[xd](a[D].y,a[D].x)-c,2*h.PI);if(N>=g||0==N){a=!1;break i}k=h.min(N,k);z=h.max(N,z)}a=z-k<h.PI}a=a?l:null}V=a&&new CL(a.x*V,a.y*B);null!==V&&(S.tV=!0,S.uV=NLa(n,V,new CL(-S.fM[r]/2,-S.fM[A]/2)))}else S.tV=!1;S.offset=QV((c+f)/2,p,s)[mz](v);v=QV(f,p,s);S.kf=DL(n,QV(c,p,s));S.Hh=DL(n,v);s=QV(f,b,u);S.Oz=DL(n,QV(c,b,u));S.yt=DL(n,s);R.Pc&&270>=S.Ud&&90<=S.pd&&(s={},90>S.Ud?(s.Ud=90,s.kf=new CL(n.x+p,n.y)):(s.Ud=S.Ud,s.kf=S.kf),270<S.pd?(s.pd=270,s.Hh=new CL(n.x-p,n.y)):(s.pd=S.pd,s.Hh=S.Hh),s.brush=
S.pe.wb,S.Xb=s);S.Ct=R.Pc&&.5<d;S.nw=R.Pc&&.5>e;if(S.Ct||S.nw)S.WL=S.pe.wb;return S}function y0(a,b,c,d){c=z0(c,b);d&&(c+=re+z0(d,b));a.de={Cm:a[fA],content:c}}
function XZa(a,b,c,d){var e=a.N,f=e.pie.cd,g=e.pie.dd,k=c.pie[Sx],l=$n(a[Eq],AZa,NIa,oI),n=h.PI*(3*(f+g)-h[zd]((3*f+g)*(f+3*g))),p=[];c=[];for(var s=0;s<e.Kn[J];++s){var u=e.Kn[s];if(u.R){var v;if(0<=u[pc])v=e.l[u[pc]];else{var z=e.pie.ei;v=z[z[J]-1].YM}var B=h.max((f+v.kF)/2,.75*f),D=h.max((g+v.Xz)/2,.75*g),N=(v.pd+v.Ud)/2,z=Bj(N,360),M=Jj(f-B,g-D)/n*360,R,S;2*M<v.pd-v.Ud?(R=v.Ud+M,S=v.pd-M,180>z?S=h.min(S,180):R=h.max(R,180)):S=R=N;var V=function(a){return DL(k,QV(a,B,D))},M=function(a){return V(h.asin(Aj((a-
    k.y) / D, -1, 1)))
}, ma = function (a) {
    return V(h.PI - h.asin(Aj((a - k.y) / D, -1, 1)))
}, u = {
    d9: V(Dj(N - 90)).y,
    yN: new Pm(V(Dj(R - 90)).y, V(Dj(S - 90)).y),
    aA: u[id],
    bA: z0(v, l),
    c9: v[od],
    index: v[pc]
};
    180 > z ? (u.N6 = M, p[C](u)) : (u.N6 = ma, c[C](u))
}
}
    f = b[r] / 2 - f - d[yc];
    e = RZa(new Fl(b.top, b[cd], b[Mc], b[cd] - f), a.$c, 2, d, p);
    b = RZa(new Fl(b.top, b[G] + f, b[Mc], b[G]), a.$c, 1, d, c);
    d = [];
    ij(d, e, b);
    a.N.bp = d
}

    function A0(a, b, c) {
        kW[L](this, a, b, c, pI)
    }

    Y(A0, kW);
    A0[K].lt = function (a) {
        return this.F.Uu(a[ar])
    };
    A0[K].Xda = function (a, b) {
        var c = b[rc](we);
        switch (c[0]) {
            case m0:
                c = ha(c[1]);
                if (0 > c)break;
                this[fq](Vya + a, {uc: c, fj: null})
        }
    };
    function B0(a, b, c, d, e, f, g) {
        AW[L](this, a, b, c, d, e, g);
        var k = In(a, rF, !0);
        this.bla = VR(f, function (b) {
            return In(a, tZa + b + MZa, k)
        });
        this.cla = In(a, vZa, !0)
    }

    Y(B0, AW);
    B0[K].Bs = function (a, b, c) {
        this.s4(a, b, c)
    };
    B0[K].l5 = function (a, b) {
        return a[Mz](b, !0)
    };
    function C0(a, b) {
        a.l = a.l || {};
        var c = a.l;
        c[b] = c[b] || {};
        return c[b]
    }

    B0[K].s4 = function (a, b, c) {
        var d = {Mb: a, vk: this.se.getEntries(), Gt: c, Ak: b.Uh}, e = b.Uh.Sa.Xw;
        null != e && Xw(b.Uh.Sa, this.se.oh(e)[oz]);
        for (var f = this.Tn.qV, e = f == zh || f == xg, g = f == Kg || f == xg, k = this.se && 0 < d.vk[J], f = IO(b[Yx]), k = 1 < f[J] && k, l = 0; l < f[J]; ++l) {
            var n = f[l], p = a.pie.ei[J], n = n + a.l[J] / p * (p - 1);
            $Za(a, n, c);
            e && !k && a_a(this, d, n)
        }
        e && k && b_a(this, d, f, f[f[J] - 1]);
        var s = X(function (b) {
            if (a.jd) {
                var c = a.l[J];
                return [b, (b + c / a.pie.ei[J]) % c]
            }
            return [b]
        }, this), e = X(function (b, e) {
            if (null != b) {
                for (var f = s(b), k = !1, l = 0; l < f[J]; ++l) {
                    var n =
f[l];if(null!=n&&this.bla[n]){k=k||!0;if(a.jd){if(this.twa){var p=n,R=c,S=a.l[p];if(null!=S[uy]){var V=S.brush[Bc]();V.hd(Xm(S.brush.cb(),xe,.7));V.Ch(S.brush.Pe+.1);C0(R,p).gw={brush:V}}}}else this.cla&&c_a(a,n,c);a.bp&&(c.bp=UZa(a.bp,n))}}e&&g&&k&&a_a(this,d,b)}},this);if(f=b.fi)c.fi=f;e(b.Sa.pb,!0);e(b.Ca.Sa.Gh,!1)};
function c_a(a,b,c){var d=a.pie,e=a.l[b];if(null!=e[uy]){c=C0(c,b);c.Ln={};b=c.Ln;b.brush=new bn({stroke:e.brush.cb(),ua:6.5,Xg:.3});b.Oh=new Kk(d[Sx].x+e[uy].x,d[Sx].y+e[uy].y);b.Ud=e.Ud;b.pd=e.pd;b.$q=e.$q;(c=c.Ji)&&a.V4?(a=c.cd+c.brush.Nb/2,c=c.dd+c.brush.Nb/2):(c=e.brush.Nb/2,a=d.cd+c,c=d.dd+c);d=b.brush.Nb/2;b.cd=a+d;b.dd=c+d;a=Dj(b.Ud-90);c=Dj(b.pd-90);b.kf=Ok(b.Oh,QV(a,b.cd,b.dd));b.Hh=Ok(b.Oh,QV(c,b.cd,b.dd));var f=e.Xb;f&&(b.Xb=b.Xb||{},b.Xb.brush=rn(f.brush.cb(),.3),b.Xb.Oh=b.Oh[Bc](),b.Xb.Ud=
f.Ud,b.Xb.pd=f.pd,b.Xb.cd=b.cd+d,b.Xb.dd=b.dd+d,a=Dj(b.Xb.Ud-90),c=Dj(b.Xb.pd-90),b.Xb.kf=Ok(b.Xb.Oh,QV(a,b.Xb.cd,b.Xb.dd)),b.Xb.Hh=Ok(b.Xb.Oh,QV(c,b.Xb.cd,b.Xb.dd)));b.Ct=e.Ct;b.nw=e.nw;if(b.Ct||b.nw)b.WL=rn(e.WL.cb(),.3),b.Fla=b.Ct?a:c,e=function(a,b){return Ok(a.Oh,QV(a.Fla,a.cd+b*a.brush.Nb/2,a.dd+b*a.brush.Nb/2))},b.oA=e(b,-1),b.eM=e(b,1)}}
function $Za(a,b,c){var d=a.pie;0<d.Dz||(a=a.l[b],null!=a[uy]&&(b=C0(c,b),b.Ji={},b=b.Ji,b.brush=sn(a.brush.cb(),2),b.Oh=new Kk(d[Sx].x+a[uy].x,d[Sx].y+a[uy].y),b.Ud=a.Ud,b.pd=a.pd,b.$q=a.$q,a=a.brush.Nb/2+2.5+b.brush.Nb/2,b.cd=d.cd+a,b.dd=d.dd+a,d=Dj(b.pd-90),b.kf=Ok(b.Oh,QV(Dj(b.Ud-90),b.cd,b.dd)),b.Hh=Ok(b.Oh,QV(d,b.cd,b.dd))))}function a_a(a,b,c){var d=C0(b.Gt,c);c=yW(a.Tn,b,c,null,null);d.sb=c;b.Ak&&a.se.Bs(c,b.Ak,d.sb)}

    function b_a(a, b, c, d) {
        var e = C0(b.Gt, d);
        c = pNa(a.Tn, b, c, d);
        e.sb = c;
        b.Ak && a.se.Bs(c, b.Ak, e.sb)
    }

    function hX(a) {
        gX[L](this, a);
        this.Nd(pI)
    }

    Y(hX, gX);
    W = hX[K];
    W.mga = function () {
    };
    W.VL = function (a, b, c, d, e) {
        return new x0(a, b, c, d, e)
    };
    W.PV = function (a, b, c, d, e, f, g) {
        return new B0(a, b, c, d, e, f, g)
    };
    W.D1 = function (a, b, c) {
        return new A0(a, b, c)
    };
    W.nM = function (a, b) {
        return new u0(a, b)
    };
    W.Uv = function (a, b) {
        return iX(a, b)
    };
    di("google.visualization.CoreChart", gX, void 0);
    aq(gX[K], gX[K][br]);
    gX[K].getImageURI = gX[K].kk;
    xx(gX[K], gX[K][hA]);
    Cw(gX[K], gX[K][qy]);
    gX[K].dump = gX[K].dump;
    gX[K].clearChart = gX[K].Zf;
    gX[K].getChartLayoutInterface = gX[K].jp;
    gX[K].getContainer = gX[K].pc;
    gX[K].setAction = gX[K].dj;
    gX[K].getAction = gX[K].oh;
    gX[K].removeAction = gX[K].cj;
    di(Sua, mX, void 0);
    aq(mX[K], mX[K][br]);
    mX[K].getImageURI = mX[K].kk;
    xx(mX[K], mX[K][hA]);
    Cw(mX[K], mX[K][qy]);
    mX[K].setAction = mX[K].dj;
    mX[K].getAction = mX[K].oh;
    mX[K].removeAction = mX[K].cj;
    di(Tua, sX, void 0);
    sX[K].computeDiff = sX[K].Uv;
    aq(sX[K], sX[K][br]);
    sX[K].getImageURI = sX[K].kk;
    xx(sX[K], sX[K][hA]);
    Cw(sX[K], sX[K][qy]);
    sX[K].setAction = sX[K].dj;
    sX[K].getAction = sX[K].oh;
    sX[K].removeAction = sX[K].cj;
    di("google.visualization.BubbleChart", rX, void 0);
    aq(rX[K], rX[K][br]);
    rX[K].getImageURI = rX[K].kk;
    xx(rX[K], rX[K][hA]);
    Cw(rX[K], rX[K][qy]);
    rX[K].setAction = rX[K].dj;
    rX[K].getAction = rX[K].oh;
    rX[K].removeAction = rX[K].cj;
    di("google.visualization.CandlestickChart", tX, void 0);
aq(tX[K],tX[K][br]);tX[K].getImageURI=tX[K].kk;xx(tX[K],tX[K][hA]);Cw(tX[K],tX[K][qy]);tX[K].setAction=tX[K].dj;tX[K].getAction=tX[K].oh;tX[K].removeAction=tX[K].cj;di("google.visualization.Histogram",wX,void 0);aq(wX[K],wX[K][br]);wX[K].getImageURI=wX[K].kk;xx(wX[K],wX[K][hA]);Cw(wX[K],wX[K][qy]);wX[K].setAction=wX[K].dj;wX[K].getAction=wX[K].oh;wX[K].removeAction=wX[K].cj;di(Uua,uX,void 0);uX[K].computeDiff=uX[K].Uv;aq(uX[K],uX[K][br]);uX[K].getImageURI=uX[K].kk;xx(uX[K],uX[K][hA]);Cw(uX[K],uX[K][qy]);
uX[K].setAction=uX[K].dj;uX[K].getAction=uX[K].oh;uX[K].removeAction=uX[K].cj;di("google.visualization.ComboChart",vX,void 0);aq(vX[K],vX[K][br]);vX[K].getImageURI=vX[K].kk;xx(vX[K],vX[K][hA]);Cw(vX[K],vX[K][qy]);vX[K].setAction=vX[K].dj;vX[K].getAction=vX[K].oh;vX[K].removeAction=vX[K].cj;di(Vua,pX,void 0);aq(pX[K],pX[K][br]);pX[K].getImageURI=pX[K].kk;xx(pX[K],pX[K][hA]);Cw(pX[K],pX[K][qy]);pX[K].setAction=pX[K].dj;pX[K].getAction=pX[K].oh;pX[K].removeAction=pX[K].cj;di(Wua,hX,void 0);
hX[K].computeDiff=hX[K].Uv;aq(hX[K],hX[K][br]);hX[K].getImageURI=hX[K].kk;xx(hX[K],hX[K][hA]);Cw(hX[K],hX[K][qy]);hX[K].setAction=hX[K].dj;hX[K].getAction=hX[K].oh;hX[K].removeAction=hX[K].cj;di(Xua,qX,void 0);qX[K].computeDiff=qX[K].Uv;aq(qX[K],qX[K][br]);qX[K].getImageURI=qX[K].kk;xx(qX[K],qX[K][hA]);Cw(qX[K],qX[K][qy]);qX[K].setAction=qX[K].dj;qX[K].getAction=qX[K].oh;qX[K].removeAction=qX[K].cj;di("google.visualization.SparklineChart",oX,void 0);aq(oX[K],oX[K][br]);oX[K].getImageURI=oX[K].kk;
    xx(oX[K], oX[K][hA]);
    Cw(oX[K], oX[K][qy]);
    oX[K].setAction = oX[K].dj;
    oX[K].getAction = oX[K].oh;
    oX[K].removeAction = oX[K].cj;
    di("google.visualization.SteppedAreaChart", nX, void 0);
    aq(nX[K], nX[K][br]);
    nX[K].getImageURI = nX[K].kk;
    xx(nX[K], nX[K][hA]);
    Cw(nX[K], nX[K][qy]);
    nX[K].setAction = nX[K].dj;
    nX[K].getAction = nX[K].oh;
    nX[K].removeAction = nX[K].cj;
    di("google.visualization.RangeSelector", xX, void 0);
    aq(xX[K], xX[K][br]);
    xX[K].getRange = xX[K].mQ;
    xX[K].setRange = xX[K].Uva;
    window.google && window.google.loader && window.google.loader.eval && window.google.loader.eval.visualization && (window.google.loader.eval.visualization = function () {
        eval(arguments[0])
    });
    google.load('visualization', '1', {packages: ['corechart', 'gauge', 'default', 'format', 'ui', 'table']});
google.loader.loaded({"module":"visualization","version":"1.0","components":["ui","corechart","default","gauge","format"]});
google.loader.eval.visualization = function() {eval(arguments[0]);};if (google.loader.eval.scripts && google.loader.eval.scripts['visualization']) {(function() {var scripts = google.loader.eval.scripts['visualization'];for (var i = 0; i < scripts.length; i++) {google.loader.eval.visualization(scripts[i]);}})();google.loader.eval.scripts['visualization'] = null;}})();
