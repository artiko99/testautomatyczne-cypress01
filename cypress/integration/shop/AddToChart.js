import {AddToChart} from "../../pages/shopPage/ShopPage"

const addToChart = new AddToChart()

it('addtochart Proccess', function() {

addToChart.navigate('http://demo.testarena.pl/zaloguj')
addToChart.clickAddChart('arturgomulka20@gmail.com', 'Qwerty123', 'pierwsze wydanie')
// addToChart.order_SingIn('testowekonto102@gmail.com', 'Artur', 'Kowalski', 'Qwerty1234', '12', 'Krakow', '32-310', '123123123')
// addToChart.order_Proccess()
})

// it('singIn Fail', function() {
// addToChart.order_SingIn('testowekonto102@gmail.com', 'Artur', 'Kowalski', 'Qwerty12345', '12', 'Krakow', '32310', '123123123')
// addToChart.order_Proccess()
// })