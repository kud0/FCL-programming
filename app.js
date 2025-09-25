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
                    "• Thrusters (30/20 kg)",
                    "• Pull-ups (scale as needed)",
                    "**Goal time**: 8-12 min",
                    "**Rest 5 min**",
                    "",
                    "Then:",
                    "3 rounds @ RPE 5:",
                    "• 15 Wall balls",
                    "• 12 American KB swings (16/12 kg)",
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
                    "• 5 Power snatches (35/25 kg)",
                    "• 10 Box jump overs (61/51 cm)",
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
                    "• Thrusters (43/30 kg)",
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
        phase: "PHASE 1",
        phaseName: "REACTIVATION",
        title: "Long Aerobic & Gymnastics",
        subtitle: "Aerobic capacity, gymnastics endurance",
        trimp: "180-200",
        intensity: "MODERATE",
        focus: "AEROBIC + GYMNASTICS",
        workout: {
            main: {
                title: "SINGLE LONG SESSION (75 min)",
                partA: [
                    "Part A: Aerobic Capacity (40 min) @ RPE 4-5",
                    "\"The Machine\"",
                    "",
                    "5 rounds:",
                    "• 400m run",
                    "• 30 Wall balls (6/4 kg)",
                    "• 20 Pull-ups",
                    "• 10 Handstand push-ups (scale: pike push-ups)",
                    "• Rest 2 min",
                    "",
                    "Pace for consistency, not speed"
                ],
                partB: [
                    "Part B: Gymnastics Endurance (20 min) @ RPE 5-6",
                    "",
                    "10 min AMRAP:",
                    "• 5 Muscle-ups (scale: pull-ups + dips)",
                    "• 10 Pistols (alternating)",
                    "• 15 Hollow rocks"
                ],
                partC: [
                    "Part C: Cool-down (15 min)",
                    "• 10 min easy bike",
                    "• 5 min stretching"
                ],
                review: [
                    "Weekly Review:",
                    "• Total TRIMP Week 1: ~950",
                    "• Energy levels check",
                    "• Movement quality assessment",
                    "• Adjust Week 2 if needed"
                ]
            }
        },
        nutrition: {
            carbs: "375g",
            protein: "160g",
            fats: "70g",
            timing: "Carbs before AND after long session. Hydrate well."
        },
        recovery: [
            "Full body stretching",
            "Foam roll legs and back",
            "Extra hydration + electrolytes",
            "8-9 hours sleep critical"
        ],
        tips: "This is a long session. Pace yourself - it's about building capacity, not racing."
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
                title: "SINGLE SESSION (50 min)",
                intro: [
                    "Lactate Training @ RPE 6-7",
                    "*Build capacity to clear lactate and work through discomfort*"
                ],
                partA: [
                    "A. Lactate Intervals",
                    "",
                    "5 rounds:",
                    "• 90 seconds MAX effort cal row",
                    "• Rest 3 minutes",
                    "",
                    "**Goal**: Consistent calories each round"
                ],
                partB: [
                    "B. Lactate Buffering",
                    "",
                    "3 rounds @ RPE 6:",
                    "• 2 min AMRAP:",
                    "  - 10 burpees",
                    "  - 10 box jump overs (61/51 cm)",
                    "• Rest 2 min between rounds"
                ]
            },
            afternoon: {
                title: "AFTERNOON",
                activities: [
                    "• 30 min Zone 2 recovery",
                    "• Contrast therapy (hot/cold)",
                    "• Massage or foam rolling"
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
                    "• 7 thrusters (52/34 kg)",
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
        phase: "PHASE 2",
        phaseName: "INTENSIFICATION",
        title: "Active Recovery & Movement Prep",
        subtitle: "Recovery, maintain movement quality",
        trimp: "60-80",
        intensity: "VERY LOW",
        focus: "RECOVERY",
        workout: {
            main: {
                title: "LIGHT SESSION (40 min)",
                recovery: [
                    "Zone 2 Recovery (20 min) @ RPE 2-3",
                    "• Choice of easy movement",
                    "• Focus on breathing, relaxation"
                ],
                movement: [
                    "Movement Quality (15 min) @ RPE 3",
                    "",
                    "3 rounds, not for time:",
                    "• 10 Perfect air squats",
                    "• 10 Perfect push-ups",
                    "• 10 Perfect hollow rocks",
                    "• 5 Perfect pull-ups"
                ],
                mobility: [
                    "Mobility (5 min)",
                    "• Competition-specific positions",
                    "• Problem areas"
                ]
            }
        },
        nutrition: {
            carbs: "300g",
            protein: "150g",
            fats: "75g",
            timing: "Normal eating pattern, stay hydrated"
        },
        recovery: [
            "Light stretching",
            "Sauna or hot bath",
            "Meditation 10-20 min",
            "8-9 hours sleep"
        ],
        tips: "This is about recovery and mental prep. Keep movements perfect, no intensity."
    },
    {
        day: 12,
        phase: "PHASE 3",
        phaseName: "COMPETITION PEAKING",
        title: "Neural Priming",
        subtitle: "Prime nervous system, maintain sharpness",
        trimp: "100-120",
        intensity: "HIGH",
        focus: "NEURAL",
        workout: {
            main: {
                title: "SHORT INTENSE SESSION (35 min)",
                intro: [
                    "Neural Activation @ RPE 7-8",
                    "*\"Touch intensity, don't chase it\"*"
                ],
                power: [
                    "Power Development",
                    "",
                    "5 x 2 Power snatches @ 70-75%:",
                    "• Rest 2 min",
                    "• Focus: Speed, technique"
                ],
                sprint: [
                    "Sprint Capacity",
                    "",
                    "3 x 100m sprint:",
                    "• Rest 3 min",
                    "• 90% effort"
                ],
                finisher: [
                    "Competition Movement Touch",
                    "",
                    "2 rounds @ 70% effort:",
                    "• 5 Thrusters",
                    "• 5 Pull-ups",
                    "• 5 Burpees"
                ]
            }
        },
        nutrition: {
            carbs: "350g",
            protein: "150g",
            fats: "70g",
            timing: "Immediate nutrition post-workout"
        },
        recovery: [
            "Immediate nutrition",
            "Light stretching",
            "No screens after 8pm",
            "Early sleep (9+ hours)"
        ],
        tips: "Touch intensity briefly. This is about feeling fast and sharp, not exhausting yourself."
    },
    {
        day: 13,
        phase: "PHASE 3",
        phaseName: "COMPETITION PEAKING",
        title: "Final Competition Simulation",
        subtitle: "Test competition pacing, final systems check",
        trimp: "60-80",
        intensity: "MODERATE",
        focus: "SIMULATION",
        workout: {
            main: {
                title: "COMPETITION SIMULATION SESSION (40 min)",
                intro: [
                    "Final Testing @ RPE 5-7",
                    "*\"Last chance to dial in competition pace - stay controlled\"*"
                ],
                warmup: [
                    "Warm-up (10 min)",
                    "• 5 min easy bike/row",
                    "• Dynamic stretching sequence",
                    "• Competition movement patterns @ 50%"
                ],
                event1: [
                    "**Mini Event 1**",
                    "",
                    "3 min AMRAP @ 75% effort:",
                    "• 5 Thrusters (competition weight)",
                    "• 5 Pull-ups",
                    "• 5 Burpees over bar",
                    "• Rest 5 min"
                ],
                event2: [
                    "**Mini Event 2**",
                    "",
                    "Build to heavy single Clean & Jerk:",
                    "• 5 singles, increasing load",
                    "• Cap at 85% of recent max",
                    "• Rest 2 min between lifts"
                ],
                event3: [
                    "**Mini Event 3**",
                    "",
                    "500m Row @ 80% effort:",
                    "• Record time for pacing reference"
                ],
                cooldown: [
                    "Cool-down (5 min)",
                    "• Easy walk",
                    "• Light stretching",
                    "• Mental notes on pacing"
                ]
            }
        },
        nutrition: {
            carbs: "400g",
            protein: "145g",
            fats: "65g",
            timing: "Begin carb loading protocol"
        },
        recovery: [
            "Pack competition bag",
            "Check all equipment",
            "Light stretching only",
            "Sleep 8+ hours minimum"
        ],
        tips: "Final movement check. Everything should feel smooth and easy. Save the intensity for competition."
    },
    {
        day: 14,
        phase: "PHASE 3",
        phaseName: "COMPETITION PEAKING",
        title: "Movement Quality & Recovery Focus",
        subtitle: "Maintain movement patterns, optimize recovery, mental preparation",
        trimp: "50-60",
        intensity: "LOW",
        focus: "RECOVERY + QUALITY",
        workout: {
            main: {
                title: "RECOVERY-FOCUSED SESSION (35 min)",
                intro: [
                    "Movement Maintenance @ RPE 3-5",
                    "*\"Move well, recover fully, prepare mentally\"*"
                ],
                warmup: [
                    "Extended Warm-up (12 min)",
                    "• 6 min Zone 2 bike/row",
                    "• Full-body dynamic stretching sequence:",
                    "  - 10 leg swings each direction",
                    "  - 10 arm circles forward/back",
                    "  - 10 hip circles each way",
                    "  - 5 inch worms",
                    "  - 10 walking lunges with twist"
                ],
                main: [
                    "Movement Quality Work (15 min)",
                    "",
                    "3 rounds @ 60% effort, focus on perfection:",
                    "• 3 Power snatches (60%)",
                    "• 5 Thrusters (light)",
                    "• 7 Pull-ups (competition standard)",
                    "• 10 Double unders",
                    "• Rest 2 min between rounds",
                    "",
                    "Focus: Smooth, efficient movement patterns"
                ],
                finisher: [
                    "Competition Specific Touch (8 min)",
                    "",
                    "2 x 2 Clean & Jerk @ 70%:",
                    "• Rest 2 min between sets",
                    "• Focus: Speed and confidence"
                ]
            }
        },
        nutrition: {
            carbs: "450g",
            protein: "140g",
            fats: "60g",
            timing: "High carb day (7-8g per kg). Hydrate well."
        },
        recovery: [
            "Visualization: 15 min",
            "Hydration optimization",
            "No new foods or supplements",
            "Sleep: 8+ hours minimum"
        ],
        tips: "Light opener to prime your nervous system. You should finish feeling energized, not tired."
    },
    {
        day: 15,
        phase: "PHASE 3",
        phaseName: "COMPETITION PEAKING",
        title: "Competition Prep & Neural Priming",
        subtitle: "Final movement patterns, maintain neural drive",
        trimp: "50-70",
        intensity: "LOW-MODERATE",
        focus: "NEURAL PRIMING",
        workout: {
            main: {
                title: "MORNING SESSION (30 min)",
                intro: [
                    "Neural Priming Work @ RPE 4-5",
                    "*\"Touch intensity, don't chase it - save the fire for competition\"*"
                ],
                warmup: [
                    "Dynamic Warm-up (10 min)",
                    "• 5 min easy bike/row @ conversational pace",
                    "• Dynamic movement sequence:",
                    "  - 10 leg swings each direction",
                    "  - 10 arm circles forward/back",
                    "  - 10 hip circles each way",
                    "  - 5 inchworms with push-up"
                ],
                main: [
                    "Competition Movement Touch (15 min)",
                    "",
                    "EMOM for 9 minutes @ 60% effort:",
                    "• Min 1: 3 Power cleans (competition weight)",
                    "• Min 2: 5 Thrusters (light)",
                    "• Min 3: 30 Double unders",
                    "",
                    "Then: 3 x 2 Power snatches @ 70%:",
                    "• Rest 90 seconds between",
                    "• Focus: Speed and confidence"
                ],
                cooldown: [
                    "Cool-down (5 min)",
                    "• Light walk",
                    "• Arm swings and leg swings",
                    "• Deep breathing"
                ]
            }
        },
        nutrition: {
            carbs: "400g",
            protein: "140g",
            fats: "60g",
            timing: "Normal meals, dinner by 6pm. No new foods!"
        },
        recovery: [
            "No intense activity",
            "Light walk if needed",
            "Final equipment check",
            "Bed by 8pm latest"
        ],
        tips: "Tomorrow is game day. Today is about staying calm, confident, and prepared. You've done the work!"
    },
    {
        day: 16,
        phase: "PHASE 3",
        phaseName: "COMPETITION EVE",
        title: "Competition Eve",
        subtitle: "Light activation, mental preparation, logistics finalization",
        trimp: "30-40",
        intensity: "VERY LOW",
        focus: "ACTIVATION",
        workout: {
            main: {
                title: "MORNING SESSION (20 min)",
                intro: [
                    "Competition Eve Activation @ RPE 3-4",
                    "*\"Tomorrow you compete - today you prepare with intention\"*"
                ],
                warmup: [
                    "Light Warm-up (8 min)",
                    "• 4 min easy bike or row",
                    "• Dynamic stretching:",
                    "  - 10 leg swings each",
                    "  - 10 arm circles",
                    "  - 5 walk-outs",
                    "  - 5 jump squats (bodyweight)"
                ],
                primer: [
                    "Movement Primers (10 min)",
                    "",
                    "2 rounds @ 50% effort:",
                    "• 2 Power snatches (60%)",
                    "• 3 Thrusters (empty bar)",
                    "• 5 Pull-ups",
                    "• 10 Double unders",
                    "• Rest 2 min between rounds",
                    "",
                    "Focus: Feel smooth, stay relaxed"
                ],
                cooldown: [
                    "Cool-down (2 min)",
                    "• Easy walk",
                    "• Shake out limbs",
                    "• Positive self-talk"
                ]
            }
        },
        nutrition: {
            carbs: "300g",
            protein: "120g",
            fats: "50g",
            timing: "Normal meals, familiar foods only"
        },
        recovery: [
            "Competition bag packed",
            "Early to bed (9+ hours)",
            "No new foods or activities",
            "Mental visualization"
        ],
        tips: "Tomorrow is competition day. Stay calm, trust your preparation, and get quality rest."
    }
];

// App State
const PROGRAM_START_DATE = new Date('2025-09-25'); // Day 1 start date
let currentDay = calculateCurrentDay();
let currentView = 'workout';
let touchStartX = 0;
let touchEndX = 0;
let isDragging = false;

// Calculate current day based on program start date
function calculateCurrentDay() {
    const today = new Date();
    const startDate = new Date(PROGRAM_START_DATE);

    // Reset time to midnight for accurate day calculation
    today.setHours(0, 0, 0, 0);
    startDate.setHours(0, 0, 0, 0);

    const diffTime = today - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    // Day calculation: if today is start date, it's day 1
    const calculatedDay = diffDays + 1;

    // Ensure we stay within the 16-day program bounds
    if (calculatedDay < 1) return 1;
    if (calculatedDay > 16) return 16;

    return calculatedDay;
}

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
            { key: 'intro', label: '📋 OVERVIEW', icon: 'intro' },
            { key: 'warmup', label: '🔥 WARM-UP', icon: 'warmup' },
            { key: 'recovery', label: '💤 RECOVERY', icon: 'recovery' },
            { key: 'movement', label: '🎯 MOVEMENT QUALITY', icon: 'movement' },
            { key: 'main', label: '💪 MAIN WORK', icon: 'main' },
            { key: 'partA', label: '🅰️ PART A', icon: 'partA' },
            { key: 'partB', label: '🅱️ PART B', icon: 'partB' },
            { key: 'partC', label: '🅲 PART C', icon: 'partC' },
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
            { key: 'mobility', label: '🤸 MOBILITY', icon: 'mobility' },
            { key: 'prep', label: '🎪 PREPARATION', icon: 'prep' },
            { key: 'events', label: '🏆 COMPETITION EVENTS', icon: 'events' },
            { key: 'event1', label: '1️⃣ EVENT 1', icon: 'event1' },
            { key: 'event2', label: '2️⃣ EVENT 2', icon: 'event2' },
            { key: 'event3', label: '3️⃣ EVENT 3', icon: 'event3' },
            { key: 'competition', label: '🏆 COMPETITION', icon: 'competition' },
            { key: 'morning', label: '🌅 MORNING', icon: 'morning' },
            { key: 'afternoon', label: '☀️ AFTERNOON', icon: 'afternoon' },
            { key: 'primer', label: '🎯 PRIMER', icon: 'primer' },
            { key: 'cooldown', label: '❄️ COOL-DOWN', icon: 'cooldown' },
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
                                             ex.match(/^[-•]\s*(Thrusters?|Pull-ups?|Push-ups?|Squats?|Row|Bike|Ski|Run|Clean|Snatch|Deadlift|Press|Burpee|Wall ball|Box jump|Double under|Handstand|Muscle-up|Bent row|Front squat|Back squat)/i)) {
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
    // Calculate total calories from macros
    const carbGrams = parseInt(day.nutrition.carbs) || 0;
    const proteinGrams = parseInt(day.nutrition.protein) || 0;
    const fatGrams = parseInt(day.nutrition.fats) || 0;

    const totalCalories = (carbGrams * 4) + (proteinGrams * 4) + (fatGrams * 9);

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
        <div class="highlight-box" style="margin-top: 1rem;">
            <p style="font-size: 1.1rem; font-weight: 700; color: var(--primary); margin-bottom: 0.5rem;">
                Total Calories: ${totalCalories.toLocaleString()} kcal
            </p>
            <p style="font-size: 0.75rem; opacity: 0.8; margin-bottom: 0.5rem;">
                Formula: (${carbGrams}g × 4) + (${proteinGrams}g × 4) + (${fatGrams}g × 9)
            </p>
        </div>
        <div class="highlight-box">
            <p>⏰ ${day.nutrition.timing}</p>
        </div>
    `;
}

function createRecoveryContent(day) {
    // Same recovery checklist for every day - essential daily reminders
    const dailyRecoveryItems = [
        "Carbs within 30 min window after workout",
        "Hydrate with water and electrolytes post-workout",
        "Take creatine supplement",
        "Target 8-9 hours of sleep"
    ];

    return `
        <h2 class="day-title">Daily Recovery Checklist</h2>
        <p class="day-subtitle">Essential recovery reminders - every day</p>
        <ul class="recovery-checklist">
            ${dailyRecoveryItems.map(item => `
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
    // Competition is on October 11, 2025
    const competitionDate = new Date('2025-10-11');

    const now = new Date();
    now.setHours(0, 0, 0, 0); // Reset to midnight for accurate calculation
    competitionDate.setHours(0, 0, 0, 0);

    const diff = competitionDate - now;
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    // Show remaining days, minimum 0
    const remainingDays = Math.max(0, days);

    const countdownEl = document.querySelector('.countdown-number');
    if (countdownEl) {
        countdownEl.textContent = remainingDays;
    }
}

// Add keyboard navigation for desktop
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') navigateDay(-1);
    if (e.key === 'ArrowRight') navigateDay(1);
});