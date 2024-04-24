declare namespace Question {
  //DTO
  export interface BasicTestResDto {
    id: string;
    questions: QuestionResDto[];
  }

  export interface QuestionResDto {
    id: string;
    type: "READWORD" | "WRITEWORD" | "READSENTENSE";
    content: string;
  }
}
