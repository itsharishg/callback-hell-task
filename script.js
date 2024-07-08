let count = 10;
let elem = document.getElementById("countdown");
elem.innerText = count;

setTimeout(() => {
  count--;
  elem.innerText = count;
  setTimeout(() => {
    count--;
    elem.innerText = count;
    setTimeout(() => {
      count--;
      elem.innerText = count;
      setTimeout(() => {
        count--;
        elem.innerText = count;
        setTimeout(() => {
          count--;
          elem.innerText = count;
          setTimeout(() => {
            count--;
            elem.innerText = count;
            setTimeout(() => {
              count--;
              elem.innerText = count;
              setTimeout(() => {
                count--;
                elem.innerText = count;
                setTimeout(() => {
                  count--;
                  elem.innerText = count;
                  setTimeout(() => {
                    count--;
                    elem.innerText = count;
                    setTimeout(() => {
                      elem.innerText = "Happy Independence Day!";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
