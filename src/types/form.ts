export interface Option {
  id: string;
  text: string;
  value: number;
  questionId: string;
}

export interface QuestionData {
  id: string;
  questionType: string;
  text: string;
  formId: string;
  options: Option[];
  _count: {
    options: number;
    answer: number;
  };
}

export interface FormDataOne {
  id: string;
  name: string;
  about: string;
  questions: QuestionData[];
}

export interface FormData {
  id: string;
  name: string;
  about: string;
  _count: {
    questions: number;
    Answer: number;
  };
}