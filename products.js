function Product(id, name, shortDescription, description, price, image) {
  const reviews = [];
  const getReviews = () => reviews;
  const addReview = (message) => {
    if (message) reviews.push(message);
  };
  return {
    id,
    name,
    shortDescription,
    description,
    price,
    image,
    getReviews,
    addReview,
  };
}

const productsList = (function Products() {
  const products = [];
  products.push(
    Product(
      "card-1",
      "ADIDAS SAMBA OG",
      "Класика, която никога не остарява. Първоначално, произведен като обувка за футбол, е втория най-продаван силует от adidas с продадени 35 милиона броя.",
      "Класика, която никога не остарява. Първоначално, произведен като обувка за футбол, е втория най-продаван силует от adidas с продадени 35 милиона броя.Връхна част: може би най-добрият материал за производството на обувки. Поддържа формата си, диша и списъкът с положителни качества далеч не свършва до тук.",
      239,
      "https://static.ftshp.digital/img/p/8/1/8/2/7/5/818275.jpg"
    )
  );
  products.push(
    Product(
      "card-2",
      "NIKE AIR MAX 90",
      "Може би най-популярната маратонка в най-успешната продуктова линия на Nike Air Max също е наследство, вдъхновение, част от историята и легенда.",
      `Може би най-популярната маратонка в най-успешната продуктова линия на Nike Air Max също е наследство, вдъхновение, част от историята и легенда. Говорим за маратонките Nike Air Max 90, известни като Nike Air Max III до 2000 г. Наскоро, те отбелязаха 30 години на рафтовете и през това време оставиха незаличима следа в историята на уличната култура.

Силуетът Nike Air Max 90, винаги се е фокусирал върху елегантността и красотата. Комфортът и омекотяването играят основна роля в този силует поради исторически усъвършенстваната въздушна капсула Air Sole, която е отличителен белег на продуктовата линия Air Max.

Над 30 години история на Air Max 90
Във Footshop разполагаме с маратонките AM 90 в много вариации. В предложенията ни ще намерите кожа, велур или популярната класическа версия на Essential. Освен това, богатият избор от материали ви гарантира, че можете да изберете ниски маратонки, които да пасват на любимите ви дрехи. Във всеки случай винаги можете да изберете мъжките и дамските маратонки Nike Air Max 90 в черно или бяло.

Със маратонки Nike Air Max 90 от Footshop можете да добавете част от историята към вашият шкаф още сега.`,
      349,
      "https://static.ftshp.digital/img/p/1/1/4/4/9/9/0/1144990-full_product.jpg"
    )
  );
  products.push(
    Product(
      "card-3",
      "ADIDAS CAMPUS 00S",
      "Тази версия на adidas Campus се основава на естетиката на нулевите години, която напоследък е много актуална, особено под хаштага #Y2K.",
      `Тази версия на adidas Campus се основава на естетиката на нулевите години, която напоследък е много актуална, особено под хаштага #Y2K. Промяната спрямо оригиналния, малко по-изчистен вариант, са по-широките връзки и цялостният по-обемист вид, който отива на почти всеки скейтборд. И независимо дали за скейтпарка, или за ежедневното носене, adidas Campus 00s ще бъде чудесен избор за вас на добра цена.`,
      249,
      "https://static.ftshp.digital/img/p/8/3/4/9/2/5/834925.jpg"
    )
  );
  products.push(
    Product(
      "card-4",
      "Y-3 SUPERSTAR",
      "Кожа: може би най-добрият материал за производството на обувки. Поддържа формата си, диша и списъкът с положителни качества далеч не свършва до тук.",
      `МАТЕРИАЛИ
Връхна част
Кожа: може би най-добрият материал за производството на обувки. Поддържа формата си, диша и списъкът с положителни качества далеч не свършва до тук.

Синтетика: за разлика от текстила, синтетичните влакна са по-здрави, по-трайни и по-бързи за изсъхване.

Подметка
Гума: лесен за поддръжка материал. Ще го оцените най-вече при дъждовно време.`,
      600,
      "https://static.ftshp.digital/img/p/8/8/4/5/7/5/884575.jpg"
    )
  );
  products.push(
    Product(
      "card-5",
      "NIKE DUNK LOW QS",
      "Найк Дънк е без съмнение един от 5-те най-добри силуета, които някога сме виждали от Nike. Те се появяват за първи път през 1985 г., както подсказва името, като баскетболна обувка с дизайн на висока платформа.",
      `Найк Дънк е без съмнение един от 5-те най-добри силуета, които някога сме виждали от Nike. Те се появяват за първи път през 1985 г., както подсказва името, като баскетболна обувка с дизайн на висока платформа. Дънковете се свързват със златната ера на баскетбола толкова, колкото и със златната ера на маратонките - за близо 40 години на пазара те имат стотици сътрудничества, сред които трябва да споменем релийзите на компании като Pigeon, Tiffany, FLOM и Heineken.

Разгледайте Nike Dunk Low във Footshop и открийте маратонката, която през последните няколко десетилетия оформя представата за това какво означава да си готин.`,
      259,
      "https://static.ftshp.digital/img/p/8/2/4/8/2/4/824824.jpg"
    )
  );
  const getProducts = function () {
    return products;
  };
  const getProduct = function (id) {
    for (product of getProducts()) {
      if (product.id === id) return product;
    }
    return -1;
  };
  return { getProducts, getProduct };
})();
