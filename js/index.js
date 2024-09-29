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




// |￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣|
//  내 캠 (캠 권한 필요) 
//  카메라 사용 허용시 내 얼굴+Me글자 숨김
// |＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿|
//    \ (•◡•) /
/* 아래는 해상도 제한하기 전 원본 */
$(document).ready(function () {
     navigator.mediaDevices.getUserMedia({
               video: true
          })
          .then(function (stream) {
               var videoElement = document.getElementById("videoElement");
               videoElement.srcObject = stream;
               // 카메라 사용이 허용되었으므로 이미지를 보여줍니다.
               $(".waiting_text").hide();

               // 비디오를 좌우로 반전시킵니다.
               videoElement.style.transform = "scaleX(-1)";
          })
          .catch(function (error) {
               console.log("카메라 사용 권한을 얻지 못했습니다.", error);
               // 카메라 사용이 허용되지 않았으므로 이미지를 숨깁니다.
               $(".waiting_text").show();
          });
});







// |￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣|
//  멤버 캠 (캠 권한 필요) 
//  영상 loop 두번째 재생 시 소리 없애고 영상만 반복재생
// |＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿|
//    \ (•◡•) /
$(document).ready(function () {
     const iframe = $('iframe');
     const muteMic = $('.mem_mute_mic');
     const youtubePlayer = document.getElementById('youtube-video');

     // YouTube 비디오 뮤트 설정
     youtubePlayer.addEventListener('load', function () {

     });

     // YouTube 비디오 반복 재생 시 뮤트 설정
     youtubePlayer.addEventListener('ended', function () {
          youtubePlayer.contentWindow.postMessage('{"event":"command","func":"' + 'mute' + '","args":""}', '*');
     });
});


// |￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣|
//     위젯 드레그 (시계) : 사용시, 제이쿼리 드레그 관련 스크립트 필요
//     jquery-ui-touch-punch
// |＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿|
//    \ (•◡•) /
$(document).ready(function () {
     // 드래그 가능한 요소 생성
     $(".draggable_clock, .draggable_bgm").draggable({
          touchAction: "auto", // 터치 이벤트 활성화
          grid: [10, 10],
          containment: 'main' // 드레그 영역 제한
     });

     // 드롭 영역 설정
     $("#dropArea").droppable({
          drop: function (event, ui) {
               // 드롭된 요소를 영역 안으로 이동
               ui.draggable.appendTo(this);
          }
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
               $(".drag_box").css("right", isClicked ? "-265px" : "-120px");
               $(".box_arrow_btn").css("transform", isClicked ? "scaleX(1)" :
                    "scaleX(-1)");

               // 클릭 상태 업데이트
               $(this).data("clicked", !isClicked);
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








// |￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣|
//     drag_box 2.BGM Playlist 
// |＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿|
//    \ (•◡•) /


$(document).ready(function () {
     $(".drag_box_inner_btn .box_playlist").on("click touchend", function (e) {
          e.preventDefault(); // 이벤트 중복 방지

          let img = $(this).find("img");
          if (img.hasClass("widget_active_bgm")) {
               img.removeClass("widget_active_bgm");
          } else {
               img.addClass("widget_active_bgm");
          }
     });
});


$(document).ready(function () {
     $(".box_playlist").on("click touchend", function () {
          const audio = document.getElementById('bgm-audio');
          const playPauseButton = document.getElementById('play-pause-button');
          // play/pause 버튼

          if ($(this).children('img').hasClass("widget_active_bgm")) {
               $(".draggable_bgm").css("display", "block");
               // 오디오 재생
               audio.play();
               playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
               // 재생 상태로 변경
          } else {
               $(".draggable_bgm").css("display", "none");

               // 오디오 정지
               audio.pause();
               playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
               // 정지 상태로 변경
          }
     });
});


$(document).ready(function () {
     const audioPaths = {
          Bgm1_Fireplace: 'bgm/DC_fire.mp3',
          Bgm2_Rain: 'bgm/DC_rain.mp3',
          Bgm3_MxRedKeyboard: 'bgm/DC_hesper_Key_asmr.mp3',
     };

     const nameMappings = {
          Bgm1_Fireplace: 'Fireplace 🔥',
          Bgm2_Rain: 'Rain 🌧️',
          Bgm3_MxRedKeyboard: 'Hesper\'s Keyboard ⌨️',
     };

     const audio = document.getElementById('bgm-audio');
     const playPauseButton = document.getElementById('play-pause-button');
     const currentTrack = document.getElementById('current-track');
     let currentTrackIndex = 0;

     function updateTrackInfo() {
          const currentTrackName = Object.keys(audioPaths)[currentTrackIndex];
          currentTrack.textContent = nameMappings[currentTrackName] || currentTrackName;
     }

     updateTrackInfo();

     function playNextTrack() {
          currentTrackIndex = (currentTrackIndex + 1) % Object.keys(audioPaths).length;
          updateTrackInfo();
          audio.src = Object.values(audioPaths)[currentTrackIndex];
          audio.play();
          playPauseButton.innerHTML = '<i class="fas fa-pause"></i>'; // 트랙이 변경될 때 재생 상태로 변경
     }

     function playPrevTrack() {
          currentTrackIndex = (currentTrackIndex - 1 + Object.keys(audioPaths).length) % Object.keys(audioPaths).length;
          updateTrackInfo();
          audio.src = Object.values(audioPaths)[currentTrackIndex];
          audio.play();
          playPauseButton.innerHTML = '<i class="fas fa-pause"></i>'; // 트랙이 변경될 때 재생 상태로 변경
     }

     audio.addEventListener('ended', playNextTrack);

     audio.addEventListener('canplay', function () {
          updateTrackInfo();
     });

     // 처음 상태는 play 아이콘으로 설정
     playPauseButton.innerHTML = '<i class="fas fa-play"></i>';

     // play-pause 버튼 클릭 이벤트
     $('#play-pause-button').on("click touchend", function () {
          if (audio.paused) {
               audio.play();
               playPauseButton.innerHTML = '<i class="fas fa-pause"></i>'; // 재생 시 pause 아이콘
          } else {
               audio.pause();
               playPauseButton.innerHTML = '<i class="fas fa-play"></i>'; // 일시정지 시 play 아이콘
          }
     });

     // 이전 버튼 클릭 시 트랙 재생
     $('#prev-button').on("click touchend", function () {
          playPrevTrack();
     });

     // 다음 버튼 클릭 시 트랙 재생
     $('#next-button').on("click touchend", function () {
          playNextTrack();
     });
});




// |￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣|
//     drag_box 3.나
// |＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿|
//    \ (•◡•) /

$(document).ready(function () {
     // 원래의 CSS 값을 저장
     let originalGridTemplateColumns = $(".cam_one_by_one").css("grid-template-columns");

     $(".drag_box_inner_btn .box_me").click(function () {
          let img = $(this).find("img");
          if (img.hasClass("widget_active_me")) {
               img.removeClass("widget_active_me");
               $(".cam_me").hide();
               $(".cam_one_by_one").css("grid-template-columns", "none"); // CSS 값을 변경
          } else {
               img.addClass("widget_active_me");
               $(".cam_me").show();
               $(".cam_one_by_one").css("grid-template-columns", originalGridTemplateColumns); // 원래의 CSS 값으로 복원
          }
     });
});




// |￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣|
//     모든 요소가 로드된 후 스플래시 화면 숨김
// |＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿|
//    \ (•◡•) /

window.onload = function () {
     var loading_icon = document.getElementById('loading_icon');
     loading_icon.style.opacity = '0'; // 페이드 아웃 효과

     // 페이드 아웃 효과가 끝난 후에 완전히 숨김 처리
     setTimeout(function () {
          loading_icon.style.display = 'none';
     }, 0); // 숨김
};



// 🖱️ Dreamcatcher Cursor 
// |￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣|
//     cursor change
// |＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿|
//    \ (•◡•) /

$(document).ready(function () {

     $(".sideblock li, .fullpage, .controls button, .box_arrow_btn ,.drag_box_inner_btn li").hover(
          function () {
               $(this).css("cursor", "url('./img/DC_cursor/pointer.png'), pointer");
          }
     );

});


// |￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣|
//     팝업 숨기기(스크롤 막기)
// |＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿|
//    \ (•◡•) /
$(document).ready(function () {
     // 팝업 열기
     $(".guide_btn").on("click", function () {
          $(".popup_wrap_inner").show(100);
     });

     const popElement = $('.popup_wrap_inner');
     if (popElement.css('display') === 'block') {
          $('body').css('overflow', 'hidden'); // 스크롤 막기
     }
     // 팝업 닫기
     $(".close_btn, .bk_common_bg").on("click", function () {
          $(".popup_wrap_inner").hide(100);
          $("body").css("overflow", "auto"); // 스크롤 다시 활성화
     });
});

// |￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣|
//     첫 진입시에만 팝업, 이후 숨김
// |＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿|
// \ (•◡•) /
$(document).ready(function () {
     var popDisplay = $.cookie('popDisplay');

     if (!popDisplay) {
          $('#pop').show(100);
          $.cookie('popDisplay', 'none', {
               path: '/'
          });
     } else {
          $('#pop').hide();
     }
});



// |￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣|
//      언어변환 클릭이벤트
// |＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿|
// \ (•◡•) /


// 언어별 텍스트를 객체로 관리
const langData = {
     ko: {
          gu_1: {
               title: ' <span class="col_big">DreamRoom</span> 에서 <br> 드림캐쳐와 함께 집중&힐링!',
               sub: '드림캐쳐와 영상통화하듯 즐겁게<br>공부,휴식등 다양한 활동을 할 수 있는 공간이에요',
               mini: '※ 팬 메이드 사이트이며, 상업적 이용을 하지 않습니다.'
          },
          gu_2: {
               title: '<span class="col_big">ASMR</span>을 들으며<br> 더 깊이 빠져볼까요?',
               sub: 'BGM Player의 재생버튼을 눌러 장작, 빗소리,<br>키보드 타건 소리를 들어 보세요',
               mini: '* 추후 다양한 ASMR이 업데이트 됩니다'
          },
          gu_3: {
               title: '최애와의 특별한 시간,<br>멤버 별 <span class="col_big">1:1 미팅!</span>',
               sub: '최애의 방에서 더욱 집중! 화면을 터치해<br>음소거를 해제하면, 목소리를 들을 수 있어요',
               mini: '※ 카메라 / 위치 정보 수집을 하지 않습니다'
          },
          gu_4: {
               title: '필요한 기능을<br><span class="col_big">Show / Hide / Move</span>',
               sub: '오른쪽 하단의 서랍을 꺼내 각 기능을 Show/Hide,<br>BGM player와 시계를 드레그해서 옮길 수 있어요',
               mini: 'ⓒ DREAMCATCHER.CO ALL RIGHTS RESERVED'
          }
     },
     eng: {
          gu_1: {
               title: '<span class="col_big">Focus & chill out</span><br>with Dreamcatcher!',
               sub: 'DreamRoom is a space to enjoy various activities(study,etc.) with Dreamcatcher',
               mini: '※ This is a fan-made site, not for commercial use'
          },
          gu_2: {
               title: 'Shall we dive deeper <br>while listening to <span class="col_big">ASMR</span>?',
               sub: 'Press the play button on the BGM Player to hear firewood, rain, and keyboard sounds.',
               mini: '* Various ASMR will be updated later '
          },
          gu_3: {
               title: '1:1 special meeting with <br>your <span class="col_big">bias</span>!',
               sub: 'Focus more in your bias\'s room! Tap the screen to unmute and hear their voice.',
               mini: '※ No camera or location data is collected.'
          },
          gu_4: {
               title: ' <span class="col_big">Show / Hide / Move</span> the features you need',
               sub: 'Open the bottom-right drawer to Show/Hide features and drag to move BGM player& clock',
               mini: 'ⓒ DREAMCATCHER.CO ALL RIGHTS RESERVED'
          }
     }
};

// 텍스트 변경 함수
function setLanguage(lang) {
     for (let i = 1; i <= 4; i++) {
          const langContent = langData[lang]['gu_' + i];
          document.getElementById('gu_' + i).querySelector('.guide_tit').innerHTML = langContent.title;
          document.getElementById('gu_' + i).querySelector('.sub_text').innerHTML = langContent.sub;
          document.getElementById('gu_' + i).querySelector('.mini_text').innerHTML = langContent.mini;
     }
}

// 페이지 로드 시 언어 설정 불러오기
window.onload = function () {
     const loading_icon = document.getElementById('loading_icon');

     // 로딩 아이콘 페이드 아웃
     loading_icon.style.transition = 'opacity 0.3s ease';
     loading_icon.style.opacity = '0';

     // 페이드 아웃 후 로딩 아이콘 숨김
     setTimeout(function () {
          loading_icon.style.display = 'none';
     }, 300); // 300ms 후에 숨김

     // 초기 언어 설정 (한국어)
     const savedLanguage = localStorage.getItem('language') || 'ko';
     setLanguage(savedLanguage);
     if (savedLanguage === 'eng') {
          document.getElementById('ko_lang').style.display = 'none';
          document.getElementById('eng_lang').style.display = 'inline-block';
     } else {
          document.getElementById('eng_lang').style.display = 'none';
          document.getElementById('ko_lang').style.display = 'inline-block';
     }
};

// 한국어 -> 영어로 변환
document.getElementById('ko_lang').addEventListener('click', function () {
     document.getElementById('ko_lang').style.display = 'none';
     document.getElementById('eng_lang').style.display = 'inline-block';
     setLanguage('eng');
     localStorage.setItem('language', 'eng');
});

// 영어 -> 한국어로 변환
document.getElementById('eng_lang').addEventListener('click', function () {
     document.getElementById('eng_lang').style.display = 'none';
     document.getElementById('ko_lang').style.display = 'inline-block';
     setLanguage('ko');
     localStorage.setItem('language', 'ko');
});
