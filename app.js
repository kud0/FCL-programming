// Training Data - Simplified for client view
const trainingDays = [
    {
        day: 1,
        phase: "PHASE 1",
        phaseName: "REACTIVATION",
        title: "Aerobic Base & Movement Reactivation",
        subtitle: "Establish aerobic base, reactivate movement patterns",
        trimp: "120-150",
        intensity: "LOW",
        focus: "AEROBIC",
        workout: {
            morning: {
                title: "MORNING SESSION (45 min)",
                warmup: [
                    "500m Row @ RPE 3",
                    "Dynamic mobility: leg swings, arm circles, hip circles",
                    "2 rounds:",
                    "• 10 air squats (slow tempo)",
                    "• 10 push-ups (quality focus)",
                    "• 10 hollow rocks",
                    "• 10 superman holds"
                ],
                main: [
                    "Zone 2 Aerobic (30 min) @ RPE 3-4",
                    "3 rounds for quality:",
                    "• 40/35 cal Bike",
                    "• 35/30 cal Row",
                    "• 30/25 cal Ski",
                    "• Rest 2 min between rounds",
                    "**Goal**: Maintain conversational pace, nasal breathing when possible"
                ],
                cooldown: [
                    "Light walk",
                    "Static stretching focus on hip flexors, hamstrings, shoulders"
                ]
            },
            evening: {
                title: "AFTERNOON/EVENING SESSION (30 min)",
                skills: [
                    "Skill & Technique @ RPE 4-5",
                    "15 min EMOM:",
                    "• Min 1: 3-5 Strict Pull-ups (scale as needed)",
                    "• Min 2: 5 Wall balls (light weight)",
                    "• Min 3: 30s Handstand hold (scale to wall walk)",
                    "Focus: Perfect positions, no fatigue accumulation"
                ]
            }
        },
        nutrition: {
            carbs: "300g",
            protein: "150g",
            fats: "70g",
            timing: "Carbs within 30 min (research shows 30% better next-day performance)"
        },
        recovery: [
            "10 min light mobility",
            "Eat carbs within 30 min post-workout",
            "Target 8-9 hours sleep",
            "Hydrate well throughout day"
        ],
        tips: "Keep intensity LOW. This is about movement quality, not pushing hard. Your body is reactivating after time off."
    },
    {
        day: 2,
        phase: "PHASE 1",
        phaseName: "REACTIVATION",
        title: "Strength Reactivation",
        subtitle: "Reestablish strength patterns, minimal interference",
        trimp: "100-120",
        intensity: "MODERATE",
        focus: "STRENGTH",
        workout: {
            main: {
                title: "SINGLE SESSION (60 min)",
                warmup: [
                    "5 min bike @ RPE 2",
                    "Barbell complex with empty bar: 5 reps each",
                    "• Deadlift",
                    "• Bent row",
                    "• Front squat",
                    "• Press",
                    "• Back squat"
                ],
                strength: [
                    "Strength Work (35 min) @ RPE 5-6",
                    "*Based on research: strength unaffected by separated endurance work*",
                    "",
                    "A. Back Squat",
                    "• 5 sets of 5 reps @ 60-70% (estimate if unknown)",
                    "• Rest 2-3 min between sets",
                    "• Focus: Depth, knee tracking, upright torso",
                    "",
                    "B. Press/Push Press",
                    "• 5 sets of 3 reps @ 65-75%",
                    "• Rest 2 min between sets",
                    "",
                    "C. Deadlift",
                    "• 3 sets of 5 reps @ 60-70%",
                    "• Rest 2-3 min between sets"
                ],
                accessory: [
                    "Accessory (10 min) @ RPE 4",
                    "3 rounds, quality:",
                    "• 10 Ring rows",
                    "• 15 GHD sit-ups (scale to abmat)",
                    "• 20 Band pull-aparts"
                ]
            }
        },
        nutrition: {
            carbs: "350g",
            protein: "160g",
            fats: "75g",
            timing: "Immediate post-workout: 40g carbs + 20g protein"
        },
        recovery: [
            "Contrast shower: 3 rounds of hot (2 min) / cold (30s)",
            "Foam rolling: 10 min focus on legs and back",
            "8+ hours sleep",
            "Monitor recovery metrics"
        ],
        tips: "Don't chase heavy weights. Focus on movement quality and muscle activation. You're rebuilding strength patterns."
    },
    {
        day: 3,
        phase: "PHASE 1",
        phaseName: "REACTIVATION",
        title: "Mixed Modal Conditioning",
        subtitle: "CrossFit-specific energy system, movement integration",
        trimp: "140-160",
        intensity: "MODERATE",
        focus: "MIXED MODAL",
        workout: {
            morning: {
                title: "MORNING SESSION (45 min)",
                warmup: [
                    "3 rounds:",
                    "• 200m run @ increasing pace",
                    "• 10 burpees (smooth)",
                    "• 10 box step-ups"
                ],
                metcon: [
                    "Main Workout @ RPE 6-7",
                    "*Threshold work - where adaptation happens*",
                    "",
                    "21-15-9",
                    "• Thrusters (65/45 lbs)",
                    "• Pull-ups (scale as needed)",
                    "**Goal time**: 8-12 min",
                    "**Rest 5 min**",
                    "",
                    "Then:",
                    "3 rounds @ RPE 5:",
                    "• 15 Wall balls",
                    "• 12 American KB swings (35/26 lbs)",
                    "• 9 Box jumps (step down)",
                    "• Rest 2 min between rounds"
                ],
                cooldown: [
                    "800m recovery walk",
                    "Stretching routine"
                ]
            },
            afternoon: {
                title: "RECOVERY AFTERNOON",
                activities: [
                    "30 min Zone 2 bike or walk",
                    "Mobility work: 20 min",
                    "Sauna or hot bath: 15-20 min"
                ]
            }
        },
        nutrition: {
            carbs: "375g",
            protein: "150g",
            fats: "70g",
            timing: "Eat carbs before AND after. This is threshold work - fuel it properly!"
        },
        recovery: [
            "Active recovery walk post-workout",
            "Sauna or hot bath in afternoon",
            "Stretch hip flexors and shoulders",
            "Legs up the wall 10 min before bed"
        ],
        tips: "This should feel challenging but controlled. RPE 6-7 means you can still talk in short sentences."
    },
    {
        day: 4,
        phase: "PHASE 1",
        phaseName: "REACTIVATION",
        title: "Active Recovery & Skill",
        subtitle: "Recovery, skill refinement without fatigue",
        trimp: "60-80",
        intensity: "VERY LOW",
        focus: "RECOVERY + SKILLS",
        workout: {
            main: {
                title: "SINGLE SESSION (45 min)",
                activities: [
                    "Zone 2 Movement (20 min) @ RPE 2-3",
                    "Choice of:",
                    "• Easy bike",
                    "• Light row",
                    "• Walk"
                ],
                skills: [
                    "Skill Practice (20 min) @ RPE 3-4",
                    "• 10 min double under practice (singles if needed)",
                    "• 10 min kipping progression or muscle-up transitions"
                ],
                mobility: [
                    "Mobility & Recovery (5 min)",
                    "• Full body stretching",
                    "• Focus on problem areas"
                ]
            }
        },
        nutrition: {
            carbs: "250g",
            protein: "140g",
            fats: "80g",
            timing: "Increase carb intake to 5-6g per kg body weight. Hydration: minimum 35ml per kg body weight."
        },
        recovery: [
            "Epsom salt bath",
            "Meditation 10 min",
            "No screens 1hr before bed",
            "Sleep target: 8-9 hours"
        ],
        tips: "Recovery is when adaptation happens. Don't skip this. Light skill work maintains neurological patterns."
    },
    {
        day: 5,
        phase: "PHASE 1",
        phaseName: "REACTIVATION",
        title: "Competition Movement Patterns",
        subtitle: "Test competition movements, assess current capacity",
        trimp: "150-180",
        intensity: "MODERATE-HIGH",
        focus: "TESTING",
        workout: {
            main: {
                title: "MAIN SESSION (60 min)",
                warmup: [
                    "General warm-up (15 min)",
                    "Movement-specific prep"
                ],
                test: [
                    "Competition Simulation @ RPE 7-8",
                    "*Testing current capacity with competition movements*",
                    "",
                    "A. **Baseline Test**",
                    "For time:",
                    "• 500m Row",
                    "• 40 Air squats",
                    "• 30 Sit-ups",
                    "• 20 Push-ups",
                    "• 10 Pull-ups",
                    "Record time for end comparison",
                    "",
                    "**Rest 5 min**",
                    "",
                    "B. **Heavy Single**",
                    "• Work up to heavy single Clean & Jerk",
                    "• 15 min time cap",
                    "• Focus: Technique over load",
                    "",
                    "**Rest 5 min**",
                    "",
                    "C. **Capacity Test**",
                    "5 min AMRAP:",
                    "• 5 Power snatches (75/55 lbs)",
                    "• 10 Box jump overs (24/20\")",
                    "• 15 Double unders"
                ],
                cooldown: [
                    "Cool-down & Analysis (15 min)",
                    "• Record all scores",
                    "• Identify limiters",
                    "• Full cool-down routine"
                ]
            }
        },
        nutrition: {
            carbs: "350g",
            protein: "155g",
            fats: "70g",
            timing: "This is testing day - fuel properly 2-3 hours before with carbs + protein"
        },
        recovery: [
            "Ice bath 10-15 min post-workout",
            "Record all benchmark scores",
            "Extra hydration + electrolytes",
            "Review performance and technique notes"
        ],
        tips: "This is your baseline test. Give genuine effort (RPE 7-8) but save the true 100% for competition day."
    },
    {
        day: 6,
        phase: "PHASE 2",
        phaseName: "INTENSIFICATION",
        title: "Threshold Testing",
        subtitle: "Find your competition pace",
        trimp: "180-200",
        intensity: "HIGH",
        focus: "THRESHOLD",
        workout: {
            main: {
                title: "COMPETITION SIMULATION",
                warmup: [
                    "15 min progressive warm-up",
                    "Include all movement patterns",
                    "Build to 80% intensity"
                ],
                test: [
                    "Competition WOD simulation:",
                    "21-15-9",
                    "• Thrusters (95/65 lbs)",
                    "• Pull-ups",
                    "",
                    "Rest 10 min, then:",
                    "",
                    "3 rounds for time:",
                    "• 400m run",
                    "• 21 kettlebell swings",
                    "• 12 box jumps",
                    "",
                    "Track times and how you feel"
                ]
            }
        },
        nutrition: {
            carbs: "400g",
            protein: "160g",
            fats: "70g",
            timing: "Carb load 2-3 hrs before. Electrolytes during."
        },
        recovery: [
            "Immediate post-workout nutrition",
            "Full body stretching",
            "Normatec or compression",
            "8-9 hours sleep critical"
        ],
        tips: "This is your reality check. Go 85-90% effort. Save 100% for competition day."
    },
    {
        day: 7,
        phase: "PHASE 2",
        phaseName: "INTENSIFICATION",
        title: "Strength Maintenance",
        subtitle: "Maintain power, don't build",
        trimp: "120-140",
        intensity: "MODERATE",
        focus: "POWER",
        workout: {
            main: {
                title: "POWER SESSION (40 min)",
                warmup: [
                    "Dynamic warm-up with bands",
                    "Box jumps progressing height",
                    "Medicine ball slams"
                ],
                power: [
                    "Power Clean:",
                    "• 5x2 @ 75-80%",
                    "• Focus on bar speed",
                    "",
                    "Push Jerk:",
                    "• 5x2 @ 70-75%",
                    "• Quick dip and drive"
                ],
                accessory: [
                    "3 rounds, quality:",
                    "• 5 broad jumps",
                    "• 10 med ball throws",
                    "• 15 band pull-aparts"
                ]
            }
        },
        nutrition: {
            carbs: "350g",
            protein: "165g",
            fats: "75g",
            timing: "Protein + carbs within 30 min"
        },
        recovery: [
            "Yoga or stretching class",
            "Massage gun on tight spots",
            "Hydrate with electrolytes",
            "Visualize competition success"
        ],
        tips: "Fast and snappy. If bar speed slows, reduce weight. Power is about speed, not load."
    },
    {
        day: 8,
        phase: "PHASE 2",
        phaseName: "INTENSIFICATION",
        title: "Lactate Tolerance",
        subtitle: "Build ability to work through burn",
        trimp: "160-180",
        intensity: "HIGH",
        focus: "GLYCOLYTIC",
        workout: {
            main: {
                title: "LACTATE SESSION",
                warmup: [
                    "10 min progressive row",
                    "Dynamic stretching",
                    "2 rounds of workout movements"
                ],
                intervals: [
                    "5 rounds:",
                    "90 seconds MAX effort:",
                    "• Max cal row",
                    "Rest 3 minutes",
                    "",
                    "Then:",
                    "3 rounds:",
                    "2 min AMRAP:",
                    "• 10 burpees",
                    "• 10 box jump overs",
                    "Rest 2 minutes"
                ],
                cooldown: [
                    "15 min easy bike",
                    "Flush out lactate"
                ]
            }
        },
        nutrition: {
            carbs: "425g",
            protein: "155g",
            fats: "65g",
            timing: "High-carb meal 3 hrs before. BCAAs during."
        },
        recovery: [
            "Cold plunge or ice bath",
            "Legs up wall 15 min",
            "Extra sleep tonight",
            "Tart cherry juice for inflammation"
        ],
        tips: "This will hurt. That's the point. Learn to embrace the burn and keep moving."
    },
    {
        day: 9,
        phase: "PHASE 2",
        phaseName: "INTENSIFICATION",
        title: "Mixed Modal Test",
        subtitle: "Full competition rehearsal",
        trimp: "200-220",
        intensity: "VERY HIGH",
        focus: "COMPETITION",
        workout: {
            main: {
                title: "COMPETITION DAY SIMULATION",
                prep: [
                    "Treat like competition:",
                    "• Same wake time",
                    "• Same breakfast",
                    "• Same warm-up routine"
                ],
                events: [
                    "Event 1 (9am):",
                    "1RM Clean & Jerk",
                    "12 min to establish",
                    "",
                    "Rest 2 hours",
                    "",
                    "Event 2 (11am):",
                    "For time:",
                    "• 30 cal row",
                    "• 20 C2B pull-ups",
                    "• 10 bar muscle-ups",
                    "",
                    "Rest 2 hours",
                    "",
                    "Event 3 (2pm):",
                    "AMRAP 7:",
                    "• 7 thrusters (115/75)",
                    "• 7 box jump overs",
                    "• 7 toes-to-bar"
                ]
            }
        },
        nutrition: {
            carbs: "450g",
            protein: "160g",
            fats: "70g",
            timing: "Competition day nutrition protocol"
        },
        recovery: [
            "Full recovery protocol",
            "Professional massage if possible",
            "Normatec sessions",
            "Mental debrief - what worked?"
        ],
        tips: "This is your dress rehearsal. Learn what works for fuel, timing, warm-up. Take notes!"
    },
    {
        day: 10,
        phase: "PHASE 2",
        phaseName: "INTENSIFICATION",
        title: "Recovery & Strategy",
        subtitle: "Active recovery + mental prep",
        trimp: "60-80",
        intensity: "VERY LOW",
        focus: "RECOVERY",
        workout: {
            main: {
                title: "ACTIVE RECOVERY",
                morning: [
                    "30 min easy swim or bike",
                    "Keep heart rate under 120"
                ],
                afternoon: [
                    "Competition strategy session:",
                    "• Review likely workouts",
                    "• Plan pacing strategies",
                    "• Visualize success",
                    "• Prepare equipment"
                ],
                mobility: [
                    "Full body mobility:",
                    "Focus on any tight areas",
                    "Extra time on problem spots"
                ]
            }
        },
        nutrition: {
            carbs: "300g",
            protein: "150g",
            fats: "80g",
            timing: "Begin carb loading phase"
        },
        recovery: [
            "Full rest day mentally",
            "Sauna session",
            "Early to bed",
            "No intense conversations"
        ],
        tips: "Trust your preparation. The hard work is done. Now it's about recovery and mindset."
    },
    {
        day: 11,
        phase: "PHASE 3",
        phaseName: "COMPETITION PEAKING",
        title: "Sharpening",
        subtitle: "Short, intense efforts",
        trimp: "100-120",
        intensity: "HIGH",
        focus: "SPEED",
        workout: {
            main: {
                title: "SHARPENING SESSION (30 min)",
                warmup: [
                    "15 min gradual warm-up",
                    "Include all movement patterns"
                ],
                speed: [
                    "5 x 30 sec MAX efforts:",
                    "• Round 1: Row",
                    "• Round 2: Bike",
                    "• Round 3: Burpees",
                    "• Round 4: Double-unders",
                    "• Round 5: Thrusters (empty bar)",
                    "",
                    "Rest 2 min between efforts"
                ],
                cooldown: [
                    "15 min easy movement",
                    "Full stretching routine"
                ]
            }
        },
        nutrition: {
            carbs: "400g",
            protein: "150g",
            fats: "70g",
            timing: "Carb loading continues"
        },
        recovery: [
            "Light massage",
            "Compression garments",
            "Hydrate aggressively",
            "Visualize success"
        ],
        tips: "Short and sharp. You should feel FAST and powerful. If not, stop and rest more."
    },
    {
        day: 12,
        phase: "PHASE 3",
        phaseName: "COMPETITION PEAKING",
        title: "Movement Prep",
        subtitle: "Touch all movements lightly",
        trimp: "80-100",
        intensity: "MODERATE",
        focus: "TECHNIQUE",
        workout: {
            main: {
                title: "MOVEMENT TOUCH (25 min)",
                practice: [
                    "3 rounds, NOT for time:",
                    "• 5 clean & jerks (50%)",
                    "• 5 muscle-ups or pull-ups",
                    "• 20 double-unders",
                    "• 5 handstand push-ups",
                    "",
                    "Move perfectly, no fatigue"
                ],
                activation: [
                    "2 x 100m sprint @ 80%",
                    "Rest 2 min between",
                    "",
                    "3 x 5 box jumps (competition height)"
                ]
            }
        },
        nutrition: {
            carbs: "425g",
            protein: "145g",
            fats: "65g",
            timing: "Practice competition day timing"
        },
        recovery: [
            "Foam roll problem areas",
            "Hot bath with Epsom salts",
            "Pack competition bag",
            "Early to bed - 9+ hours"
        ],
        tips: "Just touching movements. Building confidence. Your fitness is there, trust it."
    },
    {
        day: 13,
        phase: "PHASE 3",
        phaseName: "COMPETITION PEAKING",
        title: "Final Prep",
        subtitle: "Light movement, mostly rest",
        trimp: "60-80",
        intensity: "LOW",
        focus: "ACTIVATION",
        workout: {
            main: {
                title: "ACTIVATION DAY",
                morning: [
                    "20 min easy bike or walk",
                    "Light stretching"
                ],
                afternoon: [
                    "Competition movement check:",
                    "• 3-5 reps each competition movement",
                    "• At 50-60% intensity",
                    "• Focus on feeling smooth"
                ],
                mental: [
                    "Review competition strategy",
                    "Visualize each event",
                    "Prepare playlist/routine"
                ]
            }
        },
        nutrition: {
            carbs: "450g",
            protein: "140g",
            fats: "60g",
            timing: "High carb, low fiber. Easy digestion."
        },
        recovery: [
            "Legs up wall 20 min",
            "Light stretching only",
            "Hydrate with electrolytes",
            "No new foods!"
        ],
        tips: "The hay is in the barn. Stay relaxed, trust your training. You're ready."
    },
    {
        day: 14,
        phase: "PHASE 3",
        phaseName: "COMPETITION PEAKING",
        title: "Rest Day",
        subtitle: "Complete rest before competition",
        trimp: "0",
        intensity: "NONE",
        focus: "REST",
        workout: {
            main: {
                title: "COMPLETE REST",
                activities: [
                    "Optional 15 min walk",
                    "Light stretching if needed",
                    "Stay off your feet mostly"
                ],
                preparation: [
                    "Check all equipment",
                    "Prepare meals for tomorrow",
                    "Review venue/schedule",
                    "Set multiple alarms"
                ],
                mental: [
                    "Positive self-talk",
                    "Review your WHY",
                    "Trust your preparation",
                    "Early to bed - 8pm latest"
                ]
            }
        },
        nutrition: {
            carbs: "400g",
            protein: "140g",
            fats: "60g",
            timing: "Normal meals. Dinner by 6pm."
        },
        recovery: [
            "No intense stretching",
            "Relaxation techniques",
            "Avoid stress/excitement",
            "9+ hours sleep target"
        ],
        tips: "Tomorrow you compete. Today you rest. Don't overthink. You've done the work."
    },
    {
        day: 15,
        phase: "PHASE 3",
        phaseName: "COMPETITION PEAKING",
        title: "Final Movement Prep",
        subtitle: "Competition minus 1 day",
        trimp: "40-60",
        intensity: "LOW",
        focus: "PRIME",
        workout: {
            main: {
                title: "COMPETITION EVE",
                morning: [
                    "10 min easy movement",
                    "Dynamic warm-up",
                    "No static stretching!"
                ],
                primer: [
                    "3 rounds, easy pace:",
                    "• 5 burpees",
                    "• 10 air squats",
                    "• 5 push-ups",
                    "• 10 jumping jacks",
                    "",
                    "Then:",
                    "2 x 50m sprint @ 70%",
                    "Just to feel fast"
                ],
                final: [
                    "Pack competition bag",
                    "Double-check everything",
                    "Eat familiar foods only",
                    "Bed by 8:30pm"
                ]
            }
        },
        nutrition: {
            carbs: "400g",
            protein: "140g",
            fats: "55g",
            timing: "Last meal by 6pm. Keep it simple."
        },
        recovery: [
            "No new recovery methods",
            "Light walk after dinner",
            "Meditation or breathing",
            "Phone off by 7pm"
        ],
        tips: "You're ready. Trust yourself. Tomorrow you show what you've built. Go get it!"
    }
];

// App State
let currentDay = 1;
let currentView = 'workout';
let touchStartX = 0;
let touchEndX = 0;
let isDragging = false;

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupEventListeners();
    setTimeout(() => {
        document.getElementById('loadingScreen').style.display = 'none';
    }, 2500);
});

function initializeApp() {
    renderDayCards();
    updateDisplay();
    updateProgress();
    updateCountdown();
}

function renderDayCards() {
    const wrapper = document.getElementById('dayCardsWrapper');
    wrapper.innerHTML = '';

    trainingDays.forEach(day => {
        const card = createDayCard(day);
        wrapper.appendChild(card);
    });
}

function createDayCard(day) {
    const card = document.createElement('div');
    card.className = 'day-card';
    card.innerHTML = `
        <div class="day-card-content">
            <div class="content-view active" data-view="workout">
                ${createWorkoutContent(day)}
            </div>
            <div class="content-view" data-view="nutrition">
                ${createNutritionContent(day)}
            </div>
            <div class="content-view" data-view="recovery">
                ${createRecoveryContent(day)}
            </div>
            <div class="content-view" data-view="tips">
                ${createTipsContent(day)}
            </div>
        </div>
    `;
    return card;
}

function createWorkoutContent(day) {
    let content = `
        <h2 class="day-title">${day.title}</h2>
        <p class="day-subtitle">${day.subtitle}</p>
    `;

    // Helper function to create a subsection with clear labeling
    function createSubsection(sectionData, parentTitle) {
        let subsectionContent = '';
        const subsections = [
            { key: 'warmup', label: '🔥 WARM-UP', icon: 'warmup' },
            { key: 'main', label: '💪 MAIN WORK', icon: 'main' },
            { key: 'strength', label: '🏋️ STRENGTH', icon: 'strength' },
            { key: 'power', label: '⚡ POWER', icon: 'power' },
            { key: 'metcon', label: '🔄 CONDITIONING', icon: 'metcon' },
            { key: 'skills', label: '🎯 SKILLS', icon: 'skills' },
            { key: 'test', label: '📊 TESTING', icon: 'test' },
            { key: 'intervals', label: '⏱️ INTERVALS', icon: 'intervals' },
            { key: 'speed', label: '🏃 SPEED WORK', icon: 'speed' },
            { key: 'activation', label: '🔋 ACTIVATION', icon: 'activation' },
            { key: 'practice', label: '🎯 PRACTICE', icon: 'practice' },
            { key: 'accessory', label: '➕ ACCESSORY', icon: 'accessory' },
            { key: 'finisher', label: '🏁 FINISHER', icon: 'finisher' },
            { key: 'cooldown', label: '❄️ COOL-DOWN', icon: 'cooldown' },
            { key: 'mobility', label: '🤸 MOBILITY', icon: 'mobility' },
            { key: 'prep', label: '🎪 PREPARATION', icon: 'prep' },
            { key: 'events', label: '🏆 COMPETITION EVENTS', icon: 'events' },
            { key: 'morning', label: '🌅 MORNING', icon: 'morning' },
            { key: 'afternoon', label: '☀️ AFTERNOON', icon: 'afternoon' },
            { key: 'primer', label: '🎯 PRIMER', icon: 'primer' },
            { key: 'activities', label: '📋 ACTIVITIES', icon: 'activities' },
            { key: 'optional', label: '🔄 OPTIONAL', icon: 'optional' },
            { key: 'mental', label: '🧠 MENTAL PREP', icon: 'mental' },
            { key: 'preparation', label: '🎪 PREPARATION', icon: 'preparation' },
            { key: 'final', label: '🏁 FINAL PREP', icon: 'final' }
        ];

        subsections.forEach(subsection => {
            if (sectionData[subsection.key] && sectionData[subsection.key].length > 0) {
                subsectionContent += `
                    <div class="workout-subsection">
                        <h4 class="subsection-title ${subsection.icon}">${subsection.label}</h4>
                        <div class="subsection-content">
                            <ul class="exercise-list">
                                ${sectionData[subsection.key].map(ex => {
                                    // Classify based on CrossFit workout structure understanding
                                    let itemClass = 'exercise-item';

                                    // 1. WORKOUT STRUCTURE - defines HOW you do the workout
                                    if (ex.match(/^\d+\s+rounds/i) ||                    // "3 rounds for quality"
                                        ex.match(/^\d+-\d+-\d+/) ||                      // "21-15-9"
                                        ex.match(/^(For time|AMRAP|EMOM|Every)/i) ||     // workout formats
                                        ex.match(/^\d+\s*min\s+(AMRAP|EMOM)/i)) {        // "10 min AMRAP"
                                        itemClass += ' workout-structure';
                                    }

                                    // 2. INDIVIDUAL MOVEMENTS - what you actually do
                                    else if (ex.match(/^[-•]\s*\d+/) ||                  // "• 40/35 cal Bike"
                                             ex.match(/^[-•]\s*[A-Z]\.\s/) ||            // "• A. Back Squat"
                                             ex.match(/^[-•]\s*(Thrusters?|Pull-ups?|Push-ups?|Squats?|Row|Bike|Ski|Run|Clean|Snatch|Deadlift|Press|Burpee|Wall ball|Box jump|Double under|Handstand|Muscle-up)/i)) {
                                        itemClass += ' movement';
                                    }

                                    // 3. REST/TIMING INSTRUCTIONS
                                    else if (ex.match(/^[-•]\s*Rest/i) ||                // "• Rest 2 min"
                                             ex.match(/^[-•]\s*\d+\s*sets/i) ||          // "• 5 sets"
                                             ex.match(/^[-•]\s*Time cap/i) ||            // "• Time cap: 15 min"
                                             ex.match(/^\*\*Rest\*\*/i)) {               // "**Rest 5 min**"
                                        itemClass += ' instruction';
                                    }

                                    // 4. COACHING CUES - goals, focus points
                                    else if (ex.includes('**Goal**') ||                  // "**Goal**: 8-12 min"
                                             ex.includes('**Focus**') ||                 // "**Focus**: Quality"
                                             ex.match(/^\*".*"\*$/) ||                   // italic quotes
                                             ex.match(/^\*\*.*\*\*:/) ||                 // "**Something**:"
                                             ex.match(/Focus:|Goal:/i)) {                // focus/goal instructions
                                        itemClass += ' coaching-cue';
                                    }

                                    // 5. EXPLANATIONS - everything else (section headers, context)
                                    else {
                                        itemClass += ' explanation';
                                    }

                                    // Process special formatting
                                    let processedEx = ex;
                                    processedEx = processedEx.replace(/@\s*RPE\s*(\d+(?:-\d+)?)/gi, '<span class="rpe-indicator">RPE $1</span>');
                                    processedEx = processedEx.replace(/\*\*Goal\*\*:\s*([^*\n]+)/gi, '<span class="goal-indicator">Goal: $1</span>');
                                    processedEx = processedEx.replace(/\*\*Goal\s*time\*\*:\s*([^*\n]+)/gi, '<span class="goal-indicator">Goal time: $1</span>');
                                    processedEx = processedEx.replace(/Rest\s+(\d+(?:-\d+)?)\s*min/gi, '<span class="rest-indicator">Rest $1 min</span>');

                                    return `<li class="${itemClass}">${processedEx}</li>`;
                                }).join('')}
                            </ul>
                        </div>
                    </div>
                `;
            }
        });

        return subsectionContent;
    }

    // Count total sessions
    const sessions = [];
    if (day.workout.morning) sessions.push({data: day.workout.morning, key: 'morning'});
    if (day.workout.main) sessions.push({data: day.workout.main, key: 'main'});
    if (day.workout.evening) sessions.push({data: day.workout.evening, key: 'evening'});
    if (day.workout.afternoon) sessions.push({data: day.workout.afternoon, key: 'afternoon'});

    // Display sessions with proper numbering
    sessions.forEach((session, index) => {
        let sessionTitle;
        if (sessions.length === 1) {
            sessionTitle = 'WORKOUT';
        } else {
            sessionTitle = `SESSION ${index + 1}`;
        }

        content += `
            <div class="workout-section">
                <h3 class="section-title session-${index + 1}">${sessionTitle}</h3>
                <div class="workout-details">
                    ${createSubsection(session.data, `SESSION_${index + 1}`)}
                </div>
            </div>
        `;
    });

    return content;
}

function createNutritionContent(day) {
    return `
        <h2 class="day-title">Nutrition Plan</h2>
        <p class="day-subtitle">Day ${day.day} fuel strategy</p>
        <div class="nutrition-grid">
            <div class="macro-card">
                <span class="macro-label">Carbohydrates</span>
                <span class="macro-value carbs">${day.nutrition.carbs}</span>
            </div>
            <div class="macro-card">
                <span class="macro-label">Protein</span>
                <span class="macro-value protein">${day.nutrition.protein}</span>
            </div>
            <div class="macro-card">
                <span class="macro-label">Fats</span>
                <span class="macro-value fats">${day.nutrition.fats}</span>
            </div>
        </div>
        <div class="highlight-box">
            <p>⏰ ${day.nutrition.timing}</p>
        </div>
    `;
}

function createRecoveryContent(day) {
    return `
        <h2 class="day-title">Recovery Protocol</h2>
        <p class="day-subtitle">Optimize your adaptation</p>
        <ul class="recovery-checklist">
            ${day.recovery.map(item => `
                <li class="recovery-item">
                    <div class="check-circle"></div>
                    <span>${item}</span>
                </li>
            `).join('')}
        </ul>
    `;
}

function createTipsContent(day) {
    return `
        <h2 class="day-title">Coach's Tips</h2>
        <p class="day-subtitle">Key focus for Day ${day.day}</p>
        <div class="highlight-box">
            <p>${day.tips}</p>
        </div>
        <div class="workout-section">
            <h3 class="section-title">PHASE FOCUS</h3>
            <div class="workout-details">
                <p><strong>${day.phaseName}</strong></p>
                <p>Intensity: <strong>${day.intensity}</strong></p>
                <p>Training focus: <strong>${day.focus}</strong></p>
                <p>Target TRIMP: <strong>${day.trimp}</strong></p>
            </div>
        </div>
    `;
}

function setupEventListeners() {
    // Navigation buttons
    document.getElementById('prevDay').addEventListener('click', () => navigateDay(-1));
    document.getElementById('nextDay').addEventListener('click', () => navigateDay(1));

    // Bottom navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const view = e.currentTarget.dataset.view;
            switchView(view);
        });
    });

    // Touch events for swipe
    const container = document.getElementById('swipeContainer');

    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });

    // Mouse events for desktop testing
    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mouseleave', handleMouseUp);
}

function handleTouchStart(e) {
    touchStartX = e.touches[0].clientX;
    isDragging = true;
}

function handleTouchMove(e) {
    if (!isDragging) return;
    touchEndX = e.touches[0].clientX;

    const diff = touchStartX - touchEndX;
    const wrapper = document.getElementById('dayCardsWrapper');
    const baseTransform = -(currentDay - 1) * 100;
    wrapper.style.transform = `translateX(calc(${baseTransform}% - ${diff}px))`;
}

function handleTouchEnd() {
    if (!isDragging) return;
    isDragging = false;
    handleSwipe();
}

function handleMouseDown(e) {
    touchStartX = e.clientX;
    isDragging = true;
    e.preventDefault();
}

function handleMouseMove(e) {
    if (!isDragging) return;
    touchEndX = e.clientX;

    const diff = touchStartX - touchEndX;
    const wrapper = document.getElementById('dayCardsWrapper');
    const baseTransform = -(currentDay - 1) * 100;
    wrapper.style.transform = `translateX(calc(${baseTransform}% - ${diff}px))`;
}

function handleMouseUp() {
    if (!isDragging) return;
    isDragging = false;
    handleSwipe();
}

function handleSwipe() {
    const diffX = touchStartX - touchEndX;
    const threshold = 50;

    if (Math.abs(diffX) > threshold) {
        if (diffX > 0) {
            navigateDay(1); // Swipe left - next day
        } else {
            navigateDay(-1); // Swipe right - previous day
        }
    } else {
        // Snap back to current position
        updateDisplay();
    }
}

function navigateDay(direction) {
    const newDay = currentDay + direction;

    if (newDay >= 1 && newDay <= trainingDays.length) {
        currentDay = newDay;
        updateDisplay();
        updateProgress();
    }
}

function switchView(view) {
    currentView = view;

    // Update bottom nav
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.view === view);
    });

    // Update content views
    document.querySelectorAll('.day-card').forEach((card, index) => {
        card.querySelectorAll('.content-view').forEach(content => {
            content.classList.toggle('active', content.dataset.view === view);
        });
    });
}

function updateDisplay() {
    const day = trainingDays[currentDay - 1];

    // Update navigation buttons
    document.getElementById('prevDay').disabled = currentDay === 1;
    document.getElementById('nextDay').disabled = currentDay === trainingDays.length;

    // Update day label
    document.getElementById('dayPhase').textContent = day.phase;
    document.getElementById('dayNumber').textContent = `DAY ${day.day}`;

    // Update stats
    document.getElementById('trimpValue').textContent = day.trimp;
    document.getElementById('intensityValue').textContent = day.intensity;
    document.getElementById('focusValue').textContent = day.focus;

    // Update card position
    const wrapper = document.getElementById('dayCardsWrapper');
    wrapper.style.transform = `translateX(-${(currentDay - 1) * 100}%)`;
}

function updateProgress() {
    const progress = (currentDay / trainingDays.length) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;

    // Update progress dots if they exist
    const dotsContainer = document.getElementById('progressDots');
    if (dotsContainer && dotsContainer.children.length === 0) {
        for (let i = 1; i <= trainingDays.length; i++) {
            const dot = document.createElement('div');
            dot.className = 'progress-dot';
            if (i <= currentDay) dot.classList.add('completed');
            dotsContainer.appendChild(dot);
        }
    } else if (dotsContainer) {
        Array.from(dotsContainer.children).forEach((dot, index) => {
            dot.classList.toggle('completed', index < currentDay);
        });
    }
}

function updateCountdown() {
    const competitionDate = new Date();
    competitionDate.setDate(competitionDate.getDate() + 16);

    const now = new Date();
    const diff = competitionDate - now;
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    const countdownEl = document.querySelector('.countdown-number');
    if (countdownEl) {
        countdownEl.textContent = days;
    }
}

// Add keyboard navigation for desktop
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') navigateDay(-1);
    if (e.key === 'ArrowRight') navigateDay(1);
});