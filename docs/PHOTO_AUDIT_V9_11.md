# Photo Audit V9.11

- `source.unsplash.com` remaining: 24
- Real-photo contextual URLs in site: 336
- Content SVG images detected: 0
- Forms hardened with honeypot: 30

## Decision

A V9.11 abandona `source.unsplash.com` porque o navegador estava exibindo caixas vazias/alt text. As imagens de conteúdo agora usam URLs de foto real contextuais e fallback real-photo em JavaScript. Logos, favicons e ícones da marca continuam como assets próprios.

## Sample replacements

- index.html: Aula colaborativa SimpleWay com professor, estudantes e tecnologia → adult,student,online-course,laptop lock=91001
- index.html: Adult aluno practicing inglês speaking with professor → adult,student,online-course,laptop lock=91002
- index.html: Estudo com tecnologia e acompanhamento → adult,student,online-course,laptop lock=91003
- index.html: Professor guiando perguntas em aula → adult,student,online-course,laptop lock=91004
- index.html: Sala moderna de aprendizagem gamificada → adult,student,online-course,laptop lock=91005
- index.html: Revisão e estudo organizado → adult,student,online-course,laptop lock=91006
- index.html: Como aprender inglês com leveza e consistência sem depender de motivação todo di → adult,student,online-course,laptop lock=91007
- index.html: Fala Inicial APF: por que começar falando sobre você muda a relação com o inglês → adult,student,online-course,laptop lock=91008
- index.html: Histórias Guiadas: como mini-stories ajudam o cérebro a entender antes de decora → adult,student,online-course,laptop lock=91009
- index.html: Desafio das 72 Frases: o treino neural que transforma repetição em jogo → adult,student,online-course,laptop lock=91010
- index.html: Ciclo de Fala Ativa: como treinar respostas rápidas sem perder a naturalidade → adult,student,online-course,laptop lock=91011
- index.html: Revisão Inteligente e SRS: como lembrar mais estudando melhor, não mais pesado → adult,student,online-course,laptop lock=91012
- index.html: Professor em sala → adult,student,online-course,laptop lock=91013
- index.html: Grupo colaborando → adult,student,online-course,laptop lock=91014
- index.html: Sala de aula → adult,student,online-course,laptop lock=91015
- index.html: Professor guiando aula de inglês → adult,student,online-course,laptop lock=91016
- index.html: Aluno reviewing notes progress study planner → adult,student,online-course,laptop lock=91017
- index.html: Livros e histórias de estudo → adult,student,online-course,laptop lock=91018
- index.html: Comunidade de estudo em grupo → adult,student,online-course,laptop lock=91019
- blog/index.html: Blog SimpleWay Academy → adult,student,online-course,laptop lock=91020
- blog/index.html: Como aprender inglês com leveza e consistência sem depender de motivação todo di → adult,student,online-course,laptop lock=91021
- blog/index.html: Fala Inicial APF: por que começar falando sobre você muda a relação com o inglês → adult,student,online-course,laptop lock=91022
- blog/index.html: Histórias Guiadas: como mini-stories ajudam o cérebro a entender antes de decora → adult,student,online-course,laptop lock=91023
- blog/index.html: Desafio das 72 Frases: o treino neural que transforma repetição em jogo → adult,student,online-course,laptop lock=91024
- blog/index.html: Ciclo de Fala Ativa: como treinar respostas rápidas sem perder a naturalidade → adult,student,online-course,laptop lock=91025
- blog/index.html: Revisão Inteligente e SRS: como lembrar mais estudando melhor, não mais pesado → adult,student,online-course,laptop lock=91026
- blog/index.html: App como apostila digital viva: por que tocar, ouvir e falar melhora a experiênc → adult,student,online-course,laptop lock=91027
- blog/index.html: Gamificação na educação: quando XP, streak e progresso ajudam de verdade → adult,student,online-course,laptop lock=91028
- blog/index.html: Inglês para adultos ocupados: rotina simples para estudar mesmo com pouco tempo → adult,student,online-course,laptop lock=91029
- blog/index.html: SimpleWay para escolas e professores: como padronizar lições sem engessar a aula → adult,student,online-course,laptop lock=91030
- blog/index.html: Como destravar o speaking: do medo de errar ao hábito de responder → adult,student,online-course,laptop lock=91031
- blog/index.html: Conteúdo educacional e busca orgânica: como uma escola pode vender método sem vi → adult,student,online-course,laptop lock=91032
- metodologia/index.html: Ambiente colaborativo de aula SimpleWay com professor e alunos → adult,student,online-course,laptop lock=91033
- metodologia/index.html: Aluno reviewing notes progress study planner → adult,student,online-course,laptop lock=91034
- metodologia/index.html: Adult aluno practicing inglês speaking with professor → adult,student,online-course,laptop lock=91035
- metodologia/index.html: Histórias e livros usados como contexto antes da regra → adult,student,online-course,laptop lock=91036
- metodologia/index.html: Professor conduzindo perguntas de compreensão em sala → adult,student,online-course,laptop lock=91037
- metodologia/index.html: Professor asking questions alunos inglês class → adult,student,online-course,laptop lock=91038
- metodologia/index.html: Revisão inteligente com anotações e progresso do aluno → adult,student,online-course,laptop lock=91039
- metodologia/index.html: Painel digital do app SimpleWay durante uma aula online → adult,student,online-course,laptop lock=91040
- metodologia/index.html: Biblioteca e repertório para criar narrativas do curso → adult,student,online-course,laptop lock=91041
- metodologia/index.html: Equipe pedagógica organizando lesson sets por público → adult,student,online-course,laptop lock=91042
- metodologia/index.html: Equipe planejando experiência educacional → adult,student,online-course,laptop lock=91043
- metodologia/index.html: Aula presencial com professor conduzindo prática ativa → adult,student,online-course,laptop lock=91044
- simpleway-english/index.html: Online learning app laptop aluno education technology → adult,student,online-course,laptop lock=91045
- simpleway-english/index.html: Adult aluno practicing inglês speaking with professor → adult,student,online-course,laptop lock=91046
- simpleway-english/index.html: Adult aluno practicing inglês speaking with professor → adult,student,online-course,laptop lock=91047
- simpleway-english/index.html: Grupo em prática ativa de perguntas e respostas → adult,student,online-course,laptop lock=91048
- simpleway-english/index.html: Inglês learning storytelling books classroom → adult,student,online-course,laptop lock=91049
- simpleway-english/index.html: Aluno using flashcards inglês practice desk → adult,student,online-course,laptop lock=91050
- simpleway-english/index.html: Estudantes em uma jornada de aprendizagem com tecnologia → adult,student,online-course,laptop lock=91051
- simpleway-english/index.html: Adulto estudando para trabalho → adult,student,online-course,laptop lock=91052
- simpleway-english/index.html: Aula moderna em escola → adult,student,online-course,laptop lock=91053
- simpleway-english/index.html: Comunidade de estudos → adult,student,online-course,laptop lock=91054
- simpleway-english/index.html: Professor conduzindo fala ativa em uma aula → adult,student,online-course,laptop lock=91055
- simpleway-english/index.html: Professor asking questions alunos inglês class → adult,student,online-course,laptop lock=91056
- simpleway-english/index.html: Histórias e repertório para aprender inglês → adult,student,online-course,laptop lock=91057
- simpleway-english/index.html: Revisão e progresso de estudo → adult,student,online-course,laptop lock=91058
- planos/index.html: Planos SimpleWay → adult,student,online-course,laptop lock=91059
- planos/index.html: Grupo em orientação antes de começar curso de inglês → adult,student,online-course,laptop lock=91060
- planos/index.html: Online learning app laptop aluno education technology → adult,student,online-course,laptop lock=91061
- para-escolas/index.html: Sala de aula moderna com alunos → adult,student,online-course,laptop lock=91062
- para-escolas/index.html: Crianças estudando → children,classroom,learning,school lock=91063
- para-escolas/index.html: Adolescentes em aula → teenagers,students,classroom,learning lock=91064
- para-escolas/index.html: Adultos estudando → adult,student,online-course,laptop lock=91065
- para-escolas/index.html: Professor em aula de inglês com estudantes → adult,student,online-course,laptop lock=91066
- para-escolas/index.html: Crianças em atividade guiada → children,classroom,learning,school lock=91067
- para-escolas/index.html: Aluno using flashcards inglês practice desk → adult,student,online-course,laptop lock=91068
- para-escolas/index.html: Equipe pedagógica em reunião → adult,student,online-course,laptop lock=91069
- depoimentos/index.html: Depoimentos e histórias → adult,student,online-course,laptop lock=91070
- faq/index.html: Perguntas frequentes → adult,student,online-course,laptop lock=91071
- contato/index.html: Atendimento consultivo educacional → adult,student,online-course,laptop lock=91072
- criancas/index.html: Crianças → children,classroom,learning,school lock=91073
- criancas/index.html: Children learning inglês classroom playful → children,classroom,learning,school lock=91074
- adolescentes/index.html: Adolescentes → teenagers,students,classroom,learning lock=91075
- adolescentes/index.html: Teenagers learning inglês classroom → teenagers,students,classroom,learning lock=91076
- jovens/index.html: Jovens → young-adults,college,students,study lock=91077
- jovens/index.html: Young adults studying inglês laptop → young-adults,college,students,study lock=91078
- adultos/index.html: Adultos → adult,student,online-course,laptop lock=91079
- adultos/index.html: Adult professional studying inglês online → adult,student,online-course,laptop lock=91080


## Final source.unsplash check

Remaining files: 0

