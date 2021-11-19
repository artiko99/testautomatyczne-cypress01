import {AddToChart} from "../../pages/shopPage/ShopPage"

const addToChart = new AddToChart()

it('addtochart', function() {

addToChart.navigate('http://automationpractice.com/index.php')
addToChart.clickAddChart()
addToChart.order_SingIn('testowekonto18@gmail.com', 'Artur', 'Kowalski', 'Qwerty123', '12', 'Krakow', '32310', '123123123')
addToChart.order_Proccess()
})
