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

// 이슈 : 한 탭 메모리 사용량이 너무 높음 -> 내 캠 해상도라도 줄임(근데 캠 안써도 gb단위인거 같은데..)
// 노트북에서 캠 켰을때 메모리 사용량 달라지는지 테스트
// 이슈 : 한 탭 메모리 사용량이 너무 높음 -> 내 캠 해상도라도 줄임(근데 캠 안써도 gb단위인거 같은데..)
// 노트북에서 캠 켰을때 메모리 사용량 달라지는지 테스트
// 이슈 : 한 탭 메모리 사용량이 너무 높음 -> 내 캠 해상도라도 줄임(근데 캠 안써도 gb단위인거 같은데..)
// 노트북에서 캠 켰을때 메모리 사용량 달라지는지 테스트
// 이슈 : 한 탭 메모리 사용량이 너무 높음 -> 내 캠 해상도라도 줄임(근데 캠 안써도 gb단위인거 같은데..)
// 노트북에서 캠 켰을때 메모리 사용량 달라지는지 테스트
// 이슈 : 한 탭 메모리 사용량이 너무 높음 -> 내 캠 해상도라도 줄임(근데 캠 안써도 gb단위인거 같은데..)
// 노트북에서 캠 켰을때 메모리 사용량 달라지는지 테스트
// 이슈 : 한 탭 메모리 사용량이 너무 높음 -> 내 캠 해상도라도 줄임(근데 캠 안써도 gb단위인거 같은데..)
// 노트북에서 캠 켰을때 메모리 사용량 달라지는지 테스트
// 이슈 : 한 탭 메모리 사용량이 너무 높음 -> 내 캠 해상도라도 줄임(근데 캠 안써도 gb단위인거 같은데..)
// 노트북에서 캠 켰을때 메모리 사용량 달라지는지 테스트
// 이슈 : 한 탭 메모리 사용량이 너무 높음 -> 내 캠 해상도라도 줄임(근데 캠 안써도 gb단위인거 같은데..)
// 노트북에서 캠 켰을때 메모리 사용량 달라지는지 테스트
// 이슈 : 한 탭 메모리 사용량이 너무 높음 -> 내 캠 해상도라도 줄임(근데 캠 안써도 gb단위인거 같은데..)
// 노트북에서 캠 켰을때 메모리 사용량 달라지는지 테스트
// 이슈 : 한 탭 메모리 사용량이 너무 높음 -> 내 캠 해상도라도 줄임(근데 캠 안써도 gb단위인거 같은데..)
// 노트북에서 캠 켰을때 메모리 사용량 달라지는지 테스트
/* $(document).ready(function () {
     navigator.mediaDevices.getUserMedia({
         video: {
             width: { ideal: 640 }, // 이상적인 너비
             height: { ideal: 360 } // 이상적인 높이
         }
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
  */






// |￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣|
//  멤버 캠 (캠 권한 필요) 
//  영상 loop 두번째 재생 시 소리 없애고 영상만 반복재생
// |＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿|
//    \ (•◡•) /
$(document).ready(function () {
     const iframe = $('iframe');
     const muteMic = $('.mem_mute_mic');
     const youtubePlayer = document.getElementById('youtube-video');

     // 가장 가까운 .wating_img 요소 찾기
     const image = iframe.closest('li').find('.wating_img');

     // 아이프레임 로드 이벤트 처리
     iframe.on('load', function () {

          // 아이프레임 로딩 성공 시 이미지 숨기기
          image.hide();
     });

     // 아이프레임 로딩 실패 시 이미지 보이기
     iframe.on('error', function () {
          image.show();
     });

     // YouTube 비디오 뮤트 설정
     youtubePlayer.addEventListener('load', function () {
          //     youtubePlayer.contentWindow.postMessage('{"event":"command","func":"' + 'mute' + '","args":""}', '*');
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
//     팝업 숨기기
// |＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿|
//    \ (•◡•) /


$(document).ready(function () {
     $(".header_right").on("click", function () {
          $(".popup_wrap_inner").show(100);
     });

     $(".close_btn ,.bk_common_bg").on("click", function () {
          $(".popup_wrap_inner").hide(100);
     });

});



// |￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣|
//     첫 진입시에만 팝업, 이후 숨김
// |＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿|
// \ (•◡•) /
/* 잠시 숨김 test */
/* 잠시 숨김 test */
/* 잠시 숨김 test */
/* 잠시 숨김 test */
/* 잠시 숨김 test */
/* 잠시 숨김 test */
/* $(document).ready(function () {
     var popDisplay = $.cookie('popDisplay');

     if (!popDisplay) {
          $('#pop').show(100);
          $.cookie('popDisplay', 'none', {
               path: '/'
          });
     } else {
          $('#pop').hide(); 
     }
}); */





/* 
         |￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣|
              언어변환 클릭이벤트
         |＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿|
         \ (•◡•) /
      */

// 언어별 텍스트를 객체로 관리
// const langData = {
//      ko: {
//           noti_text: '※ 팬 메이드 사이트이며, 상업적 이용을 하지 않습니다.<br><span class="noti_small">ⓒ DREAMCATCHER.CO ALL RIGHTS RESERVED</span>',
//           tip_text: '타이틀의 깃털을 뒤집거나 터치하여 다른 꿈속으로 이동할 수 있어요.',
//           title_text: '- 틀린그림 찾기 -',
//           start_text: 'Touch To Start'
//      },
//      eng: {
//           noti_text: '※ This is a fan-made site, and it is not used for commercial purposes.<br><span class="noti_small">ⓒ DREAMCATCHER.CO ALL RIGHTS RESERVED</span>',
//           tip_text: 'You can flip or touch the feather in the title to move into a different dream..',
//           title_text: '- Find the Difference -',
//           start_text: 'Touch To Start'
//      }
// };

// // id 그룹을 각각정해서 (#gu_1 그안에 있는 div에 값넣고 번역할거임

// // 텍스트 변경 함수
// function setLanguage(lang) {
//      document.querySelector('.noti_text').innerHTML = langData[lang].noti_text;
//      document.querySelector('.tip_text').textContent = langData[lang].tip_text;
//      document.querySelector('.title_text').textContent = langData[lang].title_text;
//      document.querySelector('.start_text').textContent = langData[lang].start_text;
// }

// // 초기 언어 설정 (한국어)
// setLanguage('ko');

// // 한국어 -> 영어로 변환
// document.getElementById('ko_lang').addEventListener('click', function () {
//      document.getElementById('ko_lang').style.display = 'none';
//      document.getElementById('eng_lang').style.display = 'inline-block';
//      setLanguage('eng');
//      // 언어 설정을 localStorage에 저장하여 다음페이지에서 변경된 언어설정 유지
//      localStorage.setItem('language', 'eng');
// });

// // 영어 -> 한국어로 변환
// document.getElementById('eng_lang').addEventListener('click', function () {
//      document.getElementById('eng_lang').style.display = 'none';
//      document.getElementById('ko_lang').style.display = 'inline-block';
//      setLanguage('ko');
//      // 언어 설정을 localStorage에 저장하여 다음페이지에서 변경된 언어설정 유지
//      localStorage.setItem('language', 'ko');
// });

// 이상 원본코드
// 이상 원본코드
// 이상 원본코드





/* 
         |￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣|
              언어변환 클릭이벤트
         |＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿|
         \ (•◡•) /
      */
// 언어별 텍스트를 객체로 관리
const langData = {
     ko: {
          gu_1: {
               title: '테스트1와 <span class="col_big">컨텐츠<br></span>를 볼 수 있어요',
               sub: 'DreamPlace는 드림캐쳐가<br>방문했던 장소를 표기해주는 지도에요',
               mini: '* 오정보,오류 등 문의는 오른쪽 하단의 \'방명록\'을 이용해주세요<br>둘째줄'
          },
          gu_2: {
               title: '테스트2와 <span class="col_big">컨텐츠<br></span>를 볼 수 있어요',
               sub: '장소이름 클릭 시 정보(영업시간 등)를,<br>컨텐츠 클릭 시 드림캐쳐의 모습을 볼 수 있어요',
               mini: '* 맵 오른쪽 하단의 \'방명록\' 에서 더 많은 장소 제보를 기다려요'
          },
          gu_3: {
               title: '테스트3 방문장소 <span class="col_big">컨텐츠<br></span>',
               sub: '각 멤버별로 방문한 장소를 필터링 해서<br>원하는 장소만 볼 수 있어요!',
               mini: '* 표기장소가 많아지면 지역별 필터링을 추가 예정이에요'
          },
          gu_4: {
               title: '테스트4 에서 <span class="col_big">컨텐츠<br></span>',
               sub: '방문후기 및 지도 표기요청 등<br>로그인 없이 다양한 이야기를 할 수 있어요!',
               mini: '* ‘비회원으로 작성하겠습니다’ 에 체크 후 댓글을 작성해주세요'
          }
     },
     eng: {
          gu_1: {
               title: 'Let\'s go to Dreamcatcher in <span class="col_big">Test 1</span>!',
               sub: 'DreamPlace is a map that shows the places visited by Dreamcatcher.<br>',
               mini: '* For inquiries regarding misinformation or errors, please use the "Guestbook" at the bottom right.<br>line_2'
          },
          gu_2: {
               title: 'You can see <span class="col_big">content</span> and <span class="col_big">Test 2</span>!',
               sub: 'Clicking on the location name shows information (opening hours, etc.),<br> and clicking on the content shows the members of Dreamcatcher.',
               mini: '* We are waiting for more location suggestions in the "Guestbook" at the bottom right of the map.'
          },
          gu_3: {
               title: 'Filtering the visited places in <span class="col_big">Test 3</span>!',
               sub: 'You can filter places visited by each member<br>to see only the places you want!',
               mini: '* As the number of listed places increases, we plan to add regional filtering.'
          },
          gu_4: {
               title: 'Let\'s talk about <span class="col_big">InSomnia</span> in Test 4!',
               sub: 'You can share visit reviews and request map markings<br>without logging in and share various stories!',
               mini: '* Please check "I will write as a non-member" before submitting your comment.'
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
