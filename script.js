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
    { text: "Elogios sinceros", value: "palavras_elo" },
    { text: "Confissões íntimas", value: "palavras_confissao" }
  ]
},
{
  question: "49. Qual destes momentos provoca mais vontade?",
  answers: [
    { text: "Após um beijo longo", value: "momento_beijo" },
    { text: "Durante uma massagem", value: "momento_massagem" },
    { text: "Num abraço demorado", value: "momento_abraco" },
    { text: "Quando te tocam por baixo da roupa", value: "momento_toque" },
    { text: "Quando ouves algo ousado", value: "momento_audio" }
  ]
},
{
  question: "50. Curiosidade e desejo para ti são...",
  answers: [
    { text: "Irmãos inseparáveis", value: "curioso_desejo" },
    { text: "Depende da fase", value: "curioso_fase" },
    { text: "Sensações distintas", value: "curioso_distinto" },
    { text: "Complementares no amor", value: "curioso_complemento" },
    { text: "Forças que assustam e atraem", value: "curioso_dual" }
  ]
},
{
  question: "51. Em que altura do dia sentes mais vontade?",
  answers: [
    { text: "Ao acordar", value: "vontade_manha" },
    { text: "Durante a noite", value: "vontade_noite" },
    { text: "Depois de um momento romântico", value: "vontade_romance" },
    { text: "Durante um beijo intenso", value: "vontade_beijo" },
    { text: "Sem hora marcada", value: "vontade_espontanea" }
  ]
},
{
  question: "52. Qual destes locais desperta mais a tua imaginação erótica?",
  answers: [
    { text: "Quarto com velas", value: "local_velas" },
    { text: "Chuveiro quente", value: "local_chuveiro" },
    { text: "Sala escura", value: "local_sala" },
    { text: "Ao ar livre", value: "local_natureza" },
    { text: "Carro em movimento", value: "local_carro" }
  ]
},
{
  question: "53. Já imaginaste deixar-te levar sem dizer uma palavra?",
  answers: [
    { text: "Sim, seria intenso", value: "levar_intenso" },
    { text: "Sim, com confiança total", value: "levar_confiança" },
    { text: "Só em fantasia", value: "levar_fantasia" },
    { text: "Não, preciso de comunicar", value: "levar_nao" },
    { text: "Talvez, se sentir entrega", value: "levar_talvez" }
  ]
},
{
  question: "54. Que peça de roupa te faz sentir mais sexy?",
  answers: [
    { text: "Lingerie", value: "roupa_lingerie" },
    { text: "Camisa dele/dela", value: "roupa_camisa" },
    { text: "Nada", value: "roupa_nua" },
    { text: "Vestido justo", value: "roupa_justa" },
    { text: "Saltos altos ou acessórios", value: "roupa_acessorio" }
  ]
},
{
  question: "55. Fantasias para ti são...",
  answers: [
    { text: "Uma parte natural do desejo", value: "fantasia_natural" },
    { text: "Algo que quero explorar", value: "fantasia_explorar" },
    { text: "Privadas, só para mim", value: "fantasia_privada" },
    { text: "Tema delicado", value: "fantasia_delicada" },
    { text: "Algo que pode unir o casal", value: "fantasia_uniao" }
  ]
},
{
  question: "56. O que achas de explorar jogos eróticos a dois?",
  answers: [
    { text: "Sim, quero experimentar", value: "jogos_sim" },
    { text: "Depende da intensidade", value: "jogos_intensidade" },
    { text: "Nunca pensei nisso", value: "jogos_nunca" },
    { text: "Tenho curiosidade", value: "jogos_curiosidade" },
    { text: "Só com regras claras", value: "jogos_regras" }
  ]
},
{
  question: "57. Como te sentes ao ser observada durante o ato?",
  answers: [
    { text: "Excitada", value: "olhar_excita" },
    { text: "Tímida mas lisonjeada", value: "olhar_timid" },
    { text: "Conectada", value: "olhar_conecta" },
    { text: "Insegura", value: "olhar_insegura" },
    { text: "Fico a desejar mais", value: "olhar_desejo" }
  ]
},
{
  question: "58. O que te faria libertar ainda mais o desejo?",
  answers: [
    { text: "Ambiente ideal", value: "liberta_ambiente" },
    { text: "Palavras certas", value: "liberta_palavras" },
    { text: "Toque prolongado", value: "liberta_toque" },
    { text: "Sentir total segurança", value: "liberta_seguranca" },
    { text: "Ser provocada aos poucos", value: "liberta_provoca" }
  ]
},
{
  question: "59. Já pensaste em explorar inversão de papéis?",
  answers: [
    { text: "Sim, é algo que me excita", value: "inversao_sim" },
    { text: "Tenho curiosidade", value: "inversao_curiosidade" },
    { text: "Prefiro os papéis tradicionais", value: "inversao_nao" },
    { text: "Depende da entrega", value: "inversao_depende" },
    { text: "Acho que traria novidade", value: "inversao_novidade" }
  ]
},
{
  question: "60. Em que momento sentes mais desejo pelo teu parceiro?",
  answers: [
    { text: "Quando me surpreende", value: "momento_surpresa" },
    { text: "Quando me elogia", value: "momento_elo" },
    { text: "Quando me toca por trás", value: "momento_toque" },
    { text: "Quando me observa em silêncio", value: "momento_silencio" },
    { text: "Quando me deixa conduzir", value: "momento_conduzir" }
  ]
},
{
  question: "61. Já fantasiaste em ser amarrada ou imobilizada?",
  answers: [
    { text: "Sim, desperta-me muito", value: "bondage_sim" },
    { text: "Sim, mas nunca experimentei", value: "bondage_curiosa" },
    { text: "Não, mas gostaria de saber mais", value: "bondage_interesse" },
    { text: "Não faz parte das minhas fantasias", value: "bondage_nao" },
    { text: "Talvez com muita confiança", value: "bondage_condicional" }
  ]
},
{
  question: "62. O que pensas sobre vendar os olhos durante o sexo?",
  answers: [
    { text: "Excitante e misterioso", value: "venda_excita" },
    { text: "Gostaria de experimentar", value: "venda_curiosa" },
    { text: "Só com alguém de muita confiança", value: "venda_confiança" },
    { text: "Não me atrai", value: "venda_nao" },
    { text: "Já experimentei e gostei", value: "venda_sim" }
  ]
},
{
  question: "63. Já sentiste vontade de dominar o teu parceiro?",
  answers: [
    { text: "Sim, gosto da ideia", value: "dominar_sim" },
    { text: "Sim, mas só em certos momentos", value: "dominar_parcial" },
    { text: "Prefiro ser dominada", value: "dominar_nao" },
    { text: "Depende da entrega", value: "dominar_depende" },
    { text: "Nunca pensei nisso", value: "dominar_nunca" }
  ]
},
{
  question: "64. Qual destes acessórios mais te intriga?",
  answers: [
    { text: "Algemas", value: "acessorio_algemas" },
    { text: "Vendas", value: "acessorio_venda" },
    { text: "Cordas de shibari", value: "acessorio_cordas" },
    { text: "Plumas ou chicotes leves", value: "acessorio_pluma" },
    { text: "Mordaça suave", value: "acessorio_mordaca" }
  ]
},
{
  question: "65. Como te sentes ao explorar fantasias mais ousadas?",
  answers: [
    { text: "Livre e desejada", value: "ousadia_livre" },
    { text: "Com alguma timidez", value: "ousadia_timida" },
    { text: "Curiosa mas cautelosa", value: "ousadia_cautela" },
    { text: "Confiante", value: "ousadia_confiante" },
    { text: "Em conflito interno", value: "ousadia_conflito" }
  ]
},
{
  question: "66. Já experimentaste sexo anal ou tens curiosidade?",
  answers: [
    { text: "Sim e gosto", value: "anal_sim" },
    { text: "Tenho curiosidade", value: "anal_curiosa" },
    { text: "Gostava de tentar com preparação", value: "anal_explorar" },
    { text: "Não me sinto à vontade", value: "anal_nao" },
    { text: "Só em fantasia", value: "anal_fantasia" }
  ]
},
{
  question: "67. Em termos de dominação e submissão, gostarias de...",
  answers: [
    { text: "Ser submissa/o em certos momentos", value: "ds_submissao" },
    { text: "Explorar o papel dominante", value: "ds_dominancia" },
    { text: "Variar entre os dois", value: "ds_switch" },
    { text: "Ainda estou a descobrir", value: "ds_explorar" },
    { text: "Não tenho interesse", value: "ds_nao" }
  ]
},
{
  question: "68. Que palavras ou ordens te excitam num contexto íntimo?",
  answers: [
    { text: "Comando firme e carinhoso", value: "ordem_firme" },
    { text: "Sugestões provocantes", value: "ordem_sugestao" },
    { text: "Repetição do meu nome", value: "ordem_nome" },
    { text: "Silêncio com olhar intenso", value: "ordem_olhar" },
    { text: "Nada, prefiro suavidade", value: "ordem_suave" }
  ]
},
{
  question: "69. Como te sentes ao ver o parceiro tomar controlo?",
  answers: [
    { text: "Excitada e rendida", value: "controlo_excita" },
    { text: "Depende do momento", value: "controlo_depende" },
    { text: "Prefiro partilhar o controlo", value: "controlo_partilha" },
    { text: "Adoro quando é firme mas terno", value: "controlo_terno" },
    { text: "Gosto mais de conduzir", value: "controlo_nao" }
  ]
},
{
  question: "70. Qual o teu nível atual de conforto em explorar práticas mais ousadas?",
  answers: [
    { text: "Muito confortável", value: "nivel_muito" },
    { text: "Confortável com limites", value: "nivel_limites" },
    { text: "Curiosa mas insegura", value: "nivel_curiosa" },
    { text: "Preciso de mais confiança", value: "nivel_precisa" },
    { text: "Não quero explorar", value: "nivel_nao" }
  ]
},
{
  question: "71. Como reages quando és empurrada suavemente contra a parede?",
  answers: [
    { text: "Sinto-me desejada", value: "parede_desejo" },
    { text: "Rendo-me ao momento", value: "parede_entrega" },
    { text: "Fico surpresa e excitada", value: "parede_surpresa" },
    { text: "Depende da força", value: "parede_dependente" },
    { text: "Não gosto de gestos bruscos", value: "parede_nao" }
  ]
},
{
  question: "72. Já sentiste vontade de ser completamente guiada durante o sexo?",
  answers: [
    { text: "Sim, é algo que me excita", value: "guiada_excita" },
    { text: "Sim, mas com delicadeza", value: "guiada_doce" },
    { text: "Prefiro decidir junto", value: "guiada_compartilha" },
    { text: "Depende da entrega emocional", value: "guiada_emocao" },
    { text: "Não me identifico com isso", value: "guiada_nao" }
  ]
},
{
  question: "73. Qual destas cenas te desperta mais?",
  answers: [
    { text: "Ser lentamente despida", value: "cena_despir" },
    { text: "Ser amarrada e explorada", value: "cena_bondage" },
    { text: "Dar ordens e ver cumprir", value: "cena_dominar" },
    { text: "Ficar à mercê do parceiro", value: "cena_submissao" },
    { text: "Ver o parceiro em prazer", value: "cena_observar" }
  ]
},
{
  question: "74. Já pensaste em usar códigos ou palavras seguras?",
  answers: [
    { text: "Sim, acho essencial", value: "codigo_essencial" },
    { text: "Sim, para sentir-me segura", value: "codigo_segura" },
    { text: "Nunca usei mas faria sentido", value: "codigo_curiosa" },
    { text: "Acho que só em práticas específicas", value: "codigo_contexto" },
    { text: "Não vejo necessidade", value: "codigo_nao" }
  ]
},
{
  question: "75. Quão importante é para ti haver espaço para fantasias no casal?",
  answers: [
    { text: "É fundamental", value: "espaco_fundamental" },
    { text: "Ajuda a manter a chama", value: "espaco_chama" },
    { text: "Aproxima e fortalece", value: "espaco_proximidade" },
    { text: "Só se for confortável para ambos", value: "espaco_consentido" },
    { text: "Prefiro manter-me na realidade", value: "espaco_realidade" }
  ]
},
{
  question: "76. Qual destas dinâmicas te atrai mais?",
  answers: [
    { text: "Dominação doce", value: "dinamica_doce" },
    { text: "Submissão rendida", value: "dinamica_submissao" },
    { text: "Equilíbrio de poderes", value: "dinamica_equilibrio" },
    { text: "Troca de papéis ocasional", value: "dinamica_troca" },
    { text: "Liberdade total sem rótulos", value: "dinamica_livre" }
  ]
},
{
  question: "77. Como te sentes ao ser provocada lentamente?",
  answers: [
    { text: "Fico arrepiada", value: "provocada_arrepio" },
    { text: "Sinto uma tensão deliciosa", value: "provocada_tensao" },
    { text: "Quero mais e mais", value: "provocada_desejo" },
    { text: "Fico vulnerável", value: "provocada_vulneravel" },
    { text: "Preciso de tempo para me entregar", value: "provocada_tempo" }
  ]
},
{
  question: "78. Já pensaste em incluir brinquedos na intimidade?",
  answers: [
    { text: "Sim, gosto da ideia", value: "brinquedo_sim" },
    { text: "Tenho curiosidade", value: "brinquedo_curiosa" },
    { text: "Já experimentei", value: "brinquedo_experiencia" },
    { text: "Só se o parceiro quiser", value: "brinquedo_consentido" },
    { text: "Não me atrai", value: "brinquedo_nao" }
  ]
},
{
  question: "79. Quando o parceiro sussurra 'és minha', sentes...",
  answers: [
    { text: "Desejo total", value: "sussurro_desejo" },
    { text: "Sensação de posse doce", value: "sussurro_posse" },
    { text: "Confiança para me render", value: "sussurro_rendida" },
    { text: "Curiosidade e poder", value: "sussurro_curiosa" },
    { text: "Desconforto", value: "sussurro_nao" }
  ]
},
{
  question: "80. O que te deixaria à beira da rendição total?",
  answers: [
    { text: "Ser amarrada e acariciada com delicadeza", value: "rendir_amarrada" },
    { text: "Ser guiada com palavras e toque", value: "rendir_guiada" },
    { text: "Ser provocada com paciência", value: "rendir_paciencia" },
    { text: "Sentir-me completamente segura", value: "rendir_seguranca" },
    { text: "Ter controlo mas escolher entregar-me", value: "rendir_controle" }
  ]
},
{
  question: "81. O que mais fortalece a tua cumplicidade com o teu parceiro?",
  answers: [
    { text: "Rir juntos", value: "complicidade_riso" },
    { text: "Olhares cúmplices", value: "complicidade_olhar" },
    { text: "Partilhar desejos", value: "complicidade_desejos" },
    { text: "Superar desafios juntos", value: "complicidade_dificuldades" },
    { text: "Cuidar um do outro", value: "complicidade_cuidado" }
  ]
},
{
  question: "82. Quando pensas em envelhecer com ele(a), sentes...",
  answers: [
    { text: "Ternura e confiança", value: "envelhecer_ternura" },
    { text: "Segurança e desejo", value: "envelhecer_desejo" },
    { text: "Alegria e tranquilidade", value: "envelhecer_paz" },
    { text: "Medo e esperança", value: "envelhecer_medo" },
    { text: "Excitação por continuar a descobrir", value: "envelhecer_excita" }
  ]
},
{
  question: "83. Qual destas práticas te aproxima mais do teu parceiro?",
  answers: [
    { text: "Massagens a dois", value: "aproxima_massagem" },
    { text: "Conversas ao adormecer", value: "aproxima_conversas" },
    { text: "Explorar juntos o prazer", value: "aproxima_prazer" },
    { text: "Respeitar o silêncio do outro", value: "aproxima_silencio" },
    { text: "Celebrar pequenas vitórias", value: "aproxima_celebra" }
  ]
},
{
  question: "84. O que achas que o teu parceiro mais ama em ti?",
  answers: [
    { text: "A forma como amo", value: "ama_amor" },
    { text: "O meu toque", value: "ama_toque" },
    { text: "O meu corpo", value: "ama_corpo" },
    { text: "A minha entrega", value: "ama_entrega" },
    { text: "A minha mente", value: "ama_mente" }
  ]
},
{
  question: "85. Qual destas palavras representa o vosso amor?",
  answers: [
    { text: "Entrega", value: "amor_entrega" },
    { text: "Confiança", value: "amor_confianca" },
    { text: "Desejo", value: "amor_desejo" },
    { text: "Eternidade", value: "amor_eterno" },
    { text: "Cumplicidade", value: "amor_cumplicidade" }
  ]
},
{
  question: "86. Qual é o maior tesouro da vossa intimidade?",
  answers: [
    { text: "A liberdade de sermos quem somos", value: "tesouro_liberdade" },
    { text: "O toque sincero", value: "tesouro_toque" },
    { text: "A confiança sem máscaras", value: "tesouro_confianca" },
    { text: "O desejo constante", value: "tesouro_desejo" },
    { text: "O respeito mútuo", value: "tesouro_respeito" }
  ]
},
{
  question: "87. Quando pensas no vosso futuro, o que desejas?",
  answers: [
    { text: "Paixão duradoura", value: "futuro_paixao" },
    { text: "Intimidade profunda", value: "futuro_intimidade" },
    { text: "Diálogos verdadeiros", value: "futuro_dialogo" },
    { text: "Surpresas constantes", value: "futuro_surpresa" },
    { text: "Estar sempre em sintonia", value: "futuro_sintonia" }
  ]
},
{
  question: "88. Em que momento te sentes mais conectada com ele(a)?",
  answers: [
    { text: "Após o prazer", value: "conexao_pos" },
    { text: "Durante abraços longos", value: "conexao_abraco" },
    { text: "Quando choram juntos", value: "conexao_choro" },
    { text: "Quando sorriem sem razão", value: "conexao_sorriso" },
    { text: "Quando fazem amor em silêncio", value: "conexao_silencio" }
  ]
},
{
  question: "89. O que o teu corpo diz quando ele(a) se aproxima?",
  answers: [
    { text: "Entrega total", value: "corpo_entrega" },
    { text: "Tensão doce", value: "corpo_tensao" },
    { text: "Calor e arrepio", value: "corpo_calor" },
    { text: "Segurança", value: "corpo_seguranca" },
    { text: "Desejo em expansão", value: "corpo_desejo" }
  ]
},
{
  question: "90. Qual destas frases gostarias de ouvir mais vezes?",
  answers: [
    { text: "És tudo o que eu procuro", value: "frase_procuro" },
    { text: "O teu prazer é o meu prazer", value: "frase_prazer" },
    { text: "Amo o que somos", value: "frase_amor" },
    { text: "Estou sempre aqui para ti", value: "frase_presenca" },
    { text: "Quero fazer-te feliz todos os dias", value: "frase_feliz" }
  ]
},
{
  question: "91. Como defines fazer amor com alguém que amas profundamente?",
  answers: [
    { text: "É transcendência", value: "definicao_transcendencia" },
    { text: "É uma fusão de almas", value: "definicao_fusao" },
    { text: "É um refúgio", value: "definicao_refugio" },
    { text: "É a expressão mais bonita do amor", value: "definicao_expressao" },
    { text: "É entrega sem palavras", value: "definicao_entrega" }
  ]
},
{
  question: "92. O que gostarias de experimentar com o teu parceiro como celebração da vossa união?",
  answers: [
    { text: "Uma viagem sensual", value: "celebracao_viagem" },
    { text: "Um retiro a dois", value: "celebracao_retiro" },
    { text: "Uma noite sem limites", value: "celebracao_noite" },
    { text: "Escreverem cartas íntimas", value: "celebracao_cartas" },
    { text: "Um novo ritual erótico", value: "celebracao_ritual" }
  ]
},
{
  question: "93. Como sentes o teu corpo quando confias plenamente?",
  answers: [
    { text: "Relaxado e aberto", value: "confia_relaxado" },
    { text: "Sensível e vibrante", value: "confia_sensivel" },
    { text: "Atraído e presente", value: "confia_presente" },
    { text: "Totalmente entregue", value: "confia_entregue" },
    { text: "Curioso e em paz", value: "confia_paz" }
  ]
},
{
  question: "94. O que é essencial para manter viva a chama do vosso desejo?",
  answers: [
    { text: "Criatividade e surpresa", value: "chama_criatividade" },
    { text: "Escuta e presença", value: "chama_presenca" },
    { text: "Momentos só a dois", value: "chama_momentos" },
    { text: "Partilha de fantasias", value: "chama_fantasia" },
    { text: "Reinventar o toque", value: "chama_toque" }
  ]
},
{
  question: "95. Que tipo de surpresa íntima gostarias de receber?",
  answers: [
    { text: "Um quarto decorado com velas", value: "surpresa_quarto" },
    { text: "Uma noite onde ele/a comanda tudo", value: "surpresa_comando" },
    { text: "Uma dança sensual privada", value: "surpresa_danca" },
    { text: "Um presente erótico com bilhete", value: "surpresa_presente" },
    { text: "Ser despida lentamente ao som de música", value: "surpresa_musica" }
  ]
},
{
  question: "96. Qual destas atitudes mantém viva a vossa intimidade?",
  answers: [
    { text: "Tocar mesmo sem intenção sexual", value: "atitude_toque" },
    { text: "Conversar sobre fantasias", value: "atitude_conversa" },
    { text: "Dar espaço para crescer", value: "atitude_espaco" },
    { text: "Relembrar bons momentos", value: "atitude_memoria" },
    { text: "Agradecer após o prazer", value: "atitude_gratidao" }
  ]
},
{
  question: "97. Qual é o teu maior desejo íntimo ainda por realizar?",
  answers: [
    { text: "Explorar novas zonas do corpo", value: "desejo_exploracao" },
    { text: "Entregar-me sem hesitar", value: "desejo_entrega" },
    { text: "Conduzir o ato do início ao fim", value: "desejo_conduzir" },
    { text: "Viver um dia inteiro de prazer", value: "desejo_dia" },
    { text: "Ver e ser vista sem vergonha", value: "desejo_aceitacao" }
  ]
},
{
  question: "98. O que mais admiras no teu parceiro durante a intimidade?",
  answers: [
    { text: "A forma como me observa", value: "admira_olhar" },
    { text: "A entrega sem limites", value: "admira_entrega" },
    { text: "A paciência com que me toca", value: "admira_paciencia" },
    { text: "O desejo que não esconde", value: "admira_desejo" },
    { text: "O respeito em cada gesto", value: "admira_respeito" }
  ]
},
{
  question: "99. Se pudesses dizer algo íntimo sem julgamento, dirias...",
  answers: [
    { text: "O que mais me excita é...", value: "diria_excita" },
    { text: "Gostava de explorar contigo...", value: "diria_explorar" },
    { text: "Sinto vontade de me entregar mais quando...", value: "diria_entrega" },
    { text: "Às vezes tenho medo de...", value: "diria_medo" },
    { text: "Quero surpreender-te com...", value: "diria_surpresa" }
  ]
},
{
  question: "100. Depois de tudo, o que sentes neste momento?",
  answers: [
    { text: "Mais conectada", value: "final_conexao" },
    { text: "Com vontade de continuar", value: "final_continuar" },
    { text: "Mais segura em partilhar", value: "final_segura" },
    { text: "Com desejo renovado", value: "final_desejo" },
    { text: "Em paz e amada", value: "final_paz" }
  ]
}
];

let currentPhase = 0;
let currentQuestionIndex = 0;
let results = [];

startBtn.onclick = () => {
  introScreen.classList.add("hidden");
  showPhaseSummary();
};

continueBtn.onclick = () => {
  phaseSummaryScreen.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  showQuestion();
};

function showPhaseSummary() {
  const phase = phases[currentPhase];
  document.getElementById("phase-title").textContent = phase.title;
  document.getElementById("phase-description").textContent = phase.description;
  phaseSummaryScreen.classList.remove("hidden");
}

function showQuestion() {
  const q = questions[currentQuestionIndex];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";
  q.answers.forEach((a) => {
    const btn = document.createElement("button");
    btn.textContent = a.text;
    btn.onclick = () => {
      results.push(a.value);
      currentQuestionIndex++;
      if (currentQuestionIndex % 20 === 0 && currentQuestionIndex < questions.length) {
        currentPhase++;
        quizContainer.classList.add("hidden");
        showPhaseSummary();
      } else if (currentQuestionIndex < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    };
    answersEl.appendChild(btn);
  });
}
function showResult() {
  quizContainer.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  const categorias = {
    emocao: 0,
    desejo: 0,
    submissao: 0,
    dominancia: 0,
    curiosidade: 0,
    seguranca: 0,
    exploracao: 0,
    cumplicidade: 0
  };

  // Analisa cada valor escolhido
  results.forEach(value => {
    if (value.includes("emo")) categorias.emocao++;
    if (value.includes("desejo") || value.includes("excita")) categorias.desejo++;
    if (value.includes("submiss")) categorias.submissao++;
    if (value.includes("dominar") || value.includes("comando")) categorias.dominancia++;
    if (value.includes("curiosa") || value.includes("explorar")) categorias.curiosidade++;
    if (value.includes("segura") || value.includes("confiança")) categorias.seguranca++;
    if (value.includes("fantasia") || value.includes("experiencia")) categorias.exploracao++;
    if (value.includes("cumplicidade") || value.includes("presenca")) categorias.cumplicidade++;
  });

  let resumo = "Resumo psicológico da jornada:\n\n";

  if (categorias.emocao >= 8) {
    resumo += "- Procura uma ligação emocional profunda.\n";
  } else if (categorias.desejo >= 8) {
    resumo += "- Vive intensamente o desejo e o prazer.\n";
  }

  if (categorias.curiosidade >= 6) {
    resumo += "- Demonstra forte curiosidade por novas experiências.\n";
  }

  if (categorias.submissao > categorias.dominancia) {
    resumo += "- Mostra vontade de entrega e rendição guiada.\n";
  } else if (categorias.dominancia > categorias.submissao) {
    resumo += "- Tem tendências de controlo e condução do momento íntimo.\n";
  }

  if (categorias.seguranca >= 6) {
    resumo += "- A confiança é essencial para o seu prazer.\n";
  }

  if (categorias.exploracao >= 6) {
    resumo += "- Está pronta para explorar fantasias e novas dimensões da relação.\n";
  }

  if (categorias.cumplicidade >= 6) {
    resumo += "- Valoriza uma conexão completa: emocional, física e espiritual.\n";
  }

  resumo += "\nObrigado pelo teu tempo, pela entrega e por esta partilha íntima. Que esta jornada vos aproxime muito mais.";

  summaryEl.textContent = resumo;
}
