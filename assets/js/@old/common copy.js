/* 
	※ 번역 필요한 텍스트
	# common.js
	- 자막보기, 자막숨기기
	- 더 이상 축소할 수 없습니다.,더 이상 확대할 수 없습니다.
	- 'MAIN','동북아역사재단 소식', '동북아역사재단 정책자료&간행물', '동북아역사재단 주요사업', '동북아역사자료 검색', 'FOOTER'
*/

scrollResponsiveBool = undefined;//반응형->정상 모드로 바꿀 때

$(function(){
	
	var isOpen = 'is_open',
		isActive = 'is_active';

	$('.wrapper.is_main').length ? scrollResponsiveBool = false : scrollResponsiveBool = true;
	
	// viewCheck ---------------------------
	var isPc = 0,
		isTablet = 0,
		isMobile = 0;
	var viewCheck = {
		init : function(){
			this.action();
		},
		action : function(){
			// 기본
			if($(window).width() > 1199){ // pc
				isPc = 1;
				isTablet = 0;
				isMobile = 0;
				console.log('isPc');
			} else if(1199 >= $(window).width() && $(window).width() > 720){ // 태블릿
				isPc = 0;
				isTablet = 1;
				isMobile = 0;
				console.log('isTablet');
			} else{ // 모바일
				isPc = 0;
				isTablet = 0;
				isMobile = 1;
			}

		}
	}

	// main ---------------------------
	// sec01 배경
	var visualSwiper = new Swiper('.visual-swiper', {
		init: false,
		speed: 400,
		spaceBetween: 0,
		slidesPerView : 1,
		effect : 'fade',
		loop : true,
		autoplay: {
			delay: 10000,
		},
		navigation: {
			nextEl: '.visual_indicator .swiper-button-next',
			prevEl: '.visual_indicator .swiper-button-prev',
		},
		pagination: {
			el: ".visual_indicator .swiper-pagination",
			type: "fraction",
			renderFraction : function(currentClass, totalClass){
			return	'<span class="' + currentClass + '"></span>' 
			+ '<span class="' + totalClass + '"></span>';
			}
		},
	});
	$('.visual_indicator .ind_middle .swiper-button-play').on('click',function(){
		visualSwiper.autoplay.start()
	});
	$('.visual_indicator .ind_middle .swiper-button-pause').on('click',function(){
		visualSwiper.autoplay.stop()
	});

	$('.swiper-btn-box button').on('click',function(){
		$(this).removeClass(isOpen)
		$(this).siblings().addClass(isOpen)
	});

	// sec01 홍보영역
	var promotionSwiper = new Swiper('.promotion-swiper', {
		speed: 400,
		spaceBetween: 0,
		navigation: {
			nextEl: '.promotion_indicator .swiper-button-next',
			prevEl: '.promotion_indicator .swiper-button-prev',
		},
		on: {
			init : function(){
				var thisSlide = $('.promotion-swiper');
				thisSlide.find('.swiper-slide').attr("tabindex", -1);
				thisSlide.find('.swiper-slide a').attr("tabindex", -1);
				thisSlide.find('.swiper-slide-active').attr("tabindex", -1);
				thisSlide.find('.swiper-slide-active a').attr("tabindex", 0);
			},
			slideChangeTransitionEnd : function(){
				var thisSlide = $('.promotion-swiper');
				thisSlide.find('.swiper-slide').attr("tabindex", -1);
				thisSlide.find('.swiper-slide a').attr("tabindex", -1);
				thisSlide.find('.swiper-slide-active').attr("tabindex", -1);
				thisSlide.find('.swiper-slide-active a').attr("tabindex", 0);
			}
		}
	});
	
	// sec02 공통
	$('.section_con .maintab_area .maintab > li .tab_top .tab_tit').on('click',function(){
		$(this).parent('.tab_top').parent('li').siblings().removeClass(isOpen);
		$(this).parent('.tab_top').parent('li').addClass(isOpen);
	});

	// sec02 공지사항
	var noticeSwiper = undefined;
	function notice_area(){
		if($('.notice-swiper').length){
			if($(window).outerWidth() >= 750 && noticeSwiper != undefined){
				noticeSwiper.destroy();
				noticeSwiper = undefined;
			}else if($(window).outerWidth() < 750 && noticeSwiper == undefined){			
				noticeSwiper = new Swiper('.notice-swiper', {
					speed: 400,
					spaceBetween: 4,
					slidesPerView: 1.5,
					breakpoints: {
						320: { // >= 320px
							slidesPerView: 2,
						},
						480: { // >= 480px
							slidesPerView: 3,
						},
						640: { // >= 640px
							slidesPerView: 4,
						}
					}
				});
			}
		}
	}

	// sec02 보도자료
	var reportSwiper = undefined;
	function report_area(){
		if($('.report-swiper').length){
			if($(window).outerWidth() >= 750 && reportSwiper != undefined){
				reportSwiper.destroy();
				reportSwiper = undefined;
			}else if($(window).outerWidth() < 750 && reportSwiper == undefined){			
				reportSwiper = new Swiper('.report-swiper', {
					speed: 400,
					spaceBetween: 4,
					slidesPerView: 1.5,
					breakpoints: {
						320: {slidesPerView: 2},
						480: {slidesPerView: 3},
						640: {slidesPerView: 4}
					}
				});
			}
		}	
	}

	// sec02 팝업존
	var popzoneSwiper = new Swiper('.popzone-swiper', {
		speed: 400,
		spaceBetween: 0,
		slidesPerView : 1,
		//loop : true,
		autoplay: {
			delay: 10000,
		},
		navigation: {
			nextEl: '.popzone_indicator .swiper-button-next',
			prevEl: '.popzone_indicator .swiper-button-prev',
		},
		on: {
			init : function(){
				var thisSlide = $('.popzone-swiper');
				thisSlide.find('.swiper-slide').attr("tabindex", -1);
				thisSlide.find('.swiper-slide a').attr("tabindex", -1);
				thisSlide.find('.swiper-slide-active').attr("tabindex", -1);
				thisSlide.find('.swiper-slide-active a').attr("tabindex", 0);
			},
			slideChangeTransitionEnd : function(){
				var thisSlide = $('.popzone-swiper');
				thisSlide.find('.swiper-slide').attr("tabindex", -1);
				thisSlide.find('.swiper-slide a').attr("tabindex", -1);
				thisSlide.find('.swiper-slide-active').attr("tabindex", -1);
				thisSlide.find('.swiper-slide-active a').attr("tabindex", 0);
			}
		}
	});	
	$('.popzone_indicator .ind_middle .swiper-button-play').on('click',function(){
		popzoneSwiper.autoplay.start()
	});
	$('.popzone_indicator .ind_middle .swiper-button-pause').on('click',function(){
		popzoneSwiper.autoplay.stop()
	});

	// sec02 재단소식
	var nahfnewsSwiper = undefined;
	$('.section_con .nahfnews-swiper .swiper-wrapper .swiper-slide').siblings('li').find('.img_box').attr("tabindex", -1);
	$('.section_con .nahfnews-swiper .swiper-wrapper .swiper-slide.is_open').find('.img_box').attr("tabindex", 0);
	function nahfnews_area(){
		if($('.nahfnews-swiper').length){
			if($(window).outerWidth() >= 750 && nahfnewsSwiper != undefined){
				nahfnewsSwiper.destroy();
				nahfnewsSwiper = undefined;
				
				// var thisSlide = $('.nahfnews-swiper');
				// thisSlide.find('.swiper-slide .img_box').attr("tabindex", -1);
				// thisSlide.find('.swiper-slide .img_box').attr("tabindex", 0);
			}else if($(window).outerWidth() < 750 && nahfnewsSwiper == undefined){			
				nahfnewsSwiper = new Swiper('.nahfnews-swiper', {
					speed: 400,
					spaceBetween: 4,
					slidesPerView : 1,
					pagination: {
						el: '.nahfnews-swiper-pagination',
						type: 'bullets',
						clickable: true,
						renderBullet: function (index, className) {
							return '<button type="button" class="' + className + '"><span class="blind">' + (index + 1) + " slide </span></button>";
						},
					},
					
					breakpoints: {
						320: {slidesPerView: 1},
						480: {slidesPerView: 1},
						640: {slidesPerView: 2}
					}
				});
			}
		}	
	} 

	// sec02 뉴스레터
	$('.section_con .tab_con .swiper-wrapper .swiper-slide .txt_box').on('click', function(){
		$(this).parents('.swiper-slide').siblings('li').removeClass(isOpen);
		$(this).parents('.swiper-slide').siblings('li').find('.img_box').attr("tabindex", -1);
		$(this).parents('.swiper-slide').addClass(isOpen);
		$(this).parents('.swiper-slide').find('.img_box').attr("tabindex", 0);
	});

	// sec03 간행물
	var publiceSwiper = undefined;
	function public_area(){
		if($('.public-swiper').length){
			if($(window).outerWidth() >= 750 && publiceSwiper != undefined){
				publiceSwiper.destroy();
				publiceSwiper = undefined;
			}else if($(window).outerWidth() < 750 && publiceSwiper == undefined){			
				publiceSwiper = new Swiper('.public-swiper', {
					speed: 400,
					// spaceBetween: 4,
					slidesPerView: 1.5,
					breakpoints: {
						320: { slidesPerView: 1.7},
						430: { slidesPerView: 2},
						500: { slidesPerView: 2.7},
						640: { slidesPerView: 3.7}
					}
				});
			}
		}
	} 

	// sec04 주요사업
	var businessSwiper = undefined;
	function business_area(){
		if($('.business-swiper').length){
			if($(window).outerWidth() >= 750 && businessSwiper != undefined){
				businessSwiper.destroy();
				businessSwiper = undefined;
			}else if($(window).outerWidth() < 750 && businessSwiper == undefined){			
				businessSwiper = new Swiper('.business-swiper', {
					speed: 400,
					spaceBetween: 0,
					slidesPerView : 1,
					breakpoints: {
						320: {slidesPerView: 1, spaceBetween: 20},
						480: {slidesPerView: 2, spaceBetween: 10},
						640: {slidesPerView: 3, spaceBetween: 20}
					}
				});
			}
		}	
	} 

	// 스킵네비게이션 focus
	$('.skip_nav a').on({
		'click' : function(){
			var skipTo = "#" + this.href.split('#')[1];
			$(skipTo).attr('tabindex', -1).on('blur focusout', function () {
			$(this).removeAttr('tabindex');
				}).focus();
			}
	})

	// zoom_area ---------------------------	
	function zoomCheckResize(){
		if($('.wrapper').hasClass('is_main')){
			/* 스와이퍼 업데이트 */
			visualSwiper.update();			
			// if(!$('body').hasClass('is_zoom')){
			// 	//console.log('줌 아님');
			// 	if($(window).width() < 1200 || $(window).height() < 800){
			// 		//console.log('넓이 1200 아래 or 높이 800 아래');
			// 		$.fn.fullpage.setResponsive(true);

			// 	} else{
			// 		$.fn.fullpage.setResponsive(false);
			// 	}
			// } else{
			// 	//console.log('줌 상태')
			// 	$.fn.fullpage.setResponsive(true);
			// }
			if($('body').hasClass('is_zoom')){
				$.fn.fullpage.setResponsive(true);
			}
		}
	}

	var zoom_area = {
		init : function(){
			this.action();
		},
		action : function(){
			
			var nowZoom = 100;
			var nowZoom_f = 1;
			var zoomcontrol = {		
				zoomout : function(){
					nowZoom = nowZoom - 10;
					nowZoom_f /=1.2;
					if(nowZoom <= 70) nowZoom = 70;
					zoomcontrol.zooms();
					return false;
				},
				zoomin : function(){
					nowZoom = nowZoom + 10;
					nowZoom_f *=1.2;
					if(nowZoom >= 200) nowZoom = 200;
					zoomcontrol.zooms();
					return false;
				},
				zooms : function(){
					
					$('body').css({
						'zoom':nowZoom + '%',
						'MozTransform' : 'scale('+nowZoom_f+')',
						'MozTransformOrigin' : '0 0',
						'OTransform' : 'scale('+nowZoom_f+')',
						'OTransformOrigin' : '0 0'
					});

					$('body').addClass('is_zoom');
					
					if($('.wrapper').hasClass('is_main')){
						$.fn.fullpage.setResponsive(true); //반응형 모드 설정(autoScrolling 끄기 -> 스크롤 생김)

					}

					// alert 메세지
					if(nowZoom==70){ //70% 축소
						alert ('더 이상 축소할 수 없습니다.');
					}			
					if(nowZoom==100){
						$('body').removeClass('is_zoom');

						if($('.wrapper').hasClass('is_main')){
							$.fn.fullpage.setResponsive(false); //반응형 모드 설정(responsiveWidth나 responsiveHeight 옵션이 실행)

						}
					}
					if(nowZoom==200){ //200% 확대
						alert ('더 이상 확대할 수 없습니다.');
					}
				}		
			};
					
			$('.zoom_box .btn_zoom_in').on('click', function(){
				zoomcontrol.zoomin();
				return false;
			});
			$('.zoom_box .btn_zoom_out').on('click', function(){
				zoomcontrol.zoomout();
				return false;
			});	
		}
	}
	
	// gnb_box ---------------------------
	var gnb_box = {
		init : function(){
			this.action();
		},
		action : function(){

			$('.gnb_box ul.dep_02 li').each(function(){
				if($(this).find('ul').length){
					$(this).addClass('arrow');
				}				
			});
			
			//pc
			$('.gnb_box ul li').on('mouseenter focusin',function(){
				if($(window).width() > 1199){
					if($(this).closest('ul').hasClass('dep_01')=== true){	
						$(this).siblings().find('.dep_con').hide();
						$(this).find('.dep_con').stop().slideDown();
						$(this).closest('li').siblings().removeClass(isOpen);
					}else if($(this).closest('ul').hasClass('dep_02')=== true){
					}else if($(this).closest('ul').hasClass('dep_03')=== true){	
					}
					$(this).closest('li').siblings().removeClass(isOpen);
					$(this).closest('li').addClass(isOpen);
					$('.gnb_area').addClass('dim_open');
				}
			});
	
			$('.gnb_area .dep_01 > li > a').on('focus',function(){
				if($(window).width() > 1199){
					$('.gnb_box ul.dep_02 li').removeClass(isOpen);
				}
			});
	
			$('.gnb_box').on('mouseleave',function(){
				if($(window).width() > 1199){
					$('.gnb_area').removeClass('dim_open');
					$('.gnb_box ul li').removeClass(isOpen);
					$(this).find('.dep_con').hide();
				}
			})
	
			$('.gnb_box').last().find('li>a').last().on('focusout',function(){
				if($(window).width() > 1199){
					$('.gnb_area').removeClass('dim_open');
					$('.gnb_box ul li').removeClass(isOpen);
					$(this).find('.dep_con').hide();
				}
			})

			$('.gnb_box .dep_01 li:last-child .dep_con .dep_02 li').last().children('a').on('blur',function(){
				$(this).closest('.dep_con').hide();
			});

			//mob
			$('.gnb_area .dep_01 > li > a').on('click', function(e){
				if($(window).width() <= 1199){
					e.preventDefault();
					if(!$(this).closest('li').hasClass(isOpen)){

						$('.gnb_area li.is_open').removeClass(isOpen);
						$('.gnb_area .dep_02_wrap').stop().slideUp();
						$('.gnb_area .dep_03_wrap').stop().slideUp();

						$(this).closest('li').addClass(isOpen);
						$(this).siblings('.dep_con').find('.dep_02_wrap').stop().slideDown()

					} else{
						$(this).closest('li').removeClass(isOpen);
						$(this).siblings('.dep_con').find('.dep_02_wrap').stop().slideUp();
					}		
				}
			});

			$('.gnb_area .dep_02 > li > a').on('click', function(e){
				if($(window).width() <= 1199){
					if($(this).closest('li').hasClass('arrow')=== true){
						e.preventDefault();
					}
					if(!$(this).closest('li').hasClass(isOpen)){

						$('.gnb_area .dep_02 > li.is_open').removeClass(isOpen);
						$('.gnb_area .dep_03_wrap').stop().slideUp();

						$(this).closest('li').addClass(isOpen);
						$(this).siblings('.dep_03_wrap').stop().slideDown();

					} else{
						$(this).closest('li').removeClass(isOpen);
						$(this).siblings('.dep_03_wrap').stop().slideUp();
					}	
				}	
			});

			//quick menu
			$('.btn_quick').on('click',function(){
				$(this).toggleClass(isOpen);
				if($(this).hasClass(isOpen)=== true){
					if($('.gnb_area').hasClass('search_open')){
						$('.gnb_area').toggleClass('search_open');
						$('.search_area .search_box .inner').stop().slideUp(400);
					}
					$(this).siblings('.quick_box_wrap').find('.quick_box').stop().slideDown(400);
				}else{
					$(this).siblings('.quick_box_wrap').find('.quick_box').stop().slideUp(400);
				}
			});

			$('.quick_area').on('mouseleave',function(){
				$('.qui_menu button.btn_quick').removeClass(isOpen);
				$('.qui_menu .quick_box').stop().slideUp(400);
			});
			
			$('button.btn_t_search').on('focusout',function(){
				if($(window).width() > 1199){
					$('.gnb_area').removeClass('search_open');
					$('.search_area .search_box .inner').stop().slideUp(400);
				}
			});

			//btn_share -> addthis로 수젇
			$('.btn_share').on('click',function(){
				$(this).toggleClass(isOpen);
				if($(this).hasClass(isOpen)=== true){
					$(this).siblings('.addthis_inline_share_toolbox').find('.at-share-btn-elements').stop().slideDown(400);
				}else{
					$(this).siblings('.addthis_inline_share_toolbox').find('.at-share-btn-elements').stop().slideUp(400);
				}
			});

			//btn_s_menu
			$('.gnb_area .menu_area > li.search_area > button').on('click',function(){
				$(this).closest('.gnb_area').toggleClass('search_open');
				if($(this).closest('.gnb_area').hasClass('search_open')=== true){
					$(this).siblings('.search_box').find('.inner').stop().slideDown(400);
					if($('.qui_menu button.btn_quick').hasClass(isOpen)){
						$('.qui_menu button.btn_quick').toggleClass(isOpen);
						$('.qui_menu .quick_box .inner').stop().slideUp(400);
					}
				}else{
					$(this).siblings('.search_box').find('.inner').stop().slideUp(400);
				}
			});

			// $('.search_area').on('mouseleave',function(){
			// 	if($(window).width() > 1199){
			// 		$('.gnb_area').removeClass('search_open');
			// 		$('.search_area .search_box .inner').stop().slideUp(400);
			// 	}
			// });

			$('.qui_menu .quick_box').last().find('li>a').last().on('focusout',function(){
				$('.qui_menu button.btn_quick').removeClass(isOpen);
				$('.qui_menu .quick_box').stop().slideUp(400);
			})

			//btn_mobmenu_box
			$('.gnb_area .menu_area > li.btn_mobmenu_box > button').on('click',function(){
				
				if(!$(this).closest('.header_wrap').hasClass('mobmenu_open')=== true){
					//not_scroll
					$('.wrapper').addClass('no_sc');
				}else{
					$('.wrapper').removeClass('no_sc');
				}
				$(this).closest('.header_wrap').toggleClass('mobmenu_open');
			});

		}
	};

	//gnb 사이즈 조절시
	function gnb_resize(){
		if($(window).width() > 1199){
			$('.header_wrap').removeClass('mobmenu_open');
			$('.wrapper').removeClass('no_sc');
		}
		$('.gnb_box ul li').removeClass(isOpen);
	}

	//header 통합검색 width
	function searchWidth(){
		if($('.search_box').length){
			$('.search_box').css('width',$('body').innerWidth());
		}
	}



	// snb_area --------------------------------
    var snb_area = {
		init : function(){
			this.action();
		},
		action : function(){

			$('.snb_area .dep_01 > li .dep_02 > li').each(function(){
				if($(this).find('ul').length){
					$(this).addClass('arrow');
				}				
			});

            $('.snb_area ul.dep_02 > li > a').on('click', function(){
				if($('.snb_area ul.dep_02 > li').hasClass('arrow')=== true){
					if(!($(this).closest('li').hasClass(isOpen)) && !($(this).closest('li').hasClass(isActive))){
						$('.snb_area ul.dep_02 li').removeClass(isOpen).removeClass(isActive);
						$('.snb_area .dep_03').stop().slideUp();
						$(this).closest('li').addClass(isOpen);
						$(this).siblings('.dep_03').stop().slideDown();
					} else{
						$(this).closest('li').removeClass(isOpen).removeClass(isActive);
						$(this).siblings('.dep_03').stop().slideUp();
					}
				}else{
					$('.snb_area ul.dep_02 li').removeClass(isOpen).removeClass(isActive);
					$('.snb_area .dep_03').stop().slideUp();
					$(this).closest('li').addClass(isOpen);
				}
                
            });
        }
    };

	//푸터 - 프린트 할 경우 위치가 흔들려 주석처리함
	/* function footer_areaFixed(){
		if($('.wrapper').hasClass('is_sub')=== true){
			$('.wrapper.is_sub .body_wrap').css('padding-bottom', $('.footer_area').outerHeight());
		}
	}*/

	//탑버튼 푸터 위에 고정 -> stickyFooter로 수정
	// function goTop_Fixed(){
	// 	var footArea = $('.footer_area:not(.p_right)'),
	// 		btnGoto = $('.btn_gotop');
	// 	var h = $(document).height() - $(window).height() - footArea.outerHeight() + (footArea.outerHeight()/2);

	// 	if($(window).width() > 1700){
	// 		if($(this).scrollTop() >= h) btnGoto.css('bottom', footArea.outerHeight() + 70);
	// 		else btnGoto.css('bottom', '');
	// 	}else if($(window).width() > 750){
	// 		if($(this).scrollTop() >= h) btnGoto.css('bottom', footArea.outerHeight() + 30);
	// 		else btnGoto.css('bottom', '');
	// 	}else{
	// 		if($(this).scrollTop() >= h) btnGoto.css('bottom', footArea.outerHeight() - 260);
	// 		else btnGoto.css('bottom', '');
	// 	}
	// }

	// 탑버튼 하단 고정
	function stickyFooter(){
		var docH = $(document).outerHeight(), // 문서전체높이
			scrollPos = $('html, body').scrollTop() || $(window).scrollTop(),// 문서 전체 높이 중 스크롤 위치
			winH = $(window).outerHeight(),// 창높이
			footerH = $('.footer_area:not(.p_right)').outerHeight(),
			btnTopH = $('.btn_gotop').outerHeight();
			
		var gap = 0;
		var bottom = 0;
		gap = docH - footerH - winH - (btnTopH / 2); 
		bottom = scrollPos - gap;

		if(scrollPos > (gap + 30)){
			$('.btn_gotop').css('bottom', bottom + 'px');
		} else{
			$('.btn_gotop').css('bottom', 30 + 'px');
		}
	}
	
	// 상단으로 가는 버튼
    $('.btn_gotop').on('click', function(e){
		e.preventDefault();
		$(window).scrollTop(0);
    })

	function goTop_Show(){
		if($(window).scrollTop() > 100){
			$('.btn_gotop').addClass(isOpen);
		}else{
			$('.btn_gotop').removeClass(isOpen);
		}
	}
	
	// 비디오 영역 자막 숨기기
	$('.video_caption .title').click(function(){
		if(!$(this).hasClass('is-closed')){
			if($('.wrapper').hasClass('lang_eng')=== true){ $(this).text('View subtitles');}
			else if($('.wrapper').hasClass('lang_jpn')=== true){ $(this).text('字幕を表示');}
			else if($('.wrapper').hasClass('lang_chn')=== true){ $(this).text('字幕查看');}
			else{ $(this).text('자막보기');}

			$(this).addClass('is-closed');
			$(this).siblings('.cont').hide();
		} else{
			if($('.wrapper').hasClass('lang_eng')=== true){ $(this).text('Hide subtitles');}
			else if($('.wrapper').hasClass('lang_jpn')=== true){ $(this).text('字幕を非表示');}
			else if($('.wrapper').hasClass('lang_chn')=== true){ $(this).text('字幕隐藏');}
			else{ $(this).text('자막숨기기');}

			$(this).removeClass('is-closed');
			$(this).siblings('.cont').show();
		}
	})
	
    // textarea 카운트 
    $('[data-textarea]').each(function(index, item){
        var textareaName = $(this).data('textarea');
        var lengthCnt = $('[data-textarea-cnt="' + textareaName + '"]');

        lengthCnt.html($(this).val().length);
        
        $(item).on('input', function(){
            lengthCnt.html($(this).val().length);
        })
    })

    // 댓글 수정
	$('.comment_list .btn_edit').on('click',function(){
		$(this).parents('li').toggleClass(isOpen);
	});

    // 댓글 모바일
	$('.comment_list .btn_open').on('click', function(){
		if(!$(this).closest('.btn_group').hasClass('is-open')){
			$('.comment_list .btn_group').removeClass('is-open');
			$(this).closest('.btn_group').addClass('is-open');
		} else{
			$(this).closest('.btn_group').removeClass('is-open');
		}
	})

	// 팝업 --------------------------------
    //$('.popup_txt').attr('tabindex', '0');
	
	if($('.popup_area').length){
		if(!$('.popup_area').hasClass('is_hidden')){ // ready 시 팝업 열려있는 상태

			$(item).find('.btn_p_close').on({
				'click' : function(){
					$(this).closest('.popup_area').addClass('is_hidden');
					$(this).closest('.wrapper').removeClass('pop_open');
				},
				'keydown' : function(e){
					var v_keyCode = e.keyCode || e.which;
					if(v_keyCode == 9){ 
						if(!e.shiftKey){ 
							$(this).parents('.popup_area').find('.popup_txt').focus();
							return false;
						} 
					}
				}
			});
		} else{ // ready 시 팝업 닫혀있는 상태
			var focusTmp = undefined;
			var bodyScrollTop = 0;
	
			$('[data-popup]').on('click', function(e){
				
				var popBtnName = $(this).data('popup');
				var popBtnCon = $('[data-popup-con="' + popBtnName + '"]');
				popBtnCon.removeClass('is_hidden');
				$(this).closest('.wrapper').addClass('pop_open');
						
				focusTmp = $(this);
				//popBtnCon.find('.popup_txt').focus();
			
				$.bodyFixedScroll(scrollResponsiveBool);
	
				// $(popBtnCon).find('.sc_custom').attr('tabindex', -1).on('blur focusout', function () {
				// 	$(this).removeAttr('tabindex');
				// }).focus();
				
				$(popBtnCon).find('.popup_header .logo_box > a').focus();
				$(popBtnCon).not(".pop_sitemap").find('.sc_custom').attr('tabindex', 0)
				$(popBtnCon).not(".pop_sitemap").find('.popup_box').attr('tabindex', 0).focus();
		
				$('.popup_txt').on({
					'keydown' : function(e){
						var v_keyCode = e.keyCode || e.which;
						if(v_keyCode == 9){ 
							if(e.shiftKey && e.currentTarget == e.target){ 
								$(this).closest('.popup_area').find('.btn_p_close').focus();
								return false;
							} 
						}
					}
				})
				$('.btn_all_box .btn_p_close').on({
					'keydown' : function(e){
						var v_keyCode = e.keyCode || e.which;
						if(v_keyCode == 9){ 
							// if(e.shiftKey && e.currentTarget == e.target){ 
								$('.popup_header .logo_box > a').focus();
								return false;
							// } 
						}
					}
				})
				$('.popup_header .logo_box > a').on({
					'keydown' : function(e){
						var v_keyCode = e.keyCode || e.which;
						if(v_keyCode == 9){ 
							if(e.shiftKey && e.currentTarget == e.target){ 
								$('.btn_p_close').focus();
								return false;
							} 
						}
					}
				})
				$('.popup_area:not(.pop_sitemap) .popup_box').on({
					'keydown' : function(e){
						var v_keyCode = e.keyCode || e.which;
						if(v_keyCode == 9){ 
							if(e.shiftKey && e.currentTarget == e.target){ 
								// $('.popup_box').focus();
								$('.popup_area:not(.pop_sitemap) .popup_footer .btn_p_close').focus();
								return false;
							} 
						}
					}
				})
				$('.popup_area:not(.pop_sitemap) .popup_footer .btn_p_close').on({
					'keydown' : function(e){
						var v_keyCode = e.keyCode || e.which;
						if(v_keyCode == 9){ 
							if(e.shiftKey && e.currentTarget == e.target){ 
								$('.popup_box').focus();
								return false;
							} 
						}
					}
				})
			});
		
			$('.popup_area .btn_p_close').on({
				'click' : function(){
					$(this).closest('.popup_area').addClass('is_hidden');
					$(this).closest('.wrapper').removeClass('pop_open');
	
					$.bodyFixedScroll(scrollResponsiveBool);
					focusTmp.focus();
				},
				'keydown' : function(e){
					var v_keyCode = e.keyCode || e.which;
					if(v_keyCode == 9){ 
						if(!e.shiftKey){ 
							$(this).parents('.popup_area').find('.popup_txt').focus();
							return false;
						} 
					}
				}
			});
		}
	}	

	$.bodyFixedScroll = function(scrollResponsiveBool){

		// console.log(scrollResponsiveBool);
		if(scrollResponsiveBool == true){
			// console.log('--------- 모바일 or 줌상태 or 서브 ---------');
			// console.log('scrollResponsiveBool : '+scrollResponsiveBool)
		
			if($('.popup_area:not(.is_hidden)').length){
				// console.log('팝업 열림');				
			
				if($('.wrapper').hasClass('is_main')){
					$.fn.fullpage.setLockAnchors(true);
				}
				disabledScroll();
			} else{
				// console.log('팝업 닫힘');
				if($('.wrapper').hasClass('is_main')){
					$.fn.fullpage.setLockAnchors(false);
				}
				abledScroll();
			}

		} else{
			// console.log('--------- PC 풀페이지 메인 ---------');
			// console.log('scrollResponsiveBool : '+scrollResponsiveBool)
			initScroll();
			
			$.fn.fullpage.setLockAnchors(false);
		
			if($('.popup_area:not(.is_hidden)').length){
				console.log('팝업 열림');
				$.fn.fullpage.setAllowScrolling(false);
			} else{
				console.log('팝업 닫힘');				
				$.fn.fullpage.setAllowScrolling(true);
			}
		}
	}

	function initScroll(){
		$('body').css({
			'position':'',
			'overflow':'hidden',
			'top':'',
			'left':'',
			'right':'',
		});
	}
	function disabledScroll(){
		bodyScrollTop = $(window).scrollTop();
		$('body').css({
			'position':'fixed',
			'overflow-y':'scroll',
			'top': -bodyScrollTop + 'px' ,
			'left':'0px',
			'right':'0px',
		})
	}
	function abledScroll(){			
		$('body').css({
			'position':'',
			'overflow':'visible',
			'top':'',
			'left':'',
			'right':'',
		});

		$(window).scrollTop(bodyScrollTop)
	}

	// 셀렉트박스 radio 커스텀 --------------------------------
	var selectToggle = function(target){ // target은 select_wrap
        
        if(!target.hasClass('is_open')){
            $('.select_wrap').removeClass('is_open');
            $('.select_wrap .option').stop().fadeOut(100);
            target.addClass('is_open');
            target.find('.sel_option').stop().fadeIn(100);
        } else{
            target.removeClass('is_open');
            target.find('.sel_option').stop().fadeOut(100);
            target.find('a').focus();
        }
    }

	//language
    $('.select_wrap a').on('click', function(e){
        selectToggle($(this).parents('.select_wrap'));
    })
	$('.select_wrap.pc_lang').on('mouseleave',function(){
		$(this).removeClass('is_open')
		$('.select_wrap.pc_lang .sel_option').stop().hide();
	});

	$('.select_wrap').find('li:last-child() a').on('focusout',function(){
		$(this).closest('.select_wrap').removeClass(isOpen);
	})

	//selectbox 텍스트 변환(퍼블용)
	/* $('.select_wrap .sel_option a').on('click',  function(){
		var rel = $(this).text()
		console.log(rel);
		$(this).parents('.select_wrap.sel_ty01').find('.btn_sel').text(rel);
	}); */

	// 선택 영역 외 클릭 시 이벤트 -------------------------------------------
    $('body').on('click', function(e){

        // 셀렉트 외 선택 시 셀렉트 옵션 닫힘
        if(!$('.select_wrap').has(e.target).length){
            $('.select_wrap').removeClass('is_open');
            $('.select_wrap').find('.is_open').hide();
        }

    });
	
	// footer 슬라이드
	var bannerSwiper = new Swiper('.bannerSwiper', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
        autoHeight: true,
		//effect : 'fade',
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
        paginationClickable: true,
        autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		breakpoints: {
			1199: {
			  slidesPerView: 2,
			  spaceBetween: 5,
			},
		},
		on: {
			init : function(){
				var thisSlide = $('.bannerSwiper');
				thisSlide.find('.swiper-slide').attr("tabindex", -1);
				thisSlide.find('.swiper-slide a').attr("tabindex", -1);
				thisSlide.find('.swiper-slide-active').attr("tabindex", -1);
				thisSlide.find('.swiper-slide-active a').attr("tabindex", 0);
				if($(window).innerWidth() >= 1200){
					thisSlide.find('.swiper-slide-next').attr("tabindex", -1);
					thisSlide.find('.swiper-slide-next a').attr("tabindex", 0);
				}
			},
			slideChangeTransitionEnd : function(){
				var thisSlide = $('.bannerSwiper');
				thisSlide.find('.swiper-slide').attr("tabindex", -1);
				thisSlide.find('.swiper-slide a').attr("tabindex", -1);
				thisSlide.find('.swiper-slide-active').attr("tabindex", -1);
				thisSlide.find('.swiper-slide-active a').attr("tabindex", 0);
				if($(window).innerWidth() >= 1200){
					thisSlide.find('.swiper-slide-next').attr("tabindex", -1);
					thisSlide.find('.swiper-slide-next a').attr("tabindex", 0);
				}
			}
		},
    });

	
    $(".banner_area .swiper-button-pause").on('click',function(){
		bannerSwiper.autoplay.stop();
	});

	$(".banner_area .swiper-button-play").on('click',function(){
		bannerSwiper.autoplay.start();
	});

	// 푸터 배너 인디게이터
	$('.ind_middle > button').on('click',function(){
		$(this).toggleClass(isOpen);
		$(this).siblings().toggleClass(isOpen);
	});

	// 토글
	$('.toggle_area > li:first-child()').addClass(isOpen);
	$('.toggle_area > li:first-child() .toggle_caption .cont').slideDown();

	var acco_txt = $('<span class="blind">축소됨</span>');
	$('.toggle_caption .title').children('a').append(acco_txt);
	$('li.is_open > .toggle_caption > .title').children().find('span.blind').text("확대됨");

	$('.toggle_caption .title').on('click',function(){
		$(this).closest('li').siblings().removeClass(isOpen);
		$(this).closest('li').toggleClass(isOpen);
		$(this).siblings('.cont').slideToggle(400);
		$(this).closest('li').siblings().find('.cont').slideUp(400);
		if($(this).closest('li').hasClass(isOpen)){
			$(this).children().find('span.blind').text("확대됨");
		}else{
			$(this).children().find('span.blind').text("축소됨");
		}
		$('.toggle_caption .title').not(this).children().find('span.blind').text("축소됨");
	});
	
	// 탭
	$('.basic_tab').each(function(){
		$('.basic_tab .tab li').on("click", function(){
			var Tab = $(this).attr('rel');
			$('.basic_tab .tab li').removeClass('on');
			$('.basic_tab .tab_box').removeClass('on');
			$(this).addClass('on');
			$('#' + Tab).addClass('on');
			$(this).siblings('li').find('a').attr('title','');
			$(this).find('a').attr('title','선택됨');
			return false;
		})

	});
	// $('.basic_tab .tab li').on('click', function(){
	// 	var tab = $(this);
	// 	var idx = tab.index();
	// 	var box = tab.closest('.basic_tab');

	// 	box.find('.tab li').removeClass('on');
	// 	box.find('.tab_box').removeClass('on');
	// 	box.find('.tab_box:eq('+idx+')').addClass('on');
		
	// 	tab.addClass('on');
	// 	tab.closest('.tab_box').addClass('on');

	// 	return false;
	// });

	
	
	
	/* ------------------ 서브 ------------------ */
	// 역사 · 영토현안 학술대응 연구(스와이퍼 공통)
	if($('.basic_s_area').length){
		var basicSwiper = [];
		var basciPagination = [];
		
		$(".basic_s_area").each(function(index, element){
			var $this = $(element);
			$this.children('[class*="swiper-container"]').addClass('instance-' + index);
			basciPagination[index] = $('.instance-' + index).siblings('.swiper-pagination');
			basicSwiper[index] = new Swiper('.instance-' + index, {
				speed: 400,
				spaceBetween: 0,
				slidesPerView : 1,
				//effect : 'fade',
				pagination: {
					el: basciPagination[index],
					type: 'bullets',
					clickable: true,
					renderBullet: function (index, className) {
						return '<button type="button" class="' + className + '"><span class="blind">' + (index + 1) + " slide </span></button>";
					},
				},
			});
		});
	}



	/* ============================================ */
	viewCheck.init(); // window 사이즈 체크
	
	/* ------------------ 메인 ------------------ */
	if($('.wrapper').hasClass('is_main')){
								/* 스와이퍼 선언 */
		visualSwiper.init(); 	//sec01 배경
		//promotionSwiper 		//sec01 홍보영역
		notice_area(); 			//sec02 공지사항
		report_area(); 			//sec02 보도자료
		//popzoneSwiper 		//sec02 팝업존
		nahfnews_area(); 		//sec02 재단소식
		public_area(); 			//sec03 간행물
		business_area();		//sec04 주요사업


		zoomCheckResize(); 		// zoom 스크롤 체크
	}

	/* ------------------ 서브 ------------------ */
	if($('.wrapper').hasClass('is_sub')){
		snb_area.init();
	}

	/* ------------------ 공통 ------------------ */
	zoom_area.init();
	gnb_box.init();
	gnb_resize(); 				//gnb 사이즈 조절시
	searchWidth(); 				//header 통합검색 width
	// footer_areaFixed(); 		//푸터 - 프린트 할 경우 위치가 흔들려 주석처리
	stickyFooter();				//탑버튼 푸터 위에 고정
	goTop_Show();
	$(window).on('resize', function() {
		if($('.wrapper').hasClass('is_main')){
			$.fn.fullpage.reBuild();

		}
		//모바일에서 줌기능 해제
		if($(window).width() < 1200){
			$('body').css({
				'zoom':'',
				'MozTransform' : '',
				'MozTransformOrigin' : '',
				'OTransform' : '',
				'OTransformOrigin' : ''
			});
			$('body').removeClass('is_zoom');
		}

		viewCheck.init();
		
		notice_area();
		report_area();
		nahfnews_area();
		business_area();
		public_area();

		// gnb 이벤트 중첩 방지 인라인 스타일 제거
		$('.dep_con, .dep_02_wrap, .dep_03_wrap').attr('style', '');
		searchWidth();
		gnb_resize();

		// footer_areaFixed();
		stickyFooter();
		goTop_Show();
	});

	$(window).on('scroll', function(){
		stickyFooter();
		goTop_Show();
    });

	//접근성 : 풀페이지 네비 위치 이동
	$("#fp-nav").insertAfter(".header_wrap");

	var _shift = false;
	
		$(".is_main .sec01 .promotion-swiper a.img_box").on("keydown", function(event){
			console.log("_shift: ");
			if(event.shiftKey && event.keyCode == 9){
				setTimeout(function(){
					$(".is_main .sec01 .swiper-button-next").focus();
				},100);
				return false;
			}
			if(event.keyCode == 9 && !_shift){
				$("#fp-nav > ul > li:eq(1) a").trigger("click");
				setTimeout(function(){
					$(".sec02 .section_con .zone01 .maintab li.is_open .tab_top > a").focus();
				},300);
				return false;
			}
		});		

		$(".sec02 .section_con .zone01 .maintab li.is_open .tab_top > a").on("keydown", function(event){
			if(event.shiftKey && event.keyCode == 9){
				console.log("shift + tab");
				$("#fp-nav > ul > li:eq(0) a").trigger("click");
				setTimeout(function(){
					$(".is_main .sec01 .swiper-slide-active > a.img_box").focus();
				},300);
				return false;
			}
		});
		/* $(".sec02 .section_con .zone02 .maintab li:last-child .tab_top > a").on("keydown", function(event){
			console.log("adad")
			if(event.shiftKey && event.keyCode == 9){
				setTimeout(function(){
					$(".sec02 .section_con .zone02 .maintab li:nth-child(2) .tab_top > a").focus();
				},100);
				return false;
			}
			if(event.keyCode == 9 && !_shift){
				$("#fp-nav > ul > li:eq(2) a").trigger("click");
				setTimeout(function(){
					$(".sec03 .policy_box:first-child > a").focus();
				},300);
				return false;
			}
		}); */

		//sec02 뉴스레터 마지막 .btn_more 이동
		$(".sec02 .section_con .zone02 .maintab li:last-child .tab_con .btn_more").on("keydown", function(event){
			if(event.keyCode == 9 && !_shift){
				$("#fp-nav > ul > li:eq(2) a").trigger("click");
				setTimeout(function(){
					$(".sec03 .policy_box:first-child > a").focus();
				},300);
				return false;
			}
		});

		www.factsaboutkorea.go.kr
		var sec02Timeer = null;
		if(!($('.sec02 .section_con .zone02 .maintab > li:last-child').hasClass('is_open'))){			
			$(".sec02 .section_con .zone02 .maintab > li:last-child .tab_top > a").on("keydown", function(event){
				if(!($('.sec02 .section_con .zone02 .maintab > li:last-child').hasClass('is_open'))){
					if(event.shiftKey && event.keyCode == 9){
						console.log("1.1.1. shift");
						
						setTimeout(function(){
							$(".sec02 .section_con .zone02 .maintab li:nth-child(2) .tab_top > a").focus();
						},100);
						return false;
					}
					if(event.keyCode == 9 && !_shift){
						console.log("1.1.2.tab");
						$("#fp-nav > ul > li:eq(2) a").trigger("click"); // .on("click") 시 오류
						//$("#fp-nav > ul > li:eq(2) a").on("click")
						sec02Timeer = setTimeout(function(){
							$(".sec03 .policy_box:first-child > a").focus();
						},300);
						return false;
					}
				}
			});

			$('.section_con .maintab_area .maintab > li .tab_top .tab_tit').on('click',function(event){
				// console.log('2: '+ $('.sec02 .section_con .zone02 .maintab > li:last-child').attr('class'));
				if(!($('.sec02 .section_con .zone02 .maintab > li:last-child').hasClass('is_open'))){
					// 3.1.open 없을 때
					console.log("3.1.open 없을 때");
					if(event.keyCode == 9 && !_shift){
						// 1.1.2.tab
						console.log("1.1.2.tab");
						$("#fp-nav > ul > li:eq(2) a").trigger("click"); // .on("click") 시 오류
						//$("#fp-nav > ul > li:eq(2) a").on("click")
						sec02Timeer = setTimeout(function(){
							$(".sec03 .policy_box:first-child > a").focus();
						},300);
						return false;
					}
				}else{
					//3.2.open 있을 때
					console.log("3.2.open 있을 때");
					$(".sec02 .section_con .zone02 .maintab > li:last-child .tab_top > a").on("keydown", function(event){
						// 3.2.1.탭 되었을 때
						console.log("3.2.1.탭 되었을 때");
						// if(event.keyCode == 9 && !_shift){
							// 3.2.1.1.tab
							console.log("3.2.1.1.tab");
							$("#fp-nav > ul > li:eq(1) a").trigger('click');
							clearTimeout(sec02Timeer);
						// }
	
					});
				}
			});
		}else{
			// 2. open 있을 때
			console.log("2. open 있을 때 ------ ");
			//console.log('2: '+ $('.sec02 .section_con .zone02 .maintab > li:last-child').attr('class'));			
		}
		
		
		


		$(".sec03 .policy_box:first-child > a").on("keydown", function(event){
			if(event.shiftKey && event.keyCode == 9){
				$("#fp-nav > ul > li:eq(1) a").trigger("click");
				setTimeout(function(){
					$(".sec02 .section_con .zone02 .maintab li:last-child .tab_top > a").focus();
				},300);
				return false;
			}
		});
		$(".sec03 .publication_con .public_area .public_slide:last-child a").on("keydown", function(event){
			if(event.shiftKey && event.keyCode == 9){
				setTimeout(function(){
					$(".sec03 .publication_con .public_area .public_slide:nth-child(4) a").focus();
				},300);
				return false;
			}
			if(event.keyCode == 9 && !_shift){
				$("#fp-nav > ul > li:eq(3) a").trigger("click");
				setTimeout(function(){
					$(".sec04 .business_area .swiper-slide:first-child > .txt_box > a").focus();
				},300);
				return false;
			}
		});
		

		$(".sec04 .business_area .swiper-slide:first-child > .txt_box > a").on("keydown", function(event){
			if(event.shiftKey && event.keyCode == 9){
				$("#fp-nav > ul > li:eq(2) a").trigger("click");
				setTimeout(function(){
					$(".sec03 .publication_con .public_area .public_slide:last-child a").focus();
				},300);
				return false;
			}
		});
		$(".sec04 .business_area .link_box > a").on("keydown", function(event){
			if(event.shiftKey && event.keyCode == 9){
				setTimeout(function(){
					$(".sec04 .business_area .business-swiper li:last-child a").focus();
				},100);
				return false;
			}
			if(event.keyCode == 9 && !_shift){
				$("#fp-nav > ul > li:eq(4) a").trigger("click");
				setTimeout(function(){
					$(".sec05 .d_search_inner .d_search_area > input").focus();
				},300);
				return false;
			}
		});

		$(".sec05 .d_search_inner .d_search_area > input").on("keydown", function(event){
			if(event.shiftKey && event.keyCode == 9){
				$("#fp-nav > ul > li:eq(3) a").trigger("click");
				setTimeout(function(){
					$(".sec04 .business_area .link_box > a").focus();
				},300);
				return false;
			}
		});
		$(".sec05 .d_search_inner .d_search_area > input + button").on("keydown", function(event){
			if(event.shiftKey && event.keyCode == 9){
				setTimeout(function(){
					$(".sec05 .d_search_inner .d_search_area > input").focus();
				},300);
				return false;
			}
			if($(window).innerWidth() >= 1200 ){
				if(event.keyCode == 9 && !_shift){
					$("#fp-nav > ul > li:eq(5) a").trigger("click");
					setTimeout(function(){
						$(".sec06 .footer_area .foo_list li:first-child > a").focus();
					},200);
					return false;
				}
			}else if($(window).innerWidth() < 1199){
				if(event.keyCode == 9 && !_shift){
					$("#fp-nav > ul > li:eq(5) a").trigger("click");
					setTimeout(function(){
						$(".sec06 .footer_area .foo_family .banner_area .swiper_indicator .swiper-button-prev").focus();
					},200);
					return false;
				}
			}
			
		});

		if($(window).innerWidth() >= 1200 ){
			$(".sec06 .footer_area .foo_list li:first-child > a").on("keydown", function(event){
				if(event.shiftKey && event.keyCode == 9){
					$("#fp-nav > ul > li:eq(4) a").trigger("click");
					setTimeout(function(){
						$(".sec05 .d_search_inner .d_search_area > input + button").focus();
					},200);
					return false;
				}
			});
		}else if($(window).innerWidth() < 1199){
			$(".sec06 .footer_area .foo_family .banner_area .swiper_indicator .swiper-button-prev").on("keydown", function(event){
				if(event.shiftKey && event.keyCode == 9){
					setTimeout(function(){
						$(".sec05 .d_search_inner .d_search_area > input + button").focus();
					},200);
					return false;
				}
			});
		}
		
		
	


});