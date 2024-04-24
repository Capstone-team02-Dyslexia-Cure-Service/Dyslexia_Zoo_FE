import { http, HttpResponse, ResponseResolver } from "msw";

const getBasicTest: ResponseResolver = () => {
  return HttpResponse.json<Question.QuestionResDto>({
    id: "1",
    type: "WRITEWORD",
    content: "사과",
  });
};

const handlers = [
  //basic test
  http.get("보안 상 API 공개 불가", getBasicTest),
];

export default handlers;
