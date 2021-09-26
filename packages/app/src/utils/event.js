const events = {};

export default {
  on(evtName, handler) {
    if (events[evtName] && events[evtName].indexOf(handler) < 0) {
      events[evtName].push(handler);
    } else if (!events[evtName]) {
      events[evtName] = [handler];
    }
  },
  off(evtName, handler) {
    if (events[evtName] && handler) {
      events[evtName] = events[evtName].filter(item => item !== handler);
    } else if (events[evtName]) {
      events[evtName] = [];
    }
  },
  trigger(evtName, data) {
    const handlerList = events[evtName];
    if (handlerList) {
      handlerList.forEach(h => h(data));
    }
  },
};
