$(document).ready(function(){
	"use strict";
	
	/*jquery_ball*/

/*$(".ball").click(function(){$(".ball").css({"position": "absolute"});});
$(".ball").click(function(){$(".ball").animate({left: 1080},1200);});
$(".ball").click(function(){$(".ball").animate({top: 360},800);});
$(".ball").click(function(){$(".ball").animate({left: 0},1200);});
$(".ball").click(function(){$(".ball").animate({top: 0},800);});*/
	
	
/*function f1(){
$(".ball").click(function(){
	$(".ball").css({"position": "absolute"});
		$(".ball").animate({left: 1080},1200);$(".ball").clearQueue().stop().animate({left: 1080},1200);
			$(".ball").click(function(){
				$(".ball").animate({ top: 360},800);$(".ball").clearQueue().stop().animate({top: 360},800);
					$(".ball").click(function(){
						$(".ball").animate({left: 0},1200);$(".ball").clearQueue().stop().animate({left: 0},1200);
							$(".ball").click(function(){
								$(".ball").animate({ top: 0},800);$(".ball").clearQueue().stop().animate({top: 0},800);
								f1();
														});
												});
										});
								});}
	f1();*/
	
/*	event.stopPropagation();*/
	
/*============================================================================================*/
	
/*$(".ball").click(function(){
	$(".ball").css({"position": "absolute"});
	$(".ball").animate({left: 1080},1200);
	$(".ball").clearQueue().stop().animate({left: 1080},1200);
	if($(".ball").clearQueue().stop().animate({left: 1080},1200))
	{
		$(".ball").click(function(){
			$(".ball").css({"position": "absolute"});
			$(".ball").animate({top: 360},800);
			$(".ball").clearQueue().stop().animate({top: 360},800);
			if($(".ball").clearQueue().stop().animate({top: 360},800))
			{
				$(".ball").click(function(){$(".ball").css({"position": "absolute"});
					$(".ball").animate({left: 0},1200);
					$(".ball").clearQueue().stop().animate({left: 0},1200);
					if($(".ball").clearQueue().stop().animate({left: 0},1200)){
						$(".ball").click(function(){$(".ball").css({"position": "absolute"});
							$(".ball").animate({top: 0},800);
							$(".ball").clearQueue().stop().animate({top: 0},800);
						});
					}
				});
			}
		});
		
	}

	});*/

/*=========================================================================================*/
/*	function f1(){$(".ball").animate({left: 1080},1200);}
	function f1s(){$(".ball").clearQueue().stop().animate({left: 1080},1200);}
	
	function f2(){$(".ball").animate({top: 360},800);}
	function f2s(){$(".ball").clearQueue().stop().animate({top: 360},800);}
	
	function f3(){$(".ball").animate({left: 0},1200);}
	function f3s(){$(".ball").clearQueue().stop().animate({left: 0},1200);}
	
	function f4(){$(".ball").animate({top: 0},800);}
	function f4s(){$(".ball").clearQueue().stop().animate({top: 0},800);}

$(".ball").click(function(){
	$(".ball").css({"position": "absolute"});
	f1();
	f1s();
	if(f1)
	{
		$(".ball").click(function(){
			f2();
			f2s();
			if(f2){
				$(".ball").click(function(){
					f3();
					f3s();
					if(f3){
						$(".ball").click(function(){
							f4();
							f4s();
						});
					}
				});
			}
		});
		
	}

	});*/
/*========================================================================================*/	
	
function f1(){
$(".ball").click(function(){
	$(".ball").css({"position": "absolute"});
		$(".ball").animate({left: 1080},1200);$(".ball").clearQueue().stop().animate({left: 1080},1200);
			$(".ball").click(function(){
				$(".ball").animate({ top: 360},800);$(".ball").clearQueue().stop().animate({top: 360},800);
					$(".ball").click(function(){
						$(".ball").animate({left: 0},1200);$(".ball").clearQueue().stop().animate({left: 0},1200);
							$(".ball").click(function(){
								$(".ball").animate({ top: 0},800);$(".ball").clearQueue().stop().animate({top: 0},800);
								f1();
														});
												});
										});
								});}
	f1();

	
});

