// ---- PLAYLIST ----
const playlist = [
  { id: 'CcN1BHjFdz4', title: 'Wizkid - Essence' },
  { id: 'E6BhWnMjQ64', title: 'Sauti Sol - Melanin' },
  { id: 'fRh_vgS2dFE', title: 'Master KG - Jerusalema' },
  { id: 'hHmaoGmGSLI', title: 'Burna Boy - Last Last' },
  { id: 'JhqhFmPnTUQ', title: 'Sarkodie - Adonai' },
  { id: 'EdEn0SOHLHQ', title: 'Nyashinski - Now You Know' },
  { id: 'SFpbLLrpGVA', title: 'Black Sherif - Kweku The Traveller' },
  { id: 'tQ4s9ghKnSQ', title: 'Davido - Fall' },
  { id: 'iHK1RioVkPc', title: 'Nasty C - Strings and Bling' },
  { id: 'XX_TIgIDHBo', title: 'Stonebwoy - Nominate' },
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
  ],
  hard: [
    { question: "In what year was the African Union established?", options: ["1999", "2000", "2001", "2002"], answer: "2002", fact: "The African Union was established on 9 July 2002 in Durban South Africa, replacing the Organisation of African Unity which was founded in 1963!" },
    { question: "Which African empire was the wealthiest in history, led by Mansa Musa?", options: ["Songhai Empire", "Mali Empire", "Ghana Empire", "Benin Empire"], answer: "Mali Empire", fact: "Mansa Musa of the Mali Empire is considered the wealthiest person in all of human history. His 1324 pilgrimage to Mecca with 60,000 people and 80 camels carrying gold literally crashed the gold market in Egypt!" },
    { question: "What was the name of the apartheid law that forced black South Africans to carry identity documents?", options: ["Group Areas Act", "Pass Laws", "Separate Amenities Act", "Bantu Education Act"], answer: "Pass Laws", fact: "The Pass Laws required black South Africans to carry passbooks at all times. Failure to produce a passbook could result in immediate arrest and imprisonment!" },
    { question: "Which Kenyan woman was the first African to win the Nobel Peace Prize?", options: ["Charity Ngilu", "Wangari Maathai", "Martha Karua", "Raila Odinga"], answer: "Wangari Maathai", fact: "Wangari Maathai won the Nobel Peace Prize in 2004 for her contribution to sustainable development, democracy and peace through the Green Belt Movement!" },
    { question: "What is the name of the ancient library located in Africa that was one of the largest in the ancient world?", options: ["Library of Carthage", "Library of Alexandria", "Library of Timbuktu", "Library of Memphis"], answer: "Library of Alexandria", fact: "The Library of Alexandria in Egypt was one of the largest and most significant libraries of the ancient world, housing up to 700,000 scrolls of knowledge!" },
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
function playTrack(index) {
  const track = playlist[index];
  const ytFrame = document.getElementById('yt-music');
  if (!isMuted) {
    ytFrame.src = `https://www.youtube.com/embed/${track.id}?autoplay=1&controls=0&loop=1&playlist=${track.id}`;
  }
  document.getElementById('music-label').textContent = `🎵 ${track.title}`;
}

document.getElementById('play-music-btn').addEventListener('click', function() {
  if (!musicStarted) {
    musicStarted = true;
    this.textContent = '⏸';
    playTrack(currentTrack);
  } else {
    isMuted = !isMuted;
    if (isMuted) {
      document.getElementById('yt-music').src = '';
      this.textContent = '▶️';
      document.getElementById('music-label').textContent = '🎵 Music paused';
    } else {
      playTrack(currentTrack);
      this.textContent = '⏸';
    }
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
  const ytFrame = document.getElementById('yt-music');
  if (isMuted) {
    ytFrame.src = '';
    this.textContent = '🔇';
    document.getElementById('music-label').textContent = '🎵 Music muted';
  } else {
    playTrack(currentTrack);
    this.textContent = '🔊';
  }
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