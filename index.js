const image = document.querySelector("#myImage");
const text = document.querySelector("h1");
const text1 = document.querySelector("h2");
const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector("#two");
buttonOne.addEventListener("click", boy);
buttonTwo.addEventListener("click", girl);
function boy() {
    image.setAttribute("src", "https://dou71.edu-nv.ru/files/administrator.dou71_edu_nv_ru/%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8/%D0%B4%D0%B5%D0%BA%D0%B0%D0%B1%D1%80%D1%8C/%D0%BF%D0%BE%D0%B4%D0%B0%D1%80%D0%BA%D0%B8_%D0%B4%D0%B5%D1%82%D1%8F%D0%BC/%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0_%D0%B4%D0%B5%D1%82%D0%B8_%D1%81_%D0%BF%D0%BE%D0%B4%D0%B0%D1%80%D0%BA%D0%B0%D0%BC%D0%B8.jpg");
    text.innerHTML = "ВЫБЕРИТЕ ВОЗРАСТ";
    buttonOne.innerHTML = "0-3 ГОДА";
    buttonTwo.innerHTML = "4-7 ЛЕТ";
    buttonOne.addEventListener("click", babyBoy);
    buttonTwo.addEventListener("click", childBoy);
}
function babyBoy() {
    image.setAttribute("src","https://sun9-65.userapi.com/impf/c621707/v621707196/450b5/R0SeSYdVSTo.jpg?size=604x459&quality=96&sign=bbb53cf27fb51b9656a21899585bfd78&type=album");
    text.innerHTML = "ВОЗМОЖНЫЕ ПОДАРКИ"
    text1.innerHTML = "Кубики, качели, коврик для развития, мячи, бизиборд, попрыгунки, конструктор, краски, железная дорога, набор инструментов."
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none";
}
function childBoy() {
    image.setAttribute("src","https://sun9-80.userapi.com/impg/pAzKJtLdBT81Ff73R1xiqWJa9B8sq6cyRw9Aaw/1p5S0GMY7D8.jpg?size=800x726&quality=95&sign=d95220dd39192cd8e8bc7917029d0d22&c_uniq_tag=fy3lF328ql6JKRgcxSw5eyinEvgyUHsPpzzk1h3Am4E&type=album");
    text.innerHTML = "ВОЗМОЖНЫЕ ПОДАРКИ"
    text1.innerHTML = "Самокат, велосипед, телефон, планшет, воздушный змей, дартс, смарт колонка, авто трек, 3D ручка.";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none";
}
function girl() {
    image.setAttribute("src", "https://media.baamboozle.com/uploads/images/69723/1608361506_238116");
    text.innerHTML = "ВЫБЕРИТЕ ВОЗРАСТ";
    buttonOne.innerHTML = "0-3 ГОДА";
    buttonTwo.innerHTML = "4-7 ЛЕТ";
    buttonOne.addEventListener("click", babyGirl);
    buttonTwo.addEventListener("click", childGirl);
}
function babyGirl() {
    image.setAttribute("src","https://thumbs.dreamstime.com/b/%D1%80%D0%B5%D0%B1%D1%91%D0%BD%D0%BE%D0%BA-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-%D1%81-%D1%82%D1%80%D0%B5%D1%89%D0%BE%D1%82%D0%BA%D0%BE%D0%B9-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D1%80%D0%B5%D0%B1%D1%91%D0%BD%D0%BA%D0%B0-103901753.jpg");
    text.innerHTML = "ВОЗМОЖНЫЕ ПОДАРКИ"
    text1.innerHTML = "Куклы, заколки и мелки для волос, кукольный домик, краски, кукольный набор еды и посуды, набор доктора.";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none"; 
}
function childGirl() {
    image.setAttribute("src","https://cdn3.imgbb.ru/user/118/1189913/201410/ccc09b498ce2d2f1d361dcd1c1906280.jpg");
    text.innerHTML = "ВОЗМОЖНЫЕ ПОДАРКИ"
    text1.innerHTML = "Велосипед, личный дневник, умные часы, сумочка, фотоаппарат, телефон, планшет, ланчбокс, шкатулка. ";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none"; 
}
