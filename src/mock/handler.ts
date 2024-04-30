import { http, HttpResponse, ResponseResolver } from "msw";

const getBasicTest: ResponseResolver = () => {
  return HttpResponse.json<Question.BasicTestResDto>({
    id: "1",
    questions: [
      { id: "2", type: "WRITEWORD", content: "강민규" },
      { id: "3", type: "WRITEWORD", content: "정상제" },
      { id: "4", type: "WRITEWORD", content: "박세준" },
      { id: "5", type: "WRITEWORD", content: "강민규" },
      { id: "6", type: "WRITEWORD", content: "정상제" },
      { id: "7", type: "WRITEWORD", content: "박세준" },
      { id: "8", type: "WRITEWORD", content: "강민규" },
      { id: "9", type: "WRITEWORD", content: "정상제" },
      { id: "10", type: "WRITEWORD", content: "박세준" },
    ],
  });
};

const handlers = [
  //basic test
  http.get("VITE_SERVER_URL/api/v1/basicTest", getBasicTest),
];

export default handlers;
