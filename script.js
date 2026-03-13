(() => {
  "use strict";

  // Registration form link
  const GOOGLE_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLScdmlakwVWIGGJDM0Le76LyYUPz-DAUKpS1If4NXFeBVZA6JA/viewform?usp=publish-editor";

  const TOTAL_QUESTIONS = 5;
  const DIFFICULTY_DISTRIBUTION = { easy: 2, medium: 2, hard: 1 };

  const QUESTION_BANK = {
    mathematics: {
      easy: [
        {
          q: "What is the value of 7 × 8?",
          options: ["54", "56", "58", "64"],
          answer: 1,
        },
        {
          q: "If a = 5, what is the value of 2a + 3?",
          options: ["10", "11", "12", "13"],
          answer: 3,
        },
        {
          q: "Which of the following is an even number?",
          options: ["19", "21", "24", "27"],
          answer: 2,
        },
        {
          q: "Simplify: 15 ÷ 3",
          options: ["3", "4", "5", "6"],
          answer: 2,
        },
        {
          q: "What is 25% of 80?",
          options: ["10", "15", "20", "25"],
          answer: 2,
        },
        {
          q: "The value of 9² is:",
          options: ["18", "27", "72", "81"],
          answer: 3,
        },
        {
          q: "Which of these is a prime number?",
          options: ["21", "29", "33", "35"],
          answer: 1,
        },
        {
          q: "A square has side 6 cm. Its area is:",
          options: ["12 cm²", "24 cm²", "36 cm²", "18 cm²"],
          answer: 2,
        },
        {
          q: "What is 3/4 of 40?",
          options: ["20", "25", "30", "35"],
          answer: 2,
        },
        {
          q: "The place value of 5 in 5,432 is:",
          options: ["Ones", "Tens", "Hundreds", "Thousands"],
          answer: 3,
        },
      ],
      medium: [
        {
          q: "Solve: 3x − 5 = 10",
          options: ["x = 3", "x = 5", "x = 7", "x = 15"],
          answer: 1,
        },
        {
          q: "A triangle has angles 50°, 60° and ____.",
          options: ["60°", "70°", "80°", "90°"],
          answer: 1,
        },
        {
          q: "If the perimeter of a square is 36 cm, what is the side length?",
          options: ["6 cm", "8 cm", "9 cm", "12 cm"],
          answer: 2,
        },
        {
          q: "Simplify: (2^3) × (2^2)",
          options: ["2^5", "2^6", "4^5", "4^6"],
          answer: 0,
        },
        {
          q: "The ratio 3:5 is equivalent to:",
          options: ["6:10", "9:20", "12:15", "15:18"],
          answer: 0,
        },
        {
          q: "The mean of 4, 6, 8, 10 is:",
          options: ["6", "7", "8", "9"],
          answer: 1,
        },
        {
          q: "If 40% of a number is 32, the number is:",
          options: ["60", "70", "80", "90"],
          answer: 2,
        },
        {
          q: "A line that cuts a circle in two points is called:",
          options: ["Radius", "Diameter", "Chord", "Tangent"],
          answer: 2,
        },
        {
          q: "If 3 notebooks cost ₹90, the cost of 1 notebook is:",
          options: ["₹20", "₹25", "₹30", "₹35"],
          answer: 2,
        },
        {
          q: "The supplement of 65° is:",
          options: ["25°", "105°", "115°", "125°"],
          answer: 2,
        },
      ],
      hard: [
        {
          q: "If (x − 2)(x + 3) = 0, what are the values of x?",
          options: ["x = 2 or x = 3", "x = -2 or x = 3", "x = 2 or x = -3", "x = -2 or x = -3"],
          answer: 2,
        },
        {
          q: "The sum of first 10 natural numbers is:",
          options: ["45", "50", "55", "60"],
          answer: 2,
        },
        {
          q: "If x/3 = 4, then 3x equals:",
          options: ["4", "8", "12", "36"],
          answer: 3,
        },
        {
          q: "An exterior angle of a triangle is 110° and one interior opposite angle is 40°. The other interior opposite angle is:",
          options: ["40°", "50°", "60°", "70°"],
          answer: 3,
        },
        {
          q: "In a right triangle, if one acute angle is 35°, the other acute angle is:",
          options: ["45°", "55°", "65°", "75°"],
          answer: 1,
        },
        {
          q: "The value of (5² − 3²) is:",
          options: ["4", "8", "16", "19"],
          answer: 2,
        },
        {
          q: "If the ratio of boys to girls is 3:2 and there are 15 boys, number of girls is:",
          options: ["5", "8", "10", "12"],
          answer: 2,
        },
      ],
    },
    physics: {
      easy: [
        {
          q: "The SI unit of force is:",
          options: ["Joule", "Newton", "Watt", "Pascal"],
          answer: 1,
        },
        {
          q: "Which of the following is a form of energy?",
          options: ["Speed", "Heat", "Density", "Mass"],
          answer: 1,
        },
        {
          q: "A device used to measure temperature is:",
          options: ["Ammeter", "Barometer", "Thermometer", "Voltmeter"],
          answer: 2,
        },
        {
          q: "Which object will fall faster in vacuum?",
          options: ["Feather", "Stone", "Both fall same", "Depends on shape"],
          answer: 2,
        },
        {
          q: "The SI unit of energy is:",
          options: ["Watt", "Joule", "Newton", "Pascal"],
          answer: 1,
        },
        {
          q: "Which of these is a non-luminous object?",
          options: ["Sun", "Torch", "Moon", "Bulb"],
          answer: 2,
        },
        {
          q: "The instrument used to measure electric current is:",
          options: ["Voltmeter", "Ammeter", "Thermometer", "Hygrometer"],
          answer: 1,
        },
        {
          q: "The force that pulls objects towards the Earth is:",
          options: ["Friction", "Magnetism", "Gravity", "Electricity"],
          answer: 2,
        },
        {
          q: "The speed of an object is distance divided by:",
          options: ["Force", "Time", "Mass", "Energy"],
          answer: 1,
        },
      ],
      medium: [
        {
          q: "If a body moves at constant speed in a straight line, its acceleration is:",
          options: ["Zero", "Constant", "Increasing", "Decreasing"],
          answer: 0,
        },
        {
          q: "In a series circuit, the current is:",
          options: ["Different in each component", "Same in all components", "Zero", "Depends on resistor color"],
          answer: 1,
        },
        {
          q: "The work done is maximum when the force is applied at an angle of:",
          options: ["0°", "30°", "60°", "90°"],
          answer: 0,
        },
        {
          q: "A car covers 120 km in 3 hours. Its speed is:",
          options: ["20 km/h", "30 km/h", "40 km/h", "60 km/h"],
          answer: 2,
        },
        {
          q: "Which type of mirror is used in a rear-view mirror of a vehicle?",
          options: ["Plane", "Concave", "Convex", "Any type"],
          answer: 2,
        },
        {
          q: "Sound cannot travel through:",
          options: ["Solid", "Liquid", "Gas", "Vacuum"],
          answer: 3,
        },
        {
          q: "The change of state from solid directly to gas is called:",
          options: ["Condensation", "Evaporation", "Sublimation", "Freezing"],
          answer: 2,
        },
        {
          q: "Which of these travels fastest in air?",
          options: ["Sound", "Light", "Bullets", "Water"],
          answer: 1,
        },
        {
          q: "The unit of electric power is:",
          options: ["Joule", "Newton", "Watt", "Volt"],
          answer: 2,
        },
      ],
      hard: [
        {
          q: "A 2 kg object accelerates at 3 m/s². The net force is:",
          options: ["1.5 N", "5 N", "6 N", "9 N"],
          answer: 2,
        },
        {
          q: "If the potential difference is 12 V and current is 2 A, resistance is:",
          options: ["4 Ω", "6 Ω", "8 Ω", "10 Ω"],
          answer: 1,
        },
        {
          q: "An object is moved 5 m by a force of 10 N in the direction of force. Work done is:",
          options: ["2 J", "15 J", "20 J", "50 J"],
          answer: 3,
        },
        {
          q: "The time period of a simple pendulum depends on:",
          options: ["Mass of bob only", "Length of string only", "Both mass and length", "Neither mass nor length"],
          answer: 1,
        },
        {
          q: "A body is said to be in uniform motion when it:",
          options: ["Changes speed", "Changes direction", "Covers equal distances in equal intervals of time", "Is at rest"],
          answer: 2,
        },
        {
          q: "The pressure in a liquid increases when:",
          options: ["Depth increases", "Depth decreases", "Area increases", "Gravity decreases"],
          answer: 0,
        },
      ],
    },
    chemistry: {
      easy: [
        {
          q: "Water is a compound made of:",
          options: ["Hydrogen and nitrogen", "Hydrogen and oxygen", "Oxygen and carbon", "Carbon and nitrogen"],
          answer: 1,
        },
        {
          q: "The chemical symbol of sodium is:",
          options: ["S", "Na", "So", "Sn"],
          answer: 1,
        },
        {
          q: "Which of these is an acid?",
          options: ["Vinegar", "Salt", "Sugar", "Oil"],
          answer: 0,
        },
        {
          q: "Air is a:",
          options: ["Compound", "Element", "Mixture", "Metal"],
          answer: 2,
        },
        {
          q: "The chemical symbol of oxygen is:",
          options: ["Ox", "O", "O2", "Om"],
          answer: 1,
        },
        {
          q: "Common salt used in food is:",
          options: ["NaCl", "KCl", "CaCl2", "MgCl2"],
          answer: 0,
        },
        {
          q: "Which one is a metal?",
          options: ["Sulphur", "Carbon", "Iron", "Phosphorus"],
          answer: 2,
        },
        {
          q: "Lemon juice tastes sour because it contains:",
          options: ["Base", "Acid", "Salt", "Sugar"],
          answer: 1,
        },
        {
          q: "Which of these is used as a fuel?",
          options: ["Water", "Oxygen", "Petrol", "Salt"],
          answer: 2,
        },
      ],
      medium: [
        {
          q: "Rusting of iron is an example of:",
          options: ["Neutralization", "Oxidation", "Distillation", "Crystallization"],
          answer: 1,
        },
        {
          q: "The atomic number of an element represents the number of:",
          options: ["Neutrons", "Protons", "Electrons + Protons", "Mass units"],
          answer: 1,
        },
        {
          q: "Which of these is a physical change?",
          options: ["Burning paper", "Melting ice", "Rusting iron", "Cooking food"],
          answer: 1,
        },
        {
          q: "pH value less than 7 indicates:",
          options: ["Acidic", "Basic", "Neutral", "Salty"],
          answer: 0,
        },
        {
          q: "The process of conversion of water vapour into liquid water is called:",
          options: ["Evaporation", "Condensation", "Sublimation", "Filtration"],
          answer: 1,
        },
        {
          q: "Which gas is produced during respiration in humans?",
          options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
          answer: 1,
        },
        {
          q: "Lime water turns milky when passed with:",
          options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
          answer: 1,
        },
        {
          q: "Which of these is an example of a mixture?",
          options: ["Distilled water", "Gold", "Salt solution", "Oxygen"],
          answer: 2,
        },
        {
          q: "The process of converting a liquid into vapour on heating is called:",
          options: ["Condensation", "Evaporation", "Sublimation", "Melting"],
          answer: 1,
        },
      ],
      hard: [
        {
          q: "Which of the following is a balanced chemical equation?",
          options: ["H2 + O2 → H2O", "2H2 + O2 → 2H2O", "H2 + O → H2O", "H + O2 → H2O"],
          answer: 1,
        },
        {
          q: "The valency of oxygen is:",
          options: ["1", "2", "3", "4"],
          answer: 1,
        },
        {
          q: "Which of these represents a molecule of an element?",
          options: ["CO2", "H2O", "NaCl", "O2"],
          answer: 3,
        },
        {
          q: "In the periodic table, elements are arranged in increasing order of their:",
          options: ["Atomic mass", "Atomic number", "Density", "Melting point"],
          answer: 1,
        },
        {
          q: "Which of these is an example of a chemical change?",
          options: ["Melting ice", "Boiling water", "Burning wood", "Breaking glass"],
          answer: 2,
        },
        {
          q: "An atom with 11 protons will belong to:",
          options: ["Hydrogen", "Sodium", "Magnesium", "Chlorine"],
          answer: 1,
        },
      ],
    },
  };

  // Elements
  const yearEl = document.getElementById("year");
  const navToggle = document.querySelector(".nav-toggle");
  const mobileNav = document.querySelector("[data-mobile-nav]");

  const analyzerForm = document.getElementById("analyzerForm");
  const studentClassEl = document.getElementById("studentClass");
  const subjectEl = document.getElementById("subject");

  const quizSection = document.getElementById("quiz");
  const resultsSection = document.getElementById("results");

  const metaClass = document.getElementById("metaClass");
  const metaSubject = document.getElementById("metaSubject");
  const questionCounter = document.getElementById("questionCounter");
  const difficultyTag = document.getElementById("difficultyTag");
  const progressFill = document.getElementById("progressFill");
  const progressBar = document.querySelector(".progress-bar");
  const timerDisplay = document.getElementById("timerDisplay");

  const questionText = document.getElementById("questionText");
  const optionsWrap = document.getElementById("optionsWrap");
  const quizError = document.getElementById("quizError");
  const nextBtn = document.getElementById("nextBtn");
  const quitQuizBtn = document.getElementById("quitQuizBtn");

  const scoreNumber = document.getElementById("scoreNumber");
  const resultHeadline = document.getElementById("resultHeadline");
  const resultMessage = document.getElementById("resultMessage");
  const recommendations = document.getElementById("recommendations");
  const retakeBtn = document.getElementById("retakeBtn");

  const registerBtn = document.getElementById("registerBtn");
  const registerBtn2 = document.getElementById("registerBtn2");
  const registerBtn3 = document.getElementById("registerBtn3");

  // State
  let selectedClass = "";
  let selectedSubject = "";
  let quizQuestions = [];
  let currentIndex = 0;
  let answers = [];
  let timerId = null;
  let timeLeft = 0;
  const QUESTION_TIME_LIMIT = 45; // seconds

  // Init
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  [registerBtn, registerBtn2, registerBtn3].forEach((a) => {
    if (!a) return;
    a.href = GOOGLE_FORM_URL;
  });

  // Mobile nav toggle
  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      mobileNav.hidden = expanded;
    });
    mobileNav.addEventListener("click", (e) => {
      const t = e.target;
      if (t && t.matches("a")) {
        navToggle.setAttribute("aria-expanded", "false");
        mobileNav.hidden = true;
      }
    });
  }

  // Smooth scroll for in-page links with data-scroll
  document.addEventListener("click", (e) => {
    const t = e.target;
    if (!(t instanceof Element)) return;
    const link = t.closest("a[data-scroll]");
    if (!link) return;
    const href = link.getAttribute("href") || "";
    if (!href.startsWith("#")) return;
    e.preventDefault();

    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.querySelector(href);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  function pickQuestions(subjectKey) {
    const bank = QUESTION_BANK[subjectKey];
    if (!bank) return [];

    const picked = [];
    const take = (arr, n) => {
      const copy = arr.slice();
      shuffle(copy);
      return copy.slice(0, n);
    };

    picked.push(...take(bank.easy, DIFFICULTY_DISTRIBUTION.easy));
    picked.push(...take(bank.medium, DIFFICULTY_DISTRIBUTION.medium));
    picked.push(...take(bank.hard, DIFFICULTY_DISTRIBUTION.hard));

    shuffle(picked);
    return picked.slice(0, TOTAL_QUESTIONS);
  }


  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  function showSection(sectionEl) {
    [quizSection, resultsSection].forEach((el) => {
      if (!el) return;
      el.hidden = true;
    });
    if (sectionEl) sectionEl.hidden = false;
  }

  function updateTimerDisplay() {
    if (!timerDisplay) return;
    const clamped = Math.max(0, timeLeft | 0);
    const mm = String(Math.floor(clamped / 60)).padStart(2, "0");
    const ss = String(clamped % 60).padStart(2, "0");
    timerDisplay.textContent = `${mm}:${ss}`;
  }

  function clearTimer() {
    if (timerId !== null) {
      clearInterval(timerId);
      timerId = null;
    }
  }

  function startTimer() {
    clearTimer();
    timeLeft = QUESTION_TIME_LIMIT;
    updateTimerDisplay();

    timerId = setInterval(() => {
      timeLeft -= 1;
      if (timeLeft <= 0) {
        clearTimer();
        // Auto-advance without requiring an answer
        advanceQuestion(true);
        return;
      }
      updateTimerDisplay();
    }, 1000);
  }

  function advanceQuestion(auto = false) {
    const selected = getSelectedAnswerIndex();

    if (!auto) {
      if (selected === null) {
        quizError.hidden = false;
        return;
      }
      answers[currentIndex] = selected;
    } else if (selected !== null) {
      // If user managed to answer before timeout tick, still record it.
      answers[currentIndex] = selected;
    }

    if (currentIndex < TOTAL_QUESTIONS - 1) {
      currentIndex++;
      renderQuestion();
      return;
    }

    const score = computeScore();
    clearTimer();
    renderResults(score);
    showSection(resultsSection);
    resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function renderQuestion() {
    const q = quizQuestions[currentIndex];
    if (!q) return;

    quizError.hidden = true;

    metaClass.textContent = `Class: ${selectedClass}th`;
    metaSubject.textContent = `Subject: ${capitalize(selectedSubject)}`;

    questionCounter.textContent = `Question ${currentIndex + 1}/${TOTAL_QUESTIONS}`;
    difficultyTag.textContent = capitalize(q.difficulty || inferDifficulty(q));

    const progressNow = currentIndex + 1;
    const pct = Math.round((progressNow / TOTAL_QUESTIONS) * 100);
    progressFill.style.width = `${pct}%`;
    if (progressBar) progressBar.setAttribute("aria-valuenow", String(progressNow));

    questionText.textContent = q.q;
    optionsWrap.innerHTML = "";

    const name = "quizOption";
    q.options.forEach((opt, idx) => {
      const id = `opt_${currentIndex}_${idx}`;
      const label = document.createElement("label");
      label.className = "option";
      label.setAttribute("for", id);
      label.dataset.selected = "false";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = name;
      input.id = id;
      input.value = String(idx);
      input.setAttribute("aria-label", opt);

      const span = document.createElement("div");
      span.className = "opt-text";
      span.textContent = opt;

      label.appendChild(input);
      label.appendChild(span);
      optionsWrap.appendChild(label);

      input.addEventListener("change", () => {
        for (const el of optionsWrap.querySelectorAll(".option")) {
          el.dataset.selected = "false";
        }
        label.dataset.selected = "true";
        quizError.hidden = true;
      });
    });

    nextBtn.textContent = currentIndex === TOTAL_QUESTIONS - 1 ? "Submit Test" : "Next Question";

    startTimer();
  }

  function inferDifficulty(q) {
    // Fallback if any question missing difficulty; we keep it stable by tagging during pick.
    return q && q.__difficulty ? q.__difficulty : "easy";
  }

  function tagDifficulty(subjectKey) {
    const bank = QUESTION_BANK[subjectKey];
    if (!bank) return;
    for (const q of bank.easy) q.__difficulty = "easy";
    for (const q of bank.medium) q.__difficulty = "medium";
    for (const q of bank.hard) q.__difficulty = "hard";
  }

  function getSelectedAnswerIndex() {
    const checked = optionsWrap.querySelector('input[type="radio"]:checked');
    if (!checked) return null;
    const v = Number(checked.value);
    return Number.isFinite(v) ? v : null;
  }

  function computeScore() {
    let score = 0;
    for (let i = 0; i < quizQuestions.length; i++) {
      const q = quizQuestions[i];
      if (answers[i] === q.answer) score++;
    }
    return score;
  }

  function renderResults(score) {
    scoreNumber.textContent = String(score);

    let headline = "Your message";
    let message = "";
    if (score <= 2) {
      headline = "Strong potential — build your fundamentals";
      message =
        "You have potential but your fundamentals need strengthening. At Sri Vijaya Sai Coaching Center we focus on building strong concepts step by step.";
    } else if (score === 3) {
      headline = "Good understanding — push to the next level";
      message = "You have good understanding. With structured learning and guidance you can perform much better.";
    } else {
      headline = "Excellent — ready for advanced learning";
      message =
        "Excellent performance! In our academy we introduce advanced +1 and +2 level concepts early to prepare students for competitive exams.";
    }

    resultHeadline.textContent = headline;
    resultMessage.textContent = message;

    // Simple dynamic recommendation bullets based on score
    recommendations.innerHTML = "";
    const items =
      score <= 2
        ? [
            "Step-by-step concept building",
            "Daily practice sets for basics",
            "Doubt clearing in every class",
            "Weekly tests to track improvement",
          ]
        : score === 3
          ? [
              "Structured topic-wise learning",
              "Problem-solving shortcuts + clarity",
              "Weekly tests with analysis",
              "Regular doubt clearing sessions",
            ]
          : [
              "Early +1/+2 foundation modules",
              "Higher-level problem solving",
              "Speed + accuracy training",
              "Advanced weekly test series",
            ];

    for (const t of items) {
      const li = document.createElement("li");
      li.textContent = t;
      recommendations.appendChild(li);
    }
  }

  function resetQuiz() {
    quizQuestions = [];
    currentIndex = 0;
    answers = [];
    clearTimer();
  }

  function capitalize(s) {
    if (!s) return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  // Events
  analyzerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const c = studentClassEl.value;
    const sub = subjectEl.value;
    if (!c || !sub) return;

    selectedClass = c;
    selectedSubject = sub;

    resetQuiz();
    tagDifficulty(sub);
    quizQuestions = pickQuestions(sub).map((q) => ({
      ...q,
      difficulty: q.__difficulty || q.difficulty || "easy",
    }));

    showSection(quizSection);
    quizSection.scrollIntoView({ behavior: "smooth", block: "start" });
    renderQuestion();
  });

  nextBtn.addEventListener("click", () => {
    advanceQuestion(false);
  });

  quitQuizBtn.addEventListener("click", () => {
    resetQuiz();
    showSection(null);
    document.querySelector("#skill-test")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  retakeBtn.addEventListener("click", () => {
    if (!selectedSubject) {
      document.querySelector("#skill-test")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    tagDifficulty(selectedSubject);
    resetQuiz();
    quizQuestions = pickQuestions(selectedSubject).map((q) => ({
      ...q,
      difficulty: q.__difficulty || q.difficulty || "easy",
    }));
    showSection(quizSection);
    quizSection.scrollIntoView({ behavior: "smooth", block: "start" });
    renderQuestion();
  });
})();

