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

	window.addEventListener('DOMContentLoaded', function () {
		const sliderContainer = document.querySelector('#slider-container-noagri'); // 각 페이지에 고유한 ID 사용

		if (!sliderContainer) return; // 해당 페이지에 슬라이더 컨테이너가 없으면 종료

		const slider = sliderContainer.querySelector('.slider');
		const prevButton = sliderContainer.querySelector('.prev-btn');
		const nextButton = sliderContainer.querySelector('.next-btn');

		// 이미지 간격 (px)
		const slideGap = 20;

		// 뷰포트 크기에 따라서 이미지 개수 결정
		let slidesToShow = window.innerWidth < 976 ? 2 : 4;

		// 화면에 보여지는 이미지 개수에 따라 슬라이더의 너비 설정
		const slideWidth = (slider.clientWidth - (slidesToShow - 1) * slideGap) / slidesToShow;
		slider.style.width = `${slideWidth * slider.children.length}px`;

		let currentSlide = 0;

		// 이전 버튼 클릭 시
		prevButton.addEventListener('click', function () {
			if (currentSlide > 0) {
				currentSlide--;
				slider.style.transform = `translateX(-${currentSlide * (slideWidth + slideGap)}px)`;
				nextButton.style.display = 'block';
			}
			if (currentSlide === 0) {
				prevButton.style.display = 'none';
			}
		});

		// 다음 버튼 클릭 시
		nextButton.addEventListener('click', function () {
			if (currentSlide < slider.children.length - slidesToShow) {
				currentSlide++;
				slider.style.transform = `translateX(-${currentSlide * (slideWidth + slideGap)}px)`;
				prevButton.style.display = 'block';
			}
			if (currentSlide === slider.children.length - slidesToShow) {
				nextButton.style.display = 'none';
			}
		});

		// 뷰포트 리사이즈 시 슬라이드 개수 조정
		window.addEventListener('resize', function () {
			slidesToShow = window.innerWidth < 976 ? 2 : 4;
			const slideWidth = (slider.clientWidth - (slidesToShow - 1) * slideGap) / slidesToShow;
			slider.style.width = `${slideWidth * slider.children.length}px`;
		});
	});




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
