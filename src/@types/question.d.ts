declare namespace Question {
  //DTO
  export interface QuestionResDto {
    id: string;
    type: "READWORD" | "WRITEWORD" | "READSENTENSE";
    content: string;
  }
}
