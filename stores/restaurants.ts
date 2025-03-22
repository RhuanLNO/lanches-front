import careca from '../assets/careca.jpg'
import imperio from '../assets/imperio.jpg'
import vianna from '../assets/vianna.jpg'
import immense from '../assets/immense.png'
import reddragon from '../assets/reddragon.jpg'
import salute from '../assets/salute.jpg'
import clubedahorta from '../assets/clubedahorta.jpg'
import coffeebreak from '../assets/coffeebreak.jpg'
import zeca from '../assets/zeca.png'
import kiamore from '../assets/kiamore.png'
import bigacai from '../assets/bigacai.jpeg'
import deliciasdobolo from '../assets/deliciasdobolo.jpeg'
import acaizal from '../assets/acaizal.jpg'
import acucenaCover from '../assets/acucena/acucena.jpg'
import acucenaBanner from '../assets/acucena/acucenaBanner.png'
import quilomboCover from '../assets/quilombo/quilombo.jpg'

type ApiResponseRestaurant = {
  id: number,
  name: string,
  businessHours: string,
  instagram: string | null,
  phone: string | null,
  photo: string | null,
  categories: Array<Number>,
  isMocambos: boolean,
  isPremium: boolean,
	banner?: string
}

export const restaurantsArr: ApiResponseRestaurant[] = [
	{
		"id" : 1,
		"name" : "Delicious Burguer",
		"businessHours" : "Todos os dias 16:00 - 23:59",
		"instagram" : "delicious.burguer",
		"phone" : "82988907222",
		"photo" : "https:\/\/static.ifood-static.com.br\/image\/upload\/t_high\/logosgde\/67993dd9-a382-4926-80e9-a4b164ccf5e1\/201910241502_F2Gq_i.jpg",
		"categories": [1, 3, 4, 5],
		"isMocambos": false,
		"isPremium": false
	},
	{
		"id" : 3,
		"name" : "The Burger Place",
		"businessHours" : "TER-DOM 18:00 - 23:59",
		"instagram" : "theburgerplace_01",
		"phone" : "82991315191",
		"photo" : "https:\/\/encrypted-tbn0.gstatic.com\/images?q=tbn:ANd9GcRlv8zxrXVobJ-Yd1Fz9RvuwyuM0eL_SS2o3KRnWCMYuG6PH_5KysBi9YGJ3JedqLNz5PA&usqp=CAU",
		"categories": [1],
		"isMocambos": false,
		"isPremium": false
	},
	{
		"id" : 4,
		"name" : "Insano's Burger",
		"businessHours" : "TER-DOM 18:00 - 23:59",
		"instagram" : "insanosburger",
		"phone" : "82994238167",
		"photo" : "https:\/\/encrypted-tbn0.gstatic.com\/images?q=tbn:ANd9GcTo8EYDXud0zSUcjiFdzm2dnT8XS83V6SBm4JxcITQt-FpExQtn11hHFbUbU-eDR1uL8nw&usqp=CAU",
		"categories": [1],
		"isMocambos": false,
		"isPremium": false
	},
	{
		"id" : 5,
		"name" : "Careca Burguer",
		"businessHours" : "Todos os dias 18:00 - 23:59",
		"instagram" : "careca_burguer_hamburgueria",
		"phone" : "82994132261",
		"photo" : careca,
		"categories": [1],
		"isMocambos": false,
		"isPremium": false
	},
	{
		"id" : 6,
		"name" : "Immense Burguer",
		"businessHours" : "QUA - SEG 19:00 - 23:30",
		"instagram" : "immense_burguer",
		"phone" : "82996014988",
		"photo" : immense,
		"categories": [1],
		"isMocambos": false,
		"isPremium": false
	},
	{
		"id" : 7,
		"name" : "Império do Açaí",
		"businessHours" : "TER - DOM 15:00 - 23:00",
		"instagram" : "imperio_do_acai_burguer",
		"phone" : "82991397418",
		"photo" : imperio,
		"categories": [1, 4, 5],
		"isMocambos": false,
		"isPremium": false
	},
	{
		"id" : 8,
		"name" : "Vianna Comedoria",
		"businessHours" : "Todos os dias 17:00 - 23:59",
		"instagram" : "viannacomedoria",
		"phone" : "82991905200",
		"photo" : vianna,
		"categories": [1, 6],
		"isMocambos": false,
		"isPremium": false
	},
	{
		"id" : 9,
		"name" : "Garagem Big Hot Dog",
		"businessHours" : "SAB - QUI 17:00 - 23:59",
		"instagram" : "bighotdog82",
		"phone" : "82991119242",
		"photo" : "",
		"categories": [1, 3],
		"isMocambos": false,
		"isPremium": false
	},
	{
		"id" : 10,
		"name" : "Red Dragon Sushi Bar",
		"businessHours" : "QUA - DOM 18:00 - 23:30",
		"instagram" : "reddragonsushibar",
		"phone" : "82994227421",
		"photo" : reddragon,
		"categories": [2],
		"isMocambos": false,
		"isPremium": false
	},
	{
		"id" : 11,
		"name" : "Suchimbras",
		"businessHours" : "Todos os dias 18:00 - 23:59",
		"instagram" : "suchimbras",
		"phone" : "82993712121",
		"photo" : "https:\/\/assets.hubt.com.br\/img\/share\/45034\/V93fACPxHgX7V1lwJPU",
		"categories": [2],
		"isMocambos": false,
		"isPremium": false
	},
	{
		"id" : 12,
		"name" : "Suchikey União",
		"businessHours" : "TER - DOM 18:00 - 23:30",
		"instagram" : "suchikeyuniao",
		"phone" : "82993276540",
		"photo" : "",
		"categories": [2],
		"isMocambos": false,
		"isPremium": false
	},
	{
		"id" : 13,
		"name" : "Lanchonete do Zeca",
		"businessHours" : "Todos os dias 17:00 - 23:00",
		"instagram" : "lanchonetedozecaudp",
		"phone" : "82991741196",
		"photo" : zeca,
		"categories": [3],
		"isMocambos": false,
		"isPremium": false
	},
	{
		"id" : 14,
		"name" : "Kiamore",
		"businessHours" : "Todos os dias 07:00 - 23:59",
		"instagram" : "ki.amore",
		"phone" : "82993652573",
		"photo" : kiamore,
		"categories": [3, 6],
		"isMocambos": false,
		"isPremium": false
	},
	{
		"id" : 15,
		"name" : "Sorveteria Doce Delícia",
		"businessHours" : "Todos os dias 16:00 - 22:00",
		"instagram" : "sorvetesdocedelicia",
		"phone" : "82981893353",
		"photo" : "",
		"categories": [4],
		"isMocambos": false,
		"isPremium": false
	},
	{
		"id" : 16,
		"name" : "Big Açaí",
		"businessHours" : "Todos os dias 15:00 - 22:00",
		"instagram" : "bigacaiuniao",
		"phone" : "82993993310",
		"photo" : bigacai,
		"categories": [4],
		"isMocambos": false,
		"isPremium": false
	},
	{
		"id" : 17,
		"name" : "Doceria da Anna",
		"businessHours" : "TER - SAB 09:00 - 18:00",
		"instagram" : "dooceriadaanna",
		"phone" : "82993355493",
		"photo" : "",
		"categories": [4],
		"isMocambos": false,
		"isPremium": false
	},
	{
		"id" : 18,
		"name" : "Meus Doces",
		"businessHours" : "SEG - SEX 11:30 - 18:30",
		"instagram" : "meusdocees",
		"phone" : "82996429407",
		"photo" : "https:\/\/static.ifood-static.com.br\/image\/upload\/t_medium\/logosgde\/6d2d8cb8-71f7-4884-a7a4-1e019664f1e0\/202309031900_MomU_i.jpg",
		"categories": [4],
		"isMocambos": false,
		"isPremium": false
	},
	{
		"id" : 19,
		"name" : "Delícias do Bolo",
		"businessHours" : "SEG - SÁB 06:30 - 19:00",
		"instagram" : "danicake_deliciasdobolo",
		"phone" : "82993535764",
		"photo" : deliciasdobolo,
		"categories": [4],
		"isMocambos": false,
		"isPremium": false
	},
	{
		"id" : 2,
		"name" : "Phoenix Gastrobar",
		"businessHours" : "Todos os dias 18:00 - 23:59",
		"instagram" : "phoenixgastrobar",
		"phone" : "82991834867",
		"photo" : "https://static.ifood-static.com.br/image/upload/t_high/logosgde/8f8b7884-9be8-4930-8981-51920f618ad2/202402182223_TxnL_.jpeg",
		"categories": [1, 6],
		"isMocambos": false,
		"isPremium": false
	},
	{
		"id" : 20,
		"name" : "Açaízal",
		"businessHours" : "DOM - SEX 07:00 - 18:00",
		"instagram" : "acaizal_fastfoodfit",
		"phone" : "82991054048",
		"photo" : acaizal,
		"categories": [3, 4, 5],
		"isMocambos": false,
		"isPremium": false
	},
	{
		"id" : 21,
		"name" : "Salute Drinks",
		"businessHours" : "Sob marcação",
		"instagram" : "salute.drinks01",
		"phone" : "82981431695",
		"photo" : salute,
		"categories": [7],
		"isMocambos": false,
		"isPremium": false
	},
	{
		"id" : 22,
		"name" : "Licor Flor de Açucena",
		"businessHours" : "Sob encomenda",
		"instagram" : "licoracucena",
		"phone" : "82991260070",
		"photo" : acucenaCover,
		"banner": acucenaBanner,
		"categories": [7],
		"isMocambos": false,
		"isPremium": true
	},
	{
		"id" : 23,
		"name" : "Quilombo Hotel Fazenda",
		"businessHours" : "Todos os dias 08:00 - 22:00",
		"instagram" : "quilombohotelfazenda",
		"phone" : "82999893100",
		"photo" : quilomboCover,
		"categories": [],
		"isMocambos": false,
		"isPremium": true
	},
/* 	{
		"id" : 23,
		"name" : "Clube da Horta",
		"businessHours" : "Sob encomenda", //falta
		"instagram" : "clube_da_horta_",
		"phone" : "82991260070",
		"photo" : clubedahorta,
		"categories": [7],
		"isMocambos": true,
		"isPremium": false
	},
	{
		"id" : 24,
		"name" : "Coffee Break Agroecológico",
		"businessHours" : "Sob encomenda", //falta
		"instagram" : "coffebreak_agroecologico",
		"phone" : "82991260070",
		"photo" : coffeebreak,
		"categories": [7],
		"isMocambos": true,
		"isPremium": false
	}, */
]