const pageDetails = {

	desktopBreakPoint: 813,
	
	windowWidth() {
		return $(window).width();
	}
}

const removeCssAnimationOnSmallScreens = width => {

	if(width < pageDetails.desktopBreakPoint ) {
		$('#animated-screen > div').replaceWith('<img src="/dist/images/skills_webdev.png" alt="my skills">');
	}
}

const showCompanyDesciption = () => {
		
	$('.companies section').click(function() {
		$(this).toggleClass('show-details');
		
		// Prevent clicks on portfolio links bubbling up
		$('.description a').click(function(e) {
			e.stopPropagation();  
		});
	}); 		
}

const slideDownSkillsPanel = () => {
	$('#skills-cta button').click(function() {
		$('#skills-section').slideToggle('slow');
	});
};


$(document).ready(function() {

	if($('body').attr('id') === 'about') {
		slideDownSkillsPanel();
		removeCssAnimationOnSmallScreens(pageDetails.windowWidth());
	} else if($('body').attr('id') === 'portfolio') {
		showCompanyDesciption();
	}
});

$(window).resize(function() {
	
	if($('body').attr('id') === 'about') {
		removeCssAnimationOnSmallScreens(pageDetails.windowWidth());
	}	
});