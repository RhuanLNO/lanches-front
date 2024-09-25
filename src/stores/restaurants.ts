type ApiResponseRestaurant = {
  id: number,
  name: string,
  businessHours: string,
  instagram: string | null,
  phone: string | null,
  photo: string | null,
  categories: Array<Number>
}

export const restaurantsArr: ApiResponseRestaurant[] = [
	{
		"id" : 1,
		"name" : "Delicious Burguer",
		"businessHours" : "Todos os dias 16:00 - 23:59",
		"instagram" : "delicious.burguer",
		"phone" : "82988907222",
		"photo" : "https:\/\/static.ifood-static.com.br\/image\/upload\/t_high\/logosgde\/67993dd9-a382-4926-80e9-a4b164ccf5e1\/201910241502_F2Gq_i.jpg",
		"categories": [1, 3, 4, 5]
	},
	{
		"id" : 3,
		"name" : "The Burger Place",
		"businessHours" : "TER-DOM 18:00 - 23:59",
		"instagram" : "theburgerplace_01",
		"phone" : "82991315191",
		"photo" : "https:\/\/encrypted-tbn0.gstatic.com\/images?q=tbn:ANd9GcRlv8zxrXVobJ-Yd1Fz9RvuwyuM0eL_SS2o3KRnWCMYuG6PH_5KysBi9YGJ3JedqLNz5PA&usqp=CAU",
		"categories": [1]
	},
	{
		"id" : 4,
		"name" : "Insano's Burger",
		"businessHours" : "TER-DOM 18:00 - 23:59",
		"instagram" : "insanosburger",
		"phone" : "82994238167",
		"photo" : "https:\/\/encrypted-tbn0.gstatic.com\/images?q=tbn:ANd9GcTo8EYDXud0zSUcjiFdzm2dnT8XS83V6SBm4JxcITQt-FpExQtn11hHFbUbU-eDR1uL8nw&usqp=CAU",
		"categories": [1]
	},
	{
		"id" : 5,
		"name" : "Careca Burguer",
		"businessHours" : "Todos os dias 18:00 - 23:59",
		"instagram" : "careca_burguer_hamburgueria",
		"phone" : "82994132261",
		"photo" : "",
		"categories": [1]
	},
	{
		"id" : 6,
		"name" : "Immense Burguer",
		"businessHours" : "QUA - SEG 19:00 - 23:30",
		"instagram" : "immense_burguer",
		"phone" : "82996014988",
		"photo" : "",
		"categories": [1]
	},
	{
		"id" : 7,
		"name" : "Império do Açaí",
		"businessHours" : "TER - DOM 15:00 - 23:00",
		"instagram" : "imperio_do_acai_burguer",
		"phone" : "82991397418",
		"photo" : "https:\/\/shorturl.at\/avBD4",
		"categories": [1, 4, 5]
	},
	{
		"id" : 8,
		"name" : "Vianna Comedoria",
		"businessHours" : "Todos os dias 17:00 - 23:59",
		"instagram" : "viannacomedoria",
		"phone" : "82991905200",
		"photo" : "https:\/\/shorturl.at\/JPVY9",
		"categories": [1, 6]
	},
	{
		"id" : 9,
		"name" : "Garagem Big Hot Dog",
		"businessHours" : "SAB - QUI 17:00 - 23:59",
		"instagram" : "bighotdog82",
		"phone" : "82991119242",
		"photo" : "",
		"categories": [1, 3]
	},
	{
		"id" : 10,
		"name" : "Red Dragon Sushi Bar",
		"businessHours" : "QUA - DOM 18:00 - 23:30",
		"instagram" : "reddragonsushibar",
		"phone" : "82994227421",
		"photo" : "https:\/\/shorturl.at\/jsxIZ",
		"categories": [2]
	},
	{
		"id" : 11,
		"name" : "Suchimbras",
		"businessHours" : "Todos os dias 18:00 - 23:59",
		"instagram" : "suchimbras",
		"phone" : "82993712121",
		"photo" : "https:\/\/assets.hubt.com.br\/img\/share\/45034\/V93fACPxHgX7V1lwJPU",
		"categories": [2]
	},
	{
		"id" : 12,
		"name" : "Suchikey União",
		"businessHours" : "TER - DOM 18:00 - 23:30",
		"instagram" : "suchikeyuniao",
		"phone" : "82993276540",
		"photo" : "",
		"categories": [2]
	},
	{
		"id" : 13,
		"name" : "Lanchonete do Zeca",
		"businessHours" : "Todos os dias 17:00 - 23:00",
		"instagram" : "lanchonetedozecaudp",
		"phone" : "82991741196",
		"photo" : "https:\/\/10619-2.s.cdn12.com\/rests\/original\/107_511523009.jpg",
		"categories": [3]
	},
	{
		"id" : 14,
		"name" : "Kiamore",
		"businessHours" : "Todos os dias 07:00 - 23:59",
		"instagram" : "ki.amore",
		"phone" : "82993652573",
		"photo" : "https:\/\/shorturl.at\/dixV5",
		"categories": [3, 6]
	},
	{
		"id" : 15,
		"name" : "Sorveteria Doce Delícia",
		"businessHours" : "Todos os dias 16:00 - 22:00",
		"instagram" : "sorvetesdocedelicia",
		"phone" : "82981893353",
		"photo" : "",
		"categories": [4]
	},
	{
		"id" : 16,
		"name" : "Big Açaí",
		"businessHours" : "Todos os dias 15:00 - 22:00",
		"instagram" : "bigacaiuniao",
		"phone" : "82993993310",
		"photo" : "https:\/\/shorturl.at\/wAS24",
		"categories": [4]
	},
	{
		"id" : 17,
		"name" : "Doceria da Anna",
		"businessHours" : "TER - SAB 09:00 - 18:00",
		"instagram" : "dooceriadaanna",
		"phone" : "82993355493",
		"photo" : "",
		"categories": [4]
	},
	{
		"id" : 18,
		"name" : "Meus Doces",
		"businessHours" : "SEG - SEX 11:30 - 18:30",
		"instagram" : "meusdocees",
		"phone" : "82996429407",
		"photo" : "https:\/\/static.ifood-static.com.br\/image\/upload\/t_medium\/logosgde\/6d2d8cb8-71f7-4884-a7a4-1e019664f1e0\/202309031900_MomU_i.jpg",
		"categories": [4]
	},
	{
		"id" : 19,
		"name" : "Delícias do Bolo",
		"businessHours" : "SEG - SÁB 06:30 - 19:00",
		"instagram" : "danicake_deliciasdobolo",
		"phone" : "82993535764",
		"photo" : "https:\/\/shorturl.at\/CFNPV",
		"categories": [4]
	},
	{
		"id" : 2,
		"name" : "Phoenix Gastrobar",
		"businessHours" : "Todos os dias 18:00 - 23:59",
		"instagram" : "phoenixgastrobar",
		"phone" : "82991834867",
		"photo" : "https:\/\/10619-2.s.cdn12.com\/rests\/original\/102_535945160.jpg",
		"categories": [1, 6]
	},
	{
		"id" : 20,
		"name" : "Açaízal",
		"businessHours" : "DOM - SEX 07:00 - 18:00",
		"instagram" : "acaizal_fastfoodfit",
		"phone" : "82991054048",
		"photo" : "https:\/\/shorturl.at\/szGRX",
		"categories": [3, 4, 5]
	}
]