// P1 data - 提示词=线索(本题)+素材(可替换)
const P1_DATA = {
  "categories": [
    {
      "id": "shishi",
      "name": "事实陈述类",
      "steps": [
        "正面回答",
        "来源或举例",
        "频次",
        "感受"
      ],
      "questions": [
        {
          "id": 1,
          "title": "Have you ever had a pet before",
          "q": "Have you ever had a pet before?",
          "clueId": "1",
          "words": {
            "正面回答": [
              "Yes, absolutely",
              "used to"
            ],
            "来源或举例": [
              "a puppy",
              "dorms",
              "home",
              "renting an apartment",
              "stay home",
              "go for a walk",
              "park"
            ],
            "频次": [
              "every day",
              "park",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "unwind",
              "really lifts my mood",
              "it makes me happy",
              "feel relaxed and at ease",
              "appreciated",
              "sit down and relax",
              "chill out",
              "take a break and relax"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "Yes, absolutely",
                "used to"
              ],
              "clueHint": "养过",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "a puppy",
                "dorms",
                "home"
              ],
              "clueHint": "⼩狗",
              "material": [
                "renting an apartment",
                "stay home",
                "go for a walk",
                "park"
              ]
            },
            "频次": {
              "clue": [
                "every day",
                "park"
              ],
              "clueHint": "每天",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "unwind",
                "really lifts my mood"
              ],
              "clueHint": "解压",
              "material": [
                "it makes me happy",
                "feel relaxed and at ease",
                "appreciated",
                "sit down and relax",
                "chill out",
                "take a break and relax"
              ]
            }
          }
        },
        {
          "id": 2,
          "title": "Have you ever been part of a sports team",
          "q": "Have you ever been part of a sports team?",
          "clueId": "2",
          "words": {
            "正面回答": [
              "Definitely"
            ],
            "来源或举例": [
              "play basketball",
              "volleyball in the sports centre",
              "do some sports",
              "go jogging",
              "volleyball",
              "hiking",
              "library"
            ],
            "频次": [
              "at weekends",
              "in my free time",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "sense of teamwork",
              "practical",
              "it makes me happy",
              "really lifts my mood",
              "feel relaxed and at ease",
              "appreciated"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "Definitely"
              ],
              "clueHint": "参加过",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "play basketball",
                "volleyball in the sports centre"
              ],
              "clueHint": "篮球排球",
              "material": [
                "do some sports",
                "go jogging",
                "volleyball",
                "hiking",
                "library"
              ]
            },
            "频次": {
              "clue": [
                "at weekends",
                "in my free time"
              ],
              "clueHint": "周末",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "sense of teamwork",
                "practical"
              ],
              "clueHint": "团队",
              "material": [
                "it makes me happy",
                "really lifts my mood",
                "feel relaxed and at ease",
                "appreciated"
              ]
            }
          }
        },
        {
          "id": 3,
          "title": "Have you ever sent handmade gifts to others",
          "q": "Have you ever sent handmade gifts to others?",
          "clueId": "3",
          "words": {
            "正面回答": [
              "Exactly",
              "just last month"
            ],
            "来源或举例": [
              "a t-shirt",
              "coat",
              "bought by",
              "pay with my phone",
              "t-shirt",
              "sweatshirt",
              "get dressed",
              "eat breakfast",
              "grab my stuff"
            ],
            "频次": [
              "from time to time",
              "regularly",
              "as often as I can",
              "childhood",
              "before I went to primary school",
              "after I went to middle school",
              "when I started university"
            ],
            "感受": [
              "it makes me happy",
              "really lifts my mood",
              "feel relaxed and at ease",
              "appreciated"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "Exactly",
                "just last month"
              ],
              "clueHint": "送过收到过",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "a t-shirt",
                "coat",
                "bought by",
                "pay with my phone"
              ],
              "clueHint": "⾐服",
              "material": [
                "t-shirt",
                "sweatshirt",
                "get dressed",
                "eat breakfast",
                "grab my stuff"
              ]
            },
            "频次": {
              "clue": [
                "from time to time"
              ],
              "clueHint": "偶尔",
              "material": [
                "regularly",
                "as often as I can",
                "childhood",
                "before I went to primary school",
                "after I went to middle school",
                "when I started university"
              ]
            },
            "感受": {
              "clue": [
                "it makes me happy"
              ],
              "clueHint": "开⼼",
              "material": [
                "really lifts my mood",
                "feel relaxed and at ease",
                "appreciated"
              ]
            }
          }
        },
        {
          "id": 4,
          "title": "Have you ever received a great gift",
          "q": "Have you ever received a great gift?",
          "clueId": "3",
          "words": {
            "正面回答": [
              "Exactly",
              "just last month"
            ],
            "来源或举例": [
              "a t-shirt",
              "coat",
              "bought by",
              "pay with my phone",
              "t-shirt",
              "sweatshirt",
              "get dressed",
              "eat breakfast",
              "grab my stuff"
            ],
            "频次": [
              "from time to time",
              "regularly",
              "as often as I can",
              "childhood",
              "before I went to primary school",
              "after I went to middle school",
              "when I started university"
            ],
            "感受": [
              "it makes me happy",
              "really lifts my mood",
              "feel relaxed and at ease",
              "appreciated"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "Exactly",
                "just last month"
              ],
              "clueHint": "送过收到过",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "a t-shirt",
                "coat",
                "bought by",
                "pay with my phone"
              ],
              "clueHint": "⾐服",
              "material": [
                "t-shirt",
                "sweatshirt",
                "get dressed",
                "eat breakfast",
                "grab my stuff"
              ]
            },
            "频次": {
              "clue": [
                "from time to time"
              ],
              "clueHint": "偶尔",
              "material": [
                "regularly",
                "as often as I can",
                "childhood",
                "before I went to primary school",
                "after I went to middle school",
                "when I started university"
              ]
            },
            "感受": {
              "clue": [
                "it makes me happy"
              ],
              "clueHint": "开⼼",
              "material": [
                "really lifts my mood",
                "feel relaxed and at ease",
                "appreciated"
              ]
            }
          }
        },
        {
          "id": 5,
          "title": "What gift have you received recently",
          "q": "What gift have you received recently?",
          "clueId": "3",
          "words": {
            "正面回答": [
              "Exactly",
              "just last month"
            ],
            "来源或举例": [
              "a t-shirt",
              "coat",
              "bought by",
              "pay with my phone",
              "t-shirt",
              "sweatshirt",
              "get dressed",
              "eat breakfast",
              "grab my stuff"
            ],
            "频次": [
              "from time to time",
              "regularly",
              "as often as I can",
              "childhood",
              "before I went to primary school",
              "after I went to middle school",
              "when I started university"
            ],
            "感受": [
              "it makes me happy",
              "really lifts my mood",
              "feel relaxed and at ease",
              "appreciated"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "Exactly",
                "just last month"
              ],
              "clueHint": "送过收到过",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "a t-shirt",
                "coat",
                "bought by",
                "pay with my phone"
              ],
              "clueHint": "⾐服",
              "material": [
                "t-shirt",
                "sweatshirt",
                "get dressed",
                "eat breakfast",
                "grab my stuff"
              ]
            },
            "频次": {
              "clue": [
                "from time to time"
              ],
              "clueHint": "偶尔",
              "material": [
                "regularly",
                "as often as I can",
                "childhood",
                "before I went to primary school",
                "after I went to middle school",
                "when I started university"
              ]
            },
            "感受": {
              "clue": [
                "it makes me happy"
              ],
              "clueHint": "开⼼",
              "material": [
                "really lifts my mood",
                "feel relaxed and at ease",
                "appreciated"
              ]
            }
          }
        },
        {
          "id": 6,
          "title": "Where did you go for a walk lately",
          "q": "Where did you go for a walk lately?",
          "clueId": "4",
          "words": {
            "正面回答": [
              "Recently",
              "just a few days ago"
            ],
            "来源或举例": [
              "the local park",
              "city centre",
              "go for a walk",
              "park",
              "library",
              "sports centre",
              "the city centre"
            ],
            "频次": [
              "after dinner",
              "feel bored",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "feel relaxed and at ease",
              "relax my mind",
              "sit down and relax",
              "chill out",
              "take a break and relax",
              "slow down",
              "enjoy a good laugh",
              "unwind"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "Recently",
                "just a few days ago"
              ],
              "clueHint": "去过",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "the local park",
                "city centre"
              ],
              "clueHint": "公园",
              "material": [
                "go for a walk",
                "park",
                "library",
                "sports centre",
                "the city centre"
              ]
            },
            "频次": {
              "clue": [
                "after dinner",
                "feel bored"
              ],
              "clueHint": "晚饭后",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "feel relaxed and at ease",
                "relax my mind"
              ],
              "clueHint": "松弛",
              "material": [
                "sit down and relax",
                "chill out",
                "take a break and relax",
                "slow down",
                "enjoy a good laugh",
                "unwind"
              ]
            }
          }
        },
        {
          "id": 7,
          "title": "When did you learn how to type on a keyboard",
          "q": "When did you learn how to type on a keyboard?",
          "clueId": "5",
          "words": {
            "正面回答": [
              "In my childhood",
              "in primary school"
            ],
            "来源或举例": [
              "shop online",
              "play video games",
              "browse videos",
              "spend a lot of time on dou yin, xiaohongshu, wechat"
            ],
            "频次": [
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school",
              "when I started university",
              "after I get up"
            ],
            "感受": [
              "practical",
              "time-saving"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "In my childhood",
                "in primary school"
              ],
              "clueHint": "⼩时候",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "shop online",
                "play video games"
              ],
              "clueHint": "⽹购",
              "material": [
                "browse videos",
                "spend a lot of time on dou yin, xiaohongshu, wechat"
              ]
            },
            "频次": {
              "clue": [
                "regularly",
                "as often as I can"
              ],
              "clueHint": "每天",
              "material": [
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school",
                "when I started university",
                "after I get up"
              ]
            },
            "感受": {
              "clue": [
                "practical",
                "time-saving"
              ],
              "clueHint": "实⽤",
              "material": []
            }
          }
        },
        {
          "id": 8,
          "title": "How do you improve your typing",
          "q": "How do you improve your typing?",
          "clueId": "5",
          "words": {
            "正面回答": [
              "In my childhood",
              "in primary school"
            ],
            "来源或举例": [
              "shop online",
              "play video games",
              "browse videos",
              "spend a lot of time on dou yin, xiaohongshu, wechat"
            ],
            "频次": [
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school",
              "when I started university",
              "after I get up"
            ],
            "感受": [
              "practical",
              "time-saving"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "In my childhood",
                "in primary school"
              ],
              "clueHint": "⼩时候",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "shop online",
                "play video games"
              ],
              "clueHint": "⽹购",
              "material": [
                "browse videos",
                "spend a lot of time on dou yin, xiaohongshu, wechat"
              ]
            },
            "频次": {
              "clue": [
                "regularly",
                "as often as I can"
              ],
              "clueHint": "每天",
              "material": [
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school",
                "when I started university",
                "after I get up"
              ]
            },
            "感受": {
              "clue": [
                "practical",
                "time-saving"
              ],
              "clueHint": "实⽤",
              "material": []
            }
          }
        },
        {
          "id": 9,
          "title": "What are the most beautiful sights you have seen while traveling",
          "q": "What are the most beautiful sights you have seen while traveling?",
          "clueId": "6",
          "words": {
            "正面回答": [
              "To be honest, the seaside"
            ],
            "来源或举例": [
              "take photos of the stunning views",
              "take photos",
              "hiking",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "频次": [
              "during holidays",
              "when I have days off",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "It's something I'll never forget",
              "it makes me happy",
              "really lifts my mood",
              "feel relaxed and at ease",
              "appreciated"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "To be honest, the seaside"
              ],
              "clueHint": "海滩",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "take photos of the stunning views"
              ],
              "clueHint": "拍照",
              "material": [
                "take photos",
                "hiking",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "频次": {
              "clue": [
                "during holidays",
                "when I have days off"
              ],
              "clueHint": "假期",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "It's something I'll never forget"
              ],
              "clueHint": "难忘",
              "material": [
                "it makes me happy",
                "really lifts my mood",
                "feel relaxed and at ease",
                "appreciated"
              ]
            }
          }
        },
        {
          "id": 10,
          "title": "Are there tall buildings near your home",
          "q": "Are there tall buildings near your home?",
          "clueId": "7",
          "words": {
            "正面回答": [
              "Yes, lots of them"
            ],
            "来源或举例": [
              "like shopping malls and hotels",
              "library",
              "sports centre",
              "the city centre",
              "convenience stores",
              "shopping malls"
            ],
            "频次": [
              "go there regularly",
              "in my free time",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "super convenient",
              "practical",
              "time-saving"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "Yes, lots of them"
              ],
              "clueHint": "有很多",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "like shopping malls and hotels"
              ],
              "clueHint": "商超",
              "material": [
                "library",
                "sports centre",
                "the city centre",
                "convenience stores",
                "shopping malls"
              ]
            },
            "频次": {
              "clue": [
                "go there regularly",
                "in my free time"
              ],
              "clueHint": "经常去",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "super convenient",
                "practical"
              ],
              "clueHint": "便利",
              "material": [
                "time-saving"
              ]
            }
          }
        },
        {
          "id": 11,
          "title": "What plant did you grow when you were young",
          "q": "What plant did you grow when you were young?",
          "clueId": "8",
          "words": {
            "正面回答": [
              "Actually yes"
            ],
            "来源或举例": [
              "some flowers on my balcony",
              "bought from street market",
              "library",
              "sports centre",
              "the city centre",
              "convenience stores",
              "shopping malls"
            ],
            "频次": [
              "water them every day",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "gives me a chance to reflect on things",
              "it makes me happy",
              "really lifts my mood",
              "feel relaxed and at ease",
              "appreciated",
              "reflect on things"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "Actually yes"
              ],
              "clueHint": "种过知道",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "some flowers on my balcony",
                "bought from street market"
              ],
              "clueHint": "花草",
              "material": [
                "library",
                "sports centre",
                "the city centre",
                "convenience stores",
                "shopping malls"
              ]
            },
            "频次": {
              "clue": [
                "water them every day"
              ],
              "clueHint": "每天",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "gives me a chance to reflect on things"
              ],
              "clueHint": "反思",
              "material": [
                "it makes me happy",
                "really lifts my mood",
                "feel relaxed and at ease",
                "appreciated",
                "reflect on things"
              ]
            }
          }
        },
        {
          "id": 12,
          "title": "Do you know anything about growing a plant",
          "q": "Do you know anything about growing a plant?",
          "clueId": "8",
          "words": {
            "正面回答": [
              "Actually yes"
            ],
            "来源或举例": [
              "some flowers on my balcony",
              "bought from street market",
              "library",
              "sports centre",
              "the city centre",
              "convenience stores",
              "shopping malls"
            ],
            "频次": [
              "water them every day",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "gives me a chance to reflect on things",
              "it makes me happy",
              "really lifts my mood",
              "feel relaxed and at ease",
              "appreciated",
              "reflect on things"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "Actually yes"
              ],
              "clueHint": "种过知道",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "some flowers on my balcony",
                "bought from street market"
              ],
              "clueHint": "花草",
              "material": [
                "library",
                "sports centre",
                "the city centre",
                "convenience stores",
                "shopping malls"
              ]
            },
            "频次": {
              "clue": [
                "water them every day"
              ],
              "clueHint": "每天",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "gives me a chance to reflect on things"
              ],
              "clueHint": "反思",
              "material": [
                "it makes me happy",
                "really lifts my mood",
                "feel relaxed and at ease",
                "appreciated",
                "reflect on things"
              ]
            }
          }
        },
        {
          "id": 13,
          "title": "Have you ever talked with someone you don't know in public places",
          "q": "Have you ever talked with someone you don't know in public places?",
          "clueId": "9",
          "words": {
            "正面回答": [
              "Occasionally, yes"
            ],
            "来源或举例": [
              "in the cafes",
              "library",
              "have a chat",
              "hang out",
              "go to parties",
              "get together with friends and classmates",
              "meet like-minded people"
            ],
            "频次": [
              "seldom",
              "just from time to time",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "good chance to have a conversation",
              "share opinions",
              "it makes me happy",
              "really lifts my mood",
              "feel relaxed and at ease",
              "appreciated",
              "sit down and relax",
              "chill out"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "Occasionally, yes"
              ],
              "clueHint": "聊过",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "in the cafes",
                "library"
              ],
              "clueHint": "咖啡店问路",
              "material": [
                "have a chat",
                "hang out",
                "go to parties",
                "get together with friends and classmates",
                "meet like-minded people"
              ]
            },
            "频次": {
              "clue": [
                "seldom",
                "just from time to time"
              ],
              "clueHint": "极少",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "good chance to have a conversation",
                "share opinions"
              ],
              "clueHint": "交谈",
              "material": [
                "it makes me happy",
                "really lifts my mood",
                "feel relaxed and at ease",
                "appreciated",
                "sit down and relax",
                "chill out"
              ]
            }
          }
        },
        {
          "id": 14,
          "title": "Are there any rules for students at your school",
          "q": "Are there any rules for students at your school?",
          "clueId": "10",
          "words": {
            "正面回答": [
              "Definitely",
              "a lot of rules"
            ],
            "来源或举例": [
              "e.g., no phones in the classroom",
              "school",
              "classroom",
              "the school canteen",
              "library",
              "study"
            ],
            "频次": [
              "we have to follow them daily",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "forces me to work hard at my studies",
              "complete homework independently",
              "self-driven",
              "a sense of achievement",
              "take the initiative to",
              "take action"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "Definitely",
                "a lot of rules"
              ],
              "clueHint": "有规矩遇到过",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "e.g., no phones in the classroom"
              ],
              "clueHint": "教室",
              "material": [
                "school",
                "classroom",
                "the school canteen",
                "library",
                "study"
              ]
            },
            "频次": {
              "clue": [
                "we have to follow them daily"
              ],
              "clueHint": "每天",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "forces me to work hard at my studies",
                "complete homework independently"
              ],
              "clueHint": "努⼒学习",
              "material": [
                "self-driven",
                "a sense of achievement",
                "take the initiative to",
                "take action"
              ]
            }
          }
        },
        {
          "id": 15,
          "title": "Have you ever had a really dedicated teacher",
          "q": "Have you ever had a really dedicated teacher?",
          "clueId": "10",
          "words": {
            "正面回答": [
              "Definitely",
              "a lot of rules"
            ],
            "来源或举例": [
              "e.g., no phones in the classroom",
              "school",
              "classroom",
              "the school canteen",
              "library",
              "study"
            ],
            "频次": [
              "we have to follow them daily",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "forces me to work hard at my studies",
              "complete homework independently",
              "self-driven",
              "a sense of achievement",
              "take the initiative to",
              "take action"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "Definitely",
                "a lot of rules"
              ],
              "clueHint": "有规矩遇到过",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "e.g., no phones in the classroom"
              ],
              "clueHint": "教室",
              "material": [
                "school",
                "classroom",
                "the school canteen",
                "library",
                "study"
              ]
            },
            "频次": {
              "clue": [
                "we have to follow them daily"
              ],
              "clueHint": "每天",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "forces me to work hard at my studies",
                "complete homework independently"
              ],
              "clueHint": "努⼒学习",
              "material": [
                "self-driven",
                "a sense of achievement",
                "take the initiative to",
                "take action"
              ]
            }
          }
        },
        {
          "id": 16,
          "title": "Have you ever had a really strict teacher",
          "q": "Have you ever had a really strict teacher?",
          "clueId": "10",
          "words": {
            "正面回答": [
              "Definitely",
              "a lot of rules"
            ],
            "来源或举例": [
              "e.g., no phones in the classroom",
              "school",
              "classroom",
              "the school canteen",
              "library",
              "study"
            ],
            "频次": [
              "we have to follow them daily",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "forces me to work hard at my studies",
              "complete homework independently",
              "self-driven",
              "a sense of achievement",
              "take the initiative to",
              "take action"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "Definitely",
                "a lot of rules"
              ],
              "clueHint": "有规矩遇到过",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "e.g., no phones in the classroom"
              ],
              "clueHint": "教室",
              "material": [
                "school",
                "classroom",
                "the school canteen",
                "library",
                "study"
              ]
            },
            "频次": {
              "clue": [
                "we have to follow them daily"
              ],
              "clueHint": "每天",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "forces me to work hard at my studies",
                "complete homework independently"
              ],
              "clueHint": "努⼒学习",
              "material": [
                "self-driven",
                "a sense of achievement",
                "take the initiative to",
                "take action"
              ]
            }
          }
        },
        {
          "id": 17,
          "title": "Have you ever bought shoes online",
          "q": "Have you ever bought shoes online?",
          "clueId": "11",
          "words": {
            "正面回答": [
              "Absolutely"
            ],
            "来源或举例": [
              "shop online",
              "browse websites",
              "browse videos",
              "spend a lot of time on dou yin, xiaohongshu, wechat",
              "t-shirt",
              "coat",
              "sweatshirt"
            ],
            "频次": [
              "regularly",
              "whenever I need",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school",
              "when I started university"
            ],
            "感受": [
              "practical",
              "cheap and handy",
              "time-saving"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "Absolutely"
              ],
              "clueHint": "买过",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "shop online",
                "browse websites"
              ],
              "clueHint": "⽹购",
              "material": [
                "browse videos",
                "spend a lot of time on dou yin, xiaohongshu, wechat",
                "t-shirt",
                "coat",
                "sweatshirt"
              ]
            },
            "频次": {
              "clue": [
                "regularly",
                "whenever I need"
              ],
              "clueHint": "换季时",
              "material": [
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school",
                "when I started university"
              ]
            },
            "感受": {
              "clue": [
                "practical",
                "cheap and handy"
              ],
              "clueHint": "实⽤",
              "material": [
                "time-saving"
              ]
            }
          }
        },
        {
          "id": 18,
          "title": "Do you have an experience when you did something well",
          "q": "Do you have an experience when you did something well?",
          "clueId": "12",
          "words": {
            "正面回答": [
              "Yes, I have an impressive memory"
            ],
            "来源或举例": [
              "complete homework independently",
              "pass an exam",
              "study",
              "go to classes",
              "read books",
              "flip through the pages of real books",
              "go to extra classes and events"
            ],
            "频次": [
              "last semester",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "made me feel self-driven",
              "a sense of achievement",
              "self-driven",
              "take the initiative to",
              "take action"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "Yes, I have an impressive memory"
              ],
              "clueHint": "有过",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "complete homework independently",
                "pass an exam"
              ],
              "clueHint": "独⽴完成作业",
              "material": [
                "study",
                "go to classes",
                "read books",
                "flip through the pages of real books",
                "go to extra classes and events"
              ]
            },
            "频次": {
              "clue": [
                "last semester"
              ],
              "clueHint": "偶尔",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "made me feel self-driven",
                "a sense of achievement"
              ],
              "clueHint": "⾃驱⼒",
              "material": [
                "self-driven",
                "take the initiative to",
                "take action"
              ]
            }
          }
        },
        {
          "id": 19,
          "title": "Do you have an experience when your teacher thought you did a good job",
          "q": "Do you have an experience when your teacher thought you did a good job?",
          "clueId": "12",
          "words": {
            "正面回答": [
              "Yes, I have an impressive memory"
            ],
            "来源或举例": [
              "complete homework independently",
              "pass an exam",
              "study",
              "go to classes",
              "read books",
              "flip through the pages of real books",
              "go to extra classes and events"
            ],
            "频次": [
              "last semester",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "made me feel self-driven",
              "a sense of achievement",
              "self-driven",
              "take the initiative to",
              "take action"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "Yes, I have an impressive memory"
              ],
              "clueHint": "有过",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "complete homework independently",
                "pass an exam"
              ],
              "clueHint": "独⽴完成作业",
              "material": [
                "study",
                "go to classes",
                "read books",
                "flip through the pages of real books",
                "go to extra classes and events"
              ]
            },
            "频次": {
              "clue": [
                "last semester"
              ],
              "clueHint": "偶尔",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "made me feel self-driven",
                "a sense of achievement"
              ],
              "clueHint": "⾃驱⼒",
              "material": [
                "self-driven",
                "take the initiative to",
                "take action"
              ]
            }
          }
        },
        {
          "id": 20,
          "title": "Is the city where you live crowded",
          "q": "Is the city where you live crowded?",
          "clueId": "13",
          "words": {
            "正面回答": [
              "Honestly, yes"
            ],
            "来源或举例": [
              "the city centre",
              "use the subway in rush hour",
              "library",
              "sports centre",
              "convenience stores",
              "shopping malls",
              "park"
            ],
            "频次": [
              "every single day",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "it bothers me",
              "feel terrible"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "Honestly, yes"
              ],
              "clueHint": "拥挤去过",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "the city centre",
                "use the subway in rush hour"
              ],
              "clueHint": "市中⼼地铁",
              "material": [
                "library",
                "sports centre",
                "convenience stores",
                "shopping malls",
                "park"
              ]
            },
            "频次": {
              "clue": [
                "every single day"
              ],
              "clueHint": "每天",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "it bothers me",
                "feel terrible"
              ],
              "clueHint": "烦恼",
              "material": []
            }
          }
        },
        {
          "id": 21,
          "title": "Is there a crowded place near where you live",
          "q": "Is there a crowded place near where you live?",
          "clueId": "13",
          "words": {
            "正面回答": [
              "Honestly, yes"
            ],
            "来源或举例": [
              "the city centre",
              "use the subway in rush hour",
              "library",
              "sports centre",
              "convenience stores",
              "shopping malls",
              "park"
            ],
            "频次": [
              "every single day",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "it bothers me",
              "feel terrible"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "Honestly, yes"
              ],
              "clueHint": "拥挤去过",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "the city centre",
                "use the subway in rush hour"
              ],
              "clueHint": "市中⼼地铁",
              "material": [
                "library",
                "sports centre",
                "convenience stores",
                "shopping malls",
                "park"
              ]
            },
            "频次": {
              "clue": [
                "every single day"
              ],
              "clueHint": "每天",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "it bothers me",
                "feel terrible"
              ],
              "clueHint": "烦恼",
              "material": []
            }
          }
        },
        {
          "id": 22,
          "title": "When was the last time you were in a crowded place",
          "q": "When was the last time you were in a crowded place?",
          "clueId": "13",
          "words": {
            "正面回答": [
              "Honestly, yes"
            ],
            "来源或举例": [
              "the city centre",
              "use the subway in rush hour",
              "library",
              "sports centre",
              "convenience stores",
              "shopping malls",
              "park"
            ],
            "频次": [
              "every single day",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "it bothers me",
              "feel terrible"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "Honestly, yes"
              ],
              "clueHint": "拥挤去过",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "the city centre",
                "use the subway in rush hour"
              ],
              "clueHint": "市中⼼地铁",
              "material": [
                "library",
                "sports centre",
                "convenience stores",
                "shopping malls",
                "park"
              ]
            },
            "频次": {
              "clue": [
                "every single day"
              ],
              "clueHint": "每天",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "it bothers me",
                "feel terrible"
              ],
              "clueHint": "烦恼",
              "material": []
            }
          }
        },
        {
          "id": 23,
          "title": "Have you ever worked with old people",
          "q": "Have you ever worked with old people?",
          "clueId": "14",
          "words": {
            "正面回答": [
              "Yes, in a community event"
            ],
            "来源或举例": [
              "have a conversation",
              "have a chat with them",
              "have a chat",
              "hang out",
              "go to parties",
              "get together with friends and classmates",
              "meet like-minded people"
            ],
            "频次": [
              "when I started university",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "great chance to share experiences",
              "learn from them",
              "it makes me happy",
              "really lifts my mood",
              "feel relaxed and at ease",
              "appreciated",
              "sit down and relax",
              "chill out"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "Yes, in a community event"
              ],
              "clueHint": "合作过",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "have a conversation",
                "have a chat with them"
              ],
              "clueHint": "聊天",
              "material": [
                "have a chat",
                "hang out",
                "go to parties",
                "get together with friends and classmates",
                "meet like-minded people"
              ]
            },
            "频次": {
              "clue": [
                "when I started university"
              ],
              "clueHint": "上⼤学后",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "great chance to share experiences",
                "learn from them"
              ],
              "clueHint": "分享经验",
              "material": [
                "it makes me happy",
                "really lifts my mood",
                "feel relaxed and at ease",
                "appreciated",
                "sit down and relax",
                "chill out"
              ]
            }
          }
        },
        {
          "id": 24,
          "title": "Do many people grow vegetables in your city",
          "q": "Do many people grow vegetables in your city?",
          "clueId": "15",
          "words": {
            "正面回答": [
              "Not really"
            ],
            "来源或举例": [
              "people live in high-rise residential areas",
              "apartments",
              "dorms",
              "home",
              "renting an apartment",
              "stay home",
              "breakfast"
            ],
            "频次": [
              "rarely see it",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "we usually buy groceries",
              "food ingredients instead",
              "it makes me happy",
              "really lifts my mood",
              "feel relaxed and at ease",
              "appreciated",
              "sit down and relax",
              "chill out"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "Not really"
              ],
              "clueHint": "不多",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "people live in high-rise residential areas",
                "apartments"
              ],
              "clueHint": "住宅区",
              "material": [
                "dorms",
                "home",
                "renting an apartment",
                "stay home",
                "breakfast"
              ]
            },
            "频次": {
              "clue": [
                "rarely see it"
              ],
              "clueHint": "极少",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "we usually buy groceries",
                "food ingredients instead"
              ],
              "clueHint": "买⽣鲜",
              "material": [
                "it makes me happy",
                "really lifts my mood",
                "feel relaxed and at ease",
                "appreciated",
                "sit down and relax",
                "chill out"
              ]
            }
          }
        },
        {
          "id": 25,
          "title": "Have you borrowed books from others",
          "q": "Have you borrowed books from others?",
          "clueId": "16",
          "words": {
            "正面回答": [
              "Yes, exactly"
            ],
            "来源或举例": [
              "borrowed real books from friends in dorms",
              "study",
              "go to classes",
              "read books",
              "flip through the pages of real books",
              "go to extra classes and events"
            ],
            "频次": [
              "whenever necessary",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "it makes me happy",
              "really lifts my mood",
              "feel relaxed and at ease",
              "appreciated",
              "sit down and relax",
              "chill out"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "Yes, exactly"
              ],
              "clueHint": "借过",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "borrowed real books from friends in dorms"
              ],
              "clueHint": "纸质书室友",
              "material": [
                "study",
                "go to classes",
                "read books",
                "flip through the pages of real books",
                "go to extra classes and events"
              ]
            },
            "频次": {
              "clue": [
                "whenever necessary"
              ],
              "clueHint": "需要时",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [],
              "clueHint": "",
              "material": [
                "it makes me happy",
                "really lifts my mood",
                "feel relaxed and at ease",
                "appreciated",
                "sit down and relax",
                "chill out"
              ]
            }
          }
        },
        {
          "id": 26,
          "title": "Have you borrowed money from others",
          "q": "Have you borrowed money from others?",
          "clueId": "16",
          "words": {
            "正面回答": [
              "Yes, exactly"
            ],
            "来源或举例": [
              "borrowed real books from friends in dorms",
              "study",
              "go to classes",
              "read books",
              "flip through the pages of real books",
              "go to extra classes and events"
            ],
            "频次": [
              "whenever necessary",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "it makes me happy",
              "really lifts my mood",
              "feel relaxed and at ease",
              "appreciated",
              "sit down and relax",
              "chill out"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "Yes, exactly"
              ],
              "clueHint": "借过",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "borrowed real books from friends in dorms"
              ],
              "clueHint": "纸质书室友",
              "material": [
                "study",
                "go to classes",
                "read books",
                "flip through the pages of real books",
                "go to extra classes and events"
              ]
            },
            "频次": {
              "clue": [
                "whenever necessary"
              ],
              "clueHint": "需要时",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [],
              "clueHint": "",
              "material": [
                "it makes me happy",
                "really lifts my mood",
                "feel relaxed and at ease",
                "appreciated",
                "sit down and relax",
                "chill out"
              ]
            }
          }
        },
        {
          "id": 27,
          "title": "Is there an advertisement that made an impression on you when you were a child",
          "q": "Is there an advertisement that made an impression on you when you were a child?",
          "clueId": "17",
          "words": {
            "正面回答": [
              "Yes, one deeply impressed me"
            ],
            "来源或举例": [
              "saw it when I watch movies",
              "watch movies",
              "movie theaters",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "频次": [
              "childhood",
              "before I went to primary school",
              "regularly",
              "as often as I can",
              "from time to time",
              "after I went to middle school",
              "when I started university",
              "after I get up"
            ],
            "感受": [
              "it makes me happy",
              "interesting",
              "really lifts my mood",
              "feel relaxed and at ease",
              "appreciated"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "Yes, one deeply impressed me"
              ],
              "clueHint": "有印象",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "saw it when I watch movies"
              ],
              "clueHint": "电视看电影",
              "material": [
                "watch movies",
                "movie theaters",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "频次": {
              "clue": [
                "childhood",
                "before I went to primary school"
              ],
              "clueHint": "⼩时候",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "after I went to middle school",
                "when I started university",
                "after I get up"
              ]
            },
            "感受": {
              "clue": [
                "it makes me happy",
                "interesting"
              ],
              "clueHint": "开⼼",
              "material": [
                "really lifts my mood",
                "feel relaxed and at ease",
                "appreciated"
              ]
            }
          }
        },
        {
          "id": 28,
          "title": "Are there many museums in your hometown",
          "q": "Are there many museums in your hometown?",
          "clueId": "18",
          "words": {
            "正面回答": [
              "Yes, quite a few",
              "recently"
            ],
            "来源或举例": [
              "located in the city centre",
              "library",
              "sports centre",
              "the city centre",
              "convenience stores",
              "shopping malls"
            ],
            "频次": [
              "in my free time",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "helps me to slow down and learn history",
              "sit down and relax",
              "chill out",
              "take a break and relax",
              "relax my mind",
              "slow down",
              "enjoy a good laugh"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "Yes, quite a few",
                "recently"
              ],
              "clueHint": "很多去过",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "located in the city centre"
              ],
              "clueHint": "市中⼼",
              "material": [
                "library",
                "sports centre",
                "the city centre",
                "convenience stores",
                "shopping malls"
              ]
            },
            "频次": {
              "clue": [
                "in my free time"
              ],
              "clueHint": "周末闲暇",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "helps me to slow down and learn history"
              ],
              "clueHint": "慢下来",
              "material": [
                "sit down and relax",
                "chill out",
                "take a break and relax",
                "relax my mind",
                "slow down",
                "enjoy a good laugh"
              ]
            }
          }
        },
        {
          "id": 29,
          "title": "When was the last time you visited a museum",
          "q": "When was the last time you visited a museum?",
          "clueId": "18",
          "words": {
            "正面回答": [
              "Yes, quite a few",
              "recently"
            ],
            "来源或举例": [
              "located in the city centre",
              "library",
              "sports centre",
              "the city centre",
              "convenience stores",
              "shopping malls"
            ],
            "频次": [
              "in my free time",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "helps me to slow down and learn history",
              "sit down and relax",
              "chill out",
              "take a break and relax",
              "relax my mind",
              "slow down",
              "enjoy a good laugh"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "Yes, quite a few",
                "recently"
              ],
              "clueHint": "很多去过",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "located in the city centre"
              ],
              "clueHint": "市中⼼",
              "material": [
                "library",
                "sports centre",
                "the city centre",
                "convenience stores",
                "shopping malls"
              ]
            },
            "频次": {
              "clue": [
                "in my free time"
              ],
              "clueHint": "周末闲暇",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "helps me to slow down and learn history"
              ],
              "clueHint": "慢下来",
              "material": [
                "sit down and relax",
                "chill out",
                "take a break and relax",
                "relax my mind",
                "slow down",
                "enjoy a good laugh"
              ]
            }
          }
        },
        {
          "id": 30,
          "title": "Did your parents teach you to share when you were a child",
          "q": "Did your parents teach you to share when you were a child?",
          "clueId": "19",
          "words": {
            "正面回答": [
              "Definitely"
            ],
            "来源或举例": [
              "share a meal",
              "share thoughts and feelings with friends",
              "share experiences",
              "share opinions",
              "share thoughts and feelings",
              "altruistic behaviour",
              "motivate each other"
            ],
            "频次": [
              "regularly",
              "all the time",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school",
              "when I started university"
            ],
            "感受": [
              "good for mental self-care",
              "self-care"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "Definitely"
              ],
              "clueHint": "教过分享过",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "share a meal",
                "share thoughts and feelings with friends"
              ],
              "clueHint": "分享⻝物想法",
              "material": [
                "share experiences",
                "share opinions",
                "share thoughts and feelings",
                "altruistic behaviour",
                "motivate each other"
              ]
            },
            "频次": {
              "clue": [
                "regularly",
                "all the time"
              ],
              "clueHint": "经常",
              "material": [
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school",
                "when I started university"
              ]
            },
            "感受": {
              "clue": [
                "good for mental self-care"
              ],
              "clueHint": "⾃我照顾满⾜",
              "material": [
                "self-care"
              ]
            }
          }
        },
        {
          "id": 31,
          "title": "Do you have anything to share with others recently",
          "q": "Do you have anything to share with others recently?",
          "clueId": "19",
          "words": {
            "正面回答": [
              "Definitely"
            ],
            "来源或举例": [
              "share a meal",
              "share thoughts and feelings with friends",
              "share experiences",
              "share opinions",
              "share thoughts and feelings",
              "altruistic behaviour",
              "motivate each other"
            ],
            "频次": [
              "regularly",
              "all the time",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school",
              "when I started university"
            ],
            "感受": [
              "good for mental self-care",
              "self-care"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "Definitely"
              ],
              "clueHint": "教过分享过",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "share a meal",
                "share thoughts and feelings with friends"
              ],
              "clueHint": "分享⻝物想法",
              "material": [
                "share experiences",
                "share opinions",
                "share thoughts and feelings",
                "altruistic behaviour",
                "motivate each other"
              ]
            },
            "频次": {
              "clue": [
                "regularly",
                "all the time"
              ],
              "clueHint": "经常",
              "material": [
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school",
                "when I started university"
              ]
            },
            "感受": {
              "clue": [
                "good for mental self-care"
              ],
              "clueHint": "⾃我照顾满⾜",
              "material": [
                "self-care"
              ]
            }
          }
        },
        {
          "id": 32,
          "title": "What subjects are you studying",
          "q": "What subjects are you studying?",
          "clueId": "20",
          "words": {
            "正面回答": [
              "I am a student majoring in"
            ],
            "来源或举例": [
              "Study",
              "go to classes",
              "listen to a lecture",
              "read books",
              "flip through the pages of real books",
              "go to extra classes and events",
              "work hard at my studies",
              "complete homework independently"
            ],
            "频次": [
              "every weekday",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "it could be useful for my future job",
              "practical",
              "time-saving"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "I am a student majoring in"
              ],
              "clueHint": "学⽣打⼯⼈",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "Study",
                "go to classes",
                "listen to a lecture"
              ],
              "clueHint": "上课查资料",
              "material": [
                "read books",
                "flip through the pages of real books",
                "go to extra classes and events",
                "work hard at my studies",
                "complete homework independently"
              ]
            },
            "频次": {
              "clue": [
                "every weekday"
              ],
              "clueHint": "每天",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "it could be useful for my future job"
              ],
              "clueHint": "有⽤",
              "material": [
                "practical",
                "time-saving"
              ]
            }
          }
        },
        {
          "id": 33,
          "title": "What work do you do",
          "q": "What work do you do?",
          "clueId": "20",
          "words": {
            "正面回答": [
              "I am a student majoring in"
            ],
            "来源或举例": [
              "Study",
              "go to classes",
              "listen to a lecture",
              "read books",
              "flip through the pages of real books",
              "go to extra classes and events",
              "work hard at my studies",
              "complete homework independently"
            ],
            "频次": [
              "every weekday",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "it could be useful for my future job",
              "practical",
              "time-saving"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "I am a student majoring in"
              ],
              "clueHint": "学⽣打⼯⼈",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "Study",
                "go to classes",
                "listen to a lecture"
              ],
              "clueHint": "上课查资料",
              "material": [
                "read books",
                "flip through the pages of real books",
                "go to extra classes and events",
                "work hard at my studies",
                "complete homework independently"
              ]
            },
            "频次": {
              "clue": [
                "every weekday"
              ],
              "clueHint": "每天",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "it could be useful for my future job"
              ],
              "clueHint": "有⽤",
              "material": [
                "practical",
                "time-saving"
              ]
            }
          }
        },
        {
          "id": 34,
          "title": "What requirements did you need to meet to get your current job",
          "q": "What requirements did you need to meet to get your current job?",
          "clueId": "20",
          "words": {
            "正面回答": [
              "I am a student majoring in"
            ],
            "来源或举例": [
              "Study",
              "go to classes",
              "listen to a lecture",
              "read books",
              "flip through the pages of real books",
              "go to extra classes and events",
              "work hard at my studies",
              "complete homework independently"
            ],
            "频次": [
              "every weekday",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "it could be useful for my future job",
              "practical",
              "time-saving"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "I am a student majoring in"
              ],
              "clueHint": "学⽣打⼯⼈",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "Study",
                "go to classes",
                "listen to a lecture"
              ],
              "clueHint": "上课查资料",
              "material": [
                "read books",
                "flip through the pages of real books",
                "go to extra classes and events",
                "work hard at my studies",
                "complete homework independently"
              ]
            },
            "频次": {
              "clue": [
                "every weekday"
              ],
              "clueHint": "每天",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "it could be useful for my future job"
              ],
              "clueHint": "有⽤",
              "material": [
                "practical",
                "time-saving"
              ]
            }
          }
        },
        {
          "id": 35,
          "title": "Why did you choose to study that subject",
          "q": "Why did you choose to study that subject?",
          "clueId": "20",
          "words": {
            "正面回答": [
              "I am a student majoring in"
            ],
            "来源或举例": [
              "Study",
              "go to classes",
              "listen to a lecture",
              "read books",
              "flip through the pages of real books",
              "go to extra classes and events",
              "work hard at my studies",
              "complete homework independently"
            ],
            "频次": [
              "every weekday",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "it could be useful for my future job",
              "practical",
              "time-saving"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "I am a student majoring in"
              ],
              "clueHint": "学⽣打⼯⼈",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "Study",
                "go to classes",
                "listen to a lecture"
              ],
              "clueHint": "上课查资料",
              "material": [
                "read books",
                "flip through the pages of real books",
                "go to extra classes and events",
                "work hard at my studies",
                "complete homework independently"
              ]
            },
            "频次": {
              "clue": [
                "every weekday"
              ],
              "clueHint": "每天",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "it could be useful for my future job"
              ],
              "clueHint": "有⽤",
              "material": [
                "practical",
                "time-saving"
              ]
            }
          }
        },
        {
          "id": 36,
          "title": "Why did you choose to do that type of work",
          "q": "Why did you choose to do that type of work?",
          "clueId": "20",
          "words": {
            "正面回答": [
              "I am a student majoring in"
            ],
            "来源或举例": [
              "Study",
              "go to classes",
              "listen to a lecture",
              "read books",
              "flip through the pages of real books",
              "go to extra classes and events",
              "work hard at my studies",
              "complete homework independently"
            ],
            "频次": [
              "every weekday",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "it could be useful for my future job",
              "practical",
              "time-saving"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "I am a student majoring in"
              ],
              "clueHint": "学⽣打⼯⼈",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "Study",
                "go to classes",
                "listen to a lecture"
              ],
              "clueHint": "上课查资料",
              "material": [
                "read books",
                "flip through the pages of real books",
                "go to extra classes and events",
                "work hard at my studies",
                "complete homework independently"
              ]
            },
            "频次": {
              "clue": [
                "every weekday"
              ],
              "clueHint": "每天",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "it could be useful for my future job"
              ],
              "clueHint": "有⽤",
              "material": [
                "practical",
                "time-saving"
              ]
            }
          }
        },
        {
          "id": 37,
          "title": "Do you have any plans for your studies in the next five years",
          "q": "Do you have any plans for your studies in the next five years?",
          "clueId": "20",
          "words": {
            "正面回答": [
              "I am a student majoring in"
            ],
            "来源或举例": [
              "Study",
              "go to classes",
              "listen to a lecture",
              "read books",
              "flip through the pages of real books",
              "go to extra classes and events",
              "work hard at my studies",
              "complete homework independently"
            ],
            "频次": [
              "every weekday",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "it could be useful for my future job",
              "practical",
              "time-saving"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "I am a student majoring in"
              ],
              "clueHint": "学⽣打⼯⼈",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "Study",
                "go to classes",
                "listen to a lecture"
              ],
              "clueHint": "上课查资料",
              "material": [
                "read books",
                "flip through the pages of real books",
                "go to extra classes and events",
                "work hard at my studies",
                "complete homework independently"
              ]
            },
            "频次": {
              "clue": [
                "every weekday"
              ],
              "clueHint": "每天",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "it could be useful for my future job"
              ],
              "clueHint": "有⽤",
              "material": [
                "practical",
                "time-saving"
              ]
            }
          }
        },
        {
          "id": 38,
          "title": "Do you have any plans for your work in the next five years",
          "q": "Do you have any plans for your work in the next five years?",
          "clueId": "20",
          "words": {
            "正面回答": [
              "I am a student majoring in"
            ],
            "来源或举例": [
              "Study",
              "go to classes",
              "listen to a lecture",
              "read books",
              "flip through the pages of real books",
              "go to extra classes and events",
              "work hard at my studies",
              "complete homework independently"
            ],
            "频次": [
              "every weekday",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "it could be useful for my future job",
              "practical",
              "time-saving"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "I am a student majoring in"
              ],
              "clueHint": "学⽣打⼯⼈",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "Study",
                "go to classes",
                "listen to a lecture"
              ],
              "clueHint": "上课查资料",
              "material": [
                "read books",
                "flip through the pages of real books",
                "go to extra classes and events",
                "work hard at my studies",
                "complete homework independently"
              ]
            },
            "频次": {
              "clue": [
                "every weekday"
              ],
              "clueHint": "每天",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "it could be useful for my future job"
              ],
              "clueHint": "有⽤",
              "material": [
                "practical",
                "time-saving"
              ]
            }
          }
        },
        {
          "id": 39,
          "title": "Who helps you the most? And how",
          "q": "Who helps you the most? And how?",
          "clueId": "20",
          "words": {
            "正面回答": [
              "I am a student majoring in"
            ],
            "来源或举例": [
              "Study",
              "go to classes",
              "listen to a lecture",
              "read books",
              "flip through the pages of real books",
              "go to extra classes and events",
              "work hard at my studies",
              "complete homework independently"
            ],
            "频次": [
              "every weekday",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "it could be useful for my future job",
              "practical",
              "time-saving"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "I am a student majoring in"
              ],
              "clueHint": "学⽣打⼯⼈",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "Study",
                "go to classes",
                "listen to a lecture"
              ],
              "clueHint": "上课查资料",
              "material": [
                "read books",
                "flip through the pages of real books",
                "go to extra classes and events",
                "work hard at my studies",
                "complete homework independently"
              ]
            },
            "频次": {
              "clue": [
                "every weekday"
              ],
              "clueHint": "每天",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "it could be useful for my future job"
              ],
              "clueHint": "有⽤",
              "material": [
                "practical",
                "time-saving"
              ]
            }
          }
        },
        {
          "id": 40,
          "title": "Are the transport facilities to your home very good",
          "q": "Are the transport facilities to your home very good?",
          "clueId": "21",
          "words": {
            "正面回答": [
              "I live in a big city",
              "have lived here since childhood"
            ],
            "来源或举例": [
              "surrounded by convenience stores, shopping malls, easy to use the subway",
              "dorms",
              "home",
              "renting an apartment",
              "stay home",
              "library"
            ],
            "频次": [
              "in my daily life",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "feel relaxed and at ease",
              "nice place to sit down and relax",
              "sit down and relax",
              "chill out",
              "take a break and relax",
              "relax my mind",
              "slow down",
              "enjoy a good laugh"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "I live in a big city",
                "have lived here since childhood"
              ],
              "clueHint": "描述地点时⻓",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "surrounded by convenience stores, shopping malls, easy to use the subway"
              ],
              "clueHint": "便利店商超地铁",
              "material": [
                "dorms",
                "home",
                "renting an apartment",
                "stay home",
                "library"
              ]
            },
            "频次": {
              "clue": [
                "in my daily life"
              ],
              "clueHint": "⽇常",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "feel relaxed and at ease",
                "nice place to sit down and relax"
              ],
              "clueHint": "舒服归属感",
              "material": [
                "sit down and relax",
                "chill out",
                "take a break and relax",
                "relax my mind",
                "slow down",
                "enjoy a good laugh"
              ]
            }
          }
        },
        {
          "id": 41,
          "title": "Please describe the room you live in.",
          "q": "Please describe the room you live in.",
          "clueId": "21",
          "words": {
            "正面回答": [
              "I live in a big city",
              "have lived here since childhood"
            ],
            "来源或举例": [
              "surrounded by convenience stores, shopping malls, easy to use the subway",
              "dorms",
              "home",
              "renting an apartment",
              "stay home",
              "library"
            ],
            "频次": [
              "in my daily life",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "feel relaxed and at ease",
              "nice place to sit down and relax",
              "sit down and relax",
              "chill out",
              "take a break and relax",
              "relax my mind",
              "slow down",
              "enjoy a good laugh"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "I live in a big city",
                "have lived here since childhood"
              ],
              "clueHint": "描述地点时⻓",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "surrounded by convenience stores, shopping malls, easy to use the subway"
              ],
              "clueHint": "便利店商超地铁",
              "material": [
                "dorms",
                "home",
                "renting an apartment",
                "stay home",
                "library"
              ]
            },
            "频次": {
              "clue": [
                "in my daily life"
              ],
              "clueHint": "⽇常",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "feel relaxed and at ease",
                "nice place to sit down and relax"
              ],
              "clueHint": "舒服归属感",
              "material": [
                "sit down and relax",
                "chill out",
                "take a break and relax",
                "relax my mind",
                "slow down",
                "enjoy a good laugh"
              ]
            }
          }
        },
        {
          "id": 42,
          "title": "Can you describe the place where you live",
          "q": "Can you describe the place where you live?",
          "clueId": "21",
          "words": {
            "正面回答": [
              "I live in a big city",
              "have lived here since childhood"
            ],
            "来源或举例": [
              "surrounded by convenience stores, shopping malls, easy to use the subway",
              "dorms",
              "home",
              "renting an apartment",
              "stay home",
              "library"
            ],
            "频次": [
              "in my daily life",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "feel relaxed and at ease",
              "nice place to sit down and relax",
              "sit down and relax",
              "chill out",
              "take a break and relax",
              "relax my mind",
              "slow down",
              "enjoy a good laugh"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "I live in a big city",
                "have lived here since childhood"
              ],
              "clueHint": "描述地点时⻓",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "surrounded by convenience stores, shopping malls, easy to use the subway"
              ],
              "clueHint": "便利店商超地铁",
              "material": [
                "dorms",
                "home",
                "renting an apartment",
                "stay home",
                "library"
              ]
            },
            "频次": {
              "clue": [
                "in my daily life"
              ],
              "clueHint": "⽇常",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "feel relaxed and at ease",
                "nice place to sit down and relax"
              ],
              "clueHint": "舒服归属感",
              "material": [
                "sit down and relax",
                "chill out",
                "take a break and relax",
                "relax my mind",
                "slow down",
                "enjoy a good laugh"
              ]
            }
          }
        },
        {
          "id": 43,
          "title": "How long have you lived there",
          "q": "How long have you lived there?",
          "clueId": "21",
          "words": {
            "正面回答": [
              "I live in a big city",
              "have lived here since childhood"
            ],
            "来源或举例": [
              "surrounded by convenience stores, shopping malls, easy to use the subway",
              "dorms",
              "home",
              "renting an apartment",
              "stay home",
              "library"
            ],
            "频次": [
              "in my daily life",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "feel relaxed and at ease",
              "nice place to sit down and relax",
              "sit down and relax",
              "chill out",
              "take a break and relax",
              "relax my mind",
              "slow down",
              "enjoy a good laugh"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "I live in a big city",
                "have lived here since childhood"
              ],
              "clueHint": "描述地点时⻓",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "surrounded by convenience stores, shopping malls, easy to use the subway"
              ],
              "clueHint": "便利店商超地铁",
              "material": [
                "dorms",
                "home",
                "renting an apartment",
                "stay home",
                "library"
              ]
            },
            "频次": {
              "clue": [
                "in my daily life"
              ],
              "clueHint": "⽇常",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "feel relaxed and at ease",
                "nice place to sit down and relax"
              ],
              "clueHint": "舒服归属感",
              "material": [
                "sit down and relax",
                "chill out",
                "take a break and relax",
                "relax my mind",
                "slow down",
                "enjoy a good laugh"
              ]
            }
          }
        },
        {
          "id": 44,
          "title": "Who do you live with",
          "q": "Who do you live with?",
          "clueId": "21",
          "words": {
            "正面回答": [
              "I live in a big city",
              "have lived here since childhood"
            ],
            "来源或举例": [
              "surrounded by convenience stores, shopping malls, easy to use the subway",
              "dorms",
              "home",
              "renting an apartment",
              "stay home",
              "library"
            ],
            "频次": [
              "in my daily life",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "feel relaxed and at ease",
              "nice place to sit down and relax",
              "sit down and relax",
              "chill out",
              "take a break and relax",
              "relax my mind",
              "slow down",
              "enjoy a good laugh"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "I live in a big city",
                "have lived here since childhood"
              ],
              "clueHint": "描述地点时⻓",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "surrounded by convenience stores, shopping malls, easy to use the subway"
              ],
              "clueHint": "便利店商超地铁",
              "material": [
                "dorms",
                "home",
                "renting an apartment",
                "stay home",
                "library"
              ]
            },
            "频次": {
              "clue": [
                "in my daily life"
              ],
              "clueHint": "⽇常",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "feel relaxed and at ease",
                "nice place to sit down and relax"
              ],
              "clueHint": "舒服归属感",
              "material": [
                "sit down and relax",
                "chill out",
                "take a break and relax",
                "relax my mind",
                "slow down",
                "enjoy a good laugh"
              ]
            }
          }
        },
        {
          "id": 45,
          "title": "What kinds of accommodation do you live in",
          "q": "What kinds of accommodation do you live in?",
          "clueId": "21",
          "words": {
            "正面回答": [
              "I live in a big city",
              "have lived here since childhood"
            ],
            "来源或举例": [
              "surrounded by convenience stores, shopping malls, easy to use the subway",
              "dorms",
              "home",
              "renting an apartment",
              "stay home",
              "library"
            ],
            "频次": [
              "in my daily life",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "feel relaxed and at ease",
              "nice place to sit down and relax",
              "sit down and relax",
              "chill out",
              "take a break and relax",
              "relax my mind",
              "slow down",
              "enjoy a good laugh"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "I live in a big city",
                "have lived here since childhood"
              ],
              "clueHint": "描述地点时⻓",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "surrounded by convenience stores, shopping malls, easy to use the subway"
              ],
              "clueHint": "便利店商超地铁",
              "material": [
                "dorms",
                "home",
                "renting an apartment",
                "stay home",
                "library"
              ]
            },
            "频次": {
              "clue": [
                "in my daily life"
              ],
              "clueHint": "⽇常",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "feel relaxed and at ease",
                "nice place to sit down and relax"
              ],
              "clueHint": "舒服归属感",
              "material": [
                "sit down and relax",
                "chill out",
                "take a break and relax",
                "relax my mind",
                "slow down",
                "enjoy a good laugh"
              ]
            }
          }
        },
        {
          "id": 46,
          "title": "Where is your hometown",
          "q": "Where is your hometown?",
          "clueId": "21",
          "words": {
            "正面回答": [
              "I live in a big city",
              "have lived here since childhood"
            ],
            "来源或举例": [
              "surrounded by convenience stores, shopping malls, easy to use the subway",
              "dorms",
              "home",
              "renting an apartment",
              "stay home",
              "library"
            ],
            "频次": [
              "in my daily life",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "feel relaxed and at ease",
              "nice place to sit down and relax",
              "sit down and relax",
              "chill out",
              "take a break and relax",
              "relax my mind",
              "slow down",
              "enjoy a good laugh"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "I live in a big city",
                "have lived here since childhood"
              ],
              "clueHint": "描述地点时⻓",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "surrounded by convenience stores, shopping malls, easy to use the subway"
              ],
              "clueHint": "便利店商超地铁",
              "material": [
                "dorms",
                "home",
                "renting an apartment",
                "stay home",
                "library"
              ]
            },
            "频次": {
              "clue": [
                "in my daily life"
              ],
              "clueHint": "⽇常",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "feel relaxed and at ease",
                "nice place to sit down and relax"
              ],
              "clueHint": "舒服归属感",
              "material": [
                "sit down and relax",
                "chill out",
                "take a break and relax",
                "relax my mind",
                "slow down",
                "enjoy a good laugh"
              ]
            }
          }
        },
        {
          "id": 47,
          "title": "Is that a big city or a small place",
          "q": "Is that a big city or a small place?",
          "clueId": "21",
          "words": {
            "正面回答": [
              "I live in a big city",
              "have lived here since childhood"
            ],
            "来源或举例": [
              "surrounded by convenience stores, shopping malls, easy to use the subway",
              "dorms",
              "home",
              "renting an apartment",
              "stay home",
              "library"
            ],
            "频次": [
              "in my daily life",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "feel relaxed and at ease",
              "nice place to sit down and relax",
              "sit down and relax",
              "chill out",
              "take a break and relax",
              "relax my mind",
              "slow down",
              "enjoy a good laugh"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "I live in a big city",
                "have lived here since childhood"
              ],
              "clueHint": "描述地点时⻓",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "surrounded by convenience stores, shopping malls, easy to use the subway"
              ],
              "clueHint": "便利店商超地铁",
              "material": [
                "dorms",
                "home",
                "renting an apartment",
                "stay home",
                "library"
              ]
            },
            "频次": {
              "clue": [
                "in my daily life"
              ],
              "clueHint": "⽇常",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "feel relaxed and at ease",
                "nice place to sit down and relax"
              ],
              "clueHint": "舒服归属感",
              "material": [
                "sit down and relax",
                "chill out",
                "take a break and relax",
                "relax my mind",
                "slow down",
                "enjoy a good laugh"
              ]
            }
          }
        },
        {
          "id": 48,
          "title": "Please describe your hometown a little.",
          "q": "Please describe your hometown a little.",
          "clueId": "21",
          "words": {
            "正面回答": [
              "I live in a big city",
              "have lived here since childhood"
            ],
            "来源或举例": [
              "surrounded by convenience stores, shopping malls, easy to use the subway",
              "dorms",
              "home",
              "renting an apartment",
              "stay home",
              "library"
            ],
            "频次": [
              "in my daily life",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "feel relaxed and at ease",
              "nice place to sit down and relax",
              "sit down and relax",
              "chill out",
              "take a break and relax",
              "relax my mind",
              "slow down",
              "enjoy a good laugh"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "I live in a big city",
                "have lived here since childhood"
              ],
              "clueHint": "描述地点时⻓",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "surrounded by convenience stores, shopping malls, easy to use the subway"
              ],
              "clueHint": "便利店商超地铁",
              "material": [
                "dorms",
                "home",
                "renting an apartment",
                "stay home",
                "library"
              ]
            },
            "频次": {
              "clue": [
                "in my daily life"
              ],
              "clueHint": "⽇常",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "feel relaxed and at ease",
                "nice place to sit down and relax"
              ],
              "clueHint": "舒服归属感",
              "material": [
                "sit down and relax",
                "chill out",
                "take a break and relax",
                "relax my mind",
                "slow down",
                "enjoy a good laugh"
              ]
            }
          }
        },
        {
          "id": 49,
          "title": "How long have you been living there",
          "q": "How long have you been living there?",
          "clueId": "21",
          "words": {
            "正面回答": [
              "I live in a big city",
              "have lived here since childhood"
            ],
            "来源或举例": [
              "surrounded by convenience stores, shopping malls, easy to use the subway",
              "dorms",
              "home",
              "renting an apartment",
              "stay home",
              "library"
            ],
            "频次": [
              "in my daily life",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "feel relaxed and at ease",
              "nice place to sit down and relax",
              "sit down and relax",
              "chill out",
              "take a break and relax",
              "relax my mind",
              "slow down",
              "enjoy a good laugh"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "I live in a big city",
                "have lived here since childhood"
              ],
              "clueHint": "描述地点时⻓",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "surrounded by convenience stores, shopping malls, easy to use the subway"
              ],
              "clueHint": "便利店商超地铁",
              "material": [
                "dorms",
                "home",
                "renting an apartment",
                "stay home",
                "library"
              ]
            },
            "频次": {
              "clue": [
                "in my daily life"
              ],
              "clueHint": "⽇常",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "feel relaxed and at ease",
                "nice place to sit down and relax"
              ],
              "clueHint": "舒服归属感",
              "material": [
                "sit down and relax",
                "chill out",
                "take a break and relax",
                "relax my mind",
                "slow down",
                "enjoy a good laugh"
              ]
            }
          }
        },
        {
          "id": 50,
          "title": "What's your hometown famous for",
          "q": "What's your hometown famous for?",
          "clueId": "21",
          "words": {
            "正面回答": [
              "I live in a big city",
              "have lived here since childhood"
            ],
            "来源或举例": [
              "surrounded by convenience stores, shopping malls, easy to use the subway",
              "dorms",
              "home",
              "renting an apartment",
              "stay home",
              "library"
            ],
            "频次": [
              "in my daily life",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "feel relaxed and at ease",
              "nice place to sit down and relax",
              "sit down and relax",
              "chill out",
              "take a break and relax",
              "relax my mind",
              "slow down",
              "enjoy a good laugh"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "I live in a big city",
                "have lived here since childhood"
              ],
              "clueHint": "描述地点时⻓",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "surrounded by convenience stores, shopping malls, easy to use the subway"
              ],
              "clueHint": "便利店商超地铁",
              "material": [
                "dorms",
                "home",
                "renting an apartment",
                "stay home",
                "library"
              ]
            },
            "频次": {
              "clue": [
                "in my daily life"
              ],
              "clueHint": "⽇常",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "feel relaxed and at ease",
                "nice place to sit down and relax"
              ],
              "clueHint": "舒服归属感",
              "material": [
                "sit down and relax",
                "chill out",
                "take a break and relax",
                "relax my mind",
                "slow down",
                "enjoy a good laugh"
              ]
            }
          }
        },
        {
          "id": 51,
          "title": "Did you learn about the history of your hometown at school",
          "q": "Did you learn about the history of your hometown at school?",
          "clueId": "21",
          "words": {
            "正面回答": [
              "I live in a big city",
              "have lived here since childhood"
            ],
            "来源或举例": [
              "surrounded by convenience stores, shopping malls, easy to use the subway",
              "dorms",
              "home",
              "renting an apartment",
              "stay home",
              "library"
            ],
            "频次": [
              "in my daily life",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "feel relaxed and at ease",
              "nice place to sit down and relax",
              "sit down and relax",
              "chill out",
              "take a break and relax",
              "relax my mind",
              "slow down",
              "enjoy a good laugh"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "I live in a big city",
                "have lived here since childhood"
              ],
              "clueHint": "描述地点时⻓",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "surrounded by convenience stores, shopping malls, easy to use the subway"
              ],
              "clueHint": "便利店商超地铁",
              "material": [
                "dorms",
                "home",
                "renting an apartment",
                "stay home",
                "library"
              ]
            },
            "频次": {
              "clue": [
                "in my daily life"
              ],
              "clueHint": "⽇常",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "feel relaxed and at ease",
                "nice place to sit down and relax"
              ],
              "clueHint": "舒服归属感",
              "material": [
                "sit down and relax",
                "chill out",
                "take a break and relax",
                "relax my mind",
                "slow down",
                "enjoy a good laugh"
              ]
            }
          }
        },
        {
          "id": 52,
          "title": "Did you learn about the culture of your hometown at school",
          "q": "Did you learn about the culture of your hometown at school?",
          "clueId": "21",
          "words": {
            "正面回答": [
              "I live in a big city",
              "have lived here since childhood"
            ],
            "来源或举例": [
              "surrounded by convenience stores, shopping malls, easy to use the subway",
              "dorms",
              "home",
              "renting an apartment",
              "stay home",
              "library"
            ],
            "频次": [
              "in my daily life",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "feel relaxed and at ease",
              "nice place to sit down and relax",
              "sit down and relax",
              "chill out",
              "take a break and relax",
              "relax my mind",
              "slow down",
              "enjoy a good laugh"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "I live in a big city",
                "have lived here since childhood"
              ],
              "clueHint": "描述地点时⻓",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "surrounded by convenience stores, shopping malls, easy to use the subway"
              ],
              "clueHint": "便利店商超地铁",
              "material": [
                "dorms",
                "home",
                "renting an apartment",
                "stay home",
                "library"
              ]
            },
            "频次": {
              "clue": [
                "in my daily life"
              ],
              "clueHint": "⽇常",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "feel relaxed and at ease",
                "nice place to sit down and relax"
              ],
              "clueHint": "舒服归属感",
              "material": [
                "sit down and relax",
                "chill out",
                "take a break and relax",
                "relax my mind",
                "slow down",
                "enjoy a good laugh"
              ]
            }
          }
        },
        {
          "id": 53,
          "title": "Did you learn about the history of your hometown in childhood",
          "q": "Did you learn about the history of your hometown in childhood?",
          "clueId": "21",
          "words": {
            "正面回答": [
              "I live in a big city",
              "have lived here since childhood"
            ],
            "来源或举例": [
              "surrounded by convenience stores, shopping malls, easy to use the subway",
              "dorms",
              "home",
              "renting an apartment",
              "stay home",
              "library"
            ],
            "频次": [
              "in my daily life",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "feel relaxed and at ease",
              "nice place to sit down and relax",
              "sit down and relax",
              "chill out",
              "take a break and relax",
              "relax my mind",
              "slow down",
              "enjoy a good laugh"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "I live in a big city",
                "have lived here since childhood"
              ],
              "clueHint": "描述地点时⻓",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "surrounded by convenience stores, shopping malls, easy to use the subway"
              ],
              "clueHint": "便利店商超地铁",
              "material": [
                "dorms",
                "home",
                "renting an apartment",
                "stay home",
                "library"
              ]
            },
            "频次": {
              "clue": [
                "in my daily life"
              ],
              "clueHint": "⽇常",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "feel relaxed and at ease",
                "nice place to sit down and relax"
              ],
              "clueHint": "舒服归属感",
              "material": [
                "sit down and relax",
                "chill out",
                "take a break and relax",
                "relax my mind",
                "slow down",
                "enjoy a good laugh"
              ]
            }
          }
        },
        {
          "id": 54,
          "title": "Did you learn about the culture of your hometown in childhood",
          "q": "Did you learn about the culture of your hometown in childhood?",
          "clueId": "21",
          "words": {
            "正面回答": [
              "I live in a big city",
              "have lived here since childhood"
            ],
            "来源或举例": [
              "surrounded by convenience stores, shopping malls, easy to use the subway",
              "dorms",
              "home",
              "renting an apartment",
              "stay home",
              "library"
            ],
            "频次": [
              "in my daily life",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "feel relaxed and at ease",
              "nice place to sit down and relax",
              "sit down and relax",
              "chill out",
              "take a break and relax",
              "relax my mind",
              "slow down",
              "enjoy a good laugh"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "I live in a big city",
                "have lived here since childhood"
              ],
              "clueHint": "描述地点时⻓",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "surrounded by convenience stores, shopping malls, easy to use the subway"
              ],
              "clueHint": "便利店商超地铁",
              "material": [
                "dorms",
                "home",
                "renting an apartment",
                "stay home",
                "library"
              ]
            },
            "频次": {
              "clue": [
                "in my daily life"
              ],
              "clueHint": "⽇常",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "feel relaxed and at ease",
                "nice place to sit down and relax"
              ],
              "clueHint": "舒服归属感",
              "material": [
                "sit down and relax",
                "chill out",
                "take a break and relax",
                "relax my mind",
                "slow down",
                "enjoy a good laugh"
              ]
            }
          }
        },
        {
          "id": 55,
          "title": "Are there many young people in your hometown",
          "q": "Are there many young people in your hometown?",
          "clueId": "21",
          "words": {
            "正面回答": [
              "I live in a big city",
              "have lived here since childhood"
            ],
            "来源或举例": [
              "surrounded by convenience stores, shopping malls, easy to use the subway",
              "dorms",
              "home",
              "renting an apartment",
              "stay home",
              "library"
            ],
            "频次": [
              "in my daily life",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "feel relaxed and at ease",
              "nice place to sit down and relax",
              "sit down and relax",
              "chill out",
              "take a break and relax",
              "relax my mind",
              "slow down",
              "enjoy a good laugh"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "I live in a big city",
                "have lived here since childhood"
              ],
              "clueHint": "描述地点时⻓",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "surrounded by convenience stores, shopping malls, easy to use the subway"
              ],
              "clueHint": "便利店商超地铁",
              "material": [
                "dorms",
                "home",
                "renting an apartment",
                "stay home",
                "library"
              ]
            },
            "频次": {
              "clue": [
                "in my daily life"
              ],
              "clueHint": "⽇常",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "feel relaxed and at ease",
                "nice place to sit down and relax"
              ],
              "clueHint": "舒服归属感",
              "material": [
                "sit down and relax",
                "chill out",
                "take a break and relax",
                "relax my mind",
                "slow down",
                "enjoy a good laugh"
              ]
            }
          }
        },
        {
          "id": 56,
          "title": "Do you know any famous people in your area",
          "q": "Do you know any famous people in your area?",
          "clueId": "21",
          "words": {
            "正面回答": [
              "I live in a big city",
              "have lived here since childhood"
            ],
            "来源或举例": [
              "surrounded by convenience stores, shopping malls, easy to use the subway",
              "dorms",
              "home",
              "renting an apartment",
              "stay home",
              "library"
            ],
            "频次": [
              "in my daily life",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "feel relaxed and at ease",
              "nice place to sit down and relax",
              "sit down and relax",
              "chill out",
              "take a break and relax",
              "relax my mind",
              "slow down",
              "enjoy a good laugh"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "I live in a big city",
                "have lived here since childhood"
              ],
              "clueHint": "描述地点时⻓",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "surrounded by convenience stores, shopping malls, easy to use the subway"
              ],
              "clueHint": "便利店商超地铁",
              "material": [
                "dorms",
                "home",
                "renting an apartment",
                "stay home",
                "library"
              ]
            },
            "频次": {
              "clue": [
                "in my daily life"
              ],
              "clueHint": "⽇常",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "feel relaxed and at ease",
                "nice place to sit down and relax"
              ],
              "clueHint": "舒服归属感",
              "material": [
                "sit down and relax",
                "chill out",
                "take a break and relax",
                "relax my mind",
                "slow down",
                "enjoy a good laugh"
              ]
            }
          }
        },
        {
          "id": 57,
          "title": "What are some changes in the area recently",
          "q": "What are some changes in the area recently?",
          "clueId": "21",
          "words": {
            "正面回答": [
              "I live in a big city",
              "have lived here since childhood"
            ],
            "来源或举例": [
              "surrounded by convenience stores, shopping malls, easy to use the subway",
              "dorms",
              "home",
              "renting an apartment",
              "stay home",
              "library"
            ],
            "频次": [
              "in my daily life",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "feel relaxed and at ease",
              "nice place to sit down and relax",
              "sit down and relax",
              "chill out",
              "take a break and relax",
              "relax my mind",
              "slow down",
              "enjoy a good laugh"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "I live in a big city",
                "have lived here since childhood"
              ],
              "clueHint": "描述地点时⻓",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "surrounded by convenience stores, shopping malls, easy to use the subway"
              ],
              "clueHint": "便利店商超地铁",
              "material": [
                "dorms",
                "home",
                "renting an apartment",
                "stay home",
                "library"
              ]
            },
            "频次": {
              "clue": [
                "in my daily life"
              ],
              "clueHint": "⽇常",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "feel relaxed and at ease",
                "nice place to sit down and relax"
              ],
              "clueHint": "舒服归属感",
              "material": [
                "sit down and relax",
                "chill out",
                "take a break and relax",
                "relax my mind",
                "slow down",
                "enjoy a good laugh"
              ]
            }
          }
        },
        {
          "id": 58,
          "title": "Do you know any of your neighbors",
          "q": "Do you know any of your neighbors?",
          "clueId": "21",
          "words": {
            "正面回答": [
              "I live in a big city",
              "have lived here since childhood"
            ],
            "来源或举例": [
              "surrounded by convenience stores, shopping malls, easy to use the subway",
              "dorms",
              "home",
              "renting an apartment",
              "stay home",
              "library"
            ],
            "频次": [
              "in my daily life",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "feel relaxed and at ease",
              "nice place to sit down and relax",
              "sit down and relax",
              "chill out",
              "take a break and relax",
              "relax my mind",
              "slow down",
              "enjoy a good laugh"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "I live in a big city",
                "have lived here since childhood"
              ],
              "clueHint": "描述地点时⻓",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "surrounded by convenience stores, shopping malls, easy to use the subway"
              ],
              "clueHint": "便利店商超地铁",
              "material": [
                "dorms",
                "home",
                "renting an apartment",
                "stay home",
                "library"
              ]
            },
            "频次": {
              "clue": [
                "in my daily life"
              ],
              "clueHint": "⽇常",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "feel relaxed and at ease",
                "nice place to sit down and relax"
              ],
              "clueHint": "舒服归属感",
              "material": [
                "sit down and relax",
                "chill out",
                "take a break and relax",
                "relax my mind",
                "slow down",
                "enjoy a good laugh"
              ]
            }
          }
        },
        {
          "id": 59,
          "title": "Are the people in your neighborhood nice and friendly",
          "q": "Are the people in your neighborhood nice and friendly?",
          "clueId": "21",
          "words": {
            "正面回答": [
              "I live in a big city",
              "have lived here since childhood"
            ],
            "来源或举例": [
              "surrounded by convenience stores, shopping malls, easy to use the subway",
              "dorms",
              "home",
              "renting an apartment",
              "stay home",
              "library"
            ],
            "频次": [
              "in my daily life",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "feel relaxed and at ease",
              "nice place to sit down and relax",
              "sit down and relax",
              "chill out",
              "take a break and relax",
              "relax my mind",
              "slow down",
              "enjoy a good laugh"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "I live in a big city",
                "have lived here since childhood"
              ],
              "clueHint": "描述地点时⻓",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "surrounded by convenience stores, shopping malls, easy to use the subway"
              ],
              "clueHint": "便利店商超地铁",
              "material": [
                "dorms",
                "home",
                "renting an apartment",
                "stay home",
                "library"
              ]
            },
            "频次": {
              "clue": [
                "in my daily life"
              ],
              "clueHint": "⽇常",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "feel relaxed and at ease",
                "nice place to sit down and relax"
              ],
              "clueHint": "舒服归属感",
              "material": [
                "sit down and relax",
                "chill out",
                "take a break and relax",
                "relax my mind",
                "slow down",
                "enjoy a good laugh"
              ]
            }
          }
        },
        {
          "id": 60,
          "title": "Do you live in a noisy or a quiet area",
          "q": "Do you live in a noisy or a quiet area?",
          "clueId": "21",
          "words": {
            "正面回答": [
              "I live in a big city",
              "have lived here since childhood"
            ],
            "来源或举例": [
              "surrounded by convenience stores, shopping malls, easy to use the subway",
              "dorms",
              "home",
              "renting an apartment",
              "stay home",
              "library"
            ],
            "频次": [
              "in my daily life",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "feel relaxed and at ease",
              "nice place to sit down and relax",
              "sit down and relax",
              "chill out",
              "take a break and relax",
              "relax my mind",
              "slow down",
              "enjoy a good laugh"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "I live in a big city",
                "have lived here since childhood"
              ],
              "clueHint": "描述地点时⻓",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "surrounded by convenience stores, shopping malls, easy to use the subway"
              ],
              "clueHint": "便利店商超地铁",
              "material": [
                "dorms",
                "home",
                "renting an apartment",
                "stay home",
                "library"
              ]
            },
            "频次": {
              "clue": [
                "in my daily life"
              ],
              "clueHint": "⽇常",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "feel relaxed and at ease",
                "nice place to sit down and relax"
              ],
              "clueHint": "舒服归属感",
              "material": [
                "sit down and relax",
                "chill out",
                "take a break and relax",
                "relax my mind",
                "slow down",
                "enjoy a good laugh"
              ]
            }
          }
        },
        {
          "id": 61,
          "title": "What city do you live in",
          "q": "What city do you live in?",
          "clueId": "21",
          "words": {
            "正面回答": [
              "I live in a big city",
              "have lived here since childhood"
            ],
            "来源或举例": [
              "surrounded by convenience stores, shopping malls, easy to use the subway",
              "dorms",
              "home",
              "renting an apartment",
              "stay home",
              "library"
            ],
            "频次": [
              "in my daily life",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "feel relaxed and at ease",
              "nice place to sit down and relax",
              "sit down and relax",
              "chill out",
              "take a break and relax",
              "relax my mind",
              "slow down",
              "enjoy a good laugh"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "I live in a big city",
                "have lived here since childhood"
              ],
              "clueHint": "描述地点时⻓",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "surrounded by convenience stores, shopping malls, easy to use the subway"
              ],
              "clueHint": "便利店商超地铁",
              "material": [
                "dorms",
                "home",
                "renting an apartment",
                "stay home",
                "library"
              ]
            },
            "频次": {
              "clue": [
                "in my daily life"
              ],
              "clueHint": "⽇常",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "feel relaxed and at ease",
                "nice place to sit down and relax"
              ],
              "clueHint": "舒服归属感",
              "material": [
                "sit down and relax",
                "chill out",
                "take a break and relax",
                "relax my mind",
                "slow down",
                "enjoy a good laugh"
              ]
            }
          }
        },
        {
          "id": 62,
          "title": "How long have you lived in this city",
          "q": "How long have you lived in this city?",
          "clueId": "21",
          "words": {
            "正面回答": [
              "I live in a big city",
              "have lived here since childhood"
            ],
            "来源或举例": [
              "surrounded by convenience stores, shopping malls, easy to use the subway",
              "dorms",
              "home",
              "renting an apartment",
              "stay home",
              "library"
            ],
            "频次": [
              "in my daily life",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "feel relaxed and at ease",
              "nice place to sit down and relax",
              "sit down and relax",
              "chill out",
              "take a break and relax",
              "relax my mind",
              "slow down",
              "enjoy a good laugh"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "I live in a big city",
                "have lived here since childhood"
              ],
              "clueHint": "描述地点时⻓",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "surrounded by convenience stores, shopping malls, easy to use the subway"
              ],
              "clueHint": "便利店商超地铁",
              "material": [
                "dorms",
                "home",
                "renting an apartment",
                "stay home",
                "library"
              ]
            },
            "频次": {
              "clue": [
                "in my daily life"
              ],
              "clueHint": "⽇常",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "feel relaxed and at ease",
                "nice place to sit down and relax"
              ],
              "clueHint": "舒服归属感",
              "material": [
                "sit down and relax",
                "chill out",
                "take a break and relax",
                "relax my mind",
                "slow down",
                "enjoy a good laugh"
              ]
            }
          }
        },
        {
          "id": 63,
          "title": "Is this city your permanent residence",
          "q": "Is this city your permanent residence?",
          "clueId": "21",
          "words": {
            "正面回答": [
              "I live in a big city",
              "have lived here since childhood"
            ],
            "来源或举例": [
              "surrounded by convenience stores, shopping malls, easy to use the subway",
              "dorms",
              "home",
              "renting an apartment",
              "stay home",
              "library"
            ],
            "频次": [
              "in my daily life",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "feel relaxed and at ease",
              "nice place to sit down and relax",
              "sit down and relax",
              "chill out",
              "take a break and relax",
              "relax my mind",
              "slow down",
              "enjoy a good laugh"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "I live in a big city",
                "have lived here since childhood"
              ],
              "clueHint": "描述地点时⻓",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "surrounded by convenience stores, shopping malls, easy to use the subway"
              ],
              "clueHint": "便利店商超地铁",
              "material": [
                "dorms",
                "home",
                "renting an apartment",
                "stay home",
                "library"
              ]
            },
            "频次": {
              "clue": [
                "in my daily life"
              ],
              "clueHint": "⽇常",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "feel relaxed and at ease",
                "nice place to sit down and relax"
              ],
              "clueHint": "舒服归属感",
              "material": [
                "sit down and relax",
                "chill out",
                "take a break and relax",
                "relax my mind",
                "slow down",
                "enjoy a good laugh"
              ]
            }
          }
        },
        {
          "id": 64,
          "title": "Are there big changes in this city",
          "q": "Are there big changes in this city?",
          "clueId": "21",
          "words": {
            "正面回答": [
              "I live in a big city",
              "have lived here since childhood"
            ],
            "来源或举例": [
              "surrounded by convenience stores, shopping malls, easy to use the subway",
              "dorms",
              "home",
              "renting an apartment",
              "stay home",
              "library"
            ],
            "频次": [
              "in my daily life",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "feel relaxed and at ease",
              "nice place to sit down and relax",
              "sit down and relax",
              "chill out",
              "take a break and relax",
              "relax my mind",
              "slow down",
              "enjoy a good laugh"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "I live in a big city",
                "have lived here since childhood"
              ],
              "clueHint": "描述地点时⻓",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "surrounded by convenience stores, shopping malls, easy to use the subway"
              ],
              "clueHint": "便利店商超地铁",
              "material": [
                "dorms",
                "home",
                "renting an apartment",
                "stay home",
                "library"
              ]
            },
            "频次": {
              "clue": [
                "in my daily life"
              ],
              "clueHint": "⽇常",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "feel relaxed and at ease",
                "nice place to sit down and relax"
              ],
              "clueHint": "舒服归属感",
              "material": [
                "sit down and relax",
                "chill out",
                "take a break and relax",
                "relax my mind",
                "slow down",
                "enjoy a good laugh"
              ]
            }
          }
        },
        {
          "id": 65,
          "title": "Are there people of different ages living in this city",
          "q": "Are there people of different ages living in this city?",
          "clueId": "21",
          "words": {
            "正面回答": [
              "I live in a big city",
              "have lived here since childhood"
            ],
            "来源或举例": [
              "surrounded by convenience stores, shopping malls, easy to use the subway",
              "dorms",
              "home",
              "renting an apartment",
              "stay home",
              "library"
            ],
            "频次": [
              "in my daily life",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "feel relaxed and at ease",
              "nice place to sit down and relax",
              "sit down and relax",
              "chill out",
              "take a break and relax",
              "relax my mind",
              "slow down",
              "enjoy a good laugh"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "I live in a big city",
                "have lived here since childhood"
              ],
              "clueHint": "描述地点时⻓",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "surrounded by convenience stores, shopping malls, easy to use the subway"
              ],
              "clueHint": "便利店商超地铁",
              "material": [
                "dorms",
                "home",
                "renting an apartment",
                "stay home",
                "library"
              ]
            },
            "频次": {
              "clue": [
                "in my daily life"
              ],
              "clueHint": "⽇常",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "feel relaxed and at ease",
                "nice place to sit down and relax"
              ],
              "clueHint": "舒服归属感",
              "material": [
                "sit down and relax",
                "chill out",
                "take a break and relax",
                "relax my mind",
                "slow down",
                "enjoy a good laugh"
              ]
            }
          }
        },
        {
          "id": 66,
          "title": "Are the people friendly in the city",
          "q": "Are the people friendly in the city?",
          "clueId": "21",
          "words": {
            "正面回答": [
              "I live in a big city",
              "have lived here since childhood"
            ],
            "来源或举例": [
              "surrounded by convenience stores, shopping malls, easy to use the subway",
              "dorms",
              "home",
              "renting an apartment",
              "stay home",
              "library"
            ],
            "频次": [
              "in my daily life",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "feel relaxed and at ease",
              "nice place to sit down and relax",
              "sit down and relax",
              "chill out",
              "take a break and relax",
              "relax my mind",
              "slow down",
              "enjoy a good laugh"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "I live in a big city",
                "have lived here since childhood"
              ],
              "clueHint": "描述地点时⻓",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "surrounded by convenience stores, shopping malls, easy to use the subway"
              ],
              "clueHint": "便利店商超地铁",
              "material": [
                "dorms",
                "home",
                "renting an apartment",
                "stay home",
                "library"
              ]
            },
            "频次": {
              "clue": [
                "in my daily life"
              ],
              "clueHint": "⽇常",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "feel relaxed and at ease",
                "nice place to sit down and relax"
              ],
              "clueHint": "舒服归属感",
              "material": [
                "sit down and relax",
                "chill out",
                "take a break and relax",
                "relax my mind",
                "slow down",
                "enjoy a good laugh"
              ]
            }
          }
        },
        {
          "id": 67,
          "title": "What's the weather like where you live",
          "q": "What's the weather like where you live?",
          "clueId": "21",
          "words": {
            "正面回答": [
              "I live in a big city",
              "have lived here since childhood"
            ],
            "来源或举例": [
              "surrounded by convenience stores, shopping malls, easy to use the subway",
              "dorms",
              "home",
              "renting an apartment",
              "stay home",
              "library"
            ],
            "频次": [
              "in my daily life",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "feel relaxed and at ease",
              "nice place to sit down and relax",
              "sit down and relax",
              "chill out",
              "take a break and relax",
              "relax my mind",
              "slow down",
              "enjoy a good laugh"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "I live in a big city",
                "have lived here since childhood"
              ],
              "clueHint": "描述地点时⻓",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "surrounded by convenience stores, shopping malls, easy to use the subway"
              ],
              "clueHint": "便利店商超地铁",
              "material": [
                "dorms",
                "home",
                "renting an apartment",
                "stay home",
                "library"
              ]
            },
            "频次": {
              "clue": [
                "in my daily life"
              ],
              "clueHint": "⽇常",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "feel relaxed and at ease",
                "nice place to sit down and relax"
              ],
              "clueHint": "舒服归属感",
              "material": [
                "sit down and relax",
                "chill out",
                "take a break and relax",
                "relax my mind",
                "slow down",
                "enjoy a good laugh"
              ]
            }
          }
        },
        {
          "id": 68,
          "title": "When was the last time you had a few days off",
          "q": "When was the last time you had a few days off?",
          "clueId": "22",
          "words": {
            "正面回答": [
              "Just last month"
            ],
            "来源或举例": [
              "binge-watch TV shows",
              "have some me time at home",
              "watch movies",
              "listen to music",
              "sing a song",
              "eat out in a restaurant",
              "dorms"
            ],
            "频次": [
              "rarely get the chance",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "relax my mind",
              "take a break and relax",
              "sit down and relax",
              "chill out",
              "slow down",
              "enjoy a good laugh",
              "unwind",
              "a great way to unwind"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "Just last month"
              ],
              "clueHint": "上周上个⽉",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "binge-watch TV shows",
                "have some me time at home"
              ],
              "clueHint": "追剧独处",
              "material": [
                "watch movies",
                "listen to music",
                "sing a song",
                "eat out in a restaurant",
                "dorms"
              ]
            },
            "频次": {
              "clue": [
                "rarely get the chance"
              ],
              "clueHint": "难得",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "relax my mind",
                "take a break and relax"
              ],
              "clueHint": "放松⼼智",
              "material": [
                "sit down and relax",
                "chill out",
                "slow down",
                "enjoy a good laugh",
                "unwind",
                "a great way to unwind"
              ]
            }
          }
        },
        {
          "id": 69,
          "title": "Can you remember the dreams you had",
          "q": "Can you remember the dreams you had?",
          "clueId": "23",
          "words": {
            "正面回答": [
              "Yes, sometimes I do"
            ],
            "来源或举例": [
              "usually recall them right after I get up",
              "childhood",
              "before I went to primary school",
              "after I went to middle school",
              "when I started university",
              "after I get up"
            ],
            "频次": [
              "from time to time",
              "regularly",
              "as often as I can",
              "childhood",
              "before I went to primary school",
              "after I went to middle school",
              "when I started university"
            ],
            "感受": [
              "I don't know how to explain it, but it's fascinating",
              "I don't know how to explain"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "Yes, sometimes I do"
              ],
              "clueHint": "记得",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "usually recall them right after I get up"
              ],
              "clueHint": "考试起床后",
              "material": [
                "childhood",
                "before I went to primary school",
                "after I went to middle school",
                "when I started university",
                "after I get up"
              ]
            },
            "频次": {
              "clue": [
                "from time to time"
              ],
              "clueHint": "偶尔",
              "material": [
                "regularly",
                "as often as I can",
                "childhood",
                "before I went to primary school",
                "after I went to middle school",
                "when I started university"
              ]
            },
            "感受": {
              "clue": [
                "I don't know how to explain it, but it's fascinating"
              ],
              "clueHint": "⽆法解释",
              "material": [
                "I don't know how to explain"
              ]
            }
          }
        },
        {
          "id": 70,
          "title": "Have you ever lost your keys",
          "q": "Have you ever lost your keys?",
          "clueId": "24",
          "words": {
            "正面回答": [
              "Unfortunately, yes"
            ],
            "来源或举例": [
              "when I tried to grab my stuff",
              "before I go out",
              "get dressed",
              "eat breakfast",
              "grab my stuff",
              "head out",
              "pay with my phone"
            ],
            "频次": [
              "only once or twice",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "it bothers me a lot, taught me to be careful",
              "it bothers me"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [
                "Unfortunately, yes"
              ],
              "clueHint": "丢过",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "when I tried to grab my stuff",
                "before I go out"
              ],
              "clueHint": "拿东西出⻔前",
              "material": [
                "get dressed",
                "eat breakfast",
                "grab my stuff",
                "head out",
                "pay with my phone"
              ]
            },
            "频次": {
              "clue": [
                "only once or twice"
              ],
              "clueHint": "极少",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "it bothers me a lot, taught me to be careful"
              ],
              "clueHint": "烦恼教训",
              "material": [
                "it bothers me"
              ]
            }
          }
        },
        {
          "id": 71,
          "title": "What did you often do with your friends in your childhood",
          "q": "What did you often do with your friends in your childhood?",
          "clueId": "m1",
          "words": {
            "正面回答": [],
            "来源或举例": [
              "play video games",
              "have a chat",
              "hang out",
              "go to parties",
              "get together with friends and classmates",
              "meet like-minded people"
            ],
            "频次": [
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school",
              "when I started university"
            ],
            "感受": [
              "enjoy a good laugh",
              "sit down and relax",
              "chill out",
              "take a break and relax",
              "relax my mind",
              "slow down",
              "unwind"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [],
              "clueHint": "",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "play video games"
              ],
              "clueHint": "打游戏",
              "material": [
                "have a chat",
                "hang out",
                "go to parties",
                "get together with friends and classmates",
                "meet like-minded people"
              ]
            },
            "频次": {
              "clue": [
                "regularly"
              ],
              "clueHint": "经常",
              "material": [
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school",
                "when I started university"
              ]
            },
            "感受": {
              "clue": [
                "enjoy a good laugh"
              ],
              "clueHint": "开怀⼤笑",
              "material": [
                "sit down and relax",
                "chill out",
                "take a break and relax",
                "relax my mind",
                "slow down",
                "unwind"
              ]
            }
          }
        },
        {
          "id": 72,
          "title": "Do you have any plans for the next five years",
          "q": "Do you have any plans for the next five years?",
          "clueId": "m2",
          "words": {
            "正面回答": [],
            "来源或举例": [
              "work hard at my studies",
              "study",
              "go to classes",
              "read books",
              "flip through the pages of real books",
              "go to extra classes and events"
            ],
            "频次": [
              "every day",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "practical",
              "time-saving"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [],
              "clueHint": "",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "work hard at my studies"
              ],
              "clueHint": "努⼒学习",
              "material": [
                "study",
                "go to classes",
                "read books",
                "flip through the pages of real books",
                "go to extra classes and events"
              ]
            },
            "频次": {
              "clue": [
                "every day"
              ],
              "clueHint": "每天",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "practical"
              ],
              "clueHint": "实⽤",
              "material": [
                "time-saving"
              ]
            }
          }
        },
        {
          "id": 73,
          "title": "What are examples of good and poor phone manners",
          "q": "What are examples of good and poor phone manners?",
          "clueId": "m3",
          "words": {
            "正面回答": [],
            "来源或举例": [
              "have a chat",
              "hang out",
              "go to parties",
              "get together with friends and classmates",
              "meet like-minded people",
              "have a conversation"
            ],
            "频次": [
              "from time to time",
              "regularly",
              "as often as I can",
              "childhood",
              "before I went to primary school",
              "after I went to middle school",
              "when I started university"
            ],
            "感受": [
              "bothers me",
              "it bothers me"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [],
              "clueHint": "",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "have a chat"
              ],
              "clueHint": "⼤声聊天",
              "material": [
                "hang out",
                "go to parties",
                "get together with friends and classmates",
                "meet like-minded people",
                "have a conversation"
              ]
            },
            "频次": {
              "clue": [
                "from time to time"
              ],
              "clueHint": "偶尔",
              "material": [
                "regularly",
                "as often as I can",
                "childhood",
                "before I went to primary school",
                "after I went to middle school",
                "when I started university"
              ]
            },
            "感受": {
              "clue": [
                "bothers me"
              ],
              "clueHint": "烦恼",
              "material": [
                "it bothers me"
              ]
            }
          }
        },
        {
          "id": 74,
          "title": "What kind of music events are there in your country",
          "q": "What kind of music events are there in your country?",
          "clueId": "m4",
          "words": {
            "正面回答": [],
            "来源或举例": [
              "listen to music"
            ],
            "频次": [
              "at weekends",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "relax",
              "sit down and relax",
              "chill out",
              "take a break and relax",
              "relax my mind",
              "slow down",
              "enjoy a good laugh"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [],
              "clueHint": "",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "listen to music"
              ],
              "clueHint": "听⾳乐",
              "material": []
            },
            "频次": {
              "clue": [
                "at weekends"
              ],
              "clueHint": "周末",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "relax"
              ],
              "clueHint": "放松",
              "material": [
                "sit down and relax",
                "chill out",
                "take a break and relax",
                "relax my mind",
                "slow down",
                "enjoy a good laugh"
              ]
            }
          }
        },
        {
          "id": 75,
          "title": "What short-term jobs do young people do in other countries",
          "q": "What short-term jobs do young people do in other countries?",
          "clueId": "m5",
          "words": {
            "正面回答": [],
            "来源或举例": [
              "eat out",
              "breakfast",
              "dinner",
              "takeaways",
              "street food",
              "food ingredients"
            ],
            "频次": [
              "during holidays",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "practical",
              "time-saving"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [],
              "clueHint": "",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "eat out"
              ],
              "clueHint": "餐厅外出吃饭",
              "material": [
                "breakfast",
                "dinner",
                "takeaways",
                "street food",
                "food ingredients"
              ]
            },
            "频次": {
              "clue": [
                "during holidays"
              ],
              "clueHint": "假期",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "practical"
              ],
              "clueHint": "实⽤",
              "material": [
                "time-saving"
              ]
            }
          }
        },
        {
          "id": 76,
          "title": "What kind of things are people happy to pay a high price for",
          "q": "What kind of things are people happy to pay a high price for?",
          "clueId": "m6",
          "words": {
            "正面回答": [],
            "来源或举例": [
              "clothes",
              "coat",
              "t-shirt",
              "sweatshirt"
            ],
            "频次": [
              "from time to time",
              "regularly",
              "as often as I can",
              "childhood",
              "before I went to primary school",
              "after I went to middle school",
              "when I started university"
            ],
            "感受": [
              "makes me happy",
              "it makes me happy",
              "really lifts my mood",
              "feel relaxed and at ease",
              "appreciated"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [],
              "clueHint": "",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "clothes",
                "coat"
              ],
              "clueHint": "⾐服",
              "material": [
                "t-shirt",
                "sweatshirt"
              ]
            },
            "频次": {
              "clue": [
                "from time to time"
              ],
              "clueHint": "偶尔",
              "material": [
                "regularly",
                "as often as I can",
                "childhood",
                "before I went to primary school",
                "after I went to middle school",
                "when I started university"
              ]
            },
            "感受": {
              "clue": [
                "makes me happy"
              ],
              "clueHint": "开⼼",
              "material": [
                "it makes me happy",
                "really lifts my mood",
                "feel relaxed and at ease",
                "appreciated"
              ]
            }
          }
        },
        {
          "id": 77,
          "title": "What challenges do young people face when working abroad",
          "q": "What challenges do young people face when working abroad?",
          "clueId": "m7",
          "words": {
            "正面回答": [],
            "来源或举例": [
              "renting an apartment",
              "dorms",
              "home",
              "stay home"
            ],
            "频次": [
              "every day",
              "regularly",
              "as often as I can",
              "from time to time",
              "childhood",
              "before I went to primary school",
              "after I went to middle school"
            ],
            "感受": [
              "pressure",
              "bothers me",
              "it bothers me"
            ]
          },
          "wordLayers": {
            "正面回答": {
              "clue": [],
              "clueHint": "",
              "material": []
            },
            "来源或举例": {
              "clue": [
                "renting an apartment"
              ],
              "clueHint": "租房",
              "material": [
                "dorms",
                "home",
                "stay home"
              ]
            },
            "频次": {
              "clue": [
                "every day"
              ],
              "clueHint": "每天",
              "material": [
                "regularly",
                "as often as I can",
                "from time to time",
                "childhood",
                "before I went to primary school",
                "after I went to middle school"
              ]
            },
            "感受": {
              "clue": [
                "pressure",
                "bothers me"
              ],
              "clueHint": "压⼒",
              "material": [
                "it bothers me"
              ]
            }
          }
        }
      ],
      "tipModel": "clue+material"
    },
    {
      "id": "xihao",
      "name": "喜好类",
      "steps": [
        "正面回答",
        "原因或时间",
        "频次",
        "感受"
      ],
      "questions": [
        {
          "id": 1,
          "title": "What is your favourite food",
          "q": "What is your favourite food?",
          "words": {
            "正面回答": [
              "I am a big fan of"
            ],
            "原因或时间": [
              "delicious",
              "mouth-watering desserts"
            ],
            "频次": [
              "order takeout"
            ],
            "感受": [
              "it really hits the spot"
            ]
          }
        },
        {
          "id": 2,
          "title": "What kind of food did you like when you were young",
          "q": "What kind of food did you like when you were young?",
          "words": {
            "正面回答": [
              "I had a sweet tooth"
            ],
            "原因或时间": [
              "childhood",
              "before primary school"
            ],
            "频次": [
              "have cake for breakfast"
            ],
            "感受": [
              "it always cheers me up",
              "have a great time"
            ]
          }
        },
        {
          "id": 3,
          "title": "Has your favourite food changed since you were a child",
          "q": "Has your favourite food changed since you were a child?",
          "words": {
            "正面回答": [
              "Yes, definitely changed"
            ],
            "原因或时间": [
              "to stay healthy"
            ],
            "频次": [
              "buy fresh groceries",
              "fresh ingredients"
            ],
            "感受": [
              "good for both body and mind"
            ]
          }
        },
        {
          "id": 4,
          "title": "Whats your favourite animal",
          "q": "Whats your favourite animal? Why?",
          "words": {
            "正面回答": [
              "I'm a dog person"
            ],
            "原因或时间": [
              "they are incredibly loyal"
            ],
            "频次": [
              "keep me company at home"
            ],
            "感受": [
              "a great way to unwind",
              "unwind"
            ]
          }
        },
        {
          "id": 5,
          "title": "Do you like watching team games",
          "q": "Do you like watching team games? Why?",
          "words": {
            "正面回答": [
              "I'm really into them"
            ],
            "原因或时间": [
              "in my free time",
              "when I have some free time"
            ],
            "频次": [
              "watch basketball games",
              "volleyball games"
            ],
            "感受": [
              "clear my mind"
            ]
          }
        },
        {
          "id": 6,
          "title": "Do you have any hobbies",
          "q": "Do you have any hobbies?",
          "words": {
            "正面回答": [
              "I have quite a few"
            ],
            "原因或时间": [
              "at weekends"
            ],
            "频次": [
              "binge-watch TV shows"
            ],
            "感受": [
              "sit back and relax"
            ]
          }
        },
        {
          "id": 7,
          "title": "Did you have any hobbies when you were a child",
          "q": "Did you have any hobbies when you were a child?",
          "words": {
            "正面回答": [
              "Absolutely"
            ],
            "原因或时间": [
              "before primary school"
            ],
            "频次": [
              "play video games"
            ],
            "感受": [
              "great fun",
              "have a great time"
            ]
          }
        },
        {
          "id": 8,
          "title": "Do you have a hobby that you’ve had since childhood",
          "q": "Do you have a hobby that you ve had since childhood?",
          "words": {
            "正面回答": [
              "Exactly"
            ],
            "原因或时间": [
              "before bed"
            ],
            "频次": [
              "flip through physical books"
            ],
            "感受": [
              "reflect on things"
            ]
          }
        },
        {
          "id": 9,
          "title": "Do you have the same hobbies as your family members",
          "q": "Do you have the same hobbies as your family members?",
          "words": {
            "正面回答": [
              "Yes, we share some"
            ],
            "原因或时间": [
              "during the holidays"
            ],
            "频次": [
              "eat out together"
            ],
            "感受": [
              "open up to each other"
            ]
          }
        },
        {
          "id": 10,
          "title": "Do you like getting up early in the morning",
          "q": "Do you like getting up early in the morning?",
          "words": {
            "正面回答": [
              "Honestly, yes"
            ],
            "原因或时间": [
              "the first thing I do after getting up"
            ],
            "频次": [
              "go jogging"
            ],
            "感受": [
              "energetic",
              "full of energy"
            ]
          }
        },
        {
          "id": 11,
          "title": "Do you like reading",
          "q": "Do you like reading?",
          "words": {
            "正面回答": [
              "I'm passionate about reading"
            ],
            "原因或时间": [
              "when I feel bored"
            ],
            "频次": [
              "read in the library"
            ],
            "感受": [
              "unwind",
              "feel at peace"
            ]
          }
        },
        {
          "id": 12,
          "title": "Where would you like to take a long walk if you had the chan",
          "q": "Where would you like to take a long walk if you had the chance?",
          "words": {
            "正面回答": [
              "the local park"
            ],
            "原因或时间": [
              "when the weather is nice"
            ],
            "频次": [
              "go for a walk"
            ],
            "感受": [
              "feel relaxed and at ease"
            ]
          }
        },
        {
          "id": 13,
          "title": "Do you like to take scenery pictures",
          "q": "Do you like to take scenery pictures?",
          "words": {
            "正面回答": [
              "Definitely"
            ],
            "原因或时间": [
              "capture moments of my life"
            ],
            "频次": [
              "take photos outdoors"
            ],
            "感受": [
              "It",
              "s something I",
              "ll never forget"
            ]
          }
        },
        {
          "id": 14,
          "title": "Do you like taking pictures of different views",
          "q": "Do you like taking pictures of different views?",
          "words": {
            "正面回答": [
              "I'm crazy about it"
            ],
            "原因或时间": [
              "when travelling",
              "on vacation"
            ],
            "频次": [
              "cityscapes and nature"
            ],
            "感受": [
              "relieve stress"
            ]
          }
        },
        {
          "id": 15,
          "title": "Is there a building that you would like to visit",
          "q": "Is there a building that you would like to visit?",
          "words": {
            "正面回答": [
              "yes, there is one"
            ],
            "原因或时间": [
              "its unique design"
            ],
            "频次": [
              "cafes"
            ],
            "感受": [
              "meet like-minded people"
            ]
          }
        },
        {
          "id": 16,
          "title": "What were your favourite activities when you were a child",
          "q": "What were your favourite activities when you were a child?",
          "words": {
            "正面回答": [
              "One of my favourite things to do as a child was"
            ],
            "原因或时间": [
              "outside of class"
            ],
            "频次": [
              "hang out with friends"
            ],
            "感受": [
              "have a good laugh"
            ]
          }
        },
        {
          "id": 17,
          "title": "Would you like to see more public places near where you live",
          "q": "Would you like to see more public places near where you live?",
          "words": {
            "正面回答": [
              "Yes, absolutely"
            ],
            "原因或时间": [
              "convenient for getting together"
            ],
            "频次": [
              "shopping malls"
            ],
            "感受": [
              "really convenient"
            ]
          }
        },
        {
          "id": 18,
          "title": "Would you like to work as a teacher in a rule-free school",
          "q": "Would you like to work as a teacher in a rule-free school?",
          "words": {
            "正面回答": [
              "I'd love to"
            ],
            "原因或时间": [
              "the free atmosphere"
            ],
            "频次": [
              "exchange ideas freely"
            ],
            "感受": [
              "be more self-motivated"
            ]
          }
        },
        {
          "id": 19,
          "title": "Do you like buying shoes",
          "q": "Do you like buying shoes? How often?",
          "words": {
            "正面回答": [
              "yes, I'm a big fan"
            ],
            "原因或时间": [
              "when putting together outfits"
            ],
            "频次": [
              "shop online regularly"
            ],
            "感受": [
              "it helps to light up my mood"
            ]
          }
        },
        {
          "id": 20,
          "title": "Do you like crowded places",
          "q": "Do you like crowded places?",
          "words": {
            "正面回答": [
              "to be honest, no"
            ],
            "原因或时间": [
              "especially during rush hour"
            ],
            "频次": [
              "take the subway"
            ],
            "感受": [
              "it really gets to me"
            ]
          }
        },
        {
          "id": 21,
          "title": "Are you happy to work with people who are older than you",
          "q": "Are you happy to work with people who are older than you?",
          "words": {
            "正面回答": [
              "yes, I'm happy to"
            ],
            "原因或时间": [
              "they have so much experience"
            ],
            "频次": [
              "have a good chat"
            ],
            "感受": [
              "it will be useful for my future career"
            ]
          }
        },
        {
          "id": 22,
          "title": "Do you enjoy spending time with old people",
          "q": "Do you enjoy spending time with old people?",
          "words": {
            "正面回答": [
              "Definitely enjoy it"
            ],
            "原因或时间": [
              "in my spare time"
            ],
            "频次": [
              "share stories"
            ],
            "感受": [
              "feel valued"
            ]
          }
        },
        {
          "id": 23,
          "title": "Are you interested in growing vegetables and fruits",
          "q": "Are you interested in growing vegetables and fruits?",
          "words": {
            "正面回答": [
              "I'm quite interested"
            ],
            "原因或时间": [
              "when I",
              "m not studying"
            ],
            "频次": [
              "groceries",
              "fresh ingredients"
            ],
            "感受": [
              "a nice way to unwind"
            ]
          }
        },
        {
          "id": 24,
          "title": "Do you like chatting with friends",
          "q": "Do you like chatting with friends?",
          "words": {
            "正面回答": [
              "it's my favourite thing to do"
            ],
            "原因或时间": [
              "at weekends"
            ],
            "频次": [
              "chat over coffee"
            ],
            "感受": [
              "motivate each other"
            ]
          }
        },
        {
          "id": 25,
          "title": "Do you like to lend things to others",
          "q": "Do you like to lend things to others?",
          "words": {
            "正面回答": [
              "I don't mind"
            ],
            "原因或时间": [
              "in daily life"
            ],
            "频次": [
              "lend my books"
            ],
            "感受": [
              "shows real kindness"
            ]
          }
        },
        {
          "id": 26,
          "title": "Do you mind if others borrow money from you",
          "q": "Do you mind if others borrow money from you?",
          "words": {
            "正面回答": [
              "Honestly, yes"
            ],
            "原因或时间": [
              "it's complicated"
            ],
            "频次": [
              "hard to get my things back"
            ],
            "感受": [
              "it really gets to me"
            ]
          }
        },
        {
          "id": 27,
          "title": "Do you like advertisements",
          "q": "Do you like advertisements?",
          "words": {
            "正面回答": [
              "it depends on the situation"
            ],
            "原因或时间": [
              "when I browse videos"
            ],
            "频次": [
              "creative ads"
            ],
            "感受": [
              "have a good laugh"
            ]
          }
        },
        {
          "id": 28,
          "title": "What kind of advertising do you like",
          "q": "What kind of advertising do you like?",
          "words": {
            "正面回答": [
              "humorous ones"
            ],
            "原因或时间": [
              "when watching movies"
            ],
            "频次": [
              "product placements"
            ],
            "感受": [
              "clear my mind"
            ]
          }
        },
        {
          "id": 29,
          "title": "What kind of things do you like to share with others",
          "q": "What kind of things do you like to share with others?",
          "words": {
            "正面回答": [
              "I like sharing food"
            ],
            "原因或时间": [
              "when I go to gatherings"
            ],
            "频次": [
              "enjoy tasty local food"
            ],
            "感受": [
              "meet like-minded people"
            ]
          }
        },
        {
          "id": 30,
          "title": "Who is the first person you would like to share good news wi",
          "q": "Who is the first person you would like to share good news with?",
          "words": {
            "正面回答": [
              "my homie",
              "besties"
            ],
            "原因或时间": [
              "whenever I get good news"
            ],
            "频次": [
              "share our thoughts on WeChat"
            ],
            "感受": [
              "it helps to light up my mood"
            ]
          }
        },
        {
          "id": 31,
          "title": "Do you like your subject",
          "q": "Do you like your subject?",
          "words": {
            "正面回答": [
              "I'm passionate about it"
            ],
            "原因或时间": [
              "really convenient"
            ],
            "频次": [
              "attend classes",
              "listen to a lecture"
            ],
            "感受": [
              "self-motivated",
              "strive in one",
              "s studies"
            ]
          }
        },
        {
          "id": 32,
          "title": "Do you want to change your major",
          "q": "Do you want to change your major?",
          "words": {
            "正面回答": [
              "absolutely not"
            ],
            "原因或时间": [
              "I'm passionate about it"
            ],
            "频次": [
              "study at the library"
            ],
            "感受": [
              "it will be useful for my future career"
            ]
          }
        },
        {
          "id": 33,
          "title": "Are you looking forward to working",
          "q": "Are you looking forward to working?",
          "words": {
            "正面回答": [
              "Definitely"
            ],
            "原因或时间": [
              "after graduation"
            ],
            "频次": [
              "no longer rely on my parents"
            ],
            "感受": [
              "stand on my own two feet"
            ]
          }
        },
        {
          "id": 34,
          "title": "Do you like your job",
          "q": "Do you like your job?",
          "words": {
            "正面回答": [
              "yes, I do"
            ],
            "原因或时间": [
              "a great atmosphere"
            ],
            "频次": [
              "exchange ideas"
            ],
            "感受": [
              "both practical and fulfilling"
            ]
          }
        },
        {
          "id": 35,
          "title": "Do you want to change to another job",
          "q": "Do you want to change to another job?",
          "words": {
            "正面回答": [
              "not at the moment"
            ],
            "原因或时间": [
              "at this stage of my life"
            ],
            "频次": [
              "focus on my current work"
            ],
            "感受": [
              "feel relaxed and at ease"
            ]
          }
        },
        {
          "id": 36,
          "title": "Do you miss being a student",
          "q": "Do you miss being a student?",
          "words": {
            "正面回答": [
              "I absolutely miss it"
            ],
            "原因或时间": [
              "when work gets tiring"
            ],
            "频次": [
              "the school canteen and classrooms"
            ],
            "感受": [
              "holds a lot of precious memories"
            ]
          }
        },
        {
          "id": 37,
          "title": "What kind of house or apartment do you want to live in in th",
          "q": "What kind of house or apartment do you want to live in in the future?",
          "words": {
            "正面回答": [
              "a spacious house"
            ],
            "原因或时间": [
              "enjoy the peace and quiet"
            ],
            "频次": [
              "a residential area"
            ],
            "感受": [
              "a good form of self-care",
              "unwind"
            ]
          }
        },
        {
          "id": 38,
          "title": "What part of your home do you like the most",
          "q": "What part of your home do you like the most?",
          "words": {
            "正面回答": [
              "my bedroom"
            ],
            "原因或时间": [
              "when I need some me-time"
            ],
            "频次": [
              "listen to music",
              "binge-watch TV shows"
            ],
            "感受": [
              "unwind"
            ]
          }
        },
        {
          "id": 39,
          "title": "Whats your favorite room in your apartment or house",
          "q": "Whats your favorite room in your apartment or house?",
          "words": {
            "正面回答": [
              "the living room"
            ],
            "原因或时间": [
              "after dinner"
            ],
            "频次": [
              "spend time with my family"
            ],
            "感受": [
              "have a good laugh"
            ]
          }
        },
        {
          "id": 40,
          "title": "Do you plan to live there for a long time",
          "q": "Do you plan to live there for a long time?",
          "words": {
            "正面回答": [
              "yes, I plan to"
            ],
            "原因或时间": [
              "as long as I live here"
            ],
            "频次": [
              "close to convenience stores"
            ],
            "感受": [
              "feel relaxed and at ease"
            ]
          }
        },
        {
          "id": 41,
          "title": "Do you like your hometown",
          "q": "Do you like your hometown?",
          "words": {
            "正面回答": [
              "I'm a big fan of it"
            ],
            "原因或时间": [
              "a foodie paradise"
            ],
            "频次": [
              "street food",
              "tasty local food"
            ],
            "感受": [
              "it really hits the spot"
            ]
          }
        },
        {
          "id": 42,
          "title": "Do you like living there",
          "q": "Do you like living there?",
          "words": {
            "正面回答": [
              "yes, I really enjoy living there"
            ],
            "原因或时间": [
              "in my free time"
            ],
            "频次": [
              "go into the city centre"
            ],
            "感受": [
              "take a proper break"
            ]
          }
        },
        {
          "id": 43,
          "title": "What do you like  about your hometown",
          "q": "What do you like most about your hometown?",
          "words": {
            "正面回答": [
              "the natural scenery"
            ],
            "原因或时间": [
              "on sunny days"
            ],
            "频次": [
              "go for a walk in the park"
            ],
            "感受": [
              "relieve stress"
            ]
          }
        },
        {
          "id": 44,
          "title": "Is there anything you dislike about it",
          "q": "Is there anything you dislike about it?",
          "words": {
            "正面回答": [
              "The only thing I dislike is"
            ],
            "原因或时间": [
              "the heavy traffic"
            ],
            "频次": [
              "during rush hour"
            ],
            "感受": [
              "it really gets to me"
            ]
          }
        },
        {
          "id": 45,
          "title": "Do you like the area that you live in",
          "q": "Do you like the area that you live in?",
          "words": {
            "正面回答": [
              "Definitely"
            ],
            "原因或时间": [
              "great infrastructure"
            ],
            "频次": [
              "just a 10-minute walk from my home"
            ],
            "感受": [
              "really convenient"
            ]
          }
        },
        {
          "id": 46,
          "title": "Where do you like to go in that area",
          "q": "Where do you like to go in that area?",
          "words": {
            "正面回答": [
              "I love going to the cafes"
            ],
            "原因或时间": [
              "when I have some free time"
            ],
            "频次": [
              "read"
            ],
            "感受": [
              "reflect on things"
            ]
          }
        },
        {
          "id": 47,
          "title": "Do you like this city",
          "q": "Do you like this city? Why?",
          "words": {
            "正面回答": [
              "I'm passionate about it"
            ],
            "原因或时间": [
              "ever since I moved here"
            ],
            "频次": [
              "take part in extracurricular activities"
            ],
            "感受": [
              "holds a lot of memories for me"
            ]
          }
        },
        {
          "id": 48,
          "title": "What would you like to do if you had a day off tomorrow",
          "q": "What would you like to do if you had a day off tomorrow?",
          "words": {
            "正面回答": [
              "I'd love to get some proper rest"
            ],
            "原因或时间": [
              "during the day off"
            ],
            "频次": [
              "stay home and enjoy some me-time"
            ],
            "感受": [
              "clear my mind"
            ]
          }
        },
        {
          "id": 49,
          "title": "Do you want to make your dreams come true",
          "q": "Do you want to make your dreams come true?",
          "words": {
            "正面回答": [
              "I absolutely want to make them come true"
            ],
            "原因或时间": [
              "for my future"
            ],
            "频次": [
              "take the initiative to work hard",
              "strive in one",
              "s studies"
            ],
            "感受": [
              "The thing will make me happy is the time when it comes true"
            ]
          }
        }
      ]
    },
    {
      "id": "xingwei",
      "name": "行为习惯类",
      "steps": [
        "正面回答",
        "原因",
        "时间线+行为描述",
        "影响"
      ],
      "questions": [
        {
          "id": 1,
          "title": "Do you eat different foods at different times of the year",
          "q": "Do you eat different foods at different times of the year?",
          "words": {
            "正面回答": [
              "Absolutely yes"
            ],
            "原因": [
              "groceries",
              "fresh ingredients"
            ],
            "时间线+行为描述": [
              "get together"
            ],
            "影响": [
              "good for both body and mind"
            ]
          }
        },
        {
          "id": 2,
          "title": "What do you usually do in the morning",
          "q": "What do you usually do in the morning?",
          "words": {
            "正面回答": [
              "I have a daily routine"
            ],
            "原因": [
              "self-care"
            ],
            "时间线+行为描述": [
              "after I get up",
              "go jogging"
            ],
            "影响": [
              "energetic",
              "full of energy"
            ]
          }
        },
        {
          "id": 3,
          "title": "What did you do in the morning when you were little",
          "q": "What did you do in the morning when you were little?",
          "words": {
            "正面回答": [
              "It was quite simple"
            ],
            "原因": [
              "my parents requirements"
            ],
            "时间线+行为描述": [
              "before primary school",
              "have breakfast"
            ],
            "影响": [
              "strive in one",
              "s studies"
            ]
          }
        },
        {
          "id": 4,
          "title": "Do you walk a lot",
          "q": "Do you walk a lot?",
          "words": {
            "正面回答": [
              "Definitely"
            ],
            "原因": [
              "relieve stress"
            ],
            "时间线+行为描述": [
              "in my free time",
              "go for a walk"
            ],
            "影响": [
              "feel relaxed and at ease"
            ]
          }
        },
        {
          "id": 5,
          "title": "Did you often go outside to have a walk when you were a chil",
          "q": "Did you often go outside to have a walk when you were a child?",
          "words": {
            "正面回答": [
              "Yes, I used to"
            ],
            "原因": [
              "get close to nature"
            ],
            "时间线+行为描述": [
              "when the weather is nice"
            ],
            "影响": [
              "have a good laugh"
            ]
          }
        },
        {
          "id": 6,
          "title": "Do you look out the window at the scenery when travelling by",
          "q": "Do you look out the window at the scenery when travelling by bus or car?",
          "words": {
            "正面回答": [
              "I always do that"
            ],
            "原因": [
              "when I feel bored"
            ],
            "时间线+行为描述": [
              "take a bus",
              "listen to music"
            ],
            "影响": [
              "clear my mind"
            ]
          }
        },
        {
          "id": 7,
          "title": "Do you take photos of buildings",
          "q": "Do you take photos of buildings?",
          "words": {
            "正面回答": [
              "I often take photos"
            ],
            "原因": [
              "be passionate about things"
            ],
            "时间线+行为描述": [
              "the city centre",
              "take photos"
            ],
            "影响": [
              "reflect on things"
            ]
          }
        },
        {
          "id": 8,
          "title": "Do you keep plants at home",
          "q": "Do you keep plants at home?",
          "words": {
            "正面回答": [
              "Yes, quite a few"
            ],
            "原因": [
              "a nice sensory experience"
            ],
            "时间线+行为描述": [
              "stay at home"
            ],
            "影响": [
              "a great way to unwind",
              "unwind"
            ]
          }
        },
        {
          "id": 9,
          "title": "Do you wear headphones in public places",
          "q": "Do you wear headphones in public places?",
          "words": {
            "正面回答": [
              "almost always"
            ],
            "原因": [
              "have some me-time"
            ],
            "时间线+行为描述": [
              "in public during rush hour"
            ],
            "影响": [
              "escape the hustle and bustle of the city"
            ]
          }
        },
        {
          "id": 10,
          "title": "Do you often go to public places with your friends",
          "q": "Do you often go to public places with your friends?",
          "words": {
            "正面回答": [
              "regularly"
            ],
            "原因": [
              "the lively atmosphere"
            ],
            "时间线+行为描述": [
              "shopping malls"
            ],
            "影响": [
              "expand our social circle"
            ]
          }
        },
        {
          "id": 11,
          "title": "How much money do you usually spend on shoes",
          "q": "How much money do you usually spend on shoes?",
          "words": {
            "正面回答": [
              "I spend quite a lot"
            ],
            "原因": [
              "get dressed"
            ],
            "时间线+行为描述": [
              "shop online"
            ],
            "影响": [
              "it always cheers me up"
            ]
          }
        },
        {
          "id": 12,
          "title": "Do you often tell your friends when they do something well",
          "q": "Do you often tell your friends when they do something well?",
          "words": {
            "正面回答": [
              "Exactly, I always tell them"
            ],
            "原因": [
              "motivate each other"
            ],
            "时间线+行为描述": [
              "go to parties"
            ],
            "影响": [
              "real kindness"
            ]
          }
        },
        {
          "id": 13,
          "title": "Do you bring food or snacks with you when going out",
          "q": "Do you bring food or snacks with you when going out?",
          "words": {
            "正面回答": [
              "I have the habit of bringing snacks"
            ],
            "原因": [
              "practical"
            ],
            "时间线+行为描述": [
              "grab my things before I go out"
            ],
            "影响": [
              "self-care"
            ]
          }
        },
        {
          "id": 14,
          "title": "Do you always take your mobile phone with you when going out",
          "q": "Do you always take your mobile phone with you when going out?",
          "words": {
            "正面回答": [
              "Absolutely"
            ],
            "原因": [
              "rely on"
            ],
            "时间线+行为描述": [
              "places",
              "pay by phone"
            ],
            "影响": [
              "it really gets to me"
            ]
          }
        },
        {
          "id": 15,
          "title": "Do you often bring cash with you",
          "q": "Do you often bring cash with you?",
          "words": {
            "正面回答": [
              "seldom these days"
            ],
            "原因": [
              "practical"
            ],
            "时间线+行为描述": [
              "convenience stores"
            ],
            "影响": [
              "clear my mind"
            ]
          }
        },
        {
          "id": 16,
          "title": "How often do you use cash",
          "q": "How often do you use cash?",
          "words": {
            "正面回答": [
              "I rarely use cash now"
            ],
            "原因": [
              "lifestyle"
            ],
            "时间线+行为描述": [
              "street market"
            ],
            "影响": [
              "it always cheers me up"
            ]
          }
        },
        {
          "id": 17,
          "title": "What do you usually chat about with friends",
          "q": "What do you usually chat about with friends?",
          "words": {
            "正面回答": [
              "all sorts of things"
            ],
            "原因": [
              "meet like-minded people"
            ],
            "时间线+行为描述": [
              "cafes",
              "have a good chat"
            ],
            "影响": [
              "open up to each other"
            ]
          }
        },
        {
          "id": 18,
          "title": "Do you argue with friends",
          "q": "Do you argue with friends?",
          "words": {
            "正面回答": [
              "occasionally we do"
            ],
            "原因": [
              "have strong opinions"
            ],
            "时间线+行为描述": [
              "exchange ideas"
            ],
            "影响": [
              "reflect on things"
            ]
          }
        },
        {
          "id": 19,
          "title": "Do you often see advertisements when you are on your phone o",
          "q": "Do you often see advertisements when you are on your phone or computer?",
          "words": {
            "正面回答": [
              "all the time"
            ],
            "原因": [
              "a bit obsessed with short videos"
            ],
            "时间线+行为描述": [
              "spend a lot of time on short video apps"
            ],
            "影响": [
              "it really gets to me"
            ]
          }
        },
        {
          "id": 20,
          "title": "Do you often visit a museum",
          "q": "Do you often visit a museum?",
          "words": {
            "正面回答": [
              "from time to time"
            ],
            "原因": [
              "outside of class"
            ],
            "时间线+行为描述": [
              "the city centre"
            ],
            "影响": [
              "good for both body and mind"
            ]
          }
        },
        {
          "id": 21,
          "title": "How often do you take a rest or a break",
          "q": "How often do you take a rest or a break?",
          "words": {
            "正面回答": [
              "every single day"
            ],
            "原因": [
              "to relieve stress"
            ],
            "时间线+行为描述": [
              "library"
            ],
            "影响": [
              "sit back and relax"
            ]
          }
        },
        {
          "id": 22,
          "title": "What do you usually do when you are resting",
          "q": "What do you usually do when you are resting?",
          "words": {
            "正面回答": [
              "I do lots of things"
            ],
            "原因": [
              "have some me-time"
            ],
            "时间线+行为描述": [
              "dorms",
              "binge-watch TV shows"
            ],
            "影响": [
              "clear my mind"
            ]
          }
        },
        {
          "id": 23,
          "title": "Do you take a nap when you are taking your rest",
          "q": "Do you take a nap when you are taking your rest?",
          "words": {
            "正面回答": [
              "Yes, I usually take a nap"
            ],
            "原因": [
              "self-care"
            ],
            "时间线+行为描述": [
              "until noon"
            ],
            "影响": [
              "feel relaxed and at ease"
            ]
          }
        },
        {
          "id": 24,
          "title": "How much time do you spend on your studies each week",
          "q": "How much time do you spend on your studies each week?",
          "words": {
            "正面回答": [
              "I spend a massive amount of time"
            ],
            "原因": [
              "work hard at my studies"
            ],
            "时间线+行为描述": [
              "the classroom",
              "finish homework on my own"
            ],
            "影响": [
              "What makes me happy is the moment when"
            ]
          }
        },
        {
          "id": 25,
          "title": "What technology do you use when you study / at work",
          "q": "What technology do you use when you study / at work?",
          "words": {
            "正面回答": [
              "iPad",
              "mainly my laptop and iPad"
            ],
            "原因": [
              "it's just my personal habit"
            ],
            "时间线+行为描述": [
              "attend classes",
              "listen to a lecture"
            ],
            "影响": [
              "practical"
            ]
          }
        },
        {
          "id": 26,
          "title": "What room does your family spend most of the time in",
          "q": "What room does your family spend most of the time in?",
          "words": {
            "正面回答": [
              "definitely the living room"
            ],
            "原因": [
              "share stories"
            ],
            "时间线+行为描述": [
              "dinner"
            ],
            "影响": [
              "precious memories"
            ]
          }
        },
        {
          "id": 27,
          "title": "What do you usually do in your apartment",
          "q": "What do you usually do in your apartment?",
          "words": {
            "正面回答": [
              "I usually stay at home"
            ],
            "原因": [
              "have some me-time"
            ],
            "时间线+行为描述": [
              "my rented apartment",
              "flip through physical books"
            ],
            "影响": [
              "slow down"
            ]
          }
        },
        {
          "id": 28,
          "title": "Do you often see your neighbors",
          "q": "Do you often see your neighbors?",
          "words": {
            "正面回答": [
              "yes, quite often"
            ],
            "原因": [
              "a residential area"
            ],
            "时间线+行为描述": [
              "head out"
            ],
            "影响": [
              "have a good chat"
            ]
          }
        },
        {
          "id": 29,
          "title": "What do you usually do when you have days off",
          "q": "What do you usually do when you have days off?",
          "words": {
            "正面回答": [
              "I have a packed schedule"
            ],
            "原因": [
              "be passionate about"
            ],
            "时间线+行为描述": [
              "enjoy tasty local food",
              "eat out together"
            ],
            "影响": [
              "it helps to light up my mood"
            ]
          }
        },
        {
          "id": 30,
          "title": "Do you usually spend your days off with your parents or with",
          "q": "Do you usually spend your days off with your parents or with your friends?",
          "words": {
            "正面回答": [
              "mostly with my friends"
            ],
            "原因": [
              "meet like-minded people"
            ],
            "时间线+行为描述": [
              "in my free time",
              "hang out"
            ],
            "影响": [
              "take a proper break"
            ]
          }
        },
        {
          "id": 31,
          "title": "Do you share your dreams with others",
          "q": "Do you share your dreams with others?",
          "words": {
            "正面回答": [
              "yes, I share them quite often"
            ],
            "原因": [
              "open up to each other"
            ],
            "时间线+行为描述": [
              "get together with friends and classmates"
            ],
            "影响": [
              "motivate each other"
            ]
          }
        },
        {
          "id": 32,
          "title": "Do you always bring a lot of keys with you",
          "q": "Do you always bring a lot of keys with you?",
          "words": {
            "正面回答": [
              "no, rarely"
            ],
            "原因": [
              "rely on"
            ],
            "时间线+行为描述": [
              "grab my things before I go out"
            ],
            "影响": [
              "practical"
            ]
          }
        },
        {
          "id": 33,
          "title": "Do you often forget the keys and lock yourself out？",
          "q": "Do you often forget the keys and lock yourself out？",
          "words": {
            "正面回答": [
              "it happens occasionally"
            ],
            "原因": [
              "something unexpected comes up"
            ],
            "时间线+行为描述": [
              "school"
            ],
            "影响": [
              "it really gets to me"
            ]
          }
        }
      ]
    },
    {
      "id": "guandian",
      "name": "观点类",
      "steps": [
        "正面回答",
        "举例或原因",
        "作用或影响",
        "感受"
      ],
      "questions": [
        {
          "id": 1,
          "title": "What is the most popular animal in China",
          "q": "What is the most popular animal in China?",
          "words": {
            "正面回答": [
              "I'd say pandas and dogs"
            ],
            "举例或原因": [
              "loyal"
            ],
            "作用或影响": [
              "self-care"
            ],
            "感受": [
              "a great way to unwind"
            ]
          }
        },
        {
          "id": 2,
          "title": "Is team sports popular in your culture",
          "q": "Is team sports popular in your culture?",
          "words": {
            "正面回答": [
              "Absolutely yes"
            ],
            "举例或原因": [
              "play basketball",
              "volleyball"
            ],
            "作用或影响": [
              "motivate each other"
            ],
            "感受": [
              "feel relaxed and at ease"
            ]
          }
        },
        {
          "id": 3,
          "title": "What do you consider when choosing a gift",
          "q": "What do you consider when choosing a gift?",
          "words": {
            "正面回答": [
              "functionality comes first"
            ],
            "举例或原因": [
              "coat",
              "sweatshirt"
            ],
            "作用或影响": [
              "practical"
            ],
            "感受": [
              "lifts my mood"
            ]
          }
        },
        {
          "id": 4,
          "title": "Do you think you are good at choosing gifts",
          "q": "Do you think you are good at choosing gifts?",
          "words": {
            "正面回答": [
              "I'm quite good at it"
            ],
            "举例或原因": [
              "open up to each other"
            ],
            "作用或影响": [
              "lifestyle"
            ],
            "感受": [
              "have a good laugh"
            ]
          }
        },
        {
          "id": 5,
          "title": "Why do people like to walk in parks",
          "q": "Why do people like to walk in parks?",
          "words": {
            "正面回答": [
              "to get close to nature"
            ],
            "举例或原因": [
              "in their free time"
            ],
            "作用或影响": [
              "have some me-time"
            ],
            "感受": [
              "go for a walk",
              "relieve stress"
            ]
          }
        },
        {
          "id": 6,
          "title": "Do Chinese people send plants as gifts",
          "q": "Do Chinese people send plants as gifts?",
          "words": {
            "正面回答": [
              "occasionally, yes"
            ],
            "举例或原因": [
              "a nice sensory experience"
            ],
            "作用或影响": [
              "home"
            ],
            "感受": [
              "clear my mind"
            ]
          }
        },
        {
          "id": 7,
          "title": "Do you think students would benefit more from more rules",
          "q": "Do you think students would benefit more from more rules?",
          "words": {
            "正面回答": [
              "moderate rules are beneficial"
            ],
            "举例或原因": [
              "the classroom"
            ],
            "作用或影响": [
              "finish homework on my own"
            ],
            "感受": [
              "self-motivated"
            ]
          }
        },
        {
          "id": 8,
          "title": "Do most people like crowded places",
          "q": "Do most people like crowded places?",
          "words": {
            "正面回答": [
              "it depends on the person"
            ],
            "举例或原因": [
              "be passionate about",
              "city centre"
            ],
            "作用或影响": [
              "meet like-minded people"
            ],
            "感受": [
              "it really gets to me"
            ]
          }
        },
        {
          "id": 9,
          "title": "What are the benefits of being friends with or working with ",
          "q": "What are the benefits of being friends with or working with old people?",
          "words": {
            "正面回答": [
              "there are lots of benefits"
            ],
            "举例或原因": [
              "have a good chat"
            ],
            "作用或影响": [
              "share stories"
            ],
            "感受": [
              "reflect on things"
            ]
          }
        },
        {
          "id": 10,
          "title": "Is growing vegetables popular in your country",
          "q": "Is growing vegetables popular in your country?",
          "words": {
            "正面回答": [
              "it's more popular in rural areas"
            ],
            "举例或原因": [
              "groceries",
              "fresh ingredients"
            ],
            "作用或影响": [
              "lifestyle"
            ],
            "感受": [
              "good for both body and mind"
            ]
          }
        },
        {
          "id": 11,
          "title": "Do you think it’s easy to grow vegetables",
          "q": "Do you think it s easy to grow vegetables?",
          "words": {
            "正面回答": [
              "it's not easy at all"
            ],
            "举例或原因": [
              "take the initiative to"
            ],
            "作用或影响": [
              "takeout"
            ],
            "感受": [
              "it really gets to me"
            ]
          }
        },
        {
          "id": 12,
          "title": "Should schools teach students how to grow vegetables",
          "q": "Should schools teach students how to grow vegetables?",
          "words": {
            "正面回答": [
              "they definitely should"
            ],
            "举例或原因": [
              "extracurricular activities"
            ],
            "作用或影响": [
              "practical"
            ],
            "感受": [
              "a real sense of achievement"
            ]
          }
        },
        {
          "id": 13,
          "title": "How do you feel when people dont return things they borrowed",
          "q": "How do you feel when people dont return things they borrowed from you?",
          "words": {
            "正面回答": [
              "I feel awful"
            ],
            "举例或原因": [
              "physical books"
            ],
            "作用或影响": [
              "share stories"
            ],
            "感受": [
              "it really gets to me"
            ]
          }
        },
        {
          "id": 14,
          "title": "Do you mind if others borrow money from you",
          "q": "Do you mind if others borrow money from you?",
          "words": {
            "正面回答": [
              "it depends on the situation"
            ],
            "举例或原因": [
              "homie",
              "besties"
            ],
            "作用或影响": [
              "real kindness"
            ],
            "感受": [
              "lifts my mood"
            ]
          }
        },
        {
          "id": 15,
          "title": "Do you think museums are important",
          "q": "Do you think museums are important?",
          "words": {
            "正面回答": [
              "absolutely vital"
            ],
            "举例或原因": [
              "city centre"
            ],
            "作用或影响": [
              "listen to a lecture"
            ],
            "感受": [
              "reflect on things"
            ]
          }
        },
        {
          "id": 16,
          "title": "How do you feel after taking a nap",
          "q": "How do you feel after taking a nap?",
          "words": {
            "正面回答": [
              "completely refreshed"
            ],
            "举例或原因": [
              "when I feel bored"
            ],
            "作用或影响": [
              "self-care"
            ],
            "感受": [
              "full of energy"
            ]
          }
        },
        {
          "id": 17,
          "title": "What kind of things are not suitable for sharing",
          "q": "What kind of things are not suitable for sharing?",
          "words": {
            "正面回答": [
              "private information, definitely"
            ],
            "举例或原因": [
              "WeChat"
            ],
            "作用或影响": [
              "rely on"
            ],
            "感受": [
              "it really gets to me"
            ]
          }
        },
        {
          "id": 18,
          "title": "Do you think that your subject is popular in your country",
          "q": "Do you think that your subject is popular in your country?",
          "words": {
            "正面回答": [
              "it's quite popular"
            ],
            "举例或原因": [
              "attend classes"
            ],
            "作用或影响": [
              "practical"
            ],
            "感受": [
              "self-motivated"
            ]
          }
        },
        {
          "id": 19,
          "title": "What are the benefits of being your age",
          "q": "What are the benefits of being your age?",
          "words": {
            "正面回答": [
              "there are many advantages"
            ],
            "举例或原因": [
              "hang out"
            ],
            "作用或影响": [
              "be passionate about things"
            ],
            "感受": [
              "have a great time"
            ]
          }
        },
        {
          "id": 20,
          "title": "What changes would you like to see in your school",
          "q": "What changes would you like to see in your school?",
          "words": {
            "正面回答": [
              "I'd improve the food in the canteen"
            ],
            "举例或原因": [
              "the school canteen"
            ],
            "作用或影响": [
              "delicious"
            ],
            "感受": [
              "have a good laugh"
            ]
          }
        },
        {
          "id": 21,
          "title": "What do you think is the most important at the moment",
          "q": "What do you think is the most important at the moment?",
          "words": {
            "正面回答": [
              "my studies, for sure"
            ],
            "举例或原因": [
              "work hard at my studies"
            ],
            "作用或影响": [
              "finish homework on my own"
            ],
            "感受": [
              "clear my mind"
            ]
          }
        },
        {
          "id": 22,
          "title": "What makes you feel pleasant in your home？",
          "q": "What makes you feel pleasant in your home？",
          "words": {
            "正面回答": [
              "the quiet, private atmosphere"
            ],
            "举例或原因": [
              "dorms",
              "home"
            ],
            "作用或影响": [
              "have some me-time"
            ],
            "感受": [
              "unwind"
            ]
          }
        },
        {
          "id": 23,
          "title": "Do you think it is important to live in a comfortable enviro",
          "q": "Do you think it is important to live in a comfortable environment？",
          "words": {
            "正面回答": [
              "it's incredibly important"
            ],
            "举例或原因": [
              "a residential area"
            ],
            "作用或影响": [
              "self-care"
            ],
            "感受": [
              "feel relaxed and at ease"
            ]
          }
        },
        {
          "id": 24,
          "title": "Do you think you will continue living there for a long time",
          "q": "Do you think you will continue living there for a long time?",
          "words": {
            "正面回答": [
              "most likely, yes"
            ],
            "举例或原因": [
              "convenience stores"
            ],
            "作用或影响": [
              "lifestyle"
            ],
            "感受": [
              "holds a lot of precious memories"
            ]
          }
        },
        {
          "id": 25,
          "title": "Is your hometown a good place for young people to pursue the",
          "q": "Is your hometown a good place for young people to pursue their careers?",
          "words": {
            "正面回答": [
              "it's a great place for that"
            ],
            "举例或原因": [
              "city centre"
            ],
            "作用或影响": [
              "take the initiative to"
            ],
            "感受": [
              "a real sense of achievement"
            ]
          }
        },
        {
          "id": 26,
          "title": "Is the city friendly to children and old people",
          "q": "Is the city friendly to children and old people?",
          "words": {
            "正面回答": [
              "very friendly, yes"
            ],
            "举例或原因": [
              "the park"
            ],
            "作用或影响": [
              "go for a walk"
            ],
            "感受": [
              "practical"
            ]
          }
        },
        {
          "id": 27,
          "title": "Would you recommend your city to others",
          "q": "Would you recommend your city to others?",
          "words": {
            "正面回答": [
              "I highly recommend it"
            ],
            "举例或原因": [
              "tasty local food"
            ],
            "作用或影响": [
              "share food"
            ],
            "感受": [
              "the food never disappoints"
            ]
          }
        },
        {
          "id": 28,
          "title": "Do you share your dreams with others",
          "q": "Do you share your dreams with others?",
          "words": {
            "正面回答": [
              "I share them quite often"
            ],
            "举例或原因": [
              "go to parties",
              "get together"
            ],
            "作用或影响": [
              "open up to each other"
            ],
            "感受": [
              "motivate each other"
            ]
          }
        },
        {
          "id": 29,
          "title": "Do you think dreams have special meanings",
          "q": "Do you think dreams have special meanings?",
          "words": {
            "正面回答": [
              "Sometimes they do"
            ],
            "举例或原因": [
              "something unexpected comes up"
            ],
            "作用或影响": [
              "reflect on things"
            ],
            "感受": [
              "relieve stress"
            ]
          }
        },
        {
          "id": 30,
          "title": "Do you think its a good idea to leave your keys with a neigh",
          "q": "Do you think its a good idea to leave your keys with a neighbour?",
          "words": {
            "正面回答": [
              "it's a good idea if you trust them"
            ],
            "举例或原因": [
              "head out"
            ],
            "作用或影响": [
              "real kindness"
            ],
            "感受": [
              "practical",
              "it really gets to me"
            ]
          }
        }
      ]
    },
    {
      "id": "duibi",
      "name": "对比类",
      "steps": [
        "正面回答",
        "选项1的特点与作用",
        "选项2的特点与作用",
        "个人感受"
      ],
      "questions": [
        {
          "id": 1,
          "title": "Where do you prefer to keep your pet, indoors or outdoors",
          "q": "Where do you prefer to keep your pet, indoors or outdoors?",
          "words": {
            "正面回答": [
              "definitely indoors"
            ],
            "选项1的特点与作用": [
              "home",
              "dorms"
            ],
            "选项2的特点与作用": [
              "the park"
            ],
            "个人感受": [
              "unwind"
            ]
          }
        },
        {
          "id": 2,
          "title": "What are the differences between team sports and individual ",
          "q": "What are the differences between team sports and individual sports?",
          "words": {
            "正面回答": [
              "they're very different"
            ],
            "选项1的特点与作用": [
              "play basketball",
              "volleyball"
            ],
            "选项2的特点与作用": [
              "go jogging"
            ],
            "个人感受": [
              "meet like-minded people"
            ]
          }
        },
        {
          "id": 3,
          "title": "Are there any differences between what you do in the morning",
          "q": "Are there any differences between what you do in the morning now and what you did in the past?",
          "words": {
            "正面回答": [
              "totally different"
            ],
            "选项1的特点与作用": [
              "have breakfast"
            ],
            "选项2的特点与作用": [
              "watch short videos"
            ],
            "个人感受": [
              "feel relaxed and at ease"
            ]
          }
        },
        {
          "id": 4,
          "title": "Do you spend your mornings doing the same things on both wee",
          "q": "Do you spend your mornings doing the same things on both weekends and weekdays? Why?",
          "words": {
            "正面回答": [
              "no, they're quite different"
            ],
            "选项1的特点与作用": [
              "attend classes"
            ],
            "选项2的特点与作用": [
              "binge-watch TV shows"
            ],
            "个人感受": [
              "self-care"
            ]
          }
        },
        {
          "id": 5,
          "title": "Do you prefer to read on paper or on a screen",
          "q": "Do you prefer to read on paper or on a screen?",
          "words": {
            "正面回答": [
              "I prefer reading on paper"
            ],
            "选项1的特点与作用": [
              "flip through physical books"
            ],
            "选项2的特点与作用": [
              "spend a lot of time on my phone"
            ],
            "个人感受": [
              "reflect on things"
            ]
          }
        },
        {
          "id": 6,
          "title": "When do you need to read carefully, and when not",
          "q": "When do you need to read carefully, and when not?",
          "words": {
            "正面回答": [
              "it depends on what I am reading"
            ],
            "选项1的特点与作用": [
              "study",
              "library"
            ],
            "选项2的特点与作用": [
              "watch short videos"
            ],
            "个人感受": [
              "finish homework on my own",
              "practical"
            ]
          }
        },
        {
          "id": 7,
          "title": "Do you prefer scanning or detailed reading",
          "q": "Do you prefer scanning or detailed reading?",
          "words": {
            "正面回答": [
              "detailed reading, mostly"
            ],
            "选项1的特点与作用": [
              "physical books"
            ],
            "选项2的特点与作用": [
              "takeout"
            ],
            "个人感受": [
              "work hard at my studies"
            ]
          }
        },
        {
          "id": 8,
          "title": "Do you prefer typing or handwriting",
          "q": "Do you prefer typing or handwriting?",
          "words": {
            "正面回答": [
              "typing, for sure"
            ],
            "选项1的特点与作用": [
              "shop online"
            ],
            "选项2的特点与作用": [
              "the classroom"
            ],
            "个人感受": [
              "time-saving and effortless",
              "practical"
            ]
          }
        },
        {
          "id": 9,
          "title": "Do you type on a desktop or laptop keyboard every day",
          "q": "Do you type on a desktop or laptop keyboard every day?",
          "words": {
            "正面回答": [
              "my laptop keyboard"
            ],
            "选项1的特点与作用": [
              "grab my things and head out"
            ],
            "选项2的特点与作用": [
              "dorms"
            ],
            "个人感受": [
              "study"
            ]
          }
        },
        {
          "id": 10,
          "title": "Do you prefer the mountains or the sea",
          "q": "Do you prefer the mountains or the sea?",
          "words": {
            "正面回答": [
              "definitely the sea"
            ],
            "选项1的特点与作用": [
              "enjoy tasty local food"
            ],
            "选项2的特点与作用": [
              "hiking"
            ],
            "个人感受": [
              "unwind"
            ]
          }
        },
        {
          "id": 11,
          "title": "Did you prefer to do activities alone or with a group of peo",
          "q": "Did you prefer to do activities alone or with a group of people when you were a child?",
          "words": {
            "正面回答": [
              "with a group of people"
            ],
            "选项1的特点与作用": [
              "play video games"
            ],
            "选项2的特点与作用": [
              "me-time"
            ],
            "个人感受": [
              "have a good laugh"
            ]
          }
        },
        {
          "id": 12,
          "title": "Do you prefer views in urban areas or rural areas",
          "q": "Do you prefer views in urban areas or rural areas?",
          "words": {
            "正面回答": [
              "I prefer urban views"
            ],
            "选项1的特点与作用": [
              "city centre",
              "shopping malls"
            ],
            "选项2的特点与作用": [
              "the park"
            ],
            "个人感受": [
              "practical and makes me happy"
            ]
          }
        },
        {
          "id": 13,
          "title": "Do you prefer views in your own country or in other countrie",
          "q": "Do you prefer views in your own country or in other countries?",
          "words": {
            "正面回答": [
              "in my own country"
            ],
            "选项1的特点与作用": [
              "tasty local food"
            ],
            "选项2的特点与作用": [
              "groceries",
              "fresh ingredients"
            ],
            "个人感受": [
              "it really hits the spot"
            ]
          }
        },
        {
          "id": 14,
          "title": "Do you prefer to have more or fewer rules at school",
          "q": "Do you prefer to have more or fewer rules at school?",
          "words": {
            "正面回答": [
              "fewer rules, for sure"
            ],
            "选项1的特点与作用": [
              "extracurricular activities"
            ],
            "选项2的特点与作用": [
              "the classroom"
            ],
            "个人感受": [
              "clear my mind"
            ]
          }
        },
        {
          "id": 15,
          "title": "Which do you prefer, fashionable shoes or comfortable shoes",
          "q": "Which do you prefer, fashionable shoes or comfortable shoes?",
          "words": {
            "正面回答": [
              "comfortable shoes, always"
            ],
            "选项1的特点与作用": [
              "go jogging",
              "go for a walk"
            ],
            "选项2的特点与作用": [
              "get dressed"
            ],
            "个人感受": [
              "feel relaxed and at ease"
            ]
          }
        },
        {
          "id": 16,
          "title": "Do you prefer to chat with a group of people or with only on",
          "q": "Do you prefer to chat with a group of people or with only one friend?",
          "words": {
            "正面回答": [
              "just one friend, preferably"
            ],
            "选项1的特点与作用": [
              "cafes"
            ],
            "选项2的特点与作用": [
              "parties"
            ],
            "个人感受": [
              "share stories and encourage each other"
            ]
          }
        },
        {
          "id": 17,
          "title": "Do you prefer to communicate face-to-face or via social medi",
          "q": "Do you prefer to communicate face-to-face or via social media?",
          "words": {
            "正面回答": [
              "face-to-face, definitely"
            ],
            "选项1的特点与作用": [
              "eat out together"
            ],
            "选项2的特点与作用": [
              "chat on WeChat"
            ],
            "个人感受": [
              "open up to each other"
            ]
          }
        },
        {
          "id": 18,
          "title": "Do you prefer to share news with your friends or your parent",
          "q": "Do you prefer to share news with your friends or your parents?",
          "words": {
            "正面回答": [
              "my friends, usually"
            ],
            "选项1的特点与作用": [
              "people with similar interests"
            ],
            "选项2的特点与作用": [
              "home"
            ],
            "个人感受": [
              "lifts my mood"
            ]
          }
        },
        {
          "id": 19,
          "title": "Do you prefer to study in the mornings or in the afternoons",
          "q": "Do you prefer to study in the mornings or in the afternoons?",
          "words": {
            "正面回答": [
              "definitely in the mornings"
            ],
            "选项1的特点与作用": [
              "have breakfast"
            ],
            "选项2的特点与作用": [
              "binge-watch TV shows"
            ],
            "个人感受": [
              "work hard at my studies"
            ]
          }
        },
        {
          "id": 20,
          "title": "Do you prefer living in a house or an apartment",
          "q": "Do you prefer living in a house or an apartment?",
          "words": {
            "正面回答": [
              "an apartment, for now"
            ],
            "选项1的特点与作用": [
              "my rented apartment"
            ],
            "选项2的特点与作用": [
              "attend classes",
              "parties"
            ],
            "个人感受": [
              "practical"
            ]
          }
        },
        {
          "id": 21,
          "title": "What’s the difference between where you are living now and w",
          "q": "What s the difference between where you are living now and where you have lived in the past?",
          "words": {
            "正面回答": [
              "there's a huge difference"
            ],
            "选项1的特点与作用": [
              "a residential area",
              "convenience stores"
            ],
            "选项2的特点与作用": [
              "dorms"
            ],
            "个人感受": [
              "feel relaxed and at ease"
            ]
          }
        },
        {
          "id": 22,
          "title": "Do you usually spend your days off with your parents or with",
          "q": "Do you usually spend your days off with your parents or with your friends?",
          "words": {
            "正面回答": [
              "with my friends, mostly"
            ],
            "选项1的特点与作用": [
              "hang out"
            ],
            "选项2的特点与作用": [
              "stay at home"
            ],
            "个人感受": [
              "have a good laugh"
            ]
          }
        }
      ]
    }
  ],
  "materialMeta": {
    "source": "P1素材",
    "note": "线索=本题指定方向；素材=总词库可替换项，服务最少准备"
  }
};
