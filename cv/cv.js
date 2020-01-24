$(document).ready(function(){
			if($(".flex-container").css('flex-direction') == "row")
			{
				$(".side").css('padding-bottom', $(".footer").height() + 15);
				$(".main").css('padding-bottom', $(".footer").height() + 15);
			}
			
			$(window).on('resize', function() {
				if($(".flex-container").css('flex-direction') == "row")
				{
					if($(".side").css('padding-bottom') == "15px")
					{
						$(".side").css('padding-bottom', $(".footer").height() + 15);
						$(".main").css('padding-bottom', $(".footer").height() + 15);
					}					
				}
				else
				{
					$(".side").css('padding-bottom', '');
					$(".main").css('padding-bottom', '');
				}				
			});
			
			// Add angle up icon for collapse element which is open by default
			$(".collapse.show").each(function(){
				$(this).prev(".card-header").find(".fa").removeClass("fa-angle-down").addClass("fa-angle-up");
			});
			
			// Toggle angle up and angle down, and caret right and caret down, icons on show hide of collapse element
			$(".collapse").on('show.bs.collapse', function(){
				$(this).prev(".card-header").find(".fa").removeClass("fa-angle-down").addClass("fa-angle-up");
				$(this).prev(".skill-header").find(".fa").removeClass("fa-caret-right").addClass("fa-caret-down");
			}).on('hide.bs.collapse', function(){
				$(this).prev(".card-header").find(".fa").removeClass("fa-angle-up").addClass("fa-angle-down");
				$(this).prev(".skill-header").find(".fa").removeClass("fa-caret-down").addClass("fa-caret-right");
			});
		});