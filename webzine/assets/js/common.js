/* 
	※ 번역 필요한 텍스트
	-  자막보기, 자막숨기기
	- 더 이상 축소할 수 없습니다.,더 이상 확대할 수 없습니다.
*/

$(function(){
	// 스킵네비게이션 focus
	$('.skip_nav a').on({
		'click' : function(){
			var skipTo = "#" + this.href.split('#')[1];
			$(skipTo).attr('tabindex', -1).on('blur focusout', function () {
			$(this).removeAttr('tabindex');
				}).focus();
			}
	})
	
	var isPc = 0,
		isTablet = 0,
		isMobile = 0;
	var isOpen = 'is_open';
	var isActive = 'is_active';
	var wrap = $('.wrapper');

	var resizeTimer;
	$(window).bind('resize', function( ) {
		window.clearTimeout( resizeTimer );
		resizeTimer = window.setTimeout( resizeFunction, 300 );
	});
	function resizeFunction(){
		if(window.innerWidth < 1200){
			//mob
			$('.gnb_box.dep_01 > li > a').on('click', function(e){
				e.preventDefault();
				if(!$(this).closest('li').hasClass(isOpen)){

					$('.gnb_box li.is_open').removeClass(isOpen);
					// $('.gnb_box .dep_02_wrap').stop().slideUp();
					// $('.gnb_box .dep_03_wrap').stop().slideUp();

					$(this).closest('li').addClass(isOpen);
					// $(this).siblings('.dep_con').find('.dep_02_wrap').stop().slideDown()

				} else{
					$(this).closest('li').removeClass(isOpen);
					// $(this).siblings('.dep_con').find('.dep_02_wrap').stop().slideUp();
				}	
			});
		}else{
				$('.gnb_box.dep_01 > li > a').off();
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
			
		}
	};
	
	//header 통합검색 width
	function searchWidth(){
		if($('.search_box').length){
			$('.search_box').css('width',$('body').innerWidth());
		}
	}searchWidth();


	$('.search_area').bind('mouseleave',function(){
		if(isPc){
			$('.gnb_area').removeClass('search_open');
			$('.search_area .search_box').stop().slideUp(400);
		}
	});
		
	$('button.btn_t_search').bind('focusout',function(){
		if(isPc){
			$('.gnb_area').removeClass('search_open');
			$('.search_area .search_box').stop().slideUp(400);
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
			$(this).siblings('.search_box').stop().slideDown(400);
			if($('.qui_menu button.btn_quick').hasClass(isOpen)){
				$('.qui_menu button.btn_quick').toggleClass(isOpen);
				$('.qui_menu .quick_box').stop().slideUp(400);
			}
		}else{
			$(this).siblings('.search_box').stop().slideUp(400);
		}
	});



	//btn_mobmenu_box
	$('.gnb_area .menu_area > li.btn_mobmenu_box > button').on('click',function(){
		
		if(!$(this).closest('.header_wrap').hasClass('mobmenu_open')=== true){
			//not_scroll
			wrap.addClass('no_sc');
		}else{
			wrap.removeClass('no_sc');
		}
		$(this).closest('.header_wrap').toggleClass('mobmenu_open');
	});
	
	//푸터
	function footer_areaFixed(){
		if(wrap.hasClass('is_sub')=== true){
			$('.wrapper.is_sub .body_wrap').css('padding-bottom', $('.footer_area').outerHeight());
		}
	}

	//탑버튼 푸터 위에 고정
	function goTop_Fixed(){
		var h = $(document).height() - $(window).height() - $('.footer_area').outerHeight() + ($('.footer_area').outerHeight()/2);
		if($(window).width() > 1700){
			if($(this).scrollTop() >= h) $('.btn_gotop').css('bottom', $('.footer_area').outerHeight() + 70);
			else $('.btn_gotop').css('bottom', '');
		}else if($(window).width() > 750){
			if($(this).scrollTop() >= h) $('.btn_gotop').css('bottom', $('.footer_area').outerHeight() + 30);
			else $('.btn_gotop').css('bottom', '');
		}else{
			if($(this).scrollTop() >= h) $('.btn_gotop').css('bottom', $('.footer_area').outerHeight() - 260);
			else $('.btn_gotop').css('bottom', '');
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
	

	// 셀렉트박스 radio 커스텀 --------------------------------
	//language
	if($('.select_wrap.pc_lang').length){
		if($('.select_wrap.pc_lang').hasClass(isOpen)){
			$('.select_wrap.pc_lang .btn_sel').append('<span class="blind a11y">확장됨</span>')
		}else{
			$('.select_wrap.pc_lang .btn_sel').append('<span class="blind a11y">축소됨</span>')
		}
	}
	$('.select_wrap.pc_lang').on('click',function(){
		if($(this).hasClass(isOpen) === true){
			$('.select_wrap.pc_lang .btn_sel').find('.a11y').text('확장됨');
		}else{
			$('.select_wrap.pc_lang .btn_sel').find('.a11y').text('축소됨');
		}
	});

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
		$(this).removeClass(isOpen)
		$('.select_wrap.pc_lang .sel_option').stop().hide();
		$('.select_wrap.pc_lang .btn_sel').find('.a11y').text('축소됨');
	});
	$('.select_wrap.pc_lang > a.btn_sel').on('keydown',function(event){
		if(event.shiftKey && event.keyCode == 9){
			$('.select_wrap.pc_lang').removeClass(isOpen)
			$('.select_wrap.pc_lang .sel_option').stop().hide();
			$('.select_wrap.pc_lang .btn_sel').find('.a11y').text('축소됨');
		}
	})

	$('.select_wrap.pc_lang .sel_option li:last-child a').on('keydown',function(event){
		if(event.shiftKey && event.keyCode == 9){
			if($('.select_wrap.pc_lang .sel_option li').length == 1){
				$('.select_wrap.sel_ty01 > .btn_sel').focus();
			}else{
				$('.select_wrap.pc_lang .sel_option li:last-child a').closest('li').prev('li').find('a').focus();
			}
			/*setTimeout(function(){
				$('.select_wrap.pc_lang .sel_option li:nth-child(2) a').focus();
			},100);*/
			return false;
		}
		if(event.keyCode == 9 && !_shift){
			$('.select_wrap.pc_lang .btn_sel').find('.a11y').text('축소됨');
			$('.select_wrap.pc_lang .sel_option').stop().hide();
			$(this).closest('.select_wrap').removeClass(isOpen);
		}
		
	});

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

    $(".swiper-button-pause").click(function(){
		bannerSwiper.autoplay.stop();
	});

	$(".swiper-button-play").click(function(){
		bannerSwiper.autoplay.start();
	});

	// 푸터 배너 인디게이터
	$('.ind_middle > button').on('click',function(){
		$(this).toggleClass(isOpen);
		$(this).siblings().toggleClass(isOpen);
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
	/* $('.basic_tab .tab li').on('click', function(){
		var tab = $(this);
		var idx = tab.index();
		var box = tab.closest('.basic_tab');

		box.find('.tab li').removeClass('on');
		box.find('.tab_box').removeClass('on');
		box.find('.tab_box:eq('+idx+')').addClass('on');
		
		tab.addClass('on');
		tab.closest('.tab_box').addClass('on');

		return false;
	});*/
	function gnb_resize(){
		var _shift = false;
		var timer = null;
		
		if($(window).width() > 1199){	
			$('.header_wrap').removeClass('mobmenu_open');
			$('.wrapper').removeClass('no_sc');
			$(".search_area .btn_t_search").on("keydown", function(event){
				if(event.shiftKey && event.keyCode == 9){
					setTimeout(function(){
						$(".search_area .search_text").focus();
					},100);
					return false;
				}
				if(event.keyCode == 9 && !_shift){
					setTimeout(function(){
						$(".gnb_area .menu_area > li > button.btn_all").focus();
					},100);
					return false;
				}
			});
		}else if($(window).width() <= 1199){
			// fullpage 벗어날 때 통합검색 tab 무한 돌기
				$(".search_area .btn_t_search").on("keydown", function(event){
					if(event.shiftKey && event.keyCode == 9){
						setTimeout(function(){
							$(".search_area .search_text").focus();
						},100);
						return false;
					}
					if(event.keyCode == 9 && !_shift){
						setTimeout(function(){
							$(".search_area .btn_close").focus();
						},100);
						return false;
					}
				});
				$(".search_area .btn_close").on("keydown", function(event){
					if(event.shiftKey && event.keyCode == 9){
						setTimeout(function(){
							$(".search_area .btn_t_search").focus();
						},100);
						return false;
					}
					if(event.keyCode == 13 && !_shift){
						timer = setTimeout(function(){
							$(".search_area .btn_s_menu").focus();
						},100);
					}
				});
		}
		$('.gnb_box ul li').removeClass(isOpen);
	}

	/* ============================================ */

	$(document).ready(function(){
		gnb_box.init();
		gnb_resize();
	});

	

	$(window).on('resize', function() {
		searchWidth();
		gnb_resize();
	});

	$(window).on('scroll', function(){
		goTop_Fixed();
		goTop_Show();
    });

	$('.news_list_box').hide();
	if($('.list_menu .list_btn').length){
		$('.list_menu .list_btn').append('<span class="blind a11y">축소됨</span>');
	}
	
	$('.list_menu .list_btn').on('click', function(){
		$('.news_list_box').slideToggle();
		$(this).parents('.list_menu').toggleClass('is_open');
		if($(this).closest('.list_menu').hasClass('is_open')){
			$(this).find('.a11y').text('확장됨');
		}else{
			$(this).find('.a11y').text('축소됨');
		}
	})
	var _shift = false;
	//접근성 검색 keydown
	$(".search_area .btn_s_menu").on("keydown", function(event){
		if(event.keyCode == 13 && !_shift){
			console.log("2")
			sec02LiTab = setTimeout(function(){
				$(".search_area .search_text").focus();
			},100);
			return true;
		}
	})
	// mobile menu 엔터 시 focus 이동
	$(".gnb_area .menu_area > li.btn_mobmenu_box .btn_mobmenu").on("keydown", function(event){
		if(event.keyCode == 13){
			setTimeout(function(){
				$(".header_wrap.mobmenu_open .gnb_area .menu_area > li .lang_box .language").focus();
			},100);
		}
	})
	// gnb 모바일 tab 이동 
	$(".gnb_area .menu_area > li.btn_mobmenu_box .btn_mobmenu").on("click", function(){
		$(".header_wrap.mobmenu_open .gnb_area .menu_area > li.btn_mobmenu_box button.btn_close").on("keydown", function(event){
			if(event.shiftKey && event.keyCode == 9){
				setTimeout(function(){
					$(".header_wrap.mobmenu_open .link_list02 > li:nth-child(3) a").focus();
				},100);
				return false;
			}
			if(event.keyCode == 9 && !_shift){
				setTimeout(function(){
					$(".header_wrap.mobmenu_open .gnb_area .menu_area > li .lang_box .language").focus();
				},100);
				return false;
			}
			if(event.keyCode == 13){
				setTimeout(function(){
					$(".gnb_area .menu_area > li.btn_mobmenu_box .btn_mobmenu").focus();
				},100);
			}
		})
		$(".header_wrap.mobmenu_open .gnb_area .menu_area > li .lang_box .language").on("keydown", function(event){
			if(event.shiftKey && event.keyCode == 9){
				setTimeout(function(){
					$(".header_wrap.mobmenu_open .gnb_area .menu_area > li.btn_mobmenu_box button.btn_close").focus();
				},100);
				return false;
			}
			if(event.keyCode == 9 && !_shift){
				setTimeout(function(){
					$(".header_wrap.mobmenu_open .link_list02 li:first-child a").focus();
				},100);
				return false;
			}
		})
		$(".header_wrap.mobmenu_open .link_list02 li:first-child a").on("keydown", function(event){
			if(event.shiftKey && event.keyCode == 9){
				setTimeout(function(){
					$(".header_wrap.mobmenu_open .gnb_area .menu_area > li .lang_box .language").focus();
				},100);
				return false;
			}
		})
		$(".header_wrap.mobmenu_open .link_list02 > li:nth-child(3) a").on("keydown", function(event){
			if(event.shiftKey && event.keyCode == 9){
				setTimeout(function(){
					$(".header_wrap.mobmenu_open .link_list02 > li:nth-child(2) a").focus();
				},100);
				return false;
			}
			if(event.keyCode == 9 && !_shift){
				setTimeout(function(){
					$(".header_wrap.mobmenu_open .gnb_area .menu_area > li.btn_mobmenu_box button.btn_close").focus();
				},100);
				return false;
			}
		})
	})
});