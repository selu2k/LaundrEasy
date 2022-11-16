// let mquery = window.matchMedia('(min-width: 600px)');
// window.addEventListener('resize', functionName);
// function functionName() {
//   mquery = window.matchMedia('(min-width: 600px)');
// }


const cover = document.querySelector(".cover")

let counter = 1

$("#changePage").on('click', function () {
    if (counter % 2 === 1) {
        anime({
            targets: cover,
            borderRadius: [
                { value: 0 },
                { value: '100%' },
                { value: 0 },
            ],
            translateX: [
                { value: -500 },
            ],
            scaleX: [
                { value: 3 },
                { value: 1 },
            ],
            borderRadius: [
                '0%', '600%', '0%'
            ],
            // height: [
            //   {value: '480px'},
            //   {value: '300px'},
            //   {value: '480px'}
            // ],
            // alignItems: 'center',
            // justifyContent: 'center',
            // innerHeight: [
            easing: 'linear'
            // borderRadius:'50%'


            // anime({
            //   targets: ".nameLaundreasy",
            //   strokeDashoffset: [anime.setDashoffset, 0],
            //   easing: 'easeInOutSine',
            //   duration: 1500,
            //   delay: function(el, i) { return i * 250 },
            //   direction: 'alternate',
            //   loop: true
            // });

        })
        anime({
            targets: ".loginPage",
            opacity: 0,
        })
        anime({
            targets: ".registerPage",
            opacity: 1,
            easing: 'linear'
        })
        anime({
            targets: ".rightWelcome",
            opacity: 0,
            translateX: [{ value: 300 }],
            duration: 400,
            easing: 'linear'
        })
        anime({
            targets: ".leftWelcome",
            translateX: [{ value: 0 }],
            marginLeft: "0px",
            opacity: 1,
            easing: 'linear'
        })
        anime({
            targets: ".nameLaundreasy",
            color: '#fff'
        })

        counter += 1

    } else {
        anime({
            targets: cover,
            translateX: [
                { value: 0 },
            ],
            scaleX: [
                { value: 3 },
                { value: 1 },
            ],
            easing: 'linear',
            borderRadius: [
                '0%', '600%', '0%'
            ],
            // borderRadius: '50%',
        });
        anime({
            targets: ".loginPage",
            opacity: 1,
            easing: 'linear'
        })
        anime({
            targets: ".registerPage",
            opacity: 0,
        })
        anime({
            targets: ".leftWelcome",
            translateX: [{ value: -300 }],
            marginLeft: "-300px",
            opacity: 0,
            duration: 400,
            easing: 'linear'
        })
        anime({
            targets: ".rightWelcome",
            opacity: 1,
            translateX: [{ value: 0 }],
            easing: 'linear'
        })
        anime({
            targets: ".nameLaundreasy",
            color: '#1F4287'
        })

        counter += 1
    }
})




// var em = document.getElementById("email1");
// em.addEventListener("blur", checkEmail(),false);

// var pass = document.getElementById("passWord1");
// pass.addEventListener("blur", checkPass(),false);

function checkPass(id) {
    var pass = document.getElementById(id);
    var password = pass.value;
    var passReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passReg.test(password)) {
        pass.classList.add('invalid');
    }
}

function checkEmail(id) {
    var em = document.getElementById(id);
    var email = em.value;
    var emailReg = /^[\w-\.]+@vitstudent\.ac\.in$/;
    if (!emailReg.test(email)) {
        em.classList.add('invalid');
    }
}

function checkReg(id) {
    var reg = document.getElementById(id);
    var regNo = reg.value;
    var regReg = /^[0-9]{2}[A-Z]{3}[0-9]{4}$/;
    if (!regReg.test(regNo)) {
        reg.classList.add('invalid');
    }
}

function confirmPass(id1, id2) {
    var pass = document.getElementById(id1);
    var conpass = document.getElementById(id2);
    var password = pass.value;
    var conpassword = conpass.value;
    if (password != conpassword) {
        conpass.classList.add('invalid');
    }
}

var removeInvalid = function (id) {
    document.getElementById(id).classList.remove('invalid');
}
// var removeInvalid2 = function(id){
//     document.getElementById(id).classList.remove('invalid');
// }

var mobileLoginContent = document.getElementsByClassName('mobileLoginContent');