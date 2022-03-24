function animate(obj, target, callback) {
            clearInterval(obj.timer); // 清除定时器，防止定时器的重复开启
            obj.timer = setInterval(function () {
                var step = (target - obj.offsetLeft) / 50;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                if (obj.offsetLeft == target) {
                    clearInterval(obj.timer);
                    if (callback) {
                        // 调用回调函数
                        callback();
                    }
                }
                obj.style.left = obj.offsetLeft + step + 'px'
            }, 15);
        }