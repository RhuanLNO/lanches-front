import anhumas from '../assets/anhumas.jpg'

type ApiResponse = {
  id: number,
  name: string,
  businessHours: string,
  instagram: string | null,
  phone: string | null,
  photo: string | null,
  categories: Array<Number>
}

export const tourismArr: ApiResponse[] = [
	{
		"id" : 1,
		"name" : "Casa Museu Fazenda Anhumas",
		"businessHours" : "Todos os dias 09:00 às 16:00 (agendamento prévio)",
		"instagram" : "fazendaanhumas",
		"phone" : "82996575789",
		"photo" : anhumas,
		"categories": [1, 2, 3]
	},
	{
		"id" : 2,
		"name" : "Quilombo Park Hotel",
		"businessHours" : "Todos os dias 24 horas",
		"instagram" : "quilombohotelfazenda",
		"phone" : "82999893100",
		"photo" : "https://images.trvl-media.com/lodging/21000000/20050000/20047500/20047453/cb2527c3.jpg",
		"categories": [1, 3]
	},
	{
		"id" : 3,
		"name" : "Hotel Santa Maria Madalena",
		"businessHours" : "Todos os dias 24 horas",
		"instagram" : "hotelsantamariamadalena",
		"phone" : "8293460209",
		"photo" : "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/24/91/8f/o-hotel-fica-um-pouco.jpg",
		"categories": [1]
	},
	{
		"id" : 4,
		"name" : "Varandas Hotel",
		"businessHours" : "Todos os dias 24 horas",
		"instagram" : "",
		"phone" : "82991857270",
		"photo" : "https://varandas-hotel.hoteis-noreste-de-brasil.com/data/Images/OriginalPhoto/6666/666699/666699600/image-uniao-dos-palmares-varandas-hotel-1.JPEG",
		"categories": [1]
	},
]