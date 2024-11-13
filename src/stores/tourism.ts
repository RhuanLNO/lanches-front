import anhumas from '../assets/anhumas.jpg'
import globo from '../assets/globo.png'
import seduardo from '../assets/seduardo.jpg'
import stantonio from '../assets/stantonio.jpg'
import licor from '../assets/licor.jpeg'

type ApiResponse = {
  id: number,
  name: string,
  businessHours: string,
  instagram: string | null,
  phone: string | null,
  photo: string | null,
  categories: Array<Number>,
	isMocambos: boolean,
	isPremium: boolean
}

export const tourismArr: ApiResponse[] = [
	{
		"id" : 1,
		"name" : "Casa Museu Fazenda Anhumas",
		"businessHours" : "TER - DOM 09:00 às 16:00 (agendamento prévio)",
		"instagram" : "fazendaanhumas",
		"phone" : "82996575789",
		"photo" : anhumas,
		"categories": [1, 2, 3],
		"isMocambos": false,
		"isPremium": false
	},
	{
		"id" : 2,
		"name" : "Quilombo Park Hotel",
		"businessHours" : "Todos os dias 24 horas",
		"instagram" : "quilombohotelfazenda",
		"phone" : "82999893100",
		"photo" : "https://images.trvl-media.com/lodging/21000000/20050000/20047500/20047453/cb2527c3.jpg",
		"categories": [1, 3],
		"isMocambos": false,
		"isPremium": false
	},
	{
		"id" : 3,
		"name" : "Hotel Santa Maria Madalena",
		"businessHours" : "Todos os dias 24 horas",
		"instagram" : "hotelsantamariamadalena",
		"phone" : "8293460209",
		"photo" : "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/24/91/8f/o-hotel-fica-um-pouco.jpg",
		"categories": [1],
		"isMocambos": false,
		"isPremium": false
	},
	{
		"id" : 4,
		"name" : "Varandas Hotel",
		"businessHours" : "Todos os dias 24 horas",
		"instagram" : "",
		"phone" : "82991857270",
		"photo" : "https://varandas-hotel.hoteis-noreste-de-brasil.com/data/Images/OriginalPhoto/6666/666699/666699600/image-uniao-dos-palmares-varandas-hotel-1.JPEG",
		"categories": [1],
		"isMocambos": false,
		"isPremium": false
	},
	{
		"id" : 5,
		"name" : "Hotel Globo",
		"businessHours" : "Todos os dias 24 horas",
		"instagram" : "grupoelianedoglobo",
		"phone" : "82987611810",
		"photo" : globo,
		"categories": [1],
		"isMocambos": false,
		"isPremium": false
	},
	{
		"id" : 6,
		"name" : "Pousada Santo Eduardo",
		"businessHours" : "Todos os dias 24 horas",
		"instagram" : "postosantoeduardo",
		"phone" : "8232811449",
		"photo" : seduardo,
		"categories": [1],
		"isMocambos": false,
		"isPremium": false
	},
	{
		"id" : 7,
		"name" : "Pousada Palmares",
		"businessHours" : "Todos os dias 24 horas",
		"instagram" : "",
		"phone" : "8232811375",
		"photo" : "https://lh3.googleusercontent.com/p/AF1QipMxEQXghdPs_XBr1vcCtY0VPtoN6uXyA6bTK6_E=s680-w680-h510",
		"categories": [1],
		"isMocambos": false,
		"isPremium": false
	},
	{
		"id" : 8,
		"name" : "Pousada do Pita",
		"businessHours" : "Sem informações",
		"instagram" : "",
		"phone" : "8232814260",
		"photo" : "",
		"categories": [1],
		"isMocambos": false,
		"isPremium": false
	},
	{
		"id" : 9,
		"name" : "Pousada Santo Antonio",
		"businessHours" : "Sem informações",
		"instagram" : "pousadasantoantonioudp",
		"phone" : "82994045476",
		"photo" : stantonio,
		"categories": [1],
		"isMocambos": false,
		"isPremium": false
	},
	{
		"id" : 10,
		"name" : "Hotel Terraço Suites",
		"businessHours" : "Todos os dias 24 horas",
		"instagram" : "terracosuites",
		"phone" : "82991142021",
		"photo" : "https://hotel-terraco-suites-uniao-dos-palmares.ibooked.com.br/data/Photos/OriginalPhoto/14669/1466910/1466910542/Hotel-Terraco-Suites-Uniao-dos-Palmares-Exterior.JPEG",
		"categories": [1],
		"isMocambos": false,
		"isPremium": false
	},
	{
		"id" : 11,
		"name" : "Recanto Mirante das Águas",
		"businessHours" : "Todos os dias 09:00 às 18:00",
		"instagram" : "aguasmirante",
		"phone" : "82999313397",
		"photo" : "https://recantomirantedasaguas.com.br/assets/images/pgina-logo.png",
		"categories": [1, 3],
		"isMocambos": false,
		"isPremium": false
	},
	{
		"id" : 22,
		"name" : "Licor Flor de Açucena",
		"businessHours" : "Sob encomenda",
		"instagram" : "licorflordeacucena",
		"phone" : "82991260070",
		"photo" : licor,
		"categories": [4],
		"isMocambos": true,
		"isPremium": false
	},
]