$(document).ready(function () {
    $('.notify-badge').arctext({
        radius: 300
    });
    var MenuModel = function MenuModel(XMLHttpRequest) {
        this.XMLHttpRequest = XMLHttpRequest;
      };
    
      MenuModel.prototype.getProducts = function getProducts(index, fn) {
        var oReq = new this.XMLHttpRequest();
        oReq.onload = function onLoad(e) {
          var ajaxResponse = JSON.parse(e.currentTarget.responseText)
          console.log(ajaxResponse)
        };
      
        oReq.open('GET', 'https://familyburger.com.ua/products.json', true);
        oReq.send();
      };
    var menuModel = new MenuModel(XMLHttpRequest);
    menuModel.getProducts();
    var $images = $('.product-img');
    var itemImg = Array.prototype.slice.call(document.querySelectorAll('.container .item-img'));
    for (var i = 0; i < itemImg.length; i++) {
        itemImg[i].onclick = addImage;
    }
    function addImage() {
        var num = itemImg.indexOf(this) + 1;
        var price = document.getElementsByClassName('ribbon')[0];
        var description = document.getElementsByClassName('description')[0];
        $images.css('background-image', 'url(images/product/img-' + num + '.png)');
        switch (num) {
            case 1:
                price.innerHTML = '19 грн.';
                description.innerHTML = '<b>Чікен Бургер</b><br>Найсмачніша соковита курятина – приготована на грилі,соковита куряча котлета,соковиті томати,свіжа пекінська капуста і ніжний пікантний соус у гарячій рум\'яній булочці.Справжнє задоволення !!!';
                break;
            case 2:
                price.innerHTML = '24,50 грн.';
                description.innerHTML = '<b>Чіз Бургер</b><br>Нехай життя буде ще більш сонячним та радісним разом з чізбургером від Family Burger! Фірмове поєднання приготованої на грилі соковитої курячої котлети із злегка розплавленим бутербродним сиром, свіжа пекінська капуста, соковиті помідори і ніжний пікантний соус. Яскраве поєднання смаку та прянощів!';
                break;
            case 3:
                price.innerHTML = '34 грн.';
                description.innerHTML = '<b>Кріспі Бургер</b><br>Соковите цільне куряче філе приготоване на вогню разом з солоними огірочками, томатами, свіжою пекінською капустою, під гострим соусом Табаско. Вишуканий смак!';
                break;
            case 4:
                price.innerHTML = '30,50 грн.';
                description.innerHTML = '<b>Делюкс Бургер</b><br>Неймовірно,неймовірно барвистий і апетитний бургер із соковитим курячим філе в хрусткій паніровці, зі свіжими огірками, та томатами під пікантним часниковим соусом в м\'якій булочці з кунжутом…. Радісний смак літа!!!';
                break;
            case 5:
                price.innerHTML = '35 грн.';
                description.innerHTML = '<b>Дабл Чізбургер</b><br>Величезне задоволення! Чим більше – тим краще! Саме тому, в нашому Дабл чізбургері  аж дві соковиті курячі котлети обсмажені на грилі,та аж два злегка розплавлених бутербродних сира, а також стиглі томати, свіжа пекінська капуста і ніжний пікантний соус у гарячій рум\'яній булочці.  Даблчізбургер – коли звірячий апетит!';
                break;
            case 6:
                price.innerHTML = '19 грн.';
                description.innerHTML = '<b>Смажені гомілки</b><br>Шматочок золотистої курочки улюблений з самого дитинства, соковитий всередині, хрусткий зовні. Промаринований у східних спеціях за рецептом <br>Family Burger – наша фірмова страва.';
                break;
            case 7:
                price.innerHTML = '8 грн.';
                description.innerHTML = '<b>Смажені крильця</b><br>Обсмажені в рослинному фритюрі курячі крила в пікантній оригінальній паніровці. Соковиті в середині, хрусткі зовні. Чудово підійдуть як закуска до обіду або пива ммм... Неймовірно смачно...';
                break;
            case 8:
                price.innerHTML = '13,25 грн.';
                description.innerHTML = '<b>Картопля Фрі</b><br>Легендарна картопля фрі – з апетитною хрусткою скоринкою та м’якою, розсипчастою серединкою.';
                break;
            case 9:
                price.innerHTML = '79,50 грн.';
                description.innerHTML = '<b>Піца Чіз Квадро</b><br>Склад: вершковий соус, сир пармезан, сир дорблю, сир моцарелла, сир голандський , заправка, легка граціозність.';
                break;
            case 10:
                price.innerHTML = '49,99 грн.';
                description.innerHTML = '<b>Піца Маргаріта</b><br>Склад: соус,сир твердий, помідори, заправка, настоянка ніжності.';
                break;
            case 11:
                price.innerHTML = '74 грн.';
                description.innerHTML = '<b>Піца Гавайська</b><br>Склад: соус, куряче філе, сир, печериці, ананаси, заправка, гарний настрій.';
                break;
            case 12:
                price.innerHTML = '68 грн.';
                description.innerHTML = '<b>Піца Карбонара</b><br>Склад: соус, шинка, бекон, сир, печериці, маслини, кукурудза, позитивні думки.';
                break;
            case 13:
                price.innerHTML = '75 грн.';
                description.innerHTML = '<b>Піца Капоне</b><br>Склад: соус томатний, шинка, сир, печериці, болгарський перець, вершковий соус, нотки чарівності.';
                break;
            case 14:
                price.innerHTML = '68,50 грн.';
                description.innerHTML = '<b>Піца Кантрі</b><br>Склад: соус, куряче філе, сир Голандський, сир Фета, помідори, кукурудза, перець чілі, міцний дух.';
                break;
            case 15:
                price.innerHTML = '85 грн';
                description.innerHTML = '<b>Піца Фамілі</b><br>Склад: соус, сир, Куряче філе,печериці, помідори, болгарський перець, кукурудза, ананас, родинне тепло.';
                break;
            case 16:
                price.innerHTML = '67 грн.';
                description.innerHTML = '<b>Піца Салямі</b><br>Склад: соус томатний, мисливські ковбаски, салямі, сир, вершковий соус, смак перемоги.';
                break;
            case 17:
                price.innerHTML = '35 грн.';
                description.innerHTML = '<b>Чікен рол</b><br>Закручений зі смаком! Шматочки золотистого курячого філе в хрусткій паніровці, з соковитою пекінською капустою, морква по-корейськи, пікантний часниковий соусом, загорнутий в пшеничний лаваш і підсмажений на грилі. Яскрава смакота!!!';
                break;
            case 18:
                price.innerHTML = '36 грн.';
                description.innerHTML = '<b>Чіз рол</b><br>Справжній Голандський сир та сир Моцарелла, з соковитою пекінською капустою, томатами, під сирним соусом, загорнутий в пшеничний лаваш і підсмажений на грилі. Дієтично, смачно, легко !!!';
                break;
            case 19:
                price.innerHTML = '36 грн.';
                description.innerHTML = '<b>Стейк рол</b><br>Золотистий курячий стейк приготований на вогню, соковита пекінська капуста, помідори, під гострим соусом Тобаско, та томатним кетчупом,  загорнутий в пшеничний лаваш і підсмажений на грилі. Шедевр смаку!!!';
                break;
            case 20:
                price.innerHTML = '30 грн.';
                description.innerHTML = '<b>Цезар рол</b><br>Смак соковитої золотистої курочки з ніжним сиром, , з соковитою пекінською капустою, томатами та пікантним Французьким соусом, загорнутий в пшеничний лаваш і підсмажений на грилі. Справжня насолода!!!';
                break;
            case 21:
                price.innerHTML = '29 грн.';
                description.innerHTML = '<b>Грецький салат</b><br>Грецький салат - це один з найлегших і низькокалорійних салатів, і при цьому він надзвичайно корисний та смачний! Назва в даному випадку повністю виправдовує себе - цей салат дійсно родом з Греції. Соковите листя салату, помідори, огірки, перець, ріпчаста цибуля, маслини, нарізаний кубиками сир заправлени олією і лимонним соком.';
                break;
            case 22:
                price.innerHTML = '27 грн.';
                description.innerHTML = '<b>Салат «Цезарь»</b><br>Воістину знамените блюдо Салат, як і імператор, теж може одночасно виконувати кілька справ. Ніжне куряче філе так буде буквально танути на Ваших зубах, а хрускіт підсмажених сухариків безсумнівно, викличе у вас приплив сил, звичайно ж листи салату, свіжі овочі. Все це, посипане повітряними пластівцями сиру і заправлене соусом, що витончено передає любов, з якою наш кухар готує свій твір мистецтва.';
                break;
            default:
                price.innerHTML = '00 грн.';
                description.innerHTML = 'Вибачте,товар відсутній';
        }
        (function slideDown() {
            var hgt = 25;
            interval = setInterval(function () {
                if (50 > hgt) {
                    hgt += 0.5;
                    price.style.height = hgt + "%";
                } else {
                    price.style.height = hgt + "%";
                    clearInterval(interval);
                }
            }, 25);
        })();
    }
}, true);
