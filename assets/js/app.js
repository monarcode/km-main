

window.onload = (event) => {
    const navbar = document.querySelector(".navbar");
    var device = navigator.userAgent;

    window.onscroll = ()=> {
        this.scrollY > 100 ? navbar.classList.add("scroll") : navbar.classList.remove("scroll");
    }


    console.log(device);

    $('body').scrollspy({
        target: '#nav'
    })

    $('#app-download').click(function () {

        if (device.match(/Android|Windows/i)) {
            console.log('Android');
            window.open("https://play.google.com/store/apps/details?id=com.teqpace.kolomoni&hl=en");
        } else if (device.match(/Mac|Safari|iPhone|iPad|AppleWebKit/i)) {
            console.log('iOS')
            window.open("https://apps.apple.com/ng/app/kolomoni/id1479338235");
        }
    });
}
