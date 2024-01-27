<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>

const line = document.querySelector('.3-2-wrapp');

gsap.from(line, {
  scaleX: 0,
  transformOrigin: 'left center',
  scrollTrigger: {
    trigger: line,
    scrub: true,
    start: 'top top',
    end: 'bottom bottom',
    markers: true,
  },
});









document.addEventListener('DOMContentLoaded', function () {
  var dropdowns = document.querySelectorAll('.nav_dropdown');

  dropdowns.forEach(function (dropdown) {
    var arrow = dropdown.querySelector('.arrow-dropdown');
    var dropdownList = dropdown.querySelector('.nav_dropdown-list');

    dropdown.addEventListener('click', function (event) {
      event.stopPropagation();
      resetAllDropdowns();
      arrow.style.transform = 'rotate(180deg)';
    });

    document.addEventListener('click', function (event) {
      if (!dropdownList.contains(event.target)) {
        resetAllDropdowns();
      }
    });
  });

  function resetAllDropdowns() {
    dropdowns.forEach(function (dropdown) {
      var arrow = dropdown.querySelector('.arrow-dropdown');
      arrow.style.transform = 'rotate(0deg)';
    });
  }
});


document.addEventListener('DOMContentLoaded', function () {
  var dropdowns = document.querySelectorAll('.nav_dropdown');

  dropdowns.forEach(function (dropdown) {
    var arrow = dropdown.querySelector('.arrow-dropdown');
    var dropdownList = dropdown.querySelector('.nav_dropdown-list');
    var isOpen = false;

    dropdown.addEventListener('click', function (event) {
      event.stopPropagation();

      if (!isOpen) {
        resetAllDropdowns();
      }

      isOpen = !isOpen;

      arrow.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
    });

    dropdownList.addEventListener('click', function (event) {
      // Остановите всплытие события, чтобы оно не достигло dropdown и не вызвало смену состояния
      event.stopPropagation();
      // Ваши дополнительные действия при клике на dropdownList
    });
  });

  document.addEventListener('click', function (event) {
    resetAllDropdowns();
    // Прерывание кода внутри dropdown.addEventListener('click', function (event) { ... })
    event.stopPropagation();
  });

  function resetAllDropdowns() {
    dropdowns.forEach(function (dropdown) {
      var arrow = dropdown.querySelector('.arrow-dropdown');
      arrow.style.transform = 'rotate(0deg)';
    });
  }
});