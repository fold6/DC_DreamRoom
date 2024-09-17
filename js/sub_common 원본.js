// |￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣|
//     공통요소 추가한 부분은 여기에 추가할 스크립트를 작성
// |＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿|
//    \ (•◡•) /


// |￣￣￣￣￣￣￣￣|
//     헤더고정
// |＿＿＿＿＿＿＿＿|
//    \ (•◡•) /

$(function () {
     var headerTop = $('header').offset().top;
     $(window).scroll(function () {
          var scrollTop = $(window).scrollTop();
          if (headerTop < scrollTop) {
               $('header').addClass('fixed').stop();
          } else {
               $('header').removeClass('fixed');
          }
     });
})


// |￣￣￣￣￣￣￣￣|
//     전체화면
// |＿＿＿＿＿＿＿＿|
//    \ (•◡•) /

$(document).ready(function () {
     var isFullscreen = false;

     function toggleFullscreen() {
          var element = document.documentElement;

          if (!isFullscreen) {
               if (element.requestFullscreen) {
                    element.requestFullscreen();
               } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
               } else if (element.webkitRequestFullscreen) {
                    element.webkitRequestFullscreen();
               } else if (element.msRequestFullscreen) {
                    element.msRequestFullscreen();
               }

               isFullscreen = true;
               $("#fullscreenBtn").html('<i class="fas fa-compress"></i>');
          } else {
               exitFullscreen();
          }
     }

     function exitFullscreen() {
          if (document.exitFullscreen) {
               document.exitFullscreen();
          } else if (document.mozCancelFullScreen) {
               document.mozCancelFullScreen();
          } else if (document.webkitExitFullscreen) {
               document.webkitExitFullscreen();
          } else if (document.msExitFullscreen) {
               document.msExitFullscreen();
          }

          isFullscreen = false;
          $("#fullscreenBtn").html('<i class="fas fa-expand"></i>');
     }

     $("#fullscreenBtn").click(function () {
          toggleFullscreen();
     });

     // F11 키 누를 때
     $(document).keydown(function (e) {
          if (e.key === 'F11') {
               e.preventDefault();
               toggleFullscreen();
          }
     });

     // ESC 키 누를 때
     $(document).keydown(function (e) {
          if (e.key === 'Escape') {
               exitFullscreen();
          }
     });
});




// |￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣|
//     위젯 드레그 (시계) : 사용시, 제이쿼리 드레그 관련 스크립트 필요
//     jquery-ui-touch-punch
// |＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿|
//    \ (•◡•) /


$(document).ready(function () {
     // 드래그 가능한 요소 생성
     $(".draggable_clock").draggable({
          touchAction: "auto" // 터치 이벤트 활성화
               ,
          grid: [10, 10] // 스냅
     });
     $(".draggable_bgm").draggable({
          touchAction: "auto" // 터치 이벤트 활성화
               ,
          grid: [10, 10] // 스냅
     });



     // 드롭 영역 설정
     $("#dropArea").droppable({
          drop: function (event, ui) {
               // 드롭된 요소를 영역 안으로 이동
               ui.draggable.appendTo(this);
          }
     });
});




// |￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣|
//     drag_box 1.시계위젯
// |＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿|
//    \ (•◡•) /


$(document).ready(function () {
     // drag_box_inner_btn의 li 클릭 이벤트 처리
     // 최초로 시계는 widget_active_clock가 붙어 있으니, 한 번 누르면 없애도록함
     $(".drag_box_inner_btn .box_clock").click(function () {
          let img = $(this).find("img");
          if (img.hasClass("widget_active_clock")) {
               img.removeClass("widget_active_clock");
          } else {
               img.addClass("widget_active_clock");
          }
     });
});

$(document).ready(function () {
     // .box_clock를 클릭할 때 .widget_active_clock 클래스를 토글하여 .draggable_clock의 display 속성을 변경
     $(".box_clock").click(function () {
          if ($(this).children('img').hasClass("widget_active_clock")) {
               $(".draggable_clock").css("display", "block");
          } else {
               $(".draggable_clock").css("display", "none");
          }
     });



     // |￣￣￣￣￣￣￣￣|
     //     위치시계
     // |＿＿＿＿＿＿＿＿|
     //    \ (•◡•) /


     function showClock() {
          var now = new Date();
          var hours = now.getHours();
          var minutes = now.getMinutes();
          var seconds = now.getSeconds();

          var ampm = hours >= 12 ? 'PM' : 'AM';
          hours = hours % 12;
          hours = hours ? hours : 12; // 0시일 경우 12시로 표시

          var timeString = formatTwoDigits(hours) + ":" + formatTwoDigits(minutes) + ":" +
               formatTwoDigits(seconds);

          $("#hour_min_sec").text(timeString);
          $("#pmam").text(ampm);

     }

     function formatTwoDigits(number) {
          return (number < 10 ? '0' : '') + number;
     }

     function getLocation() {
          if (navigator.geolocation) {
               navigator.geolocation.getCurrentPosition(showPosition);
          } else {
               alert("이 브라우저에서는 위치 기능을 지원하지 않습니다.");
          }
     }

     function showPosition(position) {
          // 위치 정보를 가져와서 사용(현재시간표기<외국에서 되는지 테스트 필요)
          showClock();
     }

     setInterval(showClock, 1000); // 1초마다 시간 갱신

     getLocation();

     // 클릭하지 않고 페이지가 로드될 때 시계를 보여주기 위해 
     // showClock() 함수를 호출합니다.
     showClock();

     // .box_clock를 클릭할 때 .widget_active_clock 클래스를 토글합니다.
     $(".box_clock").click(function () {
          $(this).closest('img').toggleClass("widget_active_clock");
     });
});






/* 
=========================================================
=========================================================
=========================================================
          이슈 시작
=========================================================
=========================================================
=========================================================
*/





// |￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣|
//     drag_box 2.BGM Playlist 
// |＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿|
//    \ (•◡•) /


$(document).ready(function () {
     $(".drag_box_inner_btn .box_playlist").click(function () {
          let img = $(this).find("img");
          if (img.hasClass("widget_active_bgm")) {
               img.removeClass("widget_active_bgm");
          } else {
               img.addClass("widget_active_bgm");
          }
     });
});

$(document).ready(function () {
     $(".box_playlist").click(function () {
          if ($(this).children('img').hasClass("widget_active_bgm")) {
               $(".draggable_bgm").css("display", "block");
               /* 여기에서 block되면 재생 */

               // 오디오 재생
               const audio = document.getElementById('bgm-audio');
               audio.play();
          } else {
               $(".draggable_bgm").css("display", "none");
               /* 여기에서 none되면 정지 */

               // 오디오 정지
               const audio = document.getElementById('bgm-audio');
               audio.pause();
          }
     });
});



$(document).ready(function () {
     const audioPaths = {
          Bgm1_Fireplace: '/bgm/DC_fire.mp3',
          Bgm2_Rain: '/bgm/DC_rain.mp3',
          Bgm3_MxRedKeyboard: '/bgm/DC_hesper_Key_asmr.mp3',
     };

     // 음악 이름을 변경할 매핑 객체 생성
     const nameMappings = {
          Bgm1_Fireplace: 'Fireplace 🔥',
          Bgm2_Rain: 'Rain 🌧️',
          Bgm3_MxRedKeyboard: 'Hesper\'s Keyboard ⌨️',
     };

     const audio = document.getElementById('bgm-audio');
     const playPauseButton = document.getElementById('play-pause-button');

     // 오디오의 초기 상태를 확인하고 버튼 아이콘을 설정합니다.
     if (audio.paused) {
          playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
     } else {
          playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
     }

     const currentTrack = document.getElementById('current-track');
     const remainingTime = document.getElementById('remaining-time');
     const progressBar = document.getElementById('progress-bar');
     const volumeSlider = document.getElementById('volume-slider');
     let currentTrackIndex = 0;

     // HTML 업데이트 함수
     function updateTrackInfo() {
          const currentTrackName = Object.keys(audioPaths)[currentTrackIndex];
          // 매핑된 이름으로 변경
          currentTrack.textContent = nameMappings[currentTrackName] || currentTrackName;
     }

     // 음악 정보 업데이트 함수 호출
     updateTrackInfo();

     function playNextTrack() {
          currentTrackIndex = (currentTrackIndex + 1) % Object.keys(audioPaths).length;
          updateTrackInfo();
          audio.src = Object.values(audioPaths)[currentTrackIndex];

     }

   /*   function updateRemainingTime() {
          if (!isNaN(audio.duration)) {
               const duration = audio.duration;
               const currentTime = audio.currentTime;
               const remaining = duration - currentTime;
               const minutes = Math.floor(remaining / 60);
               const seconds = Math.floor(remaining % 60);
               remainingTime.textContent = '' + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
               progressBar.value = (currentTime / duration) * 100;
          }
     } */

    /*  function updateVolume() {
          audio.volume = volumeSlider.value / 100;
     } */

     audio.addEventListener('ended', playNextTrack);
   /*   audio.addEventListener('timeupdate', function () {
          updateRemainingTime();
     }); */

     audio.addEventListener('canplay', function () {
          updateTrackInfo();
     });


     $('#play-pause-button').click(function () {
          if (audio.paused) {
               audio.play();
               playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
          } else {
               audio.pause();
               playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
          }
     });
     $('#prev-button').click(function () {
          currentTrackIndex = (currentTrackIndex - 1 + Object.keys(audioPaths).length) % Object.keys(audioPaths).length;
          updateTrackInfo();
          audio.src = Object.values(audioPaths)[currentTrackIndex];
          audio.load();
          audio.play();
     });

     $('#next-button').click(playNextTrack);

     progressBar.addEventListener('click', function (e) {
          const progressBarRect = progressBar.getBoundingClientRect();
          const clickX = e.clientX - progressBarRect.left;
          const progressBarWidth = progressBarRect.width;
          const seekTime = (clickX / progressBarWidth) * audio.duration;
          audio.currentTime = seekTime;
     });
});



// |￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣|
//     Pointer cursor 
// |＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿|
//    \ (•◡•) /

$(document).ready(function () {
     // 호버 이벤트에 따라 커서 이미지를 변경하는 함수를 정의합니다.
     function setHoverCursorOnElement(selector) {
          // 지정된 선택자에 해당하는 모든 요소를 가져옵니다.
          var elements = document.querySelectorAll(selector);
          // 각 요소에 대해 호버 이벤트를 등록합니다.
          elements.forEach(function (element) {
               // 호버 시 커서를 포인터로 변경하는 이벤트 리스너를 등록합니다.
               element.addEventListener("mouseenter", function () {
                    document.documentElement.style.cursor =
                         "url('img/pointer.png'), pointer";
               });
               // 호버가 끝날 때 기본 커서로 변경하는 이벤트 리스너를 등록합니다.
               element.addEventListener("mouseleave", function () {
                    document.documentElement.style.cursor =
                         "url('img/default.png'), default";
               });
          });
     }

     // .fullpage 클래스 <i> 요소에 호버 이벤트
     setHoverCursorOnElement(".fullpage i");
     // cam에 호버이벤트
     setHoverCursorOnElement(".cam_all li");
     // sideblock에 호버이벤트
     setHoverCursorOnElement(".sideblock li");
     // 서랍메뉴에 호버이벤트
     setHoverCursorOnElement(".drag_box_inner_btn li");
     // 서랍메뉴 열고 닫는 화살표에 호버이벤트
     setHoverCursorOnElement(".box_arrow_btn");


});



/* 내 캠 */
$(document).ready(function () {
     navigator.mediaDevices.getUserMedia({
               video: true
          })
          .then(function (stream) {
               var videoElement = document.getElementById("videoElement");
               videoElement.srcObject = stream;
               $(".waiting_text").hide();

               videoElement.style.transform = "scaleX(-1)";
          })
          .catch(function (error) {
               console.log("카메라 사용 권한을 얻지 못했습니다.", error);
               $(".waiting_text").show();
          });
});








// |￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣|
//     drag_box (서랍메뉴 꺼내기)
// |＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿|
//    \ (•◡•) /


/* 일반 PC사이즈 일때 위젯버튼 서랍 */
$(document).ready(function () {
     // 클릭 상태를 추적하기 위한 변수
     let isClicked = false;

     $(".box_arrow_btn").click(function () {
          // 클릭 상태에 따라 동작 결정
          if (!isClicked) {
               $(".drag_box").css("right", "-50px");
               $(".box_arrow_btn").css("transform", "scaleX(-1)");
          } else {
               $(".drag_box").css("right", "-315px");
               $(".box_arrow_btn").css("transform", "scaleX(1)");
          }

          // 클릭 상태 업데이트
          isClicked = !isClicked;
     });
});


/* 일반 Tb(768px)사이즈 일때 위젯버튼 서랍 */

$(document).ready(function () {
     $(".box_arrow_btn").click(function () {
          if (window.innerWidth <= 768) {
               // 화면 너비가 768px 이하일 때만 실행 (미디어쿼리)
               let isClicked = $(this).data("clicked");
               // $(".drag_box").css("right", isClicked ? "-315px" : "-70px");
               $(".drag_box").css("right", isClicked ? "-265px" : "-120px");
               $(".box_arrow_btn").css("transform", isClicked ? "scaleX(1)" :
                    "scaleX(-1)");

               // 클릭 상태 업데이트
               $(this).data("clicked", !isClicked);
          }
     });
});





// |￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣|
//     drag_box 3.나
// |＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿|
//    \ (•◡•) /

$(document).ready(function () {
     // .widget_active_me 클래스를 추가한 후 .cam_me를 숨김
     // cam_me를 숨겼을시, 1:1 화면에 멤버만 크게 만듦
     $(".drag_box_inner_btn .box_me").click(function () {
          let img = $(this).find("img");
          if (img.hasClass("widget_active_me")) {
               img.removeClass("widget_active_me");
               $(".cam_me").hide();
               $(".cam_one_by_one").css("grid-template-columns", "none"); // CSS 값을 변경
          } else {
               img.addClass("widget_active_me");
               $(".cam_me").show();
               $(".cam_one_by_one").css("grid-template-columns", "repeat(2, 1fr)"); // CSS 값을 변경
          }
     });

});



/* 플리버튼 갤럭시 test  */
/* $(document).ready(function () {
     $(".controls button").on("click touchstart", function () {
          // 터치 또는 클릭 시 배경색 변경
          $(this).css('background-color', 'red');
     });

     $(".player_info").on("click touchstart", function () {
          $(this).css('background-color', 'green');
     });
});
 */