const {
    active,
    none,
    countryCode
} = {
    active: 'active',
    none: 'd-none',
    countryCode: 'countryCode'
}

const getSavedLanguage = localStorage.getItem(countryCode);

AOS.init();

(
    $('.imgs').removeClass(active),
        $(`.img-${getSavedLanguage}`).addClass(active)
)

$('.gradient-card-running-line').each((index, elem) => {
    const gradientCardRunningLine = $(elem).text();
    b//1;
    $(elem).text('');

    for (let i = 0; i < gradientCardRunningLine.length - 1; i++) {
        $(elem).append(`<span>${gradientCardRunningLine[i]}</span>`)
    }

    const thisChild = $(elem).children('span');

    let count = 0;
    thisChild.each((index, elemSpan) => count += $(elemSpan).width())

    $(elem).css('width', `${count}px`);
    $(elem).css('animation', `gradient-card-line ${count / 80}s linear`);
    $(elem).css('animation-iteration-count', `infinite`);
    $(elem).css('animation-play-state', `paused`);

})


// ....... Menu


const menu = document.querySelector('.menu');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');
const purple = document.querySelector('.purple');
const yellowMobile = document.querySelector('.yellow-mobile');
const greenMobile = document.querySelector('.green-mobile');
const purpleMobile = document.querySelector('.purple-mobile');
const changeLanguage = document.querySelectorAll('.change-language');

window.onload = () => {
    setTimeout(() => {
        yellow.classList.add('active')
        green.classList.add('active')
        purple.classList.add('active')
        yellowMobile.classList.add('active')
        greenMobile.classList.add('active')
        purpleMobile.classList.add('active')

        setTimeout(() => {
            yellow.classList.add('no-trans')
            green.classList.add('no-trans')
            purple.classList.add('no-trans')
        }, 300)
        const tl = gsap.timeline({ease: "slow", duration: 1})
        document.addEventListener("mousemove", e => {
            gsap.utils.toArray(".circle").forEach(layer => {
                const depth = layer.dataset.depth * 2;
                const moveX = ((e.pageX) - (window.innerWidth / 2)) / 3;
                const moveY = ((e.pageY) - (window.innerHeight / 2) / 3);
                if(moveY / depth < 50){
                    tl.to(layer, {
                        x: moveX / depth,
                        y: moveY / depth,
                        rotate: 15
                    }, 0);
                }
            });

        });
    }, 1500)
}

$(window).on('scroll', () => {
    const scroly = window.scrollY;
    if (scroly >= 10) {
        menu.classList.add('active')
    } else if (scroly <= 10) {
        menu.classList.remove('active')
    }
}).scroll()

changeLanguage.forEach((item) => {
    item.addEventListener('click', function () {
        const lang = this.dataset.lang;
        if (lang) {
            translateSite(lang)
            localStorage.setItem(countryCode, lang.toLowerCase());
        } else {
            console.log('Lang err')
        }
    })
})


const choose_green = $('#choose-green').offset().top


ScrollTrigger.create({
    start: `top -${choose_green - 400}`,
    end: 9999,
    toggleClass: {className: 'active', targets: '.choose-green '},
});

const buttons = gsap.utils.toArray('.etap-work-svg');
buttons.forEach((btn) => {
    gsap.from(btn, {
        scrollTrigger: {
            start: 'top bottom',
            end: 'bottom top',
            trigger: btn,
            toggleClass: 'active'
        }
    });
});


const mobileMenBoard = document.querySelector('.mobile-menu-board');
const menuItemMobile = document.querySelector('.menu-item-mobile');
const menuItemMobileLink = document.querySelectorAll('.menu-item-mobile ul .menu-item-mobile-link');
mobileMenBoard.addEventListener('click', function () {
    if (this.classList.contains(active)) {
        this.classList.remove(active);
        menuItemMobile.classList.remove(active);
        document.body.style.overflow = null;
    } else {
        this.classList.add(active);
        menuItemMobile.classList.add(active);
        document.body.style.overflow = 'hidden';
    }
})

menuItemMobileLink.forEach((item) => {
    item.addEventListener('click', () => {
        if (mobileMenBoard.classList.contains(active)) {
            mobileMenBoard.classList.remove(active);
            menuItemMobile.classList.remove(active);
            document.body.style.overflow = null;
        } else {
            mobileMenBoard.classList.add(active);
            menuItemMobile.classList.add(active);
            document.body.style.overflow = 'hidden';
        }
    })
})

//. Works

const Works = [
    {
        name: "Sdney",
        imgUrl: 'images/Sydney.png',
        links: [
            {
                name: 'index.html',
                url: 'https://torgomyan01.github.io/sydney/'
            }
        ],
        created: 'HTML CSS JS'
    },
    {
        name: "Empover-Prosper",
        imgUrl: 'images/Empower-Prosper.png',
        links: [
            {
                name: 'index.html',
                url: 'https://torgomyan01.github.io/empower-prosper/'
            }
        ],
        created: 'HTML CSS JS'
    },
    {
        name: "Aniox",
        imgUrl: 'images/Aniox.png',
        links: [
            {
                name: 'index.html',
                url: 'https://torgomyan01.github.io/ainox/'
            },
            {
                name: 'confirm-email.html',
                url: 'https://torgomyan01.github.io/ainox/confirm-email.html'
            },
            {
                name: 'email.html',
                url: 'https://torgomyan01.github.io/ainox/email.html'
            },
            {
                name: 'finish.html',
                url: 'https://torgomyan01.github.io/ainox/finish.html'
            },
            {
                name: 'login.html',
                url: 'https://torgomyan01.github.io/ainox/login.html'
            },
            {
                name: 'new-ticket.html',
                url: 'https://torgomyan01.github.io/ainox/new-ticket.html'
            },
            {
                name: 'robo.html',
                url: 'https://torgomyan01.github.io/ainox/robo.html'
            },
            {
                name: 'steps.html',
                url: 'https://torgomyan01.github.io/ainox/steps.html'
            },
            {
                name: 'ticket.html',
                url: 'https://torgomyan01.github.io/ainox/ticket.html'
            },
            {
                name: 'ticket-message.html',
                url: 'https://torgomyan01.github.io/ainox/ticket-message.html'
            },
            {
                name: 'trial.html',
                url: 'https://torgomyan01.github.io/ainox/trial.html'
            },


        ],
        created: 'HTML CSS JS'
    },
    {
        name: "Lagom",
        imgUrl: 'images/Lagom.png',
        links: [
            {
                name: 'index.html',
                url: 'https://torgomyan01.github.io/lagom/'
            }

        ],
        created: 'HTML CSS SCSS JS jQUERY GSAP'
    },
    {
        name: "Arthall-Synergy",
        imgUrl: 'images/ArtHall-Synergy.png',
        links: [
            {
                name: 'index.html',
                url: 'https://torgomyan01.github.io/Arthall-Synergy/'
            }

        ],
        created: 'HTML CSS JS'
    },
    {
        name: "Artel",
        imgUrl: 'images/ARTEL1.png',
        links: [
            {
                name: 'index.html',
                url: 'https://torgomyan01.github.io/artel/'
            }

        ],
        created: 'HTML CSS SCSS JS jQUERY GSAP '
    },
    {
        name: "RimPlitka",
        imgUrl: 'images/RIM-PLITKA.png',
        links: [
            {
                name: 'index.html',
                url: 'https://mrs-rimplitka.ru/'
            }

        ],
        created: 'HTML CSS JS BOOTSTRAP'
    },
    {
        name: "Arthall",
        imgUrl: 'images/ArtHall.png',
        links: [

            {
                name: 'index.html',
                url: 'https://torgomyan01.github.io/arthall/'
            },
            {
                name: 'applications-for-participation.html',
                url: 'https://torgomyan01.github.io/arthall/applications-for-participation.html'
            },
            {
                name: 'art-critic-profile.html',
                url: 'https://torgomyan01.github.io/arthall/art-critic-profile.html'
            },
            {
                name: 'art-critics.html',
                url: 'https://torgomyan01.github.io/arthall/art-critics.html'
            },
            {
                name: 'art-dealer-profile.html',
                url: 'https://torgomyan01.github.io/arthall/art-dealer-profile.html'
            },
            {
                name: 'artist-profile.html',
                url: 'https://torgomyan01.github.io/arthall/artist-profile.html'
            },
            {
                name: 'dealers.html',
                url: 'https://torgomyan01.github.io/arthall/dealers.html'
            },
            {
                name: 'exhibition-space-profile.html',
                url: 'https://torgomyan01.github.io/arthall/exhibition-space-profile.html'
            },
            {
                name: 'inserts.html',
                url: 'https://torgomyan01.github.io/arthall/inserts.html'
            },
            {
                name: 'sign-up.html',
                url: 'https://torgomyan01.github.io/arthall/sign-up.html'
            },

        ],
        created: 'HTML SCSS Bootstrap JS'
    },
    {
        name: "Max-Asfalt",
        imgUrl: 'images/max-asfalt.png',
        links: [
            {
                name: 'index.html',
                url: 'https://mir-darog.ru/'
            }

        ],
        created: 'HTML CSS JAVASCRIPT'
    },
    {
        name: "Easy Card",
        imgUrl: 'images/EasyCards-Ru-Home.png',
        links: [
            {
                name: 'index.html',
                url: 'https://torgomyan01.github.io/easycards/'
            },
            {
                name: 'bakai-card.html',
                url: 'https://torgomyan01.github.io/easycards/bakai-card.html'
            },
            {
                name: 'freedom-card.html',
                url: 'https://torgomyan01.github.io/easycards/freedom-card.html'
            },
            {
                name: 'kazakhstan.html',
                url: 'https://torgomyan01.github.io/easycards/kazakhstan.html'
            },
            {
                name: 'kirghizia.html',
                url: 'https://torgomyan01.github.io/easycards/kirghizia.html'
            },
            {
                name: 'optimal-card.html',
                url: 'https://torgomyan01.github.io/easycards/optimal-card.html'
            },
        ],
        created: 'HTML CSS JS JQUERY AOS-JS'
    },
    {
        name: "Neural-Network",
        imgUrl: 'images/Widgets.png',
        links: [
            {
                name: 'index.html',
                url: 'https://torgomyan01.github.io/neural-network/'
            },
            {
                name: 'widgets.html',
                url: 'https://torgomyan01.github.io/neural-network/widgets.html'
            },
            {
                name: 'services.html',
                url: 'https://torgomyan01.github.io/neural-network/services.html'
            },
            {
                name: 'Trash-detection.html',
                url: 'https://torgomyan01.github.io/Trash-detection.html'
            },
            {
                name: 'widget.html',
                url: 'https://torgomyan01.github.io/widget.html'
            },
            {
                name: 'Classification-of-skin-diseases.html',
                url: 'https://torgomyan01.github.io/neural-network/Classification-of-skin-diseases.html'
            },
            {
                name: 'contacts.html',
                url: 'https://torgomyan01.github.io/neural-network/contacts.html'
            },
            {
                name: 'Definition-of-baggage-security.html',
                url: 'https://torgomyan01.github.io/neural-network/Definition-of-baggage-security.html'
            },
            {
                name: 'definition-of-hand-gestures.html',
                url: 'https://torgomyan01.github.io/neural-network/definition-of-hand-gestures.html'
            },
            {
                name: 'Detection-of-free-parking-spaces.html',
                url: 'https://torgomyan01.github.io/neural-network/Detection-of-free-parking-spaces.html'
            },
            {
                name: 'fixing-the-movement-of-people.html',
                url: 'https://torgomyan01.github.io/neural-network/fixing-the-movement-of-people.html'
            },
            {
                name: 'neural-network-capabilities.html',
                url: 'https://torgomyan01.github.io/neural-network/neural-network-capabilities.html'
            },
            {
                name: 'recognition-of-emotions-in-photo.html',
                url: 'https://torgomyan01.github.io/neural-network/recognition-of-emotions-in-photo.html'
            },
            {
                name: 'Removing-people-from-a-video.html',
                url: 'https://torgomyan01.github.io/neural-network/Removing-people-from-a-video.html'
            },
            {
                name: 'Segmentation-bacteria-under-the-microscope.html',
                url: 'https://torgomyan01.github.io/neural-network/Segmentation-bacteria-under-the-microscope.html'
            },
            {
                name: 'segmentation-of-people-in-the-photo.html',
                url: 'https://torgomyan01.github.io/neural-network/segmentation-of-people-in-the-photo.html'
            },
        ],
        created: 'HTML CSS JS JQUERY'
    },
    {
        name: "Kupon",
        imgUrl: 'images/Kupon.png',
        links: [
            {
                name: 'index.html',
                url: 'https://torgomyan01.github.io/kupon/'
            },
            {
                name: 'product.html',
                url: 'https://torgomyan01.github.io/kupon/product.html'
            },
            {
                name: 'sale.html',
                url: 'https://torgomyan01.github.io/kupon/sale.html'
            },
        ],
        created: 'HTML CSS JS BOOTSTRAP'
    },
    {
        name: "Neuron",
        imgUrl: 'images/neuron.png',
        links: [
            {
                name: 'index.html',
                url: 'https://torgomyan01.github.io/neuron/'
            }
        ],
        created: 'HTML CSS JS BOOTSTRAP JS'
    },
    {
        name: "54 Agency",
        imgUrl: 'images/54-agensy.png',
        links: [
            {
                name: 'index.html',
                url: 'https://54-agency-test.vercel.app/'
            }
        ],
        created: 'React JS'
    },
    {
        name: "YTSMp3.org",
        imgUrl: 'images/ytsmp3.png',
        links: [
            {
                name: 'Home',
                url: 'www.ytsmp3.org'
            }
        ],
        created: 'Next.js'
    },
    {
        name: "Kampus",
        imgUrl: 'images/kampus.png',
        links: [
            {
                name: 'Login',
                url: 'https://kampus-six.vercel.app'
            },
            {
                name: 'Dashboard',
                url: 'https://kampus-six.vercel.app/dashboard'
            },
            {
                name: 'Program Fonds',
                url: 'https://kampus-six.vercel.app/program-fonds'
            },
            {
                name: 'Analytics',
                url: 'https://kampus-six.vercel.app/analytic_users'
            },
            {
                name: 'List Universities',
                url: 'https://kampus-six.vercel.app/list-universities'
            },
            {
                name: 'Rating Users',
                url: 'https://kampus-six.vercel.app/rating_users'
            },
            {
                name: 'My Resume',
                url: 'https://kampus-six.vercel.app/my-resume'
            }
        ],
        created: 'React JS'
    },
    {
        name: "RosMigrant",
        imgUrl: 'images/ros-mirgrant.png',
        links: [
            {
                name: 'index.html',
                url: 'https://torgomyan01.github.io/RosMigrant/'
            },
            {
                name: 'news.html',
                url: 'https://torgomyan01.github.io/RosMigrant/news.html'
            },
            {
                name: 'wiframe.html',
                url: 'https://torgomyan01.github.io/RosMigrant/wiframe.html'
            },
        ],
        created: 'HTML CSS Bootstrap JAVASCRIPT'
    },
];


const works_row = document.querySelector('#works-row');
let worksPageCount = 6;

function startAppendWorks(array){
    works_row.innerHTML = '';
    array.slice(0, worksPageCount).forEach((elem => {
        works_row.insertAdjacentHTML('beforeend', PrintWorks(elem))
    }))
}

startAppendWorks(Works);

$('.see-more').on('click', function (){
    worksPageCount += 6;
    startAppendWorks(Works);
})

function PrintWorks(elem) {
    return (
        `
          <div class="col-md-4 col-sm-6 col-12 mb-30 h-500">
            <div style="background-image: url(${elem.imgUrl})" class="works-box">
              <div class="works-box-pages-link">
                <a class="github-link" href="#">${elem.name}</a>
                <div class="link-box overflow-y-auto">
                  ${elem.links.map((link) => `<a class="link" target="_blank" href="${link.url}">${link.name}</a>`).join(' ')}
                </div>
                <p class="page-about">${elem.created}</p>
              </div>
            </div>
          </div>
`
    )
}


const tl = gsap.timeline({ease: "slow", duration: 1})
$(window).on('mousemove', function (e) {
    gsap.utils.toArray(".calc-images-img").forEach(layer => {
        const depth = layer.dataset.depth * 2;
        const moveX = ((e.pageX) - (window.innerWidth / 2)) / 5;
        const moveY = ((e.pageY) - (window.innerHeight / 2) / 2);
        tl.to(layer, {
            x: moveX / depth,
            y: moveY / depth / 4,
            rotate: 0
        }, 0);
    });
})
// -------------- FOR DEFAULT INPUT FUNCTION -------------------


const defaultInput = $('.def-input input, .def-input textarea');
const inpLabel = $('.def-input');

defaultInput.on('blur', function () {
    inpLabel.map((index, e) => {
        if ($(e).children('input').val() === '') {
            $(e).removeClass(active);
        }
        if ($(e).children('textarea').val() === '') {
            $(e).removeClass(active);
        }
    })
})

defaultInput.on('focus', function () {
    $(this).parent().addClass(active);
})


// -------------- FOR DEFAULT INPUT FUNCTION -------------------


//... Pages


$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 475,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
    ]
});


let $canvas = $('#blob canvas'),
    canvas = $canvas[0],
    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        context: canvas.getContext('webgl2'),
        antialias: true,
        alpha: true
    }),
    simplex = new SimplexNoise();

renderer.setSize($canvas.width(), $canvas.height());
renderer.setPixelRatio(window.devicePixelRatio || 1);

let scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(45, $canvas.width() / $canvas.height(), 0.1, 1000);

camera.position.z = 5;

let geometry = new THREE.SphereGeometry(.8, 128, 128);

let material = new THREE.MeshPhongMaterial({
    color: 0xA60EDB,
    shininess: 100,
    opacity: 0.8
});

let lightTop = new THREE.DirectionalLight(0xFFFFFF, .7);
lightTop.position.set(0, 500, 200);
lightTop.castShadow = true;
scene.add(lightTop);

let lightBottom = new THREE.DirectionalLight(0xFF5FFF, .25);
lightBottom.position.set(0, -500, 400);
lightBottom.castShadow = true;
scene.add(lightBottom);

let ambientLight = new THREE.AmbientLight(0x798296);
scene.add(ambientLight);

let sphere = new THREE.Mesh(geometry, material);

scene.add(sphere);

let update = () => {

    let time = performance.now() * 0.0005,
        spikes = 0.75;

    for (let i = 0; i < sphere.geometry.vertices.length; i++) {
        let p = sphere.geometry.vertices[i];
        p.normalize().multiplyScalar(1 + 0.3 * simplex.noise3D(p.x * spikes, p.y * spikes, p.z * spikes + time));
    }

    sphere.geometry.computeVertexNormals();
    sphere.geometry.normalsNeedUpdate = true;
    sphere.geometry.verticesNeedUpdate = true;

}

function animate() {
    // sphere.rotation.x += 0.01;
    // sphere.rotation.y += 0.01;
    update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);


// .... language

const flag2 = document.querySelectorAll('.dropdown-flag-body .imgs2')
const flag = document.querySelectorAll('.dropdown-flag-body .imgs')


flag2.forEach((elem, index) => {
    elem.addEventListener('click', () => {
        flag.forEach((el, i) => {
            if (elem.classList[1] === 'img-am') {
                el.classList.remove('active')
                flag[0].classList.add('active')
            } else if (elem.classList[1] === 'img-ru') {
                el.classList.remove('active')
                flag[1].classList.add('active')
            } else if (elem.classList[1] === 'img-en') {
                el.classList.remove('active')
                flag[2].classList.add('active')
            }
        })
    })
})

const elmTranslate = document.querySelectorAll('.tr-site');


function translateSite(isoCode) {
    elmTranslate.forEach((item) => {
        const getKey = item.dataset.key;
        if (getKey) {
            const getKeyTranslate = translateKeys.find((tr) => tr.key === getKey);

            if (getKeyTranslate) {
                item.innerHTML = getKeyTranslate[isoCode]
            } else {
                console.error('No key for translateKeys Array');
            }
        } else {
            console.error('No Data Key');
        }
    })
}

function Request(url, option = {}) {
    return fetch(url, option).then((res) => res.json());
}

Request('https://ipapi.co/json').then((res) => {
    if (getSavedLanguage) {
        translateSite(getSavedLanguage.toLowerCase());
    } else {
        const code = res.country_code;
        translateSite(code.toLowerCase());
        localStorage.setItem(countryCode, code.toLowerCase());
    }
})