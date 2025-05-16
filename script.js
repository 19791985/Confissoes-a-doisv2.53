const startBtn = document.getElementById("start-btn");
const introScreen = document.getElementById("intro");
const phaseSummaryScreen = document.getElementById("phase-summary");
const quizContainer = document.getElementById("quiz-container");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const resultScreen = document.getElementById("result");
const summaryEl = document.getElementById("summary");
const continueBtn = document.getElementById("continue-btn");

const phases = [
  { title: "Fase 1: Conexão Emocional", description: "Explora o que une os nossos corações e mentes. Nesta fase, exploramos as emoções, a ternura e a ligação afetiva como casal. As perguntas são construídas para fortalecer o diálogo íntimo, a empatia e a valorização do “nós”. Cada resposta representa uma nuance emocional diferente." },
  { title: "Fase 2: Intimidade e Confiança", description: "Descobre como confiam, tocam e se entregam." },
  { title: "Fase 3: Desejo e Curiosidade", description: "Aprofunda a curiosidade e a vontade de mais." },
  { title: "Fase 4: Fantasias e Ousadia", description: "Liberta os desejos mais intensos e secretos." },
  { title: "Fase 5: Complicidade Total", description: "Sela o amor com visão de futuro e entrega." }
];

const questions = [
  {
    question: "1-O que mais te faz sentir amada?",
    answers: [
      { text: "Palavras de carinho", value: "v1" },
      { text: "Gestos inesperados", value: "v2" },
      { text: "Tempo de qualidade juntos", value: "v3" },
      { text: "Toques afetuososD", value: "v4" },
      { text: "Ajuda nas tarefas do dia a dia", value: "v5" },
    ]
  },
  {
    question: "2-O que mais fortalece a tua ligação emocional com o teu parceiro?",
    answers: [
      { text: "Conversas profundas", value: "v1" },
      { text: "Rituais românticos", value: "v2" },
      { text: "Escuta ativa", value: "v3" },
      { text: "Rir juntos", value: "v4" },
      { text: "Momentos de silêncio partilhado", value: "v5" },
    ]
  },
  {
    question: "3-Como gostarias que o teu parceiro te acarinhasse mais?",
    answers: [
      { text: "Com mais palavras doces", value: "v1" },
      { text: "Com mais mimos físicos", value: "v2" },
      { text: "Com mais surpresas", value: "v3" },
      { text: "Com mais atenção às tuas emoções", value: "v4" },
      { text: "Com mais presença no quotidiano", value: "v5" },
    ]
  },
  {
    question: "4-Quando te sentes mais conectada?",
    answers: [
      { text: "Durante uma troca de olhares sincera", value: "v1" },
      { text: "Num abraço apertado", value: "v2" },
      { text: "Após uma boa conversa", value: "v3" },
      { text: "Em momentos de silêncio cúmplice", value: "v4" },
      { text: "Ao dormir juntinhos", value: "v5" },
    ]
  },
  {
    question: "5-Qual destas situações te deixaria mais feliz?",
    answers: [
      { text: "Receber uma carta de amor", value: "v1" },
      { text: "Um jantar surpresa", value: "v2" },
      { text: "Uma massagem sem motivo", value: "v3" },
      { text: "Uma noite a dois longe de tudo", value: "v4" },
      { text: "Ouvir 'amo-te' sem ser esperado", value: "v5" },
    ]
  },
  {
    question: "6. Qual a tua linguagem do amor preferida?",
    answers: [
    { text: "Palavras de afirmação", value: "linguagem_palavras" },
    { text: "Toque físico", value: "linguagem_toque" },
    { text: "Tempo de qualidade", value: "linguagem_tempo" },
    { text: "Gestos de serviço", value: "linguagem_ajuda" },
    { text: "Presentes simbólicos", value: "linguagem_presentes" }
  ]
},
{
  question: "7. Sentes-te confortável a expressar emoções?",
  answers: [
    { text: "Sim, totalmente", value: "aberta" },
    { text: "Às vezes", value: "moderada" },
    { text: "Só com quem confio", value: "reservada" },
    { text: "Prefiro guardar para mim", value: "fechada" },
    { text: "Depende do dia", value: "variável" }
  ]
},
{
  question: "8. Como gostas de ser surpreendida?",
  answers: [
    { text: "Com palavras românticas", value: "surpresa_palavras" },
    { text: "Com um jantar especial", value: "surpresa_jantar" },
    { text: "Com um beijo inesperado", value: "surpresa_beijo" },
    { text: "Com uma escapadinha", value: "surpresa_viagem" },
    { text: "Com um presente simbólico", value: "surpresa_presente" }
  ]
},
{
  question: "9. Qual destas situações te traz mais proximidade?",
  answers: [
    { text: "Conversar sobre sentimentos", value: "proximidade_conversa" },
    { text: "Partilhar silêncios", value: "proximidade_silencio" },
    { text: "Rir juntos", value: "proximidade_riso" },
    { text: "Abraçar por minutos", value: "proximidade_abraco" },
    { text: "Cuidar um do outro", value: "proximidade_cuidado" }
  ]
},
{
  question: "10. Quando te sentes mais conectada com o teu parceiro?",
  answers: [
    { text: "Durante conversas profundas", value: "conexao_conversa" },
    { text: "Quando ele me escuta", value: "conexao_escuta" },
    { text: "Quando me toca com ternura", value: "conexao_toque" },
    { text: "Quando rimos juntos", value: "conexao_riso" },
    { text: "Quando me respeita nas decisões", value: "conexao_respeito" }
  ]
},
{
  question: "11. Qual destas frases te faz sentir mais segura?",
  answers: [
    { text: "Estou aqui para ti", value: "segura_apoio" },
    { text: "Admiro a tua força", value: "segura_respeito" },
    { text: "Confio em nós", value: "segura_confianca" },
    { text: "Gosto de ver-te crescer", value: "segura_crescimento" },
    { text: "A tua opinião é importante para mim", value: "segura_valor" }
  ]
},
{
  question: "12. Como te sentes quando o teu parceiro te ouve com atenção?",
  answers: [
    { text: "Compreendida", value: "compreendida" },
    { text: "Respeitada", value: "respeitada" },
    { text: "Amada", value: "amada" },
    { text: "Segura", value: "segura" },
    { text: "Inspirada", value: "inspirada" }
  ]
},
{
  question: "13. Qual destas ações aumenta a tua confiança na relação?",
  answers: [
    { text: "Partilhar medos", value: "confiança_medos" },
    { text: "Cumprir promessas", value: "confiança_promessas" },
    { text: "Estar presente", value: "confiança_presenca" },
    { text: "Apoiar nos desafios", value: "confiança_apoio" },
    { text: "Mostrar vulnerabilidade", value: "confiança_vulneravel" }
  ]
},
{
  question: "14. Que gesto romântico te toca mais fundo?",
  answers: [
    { text: "Carta de amor", value: "gesto_carta" },
    { text: "Olhar cúmplice", value: "gesto_olhar" },
    { text: "Declaração sincera", value: "gesto_declaracao" },
    { text: "Lembrança especial", value: "gesto_lembranca" },
    { text: "Música partilhada", value: "gesto_musica" }
  ]
},
{
  question: "15. O que é mais importante numa relação duradoura?",
  answers: [
    { text: "Comunicação", value: "relacao_comunicacao" },
    { text: "Respeito mútuo", value: "relacao_respeito" },
    { text: "Afeto constante", value: "relacao_afeto" },
    { text: "Apoio nos momentos difíceis", value: "relacao_apoio" },
    { text: "Admirar o outro", value: "relacao_admiracao" }
  ]
},
{
  question: "16. Como defines cumplicidade?",
  answers: [
    { text: "Olhares que dizem tudo", value: "cumplicidade_olhares" },
    { text: "Saber o que o outro sente", value: "cumplicidade_sensibilidade" },
    { text: "Estar presente sem pedir", value: "cumplicidade_presenca" },
    { text: "Rir dos mesmos disparates", value: "cumplicidade_riso" },
    { text: "Criar códigos próprios", value: "cumplicidade_codigos" }
  ]
},
{
  question: "17. Qual destes momentos te emociona mais?",
  answers: [
    { text: "Um abraço após discussão", value: "emocao_reconciliacao" },
    { text: "Uma partilha inesperada", value: "emocao_partilha" },
    { text: "Uma mensagem carinhosa", value: "emocao_mensagem" },
    { text: "Ser escutada em silêncio", value: "emocao_escuta" },
    { text: "Ver o outro feliz por ti", value: "emocao_orgulho" }
  ]
},
{
  question: "18. Como gostas de cuidar da vossa relação?",
  answers: [
    { text: "Conversando todos os dias", value: "cuidar_conversa" },
    { text: "Dedicando tempo a dois", value: "cuidar_tempo" },
    { text: "Sendo carinhosa/o", value: "cuidar_afeto" },
    { text: "Valorizando os detalhes", value: "cuidar_detalhes" },
    { text: "Apoiando os sonhos", value: "cuidar_sonhos" }
  ]
},
{
  question: "19. Qual destas rotinas diárias reforça a vossa união?",
  answers: [
    { text: "Café juntos", value: "rotina_cafe" },
    { text: "Desejar bom dia/boa noite", value: "rotina_boas" },
    { text: "Trocar mensagens", value: "rotina_mensagens" },
    { text: "Partilhar refeições", value: "rotina_refeicoes" },
    { text: "Assistir algo juntos", value: "rotina_serie" }
  ]
},
{
  question: "20. Que t de elogio mais te faz sorrir?",
  answers: [
    { text: "Sobre o teu olhar", value: "elogio_olhar" },
    { text: "Sobre a tua força", value: "elogio_forca" },
    { text: "Sobre o teu carinho", value: "elogio_carinho" },
    { text: "Sobre o teu corpo", value: "elogio_corpo" },
    { text: "Sobre quem és", value: "elogio_essencia" }
  ]
},
{
  question: "21. Como te sentes quando o teu parceiro te acaricia lentamente?",
  answers: [
    { text: "Segura e desejada", value: "acaricia_segura" },
    { text: "Relaxa-me profundamente", value: "acaricia_relaxa" },
    { text: "Excita-me", value: "acaricia_excita" },
    { text: "Gosto mas prefiro iniciativa minha", value: "acaricia_minha" },
    { text: "Fico desconfortável", value: "acaricia_desconforto" }
  ]
},
{
  question: "22. Qual destes toques mais te desperta?",
  answers: [
    { text: "Beijos no pescoço", value: "toque_pescoco" },
    { text: "Mãos na cintura", value: "toque_cintura" },
    { text: "Dedos entrelaçados", value: "toque_maos" },
    { text: "Toque nas costas", value: "toque_costas" },
    { text: "Abraços apertados", value: "toque_abracos" }
  ]
},
{
  question: "23. Quando estás nua/o com o teu parceiro, sentes...",
  answers: [
    { text: "Liberdade total", value: "nudez_livre" },
    { text: "Conexão profunda", value: "nudez_conexao" },
    { text: "Um misto de nervosismo e desejo", value: "nudez_nervos" },
    { text: "Foco na intimidade", value: "nudez_intimidade" },
    { text: "Insegurança às vezes", value: "nudez_insegura" }
  ]
},
{
  question: "24. Gostas que o teu parceiro te guie durante o ato?",
  answers: [
    { text: "Sim, adoro entrega", value: "guia_sim" },
    { text: "Depende do momento", value: "guia_depende" },
    { text: "Prefiro conduzir", value: "guia_nao" },
    { text: "Gosto quando há equilíbrio", value: "guia_equilibrio" },
    { text: "Só se for com ternura", value: "guia_terno" }
  ]
},
{
  question: "25. Qual é a tua posição favorita para sentires-te mais próxima?",
  answers: [
    { text: "De conchinha", value: "posicao_conchinha" },
    { text: "Rosto a rosto", value: "posicao_olhos" },
    { text: "Sobre ele", value: "posicao_cima" },
    { text: "Abraçada por trás", value: "posicao_costas" },
    { text: "Entrelaçados depois do ato", value: "posicao_descanso" }
  ]
},
{
  question: "26. Quando te sentes mais à vontade para explorar?",
  answers: [
    { text: "Quando me sinto amada", value: "explorar_amor" },
    { text: "Quando há confiança", value: "explorar_confiança" },
    { text: "Quando sou elogiada", value: "explorar_elogiada" },
    { text: "Quando sou conduzida com ternura", value: "explorar_conduzida" },
    { text: "Quando sinto controlo", value: "explorar_controle" }
  ]
},
{
  question: "27. O que significa confiança sexual para ti?",
  answers: [
    { text: "Liberdade sem julgamentos", value: "conf_sexual_liberdade" },
    { text: "Ser escutada nos limites", value: "conf_sexual_escuta" },
    { text: "Partilhar fantasias", value: "conf_sexual_partilha" },
    { text: "Rir durante o ato", value: "conf_sexual_riso" },
    { text: "Explorar sem medo", value: "conf_sexual_explorar" }
  ]
},
{
  question: "28. Já te sentiste vulnerável depois do sexo?",
  answers: [
    { text: "Sim, mas em paz", value: "vulneravel_paz" },
    { text: "Sim, como se me despisse por dentro", value: "vulneravel_nua" },
    { text: "Não, sinto-me poderosa", value: "vulneravel_forte" },
    { text: "Depende do momento", value: "vulneravel_depende" },
    { text: "Evito pensar nisso", value: "vulneravel_evito" }
  ]
},
{
  question: "29. Qual destas palavras representa melhor a intimidade para ti?",
  answers: [
    { text: "Presença", value: "intimidade_presenca" },
    { text: "Olhos nos olhos", value: "intimidade_olhos" },
    { text: "Confiança", value: "intimidade_confianca" },
    { text: "Entrega", value: "intimidade_entrega" },
    { text: "Respeito", value: "intimidade_respeito" }
  ]
},
{
  question: "30. A confiança na cama cresce com...",
  answers: [
    { text: "Diálogo aberto", value: "confianca_dial" },
    { text: "Exploração partilhada", value: "confianca_exploracao" },
    { text: "Escuta ativa", value: "confianca_escuta" },
    { text: "Elogios sinceros", value: "confianca_elo" },
    { text: "Vontade de agradar", value: "confianca_vontade" }
  ]
},
{
  question: "31. Qual destes sons te excita mais durante o sexo?",
  answers: [
    { text: "Sussurros ao ouvido", value: "som_sussurros" },
    { text: "Respiração ofegante", value: "som_respiração" },
    { text: "Palavras atrevidas", value: "som_palavras" },
    { text: "Silêncio cúmplice", value: "som_silencio" },
    { text: "Gemidos suaves", value: "som_gemidos" }
  ]
},
{
  question: "32. Em que momento te sentes mais entregue?",
  answers: [
    { text: "Durante os beijos longos", value: "entrega_beijos" },
    { text: "Quando sou acariciada devagar", value: "entrega_toque" },
    { text: "Quando me dizem o quanto me desejam", value: "entrega_palavras" },
    { text: "Ao olhar profundamente", value: "entrega_olhar" },
    { text: "Quando estou por cima", value: "entrega_dominante" }
  ]
},
{
  question: "33. Como lidas com a vergonha no momento íntimo?",
  answers: [
    { text: "Deixo-me levar", value: "vergonha_deixo" },
    { text: "Peço paciência", value: "vergonha_paciencia" },
    { text: "Mudo o foco", value: "vergonha_foco" },
    { text: "Partilho o que sinto", value: "vergonha_partilha" },
    { text: "Fico bloqueada", value: "vergonha_bloqueio" }
  ]
},
{
  question: "34. A tua entrega aumenta quando...",
  answers: [
    { text: "Há elogios constantes", value: "entrega_elo" },
    { text: "Sou guiada com confiança", value: "entrega_guia" },
    { text: "Tenho espaço para ser eu", value: "entrega_espaco" },
    { text: "O toque é terno", value: "entrega_toque" },
    { text: "Sinto desejo no ar", value: "entrega_desejo" }
  ]
},
{
  question: "35. Como te sentes ao ser despida devagar?",
  answers: [
    { text: "Desejada", value: "despida_desejo" },
    { text: "Vulnerável", value: "despida_vulneravel" },
    { text: "Excitada", value: "despida_excitada" },
    { text: "Envergonhada", value: "despida_vergonha" },
    { text: "Completamente livre", value: "despida_livre" }
  ]
},
{
  question: "36. Qual destas fantasias suaves já imaginaste?",
  answers: [
    { text: "Tomar banho juntos", value: "fantasia_banho" },
    { text: "Acordar com carícias", value: "fantasia_amanhecer" },
    { text: "Sexo num local inesperado", value: "fantasia_local" },
    { text: "Massagem com óleos", value: "fantasia_oleos" },
    { text: "Ficar só de lingerie", value: "fantasia_lingerie" }
  ]
},
{
  question: "37. Em que parte do corpo gostas mais de ser tocada?",
  answers: [
    { text: "Pescoço", value: "tocar_pescoco" },
    { text: "Coxas", value: "tocar_coxas" },
    { text: "Seios", value: "tocar_seios" },
    { text: "Costas", value: "tocar_costas" },
    { text: "Barriga", value: "tocar_barriga" }
  ]
},
{
  question: "38. Qual destes elementos cria mais confiança?",
  answers: [
    { text: "Olhar fixamente nos olhos", value: "conf_olhos" },
    { text: "Falar abertamente sobre limites", value: "conf_limites" },
    { text: "Receber validação", value: "conf_validacao" },
    { text: "Consentimento contínuo", value: "conf_consentimento" },
    { text: "Sensação de proteção", value: "conf_protecao" }
  ]
},
{
  question: "39. Quando o toque se prolonga, sentes...",
  answers: [
    { text: "Mais excitação", value: "prolonga_excita" },
    { text: "Mais conexão", value: "prolonga_conexao" },
    { text: "Mais confiança", value: "prolonga_confiança" },
    { text: "Mais respeito", value: "prolonga_respeito" },
    { text: "Mais rendição", value: "prolonga_entrega" }
  ]
},
{
  question: "40. A tua confiança cresce quando o parceiro...",
  answers: [
    { text: "Pergunta como te sentes", value: "cresce_pergunta" },
    { text: "Vai com calma", value: "cresce_calma" },
    { text: "Te elogia sem pressa", value: "cresce_elo" },
    { text: "Escuta os teus limites", value: "cresce_escuta" },
    { text: "Faz-te rir", value: "cresce_riso" }
  ]
},
{
  question: "41. O que mais te desperta desejo?",
  answers: [
    { text: "Olhares intensos", value: "desejo_olhar" },
    { text: "Toques lentos", value: "desejo_toque" },
    { text: "Sussurros provocantes", value: "desejo_som" },
    { text: "A forma como me segura", value: "desejo_mãos" },
    { text: "O clima criado no ambiente", value: "desejo_ambiente" }
  ]
},
{
  question: "42. Que tipo de jogo de sedução te atrai mais?",
  answers: [
    { text: "Olhares e silêncios", value: "seducao_olhar" },
    { text: "Palavras ousadas", value: "seducao_palavras" },
    { text: "Toques discretos", value: "seducao_toque" },
    { text: "Atos inesperados", value: "seducao_inesperado" },
    { text: "Postura dominante", value: "seducao_dominante" }
  ]
},
{
  question: "43. Já sentiste curiosidade por explorar novas zonas erógenas?",
  answers: [
    { text: "Sim, adoro descobrir", value: "curiosidade_sim" },
    { text: "Sim, mas com orientação", value: "curiosidade_orientada" },
    { text: "Prefiro manter-me no conhecido", value: "curiosidade_segura" },
    { text: "Só quando confio muito", value: "curiosidade_confianca" },
    { text: "Nunca pensei nisso", value: "curiosidade_nao" }
  ]
},
{
  question: "44. Como reages quando és surpreendida durante o ato?",
  answers: [
    { text: "Fico ainda mais excitada", value: "surpresa_excita" },
    { text: "Rendo-me ao momento", value: "surpresa_entrega" },
    { text: "Preciso de tempo para reagir", value: "surpresa_reage" },
    { text: "Fico alerta", value: "surpresa_alerta" },
    { text: "Fico desconfortável", value: "surpresa_desconforto" }
  ]
},
{
  question: "45. Qual destas fantasias já te passou pela cabeça?",
  answers: [
    { text: "Ficar vendada", value: "fantasia_vendada" },
    { text: "Usar lingerie provocante", value: "fantasia_lingerie" },
    { text: "Ser tocada em silêncio", value: "fantasia_silencio" },
    { text: "Deixar o parceiro comandar", value: "fantasia_comando" },
    { text: "Fazer amor fora de casa", value: "fantasia_fora" }
  ]
},
{
  question: "46. Quando pensas em algo mais intenso, sentes...",
  answers: [
    { text: "Desejo puro", value: "intensidade_desejo" },
    { text: "Medo e excitação", value: "intensidade_misto" },
    { text: "Curiosidade", value: "intensidade_curiosa" },
    { text: "Resistência", value: "intensidade_resistencia" },
    { text: "Vontade de experimentar", value: "intensidade_vontade" }
  ]
},
{
  question: "47. O que achas mais sensual no teu corpo?",
  answers: [
    { text: "Boca", value: "corpo_boca" },
    { text: "Olhos", value: "corpo_olhos" },
    { text: "Coxas", value: "corpo_coxas" },
    { text: "Seios ou peito", value: "corpo_seios" },
    { text: "Pele", value: "corpo_pele" }
  ]
},
{
  question: "48. Que tipo de palavras aumentam o teu desejo?",
  answers: [
    { text: "Doces e provocantes", value: "palavras_doces" },
    { text: "Sussurradas ao ouvido", value: "palavras_sussurros" },
    { text: "Ousadas e diretas", value: "palavras_ousadas" },
    { text: "Elogios
