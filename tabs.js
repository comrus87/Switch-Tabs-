'use strict'
function switchTabs (class1, class2, class3) {

  // Здесь находим элементы навигации
  let tab = document.querySelectorAll(class1);
  // Здесь находим их родителя
  let infoHeader = document.querySelector(class2);
  // Здесь находим разделы контента, которые будет переключать
  let tabContent = document.querySelectorAll(class3);

  function hideTabContent (a) {
    for (let i = a; i < tabContent.length; i++){
      tabContent[i].classList.add('hide');
      tabContent[i].classList.remove('show');
    };
  };

  hideTabContent(1);

  function showTabContent (b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    };
  };

  infoHeader.addEventListener('click', function (evt) {
    let target = evt.target;
    if (target && target.classList.contains(class1.replace('.', ''))) {
      for (let i=0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        };
      };
    };

  })
};

switchTabs('.info-header-tab', '.info-header', '.info-tabcontent');