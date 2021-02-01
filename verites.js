const colors=[
    "rgb(82,167,204)",
    "rgb(251,199,195)",
    "rgb(250,187,124)"
]
const namesPlayers=[
]
const sexe = [
    {
        "questions":"Bois 4 gorgées si tu as déjà dragué le/la conjoint(e) d’un ou d’une ami(e)."
    },
    {
        "questions":"A quand remonte la dernière fois que tu as fais l’amour? Cela déterminera ton nombre de gorgées."
    },
    {
        "questions":"Bois 3 gorgées si tu t’es déjà fais larguer."
    },
    {
        "questions":"Ceux ayant déjà fais l’amour les yeux bandés boivent 3 gorgées "
    },
    {
        "questions":"Bois 2 gorgées si tu as déjà vu quelqu’un nue dans cette pièce"
    },
    {
        "questions":"Ceux qui aiment utiliser des accessoires quand ils font l’amour boivent 4 gorgées"
    },
    {
        "questions":"Ceux qui veulent coucher avec quelqu’un dans la pièce boivent 4 gorgées"
    },
    {
        "questions":" Ceux qui ont déjà été attaché boivent 5 gorgées"
    },
    {
        "questions":" Ceux qui considèrent que les préliminaires sont essentiels boivent 4 gorgées"
    },
    {
        "questions":"Bois 5 gorgées si tu as déjà largué quelqu’un"
    },
    {
        "questions":"Ceux qui ont déjà pensé à sortir avec quelqu’un dans la pièce boivent 3 gorgées"
    },
    {
        "questions":"Si tu as déjà fais des choses en lieu publiques bois 4 gorgées"
    },
    {
        "questions":"Ceux qui ont déjà posés un lapin finissent leurs verres"
    },
    {
        "questions":"Bois 4 gorgées si tu as déjà fantasmé sur un prof"
    },
    {
        "questions":"Ceux ayant déjà fait l’amour avec une personne du même sexe distribuent 6 gorgées "
    },
    {
        "questions":"Ceux qui trouvent qu’il n’y a pas de bonne levrette sans fessée boivent 3 gorgées"
    },
    {
        "questions":" Bois 1 gorgée pour chaque personne que tu as embrassé"
    },
    {
        "questions":"Bois 1 gorgée pour chacun(e) de tes exs"
    },
    {
        "questions":"Bois 6 gorgées si tu t’es déjà masturbé en pensant à quelqu’un dans la pièce"
    },
    {
        "questions":"Si tu n’as pas eu de relation sexuelle aujourd’hui ou hier, bois 3 gorgées"
    },
    {
        "questions":"Ceux qui se sont déjà embrassés dans cette pièce boivent 2 gorgées"
    },
    {
        "questions":" Bois 3 gorgées si tu as déjà fais un jeu de rôle"
    }
    
    
]
const divers = [
    {
        "questions":"La personne aux chevets les plus longs bois 4 gorgées"
    },
    {
        "questions":"Les prudes boivent deux gorgées"
    },
    {
        "questions":"Les enfants de satan qui se sont moqués des prudes finissent leurs verres!"
    },
    {
        "questions":"Bois 3 gorgées si tu as déjà fumé"
    },
    {
        "questions":" Bois 4 gorgées si tu as déjà essayé d’arrêter de fumer"
    },
    {
        "questions":"La personne la plus jeune bois 4 gorgées"
    },
    {
        "questions":"L’actuel DJ de la soirée distribue 3 gorgées"
    },
    {
        "questions":"Ceux qui ont déjà fait du foot boivent 5 gorgées"
    },
    {
        "questions":"Bois 5 gorgées si tu joue au jeux vidéos plus de 3 fois par semaine"
    },
    {
        "questions":" La personne la plus vieille bois 4 gorgées"
    },
    {
        "questions":"Si tu portes du bleu bois 4 gorgées"
    },
    {
        "questions":"Bois 3 gorgées si tu as déjà falsifié une signature"
    },
    {
        "questions":"Bois 2 gorgées si tu as déjà pleuré devant un film"
    },
    {
        "questions":"Bois 8 gorgées si tu as déjà conduit bourré ou défoncé."
    },
    {
        "questions":"Bois 5 gorgées si tu as déjà envoyé quelqu’un à l’hôpital"
    },
    {
        "questions":"Ceux qui ont déménagés plus de 2 fois boivent 3 gorgées"
    },
    {
        "questions":"Ceux qui arrivent à toucher leur nez avec leur langue distribue 8 gorgées"
    },
    {
        "questions":"Les joueurs en couple boivent 5 gorgées"
    },
    {
        "questions":"Les célibataires boivent 5 gorgées"
    },
    {
        "questions":"Désignez tous ensemble la personne qui regarde le plus de porno, elle boira 3 gorgées"
    },
    {
        "questions":"Les bruns boivent 2 gorgées"
    },
    {
        "questions":"Les blonds boivent 2 gorgées"
    },
    {
        "questions":"Si tu t’es déjà battu bois 7 gorgées"
    },
    {
        "questions":"La personne la plus grande bois 3 gorgées"
    },
    {
        "questions":" Ceux qui ont déjà eu le coeur brisé boivent 2 gorgées"
    },
    {
        "questions":"Designez tous ensemble le/la hippi(e) du groupe qui boira 5 gorgées"
    },
    {
        "questions":"1 gorgée pour tout le monde"
    },
    {
        "questions":"Cul sec pour tout le monde"
    },
    {
        "questions":"Tout le monde bois 4 gorgées"
    },
    {
        "questions":"Buvez tous 2 gorgées"
    },
    {
        "questions":" Jeux des compliments"
    }
    
]
const actions = [
    {
        "questions":"🍺, distribue 4 gorgées au joueur que tu trouves le plus drôle bourré"
    },
    {
        "questions":"🍺, Balance ta meilleure disquette. Si les autres la trouve nul bois 5 gorgées sinon distribue les"
    },
    {
        "questions":"🍺, Distribue autant de gorgées que tu as de vêtements noirs"
    },
    {
        "questions":"🍺, Bois 3 gorgées et fait un compliment à ton voisin de droite"
    },
    {
        "questions":"🍺, Propose 3 prénoms. Si l’un d’entre eux est le deuxième ou troisième prénom d’un joueur distribue 10 gorgées"
    },
    {
        "questions":"🍺, Devine l’alcool préféré d’un joueur et distribue 5 gorgée sinon bois les"
    },
    {
        "questions":"🍺, Toute les personnes plus vieille que toi boivent 2 gorgées. Si personne ne l ‘est bois les"
    },
    {
        "questions":"🍺, Bois autant de gorgées que de bouteille dans la pièce"
    },
    {
        "questions":"🍺, Pose une question aux joueurs de ton choix. Si il refuse d’y répondre il boira 6 gorgées"
    },
    {
        "questions":"🍺, Dis quelque chose que tu as déjà fais. Ceux qui ne l’on pas fait boivent 3 gorgées"
    },
    {
        "questions":"🍺, Fais 10 pompes ( on tolère les squats) ou bois 10 gorgées "
    },
    {
        "questions":"🍺, Bois 3 gorgées et distribue 3 gorgées"
    },
    {
        "questions":"🍺, Prend une soufflette ou bois 4 gorgées"
    },
    {
        "questions":"🍺, Décide qui va finir son verre cul sec"
    },
    {
        "questions":"🍺, Distribue autant de gorgées que tu as de jouet sexuel"
    },
    {
        "questions":"🍺, Distribue autant de gorgées que tu veux mais bois les également "
    },
    {
        "questions":"🍺, Distribue autant de gorgée que de titre d’Avril Lavigne que tu pourras donner"
    },
    {
        "questions":"🍺, Distribue 4 gorgées à un joueur plus costaud que toi, sinon bois les"
    },
    {
        "questions":"🍺, Crée un mélange dans le verre de la personne de ton choix. Elle sera obligé de le boire"
    },
    {
        "questions":"🍺, Distribue 6 gorgées à la personne que tu trouves la plus belle ce soir"
    },
    {
        "questions":"🍺 et 🍻, Pierre, papier, ciseaux ! Le perdant finit son verre"
    },
    
    {
        "questions":"🍺 et 🍻, Designez le papa et la maman du groupe qui boiront 4 gorgées"
    },
    
    {
        "questions":"🍺 et 🍻, Mettez vous d’accord pour distribuez 4 gorgées à un seul joueur"
    },
    
    {
        "questions":"🍺 et 🍻, Faites un bras de fer. Celui qui perd doit boire 5 gorgées"
    },
    
    {
        "questions":"🍺 et 🍻, Désignez un couple qui boirons toute leurs gorgées ensemble."
    },
    
   
]