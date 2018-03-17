try
{	
	var _$JVersion = '20170824';
	var _Sauthor;
	var _Scount_iframe;
	var _Sload_time;
	var _Spage_type;
	var _Spage_pic;
	var _Spage_id;
	var _$Jformlist = '';
	var _$Jformdetails = {};
	var _$Jformfielddetails = {};
	var _$Jwebsite = _$Jpartner_website = '10000001';
	var _Spartner_website_id;
	var _Schannel_website_id;
	var _Schannel_webshop_id;
	var _Spageformjs = false;
	var _Sorder_encode_url;
	var _$Jchkdomain = '';
	if (_Scount_iframe === true)
	{
		var _$Jdocument = top.window.document;
	}
	else
	{
		var _$Jdocument = window.document;
	}
	var _$Jdocumentbody = _$Jdocument.getElementsByTagName('body')[0];
	var _$Jprotocol = _$Jdocument.location.protocol;
	var _trackDataType;
	var _trackData = _trackData || [];
	var _$Jiserror = 0;
	var _$Jerrorcode = '';
	var _$Jflashid = 'yfx_n_r_u';
	var _$Jcounturl = phpstaturl+'/phpstat/';
	var _$Jcounturl_proxy = phpstaturl+'/phpstat/';
	var _$Jmediumsource = _$Jmediumsourcefirst = _$Jkeywordsource = _$Jedmemail = _$Jkeywordkey = '';
	var _$Jstarttime = _$Jtimestart = _$Jloadtime = _$Jdowntime = _$Jgettime = (new Date()).getTime();
	window.onerror =  function(msg, url, line, column) {
		_$Jerrorcode = "msg["+msg+"]#line["+line+"]#column["+column+"]";
		return true;
    };
	if(!window.console){
        window.console = {};
    };
    if(!window.console.log){
        window.console.log = function(msg){};
    };
	function _$Junicode(s){
	   var len=s.length;
	   var rs=0;
	   for(var i=0;i<len;i++){
			  rs+= parseInt(s.charCodeAt(i)%10);
	   }
	   return rs;
	}
	function _$Jreadmapcookie(name)
	{
		var cV = end = '';
		var v = name + '=';
		if (_$Jdocument.cookie) 
		{
			var p = _$Jdocument.cookie.indexOf(v);
			if (p > -1) {
				p += v.length;
				end = _$Jdocument.cookie.indexOf(";", p);
				if (end == -1) {end = _$Jdocument.cookie.length;};
				cV = _$Jdocument.cookie.substring(p, end);
			}
			return cV;
		}
	}
	function _$Jsplitdomain(gethost)
	{
		var pattern = new Array();
		var domain  = '';
		var isdomain  = 0;
		var domainlen = 0;
		pattern['.com.cn']	= 4;
		pattern['.net.cn']	= 4;
		pattern['.gov.cn']	= 4;
		pattern['.org.cn']	= 4;
		pattern['.com']	= 3;
		pattern['.net']	= 3;
		pattern['.org']	= 3;
		pattern['.gov']	= 3;
		pattern['.cc']	= 3;
		pattern['.biz']	= 3;
		pattern['.info']= 3;
		pattern['.cn']	= 3;
		pattern['.hk']	= 3;			
		for( var dk in pattern )
		{
			if( gethost.indexOf(dk) > -1 )
			{
				isdomain = 1;
				domainlen = parseInt(pattern[dk]);
				break;
			}
		}
		if( isdomain == 1 )
		{
			var s = gethost.split('.');
			if( s.length >= (domainlen) )
			{
				s[0] = '';
				domain = (s.join('.')).substr(1);
			}
			else
			{
				domain = gethost;
			}
		}
		else
		{
			domain = gethost;
		}
		return domain;
	}
	function _$Jgetservercookie(ghostvar,gtype)
	{
		var _$Jurl = _$Jcounturl + '/getcookie.js.php';
		var _$Jobj = _$Jdocument.createElement('script');
		_$Jobj.type = 'text/javascript';
		_$Jobj.async = true;
		_$Jobj.id = 'getcookie_id';
		_$Jobj.charset = 'utf-8';
		var _$Jdurl = _$Jurl + '?website=' + _$Jwebsite + '&prefix=_$J&jsprefix=yfx_&domain=' + ghostvar + '&type=' + gtype + '&rand=' + Math.random();
		_$Jdocument.getElementsByTagName('head').item(0).appendChild(_$Jobj);
		_$Jdocument.getElementById('getcookie_id').src = _$Jdurl;
	}
	(function() {
		var CHARS = '01234567891357924680'.split('');
		Math.uuid = function (len, radix) 
		{
			var chars = CHARS, uuid = [], i;
			radix = radix || chars.length;

			if (len)
			{
				for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random()*radix)];
			}
			return uuid.join('');
		};
	})();
	function _$Jflash_cookie()
	{
		var f=0;
		var v=0;
		var swf;
		var ie = _$Juseragent.match(/msie ([\d.]+)/);
		if(ie)
		{
			try {
			swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
			if(swf) 
			{
				f=1;
				var vs=swf.GetVariable("$version");
				v=parseInt(vs.split(" ")[1].split(",")[0]);
			}
			}
			catch (e) {
			}
		}
		else
		{
			if (navigator.plugins && navigator.plugins.length > 0)
			{
				swf=navigator.plugins["Shockwave Flash"];
				if (swf)
				{
					f=1;
					var ws = swf.description.split(" ");
					for (var i = 0; i < ws.length; ++i)
					{
						if (isNaN(parseInt(ws[i]))) continue;
						v = parseInt(ws[i]);
					}
				}
			}
		}
		return {f:f,v:v};
	}	
	var _$Jrandomid = _$Jstarttime;
	var _$Juseragent = navigator.userAgent.toLowerCase();
	var _$Jtelphone = /(nokia|sony|ericsson|moto|samsung|htc|sgh|lg|sharp|philips|panasonic|alcatel|lenovo|iphone|ipod|ipad|blackberry|meizu|android|netfront|symbian|ucweb|windowsce|palm|operamini|openwave|nexusone|playstation|nintendo|symbianos|dangerhiptop|dopod|midp)/.exec(_$Juseragent);
	_$Jtelphone = _$Jtelphone === null ? '' : _$Jtelphone[0];
	var _$Jflashok = _$Jflash_cookie();
	var _$Jphpstat_func_name_flash_object;
	function _$Jdownloadflash(){

		"use strict";
		var counter = 0;	
		var alpnum = /[^a-z0-9_]/ig;

		window.phpstatCookie = function(config){
			config = config || {};
			var defaults = {
				swf_url: _$Jcounturl_proxy+'/cookie/storage.swf',
				namespace: 'namespace_phpstat',
				debug: true,
				timeout: 10,
				onready: null,
				onerror: null
			};
			var key;
			for(key in defaults){
				if(defaults.hasOwnProperty(key)){
					if(!config.hasOwnProperty(key)){
						config[key] = defaults[key];
					}
				}
			}
			function _$Jdiv(visible){
				var d = _$Jdocument.createElement('div');
					d.id = "phpstat_js_div_id_10000001";
				var s = (_$Jfgid('phpstat_js_id_10000001')||_$Jfgid('phpstat_js_id')); 
				if (s)
				{				
					d.async = true; 
					s.parentNode.insertBefore(d, s);
				}
				return d;
			}
			var swfContainer = _$Jdiv(config.debug);
			config.namespace = config.namespace.replace(alpnum, '_');
			this.config = config;		
			function _$Jfid(){
				return "phpstatCookie_" + config.namespace + "_" +  (counter++);
			}
			function _$Jfgid(id){
				return _$Jdocument.getElementById(id);
			}
			phpstatCookie[config.namespace] = this;
			
			var swfName = _$Jfid();
				
			var flashvars = "logfn=phpstatCookie." + config.namespace + ".log&amp;" + 
				"onload=phpstatCookie." + config.namespace + ".onload&amp;" + 
				"onerror=phpstatCookie." + config.namespace + ".onerror&amp;" + 
				"LSOName=" + config.namespace;
				
			swfContainer.innerHTML = '<object height="1" width="1" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + 
				swfName + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">' +
				'	<param value="' + config.swf_url + '" name="movie">' + 
				'	<param value="' + flashvars + '" name="FlashVars">' +
				'	<param value="always" name="allowScriptAccess">' +
				'	<embed height="1" align="middle" width="1" pluginspage="http://www.macromedia.com/go/getflashplayer" ' +
				'flashvars="' + flashvars + '" type="application/x-shockwave-flash" allowscriptaccess="always" quality="high" loop="false" play="true" ' +
				'name="' + swfName + '" bgcolor="#ffffff" src="' + config.swf_url + '">' +
				'</object>';
			
			this.swf = _$Jdocument[swfName] || window[swfName];
			
			this._timeout = setTimeout(function(){
				if(config.onerror){
					config.onerror();
				}
			}, config.timeout * 1000);
		};

		phpstatCookie.prototype = {
	  
			version: "1.5",
			ready: false,
			set: function(key, value){
				this._checkReady();
				this.swf.set(key, value);
			},
			get: function(key){
				this._checkReady();
				return this.swf.get(key);
			},
			getAll: function(){
				this._checkReady();
				var data = this.swf.getAll();
				if(data.__flashBugFix){
					delete data.__flashBugFix;
				}
				return data;
			},
			clear: function(key){
				this._checkReady();
				this.swf.clear(key);
			},
			_checkReady: function(){
			},
			"onload": function(){
				var that = this;
				setTimeout(function(){
				  clearTimeout(that._timeout);
				  that.ready = true;
				  that.set('__flashBugFix','1');
				  if(that.config.onready){
					that.config.onready();
				  }
				}, 0);
			},
			onerror: function(){
				clearTimeout(this._timeout);
				if(this.config.onerror){
					this.config.onerror();
				}
			}
			
		};
	}
	var _$Jisdownloadflash = 0;
	if(_$Jflashok.v >= 88 && _$Jdocument.location.hash.toString().indexOf('clickmapcode') <= -1 && typeof(_$Jdocumentbody) !== 'undefined' && _$Jtelphone === '' && _$Jreadmapcookie('yfxm') === '')
	{
		_$Jisdownloadflash = 1;
	}
	if(_$Jisdownloadflash === 1)
	{
		_$Jdownloadflash();
	}
	var _$Jclienturl = new Array();
	;
	var _$Jthehostname = _$Jdocument.location.hostname;
	var _$Jgetclienthost;
	for (_$Jgetclienthost in _$Jclienturl) {
		if (_$Jgetclienthost == _$Jthehostname) {
			_$Jcounturl_proxy = _$Jclienturl[_$Jgetclienthost];
			break
		}
	}
	var _$Jphpstat_func = function(cookietype,serverclientcookie) {
		var _$Jdoimgerr_1 = 1;
		var _$Jreferrer = _$Jdocument.referrer;
		var _$Jtitle = _$Jdocument.title;
		var _$Jhashcode = _$Jdocument.location.hash;
		var _$Jlanguage = (navigator.systemLanguage ? navigator.systemLanguage : navigator.language);
		var _$Jcolor = screen.colorDepth;
		var _$Jclientwidth = _$Jdocument.documentElement.clientWidth;
		var _$Jclientheight = _$Jdocument.documentElement.clientHeight;
		var _$Jscrollheight = _$Jdocument.documentElement.scrollHeight;
		var _$Jscreensize = screen.width + '*' + screen.height;
		var _$Jlastmodify = new Date(_$Jdocument.lastModified).getTime();
		var _$Jcookie = navigator.cookieEnabled ? 1 : 0;
		var _$Jutm_replace = ['utm_source','utm_medium','utm_campaign','utm_term','utm_content','utm_id','ca_kid','ca_source'];
		var _$Jutm_pmf_replace = ['pmf_group','pmf_medium','pmf_plan','pmf_keyword','pmf_unit','pmf_id','pmf_id','pmf_group'];
		var _$Jbdu_replace = ['hmsr','hmmd','hmpl','hmci','hmkw','hmid'];
		var _$Jbdu_pmf_replace = ['pmf_group','pmf_medium','pmf_plan','pmf_keyword','pmf_unit','pmf_id'];
		var _$Jsearchkey = ['baidu','baidu','google','yahoo','sogou','bing','youdao','soso','haosou','sm','so'];

		var _$Jkeyword = ['wd','word','q','p','query','q','q','w','q','q','q'];
		
var _$Jsearchtype = ['default','default','default','default','default','default','default','default','default','default','default'];
var _$Jkeywordrelated = ['bs','bs','','','','','lq','bs','','',''];
;
		var _$Jhostname = _$Jdocument.location.hostname + (_$Jdocument.location.port.length > 0 ? ':' + _$Jdocument.location.port : '');
		var _$Jhostname_no_port = _$Jdocument.location.hostname;
		var _$Jcounturl_logcount = _$Jcounturl_proxy + '/logcount.php';
		var _$Jfirsttime;
		var _$Jlasttime;
		var _$Jnlasttime;
		var _$Jvisittime;
		var _$Jf_l_v_ck = 0;
		var _$Jreturncount;
		var _$Jusercookie;
		var _$Jsetusercookie;
		var _$Jserusercookie;
		var _$Jusername;
		var _$Juserid;
		var _$Juserregtime;
		var _$Juserage;
		var _$Jusersex;
		var _$Jdomain = '';
		var _$Jrefid = new Array();		
		var _$Jf_l_v_time = new Array();	
		var _$Jgtd = window._trackData;
		_$Jrefid['phptag_recom_id'] = '';
		_$Jdomain	= _$Jgethost(_$Jhostname_no_port);
		_Sauthor	= _$Jtypeof(_Sauthor);
		_Spage_type	= _$Jtypeof(_Spage_type);
		_Spage_pic	= _$Jtypeof(_Spage_pic);
		_Spage_id	= _$Jtypeof(_Spage_id);
		if (typeof(_Sload_time) == 'undefined') {
			_$Jdowntime = 0
		} else {
			_$Jstarttime = parseInt(_Sload_time);
			_$Jdowntime = _$Jdowntime - parseInt(_Sload_time)
		}
		_$Jfirsttime = _$Jgettimestr('f_t_');
		if (_$Jfirsttime === '') {
			_$Jfirsttime = _$Jgettime;
			_$Jf_l_v_ck = 1;
		}
			
		if( _$Jgtd && _$Jgtd.length )
		{
			_$Jsettrack(_$Jgtd);
		}
		_$Jreturncount   = _$Jgettimestr('r_c_');
		_$Jreturncount	= _$Jreturncount === '' ? 0 : _$Jreturncount; 
		_$Jusername		= _$Jusername || (_$Jreadflashcookie('PHPSTATNULLCOOKIE') ? _$Jreadflashcookie('PHPSTATNULLCOOKIE') : (_$Jreadflashcookie('yfx_s_u_name')?_$Jreadflashcookie('yfx_s_u_name'):_$Jreadflashcookie('yfx_s_u_id')));	
		_$Juserid		= _$Juserid || (_$Jreadflashcookie('PHPSTATNULLCOOKIE') ? _$Jreadflashcookie('PHPSTATNULLCOOKIE') : (_$Jreadflashcookie('yfx_s_u_id')?_$Jreadflashcookie('yfx_s_u_id'):_$Jreadflashcookie('yfx_s_u_name')));	
		_$Juserage		= _$Juserage || (_$Jreadflashcookie('PHPSTATNULLCOOKIE') ? _$Jreadflashcookie('PHPSTATNULLCOOKIE') : _$Jreadflashcookie('yfx_s_u_age'));
		_$Juserregtime	= _$Juserregtime || (_$Jreadflashcookie('PHPSTATNULLCOOKIE') ? _$Jreadflashcookie('PHPSTATNULLCOOKIE') : _$Jreadflashcookie('yfx_s_u_reg'));	
		_$Jusersex		= _$Jusersex || (_$Jreadflashcookie('PHPSTATNULLCOOKIE') ? _$Jreadflashcookie('PHPSTATNULLCOOKIE') : _$Jreadflashcookie('yfx_s_u_sex'));
		_$Jsetusercookie	= _$Jsetusercookie || _$Jreadflashcookie('yfx_s_c_g_u_id');
		_$Jusercookie	= _$Jsetusercookie || _$Jreadflashcookie('yfx_c_g_u_id');
		_$Jserusercookie	= serverclientcookie || _$Jreadflashcookie('yfx_c_c_g_u_id');
		if( _$Jsetusercookie === '' )
		{
			if (_$Jusercookie === '' && _$Jserusercookie === '' ) {
				_$Jusercookie = _$Junique();
				_$Jsetflashcookie('yfx_c_g_u_id', _$Jusercookie, 3650, _$Jdomain, '');
			}
			if (_$Jserusercookie && _$Jserusercookie !== _$Jusercookie) {
				_$Jusercookie = _$Jserusercookie;
				_$Jsetflashcookie('yfx_c_g_u_id', _$Jserusercookie, 3650, _$Jdomain, '');
			}
		}
		else if( _$Jsetusercookie )
		{
			_$Jusercookie = '_ck_'+_$Jsetusercookie;
			_$Jserusercookie = '_ck_'+_$Jsetusercookie;
		}
		_$Jlasttime = _$Jnlasttime = _$Jgettimestr('r_t_');
		if (_$Jlasttime === '') {
			_$Jlasttime = _$Jnlasttime = _$Jgettime;
			_$Jf_l_v_ck = 1;
		}
		if (_$Jgettime - _$Jlasttime >= 43200000) {
			_$Jnlasttime = _$Jgettime;
			_$Jreturncount++;
			_$Jf_l_v_ck = 1;
		} else {
			_$Jreturncount = _$Jreturncount
		}
		_$Jvisittime = _$Jgettimestr('v_t_');
		if (_$Jvisittime === '' || (_$Jgettime - _$Jvisittime) >= 1800000) {
			_$Jvisittime = _$Jgettime;
			_$Jf_l_v_ck = 1;
		}
		if( _$Jf_l_v_ck > 0 )
		{
			_$Jf_l_v_time['0'] = 'f_t_'+_$Jfirsttime;
			_$Jf_l_v_time['1'] = 'r_t_'+_$Jnlasttime;
			_$Jf_l_v_time['2'] = 'v_t_'+_$Jvisittime;
			_$Jf_l_v_time['3'] = 'r_c_'+_$Jreturncount;
			_$Jsetflashcookie('yfx_f_l_v_t', _$Jf_l_v_time.join('__'), 3650, _$Jdomain, '');
		}
		_$Jvisittime = '_vk' + _$Jvisittime;

		function _$Jsettrack(_$Jgettd)
		{			
			for(var _$Jk in _$Jgettd)
			{
				if( !isNaN(_$Jk) )
				{
					for(var _$Jkk in _$Jgettd[_$Jk])
					{
						if( _$Jgettd[_$Jk]['0'] == 'userset' && _$Jgettd[_$Jk]['1'] == 'userid' && _$Jgettd[_$Jk]['2'].length )
						{		
							_$Juserid = _$Jgettd[_$Jk]['2'];
							_$Jsetflashcookie('yfx_s_u_id', _$Jgettd[_$Jk]['2'], 3650, _$Jdomain, '');
						}
						if( _$Jgettd[_$Jk]['0'] == 'userset' && _$Jgettd[_$Jk]['1'] == 'username' && _$Jgettd[_$Jk]['2'].length )
						{				
							_$Jusername = _$Jgettd[_$Jk]['2'];	
							_$Jsetflashcookie('yfx_s_u_name', _$Jgettd[_$Jk]['2'], 3650, _$Jdomain, '');
						}
						if( _$Jgettd[_$Jk]['0'] == 'userset' && _$Jgettd[_$Jk]['1'] == 'age' && _$Jgettd[_$Jk]['2'].length )
						{					
							_$Juserage = _$Jgettd[_$Jk]['2'];
							_$Jsetflashcookie('yfx_s_u_age', _$Jgettd[_$Jk]['2'], 3650, _$Jdomain, '');
						}
						if( _$Jgettd[_$Jk]['0'] == 'userset' && _$Jgettd[_$Jk]['1'] == 'sex' && _$Jgettd[_$Jk]['2'].length )
						{				
							_$Jusersex = _$Jgettd[_$Jk]['2'];	
							_$Jsetflashcookie('yfx_s_u_sex', _$Jgettd[_$Jk]['2'], 3650, _$Jdomain, '');
						}
						if( _$Jgettd[_$Jk]['0'] == 'userset' && _$Jgettd[_$Jk]['1'] == 'cookie' && _$Jgettd[_$Jk]['2'].length )
						{			
							_$Jsetusercookie = _$Jgettd[_$Jk]['2'];		
							_$Jsetflashcookie('yfx_s_c_g_u_id', _$Jgettd[_$Jk]['2'], 3650, _$Jdomain, '');
						}
						if( _$Jgettd[_$Jk]['0'] == 'userregtime' && _$Jgettd[_$Jk]['1'] == 'regtime' && _$Jgettd[_$Jk]['2'].length )
						{					
							_$Juserregtime = _$Jgettd[_$Jk]['2'];	
							_$Jsetflashcookie('yfx_s_u_reg', _$Jgettd[_$Jk]['2'], 3650, _$Jdomain, '');
						}
					}
				}
			}
		}
		function _$Jgethost(gethost)
		{
			var _$Jpattern = new Array();
			var _$Jisdomain  = 0;
			var _$Jdomainlen = 0;
			_$Jpattern['.com.cn']	= 4;
			_$Jpattern['.net.cn']	= 4;
			_$Jpattern['.gov.cn']	= 4;
			_$Jpattern['.org.cn']	= 4;
			_$Jpattern['.com']	= 3;
			_$Jpattern['.net']	= 3;
			_$Jpattern['.org']	= 3;
			_$Jpattern['.gov']	= 3;
			_$Jpattern['.cc']	= 3;
			_$Jpattern['.biz']	= 3;
			_$Jpattern['.info']	= 3;
			_$Jpattern['.cn']	= 3;
			_$Jpattern['.hk']	= 3;			
			for( var $dk in _$Jpattern )
			{
				if( gethost.indexOf($dk) > -1 )
				{
					_$Jisdomain = 1;
					_$Jdomainlen = parseInt(_$Jpattern[$dk]);
					break;
				}
			}
			if( _$Jdomain.length <= 0 )
			{
				if( _$Jisdomain == 1 )
				{
					var s = gethost.split('.');
					if( s.length >= (_$Jdomainlen) )
					{
						s[0] = '';
						_$Jdomain = (s.join('.')).substr(1);
					}
					else
					{
						_$Jdomain = gethost;
					}
				}
				else
				{
					_$Jdomain = gethost;
				}
				return _$Jdomain;

			}
			else
			{
				return gethost;
			}
		}
		function _$Jgt() {
			return (new Date()).getTime();
		}
		function _$Jencode(s){
			return (typeof(encodeURIComponent)=="function")?encodeURIComponent(s):escape(s);
		}
		function _$Jdecode(s){
			return (typeof(decodeURIComponent)=="function")?decodeURIComponent(s):unescape(s);
		} 
		function _$Jid(id)
		{
			return _$Jdocument.getElementById(id);
		}
		function _$Jname(name)
		{
			return _$Jdocument.getElementsByName(name);
		}
		function _$Junique() {
			var T = new Date();
			var Y = T.getYear();
			var M = T.getMonth()+1;
			var D = T.getDate();
			var H = T.getHours();
			var I = T.getMinutes();
			var S = T.getSeconds();
			var MS = T.getMilliseconds();
			Y = Y < 1900 ? Y + 1900 : Y;
			Y = (Y - 2000) <= 0 ? '10' : (Y - 2000);
			M = M < 10 ? '0'+''+M : M;
			D = D < 10 ? '0'+''+D : D;
			H = H < 10 ? '0'+''+H : H;
			I = I < 10 ? '0'+''+I : I;
			S = S < 10 ? '0'+''+S : S;
			MS = (MS + 999)+'';
			return '_ck'+Y+''+M+''+D+''+H+''+I+''+S+''+MS.substr(0,3)+''+Math.uuid(14,14);
		}
		function _$JgetYMD()
		{
			var T = new Date();
			var Y = T.getYear();
			var M = T.getMonth()+1;
			var D = T.getDate();
			Y = Y < 1900 ? Y + 1900 : Y;
			M = M < 10 ? '0'+''+M : M;
			D = D < 10 ? '0'+''+D : D;
			return Y+'-'+M+'-'+D;
		}
		function _$Jgettimestr(id)
		{
			id = id || 'f_t_';	
			var flvt_ret = '';
			var flvt_arr = _$Jreadflashcookie('yfx_f_l_v_t').split('__');
			for(var vk in flvt_arr)
			{
				var vkv = _$Jtypeof(flvt_arr[vk]);
				if(vkv && vkv.indexOf(id) > -1)
				{
					flvt_ret = vkv.replace(id, '');
				}
			}
			return flvt_ret;
		}
		function _$Jreadflashcookie(name) 
		{
			var cV = fcV = '';
			if ( !_$Jphpstat_func_name_flash_object && !_$Jcookie ) 
			{
				return 'not_support_cookie';
			}
			if (_$Jphpstat_func_name_flash_object) 
			{
				fcV = _$Jtypeof(_$Jphpstat_func_name_flash_object.get(name));
			}
			if (_$Jcookie) 
			{
				cV = _$Jtypeof(_$Jreadcookie(name));
				if( cV !== fcV && fcV )
				{
					cV = fcV;
					_$Jsetcookie(name, fcV, 3650, _$Jdomain, '');
				}
				if( fcV === '' && cV && _$Jphpstat_func_name_flash_object )
				{
					_$Jsetflashcookie(name, cV, 3650, _$Jdomain, '');
				}
			}
			return cV;
		}
		function _$Jreadcookie(name)
		{
			var cV = end = '';
			var v = 'yfx_cookie_group_'+_$Jwebsite+'=';
				v = name+'_'+_$Jwebsite+'=';
			if (_$Jcookie) 
			{
				var p = _$Jdocument.cookie.indexOf(v);
				if (p > -1) {
					p += v.length;
					end = _$Jdocument.cookie.indexOf(";", p);
					if (end == -1) {end = _$Jdocument.cookie.length;};
					cV = _$Jdecode(_$Jdocument.cookie.substring(p, end));
				}
				if( name != 'yfx_get_cookie_group' && 0 )
				cV = _$Jgetgroupcookie(cV,name);
				return _$Jtypeof(cV);
			}
			else
			{
				return 'not_support_cookie';
			}
		}
		function _$Jsetflashcookie(name, gv, h, d, t) 
		{
			if ( !_$Jphpstat_func_name_flash_object && !_$Jcookie ) 
			{
				return 'not_support_cookie';
			}
			if (_$Jphpstat_func_name_flash_object) {
				_$Jphpstat_func_name_flash_object.set(name, gv);
			}
			if (_$Jcookie)
			{
				_$Jsetcookie(name, gv, h, d, t);
			}
		}
		function _$Jsetcookie(name, gv, h, d, t) 
		{
			var v = '';
			if (_$Jcookie) {
				v = new Date(_$Jgt() + parseInt(h)*24*60*60*1000);
				v = '; expires=' + v.toGMTString();
				if( t == '' && 0 )
				{
					gv = _$Jsetgroupcookie(name, gv);
					name = 'yfx_cookie_group_'+_$Jwebsite;
				}
				name = name+'_'+_$Jwebsite;
				_$Jdocument.cookie = name + '=' + _$Jencode(gv) + v + ';domain='+d+';path=/;';
			}
			else
			{
				return 'not_support_cookie';
			}
		}
		function _$Jgetgroupcookie(jsonname,name)
		{
			var returnstr = '';
			var groupcookie = new Array();
			groupcookie = _$Jdecode(jsonname).split('|:|');
			for( var jk in groupcookie )
			{
				var gcs = _$Jtypeof(groupcookie[jk]);
				if( gcs.indexOf(name+'=') >= 0 )
				{
					returnstr = gcs.substring((name+'=').length);break;
				}
			}
			return _$Jtypeof(returnstr) || '';
		}

		function _$Jsetgroupcookie(name,value)
		{
			var jsonname = _$Jreadcookie('yfx_get_cookie_group') || '';
			if( jsonname.indexOf(name+'=') < 0 )
			{
				jsonname = jsonname + '|:|' + name + '=' + _$Jtypeof(value);
			}
			else
			{
				var groupcookie = new Array();
				groupcookie = _$Jdecode(jsonname).split('|:|');
				for( var jk in groupcookie )
				{
					groupcookie[jk] = _$Jtypeof(groupcookie[jk]);
					if( groupcookie[jk].indexOf(name+'=') >= 0 )
					{
						groupcookie[jk] = name + '=' + _$Jtypeof(value);
					}
				}
				jsonname = groupcookie.join('|:|');
			}
			return jsonname;
		}
		function _$Jtestnull(r)
		{
			if( typeof(r) === null || r === null )
			{
				return false;
			}
			else if( typeof(r) === 'undefined' || r === 'undefined' )
			{
				return false;
			}
			else
			{
				return true;
			}
		}
		function _$Jteststr(r)
		{
			if( typeof(r) === null || r === null )
			{
				return '';
			}
			else if( typeof(r) === 'undefined' || r === 'undefined' )
			{
				return '';
			}
			else if( r === '' )
			{
				return '';
			}
			else
			{
				return r;
			}
		}
		function _$Jgeturlparam(u) {
			var i = 0,j = 0;
			var h = '',p = '';
			if ((i = u.indexOf("://")) < 0 && u.length > 0) {return {h:u,p:''}};
			u = u.substring(i + 3);
			h = u.substring(0, u.indexOf('/'));
			if ((i = u.indexOf("/")) > -1) {			
				if ((j = u.indexOf('#clickmapcode=')) > -1) 
				{
					p = u.substring(i, j);
				}
				else
				{
					p = u.substring(i);
				}
			};
			return {h:h,p:p}
		}
		function _$Jgeturlkey(u,k)
		{
			var i,j,h='';
			if ((i = u.indexOf('?'+k+'=')) > -1 || (i = u.indexOf('&'+k+'=')) > -1)
			{
				h = u.substring(i+2+k.length);
				j = h.indexOf('&');
				j = j <= 0 ? h.length : j;
				{
					h = h.substring(0,j);
				}
			}
			return h;
		}
		function _$Jgetpath(p)
		{
			var i = 0;
			var h = p.substring(1);
			if ((i = h.indexOf('/')) > -1)
			{
				h = p.substring(0,(i+2));
			}
			else
			{
				h = '/';
			}
			return h;
		}
		function _$Jgetkeyword(u,b) {
			var v,dv,i, j, h, k, rk, e, ek, f, p = 10;
			u = u.toLowerCase();
			h = _$Jgeturlparam(u).h;
			if( b == '_' ){b = '';}
			for (var ii = 0; ii < _$Jsearchkey.length; ii++) {
				if (h.toLowerCase().indexOf('.'+_$Jsearchkey[ii].toLowerCase()+'.') > -1) {
					if ((i = u.indexOf('?' + _$Jkeyword[ii] + '=')) > -1 || (i = u.indexOf('&' + _$Jkeyword[ii] + '=')) > -1) {
						k = u.substring(i + _$Jkeyword[ii].length + 2);
						if(_$Jsearchtype[ii]=='default')
						{_$Jkeywordsource = _$Jsearchkey[ii]+b+'::'+k;}
						_$Jkeywordkey = k;
						v = '&KW=' + k + '&WC=' + _$Jsearchtype[ii] + '&WP=' + _$Jsearchkey[ii]+b;
						if ((i = k.indexOf('&')) > -1) {
							k = k.substring(0, i);
							if(_$Jsearchtype[ii]=='default')
							{_$Jkeywordsource = _$Jsearchkey[ii]+b+'::'+k;}
							_$Jkeywordkey = k;
							v = '&KW=' + k + '&WC=' + _$Jsearchtype[ii] + '&WP=' + _$Jsearchkey[ii]+b
						}
					}
					if ((i = u.indexOf('?' + _$Jkeywordrelated[ii] + '=')) > -1 || (i = u.indexOf('&' + _$Jkeywordrelated[ii] + '=')) > -1) {
						k = u.substring(i + _$Jkeywordrelated[ii].length + 2);
						rk = '&RW=' + k;
						if ((i = k.indexOf('&')) > -1) {
							k = k.substring(0, i);
							rk = '&RW=' + k
						}
					}
				}
			};
			v = v ? v : dv;
			if (_$Jtypeof(v) === '') {return '';}
			else if (rk) {return v + rk;}
			else {return v}
		}
		function _$Jreplace_utm(s)
		{
			if( s.indexOf('pmf_plan=') <= -1 )
			{
				if( s.indexOf('utm_source=') > -1 )
				{
					for (var ii = 0; ii < _$Jutm_replace.length; ii++) {
						s = s.replace(_$Jutm_replace[ii]+'=', _$Jutm_pmf_replace[ii]+'=');
					}
				}
				else if( s.indexOf('hmsr=') > -1 )
				{
					for (var ii = 0; ii < _$Jbdu_replace.length; ii++) {
						s = s.replace(_$Jbdu_replace[ii]+'=', _$Jbdu_pmf_replace[ii]+'=');
					}
				}
			}
			return s;
		}
		function _$Jgetmap(u) {
			var c = '';
			var s = new Array();
			if (u.indexOf('#clickmapcode=') > -1) {
				c = u.substring(14);
				s = c.split('|');
				s[2] = s[2] === '' ? _$Jwebsite : s[2];
				_$Jsetcookie('yfxm', s[0], 1, _$Jdomain, '');
				_$Jsetcookie('yfxm_t', s[1], 1, _$Jdomain, '');
				_$Jsetcookie('yfxm_code', s[2], 1, _$Jdomain, '');
				_$Jsetcookie('yfxm_site', s[3], 1, _$Jdomain, '');
				_$Jsetcookie('yfxm_p', s[4], 1, _$Jdomain, '');
				_$Jsetcookie('yfxm_s_d', s[5], 1, _$Jdomain, '');
				_$Jsetcookie('yfxm_e_d', s[6], 1, _$Jdomain, '');
				_$Jsetcookie('yfxm_sv', s[7], 1, _$Jdomain, '');
				_$Jsetcookie('yfxm_p_g', s[8], 1, _$Jdomain, '');
				_$Jsetcookie('yfxm_p_c', s[9], 1, _$Jdomain, '');
				_$Jsetcookie('yfxm_c', s[10], 1, _$Jdomain, '');
				_$Jsetcookie('yfxm_e', s[11], 1, _$Jdomain, '');
				_$Jsetcookie('yfxm_o', s[12], 1, _$Jdomain, '');
				return {
					a: s[0],
					b: s[1],
					c: s[2],
					d: s[3],
					e: s[4],
					f: s[5],
					g: s[6],
					h: s[7],
					i: s[8],
					j: s[9],
					p: s[10],
					q: s[11],
					r: s[12],
					ht: s[13]||'',
					pu: s[14]||''
				}
			} else if (_$Jreadcookie('yfxm') && _$Jreadcookie('yfxm_code') && _$Jreadcookie('yfxm_site')) {
				s[0] = _$Jreadcookie('yfxm');
				s[1] = _$Jreadcookie('yfxm_t');
				s[2] = _$Jreadcookie('yfxm_code');
				s[3] = _$Jreadcookie('yfxm_site');
				s[4] = _$Jreadcookie('yfxm_p');
				s[5] = _$Jreadcookie('yfxm_s_d');
				s[6] = _$Jreadcookie('yfxm_e_d');
				s[7] = _$Jreadcookie('yfxm_sv');
				s[8] = _$Jreadcookie('yfxm_p_g');
				s[9] = _$Jreadcookie('yfxm_p_c');
				s[10] = _$Jreadcookie('yfxm_c');
				s[11] = _$Jreadcookie('yfxm_e');
				s[12] = _$Jreadcookie('yfxm_o');
				s[13] = _$Jreadcookie('yfxm_h_h');
				s[14] = _$Jreadcookie('yfxm_h_p');
				return {
					a: s[0],
					b: s[1],
					c: s[2],
					d: s[3],
					e: s[4],
					f: s[5],
					g: s[6],
					h: s[7],
					i: s[8],
					j: s[9],
					p: s[10],
					q: s[11],
					r: s[12],
					ht: s[13]||'',
					pu: s[14]||''
				}
			} else {return {
				a: '',
				b: '',
				c: '',
				d: '',
				e: '',
				f: '',
				g: '',
				h: '',
				i: '',
				j: '',
				p: '',
				q: '',
				r: '',
				ht: '',
				pu: ''
			}}
		}
		function _$Jgettag(u) {
			var c = '';
			var s = new Array();
			if (u.indexOf('#tagcontent=') > -1) {
				c = u.substring(12);
				s = c.split('|');
				return {
					a: s[0],
					b: s[1]
				}
			}
			else
			{
				return {
					a: '',
					b: ''
				}
			}
		}
		function _$Jgetpagetag(u) {
			var c = '';
			var s = new Array();
			if (u.indexOf('#pagecontent=') > -1) {
				c = u.substring(13);
				s = c.split('|');
				return {
					a: s[0],
					b: s[1],
					c: s[2]
				}
			}
			else
			{
				return {
					a: '',
					b: '',
					c: ''
				}
			}
		}
		function _$Jjsgif(gs) {
			if( _$Jis_can_record == 0 )
			{
				return;
			}
			var gif = new Image();
			gif.onload = function () {
				gif.onload = null;
				_$Jdoimgerr_1 = 1;
			};
			gif.onerror = function () {
				_$Jjsgif(gs);_$Jdoimgerr_1++;
			};
			if( _$Jdoimgerr_1 <= 2 )
			{
				gif.src = gs;
			};
		}
		function _$Jparseurl(u) {
			var p = new Array();
			u = u + '&phpstat';
			var c = u.replace(/^\?/,'').split('&');
			for (var b = 0; b < c.length; b++) {
				var e = c[b].split('=');
				p[e[0]] = e[1];
			}
			return p;
		}
		function _$Jtypeof(tp)
		{
			var rp=tp;
			if( tp === null ){rp = '';}
			else if( typeof(tp) === 'undefined' ){rp = '';}
			else if( typeof(tp) === 'object' ){rp = '';}
			else if( typeof(tp) === 'function' ){rp = '';}
			return rp;
		}
		function _$Jsetfirst(fvar, nvalue)
		{
			if( _$Jtypeof(fvar) == '' )
			{			
				_$Jsetcookie('yfx_mr_f_n', nvalue, 30, _$Jdomain, '');
			}
		}		
		var _$Jjava = 0;
		if (navigator.javaEnabled()) {_$Jjava = '1';}
		var _$Jbrowser = /(weibo|micromessenger)/.exec(_$Juseragent);
		if (!_$Jbrowser) {_$Jbrowser = /(firefox|360se|sogou|lbbrowser|bidubrowser|tencenttraveler|theworld|maxthon|opera|ucweb|konqueror|lynx|greenbrowser|netcaptor|netscape|safari|chrome)/.exec(_$Juseragent);}
		if (!_$Jbrowser) {_$Jbrowser = /(msie) ([0-9\.]*)[^;)]/.exec(_$Juseragent);}
		_$Jbrowser = _$Jbrowser === null ? 'other' : _$Jbrowser[0];
		var _$Jsystem = /(windows nt|windows|unix|linux|sunos|bsd|redhat|macintosh) ([0-9\.]*)[^;)]/.exec(_$Juseragent);
		_$Jsystem = _$Jsystem === null ? 'other' : _$Jsystem[0];
		var _$Jalexa		= (_$Juseragent.indexOf('alexa') !== -1) === false ? '0' : '1';
		var _$Jflash		= _$Jflashok.f;
		var _$Jpathname		= _$Jdocument.location.pathname;
		var _$Jpathdir		= _$Jgetpath(_$Jpathname);
		var _$Jfreferrer	= _$Jgeturlparam(_$Jreferrer);
		var _$Jfreferrerhost= _$Jfreferrer.h;
		var _$Jref			= _$Jencode(_$Jfreferrer.p);
		var _$Jmapcode		= _$Jgetmap(_$Jhashcode);
		var _$Jtagcode		= _$Jgettag(_$Jhashcode);
		var _$Jpagecode		= _$Jgetpagetag(_$Jhashcode);
		var _$Jsearch		= _$Jdocument.location.search;
		if( _$Jhashcode && 1 )
		{
			_$Jsearch		= _$Jsearch + _$Jhashcode;
		}
		_$Jpathname			= _$Jencode(_$Jpathname + _$Jsearch);
		_$Jpartner_website	= _$Jreadflashcookie('yfx_p');
		_$Jmediumsource		= _$Jreadflashcookie('yfx_mr_n');
		_$Jmediumsourcefirst	= _$Jreadflashcookie('yfx_mr_f_n');
		_$Jedmemail			= _$Jreadflashcookie('yfx_e');
		var _$Jis_can_record = 1;
		var _$Jparseurlarr	= _$Jparseurl(_$Jsearch);
		var _$Jpmf_key		= _$Jtypeof(_$Jparseurlarr['k']);
		var _$Jpmf_from		= _$Jtypeof(_$Jparseurlarr['f']);
		var _$Jpmf_key_macth = _$Jtypeof(_$Jparseurlarr['m']);
		var _$Jpmf_key_word  = _$Jtypeof(_$Jparseurlarr['w']);
		var _$Jpmf_key_id	= _$Jtypeof(_$Jparseurlarr['kid']);
		var _$Jpmf_key_tid	= _$Jtypeof(_$Jparseurlarr['tid']);
		var _$Jpmf_gclid	= _$Jtypeof(_$Jparseurlarr['gclid']);
		var _$Jpmf_bdclkid	= _$Jtypeof(_$Jparseurlarr['bdclkid']);
		var _$Jpmf_group	= _$Jtypeof(_$Jparseurlarr['pmf_group']);
		var _$Jpmf_medium	= _$Jtypeof(_$Jparseurlarr['pmf_medium']);
		var _$Jpmf_source	= _$Jtypeof(_$Jparseurlarr['pmf_source']);
		var _$Jpmf_match	= _$Jtypeof(_$Jparseurlarr['pmf_match']);
		var _$Jpmf_keyword	= _$Jtypeof(_$Jparseurlarr['pmf_keyword']);
		var _$Jpmf_advname	= _$Jtypeof(_$Jparseurlarr['pmf_advname']);
		var _$Jpmf_partner	= _$Jtypeof(_$Jparseurlarr['pmf_partner']);
		var _$Jpmf_email	= _$Jtypeof(_$Jparseurlarr['pmf_email']);
		var _$Jpmf_area		= _$Jtypeof(_$Jparseurlarr['pmf_area']);
		var _$Jpmf_id		= _$Jtypeof(_$Jparseurlarr['pmf_id']);
		var _$Jpmf_tid		= _$Jtypeof(_$Jparseurlarr['pmf_tid']);
		var _$Jpmf_plan		= _$Jtypeof(_$Jparseurlarr['pmf_plan']);
		var _$Jpmf_unit		= _$Jtypeof(_$Jparseurlarr['pmf_unit']);
		var _$Jpmf_account	= _$Jtypeof(_$Jparseurlarr['pmf_account']);
		var _$Jpmf_tui_id	= _$Jpmf_tid ? _$Jpmf_tid : _$Jpmf_key_tid;
		if (_$Jpmf_tui_id) {
			_$Jsetflashcookie('yfx_f_id', _$Jpmf_tui_id, 3650, _$Jdomain, '');
		}
		else
		{
			_$Jpmf_tui_id = _$Jreadflashcookie('yfx_f_id');
		}
		if(_$Jpagecode.a && _$Jpagecode.b && _$Jpagecode.c)
		{
			var ac = 'pageab_'+_$Jpagecode.a+'_'+_$Jpagecode.c;
			_$Jsetflashcookie('yfx_p_ab_' + _$Jpagecode.a, _$Jpagecode.c, 30, _$Jdomain, 'new');
			_trackData.push(['addclick','HTML',ac,_$Jpagecode.c]);
		}
		if (_$Jmapcode.a && _$Jmapcode.b && _$Jmapcode.c) 
		{
			_$Jis_can_record = 0;
		}
		else if ( _$Jhashcode.indexOf('#visitorplay') > -1 )
		{
			_$Jis_can_record = 0;
		}
		else if ( _$Jhashcode.indexOf('#onlinevisitor') > -1 )
		{
			_$Jis_can_record = 0;
		}
		else if ( _$Jpathname.indexOf('fromclickhot') > -1 )
		{
			_$Jis_can_record = 0;
		}
		if( _$Jpmf_medium && _$Jpmf_medium.indexOf('market_type_') <= -1 )
		{
			_$Jpmf_medium = "market_type_"+_$Jpmf_medium;
		}
		var _$Jpstac			= _$Jtypeof(_$Jparseurlarr['pstac']);
		if( ( _$Jpmf_medium && ( _$Jpmf_plan || _$Jpmf_keyword ) ) || ( ( _$Jpmf_gclid || _$Jpmf_bdclkid ) && _$Jpmf_key !== 'ppc' ) )
		{
			_$Jpmf_key = 'ppc';
		}
		var _$Jpmf_channel = _$Jpmf_medium;
		var _$Jsearchkeyword  = _$Jgetkeyword(_$Jreferrer,'_'+_$Jpmf_key);
		if (_$Jpmf_medium) {
			_$Jmediumsource = _$Jpmf_group+'::'+_$Jpmf_medium+'::'+_$Jpmf_source+'::'+(_$Jkeywordsource||'::')+'::'+_$Jpmf_match+'::'+_$Jpmf_keyword+'::'+_$Jfreferrerhost+'::'+_$Jpmf_id+'::'+_$Jpmf_advname+'::'+_$Jpmf_plan+'::'+_$Jpmf_unit+'::'+_$Jpmf_account+'::pmf_from_adv::'+_$Jhostname+_$Jpathdir;
			_$Jsetflashcookie('yfx_mr_n', _$Jmediumsource, 30, _$Jdomain, '');
			_$Jsetfirst(_$Jmediumsourcefirst, _$Jmediumsource);
			_$Jsetflashcookie('yfx_key', _$Jkeywordkey, 30, _$Jdomain, '');
		}
		else if (_$Jpmf_key && _$Jpmf_from && _$Jmediumsource.indexOf('pmf_from_adv') <= -1) {
			_$Jpmf_channel = 'market_type_paid_search';
			_$Jmediumsource = _$Jpmf_group+'::market_type_paid_search::::'+(_$Jkeywordsource||'::')+'::'+_$Jpmf_key_macth+'::'+_$Jpmf_key_word+'::'+_$Jfreferrerhost+'::'+_$Jpmf_key_id+'_'+_$Jpmf_from+'_'+_$Jpmf_key+'::pmf_from_paid_search::'+_$Jhostname+_$Jpathdir;
			_$Jsetflashcookie('yfx_mr_n', _$Jmediumsource, 30, _$Jdomain, '');
			_$Jsetfirst(_$Jmediumsourcefirst, _$Jmediumsource);
			_$Jsetflashcookie('yfx_key', _$Jkeywordkey, 30, _$Jdomain, '');
		}
		else if (_$Jkeywordsource && _$Jmediumsource.indexOf('pmf_from_adv') <= -1 && _$Jmediumsource.indexOf('pmf_from_paid_search') <= -1 && _$Jmediumsource ) {
			_$Jpmf_channel = 'market_type_free_search';
			_$Jmediumsource = _$Jpmf_group+'::market_type_free_search::::'+(_$Jkeywordsource||'::')+'::::::'+_$Jfreferrerhost+'::::pmf_from_free_search::'+_$Jhostname+_$Jpathdir;
			_$Jsetflashcookie('yfx_mr_n', _$Jmediumsource, 30, _$Jdomain, '');
			_$Jsetfirst(_$Jmediumsourcefirst, _$Jmediumsource);
			_$Jsetflashcookie('yfx_key', _$Jkeywordkey, 30, _$Jdomain, '');
		}
		_$Jkeywordkey = _$Jreadcookie('yfx_key');
		if (_$Jpmf_partner) {
			_$Jpartner_website = _$Jpmf_partner;
			_$Jsetflashcookie('yfx_p', _$Jpartner_website, 3650, _$Jdomain, '')
		}
		if (_$Jpmf_email) {
			_$Jedmemail = _$Jpmf_group+'::'+_$Jpmf_medium+'::'+_$Jpmf_plan+'::'+_$Jpmf_email+'::'+_$Jpmf_area+'::pmf_from_edm';
			_$Jsetflashcookie('yfx_e', _$Jedmemail, 3650, _$Jdomain, '')
		}
		_$Jmediumsourcefirst = _$Jmediumsourcefirst == _$Jmediumsource ? 'same' : _$Jmediumsource;
		var _$Jcourl = _$Jcounturl_logcount + '?WS=' + _$Jwebsite + '&RD=common&SWS='+_$Jteststr(_$Jpartner_website)+'&SWSID='+_$Jteststr(_Schannel_website_id)+'&SWSPID='+_$Jteststr(_Schannel_webshop_id)+'&JSVER=' + _$JVersion + '&TDT='+_$Jteststr(_trackDataType)+'&UC=' + _$Jusercookie + '&LUC=' + (_$Jserusercookie==_$Jusercookie?'same':_$Jserusercookie) + '&VUC=' + _$Jvisittime + '&FS=' + _$Jfreferrerhost + '&RF=' + _$Jencode(_$Jref) + '&PS=' + _$Jhostname + '&PU=' + _$Jpathname + _$Jsearchkeyword + '&PT=' + _Spage_type + '&PER=' + _$Jiserror + '&PC=' + _$Jencode(_Spage_pic) + '&PI=' + _Spage_id + '&LM=' + _$Jlastmodify + '&LG=' + _$Jlanguage + '&CL=' + _$Jcolor + '&CK=' + _$Jcookie + '&SS=' + _$Jscreensize + '&SCW=' + _$Jclientwidth + '&SCH=' + _$Jclientheight + '&SSH=' + _$Jscrollheight + '&FT=' + _$Jfirsttime + '&LT=' + _$Jlasttime + '&DL=' + _$Jdowntime + '&FL='+_$Jflash+'&CKT='+cookietype+'&JV='+_$Jjava+'&AL=' + _$Jalexa + '&SY=' + _$Jencode(_$Jsystem) + '&BR=' + _$Jencode(_$Jbrowser) + '&TZ=' + (new Date()).getTimezoneOffset() / 60 + '&AU=' + _Sauthor + '&UN=' + _$Jencode(_$Jusername) + '&UID=' + _$Jencode(_$Juserid) + '&URT=' + _$Jencode(_$Juserregtime) + '&UA=' + _$Jencode(_$Juserage) + '&US=' + _$Jencode(_$Jusersex) + '&TID=' + _$Jencode(_$Jpmf_tui_id) + '&MT=' + _$Jtelphone + '&FMSRC='+_$Jencode(_$Jmediumsourcefirst)+'&MSRC='+_$Jencode(_$Jmediumsource)+'&MSCH=&EDM='+_$Jencode(_$Jedmemail)+'&RC=' + _$Jreturncount + '&SHPIC=&MID=' + _$Jrandomid + '&TT=' + _$Jencode(_$Jtitle) + "&CHK=" + _$Junicode(_$Jwebsite+_$Jrandomid) + "&SHT=" + _$Jdomain + "&RDM=" + Math.random();
		var _$Jclickhotokstr = true;
		function _$Jcreatejs()
		{
			if (_$Jmapcode.a && _$Jmapcode.b && _$Jmapcode.c) 
			{
				_$Jclickhotokstr = false;
				var _$Jurl = _$Jcounturl + '/clickareamap.js.php';
				var _$Jobj = _$Jdocument.createElement('script');
				_$Jobj.type = 'text/javascript';
				_$Jobj.async = true;
				_$Jobj.id = 'clickareamap_id';
				_$Jobj.charset = 'utf-8';
				
				var _$Jpage_site = _$Jhostname;
				var _$Jpath_name = _$Jpathname;
				if(_$Jpathname.indexOf('clickhotcount')>-1 && _$Jmapcode.ht && _$Jmapcode.pu)
				{
					_$Jpage_site = _$Jmapcode.ht;
					_$Jpath_name = _$Jmapcode.pu;
				}	
				var _$Jdurl = _$Jurl + '?pwebsite=' + _$Jwebsite + '&jsprefix=yfx_&clicktype=' + _$Jmapcode.a + '&areatype=' + _$Jmapcode.b + '&website=' + _$Jmapcode.d + '&server=' + _$Jmapcode.h + '&starttime=' + _$Jreadcookie('yfxm_s_d') + '&endtime=' + _$Jreadcookie('yfxm_e_d') + '&fromtype=' + _$Jreadcookie('yfxm_f') + '&pagesite=' + _$Jpage_site + '&pageurl=' + _$Jpath_name + '&pagegroup=' + _$Jmapcode.i + '&rand=' + Math.random() + '&clickmapcode=' + _$Jmapcode.c+'&clickmapposition=' + _$Jmapcode.e+'&counturl='+_$Jencode(_$Jcounturl)+'&type='+_$Jmapcode.j+'&chose='+_$Jmapcode.p+'&first='+_$Jmapcode.q+'&order='+_$Jmapcode.r + '&hashcode=' + _$Jencode(_$Jhashcode.substr(1));
				_$Jdocument.getElementsByTagName('head').item(0).appendChild(_$Jobj);
				setTimeout("_$Jdocument.getElementById('clickareamap_id').src='"+_$Jdurl+"'; ",1500);
			}

			if ( 0 )
			{
				var _$Jurl = _$Jcounturl + '/onlinevisite.js.php';
				var _$Jobj = _$Jdocument.createElement('script');
				_$Jobj.type = 'text/javascript';
				_$Jobj.async = true;
				_$Jobj.id = 'onlinevisite_id';
				_$Jobj.charset = 'utf-8';
				var _$Jdurl = _$Jurl + '?counturl=' + _$Jencode(_$Jcounturl) + '&WS='+ _$Jwebsite + '&CK=' + _$Jencode(_$Jusercookie) +'&UN=' + _$Jencode(_$Jusername) +'&clientw='+_$Jclientwidth+'&clienth='+_$Jclientheight+'&platform='+_$Jsystem + '&rand=' + Math.random();
				_$Jdocument.getElementsByTagName('head').item(0).appendChild(_$Jobj);
			
			}
			if ( _$Jhashcode.indexOf('#visitorplay') > -1 )
			{
				var _$Jurl = _$Jcounturl + '/visitorplay.js.php';
				var _$Jobj = _$Jdocument.createElement('script');
				_$Jobj.type = 'text/javascript';
				_$Jobj.async = true;
				_$Jobj.id = 'visitorplay_id';
				_$Jobj.charset = 'utf-8';
				var _$Jdurl = _$Jurl + '?counturl=' + _$Jencode(_$Jcounturl) + '&WS='+ _$Jwebsite + '&pagesite=' + _$Jhostname + '&pageurl=' + _$Jpathname + '&hashcode=' + _$Jencode(_$Jhashcode.substr(1)) + '&width=' + _$Jclientwidth + '&rand=' + Math.random();
				_$Jdocument.getElementsByTagName('head').item(0).appendChild(_$Jobj);
				setTimeout("_$Jdocument.getElementById('visitorplay_id').src='"+_$Jdurl+"'; ",1700);
			}
			if ( _$Jhashcode.indexOf('#onlinevisitor') > -1 )
			{
				var _$Jurl = _$Jcounturl + '/onlinevisitor.js.php';
				var _$Jobj = _$Jdocument.createElement('script');
				_$Jobj.type = 'text/javascript';
				_$Jobj.async = true;
				_$Jobj.id = 'onlinevisitor_id';
				_$Jobj.charset = 'utf-8';
				var _$Jdurl = _$Jurl + '?counturl=' + _$Jencode(_$Jcounturl) + '&WS='+ _$Jwebsite + '&pagesite=' + _$Jhostname + '&pageurl=' + _$Jpathname + '&height=' + _$Jclientheight + '&hashcode=' + _$Jencode(_$Jhashcode.substr(1)) + '&rand=' + Math.random();
				_$Jdocument.getElementsByTagName('head').item(0).appendChild(_$Jobj);
				setTimeout("_$Jdocument.getElementById('onlinevisitor_id').src='"+_$Jdurl+"'; ",1800);
			}

			if( false )
			{
				if (_$Jtagcode.a && _$Jtagcode.b)
				{
					var _$Jturl = _$Jcounturl_proxy + '/optimizer.js.php';
					var _$Jtobj = _$Jdocument.createElement('script');
					_$Jtobj.type = 'text/javascript';
					_$Jtobj.async = true;
					_$Jtobj.id = 'tagcode_id';
					_$Jtobj.charset = 'utf-8';
					var _$Jdurl = _$Jturl + '?abtype=test&website=' + _$Jwebsite + '&abtestid=' + _$Jtagcode.a + '&tagcheckcode=' + _$Jtagcode.b + "&rand="+Math.random();
					_$Jdocument.getElementsByTagName('head').item(0).appendChild(_$Jtobj);
					setTimeout("_$Jdocument.getElementById('tagcode_id').src='"+_$Jdurl+"'; ",1900);
				}
				else
				{
					var _$Jturl = _$Jcounturl_proxy + '/optimizer.js.php';
					var _$Jtobj = _$Jdocument.createElement('script');
					_$Jtobj.type = 'text/javascript';
					_$Jtobj.async = true;
					_$Jtobj.id = 'tagcode_id';
					_$Jtobj.charset = 'utf-8';
					var _$Jdurl = _$Jturl + '?abtype=show&website=' + _$Jwebsite + "&prefix=_$J&rand="+Math.random();
					_$Jdocument.getElementsByTagName('head').item(0).appendChild(_$Jtobj);
					setTimeout("_$Jdocument.getElementById('tagcode_id').src='"+_$Jdurl+"'; ",2000);
				}
			}
			if( _Spageformjs & 0 )
			{
				var _$Jturl = _$Jcounturl_proxy + '/formtrans.js.php';
				var _$Jtobj = _$Jdocument.createElement('script');
				_$Jtobj.type = 'text/javascript';
				_$Jtobj.async = true;
				_$Jtobj.id = 'formtrans_id';
				_$Jtobj.charset = 'utf-8';
				if( _$Jformlist && _$Jcfre_f )
				{
					var _$Jdurl = _$Jturl + '?action=reaction&website=' + _$Jwebsite + '&swebsite=' + _$Jpartner_website + '&swebsiteid=' + _Schannel_website_id + '&swebshopid=' + _Schannel_webshop_id + '&uipcode=' + _$Jusercookie + '&luipcode=' + _$Jserusercookie + '&formlist=' + _$Jencode(_$Jformlist) + '&pagesite=' + _$Jhostname + '&phone='+_$Jencode(_$Jtelphone)+'&system='+_$Jencode(_$Jsystem)+'&medium='+_$Jencode(_$Jmediumsource)+'&marknum='+_$Jrandomid+'&prefix=_$J&rand='+Math.random();
				}
				if( _$Jformhidden )
				{
					var _$Jdurl = _$Jturl + '?action=hidden&website=' + _$Jwebsite + '&swebsite=' + _$Jpartner_website + '&swebsiteid=' + _Schannel_website_id + '&swebshopid=' + _Schannel_webshop_id + '&formlist=' + _$Jencode(_$Jformlist) + '&prefix=_$J&rand='+Math.random();
				}
				_$Jdocument.getElementsByTagName('head').item(0).appendChild(_$Jtobj);
				setTimeout("_$Jdocument.getElementById('formtrans_id').src='"+_$Jdurl+"'; ",2100);
			}
		}
			var _$Jformhiddenloop = 1;	
	var _$Jclickhot;
	var _$Jdoimgerr_2 = 1;
	var _$Jclickhotok = 0;
	var _$Jmessageid = '';
	var _$Jformhidden = 0||0;
	var _$Jclickarray = new Array();
	var _$Jcf_f = 1||0;
	var _$Jcfre_f = 0||0;
	_$Jclickarray[0]='(*)';;
	var _$Jclickreg = '';
	if (_$Jclickarray[0] == 'clickhotall') {
		_$Jclickhotok = 1
	}
	function _$Jdotest(r)
	{
		r = r+'';
		r = r.replace(/\\/g, '\\/');
		r = r.replace(/\//g, '\\/');
		r = r.replace(/\*/g, '(.*)');
		return r;
	}
	if (_$Jclickhot !== 'clickhot' && _$Jclickarray[0] !== 'clickhotall') {
		for (var ci = 0; ci < _$Jclickarray.length; ci++) {
			if (_$Jclickarray[ci].lastIndexOf('*') > - 1) {
				_$Jclickarray[ci] = _$Jdotest(_$Jclickarray[ci]);
				if (_$Jclickarray[ci].indexOf('/') === 0) {
					_$Jclickarray[ci] = _$Jclickarray[ci].substring(1)
				}
				_$Jclickreg = eval('/' + _$Jclickarray[ci] + '/ig');
				if (_$Jclickreg.test(_$Jpathname)) {
					_$Jclickhotok = 1;
					break
				}
			} else {
				if (_$Jclickarray[ci].indexOf('/') !== 0) {
					_$Jclickarray[ci] = '/' + _$Jclickarray[ci]
				}
				if (_$Jclickarray[ci] == _$Jpathname) {
					_$Jclickhotok = 1;
					break
				}
			}
		}
	}
	var _$Jclienturlstr = '';
	var _$Jposarr = new Array();

	function _$Jtimelong(ini) {
		var tl = _$Jgt() - _$Jstarttime;
		if (tl >= 1800000) {
			tl = 1000
		}
		if (ini) {
			tl = _$Jgt() - _$Jtimestart;
			_$Jtimestart = _$Jgt()
		}
		tl <= 0 ? 0 : tl;
		return tl
	}
	function _$Jsetformfield(a,b)
	{
		if( typeof( _$Jformfielddetails[a][b] ) == null || typeof( _$Jformfielddetails[a][b] ) == 'undefined' )
		{
			_$Jformfielddetails[a][b] = {change:0,onkey:0,times:0,focus:0,errors:0,submits:0,inputinfo:0};
		}
	}
	function _$Jinitevent(init) {
		var _$Jfn;
		var _$Jfc;
		_$Jaddlistener(window, 'unload', _$Junload);
		_$Jaddlistener(window, 'blur', _$Junload);
		
		if( _$Jcf_f )
		{
			for (var a = 0; a < _$Jdocument.forms.length; a++) {
				_$Jfn = _$Jdocument.forms.item(a);
				_$Jfc = _$Jfn.name || _$Jfn.id;
				if( _$Jfc && _$Jcfre_f )
				{
					_$Jformlist = _$Jformlist + _$Jfc + "::" + _$Jfn.action + "||";
					_$Jformdetails[_$Jfc] = {change:0,onkey:0,times:0,focus:0,submits:0,errors:0,inputinfo:0};
					_$Jformfielddetails[_$Jfc] = {};
				}
				_$Jinitform(_$Jfn);
			}
			_$Jgetelementby(['form'], ['submit'], _$Jsubmit);
			_$Jgetelementby(['select', 'input', 'textarea'], ['change'], _$Jchangeselect);
			_$Jgetelementby(['select', 'input', 'textarea','button'], ['blur'], _$Jfocus);
			_$Jgetelementby(['select', 'input', 'textarea','button'], ['click'], _$Jclick);
		}

		 if (init && 1) {
			_$Jaddlistener(_$Jdocument, 'click', _$Jclick);
			_$Jaddlistener(_$Jdocument, 'mousemove', _$Jmousemove)
		}
		if (init && _$Jcf_f && 0) {
			_$Jaddlistener(_$Jdocument, 'keydown', _$Jkeydown);
			_$Jaddlistener(_$Jdocument, 'keyup', _$Jkeyup);
		}
	}
	function _$Jrecord(a) {
		var s = '';
		if (parseInt(Math.random() * 100) < 0*10 && a.a === 'msmv') return;
		switch (a.a) {
		case 'msmv':
			s = '||' + a.a + '::' + a.t + '::' + a.x + '::' + a.y + '::' + _$Jencode(a.i) + '::' + a.p;
			_$Jcountdourl(s);
			break;
		case 'clk':
		case 'fus':
		case 'link':
		case 'chn':
		case 'down':
		case 'onkey':
		case 'clkout':
		case 'submit':
			s = '||' + a.a + '::' + _$Jencode(a.tn) + '::' + _$Jencode(a.i) + '::' + _$Jencode(a.n) + '::' + a.tp + '::' + _$Jencode(a.v) + '::' + _$Jencode(a.h) + '::' + _$Jencode(a.u) + '::' + a.t + '::' + a.x + '::' + a.y + '::' + a.p + '::' + _$Jencode(a.fn) + '::' + _$Jencode(a.fa) + '::' + a.e + '::' + a.ef + '::' + _$Jencode(a.msg) + '::' + _$Jencode(a.ak) + '::' + _$Jencode(a.eor);
			_$Jcountdourl(s);
			break;
		default:
			_$Jcountdourl(a.a);
			break
		}
	}
	function _$Junload() {
		_$Jloadgif(_$Jclienturlstr);
		_$Jclienturlstr = ''
	}
	function _$Jcountdourl(s) {
		_$Jclienturlstr += s;
		if (_$Jclienturlstr.length > 2048 && s) {
			_$Jloadgif(_$Jclienturlstr);
			_$Jclienturlstr = ''
		}
	}
	function _$Jdownload(p) {
		var ckda = new Array();
		ckda[0]='.doc';ckda[1]='.csv';ckda[2]='.xls';ckda[3]='.pdf';ckda[4]='.rar';ckda[5]='.zip';;
		var _pin = p.toLowerCase();
		for (var ckdi = 0; ckdi < ckda.length; ckdi++) {
			if (_pin.indexOf(ckda[ckdi]) > - 1) {
				return 1
			}
		}
		return 0
	}
	function _$Jclickout(h) {
		var ckoa = new Array();
		ckoa[0]='(*)';;
		var hi = h.toLowerCase();
		for (var ci = 0; ci < ckoa.length; ci++) {
				ckoa[ci] = _$Jdotest(ckoa[ci]);
		}
		var reg = eval('/'+ckoa.join('|')+'/ig');
		return (!reg.test(hi));
	}
	function _$Jtrackevent()
	{
		var s = '';
		var rs = '';
		var td = window._trackData;
		if( typeof(_trackEvent) !== 'undefined' && _trackEvent.trackActionUrl.length )
		{
			s = _trackEvent.trackActionUrl;
			_trackEvent.trackActionUrl = '';
		}
		else if( td && td.length )
		{
			_$Jsettrack(td);
			for(var k in td)
			{
				if( !isNaN(k) )
				{
					for(var kk in td[k])
					{
						if( td[k]['0'] == 'viewgoods' )
						{
							for(var rd in _$Jrefid)
							{
								rs = _$Jtypeof(_$Jparseurlarr[rd]);
								if( rs )
								{
									td[k]['9'] = rs;
								}
							}
						}
						var jsonid = 0;
						var jsonarr = [];
						var jsonrarr = new Array();
						if( td[k]['0'] == 'addaction' && typeof(td[k]['3']) == 'object' )
						{
							jsonarr = td[k]['3'];
							for( var jk in jsonarr )
							{
								jsonrarr[jsonid] = jk+':'+jsonarr[jk];
								jsonid++;
							}	
							td[k]['3'] = jsonrarr.join('$');
						}
						if( td[k]['0'] == 'userset' && td[k]['1'] == 'userset' && typeof(td[k]['2']) == 'object' )
						{
							jsonarr = td[k]['2'];
							for( var jk in jsonarr )
							{
								jsonrarr[jsonid] = jk+':'+jsonarr[jk];
								jsonid++;
							}	
							td[k]['2'] = jsonrarr.join('$');
						}
						if( _$Jtestnull(_Sorder_encode_url) === false )
						td[k][kk] = _$Jencode(td[k][kk]);
					}
					if( td[k].length == 1 )
					{
						s += '||'+td[k]['0'];
					}
					else
					{
						s += '||'+(td[k].join('::'));
					}
				}
			}
			window._trackData = [];
		}
		return s;
	}
	function _$Jdirecttrackevent(a)
	{
		if( typeof(_trackEvent) !== 'undefined' && _trackEvent.trackActionUrl.length )
		{
			_$Jloadgif(a);
		}
		else if( window._trackData && window._trackData.length )
		{
			_$Jloadgif(a);
		}
	}
	function _$Jloadgif(gs) {
		if( _$Jis_can_record == 0 )
		{
			return;
		}
		var gif = new Image();
		var clestr = gs + _$Jtrackevent();
		if( clestr.length <= 0 ) {return;}
		gif.onload = function () {
			gif.onload = null;
			_$Jdoimgerr_2 = 1;
		};
		gif.onerror = function () {
		   _$Jloadgif(gs);_$Jdoimgerr_2++;
		};
		if( _$Jdoimgerr_2 <= 2 )
		{
			gif.src = _$Jcounturl_logcount + '?WS=' + _$Jwebsite + '&RD=record&SWS='+_$Jteststr(_$Jpartner_website)+'&SWSID='+_$Jteststr(_Schannel_website_id)+'&SWSPID='+_$Jteststr(_Schannel_webshop_id)+'&JSVER=' + _$JVersion + '&TDT='+_$Jteststr(_trackDataType)+'&UC=' + _$Jusercookie + '&LUC=' + (_$Jserusercookie==_$Jusercookie?'same':_$Jserusercookie) + '&VUC=' + _$Jvisittime + '&UN=' + _$Jencode(_$Jusername) + '&UID=' + _$Jencode(_$Juserid) + '&RC=' + _$Jreturncount + '&PS=' + _$Jhostname + '&PU=' + _$Jpathname + '&PT=' + _Spage_type + '&FS=' + _$Jfreferrerhost + '&RF=' + _$Jencode(_$Jref) + '&KW=' + _$Jkeywordkey + '&SS=' + _$Jscreensize + '&SW=' + _$Jscreen_width() + '&SCW=' + _$Jclient_width() + '&SCH=' + _$Jclientheight + '&SSH=' + _$Jscrollheight + '&BR=' + _$Jencode(_$Jbrowser) + '&LTL=' + Math.ceil(_$Jtimelong(1) / 1000) + '&MSRC='+_$Jencode(_$Jmediumsource)+'&EDM='+_$Jencode(_$Jedmemail)+'&CLE=' + clestr + '&MID=' + _$Jrandomid+'&CHK=' + _$Junicode(_$Jwebsite+_$Jrandomid) + '&RDM='+Math.random();
		}
		if( _$Jpstac.toLowerCase() == 'debug' )
		_$Jmessage(gif.src);
	}
	function _$Jaddlistener(a, b, c) {
		if (a.addEventListener) {
			a.addEventListener(b, c, false)
		} else {
			if (a.attachEvent) {
				a.attachEvent('on' + b, c)
			}
		}
	}
	function _$Jclick(ev) {
		_$Jcountimg(ev);
		var b = ev.srcElement || ev.target;
		if (b && /input/i.test(b.tagName) && /checkbox|radio/i.test(b.type)) {
			_$Jchange(b, b.checked)
		}
		if (b && /button|img|input/i.test(b.tagName) && /submit|button/i.test(b.type)) {
			_$Jsubmit_button(b, ev)
		}
		_$Jdirecttrackevent('');
	}
	function _$Jrecodeelement(ele,eleev,eleslt,type,host,url,eff,fname)
	{
		var $v = $e = $x = $y = $fn = $fa = $gfn = $typekey = $p = '';
		var $error = _$Jerrorcode || '';
		_$Jerrorcode = '';
		$x = _$Jposition(ele).x;
		$y = _$Jposition(ele).y;
		$p = ele.type;
		if(type == 'fus')
		{
			$v = _$Jgetvalue(ele);
		}
		if((type == 'clk' || type == 'down' || type == 'clkout')&&ele.tagName=='A')
		{
			$v = _$Jencode(ele.innerHTML.replace(/<[^>].*?>/g, '') || '');
			$x = _$Jcltxy(eleev).x;
			$y = _$Jcltxy(eleev).y;
			$e = _$Jencode(ele.getAttribute('phpstatevent') || '');
		}
		if(type == 'clk' && ele.tagName!=='A')
		{
			$v = _$Jgetvalue(ele);
			$x = _$Jcltxy(eleev).x;
			$y = _$Jcltxy(eleev).y;
		}
		if(type == 'chn')
		{
			$e = (eleslt === true ? 1 : (eleslt === false ? 0 : eleslt));
			$v = _$Jgetvalue(ele);
		}
		if(type == 'onkey')
		{
			$v = eff;
			$typekey = eleslt;
		}
		if(type == 'msmv')
		{
			$x = _$Jcltxy(eleev).x;
			$y = _$Jcltxy(eleev).y;
		}
		if((/input|textarea|select|button/i.test(ele.tagName)) || (/img/i.test(ele.tagName) && /submit|button/i.test(ele.type)))
		{		
			$gfn = _$Jgetformname(ele);
			$fn = $gfn.n;
			$fa = $gfn.a;
		}
		if(type == 'submit')
		{
			$gfn	= _$Jgetformname(ele);
			$fn		= $gfn.n;
			$fa		= $gfn.a;
		}	
		if( fname !== '' )
		{
			$fn = fname;
		}
		if( $p === 'password' && $v )
		{
			$v = '********';
		}
		$fa = '';
		var $ig={pose:'',tagid:''};
		$ig = _$Jinindeof(ele);
		var $fmsg = '';
		if( $fn && window._trackFormMsg && window._trackFormMsg.length > 0 )
		{
			$fmsg = window._trackFormMsg;
		}
		window._trackFormMsg = '';
		
		if( $fn && $fa && _$Jcfre_f )
		{
			var $eln_id = ele.name || ele.id;
			$eln_id = $eln_id || 'unname';
			_$Jsetformfield($fn,$eln_id);
			if( $eln_id != 'unname' )
			{
				if(type == 'chn')
				{
					_$Jformdetails[$fn].change++;
					_$Jformfielddetails[$fn][$eln_id].change++;
					_$Jformdetails[$fn].inputinfo = $v;
					_$Jformfielddetails[$fn][$eln_id].inputinfo = $v;
				}
				if(type == 'onkey')
				{
					_$Jformdetails[$fn].onkey++;
					_$Jformfielddetails[$fn][$eln_id].onkey++;
				}
				if(type == 'fus')
				{
					_$Jformdetails[$fn].focus++;
					_$Jformfielddetails[$fn][$eln_id].focus++;
				}
				if(type == 'submit')
				{
					_$Jformdetails[$fn].submits++;
					_$Jformfielddetails[$fn][$eln_id].submits++;
				}
				if( $fmsg && $fmsg.indexOf('==failed') )
				{			
					_$Jformdetails[$fn].errors++;
					_$Jformfielddetails[$fn][$eln_id].errors++;
				}
				_$Jformdetails[$fn].times = _$Jtimelong(0);
				_$Jformfielddetails[$fn][$eln_id].times = _$Jtimelong(0);
			}
		}

		_$Jrecord({
				a:  type,
				ak:  $typekey,
				p:  $ig.pose,
				h:  host,
				u:  url,
				t:  _$Jtimelong(0),
				n:  (_$Jtestobject(ele.name) || ''),
				i:  ($ig.tagid || ''),
				v:  $v,
				x:  $x,
				y:  $y,
				e:  $e,
				tp: (_$Jtestobject(ele.type) || ''),
				tn: (_$Jtestobject(ele.tagName) || ''),
				fn: $fn,
				fa: $fa,
				ef: eff,
				msg: $fmsg,
				eor: $error
			});
	}
	function _$Jfocus(ev) {
		if (!ev) {
			var ev = event
		}
		var b = ev.srcElement || ev.target;
		if (b && /input|textarea|select/i.test(b.tagName)) {
			_$Jrecodeelement(b,ev,'','fus','','',0,'');
		}
	}
	function _$Jonkey(ev,vc) {
		if (!ev) {
			var ev = event
		}
		var b = ev.srcElement || ev.target;
		var c = ev.keyCode || ev.charCode;
		if (/input|textarea|select/i.test(b.tagName)) {
			_$Jrecodeelement(b,ev,vc,'onkey','','',c,'');
		}
	}
	function _$Jkeydown(ev)
	{
		_$Jonkey(ev,'k_d');
	}
	function _$Jkeyup(ev)
	{
		_$Jonkey(ev,'k_u');
	}
	function _$Jkeypress(ev)
	{
		_$Jonkey(ev,'k_p');
	}
	function _$Jcountimg(ev) {
		if (!ev) {
			var ev = event
		}
		var b = ev.srcElement || ev.target;
		var c = b;
		while (b && (!b.href || /img/i.test(b.tagName))) {
			b = b.parentNode
		}
		var gettype = 'clk';
		var chu = clkhost = clkurl = '';
		if (b) {
			chu = _$Jgeturlparam(b.href);
			clkhost = chu.h;
			clkurl = chu.p;
			_$Jrecodeelement(b,ev,'',gettype,clkhost,clkurl,0,'');
			if (_$Jdownload(b.href)) {
				gettype = 'down';
				_$Jrecodeelement(b,ev,'',gettype,clkhost,clkurl,0,'');
			}
			if (_$Jclickout(clkhost)) {
				gettype = 'clkout';			
				_$Jrecodeelement(b,ev,'',gettype,clkhost,clkurl,0,'');
			}
		}
		if (c&&b!=c) {
			var eff = 0;var effid = 'id';
			if ((/img|input|textarea|select|a/i.test(c.tagName))) {
				eff = 1
			}
			if ((/img/i.test(c.tagName)) && chu) {
				effid = c.id || '';
			}
			if( effid == 'id' || effid )
			{
				_$Jrecodeelement(c,ev,'','clk','','',eff,'');
			}
		}
	}
	function _$Jscreen_width() {
		return _$Jdocument.documentElement.scrollWidth;
	}
	function _$Jclient_width() {
		return _$Jdocument.documentElement.clientWidth;
	}
	function _$Jtestnull(r)
	{
		if( typeof(r) === null )
		{
			return false;
		}
		else if( typeof(r) === 'undefined' )
		{
			return false;
		}
		else
		{
			return true;
		}
	}
	function _$Jtestobject(r)
	{
		if( typeof(r) === 'object' )
		{
			return '';
		}
		else
		{
			return r;
		}
	}
	function _$Jinindeof(c) {
		while (c && !c.tagName) {
			c = c.parentNode
		}
		var i = 0;
		var b = c;
		var phptag = '';
		var fetchtag = 'phptag';
		var parentnodes = new Array();
		var resultarray = new Array();
		var resultarraystr = new Array();
		while (b && b !== _$Jdocument.body && b !== _$Jdocument.documentElement) {
			var ch = 1;
			var g = new Array();
			if(!_$Jtestnull(b.parentNode)||!b.parentNode) break;
			g = b.parentNode.childNodes;
			for (var e = 0; e < g.length; e++) {
				if (g[e].tagName && g[e].tagName !== '!' && g[e].tagName !== 'SCRIPT') {
					if (g[e] == b) {
						break
					}
					ch++
				}
			}
			if( ch < 10 )
			{
				parentnodes[i] = '0'+ch;
			}
			else
			{
				parentnodes[i] = ch;
			}
			phptag = phptag == '' ? (b.getAttribute(fetchtag)||'') : phptag;
			b = b.parentNode;
			i++
		}
		resultarray = parentnodes.reverse();
		resultarraystr = resultarray.join('-');
		return {pose:resultarraystr,tagid:phptag}
	}
	function _$Jgetformname(c)
	{
		while (c && !c.tagName) {
			c = c.parentNode
		}
		var b = c;
		if(/input|textarea|select|img|button/i.test(c.tagName))
		{
			var i = 0;
			while ( b && b.tagName !== 'FORM' ) 
			{
				if( b.tagName == 'BODY' )break;
				b = b.parentNode;
				i++;
			}
		}
		if( b && b.tagName == 'FORM' )
		{
			return {
				n: ((b.getAttribute('name') || b.getAttribute('id')) || ''),
				a: (b.getAttribute('action') || _$Jpathname)
			}
		}
		else
		{
			return {
				n: '',
				a: ''
			}
		}
	}
	function _$Jposition(b) {
		var a = {
			x: 0,
			y: 0
		};
		while (b.offsetParent) {
			a.x += parseInt(b.offsetLeft);
			a.y += parseInt(b.offsetTop);
			b = b.offsetParent
		}
		a.x += parseInt(b.offsetLeft);
		a.y += parseInt(b.offsetTop);
		return a
	}
	function _$Jgetxy() {
		var x = 0;
		var y = 0;
		if (_$Jdocument.body.scrollTop) {
			x = parseInt(_$Jdocument.body.scrollLeft);
			y = parseInt(_$Jdocument.body.scrollTop);
		} else {
			x = parseInt(_$Jdocument.documentElement.scrollLeft);
			y = parseInt(_$Jdocument.documentElement.scrollTop);
		};
		return {
			x: x,
			y: y
		}
	}

	function _$Jistable(a) {
		return (a.tagName == 'TBODY' || a.tagName == 'TR')
	}
	function _$Jchangeselect(c) {
		var b = c.srcElement || c.target;
		if (/input/i.test(b.tagName) && /checkbox|radio/i.test(b.type)) {
			_$Jchange(b, b.checked)
		} else if (/input/i.test(b.tagName) && /text/i.test(b.type)) {
			_$Jchange(b, b.value.length)
		} else if (/textarea/i.test(b.tagName)) {
			_$Jchange(b, _$Jtxt_len(b.value))
		} else if (/select/i.test(b.tagName)) {
			_$Jchange(b, b.selectedIndex)
		}
	}
	function _$Jchange(b, a) {
		if (b.lastvalue && b.lastvalue == a) {
			return;
		};
		_$Jrecodeelement(b,'',a,'chn','','',0,'');
		_$Jgetby_idname(b);
		_$Jhiddenele(b,b);
		b.lastvalue = a;
	}
	function _$Jchange_com(b, a) {
		if (b.lastvalue && b.lastvalue == a) {
			return
		};
		b.lastvalue = a;
	}
	function _$Jinitform(b) 
	{
		for (var a = 0; a < b.elements.length; a++) {
			var c = b.elements[a];
			if (/input/i.test(c.tagName) && /checkbox|radio/i.test(c.type)) 
			{
				_$Jchange_com(c, c.checked);
			} 
			else
			{
				if (/input/i.test(c.tagName) && /text/i.test(c.type)) 
				{
					_$Jchange_com(c, c.value.length);
				} 
				else 
				{
					if (/textarea/i.test(c.tagName)) 
					{
						_$Jchange_com(c, _$Jtxt_len(c.value));
					} 
					else 
					{
						if (/select/i.test(c.tagName)) 
						{
							_$Jchange_com(c, c.selectedIndex);
						}
					}
				}
			}
		}
	}
	function _$Jtxt_len(a) {
		return a.length - (a.split("\r").length - 1)
	}
	function _$Jcltxy(ev) {
		if (!ev) {
			var ev = event
		}
		var y = parseInt(ev.clientY) + parseInt(_$Jgetxy().y) - parseInt(_$Jdocument.getElementsByTagName('body')[0].offsetTop);
		var x = parseInt(ev.clientX) + parseInt(_$Jgetxy().x) - parseInt(_$Jdocument.getElementsByTagName('body')[0].offsetLeft);
		if (x > 5000 || x < 0) {
			x = 0
		}
		if (y > 50000 || y < 0) {
			y = 0
		}
		return {
			x: x,
			y: y
		}
	}
	function _$Jmousemove(ev) {
		var t = _$Jgt();
		var e = ev.srcElement || ev.target;
		if ((t - _$Jloadtime) > (parseInt(0) + 1) * 100) {_$Jrecodeelement(e,ev,0,'msmv','','','','');}
		_$Jloadtime = t
	}

	function _$Jgetvalue(a) {
		var rv = '';
		if (a.tagName == 'SELECT') {
			rv = a.options[a.selectedIndex].text || ''
		}
		else {
			rv = a.value || '';
			if(rv==''&&_$Jtestchildren(a)==1)
			{
				rv = a.innerHTML.replace(/<[^>].*?>/g, '') || '';
			}
		}
		rv = _$Jteststr(_$Jencode(rv.replace(/\s/g, '')));
		return rv.substring(0, 512)
	}
	function _$Jsubmit(ev) {
		if (!ev) {
			var ev = event
		}
		var b = ev.srcElement || ev.currentTarget;
		if( b )
		{
			_$Jrecodeelement(b,ev,'','submit','','',0,'');
		}
	}
	function _$Jhiddenele(f,t)
	{
		var loop = 1;
		while ( f && f.tagName !== 'FORM' && loop <= 10 ) 
		{
			if( f && f.tagName === 'BODY' )break;
			f = f.parentNode;
			t = f;
			loop++;
		}
		if( f && f.tagName === 'FORM' && _$Jformhiddenloop <= 10 ) 
		{
			var b = t.childNodes;
			for (var i = 0; i < b.length; i++) 
			{
				if(b[i] && b[i].tagName === 'INPUT' && (b[i].type === 'hidden'||b[i].style.display === 'none')) 
				{
					var b_lastvalue = _$Jteststr(_$Jgetvalue(b[i]));
					b[i].lastvalue = _$Jteststr(b[i].lastvalue);
					if( b_lastvalue && b[i].lastvalue !== b_lastvalue )
					{
						_$Jrecodeelement(b[i],'','','chn','','',0,'');
						b[i].lastvalue = b_lastvalue;
					}
				}
				else
				{
					_$Jhiddenele(f,b[i]);
					_$Jformhiddenloop++;
				}
			}
		}
	}
	function _$Jtestchildren(f)
	{
		if( f ) 
		{
			return f.childNodes.length;
		}
		else
		{
			return 0;
		}
	}
	function _$Jsubmit_button(b,ev) {
		var i = 0;
		while ( b && b.tagName !== 'FORM' && i <= 10 ) 
		{
			if( b && b.tagName == 'BODY' )break;
			b = b.parentNode;
			i++;
		}
		if( b && b.tagName == 'FORM' )
		{
			_$Jrecodeelement(b,ev,'','submit','','',0,'');
			_$Jgetby_idname(b);
			_$Jhiddenele(b,b);
		}
	}
	function _$Jgetby_idname(b)
	{
		var i = 0;
		while ( b && b.tagName !== 'FORM' && i <= 10 ) 
		{
			if( b && b.tagName == 'BODY' )break;
			b = b.parentNode;
			i++;
		}

		if( b && b.tagName === 'FORM' && b.name && _$Jformlist && _$Jformhidden )
		{
			var gh = phpstat_do_hidden_form(b.name);
			for(var ghk in gh)
			{
				var _fidv = _$Jteststr(_$Jid(gh[ghk]['ffield']));
				if( _fidv === '' )
				{
					var _fidva = _$Jname(gh[ghk]['ffield']);	
					if( _fidva.length > 0 )
					{
						_fidv = _fidva['0'];
					}
				}
				if( _fidv )
				{
					var b_lastvalue = _$Jteststr(_$Jgetvalue(_fidv));
					_fidv.lastvalue = _$Jteststr(_fidv.lastvalue);
					if( b_lastvalue && _fidv.lastvalue !== b_lastvalue )
					{
						_$Jrecodeelement(_fidv,'','','chn','','',0,b.name);
						_fidv.lastvalue = b_lastvalue;
					}
				}
			}
		}
	}
	function _$Jgetelementby(b, f, a) {
		for (var d = 0; d < b.length; d++) {
			var j = _$Jdocument.getElementsByTagName(b[d]);
			for (var c = 0; c < j.length; c++) {
				for (var g = 0; g < f.length; g++) {
					_$Jaddlistener(j[c], f[g], a)
				}
			}
		}
	}
	function _$Jgetmessageid(a) {
		if (a.toLowerCase() == 'debug') {
			setTimeout(function(){var _$Jobj = _$Jdocument.createElement("div");
			_$Jobj.innerHTML = '<textarea id="pst_messageid" name="message" rows="12" cols="100" style="position: absolute; left:10px; bottom:20px; border: solid #6C358D;">'+_$Jcourl+'</textarea>';
			_$Jdocument.getElementsByTagName('body').item(0).appendChild(_$Jobj);_$Jmessageid = _$Jdocument.getElementById('pst_messageid');},3000);     
		}
	}
	function _$Jmessage(a) {
		if (_$Jmessageid) {
			_$Jmessageid.value = a;
		}
	}
	_$Jgetmessageid(_$Jpstac);
	this._$JouttrackDatatoPost = function(a){_$Jdirecttrackevent(a);}
	_$Jclickhotokstr ? setTimeout(function(){_$Jinitevent(_$Jclickhotok);},1500) : '';
	window.setInterval(function(){_$Junload();}, 5000);
	_$Jdirecttrackevent('');
		_$Jjsgif(_$Jcourl);
		_$Jcreatejs();
		_$Jshare(_$Jusercookie);
	};
	function _$Jshare(userunique){};;
	if( _$Jprotocol.toString().toLowerCase().indexOf('http') > -1 )
	{
		var _$Jphpstat_func_name;
		function _trackDatatoPost()
		{
			_$Jphpstat_func_name._$JouttrackDatatoPost('||topost');
			console.log('');
		}
		if(_$Jisdownloadflash === 0)
		{		
			_$Jphpstat_func_name = new _$Jphpstat_func('HttpCookie','');
		}
		else
		{
			_$Jphpstat_func_name_flash_object = new phpstatCookie({

					namespace: 'namespace_phpstat',
					swf_url: _$Jcounturl_proxy+'/cookie/storage.swf?'+Math.random(), 
					debug: false,
					onready: function() {
					_$Jphpstat_func('FlashCookie','');
					},
					onerror: function() {
					_$Jphpstat_func('FlashCookie-err','');
					}
				});
		}
	}
}
catch(e)
{
};/*dd78273e1deb4d3e4a698b27634a23bc*/