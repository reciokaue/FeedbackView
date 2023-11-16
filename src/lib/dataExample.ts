export const data = {
  'home': [
    {
      id: "form1",
      name: "Formulário de Pesquisa 1",
      about: "Este é um formulário de pesquisa destinado a coletar informações sobre a satisfação do cliente com nossos serviços.",
      _count: {
        questions: 10,
        Answer: 250,
      },
    },
    {
      id: "form2",
      name: "Formulário de Avaliação de Produto",
      about: "Este formulário tem como objetivo coletar feedback dos usuários sobre os recursos e funcionalidades do nosso produto.",
      _count: {
        questions: 8,
        Answer: 180,
      },
    },
    {
      id: "form3",
      name: "Enquete de Opinião Pública",
      about: "Participe desta enquete e compartilhe suas opiniões sobre questões sociais e políticas atuais.",
      _count: {
        questions: 15,
        Answer: 300,
      },
    },
    {
      id: "form4",
      name: "Formulário de Feedback do Site",
      about: "Dê sua opinião sobre a experiência de uso do nosso site. Sua contribuição é importante para melhorias futuras.",
      _count: {
        questions: 5,
        Answer: 120,
      },
    },
  ],
  'topics': [
    { label: "Satisfação do Cliente", value: "1"},
    { label: "Experiência do Usuário (UX)", value: "2"},
    { label: "Produtos e Serviços", value: "3"},
    { label: "Mercado e Tendências", value: "4"},
    { label: "Atendimento ao Cliente", value: "5"},
    { label: "Opinião Pública", value: "6"},
    { label: "Preços e Valor", value: "7"},
    { label: "Marketing e Publicidade", value: "89"},
  ],
  'questionsList': [
    {
      id: "q1",
      topic: "Satisfação do Cliente",
      questionType: "Multiple Choice",
      text: "Como você classificaria nosso atendimento ao cliente?",
      formId: "form1",
      options: [
        { id: "opt1", text: "Excelente", value: 5, questionId: "q1" },
        { id: "opt2", text: "Bom", value: 4, questionId: "q1" },
        { id: "opt3", text: "Regular", value: 3, questionId: "q1" },
        { id: "opt4", text: "Ruim", value: 2, questionId: "q1" },
        { id: "opt5", text: "Muito Ruim", value: 1, questionId: "q1" },
      ],
      _count: {
        options: [
        17,
        1,
        9,
        4,
        18,
        ],
        answer: 0,
      },
    },
    {
      id: "q2",
      topic: "Experiência do Usuário (UX)",
      questionType: "Multiple Choice",
      text: "Quanto tempo você espera por uma resposta ao entrar em contato conosco?",
      formId: "form1",
      options: [
        { id: "opt6", text: "Menos de 1 hora", value: 5, questionId: "q2" },
        { id: "opt7", text: "1-2 horas", value: 4, questionId: "q2" },
        { id: "opt8", text: "3-4 horas", value: 3, questionId: "q2" },
        { id: "opt9", text: "Mais de 4 horas", value: 2, questionId: "q2" },
        { id: "opt10", text: "Não obtive resposta", value: 1, questionId: "q2" },
      ],
      _count: {
        options: [
        34,
        10,
        17,
        7,
          10,
        ],
        answer: 0,
      },
    },
    {
      id: "q3",
      topic: "Produtos e Serviços",
      questionType: "Multiple Choice",
      text: "Com que frequência você utiliza nossos serviços?",
      formId: "form1",
      options: [
        { id: "opt11", text: "Diariamente", value: 5, questionId: "q3" },
        { id: "opt12", text: "Semanalmente", value: 4, questionId: "q3" },
        { id: "opt13", text: "Mensalmente", value: 3, questionId: "q3" },
        { id: "opt14", text: "Raramente", value: 2, questionId: "q3" },
        { id: "opt15", text: "Nunca", value: 1, questionId: "q3" },
      ],
      _count: {
        options: [
          6,
          12,
          8,
          19,
          7,
        ],
        answer: 0,
      },
    },
    {
      id: "q4",
      topic: "Marketing e Publicidade",
      questionType: "Multiple Choice",
      text: "Você recomendaria nossos serviços a um amigo?",
      formId: "form1",
      options: [
        { id: "opt16", text: "Sim", value: 5, questionId: "q4" },
        { id: "opt17", text: "Não", value: 1, questionId: "q4" },
      ],
      _count: {
        options: [
          58,
          27,
        ],
        answer: 0,
      },
    },
    {
      id: "q5",
      topic: "Marketing e Publicidade0",
      questionType: "Multiple Choice",
      text: "Como você ficou sabendo dos nossos serviços?",
      formId: "form1",
      options: [
        { id: "opt18", text: "Amigos/Família", value: 5, questionId: "q5" },
        { id: "opt19", text: "Publicidade online", value: 4, questionId: "q5" },
        { id: "opt20", text: "Redes sociais", value: 3, questionId: "q5" },
        { id: "opt21", text: "Pesquisa na web", value: 2, questionId: "q5" },
        { id: "opt22", text: "Outro", value: 1, questionId: "q5" },
      ],
      _count: {
        options: [
          22,
          32,
          10,
          4,
          8,
        ],
        answer: 0,
      },
    },
    {
      id: "q6",
      topic: "Experiência do Usuário (UX)",
      questionType: "Multiple Choice",
      text: "Com que frequência você nos fornece feedback?",
      formId: "form1",
      options: [
        { id: "opt23", text: "Frequentemente", value: 5, questionId: "q6" },
        { id: "opt24", text: "Ocasionalmente", value: 4, questionId: "q6" },
        { id: "opt25", text: "Raramente", value: 3, questionId: "q6" },
        { id: "opt26", text: "Nunca", value: 1, questionId: "q6" },
      ],
      _count: {
        options: [
          5,
          12,
          22,
          6,
        ],
        answer: 0,
      },
    },
  ],
  'questionTypes': [
    { label: "Múltipla Escolha", value: "multiple_choice" },
    { label: "Verdadeiro/Falso", value: "true_false" },
    { label: "Preenchimento de Espaços em Branco", value: "fill_in_the_blank" },
    { label: "Resposta Curta", value: "short_answer" },
    { label: "Resposta Longa", value: "long_answer" },
    { label: "Escolha de Imagem", value: "image_choice" },
    { label: "Ordenação", value: "ordering" },
    { label: "Escalonamento", value: "scaling" },
  ]
}