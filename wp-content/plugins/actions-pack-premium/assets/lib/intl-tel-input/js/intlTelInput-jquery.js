(function(e){"object"==typeof module&&module.exports?module.exports=e(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],function(t){e(t)}):e(jQuery)})(function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var a,n=0;n<t.length;n++)a=t[n],a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}function n(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}for(var o,l=[["Afghanistan (\u202B\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646\u202C\u200E)","af","93"],["Albania (Shqip\xEBri)","al","355"],["Algeria (\u202B\u0627\u0644\u062C\u0632\u0627\u0626\u0631\u202C\u200E)","dz","213"],["American Samoa","as","1",5,["684"]],["Andorra","ad","376"],["Angola","ao","244"],["Anguilla","ai","1",6,["264"]],["Antigua and Barbuda","ag","1",7,["268"]],["Argentina","ar","54"],["Armenia (\u0540\u0561\u0575\u0561\u057D\u057F\u0561\u0576)","am","374"],["Aruba","aw","297"],["Australia","au","61",0],["Austria (\xD6sterreich)","at","43"],["Azerbaijan (Az\u0259rbaycan)","az","994"],["Bahamas","bs","1",8,["242"]],["Bahrain (\u202B\u0627\u0644\u0628\u062D\u0631\u064A\u0646\u202C\u200E)","bh","973"],["Bangladesh (\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6)","bd","880"],["Barbados","bb","1",9,["246"]],["Belarus (\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C)","by","375"],["Belgium (Belgi\xEB)","be","32"],["Belize","bz","501"],["Benin (B\xE9nin)","bj","229"],["Bermuda","bm","1",10,["441"]],["Bhutan (\u0F60\u0F56\u0FB2\u0F74\u0F42)","bt","975"],["Bolivia","bo","591"],["Bosnia and Herzegovina (\u0411\u043E\u0441\u043D\u0430 \u0438 \u0425\u0435\u0440\u0446\u0435\u0433\u043E\u0432\u0438\u043D\u0430)","ba","387"],["Botswana","bw","267"],["Brazil (Brasil)","br","55"],["British Indian Ocean Territory","io","246"],["British Virgin Islands","vg","1",11,["284"]],["Brunei","bn","673"],["Bulgaria (\u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F)","bg","359"],["Burkina Faso","bf","226"],["Burundi (Uburundi)","bi","257"],["Cambodia (\u1780\u1798\u17D2\u1796\u17BB\u1787\u17B6)","kh","855"],["Cameroon (Cameroun)","cm","237"],["Canada","ca","1",1,["204","226","236","249","250","289","306","343","365","387","403","416","418","431","437","438","450","506","514","519","548","579","581","587","604","613","639","647","672","705","709","742","778","780","782","807","819","825","867","873","902","905"]],["Cape Verde (Kabu Verdi)","cv","238"],["Caribbean Netherlands","bq","599",1,["3","4","7"]],["Cayman Islands","ky","1",12,["345"]],["Central African Republic (R\xE9publique centrafricaine)","cf","236"],["Chad (Tchad)","td","235"],["Chile","cl","56"],["China (\u4E2D\u56FD)","cn","86"],["Christmas Island","cx","61",2],["Cocos (Keeling) Islands","cc","61",1],["Colombia","co","57"],["Comoros (\u202B\u062C\u0632\u0631 \u0627\u0644\u0642\u0645\u0631\u202C\u200E)","km","269"],["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)","cd","243"],["Congo (Republic) (Congo-Brazzaville)","cg","242"],["Cook Islands","ck","682"],["Costa Rica","cr","506"],["C\xF4te d\u2019Ivoire","ci","225"],["Croatia (Hrvatska)","hr","385"],["Cuba","cu","53"],["Cura\xE7ao","cw","599",0],["Cyprus (\u039A\u03CD\u03C0\u03C1\u03BF\u03C2)","cy","357"],["Czech Republic (\u010Cesk\xE1 republika)","cz","420"],["Denmark (Danmark)","dk","45"],["Djibouti","dj","253"],["Dominica","dm","1",13,["767"]],["Dominican Republic (Rep\xFAblica Dominicana)","do","1",2,["809","829","849"]],["Ecuador","ec","593"],["Egypt (\u202B\u0645\u0635\u0631\u202C\u200E)","eg","20"],["El Salvador","sv","503"],["Equatorial Guinea (Guinea Ecuatorial)","gq","240"],["Eritrea","er","291"],["Estonia (Eesti)","ee","372"],["Ethiopia","et","251"],["Falkland Islands (Islas Malvinas)","fk","500"],["Faroe Islands (F\xF8royar)","fo","298"],["Fiji","fj","679"],["Finland (Suomi)","fi","358",0],["France","fr","33"],["French Guiana (Guyane fran\xE7aise)","gf","594"],["French Polynesia (Polyn\xE9sie fran\xE7aise)","pf","689"],["Gabon","ga","241"],["Gambia","gm","220"],["Georgia (\u10E1\u10D0\u10E5\u10D0\u10E0\u10D7\u10D5\u10D4\u10DA\u10DD)","ge","995"],["Germany (Deutschland)","de","49"],["Ghana (Gaana)","gh","233"],["Gibraltar","gi","350"],["Greece (\u0395\u03BB\u03BB\u03AC\u03B4\u03B1)","gr","30"],["Greenland (Kalaallit Nunaat)","gl","299"],["Grenada","gd","1",14,["473"]],["Guadeloupe","gp","590",0],["Guam","gu","1",15,["671"]],["Guatemala","gt","502"],["Guernsey","gg","44",1,["1481","7781","7839","7911"]],["Guinea (Guin\xE9e)","gn","224"],["Guinea-Bissau (Guin\xE9 Bissau)","gw","245"],["Guyana","gy","592"],["Haiti","ht","509"],["Honduras","hn","504"],["Hong Kong (\u9999\u6E2F)","hk","852"],["Hungary (Magyarorsz\xE1g)","hu","36"],["Iceland (\xCDsland)","is","354"],["India (\u092D\u093E\u0930\u0924)","in","91"],["Indonesia","id","62"],["Iran (\u202B\u0627\u06CC\u0631\u0627\u0646\u202C\u200E)","ir","98"],["Iraq (\u202B\u0627\u0644\u0639\u0631\u0627\u0642\u202C\u200E)","iq","964"],["Ireland","ie","353"],["Isle of Man","im","44",2,["1624","74576","7524","7924","7624"]],["Israel (\u202B\u05D9\u05E9\u05E8\u05D0\u05DC\u202C\u200E)","il","972"],["Italy (Italia)","it","39",0],["Jamaica","jm","1",4,["876","658"]],["Japan (\u65E5\u672C)","jp","81"],["Jersey","je","44",3,["1534","7509","7700","7797","7829","7937"]],["Jordan (\u202B\u0627\u0644\u0623\u0631\u062F\u0646\u202C\u200E)","jo","962"],["Kazakhstan (\u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D)","kz","7",1,["33","7"]],["Kenya","ke","254"],["Kiribati","ki","686"],["Kosovo","xk","383"],["Kuwait (\u202B\u0627\u0644\u0643\u0648\u064A\u062A\u202C\u200E)","kw","965"],["Kyrgyzstan (\u041A\u044B\u0440\u0433\u044B\u0437\u0441\u0442\u0430\u043D)","kg","996"],["Laos (\u0EA5\u0EB2\u0EA7)","la","856"],["Latvia (Latvija)","lv","371"],["Lebanon (\u202B\u0644\u0628\u0646\u0627\u0646\u202C\u200E)","lb","961"],["Lesotho","ls","266"],["Liberia","lr","231"],["Libya (\u202B\u0644\u064A\u0628\u064A\u0627\u202C\u200E)","ly","218"],["Liechtenstein","li","423"],["Lithuania (Lietuva)","lt","370"],["Luxembourg","lu","352"],["Macau (\u6FB3\u9580)","mo","853"],["Macedonia (FYROM) (\u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0438\u0458\u0430)","mk","389"],["Madagascar (Madagasikara)","mg","261"],["Malawi","mw","265"],["Malaysia","my","60"],["Maldives","mv","960"],["Mali","ml","223"],["Malta","mt","356"],["Marshall Islands","mh","692"],["Martinique","mq","596"],["Mauritania (\u202B\u0645\u0648\u0631\u064A\u062A\u0627\u0646\u064A\u0627\u202C\u200E)","mr","222"],["Mauritius (Moris)","mu","230"],["Mayotte","yt","262",1,["269","639"]],["Mexico (M\xE9xico)","mx","52"],["Micronesia","fm","691"],["Moldova (Republica Moldova)","md","373"],["Monaco","mc","377"],["Mongolia (\u041C\u043E\u043D\u0433\u043E\u043B)","mn","976"],["Montenegro (Crna Gora)","me","382"],["Montserrat","ms","1",16,["664"]],["Morocco (\u202B\u0627\u0644\u0645\u063A\u0631\u0628\u202C\u200E)","ma","212",0],["Mozambique (Mo\xE7ambique)","mz","258"],["Myanmar (Burma) (\u1019\u103C\u1014\u103A\u1019\u102C)","mm","95"],["Namibia (Namibi\xEB)","na","264"],["Nauru","nr","674"],["Nepal (\u0928\u0947\u092A\u093E\u0932)","np","977"],["Netherlands (Nederland)","nl","31"],["New Caledonia (Nouvelle-Cal\xE9donie)","nc","687"],["New Zealand","nz","64"],["Nicaragua","ni","505"],["Niger (Nijar)","ne","227"],["Nigeria","ng","234"],["Niue","nu","683"],["Norfolk Island","nf","672"],["North Korea (\uC870\uC120 \uBBFC\uC8FC\uC8FC\uC758 \uC778\uBBFC \uACF5\uD654\uAD6D)","kp","850"],["Northern Mariana Islands","mp","1",17,["670"]],["Norway (Norge)","no","47",0],["Oman (\u202B\u0639\u064F\u0645\u0627\u0646\u202C\u200E)","om","968"],["Pakistan (\u202B\u067E\u0627\u06A9\u0633\u062A\u0627\u0646\u202C\u200E)","pk","92"],["Palau","pw","680"],["Palestine (\u202B\u0641\u0644\u0633\u0637\u064A\u0646\u202C\u200E)","ps","970"],["Panama (Panam\xE1)","pa","507"],["Papua New Guinea","pg","675"],["Paraguay","py","595"],["Peru (Per\xFA)","pe","51"],["Philippines","ph","63"],["Poland (Polska)","pl","48"],["Portugal","pt","351"],["Puerto Rico","pr","1",3,["787","939"]],["Qatar (\u202B\u0642\u0637\u0631\u202C\u200E)","qa","974"],["R\xE9union (La R\xE9union)","re","262",0],["Romania (Rom\xE2nia)","ro","40"],["Russia (\u0420\u043E\u0441\u0441\u0438\u044F)","ru","7",0],["Rwanda","rw","250"],["Saint Barth\xE9lemy","bl","590",1],["Saint Helena","sh","290"],["Saint Kitts and Nevis","kn","1",18,["869"]],["Saint Lucia","lc","1",19,["758"]],["Saint Martin (Saint-Martin (partie fran\xE7aise))","mf","590",2],["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)","pm","508"],["Saint Vincent and the Grenadines","vc","1",20,["784"]],["Samoa","ws","685"],["San Marino","sm","378"],["S\xE3o Tom\xE9 and Pr\xEDncipe (S\xE3o Tom\xE9 e Pr\xEDncipe)","st","239"],["Saudi Arabia (\u202B\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629\u202C\u200E)","sa","966"],["Senegal (S\xE9n\xE9gal)","sn","221"],["Serbia (\u0421\u0440\u0431\u0438\u0458\u0430)","rs","381"],["Seychelles","sc","248"],["Sierra Leone","sl","232"],["Singapore","sg","65"],["Sint Maarten","sx","1",21,["721"]],["Slovakia (Slovensko)","sk","421"],["Slovenia (Slovenija)","si","386"],["Solomon Islands","sb","677"],["Somalia (Soomaaliya)","so","252"],["South Africa","za","27"],["South Korea (\uB300\uD55C\uBBFC\uAD6D)","kr","82"],["South Sudan (\u202B\u062C\u0646\u0648\u0628 \u0627\u0644\u0633\u0648\u062F\u0627\u0646\u202C\u200E)","ss","211"],["Spain (Espa\xF1a)","es","34"],["Sri Lanka (\u0DC1\u0DCA\u200D\u0DBB\u0DD3 \u0DBD\u0D82\u0D9A\u0DCF\u0DC0)","lk","94"],["Sudan (\u202B\u0627\u0644\u0633\u0648\u062F\u0627\u0646\u202C\u200E)","sd","249"],["Suriname","sr","597"],["Svalbard and Jan Mayen","sj","47",1,["79"]],["Swaziland","sz","268"],["Sweden (Sverige)","se","46"],["Switzerland (Schweiz)","ch","41"],["Syria (\u202B\u0633\u0648\u0631\u064A\u0627\u202C\u200E)","sy","963"],["Taiwan (\u53F0\u7063)","tw","886"],["Tajikistan","tj","992"],["Tanzania","tz","255"],["Thailand (\u0E44\u0E17\u0E22)","th","66"],["Timor-Leste","tl","670"],["Togo","tg","228"],["Tokelau","tk","690"],["Tonga","to","676"],["Trinidad and Tobago","tt","1",22,["868"]],["Tunisia (\u202B\u062A\u0648\u0646\u0633\u202C\u200E)","tn","216"],["Turkey (T\xFCrkiye)","tr","90"],["Turkmenistan","tm","993"],["Turks and Caicos Islands","tc","1",23,["649"]],["Tuvalu","tv","688"],["U.S. Virgin Islands","vi","1",24,["340"]],["Uganda","ug","256"],["Ukraine (\u0423\u043A\u0440\u0430\u0457\u043D\u0430)","ua","380"],["United Arab Emirates (\u202B\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062A \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0645\u062A\u062D\u062F\u0629\u202C\u200E)","ae","971"],["United Kingdom","gb","44",0],["United States","us","1",0],["Uruguay","uy","598"],["Uzbekistan (O\u02BBzbekiston)","uz","998"],["Vanuatu","vu","678"],["Vatican City (Citt\xE0 del Vaticano)","va","39",1,["06698"]],["Venezuela","ve","58"],["Vietnam (Vi\u1EC7t Nam)","vn","84"],["Wallis and Futuna (Wallis-et-Futuna)","wf","681"],["Western Sahara (\u202B\u0627\u0644\u0635\u062D\u0631\u0627\u0621 \u0627\u0644\u063A\u0631\u0628\u064A\u0629\u202C\u200E)","eh","212",1,["5288","5289"]],["Yemen (\u202B\u0627\u0644\u064A\u0645\u0646\u202C\u200E)","ye","967"],["Zambia","zm","260"],["Zimbabwe","zw","263"],["\xC5land Islands","ax","358",1,["18"]]],r=0;r<l.length;r++)o=l[r],l[r]={name:o[0],iso2:o[1],dialCode:o[2],priority:o[3]||0,areaCodes:o[4]||null};var s={getInstance:function(e){var t=e.getAttribute("data-intl-tel-input-id");return window.intlTelInputGlobals.instances[t]},instances:{}};"object"==typeof window&&(window.intlTelInputGlobals=s);var d=0,u={allowDropdown:!0,autoHideDialCode:!0,autoPlaceholder:"polite",customContainer:"",customPlaceholder:null,dropdownContainer:null,excludeCountries:[],formatOnDisplay:!0,geoIpLookup:null,hiddenInput:"",initialCountry:"",localizedCountries:null,nationalMode:!0,onlyCountries:[],placeholderNumberType:"MOBILE",preferredCountries:["us","gb"],separateDialCode:!1,utilsScript:""},p=["800","822","833","844","855","866","877","880","881","882","883","884","885","886","887","888","889"];"object"==typeof window&&window.addEventListener("load",function(){window.intlTelInputGlobals.windowLoaded=!0});var y=function(e,t){for(var a=Object.keys(e),n=0;n<a.length;n++)t(a[n],e[a[n]])},g=function(e){y(window.intlTelInputGlobals.instances,function(t){window.intlTelInputGlobals.instances[t][e]()})},C=function(){function e(a,n){var i=this;t(this,e),this.id=d++,this.telInput=a,this.activeItem=null,this.highlightedItem=null;var o=n||{};this.options={},y(u,function(e,t){i.options[e]=o.hasOwnProperty(e)?o[e]:t}),this.hadInitialPlaceholder=!!a.getAttribute("placeholder")}return n(e,[{key:"_init",value:function(){var e=this;if(this.options.nationalMode&&(this.options.autoHideDialCode=!1),this.options.separateDialCode&&(this.options.autoHideDialCode=this.options.nationalMode=!1),this.isMobile=/Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),this.isMobile&&(document.body.classList.add("iti-mobile"),!this.options.dropdownContainer&&(this.options.dropdownContainer=document.body)),"undefined"!=typeof Promise){var t=new Promise(function(t,a){e.resolveAutoCountryPromise=t,e.rejectAutoCountryPromise=a}),a=new Promise(function(t,a){e.resolveUtilsScriptPromise=t,e.rejectUtilsScriptPromise=a});this.promise=Promise.all([t,a])}else this.resolveAutoCountryPromise=this.rejectAutoCountryPromise=function(){},this.resolveUtilsScriptPromise=this.rejectUtilsScriptPromise=function(){};this.selectedCountryData={},this._processCountryData(),this._generateMarkup(),this._setInitialState(),this._initListeners(),this._initRequests()}},{key:"_processCountryData",value:function(){this._processAllCountries(),this._processCountryCodes(),this._processPreferredCountries(),this.options.localizedCountries&&this._translateCountriesByLocale(),(this.options.onlyCountries.length||this.options.localizedCountries)&&this.countries.sort(this._countryNameSort)}},{key:"_addCountryCode",value:function(e,t,a){t.length>this.dialCodeMaxLen&&(this.dialCodeMaxLen=t.length),this.countryCodes.hasOwnProperty(t)||(this.countryCodes[t]=[]);for(var n=0;n<this.countryCodes[t].length;n++)if(this.countryCodes[t][n]===e)return;var o=void 0===a?this.countryCodes[t].length:a;this.countryCodes[t][o]=e}},{key:"_processAllCountries",value:function(){if(this.options.onlyCountries.length){var e=this.options.onlyCountries.map(function(e){return e.toLowerCase()});this.countries=l.filter(function(t){return-1<e.indexOf(t.iso2)})}else if(this.options.excludeCountries.length){var t=this.options.excludeCountries.map(function(e){return e.toLowerCase()});this.countries=l.filter(function(e){return-1===t.indexOf(e.iso2)})}else this.countries=l}},{key:"_translateCountriesByLocale",value:function(){for(var e,t=0;t<this.countries.length;t++)e=this.countries[t].iso2.toLowerCase(),this.options.localizedCountries.hasOwnProperty(e)&&(this.countries[t].name=this.options.localizedCountries[e])}},{key:"_countryNameSort",value:function(e,t){return e.name.localeCompare(t.name)}},{key:"_processCountryCodes",value:function(){this.dialCodeMaxLen=0,this.countryCodes={};for(var e,t=0;t<this.countries.length;t++)e=this.countries[t],this._addCountryCode(e.iso2,e.dialCode,e.priority);for(var a,n=0;n<this.countries.length;n++)if(a=this.countries[n],a.areaCodes)for(var o,l=this.countryCodes[a.dialCode][0],r=0;r<a.areaCodes.length;r++){o=a.areaCodes[r];for(var s,d=1;d<o.length;d++)s=a.dialCode+o.substr(0,d),this._addCountryCode(l,s),this._addCountryCode(a.iso2,s);this._addCountryCode(a.iso2,a.dialCode+o)}}},{key:"_processPreferredCountries",value:function(){this.preferredCountries=[];for(var e=0;e<this.options.preferredCountries.length;e++){var t=this.options.preferredCountries[e].toLowerCase(),a=this._getCountryData(t,!1,!0);a&&this.preferredCountries.push(a)}}},{key:"_createEl",value:function(e,t,a){var n=document.createElement(e);return t&&y(t,function(e,t){return n.setAttribute(e,t)}),a&&a.appendChild(n),n}},{key:"_generateMarkup",value:function(){this.telInput.hasAttribute("autocomplete")||this.telInput.form&&this.telInput.form.hasAttribute("autocomplete")||this.telInput.setAttribute("autocomplete","off");var e="iti";this.options.allowDropdown&&(e+=" iti--allow-dropdown"),this.options.separateDialCode&&(e+=" iti--separate-dial-code"),this.options.customContainer&&(e+=" ",e+=this.options.customContainer);var t=this._createEl("div",{class:e});if(this.telInput.parentNode.insertBefore(t,this.telInput),this.flagsContainer=this._createEl("div",{class:"iti__flag-container"},t),t.appendChild(this.telInput),this.selectedFlag=this._createEl("div",{class:"iti__selected-flag",role:"combobox","aria-owns":"iti-".concat(this.id,"__country-listbox"),"aria-expanded":"false"},this.flagsContainer),this.selectedFlagInner=this._createEl("div",{class:"iti__flag"},this.selectedFlag),this.options.separateDialCode&&(this.selectedDialCode=this._createEl("div",{class:"iti__selected-dial-code"},this.selectedFlag)),this.options.allowDropdown&&(this.selectedFlag.setAttribute("tabindex","0"),this.dropdownArrow=this._createEl("div",{class:"iti__arrow"},this.selectedFlag),this.countryList=this._createEl("ul",{class:"iti__country-list iti__hide",id:"iti-".concat(this.id,"__country-listbox"),role:"listbox"}),this.preferredCountries.length&&(this._appendListItems(this.preferredCountries,"iti__preferred",!0),this._createEl("li",{class:"iti__divider",role:"separator","aria-disabled":"true"},this.countryList)),this._appendListItems(this.countries,"iti__standard"),this.options.dropdownContainer?(this.dropdown=this._createEl("div",{class:"iti iti--container"}),this.dropdown.appendChild(this.countryList)):this.flagsContainer.appendChild(this.countryList)),this.options.hiddenInput){var a=this.options.hiddenInput,n=this.telInput.getAttribute("name");if(n){var o=n.lastIndexOf("[");-1!==o&&(a="".concat(n.substr(0,o),"[").concat(a,"]"))}this.hiddenInput=this._createEl("input",{type:"hidden",name:a}),t.appendChild(this.hiddenInput)}}},{key:"_appendListItems",value:function(e,t,a){for(var n="",o=0;o<e.length;o++){var l=e[o],r=a?"-preferred":"";n+="<li class='iti__country ".concat(t,"' tabIndex='-1' id='iti-").concat(this.id,"__item-").concat(l.iso2).concat(r,"' role='option' data-dial-code='").concat(l.dialCode,"' data-country-code='").concat(l.iso2,"'>"),n+="<div class='iti__flag-box'><div class='iti__flag iti__".concat(l.iso2,"'></div></div>"),n+="<span class='iti__country-name'>".concat(l.name,"</span>"),n+="<span class='iti__dial-code'>+".concat(l.dialCode,"</span>"),n+="</li>"}this.countryList.insertAdjacentHTML("beforeend",n)}},{key:"_setInitialState",value:function(){var e=this.telInput.value,t=this._getDialCode(e),a=this._isRegionlessNanp(e),n=this.options,i=n.initialCountry,o=n.nationalMode,l=n.autoHideDialCode,r=n.separateDialCode;t&&!a?this._updateFlagFromNumber(e):"auto"!==i&&(i?this._setFlag(i.toLowerCase()):t&&a?this._setFlag("us"):(this.defaultCountry=this.preferredCountries.length?this.preferredCountries[0].iso2:this.countries[0].iso2,!e&&this._setFlag(this.defaultCountry)),!e&&!o&&!l&&!r&&(this.telInput.value="+".concat(this.selectedCountryData.dialCode))),e&&this._updateValFromNumber(e)}},{key:"_initListeners",value:function(){this._initKeyListeners(),this.options.autoHideDialCode&&this._initBlurListeners(),this.options.allowDropdown&&this._initDropdownListeners(),this.hiddenInput&&this._initHiddenInputListener()}},{key:"_initHiddenInputListener",value:function(){var e=this;this._handleHiddenInputSubmit=function(){e.hiddenInput.value=e.getNumber()},this.telInput.form&&this.telInput.form.addEventListener("submit",this._handleHiddenInputSubmit)}},{key:"_getClosestLabel",value:function(){for(var e=this.telInput;e&&"LABEL"!==e.tagName;)e=e.parentNode;return e}},{key:"_initDropdownListeners",value:function(){var t=this;this._handleLabelClick=function(a){t.countryList.classList.contains("iti__hide")?t.telInput.focus():a.preventDefault()};var a=this._getClosestLabel();a&&a.addEventListener("click",this._handleLabelClick),this._handleClickSelectedFlag=function(){!t.countryList.classList.contains("iti__hide")||t.telInput.disabled||t.telInput.readOnly||t._showDropdown()},this.selectedFlag.addEventListener("click",this._handleClickSelectedFlag),this._handleFlagsContainerKeydown=function(a){var e=t.countryList.classList.contains("iti__hide");e&&-1!==["ArrowUp","Up","ArrowDown","Down"," ","Enter"].indexOf(a.key)&&(a.preventDefault(),a.stopPropagation(),t._showDropdown()),"Tab"===a.key&&t._closeDropdown()},this.flagsContainer.addEventListener("keydown",this._handleFlagsContainerKeydown)}},{key:"_initRequests",value:function(){var e=this;this.options.utilsScript&&!window.intlTelInputUtils?window.intlTelInputGlobals.windowLoaded?window.intlTelInputGlobals.loadUtils(this.options.utilsScript):window.addEventListener("load",function(){window.intlTelInputGlobals.loadUtils(e.options.utilsScript)}):this.resolveUtilsScriptPromise(),"auto"===this.options.initialCountry?this._loadAutoCountry():this.resolveAutoCountryPromise()}},{key:"_loadAutoCountry",value:function(){window.intlTelInputGlobals.autoCountry?this.handleAutoCountry():!window.intlTelInputGlobals.startedLoadingAutoCountry&&(window.intlTelInputGlobals.startedLoadingAutoCountry=!0,"function"==typeof this.options.geoIpLookup&&this.options.geoIpLookup(function(e){window.intlTelInputGlobals.autoCountry=e.toLowerCase(),setTimeout(function(){return g("handleAutoCountry")})},function(){return g("rejectAutoCountryPromise")}))}},{key:"_initKeyListeners",value:function(){var e=this;this._handleKeyupEvent=function(){e._updateFlagFromNumber(e.telInput.value)&&e._triggerCountryChange()},this.telInput.addEventListener("keyup",this._handleKeyupEvent),this._handleClipboardEvent=function(){setTimeout(e._handleKeyupEvent)},this.telInput.addEventListener("cut",this._handleClipboardEvent),this.telInput.addEventListener("paste",this._handleClipboardEvent)}},{key:"_cap",value:function(e){var t=this.telInput.getAttribute("maxlength");return t&&e.length>t?e.substr(0,t):e}},{key:"_initBlurListeners",value:function(){var e=this;this._handleSubmitOrBlurEvent=function(){e._removeEmptyDialCode()},this.telInput.form&&this.telInput.form.addEventListener("submit",this._handleSubmitOrBlurEvent),this.telInput.addEventListener("blur",this._handleSubmitOrBlurEvent)}},{key:"_removeEmptyDialCode",value:function(){if("+"===this.telInput.value.charAt(0)){var e=this._getNumeric(this.telInput.value);e&&this.selectedCountryData.dialCode!==e||(this.telInput.value="")}}},{key:"_getNumeric",value:function(e){return e.replace(/\D/g,"")}},{key:"_trigger",value:function(t){var a=document.createEvent("Event");a.initEvent(t,!0,!0),this.telInput.dispatchEvent(a)}},{key:"_showDropdown",value:function(){this.countryList.classList.remove("iti__hide"),this.selectedFlag.setAttribute("aria-expanded","true"),this._setDropdownPosition(),this.activeItem&&(this._highlightListItem(this.activeItem,!1),this._scrollTo(this.activeItem,!0)),this._bindDropdownListeners(),this.dropdownArrow.classList.add("iti__arrow--up"),this._trigger("open:countrydropdown")}},{key:"_toggleClass",value:function(e,t,a){a&&!e.classList.contains(t)?e.classList.add(t):!a&&e.classList.contains(t)&&e.classList.remove(t)}},{key:"_setDropdownPosition",value:function(){var e=this;if(this.options.dropdownContainer&&this.options.dropdownContainer.appendChild(this.dropdown),!this.isMobile){var t=this.telInput.getBoundingClientRect(),a=window.pageYOffset||document.documentElement.scrollTop,n=t.top+a,i=this.countryList.offsetHeight,o=n+this.telInput.offsetHeight+i<a+window.innerHeight,l=n-i>a;if(this._toggleClass(this.countryList,"iti__country-list--dropup",!o&&l),this.options.dropdownContainer){var r=!o&&l?0:this.telInput.offsetHeight;this.dropdown.style.top="".concat(n+r,"px"),this.dropdown.style.left="".concat(t.left+document.body.scrollLeft,"px"),this._handleWindowScroll=function(){return e._closeDropdown()},window.addEventListener("scroll",this._handleWindowScroll)}}}},{key:"_getClosestListItem",value:function(e){for(var t=e;t&&t!==this.countryList&&!t.classList.contains("iti__country");)t=t.parentNode;return t===this.countryList?null:t}},{key:"_bindDropdownListeners",value:function(){var t=this;this._handleMouseoverCountryList=function(a){var e=t._getClosestListItem(a.target);e&&t._highlightListItem(e,!1)},this.countryList.addEventListener("mouseover",this._handleMouseoverCountryList),this._handleClickCountryList=function(a){var e=t._getClosestListItem(a.target);e&&t._selectListItem(e)},this.countryList.addEventListener("click",this._handleClickCountryList);var a=!0;this._handleClickOffToClose=function(){a||t._closeDropdown(),a=!1},document.documentElement.addEventListener("click",this._handleClickOffToClose);var n="",i=null;this._handleKeydownOnDropdown=function(a){a.preventDefault(),"ArrowUp"===a.key||"Up"===a.key||"ArrowDown"===a.key||"Down"===a.key?t._handleUpDownKey(a.key):"Enter"===a.key?t._handleEnterKey():"Escape"===a.key?t._closeDropdown():/^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(a.key)&&(i&&clearTimeout(i),n+=a.key.toLowerCase(),t._searchForCountry(n),i=setTimeout(function(){n=""},1e3))},document.addEventListener("keydown",this._handleKeydownOnDropdown)}},{key:"_handleUpDownKey",value:function(e){var t="ArrowUp"===e||"Up"===e?this.highlightedItem.previousElementSibling:this.highlightedItem.nextElementSibling;t&&(t.classList.contains("iti__divider")&&(t="ArrowUp"===e||"Up"===e?t.previousElementSibling:t.nextElementSibling),this._highlightListItem(t,!0))}},{key:"_handleEnterKey",value:function(){this.highlightedItem&&this._selectListItem(this.highlightedItem)}},{key:"_searchForCountry",value:function(e){for(var t=0;t<this.countries.length;t++)if(this._startsWith(this.countries[t].name,e)){var a=this.countryList.querySelector("#iti-".concat(this.id,"__item-").concat(this.countries[t].iso2));this._highlightListItem(a,!1),this._scrollTo(a,!0);break}}},{key:"_startsWith",value:function(e,t){return e.substr(0,t.length).toLowerCase()===t}},{key:"_updateValFromNumber",value:function(e){var t=e;if(this.options.formatOnDisplay&&window.intlTelInputUtils&&this.selectedCountryData){var a=!this.options.separateDialCode&&(this.options.nationalMode||"+"!==t.charAt(0)),n=intlTelInputUtils.numberFormat,i=n.NATIONAL,o=n.INTERNATIONAL,l=a?i:o;t=intlTelInputUtils.formatNumber(t,this.selectedCountryData.iso2,l)}t=this._beforeSetNumber(t),this.telInput.value=t}},{key:"_updateFlagFromNumber",value:function(e){var t=e,a=this.selectedCountryData.dialCode;t&&this.options.nationalMode&&"1"===a&&"+"!==t.charAt(0)&&("1"!==t.charAt(0)&&(t="1".concat(t)),t="+".concat(t)),this.options.separateDialCode&&a&&"+"!==t.charAt(0)&&(t="+".concat(a).concat(t));var n=this._getDialCode(t),i=this._getNumeric(t),o=null;if(n){var l=this.countryCodes[this._getNumeric(n)],r=-1!==l.indexOf(this.selectedCountryData.iso2)&&i.length<=n.length-1,s="1"===a&&this._isRegionlessNanp(i);if(!s&&!r)for(var d=0;d<l.length;d++)if(l[d]){o=l[d];break}}else"+"===t.charAt(0)&&i.length?o="":t&&"+"!==t||(o=this.defaultCountry);return null!==o&&this._setFlag(o)}},{key:"_isRegionlessNanp",value:function(e){var t=this._getNumeric(e);if("1"===t.charAt(0)){var a=t.substr(1,3);return-1!==p.indexOf(a)}return!1}},{key:"_highlightListItem",value:function(e,t){var a=this.highlightedItem;a&&a.classList.remove("iti__highlight"),this.highlightedItem=e,this.highlightedItem.classList.add("iti__highlight"),t&&this.highlightedItem.focus()}},{key:"_getCountryData",value:function(e,t,a){for(var n=t?l:this.countries,o=0;o<n.length;o++)if(n[o].iso2===e)return n[o];if(a)return null;throw new Error("No country data for '".concat(e,"'"))}},{key:"_setFlag",value:function(e){var t=this.selectedCountryData.iso2?this.selectedCountryData:{};this.selectedCountryData=e?this._getCountryData(e,!1,!1):{},this.selectedCountryData.iso2&&(this.defaultCountry=this.selectedCountryData.iso2),this.selectedFlagInner.setAttribute("class","iti__flag iti__".concat(e));var a=e?"".concat(this.selectedCountryData.name,": +").concat(this.selectedCountryData.dialCode):"Unknown";if(this.selectedFlag.setAttribute("title",a),this.options.separateDialCode){var n=this.selectedCountryData.dialCode?"+".concat(this.selectedCountryData.dialCode):"";this.selectedDialCode.innerHTML=n;var i=this.selectedFlag.offsetWidth||this._getHiddenSelectedFlagWidth();this.telInput.style.paddingLeft="".concat(i+6,"px")}if(this._updatePlaceholder(),this.options.allowDropdown){var o=this.activeItem;if(o&&(o.classList.remove("iti__active"),o.setAttribute("aria-selected","false")),e){var l=this.countryList.querySelector("#iti-".concat(this.id,"__item-").concat(e,"-preferred"))||this.countryList.querySelector("#iti-".concat(this.id,"__item-").concat(e));l.setAttribute("aria-selected","true"),l.classList.add("iti__active"),this.activeItem=l,this.selectedFlag.setAttribute("aria-activedescendant",l.getAttribute("id"))}}return t.iso2!==e}},{key:"_getHiddenSelectedFlagWidth",value:function(){var e=this.telInput.parentNode.cloneNode();e.style.visibility="hidden",document.body.appendChild(e);var t=this.selectedFlag.cloneNode(!0);e.appendChild(t);var a=t.offsetWidth;return e.parentNode.removeChild(e),a}},{key:"_updatePlaceholder",value:function(){var e="aggressive"===this.options.autoPlaceholder||!this.hadInitialPlaceholder&&"polite"===this.options.autoPlaceholder;if(window.intlTelInputUtils&&e){var t=intlTelInputUtils.numberType[this.options.placeholderNumberType],a=this.selectedCountryData.iso2?intlTelInputUtils.getExampleNumber(this.selectedCountryData.iso2,this.options.nationalMode,t):"";a=this._beforeSetNumber(a),"function"==typeof this.options.customPlaceholder&&(a=this.options.customPlaceholder(a,this.selectedCountryData)),this.telInput.setAttribute("placeholder",a)}}},{key:"_selectListItem",value:function(e){var t=this._setFlag(e.getAttribute("data-country-code"));this._closeDropdown(),this._updateDialCode(e.getAttribute("data-dial-code"),!0),this.telInput.focus();var a=this.telInput.value.length;this.telInput.setSelectionRange(a,a),t&&this._triggerCountryChange()}},{key:"_closeDropdown",value:function(){this.countryList.classList.add("iti__hide"),this.selectedFlag.setAttribute("aria-expanded","false"),this.dropdownArrow.classList.remove("iti__arrow--up"),document.removeEventListener("keydown",this._handleKeydownOnDropdown),document.documentElement.removeEventListener("click",this._handleClickOffToClose),this.countryList.removeEventListener("mouseover",this._handleMouseoverCountryList),this.countryList.removeEventListener("click",this._handleClickCountryList),this.options.dropdownContainer&&(!this.isMobile&&window.removeEventListener("scroll",this._handleWindowScroll),this.dropdown.parentNode&&this.dropdown.parentNode.removeChild(this.dropdown)),this._trigger("close:countrydropdown")}},{key:"_scrollTo",value:function(e,t){var a=this.countryList,n=window.pageYOffset||document.documentElement.scrollTop,i=a.offsetHeight,o=a.getBoundingClientRect().top+n,l=e.offsetHeight,r=e.getBoundingClientRect().top+n,s=r-o+a.scrollTop,d=i/2-l/2;if(r<o)t&&(s-=d),a.scrollTop=s;else if(r+l>o+i){t&&(s+=d);a.scrollTop=s-(i-l)}}},{key:"_updateDialCode",value:function(e,t){var a,n=this.telInput.value,i="+".concat(e);if("+"===n.charAt(0)){var o=this._getDialCode(n);a=o?n.replace(o,i):i}else{if(this.options.nationalMode||this.options.separateDialCode)return;if(n)a=i+n;else if(t||!this.options.autoHideDialCode)a=i;else return}this.telInput.value=a}},{key:"_getDialCode",value:function(e){var t="";if("+"===e.charAt(0))for(var a,n="",o=0;o<e.length&&(a=e.charAt(o),isNaN(parseInt(a,10))||(n+=a,this.countryCodes[n]&&(t=e.substr(0,o+1)),n.length!==this.dialCodeMaxLen));o++);return t}},{key:"_getFullNumber",value:function(){var e,t=this.telInput.value.trim(),a=this.selectedCountryData.dialCode,n=this._getNumeric(t);return e=this.options.separateDialCode&&"+"!==t.charAt(0)&&a&&n?"+".concat(a):"",e+t}},{key:"_beforeSetNumber",value:function(e){var t=e;if(this.options.separateDialCode){var a=this._getDialCode(t);if(a){a="+".concat(this.selectedCountryData.dialCode);var n=" "===t[a.length]||"-"===t[a.length]?a.length+1:a.length;t=t.substr(n)}}return this._cap(t)}},{key:"_triggerCountryChange",value:function(){this._trigger("countrychange")}},{key:"handleAutoCountry",value:function(){"auto"===this.options.initialCountry&&(this.defaultCountry=window.intlTelInputGlobals.autoCountry,!this.telInput.value&&this.setCountry(this.defaultCountry),this.resolveAutoCountryPromise())}},{key:"handleUtils",value:function(){window.intlTelInputUtils&&(this.telInput.value&&this._updateValFromNumber(this.telInput.value),this._updatePlaceholder()),this.resolveUtilsScriptPromise()}},{key:"destroy",value:function(){var e=this.telInput.form;if(this.options.allowDropdown){this._closeDropdown(),this.selectedFlag.removeEventListener("click",this._handleClickSelectedFlag),this.flagsContainer.removeEventListener("keydown",this._handleFlagsContainerKeydown);var t=this._getClosestLabel();t&&t.removeEventListener("click",this._handleLabelClick)}this.hiddenInput&&e&&e.removeEventListener("submit",this._handleHiddenInputSubmit),this.options.autoHideDialCode&&(e&&e.removeEventListener("submit",this._handleSubmitOrBlurEvent),this.telInput.removeEventListener("blur",this._handleSubmitOrBlurEvent)),this.telInput.removeEventListener("keyup",this._handleKeyupEvent),this.telInput.removeEventListener("cut",this._handleClipboardEvent),this.telInput.removeEventListener("paste",this._handleClipboardEvent),this.telInput.removeAttribute("data-intl-tel-input-id");var a=this.telInput.parentNode;a.parentNode.insertBefore(this.telInput,a),a.parentNode.removeChild(a),delete window.intlTelInputGlobals.instances[this.id]}},{key:"getExtension",value:function(){return window.intlTelInputUtils?intlTelInputUtils.getExtension(this._getFullNumber(),this.selectedCountryData.iso2):""}},{key:"getNumber",value:function(e){if(window.intlTelInputUtils){var t=this.selectedCountryData.iso2;return intlTelInputUtils.formatNumber(this._getFullNumber(),t,e)}return""}},{key:"getNumberType",value:function(){return window.intlTelInputUtils?intlTelInputUtils.getNumberType(this._getFullNumber(),this.selectedCountryData.iso2):-99}},{key:"getSelectedCountryData",value:function(){return this.selectedCountryData}},{key:"getValidationError",value:function(){if(window.intlTelInputUtils){var e=this.selectedCountryData.iso2;return intlTelInputUtils.getValidationError(this._getFullNumber(),e)}return-99}},{key:"isValidNumber",value:function(){var e=this._getFullNumber().trim(),t=this.options.nationalMode?this.selectedCountryData.iso2:"";return window.intlTelInputUtils?intlTelInputUtils.isValidNumber(e,t):null}},{key:"setCountry",value:function(e){var t=e.toLowerCase();this.selectedFlagInner.classList.contains("iti__".concat(t))||(this._setFlag(t),this._updateDialCode(this.selectedCountryData.dialCode,!1),this._triggerCountryChange())}},{key:"setNumber",value:function(e){var t=this._updateFlagFromNumber(e);this._updateValFromNumber(e),t&&this._triggerCountryChange()}},{key:"setPlaceholderNumberType",value:function(e){this.options.placeholderNumberType=e,this._updatePlaceholder()}}]),e}();s.getCountryData=function(){return l};var m=function(e,t,a){var n=document.createElement("script");n.onload=function(){g("handleUtils"),t&&t()},n.onerror=function(){g("rejectUtilsScriptPromise"),a&&a()},n.className="iti-load-utils",n.async=!0,n.src=e,document.body.appendChild(n)};s.loadUtils=function(e){if(!window.intlTelInputUtils&&!window.intlTelInputGlobals.startedLoadingUtilsScript){if(window.intlTelInputGlobals.startedLoadingUtilsScript=!0,"undefined"!=typeof Promise)return new Promise(function(t,a){return m(e,t,a)});m(e)}return null},s.defaults=u,s.version="17.0.0";e.fn.intlTelInput=function(t){var a=arguments;if(t===void 0||"object"==typeof t)return this.each(function(){if(!e.data(this,"plugin_intlTelInput")){var a=new C(this,t);a._init(),window.intlTelInputGlobals.instances[a.id]=a,e.data(this,"plugin_intlTelInput",a)}});if("string"==typeof t&&"_"!==t[0]){var n;return this.each(function(){var i=e.data(this,"plugin_intlTelInput");i instanceof C&&"function"==typeof i[t]&&(n=i[t].apply(i,Array.prototype.slice.call(a,1))),"destroy"==t&&e.data(this,"plugin_intlTelInput",null)}),void 0===n?this:n}}});