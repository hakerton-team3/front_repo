// answer.js
const answer = [
  {
    id: 1,
    title: "번개 술꾼",
    mainDescription: "무계획으로 혼자 많은 양의 술을 즐기는",
    detail: "#P #주당 #술술술",
    improvingDescription1: "즉흥적인 음주가 즐거울<br>수 있지만, 건강을 유의할<br>타이밍입니다.",
    improvingDescription2: "미리 계획된 술자리를<br>가지면서 자신을 돌보세요.",
    improvingDescription3: "간헐적인 술 없는 날을<br>정해 건강을 지키세요",
    image: "https://fourj-storage.p-e.kr/uploads/files/2024-08-06/1f96c309-ef63-4068-966e-faff5379da9e.svg"
  },
  {
    id: 2,
    title: "알코올 애호가",
    mainDescription: "주기적으로 계획을 세워 혼자만의 시간에 많은 양의 술을 즐기는",
    detail: "#규칙 #나혼자 #술술",
    improvingDescription1: "계획적인 음주는 좋지만,<br>과도한 음주는 건강에<br>해로울 수 있습니다.",
    improvingDescription2: "주기적으로 술 없는 날을<br>계획하도록 해봐요.",
    improvingDescription3: "술을 마시는 날에도<br>적정량을 지키며 자신의<br>건강을 돌보세요.",
    image: "https://fourj-storage.p-e.kr/uploads/files/2024-08-04/3bc25d5d-86cf-4459-9fdf-810d8c12fcea.svg"
  },
  {
    id: 3,
    title: "감성 타는 혼술러",
    mainDescription: "즉흥적으로 적은 양의 술을 혼자 즐기는",
    detail: "#조금만 #P #분위기",
    improvingDescription1: "적은 양의 술을 즐기는 것은<br>좋지만, 혼자 마시는 시간이<br>길어지지 않도록 하세요.",
    improvingDescription2: "친구나 가족과의 소통을<br>늘려 혼술 빈도를 조절해요.",
    improvingDescription3: "감정적인 이유로 음주를<br>하지 않도록 해보세요.",
    image: "https://fourj-storage.p-e.kr/uploads/files/2024-08-04/5bfdd9ed-8147-432f-a1cc-5ec237280da6.svg"
  },
  {
    id: 4,
    title: "꼬꼬마 술애호가",
    mainDescription: "자신만의 시간을 계획을 세워 적은 양의 술을 혼자 즐기는",
    detail: "#계획 #꼼꼼 #조금만",
    improvingDescription1: "계획적으로 적은 양의<br>술을 즐기는 것은 좋은<br>습관입니다.",
    improvingDescription2: "술을 마신 후에는 충분한<br>수분을 섭취하고 균형 잡힌<br>식사를 하세요.",
    improvingDescription3: "자신만의 시간을<br>다른 취미와 함께 즐겨보는<br>것도 좋습니다.",
    image: "https://fourj-storage.p-e.kr/uploads/files/2024-08-04/2c492623-5ad9-491f-b1f5-6d53d07a75b8.svg"
  },
  {
    id: 5,
    title: "술먹자 빌런",
    mainDescription: "지인들과 자주 번개 약속을 가져 많은 양의 술을 즐기는",
    detail: "#극강의 #프로참석러",
    improvingDescription1: "자주 모임을 가지는 것은<br>좋지만, 많은 양의 술을<br>마시는 것은 유의해 주세요.",
    improvingDescription2: "모임 전후로 충분한 휴식을<br>취하고, 중간중간 물을<br>마시며 적정량을 지키세요.",
    improvingDescription3: "모임을 가지는 횟수를<br>조절해보세요.",
    image: "https://fourj-storage.p-e.kr/uploads/files/2024-08-04/14d81bf3-a641-4d0b-bfc6-c88fa9353eb8.svg"
  },
  {
    id: 6,
    title: "술약속 선도자",
    mainDescription: "지인들과의 술약속에 많은 양의 술을 즐기는",
    detail: "#술이 #술술 #들어가",
    improvingDescription1: "많은 양의 술을 마시는 것은<br>건강에 해로울 수 있으니<br>유의하며 마셔주세요.",
    improvingDescription2: "빈 속 음주는 피하고,<br>술을 마신 후에는<br>충분한 수분을 섭취하세요.",
    improvingDescription3: "모임 횟수를 줄이고,<br>모임 중간에 휴식을 취하며<br>적정량을 지켜주세요.",
    image: "https://fourj-storage.p-e.kr/uploads/files/2024-08-04/9b1b46b1-0213-43ab-a7aa-9fd86276ca78.svg"
  },
  {
    id: 7,
    title: "모임 충성론자",
    mainDescription: "번개 모임에서 적은 양의 술을 마시는",
    detail: "#갑자기더라도 #조금만",
    improvingDescription1: "모임에서 술을<br>즐기는 것은 좋지만,<br>과음은 피해야 합니다",
    improvingDescription2: "모임 중간중간<br>물을 마시며, 적당한<br>음주량을 지켜보세요.",
    improvingDescription3: "즐거운 모임 후에<br>건강을 위해 충분한<br>휴식을 취하세요",
    image: "https://fourj-storage.p-e.kr/uploads/files/2024-08-04/06bc0dc0-2ed7-4379-8e12-c1725323185e.svg"
  },
  {
    id: 8,
    title: "절제의 달인",
    mainDescription: "미리 계획된 약속에서 주로 적은 양의 술을 즐기는",
    detail: "#참을인 #조금만마셔",
    improvingDescription1: "자신의 주량을 잘 알고,<br>항상 적정량을 유지하는<br>것은 매우 중요합니다.",
    improvingDescription2: "술을 마신 후에 충분한<br>수분을 섭취하고 균형 잡힌<br>식사를 하세요.",
    improvingDescription3: "절제를 통해 건강을<br>유지하며 술을 즐기는<br>습관을 계속 이어가세요.",
    image: "https://fourj-storage.p-e.kr/uploads/files/2024-08-04/da9115b3-5ed8-4d95-b645-9cfd77a4b0ec.svg"
  },
   
];

export default answer;
