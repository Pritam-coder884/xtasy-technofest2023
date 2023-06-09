const eventData = [
  {
    id: 1,
    club: "Energy",
    eventName: "Robo War",
    eventDetails:
      "In this tournament, robots have to fight other robots and win till the last.",
    eventCoordinators: {
      mentor1: "Sourav Sundar Mishra",
      mentor2: "Abinash Sethy",
    },
    eventCoordinatorNumbers: { num1: 8895783507, num2: 8114980250 },
    date: "2018-02-24",
    time: "10:00:00",
    venue: "Auditorium",
    fee: "100",
    rules: "",
    prizeMoney: "",
    sponsorship: "",
  },
  {
    id: 2,
    club: "Zairza X Energy",
    eventName: "Rescue Rangers",
    eventDetails:
      "Rescue Ranger is a manual robot racing event where the bot should be capable of conquering the hurdles present across the arena.",
    eventCoordinators: [
      "Bhabani Sankar Sahu",
      "Aditya Tripathy",
      "Harshit Patro",
      "Ayush Acharya",
    ],
    eventCoordinatorNumbers: [8658378820, 9937473792, 77735761538, 8249393152],
    date: "2018-02-24",
    time: "10:00:00",
    venue: "Auditorium",
    fee: "100",
    rules: "",
    prizeMoney: "",
    sponsorship: "",
  },
  {
    id: 3,
    club: "Energy",
    eventName: "Line Follower",
    eventDetails:
      "The goal in line follower is to get from the start to the finish in the shortest time.",
    eventCoordinators: ["Sourav Sundar Mishra", "Abinash Sethy"],
    eventCoordinatorNumbers: [8895783507, 8114980250],
    date: "2018-02-24",
    time: "10:00:00",
    venue: "Auditorium",
    fee: "100",
    rules: "",
    prizeMoney: "",
    sponsorship: "",
  },
  {
    id: 4,
    club: "Energy",
    eventName: "Electrovia",
    eventDetails:
      "Electrovia is an event to test a variety of skills, including knowledge of electronic principles, the ability to build circuits, and problem-solving skills. ",
    eventCoordinators: ["Sonali Mishra", "Sribidya mousumi Mishra"],
    eventCoordinatorNumbers: [9078562806, 9337961533],
    date: "2018-02-24",
    time: "10:00:00",
    venue: "Auditorium",
    fee: "100",
    rules:
      "https://drive.google.com/file/d/1gMtPnLLWP8UYQX9SZ726BGLbDeBOXO1i/view?usp=drivesdk",
    prizeMoney: "",
    sponsorship: "",
  },
  {
    id: 5,
    club: "Energy",
    eventName: "Talash",
    eventDetails:
      "Talash is a treasure hunt event where the main objective is to find and collect basic electronics components that have been hidden throughout the designated area.",
    eventCoordinators: ["Ankit Ray", "Prajnananda Patra"],
    eventCoordinatorNumbers: [9692195769, 7325963705],
    date: "2018-02-24",
    time: "10:00:00",
    venue: "Auditorium",
    fee: "100",
    rules:
      "https://drive.google.com/file/d/1guBb0JDiXuj9AzOhSFxZ1p1NrjvST6So/view?usp=drivesdk",
    prizeMoney: "",
    sponsorship: "",
  },
  {
    id: 6,
    club: "Spectrum",
    eventName: "Robo Soccer",
    eventDetails:
      "Robots are programmed to play and compete like soccer to score the maximum number of goals.",
    eventCoordinators: ["Subhasish", "Prabhuddha"],
    eventCoordinatorNumbers: [6372729539, 8260071810],
    date: "2018-02-24",
    time: "10:00:00",
    venue: "Auditorium",
    fee: "100",
    rules:
      "https://drive.google.com/file/d/1uNY8KKRdlkwa0EZTPs-6LU6IBCVC7mik/view?usp=sharing",
    prizeMoney: "",
    sponsorship: "",
  },
  {
    id: 7,
    club: "Spectrum",
    eventName: "UAV Killer",
    eventDetails:
      "The aim of the UAV KILLER event is to make a RC drone that shall pop the balloons of a particular color. ",
    eventCoordinators: ["Pratyush Giri", "Rukmini Murmu"],
    eventCoordinatorNumbers: [8328912034, 8457993783],
    date: "2018-02-24",
    time: "10:00:00",
    venue: "Auditorium",
    fee: "100",
    rules:
      "https://drive.google.com/file/d/1Eiv57h9YnMwp1tG9AlXVhYT_zoI8rSiy/view?usp=sharing",
    prizeMoney: "",
    sponsorship: "",
  },
  {
    id: 8,
    club: "Spectrum",
    eventName: "Tech Venture",
    eventDetails:
      "Each stage of the treasure hunt will involve solving clues to unlock the location of the next component.",
    eventCoordinators: ["Arpita Padhy", "Rudra Dash"],
    eventCoordinatorNumbers: [7064294787, 7978213646],
    date: "2018-02-24",
    time: "10:00:00",
    venue: "Auditorium",
    fee: "100",
    rules:
      "https://drive.google.com/file/d/1Eiv57h9YnMwp1tG9AlXVhYT_zoI8rSiy/view?usp=sharing",
    prizeMoney: "",
    sponsorship: "",
  },
  {
    id: 9,
    club: "Spectrum",
    eventName: "Blind Coding",
    eventDetails:
      "Debugging code and then solving a code with laptop screen covered with minimum errors.",
    eventCoordinators: ["Pratyush Giri", "Navneet Gupta"],
    eventCoordinatorNumbers: [8328912034, 7908843993],
    date: "2018-02-24",
    time: "10:00:00",
    venue: "Auditorium",
    fee: "100",
    rules:
      "https://drive.google.com/file/d/1lKEaQDK8MgUtx5s531uyL8X8zngAkj_c/view?usp=sharing",
    prizeMoney: "",
    sponsorship: "",
  },
  {
    id: 10,
    club: "Spectrum",
    eventName: "Designathon",
    eventDetails:
      " It is a three-day design hackathon, judgement will be done on the basis of concept behind the design.",
    eventCoordinators: ["Samikshya Maharana", "Prachoorya Preyambada"],
    eventCoordinatorNumbers: [9437003500, 7008764077],
    date: "2018-02-24",
    time: "10:00:00",
    venue: "Auditorium",
    fee: "100",
    rules:
      "https://drive.google.com/file/d/1SOCzAMKgvHKRDQa_SrkUTjBGjUH-5ucQ/view?usp=share_link",
    prizeMoney: "",
    sponsorship: "",
  },
  {
    id: 11,
    club: "Zairza X SAE",
    eventName: "Robo-Clench",
    eventDetails:
      "Teams have to build a manually controlled bot that can do simple tasks of gripping objects and putting them in target zones to complete the route and overcome the hurdles in its path.",
    eventCoordinators: ["Binay Parida", "Gourav Kumar Sahoo"],
    eventCoordinatorNumbers: [7735793312, 8144445927],
    date: "2018-02-24",
    time: "10:00:00",
    venue: "Auditorium",
    fee: "100",
    rules:
      "https://drive.google.com/file/d/1U82ml21awZJKrDTQsy61oo9yf6J2Uo88/view?usp=sharing",
    prizeMoney: "",
    sponsorship: "",
  },
  {
    id: 12,
    club: "Zairza",
    eventName: "Enchanted Maze",
    eventDetails:
      "The participating teams will have to build a line follower robot that senses and follows a certain path, and avoids any obstacles (if any). The team which is able to complete the track in the minimum time will be the winner.",
    eventCoordinators: ["Ashutosh Panda", "Vivek Parida"],
    eventCoordinatorNumbers: [9136661782, 7653867595],
    date: "2018-02-24",
    time: "10:00:00",
    venue: "Auditorium",
    fee: "100",
    rules:
      "https://drive.google.com/file/d/1SOCzAMKgvHKRDQa_SrkUTjBGjUH-5ucQ/view?usp=share_link",
    prizeMoney: "",
    sponsorship: "",
  },
  {
    id: 13,
    club: "Zairza",
    eventName: "Open the Source",
    eventDetails:
      "'Open the Source' is a competitive event that challenges participants to solve issues in an open-source GitHub repository. To play the game, participants are given access to a public GitHub repository that contains a set of issues that need to be fixed. The issues can be related to code errors, functionality improvements, or feature requests. The participants need to solve as many issues as they can within a specified time frame.",
    eventCoordinators: ["Ashish Mohapatra", "Aadyasha Sahoo"],
    eventCoordinatorNumbers: [8249412044, 9437794399],
    date: "2018-02-24",
    time: "10:00:00",
    venue: "Auditorium",
    fee: "100",
    rules:
      "https://drive.google.com/file/d/1ktHewo4rb0cVtDqlBrsPg0NdYn-QDrsn/view?usp=share_link",
    prizeMoney: "",
    sponsorship: "",
  },
  {
    id: 14,
    club: "Zairza",
    eventName: "AI-magination",
    eventDetails:
      "Ready to use your brains while using ChatGPT? Sounds quite contradictory, right? Welcome to our exciting event where teams of three will compete to prepare a 10-slide story using ChatGPT and Midjourney! In this event, you will work collaboratively with your teammates to come up with a captivating and engaging story. The story should be composed of 10 slides then converted to PNG format and submitted. The team which gets maximum likes on Zairza's official Instagram handle will end up winning. Join us for this exciting event and unleash your creativity with ChatGPT and Midjourney!",
    eventCoordinators: ["Adarsh Lal", "Akankhya Panda"],
    eventCoordinatorNumbers: [9348614300, 8280974116],
    date: "2018-02-24",
    time: "10:00:00",
    venue: "Auditorium",
    fee: "100",
    rules:
      "https://drive.google.com/file/d/1WZ8KXJuOcmNh5ivhAGKqrQqiNF-qzd9C/view?usp=share_link",
    prizeMoney: "",
    sponsorship: "",
  },
  {
    id: 15,
    club: "Aerospace",
    eventName: "Zero Turbulence",
    eventDetails:
      "Have you ever felt the adrenaline of turbulence in life ? If no !! Then get ready to face it as this competition is organized with the vision to provide a platform for students to showcase their interest and creative thinking in the field of aerospace and related engineering disciplines to demonstrate their aero-modeling expertise.",
    eventCoordinators: ["Anubhab Mohanty", "Omm Swastik Mahapatra"],
    eventCoordinatorNumbers: [8260803435, 6370721180],
    date: "2018-02-24",
    time: "10:00:00",
    venue: "Auditorium",
    fee: "100",
    rules:
      "https://drive.google.com/drive/folders/13RQSSrH7-mVsuzSKTWcD0fwlgJfWwHJh?usp=sharing",
    prizeMoney: "",
    sponsorship: "",
  },
  {
    id: 16,
    club: "Aerospace",
    eventName: "Zero Turbulence",
    eventDetails:
      "Have you ever felt the adrenaline of turbulence in life ? If no !! Then get ready to face it as this competition is organized with the vision to provide a platform for students to showcase their interest and creative thinking in the field of aerospace and related engineering disciplines to demonstrate their aero-modeling expertise.",
    eventCoordinators: ["Anubhab Mohanty", "Omm Swastik Mahapatra"],
    eventCoordinatorNumbers: [8260803435, 6370721180],
    date: "2018-02-24",
    time: "10:00:00",
    venue: "Auditorium",
    fee: "100",
    rules:
      "https://drive.google.com/drive/folders/13RQSSrH7-mVsuzSKTWcD0fwlgJfWwHJh?usp=sharing",
    prizeMoney: "",
    sponsorship: "",
  },
];

export default eventData;
