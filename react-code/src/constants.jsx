import bca from "./assets/BCApic.jpg";
import bcom from "./assets/BCompic.jpg";
import bsc from "./assets/BSCpic.jpg";
import bba from "./assets/BBApic.jpg";
import OneYR from "./assets/1styear.png";
import TwoYR from "./assets/2ndyear.png";
import ThreeYR from "./assets/3rdyear.png";

export const courses = [
  { title: "BCA", img: bca },
  { title: "BBA", img: bba },
  { title: "BCom", img: bcom },
  { title: "BSC", img: bsc },
];
export const allCoursesWD = [
  {
    title: "BCA",
    years: [
      {
        title: "1st Year",
        img: OneYR,
        sems: [
          {
            title: "1st Sem",
            subs: [
              {
                title: "Programming in C",
                links: [
                  {
                    info: "SEM QP",
                    title:"I-SEM_BCA_2022_PROGRAMMING-IN-C",
                    link:"https://drive.google.com/file/d/1P_MhyHEVfBhyaUaf14mMp6HDJR5BRiQF/preview"
                  },
                  {
                    info: "SEM QP",
                    title: "I-SEM_BCA_2023_PROGRAMMING-IN-C",
                    link: "https://drive.google.com/file/d/1gBERJap3qZpZeqNB4bxGOuScrOs_7col/preview"
                  },
                  {
                    info: "CBCS SEM QP",
                    title: "I-SEM_BCA_2022_PROGRAMMING-IN-C",
                    link: "https://drive.google.com/file/d/1liXAYvkmqH5CKkhVPPzu_MQkJTUTXweE/preview"
                  }
                ],
              },
              { title: "Maths", links: [
                {
                  info: "SEM QP",
                  title:"I-SEM_BCA_2022_MATHEMATICAL-FOUNDATION",
                  link:"https://drive.google.com/file/d/1oMs61-2NNI1DNaDQ4r-RWBRJ_4WtcwxE/preview"
                },
                {
                  info: "SEM QP",
                  title:"I-SEM_BCA_2023_MATHEMATICAL-FOUNDATION",
                  link:"https://drive.google.com/file/d/1gKDNxN1xbmczFSihiMi43zAN27Kp_cPt/preview"
                }
              ] },
              { title: "FIT", links: [
                {
                  info: "SEM QP",
                  title:"I-SEM_BCA_2022_FUNDAMENTALS-OF-COMPUTER",
                  link:"https://drive.google.com/file/d/1qnvscraBMHsUTKFhBBZWhB6E6S4vp1LW/preview"
                },
                {
                  info: "SEM QP",
                  title:"I-SEM_BCA_2023_FUNDAMENTALS-OF-COMPUTER",
                  link:"https://drive.google.com/file/d/1g8XkAS4V8VOLzRqUbQXwq2sX78TyPvo_/preview"
                }
              ] },
              { title: "English", links: [
                {
                  info: "SEM QP",
                  title:"I-SEM_BCA_2022_GENERIC-ENGLISH",
                  link:"https://drive.google.com/file/d/1gF-_DZmJKAhqgbr6RnyWPMarpZQhCO0o/preview"
                },
                {
                  info: "SEM QP",
                  title:"I-SEM_BCA_2023_GENERIC-ENGLISH",
                  link:"https://drive.google.com/file/d/1gKX_Qhn3g52n_oUfttFa5FkUqkSpA97O/preview"
                }
              ] },
              { title: "Hindi/Sanskrit", links: [
                {
                  info: "SEM QP",
                  title: "I-SEM_BCA_2022_HINDI",
                  link: "https://drive.google.com/file/d/15acXKjnMiMkdCZ_gtQEmkR9DR1r-DgD-/preview"
                },
                {
                  info: "SEM QP",
                  title: "I-SEM_BCA_2023_HINDI",
                  link: "https://drive.google.com/file/d/1J1ys2rAjvBDylp4fqnpFFco-Uh8uEKLd/preview"
                },
                {
                  info: "SEM QP",
                  title: "I-SEM_BCA_2023_SANSKRIT",
                  LINK: "https://drive.google.com/file/d/1TpwyFdY10ahEYzSFLxlTsQ5_htTgnk7h/preview"
                }
              ] },
              { title: "kannada", links: [
                {
                  info: "SEM QP",
                  title:"I-SEM_BCA_2022_KANNADA",
                  link:"https://drive.google.com/file/d/1NTWAGAe80xredQCb8LnophPBoKcSac_E/preview"
                },
                {
                  info: "SEM QP",
                  title:"I-SEM_BCA_2023_KANNADA",
                  link:"https://drive.google.com/file/d/1gLiv2nYfiZXGcv5fUxiHLX4R6QWD3sID/preview"
                }
              ] },
            ],
          },
          {
            title: "2nd Sem",
            subs: [
              { title: "Maths", links: [
                {
                  title: "II-SEM_BCA_2022_DISCRETE-MATHEMATICAL-STRUCTURES",
                  link: "https://drive.google.com/file/d/1fXwpEdQMr-KlTcFJQagn-Tvia_LvaXu4/preview"
                },
                {
                  title: "II-SEM_BCA_2023_DISCRETE-MATHEMATICAL-STRUCTURES",
                  link: "https://drive.google.com/file/d/1gVWnCFEHSQS42X05ShQEamQcMmXD1wDM/preview"
                }
              ] },
              { title: "Data Structures", links: [
                  {
                    title:"II-SEM_BCA_2022_DATASTRUCTURE-USING-C",
                    link:"https://drive.google.com/file/d/1gCJzvNUarh772hmHnwE0ATMiHhiOThm5/preview"
                  },
                  {
                    title:"II-SEM_BCA_2023_DATASTRUCTURE-USING-C",
                    link:"https://drive.google.com/file/d/1gLlzM0gxcgqXdNAAf6XfdBht4g4Gk4oR/preview"
                  }
              ] },
              { title: "Java", links: [
                {
                  title:"II-SEM_BCA_2022_OBJECT-ORIENTED-CONCEPTS-USING-JAVA",
                  link:"https://drive.google.com/file/d/1fPTl8b95a7JY7C7YcCJGaPnrvyg2hMOF/preview"
                },
                {
                  title:"II-SEM_BCA_2023_OBJECT-ORIENTED-CONCEPTS-USING-JAVA",
                  link:"https://drive.google.com/file/d/1gY_hs-Th1V3x94jhOt19oOV6-CCe-8Su/preview"
                }
              ] },
              { title: "English", links: [
                {
                  title:"II-SEM_BCA_2022_GENERIC-ENGLISH",
                  link:"https://drive.google.com/file/d/1fWR1Q53EpIYyg-fA1l0Z3lFt8YbyhwI2/preview"
                },
                {
                  title:"II-SEM_BCA_2023_GENERIC-ENGLISH",
                  link:"https://drive.google.com/file/d/1gV6UCzwfzLJvTmnRi8FjM1MM4CCyzPKN/preview"
                }
              ] },
              { title: "kannada", links: [
                {
                  title:"II-SEM_BCA_2022_KANNADA",
                  link:"https://drive.google.com/file/d/1fSfisXbzk8O2EFgPXp-KMjRQ81c7cKk8/preview"
                },
                {
                  title:"II-SEM_BCA_2023_KANNADA",
                  link:"https://drive.google.com/file/d/1jlhmuMsE84mne1JcJWUYotr5HI8qKcb2/preview"
                }
              ] },
              { title: "sub6", links: [] },
            ],
          },
        ],
      },
      {
        title: "2nd Year",
        img: TwoYR,
        sems: [
          {
            title: "3rd Sem",
            subs: [
              { title: "C#", links: [
                {
                  title:"III-SEM_BCA_2022_C#-AND-DOT-NET-FRAMEWORK",
                  link:""
                },
                {
                  title:"III-SEM_BCA_2023_C#-AND-DOT-NET-FRAMEWORK",
                  link:"https://drive.google.com/file/d/1kOoH4rH8Hvh5TdIQVknIpUcO9eC83pmp/preview"
                }
              ] },
              { title: "Networking", links: [
                {
                  title:"III-SEM_BCA_2022_COMPUTER-COMMUNICATION-AND-NETWORK",
                  link:""
                },
                {
                  title:"III-SEM_BCA_2023_COMPUTER-COMMUNICATION-AND-NETWORK",
                  link:"https://drive.google.com/file/d/1kUiA56UFQKVNidPYsMnvQXL9ZxlY3ji6/preview"
                }
              ] },
              { title: "DBMS", links: [
                {
                  title:"III-SEM_BCA_2022_DATABASE-MANAGEMENT-SYSTEM",
                  link:""
                },
                {
                  title:"III-SEM_BCA_2023_DATABASE-MANAGEMENT-SYSTEM",
                  link:"https://drive.google.com/file/d/1kUWgYz_YNbPe-k1abLjdeUeQ7kPQ5-tS/preview"
                }
              ] },
              { title: "English", links: [
                {
                  title:"III-SEM_BCA_2022_ENGLISH",
                  link:""
                },
                {
                  title:"III-SEM_BCA_2023_ENGLISH",
                  link:"https://drive.google.com/file/d/1kbgoIUrjm0ST3kCedHGx4zaPB2lXOS7h/preview"
                }
              ] },
              { title: "Hindi", links: [
                {
                  title:"III-SEM_BCA_2022_HINDI",
                  link:""
                },
                {
                  title:"III-SEM_BCA_2023_HINDI",
                  link:"https://drive.google.com/file/d/1jpMagv92xzGUOXyzr0yvuqYNCLkEyGbv/preview"
                }
              ] },
              { title: "sub6", links: [] },
            ],
          },
          {
            title: "4th Sem",
            subs: [
              { title: "sub1", links: [] },
              { title: "sub2", links: [] },
              { title: "sub3", links: [] },
              { title: "sub4", links: [] },
              { title: "sub5", links: [] },
              { title: "sub6", links: [] },
            ],
          },
        ],
      },
      {
        title: "3rd Year",
        img: ThreeYR,
        sems: [
          {
            title: "5th Sem",
            subs: [
              { title: "sub1", links: [] },
              { title: "sub2", links: [] },
              { title: "sub3", links: [] },
              { title: "sub4", links: [] },
              { title: "sub5", links: [] },
              { title: "sub6", links: [] },
            ],
          },
          {
            title: "6th Sem",
            subs: [
              { title: "sub1", links: [] },
              { title: "sub2", links: [] },
              { title: "sub3", links: [] },
              { title: "sub4", links: [] },
              { title: "sub5", links: [] },
              { title: "sub6", links: [] },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "BBA",
    years: [
      {
        title: "1st Year",
        img: OneYR,
        sems: [
          {
            title: "1st Sem",
            subs: [
              { title: "sub1", links: [] },
              { title: "sub2", links: [] },
              { title: "sub3", links: [] },
              { title: "sub4", links: [] },
              { title: "sub5", links: [] },
              { title: "sub6", links: [] },
            ],
          },
          {
            title: "2nd Sem",
            subs: [
              { title: "sub1", links: [] },
              { title: "sub2", links: [] },
              { title: "sub3", links: [] },
              { title: "sub4", links: [] },
              { title: "sub5", links: [] },
              { title: "sub6", links: [] },
            ],
          },
        ],
      },
      {
        title: "2nd Year",
        img: TwoYR,
        sems: [
          {
            title: "3rd Sem",
            subs: [
              { title: "sub1", links: [] },
              { title: "sub2", links: [] },
              { title: "sub3", links: [] },
              { title: "sub4", links: [] },
              { title: "sub5", links: [] },
              { title: "sub6", links: [] },
            ],
          },
          {
            title: "4th Sem",
            subs: [
              { title: "sub1", links: [] },
              { title: "sub2", links: [] },
              { title: "sub3", links: [] },
              { title: "sub4", links: [] },
              { title: "sub5", links: [] },
              { title: "sub6", links: [] },
            ],
          },
        ],
      },
      {
        title: "3rd Year",
        img: ThreeYR,
        sems: [
          {
            title: "5th Sem",
            subs: [
              { title: "sub1", links: [] },
              { title: "sub2", links: [] },
              { title: "sub3", links: [] },
              { title: "sub4", links: [] },
              { title: "sub5", links: [] },
              { title: "sub6", links: [] },
            ],
          },
          {
            title: "6th Sem",
            subs: [
              { title: "sub1", links: [] },
              { title: "sub2", links: [] },
              { title: "sub3", links: [] },
              { title: "sub4", links: [] },
              { title: "sub5", links: [] },
              { title: "sub6", links: [] },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "BCom",
    years: [
      {
        title: "1st Year",
        img: OneYR,
        sems: [
          {
            title: "1st Sem",
            subs: [
              { title: "sub1", links: [] },
              { title: "sub2", links: [] },
              { title: "sub3", links: [] },
              { title: "sub4", links: [] },
              { title: "sub5", links: [] },
              { title: "sub6", links: [] },
            ],
          },
          {
            title: "2nd Sem",
            subs: [
              { title: "sub1", links: [] },
              { title: "sub2", links: [] },
              { title: "sub3", links: [] },
              { title: "sub4", links: [] },
              { title: "sub5", links: [] },
              { title: "sub6", links: [] },
            ],
          },
        ],
      },
      {
        title: "2nd Year",
        img: TwoYR,
        sems: [
          {
            title: "3rd Sem",
            subs: [
              { title: "sub1", links: [] },
              { title: "sub2", links: [] },
              { title: "sub3", links: [] },
              { title: "sub4", links: [] },
              { title: "sub5", links: [] },
              { title: "sub6", links: [] },
            ],
          },
          {
            title: "4th Sem",
            subs: [
              { title: "sub1", links: [] },
              { title: "sub2", links: [] },
              { title: "sub3", links: [] },
              { title: "sub4", links: [] },
              { title: "sub5", links: [] },
              { title: "sub6", links: [] },
            ],
          },
        ],
      },
      {
        title: "3rd Year",
        img: ThreeYR,
        sems: [
          {
            title: "5th Sem",
            subs: [
              { title: "sub1", links: [] },
              { title: "sub2", links: [] },
              { title: "sub3", links: [] },
              { title: "sub4", links: [] },
              { title: "sub5", links: [] },
              { title: "sub6", links: [] },
            ],
          },
          {
            title: "6th Sem",
            subs: [
              { title: "sub1", links: [] },
              { title: "sub2", links: [] },
              { title: "sub3", links: [] },
              { title: "sub4", links: [] },
              { title: "sub5", links: [] },
              { title: "sub6", links: [] },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "BSC",
    years: [
      {
        title: "1st Year",
        img: OneYR,
        sems: [
          {
            title: "1st Sem",
            subs: [
              { title: "sub1", links: [] },
              { title: "sub2", links: [] },
              { title: "sub3", links: [] },
              { title: "sub4", links: [] },
              { title: "sub5", links: [] },
              { title: "sub6", links: [] },
            ],
          },
          {
            title: "2nd Sem",
            subs: [
              { title: "sub1", links: [] },
              { title: "sub2", links: [] },
              { title: "sub3", links: [] },
              { title: "sub4", links: [] },
              { title: "sub5", links: [] },
              { title: "sub6", links: [] },
            ],
          },
        ],
      },
      {
        title: "2nd Year",
        img: TwoYR,
        sems: [
          {
            title: "3rd Sem",
            subs: [
              { title: "sub1", links: [] },
              { title: "sub2", links: [] },
              { title: "sub3", links: [] },
              { title: "sub4", links: [] },
              { title: "sub5", links: [] },
              { title: "sub6", links: [] },
            ],
          },
          {
            title: "4th Sem",
            subs: [
              { title: "sub1", links: [] },
              { title: "sub2", links: [] },
              { title: "sub3", links: [] },
              { title: "sub4", links: [] },
              { title: "sub5", links: [] },
              { title: "sub6", links: [] },
            ],
          },
        ],
      },
      {
        title: "3rd Year",
        img: ThreeYR,
        sems: [
          {
            title: "5th Sem",
            subs: [
              { title: "sub1", links: [] },
              { title: "sub2", links: [] },
              { title: "sub3", links: [] },
              { title: "sub4", links: [] },
              { title: "sub5", links: [] },
              { title: "sub6", links: [] },
            ],
          },
          {
            title: "6th Sem",
            subs: [
              { title: "sub1", links: [] },
              { title: "sub2", links: [] },
              { title: "sub3", links: [] },
              { title: "sub4", links: [] },
              { title: "sub5", links: [] },
              { title: "sub6", links: [] },
            ],
          },
        ],
      },
    ],
  },
];
