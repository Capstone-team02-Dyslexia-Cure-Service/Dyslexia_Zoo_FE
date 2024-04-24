import { http, HttpResponse, ResponseResolver } from "msw";

const getBasicTest: ResponseResolver = () => {
  return HttpResponse.json<Question.BasicTestResDto>({
    id: "1",
    questions: [
      { id: "2", type: "WRITEWORD", content: "강민규" },
      { id: "3", type: "WRITEWORD", content: "정상제" },
      { id: "4", type: "WRITEWORD", content: "박세준" },
    ],
  });
};

const handlers = [
  //basic test
  http.get("/api/v1/basicTest", getBasicTest),
];

export default handlers;
