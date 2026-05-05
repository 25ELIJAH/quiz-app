// ---- PLAYLIST ----
const playlist = [
  { url: 'https://cdn.pixabay.com/audio/2023/03/13/audio_5b6045a399.mp3', title: 'African Sunrise' },
  { url: 'https://cdn.pixabay.com/audio/2022/10/14/audio_0b77b92cdb.mp3', title: 'African Drums' },
  { url: 'https://cdn.pixabay.com/audio/2023/01/17/audio_3c2a1a0ace.mp3', title: 'Savanna Vibes' },
];

// ---- QUESTIONS ----
const allQuestions = {
  easy: [
    { question: "What is the largest country in Africa by area?", options: ["Nigeria", "Algeria", "Sudan", "DR Congo"], answer: "Algeria", fact: "Algeria covers about 2.38 million square kilometers, making it the largest country in Africa and the Arab world!" },
    { question: "Which African country has the largest population?", options: ["Ethiopia", "Egypt", "DR Congo", "Nigeria"], answer: "Nigeria", fact: "Nigeria has over 220 million people, making it the most populous country in Africa and 7th in the world!" },
    { question: "What is the capital of Kenya?", options: ["Mombasa", "Nairobi", "Kisumu", "Eldoret"], answer: "Nairobi", fact: "Nairobi is also known as the Green City in the Sun and is home to the only national park within a capital city!" },
    { question: "Which river is the longest in Africa?", options: ["Congo River", "Niger River", "Zambezi River", "Nile River"], answer: "Nile River", fact: "The Nile River stretches about 6,650 km making it the longest river in the world!" },
    { question: "Which African country is known as the Rainbow Nation?", options: ["Kenya", "South Africa", "Ghana", "Nigeria"], answer: "South Africa", fact: "South Africa earned the name Rainbow Nation from Archbishop Desmond Tutu after the end of apartheid in 1994!" },
    { question: "What is the capital of Ghana?", options: ["Kumasi", "Accra", "Tamale", "Takoradi"], answer: "Accra", fact: "Accra has been the capital of Ghana since the country gained independence in 1957!" },
    { question: "Which African country was never colonized?", options: ["Ethiopia", "Liberia", "Both Ethiopia and Liberia", "Egypt"], answer: "Both Ethiopia and Liberia", fact: "Ethiopia successfully resisted Italian colonization at the Battle of Adwa in 1896, and Liberia was founded by freed American slaves!" },
    { question: "What is the highest mountain in Africa?", options: ["Mount Kenya", "Mount Kilimanjaro", "Mount Elgon", "Rwenzori"], answer: "Mount Kilimanjaro", fact: "Mount Kilimanjaro in Tanzania stands at 5,895 meters and is the tallest free-standing mountain in the world!" },
    { question: "Which country hosted the first FIFA World Cup in Africa?", options: ["Nigeria", "Egypt", "South Africa", "Morocco"], answer: "South Africa", fact: "South Africa hosted the 2010 FIFA World Cup, the first ever held on African soil!" },
    { question: "What is the capital of Morocco?", options: ["Casablanca", "Marrakech", "Rabat", "Fez"], answer: "Rabat", fact: "Rabat has been Morocco's capital since 1912. Many people mistake Casablanca for the capital because it is the largest city!" },
    { question: "Which lake is the largest in Africa?", options: ["Lake Tanganyika", "Lake Malawi", "Lake Chad", "Lake Victoria"], answer: "Lake Victoria", fact: "Lake Victoria is the largest lake in Africa and the second largest freshwater lake in the world!" },
    { question: "What is the capital of Nigeria?", options: ["Lagos", "Kano", "Abuja", "Ibadan"], answer: "Abuja", fact: "Abuja replaced Lagos as Nigeria's capital in 1991. It was purpose built to be a more central and neutral capital city!" },
    { question: "Which African country has the most pyramids?", options: ["Egypt", "Sudan", "Libya", "Ethiopia"], answer: "Sudan", fact: "Sudan has more ancient pyramids than Egypt! It has over 200 pyramids built by the Nubian kingdoms!" },
    { question: "What is the smallest country in Africa?", options: ["Djibouti", "Swaziland", "Gambia", "Seychelles"], answer: "Seychelles", fact: "Seychelles is an island nation in the Indian Ocean and is the smallest African country by both area and population!" },
    { question: "Which African country is known for the Maasai people?", options: ["Tanzania and Kenya", "Uganda", "Ethiopia", "Rwanda"], answer: "Tanzania and Kenya", fact: "The Maasai are a semi-nomadic people living across Tanzania and Kenya, famous for their distinctive culture and warrior traditions!" },
    { question: "What is the capital of Egypt?", options: ["Alexandria", "Luxor", "Cairo", "Giza"], answer: "Cairo", fact: "Cairo is the largest city in Africa and the Arab world with over 20 million people in its metropolitan area!" },
    { question: "Which African country is the world's largest producer of cocoa?", options: ["Ghana", "Nigeria", "Ivory Coast", "Cameroon"], answer: "Ivory Coast", fact: "Ivory Coast produces about 40% of the world's cocoa supply, making it the single largest producer in the world!" },
    { question: "What is the capital of South Africa's government?", options: ["Cape Town", "Johannesburg", "Pretoria", "Durban"], answer: "Pretoria", fact: "South Africa has three capitals — Pretoria is the executive capital, Cape Town the legislative capital and Bloemfontein the judicial capital!" },
    { question: "Which African country is home to the Sahara Desert?", options: ["Only Egypt", "Only Libya", "Multiple North African countries", "Only Algeria"], answer: "Multiple North African countries", fact: "The Sahara Desert spans 11 countries including Algeria, Chad, Egypt, Libya, Mali, Mauritania, Morocco, Niger, Sudan, Tunisia and Western Sahara!" },
    { question: "What language is most widely spoken in Africa?", options: ["Swahili", "Arabic", "French", "Hausa"], answer: "Arabic", fact: "Arabic is the most widely spoken language in Africa with over 170 million speakers, mainly in North Africa and parts of East Africa!" },
    { question: "Which African country is known as the Pearl of Africa?", options: ["Rwanda", "Tanzania", "Uganda", "Kenya"], answer: "Uganda", fact: "Uganda was called the Pearl of Africa by Winston Churchill in 1908. It is home to mountain gorillas, chimpanzees and the source of the Nile!" },
    { question: "What is the capital of Ethiopia?", options: ["Dire Dawa", "Addis Ababa", "Hawassa", "Mekelle"], answer: "Addis Ababa", fact: "Addis Ababa means New Flower in Amharic and is also the headquarters of the African Union!" },
    { question: "Which African country is famous for its diamond mines?", options: ["Zimbabwe", "Botswana", "Namibia", "Angola"], answer: "Botswana", fact: "Botswana is one of the world's largest producers of diamonds and has used diamond revenue to become one of Africa's most prosperous nations!" },
    { question: "What is the capital of Tanzania?", options: ["Dar es Salaam", "Dodoma", "Arusha", "Zanzibar"], answer: "Dodoma", fact: "Although Dar es Salaam is the largest city, Dodoma has been Tanzania's official capital since 1974!" },
    { question: "Which African country is home to Victoria Falls?", options: ["Zambia and Zimbabwe", "Mozambique", "Botswana", "Malawi"], answer: "Zambia and Zimbabwe", fact: "Victoria Falls sits on the border of Zambia and Zimbabwe. It is one of the largest waterfalls in the world and a UNESCO World Heritage Site!" },
    { question: "What is the official language of Mozambique?", options: ["English", "French", "Portuguese", "Swahili"], answer: "Portuguese", fact: "Mozambique was a Portuguese colony until 1975, making it one of only five African countries where Portuguese is the official language!" },
    { question: "Which African country has the most visited tourist attraction in Africa?", options: ["Kenya", "Egypt", "South Africa", "Morocco"], answer: "Egypt", fact: "The Pyramids of Giza in Egypt are the most visited tourist attraction in Africa, drawing millions of visitors every year!" },
    { question: "What is the capital of Senegal?", options: ["Dakar", "Abidjan", "Conakry", "Bamako"], answer: "Dakar", fact: "Dakar is the westernmost city on the African mainland and was the starting point of the famous Paris-Dakar Rally!" },
    { question: "Which African country is the largest producer of coffee?", options: ["Kenya", "Tanzania", "Ethiopia", "Uganda"], answer: "Ethiopia", fact: "Ethiopia is the largest coffee producer in Africa and the birthplace of coffee. The coffee plant was first discovered in the Kaffa region of Ethiopia!" },
    { question: "What is the capital of Angola?", options: ["Benguela", "Huambo", "Luanda", "Lobito"], answer: "Luanda", fact: "Luanda is Angola's capital and largest city. It was once ranked as the world's most expensive city for expatriates!" },
    { question: "Which African country has the longest coastline?", options: ["South Africa", "Somalia", "Madagascar", "Mozambique"], answer: "Somalia", fact: "Somalia has the longest coastline of any African mainland country at about 3,333 km along the Indian Ocean and Gulf of Aden!" },
    { question: "What is the currency of South Africa?", options: ["Shilling", "Rand", "Naira", "Cedi"], answer: "Rand", fact: "The South African Rand is named after the Witwatersrand, the ridge upon which Johannesburg is built and where most of South Africa's gold was found!" },
    { question: "Which African country is home to the Serengeti National Park?", options: ["Kenya", "Tanzania", "Uganda", "Rwanda"], answer: "Tanzania", fact: "The Serengeti in Tanzania is famous for the Great Migration where over 1.5 million wildebeest and hundreds of thousands of zebras move across the plains!" },
    { question: "What is the capital of Cameroon?", options: ["Douala", "Yaounde", "Bamenda", "Garoua"], answer: "Yaounde", fact: "Yaounde is Cameroon's political capital while Douala is its economic capital and largest city!" },
    { question: "Which African island nation is the fourth largest island in the world?", options: ["Zanzibar", "Mauritius", "Madagascar", "Comoros"], answer: "Madagascar", fact: "Madagascar is the fourth largest island in the world and is home to over 90% of wildlife found nowhere else on Earth!" },
    { question: "What is the capital of Rwanda?", options: ["Butare", "Gisenyi", "Kigali", "Ruhengeri"], answer: "Kigali", fact: "Kigali is often cited as one of the cleanest and safest cities in Africa. Rwanda has made remarkable progress since the 1994 genocide!" },
    { question: "Which African country is known as the Land of a Thousand Hills?", options: ["Burundi", "Rwanda", "Uganda", "Lesotho"], answer: "Rwanda", fact: "Rwanda is called the Land of a Thousand Hills because of its mountainous landscape. It is one of the most densely populated countries in Africa!" },
    { question: "What is the official currency of Nigeria?", options: ["Cedi", "Shilling", "Naira", "Franc"], answer: "Naira", fact: "The Nigerian Naira was introduced in 1973 replacing the pound. Nigeria is Africa's largest economy making the Naira one of Africa's most important currencies!" },
    { question: "Which African country is home to the Okavango Delta?", options: ["Zambia", "Zimbabwe", "Namibia", "Botswana"], answer: "Botswana", fact: "The Okavango Delta in Botswana is the world's largest inland delta and a UNESCO World Heritage Site, home to incredible wildlife!" },
    { question: "What is the capital of Zambia?", options: ["Ndola", "Kitwe", "Lusaka", "Livingstone"], answer: "Lusaka", fact: "Lusaka is one of the fastest growing cities in southern Africa and serves as Zambia's political and economic hub!" },
    { question: "Which African country is known for having the most gorillas?", options: ["Uganda", "Rwanda", "DR Congo", "Cameroon"], answer: "DR Congo", fact: "The Democratic Republic of Congo is home to about 60% of the world's remaining mountain gorillas in the Virunga Mountains!" },
    { question: "What is the capital of Ivory Coast?", options: ["Abidjan", "Bouaké", "Yamoussoukro", "San-Pédro"], answer: "Yamoussoukro", fact: "Yamoussoukro is Ivory Coast's official capital but Abidjan remains the economic capital and largest city where most government functions take place!" },
    { question: "Which African country has Table Mountain?", options: ["Namibia", "South Africa", "Lesotho", "Zimbabwe"], answer: "South Africa", fact: "Table Mountain in Cape Town South Africa is one of the New Seven Wonders of Nature and is over 600 million years old!" },
    { question: "What is the capital of Zimbabwe?", options: ["Bulawayo", "Mutare", "Harare", "Gweru"], answer: "Harare", fact: "Harare was formerly known as Salisbury during the colonial era. It became Zimbabwe's capital when the country gained independence in 1980!" },
    { question: "Which African country is home to the Sahel region?", options: ["Only Sudan", "Only Mali", "Multiple countries across the continent", "Only Niger"], answer: "Multiple countries across the continent", fact: "The Sahel is a semi-arid region stretching across Africa from Senegal in the west to Eritrea in the east, spanning about 5,400 km!" },
    { question: "What is the capital of Namibia?", options: ["Swakopmund", "Walvis Bay", "Windhoek", "Rundu"], answer: "Windhoek", fact: "Windhoek is one of Africa's smallest capital cities but is known for its cleanliness, safety and German colonial architecture!" },
    { question: "Which African country is the continent's southernmost nation?", options: ["Namibia", "Zimbabwe", "South Africa", "Lesotho"], answer: "South Africa", fact: "South Africa is the southernmost country in Africa. Cape Agulhas, not Cape of Good Hope, is the actual southernmost tip of the African continent!" },
    { question: "What is the capital of Malawi?", options: ["Blantyre", "Zomba", "Lilongwe", "Mzuzu"], answer: "Lilongwe", fact: "Lilongwe became Malawi's capital in 1975 replacing Zomba. Malawi is sometimes called the Warm Heart of Africa for its friendly people!" },
    { question: "Which African country is home to the Kruger National Park?", options: ["Zimbabwe", "Namibia", "Botswana", "South Africa"], answer: "South Africa", fact: "Kruger National Park in South Africa is one of Africa's largest game reserves covering about 19,485 square kilometers!" },
    { question: "What is the capital of Uganda?", options: ["Entebbe", "Gulu", "Kampala", "Jinja"], answer: "Kampala", fact: "Kampala is built on seven hills just like Rome! It is one of the fastest growing cities in Africa with a population of over 3 million people!" },
  ],
  medium: [
    { question: "Who was the first president of Ghana?", options: ["Jerry Rawlings", "John Mahama", "Kwame Nkrumah", "John Kufuor"], answer: "Kwame Nkrumah", fact: "Kwame Nkrumah led Ghana to independence in 1957, making it the first sub-Saharan African country to gain independence from colonial rule!" },
    { question: "What was the original name of Zimbabwe before independence?", options: ["Rhodesia", "Nyasaland", "Bechuanaland", "Northern Rhodesia"], answer: "Rhodesia", fact: "Zimbabwe was called Rhodesia after British colonialist Cecil Rhodes. It gained independence and changed its name in 1980!" },
    { question: "Which African leader spent 27 years in prison before becoming president?", options: ["Robert Mugabe", "Jomo Kenyatta", "Nelson Mandela", "Julius Nyerere"], answer: "Nelson Mandela", fact: "Nelson Mandela was imprisoned from 1964 to 1990 at Robben Island for fighting against apartheid. He became South Africa's first black president in 1994!" },
    { question: "What was the name of the pan-African organization founded in 1963?", options: ["African National Congress", "Organisation of African Unity", "African Development Bank", "ECOWAS"], answer: "Organisation of African Unity", fact: "The OAU was founded in Addis Ababa in 1963 and was transformed into the African Union in 2002!" },
    { question: "Which battle in 1896 saw Ethiopia defeat Italy?", options: ["Battle of Khartoum", "Battle of Isandlwana", "Battle of Adwa", "Battle of Omdurman"], answer: "Battle of Adwa", fact: "The Battle of Adwa on March 1 1896 was a decisive Ethiopian victory that preserved Ethiopian sovereignty and inspired African independence movements!" },
    { question: "Which African country has the most official languages?", options: ["South Africa", "Cameroon", "Nigeria", "Zimbabwe"], answer: "South Africa", fact: "South Africa has 11 official languages including Zulu, Xhosa, Afrikaans, English and 7 others — the most of any country in Africa!" },
    { question: "What is the name of the ancient African trading empire that controlled gold and salt trade?", options: ["Songhai Empire", "Mali Empire", "Ghana Empire", "Ashanti Empire"], answer: "Mali Empire", fact: "The Mali Empire at its peak in the 14th century was one of the largest and wealthiest empires in the world, led by the legendary Mansa Musa!" },
    { question: "Which country was formerly known as Abyssinia?", options: ["Eritrea", "Somalia", "Ethiopia", "Djibouti"], answer: "Ethiopia", fact: "Ethiopia was known as Abyssinia for centuries. It is one of the oldest countries in the world with a history dating back over 3000 years!" },
    { question: "Who is known as the Father of the Nation in South Africa?", options: ["Chris Hani", "Walter Sisulu", "Oliver Tambo", "Nelson Mandela"], answer: "Nelson Mandela", fact: "Nelson Mandela is widely regarded as the Father of the Nation in South Africa for his lifelong fight against apartheid and racial injustice!" },
    { question: "Which African country has the most UNESCO World Heritage Sites?", options: ["Egypt", "Ethiopia", "South Africa", "Morocco"], answer: "Ethiopia", fact: "Ethiopia has 9 UNESCO World Heritage Sites including the Rock-Hewn Churches of Lalibela and the Simien Mountains National Park!" },
    { question: "What was the Scramble for Africa?", options: ["A gold rush in West Africa", "European colonization of Africa in the late 1800s", "A famine across Africa", "African migration to Europe"], answer: "European colonization of Africa in the late 1800s", fact: "The Scramble for Africa between 1881 and 1914 saw European powers divide and colonize almost the entire African continent at the Berlin Conference!" },
    { question: "Which African country was the first to gain independence in the 20th century?", options: ["Ghana", "Nigeria", "South Africa", "Egypt"], answer: "Egypt", fact: "Egypt gained independence from Britain in 1922, making it the first African country to gain independence in the 20th century!" },
    { question: "Who founded the Black Consciousness Movement in South Africa?", options: ["Nelson Mandela", "Steve Biko", "Desmond Tutu", "Walter Sisulu"], answer: "Steve Biko", fact: "Steve Biko founded the Black Consciousness Movement in the late 1960s. He was killed by South African security police in 1977 at age 30!" },
    { question: "Which African country is the continent's largest oil producer?", options: ["Libya", "Angola", "Nigeria", "Algeria"], answer: "Nigeria", fact: "Nigeria is Africa's largest oil producer and has been a major OPEC member since 1971. Oil accounts for about 90% of its export earnings!" },
    { question: "What is the Great Rift Valley?", options: ["A river system in West Africa", "A geological fault running through East Africa", "A desert in North Africa", "A mountain range in Southern Africa"], answer: "A geological fault running through East Africa", fact: "The Great Rift Valley stretches about 6000 km from the Afar Triangle to Mozambique and is one of the most significant geological features on Earth!" },
    { question: "Which African country was the last to gain independence?", options: ["Zimbabwe", "Namibia", "Eritrea", "South Sudan"], answer: "South Sudan", fact: "South Sudan gained independence from Sudan on July 9 2011, making it the world's newest country and Africa's newest nation!" },
    { question: "What was apartheid?", options: ["A South African political party", "A system of racial segregation in South Africa", "A type of African music", "A tribal custom in East Africa"], answer: "A system of racial segregation in South Africa", fact: "Apartheid meaning separateness in Afrikaans was a system of institutionalized racial segregation in South Africa from 1948 to 1994!" },
    { question: "Which African country has the most billionaires?", options: ["Nigeria", "Kenya", "Egypt", "South Africa"], answer: "South Africa", fact: "South Africa has the most billionaires in Africa, led by figures like Elon Musk who was born in Pretoria and Nicky Oppenheimer of the diamond dynasty!" },
    { question: "What is the significance of the Berlin Conference of 1884?", options: ["First African independence movement", "European powers divided Africa among themselves", "Formation of the African Union", "End of the slave trade"], answer: "European powers divided Africa among themselves", fact: "The Berlin Conference of 1884 to 1885 saw 14 European nations divide Africa without the participation of a single African. This shaped modern African borders!" },
    { question: "Which African country has the largest economy?", options: ["South Africa", "Egypt", "Algeria", "Nigeria"], answer: "Nigeria", fact: "Nigeria has the largest economy in Africa with a GDP of over 440 billion dollars, driven by oil production, agriculture and a large consumer market!" },
    { question: "Who was Jomo Kenyatta?", options: ["First president of Tanzania", "First president of Kenya", "First president of Uganda", "First president of Zimbabwe"], answer: "First president of Kenya", fact: "Jomo Kenyatta was Kenya's founding father and first president, serving from 1964 to 1978. His face appears on the Kenyan shilling!" },
    { question: "Which African river is the deepest in the world?", options: ["Nile River", "Niger River", "Congo River", "Zambezi River"], answer: "Congo River", fact: "The Congo River is the deepest river in the world reaching depths of over 220 meters. It is also the second longest river in Africa!" },
    { question: "What is the Horn of Africa?", options: ["A musical instrument from East Africa", "A peninsula in Northeast Africa", "A mountain range in Ethiopia", "A trade route across North Africa"], answer: "A peninsula in Northeast Africa", fact: "The Horn of Africa is a peninsula in Northeast Africa comprising Somalia, Ethiopia, Eritrea and Djibouti. It is the easternmost point of Africa!" },
    { question: "Which African country hosted the 2019 Africa Cup of Nations?", options: ["Morocco", "South Africa", "Cameroon", "Egypt"], answer: "Egypt", fact: "Egypt hosted the 2019 Africa Cup of Nations, which Algeria won by defeating Senegal in the final. It was the largest AFCON tournament ever held!" },
    { question: "What was the name of South Africa's first democratic election?", options: ["The Freedom Election", "The Rainbow Election", "The Liberation Vote", "The 1994 Election"], answer: "The 1994 Election", fact: "The 1994 South African general election was the first in which all citizens regardless of race could vote. Nelson Mandela won and became president!" },
    { question: "Which African country has the most ethnic groups?", options: ["Nigeria", "DR Congo", "Cameroon", "Tanzania"], answer: "Nigeria", fact: "Nigeria has over 250 ethnic groups with the three largest being the Hausa-Fulani, Yoruba and Igbo. This diversity makes Nigeria one of the most complex nations in Africa!" },
    { question: "What is the Nile Delta?", options: ["The source of the Nile River", "Where the Nile flows into the Mediterranean Sea", "A lake in Sudan", "A waterfall in Uganda"], answer: "Where the Nile flows into the Mediterranean Sea", fact: "The Nile Delta in northern Egypt is where the Nile fans out into the Mediterranean Sea. It is one of the world's largest river deltas and extremely fertile!" },
    { question: "Which African country produces the most gold?", options: ["South Africa", "Mali", "Tanzania", "Ghana"], answer: "Ghana", fact: "Ghana overtook South Africa as Africa's largest gold producer in 2019. Ghana was formerly known as the Gold Coast due to its abundant gold reserves!" },
    { question: "What is the African Continental Free Trade Area?", options: ["A military alliance", "A trade agreement between African nations", "An African currency union", "A transport network across Africa"], answer: "A trade agreement between African nations", fact: "The African Continental Free Trade Area launched in 2021 is the world's largest free trade area by number of countries, covering 54 African nations!" },
    { question: "Which African country has the most tech startups?", options: ["Kenya", "Egypt", "South Africa", "Nigeria"], answer: "Nigeria", fact: "Nigeria has the most tech startups in Africa with Lagos being called the Silicon Valley of Africa. Nigerian startups raised over 1.5 billion dollars in 2021!" },
    { question: "Who was Thomas Sankara?", options: ["First president of Senegal", "Revolutionary leader of Burkina Faso", "Founder of the African Union", "Leader of the Congolese independence movement"], answer: "Revolutionary leader of Burkina Faso", fact: "Thomas Sankara was the revolutionary president of Burkina Faso from 1983 to 1987. He renamed the country from Upper Volta and is considered one of Africa's most inspiring leaders!" },
    { question: "Which African country is known as the Switzerland of Africa?", options: ["Kenya", "Rwanda", "Lesotho", "Swaziland"], answer: "Rwanda", fact: "Rwanda is sometimes called the Switzerland of Africa due to its mountainous landscape, cleanliness, strong governance and growing financial sector!" },
    { question: "What is the significance of Timbuktu?", options: ["Ancient African trade and learning center", "Capital of the Mali Empire", "Birthplace of Islam in Africa", "Site of ancient Egyptian ruins"], answer: "Ancient African trade and learning center", fact: "Timbuktu in modern Mali was a major center of Islamic scholarship and trade from the 13th to 17th centuries, housing the famous Sankore University!" },
    { question: "Which African country has the most Nobel Prize winners?", options: ["South Africa", "Nigeria", "Egypt", "Kenya"], answer: "South Africa", fact: "South Africa has produced the most Nobel Prize winners in Africa including Nelson Mandela, Desmond Tutu, F.W. de Klerk, Albert Luthuli, Nadine Gordimer and J.M. Coetzee!" },
    { question: "What was the name of the first African country to host the Olympics?", options: ["Egypt", "South Africa", "Morocco", "No African country has hosted the Olympics"], answer: "No African country has hosted the Olympics", fact: "As of 2024 no African country has ever hosted the Olympic Games. Several countries have bid including South Africa and Egypt but none have been selected yet!" },
    { question: "Which African country has the most internet users?", options: ["South Africa", "Kenya", "Egypt", "Nigeria"], answer: "Nigeria", fact: "Nigeria has the most internet users in Africa with over 100 million users. Mobile internet has driven rapid growth across the continent!" },
    { question: "What is ECOWAS?", options: ["East African Community", "Economic Community of West African States", "Egyptian Council of Western African States", "East and Central Organisation of West African States"], answer: "Economic Community of West African States", fact: "ECOWAS was founded in 1975 and groups 15 West African nations to promote economic integration. It also intervenes in regional conflicts and political crises!" },
    { question: "Which African country is the world's largest producer of platinum?", options: ["Zimbabwe", "Botswana", "South Africa", "Namibia"], answer: "South Africa", fact: "South Africa produces about 70% of the world's platinum. The Bushveld Igneous Complex in South Africa is the world's largest known platinum deposit!" },
    { question: "Who was Haile Selassie?", options: ["First president of Somalia", "Emperor of Ethiopia", "King of Morocco", "Leader of the ANC"], answer: "Emperor of Ethiopia", fact: "Haile Selassie was Emperor of Ethiopia from 1930 to 1974. He is revered as a messianic figure in the Rastafari movement and was a founding father of the OAU!" },
    { question: "Which African country has the most airports?", options: ["Egypt", "South Africa", "Nigeria", "Kenya"], answer: "South Africa", fact: "South Africa has the most airports in Africa with over 200 airports and airstrips serving both domestic and international routes!" },
    { question: "What is the Maghreb?", options: ["A North African region", "A West African trade route", "A type of African music", "An East African lake"], answer: "A North African region", fact: "The Maghreb refers to the western part of North Africa comprising Morocco, Algeria, Tunisia, Libya and Mauritania. The name means place of sunset in Arabic!" },
    { question: "Which African country has the most universities?", options: ["Nigeria", "South Africa", "Egypt", "Ethiopia"], answer: "Egypt", fact: "Egypt has the most universities in Africa with over 50 public and private universities. Cairo University founded in 1908 is one of the oldest in Africa!" },
    { question: "What is the Swahili Coast?", options: ["A beach resort in Kenya", "A historical trading region along East Africa's coast", "A type of African cooking", "A river system in Tanzania"], answer: "A historical trading region along East Africa's coast", fact: "The Swahili Coast stretched from Somalia to Mozambique and was a major trading hub connecting Africa, Arabia and Asia from the 8th to 16th centuries!" },
    { question: "Which African country produces the most diamonds?", options: ["South Africa", "Angola", "Botswana", "Namibia"], answer: "Botswana", fact: "Botswana is the world's largest producer of diamonds by value. The Jwaneng mine in Botswana is considered the richest diamond mine in the world!" },
    { question: "What is the significance of Gorée Island?", options: ["First European settlement in West Africa", "Major slave trade transit point", "Birthplace of Senegalese independence", "Ancient trading port for gold"], answer: "Major slave trade transit point", fact: "Gorée Island off the coast of Dakar Senegal was one of the largest slave trading centers on the African coast from the 15th to 19th centuries. It is now a UNESCO World Heritage Site!" },
    { question: "Which African country has the longest railway network?", options: ["Nigeria", "Kenya", "Egypt", "South Africa"], answer: "South Africa", fact: "South Africa has the longest railway network in Africa stretching over 30,000 km. The famous Blue Train running between Pretoria and Cape Town is one of the world's most luxurious train journeys!" },
    { question: "What was the Mau Mau Uprising?", options: ["A Ghanaian independence movement", "A Kenyan armed revolt against British colonialism", "A Nigerian civil war", "A South African anti-apartheid movement"], answer: "A Kenyan armed revolt against British colonialism", fact: "The Mau Mau Uprising from 1952 to 1960 was a Kenyan rebellion against British colonial rule. It played a significant role in Kenya eventually gaining independence in 1963!" },
    { question: "Which African country is home to the ancient city of Carthage?", options: ["Morocco", "Algeria", "Libya", "Tunisia"], answer: "Tunisia", fact: "Ancient Carthage was located near modern Tunis in Tunisia. It was a powerful Phoenician city-state and rival to Rome until its destruction in 146 BC!" },
    { question: "What is the African Development Bank?", options: ["A private bank serving African entrepreneurs", "A multilateral development finance institution", "A World Bank subsidiary for Africa", "A reserve bank for African nations"], answer: "A multilateral development finance institution", fact: "The African Development Bank was founded in 1964 and is headquartered in Abidjan Ivory Coast. It finances development projects across Africa with over 80 member countries!" },
    { question: "Which African country has the most mobile money users?", options: ["South Africa", "Nigeria", "Tanzania", "Kenya"], answer: "Kenya", fact: "Kenya pioneered mobile money with M-Pesa launched in 2007. Over 80% of Kenyan adults use mobile money making Kenya the world leader in mobile financial services!" },
  ],
  hard: [
    { question: "In what year was the African Union established?", options: ["1999", "2000", "2001", "2002"], answer: "2002", fact: "The African Union was established on 9 July 2002 in Durban South Africa, replacing the Organisation of African Unity which was founded in 1963!" },
    { question: "Which African empire was the wealthiest in history, led by Mansa Musa?", options: ["Songhai Empire", "Mali Empire", "Ghana Empire", "Benin Empire"], answer: "Mali Empire", fact: "Mansa Musa of the Mali Empire is considered the wealthiest person in all of human history. His 1324 pilgrimage to Mecca with 60,000 people and 80 camels carrying gold literally crashed the gold market in Egypt!" },
    { question: "What was the name of the apartheid law that forced black South Africans to carry identity documents?", options: ["Group Areas Act", "Pass Laws", "Separate Amenities Act", "Bantu Education Act"], answer: "Pass Laws", fact: "The Pass Laws required black South Africans to carry passbooks at all times. Failure to produce a passbook could result in immediate arrest and imprisonment!" },
    { question: "Which Kenyan woman was the first African to win the Nobel Peace Prize?", options: ["Charity Ngilu", "Wangari Maathai", "Martha Karua", "Raila Odinga"], answer: "Wangari Maathai", fact: "Wangari Maathai won the Nobel Peace Prize in 2004 for her contribution to sustainable development, democracy and peace through the Green Belt Movement!" },
    { question: "What is the name of the ancient library located in Africa?", options: ["Library of Carthage", "Library of Alexandria", "Library of Timbuktu", "Library of Memphis"], answer: "Library of Alexandria", fact: "The Library of Alexandria in Egypt was one of the largest and most significant libraries of the ancient world, housing up to 700,000 scrolls of knowledge!" },
    { question: "Which African country was the site of the Rwandan Genocide in 1994?", options: ["Burundi", "Rwanda", "DR Congo", "Uganda"], answer: "Rwanda", fact: "The Rwandan Genocide in 1994 lasted 100 days and killed between 500,000 and 800,000 Tutsi people. Rwanda has since become one of Africa's fastest growing economies!" },
    { question: "Who was the first African Secretary-General of the United Nations?", options: ["Kofi Annan", "Boutros Boutros-Ghali", "Amara Essy", "Salim Salim"], answer: "Boutros Boutros-Ghali", fact: "Boutros Boutros-Ghali of Egypt served as UN Secretary-General from 1992 to 1996. Kofi Annan of Ghana followed him from 1997 to 2006!" },
    { question: "Which African country has the oldest written constitution still in use?", options: ["South Africa", "Egypt", "Liberia", "Ethiopia"], answer: "Liberia", fact: "Liberia adopted its constitution in 1847 modeled on the US Constitution, making it one of the oldest republics in Africa!" },
    { question: "What was the name of the movement led by Patrice Lumumba?", options: ["Congolese National Movement", "African Liberation Front", "Congo Freedom Party", "Pan African Congress"], answer: "Congolese National Movement", fact: "Patrice Lumumba founded the Mouvement National Congolais and became the first Prime Minister of the Democratic Republic of Congo. He was assassinated in 1961!" },
    { question: "Which North African dynasty built the Alhambra palace in Spain?", options: ["Ottoman Empire", "Fatimid Caliphate", "Nasrid Dynasty", "Almohad Dynasty"], answer: "Nasrid Dynasty", fact: "The Nasrid Dynasty of North African and Moorish origin built the stunning Alhambra palace in Granada Spain between 1238 and 1358!" },
    { question: "What is the significance of Robben Island in South Africa?", options: ["Site of first European settlement", "Prison where Nelson Mandela was held", "Location of first diamond mine", "Battleground of Anglo-Boer War"], answer: "Prison where Nelson Mandela was held", fact: "Robben Island served as a maximum security prison where Nelson Mandela spent 18 of his 27 years in prison. It is now a UNESCO World Heritage Site!" },
    { question: "Which African city hosted the famous 1974 boxing match known as the Rumble in the Jungle?", options: ["Lagos", "Nairobi", "Kinshasa", "Cairo"], answer: "Kinshasa", fact: "The Rumble in the Jungle between Muhammad Ali and George Foreman took place in Kinshasa Zaire now DR Congo on October 30 1974. Ali won by knockout!" },
    { question: "What was Operation Solomon?", options: ["A military operation in Somalia", "An Israeli operation to airlift Ethiopian Jews to Israel", "A UN peacekeeping mission in Sudan", "A famine relief operation in Ethiopia"], answer: "An Israeli operation to airlift Ethiopian Jews to Israel", fact: "Operation Solomon in May 1991 airlifted 14,325 Ethiopian Jews known as Beta Israel to Israel in just 36 hours using 34 aircraft!" },
    { question: "Which African leader introduced the concept of Ujamaa?", options: ["Kwame Nkrumah", "Julius Nyerere", "Kenneth Kaunda", "Jomo Kenyatta"], answer: "Julius Nyerere", fact: "Julius Nyerere of Tanzania introduced Ujamaa meaning familyhood in Swahili, a form of African socialism that emphasized community cooperation and self reliance!" },
    { question: "Which African country was the first to legalize same sex marriage?", options: ["South Africa", "Botswana", "Namibia", "Kenya"], answer: "South Africa", fact: "South Africa became the first African country and fifth country in the world to legalize same sex marriage in 2006!" },
    { question: "What was the Biafran War?", options: ["A war between Nigeria and Cameroon", "A Nigerian civil war where Biafra tried to secede", "A war between Ghana and Ivory Coast", "A conflict between Sudan and Ethiopia"], answer: "A Nigerian civil war where Biafra tried to secede", fact: "The Nigerian Civil War from 1967 to 1970 was fought when the southeastern region declared itself the Republic of Biafra. Over 1 million people died making it one of Africa's deadliest conflicts!" },
    { question: "Who was Samori Touré?", options: ["First president of Guinea", "West African military leader who resisted French colonialism", "Founder of the Mali Empire", "Leader of the Ashanti Kingdom"], answer: "West African military leader who resisted French colonialism", fact: "Samori Touré was a Mandinka leader who built the Wassoulou Empire and fiercely resisted French colonization of West Africa from 1882 to 1898. He is a celebrated pan-African hero!" },
    { question: "What is the significance of the Soweto Uprising of 1976?", options: ["Start of South African independence", "Student protest against Afrikaans as language of instruction", "Beginning of the ANC armed struggle", "First democratic election in South Africa"], answer: "Student protest against Afrikaans as language of instruction", fact: "On June 16 1976 thousands of Soweto students protested against being taught in Afrikaans. Police opened fire killing hundreds. June 16 is now Youth Day in South Africa!" },
    { question: "Which ancient African civilization built the city of Great Zimbabwe?", options: ["Zulu Kingdom", "Kingdom of Zimbabwe", "Rozvi Empire", "Shona people"], answer: "Shona people", fact: "Great Zimbabwe was built by the Shona people between the 11th and 15th centuries. The massive stone structures gave Zimbabwe its name meaning great stone houses in Shona!" },
    { question: "What was the name of Muammar Gaddafi's political philosophy?", options: ["African Socialism", "The Third International Theory", "Pan-Africanism", "Revolutionary Democracy"], answer: "The Third International Theory", fact: "Gaddafi outlined his political philosophy in the Green Book published in 1975, presenting the Third International Theory as an alternative to capitalism and communism!" },
    { question: "Which African country was the site of the first modern Olympic marathon winner from Africa?", options: ["Kenya", "Ethiopia", "South Africa", "Morocco"], answer: "Ethiopia", fact: "Abebe Bikila of Ethiopia won the 1960 Rome Olympics marathon running barefoot on the Appian Way, becoming the first black African to win an Olympic gold medal!" },
    { question: "What was the Trans-Atlantic Slave Trade's impact on Africa?", options: ["Strengthened African economies", "Removed an estimated 12 million Africans from the continent", "Led to the rise of the Mali Empire", "Created new trade routes in East Africa"], answer: "Removed an estimated 12 million Africans from the continent", fact: "The Trans-Atlantic Slave Trade forcibly removed an estimated 12 to 15 million Africans between the 15th and 19th centuries, devastating African societies, economies and demographics!" },
    { question: "Which African independence leader said 'Seek ye first the political kingdom'?", options: ["Julius Nyerere", "Kwame Nkrumah", "Jomo Kenyatta", "Leopold Senghor"], answer: "Kwame Nkrumah", fact: "Kwame Nkrumah of Ghana coined the phrase Seek ye first the political kingdom and all other things shall be added unto you, arguing that political freedom must come before economic development!" },
    { question: "What is the Sahel Crisis?", options: ["A water shortage in North Africa", "A humanitarian and security crisis in the Sahel region", "A drought affecting the Sahara Desert", "A political crisis in Morocco"], answer: "A humanitarian and security crisis in the Sahel region", fact: "The Sahel Crisis involves jihadist insurgencies, ethnic conflicts, food insecurity and climate change affecting countries like Mali, Burkina Faso, Niger and Chad since the early 2010s!" },
    { question: "Which African country has the most ancient rock art sites?", options: ["Egypt", "South Africa", "Algeria", "Zimbabwe"], answer: "South Africa", fact: "South Africa has the largest concentration of ancient rock art in the world with over 10,000 sites. The San people created these paintings over thousands of years!" },
    { question: "What was the significance of the Battle of Isandlwana in 1879?", options: ["British defeat of the Zulu Kingdom", "Zulu victory over British forces", "Ethiopian defeat of Italian forces", "Ashanti victory over British forces"], answer: "Zulu victory over British forces", fact: "The Battle of Isandlwana on January 22 1879 was a stunning Zulu victory over British forces, the largest British military defeat against an African force in history!" },
    { question: "Which African economist won the Nobel Prize in Economics?", options: ["Ngozi Okonjo-Iweala", "Mo Ibrahim", "Celestin Monga", "No African has won the Nobel Prize in Economics"], answer: "No African has won the Nobel Prize in Economics", fact: "As of 2024 no African-born economist has won the Nobel Prize in Economics, though many African economists have made significant contributions to global economic thought!" },
    { question: "What was the impact of the discovery of gold in South Africa in 1886?", options: ["Led to peaceful development of South Africa", "Triggered the Anglo-Boer War and massive migration", "Ended colonialism in southern Africa", "Created the first African stock exchange"], answer: "Triggered the Anglo-Boer War and massive migration", fact: "The discovery of gold in the Witwatersrand in 1886 triggered a massive gold rush, led to the founding of Johannesburg and ultimately contributed to the Anglo-Boer Wars of 1880 to 1902!" },
    { question: "Which African philosopher developed the concept of Ubuntu?", options: ["Kwame Gyekye", "Desmond Tutu", "Steve Biko", "Ubuntu is a collective African philosophy not attributed to one person"], answer: "Ubuntu is a collective African philosophy not attributed to one person", fact: "Ubuntu meaning I am because we are is a traditional African philosophy emphasizing community and interconnectedness. Though popularized by Desmond Tutu it is a collective Nguni Bantu concept!" },
    { question: "What was the significance of the 1955 Bandung Conference for Africa?", options: ["Created the Organisation of African Unity", "United African and Asian nations against colonialism", "Ended the Suez Crisis", "Established ECOWAS"], answer: "United African and Asian nations against colonialism", fact: "The 1955 Bandung Conference in Indonesia brought together 29 African and Asian nations to oppose colonialism and Cold War power blocs. It led to the Non-Aligned Movement!" },
    { question: "Which African country has the most Formula One drivers in history?", options: ["Kenya", "Morocco", "South Africa", "Zimbabwe"], answer: "South Africa", fact: "South Africa has produced the most Formula One drivers in Africa including Jody Scheckter who won the 1979 World Championship. Elon Musk is also South African-born!" },
    { question: "What was the impact of Cecil Rhodes on southern Africa?", options: ["Promoted African self-governance", "Colonized Zimbabwe and Zambia and established British dominance", "Founded the first African university", "Built the first trans-African railway"], answer: "Colonized Zimbabwe and Zambia and established British dominance", fact: "Cecil Rhodes colonized the territories now known as Zimbabwe and Zambia, founded De Beers diamond company and dreamed of a Cape to Cairo railway through British-controlled Africa!" },
    { question: "Which African country was the first to have a female head of state?", options: ["South Africa", "Liberia", "Rwanda", "Senegal"], answer: "Liberia", fact: "Ellen Johnson Sirleaf became President of Liberia in 2006, making her Africa's first elected female head of state. She won the Nobel Peace Prize in 2011!" },
    { question: "What is the significance of the Lusaka Agreement of 1974?", options: ["End of apartheid in South Africa", "Peace agreement ending Mozambican civil war", "Portugal agreeing to decolonize Africa", "Formation of SADC"], answer: "Portugal agreeing to decolonize Africa", fact: "The Lusaka Accord of 1974 was signed after Portugal's Carnation Revolution and led to Portugal withdrawing from its African colonies including Mozambique, Angola and Guinea-Bissau!" },
    { question: "Which African scientist made major contributions to the discovery of the HIV virus?", options: ["Françoise Barré-Sinoussi", "Max Essex", "Joep Lange", "Luc Montagnier"], answer: "Max Essex", fact: "Max Essex of Harvard worked extensively in Africa studying HIV transmission. His research with African partners helped establish that HIV originated in Africa and shaped global AIDS response!" },
    { question: "What was the Frontline States coalition?", options: ["African countries bordering conflict zones fighting for liberation", "A military alliance against Egypt", "Countries supporting apartheid South Africa", "An East African trade bloc"], answer: "African countries bordering conflict zones fighting for liberation", fact: "The Frontline States were southern African countries including Tanzania, Zambia, Mozambique and Zimbabwe that united to support liberation movements against apartheid and white minority rule in the 1970s and 80s!" },
    { question: "Which African country discovered oil in 2019 changing its economic prospects?", options: ["Senegal", "Niger", "Uganda", "Namibia"], answer: "Namibia", fact: "TotalEnergies discovered one of the world's largest oil finds off the coast of Namibia in 2019. The Orange Basin discovery could hold over 11 billion barrels of oil!" },
    { question: "What was the significance of Cheikh Anta Diop's work?", options: ["Founded modern African economics", "Argued that ancient Egypt was a Black African civilization", "Created the concept of pan-Africanism", "Wrote the first African constitution"], answer: "Argued that ancient Egypt was a Black African civilization", fact: "Senegalese scholar Cheikh Anta Diop argued that ancient Egyptian civilization was Black African in origin, challenging Eurocentric views of history and inspiring Afrocentric scholarship!" },
    { question: "Which African country was most affected by the 1984 to 1985 famine?", options: ["Sudan", "Somalia", "Ethiopia", "Eritrea"], answer: "Ethiopia", fact: "The 1984 Ethiopian famine killed over 1 million people and prompted the Live Aid concert organized by Bob Geldof which raised over 150 million dollars for relief!" },
    { question: "What was the role of the African National Congress in South Africa?", options: ["Ruling party since independence", "Anti-apartheid liberation movement turned political party", "Economic development organization", "Military organization fighting colonialism"], answer: "Anti-apartheid liberation movement turned political party", fact: "The ANC was founded in 1912 making it one of the world's oldest political parties. It led the anti-apartheid struggle and has governed South Africa since 1994's first democratic election!" },
    { question: "Which African country has the world's oldest desert?", options: ["Libya", "Algeria", "Egypt", "Namibia"], answer: "Namibia", fact: "The Namib Desert in Namibia is the world's oldest desert estimated to be between 55 and 80 million years old. The name Namibia comes from the Namib Desert!" },
    { question: "What was the significance of Kwame Nkrumah's Non-Aligned Movement participation?", options: ["Aligned Ghana with the Soviet Union", "Kept Ghana neutral between US and Soviet blocs during Cold War", "Joined Ghana to NATO", "Created a West African military alliance"], answer: "Kept Ghana neutral between US and Soviet blocs during Cold War", fact: "Nkrumah was a founding member of the Non-Aligned Movement which sought to keep newly independent African and Asian nations out of the Cold War rivalry between the US and Soviet Union!" },
    { question: "Which African city is considered the fashion capital of Africa?", options: ["Cairo", "Nairobi", "Lagos", "Johannesburg"], answer: "Lagos", fact: "Lagos Nigeria is widely considered Africa's fashion capital, home to Lagos Fashion Week and a booming creative industry. Nigerian fashion designers have gained global recognition!" },
    { question: "What is the significance of the Nok civilization?", options: ["First civilization in East Africa", "Ancient West African civilization known for terracotta sculptures", "Builders of the pyramids of Sudan", "Founders of the Songhai Empire"], answer: "Ancient West African civilization known for terracotta sculptures", fact: "The Nok civilization in modern Nigeria from 1500 BC to 500 AD produced the oldest known terracotta sculptures in sub-Saharan Africa and may have independently developed iron smelting!" },
    { question: "Which African country has the most Chinese investment?", options: ["Sudan", "Angola", "Ethiopia", "DR Congo"], answer: "Angola", fact: "Angola has received more Chinese investment than any other African country with billions of dollars in oil-backed loans funding massive infrastructure projects across the country!" },
    { question: "What was the significance of Patrice Lumumba's assassination?", options: ["Ended the Congo Civil War", "Marked the beginning of Cold War interference in African politics", "Led to Congo joining the Soviet bloc", "Started the formation of the African Union"], answer: "Marked the beginning of Cold War interference in African politics", fact: "Lumumba's assassination in 1961 with CIA and Belgian involvement marked a turning point showing how Cold War superpowers would interfere in African politics to protect their strategic interests!" },
    { question: "Which African country leads in renewable energy production?", options: ["Kenya", "Morocco", "South Africa", "Ethiopia"], answer: "Ethiopia", fact: "Ethiopia leads Africa in renewable energy with the Grand Ethiopian Renaissance Dam being Africa's largest hydroelectric power plant. Ethiopia gets over 90% of its electricity from renewable sources!" },
    { question: "What was the Long Walk to Freedom?", options: ["A famous African migration", "Nelson Mandela's autobiography", "The march to independence in Ghana", "A famous African trade route"], answer: "Nelson Mandela's autobiography", fact: "Long Walk to Freedom is Nelson Mandela's autobiography published in 1994 describing his childhood, his years fighting apartheid, his imprisonment and his road to the presidency!" },
    { question: "Which African country has the most women in parliament?", options: ["South Africa", "Namibia", "Rwanda", "Mozambique"], answer: "Rwanda", fact: "Rwanda has the highest percentage of women in parliament in the world with over 60% of parliamentary seats held by women, surpassing every other country on Earth!" },
    { question: "What was the significance of the Suez Canal for Africa?", options: ["Connected West and East Africa", "Separated Africa from Europe", "Shortened the sea route between Europe and Asia affecting African trade", "Was built entirely by African workers"], answer: "Shortened the sea route between Europe and Asia affecting African trade", fact: "The Suez Canal opened in 1869 and dramatically shortened the sea route between Europe and Asia. It reduced the need to sail around Africa affecting East African port cities and trade patterns!" },
    { question: "Which African country was the setting for the novel Things Fall Apart?", options: ["Ghana", "Kenya", "Nigeria", "South Africa"], answer: "Nigeria", fact: "Things Fall Apart by Chinua Achebe published in 1958 is set in Nigeria among the Igbo people. It is the most widely read book in modern African literature and has sold over 20 million copies!" },
  ]
};

// ---- GAME STATE ----
let playerName = '';
let difficulty = 'easy';
let questions = [];
let currentQuestion = 0;
let score = 0;
let timer = null;
let timeLeft = 30;
let totalTime = 30;
let answered = false;
let currentTrack = 0;
let isMuted = false;
let musicStarted = false;

// ---- DIFFICULTY SETTINGS ----
const diffSettings = {
  easy:   { time: 30, points: 1, label: '30 seconds per question • 1 point per correct answer' },
  medium: { time: 15, points: 2, label: '15 seconds per question • 2 points per correct answer' },
  hard:   { time: 8,  points: 3, label: '8 seconds per question • 3 points per correct answer' }
};

// ---- SCREENS ----
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ---- DIFFICULTY BUTTONS ----
document.querySelectorAll('.diff-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    difficulty = this.dataset.diff;
    document.getElementById('diff-info').textContent = diffSettings[difficulty].label;
  });
});

// ---- LEADERBOARD ----
function getLeaderboard() {
  return JSON.parse(localStorage.getItem('africaQuizLeaderboard') || '[]');
}

function saveLeaderboard(name, score, diff) {
  const board = getLeaderboard();
  board.push({ name, score, diff, date: new Date().toLocaleDateString() });
  board.sort((a, b) => b.score - a.score);
  localStorage.setItem('africaQuizLeaderboard', JSON.stringify(board.slice(0, 10)));
}

function renderLeaderboardPreview() {
  const board = getLeaderboard();
  const container = document.getElementById('leaderboard-preview');
  if (board.length === 0) { container.innerHTML = ''; return; }
  container.innerHTML = `
    <div class="leaderboard" style="margin-top:1.2rem;">
      <h3>🏅 Top Players</h3>
      ${board.slice(0, 5).map((entry, i) => `
        <div class="lb-row ${i === 0 ? 'first' : ''}">
          <span>${i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${i + 1}.`} ${entry.name}</span>
          <span>${entry.score} pts • ${entry.diff}</span>
        </div>
      `).join('')}
    </div>
  `;
}

function renderLeaderboardResults() {
  const board = getLeaderboard();
  const container = document.getElementById('leaderboard');
  container.innerHTML = `
    <h3>🏅 Leaderboard</h3>
    ${board.length === 0
      ? '<p class="lb-empty">No scores yet — you are the first!</p>'
      : board.slice(0, 5).map((entry, i) => `
        <div class="lb-row ${i === 0 ? 'first' : ''}">
          <span>${i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${i + 1}.`} ${entry.name}</span>
          <span>${entry.score} pts • ${entry.diff}</span>
        </div>
      `).join('')
    }
  `;
}

// ---- SHUFFLE ----
function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

// ---- MUSIC ----
const audioPlayer = new Audio();
audioPlayer.loop = false;
audioPlayer.volume = 0.3;

function playTrack(index) {
  const track = playlist[index];
  audioPlayer.src = track.url;
  audioPlayer.play().then(() => {
    document.getElementById('music-label').textContent = `🎵 ${track.title}`;
    document.getElementById('play-music-btn').textContent = '⏸';
  }).catch(err => {
    document.getElementById('music-label').textContent = '🎵 Tap play to start music';
    console.log('Autoplay blocked:', err);
  });
}

audioPlayer.addEventListener('ended', function() {
  currentTrack = (currentTrack + 1) % playlist.length;
  playTrack(currentTrack);
});

document.getElementById('play-music-btn').addEventListener('click', function() {
  if (audioPlayer.paused) {
    if (!audioPlayer.src || audioPlayer.src === window.location.href) {
      playTrack(currentTrack);
    } else {
      audioPlayer.play();
      this.textContent = '⏸';
      document.getElementById('music-label').textContent = `🎵 ${playlist[currentTrack].title}`;
    }
  } else {
    audioPlayer.pause();
    this.textContent = '▶️';
    document.getElementById('music-label').textContent = '🎵 Music paused';
  }
});

document.getElementById('next-music-btn').addEventListener('click', function() {
  currentTrack = (currentTrack + 1) % playlist.length;
  playTrack(currentTrack);
});

document.getElementById('prev-btn').addEventListener('click', function() {
  currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
  playTrack(currentTrack);
});

document.getElementById('mute-btn').addEventListener('click', function() {
  isMuted = !isMuted;
  audioPlayer.muted = isMuted;
  this.textContent = isMuted ? '🔇' : '🔊';
});

// ---- START QUIZ ----
document.getElementById('start-btn').addEventListener('click', function() {
  const name = document.getElementById('player-name').value.trim();
  if (!name) { alert('Please enter your name!'); return; }
  playerName = name;
  questions = shuffle(allQuestions[difficulty]).slice(0, 15);
  currentQuestion = 0;
  score = 0;
  answered = false;
  showScreen('quiz-screen');
  loadQuestion();
});

// ---- LOAD QUESTION ----
function loadQuestion() {
  answered = false;
  const q = questions[currentQuestion];
  const settings = diffSettings[difficulty];

  document.getElementById('question-count').textContent = `Question ${currentQuestion + 1}/15`;
  document.getElementById('score-display').textContent = `Score: ${score}`;
  document.getElementById('question-text').textContent = q.question;
  document.getElementById('feedback').style.display = 'none';
  document.getElementById('next-btn').style.display = 'none';

  const optionsEl = document.getElementById('options');
  optionsEl.innerHTML = shuffle(q.options).map(opt => `
    <button class="option" data-answer="${opt}">${opt}</button>
  `).join('');

  document.querySelectorAll('.option').forEach(btn => {
    btn.addEventListener('click', function() {
      if (!answered) selectAnswer(this.dataset.answer);
    });
  });

  timeLeft = settings.time;
  totalTime = settings.time;
  updateTimerBar();
  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    updateTimerBar();
    if (timeLeft <= 0) { clearInterval(timer); timeUp(); }
  }, 1000);
}

// ---- TIMER BAR ----
function updateTimerBar() {
  const pct = (timeLeft / totalTime) * 100;
  document.getElementById('timer-fill').style.width = pct + '%';
  document.getElementById('timer-text').textContent = timeLeft + 's';
  const fill = document.getElementById('timer-fill');
  if (pct < 30) fill.style.background = 'linear-gradient(90deg, #e24b4a, #991f1f)';
  else if (pct < 60) fill.style.background = 'linear-gradient(90deg, #ef9f27, #ba7517)';
  else fill.style.background = 'linear-gradient(90deg, #ef9f27, #d85a30)';
}

// ---- SELECT ANSWER ----
function selectAnswer(selected) {
  answered = true;
  clearInterval(timer);
  const q = questions[currentQuestion];
  const correct = q.answer;
  const isCorrect = selected === correct;

  document.querySelectorAll('.option').forEach(btn => {
    btn.classList.add('disabled');
    if (btn.dataset.answer === correct) btn.classList.add('correct');
    if (btn.dataset.answer === selected && !isCorrect) btn.classList.add('wrong');
  });

  const feedback = document.getElementById('feedback');
  feedback.style.display = 'block';

  if (isCorrect) {
    score += diffSettings[difficulty].points;
    document.getElementById('score-display').textContent = `Score: ${score}`;
    feedback.innerHTML = `
      <p class="feedback-correct">✅ Correct! +${diffSettings[difficulty].points} point${diffSettings[difficulty].points > 1 ? 's' : ''}</p>
      <p class="feedback-fact">💡 ${q.fact}</p>
    `;
  } else {
    feedback.innerHTML = `
      <p class="feedback-wrong">❌ Wrong! The correct answer is: <strong>${correct}</strong></p>
      <p class="feedback-fact">💡 ${q.fact}</p>
    `;
  }

  document.getElementById('next-btn').style.display = 'block';
}

// ---- TIME UP ----
function timeUp() {
  answered = true;
  const q = questions[currentQuestion];
  document.querySelectorAll('.option').forEach(btn => {
    btn.classList.add('disabled');
    if (btn.dataset.answer === q.answer) btn.classList.add('correct');
  });
  const feedback = document.getElementById('feedback');
  feedback.style.display = 'block';
  feedback.innerHTML = `
    <p class="feedback-wrong">⏱ Time's up! The correct answer was: <strong>${q.answer}</strong></p>
    <p class="feedback-fact">💡 ${q.fact}</p>
  `;
  document.getElementById('next-btn').style.display = 'block';
}

// ---- NEXT QUESTION ----
document.getElementById('next-btn').addEventListener('click', function() {
  currentQuestion++;
  if (currentQuestion < 15) {
    loadQuestion();
  } else {
    endGame();
  }
});

// ---- END GAME ----
function endGame() {
  clearInterval(timer);
  saveLeaderboard(playerName, score, difficulty);

  const maxScore = 15 * diffSettings[difficulty].points;
  const pct = Math.round((score / maxScore) * 100);

  let grade, emoji, title;
  if (pct >= 90)      { grade = 'A+'; emoji = '🏆'; title = `Legendary! You know Africa!`; }
  else if (pct >= 80) { grade = 'A';  emoji = '🥇'; title = `Excellent, ${playerName}!`; }
  else if (pct >= 70) { grade = 'B';  emoji = '🥈'; title = `Great job, ${playerName}!`; }
  else if (pct >= 60) { grade = 'C';  emoji = '🥉'; title = `Good effort, ${playerName}!`; }
  else if (pct >= 40) { grade = 'D';  emoji = '📚'; title = `Keep learning, ${playerName}!`; }
  else                { grade = 'F';  emoji = '💪'; title = `Don't give up, ${playerName}!`; }

  document.getElementById('results-emoji').textContent = emoji;
  document.getElementById('results-title').textContent = title;
  document.getElementById('results-subtitle').textContent = `You scored ${score} out of ${maxScore} on ${difficulty} mode`;
  document.getElementById('stat-score').textContent = `${score}/${maxScore}`;
  document.getElementById('stat-accuracy').textContent = `${pct}%`;
  document.getElementById('stat-grade').textContent = grade;

  renderLeaderboardResults();
  showScreen('results-screen');
}

// ---- PLAY AGAIN ----
document.getElementById('play-again-btn').addEventListener('click', function() {
  questions = shuffle(allQuestions[difficulty]).slice(0, 15);
  currentQuestion = 0;
  score = 0;
  answered = false;
  showScreen('quiz-screen');
  loadQuestion();
});

// ---- HOME ----
document.getElementById('home-btn').addEventListener('click', function() {
  clearInterval(timer);
  renderLeaderboardPreview();
  showScreen('welcome-screen');
});

// ---- INIT ----
renderLeaderboardPreview();