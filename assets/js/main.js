document.addEventListener("DOMContentLoaded", function () {
	new SweetScroll({});
	particlesJS("particles-js", {
		particles    : {
			number     : {
				value  : 160,
				density: {
					enable    : !0,
					value_area: 500
				}
			},
			color      : {value: "#ffffff"},
			shape      : {
				type   : "circle",
				stroke : {
					width: 0,
					color: "#000000"
				},
				polygon: {nb_sides: 5},
				image  : {
					src   : "img/github.svg",
					width : 100,
					height: 100
				}
			},
			opacity    : {
				value : 1,
				random: !0,
				anim  : {
					enable     : !0,
					speed      : 1,
					opacity_min: 0,
					sync       : !1
				}
			},
			size       : {
				value : 3,
				random: !0,
				anim  : {
					enable  : !1,
					speed   : 4,
					size_min: .3,
					sync    : !1
				}
			},
			line_linked: {
				enable  : !1,
				distance: 150,
				color   : "#ffffff",
				opacity : .4,
				width   : 1
			},
			move       : {
				enable   : !0,
				speed    : 1,
				direction: "none",
				random   : !0,
				straight : !1,
				out_mode : "out",
				bounce   : !1,
				attract  : {
					enable : !1,
					rotateX: 600,
					rotateY: 600
				}
			}
		},
		interactivity: {
			detect_on: "canvas",
			events   : {
				onhover: {
					enable: !1,
					mode  : "bubble"
				},
				onclick: {
					enable: !1,
					mode  : "repulse"
				},
				resize : !0
			},
			modes    : {
				grab   : {
					distance   : 400,
					line_linked: {opacity: 1}
				},
				bubble : {
					distance: 250,
					size    : 0,
					duration: 2,
					opacity : 0,
					speed   : 3
				},
				repulse: {
					distance: 400,
					duration: .4
				},
				push   : {particles_nb: 4},
				remove : {particles_nb: 2}
			}
		},
		retina_detect: !0
	})

	// document.documentElement.classList.remove('no-js');

	// Select the timeline element
	var experienceTimeline = document.getElementById('experience-timeline');

	// Check if the timeline element exists
	if (experienceTimeline) {
		// Select all child div elements
		var userContent = experienceTimeline.querySelectorAll('div');

		// Iterate over each child div element
		userContent.forEach(function (content) {
			// Add classes to create timeline blocks
			content.classList.add('vtimeline-content');
			var vtimelinePoint = document.createElement('div');
			vtimelinePoint.classList.add('vtimeline-point');
			var vtimelineBlock = document.createElement('div');
			vtimelineBlock.classList.add('vtimeline-block');
			vtimelinePoint.appendChild(vtimelineBlock);

			// Add dates to the timeline if exists
			var date = content.dataset.date;
			if (date) {
				var vtimelineDate = document.createElement('span');
				vtimelineDate.classList.add('vtimeline-date');
				vtimelineDate.textContent = date;
				vtimelinePoint.appendChild(vtimelineDate); // Move date inside vtimeline-point
			}

			// Add icons to each block
			var vtimelineIcon = document.createElement('div');
			vtimelineIcon.classList.add('vtimeline-icon');
			var icon = document.createElement('i');
			icon.classList.add('fa', 'fa-map-marker');
			vtimelineIcon.appendChild(icon);
			vtimelinePoint.insertBefore(vtimelineIcon, vtimelineBlock);

			// Insert vtimelinePoint before content
			content.parentNode.insertBefore(vtimelinePoint, content);
			vtimelineBlock.appendChild(content); // Move content inside vtimeline-block
		});
	}

	const slider = document.querySelector('.slider');
	const prevBtn = document.querySelector('.prev-btn');
	const nextBtn = document.querySelector('.next-btn');
	const slides = document.querySelectorAll('.slider img');

	let currentSlide = 0;
	let slidesToShow = calculateSlidesToShow();

// 초기 슬라이더 설정
	updateSlider();

	prevBtn.addEventListener('click', () => {
		currentSlide = (currentSlide - slidesToShow + slides.length) % slides.length;
		console.log("테스트 다음")
		console.log(currentSlide)
		updateSlider();
	});

	nextBtn.addEventListener('click', () => {
		currentSlide = (currentSlide + slidesToShow) % slides.length;
		console.log("테스트 이전")
		console.log(currentSlide)
		updateSlider();
	});

	window.addEventListener('resize', () => {
		console.log("리사이즈")
		slidesToShow = calculateSlidesToShow();
		console.log(slidesToShow)
		currentSlide = 0;
		updateSlider();
	});

	function updateSlider() {
		const slideWidth = slider.clientWidth / slidesToShow;
		const newTranslate = -currentSlide * slideWidth;
		slider.style.transform = `translateX(${newTranslate}px)`;

		// 마지막 이미지인 경우 next 버튼을 숨깁니다.
		if (currentSlide + slidesToShow >= slides.length) {
			nextBtn.style.display = 'none';
		} else {
			nextBtn.style.display = 'block';
		}

		// 첫 번째 이미지인 경우 prev 버튼을 숨깁니다.
		if (currentSlide === 0) {
			prevBtn.style.display = 'none';
		} else {
			prevBtn.style.display = 'block';
		}
	}

	function calculateSlidesToShow() {
		return window.innerWidth < 976 ? 2 : 4;
	}



}, !1);



// Populate timeline items dynamically


// (function($) {
//
// 	// Create timeline
// 	$('#experience-timeline').each(function() {
// 		console.log('테스트!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
// 		$this = $(this); // Store reference to this
// 		$userContent = $this.children('div'); // user content
//
// 		// Create each timeline block
// 		$userContent.each(function() {
// 			$(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
// 		});
//
// 		// Add icons to each block
// 		$this.find('.vtimeline-point').each(function() {
// 			$(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
// 		});
//
// 		// Add dates to the timeline if exists
// 		$this.find('.vtimeline-content').each(function() {
// 			var date = $(this).data('date');
// 			if (date) { // Prepend if exists
// 				$(this).parent().prepend('<span class="vtimeline-date">'+date+'</span>');
// 			}
// 		});
//
// 	});
//
// })(jQuery);
// Create timeline
