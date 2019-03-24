/**
 * 定义一个函数，获取指定元素当前的样式
 * 参数：
 *      obj 要获取样式的元素
 *      name 要获取的样式名
 */
function getStyle(obj , name){
    if(window.getComputedStyle){
        //正常浏览器的方式,具有getComputedStyle()方法
        return getComputedStyle(obj , null)[name];
    }else{
        //IE8的方式
        return obj.currentStyle[name];
    }
}


/** 
 * 创建一个动画函数
 * 参数：
 * obj：要执行动画的对象
 * attr：要执行动画的样式
 * target：执行动画的目标位置
 * speed：要移动的速度
 * callback：回调函数，这个函数将会在动画执行完毕以后执行
 */
function move(obj, attr, target, speed, callback){
    //8、关闭上一个定时器
    clearInterval(obj.timer);
    //10、获取元素目前位置
    var current = parseInt(getStyle(obj, attr));

    //9、判断速度的正负值
    if (current > target) {
        //11此时速度应为负值
        speed = -speed;
    }
    //1、开启一个定时器，用来执行动画效果
    //11、执行动画的对象中添加一个timer属性，用来保存它自己的标识
    obj.timer = setInterval(function () {
        //2、获取执行动画的对象的原来的值
        var oldValue = parseInt(getStyle(obj, attr));
        //3、在旧值得基础上增加
        var newValue = oldValue + speed;
        //7、判断newValue是否大于动画的目标位置
        if ((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
            newValue = target;
        }
        //4、将新值设置给执行动画的对象
        obj.style[attr] = newValue + "PX";
        //5、当元素移动到执行动画的目标位置时，使其停止行动
        if (newValue == target) {
            //6、达到目标，关闭定时器
            clearInterval(obj.timer);
            //12、动画执行完毕，调用回调函数
            callback && callback();
        }
    }, 30);
}