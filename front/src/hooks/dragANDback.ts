
const drag = function (odom: HTMLElement) {
    //计算元素距离页面顶部的距离和自身高度 
    //header最开始top为0 仅当-top <= header.offsetHeight的时候 说明header已经离开当前页面

    const h = odom.offsetHeight
    let isClient = false
    odom.addEventListener('mouseenter', function (e) {
        isClient = true
        clearInterval(timer)
        back(odom, h)
    })

    odom.addEventListener('mouseleave', function (e) {
        isClient = false
        clearInterval(timer)
    })



    //疑问 定时器是number数据类型 但是：number下面编译会报红（不影响运行） 不知道原因
    let timer:number =0
    timer = setInterval(function () {
        console.log(odom.offsetTop, '往上走')
        if (isClient) {
            clearInterval(timer)
        }
        else if (h <= -odom.offsetTop) {
            odom.style.top = -h + 4 + 'px'
            clearInterval(timer)
        } else {
            odom.style.top = odom.offsetTop + (-2) + 'px'
        }
    }, 30)

}

const back = function (odm: HTMLElement, domHeight: number) {
    let timer: number=0
    timer = setInterval(function () {
        console.log(odm.offsetTop, '往下走')
        if (odm.offsetTop >= 0) {
            odm.style.top = 0 + 'px'
            clearInterval(timer)
            setTimeout(() => {
                drag(odm)
            }, 1000);
        } else {
            odm.style.top = odm.offsetTop + 2 + 'px'
        }
    }, 30)

}



export default drag 