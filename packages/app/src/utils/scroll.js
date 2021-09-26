
// 获取元素距文档左上角位置
export function getElementLeft(element) {
  var actualLeft = element.offsetLeft;
  var current = element.offsetParent;

  while (current !== null){
    actualLeft += current.offsetLeft;
    current = current.offsetParent;
  }

  return actualLeft;
}

// 获取元素距文档左上角位置
export function getElementTop(element){
  var actualTop = element.offsetTop;
  var current = element.offsetParent;

  while (current !== null){
    actualTop += current.offsetTop;
    current = current.offsetParent;
  }

  return actualTop;
}

// 滚动到目标位置
export const scrollToPosY = (function () {
  const unit = 1;
  var timer = null;
  // 同一时间只允许一个滚动动作
  var scrollingTime = 0;
  function scroll(posY, startTime) {
    var startTime = startTime || (new Date()).getTime();
    if (scroll.stopNow || (scrollingTime && scrollingTime !== startTime)) {
      return;
    }
    scrollingTime = startTime;
    clearTimeout(timer);
    const scrollTop = document.documentElement.scrollTop;
    timer = setTimeout(()=> {
      const isDown = scrollTop < posY;
      const nextTop = scrollTop + (isDown ? +unit : -unit);
      if ((isDown && nextTop > posY) || (!isDown && nextTop < posY)) {
        document.documentElement.scrollTop = posY;
        scrollingTime = 0;
      } else {
        document.documentElement.scrollTop = nextTop;
        scroll(posY, startTime);
      }
    }, 8);
  }

  // 如果用户拉了滚动条可以停止 scroll 滚动到目标位置去
  scroll.stop = function() {
    scroll.stopNow = true;
    scrollingTime = 0;
    clearTimeout(timer);
    setTimeout(()=> {
      scroll.stopNow = false;
    }, 300);
  }

  scroll.isScrolling = function() {
    return !!scrollingTime;
  }

  return scroll;
}());