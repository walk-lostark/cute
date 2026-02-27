String.prototype.replaceAll = function(org, dest) {
	이 값을 반환하고, 이 값을 분할한 후, 해당 결과를 합치면 최종 결과를 얻을 수 있습니다.
}


var nowobj={};
var kill_media="";
var start_card=1;

var nowobj_number=1;
var delaytime=2;

//ar audio = new Audio('http://media5.dimode.co.kr/ssch/piano.mp3');
var oldVal="";
var imsiimg="";
var nowtime=Date.now();

var bg_bright=50;

var byline_intval=1500;

var check_result="|";
var bricknumber=1;
var this_churchcode="";

함수 isMobile() {
	navigator.userAgent.indexOf('Mobi') > -1을 반환합니다.
}
String.prototype.replaceAll = function(org, dest) {
	이 값을 반환하고, 이 값을 분할한 후, 해당 결과를 합치면 최종 결과를 얻을 수 있습니다.
}

함수 getParameterByName(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	results = regex.exec(location.search);
	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
  
function load_data_from_server(str_churchcode) {
	
	$.ajax({   
		URL: "//wessch.cafe24.com/maker/loaddata.php?church_code="+str_churchcode,
		유형:"GET",
		데이터 유형:'json',
		
		성공:함수(데이터) {
			변수 i=0;
			
			$('.교회이름').text(data.교회이름);
			
			//console.log(data.edited_slide);
			var slide_data=JSON.parse(data.edited_slide);
			console.log(slide_data);
			
			for(i=0;i<slide_data.length;i++) {
				$('.maincard').eq(slide_data[i].slideNum-1).html(make_slide(slide_data[i].prayer));
				
			}
			
		}});
		
}


$(document).ready(function(){
	
	//TPJtSXdGK
	
	$('.maincard').eq(0).html(make_slide($('.maincard').eq(0).html()));
	
	$('.maincard').eq(0).addClass("text-center");
	
	var 교회이름 = getParameterByName('교회');
	
	if(churchname!=="") $('.churchname').text(churchname);
	
	var prayer_text = getParameterByName('기도');
	
	if(prayer_text!=="") $('.prayer_text').text(prayer_text.replaceAll("_"," "));
	
	
	var prayer_list={};
	
	
	
	
	var chrchcode = getParameterByName('code');
	this_churchcode=chrchcode;
	
	if(chrchcode!=="") { // 援먰쉶 肄붾뱶媛� �ㅼ젙�섏뼱 �덈떎硫�
		if(prayer_list[chrchcode]!==undefine) { //癒쇱� 由ъ뒪� 뿉�� lee 얘퀬
			
			$('.churchname').text(prayer_list[chrchcode].churchname); //���댄��� 諛붽퓭以���
			
			for(i=0;i<prayer_list[chrchcode].edited.length;i++) {
				console.log(make_slide(prayer_list[chrchcode].edited[i].prayer));
				$('.maincard').eq(prayer_list[chrchcode].edited[i].slideNum-1).html(make_slide(prayer_list[chrchcode].edited[i].prayer));
				
			}
			
			
			} 또 다른 {
			//alert("紐살갼�섎떎"+chrchcode);
			서버에서 데이터를 로드합니다(chrchcode);
			
		}
	}
	aup.loop=true;
	aup.volume=0.35;
	
	if(getParameterByName("all")=="1") {
	
		for(i=0;i<$('.maincard').length;i++) {
				$('.maincard').eq(i).html(make_slide($('.maincard').eq(i).html() ));
				
			}
			
	
	
		if(!isMobile()) {
			$('.maincard').css('display','block').css('height','60vh').css('width','33%').css('border','2px solid red');
			$('body').css("background-image","");
			} 또 다른 {
			$('.maincard').css('display','block').css('height','98vh').css('width','1125px').css('border','2px solid red');
			$('body').css("background-image","");
			
		}
		} 또 다른 {
		
		$('.maincard').css('display','none');
	}
	
	nowobj=$('.maincard').eq(start_card-1);
	
	
	
	
	
	
	if(!isMobile()) { // 紐⑤컮�쇱씠 �꾨땲�쇰㈃ - 而댄벂�곕씪硫�
		
		
		$('#main_fr').addClass('h-100');
		for(i=0;i<$('.maincard').length;i++) { //諛곌꼍�붾㈃�� 而댄벂�곗슜 諛곌꼍�붾㈃�쇰줈 援먯껜�쒕떎.
			
			if($('.maincard').eq(i).data('desktop')!==undefined) $('.maincard').eq(i).data('bg',$('.maincard').eq(i).data('desktop'));
		}
		
		
		
		} else { // 紐⑤컮�쇱씠�쇰㈃, �곷떒 �뺣젹, 湲��7겕湲� 以꾩씠怨�
		
		$('#main_fr').removeClass('align-items-center ');
		$('#main_fr').css('padding-top','30px');
		
		$('h4').css('font-size','22px');
		
	}
	
	
	if(nowobj.data('bg')!==undefined) change_background_img(nowobj.data('bg'));
	nowobj.show('느림');
	nowobj.find(".byline").each(function (index) {
		setTimeout($(this).removeClass('byline'),(index+1)*byline_intval);
		
	});
	
	
	
	for(i=0;i<$('.maincard').length;i++) { // �대�吏�瑜� 誘몃━ 遺덈윭�⑤떎.
		
		var img = new Image();
		if($('.maincard').eq(i).data('bg')!==undefined) {
			img.src = $('.maincard').eq(i).data('bg');
			콘솔에 `img.src`를 입력하세요.
		}
		
	}
	
	if(navigator.userAgent.indexOf('KAKAO')>0) {
		$('#btn_end').prop('href',"카카오웹://closeBrowser");
		} 또 다른 {
		$('#btn_end').detach();
		
		
	}
	
	
	
	
	
	$("#btn_end").click(function(){
		self.opener=self;
		self.close();
		window.close();
		window.open('','_self').close();  
		
		$(".maincard:last-child").fadeOut('slow',function() {
			document.getElementById('aup').volume=0
			self.opener=self;
			self.close();
			window.close();
			window.open('','_self').close();  
			
			if(navigator.userAgent.includes("KAKAO")) location.href = "kakaotalk://inappbrowser/close";
			// alert(navigator.userAgent);
			
		});
	});
	
	
	함수 check_ip_confess() {
		
		if($('#ip_confess').val()!=="" && $('#ip_confess').val()!==undefined) {
			
			$.ajax({
				url: "../data_qr_us.php?church_code="+this_churchcode+"&oneline="+encodeURI($('#ip_confess').val()),
				데이터 유형: 'json',
				유형:"GET",
				성공: 함수(데이터) {
					
					$('#ip_confess').detach();
					경고($data.msg);
				}});
				
		}
		
	}
	function check_media() {
		
		
	}
	
	$(document).on("click",".btn_next", function(event){
		//$(this).hide();
		//$(".btn_next").click(function(){
		var next_obj=nowobj.next();
		$(this).removeClass('btn_next');
		
		다음_obj.html(make_slide(next_obj.html()));
		
		kill_media=$(this).data('kill'); //�좏뒠釉� 吏��곌린
		
		check_ip_confess();
		check_media();
		
		
		nowobj.fadeOut(1500,function() {
			
			kill_media가 정의되지 않았으면 $(kill_media).detach();
			
			nowobj.find(".embed-반응형").detach(); //�좏뒠釉� 2쎌씠湲�
			
			
			if(next_obj.data('bg')!==undefine) { // 諛곌꼍�붾㈃�� 移대뱶�� �덉쑝硫� 諛붽씔��.
				change_background_img(next_obj.data('bg'));
				
			}
			
			
			전체 화면 모드를 엽니다();
			
			
			
			
			next_obj.fadeIn(1200,function() {
				
				if($('#if1').width()>0) $('#if1').height($('#if1').width()/16*9);
				
				next_obj.find(".byline").each(function (index) {
					
					만약 navigator.userAgent.indexOf('Tri') > 0이면
						
						$(this).removeClass('byline');
						
						} 또 다른 {
						
						
						setTimeout($(this).removeClass('byline'),(index+1)*byline_intval);
						
					}
					
				});
				
				
				//if(nowobj_number==$(".maincard").length) last_fadeout();
				//마지막카드
				다음 객체가 'lastcard' 클래스에 속해 있으면 last_fadeout을 실행합니다.
				
				
			});
			nowobj=next_obj;
			nowobj_number++;
		});
		
		
		
	});
	
	
});



함수 change_background_img(img_name) {
	
	if(navigator.userAgent.indexOf("Tri")) {
		
		$('body').css('background-image',"url("+img_name+")");
		
		} 또 다른 {
		$('body').css('background-image',"url('"+img_name+"')");
		
	}
	
	
	
	
}



함수 openFullScreenMode() {
	var docV = document.documentElement;
	(docV.requestFullscreen)인 경우
	docV.requestFullscreen();
	그렇지 않고 (docV.webkitRequestFullscreen)인 경우 // Chrome, Safari (webkit)
	docV.webkitRequestFullscreen();
	그렇지 않고 (docV.mozRequestFullScreen인 경우) // Firefox
	docV.mozRequestFullScreen();
	그렇지 않고 (docV.msRequestFullscreen)인 경우 // IE 또는 Edge
	docV.msRequestFullscreen();
}

// �꾩껜�붾㈃ �댁젣
전체 화면 모드 닫기 함수 {
	
}

함수 last_fadeout() {
	지연 시간=15;
	
	setTimeout("$('body').css('backdrop-filter','brightness(0.4)')",delaytime++*1000);
	setTimeout("$('body').css('backdrop-filter','brightness(0.35)')",delaytime++*1000);
	setTimeout("$('body').css('backdrop-filter','brightness(0.3)')",delaytime++*1000);
	setTimeout("$('body').css('backdrop-filter','brightness(0.25)')",delaytime++*1000);
	setTimeout("$('body').css('backdrop-filter','brightness(0.20)')",delaytime++*1000);
	setTimeout("$('body').css('backdrop-filter','brightness(0.15)')",delaytime++*1000);
	setTimeout("$('body').css('backdrop-filter','brightness(0.1)')",delaytime++*1000);
	setTimeout("$('body').css('backdrop-filter','brightness(0)')",delaytime++*1000);
	
	setTimeout("aup.pause();",(delaytime+3)*1000);
	
	aup.loop=false;
	
	setTimeout("location.href = 'http://ssch.net'",(delaytime+15)*1000);
	setTimeout("aup.pause();"(delaytime+3)*1000);
	
	
}



함수 make_slide(raw_slide_data) {
	console.log(raw_slide_data);
	
	var nowhtml=raw_slide_data;
	nowhtml=nowhtml.replaceAll("�щ씪�대뱶::\n","").replaceAll("===","<hr/>").replaceAll("---","<hr class='sm'>");
	nowhtml= tagconvert(nowhtml, "<h2 class='text-center incard h2center'>","</h2>","媛��대뜲�쒕ぉ::");
	nowhtml= tagconvert(nowhtml, "<h2 class='incard h2'>","</h2>","�쒕ぉ::");
	nowhtml=nowhtml.replaceAll("[[","<sub>");
	nowhtml=nowhtml.replaceAll("]]","</sub>");
	
	nowhtml=nowhtml.replaceAll("[","<b class='colyel'>");
	nowhtml=nowhtml.replaceAll("]","</b>");
	nowhtml=nowhtml.replaceAll("以꾨컮轅::","<br/>");
	
	
	nowhtml= tagconvert(nowhtml, "<li class='incard li'>","</li>","�ㅻ챸*::");
	
	nowhtml=tagconvert(nowhtml,"<button class='btn btn-warning btn_next float-right' >","</button>","�ㅼ쓬踰꾪듉::");
	
	
	
	nowhtml= tagconvert(nowhtml, "<h4 class='text-center incard h4center'>","</h4>","媛��대뜲�곕낯臾�::");
	nowhtml= tagconvert(nowhtml, "<h5 class='text-center incard h5center'>","</h5>","媛��대뜲以묎컙蹂몃Ц::");
	nowhtml= tagconvert(nowhtml, "<h6 class='text-center incard h6center'>","</h6>","媛��대뜲�묒�蹂몃Ц::");
	
	
	
	nowhtml= tagconvert(nowhtml, "<h4 class='text-right incard h4right'>","</h4>","�ㅻⅨ履쏀겙蹂몃Ц::");
	nowhtml= tagconvert(nowhtml, "<h5 class='text-right incard h5right'>","</h5>","�ㅻⅨ履쎌쨷媛꾨낯臾�::");
	nowhtml= tagconvert(nowhtml, "<h6 class='text-right incard h5right'>","</h6>","�ㅻⅨ履쎌옉��蹂몃Ц::");
	
	
	nowhtml= tagconvert(nowhtml, "<h6 class='incard h6'>","</h6>","�묒�蹂몃Ц::");
	nowhtml= tagconvert(nowhtml, "<h5 class='incard h5'>","</h5>","以묎컙蹂몃Ц::");
	nowhtml= tagconvert(nowhtml, "<h4 class='incard h4'>","</h4>","�곕낯臾�::");
	nowhtml= nowhtml.replaceAll( "�몃Ⅸ�쒖옉踰꾪듉::","<button class='btn btn-info btn_next '>�쒖옉�섍린</button>");
	nowhtml= nowhtml.replaceAll( "�쒖옉踰꾪듉::","<button class='btn btn-warning btn_next'>�쒖옉�섍린</button>");
	
	nowhtml= nowhtml.replaceAll( "�쒖쨪湲곕룄�낅젰::","<input type='text' placeholder='�만큼쾶 2쇱떊 留덉쓬...' class='oneline' id='ip_confess' />");
	 
	nowhtml=pictureconverter(nowhtml);
	nowhtml=mediaconverter(nowhtml);
	nowhtml을 반환합니다.
	
}


함수 tagconvert(전체 텍스트, tag_start, tag_end,origintag) {
	var imsihtmltext=fulltext;
	var intag_content="";
	
	if(imsihtmltext.indexOf(origintag)==-1) 전체 텍스트를 반환합니다.
	변수 cnt=0;
	하다 {
		cnt++;
		
		intag_content=imsihtmltext.split(origintag)[1].split("\n")[0];
		
		imsihtmltext=imsihtmltext.replace(origintag+intag_content,tag_start.slice(0,-1)+" data-cnt='"+cnt+"'>"+intag_content+tag_end);
		cnt가 100보다 크면 중단합니다.
	} while (imsihtmltext.indexOf(origintag)>=0)
	
	imsihtmltext를 반환합니다.
	
}

함수 mediaconverter(fulltext) {
	
	var imsihtmltext=fulltext;
	var intag_content="";
	변수 cnt=0;
	
	if(imsihtmltext.indexOf("�좏뒠釉�::")==-1) 전체 텍스트를 반환합니다.
	하다 {
		intag_content=imsihtmltext.split("�좏뒠釉�::")[1].split("\n")[0];
		
		imsihtmltext=imsihtmltext.replace("�좏뒠釉�::"+intag_content,"<div class='embed-responsive embed-responsive-16by9'><iframe id='if1' class='embed-responsive-item' src='https://www.youtube.com/embed/"+intag_content+"'></iframe></div>");
		// imsihtmltext=imsihtmltext.replace("�좏뒠釉�::"+intag_content,"<div class='embed-responsive embed-responsive-16by9'><iframe id='if1' class='embed-responsive-item' src='"+intag_content+"'></iframe></div>");
		
		if(cnt++>100) break;
	} while (imsihtmltext.indexOf("�좏뒠釉�::")>=0)
	
	imsihtmltext를 반환합니다.
	
	
}

함수 pictureconverter(fulltext) {
	var imsihtmltext=fulltext;
	var intag_content="";
	변수 cnt=0;
	
	if(imsihtmltext.indexOf("�먮즺�ъ쭊::")==-1) 전체 텍스트를 반환합니다.
	하다 {
		intag_content=imsihtmltext.split("먮즺�ъ쭊::")[1].split("\n")[0];
		
		imsihtmltext=imsihtmltext.replace("�먮즺�ъ쭊::"+intag_content,"<div class='text-center'><img src='"+intag_content+"'class='img-fluid ' alt='Responsive image' style='width:50%'/></div>");
		if(cnt++>100) break;
	} while (imsihtmltext.indexOf("�먮즺�ъ쭊::")>=0)
	
	imsihtmltext를 반환합니다.
	//$imsilist2="<div class='text-center'><img src='$this_title'class='img-fluid ' alt='반응형 이미지' style='width:50%'/></div>".$imsilist2;
}
